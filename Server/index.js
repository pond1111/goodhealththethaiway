const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json())
//app.get('/',(request,response)=>{
   // response.send('1212')
//})
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
    

    if (!sentUsername || !sentPhone) {
        return res.status(400).send({ message: 'Username and Phone are required' })

    }


    const SQL = 'INSERT INTO user (username,phone) VALUES(?,?,?)'

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


