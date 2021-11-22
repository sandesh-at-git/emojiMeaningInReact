import React from "react";
import Heading from "./Heading";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function renderAllEntries(data) {
  return (
    <Entry
      key={data.id}
      name={data.name}
      emoji={data.emoji}
      description={data.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <Heading />
      <dl className="dictionary">{emojipedia.map(renderAllEntries)}</dl>
    </div>
  );
}

export default App;
