const express = require('express')
const app = express()
const cors = require('cors')

const chefInfo = require('./data/chefsInfo.json')

const port = process.env.PORT || 5000;

app.use(cors())

app.get('/', (req, res) => {
    res.send('chefjson is running')
})

app.get('/chefInfo', (req,res)=> {
    res.send(chefInfo)
})

app.get('/chefInfo/:id', (req, res) => {
        const id = req.params.id;
        console.log(id);
        const selectedData = chefInfo.find(d=> d.id === id);
        res.send(selectedData)
})


app.listen(port, () => {
    console.log(`chefs api is running on port: ${port}`);
})