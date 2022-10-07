const n = /* @__PURE__ */ new WeakMap();
class o {
  static put(t, i, r) {
    n.has(t) || n.set(t, /* @__PURE__ */ new Map()), n.get(t).set(i, r);
  }
  static get(t, i) {
    return n.get(t).get(i);
  }
  static has(t, i) {
    return n.has(t) && n.get(t).has(i);
  }
  static remove(t, i) {
    var r = n.get(t).delete(i);
    return n.get(t).size !== 0 && n.delete(t), r;
  }
  static lock(t, i, r) {
    return o.has(t, i) ? !1 : (o.put(t, i, !0), r());
  }
}
({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 }).DATASTORE_DEBUG && (window.__Store = n);
function u(e) {
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
  for (var i = [], r = e.parentNode; r != null && r !== t; ) {
    var s = r;
    i.push(s), r = s.parentNode;
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
  o as DataStore,
  d as empty,
  a as getParents,
  u as offset,
  c as wrap
};
