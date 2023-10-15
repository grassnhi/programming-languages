const store = new Map([
    ["t-shirt", 20],
    ["jeans", 30],
    ["socks", 10],
    ["underwear", 50]
])

let shoppingCart = 0;

shoppingCart += store.get("t-shirt");
shoppingCart += store.get("underwear");

console.log(shoppingCart);

store.forEach((value, key) => console.log(`${key} $${value}`));

store.set("hat", 40);   // add to end
store.delete("hat")     // delete key

console.log(store.has("hat"));
console.log(store.has("underwear"));
console.log(store.size);