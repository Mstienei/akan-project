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
  else {
    //Compute year Code
    var div=Math.floor(yy/4);
    var sum=yy+div;
    var yearCode=sum%7;
    //Compute month Code
    var months = [0, 3, 3, 6, 1, 4, 6, 2, 5, 0, 3, 5];
    var monthCode = months[mm-1];

    //Compute century code
    var year=parseInt(cc.toString()+yy.toString());
    alert(year);
}
};
