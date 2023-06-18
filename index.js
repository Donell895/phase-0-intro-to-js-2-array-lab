// Write your solution here!
let cats=["Milo","Otis","Garfield"]

function destructivelyAppendCat(){
    cats.push("Ralph")
}

function destructivelyPrependCat() {
    cats.unshift("Bob")
}

function destructivelyRemoveLastcat() {
    cats.pop()
}
 
function destructivelyRemovesFirstCat() {
    cats.shift()
}

function appendcat(newcats) {
    return newcats=[...cats,"Rose"]
}

function prependcat(latercats) {
    return latercats=["Migan"]
}
function removeLastCat() {
    return cats.slice(0,2)
}

function removeFirstCat() {
    return cats.slice(1)
}