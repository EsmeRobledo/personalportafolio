import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import './Resume.css'

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.link ? props.link : ""}</span>
        </div>
      </div>
    );
  };
  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 35 },
    { skill: "React JS", ratingPercentage: 35 },
    { skill: "Java Core", ratingPercentage: 70 },
    { skill: "Mongo DB", ratingPercentage: 35 },
    { skill: "HTML", ratingPercentage: 60 },
    { skill: "CSS", ratingPercentage: 60 },
    { skill: "Express", ratingPercentage: 35},
  ];

  const projectsDetails = [
    {
      title: " Ecommerce Website ",
      duration: { fromDate: "2022", toDate: "2022" },
      link: <a href="">PETSHOP</a>,
      description:
        `An ecommerce website for showcasing and selling products online with payment system integrated`,
      subHeading: "Technologies Used: React JS, Node, React, Express, Mongo, CSS, HTML",
    },
    {
      title: "Restaurant Website",
      duration: { fromDate: "2021", toDate: "2021" },
      link: <a href="https://thirsty-wilson-5c1039.netlify.app/">Ramen House</a>,
      description:
        `A personal Portafolio website to showcase all my details and projects at one place`,
      subHeading: "Technologies Used: React JS, CSS, HTML, Firebase",
    },
    {
        title: "Dashboard website",
        duration: { fromDate: "2021", toDate: "2021" },
        link: <a href="https://proyecto-3-dashboard-covid-19.netlify.app/">Dashboard Grafic Covid </a>,
        description:
          `A website that fetch an external API, with the goal to show the details about COVID-19 cases around the globe`,
        subHeading: "Technologies Used: Node JS, CSS, HTML, Chart Js, JavaScript",
      },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"UCAMP"}
        subHeading={"FULLSTACK WEB DEVELOPMENT"}
        fromDate={"2021"}
        toDate={"2022"}
      />
      <ResumeHeading
        heading={"Universidad Tecnologica Latinoamericana"}
        subHeading={"BACHELOR DEGREE ON COMPUTER ENGINEERING"}
        fromDate={"2017"}
        toDate={"2019"}
      />
      <ResumeHeading
        heading={"Instituto Tecnologico de Leon"}
        subHeading={"BACHELOR ON COMPUTER ENGINEERING"}
        fromDate={"2009"}
        toDate={"2004"}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"Emergys Mexico"}
        subHeading={"FULLSTACK JAVA WEB DEVELOPER"}
        fromDate={"2014"}
        toDate={"2016"}
      />
      
            <div className="experience-description">
        <span className="resume-description-text">
        I was collaborating as a Java Web Developer, with a project from IBM USA.
        </span>
      </div>
      <div className="experience-description">
        <span className="resume-description-text">
          Worked with members of my team to develop new aspect on the application and new process, using Kendo, JavaEE and Spring.{" "}
        </span>
        <br />
      </div>
 
      <ResumeHeading
        heading={"Ultra Laboratorios"}
        subHeading={"FULLSTACK JAVA WEB DEVELOPER"}
        fromDate={"2013"}
        toDate={"2010"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          I helped in several fases of the ERP  
        </span>
      </div>
      <div className="experience-description">
        <span className="resume-description-text">
          Sice we were a small team(5) we work togeter to meke a compleatly new ERP for the company.{" "}
        </span>
        <br />
        <span className="resume-description-text">
          From the scratch to the delivery we successfully reach the expectation.{" "}
        </span>
        <br />
          </div>
      </div>,
      <div
        className="resume-screen-container programming-skills-container"
        key="programming-skills"
      >
        {programmingSkillsDetails.map((skill, index) => (
          <div className="skill-parent" key={index}>
            <div className="heading-bullet"></div>
            <span>{skill.skill}</span>
            {/* <div className="skill-percentage">
              <div
                style={{ width: skill.ratingPercentage + "%" }}
                className="active-percentage-bar"
              ></div>
            </div> */}
          </div>
        ))}
      </div>
      , /* PROJECTS */
      <div className="resume-screen-container" key="projects">
        {projectsDetails.map((projectsDetails, index) => (
          <ResumeHeading
            key={index}
            heading={projectsDetails.title}
            subHeading={projectsDetails.subHeading}
            description={projectsDetails.description}
            fromDate={projectsDetails.duration.fromDate}
            toDate={projectsDetails.duration.toDate}
            link={projectsDetails.link}
          />
        ))}
      </div>
      ,
      <div className="resume-screen-container" key="interests">
        <ResumeHeading
          heading="Cooking"
          description="I know cook is part of the daily routing on most of the people,
          but do it for hobby have been my liking since forever, I like to make my own recipies and improvise
          whit anything I have, I love the fool and enjoy to make food for other, makes me happy if they like my cooking"
        />
        <ResumeHeading
          heading="Travel"
          description="I am always happy to know new places and new people, I like to visit historic places,
          forest, big cities and of cource the beach, theres is no better charger than travel and feel free. "
        />
        <ResumeHeading
          heading="Gaming"
          description="An old hobby never die, I really enjoy to play any kind of game, PC, mobile, console,
          arcade, etc, I never get tired of them, I like the puzzel game like ResidentEvil, FF, Silent H,
           some RPG Zelda, Genshin, Castelvania some fighting games like KOF, Street F. etc"
        />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../components/Resume/${bullet.logoSrc}`)}
          alt="ooopps..no internet connection"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };
  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">

              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
}