let CLI = document.getElementById("CLIText");
let CLIsubmit = document.getElementById("CLIsubmit");
let CLIguide = document.getElementById("CLIguide");
CLIsubmit.addEventListener("click", coverLetter);


function coverLetter(){
  //read input//
  let NAME = document.getElementById("CLIname").value
  let recipient = document.getElementById("CLIrecipient").value
  let job = document.getElementById("CLIjobtitle").value
  let company = document.getElementById("CLIcompany").value
  //let years = document.getElementById("CLIexperience").value
  let previous = document.getElementById("CLIprevious").value
  let reason = document.getElementById("CLIwhyimpress").value
  let email = document.getElementById("CLIemail").value
  let phone = document.getElementById("CLInumber").value
  let skills = document.getElementById("CLIskills").value
  let elaborate = document.getElementById("CLIelaborate").value
  let achievement = document.getElementById("CLIachievements").value
  let relevant = document.getElementById("CLIrelevant").value 
  let where = document.getElementById("CLIwhere").value 
  let previouscompany = document.getElementById("CLIpreviouscompany").value
  let country = document.getElementById("CLIcountry").value
  let status = document.getElementById("CLIstatus").value
  let start = document.getElementById("CLIstart").value
  let end = document.getElementById("CLIend").value 
  //let school = document.getElementById("CLIschool").value
  //let degree = document.getElementById("CLIdegree").value 
  //let location = document.getElementById("CLIschoollocation").value
  //let major = document.getElementById("CLImajor").value
  let portfolio = document.getElementById("CLIportfolio").value
  

  let CLIG = [`Dear ${recipient},

  <br><br>My name is ${NAME}. I am writing to convey my deep interest in the “${job}" position as advertised on ${where}.
  
  <br><br>What captivates me about ${company} is its renowned reputation for ${reason}. The platform's unwavering commitment to <span style = "color: aqua">[elaborate about previous reason or add another one]</span>. I am ardently motivated to harness my abilities and make a meaningful contribution to ${company}'s ongoing success and relentless pursuit of innovation.
  
  <br><br>As an international student, living and studying in a foreign country is never easy. My communication skills, ability to adapt quickly to environments, and work under pressure have been fostered by seven years of overseas experience. Along with my international background, the qualities mentioned above give me full confidence in my ability to bring a unique perspective and a global mindset. These are qualities that I firmly believe ${company} can leverage for the purpose of creative problem-solving and the establishment of a dynamic, inclusive workspace.
  
  <br><br>Throughout my academic journey, I independently designed and coded my portfolio using HTML, CSS, and Javascript. It is a testament to my proficiency across a diverse range of design domains. Furthermore, I served as a ${previous} at ${previouscompany}, where I expertly applied my proficiency in ${elaborate} to real-world projects. <span style = "color:aqua">[Elaborate a little about your work…]</span>. In terms of ${relevant}, I not only <span style = "color: aqua">[add custom content]</span> but also successfully ${achievement}. This experience deepened my understanding of ${relevant}, honed my ${skills} skills, and enhanced my communication skills when participating in interdisciplinary collaboration.
  
  <br><br>I am currently residing in the ${country} under ${status}. My Employment Authorization commences on ${start}, and concludes on ${end}. It is noteworthy that, given my STEM major, I am eligible for an additional 24-month OPT extension, thereby enabling me to work without the necessity of an H1-B visa for a span of three years.
  
  <br><br>Thank you immensely for dedicating your time and consideration to my application. I eagerly anticipate the prospect of contributing to ${company}'s triumphs as a recently graduated international student. Should you require any further information, please do not hesitate to reach out to me at ${phone} or ${email}. For a more expansive view of my projects, kindly peruse my portfolio website at ${portfolio}.
  
  <br><br>Sincerely,
  
  <br><br>${NAME}`]
  //clear page//
  CLI.innerHTML = "";
  

  //Cover Letter//
  let min = 0;
  let max = CLIG.length;
  let num = Math.floor(Math.random() * (max - min )) + min;
  CLI.innerHTML += CLIG[`${num}`];

}



const toggleSwitch = document.querySelector('#toggleSwitch');

toggleSwitch.addEventListener('change', function() {
  if (this.checked) {
    // Do something when switch is on
    console.log('Switch is on');
    CLIguide.innerHTML+="1. Fill out all input boxes using the format written in placeholders.<br><br>2. <span style ='color:aqua'> Highlighted</span> parts are specific contents that can vary greatly for different users. Fill out the highlighted parts with your own words and voices so that the tone sounds more customized.<br><br>3. The generated texts are editable on web page.<br><br>4. Scroll up to see the generated letter.<br><br>5. Make sure to double-check before you copy-paste and send it.";

  } else {
    // Do something when switch is off
    console.log('Switch is off');
    CLIguide.innerHTML=""; 
   }
});
