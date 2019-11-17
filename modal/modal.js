"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./modal.css");
var focus_trap_1 = __importDefault(require("focus-trap"));
var Modal = (function () {
    function Modal(title) {
        var _this = this;
        this.bodyEl = document.body;
        var CSSCLASS = Modal.CSSCLASS;
        var ctnr = document.createElement('div');
        ctnr.setAttribute('hidden', 'true');
        ctnr.setAttribute('aria-hidden', 'true');
        ctnr.className = CSSCLASS('container');
        var cc = CSSCLASS('content');
        var cd = CSSCLASS('dialog');
        var titleId = "t-" + Date.now() + "-" + Math.floor(Math.random() * 1e3);
        ctnr.innerHTML = "\n      <div class=\"" + CSSCLASS('bg') + "\"></div>\n      <div class=\"" + cd + "\" aria-role=\"dialog\" aria-labelledby=\"" + titleId + "\">\n        <div class=\"" + CSSCLASS('main') + "\">\n          <h3 id=\"" + titleId + "\">" + title + "</h3>\n          <div class=\"" + cc + "\"></div>\n          <div class=\"" + CSSCLASS('footer') + "\">\n            <button>Close</button>\n          </div>\n        </div>\n      </div>";
        this.bodyEl.appendChild(ctnr);
        this.containerEl = ctnr;
        this.contentEl = ctnr.getElementsByClassName(cc)[0];
        var dialog = ctnr.getElementsByClassName(cd)[0];
        var button = ctnr.getElementsByTagName('button')[0];
        ctnr.addEventListener('click', function (event) {
            if ([button, dialog].indexOf(event.target) >= 0) {
                _this.hide();
            }
        });
        this.focusTrap = focus_trap_1.default(ctnr, {
            onDeactivate: function () { return _this.hide(); }
        });
    }
    Object.defineProperty(Modal.prototype, "visible", {
        get: function () {
            return !this.containerEl.hasAttribute('hidden');
        },
        enumerable: true,
        configurable: true
    });
    Modal.prototype.destroy = function () {
        this.hide();
        this.bodyEl.removeChild(this.containerEl);
    };
    Modal.prototype.show = function (content, styles) {
        if (styles === void 0) { styles = {}; }
        if (this.visible) {
            return;
        }
        this.oldOverflow = this.bodyEl.style.overflow;
        this.bodyEl.style.overflow = 'hidden';
        var _a = this, contentEl = _a.contentEl, containerEl = _a.containerEl;
        for (var key in styles) {
            contentEl.style[key] = styles[key];
        }
        this.parentEl = content.parentElement;
        contentEl.appendChild(content);
        containerEl.removeAttribute('hidden');
        containerEl.removeAttribute('aria-hidden');
        this.focusTrap.activate({
            onActivate: function () {
                containerEl.classList.add('in');
                contentEl.scrollTop = 0;
            }
        });
    };
    Modal.prototype.hide = function () {
        var _this = this;
        if (!this.visible) {
            return;
        }
        this.focusTrap.deactivate({ onDeactivate: undefined });
        var containerEl = this.containerEl;
        var cleanup = function () {
            containerEl.setAttribute('hidden', 'true');
            containerEl.setAttribute('aria-hidden', 'true');
            _this.bodyEl.style.overflow = _this.oldOverflow;
            var c = _this.contentEl.firstElementChild;
            c && _this.parentEl.appendChild(c);
            containerEl.removeEventListener('transitionend', cleanup);
        };
        if (typeof window['ontransitionend'] !== 'undefined') {
            containerEl.addEventListener('transitionend', cleanup);
        }
        else {
            cleanup();
        }
        containerEl.classList.remove('in');
    };
    Modal.CSSCLASS = function (s) { return "gaarf modal-" + s; };
    return Modal;
}());
exports.Modal = Modal;
globalThis.gaarfLib = __assign(__assign({}, globalThis.gaarfLib), { Modal: Modal });
