import * as React from "react";
import DiseaseAssociationContainer from "./features/diseaseAssociation/DiseaseAssociationContainer";
import Main from "./layouts/main";

export default function App() {

  return(
    <Main>
      <DiseaseAssociationContainer/>
    </Main>
  )
}