'use strict';

(function () {
  console.log("Hi");
  function Product(id, name, price, date) {
    if (!(id.toString().length === 5)) {
      throw new Error("Input must have 5 numbers!")
    };
    this.id = id;
    this.name = name;
    this.price = price;
    this.date = date;
    this.getInfo = function () {
      // var firstLetter = name[0];
      // var lastLetter = name[name.length - 1];
      // var result = (firstLetter + lastLetter).toUpperCase() + this.id + ", " + this.name + ", " + this.price.toFixed(2);
      // return result;
      return (this.name[0] + this.name[this.name.length - 1]).toUpperCase() + this.id + ", " + this.name + ", " + this.price.toFixed(2);
    };
  };

  function ShoppingBag() {
    this.productList = [];
    this.addProduct = function (product) {
      // if (!(product instanceof Product)) {
      //   throw new Error("Invalid input!");
      // };
      var today = new Date();
      if (this.product.date.getTime() > today.getTime()) {
        this.productList.push(product);
      } else {
        throw new Error("Invalid expiration date!");
      };
      // this.productList.push(product);
    };
    this.getAveragePrice = function () {
      var sum = 0;
      this.productList.forEach(function (product) {
        sum += product.price;
      });
      var result = sum/this.productList.length
      return "The average product price is " + result.toPrecision(3) + ".";
    };
    this.getMostExpensive = function () {
      var li = this.productList;
      var expensive = li[0];
      for (var i = 0; i < li.length; i++) {
        if (li[i] > expensive) {
        expensive = li[i];
        console.log(li[i]);
        };
      };
      // Problem!!!!!
      return "The most expensive product is " + expensive + ".";
    };
    this.calculateTotalPrice = function () {
      var total = 0;
      this.productList.forEach(function (product) {
        total += product.price;
      });
      return "Total price of products in the shopping bag list is " + total + ".";
    };

    function PaymentCard(a) {
      if (!(a.toPrecision(2))) {
        throw new Error("Input must have 2 decimal places!")
      };
      this.accountBalance = a;
      this.status = s;
      this.validDate = v;
    };
  };

  function checkoutAndBuy (shoppingBag, paymentCard) {
    if (paymentCard.accountBalance >= shoppingBag.calculateTotalPrice()) {
      return "Purchase is successful.";
    } else {
      return "The amount of money that is missing is " + shoppingBag.calculateTotalPrice() - paymentCard.accountBalance;
    };
  };



  // Testing
  try {

    var banana = new Product (32745, "Banana", 199.99, "06/25/2023");
    var bread = new Product (32865, "Bread", 78.8999, "02/11/2023");
    var cheese = new Product (46419, "Cheese", 605.79, "03/01/2023");
    var milk = new Product (87532, "Milk", 164.49, "01/10/2023");

 
    console.log(banana.getInfo() + "\n", bread.getInfo() + "\n", cheese.getInfo() + "\n", milk.getInfo() + "\n");

    var bag = new ShoppingBag();
    bag.addProduct(banana);
    bag.addProduct(bread);
    bag.addProduct(cheese);
    bag.addProduct(milk);
    console.log(bag.getAveragePrice() + "\n", bag.getMostExpensive() + "\n", bag.calculateTotalPrice());
    
    var card = new PaymentCard(1100);
    console.log(card);


  } catch (error) {
    console.log(error.message);
  }
})(); 