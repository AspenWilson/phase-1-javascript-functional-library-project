//Collection functions (arrays or objects)

function myEach(collection, callback){
    for (let value in collection) {
        callback (collection[value])
    }
    return collection

}

function myMap (collection,callback) {
    let modifiedArr = []
    for (let value in collection) {
        modifiedArr.push(callback(collection[value]))
    }
    return modifiedArr
}


function myReduce(collection, callback, acc) {
    let copy = [];
    for (let value in collection) {
        copy.push(collection[value])
    }
    let newArray= copy;

    acc=acc || newArray.shift();
    for (let value in newArray) {
        acc = callback(acc, newArray[value], newArray)
    }
    return acc
}

function myFind(collection,predicate) {
    for (let value in collection) {
        let element = collection[value];
        if (predicate(element))
        return element
    }
}

function myFilter(collection,predicate){
    let array = [];
    for (let value in collection) {
        let element = collection[value];
        if (predicate(element))
        array.push(element)
    }
    return array
}

function mySize(collection) {
    return Object.keys(collection).length
}


//Array Functions

function myFirst(collection, n=1){
    let count = 1;
    let array= [];
    for (let value in collection){
        if (count <= n){
            array.push(collection[value]);
            count++
        }
    }
    return array.length >1 ? array : array[0]
}

function myLast (collection, n) {
    let start = collection.length-1
    n=n || 0
    if (n>=1){
        return collection.slice(-n)
    }
    return parseInt(collection.slice(start))
}

function mySortBy (array, callback) {
    let newArray = [...array];
        for (let i=0; i< newArray.length; i++){
            if (typeof newArray[i] === 'string'){
                return (newArray.sort())
            }
        }
    return newArray.sort((a, b) => callback(a) - callback(b));
}

function myFlatten (collection, level) {
    if (level) {
        return collection.flat()
    }
    const nest = [...collection];
    const result = []
    while (nest.length) {
        const next = nest.pop();
        if (Array.isArray(next)) {
            nest.push(...next);
        }else {
            result.push(next)
        }
    }
    return result.reverse()
}

//Object Functions

function myKeys(object) {
    return Object.keys(object)
}


function myValues(object) {
    return Object.values(object)
}
