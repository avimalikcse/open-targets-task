import chai from 'chai'
import Store from '../src/utils/store';
const expect = chai.expect;

const dummyValue = "dummy"

describe('Check if app is able to read/write from store', () => {
    it('Check store is initialized', (done) => {
        const items = Store.items()
        expect(items).to.be.an('array').that.does.not.include(dummyValue);
        done()
    })

    it('Check if added value is there in store', (done) => {
        Store.add(dummyValue)
        const items = Store.items()
        expect(items).to.be.an('array').that.does.include(dummyValue);
        done()
    })
});