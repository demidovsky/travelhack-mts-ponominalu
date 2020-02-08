import { EventApi, EventGetAll } from "../api/EventApi";

export class EventStore {
  private api = new EventApi();

  data: any[] = [];

  load = (params: EventGetAll) => {
    return this.api.getAll(params);
  };
}
