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
  let school = document.getElementById("CLIschool").value
  let degree = document.getElementById("CLIdegree").value 
  let location = document.getElementById("CLIschoollocation").value
  let major = document.getElementById("CLImajor").value
  let portfolio = document.getElementById("CLIportfolio").value
  

  let CLIG = [`Dear ${recipient},<br><br>My name is ${NAME}. I am writing to express my strong interest in the ${job} position at ${company}, as advertised on ${where}. As a recently graduated international student with a solid educational foundation, unique multicultural experiences, and a 
  strong desire for professional growth, I am passionate about the opportunity to contribute my skills and knowledge to your esteemed organization. 
  <br><br>I am drawn to ${company} because of its reputation for excellence, innovative approach, and commitment to ${reason}. I am particularly inspired by <span style = "color: aqua">[specific project/achievement]</span> and the organization's dedication to making a positive impact in ${relevant}. I am eager to leverage my skills and contribute to ${company}’s continued success and growth.
  <br><br>During my time as a student, I actively worked on my portfolio which demonstrates a broad spectrum of design domains, 
  and sought opportunities to gain practical experience and enhance my skills. I had worked at ${previouscompany} as ${previous} for <span style = "color: aqua">[length of THIS experience]</span>, where I had the opportunity to apply my ${elaborate} to real-world projects. I successfully ${achievement}. These experiences allowed me to develop a deep understanding of ${relevant},
  sharpen my technical abilities, and collaborate effectively within interdisciplinary teams.
  <br><br>As an international student, I have learned to adapt quickly to new environments, embrace diversity, and be ready for challenges at any time. 
  Living and studying in a different country is not easy. The overseas experience has honed my cross-cultural competencies, communication skills, and ability to thrive under pressure. I believe that my international background brings a unique perspective and a global mindset, which can be utilized by ${company} for creative problem-solving and building a diverse workspace. 
  <br><br>I recently completed my ${degree} from ${school} in ${location}, where I specialized in ${major}. 
  Throughout my academic journey, I have gained comprehensive knowledge and practical experience in ${skills}. My coursework has equipped me with strong critical thinking, problem-solving, and analytical skills, enabling me to approach complex challenges with confidence. Additionally, my studies have fostered effective communication, teamwork, and project management skills, which I believe are essential for success in the real world. 
  <br><br>I am currently living in ${country} with ${status}. My Employment Authorization starts from ${start}, and ends ${end}. However, <span style = "color: aqua">[A little bit about your future plan in the target country]</span>
  <br><br>Thank you for your time and consideration. I look forward to the possibility of contributing to ${company}'s success as a recently graduated international student. 
  Please feel free to contact me at ${phone} or ${email} if you require any further information. A broader view of my projects can be explored by visiting my portfolio website at ${portfolio}.

  <br><br>Sincerely, <br><br>${NAME}`]
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
