import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
  retry,
} from "@reduxjs/toolkit/query/react";
import { env } from "../../config/env";

const endpointsURLsToAvoidRetry = ["/api/token"];

const staggeredBaseQuery = retry(
  fetchBaseQuery({
    baseUrl: env.urls.apiUrl,
  }),
  {
    retryCondition: (
      error: FetchBaseQueryError,
      baseQueryArgs,
      { attempt }
    ) => {
      if (endpointsURLsToAvoidRetry.includes(baseQueryArgs.url)) return false;
      if (attempt > 5) return false;

      if (error.status === "TIMEOUT_ERROR" || error.status === "FETCH_ERROR")
        return true;
      if (typeof error.status !== "number") return false;

      return error.status === 429 || error.status > 500;
    },
  }
);

const baseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await staggeredBaseQuery(args, api, extraOptions);

  return result;
};

export const baseApi = createApi({
  reducerPath: "api",
  tagTypes: ["Tasks"],
  baseQuery,
  endpoints: () => ({}),
});
