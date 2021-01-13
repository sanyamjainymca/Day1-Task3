
//implementing function to call add element function by pressing enter

var input = document.getElementById("text1");

input.addEventListener("keyup", function(event) {
  if (event.keycode == 13 || event.which == 13) {
    add_element_to_array();
  }
});

var upval = null;
var downval = null;
var maxval = null;
var minval = null;
var sumval = null;
var meanval = null;
var medianval = null;
var stdval = null;

function null_setter(){
  upval = null;
  downval = null;
  maxval = null;
  minval = null;
  sumval = null;
  meanval = null;
  medianval = null;
  stdval = null;
}

//making the input array

var x = 0;
var inputArr = Array();

function add_element_to_array()
{

 var input  = parseFloat(document.getElementById("text1").value); 

 if(isNaN(input)){
  alert("Enter a valid number");
  document.getElementById("text1").value = "";
 } 
 else{
  inputArr[x] = input;
  x++;
  document.getElementById("text1").value = "";
  display_array();
  null_setter();
 }
 
}

function display_array()
{
   var e = "<hr/>";   
    
   for (var y=0; y<inputArr.length; y++)
   {
     e += "Element " + y + " = " + inputArr[y] + "<br/>";
   }
   document.getElementById("Result").innerHTML = e;
}





function up(){

  if(upval==null){
    upval = [];
    if(downval != null){
      for(var i=downval.length-1; i>=0; i--){
        upval.push(downval[i]);
      }

      console.log("The UP will be \n")

      console.log(upval + "\n");
    }
    else{
      const inputASorted = inputArr.sort(function(a, b){return a-b});

      console.log("The UP will be \n")

      console.log(inputASorted + "\n");

      upval = inputASorted;
    }
  } 

  else{
    console.log("The UP will be \n")

    console.log(upval + "\n");
  }
  
}

function down() {
  
  if(downval==null){
    downval=[];
    if(upval != null){
      for(var i=upval.length-1; i>=0; i--){
        downval.push(upval[i]);
      }

      console.log("The Down will be \n")

      console.log(downval + "\n");
    }
    else{
      const inputDSorted = inputArr.sort(function(a, b){return b-a});

      console.log("The Down will be \n")

      console.log(inputDSorted + "\n");

      downval = inputDSorted;
    }
  }
  else{
    console.log("The Down will be \n")

    console.log(downval + "\n");
  }

}

function maxArr(){
  if(maxval==null){
    if(upval != null) maxval =upval[upval.length-1];
    else if(downval!=null) maxval = downval[0];
    else maxval = Math.max(...inputArr);
  }

  console.log("The max will be \n")
  console.log(maxval + "\n");
  
}

function minArr(){

  if(minval==null){
    if(upval != null) minval = upval[0];
    else if(downval != null) minval = downval[downval.length-1];
    else minval = Math.min(...inputArr);
  } 

  console.log("The min will be \n")

  console.log(minval + "\n");
}

function sum() {
   
  if(sumval==null){
    sumval = inputArr.reduce(function(a, b){
      return a + b;
    }, 0);
  } 


  console.log("The sum will be \n")

  console.log(sumval + "\n");
}

function median() {

  if(medianval == null){
    var inputASorted = [];
    if(upval != null){
      for(var i=0; i<upval.length; i++){
        inputASorted.push(upval[i]);
      }
    }
    else if(downval != null){
      for(var i=downval.length-1; i>=0; i--){
        inputASorted.push(downval[i]);
      }
    }
    else inputASorted = inputArr.sort(function(a, b){return a-b});
    let len = inputArr.length;
    const mid = Math.ceil(len / 2);

    medianval =
      len % 2 == 0 ? (inputASorted[mid] + inputASorted[mid - 1]) / 2 : inputASorted[mid - 1];
  }
  

  console.log("The Median will be \n")

  console.log(medianval + "\n");
}

function mean() {

  if(sumval==null){
    sumval = inputArr.reduce(function(a, b){
      return a + b;
    }, 0);
  
  }

  var sum = sumval;
  
  console.log("The mean will be \n");

  sum *= 1.00;

  console.log(Number.parseFloat(sum/inputArr.length).toFixed(3) + "\n");
}

function mean_ret(values){
  var sum = values.reduce(function(a, b){
    return a + b;
  }, 0);


  return sum/values.length;
}

function std() {

  if(stdval==null){
      if(meanval==null){
        meanval = mean_ret(inputArr);
      }
      var avg = meanval;
    
      var squareDiffs = inputArr.map(function(value){
      var diff = value - avg;
      var sqrDiff = diff * diff;
      return sqrDiff;
    });
    
    var avgSquareDiff = mean_ret(squareDiffs);
  
    stdval = Math.sqrt(avgSquareDiff);
  }

  

  console.log("The Standard Deviation will be \n")

  console.log(Number.parseFloat(stdval).toFixed(3) + "\n");
}


function analysis(){

  up();
  down();
  maxArr();
  minArr();
  sum();
  median();
  mean();
  std();

}



//end


