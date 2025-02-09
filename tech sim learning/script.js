// console.log('Welocome to TSP');
// AddOld(3,5);
// // AddNew(3,5);
// function AddOld(v1 ,v2){
//     console.log(v1 + v2)
// }

// const AddNew = (v1 ,v2)=>{
//     console.log(v1 + v2)
// }
// AddNew(3,5);

//console.log("pratibha");
const btn = document.getElementById("login");


//arg: event type , call back

const onButtonClick = () => {
  btn.innerText = "SignUp Now";
}

btn.addEventListener("click", onButtonClick);

