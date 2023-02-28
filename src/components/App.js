import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import SubmissionForm from "./SubmissionForm";


function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isSorted, setSorted] = useState(true)

  return (
    <div className="app">
      <Header setSearchTerm = {setSearchTerm} searchTerm = {searchTerm} setSorted = {setSorted} isSorted = {isSorted}/>
      <SubmissionForm></SubmissionForm>
      <ListingsContainer searchTerm={searchTerm} isSorted = {isSorted} />
    </div>
  );
}

export default App;
