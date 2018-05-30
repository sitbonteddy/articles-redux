import React from "react";
import List from "./List";
import Form from "./Form";
import "../../main.css";

const App = () => (
  <div>
    <div className="col-md-4 offset-md-2">
      <h2>Articles</h2>
      <List />
    </div>
    <div className="col-md-4 offset-md-2">
      <h2>Add a new article</h2>
      <Form />
    </div>
  </div>
);
export default App;
