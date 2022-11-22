function myFunction(){
    var x = document.getElementById("OTHERS");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function p1(){
    document.getElementById("p1name").style.display="block";
    document.getElementById("p2name").style.display="none";
    document.getElementById("p3name").style.display="none";
    document.getElementById("p4name").style.display="none";

   }

   function p2(){
    document.getElementById("p1name").style.display="block";
    document.getElementById("p2name").style.display="block";
    document.getElementById("p3name").style.display="none";
    document.getElementById("p4name").style.display="none";

   }
   function p3(){
    document.getElementById("p1name").style.display="block";
    document.getElementById("p2name").style.display="block";
    document.getElementById("p3name").style.display="block";
    document.getElementById("p4name").style.display="none";    
   }
   function p4(){
    document.getElementById("p1name").style.display="block";
    document.getElementById("p2name").style.display="block";
    document.getElementById("p3name").style.display="block";
    document.getElementById("p4name").style.display="block";    
   }
   

  function showcollege(){
  let travelhistory = document.getElementById('travel')
  if (travelhistory.value == "OTHERS") {
      document.getElementById('hidden-panel').style.display = 'block'
  } else {
      document.getElementById('hidden-panel').style.display = 'none'
  }
  
}
function showbranch(){
  let travelhistory = document.getElementById('branch')
  if (travelhistory.value == "OTHERS") {
      document.getElementById('hidden').style.display = 'block'
  } else {
      document.getElementById('hidden').style.display = 'none'
  }
}
