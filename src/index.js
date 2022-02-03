import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { GraphQLClient, ClientContext } from "graphql-hooks";
import App from "./App";

const graphQLClient = new GraphQLClient({
  url: "https://rickandmortyapi.com/graphql"
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ClientContext.Provider value={graphQLClient}>
      <App />
    </ClientContext.Provider>
  </StrictMode>,
  rootElement
);
