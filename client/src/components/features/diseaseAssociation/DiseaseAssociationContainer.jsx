import { CircularProgress } from "@mui/material";
import * as React from "react";
import DiseaseAssociationTable from './DiseaseAssociationTable'
import {GetDiseases,GetAssociationData} from  './../../../utils/queries'
import useFetch from "./hooks/useFetch";

/**
 * Container to DiseaseAssociation component
 * Use this place to get/set the data 
 */
export default function DiseaseAssociationContainer() {

  // get the graph data for Disease & association from server
  const [loadingDiseases,diseases] = useFetch(GetDiseases)
  const [loadingAssociation,associationData] =  useFetch(GetAssociationData())
  
  // Display Loader till all the results fetched
  if(loadingDiseases || loadingAssociation) return <CircularProgress data-testid="loader-testId"></CircularProgress>
  return (
    <DiseaseAssociationTable associations={associationData.associations}/>
  );
}
