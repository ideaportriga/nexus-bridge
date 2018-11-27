function Namespace(e) {
  var t = e.split("."),
      n = SiebelApp,
      r;
  t[0] === "SiebelApp" && (t = t.slice(1));
  var i = t.length;
  for (r = 0; r < i; r += 1) typeof n[t[r]] == "undefined" && (n[t[r]] = {}), n = n[t[r]];
  return n
}
typeof SiebelApp.Utils == "undefined" && Namespace("SiebelApp.Utils"), SiebelApp.Utils.Trim = function(e) {
  return typeof e == "string" && (e = e.replace(/^\s+|\s+$/g, "")), e
}, SiebelApp.Utils.LTrim = function(e) {
  return e.replace(/^\s+/, "")
}, SiebelApp.Utils.RTrim = function(e) {
  return e.replace(/\s+$/, "")
}, SiebelApp.Utils.Expand = function(e, t, n) {
  var r = e.indexOf(t);
  if (r < 0) return e;
  var i = this.Trim(e.substring(0, r - 1)),
      s = this.Trim(e.substring(r)),
      o = n - s.length,
      u = new String("                                              "),
      a = u.substring(0, o - i.length),
      f = i.concat(a, s);
  return f
}, SiebelApp.Utils.DecodeFromQueryString = function(e, t) {
  var n = CCFMiscUtil_CreatePropSet(),
      r = e.split("?");
  r.length == 2 && (e = r[1]);
  var i;
  r = e.split("&");
  for (var s = 0, o = r.length; s < o; s++) {
      if (typeof r[s] == "function") continue;
      var u = r[s].split("=");
      u.length == 2 && (i = t && u[0] === "SWERowId0" ? this.EncodeURL(u[1]) : u[1], n.SetProperty(this.UrlDecode(u[0]), this.UrlDecode(i)))
  }
  return n
}, SiebelApp.Utils.UrlDecode = function(e) {
  return e = e.replace(/\+/g, " "), e
}, SiebelApp.Utils.EncodeURL = function(e) {
  return e = e.replace(/\+/g, "%2b"), e
}, SiebelApp.Utils.DecodeURL = function(e) {
  return e = e.replace(/%2b/g, "+"), e = e.replace(/%2f/g, "/"), e = e.replace(/%3a/g, ":"), e
}, SiebelApp.Utils.EncodeToQueryString = function(e, t) {
  var n = SiebelApp.Constants,
      r = "",
      i = e.EnumProperties(!0),
      s = 0,
      o = e.GetPropertyCount(),
      u, a;
  t = typeof t == "undefined";
  do s++, typeof e.GetProperty(i) != "function" && (u = t ? URLEncode(i) : i, a = t ? URLEncode(e.GetProperty(i)) : e.GetProperty(i), r += u + n.get("SWE_ARG_EQUAL") + a + (s < o ? "&" : "")); while (i = e.EnumProperties(!1));
  return r
}, SiebelApp.Utils.IsEmpty = function(e) {
  return e === undefined || e === null || e === "undefined" || e === "null" || e !== 0 && e !== !1 && e == ""
}, SiebelApp.Utils.GetstyleSheetPropVal = function(e, t, n) {
  var r = document.styleSheets;
  for (var i = 0, s = r.length; i < s; i++) {
      var o = r[i];
      if (typeof o.href == "string" && o.href.match(e) != null) {
          var u = o.rules ? o.rules : o.cssRules;
          if (u)
              for (var a = 0, f = u.length; a < f; a++)
                  if (u[a].selectorText == t) return u[a].style[n];
          break
      }
  }
  return null
}, SiebelApp.Utils.IsTrue = function(e) {
  var t = "";
  if (e != "undefined" && e != undefined && e != null) {
      var n = "" + e;
      n != "" && (t = n.toLowerCase())
  }
  return t == "on" || t == "1" || t == "true" || t == "y" || t == "t"
}, SiebelApp.Utils.DefineConstants = function() {
  var e = {},
      t = Object.prototype.hasOwnProperty;
  return {
      set: function(t, n) {
          return this.isDefined(t) ? !1 : (e[t] = n, !0)
      },
      isDefined: function(n) {
          return t.call(e, n)
      },
      get: function(t) {
          return this.isDefined(t) ? e[t] : null
      }
  }
}, SiebelApp.Utils.Curry = function(e) {
  var t = Array.prototype.slice,
      n = t.call(arguments, 1);
  return function() {
      var r = t.call(arguments);
      e.apply(null, n.concat(r))
  }
}, SiebelApp.Utils.Inherit = function(e, t) {
  return t.prototype = e, new t
}, SiebelApp.Utils.InheritCtor = function(e, t) {
  var n = t.prototype,
      r = function() {};
  r.prototype = e.prototype || {}, t.prototype = new r, t.prototype.superclass = e.prototype;
  for (var i in n) t.prototype[i] = n[i] || t.prototype[i];
  return t
}, SiebelApp.Utils.FieldDataToSearch = function(e) {
  return e
}, SiebelApp.Utils.returnFalse = function() {
  return !1
}, SiebelApp.Utils.IndexOf = function(e, t) {
  if (e == null) throw new TypeError;
  var n = Object(e),
      r = n.length >>> 0;
  if (r === 0) return -1;
  var i = 0;
  arguments.length > 0 && (i = Number(arguments[2]), i != i ? i = 0 : i != 0 && i != Infinity && i != -Infinity && (i = (i > 0 || -1) * Math.floor(Math.abs(i))));
  if (i >= r) return -1;
  var s = i >= 0 ? i : Math.max(r - Math.abs(i), 0);
  for (; s < r; s++)
      if (s in n && n[s] === t) return s;
  return -1
}, SiebelApp.Utils.ControlFieldEncode = function(e) {
  var t = e;
  return t.replace("%73%63%72%69%70%74%3A", "\\%73\\%63\\%72\\%69\\%70\\%74\\%3A"), t.replace("%3C%73%63%72%69%70%74%3E", "\\%3C\\%73\\%63\\%72\\%69\\%70\\%74\\%3E"), t.replace("%3C%2F%73%63%72%69%70%74", "\\%3C\\%2F\\%73\\%63\\%72\\%69\\%70\\%74"), t.replace("%3C%6F%62%6A%65%63%74", "\\%3C\\%6F\\%62\\%6A\\%65\\%63\\%74"), t.replace("%3C%61%70%70%6C%65%74", "\\%3C\\%61\\%70\\%70\\%6C\\%65\\%74"), t.replace("script:", "%73%63%72%69%70%74%3A"), t.replace("<script>", "%3C%73%63%72%69%70%74%3E"), t.replace("</script", "%3C%2F%73%63%72%69%70%74"), t.replace("<object", "%3C%6F%62%6A%65%63%74"), t.replace("<applet", "%3C%61%70%70%6C%65%74"), t
}, SiebelApp.Utils.AppendArgsToURL = function(e, t, n, r) {
  var i = SiebelApp.Constants;
  r === undefined && (r = !1);
  if (r || !r && e.indexOf(t + i.get("SWE_ARG_EQUAL")) === -1) e += (this.IsEmpty(e) ? "" : i.get("SWE_ARG_DELIM")) + t + i.get("SWE_ARG_EQUAL") + n;
  return e
}, SiebelApp.Utils.ReadFilesFromPropSet = function(e, t) {
  var n = SiebelApp.Constants.get("SWE_PST_CLIENT_DESCRIPTOR_JSFILES"),
      r = SiebelApp.Constants.get("SWE_PST_CLIENT_DESCRIPTOR_THEMEFILES"),
      i = e.GetProperty(n),
      s = e.GetProperty(r);
  if (!this.IsEmpty(s)) {
      var o = [],
          u = t.GetProperty("ObjectName") ? t.GetProperty("ObjectName").replace(/ /g, "_") : "";
      u = u + "_" + t.GetProperty("ObjectType"), CCFMiscUtil_StringToArray(s, o), SiebelApp.ThemeManager.flipTheme(u, o)
  }
  if (!this.IsEmpty(i)) {
      var a = [];
      CCFMiscUtil_StringToArray(i, a);
      for (var f = 0, l = a.length; f < l; f++) a[f].substr(-3) === ".js" && (a[f] = a[f].substr(0, a[f].length - 3));
      return a
  }
}, SiebelApp.Utils.GetFileInfoFromPropSet = function(e) {
  var t = SiebelApp.Constants.get("SWE_PST_CLIENT_DESCRIPTOR_INFO"),
      n = [],
      r = e.EnumChildren(!0);
  do
      if (!this.IsEmpty(r)) {
          r.GetType() === t && (n = n.concat(this.ReadFilesFromPropSet(r, e)));
          var i = r.EnumChildren(!0);
          do
              if (!this.IsEmpty(i)) {
                  i.GetType() === t && (n = n.concat(this.ReadFilesFromPropSet(i, r)));
                  var s = i.EnumChildren(!0);
                  do !this.IsEmpty(s) && s.GetType() === t && (n = n.concat(this.ReadFilesFromPropSet(s, i))); while (s = i.EnumChildren(!1))
              } while (i = r.EnumChildren(!1))
      } while (r = e.EnumChildren(!1));
  return n
}, SiebelApp.Utils.PrepareModuleInfo = function(e, t) {
  var n = SiebelApp.Constants.get("SWE_PST_CLIENT_DESCRIPTOR_INFO"),
      r = SiebelApp.Constants.get("SWE_PST_CLIENT_DESCRIPTOR_JSFILES"),
      i = SiebelApp.Constants.get("SWE_PST_CLIENT_DESCRIPTOR_THEMEFILES"),
      s = SiebelApp.Constants.get("SWE_PROP_VALUE"),
      o = SiebelApp.Constants.get("SWE_UIDEF_PM_CTR"),
      u = SiebelApp.Constants.get("SWE_UIDEF_PR_CTR"),
      a = [],
      f = [],
      l = [],
      c = e.EnumChildren(!0);
  do
      if (!this.IsEmpty(c)) {
          c.GetType() == n && (f.push(c), l.push(e));
          var h =
              c.EnumChildren(!0);
          do
              if (!this.IsEmpty(h)) {
                  var p = h.EnumChildren(!0);
                  do !this.IsEmpty(p) && p.GetType() == n && (f.push(p), l.push(h)); while (p = h.EnumChildren(!1));
                  h.GetType() == n && (f.push(h), l.push(c))
              } while (h = c.EnumChildren(!1))
      } while (c = e.EnumChildren(!1));
  for (var d = 0, v = f.length; d < v; d++) {
      var m = f[d].GetProperty(r),
          g = f[d].GetProperty(i);
      if (!this.IsEmpty(g) && t !== !1) {
          var y = [];
          CCFMiscUtil_StringToArray(g, y);
          var b = f[d].GetProperty("ObjectName") ? f[d].GetProperty("ObjectName").replace(/ /g, "_") : "";
          b = b + "_" + f[d].GetProperty("ObjectType"), SiebelApp.ThemeManager.flipTheme(b, y)
      }
      if (!this.IsEmpty(m)) {
          var w = [],
              E = [];
          CCFMiscUtil_StringToArray(m, w);
          for (var S = 0, x = w.length; S < x; S++) w[S].substr(-3) === ".js" && (w[S] = w[S].substr(0, w[S].length - 3)), S === 0 ? l[d].SetPropertyStr(o, w[S]) : S === 1 && l[d].SetPropertyStr(u, w[S]), require.defined(w[S]) || E.push(w[S]);
          a = a.concat(E)
      }
  }
  return a
}, SiebelApp.Utils.TokenizeString = function(e, t) {
  var n = 0,
      r = [],
      i = 0,
      s = e.length,
      o = 0;
  for (var u = 0; u < s; u++)
      if (t.indexOf(e[u]) != -1) {
          var a = e.substring(o, u);
          r[i++] = a, o = u + 1
      } return o < s && (r[i++] = e.substring(o, s)), r
}, SiebelApp.Utils.FindIndexOfFrom = function(e, t, n) {
  if (!e) return -1;
  var r = e.substring(n),
      i = r.indexOf(t);
  return i != -1 ? n + i : i
}, SiebelApp.Utils.FormatString = function(e, t) {
  var n = t.length;
  if (e && n > 0)
      for (var r = 0; r < n; r++) e = e.replace("%" + (r + 1), t[r]);
  return e
}, SiebelApp.Utils.ToISOFormat = function(e, t, n, r) {
  n = n || "";
  var i = SiebelApp.S_App.LocaleObject,
      s = n.indexOf("hh") === 0 || n.indexOf("HH") === 0 || n.indexOf("p ") === 0,
      o = "",
      u = "";
  return t = t || !1, s = s || !1, s || (o = i.GetDateFormat(), u = SiebelApp.Constants.get("ISO_DATE_FORMAT")), t && (u = SiebelApp.Constants.get("ISO8601_DATETIME_FORMAT"), o += (o ? " " : "") + i.GetTimeFormat()), r ? i.GetStringFromDateTimeZone(e, o, u, !0) : i.GetStringFromDateTime(e, o, u, !0)
}, SiebelApp.Utils.IsISO = function(e, t) {
  var n;
  return e === SiebelApp.Constants.get("SWE_CTRL_DATE_PICK") ? n = /(\d{4})-(\d{2})-(\d{2})/ : n = /(\d{4})-(\d{2})-(\d{2}) (\d\d):(\d\d):(\d\d)/, t.match(n) === null ? !1 : !0
}, SiebelApp.Utils.GetISODateTime = function(e, t) {
  var n;
  if (e && e.match(/[><=!&|]/g)) return e;
  if (this.IsEmpty(e)) n = new Date;
  else {
      e = this.Trim(e);
      var r = e.split(" ").length;
      t ? r > 1 ? n = new Date(e) : n = new Date(e.split(" ")[0].toString() + " 12:00:00 AM") : n = new Date(e.split(" ")[0].toString() + " 12:00:00 AM");
      if (isNaN(n.getDate())) {
          var i = e.replace(/\d/g, "")[0];
          if ("." === i) e = e.replace(/\./g, "/");
          else {
              var s = RegExp(i, "g");
              e = e.replace(s, "/")
          }
          t ? r > 1 ? n = new Date(e) : n = new Date(e.split(" ")[0].toString() + " 12:00:00 AM") : n = new Date(e.split(" ")[0].toString() + " 12:00:00 AM")
      }
  }
  var o;
  return consts.get("JS_INVALID_DATE") === n.toString() ? o = consts.get("JS_INVALID_DATE") : (o = n.getFullYear().toString() + "-" + this.BloatString((n.getMonth() + 1).toString(), "0", 2) + "-" + this.BloatString(n.getDate().toString(), "0", 2), t && (o += " " + this.BloatString(n.getHours().toString(), "0", 2) + ":" + this.BloatString(n.getMinutes().toString(), "0", 2) + ":" + this.BloatString(n.getSeconds().toString(), "0", 2))), o
}, SiebelApp.Utils.BloatString = function(e, t, n) {
  if (e && t) {
      e = e.toString(), t = t.toString();
      var r = e.length;
      if (r >= n || t.length > 1) return e;
      for (var i = r; i < n; i++) e = t + e
  }
  return e
}, SiebelApp.Utils.GetEventNType = function(e) {
  var t = 0;
  return e && (e.altKey && (t |= 4), e.ctrlKey && (t |= 1), e.shiftKey && (t |= 2)), t
}, SiebelApp.Utils.BigNumberToString = function(e) {
  if (typeof e != "number") return "";
  var t = e.toExponential().replace(".", "").split("e"),
      n = parseInt(t[1], 10),
      r = t[0],
      i, s = "";
  if (n >= 0 && r.length > n) n++, i = r.substring(0, n) + "." + r.substring(n);
  else if (n < 0) {
      for (var o = n + 1; o < 0; o++) s += "0";
      i = "0." + s + r
  } else {
      n = n - r.length + 1;
      while (n > s.length) s += "0";
      i = r + s
  }
  return i
}, SiebelApp.Utils.SearchUtil_ArrayToString = function(e) {
  var t, n = "",
      r = e.length;
  n += r + "#";
  for (t = 0; t < r; t++) e[t] === null || e[t] === "" ? n += "0*" : n += e[t].length + "#" + e[t];
  return n
}, SiebelApp.Utils.StringWithLengthToArray = function(e, t) {
  var n, r, i, s, o, u;
  if (t == null || t.length > 0) return !1;
  if (e == null || e == "") return !0;
  o = e.indexOf("#", 0), i = parseInt(e.substr(0, o)), e = e.substr(o + 1, e.length - 1), n = 0;
  while (n < i) o = e.indexOf("#", 0), r = parseInt(e.substr(0, o)), e = e.substr(o + 1, e.length - 1), u = e.substr(0, r), t[n++] = u, e = e.substr(r, e.length - 1);
  return !0
}, SiebelApp.Utils.sortObjectMap = function() {
  var e = arguments[0] || {},
      t = arguments[1] || function() {},
      n = arguments[2] || [];
  n.splice(0, n.length);
  for (var r in e) e.hasOwnProperty(r) && n.push(e[r]);
  return n.sort(t)
}, SiebelApp.Utils.replaceAll = function(e, t, n) {
  return e ? e.replace(new RegExp(t, "g"), n) : e
}, Array.prototype.CleanEmptyElements = function() {
  for (var e = 0; e < this.length; e++)
      if (typeof this[e] == "undefined" || this[e] === "") this.splice(e, 1), e--;
  return this
}, SiebelApp.Utils.stripOUIHTMLTag = function(e) {
  if (e.length > 0) {
      var t = /&lt;&gt;/gi,
          n = /&nbsp;/gi,
          r = /&amp;/gi,
          i = /<((\/?[a-z][a-z0-9]*\b)[^>]*)>/gi,
          s = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi,
          o = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          u = e.replace(s, "").replace(i, function(e, t, n) {
              if (o.test(t)) return e;
              var r = "";
              switch (n.toLowerCase()) {
                  case "br":
                      r = "\r\n";
                      break;
                  case "p":
                      r = "\r\n\r\n";
                      break;
                  case "/tr":
                      r = "\n";
                      break;
                  case "/th":
                  case "/td":
                      r = "    ";
                      break;
                  default:
                      r = ""
              }
              return r
          });
      return u.replace(t, "<>").replace(n, " ").replace(r, "&")
  }
  return e
}, SiebelApp.Utils.Alert = function() {
  $("html").addClass(consts.get("SWE_CLASS_DIALOG")), window.alert(arguments[0]), $("html").removeClass(consts.get("SWE_CLASS_DIALOG"))
}, SiebelApp.Utils.Confirm = function() {
  var e;
  return $("html").addClass(consts.get("SWE_CLASS_DIALOG")), e = window.confirm(arguments[0]), $("html").removeClass(consts.get("SWE_CLASS_DIALOG")), e
}, SiebelApp.Utils.Prompt = function() {
  var e;
  return $("html").addClass(consts.get("SWE_CLASS_DIALOG")), e = window.prompt(arguments[0], arguments[1]), $("html").removeClass(consts.get("SWE_CLASS_DIALOG")), e
}, SiebelApp.Utils.DecideVisibility = function(e, t) {
  e && e.length && ((t ? e.styleShow : e.styleHide).call(e), e.toggleClass("siebui-no-display", !t))
}, SiebelApp.Utils.GetSpanTag = function() {
  var e = "<span class='",
      t = arguments.length;
  for (var n = 0; n < t; n++) {
      var r = arguments[n],
          i = r.substring(r.lastIndexOf("/") + 1, r.lastIndexOf(".")).toLowerCase().replace(/ /g, "_");
      this.IsEmpty(i) && (i = r), e += "siebui-icon-" +
          i + " "
  }
  return e.trim() + "'>"
}, SiebelApp.Utils.NormalizeTextVal = function(e) {
  return e.replace(/\r\n/mg, "\n").replace(/\r/mg, "\n")
}, Number.prototype.toRound = function(e) {
  e = e || 0, e > 20 && (e = 20);
  var t = (new String(1..toFixed(e))).substr(2),
      n = parseInt("1" + t),
      r = parseFloat("." + t + "01"),
      i = this;
  i * n * 10 % 10 >= 5 && (i += r);
  var s = "" + Math.round(i * n) / n;
  if (e > 0) {
      var o = s.indexOf(".");
      o === -1 ? s += "." : e -= s.substr(o + 1).length, s += "00000000000000000000".substr(0, e)
  }
  return s
};
