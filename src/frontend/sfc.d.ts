declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare module '*.png' {}


import { Modal } from './modal/modal'; 

declare namespace gaarfLib {
  const Modal: Modal;
}
