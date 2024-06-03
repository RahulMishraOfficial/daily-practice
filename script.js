const arr = ["name","name2","name3","name1","name5","name6","name18"]
const arr1 = ["name42","name52","name5","name8"]
const arr2 = ["name9","name11","name82","name9"]
let at = arr.at(5)
let concat = arr.concat(arr1,arr2)
let copyWithin = arr.copyWithin(2,6)
let entries = arr.entries()
for(el of entries){
    console.log(el)
}

// console.log(at)
// console.log(concat)
// console.log(copyWithin)
// console.dir(entries)