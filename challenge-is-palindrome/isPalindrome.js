

// // Write your code below this line.
// const palindrome = (str) =>{
//     for(let i = 0; i < str.length; i++){
//         for(let k = str.length - 1; k >= 0; k--){
//             if(str[k] !== str[i]){
                
//                 return false;
//             }
//         }
//     }
//     return true;
// }


const palindrome = (str) => {
    const arr = []
    for(let i = 0; i < str.length; i++){
        arr.unshift(str[i])
    }
 for(let i = 0; i< str.length; i++){
     if(str[i] !== arr[i]){
         return false
     }
 }
 return true
}



const checkPalindrome= palindrome("tacocat");
console.log(checkPalindrome)