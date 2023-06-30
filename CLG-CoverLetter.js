let CL = document.getElementById("CLText");
let CLsubmit = document.getElementById("CLsubmit");
let CLguide = document.getElementById("CLguide");
CLsubmit.addEventListener("click", coverLetter);


function coverLetter(){
  //read input//
  let NAME = document.getElementById("CLname").value
  let recipient = document.getElementById("CLrecipient").value
  let job = document.getElementById("CLjobtitle").value
  let company = document.getElementById("CLcompany").value
  let years = document.getElementById("CLexperience").value
  let previous = document.getElementById("CLprevious").value
  let reason = document.getElementById("CLwhyimpress").value
  let email = document.getElementById("CLemail").value
  let phone = document.getElementById("CLnumber").value
  let skills = document.getElementById("CLskills").value
  let elaborate = document.getElementById("CLelaborate").value
  let achievement = document.getElementById("CLachievements").value
  let relevant = document.getElementById("CLrelevant").value 
  let where = document.getElementById("CLwhere").value 
  let previouscompany = document.getElementById("CLpreviouscompany").value

  let CLG = [`Dear ${recipient},<br><br>
  My name is ${NAME}. I am writing to express my keen interest in the ${job} position at ${company}, as advertised on ${where}. With my strong qualifications and passion for ${relevant}, I am confident that I can make a valuable contribution to your organization.
  <br><br>  I have worked in <span style = "color: aqua">[mention specific areas or roles relevant to the position]</span> for ${years} , which have equipped me with a diverse skill set and an in-depth understanding of <span style = "color: aqua">[industry-specific knowledge]</span>. Throughout my career, I have consistently demonstrated exceptional ${skills}, such as ${elaborate}.
  <br><br>  At my previous position as ${previous} at <span style = "color: aqua">${previouscompany}</span>, I successfully ${achievement}. These experiences have honed my ability to <span style = "color: aqua">[describe key responsibilities or tasks relevant to the position]</span> and have given me a solid foundation in <span style = "color: aqua">[industry-specific knowledge]</span>.
  <br><br>  What sets me apart is my <span style = "color: aqua">[unique combination of skills/experiences/qualities]</span>. I am a highly motivated and adaptable professional, with a strong attention to detail and a proven track record of delivering results. I thrive in fast-paced environments, and my excellent problem-solving and communication skills enable me to effectively collaborate with cross-functional teams.
  Moreover, I am impressed by the company's dedication to ${reason}. The company's culture and value align perfectly with my own values, making me eager to contribute to your team and help drive ${company}'s continued success.
  <br><br>  I am confident that my skills, experience, and enthusiasm make me a strong candidate for the ${job} position. I am excited about the opportunity to join ${company} and contribute to its ongoing growth. I believe that my passion for ${relevant} and my properly trained ${skills} would make me a valuable asset to your team.
  Thank you for considering my application. I have attached my resume for your review. I would welcome the opportunity to discuss how my qualifications align with the requirements of the position in more detail. I can be reached at ${phone} or ${email}.
  Thank you for your time and consideration. I look forward to the possibility of contributing my skills and expertise to ${company}.
  <br><br>Sincerely,
  <br>${NAME}`]
  //clear page//
  CL.innerHTML = "";
  

  //Cover Letter//
  let min = 0;
  let max = CLG.length;
  let num = Math.floor(Math.random() * (max - min )) + min;
  CL.innerHTML += CLG[`${num}`];

}



const toggleSwitch = document.querySelector('#toggleSwitch');

toggleSwitch.addEventListener('change', function() {
  if (this.checked) {
    // Do something when switch is on
    console.log('Switch is on');
    CLguide.innerHTML+="1. Fill out all input boxes using the format written in placeholders.<br><br>2. <span style ='color:aqua'> Highlighted</span> parts are specific contents that can vary greatly for different users. Fill out the highlighted parts with your own words and voices so that the tone sounds more customized.<br><br>3. The generated texts are editable on web page.<br><br>4. Scroll up to see the generated letter.<br><br>5. Make sure to double-check before you copy-paste and send it.";

  } else {
    // Do something when switch is off
    console.log('Switch is off');
    CLguide.innerHTML=""; 
   }
});
