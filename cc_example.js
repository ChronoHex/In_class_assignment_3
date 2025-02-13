// task 5

let orders = [
    {id: 101, customer: "Alice", total: 300 },
    {id: 102, customer: "Bob", total: 450},
    {id: 103, customer: "Charlie", total: 200}
];

function findOrders(orders, orderId) {
    return orders.find(order => order.id === orderId);
}

console.log(findOrders(orders, 101))

// task 6

let inventory = {
    items:[],
    addItem(name, quantity) {
        this.items.push ({name, quantity});
    },
    removeLatestItem() {
            this.items.pop();
    },
    removeFirstItem() {
        this.items.shift();
    }
};

inventory.addItem("Monitor", 5);
inventory.addItem("Keyboard", 10);
inventory.addItem("Mouse", 3);

console.log(inventory.items);

inventory.removeLatestItem();

console.log(inventory.items);

inventory.removeFirstItem();

console.log(inventory.items);

// task 7

let employees = [
    {name: "Alice", position: "Developer", salary: 70000},
    {name: "Bob", position: "Designer", salary: 60000},
    {name: "Charlie", position: "Manager", salary: 90000}
];

function findEmployee(employees, name) {
    return employees.find(employee => employee.name === name)
};

console.log(findEmployee(employees, "Charlie"))

// task 8

let orderA = [
    {id: 1, customer: "Charlie"},
    {id: 2, customer: "David"}
];

let orderB = [
    {id: 3, customer: "Charlie"},
    {id: 4, customer: "David"}
];

function CombineOrders (orderA, orderB) {
    return [...orderA, ...orderB]
};

console.log(CombineOrders(orderA,orderB))