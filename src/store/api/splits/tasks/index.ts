import { Task } from "../../../../types/task-types";
import { baseApi } from "../..";
import {
  FetchTaskDetailsResponse,
  FetchTaskResponse,
} from "../../../../types/response-types";
import { Endpoints } from "../../endpoints";
import { FetchTaskDetailsRequest } from "../../../../types/request-types";

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
      fetchTaskDetails: build.query<Task, FetchTaskDetailsRequest>({
        query: ({ id }) => `${Endpoints.Tasks}/${id}`,
        providesTags: [{ type: "Tasks" }],
        transformResponse: (response: FetchTaskDetailsResponse) => {
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
      updateTask: build.mutation<Task, Partial<Task>>({
        query: (task) => ({
          url: `${Endpoints.Tasks}/${task.id}`,
          method: "PUT",
          body: task,
        }),
        invalidatesTags: [{ type: "Tasks" }],
      }),
    };
  },

  overrideExisting: false,
});

export const {
  useLazyFetchTaskQuery,
  useLazyFetchTaskDetailsQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
} = taskApi;
