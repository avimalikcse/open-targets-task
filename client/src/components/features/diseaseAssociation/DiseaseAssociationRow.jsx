
import { StyledTableCell, StyledTableRow } from "./styleTableElements";
import { useState } from "react";
import PropTypes from 'prop-types';
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import { RadarGraph } from "../radarGraph/RadarGraph";
import { getRadarGraphData } from "../../../utils/helper";

function DiseaseAssociationRow({ association }) {
  const [isOpen, setIsOpen] = useState(false); // to toggle the Radar graph section
  return (
    <>
      <StyledTableRow key={`${association.target.id}_details`} onClick={() => setIsOpen(!isOpen)}>
        <StyledTableCell>
          {isOpen ? <ExpandLess></ExpandLess> : <ExpandMore></ExpandMore>}
        </StyledTableCell>
        <StyledTableCell align="right">
          <a href={association.target.webURL} rel="nofollow" target="_blank">{association.target.gene_info.symbol}</a>
        </StyledTableCell>
        <StyledTableCell align="right">
          {association.target.gene_info.name}
        </StyledTableCell>
        <StyledTableCell align="right">
          {association.association_score.overall}
        </StyledTableCell>
      </StyledTableRow>
      <StyledTableRow className={`${isOpen ? "fade-in" : "hidden"}`} key={`${association.target.id}_graph`}>
        <StyledTableCell colSpan="4">
          {/* Radar graph for association score */}
          <RadarGraph
            data={getRadarGraphData(association.association_score.datatypes)}
          />
        </StyledTableCell>
      </StyledTableRow>
    </>
  );
}
DiseaseAssociationRow.propTypes = {
  association: PropTypes.shape({
    target:PropTypes.shape({
      gene_info:PropTypes.shape({
        symbol:PropTypes.string,
        name:PropTypes.string
      })
    }),
    association_score:PropTypes.shape({
      overall:PropTypes.number
    })
  })
}

export default DiseaseAssociationRow
