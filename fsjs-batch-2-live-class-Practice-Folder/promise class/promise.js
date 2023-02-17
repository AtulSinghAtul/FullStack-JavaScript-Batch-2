const userOne = () => {
  console.log("hello i am user one");
};

const userTwo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("user found");
    }, 2000);
  });
  console.log("hello i am user Tne");
};

const userThree = () => {
  console.log("hello i am user three");
};

const waiter = async () => {
  let guestOne = userOne();
  console.log(guestOne);

  let guestTwo = await userTwo();
  console.log(guestTwo);

  let guestThree = userThree();
  console.log(guestThree);
};
waiter();
