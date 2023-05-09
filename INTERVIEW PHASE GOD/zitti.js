// function Zitti() {
//     this.lastRoomCleaningTime = null;
//     this.shoppingList = [];
//     this.newspaperFetchDate = null;
//   }
  
//   Zitti.prototype.getResponse = function (input) {
//     let output;
//     switch (input) {
//       case 'Hey. How are you?':
//         output = 'Hello, I am doing great.';
//         break;
//       case 'How\'s the weather outside?':
//         output = 'It\'s pleasant outside. You should take a walk.';
//         break;
//       case 'Clean my room':
//         const currentTime =3 new Date();
//         if (this.lastRoomCleaningTime && (currentTime - this.lastRoomCleaningTime) / 1000 / 60 < 10) {
//           output = `The room was just cleaned ${Math.floor((currentTime - this.lastRoomCleaningTime) / 1000 / 60)} minute(s) ago. I hope it's not dirty`;
//         } else {
//           output = `Room is cleaned. It looks tidy now. Job completed at ${currentTime.toLocaleTimeString()}`;
//           this.lastRoomCleaningTime = currentTime;
//         }
//         break;
//       case 'Add Soap to my shopping list':
//         if (this.shoppingList.includes('Soap')) {
//           output = 'You already have Soap in your shopping list';
//         } else {
//           this.shoppingList.push('Soap');
//           output = 'Soap added to your shopping list.';
//         }
//         break;
//       case 'Fetch the newspaper':
//         const today = new Date().toLocaleDateString();
//         if (this.newspaperFetchDate === today) {
//           output = 'I think you don\'t get another newspaper the same day';
//         } else {
//           output = 'Here is your newspaper.';
//           this.newspaperFetchDate = today;
//         }
//         break;
//       case 'Read my shopping list':
//         if (this.shoppingList.length === 0) {
//           output = 'You have no items in your shopping list';
//         } else {
//           output = `Here is your shopping list. ${this.shoppingList.join(', ')}.`;
//         }
//         break;
//       default:
//         output = 'Hmm.. I don\'t know that';
//     }
//     return output;
//   };
  
// function primeInRange(n,m){
// //
// }

// console.log(primeInRange(5,10));


// function factorial(n){
//     if(n<=1) return 1
//     return n*factorial(n-1)
//     }
    
//     console.log(factorial(5));

// function delay(ms){
//     return new Promise(resolve=> setTimeout(()=>console.log("setTimeout"), ms))
// }


// async function sai() {
//     console.log("before");
//     await delay(2000)
//     console.log("after");
// }

// sai()
const promise1 = Promise.resolve('Hello');
const promise2 = Promise.resolve('World');
const promise3 = Promise.reject('Error!');




