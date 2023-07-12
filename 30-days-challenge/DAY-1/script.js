function numbersThenCharacters(a) {
  let nums = [];
  let chars = [];
  var n = a.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < a[i].length; j++) {
      if (typeof a[i][j] === "number") {
        nums.push(a[i][j]);
      } else {
        chars.push(a[i][j]);
      }
    }
  }
  nums.sort((a, b) => a - b);
  chars.sort();
  let sol = [];
  for (let i = 0; i < n; i++) {
    let sortarr = [];
    for (let j = 0; j < a[i].length; j++) {
      if (nums.length === 0) {
        sortarr.push(chars.shift());
      } else {
        sortarr.push(nums.shift());
      }
    }
    sol.push(sortarr);
  }
  return sol;
}
function sorttheArray() {
  const inputArray = document.getElementById("r").value;
  const parsedArray = JSON.parse(inputArray);
  const res = numbersThenCharacters(parsedArray);
  document.getElementById("res").textContent = JSON.stringify(res);
}
