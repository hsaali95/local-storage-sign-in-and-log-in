const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

// creating toggle password function
const togglePassword = () => {
  const userPassword = document.getElementById("password");
  if (userPassword.type === "password") {
    userPassword.type = "text";
  } else {
    userPassword.type = "password";
  }
};

//creating multiple user account function
const userSignUp = () => {
  const userName = document.getElementById("username");
  const phoneNumber = document.getElementById("number");
  const age = document.getElementById("age");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  // console.log(userName.value);
  // console.log(email.value);
  // console.log(password.value);
  // console.log(phoneNumber.value);
  // console.log(age.value);
  if (
    userName.value !== "" &&
    email.value !== "" &&
    password.value !== "" &&
    phoneNumber.value !== "" &&
    age.value !== ""
  ) {
    //creating object for Multiple user data
    const userObject = {
      username: userName.value,
      phonenumber: phoneNumber.value,
      age: age.value,
      email: email.value,
      password: password.value,
    };
    // console.log(userObject);

    //getting data for creating empty array
    const userData = JSON.parse(localStorage.getItem("userData")) || [];
    console.log(userData);

    //checking condition if user exists
    const checkUserIndex = userData.findIndex((value, ind) => {
      //The findIndex() method returns -1 if no match is found.if match return 0
      return value.email === userObject.email;
      // console.log(value);
    });
    // console.log(checkUserIndex);
    // console.log(email.value);
    if (checkUserIndex === -1) {
      userData.push(userObject);
      localStorage.setItem("userData", JSON.stringify(userData));
      alert("Successfully Sign Up");
      window.location.assign("./login.html");
    } else {
      alert("User Exist");
    }
  } else {
    alert("All fileds are compalsary");
  }
};
//login page function
const loginPage = () => {
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  console.log(email.value);
  console.log(password.value);
  const userData = JSON.parse(localStorage.getItem("userData"));
  console.log(userData);
  const checkUserData = userData.find((value) => {
    return value.email === email.value && value.password === password.value;
  });
  // console.log(checkUserData);

  if (checkUserData) {
    localStorage.setItem("activeUserData", JSON.stringify(checkUserData));
    alert("log in successflly");
    window.location.assign("./dashboard.html");
  } else {
    alert("Try again");
  }

  //send user to dashboard page
  // window.location.assign("./dashboard.html");
};

//logout function
const logOut = () => {
  const activeUserData = JSON.parse(localStorage.getItem("activeUserData"));
  console.log(activeUserData);
  localStorage.removeItem("activeUserData");
  window.location.assign("./login.html");
};

const data = () => {
  const activeUserData = JSON.parse(localStorage.getItem("activeUserData"));
  console.log(activeUserData);
  // const keys = Object.keys(activeUserData);
  // console.log(keys);
  // const a = keys.map((value) => {
  //   return (div.innerHtml = `
  //   <h1>value.username<h1>
  //              <h1>value.email<h1>
  //                <h1>value.password<h1>
  //   `);
  // });
  const div = document.getElementById("container");

  const h1 = document.createElement("h1");
  const h1textnode = document.createTextNode(`
    your name is ${activeUserData.username}`);
  h1.appendChild(h1textnode);
  div.appendChild(h1);
  console.log(h1);

  const h2 = document.createElement("h1");
  const h2textnode = document.createTextNode(`
    your email is ${activeUserData.email}`);
  h2.appendChild(h2textnode);
  div.appendChild(h2);
  console.log(h2);

  const h3 = document.createElement("h1");
  const h3textnode = document.createTextNode(`
    your password is ${activeUserData.password}`);
  h3.appendChild(h3textnode);
  div.appendChild(h3);
  console.log(h3);

  const h4 = document.createElement("h1");
  const h4textnode = document.createTextNode(`
    your phone number is ${activeUserData.phonenumber}`);
  h4.appendChild(h4textnode);
  div.appendChild(h4);
  console.log(h4);

  const h5 = document.createElement("h1");
  const h5textnode = document.createTextNode(`
    your age is ${activeUserData.age}`);
  h5.appendChild(h5textnode);
  div.appendChild(h5);
  console.log(h5);

  // activeUserData.map((value) => {
  //   return (div.innerHtml = `
  //               <h1>value.username<h1>
  //               <h1>value.email<h1>
  //               <h1>value.password<h1>

  // `);
  // });

  // obj.map((e) => {
  //     return table.innerHTML += `
  //     <tr>
  //     <td>${e.name}</td>
  //     <td>${e.cellnumber}</td>
  //     </tr>
  //     `
  // })
};

const goToSignUpPage = () => {
  window.location.assign("./signup.html");
};
