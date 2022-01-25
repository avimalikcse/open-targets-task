import { useState, useEffect } from "react";
import fetchGraphQL from "../../../../utils/network";

/**
 * Custom hook to get the graphQl data
 * 
 * @param {*} query Graphql Query
 * @param {*} variables Variable that needs to be passed in GQL query
 * 
 * @returns {Array} details of Loading,data or any error 
 */
const useFetch = (query, variables) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(async () => {
    try {
      const apiData = await fetchGraphQL(query, variables);
      setData(apiData);
      setLoading(false)
    } catch(e){
        setError(e)
    }
  },[]);

  return [loading,data,error];
};

export default useFetch;
