import React from "react";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Images from "../images/gatsby-facebook.png"
import AniLink from "gatsby-plugin-transition-link/AniLink";

import "bootstrap/dist/css/bootstrap.css";


const AboutPage = () => (
  <Layout>
    <div>
      {/* <a class = "back-link"
      href = "/">&laquo;
      Back to Main Menu </a> */}
      <AniLink fade to = "/">
        Back to Main Menu </AniLink>{" "}
    </div>
<div>
    <nav>
      <AniLink fade to = "/page-2" >
      Page 2 </AniLink>{" "}
    <AniLink fade to = "/Portfolio" >
      Page 3 </AniLink>{" "}
    <AniLink fade to = "/photos">
          Photos </AniLink>{" "}
        <AniLink fade to = "/gallery" >
      Gallery </AniLink>{" "}
 
      </nav>
      </div>
    <SEO title="Home" />
    <h1>About me</h1>
    <div> <img src={Images} alt="" style={{ width: 200, float: "right", marginLeft: 10, marginBottom: 5 }} /></div>
   
    <h2> My background: </h2>
    <p> My name is Manoj Daswani and I am currently in my First Year at University of Tasmania pursuing a Master in Information Technology and Systems (MITS). I am originally from Mumbai, the city of Bollywood stars. However I have lived my past 13 years in a beautiful country  "New Zealand" where I have learned its culture, values and system and also met my beloved wife "Sithara" who is originally from Sri Lanka.​​​​​​​</p>
    <p>
      If you’ re wondering who I am… </p>
    <p>
      I’ m Manoj Daswani, a self-taught a full-stack developer. After my college degree in "MBA", I got a job as a "developer", where I stayed for almost 2 years, but I only developed websites with Wordpress custom themes, and HTML & CSS… So I wasn’ t learning and improving, I felt stuck.In July 2018 I decided it was time
      for a change, so I started to wake up at 6 am to study javascript before going into work.I quickly started to love Javascript, and in January 2019 I decided to take the risk and quit my job.I’ ve been studying Front - end development full time ever since and I documented my whole journey on my Instagram.During this time, I took online courses like Advanced CSS and Sass: Flexbox, Grid, Animations and More!The Complete Javascript Course, Javascript30, Understanding the Weird Parts, ES6, Modern React w / Redux, React: The Complete Guide, Gatsby Bootcamp, read book series "You don’t know JS", and also watched countless youtube videos about Javascript.Because we know the best way to learn is to practice, I also did a bunch of personal projects with the knowledge I gathered from the courses, you can check them on my portfolio.I even started my Youtube channel, where I already have some tutorials about React, Redux and Firebase.I always want to learn more, do more, and be more.I’ m also a firm believer that we should never settle. I am hard working, super curious, passionate, committed, and also a fast learner!
    </p>

    <p> I started my career in web - development back in 2015 when I took up a challenge at the Microsoft Student Accelerator program which was to build a website or an app to solve an existing societal problem.There I realised by just building a simple app, how I could reach to millions of people and could solve their problem.This had really motivated me to move to IT, just because it is connected to my passion, which involves challenges and continuous learning.This is where I started to learn new technologies and had built a website
    for community to seek good builders at a low cost.
    After progressing from NZ Post where I had worked
    for over 7 years, to fully devote myself in IT, I started working as a freelance web developer by visiting businesses and improving their performance through their website using HTML, CSS, Javascript, SQL, Bootstrap and by writing better codes.Here I had learned the languages and to prototype using Balsamiq Mockups.Later on I got the opportunity to work as an intern software developer at MVP Studio, where I had built my skills by learning and implementing different programming languages, libraries and framework like.Net MVC, Angular, React, Typescript and PHP on different projects, to build great features
    for a single page application.
    While working at MVP Studio, I have realised the importance of team - work, communication and collaboration which makes learning and getting results so much faster and simpler.One of my favourite ways to learn is to teach.I find teaching others gratifying and I know that in order to teach we just have to be one chapter ahead.Just to enhance my knowledge in the back end, I had recently build an interactive bank’ s website using PHP, JS, HTML and CSS and phpMyAdmin.
    To gain better understanding of the front end and back end development I have gained several online certifications from Linkedin and Microsoft Virtual Academy which could be viewed on my Linkedin profile at https: //www.linkedin.com/in/manoj-d-b5428815b/.
    </p>

    <p>My values, passion and vision:

​​​​​​​I always find ways to help people in need. Back in 2015, at the University of Auckland I took the opportunity  and became a member and a participant in the Microsoft Student Accelerator program  for competing to make the best software to solve people's problems and to have an impact in people's life and society. I was completely naive about programming, but I learned that through the medium of Information & technology, the solution to a problem could be developed, designed  and delivered to millions, rather than the older conventional manner which needs comparatively, more resources and has restricted boundaries. This program had really inspired me to change my career in order to meet my purpose in life. This event has really been an eye opener for me which has developed my passion towards IT and inspired me to pursue the path of Software Development in order to solve people and societal problems and make lives easier for them as well as for the entire human race which has become my primary purpose of life.​​​​​​​</p>
    <h2>Office: </h2>
        <p> 2C/1002 Ashok Nagar, Military Road, Marol, Andheri-East, Mumbai 400072 India</p>
        <p>Email: daswanimanoj@yahoo.com</p>
    {/* <div div style = {
      {
        maxWidth: `300`,
        marginBottom: `1.45rem`
      }
    } >
    
    </div> */}

    <AniLink fade to = "/" >
      Go to Home </AniLink>
    <AniLink fade to = "/page-2">
      Page 2 </AniLink>
    <AniLink fade to = "/Portfolio">
      Page 3 </AniLink>
    
   
    {/* <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
   
 
  </Layout>
)

export default AboutPage