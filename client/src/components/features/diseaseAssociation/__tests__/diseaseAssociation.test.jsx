import { render, screen, waitFor } from "@testing-library/react";
import DiseaseAssociationContainer from "../DiseaseAssociationContainer";
import DiseaseAssociationTable from "../DiseaseAssociationTable";
import DiseaseAssociationRow from "../DiseaseAssociationRow";


const associationData = [
    {
      target: {
        gene_info: {
          symbol: "EGFR",
          name: "epidermal growth factor receptor",
        },
        webURL: "https://platform.opentargets.org/target/ENSG00000146648",
        id: "did",
      },
      association_score: {
        overall: 1,
        datatypes: {
          literature: 0.32635342324189076,
          rna_expression: 0.06495800833742345,
          genetic_association: 1,
          somatic_mutation: 1,
          known_drug: 1,
          animal_model: 0,
          affected_pathway: 1,
        },
      },
    },
  ];

jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            status: 200,
            data: {associations:associationData},
          }),
      })
    );


test("if renders Container is working", async () => {
  const { getByTestId } = render(<DiseaseAssociationContainer />);
  await waitFor(() => {
    expect(getByTestId("loader-testId")).toBeTruthy();
  });
});

test("if Table is loading the data", async () => {
  render(<DiseaseAssociationTable associations={associationData} />);
  const headerText = screen.getByText(/EGFR/i);
  expect(headerText).toBeInTheDocument();
});

test("if row is printing data", async () => {
  render(
    <table>
      <tbody>
        <DiseaseAssociationRow association={associationData[0]} />
      </tbody>
    </table>
  );
  const headerText = screen.getByText(/epidermal/i);
  expect(headerText).toBeInTheDocument();
});
