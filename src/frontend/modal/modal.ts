import './modal.css';

export class Modal {
  constructor() {
    console.log('hello world');
  }

  show(it:HTMLElement) {
    it.removeAttribute('hidden');
  }
}

globalThis.gaarfLib = {
  ...globalThis.gaarfLib,
  Modal
};