

var items = [];

function add(item, rating){
    items.push({item, rating});
}

function list(){
    return items;
}

function find(name){
    for (var i = 0; i< items.length; i++){
        if (items[i].item === name){
            return items[i];
        }
    }
}

function highest(){
    items = items.sort();
    return items[items.length - 1];
}

function remove(name){
    var index = 0;
     for (var i = 0; i < items.length; i++){
        if (items[i].item === name){
            index = i;
        }
    }

    items.splice(index, 1);
}

add('gus', '5');
add('curr', '5');

module.exports = {
    add: add,
    list: list,
    highest: highest,
    find: find,
    remove: remove
};
