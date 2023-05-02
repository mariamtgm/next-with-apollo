import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

const GET_MOVIE_DETAILS = gql`
  query GetMovieDetails($id: ID!) {
    movie(id: $id) {
      id
      title
      episodeID
      director
      releaseDate
      openingCrawl
      characters {
        id
        name
      }
    }
  }
`;

export default function MovieDetails() {
  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data } = useQuery(GET_MOVIE_DETAILS, {
    variables: { id },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const movie = data.movie;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>Director: {movie.director}</p>
      <p>Release Date: {movie.releaseDate}</p>
      <p>Opening Crawl: {movie.openingCrawl}</p>
      <h2>Characters</h2>
      <ul>
        {movie.characters.map((character: any) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
}
