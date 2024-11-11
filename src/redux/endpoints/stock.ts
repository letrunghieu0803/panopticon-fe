import { apiWithoutToken } from "../api";
import { api } from "../api";

export interface ItemStockType {
  id: string;
  Symbol: string;
}

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getStocksList: build.query<ItemStockType[], unknown>({
      query: (params: { page: number }) => ({
        url: `/report/api/research`,
        params,
      }),
    }),
    getDetailStock: build.mutation<any, unknown>({
      query: (id: number) => ({
        url: `/report/api/research/${id}`,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as AuthApi };

export const { useGetStocksListQuery, useGetDetailStockMutation } =
  injectedRtkApi;
