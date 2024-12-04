// 1. 引入需要模塊
const express = require('express')
const app = express() 
const PORT = 4000

app.use(express.json())

const cors = require('cors')
app.use(cors())

app.post('/portfolio', (req,res) => {
  res.send({status:  200 , message: `${req.body.name} , 已成功將您的表單加入數據庫`})
})


// //5.架設server
app.listen(PORT, () => {
  console.log(`express server running at ${ PORT }`)
})

module.exports = app


// app.post('/lala', (req,res) => {
//   const sqlStr = 'select * from defaultdb.portfolio'
//   console.log(req.body)
//   db.query(sqlStr, (err, results) => {
//   if (err) return console.log(err)
//   res.send(results)
// })
// })

//3.處理信息
// app.post('/portfolio', (req,res) => {
//   const body = req.body

//   const sqlStr = 'select * from defaultdb.portfolio where name = ?'
//   db.query(sqlStr,body.name, (err,results) => {
//     if (err){
//       return res.send({status: 404, message: '用戶是否重複提交查詢失敗'})
//     } 
//     if (results.length > 0){
//      return res.send({status:  409, message: '用戶重複提交數據', results})
//     }
//   const sql = 'insert into defaultdb.portfolio set ?'
//   console.log(body)
//   db.query(sql , body , (err , results) => {
//       if (err) return res.send({status : 400, message: '用戶表單加入數據庫失敗'})
//       if (results.affectedRows === 1){
//         res.send({status:  200 , message: '用戶表單加入數據庫成功', results})
//       }
//   })    
// })
// })


// const db = mysql.createPool({
//   host: '127.0.0.1',
//   user: 'root',
//   password: '123456',
//   database: 'portfolio'
// })


// app.post('/lala', (req,res) => {
//   const sqlStr = 'select * from portfolio.feedback_form'
//   console.log(req.body)
//   db.query(sqlStr, (err, results) => {
//   if (err) return console.log(err)
//   res.send(results)
// })
// })

// app.listen(80, () => {
//   console.log('express server running at http://127.0.0.1')
// })



// console.log(mysql)


// app.post('/portfolio', (req,res) => {
//     const sqlStr = 'SELECT * FROM defaultdb.portfolio WHERE id = 2;'
//   mysql.query(sqlStr,body.name, (err,results) => {
//     if (err) console.log(err)
//     console.log(results) 
//   })
//   res.send({status:  200 , message: `${results} , 成功將您的表單加入數據庫`})
// })


// //5.架設server
// app.listen(PORT, () => {
//   console.log(`express server running at ${ PORT }`)
// })

// module.exports = app


// const config = {
//   user: "USER",
//   password: "PASSWORD",
//   host: "HOST",
//   port: "PORT",
//   database: "DATABASE",
//   ssl: {
//     rejectUnauthorized: true,
//     ca: fs.readFileSync("./ca.pem").toString(),
//   },
// };

// const client = new pg.Client(config);
// client.connect(function (err) {
//   if (err) throw err;
//   client.query("SELECT VERSION()", [], function (err, result) {
//     if (err) throw err;

//     console.log(result.rows[0]);
//     client.end(function (err) {
//       if (err) throw err;
//     });
//   });
// });
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

// const mysql = require('mysql2')
// const db = mysql.createPool({
//   host: '127.0.0.1',
//   user: 'root',
//   password: '123456',
//   database: 'portfolio'
// })

