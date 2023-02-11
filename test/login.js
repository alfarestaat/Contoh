const { expect } = require('chai')
const request = require('supertest')
const data = require('../data/userData.js')
const datas = require('../data/productData.js')

before(async function () {
    const response = await request('https://kasir-api.belajarqa.com')
      .post('/authentications')
      .send(data.LOGIN_USER_DATA)  

    console.log((await response).body.data.accessToken)
    
})
  
  describe('Login Success', () => {
    it('response status equal to 201', async  () => {
      const response = await request ('https://kasir-api.belajarqa.com')
        .post('/authentications')
        .send(data.LOGIN_USER_DATA)      
        global.accessToken = (await response).body.data.accessToken;
      expect(response.status).to.equal(201)
   
    })
  })



describe('Add Product KasirAja', () => {
  const response = request ('https://kasir-api.belajarqa.com')
  .post('/products')
  .set('authorization', 'Bearer' +global.accessToken)
  //.set('authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcxMDJjY2M1LWRjOWMtNGQ3Ni04YTNjLTBkMjA1NjViYTFlZCIsImNvbXBhbnlJZCI6IjNhZjk1YzkzLWRhOWUtNGFmMC1iNTZlLWUyZmQ3YjZhM2I0MiIsImlhdCI6MTY3NTg2MjIxOH0.9Y6aFSABrFLM-bfzyWiIkCfjH_zLuN5v4leRi5tyA68')
  .send(datas.ADD_PRODUCT_DATA)
  it('response status equal to 201', async  () => {
      expect((await response).status).to.equal(201);    
  })
  
  it('response body to haveOwnProperty', async () => {
      expect((await response).body).to.haveOwnProperty(`status`)
      expect((await response).body).to.haveOwnProperty(`message`)
      expect((await response).body).to.haveOwnProperty(`data`)  
      expect((await response).body.data).to.haveOwnProperty(`productId`)
      expect((await response).body.data).to.haveOwnProperty(`name`) 
  }) 
})








//   describe('Get Product KasirAja', async () => {
//     const response = await request ('https://kasir-api.belajarqa.com')
//     .post('/authentications')
//     .send(data.LOGIN_USER_DATA)     
//     //.set('Authorization', 'Bearer ' + global.token)
//     .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcxMDJjY2M1LWRjOWMtNGQ3Ni04YTNjLTBkMjA1NjViYTFlZCIsImNvbXBhbnlJZCI6IjNhZjk1YzkzLWRhOWUtNGFmMC1iNTZlLWUyZmQ3YjZhM2I0MiIsImlhdCI6MTY3NTg2MTgwNn0.-N5JJy18TPJRTZ3oGwClwbZjN5vxh4Erlf11jSy4tRc')
//     .get('/products/4a0c9458-209f-4776-813a-450d31459ec2')
//     it('response status equal to 200', async  () => {
//       expect(response.status).to.equal(200)
//       console.log((await response).body)
//   })
// })




















    //.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcxMDJjY2M1LWRjOWMtNGQ3Ni04YTNjLTBkMjA1NjViYTFlZCIsImNvbXBhbnlJZCI6IjNhZjk1YzkzLWRhOWUtNGFmMC1iNTZlLWUyZmQ3YjZhM2I0MiIsImlhdCI6MTY3NTY1OTAzNH0.IgZmvkzSWf7l__mzg1B9tH_EGQiUZ0kU6mhg6dDpqwk')
    
    
    // it('response body to haveOwnProperty', async () => {
    //     expect((await response).body).to.haveOwnProperty(`status`)
    // })


 //   const responseBody = JSON.parse(process.env.responseBody)
    //   expect(responseBody).to.deep.equal({
    //     // data in response body
    //   })
  
      // memanggil constant function responseBody
    //   const authorizationHeader = 'Bearer ' + process.env.responseBody
    //   request('https://kasir-api.belajarqa.com')
    //     .post('/products')
    //     .set('Authorization', authorizationHeader)
    //     .send(data.ADD_PRODUCT_DATA)
    //     expect(response.status).to.equal(201)
// describe('Login Success', () => {
//     const response = request ('https://kasir-api.belajarqa.com')
//     .post('/authentications')
//     .send(data.LOGIN_USER_DATA)
//     it('response status equal to 201', async  () => {
//         expect((await response).status).to.equal(201)
//     })
// })
    // it('response body to haveOwnProperty', async () => {
    //     expect((await response).body).to.haveOwnProperty(`status`)
    //     expect((await response).body).to.haveOwnProperty(`message`)
    //     expect((await response).body).to.haveOwnProperty(`data`)
    //     expect((await response).body.data).to.have.property(`accessToken`)
    //     expect((await response).body.data).to.have.property(`refreshToken`)
    //     expect((await response).body.data).to.haveOwnProperty(`user`)
    //     expect((await response).body.data.user).to.haveOwnProperty(`id`)
    //     expect((await response).body.data.user).to.haveOwnProperty(`name`)
    //     expect((await response).body.data.user).to.haveOwnProperty(`role`)
    //     expect((await response).body.data.user).to.haveOwnProperty(`email`)
    //     expect((await response).body.data.user).to.haveOwnProperty(`officeId`)
    //     expect((await response).body.data.user).to.haveOwnProperty(`companyId`)
    //     expect((await response).body.data.user).to.haveOwnProperty(`company_name`)
    // })
