const transactionsUl = document.getElementById('transactions');

const fakeTransactions = [
	{ id: 1, name: 'Salário', amount: 2000 },
	{ id: 2, name: 'Bônus', amount: 189.55 },
	{ id: 3, name: 'Aluguel', amount: -700 },
	{ id: 4, name: 'Compra no Mercado', amount: -155 },
	{ id: 5, name: 'Conta de Energia', amount: -260.28 },
	{ id: 6, name: 'Venda PS4', amount: 800 },
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

const init = () => {
    fakeTransactions.forEach(addTransactions);
}

init();