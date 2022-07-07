
// CSS
import "./Educaion.css"

const Education = ()=>{
	return(<>
	<section className="education">
     <div className="section_outer">
        <div className="education_top-tags">
          <p className="tags">&lt;section&gt;</p>
        </div>
        <div className="">
            <h2 className="education_content-title">
                <p className="tags">&lt;h2&gt;</p>
                Education & Courses
                <p className="tags">&lt;/h2&gt;</p>
            </h2>
            <div className="title-ext">
              <p className="tags">&lt;p&gt;</p>
              <p className="education_content-details">
                If you like football, BasketBall and Japaniese Anime. Then let's drink a coffee and have a talk.
              </p>
              <p className="tags">&lt;/p&gt;</p>
            </div>
            
          <div className="education_content section-flex">
            <div className="academic">
            <p className="tags">&lt;h2&gt;</p>
            <h3 className="edu-subtitle">Academic Education</h3>
            <p className="tags">&lt;/h2&gt;</p>

            <ul>
              <li class="academic_item-header">ITI Front-End Development.<span class="date"> | August – December 2021.</span></li>
              <dd class="academic_item-discreption">Informational Technology Institute.</dd>
              <li  class="academic_item-header">Bachelor’s Degree of Engineering<span class="date"> | 2014 - 2019.</span></li>
              <dd class="academic_item-discreption">Faculty of Engineering- Alexandria University.</dd>
            </ul>
            </div>
            <div className="certificates">
            <p className="tags">&lt;h2&gt;</p>
              <h3 className="edu-subtitle">Online Courses</h3>
              <p className="tags">&lt;/h2&gt;</p>
            <ul>
              <li class="online_item-header">Database Fundamentals.<span class="date"> | 3 Hours.</span></li>
              <dd class="online_item-discreption">Information Technology Institute Platform (MaharaTech).</dd>
              <li  class="online_item-header">Full Stack Web Development (MERN)  BootCamp<span class="date"> | 55 Hours.</span></li>
              <dd class="online_item-discreption">Full stack MERN course by Angela Yu from Udemy.</dd>
              <li  class="online_item-header">Introduction to Python<span class="date"> | 6 Hours.</span></li>
              <dd class="online_item-discreption">Introduction to python programming language and Django framework.</dd>
            
            </ul>

            </div>
          </div>

        </div>
        <div className="education_bottom-tags">
          <p className="tags">&lt;/div&gt;</p>

          <p className="tags">&lt;/section&gt;</p>
        </div>
      </div>
  </section>
	</>)
}

export default Education;