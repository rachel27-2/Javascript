let a = 100;

while (a < 200) {
    console.log(a);
    a++;
}

a = 100;

while (a <= 200) {
    if (a%2 == 0) {
        console.log("-");
    } else {
        console.log("*");
    }
    a++;
}

function numbers() {
    let number = 1;
    let count;
    while (number <= 10) {
        for(count=0; count<10; count++) {
            console.log(number);
        }
        number++;
    }
}

numbers()

a = 100

for(a=100; a<200; a++) {
    console.log(a);
}

for(a=100; a<=200; a++) {
    if (a%2 == 0) {
        console.log("-");
    } else {
        console.log("*");
    }
}

let weekday = "Friday";

switch(weekday) {
    case "Monday":
        console.log("M");
    case "Tuesday":
        console.log("TU");
    case "Wednesday":
        console.log("W");
    case "Thursday":
        console.log("TH");
    case "Friday":
        console.log("F");
        break;
    case "Saturday":
        console.log("SA");
        break;
    case "Sunday":
        console.log("SU");
        break;
    default:
        console.log("invalid")
}
