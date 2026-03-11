let transactions=[];

function addTransaction(){

let type=document.getElementById("type").value;
let category=document.getElementById("category").value;
let amount=parseFloat(document.getElementById("amount").value);

let transaction={type,category,amount};

transactions.push(transaction);

displayTransactions();

updateChart();

}

function displayTransactions(){

let list=document.getElementById("transactionList");

list.innerHTML="";

transactions.forEach(t=>{

let li=document.createElement("li");

li.innerText=`${t.type} - ${t.category} - ${t.amount}`;

list.appendChild(li);

});

}

function updateChart(){

let income=0;
let expense=0;

transactions.forEach(t=>{

if(t.type==="income")
income+=t.amount;

else
expense+=t.amount;

});

let ctx=document.getElementById("myChart");

new Chart(ctx,{

type:"pie",

data:{

labels:["Income","Expense"],

datasets:[{

data:[income,expense]

}]

}

});

}