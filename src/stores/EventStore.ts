import { EventApi, EventGetAll } from "../api/EventApi";

export class EventStore {
  private api = new EventApi();

  data: any[] = [];

  load = async (params: EventGetAll) => {
    try {
      const res = await this.api.getAll(params);
      this.data = res.data.message
      return this.data
    } catch (err) {
      throw err;
    }
  };
}
