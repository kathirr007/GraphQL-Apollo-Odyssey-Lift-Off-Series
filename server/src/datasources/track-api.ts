import { RESTDataSource } from "@apollo/datasource-rest";
import { AuthorModel, TrackModel } from "../model";
import { Track } from "../types";

export class TrackAPI extends RESTDataSource {
  baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

  getTracksForHome() {
    return this.get<TrackModel[]>("tracks");
  }

  getAuthor(authorId: string) {
    return this.get<AuthorModel>(`author/${encodeURIComponent(authorId)}`);
  }

  getTrack(trackId: string) {
    return this.get<TrackModel>(`track/${encodeURIComponent(trackId)}`);
  }

  getTrackModules(trackId) {
    return this.get(`track/${trackId}/modules`);
  }

  incrementTrackViews(trackId: string) {
    return this.patch<TrackModel>(`track/${trackId}/numberOfViews`);
  }
}
