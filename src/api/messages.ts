import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type Message = {
  _id: string;
  author: string;
  createdAt: string;
  message: string;
};

export const messagesApi = createApi({
  reducerPath: 'messagesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMessages: builder.query<Message[], void>({
      query: () => '/api/v1/messages',
    }),
  }),
});

export const { useGetMessagesQuery } = messagesApi;
