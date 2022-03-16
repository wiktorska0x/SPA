import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Settings");
    }

    async getHtml() {
        return `
        <h1>Settings</h1>
        <p>
            Manage your privacy and configurations.
        </p>

        <div id="contact">
                <form>
                    <input type="text" placeholder="Name" onfocus="this.placeholder=''" onblur="this.placeholder='Imię'">
                    <input type="text" placeholder="E-mail" onfocus="this.placeholder=''" onblur="this.placeholder='E-mail'">
                    <textarea  placeholder="Message content..." onfocus="this.placeholder=''" onblur="this.placeholder='Treść wiadomości...'"></textarea> 
                    
                   
                    <input type="submit" value="Send">
                </form>
            </div>
        `;
    }
}
