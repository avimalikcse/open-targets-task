import * as React from "react";
import PropTypes from "prop-types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { StyledTableCell } from "./styleTableElements";
import DiseaseAssociationRow from "./DiseaseAssociationRow";

/**
 * Component to render Disease VS association data
 * 
 * @param {Object} props React props  
 */
const DiseaseAssociationTable = ({ associations }) => {
  return (
    <TableContainer component={Paper} data-testid="table-testId">
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell key="1"></StyledTableCell>
            <StyledTableCell key="2" align="right">
              Approved Symbol
            </StyledTableCell>
            <StyledTableCell key="3" align="right">
              Gene Name
            </StyledTableCell>
            <StyledTableCell key="4" align="right">
              Overall Association Score
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {/* Loop-in to all the association data */}
          {associations.map((association) => {
            return (
              <DiseaseAssociationRow
                key={association.target.id}
                association={association}
              />
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
DiseaseAssociationTable.propTypes = {
  associations: PropTypes.array,
};

export default DiseaseAssociationTable;
