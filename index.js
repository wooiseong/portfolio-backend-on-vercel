// 1. 引入需要模塊
const express = require('express')
const app = express() 
const PORT = 4000

app.use(express.json())
const cors = require('cors')
app.use(cors())

app.post('/portfolio', (req,res) => {
  res.send({status:  200 , message: `${req.body.name} , 已成功將您的意見加入數據庫`})
})

// //5.架設server
app.listen(PORT, () => {
  console.log(`express server running at ${ PORT }`)
})

module.exports = app