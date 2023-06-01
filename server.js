//we are making a Request to a server
//to get back a Response
//this cycle is called a promise

const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:false}))





app.listen(PORT, ()=> {
    console.log(`running on port ${PORT}`)
})

//2 parts of our promise
//request and response
// req & res
app.get('/', (req, res)=>{
    res.send(`You're a wizard, Harry!`)
})

app.get('/hello', (req,res)=> {
    res.send('hello')
})

app.get('/favorite-food', (req,res) =>{
    res.send({
        food: 'pizza',
        toppings: ['pepperoni', 'olives', 'basil'],
        isFromNYC: true
    })
})

app.get('/favorite-movie', (req,res) =>{
    res.send({
        movie: 'Kung Fu Panda',
        characters: ['Po', 'Oogway', 'Shifu', 'Tigress'],
        isTheBestMovie: true
    })
})

app.get('/contact', (req,res) =>{
    res.send('mullinsa428@gmail.com')
})

app.get('/about-me', (req,res) =>{
    res.send({
        name: 'Andrew Mullins',
        Age: 25,
        location: 'Chevy Chase, Maryland'
    })
})


app.get('/movies', (req,res) =>{
    res.send([
        {
            movie: 'Kung Fu Panda',
            characters: ['Po', 'Oogway', 'Shifu', 'Tigress'],
            runtime: 92,
            relaseDate: new Date('June 6, 2008'),
            isTheBestMovie: true
        },
        {
            movie: 'The Matrix',
            characters: ['Neo', 'Morpheus', 'Trinity', 'Agent Smith'],
            runtime: 136,
            relaseDate: new Date('March 1, 1999'),
            isTheBestMovie: false
        },
        {
            movie: 'Dodgeball',
            characters: ['Peter La Fleur', 'White Goodman', 'Kate Veatch', `Patches O'Houlihan`],
            runtime: 98,
            relaseDate: new Date('June 18, 2004'),
            isTheBestMovie: false
        }
    ])
})

app.get('/article/:slug', (req,res) => {
    console.log(req.params)
    res.send('look at our console')
})

app.get('/message/:id', (req,res)=> {
    console.log(`message with is of ${req.params.id}`)
    res.send({msg: `message with id of ${req.params.id}`})
})

//a query allows us to search by multiple arguments to get more precise data
// http://localhost:3001/find?myName=Bob&myAge=23
app.get('/find', (req,res) => {
    res.send(`${req.query.myName} is ${req.query.myAge} years old`)
})


//// YOU DO

app.get('/dogs', (req,res) => {
    res.send(`Corgi`)
})

app.get('/cats/:catName', (req,res) => {
    res.send(`The cat's name is ${req.params.catName}`)
})

app.post('/towns', (req,res)=>{
    console.log(`I'm from Pittsburgh, PA`)
    res.send({
        city: 'Pittsburgh',
        state: 'PA'
    })
})

app.put('/profile/update/:username', (req, res) => {
    res.send(`User profile with the username of ${req.params.username} was updated.`)
})

app.delete('/tacos', (req, res) => {
    // const { tacoType, tacoID } = req.query -> using this will then let you just use tacoType and tacoID
    res.send(`I deleted the ${req.query.tacoType} with an id of ${req.query.tacoID}`)
})

/////////////////////

app.get('/middleware', (req, res, next) => {
    console.log('this is middleware')
    next()
}, (req, res) => {
    res.send('response complete')
}
)

// passwordEntered = passwordOnAccount ? loggedIn = true : loggedIn = false
// loggedIn ? return Hello user : please log in

// we can do add'l request and API calls
// and only return the data when the promise si fulfilled

//math operators to show $$$, Shopping Cart Total




