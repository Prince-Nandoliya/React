let game = ["free fire", "BGMI", "8 Ball Pool", "GTA V"];

console.log("game", game);

//push method
game.push("Call of Duty");

console.log("after push method", game);

//unshift method
game.unshift("Chess");

console.log("after unshift method", game);

//shift method
game.shift();

console.log("after shift method", game);

//pop method
game.pop();

console.log("after pop method", game);

let fruits = ["apple", "banana", "mango", "cherry"];

console.log("fruits", fruits);

fruits.splice(1, 2);

console.log("after splice method", fruits);

fruits.splice(1, 1, "guava");

console.log("fruits after replacing", fruits);

fruits.splice(1, 0, "strawberry", "pineapple");

console.log("fruits after add", fruits);

let Bike = ["GT 650", "BMW S 1000 RR", "Kawasaki ZX-10R", "Suzuki Hayabusa"];

console.log("Bikes", Bike);

console.log("after join method", Bike.join(" "));
