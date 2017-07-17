

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
    items = items.sort(function(a,b){
        return b.rating - a.rating;
    });
    return items[0];
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

add('Campari', '10');
add('Soda', '5');

module.exports = {
    add: add,
    list: list,
    highest: highest,
    find: find,
    remove: remove
};
