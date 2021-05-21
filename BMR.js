document.getElementById('button').addEventListener('click',()=>{
  let age = document.getElementById("Age").value;
  let weight = document.getElementById("Weight").value;
  let height = document.getElementById("Heigth").value;
  var getSelectedValue = document.querySelector('input[name="Gender"]:checked');
  let BMR;
  if(getSelectedValue.value=="Male")
  {
   BMR = 66.47+(13.75*weight)+(5.003*height)-(6.755*age);
   console.log(BMR);
   document.getElementById("result").innerHTML="Your BMR is "+BMR;
  }
  else {
    BMR = 655.1+(9.563*weight)+(1.85*height)-(4.676*age);
    console.log(BMR);
  }
})
