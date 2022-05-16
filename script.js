const uploadDate1 = document.getElementById('uploadDate1');
const uploadDate2 = document.getElementById('uploadDate2');
const uploadDate3 = document.getElementById('uploadDate3');

let currentDate = new Date()
let uploadDates = [uploadDate1, uploadDate2, uploadDate3]

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

let targetDate3 = {
    day: 10, 
    month: 5,
    year: 2022
}

let projectDates = [];

projectDates.push(targetDate1);
projectDates.push(targetDate2);
projectDates.push(targetDate3);


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
    
    // applying same thing to all projects
    for (let i=0; i<projectDates.length; i++) {

        // finding what number the target day is equal to in 365 day loop
        let targetDayCount = ((projectDates[i].month)*30) + Math.floor((projectDates[i].month)/2) + projectDates[i].day;
        console.log("targetDayCount: ", targetDayCount);

        // finding what number the current day is equal to in 365 day loop
        let currentDayCount = ((month+1)*30) + Math.floor((month+1)/2) + day;
        console.log("currentDayCount: ", currentDayCount);

        // if dates are the same no need to go further:
        if (targetDayCount == currentDayCount) {
            uploadDates[i].innerHTML = `uploaded today`
        } 

        // if they are in the same year:
        else if (projectDates[i].year == year) {
            let daysAgo = (currentDayCount - targetDayCount);
            console.log("currentDayCount - targetDayCount: ", daysAgo);
            uploadDates[i].innerHTML = `uploaded ${daysAgo} days ago`
        } 
        
        // if they have one or more year difference:
        else {
            let daysAgo = Math.abs(365 - (currentDayCount - targetDayCount) + ((projectDates[i].year - year)-1)*365);
            console.log("currentDayCount - targetDayCount: ", daysAgo);
            uploadDates[i].innerHTML = `uploaded ${daysAgo} days ago`
        }
    }
}
// countdown function ends

countDown();