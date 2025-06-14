// Write your solution here;
var cats = ["Milo","Otis","Garfield"]
function destructivelyAppendCat(name){
    cats.push(name)
    return cats
}
function destructivelyPrependCat(name){
    cats.unshift(name)
    return cats
}
function destructuvelyRemoveLastCat(){
    cats.pop()
    return cats
}
function destructivelyRemoveFirstcat(){
    cats.shift()
    return cats
}
function appendCat(name)
{
    return [...cats, name]
}
function prependCat(name){
return [name, ...cats]

}
function removeLastCat(){
return cats.slice(0, cats.length -1)
}
function removeFirstCat(){
return cats.slice(1)
}
function destructivelyRemoveFirstCat(){
cats.shift()
return cats
}
function destructivelyRemoveLastCat(){
cats.pop()
return cats
}