export class Center extends HTMLElement{constructor(){super(),this.render=()=>{if(this.i=`Center-${[this.max,this.andText,this.gutters,this.intrinsic].join("")}`,this.dataset.i=this.i,!document.getElementById(this.i)){let e=document.createElement("style");e.id=this.i,e.innerHTML=`
          [data-i="${this.i}"] {
            max-width: ${this.max};
            ${this.gutters?`
            padding-inline-start: ${this.gutters};
            padding-inline-end: ${this.gutters};`:""}
            ${this.andText?`text-align: center;`:""}
            ${this.intrinsic?`
            display: flex;
            flex-direction: column;
            align-items: center;`:""}
          }
        `.replace(/\s\s+/g," ").trim(),document.head.appendChild(e)}}}get max(){return this.getAttribute("max")||"var(--measure)"}set max(e){return this.setAttribute("max",e)}get andText(){return this.hasAttribute("andText")}set andText(e){return e?this.setAttribute("andText",""):this.removeAttribute("andText")}get gutters(){return this.getAttribute("gutters")||null}set gutters(e){return this.setAttribute("gutters",e)}get intrinsic(){return this.hasAttribute("intrinsic")}set intrinsic(e){return e?this.setAttribute("intrinsic",""):this.removeAttribute("intrinsic")}static get observedAttributes(){return["max","andText","gutters","intrinsic"]}connectedCallback(){this.render()}attributeChangedCallback(){this.render()}}"customElements"in window&&customElements.define("center-l",Center);export class Cluster extends HTMLElement{constructor(){super(),this.render=()=>{if(this.i=`Cluster-${[this.justify,this.align,this.space].join("")}`,this.dataset.i=this.i,!document.getElementById(this.i)){let e=document.createElement("style");e.id=this.i,e.innerHTML=`
          [data-i="${this.i}"] {
            justify-content: ${this.justify};
            align-items: ${this.align};
            gap: ${this.space};
          }
        `.replace(/\s\s+/g," ").trim(),document.head.appendChild(e)}}}get justify(){return this.getAttribute("justify")||"flex-start"}set justify(e){return this.setAttribute("justify",e)}get align(){return this.getAttribute("align")||"flex-start"}set align(e){return this.setAttribute("align",e)}get space(){return this.getAttribute("space")||"var(--s1)"}set space(e){return this.setAttribute("space",e)}static get observedAttributes(){return["justify","align","space"]}connectedCallback(){this.render()}attributeChangedCallback(){this.render()}}"customElements"in window&&customElements.define("cluster-l",Cluster);export class Stack extends HTMLElement{constructor(){super(),this.render=()=>{if(this.i=`Stack-${[this.space,this.recursive,this.splitAfter].join("")}`,this.dataset.i=this.i,!document.getElementById(this.i)){let e=document.createElement("style");e.id=this.i,e.innerHTML=`
          [data-i="${this.i}"]${this.recursive?"":" >"} * + * {
            margin-block-start: ${this.space};
          }
      
          ${this.splitAfter?`
            [data-i="${this.i}"] {
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
            }

            [data-i="${this.i}"]:only-child {
              block-size: 100%;
            }
      
            [data-i="${this.i}"] > :nth-child(${this.splitAfter}) {
              margin-block-end: auto;
            }`:""}
        `.replace(/\s\s+/g," ").trim(),document.head.appendChild(e)}}}get space(){return this.getAttribute("space")||"var(--s1)"}set space(e){return this.setAttribute("space",e)}get recursive(){return this.hasAttribute("recursive")}set recursive(e){return this.setAttribute(e?"recursive":"")}get splitAfter(){return this.getAttribute("splitAfter")||null}set splitAfter(e){return this.setAttribute("splitAfter",e)}static get observedAttributes(){return["space","recursive","splitAfter"]}connectedCallback(){this.render()}attributeChangedCallback(){this.render()}}"customElements"in window&&customElements.define("stack-l",Stack)