import { api } from "./data";
import "./components/export";
import norris, {Attribute} from "./components/jokes/jokes";

class AppContainer extends HTMLElement {
    norriss: norris[] = [];
    
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        }
        
        async connectedCallback() {

            const data = await api()
            console.log(api)

            data?.forEach((user:any) => {
                const norris = this.ownerDocument.createElement(
                    "my-norris"
                    ) as norris;
                    norris.setAttribute(Attribute.icon_url, user.icon);
                    norris.setAttribute(Attribute.id, String (user.id));
                    norris.setAttribute(Attribute.url, user.url);
                    norris.setAttribute(Attribute.value, user.value);
                    this.norriss.push(norris);
                });

            this.render(this.norriss);
        }
        
        render(norriss:any){
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = ``;
                
                this.norriss.forEach((nori) => {
                    this.shadowRoot?.appendChild(nori);
                });
            }
        }
    }
    
customElements.define("app-container", AppContainer);