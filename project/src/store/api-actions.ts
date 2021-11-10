import { ApiRoutes, AuthorizationStatus } from '../const';
import { dropToken, saveToken } from '../services/token';
import { ThunkActionResult } from '../types/reducer';
import { AuthData, Offer, OfferDTO, PostComment, Review, ReviewDTO } from '../types/types';
import { commentRequest, commentRequestFail, loadHotels, loadNearBy, loadUniqHotel, loadUniqHotelComments, requireAuthorization, requireLogout } from './actions';
import { toast } from 'react-toastify';

const AUTH_FAIL_MESSAGE = 'Не забудьте авторизоваться!';
const AUTH_FAIL_REQUEST = 'Не удалось отправить логин и пароль на сервер, отсутствует соединение с интернет';
const COMMENT_POST_ERROR = 'Не удалось отправить комментарий, неполадки с сетью';

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
    const { data } = await api.get(ApiRoutes.Hotels);
    dispatch(loadHotels(adaptOffers(data)));
  };

export const fetchUniqHotel = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get(`${ApiRoutes.Hotels}/${id}`);
    dispatch(loadUniqHotel(adaptOffer(data)));
  };

export const fetchComments = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get(`${ApiRoutes.Comments}/${id}`);
    dispatch(loadUniqHotelComments(adaptComments(data)));
  };

export const fetchNearBy = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get(`${ApiRoutes.Hotels}/${id}${ApiRoutes.NearBy}`);
    dispatch(loadNearBy(adaptOffers(data)));
  };


export const checkAuth = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const { data: { email }} = await api.get(ApiRoutes.Login);
      dispatch(requireAuthorization(AuthorizationStatus.AUTH, email));
    }
    catch {
      toast.warn(AUTH_FAIL_MESSAGE);
    }
  };

export const loginAction = ({ login: email, password }: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const { data } = await api.post(ApiRoutes.Login, { email, password });
      const { email: emailAuth, token } = data;
      saveToken(token);
      dispatch(requireAuthorization(AuthorizationStatus.AUTH, emailAuth));
    }
    catch {
      toast.warn(AUTH_FAIL_REQUEST);
    }
  };

export const postComment = ({ id, rating, comment }: PostComment): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    dispatch(commentRequest());
    try {
      const { data } = await api.post(`${ ApiRoutes.Comments }/${ id }`, { rating, comment });
      dispatch(loadUniqHotelComments(adaptComments(data)));
    }
    catch {
      dispatch(commentRequestFail());
      toast.warn(COMMENT_POST_ERROR);
    }
  };

export const changeFavorite = (id: number | undefined): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      await api.post(`${ ApiRoutes.Favorites}/${id}/1`);
    }
    catch {
      toast.warn('Не удалось добавить в избранное');
    }
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(ApiRoutes.Logout);
    dropToken();
    dispatch(requireLogout());
  };
