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
/******/ 	return __webpack_require__(__webpack_require__.s = "./extension/js/background/mcafee_wb_background.js");
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

/***/ "./extension/js/background/mcafee_wb_background.js":
/*!*********************************************************!*\
  !*** ./extension/js/background/mcafee_wb_background.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mcafee_wb_globals */ "./extension/js/background/mcafee_wb_globals.js");
/* harmony import */ var _mcafee_wb_listenermanager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mcafee_wb_listenermanager */ "./extension/js/background/mcafee_wb_listenermanager.js");
/* harmony import */ var _common_mcafee_wb_localstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/mcafee_wb_localstorage */ "./extension/js/common/mcafee_wb_localstorage.js");
/* harmony import */ var _mcafee_wb_ebizeula__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mcafee_wb_ebizeula */ "./extension/js/background/mcafee_wb_ebizeula.js");
/* harmony import */ var _common_mcafee_wb_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/mcafee_wb_logger */ "./extension/js/common/mcafee_wb_logger.js");
/* harmony import */ var _mcafee_wb_globalDispatchers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mcafee_wb_globalDispatchers */ "./extension/js/background/mcafee_wb_globalDispatchers.js");
/* eslint-disable class-methods-use-this */
// The entry point for background script








class Background
{
  init()
  {
    _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_0__["default"].logger = new _common_mcafee_wb_logger__WEBPACK_IMPORTED_MODULE_4__["default"](3); // eslint-disable-line no-undef
    _common_mcafee_wb_localstorage__WEBPACK_IMPORTED_MODULE_2__["default"].init();
    const listeners = _mcafee_wb_listenermanager__WEBPACK_IMPORTED_MODULE_1__["default"].getListeners();
    for (let index = 0; index < listeners.length; ++index)
    {
      listeners[index].init();
    }

    // Just wait for 5 seconds before submitting EULA Acceptance to server
    setTimeout(() =>
    {
      // If EULA tracking is not already send to server then send it now.
      // Client id is stored if EULA tracking is done.
      const clientId = _common_mcafee_wb_localstorage__WEBPACK_IMPORTED_MODULE_2__["default"].getClientId();
      if (undefined === clientId)
      {
        const installedTime = _common_mcafee_wb_localstorage__WEBPACK_IMPORTED_MODULE_2__["default"].getInstalledTime();

        // If installed Time is available then do EULA tracking else donot track now
        if (undefined !== installedTime)
        {
          _mcafee_wb_ebizeula__WEBPACK_IMPORTED_MODULE_3__["default"].submit(0, undefined, installedTime, (succeeded, newClientId) =>
          {
            if (succeeded)
            {
              _common_mcafee_wb_localstorage__WEBPACK_IMPORTED_MODULE_2__["default"].setClientId(newClientId);
            }
          });
        }
      }
    }, 5000);

    // send msg to WA after 1 second to allow WA to initialize completely
    // otherwise there could be 2 browser hosts
    setTimeout(() =>
    {
      _mcafee_wb_globalDispatchers__WEBPACK_IMPORTED_MODULE_5__["default"].ExternalMsgDispatcher.init();
    }, 1000);
  }
}

const background = new Background();
background.init();


/***/ }),

/***/ "./extension/js/background/mcafee_wb_ebizeula.js":
/*!*******************************************************!*\
  !*** ./extension/js/background/mcafee_wb_ebizeula.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WBEULAWebRequest; });
/* harmony import */ var _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mcafee_wb_globals */ "./extension/js/background/mcafee_wb_globals.js");



const ContextType = {
  AccountId: 'AccountId',
  ClientId: 'ClientId'
};

const ActionType = {
  Accepted: 'Accepted',
  Rejected: 'Rejected'
};

const AcceptanceType = {
  Implicit: 'Implicit',
  Explicit: 'Explicit'
};

const ViewType = {
  Inline: 'Inline',
  Popup: 'Popup'
};

const Functionality = {
  Registration: 'Registration',
  ProductDownload: 'ProductDownload',
  Purchase: 'Purchase',
  ProductInstallation: 'ProductInstallation',
  ProductActivation: 'ProductActivation'
};

const EULAConstants = {
  Salt: '4157A795-1451-4fe3-BA59-0C4C98676668',
  EULAService: 'https://home.mcafee.com/webservices/eulaservice.asmx',
  EULASoapAction: 'http://home.mcafee.com/SaveEulaTrackingDetails'
};


class Sha256
{
  static get(str, callback)
  {
    // Transform the string into an arraybuffer.
    const buffer = new TextEncoder('utf-8').encode(str);
    return crypto.subtle.digest('SHA-256', buffer).then((hash) =>
    {
      callback(Sha256._hex(hash));
    });
  }

  static _hex(buffer)
  {
    const hexCodes = [];
    const view = new DataView(buffer);
    for (let i = 0; i < view.byteLength; i += 4)
    {
      // Using getUint32 reduces the number of iterations needed (we process 4 bytes each time)
      const value = view.getUint32(i);
      // toString(16) will give the hex representation of the number without padding
      const stringValue = value.toString(16);
      // We use concatenation and slice for padding
      const padding = '00000000';
      const paddedValue = (padding + stringValue).slice(-padding.length);
      hexCodes.push(paddedValue);
    }

    // Join all the hex strings into one
    return hexCodes.join('');
  }
}


class EULARequest
{
  setContextType(contextType)
  {
    this.ContextType = contextType;
  }

  setContext(context)
  {
    this.ContextTypeValue = context;
  }

  setEULAVersion(version)
  {
    this.EulaVersion = version;
  }

  setActionType(type)
  {
    this.ActionType = type;
  }

  setAcceptanceType(acceptanceType)
  {
    this.AcceptanceType = acceptanceType;
  }

  setViewType(viewType)
  {
    this.ViewType = viewType;
  }

  setCulture(culture)
  {
    this.Culture = culture;
  }

  setApplication(application)
  {
    this.Application = application;
  }

  setAffId(affid)
  {
    this.AffiliateId = affid;
  }

  setPackageId(packageId)
  {
    this.PackageId = packageId;
  }

  setFunctionality(functionality)
  {
    this.Functionality = functionality;
  }

  setContextAdditionalInfo(info)
  {
    this.ContextAdditionalInfo = info;
  }

  _toHash(callback)
  {
    const forHashing = this.AffiliateId + this.ContextTypeValue + EULAConstants.Salt;
    Sha256.get(forHashing, callback);
  }

  toXml(callback)
  {
    let properties = '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">';
    properties += '<s:Body>';
    properties += '<SaveEulaTrackingDetails xmlns="http://home.mcafee.com/" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">';
    properties += '<eulaTrackingRequestInfo>';

    const names = Object.getOwnPropertyNames(this);
    for (let index = 0; index < names.length; ++index)
    {
      properties += '<';
      properties += names[index];
      properties += '>';
      properties += this[names[index]];
      properties += '</';
      properties += names[index];
      properties += '>';
    }

    properties += '<HashedInput>';


    this._toHash((hash) =>
    {
      properties += hash;
      properties += '</HashedInput>';

      properties += '</eulaTrackingRequestInfo >';
      properties += '</SaveEulaTrackingDetails >';
      properties += '</s:Body >';
      properties += '</s:Envelope >';
      callback(properties);
    });
  }
}

class EULAWebRequest
{
  static _isResponseValid(response)
  {
    const ret = response.getElementsByTagName('SaveEulaTrackingDetailsResult');
    if (undefined === ret || undefined === ret[0])
    {
      return false;
    }

    const result = ret[0].innerHTML;
    return result === 'true';
  }

  static submit(eulaRequest, fcallback)
  {
    const request = new XMLHttpRequest();
    request.open('POST', EULAConstants.EULAService);
    request.setRequestHeader('SOAPAction', EULAConstants.EULASoapAction);
    request.setRequestHeader('Content-Type', 'text/xml; charset=utf-8');

    eulaRequest.toXml((xml) =>
    {
      request.send(xml);

      request.onreadystatechange = function onreadystatechange()
      {
        // only process completed state
        if (request.readyState === 4 && request.status === 200)
        {
          try
          {
            if (EULAWebRequest._isResponseValid(request.responseXML))
            {
              _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_0__["default"].logger.log('EULA Acceptance send to server successfully');
              fcallback(true, eulaRequest.ContextTypeValue);
            }
            else
            {
              _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_0__["default"].logger.log('EULA Acceptance response denotes that the acceptance request failed');
              fcallback(false);
            }
          }
          catch (exception)
          {
            _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_0__["default"].logger.error(`Failed to send EULA Acceptance ${exception}`);
          }
        }
      };

      request.onerror = function onerror()
      {
        _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_0__["default"].logger.error('Failed to make EULA Acceptance request');
        fcallback(false);
      };
    });
  }
}

class Guid
{
  // Generate a string from current date, math.random and random from window.crypto.
  // Then from this string generate a GUID by picking characters at indices again
  // decided by math.random.
  static newGuid()
  {
    const array = new Uint8Array(24);
    window.crypto.getRandomValues(array);

    let data = Date.now().toString() + Math.random().toString().substring(2);


    for (let index = 0; index < 24; ++index)
    {
      data += array[index].toString();
    }


    let id = '{';

    for (let index = 0; index < 36; ++index)
    {
      if (index === 8 || index === 13 || index === 18 || index === 23)
      {
        id += '-';
      }
      else
      {
        // Math.random generates between 0 - 1 now multiplying by length and flooring
        // generates between 0- ( length-1)
        const ind = Math.floor((Math.random() * data.length));
        id += data[ind];
      }
    }
    id += '}';
    return id;
  }
}

class WBEULAWebRequest
{
  static submit(affId, clientId, acceptanceDate, callback)
  {
    const date = new Date(acceptanceDate);

    const eulaDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;


    const eulaRequest = new EULARequest();
    eulaRequest.setAcceptanceType(AcceptanceType.Implicit);
    eulaRequest.setActionType(ActionType.Accepted);
    eulaRequest.setAffId(affId);
    eulaRequest.setApplication('McAfee WebBoost');
    eulaRequest.setContextType(ContextType.ClientId);

    const contextId = clientId !== undefined ? clientId : Guid.newGuid();

    eulaRequest.setContext(contextId);
    eulaRequest.setCulture('Default');
    eulaRequest.setEULAVersion('EULA');
    eulaRequest.setFunctionality(Functionality.ProductInstallation);
    eulaRequest.setPackageId(0);
    eulaRequest.setViewType(ViewType.Inline);
    eulaRequest.setContextAdditionalInfo(`AcceptanceDate : ${eulaDate}; Affid :${affId}`);
    EULAWebRequest.submit(eulaRequest, callback);
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

/***/ "./extension/js/background/mcafee_wb_externalmsglistener.js":
/*!******************************************************************!*\
  !*** ./extension/js/background/mcafee_wb_externalmsglistener.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExternalMsgDispatcher; });
/* harmony import */ var _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mcafee_wb_globals */ "./extension/js/background/mcafee_wb_globals.js");
/* harmony import */ var _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/mcafee_wb_webextension */ "./extension/common/mcafee_wb_webextension.js");
/* harmony import */ var _mcafee_wb_globalDispatchers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mcafee_wb_globalDispatchers */ "./extension/js/background/mcafee_wb_globalDispatchers.js");
/* eslint-disable camelcase */
// Send messages to whitelisted extension, if it is not available then
// lets try and send message to the native component




class ExternalMsgDispatcher
{
  constructor()
  {
    this._externalCommands = {
      DISCONNECT_NATIVE: 1
    };
  }

  init()
  {
    _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_1__["default"].runtime.onMessageExternal.addListener((request, sender, sendResponse) =>
    {
      if (sender.id === undefined || !_mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_0__["default"].EXTERNAL_EXTNS.isWhiteListed(sender.id))
      {
        return false;
      }

      return this.processMessage(sender.id, request, sendResponse);
    });
  }

  processMessage(extensionId, request, sendResponse)
  {
    let bRequiresAsync = false;

    if (!('request_type' in request && 'payload' in request))
    {
      return bRequiresAsync;
    }
    const { request_type } = request;

    switch (request_type)
    {
    case this._externalCommands.DISCONNECT_NATIVE:
    {
      // disconnect from native
      _mcafee_wb_globalDispatchers__WEBPACK_IMPORTED_MODULE_2__["default"].ExternalMsgDispatcher._disconnectNative();
      bRequiresAsync = false;
      break;
    }
    default:
      _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_0__["default"].logger.log('Invalid request');
    }
    return bRequiresAsync;
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

/***/ "./extension/js/background/mcafee_wb_listenermanager.js":
/*!**************************************************************!*\
  !*** ./extension/js/background/mcafee_wb_listenermanager.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListenerManager; });
/* harmony import */ var _mcafee_wb_onmessagelistener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mcafee_wb_onmessagelistener */ "./extension/js/background/mcafee_wb_onmessagelistener.js");
/* harmony import */ var _mcafee_wb_webrequestlistener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mcafee_wb_webrequestlistener */ "./extension/js/background/mcafee_wb_webrequestlistener.js");
/* harmony import */ var _mcafee_wb_tablistener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mcafee_wb_tablistener */ "./extension/js/background/mcafee_wb_tablistener.js");
/* harmony import */ var _mcafee_wb_webnavigationlistener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mcafee_wb_webnavigationlistener */ "./extension/js/background/mcafee_wb_webnavigationlistener.js");
/* harmony import */ var _mcafee_wb_externalmsglistener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mcafee_wb_externalmsglistener */ "./extension/js/background/mcafee_wb_externalmsglistener.js");
// Invoked by backgroud. Gets the list of suported listeners







class ListenerManager
{
  static getListeners()
  {
    const listeners = [];
    listeners.push(new _mcafee_wb_onmessagelistener__WEBPACK_IMPORTED_MODULE_0__["default"]());
    listeners.push(new _mcafee_wb_webrequestlistener__WEBPACK_IMPORTED_MODULE_1__["default"]());
    listeners.push(new _mcafee_wb_tablistener__WEBPACK_IMPORTED_MODULE_2__["default"]());
    listeners.push(new _mcafee_wb_webnavigationlistener__WEBPACK_IMPORTED_MODULE_3__["default"]());
    listeners.push(new _mcafee_wb_externalmsglistener__WEBPACK_IMPORTED_MODULE_4__["default"]());
    return listeners;
  }
}


/***/ }),

/***/ "./extension/js/background/mcafee_wb_m3u8extendedfile.js":
/*!***************************************************************!*\
  !*** ./extension/js/background/mcafee_wb_m3u8extendedfile.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return M3U8ExtendedFile; });
/* harmony import */ var _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mcafee_wb_globals */ "./extension/js/background/mcafee_wb_globals.js");


class M3U8ExtendedFile
{
  constructor()
  {
    this.EXTENDED_FILE_STRING = '#EXTINF:';
    this.EXTENDED_FILE_ENDLIST_STRING = '#EXT-X-ENDLIST';
    this.isLive = true;
    this.totalDuration = 0.0;
  }

  parse(index, arr)
  {
    try
    {
      for (let i = index; i < arr.length; i++)
      {
        if (arr[i].includes(this.EXTENDED_FILE_ENDLIST_STRING))
        {
          this.isLive = false;
          // eslint-disable-next-line no-continue
          continue;
        }
        if (!arr[i].includes(this.EXTENDED_FILE_STRING))
        {
          // eslint-disable-next-line no-continue
          continue;
        }

        const commaIndex = arr[i].indexOf(',');
        const durationString = arr[i].substring(arr[i].indexOf(':') + 1, commaIndex !== -1 ? commaIndex : arr[i].length - 1);
        let convertToFloat = parseFloat(durationString);
        convertToFloat = Number.isNaN(convertToFloat) ? 0 : convertToFloat;
        this.totalDuration = this.totalDuration + convertToFloat;
      }
      return true;
    }
    catch (e)
    {
      _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_0__["default"].logger.error(`Failed to parse Extended M3U8 file: ${e.message}`);
      return false;
    }
  }
}


/***/ }),

/***/ "./extension/js/background/mcafee_wb_m3u8masterfile.js":
/*!*************************************************************!*\
  !*** ./extension/js/background/mcafee_wb_m3u8masterfile.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return M3U8MasterFile; });
/* harmony import */ var _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mcafee_wb_globals */ "./extension/js/background/mcafee_wb_globals.js");


class M3U8MasterFile
{
  constructor()
  {
    this._streamList = [];
    this.MASTER_FILE_STRING = '#EXT-X-STREAM-INF:';
  }

  parse(index, arr)
  {
    try
    {
      for (let i = index; i < arr.length; i++)
      {
        if (arr[i].includes(this.MASTER_FILE_STRING))
        {
          const propertyInfo = {
            URL: arr[i + 1],
            details: arr[i].substring(this.MASTER_FILE_STRING.length)
          };
          this._streamList.push(propertyInfo);
        }
      }
      return true;
    }
    catch (e)
    {
      _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_0__["default"].logger.error(`Failed to parse Master M3U8 file: ${e.message}`);
      return false;
    }
  }

  getSpecificDetail(providedIndex, value)
  {
    const foundElement = this._streamList[providedIndex];

    const splittedArray = foundElement.details.split(',');
    const detailOfProperty = splittedArray.find(element =>
      element.includes(value));

    if (detailOfProperty === undefined)
    {
      return null;
    }
    return detailOfProperty.substring(detailOfProperty.indexOf('=') + 1);
  }
}


/***/ }),

/***/ "./extension/js/background/mcafee_wb_m3u8utility.js":
/*!**********************************************************!*\
  !*** ./extension/js/background/mcafee_wb_m3u8utility.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return M3U8Utility; });
/* harmony import */ var _common_mcafee_wb_commands__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/mcafee_wb_commands */ "./extension/js/common/mcafee_wb_commands.js");
/* harmony import */ var _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mcafee_wb_globals */ "./extension/js/background/mcafee_wb_globals.js");
/* harmony import */ var _mcafee_wb_m3u8extendedfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mcafee_wb_m3u8extendedfile */ "./extension/js/background/mcafee_wb_m3u8extendedfile.js");
/* harmony import */ var _mcafee_wb_m3u8masterfile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mcafee_wb_m3u8masterfile */ "./extension/js/background/mcafee_wb_m3u8masterfile.js");
/* harmony import */ var _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/mcafee_wb_webextension */ "./extension/common/mcafee_wb_webextension.js");






class M3U8Utility
{
  static createM3U8(tabId, url, strText, initiator)
  {
    const MASTER_FILE_STRING = '#EXT-X-STREAM-INF:';
    const EXTENDED_FILE_STRING = '#EXTINF:';
    const splittedArray = strText.split('\n');
    let isMaster = false;
    const firstIndex = splittedArray.findIndex((element) =>
    {
      if (element.includes(MASTER_FILE_STRING))
      {
        _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_1__["default"].logger.log(`Master: ${url}`);
        isMaster = true;
        return true;
      }
      if (element.includes(EXTENDED_FILE_STRING))
      {
        _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_1__["default"].logger.log(`Extended: ${url}`);
        isMaster = false;
        return true;
      }

      return false;
    });

    if (firstIndex === -1)
    {
      return false;
    }

    const newM3U8 = isMaster ? new _mcafee_wb_m3u8masterfile__WEBPACK_IMPORTED_MODULE_3__["default"]() : new _mcafee_wb_m3u8extendedfile__WEBPACK_IMPORTED_MODULE_2__["default"]();

    if (!newM3U8.parse(firstIndex, splittedArray))
    {
      return false;
    }

    const globalTabDataMap = _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_1__["default"].TabDataList.get(tabId);

    if (isMaster)
    {
      globalTabDataMap._m3u8MasterFileList.push(newM3U8);
    }
    else
    {
      // only send a msg to content script if we have not sent one before
      if (!globalTabDataMap._liveVideoNotified)
      {
        globalTabDataMap._liveVideoNotified = true;
        // eslint-disable-next-line camelcase
        if (newM3U8.isLive)
        {
          _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_4__["default"].tabs.sendMessage(tabId, { request_type: _common_mcafee_wb_commands__WEBPACK_IMPORTED_MODULE_0__["default"].LiveVideoFound });
        }
      }

      this.startProcessingM3U8Savings(tabId, url, initiator, newM3U8.totalDuration);
    }

    return true;
  }

  static startProcessingM3U8Savings(tabId, url, initiator, totalDuration)
  {
    const m3u8File = url.substring(url.lastIndexOf('/') + 1);
    const globalTabDataMap = _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_1__["default"].TabDataList.get(tabId);
    let foundStreamInd = -1;

    const foundMaster = globalTabDataMap._m3u8MasterFileList.find((item) =>
    {
      foundStreamInd = item._streamList.findIndex(element =>
        element.URL.includes(m3u8File));
      if (foundStreamInd !== -1)
      {
        return true;
      }
      return false;
    });

    let bandwidth = 0;
    // check to see if we found something. If not then lets get the middle value only if there
    // is one Master file, otherwise just use 0 as the bandwidth saved. Use this logic for now.
    if ((foundMaster === undefined) && globalTabDataMap._m3u8MasterFileList.length === 1)
    {
      const middleStreamIndex = Math.floor(
        globalTabDataMap._m3u8MasterFileList[0]._streamList.length / 2
      );
      bandwidth = globalTabDataMap._m3u8MasterFileList[0].getSpecificDetail(middleStreamIndex, 'BANDWIDTH');
    }
    else if (foundMaster !== undefined)
    {
      bandwidth = foundMaster.getSpecificDetail(foundStreamInd, 'BANDWIDTH');
    }

    const totalSavings = Math.floor((bandwidth * totalDuration) / 8);
    globalTabDataMap.addClaimData(initiator, totalSavings);
    globalTabDataMap._m3u8MasterFileList = [];
  }
}


/***/ }),

/***/ "./extension/js/background/mcafee_wb_onmessagelistener.js":
/*!****************************************************************!*\
  !*** ./extension/js/background/mcafee_wb_onmessagelistener.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OnMessageListener; });
/* harmony import */ var _common_mcafee_wb_commands__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/mcafee_wb_commands */ "./extension/js/common/mcafee_wb_commands.js");
/* harmony import */ var _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mcafee_wb_globals */ "./extension/js/background/mcafee_wb_globals.js");
/* harmony import */ var _common_mcafee_wb_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/mcafee_wb_helper */ "./extension/common/mcafee_wb_helper.js");
/* harmony import */ var _common_mcafee_wb_localstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/mcafee_wb_localstorage */ "./extension/js/common/mcafee_wb_localstorage.js");
/* harmony import */ var _mcafee_wb_responsebwcalc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mcafee_wb_responsebwcalc */ "./extension/js/background/mcafee_wb_responsebwcalc.js");
/* harmony import */ var _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/mcafee_wb_webextension */ "./extension/common/mcafee_wb_webextension.js");
/* harmony import */ var _mcafee_wb_globalDispatchers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mcafee_wb_globalDispatchers */ "./extension/js/background/mcafee_wb_globalDispatchers.js");
/* eslint-disable class-methods-use-this */
// Handle messages from content & UI to background script








class OnMessageListener
{
  init()
  {
    // attach listener to runtime
    _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_5__["default"].runtime.onMessage.addListener(this._messageRequestListener.bind(this));
  }

  _setUserLastClickDetails(tabId, time, coordinates)
  {
    const tabInfo = _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_1__["default"].TabDataList.get(tabId);
    tabInfo.setUserLastClickDetails(time, coordinates);
    return false;
  }

  _getUserLastClickDetails(tabId, callback)
  {
    const tabInfo = _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_1__["default"].TabDataList.get(tabId);
    callback(tabInfo.getUserLastClickDetails());
    return false;
  }

  _blockStreaming(tabId, svideo)
  {
    _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_1__["default"].logger.log(`Blocking video : ${svideo}  from tab ${tabId}`);
    const tabInfo = _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_1__["default"].TabDataList.get(tabId);
    if (tabInfo.containsBlockedUrl(svideo) || tabInfo === undefined)
    {
      return false;
    }

    _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_5__["default"].tabs.get(tabId, (tabDetail) =>
    {
      tabInfo.incrementVideosPaused();
      tabInfo.addBlockedUrl(svideo);
      _common_mcafee_wb_helper__WEBPACK_IMPORTED_MODULE_2__["Helper"].updateBadge(tabId);
      // If already blocked then do not increment the saving again.
      _common_mcafee_wb_helper__WEBPACK_IMPORTED_MODULE_2__["Helper"].setAutoPauseData(tabDetail.url, 1, 0);

      const response = tabInfo.getResponse(svideo);
      if (undefined !== response)
      {
        _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_1__["default"].logger.log(`Calculating bandwidth from block streaming for video ${svideo}`);
        _mcafee_wb_responsebwcalc__WEBPACK_IMPORTED_MODULE_4__["default"].calculateSavings(
          svideo,
          tabDetail.url,
          response.responseHeaders,
          tabId
        );
      }
      else
      {
        // it might be a blob video or some other format
        // let us check claimed data map to see if something is there
        _mcafee_wb_responsebwcalc__WEBPACK_IMPORTED_MODULE_4__["default"]._claimHLSDataSaved(tabDetail.url, tabId);
      }
    });

    return false; // we do not need to make an async call
  }

  _unblockStreaming(tabId, frameId, svideo, fresponse)
  {
    _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_1__["default"].logger.log(`Unblocking video ${svideo} from tab id ${tabId} from frameid ${frameId}`);

    const tabInfo = _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_1__["default"].TabDataList.get(tabId);
    if (typeof tabInfo === 'undefined')
    {
      return false;
    }

    if (frameId > 0)
    {
      tabInfo.addWhitelistedFrameId(frameId);
    }

    if (!_mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_1__["default"].MEDIA_PATTERN.test(svideo))
    {
      // must be hls, it will not be caught by webrequest
      tabInfo._hlsUserClickedPlay.push(svideo);
    }

    const removed = tabInfo.removeBlockedUrl(svideo);
    if (removed)
    {
      tabInfo.decreaseVideosPaused();
      _common_mcafee_wb_helper__WEBPACK_IMPORTED_MODULE_2__["Helper"].updateBadge(tabId);
      if (fresponse !== undefined)
      {
        fresponse();
      }
      return true;
    }

    return false;
  }

  _getVersionDetails(fresponse)
  {
    const manifestData = _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_5__["default"].runtime.getManifest();
    const extVersion = manifestData.version;
    const versions = {
      extVersion
    };
    fresponse(versions);
    return false;
  }

  _toUrlForOptionsUI(url)
  {
    if (!url.startsWith('http'))
    {
      return '';
    }
    return url;
  }

  _getAllAutoPauseData(tabId, fresponse)
  {
    _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_5__["default"].tabs.get(tabId, (tab) =>
    {
      const tabInfo = _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_1__["default"].TabDataList.get(tabId);
      const pausedInThisSession = tabInfo.getTotalVideosPaused();

      this._isWhitelisted(tab.url, (whitelisted) =>
      {
        const data = {
          totalVideosPaused: _common_mcafee_wb_localstorage__WEBPACK_IMPORTED_MODULE_3__["default"].getTotalVideosPaused(),
          pausedInThisSession,
          autoPausedDataList: _common_mcafee_wb_localstorage__WEBPACK_IMPORTED_MODULE_3__["default"].getAllAutoPauseData(),
          totalBandwidthSaved: _common_mcafee_wb_localstorage__WEBPACK_IMPORTED_MODULE_3__["default"].getTotalBandwidthSaved(),
          globalAutoPauseEnabled: _common_mcafee_wb_localstorage__WEBPACK_IMPORTED_MODULE_3__["default"].getAutoPauseEnabled(),
          isHostWhiteListed: whitelisted,
          currentUrl: (undefined === tab || undefined === tab.url) ? '' : this._toUrlForOptionsUI(tab.url),
          showWelcomePopup: _common_mcafee_wb_localstorage__WEBPACK_IMPORTED_MODULE_3__["default"].getShowWelcomePopup()
        };
        fresponse(data);
      });
    });
    return true;
  }

  _isWhitelistedFrame(tabId, frameid)
  {
    const tabInfo = _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_1__["default"].TabDataList.get(tabId);
    if (typeof tabInfo === 'undefined')
    {
      _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_1__["default"].logger.log(`Frame ${frameid} of tab ${tabId} is not whitelisted`);
      return false;
    }

    if (tabInfo.containsWhitelistedFrameId(frameid))
    {
      _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_1__["default"].logger.log(`Frame ${frameid} of tab ${tabId} is whitelisted`);
      return true;
    }

    _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_1__["default"].logger.log(`Frame ${frameid} of tab ${tabId} is not whitelisted`);
    return false;
  }

  _isWhitelisted(src, fresponse)
  {
    fresponse(_common_mcafee_wb_helper__WEBPACK_IMPORTED_MODULE_2__["Helper"].isWhitelisted(src));
  }

  _isAutoPauseEnabled(fresponse)
  {
    const autoPauseEnabled = _common_mcafee_wb_localstorage__WEBPACK_IMPORTED_MODULE_3__["default"].getAutoPauseEnabled();
    fresponse(autoPauseEnabled);
    return false;
  }

  _getActiveTabId(callback)
  {
    _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_5__["default"].tabs.query({ active: true, currentWindow: true }, (tabs) =>
    {
      if (undefined !== tabs && tabs.length > 0)
      {
        callback(tabs[0].id);
      }
    });
  }

  _updateWhitelist(url, whitelisted)
  {
    _common_mcafee_wb_helper__WEBPACK_IMPORTED_MODULE_2__["Helper"].setAutoPauseData(url, 0, 0, whitelisted);
  }

  _updateGlobalAutoPause(autoPauseEnabled)
  {
    _common_mcafee_wb_localstorage__WEBPACK_IMPORTED_MODULE_3__["default"].setAutoPauseEnabled(autoPauseEnabled);
  }

  _turnOffWelcomePopup()
  {
    _common_mcafee_wb_localstorage__WEBPACK_IMPORTED_MODULE_3__["default"].setShowWelcomePopup();
  }

  _addResponseCaching(tabId, svideo)
  {
    const tabInfo = _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_1__["default"].TabDataList.get(tabId);
    if (tabInfo !== undefined)
    {
      tabInfo.addVideoForResponseCaching(svideo);
    }
  }

  _sendTelemetry(telemetryData)
  {
    const externalDispatcher = _mcafee_wb_globalDispatchers__WEBPACK_IMPORTED_MODULE_6__["default"].ExternalMsgDispatcher;
    _mcafee_wb_globalDispatchers__WEBPACK_IMPORTED_MODULE_6__["default"].ExternalMsgDispatcher
      .sendExternalMessage(0, externalDispatcher._nativeCommands.Telemetry, { telemetryData });
  }

  _logMsg(logDetails)
  {
    _mcafee_wb_globalDispatchers__WEBPACK_IMPORTED_MODULE_6__["default"].ExternalMsgDispatcher.logMsg(logDetails);
  }

  // Listener for all requests to Background
  _messageRequestListener(request, sender, sendResponse)
  {
    let bEnableAsync = false;
    const tabId = sender.tab && sender.tab.id;

    switch (request.action)
    {
    case _common_mcafee_wb_commands__WEBPACK_IMPORTED_MODULE_0__["default"].AddResponseCaching:
      this._addResponseCaching(tabId, request.src);
      break;

    case _common_mcafee_wb_commands__WEBPACK_IMPORTED_MODULE_0__["default"].SetUserLastClickDetails:
      bEnableAsync = this._setUserLastClickDetails(tabId, request.time, request.coordinates);
      break;

    case _common_mcafee_wb_commands__WEBPACK_IMPORTED_MODULE_0__["default"].GetUserLastClickDetails:
      bEnableAsync = this._getUserLastClickDetails(tabId, sendResponse);
      break;

    case _common_mcafee_wb_commands__WEBPACK_IMPORTED_MODULE_0__["default"].Block:
      bEnableAsync = this._blockStreaming(tabId, request.src);
      sendResponse(true);
      break;

    case _common_mcafee_wb_commands__WEBPACK_IMPORTED_MODULE_0__["default"].Clear:
      bEnableAsync = this._unblockStreaming(tabId, sender.frameId, request.src, sendResponse);
      break;

    case _common_mcafee_wb_commands__WEBPACK_IMPORTED_MODULE_0__["default"].GetVersionDetails:
      bEnableAsync = this._getVersionDetails(sendResponse);
      break;

    case _common_mcafee_wb_commands__WEBPACK_IMPORTED_MODULE_0__["default"].IsWhitelisted:
      this._isWhitelisted(request.src, (isWhitelisted) =>
      {
        // If in whitelist then consider it.
        if (isWhitelisted)
        {
          sendResponse(isWhitelisted);
        // If not in whitelist then check whether the frame id is in volatile tab whitelist.
        }
        else
        {
          const whitelisted = this._isWhitelistedFrame(tabId, sender.frameId);
          sendResponse(whitelisted);
        }
      });
      break;

    case _common_mcafee_wb_commands__WEBPACK_IMPORTED_MODULE_0__["default"].IsAutoPauseEnabled:
      bEnableAsync = this._isAutoPauseEnabled(sendResponse);
      break;

    case _common_mcafee_wb_commands__WEBPACK_IMPORTED_MODULE_0__["default"].GetAllAutoPauseData:
      this._getActiveTabId((tabIdArg) =>
      {
        this._getAllAutoPauseData(tabIdArg, sendResponse);
      });
      bEnableAsync = true;
      break;

    case _common_mcafee_wb_commands__WEBPACK_IMPORTED_MODULE_0__["default"].UpdateWhitelist:
      this._updateWhitelist(request.whiteListedUrl, request.whiteListedStatus);
      break;

    case _common_mcafee_wb_commands__WEBPACK_IMPORTED_MODULE_0__["default"].UpdateGlobalAutoPause:
      this._updateGlobalAutoPause(request.enabled);
      break;

    case _common_mcafee_wb_commands__WEBPACK_IMPORTED_MODULE_0__["default"].TurnOffWelcomePopup:
      this._turnOffWelcomePopup();
      break;

    case _common_mcafee_wb_commands__WEBPACK_IMPORTED_MODULE_0__["default"].SendTelemetry:
      this._sendTelemetry(request.telemetry);
      break;

    case _common_mcafee_wb_commands__WEBPACK_IMPORTED_MODULE_0__["default"].GetId:
      sendResponse(_common_mcafee_wb_localstorage__WEBPACK_IMPORTED_MODULE_3__["default"].getClientId());
      break;

    case _common_mcafee_wb_commands__WEBPACK_IMPORTED_MODULE_0__["default"].LogMsg:
      this._logMsg(request.logDetails);
      break;

    case _common_mcafee_wb_commands__WEBPACK_IMPORTED_MODULE_0__["default"].GetBackgroundGlobals:
      sendResponse(_mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_1__["default"]);
      break;

    default:
      break;
    }
    return bEnableAsync;
  }
}


/***/ }),

/***/ "./extension/js/background/mcafee_wb_responsebwcalc.js":
/*!*************************************************************!*\
  !*** ./extension/js/background/mcafee_wb_responsebwcalc.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResponseBandwidthCalc; });
/* harmony import */ var _common_mcafee_wb_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/mcafee_wb_helper */ "./extension/common/mcafee_wb_helper.js");
/* harmony import */ var _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mcafee_wb_globals */ "./extension/js/background/mcafee_wb_globals.js");



class ResponseBandwidthCalc
{
  static calculateSavings(url, mainURL, responseHeaders, tabId)
  {
    const contentType = responseHeaders.find(element =>
      element.name.toLowerCase() === 'content-type');
    const TYPE_PATTERN = new RegExp('^(video)/(?:x-)?([^; ]+)');
    const TYPE_PATTERN_HLS = new RegExp('^(application)/(vnd.apple.mpegurl|octet-stream)');

    // NON HLS videos
    if (contentType && (TYPE_PATTERN.exec(contentType.value)
                || TYPE_PATTERN_HLS.exec(contentType.value))
            && url.indexOf('m3u8') === -1)
    {
      this._bandwidthSaved(url, mainURL, responseHeaders, tabId);
    }
  }

  static _bandwidthSaved(url, mainURL, responseHeaders, tabId)
  {
    // getting content length or content-range
    const contentLength = responseHeaders.find(element =>
      element.name.toLowerCase() === 'content-length');
    const RANGE_PATTERN = new RegExp('^bytes [0-9]+-[0-9]+/([0-9]+)$');

    if (_mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_1__["default"].MEDIA_PATTERN.test(url))
    {
      let length = null;
      const contentRange = responseHeaders.find(element =>
        element.name.toLowerCase() === 'content-range');
      if (contentRange)
      {
        const iContentRange = RANGE_PATTERN.exec(contentRange.value);
        if (iContentRange)
        {
          [, length] = iContentRange;
        }
      }
      if (!length)
      {
        length = contentLength.value;
      }

      length = parseInt(length, 10);

      _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_1__["default"].logger.log(`TabID: ${tabId}, MainURL: ${mainURL}, SavedData: ${length}`);

      _common_mcafee_wb_helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].setAutoPauseData(mainURL, 0, length);
    }
  }

  static _claimHLSDataSaved(mainURL, tabId)
  {
    const tabDataInfo = _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_1__["default"].TabDataList.get(tabId);
    const iDataClaimed = tabDataInfo.getClaimData(mainURL);
    // video paused is handled by the caller of this function
    _common_mcafee_wb_helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].setAutoPauseData(mainURL, 0, iDataClaimed);
  }
}


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

/***/ "./extension/js/background/mcafee_wb_tablistener.js":
/*!**********************************************************!*\
  !*** ./extension/js/background/mcafee_wb_tablistener.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TabListener; });
/* harmony import */ var _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mcafee_wb_globals */ "./extension/js/background/mcafee_wb_globals.js");
/* harmony import */ var _common_mcafee_wb_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/mcafee_wb_helper */ "./extension/common/mcafee_wb_helper.js");
/* harmony import */ var _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/mcafee_wb_webextension */ "./extension/common/mcafee_wb_webextension.js");
/* eslint-disable class-methods-use-this */




class TabListener
{
  // Add listeners
  // please note that if you decide to add members, you may need to use array function callbacks
  init()
  {
    // add tabdata objects for any tabs that are already existing
    _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_2__["default"].tabs.query({}, (tabs) =>
    {
      tabs.forEach((tab) =>
      {
        _common_mcafee_wb_helper__WEBPACK_IMPORTED_MODULE_1__["Helper"].resetTabData(tab.id);
      });
    });
    _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_2__["default"].tabs.onRemoved.addListener(this._onRemovedListener);
    _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_2__["default"].tabs.onCreated.addListener(this._onCreatedListener);
  }

  _onRemovedListener(tabId, removeInfo)
  {
    if (_mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_0__["default"].TabDataList.has(tabId))
    {
      _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_0__["default"].TabDataList.delete(tabId);
    }
  }

  _onCreatedListener(tab)
  {
    _common_mcafee_wb_helper__WEBPACK_IMPORTED_MODULE_1__["Helper"].resetTabData(tab.id);
  }
}


/***/ }),

/***/ "./extension/js/background/mcafee_wb_webnavigationlistener.js":
/*!********************************************************************!*\
  !*** ./extension/js/background/mcafee_wb_webnavigationlistener.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WebNavigationListener; });
/* harmony import */ var _common_mcafee_wb_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/mcafee_wb_helper */ "./extension/common/mcafee_wb_helper.js");
/* harmony import */ var _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mcafee_wb_globals */ "./extension/js/background/mcafee_wb_globals.js");
/* harmony import */ var _common_mcafee_wb_localstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/mcafee_wb_localstorage */ "./extension/js/common/mcafee_wb_localstorage.js");
/* harmony import */ var _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/mcafee_wb_webextension */ "./extension/common/mcafee_wb_webextension.js");





class WebNavigationListener
{
  // eslint-disable-next-line class-methods-use-this
  init()
  {
    _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_3__["default"].webNavigation.onCommitted.addListener((detail) =>
    {
      // If globally auto pause is not enabled, there is no need to inject content script to pages.
      if (_common_mcafee_wb_localstorage__WEBPACK_IMPORTED_MODULE_2__["default"].getAutoPauseEnabled() === false)
      {
        return;
      }

      _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_3__["default"].tabs.get(detail.tabId, (tabInfo) =>
      {
        if (tabInfo === undefined)
        {
          return;
        }

        // If the top level domain is not whitelisted then inject content script.
        // Content script is injected to just the frame.
        const isWhitelisted = _common_mcafee_wb_helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].isWhitelisted(tabInfo.url);
        if (!isWhitelisted)
        {
          // reset tab data for the tab if navigation happened in top frame
          if (detail.frameId === 0)
          {
            _common_mcafee_wb_helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].resetTabData(detail.tabId);
          }

          _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_1__["default"].logger.log(`Attempting to inject content script to url ${tabInfo.url} for tabid ${detail.tabId} and frame id ${detail.frameId}`);
          _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_3__["default"].tabs.executeScript(detail.tabId, {
            allFrames: false, file: 'js/content.js', frameId: detail.frameId, matchAboutBlank: true
          }, () =>
          {
            if (_common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_3__["default"].runtime.lastError)
            {
              _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_1__["default"].logger.log(`Failed to inject content script to frame ${detail.frameId} for top level url: ${tabInfo.url}, error: ${_common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_3__["default"].extension.lastError.message}`);
            }
          });
        }
      });
    },
    {
      url: [{ schemes: ['http', 'https', 'about'] }]
    });
  }
}


/***/ }),

/***/ "./extension/js/background/mcafee_wb_webrequestlistener.js":
/*!*****************************************************************!*\
  !*** ./extension/js/background/mcafee_wb_webrequestlistener.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WebRequestListener; });
/* harmony import */ var _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mcafee_wb_globals */ "./extension/js/background/mcafee_wb_globals.js");
/* harmony import */ var _common_mcafee_wb_localstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/mcafee_wb_localstorage */ "./extension/js/common/mcafee_wb_localstorage.js");
/* harmony import */ var _mcafee_wb_m3u8utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mcafee_wb_m3u8utility */ "./extension/js/background/mcafee_wb_m3u8utility.js");
/* harmony import */ var _mcafee_wb_responsebwcalc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mcafee_wb_responsebwcalc */ "./extension/js/background/mcafee_wb_responsebwcalc.js");
/* harmony import */ var _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/mcafee_wb_webextension */ "./extension/common/mcafee_wb_webextension.js");
/* eslint-disable class-methods-use-this */






// Listeners for data received and blocks the streaming as well as
// grabs headers from response to determine the bandwidth saved

class WebRequestListener
{
  init()
  {
    _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_4__["default"].webRequest.onHeadersReceived.addListener((response) =>
    {
      // If user has turned off auto pause globally then do nothing.
      if ((response.tabId < 0) || !_common_mcafee_wb_localstorage__WEBPACK_IMPORTED_MODULE_1__["default"].getAutoPauseEnabled())
      {
        return;
      }

      if (response.url.includes('m3u8'))
      {
        // TODO: need to calculate savings when we actually blocked...
        // but for now just collect savings.
        this._hlsVideoStartProcess(response.tabId, response.url);
      }

      const bShouldBlock = this._shouldBlock(response.tabId, response.url);

      _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_4__["default"].tabs.get(response.tabId, (tabDetail) =>
      {
        // as a reminder, tabDetail.url = MAIN URL of the TAB ID
        // response.url is the url of the video being blocked
        if (bShouldBlock)
        {
          _mcafee_wb_responsebwcalc__WEBPACK_IMPORTED_MODULE_3__["default"].calculateSavings(
            response.url,
            tabDetail.url,
            response.responseHeaders,
            response.tabId
          );
        // Sometimes the content script would not have made decision on pausing video,
        // in those cases:
        }
        else
        {
          // add to collection in map so that to do bandwidth calculation later.
          const tabInfo = _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_0__["default"].TabDataList.get(response.tabId);
          if (undefined !== tabInfo)
          {
            if (tabInfo.hasVideoForResponseCaching(response.url))
            {
              tabInfo.addResponse(response.url, tabDetail.url, response.responseHeaders);
            }
          }
        }
      });

      // eslint-disable-next-line consistent-return
      return { cancel: bShouldBlock };
    }, { urls: ['<all_urls>'] }, ['responseHeaders', 'blocking']);
  }

  _shouldBlock(tabId, url)
  {
    if (tabId === -1)
    {
      return false;
    }

    const tabInfo = _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_0__["default"].TabDataList.get(tabId);
    if (undefined === tabInfo)
    {
      return false;
    }

    const exists = tabInfo.containsBlockedUrl(url);
    return exists;
  }


  _hlsVideoStartProcess(tabId, url)
  {
    _common_mcafee_wb_webextension__WEBPACK_IMPORTED_MODULE_4__["default"].tabs.get(tabId, (tabDetail) =>
    {
      // is it in the whitelist then ignore
      const autoPauseInfo = _common_mcafee_wb_localstorage__WEBPACK_IMPORTED_MODULE_1__["default"].getAutoPauseData(tabDetail.url);
      const bWhitelisted = (autoPauseInfo !== null) && (autoPauseInfo.IsWhiteListed);

      if (bWhitelisted)
      {
        return;
      }
      const tabInfo = _mcafee_wb_globals__WEBPACK_IMPORTED_MODULE_0__["default"].TabDataList.get(tabId);
      const bUserClicked = tabInfo._hlsUserClickedPlay.some(
        element =>
          element.includes(tabDetail.url)
      );

      if (bUserClicked)
      {
        return;
      }

      const xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.onreadystatechange = function onreadystatechange()
      {
        // only process completed state
        if (xhr.readyState === 4 && xhr.status === 200)
        {
          _mcafee_wb_m3u8utility__WEBPACK_IMPORTED_MODULE_2__["default"].createM3U8(tabId, url, xhr.responseText, tabDetail.url);
        }
      };
      xhr.send();
    });
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


/***/ })

/******/ });
//# sourceMappingURL=../sourceMap/background.map