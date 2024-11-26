const selectNetworkEl = document.getElementById("selectNetwork");
const inputEL = document.getElementById("input-amount");
// const pinEl = document.getElementById('generatedPin')
const userEl = document.getElementById("users-list");

// console.log(pinEl);
// const  = document.getElementById('selectNetwork')

const usersListEl = [];
const rechargedCards = [];

const netOption = [
  { name: "MTN", rechargePin: "*311*" },
  { name: "GLO", rechargePin: "*123*" },
  { name: "AIRTEL", rechargePin: "*126*" },
  { name: "ETISALAT", rechargePin: "*120*" },
];

// console.log(vouchUserDiv);

let minimumAmount = 100;
const genPin = document.getElementById("generateButn");
// console.log(genPin);
genPin.addEventListener("click", () => {
  let rechargeKey = document.getElementById("rechargePin");
  let rechargeCode = document.getElementById("pinCode");
  let rechargePinEl = { number: Math.trunc(Math.random() * 7030245829455739) };

  if (selectNetworkEl.value === "") {
    alert("Please select your network to proceed ↡↡↡");
  }
  if (inputEL.value === "") {
    alert("Recharge Card amount ₦ is empty 🙄");
  } else if (minimumAmount > inputEL.value) {
    alert("The Minimum amount to recharge is ₦100 (❁´◡`❁)");
  } else if (inputEL.value > 1000) {
    alert("The Maximum amount to recharge is ₦1000 (❁´◡`❁)");
  } else {
    rechargeCode.innerHTML = ` 
               <div class="logPin">
       <p class="boxCode">${rechargePinEl.number}</p>
       </div>

 `;

    if (selectNetworkEl.value === netOption[0].name) {
      rechargeKey.innerHTML = ` 
    <p> *311* ${rechargePinEl.number}</p>
    `;
    } else {
      `   <p>${rechargePinEl.number}</p>`;
    }

    if (selectNetworkEl.value === netOption[1].name) {
      rechargeKey.innerHTML = ` 
     <div class="logPin">
       <p> *123* ${rechargePinEl.number}</p>
       </div>
  
    `;
    } else {
      `   <p>${rechargePinEl.number}</p>`;
    }

    if (selectNetworkEl.value === netOption[2].name) {
      rechargeKey.innerHTML = ` 
    <p> *126* ${rechargePinEl.number}</p>
    `;
    } else {
      `   <p>${rechargePinEl.number}</p>`;
    }

    if (selectNetworkEl.value === netOption[3].name) {
      rechargeKey.innerHTML = ` 
    <p> *120* ${rechargePinEl.number}</p>
    `;
    } else {
      `   <p>${rechargePinEl.number}</p>`;
    }
  }
});

let clicked = false;
recharge.addEventListener("click", () => {
  if (!clicked) {
    alert("VOUCHER AS BEEN SUCCESSFULLY RECHARGED 🎉");
    clicked = true;
  } else {
    alert("VOUCHER AS BEEN USED 😥↡↡↡");
  }
});

const save = () => {
  const recharge = document.getElementById("recharge");
  const boxCode = document.querySelector(".boxCode");
  const rechargeKey = document.getElementById("rechargePin");
  const InpUser = {
    network: selectNetworkEl.value,
    amount: inputEL.value,
    code: rechargeKey.textContent,
    rechargePin: boxCode.textContent,
    status: clicked ? "Used" : "Unused",
  };

  usersListEl.push(InpUser);
  console.log(InpUser);

  userEl.innerHTML = "";
  usersListEl.forEach((ele, index) => {
    userEl.innerHTML += `
    <tr>
<td>${index + 1}</td>
<td>${ele.network}</td>
<td>${ele.amount}</td>
<td>${ele.code}</td>
<td>${ele.rechargePin}</td>
<td>${ele.status}</td>
</tr>
    `;
  });
};
