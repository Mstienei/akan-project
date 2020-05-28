//Find the value of each element in the form
function validate(){
  var cc = document.getElementById("CC").value;
  var yy = document.getElementById("YY").value;
  var mm = document.getElementById("MM").value;
  var dd = document.getElementById("DD").value;
  var gender = document.getElementById("Gender").value;
  alert("I am" +gender+".Born in"+dd+mm+yy+cc)
};
