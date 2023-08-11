import React from "react";
import "./Resume.css"; // Import your custom CSS file for styling

const Resume = ({ data }) => {
  const {
    first_name,
    last_name,
    level,
    profession,
    email,
    phone_number,
    city,
    country,
    pincode,
    github,
    twitter,
    linkedin,
    portfolio_link,
    languages,
    summary,
    accomplishment,
    education,
    work_experience,
    projects,
    skills,
    certificates,
  } = data;

  return (
    <div className=" w-[1100px] mx-auto h-screen bg-white ">
        <div className="font-[700] text-[40px] text-center pt-10" >
        <h1>{first_name} {last_name}</h1>
        </div>
        <div className="text-white bg-red-400 py-2 from-pink-500 to-orange-300 text-lg text-center " >
        <p className="subheading">{level} {profession}</p>
            </div>
            <div className=" w-full flex  h-96 ">
                <div className= "w-2/6 px-4  bg-white h-auto">

                    <div className= " pl-4 tect-left text-red-400 flex flex-col w-full   mt-2 gap-2 ">
                    <div className="flex  w-full  justify-betweem items-center py-2">  <div  className="w-6"> <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg> </div><div classname="ml-2"> {phone_number}</div>  </div>       
                    <div className="flex  w-full  justify-betweem items-center py-2">  <div  className="w-6"> <svg className="mr-2"  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
</svg> </div><div classname="pl-4">{email} </div> </div>        
                    <div className="flex  w-full  justify-betweem items-center py-2">  <div  className="w-6"> <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
</svg> </div>   <div  classname="pl-2">{city}, {country} {pincode}</div> </div>        
                    <div className="flex  w-full  justify-betweem items-center py-2">  <div  className="w-6"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
</svg> </div>     <div  classname="pl-2"> LinkedIn: {linkedin}</div>  </div>        
                           
     
     
     
            <div className= "w-full bg-red-400 h-2 ">

</div>


            </div>


    <div className="uppercase text-2xl pl-4  pt-4 font-semibold ">
            Summary </div>
<div className="w-full pl-4 ">
<p>{summary}</p>
          <div className= "w-full my-3 bg-red-400 h-2 ">

</div>   </div>
           
    <div className="uppercase text-2xl pl-4  pt-4 font-semibold ">
            Accomplishment </div>
<div className="w-full pl-4 ">
<p>{accomplishment}</p>
             <div className= "w-full my-3 bg-red-400 h-2 ">

</div>  </div>
         
    <div className="uppercase text-2xl pl-4  pt-4 font-semibold ">
    Skills </div>
<div className="w-full pl-4 ">
<p><strong>Top Technical Skills:</strong>  {skills[0].top_technical_skills}</p>    <p><strong>Technical Skills:</strong> {skills[0].technical_skills}</p>
          <p><strong>Non-Technical Skills:</strong> {skills[0].non_technical_skills}</p>
          <p><strong>Softwares:</strong> {skills[0].softwares}</p>
               <div className= "w-full my-3 bg-red-400 h-2 ">

</div> 
      </div>

       

   

    <div className="uppercase text-2xl pl-4  pt-4 font-semibold ">
            Summary </div>
<div className="w-full pl-4 ">
<p>{summary}</p>
          <div className= "w-full my-3 bg-red-400 h-2 ">

</div>   </div>
           
    <div className="uppercase text-2xl pl-4  pt-4 font-semibold ">
            Accomplishment </div>
<div className="w-full pl-4 ">
<p>{accomplishment}</p>
             <div className= "w-full my-3 bg-red-400 h-2 ">

</div>  </div>
         
    <div className="uppercase text-2xl pl-4  pt-4 font-semibold ">
    Skills </div>
<div className="w-full pl-4 ">
<p><strong>Top Technical Skills:</strong>  {skills[0].top_technical_skills}</p>    <p><strong>Technical Skills:</strong> {skills[0].technical_skills}</p>
          <p><strong>Non-Technical Skills:</strong> {skills[0].non_technical_skills}</p>
          <p><strong>Softwares:</strong> {skills[0].softwares}</p>
               <div className= "w-full my-3 bg-red-400 h-2 ">

</div> 
      </div>

       

   


                    </div>
                <div className= "w-4/6  pr-16 ">
  
      <section className="section">
      <div className="uppercase text-2xl pl-4  pt-4 font-semibold ">
            Professional Experience  </div>    
            
            {work_experience.map((exp) => (
          <div key={exp.work_id} className="sub-section">
            <div className=" flex pl-4  justify-between ">
            <h3>{exp.job_title}</h3> <p>{exp.start_date} - {exp.end_date}</p>
            </div>
            <div className=" flex pl-4  justify-between ">
            <h3>{exp.company_name}</h3> <p> {exp.company_location}</p>
            </div>
            <div className=" flex pl-4  justify-between ">
           <p>{exp.Description}</p>
            </div>
         
           
            
          </div>
        ))}
            {work_experience.map((exp) => (
          <div key={exp.work_id} className="sub-section">
            <div className=" flex pl-4  justify-between ">
            <h3>{exp.job_title}</h3> <p>{exp.start_date} - {exp.end_date}</p>
            </div>
            <div className=" flex pl-4  justify-between ">
            <h3>{exp.company_name}</h3> <p> {exp.company_location}</p>
            </div>
            <div className=" flex pl-4  justify-between ">
           <p>{exp.Description}</p>
            </div>
         
           
            
          </div>
        ))}
            {work_experience.map((exp) => (
          <div key={exp.work_id} className="sub-section">
            <div className=" flex pl-4  justify-between ">
            <h3>{exp.job_title}</h3> <p>{exp.start_date} - {exp.end_date}</p>
            </div>
            <div className=" flex pl-4  justify-between ">
            <h3>{exp.company_name}</h3> <p> {exp.company_location}</p>
            </div>
            <div className=" flex pl-4  justify-between ">
           <p>{exp.Description}</p>
            </div>
         
           
            
          </div>
        ))}
            
            
            
            
            
            
            
            
            
            
            <div className="uppercase text-2xl pl-4  pt-4 font-semibold ">
            Education </div>    
            
          
            
            
            
            
            
            
                {education.map((edu) => (
          <div key={edu.education_id} className="sub-section">
                      <div className=" flex pl-4  justify-between ">

            <h3>{edu.school_name}</h3>
               <p>{edu.degree_start_date} - {edu.degree_end_date}</p>     </div>
               <div className=" flex pl-4  justify-between ">
            <p>{edu.degree} </p>  <p> {edu.field_of_study}</p>

         
          </div>
          </div>
     
        ))}
            
                {education.map((edu) => (
          <div key={edu.education_id} className="sub-section">
                      <div className=" flex pl-4  justify-between ">

            <h3>{edu.school_name}</h3>
               <p>{edu.degree_start_date} - {edu.degree_end_date}</p>     </div>
               <div className=" flex pl-4  justify-between ">
            <p>{edu.degree} </p>  <p> {edu.field_of_study}</p>

         
          </div>
          </div>
     
        ))}
            
                {education.map((edu) => (
          <div key={edu.education_id} className="sub-section">
                      <div className=" flex pl-4  justify-between ">

            <h3>{edu.school_name}</h3>
               <p>{edu.degree_start_date} - {edu.degree_end_date}</p>     </div>
               <div className=" flex pl-4  justify-between ">
            <p>{edu.degree} </p>  <p> {edu.field_of_study}</p>

         
          </div>
          </div>
     
        ))}
      </section>
    
  
         
      <div className="uppercase text-2xl pl-4  pt-4 font-semibold ">
      Certificates </div>    
            
      <section className="section">
        
        {certificates.map((cert) => (
          <div key={cert.certi_id} className="sub-section">
                  <div className=" flex pl-4  justify-between ">
                 

            <h3>{cert.certi_name}</h3>  <p>{cert.certi_start_date} - {cert.certi_end_date}</p>
    </div> <div className=" flex pl-4  justify-between ">
            <p>{cert.certi_link}</p>
          
      
          </div>
          </div>
        ))}
      </section>
      <div className="uppercase text-2xl pl-4  pt-4 font-semibold ">
            Professional Experience  </div>    
            
            {work_experience.map((exp) => (
          <div key={exp.work_id} className="sub-section">
            <div className=" flex pl-4  justify-between ">
            <h3>{exp.job_title}</h3> <p>{exp.start_date} - {exp.end_date}</p>
            </div>
            <div className=" flex pl-4  justify-between ">
            <h3>{exp.company_name}</h3> <p> {exp.company_location}</p>
            </div>
            <div className=" flex pl-4  justify-between ">
           <p>{exp.Description}</p>
            </div>
         
           
            
          </div>
        ))}
            {work_experience.map((exp) => (
          <div key={exp.work_id} className="sub-section">
            <div className=" flex pl-4  justify-between ">
            <h3>{exp.job_title}</h3> <p>{exp.start_date} - {exp.end_date}</p>
            </div>
            <div className=" flex pl-4  justify-between ">
            <h3>{exp.company_name}</h3> <p> {exp.company_location}</p>
            </div>
            <div className=" flex pl-4  justify-between ">
           <p>{exp.Description}</p>
            </div>
         
           
            
          </div>
        ))}
            {work_experience.map((exp) => (
          <div key={exp.work_id} className="sub-section">
            <div className=" flex pl-4  justify-between ">
            <h3>{exp.job_title}</h3> <p>{exp.start_date} - {exp.end_date}</p>
            </div>
            <div className=" flex pl-4  justify-between ">
            <h3>{exp.company_name}</h3> <p> {exp.company_location}</p>
            </div>
            <div className=" flex pl-4  justify-between ">
           <p>{exp.Description}</p>
            </div>
         
           
            
          </div>
        ))}
               <div className="uppercase text-2xl pl-4  pt-4 font-semibold ">
      Certificates </div>    
            
      <section className="section">
        
        {certificates.map((cert) => (
          <div key={cert.certi_id} className="sub-section">
                  <div className=" flex pl-4  justify-between ">
                 

            <h3>{cert.certi_name}</h3>  <p>{cert.certi_start_date} - {cert.certi_end_date}</p>
    </div> <div className=" flex pl-4  justify-between ">
            <p>{cert.certi_link}</p>
          
      
          </div>
          </div>
        ))}
      </section>
            
              </div>
              
                 </div>
    
   
    </div>
  );
};

export default Resume;
