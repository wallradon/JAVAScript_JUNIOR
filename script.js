const userReq = prompt(`What would you like calculate today? ( 1:BMI 2:Heart Rate Zone 3:Retirement Age )`);
const MAX_HR = () => {
  const age = Number(prompt(`How Old ?`));
  let maxHR = 220 - age;
  console.log(`MAX : ${maxHR}`);
  for (i = 1; i < 6; i++) {
    showHRZone(maxHR, i);
  }
};

const retirement = () => {
  const year = Number(prompt(`What year were you born ?`));
  console.log(`You Retirement is ${year + 60}`);
}
function bmiCal() {
  const weight = Number(prompt(`How much does it weigh?`));
  const height = Number(prompt(`How much does it height?`));
  let heightPW = (height / 100);
  const BMi = weight / (heightPW * heightPW);
  console.log(`BMi = ${BMi}`);
}
switch (userReq) {
  case '1':
    bmiCal();
    break;
  case '2':
    MAX_HR();
    break;
  case '3':
    retirement();
    break;
  default:
    console.log(`BYE`);
}// eng switch




function showHRZone(maxHR, zone) {
  switch (zone) {
    case 1:
      console.log(`Zone 1 : ${maxHR * 0.5} - ${maxHR * 0.6}`);
      break;
    case 2:
      console.log(`Zone 2 : ${maxHR * 0.6} - ${maxHR * 0.7}`);
      break;
    case 3:
      console.log(`Zone 3 : ${maxHR * 0.7} - ${maxHR * 0.8}`);
      break;
    case 4:
      console.log(`Zone 4 : ${maxHR * 0.8} - ${maxHR * 0.9}`);
      break;
    case 5:
      console.log(`Zone 5 : ${maxHR * 0.9} - ${maxHR * 1.0}`);
      break;
  }
}