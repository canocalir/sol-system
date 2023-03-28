import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const planetsApi = createApi({
  reducerPath: "planetsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.le-systeme-solaire.net/rest/bodies",
  }),
  endpoints: (builder) => ({
    getPlanetData: builder.query({
      query: (name) => `/${name}`,
    }),
    getMoonData: builder.query({
      query: (name) => `/${name}`,
    }),
  }),
});

export const { useGetPlanetDataQuery, useGetMoonDataQuery } = planetsApi;
