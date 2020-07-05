import React from 'react';

// https://react-bootstrap.github.io/getting-started/introduction/
import 'bootstrap/dist/css/bootstrap.min.css';
// https://www.npmjs.com/package/font-awesome
import 'font-awesome/css/font-awesome.min.css';
import './App.css'; 

import Main from "./Components/Main";

import { gql } from "apollo-boost";

export const ROOT_QUERY = gql`
  query getAllList {
    totalLists
    allLists {
      title
      author
      status
    }
  }
`;

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
