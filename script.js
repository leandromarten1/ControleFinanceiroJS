const transactionsUl = document.getElementById('transactions');
const displayBalance = document.getElementById('balance');
const displayIncome = document.getElementById('money-plus');
const displayExpense = document.getElementById('money-minus');
const formulary = document.getElementById('form');
const nameTransaction = document.getElementById('text');
const valueTransaction = document.getElementById('amount');

const fakeTransactions = [
	
];

const addTransactions = (transaction) => {
	const operator = transaction.amount > 0 ? '+' : '-';
	const CSSClass = transaction.amount > 0 ? 'plus' : 'minus';
	const li = document.createElement('li');
	const amountWithoutOperator = Math.abs(transaction.amount);

	li.classList.add(CSSClass);
	li.innerHTML = `
        ${transaction.name} <span>${operator} R$ ${amountWithoutOperator}</span><button class="delete-btn">x</button>
    `;

	transactionsUl.prepend(li); // prepend() = Add element as first child
};

const updateValues = () => {
	const amountTransactions = fakeTransactions.map(
		(transaction) => transaction.amount,
	);

	const totalAmount = amountTransactions
		.reduce((accumulator, value) => accumulator + value, 0)
		.toFixed(2);

	const income = amountTransactions
		.filter((value) => value > 0)
		.reduce((accumulator, value) => accumulator + value, 0)
		.toFixed(2);

	const expense = amountTransactions
		.filter((value) => value < 0)
		.reduce((accumulator, value) => accumulator + value, 0)
		.toFixed(2);

	displayBalance.textContent = `R$ ${totalAmount}`;
	displayIncome.textContent = `R$ ${income}`;
	displayExpense.textContent = `R$ ${expense}`;
};

const randomID = () => {
    return Math.round(Math.random() * 1000)
}

const init = () => {
    transactionsUl.innerHTML = '';
	fakeTransactions.forEach(addTransactions);
	updateValues();
};

init();

formulary.addEventListener('submit', (event) => {
    event.preventDefault();

    const transactionName = nameTransaction.value;
    const transactionAmount = valueTransaction.value;

    if (nameTransaction.value === '' || valueTransaction.value === '') {
        alert ('Todos os campos devem ser preenchidos!')
        nameTransaction.focus()
        return
    }

    const transaction = { 
        id: randomID(),
        name: transactionName,
        amount: Number(transactionAmount),
    }

    fakeTransactions.push(transaction)
    init()

    nameTransaction.value = '';
    valueTransaction.value = '';
    
});
