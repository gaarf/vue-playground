import './modal.css';
import createFocusTrap from 'focus-trap';

export class Modal {
  static CSSCLASS = (s: string) => `gaarflib modal-${s}`;
  private bodyEl = document.body;

  // references to parts of our modal
  private containerEl: HTMLElement;
  private contentEl: HTMLElement;

  // the value of body 'overflow' before we change it
  private oldOverflow: string;

  // the parent of the element passed to "show"
  private parentEl: HTMLElement;

  // it's a trap!
  private focusTrap: ReturnType<typeof createFocusTrap>;


  get visible() {
    return !this.containerEl.hasAttribute('hidden');
  }



  constructor(title: string) {
    const { CSSCLASS } = Modal;

    // create a container
    const ctnr = document.createElement('div');
    ctnr.setAttribute('hidden', 'true');
    ctnr.setAttribute('aria-hidden', 'true');
    ctnr.className = CSSCLASS('container');

    const cc = CSSCLASS('content');
    const cd = CSSCLASS('dialog');

    // poor man's unique id for the title ...there could be more than one
    const titleId = `t-${Date.now()}-${Math.floor(Math.random() * 1e3)}`;

    ctnr.innerHTML = `
      <div class="${CSSCLASS('bg')}"></div>
      <div class="${cd}" aria-role="dialog" aria-labelledby="${titleId}">
        <div class="${CSSCLASS('main')}">
          <h3 id="${titleId}">${title}</h3>
          <div class="${cc}"></div>
          <div class="${CSSCLASS('footer')}">
            <button>Close</button>
          </div>
        </div>
      </div>
`;

    this.bodyEl.appendChild(ctnr);
    this.containerEl = ctnr;
    this.contentEl = ctnr.getElementsByClassName(cc)[0] as HTMLElement;

    const dialog = ctnr.getElementsByClassName(cd)[0];
    const button = ctnr.getElementsByTagName('button')[0];

    // click the button, or the dialog background = dismiss modal
    ctnr.addEventListener('click', (event) => {
      if ([button, dialog].indexOf(event.target as HTMLElement) >= 0) {
        this.hide();
      }
    });

    // admiral ackbar handles focus and the escape key
    this.focusTrap = createFocusTrap(ctnr, {
      onDeactivate: () => this.hide()
    });
  }





  public destroy() {
    this.hide();
    this.bodyEl.removeChild(this.containerEl);
  }




  public show(content: HTMLElement, styles: Partial<CSSStyleDeclaration> = {}) {
    if (this.visible) {
      return;
    }

    // prevent scroll
    this.oldOverflow = this.bodyEl.style.overflow;
    this.bodyEl.style.overflow = 'hidden';

    const { contentEl, containerEl } = this;

    // apply styles to the content
    for (const key in styles) {
      contentEl.style[key] = styles[key];
    }

    // drop the content into the modal
    this.parentEl = content.parentElement;
    contentEl.appendChild(content);

    // show the container
    containerEl.removeAttribute('hidden');
    containerEl.removeAttribute('aria-hidden');

    this.focusTrap.activate({
      onActivate() {
        // add a CSS class for animation
        containerEl.classList.add('in');
        contentEl.scrollTop = 0;
      }
    });
  }





  public hide() {
    if (!this.visible) {
      return;
    }

    this.focusTrap.deactivate({ onDeactivate: undefined });

    const { containerEl } = this;

    const cleanup = () => {
      // hide the container
      containerEl.setAttribute('hidden', 'true');
      containerEl.setAttribute('aria-hidden', 'true');

      // restore scroll
      this.bodyEl.style.overflow = this.oldOverflow;

      // put the content back where it was
      const c = this.contentEl.firstElementChild;
      c && this.parentEl.appendChild(c);

      // remove the eventlistener
      containerEl.removeEventListener('transitionend', cleanup);
    };

    // check browser support for transitionend event
    if (typeof window['ontransitionend'] !== 'undefined') {
      containerEl.addEventListener('transitionend', cleanup);
    }
    else {
      cleanup();
    }

    // remove a CSS class, triggering the animation
    containerEl.classList.remove('in');
  }
}

globalThis.gaarfLib = {
  ...globalThis.gaarfLib,
  Modal,
};
