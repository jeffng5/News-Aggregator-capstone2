const express = require('express');
const router = express.Router();
const axios = require('axios')

router.get("/preferences", async function (req, res, next) {

const getData = async() =>{
try {
 const res = await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=general&q=apple&apiKey=9e27e511f89b442e8a6dafcc72fb6e3c"
)
let url = res['data']['articles'][0]['url']
let title = res['data']['articles'][0]['title']
let description = res['data']['articles'][0]['description']
console.log(res['data']['articles'])
return res['data']['articles']

}
catch (err) {
    console.log(err)
}

}  
getData()

})









module.exports = router