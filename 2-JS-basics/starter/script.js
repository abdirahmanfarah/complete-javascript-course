console.log("Gay!!!");

// BMI = mass/ height ^2 = mass/ (height * height)

// var mark,
//   john,
//   markMas,
//   johnMass,
//   markHeight,
//   johnHeight,
//   markBmi,
//   johnBmi,
//   higherBMI;

// mark = "Mark";
// john = "John";
// markMas = 75;
// johnMass = 76;
// markHeight = 6;
// johnHeight = 6;
// markBmi = markMas / (markHeight * markHeight);
// johnBmi = (johnMass / johnHeight) ^ 2;

// higherBMI = false;

// if (markBmi > johnBmi) {
//   console.log(`${mark} has a higher BMI then ${john}`);
// } else {
//   console.log(`${john} has a higher BMI then ${mark}`);
// }

// var firstName = "Abdi";
// var age = "25";

// age >= 18 //if statement here
//   ? console.log(firstName + " can go to war.") //what happens after the ? is what would happen
//   : //the if statement, and the : is the consquence of the else statement
//     console.log(firstName + " is too young for war."); //else statement

// var war = age >= 30 ? "war" : "no war";
// console.log(war);

// var john, mike, johnAverage, mikeAverage;

// john = "Johns";
// mike = "Mikes";

// johnAverage = 89 + 120 + 183 / 3;
// mikeAverage = 186 + 94 + 123 / 3;

// johnAverage > mikeAverage
//   ? console.log(john + " team scored more points")
//   : console.log(mike + " team scored more points.");

// Function takes in an argument which is birthyear
// function calcAge(birthYear) {
//   // we subtract the current year from the birthyear
//   return 2020 - birthYear;
// }

// // age of john is found by invoking the function calcAge which is 2020-1990 = 30
// var ageJohn = calcAge(1990);
// // age of john is found by invoking the function calcAge which is 2020-1945 = 75
// var ageMike = calcAge(1945);
// // age of john is found by invoking the function calcAge which is 2020-1650 = 375
// var ageStacy = calcAge(1650);
// console.log(ageJohn, ageMike, ageStacy);

// // Takes two arguments, year and firstName, which will be passed when we invoke the
// // function. The function is trying to determine the number of years until Retirement.
// function yearsUntilRetirement(year, firstName) {
//   // Find the age of the person
//   var age = calcAge(year);
//   //   declare variable to subtract the age of retirement from the age of the person
//   var retirement = 65 - age;
//   //   console log the result
//   console.log(firstName + " retires in " + retirement + " years.");
// }

// // 1990 and "john" are the two args that the function takes.
// yearsUntilRetirement(1900, "Rohn");

// var names = ["John", "Mark", "Jane"];
// var years = new Array(1990, 1969, 1948);

// console.log(names, years);

// bills
// var bill = [124, 48, 268];

// declares a function which will calculate the tips of an array of 'bills'
// let calcTips = function (arr) {
//   // array to hold our tips in
//   let tips = [];
//   //   loop through array to calculate the tips of each index value
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 50) {
//       result = arr[i] * 0.2;
//       tips.push(result);
//     } else if (arr[i] > 50 && i < 200) {
//       result = arr[i] * 0.15;
//       tips.push(result);
//     } else {
//       result = arr[i] * 0.1;
//       tips.push(result);
//     }
//   }
//   return tips;
// };

// // declare function to find the tips plus the bills
// let finalBill = function (arr, tips) {
//   let finalBill = [];
//   // get tips from the calcTips function
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < tips.length; j++) {
//       finalBill.push(arr[i] + tips[j]);
//     }
//   }
//   return finalBill;
// };

// // array of bills
// let bill = [124, 48, 268];
// // finds the tip
// let calc = calcTips(bill);
// // finds the tip + bill
// let fb = finalBill(calc, bill);

// console.log(calc);
// console.log(fb);

// let calcFinal = function(bill){

// }

// Objects

// var john = {
//   firstName: "John",
//   lastName: "Smith",
//   birthYear: 1992,
//   family: ["Jane", "Mark", "Bob"],
//   job: "teacher",
//   isMarried: false,
//   calcAge: function () {
//     this.age = 2020 - this.birthYear;
//   },
// };

// john.calcAge();
// console.log(john);

// Coding challenge 2
// var ford = {
//   model: "Ford Mustang",
//   speed: "400",
//   mpg: "25",
//   similiarModels: [
//     "2020 Chevrolet Camaro",
//     "2019 Ford Mustang",
//     true,
//     "true",
//     195,
//     2.3,
//     5.0,
//   ],
//   calcDistanceF: function () {
//     this.distanceFord = (this.speed / 2) * this.mpg;
//     return this.distanceFord;
//   },
// };

// var audi = {
//   model: "Audi A3",
//   speed: "428",
//   mpg: "36",
//   similiarModels: ["Audi A4", "Audi A5", false, "true", 195],
//   calcDistanceA: function () {
//     this.distanceAudi = (this.speed / 2) * this.mpg;
//     return this.distanceAudi;
//   },
// };

// // ford.calcDistanceF();
// // audi.calcDistanceA();

// // console.log(ford);
// // console.log(audi);
// // console.log(this.distanceAudi); //undefined
// // console.log(audi.distanceAudi); //gets distance

// if (ford.calcDistanceF() >= audi.calcDistanceA()) {
//   console.log(`${ford.model} goes further than ${audi.model}`);
// } else {
//   console.log(`${audi.model} goes further than ${ford.model}`);
// }

// for (let i = 0; i < ford.similiarModels.length; i++) {
//   //   if (typeof ford.similiarModels[i] === "string") continue;
//   console.log(ford.similiarModels[i]);
// }
// for (let i = ford.similiarModels.length - 1; i >= 0; i--) {
//   //   if (typeof ford.similiarModels[i] === "string") continue;
//   console.log(ford.similiarModels[i]);
// }

// Final Code Challenge

var john = {
  bill: [124, 48, 268, 180, 42],
  tips: [],
  finalBill: [],
  totalTips: [],
  calcTips: function () {
    let percentageA = 0.2;
    let percentageB = 0.15;
    let percentageC = 0.1;

    for (let i = 0; i < this.bill.length; i++) {
      if (this.bill[i] <= 50) {
        result = percentageA * this.bill[i];
        final = result + this.bill[i];
        this.tips.push(result);
        this.finalBill.push(final);
        // return result
      } else if (this.bill[i] >= 50 && this.bill[i] <= 200) {
        result = percentageB * this.bill[i];
        final = result + this.bill[i];
        this.tips.push(result);
        this.finalBill.push(final);
      } else if (this.bill[i] >= 200) {
        result = percentageC * this.bill[i];
        final = result + this.bill[i];
        this.tips.push(result);
        this.finalBill.push(final);
      }
    }
    // return this.tips;
  },
};

john.calcTips(john.bill);
// console.log(john);

var mark = {
  bill: [77, 475, 110, 45],
  tips: [],
  finalBill: [],
  totalTips: [],
  calcTips: function () {
    let percentageA = 0.2;
    let percentageB = 0.1;
    let percentageC = 0.25;

    for (let i = 0; i < this.bill.length; i++) {
      if (this.bill[i] <= 100) {
        result = percentageA * this.bill[i];
        final = result + this.bill[i];
        this.tips.push(result);
        this.finalBill.push(final);
        // return result
      } else if (this.bill[i] >= 100 && this.bill[i] <= 300) {
        result = percentageB * this.bill[i];
        final = result + this.bill[i];
        this.tips.push(result);
        this.finalBill.push(final);
      } else if (this.bill[i] >= 300) {
        result = percentageC * this.bill[i];
        final = result + this.bill[i];
        this.tips.push(result);
        this.finalBill.push(final);
      }
    }
    // return this.tips;
  },
};
mark.calcTips(mark.bill);
// console.log(mark);

let averageTips = function (arr) {
  let sum = 0;
  len = arr.length;
  //   loop through tips array to find total of all values
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / len;
};

markTotalTips = averageTips(mark.tips);
johnTotalTips = averageTips(john.tips);
john.totalTips.push(johnTotalTips);
mark.totalTips.push(markTotalTips);

console.log(mark);
console.log(john);

if (john.totalTips >= mark.totalTips) {
  console.log(
    "John on average paid " +
      john.totalTips +
      " which is higher than Marks " +
      mark.totalTips
  );
} else {
  console.log(
    "Mark on average paid " +
      mark.totalTips +
      " which is higher than John " +
      john.totalTips
  );
}
