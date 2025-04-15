import express from 'express'

const app = express()
const port = 3000
//Accept data from frontend side:
app.use(express.json())

let teaData = []
let nextId = 1

//add a new tea
app.post('/teas', (req, res) =>{
    const {name, price} = req.body
    const newTea = {id: nextId++, name, price}
    teaData.push(newTea)
    res.status(201).send(newTea)
})

//get all teas
app.get('/teas', (req, res) => {
    res.status(200).send(teaData)
})


// Get a tea with id
app.get('/teas/:id', (req, res) => {
    const tea = teaData.find(t => t.id === parseInt(req.params.id))
    if (!tea) {
        return res.status(404).send('Tea Not Found')
    }
    res.status(200).send(tea)
})

//update
app.put('/teas/:id', (req, res) => {
    const tea = teaData.find(t => t.id === parseInt(req.params.id))
    if(!tea){
        res.status(404).send('Tea Not Found')
    }
    const {name, price} = req.body
    tea.name = name
    tea.price = price
    res.status(200).send(tea)
})

//delete
app.delete('/teas/:id', (req, res) => {
    // console.log("deleted")
    const index = teaData.findIndex(t => t.id === parseInt(req.params.id))
    if(index === -1){
        return res.status(404).send('Tea Not Find')
    }
    teaData.splice(index, 1)
    return res.status(204).send('deleted')
})



// app.get('/', (req, res) => {
//     res.send(`Hello, from Prince!!`)
// })
// app.get('/ice-tea', (req, res) => {
//     res.send(`What ice tea would you prefer?`)
// })
// app.get('/twitter', (req, res) => {
//     res.send(`kmishraprince`)
// })




//MiddleWare:

app.listen(port, () => {
    console.log(`Server is running at port ${port}...`);
    
})

