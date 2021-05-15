import { RESTDataSource } from "apollo-datasource-rest";

class SpaceCatsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://fake-spacecats-rest-api.cat/";
  }

  getTracksForHome() {
    return this.get("tracks");
  }

  getAuthor(authorId) {
    return this.get(`author/${authorId}`);
  }
}
export default SpaceCatsAPI;
