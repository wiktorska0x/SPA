import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Posts");
    }

    async getHtml() {
        return `
        <h1>Posts</h1>
        <div class="postcard">
        
                <div class="photo"> 
                    <img src="static/img/hiszpania.jpg" alt="Hiszpania" height="380px" width="250px" >
                </div>
                <p>Granada, Spain</p>
                
            </div>
            
            <div class="postcard">
            
                <div class="photo"> 
                    <img src="static/img/turcja.jpg" alt="Turcja" height="380px" width="250px">
                </div>
                <p>Nevşehir, Turcja</p>
                
            </div>

            <div class="postcard">
				
                <div class="photo"> 
                    <img src="static/img/wlochy.jpg" alt="Włochy" height="380px" width="250px">
                </div>
                <p>Capri, Italy</p>
                
            </div>
				
         </div>
        
        `;
    }
}
