import supertest from 'supertest'
import server from '../app'
import chai from 'chai'

const expect = chai.expect;
const request = supertest(server)

describe('API response test cases', () => {


    it('Check if server is up And running ', (done) => {
        request.post('/graphql')
            .send({
                query: "{__schema { queryType {name}}}",
            })
            .expect(200)
            .end((err, res) => {
                // res will contain array with one user
                if (err) return done(err);
                expect(res.body).to.have.property('data');
                done();
            })
    })

    it('Check if association data is getting loaded ', (done) => {
        request.post('/graphql')
            .send({
                query: "{associations{association_score {overall}}}",
            })
            .expect(200)
            .end((err, res) => {
                // res will contain array with one user
                if (err) return done(err);
                expect(res.body).to.have.property('data');
                expect(res.body.data).to.have.property('associations');
                expect(res.body.data.associations.length).to.be.greaterThan(0)
                done();
            })
    })
});