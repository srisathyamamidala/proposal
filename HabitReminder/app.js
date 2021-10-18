//getting all the required elements
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const habitList = document.querySelector(".habitList");
const deleteAllBtn = document.querySelector(".footer button")


inputBox.onKeyup = ()=>{
let userData = inputBox.value; // getting user entered value
if(userData.trim() != 0){// if user values are'nt only spaces
addBtn.classList.add("active"); // active the add button
}
else{
addBtn.classList.remove("active"); // active the add button

}

}
showTasks();
// if user click on the add button 
addBtn.onClick = ()=>{
let userData = inputBox.value; // getting user entered value
let getLocalStorage = localStorage.getItem("New Habit");// getting localstorage
if(getLocalStorage == null)//if localstorage is null
{
   listArr = []; // creating blank array
}
else{
   listArr = JSON.parse(getLocalStorage);//transforming js string into a json object
}
listArr.push(userData);//pushing or adding user data
localStorage.setItem("New Habit", JSON.stringify(listArr)); 
showTasks();//calling showtasks function
addBtn.classList.remove("active");
}

//function to add the task list inside ul
function showTasks(){
let getLocalStorage = localStorage.getItem("New Habit");
if(getLocalStorage == null)//if local storage is null
{
listArr = [];//creating blank array
}else{
listArr = JSON.parse(getLocalStorage); //transforming json string into a js object 
}
const pendingNumb = document.querySelector(".pendingNumb");
pendingNumb.textContent = listArr.length;//pushing the length value in pending number 
if(listArr.length > 0){//if array length is greater than 0
    deleteAllBtn.classList.add("active");//active the clearall button
}else{
    deleteAllBtn.classList.remove("active");//unactive the clearall button

}
let newLiTag = '';
listArr.forEach((element , index) =>{
new.iTag += `<li> ${element} <span onclick = "deleteTask(${index})"; ><i class = "fas fa-trash"></i><span><li> `;});
habitList.innerHTML = newLiTag; // adding new li tag inside ul tag
inputBox.value = "";//once task added leave the input field blank
}
//delete task function 
function deleteTask(index){
let getLocalStorage = localStorag.getItem("New Habit");
listArr = JSON.parse(getLocalStorage); 
listArr.splice(index,  1);//delete or remove the particular indexed li 
//after removing the li again update the local storage
localStorage.setItem("New Todo", JSON.stringify(listArr)); //transforming js object

 showTasks();// calling showtasks function
}
// delete all tasks function
deleteAllBtn.onclick = ()=>{
listArr = [];//empty an array
// after delete all tasks the li again update the local storage
localStorage.setItem("New Habit", JSON.stringify(listArr));//transforming js object
showTasks();
}
