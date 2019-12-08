const router = require('express').Router()


// This route will take in data from the form sumitted by the user 
router.post('/', (req, res) => {
    let question1 = req.body.question1 // qty example : 5 
    let question2 = req.body.question2
    let question3 = req.body.question3
    let question4 = req.body.question4
    let question5 = req.body.question5

    let currentAnnualCost = question5 * 12;
    let dailyHours = 7;
    let utilityRatePerkWh = .11;
    let totalKwhSavedFor40WattBulb = dailyHours * 365 * 35 / 1000 * question1; // 63 kWh saved
    let totalKwhSavedFor60WattBulb = dailyHours * 365 * 50.5 / 1000 * question2; // 92 kWh saved
    let totalKwhSavedFor15WattBulb = dailyHours * 365 * 12 / 1000 * question3;// 21 kWh saved
    let totalKwhSavedFor32WattBulb = dailyHours * 365 * 16 / 1000 * question4;// 29 kWh saved
    let totalKwhSavedForAllOptions = totalKwhSavedFor60WattBulb + totalKwhSavedFor40WattBulb + totalKwhSavedFor15WattBulb + totalKwhSavedFor32WattBulb;
    let kwhSavingsConvertedTo$PerYear = utilityRatePerkWh * totalKwhSavedForAllOptions;
    let newCost = currentAnnualCost - kwhSavingsConvertedTo$PerYear;
    let savingsConvertedToPercentage = Math.ceil((currentAnnualCost - newCost) / currentAnnualCost * 100);

    let x = parseInt(question5);
    let y = newCost / 12;

    // test data to figure out how to pass object to front-end
    let oldLightingCost = [x, x, x, x, x, x, x, x, x, x, x, x]
    let newLightingCost = [y, y, y, y, y, y, y, y, y, y, y, y]

    let dataContainer = {
        oldlighting: oldLightingCost,
        newlighting: newLightingCost,
        annualcost: currentAnnualCost,
        costafterupgrading: newCost,
        percentagesavings: savingsConvertedToPercentage
    }

    res.send(JSON.stringify(dataContainer))
})




//testing
router.get('/', (req, res) => {
    res.end('Hello')

})






module.exports = router