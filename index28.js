function step1() {
  return new Promise((resolve, reject) => {
    let dataBase = true;
    if (dataBase) {
      resolve("step 1 completed");
    } else {
      reject("error in step 1");
    }
  });
}

function step2(message) {
  return new Promise((resolve, reject) => {
    let restaurantOpen = false;
    if (restaurantOpen) {
      resolve(message + "=> step 2 completed");
    } else {
      reject("error in step 2 ");
    }
  });
}

function step3(message) {
  return new Promise((resolve, reject) => {
    let bug = true;
    if (bug) {
      resolve(message + " =>step 3 completed");
    } else {
      reject("error in step 3");
    }
  });
}

step1()
  .then((msg) => step2(msg))
  .then((msg) => step3(msg))
  .then((msg) => console.log("final message: ", msg))
  .catch((err) => console.log(err));
