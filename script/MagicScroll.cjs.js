"use strict";
class MagicScroll {
  constructor(t) {
    Object.assign(this, t),
      this.target ||
        (this.target =
          document.scrollingElement ||
          document.documentElement ||
          document.body.parentNode ||
          document.body),
      (this.speed = this.speed || 80),
      (this.smooth = this.smooth || 12),
      (this.pos = this.current || 0),
      (this.frame =
        this.target === document.body && document.documentElement
          ? document.documentElement
          : this.target),
      (this.min = this.min || 0),
      (this.max = this.target.scrollHeight - this.target.clientHeight),
      (this.moving = !1),
      (this.target.scrollTop = this.pos),
      this.target.addEventListener("mousewheel", s, { passive: !1 }),
      this.target.addEventListener("DOMMouseScroll", s, { passive: !1 }),
      this.target.addEventListener(
        "scroll",
        t => {
          this.moving || (this.pos = t.target.scrollTop);
        },
        { passive: !1 }
      );
    const e = this;
    function s(t) {
      var s = e.normalizeWheelDelta(t);
      (e.pos += -s * e.speed),
        (e.pos = Math.max(0, Math.min(e.pos, e.max))),
        e.moving || e.update();
    }
  }
  normalizeWheelDelta(t) {
    return t.detail
      ? t.wheelDelta
        ? (t.wheelDelta / t.detail / 40) * (t.detail > 0 ? 1 : -1)
        : -t.detail / 3
      : t.wheelDelta / 120;
  }
  update() {
    this.moving = !0;
    var t = (this.pos - this.target.scrollTop) / this.smooth;
    (this.target.scrollTop += t),
      this.onUpdate && this.onUpdate(this.target.scrollTop);
    const e = this;
    Math.abs(t) > 1
      ? requestFrame(() => {
          e.update();
        })
      : (this.moving = !1);
  }
}
var requestFrame =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function (t) {
    window.setTimeout(t, 1e3);
  };
module.exports = MagicScroll;
