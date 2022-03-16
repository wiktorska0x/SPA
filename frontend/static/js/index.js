import Dashboard from "./views/Dashboard.js";
import Posts from "./views/Posts.js";
import Settings from "./views/Settings.js";


//uporządkowanie danych - zmienia ciąg ścieżki na regularne wyrażenie
//klucze są znajdowane w ścieżce
const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

//async czyli funkcja asynchroniczna umożliwia nam reagowanie na nią różnymi metodami
const router = async () => {
    const routes = [
        { path: "/", view: Dashboard },
        { path: "/posts", view: Posts},
        { path: "/settings", view: Settings},

    ];
        // testowanie
        const potentialMatches = routes.map(route => {
            return {
                route: route,
                result: location.pathname.match(pathToRegex(route.path))
            };
        });
    
        let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);
    
        if (!match) {
            match = {
                route: routes[0],
                result: [location.pathname]
            };
        }

    //koniec testu


        const view = new match.route.view(getParams(match));
        //funkcja zwraca pierwszy element, który pasuje do selektora
        //await jest mtodą funkcji async i czeka on na zakończenie innych zadań
        document.querySelector("#app").innerHTML = await view.getHtml();
    };
    
    //popstate to zdarzenie metody pushSatate()
    //zwalnia on interfejs gdy użytkownik nawiguje historią sesji 
    window.addEventListener("popstate", router);
    
    //odwolanie do obiektu przez event
    document.addEventListener("DOMContentLoaded", () => {
        document.body.addEventListener("click", e => {
            if (e.target.matches("[data-link]")) {
                e.preventDefault();
                navigateTo(e.target.href);
            }
        });
    
        router();
    });