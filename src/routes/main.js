const router = require('express').Router()


//This route allows the client to add a new product to the database
// router.post('/products', (req, res, next) => {
//     let product = new Product()

//     product.category = req.body.category
//     product.name = req.body.name
//     product.price = req.body.price
//     product.image = req.body.imageURL
//     product.reviews = []

//     product.save((err) => {
//         if (err) throw err
//         res.end('Your product was saved');
//     })
// });


// function calculateSavings(question1, question2, question3, question4, question5) {
// let sixtyWattBulb = 60;
// let fortyWattBulb = 40;
// let fifteenWattBulb = 15;
// let thirtyTwoWattLinearBulb = 32;
// let nineWattBulb = 9.5;

// let utilityRatePerkWh = .11;
// let dailyRunTimeHours = 7;
// let totalAnnualRunTimeHours = dailyRunTimeHours * 365;
// let energySavingsPerBulb;
// let annualkWhSavingsPerYear; //

// let answers = {
//     answer1: 136.69
// }



// This route will take in data from the form sumitted by the user 
router.post('/', (req, res) => {
    // let question1 = req.body.value // qty example : 5 
    // let question2 = req.body.value
    // let question3 = req.body.value
    // let question4 = req.body.value
    // let question5 = req.body.value


    let percentage = '1000'


    console.log('backend', req.body)

    res.send(percentage)

    // res.end(JSON.stringify(req.body))

})




//testing
router.get('/', (req, res) => {
    res.end('Hello')

})






module.exports = router