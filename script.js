//SHALLOW COPY


// let obj = {
//     name:"karan",
//     age: 23,
//     city: "tarapur"
// }
// let obj2 = {}
// Object.assign(obj2,obj)
// obj.name = "ashish"
// obj2.name = "kiran"
// console.log(obj)
// console.log(obj2)

// let arr = ["orange","mango","papaya","cherry"]
// let arr2 = [].concat(arr)
// // Object.assign(arr2,arr)
// let arr3 = arr.concat(arr2)
// arr.push("first")
// arr2.push("second")
// arr3.push("third")
// arr2.push("coconut","pear","apple")
// console.log(arr)
// console.log(arr2)
// console.log(arr3)

let obj = {
    name:"karna",
    age:23,
    pata:{
        city:"kanpur",
        pinCode:625235
    },
    subject:["hindi","english","math","bio"]
}

//SHALLOW COPY   <----- not works prefectly on nested non-premitive dataTypes 

// let obj2 = {...obj}
// Object.assign(obj2,obj)

//DEEP COPY

let obj2 = JSON.parse(JSON.stringify(obj));
obj2.subject.push("computer")
console.log(obj)
console.log(obj2)