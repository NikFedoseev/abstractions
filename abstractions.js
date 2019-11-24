const suqare = (v) => Math.pow(v, 2);
const cube = (v) => Math.pow(v,3);

console.log(suqare(5))
console.log(cube(5))

const forEach = (arr, cb) => {
  for(let i = 0; i < arr.length; i++) {
    cb(arr[i], i)
  }
}

{
  const arr = [1, 2, 3, 4, 5]
  forEach(arr, (el, i) => console.log(el, i))
}

const filter = (arr, cb) => {
  let res = [];
  for(let i = 0; i < arr.length; i++) {
    cb(arr[i], i) && res.push(arr[i])
  }
  return res
}

const greaterThen = (n) => (v) => v > n;
const greaterThen3 = greaterThen(3)

{
  const arr = [1, 2, 3, 4, 5];
  const filtered = filter(arr, greaterThen3);
  console.log(filtered)
}

function sum (arr) {
  let res = 0;
  forEach(arr, el => res = res + el)
  return res;
}

{
  const arr = [1, 2, 3, 4, 5];
  const res = sum(filter(arr, greaterThen3))
  console.log(res)
}

const makeStack = () => {
  const stack = [];
  return {
    add: (el) => stack.push(el),
    get: () => stack.pop(el),
    getStack: () => stack
  }
}

const stack = makeStack();
stack.add(1)
console.log(stack.getStack())

