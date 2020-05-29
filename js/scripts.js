//Declare constants

//Find the value of each element in the form
function validate() {
  var cc = document.getElementById("CC").value;
  var yy = document.getElementById("YY").value;
  var mm = document.getElementById("MM").value;
  var dd = document.getElementById("DD").value;
  var gender = document.getElementById("Gender").value;
  if (cc === "" || yy === "" ||  mm === "" || dd === "" ){
    alert("Please provide all the required details in the form.");
  }
  else{
    //Compute year Code
    var div=Math.floor(yy/4);
    var sum=yy+div;
    var yearCode=sum%7;
    alert(yearCode);
}
};
