import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('t-mode-toggle')
export class TModeToggle extends LitElement {

  @property({ type: Boolean }) darkMode = false;

  constructor() {
    super();
    const storedMode = localStorage.getItem('darkMode');
    if (storedMode !== null) {
      this.darkMode = storedMode === 'true';
    } else {
      this.darkMode = document.body.classList.contains('dark');
    }
    this._applyMode();
  }

  toggleMode() {
    this.darkMode = !this.darkMode;
    localStorage.setItem('darkMode', this.darkMode.toString());
    this._applyMode();
  }

  _applyMode() {
    if (this.darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }

  render() {
    return html`
      <temporary-list-item
        @click="${this.toggleMode}"
        interactive
        type="button"
      >
        ${this.darkMode ? 'Dark Mode' : 'Light Mode'}
        <md-icon slot="end" class="material-symbols-filled-light">
          ${this.darkMode ? 'dark_mode' : 'light_mode'}
        </md-icon>
      </temporary-list-item>
    `;
  }
}
