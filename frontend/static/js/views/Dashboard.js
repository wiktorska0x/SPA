import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
        <h1>Welcome everyone</h1>
        <p>
            A Single Page Application (SPA) is an application that allows you to work inside<br> 
            a browser and does not require reloading the page when a person is using it. <br>
            Many of the apps we use every day are single page applications. Navigation apps, <br>
            many social media platforms and some email providers are SPAs. <br><br>

            SPAs display stunning UX that act like a browser. It does so by maintaining the minimum <br>
            possible code, or “shell” of a page. This code is usually dependent on JavaScript frameworks, <br>
            and when used ensures the high performance of the SPA.<br>
        </p>
        <p>
            <a href="/posts" data-link> View recent posts</a>
        </p> 
        `;
    }
}
