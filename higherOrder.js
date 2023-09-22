const addUser = document.getElementById("addUser");
const double = document.getElementById("double");
const filter = document.getElementById("filter");
const sort = document.getElementById("sort");
const total = document.getElementById("total");
const main = document.getElementById("main");

// global variable
const url = "https://randomuser.me/api/";

let users = [];

//functions

const init = () => {
  addRandomUser();
  addRandomUser();
  addRandomUser();
  // console.log(users);
};

const formateMoney = (num) => {
  return (
    "₹" + num.toFixed(2).replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ",")
  );
};

const updateDom = (users) => {
  main.innerHTML = "";

  users.forEach((user) => {
    const list = document.createElement("div");
    list.innerHTML = `<div>
      <p>${user.fullName}   ${formateMoney(user.balance)}</p>
    </div>`;
    main.appendChild(list);
  });
};

const addRandomUser = async () => {
  const getRandomUser = async () => {
    const response = await fetch(url);
    const data = await response.json();

    const fullName =
      data.results[0].name.first + " " + data.results[0].name.last;

    const balance = Math.trunc(Math.random() * 100000) + 10000;

    const user = { fullName, balance };

    console.log(fullName);
    console.log(balance);
    console.log(user);
    return user;
  };

  users.push(await getRandomUser());

  updateDom(users);
};

const doubleBalance = () => {
  users = users.map((user) => {
    return { ...user, balance: user.balance * 2 }
  })
  console.log(users)

  updateDom(users)
};

const filterBalance = () => {
  users = users.filter((user) => user.balance >= 50000)

  updateDom(users)
}

const sortUsers = () => {
  users = users.toSorted((userOne, userTwo) => userOne.balance - userTwo.balance)
  console.log(users)
  updateDom(users)
}

let show;

const totalBalance = () => {
  show = true
  const total = users.reduce((acc, curr) => acc + curr.balance, 0)
  console.log(total)

  const showTotal = document.createElement("div")
  showTotal.innerHTML = ""
  showTotal.innerHTML = `Total = ${total}`
  main.appendChild(showTotal)
}

// event listeners

addUser.addEventListener("click", addRandomUser);

double.addEventListener("click", doubleBalance);

filter.addEventListener("click", filterBalance);

sort.addEventListener("click", sortUsers);

total.addEventListener("click", totalBalance);

//initial settings
init();
