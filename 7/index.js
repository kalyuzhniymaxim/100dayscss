
// const title = document.querySelector('.accordion__tittle')

// function handleClickFunction() {
//     currentTarget.classList.toggle('none')
// }
// title.addEventListener('click', handleClickFunction)



// for(let i = 0; i <= arr.length; i++){
//     console.log(arr[i])
// }


// const arr = [1, 2, 3, 4, 5];
// let sun = arr.reduce((a,e) =>{
//     return a+e
// },0)
// console.log(sun)

// const str = 'madamq';
// const strToArr = str.split('')
// console.log(strToArr)
// const strReverse =  strToArr.reverse()
// console.log(strReverse)
// let isEqual = true;
// for (let i = 0; i < strToArr.length; i++) {
    
//     if(strReverse[i] !== strToArr[i]){
//         isEqual = false;
//         break;
//     }
// }

// if (isEqual) {
//     console.log('Массивы равны');
//   } else {
//     console.log('Массивы не равны');
//   }

let obj = {
  name: "max",
  age: 25,
  professia:"programist"
}
console.log(obj['age'])

obj.age = 30;
console.log(obj['age'])
obj.city = "Moskva"
console.log(obj)

let obj1 = Object.keys(obj)
let obj2 = obj1.length

for(let i = 0; i < obj2; i++){
  
  let key = obj1[i]
  let znach = obj[key]
  console.log(`Ключ: ${key}, Значение: ${znach}`);
}
console.log(obj1)
console.log(obj2)