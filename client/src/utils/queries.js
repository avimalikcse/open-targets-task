import { gql } from 'graphql-request'


/**
 * Write all the GraphQL queries here
 */


// query to get all the Disease 
export const GetDiseases = gql `
  {diseases{
    id
    efo_info {
      label
    }
  }}
`;

// query to get all the Association
export function GetAssociationData() {
    return gql `
    {associations{
        target{
          gene_info {
            symbol
            name
          
          },
          id
          webURL
          
        }association_score {
          overall
          datatypes {
            literature
            rna_expression
            genetic_association
            somatic_mutation
            known_drug
            animal_model
            affected_pathway
          }
        }
      }}
  `;
}