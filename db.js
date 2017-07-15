

var items = [];

function add(item, rating){
    items.push({item, rating});
}

function list(){
    return items;
}


function highest(){
    items = items.sort();
    return items[items.length - 1];
}

add('gus', '5');
add('curr', '5');

module.exports = {
    add: add,
    list: list,
    highest: highest
};
