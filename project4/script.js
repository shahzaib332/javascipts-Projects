const baseCurrency= document.getElementById('base-currency');
const targetCurrency= document.getElementById('target-currency');
const baseamount= document.getElementById('base-amount');
const targetamount= document.getElementById('target-amount');

const exchangeRate= document.getElementById('xrate');
const flipbtn= document.getElementById('flip');

//function to fetch exchange rate from API and update DOM
function calculate(){
    //get currency code for base andd traget currencies
    const baseCode=baseCurrency.value;
    const targetCode=targetCurrency.value;
    console.log(baseCode,targetCode);
    // execute fetch
    fetch(`https://v6.exchangerate-api.com/v6/356f84c7dcbaf2261b0a3876/latest/${baseCode}`)

    // handling fetch response
    .then( res=> res.json() )
    .then(data=>{
        // get the exchange rate for base cureency to target currency
        const rate=data.conversion_rates[targetCode];
        //update DOm with exchange rate
        exchangeRate.innerText = `1 ${baseCode} = ${rate} ${targetCode}`;
        //calculate amount of target currency based on exchange rate
        targetamount.value=(baseamount.value*rate).toFixed(2);
    }
        )



};
// Event listener
// 1. listen for change to base currency
baseCurrency.addEventListener('change',calculate);

//2. listen for input in base amount input field
baseamount.addEventListener('input', calculate);
//3. listen for change to target currency selectbox
targetCurrency.addEventListener('change',calculate);

//4. listen for input in target amount input field
targetamount.addEventListener('input',calculate);
//5. listen for flip button
flipbtn.addEventListener('click',() =>{
    // save the value of base currency in temp value
    const  tempCurrency=baseCurrency.value;
    baseCurrency.value=targetCurrency.value;
    //reaassign target currency using the oriiginal base cureency
    targetCurrency.value=tempCurrency;
    calculate();
})

// Initial calculation
calculate();
