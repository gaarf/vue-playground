"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __importDefault(require("vue"));
var App_vue_1 = __importDefault(require("./components/App.vue"));
var el = document.createElement('div');
document.body.appendChild(el);
document.addEventListener('DOMContentLoaded', function () {
    new vue_1.default({ el: el, render: function (h) { return h(App_vue_1.default); } });
});
