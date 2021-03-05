/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./extension/common/mcafee_wb_helper.js":
/*!**********************************************!*\
  !*** ./extension/common/mcafee_wb_helper.js ***!
  \**********************************************/
/*! exports provided: Helper, getBoundingCoordinates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Helper", function() { return Helper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBoundingCoordinates", function() { return getBoundingCoordinates; });
/* harmony import */ var _js_background_mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/background/mcafee_wb_globals */ "./extension/js/background/mcafee_wb_globals.js");
/* harmony import */ var _js_common_mcafee_wb_localstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/common/mcafee_wb_localstorage */ "./extension/js/common/mcafee_wb_localstorage.js");
/* harmony import */ var _mcafee_wb_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mcafee_wb_utils */ "./extension/common/mcafee_wb_utils.js");
/* harmony import */ var _js_background_mcafee_wb_tabdata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../js/background/mcafee_wb_tabdata */ "./extension/js/background/mcafee_wb_tabdata.js");
/* harmony import */ var _mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mcafee_wb_webextension */ "./extension/common/mcafee_wb_webextension.js");
/* harmony import */ var _js_background_mcafee_wb_globalDispatchers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../js/background/mcafee_wb_globalDispatchers */ "./extension/js/background/mcafee_wb_globalDispatchers.js");







// All helper functions used across classes go here
class Helper
{
  static isInArray(arr, value)
  {
    for (let index = 0; index < arr.length; ++index)
    {
      if (arr[index] === value)
      {
        return true;
      }
    }
    return false;
  }

  static resetTabData(tabId)
  {
    _js_background_mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_0__["default"].TabDataList.set(tabId, new _js_background_mcafee_wb_tabdata__WEBPACK_IMPORTED_MODULE_3__["default"]());
    this.updateBadge(tabId);
  }

  // Updates browser action badge.
  static updateBadge(tabId)
  {
    let currentBadgeCount = '';
    const tabInfo = _js_background_mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_0__["default"].TabDataList.get(tabId);
    if (tabInfo._videosPaused > 0)
    {
      currentBadgeCount = tabInfo._videosPaused.toString();
    }
    _mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_4__["default"].browserAction.setBadgeText(
      {
        text: currentBadgeCount,
        tabId
      }
    );
  }

  // get domain of a URL
  static getDomainName(src)
  {
    return _mcafee_wb_utils__WEBPACK_IMPORTED_MODULE_2__["default"].getDomainName(src);
  }


  static setAutoPauseData(srcvideo, paused, saved, whitelisted)
  {
    _js_common_mcafee_wb_localstorage__WEBPACK_IMPORTED_MODULE_1__["default"].setAutoPauseData(srcvideo, paused, saved, whitelisted);

    const domain = Helper.getDomainName(srcvideo);
    if (domain === '' || domain === undefined || domain === null)
    {
      return; // do not bother sending anything if the domain is empty
    }
    const webBoostMetrics = [{ UniqueIdentifier: 'WebBoost.Video.Pause' }, { 'Event.Value': paused }, { 'Event.Label': domain }, { Metric1: saved }];
    // eslint-disable-next-line camelcase
    const payload = { extension_id: _mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_4__["default"].runtime.id, payload: webBoostMetrics };
    const externalDispatcher = _js_background_mcafee_wb_globalDispatchers__WEBPACK_IMPORTED_MODULE_5__["default"].ExternalMsgDispatcher;
    externalDispatcher
      .sendExternalMessage(0, externalDispatcher._nativeCommands.AggregateData, payload);
  }

  static isWhitelisted(src)
  {
    _js_background_mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_0__["default"].logger.log(`Checking whether url ${src} is whitelisted`);

    const wlistInfo = _js_common_mcafee_wb_localstorage__WEBPACK_IMPORTED_MODULE_1__["default"].getAutoPauseData(src);
    const bWhitelisted = wlistInfo !== null && wlistInfo.IsWhiteListed;
    return bWhitelisted;
  }
}

// Get how far an element is from top left of the document
const getBoundingCoordinates = function (element)
{
  const bounds = element.getBoundingClientRect();
  const scrollTop = window.pageYOffset;
  const scrollLeft = window.pageXOffset;
  const top = Math.round(bounds.top + scrollTop);
  const left = Math.round(bounds.left + scrollLeft);
  const bottom = Math.round(bounds.bottom + scrollTop);
  const right = Math.round(bounds.right + scrollLeft);
  return {
    top, left, bottom, right
  };
};


/***/ }),

/***/ "./extension/common/mcafee_wb_utils.js":
/*!*********************************************!*\
  !*** ./extension/common/mcafee_wb_utils.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Utils; });
class Utils
{
  static getDomainName(src)
  {
    let url = src;
    if (!/^(https?:|chrome:|about:)/.test(src))
    {
      url = `https://${src}`;
    }
    const link = new URL(url);
    return link.hostname.startsWith('www.') ? link.hostname.substr(4) : link.hostname;
  }
}


/***/ }),

/***/ "./extension/common/mcafee_wb_webextension.js":
/*!****************************************************!*\
  !*** ./extension/common/mcafee_wb_webextension.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const extension =  true ? chrome : undefined; // eslint-disable-line no-undef

/* harmony default export */ __webpack_exports__["default"] = (extension);


/***/ }),

/***/ "./extension/common/telemetry/mcafee_wb_screen_shown.js":
/*!**************************************************************!*\
  !*** ./extension/common/telemetry/mcafee_wb_screen_shown.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable camelcase */
// WebBoost_Screen_Shown
const TelemetryScreenShown = function ()
{
  this.elements = {};
  this.elements.name = 'WebBoostScreenShown';
  this.elements.interaction_type = 'Main';
  this.elements.browser = 'UNKNOWN';
  this.elements.browser_action_count = 'default';
  this.elements._event_name = 'WebBoost_Screen_Shown';
  this.name = function name(val)
  {
    this.elements.name = val.toString();
    return this;
  };
  this.interaction_type = function interaction_type(val)
  {
    this.elements.interaction_type = val.toString();
    return this;
  };
  this.browser = function browser(val)
  {
    this.elements.browser = val.toString();
    return this;
  };
  this.browser_action_count = function browser_action_count(val)
  {
    this.elements.browser_action_count = val.toString();
    return this;
  };
  this.serialize = function serialize()
  {
    return JSON.stringify(this.elements);
  };
};

/* harmony default export */ __webpack_exports__["default"] = (TelemetryScreenShown);


/***/ }),

/***/ "./extension/common/telemetry/mcafee_wb_whitelist.js":
/*!***********************************************************!*\
  !*** ./extension/common/telemetry/mcafee_wb_whitelist.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable camelcase */
//
const TelemetryWhitelist = function ()
{
  this.elements = {};
  this.elements.name = 'WebBoostWhitelist';
  this.elements.interaction_type = 'Add';
  this.elements.browser = 'Unknown';
  this.elements.domain = 'default';
  this.elements._event_name = 'WebBoost_Whitelist';
  this.name = function name(val)
  {
    this.elements.name = val.toString();
    return this;
  };
  this.interaction_type = function interaction_type(val)
  {
    this.elements.interaction_type = val.toString();
    return this;
  };
  this.browser = function browser(val)
  {
    this.elements.browser = val.toString();
    return this;
  };
  this.domain = function domain(val)
  {
    this.elements.domain = val.toString();
    return this;
  };
  this.serialize = function serialize()
  {
    return JSON.stringify(this.elements);
  };
};

/* harmony default export */ __webpack_exports__["default"] = (TelemetryWhitelist);


/***/ }),

/***/ "./extension/js/background/mcafee_wb_autopausedata.js":
/*!************************************************************!*\
  !*** ./extension/js/background/mcafee_wb_autopausedata.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AutoPauseData; });
// gets information regarding the default whitelist
class AutoPauseData
{
  //  Has to fetch this json from SA server later so a callback
  static getAutoPauseData(fcallback)
  {
    const autoPauseData = [
      {
        BandWidthSaved: 0, IsWhiteListed: true, Url: 'youtube.com', VideosPaused: 0, UserModified: false
      },
      {
        BandWidthSaved: 0, IsWhiteListed: true, Url: 'netflix.com', VideosPaused: 0, UserModified: false
      },
      {
        BandWidthSaved: 0, IsWhiteListed: true, Url: 'microsoft.com', VideosPaused: 0, UserModified: false
      },
      {
        BandWidthSaved: 0, IsWhiteListed: true, Url: 'webex.com', VideosPaused: 0, UserModified: false
      },
      {
        BandWidthSaved: 0, IsWhiteListed: true, Url: 'bluejeans.com', VideosPaused: 0, UserModified: false
      },
      {
        BandWidthSaved: 0, IsWhiteListed: true, Url: 'zoom.us', VideosPaused: 0, UserModified: false
      },
      {
        BandWidthSaved: 0, IsWhiteListed: true, Url: 'zoho.com', VideosPaused: 0, UserModified: false
      },
      {
        BandWidthSaved: 0, IsWhiteListed: true, Url: 'gotomeeting.com', VideosPaused: 0, UserModified: false
      },
      {
        BandWidthSaved: 0, IsWhiteListed: true, Url: 'clickmeeting.com', VideosPaused: 0, UserModified: false
      },
      {
        BandWidthSaved: 0, IsWhiteListed: true, Url: 'vonage.com', VideosPaused: 0, UserModified: false
      },
      {
        BandWidthSaved: 0, IsWhiteListed: true, Url: 'adobe.com', VideosPaused: 0, UserModified: false
      },
      {
        BandWidthSaved: 0, IsWhiteListed: true, Url: 'intermedia.net', VideosPaused: 0, UserModified: false
      },
      {
        BandWidthSaved: 0, IsWhiteListed: true, Url: 'ringcentral.com', VideosPaused: 0, UserModified: false
      },
      {
        BandWidthSaved: 0, IsWhiteListed: true, Url: 'evoice.com', VideosPaused: 0, UserModified: false
      },
      {
        BandWidthSaved: 0, IsWhiteListed: true, Url: 'u.cyberlink.com', VideosPaused: 0, UserModified: false
      },
      {
        BandWidthSaved: 0, IsWhiteListed: true, Url: 'digium.com', VideosPaused: 0, UserModified: false
      },
      {
        BandWidthSaved: 0, IsWhiteListed: true, Url: 'slack.com', VideosPaused: 0, UserModified: false
      },
      {
        BandWidthSaved: 0, IsWhiteListed: true, Url: 'skype.com', VideosPaused: 0, UserModified: false
      },
      {
        BandWidthSaved: 0, IsWhiteListed: true, Url: 'twitch.tv', VideosPaused: 0, UserModified: false
      },
      {
        BandWidthSaved: 0, IsWhiteListed: true, Url: 'sharepoint.com', VideosPaused: 0, UserModified: false
      },
      {
        BandWidthSaved: 0, IsWhiteListed: true, Url: 'mixer.com', VideosPaused: 0, UserModified: false
      },
      {
        BandWidthSaved: 0, IsWhiteListed: true, Url: 'pluralsight.com', VideosPaused: 0, UserModified: false
      }

    ];

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://www.siteadvisor.com/webboost/defaultwhitelist.json', true);
    xhr.responseType = 'json';
    xhr.onreadystatechange = function onreadystatechange()
    {
      // only process completed state
      if (xhr.readyState === 4 && xhr.status === 200)
      {
        try
        {
          fcallback(false, xhr.response !== null ? xhr.response : autoPauseData);
        }
        catch (exception)
        {
          fcallback(true, autoPauseData);
        }
      }
    };

    xhr.onerror = function onerror()
    {
      fcallback(true, autoPauseData);
    };

    xhr.send();
  }
}


/***/ }),

/***/ "./extension/js/background/mcafee_wb_externalmsgdispatcher.js":
/*!********************************************************************!*\
  !*** ./extension/js/background/mcafee_wb_externalmsgdispatcher.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExternalMsgDispatcher; });
/* harmony import */ var _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mcafee_wb_globals */ "./extension/js/background/mcafee_wb_globals.js");
/* harmony import */ var _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/mcafee_wb_webextension */ "./extension/common/mcafee_wb_webextension.js");
/* harmony import */ var _common_mcafee_wb_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/mcafee_wb_constants */ "./extension/js/common/mcafee_wb_constants.js");
/* eslint-disable class-methods-use-this */
/* eslint-disable no-restricted-syntax */
/* eslint-disable camelcase */
// Send messages to whitelisted extension, if it is not available then lets
// try and send message to the native component




class ExternalMsgDispatcher
{
  constructor()
  {
    this._externalCommands = {
      PING: 0
    };
    this._responseCommands = {
      PONG: 0
    };
    this._nativeCommands = {
      LogMsg: 6,
      HandshakeGreeting: 9,
      AggregateData: 11,
      Telemetry: 14
    };
    this._extensionCommands = {
      HandshakeGreeting: 8
    };

    this._extPort = null;
  }

  init()
  {
    const message = {
      request_type: this._externalCommands.PING,
      payload: {}
    };
    this._sendExtnMsg(_mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_0__["default"].EXTERNAL_EXTNS.get('WebAdvisor'), message);
  }

  // ======== Methods below are for messages going out to WA extension or native ==========

  _isvalidRequestType(request_type)
  {
    let valid = false;
    for (const type in this._externalCommands)
    {
      if (this._externalCommands[type] === request_type)
      {
        valid = true;
      }
    }

    for (const type in this._nativeCommands)
    {
      if (this._nativeCommands[type] === request_type)
      {
        valid = true;
      }
    }

    return valid;
  }

  _validateMsg(request_type, payload)
  {
    if (
      request_type === undefined
      || payload === undefined
      || !this._isvalidRequestType(request_type)
    )
    {
      _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_0__["default"].logger.logLocal('Invalid msg to be sent externally');
      return false;
    }
    return true;
  }

  sendExternalMessage(id, request_type, payload)
  {
    if (!this._validateMsg(request_type, payload))
    {
      return;
    }

    const message = {
      id,
      request_type,
      payload
    };

    // send message to WA extension
    if (!this._extPort)
    {
      try
      {
        this._sendExtnMsg(_mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_0__["default"].EXTERNAL_EXTNS.get('WebAdvisor'), message);
      }
      catch (e)
      {
        _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_0__["default"].logger.logLocal(`Sending external msg: ${JSON.stringify(message)}`);
      }
    }
    else
    {
      // send message to native directly
      try
      {
        this._extPort.postMessage(message);
      }
      catch (e)
      {
        this._extPort = null;
        _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_0__["default"].logger.logLocal(`Error sending message to native: ${e.message}`);
      }
    }
  }

  logMsg(logDetails)
  {
    this.sendExternalMessage(0, this._nativeCommands.LogMsg,
      {
        process_type: (logDetails.processType === 0) ? 'ct' : 'bg',
        browser_type: logDetails.browserType,
        extension_type: logDetails.extensionType,
        log_level: logDetails.logLevel,
        msg: logDetails.msg
      });
  }

  // =============== Methods below are for messages coming in from native ===============

  _processNativeMessage(nativeMessage)
  {
    _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_0__["default"].logger.log(`Processing message from binary: ${nativeMessage.request_type} ${JSON.stringify(nativeMessage.payload)}`);
    switch (nativeMessage.request_type)
    {
    case this._extensionCommands.HandshakeGreeting:
      this._handleNativeSettings(nativeMessage.payload.settings);
      _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_0__["default"].logger.log(`Binary version: ${nativeMessage.payload.version}`);
      break;
    default:
      break;
    }
  }

  _handleNativeSettings(settingsObj)
  {
    if (settingsObj === undefined)
    {
      return;
    }

    // set logger to native logger if needed
    const useNativeLogger = settingsObj[_common_mcafee_wb_constants__WEBPACK_IMPORTED_MODULE_2__["default"].UseNativeLogger];
    if (useNativeLogger)
    {
      _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_0__["default"].useNativeLogger = true;
      _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_0__["default"].logger.setNativeLoggingEnabled(true, 1);
    }
  }

  _disconnectNative()
  {
    if (!this._extPort)
    {
      return;
    }

    this._extPort.disconnect();
    // set port back to null so msgs can now be sent through WA instead
    this._extPort = null;
  }

  _connectNative()
  {
    this._extPort = _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_1__["default"].runtime.connectNative('siteadvisor.mcafee.chrome.extension');
    if (this._extPort === null)
    {
      return;
    }

    this._extPort.onDisconnect.addListener(() =>
    {
      _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_0__["default"].logger.log('Failed to make connection or we got disconnected from native');
      this._extPort = null;
    });

    this._extPort.onMessage.addListener((jsonNativeMsg) =>
    {
      if (!('request_type' in jsonNativeMsg && 'id' in jsonNativeMsg && 'payload' in jsonNativeMsg))
      {
        _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_0__["default"].logger.log(`Invalid native json message: ${JSON.stringify(jsonNativeMsg)} `);
        return;
      }
      try
      {
        this._processNativeMessage(jsonNativeMsg);
      }
      catch (e)
      {
        _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_0__["default"].logger.log(`Native json message may be missing some keys: ${JSON.stringify(jsonNativeMsg)} + ${e.message} `);
      }
    });

    const manifestInfo = _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_1__["default"].runtime.getManifest();
    this._extPort.postMessage(
      {
        id: 0,
        request_type: this._nativeCommands.HandshakeGreeting,
        payload:
            {
              extn_version: manifestInfo.version,
              browser_type: 2,
              user_agent: navigator.userAgent,
              extn_id: _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_1__["default"].runtime.id
            }
      }
    );
  }

  _sendExtnMsg(extnId, message)
  {
    _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_1__["default"].runtime.sendMessage(extnId,
      message,
      (response) =>
      {
        // Handle things if WA extension or other extension is not enabled,
        // try to connect to native directly
        if (!response)
        {
          // Connect to native
          this._connectNative();
          return;
        }

        // Handle things if WA extension or other extension is enabled
        _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_0__["default"].logger.log(`Message received in external dispatcher: ${JSON.stringify(response)}`);
        if (response.useNativeLogger)
        {
          _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_0__["default"].useNativeLogger = true;
          _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_0__["default"].logger.setNativeLoggingEnabled(true, 1);
        }
      });
  }
}


/***/ }),

/***/ "./extension/js/background/mcafee_wb_globalDispatchers.js":
/*!****************************************************************!*\
  !*** ./extension/js/background/mcafee_wb_globalDispatchers.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mcafee_wb_externalmsgdispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mcafee_wb_externalmsgdispatcher */ "./extension/js/background/mcafee_wb_externalmsgdispatcher.js");
// The global objects for background script that needs to be persisted
// and shared for the instance of the browser


//  The global objects used in background across multiple objects
const GlobalDispatchers = {
  ExternalMsgDispatcher: new _mcafee_wb_externalmsgdispatcher__WEBPACK_IMPORTED_MODULE_0__["default"]()
};

/* harmony default export */ __webpack_exports__["default"] = (GlobalDispatchers);


/***/ }),

/***/ "./extension/js/background/mcafee_wb_globals.js":
/*!******************************************************!*\
  !*** ./extension/js/background/mcafee_wb_globals.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_mcafee_wb_externalextns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/mcafee_wb_externalextns */ "./extension/js/common/mcafee_wb_externalextns.js");
// The global objects for background script that needs to be persisted
// and shared for the instance of the browser


//  The global objects used in background across multiple objects
const Globals = {
  TabDataList: new Map(),
  logger: null,
  useNativeLogger: false,
  MEDIA_PATTERN: new RegExp('\\.(mp3|MP3|mpeg|MPEG|mp4|MP4|mp2t|MP2T|ogv|OGV|ogx|OGX|ogg|OGG|webm|WEBM)', 'i'),
  EXTERNAL_EXTNS: new _common_mcafee_wb_externalextns__WEBPACK_IMPORTED_MODULE_0__["default"]()
};

/* harmony default export */ __webpack_exports__["default"] = (Globals);


/***/ }),

/***/ "./extension/js/background/mcafee_wb_tabdata.js":
/*!******************************************************!*\
  !*** ./extension/js/background/mcafee_wb_tabdata.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TabData; });
//  Data related to tab stored for each tab
class TabData
{
  constructor()
  {
    this._blockedUrls = [];
    this._lastClickTime = 0;
    this._lastClickCoordinates = { x: 0, y: 0 };
    this._videosPaused = 0;
    this._m3u8MasterFileList = [];
    // whether bg has notified content script it has found a live video in the tab
    this._liveVideoNotified = false;
    this._whitelistedFrameIds = [];
    this._hlsUserClickedPlay = [];
    this._responses = new Map(); // The responses received in onHeaderReceived is stored here.
    this._responseCacheVideos = new Set();
    this._claimData = new Map();
  }

  addResponse(url, init, response)
  {
    this._responses.set(url, { initiator: init, responseHeaders: response });
  }

  getResponse(url)
  {
    return this._responses.get(url);
  }

  deleteResponse(url)
  {
    this._responses.delete(url);
  }

  incrementVideosPaused()
  {
    this._videosPaused += 1;
  }

  decreaseVideosPaused()
  {
    this._videosPaused -= 1;
  }

  getTotalVideosPaused()
  {
    return this._videosPaused;
  }

  addBlockedUrl(srcvideo)
  {
    this._blockedUrls.push(srcvideo);
  }

  containsBlockedUrl(srcvideo)
  {
    const item = this._blockedUrls.find(element =>
      element._blockedUrl === srcvideo);
    return item !== undefined;
  }

  addWhitelistedFrameId(frameId)
  {
    this._whitelistedFrameIds.push(frameId);
  }

  containsWhitelistedFrameId(frameId)
  {
    const item = this._whitelistedFrameIds.find(element =>
      element === frameId);
    return item !== undefined;
  }

  setUserLastClickDetails(time, coordinates)
  {
    this._lastClickTime = time;
    this._lastClickCoordinates = coordinates;
  }

  getUserLastClickDetails()
  {
    return { lastClickTime: this._lastClickTime, lastClickCoordinates: this._lastClickCoordinates };
  }

  removeBlockedUrl(srcvideo)
  {
    for (let index = 0; index < this._blockedUrls.length; ++index)
    {
      if (this._blockedUrls[index] === srcvideo)
      {
        this._blockedUrls.splice(index, 1);
        return true;
      }
    }
    return false;
  }

  addVideoForResponseCaching(srcvideo)
  {
    this._responseCacheVideos.add(srcvideo);
  }

  hasVideoForResponseCaching(srcvideo)
  {
    return this._responseCacheVideos.has(srcvideo);
  }

  addClaimData(key, value)
  {
    if (value === 0)
    {
      return;
    }
    this._claimData.set(key, value);
  }

  getClaimData(key)
  {
    const iClaimedData = this._claimData.get(key);
    this._claimData.delete(key);
    return iClaimedData > 0 ? iClaimedData : 0;
  }
}


/***/ }),

/***/ "./extension/js/common/mcafee_wb_constants.js":
/*!****************************************************!*\
  !*** ./extension/js/common/mcafee_wb_constants.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const Constants = {
  // background script constants
  UseNativeLogger: 'UseNativeLogger',

  // content script constants

  // The interval to consider when checking whether user click resulted in play of video
  ClickPlayInterval: 4000,
  BannerId: 'webboost_bannerid',
  VideoId: 'webboost_videoid',
  UserPlayed: 'webboost_userplayed',
  ProcessedVideo: 'webboost_processed',
  FoundPaused: 'webboost_found_paused'
};

/* harmony default export */ __webpack_exports__["default"] = (Constants);


/***/ }),

/***/ "./extension/js/common/mcafee_wb_externalextns.js":
/*!********************************************************!*\
  !*** ./extension/js/common/mcafee_wb_externalextns.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExternalExtns; });
/* eslint-disable no-undef */
class ExternalExtns
{
  constructor()
  {
    this._extnMap = new Map();
    if (true)
    {
      this._extnMap.set('WebAdvisor', 'fheoggkfdfchfphceeifdbepaooicaho');
    }
    else {}
  }

  isWhiteListed(extnId)
  {
    // eslint-disable-next-line no-restricted-syntax
    for (const id of this._extnMap.values())
    {
      if (id === extnId)
      {
        return true;
      }
    }

    return false;
  }

  get(extnName)
  {
    return this._extnMap.get(extnName);
  }
}


/***/ }),

/***/ "./extension/js/common/mcafee_wb_localstorage.js":
/*!*******************************************************!*\
  !*** ./extension/js/common/mcafee_wb_localstorage.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LocalStorage; });
/* harmony import */ var _background_mcafee_wb_autopausedata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../background/mcafee_wb_autopausedata */ "./extension/js/background/mcafee_wb_autopausedata.js");
/* harmony import */ var _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/mcafee_wb_webextension */ "./extension/common/mcafee_wb_webextension.js");
/* harmony import */ var _common_mcafee_wb_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/mcafee_wb_utils */ "./extension/common/mcafee_wb_utils.js");
/* eslint-disable no-shadow */




const StorageConstants = {
  LastFetchedTime: 'LastFetchedTime',
  AutoPausedUrls: 'AutoPausedUrls',
  AutoPauseEnabled: 'AutoPauseEnabled',
  ShowWelcomePopup: 'ShowWelcomePopup',
  ClientId: 'ClientId',
  WhitelistFetchInterval: 24 * 60 * 60 * 1000 // 1 day interval
};

class LocalStorage
{
  static _initfromlocalstorage(callback)
  {
    _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_1__["default"].storage.local.get(StorageConstants.AutoPausedUrls, (items) =>
    {
      this._autopausedata = items.AutoPausedUrls === undefined ? [] : items.AutoPausedUrls;
      _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_1__["default"].storage.local.get(StorageConstants.AutoPauseEnabled, (items) =>
      {
        this._autopauseenabled = (
          items.AutoPauseEnabled === undefined || items.AutoPauseEnabled === true
        );
        _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_1__["default"].storage.local.get(StorageConstants.ShowWelcomePopup, (items) =>
        {
          this._showWelcomePopup = items.ShowWelcomePopup;

          if (undefined !== callback)
          {
            callback();
          }
        });
      });
    });

    _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_1__["default"].storage.local.get(StorageConstants.ClientId, (items) =>
    {
      this._clientId = items.ClientId;
    });

    _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_1__["default"].storage.local.get('InstalledTime', (items) =>
    {
      if (undefined === items.InstalledTime)
      {
        const time = Date.now();
        LocalStorage.setInstalledTime(time);
        this._installedTime = time;
      }
      else
      {
        this._installedTime = items.InstalledTime;
      }
    });
  }

  static _hasDomain(domain, collection)
  {
    for (let index = 0; index < collection.length; ++index)
    {
      if (undefined !== collection[index].Url && domain === collection[index].Url)
      {
        return collection[index];
      }
    }
    return null;
  }

  static _verifiedPauseData(data)
  {
    const finalData = {
      BandWidthSaved: 0, IsWhiteListed: true, Url: '', VideosPaused: 0, UserModified: false
    };
    finalData.Url = data.Url;
    return finalData;
  }

  static _mergeAutoPauseData(data)
  {
    if (undefined === data || undefined === data.length)
    {
      return;
    }

    // Take care of removing the entries that were removed from servers whitelist
    for (let index = this._autopausedata.length - 1; index >= 0; --index)
    {
      // If user has modified the record locally then do nothing.

      if (this._autopausedata[index].UserModified !== true)
      {
        // Check whether the whitelist from server has this domain that we locally have.
        const pausedata = LocalStorage._hasDomain(this._autopausedata[index].Url, data);

        // If the local domain name is absent in server then
        if (pausedata === null)
        {
          // If the local domain entry has bandwidth or video paused data
          // then just swith the whitelist info. Else remove the local record
          const { bandWidthSaved, videosPaused } = this._autopausedata[index];
          if (bandWidthSaved > 0 || videosPaused > 0)
          {
            this._autopausedata[index].IsWhiteListed = false;
          }
          else
          {
            this._autopausedata.splice(index, 1);
          }
        }
      }
    }
    // Merge auto pause data with that locally available.

    for (let index = 0; index < data.length; ++index)
    {
      if (undefined !== data[index].Url)
      {
        // If the received whitelist record is absent in the local auto pause data then add it
        // If data is already available in collection then
        const pausedata = LocalStorage._hasDomain(data[index].Url, this._autopausedata);

        if (pausedata === null)
        {
          const finalData = LocalStorage._verifiedPauseData(data[index]);
          this._autopausedata.push(finalData);
        }
      }
    }

    _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_1__["default"].storage.local.set({ AutoPausedUrls: data });
  }

  static _fetchData(firstTime)
  {
    _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_1__["default"].storage.local.set({ LastFetchedTime: Date.now() });

    _background_mcafee_wb_autopausedata__WEBPACK_IMPORTED_MODULE_0__["default"].getAutoPauseData((isDefault, data) =>
    {
      // Donot merge default data if this is not the very first time
      if (isDefault && !firstTime)
      {
        return;
      }

      // Get the data from local storage and then merge the one from server with
      // the one locally available.
      LocalStorage._initfromlocalstorage(() =>
      {
        LocalStorage._mergeAutoPauseData(data);
        // Once merged, irrespective of whether there was any new data from server,
        // just store it to persistent store.
        _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_1__["default"].storage.local.set({ AutoPausedUrls: this._autopausedata });
      });

      // If this is the first time initialization of extension then set to default
      if (firstTime)
      {
        _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_1__["default"].storage.local.set({ AutoPauseEnabled: true });
        this._autopauseenabled = true;

        _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_1__["default"].storage.local.set({ ShowWelcomePopup: true });
        this._showWelcomePopup = true;
      }
    });
  }

  static _fetchPeriodically(interval)
  {
    setInterval(() =>
    {
      LocalStorage._fetchData(false);
    }, interval);
  }

  static init()
  {
    _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_1__["default"].storage.local.get(StorageConstants.LastFetchedTime, (items) =>
    {
      const now = Date.now();
      // If there is no last fetched time or if 1 day has elapsed after
      // last fetch time then fetch default white list again
      if (
        items.LastFetchedTime === undefined
        || ((items.LastFetchedTime + StorageConstants.WhitelistFetchInterval) < now)
      )
      {
        // Fetch it immediately and thereafter at every interval period.
        LocalStorage._fetchData(items.LastFetchedTime === undefined);
        LocalStorage._fetchPeriodically(StorageConstants.WhitelistFetchInterval);
      }
      else
      { // If already initialized then pick from storage.
        LocalStorage._initfromlocalstorage();

        // Calculate next fetch interval and then do a timer to fetch it
        // then and therafter every interval.
        const interval = StorageConstants.WhitelistFetchInterval - (now - items.LastFetchedTime);
        setTimeout(() =>
        {
          LocalStorage._fetchData(false);
          LocalStorage._fetchPeriodically(StorageConstants.WhitelistFetchInterval);
        }, interval);
      }
    });
  }

  static setClientId(clientId)
  {
    this._clientId = clientId;
    _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_1__["default"].storage.local.set({ ClientId: clientId });
  }


  static getClientId()
  {
    return this._clientId;
  }

  static setInstalledTime(time)
  {
    this._installedTime = time;
    _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_1__["default"].storage.local.set({ InstalledTime: time });
  }

  static getInstalledTime()
  {
    return this._installedTime;
  }


  static getShowWelcomePopup()
  {
    return this._showWelcomePopup;
  }

  static setShowWelcomePopup()
  {
    this._showWelcomePopup = false;
    _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_1__["default"].storage.local.set({ ShowWelcomePopup: false });
  }

  static setAutoPauseEnabled(autoPauseEnabled)
  {
    this._autopauseenabled = autoPauseEnabled;
    _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_1__["default"].storage.local.set({ AutoPauseEnabled: this._autopauseenabled });
  }

  static getAutoPauseEnabled()
  {
    return this._autopauseenabled;
  }

  static getAllAutoPauseData()
  {
    return this._autopausedata;
  }

  static getAutoPauseData(srcvideo)
  {
    const domain = _common_mcafee_wb_utils__WEBPACK_IMPORTED_MODULE_2__["default"].getDomainName(srcvideo);
    if (!domain)
    {
      return null;
    }
    for (let index = 0; index < this._autopausedata.length; ++index)
    {
      if (domain.endsWith(this._autopausedata[index].Url))
      {
        return this._autopausedata[index];
      }
      if (this._autopausedata[index].Url.endsWith(domain))
      {
        // merge two domains if the incoming domain is a shorter version of saved domain
        this._autopausedata[index].Url = domain;
        _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_1__["default"].storage.local.set({ AutoPausedUrls: this._autopausedata });
        return this._autopausedata[index];
      }
    }
    return null;
  }

  static setAutoPauseData(srcvideo, paused, saved, wlisted)
  {
    const domain = _common_mcafee_wb_utils__WEBPACK_IMPORTED_MODULE_2__["default"].getDomainName(srcvideo);
    if (domain === null || undefined === domain)
    {
      return;
    }

    const wlistdata = LocalStorage.getAutoPauseData(srcvideo);
    if (wlistdata === null)
    {
      const pausedata = {
        BandWidthSaved: saved,
        IsWhiteListed: wlisted === undefined ? false : wlisted,
        Url: domain,
        VideosPaused: paused,
        UserModified: false
      };
      this._autopausedata.push(pausedata);
    }
    else
    {
      wlistdata.BandWidthSaved += saved;
      wlistdata.VideosPaused += paused;
      if (wlisted !== undefined)
      {
        wlistdata.IsWhiteListed = wlisted;
        wlistdata.UserModified = true;
      }
    }
    _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_1__["default"].storage.local.set({ AutoPausedUrls: this._autopausedata });
  }

  static getTotalVideosPaused()
  {
    let totalVideosPaused = 0;

    for (let index = 0; index < this._autopausedata.length; ++index)
    {
      totalVideosPaused += this._autopausedata[index].VideosPaused;
    }
    return totalVideosPaused;
  }

  static getTotalBandwidthSaved()
  {
    let totalBandwidthSaved = 0;

    for (let index = 0; index < this._autopausedata.length; ++index)
    {
      totalBandwidthSaved += this._autopausedata[index].BandWidthSaved;
    }
    return totalBandwidthSaved;
  }

  static get(name, callback)
  {
    _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_1__["default"].storage.local.get(name, (result) =>
    {
      callback(result[name]);
    });
  }
}


/***/ }),

/***/ "./extension/ui/scripts/controllers/mcafee_wb_about_controller.js":
/*!************************************************************************!*\
  !*** ./extension/ui/scripts/controllers/mcafee_wb_about_controller.js ***!
  \************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/mcafee_wb_webextension */ "./extension/common/mcafee_wb_webextension.js");


const aboutModule = angular.module('webboost-extension');

aboutModule.controller('aboutController', ['$scope', ($scope) =>
{
  // fetch locale
  const _localeData = function (attr)
  {
    return _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_0__["default"].i18n.getMessage(attr);
  };

  // about content data
  $scope.aboutData = {
    pageTitle: _localeData('navigation_header_about'),
    privacyTitle: _localeData('about_Privacy_Title'),
    privacyLink: _localeData('about_Privacy_Link'),
    licenseTitle: _localeData('about_License_Title'),
    licenseLink: _localeData('about_License_Link'),
    brandName: _localeData('brand_Name'),
    extName: _localeData('ext_Name'),
    copyRight: _localeData('about_Brand_Copy_rights')
  };
}]);


/***/ }),

/***/ "./extension/ui/scripts/controllers/mcafee_wb_autopause_controller.js":
/*!****************************************************************************!*\
  !*** ./extension/ui/scripts/controllers/mcafee_wb_autopause_controller.js ***!
  \****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_mcafee_wb_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/mcafee_wb_helper */ "./extension/common/mcafee_wb_helper.js");
/* harmony import */ var _common_telemetry_mcafee_wb_whitelist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/telemetry/mcafee_wb_whitelist */ "./extension/common/telemetry/mcafee_wb_whitelist.js");
/* harmony import */ var _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/mcafee_wb_webextension */ "./extension/common/mcafee_wb_webextension.js");
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */




const autoPauseModule = angular.module('webboost-extension');
autoPauseModule.controller('autoPauseController', ['$scope', '$stateParams', '$timeout', ($scope, $stateParams, $timeout) =>
{
  // fetch locale
  const _localeData = function (attr)
  {
    return _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_2__["default"].i18n.getMessage(attr);
  };

  // content
  $scope.pageContent = {
    titleInitial: _localeData('autoPause_Initial_Title'),
    subTitleInitial: _localeData('autoPause_Initial_SubTitle'),
    initialNoListTextFirst: _localeData('autoPause_Initial_Nolist_FirstLine'),
    initialNoListTextSecond: _localeData('autoPause_Initial_Nolist_SecondLine'),

    titleActive: _localeData('autoPause_Active_Title'),
    subTitleActive: _localeData('autoPause_Active_SubTitle'),

    titleDeactive: _localeData('autoPause_Deactive_Title'),
    subTitleDeactive: _localeData('autoPause_Deactive_SubTitle'),
    subTitleDeactiveLink: _localeData('autoPause_Deactive_SubTitle_Link'),

    titleWhitelisted: _localeData('autoPause_Whitelisted_Title'),

    buttonAllowAutoPlay: _localeData('autoPause_Whitelist_Button_AllowAutoPlay'),
    buttonStopAutoPlay: _localeData('autoPause_Whitelist_Button_StopAutoPlay'),

    tableTotal: _localeData('autoPause_Table_Data_Total'),
    tableVideosStopped: _localeData('autoPause_Table_Data_TotalVideosStopped'),
    tableSavedData: _localeData('autoPause_Table_Data_TotalVideosSaved'),
    tableHeaderWebsite: _localeData('autoPause_Table_Header_Website'),
    tableHeaderVideosStopped: _localeData('autoPause_Table_Header_VideosStopped'),
    tableHeaderDataSaved: _localeData('autoPause_Table_Header_DataSaved'),

    tableHoverAllowAutoPlay: _localeData('autoPause_Whitelist_Button_AllowAutoPlay'),
    tableHoverStopAutoPlay: _localeData('autoPause_Whitelist_Button_StopAutoPlay'),

    tableDataSavedSubMessage: _localeData('autoPause_Table_Header_DataSaved_Message'),

    noInfo: _localeData('autoPause_Unit_No_Info')
  };

  // hide auto pause listing at default
  $scope.isListingVisible = false;
  $scope.isToggled = false;
  $scope.isThisDisable = true; // disable as default or if the page is not of proper url
  $scope.loadingData = true;

  const sendTelemetry = function (url, addToWhitelist)
  {
    if (!addToWhitelist)
    {
      return;
    }

    const domain = _common_mcafee_wb_helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].getDomainName(url);

    // send telemetry
    const telemetry = new _common_telemetry_mcafee_wb_whitelist__WEBPACK_IMPORTED_MODULE_1__["default"]().interaction_type('Add').browser('CH').domain(domain)
      .serialize();
    _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_2__["default"].runtime.sendMessage(
      {
        action: 'SendTelemetry',
        telemetry
      }
    );
  };

  // whitelisting function
  const whitelistingFn = function (whiteListedUrl, whiteListedStatus)
  {
    _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_2__["default"].runtime.sendMessage(
      {
        action: 'UpdateWhitelist',
        whiteListedUrl,
        whiteListedStatus
      }, () =>
      {}
    );
  };

  // set data
  const setData = function (data)
  {
    $scope.totalVideosPaused = data.totalVideosPaused;
    $scope.pausedInThisSession = data.pausedInThisSession ? data.pausedInThisSession : 0;
    $scope.autoPausedDataList = data.autoPausedDataList;
    $scope.totalBandwidthSaved = data.totalBandwidthSaved;
    $scope.isCurrentWhiteListed = data.isHostWhiteListed;
    $scope.showWelcomePopup = data.showWelcomePopup;
    $scope.globalAutoPauseEnabled = data.globalAutoPauseEnabled;

    if (data.currentUrl !== '' && data.currentUrl !== undefined && data.currentUrl !== null)
    {
      $scope.currentUrl = data.currentUrl;
      $scope.isThisDisable = false;
    }

    if (!$scope.$$phase)
    {
      $scope.$digest();
    }

    // Show main UI after a small delay after the data has been loaded
    $timeout(() =>
    {
      $scope.loadingData = false;
    }, 200);
  };

  // refresh the data
  const refreshAutoPauseData = function ()
  {
    _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_2__["default"].runtime.sendMessage(
      {
        action: 'GetAllAutoPauseData'
      }, (response) =>
      {
        setData(response);
      }
    );
  };

  // reload current page
  const reloadPage = function ()
  {
    _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_2__["default"].tabs.query(
      {
        active: true,
        currentWindow: true
      }, (arrayOfTabs) =>
      {
        _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_2__["default"].tabs.reload(arrayOfTabs[0].id);
      }
    );
  };

  // on click show auto pause listing
  $scope.toggleListing = function toggleListing()
  {
    $scope.isListingVisible = !$scope.isListingVisible;
    $scope.isToggled = !$scope.isToggled;
  };

  // Toggle white-list-btn
  $scope.toggleWhitelist = function toggleWhitelist(currentUrl)
  {
    $scope.isCurrentWhiteListed = !$scope.isCurrentWhiteListed;
    whitelistingFn(currentUrl, $scope.isCurrentWhiteListed);
    refreshAutoPauseData();
    sendTelemetry(currentUrl, $scope.isCurrentWhiteListed);
    reloadPage();
  };

  // listing URL whitelisting
  $scope.whitelistThis = function whitelistThis(indexData, indexUrl)
  {
    indexData.IsWhiteListed = !indexData.IsWhiteListed;
    $scope.isCurrentWhiteListed = indexData.IsWhiteListed;
    whitelistingFn(indexUrl, indexData.IsWhiteListed);
    sendTelemetry(indexUrl, indexData.IsWhiteListed);
    refreshAutoPauseData();

    // reload the page only if the active tab url is the same being whitelisted
    if ($scope.currentUrl.includes(indexUrl))
    {
      reloadPage();
    }
  };

  $scope.enableGlobalAutoPause = function enableGlobalAutoPause()
  {
    $scope.globalAutoPauseEnabled = true;
    _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_2__["default"].runtime.sendMessage(
      {
        action: 'UpdateGlobalAutoPause',
        enabled: $scope.globalAutoPauseEnabled
      }, () =>
      {}
    );
  };

  // sorting function
  $scope.propertyName = 'BandWidthSaved';
  $scope.videosPausedAscending = false;
  $scope.dataSavedAscending = true;
  $scope.ascending = true;

  $scope.sortBy = function sortBy(propertyName)
  {
    if (!$scope.globalAutoPauseEnabled)
    {
      return;
    }

    $scope.propertyName = propertyName;

    if (propertyName === 'VideosPaused')
    {
      $scope.videosPausedAscending = !$scope.videosPausedAscending;
      $scope.ascending = $scope.videosPausedAscending;
      return;
    }

    $scope.dataSavedAscending = !$scope.dataSavedAscending;
    $scope.ascending = $scope.dataSavedAscending;
  };

  if ($stateParams.myParam !== null)
  {
    setData($stateParams.myParam);

    // Run only once. this is to turn off the flag so the initial
    // welcome UI does not show again later
    if ($scope.showWelcomePopup)
    {
      _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_2__["default"].runtime.sendMessage(
        {
          action: 'TurnOffWelcomePopup'
        }, () =>
        {}
      );
    }
  }
}]);


/***/ }),

/***/ "./extension/ui/scripts/controllers/mcafee_wb_faq_controller.js":
/*!**********************************************************************!*\
  !*** ./extension/ui/scripts/controllers/mcafee_wb_faq_controller.js ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/mcafee_wb_webextension */ "./extension/common/mcafee_wb_webextension.js");


const faqModule = angular.module('webboost-extension');
faqModule.controller('faqController', ['$scope', ($scope) =>
{
  const _localeData = function (attr)
  {
    return _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_0__["default"].i18n.getMessage(attr);
  };

  $scope.faqContent = {
    QA: [],
    faqText: _localeData('navigation_header_faq')
  };

  // populate faq questions/answers
  for (let i = 1; i <= 4; i++)
  {
    const question = _localeData(`faq_Question_${i}`);
    const answer = _localeData(`faq_Answer_${i}`);
    $scope.faqContent.QA.push(
      {
        question,
        answer
      }
    );
  }

  if (!$scope.$$phase)
  {
    $scope.$digest();
  }
}]);


/***/ }),

/***/ "./extension/ui/scripts/controllers/mcafee_wb_whitelist_controller.js":
/*!****************************************************************************!*\
  !*** ./extension/ui/scripts/controllers/mcafee_wb_whitelist_controller.js ***!
  \****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/mcafee_wb_webextension */ "./extension/common/mcafee_wb_webextension.js");
/* eslint-disable no-restricted-syntax */


const whiteListModule = angular.module('webboost-extension');
whiteListModule.controller('whiteListController', ['$scope', '$timeout', ($scope, $timeout) =>
{
  // fetch locale
  const _localeData = function (attr)
  {
    return _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_0__["default"].i18n.getMessage(attr);
  };

  // page content
  $scope.pageContent = {
    toggleTitle: _localeData('navigation_header_whitelist'),
    toggleText: _localeData('whitelist_Toggle_Text'),
    removeSuccessMessage: _localeData('whiteList_Remove_Success_Message'),
    listingTitle: _localeData('whiteList_Url_Listing_title'),
    emptyListMessage: _localeData('whiteList_Empty_List_Message')
  };

  $scope.showNotification = false;
  $scope.isListEmpty = true;

  const notify = function (url, status)
  {
    // notification
    $scope.showNotification = true;
    // hide notification after 5 sec
    $timeout(() =>
    {
      $scope.showNotification = false;
    }, 5000);

    // check if url is disabled or enabled
    if (!status)
    {
      $scope.notifyMessage = url;
    }
  };

  const setData = function (data)
  {
    $scope.autoPausedDataList = data.autoPausedDataList;
    $scope.globalAutoPauseEnabled = data.globalAutoPauseEnabled;
    let listCount = 0;
    for (const item of $scope.autoPausedDataList)
    {
      if (item.IsWhiteListed)
      {
        $scope.isListEmpty = false;
      }
      else
      {
        listCount += 1;
        if (listCount === $scope.autoPausedDataList.length)
        {
          $scope.isListEmpty = true;
        }
      }
    }
    $scope.$digest();
  };

  const getAllAutoPauseData = function ()
  {
    _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_0__["default"].runtime.sendMessage(
      {
        action: 'GetAllAutoPauseData'
      }, (response) =>
      {
        setData(response);
      }
    );
  };

  // Handle toggle button
  $scope.autoPlayToggle = function autoPlayToggle()
  {
    $scope.globalAutoPauseEnabled = !$scope.globalAutoPauseEnabled;
    _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_0__["default"].runtime.sendMessage(
      {
        action: 'UpdateGlobalAutoPause',
        enabled: $scope.globalAutoPauseEnabled
      }, () =>
      {}
    );
  };

  // Remove from whitelist
  $scope.removeFromWhitelist = function removeFromWhitelist(whiteListedUrl)
  {
    _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_0__["default"].runtime.sendMessage(
      {
        action: 'UpdateWhitelist',
        whiteListedUrl,
        whiteListedStatus: false
      }, () =>
      {}
    );

    // notification
    notify(whiteListedUrl, false);
    getAllAutoPauseData();
  };

  // Add to whitelisting
  $scope.submitThis = function submitThis(whiteListedUrl)
  {
    _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_0__["default"].runtime.sendMessage(
      {
        action: 'UpdateWhitelist',
        whiteListedUrl,
        whiteListedStatus: true
      }, () =>
      {
        getAllAutoPauseData();
      }
    );
  };

  // initial
  getAllAutoPauseData();
}]);


/***/ }),

/***/ "./extension/ui/scripts/controllers/mcafee_wb_window_controller.js":
/*!*************************************************************************!*\
  !*** ./extension/ui/scripts/controllers/mcafee_wb_window_controller.js ***!
  \*************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_telemetry_mcafee_wb_screen_shown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/telemetry/mcafee_wb_screen_shown */ "./extension/common/telemetry/mcafee_wb_screen_shown.js");
/* harmony import */ var _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/mcafee_wb_webextension */ "./extension/common/mcafee_wb_webextension.js");
/* eslint-disable no-underscore-dangle */



const windowModule = angular.module('webboost-extension');
windowModule.controller('WindowController', ['$scope', '$transitions', ($scope, $transitions) =>
{
  const _localeData = function (attr)
  {
    return _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_1__["default"].i18n.getMessage(attr);
  };

  const sendTelemetry = function (name)
  {
    // mapping screen names with telemetry interaction names
    const telemetryInteractions = {
      // eslint-disable-next-line camelcase
      auto_pause_setting: 'Settings',
      faq: 'FAQ',
      about: 'About'
    };

    const interaction = telemetryInteractions[name];
    if (interaction === undefined)
    {
      return;
    }

    // send telemetry
    const telemetry = new _common_telemetry_mcafee_wb_screen_shown__WEBPACK_IMPORTED_MODULE_0__["default"]().interaction_type(interaction).browser('CH').serialize();
    _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_1__["default"].runtime.sendMessage(
      {
        action: 'SendTelemetry',
        telemetry
      }
    );
  };

  $scope.pageContent = {
    whitelistText: _localeData('navigation_header_whitelist'),
    aboutText: _localeData('navigation_header_about'),
    faqText: _localeData('navigation_header_faq')
  };

  $scope.isMenuVisible = false;

  $scope.showMenu = function showMenu()
  {
    $scope.isMenuVisible = !$scope.isMenuVisible;
  };

  $scope.closePopup = function closePopup()
  {
    window.close();
  };

  $transitions.onStart({}, (transition) =>
  {
    sendTelemetry(transition.to().name);
    $scope.isMenuVisible = false;
  });
}]);


/***/ }),

/***/ 0:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./extension/ui/scripts/controllers/mcafee_wb_about_controller.js ./extension/ui/scripts/controllers/mcafee_wb_autopause_controller.js ./extension/ui/scripts/controllers/mcafee_wb_faq_controller.js ./extension/ui/scripts/controllers/mcafee_wb_whitelist_controller.js ./extension/ui/scripts/controllers/mcafee_wb_window_controller.js ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./extension/ui/scripts/controllers/mcafee_wb_about_controller.js */"./extension/ui/scripts/controllers/mcafee_wb_about_controller.js");
__webpack_require__(/*! ./extension/ui/scripts/controllers/mcafee_wb_autopause_controller.js */"./extension/ui/scripts/controllers/mcafee_wb_autopause_controller.js");
__webpack_require__(/*! ./extension/ui/scripts/controllers/mcafee_wb_faq_controller.js */"./extension/ui/scripts/controllers/mcafee_wb_faq_controller.js");
__webpack_require__(/*! ./extension/ui/scripts/controllers/mcafee_wb_whitelist_controller.js */"./extension/ui/scripts/controllers/mcafee_wb_whitelist_controller.js");
module.exports = __webpack_require__(/*! ./extension/ui/scripts/controllers/mcafee_wb_window_controller.js */"./extension/ui/scripts/controllers/mcafee_wb_window_controller.js");


/***/ })

/******/ });
//# sourceMappingURL=../sourceMap/mcafee_wb_controllers.map