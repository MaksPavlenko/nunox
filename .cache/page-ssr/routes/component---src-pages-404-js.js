exports.id = "component---src-pages-404-js";
exports.ids = ["component---src-pages-404-js"];
exports.modules = {

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"]);

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache(nodeInterop);

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/gatsby-plugin-react-i18next/dist/Helmet.js":
/*!*****************************************************************!*\
  !*** ./node_modules/gatsby-plugin-react-i18next/dist/Helmet.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Helmet = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactHelmet = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");

var _useI18next2 = __webpack_require__(/*! ./useI18next */ "./node_modules/gatsby-plugin-react-i18next/dist/useI18next.js");

var _excluded = ["children"];

var Helmet = function Helmet(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);

  var _useI18next = (0, _useI18next2.useI18next)(),
      languages = _useI18next.languages,
      language = _useI18next.language,
      originalPath = _useI18next.originalPath,
      defaultLanguage = _useI18next.defaultLanguage,
      _useI18next$siteUrl = _useI18next.siteUrl,
      siteUrl = _useI18next$siteUrl === void 0 ? '' : _useI18next$siteUrl;

  var createUrlWithLang = function createUrlWithLang(lng) {
    var url = "" + siteUrl + (lng === defaultLanguage ? '' : "/" + lng) + originalPath;
    return url.endsWith('/') ? url : url + "/";
  };

  return /*#__PURE__*/_react.default.createElement(_reactHelmet.Helmet, props, /*#__PURE__*/_react.default.createElement("html", {
    lang: language
  }), /*#__PURE__*/_react.default.createElement("link", {
    rel: "canonical",
    href: createUrlWithLang(language)
  }), languages.map(function (lng) {
    return /*#__PURE__*/_react.default.createElement("link", {
      rel: "alternate",
      key: lng,
      href: createUrlWithLang(lng),
      hrefLang: lng
    });
  }), /*#__PURE__*/_react.default.createElement("link", {
    rel: "alternate",
    href: createUrlWithLang(defaultLanguage),
    hrefLang: "x-default"
  }), children);
};

exports.Helmet = Helmet;

/***/ }),

/***/ "./node_modules/gatsby-plugin-react-i18next/dist/Link.js":
/*!***************************************************************!*\
  !*** ./node_modules/gatsby-plugin-react-i18next/dist/Link.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.Link = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _i18nextContext = __webpack_require__(/*! ./i18nextContext */ "./node_modules/gatsby-plugin-react-i18next/dist/i18nextContext.js");

var _gatsby = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");

var _types = __webpack_require__(/*! ./types */ "./node_modules/gatsby-plugin-react-i18next/dist/types.js");

var _excluded = ["language", "to", "onClick"];

var Link = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var language = _ref.language,
      to = _ref.to,
      _onClick = _ref.onClick,
      rest = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  var context = (0, _react.useContext)(_i18nextContext.I18nextContext);
  var urlLanguage = language || context.language;

  var getLanguagePath = function getLanguagePath(language) {
    return context.generateDefaultLanguagePage || language !== context.defaultLanguage ? "/" + language : '';
  };

  var link = "" + getLanguagePath(urlLanguage) + to;
  return (
    /*#__PURE__*/
    // @ts-ignore
    _react.default.createElement(_gatsby.Link, (0, _extends2.default)({}, rest, {
      to: link,
      innerRef: ref,
      hrefLang: urlLanguage,
      onClick: function onClick(e) {
        if (language) {
          localStorage.setItem(_types.LANGUAGE_KEY, language);
        }

        if (_onClick) {
          _onClick(e);
        }
      }
    }))
  );
});

exports.Link = Link;

/***/ }),

/***/ "./node_modules/gatsby-plugin-react-i18next/dist/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/gatsby-plugin-react-i18next/dist/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;

var _reactI18next = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");

Object.keys(_reactI18next).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _reactI18next[key]) return;
  exports[key] = _reactI18next[key];
});

var _i18nextContext = __webpack_require__(/*! ./i18nextContext */ "./node_modules/gatsby-plugin-react-i18next/dist/i18nextContext.js");

Object.keys(_i18nextContext).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _i18nextContext[key]) return;
  exports[key] = _i18nextContext[key];
});

var _useI18next = __webpack_require__(/*! ./useI18next */ "./node_modules/gatsby-plugin-react-i18next/dist/useI18next.js");

Object.keys(_useI18next).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useI18next[key]) return;
  exports[key] = _useI18next[key];
});

var _Link = __webpack_require__(/*! ./Link */ "./node_modules/gatsby-plugin-react-i18next/dist/Link.js");

Object.keys(_Link).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Link[key]) return;
  exports[key] = _Link[key];
});

var _Helmet = __webpack_require__(/*! ./Helmet */ "./node_modules/gatsby-plugin-react-i18next/dist/Helmet.js");

Object.keys(_Helmet).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Helmet[key]) return;
  exports[key] = _Helmet[key];
});

/***/ }),

/***/ "./node_modules/gatsby-plugin-react-i18next/dist/useI18next.js":
/*!*********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-react-i18next/dist/useI18next.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useI18next = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _reactI18next = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");

var _react = __webpack_require__(/*! react */ "react");

var _gatsby = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");

var _i18nextContext = __webpack_require__(/*! ./i18nextContext */ "./node_modules/gatsby-plugin-react-i18next/dist/i18nextContext.js");

var _types = __webpack_require__(/*! ./types */ "./node_modules/gatsby-plugin-react-i18next/dist/types.js");

var useI18next = function useI18next(ns, options) {
  var _useTranslation = (0, _reactI18next.useTranslation)(ns, options),
      i18n = _useTranslation.i18n,
      t = _useTranslation.t,
      ready = _useTranslation.ready;

  var context = (0, _react.useContext)(_i18nextContext.I18nextContext);
  var routed = context.routed,
      defaultLanguage = context.defaultLanguage,
      generateDefaultLanguagePage = context.generateDefaultLanguagePage;

  var getLanguagePath = function getLanguagePath(language) {
    return generateDefaultLanguagePage || language !== defaultLanguage ? "/" + language : '';
  };

  var removePrefix = function removePrefix(pathname) {
    var base =  true ? "" : 0;

    if (base && pathname.indexOf(base) === 0) {
      pathname = pathname.slice(base.length);
    }

    return pathname;
  };

  var removeLocalePart = function removeLocalePart(pathname) {
    if (!routed) return pathname;
    var i = pathname.indexOf("/", 1);
    return pathname.substring(i);
  };

  var navigate = function navigate(to, options) {
    var languagePath = getLanguagePath(context.language);
    var link = routed ? "" + languagePath + to : "" + to;
    return (0, _gatsby.navigate)(link, options);
  };

  var changeLanguage = function changeLanguage(language, to, options) {
    var languagePath = getLanguagePath(language);
    var pathname = to || removeLocalePart(removePrefix(window.location.pathname));
    var link = "" + languagePath + pathname + window.location.search;
    localStorage.setItem(_types.LANGUAGE_KEY, language);
    return (0, _gatsby.navigate)(link, options);
  };

  return (0, _extends2.default)({}, context, {
    i18n: i18n,
    t: t,
    ready: ready,
    navigate: navigate,
    changeLanguage: changeLanguage
  });
};

exports.useI18next = useI18next;

/***/ }),

/***/ "./node_modules/gatsby-plugin-react-i18next/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/gatsby-plugin-react-i18next/index.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist */ "./node_modules/gatsby-plugin-react-i18next/dist/index.js");

/***/ }),

/***/ "./src/components/Layout/Footer/Footer.jsx":
/*!*************************************************!*\
  !*** ./src/components/Layout/Footer/Footer.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _FooterLogo_FooterLogo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FooterLogo/FooterLogo */ "./src/components/Layout/Footer/FooterLogo/FooterLogo.jsx");
/* harmony import */ var _FooterMenu_FooterMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FooterMenu/FooterMenu */ "./src/components/Layout/Footer/FooterMenu/FooterMenu.jsx");
/* harmony import */ var _FooterServices_FooterServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FooterServices/FooterServices */ "./src/components/Layout/Footer/FooterServices/FooterServices.jsx");
/* harmony import */ var _FooterContacts_FooterContacts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FooterContacts/FooterContacts */ "./src/components/Layout/Footer/FooterContacts/FooterContacts.jsx");







const Footer = ({
  menu,
  footerServices,
  contacts
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", {
    className: "footer",
    id: "contacts"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "page-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footer-items"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FooterLogo_FooterLogo__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FooterMenu_FooterMenu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    menu: menu
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FooterServices_FooterServices__WEBPACK_IMPORTED_MODULE_3__["default"], {
    services: footerServices
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FooterContacts_FooterContacts__WEBPACK_IMPORTED_MODULE_4__["default"], {
    contacts: contacts
  }))));
};

Footer.propTypes = {
  menu: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().array),
  footerServices: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().array),
  contacts: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/components/Layout/Footer/FooterContacts/FooterContacts.jsx":
/*!************************************************************************!*\
  !*** ./src/components/Layout/Footer/FooterContacts/FooterContacts.jsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../hooks/useLanguage */ "./src/hooks/useLanguage.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




const FooterContacts = ({
  contacts
}) => {
  const phone = (0,_hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__.useLanguage)(contacts.phoneUa, contacts.phoneUa, contacts.phoneIt, contacts.phoneUa);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footer-contacts__wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "footer-marker"
  }, (0,_hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__.useLanguage)('Контакти', 'Contacts', 'Contatti', 'Контакты')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "footer-contacts"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "footer-contacts__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "footer-contacts__address"
  }, (0,_hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__.useLanguage)(contacts.addressUa, contacts.addressEn, contacts.addressIt, contacts.addressRu))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "footer-contacts__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "footer-contacts__item--marker"
  }, (0,_hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__.useLanguage)('Тел:', 'No:', 'Tel:', 'Тел:')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: `tel:` + phone.toString().replace(/[- )(]/g, ''),
    className: "footer-contacts__phone footer-contacts__link"
  }, phone)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "footer-contacts__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "footer-contacts__item--marker"
  }, (0,_hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__.useLanguage)('Mail:', 'Mail:', 'Mail:', 'Mail:')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: 'mailto:' + contacts.mail,
    className: "footer-contacts__mail footer-contacts__link"
  }, contacts.mail))));
};

FooterContacts.propTypes = {
  contacts: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterContacts);

/***/ }),

/***/ "./src/components/Layout/Footer/FooterLogo/FooterLogo.jsx":
/*!****************************************************************!*\
  !*** ./src/components/Layout/Footer/FooterLogo/FooterLogo.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_HeaderLogo_HeaderLogo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Header/HeaderLogo/HeaderLogo */ "./src/components/Layout/Header/HeaderLogo/HeaderLogo.jsx");
/* harmony import */ var _svg_behance_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../svg/behance.svg */ "./src/svg/behance.svg");
/* harmony import */ var _svg_behance_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_svg_behance_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _svg_facebook_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../svg/facebook.svg */ "./src/svg/facebook.svg");
/* harmony import */ var _svg_facebook_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_svg_facebook_svg__WEBPACK_IMPORTED_MODULE_3__);





const FooterLogo = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footer-logo__wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Header_HeaderLogo_HeaderLogo__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "footer-socials"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "footer-social__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.facebook.com/nunox.co/",
    target: "blank",
    className: "footer-social__link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_svg_facebook_svg__WEBPACK_IMPORTED_MODULE_3___default()), {
    className: "footer-social__link--icon"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "footer-social__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.behance.net/nunoxagency/",
    target: "blank",
    className: "footer-social__link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_svg_behance_svg__WEBPACK_IMPORTED_MODULE_2___default()), {
    className: "footer-social__link--icon"
  })))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterLogo);

/***/ }),

/***/ "./src/components/Layout/Footer/FooterMenu/FooterMenu.jsx":
/*!****************************************************************!*\
  !*** ./src/components/Layout/Footer/FooterMenu/FooterMenu.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../hooks/useLanguage */ "./src/hooks/useLanguage.js");
/* harmony import */ var _FooterMenuItem_FooterMenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FooterMenuItem/FooterMenuItem */ "./src/components/Layout/Footer/FooterMenu/FooterMenuItem/FooterMenuItem.jsx");





const FooterMenu = ({
  menu
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footer-menu__wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "footer-marker"
  }, (0,_hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__.useLanguage)('Навігація', 'Navigation', 'Navigazione', 'Навигация')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "footer-menu"
  }, menu.map((item, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FooterMenuItem_FooterMenuItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: index,
      item: item
    });
  })));
};

FooterMenu.propTypes = {
  menu: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterMenu);

/***/ }),

/***/ "./src/components/Layout/Footer/FooterMenu/FooterMenuItem/FooterMenuItem.jsx":
/*!***********************************************************************************!*\
  !*** ./src/components/Layout/Footer/FooterMenu/FooterMenuItem/FooterMenuItem.jsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby-plugin-react-i18next */ "./node_modules/gatsby-plugin-react-i18next/index.js");
/* harmony import */ var gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../hooks/useLanguage */ "./src/hooks/useLanguage.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);





const FooterMenuItem = ({
  item
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "footer-menu__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: item.link,
    className: "footer-menu__item--link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "footer-menu__item--title"
  }, (0,_hooks_useLanguage__WEBPACK_IMPORTED_MODULE_2__.useLanguage)(item.title_ua, item.title_en, item.title_it, item.title_ru))));
};

FooterMenuItem.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterMenuItem);

/***/ }),

/***/ "./src/components/Layout/Footer/FooterServices/FooterServices.jsx":
/*!************************************************************************!*\
  !*** ./src/components/Layout/Footer/FooterServices/FooterServices.jsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../hooks/useLanguage */ "./src/hooks/useLanguage.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _FooterServicesItem_FooterServicesItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FooterServicesItem/FooterServicesItem */ "./src/components/Layout/Footer/FooterServices/FooterServicesItem/FooterServicesItem.jsx");





const FooterServices = ({
  services
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footer-services__wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "footer-marker"
  }, (0,_hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__.useLanguage)('Послуги', 'Services', 'Servizi', 'Услуги')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "footer-services"
  }, services.map((item, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FooterServicesItem_FooterServicesItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      item: item,
      key: index
    });
  })));
};

FooterServices.propTypes = {
  services: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterServices);

/***/ }),

/***/ "./src/components/Layout/Footer/FooterServices/FooterServicesItem/FooterServicesItem.jsx":
/*!***********************************************************************************************!*\
  !*** ./src/components/Layout/Footer/FooterServices/FooterServicesItem/FooterServicesItem.jsx ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../hooks/useLanguage */ "./src/hooks/useLanguage.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




const FooterServicesItem = ({
  item
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "footer-services__item"
  }, (0,_hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__.useLanguage)(item.titleUa, item.titleEn, item.titleIt, item.titleRu));
};

FooterServicesItem.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterServicesItem);

/***/ }),

/***/ "./src/components/Layout/Header/Burger/Burger.jsx":
/*!********************************************************!*\
  !*** ./src/components/Layout/Header/Burger/Burger.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



const Burger = ({
  openMenu
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "burger",
    onClick: openMenu,
    "aria-label": "open menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "burger__line line-1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "burger__line line-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "burger__line line-3"
  }));
};

Burger.propTypes = {
  openMenu: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Burger);

/***/ }),

/***/ "./src/components/Layout/Header/Header.jsx":
/*!*************************************************!*\
  !*** ./src/components/Layout/Header/Header.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hooks_useScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/useScroll */ "./src/hooks/useScroll.js");
/* harmony import */ var _HeaderLogo_HeaderLogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeaderLogo/HeaderLogo */ "./src/components/Layout/Header/HeaderLogo/HeaderLogo.jsx");
/* harmony import */ var _HeaderMenu_HeaderMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderMenu/HeaderMenu */ "./src/components/Layout/Header/HeaderMenu/HeaderMenu.jsx");
/* harmony import */ var _Burger_Burger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Burger/Burger */ "./src/components/Layout/Header/Burger/Burger.jsx");
/* harmony import */ var _Navigation_Navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Navigation/Navigation */ "./src/components/Layout/Header/Navigation/Navigation.jsx");








const Header = ({
  menu
}) => {
  const [activeHeader, setActiveHeader] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);

  function openMenu() {
    setOpen(!open);
  }

  function closeMenu() {
    setOpen(false);
  }

  const changePosition = 60;
  let scroll = (0,_hooks_useScroll__WEBPACK_IMPORTED_MODULE_1__["default"])();

  if (scroll > changePosition && !activeHeader) {
    setActiveHeader(true);
  }

  if (scroll <= changePosition && activeHeader) {
    setActiveHeader(false);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    className: activeHeader ? 'header is-active' : 'header'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Burger_Burger__WEBPACK_IMPORTED_MODULE_4__["default"], {
    openMenu: openMenu
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "page-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "header-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HeaderLogo_HeaderLogo__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HeaderMenu_HeaderMenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    menu: menu
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_5__["default"], {
    menu: menu,
    closeMenu: closeMenu,
    open: open
  }));
};

Header.propTypes = {
  menu: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().array)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/components/Layout/Header/HeaderLogo/HeaderLogo.jsx":
/*!****************************************************************!*\
  !*** ./src/components/Layout/Header/HeaderLogo/HeaderLogo.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby-plugin-react-i18next */ "./node_modules/gatsby-plugin-react-i18next/index.js");
/* harmony import */ var gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _svg_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../svg/logo.svg */ "./src/svg/logo.svg");
/* harmony import */ var _svg_logo_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_svg_logo_svg__WEBPACK_IMPORTED_MODULE_2__);




const HeaderLogo = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__.Link, {
  to: "/",
  className: "logo-link"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_svg_logo_svg__WEBPACK_IMPORTED_MODULE_2___default()), {
  className: "logo"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__.Link, {
  to: "/",
  className: "logo-link--mob"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "logo--mob"
}, "nunox")));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderLogo);

/***/ }),

/***/ "./src/components/Layout/Header/HeaderMenu/HeaderMenu.jsx":
/*!****************************************************************!*\
  !*** ./src/components/Layout/Header/HeaderMenu/HeaderMenu.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby-plugin-react-i18next */ "./node_modules/gatsby-plugin-react-i18next/index.js");
/* harmony import */ var gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../hooks/useLanguage */ "./src/hooks/useLanguage.js");
/* harmony import */ var _Ui_Language_Language__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Ui/Language/Language */ "./src/components/Ui/Language/Language.jsx");



 // import { scroller } from 'react-scroll';



const HeaderMenu = ({
  menu
}) => {
  const langToggle = _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_2__.useLanguage; // function scrollToSection() {
  //   scroller.scrollTo(menu.link, {
  //     duration: 800,
  //     delay: 0,
  //     smooth: 'easeInOutQuart',
  //   });
  // }
  // console.log(menu.link);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: "navigation-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "navigation-list"
  }, menu.map((item, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      className: "navigation-item",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: item.link,
      className: "navigation-link" // onClick={scrollToSection}

    }, langToggle(item.title_ua, item.title_en, item.title_it, item.title_ru)));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Ui_Language_Language__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

HeaderMenu.propTypes = {
  menu: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().array)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderMenu);

/***/ }),

/***/ "./src/components/Layout/Header/Navigation/Navigation.jsx":
/*!****************************************************************!*\
  !*** ./src/components/Layout/Header/Navigation/Navigation.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby-plugin-react-i18next */ "./node_modules/gatsby-plugin-react-i18next/index.js");
/* harmony import */ var gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../hooks/useLanguage */ "./src/hooks/useLanguage.js");
/* harmony import */ var _Ui_Language_Language__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Ui/Language/Language */ "./src/components/Ui/Language/Language.jsx");






const Navigation = ({
  closeMenu,
  menu,
  open
}) => {
  const langToggle = _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_2__.useLanguage;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: open ? 'navigation-mob is-open' : 'navigation-mob'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: "navigation_mob-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "navigation_mob-list"
  }, menu.map((item, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      className: "navigation_mob-item",
      key: index,
      role: "presentation",
      onClick: closeMenu
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: item.link,
      className: "navigation_mob-link"
    }, langToggle(item.title_ua, item.title_en, item.title_it, item.title_ru)));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Ui_Language_Language__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
};

Navigation.propTypes = {
  closeMenu: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),
  menu: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().array),
  open: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navigation);

/***/ }),

/***/ "./src/components/Layout/index.js":
/*!****************************************!*\
  !*** ./src/components/Layout/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": () => (/* reexport safe */ _Header_Header__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "Footer": () => (/* reexport safe */ _Footer_Footer__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header/Header */ "./src/components/Layout/Header/Header.jsx");
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer/Footer */ "./src/components/Layout/Footer/Footer.jsx");



/***/ }),

/***/ "./src/components/Layout/layout.js":
/*!*****************************************!*\
  !*** ./src/components/Layout/layout.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_901802533_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/page-data/sq/d/901802533.json */ "./public/page-data/sq/d/901802533.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./src/components/Layout/index.js");
/* harmony import */ var _db_menuData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../db/menuData */ "./src/db/menuData.js");







const Layout = ({
  children
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.StaticQuery, {
    query: "901802533",
    render: data => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "app-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_index__WEBPACK_IMPORTED_MODULE_3__.Header, {
      menu: _db_menuData__WEBPACK_IMPORTED_MODULE_4__.menuData
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("main", null, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_index__WEBPACK_IMPORTED_MODULE_3__.Footer, {
      menu: _db_menuData__WEBPACK_IMPORTED_MODULE_4__.footerMenu,
      footerServices: data.allContentfulFoterServices.nodes,
      contacts: data.contentfulContacts
    })),
    data: _public_page_data_sq_d_901802533_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

Layout.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().node.isRequired),
  contacts: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/components/Ui/Language/Language.jsx":
/*!*************************************************!*\
  !*** ./src/components/Ui/Language/Language.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby-plugin-react-i18next */ "./node_modules/gatsby-plugin-react-i18next/index.js");
/* harmony import */ var gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__);



const Language = () => {
  const {
    languages,
    originalPath
  } = (0,gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__.useI18next)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "language"
  }, languages.map(lng => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    key: lng,
    className: "language-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "language-item__link",
    to: originalPath,
    language: lng
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "language-item__title"
  }, lng)))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Language);

/***/ }),

/***/ "./src/components/seo.js":
/*!*******************************!*\
  !*** ./src/components/seo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_63159454_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/63159454.json */ "./public/page-data/sq/d/63159454.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-plugin-react-i18next */ "./node_modules/gatsby-plugin-react-i18next/index.js");
/* harmony import */ var gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_2__);


/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */




function Seo({
  description,
  meta,
  title
}) {
  const {
    site
  } = _public_page_data_sq_d_63159454_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const metaDescription = description || site.siteMetadata.description;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_2__.Helmet, {
    title: title,
    titleTemplate: `%s | ${site.siteMetadata.title}`,
    meta: [{
      name: `description`,
      content: metaDescription
    }, {
      property: `og:title`,
      content: title
    }, {
      property: `og:description`,
      content: metaDescription
    }, {
      property: `og:type`,
      content: `website`
    }, {
      name: `twitter:card`,
      content: `summary`
    }, {
      name: `twitter:creator`,
      content: site.siteMetadata.author
    }, {
      name: `twitter:title`,
      content: title
    }, {
      name: `twitter:description`,
      content: metaDescription
    }].concat(meta)
  });
}

Seo.defaultProps = {
  meta: [],
  description: ``
};
Seo.propTypes = {
  description: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  lang: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  meta: prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ }),

/***/ "./src/db/menuData.js":
/*!****************************!*\
  !*** ./src/db/menuData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuData": () => (/* binding */ menuData),
/* harmony export */   "footerMenu": () => (/* binding */ footerMenu)
/* harmony export */ });
const menuData = [{
  link: '/#cases',
  title_ua: 'Кейси',
  title_en: 'Cases',
  title_it: 'Portfolio',
  title_ru: 'Кейсы'
}, {
  link: '/#philosophie',
  title_ua: 'Філософія',
  title_en: 'Philosophy',
  title_it: 'Filosofia',
  title_ru: 'Философия'
}, {
  link: '/#about',
  title_ua: 'Про нас',
  title_en: 'About us',
  title_it: 'Chi siamo',
  title_ru: 'О нас'
}, {
  link: '/#partners',
  title_ua: 'Партнери',
  title_en: 'Partners',
  title_it: 'Partner',
  title_ru: 'Партнеры'
}, {
  link: '/#contacts',
  title_ua: 'Контакти',
  title_en: 'Contacts',
  title_it: 'Contacts',
  title_ru: 'Контакты'
}];
const footerMenu = [{
  link: '/',
  title_ua: 'Головна',
  title_en: 'Home',
  title_it: 'Casa',
  title_ru: 'Главная'
}, {
  link: '/#cases',
  title_ua: 'Кейси',
  title_en: 'Cases',
  title_it: 'Portfolio',
  title_ru: 'Кейсы'
}, {
  link: '/#philosophie',
  title_ua: 'Філософія',
  title_en: 'Philosophy',
  title_it: 'Filosofia',
  title_ru: 'Философия'
}, {
  link: '/#about',
  title_ua: 'Про нас',
  title_en: 'About us',
  title_it: 'Chi siamo',
  title_ru: 'О нас'
}];

/***/ }),

/***/ "./src/hooks/useLanguage.js":
/*!**********************************!*\
  !*** ./src/hooks/useLanguage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useLanguage": () => (/* binding */ useLanguage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby-plugin-react-i18next */ "./node_modules/gatsby-plugin-react-i18next/index.js");
/* harmony import */ var gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__);


const useLanguage = (ukr, eng, itl, rus) => {
  const {
    i18n: {
      language
    }
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__.I18nContext);

  if (language === 'ua') {
    return ukr;
  } else if (language === 'ru') {
    return rus;
  } else if (language === 'it') {
    return itl;
  } else {
    return eng;
  }
};

/***/ }),

/***/ "./src/hooks/useScroll.js":
/*!********************************!*\
  !*** ./src/hooks/useScroll.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useScroll)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useScroll() {
  const {
    0: scrollY,
    1: setScrollY
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);

  function logit() {
    setScrollY(window.pageYOffset);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    function watchScroll() {
      window.addEventListener('scroll', logit);
    }

    watchScroll();
    return () => {
      window.removeEventListener('scroll', logit);
    };
  });
  return scrollY;
}

/***/ }),

/***/ "./src/pages/404.js":
/*!**************************!*\
  !*** ./src/pages/404.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout/layout */ "./src/components/Layout/layout.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/seo */ "./src/components/seo.js");




const NotFoundPage = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Layout_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_2__["default"], {
  title: "404: Not found"
}));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFoundPage);
const query = "2059891297";

/***/ }),

/***/ "./src/svg/behance.svg":
/*!*****************************!*\
  !*** ./src/svg/behance.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function Behance (props) {
    return React.createElement("svg",props,[React.createElement("g",{"clipPath":"url(#clip0_725_3)","key":0},React.createElement("path",{"d":"M22 7H15V5H22V7ZM23.726 17C23.284 18.297 21.697 20 18.625 20C15.551 20 13.061 18.271 13.061 14.325C13.061 10.415 15.386 8.405 18.527 8.405C21.609 8.405 23.491 10.187 23.902 12.831C23.98 13.337 24.011 14.019 23.997 14.971H15.97C16.1 18.182 19.453 18.283 20.558 17H23.726ZM16.04 13H21.005C20.9 11.453 19.869 10.781 18.528 10.781C17.062 10.781 16.251 11.549 16.04 13ZM6.466 19.988H0V5.021H6.953C12.429 5.102 12.533 10.465 9.673 11.927C13.134 13.187 13.25 19.988 6.466 19.988V19.988ZM3 11H6.584C9.092 11 9.49 8 6.272 8H3V11ZM6.391 14H3V17.016H6.341C9.396 17.016 9.209 14 6.391 14V14Z","fill":"#FCFCFC"})),React.createElement("defs",{"key":1},React.createElement("clipPath",{"id":"clip0_725_3"},React.createElement("rect",{"width":"24","height":"24","fill":"white"})))]);
}

Behance.defaultProps = {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none"};

module.exports = Behance;

Behance.default = Behance;


/***/ }),

/***/ "./src/svg/facebook.svg":
/*!******************************!*\
  !*** ./src/svg/facebook.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function Facebook (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"M17 4.44955C17 4.33172 16.9521 4.21871 16.8669 4.13539C16.7816 4.05206 16.666 4.00525 16.5455 4.00525H14.2727C13.1283 3.94953 12.0078 4.33883 11.1561 5.08808C10.3044 5.83734 9.79071 6.88564 9.72727 8.00394V10.4032H7.45455C7.33399 10.4032 7.21838 10.45 7.13313 10.5333C7.04789 10.6166 7 10.7296 7 10.8475V13.1578C7 13.2756 7.04789 13.3886 7.13313 13.472C7.21838 13.5553 7.33399 13.6021 7.45455 13.6021H9.72727V19.5557C9.72727 19.6735 9.77516 19.7865 9.86041 19.8699C9.94565 19.9532 10.0613 20 10.1818 20H12.9091C13.0296 20 13.1453 19.9532 13.2305 19.8699C13.3157 19.7865 13.3636 19.6735 13.3636 19.5557V13.6021H15.7455C15.8465 13.6035 15.9452 13.572 16.0259 13.5124C16.1066 13.4529 16.1646 13.3687 16.1909 13.2733L16.8455 10.963C16.8635 10.8973 16.866 10.8285 16.8526 10.7618C16.8392 10.6951 16.8103 10.6323 16.7681 10.5782C16.726 10.5241 16.6717 10.4802 16.6094 10.4499C16.5472 10.4195 16.4786 10.4035 16.4091 10.4032H13.3636V8.00394C13.3862 7.78399 13.4919 7.58018 13.66 7.4323C13.8281 7.28442 14.0466 7.2031 14.2727 7.2042H16.5455C16.666 7.2042 16.7816 7.15739 16.8669 7.07407C16.9521 6.99075 17 6.87774 17 6.7599V4.44955Z","fill":"#FCFCFC"}));
}

Facebook.defaultProps = {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none"};

module.exports = Facebook;

Facebook.default = Facebook;


/***/ }),

/***/ "./src/svg/logo.svg":
/*!**************************!*\
  !*** ./src/svg/logo.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function Logo (props) {
    return React.createElement("svg",props,[React.createElement("style",{"type":"text/css","key":0}," .st0{fill:#51B09A;} "),React.createElement("g",{"key":1},[React.createElement("path",{"className":"st0","d":"M66.6,18.1L57.2,6.3c-1.2-1.4-2.9-2.3-4.7-2.3h0h-9.3v11.1c0,3.5-2.5,6.5-5.9,6.5c-3.5,0-6-2.9-6-6.5V4.1h-9.3 h0C20.3,4.1,19,5.4,19,7v11.1L8.9,5.4C8.2,4.6,7.1,4.1,6,4.1h0c-2,0-3.7,1.6-3.7,3.7v16.2c0,1.5,1.2,2.7,2.7,2.7h0 c1.5,0,2.7-1.2,2.7-2.7V13.1l10.4,12.5c0.5,0.6,1.3,1,2.1,1h1.4c1.5,0,2.7-1.2,2.7-2.7V9.5h1.3v5.6c0,7.2,5.1,12.1,11.5,12.1 c6.4,0,11.4-4.8,11.4-12.1V9.5h1.3v14.4c0,1.5,1.2,2.7,2.7,2.7h0c1.5,0,2.7-1.2,2.7-2.7V13.1l10.4,12.5c0.5,0.6,1.3,1,2.1,1h1.4 c1.5,0,2.7-1.2,2.7-2.7V6.8c0-1.5-1.2-2.7-2.7-2.7h0c-1.5,0-2.7,1.2-2.7,2.7V18.1z","key":0}),React.createElement("path",{"className":"st0","d":"M85.6,3.5c-6.9-0.4-12.5,5.1-12.5,11.9c0,6.6,5.3,11.9,11.9,11.9c6.8,0,12.3-5.8,11.8-12.7 C96.4,8.6,91.5,3.8,85.6,3.5z M85.2,22c-3.8,0.1-6.9-2.9-6.9-6.7c0-3.7,3-6.7,6.7-6.7c3.8,0,6.9,3.3,6.6,7.2 C91.4,19.2,88.6,21.9,85.2,22z","key":1}),React.createElement("path",{"className":"st0","d":"M117.9,5L117.9,5c-1.2-1.2-3.2-1.2-4.4,0l-5.8,5.9l-6-5.9c-1.2-1.2-3.1-1.2-4.3,0l0,0c-1.2,1.2-1.2,3.2,0,4.4 l6,5.9l-6,6c-1.2,1.2-1.2,3.1,0,4.3l0,0c1.2,1.2,3.1,1.2,4.3,0l6-5.9l5.8,5.9c1.2,1.2,3.2,1.2,4.4,0l0,0c1.2-1.2,1.2-3.1,0-4.3 l-5.9-6l5.9-6C119.1,8.1,119.1,6.2,117.9,5z","key":2})])]);
}

Logo.defaultProps = {"id":"Layer_1","x":"0px","y":"0px","width":"120px","height":"30px","viewBox":"0 0 120 30","style":{"enableBackground":"new 0 0 120 30"},"xmlSpace":"preserve"};

module.exports = Logo;

Logo.default = Logo;


/***/ }),

/***/ "./public/page-data/sq/d/63159454.json":
/*!*********************************************!*\
  !*** ./public/page-data/sq/d/63159454.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Nunox","description":"Створюємо та розвиваємо бренди. Володіючи власними бізнесами ми пропонуємо підприємцям наш досвід.","author":"@nunox"}}}}');

/***/ }),

/***/ "./public/page-data/sq/d/901802533.json":
/*!**********************************************!*\
  !*** ./public/page-data/sq/d/901802533.json ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"allContentfulFoterServices":{"nodes":[{"titleEn":"BRAND POSITIONING","titleIt":"POSIZIONAMENTO DEL MARCHIO","titleRu":"ПОЗИЦИОНИРОВАНИЕ БРЕНДА","titleUa":"ПОЗИЦІОНУВАННЯ БРЕНДУ"},{"titleEn":"MARKETING STRATEGY","titleIt":"STRATEGIA DI MARKETING","titleRu":"МАРКЕТИНГОВА СТРАТЕГИЯ","titleUa":"МАРКЕТИНГОВА СТРАТЕГІЯ"},{"titleEn":"CONTENT MARKETING","titleIt":"CONTENT MARKETING","titleRu":"КОНТЕНТ МАРКЕТИНГ","titleUa":"КОНТЕНТ МАРКЕТИНГ"},{"titleEn":"DIGITAL MARKETING","titleIt":"MARKETING DIGITALE","titleRu":"DIGITTAL МАРКЕТИНГ","titleUa":"DIGITAL МАРКЕТИНГ"},{"titleEn":"CONSULTING","titleIt":"CONSULENZA","titleRu":"КОНСАЛТИНГ","titleUa":"КОНСАЛТИНГ"},{"titleEn":"INTERNET MARKETING","titleIt":"INTERNET MARKETING","titleRu":"ИНТЕРНЕТ МАРКЕТИНГ","titleUa":"ІНТЕРНЕТ МАРКЕТИНГ"}]},"contentfulContacts":{"addressUa":" Вул. Золотоустівська 34, оф. №6, Київ, Україна","addressEn":"St. Zlatoustovskaya, 34, of. #6, Kyiv, Ukraine","addressIt":" St. Zlatoustovskaya, 34, ufficio #6, Kiev, Ukraina","addressRu":"Ул. Златоустовская, 34, оф. №6, Киев, Украина","mail":"info@nunox.co","phoneUa":"+38 (093) 393 39 39","phoneIt":"+39 345 27 999 44"}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-404-js.js.map