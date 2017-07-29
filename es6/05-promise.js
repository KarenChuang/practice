'use strict'

// 01
let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Good to go!');
  }, 2000);

  setTimeout(() => {
    resolve('oh!');
  }, 500);
})

myPromise.then(res => {
  console.log(res);
})
.catch(err => {
  console.log(err);
})

//02
let myPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('myPromise1');
  }, 2000);
})

let myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('myPromise2');
  }, 2000);
})

Promise.all([myPromise1, myPromise2])
  .then((res) => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  })


//03
fetch(`https://api.github.com/users/karenchuang`)
  .then((res) => {
    res.json().then((data) => {
      console.log(data)
    })
  })
  .catch(err => {
     console.log('fail');
  })