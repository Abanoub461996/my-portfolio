import "./ProjectCard.css"
function ProjectCard(){
    return(<>
        <div id="card_container">	
              
              <div class="card-details">
                <h1>Website</h1>
                <span class="hint-star star">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                </span>
		        	  <p class="information">" Let's spread the joy , here is Christmas , the most awaited day of the year.Christmas Tree is what one need the most. Here is the correct tree which will enhance your Christmas.</p>
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
                    <li><strong>Height : </strong>5 Ft </li>
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