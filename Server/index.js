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
    database: 'pepledb',
})

app.get('/listingshart', (req, res) => {
    const SQL = 'SELECT * FROM userdata';
    db.query(SQL, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
});

// app.post('/saveUserData', (req, res) => {
//     const { Weight, Bloodpressure, Height, Wccfr, Sgvbefore, SgvAfter, Acmlsugarlevel, Date } = req.body;

//     // ตรวจสอบว่าได้รับข้อมูลครบถ้วน
//     if (!Weight || !Bloodpressure || !Height || !Wccfr || !Sgvbefore || !SgvAfter || !Acmlsugarlevel || !Date) {
//         return res.status(400).send({ message: 'All fields are required' });
//     }

//     const SQL = 'INSERT INTO userdata (date, weight, bpressure, height, wccfr, Sgvbefore, SgvAfter, Acmlsugarlevel) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
//     const values = [Date, Weight, Bloodpressure, Height, Wccfr, Sgvbefore, SgvAfter, Acmlsugarlevel];

//     db.query(SQL, values, (err, results) => {
//         if (err) {
//             return res.status(500).send({ error: 'Database error', details: err });
//         }
//         res.status(200).send({ message: 'Data saved successfully' });
//     });
// });


app.post('/saveUserData', (req, res) => {
    const sentWeight =  req.body.Weight
    const sentBloodpressure =  req.body.Bloodpressure
    const sentHeight =  req.body.Height
    const sentWccfr =  req.body.Wccfr
    const sentSgvbefore =  req.body.Sgvbefore
    const sentSgvAfter =  req.body.SgvAfter
    const sentAcmlsugarlevel =  req.body.Acmlsugarlevel
    const sentDate =  req.body.Date

    const SQL = 'INSERT INTO userdata (date, weight, bpressure, height, wccfr, Sgvbefore, SgvAfter, Acmlsugarlevel) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [sentDate, sentWeight, sentBloodpressure, sentHeight, 
        sentWccfr, sentSgvbefore, sentSgvAfter, sentAcmlsugarlevel];
    db.query(SQL, values, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send({ message: 'Data saved successfully' });
        }
    });
});


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

app.post('/adminregister', (req, res) => {
    const sentAdminusername = req.body.AdminUsername
    const sentAdminphone = req.body.AdminPhone
    const sentAdminpassword = req.body.Adminpassword

    console.log(sentAdminusername,sentAdminphone,sentAdminpassword)

    const SQL = 'INSERT INTO admin (adminusername,adminphone,adminpassword) VALUES(?,?,?)'

    const Valuse = [sentAdminusername, sentAdminphone, sentAdminpassword ]

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

app.post('/Login',(req,res)=>{
    const sentLoginUsername = req.body.LoginUsername
    const sentLoginPhone = req.body.LoginPhone
    console.log(sentLoginUsername,sentLoginPhone) 
     


    const SQL = 'SELECT * FROM user WHERE username = ? && phone = ?'

    const Valuse = [sentLoginUsername,sentLoginPhone]

    db.query(SQL, Valuse, (err, results)=>{
        if(err){
            res.send({error: err})
        }
        if(results.length > 0){
            res.status(200).json({status:"Login success"})
        }
        else{
            res.send({massage: `Credentials Don't match!`})
        }
    })
})

app.post('/Adminlogin',(req,res)=>{
    const sentAdminLoginUsername = req.body.AdminLoginUsername
    const sentAdminLoginPhone = req.body.AdminLoginPhone
    const senAdminloginPassword = req.body.AdminloginPassword
    console.log(sentAdminLoginUsername,sentAdminLoginPhone,senAdminloginPassword) 
     


    const SQL = 'SELECT * FROM admin WHERE Adminusername = ? && Adminphone = ? && Adminpassword = ?'

    const Valuse = [sentAdminLoginUsername,sentAdminLoginPhone,senAdminloginPassword]

    db.query(SQL, Valuse, (err, results)=>{
        if(err){
            res.send({error: err})
        }
        if(results.length > 0){
            res.status(200).json({status:"Login success"})
        }
        else{
            res.send({massage: `Credentials Don't match!`})
        }
    })
})


