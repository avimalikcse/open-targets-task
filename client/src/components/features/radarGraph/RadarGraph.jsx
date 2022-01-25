import Radar from "react-d3-radar";

/**
 * Radar Graph component to display the data as in Radar format
 * 
 * @param {Object} graph Data 
 */
export function RadarGraph({ data }) {
  return (
    <Radar
      width={700}
      height={600}
      padding={70}
      domainMax={1}
      highlighted={null}
      data={data}
    />
  );
}
