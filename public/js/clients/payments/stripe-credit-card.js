/*! For license information please see stripe-credit-card.js.LICENSE.txt */
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=11)}({11:function(e,t,n){e.exports=n("uALE")},uALE:function(e,t){var n,r,o;function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}new(function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.key=t,this.secret=n,this.onlyAuthorization=r}var t,n,r;return t=e,(n=[{key:"setupStripe",value:function(){return this.stripe=Stripe(this.key),this.elements=this.stripe.elements(),this}},{key:"createElement",value:function(){return this.cardElement=this.elements.create("card"),this}},{key:"mountCardElement",value:function(){return this.cardElement.mount("#card-element"),this}},{key:"completePaymentUsingToken",value:function(){var e=this,t=document.querySelector("input[name=token]").value,n=document.getElementById("pay-now");this.payNowButton=n,this.payNowButton.disabled=!0,this.payNowButton.querySelector("svg").classList.remove("hidden"),this.payNowButton.querySelector("span").classList.add("hidden"),this.stripe.handleCardPayment(this.secret,{payment_method:t}).then((function(t){return t.error?e.handleFailure(t.error.message):e.handleSuccess(t)}))}},{key:"completePaymentWithoutToken",value:function(){var e=this,t=document.getElementById("pay-now");this.payNowButton=t,this.payNowButton.disabled=!0,this.payNowButton.querySelector("svg").classList.remove("hidden"),this.payNowButton.querySelector("span").classList.add("hidden");var n=document.getElementById("cardholder-name");this.stripe.handleCardPayment(this.secret,this.cardElement,{payment_method_data:{billing_details:{name:n.value}}}).then((function(t){return t.error?e.handleFailure(t.error.message):e.handleSuccess(t)}))}},{key:"handleSuccess",value:function(e){document.querySelector('input[name="gateway_response"]').value=JSON.stringify(e.paymentIntent);var t=document.querySelector('input[name="token-billing-checkbox"]:checked');t&&(document.querySelector('input[name="store_card"]').value=t.value),document.getElementById("server-response").submit()}},{key:"handleFailure",value:function(e){var t=document.getElementById("errors");t.textContent="",t.textContent=e,t.hidden=!1,this.payNowButton.disabled=!1,this.payNowButton.querySelector("svg").classList.add("hidden"),this.payNowButton.querySelector("span").classList.remove("hidden")}},{key:"handleAuthorization",value:function(){var e=this,t=document.getElementById("cardholder-name"),n=document.getElementById("authorize-card");this.payNowButton=n,this.payNowButton.disabled=!0,this.payNowButton.querySelector("svg").classList.remove("hidden"),this.payNowButton.querySelector("span").classList.add("hidden"),this.stripe.handleCardSetup(this.secret,this.cardElement,{payment_method_data:{billing_details:{name:t.value}}}).then((function(t){return t.error?e.handleFailure(t):e.handleSuccessfulAuthorization(t)}))}},{key:"handleSuccessfulAuthorization",value:function(e){document.getElementById("gateway_response").value=JSON.stringify(e.setupIntent),document.getElementById("server_response").submit()}},{key:"handle",value:function(){var e=this;this.setupStripe(),this.onlyAuthorization?(this.createElement().mountCardElement(),document.getElementById("authorize-card").addEventListener("click",(function(){return e.handleAuthorization()}))):(Array.from(document.getElementsByClassName("toggle-payment-with-token")).forEach((function(e){return e.addEventListener("click",(function(e){document.getElementById("stripe--payment-container").classList.add("hidden"),document.getElementById("save-card--container").style.display="none",document.querySelector("input[name=token]").value=e.target.dataset.token}))})),document.getElementById("toggle-payment-with-credit-card").addEventListener("click",(function(e){document.getElementById("stripe--payment-container").classList.remove("hidden"),document.getElementById("save-card--container").style.display="grid",document.querySelector("input[name=token]").value=""})),this.createElement().mountCardElement(),document.getElementById("pay-now").addEventListener("click",(function(){return document.querySelector("input[name=token]").value?e.completePaymentUsingToken():e.completePaymentWithoutToken()})))}}])&&a(t.prototype,n),r&&a(t,r),e}())(null!==(n=document.querySelector('meta[name="stripe-publishable-key"]').content)&&void 0!==n?n:"",null!==(r=document.querySelector('meta[name="stripe-secret"]').content)&&void 0!==r?r:"",null!==(o=document.querySelector('meta[name="only-authorization"]').content)&&void 0!==o?o:"").handle()}});