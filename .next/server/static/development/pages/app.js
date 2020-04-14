module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./firebase-secret.json":
/*!******************************!*\
  !*** ./firebase-secret.json ***!
  \******************************/
/*! exports provided: type, project_id, private_key_id, private_key, client_email, client_id, auth_uri, token_uri, auth_provider_x509_cert_url, client_x509_cert_url, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"type\":\"service_account\",\"project_id\":\"mydailystatus-911b5\",\"private_key_id\":\"3096ea76db2b7dbecddceabc16318b5a734b4f13\",\"private_key\":\"-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC9m+EYi2s0YEKa\\nW2IHtj/asvwwCyfd/fwrXLLncfvuyRiTU5Th/jy2AdCg8L+AE8mKf+Zz0teHOjQP\\nb0MEyUXt/45xVh/bWI9M+XfiwHwqj3WrN/n8rGh6tHwDtdmb3QIpSoDweWvI57By\\ncUWjv6eBfR9CUN8JUP5jk19T2GL5N/q3wFQzAgfAET3s9YwsT8AoEVI1U+5A9OAD\\nijSqxjJgq/8Jw+kzc+Eny/ifk07L8+M/xkT6P9GXy9MkmzcIeQwlhG7gOhQNdEns\\nW+NoIyLnAfKJENoUaruhTX/30ta4On0GsTYsuhTN5WVm7hk9HgmSkX+2fLYsL7Wd\\nj2qb3ueTAgMBAAECggEAS8QaMoCjmg5NDvktNv+wjGexNlF+4Mo5Feq44ps9nLFm\\nzJg9igDZqbEX+Pe6zicaBeoN4IKD9VlgrDo9gZAcDXptJQTRPgkpWgzlxwo7k5Y3\\n4u8/SaRrK30rgSANkKbD0lQfKfibBXDvpQt2VHSlLq0c7Jb8SPDAdnHRSePRyNvQ\\nuw3sVTEZc7EJhj0iMn6fDUHXtc2VHHQ9rA80NJM60jSp01MtTsVLG+QiyF5kj1RO\\nMa4aOtlvfJo4nIQz7jK1FOlalXW7XxDaKO6/DtvjZtJxHwaMwqWcpfiF4Cngb7n+\\nONz2BpbNncT4IRyA4H+jwddW52005rK0K+bT9Cxe4QKBgQDzB/+prTHVA99B0dXh\\nlbxkE3prx1eUh6MRawR5Avbd64pUUIXOwasHHY/NrKM3QdtD/vAUPM8aV/7UDP4G\\nr8X3geKMSl7TdSVZCL+iC6QOKZJy3CjS6HXm+FPh6n+90bJhih6YigQfwwhlYDux\\nyc87QW0V6a9UrGluaF3fYI+/jQKBgQDHuhayPAOXYCoJBEMgo/DCSz7BSUuo4qMU\\nO7meXs/sHqSoaq1XiqrDlXv0tbFdC7Xf/I/Y1GV4gofuQG2s+tRJABWhsBc5+pu5\\nnuZGd8zBHRmNqNfNhhokCnvUAYSsLn6WKQ8gg5PbvOhwOmwoXooo+tBqSALeeDtS\\nNYQg4mNrnwKBgQC1WOeerj08DXqfu7uUbE46gwpbuFES5S96RNf+kIazzBnZlohy\\nYrODSLzQpZzZE8xQ7cAp6cJEjxr5EoTPaoQXj5UESE6ADa8Dw/JzMaqGYuED0mKo\\nFow8AFtffcM6Wmp4PD9eZcZ0CO2P8AI7RTLcrZJ/wnNxhIHbwAckMwKw1QKBgAtQ\\nxrJoZgewghEqtabmwuAvJSoMPgYeeQDPdW+8jWkiP0/vY0y/ZXdZQ8GUfaz42eAL\\nzhaJygnu00azTcNsHpTYNWGIuXgmc6Yrk35QkUArpuP4uelB/L8n/OYBBARBShi1\\n0M6Vxc3AQScCmFgdKxSxSReMZuU1yJ6au5alXN6fAoGBAL82tPnKXWln39lVGzeZ\\n9KpxCVVmvNUAFIqYENgd6BxY6ATGrMSmRhyCZvMRPmEiO4ENpaqBxT6EaIwcK4B5\\nEQHI5vZ/w80bEfN8FL6Zs8hFtktSK91LSkQZiU9FUjRg+9D5hxKhKk1BHY7YZ+a5\\nZptgNEAnX80WqXflRcWPJV5h\\n-----END PRIVATE KEY-----\\n\",\"client_email\":\"firebase-adminsdk-2excy@mydailystatus-911b5.iam.gserviceaccount.com\",\"client_id\":\"116169814318690146663\",\"auth_uri\":\"https://accounts.google.com/o/oauth2/auth\",\"token_uri\":\"https://oauth2.googleapis.com/token\",\"auth_provider_x509_cert_url\":\"https://www.googleapis.com/oauth2/v1/certs\",\"client_x509_cert_url\":\"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-2excy%40mydailystatus-911b5.iam.gserviceaccount.com\"}");

/***/ }),

/***/ "./lib/auth0.js":
/*!**********************!*\
  !*** ./lib/auth0.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ "@auth0/nextjs-auth0");
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__["initAuth0"])({
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  scope: process.env.AUTH0_SCOPE,
  domain: process.env.AUTH0_DOMAIN,
  redirectUri: process.env.AUTH0_REDIRECT_URI,
  postLogoutRedirectUri: process.env.AUTH0_LOGOUT_REDIRECT_URI,
  session: {
    cookieSecret: process.env.AUTH0_SESSION_SECRET,
    cookieLifetime: process.env.AUTH0_SESSION_COOKIE_TIME
  }
}));

/***/ }),

/***/ "./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const admin = __webpack_require__(/*! firebase-admin */ "firebase-admin");

const secret = __webpack_require__(/*! ../firebase-secret.json */ "./firebase-secret.json");

const {
  GeoFirestore
} = __webpack_require__(/*! geofirestore */ "geofirestore");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(secret)
  });
}

const firestore = admin.firestore();
const db = new GeoFirestore(firestore);
module.exports = {
  db
};

/***/ }),

/***/ "./lib/geo.js":
/*!********************!*\
  !*** ./lib/geo.js ***!
  \********************/
/*! exports provided: distance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
// Converts numeric degrees to radians
function toRad(Value) {
  return Value * Math.PI / 180;
} //This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)


function distance(lat1, lon1, lat2, lon2) {
  var R = 6371; // km

  var dLat = toRad(lat2 - lat1);
  var dLon = toRad(lon2 - lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
}

/***/ }),

/***/ "./pages/app.js":
/*!**********************!*\
  !*** ./pages/app.js ***!
  \**********************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_auth0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/auth0 */ "./lib/auth0.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/db */ "./lib/db.js");
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_db__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_geo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/geo */ "./lib/geo.js");
var _jsxFileName = "/home/everaldo/Projects/mydailystatus/pages/app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const App = props => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!props.pageProps.isAuth) {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');
    } else if (props.pageProps.forceCreate) {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/create-status');
    }
  }); // if(!props.pageProps.isAuth || !props.pageProps.forceCreate){
  //   return null
  // }

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, "Status pr\xF3ximos a voc\xEA:"), __jsx("table", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, props.pageProps.checkins.map(checkin => {
    return __jsx("tr", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }
    }, __jsx("td", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 15
      }
    }, checkin.id === props.pageProps.user.sub && 'Seu status: '), __jsx("td", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 15
      }
    }, checkin.status), __jsx("td", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 15
      }
    }, JSON.stringify(checkin.coords)), __jsx("td", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 15
      }
    }, checkin.distance));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (App);
async function getServerSideProps({
  req,
  res
}) {
  const session = await _lib_auth0__WEBPACK_IMPORTED_MODULE_1__["default"].getSession(req);
  const today = new Date();
  const currentDate = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate();

  if (session) {
    const todaysCheckin = await _lib_db__WEBPACK_IMPORTED_MODULE_3__["db"].collection('markers').doc(currentDate).collection('checks').doc(session.user.sub).get();
    const todaysData = todaysCheckin.data();
    let forceCreate = true;

    if (todaysData) {
      forceCreate = false;
      const checkins = await _lib_db__WEBPACK_IMPORTED_MODULE_3__["db"].collection('markers').doc(currentDate).collection('checks').near({
        center: todaysData.coordinates,
        radius: 1000
      }).get();
      const checkinsList = [];
      checkins.docs.forEach(doc => {
        checkinsList.push({
          id: doc.id,
          status: doc.data().status,
          coords: {
            lat: doc.data().coordinates.latitude,
            long: doc.data().coordinates.longitude
          },
          distance: Object(_lib_geo__WEBPACK_IMPORTED_MODULE_4__["distance"])(todaysData.coordinates.latitude, // -23.967445, //
          todaysData.coordinates.longitude, // -46.332835, //
          doc.data().coordinates.latitude, doc.data().coordinates.longitude).toFixed(2)
        });
      });
      return {
        props: {
          isAuth: true,
          user: session.user,
          forceCreate: false,
          checkins: checkinsList
        }
      };
    }

    return {
      props: {
        isAuth: true,
        user: session.user,
        forceCreate
      }
    };
  }

  return {
    props: {
      isAuth: false,
      user: {}
    }
  };
}

/***/ }),

/***/ 5:
/*!****************************!*\
  !*** multi ./pages/app.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/everaldo/Projects/mydailystatus/pages/app.js */"./pages/app.js");


/***/ }),

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@auth0/nextjs-auth0");

/***/ }),

/***/ "firebase-admin":
/*!*********************************!*\
  !*** external "firebase-admin" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase-admin");

/***/ }),

/***/ "geofirestore":
/*!*******************************!*\
  !*** external "geofirestore" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("geofirestore");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=app.js.map