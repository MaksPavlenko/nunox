exports.id = "component---src-pages-index-js";
exports.ids = ["component---src-pages-index-js"];
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

/***/ "./node_modules/camelcase/index.js":
/*!*****************************************!*\
  !*** ./node_modules/camelcase/index.js ***!
  \*****************************************/
/***/ ((module) => {

"use strict";


const preserveCamelCase = string => {
	let isLastCharLower = false;
	let isLastCharUpper = false;
	let isLastLastCharUpper = false;

	for (let i = 0; i < string.length; i++) {
		const character = string[i];

		if (isLastCharLower && /[a-zA-Z]/.test(character) && character.toUpperCase() === character) {
			string = string.slice(0, i) + '-' + string.slice(i);
			isLastCharLower = false;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = true;
			i++;
		} else if (isLastCharUpper && isLastLastCharUpper && /[a-zA-Z]/.test(character) && character.toLowerCase() === character) {
			string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = false;
			isLastCharLower = true;
		} else {
			isLastCharLower = character.toLowerCase() === character && character.toUpperCase() !== character;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = character.toUpperCase() === character && character.toLowerCase() !== character;
		}
	}

	return string;
};

const camelCase = (input, options) => {
	if (!(typeof input === 'string' || Array.isArray(input))) {
		throw new TypeError('Expected the input to be `string | string[]`');
	}

	options = Object.assign({
		pascalCase: false
	}, options);

	const postProcess = x => options.pascalCase ? x.charAt(0).toUpperCase() + x.slice(1) : x;

	if (Array.isArray(input)) {
		input = input.map(x => x.trim())
			.filter(x => x.length)
			.join('-');
	} else {
		input = input.trim();
	}

	if (input.length === 0) {
		return '';
	}

	if (input.length === 1) {
		return options.pascalCase ? input.toUpperCase() : input.toLowerCase();
	}

	const hasUpperCase = input !== input.toLowerCase();

	if (hasUpperCase) {
		input = preserveCamelCase(input);
	}

	input = input
		.replace(/^[_.\- ]+/, '')
		.toLowerCase()
		.replace(/[_.\- ]+(\w|$)/g, (_, p1) => p1.toUpperCase())
		.replace(/\d+(\w|$)/g, m => m.toUpperCase());

	return postProcess(input);
};

module.exports = camelCase;
// TODO: Remove this for the next major release
module.exports["default"] = camelCase;


/***/ }),

/***/ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js":
/*!**********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GatsbyImage": () => (/* binding */ Y),
/* harmony export */   "MainImage": () => (/* binding */ q),
/* harmony export */   "Placeholder": () => (/* binding */ C),
/* harmony export */   "StaticImage": () => (/* binding */ J),
/* harmony export */   "generateImageData": () => (/* binding */ y),
/* harmony export */   "getImage": () => (/* binding */ R),
/* harmony export */   "getImageData": () => (/* binding */ W),
/* harmony export */   "getLowResolutionImageURL": () => (/* binding */ w),
/* harmony export */   "getSrc": () => (/* binding */ x),
/* harmony export */   "getSrcSet": () => (/* binding */ I),
/* harmony export */   "withArtDirection": () => (/* binding */ j)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common-tags */ "./node_modules/common-tags/es/index.js");
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! camelcase */ "./node_modules/camelcase/index.js");
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(camelcase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);






function s() {
  return s = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];

      for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
    }

    return e;
  }, s.apply(this, arguments);
}

function l(e, t) {
  if (null == e) return {};
  var a,
      i,
      r = {},
      n = Object.keys(e);

  for (i = 0; i < n.length; i++) t.indexOf(a = n[i]) >= 0 || (r[a] = e[a]);

  return r;
}

var d,
    u = [.25, .5, 1, 2],
    c = [750, 1080, 1366, 1920],
    h = [320, 654, 768, 1024, 1366, 1600, 1920, 2048, 2560, 3440, 3840, 4096],
    g = function (e) {
  return console.warn(e);
},
    p = function (e, t) {
  return e - t;
},
    m = function (e) {
  return e.map(function (e) {
    return e.src + " " + e.width + "w";
  }).join(",\n");
};

function f(e) {
  var t = e.lastIndexOf(".");

  if (-1 !== t) {
    var a = e.substr(t + 1);
    if ("jpeg" === a) return "jpg";
    if (3 === a.length || 4 === a.length) return a;
  }
}

function v(e) {
  var t = e.layout,
      a = void 0 === t ? "constrained" : t,
      i = e.width,
      n = e.height,
      o = e.sourceMetadata,
      l = e.breakpoints,
      d = e.aspectRatio,
      u = e.formats,
      c = void 0 === u ? ["auto", "webp"] : u;
  return c = c.map(function (e) {
    return e.toLowerCase();
  }), a = camelcase__WEBPACK_IMPORTED_MODULE_2___default()(a), i && n ? s({}, e, {
    formats: c,
    layout: a,
    aspectRatio: i / n
  }) : (o.width && o.height && !d && (d = o.width / o.height), "fullWidth" === a ? (i = i || o.width || l[l.length - 1], n = n || Math.round(i / (d || 1.3333333333333333))) : (i || (i = n && d ? n * d : o.width ? o.width : n ? Math.round(n / 1.3333333333333333) : 800), d && !n ? n = Math.round(i / d) : d || (d = i / n)), s({}, e, {
    width: i,
    height: n,
    aspectRatio: d,
    layout: a,
    formats: c
  }));
}

function w(e, t) {
  var a;
  return void 0 === t && (t = 20), null == (a = (0, (e = v(e)).generateImageSource)(e.filename, t, Math.round(t / e.aspectRatio), e.sourceMetadata.format || "jpg", e.fit, e.options)) ? void 0 : a.src;
}

function y(e) {
  var t,
      a = (e = v(e)).pluginName,
      r = e.sourceMetadata,
      n = e.generateImageSource,
      o = e.layout,
      l = e.fit,
      h = e.options,
      p = e.width,
      w = e.height,
      y = e.filename,
      M = e.reporter,
      S = void 0 === M ? {
    warn: g
  } : M,
      N = e.backgroundColor,
      R = e.placeholderURL;
  if (a || S.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'), "function" != typeof n) throw new Error("generateImageSource must be a function");
  r && (r.width || r.height) ? r.format || (r.format = f(y)) : r = {
    width: p,
    height: w,
    format: (null == (t = r) ? void 0 : t.format) || f(y) || "auto"
  };
  var x = new Set(e.formats);
  (0 === x.size || x.has("auto") || x.has("")) && (x.delete("auto"), x.delete(""), x.add(r.format)), x.has("jpg") && x.has("png") && (S.warn("[" + a + "] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead"), x.delete("jpg" === r.format ? "png" : "jpg"));

  var I = function (e) {
    var t = e.filename,
        a = e.layout,
        r = void 0 === a ? "constrained" : a,
        n = e.sourceMetadata,
        o = e.reporter,
        l = void 0 === o ? {
      warn: g
    } : o,
        h = e.breakpoints,
        p = void 0 === h ? c : h,
        m = Object.entries({
      width: e.width,
      height: e.height
    }).filter(function (e) {
      var t = e[1];
      return "number" == typeof t && t < 1;
    });
    if (m.length) throw new Error("Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are " + m.map(function (e) {
      return e.join(": ");
    }).join(", "));
    return "fixed" === r ? function (e) {
      var t = e.filename,
          a = e.sourceMetadata,
          r = e.width,
          n = e.height,
          o = e.fit,
          s = void 0 === o ? "cover" : o,
          l = e.outputPixelDensities,
          c = e.reporter,
          h = void 0 === c ? {
        warn: g
      } : c,
          p = a.width / a.height,
          m = b(void 0 === l ? u : l);

      if (r && n) {
        var f = k(a, {
          width: r,
          height: n,
          fit: s
        });
        r = f.width, n = f.height, p = f.aspectRatio;
      }

      r ? n || (n = Math.round(r / p)) : r = n ? Math.round(n * p) : 800;
      var v,
          w,
          y = r;

      if (a.width < r || a.height < n) {
        var E = a.width < r ? "width" : "height";
        h.warn((0,common_tags__WEBPACK_IMPORTED_MODULE_1__.stripIndent)(d || (v = ["\n    The requested ", ' "', 'px" for the image ', " was larger than the actual image ", " of ", "px. If possible, replace the current image with a larger one."], w || (w = v.slice(0)), v.raw = w, d = v), E, "width" === E ? r : n, t, E, a[E])), "width" === E ? (r = a.width, n = Math.round(r / p)) : r = (n = a.height) * p;
      }

      return {
        sizes: m.filter(function (e) {
          return e >= 1;
        }).map(function (e) {
          return Math.round(e * r);
        }).filter(function (e) {
          return e <= a.width;
        }),
        aspectRatio: p,
        presentationWidth: y,
        presentationHeight: Math.round(y / p),
        unscaledWidth: r
      };
    }(e) : "constrained" === r ? E(e) : "fullWidth" === r ? E(s({
      breakpoints: p
    }, e)) : (l.warn("No valid layout was provided for the image at " + t + ". Valid image layouts are fixed, fullWidth, and constrained. Found " + r), {
      sizes: [n.width],
      presentationWidth: n.width,
      presentationHeight: n.height,
      aspectRatio: n.width / n.height,
      unscaledWidth: n.width
    });
  }(s({}, e, {
    sourceMetadata: r
  })),
      W = {
    sources: []
  },
      j = e.sizes;

  j || (j = function (e, t) {
    switch (t) {
      case "constrained":
        return "(min-width: " + e + "px) " + e + "px, 100vw";

      case "fixed":
        return e + "px";

      case "fullWidth":
        return "100vw";

      default:
        return;
    }
  }(I.presentationWidth, o)), x.forEach(function (e) {
    var t = I.sizes.map(function (t) {
      var i = n(y, t, Math.round(t / I.aspectRatio), e, l, h);
      if (null != i && i.width && i.height && i.src && i.format) return i;
      S.warn("[" + a + "] The resolver for image " + y + " returned an invalid value.");
    }).filter(Boolean);

    if ("jpg" === e || "png" === e || "auto" === e) {
      var i = t.find(function (e) {
        return e.width === I.unscaledWidth;
      }) || t[0];
      i && (W.fallback = {
        src: i.src,
        srcSet: m(t),
        sizes: j
      });
    } else {
      var r;
      null == (r = W.sources) || r.push({
        srcSet: m(t),
        sizes: j,
        type: "image/" + e
      });
    }
  });
  var _ = {
    images: W,
    layout: o,
    backgroundColor: N
  };

  switch (R && (_.placeholder = {
    fallback: R
  }), o) {
    case "fixed":
      _.width = I.presentationWidth, _.height = I.presentationHeight;
      break;

    case "fullWidth":
      _.width = 1, _.height = 1 / I.aspectRatio;
      break;

    case "constrained":
      _.width = e.width || I.presentationWidth || 1, _.height = (_.width || 1) / I.aspectRatio;
  }

  return _;
}

var b = function (e) {
  return Array.from(new Set([1].concat(e))).sort(p);
};

function E(e) {
  var t,
      a = e.sourceMetadata,
      i = e.width,
      r = e.height,
      n = e.fit,
      o = void 0 === n ? "cover" : n,
      s = e.outputPixelDensities,
      l = e.breakpoints,
      d = e.layout,
      c = a.width / a.height,
      h = b(void 0 === s ? u : s);

  if (i && r) {
    var g = k(a, {
      width: i,
      height: r,
      fit: o
    });
    i = g.width, r = g.height, c = g.aspectRatio;
  }

  i = i && Math.min(i, a.width), r = r && Math.min(r, a.height), i || r || (r = (i = Math.min(800, a.width)) / c), i || (i = r * c);
  var m = i;
  return (a.width < i || a.height < r) && (i = a.width, r = a.height), i = Math.round(i), (null == l ? void 0 : l.length) > 0 ? (t = l.filter(function (e) {
    return e <= a.width;
  })).length < l.length && !t.includes(a.width) && t.push(a.width) : t = (t = h.map(function (e) {
    return Math.round(e * i);
  })).filter(function (e) {
    return e <= a.width;
  }), "constrained" !== d || t.includes(i) || t.push(i), {
    sizes: t = t.sort(p),
    aspectRatio: c,
    presentationWidth: m,
    presentationHeight: Math.round(m / c),
    unscaledWidth: i
  };
}

function k(e, t) {
  var a = e.width / e.height,
      i = t.width,
      r = t.height;

  switch (t.fit) {
    case "fill":
      i = t.width ? t.width : e.width, r = t.height ? t.height : e.height;
      break;

    case "inside":
      var n = t.width ? t.width : Number.MAX_SAFE_INTEGER,
          o = t.height ? t.height : Number.MAX_SAFE_INTEGER;
      i = Math.min(n, Math.round(o * a)), r = Math.min(o, Math.round(n / a));
      break;

    case "outside":
      var s = t.width ? t.width : 0,
          l = t.height ? t.height : 0;
      i = Math.max(s, Math.round(l * a)), r = Math.max(l, Math.round(s / a));
      break;

    default:
      t.width && !t.height && (i = t.width, r = Math.round(t.width / a)), t.height && !t.width && (i = Math.round(t.height * a), r = t.height);
  }

  return {
    width: i,
    height: r,
    aspectRatio: i / r
  };
}

var M = ["baseUrl", "urlBuilder", "sourceWidth", "sourceHeight", "pluginName", "formats", "breakpoints", "options"],
    S = ["images", "placeholder"];

function N() {
  return "undefined" != typeof GATSBY___IMAGE && GATSBY___IMAGE;
}

new Set();

var R = function (e) {
  var t;
  return function (e) {
    var t, a;
    return Boolean(null == e || null == (t = e.images) || null == (a = t.fallback) ? void 0 : a.src);
  }(e) ? e : function (e) {
    return Boolean(null == e ? void 0 : e.gatsbyImageData);
  }(e) ? e.gatsbyImageData : null == e || null == (t = e.childImageSharp) ? void 0 : t.gatsbyImageData;
},
    x = function (e) {
  var t, a, i;
  return null == (t = R(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.src;
},
    I = function (e) {
  var t, a, i;
  return null == (t = R(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.srcSet;
};

function W(e) {
  var t,
      a = e.baseUrl,
      i = e.urlBuilder,
      r = e.sourceWidth,
      n = e.sourceHeight,
      o = e.pluginName,
      d = void 0 === o ? "getImageData" : o,
      u = e.formats,
      c = void 0 === u ? ["auto"] : u,
      g = e.breakpoints,
      p = e.options,
      m = l(e, M);
  return null != (t = g) && t.length || "fullWidth" !== m.layout && "FULL_WIDTH" !== m.layout || (g = h), y(s({}, m, {
    pluginName: d,
    generateImageSource: function (e, t, a, r) {
      return {
        width: t,
        height: a,
        format: r,
        src: i({
          baseUrl: e,
          width: t,
          height: a,
          options: p,
          format: r
        })
      };
    },
    filename: a,
    formats: c,
    breakpoints: g,
    sourceMetadata: {
      width: r,
      height: n,
      format: "auto"
    }
  }));
}

function j(e, t) {
  var a,
      i,
      r,
      n = e.images,
      o = e.placeholder,
      d = s({}, l(e, S), {
    images: s({}, n, {
      sources: []
    }),
    placeholder: o && s({}, o, {
      sources: []
    })
  });
  return t.forEach(function (t) {
    var a,
        i = t.media,
        r = t.image;
    i ? (r.layout !== e.layout && "development" === "development" && console.warn('[gatsby-plugin-image] Mismatched image layout: expected "' + e.layout + '" but received "' + r.layout + '". All art-directed images use the same layout as the default image'), (a = d.images.sources).push.apply(a, r.images.sources.map(function (e) {
      return s({}, e, {
        media: i
      });
    }).concat([{
      media: i,
      srcSet: r.images.fallback.srcSet
    }])), d.placeholder && d.placeholder.sources.push({
      media: i,
      srcSet: r.placeholder.fallback
    })) :  true && console.warn("[gatsby-plugin-image] All art-directed images passed to must have a value set for `media`. Skipping.");
  }), (a = d.images.sources).push.apply(a, n.sources), null != o && o.sources && (null == (i = d.placeholder) || (r = i.sources).push.apply(r, o.sources)), d;
}

var _,
    T = ["src", "srcSet", "loading", "alt", "shouldLoad", "innerRef"],
    A = ["fallback", "sources", "shouldLoad"],
    O = function (t) {
  var a = t.src,
      i = t.srcSet,
      r = t.loading,
      n = t.alt,
      o = void 0 === n ? "" : n,
      d = t.shouldLoad,
      u = t.innerRef,
      c = l(t, T);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", s({}, c, {
    decoding: "async",
    loading: r,
    src: d ? a : void 0,
    "data-src": d ? void 0 : a,
    srcSet: d ? i : void 0,
    "data-srcset": d ? void 0 : i,
    alt: o,
    ref: u
  }));
},
    z = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (t, a) {
  var i = t.fallback,
      r = t.sources,
      n = void 0 === r ? [] : r,
      o = t.shouldLoad,
      d = void 0 === o || o,
      u = l(t, A),
      c = u.sizes || (null == i ? void 0 : i.sizes),
      h = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(O, s({}, u, i, {
    sizes: c,
    shouldLoad: d,
    innerRef: a
  }));
  return n.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("picture", null, n.map(function (t) {
    var a = t.media,
        i = t.srcSet,
        r = t.type;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("source", {
      key: a + "-" + r + "-" + i,
      type: r,
      media: a,
      srcSet: d ? i : void 0,
      "data-srcset": d ? void 0 : i,
      sizes: c
    });
  }), h) : h;
});

O.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
  sizes: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
  srcSet: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_3__.bool
}, z.displayName = "Picture", z.propTypes = {
  alt: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_3__.bool,
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_3__.exact({
    src: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_3__.string
  }),
  sources: prop_types__WEBPACK_IMPORTED_MODULE_3__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
    type: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired
  }), prop_types__WEBPACK_IMPORTED_MODULE_3__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    type: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired
  })]))
};

var L = ["fallback"],
    C = function (t) {
  var a = t.fallback,
      i = l(t, L);
  return a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z, s({}, i, {
    fallback: {
      src: a
    },
    "aria-hidden": !0,
    alt: ""
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", s({}, i));
};

C.displayName = "Placeholder", C.propTypes = {
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
  sources: null == (_ = z.propTypes) ? void 0 : _.sources,
  alt: function (e, t, a) {
    return e[t] ? new Error("Invalid prop `" + t + "` supplied to `" + a + "`. Validation failed.") : null;
  }
};
var q = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (t, a) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z, s({
    ref: a
  }, t)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("noscript", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z, s({}, t, {
    shouldLoad: !0
  }))));
});
q.displayName = "MainImage", q.propTypes = z.propTypes;

var D = ["children"],
    P = function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
    type: "module",
    dangerouslySetInnerHTML: {
      __html: 'const t="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;if(t){const t=document.querySelectorAll("img[data-main-image]");for(let e of t){e.dataset.src&&(e.setAttribute("src",e.dataset.src),e.removeAttribute("data-src")),e.dataset.srcset&&(e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset"));const t=e.parentNode.querySelectorAll("source[data-srcset]");for(let e of t)e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset");e.complete&&(e.style.opacity=1)}}'
    }
  });
},
    H = function (t) {
  var a = t.layout,
      i = t.width,
      r = t.height;
  return "fullWidth" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "aria-hidden": !0,
    style: {
      paddingTop: r / i * 100 + "%"
    }
  }) : "constrained" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      maxWidth: i,
      display: "block"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "",
    role: "presentation",
    "aria-hidden": "true",
    src: "data:image/svg+xml;charset=utf-8,%3Csvg height='" + r + "' width='" + i + "' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",
    style: {
      maxWidth: "100%",
      display: "block",
      position: "static"
    }
  })) : null;
},
    F = function (t) {
  var i = t.children,
      r = l(t, D);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(H, s({}, r)), i, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(P, null));
},
    B = ["as", "children"],
    G = ["as", "className", "class", "style", "image", "loading", "imgClassName", "imgStyle", "backgroundColor", "objectFit", "objectPosition"],
    V = ["style", "className"],
    U = function (e) {
  return e.replace(/\n/g, "");
},
    X = function (t) {
  var a = t.as,
      i = void 0 === a ? "div" : a,
      r = t.children,
      n = l(t, B);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(i, s({}, n), r);
},
    Y = function (t) {
  var a = t.as,
      i = t.className,
      r = t.class,
      n = t.style,
      o = t.image,
      d = t.loading,
      u = void 0 === d ? "lazy" : d,
      c = t.imgClassName,
      h = t.imgStyle,
      g = t.backgroundColor,
      p = t.objectFit,
      m = t.objectPosition,
      f = l(t, G);
  if (!o) return console.warn("[gatsby-plugin-image] Missing image prop"), null;
  r && (i = r), h = s({
    objectFit: p,
    objectPosition: m,
    backgroundColor: g
  }, h);

  var v = o.width,
      w = o.height,
      y = o.layout,
      b = o.images,
      E = o.placeholder,
      k = o.backgroundColor,
      M = function (e, t, a) {
    var i = {},
        r = "gatsby-image-wrapper";
    return N() || (i.position = "relative", i.overflow = "hidden"), "fixed" === a ? (i.width = e, i.height = t) : "constrained" === a && (N() || (i.display = "inline-block", i.verticalAlign = "top"), r = "gatsby-image-wrapper gatsby-image-wrapper-constrained"), {
      className: r,
      "data-gatsby-image-wrapper": "",
      style: i
    };
  }(v, w, y),
      S = M.style,
      R = M.className,
      x = l(M, V),
      I = {
    fallback: void 0,
    sources: []
  };

  return b.fallback && (I.fallback = s({}, b.fallback, {
    srcSet: b.fallback.srcSet ? U(b.fallback.srcSet) : void 0
  })), b.sources && (I.sources = b.sources.map(function (e) {
    return s({}, e, {
      srcSet: U(e.srcSet)
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(X, s({}, x, {
    as: a,
    style: s({}, S, n, {
      backgroundColor: g
    }),
    className: R + (i ? " " + i : "")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(F, {
    layout: y,
    width: v,
    height: w
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(C, s({}, function (e, t, a, i, r, n, o, l) {
    var d = {};
    n && (d.backgroundColor = n, "fixed" === a ? (d.width = i, d.height = r, d.backgroundColor = n, d.position = "relative") : ("constrained" === a || "fullWidth" === a) && (d.position = "absolute", d.top = 0, d.left = 0, d.bottom = 0, d.right = 0)), o && (d.objectFit = o), l && (d.objectPosition = l);
    var u = s({}, e, {
      "aria-hidden": !0,
      "data-placeholder-image": "",
      style: s({
        opacity: 1,
        transition: "opacity 500ms linear"
      }, d)
    });
    return N() || (u.style = {
      height: "100%",
      left: 0,
      position: "absolute",
      top: 0,
      width: "100%"
    }), u;
  }(E, 0, y, v, w, k, p, m))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(q, s({
    "data-gatsby-image-ssr": "",
    className: c
  }, f, function (e, t, a, i, r, n, o, l) {
    return void 0 === l && (l = {}), N() || (l = s({
      height: "100%",
      left: 0,
      position: "absolute",
      top: 0,
      transform: "translateZ(0)",
      transition: "opacity 250ms linear",
      width: "100%",
      willChange: "opacity"
    }, l)), s({}, a, {
      loading: i,
      shouldLoad: e,
      "data-main-image": "",
      style: s({}, l, {
        opacity: 0
      }),
      onLoad: function (e) {
        var t = e.currentTarget,
            a = new Image();
        a.src = t.currentSrc, a.decode ? a.decode().catch(function () {}).then(function () {
          r(!0);
        }) : r(!0);
      },
      ref: void 0
    });
  }("eager" === u, 0, I, u, void 0, 0, 0, h)))));
},
    Z = ["src", "__imageData", "__error", "width", "height", "aspectRatio", "tracedSVGOptions", "placeholder", "formats", "quality", "transformOptions", "jpgOptions", "pngOptions", "webpOptions", "avifOptions", "blurredOptions"],
    J = function (t) {
  return function (a) {
    var i = a.src,
        r = a.__imageData,
        n = a.__error,
        o = l(a, Z);
    return n && console.warn(n), r ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(t, s({
      image: r
    }, o)) : (console.warn("Image not loaded", i), n || "development" !== "development" || console.warn('Please ensure that "gatsby-plugin-image" is included in the plugins array in gatsby-config.js, and that your version of gatsby is at least 2.24.78'), null);
  };
}(Y),
    K = function (e, t) {
  return "fullWidth" !== e.layout || "width" !== t && "height" !== t || !e[t] ? prop_types__WEBPACK_IMPORTED_MODULE_3___default().number.apply((prop_types__WEBPACK_IMPORTED_MODULE_3___default()), [e, t].concat([].slice.call(arguments, 2))) : new Error('"' + t + '" ' + e[t] + " may not be passed when layout is fullWidth.");
},
    Q = new Set(["fixed", "fullWidth", "constrained"]),
    $ = {
  src: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),
  alt: function (e, t, a) {
    return e.alt || "" === e.alt ? prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.apply((prop_types__WEBPACK_IMPORTED_MODULE_3___default()), [e, t, a].concat([].slice.call(arguments, 3))) : new Error('The "alt" prop is required in ' + a + '. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html');
  },
  width: K,
  height: K,
  sizes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  layout: function (e) {
    if (void 0 !== e.layout && !Q.has(e.layout)) return new Error("Invalid value " + e.layout + '" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".');
  }
};

J.displayName = "StaticImage", J.propTypes = $;


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

/***/ "./src/components/Pages/Home/HomeCases/CasesCards/CasesCards.jsx":
/*!***********************************************************************!*\
  !*** ./src/components/Pages/Home/HomeCases/CasesCards/CasesCards.jsx ***!
  \***********************************************************************/
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../hooks/useLanguage */ "./src/hooks/useLanguage.js");
/* harmony import */ var _Ui_DefoultCards_DefoultCards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Ui/DefoultCards/DefoultCards */ "./src/components/Ui/DefoultCards/DefoultCards.jsx");






const CasesCards = ({
  card
}) => {
  const langToglle = _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_2__.useLanguage;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cases-cards--wrapper"
  }, card.map((item, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "cases-cards--container",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: `/${item.slug}/`,
      className: "cases-cards__link"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Ui_DefoultCards_DefoultCards__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: langToglle(item.titleUa, item.titleEn, item.titleIt, item.titleRu),
      descr: langToglle(item.descrUa, item.descrEn, item.descrIt, item.descrRu),
      image: item.cover.localFile
    })));
  }));
};

CasesCards.propTypes = {
  card: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().array)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CasesCards);

/***/ }),

/***/ "./src/components/Pages/Home/HomeCases/HomeCases.jsx":
/*!***********************************************************!*\
  !*** ./src/components/Pages/Home/HomeCases/HomeCases.jsx ***!
  \***********************************************************/
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
/* harmony import */ var _CasesCards_CasesCards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CasesCards/CasesCards */ "./src/components/Pages/Home/HomeCases/CasesCards/CasesCards.jsx");





const HomeCases = ({
  titleData,
  card
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "cases section",
    id: "cases"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cases-title--wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "cases-title"
  }, (0,_hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__.useLanguage)(titleData.title_ua, titleData.title_en, titleData.title_it, titleData.title_ru))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CasesCards_CasesCards__WEBPACK_IMPORTED_MODULE_2__["default"], {
    card: card
  }));
};

HomeCases.propTypes = {
  titleData: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  card: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeCases);

/***/ }),

/***/ "./src/components/Pages/Home/HomeFounder/HomeFounder.jsx":
/*!***************************************************************!*\
  !*** ./src/components/Pages/Home/HomeFounder/HomeFounder.jsx ***!
  \***************************************************************/
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
/* harmony import */ var _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../hooks/useLanguage */ "./src/hooks/useLanguage.js");
/* harmony import */ var _Ui_DefoultCards_DefoultCards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Ui/DefoultCards/DefoultCards */ "./src/components/Ui/DefoultCards/DefoultCards.jsx");
/* harmony import */ var _HomeFounderSocial_HomeFounderSocial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HomeFounderSocial/HomeFounderSocial */ "./src/components/Pages/Home/HomeFounder/HomeFounderSocial/HomeFounderSocial.jsx");






const HomeFounder = ({
  main,
  titleData
}) => {
  const langToglle = _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__.useLanguage;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "founder section",
    id: "about"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "founder-title--wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "cases-title"
  }, (0,_hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__.useLanguage)(titleData.title_ua, titleData.title_en, titleData.title_it, titleData.title_ru))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "founder-card--container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Ui_DefoultCards_DefoultCards__WEBPACK_IMPORTED_MODULE_2__["default"], {
    image: main.image.localFile,
    title: langToglle(main.nameUa, main.nameEn, main.nameIt, main.nameRu),
    descr: langToglle(main.descrUa, main.descrEn, main.descrIt, main.descrRu)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HomeFounderSocial_HomeFounderSocial__WEBPACK_IMPORTED_MODULE_3__["default"], {
    main: main
  })));
};

HomeFounder.propTypes = {
  main: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
  titleData: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeFounder);

/***/ }),

/***/ "./src/components/Pages/Home/HomeFounder/HomeFounderSocial/HomeFounderSocial.jsx":
/*!***************************************************************************************!*\
  !*** ./src/components/Pages/Home/HomeFounder/HomeFounderSocial/HomeFounderSocial.jsx ***!
  \***************************************************************************************/
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
/* harmony import */ var _SocialItem_SocialItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SocialItem/SocialItem */ "./src/components/Pages/Home/HomeFounder/HomeFounderSocial/SocialItem/SocialItem.jsx");
/* harmony import */ var _svg_instagram_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../svg/instagram.svg */ "./src/svg/instagram.svg");
/* harmony import */ var _svg_instagram_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_svg_instagram_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _svg_facebook_founder_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../svg/facebook_founder.svg */ "./src/svg/facebook_founder.svg");
/* harmony import */ var _svg_facebook_founder_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_svg_facebook_founder_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _svg_link_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../svg/link.svg */ "./src/svg/link.svg");
/* harmony import */ var _svg_link_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_svg_link_svg__WEBPACK_IMPORTED_MODULE_4__);







const HomeFounderSocial = ({
  main
}) => {
  const {
    instagram,
    facebook,
    site
  } = main;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "founder-socials__list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SocialItem_SocialItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    link: instagram
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_svg_instagram_svg__WEBPACK_IMPORTED_MODULE_2___default()), {
    className: "founder-socials__icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SocialItem_SocialItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    link: facebook
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_svg_facebook_founder_svg__WEBPACK_IMPORTED_MODULE_3___default()), {
    className: "founder-socials__icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SocialItem_SocialItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    link: site
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_svg_link_svg__WEBPACK_IMPORTED_MODULE_4___default()), {
    className: "founder-socials__icon"
  })));
};

HomeFounderSocial.propTypes = {
  main: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeFounderSocial);

/***/ }),

/***/ "./src/components/Pages/Home/HomeFounder/HomeFounderSocial/SocialItem/SocialItem.jsx":
/*!*******************************************************************************************!*\
  !*** ./src/components/Pages/Home/HomeFounder/HomeFounderSocial/SocialItem/SocialItem.jsx ***!
  \*******************************************************************************************/
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



const SocialItem = ({
  link,
  children
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "founder-socials__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: link,
    target: "blank",
    className: "founder-socials__link"
  }, children));
};

SocialItem.propTypes = {
  link: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocialItem);

/***/ }),

/***/ "./src/components/Pages/Home/HomeMain/HomeMain.jsx":
/*!*********************************************************!*\
  !*** ./src/components/Pages/Home/HomeMain/HomeMain.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _HomeMainInfo_HomeMainInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeMainInfo/HomeMainInfo */ "./src/components/Pages/Home/HomeMain/HomeMainInfo/HomeMainInfo.jsx");

 // import Responsive from '../../../Ui/Responsive/Responsive'



const HomeMain = ({
  main
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "home-main top-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "home-main__left"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HomeMainInfo_HomeMainInfo__WEBPACK_IMPORTED_MODULE_1__["default"], {
    main: main
  }));
};

HomeMain.propTypes = {
  main: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeMain);

/***/ }),

/***/ "./src/components/Pages/Home/HomeMain/HomeMainInfo/HomeMainInfo.jsx":
/*!**************************************************************************!*\
  !*** ./src/components/Pages/Home/HomeMain/HomeMainInfo/HomeMainInfo.jsx ***!
  \**************************************************************************/
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




const HomeMainInfo = ({
  main
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "main-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "main-info__title"
  }, (0,_hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__.useLanguage)(main.titleUa.titleUa, main.titleEn.titleEn, main.titleIt.titleIt, main.titleRu.titleRu)));
};

HomeMainInfo.propTypes = {
  main: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeMainInfo);

/***/ }),

/***/ "./src/components/Pages/Home/HomePartners/HomePartners.jsx":
/*!*****************************************************************!*\
  !*** ./src/components/Pages/Home/HomePartners/HomePartners.jsx ***!
  \*****************************************************************/
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
/* harmony import */ var _PartnersItem_PartnersItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PartnersItem/PartnersItem */ "./src/components/Pages/Home/HomePartners/PartnersItem/PartnersItem.jsx");





const HomePartners = ({
  titleData,
  partnersData
}) => {
  const {
    title_ua,
    title_en,
    title_it,
    title_ru
  } = titleData;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "home-partners",
    id: "partners"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "partners-title__wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "partners-title"
  }, (0,_hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__.useLanguage)(title_ua, title_en, title_it, title_ru))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "partners-items"
  }, partnersData.map((item, index) => {
    if (item.title === 'firm') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PartnersItem_PartnersItem__WEBPACK_IMPORTED_MODULE_2__.PartnersItemLink, {
        image: item.localFile,
        link: 'https://firmbarbershop.com/',
        title: item.title,
        key: index
      });
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PartnersItem_PartnersItem__WEBPACK_IMPORTED_MODULE_2__.PartnersItem, {
        image: item.localFile,
        title: item.title,
        key: index
      });
    }
  })));
};

HomePartners.propTypes = {
  titleData: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  partnersData: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePartners);

/***/ }),

/***/ "./src/components/Pages/Home/HomePartners/PartnersItem/PartnersItem.jsx":
/*!******************************************************************************!*\
  !*** ./src/components/Pages/Home/HomePartners/PartnersItem/PartnersItem.jsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PartnersItem": () => (/* binding */ PartnersItem),
/* harmony export */   "PartnersItemLink": () => (/* binding */ PartnersItemLink)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);



const PartnersItem = ({
  image,
  title
}) => {
  const img = (0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_1__.getImage)(image);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "partners-item__wrapper"
  }, img && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_1__.GatsbyImage, {
    image: img,
    alt: title,
    className: "partners-item__image"
  }));
};
const PartnersItemLink = ({
  image,
  link,
  title
}) => {
  const img = (0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_1__.getImage)(image);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: link,
    target: "blank",
    className: "partners-item__wrapper partners-item__wrapper--link"
  }, img && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_1__.GatsbyImage, {
    image: img,
    alt: title,
    className: "partners-item__image"
  }));
};
PartnersItem.propTypes = {
  image: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
PartnersItemLink.propTypes = {
  image: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  link: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};

/***/ }),

/***/ "./src/components/Pages/Home/HomePhilosophie/HomePhilosophie.jsx":
/*!***********************************************************************!*\
  !*** ./src/components/Pages/Home/HomePhilosophie/HomePhilosophie.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../hooks/useLanguage */ "./src/hooks/useLanguage.js");




const HomePhilosophie = ({
  main
}) => {
  const langToglle = _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__.useLanguage;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "philosophi section",
    id: "philosophie"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "philosophi-wrapper"
  }, main.map((item, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "philosophi-contaiter",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "philosophi-title--contaiter"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
      className: "philosophi-title"
    }, langToglle(item.titleUa, item.titleEn, item.titleIt, item.titleRu))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "philosophi-descr--contaiter"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "philosophi-descr"
    }, langToglle(item.descrUa, item.descrEn, item.descrIt, item.descrRu))));
  })));
};

HomePhilosophie.propTypes = {
  main: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePhilosophie);

/***/ }),

/***/ "./src/components/Pages/Home/HomeServices/HomeServices.jsx":
/*!*****************************************************************!*\
  !*** ./src/components/Pages/Home/HomeServices/HomeServices.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../hooks/useLanguage */ "./src/hooks/useLanguage.js");




const HomeServices = ({
  titleData,
  servicesData
}) => {
  const langToggle = _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__.useLanguage;
  const {
    title_ua,
    title_en,
    title_it,
    title_ru
  } = titleData;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "home-services"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "home-services__wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "home-services__title"
  }, langToggle(title_ua, title_en, title_it, title_ru)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "services-list"
  }, servicesData.map((item, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      className: "services-list__item",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "services-list__title"
    }, langToggle(item.titleUa, item.titleEn, item.titleIt, item.titleRu)));
  }))));
};

HomeServices.propTypes = {
  titleData: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  servicesData: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeServices);

/***/ }),

/***/ "./src/components/Pages/Home/index.js":
/*!********************************************!*\
  !*** ./src/components/Pages/Home/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeMain": () => (/* reexport safe */ _HomeMain_HomeMain__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _HomeMain_HomeMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeMain/HomeMain */ "./src/components/Pages/Home/HomeMain/HomeMain.jsx");


/***/ }),

/***/ "./src/components/Ui/DefoultCards/DefoultCards.jsx":
/*!*********************************************************!*\
  !*** ./src/components/Ui/DefoultCards/DefoultCards.jsx ***!
  \*********************************************************/
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
/* harmony import */ var _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/useLanguage */ "./src/hooks/useLanguage.js");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");





const DefoultCards = ({
  image,
  title,
  descr
}) => {
  const langToglle = _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__.useLanguage;
  const img = (0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.getImage)(image);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cards-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.GatsbyImage, {
    image: img,
    alt: "img"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cards-bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-title"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "card-description"
  }, descr), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "card-btn"
  }, langToglle('детальніше', 'more', 'Di più', 'подробнее'))));
};

DefoultCards.propTypes = {
  title: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  descr: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DefoultCards);

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

/***/ "./src/db/homeStatic.js":
/*!******************************!*\
  !*** ./src/db/homeStatic.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homeStatic": () => (/* binding */ homeStatic)
/* harmony export */ });
const homeStatic = {
  casesHeader: {
    title_ua: 'Кейси',
    title_en: 'Cases',
    title_it: 'Portfolio',
    title_ru: 'Кейсы'
  },
  founderHeader: {
    title_ua: 'Засновник агенції',
    title_en: 'Agency founder',
    title_it: "Fondatore dell'agenzia",
    title_ru: 'Основатель агентства'
  },
  servicesHeader: {
    title_ua: 'Компетенції маркетингової агенції',
    title_en: 'Marketing agency competencies',
    title_it: 'Competenze di agenzia di marketing',
    title_ru: 'Компетенции маркетингового агенства'
  },
  partnersHeader: {
    title_ua: 'Партнери',
    title_en: 'Partners',
    title_it: 'Partner',
    title_ru: 'Партнеры'
  },
  teamHeader: {
    title_ua: 'Команда',
    title_en: 'Team',
    title_it: 'Squadra',
    title_ru: 'Команда'
  }
};

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

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useLanguage */ "./src/hooks/useLanguage.js");
/* harmony import */ var _styles_styles_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/styles.sass */ "./src/styles/styles.sass");
/* harmony import */ var _styles_styles_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_sass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout/layout */ "./src/components/Layout/layout.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/seo */ "./src/components/seo.js");
/* harmony import */ var _components_Pages_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Pages/Home */ "./src/components/Pages/Home/index.js");
/* harmony import */ var _components_Pages_Home_HomeCases_HomeCases__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Pages/Home/HomeCases/HomeCases */ "./src/components/Pages/Home/HomeCases/HomeCases.jsx");
/* harmony import */ var _components_Pages_Home_HomePhilosophie_HomePhilosophie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Pages/Home/HomePhilosophie/HomePhilosophie */ "./src/components/Pages/Home/HomePhilosophie/HomePhilosophie.jsx");
/* harmony import */ var _components_Pages_Home_HomeFounder_HomeFounder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Pages/Home/HomeFounder/HomeFounder */ "./src/components/Pages/Home/HomeFounder/HomeFounder.jsx");
/* harmony import */ var _components_Pages_Home_HomeServices_HomeServices__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Pages/Home/HomeServices/HomeServices */ "./src/components/Pages/Home/HomeServices/HomeServices.jsx");
/* harmony import */ var _components_Pages_Home_HomePartners_HomePartners__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Pages/Home/HomePartners/HomePartners */ "./src/components/Pages/Home/HomePartners/HomePartners.jsx");
/* harmony import */ var _db_homeStatic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../db/homeStatic */ "./src/db/homeStatic.js");










 // import HomeTeam from '../components/Pages/Home/HomeTeam/HomeTeam';



const IndexPage = data => {
  // console.log(data.data);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout_layout__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_seo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: (0,_hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__.useLanguage)('nunox: маркетингове агентство: Київ, Україна. (uk)', 'nunox: marketing agency, Kyiv, Ukraine', 'nunox: agenzia di marketing: Kiev, Ucraina', 'nunox: маркетинговое агентство: Киев, Украина'),
    description: (0,_hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__.useLanguage)('Створюємо та розвиваємо бренди. Володіючи власними бізнесами ми пропонуємо підприємцям наш досвід.', 'We create and develop brands. By owning our own businesses, we offer entrepreneurs our experience.', 'Creiamo e sviluppiamo marchi. Possedendo le nostre attività, offriamo agli imprenditori la nostra esperienza.', 'Создаем и развиваем бренды. Владея собственными бизнесами, мы предлагаем предпринимателям наш опыт.')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "page-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Pages_Home__WEBPACK_IMPORTED_MODULE_5__.HomeMain, {
    main: data.data.contentfulHomeMain
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Pages_Home_HomeCases_HomeCases__WEBPACK_IMPORTED_MODULE_6__["default"], {
    titleData: _db_homeStatic__WEBPACK_IMPORTED_MODULE_11__.homeStatic.casesHeader,
    card: data.data.allContentfulTemplateCases.nodes
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Pages_Home_HomePhilosophie_HomePhilosophie__WEBPACK_IMPORTED_MODULE_7__["default"], {
    main: data.data.allContentfulPhilosophy.nodes
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Pages_Home_HomeFounder_HomeFounder__WEBPACK_IMPORTED_MODULE_8__["default"], {
    titleData: _db_homeStatic__WEBPACK_IMPORTED_MODULE_11__.homeStatic.founderHeader,
    main: data.data.contentfulFounder
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Pages_Home_HomeServices_HomeServices__WEBPACK_IMPORTED_MODULE_9__["default"], {
    titleData: _db_homeStatic__WEBPACK_IMPORTED_MODULE_11__.homeStatic.servicesHeader,
    servicesData: data.data.allContentfulServices.nodes
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Pages_Home_HomePartners_HomePartners__WEBPACK_IMPORTED_MODULE_10__["default"], {
    titleData: _db_homeStatic__WEBPACK_IMPORTED_MODULE_11__.homeStatic.partnersHeader,
    partnersData: data.data.contentfulPartners.img
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);
const query = "2739820704";

/***/ }),

/***/ "./src/styles/styles.sass":
/*!********************************!*\
  !*** ./src/styles/styles.sass ***!
  \********************************/
/***/ (() => {



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

/***/ "./src/svg/facebook_founder.svg":
/*!**************************************!*\
  !*** ./src/svg/facebook_founder.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function FacebookFounder (props) {
    return React.createElement("svg",props,[React.createElement("g",{"clipPath":"url(#clip0_744_10)","key":0},React.createElement("path",{"d":"M10.89 0.707879C10.89 0.609683 10.8501 0.515509 10.779 0.446074C10.708 0.376639 10.6116 0.33763 10.5112 0.33763H8.61725C7.66355 0.291194 6.72982 0.615607 6.02007 1.23999C5.31031 1.86436 4.88224 2.73795 4.82937 3.66987V5.66921H2.93543C2.83497 5.66921 2.73862 5.70822 2.66759 5.77766C2.59655 5.84709 2.55664 5.94126 2.55664 6.03946V7.96475C2.55664 8.06295 2.59655 8.15712 2.66759 8.22656C2.73862 8.29599 2.83497 8.335 2.93543 8.335H4.82937V13.2963C4.82937 13.3945 4.86928 13.4887 4.94031 13.5581C5.01135 13.6276 5.10769 13.6666 5.20816 13.6666H7.48088C7.58134 13.6666 7.67769 13.6276 7.74873 13.5581C7.81976 13.4887 7.85967 13.3945 7.85967 13.2963V8.335H9.84452C9.92875 8.33619 10.011 8.30989 10.0782 8.26027C10.1454 8.21065 10.1938 8.14053 10.2157 8.06102L10.7612 6.13573C10.7763 6.08102 10.7783 6.02366 10.7671 5.96807C10.7559 5.91248 10.7319 5.86013 10.6967 5.81507C10.6616 5.77 10.6164 5.73342 10.5645 5.70813C10.5126 5.68284 10.4555 5.66953 10.3975 5.66921H7.85967V3.66987C7.87851 3.48658 7.96658 3.31673 8.10666 3.1935C8.24674 3.07027 8.42879 3.0025 8.61725 3.00342H10.5112C10.6116 3.00342 10.708 2.96441 10.779 2.89498C10.8501 2.82554 10.89 2.73137 10.89 2.63317V0.707879Z","fill":"black"})),React.createElement("defs",{"key":1},React.createElement("clipPath",{"id":"clip0_744_10"},React.createElement("rect",{"width":"13.3333","height":"13.3333","fill":"white","transform":"translate(0.333984 0.333252)"})))]);
}

FacebookFounder.defaultProps = {"width":"14","height":"14","viewBox":"0 0 14 14","fill":"none"};

module.exports = FacebookFounder;

FacebookFounder.default = FacebookFounder;


/***/ }),

/***/ "./src/svg/instagram.svg":
/*!*******************************!*\
  !*** ./src/svg/instagram.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function Instagram (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"M6.99886 4.77667C5.77472 4.77667 4.77573 5.77566 4.77573 6.99979C4.77573 8.22393 5.77472 9.22292 6.99886 9.22292C8.223 9.22292 9.22199 8.22393 9.22199 6.99979C9.22199 5.77566 8.223 4.77667 6.99886 4.77667ZM13.6666 6.99979C13.6666 6.07919 13.6749 5.16692 13.6232 4.24799C13.5715 3.18062 13.328 2.23333 12.5475 1.45282C11.7653 0.670636 10.8197 0.42881 9.75233 0.37711C8.83173 0.325409 7.91946 0.333748 7.00053 0.333748C6.07992 0.333748 5.16766 0.325409 4.24872 0.37711C3.18135 0.42881 2.23406 0.672304 1.45355 1.45282C0.671368 2.235 0.429543 3.18062 0.377842 4.24799C0.326142 5.16859 0.33448 6.08086 0.33448 6.99979C0.33448 7.91873 0.326142 8.83267 0.377842 9.7516C0.429543 10.819 0.673036 11.7663 1.45355 12.5468C2.23573 13.329 3.18135 13.5708 4.24872 13.6225C5.16932 13.6742 6.08159 13.6658 7.00053 13.6658C7.92113 13.6658 8.8334 13.6742 9.75233 13.6225C10.8197 13.5708 11.767 13.3273 12.5475 12.5468C13.3297 11.7646 13.5715 10.819 13.6232 9.7516C13.6766 8.83267 13.6666 7.9204 13.6666 6.99979V6.99979ZM6.99886 10.4204C5.10595 10.4204 3.57828 8.89271 3.57828 6.99979C3.57828 5.10688 5.10595 3.57921 6.99886 3.57921C8.89177 3.57921 10.4194 5.10688 10.4194 6.99979C10.4194 8.89271 8.89177 10.4204 6.99886 10.4204ZM10.5595 4.23798C10.1176 4.23798 9.76067 3.88108 9.76067 3.43912C9.76067 2.99716 10.1176 2.64026 10.5595 2.64026C11.0015 2.64026 11.3584 2.99716 11.3584 3.43912C11.3585 3.54407 11.3379 3.64801 11.2978 3.74499C11.2577 3.84197 11.1989 3.93009 11.1247 4.00429C11.0505 4.0785 10.9624 4.13734 10.8654 4.17744C10.7684 4.21754 10.6645 4.23811 10.5595 4.23798V4.23798Z","fill":"black"}));
}

Instagram.defaultProps = {"width":"14","height":"14","viewBox":"0 0 14 14","fill":"none"};

module.exports = Instagram;

Instagram.default = Instagram;


/***/ }),

/***/ "./src/svg/link.svg":
/*!**************************!*\
  !*** ./src/svg/link.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function Link (props) {
    return React.createElement("svg",props,[React.createElement("g",{"clipPath":"url(#clip0_744_5)","key":0},React.createElement("path",{"fillRule":"evenodd","clipRule":"evenodd","d":"M2.55889 13.3937C2.12117 13.2126 1.72354 12.9469 1.38884 12.6117C0.713338 11.9346 0.333984 11.0173 0.333984 10.0609C0.333984 9.10446 0.713338 8.1871 1.38884 7.51L3.43006 5.46959L4.45032 6.4898L2.40909 8.53021C2.00395 8.93661 1.77645 9.48704 1.77645 10.0609C1.77645 10.6347 2.00395 11.1851 2.40909 11.5915C2.8157 11.9963 3.36608 12.2236 3.93983 12.2236C4.51357 12.2236 5.06396 11.9963 5.47057 11.5915L7.51107 9.55041L8.53133 10.5706L6.49082 12.6117C6.15596 12.9469 5.7582 13.2126 5.32036 13.3936C4.88253 13.5747 4.41325 13.6674 3.93947 13.6666C3.46579 13.6674 2.99661 13.5747 2.55889 13.3937ZM13.6673 3.93893C13.6673 4.89522 13.2882 5.81251 12.6131 6.4898L10.5718 8.53021L9.55158 7.51L11.5928 5.46959C11.9979 5.06319 12.2254 4.51276 12.2254 3.93893C12.2254 3.36509 11.9979 2.81466 11.5928 2.40826C11.1862 2.00349 10.6358 1.77624 10.0621 1.77624C9.48832 1.77624 8.93794 2.00349 8.53133 2.40826L6.49082 4.44939L5.47057 3.42918L7.51107 1.38805C8.18821 0.712588 9.10561 0.333252 10.0621 0.333252C11.0185 0.333252 11.9359 0.712588 12.6131 1.38805C13.2882 2.06534 13.6673 2.98263 13.6673 3.93893ZM3.4287 9.55119L4.44967 10.5714L10.5726 4.44945L9.55238 3.42853L3.4287 9.55119Z","fill":"black"})),React.createElement("defs",{"key":1},React.createElement("clipPath",{"id":"clip0_744_5"},React.createElement("rect",{"width":"13.3333","height":"13.3333","fill":"white","transform":"translate(0.333984 0.333252)"})))]);
}

Link.defaultProps = {"width":"14","height":"14","viewBox":"0 0 14 14","fill":"none"};

module.exports = Link;

Link.default = Link;


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
//# sourceMappingURL=component---src-pages-index-js.js.map