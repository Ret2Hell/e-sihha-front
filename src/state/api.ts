/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseQueryApi, FetchArgs } from "@reduxjs/toolkit/query";
import { toast } from "sonner";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Clerk } from "@clerk/clerk-js";

const getToken = async () => {
  if (typeof window !== "undefined" && window.Clerk) {
    const token = await window.Clerk.session?.getToken();
    console.log("Token:", token); // Debugging line to check the token
    return token ? `Bearer ${token}` : "";
  }
  return "";
};

const customBaseQuery = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: any
) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    prepareHeaders: async (headers) => {
      if (typeof window !== "undefined" && window.Clerk) {
        const token = await getToken();
        if (token) {
          headers.set("Authorization", token);
        }
      }
      return headers;
    },
  });
  try {
    const result: any = await baseQuery(args, api, extraOptions);
    console.log("API Result:", result);

    if (result.error) {
      const errorData = result.error.data;
      const errorMessage =
        errorData?.message ||
        result.error.status.toString() ||
        "An error occurred";
      toast.error(`Error: ${errorMessage}`);
    }

    const isMutationRequest =
      (args as FetchArgs).method && (args as FetchArgs).method !== "GET";
    if (isMutationRequest) {
      const successMessage = result.data?.message;
      if (successMessage) toast.success(successMessage);
    }

    if (result.data) {
      result.data = result.data.data;
    } else if (
      result.error?.status === 204 ||
      result.meta?.response?.status === 24
    ) {
      return { data: null };
    }
    return result;
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    return { error: { status: "FETCH_ERROR", error: errorMessage } };
  }
};

export const api = createApi({
  baseQuery: customBaseQuery,
  reducerPath: "api",
  tagTypes: ["Appointment", "Doctor"],
  endpoints: (builder) => ({
    /*
    ==========================
    AI SYMPTOMS CHECKER ENDPOINT
    ==========================
    */
    aiSymptomsChecker: builder.mutation({
      query: (symptoms) => ({
        url: "/symptom-checker",
        method: "POST",
        body: { symptoms },
      }),
    }),

    /*
    ==========================
    APPOINTMENTS ENDPOINTS
    ==========================
    */
    getAppointments: builder.query({
      query: () => ({
        url: "/appointments",
        method: "GET",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }: { id: string }) => ({
                type: "Appointment" as const,
                id,
              })),
              { type: "Appointment", id: "LIST" },
            ]
          : [{ type: "Appointment", id: "LIST" }],
    }),

    getAppointmentsByDateAndDoctor: builder.query({
      query: ({ date, doctorId }: { date: string; doctorId: string }) => ({
        url: `/appointments?date=${date}&doctorId=${doctorId}`,
        method: "GET",
      }),
      providesTags: (result, error, { date, doctorId }) => [
        { type: "Appointment", id: `${doctorId}-${date}` },
      ],
    }),

    createAppointment: builder.mutation({
      query: (appointmentData) => ({
        url: "/appointments",
        method: "POST",
        body: appointmentData,
      }),
      invalidatesTags: [{ type: "Appointment", id: "LIST" }],
    }),

    /*
    ==========================
    DOCTORS ENDPOINTS
    ========================== 
    */
    getDoctors: builder.query({
      query: () => ({
        url: "/doctors",
        method: "GET",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }: { id: string }) => ({
                type: "Doctor" as const,
                id,
              })),
              { type: "Doctor", id: "LIST" },
            ]
          : [{ type: "Doctor", id: "LIST" }],
    }),
    getDoctorById: builder.query({
      query: (id) => ({
        url: `/doctors/${id}/profile`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "Doctor", id }],
    }),
  }),
});

export const {
  useAiSymptomsCheckerMutation,
  useGetAppointmentsQuery,
  useGetAppointmentsByDateAndDoctorQuery,
  useCreateAppointmentMutation,
  useGetDoctorsQuery,
  useGetDoctorByIdQuery,
} = api;
