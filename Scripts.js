console.log("aaa");
var shoppingList = {
    ShoppingListName: "My Shopping List",
    Items: [{name: "Kapusta", checked: true}, {name: "Jabłuszko", checked: false}, {name: "Woda", checked: true}]
}

var app = new Vue({
    el: "#app",
    data: shoppingList
})

