import styles from "./categories.css";


export enum Attribute {
    "animal" = "animal",
    "career" = "career",
    "celebrity" = "celebrity",
    "dev" = "dev",
    "explicit" = "explicit",
    "fashion" = "fashion",
    "food" = "food"
    "history" = "history",
    "money" = "money",
    "movie" = "movie",
    "music" = "music",
    "political" = "political",
    "religion" = "religion",
    "science" = "science",
    "sport" = "sport",
    "travel" = "travel",


}

class buttom extends HTMLElement {
    animal?: string;
    career?: string;
    celebrity?: string;
    dev?: string;
    explicit?: string;
    fashion?: string;
    food?: string;
    history?: string;
    money?: string;
    movie?: string;
    music?: string;
    political?: string;
    religion?: string;
    science?: string;
    sport?: string;
    travel?: string;

    static get observedAttributes() {
        const attrs: Record<Attribute, null> = {
            animal: null,
            career: null,
            celebrity: null,
            dev: null, 
            explicit: null, 
            fashion: null, 
            food: null, 
            history: null, 
            money: null,
            movie: null,
            music: null,
            political: null, 
            religion: null,
            science: null, 
            sport: null, 
            travel: null,
        };
        return Object.keys(attrs);
    }

    constructor (){
        super();
        this.attachShadow({mode: "open"});

    }

    connectedCallback() {
        this.render();
    }

    
    attributeChangedCallback(
        
        propicon_url: Attribute,
        _: string | undefined,
        newValue: string | undefined
        ) {
            switch (propicon_url) {
                case Attribute.id:
                    this.uid = newValue ? Number(newValue) : undefined;
                    break;

                default:
                this[propicon_url] = newValue;
                break;}

            this.render();
        }

        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = ``

                const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                this.shadowRoot?.appendChild(css);

                this.shadowRoot.innerHTML += `
                <section>
                <img src="icon_url: ${this.icon_url}">
                <p>uid:${this.id}</p>
                <p>url:${this.url}<p>
                <p>value:${this.value}<p>
                </section>
                `;
            }
        }
    }

customElements.define("my-buttom", buttom);
export default buttom;