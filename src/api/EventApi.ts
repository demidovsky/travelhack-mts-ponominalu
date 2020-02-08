import axios, { AxiosInstance } from "axios";
import config from "../config/config.json";

export type EventGetAll = { start_date: string; end_date: string };

export class EventApi {
  private api = axios.create({
    baseURL: config.api.ponominalu,
    headers: { "Content-Type": "application/json" }
  });

  getAll = (params: EventGetAll) => {
    return axios.get("/subevents/actual/get", { params });
  };
}
