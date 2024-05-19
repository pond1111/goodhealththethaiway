const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json())


app.listen(3002, () => {
    console.log(`Server listening on port 3002`)
})

const db = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'people',
})

app.post('/register', (req, res) => {
    const sentUsername = req.body.Username
    const sentPhone = req.body.Phone

    const SQL = 'INSERT INTO user (username,phone) VALUES(?,?)'

    const Valuse = [sentUsername, sentPhone]

    db.query(SQL, Valuse, (err, results) => {
        if (err) {
            res.send(err)
        }
        else {
            console.log('User inserted succcessfully')
            res.send({ message: 'User added' })
        }
    })
})

app.post('/Login', (req, res) => {
    const sentLoginUsername = req.body.Username
    const sentLoginPhone = req.body.Phone



    // const SQL = 'SELECT * FROM user WHERE username = ? && phone = ?'

    // const Valuse = [sentLoginUsername,sentLoginPhone]

    // db.query(SQL, Valuse, (err, results)=>{
    //     if(err){
    //         res.send({error: err})
    //     }
    //     if(results.length > 0){
    //         res.send()
    //     }
    //     else{
    //         res,send({massage: `Credentials Don't match!`})
    //     }
    // })
})

