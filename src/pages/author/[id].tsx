import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

const GET_AUTHOR_DETAILS = gql`
  query GetMovieDetails($id: ID!) {
    author(id: $id) {
      id
      name
      birthYear
      eyeColor
      gender
      height
      homeworld {
        id
        name
      }
      species {
        id
        name
      }
    }
  }
`;

export default function AuthorDetails() {
  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data } = useQuery(GET_AUTHOR_DETAILS, {
    variables: { id },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const author = data.author;

  return (
    <div>
      <h1>{author.nem}</h1>
      <p>Birth Year: {author.birthYear}</p>
      <p>Eye Color: {author.eyeColor}</p>
      <p>Gender: {author.gender}</p>
      <p>Height: {author.height}</p>
      <h2>Homeworld</h2>
      <ul>
        {author.homeworld.map((homeworld: any) => (
          <li key={homeworld.id}>{homeworld.name}</li>
        ))}
      </ul>
      <h2>Species</h2>
      <ul>
        {author.species.map((specie: any) => (
          <li key={specie.id}>{specie.name}</li>
        ))}
      </ul>
    </div>
  );
}
