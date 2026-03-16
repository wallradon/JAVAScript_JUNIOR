const itemA = 10;
const itemB = 15;
const coinOne = 1;
const coinFive = 5;
let state = true;
let stateBuy = true;
let selectItem;
let selectBuy;
let wallet = 0;
let userCoin = 0;
let rechang;
console.log(`START`);

while (state) {

  if (wallet >= itemA) {
    selectBuy = prompt(`you ready to select Item Y|N?`);
    if (selectBuy == 'y' || selectBuy == 'Y') {
      state = false;
    } else {
      userCoin = Number(prompt(`EnterCoinOnly 1 Or 5 `));
    }
  } else {
    userCoin = Number(prompt(`EnterCoinOnly 1 Or 5 `));
  }

  if (userCoin == 5) {
    wallet += coinFive;
    userCoin = 0;
  } else if (userCoin == 1) {
    wallet += coinOne;
    userCoin = 0;
  }
  else {
    console.log(`Enter Coin 1 Or 5 Only`);
  }

  console.log(`Wallet = ${wallet}`);
}

while (stateBuy) {

  if (selectBuy == 'y' || selectBuy == 'Y') {
    if (wallet >= itemB) {
      console.log(`You can Select any item`);
      selectItem = prompt(`you wont itemA Or itemB  ?`);
      if (selectItem == 'a') {
        wallet -= itemA;
      } else if (selectItem == 'b') {
        wallet -= itemB;
      }
      selectItem = prompt(`do you need anything else ?`);
      if (wallet == 0 || selectItem == 'N' || selectItem == 'n') {
        selectBuy = 'n';
        stateBuy = false;
      }
    } else if (wallet >= itemA) {
      selectItem = prompt(`you wont itemA Y|N ?`);
      if (selectItem == 'y' || selectItem == 'Y') {
        wallet -= itemA;
        console.log(`You Buy itemA`);
        if (wallet == 0) {
          stateBuy = false;
        }
      } else {
        alert(`You can buy only itemA`);
      }
    } else {
      stateBuy = false;
    }
  } else {
    stateBuy = false;
  }
  console.log(`Wallet = ${wallet}`);
}

if (wallet != 0) {
  rechang = prompt(`you wont chang Y|N ?`);
  if (rechang == 'y' || rechang == 'Y') {
    alert(`this is a change ${wallet} BTN`);
  } else {
    alert(`Thank You`);
  }
}