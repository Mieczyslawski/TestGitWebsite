var shoppingList = {
    ShoppingListName: "My Shopping List",
    Items: [{name: "Kapusta", checked: true}, {name: "Jabłuszko", checked: false}, {name: "Woda", checked: true}],
    NewItemName: ""
}

var app = new Vue({
    el: "#app",
    data: shoppingList,
    methods: {
        addNewItem: function(){
            this.Items.push({name: this.NewItemName, checked: false})
            this.NewItemName = "";
        }
    }
})

