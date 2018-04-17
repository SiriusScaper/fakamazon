const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
	host: 'localhost',
	port: 8888,

	user: 'root',
	password: 'root',
	database: 'fakamazon_db'
});

// console.log();
// --create table sales as select products id_item, price, stock_qunatity..+ purchase_quantity, total cost(purchase_quantity * price), curdate()

// --JS logic to display
// --cost of purchase

// --decrease quantity

// --/create table manager1 as select id_item, product_name... + curdate() as rec_date
// --from products

// --alter table manager1 add rec_date update table manager1 set rec_date = curdate() (date'mm/dd/yyyy')
