

var items = [];

function add(item, rating){
    items.push({item, rating});
}

function list(){
    return items;
}

module.exports = {
    add: add,
    list: list
};
