// // const dataAPI = [
// //     {answers: 'no', image: 'https://yesno.wtf/assets/no/1-c7d128c95c1740ec76e120146c870f0b.gif'},
// //      {answers: 'no', image: 'https://yesno.wtf/assets/no/1-c7d128c95c1740ec76e120146c870f0b.gif'}
// // ]
// // const dataUSER = [



// // {answer: 'yes', currentUser: '1'},

// // {answer: 'yes', currentUser: '1'},

// // {answer: 'no', currentUser: '2'},
// // {answer: 'no', currentUser: '2'}
// // ]
// // const player = [{username:"1"},{username:"2"}]
// // var count = 0
// // let arr = []
// // var answerIndex =0
// // var winner = player[count].username
// //  const fillterData = dataUSER.map( (data) => {
// //         if(data.currentUser === winner){ 
// //           if(dataUSER[answerIndex].answer === dataAPI[answerIndex].answers){  
// //             arr.push({answer: dataUSER[answerIndex].answer,image: dataAPI[answerIndex].image,winner: data.currentUser})
// //            answerIndex = answerIndex + 1
// //            }else if((answerIndex +1)< dataAPI.length){
// //             answerIndex = answerIndex + 1
// //           }
// //         }
// //       })
// //       if( (count + 1) < player.length){ 
// //         count = count +1
// //          fillterData()
// //        }

      
// // console.log(winner);
// // console.log(count);
// // console.log(arr);



// // // dataUSER.map( (data,key)=>{
// // //     if(data.currentUser === winner){
// // //         dataAPI.map( (value,index) => {
// // //            if(data.answer === value.answers){
// // //             arr.push({answer: value.answers},{image: value.image},{winner: data.currentUser})
// // //            }
// // //         })
// // //     }
// // //     console.log("12348984",arr);
// // // })
// // // const winner = totalPlayer[count].username //1 //2

// let day = new Date()
// console.log(day);
// let time = new Date(day).toLocaleDateString('en-GB',{
//   hour: 'numeric',
//     minute: 'numeric',
//     hour12: true
// })
// console.log(time);

// var score1
// var score = 0 
// const data = [

//   {answer: 'no', currentUser: 'hoang', image: 'https://yesno.wtf/assets/no/13-755222c98795431aa2e7d453ab1e75a1.gif', round: 1},

// {answer: 'no', currentUser: 'hoang', image: 'https://yesno.wtf/assets/no/13-755222c98795431aa2e7d453ab1e75a1.gif', round: 2}
// ]
// // const myArray = [false, 24, "English", false, "english", 22, 19, false, "English", 19];
// const allStudentsAge = [19, 22, 18, 19, 16, 18, 19, 21, 24];
// data.map( (value,index) =>{
//     const name = value.currentUser
//     if(value.currentUser === name){
//        score1 = {user: value.currentUser, score: score + 1}
//     }

// })
// console.log(score1);




 // let count = 0
    // let arr = []
    // let answerIndexAPI =0
    // let answerIndexUser =0
    // answerUser.map( (data) =>{
    //   const currentUser = totalPlayer[count].username
    //   if(data.currentUser === currentUser){ //1
    //     if(answerUser[answerIndexUser].answer === answerAPI[answerIndexAPI].answers){ // false
    //       dispatch(saveResult({answer: answerAPI[answerIndexUser].answers,image: answerAPI[answerIndexAPI].image,winner: data.currentUser}))
    //       arr.push({answer: answerUser[answerIndexUser].answer,image: answerAPI[answerIndexAPI].image,winner: data.currentUser})
    //       answerIndexUser = answerIndexUser + 1
    //       answerIndexAPI = answerIndexAPI +1
    //     }else if((answerIndexAPI +1)< answerAPI.length){
    //       answerIndexUser = answerIndexUser + 1
    //       answerIndexAPI = answerIndexAPI +1
    //   }else if ((count + 1) < totalPlayer.length){
    //     count = count +1
    //     answerIndexUser = answerIndexUser + 1
    //     answerIndexAPI = 0
    //   }
    //   }
    // })
    const moment = require('moment');

    let now = moment();
    console.log(now.format("YYYY/MM/DD HH:mm:ss"));


