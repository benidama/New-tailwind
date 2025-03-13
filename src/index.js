const num = [12, 45, 66, 75];
function Add(a, d) {
  console.log(a + d);
}
Add(78, 34);

//Rest parameter
function RestFUN(...numbers) {
  var Sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) Sum = Sum + numbers[i];
  }
  return Sum;
}
console.log(RestFUN(34, 23, 6, 90, 32, 19));

//closure
function closureFun(el1) {
  console.log(el1);
  function Amabuye() {
    console.log("Nibyo kbx ntakubeshya kurimo.");
  }
  Amabuye();
}
closureFun("Ese koko nibyo cg nukubeshya?");
//callback function
// const num = [23, 45, 67];
function addNum(arr) {
  arr(56, 89, 12, 10);
}

addNum((...num) => {
  let sum = 0;
  for (i = 0; i < num.length; i++) {
    sum += num[i];
  }
  console.log(sum);
});

//example 2
function names(n) {
  console.log(n);
}

function students(na, na1, call) {
  const name = na + ", " + na1;
  call(name);
}
students("Joanes", "Quintus", names);
