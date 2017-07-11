// console.log('--------- es7 async/await ---------');

async function sleep(timeout) {  
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve();
    }, timeout);
  });
}

(async function() {
  console.log('Do some thing, ' + new Date()); // Do some thing, Tue Jul 11 2017 22:01:45 GMT+0800 (CST)
  await sleep(3000);
  console.log('Do other things, ' + new Date()); // Do other things, Tue Jul 11 2017 22:01:48 GMT+0800 (CST)
})();


async function funcName(arg) {
  try {
    console.log('start', arg);
    await firstFunction(1000);
    // waiting...
    secondaryFunction();
  } catch (err) {
    console.log(err);
  }
}

function firstFunction(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function secondaryFunction() {
  // some ajax thing
  console.log('ajax....')
}


funcName('Karen');