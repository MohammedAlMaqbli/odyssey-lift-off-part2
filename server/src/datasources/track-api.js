import { RESTDataSource } from "apollo-datasource-rest";

class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";
  }

  getSpaceCats() {
    return this.get("spacecats");
  }
  getMissions(catId) {
    return this.get(`spacecats/${catId}/missions`);
  }
}
export default TrackAPI;
