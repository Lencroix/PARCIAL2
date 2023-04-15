import styles from "./jokes.css";


export enum Attribute {
    "icon_url" = "icon_url",
    "id" = "id",
    "url" = "url",
    "value" = "value"
}

class norris extends HTMLElement {
    icon_url?: string;
    uid?: number;
    url?: string;
    value?: string;

    static get observedAttributes() {
        const attrs: Record<Attribute, null> = {
            icon_url: null,
            id: null,
            url: null,
            value: null,
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
                <p>id:${this.id}</p>
                <p>url:${this.url}<p>
                <p>value:${this.value}<p>
                </section>
                `;
            }
        }
    }

customElements.define("my-norris", norris);
export default norris;