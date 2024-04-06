import React from "react";
import { Layout } from "../components";
import { gql } from "../__generated__";
import { useQuery } from "@apollo/client";
import type { Track } from "../__generated__/graphql";
import TrackCard from "../containers/track-card";
import QueryResult from "../components/query-result";

const TRACKS = gql(`
  query GetTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`);

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { data, error, loading } = useQuery(TRACKS);

  // if (loading) return "Loading...";
  // if (error) return `ERROR! ${error.message}`;

  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.tracksForHome?.map((track: Track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
