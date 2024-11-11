/* eslint-disable @typescript-eslint/no-explicit-any */

import { BaseQueryFn, fetchBaseQuery } from "@reduxjs/toolkit/query";
import type { BaseQueryApi, FetchArgs } from "@reduxjs/toolkit/query/react";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { AxiosError, AxiosRequestConfig } from "axios";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";
import qs from "qs";
import { REHYDRATE } from "redux-persist";
import type { RootState } from "./store";
import { updateAccessToken, updateRefreshToken } from "./slices/auth.slide";

type AxiosErrorType = {
  status?: number | null;
  data?: AxiosErrorDataType | any;
  message?: string;
};

export type AxiosErrorDataType = {
  message?: string;
  data?: any;
  ts?: string;
};

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" }
  ): BaseQueryFn<
    {
      url: string;
      method?: AxiosRequestConfig["method"];
      body?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      headers?: AxiosRequestConfig["headers"];
    },
    BaseQueryApi,
    AxiosErrorType
  > =>
  async ({ url, method, body, params, headers }, { signal }) => {
    try {
      const currentLanguage = window?.localStorage?.getItem("lang");
      const result = await axios({
        url: url.startsWith("http") ? url : baseUrl + url,
        method: method ?? "GET",
        data: body,
        timeout: typeof window === "undefined" ? 30000 : 600000,
        params,
        ...(typeof window === "undefined"
          ? {
              validateStatus: () => true,
            }
          : {}),
        signal,
        headers: {
          ...headers,
          ...{
            "X-TimeZone-Offset": `${new Date().getTimezoneOffset()}`,
            "X-Locale-Code": `${currentLanguage}`,
            // 'X-Locale-Code': LocaleCode.ENGLISH,
          },
        },
        paramsSerializer: {
          indexes: false,
        },
      });
      return { data: result.data };
      // return result;
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      const error: AxiosErrorType = {
        status: err.response?.status ?? null,
        data: err.response?.data || err.message,
      };
      return {
        error,
      };
    }
  };
const baseQueryWithReauth =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" }
  ): BaseQueryFn<FetchArgs, unknown, AxiosErrorDataType> =>
  async (args, api, extraOptions) => {
    try {
      const currentLanguage = window?.localStorage?.getItem("lang");
      const store = api.getState() as RootState;
      const access_token = window?.localStorage?.getItem("accessToken");
      let baseQuery = fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers) => {
          headers.set("X-TimeZone-Offset", `${new Date().getTimezoneOffset()}`);
          headers.set("X-Locale-Code", `${currentLanguage}`);
          if (access_token) {
            headers.set("authorization", `Bearer ${access_token}`);
          }
          return headers;
        },
        paramsSerializer: (params) => qs.stringify(params, { indices: false }),
      });

      let result = await baseQuery(args, api, extraOptions);
      const refresh_token = window?.localStorage?.getItem("refreshToken");
      if (result.error && result.error.status === 401) {
        try {
          // const store = api.getState() as RootState;
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_ID_BASE_URL}/auth/token/refresh?refresh_token=${refresh_token}`
          );
          const { accessToken, refreshToken } = response.data.data;
          api.dispatch(updateAccessToken(accessToken));
          api.dispatch(updateRefreshToken(refreshToken));
          window.localStorage.setItem("accessToken", accessToken);
          window.localStorage.setItem("refreshToken", refreshToken);
          baseQuery = fetchBaseQuery({
            baseUrl,
            prepareHeaders: (headers) => {
              headers.set(
                "X-TimeZone-Offset",
                `${new Date().getTimezoneOffset()}`
              );
              headers.set("X-Locale-Code", `${currentLanguage}`);

              headers.set("authorization", `Bearer ${accessToken}`);
              return headers;
            },
          });
          result = await baseQuery(args, api, extraOptions);
        } catch (error) {
          api.dispatch(updateAccessToken(""));
          api.dispatch(updateRefreshToken(""));
          window.localStorage.removeItem("accessToken");
          window.localStorage.removeItem("refreshToken");
        }
      }
      return result;
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      const error: AxiosErrorType = {
        status: err.response?.status ?? null,
        data: err.response?.data || err.message,
      };
      return {
        error,
      };
    }
  };

export const api = createApi({
  baseQuery: baseQueryWithReauth({
    baseUrl: process.env.NEXT_PUBLIC_API_APP_BASE_URL as string,
  }),
  extractRehydrationInfo(action: any, { reducerPath }) {
    if (action.type === REHYDRATE) {
      return action.payload?.[reducerPath];
    }
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
    return undefined;
  },
  // tagTypes: [],
  endpoints: () => ({}),
});

export const apiWithoutToken = createApi({
  baseQuery: axiosBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_APP_BASE_URL as string,
  }),
  extractRehydrationInfo(action: any, { reducerPath }) {
    if (action.type === REHYDRATE) {
      return action.payload?.[reducerPath];
    }
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
    return undefined;
  },
  // tagTypes: [],
  endpoints: () => ({}),
});

export const nextjsRoutes = createApi({
  reducerPath: "nextjsRoutes",
  baseQuery: axiosBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_CURRENT_URL as string,
  }),

  extractRehydrationInfo(action: any, { reducerPath }) {
    if (action.type === REHYDRATE) {
      return action.payload?.[reducerPath];
    }
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
    return undefined;
  },
  endpoints: () => ({}),
});
