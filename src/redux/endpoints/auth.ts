import { apiWithoutToken } from "../api";
import { api } from "../api";

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getMe: build.query<any, unknown>({
      query: () => ({
        url: `/auth/me`,
      }),
    }),

    handleLogin: build.mutation<any, unknown>({
      query: (body: Record<string, any>) => ({
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        url: `/auth/login`,
        method: "POST",
        body: new URLSearchParams(body).toString(),
      }),
    }),
    handleRegister: build.mutation<any, unknown>({
      query: (body: Record<string, any>) => ({
        url: `/auth/register`,
        method: "POST",
        params: body,
      }),
    }),
    testHello: build.mutation<any, unknown>({
      query: () => ({
        url: `/hello/get`,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as AuthApi };

export const {
  useGetMeQuery,
  useHandleLoginMutation,
  useHandleRegisterMutation,
  useTestHelloMutation,
} = injectedRtkApi;
