(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    "+ar0": function (e, t, n) {
      var a = n("P8UN");
      a(a.S + a.F * !n("QPJK"), "Object", { defineProperties: n("YmeT") });
    },
    "/PZL": function (e, t, n) {
      "use strict";
      n("R48M"),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = {
          defaultEasing: function (e) {
            return e < 0.5
              ? Math.pow(2 * e, 2) / 2
              : 1 - Math.pow(2 * (1 - e), 2) / 2;
          },
          linear: function (e) {
            return e;
          },
          easeInQuad: function (e) {
            return e * e;
          },
          easeOutQuad: function (e) {
            return e * (2 - e);
          },
          easeInOutQuad: function (e) {
            return e < 0.5 ? 2 * e * e : (4 - 2 * e) * e - 1;
          },
          easeInCubic: function (e) {
            return e * e * e;
          },
          easeOutCubic: function (e) {
            return --e * e * e + 1;
          },
          easeInOutCubic: function (e) {
            return e < 0.5
              ? 4 * e * e * e
              : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
          },
          easeInQuart: function (e) {
            return e * e * e * e;
          },
          easeOutQuart: function (e) {
            return 1 - --e * e * e * e;
          },
          easeInOutQuart: function (e) {
            return e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e;
          },
          easeInQuint: function (e) {
            return e * e * e * e * e;
          },
          easeOutQuint: function (e) {
            return 1 + --e * e * e * e * e;
          },
          easeInOutQuint: function (e) {
            return e < 0.5
              ? 16 * e * e * e * e * e
              : 1 + 16 * --e * e * e * e * e;
          },
        });
    },
    "3nLz": function (e, t, n) {
      "use strict";
      n("t+fG")("fixed", function (e) {
        return function () {
          return e(this, "tt", "", "");
        };
      });
    },
    "7FV1": function (e, t, n) {
      "use strict";
      n("pJf4"), n("HXzo"), n("LagC"), n("pS08"), n("R48M"), n("E5k/");
      var a =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          },
        r = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var a = t[n];
              (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a);
            }
          }
          return function (t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t;
          };
        })();
      function o(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function i(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function s(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      var l = n("q1tI"),
        c = (n("i8i4"), n("xFC4"), n("wT0s")),
        u = n("zPnG"),
        d = n("17x9"),
        f = n("Dy/p"),
        A = {
          to: d.string.isRequired,
          containerId: d.string,
          container: d.object,
          activeClass: d.string,
          spy: d.bool,
          smooth: d.oneOfType([d.bool, d.string]),
          offset: d.number,
          delay: d.number,
          isDynamic: d.bool,
          onClick: d.func,
          duration: d.oneOfType([d.number, d.func]),
          absolute: d.bool,
          onSetActive: d.func,
          onSetInactive: d.func,
          ignoreCancelEvents: d.bool,
          hashSpy: d.bool,
        },
        p = {
          Scroll: function (e, t) {
            console.warn("Helpers.Scroll is deprecated since v1.7.0");
            var n = t || u,
              d = (function (t) {
                function u(e) {
                  o(this, u);
                  var t = i(
                    this,
                    (u.__proto__ || Object.getPrototypeOf(u)).call(this, e)
                  );
                  return p.call(t), (t.state = { active: !1 }), t;
                }
                return (
                  s(u, t),
                  r(u, [
                    {
                      key: "getScrollSpyContainer",
                      value: function () {
                        var e = this.props.containerId,
                          t = this.props.container;
                        return e
                          ? document.getElementById(e)
                          : t && t.nodeType
                          ? t
                          : document;
                      },
                    },
                    {
                      key: "componentDidMount",
                      value: function () {
                        if (this.props.spy || this.props.hashSpy) {
                          var e = this.getScrollSpyContainer();
                          c.isMounted(e) || c.mount(e),
                            this.props.hashSpy &&
                              (f.isMounted() || f.mount(n),
                              f.mapContainer(this.props.to, e)),
                            this.props.spy &&
                              c.addStateHandler(this.stateHandler),
                            c.addSpyHandler(this.spyHandler, e),
                            this.setState({ container: e });
                        }
                      },
                    },
                    {
                      key: "componentWillUnmount",
                      value: function () {
                        c.unmount(this.stateHandler, this.spyHandler);
                      },
                    },
                    {
                      key: "render",
                      value: function () {
                        var t = "";
                        t =
                          this.state && this.state.active
                            ? (
                                (this.props.className || "") +
                                " " +
                                (this.props.activeClass || "active")
                              ).trim()
                            : this.props.className;
                        var n = a({}, this.props);
                        for (var r in A) n.hasOwnProperty(r) && delete n[r];
                        return (
                          (n.className = t),
                          (n.onClick = this.handleClick),
                          l.createElement(e, n)
                        );
                      },
                    },
                  ]),
                  u
                );
              })(l.Component),
              p = function () {
                var e = this;
                (this.scrollTo = function (t, r) {
                  n.scrollTo(t, a({}, e.state, r));
                }),
                  (this.handleClick = function (t) {
                    e.props.onClick && e.props.onClick(t),
                      t.stopPropagation && t.stopPropagation(),
                      t.preventDefault && t.preventDefault(),
                      e.scrollTo(e.props.to, e.props);
                  }),
                  (this.stateHandler = function () {
                    n.getActiveLink() !== e.props.to &&
                      (null !== e.state &&
                        e.state.active &&
                        e.props.onSetInactive &&
                        e.props.onSetInactive(),
                      e.setState({ active: !1 }));
                  }),
                  (this.spyHandler = function (t) {
                    var a = e.getScrollSpyContainer();
                    if (!f.isMounted() || f.isInitialized()) {
                      var r = e.props.to,
                        o = null,
                        i = 0,
                        s = 0,
                        l = 0;
                      if (a.getBoundingClientRect)
                        l = a.getBoundingClientRect().top;
                      if (!o || e.props.isDynamic) {
                        if (!(o = n.get(r))) return;
                        var u = o.getBoundingClientRect();
                        s = (i = u.top - l + t) + u.height;
                      }
                      var d = t - e.props.offset,
                        A = d >= Math.floor(i) && d < Math.floor(s),
                        p = d < Math.floor(i) || d >= Math.floor(s),
                        h = n.getActiveLink();
                      return p
                        ? (r === h && n.setActiveLink(void 0),
                          e.props.hashSpy &&
                            f.getHash() === r &&
                            f.changeHash(),
                          e.props.spy &&
                            e.state.active &&
                            (e.setState({ active: !1 }),
                            e.props.onSetInactive && e.props.onSetInactive()),
                          c.updateStates())
                        : A && h !== r
                        ? (n.setActiveLink(r),
                          e.props.hashSpy && f.changeHash(r),
                          e.props.spy &&
                            (e.setState({ active: !0 }),
                            e.props.onSetActive && e.props.onSetActive(r)),
                          c.updateStates())
                        : void 0;
                    }
                  });
              };
            return (d.propTypes = A), (d.defaultProps = { offset: 0 }), d;
          },
          Element: function (e) {
            console.warn("Helpers.Element is deprecated since v1.7.0");
            var t = (function (t) {
              function n(e) {
                o(this, n);
                var t = i(
                  this,
                  (n.__proto__ || Object.getPrototypeOf(n)).call(this, e)
                );
                return (t.childBindings = { domNode: null }), t;
              }
              return (
                s(n, t),
                r(n, [
                  {
                    key: "componentDidMount",
                    value: function () {
                      if ("undefined" == typeof window) return !1;
                      this.registerElems(this.props.name);
                    },
                  },
                  {
                    key: "componentDidUpdate",
                    value: function (e) {
                      this.props.name !== e.name &&
                        this.registerElems(this.props.name);
                    },
                  },
                  {
                    key: "componentWillUnmount",
                    value: function () {
                      if ("undefined" == typeof window) return !1;
                      u.unregister(this.props.name);
                    },
                  },
                  {
                    key: "registerElems",
                    value: function (e) {
                      u.register(e, this.childBindings.domNode);
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      return l.createElement(
                        e,
                        a({}, this.props, {
                          parentBindings: this.childBindings,
                        })
                      );
                    },
                  },
                ]),
                n
              );
            })(l.Component);
            return (t.propTypes = { name: d.string, id: d.string }), t;
          },
        };
      e.exports = p;
    },
    "7wkA": function (e, t, n) {
      "use strict";
      n("LagC"),
        n("pS08"),
        n("R48M"),
        Object.defineProperty(t, "__esModule", { value: !0 });
      var a = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var a = t[n];
              (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a);
            }
          }
          return function (t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t;
          };
        })(),
        r = i(n("q1tI")),
        o = i(n("pUFB"));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function l(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      var c = (function (e) {
        function t() {
          return (
            s(this, t),
            l(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            )
          );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          a(t, [
            {
              key: "render",
              value: function () {
                return r.default.createElement(
                  "input",
                  this.props,
                  this.props.children
                );
              },
            },
          ]),
          t
        );
      })(r.default.Component);
      t.default = (0, o.default)(c);
    },
    "8QoP": function (e, t, n) {
      "use strict";
      n("JHok"),
        n("R48M"),
        Object.defineProperty(t, "__esModule", { value: !0 });
      var a = n("QLqi"),
        r = ["mousedown", "mousewheel", "touchmove", "keydown"];
      t.default = {
        subscribe: function (e) {
          return (
            "undefined" != typeof document &&
            r.forEach(function (t) {
              return (0, a.addPassiveEventListener)(document, t, e);
            })
          );
        },
      };
    },
    "9eSz": function (e, t, n) {
      "use strict";
      n("rzGZ"),
        n("Dq+y"),
        n("8npG"),
        n("YbXK"),
        n("eMsz"),
        n("zTTH"),
        n("3nLz");
      var a = n("TqRt");
      (t.__esModule = !0), (t.default = void 0);
      var r,
        o = a(n("PJYZ")),
        i = a(n("VbXa")),
        s = a(n("8OQS")),
        l = a(n("pVnL")),
        c = a(n("q1tI")),
        u = a(n("17x9")),
        d = function (e) {
          var t = (0, l.default)({}, e),
            n = t.resolutions,
            a = t.sizes,
            r = t.critical;
          return (
            n && ((t.fixed = n), delete t.resolutions),
            a && ((t.fluid = a), delete t.sizes),
            r && (t.loading = "eager"),
            t.fluid && (t.fluid = w([].concat(t.fluid))),
            t.fixed && (t.fixed = w([].concat(t.fixed))),
            t
          );
        },
        f = function (e) {
          var t = e.media;
          return !!t && b && !!window.matchMedia(t).matches;
        },
        A = function (e) {
          var t = e.fluid,
            n = e.fixed;
          return p(t || n).src;
        },
        p = function (e) {
          if (
            b &&
            (function (e) {
              return (
                !!e &&
                Array.isArray(e) &&
                e.some(function (e) {
                  return void 0 !== e.media;
                })
              );
            })(e)
          ) {
            var t = e.findIndex(f);
            if (-1 !== t) return e[t];
            var n = e.findIndex(function (e) {
              return void 0 === e.media;
            });
            if (-1 !== n) return e[n];
          }
          return e[0];
        },
        h = Object.create({}),
        g = function (e) {
          var t = d(e),
            n = A(t);
          return h[n] || !1;
        },
        m =
          "undefined" != typeof HTMLImageElement &&
          "loading" in HTMLImageElement.prototype,
        b = "undefined" != typeof window,
        v = b && window.IntersectionObserver,
        y = new WeakMap();
      function E(e) {
        return e.map(function (e) {
          var t = e.src,
            n = e.srcSet,
            a = e.srcSetWebp,
            r = e.media,
            o = e.sizes;
          return c.default.createElement(
            c.default.Fragment,
            { key: t },
            a &&
              c.default.createElement("source", {
                type: "image/webp",
                media: r,
                srcSet: a,
                sizes: o,
              }),
            c.default.createElement("source", { media: r, srcSet: n, sizes: o })
          );
        });
      }
      function w(e) {
        var t = [],
          n = [];
        return (
          e.forEach(function (e) {
            return (e.media ? t : n).push(e);
          }),
          [].concat(t, n)
        );
      }
      function j(e) {
        return e.map(function (e) {
          var t = e.src,
            n = e.media,
            a = e.tracedSVG;
          return c.default.createElement("source", {
            key: t,
            media: n,
            srcSet: a,
          });
        });
      }
      function S(e) {
        return e.map(function (e) {
          var t = e.src,
            n = e.media,
            a = e.base64;
          return c.default.createElement("source", {
            key: t,
            media: n,
            srcSet: a,
          });
        });
      }
      function C(e, t) {
        var n = e.srcSet,
          a = e.srcSetWebp,
          r = e.media,
          o = e.sizes;
        return (
          "<source " +
          (t ? "type='image/webp' " : "") +
          (r ? 'media="' + r + '" ' : "") +
          'srcset="' +
          (t ? a : n) +
          '" ' +
          (o ? 'sizes="' + o + '" ' : "") +
          "/>"
        );
      }
      var O = function (e, t) {
          var n =
            (void 0 === r &&
              "undefined" != typeof window &&
              window.IntersectionObserver &&
              (r = new window.IntersectionObserver(
                function (e) {
                  e.forEach(function (e) {
                    if (y.has(e.target)) {
                      var t = y.get(e.target);
                      (e.isIntersecting || e.intersectionRatio > 0) &&
                        (r.unobserve(e.target), y.delete(e.target), t());
                    }
                  });
                },
                { rootMargin: "200px" }
              )),
            r);
          return (
            n && (n.observe(e), y.set(e, t)),
            function () {
              n.unobserve(e), y.delete(e);
            }
          );
        },
        P = function (e) {
          var t = e.src ? 'src="' + e.src + '" ' : 'src="" ',
            n = e.sizes ? 'sizes="' + e.sizes + '" ' : "",
            a = e.srcSet ? 'srcset="' + e.srcSet + '" ' : "",
            r = e.title ? 'title="' + e.title + '" ' : "",
            o = e.alt ? 'alt="' + e.alt + '" ' : 'alt="" ',
            i = e.width ? 'width="' + e.width + '" ' : "",
            s = e.height ? 'height="' + e.height + '" ' : "",
            l = e.crossOrigin ? 'crossorigin="' + e.crossOrigin + '" ' : "",
            c = e.loading ? 'loading="' + e.loading + '" ' : "",
            u = e.draggable ? 'draggable="' + e.draggable + '" ' : "";
          return (
            "<picture>" +
            e.imageVariants
              .map(function (e) {
                return (e.srcSetWebp ? C(e, !0) : "") + C(e);
              })
              .join("") +
            "<img " +
            c +
            i +
            s +
            n +
            a +
            t +
            o +
            r +
            l +
            u +
            'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'
          );
        },
        x = c.default.forwardRef(function (e, t) {
          var n = e.src,
            a = e.imageVariants,
            r = e.generateSources,
            o = e.spreadProps,
            i = e.ariaHidden,
            s = c.default.createElement(
              k,
              (0, l.default)({ ref: t, src: n }, o, { ariaHidden: i })
            );
          return a.length > 1
            ? c.default.createElement("picture", null, r(a), s)
            : s;
        }),
        k = c.default.forwardRef(function (e, t) {
          var n = e.sizes,
            a = e.srcSet,
            r = e.src,
            o = e.style,
            i = e.onLoad,
            u = e.onError,
            d = e.loading,
            f = e.draggable,
            A = e.ariaHidden,
            p = (0, s.default)(e, [
              "sizes",
              "srcSet",
              "src",
              "style",
              "onLoad",
              "onError",
              "loading",
              "draggable",
              "ariaHidden",
            ]);
          return c.default.createElement(
            "img",
            (0, l.default)(
              { "aria-hidden": A, sizes: n, srcSet: a, src: r },
              p,
              {
                onLoad: i,
                onError: u,
                ref: t,
                loading: d,
                draggable: f,
                style: (0, l.default)(
                  {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  },
                  o
                ),
              }
            )
          );
        });
      k.propTypes = {
        style: u.default.object,
        onError: u.default.func,
        onLoad: u.default.func,
      };
      var B = (function (e) {
        function t(t) {
          var n;
          ((n = e.call(this, t) || this).seenBefore = b && g(t)),
            (n.isCritical = "eager" === t.loading || t.critical),
            (n.addNoScript = !(n.isCritical && !t.fadeIn)),
            (n.useIOSupport = !m && v && !n.isCritical && !n.seenBefore);
          var a = n.isCritical || (b && (m || !n.useIOSupport));
          return (
            (n.state = {
              isVisible: a,
              imgLoaded: !1,
              imgCached: !1,
              fadeIn: !n.seenBefore && t.fadeIn,
            }),
            (n.imageRef = c.default.createRef()),
            (n.placeholderRef = t.placeholderRef || c.default.createRef()),
            (n.handleImageLoaded = n.handleImageLoaded.bind((0, o.default)(n))),
            (n.handleRef = n.handleRef.bind((0, o.default)(n))),
            n
          );
        }
        (0, i.default)(t, e);
        var n = t.prototype;
        return (
          (n.componentDidMount = function () {
            if (
              (this.state.isVisible &&
                "function" == typeof this.props.onStartLoad &&
                this.props.onStartLoad({ wasCached: g(this.props) }),
              this.isCritical)
            ) {
              var e = this.imageRef.current;
              e && e.complete && this.handleImageLoaded();
            }
          }),
          (n.componentWillUnmount = function () {
            this.cleanUpListeners && this.cleanUpListeners();
          }),
          (n.handleRef = function (e) {
            var t = this;
            this.useIOSupport &&
              e &&
              (this.cleanUpListeners = O(e, function () {
                var e = g(t.props);
                t.state.isVisible ||
                  "function" != typeof t.props.onStartLoad ||
                  t.props.onStartLoad({ wasCached: e }),
                  t.setState({ isVisible: !0 }, function () {
                    t.setState({
                      imgLoaded: e,
                      imgCached: !(
                        !t.imageRef.current || !t.imageRef.current.currentSrc
                      ),
                    });
                  });
              }));
          }),
          (n.handleImageLoaded = function () {
            var e, t, n;
            (e = this.props),
              (t = d(e)),
              (n = A(t)),
              (h[n] = !0),
              this.setState({ imgLoaded: !0 }),
              this.props.onLoad && this.props.onLoad();
          }),
          (n.render = function () {
            var e = d(this.props),
              t = e.title,
              n = e.alt,
              a = e.className,
              r = e.style,
              o = void 0 === r ? {} : r,
              i = e.imgStyle,
              s = void 0 === i ? {} : i,
              u = e.placeholderStyle,
              f = void 0 === u ? {} : u,
              A = e.placeholderClassName,
              h = e.fluid,
              g = e.fixed,
              m = e.backgroundColor,
              b = e.durationFadeIn,
              v = e.Tag,
              y = e.itemProp,
              w = e.loading,
              C = e.draggable,
              O = !1 === this.state.fadeIn || this.state.imgLoaded,
              B = !0 === this.state.fadeIn && !this.state.imgCached,
              Q = (0, l.default)(
                {
                  opacity: O ? 1 : 0,
                  transition: B ? "opacity " + b + "ms" : "none",
                },
                s
              ),
              N = "boolean" == typeof m ? "lightgray" : m,
              M = { transitionDelay: b + "ms" },
              T = (0, l.default)(
                { opacity: this.state.imgLoaded ? 0 : 1 },
                B && M,
                s,
                f
              ),
              R = {
                title: t,
                alt: this.state.isVisible ? "" : n,
                style: T,
                className: A,
                itemProp: y,
              };
            if (h) {
              var z = h,
                I = p(h);
              return c.default.createElement(
                v,
                {
                  className: (a || "") + " gatsby-image-wrapper",
                  style: (0, l.default)(
                    {
                      position: "relative",
                      overflow: "hidden",
                      maxWidth: I.maxWidth ? I.maxWidth + "px" : null,
                      maxHeight: I.maxHeight ? I.maxHeight + "px" : null,
                    },
                    o
                  ),
                  ref: this.handleRef,
                  key: "fluid-" + JSON.stringify(I.srcSet),
                },
                c.default.createElement(v, {
                  "aria-hidden": !0,
                  style: {
                    width: "100%",
                    paddingBottom: 100 / I.aspectRatio + "%",
                  },
                }),
                N &&
                  c.default.createElement(v, {
                    "aria-hidden": !0,
                    title: t,
                    style: (0, l.default)(
                      {
                        backgroundColor: N,
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        opacity: this.state.imgLoaded ? 0 : 1,
                        right: 0,
                        left: 0,
                      },
                      B && M
                    ),
                  }),
                I.base64 &&
                  c.default.createElement(x, {
                    ariaHidden: !0,
                    ref: this.placeholderRef,
                    src: I.base64,
                    spreadProps: R,
                    imageVariants: z,
                    generateSources: S,
                  }),
                I.tracedSVG &&
                  c.default.createElement(x, {
                    ariaHidden: !0,
                    ref: this.placeholderRef,
                    src: I.tracedSVG,
                    spreadProps: R,
                    imageVariants: z,
                    generateSources: j,
                  }),
                this.state.isVisible &&
                  c.default.createElement(
                    "picture",
                    null,
                    E(z),
                    c.default.createElement(k, {
                      alt: n,
                      title: t,
                      sizes: I.sizes,
                      src: I.src,
                      crossOrigin: this.props.crossOrigin,
                      srcSet: I.srcSet,
                      style: Q,
                      ref: this.imageRef,
                      onLoad: this.handleImageLoaded,
                      onError: this.props.onError,
                      itemProp: y,
                      loading: w,
                      draggable: C,
                    })
                  ),
                this.addNoScript &&
                  c.default.createElement("noscript", {
                    dangerouslySetInnerHTML: {
                      __html: P(
                        (0, l.default)({ alt: n, title: t, loading: w }, I, {
                          imageVariants: z,
                        })
                      ),
                    },
                  })
              );
            }
            if (g) {
              var D = g,
                F = p(g),
                H = (0, l.default)(
                  {
                    position: "relative",
                    overflow: "hidden",
                    display: "inline-block",
                    width: F.width,
                    height: F.height,
                  },
                  o
                );
              return (
                "inherit" === o.display && delete H.display,
                c.default.createElement(
                  v,
                  {
                    className: (a || "") + " gatsby-image-wrapper",
                    style: H,
                    ref: this.handleRef,
                    key: "fixed-" + JSON.stringify(F.srcSet),
                  },
                  N &&
                    c.default.createElement(v, {
                      "aria-hidden": !0,
                      title: t,
                      style: (0, l.default)(
                        {
                          backgroundColor: N,
                          width: F.width,
                          opacity: this.state.imgLoaded ? 0 : 1,
                          height: F.height,
                        },
                        B && M
                      ),
                    }),
                  F.base64 &&
                    c.default.createElement(x, {
                      ariaHidden: !0,
                      ref: this.placeholderRef,
                      src: F.base64,
                      spreadProps: R,
                      imageVariants: D,
                      generateSources: S,
                    }),
                  F.tracedSVG &&
                    c.default.createElement(x, {
                      ariaHidden: !0,
                      ref: this.placeholderRef,
                      src: F.tracedSVG,
                      spreadProps: R,
                      imageVariants: D,
                      generateSources: j,
                    }),
                  this.state.isVisible &&
                    c.default.createElement(
                      "picture",
                      null,
                      E(D),
                      c.default.createElement(k, {
                        alt: n,
                        title: t,
                        width: F.width,
                        height: F.height,
                        sizes: F.sizes,
                        src: F.src,
                        crossOrigin: this.props.crossOrigin,
                        srcSet: F.srcSet,
                        style: Q,
                        ref: this.imageRef,
                        onLoad: this.handleImageLoaded,
                        onError: this.props.onError,
                        itemProp: y,
                        loading: w,
                        draggable: C,
                      })
                    ),
                  this.addNoScript &&
                    c.default.createElement("noscript", {
                      dangerouslySetInnerHTML: {
                        __html: P(
                          (0, l.default)({ alt: n, title: t, loading: w }, F, {
                            imageVariants: D,
                          })
                        ),
                      },
                    })
                )
              );
            }
            return null;
          }),
          t
        );
      })(c.default.Component);
      B.defaultProps = {
        fadeIn: !0,
        durationFadeIn: 500,
        alt: "",
        Tag: "div",
        loading: "lazy",
      };
      var Q = u.default.shape({
          width: u.default.number.isRequired,
          height: u.default.number.isRequired,
          src: u.default.string.isRequired,
          srcSet: u.default.string.isRequired,
          base64: u.default.string,
          tracedSVG: u.default.string,
          srcWebp: u.default.string,
          srcSetWebp: u.default.string,
          media: u.default.string,
        }),
        N = u.default.shape({
          aspectRatio: u.default.number.isRequired,
          src: u.default.string.isRequired,
          srcSet: u.default.string.isRequired,
          sizes: u.default.string.isRequired,
          base64: u.default.string,
          tracedSVG: u.default.string,
          srcWebp: u.default.string,
          srcSetWebp: u.default.string,
          media: u.default.string,
          maxWidth: u.default.number,
          maxHeight: u.default.number,
        });
      B.propTypes = {
        resolutions: Q,
        sizes: N,
        fixed: u.default.oneOfType([Q, u.default.arrayOf(Q)]),
        fluid: u.default.oneOfType([N, u.default.arrayOf(N)]),
        fadeIn: u.default.bool,
        durationFadeIn: u.default.number,
        title: u.default.string,
        alt: u.default.string,
        className: u.default.oneOfType([u.default.string, u.default.object]),
        critical: u.default.bool,
        crossOrigin: u.default.oneOfType([u.default.string, u.default.bool]),
        style: u.default.object,
        imgStyle: u.default.object,
        placeholderStyle: u.default.object,
        placeholderClassName: u.default.string,
        backgroundColor: u.default.oneOfType([
          u.default.string,
          u.default.bool,
        ]),
        onLoad: u.default.func,
        onError: u.default.func,
        onStartLoad: u.default.func,
        Tag: u.default.string,
        itemProp: u.default.string,
        loading: u.default.oneOf(["auto", "lazy", "eager"]),
        draggable: u.default.bool,
      };
      var M = B;
      t.default = M;
    },
    B5QA: function (e) {
      e.exports = JSON.parse(
        '{"data":{"images":{"edges":[{"node":{"relativePath":"favicon.png","name":"favicon","childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACTElEQVQ4y4VUMWsUQRTe2z1C1MJCxMpKsLCIyczdimBtL1gEe1uxE/0NiiiIwUoCIrlZw+X0EhOjqIWVhWAVUH+AhWVE77LP7715czsbk72Bj30z+/bb7837ZpKkYVDRScrC+NgZzE2m8WXE34GTPs+0kmlDCJwNcYsKKx+VzizSqy6B5E0gC3kNyiwnBrK0Wjd3aNAh6gPO5LqWNpP1amRZpPiJKBuyOruiP07JLUzyD1BmKrLCtJXoCLBBGzkTjQBWZ/ar36fKyJ6FUVZkp4GvtJ4zya4+n6m6jFagrjfv0e/ox9jQQMbPsrCBLIfKn1Kms3/oBZQxnJ1XwhnOFWJ+Ou10RMadTLXcK8CI1jrczb8gGdM6E5u7U5zRqgc+vilEq7JXfs8KW+q8DzwAloDHDNjoIZ7LQPc/Mry8pyWOsA5lZiwIpNzhTezjawXP31/0P3ZmLomIjqG0LXn5EknBHkONPSGXP5Yt8NiV3MJ+Rnyq1nV09Swmn4Bt4C3wTsHxR08kJZcCtg9sBCFDYFZFZbWmHDaQeJUGomRPy99j+2B9Kdr3rMaldkmpQkarOXd7Bu92pDRnvHUGcuxuRWTeGWw/HNmEls+pudWgj05wUlvVXRczF+a3nl+Ua66pD1uhoXKRbM4d5CMbH71ZzL+JXdaE7BdwSfOy+DAcel2FZCW8IaX6cneAM6qsTb3z1dnvLTQ0QC9KJB4FftD2BdJuH48vjLLfndpMf6arG/k2fRDDPo1uomxyV04jC/Kj+AtwP5qnkxKfN5P9A7XZL07/0hZDAAAAAElFTkSuQmCC","aspectRatio":1,"src":"/static/4ccd13523eddd3694feac28b19d11786/460e9/favicon.png","srcSet":"/static/4ccd13523eddd3694feac28b19d11786/460e9/favicon.png 192w","sizes":"(max-width: 192px) 100vw, 192px"}}}},{"node":{"relativePath":"plating-logo.png","name":"plating-logo","childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAAB9klEQVQ4y2P4TwFgwCnz7+//v3/+//0LQqRo/vf/3z8MsX/EaQar+33v0td1E78sbft+aN2/Lx+ghuLTDNb279vnzwvr32SavkkzfJ2s+ybb4l2F56+7F6F+wW/zp6n5ryIV3tcGfJpd8WlO5ac5Va8i5N43hPz79RPNfgaUEAK79k260etU/Q+dCUA3f90w9fO82tcJmm8yzX7dOY9mOZJmcKj+unnmTZb560Stz3Oqft0FenvSp5llQC7QF3g1gz389+ObtwV2r5N03tUFfppX82la0ccJWa+ilN7VBvz79QMt2BnQ4/b//+97lryOU3+bZ/O+MRTo+Pd1gW/ybH7dOE1MgIEM/nF616e51Z8XNX5dM+Hn6V1/Xj7EGtUMOJMH0BJk1X8h3H8E4vnnpcOQVPHvy0dgmP1+fBOLWRih/efbvhU/jm3+unHa92Obvh9c/XXDlC+ren+c3P5104yf5/Z+P7L++6E12OP538/vn5e2fFnR+WVJ69c1/SAPb5r2beeCLyu6vm2Z9WVZ+9eNU4Hk/z+/sWr+9mVl1+9HN/5+fP337bNft8/9fff879vnwNACivx5cuvb7sVf1vT9+/ENm+ZfP37dOos194Bkf3z7fnDNr2vH/757SSg///sHDVuIWRjhjDO0cYK/6AHOQEkxBACoe1KgBmEsPAAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/2316e3bfb56e8fc2b6f91fa50e3175e2/2a4de/plating-logo.png","srcSet":"/static/2316e3bfb56e8fc2b6f91fa50e3175e2/8080f/plating-logo.png 342w,\\n/static/2316e3bfb56e8fc2b6f91fa50e3175e2/2a4de/plating-logo.png 600w","sizes":"(max-width: 600px) 100vw, 600px"}}}},{"node":{"relativePath":"profile.jpg","name":"profile","childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQFAgP/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAG6H2yzpKN7CC0H/8QAHBAAAgIDAQEAAAAAAAAAAAAAAQIAAwQSEyEy/9oACAEBAAEFAujGZOxGgigqtlhadHWZDFUt+qPav//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABoQAAMBAAMAAAAAAAAAAAAAAAABESEiMUH/2gAIAQEABj8CyFqh0z2Gs4twTQxYf//EABoQAQACAwEAAAAAAAAAAAAAAAEAESExcWH/2gAIAQEAAT8hBaYyesT0eERYFMXB8nIAocNBVtMw6ytgO5//2gAMAwEAAgADAAAAEMMPPP/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8QH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8QH//EAB8QAQADAQABBQEAAAAAAAAAAAEAESExkUFhcYHB8f/aAAgBAQABPxC31O29r4lZBVll3qP5AOpdtqPETL2je+ZVAUpfh9T1tZi7FN4boj/JpHbkF3QgU92f/9k=","aspectRatio":1,"src":"/static/c80f7757ad076ae146f5038df44646aa/a72b0/profile.jpg","srcSet":"/static/c80f7757ad076ae146f5038df44646aa/52316/profile.jpg 342w,\\n/static/c80f7757ad076ae146f5038df44646aa/46afd/profile.jpg 683w,\\n/static/c80f7757ad076ae146f5038df44646aa/a72b0/profile.jpg 698w","sizes":"(max-width: 698px) 100vw, 698px"}}}},{"node":{"relativePath":"plating-admin.png","name":"plating-admin","childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABCbAAAQmwF0iZxLAAADW0lEQVQ4y32U2WsbVxTG9QcZCiEPLQ19CIU8l0Jq04a0SelDSyElfmgdCBTUlCw0dpCLbWE7TYzr3bG8SJYXSZYsydqsxRqNLFmzaDZtdv6Dr+feiRWVQh8Od+Yu3/nOPb8Zh6zqkBSNR+9zN1QDkt6wo26+m//3vstzbHT0vvxHrG5ArlRgRHwwDv1QRMEWlev/L9grVtctHqpmQqHQVJqrVqBXytAliTu21+09vWJcsDeTQo42Nr2Ynv4LW95teDwbmJ1bgNe/h8WVNYQiMfh8fqy+8cCzvoH5hSUUhTIX7jqUehyy8SiRxs5eAGE6HAgeYNu/i2g8gWAojPhRCql0Frv7QRyEo9gPhFCu1N6XrrCSu6WaPJNuNlGtKcgVihBps1CuIH8ioFSu4oTciKdnEMRTvsewWrx8q9mxTdH1UMl1qHUdmUyWh0LvNbp0lRLkslkIpRJ/Zvd5RvP7wTAlkiCzhpFIgRKvLa/yRqk052APmtHAqnsY3pkxaJpOgjKqkoyp335G1PuGkDFQoYaIRQGvfh+CcJymw6yaFtLxGF4++gUamWJuHbKsQtJa8M39jfCWD2eKyUUPk8f49f49jDx9jsevx7BzFEKhpGBldhaxYxGyrEEjNn1bXsw8e0j3nOLGqCkmTotxpF5/g5PNIcjiEWpSHU7X97j9w4f44s5VPJl2olZTMTAcwCePQ+ifzOCwpCMaieCDKx/h2sfX8emNz5DKFEhQayM8/xCViT5ok31QD904I9Z+vH8TTueXeD48iKkZF4KJIkZfuuHybGFyYQFzwSJGXozi84FbcE1MYeDWXSyvrMNhNFpwu6cwNvQdvK4HWJxbxPn5BRaXtvHV1/346d5TJJIi8Sbij2fD+PaRC4POP5FMF7Dm2cS4ewJZsYzxcTehFSFB1nrDIhSqdveoc812h/CowR9Iwb+fQb4oQlVkRFIi1iMiwoKFDiVtNtt03/TlEGoGkWCSOQdjqNE8R6vzlgfjkInqZoMLl0QRoYMIQR5GLpdHp91Gw7JsdqkJVuucc2g17dFhNtrgQU4vAWXwpojJaCyBWDxJkAvIZPPIHOepm0lay3HQFUKFnelqUDhs9U53oUEZm+0LQsLibtnXc/nDYMHmGR5sD9vLzvRq/AP+V0PZsLZ71wAAAABJRU5ErkJggg==","aspectRatio":1.2527472527472527,"src":"/static/8acf63b6e56f84e7d3032666ae7f072d/4ff95/plating-admin.png","srcSet":"/static/8acf63b6e56f84e7d3032666ae7f072d/8080f/plating-admin.png 342w,\\n/static/8acf63b6e56f84e7d3032666ae7f072d/3ff62/plating-admin.png 683w,\\n/static/8acf63b6e56f84e7d3032666ae7f072d/4ff95/plating-admin.png 1050w","sizes":"(max-width: 1050px) 100vw, 1050px"}}}},{"node":{"relativePath":"project.jpg","name":"project","childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAEGBP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAd6mmUxLh//EABsQAAEEAwAAAAAAAAAAAAAAAAABAgMTEBES/9oACAEBAAEFArIyyM7ZhFNn/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGBAAAwEBAAAAAAAAAAAAAAAAABAyATH/2gAIAQEABj8Coo6sX//EABoQAAIDAQEAAAAAAAAAAAAAAAABESExUWH/2gAIAQEAAT8hfIXYPOS7sZNhtOn/2gAMAwEAAgADAAAAEKMP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAHRAAAgICAwEAAAAAAAAAAAAAAAERMSFBUYGh0f/aAAgBAQABPxDbT2NaKzfAoTicGyp9Ldr6SWVn/9k=","aspectRatio":1.78125,"src":"/static/e7d8c1960c437bd82682356bcb4160d4/1abfa/project.jpg","srcSet":"/static/e7d8c1960c437bd82682356bcb4160d4/52316/project.jpg 342w,\\n/static/e7d8c1960c437bd82682356bcb4160d4/46afd/project.jpg 683w,\\n/static/e7d8c1960c437bd82682356bcb4160d4/1abfa/project.jpg 1366w,\\n/static/e7d8c1960c437bd82682356bcb4160d4/f6cee/project.jpg 2049w,\\n/static/e7d8c1960c437bd82682356bcb4160d4/dafe5/project.jpg 2732w,\\n/static/e7d8c1960c437bd82682356bcb4160d4/89d2d/project.jpg 3520w","sizes":"(max-width: 1366px) 100vw, 1366px"}}}},{"node":{"relativePath":"plating.png","name":"plating","childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAADuklEQVQ4y2WSfUzUdRzH75E7jmdQAkTAhMB4VO4COY54ODg8wOPuOGGAIE8JDMJgKlZ4jYeCYqggIgli0rIilytJWTZqseUfJbQF//iPrYf1tJZtweCAVz+g1lyf7b3v94/vXt/35/N5i1hbgZ8fgGMJx9o6q6uOTf21uIjD4eB/tb7+74W1tbXN28rUVVYm+lj95TtEhbYi8gzZmA9ayDcXcri8hmvvfcD3vz3kzyUHDxeX+X1phXv3vmZ2bh7he5YFzg8//cr9Bz/SZbdzrfM5KgtM3J66g0goHpWSx/yf4NzQOH8sr/PxFzNcvf0hg5fH+WT67hZQ0JdzC9iKKnB3cUcdsh2VVEpWVh4iuVyJTCZH7qREoXDFzdUbdy9/ovelMzE5TddAD22DvfQOjzFzd24TuFEvvtS9aUAmc0YsUeLu6oVc6oZILJY94lAsVeHss4PH1Xrya5voGxxj+O2PGLwywfTMV5uw+fvfEhAYJrx3Qi53RS5zwdPdD1cXH0QKhbNg1YDJZEanS0WvP4A+M480YzGtrwxw4/pNbt28w62pT5md/YaF+QXUGp0AEwsdqZBInFA5e+C7bScKJ1dEMpkTVouV1NRUEhISSdKmUlJaRY61hqrKWjrqirlw4ijjHcd498rr9NuPE+AbiF6Yl0Tu9k9nElSqbcIp3XJYX19PaUkpZWXl2GzF1DY0k1tUR3JSJj3VuZw7eZSqQhs7Q0MpyU2g297OyNibVFmfpvXZCirKS0lWa/DzDUYkFRaSkpFJeFQsUXs1RO9NINdWRnrBM6Qb8+g6Wc75M9281m2nvraEyiN5XGptormhgcRIf9K1sVTmG+hvLEcTb0DkqVRwPSecz8wRDCYHCjNwwS0kkiCdmQyrlfbnyxi5eJ63hs8yfvEMo8N9jLx8HLstmzrNHmyaCEzJMWQnRmLUH0TkJOQnI8gL4y4ftP4eyITYeEfEE5pWgO5AHkOna5i8IDiszOfSiVre6W1jdLCd/s4mLrcd4f0eK5+PVTDZZ2Dk1MayhG39FxsxUpUn3qGx+O3L4NSxRmZGX6Wj2oIpLoQWqx5zjp6IqCCiNcEkZceQlRlL42E1b3RZuHG2DJFEIkWyAZJIkIoFKd1xCwhFGRyFtaSKthor2pgdpGjC0CeEk5YQRlJ8OFZjMmZzGjlGHUlPxdH+QgsD7S3CDD19ttwJsA1JheRL5UK4twfhsWc/2pT9WDLiyFDvQh8fiCV5N4e0u6nLiWWos5nT1QVYUjSYDBoOGZ/kb20eTyVWwvrdAAAAAElFTkSuQmCC","aspectRatio":1.4309623430962344,"src":"/static/b38a3de39b7240bb24917940751323a8/a9ac2/plating.png","srcSet":"/static/b38a3de39b7240bb24917940751323a8/8080f/plating.png 342w,\\n/static/b38a3de39b7240bb24917940751323a8/3ff62/plating.png 683w,\\n/static/b38a3de39b7240bb24917940751323a8/a9ac2/plating.png 945w","sizes":"(max-width: 945px) 100vw, 945px"}}}},{"node":{"relativePath":"index.js","name":"index","childImageSharp":null}},{"node":{"relativePath":"404.js","name":"404","childImageSharp":null}}]}}}'
      );
    },
    "Dy/p": function (e, t, n) {
      "use strict";
      n("n7j8"),
        n("R48M"),
        Object.defineProperty(t, "__esModule", { value: !0 });
      n("QLqi");
      var a,
        r = n("xFC4"),
        o = (a = r) && a.__esModule ? a : { default: a };
      var i = {
        mountFlag: !1,
        initialized: !1,
        scroller: null,
        containers: {},
        mount: function (e) {
          (this.scroller = e),
            (this.handleHashChange = this.handleHashChange.bind(this)),
            window.addEventListener("hashchange", this.handleHashChange),
            this.initStateFromHash(),
            (this.mountFlag = !0);
        },
        mapContainer: function (e, t) {
          this.containers[e] = t;
        },
        isMounted: function () {
          return this.mountFlag;
        },
        isInitialized: function () {
          return this.initialized;
        },
        initStateFromHash: function () {
          var e = this,
            t = this.getHash();
          t
            ? window.setTimeout(function () {
                e.scrollTo(t, !0), (e.initialized = !0);
              }, 10)
            : (this.initialized = !0);
        },
        scrollTo: function (e, t) {
          var n = this.scroller;
          if (n.get(e) && (t || e !== n.getActiveLink())) {
            var a = this.containers[e] || document;
            n.scrollTo(e, { container: a });
          }
        },
        getHash: function () {
          return o.default.getHash();
        },
        changeHash: function (e) {
          this.isInitialized() &&
            o.default.getHash() !== e &&
            o.default.pushHash(e);
        },
        handleHashChange: function () {
          this.scrollTo(this.getHash());
        },
        unmount: function () {
          (this.scroller = null),
            (this.containers = null),
            window.removeEventListener("hashchange", this.handleHashChange);
        },
      };
      t.default = i;
    },
    HXzo: function (e, t, n) {
      "use strict";
      n("EU/P")("trim", function (e) {
        return function () {
          return e(this, 3);
        };
      });
    },
    NEP4: function (e, t, n) {
      "use strict";
      n("n7j8"),
        n("E5k/"),
        n("R48M"),
        Object.defineProperty(t, "__esModule", { value: !0 });
      var a =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          },
        r = (s(n("xFC4")), s(n("/PZL"))),
        o = s(n("8QoP")),
        i = s(n("QQPg"));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var l = function (e) {
          return r.default[e.smooth] || r.default.defaultEasing;
        },
        c =
          (function () {
            if ("undefined" != typeof window)
              return (
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame
              );
          })() ||
          function (e, t, n) {
            window.setTimeout(e, n || 1e3 / 60, new Date().getTime());
          },
        u = function (e) {
          var t = e.data.containerElement;
          if (t && t !== document && t !== document.body) return t.scrollTop;
          var n = void 0 !== window.pageXOffset,
            a = "CSS1Compat" === (document.compatMode || "");
          return n
            ? window.pageYOffset
            : a
            ? document.documentElement.scrollTop
            : document.body.scrollTop;
        },
        d = function e(t, n, a) {
          var r = n.data;
          if (n.ignoreCancelEvents || !r.cancel)
            if (
              ((r.deltaTop = Math.round(r.targetPositionY - r.startPositionY)),
              null === r.start && (r.start = a),
              (r.progress = a - r.start),
              (r.percent =
                r.progress >= r.duration ? 1 : t(r.progress / r.duration)),
              (r.currentPositionY =
                r.startPositionY + Math.ceil(r.deltaTop * r.percent)),
              r.containerElement &&
              r.containerElement !== document &&
              r.containerElement !== document.body
                ? (r.containerElement.scrollTop = r.currentPositionY)
                : window.scrollTo(0, r.currentPositionY),
              r.percent < 1)
            ) {
              var o = e.bind(null, t, n);
              c.call(window, o);
            } else
              i.default.registered.end &&
                i.default.registered.end(r.to, r.target, r.currentPositionY);
          else
            i.default.registered.end &&
              i.default.registered.end(r.to, r.target, r.currentPositionY);
        },
        f = function (e) {
          e.data.containerElement = e
            ? e.containerId
              ? document.getElementById(e.containerId)
              : e.container && e.container.nodeType
              ? e.container
              : document
            : null;
        },
        A = function (e, t, n, a) {
          if (
            ((t.data = t.data || {
              currentPositionY: 0,
              startPositionY: 0,
              targetPositionY: 0,
              progress: 0,
              duration: 0,
              cancel: !1,
              target: null,
              containerElement: null,
              to: null,
              start: null,
              deltaTop: null,
              percent: null,
              delayTimeout: null,
            }),
            window.clearTimeout(t.data.delayTimeout),
            o.default.subscribe(function () {
              t.data.cancel = !0;
            }),
            f(t),
            (t.data.start = null),
            (t.data.cancel = !1),
            (t.data.startPositionY = u(t)),
            (t.data.targetPositionY = t.absolute
              ? e
              : e + t.data.startPositionY),
            t.data.startPositionY !== t.data.targetPositionY)
          ) {
            var r;
            (t.data.deltaTop = Math.round(
              t.data.targetPositionY - t.data.startPositionY
            )),
              (t.data.duration = (
                "function" == typeof (r = t.duration)
                  ? r
                  : function () {
                      return r;
                    }
              )(t.data.deltaTop)),
              (t.data.duration = isNaN(parseFloat(t.data.duration))
                ? 1e3
                : parseFloat(t.data.duration)),
              (t.data.to = n),
              (t.data.target = a);
            var s = l(t),
              A = d.bind(null, s, t);
            t && t.delay > 0
              ? (t.data.delayTimeout = window.setTimeout(function () {
                  i.default.registered.begin &&
                    i.default.registered.begin(t.data.to, t.data.target),
                    c.call(window, A);
                }, t.delay))
              : (i.default.registered.begin &&
                  i.default.registered.begin(t.data.to, t.data.target),
                c.call(window, A));
          } else
            i.default.registered.end &&
              i.default.registered.end(
                t.data.to,
                t.data.target,
                t.data.currentPositionY
              );
        },
        p = function (e) {
          return (
            ((e = a({}, e)).data = e.data || {
              currentPositionY: 0,
              startPositionY: 0,
              targetPositionY: 0,
              progress: 0,
              duration: 0,
              cancel: !1,
              target: null,
              containerElement: null,
              to: null,
              start: null,
              deltaTop: null,
              percent: null,
              delayTimeout: null,
            }),
            (e.absolute = !0),
            e
          );
        };
      t.default = {
        animateTopScroll: A,
        getAnimationType: l,
        scrollToTop: function (e) {
          A(0, p(e));
        },
        scrollToBottom: function (e) {
          (e = p(e)),
            f(e),
            A(
              (function (e) {
                var t = e.data.containerElement;
                if (t && t !== document && t !== document.body)
                  return t.scrollHeight - t.offsetHeight;
                var n = document.body,
                  a = document.documentElement;
                return Math.max(
                  n.scrollHeight,
                  n.offsetHeight,
                  a.clientHeight,
                  a.scrollHeight,
                  a.offsetHeight
                );
              })(e),
              e
            );
        },
        scrollTo: function (e, t) {
          A(e, p(t));
        },
        scrollMore: function (e, t) {
          (t = p(t)), f(t), A(u(t) + e, t);
        },
      };
    },
    PGca: function (e, t, n) {
      "use strict";
      n("LagC"),
        n("pS08"),
        n("R48M"),
        Object.defineProperty(t, "__esModule", { value: !0 });
      var a = o(n("q1tI")),
        r = o(n("pUFB"));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function s(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      var l = (function (e) {
        function t() {
          var e, n, r;
          i(this, t);
          for (var o = arguments.length, l = Array(o), c = 0; c < o; c++)
            l[c] = arguments[c];
          return (
            (n = r =
              s(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                  e,
                  [this].concat(l)
                )
              )),
            (r.render = function () {
              return a.default.createElement("a", r.props, r.props.children);
            }),
            s(r, n)
          );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          t
        );
      })(a.default.Component);
      t.default = (0, r.default)(l);
    },
    QLqi: function (e, t, n) {
      "use strict";
      n("R48M"), Object.defineProperty(t, "__esModule", { value: !0 });
      (t.addPassiveEventListener = function (e, t, n) {
        var a = (function () {
          var e = !1;
          try {
            var t = Object.defineProperty({}, "passive", {
              get: function () {
                e = !0;
              },
            });
            window.addEventListener("test", null, t);
          } catch (n) {}
          return e;
        })();
        e.addEventListener(t, n, !!a && { passive: !0 });
      }),
        (t.removePassiveEventListener = function (e, t, n) {
          e.removeEventListener(t, n);
        });
    },
    QQPg: function (e, t, n) {
      "use strict";
      n("R48M"), Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        registered: {},
        scrollEvent: {
          register: function (e, t) {
            a.registered[e] = t;
          },
          remove: function (e) {
            a.registered[e] = null;
          },
        },
      };
      t.default = a;
    },
    RXBc: function (e, t, n) {
      "use strict";
      n.r(t);
      n("q4sD"),
        n("J9yo"),
        n("pJf4"),
        n("q8oJ"),
        n("8npG"),
        n("YbXK"),
        n("cFtU"),
        n("rzGZ"),
        n("m210"),
        n("4DPX"),
        n("E5k/");
      var a = n("q1tI"),
        r = n.n(a),
        o = n("sOrj"),
        i = n("/eHF"),
        s = n.n(i),
        l = n("7vrA"),
        c = (n("JHok"), n("wx14")),
        u = n("zLVn"),
        d = n("TSYQ"),
        f = n.n(d),
        A = n("vUet"),
        p = ["xl", "lg", "md", "sm", "xs"],
        h = r.a.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            a = e.className,
            o = e.noGutters,
            i = e.as,
            s = void 0 === i ? "div" : i,
            l = Object(u.a)(e, ["bsPrefix", "className", "noGutters", "as"]),
            d = Object(A.a)(n, "row"),
            h = d + "-cols",
            g = [];
          return (
            p.forEach(function (e) {
              var t,
                n = l[e];
              delete l[e];
              var a = "xs" !== e ? "-" + e : "";
              null != (t = null != n && "object" == typeof n ? n.cols : n) &&
                g.push("" + h + a + "-" + t);
            }),
            r.a.createElement(
              s,
              Object(c.a)({ ref: t }, l, {
                className: f.a.apply(
                  void 0,
                  [a, d, o && "no-gutters"].concat(g)
                ),
              })
            )
          );
        });
      (h.displayName = "Row"), (h.defaultProps = { noGutters: !1 });
      var g = h,
        m = ["xl", "lg", "md", "sm", "xs"],
        b = r.a.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            a = e.className,
            o = e.as,
            i = void 0 === o ? "div" : o,
            s = Object(u.a)(e, ["bsPrefix", "className", "as"]),
            l = Object(A.a)(n, "col"),
            d = [],
            p = [];
          return (
            m.forEach(function (e) {
              var t,
                n,
                a,
                r = s[e];
              if ((delete s[e], null != r && "object" == typeof r)) {
                var o = r.span;
                (t = void 0 === o || o), (n = r.offset), (a = r.order);
              } else t = r;
              var i = "xs" !== e ? "-" + e : "";
              null != t && d.push(!0 === t ? "" + l + i : "" + l + i + "-" + t),
                null != a && p.push("order" + i + "-" + a),
                null != n && p.push("offset" + i + "-" + n);
            }),
            d.length || d.push(l),
            r.a.createElement(
              i,
              Object(c.a)({}, s, {
                ref: t,
                className: f.a.apply(void 0, [a].concat(d, p)),
              })
            )
          );
        });
      b.displayName = "Col";
      var v = b,
        y = function (e) {
          var t = e.title;
          return r.a.createElement(
            s.a,
            { bottom: !0, duration: 1e3, delay: 300, distance: "0px" },
            r.a.createElement("h2", { className: "section-title" }, t)
          );
        },
        E = (n("3nLz"), n("gu/5"), n("eoYm"), n("v9g0"), n("otSO")),
        w = n("Wbzz"),
        j = n("9eSz"),
        S = n.n(j),
        C = function (e) {
          var t = e.filename,
            n = e.alt;
          return r.a.createElement(w.StaticQuery, {
            query: "1882149949",
            render: function (e) {
              var a = e.images.edges.find(function (e) {
                return e.node.relativePath.includes(t);
              });
              if (!a) return null;
              var o = a.node.childImageSharp.fixed;
              return r.a.createElement(S.a, {
                className: "circle shadow-lg",
                alt: n,
                fixed: o,
              });
            },
            data: E,
          });
        },
        O = r.a.createContext(),
        P = O.Provider,
        x = (O.Consumer, O),
        k = function () {
          var e = Object(a.useContext)(x).about,
            t = e.img,
            n = e.paragraphOne,
            o = e.paragraphTwo,
            i = e.paragraphThree,
            c = e.resume,
            u = Object(a.useState)(!1),
            d = u[0],
            f = u[1],
            A = Object(a.useState)(!1),
            p = A[0],
            h = A[1];
          return (
            Object(a.useEffect)(function () {
              window.innerWidth > 769 ? (f(!0), h(!1)) : (h(!0), f(!1));
            }, []),
            r.a.createElement(
              "section",
              { id: "about" },
              r.a.createElement(
                l.a,
                null,
                r.a.createElement(y, { title: "About Me" }),
                r.a.createElement(
                  g,
                  { className: "about-wrapper" },
                  r.a.createElement(
                    v,
                    { md: 6, sm: 12 },
                    r.a.createElement(
                      s.a,
                      {
                        bottom: !0,
                        duration: 1e3,
                        delay: 600,
                        distance: "30px",
                      },
                      r.a.createElement(
                        "div",
                        { className: "about-wrapper__image" },
                        r.a.createElement(C, {
                          alt: "profile picture",
                          filename: t,
                        })
                      )
                    )
                  ),
                  r.a.createElement(
                    v,
                    { md: 6, sm: 12 },
                    r.a.createElement(
                      s.a,
                      {
                        left: d,
                        bottom: p,
                        duration: 1e3,
                        delay: 1e3,
                        distance: "30px",
                      },
                      r.a.createElement(
                        "div",
                        { className: "about-wrapper__info" },
                        r.a.createElement(
                          "p",
                          { className: "about-wrapper__info-text" },
                          n ||
                            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae."
                        ),
                        r.a.createElement(
                          "p",
                          { className: "about-wrapper__info-text" },
                          o ||
                            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae."
                        ),
                        r.a.createElement(
                          "p",
                          { className: "about-wrapper__info-text" },
                          i ||
                            "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
                        ),
                        c &&
                          r.a.createElement(
                            "span",
                            { className: "d-flex mt-3" },
                            r.a.createElement(
                              "a",
                              {
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "cta-btn cta-btn--resume",
                                href: c,
                              },
                              "Resume"
                            )
                          )
                      )
                    )
                  )
                )
              )
            )
          );
        },
        B = function () {
          var e = Object(a.useContext)(x).contact,
            t = e.cta,
            n = e.btn,
            o = e.email;
          return r.a.createElement(
            "section",
            { id: "contact" },
            r.a.createElement(
              l.a,
              null,
              r.a.createElement(y, { title: "Contact" }),
              r.a.createElement(
                s.a,
                { bottom: !0, duration: 1e3, delay: 800, distance: "30px" },
                r.a.createElement(
                  "div",
                  { className: "contact-wrapper" },
                  r.a.createElement(
                    "p",
                    { className: "contact-wrapper__text" },
                    t || "Would you like to work with me? Awesome!"
                  ),
                  r.a.createElement(
                    "a",
                    {
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "cta-btn cta-btn--resume",
                      href: o
                        ? "mailto:" + o
                        : "https://github.com/cobidev/react-simplefolio",
                    },
                    n || "Let's Talk"
                  )
                )
              )
            )
          );
        };
      n("R48M"),
        n("+ar0"),
        n("xtjI"),
        n("OeI1"),
        n("Dq+y"),
        n("Ggvi"),
        n("C9fy"),
        n("nWfQ");
      function Q(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function N(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            "value" in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a);
        }
      }
      function M(e, t) {
        return (M =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function T(e) {
        return (T =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function R(e, t) {
        return !t || ("object" !== T(t) && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function z(e) {
        return (z = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function I(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function D(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? I(Object(n), !0).forEach(function (t) {
                Q(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : I(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function F(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = z(e);
          if (t) {
            var r = z(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return R(this, n);
        };
      }
      var H = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && M(e, t);
          })(s, e);
          var t,
            a,
            o,
            i = F(s);
          function s(e) {
            var t;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, s),
              ((t = i.call(this, e)).$ = r.a.createRef()),
              (t._ = r.a.createRef()),
              t
            );
          }
          return (
            (t = s),
            (a = [
              {
                key: "render",
                value: function () {
                  return r.a.createElement(
                    "span",
                    { ref: this.$ },
                    r.a.createElement(
                      "a",
                      D(D({}, this.props), {}, { ref: this._ }),
                      this.props.children
                    )
                  );
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  this.paint();
                },
              },
              {
                key: "getSnapshotBeforeUpdate",
                value: function () {
                  return this.reset(), null;
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  this.paint();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.reset();
                },
              },
              {
                key: "paint",
                value: function () {
                  var e = this,
                    t = this.$.current.appendChild(
                      document.createElement("span")
                    );
                  Promise.resolve()
                    .then(n.bind(null, "q01k"))
                    .then(function (n) {
                      (0, n.render)(t.appendChild(e._.current), function (e) {
                        try {
                          t.parentNode.replaceChild(e, t);
                        } catch (t) {}
                      });
                    });
                },
              },
              {
                key: "reset",
                value: function () {
                  this.$.current.replaceChild(
                    this._.current,
                    this.$.current.lastChild
                  );
                },
              },
            ]) && N(t.prototype, a),
            o && N(t, o),
            s
          );
        })(a.PureComponent),
        L = function () {
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              H,
              {
                className: "github-button",
                href: "https://github.com/cobidev/gatsby-simplefolio/fork",
                "data-icon": "octicon-repo-forked",
                "data-size": "large",
                "data-show-count": "true",
                "aria-label": "Fork cobidev/gatsby-simplefolio on GitHub",
              },
              "Fork"
            ),
            r.a.createElement(
              H,
              {
                className: "github-button",
                href: "https://github.com/cobidev/gatsby-simplefolio",
                "data-icon": "octicon-star",
                "data-size": "large",
                "data-show-count": "true",
                "aria-label": "Star cobidev/gatsby-simplefolio on GitHub",
              },
              "Star"
            )
          );
        },
        Y = n("oqc9"),
        W = function () {
          var e = Object(a.useContext)(x).footer.networks,
            t = o.d.isEnabled;
          return r.a.createElement(
            "footer",
            { className: "footer navbar-static-bottom" },
            r.a.createElement(
              l.a,
              null,
              r.a.createElement(
                "span",
                { className: "back-to-top" },
                r.a.createElement(
                  Y.Link,
                  { to: "hero", smooth: !0, duration: 1e3 },
                  r.a.createElement("i", {
                    className: "fa fa-angle-up fa-2x",
                    "aria-hidden": "true",
                  })
                )
              ),
              r.a.createElement(
                "div",
                { className: "social-links" },
                e &&
                  e.map(function (e) {
                    var t = e.id,
                      n = e.name,
                      a = e.url;
                    return r.a.createElement(
                      "a",
                      {
                        key: t,
                        href:
                          a || "https://github.com/cobidev/gatsby-simplefolio",
                        rel: "noopener noreferrer",
                        target: "_blank",
                        "aria-label": n,
                      },
                      r.a.createElement("i", {
                        className: "fa fa-" + (n || "refresh") + " fa-inverse",
                      })
                    );
                  })
              ),
              r.a.createElement("hr", null),
              r.a.createElement(
                "p",
                { className: "footer__text" },
                "© ",
                new Date().getFullYear(),
                " -",
                " ",
                r.a.createElement(
                  "a",
                  {
                    href: "https://github.com/filoscoder/portfolio-web",
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                  "Filoscoder"
                )
              ),
              t && r.a.createElement(L, null)
            )
          );
        },
        U = function () {
          var e = Object(a.useContext)(x).hero,
            t = e.title,
            n = e.name,
            o = e.subtitle,
            i = e.cta,
            c = Object(a.useState)(!1),
            u = c[0],
            d = c[1],
            f = Object(a.useState)(!1),
            A = f[0],
            p = f[1];
          return (
            Object(a.useEffect)(function () {
              window.innerWidth > 769 ? (d(!0), p(!1)) : (p(!0), d(!1));
            }, []),
            r.a.createElement(
              "section",
              { id: "hero", className: "jumbotron" },
              r.a.createElement(
                l.a,
                null,
                r.a.createElement(
                  s.a,
                  {
                    left: u,
                    bottom: A,
                    duration: 1e3,
                    delay: 500,
                    distance: "30px",
                  },
                  r.a.createElement(
                    "h1",
                    { className: "hero-title" },
                    t || "Hi, my name is",
                    " ",
                    r.a.createElement(
                      "span",
                      { className: "text-color-main" },
                      n || "Your Name"
                    ),
                    r.a.createElement("br", null),
                    o || "I'm the Unknown Developer."
                  )
                ),
                r.a.createElement(
                  s.a,
                  {
                    left: u,
                    bottom: A,
                    duration: 1e3,
                    delay: 1e3,
                    distance: "30px",
                  },
                  r.a.createElement(
                    "p",
                    { className: "hero-cta" },
                    r.a.createElement(
                      "span",
                      { className: "cta-btn cta-btn--hero" },
                      r.a.createElement(
                        Y.Link,
                        { to: "about", smooth: !0, duration: 1e3 },
                        i || "Know more"
                      )
                    )
                  )
                )
              )
            )
          );
        },
        G = n("B5QA"),
        _ = function (e) {
          var t = e.filename,
            n = e.alt;
          return r.a.createElement(w.StaticQuery, {
            query: "3019095435",
            render: function (e) {
              var a = e.images.edges.find(function (e) {
                return e.node.relativePath.includes(t);
              });
              if (!a) return null;
              var o = a.node.childImageSharp.fluid;
              return r.a.createElement(S.a, { alt: n, fluid: o });
            },
            data: G,
          });
        },
        V = n("c+OE"),
        J = n.n(V),
        X = function () {
          var e = Object(a.useContext)(x).projects,
            t = Object(a.useState)(!1),
            n = t[0],
            o = t[1],
            i = Object(a.useState)(!1),
            c = i[0],
            u = i[1];
          return (
            Object(a.useEffect)(function () {
              window.innerWidth > 769 ? (o(!0), u(!1)) : (u(!0), o(!1));
            }, []),
            r.a.createElement(
              "section",
              { id: "projects" },
              r.a.createElement(
                l.a,
                null,
                r.a.createElement(
                  "div",
                  { className: "project-wrapper" },
                  r.a.createElement(y, { title: "Projects" }),
                  e.map(function (e) {
                    var t = e.title,
                      a = e.info,
                      o = e.info2,
                      i = e.url,
                      l = e.repo,
                      u = e.img,
                      d = e.id;
                    return r.a.createElement(
                      g,
                      { key: d },
                      r.a.createElement(
                        v,
                        { lg: 4, sm: 12 },
                        r.a.createElement(
                          s.a,
                          {
                            left: n,
                            bottom: c,
                            duration: 1e3,
                            delay: 500,
                            distance: "30px",
                          },
                          r.a.createElement(
                            "div",
                            { className: "project-wrapper__text" },
                            r.a.createElement(
                              "h3",
                              { className: "project-wrapper__text-title" },
                              t || "Project Title"
                            ),
                            r.a.createElement(
                              "div",
                              null,
                              r.a.createElement(
                                "p",
                                null,
                                a ||
                                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae."
                              ),
                              r.a.createElement(
                                "p",
                                { className: "mb-4" },
                                o || ""
                              )
                            ),
                            i &&
                              r.a.createElement(
                                "a",
                                {
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className: "cta-btn cta-btn--hero",
                                  href: i || "#!",
                                },
                                "See Live"
                              ),
                            l &&
                              r.a.createElement(
                                "a",
                                {
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className: "cta-btn text-color-main",
                                  href: l,
                                },
                                "Source Code"
                              )
                          )
                        )
                      ),
                      r.a.createElement(
                        v,
                        { lg: 8, sm: 12 },
                        r.a.createElement(
                          s.a,
                          {
                            right: n,
                            bottom: c,
                            duration: 1e3,
                            delay: 1e3,
                            distance: "30px",
                          },
                          r.a.createElement(
                            "div",
                            { className: "project-wrapper__image" },
                            r.a.createElement(
                              "a",
                              {
                                href: i || "#!",
                                target: "_blank",
                                "aria-label": "Project Link",
                                rel: "noopener noreferrer",
                              },
                              r.a.createElement(
                                J.a,
                                {
                                  options: {
                                    reverse: !1,
                                    max: 8,
                                    perspective: 1e3,
                                    scale: 1,
                                    speed: 300,
                                    transition: !0,
                                    axis: null,
                                    reset: !0,
                                    easing: "cubic-bezier(.03,.98,.52,.99)",
                                  },
                                },
                                r.a.createElement(
                                  "div",
                                  {
                                    "data-tilt": !0,
                                    className: "thumbnail rounded",
                                  },
                                  r.a.createElement(_, { alt: t, filename: u })
                                )
                              )
                            )
                          )
                        )
                      )
                    );
                  })
                )
              )
            )
          );
        };
      function q(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return Z(e);
          })(e) ||
          (function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return Z(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return Z(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Z(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
        return a;
      }
      var K = function () {
          var e = Object(a.useState)({}),
            t = e[0],
            n = e[1],
            i = Object(a.useState)({}),
            s = i[0],
            l = i[1],
            c = Object(a.useState)([]),
            u = c[0],
            d = c[1],
            f = Object(a.useState)({}),
            A = f[0],
            p = f[1],
            h = Object(a.useState)({}),
            g = h[0],
            m = h[1];
          return (
            Object(a.useEffect)(function () {
              n(Object.assign({}, o.f)),
                l(Object.assign({}, o.a)),
                d(q(o.g)),
                p(Object.assign({}, o.b)),
                m(Object.assign({}, o.c));
            }, []),
            r.a.createElement(
              P,
              {
                value: {
                  hero: t,
                  about: s,
                  projects: u,
                  contact: A,
                  footer: g,
                },
              },
              r.a.createElement(U, null),
              r.a.createElement(k, null),
              r.a.createElement(X, null),
              r.a.createElement(B, null),
              r.a.createElement(W, null)
            )
          );
        },
        $ = n("qhky");
      t.default = function () {
        var e = o.e.title,
          t = o.e.lang,
          n = o.e.description;
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            $.a,
            null,
            r.a.createElement("meta", { charSet: "utf-8" }),
            r.a.createElement("title", null, e),
            r.a.createElement("html", { lang: t || "en" }),
            r.a.createElement("meta", { name: "description", content: n })
          ),
          r.a.createElement(K, null)
        );
      };
    },
    SGlo: function (e, t, n) {
      "use strict";
      var a = n("rj/q"),
        r = n("N+BI").getWeak,
        o = n("1a8y"),
        i = n("BjK0"),
        s = n("xa9o"),
        l = n("yde8"),
        c = n("Wadk"),
        u = n("qDzq"),
        d = n("O1i0"),
        f = c(5),
        A = c(6),
        p = 0,
        h = function (e) {
          return e._l || (e._l = new g());
        },
        g = function () {
          this.a = [];
        },
        m = function (e, t) {
          return f(e.a, function (e) {
            return e[0] === t;
          });
        };
      (g.prototype = {
        get: function (e) {
          var t = m(this, e);
          if (t) return t[1];
        },
        has: function (e) {
          return !!m(this, e);
        },
        set: function (e, t) {
          var n = m(this, e);
          n ? (n[1] = t) : this.a.push([e, t]);
        },
        delete: function (e) {
          var t = A(this.a, function (t) {
            return t[0] === e;
          });
          return ~t && this.a.splice(t, 1), !!~t;
        },
      }),
        (e.exports = {
          getConstructor: function (e, t, n, o) {
            var c = e(function (e, a) {
              s(e, c, t, "_i"),
                (e._t = t),
                (e._i = p++),
                (e._l = void 0),
                null != a && l(a, n, e[o], e);
            });
            return (
              a(c.prototype, {
                delete: function (e) {
                  if (!i(e)) return !1;
                  var n = r(e);
                  return !0 === n
                    ? h(d(this, t)).delete(e)
                    : n && u(n, this._i) && delete n[this._i];
                },
                has: function (e) {
                  if (!i(e)) return !1;
                  var n = r(e);
                  return !0 === n ? h(d(this, t)).has(e) : n && u(n, this._i);
                },
              }),
              c
            );
          },
          def: function (e, t, n) {
            var a = r(o(t), !0);
            return !0 === a ? h(e).set(t, n) : (a[e._i] = n), e;
          },
          ufstore: h,
        });
    },
    Y30y: function (e, t, n) {
      "use strict";
      n("LagC"),
        n("pS08"),
        n("E5k/"),
        n("R48M"),
        Object.defineProperty(t, "__esModule", { value: !0 });
      var a =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          },
        r = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var a = t[n];
              (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a);
            }
          }
          return function (t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t;
          };
        })(),
        o = l(n("q1tI")),
        i = l(n("w2Tm")),
        s = l(n("17x9"));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function u(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      var d = (function (e) {
        function t() {
          return (
            c(this, t),
            u(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            )
          );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          r(t, [
            {
              key: "render",
              value: function () {
                var e = this,
                  t = a({}, this.props);
                return (
                  t.parentBindings && delete t.parentBindings,
                  o.default.createElement(
                    "div",
                    a({}, t, {
                      ref: function (t) {
                        e.props.parentBindings.domNode = t;
                      },
                    }),
                    this.props.children
                  )
                );
              },
            },
          ]),
          t
        );
      })(o.default.Component);
      (d.propTypes = { name: s.default.string, id: s.default.string }),
        (t.default = (0, i.default)(d));
    },
    "c+OE": function (e, t, n) {
      "use strict";
      n("n7j8"),
        n("LagC"),
        n("pS08"),
        n("E5k/"),
        n("R48M"),
        Object.defineProperty(t, "__esModule", { value: !0 });
      var a,
        r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          },
        o = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var a = t[n];
              (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a);
            }
          }
          return function (t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t;
          };
        })(),
        i = n("q1tI"),
        s = (a = i) && a.__esModule ? a : { default: a },
        l = n("i8i4");
      var c = (function (e) {
        function t(e) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
          var n = (function (e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ("object" != typeof t && "function" != typeof t)
              ? e
              : t;
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          n.state = { style: {} };
          return (
            (n.width = null),
            (n.height = null),
            (n.left = null),
            (n.top = null),
            (n.transitionTimeout = null),
            (n.updateCall = null),
            (n.element = null),
            (n.settings = Object.assign(
              {},
              {
                reverse: !1,
                max: 35,
                perspective: 1e3,
                easing: "cubic-bezier(.03,.98,.52,.99)",
                scale: "1.1",
                speed: "1000",
                transition: !0,
                axis: null,
                reset: !0,
              },
              n.props.options
            )),
            (n.reverse = n.settings.reverse ? -1 : 1),
            (n.onMouseEnter = n.onMouseEnter.bind(n, n.props.onMouseEnter)),
            (n.onMouseMove = n.onMouseMove.bind(n, n.props.onMouseMove)),
            (n.onMouseLeave = n.onMouseLeave.bind(n, n.props.onMouseLeave)),
            n
          );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          o(t, [
            {
              key: "componentDidMount",
              value: function () {
                this.element = (0, l.findDOMNode)(this);
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                clearTimeout(this.transitionTimeout),
                  cancelAnimationFrame(this.updateCall);
              },
            },
            {
              key: "onMouseEnter",
              value: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : function () {},
                  t = arguments[1];
                return (
                  this.updateElementPosition(),
                  this.setState(
                    Object.assign({}, this.state, {
                      style: r({}, this.state.style, {
                        willChange: "transform",
                      }),
                    })
                  ),
                  this.setTransition(),
                  e(t)
                );
              },
            },
            {
              key: "reset",
              value: function () {
                var e = this;
                window.requestAnimationFrame(function () {
                  e.setState(
                    Object.assign({}, e.state, {
                      style: r({}, e.state.style, {
                        transform:
                          "perspective(" +
                          e.settings.perspective +
                          "px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
                      }),
                    })
                  );
                });
              },
            },
            {
              key: "onMouseMove",
              value: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : function () {},
                  t = arguments[1];
                return (
                  t.persist(),
                  null !== this.updateCall &&
                    window.cancelAnimationFrame(this.updateCall),
                  (this.event = t),
                  (this.updateCall = requestAnimationFrame(
                    this.update.bind(this, t)
                  )),
                  e(t)
                );
              },
            },
            {
              key: "setTransition",
              value: function () {
                var e = this;
                clearTimeout(this.transitionTimeout),
                  this.setState(
                    Object.assign({}, this.state, {
                      style: r({}, this.state.style, {
                        transition:
                          this.settings.speed + "ms " + this.settings.easing,
                      }),
                    })
                  ),
                  (this.transitionTimeout = setTimeout(function () {
                    e.setState(
                      Object.assign({}, e.state, {
                        style: r({}, e.state.style, { transition: "" }),
                      })
                    );
                  }, this.settings.speed));
              },
            },
            {
              key: "onMouseLeave",
              value: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : function () {},
                  t = arguments[1];
                return (
                  this.setTransition(),
                  this.settings.reset && this.reset(),
                  e(t)
                );
              },
            },
            {
              key: "getValues",
              value: function (e) {
                var t = (e.nativeEvent.clientX - this.left) / this.width,
                  n = (e.nativeEvent.clientY - this.top) / this.height,
                  a = Math.min(Math.max(t, 0), 1),
                  r = Math.min(Math.max(n, 0), 1);
                return {
                  tiltX: (
                    this.reverse *
                    (this.settings.max / 2 - a * this.settings.max)
                  ).toFixed(2),
                  tiltY: (
                    this.reverse *
                    (r * this.settings.max - this.settings.max / 2)
                  ).toFixed(2),
                  percentageX: 100 * a,
                  percentageY: 100 * r,
                };
              },
            },
            {
              key: "updateElementPosition",
              value: function () {
                var e = this.element.getBoundingClientRect();
                (this.width = this.element.offsetWidth),
                  (this.height = this.element.offsetHeight),
                  (this.left = e.left),
                  (this.top = e.top);
              },
            },
            {
              key: "update",
              value: function (e) {
                var t = this.getValues(e);
                this.setState(
                  Object.assign({}, this.state, {
                    style: r({}, this.state.style, {
                      transform:
                        "perspective(" +
                        this.settings.perspective +
                        "px) rotateX(" +
                        ("x" === this.settings.axis ? 0 : t.tiltY) +
                        "deg) rotateY(" +
                        ("y" === this.settings.axis ? 0 : t.tiltX) +
                        "deg) scale3d(" +
                        this.settings.scale +
                        ", " +
                        this.settings.scale +
                        ", " +
                        this.settings.scale +
                        ")",
                    }),
                  })
                ),
                  (this.updateCall = null);
              },
            },
            {
              key: "render",
              value: function () {
                var e = Object.assign({}, this.props.style, this.state.style);
                return s.default.createElement(
                  "div",
                  {
                    style: e,
                    className: this.props.className,
                    onMouseEnter: this.onMouseEnter,
                    onMouseMove: this.onMouseMove,
                    onMouseLeave: this.onMouseLeave,
                  },
                  this.props.children
                );
              },
            },
          ]),
          t
        );
      })(i.Component);
      t.default = c;
    },
    eMsz: function (e, t, n) {
      "use strict";
      var a,
        r = n("emib"),
        o = n("Wadk")(0),
        i = n("IYdN"),
        s = n("N+BI"),
        l = n("k5Iv"),
        c = n("SGlo"),
        u = n("BjK0"),
        d = n("O1i0"),
        f = n("O1i0"),
        A = !r.ActiveXObject && "ActiveXObject" in r,
        p = s.getWeak,
        h = Object.isExtensible,
        g = c.ufstore,
        m = function (e) {
          return function () {
            return e(this, arguments.length > 0 ? arguments[0] : void 0);
          };
        },
        b = {
          get: function (e) {
            if (u(e)) {
              var t = p(e);
              return !0 === t
                ? g(d(this, "WeakMap")).get(e)
                : t
                ? t[this._i]
                : void 0;
            }
          },
          set: function (e, t) {
            return c.def(d(this, "WeakMap"), e, t);
          },
        },
        v = (e.exports = n("94Pd")("WeakMap", m, b, c, !0, !0));
      f &&
        A &&
        (l((a = c.getConstructor(m, "WeakMap")).prototype, b),
        (s.NEED = !0),
        o(["delete", "has", "get", "set"], function (e) {
          var t = v.prototype,
            n = t[e];
          i(t, e, function (t, r) {
            if (u(t) && !h(t)) {
              this._f || (this._f = new a());
              var o = this._f[e](t, r);
              return "set" == e ? this : o;
            }
            return n.call(this, t, r);
          });
        }));
    },
    "hKI/": function (e, t, n) {
      (function (t) {
        n("sC2a"), n("q8oJ"), n("C9fy"), n("8npG");
        var a = /^\s+|\s+$/g,
          r = /^[-+]0x[0-9a-f]+$/i,
          o = /^0b[01]+$/i,
          i = /^0o[0-7]+$/i,
          s = parseInt,
          l = "object" == typeof t && t && t.Object === Object && t,
          c = "object" == typeof self && self && self.Object === Object && self,
          u = l || c || Function("return this")(),
          d = Object.prototype.toString,
          f = Math.max,
          A = Math.min,
          p = function () {
            return u.Date.now();
          };
        function h(e, t, n) {
          var a,
            r,
            o,
            i,
            s,
            l,
            c = 0,
            u = !1,
            d = !1,
            h = !0;
          if ("function" != typeof e)
            throw new TypeError("Expected a function");
          function b(t) {
            var n = a,
              o = r;
            return (a = r = void 0), (c = t), (i = e.apply(o, n));
          }
          function v(e) {
            return (c = e), (s = setTimeout(E, t)), u ? b(e) : i;
          }
          function y(e) {
            var n = e - l;
            return void 0 === l || n >= t || n < 0 || (d && e - c >= o);
          }
          function E() {
            var e = p();
            if (y(e)) return w(e);
            s = setTimeout(
              E,
              (function (e) {
                var n = t - (e - l);
                return d ? A(n, o - (e - c)) : n;
              })(e)
            );
          }
          function w(e) {
            return (s = void 0), h && a ? b(e) : ((a = r = void 0), i);
          }
          function j() {
            var e = p(),
              n = y(e);
            if (((a = arguments), (r = this), (l = e), n)) {
              if (void 0 === s) return v(l);
              if (d) return (s = setTimeout(E, t)), b(l);
            }
            return void 0 === s && (s = setTimeout(E, t)), i;
          }
          return (
            (t = m(t) || 0),
            g(n) &&
              ((u = !!n.leading),
              (o = (d = "maxWait" in n) ? f(m(n.maxWait) || 0, t) : o),
              (h = "trailing" in n ? !!n.trailing : h)),
            (j.cancel = function () {
              void 0 !== s && clearTimeout(s),
                (c = 0),
                (a = l = r = s = void 0);
            }),
            (j.flush = function () {
              return void 0 === s ? i : w(p());
            }),
            j
          );
        }
        function g(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        function m(e) {
          if ("number" == typeof e) return e;
          if (
            (function (e) {
              return (
                "symbol" == typeof e ||
                ((function (e) {
                  return !!e && "object" == typeof e;
                })(e) &&
                  "[object Symbol]" == d.call(e))
              );
            })(e)
          )
            return NaN;
          if (g(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = g(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(a, "");
          var n = o.test(e);
          return n || i.test(e)
            ? s(e.slice(2), n ? 2 : 8)
            : r.test(e)
            ? NaN
            : +e;
        }
        e.exports = function (e, t, n) {
          var a = !0,
            r = !0;
          if ("function" != typeof e)
            throw new TypeError("Expected a function");
          return (
            g(n) &&
              ((a = "leading" in n ? !!n.leading : a),
              (r = "trailing" in n ? !!n.trailing : r)),
            h(e, t, { leading: a, maxWait: t, trailing: r })
          );
        };
      }.call(this, n("yLpj")));
    },
    nWfQ: function (e, t, n) {
      var a = n("P8UN"),
        r = n("nsRs"),
        o = n("nONw"),
        i = n("1a8y"),
        s = n("BjK0"),
        l = n("96qb"),
        c = n("16Xr"),
        u = (n("emib").Reflect || {}).construct,
        d = l(function () {
          function e() {}
          return !(u(function () {}, [], e) instanceof e);
        }),
        f = !l(function () {
          u(function () {});
        });
      a(a.S + a.F * (d || f), "Reflect", {
        construct: function (e, t) {
          o(e), i(t);
          var n = arguments.length < 3 ? e : o(arguments[2]);
          if (f && !d) return u(e, t, n);
          if (e == n) {
            switch (t.length) {
              case 0:
                return new e();
              case 1:
                return new e(t[0]);
              case 2:
                return new e(t[0], t[1]);
              case 3:
                return new e(t[0], t[1], t[2]);
              case 4:
                return new e(t[0], t[1], t[2], t[3]);
            }
            var a = [null];
            return a.push.apply(a, t), new (c.apply(e, a))();
          }
          var l = n.prototype,
            A = r(s(l) ? l : Object.prototype),
            p = Function.apply.call(e, A, t);
          return s(p) ? p : A;
        },
      });
    },
    oqc9: function (e, t, n) {
      "use strict";
      n("R48M"),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Helpers =
          t.ScrollElement =
          t.ScrollLink =
          t.animateScroll =
          t.scrollSpy =
          t.Events =
          t.scroller =
          t.Element =
          t.Button =
          t.Link =
            void 0);
      var a = A(n("PGca")),
        r = A(n("7wkA")),
        o = A(n("Y30y")),
        i = A(n("zPnG")),
        s = A(n("QQPg")),
        l = A(n("wT0s")),
        c = A(n("NEP4")),
        u = A(n("pUFB")),
        d = A(n("w2Tm")),
        f = A(n("7FV1"));
      function A(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (t.Link = a.default),
        (t.Button = r.default),
        (t.Element = o.default),
        (t.scroller = i.default),
        (t.Events = s.default),
        (t.scrollSpy = l.default),
        (t.animateScroll = c.default),
        (t.ScrollLink = u.default),
        (t.ScrollElement = d.default),
        (t.Helpers = f.default),
        (t.default = {
          Link: a.default,
          Button: r.default,
          Element: o.default,
          scroller: i.default,
          Events: s.default,
          scrollSpy: l.default,
          animateScroll: c.default,
          ScrollLink: u.default,
          ScrollElement: d.default,
          Helpers: f.default,
        });
    },
    otSO: function (e) {
      e.exports = JSON.parse(
        '{"data":{"images":{"edges":[{"node":{"relativePath":"favicon.png","name":"favicon","childImageSharp":{"fixed":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACTElEQVQ4y4VUMWsUQRTe2z1C1MJCxMpKsLCIyczdimBtL1gEe1uxE/0NiiiIwUoCIrlZw+X0EhOjqIWVhWAVUH+AhWVE77LP7715czsbk72Bj30z+/bb7837ZpKkYVDRScrC+NgZzE2m8WXE34GTPs+0kmlDCJwNcYsKKx+VzizSqy6B5E0gC3kNyiwnBrK0Wjd3aNAh6gPO5LqWNpP1amRZpPiJKBuyOruiP07JLUzyD1BmKrLCtJXoCLBBGzkTjQBWZ/ar36fKyJ6FUVZkp4GvtJ4zya4+n6m6jFagrjfv0e/ox9jQQMbPsrCBLIfKn1Kms3/oBZQxnJ1XwhnOFWJ+Ou10RMadTLXcK8CI1jrczb8gGdM6E5u7U5zRqgc+vilEq7JXfs8KW+q8DzwAloDHDNjoIZ7LQPc/Mry8pyWOsA5lZiwIpNzhTezjawXP31/0P3ZmLomIjqG0LXn5EknBHkONPSGXP5Yt8NiV3MJ+Rnyq1nV09Swmn4Bt4C3wTsHxR08kJZcCtg9sBCFDYFZFZbWmHDaQeJUGomRPy99j+2B9Kdr3rMaldkmpQkarOXd7Bu92pDRnvHUGcuxuRWTeGWw/HNmEls+pudWgj05wUlvVXRczF+a3nl+Ua66pD1uhoXKRbM4d5CMbH71ZzL+JXdaE7BdwSfOy+DAcel2FZCW8IaX6cneAM6qsTb3z1dnvLTQ0QC9KJB4FftD2BdJuH48vjLLfndpMf6arG/k2fRDDPo1uomxyV04jC/Kj+AtwP5qnkxKfN5P9A7XZL07/0hZDAAAAAElFTkSuQmCC","width":192,"height":192,"src":"/static/4ccd13523eddd3694feac28b19d11786/460e9/favicon.png","srcSet":"/static/4ccd13523eddd3694feac28b19d11786/460e9/favicon.png 1x"}}}},{"node":{"relativePath":"plating-logo.png","name":"plating-logo","childImageSharp":{"fixed":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAAB9klEQVQ4y2P4TwFgwCnz7+//v3/+//0LQqRo/vf/3z8MsX/EaQar+33v0td1E78sbft+aN2/Lx+ghuLTDNb279vnzwvr32SavkkzfJ2s+ybb4l2F56+7F6F+wW/zp6n5ryIV3tcGfJpd8WlO5ac5Va8i5N43hPz79RPNfgaUEAK79k260etU/Q+dCUA3f90w9fO82tcJmm8yzX7dOY9mOZJmcKj+unnmTZb560Stz3Oqft0FenvSp5llQC7QF3g1gz389+ObtwV2r5N03tUFfppX82la0ccJWa+ilN7VBvz79QMt2BnQ4/b//+97lryOU3+bZ/O+MRTo+Pd1gW/ybH7dOE1MgIEM/nF616e51Z8XNX5dM+Hn6V1/Xj7EGtUMOJMH0BJk1X8h3H8E4vnnpcOQVPHvy0dgmP1+fBOLWRih/efbvhU/jm3+unHa92Obvh9c/XXDlC+ren+c3P5104yf5/Z+P7L++6E12OP538/vn5e2fFnR+WVJ69c1/SAPb5r2beeCLyu6vm2Z9WVZ+9eNU4Hk/z+/sWr+9mVl1+9HN/5+fP337bNft8/9fff879vnwNACivx5cuvb7sVf1vT9+/ENm+ZfP37dOos194Bkf3z7fnDNr2vH/757SSg///sHDVuIWRjhjDO0cYK/6AHOQEkxBACoe1KgBmEsPAAAAABJRU5ErkJggg==","width":350,"height":350,"src":"/static/2316e3bfb56e8fc2b6f91fa50e3175e2/a5370/plating-logo.png","srcSet":"/static/2316e3bfb56e8fc2b6f91fa50e3175e2/a5370/plating-logo.png 1x,\\n/static/2316e3bfb56e8fc2b6f91fa50e3175e2/88e49/plating-logo.png 1.5x"}}}},{"node":{"relativePath":"profile.jpg","name":"profile","childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQFAgP/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAG6H2yzpKN7CC0H/8QAHBAAAgIDAQEAAAAAAAAAAAAAAQIAAwQSEyEy/9oACAEBAAEFAujGZOxGgigqtlhadHWZDFUt+qPav//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABoQAAMBAAMAAAAAAAAAAAAAAAABESEiMUH/2gAIAQEABj8CyFqh0z2Gs4twTQxYf//EABoQAQACAwEAAAAAAAAAAAAAAAEAESExcWH/2gAIAQEAAT8hBaYyesT0eERYFMXB8nIAocNBVtMw6ytgO5//2gAMAwEAAgADAAAAEMMPPP/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8QH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8QH//EAB8QAQADAQABBQEAAAAAAAAAAAEAESExkUFhcYHB8f/aAAgBAQABPxC31O29r4lZBVll3qP5AOpdtqPETL2je+ZVAUpfh9T1tZi7FN4boj/JpHbkF3QgU92f/9k=","width":350,"height":350,"src":"/static/c80f7757ad076ae146f5038df44646aa/89f4f/profile.jpg","srcSet":"/static/c80f7757ad076ae146f5038df44646aa/89f4f/profile.jpg 1x,\\n/static/c80f7757ad076ae146f5038df44646aa/41070/profile.jpg 1.5x"}}}},{"node":{"relativePath":"plating-admin.png","name":"plating-admin","childImageSharp":{"fixed":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABCbAAAQmwF0iZxLAAADW0lEQVQ4y32U2WsbVxTG9QcZCiEPLQ19CIU8l0Jq04a0SelDSyElfmgdCBTUlCw0dpCLbWE7TYzr3bG8SJYXSZYsydqsxRqNLFmzaDZtdv6Dr+feiRWVQh8Od+Yu3/nOPb8Zh6zqkBSNR+9zN1QDkt6wo26+m//3vstzbHT0vvxHrG5ArlRgRHwwDv1QRMEWlev/L9grVtctHqpmQqHQVJqrVqBXytAliTu21+09vWJcsDeTQo42Nr2Ynv4LW95teDwbmJ1bgNe/h8WVNYQiMfh8fqy+8cCzvoH5hSUUhTIX7jqUehyy8SiRxs5eAGE6HAgeYNu/i2g8gWAojPhRCql0Frv7QRyEo9gPhFCu1N6XrrCSu6WaPJNuNlGtKcgVihBps1CuIH8ioFSu4oTciKdnEMRTvsewWrx8q9mxTdH1UMl1qHUdmUyWh0LvNbp0lRLkslkIpRJ/Zvd5RvP7wTAlkiCzhpFIgRKvLa/yRqk052APmtHAqnsY3pkxaJpOgjKqkoyp335G1PuGkDFQoYaIRQGvfh+CcJymw6yaFtLxGF4++gUamWJuHbKsQtJa8M39jfCWD2eKyUUPk8f49f49jDx9jsevx7BzFEKhpGBldhaxYxGyrEEjNn1bXsw8e0j3nOLGqCkmTotxpF5/g5PNIcjiEWpSHU7X97j9w4f44s5VPJl2olZTMTAcwCePQ+ifzOCwpCMaieCDKx/h2sfX8emNz5DKFEhQayM8/xCViT5ok31QD904I9Z+vH8TTueXeD48iKkZF4KJIkZfuuHybGFyYQFzwSJGXozi84FbcE1MYeDWXSyvrMNhNFpwu6cwNvQdvK4HWJxbxPn5BRaXtvHV1/346d5TJJIi8Sbij2fD+PaRC4POP5FMF7Dm2cS4ewJZsYzxcTehFSFB1nrDIhSqdveoc812h/CowR9Iwb+fQb4oQlVkRFIi1iMiwoKFDiVtNtt03/TlEGoGkWCSOQdjqNE8R6vzlgfjkInqZoMLl0QRoYMIQR5GLpdHp91Gw7JsdqkJVuucc2g17dFhNtrgQU4vAWXwpojJaCyBWDxJkAvIZPPIHOepm0lay3HQFUKFnelqUDhs9U53oUEZm+0LQsLibtnXc/nDYMHmGR5sD9vLzvRq/AP+V0PZsLZ71wAAAABJRU5ErkJggg==","width":350,"height":280,"src":"/static/8acf63b6e56f84e7d3032666ae7f072d/a5370/plating-admin.png","srcSet":"/static/8acf63b6e56f84e7d3032666ae7f072d/a5370/plating-admin.png 1x,\\n/static/8acf63b6e56f84e7d3032666ae7f072d/88e49/plating-admin.png 1.5x,\\n/static/8acf63b6e56f84e7d3032666ae7f072d/73c85/plating-admin.png 2x"}}}},{"node":{"relativePath":"project.jpg","name":"project","childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAEGBP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAd6mmUxLh//EABsQAAEEAwAAAAAAAAAAAAAAAAABAgMTEBES/9oACAEBAAEFArIyyM7ZhFNn/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGBAAAwEBAAAAAAAAAAAAAAAAABAyATH/2gAIAQEABj8Coo6sX//EABoQAAIDAQEAAAAAAAAAAAAAAAABESExUWH/2gAIAQEAAT8hfIXYPOS7sZNhtOn/2gAMAwEAAgADAAAAEKMP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAHRAAAgICAwEAAAAAAAAAAAAAAAERMSFBUYGh0f/aAAgBAQABPxDbT2NaKzfAoTicGyp9Ldr6SWVn/9k=","width":350,"height":197,"src":"/static/e7d8c1960c437bd82682356bcb4160d4/89f4f/project.jpg","srcSet":"/static/e7d8c1960c437bd82682356bcb4160d4/89f4f/project.jpg 1x,\\n/static/e7d8c1960c437bd82682356bcb4160d4/41070/project.jpg 1.5x,\\n/static/e7d8c1960c437bd82682356bcb4160d4/9a128/project.jpg 2x"}}}},{"node":{"relativePath":"plating.png","name":"plating","childImageSharp":{"fixed":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAADuklEQVQ4y2WSfUzUdRzH75E7jmdQAkTAhMB4VO4COY54ODg8wOPuOGGAIE8JDMJgKlZ4jYeCYqggIgli0rIilytJWTZqseUfJbQF//iPrYf1tJZtweCAVz+g1lyf7b3v94/vXt/35/N5i1hbgZ8fgGMJx9o6q6uOTf21uIjD4eB/tb7+74W1tbXN28rUVVYm+lj95TtEhbYi8gzZmA9ayDcXcri8hmvvfcD3vz3kzyUHDxeX+X1phXv3vmZ2bh7he5YFzg8//cr9Bz/SZbdzrfM5KgtM3J66g0goHpWSx/yf4NzQOH8sr/PxFzNcvf0hg5fH+WT67hZQ0JdzC9iKKnB3cUcdsh2VVEpWVh4iuVyJTCZH7qREoXDFzdUbdy9/ovelMzE5TddAD22DvfQOjzFzd24TuFEvvtS9aUAmc0YsUeLu6oVc6oZILJY94lAsVeHss4PH1Xrya5voGxxj+O2PGLwywfTMV5uw+fvfEhAYJrx3Qi53RS5zwdPdD1cXH0QKhbNg1YDJZEanS0WvP4A+M480YzGtrwxw4/pNbt28w62pT5md/YaF+QXUGp0AEwsdqZBInFA5e+C7bScKJ1dEMpkTVouV1NRUEhISSdKmUlJaRY61hqrKWjrqirlw4ijjHcd498rr9NuPE+AbiF6Yl0Tu9k9nElSqbcIp3XJYX19PaUkpZWXl2GzF1DY0k1tUR3JSJj3VuZw7eZSqQhs7Q0MpyU2g297OyNibVFmfpvXZCirKS0lWa/DzDUYkFRaSkpFJeFQsUXs1RO9NINdWRnrBM6Qb8+g6Wc75M9281m2nvraEyiN5XGptormhgcRIf9K1sVTmG+hvLEcTb0DkqVRwPSecz8wRDCYHCjNwwS0kkiCdmQyrlfbnyxi5eJ63hs8yfvEMo8N9jLx8HLstmzrNHmyaCEzJMWQnRmLUH0TkJOQnI8gL4y4ftP4eyITYeEfEE5pWgO5AHkOna5i8IDiszOfSiVre6W1jdLCd/s4mLrcd4f0eK5+PVTDZZ2Dk1MayhG39FxsxUpUn3qGx+O3L4NSxRmZGX6Wj2oIpLoQWqx5zjp6IqCCiNcEkZceQlRlL42E1b3RZuHG2DJFEIkWyAZJIkIoFKd1xCwhFGRyFtaSKthor2pgdpGjC0CeEk5YQRlJ8OFZjMmZzGjlGHUlPxdH+QgsD7S3CDD19ttwJsA1JheRL5UK4twfhsWc/2pT9WDLiyFDvQh8fiCV5N4e0u6nLiWWos5nT1QVYUjSYDBoOGZ/kb20eTyVWwvrdAAAAAElFTkSuQmCC","width":350,"height":244,"src":"/static/b38a3de39b7240bb24917940751323a8/a5370/plating.png","srcSet":"/static/b38a3de39b7240bb24917940751323a8/a5370/plating.png 1x,\\n/static/b38a3de39b7240bb24917940751323a8/88e49/plating.png 1.5x,\\n/static/b38a3de39b7240bb24917940751323a8/73c85/plating.png 2x"}}}},{"node":{"relativePath":"index.js","name":"index","childImageSharp":null}},{"node":{"relativePath":"404.js","name":"404","childImageSharp":null}}]}}}'
      );
    },
    pUFB: function (e, t, n) {
      "use strict";
      n("HXzo"),
        n("LagC"),
        n("pS08"),
        n("E5k/"),
        n("R48M"),
        Object.defineProperty(t, "__esModule", { value: !0 });
      var a =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          },
        r = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var a = t[n];
              (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a);
            }
          }
          return function (t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t;
          };
        })(),
        o = u(n("q1tI")),
        i = u(n("wT0s")),
        s = u(n("zPnG")),
        l = u(n("17x9")),
        c = u(n("Dy/p"));
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var d = {
        to: l.default.string.isRequired,
        containerId: l.default.string,
        container: l.default.object,
        activeClass: l.default.string,
        spy: l.default.bool,
        smooth: l.default.oneOfType([l.default.bool, l.default.string]),
        offset: l.default.number,
        delay: l.default.number,
        isDynamic: l.default.bool,
        onClick: l.default.func,
        duration: l.default.oneOfType([l.default.number, l.default.func]),
        absolute: l.default.bool,
        onSetActive: l.default.func,
        onSetInactive: l.default.func,
        ignoreCancelEvents: l.default.bool,
        hashSpy: l.default.bool,
      };
      t.default = function (e, t) {
        var n = t || s.default,
          l = (function (t) {
            function s(e) {
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, s);
              var t = (function (e, t) {
                if (!e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !t || ("object" != typeof t && "function" != typeof t)
                  ? e
                  : t;
              })(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, e));
              return u.call(t), (t.state = { active: !1 }), t;
            }
            return (
              (function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof t
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                  t &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, t)
                      : (e.__proto__ = t));
              })(s, t),
              r(s, [
                {
                  key: "getScrollSpyContainer",
                  value: function () {
                    var e = this.props.containerId,
                      t = this.props.container;
                    return e && !t
                      ? document.getElementById(e)
                      : t && t.nodeType
                      ? t
                      : document;
                  },
                },
                {
                  key: "componentDidMount",
                  value: function () {
                    if (this.props.spy || this.props.hashSpy) {
                      var e = this.getScrollSpyContainer();
                      i.default.isMounted(e) || i.default.mount(e),
                        this.props.hashSpy &&
                          (c.default.isMounted() || c.default.mount(n),
                          c.default.mapContainer(this.props.to, e)),
                        i.default.addSpyHandler(this.spyHandler, e),
                        this.setState({ container: e });
                    }
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    i.default.unmount(this.stateHandler, this.spyHandler);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var t = "";
                    t =
                      this.state && this.state.active
                        ? (
                            (this.props.className || "") +
                            " " +
                            (this.props.activeClass || "active")
                          ).trim()
                        : this.props.className;
                    var n = a({}, this.props);
                    for (var r in d) n.hasOwnProperty(r) && delete n[r];
                    return (
                      (n.className = t),
                      (n.onClick = this.handleClick),
                      o.default.createElement(e, n)
                    );
                  },
                },
              ]),
              s
            );
          })(o.default.PureComponent),
          u = function () {
            var e = this;
            (this.scrollTo = function (t, r) {
              n.scrollTo(t, a({}, e.state, r));
            }),
              (this.handleClick = function (t) {
                e.props.onClick && e.props.onClick(t),
                  t.stopPropagation && t.stopPropagation(),
                  t.preventDefault && t.preventDefault(),
                  e.scrollTo(e.props.to, e.props);
              }),
              (this.spyHandler = function (t) {
                var a = e.getScrollSpyContainer();
                if (!c.default.isMounted() || c.default.isInitialized()) {
                  var r = e.props.to,
                    o = null,
                    i = 0,
                    s = 0,
                    l = 0;
                  if (a.getBoundingClientRect)
                    l = a.getBoundingClientRect().top;
                  if (!o || e.props.isDynamic) {
                    if (!(o = n.get(r))) return;
                    var u = o.getBoundingClientRect();
                    s = (i = u.top - l + t) + u.height;
                  }
                  var d = t - e.props.offset,
                    f = d >= Math.floor(i) && d < Math.floor(s),
                    A = d < Math.floor(i) || d >= Math.floor(s),
                    p = n.getActiveLink();
                  A &&
                    (r === p && n.setActiveLink(void 0),
                    e.props.hashSpy &&
                      c.default.getHash() === r &&
                      c.default.changeHash(),
                    e.props.spy &&
                      e.state.active &&
                      (e.setState({ active: !1 }),
                      e.props.onSetInactive && e.props.onSetInactive(r, o))),
                    !f ||
                      (p === r && !1 !== e.state.active) ||
                      (n.setActiveLink(r),
                      e.props.hashSpy && c.default.changeHash(r),
                      e.props.spy &&
                        (e.setState({ active: !0 }),
                        e.props.onSetActive && e.props.onSetActive(r, o)));
                }
              });
          };
        return (l.propTypes = d), (l.defaultProps = { offset: 0 }), l;
      };
    },
    q01k: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "render", function () {
          return O;
        });
      n("pJf4"), n("sC2a"), n("HQhv");
      var a = window.document,
        r = window.Math,
        o = window.HTMLElement,
        i = window.XMLHttpRequest,
        s = function (e) {
          return function (t, n, a) {
            var r = e.createElement(t);
            if (null != n)
              for (var o in n) {
                var i = n[o];
                null != i && (null != r[o] ? (r[o] = i) : r.setAttribute(o, i));
              }
            if (null != a)
              for (var s = 0, l = a.length; s < l; s++) {
                var c = a[s];
                r.appendChild("string" == typeof c ? e.createTextNode(c) : c);
              }
            return r;
          };
        },
        l = s(a),
        c = function (e, t) {
          return {}.hasOwnProperty.call(e, t);
        },
        u = "github.com",
        d = i && "prototype" in i && "withCredentials" in i.prototype,
        f =
          d &&
          o &&
          "attachShadow" in o.prototype &&
          !("prototype" in o.prototype.attachShadow),
        A = function (e, t, n) {
          e.addEventListener
            ? e.addEventListener(t, n, !1)
            : e.attachEvent("on" + t, n);
        },
        p = function (e, t, n) {
          e.removeEventListener
            ? e.removeEventListener(t, n, !1)
            : e.detachEvent("on" + t, n);
        },
        h = {
          light:
            ".btn{color:#24292e;background-color:#eff3f6;border-color:#c5c9cc;border-color:rgba(27,31,35,.2);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23fafbfc'/%3e%3cstop offset='90%25' stop-color='%23eff3f6'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #fafbfc, #eff3f6 90%);background-image:linear-gradient(180deg, #fafbfc, #eff3f6 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFFAFBFC', endColorstr='#FFEEF2F5')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#e6ebf1;background-position:-0.5em;border-color:#9fa4a9;border-color:rgba(27,31,35,.35);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f0f3f6'/%3e%3cstop offset='90%25' stop-color='%23e6ebf1'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #f0f3f6, #e6ebf1 90%);background-image:linear-gradient(180deg, #f0f3f6, #e6ebf1 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF0F3F6', endColorstr='#FFE5EAF0')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#e9ecef;border-color:#a1a4a8;border-color:rgba(27,31,35,.35);box-shadow:inset 0 .15em .3em rgba(27,31,35,.15);background-image:none;filter:none}.social-count{color:#24292e;background-color:#fff;border-color:#d1d2d3;border-color:rgba(27,31,35,.2)}.social-count:focus,.social-count:hover{color:#0366d6}.octicon-heart{color:#ea4aaa}",
          dark: ".btn{color:#fafbfc;background-color:#202428;border-color:#1f2327;border-color:rgba(27,31,35,.2);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%232f363d'/%3e%3cstop offset='90%25' stop-color='%23202428'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #2f363d, #202428 90%);background-image:linear-gradient(180deg, #2f363d, #202428 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF2F363D', endColorstr='#FF1E2226')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#1b1f23;background-position:-0.5em;border-color:#1b1f23;border-color:rgba(27,31,35,.5);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%232b3137'/%3e%3cstop offset='90%25' stop-color='%231b1f23'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #2b3137, #1b1f23 90%);background-image:linear-gradient(180deg, #2b3137, #1b1f23 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF2B3137', endColorstr='#FF191D21')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#181b1f;border-color:#1a1d21;border-color:rgba(27,31,35,.5);box-shadow:inset 0 .15em .3em rgba(27,31,35,.15);background-image:none;filter:none}.social-count{color:#fafbfc;background-color:#1b1f23;border-color:#1b1f23;border-color:rgba(27,31,35,.2)}.social-count:focus,.social-count:hover{color:#2188ff}.octicon-heart{color:#ec6cb9}",
        },
        g = function (e, t) {
          return (
            "@media(prefers-color-scheme:" + e + "){" + h[c(h, t) ? t : e] + "}"
          );
        },
        m = function (e) {
          if (null == e) return h.light;
          if (c(h, e)) return h[e];
          var t = (function (e, t, n, a) {
            null == t && (t = "&"),
              null == n && (n = "="),
              null == a && (a = window.decodeURIComponent);
            for (var r = {}, o = e.split(t), i = 0, s = o.length; i < s; i++) {
              var l = o[i];
              if ("" !== l) {
                var c = l.split(n);
                r[a(c[0])] = null != c[1] ? a(c.slice(1).join(n)) : void 0;
              }
            }
            return r;
          })(e, ";", ":", function (e) {
            return e.replace(/^[ \t\n\f\r]+|[ \t\n\f\r]+$/g, "");
          });
          return (
            h[c(h, t["no-preference"]) ? t["no-preference"] : "light"] +
            g("light", t.light) +
            g("dark", t.dark)
          );
        },
        b = {
          "mark-github": {
            heights: {
              16: {
                width: 16,
                path: '<path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>',
              },
            },
          },
          heart: {
            heights: {
              16: {
                width: 16,
                path: '<path fill-rule="evenodd" d="M4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.565 20.565 0 008 13.393a20.561 20.561 0 003.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.75.75 0 01-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5zM8 14.25l-.345.666-.002-.001-.006-.003-.018-.01a7.643 7.643 0 01-.31-.17 22.075 22.075 0 01-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.08 22.08 0 01-3.744 2.584l-.018.01-.006.003h-.002L8 14.25zm0 0l.345.666a.752.752 0 01-.69 0L8 14.25z"></path>',
              },
            },
          },
          eye: {
            heights: {
              16: {
                width: 16,
                path: '<path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path>',
              },
            },
          },
          star: {
            heights: {
              16: {
                width: 16,
                path: '<path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>',
              },
            },
          },
          "repo-forked": {
            heights: {
              16: {
                width: 16,
                path: '<path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>',
              },
            },
          },
          "repo-template": {
            heights: {
              16: {
                width: 16,
                path: '<path fill-rule="evenodd" d="M6 .75A.75.75 0 016.75 0h2.5a.75.75 0 010 1.5h-2.5A.75.75 0 016 .75zm5 0a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V1.5h-.75A.75.75 0 0111 .75zM4.992.662a.75.75 0 01-.636.848c-.436.063-.783.41-.846.846a.75.75 0 01-1.485-.212A2.501 2.501 0 014.144.025a.75.75 0 01.848.637zM2.75 4a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 012.75 4zm10.5 0a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM2.75 8a.75.75 0 01.75.75v.268A1.72 1.72 0 013.75 9h.5a.75.75 0 010 1.5h-.5a.25.25 0 00-.25.25v.75c0 .28.114.532.3.714a.75.75 0 01-1.05 1.072A2.495 2.495 0 012 11.5V8.75A.75.75 0 012.75 8zm10.5 0a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-2.5a.75.75 0 010-1.5h1.75v-2h-.75a.75.75 0 010-1.5h.75v-.25a.75.75 0 01.75-.75zM6 9.75A.75.75 0 016.75 9h2.5a.75.75 0 010 1.5h-2.5A.75.75 0 016 9.75zm-1 2.5v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>',
              },
            },
          },
          "issue-opened": {
            heights: {
              16: {
                width: 16,
                path: '<path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path>',
              },
            },
          },
          download: {
            heights: {
              16: {
                width: 16,
                path: '<path fill-rule="evenodd" d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z"></path>',
              },
            },
          },
        },
        v = function (e, t) {
          (e = ("" + e).toLowerCase().replace(/^octicon-/, "")),
            c(b, e) || (e = "mark-github");
          var n = t >= 24 && 24 in b[e].heights ? 24 : 16,
            a = b[e].heights[n];
          return (
            '<svg viewBox="0 0 ' +
            a.width +
            " " +
            n +
            '" width="' +
            (t * a.width) / n +
            '" height="' +
            t +
            '" class="octicon octicon-' +
            e +
            '" aria-hidden="true">' +
            a.path +
            "</svg>"
          );
        },
        y = {},
        E = function (e, t) {
          var n = y[e] || (y[e] = []);
          if (!(n.push(t) > 1)) {
            var a = (function (e) {
              var t;
              return function () {
                t || ((t = 1), e.apply(this, arguments));
              };
            })(function () {
              for (delete y[e]; (t = n.shift()); ) t.apply(null, arguments);
            });
            if (d) {
              var r = new i();
              A(r, "abort", a),
                A(r, "error", a),
                A(r, "load", function () {
                  var e;
                  try {
                    e = JSON.parse(r.responseText);
                  } catch (t) {
                    return void a(t);
                  }
                  a(200 !== r.status, e);
                }),
                r.open("GET", e),
                r.send();
            } else {
              var o = this || window;
              o._ = function (e) {
                (o._ = null), a(200 !== e.meta.status, e.data);
              };
              var l = s(o.document)("script", {
                  async: !0,
                  src: e + (/\?/.test(e) ? "&" : "?") + "callback=_",
                }),
                c = function () {
                  o._ && o._({ meta: {} });
                };
              A(l, "load", c),
                A(l, "error", c),
                l.readyState &&
                  (function (e, t, n) {
                    A(e, "readystatechange", function a(r) {
                      if (t.test(e.readyState))
                        return p(e, "readystatechange", a), n(r);
                    });
                  })(l, /de|m/, c),
                o.document.getElementsByTagName("head")[0].appendChild(l);
            }
          }
        },
        w = function (e, t, n) {
          var a = s(e.ownerDocument),
            r = e.appendChild(a("style", { type: "text/css" })),
            o =
              "body{margin:0}a{text-decoration:none;outline:0}.widget{display:inline-block;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;font-size:0;white-space:nowrap}.btn,.social-count{position:relative;display:inline-block;height:14px;padding:2px 5px;font-size:11px;font-weight:600;line-height:14px;vertical-align:bottom;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-repeat:repeat-x;background-position:-1px -1px;background-size:110% 110%;border:1px solid}.btn{border-radius:.25em}.btn:not(:last-child){border-radius:.25em 0 0 .25em}.social-count{border-left:0;border-radius:0 .25em .25em 0}.widget-lg .btn,.widget-lg .social-count{height:20px;padding:3px 10px;font-size:12px;line-height:20px}.octicon{display:inline-block;vertical-align:text-top;fill:currentColor}" +
              m(t["data-color-scheme"]);
          r.styleSheet
            ? (r.styleSheet.cssText = o)
            : r.appendChild(e.ownerDocument.createTextNode(o));
          var i = a(
              "a",
              {
                className: "btn",
                href: t.href,
                rel: "noopener",
                target: "_blank",
                title: t.title || void 0,
                "aria-label": t["aria-label"] || void 0,
                innerHTML: v(
                  t["data-icon"],
                  /^large$/i.test(t["data-size"]) ? 16 : 14
                ),
              },
              [" ", a("span", {}, [t["data-text"] || ""])]
            ),
            l = e.appendChild(
              a(
                "div",
                {
                  className:
                    "widget" +
                    (/^large$/i.test(t["data-size"]) ? " widget-lg" : ""),
                },
                [i]
              )
            ),
            c = i.hostname.replace(/\.$/, "");
          if (
            c.length < u.length ||
            ("." + c).substring(c.length - u.length) !== "." + u
          )
            return (i.href = "#"), (i.target = "_self"), void n(l);
          var d = (" /" + i.pathname).split(/\/+/);
          if (
            ((((c === u || c === "gist." + u) && "archive" === d[3]) ||
              (c === u && "releases" === d[3] && "download" === d[4]) ||
              c === "codeload." + u) &&
              (i.target = "_top"),
            /^true$/i.test(t["data-show-count"]) && c === u)
          ) {
            var f, A;
            if (!d[2] && d[1]) f = A = "followers";
            else if (!d[3] && d[2])
              (A = "stargazers_count"), (f = "stargazers");
            else if (d[4] || "subscription" !== d[3])
              if (d[4] || "fork" !== d[3]) {
                if ("issues" !== d[3]) return void n(l);
                (A = "open_issues_count"), (f = "issues");
              } else (A = "forks_count"), (f = "network/members");
            else (A = "subscribers_count"), (f = "watchers");
            var p = d[2] ? "/repos/" + d[1] + "/" + d[2] : "/users/" + d[1];
            E.call(this, "https://api.github.com" + p, function (e, t) {
              if (!e) {
                var r = t[A];
                l.appendChild(
                  a(
                    "a",
                    {
                      className: "social-count",
                      href: t.html_url + "/" + f,
                      rel: "noopener",
                      target: "_blank",
                      "aria-label":
                        r +
                        " " +
                        A.replace(/_count$/, "")
                          .replace("_", " ")
                          .slice(0, r < 2 ? -1 : void 0) +
                        " on GitHub",
                    },
                    [("" + r).replace(/\B(?=(\d{3})+(?!\d))/g, ",")]
                  )
                );
              }
              n(l);
            });
          } else n(l);
        },
        j = window.devicePixelRatio || 1,
        S = function (e) {
          return (
            (j > 1 ? r.ceil((r.round(e * j) / j) * 2) / 2 : r.ceil(e)) || 0
          );
        },
        C = function (e, t) {
          (e.style.width = t[0] + "px"), (e.style.height = t[1] + "px");
        },
        O = function (e, t) {
          if (null != e && null != t)
            if (
              (e.getAttribute &&
                (e = (function (e) {
                  for (
                    var t = {
                        href: e.href,
                        title: e.title,
                        "aria-label": e.getAttribute("aria-label"),
                      },
                      n = [
                        "icon",
                        "color-scheme",
                        "text",
                        "size",
                        "show-count",
                      ],
                      a = 0,
                      r = n.length;
                    a < r;
                    a++
                  ) {
                    var o = "data-" + n[a];
                    t[o] = e.getAttribute(o);
                  }
                  return (
                    null == t["data-text"] &&
                      (t["data-text"] = e.textContent || e.innerText),
                    t
                  );
                })(e)),
              f)
            ) {
              var n = l("span");
              w(n.attachShadow({ mode: "closed" }), e, function () {
                t(n);
              });
            } else {
              var o = l("iframe", {
                src: "javascript:0",
                title: e.title || void 0,
                allowtransparency: !0,
                scrolling: "no",
                frameBorder: 0,
              });
              C(o, [0, 0]), (o.style.border = "none");
              A(o, "load", function n() {
                var i,
                  s = o.contentWindow;
                try {
                  i = s.document.body;
                } catch (l) {
                  return void a.body.appendChild(o.parentNode.removeChild(o));
                }
                p(o, "load", n),
                  w.call(s, i, e, function (n) {
                    var a = (function (e) {
                      var t = e.offsetWidth,
                        n = e.offsetHeight;
                      if (e.getBoundingClientRect) {
                        var a = e.getBoundingClientRect();
                        (t = r.max(t, S(a.width))), (n = r.max(n, S(a.height)));
                      }
                      return [t, n];
                    })(n);
                    o.parentNode.removeChild(o),
                      (function (e, t, n) {
                        A(e, t, function a(r) {
                          return p(e, t, a), n(r);
                        });
                      })(o, "load", function () {
                        C(o, a);
                      }),
                      (o.src =
                        "https://unpkg.com/github-buttons@2.11.0/dist/buttons.html#" +
                        (o.name = (function (e, t, n, a) {
                          null == t && (t = "&"),
                            null == n && (n = "="),
                            null == a && (a = window.encodeURIComponent);
                          var r = [];
                          for (var o in e) {
                            var i = e[o];
                            null != i && r.push(a(o) + n + a(i));
                          }
                          return r.join(t);
                        })(e))),
                      t(o);
                  });
              }),
                a.body.appendChild(o);
            }
        };
    },
    uSBc: function (e, t, n) {
      var a = n("chL8"),
        r = n("lHo0"),
        o = n("1a8y"),
        i = n("emib").Reflect;
      e.exports =
        (i && i.ownKeys) ||
        function (e) {
          var t = a.f(o(e)),
            n = r.f;
          return n ? t.concat(n(e)) : t;
        };
    },
    w2Tm: function (e, t, n) {
      "use strict";
      n("pJf4"),
        n("LagC"),
        n("pS08"),
        n("E5k/"),
        n("R48M"),
        Object.defineProperty(t, "__esModule", { value: !0 });
      var a =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          },
        r = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var a = t[n];
              (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a);
            }
          }
          return function (t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t;
          };
        })(),
        o = l(n("q1tI")),
        i = (l(n("i8i4")), l(n("zPnG"))),
        s = l(n("17x9"));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      t.default = function (e) {
        var t = (function (t) {
          function n(e) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, n);
            var t = (function (e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
            })(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
            return (t.childBindings = { domNode: null }), t;
          }
          return (
            (function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(n, t),
            r(n, [
              {
                key: "componentDidMount",
                value: function () {
                  if ("undefined" == typeof window) return !1;
                  this.registerElems(this.props.name);
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  this.props.name !== e.name &&
                    this.registerElems(this.props.name);
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  if ("undefined" == typeof window) return !1;
                  i.default.unregister(this.props.name);
                },
              },
              {
                key: "registerElems",
                value: function (e) {
                  i.default.register(e, this.childBindings.domNode);
                },
              },
              {
                key: "render",
                value: function () {
                  return o.default.createElement(
                    e,
                    a({}, this.props, { parentBindings: this.childBindings })
                  );
                },
              },
            ]),
            n
          );
        })(o.default.Component);
        return (
          (t.propTypes = { name: s.default.string, id: s.default.string }), t
        );
      };
    },
    wT0s: function (e, t, n) {
      "use strict";
      n("JHok"),
        n("sc67"),
        n("R48M"),
        Object.defineProperty(t, "__esModule", { value: !0 });
      var a,
        r = n("hKI/"),
        o = (a = r) && a.__esModule ? a : { default: a },
        i = n("QLqi");
      var s = {
        spyCallbacks: [],
        spySetState: [],
        scrollSpyContainers: [],
        mount: function (e) {
          if (e) {
            var t = (function (e) {
              return (0, o.default)(e, 66);
            })(function (t) {
              s.scrollHandler(e);
            });
            s.scrollSpyContainers.push(e),
              (0, i.addPassiveEventListener)(e, "scroll", t);
          }
        },
        isMounted: function (e) {
          return -1 !== s.scrollSpyContainers.indexOf(e);
        },
        currentPositionY: function (e) {
          if (e === document) {
            var t = void 0 !== window.pageXOffset,
              n = "CSS1Compat" === (document.compatMode || "");
            return t
              ? window.pageYOffset
              : n
              ? document.documentElement.scrollTop
              : document.body.scrollTop;
          }
          return e.scrollTop;
        },
        scrollHandler: function (e) {
          (
            s.scrollSpyContainers[s.scrollSpyContainers.indexOf(e)]
              .spyCallbacks || []
          ).forEach(function (t) {
            return t(s.currentPositionY(e));
          });
        },
        addStateHandler: function (e) {
          s.spySetState.push(e);
        },
        addSpyHandler: function (e, t) {
          var n = s.scrollSpyContainers[s.scrollSpyContainers.indexOf(t)];
          n.spyCallbacks || (n.spyCallbacks = []),
            n.spyCallbacks.push(e),
            e(s.currentPositionY(t));
        },
        updateStates: function () {
          s.spySetState.forEach(function (e) {
            return e();
          });
        },
        unmount: function (e, t) {
          s.scrollSpyContainers.forEach(function (e) {
            return (
              e.spyCallbacks &&
              e.spyCallbacks.length &&
              e.spyCallbacks.splice(e.spyCallbacks.indexOf(t), 1)
            );
          }),
            s.spySetState &&
              s.spySetState.length &&
              s.spySetState.splice(s.spySetState.indexOf(e), 1),
            document.removeEventListener("scroll", s.scrollHandler);
        },
        update: function () {
          return s.scrollSpyContainers.forEach(function (e) {
            return s.scrollHandler(e);
          });
        },
      };
      t.default = s;
    },
    xFC4: function (e, t, n) {
      "use strict";
      n("sC2a"),
        n("sPse"),
        n("sc67"),
        n("R48M"),
        Object.defineProperty(t, "__esModule", { value: !0 });
      t.default = {
        pushHash: function (e) {
          if (
            ((e = e ? (0 === e.indexOf("#") ? e : "#" + e) : ""),
            history.pushState)
          ) {
            var t = window.location;
            history.pushState(
              null,
              null,
              e ? t.pathname + t.search + e : t.pathname + t.search
            );
          } else location.hash = e;
        },
        getHash: function () {
          return window.location.hash.replace(/^#/, "");
        },
        filterElementInContainer: function (e) {
          return function (t) {
            return e.contains
              ? e != t && e.contains(t)
              : !!(16 & e.compareDocumentPosition(t));
          };
        },
        scrollOffset: function (e, t) {
          return e === document
            ? t.getBoundingClientRect().top +
                (window.scrollY || window.pageYOffset)
            : "static" !== getComputedStyle(e).position
            ? t.offsetTop
            : t.offsetTop - e.offsetTop;
        },
      };
    },
    xtjI: function (e, t, n) {
      var a = n("P8UN"),
        r = n("uSBc"),
        o = n("5SQf"),
        i = n("Drra"),
        s = n("Fgx0");
      a(a.S, "Object", {
        getOwnPropertyDescriptors: function (e) {
          for (
            var t, n, a = o(e), l = i.f, c = r(a), u = {}, d = 0;
            c.length > d;

          )
            void 0 !== (n = l(a, (t = c[d++]))) && s(u, t, n);
          return u;
        },
      });
    },
    zPnG: function (e, t, n) {
      "use strict";
      n("E5k/"),
        n("R48M"),
        Object.defineProperty(t, "__esModule", { value: !0 });
      var a =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          },
        r = s(n("xFC4")),
        o = s(n("NEP4")),
        i = s(n("QQPg"));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var l = {},
        c = void 0;
      t.default = {
        unmount: function () {
          l = {};
        },
        register: function (e, t) {
          l[e] = t;
        },
        unregister: function (e) {
          delete l[e];
        },
        get: function (e) {
          return (
            l[e] ||
            document.getElementById(e) ||
            document.getElementsByName(e)[0] ||
            document.getElementsByClassName(e)[0]
          );
        },
        setActiveLink: function (e) {
          return (c = e);
        },
        getActiveLink: function () {
          return c;
        },
        scrollTo: function (e, t) {
          var n = this.get(e);
          if (n) {
            var s = (t = a({}, t, { absolute: !1 })).containerId,
              l = t.container,
              c = void 0;
            (c = s
              ? document.getElementById(s)
              : l && l.nodeType
              ? l
              : document),
              (t.absolute = !0);
            var u = r.default.scrollOffset(c, n) + (t.offset || 0);
            if (!t.smooth)
              return (
                i.default.registered.begin && i.default.registered.begin(e, n),
                c === document ? window.scrollTo(0, u) : (c.scrollTop = u),
                void (
                  i.default.registered.end && i.default.registered.end(e, n)
                )
              );
            o.default.animateTopScroll(u, t, e, n);
          } else console.warn("target Element not found");
        },
      };
    },
    zTTH: function (e, t, n) {
      "use strict";
      var a = n("P8UN"),
        r = n("Wadk")(6),
        o = "findIndex",
        i = !0;
      o in [] &&
        Array(1)[o](function () {
          i = !1;
        }),
        a(a.P + a.F * i, "Array", {
          findIndex: function (e) {
            return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
          },
        }),
        n("Dq1/")(o);
    },
  },
]);
//# sourceMappingURL=component---src-pages-index-js-1c25f46dc97ef4db9701.js.map
