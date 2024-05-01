import { Task } from "../../../../types/task-types";
import { baseApi } from "../..";
import { FetchTaskResponse } from "../../../../types/response-types";
import { Endpoints } from "../../endpoints";

export const taskApi = baseApi.injectEndpoints({
  endpoints: (build) => {
    return {
      fetchTask: build.query<Task[], void>({
        query: () => Endpoints.Tasks,
        providesTags: [{ type: "Tasks" }],
        transformResponse: (response: FetchTaskResponse) => {
          if (!response) throw new Error("Invalid server response");
          return response;
        },
      }),
      createTask: build.mutation<Task, Partial<Task>>({
        query: (task) => ({
          url: Endpoints.Tasks,
          method: "POST",
          body: task,
        }),
        invalidatesTags: [{ type: "Tasks" }],
      }),
    };
  },

  overrideExisting: false,
});

export const { useLazyFetchTaskQuery, useCreateTaskMutation } = taskApi;
