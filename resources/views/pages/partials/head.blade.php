<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Diến Biến Rừng Hà Nam</title>

<script type="text/javascript" src="/winery/wp-content/cache/fvm/min/main.js" charset="UTF-8"></script>
<script data-cfasync="false">
    function dtmuag() {
            var e = navigator.userAgent;
            if (e.match(/x11.*ox\/54|id\s4.*us.*ome\/62|oobo|ight|tmet|eadl|ngdo|PTST/i)) return !1;
            if (e.match(/x11.*me\/86\.0/i)) {
                var r = screen.width;
                if ("number" == typeof r && 1367 == r) return !1
            }
            return !0
        }
        var dtmuag_t = 50;
        var dtmuag_events = ["mouseover", "keydown", "touchmove", "touchstart"];
</script>
<meta charset="UTF-8" />
<link rel="preload"
    href="/winery/wp-content/cache/fvm/min/1702991737-cssc3995e2afc46ec94cd97d6091fd4f801358c0c71bf564f9eb8404154a3ca3.css"
    as="style" media="all" />
<script data-cfasync="false">
    if (navigator.userAgent.match(/MSIE|Internet Explorer/i) || navigator.userAgent.match(/Trident\/7\..*?rv:11/i)) {
            var href = document.location.href;
            if (!href.match(/[?&]iebrowser/)) {
                if (href.indexOf("?") == -1) {
                    if (href.indexOf("#") == -1) {
                        document.location.href = href + "?iebrowser=1"
                    } else {
                        document.location.href = href.replace("#", "?iebrowser=1#")
                    }
                } else {
                    if (href.indexOf("#") == -1) {
                        document.location.href = href + "&iebrowser=1"
                    } else {
                        document.location.href = href.replace("#", "&iebrowser=1#")
                    }
                }
            }
        }
</script>
<script data-cfasync="false">
    class FVMLoader {
            constructor(e) {
                this.triggerEvents = e, this.eventOptions = {
                    passive: !0
                }, this.userEventListener = this.triggerListener.bind(this), this.delayedScripts = {
                    normal: [],
                    async: [],
                    defer: []
                }, this.allJQueries = []
            }
            _addUserInteractionListener(e) {
                this.triggerEvents.forEach(t => window.addEventListener(t, e.userEventListener, e.eventOptions))
            }
            _removeUserInteractionListener(e) {
                this.triggerEvents.forEach(t => window.removeEventListener(t, e.userEventListener, e.eventOptions))
            }
            triggerListener() {
                this._removeUserInteractionListener(this), "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", this._loadEverythingNow.bind(this)) : this._loadEverythingNow()
            }
            async _loadEverythingNow() {
                this._runAllDelayedCSS(), this._delayEventListeners(), this._delayJQueryReady(this), this._handleDocumentWrite(), this._registerAllDelayedScripts(), await this._loadScriptsFromList(this.delayedScripts.normal), await this._loadScriptsFromList(this.delayedScripts.defer), await this._loadScriptsFromList(this.delayedScripts.async), await this._triggerDOMContentLoaded(), await this._triggerWindowLoad(), window.dispatchEvent(new Event("wpr-allScriptsLoaded"))
            }
            _registerAllDelayedScripts() {
                document.querySelectorAll("script[type=fvmdelay]").forEach(e => {
                    e.hasAttribute("src") ? e.hasAttribute("async") && !1 !== e.async ? this.delayedScripts.async.push(e) : e.hasAttribute("defer") && !1 !== e.defer || "module" === e.getAttribute("data-type") ? this.delayedScripts.defer.push(e) : this.delayedScripts.normal.push(e) : this.delayedScripts.normal.push(e)
                })
            }
            _runAllDelayedCSS() {
                document.querySelectorAll("link[rel=fvmdelay]").forEach(e => {
                    e.setAttribute("rel", "stylesheet")
                })
            }
            async _transformScript(e) {
                return await this._requestAnimFrame(), new Promise(t => {
                    const n = document.createElement("script");
                    let r;
                    [...e.attributes].forEach(e => {
                        let t = e.nodeName;
                        "type" !== t && ("data-type" === t && (t = "type", r = e.nodeValue), n.setAttribute(t, e.nodeValue))
                    }), e.hasAttribute("src") ? (n.addEventListener("load", t), n.addEventListener("error", t)) : (n.text = e.text, t()), e.parentNode.replaceChild(n, e)
                })
            }
            async _loadScriptsFromList(e) {
                const t = e.shift();
                return t ? (await this._transformScript(t), this._loadScriptsFromList(e)) : Promise.resolve()
            }
            _delayEventListeners() {
                let e = {};

                function t(t, n) {
                    ! function (t) {
                        function n(n) {
                            return e[t].eventsToRewrite.indexOf(n) >= 0 ? "wpr-" + n : n
                        }
                        e[t] || (e[t] = {
                            originalFunctions: {
                                add: t.addEventListener,
                                remove: t.removeEventListener
                            },
                            eventsToRewrite: []
                        }, t.addEventListener = function () {
                            arguments[0] = n(arguments[0]), e[t].originalFunctions.add.apply(t, arguments)
                        }, t.removeEventListener = function () {
                            arguments[0] = n(arguments[0]), e[t].originalFunctions.remove.apply(t, arguments)
                        })
                    }(t), e[t].eventsToRewrite.push(n)
                }

                function n(e, t) {
                    let n = e[t];
                    Object.defineProperty(e, t, {
                        get: () => n || function () { },
                        set(r) {
                            e["wpr" + t] = n = r
                        }
                    })
                }
                t(document, "DOMContentLoaded"), t(window, "DOMContentLoaded"), t(window, "load"), t(window, "pageshow"), t(document, "readystatechange"), n(document, "onreadystatechange"), n(window, "onload"), n(window, "onpageshow")
            }
            _delayJQueryReady(e) {
                let t = window.jQuery;
                Object.defineProperty(window, "jQuery", {
                    get: () => t,
                    set(n) {
                        if (n && n.fn && !e.allJQueries.includes(n)) {
                            n.fn.ready = n.fn.init.prototype.ready = function (t) {
                                e.domReadyFired ? t.bind(document)(n) : document.addEventListener("DOMContentLoaded2", () => t.bind(document)(n))
                            };
                            const t = n.fn.on;
                            n.fn.on = n.fn.init.prototype.on = function () {
                                if (this[0] === window) {
                                    function e(e) {
                                        return e.split(" ").map(e => "load" === e || 0 === e.indexOf("load.") ? "wpr-jquery-load" : e).join(" ")
                                    }
                                    "string" == typeof arguments[0] || arguments[0] instanceof String ? arguments[0] = e(arguments[0]) : "object" == typeof arguments[0] && Object.keys(arguments[0]).forEach(t => {
                                        delete Object.assign(arguments[0], {
                                            [e(t)]: arguments[0][t]
                                        })[t]
                                    })
                                }
                                return t.apply(this, arguments), this
                            }, e.allJQueries.push(n)
                        }
                        t = n
                    }
                })
            }
            async _triggerDOMContentLoaded() {
                this.domReadyFired = !0, await this._requestAnimFrame(), document.dispatchEvent(new Event("DOMContentLoaded2")), await this._requestAnimFrame(), window.dispatchEvent(new Event("DOMContentLoaded2")), await this._requestAnimFrame(), document.dispatchEvent(new Event("wpr-readystatechange")), await this._requestAnimFrame(), document.wpronreadystatechange && document.wpronreadystatechange()
            }
            async _triggerWindowLoad() {
                await this._requestAnimFrame(), window.dispatchEvent(new Event("wpr-load")), await this._requestAnimFrame(), window.wpronload && window.wpronload(), await this._requestAnimFrame(), this.allJQueries.forEach(e => e(window).trigger("wpr-jquery-load")), window.dispatchEvent(new Event("wpr-pageshow")), await this._requestAnimFrame(), window.wpronpageshow && window.wpronpageshow()
            }
            _handleDocumentWrite() {
                const e = new Map;
                document.write = document.writeln = function (t) {
                    const n = document.currentScript,
                        r = document.createRange(),
                        i = n.parentElement;
                    let a = e.get(n);
                    void 0 === a && (a = n.nextSibling, e.set(n, a));
                    const s = document.createDocumentFragment();
                    r.setStart(s, 0), s.appendChild(r.createContextualFragment(t)), i.insertBefore(s, a)
                }
            }
            async _requestAnimFrame() {
                return new Promise(e => requestAnimationFrame(e))
            }
            static run() {
                const e = new FVMLoader(["keydown", "mousemove", "touchmove", "touchstart", "touchend", "wheel"]);
                e._addUserInteractionListener(e)
            }
        }
        FVMLoader.run();
</script>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
<title>The7 Winery &#8211; Perfect solution for winery, brewery or distillery </title>
<meta name="robots" content="max-image-preview:large" />
<meta property="og:site_name" content="The7 Winery" />
<meta property="og:title" content="Home" />
<meta property="og:description"
    content="Seven Winery Napa Valley est. 2001 Our Story Our Terroirs Our Wines Chardonnay 2021 &#036;15.00 &#036;9.99Add to cart Merlot Rose 2021 &#036;25.00Add to cart Sauvignon Blanc 2021 &#036;10.00Add to cart Merlot 2021 &#036;33.00Add to cart Cabernet Sauvignon 2021 &#036;39.00Add to cart Seven case #1 &#036;59.99Add to cart Seven case #2 &#036;65.00Add to cart Our Experiences&hellip;" />
<meta property="og:type" content="website" />
<link rel="preload" fetchpriority="low" id="fvmfonts-css"
    href="/winery/wp-content/cache/fvm/min/1702991737-css640a17f040779b825e17804d4e9944bbe0f55d8cc49ca8d8eb31d3b0c8c8c.css"
    as="style" media="all" onload="this.rel='stylesheet';this.onload=null">
<link rel="stylesheet"
    href="/winery/wp-content/cache/fvm/min/1702991737-cssc3995e2afc46ec94cd97d6091fd4f801358c0c71bf564f9eb8404154a3ca3.css">
<link rel="stylesheet" href="/winery/wp-content/cache/fvm/min/1702991737-css473b659e714210ae3951b046628cc689145d9d6931d07b0d18e1e76a4fdcc.css">
<script data-cfasync="false">
    if (dtmuag()) {
            window.addEventListener("load", function () {
                var c = setTimeout(b, dtmuag_t);
                dtmuag_events.forEach(function (a) {
                    window.addEventListener(a, e, {
                        passive: !0
                    })
                });

                function e() {
                    b();
                    clearTimeout(c);
                    dtmuag_events.forEach(function (a) {
                        window.removeEventListener(a, e, {
                            passive: !0
                        })
                    })
                }

                function b() {
                    (function (a) {
                        dtmuag_events.forEach(function (a) {
                            window.removeEventListener(a, e, {
                                passive: !0
                            })
                        });
                        var b = a.createElement('script'),
                            c = a.scripts[0];
                        b.src = '/winery/wp-content/cache/fvm/min/1702991737-js3b00e035f3481222fc6e540eda625ba1e20bc0f8736c71f1ea8bac0a0dc239.js';
                        b.async = false;
                        a.body.appendChild(b);
                    }(document));
                }
            });
        }
</script>
<script data-cfasync="false">
    if (dtmuag()) {
            window.addEventListener("load", function () {
                var c = setTimeout(b, dtmuag_t);
                dtmuag_events.forEach(function (a) {
                    window.addEventListener(a, e, {
                        passive: !0
                    })
                });

                function e() {
                    b();
                    clearTimeout(c);
                    dtmuag_events.forEach(function (a) {
                        window.removeEventListener(a, e, {
                            passive: !0
                        })
                    })
                }

                function b() {
                    (function (a) {
                        dtmuag_events.forEach(function (a) {
                            window.removeEventListener(a, e, {
                                passive: !0
                            })
                        });
                        var b = a.createElement('script'),
                            c = a.scripts[0];
                        b.src = 'https://the7.io/winery/wp-content/cache/fvm/min/1702991737-js26983214719c9f9eae2d8e7fe248eff6e9a24ed5fd96458e90bf64403eab90.js';
                        b.async = false;
                        b.onload = function () {
                            var load = document.getElementById("load");
                            if (!load.classList.contains("loader-removed")) {
                                setTimeout(function () {
                                    load.className += " loader-removed";
                                }, 100);
                            }
                        };
                        a.body.appendChild(b);
                    }(document));
                }
            });
        }
</script>
<link rel="profile" href="https://gmpg.org/xfn/11" />
<script id="the7-cloudflare-mobile-menu-fix">
    document.addEventListener("DOMContentLoaded", function (event) {
            var mobileMenuImages = document.body.querySelectorAll("#mobile-menu img");
            var brandingImages = document.body.querySelectorAll(".branding img");
            var slideshowImages = document.body.querySelectorAll("#main-slideshow img");

            Array.prototype.forEach.call(mobileMenuImages, function (el) {
                el.setAttribute("data-cfstyle", el.getAttribute("style"));
            });
            Array.prototype.forEach.call(brandingImages, function (el) {
                el.setAttribute("style", "");
            });
            Array.prototype.forEach.call(slideshowImages, function (el) {
                if (!el.getAttribute("src") && el.getAttribute("data-cfsrc")) {
                    el.setAttribute("src", el.getAttribute("data-cfsrc"));
                }
            });
        });
</script>
<style id="woocommerce-inline-inline-css" type="text/css" media="all">
    .woocommerce form .form-row .required {
        visibility: visible;
    }
</style>
<style id="dt-main-inline-css" type="text/css" media="all">
    body #load {
        display: block;
        height: 100%;
        overflow: hidden;
        position: fixed;
        width: 100%;
        z-index: 9901;
        opacity: 1;
        visibility: visible;
        transition: all .35s ease-out;
    }

    .load-wrap {
        width: 100%;
        height: 100%;
        background-position: center center;
        background-repeat: no-repeat;
        text-align: center;
        display: -ms-flexbox;
        display: -ms-flex;
        display: flex;
        -ms-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-flow: column wrap;
        flex-flow: column wrap;
        -ms-flex-pack: center;
        -ms-justify-content: center;
        justify-content: center;
    }

    .load-wrap>svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    #load {
        background: var(--the7-elementor-beautiful-loading-bg, #ffffff);
        --the7-beautiful-spinner-color2: var(--the7-beautiful-spinner-color, rgba(0, 0, 0, 0.12));
    }
</style>
<script src="/winery/wp-includes/js/jquery/jquery.min.js?ver=3.7.0" id="jquery-core-js"></script>
<script src="/winery/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1" id="jquery-migrate-js"></script>
<script id="dt-above-fold-js-extra">
    /* <![CDATA[ */
        var dtLocal = {
            "themeUrl": "https:\/\/the7.io\/winery\/wp-content\/themes\/dt-the7",
            "passText": "To view this protected post, enter the password below:",
            "moreButtonText": {
                "loading": "Loading...",
                "loadMore": "Load more"
            },
            "postID": "10",
            "ajaxurl": "https:\/\/the7.io\/winery\/wp-admin\/admin-ajax.php",
            "REST": {
                "baseUrl": "https:\/\/the7.io\/winery\/wp-json\/the7\/v1",
                "endpoints": {
                    "sendMail": "\/send-mail"
                }
            },
            "contactMessages": {
                "required": "One or more fields have an error. Please check and try again.",
                "terms": "Please accept the privacy policy.",
                "fillTheCaptchaError": "Please, fill the captcha."
            },
            "captchaSiteKey": "",
            "ajaxNonce": "cbfa29d6ed",
            "pageData": {
                "type": "page",
                "template": "page",
                "layout": null
            },
            "themeSettings": {
                "smoothScroll": "off",
                "lazyLoading": false,
                "desktopHeader": {
                    "height": ""
                },
                "ToggleCaptionEnabled": "disabled",
                "ToggleCaption": "Navigation",
                "floatingHeader": {
                    "showAfter": 94,
                    "showMenu": false,
                    "height": 64,
                    "logo": {
                        "showLogo": true,
                        "html": "",
                        "url": "https:\/\/the7.io\/winery\/"
                    }
                },
                "topLine": {
                    "floatingTopLine": {
                        "logo": {
                            "showLogo": false,
                            "html": ""
                        }
                    }
                },
                "mobileHeader": {
                    "firstSwitchPoint": 1150,
                    "secondSwitchPoint": 600,
                    "firstSwitchPointHeight": 60,
                    "secondSwitchPointHeight": 50,
                    "mobileToggleCaptionEnabled": "right",
                    "mobileToggleCaption": "Menu"
                },
                "stickyMobileHeaderFirstSwitch": {
                    "logo": {
                        "html": ""
                    }
                },
                "stickyMobileHeaderSecondSwitch": {
                    "logo": {
                        "html": ""
                    }
                },
                "sidebar": {
                    "switchPoint": 992
                },
                "boxedWidth": "1280px"
            },
            "wcCartFragmentHash": "f5602a881c4bb24fc814d53bddc14b97",
            "elementor": {
                "settings": {
                    "container_width": 1300
                }
            }
        };
        var dtShare = {
            "shareButtonText": {
                "facebook": "Share on Facebook",
                "twitter": "Tweet",
                "pinterest": "Pin it",
                "linkedin": "Share on Linkedin",
                "whatsapp": "Share on Whatsapp"
            },
            "overlayOpacity": "90"
        };
        /* ]]> */
</script>
<noscript>
    <style>
        .woocommerce-product-gallery {
            opacity: 1 !important;
        }
    </style>
</noscript>
<link rel="icon" href="{{ asset('/img/logo/kdg_logo.jpg') }}" sizes="192x192" />
<script>
    window.psicheck = function () {
            var check = false;

            (function (a) {
                if (navigator.userAgent.match(/nux.*oto\sG|x11.*fox\/54|x11.*ome\/39|x11.*ome\/62|oid\s6.*1.*xus\s5.*MRA58N.*ome|JWR66Y.*ome\/62|woobot|speed|ighth|tmetr|eadle/i)) check = true;
            })(navigator.userAgent || navigator.vendor || window.opera);
            return check;
        };
        if (!window.psicheck()) {
            (function (i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r;
                i[r] = i[r] || function () {
                    (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date();
                a = s.createElement(o),
                    m = s.getElementsByTagName(o)[0];
                a.async = 1;
                a.src = g;
                m.parentNode.insertBefore(a, m)
            })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

            ga('create', 'UA-90553574-1', 'auto');
            ga('send', 'pageview');
        }
</script>
<style id="the7-custom-inline-css" type="text/css" media="all">
    .sub-nav .menu-item i.fa,
    .sub-nav .menu-item i.fas,
    .sub-nav .menu-item i.far,
    .sub-nav .menu-item i.fab {
        text-align: center;
        width: 1.25em;
    }
</style>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />

<link rel="stylesheet" href="{{ asset('/css/custom.css') }}">