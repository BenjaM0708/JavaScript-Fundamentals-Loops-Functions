console.log('Exercises Resolution');
console.log(' ');

// 1️⃣ Array Length

function lengthArray(n){
  console.log(n.length);
}

lengthArray([1, 2, 5, 6,]);
console.log(' ');

// 2️⃣ Print Elements with Index

function indexElement(n){
  let i = 0;  
  for (let item of n){
      console.log(n[i] + " is the element number " + (i + 1));
      i++;
  }
}

indexElement([1, 2, 5, 6, 7]);
console.log(' ');

// 3️⃣ Sum of Numbers

function numberSum(n){
  let sum = 0;
    for (let num of n){
    sum += num;
  }

  console.log(sum);

};

numberSum([1, 2, 5, 6, 7]);
console.log(' ');

// 4️⃣ Find the Largest Number

function largerNumber(n){
  
    let largest = 0;
    for (let i = 0; i < n.length; i++){
       if (n[i] > largest){
        largest = n[i];
       }
  }
  console.log(largest);
}

largerNumber([5,1,9,7,3,28,46,19,73,82,461,576,348,535,241,354,214]);
console.log(' ');

// 5️⃣ Reverse an Array

function reverseArray(n){
  let array = [];
    for (let item of n){
       array.unshift(item);
  }

  console.log(array);

};

reverseArray([0, 2, 4, 6, 8, 10]);
console.log(' ');

// 6️⃣ Count a Value

function countValue(n,a){
let count = 0;
    for (let item of n){
       if (item === a){
        count++;
       }
  }

  console.log(count);
}

countValue(["two", "one", "end", "the", "two", "cat", "any", "two"], "two");
console.log(' ');
// 7️⃣ String Loop

function characterPrinting(n){
  for (let letter of n){
    console.log(letter);
  }
};

characterPrinting('casa');
console.log(' ');

// 8️⃣ Pattern Printing

function patternPrinting(n){
  let i = 0;
  let nLine = '';
  
  while (i <= n){
    console.log(nLine);
    nLine += '*';
    i++;
  }
};

patternPrinting(3);
console.log(' ');


