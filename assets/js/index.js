// Function to add projects in portfolio section
const projects = [
  {
    name:"Portfolio",    
    image:"assets/img/portfolio/pf1.png",   
    filter:"filter-full",  
    url:"/portfolio-details.html"  
  },
  {
    name:"Project Manager",    
    image:"assets/img/portfolio/project-manager-homepage.png",   
    filter:"filter-mern",  
    url:"/project-manager.html"  
  },
  {
    name:"Admission Jockey Admin Panel",    
    image:"assets/img/portfolio/",   
    filter:"filter-mern",  
    url:"/admission-jockey-adminpanel.html"  
  },
  {
    name:"Admission Jockey Website",    
    image:"assets/img/portfolio/",   
    filter:"filter-mern",  
    url:"/admission-jockey.html"  
  },
  {
    name:"Facebook Clone",    
    image:"assets/img/portfolio/",   
    filter:"filter-mern",  
    url:"/facebook-clone.html"  
  },
  {
    name:"Blog Website",    
    image:"assets/img/portfolio/",   
    filter:"filter-mern",  
    url:"/blog-website.html"  
  },
  {
    name:"Drag and Drop List Item",    
    image:"assets/img/portfolio/dnd1.png", 
    link:"filter-js",  
    filter:"filter-react",  
    url:"/react-milti-list-drag-and-drop.html"  
  },
  {
    name:"NewsToday - Bharat",    
    image:"assets/img/portfolio/news-today-bharat.png",   
    filter:"filter-react",  
    url:"/news-bharat.html"  
  },
  {
    name:"Multilingual React Website",    
    image:"assets/img/portfolio/react-website-with-google-translate.png",   
    filter:"filter-react",  
    url:"/multilingual-react-web.html"  
  },
  {
    name:"React Text Utils",    
    image:"assets/img/portfolio/React-Text-Utils.png",   
    filter:"filter-react",  
    url:"/text-utils.html"  
  },
  {
    name:"React Color Grid",    
    image:"assets/img/portfolio/react-metrix.png",   
    filter:"filter-react",  
    url:"/react-color-grid.html"  
  },
  {
    name:"IMDB Clone",    
    image:"assets/img/imdb_ss.png",   
    filter:"filter-react",  
    url:"/imdb-clone.html"  
  },
  {
    name:"Alarm Clock",    
    image:"assets/img/portfolio/js-alarm-clock.png",   
    filter:"filter-js",  
    url:"/alarm-clock.html"  
  },
  {
    name:"Calculator",    
    image:"assets/img/portfolio/js-calculator.png",   
    filter:"filter-js",  
    url:"/calculator.html"  
  },
  {
    name:"Car Insurance Quotation",    
    image:"assets/img/portfolio/car-insurance.png",   
    filter:"filter-js",  
    url:"/car-insurance.html"  
  },
  {
    name:"Dice Game",    
    image:"assets/img/portfolio/js-dice-game.png",   
    filter:"filter-js",  
    url:"/dice-game.html"  
  },
  {
    name:"Drum Kit",    
    image:"assets/img/portfolio/drum-kit.png",   
    filter:"filter-js",  
    url:"/drum-kit.html"  
  },
  {
    name:"Name Generator",    
    image:"assets/img/portfolio/name-generator.png",   
    filter:"filter-js",  
    url:"/name-generator.html"  
  },
  {
    name:"Simon Game",    
    image:"assets/img/portfolio/simon-game.png",   
    filter:"filter-jquery",  
    url:"/simon-game.html"  
  },
  {
    name:"PostMaster",    
    image:"assets/img/portfolio/pmc.png",   
    filter:"filter-js",  
    url:"/postmaster.html"  
  },
  {
    name:"College Library",    
    image:"assets/img/portfolio/cl.png",   
    filter:"filter-js",  
    url:"/college-library.html"  
  },
  {
    name:"Weekly Budget",    
    image:"assets/img/portfolio/weekly-budget.png",   
    filter:"filter-js",  
    url:"/weekly-budget.html"  
  },
  {
    name:"To Do List",    
    image:"assets/img/portfolio/tdl-ejs1.png",   
    filter:"filter-ejs",  
    url:"/ejs-to-do-list.html"  
  },
]
const addProject = ()=>{
  const portfolioContainer = document.getElementById('portfolio-container');
  projects?.map(project => {
    const projectDiv = document.createElement('div')
    projectDiv.className = `col-lg-4 col-md-6 portfolio-item ${project.filter}`
    const portfolioWrap = document.createElement('div')
    portfolioWrap.className = `portfolio-wrap`
    const imgage = document.createElement('img')
    imgage.src=`${project.image}`
    imgage.className = `img-fluid`
    imgage.alt=" "
    const portfolioLink = document.createElement('div')
    portfolioLink.className = `portfolio-links`
    const a1 = document.createElement('a')
    a1.className="portfolio-lightbox"
    a1.href=`${project.image}`
    a1.setAttribute('data-gallery', 'portfolioGallery');
    a1.title=`${project.name}`
    const i1 = document.createElement('i')
    i1.className="bx bx-plus"
    const a2 = document.createElement('a')
    a2.href=`${project.url}`
    // a2.target="_blank"
    a2.title="More Details"      
    const i2 = document.createElement('i')
    i2.className="bx bx-link"
    a2.appendChild(i2)
    a1.appendChild(i1)
    portfolioLink.appendChild(a1)
    portfolioLink.appendChild(a2)
    portfolioWrap.appendChild(imgage)
    portfolioWrap.appendChild(portfolioLink)
    projectDiv.appendChild(portfolioWrap)
    portfolioContainer.appendChild(projectDiv)
  });
};  
addProject()

// Function to add education getails in resume section
const education = [
  {
    name:"MASTERS OF COMPUTER APPLICATION",
    institution:"Amity Online",
    duration:"2023 - Present",
    desc:"I am currently pursuing a Masters of Computer Application (MCA) at Amity Online, focusing on advanced computer science and software development. This program has provided me with the opportunity to delve into complex subjects like programming, algorithms, database management, and software engineering. It's helping me sharpen my technical skills and expand my knowledge in the field of computer science."
  },
  {
    name:"Bachelor of Commerce",
    institution:"Indira Gandhi National Open University",
    duration:"2018 - 2021",
    desc:"My B.Com program at IGNOU provided a solid foundation in accounting, finance, marketing, and economics. It equipped me with essential skills for a career in commerce and finance."
  },
]
const addEdu = ()=>{
  const eduTitle = document.getElementById("edu-title")
  education.reverse().map(edu=>{
    const div = document.createElement('div')
    div.className="resume-item"
    const h4 = document.createElement('h4')
    h4.innerText=edu.name
    const h5 = document.createElement('h5')
    h5.innerText=edu.duration
    const p1 = document.createElement('p')
    const em = document.createElement('em')
    em.innerText=edu.institution
    const p2 = document.createElement('p')
    p2.innerText=edu.desc
    p1.appendChild(em)
    div.appendChild(h4)
    div.appendChild(h5)
    div.appendChild(p1)
    div.appendChild(p2)
    eduTitle.parentNode.insertBefore(div, eduTitle.nextSibling)
  })
}
addEdu()

// Function to add certifications in resume section
const cetifications = [
  {
    name:"Full-Stack Web Development from GreatLearning",
    skills:"HTML, CSS, JavaScript, Bootstrap, React.js, Node.js, Express.js, MongoDB, SQL, NoSQL",
    href:"https://drive.google.com/file/d/1P9I4radAwq00n7o2gkOdftEW9xdHMIhh/view",
  },
  {
    name:"React.js from GreatLearning",
    skills:"React.js, Redux, Redux Thunk",
    href:"https://drive.google.com/file/d/1t8BQBQLDh8PmFP8ykmbfOWi7NcQHtouB/view",
  },
  {
    name:"MongoDB from GreatLearning",
    skills:"Database, MongoDB, Mongoose",
    href:"https://drive.google.com/file/d/10QeSIRI5ZP5Yrt2KfG6Qui5bXY6qyk7L/view",
  },
  {
    name:"GitHub from GreatLearning",
    skills:"Git, GitHub, Version Control",
    href:"https://drive.google.com/file/d/1bhfaYa4M352U2y9crH39wOYPHpdlmOAN/view",
  },
  {
    name:"JQuery from GreatLearning",
    skills:"JQuery",
    href:"https://drive.google.com/file/d/1UYiPYmwu7QfkZh4o-YSkxdrKVMDtdmm8/view",
  },
]
const addCertification = ()=>{
  const certificationTitle = document.getElementById("certification-title")
  cetifications.reverse().map(certification=>{
    const div = document.createElement('div')
    div.className = "resume-item pb-0"
    const h4 = document.createElement('h4')
    h4.innerText=`${certification.name}`
    const ul = document.createElement('ul')
    const li1 = document.createElement('li')
    const b = document.createElement('b')
    b.innerText = "Skills Acquired: "
    const skillsText = document.createTextNode(`${certification.skills}`)
    const li2 = document.createElement('li')
    const a = document.createElement('a')
    a.href=`${certification.href}`
    a.target="_blank"
    a.innerText="View Certificate"
    li2.appendChild(a)
    li1.appendChild(b)
    li1.appendChild(skillsText)
    ul.appendChild(li1)
    ul.appendChild(li2)
    div.appendChild(h4)
    div.appendChild(ul)
    certificationTitle.parentNode.insertBefore(div, certificationTitle.nextSibling)
  })
}
addCertification()

// Function to add role and responsibilities in resume's professfion experience section
const roles = [
  `Proficient in full-stack web development, specializing in the MERN (MongoDB, Express.js, React, Node.js) stack.`,
  `Designed, developed, and maintained web applications, resulting in a 20% increase in user engagement and a 10% decrease in bounce rate.`,
  `Developed responsive and intuitive user interfaces using React, HTML, CSS, and JavaScript, contributing to a 30% improvement in user satisfaction. `,
  `Implemented state management with Redux.js, leading to a 15% increase in application scalability and faster load times.`,
  `Created RESTful APIs with Express.js, enhancing data flow and interaction between front-end and back-end components, which resulted in a 40% reduction in data transfer times.`,
  `Managed databases effectively, optimizing data integrity and performance with MongoDB, reducing database query response times by 25%.`,
  `Collaborated closely with cross-functional teams to deliver high-quality and user-centric web solutions, resulting in 90% of projects delivered ahead of schedule.`,
  `Utilized version control and contributed to code reviews and team discussions, maintaining a 99% code quality score.`,
  `Demonstrated strong problem-solving abilities and a commitment todelivering performance-driven solutions, resolving 95% of critical issues within 24 hours.`,
  `Stayed updated with the latest web development trends and emergingtechnologies, applying best practices in projects, resulting in 30% faster project delivery times.`,
  `Successfully integrated user authentication mechanisms, including JWT, which led to a 100% improvement in application security, with no reported security breaches.`,
]
const addRoles = ()=>{
  const rolesElem = document.getElementById("roles-and-resp")
  roles.map(role=>{
    const li = document.createElement('li')
    li.innerText = role
    rolesElem.appendChild(li)
  })
}
addRoles()

// Function to add skills
const services = [
  {
    name:"Full-Stack Web Development",
    icon:"bi bi-window",
    detail:"I can bring your ideas to life by creating comprehensive web applications from the ground up, ensuring both a seamless user experience and robust functionality.",
    delay:"000"
  },
  {
    name:"API Development",
    icon:"bi bi-card-checklist",
    detail:"I can build efficient and scalable APIs that empower your application to communicate seamlessly, both internally and with external services",
    delay:"100"
  },
  {
    name:"Database Design and Management",
    icon:"bx bx-data",
    detail:"I'll take care of your data with precision, creating database structures that optimize performance and maintain data integrity, leveraging the power of MongoDB.",
    delay:"200"
  },
  {
    name:"User Authentication and Authorization",
    icon:"bx bx-user-check",
    detail:"I prioritize security, implementing comprehensive user authentication and authorization systems to ensure user data remains protected.",
    delay:"300"
  },
  {
    name:"Integration of Third-Party Services",
    icon:"bi bi-credit-card",
    detail:"Seamlessly incorporating external services and APIs into your application is a breeze, whether it's for payments, social media integration, or any other specific need.",
    delay:"400"
  },
  {
    name:"Real-Time Features",
    icon:"bi bi-calendar4-week",
    detail:"I'll make your application dynamic with real-time capabilities, from live updates to interactive chat functionalities using cutting-edge technologies like WebSockets.",
    delay:"500"
  },
]
const addServices = ()=>{
  const serviceElem = document.getElementById("service-container")
  services.map(service=>{
    const div = document.createElement('div')
    div.className="col-lg-4 col-md-6 icon-box"
    div.setAttribute("data-aos","fade-up")
    div.setAttribute("data-aos-delay",service.delay)
    const div1 = document.createElement('div')
    div1.className="icon"
    const i = document.createElement('i')
    i.className=service.icon
    const h4 = document.createElement('h4')
    h4.className="title"
    const a = document.createElement('a')
    a.innerText=service.name
    const p = document.createElement('p')
    p.className="description"
    p.innerText=service.detail
    h4.appendChild(a)
    div.appendChild(div1)
    div1.appendChild(i)
    div.appendChild(h4)
    div.appendChild(p)
    console.log(i)
    serviceElem.appendChild(div)
  })

}
addServices()

// Contact form js functionality
const clearform = (type)=>{
  document.querySelector(type).style.display = "none";
  document.getElementById("name").value=" ";
  document.getElementById("email").value=" ";
  document.getElementById("subject").value=" ";
  document.getElementById("message").value=" ";
}
function sendFormData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;
  const formData = {
    name: name,
    email: email,
    subject: subject,
    message: message,
  };
  fetch("https://shivani-portfolio-be.vercel.app/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body:JSON.stringify(formData),
  })
    .then((data) => {
      console.log('data :',data)
      if (data.status == 200) {
        document.querySelector(".sent-message").style.display = "block";
        setTimeout(()=>{
          clearform(".sent-message")
        },2500)
      } else {
        document.querySelector(".error-message").style.display = "block";
        setTimeout(()=>{
          clearform(".error-message")
        },1500)
      }
    })
    .catch((error) => {
      document.querySelector(".error-message").style.display = "block";
      setTimeout(()=>{
        clearform(".error-message")
      },1500)
    });
}
const form = document.getElementById("contact-form");
form.addEventListener("submit",event => {
  event.preventDefault();
  sendFormData();
});