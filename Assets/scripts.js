let itemsArray = [
    {
        screenshot: "./Assets/files/Github.jpg",
        title: "Github MVPeter",
        description: "Projects, websites, and developement.",
        link: "https://github.com/mvpeter",
    },
    {
        screenshot: "./Assets/files/Linkedin.png",
        title: "LinkedIn: Matthew Petersen",
        description: "Career and work history.",
        link: "https://www.linkedin.com/in/mvpetersen",
    },
    {
        screenshot: "./Assets/files/UoUPE.png",
        title: "University of Utah Professional Education",
        description: "Full Stack webdevelopment",
        link: "https://bootcamps.continue.utah.edu/",
    },
    {
        screenshot: "./Assets/files/mpetersen.jpg",
        title: "Resume Matthew Petersen",
        description: "",
        link: "'./Assets/files/resume.pdf' download",
    },
    {
        screenshot: "./Assets/files/bingeterest.jpg",
        title: "Bingeterest",
        description: "Project 1 for my class.  We used a TV API and pulled a list of the top shows in your chosen genre or name.",
        link: "https://landonross.github.io/Bingeterest/",
    },
    {
        screenshot: "./Assets/files/employeelist.png",
        title: "Employee List",
        description: "This is an example of website using React to render informtion from an API to a talble.",
        link: "https://mvpeter.github.io/EmployeeDirectory/",
    },
    {
        screenshot: "./Assets/files/fitnesstracker.png",
        title: "Fitness Tracker",
        description: "This is an example of website that would use MongoDB",
        link: "https://mp-workouttracker.herokuapp.com/",
    },
]


for (let i = 0; i < itemsArray.length; i++) {
    $("#cardContainer").append
        (`<div class="card mb-3">
<img src="${itemsArray[i].screenshot}" style="max-width: 100px;" alt="...">
<div class="card-body">
  <h5 class="card-title"><a href=${itemsArray[i].link} target="_blank">${itemsArray[i].title}</a></h5>
  <p class="card-text">  <p class="card-text">${itemsArray[i].description}</p>
  </p>
  </div>
</div>`)

}