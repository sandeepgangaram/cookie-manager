/**
 *
 *
 * cookie-manager.js
 * simple, fast and lightweight cookies management library.
 * 27-08-2023 - version 1.0
 * {REPO URL}
 *
 * Copyright 2023 Sandeep Kumar Gangaram <gangaramsandeep@gmail.com>
 * Release under MIT license
 * {LICENSE URL}
 *
 *
 */

(function (window, document) {
  "use strict";

  var CookieManager = {
    /**
     *
     * Create and Set Cookie
     * @param {String} name cookie name
     * @param {String} value cookie value
     * @param {Number} [expires] cookie expiration in days
     * @param {String} [domain] cookie domain
     * @param {String} [path] cookie path
     * @param {Boolean} [secure] cookies ssl flag
     */
    set: function (name, value, expires, domain, path, secure) {
      var cookieStr = name + "=" + value;

      if (expires) {
        var now = new Date();
        now.setTime(now.getTime() + expires * 24 * 60 * 60 * 1000);
        cookieStr += ";" + "expires=" + now.toUTCString();
      }
      if (domain) {
        cookieStr += ";" + "domain=" + domain;
      }
      if (path) {
        cookieStr += ";" + "path=" + path;
      }
      if (secure) {
        cookieStr += ";" + "secure";
      }

      document.cookie = cookieStr;
    },

    /**
     *
     * Get Cookies by Name
     * @param {String} name cookies name
     *
     */
    get: function (name) {
      var allCookies = document.cookie.split(";").map((cookie) => {
        var cookiePair = cookie.trim().split("=");

        return { key: cookiePair[0], value: cookiePair[1] };
      });

      var selectedCookie = allCookies.find((cookie) => cookie.key === name);

      if (selectedCookie != null) {
        return selectedCookie.value;
      }
    },

    /**
     *
     * Update Cookie
     * @param {String} name cookie name
     * @param {String} value cookie value
     * @param {Number} [expires] cookie expiration in days
     * @param {String} [domain] cookie domain
     * @param {String} [path] cookie path
     * @param {Boolean} [secure] cookies ssl flag
     */
    update: function (name, value, expires, domain, path, secure) {
      this.set(name, value, expires, domain, path, secure);
    },

    /**
     *
     * Remove cookie
     * @param {String} name
     */
    remove: function (name) {
      this.set(name, "", -1);
    },

    /**
     *
     * Get All Cookies
     *
     */
    getAll: function (name) {
      var allCookies = document.cookie.split(";").map((cookie) => {
        var cookiePair = cookie.trim().split("=");

        return { key: cookiePair[0], value: cookiePair[1] };
      });

      return allCookies;
    },
  };

  window.CookieManager = CookieManager;
})(window, document);
