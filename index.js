// Your code here


let createEmployeeRecord = (array) => {  //~creates record (object) from arrays
    let testEmployee = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
    return testEmployee;
}

const createEmployeeRecords = (arrays) => {  //~uses map to isolate arrays
   return arrays.map((array) => {
        // console.log("arrays", createEmployeeRecord(array));
            return createEmployeeRecord(array);
    });
}


const createTimeInEvent = (record, date) => {   //~ creates timein
    record.timeInEvents[0] = {
        type: "TimeIn",
        date: date.slice(0,10),
        hour: parseInt(date.slice(11))
    }
    // console.log(record.timeInEvents[0]);
    return record;
}

const createTimeOutEvent = (record, date) => { //~ creates timeout
    record.timeOutEvents[0] = {
        type: "TimeOut",
        date: date.slice(0,10),
        hour: parseInt(date.slice(11))
}
    return record;
}


const hoursWorkedOnDate = (record, date) => {  //~ calcs time worked
    const timeIn =  record.timeInEvents[0].hour / 100;
    const timeOut = record.timeOutEvents[0].hour / 100;
    return timeOut - timeIn;
}


const wagesEarnedOnDate = (record, date) => {
    const payRate = record.payPerHour;
    const hoursWorked = hoursWorkedOnDate(record, date);
    console.log(payRate * hoursWorked)
    return payRate * hoursWorked
}

const allWagesFor = (record) => { //! Search for eligible dates, map timein events => dates...=eligible dates, then call reduce on that
             console.log(record)
            // console.log(wagesEarnedOnDate(records)); 
        
        let eligibleDates = record.timeInEvents.map((timeIn) => {
                return timeIn.date    // step 1
        });

        const reducer = (accumulator, currentValue) => accumulator + currentValue; 

            // console.log(eligibleDates);

        return eligibleDates.reduce(reducer);
        

        // console.log(eligibleDates);  reduce on eligibleDates, adding return of wagesEarnedOnDate
        


    }


const findEmployeeByFirstName = (srcArray, firstName) => { //~map returns employee
            // console.log("1st----", srcArray[0].firstName);

    srcArray.map((array) => {
        if (array.firstName === firstName) {
            // console.log("2nd----",array)
            return array;
        }
    });
}

const calculatePayroll = (arrays) => { //! doesn't calc $378 or $770
    arrays.map(array => {
        // console.log("3rd----", wagesEarnedOnDate(array));
    })
}