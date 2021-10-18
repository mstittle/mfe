import React from "react";
import {
  useQuery,
  gql
} from "@apollo/client";
const BOOKS = gql`
  query getbooks {
    books {
      title
    }
  }
`;


const App = () => {
  const { loading, error, data } = useQuery(BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { books } = data;

  const view = books.map( book => {
    <div>{book.title}</div>
  });

  return (
    <div style={{
      margin: "10px",
      padding:"10px",
      textAlign:"center",
      backgroundColor:"cyan"
    }}>
      <h1 >Tile2</h1>
      {view}
    </div>
  )
}

export default App;

