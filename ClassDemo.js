"use strict";
exports.__esModule = true;
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    Customer.prototype.showData = function () {
        console.log("\n            Id : " + this.id + "\n            Name : " + this.name + "\n            Email : " + this.email + "\n        ");
    };
    return Customer;
}());
exports.Customer = Customer;
;
var cust1 = new Customer(111, "ravi", "ravi@gmail.com");
cust1.showData();
