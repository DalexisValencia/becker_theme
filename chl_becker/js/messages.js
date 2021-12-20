/**
 * @file
 * Global utilities.
 *
 */

Drupal.tailwindcssMessages = Drupal.tailwindcssMessages || {};
window.dataLayer = window.dataLayer || [];

/**
 * Push a dataLayer
 * @param category
 * @param action
 * @param label
 * @param callback
 */
function pushDatalayer(category, action, label, callback) {
  dataLayer.push({
    'event': 'trackEvent',
    'eventCategory': category,
    'eventAction': action,
    'eventLabel': label,
    'eventTimeout': 2000
  });
  if (callback) {
    setTimeout(function () {
      callback();
    }, 300);
  }
}

(function ($, Drupal) {
  "use strict";


  /**
   * Get URL param by name
   * @param name
   * @returns {string|number|null}
   */
  Drupal.tailwindcssMessages.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
      return null;
    }
    else {
      return results[1] || 0;
    }
  };

  /**
   * Process dataLayers
   */
  Drupal.tailwindcssMessages.processDataLayers = function () {
    if (drupalSettings.ABDataLayers !== undefined && drupalSettings.ABDataLayers) {
      drupalSettings.ABDataLayers.forEach(function(item) {
        dataLayer.push(item);
      });
      delete drupalSettings.ABDataLayers;
    }
  };

  Drupal.behaviors.chlBeckerMessages = {
    attach: function () {
      Drupal.tailwindcssMessages.processDataLayers();
    },
  };

  Drupal.tailwindcssMessages.showGeneralAlert = function (body, type) {
    if (body) {
      if (type === undefined) {
        type = "general";
      }
      if (type === "general") {
        const $modal = $("#modal-general");
        if ($modal.length > 0) {
          $("#modal-general-title", $modal).html(body);
          $modal.removeClass("hidden");
          
        }
      }
    }
  };


  Drupal.behaviors.chlBeckerDatalayers = {
    attach: function () {
      const $body = $("body");
      $body.once("chl.becker.messages").each(function () {
        const general_message = Drupal.tailwindcssMessages.urlParam("general_message");
        if (general_message) {
          Drupal.tailwindcssMessages.showGeneralAlert(decodeURIComponent(general_message.trim()), "general");
        }
      });

      $body.once("chl.becker.datalayers").each(function() {
        $("[data-element=cta-embajadores-banner]").click(function(e) {
          pushDatalayer("Becker", "Clic Quiero Participar", "");
        });
      });
    }
  };

})(jQuery, Drupal);
