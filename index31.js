function step1() {
  return new Promise((resolve, reject) => {
    let success = true;
    setTimeout(() => {
      if (success) {
        resolve(" step 1 Kaam ho gya ✅");
      } else {
        reject("❌ kaam nhi hua");
      }
    }, 2000);
  });
}
function step2(message) {
  return new Promise((resolve, reject) => {
    let success = true;
    setTimeout(() => {
      if (success) {
        resolve(message + " step 2 Kaam ho gya ✅");
      } else {
        reject("❌ kaam nhi hua");
      }
    }, 2000);
  });
}

function step3(message) {
  return new Promise((resolve, reject) => {
    let success = true;
    setTimeout(() => {
      if (success) {
        resolve(message + " step 3 Kaam ho gya ✅");
      } else {
        reject("❌ kaam nhi hua");
      }
    }, 2000);
  });
}

step1()
  .then((message) => step2(message))
  .then((message) => step3(message))
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
