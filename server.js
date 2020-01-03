const microBooks = require("./src-micro/books");
const microUsers = require("./src-micro/users");
const microOrders = require("./src-micro/orders");

microBooks.listen(3001);
microUsers.listen(3002);
microOrders.listen(3003);

const soaApp = require("./src-soa/app");
const soaOrders = require("./src-soa/orders");

soaApp.listen(3004);
soaOrders.listen(3005);

const monoApp = require("./src-monolith/app");

monoApp.listen(3006);
