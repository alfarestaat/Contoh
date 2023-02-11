const { expect } = require('chai')
const request = require('supertest')
//const data = require('../data/userData.js')


describe('Chai Assert - Get Example', () => {
    const response = request ('https://petstore.swagger.io/v2')
    .get('/store/inventory')
    it('response status equal to 200', async () => {
        expect((await response).status).to.equal(200)
    })
    it('response body to have property', async () => {
       expect((await response).body).to.have.property(`available`)
       expect((await response).body).to.have.property(`pending`)
       //expect((await response).body).to.have.property(`sold`)
    })
})

// describe('Post Request Example', () => {
//     const response = request ('https://petstore.swagger.io/v2')
//     .post('/user')
//     .send(data.CREATE_USER_DATA)
//     it('response status equal to 200', async  () => {
//         expect((await response).status).to.equal(200)
//     })
    
//     it('response body to haveOwnProperty', async () => {
//         expect((await response).body).to.haveOwnProperty(`message`)
//     })
// })