import associations from '../../files/associations.json'
import store from './store'
import Store from './store'

/**
 * THis is boot loader functions which read the JSON and write to the Store Class
 * 
 * @param {Fn} callback function thats need to be performed after successful loading of data to store
 * 
 */
function loadData(callback = null) {
    const dataFromJson = associations

    // add additional details to the source data for example the platform link to target
    const updatedData = dataFromJson.data.map(row => {
        return {
            ...row,
            type: "association_data",
            target: {
                ...row.target,
                webURL: `https://platform.opentargets.org/target/${row.target.id}`

            }
        }
    })


    updatedData.forEach(record => {
        store.add(record) // add Association Data to store
        store.add({...record.disease, type: "disease" }) // add disease data to store
    })
    if (callback) callback()
}

/**
 * 
 * @param {array} data unsorted data of association
 * @param {Boolean} isDescending flag to sort the data in Descending order
 */
function sortAssociationData(data, isDescending) {
    data.sort((a, b) => a.association_score.overall - b.association_score.overall)
    return isDescending ? data.reverse() : data
}

/**
 * Function to return only unique Object from array
 * 
 * @param {Array} data array of object
 * @param {string} uniqueKey the key of object we need to check uniqueness 
 */
function onlyUnique(data, uniqueKey) {
    const result = [];
    const map = new Map();
    for (const item of data) {
        if (!map.has(item[uniqueKey])) {
            map.set(item[uniqueKey], true); // set any value to Map
            result.push(item)
        }
    }
    return result
}

export { loadData, sortAssociationData, onlyUnique }