import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('ui-avatar')
export class UiAvatar extends LitElement {
  @property({ type: String })
  image: string;

  @property({ type: String })
  alt: string;

  render() {
    return html`
      <div class="my-avatar">
        <img src="${this.image}" class="my-avatar__image" alt="${this.alt}" />
      </div>
    `;
  }

  static styles = css`
    .my-avatar {
      width: 210px;
      height: 210px;
      background-color: var(--my-avatar-bg-color);
      border-radius: 9999px;
      padding: 4px;
    }
    .my-avatar__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `;
}
