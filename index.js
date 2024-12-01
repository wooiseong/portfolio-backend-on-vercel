// 1. 引入需要模塊
const express = require('express')
const app = express() 
const PORT = 4000

app.use(express.json())


//cors跨域模塊
const cors = require('cors')
app.use(cors())

//2. 配置mysql
// const mysql = require('mysql2')
// const db = mysql.createPool({
//   host: '127.0.0.1',
//   user: 'root',
//   password: '123456',
//   database: 'portfolio'
// })
// const mysql = require('mysql2')
// const db = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DBNAME,
//   port: process.env.DB_PORT
// })
// const mysql = require('mysql2')
// const db = mysql.createPool({
//   host: portfolio-xiong-portfolio-xiong.e.aivencloud.com,
//   user: avnadmin,
//   password: AVNS_hqHDbOfpDeQBF7wNYIm,
//   database: defaultdb,
//   port: 15653
// })

//3.處理信息
// app.post('/feedback', (req,res) => {
//   const body = req.body

//   const sqlStr = 'select * from feedback_form where name = ?'
//   db.query(sqlStr,body.name, (err,results) => {
//     if (err){
//       return res.send({status: 100, message: '用戶是否重複提交查詢失敗'})
//     } 
//     if (results.length > 0){
//      return res.send({status:  300 , message: '相同用戶重複提交數據', results})
//     }
//   const sql = 'insert into feedback_form set ?'
//   db.query(sql,body , (err,results) => {
//       if (err) return res.send({status:1, message: '用戶表單加入數據庫失敗'})
//       if (results.affectedRows === 1){
//         res.send({status:  200 , message: '用戶表單加入數據庫成功', results})
//       }
//   })    
// })

// })

app.get('/portfolio', (req,res) => {
  res.set('Access-Control-Allow-Origin', '*');
  // res.status(200).json('您的意見已經存取成功')
  res.send({status:  200 , message: '用戶表單加入數據庫成功'})
})

// db.getConnection(err => {
//   if (err) console.log(err)
//   console.log('yes')
// })

//5.架設server
app.listen(PORT, () => {
  console.log(`express server running at ${ PORT }`)
})

module.exports = app
