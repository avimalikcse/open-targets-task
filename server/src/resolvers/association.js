import Store from '../utils/store'
import { onlyUnique, sortAssociationData } from '../utils/helper'

/**
 * Association Resolvers
 * 
 * Main Resolver file to handle data flow for Associations Query
 */

const associationResolvers = {
    Query: {
        /**
         * Function to resolve association Query
         */
        associations: (parent, args, context) => {
            const { sort, limit, diseaseId } = args

            // get all the associations from store
            let associations = Store.items().filter(row => row.type == 'association_data')

            // Filter out the association using specific Disease Id
            if (diseaseId) associations = associations.filter(item => item.disease.id === diseaseId)

            // sort the data with respect to their overall association score
            const isDescending = sort === 'desc' // Type of sorting i.e Desc or Asc
            const sortedData = sortAssociationData(associations, isDescending)
            return sortedData.slice(0, limit)

        },

        /**
         * Function to resolve Disease Query
         */
        diseases: (parent, args, context) => {
            // get all the disease from store
            const diseases = Store.items().filter(row => row.type == 'disease')
                // return Unique Value only. @ToDo: comes up with more smart solution 
            return onlyUnique(diseases, 'id')

        }
    }
}

export default associationResolvers