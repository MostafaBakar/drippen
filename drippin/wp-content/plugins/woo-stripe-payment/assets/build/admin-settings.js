(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.jQuery;var n=e.n(t);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,a(o.key),o)}}function a(e){var t=function(e,t){if("object"!=o(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,"string");if("object"!=o(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==o(t)?t:t+""}var r=function(){return e=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.params=t,this.prefix="#"+n()("#wc_stripe_prefix").val()},(t=[{key:"init",value:function(){n()('[name^="woocommerce_stripe"]').on("change",this.display_children.bind(this)),n()("select.stripe-accepted-cards").on("select2:select",this.reorder_multiselect),n()(".api-register-domain").on("click",this.register_domain.bind(this)),n()(".wc-stripe-create-webhook").on("click",this.manage_webhook.bind(this)),n()(".wc-stripe-connection-test").on("click",this.do_connection_test.bind(this)),n()(".stripe-delete-connection").on("click",this.do_delete_connection.bind(this)),n()(document.body).on("change",".payment-method-config-options",this.fetchPaymentMethodConfigSettings.bind(this)),n()(document.body).on("click",".add-new-payment-config",this.renderPaymentConfigModal.bind(this)),n()(document.body).on("click","#create-payment-config",this.createPaymentMethodConfig.bind(this)),n()(document.body).on("click",".refresh-payment-config",this.refreshPaymentConfig.bind(this)),"undefined"!=typeof wc_stripe_admin_notices&&this.display_notices(),this.display_children(),window.location.search.match(/_stripe_connect_nonce/)&&history.pushState({},"",window.location.pathname+"?page=wc-settings&tab=checkout&section=stripe_api"),n()(document.body).on("submit","#mainform",this.validateForm.bind(this))}},{key:"display_children",value:function(e){n()("[data-show-if]").each(function(e,t){var o=n()(t),i=o.data("show-if"),a=[];n().each(i,function(e,t){var i=n()(this.prefix+e);-1==a.indexOf(o.attr("id"))?i.is(":checkbox")?i.is(":checked")==t?o.closest("tr").show():(o.closest("tr").hide(),a.push(o.attr("id"))):i.val()==t?o.closest("tr").show():(o.closest("tr").hide(),a.push(o.attr("id"))):(o.closest("tr").hide(),a.push(o.attr("id")))}.bind(this))}.bind(this))}},{key:"reorder_multiselect",value:function(e){var t=e.params.data.element,o=n()(t);o.detach(),n()(this).append(o),n()(this).trigger("change")}},{key:"register_domain",value:function(e){var t=this;e.preventDefault(),this.block(),n().ajax({url:this.params.routes.apple_domain,dataType:"json",method:"POST",data:{_wpnonce:this.params.rest_nonce,hostname:window.location.hostname}}).done((function(e){t.unblock(),e.code,window.alert(e.message)})).fail((function(e,n,o){t.unblock(),window.alert(o)}))}},{key:"manage_webhook",value:function(e){e.preventDefault(),n()(e.currentTarget).is(".wc-stripe-delete-webhook")?this.delete_webhook():this.create_webhook()}},{key:"create_webhook",value:function(){var e=this;this.block();var t=n()("#woocommerce_stripe_api_mode").val();n().ajax({url:this.params.routes.create_webhook,dataType:"json",method:"POST",data:{_wpnonce:this.params.rest_nonce,environment:t}}).done((function(o){e.unblock(),o.code?window.alert(o.message):(n()("#woocommerce_stripe_api_webhook_secret_"+t).val(o.secret),window.alert(o.message),window.location.reload())})).fail((function(t,n,o){e.unblock(),window.alert(o)}))}},{key:"delete_webhook",value:function(){this.block();var e=n()("#woocommerce_stripe_api_mode").val();n().ajax({url:this.params.routes.delete_webhook,dataType:"json",method:"POST",data:{_wpnonce:this.params.rest_nonce,mode:e}}).done(function(t){this.unblock(),t.code?window.alert(t.message):(n()("#woocommerce_stripe_api_webhook_secret_"+e).val(""),window.location.reload())}.bind(this)).fail(function(e,t,n){this.unblock(),window.alert(n)}.bind(this))}},{key:"do_connection_test",value:function(e){var t=this;e.preventDefault(),this.block();var o,i=n()("#woocommerce_stripe_api_mode").val();n().ajax({url:this.params.routes.connection_test,dataType:"json",method:"POST",data:(o={_wpnonce:t.params.rest_nonce,mode:i},"test"===i&&(o.secret_key=n()("#woocommerce_stripe_api_secret_key_test").val(),o.publishable_key=n()("#woocommerce_stripe_api_publishable_key_test").val()),o)}).done((function(e){t.unblock(),e.code,window.alert(e.message)})).fail((function(e,n,o){t.unblock(),window.alert(o)}))}},{key:"display_notices",value:function(){n().each(wc_stripe_admin_notices,function(e,t){n()(".woo-nav-tab-wrapper").after(t)}.bind(this))}},{key:"block",value:function(){n()(".wc-stripe-settings-container").block({message:null,overlayCSS:{background:"#fff",opacity:.6}})}},{key:"unblock",value:function(){n()(".wc-stripe-settings-container").unblock()}},{key:"do_delete_connection",value:function(e){e.preventDefault(),confirm(this.params.messages.delete_connection)&&(this.block(),n().ajax({method:"POST",url:this.params.routes.delete_connection,dataType:"json",data:{_wpnonce:this.params.rest_nonce}}).done(function(e){this.unblock(),e.code?window.alert(e.message):window.location.reload()}.bind(this)).fail(function(){this.unblock()}.bind(this)))}},{key:"createPaymentMethodConfig",value:function(e){e.preventDefault();var t=n()(e.currentTarget),o=t.text();t.text(this.params.messages.create).prop("disabled",!0),n().ajax({method:"POST",url:this.params.routes.create_payment_method_config,dataType:"json",data:{_wpnonce:this.params.rest_nonce,name:n()("#payment_config_name").val()}}).done((function(e){t.text(o).prop("disabled",!1),e.code?window.alert(e.message):(n()(".wc-stripe-settings-container").replaceWith(e.html),n()(document.body).trigger("wc-enhanced-select-init"),n()(".modal-close").click())})).fail((function(){t.text(o).prop("disabled",!1)}))}},{key:"fetchPaymentMethodConfigSettings",value:function(e){var t=this;this.block();var o=n()("#woocommerce_stripe_upm_enabled").is(":checked");n().ajax({method:"POST",url:this.params.routes.fetch_payment_method_config,dataType:"json",data:{_wpnonce:this.params.rest_nonce,payment_config:n()(e.currentTarget).val()}}).done((function(e){t.unblock(),e.code?window.alert(e.message):(n()(".wc-stripe-settings-container").replaceWith(e.html),n()("#woocommerce_stripe_upm_enabled").prop("checked",o),n()(document.body).trigger("wc-enhanced-select-init"),n()(".modal-close").click())})).fail((function(){t.unblock()}))}},{key:"renderPaymentConfigModal",value:function(e){e.preventDefault(),n()(e.currentTarget).WCBackboneModal({template:"wc-stripe-modal-payment-config",variable:""})}},{key:"validateForm",value:function(e){if(n()(".wc-stripe-settings-container").hasClass("stripe_upm")&&""===n()(".payment-method-config-options").val())return window.alert(this.params.messages.upm_validation),!1}},{key:"refreshPaymentConfig",value:function(e){e.preventDefault();var t=n()(e.currentTarget);t.prop("disabled",!0).find("span").addClass("processing"),n().ajax({method:"POST",url:this.params.routes.refresh_payment_method_config,dataType:"json",data:{_wpnonce:this.params.rest_nonce,payment_config:n()(e.currentTarget).val()}}).done((function(e){t.prop("disabled",!1).find("span").removeClass("processing"),e.code?window.alert(e.message):(n()(".wc-stripe-settings-container").replaceWith(e.html),n()(document.body).trigger("wc-enhanced-select-init"))})).fail((function(){t.prop("disabled",!1).find("span").removeClass("processing")}))}}])&&i(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();n()((function(){new r(wc_stripe_setting_params).init()}))})();
//# sourceMappingURL=admin-settings.js.map