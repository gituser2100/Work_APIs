const express = require('express')
const cors = require('cors')

const app = express();
app.use(cors())

app.use(express.json());

const port = process.env.PORT || 10000

app.listen(port, ()=> {
    console.log(`Checker is running on port ${port}`)
});


app.get('/condev_solutions_paid', (req, res) => {
    console.log('paid checker request received')
    res.json(true)
})
