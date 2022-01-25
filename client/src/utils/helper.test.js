const { getRadarGraphData } = require("./helper")

test('check if graph Data is returned', () => {

    const datatypes = {
        literature: 0.32635342324189076,
        rna_expression: 0.06495800833742345,
        genetic_association: 1,
        somatic_mutation: 1,
        known_drug: 1,
        animal_model: 0,
        affected_pathway: 1,
    }
    const radarData = getRadarGraphData(datatypes)
    expect(radarData).toHaveProperty('variables')
    expect(radarData).toHaveProperty('sets')
    expect(radarData.variables.length).toBe(7)
})