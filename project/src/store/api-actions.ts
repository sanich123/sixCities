import { ApiRoutes, AuthorizationStatus, AUTH_FAIL_MESSAGE, AUTH_FAIL_REQUEST, COMMENT_POST_ERROR, FAVORITES_CHANGE_ERROR, NETWORK_ERROR  } from '../const';
import { dropToken, saveToken } from '../services/token';
import { ThunkActionResult } from '../types/reducer';
import { AuthData, Offer, OfferDTO, PostComment, Review, ReviewDTO } from '../types/types';
import { commentRequest, commentRequestFail, failedComment, loadFavorites, loadHotels, loadNearBy, loadUniqHotel, loadUniqHotelComments, networkIsAvailable, requireAuthorization, requireLogout } from './actions';
import { toast } from 'react-toastify';
import { adaptOffer } from '../utils/utils';

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
      toast.warn(NETWORK_ERROR);
    }
  };

export const fetchUniqHotel = (id: number | undefined): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const { data } = await api.get(`${ApiRoutes.Hotels}/${id}`);
      dispatch(loadUniqHotel(adaptOffer(data)));
    }
    catch {
      toast.warn(NETWORK_ERROR);
    }
  };

export const fetchComments = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const { data } = await api.get(`${ApiRoutes.Comments}/${id}`);
      dispatch(loadUniqHotelComments(adaptComments(data)));
    }
    catch {
      toast.warn(NETWORK_ERROR);
    }
  };

export const fetchNearBy = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const { data } = await api.get(`${ApiRoutes.Hotels}/${id}${ApiRoutes.NearBy}`);
      dispatch(loadNearBy(adaptOffers(data)));
    }
    catch {
      toast.warn(NETWORK_ERROR);
    }
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
      toast.warn(COMMENT_POST_ERROR);
      dispatch(failedComment());
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
      dispatch(networkIsAvailable());
      toast.warn(NETWORK_ERROR);
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
      toast.warn(FAVORITES_CHANGE_ERROR);
    }
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(ApiRoutes.Logout);
    dropToken();
    dispatch(requireLogout());
    dispatch(fetchHotels());
  };
