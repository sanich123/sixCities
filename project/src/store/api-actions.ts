import { dropToken, saveToken } from '../services/token';
import { ThunkActionResult } from '../types/reducer';
import { AuthData, Offer, OfferDTO, PostComment, Review, ReviewDTO } from '../types/types';
import { toast } from 'react-toastify';
import { adaptOffer } from '../utils/utils';
import { loadHotels } from './reducer/app/app-actions';
import { isAvailableNetwork, loadFavorites, loadNearByHotels, loadSelectedHotel, loadSelectedHotelComments } from './reducer/data/process-data-actions';
import { commentRequest, commentRequestFail, requireAuthorization, requireLogout } from './reducer/user/user-actions';
import { ApiRoutes, AuthorizationStatus, FailMessages } from '../const';

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
    try {
      const { data } = await api.get(ApiRoutes.Hotels);
      dispatch(loadHotels(adaptOffers(data)));
    }
    catch {
      toast.warn(FailMessages.NetworkError);
    }
  };

export const fetchUniqHotel = (id: number | undefined): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const { data } = await api.get(`${ApiRoutes.Hotels}/${id}`);
      dispatch(loadSelectedHotel(adaptOffer(data)));
    }
    catch {
      dispatch(isAvailableNetwork());
      toast.warn(FailMessages.NetworkError);
    }
  };

export const fetchComments = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const { data } = await api.get(`${ApiRoutes.Comments}/${id}`);
      dispatch(loadSelectedHotelComments(adaptComments(data)));
    }
    catch {
      toast.warn(FailMessages.NetworkError);
    }
  };

export const fetchNearBy = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const { data } = await api.get(`${ApiRoutes.Hotels}/${id}${ApiRoutes.NearBy}`);
      dispatch(loadNearByHotels(adaptOffers(data)));
    }
    catch {
      toast.warn(FailMessages.NetworkError);
    }
  };

export const checkAuth = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const { data: { email }} = await api.get(ApiRoutes.Login);
      dispatch(requireAuthorization(AuthorizationStatus.AUTH, email));
    }
    catch {
      toast.warn(FailMessages.AuthFailMessage);
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
    catch (err: any) {
      err.message === FailMessages.ServerFailResponse ? toast.warn(FailMessages.AuthFailResponse)
        : toast.warn(FailMessages.AuthFailRequest);
    }
  };

export const postComment = ({ id, rating, comment }: PostComment): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    dispatch(commentRequest());
    try {
      const { data } = await api.post(`${ ApiRoutes.Comments }/${ id }`, { rating, comment });
      dispatch(loadSelectedHotelComments(adaptComments(data)));
      dispatch(commentRequestFail());
    }
    catch {
      toast.warn(FailMessages.CommentPostError);
      dispatch(commentRequestFail());
    }
  };

export const fetchFavorites = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const { data } = await api.get(ApiRoutes.Favorites);
      dispatch(loadFavorites(adaptOffers(data)));
    }
    catch {
      dispatch(isAvailableNetwork());
      toast.warn(FailMessages.NetworkError);
    }
  };

export const changeFavorite = (id: number | undefined, isFavorite: number): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      await api.post(`${ ApiRoutes.Favorites}/${ id }/${ isFavorite }`);
      dispatch(fetchHotels());

      if (id) {
        dispatch(fetchUniqHotel(id));
      }
      dispatch(fetchFavorites());
    }
    catch {
      toast.warn(FailMessages.NetworkError);
    }
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(ApiRoutes.Logout);
    dropToken();
    dispatch(requireLogout());
    dispatch(fetchHotels());
  };
