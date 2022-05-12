const uploadDate1 = document.getElementById('uploadDate1')

let currentDate = new Date()

const targetDate1 = {
    day: 12, 
    month: 5,
    year: 2022
}

let day = currentDate.getDate()
console.log("Day: ",day)
let month = currentDate.getMonth()
console.log("Month: ",month)
let year = currentDate.getFullYear()
console.log("Year: ",year)

function countDown() {
    
    let targetDayCount = ((targetDate1.month)*30) + Math.floor((targetDate1.month)/2) + targetDate1.day;
    console.log("Target Day: ", targetDayCount);
    let currentDayCount = ((month+1)*30) + Math.floor((month+1)/2) + day;

    console.log("Today: ", currentDayCount);

    if (targetDayCount == currentDayCount) {
        let daysLeft = (targetDayCount - currentDayCount) + (targetDate1.year - year)*365;
        console.log(targetDayCount - currentDayCount);
        console.log("targetDayCount >= currentDayCount: ", daysLeft);
        uploadDate1.innerHTML = `uploaded today`
    } else {
        let daysLeft = 365 - (currentDayCount - targetDayCount) + ((targetDate1.year - year)-1)*365;
        console.log("targetDayCount < currentDayCount: ", daysLeft);
        uploadDate1.innerHTML = `uploaded ${daysLeft} days ago`
    }
}

countDown();