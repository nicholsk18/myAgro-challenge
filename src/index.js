/**
 * We start off with formatting input data,
 * Next we sort that input data
 * 
 * Destruct the objects in to const since data will not change
 * 
 * Define varible to calculate output
 * 
 * Calculate output
 */

const getDaysOfPower = (dayOneRate, startDay1, dayTwoRate, startDay2, dayThreeRate, startDay3, farmerPay) => {
    // Format Data in to array of object so we can reorder
    const startDayAndRate = [
        {
            rate: dayOneRate,
            startDay: startDay1
        },
        {
            rate: dayTwoRate,
            startDay: startDay2
        },
        {
            rate: dayThreeRate,
            startDay: startDay3
        }
    ];

    // Sort the data to always be ordered
    const sortedStartDayAndRate = startDayAndRate.sort((firstObj, nextObj) => (firstObj.startDay > nextObj.startDay) ? 1 : -1);

    // destruct array of objects to look better
    const ORDERED_DAY_ONE = sortedStartDayAndRate[0].startDay;
    const ORDERED_DAY_TWO =  sortedStartDayAndRate[1].startDay;
    const ORDERED_DAY_THREE = sortedStartDayAndRate[2].startDay;

    const DAY_ONE_RATE = sortedStartDayAndRate[0].rate;
    const DAY_TWO_RATE = sortedStartDayAndRate[1].rate + sortedStartDayAndRate[0].rate;
    const DAY_THREE_RATE = sortedStartDayAndRate[2].rate + sortedStartDayAndRate[1].rate + sortedStartDayAndRate[0].rate;

    // variables to calculate total days of power, & daily account rate
    // counter keeps up with what day it is
    let totalDaysOfPower = 0;
    let accountDailyRate = 0;
    let dayCounter = 0;
    
    while (accountDailyRate <= farmerPay) {
        // Calc days

        if (dayCounter >= ORDERED_DAY_THREE){
            accountDailyRate = DAY_THREE_RATE;
            farmerPay -= accountDailyRate;
            totalDaysOfPower++;

        } else if (dayCounter >= ORDERED_DAY_TWO) {
            accountDailyRate = DAY_TWO_RATE;
            farmerPay -= accountDailyRate;
            totalDaysOfPower++;

        } else if (dayCounter >= ORDERED_DAY_ONE){
            accountDailyRate = DAY_ONE_RATE;
            farmerPay -= accountDailyRate;
            totalDaysOfPower++;
        }

        // Go to next day
        dayCounter++;
    }

    return totalDaysOfPower;
}

// export for testing
module.exports = getDaysOfPower
