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
    var year=parseInt(cc.toString()+yy.toString());
    //Compute century code
      if (year>1752 && cc===17){
        var centuryCode=4;
      }else if (cc===18){
        var centuryCode=2;
      }else if (cc===19){
        var centuryCode=0;
      }else if (cc===20){
        var centuryCode=6;
      }else if (cc===21){
        var centuryCode=4;
      }else if (cc===22){
        var centuryCode=2;
      }else if (cc===23){
        var centuryCode=0;
      }
     else {
      var centuryCode=(18-cc)%7;
    }
        //Compute leap year code
        if (year%100===0 && cc%4!==0){
          alert("not leap year");
        }
          else if(year%4===0){
          alert("leap year");
        }
        else {
        alert("not leap year");
      }
      //alert(centuryCode);
}
};
