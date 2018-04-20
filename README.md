# fakamazon

## CLI Fake Amazon using mySQL DB

This is a node application utilizing inquirer, mysql and cli-table. It's a mock store similar to amazon.

### Installation

I will assume you have node installed and can run npm.

1.  Clone or download this repo
2.  If you downloaded it, unzip it.
3.  Navigate to the directory location either in a terminal/bash client or your file explorer and opena terminal in that directory.
4.  Then run npm install
5.  Finally after the package dependencies have been installed run the app with node fakamazonCustomer.js

### Customer Usage

1.  When you run the app as seen below it presents you with a table of available products and prompts for the user to select one based on the ID of the product.

2.  Then it prompts for quantity

3.  If the user enters in a valid response to both prompts it will total the purchase and tell the user how much it is.

4.  If the user does not enter a valid response then it will throw and error.

![gif cli](/imgs/fake-amazon-cli.gif)
