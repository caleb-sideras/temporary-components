import { css, html } from "lit"
import { customElement, property } from "lit/decorators.js"
import { HTMXElement } from "../htmx/t-htmx";

@customElement('t-link')
export class TLink extends HTMXElement {

	static styles = css`
		:host([disabled]) {
	    pointer-events: none;
	    filter: grayscale(100%);
	  }
		.link_container{
	    text-decoration: none;
	    text-align: left;
	    padding: 16px;
			cursor: pointer; 
		}
		.link_container:hover {
			background: var(--md-sys-color-secondary-hover) !important;
    }		
		a{
	    text-decoration: none;
		}
		h2 {
			margin-bottom: 32px;
	    margin-top: 0px;
			font-variation-settings: 'wght' 100, 'wdth' 100, 'opsz' 8; 			font-size: 2.5rem;
			font-weight: normal;	
			color: var(--md-sys-color-on-primary) !important;
		}
		p {
			font-size: 0.95rem;
			font-weight: 300;
			margin-bottom: 40px;
			margin-top: 0px;
			color: var(--md-sys-color-on-primary-80) !important;
		}
		img {
			width: 100%;
			border-color: transparent;
			border-style: solid !important;
			border-width: 2px !important;
		}		
	`
	@property({ type: String, attribute: 'src' }) imgSrc = '';

	@property({ type: String, attribute: 'alt' }) imgAlt = '';

	@property({ type: String, attribute: 'title' }) title = '';

	@property({ type: String, attribute: 'description' }) description = '';

	@property({ type: Boolean, reflect: true }) disabled = false;

	render() {
		return this.renderAnchor(html`
			<div class="link_container">
				<h2>
					${this.title}
				</h2>
				<p>
					${this.description}
				</p>
				<img
					loading="lazy"
					src="${this.imgSrc}"
					alt="${this.imgAlt}"
				/>     
			</div>
	   `)
	}
}
