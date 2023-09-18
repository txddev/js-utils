const r = /* @__PURE__ */ new WeakMap();
class c {
  static put(t, i, n) {
    r.has(t) || r.set(t, /* @__PURE__ */ new Map()), r.get(t).set(i, n);
  }
  static get(t, i) {
    return r.get(t).get(i);
  }
  static has(t, i) {
    return r.has(t) && r.get(t).has(i);
  }
  static remove(t, i) {
    var n = r.get(t).delete(i);
    return r.get(t).size !== 0 && r.delete(t), n;
  }
  static lock(t, i, n) {
    if (!c.has(t, i)) {
      c.put(t, i, !0);
      const u = n();
      return u !== void 0 && c.put(t, i, u), u;
    }
    return !1;
  }
  static async lockAsync(t, i, n) {
    if (!c.has(t, i)) {
      c.put(t, i, !0);
      const u = await n();
      return u !== void 0 && c.put(t, i, u), u;
    }
    return !1;
  }
}
({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 }).DATASTORE_DEBUG && (window.__Store = r);
function o(s) {
  if (s == null)
    return { top: 0, left: 0, width: null, height: null };
  let t = s.getBoundingClientRect();
  return {
    top: t.top + window.scrollY,
    left: t.left + window.scrollX,
    width: t.width,
    height: t.height
  };
}
function f(s, t) {
  t === void 0 && (t = window.document);
  for (var i = [], n = s.parentNode; n != null && n instanceof HTMLElement && !(t instanceof HTMLElement && n === t) && !(typeof t == "string" && n.matches(t)); ) {
    var u = n;
    i.push(u), n = u.parentNode;
  }
  return n != null && i.push(n), i;
}
function e(s, t) {
  return t = t || document.createElement("div"), s.after(t), t.appendChild(s);
}
function a(s) {
  var t = Array.prototype.slice.call(s.childNodes);
  t.forEach(function(i) {
    s.removeChild(i);
  });
}
export {
  c as DataStore,
  a as empty,
  f as getParents,
  o as offset,
  e as wrap
};
