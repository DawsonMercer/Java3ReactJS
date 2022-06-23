import React, { Component, useEffect, useState } from 'react';


export function Resume(){
  const [educationArray, setEducationArray] = useState(null);
  const [ experienceArray, setExperienceArray] = useState(null);
  const [ skillsArray, setSkillsArray] = useState(null);

  useEffect( () =>{
    const fetchData = async ()=>{
      const result = await fetch("/api/v1/experience");
      const body = await result.json();
      setExperienceArray(body);
      console.log("this dawson",body);
    }
    fetchData();
  }, [])

  useEffect( () =>{
    const fetchData = async ()=>{
      const result = await fetch("/api/v1/educations");
      const body = await result.json();
      setEducationArray(body);
      console.log(body);
      console.log(`education array ${educationArray}`);
    }
    fetchData();
  }, [])

  useEffect( () =>{
    const fetchData = async ()=>{
      const result = await fetch("/api/v1/skills");
      const body = await result.json();
      setSkillsArray(body);
      console.log(body);
    }
    fetchData();
  }, [])
  let education = "education"
  let experience = "experience"
  let work = "work";
  let skills = "skills";
  let skillmessage = "SM";


  
  // _education = () => () => {
  //   const [educationArray, setEducationArray] = useState("Pineapples");

  //   return <div>{ educationArray }</div>
  // }

  // _experience = () => () => {
  //   const [ experienceArray, setExperienceArray] = useState("Pineapples2");

  //   return <div>{ experienceArray }</div>
  // }
  // _skills = () => () => {
  //   const [ skillsArray, setSkillsArray] = useState("Pineapples3");

  //   return <div>{ skillsArray }</div>
  // }

  
  //   const EducationHook = this._education();
  //   const ExperienceHook = this._experience();
  //   const SkillsHook = this._skills();

    
    

    // if(this.props.data){
    //   var skillmessage = this.props.data.skillmessage;
    //   var education = this.props.data.education.map(function(education){
    //     return <div key={education.school}><h3>{education.school}</h3>
    //     <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
    //     <p>{education.description}</p></div>
    //   })
    //   var work = this.props.data.work.map(function(work){
    //     return <div key={work.company}><h3>{work.company}</h3>
    //         <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
    //         <p>{work.description}</p>
    //     </div>
    //   })
    //   var skills = this.props.data.skills.map(function(skills){
    //     var className = 'bar-expand '+skills.name.toLowerCase();
    //     return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
    //   })
    // }

    if (educationArray === null || experienceArray == null || skillsArray == null){
      return (<h1>no data</h1>);
    }
    console.log(educationArray);
    // let educationObjects = educationArray.map( ())
    return (
      <>

      <h1>{education}</h1>
      <h1>{experience}</h1>
      <h1>{skills}</h1>
      


      {/* <h1>title {educationArray.title}</h1> */}
      
      <section id="resume">
      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
               {educationArray.map((innerObject, i)=>{
                   return (<div key={i}><h3>{innerObject.title}</h3>
                   <p className="info">{innerObject.institutionName} <span>&bull;</span><em className="date">{innerObject.gradYear}</em></p>
                   <p>Start Date: {innerObject.startDate}</p>
                   <p>End Date: {innerObject.endDate}</p>
                   <p>{innerObject.abbreviation}</p>
                   </div>
                 );})}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          
          {experienceArray.map((innerObject, i)=>{
            return <div key={i}><h3>{innerObject.company}</h3>
            <p className="info">{innerObject.jobTitle}<span>&bull;</span> <em className="date">{innerObject.startDate} to {innerObject.endDate}</em></p>
            <p>{innerObject.description}</p>
            </div>
            
          })}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>A collection of skills, libraries, & and other technologies.</p>

				<div className="bars">
				   <ul className="skills">
					  {skillsArray.map((skill, i)=>{
              return <li key={i}><em>{skill.name}</em></li>

            })}
					</ul>
				</div>
			</div>
      </div>
   </section>
   </>
    );
  }


export default Resume;
