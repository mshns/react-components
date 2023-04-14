import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Api } from './constants/unsplash';
import { ICardItem, ICardList } from '../../widgets/cardItem/types/interfaces';

export const unsplashApi = createApi({
  reducerPath: 'unsplashApi',
  baseQuery: fetchBaseQuery({ baseUrl: Api.URL }),
  endpoints: (builder) => ({
    getRandomPhotos: builder.query<ICardList, void>({
      query: () => `${Api.Random}${Api.ClientID}`,
    }),
    getSearchPhotos: builder.query<ICardList, string>({
      query: (query) => `${Api.Search}${query}${Api.ClientID}`,
    }),
    getPhotoById: builder.query<ICardItem, string>({
      query: (id) => `${Api.ByID}${id}?${Api.ClientID}`,
    }),
  }),
});

export const { useGetRandomPhotosQuery, useGetSearchPhotosQuery, useGetPhotoByIdQuery } =
  unsplashApi;
