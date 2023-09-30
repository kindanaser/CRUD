var courseName = document.querySelector("#courseName");
var courseCategory = document.querySelector("#courseCategory");
var coursePrice = document.querySelector("#coursePrice");
var courseDescription = document.querySelector("#courseDescription");
var courseCapacity = document.querySelector("#courseCapacity");
var addBtn = document.querySelector("#click");
var courses = [] ;
var inputs = document.querySelectorAll(".inputs");

addBtn.addEventListener("click",function(e){
   e.preventDefault();
   addCourses();
   clearInputs();
   displayData()
})

function addCourses(){
   var course = {
    name :courseName.value ,
    category : courseCategory.value ,
    price : coursePrice.value ,
    description : courseDescription.value ,
    capacity : courseCapacity.value ,
   }
   courses.push(course);
   console.log(courses);
}
function clearInputs(){
   for(var i = 0; i<inputs.length; i++){
    inputs[i].value="";
   }
}
function displayData(){
  var result = `` ;
  for(var i = 0; i<courses.length; i++){
  result += `
  <tr>
  <th>${i}</th>  
  <th>${courses[i].name}</th>  
  <th>${courses[i].category}</th> 
  <th>${courses[i].price}</th>  
  <th>${courses[i].description}</th>   
  <th>${courses[i].capacity}</th>   
  <th><button class="btn btn-outline-info">update</button></th>   
  <th><button class="btn btn-outline-danger" onclick="deletCourse(${i})">delete</button></th>   

  </tr>
  `;
  }
  document.getElementById("data").innerHTML = result;
}
function deletCourse(id){
    courses.splice(id,1);
    displayData();
}



