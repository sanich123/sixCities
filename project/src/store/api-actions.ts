import { ApiRoute, AuthorizationStatus } from '../const';
import { dropToken, saveToken } from '../services/token';
import { ThunkActionResult } from '../types/reducer';
import { AuthData, Offer, OfferDTO, Review, ReviewDTO } from '../types/types';
import { loadHotels, loadNearBy, loadUniqHotel, loadUniqHotelComments, requireAuthorization, requireLogout } from './actions';
import { toast } from 'react-toastify';

const AUTH_FAIL_MESSAGE = 'Не забудьте авторизоваться!';

const adaptOffer = (offer: OfferDTO): Offer => ({
  ...offer,
  host: {
    ...offer.host,
    isPro: offer.host['is_pro'],
    avatarUrl: offer.host['avatar_url'],
  },
  isFavorite: offer['is_favorite'],
  isPremium: offer['is_premium'],
  maxAdults: offer['max_adults'],
  previewImage: offer['preview_image'],
});

const adaptOffers = (data: OfferDTO[]): Offer[] =>
  data.map((offer) => adaptOffer(offer));

const adaptComments = (comments: ReviewDTO[]): Review[] =>
  comments.map((comment: ReviewDTO) => ({
    ...comment,
    user: {
      ...comment.user,
      isPro: comment.user['is_pro'],
      avatarUrl: comment.user['avatar_url'],
    },
  }));

export const fetchHotels = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get(ApiRoute.Hotels);
    dispatch(loadHotels(adaptOffers(data)));
  };

export const fetchUniqHotel = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get(`${ApiRoute.Hotels}/${id}`);
    dispatch(loadUniqHotel(adaptOffer(data)));
  };

export const fetchComments = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get(`${ApiRoute.Comments}/${id}`);
    dispatch(loadUniqHotelComments(adaptComments(data)));
  };

export const fetchNearBy = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get(`${ApiRoute.Hotels}/${id}${ApiRoute.NearBy}`);
    dispatch(loadNearBy(adaptOffers(data)));
  };


export const checkAuth = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const { data: { email }} = await api.get(ApiRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.AUTH, email));
    }
    catch {
      toast.warn(AUTH_FAIL_MESSAGE);
    }
  };

export const loginAction = ({ login: email, password }: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const { data } = await api.post(ApiRoute.Login, { email, password });
    const { email: emailAuth, token } = data;
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.AUTH, emailAuth));
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(ApiRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };
