/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Amazon.

Given an array of numbers, find the maximum sum of any contiguous subarray of the array.

For example, given the array [34, -50, 42, 14, -5, 86], the maximum sum would be 137, since we would take elements 42, 14, -5, and 86.

Given the array [-5, -1, -8, -9], the maximum sum would be 0, since we would not take any elements.

Do this in O(N) time.
*/

const sortArray = (yourArray) => {
  let temp = yourArray.slice().sort(function(a,b){return a-b})
  return temp
}

const findContigSum = (yourArray) => {
  let output = 0;
  let tempval;
  let tempArray = [];
  for (i=0; i < yourArray.length-1; i++) {
    if (yourArray[i] < yourArray[i+1]) {
      if (tempArray.length == 0) {
        tempArray.push(yourArray[i],yourArray[i+1])
      } else {
        tempArray.push(yourArray[i+1])
      }
    }
  }
  return tempArray;
}

let test0 = [34, -50, 42, 14, -5, 86]
let test1 = [-5, -1, -8, -9]

$(document).ready(function() {
  $('#form1').submit(function(event){
    event.preventDefault()
    let input0 = $('#input-section-0').val()
    console.log(input0)
    let input1 = input0.replace(/'/g,'"')
    let input2 = JSON.parse(input1)
    $('#output-section-0').text(JSON.stringify(input2))

  })
});
