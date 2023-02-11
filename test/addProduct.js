const { expect } = require('chai')
const request = require('supertest')
const data = require('../data/productData.js')



describe('Add Product KasirAja', () => {
    const response = request ('https://kasir-api.belajarqa.com')
    .post('/products')
    .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcxMDJjY2M1LWRjOWMtNGQ3Ni04YTNjLTBkMjA1NjViYTFlZCIsImNvbXBhbnlJZCI6IjNhZjk1YzkzLWRhOWUtNGFmMC1iNTZlLWUyZmQ3YjZhM2I0MiIsImlhdCI6MTY3NTY1OTAzNH0.IgZmvkzSWf7l__mzg1B9tH_EGQiUZ0kU6mhg6dDpqwk')
    .send(data.ADD_PRODUCT_DATA)
    it('response status equal to 201', async  () => {
        expect((await response).status).to.equal(201);
        // const responseData = JSON.parse(response.text);     
    })
    
    it('response body to haveOwnProperty', async () => {
        expect((await response).body).to.haveOwnProperty(`status`)
        expect((await response).body).to.haveOwnProperty(`message`)
        expect((await response).body).to.haveOwnProperty(`data`)  
        expect((await response).body.data).to.haveOwnProperty(`productId`)
        expect((await response).body.data).to.haveOwnProperty(`name`) 
    }) 
})

describe('Get Product KasirAja', () => {
    const response = request ('https://kasir-api.belajarqa.com')
    .post('/authentications')
    .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcxMDJjY2M1LWRjOWMtNGQ3Ni04YTNjLTBkMjA1NjViYTFlZCIsImNvbXBhbnlJZCI6IjNhZjk1YzkzLWRhOWUtNGFmMC1iNTZlLWUyZmQ3YjZhM2I0MiIsImlhdCI6MTY3NTg2MTgwNn0.-N5JJy18TPJRTZ3oGwClwbZjN5vxh4Erlf11jSy4tRc')
    .send(data.LOGIN_USER_DATA)  
    .get('/products/0c0d3be7-edf0-403b-909a-a3dc23db93c7')
    it('response status equal to 200', async  () => {
        expect((await response).status).to.equal(200)
        console.log((await response).body)
    })
    
    // it('response body to haveOwnProperty', async () => {
    //     expect((await response).body).to.haveOwnProperty(`status`)
    // })
})


// describe('Get Product KasirAja', () => {
//     let authorizationHeader;
    // before(async () => {
    //   const loginResponse = await request('https://kasir-api.belajarqa.com')
    //     .post('/authentications')
    //     .send(data.LOGIN_USER_DATA);
    //   if (loginResponse.body.data && loginResponse.body.data.accessToken) {
    //     process.env.responseBody = JSON.stringify(loginResponse.body.data.accessToken);
    //     authorizationHeader = 'Bearer ' + process.env.responseBody;
    //     console.log((await response).body.data.accessToken)
    //   }
    // });


  //   before(async function () {
  //       const response = await request('https://kasir-api.belajarqa.com')
  //         .post('/authentications')
  //         .send(data.LOGIN_USER_DATA)
      
  //       process.env.responseBody = JSON.stringify(response.body.data.accessToken)
  //       authorizationHeader = 'Bearer ' + process.env.responseBody;
  //       console.log((await response).body.data.accessToken)
  //   })
  
  //   it('response status equal to 200', async () => {
  //     const response = await request('https://kasir-api.belajarqa.com')
  //       .get('/products/0c0d3be7-edf0-403b-909a-a3dc23db93c7')
  //       .set('Authorization', authorizationHeader);
  //     expect(response.status).to.equal(200);
  //     console.log(response.body);
  //   });
  // });




// describe('Delete Product KasirAja', () => {
//     const response = request ('https://kasir-api.belajarqa.com')
//     .post('/authentications')
//       .send(data.LOGIN_USER_DATA)
  
//     process.env.responseBody = JSON.stringify(await response.body.data.accessToken)
//     .set('Authorization', process.env.responseBody)
//     .delete('/products/448869af-2f63-47a6-af28-a0d47dae8474')
//     //.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcxMDJjY2M1LWRjOWMtNGQ3Ni04YTNjLTBkMjA1NjViYTFlZCIsImNvbXBhbnlJZCI6IjNhZjk1YzkzLWRhOWUtNGFmMC1iNTZlLWUyZmQ3YjZhM2I0MiIsImlhdCI6MTY3NTY3MDgzNH0.RO1NdoNi240MCHZGDZ5vUDCHMpBMnW-0X_zOCKQOauc')
//     it('response status equal to 200', async  () => {
//         expect((await response).status).to.equal(200)
//         console.log((await response).body)
//     })
    
//     // it('response body to haveOwnProperty', async () => {
//     //     expect((await response).body).to.haveOwnProperty(`status`)
//     // })
// })

