import React from "react";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <p>Hello World 😎</p>
      <button onClick={methodDoesNotExistHere}>Break the world</button>;
    </div>
  );
}

export default App;
