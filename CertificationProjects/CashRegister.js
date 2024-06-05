function checkCashRegister(price, cash, cid) {
    let currencyUnit = {
      "PENNY": 0.01,
      "NICKEL": 0.05,
      "DIME": 0.1,
      "QUARTER": 0.25,
      "ONE": 1,
      "FIVE": 5,
      "TEN": 10,
      "TWENTY": 20,
      "ONE HUNDRED": 100,}
    let change = cash - price;
    let cidTotal = Number(cid.reduce((sum, element) => sum + element[1], 0).toFixed(2));
  
    if (cidTotal < change) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    } else if (cidTotal === change) {
      return {status: "CLOSED", change: cid}
    } else {
      let newArr = [];
  
      for (let i = (cid.length - 1); i >= 0; i--) {
        let currencyName = cid[i][0];
        let currencyValueTotal = cid[i][1];
        let currencyValue = currencyUnit[currencyName];
        let currencyAmount = Number((currencyValueTotal / currencyValue).toFixed(0));
        let currencyReturn = 0;
  
        while(change >= currencyValue && currencyAmount > 0) {
          change -= currencyValue;
          change = Number(change.toFixed(2));
          currencyAmount--;
          currencyReturn++;
        }
  
        if (currencyReturn > 0) {
          newArr.push([currencyName, currencyReturn * currencyValue])
        }
      }
  
      if (change > 0) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
      }
  
      return {status: "OPEN", change: newArr};
    }
  }
  console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
  
  console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));