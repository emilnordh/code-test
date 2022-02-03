import { useQuery } from "graphql-hooks";
import React, { useState, useCallback } from "react";
import Button from "./Button";
import "./styles.css";

const EPISODES_QUERY = `
  query characters($cursor: Int = 1) {
    characters(page: $cursor) {
      info {
        pages
      }
      results {
        id
      }
    }
  }
`;

export default function App() {
  const query = useQuery(EPISODES_QUERY);
  const [cursor, setCursor] = useState(0);
  const total = query.data?.characters.info.pages;

  const handlePreviousClick = useCallback(() => {
    setCursor(cursor - 1);
  }, []);

  const handleNextClick = () => {
    setCursor(cursor + 1);
  };

  return (
    <div className="App">
      <ul>
        <li>No data</li>
      </ul>
      <nav>
        <Button onClick={handlePreviousClick}>Previous</Button>
        {cursor} / {total}
        <Button onClick={handleNextClick}>Next</Button>
      </nav>
    </div>
  );
}
