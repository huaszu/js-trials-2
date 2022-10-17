'use strict';

// 1. printIndices
function printIndices(items) {
  for (let i = 0; i < items.length; i += 1) {
    console.log(`${items[i]} ${i}`);
  }
}

// 2. everyOtherItem
function everyOtherItem(items) {
  let result = [];

  // console.log(result);

  for (let i = 0; i < items.length; i += 1) {
    if (i % 2 === 0) {
      // console.log(i);
      result.push(items[i]);
    }
  }

  console.log(result);
}


// 3. smallestNItems
function smallestNItems(items, n) {
  items.sort((a, b) => a - b); //we just looked at the lab instructions and copied what they had. they explained it well
  console.log(items);
}
