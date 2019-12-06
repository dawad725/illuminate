const router = require('express').Router()
// const Product = require('../models/products')
// const Review = require('../models/reviews')


// router.get('/products', (req, res, next) => {

//     //Limits the page to have 9 products at a time 
//     const perPage = 9;
//     let queryCategory = req.query.category;


//     const highestPrice = { price: 'desc', highest: -1 };
//     const lowestPrice = { price: 'asc', lowest: 1 };
//     let price;


//     //This function is used to change the first letter of the query to a capital letter in order to work with our database 
//     const capitalize = (s) => {
//         if (typeof s !== 'string') return ''
//         return s.charAt(0).toUpperCase() + s.slice(1)
//     }

//     // return the first page by default
//     const page = req.query.page || 1

//     if (req.query.category == "" || req.query.category == null || req.query.category.length == 0 || !req.query.category) {
//         queryCategory = {};
//     } else {
//         queryCategory = { category: capitalize(queryCategory) }
//     }

//     if (req.query.price == "highest") {
//         price = highestPrice
//     }
//     if (req.query.price == "lowest") {
//         price = lowestPrice
//     }



//     Product
//         .find(queryCategory)
//         .sort(price)
//         .skip((perPage * page) - perPage)
//         .limit(perPage)
//         .exec((err, products) => {
//             // Note that we're not sending `count` back at the moment, but in the future we might want to know how many are coming back

//             Product
//                 .count(queryCategory)
//                 .exec((err, count) => {
//                     var pages = count / perPage;
//                     if (err) return next(err)
//                     res.send({ products: products, count: count, pages: Math.ceil(pages) })
//                 })
//         })

// });



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

// This route will take in data from the form sumitted by the user 
router.post('/', (req, res) => {
    let question1 = req.body.value // qty example : 5 
    let question2 = req.body.value
    let question3 = req.body.value
    let question4 = req.body.value
    let question5 = req.body.value

    // function calculateSavings(question1, question2, question3, question4, question5) {
    //     let sixtyWattBulb = 60;
    //     let fortyWattBulb = 40;
    //     let fifteenWattBulb = 15;
    //     let thirtyTwoWattLinearBulb = 32;
    //     let nineWattBulb = 9.5;

    //     let utilityRatePerkWh = .11;
    //     let dailyRunTimeHours = 7;
    //     let totalAnnualRunTimeHours = dailyRunTimeHours * 365;
    //     let energySavingsPerBulb;
    //     let annualkWhSavingsPerYear; //



    console.log('backend', req.body)



    res.end()

})
router.get('/', (req, res) => {
    res.end('Hello')

})

//This route allows the client to add a new review to a product by ID 
// router.post('/:product/reviews', (req, res, next) => {

//     Product
//         .findById(req.params.product)
//         .exec((error, product) => {
//             let review = new Review()

//             review.username = req.body.username
//             review.text = req.body.text
//             review.product = product._id

//             product.save((err) => {
//                 if (err) throw err
//                 res.end();
//             })
//             review.save((err) => {
//                 if (err) throw err
//                 res.send(product);
//             })

//             product.reviews.push(review)

//         })

// });





module.exports = router