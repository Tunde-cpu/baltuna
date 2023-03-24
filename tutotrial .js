//let a = 35;
//let b = 35;

//let result = a<=b;
//console.log(result);






// let nigeria_citizen = "Bank Account";

// if(nigeria_citizen === "Bank Account"){
//    console.log("qualify for the money")
// }else if(nigeria_citizen === "no Bank Account"){
//     console.log("not qualify for the money")
// }


// SWITCH STATEMENT

// let wildAnimal = "Lion";

// switch(wildAnimal){
//     case "Goat":
//         console.log("I own a Goat");
//         break;
//     case "Duck":
//             console.log("I own a Duck");
//         break;
//     case "Sheep":
//                 console.log("I own a Sheep");
//                 default:
//                     console.log("I do not own a wildAnimal");
//          break;
// }




//Alert 


// let wild = "lion";

// alert(" My agenda is cool")



// While Loop
//let real_number = 15;





// let a = 5;

// let result = a = 5
// console.log(result)



// 













// for(let i = 1; i<=20; i++){
//     if(i%2===0){
//         console.log("The value of "+ 1 + " is even number");
//     }else{
//         console.log("The value of "+ 1 + " is even number")
//     }
// }












//let multi_dimensional = [1,3,["Bola", "Tola",["Yinka",66,[3,"Tunde"]]], [true,false,20, ["kazeem"]], "williams"]
//let access_Tunde= multi_dimensional[2][2][2][1];
//console.log(access_Tunde)



// let multi_dimensional = [1,3,["Bola", "Tola",["Yinka",66,[3,"Tunde"]]], [true,false,20, ["kazeem"]], "williams"]
// let access_Kazeem = multi_dimensional[3][3][0];
// console.log(access_Kazeem)








//let a = [true, 6, "Kazeem",[["William"], [1, "Tunde"]], [], 2, [[7, ["20", ["Halimat"], [["Rukayat"]], "Saheed"], "Lawal"], [[1, 4]]],]
//let access_Tunde = a[3][1][1];
//console.log(access_Tunde);

//let access_Kazeem = a[2];
//console.log(access_Kazeem);

//let access_William = a[3][0][0];
//console.log(access_William)


//let access_Halimat= a[6][0][1][1][0];
//console.log(access_Halimat)


//let access_Rukayat = a[6][0][1][2][0][0];
//console.log(access_Rukayat);






//let delta = [ "saheed","Rukayat","Tunde"];

//let array_remove = delta.pop();
//console.log(delta)


//for substituting item in array

//let figure = [10,20,30,50];

//figure[2] = 200;
//console.log(figure)



//let figure = [10,20,30,50];

//figure[2] = figure + 70

//console.log(figure);
 
//LOOPING THROUGH ARRAY

//let figure = ["Rukayat","Tunde","Kazeem"];

//for (i = 0; i<figure.length; i++){
 //   console.log(figure);
//}



//PRACTICE

//let = "Tinubu";
//console.log(name);

//let a = 10;
//let b = 100;
// let result = a + b;
// console.log(result);
// result = b - a;
// console.log(result);
// result = a * b;
// result = b / a;
// console.log(result)
// console.log('---------------1--------------')

// // First level array
// // Second level array
// // Third level array




// // console.log(arr_task[i].length); getting the total items in second level array

// let arr_task = [
//   ["Dog", "Goat", "Lion"],
//   ["Apple", "Mango", "Orange", "Pawpaw"],
//   [2, ["Tunde", "Saheed", "Kazeem"]],
//   "Sodeeq",
//   [["Rukayat"]],
//   [true, ["Halimat", "Williams", "Quadri"]]
// ]
// // console.log(arr_task.length) getting the total items in first level array;
// // Using for loop, access item "Tunde", "Saheed", "Kazeen", "Rukayat" Halimat", "Williams", "Quadri
// for (let i = 0; i < arr_task.length; i++) {
//   for (let j = 0; j < arr_task[i].length; j++) {
//     // console.log(arr_task[i][j]);
//     for (let k = 0; k < arr_task[i][j].length; k++) {
//       if (arr_task[i][j][k] == "Tunde" || arr_task[i][j][k] == "Saheed" || arr_task[i][j][k] == "Kazeem" ||
//           arr_task[i][j][k] == "Rukayat" || arr_task[i][j][k] == "Halimat" || arr_task[i][j][k] == "Williams" || arr_task[i][j][k] == "Quadri") {
//           console.log(arr_task[i][j][k]);
//       }
//     }
//   }
// }
// console.log('---------------2-----------------')
// // Using if statement, access Quadri
// for (let i = 0; i < arr_task.length; i++) {
//   for (let j = 0; j < arr_task[i].length; j++) {
//     for (let k = 0; k < arr_task[i][j].length; k++) {
//       if (arr_task[i][j][k] == "Quadri") {
//           console.log(arr_task[i][j][k]);
//       }
//     }
//   }
// }

// // Using if statement, access Lion

// for (let i = 0; i < arr_task.length; i++) {
//   for (let j = 0; j < arr_task[i].length; j++) {
    
//       if (arr_task[i][j]== "Lion") {
//           console.log(arr_task[i][j]);
//       }
    
//   }
// }

// // Using if statement, access true

// for (let i = 0; i < arr_task.length; i++) {
//   for (let j = 0; j < arr_task[i].length; j++) {
    
//       if (arr_task[i][j]== true) {
//           console.log(arr_task[i][j]);
//       }
    
//   }
// }

// // using if statement, access 2

// for (let i = 0; i < arr_task.length; i++) {
//   for (let j = 0; j < arr_task[i].length; j++) {
    
//       if (arr_task[i][j]== 2) {
//           console.log(arr_task[i][j]);
//       }
    
//   }
// }


// console.log("------------------3--------------------")
  
    

//FUNCTION 21/3/23


//function benjamin(){
  //console.log("we are just learning javascript function");// function declaration
//}
//benjamin() // function invocation




// console.log("--------------1---------------------")

// function div_num(num1,num2){
//  let  division = num1 / num2;
  
  
//   console.log(division);
// }

//  div_num(40,5)



// function multi_num(num1,num2){
//   let  product = num1 * num2;
  
  
//   console.log(product);
// }

//  multi_num(40,5)



// function add_num(num1,num2){
//   let  addition = num1  + num2;
  
  
//   console.log(addition);
// }

//  add_num(40,5)
//  console.log("---------------------2------------------")

//class task

//if(num<=3){
//  return output ="The number is low"
//}else if(num<=7){
  //return output = "The number is medium"
//}else if(num<=10){
 // return output = "The number is high"
//}else{
  //return output ="Out of range"
//}
//}


//console.log(test(11))
//Use switch statement





  
//}


//class task

//function test_tenary(num){
  //let out_put ="";
  //(num <=100) ? out_put="low": (num <=200) ? out_put="mediumm": (num <=300) ? out_put="high":out_put="out of range";
  //return out_put;
//}
//console.log(test_tenary(12))z
//console.log(test_tenary(102))
//console.log(test_tenary(202)
//console.log(test_tenary(303))



// write a function that sum all array


//function sum_arr(finn){
  //let sum = 0;
  //for(let i=0; i<finn.lenght; i++){
    //sum += finn[i];
  //return sum;
  //}
  //console.log(sum_array(3,4,6]))
//}

//class task on 22/03/2023

//function sum_num(olu){
  //let sum=0;
  //for(let i=0;i<olu.length; i++){
  //  sum += olu[i];
  //}
  //return sum;
//}
//console.log(sum_num([2,4,6,8,10,12,14,16,18,20]))




// function multi_num(tunji){

//   let mult = 1 ;

//   for (let i=0; i=tunji.length; i++){
//     mult = mult * tunji[i];
//   }
//   return mult;
// }
// console.log(multi_num([2,4,6,8,10,12,14,16,18,20]))



//  let sum_num = (olu)=>{
//   let sum = 0;
//    olu.forEach((item)=>{
//     sum +=item;
//   })
//   return sum;
//  }

//  console.log(sum_num([2,4,6,8,10,12,14,16,18,20]))



// function multi_num (Tunji){
//   let mult=1;
//   for (let i=0; i<Tunji.lenght; i++){
//     mult = mult * Tunji[i];
//   }
//   return mult;
// }

// console.log(multi_num([2,4,6,8,10,12,14,16,18,20]))


// let country = [ "Nigeria","Belgium","Moscow"];
// country.push = ["Ghana"]
// console.log(country)





const users_new =[
  [
    [
      {
        name:  "Kuku",
        age:  55
      },  
      {
        status: "Single",
        gender:  "Female"
      },
      "Shola",
      {
        list: [2, 6, 9]
      }
    ]
  ]
]

let num_6 = users_new[0][0][3].list[1]
console.log(num_6)
