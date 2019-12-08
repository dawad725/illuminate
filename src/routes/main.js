const router = require('express').Router()


// This route will take in data from the form sumitted by the user 
router.post('/', (req, res) => {
    let question1 = req.body.value // qty example : 5 
    let question2 = req.body.value
    let question3 = req.body.value
    let question4 = req.body.value
    let question5 = req.body.value

    let currentAnnualCost = question5 * 12;
    let dailyHours = 5;
    let utilityRatePerkWh = .11;
    let totalKwhSavedFor40WattBulb = dailyHours * 365 * 35 / 1000 * question1; // 63 kWh saved
    let totalKwhSavedFor60WattBulb = dailyHours * 365 * 50.5 / 1000 * question2; // 92 kWh saved
    let totalKwhSavedFor15WattBulb = dailyHours * 365 * 12 / 1000 * question3;// 21 kWh saved
    let totalKwhSavedFor32WattBulb = dailyHours * 365 * 16 / 1000 * question4;// 29 kWh saved
    let totalKwhSavedForAllOptions = totalKwhSavedFor60WattBulb + totalKwhSavedFor40WattBulb + totalKwhSavedFor15WattBulb + totalKwhSavedFor32WattBulb


    let kwhSavingsConvertedTo$PerYear = utilityRatePerkWh * totalKwhSavedForAllOptions; // $10.14 per bulb




    // test data to figure out how to pass object to front-end
    let percentage = [100, 200, 199, 50, 100]
    let hookUp = [30, 200, 199, 10, 20]

    console.log('backend', req.body)

    let container = { percentage, hookUp }


    res.send(JSON.stringify(container))
    // res.send(hookUp)
    // res.end(JSON.stringify(req.body))

})




//testing
router.get('/', (req, res) => {
    res.end('Hello')

})






module.exports = router