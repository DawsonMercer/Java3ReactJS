import React, { Component, useEffect, useState } from 'react';

/**
 * Resume function that handles education, experience, and skills
 * 
 * @returns 
 */
export function Resume(){
  const [educationArray, setEducationArray] = useState(null);
  const [ experienceArray, setExperienceArray] = useState(null);
  const [ skillsArray, setSkillsArray] = useState(null);

  /**
   * fetch experience data
   */
  useEffect( () =>{
    const fetchData = async ()=>{
      const result = await fetch("/api/v1/experience");
      const body = await result.json();
      setExperienceArray(body);
      console.log("this dawson",body);
    }
    fetchData();
  }, [])

  /**
   * fetch educations data
   */
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

  /**
   * fetch skills data
   */
  useEffect( () =>{
    const fetchData = async ()=>{
      const result = await fetch("/api/v1/skills");
      const body = await result.json();
      setSkillsArray(body);
      console.log(body);
    }
    fetchData();
  }, [])
 

  /**
   * if no data in the arrays, return null
   * @return null
   */
    if (educationArray === null || experienceArray == null || skillsArray == null){
      return (<h1>No data - Please Start SpringBoot</h1>);
    }
    console.log(educationArray);
    /**
     * map data to html elements
     * @return experience, education, and skills
     */
    return (
      <>
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
                   <p>Start Date: {innerObject.startDate} End Date: {innerObject.endDate}</p>
                   <p></p>
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
              return <li key={i}><em>{skill.name} - {skill.type}</em></li>

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
