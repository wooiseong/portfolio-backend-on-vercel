// 1. 引入需要模塊
const express = require('express')
const app = express() 
const PORT = 4000

app.use(express.json())

app.post('/portfolio', (req,res) => {
    const sqlStr = 'SELECT * FROM defaultdb.portfolio WHERE id = 2;'
  mysql.query(sqlStr,body.name, (err,results) => {
    if (err) console.log(err)
    console.log(results) 
  })
  res.send({status:  200 , message: `${results} , 成功將您的表單加入數據庫`})
})

module.exports = app
