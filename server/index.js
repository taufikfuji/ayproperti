const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

app.get('/register', (req, res) => {
   let { firstName, email } = req.body
   console.log(`${firstName} dan ${email}`);
   res.status(201).json({
    "message" : `data atas nama ${firstName} dan email: ${email} Berhasil di tambahkan`
   })
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
