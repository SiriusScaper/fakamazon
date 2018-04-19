const mysql = require('mysql');
const inquirer = require('inquirer');
const Table = require('cli-table');

const con = mysql.createConnection({
	host: 'localhost',
	port: '8888',

	user: 'root',
	password: 'root',
	database: 'fakamazon_db'
});

// const table = new Table({
// 	head: ['Product ID', 'Product Name', 'Category', 'Price', 'Current Stock']
// });

// table.push(
// 	{ '1': ['Value Row 1 Col 1', 'Value Row 1 Col 2'] },
// 	{ '2': ['Value Row 2 Col 1', 'Value Row 2 Col 2'] },
// 	{ '3': ['Value Row 2 Col 1', 'Value Row 2 Col 2'] }
// );

// console.log(table.toString());

function createTable(res) {
	const tableHead = Object.keys(res[0]);
	const table = new Table({
		head: tableHead
	});
	res.map(row => {
		let tableArr = new Array();
		tableHead.map(column => {
			tableArr.push(row[column]);
		});
		table.push(tableArr);
	});
	console.log(table.toString());
}

con.connect(function(err) {
	if (err) throw err;
	con.query('SELECT * FROM products', function(err, result, fields) {
		if (err) throw err;
		createTable(result);
		inquirer
			.prompt([
				{
					name: 'id_item',
					type: 'input',
					message: 'What would you like to purchase? (Enter item id)'
				},
				{
					name: 'amount',
					type: 'input',
					message: 'How many do you want?'
				}
			])
			.then(value => {
				const product = value.id_item;
				const amount = value.amount;
				placeOrder(product, amount);
			});
	});
});

function placeOrder(product, amount) {
	con.query(
		'SELECT * FROM products WHERE ?',
		[{ id_item: product }],
		(err, res) => {
			const item = res[0].product_name;
			const itemStock = res[0].stock_quantity;
			const price = res[0].price;
			const total = (price * amount).toFixed(2);
			if (err) throw err;
			console.log(`Stock of ${item} : ${itemStock}`);
			if (itemStock < amount) {
				console.log(`Insufficient stock for this product`);
			} else {
				console.log(product);
				const updateStock = parseFloat(itemStock) - parseFloat(amount);
				con.query(
					'UPDATE products SET stock_quantity = ' +
						updateStock +
						'WHERE id = ' +
						product,
					(err, res) => {
						console.log(`Thanks for buying this shit your total is ${total}`);
					}
				);
			}
			con.end();
			// res[0].stock_quantity < amount
			// 	? console.log(`Insufficient Stock for this product`)
			// 	: console.log(product);
		}
	);
}
