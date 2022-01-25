import chai from 'chai'
import { onlyUnique, sortAssociationData } from '../src/utils/helper';
const expect = chai.expect;

const dummyData = [{ association_score: { overall: 0 } }, { association_score: { overall: 1 } }]

describe('Check if all helper functions are working as expected', () => {
    it('Check if desc sorting of association data is happening ', (done) => {
        const sortedData = sortAssociationData(dummyData, true)
        expect(sortedData[0].association_score.overall).to.eql(1)
        done()
    })
    it('Check if asc sorting of association data is happening ', (done) => {
        const sortedData = sortAssociationData(dummyData, false)
        expect(sortedData[0].association_score.overall).to.eql(0)
        done()
    })

    it('Check if only Unique values are returned ', (done) => {
        let data = [{ id: 0 }, { id: 0 }, { id: 1 }]
        expect(onlyUnique(data, "id").length).to.eql(2)
        done()
    })
});