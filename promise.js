var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof a === 'number' && typeof b === 'number'){
        resolve(a + b);  
      }else{
        reject('Arguments not valid');  
      }
    }, 2000);  
  });  
};

asyncAdd(10, 15).then((res) => {
  console.log('Result:', res);
  return asyncAdd(res, 10);
}, (errorMessage) => {
  console.log(errorMessage); 
}).then((res) => {
 console.log('Should be 35', 'Result:', res); 
}, (errorMessage) => {
 console.log('Arguments should be numbers'); 
})

// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve('Worked');
//     reject('Unable to complete the promise');
//   }, 5000);
// });
// 
// somePromise.then((result) => {
//   console.log('Success: ', result);  
// }, (errorMessage) => {
//   console.log('Error: ', errorMessage);  
// })


