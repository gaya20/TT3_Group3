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
/******/ 	return __webpack_require__(__webpack_require__.s = "./extension/js/content/mcafee_wb_content.js");
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

/***/ "./extension/common/telemetry/mcafee_wb_banner_clicked.js":
/*!****************************************************************!*\
  !*** ./extension/common/telemetry/mcafee_wb_banner_clicked.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable camelcase */
// WebBoost_Banner_Clicked
const TelemetryBannerClicked = function ()
{
  this.elements = {};
  this.elements._event_name = 'WebBoost_Banner_Clicked';
  this.serialize = function serialize()
  {
    return JSON.stringify(this.elements);
  };
};

/* harmony default export */ __webpack_exports__["default"] = (TelemetryBannerClicked);


/***/ }),

/***/ "./extension/common/telemetry/mcafee_wb_video_paused.js":
/*!**************************************************************!*\
  !*** ./extension/common/telemetry/mcafee_wb_video_paused.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// WebBoost_Video_Paused
const TelemetryVideoPaused = function ()
{
  this.elements = {};
  // eslint-disable-next-line camelcase
  this.elements._event_name = 'WebBoost_Video_Paused';
  this.serialize = function serialize()
  {
    return JSON.stringify(this.elements);
  };
};

/* harmony default export */ __webpack_exports__["default"] = (TelemetryVideoPaused);


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

/***/ "./extension/js/common/mcafee_wb_browsertype.js":
/*!******************************************************!*\
  !*** ./extension/js/common/mcafee_wb_browsertype.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BrowserType; });
class BrowserType
{
  static getBrowserTypes()
  {
    return {
      unknown: -1,
      firefox: 1,
      chrome: 2,
      ironSource: 3,
      edge: 4
    };
  }

  static toBrowserTypeInt(browserTypeString)
  {
    return this.getBrowserTypes()[browserTypeString];
  }
}


/***/ }),

/***/ "./extension/js/common/mcafee_wb_commands.js":
/*!***************************************************!*\
  !*** ./extension/js/common/mcafee_wb_commands.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//  The commands send from content script to background script
const Commands = {
  Block: 'Block',
  Clear: 'Clear',
  SetUserLastClickDetails: 'SetUserLastClickDetails',
  GetUserLastClickDetails: 'GetUserLastClickDetails',
  GetVersionDetails: 'GetVersionDetails',
  IsWhitelisted: 'IsWhitelisted',
  GetAllAutoPauseData: 'GetAllAutoPauseData',
  UpdateWhitelist: 'UpdateWhitelist',
  LiveVideoFound: 'LiveVideoFound',
  TurnOffWelcomePopup: 'TurnOffWelcomePopup',
  UpdateGlobalAutoPause: 'UpdateGlobalAutoPause',
  IsAutoPauseEnabled: 'IsAutoPauseEnabled',
  HasResponseStarted: 'HasResponseStarted',
  AddResponseCaching: 'AddResponseCaching',
  SendTelemetry: 'SendTelemetry',
  GetId: 'GetId',
  LogMsg: 'LogMsg',
  GetBackgroundGlobals: 'GetBackgroundGlobals'
};

/* harmony default export */ __webpack_exports__["default"] = (Commands);


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

/***/ "./extension/js/common/mcafee_wb_logger.js":
/*!*************************************************!*\
  !*** ./extension/js/common/mcafee_wb_logger.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Logger; });
/* harmony import */ var _mcafee_wb_loglevels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mcafee_wb_loglevels */ "./extension/js/common/mcafee_wb_loglevels.js");
/* harmony import */ var _content_mcafee_wb_backgroundipc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content/mcafee_wb_backgroundipc */ "./extension/js/content/mcafee_wb_backgroundipc.js");
/* harmony import */ var _mcafee_wb_browsertype__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mcafee_wb_browsertype */ "./extension/js/common/mcafee_wb_browsertype.js");
/* harmony import */ var _mcafee_wb_localstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mcafee_wb_localstorage */ "./extension/js/common/mcafee_wb_localstorage.js");
/* harmony import */ var _background_mcafee_wb_globalDispatchers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../background/mcafee_wb_globalDispatchers */ "./extension/js/background/mcafee_wb_globalDispatchers.js");
//  The default logger object. This can be overridden with custom logger object if required.






// *****************************************************************************
// Set "ExtensionLogging" = 1 in registry at the same place we set LogLevel
// will turn on native logging. This will log everything including INFO and ERR.
// *****************************************************************************
// *****************************************************************************
// Type "chrome.storage.local.set({'ExtensionLogging': #});" into the background
// page console to forcefully turn on or turn off the logs inside extension
// chrome = chrome/browser, # = the log level from 0 to 3
// *****************************************************************************
class Logger
{
  constructor(logLevel)
  {
    this.logLevel = logLevel; // None = 0, Info = 1, Err = 2, All = 3
    this.nativeLoggingEnabled = false;
    this.processType = -1; // content = 0, background = 1
    // eslint-disable-next-line no-undef
    this.browserType = _mcafee_wb_browsertype__WEBPACK_IMPORTED_MODULE_2__["default"].toBrowserTypeInt("chrome");
    this.extensionType = 'wb';

    _mcafee_wb_localstorage__WEBPACK_IMPORTED_MODULE_3__["default"].get('ExtensionLogging', (value) =>
    {
      if (value !== undefined && Number.isInteger(value) && value >= 0 && value <= 3)
      {
        this.logLevel = value;
      }
    });
  }

  setNativeLoggingEnabled(isEnabled, processType = undefined)
  {
    if (processType !== undefined)
    {
      this.processType = processType;
    }
    this.nativeLoggingEnabled = isEnabled;
  }

  log(msg)
  {
    // log to native
    if (this.nativeLoggingEnabled)
    {
      const logDetails = {
        processType: this.processType,
        browserType: this.browserType,
        extensionType: this.extensionType,
        logLevel: _mcafee_wb_loglevels__WEBPACK_IMPORTED_MODULE_0__["default"].Info,
        msg
      };
      if (this.processType === 0)
      {
        _content_mcafee_wb_backgroundipc__WEBPACK_IMPORTED_MODULE_1__["default"].logMsg(logDetails);
      }
      else
      {
        _background_mcafee_wb_globalDispatchers__WEBPACK_IMPORTED_MODULE_4__["default"].ExternalMsgDispatcher.logMsg(logDetails);
      }
    }

    // log to extension
    if (_mcafee_wb_loglevels__WEBPACK_IMPORTED_MODULE_0__["default"].Info && this.logLevel)
    {
      const nowDate = new Date();
      console.log(`${nowDate.toLocaleString()} ${msg}`); // eslint-disable-line no-console
    }
  }

  error(msg)
  {
    // log to native
    if (this.nativeLoggingEnabled)
    {
      const logDetails = {
        processType: this.processType,
        browserType: this.browserType,
        extensionType: this.extensionType,
        logLevel: _mcafee_wb_loglevels__WEBPACK_IMPORTED_MODULE_0__["default"].Err,
        msg
      };
      if (this.processType === 0)
      {
        _content_mcafee_wb_backgroundipc__WEBPACK_IMPORTED_MODULE_1__["default"].logMsg(logDetails);
      }
      else
      {
        _background_mcafee_wb_globalDispatchers__WEBPACK_IMPORTED_MODULE_4__["default"].ExternalMsgDispatcher.logMsg(logDetails);
      }
    }

    // log to extension
    if (_mcafee_wb_loglevels__WEBPACK_IMPORTED_MODULE_0__["default"].Err && this.logLevel)
    {
      const nowDate = new Date();
      console.error(`${nowDate.toLocaleString()} ${msg}`); // eslint-disable-line no-console
    }
  }

  // log locally on the extension side even if native logging is turned on
  // - avoids infite logging loops
  logLocal(msg)
  {
    if (_mcafee_wb_loglevels__WEBPACK_IMPORTED_MODULE_0__["default"].Info && this.logLevel)
    {
      const nowDate = new Date();
      console.log(`${nowDate.toLocaleString()} ${msg}`); // eslint-disable-line no-console
    }
  }
}


/***/ }),

/***/ "./extension/js/common/mcafee_wb_loglevels.js":
/*!****************************************************!*\
  !*** ./extension/js/common/mcafee_wb_loglevels.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const LogLevels = {
  None: 0,
  Info: 1,
  Err: 2,
  All: 3
};

/* harmony default export */ __webpack_exports__["default"] = (LogLevels);


/***/ }),

/***/ "./extension/js/content/mcafee_wb_backgroundipc.js":
/*!*********************************************************!*\
  !*** ./extension/js/content/mcafee_wb_backgroundipc.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BackgroundIPC; });
/* harmony import */ var _common_mcafee_wb_commands__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/mcafee_wb_commands */ "./extension/js/common/mcafee_wb_commands.js");
/* harmony import */ var _mcafee_wb_cglobals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mcafee_wb_cglobals */ "./extension/js/content/mcafee_wb_cglobals.js");
/* harmony import */ var _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/mcafee_wb_webextension */ "./extension/common/mcafee_wb_webextension.js");




//  All communication to background script through content is through this class
class BackgroundIPC
{
  static addVideoForResponseCaching(srcvideo)
  {
    _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_2__["default"].runtime.sendMessage({ action: _common_mcafee_wb_commands__WEBPACK_IMPORTED_MODULE_0__["default"].AddResponseCaching, src: srcvideo });
  }

  static blockVideo(srcvideo, callback)
  {
    _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_2__["default"].runtime.sendMessage({ action: _common_mcafee_wb_commands__WEBPACK_IMPORTED_MODULE_0__["default"].Block, src: srcvideo }, callback);
  }

  static unblockVideo(srcvideo, callback)
  {
    _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_2__["default"].runtime.sendMessage({ action: _common_mcafee_wb_commands__WEBPACK_IMPORTED_MODULE_0__["default"].Clear, src: srcvideo }, callback);
  }

  static setUserLastClickDetails(time, coordinates)
  {
    _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_2__["default"].runtime.sendMessage({ action: _common_mcafee_wb_commands__WEBPACK_IMPORTED_MODULE_0__["default"].SetUserLastClickDetails, time, coordinates });
  }

  static getUserLastClickDetails(callback)
  {
    _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_2__["default"].runtime.sendMessage({ action: _common_mcafee_wb_commands__WEBPACK_IMPORTED_MODULE_0__["default"].GetUserLastClickDetails }, callback);
  }

  static isWhitelisted(srcvideo, callback)
  {
    _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_2__["default"].runtime.sendMessage({ action: _common_mcafee_wb_commands__WEBPACK_IMPORTED_MODULE_0__["default"].IsWhitelisted, src: srcvideo }, callback);
  }

  static isAutoPauseEnabled(callback)
  {
    _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_2__["default"].runtime.sendMessage({ action: _common_mcafee_wb_commands__WEBPACK_IMPORTED_MODULE_0__["default"].IsAutoPauseEnabled }, callback);
  }

  static sendTelemetry(telemetry)
  {
    _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_2__["default"].runtime.sendMessage({ action: _common_mcafee_wb_commands__WEBPACK_IMPORTED_MODULE_0__["default"].SendTelemetry, telemetry });
  }

  static logMsg(logDetails)
  {
    _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_2__["default"].runtime.sendMessage({ action: _common_mcafee_wb_commands__WEBPACK_IMPORTED_MODULE_0__["default"].LogMsg, logDetails });
  }

  static getBackgroundGlobals(callback)
  {
    _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_2__["default"].runtime.sendMessage({ action: _common_mcafee_wb_commands__WEBPACK_IMPORTED_MODULE_0__["default"].GetBackgroundGlobals }, callback);
  }

  static init()
  {
    // set up background message listener
    _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_2__["default"].runtime.onMessage.addListener((request, sender, sendResponse) =>
    {
      switch (request.request_type)
      {
      case _common_mcafee_wb_commands__WEBPACK_IMPORTED_MODULE_0__["default"].LiveVideoFound:
        _mcafee_wb_cglobals__WEBPACK_IMPORTED_MODULE_1__["default"].logger.log('Found live video');
        _mcafee_wb_cglobals__WEBPACK_IMPORTED_MODULE_1__["default"].isLive = true;
        break;
      default:
        break;
      }
    });
  }
}


/***/ }),

/***/ "./extension/js/content/mcafee_wb_banner.js":
/*!**************************************************!*\
  !*** ./extension/js/content/mcafee_wb_banner.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BannerHandler; });
/* harmony import */ var _mcafee_wb_cglobals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mcafee_wb_cglobals */ "./extension/js/content/mcafee_wb_cglobals.js");
/* harmony import */ var _common_mcafee_wb_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/mcafee_wb_constants */ "./extension/js/common/mcafee_wb_constants.js");
/* harmony import */ var _mcafee_wb_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mcafee_wb_video */ "./extension/js/content/mcafee_wb_video.js");
/* harmony import */ var _common_mcafee_wb_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/mcafee_wb_helper */ "./extension/common/mcafee_wb_helper.js");
/* harmony import */ var _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/mcafee_wb_webextension */ "./extension/common/mcafee_wb_webextension.js");
/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */






class BannerHandler
{
  constructor()
  {
    this.bannerIdCount = 0;
  }

  showBanner(videoElement)
  {
    // Don't create another banner for video element that already has a banner
    const hasBannerAlready = videoElement.getAttribute(_common_mcafee_wb_constants__WEBPACK_IMPORTED_MODULE_1__["default"].VideoId) !== null;
    if (hasBannerAlready)
    {
      return;
    }

    if (videoElement.offsetWidth === 0 || videoElement.offsetHeight === 0)
    {
      return;
    }

    // Increment bannerId for each newly generated banner
    const bannerId = this.bannerIdCount;
    this.bannerIdCount += 1;
    if (this.bannerIdCount >= 1000)
    {
      this.bannerIdCount = 0;
    }

    // Get banner image path
    const imgPath = _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_4__["default"].extension.getURL('images/video-notification-banner.png');

    // Calculate banner Width and Height (images/video-notification-banner.png)
    const bannerAspectRatio = 448 / 70; // width divided by height of the original image banner
    const bannerWidth = videoElement.offsetWidth < 300 ? videoElement.offsetWidth - 20 : 280;
    const bannerHeight = Math.floor(bannerWidth / bannerAspectRatio);

    // Create banner nodes
    const bannerNode = document.createElement('div');
    const imgNode = document.createElement('div');

    // Set attribute for nodes
    imgNode.style = `height: 100%; background-image: url(${imgPath}); background-repeat: no-repeat; background-size: contain; display: flex; align-items: center; padding-right: 10px; padding-left: ${bannerHeight + 3}px; font-family: Arial, Helvetica, sans-serif; font-size: ${bannerWidth * 0.05}px; color: #fff`;
    imgNode.innerHTML = _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_4__["default"].i18n.getMessage('banner_Text');

    bannerNode.setAttribute('class', 'Pc_Booster_Auto_Play_Tab_Banner');
    bannerNode.setAttribute(_common_mcafee_wb_constants__WEBPACK_IMPORTED_MODULE_1__["default"].BannerId, bannerId);
    bannerNode.append(imgNode);

    // Set banner styles including position
    this._setBannerStyles(bannerNode, bannerWidth, bannerHeight, videoElement);

    // Upon clicking on the banner, play video and remove banner
    bannerNode.addEventListener('click', () =>
    {
      _mcafee_wb_cglobals__WEBPACK_IMPORTED_MODULE_0__["default"].logger.log('User clicked on banner to play video');
      _mcafee_wb_video__WEBPACK_IMPORTED_MODULE_2__["default"].playVideo(videoElement);

      // remove banner regardless if video played or not
      bannerNode.remove();
    });

    // Append banner to body
    document.querySelector('body').appendChild(bannerNode);

    // Add window resize event for banner
    window.addEventListener('resize', () =>
    {
      this._updateBannerPosition(bannerNode, videoElement);
    }, false);

    // Add window scroll event for banner
    window.addEventListener('scroll', () =>
    {
      this._updateBannerPosition(bannerNode, videoElement);
    }, false);

    // Track the video associated with the banner
    videoElement.setAttribute(_common_mcafee_wb_constants__WEBPACK_IMPORTED_MODULE_1__["default"].VideoId, bannerId);
  }

  _setBannerStyles(bannerNode, bannerWidth, bannerHeight, videoElement)
  {
    const { top, left } = this._getTopLeftCoordinates(videoElement);
    bannerNode.style = `width: ${bannerWidth}px; height: ${bannerHeight}px; margin:10px; position: absolute; top:${top}px; left:${left}px; z-index:2147483647; cursor:pointer; opacity: 0.85;`;
  }

  // Update banner position at 5 times per second max, so we don't slow browser down
  _updateBannerPosition(bannerNode, videoElement)
  {
    const { top, left } = this._getTopLeftCoordinates(videoElement);
    if (videoElement.offsetWidth < 300)
    {
      bannerNode.style.width = `${videoElement.offsetWidth - 20}px`;
      bannerNode.style.top = `${top}px`;
      bannerNode.style.left = `${left}px`;
    }
    else
    {
      bannerNode.style.width = '280px';
      bannerNode.style.top = `${top}px`;
      bannerNode.style.left = `${left}px`;
    }
  }

  // Get how far the top left point of the video is from the top left of the document
  _getTopLeftCoordinates(videoElement)
  {
    let { top, left } = Object(_common_mcafee_wb_helper__WEBPACK_IMPORTED_MODULE_3__["getBoundingCoordinates"])(videoElement);
    if (top < 0) { top = 0; }
    if (left < 0) { left = 0; }
    return { top, left };
  }
}


/***/ }),

/***/ "./extension/js/content/mcafee_wb_cglobals.js":
/*!****************************************************!*\
  !*** ./extension/js/content/mcafee_wb_cglobals.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// The global objects used in content script across multiple objects
const Globals = {
  logger: null,
  isLive: false
};

/* harmony default export */ __webpack_exports__["default"] = (Globals);


/***/ }),

/***/ "./extension/js/content/mcafee_wb_content.js":
/*!***************************************************!*\
  !*** ./extension/js/content/mcafee_wb_content.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mcafee_wb_backgroundipc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mcafee_wb_backgroundipc */ "./extension/js/content/mcafee_wb_backgroundipc.js");
/* harmony import */ var _mcafee_wb_mutationobserver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mcafee_wb_mutationobserver */ "./extension/js/content/mcafee_wb_mutationobserver.js");
/* harmony import */ var _mcafee_wb_cglobals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mcafee_wb_cglobals */ "./extension/js/content/mcafee_wb_cglobals.js");
/* harmony import */ var _common_mcafee_wb_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/mcafee_wb_logger */ "./extension/js/common/mcafee_wb_logger.js");
/* eslint-disable class-methods-use-this */





class Main
{
  start()
  {
    _mcafee_wb_cglobals__WEBPACK_IMPORTED_MODULE_2__["default"].logger = new _common_mcafee_wb_logger__WEBPACK_IMPORTED_MODULE_3__["default"](3); // eslint-disable-line no-undef
    _mcafee_wb_backgroundipc__WEBPACK_IMPORTED_MODULE_0__["default"].getBackgroundGlobals((bkGlobals) =>
    {
      if (bkGlobals.useNativeLogger)
      {
        _mcafee_wb_cglobals__WEBPACK_IMPORTED_MODULE_2__["default"].logger.setNativeLoggingEnabled(true, 0);
      }
    });
    _mcafee_wb_backgroundipc__WEBPACK_IMPORTED_MODULE_0__["default"].init();

    // Set user's last click time and coordinates
    window.addEventListener('click', this._setUserLastClickDetails, true);

    this._mutationobserver = new _mcafee_wb_mutationobserver__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this._mutationobserver.init();
    this._mutationobserver.processLoadedElements();
  }

  _setUserLastClickDetails(event)
  {
    const time = Date.now();
    const coordinates = { x: event.pageX, y: event.pageY };
    _mcafee_wb_backgroundipc__WEBPACK_IMPORTED_MODULE_0__["default"].setUserLastClickDetails(time, coordinates);
  }
}

const mainobj = new Main();
mainobj.start();


/***/ }),

/***/ "./extension/js/content/mcafee_wb_mutationobserver.js":
/*!************************************************************!*\
  !*** ./extension/js/content/mcafee_wb_mutationobserver.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MutationOb; });
/* harmony import */ var _mcafee_wb_cglobals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mcafee_wb_cglobals */ "./extension/js/content/mcafee_wb_cglobals.js");
/* harmony import */ var _mcafee_wb_backgroundipc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mcafee_wb_backgroundipc */ "./extension/js/content/mcafee_wb_backgroundipc.js");
/* harmony import */ var _common_mcafee_wb_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/mcafee_wb_constants */ "./extension/js/common/mcafee_wb_constants.js");
/* harmony import */ var _mcafee_wb_banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mcafee_wb_banner */ "./extension/js/content/mcafee_wb_banner.js");
/* harmony import */ var _mcafee_wb_video__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mcafee_wb_video */ "./extension/js/content/mcafee_wb_video.js");
/* harmony import */ var _common_mcafee_wb_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/mcafee_wb_helper */ "./extension/common/mcafee_wb_helper.js");
/* harmony import */ var _common_telemetry_mcafee_wb_video_paused__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/telemetry/mcafee_wb_video_paused */ "./extension/common/telemetry/mcafee_wb_video_paused.js");
/* eslint-disable no-restricted-syntax */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */








const ReadyState = {
  HAVE_NOTHING: 0,
  HAVE_METADATA: 1,
  HAVE_CURRENT_DATA: 2,
  HAVE_FUTURE_DATA: 3,
  HAVE_ENOUGH_DATA: 4
};

class MutationOb
{
  _onplay(videoElement)
  {
    const videoSrc = videoElement.src.length > 0 ? videoElement.src : videoElement.currentSrc;

    // If user initiated, let it play
    const strUserPlayed = videoElement.getAttribute(_common_mcafee_wb_constants__WEBPACK_IMPORTED_MODULE_2__["default"].UserPlayed);
    if (strUserPlayed === 'true')
    {
      _mcafee_wb_cglobals__WEBPACK_IMPORTED_MODULE_0__["default"].logger.log(`onPlay: user initiated to play video - ${videoSrc}`);
      return;
    }

    // This is to mark this particular videos response header to be cached from background script.
    // Without this every response header is cached which is an overhead.
    if (videoSrc.length > 0)
    {
      _mcafee_wb_backgroundipc__WEBPACK_IMPORTED_MODULE_1__["default"].addVideoForResponseCaching(videoSrc);
    }

    // Get user last click time and check if it is within 4 seconds of current time. If it is
    // and user clicked within video bounds, let it play because user initiated
    _mcafee_wb_backgroundipc__WEBPACK_IMPORTED_MODULE_1__["default"].getUserLastClickDetails((clickDetails) =>
    {
      const lastClickTime = (
        clickDetails.lastClickTime === undefined ? 0 : clickDetails.lastClickTime
      );
      const timePassedAfterLastClick = Date.now() - lastClickTime;
      _mcafee_wb_cglobals__WEBPACK_IMPORTED_MODULE_0__["default"].logger.log(`time passed since user last clicked = ${timePassedAfterLastClick}ms`);
      if ((timePassedAfterLastClick <= _common_mcafee_wb_constants__WEBPACK_IMPORTED_MODULE_2__["default"].ClickPlayInterval)
                || (videoElement.getAttribute(_common_mcafee_wb_constants__WEBPACK_IMPORTED_MODULE_2__["default"].FoundPaused) === 'true'))
      {
        const {
          top, left, bottom, right
        } = Object(_common_mcafee_wb_helper__WEBPACK_IMPORTED_MODULE_5__["getBoundingCoordinates"])(videoElement);
        if (
          clickDetails.lastClickCoordinates.x > left
          && clickDetails.lastClickCoordinates.x < right
          && clickDetails.lastClickCoordinates.y > top
          && clickDetails.lastClickCoordinates.y < bottom + 60
        )
        {
          _mcafee_wb_cglobals__WEBPACK_IMPORTED_MODULE_0__["default"].logger.log(`onPlay: within 4 secs of click and click is inside video, user initiated to play video - ${videoSrc}`);
          videoElement.setAttribute(_common_mcafee_wb_constants__WEBPACK_IMPORTED_MODULE_2__["default"].UserPlayed, 'true');
          this._removeVideoElement(videoElement);
          return;
        }
      }

      // Check if video has already been paused before, if so pause immediately
      // This avoids "play on scroll" features on web pages
      const videoId = videoElement.getAttribute(_common_mcafee_wb_constants__WEBPACK_IMPORTED_MODULE_2__["default"].VideoId);
      if (videoId !== null)
      {
        videoElement.pause();
        return;
      }
      this._pauseVideo(videoElement);
    });
  }

  _handlePlay(videoElement)
  {
    videoElement.addEventListener('play', () =>
    {
      this._onplay(videoElement);
    });
  }

  _pauseVideo(videoElement)
  {
    const interval = _mcafee_wb_cglobals__WEBPACK_IMPORTED_MODULE_0__["default"].isLive ? 5000 : 1000;
    setTimeout(() =>
    {
      if (videoElement.paused)
      {
        return;
      }
      videoElement.autoplay = false;
      videoElement.pause();
      this.bannerHandler.showBanner(videoElement);

      // Let background script know that the video streaming has to be blocked
      const videoSrc = videoElement.src.length > 0 ? videoElement.src : videoElement.currentSrc;
      _mcafee_wb_backgroundipc__WEBPACK_IMPORTED_MODULE_1__["default"].blockVideo(videoSrc);

      // send telemetry
      const telemetry = new _common_telemetry_mcafee_wb_video_paused__WEBPACK_IMPORTED_MODULE_6__["default"]().serialize();
      _mcafee_wb_backgroundipc__WEBPACK_IMPORTED_MODULE_1__["default"].sendTelemetry(telemetry);
    }, interval);
  }

  // The video's clicks are tracked to see whether there was user action to
  // initiate play of the video
  _listenToClickEvents(videoElement)
  {
    let clickElement;
    if (videoElement.parentNode)
    {
      clickElement = videoElement.parentNode;
    }
    else
    {
      clickElement = videoElement;
    }

    clickElement.addEventListener('click', () =>
    {
      _mcafee_wb_cglobals__WEBPACK_IMPORTED_MODULE_0__["default"].logger.log('User clicked on video to play video');
      _mcafee_wb_video__WEBPACK_IMPORTED_MODULE_4__["default"].playVideo(videoElement, () =>
      {
        this._removeVideoElement(videoElement);
      });
    });
  }

  _processVideoElement(element)
  {
    // the same video element could be processed multiple times
    // so we check to make sure we don't process same video element twice
    const strProcessed = element.getAttribute(_common_mcafee_wb_constants__WEBPACK_IMPORTED_MODULE_2__["default"].ProcessedVideo);
    if (strProcessed === 'true')
    {
      return;
    }
    if (element.paused)
    {
      _mcafee_wb_cglobals__WEBPACK_IMPORTED_MODULE_0__["default"].logger.log('Video is originally paused');
      element.setAttribute(_common_mcafee_wb_constants__WEBPACK_IMPORTED_MODULE_2__["default"].FoundPaused, 'true');
    }

    this._listenToClickEvents(element);
    element.setAttribute(_common_mcafee_wb_constants__WEBPACK_IMPORTED_MODULE_2__["default"].ProcessedVideo, 'true');

    if (element.currentTime > 0 && element.paused === false
            && element.ended === false && element.readyState > ReadyState.HAVE_CURRENT_DATA)
    {
      this._onplay(element);
    }

    this._handlePlay(element);
  }

  _removeVideoElement(element)
  {
    const bannerNode = this._queryBannerNode(element);
    if (bannerNode !== null)
    {
      bannerNode.remove();
      const videoSrc = element.src.length > 0 ? element.src : element.currentSrc;
      _mcafee_wb_backgroundipc__WEBPACK_IMPORTED_MODULE_1__["default"].unblockVideo(videoSrc);
    }
  }

  _queryBannerNode(element)
  {
    const videoId = element.getAttribute(_common_mcafee_wb_constants__WEBPACK_IMPORTED_MODULE_2__["default"].VideoId);
    return document.querySelector(`div[${_common_mcafee_wb_constants__WEBPACK_IMPORTED_MODULE_2__["default"].BannerId}="${videoId}"]`);
  }

  _recursiveProcess(element)
  {
    if (element instanceof HTMLVideoElement)
    {
      this._processVideoElement(element);
    }

    for (let index = 0; index < element.childNodes.length; ++index)
    {
      this._recursiveProcess(element.childNodes[index]);
    }
  }

  _recursiveRemove(element)
  {
    if (element instanceof HTMLVideoElement)
    {
      this._removeVideoElement(element);
    }

    for (let index = 0; index < element.childNodes.length; ++index)
    {
      this._recursiveRemove(element.childNodes[index]);
    }
  }

  processLoadedElements()
  {
    const videoElems = document.querySelectorAll('video');
    for (let index = 0; index < videoElems.length; ++index)
    {
      this._processVideoElement(videoElems[index]);
    }
  }

  init()
  {
    this.bannerHandler = new _mcafee_wb_banner__WEBPACK_IMPORTED_MODULE_3__["default"]();
    const observer = new MutationObserver((mutationRecords) =>
    {
      for (const mutationRecord of mutationRecords)
      {
        // process added nodes
        for (const addedNode of mutationRecord.addedNodes)
        {
          this._recursiveProcess(addedNode);
        }

        // process removed nodes
        for (const removedNode of mutationRecord.removedNodes)
        {
          this._recursiveRemove(removedNode);
        }
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }
}


/***/ }),

/***/ "./extension/js/content/mcafee_wb_video.js":
/*!*************************************************!*\
  !*** ./extension/js/content/mcafee_wb_video.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VideoHandler; });
/* harmony import */ var _mcafee_wb_cglobals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mcafee_wb_cglobals */ "./extension/js/content/mcafee_wb_cglobals.js");
/* harmony import */ var _common_mcafee_wb_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/mcafee_wb_constants */ "./extension/js/common/mcafee_wb_constants.js");
/* harmony import */ var _mcafee_wb_backgroundipc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mcafee_wb_backgroundipc */ "./extension/js/content/mcafee_wb_backgroundipc.js");
/* harmony import */ var _common_telemetry_mcafee_wb_banner_clicked__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/telemetry/mcafee_wb_banner_clicked */ "./extension/common/telemetry/mcafee_wb_banner_clicked.js");
/* eslint-disable no-param-reassign */





class VideoHandler
{
  static playVideo(videoElement, callback)
  {
    // if already playing, don't play again
    if (videoElement.getAttribute(_common_mcafee_wb_constants__WEBPACK_IMPORTED_MODULE_1__["default"].UserPlayed) === 'true')
    {
      return;
    }

    // Mark this video as user initiated
    videoElement.setAttribute(_common_mcafee_wb_constants__WEBPACK_IMPORTED_MODULE_1__["default"].UserPlayed, 'true');

    // send telemetry
    const telemetry = new _common_telemetry_mcafee_wb_banner_clicked__WEBPACK_IMPORTED_MODULE_3__["default"]().serialize();
    _mcafee_wb_backgroundipc__WEBPACK_IMPORTED_MODULE_2__["default"].sendTelemetry(telemetry);

    const videoSrc = videoElement.src.length > 0 ? videoElement.src : videoElement.currentSrc;
    _mcafee_wb_backgroundipc__WEBPACK_IMPORTED_MODULE_2__["default"].unblockVideo(videoSrc, () =>
    {
      videoElement.play().then(() =>
      {
        if (callback !== undefined)
        {
          callback();
        }
      }).catch((error) =>
      {
        _mcafee_wb_cglobals__WEBPACK_IMPORTED_MODULE_0__["default"].logger.error(`Failed to play video${error}`);
        videoElement.load();
        videoElement.oncanplay = function oncanplay()
        {
          videoElement.play();
          if (callback !== undefined)
          {
            callback();
          }
        };
      });
    });
  }
}


/***/ })

/******/ });
//# sourceMappingURL=../sourceMap/content.map