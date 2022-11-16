const s = /* @__PURE__ */ new WeakMap();
class r {
  static put(t, i, n) {
    s.has(t) || s.set(t, /* @__PURE__ */ new Map()), s.get(t).set(i, n);
  }
  static get(t, i) {
    return s.get(t).get(i);
  }
  static has(t, i) {
    return s.has(t) && s.get(t).has(i);
  }
  static remove(t, i) {
    var n = s.get(t).delete(i);
    return s.get(t).size !== 0 && s.delete(t), n;
  }
  static lock(t, i, n) {
    return r.has(t, i) ? !1 : (r.put(t, i, !0), n());
  }
}
({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 }).DATASTORE_DEBUG && (window.__Store = s);
function o(e) {
  if (e == null)
    return { top: 0, left: 0, width: null, height: null };
  let t = e.getBoundingClientRect();
  return {
    top: t.top + window.scrollY,
    left: t.left + window.scrollX,
    width: t.width,
    height: t.height
  };
}
function a(e, t) {
  t === void 0 && (t = window.document);
  for (var i = [], n = e.parentNode; n != null && t instanceof HTMLElement && n !== t && t instanceof String && !n.matches(t); ) {
    var u = n;
    i.push(u), n = u.parentNode;
  }
  return i.push(t), i;
}
function c(e, t) {
  return t = t || document.createElement("div"), e.after(t), t.appendChild(e);
}
function d(e) {
  var t = Array.prototype.slice.call(e.childNodes);
  t.forEach(function(i) {
    e.removeChild(i);
  });
}
export {
  r as DataStore,
  d as empty,
  a as getParents,
  o as offset,
  c as wrap
};
