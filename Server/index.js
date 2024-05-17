const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json())


app.listen(3002,()=>{
    console.log('server is runduang')
})

const db = mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'',
    database:'pepledb',
    
})

app.post('/register',(req, res)=>{
    const sentUsername = req.body.Username
    const sentPhone = req.body.Phone
    console.log(sentUsername,sentPhone) 
     


    const SQL = 'INSERT INTO user (username,phone) VALUES(?,?)'

    const Valuse = [sentUsername,sentPhone]

    db.query(SQL, Valuse, (err, results)=>{
        if(err){
            res.send(err)
        }
        else{
            console.log('User inserted succcessfully')
            res.send({message:'User added'})
        }
    })
})

app.post('/Login',(req,res)=>{
    const sentLoginUsername = req.body.LoginUsername
    const sentLoginPhone = req.body.LoginPhone
    
    
    const SQL = 'SELECT * FROM user WHERE username = ? && phone = ?'

    const Valuse = [sentLoginUsername,sentLoginPhone]
    //console.log(Valuse)
    db.query(SQL, Valuse, (err, results)=>{
        if(err){
            res.send({error: err})
        }
        if(results.length > 0){
           //console.log(results)
            res.send()
        }
        else{
            console.log(results)
            res.send({massage: `Credentials Don't match!`})
            
        }
    })
})

