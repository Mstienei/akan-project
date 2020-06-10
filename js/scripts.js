
//Find the value of each element in the form
function validate() {
  //var cc = document.getElementById("CC").value;
  var yob = document.getElementById("YOB").value;
  var mm = document.getElementById("MM").value;
  var dd = document.getElementById("DD").value;
  var gender = document.getElementById("Gender").value;
  var cc=yob.slice(0,2);
  var yy=yob.slice(2,4);
  if (yob === "" ||  mm === "" || dd === "" ){
    alert("Please provide all the required details in the form.");
  }else if(dd<=0 || dd>31){
    alert("Please enter a valid date.");;
  }else if(mm<=0 || mm>12){
    alert("Please enter a valid month.");;
  }else if(yob<=1700 || yob>2300){
    alert("Please enter year between 1700 and 2300.");;
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
          var leapYearCode=0;
        }
          else if(year%4===0){
          var leapYearCode=1;
        }
        else {
          var leapYearCode=0;
      }
      //Compute Date
          //var dateCode=parseInt(dd);
            //Compute day
              var daysOfWeek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
              var dayCode=(yearCode+monthCode+dd-leapYearCode)%7;
              var day=daysOfWeek[dayCode];
              var male=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
              var female=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
              //Translate to Akan Name
              if (gender=="Female"){
                var akanFemaleName=female[dayCode];
                alert("You were born on a "+ day +".Your Akan name is "+ akanFemaleName);
              }
              else{
                var akanMaleName=male[dayCode];
                alert("You were born on a "+ day +".Your Akan name is "+ akanMaleName);
                }

}
};
