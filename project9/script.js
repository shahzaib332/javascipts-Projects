//get dom element
const balance = document.getElementById('balance');
const moneyCredit = document.getElementById('money-credit');
const moneyDebit= document.getElementById('money-debit');
const list = document.getElementById('list');
const form = document.getElementById('add-form');
const reason = document.getElementById('reason');
const amount = document.getElementById('amount');

// Temporaray array of transaction to be replaced with local storage
const Transactions =[
    {id: 1,reason: 'Salary', amount:5000},
    {id: 2,reason: 'Breakfast', amount:-20},
    {id: 3,reason: 'Lunch', amount:-30},
    {id: 4,reason: 'dinner', amount:-60},

];
// get transaction data from storage 
let transactions= Transactions;
 
// functio  to display transaction in dom-history section
function displayTransaction(transaction){
    // cslculate if transaction is credit or debit
    const type=transaction.amount > 0 ? '+' : '-';
    //create aa list item for the transaction
    const transactionLI=document.createElement('li');
    // determine class based on transaction  type.If psitive then credit otherwise debit
    transactionLI.classList.add(transaction.amount > 0 ? 'credit' : 'debit');
    // assign the inner html for transaction li
    transactionLI.innerHTML=`
    ${transaction.reason}<span>${transaction.amount}</span>
    <button class="delete-btn"  onclick="deleteTransaction(${transaction.id})">X</button>

    `;
    // Add the list items in the dom under the transaction history list
    list.appendChild(transactionLI);
}

// FUNCTION TO UPDATE ALL BALANCE
function updateBalance(){
      // create a new array just the amount from the transaction array
      const transactionAmounts= transactions.map(transaction=>transaction.amount);
    // calculate total balance value
    const totalBalance=transactionAmounts.reduce( (acc,amount)=>(acc+=amount),0);
     // calculate total credit balance
     const creditBalance=transactionAmounts
                      .filter(amount => amount > 0)
                       .reduce((acc,amount) => (acc +=amount), 0);

 // calculate total debit balance
 const debitBalance=transactionAmounts
 .filter(amount => amount < 0)
  .reduce((acc,amount) => (acc +=amount), 0);

  // Update valued in the dom
  // for overall balace creddit balance debit balance
balance.innerText=`$${totalBalance}`;
moneyCredit.innerText=`$${creditBalance}`;
moneyDebit.innerText=`$${debitBalance}`;
};
// function to create a random Id
function CreateID(){
    return Math.floor(Math.random()*100000000);
}



// function to add transaction
function addTransaction(e){
    // stop the page reload
    e.preventDefault();
    // check if form has valid data
    if(reason.value.trim()=== '' || amount.value.trim()===''){
        alert('Please provide a valid reson and transaction amount')
    }else{
        // create an object for transaction
        const transaction={
            id: CreateID(),
            reason: reason.value,
            amount: amount.value
        }
        // push the transactio  into an array
        transactions.push(transaction);
        // display the new transaction in dom
        displayTransaction(transaction);
        // updatae all the balance
        updateBalance();
        // Empty the fields
        reason.value='';
        amount.value='';
    }

     };
     // function to delete a  transaction
     function deleteTransaction(id){
         transactions=transactions.filter(transaction=>transaction.id !== id);
// initialize the app agaain to update dom
init();
     };



// function to Initialize Application
function init(){
//Clear all transaction history
list.innerHTML="";
// Display all transactions in data base in dom
transactions.forEach(displayTransaction);
// upadte all balance value
updateBalance();
    

};
// event listener
//1. listen for form to add a transaction
form.addEventListener('submit',addTransaction);



init();




