/*! For license information please see component---src-pages-index-js-f9ce50664eb2b6af2c69.js.LICENSE.txt */
(self.webpackChunkportfolio_web = self.webpackChunkportfolio_web || []).push([
  [678],
  {
    6162: function (e, t, n) {
      "use strict";
      var r = n(4836);
      t.Z = void 0;
      var o,
        a = r(n(6115)),
        i = r(n(7867)),
        s = r(n(7071)),
        l = r(n(434)),
        c = r(n(7294)),
        u = r(n(5697)),
        d = [
          "sizes",
          "srcSet",
          "src",
          "style",
          "onLoad",
          "onError",
          "loading",
          "draggable",
          "ariaHidden",
        ],
        f = function (e) {
          var t = (0, l.default)({}, e),
            n = t.resolutions,
            r = t.sizes,
            o = t.critical;
          return (
            n && ((t.fixed = n), delete t.resolutions),
            r && ((t.fluid = r), delete t.sizes),
            o && (t.loading = "eager"),
            t.fluid && (t.fluid = x([].concat(t.fluid))),
            t.fixed && (t.fixed = x([].concat(t.fixed))),
            t
          );
        },
        p = function (e) {
          var t = e.media;
          return !!t && y && !!window.matchMedia(t).matches;
        },
        h = function (e) {
          var t = e.fluid,
            n = e.fixed,
            r = m(t || n || []);
          return r && r.src;
        },
        m = function (e) {
          if (
            y &&
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
            var t = e.findIndex(p);
            if (-1 !== t) return e[t];
            var n = e.findIndex(function (e) {
              return void 0 === e.media;
            });
            if (-1 !== n) return e[n];
          }
          return e[0];
        },
        g = Object.create({}),
        b = function (e) {
          var t = f(e),
            n = h(t);
          return g[n] || !1;
        },
        v =
          "undefined" != typeof HTMLImageElement &&
          "loading" in HTMLImageElement.prototype,
        y = "undefined" != typeof window,
        w = y && window.IntersectionObserver,
        E = new WeakMap();
      function S(e) {
        return e.map(function (e) {
          var t = e.src,
            n = e.srcSet,
            r = e.srcSetWebp,
            o = e.media,
            a = e.sizes;
          return c.default.createElement(
            c.default.Fragment,
            { key: t },
            r &&
              c.default.createElement("source", {
                type: "image/webp",
                media: o,
                srcSet: r,
                sizes: a,
              }),
            n &&
              c.default.createElement("source", {
                media: o,
                srcSet: n,
                sizes: a,
              })
          );
        });
      }
      function x(e) {
        var t = [],
          n = [];
        return (
          e.forEach(function (e) {
            return (e.media ? t : n).push(e);
          }),
          [].concat(t, n)
        );
      }
      function C(e) {
        return e.map(function (e) {
          var t = e.src,
            n = e.media,
            r = e.tracedSVG;
          return c.default.createElement("source", {
            key: t,
            media: n,
            srcSet: r,
          });
        });
      }
      function k(e) {
        return e.map(function (e) {
          var t = e.src,
            n = e.media,
            r = e.base64;
          return c.default.createElement("source", {
            key: t,
            media: n,
            srcSet: r,
          });
        });
      }
      function O(e, t) {
        var n = e.srcSet,
          r = e.srcSetWebp,
          o = e.media,
          a = e.sizes;
        return (
          "<source " +
          (t ? "type='image/webp' " : "") +
          (o ? 'media="' + o + '" ' : "") +
          'srcset="' +
          (t ? r : n) +
          '" ' +
          (a ? 'sizes="' + a + '" ' : "") +
          "/>"
        );
      }
      var _ = function (e, t) {
          var n =
            (void 0 === o &&
              "undefined" != typeof window &&
              window.IntersectionObserver &&
              (o = new window.IntersectionObserver(
                function (e) {
                  e.forEach(function (e) {
                    if (E.has(e.target)) {
                      var t = E.get(e.target);
                      (e.isIntersecting || e.intersectionRatio > 0) &&
                        (o.unobserve(e.target), E.delete(e.target), t());
                    }
                  });
                },
                { rootMargin: "200px" }
              )),
            o);
          return (
            n && (n.observe(e), E.set(e, t)),
            function () {
              n.unobserve(e), E.delete(e);
            }
          );
        },
        M = function (e) {
          var t = e.src ? 'src="' + e.src + '" ' : 'src="" ',
            n = e.sizes ? 'sizes="' + e.sizes + '" ' : "",
            r = e.srcSet ? 'srcset="' + e.srcSet + '" ' : "",
            o = e.title ? 'title="' + e.title + '" ' : "",
            a = e.alt ? 'alt="' + e.alt + '" ' : 'alt="" ',
            i = e.width ? 'width="' + e.width + '" ' : "",
            s = e.height ? 'height="' + e.height + '" ' : "",
            l = e.crossOrigin ? 'crossorigin="' + e.crossOrigin + '" ' : "",
            c = e.loading ? 'loading="' + e.loading + '" ' : "",
            u = e.draggable ? 'draggable="' + e.draggable + '" ' : "";
          return (
            "<picture>" +
            e.imageVariants
              .map(function (e) {
                return (e.srcSetWebp ? O(e, !0) : "") + O(e);
              })
              .join("") +
            "<img " +
            c +
            i +
            s +
            n +
            r +
            t +
            a +
            o +
            l +
            u +
            'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'
          );
        },
        P = c.default.forwardRef(function (e, t) {
          var n = e.src,
            r = e.imageVariants,
            o = e.generateSources,
            a = e.spreadProps,
            i = e.ariaHidden,
            s = c.default.createElement(
              T,
              (0, l.default)({ ref: t, src: n }, a, { ariaHidden: i })
            );
          return r.length > 1
            ? c.default.createElement("picture", null, o(r), s)
            : s;
        }),
        T = c.default.forwardRef(function (e, t) {
          var n = e.sizes,
            r = e.srcSet,
            o = e.src,
            a = e.style,
            i = e.onLoad,
            u = e.onError,
            f = e.loading,
            p = e.draggable,
            h = e.ariaHidden,
            m = (0, s.default)(e, d);
          return c.default.createElement(
            "img",
            (0, l.default)(
              { "aria-hidden": h, sizes: n, srcSet: r, src: o },
              m,
              {
                onLoad: i,
                onError: u,
                ref: t,
                loading: f,
                draggable: p,
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
                  a
                ),
              }
            )
          );
        });
      T.propTypes = {
        style: u.default.object,
        onError: u.default.func,
        onLoad: u.default.func,
      };
      var j = (function (e) {
        function t(t) {
          var n;
          ((n = e.call(this, t) || this).seenBefore = y && b(t)),
            (n.isCritical = "eager" === t.loading || t.critical),
            (n.addNoScript = !(n.isCritical && !t.fadeIn)),
            (n.useIOSupport = !v && w && !n.isCritical && !n.seenBefore);
          var r = n.isCritical || (y && (v || !n.useIOSupport));
          return (
            (n.state = {
              isVisible: r,
              imgLoaded: !1,
              imgCached: !1,
              fadeIn: !n.seenBefore && t.fadeIn,
              isHydrated: !1,
            }),
            (n.imageRef = c.default.createRef()),
            (n.placeholderRef = t.placeholderRef || c.default.createRef()),
            (n.handleImageLoaded = n.handleImageLoaded.bind((0, a.default)(n))),
            (n.handleRef = n.handleRef.bind((0, a.default)(n))),
            n
          );
        }
        (0, i.default)(t, e);
        var n = t.prototype;
        return (
          (n.componentDidMount = function () {
            if (
              (this.setState({ isHydrated: y }),
              this.state.isVisible &&
                "function" == typeof this.props.onStartLoad &&
                this.props.onStartLoad({ wasCached: b(this.props) }),
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
              (this.cleanUpListeners = _(e, function () {
                var e = b(t.props);
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
              (t = f(e)),
              (n = h(t)) && (g[n] = !0),
              this.setState({ imgLoaded: !0 }),
              this.props.onLoad && this.props.onLoad();
          }),
          (n.render = function () {
            var e = f(this.props),
              t = e.title,
              n = e.alt,
              r = e.className,
              o = e.style,
              a = void 0 === o ? {} : o,
              i = e.imgStyle,
              s = void 0 === i ? {} : i,
              u = e.placeholderStyle,
              d = void 0 === u ? {} : u,
              p = e.placeholderClassName,
              h = e.fluid,
              g = e.fixed,
              b = e.backgroundColor,
              v = e.durationFadeIn,
              y = e.Tag,
              w = e.itemProp,
              E = e.loading,
              x = e.draggable,
              O = h || g;
            if (!O) return null;
            var _ = !1 === this.state.fadeIn || this.state.imgLoaded,
              j = !0 === this.state.fadeIn && !this.state.imgCached,
              L = (0, l.default)(
                {
                  opacity: _ ? 1 : 0,
                  transition: j ? "opacity " + v + "ms" : "none",
                },
                s
              ),
              H = "boolean" == typeof b ? "lightgray" : b,
              N = { transitionDelay: v + "ms" },
              I = (0, l.default)(
                { opacity: this.state.imgLoaded ? 0 : 1 },
                j && N,
                s,
                d
              ),
              R = {
                title: t,
                alt: this.state.isVisible ? "" : n,
                style: I,
                className: p,
                itemProp: w,
              },
              F = this.state.isHydrated ? m(O) : O[0];
            if (h)
              return c.default.createElement(
                y,
                {
                  className: (r || "") + " gatsby-image-wrapper",
                  style: (0, l.default)(
                    {
                      position: "relative",
                      overflow: "hidden",
                      maxWidth: F.maxWidth ? F.maxWidth + "px" : null,
                      maxHeight: F.maxHeight ? F.maxHeight + "px" : null,
                    },
                    a
                  ),
                  ref: this.handleRef,
                  key: "fluid-" + JSON.stringify(F.srcSet),
                },
                c.default.createElement(y, {
                  "aria-hidden": !0,
                  style: {
                    width: "100%",
                    paddingBottom: 100 / F.aspectRatio + "%",
                  },
                }),
                H &&
                  c.default.createElement(y, {
                    "aria-hidden": !0,
                    title: t,
                    style: (0, l.default)(
                      {
                        backgroundColor: H,
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        opacity: this.state.imgLoaded ? 0 : 1,
                        right: 0,
                        left: 0,
                      },
                      j && N
                    ),
                  }),
                F.base64 &&
                  c.default.createElement(P, {
                    ariaHidden: !0,
                    ref: this.placeholderRef,
                    src: F.base64,
                    spreadProps: R,
                    imageVariants: O,
                    generateSources: k,
                  }),
                F.tracedSVG &&
                  c.default.createElement(P, {
                    ariaHidden: !0,
                    ref: this.placeholderRef,
                    src: F.tracedSVG,
                    spreadProps: R,
                    imageVariants: O,
                    generateSources: C,
                  }),
                this.state.isVisible &&
                  c.default.createElement(
                    "picture",
                    null,
                    S(O),
                    c.default.createElement(T, {
                      alt: n,
                      title: t,
                      sizes: F.sizes,
                      src: F.src,
                      crossOrigin: this.props.crossOrigin,
                      srcSet: F.srcSet,
                      style: L,
                      ref: this.imageRef,
                      onLoad: this.handleImageLoaded,
                      onError: this.props.onError,
                      itemProp: w,
                      loading: E,
                      draggable: x,
                    })
                  ),
                this.addNoScript &&
                  c.default.createElement("noscript", {
                    dangerouslySetInnerHTML: {
                      __html: M(
                        (0, l.default)({ alt: n, title: t, loading: E }, F, {
                          imageVariants: O,
                        })
                      ),
                    },
                  })
              );
            if (g) {
              var A = (0, l.default)(
                {
                  position: "relative",
                  overflow: "hidden",
                  display: "inline-block",
                  width: F.width,
                  height: F.height,
                },
                a
              );
              return (
                "inherit" === a.display && delete A.display,
                c.default.createElement(
                  y,
                  {
                    className: (r || "") + " gatsby-image-wrapper",
                    style: A,
                    ref: this.handleRef,
                    key: "fixed-" + JSON.stringify(F.srcSet),
                  },
                  H &&
                    c.default.createElement(y, {
                      "aria-hidden": !0,
                      title: t,
                      style: (0, l.default)(
                        {
                          backgroundColor: H,
                          width: F.width,
                          opacity: this.state.imgLoaded ? 0 : 1,
                          height: F.height,
                        },
                        j && N
                      ),
                    }),
                  F.base64 &&
                    c.default.createElement(P, {
                      ariaHidden: !0,
                      ref: this.placeholderRef,
                      src: F.base64,
                      spreadProps: R,
                      imageVariants: O,
                      generateSources: k,
                    }),
                  F.tracedSVG &&
                    c.default.createElement(P, {
                      ariaHidden: !0,
                      ref: this.placeholderRef,
                      src: F.tracedSVG,
                      spreadProps: R,
                      imageVariants: O,
                      generateSources: C,
                    }),
                  this.state.isVisible &&
                    c.default.createElement(
                      "picture",
                      null,
                      S(O),
                      c.default.createElement(T, {
                        alt: n,
                        title: t,
                        width: F.width,
                        height: F.height,
                        sizes: F.sizes,
                        src: F.src,
                        crossOrigin: this.props.crossOrigin,
                        srcSet: F.srcSet,
                        style: L,
                        ref: this.imageRef,
                        onLoad: this.handleImageLoaded,
                        onError: this.props.onError,
                        itemProp: w,
                        loading: E,
                        draggable: x,
                      })
                    ),
                  this.addNoScript &&
                    c.default.createElement("noscript", {
                      dangerouslySetInnerHTML: {
                        __html: M(
                          (0, l.default)({ alt: n, title: t, loading: E }, F, {
                            imageVariants: O,
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
      j.defaultProps = {
        fadeIn: !0,
        durationFadeIn: 500,
        alt: "",
        Tag: "div",
        loading: "lazy",
      };
      var L = u.default.shape({
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
        H = u.default.shape({
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
      function N(e) {
        return function (t, n, r) {
          var o;
          if (!t.fixed && !t.fluid)
            throw new Error(
              "The prop `fluid` or `fixed` is marked as required in `" +
                r +
                "`, but their values are both `undefined`."
            );
          u.default.checkPropTypes((((o = {})[n] = e), o), t, "prop", r);
        };
      }
      j.propTypes = {
        resolutions: L,
        sizes: H,
        fixed: N(u.default.oneOfType([L, u.default.arrayOf(L)])),
        fluid: N(u.default.oneOfType([H, u.default.arrayOf(H)])),
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
      var I = j;
      t.Z = I;
    },
    97: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return q;
          },
        });
      var r = n(4593),
        o = n(7294),
        a = n(5785),
        i = n(1502),
        s = n(682),
        l = n(4184),
        c = n.n(l),
        u = n(6792),
        d = n(5893);
      const f = o.forwardRef(
        ({ bsPrefix: e, className: t, as: n = "div", ...r }, o) => {
          const a = (0, u.vE)(e, "row"),
            i = (0, u.pi)(),
            s = (0, u.zG)(),
            l = `${a}-cols`,
            f = [];
          return (
            i.forEach((e) => {
              const t = r[e];
              let n;
              delete r[e],
                null != t && "object" == typeof t ? ({ cols: n } = t) : (n = t);
              const o = e !== s ? `-${e}` : "";
              null != n && f.push(`${l}${o}-${n}`);
            }),
            (0, d.jsx)(n, { ref: o, ...r, className: c()(t, a, ...f) })
          );
        }
      );
      f.displayName = "Row";
      var p = f;
      const h = o.forwardRef((e, t) => {
        const [
          { className: n, ...r },
          { as: o = "div", bsPrefix: a, spans: i },
        ] = (function ({ as: e, bsPrefix: t, className: n, ...r }) {
          t = (0, u.vE)(t, "col");
          const o = (0, u.pi)(),
            a = (0, u.zG)(),
            i = [],
            s = [];
          return (
            o.forEach((e) => {
              const n = r[e];
              let o, l, c;
              delete r[e],
                "object" == typeof n && null != n
                  ? ({ span: o, offset: l, order: c } = n)
                  : (o = n);
              const u = e !== a ? `-${e}` : "";
              o && i.push(!0 === o ? `${t}${u}` : `${t}${u}-${o}`),
                null != c && s.push(`order${u}-${c}`),
                null != l && s.push(`offset${u}-${l}`);
            }),
            [
              { ...r, className: c()(n, ...i, ...s) },
              { as: e, bsPrefix: t, spans: i },
            ]
          );
        })(e);
        return (0, d.jsx)(o, {
          ...r,
          ref: t,
          className: c()(n, !i.length && a),
        });
      });
      h.displayName = "Col";
      var m = h,
        g = n(9470),
        b = n.n(g),
        v = n(1883),
        y = n(6162);
      var w = (e) => {
        let { filename: t, alt: n } = e;
        return o.createElement(v.StaticQuery, {
          query: "1882149949",
          render: (e) => {
            const r = e.images.edges.find((e) =>
              e.node.relativePath.includes(t)
            );
            if (!r) return null;
            const a = r.node.childImageSharp.fixed;
            return o.createElement(y.Z, {
              className: "circle shadow-lg",
              alt: n,
              fixed: a,
            });
          },
        });
      };
      const E = o.createContext(),
        S = E.Provider;
      E.Consumer;
      var x = E;
      var C = (e) => {
        let { title: t } = e;
        return o.createElement(
          b(),
          { bottom: !0, duration: 1e3, delay: 300, distance: "0px" },
          o.createElement("h2", { className: "section-title" }, t)
        );
      };
      var k = () => {
        const { about: e } = (0, o.useContext)(x),
          {
            img: t,
            paragraphOne: n,
            paragraphTwo: r,
            paragraphThree: a,
            paragraphFour: i,
            resume: l,
          } = e,
          { 0: c, 1: u } = (0, o.useState)(!1),
          { 0: d, 1: f } = (0, o.useState)(!1);
        return (
          (0, o.useEffect)(() => {
            window.innerWidth > 769 ? (u(!0), f(!1)) : (f(!0), u(!1));
          }, []),
          o.createElement(
            "section",
            { id: "about" },
            o.createElement(
              s.Z,
              null,
              o.createElement(C, { title: "About Me" }),
              o.createElement(
                p,
                { className: "about-wrapper" },
                o.createElement(
                  m,
                  { md: 6, sm: 12 },
                  o.createElement(
                    b(),
                    { bottom: !0, duration: 1e3, delay: 600, distance: "30px" },
                    o.createElement(
                      "div",
                      { className: "about-wrapper__image" },
                      o.createElement(w, {
                        alt: "profile picture",
                        filename: t,
                      })
                    )
                  )
                ),
                o.createElement(
                  m,
                  { md: 6, sm: 12 },
                  o.createElement(
                    b(),
                    {
                      left: c,
                      bottom: d,
                      duration: 1e3,
                      delay: 1e3,
                      distance: "30px",
                    },
                    o.createElement(
                      "div",
                      { className: "about-wrapper__info" },
                      o.createElement(
                        "p",
                        { className: "about-wrapper__info-text" },
                        n ||
                          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae."
                      ),
                      o.createElement(
                        "p",
                        { className: "about-wrapper__info-text" },
                        r ||
                          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae."
                      ),
                      o.createElement(
                        "p",
                        { className: "about-wrapper__info-text" },
                        a ||
                          "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
                      ),
                      o.createElement(
                        "p",
                        { className: "about-wrapper__info-text" },
                        i ||
                          "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
                      ),
                      l &&
                        o.createElement(
                          "span",
                          { className: "d-flex mt-3" },
                          o.createElement(
                            "a",
                            {
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: "cta-btn cta-btn--resume",
                              href: l,
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
      };
      var O = () => {
        const { contact: e } = (0, o.useContext)(x),
          { cta: t, btn: n, email: r } = e;
        return o.createElement(
          "section",
          { id: "contact" },
          o.createElement(
            s.Z,
            null,
            o.createElement(C, { title: "Contact" }),
            o.createElement(
              b(),
              { bottom: !0, duration: 1e3, delay: 800, distance: "30px" },
              o.createElement(
                "div",
                { className: "contact-wrapper" },
                o.createElement(
                  "p",
                  { className: "contact-wrapper__text" },
                  t || "Would you like to work with me? Awesome!"
                ),
                o.createElement(
                  "a",
                  {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "cta-btn cta-btn--resume",
                    href: r
                      ? "mailto:" + r
                      : "https://github.com/cobidev/react-simplefolio",
                  },
                  n || "Let's Talk"
                )
              )
            )
          )
        );
      };
      class _ extends o.PureComponent {
        constructor(e) {
          super(e), (this.$ = o.createRef()), (this._ = o.createRef());
        }
        render() {
          return o.createElement(
            "span",
            { ref: this.$ },
            o.createElement(
              "a",
              { ...this.props, ref: this._ },
              this.props.children
            )
          );
        }
        componentDidMount() {
          this.paint();
        }
        getSnapshotBeforeUpdate() {
          return this.reset(), null;
        }
        componentDidUpdate() {
          this.paint();
        }
        componentWillUnmount() {
          this.reset();
        }
        paint() {
          const e = this.$.current.appendChild(document.createElement("span"));
          Promise.resolve()
            .then(n.bind(n, 9984))
            .then(({ render: t }) => {
              null != this._.current &&
                t(e.appendChild(this._.current), function (t) {
                  try {
                    e.parentNode.replaceChild(t, e);
                  } catch (e) {}
                });
            });
        }
        reset() {
          this.$.current.replaceChild(this._.current, this.$.current.lastChild);
        }
      }
      var M = _;
      var P = () =>
          o.createElement(
            o.Fragment,
            null,
            o.createElement(
              M,
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
            o.createElement(
              M,
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
          ),
        T = n(6261);
      var j = () => {
        const { footer: e } = (0, o.useContext)(x),
          { networks: t } = e,
          { isEnabled: n } = i.githubButtons;
        return o.createElement(
          "footer",
          { className: "footer navbar-static-bottom" },
          o.createElement(
            s.Z,
            null,
            o.createElement(
              "span",
              { className: "back-to-top" },
              o.createElement(
                T.rU,
                { to: "hero", smooth: !0, duration: 1e3 },
                o.createElement("i", {
                  className: "fa fa-angle-up fa-2x",
                  "aria-hidden": "true",
                })
              )
            ),
            o.createElement(
              "div",
              { className: "social-links" },
              t &&
                t.map((e) => {
                  const { id: t, name: n, url: r } = e;
                  return o.createElement(
                    "a",
                    {
                      key: t,
                      href:
                        r || "https://github.com/cobidev/gatsby-simplefolio",
                      rel: "noopener noreferrer",
                      target: "_blank",
                      "aria-label": n,
                    },
                    o.createElement("i", {
                      className: "fa fa-" + (n || "refresh") + " fa-inverse",
                    })
                  );
                })
            ),
            o.createElement("hr", null),
            o.createElement(
              "p",
              { className: "footer__text" },
              "© ",
              new Date().getFullYear(),
              " -",
              " ",
              o.createElement(
                "a",
                {
                  href: "https://github.com/filoscoder/portfolio-web",
                  target: "_blank",
                  rel: "noopener noreferrer",
                },
                "Filoscoder"
              )
            ),
            n && o.createElement(P, null)
          )
        );
      };
      var L = () => {
          const { hero: e } = (0, o.useContext)(x),
            { title: t, name: n, subtitle: r, cta: a } = e,
            { 0: i, 1: l } = (0, o.useState)(!1),
            { 0: c, 1: u } = (0, o.useState)(!1);
          return (
            (0, o.useEffect)(() => {
              window.innerWidth > 769 ? (l(!0), u(!1)) : (u(!0), l(!1));
            }, []),
            o.createElement(
              "section",
              { id: "hero", className: "jumbotron" },
              o.createElement(
                s.Z,
                null,
                o.createElement(
                  b(),
                  {
                    left: i,
                    bottom: c,
                    duration: 1e3,
                    delay: 500,
                    distance: "30px",
                  },
                  o.createElement(
                    "h1",
                    { className: "hero-title" },
                    t || "Hi, my name is",
                    " ",
                    o.createElement(
                      "span",
                      { className: "text-color-main" },
                      n || "Your Name"
                    ),
                    o.createElement("br", null),
                    r || "I'm the Unknown Developer."
                  )
                ),
                o.createElement(
                  b(),
                  {
                    left: i,
                    bottom: c,
                    duration: 1e3,
                    delay: 1e3,
                    distance: "30px",
                  },
                  o.createElement(
                    "p",
                    { className: "hero-cta" },
                    o.createElement(
                      "span",
                      { className: "cta-btn cta-btn--hero" },
                      o.createElement(
                        T.rU,
                        { to: "about", smooth: !0, duration: 1e3 },
                        a || "Know more"
                      )
                    )
                  )
                )
              )
            )
          );
        },
        H = Object.defineProperty,
        N = Object.defineProperties,
        I = Object.getOwnPropertyDescriptors,
        R = Object.getOwnPropertySymbols,
        F = Object.prototype.hasOwnProperty,
        A = Object.prototype.propertyIsEnumerable,
        z = (e, t, n) =>
          t in e
            ? H(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        Z = (e, t) => {
          for (var n in t || (t = {})) F.call(t, n) && z(e, n, t[n]);
          if (R) for (var n of R(t)) A.call(t, n) && z(e, n, t[n]);
          return e;
        },
        B = (e, t) => N(e, I(t)),
        D = class extends o.Component {
          constructor(e) {
            super(e), (this.ref = o.createRef()), (this.state = { style: {} });
            (this.width = null),
              (this.height = null),
              (this.left = null),
              (this.top = null),
              (this.transitionTimeout = null),
              (this.updateCall = null),
              (this.element = null),
              (this.settings = Object.assign(
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
                this.props.options
              )),
              (this.reverse = this.settings.reverse ? -1 : 1),
              (this.onMouseEnter = this.onMouseEnter.bind(
                this,
                this.props.onMouseEnter
              )),
              (this.onMouseMove = this.onMouseMove.bind(
                this,
                this.props.onMouseMove
              )),
              (this.onMouseLeave = this.onMouseLeave.bind(
                this,
                this.props.onMouseLeave
              ));
          }
          componentDidMount() {
            (this.element = this.ref.current),
              setTimeout(() => {
                this.element.parentElement.querySelector(":hover") ===
                  this.element && this.onMouseEnter();
              }, 0);
          }
          componentWillUnmount() {
            clearTimeout(this.transitionTimeout),
              cancelAnimationFrame(this.updateCall);
          }
          onMouseEnter(e = () => {}, t) {
            return (
              this.updateElementPosition(),
              this.setState(
                Object.assign({}, this.state, {
                  style: B(Z({}, this.state.style), {
                    willChange: "transform",
                  }),
                })
              ),
              this.setTransition(),
              e(t)
            );
          }
          reset() {
            window.requestAnimationFrame(() => {
              this.setState(
                Object.assign({}, this.state, {
                  style: B(Z({}, this.state.style), {
                    transform: `perspective(${this.settings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
                  }),
                })
              );
            });
          }
          onMouseMove(e = () => {}, t) {
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
          }
          setTransition() {
            clearTimeout(this.transitionTimeout),
              this.setState(
                Object.assign({}, this.state, {
                  style: B(Z({}, this.state.style), {
                    transition: `${this.settings.speed}ms ${this.settings.easing}`,
                  }),
                })
              ),
              (this.transitionTimeout = setTimeout(() => {
                this.setState(
                  Object.assign({}, this.state, {
                    style: B(Z({}, this.state.style), { transition: "" }),
                  })
                );
              }, this.settings.speed));
          }
          onMouseLeave(e = () => {}, t) {
            return (
              this.setTransition(), this.settings.reset && this.reset(), e(t)
            );
          }
          getValues(e) {
            const t = (e.nativeEvent.clientX - this.left) / this.width,
              n = (e.nativeEvent.clientY - this.top) / this.height,
              r = Math.min(Math.max(t, 0), 1),
              o = Math.min(Math.max(n, 0), 1);
            return {
              tiltX: (
                this.reverse *
                (this.settings.max / 2 - r * this.settings.max)
              ).toFixed(2),
              tiltY: (
                this.reverse *
                (o * this.settings.max - this.settings.max / 2)
              ).toFixed(2),
              percentageX: 100 * r,
              percentageY: 100 * o,
            };
          }
          updateElementPosition() {
            const e = this.element.getBoundingClientRect();
            (this.width = this.element.offsetWidth),
              (this.height = this.element.offsetHeight),
              (this.left = e.left),
              (this.top = e.top);
          }
          update(e) {
            const t = this.getValues(e);
            this.setState(
              Object.assign({}, this.state, {
                style: B(Z({}, this.state.style), {
                  transform: `perspective(${
                    this.settings.perspective
                  }px) rotateX(${
                    "x" === this.settings.axis ? 0 : t.tiltY
                  }deg) rotateY(${
                    "y" === this.settings.axis ? 0 : t.tiltX
                  }deg) scale3d(${this.settings.scale}, ${
                    this.settings.scale
                  }, ${this.settings.scale})`,
                }),
              })
            ),
              (this.updateCall = null);
          }
          render() {
            const e = Object.assign({}, this.props.style, this.state.style);
            return (0, d.jsx)("div", {
              style: e,
              ref: this.ref,
              className: this.props.className,
              onMouseEnter: this.onMouseEnter,
              onMouseMove: this.onMouseMove,
              onMouseLeave: this.onMouseLeave,
              children: this.props.children,
            });
          }
        };
      var W = (e) => {
        let { filename: t, alt: n } = e;
        return o.createElement(v.StaticQuery, {
          query: "3019095435",
          render: (e) => {
            const r = e.images.edges.find((e) =>
              e.node.relativePath.includes(t)
            );
            if (!r) return null;
            const a = r.node.childImageSharp.fluid;
            return o.createElement(y.Z, { alt: n, fluid: a });
          },
        });
      };
      var $ = function () {
        const { projects: e } = (0, o.useContext)(x),
          { 0: t, 1: n } = (0, o.useState)(!1),
          { 0: r, 1: a } = (0, o.useState)(!1);
        return (
          (0, o.useEffect)(() => {
            window.innerWidth > 769 ? (n(!0), a(!1)) : (a(!0), n(!1));
          }, []),
          o.createElement(
            "section",
            { id: "projects" },
            o.createElement(
              s.Z,
              null,
              o.createElement(
                "div",
                { className: "project-wrapper" },
                o.createElement(C, { title: "Projects" }),
                e.map((e) => {
                  const {
                    title: n,
                    info: a,
                    info2: i,
                    url: s,
                    repo: l,
                    img: c,
                    id: u,
                  } = e;
                  return o.createElement(
                    p,
                    { key: u },
                    o.createElement(
                      m,
                      { lg: 4, sm: 12 },
                      o.createElement(
                        b(),
                        {
                          left: t,
                          bottom: r,
                          duration: 1e3,
                          delay: 500,
                          distance: "30px",
                        },
                        o.createElement(
                          "div",
                          { className: "project-wrapper__text" },
                          o.createElement(
                            "h3",
                            { className: "project-wrapper__text-title" },
                            n || "Project Title"
                          ),
                          o.createElement(
                            "div",
                            null,
                            o.createElement(
                              "p",
                              null,
                              a ||
                                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae."
                            ),
                            o.createElement("p", { className: "mb-4" }, i || "")
                          ),
                          s &&
                            o.createElement(
                              "a",
                              {
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "cta-btn cta-btn--hero",
                                href: s || "#!",
                              },
                              "See Live"
                            ),
                          l &&
                            o.createElement(
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
                    o.createElement(
                      m,
                      { lg: 8, sm: 12 },
                      o.createElement(
                        b(),
                        {
                          right: t,
                          bottom: r,
                          duration: 1e3,
                          delay: 1e3,
                          distance: "30px",
                        },
                        o.createElement(
                          "div",
                          { className: "project-wrapper__image" },
                          o.createElement(
                            "a",
                            {
                              href: s || l || "#!",
                              target: "_blank",
                              "aria-label": "Project Link",
                              rel: "noopener noreferrer",
                            },
                            o.createElement(
                              D,
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
                              o.createElement(
                                "div",
                                {
                                  "data-tilt": !0,
                                  className: "thumbnail rounded",
                                },
                                o.createElement(W, { alt: n, filename: c })
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
      var V = function () {
        const { 0: e, 1: t } = (0, o.useState)({}),
          { 0: n, 1: r } = (0, o.useState)({}),
          { 0: s, 1: l } = (0, o.useState)([]),
          { 0: c, 1: u } = (0, o.useState)({}),
          { 0: d, 1: f } = (0, o.useState)({});
        return (
          (0, o.useEffect)(() => {
            t({ ...i.oM }),
              r({ ...i.QL }),
              l((0, a.Z)(i.nD)),
              u({ ...i.Yf }),
              f({ ...i.a5 });
          }, []),
          o.createElement(
            S,
            {
              value: { hero: e, about: n, projects: s, contact: c, footer: d },
            },
            o.createElement(L, null),
            o.createElement(k, null),
            o.createElement($, null),
            o.createElement(O, null),
            o.createElement(j, null)
          )
        );
      };
      function q() {
        const { title: e, lang: t, description: n } = i.headData;
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            r.q,
            {
              title: e,
              meta: [
                { property: "og:title", content: e },
                { property: "og:type", content: "website" },
                { property: "og:description", content: n },
                {
                  property: "og:image",
                  content:
                    "https://filoscoder.netlify.app/static/c80f7757ad076ae146f5038df44646aa/89f4f/profile.jpg",
                },
              ],
            },
            o.createElement("meta", { charSet: "utf-8" }),
            o.createElement("title", null, e),
            o.createElement("html", { lang: t || "en" }),
            o.createElement("meta", { name: "description", content: n })
          ),
          o.createElement(V, null)
        );
      }
    },
    9984: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          render: function () {
            return P;
          },
        });
      var r = window.document,
        o = window.Math,
        a = window.HTMLElement,
        i = window.XMLHttpRequest,
        s = function (e, t) {
          for (var n = 0, r = e.length; n < r; n++) t(e[n]);
        },
        l = function (e) {
          return function (t, n, r) {
            var o = e.createElement(t);
            if (null != n)
              for (var a in n) {
                var i = n[a];
                null != i && (null != o[a] ? (o[a] = i) : o.setAttribute(a, i));
              }
            return (
              null != r &&
                s(r, function (t) {
                  o.appendChild("string" == typeof t ? e.createTextNode(t) : t);
                }),
              o
            );
          };
        },
        c = l(r),
        u = function (e, t) {
          return {}.hasOwnProperty.call(e, t);
        },
        d = function (e) {
          return ("" + e).toLowerCase();
        },
        f = "github.com",
        p = "https://api." + f,
        h = i && "prototype" in i && "withCredentials" in i.prototype,
        m =
          h &&
          a &&
          "attachShadow" in a.prototype &&
          !("prototype" in a.prototype.attachShadow),
        g = function (e, t, n) {
          e.addEventListener
            ? e.addEventListener(t, n, !1)
            : e.attachEvent("on" + t, n);
        },
        b = function (e, t, n) {
          e.removeEventListener
            ? e.removeEventListener(t, n, !1)
            : e.detachEvent("on" + t, n);
        },
        v = {
          light:
            ".btn:focus-visible,.social-count:focus-visible{outline:2px solid #0969da;outline-offset:-2px}.btn{color:#24292f;background-color:#ebf0f4;border-color:#ccd1d5;border-color:rgba(31,35,40,.15);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f6f8fa'/%3e%3cstop offset='90%25' stop-color='%23ebf0f4'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #f6f8fa, #ebf0f4 90%);background-image:linear-gradient(180deg, #f6f8fa, #ebf0f4 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF6F8FA', endColorstr='#FFEAEFF3')}:root .btn{filter:none}.btn:hover,.btn:focus{background-color:#e9ebef;background-position:0 -0.5em;border-color:#cbcdd1;border-color:rgba(31,35,40,.15);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f3f4f6'/%3e%3cstop offset='90%25' stop-color='%23e9ebef'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #f3f4f6, #e9ebef 90%);background-image:linear-gradient(180deg, #f3f4f6, #e9ebef 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF3F4F6', endColorstr='#FFE8EAEE')}:root .btn:hover,:root .btn:focus{filter:none}.btn:active{background-color:#e5e9ed;border-color:#c7cbcf;border-color:rgba(31,35,40,.15);background-image:none;filter:none}.social-count{color:#24292f;background-color:#fff;border-color:#dddedf;border-color:rgba(31,35,40,.15)}.social-count:hover,.social-count:focus{color:#0969da}.octicon-heart{color:#bf3989}",
          light_high_contrast:
            ".btn:focus-visible,.social-count:focus-visible{outline:2px solid #0349b4;outline-offset:-2px}.btn{color:#0e1116;background-color:#e7ecf0;border-color:#2f3237;border-color:rgba(1,4,9,.8);background-image:none;filter:none}.btn:hover,.btn:focus{background-color:#c4cdd5;background-position:0 -0.5em;border-color:#282c32;border-color:rgba(1,4,9,.8);background-image:none;filter:none}.btn:active{background-color:#d8dde1;border-color:#2c2f34;border-color:rgba(1,4,9,.8)}.social-count{color:#0e1116;background-color:#fff;border-color:#34363a;border-color:rgba(1,4,9,.8)}.social-count:hover,.social-count:focus{color:#0349b4}.octicon-heart{color:#971368}",
          dark: ".btn:focus-visible,.social-count:focus-visible{outline:2px solid #2f81f7;outline-offset:-2px}.btn{color:#c9d1d9;background-color:#1a1e23;border-color:#2f3439;border-color:rgba(240,246,252,.1);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%2321262d'/%3e%3cstop offset='90%25' stop-color='%231a1e23'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #21262d, #1a1e23 90%);background-image:linear-gradient(180deg, #21262d, #1a1e23 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF21262D', endColorstr='#FF191D22')}:root .btn{filter:none}.btn:hover,.btn:focus{background-color:#292e33;background-position:0 -0.5em;border-color:#8b949e;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%2330363d'/%3e%3cstop offset='90%25' stop-color='%23292e33'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #30363d, #292e33 90%);background-image:linear-gradient(180deg, #30363d, #292e33 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF30363D', endColorstr='#FF282D32')}:root .btn:hover,:root .btn:focus{filter:none}.btn:active{background-color:#161719;border-color:#8b949e;background-image:none;filter:none}.social-count{color:#c9d1d9;background-color:#0d1117;border-color:#24282e;border-color:rgba(240,246,252,.1)}.social-count:hover,.social-count:focus{color:#2f81f7}.octicon-heart{color:#db61a2}",
          dark_dimmed:
            ".btn:focus-visible,.social-count:focus-visible{outline:2px solid #539bf5;outline-offset:-2px}.btn{color:#adbac7;background-color:#30363d;border-color:#40464e;border-color:rgba(205,217,229,.1);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23373e47'/%3e%3cstop offset='90%25' stop-color='%2330363d'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #373e47, #30363d 90%);background-image:linear-gradient(180deg, #373e47, #30363d 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF373E47', endColorstr='#FF2F353C')}:root .btn{filter:none}.btn:hover,.btn:focus{background-color:#3c444d;background-position:0 -0.5em;border-color:#768390;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23444c56'/%3e%3cstop offset='90%25' stop-color='%233c444d'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #444c56, #3c444d 90%);background-image:linear-gradient(180deg, #444c56, #3c444d 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF444C56', endColorstr='#FF3B434C')}:root .btn:hover,:root .btn:focus{filter:none}.btn:active{background-color:#2e3031;border-color:#768390;background-image:none;filter:none}.social-count{color:#adbac7;background-color:#22272e;border-color:#333940;border-color:rgba(205,217,229,.1)}.social-count:hover,.social-count:focus{color:#539bf5}.octicon-heart{color:#c96198}",
          dark_high_contrast:
            ".btn:focus-visible,.social-count:focus-visible{outline:2px solid #71b7ff;outline-offset:-2px}.btn{color:#f0f3f6;background-color:#272b33;border-color:#7a828e;background-image:none;filter:none}.btn:hover,.btn:focus{background-color:#4a515b;background-position:0 -0.5em;border-color:#bdc4cc;background-image:none;filter:none}.btn:active{background-color:#1d1d1f;border-color:#bdc4cc}.social-count{color:#f0f3f6;background-color:#0a0c10;border-color:#7a828e}.social-count:hover,.social-count:focus{color:#71b7ff}.octicon-heart{color:#ef6eb1}",
        },
        y = function (e, t) {
          return (
            "@media(prefers-color-scheme:" + e + "){" + v[u(v, t) ? t : e] + "}"
          );
        },
        w = function (e) {
          if (null == e) return v.light;
          if (u(v, e)) return v[e];
          var t = (function (e, t, n, r) {
            null == t && (t = "&"),
              null == n && (n = "="),
              null == r && (r = window.decodeURIComponent);
            var o = {};
            return (
              s(e.split(t), function (e) {
                if ("" !== e) {
                  var t = e.split(n);
                  o[r(t[0])] = null != t[1] ? r(t.slice(1).join(n)) : void 0;
                }
              }),
              o
            );
          })(e, ";", ":", function (e) {
            return e.replace(/^[ \t\n\f\r]+|[ \t\n\f\r]+$/g, "");
          });
          return (
            v[u(v, t["no-preference"]) ? t["no-preference"] : "light"] +
            y("light", t.light) +
            y("dark", t.dark)
          );
        },
        E = {
          "comment-discussion": {
            heights: {
              16: {
                width: 16,
                path: '<path d="M1.75 1h8.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 10.25 10H7.061l-2.574 2.573A1.458 1.458 0 0 1 2 11.543V10h-.25A1.75 1.75 0 0 1 0 8.25v-5.5C0 1.784.784 1 1.75 1ZM1.5 2.75v5.5c0 .138.112.25.25.25h1a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h3.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Zm13 2a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 14.25 12H14v1.543a1.458 1.458 0 0 1-2.487 1.03L9.22 12.28a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l2.22 2.22v-2.19a.75.75 0 0 1 .75-.75h1a.25.25 0 0 0 .25-.25Z"></path>',
              },
            },
          },
          download: {
            heights: {
              16: {
                width: 16,
                path: '<path d="M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z"></path><path d="M7.25 7.689V2a.75.75 0 0 1 1.5 0v5.689l1.97-1.969a.749.749 0 1 1 1.06 1.06l-3.25 3.25a.749.749 0 0 1-1.06 0L4.22 6.78a.749.749 0 1 1 1.06-1.06l1.97 1.969Z"></path>',
              },
            },
          },
          eye: {
            heights: {
              16: {
                width: 16,
                path: '<path d="M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717ZM8 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z"></path>',
              },
            },
          },
          heart: {
            heights: {
              16: {
                width: 16,
                path: '<path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"></path>',
              },
            },
          },
          "issue-opened": {
            heights: {
              16: {
                width: 16,
                path: '<path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>',
              },
            },
          },
          "mark-github": {
            heights: {
              16: {
                width: 16,
                path: '<path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>',
              },
            },
          },
          package: {
            heights: {
              16: {
                width: 16,
                path: '<path d="m8.878.392 5.25 3.045c.54.314.872.89.872 1.514v6.098a1.75 1.75 0 0 1-.872 1.514l-5.25 3.045a1.75 1.75 0 0 1-1.756 0l-5.25-3.045A1.75 1.75 0 0 1 1 11.049V4.951c0-.624.332-1.201.872-1.514L7.122.392a1.75 1.75 0 0 1 1.756 0ZM7.875 1.69l-4.63 2.685L8 7.133l4.755-2.758-4.63-2.685a.248.248 0 0 0-.25 0ZM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432Zm6.25 8.271 4.625-2.683a.25.25 0 0 0 .125-.216V5.677L8.75 8.432Z"></path>',
              },
            },
          },
          play: {
            heights: {
              16: {
                width: 16,
                path: '<path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path>',
              },
            },
          },
          "repo-forked": {
            heights: {
              16: {
                width: 16,
                path: '<path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>',
              },
            },
          },
          "repo-template": {
            heights: {
              16: {
                width: 16,
                path: '<path d="M13.25 8a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-.75a.75.75 0 0 1 0-1.5h.75v-.25a.75.75 0 0 1 .75-.75ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2ZM2.75 8a.75.75 0 0 1 .75.75v.268c.083-.012.166-.018.25-.018h.5a.75.75 0 0 1 0 1.5h-.5a.25.25 0 0 0-.25.25v.75c0 .28.114.532.3.714a.75.75 0 1 1-1.05 1.072A2.495 2.495 0 0 1 2 11.5V8.75A.75.75 0 0 1 2.75 8ZM11 .75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V1.5h-.75A.75.75 0 0 1 11 .75Zm-5 0A.75.75 0 0 1 6.75 0h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 6 .75Zm0 9A.75.75 0 0 1 6.75 9h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 6 9.75ZM4.992.662a.75.75 0 0 1-.636.848c-.436.063-.783.41-.846.846a.751.751 0 0 1-1.485-.212A2.501 2.501 0 0 1 4.144.025a.75.75 0 0 1 .848.637ZM2.75 4a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 2.75 4Zm10.5 0a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Z"></path>',
              },
            },
          },
          star: {
            heights: {
              16: {
                width: 16,
                path: '<path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>',
              },
            },
          },
        },
        S = function (e, t) {
          (e = d(e).replace(/^octicon-/, "")), u(E, e) || (e = "mark-github");
          var n = t >= 24 && 24 in E[e].heights ? 24 : 16,
            r = E[e].heights[n];
          return (
            '<svg viewBox="0 0 ' +
            r.width +
            " " +
            n +
            '" width="' +
            (t * r.width) / n +
            '" height="' +
            t +
            '" class="octicon octicon-' +
            e +
            '" aria-hidden="true">' +
            r.path +
            "</svg>"
          );
        },
        x = {},
        C = function (e, t) {
          var n = x[e] || (x[e] = []);
          if (!(n.push(t) > 1)) {
            var r = (function (e) {
              var t;
              return function () {
                t || ((t = 1), e.apply(this, arguments));
              };
            })(function () {
              for (delete x[e]; (t = n.shift()); ) t.apply(null, arguments);
            });
            if (h) {
              var o = new i();
              g(o, "abort", r),
                g(o, "error", r),
                g(o, "load", function () {
                  var e;
                  try {
                    e = JSON.parse(this.responseText);
                  } catch (t) {
                    return void r(t);
                  }
                  r(200 !== this.status, e);
                }),
                o.open("GET", e),
                o.send();
            } else {
              var a = this || window;
              a._ = function (e) {
                (a._ = null), r(200 !== e.meta.status, e.data);
              };
              var s = l(a.document)("script", {
                  async: !0,
                  src: e + (-1 !== e.indexOf("?") ? "&" : "?") + "callback=_",
                }),
                c = function () {
                  a._ && a._({ meta: {} });
                };
              g(s, "load", c),
                g(s, "error", c),
                (function (e, t, n) {
                  if (null != e.readyState) {
                    var r = "readystatechange",
                      o = function () {
                        if (t.test(e.readyState))
                          return b(e, r, o), n.apply(this, arguments);
                      };
                    g(e, r, o);
                  }
                })(s, /de|m/, c),
                a.document.getElementsByTagName("head")[0].appendChild(s);
            }
          }
        },
        k = function (e, t, n) {
          var r = l(e.ownerDocument),
            o = e.appendChild(r("style", { type: "text/css" })),
            a =
              "body{margin:0}a{text-decoration:none;outline:0}.widget{display:inline-block;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;font-size:0;line-height:0;white-space:nowrap}.btn,.social-count{position:relative;display:inline-block;display:inline-flex;height:14px;padding:2px 5px;font-size:11px;font-weight:600;line-height:14px;vertical-align:bottom;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-repeat:repeat-x;background-position:-1px -1px;background-size:110% 110%;border:1px solid}.btn{border-radius:.25em}.btn:not(:last-child){border-radius:.25em 0 0 .25em}.social-count{border-left:0;border-radius:0 .25em .25em 0}.widget-lg .btn,.widget-lg .social-count{height:16px;padding:5px 10px;font-size:12px;line-height:16px}.octicon{display:inline-block;vertical-align:text-top;fill:currentColor;overflow:visible}" +
              w(t["data-color-scheme"]);
          o.styleSheet
            ? (o.styleSheet.cssText = a)
            : o.appendChild(e.ownerDocument.createTextNode(a));
          var i = "large" === d(t["data-size"]),
            s = r(
              "a",
              {
                className: "btn",
                href: t.href,
                rel: "noopener",
                target: "_blank",
                title: t.title || void 0,
                "aria-label": t["aria-label"] || void 0,
                innerHTML: S(t["data-icon"], i ? 16 : 14) + "&nbsp;",
              },
              [r("span", {}, [t["data-text"] || ""])]
            ),
            c = e.appendChild(
              r("div", { className: "widget" + (i ? " widget-lg" : "") }, [s])
            ),
            u = s.hostname.replace(/\.$/, "");
          if (("." + u).substring(u.length - 10) !== "." + f)
            return s.removeAttribute("href"), void n(c);
          var h = (" /" + s.pathname).split(/\/+/);
          if (
            ((((u === f || u === "gist." + f) && "archive" === h[3]) ||
              (u === f &&
                "releases" === h[3] &&
                ("download" === h[4] ||
                  ("latest" === h[4] && "download" === h[5]))) ||
              u === "codeload." + f) &&
              (s.target = "_top"),
            "true" === d(t["data-show-count"]) &&
              u === f &&
              "marketplace" !== h[1] &&
              "sponsors" !== h[1] &&
              "orgs" !== h[1] &&
              "users" !== h[1] &&
              "-" !== h[1])
          ) {
            var m, g;
            if (!h[2] && h[1]) (g = "followers"), (m = "?tab=followers");
            else if (!h[3] && h[2])
              (g = "stargazers_count"), (m = "/stargazers");
            else if (h[4] || "subscription" !== h[3])
              if (h[4] || "fork" !== h[3]) {
                if ("issues" !== h[3]) return void n(c);
                (g = "open_issues_count"), (m = "/issues");
              } else (g = "forks_count"), (m = "/forks");
            else (g = "subscribers_count"), (m = "/watchers");
            var b = h[2] ? "/repos/" + h[1] + "/" + h[2] : "/users/" + h[1];
            C.call(this, p + b, function (e, t) {
              if (!e) {
                var o = t[g];
                c.appendChild(
                  r(
                    "a",
                    {
                      className: "social-count",
                      href: t.html_url + m,
                      rel: "noopener",
                      target: "_blank",
                      "aria-label":
                        o +
                        " " +
                        g
                          .replace(/_count$/, "")
                          .replace("_", " ")
                          .slice(0, o < 2 ? -1 : void 0) +
                        " on GitHub",
                    },
                    [("" + o).replace(/\B(?=(\d{3})+(?!\d))/g, ",")]
                  )
                );
              }
              n(c);
            });
          } else n(c);
        },
        O = window.devicePixelRatio || 1,
        _ = function (e) {
          return (
            (O > 1 ? o.ceil((o.round(e * O) / O) * 2) / 2 : o.ceil(e)) || 0
          );
        },
        M = function (e, t) {
          (e.style.width = t[0] + "px"), (e.style.height = t[1] + "px");
        },
        P = function (e, t) {
          if (null != e && null != t)
            if (
              (e.getAttribute &&
                (e = (function (e) {
                  var t = {
                    href: e.href,
                    title: e.title,
                    "aria-label": e.getAttribute("aria-label"),
                  };
                  return (
                    s(
                      ["icon", "color-scheme", "text", "size", "show-count"],
                      function (n) {
                        var r = "data-" + n;
                        t[r] = e.getAttribute(r);
                      }
                    ),
                    null == t["data-text"] &&
                      (t["data-text"] = e.textContent || e.innerText),
                    t
                  );
                })(e)),
              m)
            ) {
              var n = c("span");
              k(n.attachShadow({ mode: "closed" }), e, function () {
                t(n);
              });
            } else {
              var a = c("iframe", {
                src: "javascript:0",
                title: e.title || void 0,
                allowtransparency: !0,
                scrolling: "no",
                frameBorder: 0,
              });
              M(a, [0, 0]), (a.style.border = "none");
              var i = function () {
                var n,
                  s = a.contentWindow;
                try {
                  n = s.document.body;
                } catch (l) {
                  return void r.body.appendChild(a.parentNode.removeChild(a));
                }
                b(a, "load", i),
                  k.call(s, n, e, function (n) {
                    var r = (function (e) {
                      var t = e.offsetWidth,
                        n = e.offsetHeight;
                      if (e.getBoundingClientRect) {
                        var r = e.getBoundingClientRect();
                        (t = o.max(t, _(r.width))), (n = o.max(n, _(r.height)));
                      }
                      return [t, n];
                    })(n);
                    a.parentNode.removeChild(a),
                      (function (e, t, n) {
                        var r = function () {
                          return b(e, t, r), n.apply(this, arguments);
                        };
                        g(e, t, r);
                      })(a, "load", function () {
                        M(a, r);
                      }),
                      (a.src =
                        "https://unpkg.com/github-buttons@2.27.0/dist/buttons.html#" +
                        (a.name = (function (e, t, n, r) {
                          null == t && (t = "&"),
                            null == n && (n = "="),
                            null == r && (r = window.encodeURIComponent);
                          var o = [];
                          for (var a in e) {
                            var i = e[a];
                            null != i && o.push(r(a) + n + r(i));
                          }
                          return o.join(t);
                        })(e))),
                      t(a);
                  });
              };
              g(a, "load", i), r.body.appendChild(a);
            }
        };
    },
    3096: function (e, t, n) {
      var r = "Expected a function",
        o = NaN,
        a = "[object Symbol]",
        i = /^\s+|\s+$/g,
        s = /^[-+]0x[0-9a-f]+$/i,
        l = /^0b[01]+$/i,
        c = /^0o[0-7]+$/i,
        u = parseInt,
        d = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
        f = "object" == typeof self && self && self.Object === Object && self,
        p = d || f || Function("return this")(),
        h = Object.prototype.toString,
        m = Math.max,
        g = Math.min,
        b = function () {
          return p.Date.now();
        };
      function v(e, t, n) {
        var o,
          a,
          i,
          s,
          l,
          c,
          u = 0,
          d = !1,
          f = !1,
          p = !0;
        if ("function" != typeof e) throw new TypeError(r);
        function h(t) {
          var n = o,
            r = a;
          return (o = a = void 0), (u = t), (s = e.apply(r, n));
        }
        function v(e) {
          var n = e - c;
          return void 0 === c || n >= t || n < 0 || (f && e - u >= i);
        }
        function E() {
          var e = b();
          if (v(e)) return S(e);
          l = setTimeout(
            E,
            (function (e) {
              var n = t - (e - c);
              return f ? g(n, i - (e - u)) : n;
            })(e)
          );
        }
        function S(e) {
          return (l = void 0), p && o ? h(e) : ((o = a = void 0), s);
        }
        function x() {
          var e = b(),
            n = v(e);
          if (((o = arguments), (a = this), (c = e), n)) {
            if (void 0 === l)
              return (function (e) {
                return (u = e), (l = setTimeout(E, t)), d ? h(e) : s;
              })(c);
            if (f) return (l = setTimeout(E, t)), h(c);
          }
          return void 0 === l && (l = setTimeout(E, t)), s;
        }
        return (
          (t = w(t) || 0),
          y(n) &&
            ((d = !!n.leading),
            (i = (f = "maxWait" in n) ? m(w(n.maxWait) || 0, t) : i),
            (p = "trailing" in n ? !!n.trailing : p)),
          (x.cancel = function () {
            void 0 !== l && clearTimeout(l), (u = 0), (o = c = a = l = void 0);
          }),
          (x.flush = function () {
            return void 0 === l ? s : S(b());
          }),
          x
        );
      }
      function y(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t);
      }
      function w(e) {
        if ("number" == typeof e) return e;
        if (
          (function (e) {
            return (
              "symbol" == typeof e ||
              ((function (e) {
                return !!e && "object" == typeof e;
              })(e) &&
                h.call(e) == a)
            );
          })(e)
        )
          return o;
        if (y(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = y(t) ? t + "" : t;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(i, "");
        var n = l.test(e);
        return n || c.test(e) ? u(e.slice(2), n ? 2 : 8) : s.test(e) ? o : +e;
      }
      e.exports = function (e, t, n) {
        var o = !0,
          a = !0;
        if ("function" != typeof e) throw new TypeError(r);
        return (
          y(n) &&
            ((o = "leading" in n ? !!n.leading : o),
            (a = "trailing" in n ? !!n.trailing : a)),
          v(e, t, { leading: o, maxWait: t, trailing: a })
        );
      };
    },
    8477: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        o = i(n(7294)),
        a = i(n(1093));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var s = (function (e) {
        function t() {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            (function (e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
            })(
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
                return o.default.createElement(
                  "input",
                  this.props,
                  this.props.children
                );
              },
            },
          ]),
          t
        );
      })(o.default.Component);
      t.default = (0, a.default)(s);
    },
    5343: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        o = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        a = l(n(7294)),
        i = l(n(8e3)),
        s = l(n(5697));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var c = (function (e) {
        function t() {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            (function (e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
            })(
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
          o(t, [
            {
              key: "render",
              value: function () {
                var e = this,
                  t = r({}, this.props);
                return (
                  t.parentBindings && delete t.parentBindings,
                  a.default.createElement(
                    "div",
                    r({}, t, {
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
      })(a.default.Component);
      (c.propTypes = { name: s.default.string, id: s.default.string }),
        (t.default = (0, i.default)(c));
    },
    8939: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = a(n(7294)),
        o = a(n(1093));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      var s = (function (e) {
        function t() {
          var e, n, o;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
          for (var a = arguments.length, s = Array(a), l = 0; l < a; l++)
            s[l] = arguments[l];
          return (
            (n = o =
              i(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                  e,
                  [this].concat(s)
                )
              )),
            (o.render = function () {
              return r.default.createElement("a", o.props, o.props.children);
            }),
            i(o, n)
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
      })(r.default.Component);
      t.default = (0, o.default)(s);
    },
    6261: function (e, t, n) {
      "use strict";
      t.rU = void 0;
      var r = p(n(8939)),
        o = p(n(8477)),
        a = p(n(5343)),
        i = p(n(2628)),
        s = p(n(4592)),
        l = p(n(7606)),
        c = p(n(3200)),
        u = p(n(1093)),
        d = p(n(8e3)),
        f = p(n(8482));
      function p(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (t.rU = r.default),
        o.default,
        a.default,
        i.default,
        s.default,
        l.default,
        c.default,
        u.default,
        d.default,
        f.default,
        r.default,
        o.default,
        a.default,
        i.default,
        s.default,
        l.default,
        c.default,
        u.default,
        d.default,
        f.default;
    },
    8482: function (e, t, n) {
      "use strict";
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        o = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })();
      function a(e, t) {
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
      var l = n(7294),
        c = (n(3935), n(4259), n(7606)),
        u = n(2628),
        d = n(5697),
        f = n(9678),
        p = {
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
          spyThrottle: d.number,
        },
        h = {
          Scroll: function (e, t) {
            console.warn("Helpers.Scroll is deprecated since v1.7.0");
            var n = t || u,
              d = (function (t) {
                function u(e) {
                  a(this, u);
                  var t = i(
                    this,
                    (u.__proto__ || Object.getPrototypeOf(u)).call(this, e)
                  );
                  return h.call(t), (t.state = { active: !1 }), t;
                }
                return (
                  s(u, t),
                  o(u, [
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
                          c.isMounted(e) || c.mount(e, this.props.spyThrottle),
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
                        var n = r({}, this.props);
                        for (var o in p) n.hasOwnProperty(o) && delete n[o];
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
              h = function () {
                var e = this;
                (this.scrollTo = function (t, o) {
                  n.scrollTo(t, r({}, e.state, o));
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
                    var r = e.getScrollSpyContainer();
                    if (!f.isMounted() || f.isInitialized()) {
                      var o = e.props.to,
                        a = null,
                        i = 0,
                        s = 0,
                        l = 0;
                      if (r.getBoundingClientRect)
                        l = r.getBoundingClientRect().top;
                      if (!a || e.props.isDynamic) {
                        if (!(a = n.get(o))) return;
                        var u = a.getBoundingClientRect();
                        s = (i = u.top - l + t) + u.height;
                      }
                      var d = t - e.props.offset,
                        p = d >= Math.floor(i) && d < Math.floor(s),
                        h = d < Math.floor(i) || d >= Math.floor(s),
                        m = n.getActiveLink();
                      return h
                        ? (o === m && n.setActiveLink(void 0),
                          e.props.hashSpy &&
                            f.getHash() === o &&
                            f.changeHash(),
                          e.props.spy &&
                            e.state.active &&
                            (e.setState({ active: !1 }),
                            e.props.onSetInactive && e.props.onSetInactive()),
                          c.updateStates())
                        : p && m !== o
                        ? (n.setActiveLink(o),
                          e.props.hashSpy && f.changeHash(o),
                          e.props.spy &&
                            (e.setState({ active: !0 }),
                            e.props.onSetActive && e.props.onSetActive(o)),
                          c.updateStates())
                        : void 0;
                    }
                  });
              };
            return (d.propTypes = p), (d.defaultProps = { offset: 0 }), d;
          },
          Element: function (e) {
            console.warn("Helpers.Element is deprecated since v1.7.0");
            var t = (function (t) {
              function n(e) {
                a(this, n);
                var t = i(
                  this,
                  (n.__proto__ || Object.getPrototypeOf(n)).call(this, e)
                );
                return (t.childBindings = { domNode: null }), t;
              }
              return (
                s(n, t),
                o(n, [
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
                        r({}, this.props, {
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
      e.exports = h;
    },
    3200: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        o = (s(n(4259)), s(n(9765))),
        a = s(n(140)),
        i = s(n(4592));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var l = function (e) {
          return o.default[e.smooth] || o.default.defaultEasing;
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
          if (t && t !== document && t !== document.body) return t.scrollLeft;
          var n = void 0 !== window.pageXOffset,
            r = "CSS1Compat" === (document.compatMode || "");
          return n
            ? window.pageXOffset
            : r
            ? document.documentElement.scrollLeft
            : document.body.scrollLeft;
        },
        d = function (e) {
          var t = e.data.containerElement;
          if (t && t !== document && t !== document.body) return t.scrollTop;
          var n = void 0 !== window.pageXOffset,
            r = "CSS1Compat" === (document.compatMode || "");
          return n
            ? window.pageYOffset
            : r
            ? document.documentElement.scrollTop
            : document.body.scrollTop;
        },
        f = function e(t, n, r) {
          var o = n.data;
          if (n.ignoreCancelEvents || !o.cancel)
            if (
              ((o.delta = Math.round(o.targetPosition - o.startPosition)),
              null === o.start && (o.start = r),
              (o.progress = r - o.start),
              (o.percent =
                o.progress >= o.duration ? 1 : t(o.progress / o.duration)),
              (o.currentPosition =
                o.startPosition + Math.ceil(o.delta * o.percent)),
              o.containerElement &&
              o.containerElement !== document &&
              o.containerElement !== document.body
                ? n.horizontal
                  ? (o.containerElement.scrollLeft = o.currentPosition)
                  : (o.containerElement.scrollTop = o.currentPosition)
                : n.horizontal
                ? window.scrollTo(o.currentPosition, 0)
                : window.scrollTo(0, o.currentPosition),
              o.percent < 1)
            ) {
              var a = e.bind(null, t, n);
              c.call(window, a);
            } else
              i.default.registered.end &&
                i.default.registered.end(o.to, o.target, o.currentPosition);
          else
            i.default.registered.end &&
              i.default.registered.end(o.to, o.target, o.currentPositionY);
        },
        p = function (e) {
          e.data.containerElement = e
            ? e.containerId
              ? document.getElementById(e.containerId)
              : e.container && e.container.nodeType
              ? e.container
              : document
            : null;
        },
        h = function (e, t, n, r) {
          if (
            ((t.data = t.data || {
              currentPosition: 0,
              startPosition: 0,
              targetPosition: 0,
              progress: 0,
              duration: 0,
              cancel: !1,
              target: null,
              containerElement: null,
              to: null,
              start: null,
              delta: null,
              percent: null,
              delayTimeout: null,
            }),
            window.clearTimeout(t.data.delayTimeout),
            a.default.subscribe(function () {
              t.data.cancel = !0;
            }),
            p(t),
            (t.data.start = null),
            (t.data.cancel = !1),
            (t.data.startPosition = t.horizontal ? u(t) : d(t)),
            (t.data.targetPosition = t.absolute ? e : e + t.data.startPosition),
            t.data.startPosition !== t.data.targetPosition)
          ) {
            var o;
            (t.data.delta = Math.round(
              t.data.targetPosition - t.data.startPosition
            )),
              (t.data.duration = (
                "function" == typeof (o = t.duration)
                  ? o
                  : function () {
                      return o;
                    }
              )(t.data.delta)),
              (t.data.duration = isNaN(parseFloat(t.data.duration))
                ? 1e3
                : parseFloat(t.data.duration)),
              (t.data.to = n),
              (t.data.target = r);
            var s = l(t),
              h = f.bind(null, s, t);
            t && t.delay > 0
              ? (t.data.delayTimeout = window.setTimeout(function () {
                  i.default.registered.begin &&
                    i.default.registered.begin(t.data.to, t.data.target),
                    c.call(window, h);
                }, t.delay))
              : (i.default.registered.begin &&
                  i.default.registered.begin(t.data.to, t.data.target),
                c.call(window, h));
          } else
            i.default.registered.end &&
              i.default.registered.end(
                t.data.to,
                t.data.target,
                t.data.currentPosition
              );
        },
        m = function (e) {
          return (
            ((e = r({}, e)).data = e.data || {
              currentPosition: 0,
              startPosition: 0,
              targetPosition: 0,
              progress: 0,
              duration: 0,
              cancel: !1,
              target: null,
              containerElement: null,
              to: null,
              start: null,
              delta: null,
              percent: null,
              delayTimeout: null,
            }),
            (e.absolute = !0),
            e
          );
        };
      t.default = {
        animateTopScroll: h,
        getAnimationType: l,
        scrollToTop: function (e) {
          h(0, m(e));
        },
        scrollToBottom: function (e) {
          (e = m(e)),
            p(e),
            h(
              e.horizontal
                ? (function (e) {
                    var t = e.data.containerElement;
                    if (t && t !== document && t !== document.body)
                      return t.scrollWidth - t.offsetWidth;
                    var n = document.body,
                      r = document.documentElement;
                    return Math.max(
                      n.scrollWidth,
                      n.offsetWidth,
                      r.clientWidth,
                      r.scrollWidth,
                      r.offsetWidth
                    );
                  })(e)
                : (function (e) {
                    var t = e.data.containerElement;
                    if (t && t !== document && t !== document.body)
                      return t.scrollHeight - t.offsetHeight;
                    var n = document.body,
                      r = document.documentElement;
                    return Math.max(
                      n.scrollHeight,
                      n.offsetHeight,
                      r.clientHeight,
                      r.scrollHeight,
                      r.offsetHeight
                    );
                  })(e),
              e
            );
        },
        scrollTo: function (e, t) {
          h(e, m(t));
        },
        scrollMore: function (e, t) {
          (t = m(t)), p(t);
          var n = t.horizontal ? u(t) : d(t);
          h(e + n, t);
        },
      };
    },
    140: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(5236),
        o = ["mousedown", "mousewheel", "touchmove", "keydown"];
      t.default = {
        subscribe: function (e) {
          return (
            "undefined" != typeof document &&
            o.forEach(function (t) {
              return (0, r.addPassiveEventListener)(document, t, e);
            })
          );
        },
      };
    },
    5236: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      (t.addPassiveEventListener = function (e, t, n) {
        var r = (function () {
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
        e.addEventListener(t, n, !!r && { passive: !0 });
      }),
        (t.removePassiveEventListener = function (e, t, n) {
          e.removeEventListener(t, n);
        });
    },
    8e3: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        o = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        a = l(n(7294)),
        i = (l(n(3935)), l(n(2628))),
        s = l(n(5697));
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
            o(n, [
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
                  return a.default.createElement(
                    e,
                    r({}, this.props, { parentBindings: this.childBindings })
                  );
                },
              },
            ]),
            n
          );
        })(a.default.Component);
        return (
          (t.propTypes = { name: s.default.string, id: s.default.string }), t
        );
      };
    },
    4592: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        registered: {},
        scrollEvent: {
          register: function (e, t) {
            n.registered[e] = t;
          },
          remove: function (e) {
            n.registered[e] = null;
          },
        },
      };
      t.default = n;
    },
    9678: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      n(5236);
      var r,
        o = n(4259),
        a = (r = o) && r.__esModule ? r : { default: r };
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
            var r = this.containers[e] || document;
            n.scrollTo(e, { container: r });
          }
        },
        getHash: function () {
          return a.default.getHash();
        },
        changeHash: function (e, t) {
          this.isInitialized() &&
            a.default.getHash() !== e &&
            a.default.updateHash(e, t);
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
    1093: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        o = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        a = u(n(7294)),
        i = u(n(7606)),
        s = u(n(2628)),
        l = u(n(5697)),
        c = u(n(9678));
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var d = {
        to: l.default.string.isRequired,
        containerId: l.default.string,
        container: l.default.object,
        activeClass: l.default.string,
        activeStyle: l.default.object,
        spy: l.default.bool,
        horizontal: l.default.bool,
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
        saveHashHistory: l.default.bool,
        spyThrottle: l.default.number,
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
              o(s, [
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
                      i.default.isMounted(e) ||
                        i.default.mount(e, this.props.spyThrottle),
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
                    var n = {};
                    n =
                      this.state && this.state.active
                        ? r({}, this.props.style, this.props.activeStyle)
                        : r({}, this.props.style);
                    var o = r({}, this.props);
                    for (var i in d) o.hasOwnProperty(i) && delete o[i];
                    return (
                      (o.className = t),
                      (o.style = n),
                      (o.onClick = this.handleClick),
                      a.default.createElement(e, o)
                    );
                  },
                },
              ]),
              s
            );
          })(a.default.PureComponent),
          u = function () {
            var e = this;
            (this.scrollTo = function (t, o) {
              n.scrollTo(t, r({}, e.state, o));
            }),
              (this.handleClick = function (t) {
                e.props.onClick && e.props.onClick(t),
                  t.stopPropagation && t.stopPropagation(),
                  t.preventDefault && t.preventDefault(),
                  e.scrollTo(e.props.to, e.props);
              }),
              (this.spyHandler = function (t, r) {
                var o = e.getScrollSpyContainer();
                if (!c.default.isMounted() || c.default.isInitialized()) {
                  var a = e.props.horizontal,
                    i = e.props.to,
                    s = null,
                    l = void 0,
                    u = void 0;
                  if (a) {
                    var d = 0,
                      f = 0,
                      p = 0;
                    if (o.getBoundingClientRect)
                      p = o.getBoundingClientRect().left;
                    if (!s || e.props.isDynamic) {
                      if (!(s = n.get(i))) return;
                      var h = s.getBoundingClientRect();
                      f = (d = h.left - p + t) + h.width;
                    }
                    var m = t - e.props.offset;
                    (l = m >= Math.floor(d) && m < Math.floor(f)),
                      (u = m < Math.floor(d) || m >= Math.floor(f));
                  } else {
                    var g = 0,
                      b = 0,
                      v = 0;
                    if (o.getBoundingClientRect)
                      v = o.getBoundingClientRect().top;
                    if (!s || e.props.isDynamic) {
                      if (!(s = n.get(i))) return;
                      var y = s.getBoundingClientRect();
                      b = (g = y.top - v + r) + y.height;
                    }
                    var w = r - e.props.offset;
                    (l = w >= Math.floor(g) && w < Math.floor(b)),
                      (u = w < Math.floor(g) || w >= Math.floor(b));
                  }
                  var E = n.getActiveLink();
                  if (u) {
                    if (
                      (i === E && n.setActiveLink(void 0),
                      e.props.hashSpy && c.default.getHash() === i)
                    ) {
                      var S = e.props.saveHashHistory,
                        x = void 0 !== S && S;
                      c.default.changeHash("", x);
                    }
                    e.props.spy &&
                      e.state.active &&
                      (e.setState({ active: !1 }),
                      e.props.onSetInactive && e.props.onSetInactive(i, s));
                  }
                  if (l && (E !== i || !1 === e.state.active)) {
                    n.setActiveLink(i);
                    var C = e.props.saveHashHistory,
                      k = void 0 !== C && C;
                    e.props.hashSpy && c.default.changeHash(i, k),
                      e.props.spy &&
                        (e.setState({ active: !0 }),
                        e.props.onSetActive && e.props.onSetActive(i, s));
                  }
                }
              });
          };
        return (l.propTypes = d), (l.defaultProps = { offset: 0 }), l;
      };
    },
    7606: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r,
        o = n(3096),
        a = (r = o) && r.__esModule ? r : { default: r },
        i = n(5236);
      var s = {
        spyCallbacks: [],
        spySetState: [],
        scrollSpyContainers: [],
        mount: function (e, t) {
          if (e) {
            var n = (function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 66;
              return (0, a.default)(e, t);
            })(function (t) {
              s.scrollHandler(e);
            }, t);
            s.scrollSpyContainers.push(e),
              (0, i.addPassiveEventListener)(e, "scroll", n);
          }
        },
        isMounted: function (e) {
          return -1 !== s.scrollSpyContainers.indexOf(e);
        },
        currentPositionX: function (e) {
          if (e === document) {
            var t = void 0 !== window.pageYOffset,
              n = "CSS1Compat" === (document.compatMode || "");
            return t
              ? window.pageXOffset
              : n
              ? document.documentElement.scrollLeft
              : document.body.scrollLeft;
          }
          return e.scrollLeft;
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
            return t(s.currentPositionX(e), s.currentPositionY(e));
          });
        },
        addStateHandler: function (e) {
          s.spySetState.push(e);
        },
        addSpyHandler: function (e, t) {
          var n = s.scrollSpyContainers[s.scrollSpyContainers.indexOf(t)];
          n.spyCallbacks || (n.spyCallbacks = []),
            n.spyCallbacks.push(e),
            e(s.currentPositionX(t), s.currentPositionY(t));
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
              e.spyCallbacks.indexOf(t) > -1 &&
              e.spyCallbacks.splice(e.spyCallbacks.indexOf(t), 1)
            );
          }),
            s.spySetState &&
              s.spySetState.length &&
              s.spySetState.indexOf(e) > -1 &&
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
    2628: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        o = s(n(4259)),
        a = s(n(3200)),
        i = s(n(4592));
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
            var s = (t = r({}, t, { absolute: !1 })).containerId,
              l = t.container,
              c = void 0;
            (c = s
              ? document.getElementById(s)
              : l && l.nodeType
              ? l
              : document),
              (t.absolute = !0);
            var u = t.horizontal,
              d = o.default.scrollOffset(c, n, u) + (t.offset || 0);
            if (!t.smooth)
              return (
                i.default.registered.begin && i.default.registered.begin(e, n),
                c === document
                  ? t.horizontal
                    ? window.scrollTo(d, 0)
                    : window.scrollTo(0, d)
                  : (c.scrollTop = d),
                void (
                  i.default.registered.end && i.default.registered.end(e, n)
                )
              );
            a.default.animateTopScroll(d, t, e, n);
          } else console.warn("target Element not found");
        },
      };
    },
    9765: function (e, t) {
      "use strict";
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
    4259: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = function (e, t) {
        for (var n = e.offsetTop, r = e.offsetParent; r && !t(r); )
          (n += r.offsetTop), (r = r.offsetParent);
        return { offsetTop: n, offsetParent: r };
      };
      t.default = {
        updateHash: function (e, t) {
          var n = 0 === e.indexOf("#") ? e.substring(1) : e,
            r = n ? "#" + n : "",
            o = window && window.location,
            a = r ? o.pathname + o.search + r : o.pathname + o.search;
          t
            ? history.pushState(history.state, "", a)
            : history.replaceState(history.state, "", a);
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
        scrollOffset: function (e, t, r) {
          if (r)
            return e === document
              ? t.getBoundingClientRect().left +
                  (window.scrollX || window.pageXOffset)
              : "static" !== getComputedStyle(e).position
              ? t.offsetLeft
              : t.offsetLeft - e.offsetLeft;
          if (e === document)
            return (
              t.getBoundingClientRect().top +
              (window.scrollY || window.pageYOffset)
            );
          if ("static" !== getComputedStyle(e).position) {
            if (t.offsetParent !== e) {
              var o = n(t, function (t) {
                  return t === e || t === document;
                }),
                a = o.offsetTop;
              if (o.offsetParent !== e)
                throw new Error(
                  "Seems containerElement is not an ancestor of the Element"
                );
              return a;
            }
            return t.offsetTop;
          }
          if (t.offsetParent === e.offsetParent)
            return t.offsetTop - e.offsetTop;
          var i = function (e) {
            return e === document;
          };
          return n(t, i).offsetTop - n(e, i).offsetTop;
        },
      };
    },
    434: function (e) {
      function t() {
        return (
          (e.exports = t =
            Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          t.apply(this, arguments)
        );
      }
      (e.exports = t),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    7071: function (e) {
      (e.exports = function (e, t) {
        if (null == e) return {};
        var n,
          r,
          o = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++)
          (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o;
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
  },
]);
//# sourceMappingURL=component---src-pages-index-js-f9ce50664eb2b6af2c69.js.map
