  function p1(){
    document.getElementById("p1name").style.display="block";
    document.getElementsByName("MEM_1_NAME")[0].required=false;
    document.getElementsByName("MEM_1_PIN")[0].required=false;
    document.getElementById("p2name").style.display="none";
    document.getElementsByName("MEM_2_NAME")[0].required=false;
    document.getElementsByName("MEM_2_PIN")[0].required=false;
    document.getElementById("p3name").style.display="none";
    document.getElementsByName("MEM_3_NAME")[0].required=false;
    document.getElementsByName("MEM_3_PIN")[0].required=false;
    document.getElementById("p4name").style.display="none";
    document.getElementsByName("MEM_4_NAME")[0].required=false;
    document.getElementsByName("MEM_4_PIN")[0].required=false;

   }

   function p2(){
    let m1 = document.getElementById("p1name")
    m1.style.display="block";
    document.getElementsByName("MEM_1_NAME")[0].required=true;
    document.getElementsByName("MEM_1_PIN")[0].required=true;
    let m2 = document.getElementById("p2name")
    m2.style.display="block";
    document.getElementsByName("MEM_2_NAME")[0].required=false;
    document.getElementsByName("MEM_2_PIN")[0].required=false;
    document.getElementById("p3name").style.display="none";
    document.getElementsByName("MEM_3_NAME")[0].required=false;
    document.getElementsByName("MEM_3_PIN")[0].required=false;
    document.getElementById("p4name").style.display="none";
    document.getElementsByName("MEM_4_NAME")[0].required=false;
    document.getElementsByName("MEM_4_PIN")[0].required=false;

   }
   function p3(){
    let m1 = document.getElementById("p1name")
    m1.style.display="block";
    document.getElementsByName("MEM_1_NAME")[0].required=true;
    document.getElementsByName("MEM_1_PIN")[0].required=true;
    let m2 = document.getElementById("p2name")
    m2.style.display="block";
    document.getElementsByName("MEM_2_NAME")[0].required=true;
    document.getElementsByName("MEM_2_PIN")[0].required=true;
    let m3 = document.getElementById("p3name")
    m3.style.display="block";
    document.getElementsByName("MEM_3_NAME")[0].required=false;
    document.getElementsByName("MEM_3_PIN")[0].required=false;
    document.getElementById("p4name").style.display="none";
    document.getElementsByName("MEM_4_NAME")[0].required=false;
    document.getElementsByName("MEM_4_PIN")[0].required=false;    
   }
   function p4(){
    let m1 = document.getElementById("p1name")
    m1.style.display="block";
    document.getElementsByName("MEM_1_NAME")[0].required=true;
    document.getElementsByName("MEM_1_PIN")[0].required=true;
    let m2 = document.getElementById("p2name")
    m2.style.display="block";
    document.getElementsByName("MEM_2_NAME")[0].required=true;
    document.getElementsByName("MEM_2_PIN")[0].required=true;
    let m3 = document.getElementById("p3name")
    m3.style.display="block";
    document.getElementsByName("MEM_3_NAME")[0].required=true;
    document.getElementsByName("MEM_3_PIN")[0].required=true;
    let m4 = document.getElementById("p4name")
    m4.style.display="block";
    document.getElementsByName("MEM_4_NAME")[0].required=true;
    document.getElementsByName("MEM_4_PIN")[0].required=true;
   }
   

  function showcollege(){
  let travelhistory = document.getElementById('travel')
  if (travelhistory.value == "OTHERS") {
      document.getElementById('hidden-panel').style.display = 'block'
      document.getElementsByName("COLLEGE_NAME")[0].required=true;
  } else {
      document.getElementById('hidden-panel').style.display = 'none'
  }
  
}
function showbranch(){
  let travelhistory = document.getElementById('branch')
  if (travelhistory.value == "OTHERS") {
      document.getElementById('hidden').style.display = 'block'
      document.getElementsByName("BRANCH_NAME")[0].required=true;
  } else {
      document.getElementById('hidden').style.display = 'none'
  }
}
