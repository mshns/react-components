import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Api } from './constants/unsplash';
import { ICardItem, ICardList, ISearchResponse } from '../../widgets/cardItem/types/interfaces';

export const unsplashApi = createApi({
  reducerPath: 'unsplashApi',
  baseQuery: fetchBaseQuery({ baseUrl: Api.URL }),
  endpoints: (builder) => ({
    getSearchPhotos: builder.query<ICardList, string>({
      query: (query) => {
        return query === ''
          ? `${Api.Random}${Api.ClientID}`
          : `${Api.Search}${query}${Api.ClientID}`;
      },
      transformResponse: (response: ICardList & ISearchResponse) => {
        return response.results ? response.results : response;
      },
    }),
    getPhotoById: builder.query<ICardItem, string>({
      query: (id) => `${Api.ByID}${id}?${Api.ClientID}`,
    }),
  }),
});

export const { useGetSearchPhotosQuery, useGetPhotoByIdQuery } = unsplashApi;
