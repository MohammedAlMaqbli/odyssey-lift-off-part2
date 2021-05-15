import { RESTDataSource } from "apollo-datasource-rest";

class SpaceCatsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://fake-spacecats-rest-api.cat/";
  }

  getSpaceCats() {
    return this.get("spacecats");
  }
  getMissions(catId) {
    return this.get(`spacecats/${catId}/missions`);
  }
}
export default SpaceCatsAPI;
