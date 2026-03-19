var Gg = t => {
    throw TypeError(t)
}
;
var fd = (t, e, n) => e.has(t) || Gg("Cannot " + n);
var R = (t, e, n) => (fd(t, e, "read from private field"),
n ? n.call(t) : e.get(t))
  , ce = (t, e, n) => e.has(t) ? Gg("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n)
  , Z = (t, e, n, i) => (fd(t, e, "write to private field"),
i ? i.call(t, n) : e.set(t, n),
n)
  , Ce = (t, e, n) => (fd(t, e, "access private method"),
n);
var hl = (t, e, n, i) => ({
    set _(o) {
        Z(t, e, o, n)
    },
    get _() {
        return R(t, e, i)
    }
});
function RC(t, e) {
    for (var n = 0; n < e.length; n++) {
        const i = e[n];
        if (typeof i != "string" && !Array.isArray(i)) {
            for (const o in i)
                if (o !== "default" && !(o in t)) {
                    const l = Object.getOwnPropertyDescriptor(i, o);
                    l && Object.defineProperty(t, o, l.get ? l : {
                        enumerable: !0,
                        get: () => i[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        i(o);
    new MutationObserver(o => {
        for (const l of o)
            if (l.type === "childList")
                for (const u of l.addedNodes)
                    u.tagName === "LINK" && u.rel === "modulepreload" && i(u)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const l = {};
        return o.integrity && (l.integrity = o.integrity),
        o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? l.credentials = "include" : o.crossOrigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin",
        l
    }
    function i(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const l = n(o);
        fetch(o.href, l)
    }
}
)();
function $0(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
var hd = {
    exports: {}
}
  , go = {}
  , pd = {
    exports: {}
}
  , be = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yg;
function AC() {
    if (Yg)
        return be;
    Yg = 1;
    var t = Symbol.for("react.element")
      , e = Symbol.for("react.portal")
      , n = Symbol.for("react.fragment")
      , i = Symbol.for("react.strict_mode")
      , o = Symbol.for("react.profiler")
      , l = Symbol.for("react.provider")
      , u = Symbol.for("react.context")
      , d = Symbol.for("react.forward_ref")
      , f = Symbol.for("react.suspense")
      , p = Symbol.for("react.memo")
      , m = Symbol.for("react.lazy")
      , y = Symbol.iterator;
    function w(O) {
        return O === null || typeof O != "object" ? null : (O = y && O[y] || O["@@iterator"],
        typeof O == "function" ? O : null)
    }
    var C = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , b = Object.assign
      , k = {};
    function S(O, z, ge) {
        this.props = O,
        this.context = z,
        this.refs = k,
        this.updater = ge || C
    }
    S.prototype.isReactComponent = {},
    S.prototype.setState = function(O, z) {
        if (typeof O != "object" && typeof O != "function" && O != null)
            throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, O, z, "setState")
    }
    ,
    S.prototype.forceUpdate = function(O) {
        this.updater.enqueueForceUpdate(this, O, "forceUpdate")
    }
    ;
    function P() {}
    P.prototype = S.prototype;
    function L(O, z, ge) {
        this.props = O,
        this.context = z,
        this.refs = k,
        this.updater = ge || C
    }
    var j = L.prototype = new P;
    j.constructor = L,
    b(j, S.prototype),
    j.isPureReactComponent = !0;
    var N = Array.isArray
      , V = Object.prototype.hasOwnProperty
      , $ = {
        current: null
    }
      , Y = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function I(O, z, ge) {
        var ye, ue = {}, he = null, Ae = null;
        if (z != null)
            for (ye in z.ref !== void 0 && (Ae = z.ref),
            z.key !== void 0 && (he = "" + z.key),
            z)
                V.call(z, ye) && !Y.hasOwnProperty(ye) && (ue[ye] = z[ye]);
        var Pe = arguments.length - 2;
        if (Pe === 1)
            ue.children = ge;
        else if (1 < Pe) {
            for (var ve = Array(Pe), mt = 0; mt < Pe; mt++)
                ve[mt] = arguments[mt + 2];
            ue.children = ve
        }
        if (O && O.defaultProps)
            for (ye in Pe = O.defaultProps,
            Pe)
                ue[ye] === void 0 && (ue[ye] = Pe[ye]);
        return {
            $$typeof: t,
            type: O,
            key: he,
            ref: Ae,
            props: ue,
            _owner: $.current
        }
    }
    function Q(O, z) {
        return {
            $$typeof: t,
            type: O.type,
            key: z,
            ref: O.ref,
            props: O.props,
            _owner: O._owner
        }
    }
    function X(O) {
        return typeof O == "object" && O !== null && O.$$typeof === t
    }
    function xe(O) {
        var z = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + O.replace(/[=:]/g, function(ge) {
            return z[ge]
        })
    }
    var Oe = /\/+/g;
    function Le(O, z) {
        return typeof O == "object" && O !== null && O.key != null ? xe("" + O.key) : z.toString(36)
    }
    function Re(O, z, ge, ye, ue) {
        var he = typeof O;
        (he === "undefined" || he === "boolean") && (O = null);
        var Ae = !1;
        if (O === null)
            Ae = !0;
        else
            switch (he) {
            case "string":
            case "number":
                Ae = !0;
                break;
            case "object":
                switch (O.$$typeof) {
                case t:
                case e:
                    Ae = !0
                }
            }
        if (Ae)
            return Ae = O,
            ue = ue(Ae),
            O = ye === "" ? "." + Le(Ae, 0) : ye,
            N(ue) ? (ge = "",
            O != null && (ge = O.replace(Oe, "$&/") + "/"),
            Re(ue, z, ge, "", function(mt) {
                return mt
            })) : ue != null && (X(ue) && (ue = Q(ue, ge + (!ue.key || Ae && Ae.key === ue.key ? "" : ("" + ue.key).replace(Oe, "$&/") + "/") + O)),
            z.push(ue)),
            1;
        if (Ae = 0,
        ye = ye === "" ? "." : ye + ":",
        N(O))
            for (var Pe = 0; Pe < O.length; Pe++) {
                he = O[Pe];
                var ve = ye + Le(he, Pe);
                Ae += Re(he, z, ge, ve, ue)
            }
        else if (ve = w(O),
        typeof ve == "function")
            for (O = ve.call(O),
            Pe = 0; !(he = O.next()).done; )
                he = he.value,
                ve = ye + Le(he, Pe++),
                Ae += Re(he, z, ge, ve, ue);
        else if (he === "object")
            throw z = String(O),
            Error("Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(O).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead.");
        return Ae
    }
    function De(O, z, ge) {
        if (O == null)
            return O;
        var ye = []
          , ue = 0;
        return Re(O, ye, "", "", function(he) {
            return z.call(ge, he, ue++)
        }),
        ye
    }
    function we(O) {
        if (O._status === -1) {
            var z = O._result;
            z = z(),
            z.then(function(ge) {
                (O._status === 0 || O._status === -1) && (O._status = 1,
                O._result = ge)
            }, function(ge) {
                (O._status === 0 || O._status === -1) && (O._status = 2,
                O._result = ge)
            }),
            O._status === -1 && (O._status = 0,
            O._result = z)
        }
        if (O._status === 1)
            return O._result.default;
        throw O._result
    }
    var fe = {
        current: null
    }
      , K = {
        transition: null
    }
      , ie = {
        ReactCurrentDispatcher: fe,
        ReactCurrentBatchConfig: K,
        ReactCurrentOwner: $
    };
    function B() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    return be.Children = {
        map: De,
        forEach: function(O, z, ge) {
            De(O, function() {
                z.apply(this, arguments)
            }, ge)
        },
        count: function(O) {
            var z = 0;
            return De(O, function() {
                z++
            }),
            z
        },
        toArray: function(O) {
            return De(O, function(z) {
                return z
            }) || []
        },
        only: function(O) {
            if (!X(O))
                throw Error("React.Children.only expected to receive a single React element child.");
            return O
        }
    },
    be.Component = S,
    be.Fragment = n,
    be.Profiler = o,
    be.PureComponent = L,
    be.StrictMode = i,
    be.Suspense = f,
    be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ie,
    be.act = B,
    be.cloneElement = function(O, z, ge) {
        if (O == null)
            throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + O + ".");
        var ye = b({}, O.props)
          , ue = O.key
          , he = O.ref
          , Ae = O._owner;
        if (z != null) {
            if (z.ref !== void 0 && (he = z.ref,
            Ae = $.current),
            z.key !== void 0 && (ue = "" + z.key),
            O.type && O.type.defaultProps)
                var Pe = O.type.defaultProps;
            for (ve in z)
                V.call(z, ve) && !Y.hasOwnProperty(ve) && (ye[ve] = z[ve] === void 0 && Pe !== void 0 ? Pe[ve] : z[ve])
        }
        var ve = arguments.length - 2;
        if (ve === 1)
            ye.children = ge;
        else if (1 < ve) {
            Pe = Array(ve);
            for (var mt = 0; mt < ve; mt++)
                Pe[mt] = arguments[mt + 2];
            ye.children = Pe
        }
        return {
            $$typeof: t,
            type: O.type,
            key: ue,
            ref: he,
            props: ye,
            _owner: Ae
        }
    }
    ,
    be.createContext = function(O) {
        return O = {
            $$typeof: u,
            _currentValue: O,
            _currentValue2: O,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        },
        O.Provider = {
            $$typeof: l,
            _context: O
        },
        O.Consumer = O
    }
    ,
    be.createElement = I,
    be.createFactory = function(O) {
        var z = I.bind(null, O);
        return z.type = O,
        z
    }
    ,
    be.createRef = function() {
        return {
            current: null
        }
    }
    ,
    be.forwardRef = function(O) {
        return {
            $$typeof: d,
            render: O
        }
    }
    ,
    be.isValidElement = X,
    be.lazy = function(O) {
        return {
            $$typeof: m,
            _payload: {
                _status: -1,
                _result: O
            },
            _init: we
        }
    }
    ,
    be.memo = function(O, z) {
        return {
            $$typeof: p,
            type: O,
            compare: z === void 0 ? null : z
        }
    }
    ,
    be.startTransition = function(O) {
        var z = K.transition;
        K.transition = {};
        try {
            O()
        } finally {
            K.transition = z
        }
    }
    ,
    be.unstable_act = B,
    be.useCallback = function(O, z) {
        return fe.current.useCallback(O, z)
    }
    ,
    be.useContext = function(O) {
        return fe.current.useContext(O)
    }
    ,
    be.useDebugValue = function() {}
    ,
    be.useDeferredValue = function(O) {
        return fe.current.useDeferredValue(O)
    }
    ,
    be.useEffect = function(O, z) {
        return fe.current.useEffect(O, z)
    }
    ,
    be.useId = function() {
        return fe.current.useId()
    }
    ,
    be.useImperativeHandle = function(O, z, ge) {
        return fe.current.useImperativeHandle(O, z, ge)
    }
    ,
    be.useInsertionEffect = function(O, z) {
        return fe.current.useInsertionEffect(O, z)
    }
    ,
    be.useLayoutEffect = function(O, z) {
        return fe.current.useLayoutEffect(O, z)
    }
    ,
    be.useMemo = function(O, z) {
        return fe.current.useMemo(O, z)
    }
    ,
    be.useReducer = function(O, z, ge) {
        return fe.current.useReducer(O, z, ge)
    }
    ,
    be.useRef = function(O) {
        return fe.current.useRef(O)
    }
    ,
    be.useState = function(O) {
        return fe.current.useState(O)
    }
    ,
    be.useSyncExternalStore = function(O, z, ge) {
        return fe.current.useSyncExternalStore(O, z, ge)
    }
    ,
    be.useTransition = function() {
        return fe.current.useTransition()
    }
    ,
    be.version = "18.3.1",
    be
}
var Xg;
function Vf() {
    return Xg || (Xg = 1,
    pd.exports = AC()),
    pd.exports
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jg;
function NC() {
    if (Jg)
        return go;
    Jg = 1;
    var t = Vf()
      , e = Symbol.for("react.element")
      , n = Symbol.for("react.fragment")
      , i = Object.prototype.hasOwnProperty
      , o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
      , l = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function u(d, f, p) {
        var m, y = {}, w = null, C = null;
        p !== void 0 && (w = "" + p),
        f.key !== void 0 && (w = "" + f.key),
        f.ref !== void 0 && (C = f.ref);
        for (m in f)
            i.call(f, m) && !l.hasOwnProperty(m) && (y[m] = f[m]);
        if (d && d.defaultProps)
            for (m in f = d.defaultProps,
            f)
                y[m] === void 0 && (y[m] = f[m]);
        return {
            $$typeof: e,
            type: d,
            key: w,
            ref: C,
            props: y,
            _owner: o.current
        }
    }
    return go.Fragment = n,
    go.jsx = u,
    go.jsxs = u,
    go
}
var Zg;
function OC() {
    return Zg || (Zg = 1,
    hd.exports = NC()),
    hd.exports
}
var x = OC()
  , E = Vf();
const Je = $0(E)
  , Uf = RC({
    __proto__: null,
    default: Je
}, [E]);
var pl = {}
  , md = {
    exports: {}
}
  , Ot = {}
  , gd = {
    exports: {}
}
  , yd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ey;
function jC() {
    return ey || (ey = 1,
    (function(t) {
        function e(K, ie) {
            var B = K.length;
            K.push(ie);
            e: for (; 0 < B; ) {
                var O = B - 1 >>> 1
                  , z = K[O];
                if (0 < o(z, ie))
                    K[O] = ie,
                    K[B] = z,
                    B = O;
                else
                    break e
            }
        }
        function n(K) {
            return K.length === 0 ? null : K[0]
        }
        function i(K) {
            if (K.length === 0)
                return null;
            var ie = K[0]
              , B = K.pop();
            if (B !== ie) {
                K[0] = B;
                e: for (var O = 0, z = K.length, ge = z >>> 1; O < ge; ) {
                    var ye = 2 * (O + 1) - 1
                      , ue = K[ye]
                      , he = ye + 1
                      , Ae = K[he];
                    if (0 > o(ue, B))
                        he < z && 0 > o(Ae, ue) ? (K[O] = Ae,
                        K[he] = B,
                        O = he) : (K[O] = ue,
                        K[ye] = B,
                        O = ye);
                    else if (he < z && 0 > o(Ae, B))
                        K[O] = Ae,
                        K[he] = B,
                        O = he;
                    else
                        break e
                }
            }
            return ie
        }
        function o(K, ie) {
            var B = K.sortIndex - ie.sortIndex;
            return B !== 0 ? B : K.id - ie.id
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
            var l = performance;
            t.unstable_now = function() {
                return l.now()
            }
        } else {
            var u = Date
              , d = u.now();
            t.unstable_now = function() {
                return u.now() - d
            }
        }
        var f = []
          , p = []
          , m = 1
          , y = null
          , w = 3
          , C = !1
          , b = !1
          , k = !1
          , S = typeof setTimeout == "function" ? setTimeout : null
          , P = typeof clearTimeout == "function" ? clearTimeout : null
          , L = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function j(K) {
            for (var ie = n(p); ie !== null; ) {
                if (ie.callback === null)
                    i(p);
                else if (ie.startTime <= K)
                    i(p),
                    ie.sortIndex = ie.expirationTime,
                    e(f, ie);
                else
                    break;
                ie = n(p)
            }
        }
        function N(K) {
            if (k = !1,
            j(K),
            !b)
                if (n(f) !== null)
                    b = !0,
                    we(V);
                else {
                    var ie = n(p);
                    ie !== null && fe(N, ie.startTime - K)
                }
        }
        function V(K, ie) {
            b = !1,
            k && (k = !1,
            P(I),
            I = -1),
            C = !0;
            var B = w;
            try {
                for (j(ie),
                y = n(f); y !== null && (!(y.expirationTime > ie) || K && !xe()); ) {
                    var O = y.callback;
                    if (typeof O == "function") {
                        y.callback = null,
                        w = y.priorityLevel;
                        var z = O(y.expirationTime <= ie);
                        ie = t.unstable_now(),
                        typeof z == "function" ? y.callback = z : y === n(f) && i(f),
                        j(ie)
                    } else
                        i(f);
                    y = n(f)
                }
                if (y !== null)
                    var ge = !0;
                else {
                    var ye = n(p);
                    ye !== null && fe(N, ye.startTime - ie),
                    ge = !1
                }
                return ge
            } finally {
                y = null,
                w = B,
                C = !1
            }
        }
        var $ = !1
          , Y = null
          , I = -1
          , Q = 5
          , X = -1;
        function xe() {
            return !(t.unstable_now() - X < Q)
        }
        function Oe() {
            if (Y !== null) {
                var K = t.unstable_now();
                X = K;
                var ie = !0;
                try {
                    ie = Y(!0, K)
                } finally {
                    ie ? Le() : ($ = !1,
                    Y = null)
                }
            } else
                $ = !1
        }
        var Le;
        if (typeof L == "function")
            Le = function() {
                L(Oe)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var Re = new MessageChannel
              , De = Re.port2;
            Re.port1.onmessage = Oe,
            Le = function() {
                De.postMessage(null)
            }
        } else
            Le = function() {
                S(Oe, 0)
            }
            ;
        function we(K) {
            Y = K,
            $ || ($ = !0,
            Le())
        }
        function fe(K, ie) {
            I = S(function() {
                K(t.unstable_now())
            }, ie)
        }
        t.unstable_IdlePriority = 5,
        t.unstable_ImmediatePriority = 1,
        t.unstable_LowPriority = 4,
        t.unstable_NormalPriority = 3,
        t.unstable_Profiling = null,
        t.unstable_UserBlockingPriority = 2,
        t.unstable_cancelCallback = function(K) {
            K.callback = null
        }
        ,
        t.unstable_continueExecution = function() {
            b || C || (b = !0,
            we(V))
        }
        ,
        t.unstable_forceFrameRate = function(K) {
            0 > K || 125 < K ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Q = 0 < K ? Math.floor(1e3 / K) : 5
        }
        ,
        t.unstable_getCurrentPriorityLevel = function() {
            return w
        }
        ,
        t.unstable_getFirstCallbackNode = function() {
            return n(f)
        }
        ,
        t.unstable_next = function(K) {
            switch (w) {
            case 1:
            case 2:
            case 3:
                var ie = 3;
                break;
            default:
                ie = w
            }
            var B = w;
            w = ie;
            try {
                return K()
            } finally {
                w = B
            }
        }
        ,
        t.unstable_pauseExecution = function() {}
        ,
        t.unstable_requestPaint = function() {}
        ,
        t.unstable_runWithPriority = function(K, ie) {
            switch (K) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                K = 3
            }
            var B = w;
            w = K;
            try {
                return ie()
            } finally {
                w = B
            }
        }
        ,
        t.unstable_scheduleCallback = function(K, ie, B) {
            var O = t.unstable_now();
            switch (typeof B == "object" && B !== null ? (B = B.delay,
            B = typeof B == "number" && 0 < B ? O + B : O) : B = O,
            K) {
            case 1:
                var z = -1;
                break;
            case 2:
                z = 250;
                break;
            case 5:
                z = 1073741823;
                break;
            case 4:
                z = 1e4;
                break;
            default:
                z = 5e3
            }
            return z = B + z,
            K = {
                id: m++,
                callback: ie,
                priorityLevel: K,
                startTime: B,
                expirationTime: z,
                sortIndex: -1
            },
            B > O ? (K.sortIndex = B,
            e(p, K),
            n(f) === null && K === n(p) && (k ? (P(I),
            I = -1) : k = !0,
            fe(N, B - O))) : (K.sortIndex = z,
            e(f, K),
            b || C || (b = !0,
            we(V))),
            K
        }
        ,
        t.unstable_shouldYield = xe,
        t.unstable_wrapCallback = function(K) {
            var ie = w;
            return function() {
                var B = w;
                w = ie;
                try {
                    return K.apply(this, arguments)
                } finally {
                    w = B
                }
            }
        }
    }
    )(yd)),
    yd
}
var ty;
function LC() {
    return ty || (ty = 1,
    gd.exports = jC()),
    gd.exports
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ny;
function MC() {
    if (ny)
        return Ot;
    ny = 1;
    var t = Vf()
      , e = LC();
    function n(r) {
        for (var s = "https://reactjs.org/docs/error-decoder.html?invariant=" + r, a = 1; a < arguments.length; a++)
            s += "&args[]=" + encodeURIComponent(arguments[a]);
        return "Minified React error #" + r + "; visit " + s + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var i = new Set
      , o = {};
    function l(r, s) {
        u(r, s),
        u(r + "Capture", s)
    }
    function u(r, s) {
        for (o[r] = s,
        r = 0; r < s.length; r++)
            i.add(s[r])
    }
    var d = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , f = Object.prototype.hasOwnProperty
      , p = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
      , m = {}
      , y = {};
    function w(r) {
        return f.call(y, r) ? !0 : f.call(m, r) ? !1 : p.test(r) ? y[r] = !0 : (m[r] = !0,
        !1)
    }
    function C(r, s, a, c) {
        if (a !== null && a.type === 0)
            return !1;
        switch (typeof s) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return c ? !1 : a !== null ? !a.acceptsBooleans : (r = r.toLowerCase().slice(0, 5),
            r !== "data-" && r !== "aria-");
        default:
            return !1
        }
    }
    function b(r, s, a, c) {
        if (s === null || typeof s > "u" || C(r, s, a, c))
            return !0;
        if (c)
            return !1;
        if (a !== null)
            switch (a.type) {
            case 3:
                return !s;
            case 4:
                return s === !1;
            case 5:
                return isNaN(s);
            case 6:
                return isNaN(s) || 1 > s
            }
        return !1
    }
    function k(r, s, a, c, h, g, v) {
        this.acceptsBooleans = s === 2 || s === 3 || s === 4,
        this.attributeName = c,
        this.attributeNamespace = h,
        this.mustUseProperty = a,
        this.propertyName = r,
        this.type = s,
        this.sanitizeURL = g,
        this.removeEmptyString = v
    }
    var S = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r) {
        S[r] = new k(r,0,!1,r,null,!1,!1)
    }),
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(r) {
        var s = r[0];
        S[s] = new k(s,1,!1,r[1],null,!1,!1)
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(r) {
        S[r] = new k(r,2,!1,r.toLowerCase(),null,!1,!1)
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(r) {
        S[r] = new k(r,2,!1,r,null,!1,!1)
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r) {
        S[r] = new k(r,3,!1,r.toLowerCase(),null,!1,!1)
    }),
    ["checked", "multiple", "muted", "selected"].forEach(function(r) {
        S[r] = new k(r,3,!0,r,null,!1,!1)
    }),
    ["capture", "download"].forEach(function(r) {
        S[r] = new k(r,4,!1,r,null,!1,!1)
    }),
    ["cols", "rows", "size", "span"].forEach(function(r) {
        S[r] = new k(r,6,!1,r,null,!1,!1)
    }),
    ["rowSpan", "start"].forEach(function(r) {
        S[r] = new k(r,5,!1,r.toLowerCase(),null,!1,!1)
    });
    var P = /[\-:]([a-z])/g;
    function L(r) {
        return r[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r) {
        var s = r.replace(P, L);
        S[s] = new k(s,1,!1,r,null,!1,!1)
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r) {
        var s = r.replace(P, L);
        S[s] = new k(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)
    }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function(r) {
        var s = r.replace(P, L);
        S[s] = new k(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)
    }),
    ["tabIndex", "crossOrigin"].forEach(function(r) {
        S[r] = new k(r,1,!1,r.toLowerCase(),null,!1,!1)
    }),
    S.xlinkHref = new k("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),
    ["src", "href", "action", "formAction"].forEach(function(r) {
        S[r] = new k(r,1,!1,r.toLowerCase(),null,!0,!0)
    });
    function j(r, s, a, c) {
        var h = S.hasOwnProperty(s) ? S[s] : null;
        (h !== null ? h.type !== 0 : c || !(2 < s.length) || s[0] !== "o" && s[0] !== "O" || s[1] !== "n" && s[1] !== "N") && (b(s, a, h, c) && (a = null),
        c || h === null ? w(s) && (a === null ? r.removeAttribute(s) : r.setAttribute(s, "" + a)) : h.mustUseProperty ? r[h.propertyName] = a === null ? h.type === 3 ? !1 : "" : a : (s = h.attributeName,
        c = h.attributeNamespace,
        a === null ? r.removeAttribute(s) : (h = h.type,
        a = h === 3 || h === 4 && a === !0 ? "" : "" + a,
        c ? r.setAttributeNS(c, s, a) : r.setAttribute(s, a))))
    }
    var N = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
      , V = Symbol.for("react.element")
      , $ = Symbol.for("react.portal")
      , Y = Symbol.for("react.fragment")
      , I = Symbol.for("react.strict_mode")
      , Q = Symbol.for("react.profiler")
      , X = Symbol.for("react.provider")
      , xe = Symbol.for("react.context")
      , Oe = Symbol.for("react.forward_ref")
      , Le = Symbol.for("react.suspense")
      , Re = Symbol.for("react.suspense_list")
      , De = Symbol.for("react.memo")
      , we = Symbol.for("react.lazy")
      , fe = Symbol.for("react.offscreen")
      , K = Symbol.iterator;
    function ie(r) {
        return r === null || typeof r != "object" ? null : (r = K && r[K] || r["@@iterator"],
        typeof r == "function" ? r : null)
    }
    var B = Object.assign, O;
    function z(r) {
        if (O === void 0)
            try {
                throw Error()
            } catch (a) {
                var s = a.stack.trim().match(/\n( *(at )?)/);
                O = s && s[1] || ""
            }
        return `
` + O + r
    }
    var ge = !1;
    function ye(r, s) {
        if (!r || ge)
            return "";
        ge = !0;
        var a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (s)
                if (s = function() {
                    throw Error()
                }
                ,
                Object.defineProperty(s.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }),
                typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(s, [])
                    } catch (F) {
                        var c = F
                    }
                    Reflect.construct(r, [], s)
                } else {
                    try {
                        s.call()
                    } catch (F) {
                        c = F
                    }
                    r.call(s.prototype)
                }
            else {
                try {
                    throw Error()
                } catch (F) {
                    c = F
                }
                r()
            }
        } catch (F) {
            if (F && c && typeof F.stack == "string") {
                for (var h = F.stack.split(`
`), g = c.stack.split(`
`), v = h.length - 1, T = g.length - 1; 1 <= v && 0 <= T && h[v] !== g[T]; )
                    T--;
                for (; 1 <= v && 0 <= T; v--,
                T--)
                    if (h[v] !== g[T]) {
                        if (v !== 1 || T !== 1)
                            do
                                if (v--,
                                T--,
                                0 > T || h[v] !== g[T]) {
                                    var _ = `
` + h[v].replace(" at new ", " at ");
                                    return r.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", r.displayName)),
                                    _
                                }
                            while (1 <= v && 0 <= T);
                        break
                    }
            }
        } finally {
            ge = !1,
            Error.prepareStackTrace = a
        }
        return (r = r ? r.displayName || r.name : "") ? z(r) : ""
    }
    function ue(r) {
        switch (r.tag) {
        case 5:
            return z(r.type);
        case 16:
            return z("Lazy");
        case 13:
            return z("Suspense");
        case 19:
            return z("SuspenseList");
        case 0:
        case 2:
        case 15:
            return r = ye(r.type, !1),
            r;
        case 11:
            return r = ye(r.type.render, !1),
            r;
        case 1:
            return r = ye(r.type, !0),
            r;
        default:
            return ""
        }
    }
    function he(r) {
        if (r == null)
            return null;
        if (typeof r == "function")
            return r.displayName || r.name || null;
        if (typeof r == "string")
            return r;
        switch (r) {
        case Y:
            return "Fragment";
        case $:
            return "Portal";
        case Q:
            return "Profiler";
        case I:
            return "StrictMode";
        case Le:
            return "Suspense";
        case Re:
            return "SuspenseList"
        }
        if (typeof r == "object")
            switch (r.$$typeof) {
            case xe:
                return (r.displayName || "Context") + ".Consumer";
            case X:
                return (r._context.displayName || "Context") + ".Provider";
            case Oe:
                var s = r.render;
                return r = r.displayName,
                r || (r = s.displayName || s.name || "",
                r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"),
                r;
            case De:
                return s = r.displayName || null,
                s !== null ? s : he(r.type) || "Memo";
            case we:
                s = r._payload,
                r = r._init;
                try {
                    return he(r(s))
                } catch {}
            }
        return null
    }
    function Ae(r) {
        var s = r.type;
        switch (r.tag) {
        case 24:
            return "Cache";
        case 9:
            return (s.displayName || "Context") + ".Consumer";
        case 10:
            return (s._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return r = s.render,
            r = r.displayName || r.name || "",
            s.displayName || (r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return s;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return he(s);
        case 8:
            return s === I ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof s == "function")
                return s.displayName || s.name || null;
            if (typeof s == "string")
                return s
        }
        return null
    }
    function Pe(r) {
        switch (typeof r) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return r;
        case "object":
            return r;
        default:
            return ""
        }
    }
    function ve(r) {
        var s = r.type;
        return (r = r.nodeName) && r.toLowerCase() === "input" && (s === "checkbox" || s === "radio")
    }
    function mt(r) {
        var s = ve(r) ? "checked" : "value"
          , a = Object.getOwnPropertyDescriptor(r.constructor.prototype, s)
          , c = "" + r[s];
        if (!r.hasOwnProperty(s) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
            var h = a.get
              , g = a.set;
            return Object.defineProperty(r, s, {
                configurable: !0,
                get: function() {
                    return h.call(this)
                },
                set: function(v) {
                    c = "" + v,
                    g.call(this, v)
                }
            }),
            Object.defineProperty(r, s, {
                enumerable: a.enumerable
            }),
            {
                getValue: function() {
                    return c
                },
                setValue: function(v) {
                    c = "" + v
                },
                stopTracking: function() {
                    r._valueTracker = null,
                    delete r[s]
                }
            }
        }
    }
    function Ln(r) {
        r._valueTracker || (r._valueTracker = mt(r))
    }
    function Br(r) {
        if (!r)
            return !1;
        var s = r._valueTracker;
        if (!s)
            return !0;
        var a = s.getValue()
          , c = "";
        return r && (c = ve(r) ? r.checked ? "true" : "false" : r.value),
        r = c,
        r !== a ? (s.setValue(r),
        !0) : !1
    }
    function Zn(r) {
        if (r = r || (typeof document < "u" ? document : void 0),
        typeof r > "u")
            return null;
        try {
            return r.activeElement || r.body
        } catch {
            return r.body
        }
    }
    function er(r, s) {
        var a = s.checked;
        return B({}, s, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: a ?? r._wrapperState.initialChecked
        })
    }
    function np(r, s) {
        var a = s.defaultValue == null ? "" : s.defaultValue
          , c = s.checked != null ? s.checked : s.defaultChecked;
        a = Pe(s.value != null ? s.value : a),
        r._wrapperState = {
            initialChecked: c,
            initialValue: a,
            controlled: s.type === "checkbox" || s.type === "radio" ? s.checked != null : s.value != null
        }
    }
    function rp(r, s) {
        s = s.checked,
        s != null && j(r, "checked", s, !1)
    }
    function xu(r, s) {
        rp(r, s);
        var a = Pe(s.value)
          , c = s.type;
        if (a != null)
            c === "number" ? (a === 0 && r.value === "" || r.value != a) && (r.value = "" + a) : r.value !== "" + a && (r.value = "" + a);
        else if (c === "submit" || c === "reset") {
            r.removeAttribute("value");
            return
        }
        s.hasOwnProperty("value") ? Su(r, s.type, a) : s.hasOwnProperty("defaultValue") && Su(r, s.type, Pe(s.defaultValue)),
        s.checked == null && s.defaultChecked != null && (r.defaultChecked = !!s.defaultChecked)
    }
    function sp(r, s, a) {
        if (s.hasOwnProperty("value") || s.hasOwnProperty("defaultValue")) {
            var c = s.type;
            if (!(c !== "submit" && c !== "reset" || s.value !== void 0 && s.value !== null))
                return;
            s = "" + r._wrapperState.initialValue,
            a || s === r.value || (r.value = s),
            r.defaultValue = s
        }
        a = r.name,
        a !== "" && (r.name = ""),
        r.defaultChecked = !!r._wrapperState.initialChecked,
        a !== "" && (r.name = a)
    }
    function Su(r, s, a) {
        (s !== "number" || Zn(r.ownerDocument) !== r) && (a == null ? r.defaultValue = "" + r._wrapperState.initialValue : r.defaultValue !== "" + a && (r.defaultValue = "" + a))
    }
    var Ai = Array.isArray;
    function _s(r, s, a, c) {
        if (r = r.options,
        s) {
            s = {};
            for (var h = 0; h < a.length; h++)
                s["$" + a[h]] = !0;
            for (a = 0; a < r.length; a++)
                h = s.hasOwnProperty("$" + r[a].value),
                r[a].selected !== h && (r[a].selected = h),
                h && c && (r[a].defaultSelected = !0)
        } else {
            for (a = "" + Pe(a),
            s = null,
            h = 0; h < r.length; h++) {
                if (r[h].value === a) {
                    r[h].selected = !0,
                    c && (r[h].defaultSelected = !0);
                    return
                }
                s !== null || r[h].disabled || (s = r[h])
            }
            s !== null && (s.selected = !0)
        }
    }
    function bu(r, s) {
        if (s.dangerouslySetInnerHTML != null)
            throw Error(n(91));
        return B({}, s, {
            value: void 0,
            defaultValue: void 0,
            children: "" + r._wrapperState.initialValue
        })
    }
    function ip(r, s) {
        var a = s.value;
        if (a == null) {
            if (a = s.children,
            s = s.defaultValue,
            a != null) {
                if (s != null)
                    throw Error(n(92));
                if (Ai(a)) {
                    if (1 < a.length)
                        throw Error(n(93));
                    a = a[0]
                }
                s = a
            }
            s == null && (s = ""),
            a = s
        }
        r._wrapperState = {
            initialValue: Pe(a)
        }
    }
    function op(r, s) {
        var a = Pe(s.value)
          , c = Pe(s.defaultValue);
        a != null && (a = "" + a,
        a !== r.value && (r.value = a),
        s.defaultValue == null && r.defaultValue !== a && (r.defaultValue = a)),
        c != null && (r.defaultValue = "" + c)
    }
    function ap(r) {
        var s = r.textContent;
        s === r._wrapperState.initialValue && s !== "" && s !== null && (r.value = s)
    }
    function lp(r) {
        switch (r) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
        }
    }
    function Cu(r, s) {
        return r == null || r === "http://www.w3.org/1999/xhtml" ? lp(s) : r === "http://www.w3.org/2000/svg" && s === "foreignObject" ? "http://www.w3.org/1999/xhtml" : r
    }
    var ia, up = (function(r) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(s, a, c, h) {
            MSApp.execUnsafeLocalFunction(function() {
                return r(s, a, c, h)
            })
        }
        : r
    }
    )(function(r, s) {
        if (r.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in r)
            r.innerHTML = s;
        else {
            for (ia = ia || document.createElement("div"),
            ia.innerHTML = "<svg>" + s.valueOf().toString() + "</svg>",
            s = ia.firstChild; r.firstChild; )
                r.removeChild(r.firstChild);
            for (; s.firstChild; )
                r.appendChild(s.firstChild)
        }
    });
    function Ni(r, s) {
        if (s) {
            var a = r.firstChild;
            if (a && a === r.lastChild && a.nodeType === 3) {
                a.nodeValue = s;
                return
            }
        }
        r.textContent = s
    }
    var Oi = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    }
      , jS = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Oi).forEach(function(r) {
        jS.forEach(function(s) {
            s = s + r.charAt(0).toUpperCase() + r.substring(1),
            Oi[s] = Oi[r]
        })
    });
    function cp(r, s, a) {
        return s == null || typeof s == "boolean" || s === "" ? "" : a || typeof s != "number" || s === 0 || Oi.hasOwnProperty(r) && Oi[r] ? ("" + s).trim() : s + "px"
    }
    function dp(r, s) {
        r = r.style;
        for (var a in s)
            if (s.hasOwnProperty(a)) {
                var c = a.indexOf("--") === 0
                  , h = cp(a, s[a], c);
                a === "float" && (a = "cssFloat"),
                c ? r.setProperty(a, h) : r[a] = h
            }
    }
    var LS = B({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });
    function Eu(r, s) {
        if (s) {
            if (LS[r] && (s.children != null || s.dangerouslySetInnerHTML != null))
                throw Error(n(137, r));
            if (s.dangerouslySetInnerHTML != null) {
                if (s.children != null)
                    throw Error(n(60));
                if (typeof s.dangerouslySetInnerHTML != "object" || !("__html"in s.dangerouslySetInnerHTML))
                    throw Error(n(61))
            }
            if (s.style != null && typeof s.style != "object")
                throw Error(n(62))
        }
    }
    function ku(r, s) {
        if (r.indexOf("-") === -1)
            return typeof s.is == "string";
        switch (r) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var Tu = null;
    function Pu(r) {
        return r = r.target || r.srcElement || window,
        r.correspondingUseElement && (r = r.correspondingUseElement),
        r.nodeType === 3 ? r.parentNode : r
    }
    var _u = null
      , Rs = null
      , As = null;
    function fp(r) {
        if (r = eo(r)) {
            if (typeof _u != "function")
                throw Error(n(280));
            var s = r.stateNode;
            s && (s = _a(s),
            _u(r.stateNode, r.type, s))
        }
    }
    function hp(r) {
        Rs ? As ? As.push(r) : As = [r] : Rs = r
    }
    function pp() {
        if (Rs) {
            var r = Rs
              , s = As;
            if (As = Rs = null,
            fp(r),
            s)
                for (r = 0; r < s.length; r++)
                    fp(s[r])
        }
    }
    function mp(r, s) {
        return r(s)
    }
    function gp() {}
    var Ru = !1;
    function yp(r, s, a) {
        if (Ru)
            return r(s, a);
        Ru = !0;
        try {
            return mp(r, s, a)
        } finally {
            Ru = !1,
            (Rs !== null || As !== null) && (gp(),
            pp())
        }
    }
    function ji(r, s) {
        var a = r.stateNode;
        if (a === null)
            return null;
        var c = _a(a);
        if (c === null)
            return null;
        a = c[s];
        e: switch (s) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (c = !c.disabled) || (r = r.type,
            c = !(r === "button" || r === "input" || r === "select" || r === "textarea")),
            r = !c;
            break e;
        default:
            r = !1
        }
        if (r)
            return null;
        if (a && typeof a != "function")
            throw Error(n(231, s, typeof a));
        return a
    }
    var Au = !1;
    if (d)
        try {
            var Li = {};
            Object.defineProperty(Li, "passive", {
                get: function() {
                    Au = !0
                }
            }),
            window.addEventListener("test", Li, Li),
            window.removeEventListener("test", Li, Li)
        } catch {
            Au = !1
        }
    function MS(r, s, a, c, h, g, v, T, _) {
        var F = Array.prototype.slice.call(arguments, 3);
        try {
            s.apply(a, F)
        } catch (W) {
            this.onError(W)
        }
    }
    var Mi = !1
      , oa = null
      , aa = !1
      , Nu = null
      , DS = {
        onError: function(r) {
            Mi = !0,
            oa = r
        }
    };
    function IS(r, s, a, c, h, g, v, T, _) {
        Mi = !1,
        oa = null,
        MS.apply(DS, arguments)
    }
    function FS(r, s, a, c, h, g, v, T, _) {
        if (IS.apply(this, arguments),
        Mi) {
            if (Mi) {
                var F = oa;
                Mi = !1,
                oa = null
            } else
                throw Error(n(198));
            aa || (aa = !0,
            Nu = F)
        }
    }
    function zr(r) {
        var s = r
          , a = r;
        if (r.alternate)
            for (; s.return; )
                s = s.return;
        else {
            r = s;
            do
                s = r,
                (s.flags & 4098) !== 0 && (a = s.return),
                r = s.return;
            while (r)
        }
        return s.tag === 3 ? a : null
    }
    function vp(r) {
        if (r.tag === 13) {
            var s = r.memoizedState;
            if (s === null && (r = r.alternate,
            r !== null && (s = r.memoizedState)),
            s !== null)
                return s.dehydrated
        }
        return null
    }
    function wp(r) {
        if (zr(r) !== r)
            throw Error(n(188))
    }
    function VS(r) {
        var s = r.alternate;
        if (!s) {
            if (s = zr(r),
            s === null)
                throw Error(n(188));
            return s !== r ? null : r
        }
        for (var a = r, c = s; ; ) {
            var h = a.return;
            if (h === null)
                break;
            var g = h.alternate;
            if (g === null) {
                if (c = h.return,
                c !== null) {
                    a = c;
                    continue
                }
                break
            }
            if (h.child === g.child) {
                for (g = h.child; g; ) {
                    if (g === a)
                        return wp(h),
                        r;
                    if (g === c)
                        return wp(h),
                        s;
                    g = g.sibling
                }
                throw Error(n(188))
            }
            if (a.return !== c.return)
                a = h,
                c = g;
            else {
                for (var v = !1, T = h.child; T; ) {
                    if (T === a) {
                        v = !0,
                        a = h,
                        c = g;
                        break
                    }
                    if (T === c) {
                        v = !0,
                        c = h,
                        a = g;
                        break
                    }
                    T = T.sibling
                }
                if (!v) {
                    for (T = g.child; T; ) {
                        if (T === a) {
                            v = !0,
                            a = g,
                            c = h;
                            break
                        }
                        if (T === c) {
                            v = !0,
                            c = g,
                            a = h;
                            break
                        }
                        T = T.sibling
                    }
                    if (!v)
                        throw Error(n(189))
                }
            }
            if (a.alternate !== c)
                throw Error(n(190))
        }
        if (a.tag !== 3)
            throw Error(n(188));
        return a.stateNode.current === a ? r : s
    }
    function xp(r) {
        return r = VS(r),
        r !== null ? Sp(r) : null
    }
    function Sp(r) {
        if (r.tag === 5 || r.tag === 6)
            return r;
        for (r = r.child; r !== null; ) {
            var s = Sp(r);
            if (s !== null)
                return s;
            r = r.sibling
        }
        return null
    }
    var bp = e.unstable_scheduleCallback
      , Cp = e.unstable_cancelCallback
      , US = e.unstable_shouldYield
      , BS = e.unstable_requestPaint
      , Ge = e.unstable_now
      , zS = e.unstable_getCurrentPriorityLevel
      , Ou = e.unstable_ImmediatePriority
      , Ep = e.unstable_UserBlockingPriority
      , la = e.unstable_NormalPriority
      , $S = e.unstable_LowPriority
      , kp = e.unstable_IdlePriority
      , ua = null
      , wn = null;
    function HS(r) {
        if (wn && typeof wn.onCommitFiberRoot == "function")
            try {
                wn.onCommitFiberRoot(ua, r, void 0, (r.current.flags & 128) === 128)
            } catch {}
    }
    var sn = Math.clz32 ? Math.clz32 : KS
      , WS = Math.log
      , qS = Math.LN2;
    function KS(r) {
        return r >>>= 0,
        r === 0 ? 32 : 31 - (WS(r) / qS | 0) | 0
    }
    var ca = 64
      , da = 4194304;
    function Di(r) {
        switch (r & -r) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return r & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return r & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return r
        }
    }
    function fa(r, s) {
        var a = r.pendingLanes;
        if (a === 0)
            return 0;
        var c = 0
          , h = r.suspendedLanes
          , g = r.pingedLanes
          , v = a & 268435455;
        if (v !== 0) {
            var T = v & ~h;
            T !== 0 ? c = Di(T) : (g &= v,
            g !== 0 && (c = Di(g)))
        } else
            v = a & ~h,
            v !== 0 ? c = Di(v) : g !== 0 && (c = Di(g));
        if (c === 0)
            return 0;
        if (s !== 0 && s !== c && (s & h) === 0 && (h = c & -c,
        g = s & -s,
        h >= g || h === 16 && (g & 4194240) !== 0))
            return s;
        if ((c & 4) !== 0 && (c |= a & 16),
        s = r.entangledLanes,
        s !== 0)
            for (r = r.entanglements,
            s &= c; 0 < s; )
                a = 31 - sn(s),
                h = 1 << a,
                c |= r[a],
                s &= ~h;
        return c
    }
    function QS(r, s) {
        switch (r) {
        case 1:
        case 2:
        case 4:
            return s + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return s + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function GS(r, s) {
        for (var a = r.suspendedLanes, c = r.pingedLanes, h = r.expirationTimes, g = r.pendingLanes; 0 < g; ) {
            var v = 31 - sn(g)
              , T = 1 << v
              , _ = h[v];
            _ === -1 ? ((T & a) === 0 || (T & c) !== 0) && (h[v] = QS(T, s)) : _ <= s && (r.expiredLanes |= T),
            g &= ~T
        }
    }
    function ju(r) {
        return r = r.pendingLanes & -1073741825,
        r !== 0 ? r : r & 1073741824 ? 1073741824 : 0
    }
    function Tp() {
        var r = ca;
        return ca <<= 1,
        (ca & 4194240) === 0 && (ca = 64),
        r
    }
    function Lu(r) {
        for (var s = [], a = 0; 31 > a; a++)
            s.push(r);
        return s
    }
    function Ii(r, s, a) {
        r.pendingLanes |= s,
        s !== 536870912 && (r.suspendedLanes = 0,
        r.pingedLanes = 0),
        r = r.eventTimes,
        s = 31 - sn(s),
        r[s] = a
    }
    function YS(r, s) {
        var a = r.pendingLanes & ~s;
        r.pendingLanes = s,
        r.suspendedLanes = 0,
        r.pingedLanes = 0,
        r.expiredLanes &= s,
        r.mutableReadLanes &= s,
        r.entangledLanes &= s,
        s = r.entanglements;
        var c = r.eventTimes;
        for (r = r.expirationTimes; 0 < a; ) {
            var h = 31 - sn(a)
              , g = 1 << h;
            s[h] = 0,
            c[h] = -1,
            r[h] = -1,
            a &= ~g
        }
    }
    function Mu(r, s) {
        var a = r.entangledLanes |= s;
        for (r = r.entanglements; a; ) {
            var c = 31 - sn(a)
              , h = 1 << c;
            h & s | r[c] & s && (r[c] |= s),
            a &= ~h
        }
    }
    var je = 0;
    function Pp(r) {
        return r &= -r,
        1 < r ? 4 < r ? (r & 268435455) !== 0 ? 16 : 536870912 : 4 : 1
    }
    var _p, Du, Rp, Ap, Np, Iu = !1, ha = [], tr = null, nr = null, rr = null, Fi = new Map, Vi = new Map, sr = [], XS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function Op(r, s) {
        switch (r) {
        case "focusin":
        case "focusout":
            tr = null;
            break;
        case "dragenter":
        case "dragleave":
            nr = null;
            break;
        case "mouseover":
        case "mouseout":
            rr = null;
            break;
        case "pointerover":
        case "pointerout":
            Fi.delete(s.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Vi.delete(s.pointerId)
        }
    }
    function Ui(r, s, a, c, h, g) {
        return r === null || r.nativeEvent !== g ? (r = {
            blockedOn: s,
            domEventName: a,
            eventSystemFlags: c,
            nativeEvent: g,
            targetContainers: [h]
        },
        s !== null && (s = eo(s),
        s !== null && Du(s)),
        r) : (r.eventSystemFlags |= c,
        s = r.targetContainers,
        h !== null && s.indexOf(h) === -1 && s.push(h),
        r)
    }
    function JS(r, s, a, c, h) {
        switch (s) {
        case "focusin":
            return tr = Ui(tr, r, s, a, c, h),
            !0;
        case "dragenter":
            return nr = Ui(nr, r, s, a, c, h),
            !0;
        case "mouseover":
            return rr = Ui(rr, r, s, a, c, h),
            !0;
        case "pointerover":
            var g = h.pointerId;
            return Fi.set(g, Ui(Fi.get(g) || null, r, s, a, c, h)),
            !0;
        case "gotpointercapture":
            return g = h.pointerId,
            Vi.set(g, Ui(Vi.get(g) || null, r, s, a, c, h)),
            !0
        }
        return !1
    }
    function jp(r) {
        var s = $r(r.target);
        if (s !== null) {
            var a = zr(s);
            if (a !== null) {
                if (s = a.tag,
                s === 13) {
                    if (s = vp(a),
                    s !== null) {
                        r.blockedOn = s,
                        Np(r.priority, function() {
                            Rp(a)
                        });
                        return
                    }
                } else if (s === 3 && a.stateNode.current.memoizedState.isDehydrated) {
                    r.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
                    return
                }
            }
        }
        r.blockedOn = null
    }
    function pa(r) {
        if (r.blockedOn !== null)
            return !1;
        for (var s = r.targetContainers; 0 < s.length; ) {
            var a = Vu(r.domEventName, r.eventSystemFlags, s[0], r.nativeEvent);
            if (a === null) {
                a = r.nativeEvent;
                var c = new a.constructor(a.type,a);
                Tu = c,
                a.target.dispatchEvent(c),
                Tu = null
            } else
                return s = eo(a),
                s !== null && Du(s),
                r.blockedOn = a,
                !1;
            s.shift()
        }
        return !0
    }
    function Lp(r, s, a) {
        pa(r) && a.delete(s)
    }
    function ZS() {
        Iu = !1,
        tr !== null && pa(tr) && (tr = null),
        nr !== null && pa(nr) && (nr = null),
        rr !== null && pa(rr) && (rr = null),
        Fi.forEach(Lp),
        Vi.forEach(Lp)
    }
    function Bi(r, s) {
        r.blockedOn === s && (r.blockedOn = null,
        Iu || (Iu = !0,
        e.unstable_scheduleCallback(e.unstable_NormalPriority, ZS)))
    }
    function zi(r) {
        function s(h) {
            return Bi(h, r)
        }
        if (0 < ha.length) {
            Bi(ha[0], r);
            for (var a = 1; a < ha.length; a++) {
                var c = ha[a];
                c.blockedOn === r && (c.blockedOn = null)
            }
        }
        for (tr !== null && Bi(tr, r),
        nr !== null && Bi(nr, r),
        rr !== null && Bi(rr, r),
        Fi.forEach(s),
        Vi.forEach(s),
        a = 0; a < sr.length; a++)
            c = sr[a],
            c.blockedOn === r && (c.blockedOn = null);
        for (; 0 < sr.length && (a = sr[0],
        a.blockedOn === null); )
            jp(a),
            a.blockedOn === null && sr.shift()
    }
    var Ns = N.ReactCurrentBatchConfig
      , ma = !0;
    function eb(r, s, a, c) {
        var h = je
          , g = Ns.transition;
        Ns.transition = null;
        try {
            je = 1,
            Fu(r, s, a, c)
        } finally {
            je = h,
            Ns.transition = g
        }
    }
    function tb(r, s, a, c) {
        var h = je
          , g = Ns.transition;
        Ns.transition = null;
        try {
            je = 4,
            Fu(r, s, a, c)
        } finally {
            je = h,
            Ns.transition = g
        }
    }
    function Fu(r, s, a, c) {
        if (ma) {
            var h = Vu(r, s, a, c);
            if (h === null)
                nc(r, s, c, ga, a),
                Op(r, c);
            else if (JS(h, r, s, a, c))
                c.stopPropagation();
            else if (Op(r, c),
            s & 4 && -1 < XS.indexOf(r)) {
                for (; h !== null; ) {
                    var g = eo(h);
                    if (g !== null && _p(g),
                    g = Vu(r, s, a, c),
                    g === null && nc(r, s, c, ga, a),
                    g === h)
                        break;
                    h = g
                }
                h !== null && c.stopPropagation()
            } else
                nc(r, s, c, null, a)
        }
    }
    var ga = null;
    function Vu(r, s, a, c) {
        if (ga = null,
        r = Pu(c),
        r = $r(r),
        r !== null)
            if (s = zr(r),
            s === null)
                r = null;
            else if (a = s.tag,
            a === 13) {
                if (r = vp(s),
                r !== null)
                    return r;
                r = null
            } else if (a === 3) {
                if (s.stateNode.current.memoizedState.isDehydrated)
                    return s.tag === 3 ? s.stateNode.containerInfo : null;
                r = null
            } else
                s !== r && (r = null);
        return ga = r,
        null
    }
    function Mp(r) {
        switch (r) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (zS()) {
            case Ou:
                return 1;
            case Ep:
                return 4;
            case la:
            case $S:
                return 16;
            case kp:
                return 536870912;
            default:
                return 16
            }
        default:
            return 16
        }
    }
    var ir = null
      , Uu = null
      , ya = null;
    function Dp() {
        if (ya)
            return ya;
        var r, s = Uu, a = s.length, c, h = "value"in ir ? ir.value : ir.textContent, g = h.length;
        for (r = 0; r < a && s[r] === h[r]; r++)
            ;
        var v = a - r;
        for (c = 1; c <= v && s[a - c] === h[g - c]; c++)
            ;
        return ya = h.slice(r, 1 < c ? 1 - c : void 0)
    }
    function va(r) {
        var s = r.keyCode;
        return "charCode"in r ? (r = r.charCode,
        r === 0 && s === 13 && (r = 13)) : r = s,
        r === 10 && (r = 13),
        32 <= r || r === 13 ? r : 0
    }
    function wa() {
        return !0
    }
    function Ip() {
        return !1
    }
    function It(r) {
        function s(a, c, h, g, v) {
            this._reactName = a,
            this._targetInst = h,
            this.type = c,
            this.nativeEvent = g,
            this.target = v,
            this.currentTarget = null;
            for (var T in r)
                r.hasOwnProperty(T) && (a = r[T],
                this[T] = a ? a(g) : g[T]);
            return this.isDefaultPrevented = (g.defaultPrevented != null ? g.defaultPrevented : g.returnValue === !1) ? wa : Ip,
            this.isPropagationStopped = Ip,
            this
        }
        return B(s.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var a = this.nativeEvent;
                a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1),
                this.isDefaultPrevented = wa)
            },
            stopPropagation: function() {
                var a = this.nativeEvent;
                a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
                this.isPropagationStopped = wa)
            },
            persist: function() {},
            isPersistent: wa
        }),
        s
    }
    var Os = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(r) {
            return r.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Bu = It(Os), $i = B({}, Os, {
        view: 0,
        detail: 0
    }), nb = It($i), zu, $u, Hi, xa = B({}, $i, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Wu,
        button: 0,
        buttons: 0,
        relatedTarget: function(r) {
            return r.relatedTarget === void 0 ? r.fromElement === r.srcElement ? r.toElement : r.fromElement : r.relatedTarget
        },
        movementX: function(r) {
            return "movementX"in r ? r.movementX : (r !== Hi && (Hi && r.type === "mousemove" ? (zu = r.screenX - Hi.screenX,
            $u = r.screenY - Hi.screenY) : $u = zu = 0,
            Hi = r),
            zu)
        },
        movementY: function(r) {
            return "movementY"in r ? r.movementY : $u
        }
    }), Fp = It(xa), rb = B({}, xa, {
        dataTransfer: 0
    }), sb = It(rb), ib = B({}, $i, {
        relatedTarget: 0
    }), Hu = It(ib), ob = B({}, Os, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), ab = It(ob), lb = B({}, Os, {
        clipboardData: function(r) {
            return "clipboardData"in r ? r.clipboardData : window.clipboardData
        }
    }), ub = It(lb), cb = B({}, Os, {
        data: 0
    }), Vp = It(cb), db = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, fb = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, hb = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function pb(r) {
        var s = this.nativeEvent;
        return s.getModifierState ? s.getModifierState(r) : (r = hb[r]) ? !!s[r] : !1
    }
    function Wu() {
        return pb
    }
    var mb = B({}, $i, {
        key: function(r) {
            if (r.key) {
                var s = db[r.key] || r.key;
                if (s !== "Unidentified")
                    return s
            }
            return r.type === "keypress" ? (r = va(r),
            r === 13 ? "Enter" : String.fromCharCode(r)) : r.type === "keydown" || r.type === "keyup" ? fb[r.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Wu,
        charCode: function(r) {
            return r.type === "keypress" ? va(r) : 0
        },
        keyCode: function(r) {
            return r.type === "keydown" || r.type === "keyup" ? r.keyCode : 0
        },
        which: function(r) {
            return r.type === "keypress" ? va(r) : r.type === "keydown" || r.type === "keyup" ? r.keyCode : 0
        }
    })
      , gb = It(mb)
      , yb = B({}, xa, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , Up = It(yb)
      , vb = B({}, $i, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Wu
    })
      , wb = It(vb)
      , xb = B({}, Os, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , Sb = It(xb)
      , bb = B({}, xa, {
        deltaX: function(r) {
            return "deltaX"in r ? r.deltaX : "wheelDeltaX"in r ? -r.wheelDeltaX : 0
        },
        deltaY: function(r) {
            return "deltaY"in r ? r.deltaY : "wheelDeltaY"in r ? -r.wheelDeltaY : "wheelDelta"in r ? -r.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , Cb = It(bb)
      , Eb = [9, 13, 27, 32]
      , qu = d && "CompositionEvent"in window
      , Wi = null;
    d && "documentMode"in document && (Wi = document.documentMode);
    var kb = d && "TextEvent"in window && !Wi
      , Bp = d && (!qu || Wi && 8 < Wi && 11 >= Wi)
      , zp = " "
      , $p = !1;
    function Hp(r, s) {
        switch (r) {
        case "keyup":
            return Eb.indexOf(s.keyCode) !== -1;
        case "keydown":
            return s.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function Wp(r) {
        return r = r.detail,
        typeof r == "object" && "data"in r ? r.data : null
    }
    var js = !1;
    function Tb(r, s) {
        switch (r) {
        case "compositionend":
            return Wp(s);
        case "keypress":
            return s.which !== 32 ? null : ($p = !0,
            zp);
        case "textInput":
            return r = s.data,
            r === zp && $p ? null : r;
        default:
            return null
        }
    }
    function Pb(r, s) {
        if (js)
            return r === "compositionend" || !qu && Hp(r, s) ? (r = Dp(),
            ya = Uu = ir = null,
            js = !1,
            r) : null;
        switch (r) {
        case "paste":
            return null;
        case "keypress":
            if (!(s.ctrlKey || s.altKey || s.metaKey) || s.ctrlKey && s.altKey) {
                if (s.char && 1 < s.char.length)
                    return s.char;
                if (s.which)
                    return String.fromCharCode(s.which)
            }
            return null;
        case "compositionend":
            return Bp && s.locale !== "ko" ? null : s.data;
        default:
            return null
        }
    }
    var _b = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function qp(r) {
        var s = r && r.nodeName && r.nodeName.toLowerCase();
        return s === "input" ? !!_b[r.type] : s === "textarea"
    }
    function Kp(r, s, a, c) {
        hp(c),
        s = ka(s, "onChange"),
        0 < s.length && (a = new Bu("onChange","change",null,a,c),
        r.push({
            event: a,
            listeners: s
        }))
    }
    var qi = null
      , Ki = null;
    function Rb(r) {
        dm(r, 0)
    }
    function Sa(r) {
        var s = Fs(r);
        if (Br(s))
            return r
    }
    function Ab(r, s) {
        if (r === "change")
            return s
    }
    var Qp = !1;
    if (d) {
        var Ku;
        if (d) {
            var Qu = "oninput"in document;
            if (!Qu) {
                var Gp = document.createElement("div");
                Gp.setAttribute("oninput", "return;"),
                Qu = typeof Gp.oninput == "function"
            }
            Ku = Qu
        } else
            Ku = !1;
        Qp = Ku && (!document.documentMode || 9 < document.documentMode)
    }
    function Yp() {
        qi && (qi.detachEvent("onpropertychange", Xp),
        Ki = qi = null)
    }
    function Xp(r) {
        if (r.propertyName === "value" && Sa(Ki)) {
            var s = [];
            Kp(s, Ki, r, Pu(r)),
            yp(Rb, s)
        }
    }
    function Nb(r, s, a) {
        r === "focusin" ? (Yp(),
        qi = s,
        Ki = a,
        qi.attachEvent("onpropertychange", Xp)) : r === "focusout" && Yp()
    }
    function Ob(r) {
        if (r === "selectionchange" || r === "keyup" || r === "keydown")
            return Sa(Ki)
    }
    function jb(r, s) {
        if (r === "click")
            return Sa(s)
    }
    function Lb(r, s) {
        if (r === "input" || r === "change")
            return Sa(s)
    }
    function Mb(r, s) {
        return r === s && (r !== 0 || 1 / r === 1 / s) || r !== r && s !== s
    }
    var on = typeof Object.is == "function" ? Object.is : Mb;
    function Qi(r, s) {
        if (on(r, s))
            return !0;
        if (typeof r != "object" || r === null || typeof s != "object" || s === null)
            return !1;
        var a = Object.keys(r)
          , c = Object.keys(s);
        if (a.length !== c.length)
            return !1;
        for (c = 0; c < a.length; c++) {
            var h = a[c];
            if (!f.call(s, h) || !on(r[h], s[h]))
                return !1
        }
        return !0
    }
    function Jp(r) {
        for (; r && r.firstChild; )
            r = r.firstChild;
        return r
    }
    function Zp(r, s) {
        var a = Jp(r);
        r = 0;
        for (var c; a; ) {
            if (a.nodeType === 3) {
                if (c = r + a.textContent.length,
                r <= s && c >= s)
                    return {
                        node: a,
                        offset: s - r
                    };
                r = c
            }
            e: {
                for (; a; ) {
                    if (a.nextSibling) {
                        a = a.nextSibling;
                        break e
                    }
                    a = a.parentNode
                }
                a = void 0
            }
            a = Jp(a)
        }
    }
    function em(r, s) {
        return r && s ? r === s ? !0 : r && r.nodeType === 3 ? !1 : s && s.nodeType === 3 ? em(r, s.parentNode) : "contains"in r ? r.contains(s) : r.compareDocumentPosition ? !!(r.compareDocumentPosition(s) & 16) : !1 : !1
    }
    function tm() {
        for (var r = window, s = Zn(); s instanceof r.HTMLIFrameElement; ) {
            try {
                var a = typeof s.contentWindow.location.href == "string"
            } catch {
                a = !1
            }
            if (a)
                r = s.contentWindow;
            else
                break;
            s = Zn(r.document)
        }
        return s
    }
    function Gu(r) {
        var s = r && r.nodeName && r.nodeName.toLowerCase();
        return s && (s === "input" && (r.type === "text" || r.type === "search" || r.type === "tel" || r.type === "url" || r.type === "password") || s === "textarea" || r.contentEditable === "true")
    }
    function Db(r) {
        var s = tm()
          , a = r.focusedElem
          , c = r.selectionRange;
        if (s !== a && a && a.ownerDocument && em(a.ownerDocument.documentElement, a)) {
            if (c !== null && Gu(a)) {
                if (s = c.start,
                r = c.end,
                r === void 0 && (r = s),
                "selectionStart"in a)
                    a.selectionStart = s,
                    a.selectionEnd = Math.min(r, a.value.length);
                else if (r = (s = a.ownerDocument || document) && s.defaultView || window,
                r.getSelection) {
                    r = r.getSelection();
                    var h = a.textContent.length
                      , g = Math.min(c.start, h);
                    c = c.end === void 0 ? g : Math.min(c.end, h),
                    !r.extend && g > c && (h = c,
                    c = g,
                    g = h),
                    h = Zp(a, g);
                    var v = Zp(a, c);
                    h && v && (r.rangeCount !== 1 || r.anchorNode !== h.node || r.anchorOffset !== h.offset || r.focusNode !== v.node || r.focusOffset !== v.offset) && (s = s.createRange(),
                    s.setStart(h.node, h.offset),
                    r.removeAllRanges(),
                    g > c ? (r.addRange(s),
                    r.extend(v.node, v.offset)) : (s.setEnd(v.node, v.offset),
                    r.addRange(s)))
                }
            }
            for (s = [],
            r = a; r = r.parentNode; )
                r.nodeType === 1 && s.push({
                    element: r,
                    left: r.scrollLeft,
                    top: r.scrollTop
                });
            for (typeof a.focus == "function" && a.focus(),
            a = 0; a < s.length; a++)
                r = s[a],
                r.element.scrollLeft = r.left,
                r.element.scrollTop = r.top
        }
    }
    var Ib = d && "documentMode"in document && 11 >= document.documentMode
      , Ls = null
      , Yu = null
      , Gi = null
      , Xu = !1;
    function nm(r, s, a) {
        var c = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
        Xu || Ls == null || Ls !== Zn(c) || (c = Ls,
        "selectionStart"in c && Gu(c) ? c = {
            start: c.selectionStart,
            end: c.selectionEnd
        } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(),
        c = {
            anchorNode: c.anchorNode,
            anchorOffset: c.anchorOffset,
            focusNode: c.focusNode,
            focusOffset: c.focusOffset
        }),
        Gi && Qi(Gi, c) || (Gi = c,
        c = ka(Yu, "onSelect"),
        0 < c.length && (s = new Bu("onSelect","select",null,s,a),
        r.push({
            event: s,
            listeners: c
        }),
        s.target = Ls)))
    }
    function ba(r, s) {
        var a = {};
        return a[r.toLowerCase()] = s.toLowerCase(),
        a["Webkit" + r] = "webkit" + s,
        a["Moz" + r] = "moz" + s,
        a
    }
    var Ms = {
        animationend: ba("Animation", "AnimationEnd"),
        animationiteration: ba("Animation", "AnimationIteration"),
        animationstart: ba("Animation", "AnimationStart"),
        transitionend: ba("Transition", "TransitionEnd")
    }
      , Ju = {}
      , rm = {};
    d && (rm = document.createElement("div").style,
    "AnimationEvent"in window || (delete Ms.animationend.animation,
    delete Ms.animationiteration.animation,
    delete Ms.animationstart.animation),
    "TransitionEvent"in window || delete Ms.transitionend.transition);
    function Ca(r) {
        if (Ju[r])
            return Ju[r];
        if (!Ms[r])
            return r;
        var s = Ms[r], a;
        for (a in s)
            if (s.hasOwnProperty(a) && a in rm)
                return Ju[r] = s[a];
        return r
    }
    var sm = Ca("animationend")
      , im = Ca("animationiteration")
      , om = Ca("animationstart")
      , am = Ca("transitionend")
      , lm = new Map
      , um = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function or(r, s) {
        lm.set(r, s),
        l(s, [r])
    }
    for (var Zu = 0; Zu < um.length; Zu++) {
        var ec = um[Zu]
          , Fb = ec.toLowerCase()
          , Vb = ec[0].toUpperCase() + ec.slice(1);
        or(Fb, "on" + Vb)
    }
    or(sm, "onAnimationEnd"),
    or(im, "onAnimationIteration"),
    or(om, "onAnimationStart"),
    or("dblclick", "onDoubleClick"),
    or("focusin", "onFocus"),
    or("focusout", "onBlur"),
    or(am, "onTransitionEnd"),
    u("onMouseEnter", ["mouseout", "mouseover"]),
    u("onMouseLeave", ["mouseout", "mouseover"]),
    u("onPointerEnter", ["pointerout", "pointerover"]),
    u("onPointerLeave", ["pointerout", "pointerover"]),
    l("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    l("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    l("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    l("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    l("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Yi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , Ub = new Set("cancel close invalid load scroll toggle".split(" ").concat(Yi));
    function cm(r, s, a) {
        var c = r.type || "unknown-event";
        r.currentTarget = a,
        FS(c, s, void 0, r),
        r.currentTarget = null
    }
    function dm(r, s) {
        s = (s & 4) !== 0;
        for (var a = 0; a < r.length; a++) {
            var c = r[a]
              , h = c.event;
            c = c.listeners;
            e: {
                var g = void 0;
                if (s)
                    for (var v = c.length - 1; 0 <= v; v--) {
                        var T = c[v]
                          , _ = T.instance
                          , F = T.currentTarget;
                        if (T = T.listener,
                        _ !== g && h.isPropagationStopped())
                            break e;
                        cm(h, T, F),
                        g = _
                    }
                else
                    for (v = 0; v < c.length; v++) {
                        if (T = c[v],
                        _ = T.instance,
                        F = T.currentTarget,
                        T = T.listener,
                        _ !== g && h.isPropagationStopped())
                            break e;
                        cm(h, T, F),
                        g = _
                    }
            }
        }
        if (aa)
            throw r = Nu,
            aa = !1,
            Nu = null,
            r
    }
    function Fe(r, s) {
        var a = s[lc];
        a === void 0 && (a = s[lc] = new Set);
        var c = r + "__bubble";
        a.has(c) || (fm(s, r, 2, !1),
        a.add(c))
    }
    function tc(r, s, a) {
        var c = 0;
        s && (c |= 4),
        fm(a, r, c, s)
    }
    var Ea = "_reactListening" + Math.random().toString(36).slice(2);
    function Xi(r) {
        if (!r[Ea]) {
            r[Ea] = !0,
            i.forEach(function(a) {
                a !== "selectionchange" && (Ub.has(a) || tc(a, !1, r),
                tc(a, !0, r))
            });
            var s = r.nodeType === 9 ? r : r.ownerDocument;
            s === null || s[Ea] || (s[Ea] = !0,
            tc("selectionchange", !1, s))
        }
    }
    function fm(r, s, a, c) {
        switch (Mp(s)) {
        case 1:
            var h = eb;
            break;
        case 4:
            h = tb;
            break;
        default:
            h = Fu
        }
        a = h.bind(null, s, a, r),
        h = void 0,
        !Au || s !== "touchstart" && s !== "touchmove" && s !== "wheel" || (h = !0),
        c ? h !== void 0 ? r.addEventListener(s, a, {
            capture: !0,
            passive: h
        }) : r.addEventListener(s, a, !0) : h !== void 0 ? r.addEventListener(s, a, {
            passive: h
        }) : r.addEventListener(s, a, !1)
    }
    function nc(r, s, a, c, h) {
        var g = c;
        if ((s & 1) === 0 && (s & 2) === 0 && c !== null)
            e: for (; ; ) {
                if (c === null)
                    return;
                var v = c.tag;
                if (v === 3 || v === 4) {
                    var T = c.stateNode.containerInfo;
                    if (T === h || T.nodeType === 8 && T.parentNode === h)
                        break;
                    if (v === 4)
                        for (v = c.return; v !== null; ) {
                            var _ = v.tag;
                            if ((_ === 3 || _ === 4) && (_ = v.stateNode.containerInfo,
                            _ === h || _.nodeType === 8 && _.parentNode === h))
                                return;
                            v = v.return
                        }
                    for (; T !== null; ) {
                        if (v = $r(T),
                        v === null)
                            return;
                        if (_ = v.tag,
                        _ === 5 || _ === 6) {
                            c = g = v;
                            continue e
                        }
                        T = T.parentNode
                    }
                }
                c = c.return
            }
        yp(function() {
            var F = g
              , W = Pu(a)
              , q = [];
            e: {
                var H = lm.get(r);
                if (H !== void 0) {
                    var J = Bu
                      , te = r;
                    switch (r) {
                    case "keypress":
                        if (va(a) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        J = gb;
                        break;
                    case "focusin":
                        te = "focus",
                        J = Hu;
                        break;
                    case "focusout":
                        te = "blur",
                        J = Hu;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        J = Hu;
                        break;
                    case "click":
                        if (a.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        J = Fp;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        J = sb;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        J = wb;
                        break;
                    case sm:
                    case im:
                    case om:
                        J = ab;
                        break;
                    case am:
                        J = Sb;
                        break;
                    case "scroll":
                        J = nb;
                        break;
                    case "wheel":
                        J = Cb;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        J = ub;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        J = Up
                    }
                    var se = (s & 4) !== 0
                      , Ye = !se && r === "scroll"
                      , M = se ? H !== null ? H + "Capture" : null : H;
                    se = [];
                    for (var A = F, D; A !== null; ) {
                        D = A;
                        var G = D.stateNode;
                        if (D.tag === 5 && G !== null && (D = G,
                        M !== null && (G = ji(A, M),
                        G != null && se.push(Ji(A, G, D)))),
                        Ye)
                            break;
                        A = A.return
                    }
                    0 < se.length && (H = new J(H,te,null,a,W),
                    q.push({
                        event: H,
                        listeners: se
                    }))
                }
            }
            if ((s & 7) === 0) {
                e: {
                    if (H = r === "mouseover" || r === "pointerover",
                    J = r === "mouseout" || r === "pointerout",
                    H && a !== Tu && (te = a.relatedTarget || a.fromElement) && ($r(te) || te[Mn]))
                        break e;
                    if ((J || H) && (H = W.window === W ? W : (H = W.ownerDocument) ? H.defaultView || H.parentWindow : window,
                    J ? (te = a.relatedTarget || a.toElement,
                    J = F,
                    te = te ? $r(te) : null,
                    te !== null && (Ye = zr(te),
                    te !== Ye || te.tag !== 5 && te.tag !== 6) && (te = null)) : (J = null,
                    te = F),
                    J !== te)) {
                        if (se = Fp,
                        G = "onMouseLeave",
                        M = "onMouseEnter",
                        A = "mouse",
                        (r === "pointerout" || r === "pointerover") && (se = Up,
                        G = "onPointerLeave",
                        M = "onPointerEnter",
                        A = "pointer"),
                        Ye = J == null ? H : Fs(J),
                        D = te == null ? H : Fs(te),
                        H = new se(G,A + "leave",J,a,W),
                        H.target = Ye,
                        H.relatedTarget = D,
                        G = null,
                        $r(W) === F && (se = new se(M,A + "enter",te,a,W),
                        se.target = D,
                        se.relatedTarget = Ye,
                        G = se),
                        Ye = G,
                        J && te)
                            t: {
                                for (se = J,
                                M = te,
                                A = 0,
                                D = se; D; D = Ds(D))
                                    A++;
                                for (D = 0,
                                G = M; G; G = Ds(G))
                                    D++;
                                for (; 0 < A - D; )
                                    se = Ds(se),
                                    A--;
                                for (; 0 < D - A; )
                                    M = Ds(M),
                                    D--;
                                for (; A--; ) {
                                    if (se === M || M !== null && se === M.alternate)
                                        break t;
                                    se = Ds(se),
                                    M = Ds(M)
                                }
                                se = null
                            }
                        else
                            se = null;
                        J !== null && hm(q, H, J, se, !1),
                        te !== null && Ye !== null && hm(q, Ye, te, se, !0)
                    }
                }
                e: {
                    if (H = F ? Fs(F) : window,
                    J = H.nodeName && H.nodeName.toLowerCase(),
                    J === "select" || J === "input" && H.type === "file")
                        var oe = Ab;
                    else if (qp(H))
                        if (Qp)
                            oe = Lb;
                        else {
                            oe = Ob;
                            var ae = Nb
                        }
                    else
                        (J = H.nodeName) && J.toLowerCase() === "input" && (H.type === "checkbox" || H.type === "radio") && (oe = jb);
                    if (oe && (oe = oe(r, F))) {
                        Kp(q, oe, a, W);
                        break e
                    }
                    ae && ae(r, H, F),
                    r === "focusout" && (ae = H._wrapperState) && ae.controlled && H.type === "number" && Su(H, "number", H.value)
                }
                switch (ae = F ? Fs(F) : window,
                r) {
                case "focusin":
                    (qp(ae) || ae.contentEditable === "true") && (Ls = ae,
                    Yu = F,
                    Gi = null);
                    break;
                case "focusout":
                    Gi = Yu = Ls = null;
                    break;
                case "mousedown":
                    Xu = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Xu = !1,
                    nm(q, a, W);
                    break;
                case "selectionchange":
                    if (Ib)
                        break;
                case "keydown":
                case "keyup":
                    nm(q, a, W)
                }
                var le;
                if (qu)
                    e: {
                        switch (r) {
                        case "compositionstart":
                            var me = "onCompositionStart";
                            break e;
                        case "compositionend":
                            me = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            me = "onCompositionUpdate";
                            break e
                        }
                        me = void 0
                    }
                else
                    js ? Hp(r, a) && (me = "onCompositionEnd") : r === "keydown" && a.keyCode === 229 && (me = "onCompositionStart");
                me && (Bp && a.locale !== "ko" && (js || me !== "onCompositionStart" ? me === "onCompositionEnd" && js && (le = Dp()) : (ir = W,
                Uu = "value"in ir ? ir.value : ir.textContent,
                js = !0)),
                ae = ka(F, me),
                0 < ae.length && (me = new Vp(me,r,null,a,W),
                q.push({
                    event: me,
                    listeners: ae
                }),
                le ? me.data = le : (le = Wp(a),
                le !== null && (me.data = le)))),
                (le = kb ? Tb(r, a) : Pb(r, a)) && (F = ka(F, "onBeforeInput"),
                0 < F.length && (W = new Vp("onBeforeInput","beforeinput",null,a,W),
                q.push({
                    event: W,
                    listeners: F
                }),
                W.data = le))
            }
            dm(q, s)
        })
    }
    function Ji(r, s, a) {
        return {
            instance: r,
            listener: s,
            currentTarget: a
        }
    }
    function ka(r, s) {
        for (var a = s + "Capture", c = []; r !== null; ) {
            var h = r
              , g = h.stateNode;
            h.tag === 5 && g !== null && (h = g,
            g = ji(r, a),
            g != null && c.unshift(Ji(r, g, h)),
            g = ji(r, s),
            g != null && c.push(Ji(r, g, h))),
            r = r.return
        }
        return c
    }
    function Ds(r) {
        if (r === null)
            return null;
        do
            r = r.return;
        while (r && r.tag !== 5);
        return r || null
    }
    function hm(r, s, a, c, h) {
        for (var g = s._reactName, v = []; a !== null && a !== c; ) {
            var T = a
              , _ = T.alternate
              , F = T.stateNode;
            if (_ !== null && _ === c)
                break;
            T.tag === 5 && F !== null && (T = F,
            h ? (_ = ji(a, g),
            _ != null && v.unshift(Ji(a, _, T))) : h || (_ = ji(a, g),
            _ != null && v.push(Ji(a, _, T)))),
            a = a.return
        }
        v.length !== 0 && r.push({
            event: s,
            listeners: v
        })
    }
    var Bb = /\r\n?/g
      , zb = /\u0000|\uFFFD/g;
    function pm(r) {
        return (typeof r == "string" ? r : "" + r).replace(Bb, `
`).replace(zb, "")
    }
    function Ta(r, s, a) {
        if (s = pm(s),
        pm(r) !== s && a)
            throw Error(n(425))
    }
    function Pa() {}
    var rc = null
      , sc = null;
    function ic(r, s) {
        return r === "textarea" || r === "noscript" || typeof s.children == "string" || typeof s.children == "number" || typeof s.dangerouslySetInnerHTML == "object" && s.dangerouslySetInnerHTML !== null && s.dangerouslySetInnerHTML.__html != null
    }
    var oc = typeof setTimeout == "function" ? setTimeout : void 0
      , $b = typeof clearTimeout == "function" ? clearTimeout : void 0
      , mm = typeof Promise == "function" ? Promise : void 0
      , Hb = typeof queueMicrotask == "function" ? queueMicrotask : typeof mm < "u" ? function(r) {
        return mm.resolve(null).then(r).catch(Wb)
    }
    : oc;
    function Wb(r) {
        setTimeout(function() {
            throw r
        })
    }
    function ac(r, s) {
        var a = s
          , c = 0;
        do {
            var h = a.nextSibling;
            if (r.removeChild(a),
            h && h.nodeType === 8)
                if (a = h.data,
                a === "/$") {
                    if (c === 0) {
                        r.removeChild(h),
                        zi(s);
                        return
                    }
                    c--
                } else
                    a !== "$" && a !== "$?" && a !== "$!" || c++;
            a = h
        } while (a);
        zi(s)
    }
    function ar(r) {
        for (; r != null; r = r.nextSibling) {
            var s = r.nodeType;
            if (s === 1 || s === 3)
                break;
            if (s === 8) {
                if (s = r.data,
                s === "$" || s === "$!" || s === "$?")
                    break;
                if (s === "/$")
                    return null
            }
        }
        return r
    }
    function gm(r) {
        r = r.previousSibling;
        for (var s = 0; r; ) {
            if (r.nodeType === 8) {
                var a = r.data;
                if (a === "$" || a === "$!" || a === "$?") {
                    if (s === 0)
                        return r;
                    s--
                } else
                    a === "/$" && s++
            }
            r = r.previousSibling
        }
        return null
    }
    var Is = Math.random().toString(36).slice(2)
      , xn = "__reactFiber$" + Is
      , Zi = "__reactProps$" + Is
      , Mn = "__reactContainer$" + Is
      , lc = "__reactEvents$" + Is
      , qb = "__reactListeners$" + Is
      , Kb = "__reactHandles$" + Is;
    function $r(r) {
        var s = r[xn];
        if (s)
            return s;
        for (var a = r.parentNode; a; ) {
            if (s = a[Mn] || a[xn]) {
                if (a = s.alternate,
                s.child !== null || a !== null && a.child !== null)
                    for (r = gm(r); r !== null; ) {
                        if (a = r[xn])
                            return a;
                        r = gm(r)
                    }
                return s
            }
            r = a,
            a = r.parentNode
        }
        return null
    }
    function eo(r) {
        return r = r[xn] || r[Mn],
        !r || r.tag !== 5 && r.tag !== 6 && r.tag !== 13 && r.tag !== 3 ? null : r
    }
    function Fs(r) {
        if (r.tag === 5 || r.tag === 6)
            return r.stateNode;
        throw Error(n(33))
    }
    function _a(r) {
        return r[Zi] || null
    }
    var uc = []
      , Vs = -1;
    function lr(r) {
        return {
            current: r
        }
    }
    function Ve(r) {
        0 > Vs || (r.current = uc[Vs],
        uc[Vs] = null,
        Vs--)
    }
    function Ie(r, s) {
        Vs++,
        uc[Vs] = r.current,
        r.current = s
    }
    var ur = {}
      , gt = lr(ur)
      , Pt = lr(!1)
      , Hr = ur;
    function Us(r, s) {
        var a = r.type.contextTypes;
        if (!a)
            return ur;
        var c = r.stateNode;
        if (c && c.__reactInternalMemoizedUnmaskedChildContext === s)
            return c.__reactInternalMemoizedMaskedChildContext;
        var h = {}, g;
        for (g in a)
            h[g] = s[g];
        return c && (r = r.stateNode,
        r.__reactInternalMemoizedUnmaskedChildContext = s,
        r.__reactInternalMemoizedMaskedChildContext = h),
        h
    }
    function _t(r) {
        return r = r.childContextTypes,
        r != null
    }
    function Ra() {
        Ve(Pt),
        Ve(gt)
    }
    function ym(r, s, a) {
        if (gt.current !== ur)
            throw Error(n(168));
        Ie(gt, s),
        Ie(Pt, a)
    }
    function vm(r, s, a) {
        var c = r.stateNode;
        if (s = s.childContextTypes,
        typeof c.getChildContext != "function")
            return a;
        c = c.getChildContext();
        for (var h in c)
            if (!(h in s))
                throw Error(n(108, Ae(r) || "Unknown", h));
        return B({}, a, c)
    }
    function Aa(r) {
        return r = (r = r.stateNode) && r.__reactInternalMemoizedMergedChildContext || ur,
        Hr = gt.current,
        Ie(gt, r),
        Ie(Pt, Pt.current),
        !0
    }
    function wm(r, s, a) {
        var c = r.stateNode;
        if (!c)
            throw Error(n(169));
        a ? (r = vm(r, s, Hr),
        c.__reactInternalMemoizedMergedChildContext = r,
        Ve(Pt),
        Ve(gt),
        Ie(gt, r)) : Ve(Pt),
        Ie(Pt, a)
    }
    var Dn = null
      , Na = !1
      , cc = !1;
    function xm(r) {
        Dn === null ? Dn = [r] : Dn.push(r)
    }
    function Qb(r) {
        Na = !0,
        xm(r)
    }
    function cr() {
        if (!cc && Dn !== null) {
            cc = !0;
            var r = 0
              , s = je;
            try {
                var a = Dn;
                for (je = 1; r < a.length; r++) {
                    var c = a[r];
                    do
                        c = c(!0);
                    while (c !== null)
                }
                Dn = null,
                Na = !1
            } catch (h) {
                throw Dn !== null && (Dn = Dn.slice(r + 1)),
                bp(Ou, cr),
                h
            } finally {
                je = s,
                cc = !1
            }
        }
        return null
    }
    var Bs = []
      , zs = 0
      , Oa = null
      , ja = 0
      , Ht = []
      , Wt = 0
      , Wr = null
      , In = 1
      , Fn = "";
    function qr(r, s) {
        Bs[zs++] = ja,
        Bs[zs++] = Oa,
        Oa = r,
        ja = s
    }
    function Sm(r, s, a) {
        Ht[Wt++] = In,
        Ht[Wt++] = Fn,
        Ht[Wt++] = Wr,
        Wr = r;
        var c = In;
        r = Fn;
        var h = 32 - sn(c) - 1;
        c &= ~(1 << h),
        a += 1;
        var g = 32 - sn(s) + h;
        if (30 < g) {
            var v = h - h % 5;
            g = (c & (1 << v) - 1).toString(32),
            c >>= v,
            h -= v,
            In = 1 << 32 - sn(s) + h | a << h | c,
            Fn = g + r
        } else
            In = 1 << g | a << h | c,
            Fn = r
    }
    function dc(r) {
        r.return !== null && (qr(r, 1),
        Sm(r, 1, 0))
    }
    function fc(r) {
        for (; r === Oa; )
            Oa = Bs[--zs],
            Bs[zs] = null,
            ja = Bs[--zs],
            Bs[zs] = null;
        for (; r === Wr; )
            Wr = Ht[--Wt],
            Ht[Wt] = null,
            Fn = Ht[--Wt],
            Ht[Wt] = null,
            In = Ht[--Wt],
            Ht[Wt] = null
    }
    var Ft = null
      , Vt = null
      , Be = !1
      , an = null;
    function bm(r, s) {
        var a = Gt(5, null, null, 0);
        a.elementType = "DELETED",
        a.stateNode = s,
        a.return = r,
        s = r.deletions,
        s === null ? (r.deletions = [a],
        r.flags |= 16) : s.push(a)
    }
    function Cm(r, s) {
        switch (r.tag) {
        case 5:
            var a = r.type;
            return s = s.nodeType !== 1 || a.toLowerCase() !== s.nodeName.toLowerCase() ? null : s,
            s !== null ? (r.stateNode = s,
            Ft = r,
            Vt = ar(s.firstChild),
            !0) : !1;
        case 6:
            return s = r.pendingProps === "" || s.nodeType !== 3 ? null : s,
            s !== null ? (r.stateNode = s,
            Ft = r,
            Vt = null,
            !0) : !1;
        case 13:
            return s = s.nodeType !== 8 ? null : s,
            s !== null ? (a = Wr !== null ? {
                id: In,
                overflow: Fn
            } : null,
            r.memoizedState = {
                dehydrated: s,
                treeContext: a,
                retryLane: 1073741824
            },
            a = Gt(18, null, null, 0),
            a.stateNode = s,
            a.return = r,
            r.child = a,
            Ft = r,
            Vt = null,
            !0) : !1;
        default:
            return !1
        }
    }
    function hc(r) {
        return (r.mode & 1) !== 0 && (r.flags & 128) === 0
    }
    function pc(r) {
        if (Be) {
            var s = Vt;
            if (s) {
                var a = s;
                if (!Cm(r, s)) {
                    if (hc(r))
                        throw Error(n(418));
                    s = ar(a.nextSibling);
                    var c = Ft;
                    s && Cm(r, s) ? bm(c, a) : (r.flags = r.flags & -4097 | 2,
                    Be = !1,
                    Ft = r)
                }
            } else {
                if (hc(r))
                    throw Error(n(418));
                r.flags = r.flags & -4097 | 2,
                Be = !1,
                Ft = r
            }
        }
    }
    function Em(r) {
        for (r = r.return; r !== null && r.tag !== 5 && r.tag !== 3 && r.tag !== 13; )
            r = r.return;
        Ft = r
    }
    function La(r) {
        if (r !== Ft)
            return !1;
        if (!Be)
            return Em(r),
            Be = !0,
            !1;
        var s;
        if ((s = r.tag !== 3) && !(s = r.tag !== 5) && (s = r.type,
        s = s !== "head" && s !== "body" && !ic(r.type, r.memoizedProps)),
        s && (s = Vt)) {
            if (hc(r))
                throw km(),
                Error(n(418));
            for (; s; )
                bm(r, s),
                s = ar(s.nextSibling)
        }
        if (Em(r),
        r.tag === 13) {
            if (r = r.memoizedState,
            r = r !== null ? r.dehydrated : null,
            !r)
                throw Error(n(317));
            e: {
                for (r = r.nextSibling,
                s = 0; r; ) {
                    if (r.nodeType === 8) {
                        var a = r.data;
                        if (a === "/$") {
                            if (s === 0) {
                                Vt = ar(r.nextSibling);
                                break e
                            }
                            s--
                        } else
                            a !== "$" && a !== "$!" && a !== "$?" || s++
                    }
                    r = r.nextSibling
                }
                Vt = null
            }
        } else
            Vt = Ft ? ar(r.stateNode.nextSibling) : null;
        return !0
    }
    function km() {
        for (var r = Vt; r; )
            r = ar(r.nextSibling)
    }
    function $s() {
        Vt = Ft = null,
        Be = !1
    }
    function mc(r) {
        an === null ? an = [r] : an.push(r)
    }
    var Gb = N.ReactCurrentBatchConfig;
    function to(r, s, a) {
        if (r = a.ref,
        r !== null && typeof r != "function" && typeof r != "object") {
            if (a._owner) {
                if (a = a._owner,
                a) {
                    if (a.tag !== 1)
                        throw Error(n(309));
                    var c = a.stateNode
                }
                if (!c)
                    throw Error(n(147, r));
                var h = c
                  , g = "" + r;
                return s !== null && s.ref !== null && typeof s.ref == "function" && s.ref._stringRef === g ? s.ref : (s = function(v) {
                    var T = h.refs;
                    v === null ? delete T[g] : T[g] = v
                }
                ,
                s._stringRef = g,
                s)
            }
            if (typeof r != "string")
                throw Error(n(284));
            if (!a._owner)
                throw Error(n(290, r))
        }
        return r
    }
    function Ma(r, s) {
        throw r = Object.prototype.toString.call(s),
        Error(n(31, r === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : r))
    }
    function Tm(r) {
        var s = r._init;
        return s(r._payload)
    }
    function Pm(r) {
        function s(M, A) {
            if (r) {
                var D = M.deletions;
                D === null ? (M.deletions = [A],
                M.flags |= 16) : D.push(A)
            }
        }
        function a(M, A) {
            if (!r)
                return null;
            for (; A !== null; )
                s(M, A),
                A = A.sibling;
            return null
        }
        function c(M, A) {
            for (M = new Map; A !== null; )
                A.key !== null ? M.set(A.key, A) : M.set(A.index, A),
                A = A.sibling;
            return M
        }
        function h(M, A) {
            return M = vr(M, A),
            M.index = 0,
            M.sibling = null,
            M
        }
        function g(M, A, D) {
            return M.index = D,
            r ? (D = M.alternate,
            D !== null ? (D = D.index,
            D < A ? (M.flags |= 2,
            A) : D) : (M.flags |= 2,
            A)) : (M.flags |= 1048576,
            A)
        }
        function v(M) {
            return r && M.alternate === null && (M.flags |= 2),
            M
        }
        function T(M, A, D, G) {
            return A === null || A.tag !== 6 ? (A = od(D, M.mode, G),
            A.return = M,
            A) : (A = h(A, D),
            A.return = M,
            A)
        }
        function _(M, A, D, G) {
            var oe = D.type;
            return oe === Y ? W(M, A, D.props.children, G, D.key) : A !== null && (A.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === we && Tm(oe) === A.type) ? (G = h(A, D.props),
            G.ref = to(M, A, D),
            G.return = M,
            G) : (G = il(D.type, D.key, D.props, null, M.mode, G),
            G.ref = to(M, A, D),
            G.return = M,
            G)
        }
        function F(M, A, D, G) {
            return A === null || A.tag !== 4 || A.stateNode.containerInfo !== D.containerInfo || A.stateNode.implementation !== D.implementation ? (A = ad(D, M.mode, G),
            A.return = M,
            A) : (A = h(A, D.children || []),
            A.return = M,
            A)
        }
        function W(M, A, D, G, oe) {
            return A === null || A.tag !== 7 ? (A = es(D, M.mode, G, oe),
            A.return = M,
            A) : (A = h(A, D),
            A.return = M,
            A)
        }
        function q(M, A, D) {
            if (typeof A == "string" && A !== "" || typeof A == "number")
                return A = od("" + A, M.mode, D),
                A.return = M,
                A;
            if (typeof A == "object" && A !== null) {
                switch (A.$$typeof) {
                case V:
                    return D = il(A.type, A.key, A.props, null, M.mode, D),
                    D.ref = to(M, null, A),
                    D.return = M,
                    D;
                case $:
                    return A = ad(A, M.mode, D),
                    A.return = M,
                    A;
                case we:
                    var G = A._init;
                    return q(M, G(A._payload), D)
                }
                if (Ai(A) || ie(A))
                    return A = es(A, M.mode, D, null),
                    A.return = M,
                    A;
                Ma(M, A)
            }
            return null
        }
        function H(M, A, D, G) {
            var oe = A !== null ? A.key : null;
            if (typeof D == "string" && D !== "" || typeof D == "number")
                return oe !== null ? null : T(M, A, "" + D, G);
            if (typeof D == "object" && D !== null) {
                switch (D.$$typeof) {
                case V:
                    return D.key === oe ? _(M, A, D, G) : null;
                case $:
                    return D.key === oe ? F(M, A, D, G) : null;
                case we:
                    return oe = D._init,
                    H(M, A, oe(D._payload), G)
                }
                if (Ai(D) || ie(D))
                    return oe !== null ? null : W(M, A, D, G, null);
                Ma(M, D)
            }
            return null
        }
        function J(M, A, D, G, oe) {
            if (typeof G == "string" && G !== "" || typeof G == "number")
                return M = M.get(D) || null,
                T(A, M, "" + G, oe);
            if (typeof G == "object" && G !== null) {
                switch (G.$$typeof) {
                case V:
                    return M = M.get(G.key === null ? D : G.key) || null,
                    _(A, M, G, oe);
                case $:
                    return M = M.get(G.key === null ? D : G.key) || null,
                    F(A, M, G, oe);
                case we:
                    var ae = G._init;
                    return J(M, A, D, ae(G._payload), oe)
                }
                if (Ai(G) || ie(G))
                    return M = M.get(D) || null,
                    W(A, M, G, oe, null);
                Ma(A, G)
            }
            return null
        }
        function te(M, A, D, G) {
            for (var oe = null, ae = null, le = A, me = A = 0, lt = null; le !== null && me < D.length; me++) {
                le.index > me ? (lt = le,
                le = null) : lt = le.sibling;
                var _e = H(M, le, D[me], G);
                if (_e === null) {
                    le === null && (le = lt);
                    break
                }
                r && le && _e.alternate === null && s(M, le),
                A = g(_e, A, me),
                ae === null ? oe = _e : ae.sibling = _e,
                ae = _e,
                le = lt
            }
            if (me === D.length)
                return a(M, le),
                Be && qr(M, me),
                oe;
            if (le === null) {
                for (; me < D.length; me++)
                    le = q(M, D[me], G),
                    le !== null && (A = g(le, A, me),
                    ae === null ? oe = le : ae.sibling = le,
                    ae = le);
                return Be && qr(M, me),
                oe
            }
            for (le = c(M, le); me < D.length; me++)
                lt = J(le, M, me, D[me], G),
                lt !== null && (r && lt.alternate !== null && le.delete(lt.key === null ? me : lt.key),
                A = g(lt, A, me),
                ae === null ? oe = lt : ae.sibling = lt,
                ae = lt);
            return r && le.forEach(function(wr) {
                return s(M, wr)
            }),
            Be && qr(M, me),
            oe
        }
        function se(M, A, D, G) {
            var oe = ie(D);
            if (typeof oe != "function")
                throw Error(n(150));
            if (D = oe.call(D),
            D == null)
                throw Error(n(151));
            for (var ae = oe = null, le = A, me = A = 0, lt = null, _e = D.next(); le !== null && !_e.done; me++,
            _e = D.next()) {
                le.index > me ? (lt = le,
                le = null) : lt = le.sibling;
                var wr = H(M, le, _e.value, G);
                if (wr === null) {
                    le === null && (le = lt);
                    break
                }
                r && le && wr.alternate === null && s(M, le),
                A = g(wr, A, me),
                ae === null ? oe = wr : ae.sibling = wr,
                ae = wr,
                le = lt
            }
            if (_e.done)
                return a(M, le),
                Be && qr(M, me),
                oe;
            if (le === null) {
                for (; !_e.done; me++,
                _e = D.next())
                    _e = q(M, _e.value, G),
                    _e !== null && (A = g(_e, A, me),
                    ae === null ? oe = _e : ae.sibling = _e,
                    ae = _e);
                return Be && qr(M, me),
                oe
            }
            for (le = c(M, le); !_e.done; me++,
            _e = D.next())
                _e = J(le, M, me, _e.value, G),
                _e !== null && (r && _e.alternate !== null && le.delete(_e.key === null ? me : _e.key),
                A = g(_e, A, me),
                ae === null ? oe = _e : ae.sibling = _e,
                ae = _e);
            return r && le.forEach(function(_C) {
                return s(M, _C)
            }),
            Be && qr(M, me),
            oe
        }
        function Ye(M, A, D, G) {
            if (typeof D == "object" && D !== null && D.type === Y && D.key === null && (D = D.props.children),
            typeof D == "object" && D !== null) {
                switch (D.$$typeof) {
                case V:
                    e: {
                        for (var oe = D.key, ae = A; ae !== null; ) {
                            if (ae.key === oe) {
                                if (oe = D.type,
                                oe === Y) {
                                    if (ae.tag === 7) {
                                        a(M, ae.sibling),
                                        A = h(ae, D.props.children),
                                        A.return = M,
                                        M = A;
                                        break e
                                    }
                                } else if (ae.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === we && Tm(oe) === ae.type) {
                                    a(M, ae.sibling),
                                    A = h(ae, D.props),
                                    A.ref = to(M, ae, D),
                                    A.return = M,
                                    M = A;
                                    break e
                                }
                                a(M, ae);
                                break
                            } else
                                s(M, ae);
                            ae = ae.sibling
                        }
                        D.type === Y ? (A = es(D.props.children, M.mode, G, D.key),
                        A.return = M,
                        M = A) : (G = il(D.type, D.key, D.props, null, M.mode, G),
                        G.ref = to(M, A, D),
                        G.return = M,
                        M = G)
                    }
                    return v(M);
                case $:
                    e: {
                        for (ae = D.key; A !== null; ) {
                            if (A.key === ae)
                                if (A.tag === 4 && A.stateNode.containerInfo === D.containerInfo && A.stateNode.implementation === D.implementation) {
                                    a(M, A.sibling),
                                    A = h(A, D.children || []),
                                    A.return = M,
                                    M = A;
                                    break e
                                } else {
                                    a(M, A);
                                    break
                                }
                            else
                                s(M, A);
                            A = A.sibling
                        }
                        A = ad(D, M.mode, G),
                        A.return = M,
                        M = A
                    }
                    return v(M);
                case we:
                    return ae = D._init,
                    Ye(M, A, ae(D._payload), G)
                }
                if (Ai(D))
                    return te(M, A, D, G);
                if (ie(D))
                    return se(M, A, D, G);
                Ma(M, D)
            }
            return typeof D == "string" && D !== "" || typeof D == "number" ? (D = "" + D,
            A !== null && A.tag === 6 ? (a(M, A.sibling),
            A = h(A, D),
            A.return = M,
            M = A) : (a(M, A),
            A = od(D, M.mode, G),
            A.return = M,
            M = A),
            v(M)) : a(M, A)
        }
        return Ye
    }
    var Hs = Pm(!0)
      , _m = Pm(!1)
      , Da = lr(null)
      , Ia = null
      , Ws = null
      , gc = null;
    function yc() {
        gc = Ws = Ia = null
    }
    function vc(r) {
        var s = Da.current;
        Ve(Da),
        r._currentValue = s
    }
    function wc(r, s, a) {
        for (; r !== null; ) {
            var c = r.alternate;
            if ((r.childLanes & s) !== s ? (r.childLanes |= s,
            c !== null && (c.childLanes |= s)) : c !== null && (c.childLanes & s) !== s && (c.childLanes |= s),
            r === a)
                break;
            r = r.return
        }
    }
    function qs(r, s) {
        Ia = r,
        gc = Ws = null,
        r = r.dependencies,
        r !== null && r.firstContext !== null && ((r.lanes & s) !== 0 && (Rt = !0),
        r.firstContext = null)
    }
    function qt(r) {
        var s = r._currentValue;
        if (gc !== r)
            if (r = {
                context: r,
                memoizedValue: s,
                next: null
            },
            Ws === null) {
                if (Ia === null)
                    throw Error(n(308));
                Ws = r,
                Ia.dependencies = {
                    lanes: 0,
                    firstContext: r
                }
            } else
                Ws = Ws.next = r;
        return s
    }
    var Kr = null;
    function xc(r) {
        Kr === null ? Kr = [r] : Kr.push(r)
    }
    function Rm(r, s, a, c) {
        var h = s.interleaved;
        return h === null ? (a.next = a,
        xc(s)) : (a.next = h.next,
        h.next = a),
        s.interleaved = a,
        Vn(r, c)
    }
    function Vn(r, s) {
        r.lanes |= s;
        var a = r.alternate;
        for (a !== null && (a.lanes |= s),
        a = r,
        r = r.return; r !== null; )
            r.childLanes |= s,
            a = r.alternate,
            a !== null && (a.childLanes |= s),
            a = r,
            r = r.return;
        return a.tag === 3 ? a.stateNode : null
    }
    var dr = !1;
    function Sc(r) {
        r.updateQueue = {
            baseState: r.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                interleaved: null,
                lanes: 0
            },
            effects: null
        }
    }
    function Am(r, s) {
        r = r.updateQueue,
        s.updateQueue === r && (s.updateQueue = {
            baseState: r.baseState,
            firstBaseUpdate: r.firstBaseUpdate,
            lastBaseUpdate: r.lastBaseUpdate,
            shared: r.shared,
            effects: r.effects
        })
    }
    function Un(r, s) {
        return {
            eventTime: r,
            lane: s,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function fr(r, s, a) {
        var c = r.updateQueue;
        if (c === null)
            return null;
        if (c = c.shared,
        (Te & 2) !== 0) {
            var h = c.pending;
            return h === null ? s.next = s : (s.next = h.next,
            h.next = s),
            c.pending = s,
            Vn(r, a)
        }
        return h = c.interleaved,
        h === null ? (s.next = s,
        xc(c)) : (s.next = h.next,
        h.next = s),
        c.interleaved = s,
        Vn(r, a)
    }
    function Fa(r, s, a) {
        if (s = s.updateQueue,
        s !== null && (s = s.shared,
        (a & 4194240) !== 0)) {
            var c = s.lanes;
            c &= r.pendingLanes,
            a |= c,
            s.lanes = a,
            Mu(r, a)
        }
    }
    function Nm(r, s) {
        var a = r.updateQueue
          , c = r.alternate;
        if (c !== null && (c = c.updateQueue,
        a === c)) {
            var h = null
              , g = null;
            if (a = a.firstBaseUpdate,
            a !== null) {
                do {
                    var v = {
                        eventTime: a.eventTime,
                        lane: a.lane,
                        tag: a.tag,
                        payload: a.payload,
                        callback: a.callback,
                        next: null
                    };
                    g === null ? h = g = v : g = g.next = v,
                    a = a.next
                } while (a !== null);
                g === null ? h = g = s : g = g.next = s
            } else
                h = g = s;
            a = {
                baseState: c.baseState,
                firstBaseUpdate: h,
                lastBaseUpdate: g,
                shared: c.shared,
                effects: c.effects
            },
            r.updateQueue = a;
            return
        }
        r = a.lastBaseUpdate,
        r === null ? a.firstBaseUpdate = s : r.next = s,
        a.lastBaseUpdate = s
    }
    function Va(r, s, a, c) {
        var h = r.updateQueue;
        dr = !1;
        var g = h.firstBaseUpdate
          , v = h.lastBaseUpdate
          , T = h.shared.pending;
        if (T !== null) {
            h.shared.pending = null;
            var _ = T
              , F = _.next;
            _.next = null,
            v === null ? g = F : v.next = F,
            v = _;
            var W = r.alternate;
            W !== null && (W = W.updateQueue,
            T = W.lastBaseUpdate,
            T !== v && (T === null ? W.firstBaseUpdate = F : T.next = F,
            W.lastBaseUpdate = _))
        }
        if (g !== null) {
            var q = h.baseState;
            v = 0,
            W = F = _ = null,
            T = g;
            do {
                var H = T.lane
                  , J = T.eventTime;
                if ((c & H) === H) {
                    W !== null && (W = W.next = {
                        eventTime: J,
                        lane: 0,
                        tag: T.tag,
                        payload: T.payload,
                        callback: T.callback,
                        next: null
                    });
                    e: {
                        var te = r
                          , se = T;
                        switch (H = s,
                        J = a,
                        se.tag) {
                        case 1:
                            if (te = se.payload,
                            typeof te == "function") {
                                q = te.call(J, q, H);
                                break e
                            }
                            q = te;
                            break e;
                        case 3:
                            te.flags = te.flags & -65537 | 128;
                        case 0:
                            if (te = se.payload,
                            H = typeof te == "function" ? te.call(J, q, H) : te,
                            H == null)
                                break e;
                            q = B({}, q, H);
                            break e;
                        case 2:
                            dr = !0
                        }
                    }
                    T.callback !== null && T.lane !== 0 && (r.flags |= 64,
                    H = h.effects,
                    H === null ? h.effects = [T] : H.push(T))
                } else
                    J = {
                        eventTime: J,
                        lane: H,
                        tag: T.tag,
                        payload: T.payload,
                        callback: T.callback,
                        next: null
                    },
                    W === null ? (F = W = J,
                    _ = q) : W = W.next = J,
                    v |= H;
                if (T = T.next,
                T === null) {
                    if (T = h.shared.pending,
                    T === null)
                        break;
                    H = T,
                    T = H.next,
                    H.next = null,
                    h.lastBaseUpdate = H,
                    h.shared.pending = null
                }
            } while (!0);
            if (W === null && (_ = q),
            h.baseState = _,
            h.firstBaseUpdate = F,
            h.lastBaseUpdate = W,
            s = h.shared.interleaved,
            s !== null) {
                h = s;
                do
                    v |= h.lane,
                    h = h.next;
                while (h !== s)
            } else
                g === null && (h.shared.lanes = 0);
            Yr |= v,
            r.lanes = v,
            r.memoizedState = q
        }
    }
    function Om(r, s, a) {
        if (r = s.effects,
        s.effects = null,
        r !== null)
            for (s = 0; s < r.length; s++) {
                var c = r[s]
                  , h = c.callback;
                if (h !== null) {
                    if (c.callback = null,
                    c = a,
                    typeof h != "function")
                        throw Error(n(191, h));
                    h.call(c)
                }
            }
    }
    var no = {}
      , Sn = lr(no)
      , ro = lr(no)
      , so = lr(no);
    function Qr(r) {
        if (r === no)
            throw Error(n(174));
        return r
    }
    function bc(r, s) {
        switch (Ie(so, s),
        Ie(ro, r),
        Ie(Sn, no),
        r = s.nodeType,
        r) {
        case 9:
        case 11:
            s = (s = s.documentElement) ? s.namespaceURI : Cu(null, "");
            break;
        default:
            r = r === 8 ? s.parentNode : s,
            s = r.namespaceURI || null,
            r = r.tagName,
            s = Cu(s, r)
        }
        Ve(Sn),
        Ie(Sn, s)
    }
    function Ks() {
        Ve(Sn),
        Ve(ro),
        Ve(so)
    }
    function jm(r) {
        Qr(so.current);
        var s = Qr(Sn.current)
          , a = Cu(s, r.type);
        s !== a && (Ie(ro, r),
        Ie(Sn, a))
    }
    function Cc(r) {
        ro.current === r && (Ve(Sn),
        Ve(ro))
    }
    var ze = lr(0);
    function Ua(r) {
        for (var s = r; s !== null; ) {
            if (s.tag === 13) {
                var a = s.memoizedState;
                if (a !== null && (a = a.dehydrated,
                a === null || a.data === "$?" || a.data === "$!"))
                    return s
            } else if (s.tag === 19 && s.memoizedProps.revealOrder !== void 0) {
                if ((s.flags & 128) !== 0)
                    return s
            } else if (s.child !== null) {
                s.child.return = s,
                s = s.child;
                continue
            }
            if (s === r)
                break;
            for (; s.sibling === null; ) {
                if (s.return === null || s.return === r)
                    return null;
                s = s.return
            }
            s.sibling.return = s.return,
            s = s.sibling
        }
        return null
    }
    var Ec = [];
    function kc() {
        for (var r = 0; r < Ec.length; r++)
            Ec[r]._workInProgressVersionPrimary = null;
        Ec.length = 0
    }
    var Ba = N.ReactCurrentDispatcher
      , Tc = N.ReactCurrentBatchConfig
      , Gr = 0
      , $e = null
      , rt = null
      , ot = null
      , za = !1
      , io = !1
      , oo = 0
      , Yb = 0;
    function yt() {
        throw Error(n(321))
    }
    function Pc(r, s) {
        if (s === null)
            return !1;
        for (var a = 0; a < s.length && a < r.length; a++)
            if (!on(r[a], s[a]))
                return !1;
        return !0
    }
    function _c(r, s, a, c, h, g) {
        if (Gr = g,
        $e = s,
        s.memoizedState = null,
        s.updateQueue = null,
        s.lanes = 0,
        Ba.current = r === null || r.memoizedState === null ? eC : tC,
        r = a(c, h),
        io) {
            g = 0;
            do {
                if (io = !1,
                oo = 0,
                25 <= g)
                    throw Error(n(301));
                g += 1,
                ot = rt = null,
                s.updateQueue = null,
                Ba.current = nC,
                r = a(c, h)
            } while (io)
        }
        if (Ba.current = Wa,
        s = rt !== null && rt.next !== null,
        Gr = 0,
        ot = rt = $e = null,
        za = !1,
        s)
            throw Error(n(300));
        return r
    }
    function Rc() {
        var r = oo !== 0;
        return oo = 0,
        r
    }
    function bn() {
        var r = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return ot === null ? $e.memoizedState = ot = r : ot = ot.next = r,
        ot
    }
    function Kt() {
        if (rt === null) {
            var r = $e.alternate;
            r = r !== null ? r.memoizedState : null
        } else
            r = rt.next;
        var s = ot === null ? $e.memoizedState : ot.next;
        if (s !== null)
            ot = s,
            rt = r;
        else {
            if (r === null)
                throw Error(n(310));
            rt = r,
            r = {
                memoizedState: rt.memoizedState,
                baseState: rt.baseState,
                baseQueue: rt.baseQueue,
                queue: rt.queue,
                next: null
            },
            ot === null ? $e.memoizedState = ot = r : ot = ot.next = r
        }
        return ot
    }
    function ao(r, s) {
        return typeof s == "function" ? s(r) : s
    }
    function Ac(r) {
        var s = Kt()
          , a = s.queue;
        if (a === null)
            throw Error(n(311));
        a.lastRenderedReducer = r;
        var c = rt
          , h = c.baseQueue
          , g = a.pending;
        if (g !== null) {
            if (h !== null) {
                var v = h.next;
                h.next = g.next,
                g.next = v
            }
            c.baseQueue = h = g,
            a.pending = null
        }
        if (h !== null) {
            g = h.next,
            c = c.baseState;
            var T = v = null
              , _ = null
              , F = g;
            do {
                var W = F.lane;
                if ((Gr & W) === W)
                    _ !== null && (_ = _.next = {
                        lane: 0,
                        action: F.action,
                        hasEagerState: F.hasEagerState,
                        eagerState: F.eagerState,
                        next: null
                    }),
                    c = F.hasEagerState ? F.eagerState : r(c, F.action);
                else {
                    var q = {
                        lane: W,
                        action: F.action,
                        hasEagerState: F.hasEagerState,
                        eagerState: F.eagerState,
                        next: null
                    };
                    _ === null ? (T = _ = q,
                    v = c) : _ = _.next = q,
                    $e.lanes |= W,
                    Yr |= W
                }
                F = F.next
            } while (F !== null && F !== g);
            _ === null ? v = c : _.next = T,
            on(c, s.memoizedState) || (Rt = !0),
            s.memoizedState = c,
            s.baseState = v,
            s.baseQueue = _,
            a.lastRenderedState = c
        }
        if (r = a.interleaved,
        r !== null) {
            h = r;
            do
                g = h.lane,
                $e.lanes |= g,
                Yr |= g,
                h = h.next;
            while (h !== r)
        } else
            h === null && (a.lanes = 0);
        return [s.memoizedState, a.dispatch]
    }
    function Nc(r) {
        var s = Kt()
          , a = s.queue;
        if (a === null)
            throw Error(n(311));
        a.lastRenderedReducer = r;
        var c = a.dispatch
          , h = a.pending
          , g = s.memoizedState;
        if (h !== null) {
            a.pending = null;
            var v = h = h.next;
            do
                g = r(g, v.action),
                v = v.next;
            while (v !== h);
            on(g, s.memoizedState) || (Rt = !0),
            s.memoizedState = g,
            s.baseQueue === null && (s.baseState = g),
            a.lastRenderedState = g
        }
        return [g, c]
    }
    function Lm() {}
    function Mm(r, s) {
        var a = $e
          , c = Kt()
          , h = s()
          , g = !on(c.memoizedState, h);
        if (g && (c.memoizedState = h,
        Rt = !0),
        c = c.queue,
        Oc(Fm.bind(null, a, c, r), [r]),
        c.getSnapshot !== s || g || ot !== null && ot.memoizedState.tag & 1) {
            if (a.flags |= 2048,
            lo(9, Im.bind(null, a, c, h, s), void 0, null),
            at === null)
                throw Error(n(349));
            (Gr & 30) !== 0 || Dm(a, s, h)
        }
        return h
    }
    function Dm(r, s, a) {
        r.flags |= 16384,
        r = {
            getSnapshot: s,
            value: a
        },
        s = $e.updateQueue,
        s === null ? (s = {
            lastEffect: null,
            stores: null
        },
        $e.updateQueue = s,
        s.stores = [r]) : (a = s.stores,
        a === null ? s.stores = [r] : a.push(r))
    }
    function Im(r, s, a, c) {
        s.value = a,
        s.getSnapshot = c,
        Vm(s) && Um(r)
    }
    function Fm(r, s, a) {
        return a(function() {
            Vm(s) && Um(r)
        })
    }
    function Vm(r) {
        var s = r.getSnapshot;
        r = r.value;
        try {
            var a = s();
            return !on(r, a)
        } catch {
            return !0
        }
    }
    function Um(r) {
        var s = Vn(r, 1);
        s !== null && dn(s, r, 1, -1)
    }
    function Bm(r) {
        var s = bn();
        return typeof r == "function" && (r = r()),
        s.memoizedState = s.baseState = r,
        r = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: ao,
            lastRenderedState: r
        },
        s.queue = r,
        r = r.dispatch = Zb.bind(null, $e, r),
        [s.memoizedState, r]
    }
    function lo(r, s, a, c) {
        return r = {
            tag: r,
            create: s,
            destroy: a,
            deps: c,
            next: null
        },
        s = $e.updateQueue,
        s === null ? (s = {
            lastEffect: null,
            stores: null
        },
        $e.updateQueue = s,
        s.lastEffect = r.next = r) : (a = s.lastEffect,
        a === null ? s.lastEffect = r.next = r : (c = a.next,
        a.next = r,
        r.next = c,
        s.lastEffect = r)),
        r
    }
    function zm() {
        return Kt().memoizedState
    }
    function $a(r, s, a, c) {
        var h = bn();
        $e.flags |= r,
        h.memoizedState = lo(1 | s, a, void 0, c === void 0 ? null : c)
    }
    function Ha(r, s, a, c) {
        var h = Kt();
        c = c === void 0 ? null : c;
        var g = void 0;
        if (rt !== null) {
            var v = rt.memoizedState;
            if (g = v.destroy,
            c !== null && Pc(c, v.deps)) {
                h.memoizedState = lo(s, a, g, c);
                return
            }
        }
        $e.flags |= r,
        h.memoizedState = lo(1 | s, a, g, c)
    }
    function $m(r, s) {
        return $a(8390656, 8, r, s)
    }
    function Oc(r, s) {
        return Ha(2048, 8, r, s)
    }
    function Hm(r, s) {
        return Ha(4, 2, r, s)
    }
    function Wm(r, s) {
        return Ha(4, 4, r, s)
    }
    function qm(r, s) {
        if (typeof s == "function")
            return r = r(),
            s(r),
            function() {
                s(null)
            }
            ;
        if (s != null)
            return r = r(),
            s.current = r,
            function() {
                s.current = null
            }
    }
    function Km(r, s, a) {
        return a = a != null ? a.concat([r]) : null,
        Ha(4, 4, qm.bind(null, s, r), a)
    }
    function jc() {}
    function Qm(r, s) {
        var a = Kt();
        s = s === void 0 ? null : s;
        var c = a.memoizedState;
        return c !== null && s !== null && Pc(s, c[1]) ? c[0] : (a.memoizedState = [r, s],
        r)
    }
    function Gm(r, s) {
        var a = Kt();
        s = s === void 0 ? null : s;
        var c = a.memoizedState;
        return c !== null && s !== null && Pc(s, c[1]) ? c[0] : (r = r(),
        a.memoizedState = [r, s],
        r)
    }
    function Ym(r, s, a) {
        return (Gr & 21) === 0 ? (r.baseState && (r.baseState = !1,
        Rt = !0),
        r.memoizedState = a) : (on(a, s) || (a = Tp(),
        $e.lanes |= a,
        Yr |= a,
        r.baseState = !0),
        s)
    }
    function Xb(r, s) {
        var a = je;
        je = a !== 0 && 4 > a ? a : 4,
        r(!0);
        var c = Tc.transition;
        Tc.transition = {};
        try {
            r(!1),
            s()
        } finally {
            je = a,
            Tc.transition = c
        }
    }
    function Xm() {
        return Kt().memoizedState
    }
    function Jb(r, s, a) {
        var c = gr(r);
        if (a = {
            lane: c,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Jm(r))
            Zm(s, a);
        else if (a = Rm(r, s, a, c),
        a !== null) {
            var h = kt();
            dn(a, r, c, h),
            eg(a, s, c)
        }
    }
    function Zb(r, s, a) {
        var c = gr(r)
          , h = {
            lane: c,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Jm(r))
            Zm(s, h);
        else {
            var g = r.alternate;
            if (r.lanes === 0 && (g === null || g.lanes === 0) && (g = s.lastRenderedReducer,
            g !== null))
                try {
                    var v = s.lastRenderedState
                      , T = g(v, a);
                    if (h.hasEagerState = !0,
                    h.eagerState = T,
                    on(T, v)) {
                        var _ = s.interleaved;
                        _ === null ? (h.next = h,
                        xc(s)) : (h.next = _.next,
                        _.next = h),
                        s.interleaved = h;
                        return
                    }
                } catch {} finally {}
            a = Rm(r, s, h, c),
            a !== null && (h = kt(),
            dn(a, r, c, h),
            eg(a, s, c))
        }
    }
    function Jm(r) {
        var s = r.alternate;
        return r === $e || s !== null && s === $e
    }
    function Zm(r, s) {
        io = za = !0;
        var a = r.pending;
        a === null ? s.next = s : (s.next = a.next,
        a.next = s),
        r.pending = s
    }
    function eg(r, s, a) {
        if ((a & 4194240) !== 0) {
            var c = s.lanes;
            c &= r.pendingLanes,
            a |= c,
            s.lanes = a,
            Mu(r, a)
        }
    }
    var Wa = {
        readContext: qt,
        useCallback: yt,
        useContext: yt,
        useEffect: yt,
        useImperativeHandle: yt,
        useInsertionEffect: yt,
        useLayoutEffect: yt,
        useMemo: yt,
        useReducer: yt,
        useRef: yt,
        useState: yt,
        useDebugValue: yt,
        useDeferredValue: yt,
        useTransition: yt,
        useMutableSource: yt,
        useSyncExternalStore: yt,
        useId: yt,
        unstable_isNewReconciler: !1
    }
      , eC = {
        readContext: qt,
        useCallback: function(r, s) {
            return bn().memoizedState = [r, s === void 0 ? null : s],
            r
        },
        useContext: qt,
        useEffect: $m,
        useImperativeHandle: function(r, s, a) {
            return a = a != null ? a.concat([r]) : null,
            $a(4194308, 4, qm.bind(null, s, r), a)
        },
        useLayoutEffect: function(r, s) {
            return $a(4194308, 4, r, s)
        },
        useInsertionEffect: function(r, s) {
            return $a(4, 2, r, s)
        },
        useMemo: function(r, s) {
            var a = bn();
            return s = s === void 0 ? null : s,
            r = r(),
            a.memoizedState = [r, s],
            r
        },
        useReducer: function(r, s, a) {
            var c = bn();
            return s = a !== void 0 ? a(s) : s,
            c.memoizedState = c.baseState = s,
            r = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: r,
                lastRenderedState: s
            },
            c.queue = r,
            r = r.dispatch = Jb.bind(null, $e, r),
            [c.memoizedState, r]
        },
        useRef: function(r) {
            var s = bn();
            return r = {
                current: r
            },
            s.memoizedState = r
        },
        useState: Bm,
        useDebugValue: jc,
        useDeferredValue: function(r) {
            return bn().memoizedState = r
        },
        useTransition: function() {
            var r = Bm(!1)
              , s = r[0];
            return r = Xb.bind(null, r[1]),
            bn().memoizedState = r,
            [s, r]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(r, s, a) {
            var c = $e
              , h = bn();
            if (Be) {
                if (a === void 0)
                    throw Error(n(407));
                a = a()
            } else {
                if (a = s(),
                at === null)
                    throw Error(n(349));
                (Gr & 30) !== 0 || Dm(c, s, a)
            }
            h.memoizedState = a;
            var g = {
                value: a,
                getSnapshot: s
            };
            return h.queue = g,
            $m(Fm.bind(null, c, g, r), [r]),
            c.flags |= 2048,
            lo(9, Im.bind(null, c, g, a, s), void 0, null),
            a
        },
        useId: function() {
            var r = bn()
              , s = at.identifierPrefix;
            if (Be) {
                var a = Fn
                  , c = In;
                a = (c & ~(1 << 32 - sn(c) - 1)).toString(32) + a,
                s = ":" + s + "R" + a,
                a = oo++,
                0 < a && (s += "H" + a.toString(32)),
                s += ":"
            } else
                a = Yb++,
                s = ":" + s + "r" + a.toString(32) + ":";
            return r.memoizedState = s
        },
        unstable_isNewReconciler: !1
    }
      , tC = {
        readContext: qt,
        useCallback: Qm,
        useContext: qt,
        useEffect: Oc,
        useImperativeHandle: Km,
        useInsertionEffect: Hm,
        useLayoutEffect: Wm,
        useMemo: Gm,
        useReducer: Ac,
        useRef: zm,
        useState: function() {
            return Ac(ao)
        },
        useDebugValue: jc,
        useDeferredValue: function(r) {
            var s = Kt();
            return Ym(s, rt.memoizedState, r)
        },
        useTransition: function() {
            var r = Ac(ao)[0]
              , s = Kt().memoizedState;
            return [r, s]
        },
        useMutableSource: Lm,
        useSyncExternalStore: Mm,
        useId: Xm,
        unstable_isNewReconciler: !1
    }
      , nC = {
        readContext: qt,
        useCallback: Qm,
        useContext: qt,
        useEffect: Oc,
        useImperativeHandle: Km,
        useInsertionEffect: Hm,
        useLayoutEffect: Wm,
        useMemo: Gm,
        useReducer: Nc,
        useRef: zm,
        useState: function() {
            return Nc(ao)
        },
        useDebugValue: jc,
        useDeferredValue: function(r) {
            var s = Kt();
            return rt === null ? s.memoizedState = r : Ym(s, rt.memoizedState, r)
        },
        useTransition: function() {
            var r = Nc(ao)[0]
              , s = Kt().memoizedState;
            return [r, s]
        },
        useMutableSource: Lm,
        useSyncExternalStore: Mm,
        useId: Xm,
        unstable_isNewReconciler: !1
    };
    function ln(r, s) {
        if (r && r.defaultProps) {
            s = B({}, s),
            r = r.defaultProps;
            for (var a in r)
                s[a] === void 0 && (s[a] = r[a]);
            return s
        }
        return s
    }
    function Lc(r, s, a, c) {
        s = r.memoizedState,
        a = a(c, s),
        a = a == null ? s : B({}, s, a),
        r.memoizedState = a,
        r.lanes === 0 && (r.updateQueue.baseState = a)
    }
    var qa = {
        isMounted: function(r) {
            return (r = r._reactInternals) ? zr(r) === r : !1
        },
        enqueueSetState: function(r, s, a) {
            r = r._reactInternals;
            var c = kt()
              , h = gr(r)
              , g = Un(c, h);
            g.payload = s,
            a != null && (g.callback = a),
            s = fr(r, g, h),
            s !== null && (dn(s, r, h, c),
            Fa(s, r, h))
        },
        enqueueReplaceState: function(r, s, a) {
            r = r._reactInternals;
            var c = kt()
              , h = gr(r)
              , g = Un(c, h);
            g.tag = 1,
            g.payload = s,
            a != null && (g.callback = a),
            s = fr(r, g, h),
            s !== null && (dn(s, r, h, c),
            Fa(s, r, h))
        },
        enqueueForceUpdate: function(r, s) {
            r = r._reactInternals;
            var a = kt()
              , c = gr(r)
              , h = Un(a, c);
            h.tag = 2,
            s != null && (h.callback = s),
            s = fr(r, h, c),
            s !== null && (dn(s, r, c, a),
            Fa(s, r, c))
        }
    };
    function tg(r, s, a, c, h, g, v) {
        return r = r.stateNode,
        typeof r.shouldComponentUpdate == "function" ? r.shouldComponentUpdate(c, g, v) : s.prototype && s.prototype.isPureReactComponent ? !Qi(a, c) || !Qi(h, g) : !0
    }
    function ng(r, s, a) {
        var c = !1
          , h = ur
          , g = s.contextType;
        return typeof g == "object" && g !== null ? g = qt(g) : (h = _t(s) ? Hr : gt.current,
        c = s.contextTypes,
        g = (c = c != null) ? Us(r, h) : ur),
        s = new s(a,g),
        r.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null,
        s.updater = qa,
        r.stateNode = s,
        s._reactInternals = r,
        c && (r = r.stateNode,
        r.__reactInternalMemoizedUnmaskedChildContext = h,
        r.__reactInternalMemoizedMaskedChildContext = g),
        s
    }
    function rg(r, s, a, c) {
        r = s.state,
        typeof s.componentWillReceiveProps == "function" && s.componentWillReceiveProps(a, c),
        typeof s.UNSAFE_componentWillReceiveProps == "function" && s.UNSAFE_componentWillReceiveProps(a, c),
        s.state !== r && qa.enqueueReplaceState(s, s.state, null)
    }
    function Mc(r, s, a, c) {
        var h = r.stateNode;
        h.props = a,
        h.state = r.memoizedState,
        h.refs = {},
        Sc(r);
        var g = s.contextType;
        typeof g == "object" && g !== null ? h.context = qt(g) : (g = _t(s) ? Hr : gt.current,
        h.context = Us(r, g)),
        h.state = r.memoizedState,
        g = s.getDerivedStateFromProps,
        typeof g == "function" && (Lc(r, s, g, a),
        h.state = r.memoizedState),
        typeof s.getDerivedStateFromProps == "function" || typeof h.getSnapshotBeforeUpdate == "function" || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (s = h.state,
        typeof h.componentWillMount == "function" && h.componentWillMount(),
        typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount(),
        s !== h.state && qa.enqueueReplaceState(h, h.state, null),
        Va(r, a, h, c),
        h.state = r.memoizedState),
        typeof h.componentDidMount == "function" && (r.flags |= 4194308)
    }
    function Qs(r, s) {
        try {
            var a = ""
              , c = s;
            do
                a += ue(c),
                c = c.return;
            while (c);
            var h = a
        } catch (g) {
            h = `
Error generating stack: ` + g.message + `
` + g.stack
        }
        return {
            value: r,
            source: s,
            stack: h,
            digest: null
        }
    }
    function Dc(r, s, a) {
        return {
            value: r,
            source: null,
            stack: a ?? null,
            digest: s ?? null
        }
    }
    function Ic(r, s) {
        try {
            console.error(s.value)
        } catch (a) {
            setTimeout(function() {
                throw a
            })
        }
    }
    var rC = typeof WeakMap == "function" ? WeakMap : Map;
    function sg(r, s, a) {
        a = Un(-1, a),
        a.tag = 3,
        a.payload = {
            element: null
        };
        var c = s.value;
        return a.callback = function() {
            Za || (Za = !0,
            Jc = c),
            Ic(r, s)
        }
        ,
        a
    }
    function ig(r, s, a) {
        a = Un(-1, a),
        a.tag = 3;
        var c = r.type.getDerivedStateFromError;
        if (typeof c == "function") {
            var h = s.value;
            a.payload = function() {
                return c(h)
            }
            ,
            a.callback = function() {
                Ic(r, s)
            }
        }
        var g = r.stateNode;
        return g !== null && typeof g.componentDidCatch == "function" && (a.callback = function() {
            Ic(r, s),
            typeof c != "function" && (pr === null ? pr = new Set([this]) : pr.add(this));
            var v = s.stack;
            this.componentDidCatch(s.value, {
                componentStack: v !== null ? v : ""
            })
        }
        ),
        a
    }
    function og(r, s, a) {
        var c = r.pingCache;
        if (c === null) {
            c = r.pingCache = new rC;
            var h = new Set;
            c.set(s, h)
        } else
            h = c.get(s),
            h === void 0 && (h = new Set,
            c.set(s, h));
        h.has(a) || (h.add(a),
        r = yC.bind(null, r, s, a),
        s.then(r, r))
    }
    function ag(r) {
        do {
            var s;
            if ((s = r.tag === 13) && (s = r.memoizedState,
            s = s !== null ? s.dehydrated !== null : !0),
            s)
                return r;
            r = r.return
        } while (r !== null);
        return null
    }
    function lg(r, s, a, c, h) {
        return (r.mode & 1) === 0 ? (r === s ? r.flags |= 65536 : (r.flags |= 128,
        a.flags |= 131072,
        a.flags &= -52805,
        a.tag === 1 && (a.alternate === null ? a.tag = 17 : (s = Un(-1, 1),
        s.tag = 2,
        fr(a, s, 1))),
        a.lanes |= 1),
        r) : (r.flags |= 65536,
        r.lanes = h,
        r)
    }
    var sC = N.ReactCurrentOwner
      , Rt = !1;
    function Et(r, s, a, c) {
        s.child = r === null ? _m(s, null, a, c) : Hs(s, r.child, a, c)
    }
    function ug(r, s, a, c, h) {
        a = a.render;
        var g = s.ref;
        return qs(s, h),
        c = _c(r, s, a, c, g, h),
        a = Rc(),
        r !== null && !Rt ? (s.updateQueue = r.updateQueue,
        s.flags &= -2053,
        r.lanes &= ~h,
        Bn(r, s, h)) : (Be && a && dc(s),
        s.flags |= 1,
        Et(r, s, c, h),
        s.child)
    }
    function cg(r, s, a, c, h) {
        if (r === null) {
            var g = a.type;
            return typeof g == "function" && !id(g) && g.defaultProps === void 0 && a.compare === null && a.defaultProps === void 0 ? (s.tag = 15,
            s.type = g,
            dg(r, s, g, c, h)) : (r = il(a.type, null, c, s, s.mode, h),
            r.ref = s.ref,
            r.return = s,
            s.child = r)
        }
        if (g = r.child,
        (r.lanes & h) === 0) {
            var v = g.memoizedProps;
            if (a = a.compare,
            a = a !== null ? a : Qi,
            a(v, c) && r.ref === s.ref)
                return Bn(r, s, h)
        }
        return s.flags |= 1,
        r = vr(g, c),
        r.ref = s.ref,
        r.return = s,
        s.child = r
    }
    function dg(r, s, a, c, h) {
        if (r !== null) {
            var g = r.memoizedProps;
            if (Qi(g, c) && r.ref === s.ref)
                if (Rt = !1,
                s.pendingProps = c = g,
                (r.lanes & h) !== 0)
                    (r.flags & 131072) !== 0 && (Rt = !0);
                else
                    return s.lanes = r.lanes,
                    Bn(r, s, h)
        }
        return Fc(r, s, a, c, h)
    }
    function fg(r, s, a) {
        var c = s.pendingProps
          , h = c.children
          , g = r !== null ? r.memoizedState : null;
        if (c.mode === "hidden")
            if ((s.mode & 1) === 0)
                s.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                Ie(Ys, Ut),
                Ut |= a;
            else {
                if ((a & 1073741824) === 0)
                    return r = g !== null ? g.baseLanes | a : a,
                    s.lanes = s.childLanes = 1073741824,
                    s.memoizedState = {
                        baseLanes: r,
                        cachePool: null,
                        transitions: null
                    },
                    s.updateQueue = null,
                    Ie(Ys, Ut),
                    Ut |= r,
                    null;
                s.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                c = g !== null ? g.baseLanes : a,
                Ie(Ys, Ut),
                Ut |= c
            }
        else
            g !== null ? (c = g.baseLanes | a,
            s.memoizedState = null) : c = a,
            Ie(Ys, Ut),
            Ut |= c;
        return Et(r, s, h, a),
        s.child
    }
    function hg(r, s) {
        var a = s.ref;
        (r === null && a !== null || r !== null && r.ref !== a) && (s.flags |= 512,
        s.flags |= 2097152)
    }
    function Fc(r, s, a, c, h) {
        var g = _t(a) ? Hr : gt.current;
        return g = Us(s, g),
        qs(s, h),
        a = _c(r, s, a, c, g, h),
        c = Rc(),
        r !== null && !Rt ? (s.updateQueue = r.updateQueue,
        s.flags &= -2053,
        r.lanes &= ~h,
        Bn(r, s, h)) : (Be && c && dc(s),
        s.flags |= 1,
        Et(r, s, a, h),
        s.child)
    }
    function pg(r, s, a, c, h) {
        if (_t(a)) {
            var g = !0;
            Aa(s)
        } else
            g = !1;
        if (qs(s, h),
        s.stateNode === null)
            Qa(r, s),
            ng(s, a, c),
            Mc(s, a, c, h),
            c = !0;
        else if (r === null) {
            var v = s.stateNode
              , T = s.memoizedProps;
            v.props = T;
            var _ = v.context
              , F = a.contextType;
            typeof F == "object" && F !== null ? F = qt(F) : (F = _t(a) ? Hr : gt.current,
            F = Us(s, F));
            var W = a.getDerivedStateFromProps
              , q = typeof W == "function" || typeof v.getSnapshotBeforeUpdate == "function";
            q || typeof v.UNSAFE_componentWillReceiveProps != "function" && typeof v.componentWillReceiveProps != "function" || (T !== c || _ !== F) && rg(s, v, c, F),
            dr = !1;
            var H = s.memoizedState;
            v.state = H,
            Va(s, c, v, h),
            _ = s.memoizedState,
            T !== c || H !== _ || Pt.current || dr ? (typeof W == "function" && (Lc(s, a, W, c),
            _ = s.memoizedState),
            (T = dr || tg(s, a, T, c, H, _, F)) ? (q || typeof v.UNSAFE_componentWillMount != "function" && typeof v.componentWillMount != "function" || (typeof v.componentWillMount == "function" && v.componentWillMount(),
            typeof v.UNSAFE_componentWillMount == "function" && v.UNSAFE_componentWillMount()),
            typeof v.componentDidMount == "function" && (s.flags |= 4194308)) : (typeof v.componentDidMount == "function" && (s.flags |= 4194308),
            s.memoizedProps = c,
            s.memoizedState = _),
            v.props = c,
            v.state = _,
            v.context = F,
            c = T) : (typeof v.componentDidMount == "function" && (s.flags |= 4194308),
            c = !1)
        } else {
            v = s.stateNode,
            Am(r, s),
            T = s.memoizedProps,
            F = s.type === s.elementType ? T : ln(s.type, T),
            v.props = F,
            q = s.pendingProps,
            H = v.context,
            _ = a.contextType,
            typeof _ == "object" && _ !== null ? _ = qt(_) : (_ = _t(a) ? Hr : gt.current,
            _ = Us(s, _));
            var J = a.getDerivedStateFromProps;
            (W = typeof J == "function" || typeof v.getSnapshotBeforeUpdate == "function") || typeof v.UNSAFE_componentWillReceiveProps != "function" && typeof v.componentWillReceiveProps != "function" || (T !== q || H !== _) && rg(s, v, c, _),
            dr = !1,
            H = s.memoizedState,
            v.state = H,
            Va(s, c, v, h);
            var te = s.memoizedState;
            T !== q || H !== te || Pt.current || dr ? (typeof J == "function" && (Lc(s, a, J, c),
            te = s.memoizedState),
            (F = dr || tg(s, a, F, c, H, te, _) || !1) ? (W || typeof v.UNSAFE_componentWillUpdate != "function" && typeof v.componentWillUpdate != "function" || (typeof v.componentWillUpdate == "function" && v.componentWillUpdate(c, te, _),
            typeof v.UNSAFE_componentWillUpdate == "function" && v.UNSAFE_componentWillUpdate(c, te, _)),
            typeof v.componentDidUpdate == "function" && (s.flags |= 4),
            typeof v.getSnapshotBeforeUpdate == "function" && (s.flags |= 1024)) : (typeof v.componentDidUpdate != "function" || T === r.memoizedProps && H === r.memoizedState || (s.flags |= 4),
            typeof v.getSnapshotBeforeUpdate != "function" || T === r.memoizedProps && H === r.memoizedState || (s.flags |= 1024),
            s.memoizedProps = c,
            s.memoizedState = te),
            v.props = c,
            v.state = te,
            v.context = _,
            c = F) : (typeof v.componentDidUpdate != "function" || T === r.memoizedProps && H === r.memoizedState || (s.flags |= 4),
            typeof v.getSnapshotBeforeUpdate != "function" || T === r.memoizedProps && H === r.memoizedState || (s.flags |= 1024),
            c = !1)
        }
        return Vc(r, s, a, c, g, h)
    }
    function Vc(r, s, a, c, h, g) {
        hg(r, s);
        var v = (s.flags & 128) !== 0;
        if (!c && !v)
            return h && wm(s, a, !1),
            Bn(r, s, g);
        c = s.stateNode,
        sC.current = s;
        var T = v && typeof a.getDerivedStateFromError != "function" ? null : c.render();
        return s.flags |= 1,
        r !== null && v ? (s.child = Hs(s, r.child, null, g),
        s.child = Hs(s, null, T, g)) : Et(r, s, T, g),
        s.memoizedState = c.state,
        h && wm(s, a, !0),
        s.child
    }
    function mg(r) {
        var s = r.stateNode;
        s.pendingContext ? ym(r, s.pendingContext, s.pendingContext !== s.context) : s.context && ym(r, s.context, !1),
        bc(r, s.containerInfo)
    }
    function gg(r, s, a, c, h) {
        return $s(),
        mc(h),
        s.flags |= 256,
        Et(r, s, a, c),
        s.child
    }
    var Uc = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };
    function Bc(r) {
        return {
            baseLanes: r,
            cachePool: null,
            transitions: null
        }
    }
    function yg(r, s, a) {
        var c = s.pendingProps, h = ze.current, g = !1, v = (s.flags & 128) !== 0, T;
        if ((T = v) || (T = r !== null && r.memoizedState === null ? !1 : (h & 2) !== 0),
        T ? (g = !0,
        s.flags &= -129) : (r === null || r.memoizedState !== null) && (h |= 1),
        Ie(ze, h & 1),
        r === null)
            return pc(s),
            r = s.memoizedState,
            r !== null && (r = r.dehydrated,
            r !== null) ? ((s.mode & 1) === 0 ? s.lanes = 1 : r.data === "$!" ? s.lanes = 8 : s.lanes = 1073741824,
            null) : (v = c.children,
            r = c.fallback,
            g ? (c = s.mode,
            g = s.child,
            v = {
                mode: "hidden",
                children: v
            },
            (c & 1) === 0 && g !== null ? (g.childLanes = 0,
            g.pendingProps = v) : g = ol(v, c, 0, null),
            r = es(r, c, a, null),
            g.return = s,
            r.return = s,
            g.sibling = r,
            s.child = g,
            s.child.memoizedState = Bc(a),
            s.memoizedState = Uc,
            r) : zc(s, v));
        if (h = r.memoizedState,
        h !== null && (T = h.dehydrated,
        T !== null))
            return iC(r, s, v, c, T, h, a);
        if (g) {
            g = c.fallback,
            v = s.mode,
            h = r.child,
            T = h.sibling;
            var _ = {
                mode: "hidden",
                children: c.children
            };
            return (v & 1) === 0 && s.child !== h ? (c = s.child,
            c.childLanes = 0,
            c.pendingProps = _,
            s.deletions = null) : (c = vr(h, _),
            c.subtreeFlags = h.subtreeFlags & 14680064),
            T !== null ? g = vr(T, g) : (g = es(g, v, a, null),
            g.flags |= 2),
            g.return = s,
            c.return = s,
            c.sibling = g,
            s.child = c,
            c = g,
            g = s.child,
            v = r.child.memoizedState,
            v = v === null ? Bc(a) : {
                baseLanes: v.baseLanes | a,
                cachePool: null,
                transitions: v.transitions
            },
            g.memoizedState = v,
            g.childLanes = r.childLanes & ~a,
            s.memoizedState = Uc,
            c
        }
        return g = r.child,
        r = g.sibling,
        c = vr(g, {
            mode: "visible",
            children: c.children
        }),
        (s.mode & 1) === 0 && (c.lanes = a),
        c.return = s,
        c.sibling = null,
        r !== null && (a = s.deletions,
        a === null ? (s.deletions = [r],
        s.flags |= 16) : a.push(r)),
        s.child = c,
        s.memoizedState = null,
        c
    }
    function zc(r, s) {
        return s = ol({
            mode: "visible",
            children: s
        }, r.mode, 0, null),
        s.return = r,
        r.child = s
    }
    function Ka(r, s, a, c) {
        return c !== null && mc(c),
        Hs(s, r.child, null, a),
        r = zc(s, s.pendingProps.children),
        r.flags |= 2,
        s.memoizedState = null,
        r
    }
    function iC(r, s, a, c, h, g, v) {
        if (a)
            return s.flags & 256 ? (s.flags &= -257,
            c = Dc(Error(n(422))),
            Ka(r, s, v, c)) : s.memoizedState !== null ? (s.child = r.child,
            s.flags |= 128,
            null) : (g = c.fallback,
            h = s.mode,
            c = ol({
                mode: "visible",
                children: c.children
            }, h, 0, null),
            g = es(g, h, v, null),
            g.flags |= 2,
            c.return = s,
            g.return = s,
            c.sibling = g,
            s.child = c,
            (s.mode & 1) !== 0 && Hs(s, r.child, null, v),
            s.child.memoizedState = Bc(v),
            s.memoizedState = Uc,
            g);
        if ((s.mode & 1) === 0)
            return Ka(r, s, v, null);
        if (h.data === "$!") {
            if (c = h.nextSibling && h.nextSibling.dataset,
            c)
                var T = c.dgst;
            return c = T,
            g = Error(n(419)),
            c = Dc(g, c, void 0),
            Ka(r, s, v, c)
        }
        if (T = (v & r.childLanes) !== 0,
        Rt || T) {
            if (c = at,
            c !== null) {
                switch (v & -v) {
                case 4:
                    h = 2;
                    break;
                case 16:
                    h = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    h = 32;
                    break;
                case 536870912:
                    h = 268435456;
                    break;
                default:
                    h = 0
                }
                h = (h & (c.suspendedLanes | v)) !== 0 ? 0 : h,
                h !== 0 && h !== g.retryLane && (g.retryLane = h,
                Vn(r, h),
                dn(c, r, h, -1))
            }
            return sd(),
            c = Dc(Error(n(421))),
            Ka(r, s, v, c)
        }
        return h.data === "$?" ? (s.flags |= 128,
        s.child = r.child,
        s = vC.bind(null, r),
        h._reactRetry = s,
        null) : (r = g.treeContext,
        Vt = ar(h.nextSibling),
        Ft = s,
        Be = !0,
        an = null,
        r !== null && (Ht[Wt++] = In,
        Ht[Wt++] = Fn,
        Ht[Wt++] = Wr,
        In = r.id,
        Fn = r.overflow,
        Wr = s),
        s = zc(s, c.children),
        s.flags |= 4096,
        s)
    }
    function vg(r, s, a) {
        r.lanes |= s;
        var c = r.alternate;
        c !== null && (c.lanes |= s),
        wc(r.return, s, a)
    }
    function $c(r, s, a, c, h) {
        var g = r.memoizedState;
        g === null ? r.memoizedState = {
            isBackwards: s,
            rendering: null,
            renderingStartTime: 0,
            last: c,
            tail: a,
            tailMode: h
        } : (g.isBackwards = s,
        g.rendering = null,
        g.renderingStartTime = 0,
        g.last = c,
        g.tail = a,
        g.tailMode = h)
    }
    function wg(r, s, a) {
        var c = s.pendingProps
          , h = c.revealOrder
          , g = c.tail;
        if (Et(r, s, c.children, a),
        c = ze.current,
        (c & 2) !== 0)
            c = c & 1 | 2,
            s.flags |= 128;
        else {
            if (r !== null && (r.flags & 128) !== 0)
                e: for (r = s.child; r !== null; ) {
                    if (r.tag === 13)
                        r.memoizedState !== null && vg(r, a, s);
                    else if (r.tag === 19)
                        vg(r, a, s);
                    else if (r.child !== null) {
                        r.child.return = r,
                        r = r.child;
                        continue
                    }
                    if (r === s)
                        break e;
                    for (; r.sibling === null; ) {
                        if (r.return === null || r.return === s)
                            break e;
                        r = r.return
                    }
                    r.sibling.return = r.return,
                    r = r.sibling
                }
            c &= 1
        }
        if (Ie(ze, c),
        (s.mode & 1) === 0)
            s.memoizedState = null;
        else
            switch (h) {
            case "forwards":
                for (a = s.child,
                h = null; a !== null; )
                    r = a.alternate,
                    r !== null && Ua(r) === null && (h = a),
                    a = a.sibling;
                a = h,
                a === null ? (h = s.child,
                s.child = null) : (h = a.sibling,
                a.sibling = null),
                $c(s, !1, h, a, g);
                break;
            case "backwards":
                for (a = null,
                h = s.child,
                s.child = null; h !== null; ) {
                    if (r = h.alternate,
                    r !== null && Ua(r) === null) {
                        s.child = h;
                        break
                    }
                    r = h.sibling,
                    h.sibling = a,
                    a = h,
                    h = r
                }
                $c(s, !0, a, null, g);
                break;
            case "together":
                $c(s, !1, null, null, void 0);
                break;
            default:
                s.memoizedState = null
            }
        return s.child
    }
    function Qa(r, s) {
        (s.mode & 1) === 0 && r !== null && (r.alternate = null,
        s.alternate = null,
        s.flags |= 2)
    }
    function Bn(r, s, a) {
        if (r !== null && (s.dependencies = r.dependencies),
        Yr |= s.lanes,
        (a & s.childLanes) === 0)
            return null;
        if (r !== null && s.child !== r.child)
            throw Error(n(153));
        if (s.child !== null) {
            for (r = s.child,
            a = vr(r, r.pendingProps),
            s.child = a,
            a.return = s; r.sibling !== null; )
                r = r.sibling,
                a = a.sibling = vr(r, r.pendingProps),
                a.return = s;
            a.sibling = null
        }
        return s.child
    }
    function oC(r, s, a) {
        switch (s.tag) {
        case 3:
            mg(s),
            $s();
            break;
        case 5:
            jm(s);
            break;
        case 1:
            _t(s.type) && Aa(s);
            break;
        case 4:
            bc(s, s.stateNode.containerInfo);
            break;
        case 10:
            var c = s.type._context
              , h = s.memoizedProps.value;
            Ie(Da, c._currentValue),
            c._currentValue = h;
            break;
        case 13:
            if (c = s.memoizedState,
            c !== null)
                return c.dehydrated !== null ? (Ie(ze, ze.current & 1),
                s.flags |= 128,
                null) : (a & s.child.childLanes) !== 0 ? yg(r, s, a) : (Ie(ze, ze.current & 1),
                r = Bn(r, s, a),
                r !== null ? r.sibling : null);
            Ie(ze, ze.current & 1);
            break;
        case 19:
            if (c = (a & s.childLanes) !== 0,
            (r.flags & 128) !== 0) {
                if (c)
                    return wg(r, s, a);
                s.flags |= 128
            }
            if (h = s.memoizedState,
            h !== null && (h.rendering = null,
            h.tail = null,
            h.lastEffect = null),
            Ie(ze, ze.current),
            c)
                break;
            return null;
        case 22:
        case 23:
            return s.lanes = 0,
            fg(r, s, a)
        }
        return Bn(r, s, a)
    }
    var xg, Hc, Sg, bg;
    xg = function(r, s) {
        for (var a = s.child; a !== null; ) {
            if (a.tag === 5 || a.tag === 6)
                r.appendChild(a.stateNode);
            else if (a.tag !== 4 && a.child !== null) {
                a.child.return = a,
                a = a.child;
                continue
            }
            if (a === s)
                break;
            for (; a.sibling === null; ) {
                if (a.return === null || a.return === s)
                    return;
                a = a.return
            }
            a.sibling.return = a.return,
            a = a.sibling
        }
    }
    ,
    Hc = function() {}
    ,
    Sg = function(r, s, a, c) {
        var h = r.memoizedProps;
        if (h !== c) {
            r = s.stateNode,
            Qr(Sn.current);
            var g = null;
            switch (a) {
            case "input":
                h = er(r, h),
                c = er(r, c),
                g = [];
                break;
            case "select":
                h = B({}, h, {
                    value: void 0
                }),
                c = B({}, c, {
                    value: void 0
                }),
                g = [];
                break;
            case "textarea":
                h = bu(r, h),
                c = bu(r, c),
                g = [];
                break;
            default:
                typeof h.onClick != "function" && typeof c.onClick == "function" && (r.onclick = Pa)
            }
            Eu(a, c);
            var v;
            a = null;
            for (F in h)
                if (!c.hasOwnProperty(F) && h.hasOwnProperty(F) && h[F] != null)
                    if (F === "style") {
                        var T = h[F];
                        for (v in T)
                            T.hasOwnProperty(v) && (a || (a = {}),
                            a[v] = "")
                    } else
                        F !== "dangerouslySetInnerHTML" && F !== "children" && F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && F !== "autoFocus" && (o.hasOwnProperty(F) ? g || (g = []) : (g = g || []).push(F, null));
            for (F in c) {
                var _ = c[F];
                if (T = h != null ? h[F] : void 0,
                c.hasOwnProperty(F) && _ !== T && (_ != null || T != null))
                    if (F === "style")
                        if (T) {
                            for (v in T)
                                !T.hasOwnProperty(v) || _ && _.hasOwnProperty(v) || (a || (a = {}),
                                a[v] = "");
                            for (v in _)
                                _.hasOwnProperty(v) && T[v] !== _[v] && (a || (a = {}),
                                a[v] = _[v])
                        } else
                            a || (g || (g = []),
                            g.push(F, a)),
                            a = _;
                    else
                        F === "dangerouslySetInnerHTML" ? (_ = _ ? _.__html : void 0,
                        T = T ? T.__html : void 0,
                        _ != null && T !== _ && (g = g || []).push(F, _)) : F === "children" ? typeof _ != "string" && typeof _ != "number" || (g = g || []).push(F, "" + _) : F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && (o.hasOwnProperty(F) ? (_ != null && F === "onScroll" && Fe("scroll", r),
                        g || T === _ || (g = [])) : (g = g || []).push(F, _))
            }
            a && (g = g || []).push("style", a);
            var F = g;
            (s.updateQueue = F) && (s.flags |= 4)
        }
    }
    ,
    bg = function(r, s, a, c) {
        a !== c && (s.flags |= 4)
    }
    ;
    function uo(r, s) {
        if (!Be)
            switch (r.tailMode) {
            case "hidden":
                s = r.tail;
                for (var a = null; s !== null; )
                    s.alternate !== null && (a = s),
                    s = s.sibling;
                a === null ? r.tail = null : a.sibling = null;
                break;
            case "collapsed":
                a = r.tail;
                for (var c = null; a !== null; )
                    a.alternate !== null && (c = a),
                    a = a.sibling;
                c === null ? s || r.tail === null ? r.tail = null : r.tail.sibling = null : c.sibling = null
            }
    }
    function vt(r) {
        var s = r.alternate !== null && r.alternate.child === r.child
          , a = 0
          , c = 0;
        if (s)
            for (var h = r.child; h !== null; )
                a |= h.lanes | h.childLanes,
                c |= h.subtreeFlags & 14680064,
                c |= h.flags & 14680064,
                h.return = r,
                h = h.sibling;
        else
            for (h = r.child; h !== null; )
                a |= h.lanes | h.childLanes,
                c |= h.subtreeFlags,
                c |= h.flags,
                h.return = r,
                h = h.sibling;
        return r.subtreeFlags |= c,
        r.childLanes = a,
        s
    }
    function aC(r, s, a) {
        var c = s.pendingProps;
        switch (fc(s),
        s.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return vt(s),
            null;
        case 1:
            return _t(s.type) && Ra(),
            vt(s),
            null;
        case 3:
            return c = s.stateNode,
            Ks(),
            Ve(Pt),
            Ve(gt),
            kc(),
            c.pendingContext && (c.context = c.pendingContext,
            c.pendingContext = null),
            (r === null || r.child === null) && (La(s) ? s.flags |= 4 : r === null || r.memoizedState.isDehydrated && (s.flags & 256) === 0 || (s.flags |= 1024,
            an !== null && (td(an),
            an = null))),
            Hc(r, s),
            vt(s),
            null;
        case 5:
            Cc(s);
            var h = Qr(so.current);
            if (a = s.type,
            r !== null && s.stateNode != null)
                Sg(r, s, a, c, h),
                r.ref !== s.ref && (s.flags |= 512,
                s.flags |= 2097152);
            else {
                if (!c) {
                    if (s.stateNode === null)
                        throw Error(n(166));
                    return vt(s),
                    null
                }
                if (r = Qr(Sn.current),
                La(s)) {
                    c = s.stateNode,
                    a = s.type;
                    var g = s.memoizedProps;
                    switch (c[xn] = s,
                    c[Zi] = g,
                    r = (s.mode & 1) !== 0,
                    a) {
                    case "dialog":
                        Fe("cancel", c),
                        Fe("close", c);
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        Fe("load", c);
                        break;
                    case "video":
                    case "audio":
                        for (h = 0; h < Yi.length; h++)
                            Fe(Yi[h], c);
                        break;
                    case "source":
                        Fe("error", c);
                        break;
                    case "img":
                    case "image":
                    case "link":
                        Fe("error", c),
                        Fe("load", c);
                        break;
                    case "details":
                        Fe("toggle", c);
                        break;
                    case "input":
                        np(c, g),
                        Fe("invalid", c);
                        break;
                    case "select":
                        c._wrapperState = {
                            wasMultiple: !!g.multiple
                        },
                        Fe("invalid", c);
                        break;
                    case "textarea":
                        ip(c, g),
                        Fe("invalid", c)
                    }
                    Eu(a, g),
                    h = null;
                    for (var v in g)
                        if (g.hasOwnProperty(v)) {
                            var T = g[v];
                            v === "children" ? typeof T == "string" ? c.textContent !== T && (g.suppressHydrationWarning !== !0 && Ta(c.textContent, T, r),
                            h = ["children", T]) : typeof T == "number" && c.textContent !== "" + T && (g.suppressHydrationWarning !== !0 && Ta(c.textContent, T, r),
                            h = ["children", "" + T]) : o.hasOwnProperty(v) && T != null && v === "onScroll" && Fe("scroll", c)
                        }
                    switch (a) {
                    case "input":
                        Ln(c),
                        sp(c, g, !0);
                        break;
                    case "textarea":
                        Ln(c),
                        ap(c);
                        break;
                    case "select":
                    case "option":
                        break;
                    default:
                        typeof g.onClick == "function" && (c.onclick = Pa)
                    }
                    c = h,
                    s.updateQueue = c,
                    c !== null && (s.flags |= 4)
                } else {
                    v = h.nodeType === 9 ? h : h.ownerDocument,
                    r === "http://www.w3.org/1999/xhtml" && (r = lp(a)),
                    r === "http://www.w3.org/1999/xhtml" ? a === "script" ? (r = v.createElement("div"),
                    r.innerHTML = "<script><\/script>",
                    r = r.removeChild(r.firstChild)) : typeof c.is == "string" ? r = v.createElement(a, {
                        is: c.is
                    }) : (r = v.createElement(a),
                    a === "select" && (v = r,
                    c.multiple ? v.multiple = !0 : c.size && (v.size = c.size))) : r = v.createElementNS(r, a),
                    r[xn] = s,
                    r[Zi] = c,
                    xg(r, s, !1, !1),
                    s.stateNode = r;
                    e: {
                        switch (v = ku(a, c),
                        a) {
                        case "dialog":
                            Fe("cancel", r),
                            Fe("close", r),
                            h = c;
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            Fe("load", r),
                            h = c;
                            break;
                        case "video":
                        case "audio":
                            for (h = 0; h < Yi.length; h++)
                                Fe(Yi[h], r);
                            h = c;
                            break;
                        case "source":
                            Fe("error", r),
                            h = c;
                            break;
                        case "img":
                        case "image":
                        case "link":
                            Fe("error", r),
                            Fe("load", r),
                            h = c;
                            break;
                        case "details":
                            Fe("toggle", r),
                            h = c;
                            break;
                        case "input":
                            np(r, c),
                            h = er(r, c),
                            Fe("invalid", r);
                            break;
                        case "option":
                            h = c;
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!c.multiple
                            },
                            h = B({}, c, {
                                value: void 0
                            }),
                            Fe("invalid", r);
                            break;
                        case "textarea":
                            ip(r, c),
                            h = bu(r, c),
                            Fe("invalid", r);
                            break;
                        default:
                            h = c
                        }
                        Eu(a, h),
                        T = h;
                        for (g in T)
                            if (T.hasOwnProperty(g)) {
                                var _ = T[g];
                                g === "style" ? dp(r, _) : g === "dangerouslySetInnerHTML" ? (_ = _ ? _.__html : void 0,
                                _ != null && up(r, _)) : g === "children" ? typeof _ == "string" ? (a !== "textarea" || _ !== "") && Ni(r, _) : typeof _ == "number" && Ni(r, "" + _) : g !== "suppressContentEditableWarning" && g !== "suppressHydrationWarning" && g !== "autoFocus" && (o.hasOwnProperty(g) ? _ != null && g === "onScroll" && Fe("scroll", r) : _ != null && j(r, g, _, v))
                            }
                        switch (a) {
                        case "input":
                            Ln(r),
                            sp(r, c, !1);
                            break;
                        case "textarea":
                            Ln(r),
                            ap(r);
                            break;
                        case "option":
                            c.value != null && r.setAttribute("value", "" + Pe(c.value));
                            break;
                        case "select":
                            r.multiple = !!c.multiple,
                            g = c.value,
                            g != null ? _s(r, !!c.multiple, g, !1) : c.defaultValue != null && _s(r, !!c.multiple, c.defaultValue, !0);
                            break;
                        default:
                            typeof h.onClick == "function" && (r.onclick = Pa)
                        }
                        switch (a) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            c = !!c.autoFocus;
                            break e;
                        case "img":
                            c = !0;
                            break e;
                        default:
                            c = !1
                        }
                    }
                    c && (s.flags |= 4)
                }
                s.ref !== null && (s.flags |= 512,
                s.flags |= 2097152)
            }
            return vt(s),
            null;
        case 6:
            if (r && s.stateNode != null)
                bg(r, s, r.memoizedProps, c);
            else {
                if (typeof c != "string" && s.stateNode === null)
                    throw Error(n(166));
                if (a = Qr(so.current),
                Qr(Sn.current),
                La(s)) {
                    if (c = s.stateNode,
                    a = s.memoizedProps,
                    c[xn] = s,
                    (g = c.nodeValue !== a) && (r = Ft,
                    r !== null))
                        switch (r.tag) {
                        case 3:
                            Ta(c.nodeValue, a, (r.mode & 1) !== 0);
                            break;
                        case 5:
                            r.memoizedProps.suppressHydrationWarning !== !0 && Ta(c.nodeValue, a, (r.mode & 1) !== 0)
                        }
                    g && (s.flags |= 4)
                } else
                    c = (a.nodeType === 9 ? a : a.ownerDocument).createTextNode(c),
                    c[xn] = s,
                    s.stateNode = c
            }
            return vt(s),
            null;
        case 13:
            if (Ve(ze),
            c = s.memoizedState,
            r === null || r.memoizedState !== null && r.memoizedState.dehydrated !== null) {
                if (Be && Vt !== null && (s.mode & 1) !== 0 && (s.flags & 128) === 0)
                    km(),
                    $s(),
                    s.flags |= 98560,
                    g = !1;
                else if (g = La(s),
                c !== null && c.dehydrated !== null) {
                    if (r === null) {
                        if (!g)
                            throw Error(n(318));
                        if (g = s.memoizedState,
                        g = g !== null ? g.dehydrated : null,
                        !g)
                            throw Error(n(317));
                        g[xn] = s
                    } else
                        $s(),
                        (s.flags & 128) === 0 && (s.memoizedState = null),
                        s.flags |= 4;
                    vt(s),
                    g = !1
                } else
                    an !== null && (td(an),
                    an = null),
                    g = !0;
                if (!g)
                    return s.flags & 65536 ? s : null
            }
            return (s.flags & 128) !== 0 ? (s.lanes = a,
            s) : (c = c !== null,
            c !== (r !== null && r.memoizedState !== null) && c && (s.child.flags |= 8192,
            (s.mode & 1) !== 0 && (r === null || (ze.current & 1) !== 0 ? st === 0 && (st = 3) : sd())),
            s.updateQueue !== null && (s.flags |= 4),
            vt(s),
            null);
        case 4:
            return Ks(),
            Hc(r, s),
            r === null && Xi(s.stateNode.containerInfo),
            vt(s),
            null;
        case 10:
            return vc(s.type._context),
            vt(s),
            null;
        case 17:
            return _t(s.type) && Ra(),
            vt(s),
            null;
        case 19:
            if (Ve(ze),
            g = s.memoizedState,
            g === null)
                return vt(s),
                null;
            if (c = (s.flags & 128) !== 0,
            v = g.rendering,
            v === null)
                if (c)
                    uo(g, !1);
                else {
                    if (st !== 0 || r !== null && (r.flags & 128) !== 0)
                        for (r = s.child; r !== null; ) {
                            if (v = Ua(r),
                            v !== null) {
                                for (s.flags |= 128,
                                uo(g, !1),
                                c = v.updateQueue,
                                c !== null && (s.updateQueue = c,
                                s.flags |= 4),
                                s.subtreeFlags = 0,
                                c = a,
                                a = s.child; a !== null; )
                                    g = a,
                                    r = c,
                                    g.flags &= 14680066,
                                    v = g.alternate,
                                    v === null ? (g.childLanes = 0,
                                    g.lanes = r,
                                    g.child = null,
                                    g.subtreeFlags = 0,
                                    g.memoizedProps = null,
                                    g.memoizedState = null,
                                    g.updateQueue = null,
                                    g.dependencies = null,
                                    g.stateNode = null) : (g.childLanes = v.childLanes,
                                    g.lanes = v.lanes,
                                    g.child = v.child,
                                    g.subtreeFlags = 0,
                                    g.deletions = null,
                                    g.memoizedProps = v.memoizedProps,
                                    g.memoizedState = v.memoizedState,
                                    g.updateQueue = v.updateQueue,
                                    g.type = v.type,
                                    r = v.dependencies,
                                    g.dependencies = r === null ? null : {
                                        lanes: r.lanes,
                                        firstContext: r.firstContext
                                    }),
                                    a = a.sibling;
                                return Ie(ze, ze.current & 1 | 2),
                                s.child
                            }
                            r = r.sibling
                        }
                    g.tail !== null && Ge() > Xs && (s.flags |= 128,
                    c = !0,
                    uo(g, !1),
                    s.lanes = 4194304)
                }
            else {
                if (!c)
                    if (r = Ua(v),
                    r !== null) {
                        if (s.flags |= 128,
                        c = !0,
                        a = r.updateQueue,
                        a !== null && (s.updateQueue = a,
                        s.flags |= 4),
                        uo(g, !0),
                        g.tail === null && g.tailMode === "hidden" && !v.alternate && !Be)
                            return vt(s),
                            null
                    } else
                        2 * Ge() - g.renderingStartTime > Xs && a !== 1073741824 && (s.flags |= 128,
                        c = !0,
                        uo(g, !1),
                        s.lanes = 4194304);
                g.isBackwards ? (v.sibling = s.child,
                s.child = v) : (a = g.last,
                a !== null ? a.sibling = v : s.child = v,
                g.last = v)
            }
            return g.tail !== null ? (s = g.tail,
            g.rendering = s,
            g.tail = s.sibling,
            g.renderingStartTime = Ge(),
            s.sibling = null,
            a = ze.current,
            Ie(ze, c ? a & 1 | 2 : a & 1),
            s) : (vt(s),
            null);
        case 22:
        case 23:
            return rd(),
            c = s.memoizedState !== null,
            r !== null && r.memoizedState !== null !== c && (s.flags |= 8192),
            c && (s.mode & 1) !== 0 ? (Ut & 1073741824) !== 0 && (vt(s),
            s.subtreeFlags & 6 && (s.flags |= 8192)) : vt(s),
            null;
        case 24:
            return null;
        case 25:
            return null
        }
        throw Error(n(156, s.tag))
    }
    function lC(r, s) {
        switch (fc(s),
        s.tag) {
        case 1:
            return _t(s.type) && Ra(),
            r = s.flags,
            r & 65536 ? (s.flags = r & -65537 | 128,
            s) : null;
        case 3:
            return Ks(),
            Ve(Pt),
            Ve(gt),
            kc(),
            r = s.flags,
            (r & 65536) !== 0 && (r & 128) === 0 ? (s.flags = r & -65537 | 128,
            s) : null;
        case 5:
            return Cc(s),
            null;
        case 13:
            if (Ve(ze),
            r = s.memoizedState,
            r !== null && r.dehydrated !== null) {
                if (s.alternate === null)
                    throw Error(n(340));
                $s()
            }
            return r = s.flags,
            r & 65536 ? (s.flags = r & -65537 | 128,
            s) : null;
        case 19:
            return Ve(ze),
            null;
        case 4:
            return Ks(),
            null;
        case 10:
            return vc(s.type._context),
            null;
        case 22:
        case 23:
            return rd(),
            null;
        case 24:
            return null;
        default:
            return null
        }
    }
    var Ga = !1
      , wt = !1
      , uC = typeof WeakSet == "function" ? WeakSet : Set
      , ee = null;
    function Gs(r, s) {
        var a = r.ref;
        if (a !== null)
            if (typeof a == "function")
                try {
                    a(null)
                } catch (c) {
                    We(r, s, c)
                }
            else
                a.current = null
    }
    function Wc(r, s, a) {
        try {
            a()
        } catch (c) {
            We(r, s, c)
        }
    }
    var Cg = !1;
    function cC(r, s) {
        if (rc = ma,
        r = tm(),
        Gu(r)) {
            if ("selectionStart"in r)
                var a = {
                    start: r.selectionStart,
                    end: r.selectionEnd
                };
            else
                e: {
                    a = (a = r.ownerDocument) && a.defaultView || window;
                    var c = a.getSelection && a.getSelection();
                    if (c && c.rangeCount !== 0) {
                        a = c.anchorNode;
                        var h = c.anchorOffset
                          , g = c.focusNode;
                        c = c.focusOffset;
                        try {
                            a.nodeType,
                            g.nodeType
                        } catch {
                            a = null;
                            break e
                        }
                        var v = 0
                          , T = -1
                          , _ = -1
                          , F = 0
                          , W = 0
                          , q = r
                          , H = null;
                        t: for (; ; ) {
                            for (var J; q !== a || h !== 0 && q.nodeType !== 3 || (T = v + h),
                            q !== g || c !== 0 && q.nodeType !== 3 || (_ = v + c),
                            q.nodeType === 3 && (v += q.nodeValue.length),
                            (J = q.firstChild) !== null; )
                                H = q,
                                q = J;
                            for (; ; ) {
                                if (q === r)
                                    break t;
                                if (H === a && ++F === h && (T = v),
                                H === g && ++W === c && (_ = v),
                                (J = q.nextSibling) !== null)
                                    break;
                                q = H,
                                H = q.parentNode
                            }
                            q = J
                        }
                        a = T === -1 || _ === -1 ? null : {
                            start: T,
                            end: _
                        }
                    } else
                        a = null
                }
            a = a || {
                start: 0,
                end: 0
            }
        } else
            a = null;
        for (sc = {
            focusedElem: r,
            selectionRange: a
        },
        ma = !1,
        ee = s; ee !== null; )
            if (s = ee,
            r = s.child,
            (s.subtreeFlags & 1028) !== 0 && r !== null)
                r.return = s,
                ee = r;
            else
                for (; ee !== null; ) {
                    s = ee;
                    try {
                        var te = s.alternate;
                        if ((s.flags & 1024) !== 0)
                            switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (te !== null) {
                                    var se = te.memoizedProps
                                      , Ye = te.memoizedState
                                      , M = s.stateNode
                                      , A = M.getSnapshotBeforeUpdate(s.elementType === s.type ? se : ln(s.type, se), Ye);
                                    M.__reactInternalSnapshotBeforeUpdate = A
                                }
                                break;
                            case 3:
                                var D = s.stateNode.containerInfo;
                                D.nodeType === 1 ? D.textContent = "" : D.nodeType === 9 && D.documentElement && D.removeChild(D.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(n(163))
                            }
                    } catch (G) {
                        We(s, s.return, G)
                    }
                    if (r = s.sibling,
                    r !== null) {
                        r.return = s.return,
                        ee = r;
                        break
                    }
                    ee = s.return
                }
        return te = Cg,
        Cg = !1,
        te
    }
    function co(r, s, a) {
        var c = s.updateQueue;
        if (c = c !== null ? c.lastEffect : null,
        c !== null) {
            var h = c = c.next;
            do {
                if ((h.tag & r) === r) {
                    var g = h.destroy;
                    h.destroy = void 0,
                    g !== void 0 && Wc(s, a, g)
                }
                h = h.next
            } while (h !== c)
        }
    }
    function Ya(r, s) {
        if (s = s.updateQueue,
        s = s !== null ? s.lastEffect : null,
        s !== null) {
            var a = s = s.next;
            do {
                if ((a.tag & r) === r) {
                    var c = a.create;
                    a.destroy = c()
                }
                a = a.next
            } while (a !== s)
        }
    }
    function qc(r) {
        var s = r.ref;
        if (s !== null) {
            var a = r.stateNode;
            switch (r.tag) {
            case 5:
                r = a;
                break;
            default:
                r = a
            }
            typeof s == "function" ? s(r) : s.current = r
        }
    }
    function Eg(r) {
        var s = r.alternate;
        s !== null && (r.alternate = null,
        Eg(s)),
        r.child = null,
        r.deletions = null,
        r.sibling = null,
        r.tag === 5 && (s = r.stateNode,
        s !== null && (delete s[xn],
        delete s[Zi],
        delete s[lc],
        delete s[qb],
        delete s[Kb])),
        r.stateNode = null,
        r.return = null,
        r.dependencies = null,
        r.memoizedProps = null,
        r.memoizedState = null,
        r.pendingProps = null,
        r.stateNode = null,
        r.updateQueue = null
    }
    function kg(r) {
        return r.tag === 5 || r.tag === 3 || r.tag === 4
    }
    function Tg(r) {
        e: for (; ; ) {
            for (; r.sibling === null; ) {
                if (r.return === null || kg(r.return))
                    return null;
                r = r.return
            }
            for (r.sibling.return = r.return,
            r = r.sibling; r.tag !== 5 && r.tag !== 6 && r.tag !== 18; ) {
                if (r.flags & 2 || r.child === null || r.tag === 4)
                    continue e;
                r.child.return = r,
                r = r.child
            }
            if (!(r.flags & 2))
                return r.stateNode
        }
    }
    function Kc(r, s, a) {
        var c = r.tag;
        if (c === 5 || c === 6)
            r = r.stateNode,
            s ? a.nodeType === 8 ? a.parentNode.insertBefore(r, s) : a.insertBefore(r, s) : (a.nodeType === 8 ? (s = a.parentNode,
            s.insertBefore(r, a)) : (s = a,
            s.appendChild(r)),
            a = a._reactRootContainer,
            a != null || s.onclick !== null || (s.onclick = Pa));
        else if (c !== 4 && (r = r.child,
        r !== null))
            for (Kc(r, s, a),
            r = r.sibling; r !== null; )
                Kc(r, s, a),
                r = r.sibling
    }
    function Qc(r, s, a) {
        var c = r.tag;
        if (c === 5 || c === 6)
            r = r.stateNode,
            s ? a.insertBefore(r, s) : a.appendChild(r);
        else if (c !== 4 && (r = r.child,
        r !== null))
            for (Qc(r, s, a),
            r = r.sibling; r !== null; )
                Qc(r, s, a),
                r = r.sibling
    }
    var ct = null
      , un = !1;
    function hr(r, s, a) {
        for (a = a.child; a !== null; )
            Pg(r, s, a),
            a = a.sibling
    }
    function Pg(r, s, a) {
        if (wn && typeof wn.onCommitFiberUnmount == "function")
            try {
                wn.onCommitFiberUnmount(ua, a)
            } catch {}
        switch (a.tag) {
        case 5:
            wt || Gs(a, s);
        case 6:
            var c = ct
              , h = un;
            ct = null,
            hr(r, s, a),
            ct = c,
            un = h,
            ct !== null && (un ? (r = ct,
            a = a.stateNode,
            r.nodeType === 8 ? r.parentNode.removeChild(a) : r.removeChild(a)) : ct.removeChild(a.stateNode));
            break;
        case 18:
            ct !== null && (un ? (r = ct,
            a = a.stateNode,
            r.nodeType === 8 ? ac(r.parentNode, a) : r.nodeType === 1 && ac(r, a),
            zi(r)) : ac(ct, a.stateNode));
            break;
        case 4:
            c = ct,
            h = un,
            ct = a.stateNode.containerInfo,
            un = !0,
            hr(r, s, a),
            ct = c,
            un = h;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!wt && (c = a.updateQueue,
            c !== null && (c = c.lastEffect,
            c !== null))) {
                h = c = c.next;
                do {
                    var g = h
                      , v = g.destroy;
                    g = g.tag,
                    v !== void 0 && ((g & 2) !== 0 || (g & 4) !== 0) && Wc(a, s, v),
                    h = h.next
                } while (h !== c)
            }
            hr(r, s, a);
            break;
        case 1:
            if (!wt && (Gs(a, s),
            c = a.stateNode,
            typeof c.componentWillUnmount == "function"))
                try {
                    c.props = a.memoizedProps,
                    c.state = a.memoizedState,
                    c.componentWillUnmount()
                } catch (T) {
                    We(a, s, T)
                }
            hr(r, s, a);
            break;
        case 21:
            hr(r, s, a);
            break;
        case 22:
            a.mode & 1 ? (wt = (c = wt) || a.memoizedState !== null,
            hr(r, s, a),
            wt = c) : hr(r, s, a);
            break;
        default:
            hr(r, s, a)
        }
    }
    function _g(r) {
        var s = r.updateQueue;
        if (s !== null) {
            r.updateQueue = null;
            var a = r.stateNode;
            a === null && (a = r.stateNode = new uC),
            s.forEach(function(c) {
                var h = wC.bind(null, r, c);
                a.has(c) || (a.add(c),
                c.then(h, h))
            })
        }
    }
    function cn(r, s) {
        var a = s.deletions;
        if (a !== null)
            for (var c = 0; c < a.length; c++) {
                var h = a[c];
                try {
                    var g = r
                      , v = s
                      , T = v;
                    e: for (; T !== null; ) {
                        switch (T.tag) {
                        case 5:
                            ct = T.stateNode,
                            un = !1;
                            break e;
                        case 3:
                            ct = T.stateNode.containerInfo,
                            un = !0;
                            break e;
                        case 4:
                            ct = T.stateNode.containerInfo,
                            un = !0;
                            break e
                        }
                        T = T.return
                    }
                    if (ct === null)
                        throw Error(n(160));
                    Pg(g, v, h),
                    ct = null,
                    un = !1;
                    var _ = h.alternate;
                    _ !== null && (_.return = null),
                    h.return = null
                } catch (F) {
                    We(h, s, F)
                }
            }
        if (s.subtreeFlags & 12854)
            for (s = s.child; s !== null; )
                Rg(s, r),
                s = s.sibling
    }
    function Rg(r, s) {
        var a = r.alternate
          , c = r.flags;
        switch (r.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (cn(s, r),
            Cn(r),
            c & 4) {
                try {
                    co(3, r, r.return),
                    Ya(3, r)
                } catch (se) {
                    We(r, r.return, se)
                }
                try {
                    co(5, r, r.return)
                } catch (se) {
                    We(r, r.return, se)
                }
            }
            break;
        case 1:
            cn(s, r),
            Cn(r),
            c & 512 && a !== null && Gs(a, a.return);
            break;
        case 5:
            if (cn(s, r),
            Cn(r),
            c & 512 && a !== null && Gs(a, a.return),
            r.flags & 32) {
                var h = r.stateNode;
                try {
                    Ni(h, "")
                } catch (se) {
                    We(r, r.return, se)
                }
            }
            if (c & 4 && (h = r.stateNode,
            h != null)) {
                var g = r.memoizedProps
                  , v = a !== null ? a.memoizedProps : g
                  , T = r.type
                  , _ = r.updateQueue;
                if (r.updateQueue = null,
                _ !== null)
                    try {
                        T === "input" && g.type === "radio" && g.name != null && rp(h, g),
                        ku(T, v);
                        var F = ku(T, g);
                        for (v = 0; v < _.length; v += 2) {
                            var W = _[v]
                              , q = _[v + 1];
                            W === "style" ? dp(h, q) : W === "dangerouslySetInnerHTML" ? up(h, q) : W === "children" ? Ni(h, q) : j(h, W, q, F)
                        }
                        switch (T) {
                        case "input":
                            xu(h, g);
                            break;
                        case "textarea":
                            op(h, g);
                            break;
                        case "select":
                            var H = h._wrapperState.wasMultiple;
                            h._wrapperState.wasMultiple = !!g.multiple;
                            var J = g.value;
                            J != null ? _s(h, !!g.multiple, J, !1) : H !== !!g.multiple && (g.defaultValue != null ? _s(h, !!g.multiple, g.defaultValue, !0) : _s(h, !!g.multiple, g.multiple ? [] : "", !1))
                        }
                        h[Zi] = g
                    } catch (se) {
                        We(r, r.return, se)
                    }
            }
            break;
        case 6:
            if (cn(s, r),
            Cn(r),
            c & 4) {
                if (r.stateNode === null)
                    throw Error(n(162));
                h = r.stateNode,
                g = r.memoizedProps;
                try {
                    h.nodeValue = g
                } catch (se) {
                    We(r, r.return, se)
                }
            }
            break;
        case 3:
            if (cn(s, r),
            Cn(r),
            c & 4 && a !== null && a.memoizedState.isDehydrated)
                try {
                    zi(s.containerInfo)
                } catch (se) {
                    We(r, r.return, se)
                }
            break;
        case 4:
            cn(s, r),
            Cn(r);
            break;
        case 13:
            cn(s, r),
            Cn(r),
            h = r.child,
            h.flags & 8192 && (g = h.memoizedState !== null,
            h.stateNode.isHidden = g,
            !g || h.alternate !== null && h.alternate.memoizedState !== null || (Xc = Ge())),
            c & 4 && _g(r);
            break;
        case 22:
            if (W = a !== null && a.memoizedState !== null,
            r.mode & 1 ? (wt = (F = wt) || W,
            cn(s, r),
            wt = F) : cn(s, r),
            Cn(r),
            c & 8192) {
                if (F = r.memoizedState !== null,
                (r.stateNode.isHidden = F) && !W && (r.mode & 1) !== 0)
                    for (ee = r,
                    W = r.child; W !== null; ) {
                        for (q = ee = W; ee !== null; ) {
                            switch (H = ee,
                            J = H.child,
                            H.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                co(4, H, H.return);
                                break;
                            case 1:
                                Gs(H, H.return);
                                var te = H.stateNode;
                                if (typeof te.componentWillUnmount == "function") {
                                    c = H,
                                    a = H.return;
                                    try {
                                        s = c,
                                        te.props = s.memoizedProps,
                                        te.state = s.memoizedState,
                                        te.componentWillUnmount()
                                    } catch (se) {
                                        We(c, a, se)
                                    }
                                }
                                break;
                            case 5:
                                Gs(H, H.return);
                                break;
                            case 22:
                                if (H.memoizedState !== null) {
                                    Og(q);
                                    continue
                                }
                            }
                            J !== null ? (J.return = H,
                            ee = J) : Og(q)
                        }
                        W = W.sibling
                    }
                e: for (W = null,
                q = r; ; ) {
                    if (q.tag === 5) {
                        if (W === null) {
                            W = q;
                            try {
                                h = q.stateNode,
                                F ? (g = h.style,
                                typeof g.setProperty == "function" ? g.setProperty("display", "none", "important") : g.display = "none") : (T = q.stateNode,
                                _ = q.memoizedProps.style,
                                v = _ != null && _.hasOwnProperty("display") ? _.display : null,
                                T.style.display = cp("display", v))
                            } catch (se) {
                                We(r, r.return, se)
                            }
                        }
                    } else if (q.tag === 6) {
                        if (W === null)
                            try {
                                q.stateNode.nodeValue = F ? "" : q.memoizedProps
                            } catch (se) {
                                We(r, r.return, se)
                            }
                    } else if ((q.tag !== 22 && q.tag !== 23 || q.memoizedState === null || q === r) && q.child !== null) {
                        q.child.return = q,
                        q = q.child;
                        continue
                    }
                    if (q === r)
                        break e;
                    for (; q.sibling === null; ) {
                        if (q.return === null || q.return === r)
                            break e;
                        W === q && (W = null),
                        q = q.return
                    }
                    W === q && (W = null),
                    q.sibling.return = q.return,
                    q = q.sibling
                }
            }
            break;
        case 19:
            cn(s, r),
            Cn(r),
            c & 4 && _g(r);
            break;
        case 21:
            break;
        default:
            cn(s, r),
            Cn(r)
        }
    }
    function Cn(r) {
        var s = r.flags;
        if (s & 2) {
            try {
                e: {
                    for (var a = r.return; a !== null; ) {
                        if (kg(a)) {
                            var c = a;
                            break e
                        }
                        a = a.return
                    }
                    throw Error(n(160))
                }
                switch (c.tag) {
                case 5:
                    var h = c.stateNode;
                    c.flags & 32 && (Ni(h, ""),
                    c.flags &= -33);
                    var g = Tg(r);
                    Qc(r, g, h);
                    break;
                case 3:
                case 4:
                    var v = c.stateNode.containerInfo
                      , T = Tg(r);
                    Kc(r, T, v);
                    break;
                default:
                    throw Error(n(161))
                }
            } catch (_) {
                We(r, r.return, _)
            }
            r.flags &= -3
        }
        s & 4096 && (r.flags &= -4097)
    }
    function dC(r, s, a) {
        ee = r,
        Ag(r)
    }
    function Ag(r, s, a) {
        for (var c = (r.mode & 1) !== 0; ee !== null; ) {
            var h = ee
              , g = h.child;
            if (h.tag === 22 && c) {
                var v = h.memoizedState !== null || Ga;
                if (!v) {
                    var T = h.alternate
                      , _ = T !== null && T.memoizedState !== null || wt;
                    T = Ga;
                    var F = wt;
                    if (Ga = v,
                    (wt = _) && !F)
                        for (ee = h; ee !== null; )
                            v = ee,
                            _ = v.child,
                            v.tag === 22 && v.memoizedState !== null ? jg(h) : _ !== null ? (_.return = v,
                            ee = _) : jg(h);
                    for (; g !== null; )
                        ee = g,
                        Ag(g),
                        g = g.sibling;
                    ee = h,
                    Ga = T,
                    wt = F
                }
                Ng(r)
            } else
                (h.subtreeFlags & 8772) !== 0 && g !== null ? (g.return = h,
                ee = g) : Ng(r)
        }
    }
    function Ng(r) {
        for (; ee !== null; ) {
            var s = ee;
            if ((s.flags & 8772) !== 0) {
                var a = s.alternate;
                try {
                    if ((s.flags & 8772) !== 0)
                        switch (s.tag) {
                        case 0:
                        case 11:
                        case 15:
                            wt || Ya(5, s);
                            break;
                        case 1:
                            var c = s.stateNode;
                            if (s.flags & 4 && !wt)
                                if (a === null)
                                    c.componentDidMount();
                                else {
                                    var h = s.elementType === s.type ? a.memoizedProps : ln(s.type, a.memoizedProps);
                                    c.componentDidUpdate(h, a.memoizedState, c.__reactInternalSnapshotBeforeUpdate)
                                }
                            var g = s.updateQueue;
                            g !== null && Om(s, g, c);
                            break;
                        case 3:
                            var v = s.updateQueue;
                            if (v !== null) {
                                if (a = null,
                                s.child !== null)
                                    switch (s.child.tag) {
                                    case 5:
                                        a = s.child.stateNode;
                                        break;
                                    case 1:
                                        a = s.child.stateNode
                                    }
                                Om(s, v, a)
                            }
                            break;
                        case 5:
                            var T = s.stateNode;
                            if (a === null && s.flags & 4) {
                                a = T;
                                var _ = s.memoizedProps;
                                switch (s.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    _.autoFocus && a.focus();
                                    break;
                                case "img":
                                    _.src && (a.src = _.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (s.memoizedState === null) {
                                var F = s.alternate;
                                if (F !== null) {
                                    var W = F.memoizedState;
                                    if (W !== null) {
                                        var q = W.dehydrated;
                                        q !== null && zi(q)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(n(163))
                        }
                    wt || s.flags & 512 && qc(s)
                } catch (H) {
                    We(s, s.return, H)
                }
            }
            if (s === r) {
                ee = null;
                break
            }
            if (a = s.sibling,
            a !== null) {
                a.return = s.return,
                ee = a;
                break
            }
            ee = s.return
        }
    }
    function Og(r) {
        for (; ee !== null; ) {
            var s = ee;
            if (s === r) {
                ee = null;
                break
            }
            var a = s.sibling;
            if (a !== null) {
                a.return = s.return,
                ee = a;
                break
            }
            ee = s.return
        }
    }
    function jg(r) {
        for (; ee !== null; ) {
            var s = ee;
            try {
                switch (s.tag) {
                case 0:
                case 11:
                case 15:
                    var a = s.return;
                    try {
                        Ya(4, s)
                    } catch (_) {
                        We(s, a, _)
                    }
                    break;
                case 1:
                    var c = s.stateNode;
                    if (typeof c.componentDidMount == "function") {
                        var h = s.return;
                        try {
                            c.componentDidMount()
                        } catch (_) {
                            We(s, h, _)
                        }
                    }
                    var g = s.return;
                    try {
                        qc(s)
                    } catch (_) {
                        We(s, g, _)
                    }
                    break;
                case 5:
                    var v = s.return;
                    try {
                        qc(s)
                    } catch (_) {
                        We(s, v, _)
                    }
                }
            } catch (_) {
                We(s, s.return, _)
            }
            if (s === r) {
                ee = null;
                break
            }
            var T = s.sibling;
            if (T !== null) {
                T.return = s.return,
                ee = T;
                break
            }
            ee = s.return
        }
    }
    var fC = Math.ceil
      , Xa = N.ReactCurrentDispatcher
      , Gc = N.ReactCurrentOwner
      , Qt = N.ReactCurrentBatchConfig
      , Te = 0
      , at = null
      , tt = null
      , dt = 0
      , Ut = 0
      , Ys = lr(0)
      , st = 0
      , fo = null
      , Yr = 0
      , Ja = 0
      , Yc = 0
      , ho = null
      , At = null
      , Xc = 0
      , Xs = 1 / 0
      , zn = null
      , Za = !1
      , Jc = null
      , pr = null
      , el = !1
      , mr = null
      , tl = 0
      , po = 0
      , Zc = null
      , nl = -1
      , rl = 0;
    function kt() {
        return (Te & 6) !== 0 ? Ge() : nl !== -1 ? nl : nl = Ge()
    }
    function gr(r) {
        return (r.mode & 1) === 0 ? 1 : (Te & 2) !== 0 && dt !== 0 ? dt & -dt : Gb.transition !== null ? (rl === 0 && (rl = Tp()),
        rl) : (r = je,
        r !== 0 || (r = window.event,
        r = r === void 0 ? 16 : Mp(r.type)),
        r)
    }
    function dn(r, s, a, c) {
        if (50 < po)
            throw po = 0,
            Zc = null,
            Error(n(185));
        Ii(r, a, c),
        ((Te & 2) === 0 || r !== at) && (r === at && ((Te & 2) === 0 && (Ja |= a),
        st === 4 && yr(r, dt)),
        Nt(r, c),
        a === 1 && Te === 0 && (s.mode & 1) === 0 && (Xs = Ge() + 500,
        Na && cr()))
    }
    function Nt(r, s) {
        var a = r.callbackNode;
        GS(r, s);
        var c = fa(r, r === at ? dt : 0);
        if (c === 0)
            a !== null && Cp(a),
            r.callbackNode = null,
            r.callbackPriority = 0;
        else if (s = c & -c,
        r.callbackPriority !== s) {
            if (a != null && Cp(a),
            s === 1)
                r.tag === 0 ? Qb(Mg.bind(null, r)) : xm(Mg.bind(null, r)),
                Hb(function() {
                    (Te & 6) === 0 && cr()
                }),
                a = null;
            else {
                switch (Pp(c)) {
                case 1:
                    a = Ou;
                    break;
                case 4:
                    a = Ep;
                    break;
                case 16:
                    a = la;
                    break;
                case 536870912:
                    a = kp;
                    break;
                default:
                    a = la
                }
                a = $g(a, Lg.bind(null, r))
            }
            r.callbackPriority = s,
            r.callbackNode = a
        }
    }
    function Lg(r, s) {
        if (nl = -1,
        rl = 0,
        (Te & 6) !== 0)
            throw Error(n(327));
        var a = r.callbackNode;
        if (Js() && r.callbackNode !== a)
            return null;
        var c = fa(r, r === at ? dt : 0);
        if (c === 0)
            return null;
        if ((c & 30) !== 0 || (c & r.expiredLanes) !== 0 || s)
            s = sl(r, c);
        else {
            s = c;
            var h = Te;
            Te |= 2;
            var g = Ig();
            (at !== r || dt !== s) && (zn = null,
            Xs = Ge() + 500,
            Jr(r, s));
            do
                try {
                    mC();
                    break
                } catch (T) {
                    Dg(r, T)
                }
            while (!0);
            yc(),
            Xa.current = g,
            Te = h,
            tt !== null ? s = 0 : (at = null,
            dt = 0,
            s = st)
        }
        if (s !== 0) {
            if (s === 2 && (h = ju(r),
            h !== 0 && (c = h,
            s = ed(r, h))),
            s === 1)
                throw a = fo,
                Jr(r, 0),
                yr(r, c),
                Nt(r, Ge()),
                a;
            if (s === 6)
                yr(r, c);
            else {
                if (h = r.current.alternate,
                (c & 30) === 0 && !hC(h) && (s = sl(r, c),
                s === 2 && (g = ju(r),
                g !== 0 && (c = g,
                s = ed(r, g))),
                s === 1))
                    throw a = fo,
                    Jr(r, 0),
                    yr(r, c),
                    Nt(r, Ge()),
                    a;
                switch (r.finishedWork = h,
                r.finishedLanes = c,
                s) {
                case 0:
                case 1:
                    throw Error(n(345));
                case 2:
                    Zr(r, At, zn);
                    break;
                case 3:
                    if (yr(r, c),
                    (c & 130023424) === c && (s = Xc + 500 - Ge(),
                    10 < s)) {
                        if (fa(r, 0) !== 0)
                            break;
                        if (h = r.suspendedLanes,
                        (h & c) !== c) {
                            kt(),
                            r.pingedLanes |= r.suspendedLanes & h;
                            break
                        }
                        r.timeoutHandle = oc(Zr.bind(null, r, At, zn), s);
                        break
                    }
                    Zr(r, At, zn);
                    break;
                case 4:
                    if (yr(r, c),
                    (c & 4194240) === c)
                        break;
                    for (s = r.eventTimes,
                    h = -1; 0 < c; ) {
                        var v = 31 - sn(c);
                        g = 1 << v,
                        v = s[v],
                        v > h && (h = v),
                        c &= ~g
                    }
                    if (c = h,
                    c = Ge() - c,
                    c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3e3 > c ? 3e3 : 4320 > c ? 4320 : 1960 * fC(c / 1960)) - c,
                    10 < c) {
                        r.timeoutHandle = oc(Zr.bind(null, r, At, zn), c);
                        break
                    }
                    Zr(r, At, zn);
                    break;
                case 5:
                    Zr(r, At, zn);
                    break;
                default:
                    throw Error(n(329))
                }
            }
        }
        return Nt(r, Ge()),
        r.callbackNode === a ? Lg.bind(null, r) : null
    }
    function ed(r, s) {
        var a = ho;
        return r.current.memoizedState.isDehydrated && (Jr(r, s).flags |= 256),
        r = sl(r, s),
        r !== 2 && (s = At,
        At = a,
        s !== null && td(s)),
        r
    }
    function td(r) {
        At === null ? At = r : At.push.apply(At, r)
    }
    function hC(r) {
        for (var s = r; ; ) {
            if (s.flags & 16384) {
                var a = s.updateQueue;
                if (a !== null && (a = a.stores,
                a !== null))
                    for (var c = 0; c < a.length; c++) {
                        var h = a[c]
                          , g = h.getSnapshot;
                        h = h.value;
                        try {
                            if (!on(g(), h))
                                return !1
                        } catch {
                            return !1
                        }
                    }
            }
            if (a = s.child,
            s.subtreeFlags & 16384 && a !== null)
                a.return = s,
                s = a;
            else {
                if (s === r)
                    break;
                for (; s.sibling === null; ) {
                    if (s.return === null || s.return === r)
                        return !0;
                    s = s.return
                }
                s.sibling.return = s.return,
                s = s.sibling
            }
        }
        return !0
    }
    function yr(r, s) {
        for (s &= ~Yc,
        s &= ~Ja,
        r.suspendedLanes |= s,
        r.pingedLanes &= ~s,
        r = r.expirationTimes; 0 < s; ) {
            var a = 31 - sn(s)
              , c = 1 << a;
            r[a] = -1,
            s &= ~c
        }
    }
    function Mg(r) {
        if ((Te & 6) !== 0)
            throw Error(n(327));
        Js();
        var s = fa(r, 0);
        if ((s & 1) === 0)
            return Nt(r, Ge()),
            null;
        var a = sl(r, s);
        if (r.tag !== 0 && a === 2) {
            var c = ju(r);
            c !== 0 && (s = c,
            a = ed(r, c))
        }
        if (a === 1)
            throw a = fo,
            Jr(r, 0),
            yr(r, s),
            Nt(r, Ge()),
            a;
        if (a === 6)
            throw Error(n(345));
        return r.finishedWork = r.current.alternate,
        r.finishedLanes = s,
        Zr(r, At, zn),
        Nt(r, Ge()),
        null
    }
    function nd(r, s) {
        var a = Te;
        Te |= 1;
        try {
            return r(s)
        } finally {
            Te = a,
            Te === 0 && (Xs = Ge() + 500,
            Na && cr())
        }
    }
    function Xr(r) {
        mr !== null && mr.tag === 0 && (Te & 6) === 0 && Js();
        var s = Te;
        Te |= 1;
        var a = Qt.transition
          , c = je;
        try {
            if (Qt.transition = null,
            je = 1,
            r)
                return r()
        } finally {
            je = c,
            Qt.transition = a,
            Te = s,
            (Te & 6) === 0 && cr()
        }
    }
    function rd() {
        Ut = Ys.current,
        Ve(Ys)
    }
    function Jr(r, s) {
        r.finishedWork = null,
        r.finishedLanes = 0;
        var a = r.timeoutHandle;
        if (a !== -1 && (r.timeoutHandle = -1,
        $b(a)),
        tt !== null)
            for (a = tt.return; a !== null; ) {
                var c = a;
                switch (fc(c),
                c.tag) {
                case 1:
                    c = c.type.childContextTypes,
                    c != null && Ra();
                    break;
                case 3:
                    Ks(),
                    Ve(Pt),
                    Ve(gt),
                    kc();
                    break;
                case 5:
                    Cc(c);
                    break;
                case 4:
                    Ks();
                    break;
                case 13:
                    Ve(ze);
                    break;
                case 19:
                    Ve(ze);
                    break;
                case 10:
                    vc(c.type._context);
                    break;
                case 22:
                case 23:
                    rd()
                }
                a = a.return
            }
        if (at = r,
        tt = r = vr(r.current, null),
        dt = Ut = s,
        st = 0,
        fo = null,
        Yc = Ja = Yr = 0,
        At = ho = null,
        Kr !== null) {
            for (s = 0; s < Kr.length; s++)
                if (a = Kr[s],
                c = a.interleaved,
                c !== null) {
                    a.interleaved = null;
                    var h = c.next
                      , g = a.pending;
                    if (g !== null) {
                        var v = g.next;
                        g.next = h,
                        c.next = v
                    }
                    a.pending = c
                }
            Kr = null
        }
        return r
    }
    function Dg(r, s) {
        do {
            var a = tt;
            try {
                if (yc(),
                Ba.current = Wa,
                za) {
                    for (var c = $e.memoizedState; c !== null; ) {
                        var h = c.queue;
                        h !== null && (h.pending = null),
                        c = c.next
                    }
                    za = !1
                }
                if (Gr = 0,
                ot = rt = $e = null,
                io = !1,
                oo = 0,
                Gc.current = null,
                a === null || a.return === null) {
                    st = 1,
                    fo = s,
                    tt = null;
                    break
                }
                e: {
                    var g = r
                      , v = a.return
                      , T = a
                      , _ = s;
                    if (s = dt,
                    T.flags |= 32768,
                    _ !== null && typeof _ == "object" && typeof _.then == "function") {
                        var F = _
                          , W = T
                          , q = W.tag;
                        if ((W.mode & 1) === 0 && (q === 0 || q === 11 || q === 15)) {
                            var H = W.alternate;
                            H ? (W.updateQueue = H.updateQueue,
                            W.memoizedState = H.memoizedState,
                            W.lanes = H.lanes) : (W.updateQueue = null,
                            W.memoizedState = null)
                        }
                        var J = ag(v);
                        if (J !== null) {
                            J.flags &= -257,
                            lg(J, v, T, g, s),
                            J.mode & 1 && og(g, F, s),
                            s = J,
                            _ = F;
                            var te = s.updateQueue;
                            if (te === null) {
                                var se = new Set;
                                se.add(_),
                                s.updateQueue = se
                            } else
                                te.add(_);
                            break e
                        } else {
                            if ((s & 1) === 0) {
                                og(g, F, s),
                                sd();
                                break e
                            }
                            _ = Error(n(426))
                        }
                    } else if (Be && T.mode & 1) {
                        var Ye = ag(v);
                        if (Ye !== null) {
                            (Ye.flags & 65536) === 0 && (Ye.flags |= 256),
                            lg(Ye, v, T, g, s),
                            mc(Qs(_, T));
                            break e
                        }
                    }
                    g = _ = Qs(_, T),
                    st !== 4 && (st = 2),
                    ho === null ? ho = [g] : ho.push(g),
                    g = v;
                    do {
                        switch (g.tag) {
                        case 3:
                            g.flags |= 65536,
                            s &= -s,
                            g.lanes |= s;
                            var M = sg(g, _, s);
                            Nm(g, M);
                            break e;
                        case 1:
                            T = _;
                            var A = g.type
                              , D = g.stateNode;
                            if ((g.flags & 128) === 0 && (typeof A.getDerivedStateFromError == "function" || D !== null && typeof D.componentDidCatch == "function" && (pr === null || !pr.has(D)))) {
                                g.flags |= 65536,
                                s &= -s,
                                g.lanes |= s;
                                var G = ig(g, T, s);
                                Nm(g, G);
                                break e
                            }
                        }
                        g = g.return
                    } while (g !== null)
                }
                Vg(a)
            } catch (oe) {
                s = oe,
                tt === a && a !== null && (tt = a = a.return);
                continue
            }
            break
        } while (!0)
    }
    function Ig() {
        var r = Xa.current;
        return Xa.current = Wa,
        r === null ? Wa : r
    }
    function sd() {
        (st === 0 || st === 3 || st === 2) && (st = 4),
        at === null || (Yr & 268435455) === 0 && (Ja & 268435455) === 0 || yr(at, dt)
    }
    function sl(r, s) {
        var a = Te;
        Te |= 2;
        var c = Ig();
        (at !== r || dt !== s) && (zn = null,
        Jr(r, s));
        do
            try {
                pC();
                break
            } catch (h) {
                Dg(r, h)
            }
        while (!0);
        if (yc(),
        Te = a,
        Xa.current = c,
        tt !== null)
            throw Error(n(261));
        return at = null,
        dt = 0,
        st
    }
    function pC() {
        for (; tt !== null; )
            Fg(tt)
    }
    function mC() {
        for (; tt !== null && !US(); )
            Fg(tt)
    }
    function Fg(r) {
        var s = zg(r.alternate, r, Ut);
        r.memoizedProps = r.pendingProps,
        s === null ? Vg(r) : tt = s,
        Gc.current = null
    }
    function Vg(r) {
        var s = r;
        do {
            var a = s.alternate;
            if (r = s.return,
            (s.flags & 32768) === 0) {
                if (a = aC(a, s, Ut),
                a !== null) {
                    tt = a;
                    return
                }
            } else {
                if (a = lC(a, s),
                a !== null) {
                    a.flags &= 32767,
                    tt = a;
                    return
                }
                if (r !== null)
                    r.flags |= 32768,
                    r.subtreeFlags = 0,
                    r.deletions = null;
                else {
                    st = 6,
                    tt = null;
                    return
                }
            }
            if (s = s.sibling,
            s !== null) {
                tt = s;
                return
            }
            tt = s = r
        } while (s !== null);
        st === 0 && (st = 5)
    }
    function Zr(r, s, a) {
        var c = je
          , h = Qt.transition;
        try {
            Qt.transition = null,
            je = 1,
            gC(r, s, a, c)
        } finally {
            Qt.transition = h,
            je = c
        }
        return null
    }
    function gC(r, s, a, c) {
        do
            Js();
        while (mr !== null);
        if ((Te & 6) !== 0)
            throw Error(n(327));
        a = r.finishedWork;
        var h = r.finishedLanes;
        if (a === null)
            return null;
        if (r.finishedWork = null,
        r.finishedLanes = 0,
        a === r.current)
            throw Error(n(177));
        r.callbackNode = null,
        r.callbackPriority = 0;
        var g = a.lanes | a.childLanes;
        if (YS(r, g),
        r === at && (tt = at = null,
        dt = 0),
        (a.subtreeFlags & 2064) === 0 && (a.flags & 2064) === 0 || el || (el = !0,
        $g(la, function() {
            return Js(),
            null
        })),
        g = (a.flags & 15990) !== 0,
        (a.subtreeFlags & 15990) !== 0 || g) {
            g = Qt.transition,
            Qt.transition = null;
            var v = je;
            je = 1;
            var T = Te;
            Te |= 4,
            Gc.current = null,
            cC(r, a),
            Rg(a, r),
            Db(sc),
            ma = !!rc,
            sc = rc = null,
            r.current = a,
            dC(a),
            BS(),
            Te = T,
            je = v,
            Qt.transition = g
        } else
            r.current = a;
        if (el && (el = !1,
        mr = r,
        tl = h),
        g = r.pendingLanes,
        g === 0 && (pr = null),
        HS(a.stateNode),
        Nt(r, Ge()),
        s !== null)
            for (c = r.onRecoverableError,
            a = 0; a < s.length; a++)
                h = s[a],
                c(h.value, {
                    componentStack: h.stack,
                    digest: h.digest
                });
        if (Za)
            throw Za = !1,
            r = Jc,
            Jc = null,
            r;
        return (tl & 1) !== 0 && r.tag !== 0 && Js(),
        g = r.pendingLanes,
        (g & 1) !== 0 ? r === Zc ? po++ : (po = 0,
        Zc = r) : po = 0,
        cr(),
        null
    }
    function Js() {
        if (mr !== null) {
            var r = Pp(tl)
              , s = Qt.transition
              , a = je;
            try {
                if (Qt.transition = null,
                je = 16 > r ? 16 : r,
                mr === null)
                    var c = !1;
                else {
                    if (r = mr,
                    mr = null,
                    tl = 0,
                    (Te & 6) !== 0)
                        throw Error(n(331));
                    var h = Te;
                    for (Te |= 4,
                    ee = r.current; ee !== null; ) {
                        var g = ee
                          , v = g.child;
                        if ((ee.flags & 16) !== 0) {
                            var T = g.deletions;
                            if (T !== null) {
                                for (var _ = 0; _ < T.length; _++) {
                                    var F = T[_];
                                    for (ee = F; ee !== null; ) {
                                        var W = ee;
                                        switch (W.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            co(8, W, g)
                                        }
                                        var q = W.child;
                                        if (q !== null)
                                            q.return = W,
                                            ee = q;
                                        else
                                            for (; ee !== null; ) {
                                                W = ee;
                                                var H = W.sibling
                                                  , J = W.return;
                                                if (Eg(W),
                                                W === F) {
                                                    ee = null;
                                                    break
                                                }
                                                if (H !== null) {
                                                    H.return = J,
                                                    ee = H;
                                                    break
                                                }
                                                ee = J
                                            }
                                    }
                                }
                                var te = g.alternate;
                                if (te !== null) {
                                    var se = te.child;
                                    if (se !== null) {
                                        te.child = null;
                                        do {
                                            var Ye = se.sibling;
                                            se.sibling = null,
                                            se = Ye
                                        } while (se !== null)
                                    }
                                }
                                ee = g
                            }
                        }
                        if ((g.subtreeFlags & 2064) !== 0 && v !== null)
                            v.return = g,
                            ee = v;
                        else
                            e: for (; ee !== null; ) {
                                if (g = ee,
                                (g.flags & 2048) !== 0)
                                    switch (g.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        co(9, g, g.return)
                                    }
                                var M = g.sibling;
                                if (M !== null) {
                                    M.return = g.return,
                                    ee = M;
                                    break e
                                }
                                ee = g.return
                            }
                    }
                    var A = r.current;
                    for (ee = A; ee !== null; ) {
                        v = ee;
                        var D = v.child;
                        if ((v.subtreeFlags & 2064) !== 0 && D !== null)
                            D.return = v,
                            ee = D;
                        else
                            e: for (v = A; ee !== null; ) {
                                if (T = ee,
                                (T.flags & 2048) !== 0)
                                    try {
                                        switch (T.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Ya(9, T)
                                        }
                                    } catch (oe) {
                                        We(T, T.return, oe)
                                    }
                                if (T === v) {
                                    ee = null;
                                    break e
                                }
                                var G = T.sibling;
                                if (G !== null) {
                                    G.return = T.return,
                                    ee = G;
                                    break e
                                }
                                ee = T.return
                            }
                    }
                    if (Te = h,
                    cr(),
                    wn && typeof wn.onPostCommitFiberRoot == "function")
                        try {
                            wn.onPostCommitFiberRoot(ua, r)
                        } catch {}
                    c = !0
                }
                return c
            } finally {
                je = a,
                Qt.transition = s
            }
        }
        return !1
    }
    function Ug(r, s, a) {
        s = Qs(a, s),
        s = sg(r, s, 1),
        r = fr(r, s, 1),
        s = kt(),
        r !== null && (Ii(r, 1, s),
        Nt(r, s))
    }
    function We(r, s, a) {
        if (r.tag === 3)
            Ug(r, r, a);
        else
            for (; s !== null; ) {
                if (s.tag === 3) {
                    Ug(s, r, a);
                    break
                } else if (s.tag === 1) {
                    var c = s.stateNode;
                    if (typeof s.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (pr === null || !pr.has(c))) {
                        r = Qs(a, r),
                        r = ig(s, r, 1),
                        s = fr(s, r, 1),
                        r = kt(),
                        s !== null && (Ii(s, 1, r),
                        Nt(s, r));
                        break
                    }
                }
                s = s.return
            }
    }
    function yC(r, s, a) {
        var c = r.pingCache;
        c !== null && c.delete(s),
        s = kt(),
        r.pingedLanes |= r.suspendedLanes & a,
        at === r && (dt & a) === a && (st === 4 || st === 3 && (dt & 130023424) === dt && 500 > Ge() - Xc ? Jr(r, 0) : Yc |= a),
        Nt(r, s)
    }
    function Bg(r, s) {
        s === 0 && ((r.mode & 1) === 0 ? s = 1 : (s = da,
        da <<= 1,
        (da & 130023424) === 0 && (da = 4194304)));
        var a = kt();
        r = Vn(r, s),
        r !== null && (Ii(r, s, a),
        Nt(r, a))
    }
    function vC(r) {
        var s = r.memoizedState
          , a = 0;
        s !== null && (a = s.retryLane),
        Bg(r, a)
    }
    function wC(r, s) {
        var a = 0;
        switch (r.tag) {
        case 13:
            var c = r.stateNode
              , h = r.memoizedState;
            h !== null && (a = h.retryLane);
            break;
        case 19:
            c = r.stateNode;
            break;
        default:
            throw Error(n(314))
        }
        c !== null && c.delete(s),
        Bg(r, a)
    }
    var zg;
    zg = function(r, s, a) {
        if (r !== null)
            if (r.memoizedProps !== s.pendingProps || Pt.current)
                Rt = !0;
            else {
                if ((r.lanes & a) === 0 && (s.flags & 128) === 0)
                    return Rt = !1,
                    oC(r, s, a);
                Rt = (r.flags & 131072) !== 0
            }
        else
            Rt = !1,
            Be && (s.flags & 1048576) !== 0 && Sm(s, ja, s.index);
        switch (s.lanes = 0,
        s.tag) {
        case 2:
            var c = s.type;
            Qa(r, s),
            r = s.pendingProps;
            var h = Us(s, gt.current);
            qs(s, a),
            h = _c(null, s, c, r, h, a);
            var g = Rc();
            return s.flags |= 1,
            typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0 ? (s.tag = 1,
            s.memoizedState = null,
            s.updateQueue = null,
            _t(c) ? (g = !0,
            Aa(s)) : g = !1,
            s.memoizedState = h.state !== null && h.state !== void 0 ? h.state : null,
            Sc(s),
            h.updater = qa,
            s.stateNode = h,
            h._reactInternals = s,
            Mc(s, c, r, a),
            s = Vc(null, s, c, !0, g, a)) : (s.tag = 0,
            Be && g && dc(s),
            Et(null, s, h, a),
            s = s.child),
            s;
        case 16:
            c = s.elementType;
            e: {
                switch (Qa(r, s),
                r = s.pendingProps,
                h = c._init,
                c = h(c._payload),
                s.type = c,
                h = s.tag = SC(c),
                r = ln(c, r),
                h) {
                case 0:
                    s = Fc(null, s, c, r, a);
                    break e;
                case 1:
                    s = pg(null, s, c, r, a);
                    break e;
                case 11:
                    s = ug(null, s, c, r, a);
                    break e;
                case 14:
                    s = cg(null, s, c, ln(c.type, r), a);
                    break e
                }
                throw Error(n(306, c, ""))
            }
            return s;
        case 0:
            return c = s.type,
            h = s.pendingProps,
            h = s.elementType === c ? h : ln(c, h),
            Fc(r, s, c, h, a);
        case 1:
            return c = s.type,
            h = s.pendingProps,
            h = s.elementType === c ? h : ln(c, h),
            pg(r, s, c, h, a);
        case 3:
            e: {
                if (mg(s),
                r === null)
                    throw Error(n(387));
                c = s.pendingProps,
                g = s.memoizedState,
                h = g.element,
                Am(r, s),
                Va(s, c, null, a);
                var v = s.memoizedState;
                if (c = v.element,
                g.isDehydrated)
                    if (g = {
                        element: c,
                        isDehydrated: !1,
                        cache: v.cache,
                        pendingSuspenseBoundaries: v.pendingSuspenseBoundaries,
                        transitions: v.transitions
                    },
                    s.updateQueue.baseState = g,
                    s.memoizedState = g,
                    s.flags & 256) {
                        h = Qs(Error(n(423)), s),
                        s = gg(r, s, c, a, h);
                        break e
                    } else if (c !== h) {
                        h = Qs(Error(n(424)), s),
                        s = gg(r, s, c, a, h);
                        break e
                    } else
                        for (Vt = ar(s.stateNode.containerInfo.firstChild),
                        Ft = s,
                        Be = !0,
                        an = null,
                        a = _m(s, null, c, a),
                        s.child = a; a; )
                            a.flags = a.flags & -3 | 4096,
                            a = a.sibling;
                else {
                    if ($s(),
                    c === h) {
                        s = Bn(r, s, a);
                        break e
                    }
                    Et(r, s, c, a)
                }
                s = s.child
            }
            return s;
        case 5:
            return jm(s),
            r === null && pc(s),
            c = s.type,
            h = s.pendingProps,
            g = r !== null ? r.memoizedProps : null,
            v = h.children,
            ic(c, h) ? v = null : g !== null && ic(c, g) && (s.flags |= 32),
            hg(r, s),
            Et(r, s, v, a),
            s.child;
        case 6:
            return r === null && pc(s),
            null;
        case 13:
            return yg(r, s, a);
        case 4:
            return bc(s, s.stateNode.containerInfo),
            c = s.pendingProps,
            r === null ? s.child = Hs(s, null, c, a) : Et(r, s, c, a),
            s.child;
        case 11:
            return c = s.type,
            h = s.pendingProps,
            h = s.elementType === c ? h : ln(c, h),
            ug(r, s, c, h, a);
        case 7:
            return Et(r, s, s.pendingProps, a),
            s.child;
        case 8:
            return Et(r, s, s.pendingProps.children, a),
            s.child;
        case 12:
            return Et(r, s, s.pendingProps.children, a),
            s.child;
        case 10:
            e: {
                if (c = s.type._context,
                h = s.pendingProps,
                g = s.memoizedProps,
                v = h.value,
                Ie(Da, c._currentValue),
                c._currentValue = v,
                g !== null)
                    if (on(g.value, v)) {
                        if (g.children === h.children && !Pt.current) {
                            s = Bn(r, s, a);
                            break e
                        }
                    } else
                        for (g = s.child,
                        g !== null && (g.return = s); g !== null; ) {
                            var T = g.dependencies;
                            if (T !== null) {
                                v = g.child;
                                for (var _ = T.firstContext; _ !== null; ) {
                                    if (_.context === c) {
                                        if (g.tag === 1) {
                                            _ = Un(-1, a & -a),
                                            _.tag = 2;
                                            var F = g.updateQueue;
                                            if (F !== null) {
                                                F = F.shared;
                                                var W = F.pending;
                                                W === null ? _.next = _ : (_.next = W.next,
                                                W.next = _),
                                                F.pending = _
                                            }
                                        }
                                        g.lanes |= a,
                                        _ = g.alternate,
                                        _ !== null && (_.lanes |= a),
                                        wc(g.return, a, s),
                                        T.lanes |= a;
                                        break
                                    }
                                    _ = _.next
                                }
                            } else if (g.tag === 10)
                                v = g.type === s.type ? null : g.child;
                            else if (g.tag === 18) {
                                if (v = g.return,
                                v === null)
                                    throw Error(n(341));
                                v.lanes |= a,
                                T = v.alternate,
                                T !== null && (T.lanes |= a),
                                wc(v, a, s),
                                v = g.sibling
                            } else
                                v = g.child;
                            if (v !== null)
                                v.return = g;
                            else
                                for (v = g; v !== null; ) {
                                    if (v === s) {
                                        v = null;
                                        break
                                    }
                                    if (g = v.sibling,
                                    g !== null) {
                                        g.return = v.return,
                                        v = g;
                                        break
                                    }
                                    v = v.return
                                }
                            g = v
                        }
                Et(r, s, h.children, a),
                s = s.child
            }
            return s;
        case 9:
            return h = s.type,
            c = s.pendingProps.children,
            qs(s, a),
            h = qt(h),
            c = c(h),
            s.flags |= 1,
            Et(r, s, c, a),
            s.child;
        case 14:
            return c = s.type,
            h = ln(c, s.pendingProps),
            h = ln(c.type, h),
            cg(r, s, c, h, a);
        case 15:
            return dg(r, s, s.type, s.pendingProps, a);
        case 17:
            return c = s.type,
            h = s.pendingProps,
            h = s.elementType === c ? h : ln(c, h),
            Qa(r, s),
            s.tag = 1,
            _t(c) ? (r = !0,
            Aa(s)) : r = !1,
            qs(s, a),
            ng(s, c, h),
            Mc(s, c, h, a),
            Vc(null, s, c, !0, r, a);
        case 19:
            return wg(r, s, a);
        case 22:
            return fg(r, s, a)
        }
        throw Error(n(156, s.tag))
    }
    ;
    function $g(r, s) {
        return bp(r, s)
    }
    function xC(r, s, a, c) {
        this.tag = r,
        this.key = a,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.ref = null,
        this.pendingProps = s,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = c,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function Gt(r, s, a, c) {
        return new xC(r,s,a,c)
    }
    function id(r) {
        return r = r.prototype,
        !(!r || !r.isReactComponent)
    }
    function SC(r) {
        if (typeof r == "function")
            return id(r) ? 1 : 0;
        if (r != null) {
            if (r = r.$$typeof,
            r === Oe)
                return 11;
            if (r === De)
                return 14
        }
        return 2
    }
    function vr(r, s) {
        var a = r.alternate;
        return a === null ? (a = Gt(r.tag, s, r.key, r.mode),
        a.elementType = r.elementType,
        a.type = r.type,
        a.stateNode = r.stateNode,
        a.alternate = r,
        r.alternate = a) : (a.pendingProps = s,
        a.type = r.type,
        a.flags = 0,
        a.subtreeFlags = 0,
        a.deletions = null),
        a.flags = r.flags & 14680064,
        a.childLanes = r.childLanes,
        a.lanes = r.lanes,
        a.child = r.child,
        a.memoizedProps = r.memoizedProps,
        a.memoizedState = r.memoizedState,
        a.updateQueue = r.updateQueue,
        s = r.dependencies,
        a.dependencies = s === null ? null : {
            lanes: s.lanes,
            firstContext: s.firstContext
        },
        a.sibling = r.sibling,
        a.index = r.index,
        a.ref = r.ref,
        a
    }
    function il(r, s, a, c, h, g) {
        var v = 2;
        if (c = r,
        typeof r == "function")
            id(r) && (v = 1);
        else if (typeof r == "string")
            v = 5;
        else
            e: switch (r) {
            case Y:
                return es(a.children, h, g, s);
            case I:
                v = 8,
                h |= 8;
                break;
            case Q:
                return r = Gt(12, a, s, h | 2),
                r.elementType = Q,
                r.lanes = g,
                r;
            case Le:
                return r = Gt(13, a, s, h),
                r.elementType = Le,
                r.lanes = g,
                r;
            case Re:
                return r = Gt(19, a, s, h),
                r.elementType = Re,
                r.lanes = g,
                r;
            case fe:
                return ol(a, h, g, s);
            default:
                if (typeof r == "object" && r !== null)
                    switch (r.$$typeof) {
                    case X:
                        v = 10;
                        break e;
                    case xe:
                        v = 9;
                        break e;
                    case Oe:
                        v = 11;
                        break e;
                    case De:
                        v = 14;
                        break e;
                    case we:
                        v = 16,
                        c = null;
                        break e
                    }
                throw Error(n(130, r == null ? r : typeof r, ""))
            }
        return s = Gt(v, a, s, h),
        s.elementType = r,
        s.type = c,
        s.lanes = g,
        s
    }
    function es(r, s, a, c) {
        return r = Gt(7, r, c, s),
        r.lanes = a,
        r
    }
    function ol(r, s, a, c) {
        return r = Gt(22, r, c, s),
        r.elementType = fe,
        r.lanes = a,
        r.stateNode = {
            isHidden: !1
        },
        r
    }
    function od(r, s, a) {
        return r = Gt(6, r, null, s),
        r.lanes = a,
        r
    }
    function ad(r, s, a) {
        return s = Gt(4, r.children !== null ? r.children : [], r.key, s),
        s.lanes = a,
        s.stateNode = {
            containerInfo: r.containerInfo,
            pendingChildren: null,
            implementation: r.implementation
        },
        s
    }
    function bC(r, s, a, c, h) {
        this.tag = s,
        this.containerInfo = r,
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.pendingContext = this.context = null,
        this.callbackPriority = 0,
        this.eventTimes = Lu(0),
        this.expirationTimes = Lu(-1),
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = Lu(0),
        this.identifierPrefix = c,
        this.onRecoverableError = h,
        this.mutableSourceEagerHydrationData = null
    }
    function ld(r, s, a, c, h, g, v, T, _) {
        return r = new bC(r,s,a,T,_),
        s === 1 ? (s = 1,
        g === !0 && (s |= 8)) : s = 0,
        g = Gt(3, null, null, s),
        r.current = g,
        g.stateNode = r,
        g.memoizedState = {
            element: c,
            isDehydrated: a,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        },
        Sc(g),
        r
    }
    function CC(r, s, a) {
        var c = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: $,
            key: c == null ? null : "" + c,
            children: r,
            containerInfo: s,
            implementation: a
        }
    }
    function Hg(r) {
        if (!r)
            return ur;
        r = r._reactInternals;
        e: {
            if (zr(r) !== r || r.tag !== 1)
                throw Error(n(170));
            var s = r;
            do {
                switch (s.tag) {
                case 3:
                    s = s.stateNode.context;
                    break e;
                case 1:
                    if (_t(s.type)) {
                        s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
                }
                s = s.return
            } while (s !== null);
            throw Error(n(171))
        }
        if (r.tag === 1) {
            var a = r.type;
            if (_t(a))
                return vm(r, a, s)
        }
        return s
    }
    function Wg(r, s, a, c, h, g, v, T, _) {
        return r = ld(a, c, !0, r, h, g, v, T, _),
        r.context = Hg(null),
        a = r.current,
        c = kt(),
        h = gr(a),
        g = Un(c, h),
        g.callback = s ?? null,
        fr(a, g, h),
        r.current.lanes = h,
        Ii(r, h, c),
        Nt(r, c),
        r
    }
    function al(r, s, a, c) {
        var h = s.current
          , g = kt()
          , v = gr(h);
        return a = Hg(a),
        s.context === null ? s.context = a : s.pendingContext = a,
        s = Un(g, v),
        s.payload = {
            element: r
        },
        c = c === void 0 ? null : c,
        c !== null && (s.callback = c),
        r = fr(h, s, v),
        r !== null && (dn(r, h, v, g),
        Fa(r, h, v)),
        v
    }
    function ll(r) {
        if (r = r.current,
        !r.child)
            return null;
        switch (r.child.tag) {
        case 5:
            return r.child.stateNode;
        default:
            return r.child.stateNode
        }
    }
    function qg(r, s) {
        if (r = r.memoizedState,
        r !== null && r.dehydrated !== null) {
            var a = r.retryLane;
            r.retryLane = a !== 0 && a < s ? a : s
        }
    }
    function ud(r, s) {
        qg(r, s),
        (r = r.alternate) && qg(r, s)
    }
    function EC() {
        return null
    }
    var Kg = typeof reportError == "function" ? reportError : function(r) {
        console.error(r)
    }
    ;
    function cd(r) {
        this._internalRoot = r
    }
    ul.prototype.render = cd.prototype.render = function(r) {
        var s = this._internalRoot;
        if (s === null)
            throw Error(n(409));
        al(r, s, null, null)
    }
    ,
    ul.prototype.unmount = cd.prototype.unmount = function() {
        var r = this._internalRoot;
        if (r !== null) {
            this._internalRoot = null;
            var s = r.containerInfo;
            Xr(function() {
                al(null, r, null, null)
            }),
            s[Mn] = null
        }
    }
    ;
    function ul(r) {
        this._internalRoot = r
    }
    ul.prototype.unstable_scheduleHydration = function(r) {
        if (r) {
            var s = Ap();
            r = {
                blockedOn: null,
                target: r,
                priority: s
            };
            for (var a = 0; a < sr.length && s !== 0 && s < sr[a].priority; a++)
                ;
            sr.splice(a, 0, r),
            a === 0 && jp(r)
        }
    }
    ;
    function dd(r) {
        return !(!r || r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11)
    }
    function cl(r) {
        return !(!r || r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11 && (r.nodeType !== 8 || r.nodeValue !== " react-mount-point-unstable "))
    }
    function Qg() {}
    function kC(r, s, a, c, h) {
        if (h) {
            if (typeof c == "function") {
                var g = c;
                c = function() {
                    var F = ll(v);
                    g.call(F)
                }
            }
            var v = Wg(s, c, r, 0, null, !1, !1, "", Qg);
            return r._reactRootContainer = v,
            r[Mn] = v.current,
            Xi(r.nodeType === 8 ? r.parentNode : r),
            Xr(),
            v
        }
        for (; h = r.lastChild; )
            r.removeChild(h);
        if (typeof c == "function") {
            var T = c;
            c = function() {
                var F = ll(_);
                T.call(F)
            }
        }
        var _ = ld(r, 0, !1, null, null, !1, !1, "", Qg);
        return r._reactRootContainer = _,
        r[Mn] = _.current,
        Xi(r.nodeType === 8 ? r.parentNode : r),
        Xr(function() {
            al(s, _, a, c)
        }),
        _
    }
    function dl(r, s, a, c, h) {
        var g = a._reactRootContainer;
        if (g) {
            var v = g;
            if (typeof h == "function") {
                var T = h;
                h = function() {
                    var _ = ll(v);
                    T.call(_)
                }
            }
            al(s, v, r, h)
        } else
            v = kC(a, s, r, h, c);
        return ll(v)
    }
    _p = function(r) {
        switch (r.tag) {
        case 3:
            var s = r.stateNode;
            if (s.current.memoizedState.isDehydrated) {
                var a = Di(s.pendingLanes);
                a !== 0 && (Mu(s, a | 1),
                Nt(s, Ge()),
                (Te & 6) === 0 && (Xs = Ge() + 500,
                cr()))
            }
            break;
        case 13:
            Xr(function() {
                var c = Vn(r, 1);
                if (c !== null) {
                    var h = kt();
                    dn(c, r, 1, h)
                }
            }),
            ud(r, 1)
        }
    }
    ,
    Du = function(r) {
        if (r.tag === 13) {
            var s = Vn(r, 134217728);
            if (s !== null) {
                var a = kt();
                dn(s, r, 134217728, a)
            }
            ud(r, 134217728)
        }
    }
    ,
    Rp = function(r) {
        if (r.tag === 13) {
            var s = gr(r)
              , a = Vn(r, s);
            if (a !== null) {
                var c = kt();
                dn(a, r, s, c)
            }
            ud(r, s)
        }
    }
    ,
    Ap = function() {
        return je
    }
    ,
    Np = function(r, s) {
        var a = je;
        try {
            return je = r,
            s()
        } finally {
            je = a
        }
    }
    ,
    _u = function(r, s, a) {
        switch (s) {
        case "input":
            if (xu(r, a),
            s = a.name,
            a.type === "radio" && s != null) {
                for (a = r; a.parentNode; )
                    a = a.parentNode;
                for (a = a.querySelectorAll("input[name=" + JSON.stringify("" + s) + '][type="radio"]'),
                s = 0; s < a.length; s++) {
                    var c = a[s];
                    if (c !== r && c.form === r.form) {
                        var h = _a(c);
                        if (!h)
                            throw Error(n(90));
                        Br(c),
                        xu(c, h)
                    }
                }
            }
            break;
        case "textarea":
            op(r, a);
            break;
        case "select":
            s = a.value,
            s != null && _s(r, !!a.multiple, s, !1)
        }
    }
    ,
    mp = nd,
    gp = Xr;
    var TC = {
        usingClientEntryPoint: !1,
        Events: [eo, Fs, _a, hp, pp, nd]
    }
      , mo = {
        findFiberByHostInstance: $r,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }
      , PC = {
        bundleType: mo.bundleType,
        version: mo.version,
        rendererPackageName: mo.rendererPackageName,
        rendererConfig: mo.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: N.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(r) {
            return r = xp(r),
            r === null ? null : r.stateNode
        },
        findFiberByHostInstance: mo.findFiberByHostInstance || EC,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var fl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!fl.isDisabled && fl.supportsFiber)
            try {
                ua = fl.inject(PC),
                wn = fl
            } catch {}
    }
    return Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = TC,
    Ot.createPortal = function(r, s) {
        var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!dd(s))
            throw Error(n(200));
        return CC(r, s, null, a)
    }
    ,
    Ot.createRoot = function(r, s) {
        if (!dd(r))
            throw Error(n(299));
        var a = !1
          , c = ""
          , h = Kg;
        return s != null && (s.unstable_strictMode === !0 && (a = !0),
        s.identifierPrefix !== void 0 && (c = s.identifierPrefix),
        s.onRecoverableError !== void 0 && (h = s.onRecoverableError)),
        s = ld(r, 1, !1, null, null, a, !1, c, h),
        r[Mn] = s.current,
        Xi(r.nodeType === 8 ? r.parentNode : r),
        new cd(s)
    }
    ,
    Ot.findDOMNode = function(r) {
        if (r == null)
            return null;
        if (r.nodeType === 1)
            return r;
        var s = r._reactInternals;
        if (s === void 0)
            throw typeof r.render == "function" ? Error(n(188)) : (r = Object.keys(r).join(","),
            Error(n(268, r)));
        return r = xp(s),
        r = r === null ? null : r.stateNode,
        r
    }
    ,
    Ot.flushSync = function(r) {
        return Xr(r)
    }
    ,
    Ot.hydrate = function(r, s, a) {
        if (!cl(s))
            throw Error(n(200));
        return dl(null, r, s, !0, a)
    }
    ,
    Ot.hydrateRoot = function(r, s, a) {
        if (!dd(r))
            throw Error(n(405));
        var c = a != null && a.hydratedSources || null
          , h = !1
          , g = ""
          , v = Kg;
        if (a != null && (a.unstable_strictMode === !0 && (h = !0),
        a.identifierPrefix !== void 0 && (g = a.identifierPrefix),
        a.onRecoverableError !== void 0 && (v = a.onRecoverableError)),
        s = Wg(s, null, r, 1, a ?? null, h, !1, g, v),
        r[Mn] = s.current,
        Xi(r),
        c)
            for (r = 0; r < c.length; r++)
                a = c[r],
                h = a._getVersion,
                h = h(a._source),
                s.mutableSourceEagerHydrationData == null ? s.mutableSourceEagerHydrationData = [a, h] : s.mutableSourceEagerHydrationData.push(a, h);
        return new ul(s)
    }
    ,
    Ot.render = function(r, s, a) {
        if (!cl(s))
            throw Error(n(200));
        return dl(null, r, s, !1, a)
    }
    ,
    Ot.unmountComponentAtNode = function(r) {
        if (!cl(r))
            throw Error(n(40));
        return r._reactRootContainer ? (Xr(function() {
            dl(null, null, r, !1, function() {
                r._reactRootContainer = null,
                r[Mn] = null
            })
        }),
        !0) : !1
    }
    ,
    Ot.unstable_batchedUpdates = nd,
    Ot.unstable_renderSubtreeIntoContainer = function(r, s, a, c) {
        if (!cl(a))
            throw Error(n(200));
        if (r == null || r._reactInternals === void 0)
            throw Error(n(38));
        return dl(r, s, a, !1, c)
    }
    ,
    Ot.version = "18.3.1-next-f1338f8080-20240426",
    Ot
}
var ry;
function H0() {
    if (ry)
        return md.exports;
    ry = 1;
    function t() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
            } catch (e) {
                console.error(e)
            }
    }
    return t(),
    md.exports = MC(),
    md.exports
}
var sy;
function DC() {
    if (sy)
        return pl;
    sy = 1;
    var t = H0();
    return pl.createRoot = t.createRoot,
    pl.hydrateRoot = t.hydrateRoot,
    pl
}
var IC = DC();
const FC = $0(IC)
  , VC = 20
  , UC = 1e6
  , Kn = {
    ADD_TOAST: "ADD_TOAST",
    UPDATE_TOAST: "UPDATE_TOAST",
    DISMISS_TOAST: "DISMISS_TOAST",
    REMOVE_TOAST: "REMOVE_TOAST"
};
let vd = 0;
function BC() {
    return vd = (vd + 1) % Number.MAX_VALUE,
    vd.toString()
}
const wd = new Map
  , iy = t => {
    if (wd.has(t))
        return;
    const e = setTimeout( () => {
        wd.delete(t),
        Ro({
            type: Kn.REMOVE_TOAST,
            toastId: t
        })
    }
    , UC);
    wd.set(t, e)
}
  , zC = (t, e) => {
    switch (e.type) {
    case Kn.ADD_TOAST:
        return {
            ...t,
            toasts: [e.toast, ...t.toasts].slice(0, VC)
        };
    case Kn.UPDATE_TOAST:
        return {
            ...t,
            toasts: t.toasts.map(n => n.id === e.toast.id ? {
                ...n,
                ...e.toast
            } : n)
        };
    case Kn.DISMISS_TOAST:
        {
            const {toastId: n} = e;
            return n ? iy(n) : t.toasts.forEach(i => {
                iy(i.id)
            }
            ),
            {
                ...t,
                toasts: t.toasts.map(i => i.id === n || n === void 0 ? {
                    ...i,
                    open: !1
                } : i)
            }
        }
    case Kn.REMOVE_TOAST:
        return e.toastId === void 0 ? {
            ...t,
            toasts: []
        } : {
            ...t,
            toasts: t.toasts.filter(n => n.id !== e.toastId)
        }
    }
}
  , Tl = [];
let Pl = {
    toasts: []
};
function Ro(t) {
    Pl = zC(Pl, t),
    Tl.forEach(e => {
        e(Pl)
    }
    )
}
function $C({...t}) {
    const e = BC()
      , n = o => Ro({
        type: Kn.UPDATE_TOAST,
        toast: {
            ...o,
            id: e
        }
    })
      , i = () => Ro({
        type: Kn.DISMISS_TOAST,
        toastId: e
    });
    return Ro({
        type: Kn.ADD_TOAST,
        toast: {
            ...t,
            id: e,
            open: !0,
            onOpenChange: o => {
                o || i()
            }
        }
    }),
    {
        id: e,
        dismiss: i,
        update: n
    }
}
function HC() {
    const [t,e] = E.useState(Pl);
    return E.useEffect( () => (Tl.push(e),
    () => {
        const n = Tl.indexOf(e);
        n > -1 && Tl.splice(n, 1)
    }
    ), [t]),
    {
        ...t,
        toast: $C,
        dismiss: n => Ro({
            type: Kn.DISMISS_TOAST,
            toastId: n
        })
    }
}
function W0(t) {
    var e, n, i = "";
    if (typeof t == "string" || typeof t == "number")
        i += t;
    else if (typeof t == "object")
        if (Array.isArray(t)) {
            var o = t.length;
            for (e = 0; e < o; e++)
                t[e] && (n = W0(t[e])) && (i && (i += " "),
                i += n)
        } else
            for (n in t)
                t[n] && (i && (i += " "),
                i += n);
    return i
}
function q0() {
    for (var t, e, n = 0, i = "", o = arguments.length; n < o; n++)
        (t = arguments[n]) && (e = W0(t)) && (i && (i += " "),
        i += e);
    return i
}
const oy = t => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t
  , ay = q0
  , WC = (t, e) => n => {
    var i;
    if ((e == null ? void 0 : e.variants) == null)
        return ay(t, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {variants: o, defaultVariants: l} = e
      , u = Object.keys(o).map(p => {
        const m = n == null ? void 0 : n[p]
          , y = l == null ? void 0 : l[p];
        if (m === null)
            return null;
        const w = oy(m) || oy(y);
        return o[p][w]
    }
    )
      , d = n && Object.entries(n).reduce( (p, m) => {
        let[y,w] = m;
        return w === void 0 || (p[y] = w),
        p
    }
    , {})
      , f = e == null || (i = e.compoundVariants) === null || i === void 0 ? void 0 : i.reduce( (p, m) => {
        let {class: y, className: w, ...C} = m;
        return Object.entries(C).every(b => {
            let[k,S] = b;
            return Array.isArray(S) ? S.includes({
                ...l,
                ...d
            }[k]) : {
                ...l,
                ...d
            }[k] === S
        }
        ) ? [...p, y, w] : p
    }
    , []);
    return ay(t, u, f, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
}
;
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qC = t => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , K0 = (...t) => t.filter( (e, n, i) => !!e && e.trim() !== "" && i.indexOf(e) === n).join(" ").trim();
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var KC = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const QC = E.forwardRef( ({color: t="currentColor", size: e=24, strokeWidth: n=2, absoluteStrokeWidth: i, className: o="", children: l, iconNode: u, ...d}, f) => E.createElement("svg", {
    ref: f,
    ...KC,
    width: e,
    height: e,
    stroke: t,
    strokeWidth: i ? Number(n) * 24 / Number(e) : n,
    className: K0("lucide", o),
    ...d
}, [...u.map( ([p,m]) => E.createElement(p, m)), ...Array.isArray(l) ? l : [l]]));
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qe = (t, e) => {
    const n = E.forwardRef( ({className: i, ...o}, l) => E.createElement(QC, {
        ref: l,
        iconNode: e,
        className: K0(`lucide-${qC(t)}`, i),
        ...o
    }));
    return n.displayName = `${t}`,
    n
}
;
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const GC = [["rect", {
    width: "20",
    height: "5",
    x: "2",
    y: "3",
    rx: "1",
    key: "1wp1u1"
}], ["path", {
    d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",
    key: "1s80jp"
}], ["path", {
    d: "M10 12h4",
    key: "a56b0p"
}]]
  , Hd = Qe("Archive", GC);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const YC = [["path", {
    d: "m12 19-7-7 7-7",
    key: "1l729n"
}], ["path", {
    d: "M19 12H5",
    key: "x3x0zl"
}]]
  , XC = Qe("ArrowLeft", YC);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const JC = [["path", {
    d: "M7 7h10v10",
    key: "1tivn9"
}], ["path", {
    d: "M7 17 17 7",
    key: "1vkiza"
}]]
  , Q0 = Qe("ArrowUpRight", JC);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ZC = [["path", {
    d: "M12 7v14",
    key: "1akyts"
}], ["path", {
    d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
    key: "ruj8y"
}]]
  , Zl = Qe("BookOpen", ZC);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eE = [["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
}]]
  , tE = Qe("ChevronDown", eE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nE = [["path", {
    d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",
    key: "sobvz5"
}], ["path", {
    d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
    key: "11i496"
}], ["path", {
    d: "M12 2v2",
    key: "tus03m"
}], ["path", {
    d: "M12 22v-2",
    key: "1osdcq"
}], ["path", {
    d: "m17 20.66-1-1.73",
    key: "eq3orb"
}], ["path", {
    d: "M11 10.27 7 3.34",
    key: "16pf9h"
}], ["path", {
    d: "m20.66 17-1.73-1",
    key: "sg0v6f"
}], ["path", {
    d: "m3.34 7 1.73 1",
    key: "1ulond"
}], ["path", {
    d: "M14 12h8",
    key: "4f43i9"
}], ["path", {
    d: "M2 12h2",
    key: "1t8f8n"
}], ["path", {
    d: "m20.66 7-1.73 1",
    key: "1ow05n"
}], ["path", {
    d: "m3.34 17 1.73-1",
    key: "nuk764"
}], ["path", {
    d: "m17 3.34-1 1.73",
    key: "2wel8s"
}], ["path", {
    d: "m11 13.73-4 6.93",
    key: "794ttg"
}]]
  , rE = Qe("Cog", nE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sE = [["path", {
    d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
    key: "9ktpf1"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}]]
  , iE = Qe("Compass", sE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oE = [["rect", {
    width: "16",
    height: "16",
    x: "4",
    y: "4",
    rx: "2",
    key: "14l7u7"
}], ["rect", {
    width: "6",
    height: "6",
    x: "9",
    y: "9",
    rx: "1",
    key: "5aljv4"
}], ["path", {
    d: "M15 2v2",
    key: "13l42r"
}], ["path", {
    d: "M15 20v2",
    key: "15mkzm"
}], ["path", {
    d: "M2 15h2",
    key: "1gxd5l"
}], ["path", {
    d: "M2 9h2",
    key: "1bbxkp"
}], ["path", {
    d: "M20 15h2",
    key: "19e6y8"
}], ["path", {
    d: "M20 9h2",
    key: "19tzq7"
}], ["path", {
    d: "M9 2v2",
    key: "165o2o"
}], ["path", {
    d: "M9 20v2",
    key: "i2bqo8"
}]]
  , aE = Qe("Cpu", oE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lE = [["path", {
    d: "M6 3h12l4 6-10 13L2 9Z",
    key: "1pcd5k"
}], ["path", {
    d: "M11 3 8 9l4 13 4-13-3-6",
    key: "1fcu3u"
}], ["path", {
    d: "M2 9h20",
    key: "16fsjt"
}]]
  , uE = Qe("Gem", lE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cE = [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
    key: "13o1zl"
}], ["path", {
    d: "M2 12h20",
    key: "9i4pu4"
}]]
  , dE = Qe("Globe", cE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fE = [["path", {
    d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
    key: "1357e3"
}], ["path", {
    d: "M3 3v5h5",
    key: "1xhq8a"
}], ["path", {
    d: "M12 7v5l4 2",
    key: "1fdv2h"
}]]
  , hE = Qe("History", fE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pE = [["path", {
    d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
    key: "5wwlr5"
}], ["path", {
    d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
    key: "1d0kgt"
}]]
  , mE = Qe("House", pE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gE = [["path", {
    d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
    key: "1gvzjb"
}], ["path", {
    d: "M9 18h6",
    key: "x1upvd"
}], ["path", {
    d: "M10 22h4",
    key: "ceow96"
}]]
  , yE = Qe("Lightbulb", gE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vE = [["path", {
    d: "M6 18h8",
    key: "1borvv"
}], ["path", {
    d: "M3 22h18",
    key: "8prr45"
}], ["path", {
    d: "M14 22a7 7 0 1 0 0-14h-1",
    key: "1jwaiy"
}], ["path", {
    d: "M9 14h2",
    key: "197e7h"
}], ["path", {
    d: "M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",
    key: "1bmzmy"
}], ["path", {
    d: "M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",
    key: "1drr47"
}]]
  , wE = Qe("Microscope", vE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xE = [["path", {
    d: "M9 18V5l12-2v13",
    key: "1jmyc2"
}], ["circle", {
    cx: "6",
    cy: "18",
    r: "3",
    key: "fqmcym"
}], ["circle", {
    cx: "18",
    cy: "16",
    r: "3",
    key: "1hluhg"
}]]
  , SE = Qe("Music", xE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bE = [["circle", {
    cx: "13.5",
    cy: "6.5",
    r: ".5",
    fill: "currentColor",
    key: "1okk4w"
}], ["circle", {
    cx: "17.5",
    cy: "10.5",
    r: ".5",
    fill: "currentColor",
    key: "f64h9f"
}], ["circle", {
    cx: "8.5",
    cy: "7.5",
    r: ".5",
    fill: "currentColor",
    key: "fotxhn"
}], ["circle", {
    cx: "6.5",
    cy: "12.5",
    r: ".5",
    fill: "currentColor",
    key: "qy21gx"
}], ["path", {
    d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
    key: "12rzf8"
}]]
  , CE = Qe("Palette", bE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const EE = [["circle", {
    cx: "11",
    cy: "11",
    r: "8",
    key: "4ej97u"
}], ["path", {
    d: "m21 21-4.3-4.3",
    key: "1qie3q"
}]]
  , ly = Qe("Search", EE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kE = [["line", {
    x1: "21",
    x2: "14",
    y1: "4",
    y2: "4",
    key: "obuewd"
}], ["line", {
    x1: "10",
    x2: "3",
    y1: "4",
    y2: "4",
    key: "1q6298"
}], ["line", {
    x1: "21",
    x2: "12",
    y1: "12",
    y2: "12",
    key: "1iu8h1"
}], ["line", {
    x1: "8",
    x2: "3",
    y1: "12",
    y2: "12",
    key: "ntss68"
}], ["line", {
    x1: "21",
    x2: "16",
    y1: "20",
    y2: "20",
    key: "14d8ph"
}], ["line", {
    x1: "12",
    x2: "3",
    y1: "20",
    y2: "20",
    key: "m0wm8r"
}], ["line", {
    x1: "14",
    x2: "14",
    y1: "2",
    y2: "6",
    key: "14e1ph"
}], ["line", {
    x1: "8",
    x2: "8",
    y1: "10",
    y2: "14",
    key: "1i6ji0"
}], ["line", {
    x1: "16",
    x2: "16",
    y1: "18",
    y2: "22",
    key: "1lctlv"
}]]
  , TE = Qe("SlidersHorizontal", kE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const PE = [["path", {
    d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
    key: "4pj2yx"
}], ["path", {
    d: "M20 3v4",
    key: "1olli1"
}], ["path", {
    d: "M22 5h-4",
    key: "1gvqau"
}], ["path", {
    d: "M4 17v2",
    key: "vumght"
}], ["path", {
    d: "M5 18H3",
    key: "zchphs"
}]]
  , Wd = Qe("Sparkles", PE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _E = [["path", {
    d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
    key: "cbrjhi"
}]]
  , RE = Qe("Wrench", _E);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const AE = [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]
  , G0 = Qe("X", AE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const NE = [["path", {
    d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
    key: "1xq2db"
}]]
  , Y0 = Qe("Zap", NE)
  , OE = (t, e) => {
    const n = new Array(t.length + e.length);
    for (let i = 0; i < t.length; i++)
        n[i] = t[i];
    for (let i = 0; i < e.length; i++)
        n[t.length + i] = e[i];
    return n
}
  , jE = (t, e) => ({
    classGroupId: t,
    validator: e
})
  , X0 = (t=new Map, e=null, n) => ({
    nextPart: t,
    validators: e,
    classGroupId: n
})
  , Fl = "-"
  , uy = []
  , LE = "arbitrary.."
  , ME = t => {
    const e = IE(t)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: i} = t;
    return {
        getClassGroupId: u => {
            if (u.startsWith("[") && u.endsWith("]"))
                return DE(u);
            const d = u.split(Fl)
              , f = d[0] === "" && d.length > 1 ? 1 : 0;
            return J0(d, f, e)
        }
        ,
        getConflictingClassGroupIds: (u, d) => {
            if (d) {
                const f = i[u]
                  , p = n[u];
                return f ? p ? OE(p, f) : f : p || uy
            }
            return n[u] || uy
        }
    }
}
  , J0 = (t, e, n) => {
    if (t.length - e === 0)
        return n.classGroupId;
    const o = t[e]
      , l = n.nextPart.get(o);
    if (l) {
        const p = J0(t, e + 1, l);
        if (p)
            return p
    }
    const u = n.validators;
    if (u === null)
        return;
    const d = e === 0 ? t.join(Fl) : t.slice(e).join(Fl)
      , f = u.length;
    for (let p = 0; p < f; p++) {
        const m = u[p];
        if (m.validator(d))
            return m.classGroupId
    }
}
  , DE = t => t.slice(1, -1).indexOf(":") === -1 ? void 0 : ( () => {
    const e = t.slice(1, -1)
      , n = e.indexOf(":")
      , i = e.slice(0, n);
    return i ? LE + i : void 0
}
)()
  , IE = t => {
    const {theme: e, classGroups: n} = t;
    return FE(n, e)
}
  , FE = (t, e) => {
    const n = X0();
    for (const i in t) {
        const o = t[i];
        Bf(o, n, i, e)
    }
    return n
}
  , Bf = (t, e, n, i) => {
    const o = t.length;
    for (let l = 0; l < o; l++) {
        const u = t[l];
        VE(u, e, n, i)
    }
}
  , VE = (t, e, n, i) => {
    if (typeof t == "string") {
        UE(t, e, n);
        return
    }
    if (typeof t == "function") {
        BE(t, e, n, i);
        return
    }
    zE(t, e, n, i)
}
  , UE = (t, e, n) => {
    const i = t === "" ? e : Z0(e, t);
    i.classGroupId = n
}
  , BE = (t, e, n, i) => {
    if ($E(t)) {
        Bf(t(i), e, n, i);
        return
    }
    e.validators === null && (e.validators = []),
    e.validators.push(jE(n, t))
}
  , zE = (t, e, n, i) => {
    const o = Object.entries(t)
      , l = o.length;
    for (let u = 0; u < l; u++) {
        const [d,f] = o[u];
        Bf(f, Z0(e, d), n, i)
    }
}
  , Z0 = (t, e) => {
    let n = t;
    const i = e.split(Fl)
      , o = i.length;
    for (let l = 0; l < o; l++) {
        const u = i[l];
        let d = n.nextPart.get(u);
        d || (d = X0(),
        n.nextPart.set(u, d)),
        n = d
    }
    return n
}
  , $E = t => "isThemeGetter"in t && t.isThemeGetter === !0
  , HE = t => {
    if (t < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let e = 0
      , n = Object.create(null)
      , i = Object.create(null);
    const o = (l, u) => {
        n[l] = u,
        e++,
        e > t && (e = 0,
        i = n,
        n = Object.create(null))
    }
    ;
    return {
        get(l) {
            let u = n[l];
            if (u !== void 0)
                return u;
            if ((u = i[l]) !== void 0)
                return o(l, u),
                u
        },
        set(l, u) {
            l in n ? n[l] = u : o(l, u)
        }
    }
}
  , qd = "!"
  , cy = ":"
  , WE = []
  , dy = (t, e, n, i, o) => ({
    modifiers: t,
    hasImportantModifier: e,
    baseClassName: n,
    maybePostfixModifierPosition: i,
    isExternal: o
})
  , qE = t => {
    const {prefix: e, experimentalParseClassName: n} = t;
    let i = o => {
        const l = [];
        let u = 0, d = 0, f = 0, p;
        const m = o.length;
        for (let k = 0; k < m; k++) {
            const S = o[k];
            if (u === 0 && d === 0) {
                if (S === cy) {
                    l.push(o.slice(f, k)),
                    f = k + 1;
                    continue
                }
                if (S === "/") {
                    p = k;
                    continue
                }
            }
            S === "[" ? u++ : S === "]" ? u-- : S === "(" ? d++ : S === ")" && d--
        }
        const y = l.length === 0 ? o : o.slice(f);
        let w = y
          , C = !1;
        y.endsWith(qd) ? (w = y.slice(0, -1),
        C = !0) : y.startsWith(qd) && (w = y.slice(1),
        C = !0);
        const b = p && p > f ? p - f : void 0;
        return dy(l, C, w, b)
    }
    ;
    if (e) {
        const o = e + cy
          , l = i;
        i = u => u.startsWith(o) ? l(u.slice(o.length)) : dy(WE, !1, u, void 0, !0)
    }
    if (n) {
        const o = i;
        i = l => n({
            className: l,
            parseClassName: o
        })
    }
    return i
}
  , KE = t => {
    const e = new Map;
    return t.orderSensitiveModifiers.forEach( (n, i) => {
        e.set(n, 1e6 + i)
    }
    ),
    n => {
        const i = [];
        let o = [];
        for (let l = 0; l < n.length; l++) {
            const u = n[l]
              , d = u[0] === "["
              , f = e.has(u);
            d || f ? (o.length > 0 && (o.sort(),
            i.push(...o),
            o = []),
            i.push(u)) : o.push(u)
        }
        return o.length > 0 && (o.sort(),
        i.push(...o)),
        i
    }
}
  , QE = t => ({
    cache: HE(t.cacheSize),
    parseClassName: qE(t),
    sortModifiers: KE(t),
    ...ME(t)
})
  , GE = /\s+/
  , YE = (t, e) => {
    const {parseClassName: n, getClassGroupId: i, getConflictingClassGroupIds: o, sortModifiers: l} = e
      , u = []
      , d = t.trim().split(GE);
    let f = "";
    for (let p = d.length - 1; p >= 0; p -= 1) {
        const m = d[p]
          , {isExternal: y, modifiers: w, hasImportantModifier: C, baseClassName: b, maybePostfixModifierPosition: k} = n(m);
        if (y) {
            f = m + (f.length > 0 ? " " + f : f);
            continue
        }
        let S = !!k
          , P = i(S ? b.substring(0, k) : b);
        if (!P) {
            if (!S) {
                f = m + (f.length > 0 ? " " + f : f);
                continue
            }
            if (P = i(b),
            !P) {
                f = m + (f.length > 0 ? " " + f : f);
                continue
            }
            S = !1
        }
        const L = w.length === 0 ? "" : w.length === 1 ? w[0] : l(w).join(":")
          , j = C ? L + qd : L
          , N = j + P;
        if (u.indexOf(N) > -1)
            continue;
        u.push(N);
        const V = o(P, S);
        for (let $ = 0; $ < V.length; ++$) {
            const Y = V[$];
            u.push(j + Y)
        }
        f = m + (f.length > 0 ? " " + f : f)
    }
    return f
}
  , XE = (...t) => {
    let e = 0, n, i, o = "";
    for (; e < t.length; )
        (n = t[e++]) && (i = ew(n)) && (o && (o += " "),
        o += i);
    return o
}
  , ew = t => {
    if (typeof t == "string")
        return t;
    let e, n = "";
    for (let i = 0; i < t.length; i++)
        t[i] && (e = ew(t[i])) && (n && (n += " "),
        n += e);
    return n
}
  , JE = (t, ...e) => {
    let n, i, o, l;
    const u = f => {
        const p = e.reduce( (m, y) => y(m), t());
        return n = QE(p),
        i = n.cache.get,
        o = n.cache.set,
        l = d,
        d(f)
    }
      , d = f => {
        const p = i(f);
        if (p)
            return p;
        const m = YE(f, n);
        return o(f, m),
        m
    }
    ;
    return l = u,
    (...f) => l(XE(...f))
}
  , ZE = []
  , it = t => {
    const e = n => n[t] || ZE;
    return e.isThemeGetter = !0,
    e
}
  , tw = /^\[(?:(\w[\w-]*):)?(.+)\]$/i
  , nw = /^\((?:(\w[\w-]*):)?(.+)\)$/i
  , ek = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/
  , tk = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , nk = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , rk = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/
  , sk = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , ik = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , xr = t => ek.test(t)
  , Se = t => !!t && !Number.isNaN(Number(t))
  , Sr = t => !!t && Number.isInteger(Number(t))
  , xd = t => t.endsWith("%") && Se(t.slice(0, -1))
  , $n = t => tk.test(t)
  , rw = () => !0
  , ok = t => nk.test(t) && !rk.test(t)
  , zf = () => !1
  , ak = t => sk.test(t)
  , lk = t => ik.test(t)
  , uk = t => !ne(t) && !re(t)
  , ck = t => Fr(t, ow, zf)
  , ne = t => tw.test(t)
  , ts = t => Fr(t, aw, ok)
  , fy = t => Fr(t, vk, Se)
  , dk = t => Fr(t, uw, rw)
  , fk = t => Fr(t, lw, zf)
  , hy = t => Fr(t, sw, zf)
  , hk = t => Fr(t, iw, lk)
  , ml = t => Fr(t, cw, ak)
  , re = t => nw.test(t)
  , yo = t => ks(t, aw)
  , pk = t => ks(t, lw)
  , py = t => ks(t, sw)
  , mk = t => ks(t, ow)
  , gk = t => ks(t, iw)
  , gl = t => ks(t, cw, !0)
  , yk = t => ks(t, uw, !0)
  , Fr = (t, e, n) => {
    const i = tw.exec(t);
    return i ? i[1] ? e(i[1]) : n(i[2]) : !1
}
  , ks = (t, e, n=!1) => {
    const i = nw.exec(t);
    return i ? i[1] ? e(i[1]) : n : !1
}
  , sw = t => t === "position" || t === "percentage"
  , iw = t => t === "image" || t === "url"
  , ow = t => t === "length" || t === "size" || t === "bg-size"
  , aw = t => t === "length"
  , vk = t => t === "number"
  , lw = t => t === "family-name"
  , uw = t => t === "number" || t === "weight"
  , cw = t => t === "shadow"
  , wk = () => {
    const t = it("color")
      , e = it("font")
      , n = it("text")
      , i = it("font-weight")
      , o = it("tracking")
      , l = it("leading")
      , u = it("breakpoint")
      , d = it("container")
      , f = it("spacing")
      , p = it("radius")
      , m = it("shadow")
      , y = it("inset-shadow")
      , w = it("text-shadow")
      , C = it("drop-shadow")
      , b = it("blur")
      , k = it("perspective")
      , S = it("aspect")
      , P = it("ease")
      , L = it("animate")
      , j = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , N = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"]
      , V = () => [...N(), re, ne]
      , $ = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , Y = () => ["auto", "contain", "none"]
      , I = () => [re, ne, f]
      , Q = () => [xr, "full", "auto", ...I()]
      , X = () => [Sr, "none", "subgrid", re, ne]
      , xe = () => ["auto", {
        span: ["full", Sr, re, ne]
    }, Sr, re, ne]
      , Oe = () => [Sr, "auto", re, ne]
      , Le = () => ["auto", "min", "max", "fr", re, ne]
      , Re = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"]
      , De = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"]
      , we = () => ["auto", ...I()]
      , fe = () => [xr, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...I()]
      , K = () => [xr, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...I()]
      , ie = () => [xr, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...I()]
      , B = () => [t, re, ne]
      , O = () => [...N(), py, hy, {
        position: [re, ne]
    }]
      , z = () => ["no-repeat", {
        repeat: ["", "x", "y", "space", "round"]
    }]
      , ge = () => ["auto", "cover", "contain", mk, ck, {
        size: [re, ne]
    }]
      , ye = () => [xd, yo, ts]
      , ue = () => ["", "none", "full", p, re, ne]
      , he = () => ["", Se, yo, ts]
      , Ae = () => ["solid", "dashed", "dotted", "double"]
      , Pe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , ve = () => [Se, xd, py, hy]
      , mt = () => ["", "none", b, re, ne]
      , Ln = () => ["none", Se, re, ne]
      , Br = () => ["none", Se, re, ne]
      , Zn = () => [Se, re, ne]
      , er = () => [xr, "full", ...I()];
    return {
        cacheSize: 500,
        theme: {
            animate: ["spin", "ping", "pulse", "bounce"],
            aspect: ["video"],
            blur: [$n],
            breakpoint: [$n],
            color: [rw],
            container: [$n],
            "drop-shadow": [$n],
            ease: ["in", "out", "in-out"],
            font: [uk],
            "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
            "inset-shadow": [$n],
            leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
            perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
            radius: [$n],
            shadow: [$n],
            spacing: ["px", Se],
            text: [$n],
            "text-shadow": [$n],
            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", xr, ne, re, S]
            }],
            container: ["container"],
            columns: [{
                columns: [Se, ne, re, d]
            }],
            "break-after": [{
                "break-after": j()
            }],
            "break-before": [{
                "break-before": j()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            sr: ["sr-only", "not-sr-only"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: V()
            }],
            overflow: [{
                overflow: $()
            }],
            "overflow-x": [{
                "overflow-x": $()
            }],
            "overflow-y": [{
                "overflow-y": $()
            }],
            overscroll: [{
                overscroll: Y()
            }],
            "overscroll-x": [{
                "overscroll-x": Y()
            }],
            "overscroll-y": [{
                "overscroll-y": Y()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: Q()
            }],
            "inset-x": [{
                "inset-x": Q()
            }],
            "inset-y": [{
                "inset-y": Q()
            }],
            start: [{
                "inset-s": Q(),
                start: Q()
            }],
            end: [{
                "inset-e": Q(),
                end: Q()
            }],
            "inset-bs": [{
                "inset-bs": Q()
            }],
            "inset-be": [{
                "inset-be": Q()
            }],
            top: [{
                top: Q()
            }],
            right: [{
                right: Q()
            }],
            bottom: [{
                bottom: Q()
            }],
            left: [{
                left: Q()
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: [Sr, "auto", re, ne]
            }],
            basis: [{
                basis: [xr, "full", "auto", d, ...I()]
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["nowrap", "wrap", "wrap-reverse"]
            }],
            flex: [{
                flex: [Se, xr, "auto", "initial", "none", ne]
            }],
            grow: [{
                grow: ["", Se, re, ne]
            }],
            shrink: [{
                shrink: ["", Se, re, ne]
            }],
            order: [{
                order: [Sr, "first", "last", "none", re, ne]
            }],
            "grid-cols": [{
                "grid-cols": X()
            }],
            "col-start-end": [{
                col: xe()
            }],
            "col-start": [{
                "col-start": Oe()
            }],
            "col-end": [{
                "col-end": Oe()
            }],
            "grid-rows": [{
                "grid-rows": X()
            }],
            "row-start-end": [{
                row: xe()
            }],
            "row-start": [{
                "row-start": Oe()
            }],
            "row-end": [{
                "row-end": Oe()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": Le()
            }],
            "auto-rows": [{
                "auto-rows": Le()
            }],
            gap: [{
                gap: I()
            }],
            "gap-x": [{
                "gap-x": I()
            }],
            "gap-y": [{
                "gap-y": I()
            }],
            "justify-content": [{
                justify: [...Re(), "normal"]
            }],
            "justify-items": [{
                "justify-items": [...De(), "normal"]
            }],
            "justify-self": [{
                "justify-self": ["auto", ...De()]
            }],
            "align-content": [{
                content: ["normal", ...Re()]
            }],
            "align-items": [{
                items: [...De(), {
                    baseline: ["", "last"]
                }]
            }],
            "align-self": [{
                self: ["auto", ...De(), {
                    baseline: ["", "last"]
                }]
            }],
            "place-content": [{
                "place-content": Re()
            }],
            "place-items": [{
                "place-items": [...De(), "baseline"]
            }],
            "place-self": [{
                "place-self": ["auto", ...De()]
            }],
            p: [{
                p: I()
            }],
            px: [{
                px: I()
            }],
            py: [{
                py: I()
            }],
            ps: [{
                ps: I()
            }],
            pe: [{
                pe: I()
            }],
            pbs: [{
                pbs: I()
            }],
            pbe: [{
                pbe: I()
            }],
            pt: [{
                pt: I()
            }],
            pr: [{
                pr: I()
            }],
            pb: [{
                pb: I()
            }],
            pl: [{
                pl: I()
            }],
            m: [{
                m: we()
            }],
            mx: [{
                mx: we()
            }],
            my: [{
                my: we()
            }],
            ms: [{
                ms: we()
            }],
            me: [{
                me: we()
            }],
            mbs: [{
                mbs: we()
            }],
            mbe: [{
                mbe: we()
            }],
            mt: [{
                mt: we()
            }],
            mr: [{
                mr: we()
            }],
            mb: [{
                mb: we()
            }],
            ml: [{
                ml: we()
            }],
            "space-x": [{
                "space-x": I()
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": I()
            }],
            "space-y-reverse": ["space-y-reverse"],
            size: [{
                size: fe()
            }],
            "inline-size": [{
                inline: ["auto", ...K()]
            }],
            "min-inline-size": [{
                "min-inline": ["auto", ...K()]
            }],
            "max-inline-size": [{
                "max-inline": ["none", ...K()]
            }],
            "block-size": [{
                block: ["auto", ...ie()]
            }],
            "min-block-size": [{
                "min-block": ["auto", ...ie()]
            }],
            "max-block-size": [{
                "max-block": ["none", ...ie()]
            }],
            w: [{
                w: [d, "screen", ...fe()]
            }],
            "min-w": [{
                "min-w": [d, "screen", "none", ...fe()]
            }],
            "max-w": [{
                "max-w": [d, "screen", "none", "prose", {
                    screen: [u]
                }, ...fe()]
            }],
            h: [{
                h: ["screen", "lh", ...fe()]
            }],
            "min-h": [{
                "min-h": ["screen", "lh", "none", ...fe()]
            }],
            "max-h": [{
                "max-h": ["screen", "lh", ...fe()]
            }],
            "font-size": [{
                text: ["base", n, yo, ts]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: [i, yk, dk]
            }],
            "font-stretch": [{
                "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", xd, ne]
            }],
            "font-family": [{
                font: [pk, fk, e]
            }],
            "font-features": [{
                "font-features": [ne]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: [o, re, ne]
            }],
            "line-clamp": [{
                "line-clamp": [Se, "none", re, fy]
            }],
            leading: [{
                leading: [l, ...I()]
            }],
            "list-image": [{
                "list-image": ["none", re, ne]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "list-style-type": [{
                list: ["disc", "decimal", "none", re, ne]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "placeholder-color": [{
                placeholder: B()
            }],
            "text-color": [{
                text: B()
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...Ae(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: [Se, "from-font", "auto", re, ts]
            }],
            "text-decoration-color": [{
                decoration: B()
            }],
            "underline-offset": [{
                "underline-offset": [Se, "auto", re, ne]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: I()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", re, ne]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            wrap: [{
                wrap: ["break-word", "anywhere", "normal"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", re, ne]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: O()
            }],
            "bg-repeat": [{
                bg: z()
            }],
            "bg-size": [{
                bg: ge()
            }],
            "bg-image": [{
                bg: ["none", {
                    linear: [{
                        to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                    }, Sr, re, ne],
                    radial: ["", re, ne],
                    conic: [Sr, re, ne]
                }, gk, hk]
            }],
            "bg-color": [{
                bg: B()
            }],
            "gradient-from-pos": [{
                from: ye()
            }],
            "gradient-via-pos": [{
                via: ye()
            }],
            "gradient-to-pos": [{
                to: ye()
            }],
            "gradient-from": [{
                from: B()
            }],
            "gradient-via": [{
                via: B()
            }],
            "gradient-to": [{
                to: B()
            }],
            rounded: [{
                rounded: ue()
            }],
            "rounded-s": [{
                "rounded-s": ue()
            }],
            "rounded-e": [{
                "rounded-e": ue()
            }],
            "rounded-t": [{
                "rounded-t": ue()
            }],
            "rounded-r": [{
                "rounded-r": ue()
            }],
            "rounded-b": [{
                "rounded-b": ue()
            }],
            "rounded-l": [{
                "rounded-l": ue()
            }],
            "rounded-ss": [{
                "rounded-ss": ue()
            }],
            "rounded-se": [{
                "rounded-se": ue()
            }],
            "rounded-ee": [{
                "rounded-ee": ue()
            }],
            "rounded-es": [{
                "rounded-es": ue()
            }],
            "rounded-tl": [{
                "rounded-tl": ue()
            }],
            "rounded-tr": [{
                "rounded-tr": ue()
            }],
            "rounded-br": [{
                "rounded-br": ue()
            }],
            "rounded-bl": [{
                "rounded-bl": ue()
            }],
            "border-w": [{
                border: he()
            }],
            "border-w-x": [{
                "border-x": he()
            }],
            "border-w-y": [{
                "border-y": he()
            }],
            "border-w-s": [{
                "border-s": he()
            }],
            "border-w-e": [{
                "border-e": he()
            }],
            "border-w-bs": [{
                "border-bs": he()
            }],
            "border-w-be": [{
                "border-be": he()
            }],
            "border-w-t": [{
                "border-t": he()
            }],
            "border-w-r": [{
                "border-r": he()
            }],
            "border-w-b": [{
                "border-b": he()
            }],
            "border-w-l": [{
                "border-l": he()
            }],
            "divide-x": [{
                "divide-x": he()
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": he()
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "border-style": [{
                border: [...Ae(), "hidden", "none"]
            }],
            "divide-style": [{
                divide: [...Ae(), "hidden", "none"]
            }],
            "border-color": [{
                border: B()
            }],
            "border-color-x": [{
                "border-x": B()
            }],
            "border-color-y": [{
                "border-y": B()
            }],
            "border-color-s": [{
                "border-s": B()
            }],
            "border-color-e": [{
                "border-e": B()
            }],
            "border-color-bs": [{
                "border-bs": B()
            }],
            "border-color-be": [{
                "border-be": B()
            }],
            "border-color-t": [{
                "border-t": B()
            }],
            "border-color-r": [{
                "border-r": B()
            }],
            "border-color-b": [{
                "border-b": B()
            }],
            "border-color-l": [{
                "border-l": B()
            }],
            "divide-color": [{
                divide: B()
            }],
            "outline-style": [{
                outline: [...Ae(), "none", "hidden"]
            }],
            "outline-offset": [{
                "outline-offset": [Se, re, ne]
            }],
            "outline-w": [{
                outline: ["", Se, yo, ts]
            }],
            "outline-color": [{
                outline: B()
            }],
            shadow: [{
                shadow: ["", "none", m, gl, ml]
            }],
            "shadow-color": [{
                shadow: B()
            }],
            "inset-shadow": [{
                "inset-shadow": ["none", y, gl, ml]
            }],
            "inset-shadow-color": [{
                "inset-shadow": B()
            }],
            "ring-w": [{
                ring: he()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: B()
            }],
            "ring-offset-w": [{
                "ring-offset": [Se, ts]
            }],
            "ring-offset-color": [{
                "ring-offset": B()
            }],
            "inset-ring-w": [{
                "inset-ring": he()
            }],
            "inset-ring-color": [{
                "inset-ring": B()
            }],
            "text-shadow": [{
                "text-shadow": ["none", w, gl, ml]
            }],
            "text-shadow-color": [{
                "text-shadow": B()
            }],
            opacity: [{
                opacity: [Se, re, ne]
            }],
            "mix-blend": [{
                "mix-blend": [...Pe(), "plus-darker", "plus-lighter"]
            }],
            "bg-blend": [{
                "bg-blend": Pe()
            }],
            "mask-clip": [{
                "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
            }, "mask-no-clip"],
            "mask-composite": [{
                mask: ["add", "subtract", "intersect", "exclude"]
            }],
            "mask-image-linear-pos": [{
                "mask-linear": [Se]
            }],
            "mask-image-linear-from-pos": [{
                "mask-linear-from": ve()
            }],
            "mask-image-linear-to-pos": [{
                "mask-linear-to": ve()
            }],
            "mask-image-linear-from-color": [{
                "mask-linear-from": B()
            }],
            "mask-image-linear-to-color": [{
                "mask-linear-to": B()
            }],
            "mask-image-t-from-pos": [{
                "mask-t-from": ve()
            }],
            "mask-image-t-to-pos": [{
                "mask-t-to": ve()
            }],
            "mask-image-t-from-color": [{
                "mask-t-from": B()
            }],
            "mask-image-t-to-color": [{
                "mask-t-to": B()
            }],
            "mask-image-r-from-pos": [{
                "mask-r-from": ve()
            }],
            "mask-image-r-to-pos": [{
                "mask-r-to": ve()
            }],
            "mask-image-r-from-color": [{
                "mask-r-from": B()
            }],
            "mask-image-r-to-color": [{
                "mask-r-to": B()
            }],
            "mask-image-b-from-pos": [{
                "mask-b-from": ve()
            }],
            "mask-image-b-to-pos": [{
                "mask-b-to": ve()
            }],
            "mask-image-b-from-color": [{
                "mask-b-from": B()
            }],
            "mask-image-b-to-color": [{
                "mask-b-to": B()
            }],
            "mask-image-l-from-pos": [{
                "mask-l-from": ve()
            }],
            "mask-image-l-to-pos": [{
                "mask-l-to": ve()
            }],
            "mask-image-l-from-color": [{
                "mask-l-from": B()
            }],
            "mask-image-l-to-color": [{
                "mask-l-to": B()
            }],
            "mask-image-x-from-pos": [{
                "mask-x-from": ve()
            }],
            "mask-image-x-to-pos": [{
                "mask-x-to": ve()
            }],
            "mask-image-x-from-color": [{
                "mask-x-from": B()
            }],
            "mask-image-x-to-color": [{
                "mask-x-to": B()
            }],
            "mask-image-y-from-pos": [{
                "mask-y-from": ve()
            }],
            "mask-image-y-to-pos": [{
                "mask-y-to": ve()
            }],
            "mask-image-y-from-color": [{
                "mask-y-from": B()
            }],
            "mask-image-y-to-color": [{
                "mask-y-to": B()
            }],
            "mask-image-radial": [{
                "mask-radial": [re, ne]
            }],
            "mask-image-radial-from-pos": [{
                "mask-radial-from": ve()
            }],
            "mask-image-radial-to-pos": [{
                "mask-radial-to": ve()
            }],
            "mask-image-radial-from-color": [{
                "mask-radial-from": B()
            }],
            "mask-image-radial-to-color": [{
                "mask-radial-to": B()
            }],
            "mask-image-radial-shape": [{
                "mask-radial": ["circle", "ellipse"]
            }],
            "mask-image-radial-size": [{
                "mask-radial": [{
                    closest: ["side", "corner"],
                    farthest: ["side", "corner"]
                }]
            }],
            "mask-image-radial-pos": [{
                "mask-radial-at": N()
            }],
            "mask-image-conic-pos": [{
                "mask-conic": [Se]
            }],
            "mask-image-conic-from-pos": [{
                "mask-conic-from": ve()
            }],
            "mask-image-conic-to-pos": [{
                "mask-conic-to": ve()
            }],
            "mask-image-conic-from-color": [{
                "mask-conic-from": B()
            }],
            "mask-image-conic-to-color": [{
                "mask-conic-to": B()
            }],
            "mask-mode": [{
                mask: ["alpha", "luminance", "match"]
            }],
            "mask-origin": [{
                "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
            }],
            "mask-position": [{
                mask: O()
            }],
            "mask-repeat": [{
                mask: z()
            }],
            "mask-size": [{
                mask: ge()
            }],
            "mask-type": [{
                "mask-type": ["alpha", "luminance"]
            }],
            "mask-image": [{
                mask: ["none", re, ne]
            }],
            filter: [{
                filter: ["", "none", re, ne]
            }],
            blur: [{
                blur: mt()
            }],
            brightness: [{
                brightness: [Se, re, ne]
            }],
            contrast: [{
                contrast: [Se, re, ne]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", C, gl, ml]
            }],
            "drop-shadow-color": [{
                "drop-shadow": B()
            }],
            grayscale: [{
                grayscale: ["", Se, re, ne]
            }],
            "hue-rotate": [{
                "hue-rotate": [Se, re, ne]
            }],
            invert: [{
                invert: ["", Se, re, ne]
            }],
            saturate: [{
                saturate: [Se, re, ne]
            }],
            sepia: [{
                sepia: ["", Se, re, ne]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none", re, ne]
            }],
            "backdrop-blur": [{
                "backdrop-blur": mt()
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [Se, re, ne]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [Se, re, ne]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": ["", Se, re, ne]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [Se, re, ne]
            }],
            "backdrop-invert": [{
                "backdrop-invert": ["", Se, re, ne]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [Se, re, ne]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [Se, re, ne]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": ["", Se, re, ne]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": I()
            }],
            "border-spacing-x": [{
                "border-spacing-x": I()
            }],
            "border-spacing-y": [{
                "border-spacing-y": I()
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", re, ne]
            }],
            "transition-behavior": [{
                transition: ["normal", "discrete"]
            }],
            duration: [{
                duration: [Se, "initial", re, ne]
            }],
            ease: [{
                ease: ["linear", "initial", P, re, ne]
            }],
            delay: [{
                delay: [Se, re, ne]
            }],
            animate: [{
                animate: ["none", L, re, ne]
            }],
            backface: [{
                backface: ["hidden", "visible"]
            }],
            perspective: [{
                perspective: [k, re, ne]
            }],
            "perspective-origin": [{
                "perspective-origin": V()
            }],
            rotate: [{
                rotate: Ln()
            }],
            "rotate-x": [{
                "rotate-x": Ln()
            }],
            "rotate-y": [{
                "rotate-y": Ln()
            }],
            "rotate-z": [{
                "rotate-z": Ln()
            }],
            scale: [{
                scale: Br()
            }],
            "scale-x": [{
                "scale-x": Br()
            }],
            "scale-y": [{
                "scale-y": Br()
            }],
            "scale-z": [{
                "scale-z": Br()
            }],
            "scale-3d": ["scale-3d"],
            skew: [{
                skew: Zn()
            }],
            "skew-x": [{
                "skew-x": Zn()
            }],
            "skew-y": [{
                "skew-y": Zn()
            }],
            transform: [{
                transform: [re, ne, "", "none", "gpu", "cpu"]
            }],
            "transform-origin": [{
                origin: V()
            }],
            "transform-style": [{
                transform: ["3d", "flat"]
            }],
            translate: [{
                translate: er()
            }],
            "translate-x": [{
                "translate-x": er()
            }],
            "translate-y": [{
                "translate-y": er()
            }],
            "translate-z": [{
                "translate-z": er()
            }],
            "translate-none": ["translate-none"],
            accent: [{
                accent: B()
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            "caret-color": [{
                caret: B()
            }],
            "color-scheme": [{
                scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", re, ne]
            }],
            "field-sizing": [{
                "field-sizing": ["fixed", "content"]
            }],
            "pointer-events": [{
                "pointer-events": ["auto", "none"]
            }],
            resize: [{
                resize: ["none", "", "y", "x"]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": I()
            }],
            "scroll-mx": [{
                "scroll-mx": I()
            }],
            "scroll-my": [{
                "scroll-my": I()
            }],
            "scroll-ms": [{
                "scroll-ms": I()
            }],
            "scroll-me": [{
                "scroll-me": I()
            }],
            "scroll-mbs": [{
                "scroll-mbs": I()
            }],
            "scroll-mbe": [{
                "scroll-mbe": I()
            }],
            "scroll-mt": [{
                "scroll-mt": I()
            }],
            "scroll-mr": [{
                "scroll-mr": I()
            }],
            "scroll-mb": [{
                "scroll-mb": I()
            }],
            "scroll-ml": [{
                "scroll-ml": I()
            }],
            "scroll-p": [{
                "scroll-p": I()
            }],
            "scroll-px": [{
                "scroll-px": I()
            }],
            "scroll-py": [{
                "scroll-py": I()
            }],
            "scroll-ps": [{
                "scroll-ps": I()
            }],
            "scroll-pe": [{
                "scroll-pe": I()
            }],
            "scroll-pbs": [{
                "scroll-pbs": I()
            }],
            "scroll-pbe": [{
                "scroll-pbe": I()
            }],
            "scroll-pt": [{
                "scroll-pt": I()
            }],
            "scroll-pr": [{
                "scroll-pr": I()
            }],
            "scroll-pb": [{
                "scroll-pb": I()
            }],
            "scroll-pl": [{
                "scroll-pl": I()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", re, ne]
            }],
            fill: [{
                fill: ["none", ...B()]
            }],
            "stroke-w": [{
                stroke: [Se, yo, ts, fy]
            }],
            stroke: [{
                stroke: ["none", ...B()]
            }],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            translate: ["translate-x", "translate-y", "translate-none"],
            "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        },
        orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
    }
}
  , xk = JE(wk);
function Nn(...t) {
    return xk(q0(t))
}
const dw = E.forwardRef( ({...t}, e) => x.jsx("div", {
    ref: e,
    className: "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
    ...t
}));
dw.displayName = "ToastProvider";
const fw = E.forwardRef( ({...t}, e) => x.jsx("div", {
    ref: e,
    className: "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
    ...t
}));
fw.displayName = "ToastViewport";
const Sk = WC("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , hw = E.forwardRef( ({className: t, variant: e, ...n}, i) => x.jsx("div", {
    ref: i,
    className: Nn(Sk({
        variant: e
    }), t),
    ...n
}));
hw.displayName = "Toast";
const bk = E.forwardRef( ({className: t, ...e}, n) => x.jsx("div", {
    ref: n,
    className: Nn("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", t),
    ...e
}));
bk.displayName = "ToastAction";
const pw = E.forwardRef( ({className: t, ...e}, n) => x.jsx("button", {
    ref: n,
    className: Nn("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", t),
    "toast-close": "",
    ...e,
    children: x.jsx(G0, {
        className: "h-4 w-4"
    })
}));
pw.displayName = "ToastClose";
const mw = E.forwardRef( ({className: t, ...e}, n) => x.jsx("div", {
    ref: n,
    className: Nn("text-sm font-semibold", t),
    ...e
}));
mw.displayName = "ToastTitle";
const gw = E.forwardRef( ({className: t, ...e}, n) => x.jsx("div", {
    ref: n,
    className: Nn("text-sm opacity-90", t),
    ...e
}));
gw.displayName = "ToastDescription";
function Ck() {
    const {toasts: t} = HC();
    return x.jsxs(dw, {
        children: [t.map(function({id: e, title: n, description: i, action: o, ...l}) {
            return x.jsxs(hw, {
                ...l,
                children: [x.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && x.jsx(mw, {
                        children: n
                    }), i && x.jsx(gw, {
                        children: i
                    })]
                }), o, x.jsx(pw, {})]
            }, e)
        }), x.jsx(fw, {})]
    })
}
var Go = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(t) {
        return this.listeners.add(t),
        this.onSubscribe(),
        () => {
            this.listeners.delete(t),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
, Ek = {
    setTimeout: (t, e) => setTimeout(t, e),
    clearTimeout: t => clearTimeout(t),
    setInterval: (t, e) => setInterval(t, e),
    clearInterval: t => clearInterval(t)
}, Er, Ff, j0, kk = (j0 = class {
    constructor() {
        ce(this, Er, Ek);
        ce(this, Ff, !1)
    }
    setTimeoutProvider(t) {
        Z(this, Er, t)
    }
    setTimeout(t, e) {
        return R(this, Er).setTimeout(t, e)
    }
    clearTimeout(t) {
        R(this, Er).clearTimeout(t)
    }
    setInterval(t, e) {
        return R(this, Er).setInterval(t, e)
    }
    clearInterval(t) {
        R(this, Er).clearInterval(t)
    }
}
,
Er = new WeakMap,
Ff = new WeakMap,
j0), as = new kk;
function Tk(t) {
    setTimeout(t, 0)
}
var Ss = typeof window > "u" || "Deno"in globalThis;
function Lt() {}
function Pk(t, e) {
    return typeof t == "function" ? t(e) : t
}
function Kd(t) {
    return typeof t == "number" && t >= 0 && t !== 1 / 0
}
function yw(t, e) {
    return Math.max(t + (e || 0) - Date.now(), 0)
}
function jr(t, e) {
    return typeof t == "function" ? t(e) : t
}
function en(t, e) {
    return typeof t == "function" ? t(e) : t
}
function my(t, e) {
    const {type: n="all", exact: i, fetchStatus: o, predicate: l, queryKey: u, stale: d} = t;
    if (u) {
        if (i) {
            if (e.queryHash !== $f(u, e.options))
                return !1
        } else if (!Do(e.queryKey, u))
            return !1
    }
    if (n !== "all") {
        const f = e.isActive();
        if (n === "active" && !f || n === "inactive" && f)
            return !1
    }
    return !(typeof d == "boolean" && e.isStale() !== d || o && o !== e.state.fetchStatus || l && !l(e))
}
function gy(t, e) {
    const {exact: n, status: i, predicate: o, mutationKey: l} = t;
    if (l) {
        if (!e.options.mutationKey)
            return !1;
        if (n) {
            if (Mo(e.options.mutationKey) !== Mo(l))
                return !1
        } else if (!Do(e.options.mutationKey, l))
            return !1
    }
    return !(i && e.state.status !== i || o && !o(e))
}
function $f(t, e) {
    return ((e == null ? void 0 : e.queryKeyHashFn) || Mo)(t)
}
function Mo(t) {
    return JSON.stringify(t, (e, n) => Gd(n) ? Object.keys(n).sort().reduce( (i, o) => (i[o] = n[o],
    i), {}) : n)
}
function Do(t, e) {
    return t === e ? !0 : typeof t != typeof e ? !1 : t && e && typeof t == "object" && typeof e == "object" ? Object.keys(e).every(n => Do(t[n], e[n])) : !1
}
var _k = Object.prototype.hasOwnProperty;
function vw(t, e, n=0) {
    if (t === e)
        return t;
    if (n > 500)
        return e;
    const i = yy(t) && yy(e);
    if (!i && !(Gd(t) && Gd(e)))
        return e;
    const l = (i ? t : Object.keys(t)).length
      , u = i ? e : Object.keys(e)
      , d = u.length
      , f = i ? new Array(d) : {};
    let p = 0;
    for (let m = 0; m < d; m++) {
        const y = i ? m : u[m]
          , w = t[y]
          , C = e[y];
        if (w === C) {
            f[y] = w,
            (i ? m < l : _k.call(t, y)) && p++;
            continue
        }
        if (w === null || C === null || typeof w != "object" || typeof C != "object") {
            f[y] = C;
            continue
        }
        const b = vw(w, C, n + 1);
        f[y] = b,
        b === w && p++
    }
    return l === d && p === l ? t : f
}
function Qd(t, e) {
    if (!e || Object.keys(t).length !== Object.keys(e).length)
        return !1;
    for (const n in t)
        if (t[n] !== e[n])
            return !1;
    return !0
}
function yy(t) {
    return Array.isArray(t) && t.length === Object.keys(t).length
}
function Gd(t) {
    if (!vy(t))
        return !1;
    const e = t.constructor;
    if (e === void 0)
        return !0;
    const n = e.prototype;
    return !(!vy(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype)
}
function vy(t) {
    return Object.prototype.toString.call(t) === "[object Object]"
}
function Rk(t) {
    return new Promise(e => {
        as.setTimeout(e, t)
    }
    )
}
function Yd(t, e, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(t, e) : n.structuralSharing !== !1 ? vw(t, e) : e
}
function Ak(t, e, n=0) {
    const i = [...t, e];
    return n && i.length > n ? i.slice(1) : i
}
function Nk(t, e, n=0) {
    const i = [e, ...t];
    return n && i.length > n ? i.slice(0, -1) : i
}
var Hf = Symbol();
function ww(t, e) {
    return !t.queryFn && (e != null && e.initialPromise) ? () => e.initialPromise : !t.queryFn || t.queryFn === Hf ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)) : t.queryFn
}
function xw(t, e) {
    return typeof t == "function" ? t(...e) : !!t
}
function Ok(t, e, n) {
    let i = !1, o;
    return Object.defineProperty(t, "signal", {
        enumerable: !0,
        get: () => (o ?? (o = e()),
        i || (i = !0,
        o.aborted ? n() : o.addEventListener("abort", n, {
            once: !0
        })),
        o)
    }),
    t
}
var cs, kr, ii, L0, jk = (L0 = class extends Go {
    constructor() {
        super();
        ce(this, cs);
        ce(this, kr);
        ce(this, ii);
        Z(this, ii, e => {
            if (!Ss && window.addEventListener) {
                const n = () => e();
                return window.addEventListener("visibilitychange", n, !1),
                () => {
                    window.removeEventListener("visibilitychange", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        R(this, kr) || this.setEventListener(R(this, ii))
    }
    onUnsubscribe() {
        var e;
        this.hasListeners() || ((e = R(this, kr)) == null || e.call(this),
        Z(this, kr, void 0))
    }
    setEventListener(e) {
        var n;
        Z(this, ii, e),
        (n = R(this, kr)) == null || n.call(this),
        Z(this, kr, e(i => {
            typeof i == "boolean" ? this.setFocused(i) : this.onFocus()
        }
        ))
    }
    setFocused(e) {
        R(this, cs) !== e && (Z(this, cs, e),
        this.onFocus())
    }
    onFocus() {
        const e = this.isFocused();
        this.listeners.forEach(n => {
            n(e)
        }
        )
    }
    isFocused() {
        var e;
        return typeof R(this, cs) == "boolean" ? R(this, cs) : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !== "hidden"
    }
}
,
cs = new WeakMap,
kr = new WeakMap,
ii = new WeakMap,
L0), Wf = new jk;
function Xd() {
    let t, e;
    const n = new Promise( (o, l) => {
        t = o,
        e = l
    }
    );
    n.status = "pending",
    n.catch( () => {}
    );
    function i(o) {
        Object.assign(n, o),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = o => {
        i({
            status: "fulfilled",
            value: o
        }),
        t(o)
    }
    ,
    n.reject = o => {
        i({
            status: "rejected",
            reason: o
        }),
        e(o)
    }
    ,
    n
}
var Lk = Tk;
function Mk() {
    let t = []
      , e = 0
      , n = d => {
        d()
    }
      , i = d => {
        d()
    }
      , o = Lk;
    const l = d => {
        e ? t.push(d) : o( () => {
            n(d)
        }
        )
    }
      , u = () => {
        const d = t;
        t = [],
        d.length && o( () => {
            i( () => {
                d.forEach(f => {
                    n(f)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: d => {
            let f;
            e++;
            try {
                f = d()
            } finally {
                e--,
                e || u()
            }
            return f
        }
        ,
        batchCalls: d => (...f) => {
            l( () => {
                d(...f)
            }
            )
        }
        ,
        schedule: l,
        setNotifyFunction: d => {
            n = d
        }
        ,
        setBatchNotifyFunction: d => {
            i = d
        }
        ,
        setScheduler: d => {
            o = d
        }
    }
}
var pt = Mk(), oi, Tr, ai, M0, Dk = (M0 = class extends Go {
    constructor() {
        super();
        ce(this, oi, !0);
        ce(this, Tr);
        ce(this, ai);
        Z(this, ai, e => {
            if (!Ss && window.addEventListener) {
                const n = () => e(!0)
                  , i = () => e(!1);
                return window.addEventListener("online", n, !1),
                window.addEventListener("offline", i, !1),
                () => {
                    window.removeEventListener("online", n),
                    window.removeEventListener("offline", i)
                }
            }
        }
        )
    }
    onSubscribe() {
        R(this, Tr) || this.setEventListener(R(this, ai))
    }
    onUnsubscribe() {
        var e;
        this.hasListeners() || ((e = R(this, Tr)) == null || e.call(this),
        Z(this, Tr, void 0))
    }
    setEventListener(e) {
        var n;
        Z(this, ai, e),
        (n = R(this, Tr)) == null || n.call(this),
        Z(this, Tr, e(this.setOnline.bind(this)))
    }
    setOnline(e) {
        R(this, oi) !== e && (Z(this, oi, e),
        this.listeners.forEach(i => {
            i(e)
        }
        ))
    }
    isOnline() {
        return R(this, oi)
    }
}
,
oi = new WeakMap,
Tr = new WeakMap,
ai = new WeakMap,
M0), Vl = new Dk;
function Ik(t) {
    return Math.min(1e3 * 2 ** t, 3e4)
}
function Sw(t) {
    return (t ?? "online") === "online" ? Vl.isOnline() : !0
}
var Jd = class extends Error {
    constructor(t) {
        super("CancelledError"),
        this.revert = t == null ? void 0 : t.revert,
        this.silent = t == null ? void 0 : t.silent
    }
}
;
function bw(t) {
    let e = !1, n = 0, i;
    const o = Xd()
      , l = () => o.status !== "pending"
      , u = k => {
        var S;
        if (!l()) {
            const P = new Jd(k);
            w(P),
            (S = t.onCancel) == null || S.call(t, P)
        }
    }
      , d = () => {
        e = !0
    }
      , f = () => {
        e = !1
    }
      , p = () => Wf.isFocused() && (t.networkMode === "always" || Vl.isOnline()) && t.canRun()
      , m = () => Sw(t.networkMode) && t.canRun()
      , y = k => {
        l() || (i == null || i(),
        o.resolve(k))
    }
      , w = k => {
        l() || (i == null || i(),
        o.reject(k))
    }
      , C = () => new Promise(k => {
        var S;
        i = P => {
            (l() || p()) && k(P)
        }
        ,
        (S = t.onPause) == null || S.call(t)
    }
    ).then( () => {
        var k;
        i = void 0,
        l() || (k = t.onContinue) == null || k.call(t)
    }
    )
      , b = () => {
        if (l())
            return;
        let k;
        const S = n === 0 ? t.initialPromise : void 0;
        try {
            k = S ?? t.fn()
        } catch (P) {
            k = Promise.reject(P)
        }
        Promise.resolve(k).then(y).catch(P => {
            var $;
            if (l())
                return;
            const L = t.retry ?? (Ss ? 0 : 3)
              , j = t.retryDelay ?? Ik
              , N = typeof j == "function" ? j(n, P) : j
              , V = L === !0 || typeof L == "number" && n < L || typeof L == "function" && L(n, P);
            if (e || !V) {
                w(P);
                return
            }
            n++,
            ($ = t.onFail) == null || $.call(t, n, P),
            Rk(N).then( () => p() ? void 0 : C()).then( () => {
                e ? w(P) : b()
            }
            )
        }
        )
    }
    ;
    return {
        promise: o,
        status: () => o.status,
        cancel: u,
        continue: () => (i == null || i(),
        o),
        cancelRetry: d,
        continueRetry: f,
        canStart: m,
        start: () => (m() ? b() : C().then(b),
        o)
    }
}
var ds, D0, Cw = (D0 = class {
    constructor() {
        ce(this, ds)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        Kd(this.gcTime) && Z(this, ds, as.setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(t) {
        this.gcTime = Math.max(this.gcTime || 0, t ?? (Ss ? 1 / 0 : 300 * 1e3))
    }
    clearGcTimeout() {
        R(this, ds) && (as.clearTimeout(R(this, ds)),
        Z(this, ds, void 0))
    }
}
,
ds = new WeakMap,
D0), fs, li, Zt, hs, ut, Ho, ps, hn, Hn, I0, Fk = (I0 = class extends Cw {
    constructor(e) {
        super();
        ce(this, hn);
        ce(this, fs);
        ce(this, li);
        ce(this, Zt);
        ce(this, hs);
        ce(this, ut);
        ce(this, Ho);
        ce(this, ps);
        Z(this, ps, !1),
        Z(this, Ho, e.defaultOptions),
        this.setOptions(e.options),
        this.observers = [],
        Z(this, hs, e.client),
        Z(this, Zt, R(this, hs).getQueryCache()),
        this.queryKey = e.queryKey,
        this.queryHash = e.queryHash,
        Z(this, fs, xy(this.options)),
        this.state = e.state ?? R(this, fs),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var e;
        return (e = R(this, ut)) == null ? void 0 : e.promise
    }
    setOptions(e) {
        if (this.options = {
            ...R(this, Ho),
            ...e
        },
        this.updateGcTime(this.options.gcTime),
        this.state && this.state.data === void 0) {
            const n = xy(this.options);
            n.data !== void 0 && (this.setState(wy(n.data, n.dataUpdatedAt)),
            Z(this, fs, n))
        }
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && R(this, Zt).remove(this)
    }
    setData(e, n) {
        const i = Yd(this.state.data, e, this.options);
        return Ce(this, hn, Hn).call(this, {
            data: i,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual
        }),
        i
    }
    setState(e, n) {
        Ce(this, hn, Hn).call(this, {
            type: "setState",
            state: e,
            setStateOptions: n
        })
    }
    cancel(e) {
        var i, o;
        const n = (i = R(this, ut)) == null ? void 0 : i.promise;
        return (o = R(this, ut)) == null || o.cancel(e),
        n ? n.then(Lt).catch(Lt) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(R(this, fs))
    }
    isActive() {
        return this.observers.some(e => en(e.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Hf || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(e => jr(e.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(e => e.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(e=0) {
        return this.state.data === void 0 ? !0 : e === "static" ? !1 : this.state.isInvalidated ? !0 : !yw(this.state.dataUpdatedAt, e)
    }
    onFocus() {
        var n;
        const e = this.observers.find(i => i.shouldFetchOnWindowFocus());
        e == null || e.refetch({
            cancelRefetch: !1
        }),
        (n = R(this, ut)) == null || n.continue()
    }
    onOnline() {
        var n;
        const e = this.observers.find(i => i.shouldFetchOnReconnect());
        e == null || e.refetch({
            cancelRefetch: !1
        }),
        (n = R(this, ut)) == null || n.continue()
    }
    addObserver(e) {
        this.observers.includes(e) || (this.observers.push(e),
        this.clearGcTimeout(),
        R(this, Zt).notify({
            type: "observerAdded",
            query: this,
            observer: e
        }))
    }
    removeObserver(e) {
        this.observers.includes(e) && (this.observers = this.observers.filter(n => n !== e),
        this.observers.length || (R(this, ut) && (R(this, ps) ? R(this, ut).cancel({
            revert: !0
        }) : R(this, ut).cancelRetry()),
        this.scheduleGc()),
        R(this, Zt).notify({
            type: "observerRemoved",
            query: this,
            observer: e
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || Ce(this, hn, Hn).call(this, {
            type: "invalidate"
        })
    }
    async fetch(e, n) {
        var f, p, m, y, w, C, b, k, S, P, L, j;
        if (this.state.fetchStatus !== "idle" && ((f = R(this, ut)) == null ? void 0 : f.status()) !== "rejected") {
            if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (R(this, ut))
                return R(this, ut).continueRetry(),
                R(this, ut).promise
        }
        if (e && this.setOptions(e),
        !this.options.queryFn) {
            const N = this.observers.find(V => V.options.queryFn);
            N && this.setOptions(N.options)
        }
        const i = new AbortController
          , o = N => {
            Object.defineProperty(N, "signal", {
                enumerable: !0,
                get: () => (Z(this, ps, !0),
                i.signal)
            })
        }
          , l = () => {
            const N = ww(this.options, n)
              , $ = ( () => {
                const Y = {
                    client: R(this, hs),
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return o(Y),
                Y
            }
            )();
            return Z(this, ps, !1),
            this.options.persister ? this.options.persister(N, $, this) : N($)
        }
          , d = ( () => {
            const N = {
                fetchOptions: n,
                options: this.options,
                queryKey: this.queryKey,
                client: R(this, hs),
                state: this.state,
                fetchFn: l
            };
            return o(N),
            N
        }
        )();
        (p = this.options.behavior) == null || p.onFetch(d, this),
        Z(this, li, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((m = d.fetchOptions) == null ? void 0 : m.meta)) && Ce(this, hn, Hn).call(this, {
            type: "fetch",
            meta: (y = d.fetchOptions) == null ? void 0 : y.meta
        }),
        Z(this, ut, bw({
            initialPromise: n == null ? void 0 : n.initialPromise,
            fn: d.fetchFn,
            onCancel: N => {
                N instanceof Jd && N.revert && this.setState({
                    ...R(this, li),
                    fetchStatus: "idle"
                }),
                i.abort()
            }
            ,
            onFail: (N, V) => {
                Ce(this, hn, Hn).call(this, {
                    type: "failed",
                    failureCount: N,
                    error: V
                })
            }
            ,
            onPause: () => {
                Ce(this, hn, Hn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                Ce(this, hn, Hn).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: d.options.retry,
            retryDelay: d.options.retryDelay,
            networkMode: d.options.networkMode,
            canRun: () => !0
        }));
        try {
            const N = await R(this, ut).start();
            if (N === void 0)
                throw new Error(`${this.queryHash} data is undefined`);
            return this.setData(N),
            (C = (w = R(this, Zt).config).onSuccess) == null || C.call(w, N, this),
            (k = (b = R(this, Zt).config).onSettled) == null || k.call(b, N, this.state.error, this),
            N
        } catch (N) {
            if (N instanceof Jd) {
                if (N.silent)
                    return R(this, ut).promise;
                if (N.revert) {
                    if (this.state.data === void 0)
                        throw N;
                    return this.state.data
                }
            }
            throw Ce(this, hn, Hn).call(this, {
                type: "error",
                error: N
            }),
            (P = (S = R(this, Zt).config).onError) == null || P.call(S, N, this),
            (j = (L = R(this, Zt).config).onSettled) == null || j.call(L, this.state.data, N, this),
            N
        } finally {
            this.scheduleGc()
        }
    }
}
,
fs = new WeakMap,
li = new WeakMap,
Zt = new WeakMap,
hs = new WeakMap,
ut = new WeakMap,
Ho = new WeakMap,
ps = new WeakMap,
hn = new WeakSet,
Hn = function(e) {
    const n = i => {
        switch (e.type) {
        case "failed":
            return {
                ...i,
                fetchFailureCount: e.failureCount,
                fetchFailureReason: e.error
            };
        case "pause":
            return {
                ...i,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...i,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...i,
                ...Ew(i.data, this.options),
                fetchMeta: e.meta ?? null
            };
        case "success":
            const o = {
                ...i,
                ...wy(e.data, e.dataUpdatedAt),
                dataUpdateCount: i.dataUpdateCount + 1,
                ...!e.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
            return Z(this, li, e.manual ? o : void 0),
            o;
        case "error":
            const l = e.error;
            return {
                ...i,
                error: l,
                errorUpdateCount: i.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: i.fetchFailureCount + 1,
                fetchFailureReason: l,
                fetchStatus: "idle",
                status: "error",
                isInvalidated: !0
            };
        case "invalidate":
            return {
                ...i,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...i,
                ...e.state
            }
        }
    }
    ;
    this.state = n(this.state),
    pt.batch( () => {
        this.observers.forEach(i => {
            i.onQueryUpdate()
        }
        ),
        R(this, Zt).notify({
            query: this,
            type: "updated",
            action: e
        })
    }
    )
}
,
I0);
function Ew(t, e) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: Sw(e.networkMode) ? "fetching" : "paused",
        ...t === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function wy(t, e) {
    return {
        data: t,
        dataUpdatedAt: e ?? Date.now(),
        error: null,
        isInvalidated: !1,
        status: "success"
    }
}
function xy(t) {
    const e = typeof t.initialData == "function" ? t.initialData() : t.initialData
      , n = e !== void 0
      , i = n ? typeof t.initialDataUpdatedAt == "function" ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
    return {
        data: e,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? i ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var jt, Ee, Wo, Tt, ms, ui, Wn, Pr, qo, ci, di, gs, ys, _r, fi, Ne, bo, Zd, ef, tf, nf, rf, sf, of, kw, F0, Vk = (F0 = class extends Go {
    constructor(e, n) {
        super();
        ce(this, Ne);
        ce(this, jt);
        ce(this, Ee);
        ce(this, Wo);
        ce(this, Tt);
        ce(this, ms);
        ce(this, ui);
        ce(this, Wn);
        ce(this, Pr);
        ce(this, qo);
        ce(this, ci);
        ce(this, di);
        ce(this, gs);
        ce(this, ys);
        ce(this, _r);
        ce(this, fi, new Set);
        this.options = n,
        Z(this, jt, e),
        Z(this, Pr, null),
        Z(this, Wn, Xd()),
        this.bindMethods(),
        this.setOptions(n)
    }
    bindMethods() {
        this.refetch = this.refetch.bind(this)
    }
    onSubscribe() {
        this.listeners.size === 1 && (R(this, Ee).addObserver(this),
        Sy(R(this, Ee), this.options) ? Ce(this, Ne, bo).call(this) : this.updateResult(),
        Ce(this, Ne, nf).call(this))
    }
    onUnsubscribe() {
        this.hasListeners() || this.destroy()
    }
    shouldFetchOnReconnect() {
        return af(R(this, Ee), this.options, this.options.refetchOnReconnect)
    }
    shouldFetchOnWindowFocus() {
        return af(R(this, Ee), this.options, this.options.refetchOnWindowFocus)
    }
    destroy() {
        this.listeners = new Set,
        Ce(this, Ne, rf).call(this),
        Ce(this, Ne, sf).call(this),
        R(this, Ee).removeObserver(this)
    }
    setOptions(e) {
        const n = this.options
          , i = R(this, Ee);
        if (this.options = R(this, jt).defaultQueryOptions(e),
        this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof en(this.options.enabled, R(this, Ee)) != "boolean")
            throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
        Ce(this, Ne, of).call(this),
        R(this, Ee).setOptions(this.options),
        n._defaulted && !Qd(this.options, n) && R(this, jt).getQueryCache().notify({
            type: "observerOptionsUpdated",
            query: R(this, Ee),
            observer: this
        });
        const o = this.hasListeners();
        o && by(R(this, Ee), i, this.options, n) && Ce(this, Ne, bo).call(this),
        this.updateResult(),
        o && (R(this, Ee) !== i || en(this.options.enabled, R(this, Ee)) !== en(n.enabled, R(this, Ee)) || jr(this.options.staleTime, R(this, Ee)) !== jr(n.staleTime, R(this, Ee))) && Ce(this, Ne, Zd).call(this);
        const l = Ce(this, Ne, ef).call(this);
        o && (R(this, Ee) !== i || en(this.options.enabled, R(this, Ee)) !== en(n.enabled, R(this, Ee)) || l !== R(this, _r)) && Ce(this, Ne, tf).call(this, l)
    }
    getOptimisticResult(e) {
        const n = R(this, jt).getQueryCache().build(R(this, jt), e)
          , i = this.createResult(n, e);
        return Bk(this, i) && (Z(this, Tt, i),
        Z(this, ui, this.options),
        Z(this, ms, R(this, Ee).state)),
        i
    }
    getCurrentResult() {
        return R(this, Tt)
    }
    trackResult(e, n) {
        return new Proxy(e,{
            get: (i, o) => (this.trackProp(o),
            n == null || n(o),
            o === "promise" && (this.trackProp("data"),
            !this.options.experimental_prefetchInRender && R(this, Wn).status === "pending" && R(this, Wn).reject(new Error("experimental_prefetchInRender feature flag is not enabled"))),
            Reflect.get(i, o))
        })
    }
    trackProp(e) {
        R(this, fi).add(e)
    }
    getCurrentQuery() {
        return R(this, Ee)
    }
    refetch({...e}={}) {
        return this.fetch({
            ...e
        })
    }
    fetchOptimistic(e) {
        const n = R(this, jt).defaultQueryOptions(e)
          , i = R(this, jt).getQueryCache().build(R(this, jt), n);
        return i.fetch().then( () => this.createResult(i, n))
    }
    fetch(e) {
        return Ce(this, Ne, bo).call(this, {
            ...e,
            cancelRefetch: e.cancelRefetch ?? !0
        }).then( () => (this.updateResult(),
        R(this, Tt)))
    }
    createResult(e, n) {
        var Q;
        const i = R(this, Ee)
          , o = this.options
          , l = R(this, Tt)
          , u = R(this, ms)
          , d = R(this, ui)
          , p = e !== i ? e.state : R(this, Wo)
          , {state: m} = e;
        let y = {
            ...m
        }, w = !1, C;
        if (n._optimisticResults) {
            const X = this.hasListeners()
              , xe = !X && Sy(e, n)
              , Oe = X && by(e, i, n, o);
            (xe || Oe) && (y = {
                ...y,
                ...Ew(m.data, e.options)
            }),
            n._optimisticResults === "isRestoring" && (y.fetchStatus = "idle")
        }
        let {error: b, errorUpdatedAt: k, status: S} = y;
        C = y.data;
        let P = !1;
        if (n.placeholderData !== void 0 && C === void 0 && S === "pending") {
            let X;
            l != null && l.isPlaceholderData && n.placeholderData === (d == null ? void 0 : d.placeholderData) ? (X = l.data,
            P = !0) : X = typeof n.placeholderData == "function" ? n.placeholderData((Q = R(this, di)) == null ? void 0 : Q.state.data, R(this, di)) : n.placeholderData,
            X !== void 0 && (S = "success",
            C = Yd(l == null ? void 0 : l.data, X, n),
            w = !0)
        }
        if (n.select && C !== void 0 && !P)
            if (l && C === (u == null ? void 0 : u.data) && n.select === R(this, qo))
                C = R(this, ci);
            else
                try {
                    Z(this, qo, n.select),
                    C = n.select(C),
                    C = Yd(l == null ? void 0 : l.data, C, n),
                    Z(this, ci, C),
                    Z(this, Pr, null)
                } catch (X) {
                    Z(this, Pr, X)
                }
        R(this, Pr) && (b = R(this, Pr),
        C = R(this, ci),
        k = Date.now(),
        S = "error");
        const L = y.fetchStatus === "fetching"
          , j = S === "pending"
          , N = S === "error"
          , V = j && L
          , $ = C !== void 0
          , I = {
            status: S,
            fetchStatus: y.fetchStatus,
            isPending: j,
            isSuccess: S === "success",
            isError: N,
            isInitialLoading: V,
            isLoading: V,
            data: C,
            dataUpdatedAt: y.dataUpdatedAt,
            error: b,
            errorUpdatedAt: k,
            failureCount: y.fetchFailureCount,
            failureReason: y.fetchFailureReason,
            errorUpdateCount: y.errorUpdateCount,
            isFetched: y.dataUpdateCount > 0 || y.errorUpdateCount > 0,
            isFetchedAfterMount: y.dataUpdateCount > p.dataUpdateCount || y.errorUpdateCount > p.errorUpdateCount,
            isFetching: L,
            isRefetching: L && !j,
            isLoadingError: N && !$,
            isPaused: y.fetchStatus === "paused",
            isPlaceholderData: w,
            isRefetchError: N && $,
            isStale: qf(e, n),
            refetch: this.refetch,
            promise: R(this, Wn),
            isEnabled: en(n.enabled, e) !== !1
        };
        if (this.options.experimental_prefetchInRender) {
            const X = I.data !== void 0
              , xe = I.status === "error" && !X
              , Oe = De => {
                xe ? De.reject(I.error) : X && De.resolve(I.data)
            }
              , Le = () => {
                const De = Z(this, Wn, I.promise = Xd());
                Oe(De)
            }
              , Re = R(this, Wn);
            switch (Re.status) {
            case "pending":
                e.queryHash === i.queryHash && Oe(Re);
                break;
            case "fulfilled":
                (xe || I.data !== Re.value) && Le();
                break;
            case "rejected":
                (!xe || I.error !== Re.reason) && Le();
                break
            }
        }
        return I
    }
    updateResult() {
        const e = R(this, Tt)
          , n = this.createResult(R(this, Ee), this.options);
        if (Z(this, ms, R(this, Ee).state),
        Z(this, ui, this.options),
        R(this, ms).data !== void 0 && Z(this, di, R(this, Ee)),
        Qd(n, e))
            return;
        Z(this, Tt, n);
        const i = () => {
            if (!e)
                return !0;
            const {notifyOnChangeProps: o} = this.options
              , l = typeof o == "function" ? o() : o;
            if (l === "all" || !l && !R(this, fi).size)
                return !0;
            const u = new Set(l ?? R(this, fi));
            return this.options.throwOnError && u.add("error"),
            Object.keys(R(this, Tt)).some(d => {
                const f = d;
                return R(this, Tt)[f] !== e[f] && u.has(f)
            }
            )
        }
        ;
        Ce(this, Ne, kw).call(this, {
            listeners: i()
        })
    }
    onQueryUpdate() {
        this.updateResult(),
        this.hasListeners() && Ce(this, Ne, nf).call(this)
    }
}
,
jt = new WeakMap,
Ee = new WeakMap,
Wo = new WeakMap,
Tt = new WeakMap,
ms = new WeakMap,
ui = new WeakMap,
Wn = new WeakMap,
Pr = new WeakMap,
qo = new WeakMap,
ci = new WeakMap,
di = new WeakMap,
gs = new WeakMap,
ys = new WeakMap,
_r = new WeakMap,
fi = new WeakMap,
Ne = new WeakSet,
bo = function(e) {
    Ce(this, Ne, of).call(this);
    let n = R(this, Ee).fetch(this.options, e);
    return e != null && e.throwOnError || (n = n.catch(Lt)),
    n
}
,
Zd = function() {
    Ce(this, Ne, rf).call(this);
    const e = jr(this.options.staleTime, R(this, Ee));
    if (Ss || R(this, Tt).isStale || !Kd(e))
        return;
    const i = yw(R(this, Tt).dataUpdatedAt, e) + 1;
    Z(this, gs, as.setTimeout( () => {
        R(this, Tt).isStale || this.updateResult()
    }
    , i))
}
,
ef = function() {
    return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(R(this, Ee)) : this.options.refetchInterval) ?? !1
}
,
tf = function(e) {
    Ce(this, Ne, sf).call(this),
    Z(this, _r, e),
    !(Ss || en(this.options.enabled, R(this, Ee)) === !1 || !Kd(R(this, _r)) || R(this, _r) === 0) && Z(this, ys, as.setInterval( () => {
        (this.options.refetchIntervalInBackground || Wf.isFocused()) && Ce(this, Ne, bo).call(this)
    }
    , R(this, _r)))
}
,
nf = function() {
    Ce(this, Ne, Zd).call(this),
    Ce(this, Ne, tf).call(this, Ce(this, Ne, ef).call(this))
}
,
rf = function() {
    R(this, gs) && (as.clearTimeout(R(this, gs)),
    Z(this, gs, void 0))
}
,
sf = function() {
    R(this, ys) && (as.clearInterval(R(this, ys)),
    Z(this, ys, void 0))
}
,
of = function() {
    const e = R(this, jt).getQueryCache().build(R(this, jt), this.options);
    if (e === R(this, Ee))
        return;
    const n = R(this, Ee);
    Z(this, Ee, e),
    Z(this, Wo, e.state),
    this.hasListeners() && (n == null || n.removeObserver(this),
    e.addObserver(this))
}
,
kw = function(e) {
    pt.batch( () => {
        e.listeners && this.listeners.forEach(n => {
            n(R(this, Tt))
        }
        ),
        R(this, jt).getQueryCache().notify({
            query: R(this, Ee),
            type: "observerResultsUpdated"
        })
    }
    )
}
,
F0);
function Uk(t, e) {
    return en(e.enabled, t) !== !1 && t.state.data === void 0 && !(t.state.status === "error" && e.retryOnMount === !1)
}
function Sy(t, e) {
    return Uk(t, e) || t.state.data !== void 0 && af(t, e, e.refetchOnMount)
}
function af(t, e, n) {
    if (en(e.enabled, t) !== !1 && jr(e.staleTime, t) !== "static") {
        const i = typeof n == "function" ? n(t) : n;
        return i === "always" || i !== !1 && qf(t, e)
    }
    return !1
}
function by(t, e, n, i) {
    return (t !== e || en(i.enabled, t) === !1) && (!n.suspense || t.state.status !== "error") && qf(t, n)
}
function qf(t, e) {
    return en(e.enabled, t) !== !1 && t.isStaleByTime(jr(e.staleTime, t))
}
function Bk(t, e) {
    return !Qd(t.getCurrentResult(), e)
}
function Cy(t) {
    return {
        onFetch: (e, n) => {
            var m, y, w, C, b;
            const i = e.options
              , o = (w = (y = (m = e.fetchOptions) == null ? void 0 : m.meta) == null ? void 0 : y.fetchMore) == null ? void 0 : w.direction
              , l = ((C = e.state.data) == null ? void 0 : C.pages) || []
              , u = ((b = e.state.data) == null ? void 0 : b.pageParams) || [];
            let d = {
                pages: [],
                pageParams: []
            }
              , f = 0;
            const p = async () => {
                let k = !1;
                const S = j => {
                    Ok(j, () => e.signal, () => k = !0)
                }
                  , P = ww(e.options, e.fetchOptions)
                  , L = async (j, N, V) => {
                    if (k)
                        return Promise.reject();
                    if (N == null && j.pages.length)
                        return Promise.resolve(j);
                    const Y = ( () => {
                        const xe = {
                            client: e.client,
                            queryKey: e.queryKey,
                            pageParam: N,
                            direction: V ? "backward" : "forward",
                            meta: e.options.meta
                        };
                        return S(xe),
                        xe
                    }
                    )()
                      , I = await P(Y)
                      , {maxPages: Q} = e.options
                      , X = V ? Nk : Ak;
                    return {
                        pages: X(j.pages, I, Q),
                        pageParams: X(j.pageParams, N, Q)
                    }
                }
                ;
                if (o && l.length) {
                    const j = o === "backward"
                      , N = j ? zk : Ey
                      , V = {
                        pages: l,
                        pageParams: u
                    }
                      , $ = N(i, V);
                    d = await L(V, $, j)
                } else {
                    const j = t ?? l.length;
                    do {
                        const N = f === 0 ? u[0] ?? i.initialPageParam : Ey(i, d);
                        if (f > 0 && N == null)
                            break;
                        d = await L(d, N),
                        f++
                    } while (f < j)
                }
                return d
            }
            ;
            e.options.persister ? e.fetchFn = () => {
                var k, S;
                return (S = (k = e.options).persister) == null ? void 0 : S.call(k, p, {
                    client: e.client,
                    queryKey: e.queryKey,
                    meta: e.options.meta,
                    signal: e.signal
                }, n)
            }
            : e.fetchFn = p
        }
    }
}
function Ey(t, {pages: e, pageParams: n}) {
    const i = e.length - 1;
    return e.length > 0 ? t.getNextPageParam(e[i], e, n[i], n) : void 0
}
function zk(t, {pages: e, pageParams: n}) {
    var i;
    return e.length > 0 ? (i = t.getPreviousPageParam) == null ? void 0 : i.call(t, e[0], e, n[0], n) : void 0
}
var Ko, En, xt, vs, kn, br, V0, $k = (V0 = class extends Cw {
    constructor(e) {
        super();
        ce(this, kn);
        ce(this, Ko);
        ce(this, En);
        ce(this, xt);
        ce(this, vs);
        Z(this, Ko, e.client),
        this.mutationId = e.mutationId,
        Z(this, xt, e.mutationCache),
        Z(this, En, []),
        this.state = e.state || Hk(),
        this.setOptions(e.options),
        this.scheduleGc()
    }
    setOptions(e) {
        this.options = e,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(e) {
        R(this, En).includes(e) || (R(this, En).push(e),
        this.clearGcTimeout(),
        R(this, xt).notify({
            type: "observerAdded",
            mutation: this,
            observer: e
        }))
    }
    removeObserver(e) {
        Z(this, En, R(this, En).filter(n => n !== e)),
        this.scheduleGc(),
        R(this, xt).notify({
            type: "observerRemoved",
            mutation: this,
            observer: e
        })
    }
    optionalRemove() {
        R(this, En).length || (this.state.status === "pending" ? this.scheduleGc() : R(this, xt).remove(this))
    }
    continue() {
        var e;
        return ((e = R(this, vs)) == null ? void 0 : e.continue()) ?? this.execute(this.state.variables)
    }
    async execute(e) {
        var u, d, f, p, m, y, w, C, b, k, S, P, L, j, N, V, $, Y;
        const n = () => {
            Ce(this, kn, br).call(this, {
                type: "continue"
            })
        }
          , i = {
            client: R(this, Ko),
            meta: this.options.meta,
            mutationKey: this.options.mutationKey
        };
        Z(this, vs, bw({
            fn: () => this.options.mutationFn ? this.options.mutationFn(e, i) : Promise.reject(new Error("No mutationFn found")),
            onFail: (I, Q) => {
                Ce(this, kn, br).call(this, {
                    type: "failed",
                    failureCount: I,
                    error: Q
                })
            }
            ,
            onPause: () => {
                Ce(this, kn, br).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => R(this, xt).canRun(this)
        }));
        const o = this.state.status === "pending"
          , l = !R(this, vs).canStart();
        try {
            if (o)
                n();
            else {
                Ce(this, kn, br).call(this, {
                    type: "pending",
                    variables: e,
                    isPaused: l
                }),
                R(this, xt).config.onMutate && await R(this, xt).config.onMutate(e, this, i);
                const Q = await ((d = (u = this.options).onMutate) == null ? void 0 : d.call(u, e, i));
                Q !== this.state.context && Ce(this, kn, br).call(this, {
                    type: "pending",
                    context: Q,
                    variables: e,
                    isPaused: l
                })
            }
            const I = await R(this, vs).start();
            return await ((p = (f = R(this, xt).config).onSuccess) == null ? void 0 : p.call(f, I, e, this.state.context, this, i)),
            await ((y = (m = this.options).onSuccess) == null ? void 0 : y.call(m, I, e, this.state.context, i)),
            await ((C = (w = R(this, xt).config).onSettled) == null ? void 0 : C.call(w, I, null, this.state.variables, this.state.context, this, i)),
            await ((k = (b = this.options).onSettled) == null ? void 0 : k.call(b, I, null, e, this.state.context, i)),
            Ce(this, kn, br).call(this, {
                type: "success",
                data: I
            }),
            I
        } catch (I) {
            try {
                await ((P = (S = R(this, xt).config).onError) == null ? void 0 : P.call(S, I, e, this.state.context, this, i))
            } catch (Q) {
                Promise.reject(Q)
            }
            try {
                await ((j = (L = this.options).onError) == null ? void 0 : j.call(L, I, e, this.state.context, i))
            } catch (Q) {
                Promise.reject(Q)
            }
            try {
                await ((V = (N = R(this, xt).config).onSettled) == null ? void 0 : V.call(N, void 0, I, this.state.variables, this.state.context, this, i))
            } catch (Q) {
                Promise.reject(Q)
            }
            try {
                await ((Y = ($ = this.options).onSettled) == null ? void 0 : Y.call($, void 0, I, e, this.state.context, i))
            } catch (Q) {
                Promise.reject(Q)
            }
            throw Ce(this, kn, br).call(this, {
                type: "error",
                error: I
            }),
            I
        } finally {
            R(this, xt).runNext(this)
        }
    }
}
,
Ko = new WeakMap,
En = new WeakMap,
xt = new WeakMap,
vs = new WeakMap,
kn = new WeakSet,
br = function(e) {
    const n = i => {
        switch (e.type) {
        case "failed":
            return {
                ...i,
                failureCount: e.failureCount,
                failureReason: e.error
            };
        case "pause":
            return {
                ...i,
                isPaused: !0
            };
        case "continue":
            return {
                ...i,
                isPaused: !1
            };
        case "pending":
            return {
                ...i,
                context: e.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: e.isPaused,
                status: "pending",
                variables: e.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...i,
                data: e.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...i,
                data: void 0,
                error: e.error,
                failureCount: i.failureCount + 1,
                failureReason: e.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = n(this.state),
    pt.batch( () => {
        R(this, En).forEach(i => {
            i.onMutationUpdate(e)
        }
        ),
        R(this, xt).notify({
            mutation: this,
            type: "updated",
            action: e
        })
    }
    )
}
,
V0);
function Hk() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var qn, pn, Qo, U0, Wk = (U0 = class extends Go {
    constructor(e={}) {
        super();
        ce(this, qn);
        ce(this, pn);
        ce(this, Qo);
        this.config = e,
        Z(this, qn, new Set),
        Z(this, pn, new Map),
        Z(this, Qo, 0)
    }
    build(e, n, i) {
        const o = new $k({
            client: e,
            mutationCache: this,
            mutationId: ++hl(this, Qo)._,
            options: e.defaultMutationOptions(n),
            state: i
        });
        return this.add(o),
        o
    }
    add(e) {
        R(this, qn).add(e);
        const n = yl(e);
        if (typeof n == "string") {
            const i = R(this, pn).get(n);
            i ? i.push(e) : R(this, pn).set(n, [e])
        }
        this.notify({
            type: "added",
            mutation: e
        })
    }
    remove(e) {
        if (R(this, qn).delete(e)) {
            const n = yl(e);
            if (typeof n == "string") {
                const i = R(this, pn).get(n);
                if (i)
                    if (i.length > 1) {
                        const o = i.indexOf(e);
                        o !== -1 && i.splice(o, 1)
                    } else
                        i[0] === e && R(this, pn).delete(n)
            }
        }
        this.notify({
            type: "removed",
            mutation: e
        })
    }
    canRun(e) {
        const n = yl(e);
        if (typeof n == "string") {
            const i = R(this, pn).get(n)
              , o = i == null ? void 0 : i.find(l => l.state.status === "pending");
            return !o || o === e
        } else
            return !0
    }
    runNext(e) {
        var i;
        const n = yl(e);
        if (typeof n == "string") {
            const o = (i = R(this, pn).get(n)) == null ? void 0 : i.find(l => l !== e && l.state.isPaused);
            return (o == null ? void 0 : o.continue()) ?? Promise.resolve()
        } else
            return Promise.resolve()
    }
    clear() {
        pt.batch( () => {
            R(this, qn).forEach(e => {
                this.notify({
                    type: "removed",
                    mutation: e
                })
            }
            ),
            R(this, qn).clear(),
            R(this, pn).clear()
        }
        )
    }
    getAll() {
        return Array.from(R(this, qn))
    }
    find(e) {
        const n = {
            exact: !0,
            ...e
        };
        return this.getAll().find(i => gy(n, i))
    }
    findAll(e={}) {
        return this.getAll().filter(n => gy(e, n))
    }
    notify(e) {
        pt.batch( () => {
            this.listeners.forEach(n => {
                n(e)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const e = this.getAll().filter(n => n.state.isPaused);
        return pt.batch( () => Promise.all(e.map(n => n.continue().catch(Lt))))
    }
}
,
qn = new WeakMap,
pn = new WeakMap,
Qo = new WeakMap,
U0);
function yl(t) {
    var e;
    return (e = t.options.scope) == null ? void 0 : e.id
}
var Tn, B0, qk = (B0 = class extends Go {
    constructor(e={}) {
        super();
        ce(this, Tn);
        this.config = e,
        Z(this, Tn, new Map)
    }
    build(e, n, i) {
        const o = n.queryKey
          , l = n.queryHash ?? $f(o, n);
        let u = this.get(l);
        return u || (u = new Fk({
            client: e,
            queryKey: o,
            queryHash: l,
            options: e.defaultQueryOptions(n),
            state: i,
            defaultOptions: e.getQueryDefaults(o)
        }),
        this.add(u)),
        u
    }
    add(e) {
        R(this, Tn).has(e.queryHash) || (R(this, Tn).set(e.queryHash, e),
        this.notify({
            type: "added",
            query: e
        }))
    }
    remove(e) {
        const n = R(this, Tn).get(e.queryHash);
        n && (e.destroy(),
        n === e && R(this, Tn).delete(e.queryHash),
        this.notify({
            type: "removed",
            query: e
        }))
    }
    clear() {
        pt.batch( () => {
            this.getAll().forEach(e => {
                this.remove(e)
            }
            )
        }
        )
    }
    get(e) {
        return R(this, Tn).get(e)
    }
    getAll() {
        return [...R(this, Tn).values()]
    }
    find(e) {
        const n = {
            exact: !0,
            ...e
        };
        return this.getAll().find(i => my(n, i))
    }
    findAll(e={}) {
        const n = this.getAll();
        return Object.keys(e).length > 0 ? n.filter(i => my(e, i)) : n
    }
    notify(e) {
        pt.batch( () => {
            this.listeners.forEach(n => {
                n(e)
            }
            )
        }
        )
    }
    onFocus() {
        pt.batch( () => {
            this.getAll().forEach(e => {
                e.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        pt.batch( () => {
            this.getAll().forEach(e => {
                e.onOnline()
            }
            )
        }
        )
    }
}
,
Tn = new WeakMap,
B0), qe, Rr, Ar, hi, pi, Nr, mi, gi, z0, Kk = (z0 = class {
    constructor(t={}) {
        ce(this, qe);
        ce(this, Rr);
        ce(this, Ar);
        ce(this, hi);
        ce(this, pi);
        ce(this, Nr);
        ce(this, mi);
        ce(this, gi);
        Z(this, qe, t.queryCache || new qk),
        Z(this, Rr, t.mutationCache || new Wk),
        Z(this, Ar, t.defaultOptions || {}),
        Z(this, hi, new Map),
        Z(this, pi, new Map),
        Z(this, Nr, 0)
    }
    mount() {
        hl(this, Nr)._++,
        R(this, Nr) === 1 && (Z(this, mi, Wf.subscribe(async t => {
            t && (await this.resumePausedMutations(),
            R(this, qe).onFocus())
        }
        )),
        Z(this, gi, Vl.subscribe(async t => {
            t && (await this.resumePausedMutations(),
            R(this, qe).onOnline())
        }
        )))
    }
    unmount() {
        var t, e;
        hl(this, Nr)._--,
        R(this, Nr) === 0 && ((t = R(this, mi)) == null || t.call(this),
        Z(this, mi, void 0),
        (e = R(this, gi)) == null || e.call(this),
        Z(this, gi, void 0))
    }
    isFetching(t) {
        return R(this, qe).findAll({
            ...t,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(t) {
        return R(this, Rr).findAll({
            ...t,
            status: "pending"
        }).length
    }
    getQueryData(t) {
        var n;
        const e = this.defaultQueryOptions({
            queryKey: t
        });
        return (n = R(this, qe).get(e.queryHash)) == null ? void 0 : n.state.data
    }
    ensureQueryData(t) {
        const e = this.defaultQueryOptions(t)
          , n = R(this, qe).build(this, e)
          , i = n.state.data;
        return i === void 0 ? this.fetchQuery(t) : (t.revalidateIfStale && n.isStaleByTime(jr(e.staleTime, n)) && this.prefetchQuery(e),
        Promise.resolve(i))
    }
    getQueriesData(t) {
        return R(this, qe).findAll(t).map( ({queryKey: e, state: n}) => {
            const i = n.data;
            return [e, i]
        }
        )
    }
    setQueryData(t, e, n) {
        const i = this.defaultQueryOptions({
            queryKey: t
        })
          , o = R(this, qe).get(i.queryHash)
          , l = o == null ? void 0 : o.state.data
          , u = Pk(e, l);
        if (u !== void 0)
            return R(this, qe).build(this, i).setData(u, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(t, e, n) {
        return pt.batch( () => R(this, qe).findAll(t).map( ({queryKey: i}) => [i, this.setQueryData(i, e, n)]))
    }
    getQueryState(t) {
        var n;
        const e = this.defaultQueryOptions({
            queryKey: t
        });
        return (n = R(this, qe).get(e.queryHash)) == null ? void 0 : n.state
    }
    removeQueries(t) {
        const e = R(this, qe);
        pt.batch( () => {
            e.findAll(t).forEach(n => {
                e.remove(n)
            }
            )
        }
        )
    }
    resetQueries(t, e) {
        const n = R(this, qe);
        return pt.batch( () => (n.findAll(t).forEach(i => {
            i.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...t
        }, e)))
    }
    cancelQueries(t, e={}) {
        const n = {
            revert: !0,
            ...e
        }
          , i = pt.batch( () => R(this, qe).findAll(t).map(o => o.cancel(n)));
        return Promise.all(i).then(Lt).catch(Lt)
    }
    invalidateQueries(t, e={}) {
        return pt.batch( () => (R(this, qe).findAll(t).forEach(n => {
            n.invalidate()
        }
        ),
        (t == null ? void 0 : t.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
            ...t,
            type: (t == null ? void 0 : t.refetchType) ?? (t == null ? void 0 : t.type) ?? "active"
        }, e)))
    }
    refetchQueries(t, e={}) {
        const n = {
            ...e,
            cancelRefetch: e.cancelRefetch ?? !0
        }
          , i = pt.batch( () => R(this, qe).findAll(t).filter(o => !o.isDisabled() && !o.isStatic()).map(o => {
            let l = o.fetch(void 0, n);
            return n.throwOnError || (l = l.catch(Lt)),
            o.state.fetchStatus === "paused" ? Promise.resolve() : l
        }
        ));
        return Promise.all(i).then(Lt)
    }
    fetchQuery(t) {
        const e = this.defaultQueryOptions(t);
        e.retry === void 0 && (e.retry = !1);
        const n = R(this, qe).build(this, e);
        return n.isStaleByTime(jr(e.staleTime, n)) ? n.fetch(e) : Promise.resolve(n.state.data)
    }
    prefetchQuery(t) {
        return this.fetchQuery(t).then(Lt).catch(Lt)
    }
    fetchInfiniteQuery(t) {
        return t.behavior = Cy(t.pages),
        this.fetchQuery(t)
    }
    prefetchInfiniteQuery(t) {
        return this.fetchInfiniteQuery(t).then(Lt).catch(Lt)
    }
    ensureInfiniteQueryData(t) {
        return t.behavior = Cy(t.pages),
        this.ensureQueryData(t)
    }
    resumePausedMutations() {
        return Vl.isOnline() ? R(this, Rr).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return R(this, qe)
    }
    getMutationCache() {
        return R(this, Rr)
    }
    getDefaultOptions() {
        return R(this, Ar)
    }
    setDefaultOptions(t) {
        Z(this, Ar, t)
    }
    setQueryDefaults(t, e) {
        R(this, hi).set(Mo(t), {
            queryKey: t,
            defaultOptions: e
        })
    }
    getQueryDefaults(t) {
        const e = [...R(this, hi).values()]
          , n = {};
        return e.forEach(i => {
            Do(t, i.queryKey) && Object.assign(n, i.defaultOptions)
        }
        ),
        n
    }
    setMutationDefaults(t, e) {
        R(this, pi).set(Mo(t), {
            mutationKey: t,
            defaultOptions: e
        })
    }
    getMutationDefaults(t) {
        const e = [...R(this, pi).values()]
          , n = {};
        return e.forEach(i => {
            Do(t, i.mutationKey) && Object.assign(n, i.defaultOptions)
        }
        ),
        n
    }
    defaultQueryOptions(t) {
        if (t._defaulted)
            return t;
        const e = {
            ...R(this, Ar).queries,
            ...this.getQueryDefaults(t.queryKey),
            ...t,
            _defaulted: !0
        };
        return e.queryHash || (e.queryHash = $f(e.queryKey, e)),
        e.refetchOnReconnect === void 0 && (e.refetchOnReconnect = e.networkMode !== "always"),
        e.throwOnError === void 0 && (e.throwOnError = !!e.suspense),
        !e.networkMode && e.persister && (e.networkMode = "offlineFirst"),
        e.queryFn === Hf && (e.enabled = !1),
        e
    }
    defaultMutationOptions(t) {
        return t != null && t._defaulted ? t : {
            ...R(this, Ar).mutations,
            ...(t == null ? void 0 : t.mutationKey) && this.getMutationDefaults(t.mutationKey),
            ...t,
            _defaulted: !0
        }
    }
    clear() {
        R(this, qe).clear(),
        R(this, Rr).clear()
    }
}
,
qe = new WeakMap,
Rr = new WeakMap,
Ar = new WeakMap,
hi = new WeakMap,
pi = new WeakMap,
Nr = new WeakMap,
mi = new WeakMap,
gi = new WeakMap,
z0), Tw = E.createContext(void 0), Qk = t => {
    const e = E.useContext(Tw);
    if (!e)
        throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return e
}
, Gk = ({client: t, children: e}) => (E.useEffect( () => (t.mount(),
() => {
    t.unmount()
}
), [t]),
x.jsx(Tw.Provider, {
    value: t,
    children: e
})), Pw = E.createContext(!1), Yk = () => E.useContext(Pw);
Pw.Provider;
function Xk() {
    let t = !1;
    return {
        clearReset: () => {
            t = !1
        }
        ,
        reset: () => {
            t = !0
        }
        ,
        isReset: () => t
    }
}
var Jk = E.createContext(Xk())
  , Zk = () => E.useContext(Jk)
  , eT = (t, e, n) => {
    const i = n != null && n.state.error && typeof t.throwOnError == "function" ? xw(t.throwOnError, [n.state.error, n]) : t.throwOnError;
    (t.suspense || t.experimental_prefetchInRender || i) && (e.isReset() || (t.retryOnMount = !1))
}
  , tT = t => {
    E.useEffect( () => {
        t.clearReset()
    }
    , [t])
}
  , nT = ({result: t, errorResetBoundary: e, throwOnError: n, query: i, suspense: o}) => t.isError && !e.isReset() && !t.isFetching && i && (o && t.data === void 0 || xw(n, [t.error, i]))
  , rT = t => {
    if (t.suspense) {
        const n = o => o === "static" ? o : Math.max(o ?? 1e3, 1e3)
          , i = t.staleTime;
        t.staleTime = typeof i == "function" ? (...o) => n(i(...o)) : n(i),
        typeof t.gcTime == "number" && (t.gcTime = Math.max(t.gcTime, 1e3))
    }
}
  , sT = (t, e) => t.isLoading && t.isFetching && !e
  , iT = (t, e) => (t == null ? void 0 : t.suspense) && e.isPending
  , ky = (t, e, n) => e.fetchOptimistic(t).catch( () => {
    n.clearReset()
}
);
function oT(t, e, n) {
    var w, C, b, k;
    const i = Yk()
      , o = Zk()
      , l = Qk()
      , u = l.defaultQueryOptions(t);
    (C = (w = l.getDefaultOptions().queries) == null ? void 0 : w._experimental_beforeQuery) == null || C.call(w, u);
    const d = l.getQueryCache().get(u.queryHash);
    u._optimisticResults = i ? "isRestoring" : "optimistic",
    rT(u),
    eT(u, o, d),
    tT(o);
    const f = !l.getQueryCache().get(u.queryHash)
      , [p] = E.useState( () => new e(l,u))
      , m = p.getOptimisticResult(u)
      , y = !i && t.subscribed !== !1;
    if (E.useSyncExternalStore(E.useCallback(S => {
        const P = y ? p.subscribe(pt.batchCalls(S)) : Lt;
        return p.updateResult(),
        P
    }
    , [p, y]), () => p.getCurrentResult(), () => p.getCurrentResult()),
    E.useEffect( () => {
        p.setOptions(u)
    }
    , [u, p]),
    iT(u, m))
        throw ky(u, p, o);
    if (nT({
        result: m,
        errorResetBoundary: o,
        throwOnError: u.throwOnError,
        query: d,
        suspense: u.suspense
    }))
        throw m.error;
    if ((k = (b = l.getDefaultOptions().queries) == null ? void 0 : b._experimental_afterQuery) == null || k.call(b, u, m),
    u.experimental_prefetchInRender && !Ss && sT(m, i)) {
        const S = f ? ky(u, p, o) : d == null ? void 0 : d.promise;
        S == null || S.catch(Lt).finally( () => {
            p.updateResult()
        }
        )
    }
    return u.notifyOnChangeProps ? m : p.trackResult(m)
}
function bs(t, e) {
    return oT(t, Vk)
}
const aT = new Kk({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: !1,
            retry: 1
        }
    }
});
H0();
/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Io() {
    return Io = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }
    ,
    Io.apply(this, arguments)
}
var Or;
(function(t) {
    t.Pop = "POP",
    t.Push = "PUSH",
    t.Replace = "REPLACE"
}
)(Or || (Or = {}));
const Ty = "popstate";
function lT(t) {
    t === void 0 && (t = {});
    function e(i, o) {
        let {pathname: l, search: u, hash: d} = i.location;
        return lf("", {
            pathname: l,
            search: u,
            hash: d
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }
    function n(i, o) {
        return typeof o == "string" ? o : Ul(o)
    }
    return cT(e, n, null, t)
}
function Ze(t, e) {
    if (t === !1 || t === null || typeof t > "u")
        throw new Error(e)
}
function Kf(t, e) {
    if (!t) {
        typeof console < "u" && console.warn(e);
        try {
            throw new Error(e)
        } catch {}
    }
}
function uT() {
    return Math.random().toString(36).substr(2, 8)
}
function Py(t, e) {
    return {
        usr: t.state,
        key: t.key,
        idx: e
    }
}
function lf(t, e, n, i) {
    return n === void 0 && (n = null),
    Io({
        pathname: typeof t == "string" ? t : t.pathname,
        search: "",
        hash: ""
    }, typeof e == "string" ? Ci(e) : e, {
        state: n,
        key: e && e.key || i || uT()
    })
}
function Ul(t) {
    let {pathname: e="/", search: n="", hash: i=""} = t;
    return n && n !== "?" && (e += n.charAt(0) === "?" ? n : "?" + n),
    i && i !== "#" && (e += i.charAt(0) === "#" ? i : "#" + i),
    e
}
function Ci(t) {
    let e = {};
    if (t) {
        let n = t.indexOf("#");
        n >= 0 && (e.hash = t.substr(n),
        t = t.substr(0, n));
        let i = t.indexOf("?");
        i >= 0 && (e.search = t.substr(i),
        t = t.substr(0, i)),
        t && (e.pathname = t)
    }
    return e
}
function cT(t, e, n, i) {
    i === void 0 && (i = {});
    let {window: o=document.defaultView, v5Compat: l=!1} = i
      , u = o.history
      , d = Or.Pop
      , f = null
      , p = m();
    p == null && (p = 0,
    u.replaceState(Io({}, u.state, {
        idx: p
    }), ""));
    function m() {
        return (u.state || {
            idx: null
        }).idx
    }
    function y() {
        d = Or.Pop;
        let S = m()
          , P = S == null ? null : S - p;
        p = S,
        f && f({
            action: d,
            location: k.location,
            delta: P
        })
    }
    function w(S, P) {
        d = Or.Push;
        let L = lf(k.location, S, P);
        p = m() + 1;
        let j = Py(L, p)
          , N = k.createHref(L);
        try {
            u.pushState(j, "", N)
        } catch (V) {
            if (V instanceof DOMException && V.name === "DataCloneError")
                throw V;
            o.location.assign(N)
        }
        l && f && f({
            action: d,
            location: k.location,
            delta: 1
        })
    }
    function C(S, P) {
        d = Or.Replace;
        let L = lf(k.location, S, P);
        p = m();
        let j = Py(L, p)
          , N = k.createHref(L);
        u.replaceState(j, "", N),
        l && f && f({
            action: d,
            location: k.location,
            delta: 0
        })
    }
    function b(S) {
        let P = o.location.origin !== "null" ? o.location.origin : o.location.href
          , L = typeof S == "string" ? S : Ul(S);
        return L = L.replace(/ $/, "%20"),
        Ze(P, "No window.location.(origin|href) available to create URL for href: " + L),
        new URL(L,P)
    }
    let k = {
        get action() {
            return d
        },
        get location() {
            return t(o, u)
        },
        listen(S) {
            if (f)
                throw new Error("A history only accepts one active listener");
            return o.addEventListener(Ty, y),
            f = S,
            () => {
                o.removeEventListener(Ty, y),
                f = null
            }
        },
        createHref(S) {
            return e(o, S)
        },
        createURL: b,
        encodeLocation(S) {
            let P = b(S);
            return {
                pathname: P.pathname,
                search: P.search,
                hash: P.hash
            }
        },
        push: w,
        replace: C,
        go(S) {
            return u.go(S)
        }
    };
    return k
}
var _y;
(function(t) {
    t.data = "data",
    t.deferred = "deferred",
    t.redirect = "redirect",
    t.error = "error"
}
)(_y || (_y = {}));
function dT(t, e, n) {
    return n === void 0 && (n = "/"),
    fT(t, e, n)
}
function fT(t, e, n, i) {
    let o = typeof e == "string" ? Ci(e) : e
      , l = Qf(o.pathname || "/", n);
    if (l == null)
        return null;
    let u = _w(t);
    hT(u);
    let d = null;
    for (let f = 0; d == null && f < u.length; ++f) {
        let p = kT(l);
        d = bT(u[f], p)
    }
    return d
}
function _w(t, e, n, i) {
    e === void 0 && (e = []),
    n === void 0 && (n = []),
    i === void 0 && (i = "");
    let o = (l, u, d) => {
        let f = {
            relativePath: d === void 0 ? l.path || "" : d,
            caseSensitive: l.caseSensitive === !0,
            childrenIndex: u,
            route: l
        };
        f.relativePath.startsWith("/") && (Ze(f.relativePath.startsWith(i), 'Absolute route path "' + f.relativePath + '" nested under path ' + ('"' + i + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        f.relativePath = f.relativePath.slice(i.length));
        let p = Lr([i, f.relativePath])
          , m = n.concat(f);
        l.children && l.children.length > 0 && (Ze(l.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + p + '".')),
        _w(l.children, e, m, p)),
        !(l.path == null && !l.index) && e.push({
            path: p,
            score: xT(p, l.index),
            routesMeta: m
        })
    }
    ;
    return t.forEach( (l, u) => {
        var d;
        if (l.path === "" || !((d = l.path) != null && d.includes("?")))
            o(l, u);
        else
            for (let f of Rw(l.path))
                o(l, u, f)
    }
    ),
    e
}
function Rw(t) {
    let e = t.split("/");
    if (e.length === 0)
        return [];
    let[n,...i] = e
      , o = n.endsWith("?")
      , l = n.replace(/\?$/, "");
    if (i.length === 0)
        return o ? [l, ""] : [l];
    let u = Rw(i.join("/"))
      , d = [];
    return d.push(...u.map(f => f === "" ? l : [l, f].join("/"))),
    o && d.push(...u),
    d.map(f => t.startsWith("/") && f === "" ? "/" : f)
}
function hT(t) {
    t.sort( (e, n) => e.score !== n.score ? n.score - e.score : ST(e.routesMeta.map(i => i.childrenIndex), n.routesMeta.map(i => i.childrenIndex)))
}
const pT = /^:[\w-]+$/
  , mT = 3
  , gT = 2
  , yT = 1
  , vT = 10
  , wT = -2
  , Ry = t => t === "*";
function xT(t, e) {
    let n = t.split("/")
      , i = n.length;
    return n.some(Ry) && (i += wT),
    e && (i += gT),
    n.filter(o => !Ry(o)).reduce( (o, l) => o + (pT.test(l) ? mT : l === "" ? yT : vT), i)
}
function ST(t, e) {
    return t.length === e.length && t.slice(0, -1).every( (i, o) => i === e[o]) ? t[t.length - 1] - e[e.length - 1] : 0
}
function bT(t, e, n) {
    let {routesMeta: i} = t
      , o = {}
      , l = "/"
      , u = [];
    for (let d = 0; d < i.length; ++d) {
        let f = i[d]
          , p = d === i.length - 1
          , m = l === "/" ? e : e.slice(l.length) || "/"
          , y = CT({
            path: f.relativePath,
            caseSensitive: f.caseSensitive,
            end: p
        }, m)
          , w = f.route;
        if (!y)
            return null;
        Object.assign(o, y.params),
        u.push({
            params: o,
            pathname: Lr([l, y.pathname]),
            pathnameBase: AT(Lr([l, y.pathnameBase])),
            route: w
        }),
        y.pathnameBase !== "/" && (l = Lr([l, y.pathnameBase]))
    }
    return u
}
function CT(t, e) {
    typeof t == "string" && (t = {
        path: t,
        caseSensitive: !1,
        end: !0
    });
    let[n,i] = ET(t.path, t.caseSensitive, t.end)
      , o = e.match(n);
    if (!o)
        return null;
    let l = o[0]
      , u = l.replace(/(.)\/+$/, "$1")
      , d = o.slice(1);
    return {
        params: i.reduce( (p, m, y) => {
            let {paramName: w, isOptional: C} = m;
            if (w === "*") {
                let k = d[y] || "";
                u = l.slice(0, l.length - k.length).replace(/(.)\/+$/, "$1")
            }
            const b = d[y];
            return C && !b ? p[w] = void 0 : p[w] = (b || "").replace(/%2F/g, "/"),
            p
        }
        , {}),
        pathname: l,
        pathnameBase: u,
        pattern: t
    }
}
function ET(t, e, n) {
    e === void 0 && (e = !1),
    n === void 0 && (n = !0),
    Kf(t === "*" || !t.endsWith("*") || t.endsWith("/*"), 'Route path "' + t + '" will be treated as if it were ' + ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + t.replace(/\*$/, "/*") + '".'));
    let i = []
      , o = "^" + t.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (u, d, f) => (i.push({
        paramName: d,
        isOptional: f != null
    }),
    f ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return t.endsWith("*") ? (i.push({
        paramName: "*"
    }),
    o += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : t !== "" && t !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o,e ? void 0 : "i"), i]
}
function kT(t) {
    try {
        return t.split("/").map(e => decodeURIComponent(e).replace(/\//g, "%2F")).join("/")
    } catch (e) {
        return Kf(!1, 'The URL path "' + t + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + e + ").")),
        t
    }
}
function Qf(t, e) {
    if (e === "/")
        return t;
    if (!t.toLowerCase().startsWith(e.toLowerCase()))
        return null;
    let n = e.endsWith("/") ? e.length - 1 : e.length
      , i = t.charAt(n);
    return i && i !== "/" ? null : t.slice(n) || "/"
}
const TT = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , PT = t => TT.test(t);
function _T(t, e) {
    e === void 0 && (e = "/");
    let {pathname: n, search: i="", hash: o=""} = typeof t == "string" ? Ci(t) : t, l;
    if (n)
        if (PT(n))
            l = n;
        else {
            if (n.includes("//")) {
                let u = n;
                n = n.replace(/\/\/+/g, "/"),
                Kf(!1, "Pathnames cannot have embedded double slashes - normalizing " + (u + " -> " + n))
            }
            n.startsWith("/") ? l = Ay(n.substring(1), "/") : l = Ay(n, e)
        }
    else
        l = e;
    return {
        pathname: l,
        search: NT(i),
        hash: OT(o)
    }
}
function Ay(t, e) {
    let n = e.replace(/\/+$/, "").split("/");
    return t.split("/").forEach(o => {
        o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function Sd(t, e, n, i) {
    return "Cannot include a '" + t + "' character in a manually specified " + ("`to." + e + "` field [" + JSON.stringify(i) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function RT(t) {
    return t.filter( (e, n) => n === 0 || e.route.path && e.route.path.length > 0)
}
function Gf(t, e) {
    let n = RT(t);
    return e ? n.map( (i, o) => o === n.length - 1 ? i.pathname : i.pathnameBase) : n.map(i => i.pathnameBase)
}
function Yf(t, e, n, i) {
    i === void 0 && (i = !1);
    let o;
    typeof t == "string" ? o = Ci(t) : (o = Io({}, t),
    Ze(!o.pathname || !o.pathname.includes("?"), Sd("?", "pathname", "search", o)),
    Ze(!o.pathname || !o.pathname.includes("#"), Sd("#", "pathname", "hash", o)),
    Ze(!o.search || !o.search.includes("#"), Sd("#", "search", "hash", o)));
    let l = t === "" || o.pathname === "", u = l ? "/" : o.pathname, d;
    if (u == null)
        d = n;
    else {
        let y = e.length - 1;
        if (!i && u.startsWith("..")) {
            let w = u.split("/");
            for (; w[0] === ".."; )
                w.shift(),
                y -= 1;
            o.pathname = w.join("/")
        }
        d = y >= 0 ? e[y] : "/"
    }
    let f = _T(o, d)
      , p = u && u !== "/" && u.endsWith("/")
      , m = (l || u === ".") && n.endsWith("/");
    return !f.pathname.endsWith("/") && (p || m) && (f.pathname += "/"),
    f
}
const Lr = t => t.join("/").replace(/\/\/+/g, "/")
  , AT = t => t.replace(/\/+$/, "").replace(/^\/*/, "/")
  , NT = t => !t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t
  , OT = t => !t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t;
function jT(t) {
    return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.internal == "boolean" && "data"in t
}
const Aw = ["post", "put", "patch", "delete"];
new Set(Aw);
const LT = ["get", ...Aw];
new Set(LT);
/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Fo() {
    return Fo = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }
    ,
    Fo.apply(this, arguments)
}
const Xf = E.createContext(null)
  , MT = E.createContext(null)
  , Vr = E.createContext(null)
  , eu = E.createContext(null)
  , Jn = E.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , Nw = E.createContext(null);
function DT(t, e) {
    let {relative: n} = e === void 0 ? {} : e;
    Ei() || Ze(!1);
    let {basename: i, navigator: o} = E.useContext(Vr)
      , {hash: l, pathname: u, search: d} = jw(t, {
        relative: n
    })
      , f = u;
    return i !== "/" && (f = u === "/" ? i : Lr([i, u])),
    o.createHref({
        pathname: f,
        search: d,
        hash: l
    })
}
function Ei() {
    return E.useContext(eu) != null
}
function Ts() {
    return Ei() || Ze(!1),
    E.useContext(eu).location
}
function Ow(t) {
    E.useContext(Vr).static || E.useLayoutEffect(t)
}
function Jf() {
    let {isDataRoute: t} = E.useContext(Jn);
    return t ? XT() : IT()
}
function IT() {
    Ei() || Ze(!1);
    let t = E.useContext(Xf)
      , {basename: e, future: n, navigator: i} = E.useContext(Vr)
      , {matches: o} = E.useContext(Jn)
      , {pathname: l} = Ts()
      , u = JSON.stringify(Gf(o, n.v7_relativeSplatPath))
      , d = E.useRef(!1);
    return Ow( () => {
        d.current = !0
    }
    ),
    E.useCallback(function(p, m) {
        if (m === void 0 && (m = {}),
        !d.current)
            return;
        if (typeof p == "number") {
            i.go(p);
            return
        }
        let y = Yf(p, JSON.parse(u), l, m.relative === "path");
        t == null && e !== "/" && (y.pathname = y.pathname === "/" ? e : Lr([e, y.pathname])),
        (m.replace ? i.replace : i.push)(y, m.state, m)
    }, [e, i, u, l, t])
}
const FT = E.createContext(null);
function VT(t) {
    let e = E.useContext(Jn).outlet;
    return e && E.createElement(FT.Provider, {
        value: t
    }, e)
}
function jw(t, e) {
    let {relative: n} = e === void 0 ? {} : e
      , {future: i} = E.useContext(Vr)
      , {matches: o} = E.useContext(Jn)
      , {pathname: l} = Ts()
      , u = JSON.stringify(Gf(o, i.v7_relativeSplatPath));
    return E.useMemo( () => Yf(t, JSON.parse(u), l, n === "path"), [t, u, l, n])
}
function UT(t, e) {
    return BT(t, e)
}
function BT(t, e, n, i) {
    Ei() || Ze(!1);
    let {navigator: o} = E.useContext(Vr)
      , {matches: l} = E.useContext(Jn)
      , u = l[l.length - 1]
      , d = u ? u.params : {};
    u && u.pathname;
    let f = u ? u.pathnameBase : "/";
    u && u.route;
    let p = Ts(), m;
    if (e) {
        var y;
        let S = typeof e == "string" ? Ci(e) : e;
        f === "/" || (y = S.pathname) != null && y.startsWith(f) || Ze(!1),
        m = S
    } else
        m = p;
    let w = m.pathname || "/"
      , C = w;
    if (f !== "/") {
        let S = f.replace(/^\//, "").split("/");
        C = "/" + w.replace(/^\//, "").split("/").slice(S.length).join("/")
    }
    let b = dT(t, {
        pathname: C
    })
      , k = qT(b && b.map(S => Object.assign({}, S, {
        params: Object.assign({}, d, S.params),
        pathname: Lr([f, o.encodeLocation ? o.encodeLocation(S.pathname).pathname : S.pathname]),
        pathnameBase: S.pathnameBase === "/" ? f : Lr([f, o.encodeLocation ? o.encodeLocation(S.pathnameBase).pathname : S.pathnameBase])
    })), l, n, i);
    return e && k ? E.createElement(eu.Provider, {
        value: {
            location: Fo({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, m),
            navigationType: Or.Pop
        }
    }, k) : k
}
function zT() {
    let t = YT()
      , e = jT(t) ? t.status + " " + t.statusText : t instanceof Error ? t.message : JSON.stringify(t)
      , n = t instanceof Error ? t.stack : null
      , o = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return E.createElement(E.Fragment, null, E.createElement("h2", null, "Unexpected Application Error!"), E.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, e), n ? E.createElement("pre", {
        style: o
    }, n) : null, null)
}
const $T = E.createElement(zT, null);
class HT extends E.Component {
    constructor(e) {
        super(e),
        this.state = {
            location: e.location,
            revalidation: e.revalidation,
            error: e.error
        }
    }
    static getDerivedStateFromError(e) {
        return {
            error: e
        }
    }
    static getDerivedStateFromProps(e, n) {
        return n.location !== e.location || n.revalidation !== "idle" && e.revalidation === "idle" ? {
            error: e.error,
            location: e.location,
            revalidation: e.revalidation
        } : {
            error: e.error !== void 0 ? e.error : n.error,
            location: n.location,
            revalidation: e.revalidation || n.revalidation
        }
    }
    componentDidCatch(e, n) {
        console.error("React Router caught the following error during render", e, n)
    }
    render() {
        return this.state.error !== void 0 ? E.createElement(Jn.Provider, {
            value: this.props.routeContext
        }, E.createElement(Nw.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function WT(t) {
    let {routeContext: e, match: n, children: i} = t
      , o = E.useContext(Xf);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    E.createElement(Jn.Provider, {
        value: e
    }, i)
}
function qT(t, e, n, i) {
    var o;
    if (e === void 0 && (e = []),
    n === void 0 && (n = null),
    i === void 0 && (i = null),
    t == null) {
        var l;
        if (!n)
            return null;
        if (n.errors)
            t = n.matches;
        else if ((l = i) != null && l.v7_partialHydration && e.length === 0 && !n.initialized && n.matches.length > 0)
            t = n.matches;
        else
            return null
    }
    let u = t
      , d = (o = n) == null ? void 0 : o.errors;
    if (d != null) {
        let m = u.findIndex(y => y.route.id && (d == null ? void 0 : d[y.route.id]) !== void 0);
        m >= 0 || Ze(!1),
        u = u.slice(0, Math.min(u.length, m + 1))
    }
    let f = !1
      , p = -1;
    if (n && i && i.v7_partialHydration)
        for (let m = 0; m < u.length; m++) {
            let y = u[m];
            if ((y.route.HydrateFallback || y.route.hydrateFallbackElement) && (p = m),
            y.route.id) {
                let {loaderData: w, errors: C} = n
                  , b = y.route.loader && w[y.route.id] === void 0 && (!C || C[y.route.id] === void 0);
                if (y.route.lazy || b) {
                    f = !0,
                    p >= 0 ? u = u.slice(0, p + 1) : u = [u[0]];
                    break
                }
            }
        }
    return u.reduceRight( (m, y, w) => {
        let C, b = !1, k = null, S = null;
        n && (C = d && y.route.id ? d[y.route.id] : void 0,
        k = y.route.errorElement || $T,
        f && (p < 0 && w === 0 ? (JT("route-fallback"),
        b = !0,
        S = null) : p === w && (b = !0,
        S = y.route.hydrateFallbackElement || null)));
        let P = e.concat(u.slice(0, w + 1))
          , L = () => {
            let j;
            return C ? j = k : b ? j = S : y.route.Component ? j = E.createElement(y.route.Component, null) : y.route.element ? j = y.route.element : j = m,
            E.createElement(WT, {
                match: y,
                routeContext: {
                    outlet: m,
                    matches: P,
                    isDataRoute: n != null
                },
                children: j
            })
        }
        ;
        return n && (y.route.ErrorBoundary || y.route.errorElement || w === 0) ? E.createElement(HT, {
            location: n.location,
            revalidation: n.revalidation,
            component: k,
            error: C,
            children: L(),
            routeContext: {
                outlet: null,
                matches: P,
                isDataRoute: !0
            }
        }) : L()
    }
    , null)
}
var Lw = (function(t) {
    return t.UseBlocker = "useBlocker",
    t.UseRevalidator = "useRevalidator",
    t.UseNavigateStable = "useNavigate",
    t
}
)(Lw || {})
  , Mw = (function(t) {
    return t.UseBlocker = "useBlocker",
    t.UseLoaderData = "useLoaderData",
    t.UseActionData = "useActionData",
    t.UseRouteError = "useRouteError",
    t.UseNavigation = "useNavigation",
    t.UseRouteLoaderData = "useRouteLoaderData",
    t.UseMatches = "useMatches",
    t.UseRevalidator = "useRevalidator",
    t.UseNavigateStable = "useNavigate",
    t.UseRouteId = "useRouteId",
    t
}
)(Mw || {});
function KT(t) {
    let e = E.useContext(Xf);
    return e || Ze(!1),
    e
}
function QT(t) {
    let e = E.useContext(MT);
    return e || Ze(!1),
    e
}
function GT(t) {
    let e = E.useContext(Jn);
    return e || Ze(!1),
    e
}
function Dw(t) {
    let e = GT()
      , n = e.matches[e.matches.length - 1];
    return n.route.id || Ze(!1),
    n.route.id
}
function YT() {
    var t;
    let e = E.useContext(Nw)
      , n = QT()
      , i = Dw();
    return e !== void 0 ? e : (t = n.errors) == null ? void 0 : t[i]
}
function XT() {
    let {router: t} = KT(Lw.UseNavigateStable)
      , e = Dw(Mw.UseNavigateStable)
      , n = E.useRef(!1);
    return Ow( () => {
        n.current = !0
    }
    ),
    E.useCallback(function(o, l) {
        l === void 0 && (l = {}),
        n.current && (typeof o == "number" ? t.navigate(o) : t.navigate(o, Fo({
            fromRouteId: e
        }, l)))
    }, [t, e])
}
const Ny = {};
function JT(t, e, n) {
    Ny[t] || (Ny[t] = !0)
}
function ZT(t, e) {
    t == null || t.v7_startTransition,
    t == null || t.v7_relativeSplatPath
}
function eP(t) {
    let {to: e, replace: n, state: i, relative: o} = t;
    Ei() || Ze(!1);
    let {future: l, static: u} = E.useContext(Vr)
      , {matches: d} = E.useContext(Jn)
      , {pathname: f} = Ts()
      , p = Jf()
      , m = Yf(e, Gf(d, l.v7_relativeSplatPath), f, o === "path")
      , y = JSON.stringify(m);
    return E.useEffect( () => p(JSON.parse(y), {
        replace: n,
        state: i,
        relative: o
    }), [p, y, o, n, i]),
    null
}
function tP(t) {
    return VT(t.context)
}
function rs(t) {
    Ze(!1)
}
function nP(t) {
    let {basename: e="/", children: n=null, location: i, navigationType: o=Or.Pop, navigator: l, static: u=!1, future: d} = t;
    Ei() && Ze(!1);
    let f = e.replace(/^\/*/, "/")
      , p = E.useMemo( () => ({
        basename: f,
        navigator: l,
        static: u,
        future: Fo({
            v7_relativeSplatPath: !1
        }, d)
    }), [f, d, l, u]);
    typeof i == "string" && (i = Ci(i));
    let {pathname: m="/", search: y="", hash: w="", state: C=null, key: b="default"} = i
      , k = E.useMemo( () => {
        let S = Qf(m, f);
        return S == null ? null : {
            location: {
                pathname: S,
                search: y,
                hash: w,
                state: C,
                key: b
            },
            navigationType: o
        }
    }
    , [f, m, y, w, C, b, o]);
    return k == null ? null : E.createElement(Vr.Provider, {
        value: p
    }, E.createElement(eu.Provider, {
        children: n,
        value: k
    }))
}
function rP(t) {
    let {children: e, location: n} = t;
    return UT(uf(e), n)
}
new Promise( () => {}
);
function uf(t, e) {
    e === void 0 && (e = []);
    let n = [];
    return E.Children.forEach(t, (i, o) => {
        if (!E.isValidElement(i))
            return;
        let l = [...e, o];
        if (i.type === E.Fragment) {
            n.push.apply(n, uf(i.props.children, l));
            return
        }
        i.type !== rs && Ze(!1),
        !i.props.index || !i.props.children || Ze(!1);
        let u = {
            id: i.props.id || l.join("-"),
            caseSensitive: i.props.caseSensitive,
            element: i.props.element,
            Component: i.props.Component,
            index: i.props.index,
            path: i.props.path,
            loader: i.props.loader,
            action: i.props.action,
            errorElement: i.props.errorElement,
            ErrorBoundary: i.props.ErrorBoundary,
            hasErrorBoundary: i.props.ErrorBoundary != null || i.props.errorElement != null,
            shouldRevalidate: i.props.shouldRevalidate,
            handle: i.props.handle,
            lazy: i.props.lazy
        };
        i.props.children && (u.children = uf(i.props.children, l)),
        n.push(u)
    }
    ),
    n
}
/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function cf() {
    return cf = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }
    ,
    cf.apply(this, arguments)
}
function sP(t, e) {
    if (t == null)
        return {};
    var n = {}, i = Object.keys(t), o, l;
    for (l = 0; l < i.length; l++)
        o = i[l],
        !(e.indexOf(o) >= 0) && (n[o] = t[o]);
    return n
}
function iP(t) {
    return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey)
}
function oP(t, e) {
    return t.button === 0 && (!e || e === "_self") && !iP(t)
}
const aP = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"]
  , lP = "6";
try {
    window.__reactRouterVersion = lP
} catch {}
const uP = "startTransition"
  , Oy = Uf[uP];
function cP(t) {
    let {basename: e, children: n, future: i, window: o} = t
      , l = E.useRef();
    l.current == null && (l.current = lT({
        window: o,
        v5Compat: !0
    }));
    let u = l.current
      , [d,f] = E.useState({
        action: u.action,
        location: u.location
    })
      , {v7_startTransition: p} = i || {}
      , m = E.useCallback(y => {
        p && Oy ? Oy( () => f(y)) : f(y)
    }
    , [f, p]);
    return E.useLayoutEffect( () => u.listen(m), [u, m]),
    E.useEffect( () => ZT(i), [i]),
    E.createElement(nP, {
        basename: e,
        children: n,
        location: d.location,
        navigationType: d.action,
        navigator: u,
        future: i
    })
}
const dP = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , fP = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , Cs = E.forwardRef(function(e, n) {
    let {onClick: i, relative: o, reloadDocument: l, replace: u, state: d, target: f, to: p, preventScrollReset: m, viewTransition: y} = e, w = sP(e, aP), {basename: C} = E.useContext(Vr), b, k = !1;
    if (typeof p == "string" && fP.test(p) && (b = p,
    dP))
        try {
            let j = new URL(window.location.href)
              , N = p.startsWith("//") ? new URL(j.protocol + p) : new URL(p)
              , V = Qf(N.pathname, C);
            N.origin === j.origin && V != null ? p = V + N.search + N.hash : k = !0
        } catch {}
    let S = DT(p, {
        relative: o
    })
      , P = hP(p, {
        replace: u,
        state: d,
        target: f,
        preventScrollReset: m,
        relative: o,
        viewTransition: y
    });
    function L(j) {
        i && i(j),
        j.defaultPrevented || P(j)
    }
    return E.createElement("a", cf({}, w, {
        href: b || S,
        onClick: k || l ? i : L,
        ref: n,
        target: f
    }))
});
var jy;
(function(t) {
    t.UseScrollRestoration = "useScrollRestoration",
    t.UseSubmit = "useSubmit",
    t.UseSubmitFetcher = "useSubmitFetcher",
    t.UseFetcher = "useFetcher",
    t.useViewTransitionState = "useViewTransitionState"
}
)(jy || (jy = {}));
var Ly;
(function(t) {
    t.UseFetcher = "useFetcher",
    t.UseFetchers = "useFetchers",
    t.UseScrollRestoration = "useScrollRestoration"
}
)(Ly || (Ly = {}));
function hP(t, e) {
    let {target: n, replace: i, state: o, preventScrollReset: l, relative: u, viewTransition: d} = e === void 0 ? {} : e
      , f = Jf()
      , p = Ts()
      , m = jw(t, {
        relative: u
    });
    return E.useCallback(y => {
        if (oP(y, n)) {
            y.preventDefault();
            let w = i !== void 0 ? i : Ul(p) === Ul(m);
            f(t, {
                replace: w,
                state: o,
                preventScrollReset: l,
                relative: u,
                viewTransition: d
            })
        }
    }
    , [p, f, m, i, o, n, t, l, u, d])
}
function Iw(t, e) {
    return function() {
        return t.apply(e, arguments)
    }
}
const {toString: pP} = Object.prototype
  , {getPrototypeOf: Zf} = Object
  , {iterator: tu, toStringTag: Fw} = Symbol
  , nu = (t => e => {
    const n = pP.call(e);
    return t[n] || (t[n] = n.slice(8, -1).toLowerCase())
}
)(Object.create(null))
  , yn = t => (t = t.toLowerCase(),
e => nu(e) === t)
  , ru = t => e => typeof e === t
  , {isArray: ki} = Array
  , yi = ru("undefined");
function Yo(t) {
    return t !== null && !yi(t) && t.constructor !== null && !yi(t.constructor) && Mt(t.constructor.isBuffer) && t.constructor.isBuffer(t)
}
const Vw = yn("ArrayBuffer");
function mP(t) {
    let e;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && Vw(t.buffer),
    e
}
const gP = ru("string")
  , Mt = ru("function")
  , Uw = ru("number")
  , Xo = t => t !== null && typeof t == "object"
  , yP = t => t === !0 || t === !1
  , _l = t => {
    if (nu(t) !== "object")
        return !1;
    const e = Zf(t);
    return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Fw in t) && !(tu in t)
}
  , vP = t => {
    if (!Xo(t) || Yo(t))
        return !1;
    try {
        return Object.keys(t).length === 0 && Object.getPrototypeOf(t) === Object.prototype
    } catch {
        return !1
    }
}
  , wP = yn("Date")
  , xP = yn("File")
  , SP = yn("Blob")
  , bP = yn("FileList")
  , CP = t => Xo(t) && Mt(t.pipe)
  , EP = t => {
    let e;
    return t && (typeof FormData == "function" && t instanceof FormData || Mt(t.append) && ((e = nu(t)) === "formdata" || e === "object" && Mt(t.toString) && t.toString() === "[object FormData]"))
}
  , kP = yn("URLSearchParams")
  , [TP,PP,_P,RP] = ["ReadableStream", "Request", "Response", "Headers"].map(yn)
  , AP = t => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Jo(t, e, {allOwnKeys: n=!1}={}) {
    if (t === null || typeof t > "u")
        return;
    let i, o;
    if (typeof t != "object" && (t = [t]),
    ki(t))
        for (i = 0,
        o = t.length; i < o; i++)
            e.call(null, t[i], i, t);
    else {
        if (Yo(t))
            return;
        const l = n ? Object.getOwnPropertyNames(t) : Object.keys(t)
          , u = l.length;
        let d;
        for (i = 0; i < u; i++)
            d = l[i],
            e.call(null, t[d], d, t)
    }
}
function Bw(t, e) {
    if (Yo(t))
        return null;
    e = e.toLowerCase();
    const n = Object.keys(t);
    let i = n.length, o;
    for (; i-- > 0; )
        if (o = n[i],
        e === o.toLowerCase())
            return o;
    return null
}
const ls = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global
  , zw = t => !yi(t) && t !== ls;
function df() {
    const {caseless: t, skipUndefined: e} = zw(this) && this || {}
      , n = {}
      , i = (o, l) => {
        if (l === "__proto__" || l === "constructor" || l === "prototype")
            return;
        const u = t && Bw(n, l) || l;
        _l(n[u]) && _l(o) ? n[u] = df(n[u], o) : _l(o) ? n[u] = df({}, o) : ki(o) ? n[u] = o.slice() : (!e || !yi(o)) && (n[u] = o)
    }
    ;
    for (let o = 0, l = arguments.length; o < l; o++)
        arguments[o] && Jo(arguments[o], i);
    return n
}
const NP = (t, e, n, {allOwnKeys: i}={}) => (Jo(e, (o, l) => {
    n && Mt(o) ? Object.defineProperty(t, l, {
        value: Iw(o, n),
        writable: !0,
        enumerable: !0,
        configurable: !0
    }) : Object.defineProperty(t, l, {
        value: o,
        writable: !0,
        enumerable: !0,
        configurable: !0
    })
}
, {
    allOwnKeys: i
}),
t)
  , OP = t => (t.charCodeAt(0) === 65279 && (t = t.slice(1)),
t)
  , jP = (t, e, n, i) => {
    t.prototype = Object.create(e.prototype, i),
    Object.defineProperty(t.prototype, "constructor", {
        value: t,
        writable: !0,
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(t, "super", {
        value: e.prototype
    }),
    n && Object.assign(t.prototype, n)
}
  , LP = (t, e, n, i) => {
    let o, l, u;
    const d = {};
    if (e = e || {},
    t == null)
        return e;
    do {
        for (o = Object.getOwnPropertyNames(t),
        l = o.length; l-- > 0; )
            u = o[l],
            (!i || i(u, t, e)) && !d[u] && (e[u] = t[u],
            d[u] = !0);
        t = n !== !1 && Zf(t)
    } while (t && (!n || n(t, e)) && t !== Object.prototype);
    return e
}
  , MP = (t, e, n) => {
    t = String(t),
    (n === void 0 || n > t.length) && (n = t.length),
    n -= e.length;
    const i = t.indexOf(e, n);
    return i !== -1 && i === n
}
  , DP = t => {
    if (!t)
        return null;
    if (ki(t))
        return t;
    let e = t.length;
    if (!Uw(e))
        return null;
    const n = new Array(e);
    for (; e-- > 0; )
        n[e] = t[e];
    return n
}
  , IP = (t => e => t && e instanceof t)(typeof Uint8Array < "u" && Zf(Uint8Array))
  , FP = (t, e) => {
    const i = (t && t[tu]).call(t);
    let o;
    for (; (o = i.next()) && !o.done; ) {
        const l = o.value;
        e.call(t, l[0], l[1])
    }
}
  , VP = (t, e) => {
    let n;
    const i = [];
    for (; (n = t.exec(e)) !== null; )
        i.push(n);
    return i
}
  , UP = yn("HTMLFormElement")
  , BP = t => t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, i, o) {
    return i.toUpperCase() + o
})
  , My = ( ({hasOwnProperty: t}) => (e, n) => t.call(e, n))(Object.prototype)
  , zP = yn("RegExp")
  , $w = (t, e) => {
    const n = Object.getOwnPropertyDescriptors(t)
      , i = {};
    Jo(n, (o, l) => {
        let u;
        (u = e(o, l, t)) !== !1 && (i[l] = u || o)
    }
    ),
    Object.defineProperties(t, i)
}
  , $P = t => {
    $w(t, (e, n) => {
        if (Mt(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
            return !1;
        const i = t[n];
        if (Mt(i)) {
            if (e.enumerable = !1,
            "writable"in e) {
                e.writable = !1;
                return
            }
            e.set || (e.set = () => {
                throw Error("Can not rewrite read-only method '" + n + "'")
            }
            )
        }
    }
    )
}
  , HP = (t, e) => {
    const n = {}
      , i = o => {
        o.forEach(l => {
            n[l] = !0
        }
        )
    }
    ;
    return ki(t) ? i(t) : i(String(t).split(e)),
    n
}
  , WP = () => {}
  , qP = (t, e) => t != null && Number.isFinite(t = +t) ? t : e;
function KP(t) {
    return !!(t && Mt(t.append) && t[Fw] === "FormData" && t[tu])
}
const QP = t => {
    const e = new Array(10)
      , n = (i, o) => {
        if (Xo(i)) {
            if (e.indexOf(i) >= 0)
                return;
            if (Yo(i))
                return i;
            if (!("toJSON"in i)) {
                e[o] = i;
                const l = ki(i) ? [] : {};
                return Jo(i, (u, d) => {
                    const f = n(u, o + 1);
                    !yi(f) && (l[d] = f)
                }
                ),
                e[o] = void 0,
                l
            }
        }
        return i
    }
    ;
    return n(t, 0)
}
  , GP = yn("AsyncFunction")
  , YP = t => t && (Xo(t) || Mt(t)) && Mt(t.then) && Mt(t.catch)
  , Hw = ( (t, e) => t ? setImmediate : e ? ( (n, i) => (ls.addEventListener("message", ({source: o, data: l}) => {
    o === ls && l === n && i.length && i.shift()()
}
, !1),
o => {
    i.push(o),
    ls.postMessage(n, "*")
}
))(`axios@${Math.random()}`, []) : n => setTimeout(n))(typeof setImmediate == "function", Mt(ls.postMessage))
  , XP = typeof queueMicrotask < "u" ? queueMicrotask.bind(ls) : typeof process < "u" && process.nextTick || Hw
  , JP = t => t != null && Mt(t[tu])
  , U = {
    isArray: ki,
    isArrayBuffer: Vw,
    isBuffer: Yo,
    isFormData: EP,
    isArrayBufferView: mP,
    isString: gP,
    isNumber: Uw,
    isBoolean: yP,
    isObject: Xo,
    isPlainObject: _l,
    isEmptyObject: vP,
    isReadableStream: TP,
    isRequest: PP,
    isResponse: _P,
    isHeaders: RP,
    isUndefined: yi,
    isDate: wP,
    isFile: xP,
    isBlob: SP,
    isRegExp: zP,
    isFunction: Mt,
    isStream: CP,
    isURLSearchParams: kP,
    isTypedArray: IP,
    isFileList: bP,
    forEach: Jo,
    merge: df,
    extend: NP,
    trim: AP,
    stripBOM: OP,
    inherits: jP,
    toFlatObject: LP,
    kindOf: nu,
    kindOfTest: yn,
    endsWith: MP,
    toArray: DP,
    forEachEntry: FP,
    matchAll: VP,
    isHTMLForm: UP,
    hasOwnProperty: My,
    hasOwnProp: My,
    reduceDescriptors: $w,
    freezeMethods: $P,
    toObjectSet: HP,
    toCamelCase: BP,
    noop: WP,
    toFiniteNumber: qP,
    findKey: Bw,
    global: ls,
    isContextDefined: zw,
    isSpecCompliantForm: KP,
    toJSONObject: QP,
    isAsyncFn: GP,
    isThenable: YP,
    setImmediate: Hw,
    asap: XP,
    isIterable: JP
};
let pe = class Ww extends Error {
    static from(e, n, i, o, l, u) {
        const d = new Ww(e.message,n || e.code,i,o,l);
        return d.cause = e,
        d.name = e.name,
        u && Object.assign(d, u),
        d
    }
    constructor(e, n, i, o, l) {
        super(e),
        this.name = "AxiosError",
        this.isAxiosError = !0,
        n && (this.code = n),
        i && (this.config = i),
        o && (this.request = o),
        l && (this.response = l,
        this.status = l.status)
    }
    toJSON() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: U.toJSONObject(this.config),
            code: this.code,
            status: this.status
        }
    }
}
;
pe.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
pe.ERR_BAD_OPTION = "ERR_BAD_OPTION";
pe.ECONNABORTED = "ECONNABORTED";
pe.ETIMEDOUT = "ETIMEDOUT";
pe.ERR_NETWORK = "ERR_NETWORK";
pe.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
pe.ERR_DEPRECATED = "ERR_DEPRECATED";
pe.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
pe.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
pe.ERR_CANCELED = "ERR_CANCELED";
pe.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
pe.ERR_INVALID_URL = "ERR_INVALID_URL";
const ZP = null;
function ff(t) {
    return U.isPlainObject(t) || U.isArray(t)
}
function qw(t) {
    return U.endsWith(t, "[]") ? t.slice(0, -2) : t
}
function Dy(t, e, n) {
    return t ? t.concat(e).map(function(o, l) {
        return o = qw(o),
        !n && l ? "[" + o + "]" : o
    }).join(n ? "." : "") : e
}
function e_(t) {
    return U.isArray(t) && !t.some(ff)
}
const t_ = U.toFlatObject(U, {}, null, function(e) {
    return /^is[A-Z]/.test(e)
});
function su(t, e, n) {
    if (!U.isObject(t))
        throw new TypeError("target must be an object");
    e = e || new FormData,
    n = U.toFlatObject(n, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(k, S) {
        return !U.isUndefined(S[k])
    });
    const i = n.metaTokens
      , o = n.visitor || m
      , l = n.dots
      , u = n.indexes
      , f = (n.Blob || typeof Blob < "u" && Blob) && U.isSpecCompliantForm(e);
    if (!U.isFunction(o))
        throw new TypeError("visitor must be a function");
    function p(b) {
        if (b === null)
            return "";
        if (U.isDate(b))
            return b.toISOString();
        if (U.isBoolean(b))
            return b.toString();
        if (!f && U.isBlob(b))
            throw new pe("Blob is not supported. Use a Buffer instead.");
        return U.isArrayBuffer(b) || U.isTypedArray(b) ? f && typeof Blob == "function" ? new Blob([b]) : Buffer.from(b) : b
    }
    function m(b, k, S) {
        let P = b;
        if (b && !S && typeof b == "object") {
            if (U.endsWith(k, "{}"))
                k = i ? k : k.slice(0, -2),
                b = JSON.stringify(b);
            else if (U.isArray(b) && e_(b) || (U.isFileList(b) || U.endsWith(k, "[]")) && (P = U.toArray(b)))
                return k = qw(k),
                P.forEach(function(j, N) {
                    !(U.isUndefined(j) || j === null) && e.append(u === !0 ? Dy([k], N, l) : u === null ? k : k + "[]", p(j))
                }),
                !1
        }
        return ff(b) ? !0 : (e.append(Dy(S, k, l), p(b)),
        !1)
    }
    const y = []
      , w = Object.assign(t_, {
        defaultVisitor: m,
        convertValue: p,
        isVisitable: ff
    });
    function C(b, k) {
        if (!U.isUndefined(b)) {
            if (y.indexOf(b) !== -1)
                throw Error("Circular reference detected in " + k.join("."));
            y.push(b),
            U.forEach(b, function(P, L) {
                (!(U.isUndefined(P) || P === null) && o.call(e, P, U.isString(L) ? L.trim() : L, k, w)) === !0 && C(P, k ? k.concat(L) : [L])
            }),
            y.pop()
        }
    }
    if (!U.isObject(t))
        throw new TypeError("data must be an object");
    return C(t),
    e
}
function Iy(t) {
    const e = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(i) {
        return e[i]
    })
}
function eh(t, e) {
    this._pairs = [],
    t && su(t, this, e)
}
const Kw = eh.prototype;
Kw.append = function(e, n) {
    this._pairs.push([e, n])
}
;
Kw.toString = function(e) {
    const n = e ? function(i) {
        return e.call(this, i, Iy)
    }
    : Iy;
    return this._pairs.map(function(o) {
        return n(o[0]) + "=" + n(o[1])
    }, "").join("&")
}
;
function n_(t) {
    return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+")
}
function Qw(t, e, n) {
    if (!e)
        return t;
    const i = n && n.encode || n_
      , o = U.isFunction(n) ? {
        serialize: n
    } : n
      , l = o && o.serialize;
    let u;
    if (l ? u = l(e, o) : u = U.isURLSearchParams(e) ? e.toString() : new eh(e,o).toString(i),
    u) {
        const d = t.indexOf("#");
        d !== -1 && (t = t.slice(0, d)),
        t += (t.indexOf("?") === -1 ? "?" : "&") + u
    }
    return t
}
class Fy {
    constructor() {
        this.handlers = []
    }
    use(e, n, i) {
        return this.handlers.push({
            fulfilled: e,
            rejected: n,
            synchronous: i ? i.synchronous : !1,
            runWhen: i ? i.runWhen : null
        }),
        this.handlers.length - 1
    }
    eject(e) {
        this.handlers[e] && (this.handlers[e] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(e) {
        U.forEach(this.handlers, function(i) {
            i !== null && e(i)
        })
    }
}
const th = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
    legacyInterceptorReqResOrdering: !0
}
  , r_ = typeof URLSearchParams < "u" ? URLSearchParams : eh
  , s_ = typeof FormData < "u" ? FormData : null
  , i_ = typeof Blob < "u" ? Blob : null
  , o_ = {
    isBrowser: !0,
    classes: {
        URLSearchParams: r_,
        FormData: s_,
        Blob: i_
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
}
  , nh = typeof window < "u" && typeof document < "u"
  , hf = typeof navigator == "object" && navigator || void 0
  , a_ = nh && (!hf || ["ReactNative", "NativeScript", "NS"].indexOf(hf.product) < 0)
  , l_ = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function"
  , u_ = nh && window.location.href || "http://localhost"
  , c_ = Object.freeze(Object.defineProperty({
    __proto__: null,
    hasBrowserEnv: nh,
    hasStandardBrowserEnv: a_,
    hasStandardBrowserWebWorkerEnv: l_,
    navigator: hf,
    origin: u_
}, Symbol.toStringTag, {
    value: "Module"
}))
  , bt = {
    ...c_,
    ...o_
};
function d_(t, e) {
    return su(t, new bt.classes.URLSearchParams, {
        visitor: function(n, i, o, l) {
            return bt.isNode && U.isBuffer(n) ? (this.append(i, n.toString("base64")),
            !1) : l.defaultVisitor.apply(this, arguments)
        },
        ...e
    })
}
function f_(t) {
    return U.matchAll(/\w+|\[(\w*)]/g, t).map(e => e[0] === "[]" ? "" : e[1] || e[0])
}
function h_(t) {
    const e = {}
      , n = Object.keys(t);
    let i;
    const o = n.length;
    let l;
    for (i = 0; i < o; i++)
        l = n[i],
        e[l] = t[l];
    return e
}
function Gw(t) {
    function e(n, i, o, l) {
        let u = n[l++];
        if (u === "__proto__")
            return !0;
        const d = Number.isFinite(+u)
          , f = l >= n.length;
        return u = !u && U.isArray(o) ? o.length : u,
        f ? (U.hasOwnProp(o, u) ? o[u] = [o[u], i] : o[u] = i,
        !d) : ((!o[u] || !U.isObject(o[u])) && (o[u] = []),
        e(n, i, o[u], l) && U.isArray(o[u]) && (o[u] = h_(o[u])),
        !d)
    }
    if (U.isFormData(t) && U.isFunction(t.entries)) {
        const n = {};
        return U.forEachEntry(t, (i, o) => {
            e(f_(i), o, n, 0)
        }
        ),
        n
    }
    return null
}
function p_(t, e, n) {
    if (U.isString(t))
        try {
            return (e || JSON.parse)(t),
            U.trim(t)
        } catch (i) {
            if (i.name !== "SyntaxError")
                throw i
        }
    return (n || JSON.stringify)(t)
}
const Zo = {
    transitional: th,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(e, n) {
        const i = n.getContentType() || ""
          , o = i.indexOf("application/json") > -1
          , l = U.isObject(e);
        if (l && U.isHTMLForm(e) && (e = new FormData(e)),
        U.isFormData(e))
            return o ? JSON.stringify(Gw(e)) : e;
        if (U.isArrayBuffer(e) || U.isBuffer(e) || U.isStream(e) || U.isFile(e) || U.isBlob(e) || U.isReadableStream(e))
            return e;
        if (U.isArrayBufferView(e))
            return e.buffer;
        if (U.isURLSearchParams(e))
            return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
            e.toString();
        let d;
        if (l) {
            if (i.indexOf("application/x-www-form-urlencoded") > -1)
                return d_(e, this.formSerializer).toString();
            if ((d = U.isFileList(e)) || i.indexOf("multipart/form-data") > -1) {
                const f = this.env && this.env.FormData;
                return su(d ? {
                    "files[]": e
                } : e, f && new f, this.formSerializer)
            }
        }
        return l || o ? (n.setContentType("application/json", !1),
        p_(e)) : e
    }
    ],
    transformResponse: [function(e) {
        const n = this.transitional || Zo.transitional
          , i = n && n.forcedJSONParsing
          , o = this.responseType === "json";
        if (U.isResponse(e) || U.isReadableStream(e))
            return e;
        if (e && U.isString(e) && (i && !this.responseType || o)) {
            const u = !(n && n.silentJSONParsing) && o;
            try {
                return JSON.parse(e, this.parseReviver)
            } catch (d) {
                if (u)
                    throw d.name === "SyntaxError" ? pe.from(d, pe.ERR_BAD_RESPONSE, this, null, this.response) : d
            }
        }
        return e
    }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: bt.classes.FormData,
        Blob: bt.classes.Blob
    },
    validateStatus: function(e) {
        return e >= 200 && e < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
U.forEach(["delete", "get", "head", "post", "put", "patch"], t => {
    Zo.headers[t] = {}
}
);
const m_ = U.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
  , g_ = t => {
    const e = {};
    let n, i, o;
    return t && t.split(`
`).forEach(function(u) {
        o = u.indexOf(":"),
        n = u.substring(0, o).trim().toLowerCase(),
        i = u.substring(o + 1).trim(),
        !(!n || e[n] && m_[n]) && (n === "set-cookie" ? e[n] ? e[n].push(i) : e[n] = [i] : e[n] = e[n] ? e[n] + ", " + i : i)
    }),
    e
}
  , Vy = Symbol("internals");
function vo(t) {
    return t && String(t).trim().toLowerCase()
}
function Rl(t) {
    return t === !1 || t == null ? t : U.isArray(t) ? t.map(Rl) : String(t)
}
function y_(t) {
    const e = Object.create(null)
      , n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let i;
    for (; i = n.exec(t); )
        e[i[1]] = i[2];
    return e
}
const v_ = t => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function bd(t, e, n, i, o) {
    if (U.isFunction(i))
        return i.call(this, e, n);
    if (o && (e = n),
    !!U.isString(e)) {
        if (U.isString(i))
            return e.indexOf(i) !== -1;
        if (U.isRegExp(i))
            return i.test(e)
    }
}
function w_(t) {
    return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, n, i) => n.toUpperCase() + i)
}
function x_(t, e) {
    const n = U.toCamelCase(" " + e);
    ["get", "set", "has"].forEach(i => {
        Object.defineProperty(t, i + n, {
            value: function(o, l, u) {
                return this[i].call(this, e, o, l, u)
            },
            configurable: !0
        })
    }
    )
}
let Dt = class {
    constructor(e) {
        e && this.set(e)
    }
    set(e, n, i) {
        const o = this;
        function l(d, f, p) {
            const m = vo(f);
            if (!m)
                throw new Error("header name must be a non-empty string");
            const y = U.findKey(o, m);
            (!y || o[y] === void 0 || p === !0 || p === void 0 && o[y] !== !1) && (o[y || f] = Rl(d))
        }
        const u = (d, f) => U.forEach(d, (p, m) => l(p, m, f));
        if (U.isPlainObject(e) || e instanceof this.constructor)
            u(e, n);
        else if (U.isString(e) && (e = e.trim()) && !v_(e))
            u(g_(e), n);
        else if (U.isObject(e) && U.isIterable(e)) {
            let d = {}, f, p;
            for (const m of e) {
                if (!U.isArray(m))
                    throw TypeError("Object iterator must return a key-value pair");
                d[p = m[0]] = (f = d[p]) ? U.isArray(f) ? [...f, m[1]] : [f, m[1]] : m[1]
            }
            u(d, n)
        } else
            e != null && l(n, e, i);
        return this
    }
    get(e, n) {
        if (e = vo(e),
        e) {
            const i = U.findKey(this, e);
            if (i) {
                const o = this[i];
                if (!n)
                    return o;
                if (n === !0)
                    return y_(o);
                if (U.isFunction(n))
                    return n.call(this, o, i);
                if (U.isRegExp(n))
                    return n.exec(o);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(e, n) {
        if (e = vo(e),
        e) {
            const i = U.findKey(this, e);
            return !!(i && this[i] !== void 0 && (!n || bd(this, this[i], i, n)))
        }
        return !1
    }
    delete(e, n) {
        const i = this;
        let o = !1;
        function l(u) {
            if (u = vo(u),
            u) {
                const d = U.findKey(i, u);
                d && (!n || bd(i, i[d], d, n)) && (delete i[d],
                o = !0)
            }
        }
        return U.isArray(e) ? e.forEach(l) : l(e),
        o
    }
    clear(e) {
        const n = Object.keys(this);
        let i = n.length
          , o = !1;
        for (; i--; ) {
            const l = n[i];
            (!e || bd(this, this[l], l, e, !0)) && (delete this[l],
            o = !0)
        }
        return o
    }
    normalize(e) {
        const n = this
          , i = {};
        return U.forEach(this, (o, l) => {
            const u = U.findKey(i, l);
            if (u) {
                n[u] = Rl(o),
                delete n[l];
                return
            }
            const d = e ? w_(l) : String(l).trim();
            d !== l && delete n[l],
            n[d] = Rl(o),
            i[d] = !0
        }
        ),
        this
    }
    concat(...e) {
        return this.constructor.concat(this, ...e)
    }
    toJSON(e) {
        const n = Object.create(null);
        return U.forEach(this, (i, o) => {
            i != null && i !== !1 && (n[o] = e && U.isArray(i) ? i.join(", ") : i)
        }
        ),
        n
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map( ([e,n]) => e + ": " + n).join(`
`)
    }
    getSetCookie() {
        return this.get("set-cookie") || []
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(e) {
        return e instanceof this ? e : new this(e)
    }
    static concat(e, ...n) {
        const i = new this(e);
        return n.forEach(o => i.set(o)),
        i
    }
    static accessor(e) {
        const i = (this[Vy] = this[Vy] = {
            accessors: {}
        }).accessors
          , o = this.prototype;
        function l(u) {
            const d = vo(u);
            i[d] || (x_(o, u),
            i[d] = !0)
        }
        return U.isArray(e) ? e.forEach(l) : l(e),
        this
    }
}
;
Dt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
U.reduceDescriptors(Dt.prototype, ({value: t}, e) => {
    let n = e[0].toUpperCase() + e.slice(1);
    return {
        get: () => t,
        set(i) {
            this[n] = i
        }
    }
}
);
U.freezeMethods(Dt);
function Cd(t, e) {
    const n = this || Zo
      , i = e || n
      , o = Dt.from(i.headers);
    let l = i.data;
    return U.forEach(t, function(d) {
        l = d.call(n, l, o.normalize(), e ? e.status : void 0)
    }),
    o.normalize(),
    l
}
function Yw(t) {
    return !!(t && t.__CANCEL__)
}
let ea = class extends pe {
    constructor(e, n, i) {
        super(e ?? "canceled", pe.ERR_CANCELED, n, i),
        this.name = "CanceledError",
        this.__CANCEL__ = !0
    }
}
;
function Xw(t, e, n) {
    const i = n.config.validateStatus;
    !n.status || !i || i(n.status) ? t(n) : e(new pe("Request failed with status code " + n.status,[pe.ERR_BAD_REQUEST, pe.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],n.config,n.request,n))
}
function S_(t) {
    const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
    return e && e[1] || ""
}
function b_(t, e) {
    t = t || 10;
    const n = new Array(t)
      , i = new Array(t);
    let o = 0, l = 0, u;
    return e = e !== void 0 ? e : 1e3,
    function(f) {
        const p = Date.now()
          , m = i[l];
        u || (u = p),
        n[o] = f,
        i[o] = p;
        let y = l
          , w = 0;
        for (; y !== o; )
            w += n[y++],
            y = y % t;
        if (o = (o + 1) % t,
        o === l && (l = (l + 1) % t),
        p - u < e)
            return;
        const C = m && p - m;
        return C ? Math.round(w * 1e3 / C) : void 0
    }
}
function C_(t, e) {
    let n = 0, i = 1e3 / e, o, l;
    const u = (p, m=Date.now()) => {
        n = m,
        o = null,
        l && (clearTimeout(l),
        l = null),
        t(...p)
    }
    ;
    return [ (...p) => {
        const m = Date.now()
          , y = m - n;
        y >= i ? u(p, m) : (o = p,
        l || (l = setTimeout( () => {
            l = null,
            u(o)
        }
        , i - y)))
    }
    , () => o && u(o)]
}
const Bl = (t, e, n=3) => {
    let i = 0;
    const o = b_(50, 250);
    return C_(l => {
        const u = l.loaded
          , d = l.lengthComputable ? l.total : void 0
          , f = u - i
          , p = o(f)
          , m = u <= d;
        i = u;
        const y = {
            loaded: u,
            total: d,
            progress: d ? u / d : void 0,
            bytes: f,
            rate: p || void 0,
            estimated: p && d && m ? (d - u) / p : void 0,
            event: l,
            lengthComputable: d != null,
            [e ? "download" : "upload"]: !0
        };
        t(y)
    }
    , n)
}
  , Uy = (t, e) => {
    const n = t != null;
    return [i => e[0]({
        lengthComputable: n,
        total: t,
        loaded: i
    }), e[1]]
}
  , By = t => (...e) => U.asap( () => t(...e))
  , E_ = bt.hasStandardBrowserEnv ? ( (t, e) => n => (n = new URL(n,bt.origin),
t.protocol === n.protocol && t.host === n.host && (e || t.port === n.port)))(new URL(bt.origin), bt.navigator && /(msie|trident)/i.test(bt.navigator.userAgent)) : () => !0
  , k_ = bt.hasStandardBrowserEnv ? {
    write(t, e, n, i, o, l, u) {
        if (typeof document > "u")
            return;
        const d = [`${t}=${encodeURIComponent(e)}`];
        U.isNumber(n) && d.push(`expires=${new Date(n).toUTCString()}`),
        U.isString(i) && d.push(`path=${i}`),
        U.isString(o) && d.push(`domain=${o}`),
        l === !0 && d.push("secure"),
        U.isString(u) && d.push(`SameSite=${u}`),
        document.cookie = d.join("; ")
    },
    read(t) {
        if (typeof document > "u")
            return null;
        const e = document.cookie.match(new RegExp("(?:^|; )" + t + "=([^;]*)"));
        return e ? decodeURIComponent(e[1]) : null
    },
    remove(t) {
        this.write(t, "", Date.now() - 864e5, "/")
    }
} : {
    write() {},
    read() {
        return null
    },
    remove() {}
};
function T_(t) {
    return typeof t != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
}
function P_(t, e) {
    return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t
}
function Jw(t, e, n) {
    let i = !T_(e);
    return t && (i || n == !1) ? P_(t, e) : e
}
const zy = t => t instanceof Dt ? {
    ...t
} : t;
function Es(t, e) {
    e = e || {};
    const n = {};
    function i(p, m, y, w) {
        return U.isPlainObject(p) && U.isPlainObject(m) ? U.merge.call({
            caseless: w
        }, p, m) : U.isPlainObject(m) ? U.merge({}, m) : U.isArray(m) ? m.slice() : m
    }
    function o(p, m, y, w) {
        if (U.isUndefined(m)) {
            if (!U.isUndefined(p))
                return i(void 0, p, y, w)
        } else
            return i(p, m, y, w)
    }
    function l(p, m) {
        if (!U.isUndefined(m))
            return i(void 0, m)
    }
    function u(p, m) {
        if (U.isUndefined(m)) {
            if (!U.isUndefined(p))
                return i(void 0, p)
        } else
            return i(void 0, m)
    }
    function d(p, m, y) {
        if (y in e)
            return i(p, m);
        if (y in t)
            return i(void 0, p)
    }
    const f = {
        url: l,
        method: l,
        data: l,
        baseURL: u,
        transformRequest: u,
        transformResponse: u,
        paramsSerializer: u,
        timeout: u,
        timeoutMessage: u,
        withCredentials: u,
        withXSRFToken: u,
        adapter: u,
        responseType: u,
        xsrfCookieName: u,
        xsrfHeaderName: u,
        onUploadProgress: u,
        onDownloadProgress: u,
        decompress: u,
        maxContentLength: u,
        maxBodyLength: u,
        beforeRedirect: u,
        transport: u,
        httpAgent: u,
        httpsAgent: u,
        cancelToken: u,
        socketPath: u,
        responseEncoding: u,
        validateStatus: d,
        headers: (p, m, y) => o(zy(p), zy(m), y, !0)
    };
    return U.forEach(Object.keys({
        ...t,
        ...e
    }), function(m) {
        if (m === "__proto__" || m === "constructor" || m === "prototype")
            return;
        const y = U.hasOwnProp(f, m) ? f[m] : o
          , w = y(t[m], e[m], m);
        U.isUndefined(w) && y !== d || (n[m] = w)
    }),
    n
}
const Zw = t => {
    const e = Es({}, t);
    let {data: n, withXSRFToken: i, xsrfHeaderName: o, xsrfCookieName: l, headers: u, auth: d} = e;
    if (e.headers = u = Dt.from(u),
    e.url = Qw(Jw(e.baseURL, e.url, e.allowAbsoluteUrls), t.params, t.paramsSerializer),
    d && u.set("Authorization", "Basic " + btoa((d.username || "") + ":" + (d.password ? unescape(encodeURIComponent(d.password)) : ""))),
    U.isFormData(n)) {
        if (bt.hasStandardBrowserEnv || bt.hasStandardBrowserWebWorkerEnv)
            u.setContentType(void 0);
        else if (U.isFunction(n.getHeaders)) {
            const f = n.getHeaders()
              , p = ["content-type", "content-length"];
            Object.entries(f).forEach( ([m,y]) => {
                p.includes(m.toLowerCase()) && u.set(m, y)
            }
            )
        }
    }
    if (bt.hasStandardBrowserEnv && (i && U.isFunction(i) && (i = i(e)),
    i || i !== !1 && E_(e.url))) {
        const f = o && l && k_.read(l);
        f && u.set(o, f)
    }
    return e
}
  , __ = typeof XMLHttpRequest < "u"
  , R_ = __ && function(t) {
    return new Promise(function(n, i) {
        const o = Zw(t);
        let l = o.data;
        const u = Dt.from(o.headers).normalize();
        let {responseType: d, onUploadProgress: f, onDownloadProgress: p} = o, m, y, w, C, b;
        function k() {
            C && C(),
            b && b(),
            o.cancelToken && o.cancelToken.unsubscribe(m),
            o.signal && o.signal.removeEventListener("abort", m)
        }
        let S = new XMLHttpRequest;
        S.open(o.method.toUpperCase(), o.url, !0),
        S.timeout = o.timeout;
        function P() {
            if (!S)
                return;
            const j = Dt.from("getAllResponseHeaders"in S && S.getAllResponseHeaders())
              , V = {
                data: !d || d === "text" || d === "json" ? S.responseText : S.response,
                status: S.status,
                statusText: S.statusText,
                headers: j,
                config: t,
                request: S
            };
            Xw(function(Y) {
                n(Y),
                k()
            }, function(Y) {
                i(Y),
                k()
            }, V),
            S = null
        }
        "onloadend"in S ? S.onloadend = P : S.onreadystatechange = function() {
            !S || S.readyState !== 4 || S.status === 0 && !(S.responseURL && S.responseURL.indexOf("file:") === 0) || setTimeout(P)
        }
        ,
        S.onabort = function() {
            S && (i(new pe("Request aborted",pe.ECONNABORTED,t,S)),
            S = null)
        }
        ,
        S.onerror = function(N) {
            const V = N && N.message ? N.message : "Network Error"
              , $ = new pe(V,pe.ERR_NETWORK,t,S);
            $.event = N || null,
            i($),
            S = null
        }
        ,
        S.ontimeout = function() {
            let N = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
            const V = o.transitional || th;
            o.timeoutErrorMessage && (N = o.timeoutErrorMessage),
            i(new pe(N,V.clarifyTimeoutError ? pe.ETIMEDOUT : pe.ECONNABORTED,t,S)),
            S = null
        }
        ,
        l === void 0 && u.setContentType(null),
        "setRequestHeader"in S && U.forEach(u.toJSON(), function(N, V) {
            S.setRequestHeader(V, N)
        }),
        U.isUndefined(o.withCredentials) || (S.withCredentials = !!o.withCredentials),
        d && d !== "json" && (S.responseType = o.responseType),
        p && ([w,b] = Bl(p, !0),
        S.addEventListener("progress", w)),
        f && S.upload && ([y,C] = Bl(f),
        S.upload.addEventListener("progress", y),
        S.upload.addEventListener("loadend", C)),
        (o.cancelToken || o.signal) && (m = j => {
            S && (i(!j || j.type ? new ea(null,t,S) : j),
            S.abort(),
            S = null)
        }
        ,
        o.cancelToken && o.cancelToken.subscribe(m),
        o.signal && (o.signal.aborted ? m() : o.signal.addEventListener("abort", m)));
        const L = S_(o.url);
        if (L && bt.protocols.indexOf(L) === -1) {
            i(new pe("Unsupported protocol " + L + ":",pe.ERR_BAD_REQUEST,t));
            return
        }
        S.send(l || null)
    }
    )
}
  , A_ = (t, e) => {
    const {length: n} = t = t ? t.filter(Boolean) : [];
    if (e || n) {
        let i = new AbortController, o;
        const l = function(p) {
            if (!o) {
                o = !0,
                d();
                const m = p instanceof Error ? p : this.reason;
                i.abort(m instanceof pe ? m : new ea(m instanceof Error ? m.message : m))
            }
        };
        let u = e && setTimeout( () => {
            u = null,
            l(new pe(`timeout of ${e}ms exceeded`,pe.ETIMEDOUT))
        }
        , e);
        const d = () => {
            t && (u && clearTimeout(u),
            u = null,
            t.forEach(p => {
                p.unsubscribe ? p.unsubscribe(l) : p.removeEventListener("abort", l)
            }
            ),
            t = null)
        }
        ;
        t.forEach(p => p.addEventListener("abort", l));
        const {signal: f} = i;
        return f.unsubscribe = () => U.asap(d),
        f
    }
}
  , N_ = function*(t, e) {
    let n = t.byteLength;
    if (n < e) {
        yield t;
        return
    }
    let i = 0, o;
    for (; i < n; )
        o = i + e,
        yield t.slice(i, o),
        i = o
}
  , O_ = async function*(t, e) {
    for await(const n of j_(t))
        yield*N_(n, e)
}
  , j_ = async function*(t) {
    if (t[Symbol.asyncIterator]) {
        yield*t;
        return
    }
    const e = t.getReader();
    try {
        for (; ; ) {
            const {done: n, value: i} = await e.read();
            if (n)
                break;
            yield i
        }
    } finally {
        await e.cancel()
    }
}
  , $y = (t, e, n, i) => {
    const o = O_(t, e);
    let l = 0, u, d = f => {
        u || (u = !0,
        i && i(f))
    }
    ;
    return new ReadableStream({
        async pull(f) {
            try {
                const {done: p, value: m} = await o.next();
                if (p) {
                    d(),
                    f.close();
                    return
                }
                let y = m.byteLength;
                if (n) {
                    let w = l += y;
                    n(w)
                }
                f.enqueue(new Uint8Array(m))
            } catch (p) {
                throw d(p),
                p
            }
        },
        cancel(f) {
            return d(f),
            o.return()
        }
    },{
        highWaterMark: 2
    })
}
  , Hy = 64 * 1024
  , {isFunction: vl} = U
  , L_ = ( ({Request: t, Response: e}) => ({
    Request: t,
    Response: e
}))(U.global)
  , {ReadableStream: Wy, TextEncoder: qy} = U.global
  , Ky = (t, ...e) => {
    try {
        return !!t(...e)
    } catch {
        return !1
    }
}
  , M_ = t => {
    t = U.merge.call({
        skipUndefined: !0
    }, L_, t);
    const {fetch: e, Request: n, Response: i} = t
      , o = e ? vl(e) : typeof fetch == "function"
      , l = vl(n)
      , u = vl(i);
    if (!o)
        return !1;
    const d = o && vl(Wy)
      , f = o && (typeof qy == "function" ? (b => k => b.encode(k))(new qy) : async b => new Uint8Array(await new n(b).arrayBuffer()))
      , p = l && d && Ky( () => {
        let b = !1;
        const k = new n(bt.origin,{
            body: new Wy,
            method: "POST",
            get duplex() {
                return b = !0,
                "half"
            }
        }).headers.has("Content-Type");
        return b && !k
    }
    )
      , m = u && d && Ky( () => U.isReadableStream(new i("").body))
      , y = {
        stream: m && (b => b.body)
    };
    o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(b => {
        !y[b] && (y[b] = (k, S) => {
            let P = k && k[b];
            if (P)
                return P.call(k);
            throw new pe(`Response type '${b}' is not supported`,pe.ERR_NOT_SUPPORT,S)
        }
        )
    }
    );
    const w = async b => {
        if (b == null)
            return 0;
        if (U.isBlob(b))
            return b.size;
        if (U.isSpecCompliantForm(b))
            return (await new n(bt.origin,{
                method: "POST",
                body: b
            }).arrayBuffer()).byteLength;
        if (U.isArrayBufferView(b) || U.isArrayBuffer(b))
            return b.byteLength;
        if (U.isURLSearchParams(b) && (b = b + ""),
        U.isString(b))
            return (await f(b)).byteLength
    }
      , C = async (b, k) => {
        const S = U.toFiniteNumber(b.getContentLength());
        return S ?? w(k)
    }
    ;
    return async b => {
        let {url: k, method: S, data: P, signal: L, cancelToken: j, timeout: N, onDownloadProgress: V, onUploadProgress: $, responseType: Y, headers: I, withCredentials: Q="same-origin", fetchOptions: X} = Zw(b)
          , xe = e || fetch;
        Y = Y ? (Y + "").toLowerCase() : "text";
        let Oe = A_([L, j && j.toAbortSignal()], N)
          , Le = null;
        const Re = Oe && Oe.unsubscribe && ( () => {
            Oe.unsubscribe()
        }
        );
        let De;
        try {
            if ($ && p && S !== "get" && S !== "head" && (De = await C(I, P)) !== 0) {
                let O = new n(k,{
                    method: "POST",
                    body: P,
                    duplex: "half"
                }), z;
                if (U.isFormData(P) && (z = O.headers.get("content-type")) && I.setContentType(z),
                O.body) {
                    const [ge,ye] = Uy(De, Bl(By($)));
                    P = $y(O.body, Hy, ge, ye)
                }
            }
            U.isString(Q) || (Q = Q ? "include" : "omit");
            const we = l && "credentials"in n.prototype
              , fe = {
                ...X,
                signal: Oe,
                method: S.toUpperCase(),
                headers: I.normalize().toJSON(),
                body: P,
                duplex: "half",
                credentials: we ? Q : void 0
            };
            Le = l && new n(k,fe);
            let K = await (l ? xe(Le, X) : xe(k, fe));
            const ie = m && (Y === "stream" || Y === "response");
            if (m && (V || ie && Re)) {
                const O = {};
                ["status", "statusText", "headers"].forEach(ue => {
                    O[ue] = K[ue]
                }
                );
                const z = U.toFiniteNumber(K.headers.get("content-length"))
                  , [ge,ye] = V && Uy(z, Bl(By(V), !0)) || [];
                K = new i($y(K.body, Hy, ge, () => {
                    ye && ye(),
                    Re && Re()
                }
                ),O)
            }
            Y = Y || "text";
            let B = await y[U.findKey(y, Y) || "text"](K, b);
            return !ie && Re && Re(),
            await new Promise( (O, z) => {
                Xw(O, z, {
                    data: B,
                    headers: Dt.from(K.headers),
                    status: K.status,
                    statusText: K.statusText,
                    config: b,
                    request: Le
                })
            }
            )
        } catch (we) {
            throw Re && Re(),
            we && we.name === "TypeError" && /Load failed|fetch/i.test(we.message) ? Object.assign(new pe("Network Error",pe.ERR_NETWORK,b,Le,we && we.response), {
                cause: we.cause || we
            }) : pe.from(we, we && we.code, b, Le, we && we.response)
        }
    }
}
  , D_ = new Map
  , ex = t => {
    let e = t && t.env || {};
    const {fetch: n, Request: i, Response: o} = e
      , l = [i, o, n];
    let u = l.length, d = u, f, p, m = D_;
    for (; d--; )
        f = l[d],
        p = m.get(f),
        p === void 0 && m.set(f, p = d ? new Map : M_(e)),
        m = p;
    return p
}
;
ex();
const rh = {
    http: ZP,
    xhr: R_,
    fetch: {
        get: ex
    }
};
U.forEach(rh, (t, e) => {
    if (t) {
        try {
            Object.defineProperty(t, "name", {
                value: e
            })
        } catch {}
        Object.defineProperty(t, "adapterName", {
            value: e
        })
    }
}
);
const Qy = t => `- ${t}`
  , I_ = t => U.isFunction(t) || t === null || t === !1;
function F_(t, e) {
    t = U.isArray(t) ? t : [t];
    const {length: n} = t;
    let i, o;
    const l = {};
    for (let u = 0; u < n; u++) {
        i = t[u];
        let d;
        if (o = i,
        !I_(i) && (o = rh[(d = String(i)).toLowerCase()],
        o === void 0))
            throw new pe(`Unknown adapter '${d}'`);
        if (o && (U.isFunction(o) || (o = o.get(e))))
            break;
        l[d || "#" + u] = o
    }
    if (!o) {
        const u = Object.entries(l).map( ([f,p]) => `adapter ${f} ` + (p === !1 ? "is not supported by the environment" : "is not available in the build"));
        let d = n ? u.length > 1 ? `since :
` + u.map(Qy).join(`
`) : " " + Qy(u[0]) : "as no adapter specified";
        throw new pe("There is no suitable adapter to dispatch the request " + d,"ERR_NOT_SUPPORT")
    }
    return o
}
const tx = {
    getAdapter: F_,
    adapters: rh
};
function Ed(t) {
    if (t.cancelToken && t.cancelToken.throwIfRequested(),
    t.signal && t.signal.aborted)
        throw new ea(null,t)
}
function Gy(t) {
    return Ed(t),
    t.headers = Dt.from(t.headers),
    t.data = Cd.call(t, t.transformRequest),
    ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1),
    tx.getAdapter(t.adapter || Zo.adapter, t)(t).then(function(i) {
        return Ed(t),
        i.data = Cd.call(t, t.transformResponse, i),
        i.headers = Dt.from(i.headers),
        i
    }, function(i) {
        return Yw(i) || (Ed(t),
        i && i.response && (i.response.data = Cd.call(t, t.transformResponse, i.response),
        i.response.headers = Dt.from(i.response.headers))),
        Promise.reject(i)
    })
}
const nx = "1.13.5"
  , iu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach( (t, e) => {
    iu[t] = function(i) {
        return typeof i === t || "a" + (e < 1 ? "n " : " ") + t
    }
}
);
const Yy = {};
iu.transitional = function(e, n, i) {
    function o(l, u) {
        return "[Axios v" + nx + "] Transitional option '" + l + "'" + u + (i ? ". " + i : "")
    }
    return (l, u, d) => {
        if (e === !1)
            throw new pe(o(u, " has been removed" + (n ? " in " + n : "")),pe.ERR_DEPRECATED);
        return n && !Yy[u] && (Yy[u] = !0,
        console.warn(o(u, " has been deprecated since v" + n + " and will be removed in the near future"))),
        e ? e(l, u, d) : !0
    }
}
;
iu.spelling = function(e) {
    return (n, i) => (console.warn(`${i} is likely a misspelling of ${e}`),
    !0)
}
;
function V_(t, e, n) {
    if (typeof t != "object")
        throw new pe("options must be an object",pe.ERR_BAD_OPTION_VALUE);
    const i = Object.keys(t);
    let o = i.length;
    for (; o-- > 0; ) {
        const l = i[o]
          , u = e[l];
        if (u) {
            const d = t[l]
              , f = d === void 0 || u(d, l, t);
            if (f !== !0)
                throw new pe("option " + l + " must be " + f,pe.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0)
            throw new pe("Unknown option " + l,pe.ERR_BAD_OPTION)
    }
}
const Al = {
    assertOptions: V_,
    validators: iu
}
  , Yt = Al.validators;
let ws = class {
    constructor(e) {
        this.defaults = e || {},
        this.interceptors = {
            request: new Fy,
            response: new Fy
        }
    }
    async request(e, n) {
        try {
            return await this._request(e, n)
        } catch (i) {
            if (i instanceof Error) {
                let o = {};
                Error.captureStackTrace ? Error.captureStackTrace(o) : o = new Error;
                const l = o.stack ? o.stack.replace(/^.+\n/, "") : "";
                try {
                    i.stack ? l && !String(i.stack).endsWith(l.replace(/^.+\n.+\n/, "")) && (i.stack += `
` + l) : i.stack = l
                } catch {}
            }
            throw i
        }
    }
    _request(e, n) {
        typeof e == "string" ? (n = n || {},
        n.url = e) : n = e || {},
        n = Es(this.defaults, n);
        const {transitional: i, paramsSerializer: o, headers: l} = n;
        i !== void 0 && Al.assertOptions(i, {
            silentJSONParsing: Yt.transitional(Yt.boolean),
            forcedJSONParsing: Yt.transitional(Yt.boolean),
            clarifyTimeoutError: Yt.transitional(Yt.boolean),
            legacyInterceptorReqResOrdering: Yt.transitional(Yt.boolean)
        }, !1),
        o != null && (U.isFunction(o) ? n.paramsSerializer = {
            serialize: o
        } : Al.assertOptions(o, {
            encode: Yt.function,
            serialize: Yt.function
        }, !0)),
        n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0),
        Al.assertOptions(n, {
            baseUrl: Yt.spelling("baseURL"),
            withXsrfToken: Yt.spelling("withXSRFToken")
        }, !0),
        n.method = (n.method || this.defaults.method || "get").toLowerCase();
        let u = l && U.merge(l.common, l[n.method]);
        l && U.forEach(["delete", "get", "head", "post", "put", "patch", "common"], b => {
            delete l[b]
        }
        ),
        n.headers = Dt.concat(u, l);
        const d = [];
        let f = !0;
        this.interceptors.request.forEach(function(k) {
            if (typeof k.runWhen == "function" && k.runWhen(n) === !1)
                return;
            f = f && k.synchronous;
            const S = n.transitional || th;
            S && S.legacyInterceptorReqResOrdering ? d.unshift(k.fulfilled, k.rejected) : d.push(k.fulfilled, k.rejected)
        });
        const p = [];
        this.interceptors.response.forEach(function(k) {
            p.push(k.fulfilled, k.rejected)
        });
        let m, y = 0, w;
        if (!f) {
            const b = [Gy.bind(this), void 0];
            for (b.unshift(...d),
            b.push(...p),
            w = b.length,
            m = Promise.resolve(n); y < w; )
                m = m.then(b[y++], b[y++]);
            return m
        }
        w = d.length;
        let C = n;
        for (; y < w; ) {
            const b = d[y++]
              , k = d[y++];
            try {
                C = b(C)
            } catch (S) {
                k.call(this, S);
                break
            }
        }
        try {
            m = Gy.call(this, C)
        } catch (b) {
            return Promise.reject(b)
        }
        for (y = 0,
        w = p.length; y < w; )
            m = m.then(p[y++], p[y++]);
        return m
    }
    getUri(e) {
        e = Es(this.defaults, e);
        const n = Jw(e.baseURL, e.url, e.allowAbsoluteUrls);
        return Qw(n, e.params, e.paramsSerializer)
    }
}
;
U.forEach(["delete", "get", "head", "options"], function(e) {
    ws.prototype[e] = function(n, i) {
        return this.request(Es(i || {}, {
            method: e,
            url: n,
            data: (i || {}).data
        }))
    }
});
U.forEach(["post", "put", "patch"], function(e) {
    function n(i) {
        return function(l, u, d) {
            return this.request(Es(d || {}, {
                method: e,
                headers: i ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: l,
                data: u
            }))
        }
    }
    ws.prototype[e] = n(),
    ws.prototype[e + "Form"] = n(!0)
});
let U_ = class rx {
    constructor(e) {
        if (typeof e != "function")
            throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function(l) {
            n = l
        }
        );
        const i = this;
        this.promise.then(o => {
            if (!i._listeners)
                return;
            let l = i._listeners.length;
            for (; l-- > 0; )
                i._listeners[l](o);
            i._listeners = null
        }
        ),
        this.promise.then = o => {
            let l;
            const u = new Promise(d => {
                i.subscribe(d),
                l = d
            }
            ).then(o);
            return u.cancel = function() {
                i.unsubscribe(l)
            }
            ,
            u
        }
        ,
        e(function(l, u, d) {
            i.reason || (i.reason = new ea(l,u,d),
            n(i.reason))
        })
    }
    throwIfRequested() {
        if (this.reason)
            throw this.reason
    }
    subscribe(e) {
        if (this.reason) {
            e(this.reason);
            return
        }
        this._listeners ? this._listeners.push(e) : this._listeners = [e]
    }
    unsubscribe(e) {
        if (!this._listeners)
            return;
        const n = this._listeners.indexOf(e);
        n !== -1 && this._listeners.splice(n, 1)
    }
    toAbortSignal() {
        const e = new AbortController
          , n = i => {
            e.abort(i)
        }
        ;
        return this.subscribe(n),
        e.signal.unsubscribe = () => this.unsubscribe(n),
        e.signal
    }
    static source() {
        let e;
        return {
            token: new rx(function(o) {
                e = o
            }
            ),
            cancel: e
        }
    }
}
;
function B_(t) {
    return function(n) {
        return t.apply(null, n)
    }
}
function z_(t) {
    return U.isObject(t) && t.isAxiosError === !0
}
const pf = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
    WebServerIsDown: 521,
    ConnectionTimedOut: 522,
    OriginIsUnreachable: 523,
    TimeoutOccurred: 524,
    SslHandshakeFailed: 525,
    InvalidSslCertificate: 526
};
Object.entries(pf).forEach( ([t,e]) => {
    pf[e] = t
}
);
function sx(t) {
    const e = new ws(t)
      , n = Iw(ws.prototype.request, e);
    return U.extend(n, ws.prototype, e, {
        allOwnKeys: !0
    }),
    U.extend(n, e, null, {
        allOwnKeys: !0
    }),
    n.create = function(o) {
        return sx(Es(t, o))
    }
    ,
    n
}
const et = sx(Zo);
et.Axios = ws;
et.CanceledError = ea;
et.CancelToken = U_;
et.isCancel = Yw;
et.VERSION = nx;
et.toFormData = su;
et.AxiosError = pe;
et.Cancel = et.CanceledError;
et.all = function(e) {
    return Promise.all(e)
}
;
et.spread = B_;
et.isAxiosError = z_;
et.mergeConfig = Es;
et.AxiosHeaders = Dt;
et.formToJSON = t => Gw(U.isHTMLForm(t) ? new FormData(t) : t);
et.getAdapter = tx.getAdapter;
et.HttpStatusCode = pf;
et.default = et;
const {Axios: xM, AxiosError: SM, CanceledError: bM, isCancel: CM, CancelToken: EM, VERSION: kM, all: TM, Cancel: PM, isAxiosError: _M, spread: RM, toFormData: AM, AxiosHeaders: NM, HttpStatusCode: OM, formToJSON: jM, getAdapter: LM, mergeConfig: MM} = et
  , $_ = typeof window > "u"
  , Xy = !$_ && window.self !== window.top
  , kd = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  , ft = [];
for (let t = 0; t < 256; ++t)
    ft.push((t + 256).toString(16).slice(1));
function H_(t, e=0) {
    return (ft[t[e + 0]] + ft[t[e + 1]] + ft[t[e + 2]] + ft[t[e + 3]] + "-" + ft[t[e + 4]] + ft[t[e + 5]] + "-" + ft[t[e + 6]] + ft[t[e + 7]] + "-" + ft[t[e + 8]] + ft[t[e + 9]] + "-" + ft[t[e + 10]] + ft[t[e + 11]] + ft[t[e + 12]] + ft[t[e + 13]] + ft[t[e + 14]] + ft[t[e + 15]]).toLowerCase()
}
let Td;
const W_ = new Uint8Array(16);
function q_() {
    if (!Td) {
        if (typeof crypto > "u" || !crypto.getRandomValues)
            throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        Td = crypto.getRandomValues.bind(crypto)
    }
    return Td(W_)
}
const K_ = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto)
  , Jy = {
    randomUUID: K_
};
function Q_(t, e, n) {
    var o;
    t = t || {};
    const i = t.random ?? ((o = t.rng) == null ? void 0 : o.call(t)) ?? q_();
    if (i.length < 16)
        throw new Error("Random bytes length must be >= 16");
    return i[6] = i[6] & 15 | 64,
    i[8] = i[8] & 63 | 128,
    H_(i)
}
function G_(t, e, n) {
    return Jy.randomUUID && !t ? Jy.randomUUID() : Q_(t)
}
class Y_ extends Error {
    constructor(e, n, i, o, l) {
        super(e),
        this.name = "Base44Error",
        this.status = n,
        this.code = i,
        this.data = o,
        this.originalError = l
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            code: this.code,
            data: this.data
        }
    }
}
function Co({baseURL: t, headers: e={}, token: n, interceptResponses: i=!0, onError: o}) {
    const l = et.create({
        baseURL: t,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            ...e
        }
    });
    return n && (l.defaults.headers.common.Authorization = `Bearer ${n}`),
    l.interceptors.request.use(u => {
        typeof window < "u" && u.headers.set("X-Origin-URL", window.location.href);
        const d = G_();
        if (u.requestId = d,
        Xy)
            try {
                window.parent.postMessage({
                    type: "api-request-start",
                    requestId: d,
                    data: {
                        url: t + u.url,
                        method: u.method,
                        body: u.data instanceof FormData ? "[FormData object]" : u.data
                    }
                }, "*")
            } catch {}
        return u
    }
    ),
    i && l.interceptors.response.use(u => {
        var d;
        const f = (d = u.config) === null || d === void 0 ? void 0 : d.requestId;
        try {
            Xy && f && window.parent.postMessage({
                type: "api-request-end",
                requestId: f,
                data: {
                    statusCode: u.status,
                    response: u.data
                }
            }, "*")
        } catch {}
        return u.data
    }
    , u => {
        var d, f, p, m, y, w, C, b;
        const k = ((f = (d = u.response) === null || d === void 0 ? void 0 : d.data) === null || f === void 0 ? void 0 : f.message) || ((m = (p = u.response) === null || p === void 0 ? void 0 : p.data) === null || m === void 0 ? void 0 : m.detail) || u.message
          , S = new Y_(k,(y = u.response) === null || y === void 0 ? void 0 : y.status,(C = (w = u.response) === null || w === void 0 ? void 0 : w.data) === null || C === void 0 ? void 0 : C.code,(b = u.response) === null || b === void 0 ? void 0 : b.data,u);
        return o == null || o(S),
        Promise.reject(S)
    }
    ),
    l
}
function Zy(t) {
    const {axios: e, appId: n, getSocket: i} = t;
    return new Proxy({},{
        get(o, l) {
            if (!(typeof l != "string" || l === "then" || l.startsWith("_")))
                return J_(e, n, l, i)
        }
    })
}
function X_(t) {
    var e;
    try {
        const n = JSON.parse(t);
        return {
            type: n.type,
            data: n.data,
            id: n.id || ((e = n.data) === null || e === void 0 ? void 0 : e.id),
            timestamp: n.timestamp || new Date().toISOString()
        }
    } catch (n) {
        return console.warn("[Base44 SDK] Failed to parse realtime message:", n),
        null
    }
}
function J_(t, e, n, i) {
    const o = `/apps/${e}/entities/${n}`;
    return {
        async list(l, u, d, f) {
            const p = {};
            return l && (p.sort = l),
            u && (p.limit = u),
            d && (p.skip = d),
            f && (p.fields = Array.isArray(f) ? f.join(",") : f),
            t.get(o, {
                params: p
            })
        },
        async filter(l, u, d, f, p) {
            const m = {
                q: JSON.stringify(l)
            };
            return u && (m.sort = u),
            d && (m.limit = d),
            f && (m.skip = f),
            p && (m.fields = Array.isArray(p) ? p.join(",") : p),
            t.get(o, {
                params: m
            })
        },
        async get(l) {
            return t.get(`${o}/${l}`)
        },
        async create(l) {
            return t.post(o, l)
        },
        async update(l, u) {
            return t.put(`${o}/${l}`, u)
        },
        async delete(l) {
            return t.delete(`${o}/${l}`)
        },
        async deleteMany(l) {
            return t.delete(o, {
                data: l
            })
        },
        async bulkCreate(l) {
            return t.post(`${o}/bulk`, l)
        },
        async updateMany(l, u) {
            return t.patch(`${o}/update-many`, {
                query: l,
                data: u
            })
        },
        async bulkUpdate(l) {
            return t.put(`${o}/bulk`, l)
        },
        async importEntities(l) {
            const u = new FormData;
            return u.append("file", l, l.name),
            t.post(`${o}/import`, u, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
        },
        subscribe(l) {
            const u = `entities:${e}:${n}`;
            return i().subscribeToRoom(u, {
                update_model: p => {
                    const m = X_(p.data);
                    if (m)
                        try {
                            l(m)
                        } catch (y) {
                            console.error("[Base44 SDK] Subscription callback error:", y)
                        }
                }
            })
        }
    }
}
function Z_(t, e) {
    return {
        async call(n, i, o) {
            if (!(n != null && n.trim()))
                throw new Error("Integration slug is required and cannot be empty");
            if (!(i != null && i.trim()))
                throw new Error("Operation ID is required and cannot be empty");
            const {pathParams: l, queryParams: u, ...d} = o ?? {}
              , f = {
                ...d,
                ...l && {
                    path_params: l
                },
                ...u && {
                    query_params: u
                }
            };
            return await t.post(`/apps/${e}/integrations/custom/${n}/${i}`, f)
        }
    }
}
function ev(t, e) {
    const n = Z_(t, e);
    return new Proxy({},{
        get(i, o) {
            if (!(typeof o != "string" || o === "then" || o.startsWith("_")))
                return o === "custom" ? n : new Proxy({},{
                    get(l, u) {
                        if (!(typeof u != "string" || u === "then" || u.startsWith("_")))
                            return async d => {
                                if (typeof d == "string")
                                    throw new Error(`Integration ${u} must receive an object with named parameters, received: ${d}`);
                                let f, p;
                                return d instanceof FormData || d && Object.values(d).some(m => m instanceof File) ? (f = new FormData,
                                Object.keys(d).forEach(m => {
                                    d[m]instanceof File ? f.append(m, d[m], d[m].name) : typeof d[m] == "object" && d[m] !== null ? f.append(m, JSON.stringify(d[m])) : f.append(m, d[m])
                                }
                                ),
                                p = "multipart/form-data") : (f = d,
                                p = "application/json"),
                                o === "Core" ? t.post(`/apps/${e}/integration-endpoints/Core/${u}`, f || d, {
                                    headers: {
                                        "Content-Type": p
                                    }
                                }) : t.post(`/apps/${e}/integration-endpoints/installable/${o}/integration-endpoints/${u}`, f || d, {
                                    headers: {
                                        "Content-Type": p
                                    }
                                })
                            }
                    }
                })
        }
    })
}
function eR(t, e, n, i) {
    return {
        async me() {
            return t.get(`/apps/${n}/entities/User/me`)
        },
        async updateMe(o) {
            return t.put(`/apps/${n}/entities/User/me`, o)
        },
        redirectToLogin(o) {
            if (typeof window > "u")
                throw new Error("Login method can only be used in a browser environment");
            const l = o ? new URL(o,window.location.origin).toString() : window.location.href
              , u = `${i.appBaseUrl}/login?from_url=${encodeURIComponent(l)}`;
            window.location.href = u
        },
        loginWithProvider(o, l="/") {
            const u = new URL(l,window.location.origin).toString()
              , d = `app_id=${n}&from_url=${encodeURIComponent(u)}`;
            let f;
            o === "sso" ? f = `/apps/${n}/auth/sso/login` : f = `/apps/auth${o === "google" ? "" : `/${o}`}/login`;
            const p = `${i.appBaseUrl}/api${f}?${d}`;
            window.location.href = p
        },
        logout(o) {
            if (delete t.defaults.headers.common.Authorization,
            typeof window < "u") {
                if (window.localStorage)
                    try {
                        window.localStorage.removeItem("base44_access_token"),
                        window.localStorage.removeItem("token")
                    } catch (d) {
                        console.error("Failed to remove token from localStorage:", d)
                    }
                const l = o || window.location.href
                  , u = `${i.appBaseUrl}/api/apps/auth/logout?from_url=${encodeURIComponent(l)}`;
                window.location.href = u
            }
        },
        setToken(o, l=!0) {
            if (o && (t.defaults.headers.common.Authorization = `Bearer ${o}`,
            e.defaults.headers.common.Authorization = `Bearer ${o}`,
            l && typeof window < "u" && window.localStorage))
                try {
                    window.localStorage.setItem("base44_access_token", o),
                    window.localStorage.setItem("token", o)
                } catch (u) {
                    console.error("Failed to save token to localStorage:", u)
                }
        },
        async loginViaEmailPassword(o, l, u) {
            var d;
            try {
                const f = await t.post(`/apps/${n}/auth/login`, {
                    email: o,
                    password: l,
                    ...u && {
                        turnstile_token: u
                    }
                })
                  , {access_token: p, user: m} = f;
                return p && this.setToken(p),
                {
                    access_token: p,
                    user: m
                }
            } catch (f) {
                throw ((d = f.response) === null || d === void 0 ? void 0 : d.status) === 401 && await this.logout(),
                f
            }
        },
        async isAuthenticated() {
            try {
                return await this.me(),
                !0
            } catch {
                return !1
            }
        },
        inviteUser(o, l) {
            return t.post(`/apps/${n}/users/invite-user`, {
                user_email: o,
                role: l
            })
        },
        register(o) {
            return t.post(`/apps/${n}/auth/register`, o)
        },
        verifyOtp({email: o, otpCode: l}) {
            return t.post(`/apps/${n}/auth/verify-otp`, {
                email: o,
                otp_code: l
            })
        },
        resendOtp(o) {
            return t.post(`/apps/${n}/auth/resend-otp`, {
                email: o
            })
        },
        resetPasswordRequest(o) {
            return t.post(`/apps/${n}/auth/reset-password-request`, {
                email: o
            })
        },
        resetPassword({resetToken: o, newPassword: l}) {
            return t.post(`/apps/${n}/auth/reset-password`, {
                reset_token: o,
                new_password: l
            })
        },
        changePassword({userId: o, currentPassword: l, newPassword: u}) {
            return t.post(`/apps/${n}/auth/change-password`, {
                user_id: o,
                current_password: l,
                new_password: u
            })
        }
    }
}
function tR(t, e, n) {
    return {
        async getAccessToken(i) {
            const o = `/apps/${e}/auth/sso/accesstoken/${i}`
              , l = {};
            return n && (l["on-behalf-of"] = `Bearer ${n}`),
            t.get(o, {
                headers: l
            })
        }
    }
}
function nR(t, e) {
    return {
        async getAccessToken(n) {
            if (!n || typeof n != "string")
                throw new Error("Integration type is required and must be a string");
            return (await t.get(`/apps/${e}/external-auth/tokens/${n}`)).access_token
        },
        async getConnection(n) {
            var i;
            if (!n || typeof n != "string")
                throw new Error("Integration type is required and must be a string");
            const l = await t.get(`/apps/${e}/external-auth/tokens/${n}`);
            return {
                accessToken: l.access_token,
                connectionConfig: (i = l.connection_config) !== null && i !== void 0 ? i : null
            }
        }
    }
}
function rR(t, e) {
    return {
        async getCurrentAppUserAccessToken(n) {
            if (!n || typeof n != "string")
                throw new Error("Connector ID is required and must be a string");
            return (await t.get(`/apps/${e}/app-user-auth/connectors/${n}/token`)).access_token
        },
        async connectAppUser(n) {
            if (!n || typeof n != "string")
                throw new Error("Connector ID is required and must be a string");
            return (await t.post(`/apps/${e}/app-user-auth/connectors/${n}/initiate`)).redirect_url
        },
        async disconnectAppUser(n) {
            if (!n || typeof n != "string")
                throw new Error("Connector ID is required and must be a string");
            await t.delete(`/apps/${e}/app-user-auth/connectors/${n}`)
        }
    }
}
function zl(t={}) {
    const {storageKey: e="base44_access_token", paramName: n="access_token", saveToStorage: i=!0, removeFromUrl: o=!0} = t;
    let l = null;
    if (typeof window < "u" && window.location)
        try {
            const u = new URLSearchParams(window.location.search);
            if (l = u.get(n),
            l) {
                if (i && sR(l, {
                    storageKey: e
                }),
                o) {
                    u.delete(n);
                    const d = `${window.location.pathname}${u.toString() ? `?${u.toString()}` : ""}${window.location.hash}`;
                    window.history.replaceState({}, document.title, d)
                }
                return l
            }
        } catch (u) {
            console.error("Error retrieving token from URL:", u)
        }
    if (typeof window < "u" && window.localStorage)
        try {
            return l = window.localStorage.getItem(e),
            l
        } catch (u) {
            console.error("Error retrieving token from local storage:", u)
        }
    return null
}
function sR(t, e) {
    const {storageKey: n="base44_access_token"} = e;
    if (typeof window > "u" || !window.localStorage || !t)
        return !1;
    try {
        return window.localStorage.setItem(n, t),
        window.localStorage.setItem("token", t),
        !0
    } catch (i) {
        return console.error("Error saving token to local storage:", i),
        !1
    }
}
function tv(t, e, n) {
    const i = (l, u) => l ? `${String(l).replace(/\/$/, "")}${u}` : u
      , o = l => {
        const u = new Headers;
        if (n != null && n.getAuthHeaders) {
            const d = n.getAuthHeaders();
            Object.entries(d).forEach( ([f,p]) => {
                p != null && u.set(f, String(p))
            }
            )
        }
        return l && new Headers(l).forEach( (d, f) => {
            u.set(f, d)
        }
        ),
        u
    }
    ;
    return {
        async invoke(l, u) {
            if (typeof u == "string")
                throw new Error(`Function ${l} must receive an object with named parameters, received: ${u}`);
            let d, f;
            return u instanceof FormData || u && Object.values(u).some(p => p instanceof File) ? (d = new FormData,
            Object.keys(u).forEach(p => {
                u[p]instanceof File ? d.append(p, u[p], u[p].name) : typeof u[p] == "object" && u[p] !== null ? d.append(p, JSON.stringify(u[p])) : d.append(p, u[p])
            }
            ),
            f = "multipart/form-data") : (d = u,
            f = "application/json"),
            t.post(`/apps/${e}/functions/${l}`, d || u, {
                headers: {
                    "Content-Type": f
                }
            })
        },
        async fetch(l, u={}) {
            const f = `/functions${l.startsWith("/") ? l : `/${l}`}`
              , p = o(u.headers)
              , m = {
                ...u,
                headers: p
            };
            return await fetch(i(n == null ? void 0 : n.baseURL, f), m)
        }
    }
}
function nv({axios: t, getSocket: e, appId: n, serverUrl: i, token: o}) {
    const l = `/apps/${n}/agents`
      , u = {}
      , d = () => t.get(`${l}/conversations`)
      , f = b => t.get(`${l}/conversations/${b}`);
    return {
        getConversations: d,
        getConversation: f,
        listConversations: b => t.get(`${l}/conversations`, {
            params: b
        }),
        createConversation: b => t.post(`${l}/conversations`, b),
        addMessage: async (b, k) => t.post(`${l}/conversations/v2/${b.id}/messages`, k),
        subscribeToConversation: (b, k) => {
            const S = `/agent-conversations/${b}`
              , P = e()
              , L = f(b).then(j => (u[b] = j,
            j));
            return P.subscribeToRoom(S, {
                connect: () => {}
                ,
                update_model: async ({data: j}) => {
                    const N = JSON.parse(j);
                    if (N._message) {
                        await L;
                        const V = N._message
                          , $ = u[b];
                        if ($) {
                            const Y = $.messages || []
                              , I = Y.findIndex(X => X.id === V.id)
                              , Q = I !== -1 ? Y.map( (X, xe) => xe === I ? V : X) : [...Y, V];
                            u[b] = {
                                ...$,
                                messages: Q
                            },
                            k == null || k(u[b])
                        }
                    }
                }
            })
        }
        ,
        getWhatsAppConnectURL: b => {
            const k = `${i}/api/apps/${n}/agents/${encodeURIComponent(b)}/whatsapp`
              , S = o ?? zl();
            return S ? `${k}?token=${S}` : k
        }
    }
}
function rv(t, e) {
    const n = `/app-logs/${e}`;
    return {
        async logUserInApp(i) {
            await t.post(`${n}/log-user-in-app/${i}`)
        },
        async fetchLogs(i={}) {
            return await t.get(n, {
                params: i
            })
        },
        async getStats(i={}) {
            return await t.get(`${n}/stats`, {
                params: i
            })
        }
    }
}
function iR(t, e) {
    return {
        async inviteUser(n, i) {
            if (i !== "user" && i !== "admin")
                throw new Error(`Invalid role: "${i}". Role must be either "user" or "admin".`);
            return await t.post(`/apps/${e}/runtime/users/invite-user`, {
                user_email: n,
                role: i
            })
        }
    }
}
const An = Object.create(null);
An.open = "0";
An.close = "1";
An.ping = "2";
An.pong = "3";
An.message = "4";
An.upgrade = "5";
An.noop = "6";
const Nl = Object.create(null);
Object.keys(An).forEach(t => {
    Nl[An[t]] = t
}
);
const mf = {
    type: "error",
    data: "parser error"
}
  , ix = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]"
  , ox = typeof ArrayBuffer == "function"
  , ax = t => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer
  , sh = ({type: t, data: e}, n, i) => ix && e instanceof Blob ? n ? i(e) : sv(e, i) : ox && (e instanceof ArrayBuffer || ax(e)) ? n ? i(e) : sv(new Blob([e]), i) : i(An[t] + (e || ""))
  , sv = (t, e) => {
    const n = new FileReader;
    return n.onload = function() {
        const i = n.result.split(",")[1];
        e("b" + (i || ""))
    }
    ,
    n.readAsDataURL(t)
}
;
function iv(t) {
    return t instanceof Uint8Array ? t : t instanceof ArrayBuffer ? new Uint8Array(t) : new Uint8Array(t.buffer,t.byteOffset,t.byteLength)
}
let Pd;
function oR(t, e) {
    if (ix && t.data instanceof Blob)
        return t.data.arrayBuffer().then(iv).then(e);
    if (ox && (t.data instanceof ArrayBuffer || ax(t.data)))
        return e(iv(t.data));
    sh(t, !1, n => {
        Pd || (Pd = new TextEncoder),
        e(Pd.encode(n))
    }
    )
}
const ov = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  , Eo = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let t = 0; t < ov.length; t++)
    Eo[ov.charCodeAt(t)] = t;
const aR = t => {
    let e = t.length * .75, n = t.length, i, o = 0, l, u, d, f;
    t[t.length - 1] === "=" && (e--,
    t[t.length - 2] === "=" && e--);
    const p = new ArrayBuffer(e)
      , m = new Uint8Array(p);
    for (i = 0; i < n; i += 4)
        l = Eo[t.charCodeAt(i)],
        u = Eo[t.charCodeAt(i + 1)],
        d = Eo[t.charCodeAt(i + 2)],
        f = Eo[t.charCodeAt(i + 3)],
        m[o++] = l << 2 | u >> 4,
        m[o++] = (u & 15) << 4 | d >> 2,
        m[o++] = (d & 3) << 6 | f & 63;
    return p
}
  , lR = typeof ArrayBuffer == "function"
  , ih = (t, e) => {
    if (typeof t != "string")
        return {
            type: "message",
            data: lx(t, e)
        };
    const n = t.charAt(0);
    return n === "b" ? {
        type: "message",
        data: uR(t.substring(1), e)
    } : Nl[n] ? t.length > 1 ? {
        type: Nl[n],
        data: t.substring(1)
    } : {
        type: Nl[n]
    } : mf
}
  , uR = (t, e) => {
    if (lR) {
        const n = aR(t);
        return lx(n, e)
    } else
        return {
            base64: !0,
            data: t
        }
}
  , lx = (t, e) => {
    switch (e) {
    case "blob":
        return t instanceof Blob ? t : new Blob([t]);
    case "arraybuffer":
    default:
        return t instanceof ArrayBuffer ? t : t.buffer
    }
}
  , ux = ""
  , cR = (t, e) => {
    const n = t.length
      , i = new Array(n);
    let o = 0;
    t.forEach( (l, u) => {
        sh(l, !1, d => {
            i[u] = d,
            ++o === n && e(i.join(ux))
        }
        )
    }
    )
}
  , dR = (t, e) => {
    const n = t.split(ux)
      , i = [];
    for (let o = 0; o < n.length; o++) {
        const l = ih(n[o], e);
        if (i.push(l),
        l.type === "error")
            break
    }
    return i
}
;
function fR() {
    return new TransformStream({
        transform(t, e) {
            oR(t, n => {
                const i = n.length;
                let o;
                if (i < 126)
                    o = new Uint8Array(1),
                    new DataView(o.buffer).setUint8(0, i);
                else if (i < 65536) {
                    o = new Uint8Array(3);
                    const l = new DataView(o.buffer);
                    l.setUint8(0, 126),
                    l.setUint16(1, i)
                } else {
                    o = new Uint8Array(9);
                    const l = new DataView(o.buffer);
                    l.setUint8(0, 127),
                    l.setBigUint64(1, BigInt(i))
                }
                t.data && typeof t.data != "string" && (o[0] |= 128),
                e.enqueue(o),
                e.enqueue(n)
            }
            )
        }
    })
}
let _d;
function wl(t) {
    return t.reduce( (e, n) => e + n.length, 0)
}
function xl(t, e) {
    if (t[0].length === e)
        return t.shift();
    const n = new Uint8Array(e);
    let i = 0;
    for (let o = 0; o < e; o++)
        n[o] = t[0][i++],
        i === t[0].length && (t.shift(),
        i = 0);
    return t.length && i < t[0].length && (t[0] = t[0].slice(i)),
    n
}
function hR(t, e) {
    _d || (_d = new TextDecoder);
    const n = [];
    let i = 0
      , o = -1
      , l = !1;
    return new TransformStream({
        transform(u, d) {
            for (n.push(u); ; ) {
                if (i === 0) {
                    if (wl(n) < 1)
                        break;
                    const f = xl(n, 1);
                    l = (f[0] & 128) === 128,
                    o = f[0] & 127,
                    o < 126 ? i = 3 : o === 126 ? i = 1 : i = 2
                } else if (i === 1) {
                    if (wl(n) < 2)
                        break;
                    const f = xl(n, 2);
                    o = new DataView(f.buffer,f.byteOffset,f.length).getUint16(0),
                    i = 3
                } else if (i === 2) {
                    if (wl(n) < 8)
                        break;
                    const f = xl(n, 8)
                      , p = new DataView(f.buffer,f.byteOffset,f.length)
                      , m = p.getUint32(0);
                    if (m > Math.pow(2, 21) - 1) {
                        d.enqueue(mf);
                        break
                    }
                    o = m * Math.pow(2, 32) + p.getUint32(4),
                    i = 3
                } else {
                    if (wl(n) < o)
                        break;
                    const f = xl(n, o);
                    d.enqueue(ih(l ? f : _d.decode(f), e)),
                    i = 0
                }
                if (o === 0 || o > t) {
                    d.enqueue(mf);
                    break
                }
            }
        }
    })
}
const cx = 4;
function nt(t) {
    if (t)
        return pR(t)
}
function pR(t) {
    for (var e in nt.prototype)
        t[e] = nt.prototype[e];
    return t
}
nt.prototype.on = nt.prototype.addEventListener = function(t, e) {
    return this._callbacks = this._callbacks || {},
    (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e),
    this
}
;
nt.prototype.once = function(t, e) {
    function n() {
        this.off(t, n),
        e.apply(this, arguments)
    }
    return n.fn = e,
    this.on(t, n),
    this
}
;
nt.prototype.off = nt.prototype.removeListener = nt.prototype.removeAllListeners = nt.prototype.removeEventListener = function(t, e) {
    if (this._callbacks = this._callbacks || {},
    arguments.length == 0)
        return this._callbacks = {},
        this;
    var n = this._callbacks["$" + t];
    if (!n)
        return this;
    if (arguments.length == 1)
        return delete this._callbacks["$" + t],
        this;
    for (var i, o = 0; o < n.length; o++)
        if (i = n[o],
        i === e || i.fn === e) {
            n.splice(o, 1);
            break
        }
    return n.length === 0 && delete this._callbacks["$" + t],
    this
}
;
nt.prototype.emit = function(t) {
    this._callbacks = this._callbacks || {};
    for (var e = new Array(arguments.length - 1), n = this._callbacks["$" + t], i = 1; i < arguments.length; i++)
        e[i - 1] = arguments[i];
    if (n) {
        n = n.slice(0);
        for (var i = 0, o = n.length; i < o; ++i)
            n[i].apply(this, e)
    }
    return this
}
;
nt.prototype.emitReserved = nt.prototype.emit;
nt.prototype.listeners = function(t) {
    return this._callbacks = this._callbacks || {},
    this._callbacks["$" + t] || []
}
;
nt.prototype.hasListeners = function(t) {
    return !!this.listeners(t).length
}
;
const ou = typeof Promise == "function" && typeof Promise.resolve == "function" ? e => Promise.resolve().then(e) : (e, n) => n(e, 0)
  , tn = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")()
  , mR = "arraybuffer";
function dx(t, ...e) {
    return e.reduce( (n, i) => (t.hasOwnProperty(i) && (n[i] = t[i]),
    n), {})
}
const gR = tn.setTimeout
  , yR = tn.clearTimeout;
function au(t, e) {
    e.useNativeTimers ? (t.setTimeoutFn = gR.bind(tn),
    t.clearTimeoutFn = yR.bind(tn)) : (t.setTimeoutFn = tn.setTimeout.bind(tn),
    t.clearTimeoutFn = tn.clearTimeout.bind(tn))
}
const vR = 1.33;
function wR(t) {
    return typeof t == "string" ? xR(t) : Math.ceil((t.byteLength || t.size) * vR)
}
function xR(t) {
    let e = 0
      , n = 0;
    for (let i = 0, o = t.length; i < o; i++)
        e = t.charCodeAt(i),
        e < 128 ? n += 1 : e < 2048 ? n += 2 : e < 55296 || e >= 57344 ? n += 3 : (i++,
        n += 4);
    return n
}
function fx() {
    return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5)
}
function SR(t) {
    let e = "";
    for (let n in t)
        t.hasOwnProperty(n) && (e.length && (e += "&"),
        e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
    return e
}
function bR(t) {
    let e = {}
      , n = t.split("&");
    for (let i = 0, o = n.length; i < o; i++) {
        let l = n[i].split("=");
        e[decodeURIComponent(l[0])] = decodeURIComponent(l[1])
    }
    return e
}
class CR extends Error {
    constructor(e, n, i) {
        super(e),
        this.description = n,
        this.context = i,
        this.type = "TransportError"
    }
}
class oh extends nt {
    constructor(e) {
        super(),
        this.writable = !1,
        au(this, e),
        this.opts = e,
        this.query = e.query,
        this.socket = e.socket,
        this.supportsBinary = !e.forceBase64
    }
    onError(e, n, i) {
        return super.emitReserved("error", new CR(e,n,i)),
        this
    }
    open() {
        return this.readyState = "opening",
        this.doOpen(),
        this
    }
    close() {
        return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(),
        this.onClose()),
        this
    }
    send(e) {
        this.readyState === "open" && this.write(e)
    }
    onOpen() {
        this.readyState = "open",
        this.writable = !0,
        super.emitReserved("open")
    }
    onData(e) {
        const n = ih(e, this.socket.binaryType);
        this.onPacket(n)
    }
    onPacket(e) {
        super.emitReserved("packet", e)
    }
    onClose(e) {
        this.readyState = "closed",
        super.emitReserved("close", e)
    }
    pause(e) {}
    createUri(e, n={}) {
        return e + "://" + this._hostname() + this._port() + this.opts.path + this._query(n)
    }
    _hostname() {
        const e = this.opts.hostname;
        return e.indexOf(":") === -1 ? e : "[" + e + "]"
    }
    _port() {
        return this.opts.port && (this.opts.secure && Number(this.opts.port) !== 443 || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : ""
    }
    _query(e) {
        const n = SR(e);
        return n.length ? "?" + n : ""
    }
}
class ER extends oh {
    constructor() {
        super(...arguments),
        this._polling = !1
    }
    get name() {
        return "polling"
    }
    doOpen() {
        this._poll()
    }
    pause(e) {
        this.readyState = "pausing";
        const n = () => {
            this.readyState = "paused",
            e()
        }
        ;
        if (this._polling || !this.writable) {
            let i = 0;
            this._polling && (i++,
            this.once("pollComplete", function() {
                --i || n()
            })),
            this.writable || (i++,
            this.once("drain", function() {
                --i || n()
            }))
        } else
            n()
    }
    _poll() {
        this._polling = !0,
        this.doPoll(),
        this.emitReserved("poll")
    }
    onData(e) {
        const n = i => {
            if (this.readyState === "opening" && i.type === "open" && this.onOpen(),
            i.type === "close")
                return this.onClose({
                    description: "transport closed by the server"
                }),
                !1;
            this.onPacket(i)
        }
        ;
        dR(e, this.socket.binaryType).forEach(n),
        this.readyState !== "closed" && (this._polling = !1,
        this.emitReserved("pollComplete"),
        this.readyState === "open" && this._poll())
    }
    doClose() {
        const e = () => {
            this.write([{
                type: "close"
            }])
        }
        ;
        this.readyState === "open" ? e() : this.once("open", e)
    }
    write(e) {
        this.writable = !1,
        cR(e, n => {
            this.doWrite(n, () => {
                this.writable = !0,
                this.emitReserved("drain")
            }
            )
        }
        )
    }
    uri() {
        const e = this.opts.secure ? "https" : "http"
          , n = this.query || {};
        return this.opts.timestampRequests !== !1 && (n[this.opts.timestampParam] = fx()),
        !this.supportsBinary && !n.sid && (n.b64 = 1),
        this.createUri(e, n)
    }
}
let hx = !1;
try {
    hx = typeof XMLHttpRequest < "u" && "withCredentials"in new XMLHttpRequest
} catch {}
const kR = hx;
function TR() {}
class PR extends ER {
    constructor(e) {
        if (super(e),
        typeof location < "u") {
            const n = location.protocol === "https:";
            let i = location.port;
            i || (i = n ? "443" : "80"),
            this.xd = typeof location < "u" && e.hostname !== location.hostname || i !== e.port
        }
    }
    doWrite(e, n) {
        const i = this.request({
            method: "POST",
            data: e
        });
        i.on("success", n),
        i.on("error", (o, l) => {
            this.onError("xhr post error", o, l)
        }
        )
    }
    doPoll() {
        const e = this.request();
        e.on("data", this.onData.bind(this)),
        e.on("error", (n, i) => {
            this.onError("xhr poll error", n, i)
        }
        ),
        this.pollXhr = e
    }
}
class Pn extends nt {
    constructor(e, n, i) {
        super(),
        this.createRequest = e,
        au(this, i),
        this._opts = i,
        this._method = i.method || "GET",
        this._uri = n,
        this._data = i.data !== void 0 ? i.data : null,
        this._create()
    }
    _create() {
        var e;
        const n = dx(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
        n.xdomain = !!this._opts.xd;
        const i = this._xhr = this.createRequest(n);
        try {
            i.open(this._method, this._uri, !0);
            try {
                if (this._opts.extraHeaders) {
                    i.setDisableHeaderCheck && i.setDisableHeaderCheck(!0);
                    for (let o in this._opts.extraHeaders)
                        this._opts.extraHeaders.hasOwnProperty(o) && i.setRequestHeader(o, this._opts.extraHeaders[o])
                }
            } catch {}
            if (this._method === "POST")
                try {
                    i.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                } catch {}
            try {
                i.setRequestHeader("Accept", "*/*")
            } catch {}
            (e = this._opts.cookieJar) === null || e === void 0 || e.addCookies(i),
            "withCredentials"in i && (i.withCredentials = this._opts.withCredentials),
            this._opts.requestTimeout && (i.timeout = this._opts.requestTimeout),
            i.onreadystatechange = () => {
                var o;
                i.readyState === 3 && ((o = this._opts.cookieJar) === null || o === void 0 || o.parseCookies(i.getResponseHeader("set-cookie"))),
                i.readyState === 4 && (i.status === 200 || i.status === 1223 ? this._onLoad() : this.setTimeoutFn( () => {
                    this._onError(typeof i.status == "number" ? i.status : 0)
                }
                , 0))
            }
            ,
            i.send(this._data)
        } catch (o) {
            this.setTimeoutFn( () => {
                this._onError(o)
            }
            , 0);
            return
        }
        typeof document < "u" && (this._index = Pn.requestsCount++,
        Pn.requests[this._index] = this)
    }
    _onError(e) {
        this.emitReserved("error", e, this._xhr),
        this._cleanup(!0)
    }
    _cleanup(e) {
        if (!(typeof this._xhr > "u" || this._xhr === null)) {
            if (this._xhr.onreadystatechange = TR,
            e)
                try {
                    this._xhr.abort()
                } catch {}
            typeof document < "u" && delete Pn.requests[this._index],
            this._xhr = null
        }
    }
    _onLoad() {
        const e = this._xhr.responseText;
        e !== null && (this.emitReserved("data", e),
        this.emitReserved("success"),
        this._cleanup())
    }
    abort() {
        this._cleanup()
    }
}
Pn.requestsCount = 0;
Pn.requests = {};
if (typeof document < "u") {
    if (typeof attachEvent == "function")
        attachEvent("onunload", av);
    else if (typeof addEventListener == "function") {
        const t = "onpagehide"in tn ? "pagehide" : "unload";
        addEventListener(t, av, !1)
    }
}
function av() {
    for (let t in Pn.requests)
        Pn.requests.hasOwnProperty(t) && Pn.requests[t].abort()
}
const _R = (function() {
    const t = px({
        xdomain: !1
    });
    return t && t.responseType !== null
}
)();
class RR extends PR {
    constructor(e) {
        super(e);
        const n = e && e.forceBase64;
        this.supportsBinary = _R && !n
    }
    request(e={}) {
        return Object.assign(e, {
            xd: this.xd
        }, this.opts),
        new Pn(px,this.uri(),e)
    }
}
function px(t) {
    const e = t.xdomain;
    try {
        if (typeof XMLHttpRequest < "u" && (!e || kR))
            return new XMLHttpRequest
    } catch {}
    if (!e)
        try {
            return new tn[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")
        } catch {}
}
const mx = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class AR extends oh {
    get name() {
        return "websocket"
    }
    doOpen() {
        const e = this.uri()
          , n = this.opts.protocols
          , i = mx ? {} : dx(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
        this.opts.extraHeaders && (i.headers = this.opts.extraHeaders);
        try {
            this.ws = this.createSocket(e, n, i)
        } catch (o) {
            return this.emitReserved("error", o)
        }
        this.ws.binaryType = this.socket.binaryType,
        this.addEventListeners()
    }
    addEventListeners() {
        this.ws.onopen = () => {
            this.opts.autoUnref && this.ws._socket.unref(),
            this.onOpen()
        }
        ,
        this.ws.onclose = e => this.onClose({
            description: "websocket connection closed",
            context: e
        }),
        this.ws.onmessage = e => this.onData(e.data),
        this.ws.onerror = e => this.onError("websocket error", e)
    }
    write(e) {
        this.writable = !1;
        for (let n = 0; n < e.length; n++) {
            const i = e[n]
              , o = n === e.length - 1;
            sh(i, this.supportsBinary, l => {
                try {
                    this.doWrite(i, l)
                } catch {}
                o && ou( () => {
                    this.writable = !0,
                    this.emitReserved("drain")
                }
                , this.setTimeoutFn)
            }
            )
        }
    }
    doClose() {
        typeof this.ws < "u" && (this.ws.onerror = () => {}
        ,
        this.ws.close(),
        this.ws = null)
    }
    uri() {
        const e = this.opts.secure ? "wss" : "ws"
          , n = this.query || {};
        return this.opts.timestampRequests && (n[this.opts.timestampParam] = fx()),
        this.supportsBinary || (n.b64 = 1),
        this.createUri(e, n)
    }
}
const Rd = tn.WebSocket || tn.MozWebSocket;
class NR extends AR {
    createSocket(e, n, i) {
        return mx ? new Rd(e,n,i) : n ? new Rd(e,n) : new Rd(e)
    }
    doWrite(e, n) {
        this.ws.send(n)
    }
}
class OR extends oh {
    get name() {
        return "webtransport"
    }
    doOpen() {
        try {
            this._transport = new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])
        } catch (e) {
            return this.emitReserved("error", e)
        }
        this._transport.closed.then( () => {
            this.onClose()
        }
        ).catch(e => {
            this.onError("webtransport error", e)
        }
        ),
        this._transport.ready.then( () => {
            this._transport.createBidirectionalStream().then(e => {
                const n = hR(Number.MAX_SAFE_INTEGER, this.socket.binaryType)
                  , i = e.readable.pipeThrough(n).getReader()
                  , o = fR();
                o.readable.pipeTo(e.writable),
                this._writer = o.writable.getWriter();
                const l = () => {
                    i.read().then( ({done: d, value: f}) => {
                        d || (this.onPacket(f),
                        l())
                    }
                    ).catch(d => {}
                    )
                }
                ;
                l();
                const u = {
                    type: "open"
                };
                this.query.sid && (u.data = `{"sid":"${this.query.sid}"}`),
                this._writer.write(u).then( () => this.onOpen())
            }
            )
        }
        )
    }
    write(e) {
        this.writable = !1;
        for (let n = 0; n < e.length; n++) {
            const i = e[n]
              , o = n === e.length - 1;
            this._writer.write(i).then( () => {
                o && ou( () => {
                    this.writable = !0,
                    this.emitReserved("drain")
                }
                , this.setTimeoutFn)
            }
            )
        }
    }
    doClose() {
        var e;
        (e = this._transport) === null || e === void 0 || e.close()
    }
}
const jR = {
    websocket: NR,
    webtransport: OR,
    polling: RR
}
  , LR = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
  , MR = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
function gf(t) {
    if (t.length > 8e3)
        throw "URI too long";
    const e = t
      , n = t.indexOf("[")
      , i = t.indexOf("]");
    n != -1 && i != -1 && (t = t.substring(0, n) + t.substring(n, i).replace(/:/g, ";") + t.substring(i, t.length));
    let o = LR.exec(t || "")
      , l = {}
      , u = 14;
    for (; u--; )
        l[MR[u]] = o[u] || "";
    return n != -1 && i != -1 && (l.source = e,
    l.host = l.host.substring(1, l.host.length - 1).replace(/;/g, ":"),
    l.authority = l.authority.replace("[", "").replace("]", "").replace(/;/g, ":"),
    l.ipv6uri = !0),
    l.pathNames = DR(l, l.path),
    l.queryKey = IR(l, l.query),
    l
}
function DR(t, e) {
    const n = /\/{2,9}/g
      , i = e.replace(n, "/").split("/");
    return (e.slice(0, 1) == "/" || e.length === 0) && i.splice(0, 1),
    e.slice(-1) == "/" && i.splice(i.length - 1, 1),
    i
}
function IR(t, e) {
    const n = {};
    return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(i, o, l) {
        o && (n[o] = l)
    }),
    n
}
const yf = typeof addEventListener == "function" && typeof removeEventListener == "function"
  , Ol = [];
yf && addEventListener("offline", () => {
    Ol.forEach(t => t())
}
, !1);
class Mr extends nt {
    constructor(e, n) {
        if (super(),
        this.binaryType = mR,
        this.writeBuffer = [],
        this._prevBufferLen = 0,
        this._pingInterval = -1,
        this._pingTimeout = -1,
        this._maxPayload = -1,
        this._pingTimeoutTime = 1 / 0,
        e && typeof e == "object" && (n = e,
        e = null),
        e) {
            const i = gf(e);
            n.hostname = i.host,
            n.secure = i.protocol === "https" || i.protocol === "wss",
            n.port = i.port,
            i.query && (n.query = i.query)
        } else
            n.host && (n.hostname = gf(n.host).host);
        au(this, n),
        this.secure = n.secure != null ? n.secure : typeof location < "u" && location.protocol === "https:",
        n.hostname && !n.port && (n.port = this.secure ? "443" : "80"),
        this.hostname = n.hostname || (typeof location < "u" ? location.hostname : "localhost"),
        this.port = n.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"),
        this.transports = [],
        this._transportsByName = {},
        n.transports.forEach(i => {
            const o = i.prototype.name;
            this.transports.push(o),
            this._transportsByName[o] = i
        }
        ),
        this.opts = Object.assign({
            path: "/engine.io",
            agent: !1,
            withCredentials: !1,
            upgrade: !0,
            timestampParam: "t",
            rememberUpgrade: !1,
            addTrailingSlash: !0,
            rejectUnauthorized: !0,
            perMessageDeflate: {
                threshold: 1024
            },
            transportOptions: {},
            closeOnBeforeunload: !1
        }, n),
        this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""),
        typeof this.opts.query == "string" && (this.opts.query = bR(this.opts.query)),
        yf && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
            this.transport && (this.transport.removeAllListeners(),
            this.transport.close())
        }
        ,
        addEventListener("beforeunload", this._beforeunloadEventListener, !1)),
        this.hostname !== "localhost" && (this._offlineEventListener = () => {
            this._onClose("transport close", {
                description: "network connection lost"
            })
        }
        ,
        Ol.push(this._offlineEventListener))),
        this.opts.withCredentials && (this._cookieJar = void 0),
        this._open()
    }
    createTransport(e) {
        const n = Object.assign({}, this.opts.query);
        n.EIO = cx,
        n.transport = e,
        this.id && (n.sid = this.id);
        const i = Object.assign({}, this.opts, {
            query: n,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port
        }, this.opts.transportOptions[e]);
        return new this._transportsByName[e](i)
    }
    _open() {
        if (this.transports.length === 0) {
            this.setTimeoutFn( () => {
                this.emitReserved("error", "No transports available")
            }
            , 0);
            return
        }
        const e = this.opts.rememberUpgrade && Mr.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
        this.readyState = "opening";
        const n = this.createTransport(e);
        n.open(),
        this.setTransport(n)
    }
    setTransport(e) {
        this.transport && this.transport.removeAllListeners(),
        this.transport = e,
        e.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", n => this._onClose("transport close", n))
    }
    onOpen() {
        this.readyState = "open",
        Mr.priorWebsocketSuccess = this.transport.name === "websocket",
        this.emitReserved("open"),
        this.flush()
    }
    _onPacket(e) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
            switch (this.emitReserved("packet", e),
            this.emitReserved("heartbeat"),
            e.type) {
            case "open":
                this.onHandshake(JSON.parse(e.data));
                break;
            case "ping":
                this._sendPacket("pong"),
                this.emitReserved("ping"),
                this.emitReserved("pong"),
                this._resetPingTimeout();
                break;
            case "error":
                const n = new Error("server error");
                n.code = e.data,
                this._onError(n);
                break;
            case "message":
                this.emitReserved("data", e.data),
                this.emitReserved("message", e.data);
                break
            }
    }
    onHandshake(e) {
        this.emitReserved("handshake", e),
        this.id = e.sid,
        this.transport.query.sid = e.sid,
        this._pingInterval = e.pingInterval,
        this._pingTimeout = e.pingTimeout,
        this._maxPayload = e.maxPayload,
        this.onOpen(),
        this.readyState !== "closed" && this._resetPingTimeout()
    }
    _resetPingTimeout() {
        this.clearTimeoutFn(this._pingTimeoutTimer);
        const e = this._pingInterval + this._pingTimeout;
        this._pingTimeoutTime = Date.now() + e,
        this._pingTimeoutTimer = this.setTimeoutFn( () => {
            this._onClose("ping timeout")
        }
        , e),
        this.opts.autoUnref && this._pingTimeoutTimer.unref()
    }
    _onDrain() {
        this.writeBuffer.splice(0, this._prevBufferLen),
        this._prevBufferLen = 0,
        this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush()
    }
    flush() {
        if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
            const e = this._getWritablePackets();
            this.transport.send(e),
            this._prevBufferLen = e.length,
            this.emitReserved("flush")
        }
    }
    _getWritablePackets() {
        if (!(this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1))
            return this.writeBuffer;
        let n = 1;
        for (let i = 0; i < this.writeBuffer.length; i++) {
            const o = this.writeBuffer[i].data;
            if (o && (n += wR(o)),
            i > 0 && n > this._maxPayload)
                return this.writeBuffer.slice(0, i);
            n += 2
        }
        return this.writeBuffer
    }
    _hasPingExpired() {
        if (!this._pingTimeoutTime)
            return !0;
        const e = Date.now() > this._pingTimeoutTime;
        return e && (this._pingTimeoutTime = 0,
        ou( () => {
            this._onClose("ping timeout")
        }
        , this.setTimeoutFn)),
        e
    }
    write(e, n, i) {
        return this._sendPacket("message", e, n, i),
        this
    }
    send(e, n, i) {
        return this._sendPacket("message", e, n, i),
        this
    }
    _sendPacket(e, n, i, o) {
        if (typeof n == "function" && (o = n,
        n = void 0),
        typeof i == "function" && (o = i,
        i = null),
        this.readyState === "closing" || this.readyState === "closed")
            return;
        i = i || {},
        i.compress = i.compress !== !1;
        const l = {
            type: e,
            data: n,
            options: i
        };
        this.emitReserved("packetCreate", l),
        this.writeBuffer.push(l),
        o && this.once("flush", o),
        this.flush()
    }
    close() {
        const e = () => {
            this._onClose("forced close"),
            this.transport.close()
        }
          , n = () => {
            this.off("upgrade", n),
            this.off("upgradeError", n),
            e()
        }
          , i = () => {
            this.once("upgrade", n),
            this.once("upgradeError", n)
        }
        ;
        return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing",
        this.writeBuffer.length ? this.once("drain", () => {
            this.upgrading ? i() : e()
        }
        ) : this.upgrading ? i() : e()),
        this
    }
    _onError(e) {
        if (Mr.priorWebsocketSuccess = !1,
        this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
            return this.transports.shift(),
            this._open();
        this.emitReserved("error", e),
        this._onClose("transport error", e)
    }
    _onClose(e, n) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
            if (this.clearTimeoutFn(this._pingTimeoutTimer),
            this.transport.removeAllListeners("close"),
            this.transport.close(),
            this.transport.removeAllListeners(),
            yf && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1),
            this._offlineEventListener)) {
                const i = Ol.indexOf(this._offlineEventListener);
                i !== -1 && Ol.splice(i, 1)
            }
            this.readyState = "closed",
            this.id = null,
            this.emitReserved("close", e, n),
            this.writeBuffer = [],
            this._prevBufferLen = 0
        }
    }
}
Mr.protocol = cx;
class FR extends Mr {
    constructor() {
        super(...arguments),
        this._upgrades = []
    }
    onOpen() {
        if (super.onOpen(),
        this.readyState === "open" && this.opts.upgrade)
            for (let e = 0; e < this._upgrades.length; e++)
                this._probe(this._upgrades[e])
    }
    _probe(e) {
        let n = this.createTransport(e)
          , i = !1;
        Mr.priorWebsocketSuccess = !1;
        const o = () => {
            i || (n.send([{
                type: "ping",
                data: "probe"
            }]),
            n.once("packet", y => {
                if (!i)
                    if (y.type === "pong" && y.data === "probe") {
                        if (this.upgrading = !0,
                        this.emitReserved("upgrading", n),
                        !n)
                            return;
                        Mr.priorWebsocketSuccess = n.name === "websocket",
                        this.transport.pause( () => {
                            i || this.readyState !== "closed" && (m(),
                            this.setTransport(n),
                            n.send([{
                                type: "upgrade"
                            }]),
                            this.emitReserved("upgrade", n),
                            n = null,
                            this.upgrading = !1,
                            this.flush())
                        }
                        )
                    } else {
                        const w = new Error("probe error");
                        w.transport = n.name,
                        this.emitReserved("upgradeError", w)
                    }
            }
            ))
        }
        ;
        function l() {
            i || (i = !0,
            m(),
            n.close(),
            n = null)
        }
        const u = y => {
            const w = new Error("probe error: " + y);
            w.transport = n.name,
            l(),
            this.emitReserved("upgradeError", w)
        }
        ;
        function d() {
            u("transport closed")
        }
        function f() {
            u("socket closed")
        }
        function p(y) {
            n && y.name !== n.name && l()
        }
        const m = () => {
            n.removeListener("open", o),
            n.removeListener("error", u),
            n.removeListener("close", d),
            this.off("close", f),
            this.off("upgrading", p)
        }
        ;
        n.once("open", o),
        n.once("error", u),
        n.once("close", d),
        this.once("close", f),
        this.once("upgrading", p),
        this._upgrades.indexOf("webtransport") !== -1 && e !== "webtransport" ? this.setTimeoutFn( () => {
            i || n.open()
        }
        , 200) : n.open()
    }
    onHandshake(e) {
        this._upgrades = this._filterUpgrades(e.upgrades),
        super.onHandshake(e)
    }
    _filterUpgrades(e) {
        const n = [];
        for (let i = 0; i < e.length; i++)
            ~this.transports.indexOf(e[i]) && n.push(e[i]);
        return n
    }
}
let VR = class extends FR {
    constructor(e, n={}) {
        const i = typeof e == "object" ? e : n;
        (!i.transports || i.transports && typeof i.transports[0] == "string") && (i.transports = (i.transports || ["polling", "websocket", "webtransport"]).map(o => jR[o]).filter(o => !!o)),
        super(e, i)
    }
}
;
function UR(t, e="", n) {
    let i = t;
    n = n || typeof location < "u" && location,
    t == null && (t = n.protocol + "//" + n.host),
    typeof t == "string" && (t.charAt(0) === "/" && (t.charAt(1) === "/" ? t = n.protocol + t : t = n.host + t),
    /^(https?|wss?):\/\//.test(t) || (typeof n < "u" ? t = n.protocol + "//" + t : t = "https://" + t),
    i = gf(t)),
    i.port || (/^(http|ws)$/.test(i.protocol) ? i.port = "80" : /^(http|ws)s$/.test(i.protocol) && (i.port = "443")),
    i.path = i.path || "/";
    const l = i.host.indexOf(":") !== -1 ? "[" + i.host + "]" : i.host;
    return i.id = i.protocol + "://" + l + ":" + i.port + e,
    i.href = i.protocol + "://" + l + (n && n.port === i.port ? "" : ":" + i.port),
    i
}
const BR = typeof ArrayBuffer == "function"
  , zR = t => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer
  , gx = Object.prototype.toString
  , $R = typeof Blob == "function" || typeof Blob < "u" && gx.call(Blob) === "[object BlobConstructor]"
  , HR = typeof File == "function" || typeof File < "u" && gx.call(File) === "[object FileConstructor]";
function ah(t) {
    return BR && (t instanceof ArrayBuffer || zR(t)) || $R && t instanceof Blob || HR && t instanceof File
}
function jl(t, e) {
    if (!t || typeof t != "object")
        return !1;
    if (Array.isArray(t)) {
        for (let n = 0, i = t.length; n < i; n++)
            if (jl(t[n]))
                return !0;
        return !1
    }
    if (ah(t))
        return !0;
    if (t.toJSON && typeof t.toJSON == "function" && arguments.length === 1)
        return jl(t.toJSON(), !0);
    for (const n in t)
        if (Object.prototype.hasOwnProperty.call(t, n) && jl(t[n]))
            return !0;
    return !1
}
function WR(t) {
    const e = []
      , n = t.data
      , i = t;
    return i.data = vf(n, e),
    i.attachments = e.length,
    {
        packet: i,
        buffers: e
    }
}
function vf(t, e) {
    if (!t)
        return t;
    if (ah(t)) {
        const n = {
            _placeholder: !0,
            num: e.length
        };
        return e.push(t),
        n
    } else if (Array.isArray(t)) {
        const n = new Array(t.length);
        for (let i = 0; i < t.length; i++)
            n[i] = vf(t[i], e);
        return n
    } else if (typeof t == "object" && !(t instanceof Date)) {
        const n = {};
        for (const i in t)
            Object.prototype.hasOwnProperty.call(t, i) && (n[i] = vf(t[i], e));
        return n
    }
    return t
}
function qR(t, e) {
    return t.data = wf(t.data, e),
    delete t.attachments,
    t
}
function wf(t, e) {
    if (!t)
        return t;
    if (t && t._placeholder === !0) {
        if (typeof t.num == "number" && t.num >= 0 && t.num < e.length)
            return e[t.num];
        throw new Error("illegal attachments")
    } else if (Array.isArray(t))
        for (let n = 0; n < t.length; n++)
            t[n] = wf(t[n], e);
    else if (typeof t == "object")
        for (const n in t)
            Object.prototype.hasOwnProperty.call(t, n) && (t[n] = wf(t[n], e));
    return t
}
const KR = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"];
var ke;
(function(t) {
    t[t.CONNECT = 0] = "CONNECT",
    t[t.DISCONNECT = 1] = "DISCONNECT",
    t[t.EVENT = 2] = "EVENT",
    t[t.ACK = 3] = "ACK",
    t[t.CONNECT_ERROR = 4] = "CONNECT_ERROR",
    t[t.BINARY_EVENT = 5] = "BINARY_EVENT",
    t[t.BINARY_ACK = 6] = "BINARY_ACK"
}
)(ke || (ke = {}));
class QR {
    constructor(e) {
        this.replacer = e
    }
    encode(e) {
        return (e.type === ke.EVENT || e.type === ke.ACK) && jl(e) ? this.encodeAsBinary({
            type: e.type === ke.EVENT ? ke.BINARY_EVENT : ke.BINARY_ACK,
            nsp: e.nsp,
            data: e.data,
            id: e.id
        }) : [this.encodeAsString(e)]
    }
    encodeAsString(e) {
        let n = "" + e.type;
        return (e.type === ke.BINARY_EVENT || e.type === ke.BINARY_ACK) && (n += e.attachments + "-"),
        e.nsp && e.nsp !== "/" && (n += e.nsp + ","),
        e.id != null && (n += e.id),
        e.data != null && (n += JSON.stringify(e.data, this.replacer)),
        n
    }
    encodeAsBinary(e) {
        const n = WR(e)
          , i = this.encodeAsString(n.packet)
          , o = n.buffers;
        return o.unshift(i),
        o
    }
}
class lh extends nt {
    constructor(e) {
        super(),
        this.reviver = e
    }
    add(e) {
        let n;
        if (typeof e == "string") {
            if (this.reconstructor)
                throw new Error("got plaintext data when reconstructing a packet");
            n = this.decodeString(e);
            const i = n.type === ke.BINARY_EVENT;
            i || n.type === ke.BINARY_ACK ? (n.type = i ? ke.EVENT : ke.ACK,
            this.reconstructor = new GR(n),
            n.attachments === 0 && super.emitReserved("decoded", n)) : super.emitReserved("decoded", n)
        } else if (ah(e) || e.base64)
            if (this.reconstructor)
                n = this.reconstructor.takeBinaryData(e),
                n && (this.reconstructor = null,
                super.emitReserved("decoded", n));
            else
                throw new Error("got binary data when not reconstructing a packet");
        else
            throw new Error("Unknown type: " + e)
    }
    decodeString(e) {
        let n = 0;
        const i = {
            type: Number(e.charAt(0))
        };
        if (ke[i.type] === void 0)
            throw new Error("unknown packet type " + i.type);
        if (i.type === ke.BINARY_EVENT || i.type === ke.BINARY_ACK) {
            const l = n + 1;
            for (; e.charAt(++n) !== "-" && n != e.length; )
                ;
            const u = e.substring(l, n);
            if (u != Number(u) || e.charAt(n) !== "-")
                throw new Error("Illegal attachments");
            i.attachments = Number(u)
        }
        if (e.charAt(n + 1) === "/") {
            const l = n + 1;
            for (; ++n && !(e.charAt(n) === "," || n === e.length); )
                ;
            i.nsp = e.substring(l, n)
        } else
            i.nsp = "/";
        const o = e.charAt(n + 1);
        if (o !== "" && Number(o) == o) {
            const l = n + 1;
            for (; ++n; ) {
                const u = e.charAt(n);
                if (u == null || Number(u) != u) {
                    --n;
                    break
                }
                if (n === e.length)
                    break
            }
            i.id = Number(e.substring(l, n + 1))
        }
        if (e.charAt(++n)) {
            const l = this.tryParse(e.substr(n));
            if (lh.isPayloadValid(i.type, l))
                i.data = l;
            else
                throw new Error("invalid payload")
        }
        return i
    }
    tryParse(e) {
        try {
            return JSON.parse(e, this.reviver)
        } catch {
            return !1
        }
    }
    static isPayloadValid(e, n) {
        switch (e) {
        case ke.CONNECT:
            return lv(n);
        case ke.DISCONNECT:
            return n === void 0;
        case ke.CONNECT_ERROR:
            return typeof n == "string" || lv(n);
        case ke.EVENT:
        case ke.BINARY_EVENT:
            return Array.isArray(n) && (typeof n[0] == "number" || typeof n[0] == "string" && KR.indexOf(n[0]) === -1);
        case ke.ACK:
        case ke.BINARY_ACK:
            return Array.isArray(n)
        }
    }
    destroy() {
        this.reconstructor && (this.reconstructor.finishedReconstruction(),
        this.reconstructor = null)
    }
}
class GR {
    constructor(e) {
        this.packet = e,
        this.buffers = [],
        this.reconPack = e
    }
    takeBinaryData(e) {
        if (this.buffers.push(e),
        this.buffers.length === this.reconPack.attachments) {
            const n = qR(this.reconPack, this.buffers);
            return this.finishedReconstruction(),
            n
        }
        return null
    }
    finishedReconstruction() {
        this.reconPack = null,
        this.buffers = []
    }
}
function lv(t) {
    return Object.prototype.toString.call(t) === "[object Object]"
}
const YR = Object.freeze(Object.defineProperty({
    __proto__: null,
    Decoder: lh,
    Encoder: QR,
    get PacketType() {
        return ke
    }
}, Symbol.toStringTag, {
    value: "Module"
}));
function mn(t, e, n) {
    return t.on(e, n),
    function() {
        t.off(e, n)
    }
}
const XR = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    newListener: 1,
    removeListener: 1
});
class yx extends nt {
    constructor(e, n, i) {
        super(),
        this.connected = !1,
        this.recovered = !1,
        this.receiveBuffer = [],
        this.sendBuffer = [],
        this._queue = [],
        this._queueSeq = 0,
        this.ids = 0,
        this.acks = {},
        this.flags = {},
        this.io = e,
        this.nsp = n,
        i && i.auth && (this.auth = i.auth),
        this._opts = Object.assign({}, i),
        this.io._autoConnect && this.open()
    }
    get disconnected() {
        return !this.connected
    }
    subEvents() {
        if (this.subs)
            return;
        const e = this.io;
        this.subs = [mn(e, "open", this.onopen.bind(this)), mn(e, "packet", this.onpacket.bind(this)), mn(e, "error", this.onerror.bind(this)), mn(e, "close", this.onclose.bind(this))]
    }
    get active() {
        return !!this.subs
    }
    connect() {
        return this.connected ? this : (this.subEvents(),
        this.io._reconnecting || this.io.open(),
        this.io._readyState === "open" && this.onopen(),
        this)
    }
    open() {
        return this.connect()
    }
    send(...e) {
        return e.unshift("message"),
        this.emit.apply(this, e),
        this
    }
    emit(e, ...n) {
        var i, o, l;
        if (XR.hasOwnProperty(e))
            throw new Error('"' + e.toString() + '" is a reserved event name');
        if (n.unshift(e),
        this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
            return this._addToQueue(n),
            this;
        const u = {
            type: ke.EVENT,
            data: n
        };
        if (u.options = {},
        u.options.compress = this.flags.compress !== !1,
        typeof n[n.length - 1] == "function") {
            const m = this.ids++
              , y = n.pop();
            this._registerAckCallback(m, y),
            u.id = m
        }
        const d = (o = (i = this.io.engine) === null || i === void 0 ? void 0 : i.transport) === null || o === void 0 ? void 0 : o.writable
          , f = this.connected && !(!((l = this.io.engine) === null || l === void 0) && l._hasPingExpired());
        return this.flags.volatile && !d || (f ? (this.notifyOutgoingListeners(u),
        this.packet(u)) : this.sendBuffer.push(u)),
        this.flags = {},
        this
    }
    _registerAckCallback(e, n) {
        var i;
        const o = (i = this.flags.timeout) !== null && i !== void 0 ? i : this._opts.ackTimeout;
        if (o === void 0) {
            this.acks[e] = n;
            return
        }
        const l = this.io.setTimeoutFn( () => {
            delete this.acks[e];
            for (let d = 0; d < this.sendBuffer.length; d++)
                this.sendBuffer[d].id === e && this.sendBuffer.splice(d, 1);
            n.call(this, new Error("operation has timed out"))
        }
        , o)
          , u = (...d) => {
            this.io.clearTimeoutFn(l),
            n.apply(this, d)
        }
        ;
        u.withError = !0,
        this.acks[e] = u
    }
    emitWithAck(e, ...n) {
        return new Promise( (i, o) => {
            const l = (u, d) => u ? o(u) : i(d);
            l.withError = !0,
            n.push(l),
            this.emit(e, ...n)
        }
        )
    }
    _addToQueue(e) {
        let n;
        typeof e[e.length - 1] == "function" && (n = e.pop());
        const i = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: !1,
            args: e,
            flags: Object.assign({
                fromQueue: !0
            }, this.flags)
        };
        e.push( (o, ...l) => (this._queue[0],
        o !== null ? i.tryCount > this._opts.retries && (this._queue.shift(),
        n && n(o)) : (this._queue.shift(),
        n && n(null, ...l)),
        i.pending = !1,
        this._drainQueue())),
        this._queue.push(i),
        this._drainQueue()
    }
    _drainQueue(e=!1) {
        if (!this.connected || this._queue.length === 0)
            return;
        const n = this._queue[0];
        n.pending && !e || (n.pending = !0,
        n.tryCount++,
        this.flags = n.flags,
        this.emit.apply(this, n.args))
    }
    packet(e) {
        e.nsp = this.nsp,
        this.io._packet(e)
    }
    onopen() {
        typeof this.auth == "function" ? this.auth(e => {
            this._sendConnectPacket(e)
        }
        ) : this._sendConnectPacket(this.auth)
    }
    _sendConnectPacket(e) {
        this.packet({
            type: ke.CONNECT,
            data: this._pid ? Object.assign({
                pid: this._pid,
                offset: this._lastOffset
            }, e) : e
        })
    }
    onerror(e) {
        this.connected || this.emitReserved("connect_error", e)
    }
    onclose(e, n) {
        this.connected = !1,
        delete this.id,
        this.emitReserved("disconnect", e, n),
        this._clearAcks()
    }
    _clearAcks() {
        Object.keys(this.acks).forEach(e => {
            if (!this.sendBuffer.some(i => String(i.id) === e)) {
                const i = this.acks[e];
                delete this.acks[e],
                i.withError && i.call(this, new Error("socket has been disconnected"))
            }
        }
        )
    }
    onpacket(e) {
        if (e.nsp === this.nsp)
            switch (e.type) {
            case ke.CONNECT:
                e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                break;
            case ke.EVENT:
            case ke.BINARY_EVENT:
                this.onevent(e);
                break;
            case ke.ACK:
            case ke.BINARY_ACK:
                this.onack(e);
                break;
            case ke.DISCONNECT:
                this.ondisconnect();
                break;
            case ke.CONNECT_ERROR:
                this.destroy();
                const i = new Error(e.data.message);
                i.data = e.data.data,
                this.emitReserved("connect_error", i);
                break
            }
    }
    onevent(e) {
        const n = e.data || [];
        e.id != null && n.push(this.ack(e.id)),
        this.connected ? this.emitEvent(n) : this.receiveBuffer.push(Object.freeze(n))
    }
    emitEvent(e) {
        if (this._anyListeners && this._anyListeners.length) {
            const n = this._anyListeners.slice();
            for (const i of n)
                i.apply(this, e)
        }
        super.emit.apply(this, e),
        this._pid && e.length && typeof e[e.length - 1] == "string" && (this._lastOffset = e[e.length - 1])
    }
    ack(e) {
        const n = this;
        let i = !1;
        return function(...o) {
            i || (i = !0,
            n.packet({
                type: ke.ACK,
                id: e,
                data: o
            }))
        }
    }
    onack(e) {
        const n = this.acks[e.id];
        typeof n == "function" && (delete this.acks[e.id],
        n.withError && e.data.unshift(null),
        n.apply(this, e.data))
    }
    onconnect(e, n) {
        this.id = e,
        this.recovered = n && this._pid === n,
        this._pid = n,
        this.connected = !0,
        this.emitBuffered(),
        this._drainQueue(!0),
        this.emitReserved("connect")
    }
    emitBuffered() {
        this.receiveBuffer.forEach(e => this.emitEvent(e)),
        this.receiveBuffer = [],
        this.sendBuffer.forEach(e => {
            this.notifyOutgoingListeners(e),
            this.packet(e)
        }
        ),
        this.sendBuffer = []
    }
    ondisconnect() {
        this.destroy(),
        this.onclose("io server disconnect")
    }
    destroy() {
        this.subs && (this.subs.forEach(e => e()),
        this.subs = void 0),
        this.io._destroy(this)
    }
    disconnect() {
        return this.connected && this.packet({
            type: ke.DISCONNECT
        }),
        this.destroy(),
        this.connected && this.onclose("io client disconnect"),
        this
    }
    close() {
        return this.disconnect()
    }
    compress(e) {
        return this.flags.compress = e,
        this
    }
    get volatile() {
        return this.flags.volatile = !0,
        this
    }
    timeout(e) {
        return this.flags.timeout = e,
        this
    }
    onAny(e) {
        return this._anyListeners = this._anyListeners || [],
        this._anyListeners.push(e),
        this
    }
    prependAny(e) {
        return this._anyListeners = this._anyListeners || [],
        this._anyListeners.unshift(e),
        this
    }
    offAny(e) {
        if (!this._anyListeners)
            return this;
        if (e) {
            const n = this._anyListeners;
            for (let i = 0; i < n.length; i++)
                if (e === n[i])
                    return n.splice(i, 1),
                    this
        } else
            this._anyListeners = [];
        return this
    }
    listenersAny() {
        return this._anyListeners || []
    }
    onAnyOutgoing(e) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [],
        this._anyOutgoingListeners.push(e),
        this
    }
    prependAnyOutgoing(e) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [],
        this._anyOutgoingListeners.unshift(e),
        this
    }
    offAnyOutgoing(e) {
        if (!this._anyOutgoingListeners)
            return this;
        if (e) {
            const n = this._anyOutgoingListeners;
            for (let i = 0; i < n.length; i++)
                if (e === n[i])
                    return n.splice(i, 1),
                    this
        } else
            this._anyOutgoingListeners = [];
        return this
    }
    listenersAnyOutgoing() {
        return this._anyOutgoingListeners || []
    }
    notifyOutgoingListeners(e) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const n = this._anyOutgoingListeners.slice();
            for (const i of n)
                i.apply(this, e.data)
        }
    }
}
function Ti(t) {
    t = t || {},
    this.ms = t.min || 100,
    this.max = t.max || 1e4,
    this.factor = t.factor || 2,
    this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0,
    this.attempts = 0
}
Ti.prototype.duration = function() {
    var t = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var e = Math.random()
          , n = Math.floor(e * this.jitter * t);
        t = (Math.floor(e * 10) & 1) == 0 ? t - n : t + n
    }
    return Math.min(t, this.max) | 0
}
;
Ti.prototype.reset = function() {
    this.attempts = 0
}
;
Ti.prototype.setMin = function(t) {
    this.ms = t
}
;
Ti.prototype.setMax = function(t) {
    this.max = t
}
;
Ti.prototype.setJitter = function(t) {
    this.jitter = t
}
;
class xf extends nt {
    constructor(e, n) {
        var i;
        super(),
        this.nsps = {},
        this.subs = [],
        e && typeof e == "object" && (n = e,
        e = void 0),
        n = n || {},
        n.path = n.path || "/socket.io",
        this.opts = n,
        au(this, n),
        this.reconnection(n.reconnection !== !1),
        this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0),
        this.reconnectionDelay(n.reconnectionDelay || 1e3),
        this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3),
        this.randomizationFactor((i = n.randomizationFactor) !== null && i !== void 0 ? i : .5),
        this.backoff = new Ti({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
        }),
        this.timeout(n.timeout == null ? 2e4 : n.timeout),
        this._readyState = "closed",
        this.uri = e;
        const o = n.parser || YR;
        this.encoder = new o.Encoder,
        this.decoder = new o.Decoder,
        this._autoConnect = n.autoConnect !== !1,
        this._autoConnect && this.open()
    }
    reconnection(e) {
        return arguments.length ? (this._reconnection = !!e,
        e || (this.skipReconnect = !0),
        this) : this._reconnection
    }
    reconnectionAttempts(e) {
        return e === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = e,
        this)
    }
    reconnectionDelay(e) {
        var n;
        return e === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = e,
        (n = this.backoff) === null || n === void 0 || n.setMin(e),
        this)
    }
    randomizationFactor(e) {
        var n;
        return e === void 0 ? this._randomizationFactor : (this._randomizationFactor = e,
        (n = this.backoff) === null || n === void 0 || n.setJitter(e),
        this)
    }
    reconnectionDelayMax(e) {
        var n;
        return e === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = e,
        (n = this.backoff) === null || n === void 0 || n.setMax(e),
        this)
    }
    timeout(e) {
        return arguments.length ? (this._timeout = e,
        this) : this._timeout
    }
    maybeReconnectOnOpen() {
        !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect()
    }
    open(e) {
        if (~this._readyState.indexOf("open"))
            return this;
        this.engine = new VR(this.uri,this.opts);
        const n = this.engine
          , i = this;
        this._readyState = "opening",
        this.skipReconnect = !1;
        const o = mn(n, "open", function() {
            i.onopen(),
            e && e()
        })
          , l = d => {
            this.cleanup(),
            this._readyState = "closed",
            this.emitReserved("error", d),
            e ? e(d) : this.maybeReconnectOnOpen()
        }
          , u = mn(n, "error", l);
        if (this._timeout !== !1) {
            const d = this._timeout
              , f = this.setTimeoutFn( () => {
                o(),
                l(new Error("timeout")),
                n.close()
            }
            , d);
            this.opts.autoUnref && f.unref(),
            this.subs.push( () => {
                this.clearTimeoutFn(f)
            }
            )
        }
        return this.subs.push(o),
        this.subs.push(u),
        this
    }
    connect(e) {
        return this.open(e)
    }
    onopen() {
        this.cleanup(),
        this._readyState = "open",
        this.emitReserved("open");
        const e = this.engine;
        this.subs.push(mn(e, "ping", this.onping.bind(this)), mn(e, "data", this.ondata.bind(this)), mn(e, "error", this.onerror.bind(this)), mn(e, "close", this.onclose.bind(this)), mn(this.decoder, "decoded", this.ondecoded.bind(this)))
    }
    onping() {
        this.emitReserved("ping")
    }
    ondata(e) {
        try {
            this.decoder.add(e)
        } catch (n) {
            this.onclose("parse error", n)
        }
    }
    ondecoded(e) {
        ou( () => {
            this.emitReserved("packet", e)
        }
        , this.setTimeoutFn)
    }
    onerror(e) {
        this.emitReserved("error", e)
    }
    socket(e, n) {
        let i = this.nsps[e];
        return i ? this._autoConnect && !i.active && i.connect() : (i = new yx(this,e,n),
        this.nsps[e] = i),
        i
    }
    _destroy(e) {
        const n = Object.keys(this.nsps);
        for (const i of n)
            if (this.nsps[i].active)
                return;
        this._close()
    }
    _packet(e) {
        const n = this.encoder.encode(e);
        for (let i = 0; i < n.length; i++)
            this.engine.write(n[i], e.options)
    }
    cleanup() {
        this.subs.forEach(e => e()),
        this.subs.length = 0,
        this.decoder.destroy()
    }
    _close() {
        this.skipReconnect = !0,
        this._reconnecting = !1,
        this.onclose("forced close")
    }
    disconnect() {
        return this._close()
    }
    onclose(e, n) {
        var i;
        this.cleanup(),
        (i = this.engine) === null || i === void 0 || i.close(),
        this.backoff.reset(),
        this._readyState = "closed",
        this.emitReserved("close", e, n),
        this._reconnection && !this.skipReconnect && this.reconnect()
    }
    reconnect() {
        if (this._reconnecting || this.skipReconnect)
            return this;
        const e = this;
        if (this.backoff.attempts >= this._reconnectionAttempts)
            this.backoff.reset(),
            this.emitReserved("reconnect_failed"),
            this._reconnecting = !1;
        else {
            const n = this.backoff.duration();
            this._reconnecting = !0;
            const i = this.setTimeoutFn( () => {
                e.skipReconnect || (this.emitReserved("reconnect_attempt", e.backoff.attempts),
                !e.skipReconnect && e.open(o => {
                    o ? (e._reconnecting = !1,
                    e.reconnect(),
                    this.emitReserved("reconnect_error", o)) : e.onreconnect()
                }
                ))
            }
            , n);
            this.opts.autoUnref && i.unref(),
            this.subs.push( () => {
                this.clearTimeoutFn(i)
            }
            )
        }
    }
    onreconnect() {
        const e = this.backoff.attempts;
        this._reconnecting = !1,
        this.backoff.reset(),
        this.emitReserved("reconnect", e)
    }
}
const wo = {};
function Ll(t, e) {
    typeof t == "object" && (e = t,
    t = void 0),
    e = e || {};
    const n = UR(t, e.path || "/socket.io")
      , i = n.source
      , o = n.id
      , l = n.path
      , u = wo[o] && l in wo[o].nsps
      , d = e.forceNew || e["force new connection"] || e.multiplex === !1 || u;
    let f;
    return d ? f = new xf(i,e) : (wo[o] || (wo[o] = new xf(i,e)),
    f = wo[o]),
    n.query && !e.query && (e.query = n.queryKey),
    f.socket(n.path, e)
}
Object.assign(Ll, {
    Manager: xf,
    Socket: yx,
    io: Ll,
    connect: Ll
});
function uv(t, e) {
    var n;
    const i = Ll(t.serverUrl, {
        path: t.mountPath,
        transports: t.transports,
        query: {
            app_id: t.appId,
            token: (n = t.token) !== null && n !== void 0 ? n : zl()
        }
    });
    return i.on("connect", async () => {
        var o;
        return console.log("connect", i.id),
        (o = e.connect) === null || o === void 0 ? void 0 : o.call(e)
    }
    ),
    i.on("update_model", async o => {
        var l;
        return (l = e.update_model) === null || l === void 0 ? void 0 : l.call(e, o)
    }
    ),
    i.on("error", async o => {
        var l;
        return (l = e.error) === null || l === void 0 ? void 0 : l.call(e, o)
    }
    ),
    i.on("connect_error", async o => {
        var l;
        return console.error("connect_error", o),
        (l = e.error) === null || l === void 0 ? void 0 : l.call(e, o)
    }
    ),
    i
}
function JR({config: t}) {
    let e = {
        ...t
    };
    const n = {}
      , i = {
        connect: async () => {
            const C = [];
            Object.keys(n).forEach(b => {
                f(b);
                const k = y(b);
                k == null || k.forEach( ({connect: S}) => {
                    const P = async () => S == null ? void 0 : S();
                    C.push(P())
                }
                )
            }
            ),
            await Promise.all(C)
        }
        ,
        update_model: async C => {
            const k = y(C.room).map(S => {
                var P;
                return (P = S.update_model) === null || P === void 0 ? void 0 : P.call(S, C)
            }
            );
            await Promise.all(k)
        }
        ,
        error: async C => {
            console.error("error", C);
            const b = Object.values(n).flat().map(k => {
                var S;
                return (S = k.error) === null || S === void 0 ? void 0 : S.call(k, C)
            }
            );
            await Promise.all(b)
        }
    };
    let o = uv(t, i);
    function l() {
        u()
    }
    function u() {
        o && o.disconnect()
    }
    function d(C) {
        l(),
        e = {
            ...e,
            ...C
        },
        o = uv(e, i)
    }
    function f(C) {
        o.emit("join", C)
    }
    function p(C) {
        o.emit("leave", C)
    }
    async function m(C, b) {
        var k;
        const S = JSON.stringify(b);
        return (k = i.update_model) === null || k === void 0 ? void 0 : k.call(i, {
            room: C,
            data: S
        })
    }
    function y(C) {
        return n[C]
    }
    return {
        socket: o,
        subscribeToRoom: (C, b) => (n[C] || (f(C),
        n[C] = []),
        n[C].push(b),
        () => {
            var k, S;
            n[C] = (S = (k = n[C]) === null || k === void 0 ? void 0 : k.filter(P => P !== b)) !== null && S !== void 0 ? S : [],
            n[C].length === 0 && p(C)
        }
        ),
        updateConfig: d,
        updateModel: m,
        disconnect: u
    }
}
const xo = typeof window < "u" ? window : {
    base44SharedInstances: {}
};
function ZR(t, e) {
    return xo.base44SharedInstances || (xo.base44SharedInstances = {}),
    xo.base44SharedInstances[t] || (xo.base44SharedInstances[t] = {
        instance: e()
    }),
    xo.base44SharedInstances[t].instance
}
const eA = "__user_heartbeat_event__"
  , tA = "__initialization_event__"
  , nA = "__session_duration_event__"
  , cv = "analytics-enable"
  , dv = "base44_analytics_session_id"
  , rA = {
    enabled: !0,
    maxQueueSize: 1e3,
    throttleTime: 1e3,
    batchSize: 30,
    heartBeatInterval: 60 * 1e3
}
  , sA = "analytics"
  , Me = ZR(sA, () => ({
    requestsQueue: [],
    isProcessing: !1,
    isHeartBeatProcessing: !1,
    wasInitializationTracked: !1,
    sessionContext: null,
    sessionStartTime: null,
    config: {
        ...rA,
        ...fA()
    }
}))
  , iA = ({axiosClient: t, serverUrl: e, appId: n, userAuthModule: i}) => {
    var o;
    const {maxQueueSize: l, throttleTime: u, batchSize: d} = Me.config;
    if (!(!((o = Me.config) === null || o === void 0) && o.enabled))
        return {
            track: () => {}
            ,
            cleanup: () => {}
        };
    let f;
    const p = `${e}/api/apps/${n}/analytics/track/batch`
      , m = async j => {
        await t.request({
            method: "POST",
            url: `/apps/${n}/analytics/track/batch`,
            data: {
                events: j
            }
        })
    }
      , y = j => {
        try {
            const N = JSON.stringify({
                events: j
            })
              , V = new Blob([N],{
                type: "application/json"
            });
            return typeof navigator > "u" || N.length > 6e4 || !navigator.sendBeacon(p, V)
        } catch {
            return !1
        }
    }
      , w = async (j, N={}) => {
        if (j.length === 0)
            return;
        const V = await dA(i)
          , $ = j.map(cA(V));
        try {
            (!N.isBeacon || !y($)) && await m($)
        } catch {}
    }
      , C = () => {
        hv(w, {
            throttleTime: u,
            batchSize: d
        })
    }
      , b = j => {
        if (Me.requestsQueue.length >= l)
            return;
        const N = uA();
        Me.requestsQueue.push({
            ...j,
            ...N
        }),
        C()
    }
      , k = () => {
        hv(w, {
            throttleTime: u,
            batchSize: d
        }),
        f = pv(b),
        aA()
    }
      , S = () => {
        fv(),
        f == null || f(),
        lA(b);
        const j = Me.requestsQueue.splice(0);
        w(j, {
            isBeacon: !0
        })
    }
      , P = () => {
        typeof window > "u" || (document.visibilityState === "hidden" ? S() : document.visibilityState === "visible" && k())
    }
      , L = () => {
        fv(),
        f == null || f(),
        typeof window < "u" && window.removeEventListener("visibilitychange", P)
    }
    ;
    return C(),
    f = pv(b),
    oA(b),
    typeof window < "u" && window.addEventListener("visibilitychange", P),
    {
        track: b,
        cleanup: L
    }
}
;
function fv() {
    Me.isProcessing = !1
}
async function hv(t, e) {
    if (Me.isProcessing)
        return;
    Me.isProcessing = !0;
    const {throttleTime: n=1e3, batchSize: i=30} = e ?? {};
    for (; Me.isProcessing && Me.requestsQueue.length > 0; ) {
        const o = Me.requestsQueue.splice(0, i);
        o.length && await t(o),
        await new Promise(l => setTimeout(l, n))
    }
    Me.isProcessing = !1
}
function pv(t) {
    var e;
    if (Me.isHeartBeatProcessing || ((e = Me.config.heartBeatInterval) !== null && e !== void 0 ? e : 0) < 10)
        return () => {}
        ;
    Me.isHeartBeatProcessing = !0;
    const n = setInterval( () => {
        t({
            eventName: eA
        })
    }
    , Me.config.heartBeatInterval);
    return () => {
        clearInterval(n),
        Me.isHeartBeatProcessing = !1
    }
}
function oA(t) {
    typeof window > "u" || Me.wasInitializationTracked || (Me.wasInitializationTracked = !0,
    t({
        eventName: tA,
        properties: {
            referrer: document == null ? void 0 : document.referrer
        }
    }))
}
function aA() {
    typeof window > "u" || Me.sessionStartTime !== null || (Me.sessionStartTime = new Date().toISOString())
}
function lA(t) {
    if (typeof window > "u" || Me.sessionStartTime === null)
        return;
    const e = new Date().getTime() - new Date(Me.sessionStartTime).getTime();
    Me.sessionStartTime = null,
    t({
        eventName: nA,
        properties: {
            sessionDuration: e
        }
    })
}
function uA() {
    return {
        timestamp: new Date().toISOString(),
        pageUrl: typeof window < "u" ? window.location.pathname : null
    }
}
function cA(t) {
    return e => ({
        event_name: e.eventName,
        properties: e.properties,
        timestamp: e.timestamp,
        page_url: e.pageUrl,
        ...t
    })
}
let Ad = null;
async function dA(t) {
    if (!Me.sessionContext) {
        if (!Ad) {
            const e = hA();
            Ad = t.me().then(n => ({
                user_id: n.id,
                session_id: e
            })).catch( () => ({
                user_id: null,
                session_id: e
            }))
        }
        Me.sessionContext = await Ad
    }
    return Me.sessionContext
}
function fA() {
    if (typeof window > "u")
        return;
    const e = new URLSearchParams(window.location.search).get(cv);
    if (e == null || !e.length)
        return;
    const n = new URLSearchParams(window.location.search);
    n.delete(cv);
    const i = window.location.pathname + (n.toString() ? "?" + n.toString() : "");
    return window.history.replaceState({}, "", i),
    {
        enabled: e === "true"
    }
}
function hA() {
    if (typeof window > "u")
        return kd();
    try {
        const t = localStorage.getItem(dv);
        if (!t) {
            const e = kd();
            return localStorage.setItem(dv, e),
            e
        }
        return t
    } catch {
        return kd()
    }
}
function pA(t) {
    var e, n;
    const {serverUrl: i="https://base44.app", appId: o, token: l, serviceToken: u, requiresAuth: d=!1, appBaseUrl: f, options: p, functionsVersion: m, headers: y} = t
      , w = typeof f == "string" ? f : ""
      , C = {
        serverUrl: i,
        mountPath: "/ws-user-apps/socket.io/",
        transports: ["websocket"],
        appId: o,
        token: l
    };
    let b = null;
    const k = () => (b || (b = JR({
        config: C
    })),
    b)
      , S = {
        ...y,
        "X-App-Id": String(o)
    }
      , P = m ? {
        ...S,
        "Base44-Functions-Version": m
    } : S
      , L = Co({
        baseURL: `${i}/api`,
        headers: S,
        token: l,
        onError: p == null ? void 0 : p.onError
    })
      , j = Co({
        baseURL: `${i}/api`,
        headers: P,
        token: l,
        interceptResponses: !1,
        onError: p == null ? void 0 : p.onError
    })
      , N = Co({
        baseURL: `${i}/api`,
        headers: S,
        token: u,
        onError: p == null ? void 0 : p.onError
    })
      , V = Co({
        baseURL: `${i}/api`,
        headers: P,
        token: u,
        interceptResponses: !1
    })
      , $ = eR(L, j, o, {
        appBaseUrl: w
    })
      , Y = {
        entities: Zy({
            axios: L,
            appId: o,
            getSocket: k
        }),
        integrations: ev(L, o),
        connectors: rR(L, o),
        auth: $,
        functions: tv(j, o, {
            getAuthHeaders: () => {
                const X = {}
                  , xe = l || zl();
                return xe && (X.Authorization = `Bearer ${xe}`),
                X
            }
            ,
            baseURL: (e = j.defaults) === null || e === void 0 ? void 0 : e.baseURL
        }),
        agents: nv({
            axios: L,
            getSocket: k,
            appId: o,
            serverUrl: i,
            token: l
        }),
        appLogs: rv(L, o),
        users: iR(L, o),
        analytics: iA({
            axiosClient: L,
            serverUrl: i,
            appId: o,
            userAuthModule: $
        }),
        cleanup: () => {
            Y.analytics.cleanup(),
            b && b.disconnect()
        }
    }
      , I = {
        entities: Zy({
            axios: N,
            appId: o,
            getSocket: k
        }),
        integrations: ev(N, o),
        sso: tR(N, o, l),
        connectors: nR(N, o),
        functions: tv(V, o, {
            getAuthHeaders: () => {
                const X = {};
                return u && (X.Authorization = `Bearer ${u}`),
                X
            }
            ,
            baseURL: (n = V.defaults) === null || n === void 0 ? void 0 : n.baseURL
        }),
        agents: nv({
            axios: N,
            getSocket: k,
            appId: o,
            serverUrl: i,
            token: l
        }),
        appLogs: rv(N, o),
        cleanup: () => {
            b && b.disconnect()
        }
    };
    if (typeof window < "u") {
        const X = l || zl();
        X && Y.auth.setToken(X)
    }
    return d && typeof window < "u" && setTimeout(async () => {
        try {
            await Y.auth.isAuthenticated() || Y.auth.redirectToLogin(window.location.href)
        } catch (X) {
            console.error("Authentication check failed:", X),
            Y.auth.redirectToLogin(window.location.href)
        }
    }
    , 0),
    {
        ...Y,
        setToken(X) {
            Y.auth.setToken(X),
            b && b.updateConfig({
                token: X
            }),
            C.token = X
        },
        getConfig() {
            return {
                serverUrl: i,
                appId: o,
                requiresAuth: d
            }
        },
        get asServiceRole() {
            if (!u)
                throw new Error("Service token is required to use asServiceRole. Please provide a serviceToken when creating the client.");
            return I
        }
    }
}
const vx = typeof window > "u"
  , mA = vx ? {
    localStorage: new Map
} : window
  , Ao = mA.localStorage
  , gA = t => t.replace(/([A-Z])/g, "_$1").toLowerCase()
  , Zs = (t, {defaultValue: e=void 0, removeFromUrl: n=!1}={}) => {
    if (vx)
        return e;
    const i = `base44_${gA(t)}`
      , o = new URLSearchParams(window.location.search)
      , l = o.get(t);
    if (n) {
        o.delete(t);
        const d = `${window.location.pathname}${o.toString() ? `?${o.toString()}` : ""}${window.location.hash}`;
        window.history.replaceState({}, document.title, d)
    }
    if (l)
        return Ao.setItem(i, l),
        l;
    if (e)
        return Ao.setItem(i, e),
        e;
    const u = Ao.getItem(i);
    return u || null
}
  , yA = () => (Zs("clear_access_token") === "true" && (Ao.removeItem("base44_access_token"),
Ao.removeItem("token")),
{
    appId: Zs("app_id", {
        defaultValue: "69bb9c442425003d5972dd57"
    }),
    token: Zs("access_token", {
        removeFromUrl: !0
    }),
    fromUrl: Zs("from_url", {
        defaultValue: window.location.href
    }),
    functionsVersion: Zs("functions_version", {
        defaultValue: "prod"
    }),
    appBaseUrl: Zs("app_base_url", {
        defaultValue: void 0
    })
})
  , ko = {
    ...yA()
}
  , {appId: vA, token: wA, functionsVersion: xA, appBaseUrl: SA} = ko
  , nn = pA({
    appId: vA,
    token: wA,
    functionsVersion: xA,
    serverUrl: "",
    requiresAuth: !1,
    appBaseUrl: SA
});
function bA({}) {
    var o;
    const e = Ts().pathname.substring(1)
      , {data: n, isFetched: i} = bs({
        queryKey: ["user"],
        queryFn: async () => {
            try {
                return {
                    user: await nn.auth.me(),
                    isAuthenticated: !0
                }
            } catch {
                return {
                    user: null,
                    isAuthenticated: !1
                }
            }
        }
    });
    return x.jsx("div", {
        className: "min-h-screen flex items-center justify-center p-6 bg-slate-50",
        children: x.jsx("div", {
            className: "max-w-md w-full",
            children: x.jsxs("div", {
                className: "text-center space-y-6",
                children: [x.jsxs("div", {
                    className: "space-y-2",
                    children: [x.jsx("h1", {
                        className: "text-7xl font-light text-slate-300",
                        children: "404"
                    }), x.jsx("div", {
                        className: "h-0.5 w-16 bg-slate-200 mx-auto"
                    })]
                }), x.jsxs("div", {
                    className: "space-y-3",
                    children: [x.jsx("h2", {
                        className: "text-2xl font-medium text-slate-800",
                        children: "Page Not Found"
                    }), x.jsxs("p", {
                        className: "text-slate-600 leading-relaxed",
                        children: ["The page ", x.jsxs("span", {
                            className: "font-medium text-slate-700",
                            children: ['"', e, '"']
                        }), " could not be found in this application."]
                    })]
                }), i && n.isAuthenticated && ((o = n.user) == null ? void 0 : o.role) === "admin" && x.jsx("div", {
                    className: "mt-8 p-4 bg-slate-100 rounded-lg border border-slate-200",
                    children: x.jsxs("div", {
                        className: "flex items-start space-x-3",
                        children: [x.jsx("div", {
                            className: "flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-0.5",
                            children: x.jsx("div", {
                                className: "w-2 h-2 rounded-full bg-orange-400"
                            })
                        }), x.jsxs("div", {
                            className: "text-left space-y-1",
                            children: [x.jsx("p", {
                                className: "text-sm font-medium text-slate-700",
                                children: "Admin Note"
                            }), x.jsx("p", {
                                className: "text-sm text-slate-600 leading-relaxed",
                                children: "This could mean that the AI hasn't implemented this page yet. Ask it to implement it in the chat."
                            })]
                        })]
                    })
                }), x.jsx("div", {
                    className: "pt-6",
                    children: x.jsxs("button", {
                        onClick: () => window.location.href = "/",
                        className: "inline-flex items-center px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500",
                        children: [x.jsx("svg", {
                            className: "w-4 h-4 mr-2",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: x.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            })
                        }), "Go Home"]
                    })
                })]
            })
        })
    })
}
const wx = E.createContext()
  , CA = ({children: t}) => {
    const [e,n] = E.useState(null)
      , [i,o] = E.useState(!1)
      , [l,u] = E.useState(!0)
      , [d,f] = E.useState(!0)
      , [p,m] = E.useState(null)
      , [y,w] = E.useState(null);
    E.useEffect( () => {
        C()
    }
    , []);
    const C = async () => {
        var P, L;
        try {
            f(!0),
            m(null);
            const j = Co({
                baseURL: "/api/apps/public",
                headers: {
                    "X-App-Id": ko.appId
                },
                token: ko.token,
                interceptResponses: !0
            });
            try {
                const N = await j.get(`/prod/public-settings/by-id/${ko.appId}`);
                w(N),
                ko.token ? await b() : (u(!1),
                o(!1)),
                f(!1)
            } catch (N) {
                if (console.error("App state check failed:", N),
                N.status === 403 && ((L = (P = N.data) == null ? void 0 : P.extra_data) != null && L.reason)) {
                    const V = N.data.extra_data.reason;
                    m(V === "auth_required" ? {
                        type: "auth_required",
                        message: "Authentication required"
                    } : V === "user_not_registered" ? {
                        type: "user_not_registered",
                        message: "User not registered for this app"
                    } : {
                        type: V,
                        message: N.message
                    })
                } else
                    m({
                        type: "unknown",
                        message: N.message || "Failed to load app"
                    });
                f(!1),
                u(!1)
            }
        } catch (j) {
            console.error("Unexpected error:", j),
            m({
                type: "unknown",
                message: j.message || "An unexpected error occurred"
            }),
            f(!1),
            u(!1)
        }
    }
      , b = async () => {
        try {
            u(!0);
            const P = await nn.auth.me();
            n(P),
            o(!0),
            u(!1)
        } catch (P) {
            console.error("User auth check failed:", P),
            u(!1),
            o(!1),
            (P.status === 401 || P.status === 403) && m({
                type: "auth_required",
                message: "Authentication required"
            })
        }
    }
      , k = (P=!0) => {
        n(null),
        o(!1),
        P ? nn.auth.logout(window.location.href) : nn.auth.logout()
    }
      , S = () => {
        nn.auth.redirectToLogin(window.location.href)
    }
    ;
    return x.jsx(wx.Provider, {
        value: {
            user: e,
            isAuthenticated: i,
            isLoadingAuth: l,
            isLoadingPublicSettings: d,
            authError: p,
            appPublicSettings: y,
            logout: k,
            navigateToLogin: S,
            checkAppState: C
        },
        children: t
    })
}
  , EA = () => {
    const t = E.useContext(wx);
    if (!t)
        throw new Error("useAuth must be used within an AuthProvider");
    return t
}
  , kA = () => x.jsx("div", {
    className: "flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-slate-50",
    children: x.jsx("div", {
        className: "max-w-md w-full p-8 bg-white rounded-lg shadow-lg border border-slate-100",
        children: x.jsxs("div", {
            className: "text-center",
            children: [x.jsx("div", {
                className: "inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-orange-100",
                children: x.jsx("svg", {
                    className: "w-8 h-8 text-orange-600",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: x.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    })
                })
            }), x.jsx("h1", {
                className: "text-3xl font-bold text-slate-900 mb-4",
                children: "Access Restricted"
            }), x.jsx("p", {
                className: "text-slate-600 mb-8",
                children: "You are not registered to use this application. Please contact the app administrator to request access."
            }), x.jsxs("div", {
                className: "p-4 bg-slate-50 rounded-md text-sm text-slate-600",
                children: [x.jsx("p", {
                    children: "If you believe this is an error, you can:"
                }), x.jsxs("ul", {
                    className: "list-disc list-inside mt-2 space-y-1",
                    children: [x.jsx("li", {
                        children: "Verify you are logged in with the correct account"
                    }), x.jsx("li", {
                        children: "Contact the app administrator for access"
                    }), x.jsx("li", {
                        children: "Try logging out and back in again"
                    })]
                })]
            })]
        })
    })
});
function TA() {
    const t = Ts()
      , e = [{
        path: "/Home",
        label: "Home",
        icon: mE
    }, {
        path: "/Archive",
        label: "Archive",
        icon: Hd
    }];
    return x.jsx("nav", {
        className: "sticky top-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/80",
        children: x.jsx("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: x.jsxs("div", {
                className: "flex items-center justify-between h-16",
                children: [x.jsxs(Cs, {
                    to: "/Home",
                    className: "flex items-center gap-2.5 group",
                    children: [x.jsx("div", {
                        className: "w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-200",
                        children: x.jsx(Zl, {
                            className: "w-4.5 h-4.5 text-primary"
                        })
                    }), x.jsxs("span", {
                        className: "text-lg font-bold tracking-tight text-foreground",
                        children: ["Objects", x.jsx("span", {
                            className: "text-primary",
                            children: "guide"
                        })]
                    })]
                }), x.jsx("div", {
                    className: "flex items-center gap-1",
                    children: e.map( ({path: n, label: i, icon: o}) => {
                        const l = t.pathname === n;
                        return x.jsxs(Cs, {
                            to: n,
                            className: `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${l ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-secondary"}`,
                            children: [x.jsx(o, {
                                className: "w-4 h-4"
                            }), x.jsx("span", {
                                className: "hidden sm:inline",
                                children: i
                            })]
                        }, n)
                    }
                    )
                })]
            })
        })
    })
}
function PA() {
    return x.jsxs("div", {
        className: "min-h-screen bg-background",
        children: [x.jsx(TA, {}), x.jsx("main", {
            children: x.jsx(tP, {})
        })]
    })
}
const uh = E.createContext({});
function ch(t) {
    const e = E.useRef(null);
    return e.current === null && (e.current = t()),
    e.current
}
const lu = E.createContext(null)
  , dh = E.createContext({
    transformPagePoint: t => t,
    isStatic: !1,
    reducedMotion: "never"
});
class _A extends E.Component {
    getSnapshotBeforeUpdate(e) {
        const n = this.props.childRef.current;
        if (n && e.isPresent && !this.props.isPresent) {
            const i = this.props.sizeRef.current;
            i.height = n.offsetHeight || 0,
            i.width = n.offsetWidth || 0,
            i.top = n.offsetTop,
            i.left = n.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function RA({children: t, isPresent: e}) {
    const n = E.useId()
      , i = E.useRef(null)
      , o = E.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0
    })
      , {nonce: l} = E.useContext(dh);
    return E.useInsertionEffect( () => {
        const {width: u, height: d, top: f, left: p} = o.current;
        if (e || !i.current || !u || !d)
            return;
        i.current.dataset.motionPopId = n;
        const m = document.createElement("style");
        return l && (m.nonce = l),
        document.head.appendChild(m),
        m.sheet && m.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${d}px !important;
            top: ${f}px !important;
            left: ${p}px !important;
          }
        `),
        () => {
            document.head.removeChild(m)
        }
    }
    , [e]),
    x.jsx(_A, {
        isPresent: e,
        childRef: i,
        sizeRef: o,
        children: E.cloneElement(t, {
            ref: i
        })
    })
}
const AA = ({children: t, initial: e, isPresent: n, onExitComplete: i, custom: o, presenceAffectsLayout: l, mode: u}) => {
    const d = ch(NA)
      , f = E.useId()
      , p = E.useCallback(y => {
        d.set(y, !0);
        for (const w of d.values())
            if (!w)
                return;
        i && i()
    }
    , [d, i])
      , m = E.useMemo( () => ({
        id: f,
        initial: e,
        isPresent: n,
        custom: o,
        onExitComplete: p,
        register: y => (d.set(y, !1),
        () => d.delete(y))
    }), l ? [Math.random(), p] : [n, p]);
    return E.useMemo( () => {
        d.forEach( (y, w) => d.set(w, !1))
    }
    , [n]),
    E.useEffect( () => {
        !n && !d.size && i && i()
    }
    , [n]),
    u === "popLayout" && (t = x.jsx(RA, {
        isPresent: n,
        children: t
    })),
    x.jsx(lu.Provider, {
        value: m,
        children: t
    })
}
;
function NA() {
    return new Map
}
function xx(t=!0) {
    const e = E.useContext(lu);
    if (e === null)
        return [!0, null];
    const {isPresent: n, onExitComplete: i, register: o} = e
      , l = E.useId();
    E.useEffect( () => {
        t && o(l)
    }
    , [t]);
    const u = E.useCallback( () => t && i && i(l), [l, i, t]);
    return !n && i ? [!1, u] : [!0]
}
const Sl = t => t.key || "";
function mv(t) {
    const e = [];
    return E.Children.forEach(t, n => {
        E.isValidElement(n) && e.push(n)
    }
    ),
    e
}
const fh = typeof window < "u"
  , Sx = fh ? E.useLayoutEffect : E.useEffect
  , OA = ({children: t, custom: e, initial: n=!0, onExitComplete: i, presenceAffectsLayout: o=!0, mode: l="sync", propagate: u=!1}) => {
    const [d,f] = xx(u)
      , p = E.useMemo( () => mv(t), [t])
      , m = u && !d ? [] : p.map(Sl)
      , y = E.useRef(!0)
      , w = E.useRef(p)
      , C = ch( () => new Map)
      , [b,k] = E.useState(p)
      , [S,P] = E.useState(p);
    Sx( () => {
        y.current = !1,
        w.current = p;
        for (let N = 0; N < S.length; N++) {
            const V = Sl(S[N]);
            m.includes(V) ? C.delete(V) : C.get(V) !== !0 && C.set(V, !1)
        }
    }
    , [S, m.length, m.join("-")]);
    const L = [];
    if (p !== b) {
        let N = [...p];
        for (let V = 0; V < S.length; V++) {
            const $ = S[V]
              , Y = Sl($);
            m.includes(Y) || (N.splice(V, 0, $),
            L.push($))
        }
        l === "wait" && L.length && (N = L),
        P(mv(N)),
        k(p);
        return
    }
    const {forceRender: j} = E.useContext(uh);
    return x.jsx(x.Fragment, {
        children: S.map(N => {
            const V = Sl(N)
              , $ = u && !d ? !1 : p === S || m.includes(V)
              , Y = () => {
                if (C.has(V))
                    C.set(V, !0);
                else
                    return;
                let I = !0;
                C.forEach(Q => {
                    Q || (I = !1)
                }
                ),
                I && (j == null || j(),
                P(w.current),
                u && (f == null || f()),
                i && i())
            }
            ;
            return x.jsx(AA, {
                isPresent: $,
                initial: !y.current || n ? void 0 : !1,
                custom: $ ? void 0 : e,
                presenceAffectsLayout: o,
                mode: l,
                onExitComplete: $ ? void 0 : Y,
                children: N
            }, V)
        }
        )
    })
}
  , Bt = t => t;
let bx = Bt;
function hh(t) {
    let e;
    return () => (e === void 0 && (e = t()),
    e)
}
const vi = (t, e, n) => {
    const i = e - t;
    return i === 0 ? 1 : (n - t) / i
}
  , Qn = t => t * 1e3
  , Gn = t => t / 1e3
  , jA = {
    useManualTiming: !1
};
function LA(t) {
    let e = new Set
      , n = new Set
      , i = !1
      , o = !1;
    const l = new WeakSet;
    let u = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };
    function d(p) {
        l.has(p) && (f.schedule(p),
        t()),
        p(u)
    }
    const f = {
        schedule: (p, m=!1, y=!1) => {
            const C = y && i ? e : n;
            return m && l.add(p),
            C.has(p) || C.add(p),
            p
        }
        ,
        cancel: p => {
            n.delete(p),
            l.delete(p)
        }
        ,
        process: p => {
            if (u = p,
            i) {
                o = !0;
                return
            }
            i = !0,
            [e,n] = [n, e],
            e.forEach(d),
            e.clear(),
            i = !1,
            o && (o = !1,
            f.process(p))
        }
    };
    return f
}
const bl = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"]
  , MA = 40;
function Cx(t, e) {
    let n = !1
      , i = !0;
    const o = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , l = () => n = !0
      , u = bl.reduce( (P, L) => (P[L] = LA(l),
    P), {})
      , {read: d, resolveKeyframes: f, update: p, preRender: m, render: y, postRender: w} = u
      , C = () => {
        const P = performance.now();
        n = !1,
        o.delta = i ? 1e3 / 60 : Math.max(Math.min(P - o.timestamp, MA), 1),
        o.timestamp = P,
        o.isProcessing = !0,
        d.process(o),
        f.process(o),
        p.process(o),
        m.process(o),
        y.process(o),
        w.process(o),
        o.isProcessing = !1,
        n && e && (i = !1,
        t(C))
    }
      , b = () => {
        n = !0,
        i = !0,
        o.isProcessing || t(C)
    }
    ;
    return {
        schedule: bl.reduce( (P, L) => {
            const j = u[L];
            return P[L] = (N, V=!1, $=!1) => (n || b(),
            j.schedule(N, V, $)),
            P
        }
        , {}),
        cancel: P => {
            for (let L = 0; L < bl.length; L++)
                u[bl[L]].cancel(P)
        }
        ,
        state: o,
        steps: u
    }
}
const {schedule: Ue, cancel: Dr, state: ht, steps: Nd} = Cx(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Bt, !0)
  , Ex = E.createContext({
    strict: !1
})
  , gv = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , wi = {};
for (const t in gv)
    wi[t] = {
        isEnabled: e => gv[t].some(n => !!e[n])
    };
function DA(t) {
    for (const e in t)
        wi[e] = {
            ...wi[e],
            ...t[e]
        }
}
const IA = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function $l(t) {
    return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || IA.has(t)
}
let kx = t => !$l(t);
function FA(t) {
    t && (kx = e => e.startsWith("on") ? !$l(e) : t(e))
}
try {
    FA(require("@emotion/is-prop-valid").default)
} catch {}
function VA(t, e, n) {
    const i = {};
    for (const o in t)
        o === "values" && typeof t.values == "object" || (kx(o) || n === !0 && $l(o) || !e && !$l(o) || t.draggable && o.startsWith("onDrag")) && (i[o] = t[o]);
    return i
}
function UA(t) {
    if (typeof Proxy > "u")
        return t;
    const e = new Map
      , n = (...i) => t(...i);
    return new Proxy(n,{
        get: (i, o) => o === "create" ? t : (e.has(o) || e.set(o, t(o)),
        e.get(o))
    })
}
const uu = E.createContext({});
function Vo(t) {
    return typeof t == "string" || Array.isArray(t)
}
function cu(t) {
    return t !== null && typeof t == "object" && typeof t.start == "function"
}
const ph = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , mh = ["initial", ...ph];
function du(t) {
    return cu(t.animate) || mh.some(e => Vo(t[e]))
}
function Tx(t) {
    return !!(du(t) || t.variants)
}
function BA(t, e) {
    if (du(t)) {
        const {initial: n, animate: i} = t;
        return {
            initial: n === !1 || Vo(n) ? n : void 0,
            animate: Vo(i) ? i : void 0
        }
    }
    return t.inherit !== !1 ? e : {}
}
function zA(t) {
    const {initial: e, animate: n} = BA(t, E.useContext(uu));
    return E.useMemo( () => ({
        initial: e,
        animate: n
    }), [yv(e), yv(n)])
}
function yv(t) {
    return Array.isArray(t) ? t.join(" ") : t
}
const $A = Symbol.for("motionComponentSymbol");
function ei(t) {
    return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current")
}
function HA(t, e, n) {
    return E.useCallback(i => {
        i && t.onMount && t.onMount(i),
        e && (i ? e.mount(i) : e.unmount()),
        n && (typeof n == "function" ? n(i) : ei(n) && (n.current = i))
    }
    , [e])
}
const gh = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
  , WA = "framerAppearId"
  , Px = "data-" + gh(WA)
  , {schedule: yh} = Cx(queueMicrotask, !1)
  , _x = E.createContext({});
function qA(t, e, n, i, o) {
    var l, u;
    const {visualElement: d} = E.useContext(uu)
      , f = E.useContext(Ex)
      , p = E.useContext(lu)
      , m = E.useContext(dh).reducedMotion
      , y = E.useRef(null);
    i = i || f.renderer,
    !y.current && i && (y.current = i(t, {
        visualState: e,
        parent: d,
        props: n,
        presenceContext: p,
        blockInitialAnimation: p ? p.initial === !1 : !1,
        reducedMotionConfig: m
    }));
    const w = y.current
      , C = E.useContext(_x);
    w && !w.projection && o && (w.type === "html" || w.type === "svg") && KA(y.current, n, o, C);
    const b = E.useRef(!1);
    E.useInsertionEffect( () => {
        w && b.current && w.update(n, p)
    }
    );
    const k = n[Px]
      , S = E.useRef(!!k && !(!((l = window.MotionHandoffIsComplete) === null || l === void 0) && l.call(window, k)) && ((u = window.MotionHasOptimisedAnimation) === null || u === void 0 ? void 0 : u.call(window, k)));
    return Sx( () => {
        w && (b.current = !0,
        window.MotionIsMounted = !0,
        w.updateFeatures(),
        yh.render(w.render),
        S.current && w.animationState && w.animationState.animateChanges())
    }
    ),
    E.useEffect( () => {
        w && (!S.current && w.animationState && w.animationState.animateChanges(),
        S.current && (queueMicrotask( () => {
            var P;
            (P = window.MotionHandoffMarkAsComplete) === null || P === void 0 || P.call(window, k)
        }
        ),
        S.current = !1))
    }
    ),
    w
}
function KA(t, e, n, i) {
    const {layoutId: o, layout: l, drag: u, dragConstraints: d, layoutScroll: f, layoutRoot: p} = e;
    t.projection = new n(t.latestValues,e["data-framer-portal-id"] ? void 0 : Rx(t.parent)),
    t.projection.setOptions({
        layoutId: o,
        layout: l,
        alwaysMeasureLayout: !!u || d && ei(d),
        visualElement: t,
        animationType: typeof l == "string" ? l : "both",
        initialPromotionConfig: i,
        layoutScroll: f,
        layoutRoot: p
    })
}
function Rx(t) {
    if (t)
        return t.options.allowProjection !== !1 ? t.projection : Rx(t.parent)
}
function QA({preloadedFeatures: t, createVisualElement: e, useRender: n, useVisualState: i, Component: o}) {
    var l, u;
    t && DA(t);
    function d(p, m) {
        let y;
        const w = {
            ...E.useContext(dh),
            ...p,
            layoutId: GA(p)
        }
          , {isStatic: C} = w
          , b = zA(p)
          , k = i(p, C);
        if (!C && fh) {
            YA();
            const S = XA(w);
            y = S.MeasureLayout,
            b.visualElement = qA(o, k, w, e, S.ProjectionNode)
        }
        return x.jsxs(uu.Provider, {
            value: b,
            children: [y && b.visualElement ? x.jsx(y, {
                visualElement: b.visualElement,
                ...w
            }) : null, n(o, p, HA(k, b.visualElement, m), k, C, b.visualElement)]
        })
    }
    d.displayName = `motion.${typeof o == "string" ? o : `create(${(u = (l = o.displayName) !== null && l !== void 0 ? l : o.name) !== null && u !== void 0 ? u : ""})`}`;
    const f = E.forwardRef(d);
    return f[$A] = o,
    f
}
function GA({layoutId: t}) {
    const e = E.useContext(uh).id;
    return e && t !== void 0 ? e + "-" + t : t
}
function YA(t, e) {
    E.useContext(Ex).strict
}
function XA(t) {
    const {drag: e, layout: n} = wi;
    if (!e && !n)
        return {};
    const i = {
        ...e,
        ...n
    };
    return {
        MeasureLayout: e != null && e.isEnabled(t) || n != null && n.isEnabled(t) ? i.MeasureLayout : void 0,
        ProjectionNode: i.ProjectionNode
    }
}
const JA = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function vh(t) {
    return typeof t != "string" || t.includes("-") ? !1 : !!(JA.indexOf(t) > -1 || /[A-Z]/u.test(t))
}
function vv(t) {
    const e = [{}, {}];
    return t == null || t.values.forEach( (n, i) => {
        e[0][i] = n.get(),
        e[1][i] = n.getVelocity()
    }
    ),
    e
}
function wh(t, e, n, i) {
    if (typeof e == "function") {
        const [o,l] = vv(i);
        e = e(n !== void 0 ? n : t.custom, o, l)
    }
    if (typeof e == "string" && (e = t.variants && t.variants[e]),
    typeof e == "function") {
        const [o,l] = vv(i);
        e = e(n !== void 0 ? n : t.custom, o, l)
    }
    return e
}
const Sf = t => Array.isArray(t)
  , ZA = t => !!(t && typeof t == "object" && t.mix && t.toValue)
  , eN = t => Sf(t) ? t[t.length - 1] || 0 : t
  , Ct = t => !!(t && t.getVelocity);
function Ml(t) {
    const e = Ct(t) ? t.get() : t;
    return ZA(e) ? e.toValue() : e
}
function tN({scrapeMotionValuesFromProps: t, createRenderState: e, onUpdate: n}, i, o, l) {
    const u = {
        latestValues: nN(i, o, l, t),
        renderState: e()
    };
    return n && (u.onMount = d => n({
        props: i,
        current: d,
        ...u
    }),
    u.onUpdate = d => n(d)),
    u
}
const Ax = t => (e, n) => {
    const i = E.useContext(uu)
      , o = E.useContext(lu)
      , l = () => tN(t, e, i, o);
    return n ? l() : ch(l)
}
;
function nN(t, e, n, i) {
    const o = {}
      , l = i(t, {});
    for (const w in l)
        o[w] = Ml(l[w]);
    let {initial: u, animate: d} = t;
    const f = du(t)
      , p = Tx(t);
    e && p && !f && t.inherit !== !1 && (u === void 0 && (u = e.initial),
    d === void 0 && (d = e.animate));
    let m = n ? n.initial === !1 : !1;
    m = m || u === !1;
    const y = m ? d : u;
    if (y && typeof y != "boolean" && !cu(y)) {
        const w = Array.isArray(y) ? y : [y];
        for (let C = 0; C < w.length; C++) {
            const b = wh(t, w[C]);
            if (b) {
                const {transitionEnd: k, transition: S, ...P} = b;
                for (const L in P) {
                    let j = P[L];
                    if (Array.isArray(j)) {
                        const N = m ? j.length - 1 : 0;
                        j = j[N]
                    }
                    j !== null && (o[L] = j)
                }
                for (const L in k)
                    o[L] = k[L]
            }
        }
    }
    return o
}
const Pi = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , Ps = new Set(Pi)
  , Nx = t => e => typeof e == "string" && e.startsWith(t)
  , Ox = Nx("--")
  , rN = Nx("var(--")
  , xh = t => rN(t) ? sN.test(t.split("/*")[0].trim()) : !1
  , sN = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
  , jx = (t, e) => e && typeof t == "number" ? e.transform(t) : t
  , Xn = (t, e, n) => n > e ? e : n < t ? t : n
  , _i = {
    test: t => typeof t == "number",
    parse: parseFloat,
    transform: t => t
}
  , Uo = {
    ..._i,
    transform: t => Xn(0, 1, t)
}
  , Cl = {
    ..._i,
    default: 1
}
  , ta = t => ({
    test: e => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
    parse: parseFloat,
    transform: e => `${e}${t}`
})
  , Cr = ta("deg")
  , _n = ta("%")
  , de = ta("px")
  , iN = ta("vh")
  , oN = ta("vw")
  , wv = {
    ..._n,
    parse: t => _n.parse(t) / 100,
    transform: t => _n.transform(t * 100)
}
  , aN = {
    borderWidth: de,
    borderTopWidth: de,
    borderRightWidth: de,
    borderBottomWidth: de,
    borderLeftWidth: de,
    borderRadius: de,
    radius: de,
    borderTopLeftRadius: de,
    borderTopRightRadius: de,
    borderBottomRightRadius: de,
    borderBottomLeftRadius: de,
    width: de,
    maxWidth: de,
    height: de,
    maxHeight: de,
    top: de,
    right: de,
    bottom: de,
    left: de,
    padding: de,
    paddingTop: de,
    paddingRight: de,
    paddingBottom: de,
    paddingLeft: de,
    margin: de,
    marginTop: de,
    marginRight: de,
    marginBottom: de,
    marginLeft: de,
    backgroundPositionX: de,
    backgroundPositionY: de
}
  , lN = {
    rotate: Cr,
    rotateX: Cr,
    rotateY: Cr,
    rotateZ: Cr,
    scale: Cl,
    scaleX: Cl,
    scaleY: Cl,
    scaleZ: Cl,
    skew: Cr,
    skewX: Cr,
    skewY: Cr,
    distance: de,
    translateX: de,
    translateY: de,
    translateZ: de,
    x: de,
    y: de,
    z: de,
    perspective: de,
    transformPerspective: de,
    opacity: Uo,
    originX: wv,
    originY: wv,
    originZ: de
}
  , xv = {
    ..._i,
    transform: Math.round
}
  , Sh = {
    ...aN,
    ...lN,
    zIndex: xv,
    size: de,
    fillOpacity: Uo,
    strokeOpacity: Uo,
    numOctaves: xv
}
  , uN = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , cN = Pi.length;
function dN(t, e, n) {
    let i = ""
      , o = !0;
    for (let l = 0; l < cN; l++) {
        const u = Pi[l]
          , d = t[u];
        if (d === void 0)
            continue;
        let f = !0;
        if (typeof d == "number" ? f = d === (u.startsWith("scale") ? 1 : 0) : f = parseFloat(d) === 0,
        !f || n) {
            const p = jx(d, Sh[u]);
            if (!f) {
                o = !1;
                const m = uN[u] || u;
                i += `${m}(${p}) `
            }
            n && (e[u] = p)
        }
    }
    return i = i.trim(),
    n ? i = n(e, o ? "" : i) : o && (i = "none"),
    i
}
function bh(t, e, n) {
    const {style: i, vars: o, transformOrigin: l} = t;
    let u = !1
      , d = !1;
    for (const f in e) {
        const p = e[f];
        if (Ps.has(f)) {
            u = !0;
            continue
        } else if (Ox(f)) {
            o[f] = p;
            continue
        } else {
            const m = jx(p, Sh[f]);
            f.startsWith("origin") ? (d = !0,
            l[f] = m) : i[f] = m
        }
    }
    if (e.transform || (u || n ? i.transform = dN(e, t.transform, n) : i.transform && (i.transform = "none")),
    d) {
        const {originX: f="50%", originY: p="50%", originZ: m=0} = l;
        i.transformOrigin = `${f} ${p} ${m}`
    }
}
const fN = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , hN = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function pN(t, e, n=1, i=0, o=!0) {
    t.pathLength = 1;
    const l = o ? fN : hN;
    t[l.offset] = de.transform(-i);
    const u = de.transform(e)
      , d = de.transform(n);
    t[l.array] = `${u} ${d}`
}
function Sv(t, e, n) {
    return typeof t == "string" ? t : de.transform(e + n * t)
}
function mN(t, e, n) {
    const i = Sv(e, t.x, t.width)
      , o = Sv(n, t.y, t.height);
    return `${i} ${o}`
}
function Ch(t, {attrX: e, attrY: n, attrScale: i, originX: o, originY: l, pathLength: u, pathSpacing: d=1, pathOffset: f=0, ...p}, m, y) {
    if (bh(t, p, y),
    m) {
        t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
        return
    }
    t.attrs = t.style,
    t.style = {};
    const {attrs: w, style: C, dimensions: b} = t;
    w.transform && (b && (C.transform = w.transform),
    delete w.transform),
    b && (o !== void 0 || l !== void 0 || C.transform) && (C.transformOrigin = mN(b, o !== void 0 ? o : .5, l !== void 0 ? l : .5)),
    e !== void 0 && (w.x = e),
    n !== void 0 && (w.y = n),
    i !== void 0 && (w.scale = i),
    u !== void 0 && pN(w, u, d, f, !1)
}
const Eh = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
})
  , Lx = () => ({
    ...Eh(),
    attrs: {}
})
  , kh = t => typeof t == "string" && t.toLowerCase() === "svg";
function Mx(t, {style: e, vars: n}, i, o) {
    Object.assign(t.style, e, o && o.getProjectionStyles(i));
    for (const l in n)
        t.style.setProperty(l, n[l])
}
const Dx = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function Ix(t, e, n, i) {
    Mx(t, e, void 0, i);
    for (const o in e.attrs)
        t.setAttribute(Dx.has(o) ? o : gh(o), e.attrs[o])
}
const Hl = {};
function gN(t) {
    Object.assign(Hl, t)
}
function Fx(t, {layout: e, layoutId: n}) {
    return Ps.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!Hl[t] || t === "opacity")
}
function Th(t, e, n) {
    var i;
    const {style: o} = t
      , l = {};
    for (const u in o)
        (Ct(o[u]) || e.style && Ct(e.style[u]) || Fx(u, t) || ((i = n == null ? void 0 : n.getValue(u)) === null || i === void 0 ? void 0 : i.liveStyle) !== void 0) && (l[u] = o[u]);
    return l
}
function Vx(t, e, n) {
    const i = Th(t, e, n);
    for (const o in t)
        if (Ct(t[o]) || Ct(e[o])) {
            const l = Pi.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
            i[l] = t[o]
        }
    return i
}
function yN(t, e) {
    try {
        e.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
    } catch {
        e.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }
    }
}
const bv = ["x", "y", "width", "height", "cx", "cy", "r"]
  , vN = {
    useVisualState: Ax({
        scrapeMotionValuesFromProps: Vx,
        createRenderState: Lx,
        onUpdate: ({props: t, prevProps: e, current: n, renderState: i, latestValues: o}) => {
            if (!n)
                return;
            let l = !!t.drag;
            if (!l) {
                for (const d in o)
                    if (Ps.has(d)) {
                        l = !0;
                        break
                    }
            }
            if (!l)
                return;
            let u = !e;
            if (e)
                for (let d = 0; d < bv.length; d++) {
                    const f = bv[d];
                    t[f] !== e[f] && (u = !0)
                }
            u && Ue.read( () => {
                yN(n, i),
                Ue.render( () => {
                    Ch(i, o, kh(n.tagName), t.transformTemplate),
                    Ix(n, i)
                }
                )
            }
            )
        }
    })
}
  , wN = {
    useVisualState: Ax({
        scrapeMotionValuesFromProps: Th,
        createRenderState: Eh
    })
};
function Ux(t, e, n) {
    for (const i in e)
        !Ct(e[i]) && !Fx(i, n) && (t[i] = e[i])
}
function xN({transformTemplate: t}, e) {
    return E.useMemo( () => {
        const n = Eh();
        return bh(n, e, t),
        Object.assign({}, n.vars, n.style)
    }
    , [e])
}
function SN(t, e) {
    const n = t.style || {}
      , i = {};
    return Ux(i, n, t),
    Object.assign(i, xN(t, e)),
    i
}
function bN(t, e) {
    const n = {}
      , i = SN(t, e);
    return t.drag && t.dragListener !== !1 && (n.draggable = !1,
    i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none",
    i.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`),
    t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0),
    n.style = i,
    n
}
function CN(t, e, n, i) {
    const o = E.useMemo( () => {
        const l = Lx();
        return Ch(l, e, kh(i), t.transformTemplate),
        {
            ...l.attrs,
            style: {
                ...l.style
            }
        }
    }
    , [e]);
    if (t.style) {
        const l = {};
        Ux(l, t.style, t),
        o.style = {
            ...l,
            ...o.style
        }
    }
    return o
}
function EN(t=!1) {
    return (n, i, o, {latestValues: l}, u) => {
        const f = (vh(n) ? CN : bN)(i, l, u, n)
          , p = VA(i, typeof n == "string", t)
          , m = n !== E.Fragment ? {
            ...p,
            ...f,
            ref: o
        } : {}
          , {children: y} = i
          , w = E.useMemo( () => Ct(y) ? y.get() : y, [y]);
        return E.createElement(n, {
            ...m,
            children: w
        })
    }
}
function kN(t, e) {
    return function(i, {forwardMotionProps: o}={
        forwardMotionProps: !1
    }) {
        const u = {
            ...vh(i) ? vN : wN,
            preloadedFeatures: t,
            useRender: EN(o),
            createVisualElement: e,
            Component: i
        };
        return QA(u)
    }
}
function Bx(t, e) {
    if (!Array.isArray(e))
        return !1;
    const n = e.length;
    if (n !== t.length)
        return !1;
    for (let i = 0; i < n; i++)
        if (e[i] !== t[i])
            return !1;
    return !0
}
function fu(t, e, n) {
    const i = t.getProps();
    return wh(i, e, n !== void 0 ? n : i.custom, t)
}
const TN = hh( () => window.ScrollTimeline !== void 0);
class PN {
    constructor(e) {
        this.stop = () => this.runAll("stop"),
        this.animations = e.filter(Boolean)
    }
    get finished() {
        return Promise.all(this.animations.map(e => "finished"in e ? e.finished : e))
    }
    getAll(e) {
        return this.animations[0][e]
    }
    setAll(e, n) {
        for (let i = 0; i < this.animations.length; i++)
            this.animations[i][e] = n
    }
    attachTimeline(e, n) {
        const i = this.animations.map(o => {
            if (TN() && o.attachTimeline)
                return o.attachTimeline(e);
            if (typeof n == "function")
                return n(o)
        }
        );
        return () => {
            i.forEach( (o, l) => {
                o && o(),
                this.animations[l].stop()
            }
            )
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(e) {
        this.setAll("time", e)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(e) {
        this.setAll("speed", e)
    }
    get startTime() {
        return this.getAll("startTime")
    }
    get duration() {
        let e = 0;
        for (let n = 0; n < this.animations.length; n++)
            e = Math.max(e, this.animations[n].duration);
        return e
    }
    runAll(e) {
        this.animations.forEach(n => n[e]())
    }
    flatten() {
        this.runAll("flatten")
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}
class _N extends PN {
    then(e, n) {
        return Promise.all(this.animations).then(e).catch(n)
    }
}
function Ph(t, e) {
    return t ? t[e] || t.default || t : void 0
}
const bf = 2e4;
function zx(t) {
    let e = 0;
    const n = 50;
    let i = t.next(e);
    for (; !i.done && e < bf; )
        e += n,
        i = t.next(e);
    return e >= bf ? 1 / 0 : e
}
function _h(t) {
    return typeof t == "function"
}
function Cv(t, e) {
    t.timeline = e,
    t.onfinish = null
}
const Rh = t => Array.isArray(t) && typeof t[0] == "number"
  , RN = {
    linearEasing: void 0
};
function AN(t, e) {
    const n = hh(t);
    return () => {
        var i;
        return (i = RN[e]) !== null && i !== void 0 ? i : n()
    }
}
const Wl = AN( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing")
  , $x = (t, e, n=10) => {
    let i = "";
    const o = Math.max(Math.round(e / n), 2);
    for (let l = 0; l < o; l++)
        i += t(vi(0, o - 1, l)) + ", ";
    return `linear(${i.substring(0, i.length - 2)})`
}
;
function Hx(t) {
    return !!(typeof t == "function" && Wl() || !t || typeof t == "string" && (t in Cf || Wl()) || Rh(t) || Array.isArray(t) && t.every(Hx))
}
const To = ([t,e,n,i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`
  , Cf = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: To([0, .65, .55, 1]),
    circOut: To([.55, 0, 1, .45]),
    backIn: To([.31, .01, .66, -.59]),
    backOut: To([.33, 1.53, .69, .99])
};
function Wx(t, e) {
    if (t)
        return typeof t == "function" && Wl() ? $x(t, e) : Rh(t) ? To(t) : Array.isArray(t) ? t.map(n => Wx(n, e) || Cf.easeOut) : Cf[t]
}
const fn = {
    x: !1,
    y: !1
};
function qx() {
    return fn.x || fn.y
}
function NN(t, e, n) {
    var i;
    if (t instanceof Element)
        return [t];
    if (typeof t == "string") {
        let o = document;
        const l = (i = void 0) !== null && i !== void 0 ? i : o.querySelectorAll(t);
        return l ? Array.from(l) : []
    }
    return Array.from(t)
}
function Kx(t, e) {
    const n = NN(t)
      , i = new AbortController
      , o = {
        passive: !0,
        ...e,
        signal: i.signal
    };
    return [n, o, () => i.abort()]
}
function Ev(t) {
    return e => {
        e.pointerType === "touch" || qx() || t(e)
    }
}
function ON(t, e, n={}) {
    const [i,o,l] = Kx(t, n)
      , u = Ev(d => {
        const {target: f} = d
          , p = e(d);
        if (typeof p != "function" || !f)
            return;
        const m = Ev(y => {
            p(y),
            f.removeEventListener("pointerleave", m)
        }
        );
        f.addEventListener("pointerleave", m, o)
    }
    );
    return i.forEach(d => {
        d.addEventListener("pointerenter", u, o)
    }
    ),
    l
}
const Qx = (t, e) => e ? t === e ? !0 : Qx(t, e.parentElement) : !1
  , Ah = t => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1
  , jN = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function LN(t) {
    return jN.has(t.tagName) || t.tabIndex !== -1
}
const Po = new WeakSet;
function kv(t) {
    return e => {
        e.key === "Enter" && t(e)
    }
}
function Od(t, e) {
    t.dispatchEvent(new PointerEvent("pointer" + e,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const MN = (t, e) => {
    const n = t.currentTarget;
    if (!n)
        return;
    const i = kv( () => {
        if (Po.has(n))
            return;
        Od(n, "down");
        const o = kv( () => {
            Od(n, "up")
        }
        )
          , l = () => Od(n, "cancel");
        n.addEventListener("keyup", o, e),
        n.addEventListener("blur", l, e)
    }
    );
    n.addEventListener("keydown", i, e),
    n.addEventListener("blur", () => n.removeEventListener("keydown", i), e)
}
;
function Tv(t) {
    return Ah(t) && !qx()
}
function DN(t, e, n={}) {
    const [i,o,l] = Kx(t, n)
      , u = d => {
        const f = d.currentTarget;
        if (!Tv(d) || Po.has(f))
            return;
        Po.add(f);
        const p = e(d)
          , m = (C, b) => {
            window.removeEventListener("pointerup", y),
            window.removeEventListener("pointercancel", w),
            !(!Tv(C) || !Po.has(f)) && (Po.delete(f),
            typeof p == "function" && p(C, {
                success: b
            }))
        }
          , y = C => {
            m(C, n.useGlobalTarget || Qx(f, C.target))
        }
          , w = C => {
            m(C, !1)
        }
        ;
        window.addEventListener("pointerup", y, o),
        window.addEventListener("pointercancel", w, o)
    }
    ;
    return i.forEach(d => {
        !LN(d) && d.getAttribute("tabindex") === null && (d.tabIndex = 0),
        (n.useGlobalTarget ? window : d).addEventListener("pointerdown", u, o),
        d.addEventListener("focus", p => MN(p, o), o)
    }
    ),
    l
}
function IN(t) {
    return t === "x" || t === "y" ? fn[t] ? null : (fn[t] = !0,
    () => {
        fn[t] = !1
    }
    ) : fn.x || fn.y ? null : (fn.x = fn.y = !0,
    () => {
        fn.x = fn.y = !1
    }
    )
}
const Gx = new Set(["width", "height", "top", "left", "right", "bottom", ...Pi]);
let Dl;
function FN() {
    Dl = void 0
}
const Rn = {
    now: () => (Dl === void 0 && Rn.set(ht.isProcessing || jA.useManualTiming ? ht.timestamp : performance.now()),
    Dl),
    set: t => {
        Dl = t,
        queueMicrotask(FN)
    }
};
function Nh(t, e) {
    t.indexOf(e) === -1 && t.push(e)
}
function Oh(t, e) {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1)
}
class jh {
    constructor() {
        this.subscriptions = []
    }
    add(e) {
        return Nh(this.subscriptions, e),
        () => Oh(this.subscriptions, e)
    }
    notify(e, n, i) {
        const o = this.subscriptions.length;
        if (o)
            if (o === 1)
                this.subscriptions[0](e, n, i);
            else
                for (let l = 0; l < o; l++) {
                    const u = this.subscriptions[l];
                    u && u(e, n, i)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
function Yx(t, e) {
    return e ? t * (1e3 / e) : 0
}
const Pv = 30
  , VN = t => !isNaN(parseFloat(t));
class UN {
    constructor(e, n={}) {
        this.version = "11.18.2",
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = (i, o=!0) => {
            const l = Rn.now();
            this.updatedAt !== l && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(i),
            this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
            o && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(e),
        this.owner = n.owner
    }
    setCurrent(e) {
        this.current = e,
        this.updatedAt = Rn.now(),
        this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = VN(this.current))
    }
    setPrevFrameValue(e=this.current) {
        this.prevFrameValue = e,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(e) {
        return this.on("change", e)
    }
    on(e, n) {
        this.events[e] || (this.events[e] = new jh);
        const i = this.events[e].add(n);
        return e === "change" ? () => {
            i(),
            Ue.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : i
    }
    clearListeners() {
        for (const e in this.events)
            this.events[e].clear()
    }
    attach(e, n) {
        this.passiveEffect = e,
        this.stopPassiveEffect = n
    }
    set(e, n=!0) {
        !n || !this.passiveEffect ? this.updateAndNotify(e, n) : this.passiveEffect(e, this.updateAndNotify)
    }
    setWithVelocity(e, n, i) {
        this.set(n),
        this.prev = void 0,
        this.prevFrameValue = e,
        this.prevUpdatedAt = this.updatedAt - i
    }
    jump(e, n=!0) {
        this.updateAndNotify(e),
        this.prev = e,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        n && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const e = Rn.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Pv)
            return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, Pv);
        return Yx(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(e) {
        return this.stop(),
        new Promise(n => {
            this.hasAnimated = !0,
            this.animation = e(n),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function Bo(t, e) {
    return new UN(t,e)
}
function BN(t, e, n) {
    t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, Bo(n))
}
function zN(t, e) {
    const n = fu(t, e);
    let {transitionEnd: i={}, transition: o={}, ...l} = n || {};
    l = {
        ...l,
        ...i
    };
    for (const u in l) {
        const d = eN(l[u]);
        BN(t, u, d)
    }
}
function $N(t) {
    return !!(Ct(t) && t.add)
}
function Ef(t, e) {
    const n = t.getValue("willChange");
    if ($N(n))
        return n.add(e)
}
function Xx(t) {
    return t.props[Px]
}
const Jx = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t
  , HN = 1e-7
  , WN = 12;
function qN(t, e, n, i, o) {
    let l, u, d = 0;
    do
        u = e + (n - e) / 2,
        l = Jx(u, i, o) - t,
        l > 0 ? n = u : e = u;
    while (Math.abs(l) > HN && ++d < WN);
    return u
}
function na(t, e, n, i) {
    if (t === e && n === i)
        return Bt;
    const o = l => qN(l, 0, 1, t, n);
    return l => l === 0 || l === 1 ? l : Jx(o(l), e, i)
}
const Zx = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
  , e1 = t => e => 1 - t(1 - e)
  , t1 = na(.33, 1.53, .69, .99)
  , Lh = e1(t1)
  , n1 = Zx(Lh)
  , r1 = t => (t *= 2) < 1 ? .5 * Lh(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
  , Mh = t => 1 - Math.sin(Math.acos(t))
  , s1 = e1(Mh)
  , i1 = Zx(Mh)
  , o1 = t => /^0[^.\s]+$/u.test(t);
function KN(t) {
    return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || o1(t) : !0
}
const No = t => Math.round(t * 1e5) / 1e5
  , Dh = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function QN(t) {
    return t == null
}
const GN = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , Ih = (t, e) => n => !!(typeof n == "string" && GN.test(n) && n.startsWith(t) || e && !QN(n) && Object.prototype.hasOwnProperty.call(n, e))
  , a1 = (t, e, n) => i => {
    if (typeof i != "string")
        return i;
    const [o,l,u,d] = i.match(Dh);
    return {
        [t]: parseFloat(o),
        [e]: parseFloat(l),
        [n]: parseFloat(u),
        alpha: d !== void 0 ? parseFloat(d) : 1
    }
}
  , YN = t => Xn(0, 255, t)
  , jd = {
    ..._i,
    transform: t => Math.round(YN(t))
}
  , us = {
    test: Ih("rgb", "red"),
    parse: a1("red", "green", "blue"),
    transform: ({red: t, green: e, blue: n, alpha: i=1}) => "rgba(" + jd.transform(t) + ", " + jd.transform(e) + ", " + jd.transform(n) + ", " + No(Uo.transform(i)) + ")"
};
function XN(t) {
    let e = ""
      , n = ""
      , i = ""
      , o = "";
    return t.length > 5 ? (e = t.substring(1, 3),
    n = t.substring(3, 5),
    i = t.substring(5, 7),
    o = t.substring(7, 9)) : (e = t.substring(1, 2),
    n = t.substring(2, 3),
    i = t.substring(3, 4),
    o = t.substring(4, 5),
    e += e,
    n += n,
    i += i,
    o += o),
    {
        red: parseInt(e, 16),
        green: parseInt(n, 16),
        blue: parseInt(i, 16),
        alpha: o ? parseInt(o, 16) / 255 : 1
    }
}
const kf = {
    test: Ih("#"),
    parse: XN,
    transform: us.transform
}
  , ti = {
    test: Ih("hsl", "hue"),
    parse: a1("hue", "saturation", "lightness"),
    transform: ({hue: t, saturation: e, lightness: n, alpha: i=1}) => "hsla(" + Math.round(t) + ", " + _n.transform(No(e)) + ", " + _n.transform(No(n)) + ", " + No(Uo.transform(i)) + ")"
}
  , St = {
    test: t => us.test(t) || kf.test(t) || ti.test(t),
    parse: t => us.test(t) ? us.parse(t) : ti.test(t) ? ti.parse(t) : kf.parse(t),
    transform: t => typeof t == "string" ? t : t.hasOwnProperty("red") ? us.transform(t) : ti.transform(t)
}
  , JN = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function ZN(t) {
    var e, n;
    return isNaN(t) && typeof t == "string" && (((e = t.match(Dh)) === null || e === void 0 ? void 0 : e.length) || 0) + (((n = t.match(JN)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const l1 = "number"
  , u1 = "color"
  , eO = "var"
  , tO = "var("
  , _v = "${}"
  , nO = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function zo(t) {
    const e = t.toString()
      , n = []
      , i = {
        color: [],
        number: [],
        var: []
    }
      , o = [];
    let l = 0;
    const d = e.replace(nO, f => (St.test(f) ? (i.color.push(l),
    o.push(u1),
    n.push(St.parse(f))) : f.startsWith(tO) ? (i.var.push(l),
    o.push(eO),
    n.push(f)) : (i.number.push(l),
    o.push(l1),
    n.push(parseFloat(f))),
    ++l,
    _v)).split(_v);
    return {
        values: n,
        split: d,
        indexes: i,
        types: o
    }
}
function c1(t) {
    return zo(t).values
}
function d1(t) {
    const {split: e, types: n} = zo(t)
      , i = e.length;
    return o => {
        let l = "";
        for (let u = 0; u < i; u++)
            if (l += e[u],
            o[u] !== void 0) {
                const d = n[u];
                d === l1 ? l += No(o[u]) : d === u1 ? l += St.transform(o[u]) : l += o[u]
            }
        return l
    }
}
const rO = t => typeof t == "number" ? 0 : t;
function sO(t) {
    const e = c1(t);
    return d1(t)(e.map(rO))
}
const Ir = {
    test: ZN,
    parse: c1,
    createTransformer: d1,
    getAnimatableNone: sO
}
  , iO = new Set(["brightness", "contrast", "saturate", "opacity"]);
function oO(t) {
    const [e,n] = t.slice(0, -1).split("(");
    if (e === "drop-shadow")
        return t;
    const [i] = n.match(Dh) || [];
    if (!i)
        return t;
    const o = n.replace(i, "");
    let l = iO.has(e) ? 1 : 0;
    return i !== n && (l *= 100),
    e + "(" + l + o + ")"
}
const aO = /\b([a-z-]*)\(.*?\)/gu
  , Tf = {
    ...Ir,
    getAnimatableNone: t => {
        const e = t.match(aO);
        return e ? e.map(oO).join(" ") : t
    }
}
  , lO = {
    ...Sh,
    color: St,
    backgroundColor: St,
    outlineColor: St,
    fill: St,
    stroke: St,
    borderColor: St,
    borderTopColor: St,
    borderRightColor: St,
    borderBottomColor: St,
    borderLeftColor: St,
    filter: Tf,
    WebkitFilter: Tf
}
  , Fh = t => lO[t];
function f1(t, e) {
    let n = Fh(t);
    return n !== Tf && (n = Ir),
    n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
}
const uO = new Set(["auto", "none", "0"]);
function cO(t, e, n) {
    let i = 0, o;
    for (; i < t.length && !o; ) {
        const l = t[i];
        typeof l == "string" && !uO.has(l) && zo(l).values.length && (o = t[i]),
        i++
    }
    if (o && n)
        for (const l of e)
            t[l] = f1(n, o)
}
const Rv = t => t === _i || t === de
  , Av = (t, e) => parseFloat(t.split(", ")[e])
  , Nv = (t, e) => (n, {transform: i}) => {
    if (i === "none" || !i)
        return 0;
    const o = i.match(/^matrix3d\((.+)\)$/u);
    if (o)
        return Av(o[1], e);
    {
        const l = i.match(/^matrix\((.+)\)$/u);
        return l ? Av(l[1], t) : 0
    }
}
  , dO = new Set(["x", "y", "z"])
  , fO = Pi.filter(t => !dO.has(t));
function hO(t) {
    const e = [];
    return fO.forEach(n => {
        const i = t.getValue(n);
        i !== void 0 && (e.push([n, i.get()]),
        i.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
    e
}
const xi = {
    width: ({x: t}, {paddingLeft: e="0", paddingRight: n="0"}) => t.max - t.min - parseFloat(e) - parseFloat(n),
    height: ({y: t}, {paddingTop: e="0", paddingBottom: n="0"}) => t.max - t.min - parseFloat(e) - parseFloat(n),
    top: (t, {top: e}) => parseFloat(e),
    left: (t, {left: e}) => parseFloat(e),
    bottom: ({y: t}, {top: e}) => parseFloat(e) + (t.max - t.min),
    right: ({x: t}, {left: e}) => parseFloat(e) + (t.max - t.min),
    x: Nv(4, 13),
    y: Nv(5, 14)
};
xi.translateX = xi.x;
xi.translateY = xi.y;
const xs = new Set;
let Pf = !1
  , _f = !1;
function h1() {
    if (_f) {
        const t = Array.from(xs).filter(i => i.needsMeasurement)
          , e = new Set(t.map(i => i.element))
          , n = new Map;
        e.forEach(i => {
            const o = hO(i);
            o.length && (n.set(i, o),
            i.render())
        }
        ),
        t.forEach(i => i.measureInitialState()),
        e.forEach(i => {
            i.render();
            const o = n.get(i);
            o && o.forEach( ([l,u]) => {
                var d;
                (d = i.getValue(l)) === null || d === void 0 || d.set(u)
            }
            )
        }
        ),
        t.forEach(i => i.measureEndState()),
        t.forEach(i => {
            i.suspendedScrollY !== void 0 && window.scrollTo(0, i.suspendedScrollY)
        }
        )
    }
    _f = !1,
    Pf = !1,
    xs.forEach(t => t.complete()),
    xs.clear()
}
function p1() {
    xs.forEach(t => {
        t.readKeyframes(),
        t.needsMeasurement && (_f = !0)
    }
    )
}
function pO() {
    p1(),
    h1()
}
class Vh {
    constructor(e, n, i, o, l, u=!1) {
        this.isComplete = !1,
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.isScheduled = !1,
        this.unresolvedKeyframes = [...e],
        this.onComplete = n,
        this.name = i,
        this.motionValue = o,
        this.element = l,
        this.isAsync = u
    }
    scheduleResolve() {
        this.isScheduled = !0,
        this.isAsync ? (xs.add(this),
        Pf || (Pf = !0,
        Ue.read(p1),
        Ue.resolveKeyframes(h1))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: e, name: n, element: i, motionValue: o} = this;
        for (let l = 0; l < e.length; l++)
            if (e[l] === null)
                if (l === 0) {
                    const u = o == null ? void 0 : o.get()
                      , d = e[e.length - 1];
                    if (u !== void 0)
                        e[0] = u;
                    else if (i && n) {
                        const f = i.readValue(n, d);
                        f != null && (e[0] = f)
                    }
                    e[0] === void 0 && (e[0] = d),
                    o && u === void 0 && o.set(e[0])
                } else
                    e[l] = e[l - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0,
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
        xs.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1,
        xs.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const m1 = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t)
  , mO = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function gO(t) {
    const e = mO.exec(t);
    if (!e)
        return [, ];
    const [,n,i,o] = e;
    return [`--${n ?? i}`, o]
}
function g1(t, e, n=1) {
    const [i,o] = gO(t);
    if (!i)
        return;
    const l = window.getComputedStyle(e).getPropertyValue(i);
    if (l) {
        const u = l.trim();
        return m1(u) ? parseFloat(u) : u
    }
    return xh(o) ? g1(o, e, n + 1) : o
}
const y1 = t => e => e.test(t)
  , yO = {
    test: t => t === "auto",
    parse: t => t
}
  , v1 = [_i, de, _n, Cr, oN, iN, yO]
  , Ov = t => v1.find(y1(t));
class w1 extends Vh {
    constructor(e, n, i, o, l) {
        super(e, n, i, o, l, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: e, element: n, name: i} = this;
        if (!n || !n.current)
            return;
        super.readKeyframes();
        for (let f = 0; f < e.length; f++) {
            let p = e[f];
            if (typeof p == "string" && (p = p.trim(),
            xh(p))) {
                const m = g1(p, n.current);
                m !== void 0 && (e[f] = m),
                f === e.length - 1 && (this.finalKeyframe = p)
            }
        }
        if (this.resolveNoneKeyframes(),
        !Gx.has(i) || e.length !== 2)
            return;
        const [o,l] = e
          , u = Ov(o)
          , d = Ov(l);
        if (u !== d)
            if (Rv(u) && Rv(d))
                for (let f = 0; f < e.length; f++) {
                    const p = e[f];
                    typeof p == "string" && (e[f] = parseFloat(p))
                }
            else
                this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: e, name: n} = this
          , i = [];
        for (let o = 0; o < e.length; o++)
            KN(e[o]) && i.push(o);
        i.length && cO(e, i, n)
    }
    measureInitialState() {
        const {element: e, unresolvedKeyframes: n, name: i} = this;
        if (!e || !e.current)
            return;
        i === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = xi[i](e.measureViewportBox(), window.getComputedStyle(e.current)),
        n[0] = this.measuredOrigin;
        const o = n[n.length - 1];
        o !== void 0 && e.getValue(i, o).jump(o, !1)
    }
    measureEndState() {
        var e;
        const {element: n, name: i, unresolvedKeyframes: o} = this;
        if (!n || !n.current)
            return;
        const l = n.getValue(i);
        l && l.jump(this.measuredOrigin, !1);
        const u = o.length - 1
          , d = o[u];
        o[u] = xi[i](n.measureViewportBox(), window.getComputedStyle(n.current)),
        d !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = d),
        !((e = this.removedTransforms) === null || e === void 0) && e.length && this.removedTransforms.forEach( ([f,p]) => {
            n.getValue(f).set(p)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
const jv = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (Ir.test(t) || t === "0") && !t.startsWith("url("));
function vO(t) {
    const e = t[0];
    if (t.length === 1)
        return !0;
    for (let n = 0; n < t.length; n++)
        if (t[n] !== e)
            return !0
}
function wO(t, e, n, i) {
    const o = t[0];
    if (o === null)
        return !1;
    if (e === "display" || e === "visibility")
        return !0;
    const l = t[t.length - 1]
      , u = jv(o, e)
      , d = jv(l, e);
    return !u || !d ? !1 : vO(t) || (n === "spring" || _h(n)) && i
}
const xO = t => t !== null;
function hu(t, {repeat: e, repeatType: n="loop"}, i) {
    const o = t.filter(xO)
      , l = e && n !== "loop" && e % 2 === 1 ? 0 : o.length - 1;
    return !l || i === void 0 ? o[l] : i
}
const SO = 40;
class x1 {
    constructor({autoplay: e=!0, delay: n=0, type: i="keyframes", repeat: o=0, repeatDelay: l=0, repeatType: u="loop", ...d}) {
        this.isStopped = !1,
        this.hasAttemptedResolve = !1,
        this.createdAt = Rn.now(),
        this.options = {
            autoplay: e,
            delay: n,
            type: i,
            repeat: o,
            repeatDelay: l,
            repeatType: u,
            ...d
        },
        this.updateFinishedPromise()
    }
    calcStartTime() {
        return this.resolvedAt ? this.resolvedAt - this.createdAt > SO ? this.resolvedAt : this.createdAt : this.createdAt
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && pO(),
        this._resolved
    }
    onKeyframesResolved(e, n) {
        this.resolvedAt = Rn.now(),
        this.hasAttemptedResolve = !0;
        const {name: i, type: o, velocity: l, delay: u, onComplete: d, onUpdate: f, isGenerator: p} = this.options;
        if (!p && !wO(e, i, o, l))
            if (u)
                this.options.duration = 0;
            else {
                f && f(hu(e, this.options, n)),
                d && d(),
                this.resolveFinishedPromise();
                return
            }
        const m = this.initPlayback(e, n);
        m !== !1 && (this._resolved = {
            keyframes: e,
            finalKeyframe: n,
            ...m
        },
        this.onPostResolved())
    }
    onPostResolved() {}
    then(e, n) {
        return this.currentFinishedPromise.then(e, n)
    }
    flatten() {
        this.options.type = "keyframes",
        this.options.ease = "linear"
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(e => {
            this.resolveFinishedPromise = e
        }
        )
    }
}
const He = (t, e, n) => t + (e - t) * n;
function Ld(t, e, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
}
function bO({hue: t, saturation: e, lightness: n, alpha: i}) {
    t /= 360,
    e /= 100,
    n /= 100;
    let o = 0
      , l = 0
      , u = 0;
    if (!e)
        o = l = u = n;
    else {
        const d = n < .5 ? n * (1 + e) : n + e - n * e
          , f = 2 * n - d;
        o = Ld(f, d, t + 1 / 3),
        l = Ld(f, d, t),
        u = Ld(f, d, t - 1 / 3)
    }
    return {
        red: Math.round(o * 255),
        green: Math.round(l * 255),
        blue: Math.round(u * 255),
        alpha: i
    }
}
function ql(t, e) {
    return n => n > 0 ? e : t
}
const Md = (t, e, n) => {
    const i = t * t
      , o = n * (e * e - i) + i;
    return o < 0 ? 0 : Math.sqrt(o)
}
  , CO = [kf, us, ti]
  , EO = t => CO.find(e => e.test(t));
function Lv(t) {
    const e = EO(t);
    if (!e)
        return !1;
    let n = e.parse(t);
    return e === ti && (n = bO(n)),
    n
}
const Mv = (t, e) => {
    const n = Lv(t)
      , i = Lv(e);
    if (!n || !i)
        return ql(t, e);
    const o = {
        ...n
    };
    return l => (o.red = Md(n.red, i.red, l),
    o.green = Md(n.green, i.green, l),
    o.blue = Md(n.blue, i.blue, l),
    o.alpha = He(n.alpha, i.alpha, l),
    us.transform(o))
}
  , kO = (t, e) => n => e(t(n))
  , ra = (...t) => t.reduce(kO)
  , Rf = new Set(["none", "hidden"]);
function TO(t, e) {
    return Rf.has(t) ? n => n <= 0 ? t : e : n => n >= 1 ? e : t
}
function PO(t, e) {
    return n => He(t, e, n)
}
function Uh(t) {
    return typeof t == "number" ? PO : typeof t == "string" ? xh(t) ? ql : St.test(t) ? Mv : AO : Array.isArray(t) ? S1 : typeof t == "object" ? St.test(t) ? Mv : _O : ql
}
function S1(t, e) {
    const n = [...t]
      , i = n.length
      , o = t.map( (l, u) => Uh(l)(l, e[u]));
    return l => {
        for (let u = 0; u < i; u++)
            n[u] = o[u](l);
        return n
    }
}
function _O(t, e) {
    const n = {
        ...t,
        ...e
    }
      , i = {};
    for (const o in n)
        t[o] !== void 0 && e[o] !== void 0 && (i[o] = Uh(t[o])(t[o], e[o]));
    return o => {
        for (const l in i)
            n[l] = i[l](o);
        return n
    }
}
function RO(t, e) {
    var n;
    const i = []
      , o = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let l = 0; l < e.values.length; l++) {
        const u = e.types[l]
          , d = t.indexes[u][o[u]]
          , f = (n = t.values[d]) !== null && n !== void 0 ? n : 0;
        i[l] = f,
        o[u]++
    }
    return i
}
const AO = (t, e) => {
    const n = Ir.createTransformer(e)
      , i = zo(t)
      , o = zo(e);
    return i.indexes.var.length === o.indexes.var.length && i.indexes.color.length === o.indexes.color.length && i.indexes.number.length >= o.indexes.number.length ? Rf.has(t) && !o.values.length || Rf.has(e) && !i.values.length ? TO(t, e) : ra(S1(RO(i, o), o.values), n) : ql(t, e)
}
;
function b1(t, e, n) {
    return typeof t == "number" && typeof e == "number" && typeof n == "number" ? He(t, e, n) : Uh(t)(t, e)
}
const NO = 5;
function C1(t, e, n) {
    const i = Math.max(e - NO, 0);
    return Yx(n - t(i), e - i)
}
const Ke = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
}
  , Dd = .001;
function OO({duration: t=Ke.duration, bounce: e=Ke.bounce, velocity: n=Ke.velocity, mass: i=Ke.mass}) {
    let o, l, u = 1 - e;
    u = Xn(Ke.minDamping, Ke.maxDamping, u),
    t = Xn(Ke.minDuration, Ke.maxDuration, Gn(t)),
    u < 1 ? (o = p => {
        const m = p * u
          , y = m * t
          , w = m - n
          , C = Af(p, u)
          , b = Math.exp(-y);
        return Dd - w / C * b
    }
    ,
    l = p => {
        const y = p * u * t
          , w = y * n + n
          , C = Math.pow(u, 2) * Math.pow(p, 2) * t
          , b = Math.exp(-y)
          , k = Af(Math.pow(p, 2), u);
        return (-o(p) + Dd > 0 ? -1 : 1) * ((w - C) * b) / k
    }
    ) : (o = p => {
        const m = Math.exp(-p * t)
          , y = (p - n) * t + 1;
        return -Dd + m * y
    }
    ,
    l = p => {
        const m = Math.exp(-p * t)
          , y = (n - p) * (t * t);
        return m * y
    }
    );
    const d = 5 / t
      , f = LO(o, l, d);
    if (t = Qn(t),
    isNaN(f))
        return {
            stiffness: Ke.stiffness,
            damping: Ke.damping,
            duration: t
        };
    {
        const p = Math.pow(f, 2) * i;
        return {
            stiffness: p,
            damping: u * 2 * Math.sqrt(i * p),
            duration: t
        }
    }
}
const jO = 12;
function LO(t, e, n) {
    let i = n;
    for (let o = 1; o < jO; o++)
        i = i - t(i) / e(i);
    return i
}
function Af(t, e) {
    return t * Math.sqrt(1 - e * e)
}
const MO = ["duration", "bounce"]
  , DO = ["stiffness", "damping", "mass"];
function Dv(t, e) {
    return e.some(n => t[n] !== void 0)
}
function IO(t) {
    let e = {
        velocity: Ke.velocity,
        stiffness: Ke.stiffness,
        damping: Ke.damping,
        mass: Ke.mass,
        isResolvedFromDuration: !1,
        ...t
    };
    if (!Dv(t, DO) && Dv(t, MO))
        if (t.visualDuration) {
            const n = t.visualDuration
              , i = 2 * Math.PI / (n * 1.2)
              , o = i * i
              , l = 2 * Xn(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(o);
            e = {
                ...e,
                mass: Ke.mass,
                stiffness: o,
                damping: l
            }
        } else {
            const n = OO(t);
            e = {
                ...e,
                ...n,
                mass: Ke.mass
            },
            e.isResolvedFromDuration = !0
        }
    return e
}
function E1(t=Ke.visualDuration, e=Ke.bounce) {
    const n = typeof t != "object" ? {
        visualDuration: t,
        keyframes: [0, 1],
        bounce: e
    } : t;
    let {restSpeed: i, restDelta: o} = n;
    const l = n.keyframes[0]
      , u = n.keyframes[n.keyframes.length - 1]
      , d = {
        done: !1,
        value: l
    }
      , {stiffness: f, damping: p, mass: m, duration: y, velocity: w, isResolvedFromDuration: C} = IO({
        ...n,
        velocity: -Gn(n.velocity || 0)
    })
      , b = w || 0
      , k = p / (2 * Math.sqrt(f * m))
      , S = u - l
      , P = Gn(Math.sqrt(f / m))
      , L = Math.abs(S) < 5;
    i || (i = L ? Ke.restSpeed.granular : Ke.restSpeed.default),
    o || (o = L ? Ke.restDelta.granular : Ke.restDelta.default);
    let j;
    if (k < 1) {
        const V = Af(P, k);
        j = $ => {
            const Y = Math.exp(-k * P * $);
            return u - Y * ((b + k * P * S) / V * Math.sin(V * $) + S * Math.cos(V * $))
        }
    } else if (k === 1)
        j = V => u - Math.exp(-P * V) * (S + (b + P * S) * V);
    else {
        const V = P * Math.sqrt(k * k - 1);
        j = $ => {
            const Y = Math.exp(-k * P * $)
              , I = Math.min(V * $, 300);
            return u - Y * ((b + k * P * S) * Math.sinh(I) + V * S * Math.cosh(I)) / V
        }
    }
    const N = {
        calculatedDuration: C && y || null,
        next: V => {
            const $ = j(V);
            if (C)
                d.done = V >= y;
            else {
                let Y = 0;
                k < 1 && (Y = V === 0 ? Qn(b) : C1(j, V, $));
                const I = Math.abs(Y) <= i
                  , Q = Math.abs(u - $) <= o;
                d.done = I && Q
            }
            return d.value = d.done ? u : $,
            d
        }
        ,
        toString: () => {
            const V = Math.min(zx(N), bf)
              , $ = $x(Y => N.next(V * Y).value, V, 30);
            return V + "ms " + $
        }
    };
    return N
}
function Iv({keyframes: t, velocity: e=0, power: n=.8, timeConstant: i=325, bounceDamping: o=10, bounceStiffness: l=500, modifyTarget: u, min: d, max: f, restDelta: p=.5, restSpeed: m}) {
    const y = t[0]
      , w = {
        done: !1,
        value: y
    }
      , C = I => d !== void 0 && I < d || f !== void 0 && I > f
      , b = I => d === void 0 ? f : f === void 0 || Math.abs(d - I) < Math.abs(f - I) ? d : f;
    let k = n * e;
    const S = y + k
      , P = u === void 0 ? S : u(S);
    P !== S && (k = P - y);
    const L = I => -k * Math.exp(-I / i)
      , j = I => P + L(I)
      , N = I => {
        const Q = L(I)
          , X = j(I);
        w.done = Math.abs(Q) <= p,
        w.value = w.done ? P : X
    }
    ;
    let V, $;
    const Y = I => {
        C(w.value) && (V = I,
        $ = E1({
            keyframes: [w.value, b(w.value)],
            velocity: C1(j, I, w.value),
            damping: o,
            stiffness: l,
            restDelta: p,
            restSpeed: m
        }))
    }
    ;
    return Y(0),
    {
        calculatedDuration: null,
        next: I => {
            let Q = !1;
            return !$ && V === void 0 && (Q = !0,
            N(I),
            Y(I)),
            V !== void 0 && I >= V ? $.next(I - V) : (!Q && N(I),
            w)
        }
    }
}
const FO = na(.42, 0, 1, 1)
  , VO = na(0, 0, .58, 1)
  , k1 = na(.42, 0, .58, 1)
  , UO = t => Array.isArray(t) && typeof t[0] != "number"
  , BO = {
    linear: Bt,
    easeIn: FO,
    easeInOut: k1,
    easeOut: VO,
    circIn: Mh,
    circInOut: i1,
    circOut: s1,
    backIn: Lh,
    backInOut: n1,
    backOut: t1,
    anticipate: r1
}
  , Fv = t => {
    if (Rh(t)) {
        bx(t.length === 4);
        const [e,n,i,o] = t;
        return na(e, n, i, o)
    } else if (typeof t == "string")
        return BO[t];
    return t
}
;
function zO(t, e, n) {
    const i = []
      , o = n || b1
      , l = t.length - 1;
    for (let u = 0; u < l; u++) {
        let d = o(t[u], t[u + 1]);
        if (e) {
            const f = Array.isArray(e) ? e[u] || Bt : e;
            d = ra(f, d)
        }
        i.push(d)
    }
    return i
}
function $O(t, e, {clamp: n=!0, ease: i, mixer: o}={}) {
    const l = t.length;
    if (bx(l === e.length),
    l === 1)
        return () => e[0];
    if (l === 2 && e[0] === e[1])
        return () => e[1];
    const u = t[0] === t[1];
    t[0] > t[l - 1] && (t = [...t].reverse(),
    e = [...e].reverse());
    const d = zO(e, i, o)
      , f = d.length
      , p = m => {
        if (u && m < t[0])
            return e[0];
        let y = 0;
        if (f > 1)
            for (; y < t.length - 2 && !(m < t[y + 1]); y++)
                ;
        const w = vi(t[y], t[y + 1], m);
        return d[y](w)
    }
    ;
    return n ? m => p(Xn(t[0], t[l - 1], m)) : p
}
function HO(t, e) {
    const n = t[t.length - 1];
    for (let i = 1; i <= e; i++) {
        const o = vi(0, e, i);
        t.push(He(n, 1, o))
    }
}
function WO(t) {
    const e = [0];
    return HO(e, t.length - 1),
    e
}
function qO(t, e) {
    return t.map(n => n * e)
}
function KO(t, e) {
    return t.map( () => e || k1).splice(0, t.length - 1)
}
function Kl({duration: t=300, keyframes: e, times: n, ease: i="easeInOut"}) {
    const o = UO(i) ? i.map(Fv) : Fv(i)
      , l = {
        done: !1,
        value: e[0]
    }
      , u = qO(n && n.length === e.length ? n : WO(e), t)
      , d = $O(u, e, {
        ease: Array.isArray(o) ? o : KO(e, o)
    });
    return {
        calculatedDuration: t,
        next: f => (l.value = d(f),
        l.done = f >= t,
        l)
    }
}
const QO = t => {
    const e = ({timestamp: n}) => t(n);
    return {
        start: () => Ue.update(e, !0),
        stop: () => Dr(e),
        now: () => ht.isProcessing ? ht.timestamp : Rn.now()
    }
}
  , GO = {
    decay: Iv,
    inertia: Iv,
    tween: Kl,
    keyframes: Kl,
    spring: E1
}
  , YO = t => t / 100;
class Bh extends x1 {
    constructor(e) {
        super(e),
        this.holdTime = null,
        this.cancelTime = null,
        this.currentTime = 0,
        this.playbackSpeed = 1,
        this.pendingPlayState = "running",
        this.startTime = null,
        this.state = "idle",
        this.stop = () => {
            if (this.resolver.cancel(),
            this.isStopped = !0,
            this.state === "idle")
                return;
            this.teardown();
            const {onStop: f} = this.options;
            f && f()
        }
        ;
        const {name: n, motionValue: i, element: o, keyframes: l} = this.options
          , u = (o == null ? void 0 : o.KeyframeResolver) || Vh
          , d = (f, p) => this.onKeyframesResolved(f, p);
        this.resolver = new u(l,d,n,i,o),
        this.resolver.scheduleResolve()
    }
    flatten() {
        super.flatten(),
        this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
    }
    initPlayback(e) {
        const {type: n="keyframes", repeat: i=0, repeatDelay: o=0, repeatType: l, velocity: u=0} = this.options
          , d = _h(n) ? n : GO[n] || Kl;
        let f, p;
        d !== Kl && typeof e[0] != "number" && (f = ra(YO, b1(e[0], e[1])),
        e = [0, 100]);
        const m = d({
            ...this.options,
            keyframes: e
        });
        l === "mirror" && (p = d({
            ...this.options,
            keyframes: [...e].reverse(),
            velocity: -u
        })),
        m.calculatedDuration === null && (m.calculatedDuration = zx(m));
        const {calculatedDuration: y} = m
          , w = y + o
          , C = w * (i + 1) - o;
        return {
            generator: m,
            mirroredGenerator: p,
            mapPercentToKeyframes: f,
            calculatedDuration: y,
            resolvedDuration: w,
            totalDuration: C
        }
    }
    onPostResolved() {
        const {autoplay: e=!0} = this.options;
        this.play(),
        this.pendingPlayState === "paused" || !e ? this.pause() : this.state = this.pendingPlayState
    }
    tick(e, n=!1) {
        const {resolved: i} = this;
        if (!i) {
            const {keyframes: I} = this.options;
            return {
                done: !0,
                value: I[I.length - 1]
            }
        }
        const {finalKeyframe: o, generator: l, mirroredGenerator: u, mapPercentToKeyframes: d, keyframes: f, calculatedDuration: p, totalDuration: m, resolvedDuration: y} = i;
        if (this.startTime === null)
            return l.next(0);
        const {delay: w, repeat: C, repeatType: b, repeatDelay: k, onUpdate: S} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - m / this.speed, this.startTime)),
        n ? this.currentTime = e : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(e - this.startTime) * this.speed;
        const P = this.currentTime - w * (this.speed >= 0 ? 1 : -1)
          , L = this.speed >= 0 ? P < 0 : P > m;
        this.currentTime = Math.max(P, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = m);
        let j = this.currentTime
          , N = l;
        if (C) {
            const I = Math.min(this.currentTime, m) / y;
            let Q = Math.floor(I)
              , X = I % 1;
            !X && I >= 1 && (X = 1),
            X === 1 && Q--,
            Q = Math.min(Q, C + 1),
            !!(Q % 2) && (b === "reverse" ? (X = 1 - X,
            k && (X -= k / y)) : b === "mirror" && (N = u)),
            j = Xn(0, 1, X) * y
        }
        const V = L ? {
            done: !1,
            value: f[0]
        } : N.next(j);
        d && (V.value = d(V.value));
        let {done: $} = V;
        !L && p !== null && ($ = this.speed >= 0 ? this.currentTime >= m : this.currentTime <= 0);
        const Y = this.holdTime === null && (this.state === "finished" || this.state === "running" && $);
        return Y && o !== void 0 && (V.value = hu(f, this.options, o)),
        S && S(V.value),
        Y && this.finish(),
        V
    }
    get duration() {
        const {resolved: e} = this;
        return e ? Gn(e.calculatedDuration) : 0
    }
    get time() {
        return Gn(this.currentTime)
    }
    set time(e) {
        e = Qn(e),
        this.currentTime = e,
        this.holdTime !== null || this.speed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(e) {
        const n = this.playbackSpeed !== e;
        this.playbackSpeed = e,
        n && (this.time = Gn(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(),
        !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped)
            return;
        const {driver: e=QO, onPlay: n, startTime: i} = this.options;
        this.driver || (this.driver = e(l => this.tick(l))),
        n && n();
        const o = this.driver.now();
        this.holdTime !== null ? this.startTime = o - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = o) : this.startTime = i ?? this.calcStartTime(),
        this.state === "finished" && this.updateFinishedPromise(),
        this.cancelTime = this.startTime,
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        var e;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused",
        this.holdTime = (e = this.currentTime) !== null && e !== void 0 ? e : 0
    }
    complete() {
        this.state !== "running" && this.play(),
        this.pendingPlayState = this.state = "finished",
        this.holdTime = null
    }
    finish() {
        this.teardown(),
        this.state = "finished";
        const {onComplete: e} = this.options;
        e && e()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        this.startTime = this.cancelTime = null,
        this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(e) {
        return this.startTime = 0,
        this.tick(e, !0)
    }
}
const XO = new Set(["opacity", "clipPath", "filter", "transform"]);
function JO(t, e, n, {delay: i=0, duration: o=300, repeat: l=0, repeatType: u="loop", ease: d="easeInOut", times: f}={}) {
    const p = {
        [e]: n
    };
    f && (p.offset = f);
    const m = Wx(d, o);
    return Array.isArray(m) && (p.easing = m),
    t.animate(p, {
        delay: i,
        duration: o,
        easing: Array.isArray(m) ? "linear" : m,
        fill: "both",
        iterations: l + 1,
        direction: u === "reverse" ? "alternate" : "normal"
    })
}
const ZO = hh( () => Object.hasOwnProperty.call(Element.prototype, "animate"))
  , Ql = 10
  , e2 = 2e4;
function t2(t) {
    return _h(t.type) || t.type === "spring" || !Hx(t.ease)
}
function n2(t, e) {
    const n = new Bh({
        ...e,
        keyframes: t,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let i = {
        done: !1,
        value: t[0]
    };
    const o = [];
    let l = 0;
    for (; !i.done && l < e2; )
        i = n.sample(l),
        o.push(i.value),
        l += Ql;
    return {
        times: void 0,
        keyframes: o,
        duration: l - Ql,
        ease: "linear"
    }
}
const T1 = {
    anticipate: r1,
    backInOut: n1,
    circInOut: i1
};
function r2(t) {
    return t in T1
}
class Vv extends x1 {
    constructor(e) {
        super(e);
        const {name: n, motionValue: i, element: o, keyframes: l} = this.options;
        this.resolver = new w1(l, (u, d) => this.onKeyframesResolved(u, d),n,i,o),
        this.resolver.scheduleResolve()
    }
    initPlayback(e, n) {
        let {duration: i=300, times: o, ease: l, type: u, motionValue: d, name: f, startTime: p} = this.options;
        if (!d.owner || !d.owner.current)
            return !1;
        if (typeof l == "string" && Wl() && r2(l) && (l = T1[l]),
        t2(this.options)) {
            const {onComplete: y, onUpdate: w, motionValue: C, element: b, ...k} = this.options
              , S = n2(e, k);
            e = S.keyframes,
            e.length === 1 && (e[1] = e[0]),
            i = S.duration,
            o = S.times,
            l = S.ease,
            u = "keyframes"
        }
        const m = JO(d.owner.current, f, e, {
            ...this.options,
            duration: i,
            times: o,
            ease: l
        });
        return m.startTime = p ?? this.calcStartTime(),
        this.pendingTimeline ? (Cv(m, this.pendingTimeline),
        this.pendingTimeline = void 0) : m.onfinish = () => {
            const {onComplete: y} = this.options;
            d.set(hu(e, this.options, n)),
            y && y(),
            this.cancel(),
            this.resolveFinishedPromise()
        }
        ,
        {
            animation: m,
            duration: i,
            times: o,
            type: u,
            ease: l,
            keyframes: e
        }
    }
    get duration() {
        const {resolved: e} = this;
        if (!e)
            return 0;
        const {duration: n} = e;
        return Gn(n)
    }
    get time() {
        const {resolved: e} = this;
        if (!e)
            return 0;
        const {animation: n} = e;
        return Gn(n.currentTime || 0)
    }
    set time(e) {
        const {resolved: n} = this;
        if (!n)
            return;
        const {animation: i} = n;
        i.currentTime = Qn(e)
    }
    get speed() {
        const {resolved: e} = this;
        if (!e)
            return 1;
        const {animation: n} = e;
        return n.playbackRate
    }
    set speed(e) {
        const {resolved: n} = this;
        if (!n)
            return;
        const {animation: i} = n;
        i.playbackRate = e
    }
    get state() {
        const {resolved: e} = this;
        if (!e)
            return "idle";
        const {animation: n} = e;
        return n.playState
    }
    get startTime() {
        const {resolved: e} = this;
        if (!e)
            return null;
        const {animation: n} = e;
        return n.startTime
    }
    attachTimeline(e) {
        if (!this._resolved)
            this.pendingTimeline = e;
        else {
            const {resolved: n} = this;
            if (!n)
                return Bt;
            const {animation: i} = n;
            Cv(i, e)
        }
        return Bt
    }
    play() {
        if (this.isStopped)
            return;
        const {resolved: e} = this;
        if (!e)
            return;
        const {animation: n} = e;
        n.playState === "finished" && this.updateFinishedPromise(),
        n.play()
    }
    pause() {
        const {resolved: e} = this;
        if (!e)
            return;
        const {animation: n} = e;
        n.pause()
    }
    stop() {
        if (this.resolver.cancel(),
        this.isStopped = !0,
        this.state === "idle")
            return;
        this.resolveFinishedPromise(),
        this.updateFinishedPromise();
        const {resolved: e} = this;
        if (!e)
            return;
        const {animation: n, keyframes: i, duration: o, type: l, ease: u, times: d} = e;
        if (n.playState === "idle" || n.playState === "finished")
            return;
        if (this.time) {
            const {motionValue: p, onUpdate: m, onComplete: y, element: w, ...C} = this.options
              , b = new Bh({
                ...C,
                keyframes: i,
                duration: o,
                type: l,
                ease: u,
                times: d,
                isGenerator: !0
            })
              , k = Qn(this.time);
            p.setWithVelocity(b.sample(k - Ql).value, b.sample(k).value, Ql)
        }
        const {onStop: f} = this.options;
        f && f(),
        this.cancel()
    }
    complete() {
        const {resolved: e} = this;
        e && e.animation.finish()
    }
    cancel() {
        const {resolved: e} = this;
        e && e.animation.cancel()
    }
    static supports(e) {
        const {motionValue: n, name: i, repeatDelay: o, repeatType: l, damping: u, type: d} = e;
        if (!n || !n.owner || !(n.owner.current instanceof HTMLElement))
            return !1;
        const {onUpdate: f, transformTemplate: p} = n.owner.getProps();
        return ZO() && i && XO.has(i) && !f && !p && !o && l !== "mirror" && u !== 0 && d !== "inertia"
    }
}
const s2 = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , i2 = t => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , o2 = {
    type: "keyframes",
    duration: .8
}
  , a2 = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , l2 = (t, {keyframes: e}) => e.length > 2 ? o2 : Ps.has(t) ? t.startsWith("scale") ? i2(e[1]) : s2 : a2;
function u2({when: t, delay: e, delayChildren: n, staggerChildren: i, staggerDirection: o, repeat: l, repeatType: u, repeatDelay: d, from: f, elapsed: p, ...m}) {
    return !!Object.keys(m).length
}
const zh = (t, e, n, i={}, o, l) => u => {
    const d = Ph(i, t) || {}
      , f = d.delay || i.delay || 0;
    let {elapsed: p=0} = i;
    p = p - Qn(f);
    let m = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: e.getVelocity(),
        ...d,
        delay: -p,
        onUpdate: w => {
            e.set(w),
            d.onUpdate && d.onUpdate(w)
        }
        ,
        onComplete: () => {
            u(),
            d.onComplete && d.onComplete()
        }
        ,
        name: t,
        motionValue: e,
        element: l ? void 0 : o
    };
    u2(d) || (m = {
        ...m,
        ...l2(t, m)
    }),
    m.duration && (m.duration = Qn(m.duration)),
    m.repeatDelay && (m.repeatDelay = Qn(m.repeatDelay)),
    m.from !== void 0 && (m.keyframes[0] = m.from);
    let y = !1;
    if ((m.type === !1 || m.duration === 0 && !m.repeatDelay) && (m.duration = 0,
    m.delay === 0 && (y = !0)),
    y && !l && e.get() !== void 0) {
        const w = hu(m.keyframes, d);
        if (w !== void 0)
            return Ue.update( () => {
                m.onUpdate(w),
                m.onComplete()
            }
            ),
            new _N([])
    }
    return !l && Vv.supports(m) ? new Vv(m) : new Bh(m)
}
;
function c2({protectedKeys: t, needsAnimating: e}, n) {
    const i = t.hasOwnProperty(n) && e[n] !== !0;
    return e[n] = !1,
    i
}
function P1(t, e, {delay: n=0, transitionOverride: i, type: o}={}) {
    var l;
    let {transition: u=t.getDefaultTransition(), transitionEnd: d, ...f} = e;
    i && (u = i);
    const p = []
      , m = o && t.animationState && t.animationState.getState()[o];
    for (const y in f) {
        const w = t.getValue(y, (l = t.latestValues[y]) !== null && l !== void 0 ? l : null)
          , C = f[y];
        if (C === void 0 || m && c2(m, y))
            continue;
        const b = {
            delay: n,
            ...Ph(u || {}, y)
        };
        let k = !1;
        if (window.MotionHandoffAnimation) {
            const P = Xx(t);
            if (P) {
                const L = window.MotionHandoffAnimation(P, y, Ue);
                L !== null && (b.startTime = L,
                k = !0)
            }
        }
        Ef(t, y),
        w.start(zh(y, w, C, t.shouldReduceMotion && Gx.has(y) ? {
            type: !1
        } : b, t, k));
        const S = w.animation;
        S && p.push(S)
    }
    return d && Promise.all(p).then( () => {
        Ue.update( () => {
            d && zN(t, d)
        }
        )
    }
    ),
    p
}
function Nf(t, e, n={}) {
    var i;
    const o = fu(t, e, n.type === "exit" ? (i = t.presenceContext) === null || i === void 0 ? void 0 : i.custom : void 0);
    let {transition: l=t.getDefaultTransition() || {}} = o || {};
    n.transitionOverride && (l = n.transitionOverride);
    const u = o ? () => Promise.all(P1(t, o, n)) : () => Promise.resolve()
      , d = t.variantChildren && t.variantChildren.size ? (p=0) => {
        const {delayChildren: m=0, staggerChildren: y, staggerDirection: w} = l;
        return d2(t, e, m + p, y, w, n)
    }
    : () => Promise.resolve()
      , {when: f} = l;
    if (f) {
        const [p,m] = f === "beforeChildren" ? [u, d] : [d, u];
        return p().then( () => m())
    } else
        return Promise.all([u(), d(n.delay)])
}
function d2(t, e, n=0, i=0, o=1, l) {
    const u = []
      , d = (t.variantChildren.size - 1) * i
      , f = o === 1 ? (p=0) => p * i : (p=0) => d - p * i;
    return Array.from(t.variantChildren).sort(f2).forEach( (p, m) => {
        p.notify("AnimationStart", e),
        u.push(Nf(p, e, {
            ...l,
            delay: n + f(m)
        }).then( () => p.notify("AnimationComplete", e)))
    }
    ),
    Promise.all(u)
}
function f2(t, e) {
    return t.sortNodePosition(e)
}
function h2(t, e, n={}) {
    t.notify("AnimationStart", e);
    let i;
    if (Array.isArray(e)) {
        const o = e.map(l => Nf(t, l, n));
        i = Promise.all(o)
    } else if (typeof e == "string")
        i = Nf(t, e, n);
    else {
        const o = typeof e == "function" ? fu(t, e, n.custom) : e;
        i = Promise.all(P1(t, o, n))
    }
    return i.then( () => {
        t.notify("AnimationComplete", e)
    }
    )
}
const p2 = mh.length;
function _1(t) {
    if (!t)
        return;
    if (!t.isControllingVariants) {
        const n = t.parent ? _1(t.parent) || {} : {};
        return t.props.initial !== void 0 && (n.initial = t.props.initial),
        n
    }
    const e = {};
    for (let n = 0; n < p2; n++) {
        const i = mh[n]
          , o = t.props[i];
        (Vo(o) || o === !1) && (e[i] = o)
    }
    return e
}
const m2 = [...ph].reverse()
  , g2 = ph.length;
function y2(t) {
    return e => Promise.all(e.map( ({animation: n, options: i}) => h2(t, n, i)))
}
function v2(t) {
    let e = y2(t)
      , n = Uv()
      , i = !0;
    const o = f => (p, m) => {
        var y;
        const w = fu(t, m, f === "exit" ? (y = t.presenceContext) === null || y === void 0 ? void 0 : y.custom : void 0);
        if (w) {
            const {transition: C, transitionEnd: b, ...k} = w;
            p = {
                ...p,
                ...k,
                ...b
            }
        }
        return p
    }
    ;
    function l(f) {
        e = f(t)
    }
    function u(f) {
        const {props: p} = t
          , m = _1(t.parent) || {}
          , y = []
          , w = new Set;
        let C = {}
          , b = 1 / 0;
        for (let S = 0; S < g2; S++) {
            const P = m2[S]
              , L = n[P]
              , j = p[P] !== void 0 ? p[P] : m[P]
              , N = Vo(j)
              , V = P === f ? L.isActive : null;
            V === !1 && (b = S);
            let $ = j === m[P] && j !== p[P] && N;
            if ($ && i && t.manuallyAnimateOnMount && ($ = !1),
            L.protectedKeys = {
                ...C
            },
            !L.isActive && V === null || !j && !L.prevProp || cu(j) || typeof j == "boolean")
                continue;
            const Y = w2(L.prevProp, j);
            let I = Y || P === f && L.isActive && !$ && N || S > b && N
              , Q = !1;
            const X = Array.isArray(j) ? j : [j];
            let xe = X.reduce(o(P), {});
            V === !1 && (xe = {});
            const {prevResolvedValues: Oe={}} = L
              , Le = {
                ...Oe,
                ...xe
            }
              , Re = fe => {
                I = !0,
                w.has(fe) && (Q = !0,
                w.delete(fe)),
                L.needsAnimating[fe] = !0;
                const K = t.getValue(fe);
                K && (K.liveStyle = !1)
            }
            ;
            for (const fe in Le) {
                const K = xe[fe]
                  , ie = Oe[fe];
                if (C.hasOwnProperty(fe))
                    continue;
                let B = !1;
                Sf(K) && Sf(ie) ? B = !Bx(K, ie) : B = K !== ie,
                B ? K != null ? Re(fe) : w.add(fe) : K !== void 0 && w.has(fe) ? Re(fe) : L.protectedKeys[fe] = !0
            }
            L.prevProp = j,
            L.prevResolvedValues = xe,
            L.isActive && (C = {
                ...C,
                ...xe
            }),
            i && t.blockInitialAnimation && (I = !1),
            I && (!($ && Y) || Q) && y.push(...X.map(fe => ({
                animation: fe,
                options: {
                    type: P
                }
            })))
        }
        if (w.size) {
            const S = {};
            w.forEach(P => {
                const L = t.getBaseTarget(P)
                  , j = t.getValue(P);
                j && (j.liveStyle = !0),
                S[P] = L ?? null
            }
            ),
            y.push({
                animation: S
            })
        }
        let k = !!y.length;
        return i && (p.initial === !1 || p.initial === p.animate) && !t.manuallyAnimateOnMount && (k = !1),
        i = !1,
        k ? e(y) : Promise.resolve()
    }
    function d(f, p) {
        var m;
        if (n[f].isActive === p)
            return Promise.resolve();
        (m = t.variantChildren) === null || m === void 0 || m.forEach(w => {
            var C;
            return (C = w.animationState) === null || C === void 0 ? void 0 : C.setActive(f, p)
        }
        ),
        n[f].isActive = p;
        const y = u(f);
        for (const w in n)
            n[w].protectedKeys = {};
        return y
    }
    return {
        animateChanges: u,
        setActive: d,
        setAnimateFunction: l,
        getState: () => n,
        reset: () => {
            n = Uv(),
            i = !0
        }
    }
}
function w2(t, e) {
    return typeof e == "string" ? e !== t : Array.isArray(e) ? !Bx(e, t) : !1
}
function ns(t=!1) {
    return {
        isActive: t,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function Uv() {
    return {
        animate: ns(!0),
        whileInView: ns(),
        whileHover: ns(),
        whileTap: ns(),
        whileDrag: ns(),
        whileFocus: ns(),
        exit: ns()
    }
}
class Ur {
    constructor(e) {
        this.isMounted = !1,
        this.node = e
    }
    update() {}
}
class x2 extends Ur {
    constructor(e) {
        super(e),
        e.animationState || (e.animationState = v2(e))
    }
    updateAnimationControlsSubscription() {
        const {animate: e} = this.node.getProps();
        cu(e) && (this.unmountControls = e.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: e} = this.node.getProps()
          , {animate: n} = this.node.prevProps || {};
        e !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var e;
        this.node.animationState.reset(),
        (e = this.unmountControls) === null || e === void 0 || e.call(this)
    }
}
let S2 = 0;
class b2 extends Ur {
    constructor() {
        super(...arguments),
        this.id = S2++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: e, onExitComplete: n} = this.node.presenceContext
          , {isPresent: i} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || e === i)
            return;
        const o = this.node.animationState.setActive("exit", !e);
        n && !e && o.then( () => n(this.id))
    }
    mount() {
        const {register: e} = this.node.presenceContext || {};
        e && (this.unmount = e(this.id))
    }
    unmount() {}
}
const C2 = {
    animation: {
        Feature: x2
    },
    exit: {
        Feature: b2
    }
};
function $o(t, e, n, i={
    passive: !0
}) {
    return t.addEventListener(e, n, i),
    () => t.removeEventListener(e, n)
}
function sa(t) {
    return {
        point: {
            x: t.pageX,
            y: t.pageY
        }
    }
}
const E2 = t => e => Ah(e) && t(e, sa(e));
function Oo(t, e, n, i) {
    return $o(t, e, E2(n), i)
}
const Bv = (t, e) => Math.abs(t - e);
function k2(t, e) {
    const n = Bv(t.x, e.x)
      , i = Bv(t.y, e.y);
    return Math.sqrt(n ** 2 + i ** 2)
}
class R1 {
    constructor(e, n, {transformPagePoint: i, contextWindow: o, dragSnapToOrigin: l=!1}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const y = Fd(this.lastMoveEventInfo, this.history)
              , w = this.startEvent !== null
              , C = k2(y.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!w && !C)
                return;
            const {point: b} = y
              , {timestamp: k} = ht;
            this.history.push({
                ...b,
                timestamp: k
            });
            const {onStart: S, onMove: P} = this.handlers;
            w || (S && S(this.lastMoveEvent, y),
            this.startEvent = this.lastMoveEvent),
            P && P(this.lastMoveEvent, y)
        }
        ,
        this.handlePointerMove = (y, w) => {
            this.lastMoveEvent = y,
            this.lastMoveEventInfo = Id(w, this.transformPagePoint),
            Ue.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (y, w) => {
            this.end();
            const {onEnd: C, onSessionEnd: b, resumeAnimation: k} = this.handlers;
            if (this.dragSnapToOrigin && k && k(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const S = Fd(y.type === "pointercancel" ? this.lastMoveEventInfo : Id(w, this.transformPagePoint), this.history);
            this.startEvent && C && C(y, S),
            b && b(y, S)
        }
        ,
        !Ah(e))
            return;
        this.dragSnapToOrigin = l,
        this.handlers = n,
        this.transformPagePoint = i,
        this.contextWindow = o || window;
        const u = sa(e)
          , d = Id(u, this.transformPagePoint)
          , {point: f} = d
          , {timestamp: p} = ht;
        this.history = [{
            ...f,
            timestamp: p
        }];
        const {onSessionStart: m} = n;
        m && m(e, Fd(d, this.history)),
        this.removeListeners = ra(Oo(this.contextWindow, "pointermove", this.handlePointerMove), Oo(this.contextWindow, "pointerup", this.handlePointerUp), Oo(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(e) {
        this.handlers = e
    }
    end() {
        this.removeListeners && this.removeListeners(),
        Dr(this.updatePoint)
    }
}
function Id(t, e) {
    return e ? {
        point: e(t.point)
    } : t
}
function zv(t, e) {
    return {
        x: t.x - e.x,
        y: t.y - e.y
    }
}
function Fd({point: t}, e) {
    return {
        point: t,
        delta: zv(t, A1(e)),
        offset: zv(t, T2(e)),
        velocity: P2(e, .1)
    }
}
function T2(t) {
    return t[0]
}
function A1(t) {
    return t[t.length - 1]
}
function P2(t, e) {
    if (t.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = t.length - 1
      , i = null;
    const o = A1(t);
    for (; n >= 0 && (i = t[n],
    !(o.timestamp - i.timestamp > Qn(e))); )
        n--;
    if (!i)
        return {
            x: 0,
            y: 0
        };
    const l = Gn(o.timestamp - i.timestamp);
    if (l === 0)
        return {
            x: 0,
            y: 0
        };
    const u = {
        x: (o.x - i.x) / l,
        y: (o.y - i.y) / l
    };
    return u.x === 1 / 0 && (u.x = 0),
    u.y === 1 / 0 && (u.y = 0),
    u
}
const N1 = 1e-4
  , _2 = 1 - N1
  , R2 = 1 + N1
  , O1 = .01
  , A2 = 0 - O1
  , N2 = 0 + O1;
function $t(t) {
    return t.max - t.min
}
function O2(t, e, n) {
    return Math.abs(t - e) <= n
}
function $v(t, e, n, i=.5) {
    t.origin = i,
    t.originPoint = He(e.min, e.max, t.origin),
    t.scale = $t(n) / $t(e),
    t.translate = He(n.min, n.max, t.origin) - t.originPoint,
    (t.scale >= _2 && t.scale <= R2 || isNaN(t.scale)) && (t.scale = 1),
    (t.translate >= A2 && t.translate <= N2 || isNaN(t.translate)) && (t.translate = 0)
}
function jo(t, e, n, i) {
    $v(t.x, e.x, n.x, i ? i.originX : void 0),
    $v(t.y, e.y, n.y, i ? i.originY : void 0)
}
function Hv(t, e, n) {
    t.min = n.min + e.min,
    t.max = t.min + $t(e)
}
function j2(t, e, n) {
    Hv(t.x, e.x, n.x),
    Hv(t.y, e.y, n.y)
}
function Wv(t, e, n) {
    t.min = e.min - n.min,
    t.max = t.min + $t(e)
}
function Lo(t, e, n) {
    Wv(t.x, e.x, n.x),
    Wv(t.y, e.y, n.y)
}
function L2(t, {min: e, max: n}, i) {
    return e !== void 0 && t < e ? t = i ? He(e, t, i.min) : Math.max(t, e) : n !== void 0 && t > n && (t = i ? He(n, t, i.max) : Math.min(t, n)),
    t
}
function qv(t, e, n) {
    return {
        min: e !== void 0 ? t.min + e : void 0,
        max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
    }
}
function M2(t, {top: e, left: n, bottom: i, right: o}) {
    return {
        x: qv(t.x, n, o),
        y: qv(t.y, e, i)
    }
}
function Kv(t, e) {
    let n = e.min - t.min
      , i = e.max - t.max;
    return e.max - e.min < t.max - t.min && ([n,i] = [i, n]),
    {
        min: n,
        max: i
    }
}
function D2(t, e) {
    return {
        x: Kv(t.x, e.x),
        y: Kv(t.y, e.y)
    }
}
function I2(t, e) {
    let n = .5;
    const i = $t(t)
      , o = $t(e);
    return o > i ? n = vi(e.min, e.max - i, t.min) : i > o && (n = vi(t.min, t.max - o, e.min)),
    Xn(0, 1, n)
}
function F2(t, e) {
    const n = {};
    return e.min !== void 0 && (n.min = e.min - t.min),
    e.max !== void 0 && (n.max = e.max - t.min),
    n
}
const Of = .35;
function V2(t=Of) {
    return t === !1 ? t = 0 : t === !0 && (t = Of),
    {
        x: Qv(t, "left", "right"),
        y: Qv(t, "top", "bottom")
    }
}
function Qv(t, e, n) {
    return {
        min: Gv(t, e),
        max: Gv(t, n)
    }
}
function Gv(t, e) {
    return typeof t == "number" ? t : t[e] || 0
}
const Yv = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , ni = () => ({
    x: Yv(),
    y: Yv()
})
  , Xv = () => ({
    min: 0,
    max: 0
})
  , Xe = () => ({
    x: Xv(),
    y: Xv()
});
function Jt(t) {
    return [t("x"), t("y")]
}
function j1({top: t, left: e, right: n, bottom: i}) {
    return {
        x: {
            min: e,
            max: n
        },
        y: {
            min: t,
            max: i
        }
    }
}
function U2({x: t, y: e}) {
    return {
        top: e.min,
        right: t.max,
        bottom: e.max,
        left: t.min
    }
}
function B2(t, e) {
    if (!e)
        return t;
    const n = e({
        x: t.left,
        y: t.top
    })
      , i = e({
        x: t.right,
        y: t.bottom
    });
    return {
        top: n.y,
        left: n.x,
        bottom: i.y,
        right: i.x
    }
}
function Vd(t) {
    return t === void 0 || t === 1
}
function jf({scale: t, scaleX: e, scaleY: n}) {
    return !Vd(t) || !Vd(e) || !Vd(n)
}
function ss(t) {
    return jf(t) || L1(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
}
function L1(t) {
    return Jv(t.x) || Jv(t.y)
}
function Jv(t) {
    return t && t !== "0%"
}
function Gl(t, e, n) {
    const i = t - n
      , o = e * i;
    return n + o
}
function Zv(t, e, n, i, o) {
    return o !== void 0 && (t = Gl(t, o, i)),
    Gl(t, n, i) + e
}
function Lf(t, e=0, n=1, i, o) {
    t.min = Zv(t.min, e, n, i, o),
    t.max = Zv(t.max, e, n, i, o)
}
function M1(t, {x: e, y: n}) {
    Lf(t.x, e.translate, e.scale, e.originPoint),
    Lf(t.y, n.translate, n.scale, n.originPoint)
}
const e0 = .999999999999
  , t0 = 1.0000000000001;
function z2(t, e, n, i=!1) {
    const o = n.length;
    if (!o)
        return;
    e.x = e.y = 1;
    let l, u;
    for (let d = 0; d < o; d++) {
        l = n[d],
        u = l.projectionDelta;
        const {visualElement: f} = l.options;
        f && f.props.style && f.props.style.display === "contents" || (i && l.options.layoutScroll && l.scroll && l !== l.root && si(t, {
            x: -l.scroll.offset.x,
            y: -l.scroll.offset.y
        }),
        u && (e.x *= u.x.scale,
        e.y *= u.y.scale,
        M1(t, u)),
        i && ss(l.latestValues) && si(t, l.latestValues))
    }
    e.x < t0 && e.x > e0 && (e.x = 1),
    e.y < t0 && e.y > e0 && (e.y = 1)
}
function ri(t, e) {
    t.min = t.min + e,
    t.max = t.max + e
}
function n0(t, e, n, i, o=.5) {
    const l = He(t.min, t.max, o);
    Lf(t, e, n, l, i)
}
function si(t, e) {
    n0(t.x, e.x, e.scaleX, e.scale, e.originX),
    n0(t.y, e.y, e.scaleY, e.scale, e.originY)
}
function D1(t, e) {
    return j1(B2(t.getBoundingClientRect(), e))
}
function $2(t, e, n) {
    const i = D1(t, n)
      , {scroll: o} = e;
    return o && (ri(i.x, o.offset.x),
    ri(i.y, o.offset.y)),
    i
}
const I1 = ({current: t}) => t ? t.ownerDocument.defaultView : null
  , H2 = new WeakMap;
class W2 {
    constructor(e) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = Xe(),
        this.visualElement = e
    }
    start(e, {snapToCursor: n=!1}={}) {
        const {presenceContext: i} = this.visualElement;
        if (i && i.isPresent === !1)
            return;
        const o = m => {
            const {dragSnapToOrigin: y} = this.getProps();
            y ? this.pauseAnimation() : this.stopAnimation(),
            n && this.snapToCursor(sa(m).point)
        }
          , l = (m, y) => {
            const {drag: w, dragPropagation: C, onDragStart: b} = this.getProps();
            if (w && !C && (this.openDragLock && this.openDragLock(),
            this.openDragLock = IN(w),
            !this.openDragLock))
                return;
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            Jt(S => {
                let P = this.getAxisMotionValue(S).get() || 0;
                if (_n.test(P)) {
                    const {projection: L} = this.visualElement;
                    if (L && L.layout) {
                        const j = L.layout.layoutBox[S];
                        j && (P = $t(j) * (parseFloat(P) / 100))
                    }
                }
                this.originPoint[S] = P
            }
            ),
            b && Ue.postRender( () => b(m, y)),
            Ef(this.visualElement, "transform");
            const {animationState: k} = this.visualElement;
            k && k.setActive("whileDrag", !0)
        }
          , u = (m, y) => {
            const {dragPropagation: w, dragDirectionLock: C, onDirectionLock: b, onDrag: k} = this.getProps();
            if (!w && !this.openDragLock)
                return;
            const {offset: S} = y;
            if (C && this.currentDirection === null) {
                this.currentDirection = q2(S),
                this.currentDirection !== null && b && b(this.currentDirection);
                return
            }
            this.updateAxis("x", y.point, S),
            this.updateAxis("y", y.point, S),
            this.visualElement.render(),
            k && k(m, y)
        }
          , d = (m, y) => this.stop(m, y)
          , f = () => Jt(m => {
            var y;
            return this.getAnimationState(m) === "paused" && ((y = this.getAxisMotionValue(m).animation) === null || y === void 0 ? void 0 : y.play())
        }
        )
          , {dragSnapToOrigin: p} = this.getProps();
        this.panSession = new R1(e,{
            onSessionStart: o,
            onStart: l,
            onMove: u,
            onSessionEnd: d,
            resumeAnimation: f
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: p,
            contextWindow: I1(this.visualElement)
        })
    }
    stop(e, n) {
        const i = this.isDragging;
        if (this.cancel(),
        !i)
            return;
        const {velocity: o} = n;
        this.startAnimation(o);
        const {onDragEnd: l} = this.getProps();
        l && Ue.postRender( () => l(e, n))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: e, animationState: n} = this.visualElement;
        e && (e.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: i} = this.getProps();
        !i && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        n && n.setActive("whileDrag", !1)
    }
    updateAxis(e, n, i) {
        const {drag: o} = this.getProps();
        if (!i || !El(e, o, this.currentDirection))
            return;
        const l = this.getAxisMotionValue(e);
        let u = this.originPoint[e] + i[e];
        this.constraints && this.constraints[e] && (u = L2(u, this.constraints[e], this.elastic[e])),
        l.set(u)
    }
    resolveConstraints() {
        var e;
        const {dragConstraints: n, dragElastic: i} = this.getProps()
          , o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (e = this.visualElement.projection) === null || e === void 0 ? void 0 : e.layout
          , l = this.constraints;
        n && ei(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && o ? this.constraints = M2(o.layoutBox, n) : this.constraints = !1,
        this.elastic = V2(i),
        l !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && Jt(u => {
            this.constraints !== !1 && this.getAxisMotionValue(u) && (this.constraints[u] = F2(o.layoutBox[u], this.constraints[u]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: e, onMeasureDragConstraints: n} = this.getProps();
        if (!e || !ei(e))
            return !1;
        const i = e.current
          , {projection: o} = this.visualElement;
        if (!o || !o.layout)
            return !1;
        const l = $2(i, o.root, this.visualElement.getTransformPagePoint());
        let u = D2(o.layout.layoutBox, l);
        if (n) {
            const d = n(U2(u));
            this.hasMutatedConstraints = !!d,
            d && (u = j1(d))
        }
        return u
    }
    startAnimation(e) {
        const {drag: n, dragMomentum: i, dragElastic: o, dragTransition: l, dragSnapToOrigin: u, onDragTransitionEnd: d} = this.getProps()
          , f = this.constraints || {}
          , p = Jt(m => {
            if (!El(m, n, this.currentDirection))
                return;
            let y = f && f[m] || {};
            u && (y = {
                min: 0,
                max: 0
            });
            const w = o ? 200 : 1e6
              , C = o ? 40 : 1e7
              , b = {
                type: "inertia",
                velocity: i ? e[m] : 0,
                bounceStiffness: w,
                bounceDamping: C,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...l,
                ...y
            };
            return this.startAxisValueAnimation(m, b)
        }
        );
        return Promise.all(p).then(d)
    }
    startAxisValueAnimation(e, n) {
        const i = this.getAxisMotionValue(e);
        return Ef(this.visualElement, e),
        i.start(zh(e, i, 0, n, this.visualElement, !1))
    }
    stopAnimation() {
        Jt(e => this.getAxisMotionValue(e).stop())
    }
    pauseAnimation() {
        Jt(e => {
            var n;
            return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.pause()
        }
        )
    }
    getAnimationState(e) {
        var n;
        return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.state
    }
    getAxisMotionValue(e) {
        const n = `_drag${e.toUpperCase()}`
          , i = this.visualElement.getProps()
          , o = i[n];
        return o || this.visualElement.getValue(e, (i.initial ? i.initial[e] : void 0) || 0)
    }
    snapToCursor(e) {
        Jt(n => {
            const {drag: i} = this.getProps();
            if (!El(n, i, this.currentDirection))
                return;
            const {projection: o} = this.visualElement
              , l = this.getAxisMotionValue(n);
            if (o && o.layout) {
                const {min: u, max: d} = o.layout.layoutBox[n];
                l.set(e[n] - He(u, d, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: e, dragConstraints: n} = this.getProps()
          , {projection: i} = this.visualElement;
        if (!ei(n) || !i || !this.constraints)
            return;
        this.stopAnimation();
        const o = {
            x: 0,
            y: 0
        };
        Jt(u => {
            const d = this.getAxisMotionValue(u);
            if (d && this.constraints !== !1) {
                const f = d.get();
                o[u] = I2({
                    min: f,
                    max: f
                }, this.constraints[u])
            }
        }
        );
        const {transformTemplate: l} = this.visualElement.getProps();
        this.visualElement.current.style.transform = l ? l({}, "") : "none",
        i.root && i.root.updateScroll(),
        i.updateLayout(),
        this.resolveConstraints(),
        Jt(u => {
            if (!El(u, e, null))
                return;
            const d = this.getAxisMotionValue(u)
              , {min: f, max: p} = this.constraints[u];
            d.set(He(f, p, o[u]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        H2.set(this.visualElement, this);
        const e = this.visualElement.current
          , n = Oo(e, "pointerdown", f => {
            const {drag: p, dragListener: m=!0} = this.getProps();
            p && m && this.start(f)
        }
        )
          , i = () => {
            const {dragConstraints: f} = this.getProps();
            ei(f) && f.current && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: o} = this.visualElement
          , l = o.addEventListener("measure", i);
        o && !o.layout && (o.root && o.root.updateScroll(),
        o.updateLayout()),
        Ue.read(i);
        const u = $o(window, "resize", () => this.scalePositionWithinConstraints())
          , d = o.addEventListener("didUpdate", ( ({delta: f, hasLayoutChanged: p}) => {
            this.isDragging && p && (Jt(m => {
                const y = this.getAxisMotionValue(m);
                y && (this.originPoint[m] += f[m].translate,
                y.set(y.get() + f[m].translate))
            }
            ),
            this.visualElement.render())
        }
        ));
        return () => {
            u(),
            n(),
            l(),
            d && d()
        }
    }
    getProps() {
        const e = this.visualElement.getProps()
          , {drag: n=!1, dragDirectionLock: i=!1, dragPropagation: o=!1, dragConstraints: l=!1, dragElastic: u=Of, dragMomentum: d=!0} = e;
        return {
            ...e,
            drag: n,
            dragDirectionLock: i,
            dragPropagation: o,
            dragConstraints: l,
            dragElastic: u,
            dragMomentum: d
        }
    }
}
function El(t, e, n) {
    return (e === !0 || e === t) && (n === null || n === t)
}
function q2(t, e=10) {
    let n = null;
    return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"),
    n
}
class K2 extends Ur {
    constructor(e) {
        super(e),
        this.removeGroupControls = Bt,
        this.removeListeners = Bt,
        this.controls = new W2(e)
    }
    mount() {
        const {dragControls: e} = this.node.getProps();
        e && (this.removeGroupControls = e.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || Bt
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const r0 = t => (e, n) => {
    t && Ue.postRender( () => t(e, n))
}
;
class Q2 extends Ur {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = Bt
    }
    onPointerDown(e) {
        this.session = new R1(e,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: I1(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: e, onPanStart: n, onPan: i, onPanEnd: o} = this.node.getProps();
        return {
            onSessionStart: r0(e),
            onStart: r0(n),
            onMove: i,
            onEnd: (l, u) => {
                delete this.session,
                o && Ue.postRender( () => o(l, u))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Oo(this.node.current, "pointerdown", e => this.onPointerDown(e))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
const Il = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function s0(t, e) {
    return e.max === e.min ? 0 : t / (e.max - e.min) * 100
}
const So = {
    correct: (t, e) => {
        if (!e.target)
            return t;
        if (typeof t == "string")
            if (de.test(t))
                t = parseFloat(t);
            else
                return t;
        const n = s0(t, e.target.x)
          , i = s0(t, e.target.y);
        return `${n}% ${i}%`
    }
}
  , G2 = {
    correct: (t, {treeScale: e, projectionDelta: n}) => {
        const i = t
          , o = Ir.parse(t);
        if (o.length > 5)
            return i;
        const l = Ir.createTransformer(t)
          , u = typeof o[0] != "number" ? 1 : 0
          , d = n.x.scale * e.x
          , f = n.y.scale * e.y;
        o[0 + u] /= d,
        o[1 + u] /= f;
        const p = He(d, f, .5);
        return typeof o[2 + u] == "number" && (o[2 + u] /= p),
        typeof o[3 + u] == "number" && (o[3 + u] /= p),
        l(o)
    }
};
class Y2 extends E.Component {
    componentDidMount() {
        const {visualElement: e, layoutGroup: n, switchLayoutGroup: i, layoutId: o} = this.props
          , {projection: l} = e;
        gN(X2),
        l && (n.group && n.group.add(l),
        i && i.register && o && i.register(l),
        l.root.didUpdate(),
        l.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        l.setOptions({
            ...l.options,
            onExitComplete: () => this.safeToRemove()
        })),
        Il.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(e) {
        const {layoutDependency: n, visualElement: i, drag: o, isPresent: l} = this.props
          , u = i.projection;
        return u && (u.isPresent = l,
        o || e.layoutDependency !== n || n === void 0 ? u.willUpdate() : this.safeToRemove(),
        e.isPresent !== l && (l ? u.promote() : u.relegate() || Ue.postRender( () => {
            const d = u.getStack();
            (!d || !d.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: e} = this.props.visualElement;
        e && (e.root.didUpdate(),
        yh.postRender( () => {
            !e.currentAnimation && e.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: e, layoutGroup: n, switchLayoutGroup: i} = this.props
          , {projection: o} = e;
        o && (o.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(o),
        i && i.deregister && i.deregister(o))
    }
    safeToRemove() {
        const {safeToRemove: e} = this.props;
        e && e()
    }
    render() {
        return null
    }
}
function F1(t) {
    const [e,n] = xx()
      , i = E.useContext(uh);
    return x.jsx(Y2, {
        ...t,
        layoutGroup: i,
        switchLayoutGroup: E.useContext(_x),
        isPresent: e,
        safeToRemove: n
    })
}
const X2 = {
    borderRadius: {
        ...So,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: So,
    borderTopRightRadius: So,
    borderBottomLeftRadius: So,
    borderBottomRightRadius: So,
    boxShadow: G2
};
function J2(t, e, n) {
    const i = Ct(t) ? t : Bo(t);
    return i.start(zh("", i, e, n)),
    i.animation
}
function Z2(t) {
    return t instanceof SVGElement && t.tagName !== "svg"
}
const ej = (t, e) => t.depth - e.depth;
class tj {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(e) {
        Nh(this.children, e),
        this.isDirty = !0
    }
    remove(e) {
        Oh(this.children, e),
        this.isDirty = !0
    }
    forEach(e) {
        this.isDirty && this.children.sort(ej),
        this.isDirty = !1,
        this.children.forEach(e)
    }
}
function nj(t, e) {
    const n = Rn.now()
      , i = ({timestamp: o}) => {
        const l = o - n;
        l >= e && (Dr(i),
        t(l - e))
    }
    ;
    return Ue.read(i, !0),
    () => Dr(i)
}
const V1 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , rj = V1.length
  , i0 = t => typeof t == "string" ? parseFloat(t) : t
  , o0 = t => typeof t == "number" || de.test(t);
function sj(t, e, n, i, o, l) {
    o ? (t.opacity = He(0, n.opacity !== void 0 ? n.opacity : 1, ij(i)),
    t.opacityExit = He(e.opacity !== void 0 ? e.opacity : 1, 0, oj(i))) : l && (t.opacity = He(e.opacity !== void 0 ? e.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, i));
    for (let u = 0; u < rj; u++) {
        const d = `border${V1[u]}Radius`;
        let f = a0(e, d)
          , p = a0(n, d);
        if (f === void 0 && p === void 0)
            continue;
        f || (f = 0),
        p || (p = 0),
        f === 0 || p === 0 || o0(f) === o0(p) ? (t[d] = Math.max(He(i0(f), i0(p), i), 0),
        (_n.test(p) || _n.test(f)) && (t[d] += "%")) : t[d] = p
    }
    (e.rotate || n.rotate) && (t.rotate = He(e.rotate || 0, n.rotate || 0, i))
}
function a0(t, e) {
    return t[e] !== void 0 ? t[e] : t.borderRadius
}
const ij = U1(0, .5, s1)
  , oj = U1(.5, .95, Bt);
function U1(t, e, n) {
    return i => i < t ? 0 : i > e ? 1 : n(vi(t, e, i))
}
function l0(t, e) {
    t.min = e.min,
    t.max = e.max
}
function Xt(t, e) {
    l0(t.x, e.x),
    l0(t.y, e.y)
}
function u0(t, e) {
    t.translate = e.translate,
    t.scale = e.scale,
    t.originPoint = e.originPoint,
    t.origin = e.origin
}
function c0(t, e, n, i, o) {
    return t -= e,
    t = Gl(t, 1 / n, i),
    o !== void 0 && (t = Gl(t, 1 / o, i)),
    t
}
function aj(t, e=0, n=1, i=.5, o, l=t, u=t) {
    if (_n.test(e) && (e = parseFloat(e),
    e = He(u.min, u.max, e / 100) - u.min),
    typeof e != "number")
        return;
    let d = He(l.min, l.max, i);
    t === l && (d -= e),
    t.min = c0(t.min, e, n, d, o),
    t.max = c0(t.max, e, n, d, o)
}
function d0(t, e, [n,i,o], l, u) {
    aj(t, e[n], e[i], e[o], e.scale, l, u)
}
const lj = ["x", "scaleX", "originX"]
  , uj = ["y", "scaleY", "originY"];
function f0(t, e, n, i) {
    d0(t.x, e, lj, n ? n.x : void 0, i ? i.x : void 0),
    d0(t.y, e, uj, n ? n.y : void 0, i ? i.y : void 0)
}
function h0(t) {
    return t.translate === 0 && t.scale === 1
}
function B1(t) {
    return h0(t.x) && h0(t.y)
}
function p0(t, e) {
    return t.min === e.min && t.max === e.max
}
function cj(t, e) {
    return p0(t.x, e.x) && p0(t.y, e.y)
}
function m0(t, e) {
    return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
}
function z1(t, e) {
    return m0(t.x, e.x) && m0(t.y, e.y)
}
function g0(t) {
    return $t(t.x) / $t(t.y)
}
function y0(t, e) {
    return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
}
class dj {
    constructor() {
        this.members = []
    }
    add(e) {
        Nh(this.members, e),
        e.scheduleRender()
    }
    remove(e) {
        if (Oh(this.members, e),
        e === this.prevLead && (this.prevLead = void 0),
        e === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(e) {
        const n = this.members.findIndex(o => e === o);
        if (n === 0)
            return !1;
        let i;
        for (let o = n; o >= 0; o--) {
            const l = this.members[o];
            if (l.isPresent !== !1) {
                i = l;
                break
            }
        }
        return i ? (this.promote(i),
        !0) : !1
    }
    promote(e, n) {
        const i = this.lead;
        if (e !== i && (this.prevLead = i,
        this.lead = e,
        e.show(),
        i)) {
            i.instance && i.scheduleRender(),
            e.scheduleRender(),
            e.resumeFrom = i,
            n && (e.resumeFrom.preserveOpacity = !0),
            i.snapshot && (e.snapshot = i.snapshot,
            e.snapshot.latestValues = i.animationValues || i.latestValues),
            e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            const {crossfade: o} = e.options;
            o === !1 && i.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(e => {
            const {options: n, resumingFrom: i} = e;
            n.onExitComplete && n.onExitComplete(),
            i && i.options.onExitComplete && i.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(e => {
            e.instance && e.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function fj(t, e, n) {
    let i = "";
    const o = t.x.translate / e.x
      , l = t.y.translate / e.y
      , u = (n == null ? void 0 : n.z) || 0;
    if ((o || l || u) && (i = `translate3d(${o}px, ${l}px, ${u}px) `),
    (e.x !== 1 || e.y !== 1) && (i += `scale(${1 / e.x}, ${1 / e.y}) `),
    n) {
        const {transformPerspective: p, rotate: m, rotateX: y, rotateY: w, skewX: C, skewY: b} = n;
        p && (i = `perspective(${p}px) ${i}`),
        m && (i += `rotate(${m}deg) `),
        y && (i += `rotateX(${y}deg) `),
        w && (i += `rotateY(${w}deg) `),
        C && (i += `skewX(${C}deg) `),
        b && (i += `skewY(${b}deg) `)
    }
    const d = t.x.scale * e.x
      , f = t.y.scale * e.y;
    return (d !== 1 || f !== 1) && (i += `scale(${d}, ${f})`),
    i || "none"
}
const is = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
}
  , _o = typeof window < "u" && window.MotionDebug !== void 0
  , Ud = ["", "X", "Y", "Z"]
  , hj = {
    visibility: "hidden"
}
  , v0 = 1e3;
let pj = 0;
function Bd(t, e, n, i) {
    const {latestValues: o} = e;
    o[t] && (n[t] = o[t],
    e.setStaticValue(t, 0),
    i && (i[t] = 0))
}
function $1(t) {
    if (t.hasCheckedOptimisedAppear = !0,
    t.root === t)
        return;
    const {visualElement: e} = t.options;
    if (!e)
        return;
    const n = Xx(e);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {layout: o, layoutId: l} = t.options;
        window.MotionCancelOptimisedAnimation(n, "transform", Ue, !(o || l))
    }
    const {parent: i} = t;
    i && !i.hasCheckedOptimisedAppear && $1(i)
}
function H1({attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: i, resetTransform: o}) {
    return class {
        constructor(u={}, d=e == null ? void 0 : e()) {
            this.id = pj++,
            this.animationId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                _o && (is.totalNodes = is.resolvedTargetDeltas = is.recalculatedProjection = 0),
                this.nodes.forEach(yj),
                this.nodes.forEach(bj),
                this.nodes.forEach(Cj),
                this.nodes.forEach(vj),
                _o && window.MotionDebug.record(is)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = u,
            this.root = d ? d.root || d : this,
            this.path = d ? [...d.path, d] : [],
            this.parent = d,
            this.depth = d ? d.depth + 1 : 0;
            for (let f = 0; f < this.path.length; f++)
                this.path[f].shouldResetTransform = !0;
            this.root === this && (this.nodes = new tj)
        }
        addEventListener(u, d) {
            return this.eventHandlers.has(u) || this.eventHandlers.set(u, new jh),
            this.eventHandlers.get(u).add(d)
        }
        notifyListeners(u, ...d) {
            const f = this.eventHandlers.get(u);
            f && f.notify(...d)
        }
        hasListeners(u) {
            return this.eventHandlers.has(u)
        }
        mount(u, d=this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            this.isSVG = Z2(u),
            this.instance = u;
            const {layoutId: f, layout: p, visualElement: m} = this.options;
            if (m && !m.current && m.mount(u),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            d && (p || f) && (this.isLayoutDirty = !0),
            t) {
                let y;
                const w = () => this.root.updateBlockedByResize = !1;
                t(u, () => {
                    this.root.updateBlockedByResize = !0,
                    y && y(),
                    y = nj(w, 250),
                    Il.hasAnimatedSinceResize && (Il.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(x0))
                }
                )
            }
            f && this.root.registerSharedNode(f, this),
            this.options.animate !== !1 && m && (f || p) && this.addEventListener("didUpdate", ({delta: y, hasLayoutChanged: w, hasRelativeTargetChanged: C, layout: b}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const k = this.options.transition || m.getDefaultTransition() || _j
                  , {onLayoutAnimationStart: S, onLayoutAnimationComplete: P} = m.getProps()
                  , L = !this.targetLayout || !z1(this.targetLayout, b) || C
                  , j = !w && C;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || j || w && (L || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0),
                    this.setAnimationOrigin(y, j);
                    const N = {
                        ...Ph(k, "layout"),
                        onPlay: S,
                        onComplete: P
                    };
                    (m.shouldReduceMotion || this.options.layoutRoot) && (N.delay = 0,
                    N.type = !1),
                    this.startAnimation(N)
                } else
                    w || x0(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = b
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const u = this.getStack();
            u && u.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            Dr(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(Ej),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: u} = this.options;
            return u && u.getProps().transformTemplate
        }
        willUpdate(u=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && $1(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let m = 0; m < this.path.length; m++) {
                const y = this.path[m];
                y.shouldResetTransform = !0,
                y.updateScroll("snapshot"),
                y.options.layoutRoot && y.willUpdate(!1)
            }
            const {layoutId: d, layout: f} = this.options;
            if (d === void 0 && !f)
                return;
            const p = this.getTransformTemplate();
            this.prevTransformTemplateValue = p ? p(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            u && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(w0);
                return
            }
            this.isUpdating || this.nodes.forEach(xj),
            this.isUpdating = !1,
            this.nodes.forEach(Sj),
            this.nodes.forEach(mj),
            this.nodes.forEach(gj),
            this.clearAllSnapshots();
            const d = Rn.now();
            ht.delta = Xn(0, 1e3 / 60, d - ht.timestamp),
            ht.timestamp = d,
            ht.isProcessing = !0,
            Nd.update.process(ht),
            Nd.preRender.process(ht),
            Nd.render.process(ht),
            ht.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            yh.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(wj),
            this.sharedNodes.forEach(kj)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            Ue.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            Ue.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let f = 0; f < this.path.length; f++)
                    this.path[f].updateScroll();
            const u = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = Xe(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: d} = this.options;
            d && d.notify("LayoutMeasure", this.layout.layoutBox, u ? u.layoutBox : void 0)
        }
        updateScroll(u="measure") {
            let d = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === u && (d = !1),
            d) {
                const f = i(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: u,
                    isRoot: f,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : f
                }
            }
        }
        resetTransform() {
            if (!o)
                return;
            const u = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , d = this.projectionDelta && !B1(this.projectionDelta)
              , f = this.getTransformTemplate()
              , p = f ? f(this.latestValues, "") : void 0
              , m = p !== this.prevTransformTemplateValue;
            u && (d || ss(this.latestValues) || m) && (o(this.instance, p),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(u=!0) {
            const d = this.measurePageBox();
            let f = this.removeElementScroll(d);
            return u && (f = this.removeTransform(f)),
            Rj(f),
            {
                animationId: this.root.animationId,
                measuredBox: d,
                layoutBox: f,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var u;
            const {visualElement: d} = this.options;
            if (!d)
                return Xe();
            const f = d.measureViewportBox();
            if (!(((u = this.scroll) === null || u === void 0 ? void 0 : u.wasRoot) || this.path.some(Aj))) {
                const {scroll: m} = this.root;
                m && (ri(f.x, m.offset.x),
                ri(f.y, m.offset.y))
            }
            return f
        }
        removeElementScroll(u) {
            var d;
            const f = Xe();
            if (Xt(f, u),
            !((d = this.scroll) === null || d === void 0) && d.wasRoot)
                return f;
            for (let p = 0; p < this.path.length; p++) {
                const m = this.path[p]
                  , {scroll: y, options: w} = m;
                m !== this.root && y && w.layoutScroll && (y.wasRoot && Xt(f, u),
                ri(f.x, y.offset.x),
                ri(f.y, y.offset.y))
            }
            return f
        }
        applyTransform(u, d=!1) {
            const f = Xe();
            Xt(f, u);
            for (let p = 0; p < this.path.length; p++) {
                const m = this.path[p];
                !d && m.options.layoutScroll && m.scroll && m !== m.root && si(f, {
                    x: -m.scroll.offset.x,
                    y: -m.scroll.offset.y
                }),
                ss(m.latestValues) && si(f, m.latestValues)
            }
            return ss(this.latestValues) && si(f, this.latestValues),
            f
        }
        removeTransform(u) {
            const d = Xe();
            Xt(d, u);
            for (let f = 0; f < this.path.length; f++) {
                const p = this.path[f];
                if (!p.instance || !ss(p.latestValues))
                    continue;
                jf(p.latestValues) && p.updateSnapshot();
                const m = Xe()
                  , y = p.measurePageBox();
                Xt(m, y),
                f0(d, p.latestValues, p.snapshot ? p.snapshot.layoutBox : void 0, m)
            }
            return ss(this.latestValues) && f0(d, this.latestValues),
            d
        }
        setTargetDelta(u) {
            this.targetDelta = u,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(u) {
            this.options = {
                ...this.options,
                ...u,
                crossfade: u.crossfade !== void 0 ? u.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ht.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(u=!1) {
            var d;
            const f = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = f.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = f.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = f.isSharedProjectionDirty);
            const p = !!this.resumingFrom || this !== f;
            if (!(u || p && this.isSharedProjectionDirty || this.isProjectionDirty || !((d = this.parent) === null || d === void 0) && d.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: y, layoutId: w} = this.options;
            if (!(!this.layout || !(y || w))) {
                if (this.resolvedRelativeTargetAt = ht.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const C = this.getClosestProjectingParent();
                    C && C.layout && this.animationProgress !== 1 ? (this.relativeParent = C,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = Xe(),
                    this.relativeTargetOrigin = Xe(),
                    Lo(this.relativeTargetOrigin, this.layout.layoutBox, C.layout.layoutBox),
                    Xt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = Xe(),
                    this.targetWithTransforms = Xe()),
                    this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                    j2(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Xt(this.target, this.layout.layoutBox),
                    M1(this.target, this.targetDelta)) : Xt(this.target, this.layout.layoutBox),
                    this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const C = this.getClosestProjectingParent();
                        C && !!C.resumingFrom == !!this.resumingFrom && !C.options.layoutScroll && C.target && this.animationProgress !== 1 ? (this.relativeParent = C,
                        this.forceRelativeParentToResolveTarget(),
                        this.relativeTarget = Xe(),
                        this.relativeTargetOrigin = Xe(),
                        Lo(this.relativeTargetOrigin, this.target, C.target),
                        Xt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    _o && is.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || jf(this.parent.latestValues) || L1(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var u;
            const d = this.getLead()
              , f = !!this.resumingFrom || this !== d;
            let p = !0;
            if ((this.isProjectionDirty || !((u = this.parent) === null || u === void 0) && u.isProjectionDirty) && (p = !1),
            f && (this.isSharedProjectionDirty || this.isTransformDirty) && (p = !1),
            this.resolvedRelativeTargetAt === ht.timestamp && (p = !1),
            p)
                return;
            const {layout: m, layoutId: y} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(m || y))
                return;
            Xt(this.layoutCorrected, this.layout.layoutBox);
            const w = this.treeScale.x
              , C = this.treeScale.y;
            z2(this.layoutCorrected, this.treeScale, this.path, f),
            d.layout && !d.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (d.target = d.layout.layoutBox,
            d.targetWithTransforms = Xe());
            const {target: b} = d;
            if (!b) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (u0(this.prevProjectionDelta.x, this.projectionDelta.x),
            u0(this.prevProjectionDelta.y, this.projectionDelta.y)),
            jo(this.projectionDelta, this.layoutCorrected, b, this.latestValues),
            (this.treeScale.x !== w || this.treeScale.y !== C || !y0(this.projectionDelta.x, this.prevProjectionDelta.x) || !y0(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", b)),
            _o && is.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(u=!0) {
            var d;
            if ((d = this.options.visualElement) === null || d === void 0 || d.scheduleRender(),
            u) {
                const f = this.getStack();
                f && f.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = ni(),
            this.projectionDelta = ni(),
            this.projectionDeltaWithTransform = ni()
        }
        setAnimationOrigin(u, d=!1) {
            const f = this.snapshot
              , p = f ? f.latestValues : {}
              , m = {
                ...this.latestValues
            }
              , y = ni();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !d;
            const w = Xe()
              , C = f ? f.source : void 0
              , b = this.layout ? this.layout.source : void 0
              , k = C !== b
              , S = this.getStack()
              , P = !S || S.members.length <= 1
              , L = !!(k && !P && this.options.crossfade === !0 && !this.path.some(Pj));
            this.animationProgress = 0;
            let j;
            this.mixTargetDelta = N => {
                const V = N / 1e3;
                S0(y.x, u.x, V),
                S0(y.y, u.y, V),
                this.setTargetDelta(y),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Lo(w, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                Tj(this.relativeTarget, this.relativeTargetOrigin, w, V),
                j && cj(this.relativeTarget, j) && (this.isProjectionDirty = !1),
                j || (j = Xe()),
                Xt(j, this.relativeTarget)),
                k && (this.animationValues = m,
                sj(m, p, this.latestValues, V, L, P)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = V
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(u) {
            this.notifyListeners("animationStart"),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation && (Dr(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = Ue.update( () => {
                Il.hasAnimatedSinceResize = !0,
                this.currentAnimation = J2(0, v0, {
                    ...u,
                    onUpdate: d => {
                        this.mixTargetDelta(d),
                        u.onUpdate && u.onUpdate(d)
                    }
                    ,
                    onComplete: () => {
                        u.onComplete && u.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const u = this.getStack();
            u && u.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(v0),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const u = this.getLead();
            let {targetWithTransforms: d, target: f, layout: p, latestValues: m} = u;
            if (!(!d || !f || !p)) {
                if (this !== u && this.layout && p && W1(this.options.animationType, this.layout.layoutBox, p.layoutBox)) {
                    f = this.target || Xe();
                    const y = $t(this.layout.layoutBox.x);
                    f.x.min = u.target.x.min,
                    f.x.max = f.x.min + y;
                    const w = $t(this.layout.layoutBox.y);
                    f.y.min = u.target.y.min,
                    f.y.max = f.y.min + w
                }
                Xt(d, f),
                si(d, m),
                jo(this.projectionDeltaWithTransform, this.layoutCorrected, d, m)
            }
        }
        registerSharedNode(u, d) {
            this.sharedNodes.has(u) || this.sharedNodes.set(u, new dj),
            this.sharedNodes.get(u).add(d);
            const p = d.options.initialPromotionConfig;
            d.promote({
                transition: p ? p.transition : void 0,
                preserveFollowOpacity: p && p.shouldPreserveFollowOpacity ? p.shouldPreserveFollowOpacity(d) : void 0
            })
        }
        isLead() {
            const u = this.getStack();
            return u ? u.lead === this : !0
        }
        getLead() {
            var u;
            const {layoutId: d} = this.options;
            return d ? ((u = this.getStack()) === null || u === void 0 ? void 0 : u.lead) || this : this
        }
        getPrevLead() {
            var u;
            const {layoutId: d} = this.options;
            return d ? (u = this.getStack()) === null || u === void 0 ? void 0 : u.prevLead : void 0
        }
        getStack() {
            const {layoutId: u} = this.options;
            if (u)
                return this.root.sharedNodes.get(u)
        }
        promote({needsReset: u, transition: d, preserveFollowOpacity: f}={}) {
            const p = this.getStack();
            p && p.promote(this, f),
            u && (this.projectionDelta = void 0,
            this.needsReset = !0),
            d && this.setOptions({
                transition: d
            })
        }
        relegate() {
            const u = this.getStack();
            return u ? u.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: u} = this.options;
            if (!u)
                return;
            let d = !1;
            const {latestValues: f} = u;
            if ((f.z || f.rotate || f.rotateX || f.rotateY || f.rotateZ || f.skewX || f.skewY) && (d = !0),
            !d)
                return;
            const p = {};
            f.z && Bd("z", u, p, this.animationValues);
            for (let m = 0; m < Ud.length; m++)
                Bd(`rotate${Ud[m]}`, u, p, this.animationValues),
                Bd(`skew${Ud[m]}`, u, p, this.animationValues);
            u.render();
            for (const m in p)
                u.setStaticValue(m, p[m]),
                this.animationValues && (this.animationValues[m] = p[m]);
            u.scheduleRender()
        }
        getProjectionStyles(u) {
            var d, f;
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return hj;
            const p = {
                visibility: ""
            }
              , m = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                p.opacity = "",
                p.pointerEvents = Ml(u == null ? void 0 : u.pointerEvents) || "",
                p.transform = m ? m(this.latestValues, "") : "none",
                p;
            const y = this.getLead();
            if (!this.projectionDelta || !this.layout || !y.target) {
                const k = {};
                return this.options.layoutId && (k.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                k.pointerEvents = Ml(u == null ? void 0 : u.pointerEvents) || ""),
                this.hasProjected && !ss(this.latestValues) && (k.transform = m ? m({}, "") : "none",
                this.hasProjected = !1),
                k
            }
            const w = y.animationValues || y.latestValues;
            this.applyTransformsToTarget(),
            p.transform = fj(this.projectionDeltaWithTransform, this.treeScale, w),
            m && (p.transform = m(w, p.transform));
            const {x: C, y: b} = this.projectionDelta;
            p.transformOrigin = `${C.origin * 100}% ${b.origin * 100}% 0`,
            y.animationValues ? p.opacity = y === this ? (f = (d = w.opacity) !== null && d !== void 0 ? d : this.latestValues.opacity) !== null && f !== void 0 ? f : 1 : this.preserveOpacity ? this.latestValues.opacity : w.opacityExit : p.opacity = y === this ? w.opacity !== void 0 ? w.opacity : "" : w.opacityExit !== void 0 ? w.opacityExit : 0;
            for (const k in Hl) {
                if (w[k] === void 0)
                    continue;
                const {correct: S, applyTo: P} = Hl[k]
                  , L = p.transform === "none" ? w[k] : S(w[k], y);
                if (P) {
                    const j = P.length;
                    for (let N = 0; N < j; N++)
                        p[P[N]] = L
                } else
                    p[k] = L
            }
            return this.options.layoutId && (p.pointerEvents = y === this ? Ml(u == null ? void 0 : u.pointerEvents) || "" : "none"),
            p
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(u => {
                var d;
                return (d = u.currentAnimation) === null || d === void 0 ? void 0 : d.stop()
            }
            ),
            this.root.nodes.forEach(w0),
            this.root.sharedNodes.clear()
        }
    }
}
function mj(t) {
    t.updateLayout()
}
function gj(t) {
    var e;
    const n = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot;
    if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
        const {layoutBox: i, measuredBox: o} = t.layout
          , {animationType: l} = t.options
          , u = n.source !== t.layout.source;
        l === "size" ? Jt(y => {
            const w = u ? n.measuredBox[y] : n.layoutBox[y]
              , C = $t(w);
            w.min = i[y].min,
            w.max = w.min + C
        }
        ) : W1(l, n.layoutBox, i) && Jt(y => {
            const w = u ? n.measuredBox[y] : n.layoutBox[y]
              , C = $t(i[y]);
            w.max = w.min + C,
            t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0,
            t.relativeTarget[y].max = t.relativeTarget[y].min + C)
        }
        );
        const d = ni();
        jo(d, i, n.layoutBox);
        const f = ni();
        u ? jo(f, t.applyTransform(o, !0), n.measuredBox) : jo(f, i, n.layoutBox);
        const p = !B1(d);
        let m = !1;
        if (!t.resumeFrom) {
            const y = t.getClosestProjectingParent();
            if (y && !y.resumeFrom) {
                const {snapshot: w, layout: C} = y;
                if (w && C) {
                    const b = Xe();
                    Lo(b, n.layoutBox, w.layoutBox);
                    const k = Xe();
                    Lo(k, i, C.layoutBox),
                    z1(b, k) || (m = !0),
                    y.options.layoutRoot && (t.relativeTarget = k,
                    t.relativeTargetOrigin = b,
                    t.relativeParent = y)
                }
            }
        }
        t.notifyListeners("didUpdate", {
            layout: i,
            snapshot: n,
            delta: f,
            layoutDelta: d,
            hasLayoutChanged: p,
            hasRelativeTargetChanged: m
        })
    } else if (t.isLead()) {
        const {onExitComplete: i} = t.options;
        i && i()
    }
    t.options.transition = void 0
}
function yj(t) {
    _o && is.totalNodes++,
    t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
    t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)),
    t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
}
function vj(t) {
    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
}
function wj(t) {
    t.clearSnapshot()
}
function w0(t) {
    t.clearMeasurements()
}
function xj(t) {
    t.isLayoutDirty = !1
}
function Sj(t) {
    const {visualElement: e} = t.options;
    e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
    t.resetTransform()
}
function x0(t) {
    t.finishAnimation(),
    t.targetDelta = t.relativeTarget = t.target = void 0,
    t.isProjectionDirty = !0
}
function bj(t) {
    t.resolveTargetDelta()
}
function Cj(t) {
    t.calcProjection()
}
function Ej(t) {
    t.resetSkewAndRotation()
}
function kj(t) {
    t.removeLeadSnapshot()
}
function S0(t, e, n) {
    t.translate = He(e.translate, 0, n),
    t.scale = He(e.scale, 1, n),
    t.origin = e.origin,
    t.originPoint = e.originPoint
}
function b0(t, e, n, i) {
    t.min = He(e.min, n.min, i),
    t.max = He(e.max, n.max, i)
}
function Tj(t, e, n, i) {
    b0(t.x, e.x, n.x, i),
    b0(t.y, e.y, n.y, i)
}
function Pj(t) {
    return t.animationValues && t.animationValues.opacityExit !== void 0
}
const _j = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , C0 = t => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t)
  , E0 = C0("applewebkit/") && !C0("chrome/") ? Math.round : Bt;
function k0(t) {
    t.min = E0(t.min),
    t.max = E0(t.max)
}
function Rj(t) {
    k0(t.x),
    k0(t.y)
}
function W1(t, e, n) {
    return t === "position" || t === "preserve-aspect" && !O2(g0(e), g0(n), .2)
}
function Aj(t) {
    var e;
    return t !== t.root && ((e = t.scroll) === null || e === void 0 ? void 0 : e.wasRoot)
}
const Nj = H1({
    attachResizeListener: (t, e) => $o(t, "resize", e),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , zd = {
    current: void 0
}
  , q1 = H1({
    measureScroll: t => ({
        x: t.scrollLeft,
        y: t.scrollTop
    }),
    defaultParent: () => {
        if (!zd.current) {
            const t = new Nj({});
            t.mount(window),
            t.setOptions({
                layoutScroll: !0
            }),
            zd.current = t
        }
        return zd.current
    }
    ,
    resetTransform: (t, e) => {
        t.style.transform = e !== void 0 ? e : "none"
    }
    ,
    checkIsScrollRoot: t => window.getComputedStyle(t).position === "fixed"
})
  , Oj = {
    pan: {
        Feature: Q2
    },
    drag: {
        Feature: K2,
        ProjectionNode: q1,
        MeasureLayout: F1
    }
};
function T0(t, e, n) {
    const {props: i} = t;
    t.animationState && i.whileHover && t.animationState.setActive("whileHover", n === "Start");
    const o = "onHover" + n
      , l = i[o];
    l && Ue.postRender( () => l(e, sa(e)))
}
class jj extends Ur {
    mount() {
        const {current: e} = this.node;
        e && (this.unmount = ON(e, n => (T0(this.node, n, "Start"),
        i => T0(this.node, i, "End"))))
    }
    unmount() {}
}
class Lj extends Ur {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let e = !1;
        try {
            e = this.node.current.matches(":focus-visible")
        } catch {
            e = !0
        }
        !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = ra($o(this.node.current, "focus", () => this.onFocus()), $o(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function P0(t, e, n) {
    const {props: i} = t;
    t.animationState && i.whileTap && t.animationState.setActive("whileTap", n === "Start");
    const o = "onTap" + (n === "End" ? "" : n)
      , l = i[o];
    l && Ue.postRender( () => l(e, sa(e)))
}
class Mj extends Ur {
    mount() {
        const {current: e} = this.node;
        e && (this.unmount = DN(e, n => (P0(this.node, n, "Start"),
        (i, {success: o}) => P0(this.node, i, o ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const Mf = new WeakMap
  , $d = new WeakMap
  , Dj = t => {
    const e = Mf.get(t.target);
    e && e(t)
}
  , Ij = t => {
    t.forEach(Dj)
}
;
function Fj({root: t, ...e}) {
    const n = t || document;
    $d.has(n) || $d.set(n, {});
    const i = $d.get(n)
      , o = JSON.stringify(e);
    return i[o] || (i[o] = new IntersectionObserver(Ij,{
        root: t,
        ...e
    })),
    i[o]
}
function Vj(t, e, n) {
    const i = Fj(e);
    return Mf.set(t, n),
    i.observe(t),
    () => {
        Mf.delete(t),
        i.unobserve(t)
    }
}
const Uj = {
    some: 0,
    all: 1
};
class Bj extends Ur {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: e={}} = this.node.getProps()
          , {root: n, margin: i, amount: o="some", once: l} = e
          , u = {
            root: n ? n.current : void 0,
            rootMargin: i,
            threshold: typeof o == "number" ? o : Uj[o]
        }
          , d = f => {
            const {isIntersecting: p} = f;
            if (this.isInView === p || (this.isInView = p,
            l && !p && this.hasEnteredView))
                return;
            p && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", p);
            const {onViewportEnter: m, onViewportLeave: y} = this.node.getProps()
              , w = p ? m : y;
            w && w(f)
        }
        ;
        return Vj(this.node.current, u, d)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: e, prevProps: n} = this.node;
        ["amount", "margin", "root"].some(zj(e, n)) && this.startObserver()
    }
    unmount() {}
}
function zj({viewport: t={}}, {viewport: e={}}={}) {
    return n => t[n] !== e[n]
}
const $j = {
    inView: {
        Feature: Bj
    },
    tap: {
        Feature: Mj
    },
    focus: {
        Feature: Lj
    },
    hover: {
        Feature: jj
    }
}
  , Hj = {
    layout: {
        ProjectionNode: q1,
        MeasureLayout: F1
    }
}
  , Df = {
    current: null
}
  , K1 = {
    current: !1
};
function Wj() {
    if (K1.current = !0,
    !!fh)
        if (window.matchMedia) {
            const t = window.matchMedia("(prefers-reduced-motion)")
              , e = () => Df.current = t.matches;
            t.addListener(e),
            e()
        } else
            Df.current = !1
}
const qj = [...v1, St, Ir]
  , Kj = t => qj.find(y1(t))
  , _0 = new WeakMap;
function Qj(t, e, n) {
    for (const i in e) {
        const o = e[i]
          , l = n[i];
        if (Ct(o))
            t.addValue(i, o);
        else if (Ct(l))
            t.addValue(i, Bo(o, {
                owner: t
            }));
        else if (l !== o)
            if (t.hasValue(i)) {
                const u = t.getValue(i);
                u.liveStyle === !0 ? u.jump(o) : u.hasAnimated || u.set(o)
            } else {
                const u = t.getStaticValue(i);
                t.addValue(i, Bo(u !== void 0 ? u : o, {
                    owner: t
                }))
            }
    }
    for (const i in n)
        e[i] === void 0 && t.removeValue(i);
    return e
}
const R0 = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class Gj {
    scrapeMotionValuesFromProps(e, n, i) {
        return {}
    }
    constructor({parent: e, props: n, presenceContext: i, reducedMotionConfig: o, blockInitialAnimation: l, visualState: u}, d={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.KeyframeResolver = Vh,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const C = Rn.now();
            this.renderScheduledAt < C && (this.renderScheduledAt = C,
            Ue.render(this.render, !1, !0))
        }
        ;
        const {latestValues: f, renderState: p, onUpdate: m} = u;
        this.onUpdate = m,
        this.latestValues = f,
        this.baseTarget = {
            ...f
        },
        this.initialValues = n.initial ? {
            ...f
        } : {},
        this.renderState = p,
        this.parent = e,
        this.props = n,
        this.presenceContext = i,
        this.depth = e ? e.depth + 1 : 0,
        this.reducedMotionConfig = o,
        this.options = d,
        this.blockInitialAnimation = !!l,
        this.isControllingVariants = du(n),
        this.isVariantNode = Tx(n),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(e && e.current);
        const {willChange: y, ...w} = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const C in w) {
            const b = w[C];
            f[C] !== void 0 && Ct(b) && b.set(f[C], !1)
        }
    }
    mount(e) {
        this.current = e,
        _0.set(e, this),
        this.projection && !this.projection.instance && this.projection.mount(e),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (n, i) => this.bindToMotionValue(i, n)),
        K1.current || Wj(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Df.current,
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        _0.delete(this.current),
        this.projection && this.projection.unmount(),
        Dr(this.notifyUpdate),
        Dr(this.render),
        this.valueSubscriptions.forEach(e => e()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (const e in this.events)
            this.events[e].clear();
        for (const e in this.features) {
            const n = this.features[e];
            n && (n.unmount(),
            n.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(e, n) {
        this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
        const i = Ps.has(e)
          , o = n.on("change", d => {
            this.latestValues[e] = d,
            this.props.onUpdate && Ue.preRender(this.notifyUpdate),
            i && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , l = n.on("renderRequest", this.scheduleRender);
        let u;
        window.MotionCheckAppearSync && (u = window.MotionCheckAppearSync(this, e, n)),
        this.valueSubscriptions.set(e, () => {
            o(),
            l(),
            u && u(),
            n.owner && n.stop()
        }
        )
    }
    sortNodePosition(e) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current)
    }
    updateFeatures() {
        let e = "animation";
        for (e in wi) {
            const n = wi[e];
            if (!n)
                continue;
            const {isEnabled: i, Feature: o} = n;
            if (!this.features[e] && o && i(this.props) && (this.features[e] = new o(this)),
            this.features[e]) {
                const l = this.features[e];
                l.isMounted ? l.update() : (l.mount(),
                l.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Xe()
    }
    getStaticValue(e) {
        return this.latestValues[e]
    }
    setStaticValue(e, n) {
        this.latestValues[e] = n
    }
    update(e, n) {
        (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = e,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = n;
        for (let i = 0; i < R0.length; i++) {
            const o = R0[i];
            this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](),
            delete this.propEventSubscriptions[o]);
            const l = "on" + o
              , u = e[l];
            u && (this.propEventSubscriptions[o] = this.on(o, u))
        }
        this.prevMotionValues = Qj(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue(),
        this.onUpdate && this.onUpdate(this)
    }
    getProps() {
        return this.props
    }
    getVariant(e) {
        return this.props.variants ? this.props.variants[e] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(e) {
        const n = this.getClosestVariantNode();
        if (n)
            return n.variantChildren && n.variantChildren.add(e),
            () => n.variantChildren.delete(e)
    }
    addValue(e, n) {
        const i = this.values.get(e);
        n !== i && (i && this.removeValue(e),
        this.bindToMotionValue(e, n),
        this.values.set(e, n),
        this.latestValues[e] = n.get())
    }
    removeValue(e) {
        this.values.delete(e);
        const n = this.valueSubscriptions.get(e);
        n && (n(),
        this.valueSubscriptions.delete(e)),
        delete this.latestValues[e],
        this.removeValueFromRenderState(e, this.renderState)
    }
    hasValue(e) {
        return this.values.has(e)
    }
    getValue(e, n) {
        if (this.props.values && this.props.values[e])
            return this.props.values[e];
        let i = this.values.get(e);
        return i === void 0 && n !== void 0 && (i = Bo(n === null ? void 0 : n, {
            owner: this
        }),
        this.addValue(e, i)),
        i
    }
    readValue(e, n) {
        var i;
        let o = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : (i = this.getBaseTargetFromProps(this.props, e)) !== null && i !== void 0 ? i : this.readValueFromInstance(this.current, e, this.options);
        return o != null && (typeof o == "string" && (m1(o) || o1(o)) ? o = parseFloat(o) : !Kj(o) && Ir.test(n) && (o = f1(e, n)),
        this.setBaseTarget(e, Ct(o) ? o.get() : o)),
        Ct(o) ? o.get() : o
    }
    setBaseTarget(e, n) {
        this.baseTarget[e] = n
    }
    getBaseTarget(e) {
        var n;
        const {initial: i} = this.props;
        let o;
        if (typeof i == "string" || typeof i == "object") {
            const u = wh(this.props, i, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
            u && (o = u[e])
        }
        if (i && o !== void 0)
            return o;
        const l = this.getBaseTargetFromProps(this.props, e);
        return l !== void 0 && !Ct(l) ? l : this.initialValues[e] !== void 0 && o === void 0 ? void 0 : this.baseTarget[e]
    }
    on(e, n) {
        return this.events[e] || (this.events[e] = new jh),
        this.events[e].add(n)
    }
    notify(e, ...n) {
        this.events[e] && this.events[e].notify(...n)
    }
}
class Q1 extends Gj {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = w1
    }
    sortInstanceNodePosition(e, n) {
        return e.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(e, n) {
        return e.style ? e.style[n] : void 0
    }
    removeValueFromRenderState(e, {vars: n, style: i}) {
        delete n[e],
        delete i[e]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: e} = this.props;
        Ct(e) && (this.childSubscription = e.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }
        ))
    }
}
function Yj(t) {
    return window.getComputedStyle(t)
}
class Xj extends Q1 {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = Mx
    }
    readValueFromInstance(e, n) {
        if (Ps.has(n)) {
            const i = Fh(n);
            return i && i.default || 0
        } else {
            const i = Yj(e)
              , o = (Ox(n) ? i.getPropertyValue(n) : i[n]) || 0;
            return typeof o == "string" ? o.trim() : o
        }
    }
    measureInstanceViewportBox(e, {transformPagePoint: n}) {
        return D1(e, n)
    }
    build(e, n, i) {
        bh(e, n, i.transformTemplate)
    }
    scrapeMotionValuesFromProps(e, n, i) {
        return Th(e, n, i)
    }
}
class Jj extends Q1 {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = Xe
    }
    getBaseTargetFromProps(e, n) {
        return e[n]
    }
    readValueFromInstance(e, n) {
        if (Ps.has(n)) {
            const i = Fh(n);
            return i && i.default || 0
        }
        return n = Dx.has(n) ? n : gh(n),
        e.getAttribute(n)
    }
    scrapeMotionValuesFromProps(e, n, i) {
        return Vx(e, n, i)
    }
    build(e, n, i) {
        Ch(e, n, this.isSVGTag, i.transformTemplate)
    }
    renderInstance(e, n, i, o) {
        Ix(e, n, i, o)
    }
    mount(e) {
        this.isSVGTag = kh(e.tagName),
        super.mount(e)
    }
}
const Zj = (t, e) => vh(t) ? new Jj(e) : new Xj(e,{
    allowProjection: t !== E.Fragment
})
  , eL = kN({
    ...C2,
    ...$j,
    ...Oj,
    ...Hj
}, Zj)
  , zt = UA(eL);
function tL() {
    const [t,e] = E.useState("")
      , [n,i] = E.useState([])
      , [o,l] = E.useState(!1)
      , [u,d] = E.useState(!1)
      , f = E.useRef(null)
      , p = Jf();
    return E.useEffect( () => {
        const m = y => {
            f.current && !f.current.contains(y.target) && l(!1)
        }
        ;
        return document.addEventListener("mousedown", m),
        () => document.removeEventListener("mousedown", m)
    }
    , []),
    E.useEffect( () => {
        if (t.length < 2) {
            i([]),
            l(!1);
            return
        }
        const m = setTimeout(async () => {
            d(!0);
            const w = (await nn.entities.EncyclopediaObject.list()).filter(C => {
                var b, k, S;
                return ((b = C.name) == null ? void 0 : b.toLowerCase().includes(t.toLowerCase())) || ((k = C.short_description) == null ? void 0 : k.toLowerCase().includes(t.toLowerCase())) || ((S = C.tags) == null ? void 0 : S.some(P => P.toLowerCase().includes(t.toLowerCase())))
            }
            ).slice(0, 6);
            i(w),
            l(!0),
            d(!1)
        }
        , 300);
        return () => clearTimeout(m)
    }
    , [t]),
    x.jsxs("div", {
        ref: f,
        className: "relative w-full max-w-2xl mx-auto",
        children: [x.jsxs("div", {
            className: "relative group",
            children: [x.jsx("div", {
                className: "absolute -inset-0.5 bg-primary/20 rounded-2xl blur-md opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"
            }), x.jsxs("div", {
                className: "relative flex items-center bg-card border border-border rounded-xl overflow-hidden group-focus-within:border-primary/50 transition-colors duration-200",
                children: [x.jsx(ly, {
                    className: "w-5 h-5 text-muted-foreground ml-4 shrink-0"
                }), x.jsx("input", {
                    type: "text",
                    value: t,
                    onChange: m => e(m.target.value),
                    placeholder: "Search objects, categories, materials...",
                    className: "w-full bg-transparent px-4 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none text-sm"
                }), t && x.jsx("button", {
                    onClick: () => {
                        e(""),
                        i([]),
                        l(!1)
                    }
                    ,
                    className: "mr-4 text-muted-foreground hover:text-foreground transition-colors",
                    children: x.jsx(G0, {
                        className: "w-4 h-4"
                    })
                })]
            })]
        }), x.jsx(OA, {
            children: o && n.length > 0 && x.jsx(zt.div, {
                initial: {
                    opacity: 0,
                    y: -8
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    y: -8
                },
                className: "absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl shadow-2xl overflow-hidden z-50",
                children: n.map(m => x.jsxs("button", {
                    onClick: () => {
                        p(`/Object?id=${m.id}`),
                        l(!1),
                        e("")
                    }
                    ,
                    className: "w-full flex items-center gap-3 px-4 py-3 hover:bg-secondary/50 transition-colors text-left",
                    children: [m.image_url ? x.jsx("img", {
                        src: m.image_url,
                        alt: m.name,
                        className: "w-10 h-10 rounded-lg object-cover bg-secondary"
                    }) : x.jsx("div", {
                        className: "w-10 h-10 rounded-lg bg-secondary flex items-center justify-center",
                        children: x.jsx(ly, {
                            className: "w-4 h-4 text-muted-foreground"
                        })
                    }), x.jsxs("div", {
                        children: [x.jsx("p", {
                            className: "text-sm font-medium text-foreground",
                            children: m.name
                        }), x.jsx("p", {
                            className: "text-xs text-muted-foreground line-clamp-1",
                            children: m.short_description
                        })]
                    })]
                }, m.id))
            })
        })]
    })
}
function nL({categories: t}) {
    return x.jsx("div", {
        className: "flex flex-wrap justify-center gap-2",
        children: t.map( (e, n) => x.jsx(zt.div, {
            initial: {
                opacity: 0,
                scale: .9
            },
            animate: {
                opacity: 1,
                scale: 1
            },
            transition: {
                delay: n * .03,
                duration: .2
            },
            children: x.jsx(Cs, {
                to: `/Archive?category=${e.id}`,
                className: "inline-flex items-center px-4 py-2 rounded-full text-xs font-medium border border-border/60 bg-card text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-200",
                children: e.name
            })
        }, e.id))
    })
}
const rL = {
    Lightbulb: yE,
    Wrench: RE,
    Cpu: aE,
    Music: SE,
    Globe: dE,
    Compass: iE,
    Gem: uE,
    BookOpen: Zl,
    Cog: rE,
    Palette: CE,
    Microscope: wE,
    Zap: Y0
};
function sL({category: t, index: e}) {
    const n = rL[t.icon] || Zl;
    return x.jsx(zt.div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            delay: e * .05,
            duration: .3
        },
        children: x.jsxs(Cs, {
            to: `/Archive?category=${t.id}`,
            className: "group block relative overflow-hidden rounded-xl border border-border/60 bg-card hover:border-primary/40 transition-all duration-200",
            children: [x.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            }), x.jsx("div", {
                className: "absolute -top-12 -right-12 w-32 h-32 bg-primary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl"
            }), x.jsxs("div", {
                className: "relative p-6 flex flex-col items-start gap-4",
                children: [x.jsx("div", {
                    className: "w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 group-hover:border-primary/30 transition-all duration-200",
                    children: x.jsx(n, {
                        className: "w-5 h-5 text-primary"
                    })
                }), x.jsxs("div", {
                    children: [x.jsx("h3", {
                        className: "text-sm font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-200",
                        children: t.name
                    }), x.jsx("p", {
                        className: "text-xs text-muted-foreground line-clamp-2",
                        children: t.description
                    })]
                }), x.jsxs("span", {
                    className: "text-[11px] text-muted-foreground font-medium",
                    children: [t.object_count || 0, " objects"]
                })]
            })]
        })
    })
}
function G1({object: t, index: e=0}) {
    return x.jsx(zt.div, {
        initial: {
            opacity: 0,
            y: 16
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            delay: e * .04,
            duration: .3
        },
        children: x.jsxs(Cs, {
            to: `/Object?id=${t.id}`,
            className: "group block relative overflow-hidden rounded-xl border border-border/60 bg-card hover:border-primary/30 transition-all duration-200",
            children: [x.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            }), x.jsx("div", {
                className: "relative aspect-[4/3] bg-secondary/30 overflow-hidden",
                children: t.image_url ? x.jsx("img", {
                    src: t.image_url,
                    alt: t.name,
                    className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                }) : x.jsx("div", {
                    className: "w-full h-full flex items-center justify-center",
                    children: x.jsx("div", {
                        className: "w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20"
                    })
                })
            }), x.jsx("div", {
                className: "relative p-4",
                children: x.jsxs("div", {
                    className: "flex items-start justify-between gap-2",
                    children: [x.jsxs("div", {
                        className: "flex-1 min-w-0",
                        children: [x.jsx("p", {
                            className: "text-[11px] font-medium text-primary/80 mb-1",
                            children: t.category_name
                        }), x.jsx("h3", {
                            className: "text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-200 truncate",
                            children: t.name
                        }), x.jsx("p", {
                            className: "text-xs text-muted-foreground mt-1 line-clamp-2",
                            children: t.short_description
                        })]
                    }), x.jsx("div", {
                        className: "w-7 h-7 rounded-lg bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors duration-200",
                        children: x.jsx(Q0, {
                            className: "w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors duration-200"
                        })
                    })]
                })
            })]
        })
    })
}
function iL() {
    const {data: t=[]} = bs({
        queryKey: ["categories"],
        queryFn: () => nn.entities.Category.list()
    })
      , {data: e=[]} = bs({
        queryKey: ["recent-objects"],
        queryFn: () => nn.entities.EncyclopediaObject.list("-created_date", 8)
    });
    return x.jsxs("div", {
        className: "min-h-screen",
        children: [x.jsxs("section", {
            className: "relative overflow-hidden",
            children: [x.jsxs("div", {
                className: "absolute inset-0",
                children: [x.jsx("div", {
                    className: "absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/[0.04] rounded-full blur-3xl"
                }), x.jsx("div", {
                    className: "absolute top-20 left-1/4 w-[300px] h-[300px] bg-primary/[0.03] rounded-full blur-3xl"
                })]
            }), x.jsxs("div", {
                className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16",
                children: [x.jsxs(zt.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .5
                    },
                    className: "text-center mb-10",
                    children: [x.jsxs("div", {
                        className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6",
                        children: [x.jsx(Wd, {
                            className: "w-3.5 h-3.5 text-primary"
                        }), x.jsx("span", {
                            className: "text-xs font-medium text-primary",
                            children: "The Object Encyclopedia"
                        })]
                    }), x.jsxs("h1", {
                        className: "text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-4",
                        children: ["Discover the world", x.jsx("br", {}), x.jsx("span", {
                            className: "text-primary",
                            children: "of everyday objects"
                        })]
                    }), x.jsx("p", {
                        className: "text-base text-muted-foreground max-w-xl mx-auto",
                        children: "Explore the fascinating history, science, and stories behind the objects that shape our daily lives."
                    })]
                }), x.jsx(zt.div, {
                    initial: {
                        opacity: 0,
                        y: 10
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: .2,
                        duration: .4
                    },
                    className: "mb-10",
                    children: x.jsx(tL, {})
                }), t.length > 0 && x.jsx(zt.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        delay: .3,
                        duration: .4
                    },
                    children: x.jsx(nL, {
                        categories: t
                    })
                })]
            })]
        }), t.length > 0 && x.jsxs("section", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16",
            children: [x.jsxs("div", {
                className: "flex items-center justify-between mb-6",
                children: [x.jsx("h2", {
                    className: "text-lg font-bold text-foreground",
                    children: "Browse Categories"
                }), x.jsxs("span", {
                    className: "text-xs text-muted-foreground",
                    children: [t.length, " categories"]
                })]
            }), x.jsx("div", {
                className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4",
                children: t.map( (n, i) => x.jsx(sL, {
                    category: n,
                    index: i
                }, n.id))
            })]
        }), e.length > 0 && x.jsxs("section", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20",
            children: [x.jsx("div", {
                className: "flex items-center justify-between mb-6",
                children: x.jsx("h2", {
                    className: "text-lg font-bold text-foreground",
                    children: "Recently Added"
                })
            }), x.jsx("div", {
                className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4",
                children: e.map( (n, i) => x.jsx(G1, {
                    object: n,
                    index: i
                }, n.id))
            })]
        })]
    })
}
function oL({categories: t, selectedCategory: e, onCategoryChange: n, sortBy: i, onSortChange: o}) {
    return x.jsxs(zt.div, {
        initial: {
            opacity: 0,
            y: -10
        },
        animate: {
            opacity: 1,
            y: 0
        },
        className: "rounded-xl border border-border/40 bg-card/60 backdrop-blur-xl p-5",
        children: [x.jsxs("div", {
            className: "flex items-center gap-2 mb-4",
            children: [x.jsx(TE, {
                className: "w-4 h-4 text-primary"
            }), x.jsx("span", {
                className: "text-sm font-semibold text-foreground",
                children: "Filters"
            })]
        }), x.jsxs("div", {
            className: "space-y-4",
            children: [x.jsxs("div", {
                children: [x.jsx("label", {
                    className: "text-xs font-medium text-muted-foreground mb-2 block",
                    children: "Category"
                }), x.jsxs("div", {
                    className: "flex flex-wrap gap-2",
                    children: [x.jsx("button", {
                        onClick: () => n(null),
                        className: `px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${e ? "bg-secondary text-muted-foreground border border-transparent hover:text-foreground hover:bg-secondary/80" : "bg-primary/15 text-primary border border-primary/30"}`,
                        children: "All"
                    }), t.map(l => x.jsx("button", {
                        onClick: () => n(l.id),
                        className: `px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${e === l.id ? "bg-primary/15 text-primary border border-primary/30" : "bg-secondary text-muted-foreground border border-transparent hover:text-foreground hover:bg-secondary/80"}`,
                        children: l.name
                    }, l.id))]
                })]
            }), x.jsxs("div", {
                children: [x.jsx("label", {
                    className: "text-xs font-medium text-muted-foreground mb-2 block",
                    children: "Sort by"
                }), x.jsx("div", {
                    className: "flex gap-2",
                    children: [{
                        value: "name",
                        label: "Name"
                    }, {
                        value: "-created_date",
                        label: "Newest"
                    }, {
                        value: "year",
                        label: "Year"
                    }].map(l => x.jsx("button", {
                        onClick: () => o(l.value),
                        className: `px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${i === l.value ? "bg-primary/15 text-primary border border-primary/30" : "bg-secondary text-muted-foreground border border-transparent hover:text-foreground hover:bg-secondary/80"}`,
                        children: l.label
                    }, l.value))
                })]
            })]
        })]
    })
}
function aL() {
    var y;
    const e = new URLSearchParams(window.location.search).get("category") || null
      , [n,i] = E.useState(e)
      , [o,l] = E.useState("-created_date")
      , {data: u=[]} = bs({
        queryKey: ["categories"],
        queryFn: () => nn.entities.Category.list()
    })
      , {data: d=[], isLoading: f} = bs({
        queryKey: ["objects", o],
        queryFn: () => nn.entities.EncyclopediaObject.list(o, 100)
    })
      , p = n ? d.filter(w => w.category_id === n) : d
      , m = (y = u.find(w => w.id === n)) == null ? void 0 : y.name;
    return x.jsx("div", {
        className: "min-h-screen",
        children: x.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
            children: [x.jsxs(zt.div, {
                initial: {
                    opacity: 0,
                    y: -10
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                className: "mb-8",
                children: [x.jsxs("div", {
                    className: "flex items-center gap-3 mb-2",
                    children: [x.jsx(Hd, {
                        className: "w-5 h-5 text-primary"
                    }), x.jsx("h1", {
                        className: "text-2xl font-bold text-foreground tracking-tight",
                        children: m || "All Objects"
                    })]
                }), x.jsxs("p", {
                    className: "text-sm text-muted-foreground",
                    children: [p.length, " object", p.length !== 1 ? "s" : "", " found"]
                })]
            }), x.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-4 gap-6",
                children: [x.jsx("div", {
                    className: "lg:col-span-1",
                    children: x.jsx("div", {
                        className: "sticky top-20",
                        children: x.jsx(oL, {
                            categories: u,
                            selectedCategory: n,
                            onCategoryChange: i,
                            sortBy: o,
                            onSortChange: l
                        })
                    })
                }), x.jsx("div", {
                    className: "lg:col-span-3",
                    children: f ? x.jsx("div", {
                        className: "grid grid-cols-2 sm:grid-cols-3 gap-4",
                        children: Array(6).fill(0).map( (w, C) => x.jsx("div", {
                            className: "aspect-[3/4] rounded-xl bg-card border border-border/40 animate-pulse"
                        }, C))
                    }) : p.length > 0 ? x.jsx("div", {
                        className: "grid grid-cols-2 sm:grid-cols-3 gap-4",
                        children: p.map( (w, C) => x.jsx(G1, {
                            object: w,
                            index: C
                        }, w.id))
                    }) : x.jsxs("div", {
                        className: "text-center py-20",
                        children: [x.jsx("div", {
                            className: "w-16 h-16 rounded-2xl bg-card border border-border mx-auto mb-4 flex items-center justify-center",
                            children: x.jsx(Hd, {
                                className: "w-6 h-6 text-muted-foreground"
                            })
                        }), x.jsx("p", {
                            className: "text-sm text-muted-foreground",
                            children: "No objects found"
                        })]
                    })
                })]
            })]
        })
    })
}
function lL({object: t}) {
    return x.jsxs("div", {
        className: "relative",
        children: [x.jsx("div", {
            className: "absolute inset-0 overflow-hidden",
            children: x.jsx("div", {
                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"
            })
        }), x.jsxs("div", {
            className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12",
            children: [x.jsxs(Cs, {
                to: "/Archive",
                className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors",
                children: [x.jsx(XC, {
                    className: "w-4 h-4"
                }), "Back to Archive"]
            }), x.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                children: [x.jsxs(zt.div, {
                    initial: {
                        opacity: 0,
                        scale: .95
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    transition: {
                        duration: .4
                    },
                    className: "relative",
                    children: [x.jsx("div", {
                        className: "absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl"
                    }), x.jsx("div", {
                        className: "relative aspect-square rounded-2xl bg-card border border-border/60 overflow-hidden flex items-center justify-center",
                        children: t.image_url ? x.jsx("img", {
                            src: t.image_url,
                            alt: t.name,
                            className: "w-full h-full object-cover"
                        }) : x.jsx("div", {
                            className: "w-32 h-32 rounded-3xl bg-primary/10 border border-primary/20"
                        })
                    })]
                }), x.jsxs(zt.div, {
                    initial: {
                        opacity: 0,
                        x: 20
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        delay: .1,
                        duration: .4
                    },
                    children: [x.jsx("p", {
                        className: "text-xs font-semibold text-primary tracking-wider uppercase mb-3",
                        children: t.category_name
                    }), x.jsx("h1", {
                        className: "text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight",
                        children: t.name
                    }), x.jsx("p", {
                        className: "text-base text-muted-foreground leading-relaxed mb-8",
                        children: t.short_description
                    }), x.jsxs("div", {
                        className: "flex flex-wrap gap-2",
                        children: [t.origin && x.jsxs("span", {
                            className: "inline-flex items-center px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-xs font-medium text-primary",
                            children: ["Origin: ", t.origin]
                        }), t.year && x.jsxs("span", {
                            className: "inline-flex items-center px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-xs font-medium text-primary",
                            children: ["Year: ", t.year]
                        }), t.material && x.jsxs("span", {
                            className: "inline-flex items-center px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-xs font-medium text-primary",
                            children: ["Material: ", t.material]
                        }), t.usage && x.jsxs("span", {
                            className: "inline-flex items-center px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-xs font-medium text-primary",
                            children: ["Usage: ", t.usage]
                        })]
                    })]
                })]
            })]
        })]
    })
}
function pu(t, e=[]) {
    let n = [];
    function i(l, u) {
        const d = E.createContext(u)
          , f = n.length;
        n = [...n, u];
        const p = y => {
            var P;
            const {scope: w, children: C, ...b} = y
              , k = ((P = w == null ? void 0 : w[t]) == null ? void 0 : P[f]) || d
              , S = E.useMemo( () => b, Object.values(b));
            return x.jsx(k.Provider, {
                value: S,
                children: C
            })
        }
        ;
        p.displayName = l + "Provider";
        function m(y, w) {
            var k;
            const C = ((k = w == null ? void 0 : w[t]) == null ? void 0 : k[f]) || d
              , b = E.useContext(C);
            if (b)
                return b;
            if (u !== void 0)
                return u;
            throw new Error(`\`${y}\` must be used within \`${l}\``)
        }
        return [p, m]
    }
    const o = () => {
        const l = n.map(u => E.createContext(u));
        return function(d) {
            const f = (d == null ? void 0 : d[t]) || l;
            return E.useMemo( () => ({
                [`__scope${t}`]: {
                    ...d,
                    [t]: f
                }
            }), [d, f])
        }
    }
    ;
    return o.scopeName = t,
    [i, uL(o, ...e)]
}
function uL(...t) {
    const e = t[0];
    if (t.length === 1)
        return e;
    const n = () => {
        const i = t.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(l) {
            const u = i.reduce( (d, {useScope: f, scopeName: p}) => {
                const y = f(l)[`__scope${p}`];
                return {
                    ...d,
                    ...y
                }
            }
            , {});
            return E.useMemo( () => ({
                [`__scope${e.scopeName}`]: u
            }), [u])
        }
    }
    ;
    return n.scopeName = e.scopeName,
    n
}
function A0(t, e) {
    if (typeof t == "function")
        return t(e);
    t != null && (t.current = e)
}
function $h(...t) {
    return e => {
        let n = !1;
        const i = t.map(o => {
            const l = A0(o, e);
            return !n && typeof l == "function" && (n = !0),
            l
        }
        );
        if (n)
            return () => {
                for (let o = 0; o < i.length; o++) {
                    const l = i[o];
                    typeof l == "function" ? l() : A0(t[o], null)
                }
            }
    }
}
function gn(...t) {
    return E.useCallback($h(...t), t)
}
function N0(t) {
    const e = cL(t)
      , n = E.forwardRef( (i, o) => {
        const {children: l, ...u} = i
          , d = E.Children.toArray(l)
          , f = d.find(fL);
        if (f) {
            const p = f.props.children
              , m = d.map(y => y === f ? E.Children.count(p) > 1 ? E.Children.only(null) : E.isValidElement(p) ? p.props.children : null : y);
            return x.jsx(e, {
                ...u,
                ref: o,
                children: E.isValidElement(p) ? E.cloneElement(p, void 0, m) : null
            })
        }
        return x.jsx(e, {
            ...u,
            ref: o,
            children: l
        })
    }
    );
    return n.displayName = `${t}.Slot`,
    n
}
function cL(t) {
    const e = E.forwardRef( (n, i) => {
        const {children: o, ...l} = n;
        if (E.isValidElement(o)) {
            const u = pL(o)
              , d = hL(l, o.props);
            return o.type !== E.Fragment && (d.ref = i ? $h(i, u) : u),
            E.cloneElement(o, d)
        }
        return E.Children.count(o) > 1 ? E.Children.only(null) : null
    }
    );
    return e.displayName = `${t}.SlotClone`,
    e
}
var dL = Symbol("radix.slottable");
function fL(t) {
    return E.isValidElement(t) && typeof t.type == "function" && "__radixId"in t.type && t.type.__radixId === dL
}
function hL(t, e) {
    const n = {
        ...e
    };
    for (const i in e) {
        const o = t[i]
          , l = e[i];
        /^on[A-Z]/.test(i) ? o && l ? n[i] = (...d) => {
            const f = l(...d);
            return o(...d),
            f
        }
        : o && (n[i] = o) : i === "style" ? n[i] = {
            ...o,
            ...l
        } : i === "className" && (n[i] = [o, l].filter(Boolean).join(" "))
    }
    return {
        ...t,
        ...n
    }
}
function pL(t) {
    var i, o;
    let e = (i = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : i.get
      , n = e && "isReactWarning"in e && e.isReactWarning;
    return n ? t.ref : (e = (o = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : o.get,
    n = e && "isReactWarning"in e && e.isReactWarning,
    n ? t.props.ref : t.props.ref || t.ref)
}
function mL(t) {
    const e = t + "CollectionProvider"
      , [n,i] = pu(e)
      , [o,l] = n(e, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , u = k => {
        const {scope: S, children: P} = k
          , L = Je.useRef(null)
          , j = Je.useRef(new Map).current;
        return x.jsx(o, {
            scope: S,
            itemMap: j,
            collectionRef: L,
            children: P
        })
    }
    ;
    u.displayName = e;
    const d = t + "CollectionSlot"
      , f = N0(d)
      , p = Je.forwardRef( (k, S) => {
        const {scope: P, children: L} = k
          , j = l(d, P)
          , N = gn(S, j.collectionRef);
        return x.jsx(f, {
            ref: N,
            children: L
        })
    }
    );
    p.displayName = d;
    const m = t + "CollectionItemSlot"
      , y = "data-radix-collection-item"
      , w = N0(m)
      , C = Je.forwardRef( (k, S) => {
        const {scope: P, children: L, ...j} = k
          , N = Je.useRef(null)
          , V = gn(S, N)
          , $ = l(m, P);
        return Je.useEffect( () => ($.itemMap.set(N, {
            ref: N,
            ...j
        }),
        () => void $.itemMap.delete(N))),
        x.jsx(w, {
            [y]: "",
            ref: V,
            children: L
        })
    }
    );
    C.displayName = m;
    function b(k) {
        const S = l(t + "CollectionConsumer", k);
        return Je.useCallback( () => {
            const L = S.collectionRef.current;
            if (!L)
                return [];
            const j = Array.from(L.querySelectorAll(`[${y}]`));
            return Array.from(S.itemMap.values()).sort( ($, Y) => j.indexOf($.ref.current) - j.indexOf(Y.ref.current))
        }
        , [S.collectionRef, S.itemMap])
    }
    return [{
        Provider: u,
        Slot: p,
        ItemSlot: C
    }, b, i]
}
function Yn(t, e, {checkForDefaultPrevented: n=!0}={}) {
    return function(o) {
        if (t == null || t(o),
        n === !1 || !o.defaultPrevented)
            return e == null ? void 0 : e(o)
    }
}
var Si = globalThis != null && globalThis.document ? E.useLayoutEffect : () => {}
  , gL = Uf[" useInsertionEffect ".trim().toString()] || Si;
function Hh({prop: t, defaultProp: e, onChange: n= () => {}
, caller: i}) {
    const [o,l,u] = yL({
        defaultProp: e,
        onChange: n
    })
      , d = t !== void 0
      , f = d ? t : o;
    {
        const m = E.useRef(t !== void 0);
        E.useEffect( () => {
            const y = m.current;
            y !== d && console.warn(`${i} is changing from ${y ? "controlled" : "uncontrolled"} to ${d ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),
            m.current = d
        }
        , [d, i])
    }
    const p = E.useCallback(m => {
        var y;
        if (d) {
            const w = vL(m) ? m(t) : m;
            w !== t && ((y = u.current) == null || y.call(u, w))
        } else
            l(m)
    }
    , [d, t, l, u]);
    return [f, p]
}
function yL({defaultProp: t, onChange: e}) {
    const [n,i] = E.useState(t)
      , o = E.useRef(n)
      , l = E.useRef(e);
    return gL( () => {
        l.current = e
    }
    , [e]),
    E.useEffect( () => {
        var u;
        o.current !== n && ((u = l.current) == null || u.call(l, n),
        o.current = n)
    }
    , [n, o]),
    [n, i, l]
}
function vL(t) {
    return typeof t == "function"
}
function wL(t) {
    const e = xL(t)
      , n = E.forwardRef( (i, o) => {
        const {children: l, ...u} = i
          , d = E.Children.toArray(l)
          , f = d.find(bL);
        if (f) {
            const p = f.props.children
              , m = d.map(y => y === f ? E.Children.count(p) > 1 ? E.Children.only(null) : E.isValidElement(p) ? p.props.children : null : y);
            return x.jsx(e, {
                ...u,
                ref: o,
                children: E.isValidElement(p) ? E.cloneElement(p, void 0, m) : null
            })
        }
        return x.jsx(e, {
            ...u,
            ref: o,
            children: l
        })
    }
    );
    return n.displayName = `${t}.Slot`,
    n
}
function xL(t) {
    const e = E.forwardRef( (n, i) => {
        const {children: o, ...l} = n;
        if (E.isValidElement(o)) {
            const u = EL(o)
              , d = CL(l, o.props);
            return o.type !== E.Fragment && (d.ref = i ? $h(i, u) : u),
            E.cloneElement(o, d)
        }
        return E.Children.count(o) > 1 ? E.Children.only(null) : null
    }
    );
    return e.displayName = `${t}.SlotClone`,
    e
}
var SL = Symbol("radix.slottable");
function bL(t) {
    return E.isValidElement(t) && typeof t.type == "function" && "__radixId"in t.type && t.type.__radixId === SL
}
function CL(t, e) {
    const n = {
        ...e
    };
    for (const i in e) {
        const o = t[i]
          , l = e[i];
        /^on[A-Z]/.test(i) ? o && l ? n[i] = (...d) => {
            const f = l(...d);
            return o(...d),
            f
        }
        : o && (n[i] = o) : i === "style" ? n[i] = {
            ...o,
            ...l
        } : i === "className" && (n[i] = [o, l].filter(Boolean).join(" "))
    }
    return {
        ...t,
        ...n
    }
}
function EL(t) {
    var i, o;
    let e = (i = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : i.get
      , n = e && "isReactWarning"in e && e.isReactWarning;
    return n ? t.ref : (e = (o = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : o.get,
    n = e && "isReactWarning"in e && e.isReactWarning,
    n ? t.props.ref : t.props.ref || t.ref)
}
var kL = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
  , On = kL.reduce( (t, e) => {
    const n = wL(`Primitive.${e}`)
      , i = E.forwardRef( (o, l) => {
        const {asChild: u, ...d} = o
          , f = u ? n : e;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        x.jsx(f, {
            ...d,
            ref: l
        })
    }
    );
    return i.displayName = `Primitive.${e}`,
    {
        ...t,
        [e]: i
    }
}
, {});
function TL(t, e) {
    return E.useReducer( (n, i) => e[n][i] ?? n, t)
}
var Ri = t => {
    const {present: e, children: n} = t
      , i = PL(e)
      , o = typeof n == "function" ? n({
        present: i.isPresent
    }) : E.Children.only(n)
      , l = gn(i.ref, _L(o));
    return typeof n == "function" || i.isPresent ? E.cloneElement(o, {
        ref: l
    }) : null
}
;
Ri.displayName = "Presence";
function PL(t) {
    const [e,n] = E.useState()
      , i = E.useRef(null)
      , o = E.useRef(t)
      , l = E.useRef("none")
      , u = t ? "mounted" : "unmounted"
      , [d,f] = TL(u, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return E.useEffect( () => {
        const p = kl(i.current);
        l.current = d === "mounted" ? p : "none"
    }
    , [d]),
    Si( () => {
        const p = i.current
          , m = o.current;
        if (m !== t) {
            const w = l.current
              , C = kl(p);
            t ? f("MOUNT") : C === "none" || (p == null ? void 0 : p.display) === "none" ? f("UNMOUNT") : f(m && w !== C ? "ANIMATION_OUT" : "UNMOUNT"),
            o.current = t
        }
    }
    , [t, f]),
    Si( () => {
        if (e) {
            let p;
            const m = e.ownerDocument.defaultView ?? window
              , y = C => {
                const k = kl(i.current).includes(CSS.escape(C.animationName));
                if (C.target === e && k && (f("ANIMATION_END"),
                !o.current)) {
                    const S = e.style.animationFillMode;
                    e.style.animationFillMode = "forwards",
                    p = m.setTimeout( () => {
                        e.style.animationFillMode === "forwards" && (e.style.animationFillMode = S)
                    }
                    )
                }
            }
              , w = C => {
                C.target === e && (l.current = kl(i.current))
            }
            ;
            return e.addEventListener("animationstart", w),
            e.addEventListener("animationcancel", y),
            e.addEventListener("animationend", y),
            () => {
                m.clearTimeout(p),
                e.removeEventListener("animationstart", w),
                e.removeEventListener("animationcancel", y),
                e.removeEventListener("animationend", y)
            }
        } else
            f("ANIMATION_END")
    }
    , [e, f]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(d),
        ref: E.useCallback(p => {
            i.current = p ? getComputedStyle(p) : null,
            n(p)
        }
        , [])
    }
}
function kl(t) {
    return (t == null ? void 0 : t.animationName) || "none"
}
function _L(t) {
    var i, o;
    let e = (i = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : i.get
      , n = e && "isReactWarning"in e && e.isReactWarning;
    return n ? t.ref : (e = (o = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : o.get,
    n = e && "isReactWarning"in e && e.isReactWarning,
    n ? t.props.ref : t.props.ref || t.ref)
}
var RL = Uf[" useId ".trim().toString()] || ( () => {}
)
  , AL = 0;
function Y1(t) {
    const [e,n] = E.useState(RL());
    return Si( () => {
        n(i => i ?? String(AL++))
    }
    , [t]),
    e ? `radix-${e}` : ""
}
var mu = "Collapsible"
  , [NL,X1] = pu(mu)
  , [OL,Wh] = NL(mu)
  , J1 = E.forwardRef( (t, e) => {
    const {__scopeCollapsible: n, open: i, defaultOpen: o, disabled: l, onOpenChange: u, ...d} = t
      , [f,p] = Hh({
        prop: i,
        defaultProp: o ?? !1,
        onChange: u,
        caller: mu
    });
    return x.jsx(OL, {
        scope: n,
        disabled: l,
        contentId: Y1(),
        open: f,
        onOpenToggle: E.useCallback( () => p(m => !m), [p]),
        children: x.jsx(On.div, {
            "data-state": Kh(f),
            "data-disabled": l ? "" : void 0,
            ...d,
            ref: e
        })
    })
}
);
J1.displayName = mu;
var Z1 = "CollapsibleTrigger"
  , eS = E.forwardRef( (t, e) => {
    const {__scopeCollapsible: n, ...i} = t
      , o = Wh(Z1, n);
    return x.jsx(On.button, {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": Kh(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...i,
        ref: e,
        onClick: Yn(t.onClick, o.onOpenToggle)
    })
}
);
eS.displayName = Z1;
var qh = "CollapsibleContent"
  , tS = E.forwardRef( (t, e) => {
    const {forceMount: n, ...i} = t
      , o = Wh(qh, t.__scopeCollapsible);
    return x.jsx(Ri, {
        present: n || o.open,
        children: ({present: l}) => x.jsx(jL, {
            ...i,
            ref: e,
            present: l
        })
    })
}
);
tS.displayName = qh;
var jL = E.forwardRef( (t, e) => {
    const {__scopeCollapsible: n, present: i, children: o, ...l} = t
      , u = Wh(qh, n)
      , [d,f] = E.useState(i)
      , p = E.useRef(null)
      , m = gn(e, p)
      , y = E.useRef(0)
      , w = y.current
      , C = E.useRef(0)
      , b = C.current
      , k = u.open || d
      , S = E.useRef(k)
      , P = E.useRef(void 0);
    return E.useEffect( () => {
        const L = requestAnimationFrame( () => S.current = !1);
        return () => cancelAnimationFrame(L)
    }
    , []),
    Si( () => {
        const L = p.current;
        if (L) {
            P.current = P.current || {
                transitionDuration: L.style.transitionDuration,
                animationName: L.style.animationName
            },
            L.style.transitionDuration = "0s",
            L.style.animationName = "none";
            const j = L.getBoundingClientRect();
            y.current = j.height,
            C.current = j.width,
            S.current || (L.style.transitionDuration = P.current.transitionDuration,
            L.style.animationName = P.current.animationName),
            f(i)
        }
    }
    , [u.open, i]),
    x.jsx(On.div, {
        "data-state": Kh(u.open),
        "data-disabled": u.disabled ? "" : void 0,
        id: u.contentId,
        hidden: !k,
        ...l,
        ref: m,
        style: {
            "--radix-collapsible-content-height": w ? `${w}px` : void 0,
            "--radix-collapsible-content-width": b ? `${b}px` : void 0,
            ...t.style
        },
        children: k && o
    })
}
);
function Kh(t) {
    return t ? "open" : "closed"
}
var LL = J1
  , ML = eS
  , DL = tS
  , IL = E.createContext(void 0);
function nS(t) {
    const e = E.useContext(IL);
    return t || e || "ltr"
}
var vn = "Accordion"
  , FL = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"]
  , [Qh,VL,UL] = mL(vn)
  , [gu] = pu(vn, [UL, X1])
  , Gh = X1()
  , rS = Je.forwardRef( (t, e) => {
    const {type: n, ...i} = t
      , o = i
      , l = i;
    return x.jsx(Qh.Provider, {
        scope: t.__scopeAccordion,
        children: n === "multiple" ? x.jsx(HL, {
            ...l,
            ref: e
        }) : x.jsx($L, {
            ...o,
            ref: e
        })
    })
}
);
rS.displayName = vn;
var [sS,BL] = gu(vn)
  , [iS,zL] = gu(vn, {
    collapsible: !1
})
  , $L = Je.forwardRef( (t, e) => {
    const {value: n, defaultValue: i, onValueChange: o= () => {}
    , collapsible: l=!1, ...u} = t
      , [d,f] = Hh({
        prop: n,
        defaultProp: i ?? "",
        onChange: o,
        caller: vn
    });
    return x.jsx(sS, {
        scope: t.__scopeAccordion,
        value: Je.useMemo( () => d ? [d] : [], [d]),
        onItemOpen: f,
        onItemClose: Je.useCallback( () => l && f(""), [l, f]),
        children: x.jsx(iS, {
            scope: t.__scopeAccordion,
            collapsible: l,
            children: x.jsx(oS, {
                ...u,
                ref: e
            })
        })
    })
}
)
  , HL = Je.forwardRef( (t, e) => {
    const {value: n, defaultValue: i, onValueChange: o= () => {}
    , ...l} = t
      , [u,d] = Hh({
        prop: n,
        defaultProp: i ?? [],
        onChange: o,
        caller: vn
    })
      , f = Je.useCallback(m => d( (y=[]) => [...y, m]), [d])
      , p = Je.useCallback(m => d( (y=[]) => y.filter(w => w !== m)), [d]);
    return x.jsx(sS, {
        scope: t.__scopeAccordion,
        value: u,
        onItemOpen: f,
        onItemClose: p,
        children: x.jsx(iS, {
            scope: t.__scopeAccordion,
            collapsible: !0,
            children: x.jsx(oS, {
                ...l,
                ref: e
            })
        })
    })
}
)
  , [WL,yu] = gu(vn)
  , oS = Je.forwardRef( (t, e) => {
    const {__scopeAccordion: n, disabled: i, dir: o, orientation: l="vertical", ...u} = t
      , d = Je.useRef(null)
      , f = gn(d, e)
      , p = VL(n)
      , y = nS(o) === "ltr"
      , w = Yn(t.onKeyDown, C => {
        var I;
        if (!FL.includes(C.key))
            return;
        const b = C.target
          , k = p().filter(Q => {
            var X;
            return !((X = Q.ref.current) != null && X.disabled)
        }
        )
          , S = k.findIndex(Q => Q.ref.current === b)
          , P = k.length;
        if (S === -1)
            return;
        C.preventDefault();
        let L = S;
        const j = 0
          , N = P - 1
          , V = () => {
            L = S + 1,
            L > N && (L = j)
        }
          , $ = () => {
            L = S - 1,
            L < j && (L = N)
        }
        ;
        switch (C.key) {
        case "Home":
            L = j;
            break;
        case "End":
            L = N;
            break;
        case "ArrowRight":
            l === "horizontal" && (y ? V() : $());
            break;
        case "ArrowDown":
            l === "vertical" && V();
            break;
        case "ArrowLeft":
            l === "horizontal" && (y ? $() : V());
            break;
        case "ArrowUp":
            l === "vertical" && $();
            break
        }
        const Y = L % P;
        (I = k[Y].ref.current) == null || I.focus()
    }
    );
    return x.jsx(WL, {
        scope: n,
        disabled: i,
        direction: o,
        orientation: l,
        children: x.jsx(Qh.Slot, {
            scope: n,
            children: x.jsx(On.div, {
                ...u,
                "data-orientation": l,
                ref: f,
                onKeyDown: i ? void 0 : w
            })
        })
    })
}
)
  , Yl = "AccordionItem"
  , [qL,Yh] = gu(Yl)
  , aS = Je.forwardRef( (t, e) => {
    const {__scopeAccordion: n, value: i, ...o} = t
      , l = yu(Yl, n)
      , u = BL(Yl, n)
      , d = Gh(n)
      , f = Y1()
      , p = i && u.value.includes(i) || !1
      , m = l.disabled || t.disabled;
    return x.jsx(qL, {
        scope: n,
        open: p,
        disabled: m,
        triggerId: f,
        children: x.jsx(LL, {
            "data-orientation": l.orientation,
            "data-state": hS(p),
            ...d,
            ...o,
            ref: e,
            disabled: m,
            open: p,
            onOpenChange: y => {
                y ? u.onItemOpen(i) : u.onItemClose(i)
            }
        })
    })
}
);
aS.displayName = Yl;
var lS = "AccordionHeader"
  , uS = Je.forwardRef( (t, e) => {
    const {__scopeAccordion: n, ...i} = t
      , o = yu(vn, n)
      , l = Yh(lS, n);
    return x.jsx(On.h3, {
        "data-orientation": o.orientation,
        "data-state": hS(l.open),
        "data-disabled": l.disabled ? "" : void 0,
        ...i,
        ref: e
    })
}
);
uS.displayName = lS;
var If = "AccordionTrigger"
  , cS = Je.forwardRef( (t, e) => {
    const {__scopeAccordion: n, ...i} = t
      , o = yu(vn, n)
      , l = Yh(If, n)
      , u = zL(If, n)
      , d = Gh(n);
    return x.jsx(Qh.ItemSlot, {
        scope: n,
        children: x.jsx(ML, {
            "aria-disabled": l.open && !u.collapsible || void 0,
            "data-orientation": o.orientation,
            id: l.triggerId,
            ...d,
            ...i,
            ref: e
        })
    })
}
);
cS.displayName = If;
var dS = "AccordionContent"
  , fS = Je.forwardRef( (t, e) => {
    const {__scopeAccordion: n, ...i} = t
      , o = yu(vn, n)
      , l = Yh(dS, n)
      , u = Gh(n);
    return x.jsx(DL, {
        role: "region",
        "aria-labelledby": l.triggerId,
        "data-orientation": o.orientation,
        ...u,
        ...i,
        ref: e,
        style: {
            "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
            "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
            ...t.style
        }
    })
}
);
fS.displayName = dS;
function hS(t) {
    return t ? "open" : "closed"
}
var KL = rS
  , QL = aS
  , GL = uS
  , pS = cS
  , mS = fS;
const YL = KL
  , gS = E.forwardRef( ({className: t, ...e}, n) => x.jsx(QL, {
    ref: n,
    className: Nn("border-b", t),
    ...e
}));
gS.displayName = "AccordionItem";
const yS = E.forwardRef( ({className: t, children: e, ...n}, i) => x.jsx(GL, {
    className: "flex",
    children: x.jsxs(pS, {
        ref: i,
        className: Nn("flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", t),
        ...n,
        children: [e, x.jsx(tE, {
            className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"
        })]
    })
}));
yS.displayName = pS.displayName;
const vS = E.forwardRef( ({className: t, children: e, ...n}, i) => x.jsx(mS, {
    ref: i,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...n,
    children: x.jsx("div", {
        className: Nn("pb-4 pt-0", t),
        children: e
    })
}));
vS.displayName = mS.displayName;
function XL({object: t}) {
    var n;
    const e = [{
        key: "full_description",
        title: "Description",
        icon: Zl,
        content: t.full_description
    }, {
        key: "how_it_works",
        title: "How It Works",
        icon: Y0,
        content: t.how_it_works
    }, {
        key: "history",
        title: "History",
        icon: hE,
        content: t.history
    }, {
        key: "cultural_significance",
        title: "Cultural Significance",
        icon: Wd,
        content: t.cultural_significance
    }].filter(i => i.content);
    return e.length === 0 ? null : x.jsx(zt.div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            delay: .2,
            duration: .4
        },
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12",
        children: x.jsxs("div", {
            className: "max-w-3xl",
            children: [x.jsx(YL, {
                type: "multiple",
                defaultValue: [(n = e[0]) == null ? void 0 : n.key],
                className: "space-y-3",
                children: e.map(i => {
                    const o = i.icon;
                    return x.jsxs(gS, {
                        value: i.key,
                        className: "border border-border/60 rounded-xl bg-card px-5 data-[state=open]:border-primary/20",
                        children: [x.jsx(yS, {
                            className: "hover:no-underline py-4",
                            children: x.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [x.jsx("div", {
                                    className: "w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center",
                                    children: x.jsx(o, {
                                        className: "w-4 h-4 text-primary"
                                    })
                                }), x.jsx("span", {
                                    className: "text-sm font-semibold text-foreground",
                                    children: i.title
                                })]
                            })
                        }), x.jsx(vS, {
                            className: "pb-5",
                            children: x.jsx("p", {
                                className: "text-sm text-muted-foreground leading-relaxed pl-11",
                                children: i.content
                            })
                        })]
                    }, i.key)
                }
                )
            }), t.fun_fact && x.jsx("div", {
                className: "mt-6 p-5 rounded-xl border border-primary/20 bg-primary/5",
                children: x.jsxs("div", {
                    className: "flex items-start gap-3",
                    children: [x.jsx(Wd, {
                        className: "w-5 h-5 text-primary shrink-0 mt-0.5"
                    }), x.jsxs("div", {
                        children: [x.jsx("p", {
                            className: "text-xs font-semibold text-primary mb-1",
                            children: "Fun Fact"
                        }), x.jsx("p", {
                            className: "text-sm text-foreground/80 leading-relaxed",
                            children: t.fun_fact
                        })]
                    })]
                })
            })]
        })
    })
}
function os(t) {
    const e = E.useRef(t);
    return E.useEffect( () => {
        e.current = t
    }
    ),
    E.useMemo( () => (...n) => {
        var i;
        return (i = e.current) == null ? void 0 : i.call(e, ...n)
    }
    , [])
}
function JL(t, [e,n]) {
    return Math.min(n, Math.max(e, t))
}
function ZL(t, e) {
    return E.useReducer( (n, i) => e[n][i] ?? n, t)
}
var Xh = "ScrollArea"
  , [wS] = pu(Xh)
  , [eM,rn] = wS(Xh)
  , xS = E.forwardRef( (t, e) => {
    const {__scopeScrollArea: n, type: i="hover", dir: o, scrollHideDelay: l=600, ...u} = t
      , [d,f] = E.useState(null)
      , [p,m] = E.useState(null)
      , [y,w] = E.useState(null)
      , [C,b] = E.useState(null)
      , [k,S] = E.useState(null)
      , [P,L] = E.useState(0)
      , [j,N] = E.useState(0)
      , [V,$] = E.useState(!1)
      , [Y,I] = E.useState(!1)
      , Q = gn(e, xe => f(xe))
      , X = nS(o);
    return x.jsx(eM, {
        scope: n,
        type: i,
        dir: X,
        scrollHideDelay: l,
        scrollArea: d,
        viewport: p,
        onViewportChange: m,
        content: y,
        onContentChange: w,
        scrollbarX: C,
        onScrollbarXChange: b,
        scrollbarXEnabled: V,
        onScrollbarXEnabledChange: $,
        scrollbarY: k,
        onScrollbarYChange: S,
        scrollbarYEnabled: Y,
        onScrollbarYEnabledChange: I,
        onCornerWidthChange: L,
        onCornerHeightChange: N,
        children: x.jsx(On.div, {
            dir: X,
            ...u,
            ref: Q,
            style: {
                position: "relative",
                "--radix-scroll-area-corner-width": P + "px",
                "--radix-scroll-area-corner-height": j + "px",
                ...t.style
            }
        })
    })
}
);
xS.displayName = Xh;
var SS = "ScrollAreaViewport"
  , bS = E.forwardRef( (t, e) => {
    const {__scopeScrollArea: n, children: i, nonce: o, ...l} = t
      , u = rn(SS, n)
      , d = E.useRef(null)
      , f = gn(e, d, u.onViewportChange);
    return x.jsxs(x.Fragment, {
        children: [x.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: o
        }), x.jsx(On.div, {
            "data-radix-scroll-area-viewport": "",
            ...l,
            ref: f,
            style: {
                overflowX: u.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: u.scrollbarYEnabled ? "scroll" : "hidden",
                ...t.style
            },
            children: x.jsx("div", {
                ref: u.onContentChange,
                style: {
                    minWidth: "100%",
                    display: "table"
                },
                children: i
            })
        })]
    })
}
);
bS.displayName = SS;
var jn = "ScrollAreaScrollbar"
  , Jh = E.forwardRef( (t, e) => {
    const {forceMount: n, ...i} = t
      , o = rn(jn, t.__scopeScrollArea)
      , {onScrollbarXEnabledChange: l, onScrollbarYEnabledChange: u} = o
      , d = t.orientation === "horizontal";
    return E.useEffect( () => (d ? l(!0) : u(!0),
    () => {
        d ? l(!1) : u(!1)
    }
    ), [d, l, u]),
    o.type === "hover" ? x.jsx(tM, {
        ...i,
        ref: e,
        forceMount: n
    }) : o.type === "scroll" ? x.jsx(nM, {
        ...i,
        ref: e,
        forceMount: n
    }) : o.type === "auto" ? x.jsx(CS, {
        ...i,
        ref: e,
        forceMount: n
    }) : o.type === "always" ? x.jsx(Zh, {
        ...i,
        ref: e
    }) : null
}
);
Jh.displayName = jn;
var tM = E.forwardRef( (t, e) => {
    const {forceMount: n, ...i} = t
      , o = rn(jn, t.__scopeScrollArea)
      , [l,u] = E.useState(!1);
    return E.useEffect( () => {
        const d = o.scrollArea;
        let f = 0;
        if (d) {
            const p = () => {
                window.clearTimeout(f),
                u(!0)
            }
              , m = () => {
                f = window.setTimeout( () => u(!1), o.scrollHideDelay)
            }
            ;
            return d.addEventListener("pointerenter", p),
            d.addEventListener("pointerleave", m),
            () => {
                window.clearTimeout(f),
                d.removeEventListener("pointerenter", p),
                d.removeEventListener("pointerleave", m)
            }
        }
    }
    , [o.scrollArea, o.scrollHideDelay]),
    x.jsx(Ri, {
        present: n || l,
        children: x.jsx(CS, {
            "data-state": l ? "visible" : "hidden",
            ...i,
            ref: e
        })
    })
}
)
  , nM = E.forwardRef( (t, e) => {
    const {forceMount: n, ...i} = t
      , o = rn(jn, t.__scopeScrollArea)
      , l = t.orientation === "horizontal"
      , u = wu( () => f("SCROLL_END"), 100)
      , [d,f] = ZL("hidden", {
        hidden: {
            SCROLL: "scrolling"
        },
        scrolling: {
            SCROLL_END: "idle",
            POINTER_ENTER: "interacting"
        },
        interacting: {
            SCROLL: "interacting",
            POINTER_LEAVE: "idle"
        },
        idle: {
            HIDE: "hidden",
            SCROLL: "scrolling",
            POINTER_ENTER: "interacting"
        }
    });
    return E.useEffect( () => {
        if (d === "idle") {
            const p = window.setTimeout( () => f("HIDE"), o.scrollHideDelay);
            return () => window.clearTimeout(p)
        }
    }
    , [d, o.scrollHideDelay, f]),
    E.useEffect( () => {
        const p = o.viewport
          , m = l ? "scrollLeft" : "scrollTop";
        if (p) {
            let y = p[m];
            const w = () => {
                const C = p[m];
                y !== C && (f("SCROLL"),
                u()),
                y = C
            }
            ;
            return p.addEventListener("scroll", w),
            () => p.removeEventListener("scroll", w)
        }
    }
    , [o.viewport, l, f, u]),
    x.jsx(Ri, {
        present: n || d !== "hidden",
        children: x.jsx(Zh, {
            "data-state": d === "hidden" ? "hidden" : "visible",
            ...i,
            ref: e,
            onPointerEnter: Yn(t.onPointerEnter, () => f("POINTER_ENTER")),
            onPointerLeave: Yn(t.onPointerLeave, () => f("POINTER_LEAVE"))
        })
    })
}
)
  , CS = E.forwardRef( (t, e) => {
    const n = rn(jn, t.__scopeScrollArea)
      , {forceMount: i, ...o} = t
      , [l,u] = E.useState(!1)
      , d = t.orientation === "horizontal"
      , f = wu( () => {
        if (n.viewport) {
            const p = n.viewport.offsetWidth < n.viewport.scrollWidth
              , m = n.viewport.offsetHeight < n.viewport.scrollHeight;
            u(d ? p : m)
        }
    }
    , 10);
    return bi(n.viewport, f),
    bi(n.content, f),
    x.jsx(Ri, {
        present: i || l,
        children: x.jsx(Zh, {
            "data-state": l ? "visible" : "hidden",
            ...o,
            ref: e
        })
    })
}
)
  , Zh = E.forwardRef( (t, e) => {
    const {orientation: n="vertical", ...i} = t
      , o = rn(jn, t.__scopeScrollArea)
      , l = E.useRef(null)
      , u = E.useRef(0)
      , [d,f] = E.useState({
        content: 0,
        viewport: 0,
        scrollbar: {
            size: 0,
            paddingStart: 0,
            paddingEnd: 0
        }
    })
      , p = _S(d.viewport, d.content)
      , m = {
        ...i,
        sizes: d,
        onSizesChange: f,
        hasThumb: p > 0 && p < 1,
        onThumbChange: w => l.current = w,
        onThumbPointerUp: () => u.current = 0,
        onThumbPointerDown: w => u.current = w
    };
    function y(w, C) {
        return lM(w, u.current, d, C)
    }
    return n === "horizontal" ? x.jsx(rM, {
        ...m,
        ref: e,
        onThumbPositionChange: () => {
            if (o.viewport && l.current) {
                const w = o.viewport.scrollLeft
                  , C = O0(w, d, o.dir);
                l.current.style.transform = `translate3d(${C}px, 0, 0)`
            }
        }
        ,
        onWheelScroll: w => {
            o.viewport && (o.viewport.scrollLeft = w)
        }
        ,
        onDragScroll: w => {
            o.viewport && (o.viewport.scrollLeft = y(w, o.dir))
        }
    }) : n === "vertical" ? x.jsx(sM, {
        ...m,
        ref: e,
        onThumbPositionChange: () => {
            if (o.viewport && l.current) {
                const w = o.viewport.scrollTop
                  , C = O0(w, d);
                l.current.style.transform = `translate3d(0, ${C}px, 0)`
            }
        }
        ,
        onWheelScroll: w => {
            o.viewport && (o.viewport.scrollTop = w)
        }
        ,
        onDragScroll: w => {
            o.viewport && (o.viewport.scrollTop = y(w))
        }
    }) : null
}
)
  , rM = E.forwardRef( (t, e) => {
    const {sizes: n, onSizesChange: i, ...o} = t
      , l = rn(jn, t.__scopeScrollArea)
      , [u,d] = E.useState()
      , f = E.useRef(null)
      , p = gn(e, f, l.onScrollbarXChange);
    return E.useEffect( () => {
        f.current && d(getComputedStyle(f.current))
    }
    , [f]),
    x.jsx(kS, {
        "data-orientation": "horizontal",
        ...o,
        ref: p,
        sizes: n,
        style: {
            bottom: 0,
            left: l.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
            right: l.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
            "--radix-scroll-area-thumb-width": vu(n) + "px",
            ...t.style
        },
        onThumbPointerDown: m => t.onThumbPointerDown(m.x),
        onDragScroll: m => t.onDragScroll(m.x),
        onWheelScroll: (m, y) => {
            if (l.viewport) {
                const w = l.viewport.scrollLeft + m.deltaX;
                t.onWheelScroll(w),
                AS(w, y) && m.preventDefault()
            }
        }
        ,
        onResize: () => {
            f.current && l.viewport && u && i({
                content: l.viewport.scrollWidth,
                viewport: l.viewport.offsetWidth,
                scrollbar: {
                    size: f.current.clientWidth,
                    paddingStart: Jl(u.paddingLeft),
                    paddingEnd: Jl(u.paddingRight)
                }
            })
        }
    })
}
)
  , sM = E.forwardRef( (t, e) => {
    const {sizes: n, onSizesChange: i, ...o} = t
      , l = rn(jn, t.__scopeScrollArea)
      , [u,d] = E.useState()
      , f = E.useRef(null)
      , p = gn(e, f, l.onScrollbarYChange);
    return E.useEffect( () => {
        f.current && d(getComputedStyle(f.current))
    }
    , [f]),
    x.jsx(kS, {
        "data-orientation": "vertical",
        ...o,
        ref: p,
        sizes: n,
        style: {
            top: 0,
            right: l.dir === "ltr" ? 0 : void 0,
            left: l.dir === "rtl" ? 0 : void 0,
            bottom: "var(--radix-scroll-area-corner-height)",
            "--radix-scroll-area-thumb-height": vu(n) + "px",
            ...t.style
        },
        onThumbPointerDown: m => t.onThumbPointerDown(m.y),
        onDragScroll: m => t.onDragScroll(m.y),
        onWheelScroll: (m, y) => {
            if (l.viewport) {
                const w = l.viewport.scrollTop + m.deltaY;
                t.onWheelScroll(w),
                AS(w, y) && m.preventDefault()
            }
        }
        ,
        onResize: () => {
            f.current && l.viewport && u && i({
                content: l.viewport.scrollHeight,
                viewport: l.viewport.offsetHeight,
                scrollbar: {
                    size: f.current.clientHeight,
                    paddingStart: Jl(u.paddingTop),
                    paddingEnd: Jl(u.paddingBottom)
                }
            })
        }
    })
}
)
  , [iM,ES] = wS(jn)
  , kS = E.forwardRef( (t, e) => {
    const {__scopeScrollArea: n, sizes: i, hasThumb: o, onThumbChange: l, onThumbPointerUp: u, onThumbPointerDown: d, onThumbPositionChange: f, onDragScroll: p, onWheelScroll: m, onResize: y, ...w} = t
      , C = rn(jn, n)
      , [b,k] = E.useState(null)
      , S = gn(e, Q => k(Q))
      , P = E.useRef(null)
      , L = E.useRef("")
      , j = C.viewport
      , N = i.content - i.viewport
      , V = os(m)
      , $ = os(f)
      , Y = wu(y, 10);
    function I(Q) {
        if (P.current) {
            const X = Q.clientX - P.current.left
              , xe = Q.clientY - P.current.top;
            p({
                x: X,
                y: xe
            })
        }
    }
    return E.useEffect( () => {
        const Q = X => {
            const xe = X.target;
            (b == null ? void 0 : b.contains(xe)) && V(X, N)
        }
        ;
        return document.addEventListener("wheel", Q, {
            passive: !1
        }),
        () => document.removeEventListener("wheel", Q, {
            passive: !1
        })
    }
    , [j, b, N, V]),
    E.useEffect($, [i, $]),
    bi(b, Y),
    bi(C.content, Y),
    x.jsx(iM, {
        scope: n,
        scrollbar: b,
        hasThumb: o,
        onThumbChange: os(l),
        onThumbPointerUp: os(u),
        onThumbPositionChange: $,
        onThumbPointerDown: os(d),
        children: x.jsx(On.div, {
            ...w,
            ref: S,
            style: {
                position: "absolute",
                ...w.style
            },
            onPointerDown: Yn(t.onPointerDown, Q => {
                Q.button === 0 && (Q.target.setPointerCapture(Q.pointerId),
                P.current = b.getBoundingClientRect(),
                L.current = document.body.style.webkitUserSelect,
                document.body.style.webkitUserSelect = "none",
                C.viewport && (C.viewport.style.scrollBehavior = "auto"),
                I(Q))
            }
            ),
            onPointerMove: Yn(t.onPointerMove, I),
            onPointerUp: Yn(t.onPointerUp, Q => {
                const X = Q.target;
                X.hasPointerCapture(Q.pointerId) && X.releasePointerCapture(Q.pointerId),
                document.body.style.webkitUserSelect = L.current,
                C.viewport && (C.viewport.style.scrollBehavior = ""),
                P.current = null
            }
            )
        })
    })
}
)
  , Xl = "ScrollAreaThumb"
  , TS = E.forwardRef( (t, e) => {
    const {forceMount: n, ...i} = t
      , o = ES(Xl, t.__scopeScrollArea);
    return x.jsx(Ri, {
        present: n || o.hasThumb,
        children: x.jsx(oM, {
            ref: e,
            ...i
        })
    })
}
)
  , oM = E.forwardRef( (t, e) => {
    const {__scopeScrollArea: n, style: i, ...o} = t
      , l = rn(Xl, n)
      , u = ES(Xl, n)
      , {onThumbPositionChange: d} = u
      , f = gn(e, y => u.onThumbChange(y))
      , p = E.useRef(void 0)
      , m = wu( () => {
        p.current && (p.current(),
        p.current = void 0)
    }
    , 100);
    return E.useEffect( () => {
        const y = l.viewport;
        if (y) {
            const w = () => {
                if (m(),
                !p.current) {
                    const C = uM(y, d);
                    p.current = C,
                    d()
                }
            }
            ;
            return d(),
            y.addEventListener("scroll", w),
            () => y.removeEventListener("scroll", w)
        }
    }
    , [l.viewport, m, d]),
    x.jsx(On.div, {
        "data-state": u.hasThumb ? "visible" : "hidden",
        ...o,
        ref: f,
        style: {
            width: "var(--radix-scroll-area-thumb-width)",
            height: "var(--radix-scroll-area-thumb-height)",
            ...i
        },
        onPointerDownCapture: Yn(t.onPointerDownCapture, y => {
            const C = y.target.getBoundingClientRect()
              , b = y.clientX - C.left
              , k = y.clientY - C.top;
            u.onThumbPointerDown({
                x: b,
                y: k
            })
        }
        ),
        onPointerUp: Yn(t.onPointerUp, u.onThumbPointerUp)
    })
}
);
TS.displayName = Xl;
var ep = "ScrollAreaCorner"
  , PS = E.forwardRef( (t, e) => {
    const n = rn(ep, t.__scopeScrollArea)
      , i = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && i ? x.jsx(aM, {
        ...t,
        ref: e
    }) : null
}
);
PS.displayName = ep;
var aM = E.forwardRef( (t, e) => {
    const {__scopeScrollArea: n, ...i} = t
      , o = rn(ep, n)
      , [l,u] = E.useState(0)
      , [d,f] = E.useState(0)
      , p = !!(l && d);
    return bi(o.scrollbarX, () => {
        var y;
        const m = ((y = o.scrollbarX) == null ? void 0 : y.offsetHeight) || 0;
        o.onCornerHeightChange(m),
        f(m)
    }
    ),
    bi(o.scrollbarY, () => {
        var y;
        const m = ((y = o.scrollbarY) == null ? void 0 : y.offsetWidth) || 0;
        o.onCornerWidthChange(m),
        u(m)
    }
    ),
    p ? x.jsx(On.div, {
        ...i,
        ref: e,
        style: {
            width: l,
            height: d,
            position: "absolute",
            right: o.dir === "ltr" ? 0 : void 0,
            left: o.dir === "rtl" ? 0 : void 0,
            bottom: 0,
            ...t.style
        }
    }) : null
}
);
function Jl(t) {
    return t ? parseInt(t, 10) : 0
}
function _S(t, e) {
    const n = t / e;
    return isNaN(n) ? 0 : n
}
function vu(t) {
    const e = _S(t.viewport, t.content)
      , n = t.scrollbar.paddingStart + t.scrollbar.paddingEnd
      , i = (t.scrollbar.size - n) * e;
    return Math.max(i, 18)
}
function lM(t, e, n, i="ltr") {
    const o = vu(n)
      , l = o / 2
      , u = e || l
      , d = o - u
      , f = n.scrollbar.paddingStart + u
      , p = n.scrollbar.size - n.scrollbar.paddingEnd - d
      , m = n.content - n.viewport
      , y = i === "ltr" ? [0, m] : [m * -1, 0];
    return RS([f, p], y)(t)
}
function O0(t, e, n="ltr") {
    const i = vu(e)
      , o = e.scrollbar.paddingStart + e.scrollbar.paddingEnd
      , l = e.scrollbar.size - o
      , u = e.content - e.viewport
      , d = l - i
      , f = n === "ltr" ? [0, u] : [u * -1, 0]
      , p = JL(t, f);
    return RS([0, u], [0, d])(p)
}
function RS(t, e) {
    return n => {
        if (t[0] === t[1] || e[0] === e[1])
            return e[0];
        const i = (e[1] - e[0]) / (t[1] - t[0]);
        return e[0] + i * (n - t[0])
    }
}
function AS(t, e) {
    return t > 0 && t < e
}
var uM = (t, e= () => {}
) => {
    let n = {
        left: t.scrollLeft,
        top: t.scrollTop
    }
      , i = 0;
    return (function o() {
        const l = {
            left: t.scrollLeft,
            top: t.scrollTop
        }
          , u = n.left !== l.left
          , d = n.top !== l.top;
        (u || d) && e(),
        n = l,
        i = window.requestAnimationFrame(o)
    }
    )(),
    () => window.cancelAnimationFrame(i)
}
;
function wu(t, e) {
    const n = os(t)
      , i = E.useRef(0);
    return E.useEffect( () => () => window.clearTimeout(i.current), []),
    E.useCallback( () => {
        window.clearTimeout(i.current),
        i.current = window.setTimeout(n, e)
    }
    , [n, e])
}
function bi(t, e) {
    const n = os(e);
    Si( () => {
        let i = 0;
        if (t) {
            const o = new ResizeObserver( () => {
                cancelAnimationFrame(i),
                i = window.requestAnimationFrame(n)
            }
            );
            return o.observe(t),
            () => {
                window.cancelAnimationFrame(i),
                o.unobserve(t)
            }
        }
    }
    , [t, n])
}
var NS = xS
  , cM = bS
  , dM = PS;
const OS = E.forwardRef( ({className: t, children: e, ...n}, i) => x.jsxs(NS, {
    ref: i,
    className: Nn("relative overflow-hidden", t),
    ...n,
    children: [x.jsx(cM, {
        className: "h-full w-full rounded-[inherit]",
        children: e
    }), x.jsx(tp, {}), x.jsx(dM, {})]
}));
OS.displayName = NS.displayName;
const tp = E.forwardRef( ({className: t, orientation: e="vertical", ...n}, i) => x.jsx(Jh, {
    ref: i,
    orientation: e,
    className: Nn("flex touch-none select-none transition-colors", e === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", e === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", t),
    ...n,
    children: x.jsx(TS, {
        className: "relative flex-1 rounded-full bg-border"
    })
}));
tp.displayName = Jh.displayName;
function fM({objects: t}) {
    return !t || t.length === 0 ? null : x.jsxs(zt.div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            delay: .3,
            duration: .4
        },
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16",
        children: [x.jsx("h2", {
            className: "text-lg font-bold text-foreground mb-6",
            children: "Related Objects"
        }), x.jsxs(OS, {
            className: "w-full",
            children: [x.jsx("div", {
                className: "flex gap-4 pb-4",
                children: t.map(e => x.jsxs(Cs, {
                    to: `/Object?id=${e.id}`,
                    className: "group flex-shrink-0 w-56 rounded-xl border border-border/60 bg-card overflow-hidden hover:border-primary/30 transition-all duration-200",
                    children: [x.jsx("div", {
                        className: "aspect-[4/3] bg-secondary/30 overflow-hidden",
                        children: e.image_url ? x.jsx("img", {
                            src: e.image_url,
                            alt: e.name,
                            className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        }) : x.jsx("div", {
                            className: "w-full h-full flex items-center justify-center",
                            children: x.jsx("div", {
                                className: "w-12 h-12 rounded-xl bg-primary/10"
                            })
                        })
                    }), x.jsxs("div", {
                        className: "p-3 flex items-center justify-between gap-2",
                        children: [x.jsxs("div", {
                            className: "min-w-0",
                            children: [x.jsx("p", {
                                className: "text-xs font-semibold text-foreground truncate group-hover:text-primary transition-colors",
                                children: e.name
                            }), x.jsx("p", {
                                className: "text-[11px] text-muted-foreground truncate",
                                children: e.category_name
                            })]
                        }), x.jsx(Q0, {
                            className: "w-3.5 h-3.5 text-muted-foreground group-hover:text-primary shrink-0 transition-colors"
                        })]
                    })]
                }, e.id))
            }), x.jsx(tp, {
                orientation: "horizontal"
            })]
        })]
    })
}
function hM() {
    const e = new URLSearchParams(window.location.search).get("id")
      , {data: n, isLoading: i} = bs({
        queryKey: ["object", e],
        queryFn: () => nn.entities.EncyclopediaObject.filter({
            id: e
        }),
        select: l => l[0],
        enabled: !!e
    })
      , {data: o=[]} = bs({
        queryKey: ["related-objects", n == null ? void 0 : n.category_id],
        queryFn: () => nn.entities.EncyclopediaObject.filter({
            category_id: n.category_id
        }),
        select: l => l.filter(u => u.id !== e).slice(0, 8),
        enabled: !!(n != null && n.category_id)
    });
    return i ? x.jsx("div", {
        className: "min-h-screen flex items-center justify-center",
        children: x.jsx("div", {
            className: "w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin"
        })
    }) : n ? x.jsxs("div", {
        className: "min-h-screen",
        children: [x.jsx(lL, {
            object: n
        }), x.jsx(XL, {
            object: n
        }), x.jsx(fM, {
            objects: o
        })]
    }) : x.jsx("div", {
        className: "min-h-screen flex items-center justify-center",
        children: x.jsx("p", {
            className: "text-muted-foreground",
            children: "Object not found"
        })
    })
}
const pM = () => {
    const {isLoadingAuth: t, isLoadingPublicSettings: e, authError: n, navigateToLogin: i} = EA();
    if (e || t)
        return x.jsx("div", {
            className: "fixed inset-0 flex items-center justify-center",
            children: x.jsx("div", {
                className: "w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"
            })
        });
    if (n) {
        if (n.type === "user_not_registered")
            return x.jsx(kA, {});
        if (n.type === "auth_required")
            return i(),
            null
    }
    return x.jsxs(rP, {
        children: [x.jsxs(rs, {
            element: x.jsx(PA, {}),
            children: [x.jsx(rs, {
                path: "/",
                element: x.jsx(eP, {
                    to: "/Home",
                    replace: !0
                })
            }), x.jsx(rs, {
                path: "/Home",
                element: x.jsx(iL, {})
            }), x.jsx(rs, {
                path: "/Archive",
                element: x.jsx(aL, {})
            }), x.jsx(rs, {
                path: "/Object",
                element: x.jsx(hM, {})
            })]
        }), x.jsx(rs, {
            path: "*",
            element: x.jsx(bA, {})
        })]
    })
}
;
function mM() {
    return x.jsx(CA, {
        children: x.jsxs(Gk, {
            client: aT,
            children: [x.jsx(cP, {
                children: x.jsx(pM, {})
            }), x.jsx(Ck, {})]
        })
    })
}
FC.createRoot(document.getElementById("root")).render(x.jsx(mM, {}));
