const uploadDate1 = document.getElementById('uploadDate1');
const uploadDate2 = document.getElementById('uploadDate2');

let currentDate = new Date()
let uploadDates = [uploadDate1, uploadDate2]

let targetDate1 = {
    day: 12, 
    month: 5,
    year: 2022
}

let targetDate2 = {
    day: 16, 
    month: 5,
    year: 2022
}

let projectDates = [];

projectDates.push(targetDate1);
projectDates.push(targetDate2);


// reaching current date starts
let day = currentDate.getDate()
console.log("Day: ",day)
let month = currentDate.getMonth()
console.log("Month: ",month)
let year = currentDate.getFullYear()
console.log("Year: ",year)
// reaching current date ends

// countdown function starts
function countDown() {
    
    for (let i=0; i<projectDates.length; i++) {

        let targetDayCount = ((projectDates[i].month)*30) + Math.floor((projectDates[i].month)/2) + projectDates[i].day;
        console.log("targetDayCount: ", targetDayCount);
        let currentDayCount = ((month+1)*30) + Math.floor((month+1)/2) + day;

        console.log("currentDayCount: ", currentDayCount);

        if (targetDayCount == currentDayCount) {
            uploadDates[i].innerHTML = `uploaded today`
        } else if (projectDates[i].year == year) {
            let daysAgo = 365 - (365 - (currentDayCount - targetDayCount));
            console.log("currentDayCount - targetDayCount: ", daysAgo);
            uploadDates[i].innerHTML = `uploaded ${daysAgo} days ago`
        } else {
            let daysAgo = Math.abs(365 - (currentDayCount - targetDayCount) + ((projectDates[i].year - year)-1)*365);
            console.log("currentDayCount - targetDayCount: ", daysAgo);
            uploadDates[i].innerHTML = `uploaded ${daysAgo} days ago`
        }
    }
}
// countdown function ends

countDown();