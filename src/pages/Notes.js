import React from "react";
import TitleSection from "../components/about/TitleSection/TitleSection";
import AllNotes from "../components/notes/AllNotes";

const Notes = () => {
  return (
    <div>
      <TitleSection title="Notes" />
      <AllNotes />
    </div>
  );
};

export default Notes;
