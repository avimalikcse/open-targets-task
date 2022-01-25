// Helper file

/**
 * Method to produce the data as in required ny d3-radar chart lib
 * 
 * @param {Object} dataTypes 
 */
export function getRadarGraphData(dataTypes) {
    let variables = []
    let sets = []
    const dTypes = Object.keys(dataTypes)
    dTypes.forEach(dType => {
        variables.push({ key: dType, label: dType })
        sets.push({
            key: dType,
            label: 'Association Score',
            values: dataTypes
        })
    })
    return { variables, sets }

}