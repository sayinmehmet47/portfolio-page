// Skills Icons

import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"
import carApp from "./images/car-app.png"
import pomodoro from "./images/pomodoro-clock.png"
import quiz from "./images/quiz1.png"
import todo from "./images/todo.png"
import intuit from "./images/intuit-clone.png"
import product from "./images/product-page.png"
import newyorktimes from "./images/newyork-times.png"
import drumMachine from "./images/drum-machine.png"
import stackoverflow from "./images/stackoverflow.svg"
import linkedin from "./images/linkedin.svg"
import freecodecamp from "./images/freecodecamp.svg"
import mongodb from "./images/mongodb.svg"
import nodejs from "./images/nodejs.svg"
import mehmetfoto from "./images/mehmetfoto.png"
import book from "./images/kitap_kurdu.png"
import kitapkurdu from "./images/kitapkurdu.png"
import mainpage2 from "./images/mainpage2.png"
// Social Icon
import githubIcon from "./images/github.svg"
import bootcamp from "./images/bootcamp.jpg"
import netflix from "./images/netflix.png"
import miltek from "./images/miltek.png"
export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "mehmet",
  headerTagline: ["ReactJs Developer", "MERN Stack Developer"],
  //   Header Paragraph
  headerParagraph:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",

  //Contact Email
  contactEmail: "sayinmehmet47@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Book Search App",
      para:
        "React,Express, Kubernetes, CI-CD, Github Actions, Integration Test, Graphana, Prometeus, ",
      imageSrc: kitapkurdu,
      url: "https://kitap-kurdu-bx87.vercel.app/",
    },
    {
      title: "Currency Portfolio", //Project Title - Add Your Project Title Here
      para: "ReactJS,Redux,Bootstrap", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: mainpage2,

      //Project URL - Add Your Project Url Here
      url: "https://currency-portfolio.netlify.app/",
    },
      {
      title: "Team Management App", 
      para: "ReactJS,REDUX,Bootsrap 5,NodeJS,MongoDB,Socketio",
      //Project Image - Add Your Project Image Here,
      imageSrc: "https://github.com/prisma/prisma/assets/75525090/2bf7807f-399b-410a-8166-cdfaa26d0b76",
      //Project URL - Add Your Project Url Here,
      url: "https://team-management.onrender.com/",
     },
      {
      title: "Netflix Clone Project", 
      para: "NextJS,Prisma,Tailwind CSS,NextAuth,TypeScript",
      //Project Image - Add Your Project Image Here,
      imageSrc: "https://github.com/sayinmehmet47/kitapKurdu/assets/75525090/fdabc9d8-caf5-4e9e-9da3-5ea533053f6a",
      //Project URL - Add Your Project Url Here,
      url: "https://popular-movies42.vercel.app/browse",
     },

    // {
    //   title: "Car Application", //Project Title - Add Your Project Title Here
    //   para: "ReactJS,ExpressJS,NodeJS,MongoDB", // Add Your Service Type Here
    //   //Project Image - Add Your Project Image Here
    //   imageSrc: carApp,

    //   //Project URL - Add Your Project Url Here
    //   url: "https://car-app1.herokuapp.com/",
    // },

    {
      title: "Pomodoro Clock", //Project Title - Add Your Project Title Here
      para: "HTML,CSS,BootStrap,JQuery", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: pomodoro,
      //Project URL - Add Your Project Url Here
      url: "https://hackers-timer.netlify.app/",
    },
   

    // {
    //   title: "Todo Application", //Project Title - Add Your Project Title Here
    //   para:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
    //   //Project Image - Add Your Project Image Here
    //   imageSrc: todo,
    //   //Project URL - Add Your Project Url Here
    //   url: "https://admiring-jang-822de5.netlify.app/",
    // },

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "I'm Mehmet. As a Full Stack Developer, I`m very passionate and talented about ReactJS, NodeJS, Nestjs, NextJS, Docker, Kubernetes. I devoted myself to learn, implement, adapt and create through my life to build smart web apps to help people and improve life quality around the world. ",
  aboutParaTwo:
    "As a Web Developer with 16 months of experience able to build web applications from the ground up - information gathering, planning, design, development, testing and delivery, and maintenance.",
  aboutImage: mehmetfoto,

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      icon: freecodecamp,
      description: "Responsive Web Design",
      link:
        "https://www.freecodecamp.org/certification/fcc5a51f0ea-4f77-4951-b274-a104a1479f22/responsive-web-design",
    },
    {
      img: cssIcon,
      icon: freecodecamp,
      description: "Responsive Web Design",

      link:
        "https://www.freecodecamp.org/certification/fcc5a51f0ea-4f77-4951-b274-a104a1479f22/responsive-web-design",
      description: "Responsive Web Design",
    },
    {
      img: jsIcon,
      icon: freecodecamp,
      description: "JavaScript Algorithms and Data Structures",

      link:
        "https://www.freecodecamp.org/certification/fcc5a51f0ea-4f77-4951-b274-a104a1479f22/javascript-algorithms-and-data-structures",
    },
    {
      img: reactIcon,
      icon: freecodecamp,
      description: "Front End Libraries",
      link:
        "https://www.freecodecamp.org/certification/fcc5a51f0ea-4f77-4951-b274-a104a1479f22/front-end-development-libraries",
    },
    {
      img: mongodb,
      icon: freecodecamp,
      description: "Back End Development and APIs",
      link:
        "https://www.freecodecamp.org/certification/fcc5a51f0ea-4f77-4951-b274-a104a1479f22/back-end-development-and-apis",
    },
    {
      img: nodejs,
      icon: freecodecamp,
      description: "Back End Development and APIs",
      link:
        "https://www.freecodecamp.org/certification/fcc5a51f0ea-4f77-4951-b274-a104a1479f22/back-end-development-and-apis",
    },
    {
      img:
        "https://socialhackersacademy.org/wp-content/uploads/2020/10/imageedit_1_2264186354.png",
      icon: bootcamp,
      description: "Social Hackers Academy Frontend Bootcamp",
      link:
        "https://www.freecodecamp.org/certification/fcc5a51f0ea-4f77-4951-b274-a104a1479f22/back-end-development-and-apis",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Experience",
  promotionPara: "",

  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/sayinmehmet47" },
    {
      img: linkedin,
      url: "https://www.linkedin.com/in/sayinmehmet/",
    },
    {
      img: stackoverflow,
      url: "https://stackoverflow.com/users/15106423/sayinmehmet47",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
