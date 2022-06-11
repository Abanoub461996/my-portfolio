import "./ProjectCard.css"
function ProjectCard({project ,id}){
    return(<>
        <div class="card_container" id={id}>	
              
              <div class="card-details">
                <h1>{project.title}</h1>
                <span class="hint-star star">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                </span>
		        	  <p class="information">{project.descreption}</p>
                <div class="card_control">
                  
                <button class="card_btn">
                  <span class="web_repo">Git</span>
                  <span class="web_visit">Visit </span>
                </button>
                  
                </div>
              </div>
              <div class="card-image">
                <img src="https://images.unsplash.com/photo-1606830733744-0ad778449672?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNocmlzdG1hcyUyMHRyZWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                <div class="info">
                  <h2>Description</h2>
                  <ul>
                    <li><strong>Height : </strong>{project.project_info.date} </li>
                    <li><strong>Shade : </strong>Olive green</li>
                    <li><strong>Decoration: </strong>balls and bells</li>
                    <li><strong>Material: </strong>Eco-Friendly</li>
                    
                  </ul>
                </div>
              </div>

            </div>
    </>)
}

export default ProjectCard;