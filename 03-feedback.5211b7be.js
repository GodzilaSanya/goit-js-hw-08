!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in t){var r=t[e];delete t[e];var o={id:e,exports:{}};return a[e]=o,r.call(o.exports,o,o.exports),o.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,a){t[e]=a},e.parcelRequired7c6=r);var o=r("1WSnx"),n=r("fp82k"),i={form:document.querySelector(".feedback-form"),inputEmail:document.querySelector(".feedback-form input"),inputMessage:document.querySelector(".feedback-form textarea")};i.form.addEventListener("input",(0,o.debounce)((function(e){"email"===e.target.name&&(l.email=e.target.value);"message"===e.target.name&&(l.message=e.target.value);(0,n.saveStorage)("feedback-form-state",l)}),500)),i.form.addEventListener("submit",(function(e){var a=i.inputEmail.value,t=i.inputMessage.value;e.preventDefault(),""===a||""===t?alert("Відсутні обов'язкові поля"):(console.log({email:a,message:t}),i.form.reset(),localStorage.removeItem("feedback-form-state"))})),window.addEventListener("load",(function(){if((0,n.loadStorage)("feedback-form-state")){var e=(0,n.loadStorage)("feedback-form-state"),a=e.email,t=e.message;i.inputEmail.value=a,i.inputMessage.value=t}}));var l={email:"",message:""}}();
//# sourceMappingURL=03-feedback.5211b7be.js.map
