import { APIRoute, AuthorizationStatus } from '../const';
import { dropToken, saveToken, Token } from '../services/token';
import { ThunkActionResult } from '../types/reducer';
import { AuthData, Offer, OfferFromServer } from '../types/types';
import { loadHotels, requireAuthorization, requireLogout } from './actions';

const adaptToClient = (data: OfferFromServer[]): Offer[] => data.map((offer: OfferFromServer) => {
  const { ...adaptedOffers } = {
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
  };

  return adaptedOffers;
});

export const fetchHotels = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get(APIRoute.Hotels);
    dispatch(loadHotels(adaptToClient(data)));
  };

export const checkAuth = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login)
      .then(() => {
        dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      });
  };

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.AUTH));
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };
