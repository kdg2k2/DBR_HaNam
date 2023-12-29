try {
    /*!
     * modernizr v3.6.0
     * Build https://modernizr.com/download?-cssanimations-cssfilters-cssgrid_cssgridlegacy-csstransforms-csstransforms3d-csstransitions-forcetouch-objectfit-touchevents-mq-prefixed-prefixedcss-prefixes-setclasses-testallprops-testprop-dontmin
     *
     * Copyright (c)
     * Faruk Ates
     * Paul Irish
     * Alex Sexton
     * Ryan Seddon
     * Patrick Kettner
     * Stu Cox
     * Richard Herrera
     * MIT License
     */
    ! function(e, t, n) {
        var o = [],
            i = [],
            s = {
                _version: "3.6.0",
                _config: {
                    classPrefix: "",
                    enableClasses: !0,
                    enableJSClass: !0,
                    usePrefixes: !0
                },
                _q: [],
                on: function(e, t) {
                    var n = this;
                    setTimeout((function() {
                        t(n[e])
                    }), 0)
                },
                addTest: function(e, t, n) {
                    i.push({
                        name: e,
                        fn: t,
                        options: n
                    })
                },
                addAsyncTest: function(e) {
                    i.push({
                        name: null,
                        fn: e
                    })
                }
            },
            r = function() {};
        r.prototype = s, r = new r;
        var a = s._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];

        function l(e, t) {
            return typeof e === t
        }
        s._prefixes = a;
        var d = t.documentElement,
            u = "svg" === d.nodeName.toLowerCase();

        function f(e) {
            return e.replace(/([a-z])-([a-z])/g, (function(e, t, n) {
                return t + n.toUpperCase()
            })).replace(/^-/, "")
        }

        function c(e) {
            return e.replace(/([A-Z])/g, (function(e, t) {
                return "-" + t.toLowerCase()
            })).replace(/^ms-/, "-ms-")
        }

        function p() {
            return "function" != typeof t.createElement ? t.createElement(arguments[0]) : u ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
        }
        var m, g = (m = !("onblur" in t.documentElement), function(e, t) {
            var o;
            return !!e && (t && "string" != typeof t || (t = p(t || "div")), !(o = (e = "on" + e) in t) && m && (t.setAttribute || (t = p("div")), t.setAttribute(e, ""), o = "function" == typeof t[e], t[e] !== n && (t[e] = n), t.removeAttribute(e)), o)
        });
        s.hasEvent = g;
        /*!
        {
        "name": "CSS Supports",
        "property": "supports",
        "caniuse": "css-featurequeries",
        "tags": ["css"],
        "builderAliases": ["css_supports"],
        "notes": [{
        "name": "W3 Spec",
        "href": "http://dev.w3.org/csswg/css3-conditional/#at-supports"
        },{
        "name": "Related Github Issue",
        "href": "https://github.com/Modernizr/Modernizr/issues/648"
        },{
        "name": "W3 Info",
        "href": "http://dev.w3.org/csswg/css3-conditional/#the-csssupportsrule-interface"
        }]
        }
        !*/
        var v = "CSS" in e && "supports" in e.CSS,
            b = "supportsCSS" in e;

        function h(e, n, o, i) {
            var s, r, a, l, f = "modernizr",
                c = p("div"),
                m = function() {
                    var e = t.body;
                    return e || ((e = p(u ? "svg" : "body")).fake = !0), e
                }();
            if (parseInt(o, 10))
                for (; o--;)(a = p("div")).id = i ? i[o] : f + (o + 1), c.appendChild(a);
            return (s = p("style")).type = "text/css", s.id = "s" + f, (m.fake ? m : c).appendChild(s), m.appendChild(c), s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(t.createTextNode(e)), c.id = f, m.fake && (m.style.background = "", m.style.overflow = "hidden", l = d.style.overflow, d.style.overflow = "hidden", d.appendChild(m)), r = n(c, e), m.fake ? (m.parentNode.removeChild(m), d.style.overflow = l, d.offsetHeight) : c.parentNode.removeChild(c), !!r
        }
        r.addTest("supports", v || b);
        var y, w = (y = e.matchMedia || e.msMatchMedia) ? function(e) {
            var t = y(e);
            return t && t.matches || !1
        } : function(t) {
            var n = !1;
            return h("@media " + t + " { #modernizr { position: absolute; } }", (function(t) {
                n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position
            })), n
        };
        s.mq = w;
        var S = s.testStyles = h;
        /*!
        {
        "name": "Touch Events",
        "property": "touchevents",
        "caniuse" : "touch",
        "tags": ["media", "attribute"],
        "notes": [{
        "name": "Touch Events spec",
        "href": "https://www.w3.org/TR/2013/WD-touch-events-20130124/"
        }],
        "warnings": [
        "Indicates if the browser supports the Touch Events spec, and does not necessarily reflect a touchscreen device"
        ],
        "knownBugs": [
        "False-positive on some configurations of Nokia N900",
        "False-positive on some BlackBerry 6.0 builds – https://github.com/Modernizr/Modernizr/issues/372#issuecomment-3112695"
        ]
        }
        !*/
        r.addTest("touchevents", (function() {
            var n;
            if ("ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch) n = !0;
            else {
                var o = ["@media (", a.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
                S(o, (function(e) {
                    n = 9 === e.offsetTop
                }))
            }
            return n
        }));
        var C = "Moz O ms Webkit",
            x = s._config.usePrefixes ? C.split(" ") : [];
        s._cssomPrefixes = x;
        var T = function(t) {
            var o, i = a.length,
                s = e.CSSRule;
            if (void 0 === s) return n;
            if (!t) return !1;
            if ((o = (t = t.replace(/^@/, "")).replace(/-/g, "_").toUpperCase() + "_RULE") in s) return "@" + t;
            for (var r = 0; r < i; r++) {
                var l = a[r];
                if (l.toUpperCase() + "_" + o in s) return "@-" + l.toLowerCase() + "-" + t
            }
            return !1
        };
        s.atRule = T;
        var _ = s._config.usePrefixes ? C.toLowerCase().split(" ") : [];

        function P(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        }
        s._domPrefixes = _;
        var E = {
            elem: p("modernizr")
        };
        r._q.push((function() {
            delete E.elem
        }));
        var O = {
            style: E.elem.style
        };

        function A(t, o) {
            var i = t.length;
            if ("CSS" in e && "supports" in e.CSS) {
                for (; i--;)
                    if (e.CSS.supports(c(t[i]), o)) return !0;
                return !1
            }
            if ("CSSSupportsRule" in e) {
                for (var s = []; i--;) s.push("(" + c(t[i]) + ":" + o + ")");
                return h("@supports (" + (s = s.join(" or ")) + ") { #modernizr { position: absolute; } }", (function(t) {
                    return "absolute" == function(t, n, o) {
                        var i;
                        if ("getComputedStyle" in e) {
                            i = getComputedStyle.call(e, t, n);
                            var s = e.console;
                            null !== i ? o && (i = i.getPropertyValue(o)) : s && s[s.error ? "error" : "log"].call(s, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
                        } else i = !n && t.currentStyle && t.currentStyle[o];
                        return i
                    }(t, null, "position")
                }))
            }
            return n
        }

        function G(e, t, o, i) {
            if (i = !l(i, "undefined") && i, !l(o, "undefined")) {
                var s = A(e, o);
                if (!l(s, "undefined")) return s
            }
            for (var r, a, d, u, c, m = ["modernizr", "tspan", "samp"]; !O.style && m.length;) r = !0, O.modElem = p(m.shift()), O.style = O.modElem.style;

            function g() {
                r && (delete O.style, delete O.modElem)
            }
            for (d = e.length, a = 0; a < d; a++)
                if (u = e[a], c = O.style[u], ~("" + u).indexOf("-") && (u = f(u)), O.style[u] !== n) {
                    if (i || l(o, "undefined")) return g(), "pfx" != t || u;
                    try {
                        O.style[u] = o
                    } catch (e) {}
                    if (O.style[u] != c) return g(), "pfx" != t || u
                }
            return g(), !1
        }
        r._q.unshift((function() {
            delete O.style
        }));
        s.testProp = function(e, t, o) {
            return G([e], n, t, o)
        };

        function M(e, t, n, o, i) {
            var s = e.charAt(0).toUpperCase() + e.slice(1),
                r = (e + " " + x.join(s + " ") + s).split(" ");
            return l(t, "string") || l(t, "undefined") ? G(r, t, o, i) : function(e, t, n) {
                var o;
                for (var i in e)
                    if (e[i] in t) return !1 === n ? e[i] : l(o = t[e[i]], "function") ? P(o, n || t) : o;
                return !1
            }(r = (e + " " + _.join(s + " ") + s).split(" "), t, n)
        }
        s.testAllProps = M;
        var z = s.prefixed = function(e, t, n) {
            return 0 === e.indexOf("@") ? T(e) : (-1 != e.indexOf("-") && (e = f(e)), t ? M(e, t, n) : M(e, "pfx"))
        };
        s.prefixedCSS = function(e) {
            var t = z(e);
            return t && c(t)
        };

        function L(e, t, o) {
            return M(e, n, n, t, o)
        }
        /*!
        {
        "name": "Force Touch Events",
        "property": "forcetouch",
        "authors": ["Kraig Walker"],
        "notes": [{
        "name": "Responding to Force Touch Events from JavaScript",
        "href": "https://developer.apple.com/library/prerelease/mac/documentation/AppleApplications/Conceptual/SafariJSProgTopics/Articles/RespondingtoForceTouchEventsfromJavaScript.html"
        }]
        }
        !*/
        r.addTest("forcetouch", (function() {
                return !!g(z("mouseforcewillbegin", e, !1), e) && (MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN && MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN)
            })),
            /*!
            {
            "name": "CSS Object Fit",
            "caniuse": "object-fit",
            "property": "objectfit",
            "tags": ["css"],
            "builderAliases": ["css_objectfit"],
            "notes": [{
            "name": "Opera Article on Object Fit",
            "href": "https://dev.opera.com/articles/css3-object-fit-object-position/"
            }]
            }
            !*/
            r.addTest("objectfit", !!z("objectFit"), {
                aliases: ["object-fit"]
            }), s.testAllProps = L,
            /*!
            {
            "name": "CSS Animations",
            "property": "cssanimations",
            "caniuse": "css-animation",
            "polyfills": ["transformie", "csssandpaper"],
            "tags": ["css"],
            "warnings": ["Android < 4 will pass this test, but can only animate a single property at a time"],
            "notes": [{
            "name" : "Article: 'Dispelling the Android CSS animation myths'",
            "href": "https://goo.gl/OGw5Gm"
            }]
            }
            !*/
            r.addTest("cssanimations", L("animationName", "a", !0)),
            /*!
            {
            "name": "CSS Grid (old & new)",
            "property": ["cssgrid", "cssgridlegacy"],
            "authors": ["Faruk Ates"],
            "tags": ["css"],
            "notes": [{
            "name": "The new, standardized CSS Grid",
            "href": "https://www.w3.org/TR/css3-grid-layout/"
            }, {
            "name": "The _old_ CSS Grid (legacy)",
            "href": "https://www.w3.org/TR/2011/WD-css3-grid-layout-20110407/"
            }]
            }
            !*/
            r.addTest("cssgridlegacy", L("grid-columns", "10px", !0)), r.addTest("cssgrid", L("grid-template-rows", "none", !0)),
            /*!
            {
            "name": "CSS Filters",
            "property": "cssfilters",
            "caniuse": "css-filters",
            "polyfills": ["polyfilter"],
            "tags": ["css"],
            "builderAliases": ["css_filters"],
            "notes": [{
            "name": "MDN article on CSS filters",
            "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter"
            }]
            }
            !*/
            r.addTest("cssfilters", (function() {
                if (r.supports) return L("filter", "blur(2px)");
                var e = p("a");
                return e.style.cssText = a.join("filter:blur(2px); "), !!e.style.length && (t.documentMode === n || t.documentMode > 9)
            })),
            /*!
            {
            "name": "CSS Transforms",
            "property": "csstransforms",
            "caniuse": "transforms2d",
            "tags": ["css"]
            }
            !*/
            r.addTest("csstransforms", (function() {
                return -1 === navigator.userAgent.indexOf("Android 2.") && L("transform", "scale(1)", !0)
            })),
            /*!
            {
            "name": "CSS Transforms 3D",
            "property": "csstransforms3d",
            "caniuse": "transforms3d",
            "tags": ["css"],
            "warnings": [
            "Chrome may occassionally fail this test on some systems; more info: https://code.google.com/p/chromium/issues/detail?id=129004"
            ]
            }
            !*/
            r.addTest("csstransforms3d", (function() {
                return !!L("perspective", "1px", !0)
            })),
            /*!
            {
            "name": "CSS Transitions",
            "property": "csstransitions",
            "caniuse": "css-transitions",
            "tags": ["css"]
            }
            !*/
            r.addTest("csstransitions", L("transition", "all", !0)),
            function() {
                var e, t, n, s, a, d;
                for (var u in i)
                    if (i.hasOwnProperty(u)) {
                        if (e = [], (t = i[u]).name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                            for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                        for (s = l(t.fn, "function") ? t.fn() : t.fn, a = 0; a < e.length; a++) 1 === (d = e[a].split(".")).length ? r[d[0]] = s : (!r[d[0]] || r[d[0]] instanceof Boolean || (r[d[0]] = new Boolean(r[d[0]])), r[d[0]][d[1]] = s), o.push((s ? "" : "no-") + d.join("-"))
                    }
            }(),
            function(e) {
                var t = d.className,
                    n = r._config.classPrefix || "";
                if (u && (t = t.baseVal), r._config.enableJSClass) {
                    var o = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
                    t = t.replace(o, "$1" + n + "js$2")
                }
                r._config.enableClasses && (t += " " + n + e.join(" " + n), u ? d.className.baseVal = t : d.className = t)
            }(o), delete s.addTest, delete s.addAsyncTest;
        for (var j = 0; j < r._q.length; j++) r._q[j]();
        e.Modernizr = r
    }(window, document);
    var dtGlobals = {};
    dtGlobals.isMobile = /(Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|windows phone)/.test(navigator.userAgent), dtGlobals.isAndroid = /(Android)/.test(navigator.userAgent), dtGlobals.isiOS = /(iPhone|iPod|iPad)/.test(navigator.userAgent), dtGlobals.isiPhone = /(iPhone|iPod)/.test(navigator.userAgent), dtGlobals.isiPad = /(iPad)/.test(navigator.userAgent), dtGlobals.winScrollTop = 0, window.onscroll = function() {
        dtGlobals.winScrollTop = void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
    }, dtGlobals.isWindowsPhone = navigator.userAgent.match(/IEMobile/i), document.documentElement.className += " mobile-" + dtGlobals.isMobile, dtGlobals.logoURL = !1, dtGlobals.logoH = !1, dtGlobals.logoW = !1, jQuery(document).ready((function(e) {
        var t = document.getElementsByTagName("html")[0],
            n = document.body;
        if (dtGlobals.isiOS ? t.classList.add("is-iOS") : t.classList.add("not-iOS"), -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome") && n.classList.add("is-safari"), dtGlobals.isWindowsPhone && (n.classList.add("ie-mobile"), n.classList.add("windows-phone")), dtGlobals.isMobile || n.classList.add("no-mobile"), dtGlobals.isiPhone && n.classList.add("is-iphone"), dtGlobals.isPhone = !1, dtGlobals.isTablet = !1, dtGlobals.isDesktop = !1, dtGlobals.isMobile) {
            var o = window.getComputedStyle(document.body, ":after").getPropertyValue("content"); - 1 != o.indexOf("phone") ? dtGlobals.isPhone = !0 : -1 != o.indexOf("tablet") && (dtGlobals.isTablet = !0)
        } else dtGlobals.isDesktop = !0;
        e(window).on("the7_widget_resize", (function(t) {
            e(".mini-widgets, .mobile-mini-widgets").find(" > *").removeClass("first last"), e(".mini-widgets, .mobile-mini-widgets").find(" > *:visible:first").addClass("first"), e(".mini-widgets, .mobile-mini-widgets").find(" > *:visible:last").addClass("last")
        })).trigger("the7_widget_resize")
    }))
} catch (e) {
    console.error("An error has occurred. [ File: https://the7.io/winery/wp-content/themes/dt-the7/js/above-the-fold.min.js?ver=11.10.1 ] [ " + e.stack + " ]");
}
try {
    /*!
     * jQuery Mousewheel 3.1.13
     * Copyright OpenJS Foundation and other contributors
     */
    ! function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
    }((function(e) {
        var t, i, n = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            o = "onwheel" in window.document || window.document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            l = Array.prototype.slice;
        if (e.event.fixHooks)
            for (var s = n.length; s;) e.event.fixHooks[n[--s]] = e.event.mouseHooks;
        var a = e.event.special.mousewheel = {
            version: "3.1.12",
            setup: function() {
                if (this.addEventListener)
                    for (var t = o.length; t;) this.addEventListener(o[--t], h, !1);
                else this.onmousewheel = h;
                e.data(this, "mousewheel-line-height", a.getLineHeight(this)), e.data(this, "mousewheel-page-height", a.getPageHeight(this))
            },
            teardown: function() {
                if (this.removeEventListener)
                    for (var t = o.length; t;) this.removeEventListener(o[--t], h, !1);
                else this.onmousewheel = null;
                e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height")
            },
            getLineHeight: function(t) {
                var i = e(t),
                    n = i["offsetParent" in e.fn ? "offsetParent" : "parent"]();
                return n.length || (n = e("body")), parseInt(n.css("fontSize"), 10) || parseInt(i.css("fontSize"), 10) || 16
            },
            getPageHeight: function(t) {
                return e(t).height()
            },
            settings: {
                adjustOldDeltas: !0,
                normalizeOffset: !0
            }
        };

        function h(n) {
            var o, s = n || window.event,
                h = l.call(arguments, 1),
                f = 0,
                d = 0,
                w = 0;
            if ((n = e.event.fix(s)).type = "mousewheel", "detail" in s && (w = -1 * s.detail), "wheelDelta" in s && (w = s.wheelDelta), "wheelDeltaY" in s && (w = s.wheelDeltaY), "wheelDeltaX" in s && (d = -1 * s.wheelDeltaX), "axis" in s && s.axis === s.HORIZONTAL_AXIS && (d = -1 * w, w = 0), f = 0 === w ? d : w, "deltaY" in s && (f = w = -1 * s.deltaY), "deltaX" in s && (d = s.deltaX, 0 === w && (f = -1 * d)), 0 !== w || 0 !== d) {
                if (1 === s.deltaMode) {
                    var c = e.data(this, "mousewheel-line-height");
                    f *= c, w *= c, d *= c
                } else if (2 === s.deltaMode) {
                    var m = e.data(this, "mousewheel-page-height");
                    f *= m, w *= m, d *= m
                }
                if (o = Math.max(Math.abs(w), Math.abs(d)), (!i || o < i) && (i = o, u(s, o) && (i /= 40)), u(s, o) && (f /= 40, d /= 40, w /= 40), f = Math[f >= 1 ? "floor" : "ceil"](f / i), d = Math[d >= 1 ? "floor" : "ceil"](d / i), w = Math[w >= 1 ? "floor" : "ceil"](w / i), a.settings.normalizeOffset && this.getBoundingClientRect) {
                    var g = this.getBoundingClientRect();
                    n.offsetX = n.clientX - g.left, n.offsetY = n.clientY - g.top
                }
                return n.deltaX = d, n.deltaY = w, n.deltaFactor = i, n.deltaMode = 0, h.unshift(n, f, d, w), t && window.clearTimeout(t), t = window.setTimeout(r, 200), (e.event.dispatch || e.event.handle).apply(this, h)
            }
        }

        function r() {
            i = null
        }

        function u(e, t) {
            return a.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0
        }
        e.fn.extend({
            mousewheel: function(e) {
                return e ? this.on("mousewheel", e) : this.trigger("mousewheel")
            },
            unmousewheel: function(e) {
                return this.off("mousewheel", e)
            }
        })
    }))
} catch (e) {
    console.error("An error has occurred. [ File: https://the7.io/winery/wp-content/themes/dt-the7/lib/jquery-mousewheel/jquery-mousewheel.min.js?ver=11.10.1 ] [ " + e.stack + " ]");
}
try {
    ! function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e : e(jQuery, window, document)
    }((function(e) {
        var t, o, a, n, i, r, l, s, c, d, u, f, h, m, p, g, v, x, _, w, S, b, C, y, B, T, k, M, O, I, D, E, W, R, A, L, z, P, H, U, F, q, j, Y, X, N, V, Q, G, J, K, Z, $, ee, te, oe, ae, ne, ie, re, le;
        ie = "function" == typeof define && define.amd, re = "undefined" != typeof module && module.exports, le = "https:" == document.location.protocol ? "https:" : "http:", ie || (re ? require("jquery-mousewheel")(e) : e.event.special.mousewheel || e("head").append(decodeURI("%3Cscript src=" + le + "//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js%3E%3C/script%3E"))), o = "mCustomScrollbar", a = "mCS", n = ".mCustomScrollbar", i = {
            setTop: 0,
            setLeft: 0,
            axis: "y",
            scrollbarPosition: "inside",
            scrollInertia: 950,
            autoDraggerLength: !0,
            alwaysShowScrollbar: 0,
            snapOffset: 0,
            mouseWheel: {
                enable: !0,
                scrollAmount: "auto",
                axis: "y",
                deltaFactor: "auto",
                disableOver: ["select", "option", "keygen", "datalist", "textarea"]
            },
            scrollButtons: {
                scrollType: "stepless",
                scrollAmount: "auto"
            },
            keyboard: {
                enable: !0,
                scrollType: "stepless",
                scrollAmount: "auto"
            },
            contentTouchScroll: 25,
            documentTouchScroll: !0,
            advanced: {
                autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                updateOnContentResize: !0,
                updateOnImageLoad: "auto",
                autoUpdateTimeout: 60
            },
            theme: "light",
            callbacks: {
                onTotalScrollOffset: 0,
                onTotalScrollBackOffset: 0,
                alwaysTriggerOffsets: !0
            }
        }, r = 0, l = {}, s = window.attachEvent && !window.addEventListener ? 1 : 0, c = !1, d = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"], u = {
            init: function(t) {
                t = e.extend(!0, {}, i, t);
                var o = f.call(this);
                if (t.live) {
                    var s = t.liveSelector || this.selector || n,
                        c = e(s);
                    if ("off" === t.live) return void m(s);
                    l[s] = setTimeout((function() {
                        c.mCustomScrollbar(t), "once" === t.live && c.length && m(s)
                    }), 500)
                } else m(s);
                return t.setWidth = t.set_width ? t.set_width : t.setWidth, t.setHeight = t.set_height ? t.set_height : t.setHeight, t.axis = t.horizontalScroll ? "x" : p(t.axis), t.scrollInertia = t.scrollInertia > 0 && t.scrollInertia < 17 ? 17 : t.scrollInertia, "object" != typeof t.mouseWheel && 1 == t.mouseWheel && (t.mouseWheel = {
                    enable: !0,
                    scrollAmount: "auto",
                    axis: "y",
                    preventDefault: !1,
                    deltaFactor: "auto",
                    normalizeDelta: !1,
                    invert: !1
                }), t.mouseWheel.scrollAmount = t.mouseWheelPixels ? t.mouseWheelPixels : t.mouseWheel.scrollAmount, t.mouseWheel.normalizeDelta = t.advanced.normalizeMouseWheelDelta ? t.advanced.normalizeMouseWheelDelta : t.mouseWheel.normalizeDelta, t.scrollButtons.scrollType = g(t.scrollButtons.scrollType), h(t), e(o).each((function() {
                    var o = e(this);
                    if (!o.data(a)) {
                        o.data(a, {
                            idx: ++r,
                            opt: t,
                            scrollRatio: {
                                y: null,
                                x: null
                            },
                            overflowed: null,
                            contentReset: {
                                y: null,
                                x: null
                            },
                            bindEvents: !1,
                            tweenRunning: !1,
                            sequential: {},
                            langDir: o.css("direction"),
                            cbOffsets: null,
                            trigger: null,
                            poll: {
                                size: {
                                    o: 0,
                                    n: 0
                                },
                                img: {
                                    o: 0,
                                    n: 0
                                },
                                change: {
                                    o: 0,
                                    n: 0
                                }
                            }
                        });
                        var n = o.data(a),
                            i = n.opt,
                            l = o.data("mcs-axis"),
                            s = o.data("mcs-scrollbar-position"),
                            c = o.data("mcs-theme");
                        l && (i.axis = l), s && (i.scrollbarPosition = s), c && (i.theme = c, h(i)), v.call(this), n && i.callbacks.onCreate && "function" == typeof i.callbacks.onCreate && i.callbacks.onCreate.call(this), e("#mCSB_" + n.idx + "_container img:not(." + d[2] + ")").addClass(d[2]), u.update.call(null, o)
                    }
                }))
            },
            update: function(t, o) {
                var n = t || f.call(this);
                return e(n).each((function() {
                    var t = e(this);
                    if (t.data(a)) {
                        var n = t.data(a),
                            i = n.opt,
                            r = e("#mCSB_" + n.idx + "_container"),
                            l = e("#mCSB_" + n.idx),
                            s = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
                        if (!r.length) return;
                        n.tweenRunning && Q(t), o && n && i.callbacks.onBeforeUpdate && "function" == typeof i.callbacks.onBeforeUpdate && i.callbacks.onBeforeUpdate.call(this), t.hasClass(d[3]) && t.removeClass(d[3]), t.hasClass(d[4]) && t.removeClass(d[4]), l.css("max-height", "none"), l.height() !== t.height() && l.css("max-height", t.height()), _.call(this), "y" === i.axis || i.advanced.autoExpandHorizontalScroll || r.css("width", x(r)), n.overflowed = y.call(this), M.call(this), i.autoDraggerLength && S.call(this), b.call(this), T.call(this);
                        var c = [Math.abs(r[0].offsetTop), Math.abs(r[0].offsetLeft)];
                        "x" !== i.axis && (n.overflowed[0] ? s[0].height() > s[0].parent().height() ? B.call(this) : (G(t, c[0].toString(), {
                            dir: "y",
                            dur: 0,
                            overwrite: "none"
                        }), n.contentReset.y = null) : (B.call(this), "y" === i.axis ? k.call(this) : "yx" === i.axis && n.overflowed[1] && G(t, c[1].toString(), {
                            dir: "x",
                            dur: 0,
                            overwrite: "none"
                        }))), "y" !== i.axis && (n.overflowed[1] ? s[1].width() > s[1].parent().width() ? B.call(this) : (G(t, c[1].toString(), {
                            dir: "x",
                            dur: 0,
                            overwrite: "none"
                        }), n.contentReset.x = null) : (B.call(this), "x" === i.axis ? k.call(this) : "yx" === i.axis && n.overflowed[0] && G(t, c[0].toString(), {
                            dir: "y",
                            dur: 0,
                            overwrite: "none"
                        }))), o && n && (2 === o && i.callbacks.onImageLoad && "function" == typeof i.callbacks.onImageLoad ? i.callbacks.onImageLoad.call(this) : 3 === o && i.callbacks.onSelectorChange && "function" == typeof i.callbacks.onSelectorChange ? i.callbacks.onSelectorChange.call(this) : i.callbacks.onUpdate && "function" == typeof i.callbacks.onUpdate && i.callbacks.onUpdate.call(this)), N.call(this)
                    }
                }))
            },
            scrollTo: function(t, o) {
                if (void 0 !== t && null != t) {
                    var n = f.call(this);
                    return e(n).each((function() {
                        var n = e(this);
                        if (n.data(a)) {
                            var i = n.data(a),
                                r = i.opt,
                                l = {
                                    trigger: "external",
                                    scrollInertia: r.scrollInertia,
                                    scrollEasing: "mcsEaseInOut",
                                    moveDragger: !1,
                                    timeout: 60,
                                    callbacks: !0,
                                    onStart: !0,
                                    onUpdate: !0,
                                    onComplete: !0
                                },
                                s = e.extend(!0, {}, l, o),
                                c = Y.call(this, t),
                                d = s.scrollInertia > 0 && s.scrollInertia < 17 ? 17 : s.scrollInertia;
                            c[0] = X.call(this, c[0], "y"), c[1] = X.call(this, c[1], "x"), s.moveDragger && (c[0] *= i.scrollRatio.y, c[1] *= i.scrollRatio.x), s.dur = ne() ? 0 : d, setTimeout((function() {
                                null !== c[0] && void 0 !== c[0] && "x" !== r.axis && i.overflowed[0] && (s.dir = "y", s.overwrite = "all", G(n, c[0].toString(), s)), null !== c[1] && void 0 !== c[1] && "y" !== r.axis && i.overflowed[1] && (s.dir = "x", s.overwrite = "none", G(n, c[1].toString(), s))
                            }), s.timeout)
                        }
                    }))
                }
            },
            stop: function() {
                var t = f.call(this);
                return e(t).each((function() {
                    var t = e(this);
                    t.data(a) && Q(t)
                }))
            },
            disable: function(t) {
                var o = f.call(this);
                return e(o).each((function() {
                    var o = e(this);
                    o.data(a) && (o.data(a), N.call(this, "remove"), k.call(this), t && B.call(this), M.call(this, !0), o.addClass(d[3]))
                }))
            },
            destroy: function() {
                var t = f.call(this);
                return e(t).each((function() {
                    var n = e(this);
                    if (n.data(a)) {
                        var i = n.data(a),
                            r = i.opt,
                            l = e("#mCSB_" + i.idx),
                            s = e("#mCSB_" + i.idx + "_container"),
                            c = e(".mCSB_" + i.idx + "_scrollbar");
                        r.live && m(r.liveSelector || e(t).selector), N.call(this, "remove"), k.call(this), B.call(this), n.removeData(a), $(this, "mcs"), c.remove(), s.find("img." + d[2]).removeClass(d[2]), l.replaceWith(s.contents()), n.removeClass(o + " _" + a + "_" + i.idx + " " + d[6] + " " + d[7] + " " + d[5] + " " + d[3]).addClass(d[4])
                    }
                }))
            }
        }, f = function() {
            return "object" != typeof e(this) || e(this).length < 1 ? n : this
        }, h = function(t) {
            var o = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"],
                a = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"],
                n = ["minimal", "minimal-dark"],
                i = ["minimal", "minimal-dark"],
                r = ["minimal", "minimal-dark"];
            t.autoDraggerLength = !(e.inArray(t.theme, o) > -1) && t.autoDraggerLength, t.autoExpandScrollbar = !(e.inArray(t.theme, a) > -1) && t.autoExpandScrollbar, t.scrollButtons.enable = !(e.inArray(t.theme, n) > -1) && t.scrollButtons.enable, t.autoHideScrollbar = e.inArray(t.theme, i) > -1 || t.autoHideScrollbar, t.scrollbarPosition = e.inArray(t.theme, r) > -1 ? "outside" : t.scrollbarPosition
        }, m = function(e) {
            l[e] && (clearTimeout(l[e]), $(l, e))
        }, p = function(e) {
            return "yx" === e || "xy" === e || "auto" === e ? "yx" : "x" === e || "horizontal" === e ? "x" : "y"
        }, g = function(e) {
            return "stepped" === e || "pixels" === e || "step" === e || "click" === e ? "stepped" : "stepless"
        }, v = function() {
            var t = e(this),
                n = t.data(a),
                i = n.opt,
                r = i.autoExpandScrollbar ? " " + d[1] + "_expand" : "",
                l = ["<div id='mCSB_" + n.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_vertical" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar'></div></div><div class='mCSB_draggerRail'></div></div></div>", "<div id='mCSB_" + n.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_horizontal" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar'></div></div></div><div class='mCSB_draggerRail'></div></div></div>"],
                s = "yx" === i.axis ? "mCSB_vertical_horizontal" : "x" === i.axis ? "mCSB_horizontal" : "mCSB_vertical",
                c = "yx" === i.axis ? l[0] + l[1] : "x" === i.axis ? l[1] : l[0],
                u = "yx" === i.axis ? "<div id='mCSB_" + n.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
                f = i.autoHideScrollbar ? " " + d[6] : "",
                h = "x" !== i.axis && "rtl" === n.langDir ? " " + d[7] : "";
            i.setWidth && t.css("width", i.setWidth), i.setHeight && t.css("height", i.setHeight), i.setLeft = "y" !== i.axis && "rtl" === n.langDir ? "989999px" : i.setLeft, t.addClass(o + " _" + a + "_" + n.idx + f + h).wrapInner("<div id='mCSB_" + n.idx + "' class='mCustomScrollBox mCS-" + i.theme + " " + s + "'><div id='mCSB_" + n.idx + "_container' class='mCSB_container' style='position:relative; top:" + i.setTop + "; left:" + i.setLeft + ";' dir='" + n.langDir + "' /></div>");
            var m = e("#mCSB_" + n.idx),
                p = e("#mCSB_" + n.idx + "_container");
            "y" === i.axis || i.advanced.autoExpandHorizontalScroll || p.css("width", x(p)), "outside" === i.scrollbarPosition ? ("static" === t.css("position") && t.css("position", "relative"), t.css("overflow", "visible"), m.addClass("mCSB_outside").after(c)) : (m.addClass("mCSB_inside").append(c), p.wrap(u)), w.call(this);
            var g = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
            g[0].css("min-height", g[0].height()), g[1].css("min-width", g[1].width())
        }, x = function(t) {
            var o = [t[0].scrollWidth, Math.max.apply(Math, t.children().map((function() {
                    return e(this).outerWidth(!0)
                })).get())],
                a = t.parent().width();
            return o[0] > a ? o[0] : o[1] > a ? o[1] : "100%"
        }, _ = function() {
            var t = e(this).data(a),
                o = t.opt,
                n = e("#mCSB_" + t.idx + "_container");
            if (o.advanced.autoExpandHorizontalScroll && "y" !== o.axis) {
                n.css({
                    width: "auto",
                    "min-width": 0,
                    "overflow-x": "scroll"
                });
                var i = Math.ceil(n[0].scrollWidth);
                3 === o.advanced.autoExpandHorizontalScroll || 2 !== o.advanced.autoExpandHorizontalScroll && i > n.parent().width() ? n.css({
                    width: i,
                    "min-width": "100%",
                    "overflow-x": "inherit"
                }) : n.css({
                    "overflow-x": "inherit",
                    position: "absolute"
                }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                    width: Math.ceil(n[0].getBoundingClientRect().right + .4) - Math.floor(n[0].getBoundingClientRect().left),
                    "min-width": "100%",
                    position: "relative"
                }).unwrap()
            }
        }, w = function() {
            var t = e(this).data(a),
                o = t.opt,
                n = e(".mCSB_" + t.idx + "_scrollbar:first"),
                i = oe(o.scrollButtons.tabindex) ? "tabindex='" + o.scrollButtons.tabindex + "'" : "",
                r = ["<a href='#' class='" + d[13] + "' " + i + " />", "<a href='#' class='" + d[14] + "' " + i + " />", "<a href='#' class='" + d[15] + "' " + i + " />", "<a href='#' class='" + d[16] + "' " + i + " />"],
                l = ["x" === o.axis ? r[2] : r[0], "x" === o.axis ? r[3] : r[1], r[2], r[3]];
            o.scrollButtons.enable && n.prepend(l[0]).append(l[1]).next(".mCSB_scrollTools").prepend(l[2]).append(l[3])
        }, S = function() {
            var t = e(this).data(a),
                o = e("#mCSB_" + t.idx),
                n = e("#mCSB_" + t.idx + "_container"),
                i = [e("#mCSB_" + t.idx + "_dragger_vertical"), e("#mCSB_" + t.idx + "_dragger_horizontal")],
                r = [o.height() / n.outerHeight(!1), o.width() / n.outerWidth(!1)],
                l = [parseInt(i[0].css("min-height")), Math.round(r[0] * i[0].parent().height()), parseInt(i[1].css("min-width")), Math.round(r[1] * i[1].parent().width())],
                c = s && l[1] < l[0] ? l[0] : l[1],
                d = s && l[3] < l[2] ? l[2] : l[3];
            i[0].css({
                height: c,
                "max-height": i[0].parent().height() - 10
            }).find(".mCSB_dragger_bar").css({
                "line-height": l[0] + "px"
            }), i[1].css({
                width: d,
                "max-width": i[1].parent().width() - 10
            })
        }, b = function() {
            var t = e(this).data(a),
                o = e("#mCSB_" + t.idx),
                n = e("#mCSB_" + t.idx + "_container"),
                i = [e("#mCSB_" + t.idx + "_dragger_vertical"), e("#mCSB_" + t.idx + "_dragger_horizontal")],
                r = [n.outerHeight(!1) - o.height(), n.outerWidth(!1) - o.width()],
                l = [r[0] / (i[0].parent().height() - i[0].height()), r[1] / (i[1].parent().width() - i[1].width())];
            t.scrollRatio = {
                y: l[0],
                x: l[1]
            }
        }, C = function(e, t, o) {
            var a = o ? d[0] + "_expanded" : "",
                n = e.closest(".mCSB_scrollTools");
            "active" === t ? (e.toggleClass(d[0] + " " + a), n.toggleClass(d[1]), e[0]._draggable = e[0]._draggable ? 0 : 1) : e[0]._draggable || ("hide" === t ? (e.removeClass(d[0]), n.removeClass(d[1])) : (e.addClass(d[0]), n.addClass(d[1])))
        }, y = function() {
            var t = e(this).data(a),
                o = e("#mCSB_" + t.idx),
                n = e("#mCSB_" + t.idx + "_container"),
                i = null == t.overflowed ? n.height() : n.outerHeight(!1),
                r = null == t.overflowed ? n.width() : n.outerWidth(!1),
                l = n[0].scrollHeight,
                s = n[0].scrollWidth;
            return l > Math.round(i) && (i = l), s > Math.round(r) && (r = s), [i > o.height(), r > o.width()]
        }, B = function() {
            var t = e(this),
                o = t.data(a),
                n = o.opt,
                i = e("#mCSB_" + o.idx),
                r = e("#mCSB_" + o.idx + "_container"),
                l = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")];
            if (Q(t), ("x" !== n.axis && !o.overflowed[0] || "y" === n.axis && o.overflowed[0]) && (l[0].add(r).css("top", 0), G(t, "_resetY")), "y" !== n.axis && !o.overflowed[1] || "x" === n.axis && o.overflowed[1]) {
                var s = dx = 0;
                "rtl" === o.langDir && (s = i.width() - r.outerWidth(!1), dx = Math.abs(s / o.scrollRatio.x)), r.css("left", s), l[1].css("left", dx), G(t, "_resetX")
            }
        }, T = function() {
            var t = e(this),
                o = t.data(a),
                n = o.opt;
            if (!o.bindEvents) {
                if (I.call(this), n.contentTouchScroll && D.call(this), E.call(this), n.mouseWheel.enable) {
                    function i() {
                        r = setTimeout((function() {
                            e.event.special.mousewheel ? (clearTimeout(r), W.call(t[0])) : i()
                        }), 100)
                    }
                    var r;
                    i()
                }
                P.call(this), U.call(this), n.advanced.autoScrollOnFocus && H.call(this), n.scrollButtons.enable && F.call(this), n.keyboard.enable && q.call(this), o.bindEvents = !0
            }
        }, k = function() {
            var t = e(this),
                o = t.data(a),
                n = o.opt,
                i = a + "_" + o.idx,
                r = ".mCSB_" + o.idx + "_scrollbar",
                l = e("#mCSB_" + o.idx + ",#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper," + r + " ." + d[12] + ",#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal," + r + ">a"),
                s = e("#mCSB_" + o.idx + "_container");
            n.advanced.releaseDraggableSelectors && l.add(e(n.advanced.releaseDraggableSelectors)), n.advanced.extraDraggableSelectors && l.add(e(n.advanced.extraDraggableSelectors)), o.bindEvents && (e(document).add(e(!A() || top.document)).unbind("." + i), l.each((function() {
                e(this).unbind("." + i)
            })), clearTimeout(t[0]._focusTimeout), $(t[0], "_focusTimeout"), clearTimeout(o.sequential.step), $(o.sequential, "step"), clearTimeout(s[0].onCompleteTimeout), $(s[0], "onCompleteTimeout"), o.bindEvents = !1)
        }, M = function(t) {
            var o = e(this),
                n = o.data(a),
                i = n.opt,
                r = e("#mCSB_" + n.idx + "_container_wrapper"),
                l = r.length ? r : e("#mCSB_" + n.idx + "_container"),
                s = [e("#mCSB_" + n.idx + "_scrollbar_vertical"), e("#mCSB_" + n.idx + "_scrollbar_horizontal")],
                c = [s[0].find(".mCSB_dragger"), s[1].find(".mCSB_dragger")];
            "x" !== i.axis && (n.overflowed[0] && !t ? (s[0].add(c[0]).add(s[0].children("a")).css("display", "block"), l.removeClass(d[8] + " " + d[10])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[0].css("display", "none"), l.removeClass(d[10])) : (s[0].css("display", "none"), l.addClass(d[10])), l.addClass(d[8]))), "y" !== i.axis && (n.overflowed[1] && !t ? (s[1].add(c[1]).add(s[1].children("a")).css("display", "block"), l.removeClass(d[9] + " " + d[11])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[1].css("display", "none"), l.removeClass(d[11])) : (s[1].css("display", "none"), l.addClass(d[11])), l.addClass(d[9]))), n.overflowed[0] || n.overflowed[1] ? o.removeClass(d[5]) : o.addClass(d[5])
        }, O = function(t) {
            var o = t.type,
                a = t.target.ownerDocument !== document && null !== frameElement ? [e(frameElement).offset().top, e(frameElement).offset().left] : null,
                n = A() && t.target.ownerDocument !== top.document && null !== frameElement ? [e(t.view.frameElement).offset().top, e(t.view.frameElement).offset().left] : [0, 0];
            switch (o) {
                case "pointerdown":
                case "MSPointerDown":
                case "pointermove":
                case "MSPointerMove":
                case "pointerup":
                case "MSPointerUp":
                    return a ? [t.originalEvent.pageY - a[0] + n[0], t.originalEvent.pageX - a[1] + n[1], !1] : [t.originalEvent.pageY, t.originalEvent.pageX, !1];
                case "touchstart":
                case "touchmove":
                case "touchend":
                    var i = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0],
                        r = t.originalEvent.touches.length || t.originalEvent.changedTouches.length;
                    return t.target.ownerDocument !== document ? [i.screenY, i.screenX, r > 1] : [i.pageY, i.pageX, r > 1];
                default:
                    return a ? [t.pageY - a[0] + n[0], t.pageX - a[1] + n[1], !1] : [t.pageY, t.pageX, !1]
            }
        }, I = function() {
            var t, o, n, i = e(this),
                r = i.data(a),
                l = r.opt,
                d = a + "_" + r.idx,
                u = ["mCSB_" + r.idx + "_dragger_vertical", "mCSB_" + r.idx + "_dragger_horizontal"],
                f = e("#mCSB_" + r.idx + "_container"),
                h = e("#" + u[0] + ",#" + u[1]),
                m = l.advanced.releaseDraggableSelectors ? h.add(e(l.advanced.releaseDraggableSelectors)) : h,
                p = l.advanced.extraDraggableSelectors ? e(!A() || top.document).add(e(l.advanced.extraDraggableSelectors)) : e(!A() || top.document);

            function g(e, o, a, n) {
                if (f[0].idleTimer = l.scrollInertia < 233 ? 250 : 0, t.attr("id") === u[1]) var s = "x",
                    c = (t[0].offsetLeft - o + n) * r.scrollRatio.x;
                else s = "y", c = (t[0].offsetTop - e + a) * r.scrollRatio.y;
                G(i, c.toString(), {
                    dir: s,
                    drag: !0
                })
            }
            h.bind("contextmenu." + d, (function(e) {
                e.preventDefault()
            })).bind("mousedown." + d + " touchstart." + d + " pointerdown." + d + " MSPointerDown." + d, (function(a) {
                if (a.stopImmediatePropagation(), a.preventDefault(), ee(a)) {
                    c = !0, s && (document.onselectstart = function() {
                        return !1
                    }), L.call(f, !1), Q(i);
                    var r = (t = e(this)).offset(),
                        d = O(a)[0] - r.top,
                        u = O(a)[1] - r.left,
                        h = t.height() + r.top,
                        m = t.width() + r.left;
                    d < h && d > 0 && u < m && u > 0 && (o = d, n = u), C(t, "active", l.autoExpandScrollbar)
                }
            })).bind("touchmove." + d, (function(e) {
                e.stopImmediatePropagation(), e.preventDefault();
                var a = t.offset(),
                    i = O(e)[0] - a.top,
                    r = O(e)[1] - a.left;
                g(o, n, i, r)
            })), e(document).add(p).bind("mousemove." + d + " pointermove." + d + " MSPointerMove." + d, (function(e) {
                if (t) {
                    var a = t.offset(),
                        i = O(e)[0] - a.top,
                        r = O(e)[1] - a.left;
                    if (o === i && n === r) return;
                    g(o, n, i, r)
                }
            })).add(m).bind("mouseup." + d + " touchend." + d + " pointerup." + d + " MSPointerUp." + d, (function(e) {
                t && (C(t, "active", l.autoExpandScrollbar), t = null), c = !1, s && (document.onselectstart = null), L.call(f, !0)
            }))
        }, D = function() {
            var o, n, i, r, l, s, d, u, f, h, m, p, g, v, x = e(this),
                _ = x.data(a),
                w = _.opt,
                S = a + "_" + _.idx,
                b = e("#mCSB_" + _.idx),
                C = e("#mCSB_" + _.idx + "_container"),
                y = [e("#mCSB_" + _.idx + "_dragger_vertical"), e("#mCSB_" + _.idx + "_dragger_horizontal")],
                B = [],
                T = [],
                k = 0,
                M = "yx" === w.axis ? "none" : "all",
                I = [],
                D = C.find("iframe"),
                E = ["touchstart." + S + " pointerdown." + S + " MSPointerDown." + S, "touchmove." + S + " pointermove." + S + " MSPointerMove." + S, "touchend." + S + " pointerup." + S + " MSPointerUp." + S],
                W = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction;

            function R(e) {
                if (!te(e) || c || O(e)[2]) t = 0;
                else {
                    t = 1, g = 0, v = 0, o = 1, x.removeClass("mCS_touch_action");
                    var a = C.offset();
                    n = O(e)[0] - a.top, i = O(e)[1] - a.left, I = [O(e)[0], O(e)[1]]
                }
            }

            function L(e) {
                if (te(e) && !c && !O(e)[2] && (w.documentTouchScroll || e.preventDefault(), e.stopImmediatePropagation(), (!v || g) && o)) {
                    d = K();
                    var t = b.offset(),
                        a = O(e)[0] - t.top,
                        r = O(e)[1] - t.left,
                        l = "mcsLinearOut";
                    if (B.push(a), T.push(r), I[2] = Math.abs(O(e)[0] - I[0]), I[3] = Math.abs(O(e)[1] - I[1]), _.overflowed[0]) var s = y[0].parent().height() - y[0].height(),
                        u = n - a > 0 && a - n > -s * _.scrollRatio.y && (2 * I[3] < I[2] || "yx" === w.axis);
                    if (_.overflowed[1]) var f = y[1].parent().width() - y[1].width(),
                        h = i - r > 0 && r - i > -f * _.scrollRatio.x && (2 * I[2] < I[3] || "yx" === w.axis);
                    u || h ? (W || e.preventDefault(), g = 1) : (v = 1, x.addClass("mCS_touch_action")), W && e.preventDefault(), m = "yx" === w.axis ? [n - a, i - r] : "x" === w.axis ? [null, i - r] : [n - a, null], C[0].idleTimer = 250, _.overflowed[0] && U(m[0], k, l, "y", "all", !0), _.overflowed[1] && U(m[1], k, l, "x", M, !0)
                }
            }

            function z(e) {
                if (!te(e) || c || O(e)[2]) t = 0;
                else {
                    t = 1, e.stopImmediatePropagation(), Q(x), s = K();
                    var o = b.offset();
                    r = O(e)[0] - o.top, l = O(e)[1] - o.left, B = [], T = []
                }
            }

            function P(e) {
                if (te(e) && !c && !O(e)[2]) {
                    o = 0, e.stopImmediatePropagation(), g = 0, v = 0, u = K();
                    var t = b.offset(),
                        a = O(e)[0] - t.top,
                        n = O(e)[1] - t.left;
                    if (!(u - d > 30)) {
                        var i = "mcsEaseOut",
                            x = (h = 1e3 / (u - s)) < 2.5,
                            S = x ? [B[B.length - 2], T[T.length - 2]] : [0, 0];
                        f = x ? [a - S[0], n - S[1]] : [a - r, n - l];
                        var y = [Math.abs(f[0]), Math.abs(f[1])];
                        h = x ? [Math.abs(f[0] / 4), Math.abs(f[1] / 4)] : [h, h];
                        var k = [Math.abs(C[0].offsetTop) - f[0] * H(y[0] / h[0], h[0]), Math.abs(C[0].offsetLeft) - f[1] * H(y[1] / h[1], h[1])];
                        m = "yx" === w.axis ? [k[0], k[1]] : "x" === w.axis ? [null, k[1]] : [k[0], null], p = [4 * y[0] + w.scrollInertia, 4 * y[1] + w.scrollInertia];
                        var I = parseInt(w.contentTouchScroll) || 0;
                        m[0] = y[0] > I ? m[0] : 0, m[1] = y[1] > I ? m[1] : 0, _.overflowed[0] && U(m[0], p[0], i, "y", M, !1), _.overflowed[1] && U(m[1], p[1], i, "x", M, !1)
                    }
                }
            }

            function H(e, t) {
                var o = [1.5 * t, 2 * t, t / 1.5, t / 2];
                return e > 90 ? t > 4 ? o[0] : o[3] : e > 60 ? t > 3 ? o[3] : o[2] : e > 30 ? t > 8 ? o[1] : t > 6 ? o[0] : t > 4 ? t : o[2] : t > 8 ? t : o[3]
            }

            function U(e, t, o, a, n, i) {
                e && G(x, e.toString(), {
                    dur: t,
                    scrollEasing: o,
                    dir: a,
                    overwrite: n,
                    drag: i
                })
            }
            C.bind(E[0], (function(e) {
                R(e)
            })).bind(E[1], (function(e) {
                L(e)
            })), b.bind(E[0], (function(e) {
                z(e)
            })).bind(E[2], (function(e) {
                P(e)
            })), D.length && D.each((function() {
                e(this).bind("load", (function() {
                    A(this) && e(this.contentDocument || this.contentWindow.document).bind(E[0], (function(e) {
                        R(e), z(e)
                    })).bind(E[1], (function(e) {
                        L(e)
                    })).bind(E[2], (function(e) {
                        P(e)
                    }))
                }))
            }))
        }, E = function() {
            var o, n = e(this),
                i = n.data(a),
                r = i.opt,
                l = i.sequential,
                s = a + "_" + i.idx,
                d = e("#mCSB_" + i.idx + "_container"),
                u = d.parent();

            function f() {
                return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0
            }

            function h(e, t, a) {
                l.type = a && o ? "stepped" : "stepless", l.scrollAmount = 10, j(n, e, t, "mcsLinearOut", a ? 60 : null)
            }
            d.bind("mousedown." + s, (function(e) {
                t || o || (o = 1, c = !0)
            })).add(document).bind("mousemove." + s, (function(e) {
                if (!t && o && f()) {
                    var a = d.offset(),
                        n = O(e)[0] - a.top + d[0].offsetTop,
                        s = O(e)[1] - a.left + d[0].offsetLeft;
                    n > 0 && n < u.height() && s > 0 && s < u.width() ? l.step && h("off", null, "stepped") : ("x" !== r.axis && i.overflowed[0] && (n < 0 ? h("on", 38) : n > u.height() && h("on", 40)), "y" !== r.axis && i.overflowed[1] && (s < 0 ? h("on", 37) : s > u.width() && h("on", 39)))
                }
            })).bind("mouseup." + s + " dragend." + s, (function(e) {
                t || (o && (o = 0, h("off", null)), c = !1)
            }))
        }, W = function() {
            if (e(this).data(a)) {
                var t = e(this),
                    o = t.data(a),
                    n = o.opt,
                    i = a + "_" + o.idx,
                    r = e("#mCSB_" + o.idx),
                    l = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")],
                    c = e("#mCSB_" + o.idx + "_container").find("iframe");
                c.length && c.each((function() {
                    e(this).bind("load", (function() {
                        A(this) && e(this.contentDocument || this.contentWindow.document).bind("mousewheel." + i, (function(e, t) {
                            d(e, t)
                        }))
                    }))
                })), r.bind("mousewheel." + i, (function(e, t) {
                    d(e, t)
                }))
            }

            function d(a, i) {
                if (Q(t), !z(t, a.target)) {
                    var c = "auto" !== n.mouseWheel.deltaFactor ? parseInt(n.mouseWheel.deltaFactor) : s && a.deltaFactor < 100 ? 100 : a.deltaFactor || 100,
                        d = n.scrollInertia;
                    if ("x" === n.axis || "x" === n.mouseWheel.axis) var u = "x",
                        f = [Math.round(c * o.scrollRatio.x), parseInt(n.mouseWheel.scrollAmount)],
                        h = "auto" !== n.mouseWheel.scrollAmount ? f[1] : f[0] >= r.width() ? .9 * r.width() : f[0],
                        m = Math.abs(e("#mCSB_" + o.idx + "_container")[0].offsetLeft),
                        p = l[1][0].offsetLeft,
                        g = l[1].parent().width() - l[1].width(),
                        v = "y" === n.mouseWheel.axis ? a.deltaY || i : a.deltaX;
                    else u = "y", f = [Math.round(c * o.scrollRatio.y), parseInt(n.mouseWheel.scrollAmount)], h = "auto" !== n.mouseWheel.scrollAmount ? f[1] : f[0] >= r.height() ? .9 * r.height() : f[0], m = Math.abs(e("#mCSB_" + o.idx + "_container")[0].offsetTop), p = l[0][0].offsetTop, g = l[0].parent().height() - l[0].height(), v = a.deltaY || i;
                    "y" === u && !o.overflowed[0] || "x" === u && !o.overflowed[1] || ((n.mouseWheel.invert || a.webkitDirectionInvertedFromDevice) && (v = -v), n.mouseWheel.normalizeDelta && (v = v < 0 ? -1 : 1), (v > 0 && 0 !== p || v < 0 && p !== g || n.mouseWheel.preventDefault) && (a.stopImmediatePropagation(), a.preventDefault()), a.deltaFactor < 5 && !n.mouseWheel.normalizeDelta && (h = a.deltaFactor, d = 17), G(t, (m - v * h).toString(), {
                        dir: u,
                        dur: d
                    }))
                }
            }
        }, R = new Object, A = function(t) {
            var o = !1,
                a = !1,
                n = null;
            if (void 0 === t ? a = "#empty" : void 0 !== e(t).attr("id") && (a = e(t).attr("id")), !1 !== a && void 0 !== R[a]) return R[a];
            if (t) {
                try {
                    n = (t.contentDocument || t.contentWindow.document).body.innerHTML
                } catch (e) {}
                o = null !== n
            } else {
                try {
                    n = top.document.body.innerHTML
                } catch (e) {}
                o = null !== n
            }
            return !1 !== a && (R[a] = o), o
        }, L = function(e) {
            var t = this.find("iframe");
            if (t.length) {
                var o = e ? "auto" : "none";
                t.css("pointer-events", o)
            }
        }, z = function(t, o) {
            var n = o.nodeName.toLowerCase(),
                i = t.data(a).opt.mouseWheel.disableOver,
                r = ["select", "textarea"];
            return e.inArray(n, i) > -1 && !(e.inArray(n, r) > -1 && !e(o).is(":focus"))
        }, P = function() {
            var t, o = e(this),
                n = o.data(a),
                i = a + "_" + n.idx,
                r = e("#mCSB_" + n.idx + "_container"),
                l = r.parent();
            e(".mCSB_" + n.idx + "_scrollbar ." + d[12]).bind("mousedown." + i + " touchstart." + i + " pointerdown." + i + " MSPointerDown." + i, (function(o) {
                c = !0, e(o.target).hasClass("mCSB_dragger") || (t = 1)
            })).bind("touchend." + i + " pointerup." + i + " MSPointerUp." + i, (function(e) {
                c = !1
            })).bind("click." + i, (function(a) {
                if (t && (t = 0, e(a.target).hasClass(d[12]) || e(a.target).hasClass("mCSB_draggerRail"))) {
                    Q(o);
                    var i = e(this),
                        s = i.find(".mCSB_dragger");
                    if (i.parent(".mCSB_scrollTools_horizontal").length > 0) {
                        if (!n.overflowed[1]) return;
                        var c = "x",
                            u = a.pageX > s.offset().left ? -1 : 1,
                            f = Math.abs(r[0].offsetLeft) - u * (.9 * l.width())
                    } else {
                        if (!n.overflowed[0]) return;
                        c = "y", u = a.pageY > s.offset().top ? -1 : 1, f = Math.abs(r[0].offsetTop) - u * (.9 * l.height())
                    }
                    G(o, f.toString(), {
                        dir: c,
                        scrollEasing: "mcsEaseInOut"
                    })
                }
            }))
        }, H = function() {
            var t = e(this),
                o = t.data(a),
                n = o.opt,
                i = a + "_" + o.idx,
                r = e("#mCSB_" + o.idx + "_container"),
                l = r.parent();
            r.bind("focusin." + i, (function(o) {
                var a = e(document.activeElement),
                    i = r.find(".mCustomScrollBox").length,
                    s = 0;
                a.is(n.advanced.autoScrollOnFocus) && (Q(t), clearTimeout(t[0]._focusTimeout), t[0]._focusTimer = i ? (s + 17) * i : 0, t[0]._focusTimeout = setTimeout((function() {
                    var e = [ae(a)[0], ae(a)[1]],
                        o = [r[0].offsetTop, r[0].offsetLeft],
                        i = [o[0] + e[0] >= 0 && o[0] + e[0] < l.height() - a.outerHeight(!1), o[1] + e[1] >= 0 && o[0] + e[1] < l.width() - a.outerWidth(!1)],
                        c = "yx" !== n.axis || i[0] || i[1] ? "all" : "none";
                    "x" === n.axis || i[0] || G(t, e[0].toString(), {
                        dir: "y",
                        scrollEasing: "mcsEaseInOut",
                        overwrite: c,
                        dur: s
                    }), "y" === n.axis || i[1] || G(t, e[1].toString(), {
                        dir: "x",
                        scrollEasing: "mcsEaseInOut",
                        overwrite: c,
                        dur: s
                    })
                }), t[0]._focusTimer))
            }))
        }, U = function() {
            var t = e(this).data(a),
                o = a + "_" + t.idx,
                n = e("#mCSB_" + t.idx + "_container").parent();
            n.bind("scroll." + o, (function(o) {
                0 === n.scrollTop() && 0 === n.scrollLeft() || e(".mCSB_" + t.idx + "_scrollbar").css("visibility", "hidden")
            }))
        }, F = function() {
            var t = e(this),
                o = t.data(a),
                n = o.opt,
                i = o.sequential,
                r = a + "_" + o.idx,
                l = ".mCSB_" + o.idx + "_scrollbar";
            e(l + ">a").bind("contextmenu." + r, (function(e) {
                e.preventDefault()
            })).bind("mousedown." + r + " touchstart." + r + " pointerdown." + r + " MSPointerDown." + r + " mouseup." + r + " touchend." + r + " pointerup." + r + " MSPointerUp." + r + " mouseout." + r + " pointerout." + r + " MSPointerOut." + r + " click." + r, (function(a) {
                if (a.preventDefault(), ee(a)) {
                    var r = e(this).attr("class");
                    switch (i.type = n.scrollButtons.scrollType, a.type) {
                        case "mousedown":
                        case "touchstart":
                        case "pointerdown":
                        case "MSPointerDown":
                            if ("stepped" === i.type) return;
                            c = !0, o.tweenRunning = !1, l("on", r);
                            break;
                        case "mouseup":
                        case "touchend":
                        case "pointerup":
                        case "MSPointerUp":
                        case "mouseout":
                        case "pointerout":
                        case "MSPointerOut":
                            if ("stepped" === i.type) return;
                            c = !1, i.dir && l("off", r);
                            break;
                        case "click":
                            if ("stepped" !== i.type || o.tweenRunning) return;
                            l("on", r)
                    }
                }

                function l(e, o) {
                    i.scrollAmount = n.scrollButtons.scrollAmount, j(t, e, o)
                }
            }))
        }, q = function() {
            var t = e(this),
                o = t.data(a),
                n = o.opt,
                i = o.sequential,
                r = a + "_" + o.idx,
                l = e("#mCSB_" + o.idx),
                s = e("#mCSB_" + o.idx + "_container"),
                c = s.parent(),
                d = "input,textarea,select,datalist,keygen,[contenteditable='true']",
                u = s.find("iframe"),
                f = ["blur." + r + " keydown." + r + " keyup." + r];

            function h(a) {
                switch (a.type) {
                    case "blur":
                        o.tweenRunning && i.dir && m("off", null);
                        break;
                    case "keydown":
                    case "keyup":
                        var r = a.keyCode ? a.keyCode : a.which,
                            l = "on";
                        if ("x" !== n.axis && (38 === r || 40 === r) || "y" !== n.axis && (37 === r || 39 === r)) {
                            if ((38 === r || 40 === r) && !o.overflowed[0] || (37 === r || 39 === r) && !o.overflowed[1]) return;
                            "keyup" === a.type && (l = "off"), e(document.activeElement).is(d) || (a.preventDefault(), a.stopImmediatePropagation(), m(l, r))
                        } else if (33 === r || 34 === r) {
                            if ((o.overflowed[0] || o.overflowed[1]) && (a.preventDefault(), a.stopImmediatePropagation()), "keyup" === a.type) {
                                Q(t);
                                var u = 34 === r ? -1 : 1;
                                if ("x" === n.axis || "yx" === n.axis && o.overflowed[1] && !o.overflowed[0]) var f = "x",
                                    h = Math.abs(s[0].offsetLeft) - u * (.9 * c.width());
                                else f = "y", h = Math.abs(s[0].offsetTop) - u * (.9 * c.height());
                                G(t, h.toString(), {
                                    dir: f,
                                    scrollEasing: "mcsEaseInOut"
                                })
                            }
                        } else 35 !== r && 36 !== r || e(document.activeElement).is(d) || ((o.overflowed[0] || o.overflowed[1]) && (a.preventDefault(), a.stopImmediatePropagation()), "keyup" !== a.type) || ("x" === n.axis || "yx" === n.axis && o.overflowed[1] && !o.overflowed[0] ? (f = "x", h = 35 === r ? Math.abs(c.width() - s.outerWidth(!1)) : 0) : (f = "y", h = 35 === r ? Math.abs(c.height() - s.outerHeight(!1)) : 0), G(t, h.toString(), {
                            dir: f,
                            scrollEasing: "mcsEaseInOut"
                        }))
                }

                function m(e, a) {
                    i.type = n.keyboard.scrollType, i.scrollAmount = n.keyboard.scrollAmount, "stepped" === i.type && o.tweenRunning || j(t, e, a)
                }
            }
            u.length && u.each((function() {
                e(this).bind("load", (function() {
                    A(this) && e(this.contentDocument || this.contentWindow.document).bind(f[0], (function(e) {
                        h(e)
                    }))
                }))
            })), l.attr("tabindex", "0").bind(f[0], (function(e) {
                h(e)
            }))
        }, j = function(t, o, n, i, r) {
            var l = t.data(a),
                s = l.opt,
                c = l.sequential,
                u = e("#mCSB_" + l.idx + "_container"),
                f = "stepped" === c.type,
                h = s.scrollInertia < 26 ? 26 : s.scrollInertia,
                m = s.scrollInertia < 1 ? 17 : s.scrollInertia;
            switch (o) {
                case "on":
                    if (c.dir = [n === d[16] || n === d[15] || 39 === n || 37 === n ? "x" : "y", n === d[13] || n === d[15] || 38 === n || 37 === n ? -1 : 1], Q(t), oe(n) && "stepped" === c.type) return;
                    p(f);
                    break;
                case "off":
                    g(), (f || l.tweenRunning && c.dir) && p(!0)
            }

            function p(e) {
                s.snapAmount && (c.scrollAmount = s.snapAmount instanceof Array ? "x" === c.dir[0] ? s.snapAmount[1] : s.snapAmount[0] : s.snapAmount);
                var o = "stepped" !== c.type,
                    a = r || (e ? o ? h / 1.5 : m : 1e3 / 60),
                    n = e ? o ? 7.5 : 40 : 2.5,
                    d = [Math.abs(u[0].offsetTop), Math.abs(u[0].offsetLeft)],
                    f = [l.scrollRatio.y > 10 ? 10 : l.scrollRatio.y, l.scrollRatio.x > 10 ? 10 : l.scrollRatio.x],
                    g = "x" === c.dir[0] ? d[1] + c.dir[1] * (f[1] * n) : d[0] + c.dir[1] * (f[0] * n),
                    v = "x" === c.dir[0] ? d[1] + c.dir[1] * parseInt(c.scrollAmount) : d[0] + c.dir[1] * parseInt(c.scrollAmount),
                    x = "auto" !== c.scrollAmount ? v : g,
                    _ = i || (e ? o ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear"),
                    w = !!e;
                e && a < 17 && (x = "x" === c.dir[0] ? d[1] : d[0]), G(t, x.toString(), {
                    dir: c.dir[0],
                    scrollEasing: _,
                    dur: a,
                    onComplete: w
                }), e ? c.dir = !1 : (clearTimeout(c.step), c.step = setTimeout((function() {
                    p()
                }), a))
            }

            function g() {
                clearTimeout(c.step), $(c, "step"), Q(t)
            }
        }, Y = function(t) {
            var o = e(this).data(a).opt,
                n = [];
            return "function" == typeof t && (t = t()), t instanceof Array ? n = t.length > 1 ? [t[0], t[1]] : "x" === o.axis ? [null, t[0]] : [t[0], null] : (n[0] = t.y ? t.y : t.x || "x" === o.axis ? null : t, n[1] = t.x ? t.x : t.y || "y" === o.axis ? null : t), "function" == typeof n[0] && (n[0] = n[0]()), "function" == typeof n[1] && (n[1] = n[1]()), n
        }, X = function(t, o) {
            if (null != t && void 0 !== t) {
                var n = e(this),
                    i = n.data(a),
                    r = i.opt,
                    l = e("#mCSB_" + i.idx + "_container"),
                    s = l.parent(),
                    c = typeof t;
                o || (o = "x" === r.axis ? "x" : "y");
                var d = "x" === o ? l.outerWidth(!1) - s.width() : l.outerHeight(!1) - s.height(),
                    f = "x" === o ? l[0].offsetLeft : l[0].offsetTop,
                    h = "x" === o ? "left" : "top";
                switch (c) {
                    case "function":
                        return t();
                    case "object":
                        if (!(p = t.jquery ? t : e(t)).length) return;
                        return "x" === o ? ae(p)[1] : ae(p)[0];
                    case "string":
                    case "number":
                        if (oe(t)) return Math.abs(t);
                        if (-1 !== t.indexOf("%")) return Math.abs(d * parseInt(t) / 100);
                        if (-1 !== t.indexOf("-=")) return Math.abs(f - parseInt(t.split("-=")[1]));
                        if (-1 !== t.indexOf("+=")) {
                            var m = f + parseInt(t.split("+=")[1]);
                            return m >= 0 ? 0 : Math.abs(m)
                        }
                        if (-1 !== t.indexOf("px") && oe(t.split("px")[0])) return Math.abs(t.split("px")[0]);
                        if ("top" === t || "left" === t) return 0;
                        if ("bottom" === t) return Math.abs(s.height() - l.outerHeight(!1));
                        if ("right" === t) return Math.abs(s.width() - l.outerWidth(!1));
                        if ("first" === t || "last" === t) {
                            var p = l.find(":" + t);
                            return "x" === o ? ae(p)[1] : ae(p)[0]
                        }
                        return e(t).length ? "x" === o ? ae(e(t))[1] : ae(e(t))[0] : (l.css(h, t), void u.update.call(null, n[0]))
                }
            }
        }, N = function(t) {
            var o = e(this),
                n = o.data(a),
                i = n.opt,
                r = e("#mCSB_" + n.idx + "_container");
            if (t) return clearTimeout(r[0].autoUpdate), void $(r[0], "autoUpdate");

            function l() {
                clearTimeout(r[0].autoUpdate), 0 !== o.parents("html").length ? r[0].autoUpdate = setTimeout((function() {
                    return i.advanced.updateOnSelectorChange && (n.poll.change.n = c(), n.poll.change.n !== n.poll.change.o) ? (n.poll.change.o = n.poll.change.n, void f(3)) : i.advanced.updateOnContentResize && (n.poll.size.n = o[0].scrollHeight + o[0].scrollWidth + r[0].offsetHeight + o[0].offsetHeight + o[0].offsetWidth, n.poll.size.n !== n.poll.size.o) ? (n.poll.size.o = n.poll.size.n, void f(1)) : !i.advanced.updateOnImageLoad || "auto" === i.advanced.updateOnImageLoad && "y" === i.axis || (n.poll.img.n = r.find("img").length, n.poll.img.n === n.poll.img.o) ? void((i.advanced.updateOnSelectorChange || i.advanced.updateOnContentResize || i.advanced.updateOnImageLoad) && l()) : (n.poll.img.o = n.poll.img.n, void r.find("img").each((function() {
                        s(this)
                    })))
                }), i.advanced.autoUpdateTimeout) : o = null
            }

            function s(t) {
                if (e(t).hasClass(d[2])) f();
                else {
                    var o = new Image;
                    o.onload = a(o, n), o.src = t.src
                }

                function a(e, t) {
                    return function() {
                        return t.apply(e, arguments)
                    }
                }

                function n() {
                    this.onload = null, e(t).addClass(d[2]), f(2)
                }
            }

            function c() {
                !0 === i.advanced.updateOnSelectorChange && (i.advanced.updateOnSelectorChange = "*");
                var e = 0,
                    t = r.find(i.advanced.updateOnSelectorChange);
                return i.advanced.updateOnSelectorChange && t.length > 0 && t.each((function() {
                    e += this.offsetHeight + this.offsetWidth
                })), e
            }

            function f(e) {
                clearTimeout(r[0].autoUpdate), u.update.call(null, o[0], e)
            }
            l()
        }, V = function(e, t, o) {
            return Math.round(e / t) * t - o
        }, Q = function(t) {
            var o = t.data(a);
            e("#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper,#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal").each((function() {
                Z.call(this)
            }))
        }, G = function(t, o, n) {
            var i = t.data(a),
                r = i.opt,
                l = {
                    trigger: "internal",
                    dir: "y",
                    scrollEasing: "mcsEaseOut",
                    drag: !1,
                    dur: r.scrollInertia,
                    overwrite: "all",
                    callbacks: !0,
                    onStart: !0,
                    onUpdate: !0,
                    onComplete: !0
                },
                s = [(n = e.extend(l, n)).dur, n.drag ? 0 : n.dur],
                c = e("#mCSB_" + i.idx),
                d = e("#mCSB_" + i.idx + "_container"),
                u = d.parent(),
                f = r.callbacks.onTotalScrollOffset ? Y.call(t, r.callbacks.onTotalScrollOffset) : [0, 0],
                h = r.callbacks.onTotalScrollBackOffset ? Y.call(t, r.callbacks.onTotalScrollBackOffset) : [0, 0];
            if (i.trigger = n.trigger, 0 === u.scrollTop() && 0 === u.scrollLeft() || (e(".mCSB_" + i.idx + "_scrollbar").css("visibility", "visible"), u.scrollTop(0).scrollLeft(0)), "_resetY" !== o || i.contentReset.y || (B("onOverflowYNone") && r.callbacks.onOverflowYNone.call(t[0]), i.contentReset.y = 1), "_resetX" !== o || i.contentReset.x || (B("onOverflowXNone") && r.callbacks.onOverflowXNone.call(t[0]), i.contentReset.x = 1), "_resetY" !== o && "_resetX" !== o) {
                if (!i.contentReset.y && t[0].mcs || !i.overflowed[0] || (B("onOverflowY") && r.callbacks.onOverflowY.call(t[0]), i.contentReset.x = null), !i.contentReset.x && t[0].mcs || !i.overflowed[1] || (B("onOverflowX") && r.callbacks.onOverflowX.call(t[0]), i.contentReset.x = null), r.snapAmount) {
                    var m = r.snapAmount instanceof Array ? "x" === n.dir ? r.snapAmount[1] : r.snapAmount[0] : r.snapAmount;
                    o = V(o, m, r.snapOffset)
                }
                switch (n.dir) {
                    case "x":
                        var p = e("#mCSB_" + i.idx + "_dragger_horizontal"),
                            g = "left",
                            v = d[0].offsetLeft,
                            x = [c.width() - d.outerWidth(!1), p.parent().width() - p.width()],
                            _ = [o, 0 === o ? 0 : o / i.scrollRatio.x],
                            w = f[1],
                            S = h[1],
                            b = w > 0 ? w / i.scrollRatio.x : 0,
                            y = S > 0 ? S / i.scrollRatio.x : 0;
                        break;
                    case "y":
                        p = e("#mCSB_" + i.idx + "_dragger_vertical"), g = "top", v = d[0].offsetTop, x = [c.height() - d.outerHeight(!1), p.parent().height() - p.height()], _ = [o, 0 === o ? 0 : o / i.scrollRatio.y], w = f[0], S = h[0], b = w > 0 ? w / i.scrollRatio.y : 0, y = S > 0 ? S / i.scrollRatio.y : 0
                }
                _[1] < 0 || 0 === _[0] && 0 === _[1] ? _ = [0, 0] : _[1] >= x[1] ? _ = [x[0], x[1]] : _[0] = -_[0], t[0].mcs || (k(), B("onInit") && r.callbacks.onInit.call(t[0])), clearTimeout(d[0].onCompleteTimeout), J(p[0], g, Math.round(_[1]), s[1], n.scrollEasing), !i.tweenRunning && (0 === v && _[0] >= 0 || v === x[0] && _[0] <= x[0]) || J(d[0], g, Math.round(_[0]), s[0], n.scrollEasing, n.overwrite, {
                    onStart: function() {
                        n.callbacks && n.onStart && !i.tweenRunning && (B("onScrollStart") && (k(), r.callbacks.onScrollStart.call(t[0])), i.tweenRunning = !0, C(p), i.cbOffsets = T())
                    },
                    onUpdate: function() {
                        n.callbacks && n.onUpdate && B("whileScrolling") && (k(), r.callbacks.whileScrolling.call(t[0]))
                    },
                    onComplete: function() {
                        if (n.callbacks && n.onComplete) {
                            "yx" === r.axis && clearTimeout(d[0].onCompleteTimeout);
                            var e = d[0].idleTimer || 0;
                            d[0].onCompleteTimeout = setTimeout((function() {
                                B("onScroll") && (k(), r.callbacks.onScroll.call(t[0])), B("onTotalScroll") && _[1] >= x[1] - b && i.cbOffsets[0] && (k(), r.callbacks.onTotalScroll.call(t[0])), B("onTotalScrollBack") && _[1] <= y && i.cbOffsets[1] && (k(), r.callbacks.onTotalScrollBack.call(t[0])), i.tweenRunning = !1, d[0].idleTimer = 0, C(p, "hide")
                            }), e)
                        }
                    }
                })
            }

            function B(e) {
                return i && r.callbacks[e] && "function" == typeof r.callbacks[e]
            }

            function T() {
                return [r.callbacks.alwaysTriggerOffsets || v >= x[0] + w, r.callbacks.alwaysTriggerOffsets || v <= -S]
            }

            function k() {
                var e = [d[0].offsetTop, d[0].offsetLeft],
                    o = [p[0].offsetTop, p[0].offsetLeft],
                    a = [d.outerHeight(!1), d.outerWidth(!1)],
                    i = [c.height(), c.width()];
                t[0].mcs = {
                    content: d,
                    top: e[0],
                    left: e[1],
                    draggerTop: o[0],
                    draggerLeft: o[1],
                    topPct: Math.round(100 * Math.abs(e[0]) / (Math.abs(a[0]) - i[0])),
                    leftPct: Math.round(100 * Math.abs(e[1]) / (Math.abs(a[1]) - i[1])),
                    direction: n.dir
                }
            }
        }, J = function(e, t, o, a, n, i, r) {
            e._mTween || (e._mTween = {
                top: {},
                left: {}
            });
            var l, s, c = (r = r || {}).onStart || function() {},
                d = r.onUpdate || function() {},
                u = r.onComplete || function() {},
                f = K(),
                h = 0,
                m = e.offsetTop,
                p = e.style,
                g = e._mTween[t];
            "left" === t && (m = e.offsetLeft);
            var v = o - m;

            function x() {
                g.stop || (h || c.call(), h = K() - f, _(), h >= g.time && (g.time = h > g.time ? h + l - (h - g.time) : h + l - 1, g.time < h + 1 && (g.time = h + 1)), g.time < a ? g.id = s(x) : u.call())
            }

            function _() {
                a > 0 ? (g.currVal = b(g.time, m, v, a, n), p[t] = Math.round(g.currVal) + "px") : p[t] = o + "px", d.call()
            }

            function w() {
                l = 1e3 / 60, g.time = h + l, s = window.requestAnimationFrame ? window.requestAnimationFrame : function(e) {
                    return _(), setTimeout(e, .01)
                }, g.id = s(x)
            }

            function S() {
                null != g.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(g.id) : clearTimeout(g.id), g.id = null)
            }

            function b(e, t, o, a, n) {
                switch (n) {
                    case "linear":
                    case "mcsLinear":
                        return o * e / a + t;
                    case "mcsLinearOut":
                        return e /= a, e--, o * Math.sqrt(1 - e * e) + t;
                    case "easeInOutSmooth":
                        return (e /= a / 2) < 1 ? o / 2 * e * e + t : -o / 2 * (--e * (e - 2) - 1) + t;
                    case "easeInOutStrong":
                        return (e /= a / 2) < 1 ? o / 2 * Math.pow(2, 10 * (e - 1)) + t : (e--, o / 2 * (2 - Math.pow(2, -10 * e)) + t);
                    case "easeInOut":
                    case "mcsEaseInOut":
                        return (e /= a / 2) < 1 ? o / 2 * e * e * e + t : o / 2 * ((e -= 2) * e * e + 2) + t;
                    case "easeOutSmooth":
                        return e /= a, -o * (--e * e * e * e - 1) + t;
                    case "easeOutStrong":
                        return o * (1 - Math.pow(2, -10 * e / a)) + t;
                    default:
                        var i = (e /= a) * e,
                            r = i * e;
                        return t + o * (.499999999999997 * r * i + -2.5 * i * i + 5.5 * r + -6.5 * i + 4 * e)
                }
            }
            g.stop = 0, "none" !== i && S(), w()
        }, K = function() {
            return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
        }, Z = function() {
            var e = this;
            e._mTween || (e._mTween = {
                top: {},
                left: {}
            });
            for (var t = ["top", "left"], o = 0; o < t.length; o++) {
                var a = t[o];
                e._mTween[a].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(e._mTween[a].id) : clearTimeout(e._mTween[a].id), e._mTween[a].id = null, e._mTween[a].stop = 1)
            }
        }, $ = function(e, t) {
            try {
                delete e[t]
            } catch (o) {
                e[t] = null
            }
        }, ee = function(e) {
            return !(e.which && 1 !== e.which)
        }, te = function(e) {
            var t = e.originalEvent.pointerType;
            return !(t && "touch" !== t && 2 !== t)
        }, oe = function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        }, ae = function(e) {
            var t = e.parents(".mCSB_container");
            return [e.offset().top - t.offset().top, e.offset().left - t.offset().left]
        }, ne = function() {
            var e = t();
            return !!e && document[e];

            function t() {
                var e = ["webkit", "moz", "ms", "o"];
                if ("hidden" in document) return "hidden";
                for (var t = 0; t < e.length; t++)
                    if (e[t] + "Hidden" in document) return e[t] + "Hidden";
                return null
            }
        }, e.fn[o] = function(t) {
            return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments)
        }, e[o] = function(t) {
            return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments)
        }, e[o].defaults = i, window[o] = !0, e(window).bind("load", (function() {
            e(n)[o](), e.extend(e.expr[":"], {
                mcsInView: e.expr[":"].mcsInView || function(t) {
                    var o, a, n = e(t),
                        i = n.parents(".mCSB_container");
                    if (i.length) return o = i.parent(), (a = [i[0].offsetTop, i[0].offsetLeft])[0] + ae(n)[0] >= 0 && a[0] + ae(n)[0] < o.height() - n.outerHeight(!1) && a[1] + ae(n)[1] >= 0 && a[1] + ae(n)[1] < o.width() - n.outerWidth(!1)
                },
                mcsInSight: e.expr[":"].mcsInSight || function(t, o, a) {
                    var n, i, r, l, s = e(t),
                        c = s.parents(".mCSB_container"),
                        d = "exact" === a[3] ? [
                            [1, 0],
                            [1, 0]
                        ] : [
                            [.9, .1],
                            [.6, .4]
                        ];
                    if (c.length) return n = [s.outerHeight(!1), s.outerWidth(!1)], r = [c[0].offsetTop + ae(s)[0], c[0].offsetLeft + ae(s)[1]], i = [c.parent()[0].offsetHeight, c.parent()[0].offsetWidth], l = [n[0] < i[0] ? d[0] : d[1], n[1] < i[1] ? d[0] : d[1]], r[0] - i[0] * l[0][0] < 0 && r[0] + n[0] - i[0] * l[0][1] >= 0 && r[1] - i[1] * l[1][0] < 0 && r[1] + n[1] - i[1] * l[1][1] >= 0
                },
                mcsOverflow: e.expr[":"].mcsOverflow || function(t) {
                    var o = e(t).data(a);
                    if (o) return o.overflowed[0] || o.overflowed[1]
                }
            })
        }))
    }))
} catch (e) {
    console.error("An error has occurred. [ File: https://the7.io/winery/wp-content/themes/dt-the7/lib/custom-scrollbar/custom-scrollbar.min.js?ver=11.10.1 ] [ " + e.stack + " ]");
}
try {
    ! function(e) {
        e(window).on("elementor/frontend/init", (function() {
            The7ElementorSettings = function(t) {
                this.$widget = t;
                var n = {
                    getID: function(e) {
                        return e.data("id")
                    },
                    getModelCID: function(e) {
                        return e.data("model-cid")
                    },
                    getItems: function(e, t) {
                        if (t) {
                            const i = t.split("."),
                                o = i.splice(0, 1);
                            if (!i.length) return e[o];
                            if (!e[o]) return;
                            return n.getItems(e[o], i.join("."))
                        }
                        return e
                    }
                };
                The7ElementorSettings.prototype.getWidgetType = function() {
                    const e = this.$widget.data("widget_type");
                    return e ? e.split(".")[0] : null
                }, The7ElementorSettings.prototype.getID = function() {
                    return n.getID(this.$widget)
                }, The7ElementorSettings.prototype.getModelCID = function() {
                    return n.getModelCID(this.$widget)
                }, The7ElementorSettings.prototype.getCurrentDeviceSetting = function(e) {
                    return elementorFrontend.getCurrentDeviceSetting(this.getSettings(), e)
                }, The7ElementorSettings.prototype.getSettings = function(t) {
                    var i = {};
                    const o = n.getModelCID(this.$widget);
                    if (o) {
                        const t = elementorFrontend.config.elements.data[o],
                            n = t.attributes;
                        var s = n.widgetType || n.elType;
                        n.isInner && (s = "inner-" + s);
                        var r = elementorFrontend.config.elements.keys[s];
                        r || (r = elementorFrontend.config.elements.keys[s] = [], e.each(t.controls, (function(e) {
                            this.frontend_available && r.push(e)
                        }))), e.each(t.getActiveControls(), (function(e) {
                            if (-1 !== r.indexOf(e)) {
                                var t = n[e];
                                t.toJSON && (t = t.toJSON()), i[e] = t
                            }
                        }))
                    } else i = this.$widget.data("settings") || {};
                    return n.getItems(i, t)
                }
            }, The7ElementorSettings.getResponsiveSettingList = function(e) {
                return ["", ...Object.keys(elementorFrontend.config.responsive.activeBreakpoints)].map((t => t ? `${e}_${t}` : e))
            }, The7ElementorSettings.getControlValue = function(e, t, n) {
                let i;
                return i = "object" == typeof e[t] && n ? e[t][n] : e[t], i
            }, The7ElementorSettings.getResponsiveControlValue = function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                const i = (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null) || elementorFrontend.getCurrentDeviceMode(),
                    o = The7ElementorSettings.getControlValue(e, t, n);
                if ("widescreen" === i) {
                    const i = The7ElementorSettings.getControlValue(e, `${t}_widescreen`, n);
                    return i || 0 === i ? i : o
                }
                const s = elementorFrontend.breakpoints.getActiveBreakpointsList({
                    withDesktop: !0
                });
                let r = i,
                    a = s.indexOf(i),
                    l = "";
                for (; a <= s.length;) {
                    if ("desktop" === r) {
                        l = o;
                        break
                    }
                    const i = `${t}_${r}`,
                        m = The7ElementorSettings.getControlValue(e, i, n);
                    if (m || 0 === m) {
                        l = m;
                        break
                    }
                    a++, r = s[a]
                }
                return l
            }
        })), runElementHandlers = function(e) {
            [...e].flatMap((e => [...e.querySelectorAll(".elementor-element")])).forEach((e => elementorFrontend.elementsHandler.runReadyTrigger(e)))
        }, The7ElementorAnimation = function() {
            this.classes = {
                animated: "animated",
                elementorInvisible: "elementor-invisible",
                the7Hidden: "the7-hidden"
            }, this.animationTimerID, The7ElementorAnimation.prototype.animateElements = function(e) {
                let t = this;
                e.forEach((function(e) {
                    t.animateElement(e)
                }))
            }, The7ElementorAnimation.prototype.animateElement = function(e) {
                let t = e.$element;
                if (t.hasClass(this.classes.animated)) return;
                const n = e.animation,
                    i = e.animationDelay;
                "none" !== n ? this.animationTimerID = setTimeout((() => {
                    t.removeClass(this.classes.elementorInvisible).removeClass(this.classes.the7Hidden).addClass(this.classes.animated + " " + n)
                }), i) : t.removeClass(this.classes.elementorInvisible).removeClass(this.classes.the7Hidden).addClass(this.classes.animated)
            }, The7ElementorAnimation.prototype.resetElements = function(e) {
                let t = this;
                e.forEach((function(e) {
                    t.resetElement(e)
                }))
            }, The7ElementorAnimation.prototype.resetElement = function(e) {
                clearTimeout(this.animationTimerID);
                let t = e.$element;
                if (!t.hasClass(this.classes.animated)) return;
                const n = e.animation;
                "none" === n ? (t.removeClass(this.classes.elementorInvisible), t.removeClass(this.classes.the7Hidden)) : (t.addClass(this.classes.elementorInvisible), t.addClass(this.classes.the7Hidden)), t.removeClass(this.classes.animated), t.removeClass(n)
            }, The7ElementorAnimation.prototype.findAnimationsInNode = function(t) {
                let n = t.find(".elementor-element"),
                    i = [];
                return n.each((function() {
                    const t = e(this),
                        n = new The7ElementorSettings(t),
                        o = n.getCurrentDeviceSetting("the7_animation") || n.getCurrentDeviceSetting("the7__animation");
                    if (!o) return;
                    const s = n.getSettings(),
                        r = s._animation_delay || s.animation_delay || 0;
                    i.push({
                        $element: t,
                        animation: o,
                        animationDelay: r
                    })
                })), i
            }
        }, The7ElementorAnimation.patchElementsAnimation = function(t) {
            t.find(".elementor-element").each((function() {
                let t = e(this).data("settings");
                if (void 0 !== t && Object.keys(t).length) {
                    let n = The7ElementorSettings.getResponsiveSettingList("animation"),
                        i = The7ElementorSettings.getResponsiveSettingList("_animation");
                    const o = n.concat(i);
                    let s = !1;
                    if (o.forEach((function(e) {
                            var n, i, o;
                            n = t, (i = e) !== (o = `the7_${e}`) && n[i] && (Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(n, i)), delete n[i], 1) && (t[e] = "none", s = !0)
                        })), s) {
                        const n = e(this),
                            i = new The7ElementorSettings(n);
                        (i.getCurrentDeviceSetting("animation") || i.getCurrentDeviceSetting("_animation")) && n.addClass("the7-hidden"), n.attr("data-settings", JSON.stringify(t))
                    }
                }
            }))
        }
    }(jQuery)
} catch (e) {
    console.error("An error has occurred. [ File: https://the7.io/winery/wp-content/themes/dt-the7/js/compatibility/elementor/frontend-common.min.js?ver=11.10.1 ] [ " + e.stack + " ]");
}
try {
    ! function(e) {
        "use strict";
        e.the7MenuCart = function(t) {
            let n, o, d = e(t),
                r = d.find(".dt-menu-cart__toggle"),
                a = d.find(".the7-popup-button-link"),
                i = {};
            e.data(t, "the7MenuCart", d);
            const c = "dt-empty-cart";
            i = {
                init: function() {
                    n = new The7ElementorSettings(d), d.refresh()
                },
                bindEvents: function() {
                    r.hasClass("has-popup") && (r.on("click", i.displayPopup), void 0 !== o && "yes" == o.popup_action_adding_product && elementorFrontend.elements.$body.on("added_to_cart", i.displayPopup)), elementorFrontend.elements.$body.on("wc_fragments_loaded wc_fragments_refreshed", i.onFragmentRefresh)
                },
                unBindEvents: function() {
                    r.off("click", i.displayPopup), elementorFrontend.elements.$body.off("added_to_cart", i.displayPopup), elementorFrontend.elements.$body.off("wc_fragments_loaded wc_fragments_refreshed", i.onFragmentRefresh)
                },
                onFragmentRefresh: function(e) {
                    const t = d.find(".dt-cart-subtotal").attr("data-product-count");
                    d.find("[data-counter]").attr("data-counter", t), d.find(".dt-cart-indicator").text("(" + t + ")"), t > 0 ? d.removeClass(c) : d.addClass(c)
                },
                displayPopup: function(e, t) {
                    t && t.e_manually_triggered || (e.preventDefault(), e.stopPropagation(), a.click())
                }
            }, d.refresh = function() {
                o = n.getSettings(), i.unBindEvents(), i.bindEvents()
            }, d.delete = function() {
                i.unBindEvents(), d.removeData("the7MenuCart")
            }, i.init()
        }, e.fn.the7MenuCart = function() {
            return this.each((function() {
                var t = e(this).data("the7MenuCart");
                void 0 !== t && t.delete(), new e.the7MenuCart(this)
            }))
        }, e(window).on("elementor/frontend/init", (function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/the7-woocommerce-menu-cart.default", (function(e, t) {
                t(document).ready((function() {
                    e.the7MenuCart()
                }))
            })), elementorFrontend.isEditMode() && elementorEditorAddOnChangeHandler("the7-woocommerce-menu-cart", (function(t, n) {
                let o = ["popup_action_adding_product"];
                const d = t.model.get("name");
                if (-1 !== o.indexOf(d)) {
                    const t = e(n.$el),
                        o = t.data("the7MenuCart");
                    void 0 !== o ? o.refresh() : t.the7MenuCart()
                }
            }))
        }))
    }(jQuery)
} catch (e) {
    console.error("An error has occurred. [ File: https://the7.io/winery/wp-content/themes/dt-the7/js/compatibility/elementor/the7-woocommerce-menu-cart.min.js?ver=11.10.1 ] [ " + e.stack + " ]");
}
try {
    jQuery((function(e) {
        e.vericalMenu = function(n) {
            var t, i = e(n),
                a = i.find(".dt-nav-menu");
            e.data(n, "vericalMenu", i), t = {
                init: function() {
                    let n, s;
                    var o, l = i.find("li.has-children > a "),
                        c = i.find(".not-clickable-item").length > 0;
                    if (c) {
                        const e = i.find("li.has-children > a.not-clickable-item");
                        l = l.add(e)
                    }
                    a.find(" li.act:last > a").addClass("active-item"), a.find(".vertical-sub-nav").length <= 0 && a.parent().addClass("indicator-off"), (i.find(".dt-sub-menu-display-on_click").length > 0 || i.find(".dt-sub-menu-display-on_item_click").length > 0) && (a.find("li.has-children").each((function() {
                        var n = e(this);
                        if (n.length) {
                            var t = n.find("> a"),
                                i = n.find(" > .vertical-sub-nav");
                            n.hasClass("act") && (n.addClass("open-sub"), n.find("> a").addClass("active")), n.find(".vertical-sub-nav li").hasClass("act") && (n.addClass("open-sub"), t.addClass("active"), i.css("opacity", "0").stop(!0).slideDown({
                                start: function() {}
                            }, 250).animate({
                                opacity: 1
                            }, {
                                queue: !1,
                                duration: 150
                            }))
                        }
                    })), e(".touchevents").length > 0 ? (l.on("touchstart", (function(e) {
                        n = e.originalEvent.touches[0].pageY, s = e.originalEvent.touches[0].pageX
                    })), l.on("touchend", (function(i) {
                        let a = i.originalEvent.changedTouches[0].pageX,
                            l = i.originalEvent.changedTouches[0].pageY;
                        if (Math.abs(n - l) < 20 || Math.abs(s - a) < 20) {
                            let n = e(this);
                            if (!c && i.originalEvent && !i.originalEvent.composedPath().includes(n.children(".next-level-button").get(0))) return;
                            i.stopImmediatePropagation(), i.preventDefault(), clearTimeout(o), o = setTimeout((function() {
                                n.hasClass("active") ? t.hideSubMenu(n) : t.showSubMenu(n)
                            }), 100)
                        }
                    }))) : l.on("click", (function(n) {
                        var i = e(this),
                            a = i.attr("target") ? i.attr("target") : "_self";
                        (n = window.event || n).stopPropagation(), n.preventDefault(), clearTimeout(o), o = setTimeout((function() {
                            if (e(n.target).parents().hasClass("next-level-button") || e(n.target).hasClass("next-level-button") || c || elementorFrontend.isEditMode()) return i.hasClass("active") ? t.hideSubMenu(i) : t.showSubMenu(i), !1;
                            window.open(i.attr("href"), a)
                        }), 100)
                    })), i.find(".dt-sub-menu-display-on_click, .dt-sub-menu-display-on_item_click").css("visibility", "visible"))
                },
                showSubMenu: function(n) {
                    var t = n.siblings(" .vertical-sub-nav");
                    n.parent().siblings().find(" .vertical-sub-nav").css("opacity", "0").stop(!0, !0).slideUp(250), t.css("opacity", "0").stop(!0, !0).slideDown({
                        start: function() {}
                    }, 250).animate({
                        opacity: 1
                    }, {
                        queue: !1,
                        duration: 150
                    }), n.siblings().removeClass("active"), n.addClass("active"), n.parent().siblings().removeClass("open-sub"), n.parent().siblings().find("a").removeClass("active"), n.parent().addClass("open-sub"), e(" .dt-nav-menu").layzrInitialisation()
                },
                hideSubMenu: function(e) {
                    var n = e.siblings(" .vertical-sub-nav");
                    n.css("opacity", "0").stop(!0, !0).slideUp(250, (function() {
                        n.find("li").removeClass("open-sub"), n.find("a").removeClass("active")
                    })), e.removeClass("active"), e.parent().removeClass("open-sub")
                }
            }, i.delete = function() {
                i.removeData("vericalMenu")
            }, t.init()
        }, e.fn.vericalMenu = function() {
            return this.each((function() {
                var n = e(this).data("vericalMenu");
                void 0 !== n && n.delete(), new e.vericalMenu(this)
            }))
        }
    })), jQuery(window).on("elementor/frontend/init", (function() {
        elementorFrontend.hooks.addAction("frontend/element_ready/the7_nav-menu.default", (function(e, n) {
            n(document).ready((function() {
                e.vericalMenu()
            }))
        }))
    }))
} catch (e) {
    console.error("An error has occurred. [ File: https://the7.io/winery/wp-content/themes/dt-the7/js/compatibility/elementor/the7-vertical-menu.min.js?ver=11.10.1 ] [ " + e.stack + " ]");
}
try {
    ! function(e) {
        "use strict";
        e.the7CartWidget = function(t) {
            let n, a, r, o, i = e(t);
            const s = "the7-e-woo-cart-status-cart-empty",
                d = "the7-e-woo-cart-fragment-content",
                c = "the7-e-woo-cart-fragment-subtotal";
            i.vars = {
                cartUpdateTimeout: 800,
                supports_html5_storage: !0
            }, e.data(t, "the7CartWidget", i), r = {
                init: function() {
                    n = new The7ElementorSettings(i);
                    try {
                        i.vars.supports_html5_storage = "sessionStorage" in window && null !== window.sessionStorage, window.sessionStorage.setItem("wd", "test"), window.sessionStorage.removeItem("wd")
                    } catch (e) {
                        i.vars.supports_html5_storage = !1
                    }
                    i.refresh()
                },
                bindEvents: function() {
                    elementorFrontend.elements.$body.on("wc_fragments_loaded wc_fragments_refreshed", r.populateTemplate), i.on("change input", ".the7-e-mini-cart-product .quantity .qty", r.updateCartItem)
                },
                unBindEvents: function() {
                    elementorFrontend.elements.$body.off("wc_fragments_loaded wc_fragments_refreshed", r.populateTemplate), i.off("change input", ".the7-e-mini-cart-product .quantity .qty", r.updateCartItem)
                },
                populateTemplate: function(t) {
                    let n = e(".the7-e-mini-cart-template"),
                        a = n.find("." + d);
                    if (a.length) {
                        if (!a.hasClass(s)) {
                            let e = n.find("." + d);
                            if (e.length) {
                                i.find("." + d).replaceWith(e.clone())
                            }
                            let t = n.find("." + c);
                            if (t.length) {
                                i.find("." + c).replaceWith(t.clone())
                            }
                        }
                    } else a = i.find("." + d);
                    i.removeClass(s), a.hasClass(s) ? i.addClass(s) : e(document.body).trigger("the7_wc_init_quantity_buttons"), i.find(".the7_templates > div").each((function() {
                        let t = e(this).attr("class"),
                            n = i.find("." + t).not(this);
                        n.length && n.replaceWith(e(this).clone())
                    }))
                },
                updateCartItem: function(t) {
                    let n = !0;
                    "undefined" == typeof wc_cart_fragments_params && (n = !1), clearTimeout(o);
                    let a = e(this);
                    o = setTimeout((function() {
                        let t = a.val(),
                            r = a.parents(".the7-e-mini-cart-product"),
                            o = r.find(".product-remove .remove").data("cart_item_key");
                        r.addClass("the7-cart-loading"), e.ajax({
                            url: dtLocal.ajaxurl,
                            data: {
                                action: "the7_update_cart_item",
                                item_id: o,
                                quantity: t,
                                get_fragments: n
                            },
                            success: function(t) {
                                n ? t && t.fragments && (e.each(t.fragments, (function(t, n) {
                                    e(t).replaceWith(n)
                                })), i.vars.supports_html5_storage && (sessionStorage.setItem(wc_cart_fragments_params.fragment_name, JSON.stringify(t.fragments)), localStorage.setItem(wc_cart_fragments_params.cart_hash_key, t.cart_hash), sessionStorage.setItem(wc_cart_fragments_params.cart_hash_key, t.cart_hash), t.cart_hash && sessionStorage.setItem("wc_cart_created", (new Date).getTime())), e(document.body).trigger("wc_fragments_refreshed")) : elementorFrontend.elements.$body.trigger("wc_fragment_refresh")
                            },
                            dataType: "json",
                            method: "GET"
                        })
                    }), i.vars.cartUpdateTimeout)
                }
            }, i.refresh = function() {
                a = n.getSettings(), r.unBindEvents(), r.bindEvents(), r.populateTemplate()
            }, i.delete = function() {
                r.unBindEvents(), i.removeData("the7CartWidget")
            }, r.init()
        }, e.fn.the7CartWidget = function() {
            return this.each((function() {
                var t = e(this).data("the7CartWidget");
                void 0 !== t && t.delete(), new e.the7CartWidget(this)
            }))
        }, e(window).on("elementor/frontend/init", (function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/the7-woocommerce-cart-preview.default", (function(e, t) {
                t(document).ready((function() {
                    e.the7CartWidget(), e.hasClass("preserve-img-ratio-y") || window.the7ApplyWidgetImageRatio(e)
                }))
            })), elementorFrontend.isEditMode() && elementorEditorAddOnChangeHandler("the7-woocommerce-cart-preview", (function(t, n) {
                let a = [];
                const r = t.model.get("name");
                if ("item_preserve_ratio" == r) {
                    e(n.$el).the7WidgetImageRatio("refresh")
                } else if (-1 !== a.indexOf(r)) {
                    const t = e(n.$el),
                        a = t.data("the7CartWidget");
                    void 0 !== a ? a.refresh() : t.the7CartWidget()
                }
            }))
        }))
    }(jQuery)
} catch (e) {
    console.error("An error has occurred. [ File: https://the7.io/winery/wp-content/themes/dt-the7/js/compatibility/elementor/the7-woocommerce-cart.min.js?ver=11.10.1 ] [ " + e.stack + " ]");
}
try {
    ! function(e) {
        "object" == typeof exports && "undefined" != typeof module || "function" != typeof define || !define.amd ? e() : define("inert", e)
    }((function() {
        "use strict";
        var e, t, n, i, o, r, s = function(e, t, n) {
            return t && a(e.prototype, t), n && a(e, n), e
        };

        function a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function d(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function u(e, t) {
            d(this, u), this._inertManager = t, this._rootElement = e, this._managedNodes = new Set, this._rootElement.hasAttribute("aria-hidden") ? this._savedAriaHidden = this._rootElement.getAttribute("aria-hidden") : this._savedAriaHidden = null, this._rootElement.setAttribute("aria-hidden", "true"), this._makeSubtreeUnfocusable(this._rootElement), this._observer = new MutationObserver(this._onMutation.bind(this)), this._observer.observe(this._rootElement, {
                attributes: !0,
                childList: !0,
                subtree: !0
            })
        }

        function h(e, t) {
            d(this, h), this._node = e, this._overrodeFocusMethod = !1, this._inertRoots = new Set([t]), this._savedTabIndex = null, this._destroyed = !1, this.ensureUntabbable()
        }

        function l(e) {
            if (d(this, l), !e) throw new Error("Missing required argument; InertManager needs to wrap a document.");
            this._document = e, this._managedNodes = new Map, this._inertRoots = new Map, this._observer = new MutationObserver(this._watchForInert.bind(this)), _(e.head || e.body || e.documentElement), "loading" === e.readyState ? e.addEventListener("DOMContentLoaded", this._onDocumentLoaded.bind(this)) : this._onDocumentLoaded()
        }

        function c(e, t, n) {
            if (e.nodeType == Node.ELEMENT_NODE) {
                var i = e;
                if (s = (t && t(i), i.shadowRoot)) return void c(s, t, s);
                if ("content" == i.localName) {
                    for (var o = (s = i).getDistributedNodes ? s.getDistributedNodes() : [], r = 0; r < o.length; r++) c(o[r], t, n);
                    return
                }
                if ("slot" == i.localName) {
                    for (var s, a = (s = i).assignedNodes ? s.assignedNodes({
                            flatten: !0
                        }) : [], d = 0; d < a.length; d++) c(a[d], t, n);
                    return
                }
            }
            for (var u = e.firstChild; null != u;) c(u, t, n), u = u.nextSibling
        }

        function _(e) {
            var t;
            e.querySelector("style#inert-style, link#inert-style") || ((t = document.createElement("style")).setAttribute("id", "inert-style"), t.textContent = "\n[inert] {\n  pointer-events: none;\n  cursor: default;\n}\n\n[inert], [inert] * {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n", e.appendChild(t))
        }
        "undefined" != typeof window && (e = Array.prototype.slice, t = Element.prototype.matches || Element.prototype.msMatchesSelector, n = ["a[href]", "area[href]", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "details", "summary", "iframe", "object", "embed", "[contenteditable]"].join(","), s(u, [{
            key: "destructor",
            value: function() {
                this._observer.disconnect(), this._rootElement && (null !== this._savedAriaHidden ? this._rootElement.setAttribute("aria-hidden", this._savedAriaHidden) : this._rootElement.removeAttribute("aria-hidden")), this._managedNodes.forEach((function(e) {
                    this._unmanageNode(e.node)
                }), this), this._observer = null, this._rootElement = null, this._managedNodes = null, this._inertManager = null
            }
        }, {
            key: "_makeSubtreeUnfocusable",
            value: function(e) {
                var t = this,
                    n = (c(e, (function(e) {
                        return t._visitNode(e)
                    })), document.activeElement);
                if (!document.body.contains(e)) {
                    for (var i = e, o = void 0; i;) {
                        if (i.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                            o = i;
                            break
                        }
                        i = i.parentNode
                    }
                    o && (n = o.activeElement)
                }
                e.contains(n) && (n.blur(), n === document.activeElement && document.body.focus())
            }
        }, {
            key: "_visitNode",
            value: function(e) {
                e.nodeType === Node.ELEMENT_NODE && (e !== this._rootElement && e.hasAttribute("inert") && this._adoptInertRoot(e), (t.call(e, n) || e.hasAttribute("tabindex")) && this._manageNode(e))
            }
        }, {
            key: "_manageNode",
            value: function(e) {
                e = this._inertManager.register(e, this), this._managedNodes.add(e)
            }
        }, {
            key: "_unmanageNode",
            value: function(e) {
                (e = this._inertManager.deregister(e, this)) && this._managedNodes.delete(e)
            }
        }, {
            key: "_unmanageSubtree",
            value: function(e) {
                var t = this;
                c(e, (function(e) {
                    return t._unmanageNode(e)
                }))
            }
        }, {
            key: "_adoptInertRoot",
            value: function(e) {
                var t = this._inertManager.getInertRoot(e);
                t || (this._inertManager.setInert(e, !0), t = this._inertManager.getInertRoot(e)), t.managedNodes.forEach((function(e) {
                    this._manageNode(e.node)
                }), this)
            }
        }, {
            key: "_onMutation",
            value: function(t, n) {
                t.forEach((function(t) {
                    var n, i = t.target;
                    "childList" === t.type ? (e.call(t.addedNodes).forEach((function(e) {
                        this._makeSubtreeUnfocusable(e)
                    }), this), e.call(t.removedNodes).forEach((function(e) {
                        this._unmanageSubtree(e)
                    }), this)) : "attributes" === t.type && ("tabindex" === t.attributeName ? this._manageNode(i) : i !== this._rootElement && "inert" === t.attributeName && i.hasAttribute("inert") && (this._adoptInertRoot(i), n = this._inertManager.getInertRoot(i), this._managedNodes.forEach((function(e) {
                        i.contains(e.node) && n._manageNode(e.node)
                    }))))
                }), this)
            }
        }, {
            key: "managedNodes",
            get: function() {
                return new Set(this._managedNodes)
            }
        }, {
            key: "hasSavedAriaHidden",
            get: function() {
                return null !== this._savedAriaHidden
            }
        }, {
            key: "savedAriaHidden",
            set: function(e) {
                this._savedAriaHidden = e
            },
            get: function() {
                return this._savedAriaHidden
            }
        }]), i = u, s(h, [{
            key: "destructor",
            value: function() {
                var e;
                this._throwIfDestroyed(), this._node && this._node.nodeType === Node.ELEMENT_NODE && (e = this._node, null !== this._savedTabIndex ? e.setAttribute("tabindex", this._savedTabIndex) : e.removeAttribute("tabindex"), this._overrodeFocusMethod && delete e.focus), this._node = null, this._inertRoots = null, this._destroyed = !0
            }
        }, {
            key: "_throwIfDestroyed",
            value: function() {
                if (this.destroyed) throw new Error("Trying to access destroyed InertNode")
            }
        }, {
            key: "ensureUntabbable",
            value: function() {
                var e;
                this.node.nodeType === Node.ELEMENT_NODE && (e = this.node, t.call(e, n) ? -1 === e.tabIndex && this.hasSavedTabIndex || (e.hasAttribute("tabindex") && (this._savedTabIndex = e.tabIndex), e.setAttribute("tabindex", "-1"), e.nodeType === Node.ELEMENT_NODE && (e.focus = function() {}, this._overrodeFocusMethod = !0)) : e.hasAttribute("tabindex") && (this._savedTabIndex = e.tabIndex, e.removeAttribute("tabindex")))
            }
        }, {
            key: "addInertRoot",
            value: function(e) {
                this._throwIfDestroyed(), this._inertRoots.add(e)
            }
        }, {
            key: "removeInertRoot",
            value: function(e) {
                this._throwIfDestroyed(), this._inertRoots.delete(e), 0 === this._inertRoots.size && this.destructor()
            }
        }, {
            key: "destroyed",
            get: function() {
                return this._destroyed
            }
        }, {
            key: "hasSavedTabIndex",
            get: function() {
                return null !== this._savedTabIndex
            }
        }, {
            key: "node",
            get: function() {
                return this._throwIfDestroyed(), this._node
            }
        }, {
            key: "savedTabIndex",
            set: function(e) {
                this._throwIfDestroyed(), this._savedTabIndex = e
            },
            get: function() {
                return this._throwIfDestroyed(), this._savedTabIndex
            }
        }]), o = h, s(l, [{
            key: "setInert",
            value: function(e, t) {
                if (t) {
                    if (!this._inertRoots.has(e) && (t = new i(e, this), e.setAttribute("inert", ""), this._inertRoots.set(e, t), !this._document.body.contains(e)))
                        for (var n = e.parentNode; n;) 11 === n.nodeType && _(n), n = n.parentNode
                } else this._inertRoots.has(e) && (this._inertRoots.get(e).destructor(), this._inertRoots.delete(e), e.removeAttribute("inert"))
            }
        }, {
            key: "getInertRoot",
            value: function(e) {
                return this._inertRoots.get(e)
            }
        }, {
            key: "register",
            value: function(e, t) {
                var n = this._managedNodes.get(e);
                return void 0 !== n ? n.addInertRoot(t) : n = new o(e, t), this._managedNodes.set(e, n), n
            }
        }, {
            key: "deregister",
            value: function(e, t) {
                var n = this._managedNodes.get(e);
                return n ? (n.removeInertRoot(t), n.destroyed && this._managedNodes.delete(e), n) : null
            }
        }, {
            key: "_onDocumentLoaded",
            value: function() {
                e.call(this._document.querySelectorAll("[inert]")).forEach((function(e) {
                    this.setInert(e, !0)
                }), this), this._observer.observe(this._document.body || this._document.documentElement, {
                    attributes: !0,
                    subtree: !0,
                    childList: !0
                })
            }
        }, {
            key: "_watchForInert",
            value: function(n, i) {
                var o = this;
                n.forEach((function(n) {
                    switch (n.type) {
                        case "childList":
                            e.call(n.addedNodes).forEach((function(n) {
                                var i;
                                n.nodeType === Node.ELEMENT_NODE && (i = e.call(n.querySelectorAll("[inert]")), t.call(n, "[inert]") && i.unshift(n), i.forEach((function(e) {
                                    this.setInert(e, !0)
                                }), o))
                            }), o);
                            break;
                        case "attributes":
                            if ("inert" !== n.attributeName) return;
                            var i = n.target,
                                r = i.hasAttribute("inert");
                            o.setInert(i, r)
                    }
                }), this)
            }
        }]), s = l, HTMLElement.prototype.hasOwnProperty("inert") || (r = new s(document), Object.defineProperty(HTMLElement.prototype, "inert", {
            enumerable: !0,
            get: function() {
                return this.hasAttribute("inert")
            },
            set: function(e) {
                r.setInert(this, e)
            }
        })))
    }))
} catch (e) {
    console.error("An error has occurred. [ File: https://the7.io/winery/wp-includes/js/dist/vendor/wp-polyfill-inert.min.js?ver=3.1.2 ] [ " + e.stack + " ]");
}
try {
    var runtime = function(t) {
        "use strict";
        var r, e = Object.prototype,
            n = e.hasOwnProperty,
            o = Object.defineProperty || function(t, r, e) {
                t[r] = e.value
            },
            i = (w = "function" == typeof Symbol ? Symbol : {}).iterator || "@@iterator",
            a = w.asyncIterator || "@@asyncIterator",
            c = w.toStringTag || "@@toStringTag";

        function u(t, r, e) {
            return Object.defineProperty(t, r, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }), t[r]
        }
        try {
            u({}, "")
        } catch (e) {
            u = function(t, r, e) {
                return t[r] = e
            }
        }

        function h(t, e, n, i) {
            var a, c, u, h;
            e = e && e.prototype instanceof v ? e : v, e = Object.create(e.prototype), i = new O(i || []);
            return o(e, "_invoke", {
                value: (a = t, c = n, u = i, h = f, function(t, e) {
                    if (h === p) throw new Error("Generator is already running");
                    if (h === y) {
                        if ("throw" === t) throw e;
                        return G()
                    }
                    for (u.method = t, u.arg = e;;) {
                        var n = u.delegate;
                        if (n && (n = function t(e, n) {
                                var o = n.method,
                                    i = e.iterator[o];
                                return i === r ? (n.delegate = null, "throw" === o && e.iterator.return && (n.method = "return", n.arg = r, t(e, n), "throw" === n.method) || "return" !== o && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + o + "' method")), g) : "throw" === (o = l(i, e.iterator, n.arg)).type ? (n.method = "throw", n.arg = o.arg, n.delegate = null, g) : (i = o.arg) ? i.done ? (n[e.resultName] = i.value, n.next = e.nextLoc, "return" !== n.method && (n.method = "next", n.arg = r), n.delegate = null, g) : i : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, g)
                            }(n, u), n)) {
                            if (n === g) continue;
                            return n
                        }
                        if ("next" === u.method) u.sent = u._sent = u.arg;
                        else if ("throw" === u.method) {
                            if (h === f) throw h = y, u.arg;
                            u.dispatchException(u.arg)
                        } else "return" === u.method && u.abrupt("return", u.arg);
                        if (h = p, "normal" === (n = l(a, c, u)).type) {
                            if (h = u.done ? y : s, n.arg !== g) return {
                                value: n.arg,
                                done: u.done
                            }
                        } else "throw" === n.type && (h = y, u.method = "throw", u.arg = n.arg)
                    }
                })
            }), e
        }

        function l(t, r, e) {
            try {
                return {
                    type: "normal",
                    arg: t.call(r, e)
                }
            } catch (t) {
                return {
                    type: "throw",
                    arg: t
                }
            }
        }
        t.wrap = h;
        var f = "suspendedStart",
            s = "suspendedYield",
            p = "executing",
            y = "completed",
            g = {};

        function v() {}

        function d() {}

        function m() {}
        var w, b, L = ((b = (b = (u(w = {}, i, (function() {
            return this
        })), Object.getPrototypeOf)) && b(b(k([])))) && b !== e && n.call(b, i) && (w = b), m.prototype = v.prototype = Object.create(w));

        function x(t) {
            ["next", "throw", "return"].forEach((function(r) {
                u(t, r, (function(t) {
                    return this._invoke(r, t)
                }))
            }))
        }

        function E(t, r) {
            var e;
            o(this, "_invoke", {
                value: function(o, i) {
                    function a() {
                        return new r((function(e, a) {
                            ! function e(o, i, a, c) {
                                var u;
                                if ("throw" !== (o = l(t[o], t, i)).type) return (i = (u = o.arg).value) && "object" == typeof i && n.call(i, "__await") ? r.resolve(i.__await).then((function(t) {
                                    e("next", t, a, c)
                                }), (function(t) {
                                    e("throw", t, a, c)
                                })) : r.resolve(i).then((function(t) {
                                    u.value = t, a(u)
                                }), (function(t) {
                                    return e("throw", t, a, c)
                                }));
                                c(o.arg)
                            }(o, i, e, a)
                        }))
                    }
                    return e = e ? e.then(a, a) : a()
                }
            })
        }

        function j(t) {
            var r = {
                tryLoc: t[0]
            };
            1 in t && (r.catchLoc = t[1]), 2 in t && (r.finallyLoc = t[2], r.afterLoc = t[3]), this.tryEntries.push(r)
        }

        function _(t) {
            var r = t.completion || {};
            r.type = "normal", delete r.arg, t.completion = r
        }

        function O(t) {
            this.tryEntries = [{
                tryLoc: "root"
            }], t.forEach(j, this), this.reset(!0)
        }

        function k(t) {
            if (t) {
                var e, o = t[i];
                if (o) return o.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) return e = -1, (o = function o() {
                    for (; ++e < t.length;)
                        if (n.call(t, e)) return o.value = t[e], o.done = !1, o;
                    return o.value = r, o.done = !0, o
                }).next = o
            }
            return {
                next: G
            }
        }

        function G() {
            return {
                value: r,
                done: !0
            }
        }
        return o(L, "constructor", {
            value: d.prototype = m,
            configurable: !0
        }), o(m, "constructor", {
            value: d,
            configurable: !0
        }), d.displayName = u(m, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
            return !!(t = "function" == typeof t && t.constructor) && (t === d || "GeneratorFunction" === (t.displayName || t.name))
        }, t.mark = function(t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, m) : (t.__proto__ = m, u(t, c, "GeneratorFunction")), t.prototype = Object.create(L), t
        }, t.awrap = function(t) {
            return {
                __await: t
            }
        }, x(E.prototype), u(E.prototype, a, (function() {
            return this
        })), t.AsyncIterator = E, t.async = function(r, e, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new E(h(r, e, n, o), i);
            return t.isGeneratorFunction(e) ? a : a.next().then((function(t) {
                return t.done ? t.value : a.next()
            }))
        }, x(L), u(L, c, "Generator"), u(L, i, (function() {
            return this
        })), u(L, "toString", (function() {
            return "[object Generator]"
        })), t.keys = function(t) {
            var r, e = Object(t),
                n = [];
            for (r in e) n.push(r);
            return n.reverse(),
                function t() {
                    for (; n.length;) {
                        var r = n.pop();
                        if (r in e) return t.value = r, t.done = !1, t
                    }
                    return t.done = !0, t
                }
        }, t.values = k, O.prototype = {
            constructor: O,
            reset: function(t) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = r, this.done = !1, this.delegate = null, this.method = "next", this.arg = r, this.tryEntries.forEach(_), !t)
                    for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = r)
            },
            stop: function() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval
            },
            dispatchException: function(t) {
                if (this.done) throw t;
                var e = this;

                function o(n, o) {
                    return c.type = "throw", c.arg = t, e.next = n, o && (e.method = "next", e.arg = r), !!o
                }
                for (var i = this.tryEntries.length - 1; 0 <= i; --i) {
                    var a = this.tryEntries[i],
                        c = a.completion;
                    if ("root" === a.tryLoc) return o("end");
                    if (a.tryLoc <= this.prev) {
                        var u = n.call(a, "catchLoc"),
                            h = n.call(a, "finallyLoc");
                        if (u && h) {
                            if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                            if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                        } else if (u) {
                            if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                        } else {
                            if (!h) throw new Error("try statement without catch or finally");
                            if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(t, r) {
                for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                    var o = this.tryEntries[e];
                    if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                        var i = o;
                        break
                    }
                }
                var a = (i = i && ("break" === t || "continue" === t) && i.tryLoc <= r && r <= i.finallyLoc ? null : i) ? i.completion : {};
                return a.type = t, a.arg = r, i ? (this.method = "next", this.next = i.finallyLoc, g) : this.complete(a)
            },
            complete: function(t, r) {
                if ("throw" === t.type) throw t.arg;
                return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), g
            },
            finish: function(t) {
                for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
                    var e = this.tryEntries[r];
                    if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), _(e), g
                }
            },
            catch: function(t) {
                for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
                    var e, n, o = this.tryEntries[r];
                    if (o.tryLoc === t) return "throw" === (e = o.completion).type && (n = e.arg, _(o)), n
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(t, e, n) {
                return this.delegate = {
                    iterator: k(t),
                    resultName: e,
                    nextLoc: n
                }, "next" === this.method && (this.arg = r), g
            }
        }, t
    }("object" == typeof module ? module.exports : {});
    try {
        regeneratorRuntime = runtime
    } catch (t) {
        "object" == typeof globalThis ? globalThis.regeneratorRuntime = runtime : Function("r", "regeneratorRuntime = r")(runtime)
    }
} catch (e) {
    console.error("An error has occurred. [ File: https://the7.io/winery/wp-includes/js/dist/vendor/regenerator-runtime.min.js?ver=0.13.11 ] [ " + e.stack + " ]");
}
try {
    ! function(t) {
        "use strict";
        var r, n, e;
        n = {}, (e = function(t) {
            if (n[t]) return n[t].exports;
            var o = n[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            return r[t].call(o.exports, o, o.exports, e), o.l = !0, o.exports
        }).m = r = [function(t, r, n) {
            n(1), n(67), n(68), t.exports = n(72)
        }, function(r, n, e) {
            var o = e(2),
                i = e(36),
                u = e(57),
                c = e(56);
            e = e(62);
            o({
                target: "Array",
                proto: !0
            }, {
                at: function(r) {
                    var n = i(this),
                        e = u(n);
                    return (r = 0 <= (r = c(r)) ? r : e + r) < 0 || e <= r ? t : n[r]
                }
            }), e("at")
        }, function(r, n, e) {
            var o = e(3),
                i = e(4).f,
                u = e(40),
                c = e(43),
                f = e(34),
                a = e(50),
                p = e(61);
            r.exports = function(r, n) {
                var e, s, y, l = r.target,
                    v = r.global,
                    b = r.stat,
                    g = v ? o : b ? o[l] || f(l, {}) : (o[l] || {}).prototype;
                if (g)
                    for (e in n) {
                        if (s = n[e], y = r.noTargetGet ? (y = i(g, e)) && y.value : g[e], !p(v ? e : l + (b ? "." : "#") + e, r.forced) && y !== t) {
                            if (typeof s == typeof y) continue;
                            a(s, y)
                        }(r.sham || y && y.sham) && u(s, "sham", !0), c(g, e, s, r)
                    }
            }
        }, function(t, r) {
            function n(t) {
                return t && t.Math == Math && t
            }
            t.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof global && global) || function() {
                return this
            }() || Function("return this")()
        }, function(t, r, n) {
            var e = n(5),
                o = n(7),
                i = n(8),
                u = n(9),
                c = n(10),
                f = n(15),
                a = n(35),
                p = n(38),
                s = Object.getOwnPropertyDescriptor;
            r.f = e ? s : function(t, r) {
                if (t = c(t), r = f(r), p) try {
                    return s(t, r)
                } catch (t) {}
                if (a(t, r)) return u(!o(i.f, t, r), t[r])
            }
        }, function(t, r, n) {
            n = n(6), t.exports = !n((function() {
                return 7 != Object.defineProperty({}, 1, {
                    get: function() {
                        return 7
                    }
                })[1]
            }))
        }, function(t, r) {
            t.exports = function(t) {
                try {
                    return !!t()
                } catch (t) {
                    return !0
                }
            }
        }, function(t, r) {
            var n = Function.prototype.call;
            t.exports = n.bind ? n.bind(n) : function() {
                return n.apply(n, arguments)
            }
        }, function(t, r, n) {
            var e = {}.propertyIsEnumerable,
                o = Object.getOwnPropertyDescriptor,
                i = o && !e.call({
                    1: 2
                }, 1);
            r.f = i ? function(t) {
                return !!(t = o(this, t)) && t.enumerable
            } : e
        }, function(t, r) {
            t.exports = function(t, r) {
                return {
                    enumerable: !(1 & t),
                    configurable: !(2 & t),
                    writable: !(4 & t),
                    value: r
                }
            }
        }, function(t, r, n) {
            var e = n(11),
                o = n(14);
            t.exports = function(t) {
                return e(o(t))
            }
        }, function(t, r, n) {
            var e = n(3),
                o = n(12),
                i = n(6),
                u = n(13),
                c = e.Object,
                f = o("".split);
            t.exports = i((function() {
                return !c("z").propertyIsEnumerable(0)
            })) ? function(t) {
                return "String" == u(t) ? f(t, "") : c(t)
            } : c
        }, function(t, r) {
            var n = Function.prototype,
                e = n.bind,
                o = n.call,
                i = e && e.bind(o);
            t.exports = e ? function(t) {
                return t && i(o, t)
            } : function(t) {
                return t && function() {
                    return o.apply(t, arguments)
                }
            }
        }, function(t, r, n) {
            var e = (n = n(12))({}.toString),
                o = n("".slice);
            t.exports = function(t) {
                return o(e(t), 8, -1)
            }
        }, function(r, n, e) {
            var o = e(3).TypeError;
            r.exports = function(r) {
                if (r == t) throw o("Can't call method on " + r);
                return r
            }
        }, function(t, r, n) {
            var e = n(16),
                o = n(19);
            t.exports = function(t) {
                return t = e(t, "string"), o(t) ? t : t + ""
            }
        }, function(r, n, e) {
            var o = e(3),
                i = e(7),
                u = e(17),
                c = e(19),
                f = e(26),
                a = e(29),
                p = (e = e(30), o.TypeError),
                s = e("toPrimitive");
            r.exports = function(r, n) {
                if (!u(r) || c(r)) return r;
                var e = f(r, s);
                if (e) {
                    if (e = i(e, r, n = n === t ? "default" : n), !u(e) || c(e)) return e;
                    throw p("Can't convert object to primitive value")
                }
                return a(r, n = n === t ? "number" : n)
            }
        }, function(t, r, n) {
            var e = n(18);
            t.exports = function(t) {
                return "object" == typeof t ? null !== t : e(t)
            }
        }, function(t, r) {
            t.exports = function(t) {
                return "function" == typeof t
            }
        }, function(t, r, n) {
            var e = n(3),
                o = n(20),
                i = n(18),
                u = n(21),
                c = (n = n(22), e.Object);
            t.exports = n ? function(t) {
                return "symbol" == typeof t
            } : function(t) {
                var r = o("Symbol");
                return i(r) && u(r.prototype, c(t))
            }
        }, function(r, n, e) {
            var o = e(3),
                i = e(18);
            r.exports = function(r, n) {
                return arguments.length < 2 ? (e = o[r], i(e) ? e : t) : o[r] && o[r][n];
                var e
            }
        }, function(t, r, n) {
            n = n(12), t.exports = n({}.isPrototypeOf)
        }, function(t, r, n) {
            n = n(23), t.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator
        }, function(t, r, n) {
            var e = n(24);
            n = n(6);
            t.exports = !!Object.getOwnPropertySymbols && !n((function() {
                var t = Symbol();
                return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && e && e < 41
            }))
        }, function(t, r, n) {
            var e, o, i = n(3),
                u = n(25);
            n = i.process, i = i.Deno;
            !(o = (i = (i = n && n.versions || i && i.version) && i.v8) ? 0 < (e = i.split("."))[0] && e[0] < 4 ? 1 : +(e[0] + e[1]) : o) && u && (!(e = u.match(/Edge\/(\d+)/)) || 74 <= e[1]) && (e = u.match(/Chrome\/(\d+)/)) && (o = +e[1]), t.exports = o
        }, function(t, r, n) {
            n = n(20), t.exports = n("navigator", "userAgent") || ""
        }, function(r, n, e) {
            var o = e(27);
            r.exports = function(r, n) {
                return null == (n = r[n]) ? t : o(n)
            }
        }, function(t, r, n) {
            var e = n(3),
                o = n(18),
                i = n(28),
                u = e.TypeError;
            t.exports = function(t) {
                if (o(t)) return t;
                throw u(i(t) + " is not a function")
            }
        }, function(t, r, n) {
            var e = n(3).String;
            t.exports = function(t) {
                try {
                    return e(t)
                } catch (t) {
                    return "Object"
                }
            }
        }, function(t, r, n) {
            var e = n(3),
                o = n(7),
                i = n(18),
                u = n(17),
                c = e.TypeError;
            t.exports = function(t, r) {
                var n, e;
                if ("string" === r && i(n = t.toString) && !u(e = o(n, t))) return e;
                if (i(n = t.valueOf) && !u(e = o(n, t))) return e;
                if ("string" !== r && i(n = t.toString) && !u(e = o(n, t))) return e;
                throw c("Can't convert object to primitive value")
            }
        }, function(t, r, n) {
            var e = n(3),
                o = n(31),
                i = n(35),
                u = n(37),
                c = n(23),
                f = n(22),
                a = o("wks"),
                p = e.Symbol,
                s = p && p.for,
                y = f ? p : p && p.withoutSetter || u;
            t.exports = function(t) {
                var r;
                return i(a, t) && (c || "string" == typeof a[t]) || (r = "Symbol." + t, c && i(p, t) ? a[t] = p[t] : a[t] = (f && s ? s : y)(r)), a[t]
            }
        }, function(r, n, e) {
            var o = e(32),
                i = e(33);
            (r.exports = function(r, n) {
                return i[r] || (i[r] = n !== t ? n : {})
            })("versions", []).push({
                version: "3.19.1",
                mode: o ? "pure" : "global",
                copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
            })
        }, function(t, r) {
            t.exports = !1
        }, function(t, r, n) {
            var e = n(3),
                o = n(34);
            n = e[n = "__core-js_shared__"] || o(n, {});
            t.exports = n
        }, function(t, r, n) {
            var e = n(3),
                o = Object.defineProperty;
            t.exports = function(t, r) {
                try {
                    o(e, t, {
                        value: r,
                        configurable: !0,
                        writable: !0
                    })
                } catch (n) {
                    e[t] = r
                }
                return r
            }
        }, function(t, r, n) {
            var e = n(12),
                o = n(36),
                i = e({}.hasOwnProperty);
            t.exports = Object.hasOwn || function(t, r) {
                return i(o(t), r)
            }
        }, function(t, r, n) {
            var e = n(3),
                o = n(14),
                i = e.Object;
            t.exports = function(t) {
                return i(o(t))
            }
        }, function(r, n, e) {
            e = e(12);
            var o = 0,
                i = Math.random(),
                u = e(1..toString);
            r.exports = function(r) {
                return "Symbol(" + (r === t ? "" : r) + ")_" + u(++o + i, 36)
            }
        }, function(t, r, n) {
            var e = n(5),
                o = n(6),
                i = n(39);
            t.exports = !e && !o((function() {
                return 7 != Object.defineProperty(i("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            }))
        }, function(t, r, n) {
            var e = n(3),
                o = (n = n(17), e.document),
                i = n(o) && n(o.createElement);
            t.exports = function(t) {
                return i ? o.createElement(t) : {}
            }
        }, function(t, r, n) {
            var e = n(5),
                o = n(41),
                i = n(9);
            t.exports = e ? function(t, r, n) {
                return o.f(t, r, i(1, n))
            } : function(t, r, n) {
                return t[r] = n, t
            }
        }, function(t, r, n) {
            var e = n(3),
                o = n(5),
                i = n(38),
                u = n(42),
                c = n(15),
                f = e.TypeError,
                a = Object.defineProperty;
            r.f = o ? a : function(t, r, n) {
                if (u(t), r = c(r), u(n), i) try {
                    return a(t, r, n)
                } catch (t) {}
                if ("get" in n || "set" in n) throw f("Accessors not supported");
                return "value" in n && (t[r] = n.value), t
            }
        }, function(t, r, n) {
            var e = n(3),
                o = n(17),
                i = e.String,
                u = e.TypeError;
            t.exports = function(t) {
                if (o(t)) return t;
                throw u(i(t) + " is not an object")
            }
        }, function(r, n, e) {
            var o = e(3),
                i = e(18),
                u = e(35),
                c = e(40),
                f = e(34),
                a = e(44),
                p = e(45),
                s = e(49).CONFIGURABLE,
                y = p.get,
                l = p.enforce,
                v = String(String).split("String");
            (r.exports = function(r, n, e, a) {
                var p = !!a && !!a.unsafe,
                    y = !!a && !!a.enumerable,
                    b = !!a && !!a.noTargetGet,
                    g = a && a.name !== t ? a.name : n;
                i(e) && ("Symbol(" === String(g).slice(0, 7) && (g = "[" + String(g).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!u(e, "name") || s && e.name !== g) && c(e, "name", g), (a = l(e)).source || (a.source = v.join("string" == typeof g ? g : ""))), r !== o ? (p ? !b && r[n] && (y = !0) : delete r[n], y ? r[n] = e : c(r, n, e)) : y ? r[n] = e : f(n, e)
            })(Function.prototype, "toString", (function() {
                return i(this) && y(this).source || a(this)
            }))
        }, function(t, r, n) {
            var e = n(12),
                o = n(18),
                i = (n = n(33), e(Function.toString));
            o(n.inspectSource) || (n.inspectSource = function(t) {
                return i(t)
            }), t.exports = n.inspectSource
        }, function(t, r, n) {
            var e, o, i, u, c, f, a, p, s = n(46),
                y = n(3),
                l = n(12),
                v = n(17),
                b = n(40),
                g = n(35),
                d = n(33),
                h = n(47),
                x = (n = n(48), "Object already initialized"),
                m = y.TypeError;
            y = y.WeakMap;
            a = s || d.state ? (e = d.state || (d.state = new y), o = l(e.get), i = l(e.has), u = l(e.set), c = function(t, r) {
                if (i(e, t)) throw new m(x);
                return r.facade = t, u(e, t, r), r
            }, f = function(t) {
                return o(e, t) || {}
            }, function(t) {
                return i(e, t)
            }) : (n[p = h("state")] = !0, c = function(t, r) {
                if (g(t, p)) throw new m(x);
                return r.facade = t, b(t, p, r), r
            }, f = function(t) {
                return g(t, p) ? t[p] : {}
            }, function(t) {
                return g(t, p)
            }), t.exports = {
                set: c,
                get: f,
                has: a,
                enforce: function(t) {
                    return a(t) ? f(t) : c(t, {})
                },
                getterFor: function(t) {
                    return function(r) {
                        var n;
                        if (!v(r) || (n = f(r)).type !== t) throw m("Incompatible receiver, " + t + " required");
                        return n
                    }
                }
            }
        }, function(t, r, n) {
            var e = n(3),
                o = n(18);
            n = n(44), e = e.WeakMap;
            t.exports = o(e) && /native code/.test(n(e))
        }, function(t, r, n) {
            var e = n(31),
                o = n(37),
                i = e("keys");
            t.exports = function(t) {
                return i[t] || (i[t] = o(t))
            }
        }, function(t, r) {
            t.exports = {}
        }, function(t, r, n) {
            var e = n(5),
                o = n(35),
                i = Function.prototype,
                u = e && Object.getOwnPropertyDescriptor;
            o = (n = o(i, "name")) && "something" === function() {}.name, i = n && (!e || e && u(i, "name").configurable);
            t.exports = {
                EXISTS: n,
                PROPER: o,
                CONFIGURABLE: i
            }
        }, function(t, r, n) {
            var e = n(35),
                o = n(51),
                i = n(4),
                u = n(41);
            t.exports = function(t, r) {
                for (var n = o(r), c = u.f, f = i.f, a = 0; a < n.length; a++) {
                    var p = n[a];
                    e(t, p) || c(t, p, f(r, p))
                }
            }
        }, function(t, r, n) {
            var e = n(20),
                o = n(12),
                i = n(52),
                u = n(60),
                c = n(42),
                f = o([].concat);
            t.exports = e("Reflect", "ownKeys") || function(t) {
                var r = i.f(c(t)),
                    n = u.f;
                return n ? f(r, n(t)) : r
            }
        }, function(t, r, n) {
            var e = n(53),
                o = n(59).concat("length", "prototype");
            r.f = Object.getOwnPropertyNames || function(t) {
                return e(t, o)
            }
        }, function(t, r, n) {
            var e = n(12),
                o = n(35),
                i = n(10),
                u = n(54).indexOf,
                c = n(48),
                f = e([].push);
            t.exports = function(t, r) {
                var n, e = i(t),
                    a = 0,
                    p = [];
                for (n in e) !o(c, n) && o(e, n) && f(p, n);
                for (; r.length > a;) o(e, n = r[a++]) && (~u(p, n) || f(p, n));
                return p
            }
        }, function(t, r, n) {
            var e = n(10),
                o = n(55),
                i = n(57);
            n = function(t) {
                return function(r, n, u) {
                    var c, f = e(r),
                        a = i(f),
                        p = o(u, a);
                    if (t && n != n) {
                        for (; p < a;)
                            if ((c = f[p++]) != c) return !0
                    } else
                        for (; p < a; p++)
                            if ((t || p in f) && f[p] === n) return t || p || 0;
                    return !t && -1
                }
            };
            t.exports = {
                includes: n(!0),
                indexOf: n(!1)
            }
        }, function(t, r, n) {
            var e = n(56),
                o = Math.max,
                i = Math.min;
            t.exports = function(t, r) {
                return (t = e(t)) < 0 ? o(t + r, 0) : i(t, r)
            }
        }, function(t, r) {
            var n = Math.ceil,
                e = Math.floor;
            t.exports = function(t) {
                return (t = +t) != t || 0 == t ? 0 : (0 < t ? e : n)(t)
            }
        }, function(t, r, n) {
            var e = n(58);
            t.exports = function(t) {
                return e(t.length)
            }
        }, function(t, r, n) {
            var e = n(56),
                o = Math.min;
            t.exports = function(t) {
                return 0 < t ? o(e(t), 9007199254740991) : 0
            }
        }, function(t, r) {
            t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
        }, function(t, r) {
            r.f = Object.getOwnPropertySymbols
        }, function(t, r, n) {
            var e = n(6),
                o = n(18),
                i = /#|\.prototype\./,
                u = (n = function(t, r) {
                    return (t = c[u(t)]) == a || t != f && (o(r) ? e(r) : !!r)
                }, n.normalize = function(t) {
                    return String(t).replace(i, ".").toLowerCase()
                }),
                c = n.data = {},
                f = n.NATIVE = "N",
                a = n.POLYFILL = "P";
            t.exports = n
        }, function(r, n, e) {
            var o = e(30),
                i = e(63),
                u = (e = e(41), o("unscopables")),
                c = Array.prototype;
            c[u] == t && e.f(c, u, {
                configurable: !0,
                value: i(null)
            }), r.exports = function(t) {
                c[u][t] = !0
            }
        }, function(r, n, e) {
            function o() {}

            function i(t) {
                return "<script>" + t + "</" + v + ">"
            }
            var u, c = e(42),
                f = e(64),
                a = e(59),
                p = e(48),
                s = e(66),
                y = e(39),
                l = (e = e(47), "prototype"),
                v = "script",
                b = e("IE_PROTO"),
                g = function() {
                    try {
                        u = new ActiveXObject("htmlfile")
                    } catch (t) {}
                    var t;
                    g = "undefined" == typeof document || document.domain && u ? function(t) {
                        t.write(i("")), t.close();
                        var r = t.parentWindow.Object;
                        return t = null, r
                    }(u) : ((t = y("iframe")).style.display = "none", s.appendChild(t), t.src = String("javascript:"), (t = t.contentWindow.document).open(), t.write(i("document.F=Object")), t.close(), t.F);
                    for (var r = a.length; r--;) delete g[l][a[r]];
                    return g()
                };
            p[b] = !0, r.exports = Object.create || function(r, n) {
                var e;
                return null !== r ? (o[l] = c(r), e = new o, o[l] = null, e[b] = r) : e = g(), n === t ? e : f(e, n)
            }
        }, function(t, r, n) {
            var e = n(5),
                o = n(41),
                i = n(42),
                u = n(10),
                c = n(65);
            t.exports = e ? Object.defineProperties : function(t, r) {
                i(t);
                for (var n, e = u(r), f = c(r), a = f.length, p = 0; p < a;) o.f(t, n = f[p++], e[n]);
                return t
            }
        }, function(t, r, n) {
            var e = n(53),
                o = n(59);
            t.exports = Object.keys || function(t) {
                return e(t, o)
            }
        }, function(t, r, n) {
            n = n(20), t.exports = n("document", "documentElement")
        }, function(t, r, n) {
            n(2)({
                target: "Object",
                stat: !0
            }, {
                hasOwn: n(35)
            })
        }, function(r, n, e) {
            var o = e(2),
                i = e(12),
                u = e(14),
                c = e(56),
                f = e(69),
                a = (e = e(6), i("".charAt));
            o({
                target: "String",
                proto: !0,
                forced: e((function() {
                    return "\ud842" !== "𠮷".at(0)
                }))
            }, {
                at: function(r) {
                    var n = f(u(this)),
                        e = n.length;
                    return (r = 0 <= (r = c(r)) ? r : e + r) < 0 || e <= r ? t : a(n, r)
                }
            })
        }, function(t, r, n) {
            var e = n(3),
                o = n(70),
                i = e.String;
            t.exports = function(t) {
                if ("Symbol" === o(t)) throw TypeError("Cannot convert a Symbol value to a string");
                return i(t)
            }
        }, function(r, n, e) {
            var o = e(3),
                i = e(71),
                u = e(18),
                c = e(13),
                f = e(30)("toStringTag"),
                a = o.Object,
                p = "Arguments" == c(function() {
                    return arguments
                }());
            r.exports = i ? c : function(r) {
                var n;
                return r === t ? "Undefined" : null === r ? "Null" : "string" == typeof(r = function(t, r) {
                    try {
                        return t[r]
                    } catch (t) {}
                }(n = a(r), f)) ? r : p ? c(n) : "Object" == (r = c(n)) && u(n.callee) ? "Arguments" : r
            }
        }, function(t, r, n) {
            var e = {};
            e[n(30)("toStringTag")] = "z", t.exports = "[object z]" === String(e)
        }, function(r, n, e) {
            var o = e(73),
                i = e(57),
                u = e(56),
                c = o.aTypedArray;
            (0, o.exportTypedArrayMethod)("at", (function(r) {
                var n = c(this),
                    e = i(n);
                return (r = 0 <= (r = u(r)) ? r : e + r) < 0 || e <= r ? t : n[r]
            }))
        }, function(r, n, e) {
            function o(t) {
                return !!y(t) && (t = v(t), l(C, t) || l(F, t))
            }
            var i, u, c, f = e(74),
                a = e(5),
                p = e(3),
                s = e(18),
                y = e(17),
                l = e(35),
                v = e(70),
                b = e(28),
                g = e(40),
                d = e(43),
                h = e(41).f,
                x = e(21),
                m = e(75),
                O = e(77),
                S = e(30),
                j = e(37),
                w = (P = p.Int8Array) && P.prototype,
                A = (e = (e = p.Uint8ClampedArray) && e.prototype, P && m(P)),
                T = w && m(w),
                P = Object.prototype,
                _ = p.TypeError,
                E = (S = S("toStringTag"), j("TYPED_ARRAY_TAG")),
                R = j("TYPED_ARRAY_CONSTRUCTOR"),
                I = f && !!O && "Opera" !== v(p.opera),
                C = (f = !1, {
                    Int8Array: 1,
                    Uint8Array: 1,
                    Uint8ClampedArray: 1,
                    Int16Array: 2,
                    Uint16Array: 2,
                    Int32Array: 4,
                    Uint32Array: 4,
                    Float32Array: 4,
                    Float64Array: 8
                }),
                F = {
                    BigInt64Array: 8,
                    BigUint64Array: 8
                };
            for (i in C)(c = (u = p[i]) && u.prototype) ? g(c, R, u) : I = !1;
            for (i in F)(c = (u = p[i]) && u.prototype) && g(c, R, u);
            if ((!I || !s(A) || A === Function.prototype) && (A = function() {
                    throw _("Incorrect invocation")
                }, I))
                for (i in C) p[i] && O(p[i], A);
            if ((!I || !T || T === P) && (T = A.prototype, I))
                for (i in C) p[i] && O(p[i].prototype, T);
            if (I && m(e) !== T && O(e, T), a && !l(T, S))
                for (i in f = !0, h(T, S, {
                        get: function() {
                            return y(this) ? this[E] : t
                        }
                    }), C) p[i] && g(p[i], E, i);
            r.exports = {
                NATIVE_ARRAY_BUFFER_VIEWS: I,
                TYPED_ARRAY_CONSTRUCTOR: R,
                TYPED_ARRAY_TAG: f && E,
                aTypedArray: function(t) {
                    if (o(t)) return t;
                    throw _("Target is not a typed array")
                },
                aTypedArrayConstructor: function(t) {
                    if (s(t) && (!O || x(A, t))) return t;
                    throw _(b(t) + " is not a typed array constructor")
                },
                exportTypedArrayMethod: function(t, r, n) {
                    if (a) {
                        if (n)
                            for (var e in C)
                                if ((e = p[e]) && l(e.prototype, t)) try {
                                    delete e.prototype[t]
                                } catch (t) {}
                        T[t] && !n || d(T, t, !n && I && w[t] || r)
                    }
                },
                exportTypedArrayStaticMethod: function(t, r, n) {
                    var e, o;
                    if (a) {
                        if (O) {
                            if (n)
                                for (e in C)
                                    if ((o = p[e]) && l(o, t)) try {
                                        delete o[t]
                                    } catch (t) {}
                            if (A[t] && !n) return;
                            try {
                                return d(A, t, !n && I && A[t] || r)
                            } catch (t) {}
                        }
                        for (e in C) !(o = p[e]) || o[t] && !n || d(o, t, r)
                    }
                },
                isView: function(t) {
                    return !!y(t) && ("DataView" === (t = v(t)) || l(C, t) || l(F, t))
                },
                isTypedArray: o,
                TypedArray: A,
                TypedArrayPrototype: T
            }
        }, function(t, r) {
            t.exports = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView
        }, function(t, r, n) {
            var e = n(3),
                o = n(35),
                i = n(18),
                u = n(36),
                c = n(47),
                f = (n = n(76), c("IE_PROTO")),
                a = e.Object,
                p = a.prototype;
            t.exports = n ? a.getPrototypeOf : function(t) {
                var r = u(t);
                return o(r, f) ? r[f] : (t = r.constructor, i(t) && r instanceof t ? t.prototype : r instanceof a ? p : null)
            }
        }, function(t, r, n) {
            n = n(6), t.exports = !n((function() {
                function t() {}
                return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
            }))
        }, function(r, n, e) {
            var o = e(12),
                i = e(42),
                u = e(78);
            r.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                var t, r = !1,
                    n = {};
                try {
                    (t = o(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set))(n, []), r = n instanceof Array
                } catch (n) {}
                return function(n, e) {
                    return i(n), u(e), r ? t(n, e) : n.__proto__ = e, n
                }
            }() : t)
        }, function(t, r, n) {
            var e = n(3),
                o = n(18),
                i = e.String,
                u = e.TypeError;
            t.exports = function(t) {
                if ("object" == typeof t || o(t)) return t;
                throw u("Can't set " + i(t) + " as a prototype")
            }
        }], e.c = n, e.d = function(t, r, n) {
            e.o(t, r) || Object.defineProperty(t, r, {
                enumerable: !0,
                get: n
            })
        }, e.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, e.t = function(t, r) {
            if (1 & r && (t = e(t)), 8 & r) return t;
            if (4 & r && "object" == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (e.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & r && "string" != typeof t)
                for (var o in t) e.d(n, o, function(r) {
                    return t[r]
                }.bind(null, o));
            return n
        }, e.n = function(t) {
            var r = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return e.d(r, "a", r), r
        }, e.o = function(t, r) {
            return Object.prototype.hasOwnProperty.call(t, r)
        }, e.p = "", e(e.s = 0)
    }()
} catch (e) {
    console.error("An error has occurred. [ File: https://the7.io/winery/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=3.15.0 ] [ " + e.stack + " ]");
}
try {
    ! function(t) {
        var o = function(o, e) {
            var s, i, n, r, a, c = !1,
                f = !1,
                p = !1,
                l = !1,
                m = {},
                u = {
                    to: "top",
                    offset: 0,
                    extraOffset: 0,
                    effectsOffset: 0,
                    parent: !1,
                    timerInterval: 250,
                    classes: {
                        sticky: "sticky",
                        stickyActive: "sticky-active",
                        stickyEffects: "sticky-effects",
                        spacer: "sticky-spacer"
                    }
                },
                d = function(t, o, e) {
                    var s = {},
                        i = t[0].style;
                    e.forEach((function(t) {
                        if ("object" == typeof t)
                            for (var o in t) s[o] = t[o];
                        else s[t] = void 0 !== i[t] ? i[t] : ""
                    })), t.data("the7-css-backup-" + o, s)
                },
                h = function(t, o) {
                    return t.data("the7-css-backup-" + o)
                },
                y = function() {
                    m.$spacer = s.clone().addClass(i.classes.spacer).css({
                        visibility: "hidden",
                        transition: "none",
                        animation: "none"
                    }), s.after(m.$spacer)
                },
                v = function() {
                    m.$spacer.remove()
                },
                w = function() {
                    d(s, "unsticky", ["position", "width", "margin-top", "margin-bottom", "top", "bottom"]);
                    var t = {
                        position: "fixed",
                        width: k(s, "width"),
                        marginTop: 0,
                        marginBottom: 0
                    };
                    t[i.to] = i.offset, t["top" === i.to ? "bottom" : "top"] = "", m.$window.scrollTop() <= 0 && !f && (f = !0, d(s, "unabsolute", [t]), t.position = "absolute", t.top = i.offset - i.extraOffset, t.bottom = ""), s.css(t).addClass(i.classes.stickyActive)
                },
                b = function() {
                    s.css(h(s, "unsticky")).removeClass(i.classes.stickyActive)
                },
                k = function(t, o, e) {
                    var s = getComputedStyle(t[0]),
                        i = parseFloat(s[o]),
                        n = "height" === o ? ["top", "bottom"] : ["left", "right"],
                        r = [];
                    return "border-box" !== s.boxSizing && r.push("border", "padding"), e && r.push("margin"), r.forEach((function(t) {
                        n.forEach((function(o) {
                            i += parseFloat(s[t + "-" + o])
                        }))
                    })), i
                },
                g = function(t) {
                    var o = m.$window.scrollTop(),
                        e = k(t, "height"),
                        s = innerHeight,
                        i = t.offset().top - o,
                        n = i - s;
                    return {
                        top: {
                            fromTop: i,
                            fromBottom: n
                        },
                        bottom: {
                            fromTop: i + e,
                            fromBottom: n + e
                        }
                    }
                },
                $ = function() {
                    s.addClass("notransition-all"), b(), v(), c = !1, s.trigger("the7-sticky:unstick"), s[0].offsetHeight, s.removeClass("notransition-all")
                },
                T = function() {
                    f = !1, s.css(h(s, "unabsolute"))
                },
                C = function() {
                    var t = g(s),
                        o = "top" === i.to;
                    if (p) {
                        (o ? t.top.fromTop > i.offset : t.bottom.fromBottom < -i.offset) && (m.$parent.css(h(m.$parent, "childNotFollowing")), s.css(h(s, "notFollowing")), p = !1)
                    } else {
                        var e = g(m.$parent),
                            n = getComputedStyle(m.$parent[0]),
                            r = parseFloat(n[o ? "borderBottomWidth" : "borderTopWidth"]),
                            a = o ? e.bottom.fromTop - r : e.top.fromBottom + r;
                        (o ? a <= t.bottom.fromTop : a >= t.top.fromBottom) && function() {
                            d(m.$parent, "childNotFollowing", ["position"]), m.$parent.css("position", "relative"), d(s, "notFollowing", ["position", "top", "bottom"]);
                            var t = {
                                position: "absolute"
                            };
                            t[i.to] = "", t["top" === i.to ? "bottom" : "top"] = 0, s.css(t), p = !0
                        }()
                    }
                },
                B = function(t) {
                    l && -t < i.effectsOffset ? (s.removeClass(i.classes.stickyEffects), m.$spacer.removeClass(i.classes.stickyEffects), l = !1, s.trigger("the7-sticky:effect-not-active")) : !l && -t >= i.effectsOffset && (s.addClass(i.classes.stickyEffects), m.$spacer.addClass(i.classes.stickyEffects), l = !0, s.trigger("the7-sticky:effect-active"))
                },
                E = function() {
                    var t, o = i.offset,
                        e = i.stickOffset,
                        n = i.unStickOffset,
                        a = m.$window.scrollTop();
                    if (r = a, a < 0 && B(0), a <= 0 && c) {
                        var p = g(m.$spacer);
                        f ? (t = "top" === i.to ? p.top.fromTop - o + n : -p.bottom.fromBottom - o + n) > 0 && $() : ((t = "top" === i.to ? p.top.fromTop - o + n : -p.bottom.fromBottom - o + n) > 0 ? $() : function() {
                            f = !0, d(s, "unabsolute", ["position", "top", "bottom"]);
                            var t = {
                                position: "absolute",
                                top: i.offset - i.extraOffset,
                                bottom: ""
                            };
                            s.css(t)
                        }(), B(t))
                    } else {
                        if (c) {
                            f && T();
                            p = g(m.$spacer);
                            t = "top" === i.to ? p.top.fromTop - o + n : -p.bottom.fromBottom - o + n, i.parent && C(), t > 0 && $()
                        } else {
                            var l = g(s);
                            (t = "top" === i.to ? l.top.fromTop - o + e : -l.bottom.fromBottom - o + e) <= 0 && (y(), w(), c = !0, s.trigger("the7-sticky:stick"), i.parent && C())
                        }
                        B(t)
                    }
                },
                O = function() {
                    E()
                },
                x = function() {
                    var t = m.$window.scrollTop();
                    r !== t && E()
                },
                F = function() {
                    z(!0)
                },
                z = function(t = !1) {
                    c && a !== window.innerWidth && (a = window.innerWidth, f && T(), !0 === t && v(), b(), !0 === t && y(), w(), i.parent && (p = !1, C()))
                },
                S = function(t, o) {
                    let e;
                    return function() {
                        const s = this,
                            i = arguments,
                            n = !e;
                        clearTimeout(e), e = setTimeout((() => {
                            e = null, t.apply(s, i)
                        }), o), n && t.apply(s, i)
                    }
                };
            this.destroy = function() {
                f && T(), c && $(), m.$window.off("scroll", O).off("resize", z).off("resize", F), clearTimeout(n), n = null, s.removeClass(i.classes.sticky)
            }, i = jQuery.extend(!0, u, e), s = t(o).addClass(i.classes.sticky), m.$window = t(window), a = window.innerWidth, i.parent && ("parent" === i.parent ? m.$parent = s.parent() : m.$parent = s.closest(i.parent)), F = S(F, 400), m.$window.on("resize", z), m.$window.on("resize", F), m.$window.on("scroll", O), n = setInterval(x, i.timerInterval), E()
        };
        t.fn.The7Sticky = function(e) {
            var s = "string" == typeof e;
            return this.each((function() {
                var i = t(this);
                if (s) {
                    var n = i.data("the7-sticky");
                    if (!n) throw Error("Trying to perform the `" + e + "` method prior to initialization");
                    if (!n[e]) throw ReferenceError("Method `" + e + "` not found in sticky instance");
                    n[e].apply(n, Array.prototype.slice.call(arguments, 1)), "destroy" === e && i.removeData("the7-sticky")
                } else i.data("the7-sticky", new o(this, e))
            })), this
        }
    }(jQuery)
} catch (e) {
    console.error("An error has occurred. [ File: https://the7.io/winery/wp-content/themes/dt-the7/lib/jquery-sticky/jquery-sticky.min.js?ver=11.10.1 ] [ " + e.stack + " ]");
}
try {
    ! function(e) {
        "use strict";
        e.the7StickyRow = function(t) {
            let i, n, c, o = e(t),
                s = !1,
                r = e(window),
                f = {};
            o.vars = {
                stick: {
                    stickOffset: 0,
                    currentConfig: null
                },
                scroll: {
                    isActive: !1,
                    timerId: null,
                    didScroll: !1,
                    lastScrollTop: 0,
                    delta: 5,
                    elementHeight: 0,
                    isDown: !1
                }
            };
            let l = {
                    down: "the7-e-scroll-down",
                    noTransition: "notransition-all"
                },
                a = {
                    sticky: "the7-e-sticky",
                    stickyActive: "the7-e-sticky-active",
                    stickyEffects: "the7-e-sticky-effects",
                    spacer: "the7-e-sticky-spacer"
                };
            e.data(t, "the7StickyRow", o), f = {
                init: function() {
                    i = new The7ElementorSettings(o), c = i.getModelCID(), elementorFrontend.isEditMode() && elementor.channels.data.on("element:destroy", f.onDestroy), f.bindEvents(), o.refresh(), f.toggle = elementorFrontend.debounce(f.toggle, 300)
                },
                bindEvents: function() {
                    elementorFrontend.elements.$window.on("the7-resize-width", f.toggle), o.on("the7-sticky:effect-active", f.onEffectActive), o.on("the7-sticky:effect-not-active", f.onEffectNotActive), o.on("the7-sticky:stick", f.activateHideOnScroll), o.on("the7-sticky:unstick", f.deactivateHideOnscroll)
                },
                unBindEvents: function() {
                    elementorFrontend.elements.$window.off("the7-resize-width", f.toggle), o.off("the7-sticky:effect-active", f.onEffectActive), o.off("the7-sticky:effect-not-active", f.onEffectNotActive), o.off("the7-sticky:stick", f.activateHideOnScroll), o.off("the7-sticky:unstick", f.deactivateHideOnscroll)
                },
                toggle: function() {
                    if (f.isEffectActive() ? f.activateEffects() : f.deactivateEffects(), f.isStickyActive()) {
                        const e = f.getStickyConfig(),
                            t = JSON.stringify(e) !== JSON.stringify(o.vars.stick.currentConfig);
                        null !== o.vars.stick.currentConfig && t ? o.reactivateSticky() : f.activateSticky()
                    } else f.deactivateSticky();
                    f.updateHeight()
                },
                isEffectActive: function() {
                    if (void 0 === n) return !1;
                    var e = elementorFrontend.getCurrentDeviceMode();
                    if ("yes" === n.the7_sticky_effects) {
                        var t = n.the7_sticky_effects_devices;
                        if (!t || -1 !== t.indexOf(e)) return !0
                    }
                    return !1
                },
                isStickyActive: function() {
                    if (void 0 === n) return !1;
                    var e = elementorFrontend.getCurrentDeviceMode();
                    if ("yes" === n.the7_sticky_row && !n.sticky) {
                        var t = n.the7_sticky_row_devices;
                        if (!t || -1 !== t.indexOf(e)) return !0
                    }
                    return !1
                },
                onEffectActive: function() {
                    o.find(".the7-e-on-sticky-effect-visibility, .elementor-widget-the7_horizontal-menu").each((function() {
                        e(this).trigger("effect-active")
                    })), f.updateHeight()
                },
                onEffectNotActive: function() {
                    o.find(".the7-e-on-sticky-effect-visibility").each((function() {
                        e(this).trigger("effect-not-active")
                    })), f.updateHeight()
                },
                updateHeight: function() {
                    o.vars.scroll.isActive && (o.vars.scroll.elementHeight = o.outerHeight())
                },
                refresh: function() {},
                activateEffects: function() {
                    s || (s = !0, o.reactivateSticky())
                },
                deactivateEffects: function() {
                    s && (s = !1, o.removeClass(a.stickyEffects), o.reactivateSticky())
                },
                getStickyConfig: function() {
                    let e = 0,
                        t = 0;
                    if ("yes" === n.the7_sticky_scroll_up) {
                        let n = i.getCurrentDeviceSetting("the7_sticky_row_stick_offset");
                        "undefined" !== n && (e = n.size), t = 1
                    }
                    o.vars.stick.stickOffset = e;
                    let c = {
                            to: "top",
                            offset: i.getCurrentDeviceSetting("the7_sticky_row_offset"),
                            effectsOffset: i.getCurrentDeviceSetting("the7_sticky_effects_offset"),
                            stickOffset: e,
                            unStickOffset: t,
                            classes: { ...a
                            }
                        },
                        r = elementorFrontend.elements.$wpAdminBar;
                    if (s || (c.classes.stickyEffects = ""), r.length && "fixed" === r.css("position")) {
                        let e = r.height();
                        c.offset += e, c.extraOffset = e
                    }
                    return c
                },
                activateSticky: function() {
                    f.isStickyInstanceActive() || !f.isStickyActive() || o.hasClass("elementor-sticky") || (o.vars.stick.currentConfig = f.getStickyConfig(), o.The7Sticky(o.vars.stick.currentConfig))
                },
                deactivateSticky: function() {
                    f.isStickyInstanceActive() && (o.The7Sticky("destroy"), o.removeClass(a.stickyEffects), f.deactivateHideOnscroll())
                },
                activateHideOnScroll: function() {
                    void 0 !== n && "yes" === n.the7_sticky_scroll_up && (o.vars.scroll.isActive = !0, o.vars.scroll.didScroll = !1, o.vars.scroll.lastScrollTop = 0, f.updateHeight(), r.on("scroll", f.scrollHandler), f.scrollIntervalHandler(!0), o.vars.scroll.timerId = setInterval(f.scrollIntervalHandler, 200))
                },
                scrollHandler: function() {
                    o.vars.scroll.didScroll = !0
                },
                deactivateHideOnscroll: function() {
                    o.vars.scroll.isActive && (r.off("scroll", f.scrollHandler), clearTimeout(o.vars.scroll.timerId), o.vars.scroll.timerId = null, o.vars.scroll.isActive = !1, o.removeClass(l.down))
                },
                scrollIntervalHandler: function(e) {
                    if (e) {
                        r.scrollTop() > o.vars.scroll.elementHeight && (o.addClass(l.noTransition), f.setHideScroll(!0), o[0].offsetHeight, o.removeClass(l.noTransition))
                    }
                    if (o.vars.scroll.didScroll) {
                        o.vars.scroll.didScroll = !1;
                        let e = r.scrollTop();
                        if (Math.abs(o.vars.scroll.lastScrollTop - e) <= o.vars.scroll.delta) return;
                        e > o.vars.scroll.lastScrollTop ? !o.vars.scroll.isDown && e > o.vars.scroll.elementHeight && f.setHideScroll(!0) : o.vars.scroll.isDown && f.setHideScroll(!1), o.vars.scroll.lastScrollTop = e
                    }
                },
                setHideScroll: function(e) {
                    e ? (o.addClass(l.down), o.vars.scroll.isDown = !0) : (o.removeClass(l.down), o.vars.scroll.isDown = !1)
                },
                isStickyInstanceActive: function() {
                    return void 0 !== o.data("the7-sticky")
                },
                onDestroy: function(e) {
                    e.cid === c && o.delete()
                }
            }, o.refresh = function() {
                n = i.getSettings(), f.toggle(), f.refresh()
            }, o.delete = function() {
                f.unBindEvents(), f.deactivateEffects(), f.deactivateSticky(), o.removeData("the7StickyRow")
            }, o.reactivateSticky = function() {
                f.isStickyInstanceActive() && (n = i.getSettings(), f.deactivateSticky(), f.activateSticky())
            }, f.init()
        };
        var t = function(t) {
            t.each((function() {
                var t = e(this);
                if (t.hasClass("the7-e-sticky-yes") || t.hasClass("the7-e-sticky-row-yes")) {
                    if (t.hasClass("the7-e-sticky-spacer") || t.hasClass("elementor-inner-section")) return;
                    var i = e(this).data("the7StickyRow");
                    void 0 !== i && i.delete(), new e.the7StickyRow(this)
                }
            }))
        };
        e.the7StickyEffectElementHide = function(t) {
            var i, n, c, o = e(t),
                s = "",
                r = {
                    effect: "the7-e-on-sticky-effect-visibility",
                    hide: "the7-e-on-sticky-effect-visibility-hide",
                    show: "the7-e-on-sticky-effect-visibility-show"
                },
                f = {};
            o.vars = {
                animDelay: 500
            }, e.data(t, "the7StickyEffectElementHide", o), f = {
                init: function() {
                    i = new The7ElementorSettings(o), n = i.getModelCID(), elementorFrontend.isEditMode() && elementor.channels.data.on("element:destroy", f.onDestroy), o.refresh(), f.bindEvents(), f.toggle = elementorFrontend.debounce(f.toggle, 300)
                },
                bindEvents: function() {
                    elementorFrontend.elements.$window.on("the7-resize-width", f.toggle), o.on("effect-active", f.onEffectActive), o.on("effect-not-active", f.onEffectNotActive)
                },
                unBindEvents: function() {
                    elementorFrontend.elements.$window.off("the7-resize-width", f.toggle), o.off("effect-active", f.onEffectActive), o.off("effect-not-active", f.onEffectNotActive)
                },
                toggle: function() {
                    var e = i.getCurrentDeviceSetting("the7_hide_on_sticky_effect");
                    void 0 !== e && ("" !== e ? f.activateEffects(e) : f.deactivateEffects())
                },
                activateEffects: function(e) {
                    s !== e && "" !== e && (o.removeClass(r.hide), o.removeClass(r.show), o.addClass(r.effect), o.addClass(r[e]), s = e)
                },
                deactivateEffects: function() {
                    "" !== s && (o.removeClass(r.hide), o.removeClass(r.show), o.removeClass(r.effect), f.unsetHeight(), s = "")
                },
                onDestroy: function(e) {
                    e.cid === n && o.delete()
                },
                getHeight: function() {
                    return o.outerHeight()
                },
                setHeight: function(e) {
                    o.css({
                        height: e
                    })
                },
                unsetHeight: function() {
                    o.css({
                        height: ""
                    })
                },
                updateHeight: function() {
                    f.unsetHeight(), o.removeClass(r[s]), f.setHeight(f.getHeight()), window.setTimeout(f.addEffectClass, 1)
                },
                addEffectClass: function() {
                    o.addClass(r[s])
                },
                onEffectActive: function() {
                    switch (s) {
                        case "hide":
                            clearTimeout(c), f.updateHeight();
                            break;
                        case "show":
                            c = window.setTimeout(f.unsetHeight, o.vars.animDelay)
                    }
                },
                onEffectNotActive: function() {
                    switch (s) {
                        case "hide":
                            c = window.setTimeout(f.unsetHeight, o.vars.animDelay);
                            break;
                        case "show":
                            clearTimeout(c), f.updateHeight()
                    }
                }
            }, o.refresh = function() {
                f.toggle()
            }, o.delete = function() {
                f.unBindEvents(), f.deactivateEffects(), o.removeData("the7StickyEffectElementHide")
            }, f.init()
        };
        var i = function(t) {
            t.each((function() {
                if (!e(this).hasClass("the7-e-sticky-spacer")) {
                    var t = e(this).data("the7StickyEffectElementHide");
                    void 0 !== t && t.delete(), new e.the7StickyEffectElementHide(this)
                }
            }))
        };
        e(window).on("elementor/frontend/init", (function() {
            function n(e) {
                t(e);
                let n = new The7ElementorSettings(e).getSettings();
                if (void 0 !== n) {
                    The7ElementorSettings.getResponsiveSettingList("the7_hide_on_sticky_effect").some((function(e) {
                        return e in n && "" !== n[e]
                    })) && i(e)
                }
            }

            function c(t) {
                t.each((function() {
                    n(e(this))
                }))
            }

            function o(e, n) {
                var c, o, s = [...The7ElementorSettings.getResponsiveSettingList("the7_sticky_row_offset"), ...The7ElementorSettings.getResponsiveSettingList("the7_sticky_effects_offset"), ...The7ElementorSettings.getResponsiveSettingList("the7_sticky_row_stick_offset"), "the7_sticky_row_overlap", "the7_sticky_effects_devices", "the7_sticky_effects", "the7_hide_on_sticky_effect"],
                    r = ["the7_sticky_row", "the7_sticky_row_devices", "sticky", "flex_direction", ...s],
                    f = e.model.get("name"); - 1 !== r.indexOf(f) && (void 0 !== (o = (c = window.jQuery(n.$el)).data("the7StickyRow")) ? (o.refresh(), -1 !== s.indexOf(f) && o.reactivateSticky()) : t(c)); - 1 !== [...The7ElementorSettings.getResponsiveSettingList("the7_hide_on_sticky_effect")].indexOf(f) && (void 0 !== (o = (c = window.jQuery(n.$el)).data("the7StickyEffectElementHide")) ? o.refresh() : i(c))
            }
            elementorFrontend.elements.$document.on("elementor/popup/show", (function(e, t, i) {
                c(i.$element.find(".elementor-section, .e-container, .e-con"))
            })), elementorFrontend.elements.$document.on("elementor/popup/hide", (function(t, i, n) {
                n.$element.find(".elementor-section, .e-container, .e-con").each((function() {
                    var t = e(this).data("the7StickyRow");
                    void 0 !== t && t.delete(), void 0 !== (t = e(this).data("the7StickyEffectElementHide")) && t.delete()
                }))
            })), elementorFrontend.isEditMode() ? (elementorEditorAddOnChangeHandler("section", o), elementorEditorAddOnChangeHandler("container", o), elementorFrontend.hooks.addAction("frontend/element_ready/section", (function(e, t) {
                t(document).ready((function() {
                    n(e)
                }))
            })), elementorFrontend.hooks.addAction("frontend/element_ready/container", (function(e, t) {
                t(document).ready((function() {
                    n(e)
                }))
            }))) : elementorFrontend.on("components:init", (function() {
                e(document).ready((function() {
                    c(e(".elementor-section, .e-container, .e-con"))
                }))
            }))
        }))
    }(jQuery)
} catch (e) {
    console.error("An error has occurred. [ File: https://the7.io/winery/wp-content/themes/dt-the7/js/compatibility/elementor/sticky-effects.min.js?ver=11.10.1 ] [ " + e.stack + " ]");
}