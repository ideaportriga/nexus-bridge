typeof SiebelApp.Environment == "undefined" && (Namespace("SiebelApp.Environment"), SiebelApp.Environment = function() {
  function r() {
      var e;
      return r = function() {
          return e
      }, r.prototype = this, e = new r, e.constructor = r, e
  }
  var e = SiebelApp.Utils,
      t = SiebelApp.Constants,
      n;
  return n = new r, r.prototype.SetProtoAPIs = function(t) {
      var n = e.Curry(SiebelApp.S_App.constructor.prototype.DefineAccessor, r.prototype, t);
      n("GetLogOffDomainChange", "SWE_PROP_LOGOFF_ON_DOMAIN_CHANGE"), n("GetLogOffTabClose", "SWE_PROP_LOGOFF_ON_TAB_CLOSE"), n("GetScreenTabIcon", "SWE_PROP_DISPLAY_SCREENTAB_ICON"), n("GetCalendarPath", "SWE_PROP_CALPATH"), n("GetAppName", "SWE_PROP_NAME"), n("GetAppTitle", "SWE_PROP_TITLE"), n("GetDirection", "SWE_PROP_DIRECTION"), n("GetViewFrameName", "SWE_PROP_VIEW_FRM_NAME"), n("GetViewShadowFrameName", "SWE_PROP_VSHADOW_FRM_NAME"), n("IsExtendedKeyBoard", "SWE_PROP_IS_EXTENDED_KB"), n("GetEditCaption", "SWE_PROP_EDIT_CAPTION"), n("GetEditCtrlType", "SWE_PROP_EDIT_CTRL_TYPE"), n("GetEditCaption", "SWE_PROP_EDIT_CAPTION"), n("GetThreadInfo", "SWE_PROP_THREAD_BAR"), r.prototype.OnUnload = function() {}, r.prototype.SetThreadbar = function() {}, r.prototype.SetCOMSrv = function() {}
  }, n
}()), typeof SiebelApp.CommandManager == "undefined" && (SiebelJS.Namespace("SiebelApp.CommandManager"), SiebelApp.CommandManager = function() {
  function N(e) {
      return i = this, SiebelApp.CommandManager = function() {
          return i
      }, SiebelApp.CommandManager.prototype = N.prototype, SiebelApp.CommandManager.GetInstance = N.GetInstance, i.constructor = N, this.Initialize(), n = e, i
  }

  function C(i, s, o) {
      var u, a, f, l = CCFMiscUtil_CreatePropSet(),
          c = CCFMiscUtil_CreatePropSet(),
          h = CCFMiscUtil_CreatePropSet(),
          p = CCFMiscUtil_CreatePropSet(),
          d, v, m = CCFMiscUtil_CreatePropSet(),
          g = !1;
      s && (v = CCFMiscUtil_CreatePropSet());
      if (!P.call(this, i, m)) {
          if (!s) return D.call(this, i);
          d = CCFMiscUtil_CreatePropSet();
          var y;
          d = this.ProcessCommandState(i), y = d.GetProperty(t.get("CMDMGR_DELEGATE_APPLET"));
          if (e.IsEmpty(y)) {
              if (n) {
                  r || (r = n.GetService(t.get("CMDMGR_SERVICE")));
                  if (r) {
                      u = n.GetMainView();
                      if (u) {
                          a = u.GetActiveApplet();
                          if (a) {
                              g = a.InvokeMethod("ImplicitCommit", l);
                              if (!g) return !1
                          }
                      }
                  }
              }
              h = k.call(this, i, c);
              if (!this.InvokeServerCommand(i, h, p, o)) return !1
          } else {
              var b, w;
              b = d.GetProperty(t.get("CMDMGR_DELEGATE_METHOD")), u = n.GetMainView();
              if (u && y) {
                  a = u.GetApplet(y);
                  if (!a) return !1
              }
              if (a) return bstrName = a.GetName(), w = u.SetActiveAppletByName(bstrName, !1), w ? (l = n.NewPropertySet(), g = a.InvokeMethod(b, l), g == 1) : !1
          }
      }
      s && (v = k.call(this, i, m));
      var E = m.GetProperty(t.get("PROP_TARGET")),
          S = m.GetProperty(t.get("PROP_APPLET")),
          x = m.GetProperty(t.get("PROP_SERVICE")),
          T = String(m.GetProperty(t.get("PROP_METHOD"))),
          N, C;
      if (e.IsEmpty(T) || e.IsEmpty(E)) return !1;
      if (e.IsEmpty(n)) return !1;
      if (e.IsEmpty(S)) {
          if (E == "Browser Applet" || !e.IsEmpty(x)) N = n.GetActiveView(), e.IsEmpty(N) || (C = N.GetActiveApplet()), C || (C = SiebelApp.S_App.GetExternalActiveApplet()), e.IsEmpty(C) || (S = C.GetName());
          if (E == "Browser Applet" && e.IsEmpty(S)) return !1
      }
      if (!e.IsEmpty(x)) {
          var L = n.GetService(x);
          if (!e.IsEmpty(L)) {
              if (!e.IsEmpty(S)) {
                  N = n.GetActiveView();
                  if (!e.IsEmpty(N)) {
                      C = N.GetApplet(S);
                      if (!e.IsEmpty(C)) var A = C.GetBusComp()
                  }
              }
              if (s) {
                  if (L.CanInvokeMethod(T)) {
                      var O = v.EncodeAsString(),
                          M = CCFMiscUtil_CreatePropSet();
                      M.SetProperty(t.get("SWE_INPUT_PS"), O), g = L.InvokeMethod(T, M, o)
                  }
              } else g = L.CanInvokeMethod(T)
          }
      } else if (!e.IsEmpty(S)) {
          N = n.GetActiveView(), e.IsEmpty(N) || (C = N.GetApplet(S)), C || (C = SiebelApp.S_App.GetExternalActiveApplet());
          if (!e.IsEmpty(C))
              if (s) {
                  if (C.CanInvokeMethod(T)) {
                      var O = v.EncodeAsString(),
                          M = CCFMiscUtil_CreatePropSet();
                      M.SetProperty(t.get("SWE_INPUT_PS"), O), g = C.InvokeMethod(T, M, o)
                  }
              } else g = C.CanInvokeMethod(T)
      } else if (s) {
          if (n.CanInvokeMethod(T)) {
              var O = v.EncodeAsString(),
                  l = CCFMiscUtil_CreatePropSet();
              l.DecodeFromString(O);
              var g = n.InvokeMethod(T, l, o)
          }
      } else g = n.CanInvokeMethod(T);
      return g
  }

  function k(n, r) {
      var i, s, o, u = CCFMiscUtil_CreatePropSet(),
          f = a.GetChildByType(n),
          l = c.GetChildByType(n);
      if (e.IsEmpty(f)) {
          if (!e.IsEmpty(l)) return l
      } else u = f;
      return n.indexOf(t.get("CMDMGR_HASH")) >= 0 ? u : (u.SetProperty(w, n), i = r.GetProperty(t.get("PROP_ARGUMENT")), e.IsEmpty(i) || u.SetProperty(t.get("PROP_ARGUMENT"), i), s = r.GetProperty(t.get("PROP_DX")), o = r.GetProperty(t.get("PROP_DY")), !e.IsEmpty(s) && !e.IsEmpty(o) && (u.SetProperty(t.get("SWE_SHOW_POPUP_STR"), t.get("CMDMGR_TRUE")), u.SetProperty(t.get("SWEW"), s), u.SetProperty(t.get("SWEH"), o)), u)
  }

  function L(e, t, n, r) {
      var i = 0;
      r && (i |= 4), n && (i |= 1), t && (i |= 2);
      var s = "" + i + e;
      o[s] = s
  }

  function A(e, n) {
      var r = CCFMiscUtil_CreatePropSet(),
          i = "";
      P.call(this, e, r);
      var s = r.GetProperty(t.get("PROP_APPLET"));
      return s == "#AN" ? (r.SetProperty(t.get("PROP_APPLET"), n), i = r.EncodeAsString(), i) : e
  }

  function O(e, t) {
      var n = !1,
          r = "" + t + e;
      return r == "09" ? !1 : (o[r] && (n = !0), n)
  }

  function M(e) {
      var t, n, r, i, s, o;
      for (i = 0, o = e.GetChildCount(); i < o; i++) t = e.GetChild(i), r = t.GetType(), s = f.FindChildPosition(r), s >= 0 && s < f.GetChildCount() && f.RemoveChild(s), f.AddChild(t)
  }

  function _(e) {
      var t, n, r;
      for (n = 0, r = e.GetChildCount(); n < r; n++) t = e.GetChild(n), a.AddChild(t)
  }

  function D(n) {
      var r = this.GetBatchMethods(),
          i = !1;
      return v && (i = v.GetProperty(n)), e.IsEmpty(i) && !e.IsEmpty(r) && (i = r.GetProperty(n)), i == t.get("CMDMGR_TRUE")
  }

  function P(n, r) {
      if (n.indexOf(t.get("CMDMGR_AT")) >= 0) return r.DecodeFromString(n), !0;
      if (n.indexOf(t.get("CMDMGR_STAR")) < 0) return !1;
      var i = n.split(t.get("CMDMGR_STAR"));
      return i.shift(), e.IsEmpty(i[0]) || r.SetProperty(t.get("PROP_TARGET"), e.Trim(i[0])), e.IsEmpty(i[1]) || r.SetProperty(t.get("PROP_SERVICE"), e.Trim(i[1])), e.IsEmpty(i[2]) || r.SetProperty(t.get("PROP_METHOD"), e.Trim(i[2])), e.IsEmpty(i[3]) || r.SetProperty(t.get("PROP_APPLET"), e.Trim(i[3])), e.IsEmpty(i[4]) || r.SetProperty(t.get("PROP_ARGUMENT"), e.Trim(i[4])), e.IsEmpty(i[5]) || r.SetProperty(t.get("PROP_DX"), e.Trim(i[5])), e.IsEmpty(i[6]) || r.SetProperty(t.get("PROP_DY"), e.Trim(i[6])), !0
  }
  var e = SiebelApp.Utils,
      t = SiebelApp.Constants,
      n, r, i, s = {},
      o = {},
      u = CCFMiscUtil_CreatePropSet(),
      a = CCFMiscUtil_CreatePropSet(),
      f = CCFMiscUtil_CreatePropSet(),
      l = CCFMiscUtil_CreatePropSet(),
      c = CCFMiscUtil_CreatePropSet(),
      h = CCFMiscUtil_CreatePropSet(),
      p = CCFMiscUtil_CreatePropSet(),
      d = CCFMiscUtil_CreatePropSet(),
      v = CCFMiscUtil_CreatePropSet(),
      m = CCFMiscUtil_CreatePropSet(),
      g, y, b = t.get("PROP_KEY"),
      w = t.get("PROP_COMMAND"),
      E, S = [],
      x = [],
      T = !1;
  return N.GetInstance = function() {
      return i
  }, N.prototype.Initialize = function() {
      $("html").bind("keydown", function(t) {
          SiebelApp.S_App.GetCmdMgr().FireAccelerator(t, t.which, e.GetEventNType(t))
      }), window.addEventListener("click", function(e) {
          if (e && e.detail === 2 && $(e.target).attr("type") !== "checkbox") {
              var t = !1;
              $(e.target).attr("data-allowdblclick") === "true" && (t = !0), $(e.target).parents('[data-allowdblclick="true"]').length > 0 && (t = !0), t || e.stopPropagation()
          }
      }, !0), window.addEventListener("keydown", function(e) {
          e && SiebelApp.S_App.uiStatus.IsBusy() && (e.stopPropagation(), e.preventDefault())
      }, !0)
  }, N.prototype.SetGlobalAccl = function(e) {
      p = e
  }, N.prototype.GetGlobalAccl = function() {
      return p
  }, N.prototype.SetBaseAccl = function(e) {
      d = e
  }, N.prototype.GetBaseAccl = function() {
      return d
  }, N.prototype.GetBatchMethods = function() {
      return u
  }, N.prototype.SetRefreshTB = function(e) {
      g = e
  }, N.prototype.GetRefreshTB = function() {
      return g
  }, N.prototype.SetToolbar = function(e) {
      y = e
  }, N.prototype.GetToolbar = function() {
      return y
  }, N.prototype.GetToolbarArray = function() {
      return S
  }, N.prototype.UpdateToolbarArray = function(e) {
      var t;
      for (t = 0; t < S.length; t++) S[t].GetPMName() === e && S.splice(t, 1)
  }, N.prototype.GetGlobalMenu = function() {
      return E
  }, N.prototype.UpdateBatchMethods = function(e) {
      return u.Reset(), this.AppendBatchMethods(e)
  }, N.prototype.AppendBatchMethods = function(n) {
      var r = !0,
          i, s = n.EnumProperties(!0),
          o = t.get("CMDMGR_HASH");
      while (!e.IsEmpty(s)) s.indexOf(o) == 0 && u.SetProperty(s, n.GetProperty(s)), s = n.EnumProperties(!1);
      return !0
  }, N.prototype.InvokeServerCommand = function(i, s, o, u) {
      if (e.IsEmpty(n)) return !1;
      if (e.IsEmpty(r)) {
          r = n.GetService(t.get("CMDMGR_SERVICE"));
          if (e.IsEmpty(r)) return !1
      }
      i.indexOf(t.get("CMDMGR_HASH")) < 0 && (s.SetProperty(t.get("SWEJI"), t.get("CMDMGR_FALSE")), s.SetProperty(t.get("SWEDIC"), t.get("CMDMGR_TRUE")));
      var a = s.EncodeAsString(),
          f = CCFMiscUtil_CreatePropSet(),
          l = {},
          c = this;
      typeof u == "object" || typeof u == "boolean" ? (l.scope = this, l.async = typeof u.async == "boolean" ? u.async : u, l.selfbusy = u.selfbusy || !1, l.mask = u.mask || !1, l.cb = function() {
          var e = [];
          e.push(arguments[0]), e.push(arguments[1]), e.push(c.PostCommandExecute.apply(c, arguments)), typeof u.scope.PostExecute == "function" && u.scope.PostExecute.apply(u.scope || null, e)
      }) : l = undefined, f = r.InvokeMethod(i, s, l);
      if (typeof u == "undefined") return f.IsEmpty() ? !1 : (o.DeepCopy(f.GetChildByType(t.get("SWE_PROP_RESULTSET"))), o.IsEmpty() && o.Copy(f), !0)
  }, N.prototype.PostCommandExecute = function(e, n, r) {
      var i = CCFMiscUtil_CreatePropSet();
      return r.IsEmpty() ? !1 : (i.DeepCopy(r.GetChildByType(t.get("SWE_PROP_RESULTSET"))), i.IsEmpty() && i.Copy(r), i)
  }, N.prototype.GetCachedMenu = function(t) {
      if (!e.IsEmpty(s[t])) return s[t]
  }, N.prototype.SetCachedMenu = function(t, n) {
      e.IsEmpty(s[t]) && (s[t] = n)
  }, N.prototype.RemoveCachedMenu = function(t) {
      e.IsEmpty(s[t]) || delete s[t]
  }, N.prototype.InvokeCommand = function(e, t, n) {
      var r;
      t === !0 || t === !1 ? r = t : r = !0;
      if (typeof n != "object" && typeof n != "boolean") return C.call(this, e, r, n);
      var i = {};
      i.scope = this, i.async = typeof n.async == "boolean" ? n.async : n, i.selfbusy = n.selfbusy || !1, i.mask = n.mask || !1, i.cb = function() {
          var e = Array.prototype.slice.call(arguments);
          typeof n.scope != "undefined" && typeof n.scope.cb == "function" && n.scope.cb.apply(n.scope || null, e)
      }, C.call(this, e, r, i)
  }, N.prototype.AppendBatchMethods = function(n) {
      var r = n.EnumProperties(!0),
          i = this.GetBatchMethods(),
          s = t.get("CMDMGR_HASH");
      while (r) !e.IsEmpty(r) && r.indexOf(s) >= 0 && i.SetProperty(r, n.GetProperty(r)), r = n.EnumProperties(!1)
  }, N.prototype.ProcessCommandState = function(e) {
      var n = CCFMiscUtil_CreatePropSet();
      return e.indexOf(t.get("CMDMGR_HASH")) >= 0 && (f.GetChildByType(e) ? n = f.GetChildByType(e) : l.GetChildByType(e) && (n = l.GetChildByType(e))), n
  }, N.prototype.ProcessNotifications = function(e) {
      var t = e.Clone(),
          n, r;
      v = t.GetChildByType("StateToolBar"), l = t.GetChildByType("StateExToolBar"), c = t.GetChildByType("FlagsToolBar"), r = t.GetProperty("RefreshToolbar"), r && r == "true" && this.SetRefreshTB(r), n = t.GetChildByType("StateEx"), n && M.call(this, n), n = t.GetChildByType("Flags"), n && _.call(this, n), n = t.GetChildByType("Accelerators"), n && this.PrepareAccelerators(n), n = t.GetChildByType("Toolbar");
      if (n)
          if (this.GetToolbar()) this.GetToolbar().HandleResponsePS(n);
          else {
              var i = new SiebelAppFacade.ToolbarPM({
                  GetName: function() {
                      return "ToolbarPxy"
                  }
              });
              this.SetToolbar(i), i.Init(), i.Setup(n), SiebelApp.S_App.AppInitPromise().done(function() {
                  i.Show()
              })
          } t = e = n = null
  }, N.prototype.ProcessRWDNotifications = function(e) {
      var t = e.Clone(),
          n, r, i, s, o, u = [],
          a, f = "Toolbar",
          h = "GlobalMenu",
          p = "StateToolBar",
          d = "StateExToolBar",
          m = "FlagsToolBar",
          g = "StateEx",
          y = "Flags",
          b = "Accelerators";
      for (o = !0; n = t.EnumChildren(o); o = !1) {
          r = n.GetType();
          switch (r) {
              case f:
                  a = n.GetProperty("Name"), a != "Communication" && u.push(n);
                  break;
              case h:
                  E = n;
                  break;
              case p:
                  v = n;
                  break;
              case d:
                  l = n;
                  break;
              case m:
                  c = n;
                  break;
              case g:
                  M.call(this, n);
                  break;
              case y:
                  _.call(this, n);
                  break;
              case b:
                  this.PrepareAccelerators(n);
                  break;
              default:
          }
      }
      var w, T = u.length;
      if (T > 0)
          for (w = 0; w < T; w++) {
              i = u[w];
              if (i) {
                  a = i.GetProperty("Name");
                  var N = new SiebelAppFacade.ToolbarPM({
                      GetName: function() {
                          return a
                      }
                  });
                  N.Init(), N.Setup(i), S.push(N), x.push(N)
              }
              i = null
          }
      s = t.GetProperty("RefreshToolbar"), s && s == "true" && this.SetRefreshTB(s), t = e = n = i = null
  }, N.prototype.Show = function() {
      var e, t = x.length;
      for (e = 0; e < t; e++) x[e].Show(), view = SiebelApp.S_App.GetActiveView(), view && view.AddToolbar(x[e]);
      x = []
  }, N.prototype.CanInvokeCommand = function(t) {
      return e.IsEmpty(t) ? !1 : C.call(this, t, !1)
  }, N.prototype.UpdateUIControls = function() {
      if (!T) {
          T = !0;
          if (SiebelApp.S_App.IsRwd()) {
              var e, t = S.length;
              for (e = 0; e < t; e++) S[e].ExecuteMethod("Update")
          } else this.GetToolbar() && this.GetToolbar().ExecuteMethod("Update");
          T = !1
      }
  }, N.prototype.PrepareAccelerators = function(e) {
      var t = CCFMiscUtil_CreatePropSet(),
          n = CCFMiscUtil_CreatePropSet(),
          r;
      for (var i = 0, s = e.GetChildCount(); i < s; i++) t = e.GetChild(i), r = t.GetType(), h.GetChildByType(r) || (h.AddChild(t), this.InitializeAccelerators(t))
  }, N.prototype.InitializeAccelerators = function(e) {
      var t, n, r, i;
      L.call(this, 13, 0, 1, 0), L.call(this, 27, 0, 0, 0), L.call(this, 27, 0, 1, 0), L.call(this, 9, 0, 0, 0), L.call(this, 9, 0, 1, 0);
      for (bFirst = !0;
          (child = e.EnumChildren(bFirst)) != null && child.GetPropertyCount() > 0; bFirst = !1) {
          var s = child.GetProperty("key");
          s != null && (t = parseInt(s.charAt(0), 10), n = parseInt(s.charAt(1), 10), r = parseInt(s.charAt(2), 10), i = parseInt(s.substr(3), 10), i != 0 && L.call(this, i, t, n, r))
      }
  }, N.prototype.FireAccelerator = function(e, t, n) {
      if (t <= 0) return !1;
      (O.call(this, t, n) || t === 13) && this.ProcessAccelerator(e, t) === !0 && (e.preventDefault(), e.stopPropagation())
  }, N.prototype.ProcessAccelerator = function(n, r) {
      var i = "0",
          s = "0",
          o = "0",
          u = "",
          a, f, l, c, p = CCFMiscUtil_CreatePropSet(),
          d = CCFMiscUtil_CreatePropSet(),
          v = CCFMiscUtil_CreatePropSet(),
          m = CCFMiscUtil_CreatePropSet(),
          g = "",
          y, E, S, x, T;
      if (r == 16 || r == 17 || r == 18) return !1;
      n.altKey && (o = "1"), n.ctrlKey && (s = "1"), n.shiftKey && (i = "1"), u += i + s + o + r;
      if (SiebelApp.S_App) {
          a = SiebelApp.S_App.GetMainView();
          if (a) {
              f = a.GetActiveApplet(), f || (f = SiebelApp.S_App.GetExternalActiveApplet());
              if (f) {
                  if (u == "01013") return c = f.InvokeMethod("OnEnterKey", null), c ? !0 : !1;
                  if (u == "00027") return c = f.InvokeMethod("OnEscapeKey", null), c ? !0 : !1;
                  if (u == "00013") return c = f.InvokeMethod("OnEnterKey"), c ? !0 : !1;
                  l = f.GetName();
                  if (!e.IsEmpty(l) && h.GetChildByType(l)) {
                      p = h.GetChildByType(l);
                      var N = p.GetChildCount();
                      for (E = 0; E < N; E++) {
                          d = p.GetChild(E), g = d.GetProperty(b);
                          if (u != g) continue;
                          return y = d.GetProperty(w), this.InvokeCommand(y, !0, !0), !0
                      }
                      var C = p.GetChildCount();
                      for (E = 0; E < C; E++) {
                          d = p.GetChild(E);
                          if (d.GetProperty(t.get("PROP_CLASS"))) {
                              x = d.GetProperty(t.get("PROP_CLASS"));
                              if (this.GetBaseAccl().GetChildByType(x)) {
                                  v = this.GetBaseAccl().GetChildByType(x);
                                  var k = v.GetChildCount();
                                  for (S = 0; S < k; S++) {
                                      m = v.GetChild(S), g = m.GetProperty(b);
                                      if (u != g) continue;
                                      return y = m.GetProperty(w), T = A.call(this, y, l), this.InvokeCommand(T, !0, !0), !0
                                  }
                              }
                          }
                      }
                  }
              }
          }
      }
      d.Reset();
      var L = this.GetGlobalAccl(),
          O;
      for (E = 0, O = L.GetChildCount(); E < O; E++) {
          d = L.GetChild(E), g = d.GetProperty(b);
          if (u != g) continue;
          return y = d.GetProperty(w), this.InvokeCommand(y, !0, !0), !0
      }
      return !1
  }, N
}()), typeof SiebelAppFacade.ComponentMgr == "undefined" && (SiebelJS.Namespace("SiebelAppFacade.ComponentMgr"), SiebelAppFacade.ComponentMgr = function() {
  function o() {
      this.GetName = function() {
          return "RootNode"
      }
  }

  function d() {}

  function v(e) {
      var n = t.IndexOf(c, e),
          r = null;
      return n !== -1 && (r = h[n] + "_" + (p[n] + 1)), r
  }

  function m(e) {
      var n = t.IndexOf(c, e),
          r = null;
      return n !== -1 && (r = h[n]), r
  }

  function g(e, n) {
      var r = l[u + e],
          i = t.IndexOf(c, r),
          s = p[i];
      return s !== Number(n)
  }

  function y(e) {
      var t = null;
      for (var n in l)
          if (l.hasOwnProperty(n) && n.indexOf(a) === 0) {
              var r = l[n];
              for (var i in r)
                  if (r.hasOwnProperty(i) && i === e) {
                      t = r[i];
                      break
                  } if (t) break
          } return t
  }

  function b(e) {
      return null
  }

  function w(e, n) {
      var o = null,
          u = null;
      for (var f in l)
          if (l.hasOwnProperty(f) && f.indexOf(a) === 0) {
              var d = l[f];
              for (var v in d)
                  if (d.hasOwnProperty(v) && d[v] === e) {
                      u = f.replace(a, "");
                      break
                  }
          } if (u)
          if (n === r) {
              var m = t.IndexOf(h, u),
                  g = c[m],
                  y = u.substring(0, u.lastIndexOf("_")),
                  b = l[a + y],
                  w = g.GetName ? g.GetName() : "";
              for (var f in b)
                  if (b.hasOwnProperty(f) && f === w) {
                      o = b[f];
                      break
                  }
          } else if (n === i) {
          o = [];
          var b = l[a + u];
          for (var f in b) b.hasOwnProperty(f) && b[f] !== e && o.push(b[f]);
          o = o.length === 0 ? null : o
      } else if (n === s) {
          o = [];
          var m = t.IndexOf(h, u),
              E = p[m];
          if (E > 0)
              for (var S = 0; S < E; S++) {
                  var b = l[a + u + "_" + (S + 1)];
                  for (var f in b) b.hasOwnProperty(f) && o.push(b[f])
              }
          o = o.length === 0 ? null : o
      }
      return o
  }

  function E(e) {
      return null
  }

  function S(e, t, n) {
      var r = m.call(this, e);
      r && (l[a + r][t] = n)
  }

  function x(e) {
      var n = t.IndexOf(c, e);
      if (n !== -1) {
          var r = p[n];
          for (var i = 1; i <= r; i++) x.call(this, c[t.IndexOf(h, h[n] + "_" + i)]);
          var s = l[a + h[n]];
          for (var o in s) s.hasOwnProperty(o) && s[o].Show()
      }
  }
  var e = SiebelJS.Dependency("SiebelApp.Constants"),
      t = SiebelJS.Dependency("SiebelApp.Utils"),
      n = e.get("SWE_PROP_NAME"),
      r = e.get("SWE_CMP_REL_PARENT"),
      i = e.get("SWE_CMP_REL_SIBLING"),
      s = e.get("SWE_CMP_REL_CHILDREN"),
      u = "keyObj_",
      a = "cmpMap_",
      f = new o,
      l = {
          keyObj_0: f,
          cmpMap_0: {}
      },
      c = [f],
      h = ["0"],
      p = [0];
  return d.prototype.RegisterLevel = function(e, n) {
      var r = v.call(this, n || f);
      r ? (l[u + r] = e, l[a + r] = {}, c.push(e), h.push(r), p.push(0), p[t.IndexOf(c, n || f)] += 1) : SiebelJS.Debug("[ComponentMgr:RegisterLevel] - Can't find appropriate level to attach")
  }, d.prototype.DeRegisterLevel = function(e) {
      var n = t.IndexOf(c, e),
          r = h[n],
          i, s;
      if (r) {
          i = r.substring(0, r.lastIndexOf("_")), s = r.substring(r.lastIndexOf("_") + 1);
          if (g.call(this, i, s)) SiebelJS.Debug("[ComponentMgr-DeRegisterLevel] Phew! DeRegisterLevel call requires more work!");
          else {
              var o = p[n];
              for (var f = 1; f <= o; f++) this.DeRegisterLevel(c[t.IndexOf(h, r + "_" + f)]);
              var d = l[a + h[n]];
              for (var v in d) d.hasOwnProperty(v) && d[v].EndLife();
              delete l[u + r], delete l[a + r], c.splice(n, 1), h.splice(n, 1), p.splice(n, 1), p[t.IndexOf(h, i)] -= 1
          }
      }
  }, d.prototype.FindComponent = function(e) {
      var t = null;
      return typeof e == "string" || e.id ? t = y.call(this, e.id || e) : e.type || (e.cmp && e.rel ? t = w.call(this, e.cmp, e.rel) : e.level), t
  }, d.prototype.MakeComponent = function(e, t, r, i) {
      var s = null;
      r && r.GetName && (s = r.GetName()), s = s || t.GetProperty(n);
      var o = new SiebelAppFacade.Component;
      S.call(this, e, s, o), o.Setup(t, r, i), r.SetPModel && r.SetPModel(o.GetPM())
  }, d.prototype.CompleteComponent = function(e, t, r) {
      var i = null,
          s = null;
      r && r.GetName && (s = r.GetName()), s = s || t.GetProperty(n);
      var o = m.call(this, e);
      o && (i = l[a + o][s], i && i.SetupComplete(t, r))
  }, d.prototype.DeleteComponent = function(e, t) {
      var n = null,
          r = null,
          i = null;
      if (t) {
          n = m.call(this, t), r = l[a + n];
          if (r)
              for (i in r)
                  if (r.hasOwnProperty(i) && r[i] === e) {
                      r[i].EndLife(), delete r[i];
                      break
                  }
      } else
          for (var s in l)
              if (l.hasOwnProperty(s) && s.indexOf(a) === 0) {
                  var o = l[s];
                  for (i in o)
                      if (o.hasOwnProperty(i) && o[i] === e) {
                          o[i].EndLife(), delete o[i];
                          break
                      }
              }
  }, d.prototype.Show = function(e) {
      var t = e || f;
      x.call(this, t)
  }, d.prototype.DisplayTree = function(e, n) {
      e = e || f, n = n ? "  " + n : "  ";
      var r = t.IndexOf(c, e);
      if (r !== -1) {
          SiebelJS.Log(n + "Proxy Node -> " + (e.constructor.name || "Anonymous"));
          var i = p[r];
          for (var s = 1; s <= i; s++) this.DisplayTree(c[t.IndexOf(h, h[r] + "_" + s)], n);
          var o = l[a + h[r]];
          for (var u in o) o.hasOwnProperty(u) && SiebelJS.Log(n + "Component Node -> " + u)
      }
  }, new d
}()), typeof SiebelAppFacade.Component == "undefined" && (SiebelJS.Namespace("SiebelAppFacade.Component"), SiebelAppFacade.Component = function() {
  function u() {
      var e = null,
          t = null;
      this.GetPM = function() {
          return e
      }, this.SetPM = function(t) {
          e = t
      }, this.GetPR = function() {
          return t
      }, this.SetPR = function(e) {
          t = e
      }
  }

  function a(e) {
      if (e && e.GetMethodArray) {
          var t = e.GetMethodArray();
          for (var n = 0, r = t.length; n < r; n++) e.constructor.prototype[t[n]] && e[t[n]] !== e.constructor.prototype[t[n]] && (e[t[n]] = e.constructor.prototype[t[n]])
      }
  }

  function f(e) {
      var t = null;
      e = typeof e == "string" ? e.split(".") : [];
      if (e[0]) {
          t = window[e[0]];
          for (var n = 1, r = e.length; n < r && t; n++) t = t[e[n]]
      }
      return t
  }

  function l(t, n, r, i) {
      var s = null,
          o = null,
          u = null,
          a = null;
      return t && (r === e.get("SWE_PROP_OUI_PMODEL") ? o = t.GetProperty(e.get("SWE_UIDEF_PM_CTR")) : r === e.get("SWE_PROP_OUI_PRENDERER") && (o = t.GetProperty(e.get("SWE_UIDEF_PR_CTR"))), o || (o = SiebelApp.S_App.GetConstructorFromKey(t.GetProperty(r)) || ""), u = t.GetProperty(i), String(o).indexOf("SiebelAppFacade.ViewP") === -1 && (a = require(String(o))), typeof a == "string" && (o = a), typeof a != "function" && o && (a = f.call(this, o)), s = a || SiebelAppFacade[u] || n), s
  }
  var e = SiebelJS.Dependency("SiebelApp.Constants"),
      t = e.get("SWE_CMP_REL_PARENT"),
      n = e.get("SWE_CMP_REL_SIBLING"),
      r = e.get("SWE_CMP_REL_CHILDREN"),
      i = e.get("SWE_PROP_OUI_PMODEL"),
      s = e.get("SWE_PROP_OUI_PRENDERER"),
      o = "SWE_OUI_RENDERER";
  return u.prototype.Init = function() {
      return this
  }, u.prototype.Setup = function(e, t, n) {
      if (this.GetPM() === null) {
          var r = l.call(this, e, SiebelAppFacade.PresentationModel, i);
          if (r) {
              this.SetPM(new r(t));
              var s = this.GetPM();
              if (!n) s.Init(), s.Setup(e), this.SetPR(e);
              else {
                  var o = [];
                  s.UpdateModel && s.UpdateModel(e), o.push(n.input.ps), n.callback.apply(n.scope, o)
              }
          }
      }
      return this
  }, u.prototype.SetupComplete = function(e, t) {
      var n = this.GetPM();
      return n && (n.Init(), n.Setup(e), this.SetPR(e)), this
  }, u.prototype.Show = function() {
      var e = this.GetPR(),
          t = null;
      if (e instanceof JSSPropertySet) {
          var n = l.call(this, this.GetPR(), SiebelAppFacade.PhysicalRenderer || SiebelAppFacade.JQMFormRenderer, s, o);
          n && (t = new n(this.GetPM()), this.SetPR(t), this.GetPM().SetRenderer(t))
      } else e instanceof SiebelAppFacade.BasePR && (t = e);
      return t && (t.ShowUI(), t.BindEvents(), t.BindData()), this
  }, u.prototype.Get = function() {
      var e = this.GetPM();
      return e ? e.Get.apply(e, arguments) : null
  }, u.prototype.ExecuteMethod = function() {
      var e = this.GetPM();
      if (e) return e.ExecuteMethod.apply(e, arguments)
  }, u.prototype.GetParent = function() {
      return SiebelAppFacade.ComponentMgr.FindComponent({
          cmp: this,
          rel: t
      })
  }, u.prototype.GetSiblings = function() {
      return SiebelAppFacade.ComponentMgr.FindComponent({
          cmp: this,
          rel: n
      })
  }, u.prototype.GetChildren = function() {
      return SiebelAppFacade.ComponentMgr.FindComponent({
          cmp: this,
          rel: r
      })
  }, u.prototype.EndLife = function() {
      this.SetPM(null), this.SetPR(null)
  }, u.prototype.SwitchPMnPR = function(t, n) {
      var r = require(String(t.GetProperty(e.get("SWE_UIDEF_PM_CTR")))),
          i = require(String(t.GetProperty(e.get("SWE_UIDEF_PR_CTR")))),
          s = this.GetPM(),
          o = this.GetPR(),
          u = !1;
      s && (typeof r == "string" && f.call(this, r) !== s.constructor && (u = !0), typeof r == "object" && r !== s.constructor && (u = !0), typeof r == "function" && r !== s.constructor && (u = !0)), o && (typeof i == "string" && f.call(this, i) !== o.constructor && (u = !0), typeof i == "object" && i !== o.constructor && (u = !0), typeof i == "function" && i !== o.constructor && (u = !0)), u && (this.GetPM().EndLife(), a.call(this, n), this.SetPM(null), this.Setup(t, n), this.GetPM().UpdateModel && this.GetPM().UpdateModel(t))
  }, u
}()), require.onError = function(e) {
  SiebelJS.Log("Error in downloading file " + e.requireType + ":" + e.requireModules)
}, typeof SiebelApp.S_App == "undefined" && (SiebelJS.Namespace("SiebelApp.S_App"), SiebelApp.S_App = function() {
  function it() {
      D = new SiebelApp.PopupPModel({
          GetName: function() {
              return "PopupPxy"
          }
      }), D.Init()
  }

  function st(e, t) {
      H[e] = t
  }

  function ot(r) {
      rt.prototype.GetAppPropertySet = function() {
          return r.Clone()
      };
      var i = r.GetChild(0);
      if (i.GetType() !== n) throw new Error("Wrong propSet type in Application Context");
      this.SetSelfProps(i);
      var s = SiebelApp.Environment;
      s !== undefined && Dt.call(this, i);
      var o = i.GetChildCount(),
          u = t.get("SWE_PST_LOADURL"),
          a = t.get("SWE_PST_STR_CACHE"),
          f = t.get("SWE_PST_NEW_NAV_CTRL_MGR"),
          l = t.get("SWE_PST_NAV_CTRL_INFO"),
          c = t.get("SWE_PST_SERVICE_SHADOWS"),
          h = t.get("SWE_PST_QTP_INFO"),
          p = t.get("SWE_PST_ACCESSIBILITY_INFO"),
          d = t.get("SWE_PST_NEW_TIMER"),
          v = t.get("SWE_PST_NEW_LOCALE"),
          m = t.get("SWE_PST_STYLESHEET"),
          g = t.get("SWE_UIDEF_THEME_INFO"),
          b = t.get("SWE_UIDEF_PAGE_TRANSITION_INFO"),
          w = t.get("SWE_PST_MSG"),
          E = t.get("SWE_PST_ROW_CNT_TMPL"),
          S = t.get("SWE_PST_PORTLET_APP"),
          T = t.get("SWE_PROP_VALUE"),
          N = t.get("SWE_PROP_NAME"),
          C = t.get("SWE_RPC_PROP_COMMAND_MGR"),
          k = t.get("SWE_PST_NEW_BUSCOMP"),
          L = t.get("SWE_PST_NEW_APPLET"),
          A = t.get("SWE_PST_NEW_LIST_APPLET"),
          O = t.get("SWE_PST_NEW_TREEAPPLET"),
          M = SiebelApp.S_App.BusComp,
          _ = r.GetProperty(t.get("SWE_RPC_PROP_STATUS")),
          D = t.get("SWE_RPC_PROP_NEW_APPLET_LAYOUT"),
          P = t.get("SWE_PST_CNTRL_LIST"),
          H = t.get("SWE_PST_ICON_LIST");
      for (var B = 0; B < o; B++) {
          var j = i.GetChild(B),
              F = j.GetType(),
              I = e.Curry(rt.prototype.DefineAccessor, SiebelApp.Environment.constructor.prototype, j);
          switch (F) {
              case u:
                  I("GetClientFrameName", "SWE_PROP_NAME"), I("GetClientURL", "SWE_PROP_VALUE"), SiebelApp.Environment.constructor.prototype.GetClientFrame = function() {
                      return $('[name="' + SiebelApp.Environment.GetClientFrameName() + '"]')[0]
                  };
                  break;
              case m:
                  I("GetStyleSheetName", "SWE_PROP_VALUE");
                  break;
              case a:
                  var q = j.GetProperty(T);
                  q && this.AppendToStrCache(q);
                  break;
              case f:
                  var R = j.GetChildCount();
                  R > 0 && (y.Initialize(j), y.ProcessObjectInfo(j.GetChildByType(l)));
                  break;
              case b:
                  var q = j.GetProperty(T);
                  q && SiebelApp.LayoutTransitionsMgr.setTransition(q);
                  break;
              case p:
                  I("GetScreenNavTitle", "SWE_PROP_SCREEN_NAV_TITLE"), I("GetDetailCategoryTitle", "SWE_PROP_DETAIL_CATEGORY_TITLE");
                  break;
              case h:
                  j.PropertyExists(t.get("SWE_PROP_QTP_OT")) && I("GetObjectType", "SWE_PROP_QTP_OT"), j.PropertyExists(t.get("SWE_PROP_QTP_RN")) && I("GetRepstrName", "SWE_PROP_QTP_RN"), j.PropertyExists(t.get("SWE_PROP_QTP_UN")) && I("GetUIName", "SWE_PROP_QTP_UN");
                  break;
              case c:
                  var U = j.EnumProperties(!0);
                  do x[U] = j.GetProperty(U); while (U = j.EnumProperties(!1));
                  break;
              case d:
                  ut.call(this, j);
                  break;
              case v:
                  var z = j.GetChildCount();
                  z > 0 && SiebelApp.S_App.LocaleObject.InitLocale(j.GetChild(0));
                  break;
              case w:
                  var W = j.GetProperty(N),
                      q = j.GetProperty(T);
                  W && q && Lt.call(this, W, q);
                  break;
              case S:
                  var X = new SiebelApp.S_App
                      .PortletSessionMgr;
                  X.ProcessPortletInfo(j);
                  break;
              case E:
                  var V = j.GetProperty(N),
                      J = j.GetProperty(T);
                  V && J && st.call(this, V, J);
                  break;
              case C:
                  SiebelApp.S_App.IsRwd() && this.GetCmdMgr().ProcessRWDNotifications(j);
                  break;
              case k:
                  SiebelApp.S_App.IsRwd() && (buscomp = new M, buscomp.ProcessObjectInfo(j.GetChild(0)));
                  break;
              case L:
              case A:
              case O:
                  if (SiebelApp.S_App.IsRwd()) {
                      var K = e.PrepareModuleInfo(j);
                      (function() {
                          var e = j,
                              t = buscomp;
                          if (_ === D) {
                              var n = new $.Deferred;
                              deferreds.push(n.promise())
                          }
                          require(K, function() {
                              try {
                                  _ !== D ? Ot.call(SiebelApp.S_App, e, t) : (At.call(SiebelApp.S_App, e, t), n.resolveWith(SiebelApp.S_App, ["SA Applet Object Info"]))
                              } catch (r) {
                                  SiebelJS.Log(r)
                              }
                              e = null
                          })
                      })()
                  }
                  break;
              case H:
                  SiebelApp.S_App.IsRwd() && Mt.call(this, j);
                  break;
              case P:
                  SiebelApp.S_App.IsRwd() && (Q = j);
                  break;
              default:
                  SiebelJS.Debug("[SetProtoAPIs] : Missing handler for type [" + F + "]")
          }
      }
      s !== undefined && at(), i = null
  }

  function ut(e) {
      var t = new SiebelApp.S_App.SweTimer;
      SiebelApp.S_App.SetTimer(t), SiebelApp.S_App.GetTimer().CreateTimerHookMap(e), SiebelApp.S_App.SetEnablePerfHooks(!0), SiebelApp.S_App.GetTimer().SetSessionID()
  }

  function at() {
      var e = SiebelApp.S_App.constructor.prototype,
          t = SiebelApp.Environment.constructor.prototype;
      for (var n in t) typeof t[n] == "function" && (e[n] = t[n])
  }

  function ft() {
      $("#_sweview").addClass("siebui-indent-content")
  }

  function lt() {
      $("#_sweview").addClass("siebui-dashboard-content-indent")
  }

  function ct() {
      $("#SS_ChatUI").addClass("siebui-chat-pane")
  }

  function ht(e) {
      clearTimeout(Z), Z = e
  }

  function pt() {
      return Z
  }

  function dt(e) {
      G.ExecuteMethod("ProcessProperties", e), G.ExecuteMethod("ExecuteUIUpdate")
  }

  function vt(e) {
      var n = e.GetProperty(t.get("SWE_PROP_NEW_PAGE_NAME")),
          r = SiebelAppFacade.ComponentMgr.FindComponent({
              id: n
          });
      r && (r.ExecuteMethod("ProcessProperties", e), r.ExecuteMethod("ExecuteUIUpdate"))
  }

  function mt() {
      var e = SiebelApp.S_App.GetActivePageComp();
      e && (e.GetPM && e.GetPM() && e.GetPM().EndLife(), SiebelAppFacade.ComponentMgr.DeleteComponent(e, this), SiebelApp.S_App.SetActivePageComp(null))
  }

  function gt(e, n) {
      var r, i, s = t.get("SWE_RPC_PROP_ERROR_CODE"),
          o = t.get("SWE_RPC_PROP_ERROR_MSG"),
          u = t.get("SWE_RPC_PROP_ERRORS"),
          a = e.GetChildCount();
      if (!n || typeof n.AddErrorMsgText != "function") n = this;
      if (a > 0 && this.ErrorObject.GetIndex(n) > -1)
          for (var f = 0; f < a; f++) {
              var l = e.GetChild(f),
                  c = l.GetType();
              if (c == u) {
                  for (var h = 0, p = l.GetChildCount(); h < p; h++) {
                      var d = l.GetChild(h);
                      r = d.GetProperty(s), i = d.GetProperty(o), r && i && SiebelApp.S_App.ErrorObject && n.AddErrorMsgText(r, i, !0)
                  }
                  break
              }
          }
  }

  function yt(n) {
      var r = n.GetProperty(t.get("SWE_RPC_PROP_URL")),
          i = "",
          s = "",
          o = !1,
          u = n.GetProperty(t.get("PROP_TARGET"));
      !e.IsEmpty(r) && !e.IsEmpty(u) && (i = n.GetProperty(t.get("SWE_RPC_PROP_VIEW")), s = n.GetProperty(t.get("SWE_RPC_PROP_VIEW_ID")), SiebelApp.S_App.GetActiveView() && SiebelApp.S_App.GetActiveView().GetName() == i && (o = !0), o ? SiebelApp.S_App.RefreshView(i, s, r, u) : SiebelApp.S_App.GotoView(i, s, r, u))
  }

  function bt() {
      if (B) {
          B = !1;
          if (I) R ? this.RefreshView(I, q, j, F) : (this.GotoView(I, q, j, F), SiebelApp.S_App.uiStatus.m_gbusy > 1 && SiebelApp.S_App.uiStatus.Free());
          else {
              var e = !1;
              SiebelApp.S_App.IsRwd() && (e = !0);
              var t = this.GotoURL(j, F, e);
              t && typeof t.done == "function" && t.done(function() {
                  this.uiStatus.Free()
              })
          }
      }
  }

  function wt(e, t, n) {
      e = e.split(".");
      if (e[e.length - 1] === "_sweview") e = "_svf0", t.push({
          func: this.OnLoadViewContent,
          tgt: e
      });
      else if (e[e.length - 1] === "_sweclient" || e[e.length - 1] === "SiebAppContainer") {
          t.push({
              func: this.OnLoadAppletContent,
              tgt: e,
              applet: n
          });
          var r;
          if (SiebelApp.S_App.IsRwd()) var r = $(e);
          else r = $("[name=" + e[e.length - 1] + "]");
          rt.prototype.GetTargetViewContainer = function() {
              return r
          }, rt.prototype.SetNextTargetViewContainer = function(e) {
              SiebelApp.S_App.IsRwd() ? r = $("#SiebAppContainer") : r = $("[name=" + e + "]")
          }
      } else e.length === 1 && SiebelApp.S_App.IsRwd() ? (e = SiebelApp.S_App.ViewTarget(), t.push({
          func: this.OnLoadViewContent,
          tgt: e
      })) : (e = e[e.length - 1], t.push({
          func: this.OnLoadExternalObject,
          tgt: e
      }));
      return this.SetNextTargetViewContainer(e), e
  }

  function Et(e) {
      var t = new $.Deferred;
      return SiebelApp.contentUpdater.AddCallBack(e, function() {
          t.resolveWith(this, ["AppletLayoutDone"])
      }, this), this.GetTargetViewContainer().attr("src", e), SiebelApp.contentUpdater.loadContent(), t.promise()
  }

  function St(n) {
      var r, i, s, o, u, a, f, l, c, h, p = null,
          d = null,
          v = !1;
      return c = n.GetProperty(t.get("SWE_RPC_PROP_STATUS")), c === t.get("SWE_RPC_PROP_CONFIRM_DIALOG") && (r = n.GetProperty(t.get("SWE_CONFIRM_TEXT_STR")), s = e.Confirm(r), s ? i = n.GetProperty(t.get("SWE_OK_METHOD_STR")) : i = n.GetProperty(t.get("SWE_CANCEL_METHOD_STR")), i && (u = n.GetProperty(t.get("SWE_VIEW_ID_STR")), f = n.GetProperty(t.get("SWE_APPLET_STR")), s ? l = n.GetChildByType(t.get("SWE_OK_METHOD_ARGS_STR")) : l = n.GetChildByType(t.get("SWE_CANCEL_METHOD_ARGS_STR")), l = l || CCFMiscUtil_CreatePropSet(), e.IsEmpty(u) && (p = this.GetMainView()), p && (d = p.GetApplet(f)) ? v = d.InvokeMethod(i, l) : (o = n.GetProperty(t.get("SWE_SERVICE")), o ? (l.SetProperty(t.get("SWE_CMD_ARG"), t.get("SWE_CMD_INVOKE_METHOD_STR")), l.SetProperty(t.get("SWE_SERVICE"), o), l.SetProperty(t.get("SWE_METHOD_STR"), i)) : (a = n.GetProperty(t.get("SWE_VIEW_ARG")), l.SetProperty(t.get("SWE_CMD_ARG"), t.get("SWE_CMD_INVOKE_METHOD_STR")), l.SetProperty(t.get("SWE_VIEW_ID_STR"), u), l.SetProperty(t.get("SWE_VIEW_ARG"), a), l.SetProperty(t.get("SWE_APPLET_STR"), f), l.SetProperty(t.get("SWE_METHOD_STR"), i)), h = CCFMiscUtil_CreatePropSet(), SiebelApp.S_App.CallServer(l, h, !0))), v = !0), v
  }

  function xt() {
      var t = this.GetCmdMgr();
      t.GetRefreshTB() && (t.UpdateUIControls(), t.SetRefreshTB(!1));
      var n = this.GetActiveView();
      e.IsEmpty(n) || n.ExecuteUIUpdate();
      for (var r in M) {
          var i = M[r];
          i.ExecuteUIUpdate()
      }
  }

  function Tt() {
      var t = this.GetActiveView();
      e.IsEmpty(t) || t.ResetUIUpdateStates()
  }

  function Nt(n) {
      var r = this.GetActiveView(),
          i = e.IsEmpty(r) ? {} : r.GetAppletMap(),
          s = n.GetChildCount();
      for (var o = 0; o < s; o++) {
          var u = n.GetChild(o),
              a = u.GetProperty(t.get("SWE_PROP_VAR_NAME")),
              f = u.GetType();
          if (f === t.get("SWE_APPLET_PM_PS")) {
              for (var l in i) i[l].GetVarName() === a && i[l].GetPModel().HandleResponsePS(u);
              for (var c in M) M[c].GetVarName() === a && M[c].GetPModel().HandleResponsePS(u)
          }
      }
  }

  function Ct(n) {
      if (n.GetType() !== t.get("SWE_RPC_PROP_NOTIFICATION")) return !1;
      var r = this.GetActiveView(),
          i = this.GetActiveBusObj(),
          s = e.IsEmpty(r) ? {} : r.GetAppletMap(),
          o = n.GetChildCount();
      for (var u = 0; u < o; u++) {
          var a = n.GetChild(u),
              f = a.GetProperty(t.get("SWE_PROP_BC")),
              l = a.GetProperty(t.get("SWE_PROP_BC_NOTI_ZONE")),
              c = e.IsEmpty(i) ? null : i.GetBusComp(f);
          if (c && (!l || l == i.GetZone())) {
              c.HandleServerNotifications(a);
              for (var h in s) !e.IsEmpty(s[h].GetBusComp()) && s[h].GetBusComp().GetVarName() === f && !(s[h].GetPModel() instanceof JSSPropertySet) && s[h].GetPModel() && s[h].GetPModel().HandleNotify(a);
              y.HandleNotify(a)
          } else
              for (var p in M)
                  if (M.hasOwnProperty(p)) {
                      var d = M[p];
                      !e.IsEmpty(d.GetBusComp()) && d.GetBusComp().GetVarName() === f && (c = d.GetBusComp(), c.HandleServerNotifications(a), d.GetPModel().HandleNotify(a))
                  }
      }
  }

  function kt(n) {
      var r = new $.Deferred,
          o = [],
          u;
      this.SetSelfProps(n), SiebelApp.S_App.GetEnablePerfHooks() && SiebelApp.S_App.GetTimer() && SiebelApp.S_App.GetTimer().TimePopupApplet("", "Process Object Info Start");
      var a = SiebelApp.Environment;
      a && Dt.call(this, n);
      var f = n.GetChildByType("api"),
          l = n.GetProperty(t.get("SWE_RPC_PROP_STATUS")),
          c = t.get("SWE_RPC_PROP_NEW_APPLET_LAYOUT");
      if (f !== null) {
          var h = f.EnumChildren(!0);
          if (h !== null) {
              var p = t.get("SWE_PST_NEW_VIEW"),
                  d = t.get("SWE_PST_NEW_BUSOBJ"),
                  v = t.get("SWE_PST_STR_CACHE"),
                  m = t.get("SWE_PST_NEW_NAV_CTRL_MGR"),
                  g = t.get("SWE_PST_NAV_CTRL_INFO"),
                  b = t.get("SWE_PROP_VALUE"),
                  w = t.get("SWE_PST_BUSOBJ_INFO"),
                  E = t.get("SWE_PST_VIEW_INFO"),
                  S = t.get("SWE_PST_CLEAR_MV"),
                  x = t.get("SWE_PST_EXT_OBJ_INFO"),
                  T = t.get("SWE_PST_ICON_LIST"),
                  N = t.get("SWE_PST_NEW_BUSCOMP"),
                  C = SiebelApp.S_App.BusComp,
                  k = SiebelApp.S_App.Applet,
                  L = SiebelApp.S_App.ListApplet,
                  A = SiebelApp.S_App.Playbarapplet,
                  O, M = t.get("SWE_PST_NEW_APPLET"),
                  _ = t.get("SWE_PST_NEW_LIST_APPLET"),
                  D = t.get("SWE_PST_NEW_TREEAPPLET"),
                  P = t.get("SWE_RPC_PROP_COMMAND_MGR"),
                  H = null;
              do {
                  var B = h.GetType();
                  switch (B) {
                      case N:
                          O = new C, O.ProcessObjectInfo(h.GetChild(0));
                          break;
                      case M:
                      case _:
                      case D:
                          if (h) {
                              var j = h.GetChild(0);
                              j && j.GetProperty("n") === "Task Watch Window Applet" && j.GetChildByType("cdi") && j.GetChildByType("cdi").SetProperty("js", CCFMiscUtil_ArrayToString(["siebel/taskwatchwindowpm.js", "siebel/taskwatchwindowpr.js"]))
                          }
                          var F = e.PrepareModuleInfo(h);
                          (function() {
                              var e = h,
                                  t = O,
                                  n = new $.Deferred;
                              o.push(n.promise());
                              var r = function() {
                                  SiebelApp.S_App.AppInitPromise().done(function() {
                                      try {
                                          l !== c ? (Ot.call(SiebelApp.S_App, e, t), n.resolveWith(SiebelApp.S_App, [""])) : (At.call(SiebelApp.S_App, e, t), n.resolveWith(SiebelApp.S_App, ["SA Applet Object Info"]))
                                      } catch (r) {
                                          SiebelJS.Log(r)
                                      }
                                      e = h = null
                                  })
                              };
                              F.length ? require(F, r) : r()
                          })();
                          break;
                      case d:
                          this.InitializeBO(h);
                          break;
                      case S:
                          this.ClearMainView(), this.ClearBusObj();
                          break;
                      case w:
                          i.ProcessObjectInfo(h);
                          break;
                      case p:
                          SiebelApp.S_App.IsRwd() && mt.call(), s = SiebelAppFacade.ProxyFactory.MakeObject(B), SiebelAppFacade.ComponentMgr.RegisterLevel(s, this), o.push(s.GetFilesAndProcessObjectInfo(h.GetChild(0)));
                          break;
                      case E:
                          e.IsEmpty(s) || o.push(s.GetFilesAndProcessObjectInfo(h));
                          break;
                      case m:
                          var I = h.GetChildCount();
                          I > 0 && y.ProcessObjectInfo(h.GetChild(0));
                          break;
                      case g:
                          SiebelApp.S_App.IsRwd() ? u = h.Clone() : (y.HandleResponsePS(h.Clone()), y.ProcessObjectInfo(h));
                          break;
                      case x:
                          var q = h.GetProperty(t.get("SWE_PST_EXT_OBJ_INFO")),
                              R = SiebelApp.S_App.getExtObject(q);
                          R ? R.HandleNotify(h.GetChild(0)) : (R = SiebelApp.S_App.RegisterExtObject(h), R && (R.Setup(h.GetChild(0)), q === "Dashboard" ? lt.call(this) : q === "ChatPane" ? ct.call(this) : ft.call(this), (q !== "Dashboard" || n.GetProperty(t.get("SWE_RPC_PROP_VIEW_ID")) !== "Dashboard") && R.Show()));
                          break;
                      case T:
                          Mt.call(this, h);
                          break;
                      case P:
                          SiebelApp.S_App.IsRwd() && this.GetCmdMgr().ProcessRWDNotifications(h);
                          break;
                      default:
                  }
              } while (h = f.EnumChildren(!1))
          }
      }
      SiebelApp.S_App.GetEnablePerfHooks() && SiebelApp.S_App.GetTimer() && (SiebelApp.S_App.GetTimer().TimeGoToView("", "Processed Object Info"), SiebelApp.S_App.GetTimer().TimePopupApplet("", "Processed Object Info"));
      var U = this;
      return o.length > 0 ? $.when.apply($, o).done(function() {
          r.resolveWith(U, ["API "])
      }) : r.resolveWith(U, ["API "]), SiebelApp.S_App.IsRwd() && u && r.done(function() {
          y.HandleResponsePS(u), y.ProcessObjectInfo(u)
      }), r.promise()
  }

  function Lt(e, t) {
      SiebelApp.S_App.LocaleObject && SiebelApp.S_App.LocaleObject.AddLocalString(e, t)
  }

  function At(n, r) {
      var i, s = n.GetChild(0).Clone();
      i = SiebelAppFacade.ProxyFactory.MakeObject(n.GetType());
      if (i) {
          r && i.SetBusComp(r), i.SetName(s.GetProperty(t.get("SWE_PROP_NAME")));
          var o = {
              callback: i.ProcessObjectInfo,
              scope: i,
              input: {
                  ps: s
              }
          };
          SiebelAppFacade.ComponentMgr.MakeComponent(this, s, i, o), SiebelAppFacade.ComponentMgr.CompleteComponent(this, s, i), e.IsTrue(n.GetProperty(t.get("SWE_PST_STANDALONE_APPLET"))) && (M[i.GetName()] = i, i.SetIsStandAlone(!0), i.SetAppletActive(!0, i)), i.Initialize()
      }
  }

  function Ot(n, r) {
      var i, s = n.GetChild(0).Clone(),
          o = s.GetProperty(t.get("SWE_PROP_NAME")) === "About View Applet";
      i = SiebelAppFacade.ProxyFactory.MakeObject(n.GetType());
      if (i) {
          r && i.SetBusComp(r);
          if (n.GetType() === t.get("SWE_PST_NEW_LIST_APPLET") || o) {
              i.SetName(s.GetProperty(t.get("SWE_PROP_NAME"))), o && (s.SetProperty(t.get("SWE_UIDEF_PM_CTR"), "siebel/aboutviewpm"), s.SetProperty(t.get("SWE_UIDEF_PR_CTR"), "siebel/aboutviewpr"));
              var u = {
                  callback: i.ProcessObjectInfo,
                  scope: i,
                  input: {
                      ps: s
                  }
              };
              SiebelAppFacade.ComponentMgr.MakeComponent(this, s, i, u), SiebelAppFacade.ComponentMgr.CompleteComponent(this, s, i)
          } else i.ProcessObjectInfo(s), SiebelAppFacade.ComponentMgr.MakeComponent(this, s, i);
          e.IsTrue(n.GetProperty(t.get("SWE_PST_STANDALONE_APPLET"))) && (M[i.GetName()] = i, i.SetIsStandAlone(!0), SiebelApp.S_App.PortletSessionMgr && i.SetAppletActive(!0, i)), SiebelApp.S_App.GetPopupPM().Get("state") !== t.get("POPUP_STATE_VISIBLE") && (i.Initialize(), SiebelAppFacade.ComponentMgr.FindComponent({
              id: i.GetName()
          }).Show(), i.ShowOnly(), i.ShowSelection(), this.ClearErrorMsg(), i.HasCustomShadow() && i.shadow && typeof i.shadow.OnLoad == "function" && i.shadow.OnLoad())
      }
  }

  function Mt(e) {
      var n, r = [],
          i = e.GetType();
      if (i != t.get("SWE_PST_ICON_LIST")) return;
      n = e.GetProperty(t.get("SWE_PROP_NAME"));
      if (n) {
          var s = e.GetChildCount();
          for (var o = 0; o < s; o++) {
              var u = e.GetChild(o),
                  a = u.GetType();
              if (a == t.get("SWE_PST_ICON")) {
                  var f = _t.call(this, u);
                  r.push(f)
              }
          }
          O[n] = r
      }
  }

  function _t(n) {
      if (e.IsEmpty(n)) return;
      var r = {};
      return r.iconName = n.GetProperty(t.get("SWE_PROP_NAME")), r.iconImage = n.GetProperty(t.get("SWE_PROP_ICON_IMG")), r
  }

  function Dt(e) {
      SiebelApp.Environment.SetProtoAPIs(e)
  }

  function Pt() {
      C || (C = new SiebelApp.S_App.Menu(this), C.CreatePM("AppMenuPR", SiebelAppFacade.AppMenuPM), C.ShowMenuControl())
  }

  function Ht() {
      var e = parseInt(SiebelApp.S_App.GetSessionWarnTimeout(), 10),
          t = parseInt(SiebelApp.S_App.GetSessionTimeout(), 10);
      e && typeof e == "number" && isFinite(e) && e > 0 && StartTimer((t - e) * 1e3, Math.floor(e / 60), e % 60, Math.floor(t / 60), t % 60)
  }

  function Bt() {
      var e = SiebelApp.S_App.ViewTarget();
      SiebelApp.S_App.OnLoadViewContainer(e), this.GetRefreshViewURL() ? SiebelApp.S_App.GotoView("", "", this.GetRefreshViewURL(), null) : this.GetAckView() && SiebelApp.S_App.GotoView(this.GetAckView(), "", "", null), SiebelApp.S_App.PortletSessionMgr || this.InitializeGlobalMenu();
      var n = SiebelAppFacade.ComponentMgr.FindComponent({
          id: t.get("SWE_PST_COMM_TOOLBAR")
      });
      if (SiebelApp.S_App.CommToolbar && !n) {
          var r = CCFMiscUtil_CreatePropSet();
          r.SetProperty(t.get("SWE_UIDEF_PM_CTR"), "siebel/commToolbarpmodel"), r.SetProperty(t.get("SWE_UIDEF_PR_CTR"), "siebel/commToolbarprender"), SiebelAppFacade.ComponentMgr.MakeComponent(this, r, SiebelApp.S_App.CommToolbar), (n = SiebelAppFacade.ComponentMgr.FindComponent({
              id: t.get("SWE_PST_COMM_TOOLBAR")
          })) && n.Show()
      }
      this.GetCmdMgr().Show()
  }

  function jt() {
      clearTimeout(z);
      var e = this.HeartBeatInterval() || -1;
      if (e > 0 && (!IsOfflineModeEnabled() || !this.GetOfflineMode())) {
          var n = CCFMiscUtil_CreatePropSet(),
              r = CCFMiscUtil_CreatePropSet(),
              i = {};
          e *= 1e3, r.SetProperty(t.get("SWE_CMD_ARG"), t.get("SWE_PROP_HEARTBEAT")), i.opdecode = !1, i.HB = !0, i.cb = i.errcb = function() {
              jt.call(SiebelApp.S_App)
          }, z = setTimeout(function() {
              SiebelApp.S_App.CallServer(r, n, !0, i)
          }, e)
      }
  }

  function Ft(n, r, i) {
      var s = this.lp,
          o = this.outputPS,
          u = this.scope;
      typeof s.errcb == "function" ? (s.args = s.args || [], s.errcb.apply(s.scope || null, s.args)) : s.scope !== "undefined" && s.scope !== undefined && typeof s.scope.PostExecute == "function" && (s.args = s.args || [], o.SetProperty(t.get("AJAX_FAIL_ERR"), r), s.args.push(o), s.scope.PostExecute.apply(s.scope || null, s.args)), s.HB && r === "error" && (SiebelApp.S_App.uiStatus.Free(), e.Alert(SiebelApp.S_App.LocaleObject.GetLocalString("IDS_CLIENT_AJAX_ERR"))), (s && !s.selfbusy || !s) && u.uiStatus.Free()
  }

  function qt(e, t) {
      var n;
      return this.shadow && typeof this.shadow.OnPreInvokeMethod == "function" ? (n = this.shadow.OnPreInvokeMethod(e, t), n === "CancelOperation" ? !1 : !0) : !0
  }

  function Rt(e, t) {
      this.shadow && typeof this.shadow.OnInvokeMethod == "function" && this.shadow.OnInvokeMethod(e, t)
  }

  function zt() {
      try {
          return new window.XMLHttpRequest
      } catch (e) {}
  }

  function Wt() {
      try {
          return new window.ActiveXObject("Microsoft.XMLHTTP")
      } catch (e) {}
  }

  function Kt() {
      return Xt
  }

  function Qt(t, n) {
      Xt = t, cn(), Xt ? (SiebelApp.S_App.uiStatus.Free(), pn(n)) : (ln(), e.IsEmpty(n) || e.Alert(n))
  }

  function Gt() {
      return Vt === null && (Vt = SiebelApp.WebSocketManager.CreateWSHandler(t.get("WS_COMPONENT_TYPE_INLINE_EDIT")), Vt.SetAlertOnFail(!1), Vt.timeoutID = null, Vt.OnClose = Yt, Vt.OnFail = Zt, Vt.OnMessage = en, rn()), Vt
  }

  function Yt() {
      SiebelJS.Debug("[DISA][Warning] DISA was closed during file editing."), tn(), gn(), ln()
  }

  function Zt() {
      tn(), gn()
  }

  function en(e, n) {
      var r = SiebelApp.S_App.LocaleObject,
          i = e[t.get("WS_INLINEEDIT_DISA_READY")];
      if (i === !0) {
          mn(), nn();
          return
      }
      if (Xt || $t) {
          nn.call(this);
          if (e instanceof Blob) un(e, n);
          else {
              var s = e[t.get("WS_MSG_TYPE_IN_ERROR")];
              if (s) {
                  var o = r.GetLocalString(s);
                  o ? Qt(!1, o) : Qt(!1, s), SiebelApp.S_App.uiStatus.Free();
                  return
              }
              var u = e[t.get("WS_INLINEEDIT_FILE_TRANSFERRED")];
              if (u === !0) {
                  an(), $t ? Xt = !1 : fn(), SiebelApp.S_App.uiStatus.Free();
                  return
              }
              var a = e[t.get("WS_INLINEEDIT_UPLOAD_STATUS")],
                  f = !0,
                  l;
              switch (a) {
                  case t.get("WS_INLINEEDIT_NEEDUPLOAD_FILESTILLOPEN"):
                      f = !1, l = r.GetLocalString("IDS_ATT_CLOSE_CONFIRM");
                      break;
                  case t.get("WS_INLINEEDIT_NONEEDUPLOAD"):
                      break;
                  case t.get("WS_INLINEEDIT_FILEERROR"):
                      an(), l = r.GetLocalString("IDS_ATT_UPLOAD_FAILED");
                      break;
                  case t.get("WS_INLINEEDIT_NONEEDUPLOAD_FILESTILLOPEN"):
                      f = !1, l = r.GetLocalString("IDS_ATT_CLOSE_CONFIRM");
                      break;
                  default:
              }
              Qt(!f, l), SiebelApp.S_App.uiStatus.Free()
          }
      }
  }

  function tn() {
      nn(), Xt && (Xt = !1, SiebelApp.S_App.uiStatus.Free(), an())
  }

  function nn() {
      Vt && Vt.timeoutID && (window.clearTimeout(Vt.timeoutID), Vt.timeoutID = null)
  }

  function rn() {
      Jt = {}, Jt[t.get("SWE_PROP_SESSION_RANDOM_NUMBER")] = SiebelApp.S_App.GetSRN(), Jt[t.get("SWE_CMD_ARG")] = t.get("SWE_CMD_INVOKE_METHOD_STR"), Jt[t.get("SWE_METHOD_STR")] = "AttachAttachment", Jt[t.get("SWE_VIEW_RPC_ARG")] = "1"
  }

  function sn(e, t) {
      Jt[e] = t.toString()
  }

  function on() {
      return Math.random().toString(36).slice(-10)
  }

  function un(e, n) {
      var r = 'Content-Disposition: form-data; name="',
          i = '"\r\n\r\n',
          s = "\r\n",
          o = on(),
          u = "--" + o,
          f = "";
      for (var l in Jt) Jt.hasOwnProperty(l) && (f += u + s, f += r + l + i + Jt[l] + s);
      var c = new Blob([f]),
          h = u + s;
      h += r + t.get("SWE_FILE_NAME_STR") + '"; filename="' + n + '"\r\n', h += "Content-Type: application/octet-stream\r\n\r\n";
      var p = new Blob([h]),
          d = "\r\n" + u + "--\r\n",
          v = new Blob([d]),
          m = new Blob([c, p, e, v]),
          g = new FileReader;
      g.onload = function() {
          var e = zt();
          e.onreadystatechange = function() {
              Qt(!1);
              if (this.readyState === 4 && this.status === 200) {
                  var e = SiebelApp.S_App.GetActiveView().GetActiveApplet();
                  e.InvokeMethod("WriteRecord", CCFMiscUtil_CreatePropSet())
              }
          };
          var n = SiebelApp.S_App.GetPageURL() + a + t.get("SWE_PROP_SESSION_RANDOM_NUMBER") + "=" + SiebelApp.S_App.GetSRN();
          e.open("POST", n, !1), e.setRequestHeader("Content-Type", "multipart/form-data; boundary=" + o);
          var r = g.result;
          e.send(r), cn(), SiebelApp.S_App.uiStatus.Free()
      }, g.readAsArrayBuffer(m)
  }

  function an() {
      var e = $("#downloadFileChooseDialog");
      e.length > 0 && e.dialog("close")
  }

  function fn() {
      var e = $("#uploadFileDialogContent");
      e.length > 0 && (e.find("#uploadReminder").styleShow(), e.find("#uploadMessage").styleHide(), e.dialog("widget").find(".ui-dialog-titlebar .ui-dialog-titlebar-close").styleShow(), e.dialog("widget").find("#finishButton").styleShow(), e.dialog("widget").find("#okButton").styleHide(), e.dialog("open"))
  }

  function ln() {
      var e = $("#uploadFileDialogContent");
      e.length > 0 && e.dialog("close")
  }

  function cn() {
      var e = $("#uploadFileDialogContent");
      e.length > 0 && (e.dialog("widget").find("button").removeClass("appletButtonDis").addClass("appletButton").prop("disabled", !1), e.dialog("widget").find(".ui-dialog-titlebar .ui-dialog-titlebar-close").prop("disabled", !1))
  }

  function hn() {
      var e = $("#uploadFileDialogContent");
      e.length > 0 && (e.dialog("widget").find("button").removeClass("appletButton").addClass("appletButtonDis").prop("disabled", !0), e.dialog("widget").find(".ui-dialog-titlebar .ui-dialog-titlebar-close").prop("disabled", !0))
  }

  function pn(e) {
      var t = $("#uploadFileDialogContent");
      t.length > 0 && (t.find("#uploadMessage").html(e), t.dialog("widget").find(".ui-dialog-titlebar .ui-dialog-titlebar-close").styleHide(), t.find("#uploadReminder").styleHide(), t.find("#uploadMessage").styleShow(), t.dialog("widget").find("#finishButton").styleHide(), t.dialog("widget").find("#okButton").styleShow(), t.dialog("open"))
  }

  function dn() {
      SiebelApp.S_App.uiStatus.Busy({
          mask: !0
      }), hn();
      var e = Gt(),
          n = {};
      n[t.get("WS_MSG_COMMAND")] = t.get("WS_MSG_CMD_UPLOAD_FILE"), e.SendMessage(n), e.timeoutID = setTimeout(function() {
          SiebelJS.Debug("[DISA][Warning] Uploading file from DISA time out."), SiebelApp.S_App.uiStatus.Free(), Qt(!1)
      }, t.get("WS_INLINEEDIT_UPLOADFILE_TIMEOUT"))
  }

  function vn() {
      var e = Gt(),
          n = {};
      n[t.get("WS_MSG_COMMAND")] = t.get("WS_INLINEEDIT_DISA_READY"), e.SendMessage(n), e.timeoutID = setTimeout(function() {
          SiebelJS.Debug("[DISA][Warning] Ping disa timeout."), gn()
      }, 3e3)
  }

  function mn() {
      var e = $("#downloadFileChooseDialog");
      e.length > 0 && (e.parent().find("#editBtnHint").styleHide(), e.parent().find("#editButton").removeClass("appletButtonDis").addClass("appletButton").removeAttr("disabled").attr("tabindex", "0").focus())
  }

  function gn() {
      var e = $("#downloadFileChooseDialog");
      e.length > 0 && (e.parent().find("#editBtnHint").styleShow(), e.parent().find("#editButton").removeClass("appletButton").addClass("appletButtonDis").prop("disabled", !0).attr("tabindex", "-1"))
  }
  var e = SiebelJS.Dependency("SiebelApp.Utils"),
      t = SiebelJS.Dependency("SiebelApp.Constants"),
      n = t.get("SWE_PST_APP_INFO"),
      r, i, s, o = t.get("SWE_FIELD_STR"),
      u = t.get("SWE_RPC_PROP_URL"),
      a = t.get("SWE_ARG_START"),
      f = t.get("SWE_RPC_PROP_FILEDOWNLOADSAVE"),
      l = t.get("SWE_METHOD_SAVE_QUERY"),
      c = t.get("SWE_METHOD_SAVE_QUERY_AS"),
      h = t.get("SWE_METHOD_POST_CHANGES"),
      p = t.get("SWE_TARGET_TOP"),
      d = t.get("SWE_BCF_FIELD"),
      v = [],
      m = [],
      g = [],
      y, b = {},
      w = [],
      E, S = [],
      x = {},
      T, N = !1,
      C = null,
      k, L = {},
      A = !1,
      O = {},
      M = {},
      _ = null,
      D, P = !0,
      H = {},
      B = !1,
      j = "",
      F = "",
      I = "",
      q = "",
      R = !1,
      U = !1,
      z = !1,
      W = null,
      X = !1,
      V = 0,
      J = null,
      K = [],
      Q, G = null,
      Y = null,
      Z = null,
      et = $.Deferred(),
      tt = et.promise(),
      nt = {},
      rt = function() {
          var e;
          rt = function() {
              return e
          }, rt.prototype = this, e = new rt, e.uiStatus = new SiebelApp.UIStatus, e.constructor = rt;
          var t = new SiebelApp.CommandManager(e);
          return rt.prototype.GetCmdMgr = function() {
              return t
          }, SiebelAppFacade.ComponentMgr.RegisterLevel(e), e
      };
  r = new rt, rt.prototype.SetExternalActiveApplet = function(e) {
          W = e
      }, rt.prototype.GetExternalActiveApplet = function(e) {
          return W
      }, rt.prototype.SetShowNewPage = function(e) {
          X = e
      }, rt.prototype.GetShowNewPage = function() {
          return X
      }, rt.prototype.GetRowCounterTemplateMap = function(e) {
          return H[e]
      }, rt.prototype.IsExternalApplet = function(t) {
          return !e.IsEmpty(M[t.GetName()])
      }, rt.prototype.RemoveApplet = function(e) {
          this.GetExternalActiveApplet() === e && this.SetExternalActiveApplet(null), delete M[e.GetName()];
          var t = SiebelAppFacade.ComponentMgr.FindComponent({
              id: e.GetName()
          });
          t && SiebelAppFacade.ComponentMgr.DeleteComponent(t, this), e.EndLife && e.EndLife(), delete e
      }, rt.prototype.GetPopupPM = function() {
          return D
      }, rt.prototype.GetMsgBarPM = function() {
          return _
      }, rt.prototype.GetIconMap = function() {
          return O
      }, rt.prototype.GetCancelId = function() {
          return V
      }, rt.prototype.PushPostBack = function(e, t) {
          w.push({
              callBack: e,
              object: t
          })
      }, rt.prototype.DefineAccessor = function(n, r, i, s, o) {
          s = t.get(s);
          var u = null;
          r.PropertyExists(s) && (u = r.GetProperty(s)), o === !0 && (u = SiebelApp.S_App.LookupStringCache(u));
          if (!e.IsEmpty(u) || typeof n[i] != "function") n[i] = function() {
              return u
          };
          r = null
      }, rt.prototype.GetActiveBusObj = function() {
          return i
      }, rt.prototype.SetActiveBusObj = function(e) {
          i = e
      }, rt.prototype.AppInitPromise = function() {
          return tt
      }, rt.prototype.AppInitDeferred = function() {
          return et
      }, rt.prototype.GetActiveView = function() {
          return s
      }, rt.prototype.SetActiveView = function(e) {
          s = e
      }, rt.prototype.SetLayoutLoaded = function(e, t, n, r) {}, rt.prototype.SetLayoutUnloaded = function() {}, rt.prototype.SetThreadbarSpan = function() {}, rt.prototype.ViewUINotLoaded = function() {}, rt.prototype.ProcessRPCInfo = function(e) {}, rt.prototype.OnUnload = function() {
          SiebelJS.Debug("On Unload")
      }, rt.prototype.GetActivePageComp = function() {
          return Y
      }, rt.prototype.SetActivePageComp = function(e) {
          Y = e
      }, rt.prototype.REPCHK_MRV1 = function() {
          return U
      }, rt.prototype.GetAppObjTree = function(e) {
          var t = [];
          return e = !!e && !$.isEmptyObject(e) ? e : this, t.push(e), t
      }, rt.prototype.SetSelfProps = function(n) {
          var r = e.Curry(rt.prototype.DefineAccessor, rt.prototype, n);
          r("GetUserName", "SWE_PROP_USER_ID"), r("GetName", "SWE_PROP_NAME"), r("GetAckView", "SWE_PROP_ACK_VIEW"), SiebelApp.S_App.IsRwd() && r("GetAckApplet", "SWE_APPLET_STR"), r("GetRefreshViewURL", "SWE_PROP_REFRESH_VIEW_URL"), r("HeartBeatInterval", "SWE_PROP_HB_INTERVAL"), r("GetCookieName", "SWE_PROP_COOKIE_NAME"), r("GetSessionId", "SWE_RPC_PROP_SESSION_NUMBER"), r("GetSRN", "SWE_PROP_SESSION_RANDOM_NUMBER"), r("UseCookie", "SWE_RPC_PROP_USE_COOKIE"), r("UseSecureCookie", "SWE_RPC_PROP_USE_SECURE_COOKIE"), r("GetPageURL", "SWE_PROP_PAGEURL"), r("GetLoginTimeStamp", "SWE_PROP_LOGIN_TIMESTAMP"), r("GetScriptDir", "SWE_PROP_SCRIPT_DIR"), r("GetSWEReqCount", "SWE_PROP_REQ_COUNT"), r("GetSWEReqCount", "SWE_COUNT_STR"), r("GetStandAloneClient", "SWE_PROP_STANDALONE_CLIENT"), r("GetAccessibilityEnhanced", "SWE_PROP_ACCESSIBILITY_ENHANCED"), r("GetHtmlPopupName", "SWE_PROP_HTML_POPUP_NAME"), r("GetPopupHDBrowser", "SWE_PROP_POPUP_HDBrowser"), r("GetCheckSum", "SWE_PROP_CHECKSUM"), r("GetCancelQueryTimeout", "SWE_PROP_CANCEL_QUERY_TIME_OUT"), r("GetPopupConSize", "SWE_PROP_POPUP_CON_SIZE"), r("GetStrictDate", "SWE_PROP_STRICT_DATE"), r("IsUIEnableDateError", "SWE_PROP_IS_ENABLE_UI_DATE_ERROR_DETECT"), r("UseAnsiCtrls", "SWE_PROP_USE_ANSI_CONTROLS"), r("IsMobileApplication", "SWE_IS_MOBILE_APPLICATION"), r("IsAutoOn", "SWE_IS_AUTO_ON"), r("GetRequiredIndicator", "SWE_PROP_ICON_REQ_INDICATOR"), r("WPName", "SWE_PROP_WP_NAME"), r("ViewTarget", "SWE_VIEW_TARGET"), r("IsSui", "SWE_PROP_SUI_THEME"), r("IsUPTEnabled", "SWE_PROP_ENABLE_UPT"), r("GetBusyTimer", "SWE_BUSY_TIMER"), r("IsListNavSync", "SWE_FORCE_SYNC_LIST_NAVIGATION"), r("GetEnableElasticGrid", "SWE_ENABLE_ELASTIC_GRID"), r("IsLabelResponsive", "SWE_RESPONSIVE_LABEL"), r("GetSessionWarnTimeout", "SWE_PROP_SESSION_WARN_TIMEOUT"), r("GetSessionTimeout", "SWE_PROP_SESSION_TIMEOUT"), rt.prototype.GetScreenNavTitle = function() {
              return ""
          }, rt.prototype.GetDetailCategoryTitle = function() {
              return ""
          };
          var i = n.GetProperty(t.get("SWE_MINOR_REL_VER1"));
          e.IsTrue(i) && (U = !0), i = n.GetProperty(t.get("SWE_PROP_PHONE_LEADING_ZERO"));
          if (i) {
              var s, o = " ";
              s = i.toString().split(",");
              for (var u = 0, a = s.length; u < a; u++) {
                  var f = s[u];
                  f && f[0] !== "+" && (f = "+" + f), nt[f] = o
              }
          }
      }, rt.prototype.GetType = function() {
          return t.get("SWE_COMPOSER_APPLICATIONCONTEXT_TYPE")
      }, rt.prototype.GetChildren = function() {
          var e = [],
              t = this.NavCtrlMngr(),
              n = this.GetCmdMgr(),
              r = n ? n.GetToolbar() : null,
              i = this.GetBusObj();
          return i && !$.isEmptyObject(i) && e.push(i), i = this.GetActiveView(), i && !$.isEmptyObject(i) && e.push(i), i = C, i && !$.isEmptyObject(i) && e.push(i), t && (i = t.GetscreenNavigationPM().Get("GetTabInfo"), i && !$.isEmptyObject(i) && e.push(i), i = t.GetdetailNavigationPM().Get("GetTabInfo"), i && !$.isEmptyObject(i) && e.push(i), i = t.GetPDQPM().ExecuteMethod("GetPDQItem"), i && !$.isEmptyObject(i) && e.push(i)), r && (i = r.ExecuteMethod("GetToolbarItems"), i && !$.isEmptyObject(i) && e.push(i)), i = M, i && !$.isEmptyObject(i) && e.push(i), t = null, n = null, i = null, e
      }, rt.prototype.IsPhoneLeadingZeroAllowed = function(e) {
          return nt[e] ? !0 : !1
      }, rt.prototype.AppendToStrCache = function(e) {
          if (e && e !== "") {
              var t = [];
              CCFMiscUtil_StringToArray(e, t), m = m.concat(t)
          }
      }, rt.prototype.AppendToLocalStrCache = function(e) {
          var n = SiebelApp.Utils.IndexOf(g, e);
          return n === -1 && (g.push(e), n = g.length - 1), t.get("SWE_INDEX_PREFIX") + n
      }, rt.prototype.LookupStringCache = function(e) {
          var n = "";
          return e >= 0 && e < m.length ? n = m[e] : e && e[0] === t.get("SWE_INDEX_PREFIX") && (e = e.substring(1, e.length), n = g[e]), n
      }, rt.prototype.GetStringCache = function() {
          return m
      }, rt.prototype.SetStringCache = function(e) {
          m = e
      }, rt.prototype.GetNavLevel = function() {
          return K
      }, rt.prototype.GetPMPropSet = function() {
          return J
      }, rt.prototype.SetPMPropSet = function(e) {
          J = J === null ? e : J, K = K.length === 0 ? (J ? J.GetProperty(t.get("SWE_NAV_EXPANDED_LEVEL")) || "" : "").split(",") : K
      }, rt.prototype.SetDiscardUserState = function(e) {
          A = e
      }, rt.prototype.GetDiscardUserState = function() {
          return A
      }, rt.prototype.GotoView = function(n, r, i, s, o, u) {
          var a;
          this.uiStatus.Busy({
              target: this.GetTargetViewContainer(),
              mask: !0
          }), SiebelApp.S_App.NotifyTimer("TimeGoToView", [n, "Start GotoView"]);
          var f = !0,
              l;
          if (!e.IsEmpty(i)) {
              a = e.DecodeFromQueryString(i, !0);
              var c = a.GetProperty(t.get("SWE_VIEW_ARG"));
              e.IsEmpty(n) && e.IsEmpty(r) && !e.IsEmpty(c) && (!this.GetActiveView() || c !== this.GetActiveView().GetName()) && !a.GetProperty(t.get("SWE_ARG_KEEP_CONTEXT")) && a.SetProperty(t.get("SWE_ARG_KEEP_CONTEXT"), "0")
          } else a = CCFMiscUtil_CreatePropSet();
          if (this.GetDiscardUserState()) this.GetPopupPM().Get("state") === t.get("POPUP_STATE_VISIBLE") && this.GetPopupPM().ExecuteMethod("SetPopupVisible", !1);
          else if (!o && !this.CanLeaveMainView()) return f = !1, this.uiStatus.Free(), f;
          SiebelApp.S_App.NotifyTimer("TimeGoToView", [n, "View Cache Ready"]), e.IsEmpty(a.GetProperty(t.get("SWE_CMD_ARG"))) && a.SetProperty(t.get("SWE_CMD_ARG"), t.get("SWE_GOTO_VIEW")), a.GetProperty(t.get("SWE_ARG_KEEP_CONTEXT")) || a.SetProperty(t.get("SWE_ARG_KEEP_CONTEXT"), "1"), this.SetDefaultArgs(a), e.IsEmpty(n) || (n = n.split("&").join("%26"), a.SetProperty(t.get("SWE_VIEW_ARG"), n)), SiebelApp.S_App.IsRwd() && SiebelApp.S_App.PortletSessionMgr && (l = this.GetAckApplet()) && a.SetProperty(t.get("SWE_APPLET_STR"), l), e.IsEmpty(a.GetProperty(t.get("SWE_COUNT_STR"))) ? a.SetProperty(t.get("SWE_COUNT_STR"), this.GetSWEReqCount()) : rt.prototype.GetSWEReqCount = function() {
              return a.GetProperty(t.get("SWE_COUNT_STR"))
          };
          var h = e.EncodeToQueryString(a, e.IsEmpty(i)),
              p = {};
          return p.url = this.GetPageURL(), p.data = h.split(" ").join("%20"), p.type = "POST", p.contentType = "application/x-www-form-urlencoded", p.async = !u, p.context = this, p.successfncallback = function() {
              var e = new $.Deferred,
                  t = this.ProcessResponse.apply(this, arguments);
              return t.done(function() {
                  SiebelApp.S_App.ProcessError(), SiebelApp.S_App.uiStatus.Free(), e.resolve()
              }), e.promise()
          }, SiebelApp.AjaxRequestMgr.Ajax(p), p = null, f
      }, rt.prototype.HideLayout = function(e) {
          if (typeof e == "string")
              if (e.match(/SS_OpenUIReportPane/) || e.match(/SS_TaskUIPane/)) $("#_sweview").removeClass("siebui-indent-content");
              else if (e.match(/TaskAssistant/)) {
              $("#_sweview").removeClass("siebui-indent-content");
              var t = SiebelApp.S_App.getExtObject("TaskAssistant");
              t && t.ExecuteMethod("Hide")
          } else if (e.match(/Dashboard/)) {
              $("#_sweview").removeClass("siebui-dashboard-content-indent");
              var t = SiebelApp.S_App.getExtObject("Dashboard");
              t && SiebelApp.S_App.UnregisterExtObject("Dashboard")
          } else if (e.match(/SS_ChatUI/)) $("#SS_ChatUI").removeClass("siebui-chat-pane");
          else if (e.match(/CommunicationPanel/)) {
              var t = SiebelApp.S_App.getExtObject("CommunicationPanel");
              t && t.ExecuteMethod("Hide")
          }
          $("#" + e).html(""), SiebelApp.EventManager.fireEvent("forceResize")
      }, rt.prototype.GenerateSrvrReq = function(n) {
          var r = CCFMiscUtil_CreatePropSet();
          r.SetProperty(t.get("SWE_CMD_ARG"), n), r.SetProperty(t.get("SWE_ARG_KEEP_CONTEXT"), "1"), this.SetDefaultArgs(r), r.SetProperty(t.get("SWE_COUNT_STR"), SiebelApp.S_App.GetSWEReqCount()), SiebelApp.S_App.OfflineCallMethod("GetSRN", r);
          var i = e.EncodeToQueryString(r, !1),
              s = SiebelApp.S_App.GetPageURL() + t.get("SWE_ARG_START") + i;
          return s
      }, rt.prototype.CanLeaveMainView = function() {
          var e = !0,
              t = this.GetActiveView();
          return t && !t.SetActiveApplet(null) && (e = !1), e
      }, rt.prototype.GetSWEReqCount = function() {
          return "1"
      }, rt.prototype.GetRequestDefault = function() {
          var e = CCFMiscUtil_CreatePropSet();
          return this.SetDefaultArgs(e), e.SetProperty(t.get("SWE_VIEW_ID_ARG"), ""), e
      }, rt.prototype
      .SetDefaultArgs = function(n) {
          n.SetProperty(t.get("SWE_VIEW_RPC_ARG"), "1"), n.SetProperty(t.get("SWE_PROP_SESSION_RANDOM_NUMBER"), this.GetSRN());
          var r = this.GetSWEReqCount();
          isNaN(r) || n.SetProperty(t.get("SWE_COUNT_STR"), r);
          if (!this.GetPopupPM().IsPopupStarted() && this.GetActiveView() && this.GetActiveView().GetActiveApplet() && !this.GetPopupPM().Get("isCurrencyOpen") && !e.IsTrue(n.GetProperty(t.get("SWE_BUSINESS_SERVICE")))) {
              e.IsEmpty(n.GetProperty(t.get("SWE_ACTIVE_APPLET_STR"))) && n.SetProperty(t.get("SWE_ACTIVE_APPLET_STR"), this.GetActiveView().GetActiveApplet().GetName());
              var i = n.GetProperty(t.get("SWE_APPLET_STR")),
                  s = !e.IsEmpty(M[i]);
              e.IsEmpty(n.GetProperty(t.get("SWE_ACTIVE_VIEW_STR"))) && !s && n.SetProperty(t.get("SWE_ACTIVE_VIEW_STR"), this.GetActiveView().GetName())
          } else !e.IsTrue(n.GetProperty(t.get("SWE_BUSINESS_SERVICE"))) && !n.GetProperty(t.get("SWE_ACTIVE_APPLET_STR")) && SiebelApp.S_App.PortletSessionMgr && W && n.SetProperty(t.get("SWE_ACTIVE_APPLET_STR"), W.GetName())
      }, rt.prototype.OnLoadViewContent = function() {
          try {
              SiebelApp.EventManager.cleanListners("gridresize"), SiebelApp.EventManager.fireEvent("preload");
              var n = this.GetActiveView();
              if (!e.IsEmpty(n)) {
                  e.IsTrue(SiebelApp.S_App.GetAccessibilityEnhanced()) && $("[name= _sweview]").attr({
                      role: "main",
                      title: s.GetViewSummary()
                  }), n.Initialize();
                  if (SiebelApp.S_App.IsRwd()) {
                      var r = "[id=" + SiebelApp.S_App.ViewTarget() + "]";
                      typeof n.GetRepstrName == "function" && $(r).attr("rn", n.GetRepstrName()), typeof n.GetUIName == "function" && $(r).attr("un", n.GetUIName()), typeof n.GetObjectType == "function" && $(r).attr("ot", n.GetObjectType())
                  } else typeof n.GetRepstrName == "function" && $("[name=_sweview]").attr("rn", n.GetRepstrName()), typeof n.GetUIName == "function" && $("[name=_sweview]").attr("un", n.GetUIName())
              } else SiebelApp.S_App.NavCtrlMgr.Show(!0);
              if (SiebelApp.S_App.IsMobileApplication() !== "true") {
                  var i = SiebelApp.S_App.IsRwd(),
                      o = SiebelApp.S_App.NavCtrlMgr.GetscreenNavigationPM(),
                      u = i ? $("#" + o.Get("placeholder") + ".siebui-nav-tree") : $("#_swescrnbar");
                  if (o && !u.hasClass("addshowactivated")) {
                      var a = SiebelApp.S_App.GetDirection(),
                          f = '<a href="#" id="sidebarOpenButton" title="Open Sidebar" class="sidebarNavButton hidden">' + (a ? "&laquo;" : "&raquo;") + "</a>",
                          l = i ? $("#" + SiebelApp.S_App.ViewTarget()) : $("#_swecontent"),
                          c = $("#" + o.Get("placeholder") + ".siebui-nav-tree");
                      u.prepend(f), u.addClass(a ? "siebui-rtl-screenbar addshowactivated" : "addshowactivated"), l.removeClass("siebui-max-width"), f = '<a href="#" class="sidebarNavButton" id="sidebarCloseButton" title="Close Sidebar">' + (a ? "&raquo;" : "&laquo;") + "</a>", c.prepend(f);
                      var h = $("#sidebarOpenButton"),
                          p = $("#sidebarCloseButton");
                      p.on("click", function() {
                          u.addClass("siebui-closed"), h.removeClass("hidden"), i && p.addClass("hidden"), p.css("Display", "none"), l.addClass("siebui-max-width"), $("[id^='gview_s']").resize()
                      }), h.on("click", function() {
                          u.removeClass("siebui-closed"), h.addClass("hidden"), i && p.removeClass("hidden"), l.removeClass("siebui-max-width").addClass(a ? "siebui-rtl-content" : ""), c.css("display", ""), $("[id^='gview_s']").resize()
                      })
                  }
              }
              var d = SiebelAppFacade.ComponentMgr.FindComponent({
                  id: t.get("SWE_PST_COMM_TOOLBAR")
              });
              if (SiebelApp.S_App.CommToolbar && !d) {
                  var v = CCFMiscUtil_CreatePropSet();
                  v.SetProperty(t.get("SWE_UIDEF_PM_CTR"), "siebel/commToolbarpmodel"), v.SetProperty(t.get("SWE_UIDEF_PR_CTR"), "siebel/commToolbarprender"), SiebelAppFacade.ComponentMgr.MakeComponent(this, v, SiebelApp.S_App.CommToolbar), (d = SiebelAppFacade.ComponentMgr.FindComponent({
                      id: t.get("SWE_PST_COMM_TOOLBAR")
                  })) && d.Show()
              }
              SiebelApp.S_App.IsRwd() && this.GetCmdMgr().Show(), this.GetActiveView() && this.GetActiveView().GetInvokeMethod() && this.GetCmdMgr().InvokeCommand(this.GetActiveView().GetInvokeMethod())
          } catch (m) {
              SiebelJS.Log(m)
          } finally {
              SiebelApp.EventManager.fireEvent("postload"), this.uiStatus.Free();
              var g = $("#_sweview").find("iframe");
              g.length > 1 && g.addClass("siebui-multi-frame"), g = null
          }
      }, rt.prototype.OnLoadExternalObject = function(e) {
          try {
              switch (e) {
                  case "SS_TaskUIPane":
                      if ($("#taskList").hasClass("tasklist1")) {
                          var t = SiebelApp.S_App.getExtObject("TaskUIPane");
                          t && (ft.call(this), t.Show())
                      }
                      break;
                  case "TaskAssistant":
                      var t = SiebelApp.S_App.getExtObject("TaskAssistant");
                      t && (ft.call(this), t.Show());
                      break;
                  case "Dashboard":
                      var t = SiebelApp.S_App.getExtObject("Dashboard");
                      t && (lt.call(this), t.Show());
                      break;
                  case "SS_OpenUIReportPane":
                      if ($("#reportList").hasClass("siebui-report-list")) {
                          var t = SiebelApp.S_App.getExtObject("ReportPane");
                          t && (ft.call(this), t.Show())
                      }
                      break;
                  case "SS_ChatUI":
                      var t = SiebelApp.S_App.getExtObject("ChatPane");
                      t && (ct.call(this), t.Show());
                      break;
                  case "CommunicationPanel":
                      var t = SiebelApp.S_App.getExtObject("CommunicationPanel");
                      t && t.Show()
              }
          } catch (n) {
              SiebelJS.Log(n)
          } finally {
              SiebelApp.EventManager.fireEvent("forceResize"), SiebelApp.EventManager.fireEvent("posteoiload"), this.uiStatus.Free()
          }
      }, rt.prototype.RegisterExtObject = function(e) {
          var n = e.GetProperty(t.get("SWE_PST_EXT_OBJ_INFO")),
              r = this.getExtObject(n);
          if (r) return r.Object;
          r = {};
          switch (n) {
              case "TaskUIPane":
                  var i = new SiebelAppFacade.TaskPresentationModel;
                  i.Init(), r.TYPE = n, r.Object = i;
                  break;
              case "TaskAssistant":
                  var s = new SiebelAppFacade.TaskAssistPlayerPM;
                  s.Init(), r.TYPE = n, r.Object = s;
                  break;
              case "Dashboard":
                  var o = new SiebelAppFacade.DashboardPM;
                  o.Init(), r.TYPE = n, r.Object = o;
                  break;
              case "ReportPane":
                  var u = new SiebelAppFacade.ReportPresentationModel;
                  u.Init(), r.TYPE = n, r.Object = u;
                  break;
              case "ChatPane":
                  var a = new SiebelAppFacade.ChatPresentationModel;
                  a.Init(), r.TYPE = n, r.Object = a;
                  break;
              case "CommunicationPanel":
                  var f = new SiebelAppFacade.CommunicationPanelPM;
                  f.Init(), r.TYPE = n, r.Object = f
          }
          return S.push(r), r.Object
      }, rt.prototype.getExtObject = function(e) {
          var t = S.length;
          for (var n = 0; n < t; n++)
              if (S[n].TYPE === e) return S[n].Object;
          return null
      }, rt.prototype.UnregisterExtObject = function(e) {
          var t = S.length;
          for (var n = 0; n < t; n++)
              if (S[n].TYPE === e) {
                  S.splice(n, 1);
                  return
              }
      }, rt.prototype.CanInvokeMethod = function(e) {
          return !0
      }, rt.prototype.LogOff = function() {
          var e = this.GetActiveView();
          if (e && !e.SetActiveApplet(null)) return !1;
          if (!SiebelApp.S_App.GetTimer()) return this.OnUnLoadApp(), !0;
          var n = this,
              r = {};
          r.type = "POST";
          var i = SiebelApp.S_App.GetTimer().GetLogBuffer(),
              s = SiebelApp.S_App.GetPageURL(),
              o = SiebelApp.S_App.GetSRN(),
              u = "SWECmd=InvokeMethod&SWEMethod=WritePerfLog&SRN=" + o + "&" + t.get("SWE_PERF_LOG_DATA") + "=" + URLEncode(i);
          $.ajax({
              type: "POST",
              url: s,
              data: u,
              processData: !1,
              complete: n.OnUnLoadApp
          })
      }, rt.prototype.OnUnLoadApp = function() {
          var e = "",
              t = "1",
              n = new Date;
          e = e + SiebelApp.S_App.GetPageURL() + "?SWECmd=Logoff&SWETS=" + n.valueOf() + "&SWEPreLd=" + t, SiebelApp.S_App.IsConfigMode() ? top.location.replace(e) : window.location.replace(e)
      }, rt.prototype.SetCancelableRPCInfo = function(e, n) {
          var r = SiebelApp.S_App.GetActiveView();
          SiebelApp.S_App.GetCancelQueryTimeout() > -1 && "ExecuteNamedQuery" === e && r && r.CanCancelQuery() && n.SetProperty(t.get("SWE_PROP_CANCELABLE_RPC"), "1")
      }, rt.prototype.InvokeMethod = function(n, r, i) {
          var s = !0;
          r = r || CCFMiscUtil_CreatePropSet();
          var o = r.Clone(),
              u = this.GetMainView();
          s = qt.call(this, n, o);
          if (!s) return !1;
          var a = {},
              f = this;
          typeof i == "object" || i === !0 || i === !1 ? (a.scope = this, a.args = [], a.args.push(n), a.args.push(o), a.async = typeof i.async == "boolean" ? i.async : i, a.selfbusy = i.selfbusy || !1, a.mask = i.mask || !1, a.cb = function() {
              var e = Array.prototype.slice.call(arguments),
                  t;
              e.push(f.PostExecute.apply(f, arguments)), typeof i.scope != "undefined" && typeof i.scope.cb == "function" && i.scope.cb.apply(i.scope || null, e), e[0] === "ExecuteNamedQuery" && (SiebelApp.S_App.uiStatus.Free(), t = SiebelApp.S_App.GetPopupPM(), t && ($("div[name=popup]").removeData("InitDlg"), t.ExecuteMethod("OnExecuteQuery")))
          }) : a = undefined;
          switch (n) {
              case "Query":
                  var p = r.Applet;
                  delete r.Applet, p.GetBusComp().HandleQuery(r), Rt.call(this, n, o);
                  break;
              case "ExecuteNamedQuery":
                  var d = CCFMiscUtil_CreatePropSet();
                  o.SetProperty(t.get("SWE_CMD_ARG"), t.get("SWE_CMD_INVOKE_METHOD_STR")), o.SetProperty(t.get("SWE_METHOD_STR"), n), o.SetProperty(t.get("SWE_INPUT_PROP_SET_STR"), o.EncodeAsString()), o.SetProperty(t.get("SWE_VIEW_RPC_ARG"), "1"), SiebelApp.S_App.uiStatus.Busy({
                      timeOut: !1,
                      mask: !0,
                      loadMsg: !0
                  });
                  var v;
                  if (u) {
                      v = u.GetActiveApplet();
                      if (v && v.GetBusComp()) {
                          var m = CCFMiscUtil_CreatePropSet();
                          if (!v.InvokeMethod("ImplicitCommit", m)) {
                              s = !1;
                              break
                          }
                      }
                      if (v) {
                          this.SetCancelableRPCInfo(n, o);
                          var g = o.GetProperty(t.get("SWE_PROP_CANCELABLE_RPC"));
                          if (e.IsTrue(g)) {
                              scope = v;
                              var y = setTimeout(function() {
                                  scope.ProcessCancelQueryPopup(), scope = null
                              }, 1e3 * parseInt(SiebelApp.S_App.GetCancelQueryTimeout(), 10));
                              ht.call(this, y)
                          }
                      }
                  }
                  SiebelApp.S_App.CallServer(o, d, !0, a), typeof i == "undefined" && SiebelApp.S_App.uiStatus.Free();
                  break;
              case "CanLeaveMainView":
                  s = this.CanLeaveMainView(), Rt.call(this, n, o);
                  break;
              case "NextApplet":
                  u && u.CycleActiveApplet(!1), Rt.call(this, n, o);
                  break;
              case "PrevApplet":
                  u && u.CycleActiveApplet(!0), Rt.call(this, n, o);
                  break;
              case "GotoAppletMenu":
                  if (u) {
                      var b = u.GetActiveApplet();
                      b.GetMenu() && b.GetMenu().OnMenuInvoke(t.get("APPLET_NAME"), t.get("SWE_PREPARE_APPLET_MENU"), t.get("SWE_MENU_APPLET"))
                  }
                  Rt.call(this, n, o);
                  break;
              case "GotoApplicationMenu":
                  if (C) {
                      var w = C.GetPM().Get("GetPlaceHolder");
                      $("#" + w).children().eq(0).children().eq(0).focus()
                  }
                  Rt.call(this, n, o);
                  break;
              case "GotoCTIToolBar":
                  var E = SiebelAppFacade.ComponentMgr.FindComponent({
                      id: t.get("SWE_PST_COMM_TOOLBAR")
                  });
                  E && E.ExecuteMethod("HandleGotoCTIToolbar"), Rt.call(this, n, o);
                  break;
              case "GotoChatPane":
                  var S = SiebelApp.S_App.getExtObject("ChatPane");
                  S && S.ExecuteMethod("SetFocus"), Rt.call(this, n, o);
                  break;
              case "GotoSelectedTreeNode":
                  this.CanLeaveMainView() && u && u.GotoSelectedTreeNode();
                  break;
              case "ViewList":
                  SiebelApp.S_App.NavCtrlMgr.GetVisPM().GetRenderer().SetFocus(), Rt.call(this, n, o);
                  break;
              case "Logoff":
                  s = this.LogOff();
                  break;
              case "GotoScrnTab":
                  SiebelApp.S_App.NavCtrlMgr.FocusNavLink(t.get("SWE_SCREEN_NAV_CONTROL_STR"));
                  break;
              case "GotoViewTab":
                  SiebelApp.S_App.NavCtrlMgr.FocusNavLink(t.get("SWE_DET_VIEW_NAV_CONTROL_STR"));
                  break;
              case "GotoSubViewTab":
                  $("#s_vctrl_div_tabView ul  li ").children().eq(0).focus();
                  break;
              default:
                  if (n === l || n === c) {
                      var v;
                      u && (v = u.GetActiveApplet());
                      if (v && v.GetBusComp() && v.GetBusComp().IsInQueryState()) {
                          var m = CCFMiscUtil_CreatePropSet();
                          v.InvokeMethod(h, m)
                      }
                  }
                  var x;
                  x = this.CallServerApp(n, o, a);
                  if (typeof i == "undefined") {
                      var r = [];
                      return r.push(n), r.push(o), r.push(x), s = this.PostExecute.apply(this, r), SiebelApp.S_App.uiStatus.Free(), s
                  }
          }
          return s
      }, rt.prototype.PostExecute = function(n, r, i) {
          var s = pt.call(this),
              o = r.GetProperty(t.get("SWE_PROP_CANCELABLE_RPC"));
          e.IsTrue(o) && !e.IsEmpty(s) && clearTimeout(s);
          if (i === null) return !1;
          if (n == "GetProfileAttr") {
              var u;
              u = r.GetPropertyAsStr("attrName");
              if (u == "GetJSAddBarDisable")
                  if (strResult == "FALSE" || strResult == "False") return !1
          }
          var a = Rt.call(this, n, r);
          return a
      }, rt.prototype.SWECount = 0, rt.prototype.OnLoadViewContainer = function(e) {
          (function() {
              var t = $("[name=" + e + "]");
              SiebelApp.S_App.IsRwd() && (e ? t = $("#" + e) : SiebelApp.S_App.PortletSessionMgr && (t = $("body"))), rt.prototype.GetTargetViewContainer = function() {
                  return t
              }, rt.prototype.SetNextTargetViewContainer = function(e) {
                  SiebelApp.S_App.IsRwd() ? e ? t = $("#" + e) : SiebelApp.S_App.PortletSessionMgr && (t = $("#SiebAppContainer")) : t = $("[name=" + e + "]")
              }, rt.prototype.updateTargetViewContainer = function(e, t, n) {
                  var r = new $.Deferred;
                  return SiebelApp.contentUpdater.AddCallBack(e, function(e) {
                      return function() {
                          r.resolveWith(this, ["LayoutDone"]), t === !0 && this.OnLoadViewContent(), SiebelApp.S_App.IsRwd() && n === !0 && this.OnLoadPageContent(), SiebelApp.LayoutTransitionsMgr && typeof SiebelApp.LayoutTransitionsMgr.ShowTransition == "function" && SiebelApp.LayoutTransitionsMgr.ShowTransition(e)
                      }
                  }(this.GetTargetViewContainer().attr("id")), this), SiebelApp.LayoutTransitionsMgr && typeof SiebelApp.LayoutTransitionsMgr.Setup == "function" && SiebelApp.LayoutTransitionsMgr.Setup(this.GetTargetViewContainer().attr("id")), this.GetTargetViewContainer().attr("src", e), SiebelApp.contentUpdater.loadContent(), r.promise()
              }
          })();
          if (SiebelApp.S_App.IsMsgBarEnabled() && _ === null) {
              var t = function() {},
                  n = new t;
              n.GetName = function() {
                  return "MsgBarPxy"
              }, _ = new SiebelAppFacade.MsgBrdCstPresentationModel(n);
              var r = CCFMiscUtil_CreatePropSet();
              r.SetProperty("SWE_OUI_RENDERER", "MsgBrdCstPhyRenderer"), _.Init(), _.Setup(r.Clone()), _.Show()
          }
      }, rt.prototype.GetLayoutURL = function(
          n, r, i, s, o) {
          var u = t.get("SWE_RPC_PROP_NEW_LAYOUT"),
              a = t.get("SWE_ARG_EQUAL"),
              f = t.get("SWE_ARG_DELIM"),
              l = s.GetProperty(t.get("SWE_LAYOUT_IDENTIFIER")) || "";
          l = URLEncode(l);
          if (n === u) {
              var c;
              return c = this.GetPageURL() + t.get("SWE_ARG_START") + t.get("SWE_CMD_ARG") + a + (e.IsEmpty(o) ? t.get("SWE_GET_VIEW_LAYOUT") : t.get("SWE_GET_APPLET_LAYOUT")) + f + t.get("SWE_VIEW_ARG") + a + r + f + t.get("SWE_VIEW_ID_ARG") + a + i + f + t.get("SWE_VIEW_CHK_SUM_ARG") + a + this.GetCheckSum() + f + t.get("SWE_APPLET_STR") + a + o + f + t.get("SWE_LAYOUT_IDENTIFIER") + a + l, c
          }
      }, rt.prototype.NavCtrlMngr = function() {
          return y
      }, rt.prototype.GetDrilldownURL = function(n) {
          this.SetDefaultArgs(n), n.SetProperty(t.get("SWE_COUNT_STR"), this.GetSWEReqCount()), n.SetProperty(t.get("SWE_VIEW_ID_ARG"), ""), n.SetProperty(t.get("SWE_METHOD_STR"), t.get("SWE_CMD_DRILLDOWN_STR")), n.SetProperty(t.get("SWE_REQ_ROW_ID_STR"), "1"), n.SetProperty(t.get("SWE_ACTIVE_VIEW_STR"), this.GetActiveView().GetName()), n.SetProperty(t.get("SWE_VIEW_ARG"), this.GetActiveView().GetName()), n.SetProperty(t.get("SWE_CMD_ARG"), t.get("SWE_CMD_INVOKE_METHOD_STR")), n.SetProperty(t.get("SWE_POPUP_VECTOR_STR"), "");
          var r = e.EncodeToQueryString(n);
          return "start.swe?" + r
      }, rt.prototype.DelegateResponse = function(r, i) {
          var s = new $.Deferred,
              o = [],
              u = [],
              a = null;
          SiebelApp.S_App.GetEnablePerfHooks() && SiebelApp.S_App.GetTimer() && (SiebelApp.S_App.GetTimer().TimeGoToView("", "Have Object Info"), SiebelApp.S_App.GetTimer().TimeServerNotification("Received Server Notifications"), SiebelApp.S_App.GetTimer().TimePopupApplet("", "Have Object Info"));
          var f = t.get("SWE_RPC_PROP_NEW_LAYOUT"),
              l = t.get("SWE_RPC_PROP_NEW_APPLET_LAYOUT"),
              c = t.get("SWE_RPC_PROP_REFRESH_LAYOUT"),
              h = t.get("SWE_RPC_PROP_CONFIRM_DIALOG"),
              p = t.get("SWE_RPC_PROP_NEW_PAGE"),
              d = t.get("SWE_RPC_PROP_NEW_POPUP"),
              v = t.get("SWE_RPC_PROP_CLOSE_POPUP"),
              m = t.get("SWE_PST_NAV_CTRL_INFO"),
              g = t.get("SWE_RPC_PROP_NOTIFICATION"),
              b = t.get("SWE_PST_EXT_OBJ_INFO"),
              w = t.get("SWE_RPC_PROP_COMMAND_MGR"),
              E = t.get("SWE_HIST_OUI_UPDATE_INFO"),
              S = t.get("SWE_OUI_PRINT_DATA"),
              x = t.get("SWE_PST_CLIENT_DESCRIPTOR_INFO"),
              T = t.get("SWE_RPC_PROP_TOGGLE_LAYOUT"),
              N = t.get("SWE_RPC_PROP_STATUS_ERROR"),
              C = t.get("SWE_RPC_PROP_TARGET"),
              L = t.get("SWE_RPC_APPLET_NOTIFICATIONS"),
              A = t.get("SWE_APPLICATION_PM_PS"),
              O = t.get("SWE_RPC_VIEW_NOTIFICATIONS"),
              M = t.get("SWE_RPC_APP_NOTIFICATIONS"),
              _ = t.get("SWE_RPC_PAGE_NOTIFICATIONS"),
              D = t.get("SWE_PROP_TOGGLE_CONFIG_MODE"),
              P = t.get("SWE_RPC_HIDE_BROWSER_FRAME"),
              H = CCFMiscUtil_CreatePropSet(),
              B = SiebelAppFacade.EJSAdapter;
          r instanceof JSSPropertySet ? H = r : H.DecodeFromString(r);
          if (e.IsTrue(H.GetProperty(t.get("SWERESPONSE_ERROR_STR")))) return e.Alert(H.GetProperty(t.get("SWERESPONSE_ERROR_MSG"))), this.uiStatus.Free(), s.resolve(), s.promise();
          e.IsEmpty(H.GetProperty(t.get("SWE_RPC_PROP_ALERT_MSG"))) || e.Alert(HtmlDecode(H.GetProperty(t.get("SWE_RPC_PROP_ALERT_MSG"))));
          var j = H.GetProperty(t.get("SWE_RPC_PROP_STATUS")),
              F = this.GetPopupPM();
          j === v ? F.ExecuteMethod("ProcessClearPopup", H) : j === N && F.SetProperty("forceClosePopup", !0);
          var I = H.GetProperty(t.get("SWE_PROP_SESSION_RANDOM_NUMBER"));
          I && j === N && this.GetSRN && e.IsEmpty(this.GetSRN()) && (rt.prototype.GetSRN = function() {
              return I
          }), j === N && gt.call(this, H, i);
          var q = e.Curry(rt.prototype.DefineAccessor, rt.prototype, H);
          q("GetSWEReqCount", "SWE_PROP_REQ_COUNT"), q("GetSWEReqCount", "SWE_COUNT_STR");
          var R = null,
              U = null,
              z = null,
              W, X = H.GetChildCount();
          for (var V = 0; V < X; V++) {
              var J = H.GetChild(V),
                  K = J.GetType();
              switch (K) {
                  case O:
                      SiebelApp.S_App.IsRwd() && this.GetActiveView() && this.GetActiveView().DispatchNotification(J);
                      break;
                  case M:
                      SiebelApp.S_App.IsRwd() && dt.call(this, J);
                      break;
                  case _:
                      SiebelApp.S_App.IsRwd() && vt.call(this, J);
                      break;
                  case g:
                      Ct.call(this, J);
                      break;
                  case L:
                      Nt.call(this, J);
                      break;
                  case n:
                      R = J;
                      if (R !== null) {
                          var Q = R.GetChildByType(t.get("SWE_PST_STR_CACHE"));
                          Q !== null && this.AppendToStrCache(Q.GetProperty(t.get("SWE_PROP_VALUE")));
                          if (this.IsAutoOn()) {
                              var G = R.GetChildByType(t.get("SWE_PROP_PICK_CACHE"));
                              SiebelApp.S_App.TranslationTable && G !== null && SiebelApp.S_App.TranslationTable.CreateCache(G)
                          }
                      }
                      break;
                  case m:
                      y.HandleResponsePS(J.Clone()), y.ProcessObjectInfo(J);
                      break;
                  case b:
                      var Y = this.getExtObject(J.GetProperty(t.get("SWE_PST_EXT_OBJ_INFO")));
                      Y ? Y.HandleNotify(J.GetChild(0)) : (Y = this.RegisterExtObject(J), Y && Y.Setup(J.GetChild(0)));
                      break;
                  case w:
                      SiebelApp.S_App.IsRwd() ? this.GetCmdMgr().ProcessRWDNotifications(J) : this.GetCmdMgr().ProcessNotifications(J);
                      break;
                  case E:
                      k.ProcessObjectInfo(J);
                      break;
                  case A:
                      this.SetPMPropSet(J.Clone());
                      break;
                  case S:
                      var Z = H.GetChildByType(x);
                      B.GenerareEJSPrint(J, Z)
              }
          }
          if (H.GetProperty(t.get("SWE_ALARM_NOTI"))) {
              var et = SiebelAppFacade.ComponentMgr.FindComponent({
                  id: "Alarm Reminder Applet"
              });
              et && et.GetPM().ExecuteMethod("notifyAlarm")
          }
          var tt, nt;
          switch (j) {
              case f:
                  SiebelApp.S_App.IsRwd() ? (R && (z = R.GetChildByType(t.get("SWE_PST_NEW_VIEW")), z ? (U = z.GetChildByType(t.get("SWE_PST_VIEW_INFO")), U && (W = U.GetProperty(t.get("SWE_PROP_TMPL_ITM_HOLDER")))) : W = "External." + H.GetProperty("ViewId")), tt = wt.call(this, W, u)) : tt = wt.call(this, H.GetProperty(C), u), o.push(this.ProcessNewLayout(H, tt)), a = "refreshview";
                  break;
              case l:
                  tt = wt.call(this, H.GetProperty(C), u, H.GetProperty(t.get("SWE_APPLET_STR"))), o.push(this.ProcessNewAppletLayout(H, tt)), a = "newappletlayout";
                  break;
              case T:
                  o = o.concat(this.GetActiveView().HandleRefreshLayout(H, u));
                  break;
              case c:
                  SiebelApp.S_App.IsRwd() ? (R && (z = R.GetChildByType(t.get("SWE_PST_NEW_VIEW")), z ? (U = z.GetChildByType(t.get("SWE_PST_VIEW_INFO")), U && (W = U.GetProperty(t.get("SWE_PROP_TMPL_ITM_HOLDER")))) : (U = R.GetChildByType(t.get("SWE_PST_VIEW_INFO")), U && (W = U.GetProperty(t.get("SWE_PROP_TMPL_ITM_HOLDER"))))), tt = wt.call(this, W, u)) : tt = wt.call(this, H.GetProperty(C), u), nt = this.ProcessRefreshLayout(H, tt), nt !== !1 ? (o.push(nt), a = "refreshlayout") : u.pop();
                  break;
              case h:
                  St.call(this, H);
                  break;
              case p:
                  this.SetShowNewPage(!0), SiebelApp.S_App.IsRwd() ? H.GetProperty("ViewId") ? tt = wt.call(this, "External." + H.GetProperty("ViewId"), u) : tt = wt.call(this, "", u) : tt = wt.call(this, H.GetProperty(C), u), nt = this.ProcessNewPage(H, tt), nt !== !1 ? (o.push(nt), a = "refreshpage") : u.pop();
                  if (SiebelApp.S_App.IsRwd() && !H.GetProperty("ViewId")) {
                      var it = H.GetChildByType(t.get("SWE_PST_PAGE_INFO"));
                      if (it) {
                          var st = it.GetProperty(t.get("SWE_PROP_NEW_PAGE_NAME"));
                          if (st != null) {
                              mt.call();
                              var ot = function() {},
                                  ut = new ot;
                              ut.GetName = function() {
                                  return st
                              }, e.PrepareModuleInfo(it), it.GetProperty(t.get("SWE_UIDEF_PM_CTR")) || it.SetPropertyStr(t.get("SWE_UIDEF_PM_CTR"), "siebel/webpgpm"), it.GetProperty(t.get("SWE_UIDEF_PR_CTR")) || it.SetPropertyStr(t.get("SWE_UIDEF_PR_CTR"), "siebel/webpgpr"), SiebelAppFacade.ComponentMgr.MakeComponent(SiebelApp.S_App, it, ut), pageComp = SiebelAppFacade.ComponentMgr.FindComponent({
                                  id: ut.GetName()
                              }), this.SetActivePageComp(pageComp)
                          }
                      }
                  }
                  break;
              case d:
                  a = this.ProcessNewPopup(H);
                  break;
              case N:
                  F.SetProperty("forceClosePopup", !1);
                  break;
              case P:
                  if (SiebelApp.S_App.IsRwd()) {
                      W = H.GetProperty("ViewId"), SWEHideBrowserFrame(W);
                      switch (W) {
                          case "SS_TaskUIPane":
                              SiebelApp.S_App.UnregisterExtObject("TaskUIPane");
                              break;
                          case "TaskAssistant":
                              SiebelApp.S_App.UnregisterExtObject("TaskAssistant");
                              break;
                          case "SS_OpenUIReportPane":
                              SiebelApp.S_App.UnregisterExtObject("ReportPane")
                      }
                  }
                  break;
              case D:
                  if (this.IsConfigMode()) SiebelApp.UIInteractionMgr.CommitOnToggle();
                  else {
                      var at = window.location.href,
                          ft;
                      ft = at.substring(0, at.indexOf("start.swe") - 1) + "/composer.htm", window.location.replace(ft)
                  }
                  break;
              default:
          }
          return X > 0 && (e.IsEmpty(R) || j === T ? xt.call(this) : j !== d && Tt.call(this)), SiebelApp.S_App.GetEnablePerfHooks() && SiebelApp.S_App.GetTimer() && SiebelApp.S_App.GetTimer().TimeServerNotification("Processed Server Notifications"), o.push(this.GetFilesAndProcessObjectInfo(H)), j === d && o.length > 0 && o[o.length - 1].done(function() {
              xt.call(SiebelApp.S_App)
          }), this.InvokeCallBack(), e.IsEmpty(k) || k.ManipulateHistoryState(), SiebelApp.S_App.OUIPerfReporter && SiebelApp.S_App.OUIPerfReporter.RefreshData(H), j === v && yt(H), H = null, o.length > 0 ? $.when.apply($, o).done(function() {
              SiebelApp.S_App.ProcessCallbacks(a, u), s.resolve()
          }) : (SiebelApp.S_App.NavCtrlMgr.Show(!0), s.resolve()), (e.IsEmpty(R) || SiebelApp.S_App.IsRwd() && j === p) && bt.call(this), s.promise()
      }, rt.prototype.ProcessCallbacks = function(e, t) {
          e === "refreshpopup" && SiebelApp.S_App.GetPopupPM().SetProperty("CanProcessLayout", !0), e !== "newappletlayout" && SiebelApp.S_App.NavCtrlMgr.Show(!0);
          for (var n = 0, r = t.length; n < r; n++) t[n].func.call(SiebelApp.S_App, t[n].tgt, t[n].applet);
          SiebelApp.EventManager.fireEvent(e)
      }, rt.prototype.ProcessNewPopup = function(e) {
          return this.SetShowNewPage(!0), this.GetPopupPM().SetProperty("CanProcessLayout", !1), this.GetPopupPM().ExecuteMethod("ProcessNewPopup", e), "refreshpopup"
      }, rt.prototype.ProcessResponse = function(e, t) {
          return arguments[2] && arguments[2].getResponseHeader("swerpc") != "true" ? (window.location.replace(SiebelApp.S_App.GetPageURL()), !0) : this.GetFilesAndDelegateResponse(e, t)
      }, rt.prototype.SetURLToGo = function(e, t, n, r, i, s) {
          if (n || !B) B = !0, j = e, F = t, I = r, q = i, R = s
      }, rt.prototype.RefreshView = function(t, n, r, i) {
          var s = null,
              o = CCFMiscUtil_CreatePropSet();
          e.IsEmpty(n) ? (s = e.DecodeFromQueryString(r), SiebelApp.S_App.CallServer(s, o, !0), this.ProcessError()) : SiebelApp.S_App.GotoURL(r, i)
      }, rt.prototype.GotoURL = function(e, t, n) {
          var r = this.GetPageURL() + e.split("start.swe")[1];
          if (t !== p) return this.updateTargetViewContainer(r, !1, n);
          window.location.replace(r)
      }, rt.prototype.OnLoadAppletContent = function(e, t) {
          SiebelAppFacade.ComponentMgr.FindComponent({
              id: t
          }).Show();
          var n = M[t];
          n.ShowOnly(), n.ShowSelection(), this.ClearErrorMsg(), n.HasCustomShadow() && n.shadow && typeof n.shadow.OnLoad == "function" && n.shadow.OnLoad(), this.uiStatus.Busy(), this.uiStatus.Free()
      }, rt.prototype.ProcessNewLayout = function(e, n) {
          this.GetPopupPM().Get("state") !== t.get("POPUP_STATE_UNLOADED") && this.GetPopupPM().ExecuteMethod("ClearPopup");
          var r = e.GetProperty(t.get("SWE_RPC_PROP_VIEW")),
              i = e.GetProperty(t.get("SWE_RPC_PROP_APPLET")) || e.GetProperty(t.get("SWE_APPLET_STR")),
              s = e.GetProperty(t.get("SWE_RPC_PROP_VIEW_ID"));
          r = encodeURI(r).split("&").join("%26");
          var o = this.GetLayoutURL(t.get("SWE_RPC_PROP_NEW_LAYOUT"), r, s, e, i);
          return SiebelApp.S_App.GetEnablePerfHooks() && SiebelApp.S_App.GetTimer() && SiebelApp.S_App.GetTimer().TimeGoToView(r, "Call GetViewLayout"), this.updateTargetViewContainer(o)
      }, rt.prototype.ProcessNewAppletLayout = function(e, n) {
          SiebelApp.S_App.uiStatus.ShowOnLoadIndicator();
          var r = e.GetProperty(t.get("SWE_RPC_PROP_APPLET")) || e.GetProperty(t.get("SWE_APPLET_STR")),
              i = this.GetLayoutURL(t.get("SWE_RPC_PROP_NEW_LAYOUT"), "", "", e, r);
          return Et.call(this, i)
      }, rt.prototype.ProcessRefreshLayout = function(n, r) {
          SiebelApp.S_App.GetEnablePerfHooks() && SiebelApp.S_App.GetTimer() && SiebelApp.S_App.GetTimer().TimeRefreshView("", "", "Start RefreshView");
          var i = n.GetProperty(t.get("SWE_RPC_PROP_VIEW")),
              s = n.GetProperty(t.get("SWE_VIEW_ID_STR")) || "";
          if (i !== this.GetActiveView().GetName() || e.IsEmpty(i)) return !1;
          i = i.split(" ").join("%20").split("&").join("%26");
          var o = SiebelApp.S_App.GetLayoutURL(t.get("SWE_RPC_PROP_NEW_LAYOUT"), i, s, n);
          return SiebelApp.S_App.GetEnablePerfHooks() && SiebelApp.S_App.GetTimer() && SiebelApp.S_App.GetTimer().TimeGoToView("", "View Cache Ready"), this.updateTargetViewContainer(o)
      }, rt.prototype.ProcessNewPage = function(n, r) {
          var i = !1,
              s = n.GetProperty(t.get("SWE_RPC_PROP_URL")),
              o = n.GetProperty(t.get("SWE_RPC_PROP_VIEW")),
              u = n.GetProperty(t.get("SWE_RPC_PROP_VIEW_ID")),
              a = n.GetProperty(t.get("SWE_RPC_PROP_TARGET")),
              f = n.GetProperty(t.get("SWE_RPC_PROP_TIMEOUT"));
          SiebelApp.S_App.IsRwd() && e.IsTrue(n.GetProperty(t.get("SWE_RPC_FULL_REFRESH"))) && window.location.reload(), a.length == 1 && SiebelApp.S_App.IsRwd() && (a = SiebelApp.S_App.ViewTarget());
          if (a && a.indexOf("_sweview") > -1) {
              SiebelApp.EventManager.fireEvent("refreshurl");
              var l = this.GetActiveView();
              e.IsEmpty(l) || l.SetActiveAppletInternal(null)
          }
          if (!e.IsEmpty(o) && e.IsEmpty(u)) {
              var l = this.GetActiveView();
              if (!e.IsEmpty(l) && l.GetName() !== o && s.match("SWECmd=GotoPostedAction")) return this.GotoView(o, "", s, a), SiebelApp.S_App.uiStatus.Free(), !1
          } else {
              if (f && SiebelApp.S_App.PortletSessionMgr) return window.location.replace(this.GetPageURL() + "?" + SiebelApp.S_App.PortletSessionMgr.GetInstance().GetAction()), !1;
              if (f && a.indexOf("top") != -1 & s.indexOf("SWECmd=Login") != -1) return this
                  .IsConfigMode() ? top.location.replace(s) : window.location.replace(s), !1
          }
          return this.uiStatus.Busy({
              target: this.GetTargetViewContainer(),
              mask: !0
          }), this.SetURLToGo(s, a, !1, o, u, i), !1
      }, rt.prototype.InvokeCallBack = function() {
          while (w.length > 0) {
              var e = {};
              e = w.pop(), e.callBack.call(e.object)
          }
      }, rt.prototype.GetFilesAndDelegateResponse = function(n, r) {
          var i = new $.Deferred,
              s = null,
              o = t.get("SWE_PST_CLIENT_DESCRIPTOR_INFO"),
              u = CCFMiscUtil_CreatePropSet();
          u.DecodeFromString(n);
          var a = u.GetChildByType(o);
          if (a !== null) {
              var f = e.PrepareModuleInfo(u);
              if (f.length > 0) {
                  var l = this;
                  require(f, function() {
                      try {
                          s = l.DelegateResponse(u, r)
                      } catch (e) {
                          SiebelJS.Log(e)
                      }
                      a = null, s.done(function() {
                          i.resolve()
                      })
                  })
              } else s = this.DelegateResponse(u, r), a = null, s.done(function() {
                  i.resolve()
              })
          } else s = this.DelegateResponse(u, r), a = null, s.done(function() {
              i.resolve()
          });
          return i.promise()
      }, rt.prototype.GetFilesAndProcessObjectInfo = function(t) {
          var n = new $.Deferred,
              r = null,
              i = t.GetChildByType("api");
          if (i !== null) {
              var s = e.GetFileInfoFromPropSet(t);
              if (s.length > 0) {
                  var o = this;
                  require(s, function() {
                      try {
                          r = kt.call(o, t)
                      } catch (e) {
                          SiebelJS.Log(e)
                      }
                      i = null, r.done(function() {
                          n.resolveWith(this, ["Process Object"])
                      })
                  })
              } else r = kt.call(this, t), i = null, r.done(function() {
                  n.resolveWith(this, ["Process Object"])
              });
              s = null
          } else i = null, n.resolveWith(this, ["Process Object"]);
          return n.promise()
      }, rt.prototype.InitializeBO = function(e) {
          this.ClearExistingViewAndBO(), i = new SiebelApp.S_App.BusObj, i.ProcessObjectInfo(e.GetChild(0))
      }, rt.prototype.ClearExistingViewAndBO = function() {
          !e.IsEmpty(i) && !e.IsEmpty(s) && s.GetBusObj() === i && (this.ClearMainView(), this.ClearBusObj())
      }, rt.prototype.GetFilesAndInitExecContext = function(r, i) {
          var s = CCFMiscUtil_CreatePropSet();
          s.DecodeFromString(r);
          var o = e.GetFileInfoFromPropSet(s),
              u = s.GetChildByType(n);
          if (o.length > 0) {
              var a = u.GetProperty(t.get("SWE_PROP_PAGEURL")).split("start.swe")[0] + SIEBEL_BUILD;
              require.config({
                  baseUrl: a,
                  waitSeconds: 30,
                  paths: {
                      "jquery.ui.widget": "../scripts/3rdParty/jquery-ui/current/ui/jquery.ui.widget"
                  }
              }), require.exec("for(var reg in contexts['_'].registry){if(contexts['_'].registry.hasOwnProperty(reg)){contexts['_'].registry[reg].enable();} useInteractive = true;}"), o = e.PrepareModuleInfo(u, !1);
              if (o.length > 0) {
                  var f = this;
                  SiebelRequire(o, null, null, function() {
                      try {
                          require.exec("for(var reg in contexts['_'].registry){if(contexts['_'].registry.hasOwnProperty(reg)){contexts['_'].registry[reg].enable();} useInteractive = true;}"), f.InitExecContext(s, i)
                      } catch (e) {
                          SiebelJS.Log(e)
                      }
                      s = null
                  })
              } else this.InitExecContext(s, i), s = null
          } else this.InitExecContext(s, i), s = null;
          u = o = null
      }, rt.prototype.InitExecContext = function(r, i) {
          SiebelApp.EventManager.addListner("AppInit", this.PushClientPref, this), SiebelApp.S_App.ErrorObject.DecorateErrorCapability(this), it(), k = new SiebelApp.S_App.HistoryMgr, y = SiebelApp.S_App.NavCtrlMgr;
          var s = r.GetChildByType(n);
          rt.prototype.IsRwd = function() {
              return e.IsTrue(s.GetProperty(t.get("SWE_IS_RWD")))
          }, rt.prototype.IsConfigMode = function() {
              return e.IsTrue(s.GetProperty(t.get("SWE_PROP_CONFIG_MODE")))
          }, rt.prototype.IsPreviewMode = function() {
              return e.IsTrue(s.GetProperty(t.get("SWE_PROP_PREVIEW_MODE")))
          }, rt.prototype.GetActiveWSName = function() {
              return s.GetProperty(t.get("SWE_PROP_WORK_SPACE"))
          }, rt.prototype.IsMsgBarEnabled = function() {
              return e.IsTrue(s.GetProperty(t.get("SWE_IS_MSGBAR_ENABLED")))
          }, rt.prototype.GetWebSocketSrvrPort = function() {
              return s.GetProperty(t.get("SWE_WEBSOCKET_SERVER_PORT"))
          }, ot.call(this, r), SiebelApp.S_App.IsRwd() && this.PushClientPref();
          var o = SiebelApp.S_App.WPName();
          if (o != null) {
              var u = function() {},
                  a = new u;
              a.GetName = function() {
                  return o
              }, G = SiebelAppFacade.ComponentMgr.FindComponent({
                  id: a.GetName()
              }), G || (s.GetProperty(t.get("SWE_UIDEF_PM_CTR")) || s.SetPropertyStr(t.get("SWE_UIDEF_PM_CTR"), "siebel/webpgpm"), s.GetProperty(t.get("SWE_UIDEF_PR_CTR")) || s.SetPropertyStr(t.get("SWE_UIDEF_PR_CTR"), "siebel/webpgpr"), SiebelAppFacade.ComponentMgr.MakeComponent(SiebelApp.S_App, s, a), G = SiebelAppFacade.ComponentMgr.FindComponent({
                  id: a.GetName()
              })), G.Show()
          }
          i ? this.ProcessResponse(i) : SiebelApp.S_App.IsRwd() ? Bt.call(this) : this.LoadClientContainer()
      }, rt.prototype.LoadClientContainer = function() {
          SiebelApp.contentUpdater.updateSrc(this.GetClientFrame(), this.GetPageURL() + this.GetClientURL().split("start.swe")[1])
      }, rt.prototype.PushClientPref = function(n) {
          var r = this.GetService(t.get("SWE_OUI_CLIENT_PREF_SERVICE"));
          if (!e.IsEmpty(r)) {
              var i = SiebelApp.S_App.NewPropertySet(),
                  s = "Mobile=" + SiebelAppFacade.DecisionManager.IsTouch();
              SiebelApp.S_App.IsRwd() && (s = s + ",Viewport:width=" + $(window).width());
              var o = localStorage.getItem("viewPort");
              e.IsEmpty(o) || (s = o);
              if (n)
                  for (var u in n) n.hasOwnProperty(u) && (s += "," + u + "=" + n[u]);
              i.SetProperty(t.get("SWE_OUI_CLIENT_PREF"), s), r.InvokeMethod("SetClientCapability", i, {
                  npr: !1,
                  async: !0,
                  cb: function() {}
              })
          }
          if (IsOfflineModeEnabled()) {
              var a = SiebelApp.S_App;
              a.LoadMafResources && a.LoadMafResources()
          }
      }, rt.prototype.InitializeGlobalMenu = function() {
          this.GetTargetViewContainer ? Pt.call(this) : SiebelApp.EventManager.addListner("AppInit", Pt, this)
      }, rt.prototype.GetLabel = function() {
          return ""
      }, rt.prototype.RegisterControl = function(e, t) {
          b && (b[e] = t)
      }, rt.prototype.GetControlClassInstance = function(e) {
          if (b) return b[e]
      }, rt.prototype.RegisterConstructorAgainstKey = function(e, t) {
          L && (L[e] = t)
      }, rt.prototype.GetConstructorFromKey = function(e) {
          if (L) return L[e]
      }, rt.prototype.CallServer = function(n, r, i, s) {
          var o = (this.HeartBeatInterval ? this.HeartBeatInterval() : -1) || -1;
          if (o > 0 && !navigator.onLine && (!IsOfflineModeEnabled() || !this.GetOfflineMode())) return SiebelApp.S_App.uiStatus.Free(), e.Alert(SiebelApp.S_App.LocaleObject.GetLocalString("IDS_CLIENT_AJAX_ERR")), !1;
          s = $.extend({
              selfbusy: !1,
              mask: !0,
              async: !1,
              opdecode: !0
          }, s);
          if (!s.selfbusy) {
              var u = {};
              s.target && (u.target = s.target), s.mask && (u.mask = s.mask), this.uiStatus.Busy(u)
          }
          r = r || CCFMiscUtil_CreatePropSet();
          if (e.IsTrue(n.GetProperty(t.get("SWE_PROP_CANCELABLE_RPC")))) {
              var a = Math.floor((new Date).getTime() / 1e3),
                  f = parseInt(V);
              while (a <= f) a++;
              V = "" + a, n.SetProperty(t.get("SWSE_CANCEL_ID"), V)
          }
          String(n.GetProperty(t.get("SWSE_CMD_STR"))) !== t
              .get("SWSE_CANCEL_QUERY") && this.SetDefaultArgs(n);
          var l = e.EncodeToQueryString(n),
              c = new Date,
              h = null;
          l = l + "&" + t.get("SWE_TIME_STAMP") + "=" + c.getTime(), this.SetInputPS(n), h = {
              url: this.GetPageURL(),
              data: l.split(" ").join("%20"),
              type: "POST",
              async: s.async,
              contentType: "application/x-www-form-urlencoded",
              successfncallback: this.OnSuccessCallServer,
              errfncb: Ft,
              context: {
                  scope: this,
                  lp: s,
                  outputPS: r,
                  nPR: i
              }
          }, SiebelApp.AjaxRequestMgr.Ajax(h), h = null
      }, rt.prototype.OnSuccessCallServer = function(t, n, r) {
          var i = this.lp,
              s = this.outputPS,
              o = this.scope,
              u = this.nPR,
              a = new $.Deferred;
          if (u === !0 && r && typeof r.getResponseHeader == "function" && r.status !== 204) {
              if (r.getResponseHeader("swerpc") === null) {
                  var f = window.location.href;
                  return f.indexOf("SWECmd=Login") == -1 ? (window.location.reload(), !0) : (window.location.replace(SiebelApp.S_App.GetPageURL()), !0)
              }
              if (r.getResponseHeader("swerpc").toLowerCase() != "true") return window.location.replace(SiebelApp.S_App.GetPageURL()), !0
          }
          i.HB ? t === "OK" && (u = !1, SiebelApp.S_App.uiStatus.Free()) : jt.call(o);
          if (!e.IsEmpty(t)) {
              if (u === !0) {
                  var l = i && i.scope || this,
                      c = o.ProcessResponse(t, l);
                  c.done(function() {
                      SiebelApp.S_App.ProcessError(), a.resolve()
                  })
              } else a.resolve();
              i.opdecode === !0 && (s.DecodeFromString(t), SiebelApp.S_App.OUIPerfReporter && SiebelApp.S_App.OUIPerfReporter.RefreshData(s)), typeof i.cb == "function" ? (i.args = i.args || [], i.opdecode === !0 ? i.args.push(s) : i.args.push(t), i.cb.apply(i.scope || null, i.args)) : typeof i.scope != "undefined" && typeof i.scope.PostExecute == "function" && (i.args = i.args || [], i.args.push(s), i.scope.PostExecute.apply(i.scope || null, i.args))
          } else a.resolve();
          return a.done(function() {
              (i && !i.selfbusy || !i) && o.uiStatus.Free()
          }), a.promise()
      }, rt.prototype.GetSessionCookie = function() {
          if (document.cookie) return document.cookie
      }, rt.prototype.SetStaticPickValues = function(e, t) {
          v[e] = t
      }, rt.prototype.GetStaticPickValues = function(e) {
          return v[e]
      }, rt.prototype.SetActiveView = function(e) {
          s = e
      }, rt.prototype.SetActiveBO = function(e) {
          i = e
      }, rt.prototype.ClearMainView = function() {
          if (s && typeof s.EndLife == "function") {
              var e = SiebelAppFacade.ComponentMgr.FindComponent({
                  id: s.GetName()
              });
              s.EndLife(), e && (e.GetPM && e.GetPM() && e.GetPM().EndLife(), SiebelAppFacade.ComponentMgr.DeleteComponent(e, this))
          }
          this.GetPopupPM().ExecuteMethod("ProcessClearPopup"), SiebelApp.S_App.ClearErrorMsg(), s = null
      }, rt.prototype.ClearBusObj = function() {
          i && typeof i.EndLife == "function" && i.EndLife(), i = null
      }, rt.prototype.SeblTrace = function(e, t) {}, rt.prototype.GetBusObj = function(e) {
          var t = this.GetActiveView();
          return !e && t ? t.GetBusObj() : t && t.GetBusObj().GetName() === e ? t.GetBusObj() : null
      }, rt.prototype.GetProfileAttr = function(e) {
          var t, n;
          return e ? (t = CCFMiscUtil_CreatePropSet(), t.SetType("GetProfileAttr"), t.SetProperty("attrName", e), n = this.CallServerApp("GetProfileAttr", t), n === null ? null : this.HasErrorMsg() ? (this.ProcessError(), !1) : n) : (this.SetErrorMsg("AppErrInvalidAttrName"), null)
      }, rt.prototype.SetProfileAttr = function(e, t) {
          if (!e) return this.SetErrorMsg("AppErrInvalidAttrName"), !1;
          t = t || "";
          var n = CCFMiscUtil_CreatePropSet();
          return n.SetType("SetProfileAttr"), n.SetProperty("attrName", e), n.SetProperty("value", t), t = this.CallServerApp("SetProfileAttr", n), t === null ? null : this.HasErrorMsg() ? (this.ProcessError(), !1) : !0
      }, rt.prototype.GetMainView = function() {
          return this.GetActiveView()
      }, rt.prototype.CallServerApp = function(e, t, n) {
          var r, i = CCFMiscUtil_CreatePropSet(),
              s, o;
          return o = t.EncodeAsString(), r = CCFMiscUtil_CreatePropSet(), r.SetProperty("SWECmd", "InvokeMethod"), r.SetProperty("SWEMethod", e), r.SetProperty("SWEIPS", o), SiebelApp.S_App.CallServer(r, i, !0), s = i.GetProperty("Result"), s
      }, rt.prototype.NewPropertySet = function() {
          return CCFMiscUtil_CreatePropSet()
      };
  var It = {};
  rt.prototype.RemoveService = function(e) {
      It[e.GetName()] && delete It[e.GetName()]
  }, rt.prototype.GetService = function(t) {
      if (e.IsEmpty(t)) return !1;
      var n = It[t];
      return e.IsEmpty(n) ? (n = new SiebelApp.Service, n.SetName(t), It[n.GetName()] = n, x[t] && typeof window[x[t]] == "function" && new window[x[t]](n), n) : (n.AddRef(), n)
  }, rt.prototype.ShowModalDialog = function(e, t, n) {
      return window.showModalDialog(e, t, n)
  }, rt.prototype.CreateJSShadow = function(e, t) {
      if (!t) return !1;
      var n = [];
      CCFMiscUtil_StringToArray(t, n);
      if (n.length < 2) return !1;
      $.ajaxSetup({
          async: !1
      });
      var r = function(e, t) {},
          i = n.length;
      for (var s = 1; s < i; s++) $.getScript(n[s], r);
      return $.ajaxSetup({
          async: !0
      }), typeof window[n[0]] == "function" ? (new window[n[0]](e), !0) : !1
  };
  var Ut = {};
  (function(e) {
      "use strict";
      Ut.encode = function(t) {
          if (!t) return "";
          var n = new Uint8Array(t),
              r, i = n.length,
              s = "";
          for (r = 0; r < i; r += 3) s += e[n[r] >> 2], s += e[(n[r] & 3) << 4 | n[r + 1] >> 4], s += e[(n[r + 1] & 15) << 2 | n[r + 2] >> 6], s += e[n[r + 2] & 63];
          return i % 3 === 2 ? s = s.substring(0, s.length - 1) + "=" : i % 3 === 1 && (s = s.substring(0, s.length - 2) + "=="), s
      }, Ut.decode = function(t) {
          var n = t.length * .75,
              r = t.length,
              i, s = 0,
              o, u, a, f;
          t[t.length - 1] === "=" && (n--, t[t.length - 2] === "=" && n--);
          var l = new Uint8Array(n);
          for (i = 0; i < r; i += 4) o = e.indexOf(t[i]), u = e.indexOf(t[i + 1]), a = e.indexOf(t[i + 2]), f = e.indexOf(t[i + 3]), l[s++] = o << 2 | u >> 4, l[s++] = (u & 15) << 4 | a >> 2, l[s++] = (a & 3) << 6 | f & 63;
          return l
      }
  })("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");
  var Xt = !1,
      Vt = null,
      $t = !1,
      Jt;
  return rt.prototype.DownloadFile = function(n, r) {
      var i = SiebelApp.S_App.LocaleObject,
          s = n.GetProperty(u),
          o = s.split(a),
          l = n.GetProperty(f),
          c = SiebelApp.S_App.GetPageURL() + a,
          h = o[1],
          p = n.GetProperty("FileTitle"),
          d = n.GetProperty("FileExt"),
          v = p + (d ? "." + d : "");
      $t = n.GetProperty(t.get("SWE_FA_FILE_READONLY_FLG")) === "true";
      var m = function() {
              if (c && h) {
                  var e = "",
                      n = h.split("&"),
                      r = n.length;
                  for (var i = 0; i < r; i++) {
                      var s = n[i].split("=");
                      s.length >= 2 && (s[0] === t.get("SWE_PROP_SESSION_RANDOM_NUMBER") && (s[1] = SiebelApp.S_App.GetSRN()), e += '<input type="hidden" name="' + s[0] + '" value="' + s[1] + '" />')
                  }
                  if (SiebelApp.S_App.IsMobileApplication() === "true" && window.navigator.standalone) {
                      var o = c + h,
                          u = document.createElement("a");
                      u.setAttribute("href", o);
                      var a = document.createEvent("HTMLEvents");
                      a.initEvent("click", !0, !0), u.dispatchEvent(a), u = null
                  } else jQuery('<form action="' + c + '" method="get"' + (l ? "" : ' target="_blank"') + ">" + e + "</form>").appendTo("body").submit().html("").remove()
              }
          },
          g = function() {
              if (
                  this.readyState === 4)
                  if (this.status === 200 || this.status === 204) {
                      var t = Ut.encode(this.response);
                      SiebelApp.MobileFileMgr.WriteTempWithFlag({
                          filename: v,
                          content: t,
                          append: !1,
                          success: function() {
                              SiebelApp.S_App.uiStatus.Free(), SiebelApp.MobileFileMgr.OpenTempFile({
                                  filename: v,
                                  displayFileName: v
                              })
                          },
                          error: function() {
                              SiebelApp.S_App.uiStatus.Free(), e.Alert(i.GetLocalString("IDS_ATT_CREATE_FILE_PATH_ERROR"))
                          }
                      })
                  }
          },
          y = function() {
              SiebelApp.S_App.uiStatus.Busy({});
              var e = c + h,
                  t = zt() || Wt();
              t.onreadystatechange = g, t.open("GET", e), t.responseType = "arraybuffer", t.send()
          },
          b = !1;
      localStorage && (b = localStorage.getItem("isAdfmContainer"));
      if (b) {
          if (SiebelApp.AttachmentMgr.PreviewInMAF) {
              var w = c + h;
              SiebelApp.AttachmentMgr.PreviewInMAF(w, v)
          } else y();
          return
      }
      var E = function() {
              var e = function() {
                  if (this.readyState === 4 && this.status === 200) {
                      Xt = !0;
                      var e = Gt();
                      if ($t) {
                          var n = {};
                          n[t.get("WS_INLINEEDIT_FILE_READONLY")] = !0, e.SendMessage(this.response, v, n)
                      } else e.SendMessage(this.response, v);
                      var i = t.get("SWE_VIEW_ARG"),
                          s = t.get("SWE_APPLET_STR"),
                          o = t.get("SWE_ROW_IDS_STR"),
                          u = t.get("SWE_BCF_FIELD");
                      sn(i, SiebelApp.S_App.GetActiveView().GetName()), sn(s, r.GetProperty(s)), sn(o, r.GetProperty(o)), sn(u, r.GetProperty(u))
                  }
              };
              SiebelApp.S_App.uiStatus.Busy({
                  mask: !0
              });
              var n = c + h,
                  i = zt();
              i.onreadystatechange = e, i.open("GET", n), i.responseType = "blob", i.send()
          },
          S = function() {
              var e = $("#downloadFileChooseDialog");
              if (e.length <= 0) {
                  var t = "<div id='downloadFileChooseDialog' style='padding:10px;'></div>";
                  e = $(t)
              }
              var n = i.GetLocalString("IDS_CLIENT_FILE_DOWNLOAD"),
                  r;
              $t ? r = i.GetLocalString("IDS_READONLY_FILE_DOWNLOAD_PROMPT") : r = i.GetLocalString("IDS_IAE_FILE_DOWNLOAD_PROMPT"), r = r.replace("%1", v);
              var s = i.GetLocalString("IDS_EDIT_BUTTON_DISABLED_HINT");
              s = "<div id='editBtnHint' class='siebui-disa-iae-hint'>" + s + "</div>", e.text(r).append(s);
              var o = [{
                  text: i.GetLocalString("IDS_CLIENT_DOWNLOAD"),
                  click: function() {
                      m(), $(this).dialog("close")
                  }
              }, {
                  text: i.GetLocalString("IDS_CLIENT_CANCEL"),
                  click: function() {
                      $(this).dialog("close")
                  }
              }];
              SiebelApp.WebSocketManager && SiebelApp.WebSocketManager.IsWebSocketSupported() && o.unshift({
                  text: i.GetLocalString("IDS_CLIENT_EDIT"),
                  id: "editButton",
                  click: function() {
                      $t || x(), E()
                  }
              }), e.dialog({
                  title: n,
                  modal: !0,
                  autoOpen: !1,
                  minWidth: 350,
                  buttons: o,
                  open: function() {
                      SiebelApp.WebSocketManager && SiebelApp.WebSocketManager.IsWebSocketSupported() && vn()
                  }
              }), e.parent().find("button").addClass("siebui-ctrl-btn").addClass("appletButton"), e.parent().find("#editBtnHint").styleHide(), e.parent().find("#editButton").removeClass("appletButton").addClass("appletButtonDis").prop("disabled", !0).attr("tabindex", "-1"), e.dialog("open")
          },
          x = function() {
              var t = $("#uploadFileDialogContent");
              if (t.length <= 0) {
                  var n = "<div id='uploadFileDialogContent' style='padding:10px;'></div>";
                  t = $(n)
              }
              var r = i.GetLocalString("IDS_ATT_FILE_UPLOAD_TITLE"),
                  s = "<div id='uploadReminder'>";
              s += i.GetLocalString("IDS_ATT_FILE_UPLOAD_REMINDER"), s = s.replace("%1", v), s += "</div>", s += "<div id = 'uploadMessage'>", s += "</div>", t.html(s);
              var o = [{
                  text: i.GetLocalString("IDS_ATT_FILE_FINISH"),
                  id: "finishButton",
                  "class": "siebui-ctrl-btn appletButton",
                  click: function() {
                      Kt() && dn()
                  }
              }, {
                  text: i.GetLocalString("IDS_ATT_FILE_OK"),
                  id: "okButton",
                  "class": "siebui-ctrl-btn appletButton",
                  click: function() {
                      fn()
                  }
              }];
              t.dialog({
                  title: r,
                  modal: !0,
                  autoOpen: !1,
                  beforeClose: function() {
                      return Kt() ? e.Confirm(i.GetLocalString("IDS_SWE_POPUP_CLOSEBYX_WARNING")) ? (Qt(!1), !0) : !1 : !0
                  },
                  dialogClass: "siebui-upload-file-dialog-popup",
                  buttons: o
              }), t.find("#uploadMessage").styleHide(), t.dialog("widget").find("#okButton").styleHide()
          };
      S()
  }, rt.prototype.GetAppletControlInstance = function(e, n, r, i, s) {
      var o = new SiebelApp.S_App.AppletControl,
          u = CCFMiscUtil_CreatePropSet();
      return u.SetType(t.get("SWE_PST_CNTRL")), o.ProcessObjectInfo(u), o.GetName = function() {
          return e
      }, o.GetUIType = function() {
          return n
      }, o.GetDisplayName = function() {
          return r
      }, o.GetWidth = function() {
          return i
      }, o.GetHeight = function() {
          return s
      }, o.GetMaxSize = function() {
          return 1e3
      }, o.IsSortable = function() {
          return !0
      }, o.GetFieldName = function() {
          return ""
      }, o.GetIconMap = function() {
          return ""
      }, o.GetDisplayFormat = function() {
          return ""
      }, o.GetInputName = function() {
          return ""
      }, o.GetDefaultMethod = function() {
          return ""
      }, o.GetSpanPrefix = function() {
          return ""
      }, o.GetValue = function() {
          return ""
      }, o.IsClientCtrl = function() {
          return !0
      }, o
  }, rt.prototype.GetInputPS = function() {
      return E
  }, rt.prototype.SetInputPS = function(e) {
      E = e
  }, rt.prototype.GetCSParam = function() {
      var e = {};
      return e.async = !0, e
  }, rt.prototype.SetEnablePerfHooks = function(e) {
      N = e
  }, rt.prototype.GetEnablePerfHooks = function() {
      return N
  }, rt.prototype.GetTimer = function() {
      return T
  }, rt.prototype.SetTimer = function(e) {
      T = e
  }, rt.prototype.NotifyTimer = function(e, t) {
      N && T && T[e].apply(T, t)
  }, rt.prototype.OfflineCallMethod = function() {}, rt.prototype.Drilldown = function(e) {
      var n = e || window.event;
      n.preventDefault && n.preventDefault(), n.returnValue = !1, e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0;
      var r = new Date,
          i = n.currentTarget || n.srcElement,
          s = i.href + "&" + t.get("SWE_TIME_STAMP") + "=" + r.getTime();
      return this.GotoView("", "", s, ""), !1
  }, rt.prototype.TriggerUPTEvent = function(n) {
      var r, i, s;
      if (!e.IsTrue(SiebelApp.S_App.IsUPTEnabled()) || !n) return;
      e.IsEmpty(n.GetProperty(t.get("UPT_EVENT_NAME"))) && n.SetProperty(t.get("UPT_EVENT_NAME"), t.get("UPT_EVENT_NAME_TEXT")), e.IsEmpty(n.GetProperty(t.get("UPT_EVENT_SOURCE"))) && n.SetProperty(t.get("UPT_EVENT_SOURCE"), t.get("UPT_SOURCE_TEXT")), r = CCFMiscUtil_CreatePropSet(), s = n.EncodeAsString(), r.SetProperty(t.get("SWE_CMD_ARG"), t.get("UPT_CMD_NAME")), r.SetProperty(t.get("SWE_PROP_UPT_STR"), s), SiebelApp.S_App.CallServer(r, i, !0)
  }, rt.prototype.OnLoadPageContent = function() {
      var e = SiebelApp.S_App.GetActivePageComp();
      e && e.Show()
  }, r
}()), SiebelApp.MvgBeautifier = {
  Initialize: function() {
      function p(e) {
          var t = window.innerWidth,
              n = window.innerHeight;
          iniWidth = e.parent().width() >= t ? t * .85 : e.parent().width(), iniHeight = e.parent().height() >= n ? n * .85 : e.parent().height(), e.dialog("option", {
              position: {
                  my: "center",
                  at: "center",
                  of: window
              },
              minWidth: iniWidth,
              minHeight: iniHeight,
              width: e.width()
          });
          var r = parseInt(e.parent().css("top"), 10);
          r < 0 && e.parent().css("top", 0)
      }
      this.availableApplet = null, this.selectedApplet = null;
      var e = $("div[name=popup]"),
          t = e.width(),
          n = e.height(),
          r = SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_SHOW_AVAILABLE"),
          i = SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_SHOW_SELECTED"),
          s = r,
          o = i;
      $(e).width(t).height(n).dialog("option", "dialogClass", "siebui-mvg-dialog").dialog("option", "buttons", [{
          text: r,
          click: function(e) {
              var t = $(e.currentTarget),
                  n = t.children(".ui-button-text");
              if (t.text() === i) n.text(r).end().attr("title", s), u = SiebelApp.MvgBeautifier.getSelected(), !!u && typeof u.GetObjectType == "function" && (n.attr("un", r), n.attr("rn", "ShowAvailable")), SiebelApp.MvgBeautifier.resizeSelected();
              else if (t.text() === r) {
                  n.text(i).end().attr("title", o);
                  var u = SiebelApp.MvgBeautifier.getAvailable();
                  !!u && typeof u.GetObjectType == "function" && (n.attr("un", i), n.attr("rn", "ShowSelected")), SiebelApp.MvgBeautifier.resizeAvailable()
              }
          }
      }]).find(".siebui-mvg-btn-modifier button").clone(!0).appendTo($("div[name=popup]").parent().find("div.ui-dialog-buttonset")), e.parent().find("div.ui-dialog-buttonset").find("button").each(function() {
          $(this).html($(this).val() || $(this).attr("data-display"))
      }), e.data("applet-count", e.find("#sieb-ui-popup-mvg-selected, #sieb-ui-popup-mvg-available").filter(":visible").length);
      var u = SiebelApp.S_App.GetActiveView(),
          a = u.GetAppletMap(),
          f;
      for (var l in a) a.hasOwnProperty(l) && (typeof a[l].GetMvgAssocAppletName == "function" && (f = u.GetApplet(a[l].GetMvgAssocAppletName()), !f || (this.availableApplet = f, o = f.GetAppletLabel() || "", o = o ? o + ":" + i : i, f.GetPModel().AttachPostProxyExecuteBinding("ALL", function(e, t, n) {
          SiebelApp.MvgBeautifier.MVGPostProxyExecute(this.Get("GetId"))
      }))), typeof a[l].GetMvgSelectedAppletName == "function" && (f = u.GetApplet(a[l].GetMvgSelectedAppletName()), !f || (this.selectedApplet = f, s = f.GetAppletLabel() || "", s = s ? s + ":" + r : r, f.GetPModel().AttachPostProxyExecuteBinding("ALL", function(e, t, n) {
          SiebelApp.MvgBeautifier.MVGPostProxyExecute(this.Get("GetId"))
      }))));
      f = null, SiebelApp.MvgBeautifier.resizeSelected();
      var c = $("div[name=popup]").parent().find("div.ui-dialog-buttonset").find("button").eq(0);
      c.removeClass().addClass("appletButtons").attr("title", s);
      var h = SiebelApp.MvgBeautifier.getSelected();
      h && typeof h.GetObjectType == "function" && c.children("span").eq(0).attr("ot", "Button").attr("rn", "ShowAvailable").attr("un", r), $("div[name=popup]").find("form").submit(function(e) {
          return e.preventDefault(), !1
      }), $(window).off("resize.mvg").on("resize.mvg", function() {
          var e = $("div[name=popup]"),
              t = e.find("#sieb-ui-popup-mvg-selected, #sieb-ui-popup-mvg-available").filter(":visible").length,
              n = e.data("applet-count");
          if (e.dialog("isOpen") && t >= 0 && n && parseInt(n, 10) !== t) {
              var r = Number(consts.get("DEFAULT_POPUP_WIDTH")),
                  i = Number(consts.get("DEFAULT_POPUP_HEIGHT")),
                  s = SiebelApp.S_App.GetPopupPM(),
                  o = Number(s.Get("width")) || 0,
                  u = Number(s.Get("height")) || 0,
                  a = !1,
                  f = $("div[name=popup]"),
                  l = $(document.body).width();
              e.dialog("option", "minWidth", r), e.dialog("option", "minHeight", i), f.find("div.ui-jqgrid").length > 0 && (o === r && (o *= 2), l < o && (o = l * .85), f.width(o)), p(f), e.data("applet-count", t), SiebelApp.EventManager.fireEvent("forceResize"), f = null
          }
      })
  },
  MVGPostProxyExecute: function(e) {
      var t = $("div[name=popup]").parent(),
          n = t.find("div.siebui-mvg-btn-modifier").find("button"),
          r;
      SiebelApp.S_App.IsRwd() ? r = "#sieb-ui-popup-mvg-selected" : r = "#a_" + e, $(r).is(":visible") || t.find("div.ui-dialog-buttonset").find("button").eq(0).click();
      for (var i = 0, s = n.length; i < s; ++i) {
          var o = n.eq(i).attr("disabled") ? !0 : !1;
          t.find('[name="' + n.eq(i).attr("name") + '"]').eq(1).removeAttr("disabled").attr("disabled", o).removeClass("appletButton appletButtonDis").addClass(o ? "appletButtonDis" : "appletButton")
      }
      t = n = null
  },
  getAvailable: function() {
      if (!this.availableApplet) {
          var e = SiebelApp.S_App.GetActiveView(),
              t = e.GetAppletMap();
          for (var n in t) t.hasOwnProperty(n) && typeof t[n].GetMvgAssocAppletName == "function" && (this.availableApplet = e.GetApplet(t[n].GetMvgAssocAppletName()))
      }
      return this.availableApplet
  },
  getSelected: function() {
      if (!this.selectedApplet) {
          var e = SiebelApp.S_App.GetActiveView(),
              t = e.GetAppletMap();
          for (var n in t) t.hasOwnProperty(n) && typeof t[n].GetMvgSelectedAppletName == "function" && (this.selectedApplet = e.GetApplet(t[n].GetMvgSelectedAppletName()))
      }
      return this.selectedApplet
  },
  resizeAvailable: function() {
      $("div[name=popup]").find("td.AppletStylePopup").eq(0).styleShow();
      var e = this.getSelected();
      !e || $("#a_" + e.GetId()).parents("div").eq(0).styleHide(), e = this.getAvailable(), !e || (SiebelApp.S_App.IsRwd() ? $("#S_A" + SiebelApp.MvgBeautifier.getAvailable().GetPH()).styleShow() : $("#a_" + e.GetId()).parents("div").eq(0).styleShow(), e.GetPModel && !(e.GetPModel() instanceof JSSPropertySet) && (e.GetPModel().OnControlEvent(SiebelApp.Constants.get("PHYEVENT_APPLET_FOCUS")), e.GetPModel().GetRenderer() && e.GetPModel().GetRenderer().resize && e.GetPModel().GetRenderer().resize()), this.elementShowHide(!0))
  },
  resizeSelected: function() {
      $("div[name=popup]").find("td.AppletStylePopup").eq(0).styleHide();
      var e = this.getAvailable();
      !e || (SiebelApp.S_App.IsRwd() ? $("#S_A" + SiebelApp.MvgBeautifier.getAvailable().GetPH()).styleHide() : $("#a_" + e.GetId()).parents("div").eq(0).styleHide()), e = this.getSelected(), !e || ($("#a_" + e.GetId()).parents("div").eq(0).styleShow(), e.GetPModel && !(e.GetPModel() instanceof JSSPropertySet) && (e.GetPModel().OnControlEvent(SiebelApp.Constants.get("PHYEVENT_APPLET_FOCUS")), e.GetPModel().GetRenderer() && e.GetPModel().GetRenderer().resize && e.GetPModel().GetRenderer().resize()), this.elementShowHide(!1))
  },
  elementShowHide: function(e) {
      var t = $("div[name=popup]").parent().find("div.ui-dialog-buttonset"),
          n = this.getSelected().GetControls();
      for (var r in n)
          if (n.hasOwnProperty(r)) {
              var i = n[r],
                  s = i.GetMethodName();
              if (s === "AddRecords" || s === "DeleteRecords" || s === "DeleteAllRecords") {
                  var o = i.GetInputName() + "_Ctrl",
                      u = $(t.find('[name="' + o + '"]')[0] || t.find("#" + o)[0]);
                  switch (s) {
                      case "AddRecords":
                          e ? u.removeClass("siebui-invisible-el") : u.addClass("siebui-invisible-el");
                          break;
                      default:
                          e ? u.addClass("siebui-invisible-el") : u.removeClass("siebui-invisible-el")
                  }
              }
          }
  }
}, typeof SiebelApp.S_App.HistoryMgr == "undefined" && (SiebelJS.Namespace("SiebelApp.S_App.HistoryMgr"), SiebelApp.S_App.HistoryMgr = function() {
  function HistoryMgr() {
      var e = "",
          t = "",
          n = "",
          r = !1,
          i = !1,
          s = !1,
          o = !1,
          u = !1,
          a = !0,
          f = "",
          l = 0;
      this.GetCaption = function() {
          return e
      }, this.SetCaption = function(t) {
          e = t
      }, this.GetURL = function() {
          return t
      }, this.SetURL = function(e) {
          t = e
      }, this.GetAction = function() {
          return n
      }, this.SetAction = function(e) {
          n = e
      }, this.GetPendingUpdate = function() {
          return r
      }, this.SetPendingUpdate = function(e) {
          r = e
      }, this.GetPendingReplace = function() {
          return i > 0 ? !0 : !1
      }, this.SetPendingReplace = function(e) {
          e ? i += 1 : i > 0 && (i -= 1)
      }, this.IsInHistoryNavigation = function() {
          return l > 0 ? !0 : !1
      }, this.SetInHistoryNavigation = function(e) {
          e ? l += 1 : l > 0 && (l -= 1)
      }, this.IsURLBMCChange = function() {
          return u
      }, this.SetURLBMCChange = function(e) {
          u = e
      }, this.GetExcludeFromHistory = function() {
          return s
      }, this.SetExcludeFromHistory = function(e) {
          s = e
      }, this.GetViewExclude = function() {
          return o
      }, this.SetViewExclude = function(e) {
          o = e
      }, this.IsFirstRun = function() {
          return a
      }, this.SetFirstRun = function(e) {
          a = e
      }, this.GetRefreshUrl = function() {
          return f
      }, this.SetRefreshUrl = function(e) {
          f = e
      }, BindBrowserEvents.call(this)
  }

  function BindBrowserEvents() {
      var e = this;
      window.addEventListener("popstate", function(t) {
          var n = t.state;
          ProcessBrowserHistoryCall.call(e, n)
      })
  }

  function ForceHistoryEntry(e) {
      var t = history.state,
          n = {},
          r = {};
      r.hnact = t.data.hnact, r.hex = t.data.hex, r.hnactf = "SiebelApp.contentUpdater.ProcessHistoryInfo( '" + e.iframeOrig + "', '" + e.iframeNow + "', '" + t.data.hnact + "' );", document.title = t.title, n.data = r, history.pushState(n, t.title, t.url)
  }

  function UpdateHistoryState() {
      var e, t, n = {},
          r = {};
      return r[consts.get("SWE_HIST_NAV_ACT")] = this.GetAction(), r[consts.get("SWE_HIST_EXCLUDE")] = this.GetExcludeFromHistory(), n.data = r, e = this.GetCaption(), n.title = e, t = "", utils.IsTrue(SiebelApp.S_App.UseCookie()) ? t = this.GetURL().substring(this.GetURL().indexOf("?")) : t = this.GetRefreshUrl().substring(this.GetRefreshUrl().indexOf("?")), n.url = t, history.pushState(n, e, t), SiebelApp.S_App.OfflineCallMethod("ReplaceShortURL", r, e), !0
  }

  function ReplaceHistoryState() {
      if (utils.IsEmpty(window.history.replaceState)) return !0;
      var e, t, n = {},
          r = {};
      r[consts.get("SWE_HIST_NAV_ACT")] = this.GetAction(), r[consts.get("SWE_HIST_EXCLUDE")] = this.GetExcludeFromHistory(), n.data = r, e = this.GetCaption(), n.title = e, t = "", utils.IsTrue(SiebelApp.S_App.UseCookie()) ? t = this.GetURL().substring(this.GetURL().indexOf("?")) : t = this.GetRefreshUrl().substring(this.GetRefreshUrl().indexOf("?")), n.url = t;
      var i = History.getState();
      return i.title === e && this.GetURL().indexOf(i.url) > -1 && !this.IsURLBMCChange() ? !0 : (this.SetURLBMCChange(!1), history.replaceState(n, e, t), SiebelApp.S_App.OfflineCallMethod("ReplaceShortURL", r, e), !0)
  }

  function ProcessBrowserHistoryCall(state) {
      var bRet = !0;
      if (bRet && !utils.IsEmpty(state)) {
          var actionObject = state.data;
          if (!utils.IsEmpty(actionObject)) {
              var action = actionObject[consts.get("SWE_HIST_NAV_ACT")],
                  actionf = actionObject[consts.get("SWE_HIST_NAV_ACT") + "f"] || "";
              this.SetExcludeFromHistory(actionObject[consts.get("SWE_HIST_EXCLUDE")]), utils.IsEmpty(action) || (action = action.substring(0, action.lastIndexOf(",")) + ")", actionf && (actionf = actionf.substring(0, actionf.lastIndexOf(",")) + ")');", action = actionf), this.SetInHistoryNavigation(!0), SiebelApp.S_App.SetDiscardUserState(!0), bRet = eval(action), SiebelApp.S_App.SetDiscardUserState(!1))
          }
      }
      bRet === !1 && (this.SetInHistoryNavigation(!1), this.SetPendingUpdate(!0), this.ManipulateHistoryState())
  }
  var utils = SiebelApp.Utils,
      consts = SiebelApp.Constants;
  return HistoryMgr.prototype.ProcessObjectInfo = function(e) {
      if (e.GetType() !== consts.get("SWE_HIST_OUI_UPDATE_INFO")) return !1;
      this.IsFirstRun() && (SiebelApp.EventManager.addListner("History_PushState", ForceHistoryEntry, this), this.SetRefreshUrl(window.location.href), this.SetFirstRun(!1), this.SetPendingReplace(!0));
      var t = HtmlDecode(e.GetProperty(consts.get("SWE_HIST_NAV_ACT"))),
          n = utils.DecodeURL(HtmlDecode(e.GetProperty(consts.get("SWE_HIST_NAV_URL")))),
          r = HtmlDecode(e.GetProperty(consts.get("SWE_HIST_NAV_CAP")));
      if (utils.IsEmpty(t) || utils.IsEmpty(n) || utils.IsEmpty(r)) return !1;
      if (this.IsInHistoryNavigation()) return this.SetInHistoryNavigation(!1), this.SetCaption(r), this.SetURL(n), this.SetAction(t), !utils.IsEmpty(r) && r !== document.title && (document.title = r), !1;
      this.GetExcludeFromHistory() && (this.SetPendingReplace(!0), this.SetExcludeFromHistory(!1));
      var i = this.GetAction();
      if (i && i.substring(0, i.indexOf(",")) === t.substring(0, t.indexOf(","))) {
          var s = i.substring(i.indexOf("SWEBMC"), i.indexOf("&", i.indexOf("SWEBMC"))) !== t.substring(t.indexOf("SWEBMC"), t.indexOf("&", t.indexOf("SWEBMC"))) || this.GetURL() !== n;
          s ? this.SetURLBMCChange(s) : null;
          if (s) this.SetPendingReplace(!0);
          else {
              if (!e.GetProperty(consts.get("SWE_HIST_REPLACE"))) return !1;
              this.SetViewExclude(!0)
          }
      }
      if (this.GetViewExclude() || e.GetProperty(consts.get("SWE_HIST_ISPAGE")) || t.indexOf(consts.get("SWE_HIST_GOTOURL")) > -1) {
          this.SetViewExclude(!1), this.SetExcludeFromHistory(!0);
          var o = history.state;
          if (!o) {
              this.SetCaption(r), this.SetURL(n), this.SetAction(t);
              return
          }
          r = o.title + " ", n = o.url, t = o.data[consts.get("SWE_HIST_NAV_ACT")]
      }
      return this.SetCaption(r), this.SetURL(n), this.SetAction(t), this.SetPendingUpdate(!0), !utils.IsEmpty(r) && r !== document.title && (document.title = r), !0
  }, HistoryMgr.prototype.ManipulateHistoryState = function() {
      if (!this.GetPendingUpdate()) return !1;
      var e = this.GetAction(),
          t = this.GetCaption(),
          n = this.GetURL();
      return utils.IsEmpty(e) || utils.IsEmpty(t) || utils.IsEmpty(n) ? (this.SetPendingReplace(!1), this.SetPendingUpdate(!1), !1) : utils.IsEmpty(history.pushState) && utils.IsEmpty(history.replaceState) ? (this.SetPendingReplace(!1), this.SetPendingUpdate(!1), !1) : (this.GetPendingReplace() ? (ReplaceHistoryState.call(this), this.SetPendingReplace(!1)) : UpdateHistoryState.call(this), this.SetPendingUpdate(!1), !0)
  }, HistoryMgr
}()), typeof SiebelAppFacade.HTMLTemplateManager == "undefined" && (SiebelJS.Namespace("SiebelAppFacade.HTMLTemplateManager"), define("siebel/htmltmplmgr", [], function() {
  return SiebelAppFacade.HTMLTemplateManager = function() {
      function l() {}

      function c(t) {
          var l = "";
          t = t || {};
          switch (t.type) {
              case e.get("SWE_PST_BUTTON_CTRL"):
                  l += '<button type="button" class="siebui-ctrl-btn ${CLASSNAME}" ${ID} ${ATTRS}>${VALUES}</button>'.replace("${VALUES}", t.value || "");
                  break;
              case e.get("SWE_CTRL_PLAINTEXT"):
                  if (t.el)
                      for (var c = 0, h = t.el.length; c < h; c++) t.el.eq(c).children("#" + t.id + "_Label").length === 0 && (t.el.eq(c).addClass("siebui-ctrl-text " + (t.className || "")), SiebelApp.Utils.IsTrue(SiebelApp.S_App.GetAccessibilityEnhanced()) && t.el.eq(c).append('<Label id="' + t.id + '_Label"></Label>'));
                  else l += '<span class="siebui-ctrl-text ${CLASSNAME}" ${ID} ${ATTRS}>${VALUES}</span>'.replace("${VALUES}", t.value || "");
                  break;
              case e.get("SWE_CTRL_COMBOBOX"):
                  if (t.el)
                      for (var c = 0, h = t.el.length; c < h; c++) t.el.eq(c).next("span.siebui-icon-dropdown").length === 0 && (t.el.eq(c).addClass("siebui-ctrl-select siebui-input-popup " + (t.className || "")).after('<span class="siebui-icon-dropdown" id="' + t.id + '_icon" data-allowdblclick="true"/>'), SiebelApp.Utils.IsTrue(SiebelApp.S_App.GetAccessibilityEnhanced()) && t.el.eq(c).attr("aria-describedby", (t.el.attr("aria-describedby") || "") + " " + t.id + "_icon"));
                  else {
                      var p = '<select class="siebui-ctrl-select ${CLASSNAME}" ${ID} ${ATTRS}>';
                      if (t.value && t.value.length) {
                          t.displayValue = t.displayValue || [];
                          for (var d = 0, h = t.value.length; d < h; d++) p += '<option value="' + t.value[d] + '" ' + (t.index === d ? "selected" : "") + ">" + (t.displayValue[d] || t.value[d]) + "</option>"
                      }
                      p += "</select>", l += p
                  }
                  break;
              case e.get("SWE_CTRL_CALC"):
                  if (t.el)
                      for (var c = 0, h = t.el.length; c < h; c++) t.el.eq(c).next("span.siebui-icon-calc").length === 0 && (t.el.eq(c).addClass("siebui-ctrl-calc siebui-input-popup " + (t.className || "")).after('<span class="siebui-icon-calc" id="' + t.id + '_icon" aria-label="' + a + '" />'), SiebelApp.Utils.IsTrue(SiebelApp.S_App.GetAccessibilityEnhanced()) && t.el.eq(c).attr("aria-describedby", (t.el.attr("aria-describedby") || "") + " " + t.id + "_icon"));
                  else l += "<input type='text' role='calc' class=\"siebui-ctrl-calc ${CLASSNAME}\" ${ID} ${ATTRS} value=\"${VALUES}\" />".replace("${VALUES}", t.value || ""), l += '<span class="siebui-icon-calc" aria-label="' + a + '" >';
                  break;
              case e.get("SWE_CTRL_CHECKBOX"):
                  t.el ? t.el.addClass("siebui-ctrl-checkbox " + (t.className || "")) : l += "<input type='checkbox' role='calc' class=\"siebui-ctrl-checkbox ${CLASSNAME}\" ${ID} ${ATTRS} value=\"${VALUES}\" />".replace("${VALUES}", t.value || "");
                  break;
              case e.get("SWE_CTRL_LINK"):
                  if (t.el) {
                      t.el.addClass("siebui-ctrl-link " + (t.className || ""));
                      for (var c = 0, h = t.el.length; c < h; c++) t.el.eq(c).children("#" + t.id + "_mb").length === 0 && t.el.append("<a role = 'link' id =\"" + t.id + '_mb" ' + 'href="javascript:void(0)" ' + ">" + t.value + "</a>")
                  } else l += '<a href="${SRC}" class="siebui-ctrl-link ${CLASSNAME}" ${ID} ${ATTRS}>${VALUES}</a>'.replace("${VALUES}", t.value || "").replace("${SRC}", t.src || "javascript:void(0)");
                  break;
              case e.get("SWE_CTRL_MAILTO"):
                  if (t.el) {
                      t.el.addClass("siebui-ctrl-mailto siebui-input-popup " + (t.className || ""));
                      for (var c = 0, h = t.el.length; c < h; c++) {
                          var v = t.el.eq(c).val() ? "mailto:" + encodeURIComponent(t.el.eq(c).val()) : "mailto:";
                          t.el.eq(c).next(".siebui-icon-mailto").length === 0 && t.el.eq(c).after("<a href =" + v + ' class="siebui-icon-mailto" id="' + t.id + '_icon" >')
                      }
                      SiebelApp.Utils.IsTrue(SiebelApp.S_App.GetAccessibilityEnhanced()) && t.el.attr("aria-describedby", (t.el.attr("aria-describedby") || "") + " " + t.id + "_icon")
                  } else l += '<a src="${SRC}" class="siebui-ctrl-mailto ${CLASSNAME}" ${ID} ${ATTRS}>${VALUES}</a>'.replace("${VALUES}", t.value || "").replace("${SRC}", t.src || "javascript:void(0)");
                  break;
              case e.get("SWE_CTRL_IMAGECONTROL"):
                  l += SiebelApp.Utils.GetSpanTag(t.src) + '<img src="${SRC}" class="siebui-ctrl-img ${CLASSNAME}" ${ID} ${ATTRS}>${VALUES}</img></span>'.replace("${VALUES}", t.value || "").replace("${SRC}", t.src);
                  break;
              case e.get("SWE_CTRL_TEXTAREA"):
                  t.el ? t.el.addClass("siebui-ctrl-textarea " + (t.className || "")) : l += '<textarea class="siebui-ctrl-textarea ${CLASSNAME}" ${ID} ${ATTRS} value="${VALUES}"></textarea>'.replace("${VALUES}", t.value || "");
                  break;
              case e.get("SWE_CTRL_DATE_PICK"):
                  if (t.el)
                      for (var c = 0, h = t.el.length; c < h; c++) t.el.eq(c).next("span.siebui-icon-date").length === 0 && (t.el.eq(c).addClass("siebui-ctrl-date siebui-input-popup " + (t.className || "")).after('<span class="siebui-icon-date" id="' + t.id + '_icon" aria-label="' + n + '" data-allowdblclick="true"/>'), SiebelApp.Utils.IsTrue(SiebelApp.S_App.GetAccessibilityEnhanced()) && t.el.eq(c).attr("aria-describedby", (t.el.attr("aria-describedby") || "") + " " + t.id + "_icon"));
                  else l += '<input type=\'text\' class="siebui-ctrl-date ${CLASSNAME}" ${ID} ${ATTRS} value="${VALUES}" />'.replace("${VALUES}", t.value || ""), l += '<span class="siebui-icon-date" aria-label="' + n + '" >';
                  break;
              case e.get("SWE_CTRL_DATE_TZ_PICK"):
              case e.get("SWE_CTRL_DATE_TIME_PICK"):
                  if (t.el)
                      for (var c = 0, h = t.el.length; c < h; c++) t.el.eq(c).next("span.siebui-icon-datetime").length === 0 && (t.el.eq(c).addClass("siebui-ctrl-datetime siebui-input-popup " + (t.className || "")).after('<span class="siebui-icon-datetime" id="' + t.id + '_icon" aria-label="' + r + '" data-allowdblclick="true"/>'), SiebelApp.Utils.IsTrue(SiebelApp.S_App.GetAccessibilityEnhanced()) && t.el.eq(c).attr("aria-describedby", (t.el.attr("aria-describedby") || "") + " " + t.id + "_icon"));
                  else l += '<input type=\'text\' class="siebui-ctrl-datetime ${CLASSNAME}" ${ID} ${ATTRS} value="${VALUES}" />'.replace("${VALUES}", t.value || ""), l += '<span class="siebui-icon-datetime" aria-label="' + n + '" >';
                  break;
              case e.get("SWE_CTRL_URL"):
                  if (t.el)
                      for (var c = 0, h = t.el.length; c < h; c++) t.el.eq(c).attr({
                          "class": "siebui-ctrl-url " + (t.className || ""),
                          value: t.value || ""
                      });
                  else l += '<input type=\'text\' class="siebui-ctrl-url ${CLASSNAME}" ${ID} ${ATTRS} value="${VALUES}" />'.replace("${VALUES}", t.value || "");
                  break;
              case e.get("SWE_CTRL_PHONE"):
                  l += '<input type=\'text\' class="siebui-ctrl-phone ${CLASSNAME}" ${ID} ${ATTRS} value="${VALUES}" />'.replace("${VALUES}", t.value || "");
                  break;
              case e.get("SWE_CTRL_EFFDAT"):
                  if (t.el)
                      for (var c = 0, h = t.el.length; c < h; c++) t.el.eq(c).next("span.siebui-icon-effdate").length === 0 && (t.el.eq(c).addClass("siebui-ctrl-effdate siebui-input-popup " + (
                          SiebelApp.S_App.GetDirection() ? "siebui-rtl-input-popup " : " ") + (t.className || "")).after('<span class="siebui-icon-effdate" id="' + t.id + '_icon" aria-label="' + o + '" />'), SiebelApp.Utils.IsTrue(SiebelApp.S_App.GetAccessibilityEnhanced()) && t.el.eq(c).attr("aria-describedby", (t.el.attr("aria-describedby") || "") + " " + t.id + "_icon"));
                  else l += '<input type=\'text\' class="siebui-ctrl-effdat ${CLASSNAME}" ${ID} ${ATTRS} value="${VALUES}" />'.replace("${VALUES}", t.value || "");
                  break;
              case e.get("SWE_CTRL_MVG"):
                  if (t.el)
                      for (var c = 0, h = t.el.length; c < h; c++) t.el.eq(c).next("span.siebui-icon-mvg").length === 0 && (t.el.eq(c).addClass("siebui-ctrl-mvg siebui-input-popup " + (SiebelApp.S_App.GetDirection() ? "siebui-rtl-input-popup " : " ") + (t.className || "")).after('<span class="siebui-icon-mvg" id="' + t.id + '_icon" aria-label="' + s + '" />'), SiebelApp.Utils.IsTrue(SiebelApp.S_App.GetAccessibilityEnhanced()) && t.el.eq(c).attr("aria-describedby", (t.el.attr("aria-describedby") || "") + " " + t.id + "_icon"));
                  else l += '<input type=\'text\' class="siebui-ctrl-mvg ${CLASSNAME}" ${ID} ${ATTRS} value="${VALUES}" />'.replace("${VALUES}", t.value || "");
                  break;
              case e.get("SWE_CTRL_PICK"):
                  if (t.el)
                      for (var c = 0, h = t.el.length; c < h; c++) t.el.eq(c).next("span.siebui-icon-pick").length === 0 && (t.el.eq(c).addClass("siebui-ctrl-pick siebui-input-popup " + (SiebelApp.S_App.GetDirection() ? "siebui-rtl-input-popup " : " ") + (t.className || "")).after('<span class="siebui-icon-pick" id="' + t.id + '_icon" aria-label="' + i + '" />'), SiebelApp.Utils.IsTrue(SiebelApp.S_App.GetAccessibilityEnhanced()) && t.el.eq(c).attr("aria-describedby", (t.el.attr("aria-describedby") || "") + " " + t.id + "_icon"));
                  else l += '<input type=\'text\' class="siebui-ctrl-pick ${CLASSNAME}" ${ID} ${ATTRS} value="${VALUES}" />'.replace("${VALUES}", t.value || "");
                  break;
              case e.get("SWE_CTRL_DETAIL"):
                  l += '<input type=\'text\' class="siebui-ctrl-detail ${CLASSNAME}" ${ID} ${ATTRS} value="${VALUES}" />'.replace("${VALUES}", t.value || "");
                  break;
              case e.get("SWE_CTRL_LABEL"):
                  if (t.el)
                      for (var c = 0, h = t.el.length; c < h; c++) t.el.eq(c).children("#" + t.id + "_mb").length === 0 && (t.el.eq(c).addClass("siebui-ctrl-label " + (t.className || "")), t.value && t.el.eq(c).append('<a  id ="' + t.id + '_mb" ' + 'href="javascript:void(0)" ' + ">" + t.value + "</a>"));
                  else l += '<label class="siebui-ctrl-label ${CLASSNAME}" ${ID} ${ATTRS} >${VALUES}</label>'.replace("${VALUES}", t.value || "");
                  break;
              case e.get("SWE_CTRL_FILE"):
                  l += '<input type=\'file\' class="siebui-ctrl-file ${CLASSNAME}" ${ID} ${ATTRS} value="${VALUES}" />'.replace("${VALUES}", t.value || "");
                  break;
              case e.get("SWE_CTRL_RADIO"):
                  l += "<input type='radio' role='radio' class=\"siebui-ctrl-radio ${CLASSNAME}\" ${ID} ${ATTRS} value=\"${VALUES}\" />".replace("${VALUES}", t.value || "");
                  break;
              case e.get("SWE_CTRL_CURRENCY_CALC"):
                  if (t.el)
                      for (var c = 0, h = t.el.length; c < h; c++) t.el.eq(c).next("span.siebui-icon-currency").length === 0 && (t.el.eq(c).addClass("siebui-ctrl-currency siebui-input-popup siebui-ctrl-rtl " + (SiebelApp.S_App.GetDirection() ? "siebui-rtl-input-popup " : " ") + (t.className || "")).after('<span class="siebui-icon-currency" id="' + t.id + '_icon" aria-label="' + f + '" />'), SiebelApp.Utils.IsTrue(SiebelApp.S_App.GetAccessibilityEnhanced()) && t.el.eq(c).attr("aria-describedby", (t.el.attr("aria-describedby") || "") + " " + t.id + "_icon"));
                  else l += '<input type=\'text\' class="siebui-ctrl-rtl ${CLASSNAME}" ${ID} ${ATTRS} value="${VALUES}" />'.replace("${VALUES}", t.value || "");
                  break;
              case e.get("SWE_CTRL_PWD"):
                  t.el ? t.el.addClass("siebui-ctrl-password" + (t.className ? " " + t.className : "")) : l += '<input type="password" class="siebui-ctrl-password ${CLASSNAME}" ${ID} ${ATTRS} value="${VALUES}" />'.replace("${VALUES}", t.value || "");
                  break;
              case e.get("SWE_CTRL_TEXT"):
                  t.el ? (t.el.addClass("siebui-ctrl-input " + (t.className || "")), t.addIcon && t.el.next("span.siebui-icon-detail").length === 0 && (t.el.removeClass("siebui-ctrl-input").addClass("siebui-ctrl-detail siebui-input-popup " + (SiebelApp.S_App.GetDirection() ? "siebui-rtl-input-popup " : " ")).after('<span class="siebui-icon-detail" id="' + t.id + '_icon" aria-label="' + u + '" />'), SiebelApp.Utils.IsTrue(SiebelApp.S_App.GetAccessibilityEnhanced()) && t.el.attr("aria-describedby", (t.el.attr("aria-describedby") || "") + " " + t.id + "_icon"))) : l += '<input type="text" class="siebui-ctrl-input ${CLASSNAME}" ${ID} ${ATTRS} value="${VALUES}" />'.replace("${VALUES}", t.value || "");
                  break;
              default:
                  l += '<input type=\'text\' class="siebui-ctrl-text ${CLASSNAME}" ${ID} ${ATTRS} value="${VALUES}" />'.replace("${VALUES}", t.value || "")
          }
          return l.replace("${CLASSNAME}", t.className || "").replace("${ID}", t.id ? 'id="' + t.id + '"' : "").replace("${ATTRS}", t.attrs || "")
      }
      var e = SiebelJS.Dependency("SiebelApp.Constants"),
          t = SiebelJS.Dependency("SiebelApp.S_App.LocaleObject"),
          n = t.GetLocalString("IDS_SWE_DATE_FIELD_TITLE"),
          r = t.GetLocalString("IDS_SWE_DATETIME_FIELD_TITLE"),
          i = t.GetLocalString("IDS_SWE_PICK_TITLE"),
          s = t.GetLocalString("IDS_SWE_MVG_TITLE"),
          o = t.GetLocalString("IDS_SWE_EFFECTIVE_DATE_TITLE"),
          u = t.GetLocalString("IDS_SWE_DETAIL_POPUP_APPLET"),
          a = t.GetLocalString("IDS_SWE_CALC_FIELD_TITLE"),
          f = t.GetLocalString("IDS_SWE_CURRENCY_CALC_FIELD_TITLE");
      return l.prototype.GenerateMarkup = function() {
          return c.apply(this, arguments)
      }, l.prototype.EnhanceMarkup = function() {
          return c.apply(this, arguments)
      }, new l
  }(), SiebelAppFacade.HTMLTemplateManager
}));
if (typeof SiebelApp.S_App.ErrorObject == "undefined") {
  SiebelJS.Namespace("SiebelApp.S_App.ErrorObject");
  var consts = SiebelJS.Dependency("SiebelApp.Constants"),
      utils = SiebelJS.Dependency("SiebelApp.Utils");
  SiebelApp.S_App.ErrorObject = function() {
      function e() {
          var e = ["Global"],
              t = [
                  []
              ],
              n = null,
              r = !0,
              i = [];
          this.GetErrorSuppressState = function() {
              return r
          }, this.SetErrorSuppressState = function(e) {
              r = e
          }, this.AddCapableObject = function(n) {
              var r = !1;
              return e.indexOf(n) === -1 && (e.push(n), t.push([]), i.push(!1), r = !0), r
          }, this.GetIndex = function(t) {
              return e.indexOf(t === undefined ? "Global" : t)
          }, this.HasServerError = function(e) {
              var t = this.GetIndex(e || this);
              return t === -1 ? !1 : i[t]
          }, this.SetServerError = function(e, t) {
              var n = this.GetIndex(e || this);
              n !== -1 && (i[n] = t)
          }, this.GetErrorArray = function(
              e) {
              var n = this.GetIndex(e);
              return n === -1 ? null : t[n]
          }, this.ResetErrorArray = function(e) {
              var n = this.GetIndex(e);
              n !== -1 && (t[n] = [])
          }, this.DeleteErrorObj = function(n) {
              var r = this.GetIndex(n);
              r > -1 && (e.splice(r, 1), t.splice(r, 1), i.splice(r, 1))
          }, this.AddErrorRecord = function(e, n) {
              var r = this.GetIndex(n);
              r !== -1 ? t[r].push(e) : SiebelJS.Debug("Failed to save error message")
          }, this.GetErrorRendr = function() {
              return n || (n = new SiebelAppFacade.ErrorObjectRenderer(new SiebelAppFacade.BasePM({
                  GetName: function() {
                      return "ErrorObject"
                  },
                  GetPropArray: function() {
                      return []
                  },
                  GetMethodArray: function() {
                      return []
                  }
              })), n.ShowUI(), n.BindData(), n.BindEvents()), n
          }
      }

      function t(e) {
          var t = consts.get("SSAELErrUserDefinedError"),
              r = this.GetErrorArray(e),
              i = r === null ? 0 : r.length,
              s = "";
          if (i === 0) return;
          for (var o = 0; o < i; o++) {
              if (r[o].errCode === t) {
                  s = r[o].errMsg;
                  break
              }
              i > 1 && (s += "[" + (o + 1) + "]"), s += r[o].errMsg + "\n"
          }
          s && this.GetErrorRendr().ShowError(HtmlDecode(s)), n.call(this, e)
      }

      function n(e) {
          e.SetServerError(!1), this.ResetErrorArray(e)
      }

      function r(e, t, r) {
          var i = {};
          n.call(this, r);
          if (e === "OK") return !0;
          i.errCode = e, i.errMsg = SiebelApp.S_App.LocaleObject.GetLocalString(e), i.errMsg ? t && (e === "LocaleErrFormattedToString" ? i.errMsg = '"' + t + '": ' + i.errMsg : i.errMsg.replace("%1", t)) : i.errMsg = e, this.AddErrorRecord(i, r)
      }

      function i(e, t, n, r) {
          var i = {};
          i.errCode = e, i.errMsg = t, (r || this).SetServerError(!0), this.AddErrorRecord(i, r)
      }

      function s(e) {
          var t = !1,
              n = this.GetErrorArray(e);
          return n && n.length > 0 && (t = !0), t
      }

      function o(e) {}
      return e.prototype.AddErrorMsgText = function(e, t, n) {
          i.call(this, e, t, n)
      }, e.prototype.ProcessError = function() {
          t.apply(this, arguments)
      }, e.prototype.SetErrorMsg = function(e, t) {
          r.call(this, e, t)
      }, e.prototype.ClearErrorMsg = function() {
          n.apply(this, arguments)
      }, e.prototype.HasErrorMsg = function() {
          s.apply(this, arguments)
      }, e.prototype.DecorateErrorCapability = function(e) {
          this.AddCapableObject(e) && (e.ProcessError = function() {
              !this.CanProcessError || this.CanProcessError(SiebelApp.S_App.ErrorObject.GetErrorArray(this)) ? t.call(SiebelApp.S_App.ErrorObject, this) : n.call(SiebelApp.S_App.ErrorObject, this)
          }, e.SetErrorMsg = function(e, t) {
              r.call(SiebelApp.S_App.ErrorObject, e, t, this)
          }, e.ClearErrorMsg = function() {
              n.call(SiebelApp.S_App.ErrorObject, this)
          }, e.HasErrorMsg = function() {
              s.call(SiebelApp.S_App.ErrorObject, this)
          }, e.AddErrorMsgText = function(e, t, n) {
              i.call(SiebelApp.S_App.ErrorObject, e, t, n, this)
          }, e.HasServerError = function() {
              return SiebelApp.S_App.ErrorObject.HasServerError.call(SiebelApp.S_App.ErrorObject, this)
          }, e.SetServerError = function(e) {
              SiebelApp.S_App.ErrorObject.SetServerError.call(SiebelApp.S_App.ErrorObject, this, e)
          })
      }, new e
  }()
}
typeof SiebelApp.Service == "undefined" && (Namespace("SiebelApp.Service"), SiebelApp.Service = function() {
      function r() {
          var e = 0,
              r = 0,
              i = t.get("SWE_DEFAULT_SERVICE");
          this.SetName = function(e) {
              i = e
          }, this.GetName = function() {
              return i
          }, this.AddRef = function() {
              e++
          }, this.GetRefCount = function() {
              return e
          }, this.Release = function() {
              e--, e < 1 && n.ReleaseService(i)
          }, this.SetIterator = function(e) {
              r = e
          }, this.GetIterator = function() {
              return r
          }, SiebelApp.S_App.ErrorObject.DecorateErrorCapability(this)
      }

      function i(e, r, i, s) {
          var o = r.EncodeAsString(),
              u = CCFMiscUtil_CreatePropSet();
          i = i || CCFMiscUtil_CreatePropSet(), r.GetProperty(t.get("SWE_BUSINESS_SERVICE")) == t.get("SWE_NUMERIC_TRUE") && u.SetProperty(t.get("SWE_BUSINESS_SERVICE"), t.get("SWE_NUMERIC_TRUE")), u.SetProperty(t.get("SWE_CMD_ARG"), t.get("SWE_CMD_INVOKE_METHOD_STR")), u.SetProperty(t.get("SWE_SERVICE"), this.GetName()), u.SetProperty(t.get("SWE_METHOD_STR"), e), u.SetProperty(t.get("SWE_INPUT_PS"), o);
          var a = !0;
          return s && s.npr === !0 && (a = !1), n.CallServer(u, i, a, s), !0
      }

      function s(e, t) {
          var n;
          return this.shadow && typeof this.shadow.OnPreInvokeMethod == "function" ? (n = this.shadow.OnPreInvokeMethod(e, t), n == "CancelOperation" ? !1 : !0) : !0
      }

      function o(e, t) {
          this.shadow && typeof this.shadow.OnInvokeMethod == "function" && this.shadow.OnInvokeMethod(e, t)
      }

      function u(e, t) {
          var n;
          return this.shadow && typeof this.shadow.OnPreCanInvokeMethod == "function" ? (n = this.shadow.OnPreCanInvokeMethod(e, t), n == "CancelOperation" || n == "CancelAction" ? !1 : !0) : !0
      }
      var e = SiebelApp.Utils,
          t = SiebelApp.Constants,
          n = SiebelApp.S_App;
      return r.prototype.InvokeMethod = function(e, t, n) {
          var r = !0,
              o = CCFMiscUtil_CreatePropSet();
          t = t || CCFMiscUtil_CreatePropSet();
          var u = t.Clone();
          r = s.call(this, e, t);
          if (!r) return o;
          var a = {},
              f = this,
              l;
          return typeof n == "object" || n === !0 || n === !1 ? (a.scope = this, a.async = typeof n.async == "boolean" ? n.async : n, a.selfbusy = n.selfbusy || !1, a.mask = n.mask || !1, a.npr = n.npr || !1, a.args = [], a.args.push(e), a.args.push(t), a.cb = function() {
              var e = Array.prototype.slice.call(arguments);
              f.PostServiceExecute.apply(f, arguments), typeof n.cb == "function" && n.cb.apply(n.scope || null, e)
          }) : a = {
              scope: this,
              cb: function() {
                  var n = [];
                  n.push(e), n.push(t), n.push(o), n.push(!0), this.PostServiceExecute.apply(this, n), l = o
              }
          }, i.call(this, e, t, o, a), l
      }, r.prototype.PostServiceExecute = function(n, r, i) {
          if (arguments[2].GetProperty(t.get("AJAX_FAIL_ERR")) === "timeout" || arguments[2].GetProperty(t.get("AJAX_FAIL_ERR")) === "error" || arguments[2].GetProperty(t.get("AJAX_FAIL_ERR")) === "abort" || arguments[2].GetProperty(t.get("AJAX_FAIL_ERR")) === "parsererror") return !1;
          var s = !0,
              u = arguments[2].GetProperty(t.get("SWE_RPC_PROP_RETURN_STATUS"));
          if (u === t.get("SWE_RPC_PROP_STATUS_ERROR") || e.IsEmpty(u)) this.ProcessError(), s = !1;
          return u === t.get("SWE_RPC_PROP_STATUS_COMPLETED") && (s = !0), s === !0 && o.call(this, n, r), s
      }, r.prototype.CanInvokeMethod = function(e) {
          var t = !0;
          return t = u.call(this, e), t ? t : !1
      }, r.prototype.GetProperty = function(e) {
          var t = CCFMiscUtil_CreatePropSet(),
              n = CCFMiscUtil_CreatePropSet();
          return t.SetProperty("Name", e), i.call(this, "GetProperty", t, n), n.GetChildByType("ResultSet").GetProperty("Value")
      }, r.prototype.SetProperty = function(e, t) {
          var n = CCFMiscUtil_CreatePropSet(),
              r = CCFMiscUtil_CreatePropSet();
          n.SetProperty("Name", e), n.SetProperty("Value", t), i.call(this, "SetProperty", n, r)
      }, r.prototype.PropertyExists = function(e) {
          var t = CCFMiscUtil_CreatePropSet(),
              n = CCFMiscUtil_CreatePropSet();
          return t.SetProperty("Name", e), i.call(this, "PropertyExists", t, n), n.GetChildByType("ResultSet").GetProperty("Value") == "1"
      }, r.prototype.RemoveProperty = function(e) {
          var t = CCFMiscUtil_CreatePropSet(),
              n = CCFMiscUtil_CreatePropSet();
          t.SetProperty("Name", e), i.call(this, "RemoveProperty", t, n)
      }, r.prototype.GetFirstProperty = function() {
          var e = CCFMiscUtil_CreatePropSet(),
              t = CCFMiscUtil_CreatePropSet();
          return e.SetProperty("Iterator", this.GetIterator().toString()), i.call(this, "GetFirstProperty", e, t), this.SetIterator(parseInt(t.GetChildByType("ResultSet").GetProperty("Iterator"), 10)), isNaN(this.GetIterator()) && this.SetIterator(0), t.RemoveProperty("Iterator"), t.GetChildByType("ResultSet").GetProperty("Name")
      }, r.prototype.GetNextProperty = function() {
          var e = CCFMiscUtil_CreatePropSet(),
              t = CCFMiscUtil_CreatePropSet();
          return e.SetProperty("Iterator", this.GetIterator().toString()), i.call(this, "GetNextProperty", e, t), this.SetIterator(parseInt(t.GetChildByType("ResultSet").GetProperty("Iterator"), 10)), isNaN(this.GetIterator()) && this.SetIterator(0), t.RemoveProperty("Iterator"), t.GetChildByType("ResultSet").GetProperty("Name")
      }, r
  }()), typeof SiebelAppFacade.InterfaceSI == "undefined" && (Namespace("SiebelAppFacade.InterfaceSI"), SiebelAppFacade.InterfaceSI = {}), typeof SiebelAppFacade.InterfaceSI.App == "undefined" && (Namespace("SiebelAppFacade.InterfaceSI.App"), SiebelAppFacade.InterfaceSI.App = function() {
      function s() {
          var e;
          return s = function() {
              return e
          }, s.prototype = this, e = new s, e.constructor = s, e
      }
      var e = SiebelApp.Utils,
          t = SiebelApp.Constants,
          n = SiebelApp.S_App,
          r = SiebelApp.CommandManager;
      if (e.IsEmpty(n)) return null;
      var i;
      return s.GetInstance = function() {
          return new s
      }, s.prototype.HideBrowserFrame = function(e) {
          SiebelApp.S_App.HideLayout(e)
      }, s.prototype.ShowBrowserFrame = function(e, t, n) {}, s.prototype.GetName = function() {
          return n.GetName()
      }, s.prototype.GetPageURL = function() {
          return n.GetPageURL()
      }, s.prototype.GetSWECount = function() {
          return n.GetSWEReqCount()
      }, s.prototype.GotoURL = function(e, t, n) {}, s.prototype.GotoView = function(t, r, i, s) {
          return e.IsEmpty(t) && e.IsEmpty(i) ? !1 : n.GotoView(t, r, i, s)
      }, s.prototype.SWETargetGotoURL = function(e, t) {
          return !0
      }, s.prototype.ProcessRPCInfo = function(e) {
          n.ProcessResponse(e)
      }, s.prototype.SubmitForm = function(t) {
          if (e.IsEmpty(t)) return !1;
          var r, i = t.target;
          if (i == "_self" || i == "") {
              if ($(t).children().length === 0) {
                  var s = $(t).parent().find("input[type=hidden]").clone();
                  $(t).parent().children("input[type=hidden]").remove(), $(t).append(s)
              }
              var o = $(t).serialize(),
                  u = CCFMiscUtil_CreatePropSet();
              r = n.GotoView("", "", o, "", !0), n.uiStatus.Free()
          } else r = !1;
          return r
      }, s.prototype.NewPropertySet = function() {
          return CCFMiscUtil_CreatePropSet()
      }, s.prototype.InvokeAppletMethod = function(t, r, i, s) {
          if (e.IsEmpty(r) || e.IsEmpty(i) || s.IsEmpty()) return !1;
          var o = n.GetMainView();
          if (!e.IsEmpty(o)) {
              var u = o.GetApplet(r);
              if (!e.IsEmpty(u)) return u.InvokeMethod(i, s)
          }
          return !1
      }, s.prototype.ShowMessage = function(t, n) {
          e.Alert(HtmlDecode(n))
      }, s.prototype.CallSWEAsString = function(t, r, i) {
          if (e.IsEmpty(t)) return !1;
          var s, o = CCFMiscUtil_CreatePropSet();
          return r ? s = e.DecodeFromQueryString(t) : (s = CCFMiscUtil_CreatePropSet(), s.DecodeFromString(t)), n.CallServer(s, o, !0), i.concat(o.EncodeAsString()), !0
      }, s.prototype.OpenPopup = function(e, t, r, i, s) {
          return n.GetPopupPM().ExecuteMethod("OpenPopup", e, t, r, i, s)
      }, s.prototype.GetView = function(t) {
          var r = n.GetMainView();
          if (!e.IsEmpty(r)) {
              var i = new SiebelAppFacade.InterfaceSI.View;
              return i.SetInternalView(r), i.SetInterfaceApp(this), i
          }
          return null
      }, s.prototype.GetMainView = function() {
          return this.GetView()
      }, s.prototype.GetService = function(t) {
          var r = n.GetService(t);
          if (!e.IsEmpty(r)) {
              var i = new SiebelAppFacade.InterfaceSI.Service;
              return i.SetInternalService(r), i.SetInterfaceApp(this), i
          }
          return null
      }, s.prototype.GetCommandMgr = function() {
          return new SiebelAppFacade.InterfaceSI.CommandManager
      }, s.prototype.GetShadow = function() {
          return n.shadow
      }, s
  }()), typeof SiebelAppFacade.InterfaceSI.View == "undefined" && (Namespace("SiebelAppFacade.InterfaceSI.View"), SiebelAppFacade.InterfaceSI.View = function() {
      function s() {}
      var e = SiebelApp.Utils,
          t = SiebelApp.Constants,
          n = SiebelApp.S_App;
      if (e.IsEmpty(n)) return null;
      var r, i;
      return s.prototype.SetInterfaceApp = function(e) {
          r = e
      }, s.prototype.GetInterfaceApp = function() {
          return r
      }, s.prototype.SetInternalView = function(e) {
          i = e
      }, s.prototype.GetName = function() {
          return e.IsEmpty(i) ? null : i.GetName()
      }, s.prototype.GetApplet = function(t) {
          if (!e.IsEmpty(i)) {
              var n = i.GetApplet(t);
              if (!e.IsEmpty(n)) {
                  var r = new SiebelAppFacade.InterfaceSI.Applet;
                  return r.SetInternalApplet(n), r.SetInterfaceView(this), r
              }
              return null
          }
          return null
      }, s.prototype.GetActiveApplet = function() {
          if (!e.IsEmpty(i)) {
              var t = i.GetActiveApplet();
              return e.IsEmpty(t) ? null : this.GetApplet(t.GetName())
          }
          return null
      }, s
  }()), typeof SiebelAppFacade.InterfaceSI.Applet == "undefined" && (Namespace("SiebelAppFacade.InterfaceSI.Applet"), SiebelAppFacade.InterfaceSI.Applet = function() {
      function s() {}
      var e = SiebelApp.Utils,
          t = SiebelApp.Constants,
          n = SiebelApp.S_App;
      if (e.IsEmpty(n)) return null;
      var r, i;
      return s.prototype.SetInterfaceView = function(e) {
              r = e
          }, s.prototype.GetInterfaceView = function() {
              return r
          }, s.prototype.SetInternalApplet = function(e) {
              i = e
          }, s.prototype.GetName = function() {
              return e.IsEmpty(i) ? null : i.GetName()
          }, s.prototype.GetView = function() {
              return e.IsEmpty(r) ? null : r
          }, s.prototype.GetBusComp = function() {
              var t;
              e.IsEmpty(i) || (t = i.GetBusComp());
              if (!e.IsEmpty(t)) {
                  var n = new SiebelAppFacade.InterfaceSI.BusComp;
                  return n.SetInternalBusComp(t), n.SetInterfaceApplet(this), n
              }
              return null
          }, s.prototype.InvokeMethod = function(t, n) {
              if (!e.IsEmpty(t) && !e.IsEmpty(i)) return i.InvokeMethod(t, n)
          }, s.prototype.CanUpdate = function(t) {
              if (!e.IsEmpty(t) && !e.IsEmpty(i)) return i.CanUpdate(t)
          }, s.prototype.CanInvokeMethod = function(t) {
              if (!e.IsEmpty(t) && !e.IsEmpty(i)) return i.CanInvokeMethod(t)
          }, s.prototype.GetControl = function(t) {
              var n;
              !e.IsEmpty(t) && !e.IsEmpty(i) && (n = i.GetControl(t));
              if (!e.IsEmpty(n)) {
                  var r = new SiebelAppFacade.InterfaceSI.Control;
                  return r.SetInternalControl(n), r.SetInterfaceApplet(this), r
              }
              return null
          }, s.prototype.GetActiveControl = function() {
              var t;
              return e.IsEmpty(i) || (t = i.GetActiveControl()), e.IsEmpty(t) ? null : this.GetControl(t.GetName())
          }, s.prototype.GetControlValue =
          function(e) {
              return !0
          }, s.prototype.GetControlValueByName = function(e) {
              return !0
          }, s
  }()), typeof SiebelAppFacade.InterfaceSI.Control == "undefined" && (Namespace("SiebelAppFacade.InterfaceSI.Control"), SiebelAppFacade.InterfaceSI.Control = function() {
      function o() {}
      var e = SiebelApp.Utils,
          t = SiebelApp.Constants,
          n = SiebelApp.S_App,
          r, i, s;
      return o.prototype.SetInterfaceApplet = function(e) {
          r = e
      }, o.prototype.GetInterfaceApplet = function() {
          return r
      }, o.prototype.SetInternalControl = function(e) {
          s = e
      }, o.prototype.GetFieldName = function() {
          return e.IsEmpty(s) ? null : s.GetFieldName()
      }, o
  }()), typeof SiebelAppFacade.InterfaceSI.BusComp == "undefined" && (Namespace("SiebelAppFacade.InterfaceSI.BusComp"), SiebelAppFacade.InterfaceSI.BusComp = function() {
      function o() {}
      var e = SiebelApp.Utils,
          t = SiebelApp.Constants,
          n = SiebelApp.S_App,
          r, i, s;
      return o.prototype.SetInternalBusComp = function(e) {
          r = e
      }, o.prototype.SetInterfaceApplet = function(e) {
          i = e
      }, o.prototype.GetInterfaceApplet = function() {
          return i
      }, o.prototype.GetName = function() {
          return e.IsEmpty(r) ? null : r.GetName()
      }, o.prototype.RegNotifyObj = function(e) {}, o.prototype.UnRegNotifyObj = function(e) {}, o.prototype.GetFieldTotal = function(e) {}, o
  }()), typeof SiebelAppFacade.InterfaceSI.CommandManager == "undefined" && (Namespace("SiebelAppFacade.InterfaceSI.CommandManager"), SiebelAppFacade.InterfaceSI.CommandManager = function() {
      function o() {}
      var e = SiebelApp.Utils,
          t = SiebelApp.Constants,
          n = SiebelApp.S_App,
          r = SiebelApp.CommandManager.GetInstance();
      if (e.IsEmpty(r)) return null;
      var i, s;
      return o.prototype.SetInterfaceApp = function(e) {
          i = e
      }, o.prototype.GetInterfaceApp = function() {
          return i
      }, o.prototype.InvokeCommand = function(t) {
          return e.IsEmpty(t) ? null : r.InvokeCommand(t)
      }, o.prototype.CanInvokeCommand = function(t) {
          return e.IsEmpty(t) ? !1 : r.ProcessCommand(t, !1)
      }, o.prototype.UpdateBatchMethods = function(e) {
          return r.UpdateBatchMethods(e)
      }, o
  }()), typeof SiebelAppFacade.InterfaceSI.Service == "undefined" && (Namespace("SiebelAppFacade.InterfaceSI.Service"), SiebelAppFacade.InterfaceSI.Service = function() {
      function o() {}
      var e = SiebelApp.Utils,
          t = SiebelApp.Constants,
          n = SiebelApp.S_App,
          r = SiebelApp.CommandManager.GetInstance(),
          i, s;
      return o.prototype.SetInternalService = function(e) {
          s = e
      }, o.prototype.SetInterfaceApp = function(e) {
          i = e
      }, o.prototype.GetInterfaceApp = function() {
          return i
      }, o.prototype.GetName = function() {
          return e.IsEmpty(s) ? null : s.GetName()
      }, o.prototype.InvokeMethod = function(t, n) {
          return e.IsEmpty(s) ? !1 : s.InvokeMethod(t, n)
      }, o
  }()),
  function() {
      if (typeof SiebelAppFacade.FacadeConstants != "undefined") return;
      Namespace("SiebelAppFacade.FacadeConstants");
      var e = SiebelApp.Utils.DefineConstants;
      SiebelAppFacade.FacadeConstants = e();
      var t = SiebelAppFacade.FacadeConstants;
      t.set("LIST_RENDERER", "LIST"), t.set("CAL_RENDERER", "CAL")
  }(), typeof SiebelApp.S_App.SweTimer == "undefined" && (SiebelJS.Namespace("SiebelApp.S_App.SweTimer"), SiebelApp.S_App.SweTimer = function() {
      function i() {
          var e = !0,
              t = 0,
              n = "unitialized sessionId",
              r = {},
              i, s = -1,
              o = -1,
              u = -1,
              a = 1,
              f = -1,
              l = !1,
              c = !1,
              h = {};
          this.m_ptimeValues = {}, this.m_ptimerStages = {};
          var p = {},
              d = {},
              v, m, g, y = !1,
              b = !1;
          this.m_mapTimer = {}, this.IsColumnsDisplayed = function() {
              return y
          }, this.SetColumnsDisplayed = function(e) {
              y = e
          }, this.IsToggleListRowCount = function() {
              return b
          }, this.SetToggleListRowCount = function(e) {
              b = e
          }, this.SetPopupAppletName = function(e) {
              g = e
          }, this.GetPopupAppletName = function() {
              return g
          }, this.SetMethodName = function(e) {
              m = e
          }, this.GetMethodName = function() {
              return m
          }, this.SetViewName = function(e) {
              v = e
          }, this.GetViewName = function() {
              return v
          }, this.GetInvokeAndPopup = function() {
              return c
          }, this.SetInvokeAndPopup = function(e) {
              c = e
          }, this.GetTimerGenericStages = function() {
              return d
          }, this.GetTimerGenericValues = function() {
              return p
          }, this.GetViewRefresh = function() {
              return l
          }, this.SetViewRefresh = function(e) {
              l = e
          }, this.GetFirstView = function() {
              return e
          }, this.SetFirstView = function(t) {
              e = t
          }, this.GetLastGenericStage = function() {
              return f
          }, this.SetLastGenericStage = function(e) {
              f = e
          }, this.GetStartFindStage = function() {
              return t
          }, this.SetStartFindStage = function(e) {
              t = e
          }, this.GetTimerModeStack = function() {
              return h
          }, this.GetStartStage = function() {
              return a
          }, this.SetStartStage = function(e) {
              a = e
          }, this.GetLastStage = function() {
              return u
          }, this.SetLastStage = function(e) {
              u = e
          }, this.GetLastMode = function() {
              return o
          }, this.SetLastMode = function(e) {
              o = e
          }, this.GetTimerMode = function() {
              return s
          }, this.SetTimerMode = function(e) {
              s = e
          }, this.GetTimerHook = function() {
              return r
          }, this.GetEnablePerfHooks = function() {
              return i
          }, this.SetEnablePerfHooks = function(e) {
              i = e
          }, this.GetSessid = function() {
              return n
          }, this.SetSessid = function(e) {
              n = e
          }
      }

      function s() {
          var e = this.FindStageIndex("Finished Populate"),
              t = this.FindStageIndex("Have Layout"),
              n = !1,
              i = !1,
              s = 0;
          e < 0 ? (i = !0, o.call(this)) : t < 0 ? (u.call(this), n = !0) : (this.GetViewRefresh() ? this.ShowStepTime(this.m_ptimerStages[this.GetStartStage()], this.m_ptimerStages[this.GetStartStage() - 1]) : (this.ShowStepTime("View Cache Ready", "Start GotoView"), this.ShowStepTime("Have Object Info", "View Cache Ready")), this.ShowStepTime("Processed Object Info", "Have Object Info"), s = h.call(this), this.ShowStepTime("Finished Populate", "Objects Initialized"), this.ShowStepTime("Reset Busy State", "Finished Populate"), this.ShowStepTime("Have Layout", "Call GetViewLayout"), this.ShowStepTime("Processed Layout", "Have Layout")), this.GetTimerMode() == 1 && (r += "Client Time:	", i || n ? (s = a.call(this, "View Cache Ready", "Start GotoView"), s += a.call(this, "Reset Busy State", "Have Object Info")) : (s += a.call(this, "View Cache Ready", "Start GotoView"), s += a.call(this, "Reset Busy State", "Objects Initialized")), r = r + s.toString() + "\r\n")
      }

      function o() {
          this.ShowStepTime("View Cache Ready", "Start GotoView"), this.ShowStepTime("Have Object Info", "View Cache Ready"), this.ShowStepTime("Processed Object Info", "Have Object Info"), this.ShowStepTime("Have Layout", "Call GetViewLayout"), this.ShowStepTime("Processed Layout", "Have Layout"), this.ShowStepTime("Reset Busy State", "Processed Layout")
      }

      function u() {
          this.ShowStepTime("View Cache Ready", "Start GotoView"), this.ShowStepTime("Have Object Info", "View Cache Ready"), this.ShowStepTime("Processed Object Info", "Have Object Info"), this.ShowStepTime("Objects Initialized", "Processed Object Info"), this.ShowStepTime("Finished Populate", "Objects Initialized"), this.ShowStepTime("Reset Busy State", "Finished Populate")
      }

      function a(e, t) {
          var n = this.FindStageIndex(e),
              r = this.FindStageIndex(t);
          return n < 0 || r < 0 ? 0 : this.m_ptimeValues[n] - this.m_ptimeValues[r]
      }

      function f() {
          var e = this.GetStartStage();
          this.SetStartStage(0);
          var t = this.FindStageIndex("Start PopupApplet");
          for (var n = 1; n <= t - 1; n++) this.ShowStepTime(this.m_ptimerStages[n], this.m_ptimerStages[n - 1]);
          this.SetStartStage(e), l.call(this), this.SetInvokeAndPopup(!1)
      }

      function l() {
          var e = !1,
              t = !1,
              n = 0,
              i = 0,
              s = this.FindStageIndex("Finished Populate");
          if (s < 0) {
              t = !0;
              var o = this.GetInvokeAndPopup() ? this.GetStartStage() + 1 : this.GetStartStage();
              for (var u = o; u <= this.GetLastStage(); u++) this.m_ptimerStages[u] == "Call GetLayout" || this.m_ptimerStages[u] == "Process Object Info Start" ? (u++, this.ShowStepTime(this.m_ptimerStages[u], this.m_ptimerStages[u - 2])) : this.ShowStepTime(this.m_ptimerStages[u], this.m_ptimerStages[u - 1])
          } else this.GetInvokeAndPopup() || this.ShowStepTime("Have Object Info", "Start PopupApplet"), this.ShowStepTime("Processed Object Info", "Process Object Info Start"), i = a.call(this, "Have Layout", "Processed Object Info"), r += "Wait Time:	", i <= 0 ? (r += "0\r\n", e = !1) : (r = r + i + "\r\n", e = !0), this.ShowStepTime("Objects Initialized", "Processed Layout"), this.ShowStepTime("Finished Populate", "Objects Initialized"), this.ShowStepTime("Reset Busy State", "Finished Populate"), this.ShowStepTime("Have Layout", "Call GetLayout"), this.ShowStepTime("Processed Layout", "Have Layout");
          if (this.GetInvokeAndPopup()) return;
          r += "Client Time:	", t || (e ? (n = a.call(this, "Processed Object Info", "Process Object Info Start"), n += a.call(this, "Reset Busy State", "Have Layout")) : n = a.call(this, "Reset Busy State", "Have Object Info")), r = r + n + "\r\n"
      }

      function c() {
          var e, t
      }

      function h() {
          var e, t, n, i = 0;
          return r += "Wait Time:	", p.call(this, "Have Object Info", "Have Layout") ? p.call(this, "Have Layout", "Processed Object Info") ? (r += "0\r\n", p.call(this, "Processed Object Info", "Processed Layout") ? this.ShowStepTime("Objects Initialized", "Processed Layout") : this.ShowStepTime("Objects Initialized", "Processed Object Info"), i += a.call(this, "Objects Initialized", "Have Object Info")) : (t = this.FindStageIndex("Processed Object Info"), n = this.FindStageIndex("Have Layout"), e = this.m_ptimeValues[n] - this.m_ptimeValues[t], r = r + e.toString() + "\r\n", this.ShowStepTime("Objects Initialized", "Processed Layout"), i += a.call(this, "Objects Initialized", "Have Layout"), i += a.call(this, "Processed Object Info", "Have Object Info")) : p.call(this, "Processed Layout", "Have Object Info") ? (t = this.FindStageIndex("Processed Layout"), n = this.FindStageIndex("Have Object Info"), e = this.m_ptimeValues[n] - this.m_ptimeValues[t], r = r + e.toString() + "\r\n", this.ShowStepTime("Objects Initialized", "Processed Object Info"), i += a.call(this, "Objects Initialized", "Have Object Info"), i += a.call(this, "Processed Layout", "Call GetViewLayout")) : (r += "0\r\n", p.call(this, "Processed Object Info", "Processed Layout") ? this.ShowStepTime("Objects Initialized", "Processed Layout") : this.ShowStepTime("Objects Initialized", "Processed Object Info"), i += a.call(this, "Objects Initialized", "Call GetViewLayout")), i
      }

      function p(e, t) {
          var n = this.FindStageIndex(e),
              r = this.FindStageIndex(t);
          return this.m_ptimeValues[r] > this.m_ptimeValues[n]
      }

      function d(e, t) {
          this.m_mapTimer[e] = t
      }

      function v(e) {
          return this.m_mapTimer[e]
      }
      var e = SiebelJS.Dependency("SiebelApp.Utils"),
          t = SiebelJS.Dependency("SiebelApp.Constants"),
          n = SiebelJS.Dependency("SiebelApp.S_App"),
          r = "Timing values: (in msecs)\r\n";
      return i.prototype.GetLogBuffer = function() {
          return r
      }, i.prototype.TimeRefreshView = function(e, t, n) {
          if (this.GetTimerMode() == 2) {
              var i = +(new Date);
              if (n == "Start RefreshView") this.SetViewRefresh(!0), this.AddStage("Start RefreshView", i, !0);
              else if (n == "Reset Busy State" && this.GetViewRefresh()) {
                  var o = this.FindStageIndex("Finished InvokeMethod");
                  for (var u = this.GetStartStage(); u <= o; u++) r = r + this.m_ptimerStages[u] + ":" + "	", r = r + (this.m_ptimeValues[u] - this.m_ptimeValues[u - 1]) + "\r\n";
                  this.SetStartStage(o + 1), s.call(this), this.SetViewRefresh(!1)
              }
          }
      }, i.prototype.TimeGoToView = function(e, t) {
          var n = this.GetTimerHook();
          for (var i in n)
              if (n.hasOwnProperty(i)) {
                  var o = n[i];
                  if (o === "GotoView") {
                      var u = +(new Date);
                      if (t == "Start GotoView") {
                          if (this.GetFirstView()) {
                              this.SetFirstView(!1);
                              return
                          }
                          this.SetViewName(e), this.GetLastMode() < 0 ? (this.SetLastStage(0), this.SetStartStage(1)) : (this.SetLastStage(this.GetLastStage() + 1), this.SetStartStage(this.GetLastStage())), this.SetLastMode(this.GetLastMode() + 1), this.GetTimerModeStack()[this.GetLastMode()] = 1, this.SetTimerMode(this.GetTimerModeStack()[this.GetLastMode()]), this.AddStage("Start GotoView", u, !1);
                          return
                      }
                      if (this.GetLastMode() < 0) return;
                      this.SetTimerMode(this.GetTimerModeStack()[this.GetLastMode()]);
                      if (t != "View Cache Ready" || this.GetTimerMode() != 1 && this.GetTimerMode() != 2)
                          if (t != "Call GetViewLayout" || this.GetTimerMode() != 1 && this.GetTimerMode() != 2)
                              if (t != "Have Layout" || this.GetTimerMode() != 1 && this.GetTimerMode() != 2 || !!this.IsToggleListRowCount())
                                  if (t != "Processed Layout" || this.GetTimerMode() != 1 && this.GetTimerMode() != 2)
                                      if (t == "Have Object Info" && this.GetTimerMode() == 1) this.AddStage("Have Object Info", u, !0);
                                      else if (t != "Processed Object Info" || this.GetTimerMode() != 1 && this.GetTimerMode() != 2)
                          if (t != "Objects Initialized" || this.GetTimerMode() != 1 && this.GetTimerMode() != 2)
                              if (t != "Finished Populate" || this.GetTimerMode() != 1 && this.GetTimerMode() != 2) {
                                  if (t == "Reset Busy State" && this.GetTimerMode() == 1) {
                                      this.AddStage("Reset Busy State", u, !0), r = r + "\r\nGotoView:	" + "[" + this.GetViewName() + "]";
                                      if (SiebelApp.S_App.GetActiveView()) {
                                          var a = SiebelApp.S_App.GetActiveView().IsCacheable() == 1 ? "Cacheable" : "Non-Cacheable";
                                          r = r + "	" + a + "	" + "UserActionID:" + "	\r\n"
                                      } else r = r + "UserActionID:" + "	\r\n";
                                      this.SetViewName(""), s.call(this)
                                  }
                              } else this.AddStage("Finished Populate", u, !0);
                      else this.AddStage("Objects Initialized", u, !0), this.SetViewName(e);
                      else this.AddStage("Processed Object Info", u, !0);
                      else this.AddStage("Processed Layout", u, !0);
                      else this
                          .AddStage("Have Layout", u, !0);
                      else this.AddStage("Call GetViewLayout", u, !0);
                      else this.AddStage("View Cache Ready", u, !0)
                  }
              }
      }, i.prototype.TimeInvokeMethod = function(e, t, n, i) {
          var s = 0;
          n.indexOf("PositionOnRow") !== -1 && (n = "PositionOnRow");
          var o = this.GetTimerHook();
          for (var u in o)
              if (o.hasOwnProperty(u)) {
                  var a = o[u];
                  if (a === "InvokeMethod:" + n || this.GetTimerMode() == 2 && i == "Reset Busy State") {
                      var f = +(new Date);
                      if (i == "Begin InvokeMethod") {
                          this.SetMethodName(n), n === "ColumnsDisplayed" && this.SetColumnsDisplayed(!0), n === "ToggleListRowCount" && this.SetToggleListRowCount(!0);
                          if (this.GetTimerMode() == 2) return;
                          this.GetLastMode() < 0 ? (this.SetLastStage(0), this.SetStartStage(1)) : (this.SetLastStage(this.GetLastStage() + 1), this.SetStartStage(this.GetLastStage())), this.SetLastMode(this.GetLastMode() + 1), this.GetTimerModeStack()[this.GetLastMode()] = 2, this.SetTimerMode(this.GetTimerModeStack()[this.GetLastMode()]), this.AddStage("Begin InvokeMethod", f, !1);
                          return
                      }
                      if (this.GetLastMode() < 0) return;
                      this.SetTimerMode(this.GetTimerModeStack()[this.GetLastMode()]);
                      if (i == "Finished InvokeMethod") this.AddStage("Finished InvokeMethod", f, !0);
                      else if (i == "Reset Busy State" && this.GetTimerMode() == 2) {
                          this.AddStage("Reset Busy State", f, !0), r = r + "\r\nInvokeMethod:	" + "[" + this.GetMethodName() + "]" + "	" + "UserActionID:" + "	\r\n";
                          if (this.GetViewRefresh()) return;
                          this.SetStartFindStage(0);
                          for (s = this.GetStartStage(); s <= this.GetLastStage(); s++) this.ShowStepTime(this.m_ptimerStages[s], this.m_ptimerStages[s - 1]), this.SetStartFindStage(this.GetStartFindStage() + 1);
                          this.SetStartFindStage(0), r += "Total Time:	";
                          var l = this.m_ptimeValues[this.GetLastStage()] - this.m_ptimeValues[0];
                          r = r + l.toString() + "\r\n", c.call(this), this.SetLastMode(-1), this.SetTimerMode(-1), this.m_ptimeValues = {}, this.m_ptimerStages = {}
                      }
                  }
              }
      }, i.prototype.TimePopupApplet = function(e, t) {
          var n = this.GetTimerHook();
          for (var i in n)
              if (n.hasOwnProperty(i)) {
                  var s = n[i];
                  if (s === "PopupApplet") {
                      var o = +(new Date);
                      if (t == "Start PopupApplet") {
                          if (this.GetLastMode() >= 0) {
                              if (this.GetTimerModeStack()[this.GetLastMode()] == 3) return;
                              this.GetTimerModeStack()[this.GetLastMode()] == 2 && this.SetInvokeAndPopup(!0)
                          }
                          this.GetLastMode() < 0 ? (this.SetLastStage(0), this.SetStartStage(1)) : (this.SetLastStage(this.GetLastStage() + 1), this.SetStartStage(this.GetLastStage())), this.SetLastMode(this.GetLastMode() + 1), this.GetTimerModeStack()[this.GetLastMode()] = 3, this.SetTimerMode(this.GetTimerModeStack()[this.GetLastMode()]), this.AddStage("Start PopupApplet", o, !1);
                          return
                      }
                      if (this.GetLastMode() < 0) return;
                      this.SetTimerMode(this.GetTimerModeStack()[this.GetLastMode()]), t == "Have Object Info" && this.GetTimerMode() == 3 && !this.GetInvokeAndPopup() && this.AddStage("Have Object Info", o, !0), t == "Call GetLayout" && this.GetTimerMode() == 3 && this.AddStage("Call GetLayout", o, !0), t == "Process Object Info Start" && this.GetTimerMode() == 3 && this.AddStage("Process Object Info Start", o, !0), t == "Processed Object Info" && this.GetTimerMode() == 3 && this.AddStage("Processed Object Info", o, !0), t == "Have Layout" && this.GetTimerMode() == 3 && !this.IsColumnsDisplayed() && this.AddStage("Have Layout", o, !0), t == "Processed Layout" && this.GetTimerMode() == 3 && this.AddStage("Processed Layout", o, !0), t == "Objects Initialized" && this.GetTimerMode() == 3 && (this.GetPopupAppletName() || this.SetPopupAppletName(e), this.AddStage("Objects Initialized", o, !0)), t == "Finished Populate" && this.GetTimerMode() == 3 && this.AddStage("Finished Populate", o, !0), t == "Reset Busy State" && this.GetTimerMode() == 3 && (this.AddStage("Reset Busy State", o, !0), this.GetPopupAppletName() ? r = r + "\r\nPopupApplet:	" + "[" + this.GetPopupAppletName() + "]" + "	" + "UserActionID:" + "	\r\n" : r = r + "\r\nPopupApplet:	" + "[" + "Columns Displayed Popup Applet (SWE)" + "]" + "	" + "UserActionID:" + "	\r\n", this.GetInvokeAndPopup() ? (f.call(this), this.SetColumnsDisplayed(!1)) : l.call(this), c.call(this), this.SetPopupAppletName(""))
                  }
              } return
      }, i.prototype.TimeServerNotification = function(e) {
          this.SetTimerMode(this.GetTimerModeStack()[this.GetLastMode()]);
          if (this.GetTimerMode() == 2) {
              var t = +(new Date);
              e == "Received Server Notifications" ? this.AddStage("Received Server Notifications", t, !0) : e == "Processed Server Notifications" && this.AddStage("Processed Server Notifications", t, !0)
          }
          return
      }, i.prototype.TimePopulateApplet = function(e, t) {
          this.SetTimerMode(this.GetTimerModeStack()[this.GetLastMode()]);
          if (this.GetTimerMode() == 2) {
              var n = +(new Date);
              t == "BeginPopulateApplet" ? this.AddStage(t + ": [" + e + "]", n, !0) : t == "Finished Populate Applet" && this.AddStage(t + ": [" + e + "]", n, !0)
          }
          return
      }, i.prototype.ShowStepTime = function(e, t) {
          var n = this.FindStageIndex(t),
              i = this.FindStageIndex(e);
          if (n < 0 || i < 0) return;
          r = r + this.m_ptimerStages[i] + ":" + "	";
          var s = this.m_ptimeValues[i] - this.m_ptimeValues[n];
          r = r + s.toString() + "\r\n"
      }, i.prototype.FindStageIndex = function(t) {
          var n = 0,
              r = this.GetLastStage() + 1;
          if (e.IsEmpty(t) || r == 0) return -1;
          for (n = this.GetStartFindStage(); n < r; n++)
              if (t == this.m_ptimerStages[n]) return n;
          return -1
      }, i.prototype.AddStage = function(e, t, n) {
          n && this.SetLastStage(this.GetLastStage() + 1), this.m_ptimeValues[this.GetLastStage()] = t, this.m_ptimerStages[this.GetLastStage()] = e
      }, i.prototype.CreateTimerHookMap = function(e) {
          var t = !0,
              n = null,
              r = null;
          for (t = !0;
              (n = e.EnumProperties(t)) != null; t = !1) r = e.GetProperty(n), this.GetTimerHook()[n] = r;
          return
      }, i.prototype.ShowTotal = function() {
          if (this.GetTimerMode() > -1) {
              r += "Total Time:	";
              var e = this.m_ptimeValues[this.GetLastStage()] - this.m_ptimeValues[0];
              r = r + e.toString() + "\r\n", this.SetLastMode(-1), this.SetTimerMode(-1), c.call(this), this.m_ptimeValues = {}, this.m_ptimerStages = {}, this.SetToggleListRowCount(!1)
          }
      }, i.prototype.SetSessionID = function(e) {
          r = r + "SessionID:	" + SiebelApp.S_App.GetSessionId() + "\r\n"
      }, i.prototype.StartTime = function(e) {
          if (SiebelApp.S_App.GetEnablePerfHooks()) {
              var t = (new Date).getTime();
              d.call(this, e, t)
          }
      }, i.prototype.EndTime = function(e) {
          if (SiebelApp.S_App.GetEnablePerfHooks()) {
              var t, n, r;
              t = v.call(this, e), n = (new Date).getTime(), r = n - t, delete this.m_mapTimer[e], SiebelJS.Log(" . " + e + "..." + r + "...milli seconds ")
          }
      }, i
  }()), typeof SiebelAppFacade.ProxyFactory == "undefined" && (SiebelJS.Namespace("SiebelAppFacade.ProxyFactory"), SiebelAppFacade
      .ProxyFactory = function() {
          function a() {}
          var e = SiebelJS.Dependency("SiebelApp.Constants"),
              t = SiebelJS.Dependency("SiebelApp.Utils"),
              n = e.get("SWE_PST_NEW_APPLET"),
              r = e.get("SWE_PST_NEW_LIST_APPLET"),
              i = e.get("SWE_PST_NEW_CALENDARAPPLET"),
              s = e.get("SWE_PST_NEW_PLAYBARAPPLET"),
              o = e.get("SWE_PST_NEW_TREEAPPLET"),
              u = e.get("SWE_PST_NEW_VIEW");
          return a.prototype.MakeObject = function(e) {
              var t = null;
              switch (e) {
                  case n:
                  case i:
                  case o:
                      t = new SiebelApp.S_App.Applet;
                      break;
                  case r:
                      t = new SiebelApp.S_App.ListApplet;
                      break;
                  case s:
                      t = new SiebelApp.S_App.Playbarapplet;
                      break;
                  case u:
                      t = new SiebelApp.S_App.View;
                      break;
                  default:
                      SiebelJS.Debug("[ProxyFactory] - No Constructor for [" + e + "]")
              }
              return t
          }, new a
      }()), typeof SiebelAppFacade.BasePM == "undefined" && (SiebelJS.Namespace("SiebelAppFacade.BasePM"), SiebelAppFacade.BasePM = function() {
      function m(e) {
          var t = e.GetName() + "_PM";
          this.GetPMName = function() {
              return t
          }, this.GetObjName = function() {
              return e.GetName()
          }, u[t] = e, a[t] = {}, f[t] = {}, l[t] = {}, c[t] = {}, h[t] = {}, p[t] = {}, d[t] = {}, v[t] = [];
          var n;
          this.GetRenderer = function() {
              return n
          }, this.SetRenderer = function(e) {
              n = e
          };
          var r = {};
          this.GetStateUIMap = function() {
              return r
          }, this.ResetStateUIMap = function() {
              r = {}
          }
      }

      function g(e, t, n) {
          this[r] = e || !1, this[i] = t || !1, this[s] = n || null
      }

      function y(e, t, n, r) {
          if (r) return r.ReturnValue
      }

      function b() {
          var e = arguments[arguments.length - 1];
          return e ? e.ReturnValue : !0
      }

      function w() {}

      function E(e, t, n, r) {
          n[e] = function() {
              r.ExecuteMethod.apply(r, ["HandleUIStateChange", e].concat(arguments)) && t.apply(n, arguments)
          }
      }

      function S(e, t, n, r) {
          for (var i = 0, s = e.length; i < s; i++) e[i][0].call(e[i][1], t, n.Clone(), r.Clone())
      }

      function x(e, t) {
          var n = a[this.GetPMName()],
              r = n[e] || {};
          if (r && r.onChange) {
              var i = r.onChange;
              for (var s = 0, o = i.length; s < o; s++) i[s].method.call(i[s].scope || this, e, t)
          }
      }

      function T(e, t, n, r) {
          var o = f[this.GetPMName()][e],
              a, l, c = !1,
              h = function() {
                  var e = arguments[arguments.length - 1],
                      o = !(e && e instanceof g);
                  return o && (e = new g), e[s] = N.call(this, a, l, arguments, e, o, c ? 0 : 1), r ? N.call(this, t, n, arguments, e[s], o, 0) : e[i] !== !0 && N.call(this, t, n, arguments, e, o, 1), e[s]
              };
          if (o.core) {
              var p = u[this.GetPMName()];
              a = p[e], l = p, o.first || (c = o.first = !0), p[e] = h
          } else a = o.ref, l = o.scope, o.ref = h
      }

      function N(e, t, n, r, i, s) {
          var o = Array.prototype.slice.call(n);
          if (i) e.length > o.length + s && (o.length = e.length - s), o.push(r);
          else {
              var u = o[o.length - 1];
              u && u instanceof g && e.length > n.length - 1 + s && (o.length = o.length - 1, o.length = e.length - s, o.push(r))
          }
          return e.apply(t, o)
      }

      function C(e, t) {
          var n = [];
          for (var r = 0; r < e.length; r++) n.push(e[r]);
          return n.push(t), n
      }

      function k(e, t, n) {
          var r = f[this.GetPMName()][e];
          n.scope = n.scope || this;
          var i, s;
          if (r.core) {
              var o = u[this.GetPMName()];
              i = o[e], s = o, o[e] = function() {
                  n.when.call(n.scope) && t.apply(n.scope, arguments);
                  var e = i.apply(s, arguments);
                  return e
              }
          } else i = r.ref, s = r.scope, r.ref = function() {
              n.when.call(n.scope) && t.apply(n.scope, arguments);
              var e = i.apply(s, arguments);
              return e
          }
      }

      function L(e, t, n, r) {
          var o = f[this.GetPMName()][e],
              a, l, c = !1;
          n.scope = n.scope || this;
          var h = function() {
              var e = arguments[arguments.length - 1],
                  o = !(e && e instanceof g);
              return o && (e = new g), e[s] = N.call(this, a, l, arguments, e, o, c ? 0 : 1), r && n.when.call(n.scope) ? N.call(this, t, n.scope, arguments, e[s], o, 0) : e[i] !== !0 && n.when.call(n.scope) && N.call(this, t, n.scope, arguments, e, o, 1), e[s]
          };
          if (o.core) {
              var p = u[this.GetPMName()];
              a = p[e], l = p, o.first || (c = o.first = !0), p[e] = h
          } else a = o.ref, l = o.scope, o.ref = h
      }

      function A(e, t, n) {
          var o = f[this.GetPMName()][e],
              a = !1,
              l, c, h = function() {
                  var e = arguments[arguments.length - 1],
                      o = !(e && e instanceof g);
                  return o && (e = new g), N.call(this, t, n, arguments, e, o, 1), e[r] === !0 ? e[i] = !0 : e[s] = N.call(this, l, c, arguments, e, o, a ? 0 : 1), e[s]
              };
          if (o.core) {
              var p = u[this.GetPMName()];
              l = p[e], c = p, p[e] = h, o.first || (a = o.first = !0)
          } else l = o.ref, c = o.scope, o.ref = h
      }

      function O(e, t, n) {
          var r, i, s = f[this.GetPMName()][e];
          if (s.core) {
              var o = u[this.GetPMName()];
              r = o[e], i = o, o[e] = function() {
                  return t.apply(i, arguments)
              }
          } else r = s.ref, i = s.scope, s.ref = function() {
              return t.apply(i, arguments)
          }
      }

      function M() {
          var e = new Date,
              n = CCFMiscUtil_CreatePropSet(),
              r = CCFMiscUtil_CreatePropSet();
          n.SetProperty(t.get("SWSE_CMD_STR"), t.get("SWSE_CANCEL_QUERY")), n.SetProperty(t.get("SWSE_CANCEL_ID"), SiebelApp.S_App.GetCancelId());
          var i = {};
          i.async = !0, i.scope = this, i.args = [], i.args.push(""), i.args.push(n), SiebelApp.S_App.CallServer(n, r, !0, i)
      }
      var e = SiebelJS.Dependency("SiebelApp.Utils"),
          t = SiebelJS.Dependency("SiebelApp.Constants"),
          n = t.get("SWE_PROP_BC_OPERATION"),
          r = t.get("SWE_EXTN_CANCEL_ORIG_OP"),
          i = t.get("SWE_EXTN_CANCEL_POST_OP"),
          s = t.get("SWE_EXTN_RETVAL"),
          o = t.get("SWE_EXTN_STOP_PROP_OP"),
          u = {},
          a = {},
          f = {},
          l = {},
          c = {},
          h = {},
          p = {},
          d = {},
          v = {};
      return m.prototype.Init = function() {
          var e = u[this.GetPMName()],
              t = null,
              n = 0,
              r = 0,
              i = null,
              s = null,
              o = null;
          if (e) {
              t = e.GetPropArray ? e.GetPropArray() : [], i = t.UIStateRequestProps ? t.UIStateRequestProps : [];
              for (n = 0, r = t.length; n < r; n++) this.AddProperty(t[n], null, {
                  core: !0,
                  stateProp: i.indexOf(t[n]) > -1
              });
              t = e.GetMethodArray ? e.GetMethodArray() : [], s = t.UIStateRequestMethods ? t.UIStateRequestMethods : [], o = t.StateChangeHandlerMethods ? t.StateChangeHandlerMethods : [];
              for (n = 0, r = t.length; n < r; n++) this.AddMethod(t[n], null, {
                  core: !0,
                  stateMethod: s.indexOf(t[n]) > -1,
                  stateHandler: o.indexOf(t[n]) > -1
              });
              t = null
          }
          this.AddMethod("PostExecute", this.HandlePreExecute, {
              sequence: !0,
              scope: this
          }), this.AddMethod("PostExecute", this.HandlePostExecute, {
              sequence: !1,
              scope: this
          }), this.AddMethod("AddLocalString", function(e, t) {
              return SiebelApp.S_App.LocaleObject.AddLocalString(e, t), t
          }), this.AddMethod("HandlePreGetUIState", y, {
              scope: this
          }), this.AddMethod("HandleUIStateChange", b, {
              scope: this
          }), this.AddMethod("UpdateUIState", w, {
              scope: this
          })
      }, m.prototype.DecorateEventHandlers = function() {
          var e = u[this.GetPMName()],
              t = v[this.GetPMName()],
              n, r = t.length,
              i;
          for (i = 0; i < r; i++) n = t[i], E.call(this, n, e[n], e, this)
      }, m.prototype.Setup = function(n) {
          var r = u[this.GetPMName()];
          if (r instanceof SiebelApp.S_App.Applet || r === SiebelApp.S_App.CommToolbar) {
              var v = n.GetChildByType("apm");
              if (!e.IsEmpty(v)) {
                  var m;
                  if (v) {
                      m = v.EnumProperties(!0);
                      do this.AddProperty(m, v.GetProperty(m)); while (m = v.EnumProperties(!1))
                  }
                  var g = v.GetProperty("Max List Columns Tablet");
                  g !== undefined && g !== null && this.SetProperty("maxListColTablet", g);
                  var y = v.GetProperty("Max List Columns Phone");
                  y !== undefined && y !== null && this.SetProperty("maxListColPhone", y);
                  var b = v.GetProperty("Default Applet Display Mode");
                  b !== undefined && b !== null && this.SetProperty("defaultAppletDisplayMode", b.toString().toLowerCase());
                  var w = v.GetProperty("EnableDragAndDropInList");
                  w !== undefined && w !== null && e.IsTrue(w) && this.SetProperty("enableDragAndDropInList", !0)
              }
          } else {
              var i = "",
                  s = n.GetProperty(t.get("SWE_UIDEF_PR_CTR"));
              if (s) {
                  s = s.split(".");
                  if (s[0]) {
                      i = window[s[0]];
                      for (var o = 1, a = s.length; o < a && i; o++) i = i[s[o]]
                  }
              } else {
                  var f = n.GetProperty(t.get("SWE_PROP_OUI_PRENDERER"));
                  s = SiebelApp.S_App.GetConstructorFromKey(f) + ".";
                  var l = n.GetProperty("SWE_OUI_RENDERER"),
                      c = "",
                      h = 0,
                      p = s.indexOf(".");
                  while (p != -1) {
                      var d = s.substring(h, p);
                      c = c == "" ? window[d] : c[d], h = p + 1, p = s.indexOf(".", h)
                  }
                  i = c || SiebelAppFacade[l] || SiebelAppFacade.PhysicalRenderer
              }
              this.SetRenderer(new i(this))
          }
      }, m.prototype.Show = function() {
          if (!(u[this.GetPMName()] instanceof SiebelApp.S_App.Applet)) {
              var e = this.GetRenderer();
              e.ShowUI(), e.BindEvents(), e.BindData()
          }
      }, m.prototype.HandlePreExecute = function(e, t, n) {
          if (!p[this.GetPMName()]) return;
          var r = p[this.GetPMName()].ALL || [];
          S.call(this, r, e, t, n), r = p[this.GetPMName()].NOT || [], S.call(this, r, e, t, n), r = p[this.GetPMName()][e] || [], S.call(this, r, e, t, n)
      }, m.prototype.HandlePostExecute = function(e, t, n) {
          if (!d[this.GetPMName()]) return;
          var r = d[this.GetPMName()].ALL || [];
          S.call(this, r, e, t, n), r = d[this.GetPMName()].NOT || [], S.call(this, r, e, t, n), r = d[this.GetPMName()][e] || [], S.call(this, r, e, t, n)
      }, m.prototype.HandleNotify = function(e) {
          var t = e.GetProperty(n),
              r = c[this.GetPMName()][t] || [];
          for (var i = 0, s = r.length; i < s; i++) r[i][0].call(r[i][1], e.Clone())
      }, m.prototype.HandleResponsePS = function(e) {
          var t = e.GetChildCount(),
              n = h[this.GetPMName()] || {};
          for (var r = 0; r < t; r++) {
              var i = e.GetChild(r),
                  s = i.GetType();
              if (n[s]) {
                  var o = n[s];
                  for (var u = 0, a = o.length; u < a; u++) o[u][0].call(o[u][1], i.Clone())
              }
          }
      }, m.prototype.OnControlEvent = function(e) {
          var n = !1,
              i = null,
              s = [],
              a = arguments.length,
              f = {},
              c = !1,
              h = l[this.GetPMName()];
          for (var p = 1; p < a; p++) !arguments[p] || arguments[p].async !== !0 && arguments[p].async !== !1 ? s.push(arguments[p]) : i = arguments[p];
          var d, v = u[this.GetPMName()],
              m = {},
              g = !1;
          i && (i.async === !0 || i.async === !1) && (g = !0, m.scope = this, m.target = i.target, typeof i.async != "boolean" ? m.async = !0 : m.async = i.async, m.selfbusy = i.selfbusy || !1, m.mask = i.mask || !1, m.cb = function() {
              var e = Array.prototype.slice.call(arguments);
              typeof i.cb == "function" && i.cb.apply(i.scope || null, e)
          });
          if (h && h[e]) {
              var y = h[e] || [],
                  b = y.length;
              for (var p = b - 1; p >= 0; p--) {
                  if (!c || y[p].core && !f[r]) typeof y[p].handler == "function" ? (s.push(m), s.push(f), n = y[p].handler.apply(this, s)) : typeof y[p].handler == "string" && (s.push(f), n = this.ExecuteMethod.apply(this, [y[p].handler].concat(s)));
                  if (f[r] && f[o]) return n;
                  f[o] && (c = !0)
              }
              if (f[r]) return n
          }
          switch (e) {
              case t.get("PHYEVENT_INVOKE_CONTROL"):
                  g || (m.async = !0);
                  if (s[0] === "NewQuery" || s[0] === "UndoQuery" || s[0] === "GotoNextSet" || s[0] === "GotoPreviousSet") m.async = !1;
                  s.push(m), n = v.InvokeControlMethod.apply(v, s);
                  break;
              case t.get("PHYEVENT_CONTROL_BLUR"):
                  n = v.OnBlur.apply(v, s);
                  break;
              case t.get("PHYEVENT_CONTROL_FOCUS"):
                  n = v.OnFocus.apply(v, s);
                  break;
              case t.get("PHYEVENT_APPLET_FOCUS"):
                  d = CCFMiscUtil_CreatePropSet(), n = v.InvokeMethod("OnFocus", d);
                  break;
              case t.get("PHYEVENT_INVOKE_DETAIL_POPUP"):
              case t.get("PHYEVENT_INVOKE_EFFDAT"):
              case t.get("PHYEVENT_INVOKE_PICK"):
              case t.get("PHYEVENT_INVOKE_CURRENCY"):
                  if (!this.ExecuteMethod("hasRecords") && !this.Get("IsInQueryMode")) return !1;
              case t.get("PHYEVENT_INVOKE_COMBO"):
              case t.get("PHYEVENT_INVOKE_MVG"):
                  if (e === t.get("PHYEVENT_INVOKE_COMBO") && !this.ExecuteMethod("CanUpdate", s[0].GetName())) return !1;
                  v.SetActiveControl.apply(v, s), d = CCFMiscUtil_CreatePropSet(), n = v.InvokeControlMethod("EditPopup", d, g);
                  break;
              case t.get("PHYEVENT_CANCEL_QRY_POPUP"):
                  M.call(this);
                  break;
              case t.get("PHYEVENT_DRILLDOWN_FORM"):
                  v.SetActiveControl.apply(v, s), d = CCFMiscUtil_CreatePropSet(), d.SetProperty(t.get("SWE_FIELD_STR"), s[0].GetInputName()), g ? n = v.InvokeControlMethod("DrillDown", d, m) : n = v.InvokeControlMethod("DrillDown", d);
                  break;
              case t.get("PHYEVENT_INVOKE_TOGGLE"):
                  d = CCFMiscUtil_CreatePropSet(), d.SetProperty(t.get("SWE_SEQ_STR"), s[0]), n = v.InvokeControlMethod("ToggleTo", d);
                  break;
              case t.get("PHYEVENT_ENTER_KEY_PRESS"):
                  n = !1;
                  if (this.Get("isControlPopupOpen")) this.SetProperty("isControlPopupOpen", !1), n = !0;
                  else {
                      var w = s[0].GetDefaultMethod();
                      w && v.CanInvokeMethod(w) && (d = CCFMiscUtil_CreatePropSet(), v.InvokeMethod(w, d), n = !0)
                  }
                  break;
              case t.get("PHYEVENT_ESCAPE_KEY_PRESS"):
              case t.get("PHYEVENT_TAB_KEY_PRESS"):
                  this.Get("isControlPopupOpen") && this.SetProperty("isControlPopupOpen", !1)
          }
          return n
      }, m.prototype.EndLife = function() {
          var e = this.GetRenderer();
          e && e.EndLife && e.EndLife(), e = null, this.SetRenderer(e);
          var t = this.GetPMName();
          delete a[t], delete f[t], delete l[t], delete c[t], delete h[t], delete p[t], delete d[t], delete u[t], delete v[t]
      }, m.prototype.AddProperty = function(t, n, r) {
          var i = a[this.GetPMName()];
          r = r || {};
          if (typeof t == "string" && e.Trim(t) !== "") {
              var s = i[t] || {};
              if (s && !s.core) return i[t] = {
                  value: n,
                  core: r.core,
                  stateProp: r.stateProp
              }, !0
          }
          return !1
      }, m.prototype.SetProperty = function(t, n, r) {
          var i = a[this.GetPMName()];
          if (typeof t == "string" && e.Trim(t) !== "") {
              var s = i[t];
              return s ? (i[t].value = n, x.call(this, t, n), !0) : this.AddProperty(t, n, r)
          }
          return !1
      }, m.prototype.Get = function(e, t) {
          var n = u[this.GetPMName()] || {},
              r = a[this.GetPMName()][e] || {},
              i = null;
          return r.stateProp && t && t.getDiff ? i = this.ExecuteMethod("HandlePreGetUIState", e, [t], this.Get) : r.core === !0 ? typeof n[e] != "undefined" && (i = n[e].call(n)) : i = typeof r.value == "function" ? r.value.call(this) : r.value, i
      }, m.prototype.AddMethod = function(t, n, r) {
          var i = this.GetPMName(),
              s = f[i],
              r = r || {},
              o = u[i],
              a = !0;
          return typeof t == "string" && e.Trim(t) !== "" ? (r.stateHandler && v[i].push(t), r.core === !0 && (s[t] || typeof o[t] == "function" && (s[t] = {
                  core: !0,
                  stateMethod: r.stateMethod
              })), typeof n == "function" ? s[t] ? r.override ? O.call(this, t, n, r.scope) : r.sequence === !0 ? A.call(this, t, n, r.scope) : r.sequence === !1 && T.call(this, t, n, r.scope, !1) : s[t] = {
                  ref: n,
                  scope: r.scope || this,
                  stateMethod: r.stateMethod
              } :
              a = !1) : a = !1, a
      }, m.prototype.ExecuteMethod = function(e) {
          var t = Array.prototype.slice.call(arguments);
          t.shift();
          var n = f[this.GetPMName()][e];
          if (n) {
              var r = t[t.length - 1],
                  i = r && r.getDiff;
              if (n.stateMethod && i) return this.ExecuteMethod("HandlePreGetUIState", e, t, this.ExecuteMethod);
              if (n.core === !0) {
                  var s = u[this.GetPMName()];
                  return s[e].apply(s, t)
              }
              return n.ref ? n.ref.apply(n.scope, t) : (SiebelJS.Log("Can't find method - [ " + e + " ]"), null)
          }
          return SiebelJS.Log("Can't find method - [ " + e + " ]"), null
      }, m.prototype.AttachEventHandler = function(e, t, n) {
          var r = l[this.GetPMName()],
              i = !1;
          return n = n || {}, r[e] = r[e] || [], typeof e == "string" && e !== "" && (typeof t == "function" || typeof t == "string") && (r[e].push({
              handler: t,
              core: n.core ? !0 : !1
          }), i = !0), i
      }, m.prototype.AddValidator = function(e, t) {
          this.AttachEventHandler(e, function() {
              t.apply(this, arguments) || (arguments[arguments.length - 1][r] = !0, arguments[arguments.length - 1][o] = !0)
          })
      }, m.prototype.AttachNotificationHandler = function(t, n, r) {
          var i = c[this.GetPMName()],
              s = !1;
          if (typeof t == "string" && e.Trim(t) !== "" && typeof n == "function") {
              r = r || {};
              var o = i[t] || [],
                  u = r.core === !0 ? 0 : -1;
              o.splice(u, 0, [n, r.scope || this]), i[t] = o, s = !0
          }
          return s
      }, m.prototype.AttachPSHandler = function(t, n, r) {
          var i = h[this.GetPMName()],
              s = !1;
          if (typeof t == "string" && e.Trim(t) !== "" && typeof n == "function") {
              r = r || {};
              var o = i[t] || [],
                  u = r.core === !0 ? 0 : -1;
              o.splice(u, 0, [n, r.scope || this]), i[t] = o, s = !0
          }
          return s
      }, m.prototype.AttachPreProxyExecuteBinding = function(t, n, r) {
          var i = p[this.GetPMName()],
              s = !1;
          if (typeof t == "string" && e.Trim(t) !== "" && typeof n == "function") {
              r = r || {};
              var o = i[t] || [],
                  u = r.core === !0 ? 0 : -1;
              o.splice(u, 0, [n, r.scope || this]), i[t] = o, s = !0
          }
          return s
      }, m.prototype.AttachPostProxyExecuteBinding = function(t, n, r) {
          var i = d[this.GetPMName()],
              s = !1;
          if (typeof t == "string" && e.Trim(t) !== "" && typeof n == "function") {
              r = r || {};
              var o = i[t] || [],
                  u = r.core === !0 ? 0 : -1;
              o.splice(u, 0, [n, r.scope || this]), i[t] = o, s = !0
          }
          return s
      }, m.prototype.AttachPMBinding = function(t, n, r) {
          var i = f[this.GetPMName()],
              s = a[this.GetPMName()],
              o = !1;
          r = r || {
              scope: this
          };
          if (typeof t == "string" && e.Trim(t) !== "" && typeof n == "function")
              if (i[t]) typeof r.when == "function" ? L.call(this, t, n, r, !0) : T.call(this, t, n, r.scope || this, !0);
              else if (s[t]) {
              var u = s[t];
              u.onChange = u.onChange || [], u.onChange.push({
                  method: n,
                  scope: r.scope || this
              })
          } else o = !1;
          return o
      }, m
  }()), typeof SiebelAppFacade.PresentationModel == "undefined" && (SiebelJS.Namespace("SiebelAppFacade.PresentationModel"), SiebelAppFacade.PresentationModel = function() {
      function w() {
          SiebelAppFacade.PresentationModel.superclass.constructor.apply(this, arguments), this.retryWaitForObjInfoProcessing = 0, this.GetStateUIMap().CtrlInfo = {}, this.GetStateUIMap.QueryMode = !1
      }

      function E(e, t, n, r) {
          if (!r[y]) {
              var i = t[t.length - 1],
                  s = null;
              if (i && i.getDiff)
                  if (e === "GetControls") s = S.call(this, i);
                  else {
                      var o = Array.prototype.slice.call(t);
                      o.pop();
                      var u = this.GetStateUIMap(),
                          a = n.apply(this, [e].concat(o));
                      if (!u.hasOwnProperty(e) || u[e] !== a) s = a
                  }
              else s = n.apply(this, [e].concat(t));
              r[b] = s, r[y] = !0
          }
          return r[b]
      }

      function S(e) {
          var t = {
                  CanUpdate: "CanUpdate",
                  CanInvokeMethod: "CanInvokeMethod",
                  CanNavigate: "IsLinkOnCtrl"
              },
              n = e.stateName,
              r = e.index || 0,
              i = this.GetStateUIMap().CtrlInfo,
              s = t[n],
              o = e.CtrlMap || this.Get("GetControls"),
              u, a = {},
              f, l;
          if (i && this.GetStateUIMap().QueryMode === this.Get("IsInQueryMode")) switch (n) {
              case g:
                  u = x.call(this, o, i, e);
                  break;
              case "CanUpdate":
                  for (l in o)
                      if (i[l]) {
                          f = i[l][i[l].OneEl === !0 ? 0 : r];
                          if (!f || f[m] !== this.ExecuteMethod(s, l)) a[l] = o[l]
                      } else a[l] = o[l];
                  u = a;
                  break;
              case "CanInvokeMethod":
                  for (l in o)
                      if (o[l].GetMethodName())
                          if (i[l]) {
                              f = i[l][i[l].OneEl === !0 ? 0 : r];
                              if (!f || f[v] !== this.ExecuteMethod(s, o[l].GetMethodName())) a[l] = o[l]
                          } else a[l] = o[l];
                  u = a;
                  break;
              case "CanNavigate":
                  for (l in o)
                      if (i[l]) {
                          f = i[l][i[l].OneEl === !0 ? 0 : r];
                          if (!f || f[n] !== this.ExecuteMethod(s, l)) a[l] = o[l]
                      } else a[l] = o[l];
              default:
                  u = o
          } else u = o;
          return u
      }

      function x(e, t, n) {
          var r = {},
              i, s;
          for (var o in e)
              if (t[o]) {
                  s = t[o][t[o].OneEl === !0 || !n.index ? 0 : n.index], i = s ? s[n.stateName] : "";
                  if (!s || i !== this.ExecuteMethod("GetUIFieldValue", e[o], n.index) || i !== undefined && s.CanNavigate !== undefined && s.CanNavigate !== this.ExecuteMethod("IsLinkOnCtrl", o)) r[o] = e[o]
              } else r[o] = e[o];
          return r
      }

      function T(e, t, n) {
          var r = !0,
              i = this.GetStateUIMap();
          if (e === "FieldChange") {
              var s, o = t[0].GetName(),
                  u = i.CtrlInfo;
              u[o] && (s = u[o][u[o].OneEl === !0 ? 0 : this.Get("GetSelection")], s && s[g] === t[1] && s.CanNavigate === this.ExecuteMethod("IsLinkOnCtrl", o) && (r = !1))
          } else e === "OnCommitStateChange" && i.hasOwnProperty("CommitPending") && i.CommitPending === t[0] && (r = !1);
          return n[b] = r, n[y] = !0, n[b]
      }

      function N(e, t, n) {
          var r = this.GetStateUIMap();
          if (e === g || e === v || e === "CanNavigate" || e === m) {
              var i = t.index,
                  s = t.ctrlName;
              r.CtrlInfo[[s]] || (r.CtrlInfo[[s]] = {}), r.CtrlInfo[s][i] || (r.CtrlInfo[s][i] = {}), r.CtrlInfo[s][i][e] = t.stateValue, r.CtrlInfo[s].OneEl = t.OneEl, r.QueryMode = this.Get("IsInQueryMode")
          } else e === "CtrlEndLife" ? delete r.CtrlInfo[t.ctrlName] : e === "Init" ? (n[b] || this.ResetStateUIMap(), this.GetStateUIMap().CtrlInfo = {}) : t !== null && (r[e] = t.stateValue || t);
          n[y] = !0
      }

      function C() {
          var n = this.ExecuteMethod("GetWSStartRowNum"),
              r = Number(this.Get("GetRowListRowCount")),
              i = r > 1 ? t.get("SWE_ROW_COUNTER_LIST") : t.get("SWE_ROW_COUNTER_FORM"),
              s = [],
              o;
          return n === 0 ? o = t.get("SWE_ROW_COUNTER_NO_RECORDS") : n > 0 ? (s.push(n), r > 1 && s.push(Number(this.Get("GetWSEndRowNum"))), s.push(Number(this.Get("GetNumRows"))), o = i + (this.Get("IsNumRowsKnown") ? t.get("SWE_ROW_COUNTER_TOTAL_KNOWN") : t.get("SWE_ROW_COUNTER_TOTAL_UNKNOWN"))) : n < 0 && n >= -1 * r ? (r > 1 && s.push(Number(-1 * n)), o = i + t.get("SWE_ROW_COUNTER_LAST_RECORD")) : (s.push(Number(-1 - n)), r > 1 && s.push(Number(-1 - Number(this.Get("GetWSEndRowNum")))), o = i + t.get("SWE_ROW_COUNTER_FROM_LAST")), e.FormatString(SiebelApp.S_App.GetRowCounterTemplateMap(o), s)
      }

      function k(e, t, n) {
          SiebelApp.S_App.GetPopupPM().ExecuteMethod("OnExecuteQuery")
      }

      function L(n, r) {
          var i = r ? r : 0,
              s = n.GetName(),
              o = n.GetFieldName(),
              u = this.Get("IsInQueryMode"),
              a = this.Get("IsPure"),
              f = this.ExecuteMethod("IsPrivateField", s),
              l;
          return (!e.IsEmpty(o) || f || !a) && n.GetUIType() !== t.get("SWE_PST_BUTTON_CTRL") && (l = "", u && !f && a ? l = this.Get("GetRecordSet")[i][o] || "" : r === undefined || r === null ? l = this.ExecuteMethod("GetFormattedFieldValue", n, !(u ||
              f || !a)) : l = this.ExecuteMethod("GetFormattedFieldValue", n, !0, i)), l
      }

      function A(e) {
          var n = this.Get("GetUIEventMap"),
              r = n.length,
              i = t.get("EVENT_NO_FOCUS"),
              s = t.get("NOT_PRV_FIELDS"),
              o = !1;
          for (var u = 0; u < r; u++) {
              if (n[u].ev === l && e === l) {
                  this.SetProperty("UpdateUI", !0), this.SetProperty("UpdateUI", !1);
                  var a = this.Get("GetBusComp");
                  a && a.ClearUpdates(), n.splice(u, 1), o = !0
              } else if (n[u].ev === i && e === i) n.splice(u, 1), o = !0;
              else if (n[u].ev === s && e === s) {
                  if (n[u].ar) {
                      var f = n[u].ar,
                          c = n[u].ar.length;
                      for (var h = 0; h < c; h++) this.ExecuteMethod("RepopulateField", f[h])
                  }
                  n.splice(u, 1), o = !0
              }
              r = n.length
          }
          return o
      }

      function O(e) {
          e && !this.Get("HasPickError") && this.ExecuteMethod("SetFocusToCtrl", e.GetName(), !0)
      }

      function M(e) {
          this.ExecuteMethod("ExecuteHandleControlFocus", e)
      }

      function _(e, n, u) {
          var a = u.GetProperty(r),
              l = null,
              c = !1;
          if (a === s) switch (e) {
              case "NewRecord":
              case "CreateRecord":
                  l = this.Get("GetDefaultFocusOnNew");
                  break;
              case "UndoQuery":
              case "UndoRecord":
              case "ExecuteQuery":
                  l = this.Get("GetDefaultFocusOnEdit") || (this.Get("GetActiveControl") || this.Get("GetPrsrvControl") ? (this.Get("GetActiveControl") || this.Get("GetPrsrvControl")).GetName() : null), e !== "ExecuteQuery" && l && this.Get("GetActiveControl") && l === this.Get("GetActiveControl").GetName() && (this.ExecuteMethod("SetActiveControl", null), this.ExecuteMethod("SetFocusToCtrl", l, !1));
                  break;
              case "NewQuery":
              case "RefineQuery":
                  l = this.Get("GetDefaultFocusOnQuery");
                  break;
              case "GotoNext":
              case "GotoPrevious":
              case "GotoPreviousSet":
              case "GotoNextSet":
              case "GotoFirstSet":
              case "GotoLastSet":
                  l = this.Get("GetActiveControl") || this.Get("GetPrsrvControl"), this.ExecuteMethod("HandleControlFocus", l), c = !0;
                  break;
              case "WriteRecord":
                  var h = SiebelApp.S_App.GetPopupPM();
                  if (A.call(this, t.get("EVENT_NO_FOCUS")) || h && h.Get("isCurrencyOpen")) c = !0;
                  l = this.Get("GetActiveControl") || this.Get("GetPrsrvControl"), l ? l = l.GetName() : c = !0;
                  break;
              case "InvertSelection":
              case "PositionOnRow":
                  this.Get("MultiSelectMode") && this.ExecuteMethod("FocusOnApplet"), c = !0;
                  break;
              case "DeleteRecord":
              case "CopyRecord":
                  break;
              case "PostChanges":
                  this.SetProperty("ForceFocusOnControl", !0), c = !0;
                  break;
              default:
                  c = !0
          } else if (a === i || !a) {
              this.ExecuteMethod("SetFocusDefaultControl", !1);
              switch (e) {
                  case "ExecuteQuery":
                      c = !0;
                      break;
                  case "PostChanges":
                      l = this.Get("GetActiveControl") || this.Get("GetPrsrvControl"), l ? l = l.GetName() : c = !0;
                      break;
                  case "WriteRecord":
                      A.call(this, t.get("EVENT_NO_FOCUS")), l = this.Get("GetActiveControl") || this.Get("GetPrsrvControl"), l ? l = l.GetName() : c = !0
              }
          } else if (a === o) switch (e) {
              case "InvertSelection":
              case "PositionOnRow":
                  this.Get("MultiSelectMode") && this.ExecuteMethod("FocusOnApplet")
          }!c && !this.Get("HasPickError") && (a === s || a === i || !a ? l ? this.ExecuteMethod("SetFocusToCtrl", l, !0) : this.ExecuteMethod("FocusFirstControl") : e === "NewRecord" && a === f && this.SetProperty("FocusCtrlOnNL", !0)), (a === i || !a) && this.ExecuteMethod("ProcessError"), this.ExecuteMethod("SetHasPickError", !1)
      }
      var e = SiebelJS.Dependency("SiebelApp.Utils"),
          t = SiebelJS.Dependency("SiebelApp.Constants"),
          n = t.get("SWE_RPC_PROP_STATUS"),
          r = t.get("SWE_RPC_PROP_RETURN_STATUS"),
          i = t.get("SWE_RPC_PROP_STATUS_ERROR"),
          s = t.get("SWE_RPC_PROP_STATUS_COMPLETED"),
          o = t.get("SWE_RPC_PROP_STATUS_CONTINUE"),
          u = t.get("SWE_RPC_PROP_NEW_PAGE"),
          a = t.get("SWE_RPC_PROP_REFRESH_LAYOUT"),
          f = t.get("SWE_RPC_PROP_NEW_LAYOUT"),
          l = t.get("EVENT_ROW_SELECTION"),
          c = t.get("SWE_PST_APPLET_MODE_BASE"),
          h = t.get("SWE_PST_APPLET_MODE_EDITLIST"),
          p = t.get("SWE_PST_APPLET_SHOWMODE_ROIPE"),
          d = t.get("SWE_PST_APPLET_SHOWMODE_EDIT"),
          v = t.get("ENABLE"),
          m = t.get("EDITABLE"),
          g = t.get("CTRLVALUE"),
          y = t.get("SWE_EXTN_CANCEL_ORIG_OP"),
          b = t.get("SWE_EXTN_RETVAL");
      return SiebelJS.Extend(w, SiebelAppFacade.BasePM), w.prototype.Init = function() {
          SiebelAppFacade.PresentationModel.superclass.Init.apply(this, arguments), SiebelApp.S_App.IsRwd() && e.IsTrue(this.Get("IsObjResponsive")) ? this.AddProperty("GetPlaceholder", this.Get("GetListId") ? this.Get("GetListId") : this.Get("GetFullId")) : this.AddProperty("GetPlaceholder", "s_" + this.Get("GetId") + "_" + "l"), this.AddProperty("GetCaption", SiebelApp.S_App.LookupStringCache(this.Get("GetTitle"))), this.AddProperty("IsPopup", this.Get("GetParentApplet") ? !0 : !1), this.AddProperty("isControlPopupOpen", !1), this.AddProperty("SetFocusToGridCell", !1), this.AddProperty("FocusCtrlOnNL", !1), this.AddProperty("UpdateUI", !1), this.AddProperty("LandMarkTitle", this.Get("GetAppletLabel") + " " + SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_FORM_APPLET")), this.AddProperty("activeCurrencyCtrl", ""), this.AddProperty("ShowMode", ""), this.AddProperty("IsRefreshLayout", ""), this.AddProperty("RequiredControl", []), this.AddProperty("ShowUI", !1), this.AddMethod("ExecuteUIUpdate", function() {
              A.call(this, l)
          }, {
              sequence: !1,
              scope: this
          }), this.AddMethod("ResetUIUpdateStates", function() {
              this.ExecuteMethod("UpdateUIState", "Init")
          }, {
              sequence: !1,
              scope: this
          }), this.AddMethod("hasRecords", function() {
              return (this.Get("GetNumRows") || 0) > 0
          }, {
              scope: this
          }), this.AddMethod("IsRequired", function(t) {
              var n = this.Get("RequiredControl");
              return e.IndexOf(n, t) >= 0 ? !0 : !1
          }, {
              scope: this
          }), this.AddMethod("HandleControlFocus", M, {
              sequence: !1,
              scope: this
          }), this.AddMethod("ExecuteHandleControlFocus", O, {
              sequence: !1,
              scope: this
          }), this.AddMethod("GetUIFieldValue", L, {
              scope: this
          }), this.AddProperty("GetRowCounter", C, {
              stateProp: !0
          }), this.AttachNotificationHandler(t.get("SWE_PROP_BC_NOTI_STATE_CHANGED"), function(e) {
              var t = e.GetProperty("state");
              if (t === "np" || t === "cp") e.GetProperty("value") === "1" ? this.Get("ShowMode") !== d && this.Get("GetMode") !== c && this.SetProperty("ShowMode", d) : this.Get("ShowMode") !== p && this.Get("GetDefaultMode") !== h && this.SetProperty("ShowMode", p)
          }), this.AttachNotificationHandler("g", function(e) {
              if (this.Get("IsActive")) {
                  var t = this.Get("GetActiveControl");
                  if (t && e.GetProperty("type") === "ClosePopup") {
                      var n = this.Get("IsInQueryMode") ? this.ExecuteMethod("GetFieldValue", t) : this.ExecuteMethod("GetFormattedFieldValue", t);
                      this.ExecuteMethod("FieldChange", t, n)
                  }
              }
          }), this.AttachPostProxyExecuteBinding("ExecuteQuery", k), this.AttachPostProxyExecuteBinding("SortDescending", k), this.AttachPostProxyExecuteBinding("SortAscending", k), this.AttachPostProxyExecuteBinding("Drilldown", function(t, r, i) {
              var s = i.GetProperty(n);
              e.IndexOf([f, a, u], s) === -1 && SiebelApp.S_App.uiStatus.Free()
          }), this.AttachPreProxyExecuteBinding("ALL", function(n, i, s) {
              A.call(this, t.get("NOT_PRV_FIELDS")), _.call(this, n, i, s), this.Get("IsRefreshLayout") && this.SetProperty("IsRefreshLayout", !1);
              var o = s.GetProperty(r);
              if (!e.IsEmpty(o) && o === a) {
                  var u = this.Get("GetMode") === this.Get("GetDefaultMode") ? p : d;
                  this.Get("ShowMode") !== u && this.SetProperty("ShowMode", u), this.SetProperty("IsRefreshLayout", !0)
              }
              return
          }), this.AddMethod("Query", function() {
              var e = SiebelApp.S_App.GetActiveView();
              if (e) {
                  var t = e.GetActiveApplet();
                  e.ExecuteFrame(t.GetName(), [{
                      field: this.Get("SearchField"),
                      value: this.Get("SearchValue")
                  }])
              }
          }), this.AddMethod("SetSelectionOnDragNDrop", function(e) {
              this.ExecuteMethod("ChangeSelectionInPopup", e)
          }), this.AddMethod("HandleDragNDropInPopup", function(e) {
              return this.ExecuteMethod("CanInvokeMethod", e) ? this.ExecuteMethod("InvokeMethod", e) : !1
          }), this.AddMethod("CanInvokeScrollMethod", function(e) {
              var t = this.ExecuteMethod("CanInvokeMethod", e);
              return t
          }), this.AddMethod("LeaveField", function(e, t, n, r) {
              this.ExecuteMethod("MaskLeaveField", e, !1, t), this.ExecuteMethod("ResetCtrlValue", e, r[b], t)
          }, {
              sequence: !1,
              scope: this
          }), this.AddMethod("LeaveField", function(e, t, n, r) {
              this.ExecuteMethod("MaskLeaveField", e, !0, t)
          }, {
              sequence: !0,
              scope: this
          }), this.AddMethod("MaskLeaveField", function(e, t, n, r) {}), this.AddMethod("ResetCtrlValue", function(e, t, n) {
              var r = e.GetName(),
                  i = this.GetStateUIMap().CtrlInfo ? this.GetStateUIMap().CtrlInfo[r] || {} : {},
                  s = i.OneEl === !0 ? 0 : this.Get("GetSelection"),
                  o = i[s];
              if (o && o.hasOwnProperty(g) && (t === !1 || o[g] !== n)) {
                  var u = {},
                      a = this.Get("IsPure") && !this.ExecuteMethod("IsPrivateField", r) ? o[g] : this.ExecuteMethod("GetFormattedFieldValue", e);
                  !this.Get("IsPure") && e.GetRadioGroupPropSet() && e.GetRadioGroupPropSet().GetChildCount() && (a = n), u.ctrlName = r, u.index = s, u.OneEl = i.OneEl, u.stateValue = null, e.IsClientCtrl() ? a = n : this.ExecuteMethod("UpdateUIState", g, u), this.ExecuteMethod("FieldChange", e, a)
              }
          }), this.AttachNotificationHandler("g", function(e) {
              e.GetProperty("type") === "ClosePopup" && this.ExecuteMethod("ClearPopup")
          }, {
              scope: SiebelApp.S_App.GetPopupPM()
          }), this.AddMethod("HandlePreGetUIState", E, {
              sequence: !0,
              scope: this
          }), this.AddMethod("HandleUIStateChange", T, {
              sequence: !0,
              scope: this
          }), this.AddMethod("UpdateUIState", N, {
              sequence: !0,
              scope: this
          })
      }, w.GetCtrlTemplate = function(e, n, r, i) {
          var s = CCFMiscUtil_CreatePropSet();
          return s.SetType(t.get("SWE_PST_COL")), s.SetPropertyStr(t.get("SWE_PROP_IS_CLIENT_CTRL"), "1"), s.SetPropertyStr("cph", "1"), s.SetPropertyStr(t.get("SWE_PROP_CURR_FLD"), ""), s.SetPropertyStr(t.get("SWE_PROP_CASE_SENSITIVE"), "1"), s.SetPropertyStr(t.get("SWE_PROP_DISP_FORMAT"), ""), s.SetPropertyStr(t.get("SWE_PROP_DISP_MODE"), ""), s.SetPropertyStr(t.get("SWE_PROP_DISP_MAX_CHARS"), "0"), s.SetPropertyStr(t.get("SWE_PROP_DISP_NAME"), n), s.SetPropertyStr(t.get("SWE_PROP_FLD_NAME"), e), s.SetPropertyStr(t.get("SWE_PROP_HEIGHT"), "0"), s.SetPropertyStr(t.get("SWE_PROP_HTML_ATTRIBUTE"), ""), s.SetPropertyStr(t.get("SWE_PROP_IS_BOUND_PICK"), "0"), s.SetPropertyStr(t.get("SWE_PROP_IS_ENCODE"), "1"), s.SetPropertyStr(t.get("SWE_PROP_INPUTMETHOD"), "6"), s.SetPropertyStr(t.get("SWE_PROP_JUSTIFICATION"), "left"), s.SetPropertyStr(t.get("SWE_PROP_LABEL_JUSTIFICATION"), ""), s.SetPropertyStr(t.get("SWE_PROP_MAX_SIZE"), "30"), s.SetPropertyStr(t.get("SWE_PROP_NAME"), e), s.SetPropertyStr(t.get("SWE_PROP_PICK_APLT"), ""), s.SetPropertyStr(t.get("SWE_PROP_POPUP_HEIGHT"), "0"), s.SetPropertyStr(t.get("SWE_PROP_PROMPT"), "6"), s.SetPropertyStr(t.get("SWE_PROP_POPUP_WIDTH"), "0"), s.SetPropertyStr(t.get("SWE_PROP_IS_DYNAMIC"), "0"), s.SetPropertyStr(t.get("SWE_PROP_SPAN"), e), s.SetPropertyStr(t.get("SWE_PROP_SEQ"), "0"), s.SetPropertyStr(t.get("SWE_PROP_TYPE"), r), s.SetPropertyStr(t.get("SWE_PROP_WIDTH"), "100"), s.SetPropertyStr(t.get("SWE_PROP_IS_EDIT"), "0"), s.SetPropertyStr(t.get("SWE_PROP_COLINDEX"), i), s.SetPropertyStr(t.get("SWE_PROP_ICON_MAP"), ""), s.SetPropertyStr(t.get("SWE_PROP_IS_SORTABLE"), "0"), s.SetPropertyStr(t.get("SWE_CTRL_CLIENTTYPE"), ""), s.SetPropertyStr("length", "0"), s.GetProperty(t.get("SWE_PROP_DISP_FORMAT")) === "" && (r === t.get("SWE_CTRL_DATE_TZ_PICK") || r === t.get("SWE_CTRL_DATE_TIME_PICK") ? s.SetPropertyStr(t.get("SWE_PROP_DISP_FORMAT"), SiebelApp.S_App.LocaleObject.GetDateFormat() + " " + SiebelApp.S_App.LocaleObject.GetTimeFormat()) : r === t.get("SWE_CTRL_DATE_PICK") && s.SetPropertyStr(t.get("SWE_PROP_DISP_FORMAT"), SiebelApp.S_App.LocaleObject.GetDateFormat())), r === t.get("SWE_CTRL_COMBOBOX") && s.SetPropertyStr(t.get("SWE_PROP_PICK_APLT"), e), s
      }, w.prototype.Setup = function(e) {
          SiebelAppFacade.PresentationModel.superclass.Setup.apply(this, arguments);
          var n, r, i, s;
          e && (n = e.GetChildByType(t.get("SWE_APPLET_PM_PS")));
          if (n) {
              r = n.GetChildByType(t.get("SWE_PM_USER_PREF"));
              if (r) {
                  i = r.EnumProperties(!0);
                  do this.AddProperty(i, r.GetProperty(i)); while (i = r.EnumProperties(!1))
              }
              s = n.GetProperty(t.get("SWE_MTHD_UPDATE_USER_PREF")), s && this.AddProperty(t.get("SWE_MTHD_UPDATE_USER_PREF"), s);
              var o = n.GetProperty("Required Control");
              o && this.SetProperty("RequiredControl", o.split(","))
          }
          var u = this.Get("GetMode") === this.Get("GetDefaultMode") ? p : d;
          this.SetProperty("ShowMode", u), this.SetProperty("IsRefreshLayout", !1)
      }, w.prototype.UpdateModel = function(e) {
          this.AddMethod("AddClientControl", null, {
              core: !0
          })
      }, w
  }()), typeof SiebelApp.PopupPModel == "undefined" && (SiebelJS.Namespace("SiebelApp.PopupPModel"), SiebelApp.PopupPModel = function() {
      function n(e) {
          this.constructor.superclass.constructor.call(this, e)
      }

      function r(e) {
          e ? this.SetProperty("state", t.get("POPUP_STATE_VISIBLE")) : (this.SetProperty("state", t.get("POPUP_STATE_HIDDEN")), this.SetProperty("isPopupSI", !1))
      }

      function i(n) {
          var r, i, s, o, u, a, l, c, h, p, d, v = !1;
          SiebelApp.S_App.GetEnablePerfHooks() && SiebelApp.S_App.GetTimer() && SiebelApp.S_App.GetTimer().TimePopupApplet("", "Start PopupApplet"), this.Get("state") === t.get("POPUP_STATE_VISIBLE") && this.SetProperty("prevPopups", this.Get("currPopups")), this.SetProperty("isPopupPick", !1), this.SetProperty("isPopupMVGAssoc", !1), this.SetProperty("isPopupMVGSelected", !1), this.SetProperty("isPopupAssoc", !1), this.SetProperty("currPopups", []), r = Number(n.GetProperty(t.get("SWE_POP_HEIGHT_STR"))) || 0, i = Number(n.GetProperty(t.get("SWE_POP_WIDTH_STR"))) || 0, a = n.GetProperty(t.get("SWE_IS_SI_POPUP")), this.SetProperty("isSIPopup", e.IsTrue(a));
          var m = n.GetProperty(t.get("SWE_FULL_POPUP_WINDOW_STR"));
          s = n.GetProperty("URL"), l = n.GetProperty(t.get("SWE_FREE_POPUP_STR")), o = n.GetProperty(t.get("SWE_LINK_TARGET_STR")), c = parseInt(screen.availWidth / 2 - (i || 800) / 2, 10), h = parseInt(screen.availHeight / 2 - (r || 600) / 2, 10), p = "width=" + (i || 800) + ",height=" + (r || 600) + ",left=" + c + ",top=" + h + ",screenX=" + c + ",screenY=" + h, m ? p += ",scrollbars=yes,resizable=yes,location=yes,toolbar=yes,menubar=yes,status=yes" : p += ",scrollbars=yes,resizable=yes", this.Get("state") === t.get("POPUP_STATE_UNLOADED") && !this.GetRenderer() && (this.Setup(), v = !0);
          if (l || m || s && !s.match(/.swe\?/)) return this.ExecuteMethod("StandAlonePopup", s, p, o), SiebelApp.S_App.uiStatus.Free(), !0;
          this.Get("state") === t.get("POPUP_STATE_UNLOADED") && !v && this.Show(), s.indexOf("start.swe") === -1 ? u = SiebelApp.S_App.GetPageURL().split("start.swe")[0] + s + t.get("SWE_ARG_START") + f("") : (s = f(s), u = SiebelApp.S_App.GetPageURL() + s.split("start.swe")[1]);
          var g = SiebelApp.S_App.GetActiveView();
          if (g) {
              var y = g.GetActiveApplet();
              y && g.SetActiveAppletBeforePopup(y)
          }
          return this.ExecuteMethod("OpenPopup", u, r, i, !1, !1, !1), !0
      }

      function s(e) {
          return this.SetProperty("isPrevPopupVisible", !1), this.ExecuteMethod("ClearPopup"), !0
      }

      function o() {
          if (this.Get("isCurrencyOpen") || this.Get("state") === t.get("POPUP_STATE_HIDDEN") || this.Get("state") === t.get("POPUP_STATE_UNLOADED") || this.Get("isPrevPopupVisible") === !0 && !this.Get("forceClosePopup")) return;
          var e = $("[name=popup]").dialog("instance");
          if (e.opener && e.opener.parents("div[name=popup]").length === 0) {
              var n = this.Get("currPopups");
              n && n.length === 1 && n[0].HasServerError() && n[0].ProcessError()
          }
          this.ExecuteMethod("SetPopupVisible", !1);
          var r = SiebelApp.S_App.GetActiveView();
          r && r.DeletePopup();
          var i = this.Get("currPopups"),
              s = null,
              o = i.length,
              u = 0;
          for (u = 0; u < o; u++) s = i[u], SiebelApp.S_App.IsExternalApplet(s) && s.Close();
          this.SetProperty("isPopupPick", !1), this.SetProperty("isPopupMVGAssoc", !1), this.SetProperty("isPopupMVGSelected", !1), this.SetProperty("isPopupAssoc", !1), this.SetProperty("currPopups", []), this.SetProperty("prevPopups", []), this.ExecuteMethod("UnloadPopup")
      }

      function u(e, n, r, i, s, o) {
          try {
              var u, a = this;
              return this.Get("state") === t.get("POPUP_STATE_VISIBLE") ? (this.SetProperty("isPrevPopupVisible", !0), this.ExecuteMethod("SetPopupVisible", !1, !0)) : this.SetProperty("isPrevPopupVisible", !1), n = n === undefined ? 0 : parseFloat(n), r = r === undefined ? 0 : parseFloat(r), n <= 0 && (n = parseFloat(t.get("DEFAULT_POPUP_HEIGHT"))), r <= 0 && (r = parseFloat(t.get("DEFAULT_POPUP_WIDTH"))), this.SetProperty("noHide", !1), this.SetProperty("height", n), this.SetProperty("width", r), this.ExecuteMethod("SetPopupVisible", !0), o === undefined || !o ? this.SetProperty("url", e) : this.SetProperty("content", e), !0
          } catch (f) {
              return !1
          }
      }

      function a() {
          var t = this;
          if (t.Get("isSIPopup")) return;
          if (this.Get("CanProcessLayout") === !1 && t.retryWaitForObjInfoProcessing < 25) {
              t.retryWaitForObjInfoProcessing++, setTimeout(function() {
                  a.call(t)
              }, 100);
              return
          }
          t.retryWaitForObjInfoProcessing = 0;
          var n = t.Get("prevPopups"),
              r = t.Get("currPopups");
          if (n && n.length) {
              var i = 0;
              for (var s = 0, o = n.length; s < o; s++) e.IndexOf(r || [], n[s]) !== -1 && i++;
              i === n.length && t.Get("isPrevPopupVisible") && t.SetProperty("isPrevPopupVisible", !1)
          }
          var u = null,
              f = r.length,
              l = 0;
          for (l = 0; l < f; l++) u = r[l], u.Initialize(), SiebelApp.S_App.NotifyTimer("TimePopupApplet", [u.GetName(), "Objects Initialized"]), SiebelAppFacade.ComponentMgr.FindComponent({
              id: u.GetName()
          }).Show(), u.Show(), SiebelApp.S_App.NotifyTimer("TimePopupApplet", [u.GetName(), "Finished Populate"]), SiebelApp.S_App.GetActiveView() && u.GetView() === SiebelApp.S_App.GetActiveView() && (SiebelApp.S_App.GetActiveView().SetActiveApplet(u), SiebelApp.S_App.GetActiveView().SetActiveAppletOnLoad(null)), u.SetFocusDefaultControl(!0), u.FocusDefaultControl(r.length != 2);
          r.length == 2 && SiebelApp.S_App.GetPopupPM().Get("isPopupMVGAssoc") && $("#" + r[0].GetFullId()).length && $("#" + r[1].GetFullId()).length && SiebelApp.MvgBeautifier.Initialize(), 0 == r.length && this.SetProperty("isPopupSI", !0), SiebelApp.S_App.uiStatus.Free(), SiebelApp.S_App.uiStatus.LocalFree()
      }

      function f(n) {
          return n.indexOf(".swe?") !== -1 && n.indexOf(t.get("SWE_SHOW_POPUP_STR")) === -1 && (n = e.AppendArgsToURL(n, t.get("SWE_SHOW_POPUP_STR"), t.get("SWE_NUMERIC_TRUE"))), n
      }

      function l(e) {
          e.preventDefault(), e.stopPropagation();
          if (this.Get("state") === SiebelApp.Constants.get("POPUP_STATE_HIDDEN")) return !1;
          this.SetProperty("isPopupClosedByX", !0), this.SetProperty("isPrevPopupVisible", !1);
          var n = CCFMiscUtil_CreatePropSet(),
              r = CCFMiscUtil_CreatePropSet();
          n.SetProperty(t.get("SWE_CMD_ARG"), t.get("CLOSE_BY_X")), n.SetProperty(t.get("SWEDIC"), t.get("CMDMGR_TRUE"));
          var i = {};
          return i.async = !0, i.scope = this, i.args = [], i.args.push(""), i.args.push(n), SiebelApp.S_App.CallServer(n, r, !0, i), !1
      }
      var e = SiebelJS.Dependency("SiebelApp.Utils"),
          t = SiebelJS.Dependency("SiebelApp.Constants");
      return SiebelJS.Extend(n, SiebelAppFacade.PresentationModel), n.prototype.Init = function() {
          this.AddProperty("state", t.get("POPUP_STATE_UNLOADED")), this.AddProperty("noHide", !1), this.AddProperty("height", 0), this.AddProperty("width", 0), this.AddProperty("source", t.get("POPUP_SOURCE_HI")), this.AddProperty("closeByXDisabled", !1), this.AddProperty("isPrevPopupVisible", !1), this.AddProperty("isPopupClosedByX", !1), this.AddProperty("currPopups", []), this.AddProperty("prevPopups", []), this.AddProperty("url", ""), this.AddProperty("isSIPopup", !1), this.AddProperty("content", ""), this.AddProperty("isCurrencyOpen", !1), this.AddProperty("IsCancelQryPopupOpen", !1), this.AddProperty("CanProcessLayout", !0), this.AddProperty("isPopupSI", !1), this.AddProperty("forceClosePopup", !1), this.AddMethod("SetPopupVisible", r), this.AddMethod("ProcessNewPopup", i), this.AddMethod("ProcessClearPopup", s), this.AddMethod("OnExecuteQuery", function() {}), this.AddMethod("ClearPopup", o), this.AddMethod("OpenPopup", u), this
              .AddMethod("OnLoadPopupContent", a), this.AddMethod("StandAlonePopup", function(e, t, n) {}), this.AddMethod("UnloadPopup", function() {}), this.AttachEventHandler("ClosePopupByX", l, {
                  core: !0
              }), this.AttachPreProxyExecuteBinding("ALL", function(e, n, r) {
                  t.get("CLOSE_BY_X") === String(n.GetProperty(t.get("SWE_CMD_ARG"))) ? (this.ExecuteMethod("ClearPopup"), this.SetProperty("isPopupClosedByX", !0)) : t.get("SWSE_CANCEL_QUERY") === String(n.GetProperty(t.get("SWSE_CMD_STR"))) && (this.ExecuteMethod("ClearPopup"), this.SetProperty("isPopupClosedByX", !0), this.SetProperty("IsCancelQryPopupOpen", !1))
              })
      }, n.prototype.PostExecute = function(e, t, n) {
          this.HandlePreExecute(e, t, n), this.HandlePostExecute(e, t, n)
      }, n.prototype.Setup = function(e) {
          var t = new SiebelAppFacade.PopupRenderer(this);
          this.GetRenderer = function() {
              return t
          }, this.Show()
      }, n.prototype.IsPopupStarted = function() {
          return e.IndexOf([t.get("POPUP_STATE_STARTED"), t.get("POPUP_STATE_LOADED"), t.get("POPUP_STATE_VISIBLE")], this.Get("state")) !== -1
      }, n
  }(), define("siebel/pmodel", [], function() {
      return "SiebelAppFacade.PresentationModel"
  })), SiebelAppFacade.ControlBuilder = {
      _default: null,
      defaults: function() {
          return this._default || (this._default = {
              direction: SiebelApp.S_App.GetDirection()
          }), this._default
      },
      SetDefaultConfig: function(e) {
          e = $.extend(e, this.defaults());
          var t = $(e.target),
              n = e.inputName || t.attr("id") || e.control.GetInputName(),
              r = n + "_icon",
              i = n + "_span",
              s = $("<span class='" + (e.className || "") + "' id='" + r + "' title='" + e.title + "'></span>" + "<span id='" + i + "' style='display:none;'></span>");
          s.bind("click", function(t) {
              e.click.call(e.scope, e.control, e.target, e.inputName), t.stopPropagation()
          }), t.addClass("siebui-input-popup " + (e.direction ? "siebui-rtl-input-popup " : "") + e.controlClass).after(s), t.addClass("siebui-align-" + e.control.GetJustification()), SiebelApp.Utils.IsTrue(SiebelApp.S_App.GetAccessibilityEnhanced()) && t.attr("aria-describedby", (t.attr("aria-describedby") || "") + " " + r), t = imgCtrl = null
      },
      Pick: function(e) {
          if (e && $(e.target).length >= 1) {
              e = $.extend(e, {
                  imgSrc: "images/janna/pick.gif",
                  title: SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_PICK_TITLE")
              });
              var t = this;
              setTimeout(function() {
                  t.SetDefaultConfig(e)
              }, 2)
          }
      },
      Mvg: function(e) {
          if (e && $(e.target).length >= 1) {
              e = $.extend(e, {
                  imgSrc: "images/janna/mvg.gif",
                  title: SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_MVG_TITLE"),
                  controlClass: "siebui-ctrl-mvg"
              });
              var t = this;
              setTimeout(function() {
                  t.SetDefaultConfig(e)
              }, 2)
          }
      },
      SelectCtrl: function(e) {
          if (e && $(e.target).length >= 1) {
              e = $.extend(e, {
                  imgSrc: "images/janna/down.gif"
              });
              var t = this;
              setTimeout(function() {
                  t.SetDefaultConfig(e)
              }, 2)
          }
      },
      EffDat: function(e) {
          if (e && $(e.target).length >= 1) {
              e = $.extend(e, {
                  imgSrc: "images/icon_effdate.gif",
                  title: SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_EFFECTIVE_DATE_TITLE")
              });
              var t = this;
              setTimeout(function() {
                  t.SetDefaultConfig(e)
              }, 2)
          }
      },
      DatePick: function(e) {
          if (e && $(e.target).length >= 1) {
              var t = this;
              setTimeout(function() {
                  if (!1 === e.showPopup) e = $.extend(e, {
                      imgSrc: "images/janna/icon_calendar_sm.gif",
                      title: SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_DATE_FIELD_TITLE")
                  }), t.SetDefaultConfig(e);
                  else {
                      var n = $(e.target);
                      n.datetimepicker({
                          changeMonth: !0,
                          changeYear: !0,
                          showTime: !1,
                          showTimepicker: !1,
                          dateFormat: "yy-mm-dd",
                          yearRange: e.yearRange,
                          beforeShow: e.beforeShow || function() {
                              return !0
                          },
                          onClose: e.onClose
                      });
                      if (SiebelApp.Utils.IsTrue(SiebelApp.S_App.GetAccessibilityEnhanced())) {
                          var r = (n.attr("name") || e.control.GetInputName()) + "_icon";
                          n.next("img").attr("alt", SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_DATE_FIELD_TITLE")).attr("id", r)
                      }
                      n.addClass("siebui-input-popup " + e.direction ? "siebui-rtl-input-popup " : "").next("img").addClass(e.className || "");
                      var i = e.getISOVal();
                      i !== consts.get("JS_INVALID_DATE") && n.datetimepicker("setDate", i), t.defaults().direction && $("#" + r).addClass("siebui-icon-align-right"), n.datetimepicker("show"), n.datepicker("widget").find(".ui-datepicker-calendar").attr("tabindex", "0").focus(), n = null
                  }
              }, 2)
          }
      },
      DateTimePick: function(e) {
          if (e && $(e.target).length >= 1) {
              var t = this;
              setTimeout(function() {
                  var n, r = e.direction || t.defaults().direction;
                  if (!1 === e.showPopup) e = $.extend(e, {
                      imgSrc: "images/janna/icon_calendar_sm.gif",
                      title: SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_DATETIME_FIELD_TITLE")
                  }), t.SetDefaultConfig(e);
                  else {
                      var n = $(e.target),
                          i = SiebelApp.S_App.LocaleObject.GetTimeFormat(),
                          s = i.indexOf("p ") === -1 && i.indexOf(" p") === -1,
                          o = (s ? "HH" : "hh") + ":mm:ss" + (s ? "" : " TT");
                      n.datetimepicker({
                          changeMonth: !0,
                          changeYear: !0,
                          dateFormat: "yy-mm-dd",
                          timeFormat: o,
                          separator: " ",
                          yearRange: e.yearRange,
                          beforeShow: e.beforeShow || function() {
                              return !0
                          },
                          onClose: e.onClose,
                          isRTL: r ? !0 : !1
                      });
                      if (SiebelApp.Utils.IsTrue(SiebelApp.S_App.GetAccessibilityEnhanced())) {
                          var u = (n.attr("name") || e.control.GetInputName()) + "_icon";
                          n.next("img").attr("alt", SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_DATETIME_FIELD_TITLE")).attr("id", u)
                      }
                      n.addClass("siebui-input-popup " + e.direction ? "siebui-rtl-input-popup " : "").next("img").addClass(e.className || "");
                      var a = e.getISOVal();
                      a !== consts.get("JS_INVALID_DATE") && n.datetimepicker("setDate", a), t.defaults().direction && $("#" + u).addClass("siebui-icon-align-right"), n.datetimepicker("show"), n.datepicker("widget").find(".ui-datepicker-calendar").attr("tabindex", "0").focus(), n = null
                  }
              }, 2)
          }
      },
      DateTimeZonePick: function(e) {},
      Calculator: function(e) {
          if (e && $(e.target).length >= 1) {
              var t = this;
              setTimeout(function() {
                  var n;
                  if (e.show === !0) {
                      n = $(e.target), n.next("img").styleHide();
                      var r;
                      e.dc ? r = e.dc : r = SiebelApp.Constants.get("SWE_DECIMAL_CONST");
                      var i = r[0].toLowerCase(),
                          s = ["a", "b", "c", "d", "e", "f", "A", "B", "C", "D", "E", "F"],
                          o = "",
                          u = s.length;
                      for (var a = 0; a < u; a++)
                          if (s[a] === r[0]) {
                              o = r[0].replace(s[a], "[" + s[a] + "]");
                              break
                          } r = o ? o + r.substring(1, r.length) : r, $.calculator.addKeyDef("dc", r, $.calculator.digit, null, "mykey", "DC", i), $.extend(e, {
                          layout: ["_%BSCECA", "_1_2_3_+@X", "_4_5_6_-@U", "_7_8_9_*@E", "dc_0_=_/"]
                      }), n.calculator({
                          buttonImage: "images/janna/icon_calculator_sm.gif",
                          buttonImageOnly: !0,
                          layout: e.layout,
                          onOpen: e.beforeShow,
                          onClose: e.close,
                          decimalChar: r
                      });
                      if (SiebelApp.Utils.IsTrue(SiebelApp.S_App.GetAccessibilityEnhanced())) {
                          var f = (n.attr("id") || e.control.GetInputName()) + "_icon";
                          n.next("img").attr("alt", SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_CALC_FIELD_TITLE")).attr("id", f)
                      }
                      t.defaults().direction && n.next("img").addClass("siebui-icon-align-right"), n.addClass("siebui-input-popup " + e.direction ? "siebui-rtl-input-popup " : "").next("img").addClass(e.className || ""), n.calculator("show"), $.calculator._getInst(n)._mainDiv.attr({
                          "aria-label": "Calculator Popup",
                          role: "application",
                          "aria-atomic": "true",
                          "aria-live": "assertive",
                          "aria-relevant": "all"
                      }), n = null
                  } else e = $.extend(e, {
                      imgSrc: "images/janna/icon_calculator_sm.gif",
                      title: SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_CALC_FIELD_TITLE")
                  }), t.SetDefaultConfig(e)
              }, 2)
          }
      },
      Currency: function(e) {
          if (e && $(e.target).length >= 1) {
              e = $.extend(e, {
                  imgSrc: "images/janna/icon_calculator_sm.gif",
                  title: SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_CURRENCY_CALC_FIELD_TITLE")
              });
              var t = this;
              setTimeout(function() {
                  t.SetDefaultConfig(e)
              }, 2)
          }
      },
      RTCeditor: function(e) {
          $.extend(e, {
              toolbar: [{
                  name: "styles",
                  items: ["Font", "FontSize"]
              }, {
                  name: "clipboard",
                  items: ["Cut", "Copy", "Paste"]
              }, {
                  name: "colors",
                  items: ["TextColor", "BGColor"]
              }, {
                  name: "basicstyles",
                  items: ["Bold", "Italic", "Underline"]
              }, {
                  name: "paragraph",
                  items: ["NumberedList", "BulletedList", "Outdent", "Indent", "JustifyLeft", "JustifyCenter", "JustifyRight"]
              }]
          });
          if ($(e.target).length === 0) return !1;
          e = $.extend(e, this.defaults()), $(e.target).ckeditor(function() {}, {
              toolbar: e.toolbar,
              skin: "moono",
              width: e.control.GetWidth(),
              height: e.control.GetHeight(),
              startupFocus: !1,
              resize_enabled: !0,
              contentsLangDirection: e.direction,
              resize_maxHeight: e.control.GetHeight(),
              resize_maxWidth: e.control.GetWidth(),
              autoParagraph: !1,
              fillEmptyBlocks: !1,
              ignoreEmptyParagraph: !0
          });
          var t = $(e.target).ckeditorGet();
          CKEDITOR.focusManager._.blurDelay = 0, t.config.protectedSource.push(SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_CSQ_WATERMARK")), t.on("blur", function() {
              var t = this.getData();
              e.blur.call(e.scope, e.control, t)
          }), t.on("focus", function() {
              var t = this.getData();
              e.focus.call(e.scope, e.control, t)
          }), t.on("instanceReady", function(e) {
              var t = CKEDITOR.dtd;
              for (var n in CKEDITOR.tools.extend({}, t.$nonBodyContent, t.$block, t.$listItem, t.$tableContent)) this.dataProcessor.writer.setRules(n, {
                  indent: !1,
                  breakBeforeOpen: !1,
                  breakAfterOpen: !1,
                  breakBeforeClose: !1,
                  breakAfterClose: !1
              })
          }), $(e.target).addClass("siebui-input-popup ").next("img").addClass(e.className || "")
      },
      FileUploader: function(e) {
          $.extend(e, {
              type: "POST",
              replaceFileInput: !1,
              forceIframeTransport: !1,
              multipart: !0
          });
          var t = {
              url: e.url,
              type: e.type,
              fileInput: e.fileInput,
              dropZone: e.dropZone,
              replaceFileInput: e.replaceFileInput,
              forceIframeTransport: e.forceIframeTransport,
              multipart: e.multipart,
              formData: e.formData,
              drop: function(t, n) {
                  SiebelApp.S_App.uiStatus.Busy({
                      target: SiebelApp.S_App.GetTargetViewContainer(),
                      mask: !0,
                      timeOut: !1,
                      message: ""
                  }), $(this).fileupload("option", "remainingFilesToUpload", n.files.length), (e.drop || function() {}).call(e.scope || this, t, n, this)
              },
              done: function(t, n) {
                  var r = $(this).fileupload("option", "remainingFilesToUpload");
                  $(this).fileupload("option", "remainingFilesToUpload", --r), (e.done || function() {}).call(e.scope || this, t, n), SiebelApp.S_App.uiStatus.IsBusy() && r <= 0 && SiebelApp.S_App.uiStatus.Free()
              },
              fail: function(t, n) {
                  (e.fail || function() {}).call(e.scope || this, t, n), SiebelApp.S_App.uiStatus.IsBusy() && SiebelApp.S_App.uiStatus.Free()
              }
          };
          e.isDisplayOption ? t.add = function(t, n) {
              $(this).fileupload("option", "importfiles", n.files), (e.add || function() {}).call(e.scope || this, t, n, this)
          } : t.change = function(t, n) {
              SiebelApp.S_App.uiStatus.Busy({
                  target: SiebelApp.S_App.GetTargetViewContainer(),
                  mask: !0,
                  timeOut: !1,
                  message: ""
              }), $(this).fileupload("option", "remainingFilesToUpload", n.files.length), (e.change || function() {}).call(e.scope || this, t, n, this)
          }, $(e.fileInput).fileupload(t)
      },
      DetailPopup: function(e) {
          if (e && $(e.target).length >= 1) {
              e = $.extend(e, {
                  imgSrc: "images/janna/pick.gif",
                  title: SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_DETAIL_POPUP_APPLET")
              });
              var t = this;
              setTimeout(function() {
                  t.SetDefaultConfig(e)
              }, 2)
          }
      },
      PhoneCtrl: function(e) {
          if (e && $(e.target).length >= 1) {
              e = $.extend(e, {
                  imgSrc: "images/icon_call_enabled.gif",
                  title: SiebelApp.S_App.LocaleObject.GetLocalString("IDS_CTI_PHONE_NUMBER_FIELD")
              });
              var t = this;
              setTimeout(function() {
                  t.SetDefaultConfig(e)
              }, 2)
          }
      }
  }, SiebelApp.ThemeManager = function() {
      function n(e) {
          if (e)
              for (var t in e.css) $("#" + t).remove()
      }

      function r(e) {
          if (e && typeof e.css == "object")
              for (var t in e.css) e.css.hasOwnProperty(t) && e.css[t] && ($("#" + t)[0] ? $("#" + t).attr("href") != e.css[t] && $("#" + t).attr("href", e.css[t]) : document.createStyleSheet ? (document.createStyleSheet(e.css[t]), $("link[href='" + e.css[t] + "'").attr("id", t)) : $("head").append("<link id='" + t + "' type='text/css' href='" + e.css[t] + "' rel='stylesheet' />"))
      }
      var e = {},
          t = [];
      return {
          getTheme: function(t) {
              return e[t] || {}
          },
          isChangeAllowed: function() {
              return !0
          },
          addTheme: function(t, n) {
              e[t] = n
          },
          unLoadStyle: function(t) {
              e[t] && (n(e[t]), delete e[t])
          },
          flipTheme: function(t, n) {
              var i = {},
                  s = require.s.contexts._.config.urlArgs ? "?" + require.s.contexts._.config.urlArgs : "";
              i.css = new Object;
              for (var o = 0; o < n.length; o++) {
                  var u = t + o;
                  i.css[u] = n[o] + s
              }
              this.addTheme(t, i), r(e[t])
          }
      }
  }(), SiebelApp.ThemeFlipper = function(e) {
      var t = e;
      this.getDelegate = function() {
          return t
      }
  }, SiebelApp.ThemeFlipper.prototype.FlipStyle = function() {
      this.getDelegate().flipTheme()
  }, SiebelApp.ThemeFlipper.prototype.setStyleState = function() {
      this.getDelegate().setStyleState()
  }, new SiebelApp.ThemeFlipper(SiebelApp.ThemeManager), SiebelApp.LayoutTransitionsMgr = function() {
      function n() {
          if (t === null) {
              t = !1;
              var e = SiebelApp.S_App.IsRwd() ? $("#" + SiebelApp.S_App.ViewTarget())[0] : $("#_svf0")[0],
                  n = e.style;
              t = "transform" in n || "WebkitTransform" in n || "MozTransform" in n || "OTransform" in n || "msTransform" in n, e = n = null
          }
          return t
      }

      function r(e) {
          return SiebelApp.S_App.IsRwd() ? e === SiebelApp.S_App.ViewTarget() : e === "_svf0"
      }
      var e = "",
          t = null;
      return {
          setTransition: function(t) {
              t = t.toLowerCase(), $(".siebui-prev-" + e + "-begin").removeClass("siebui-prev-" + e + "-begin"), $(".siebui-prev-" + e + "-end").removeClass("siebui-prev-" + e + "-end"), $(".siebui-next-" + e + "-begin").removeClass("siebui-next-" + e + "-begin"), $(".siebui-next-" + e + "-end").removeClass("siebui-next-" + e + "-end"), e = t
          },
          IsEnable: function() {
              return e === "none" || !e.match(/\S/) ? !1 : !0
          },
          Setup: function(t) {
              if (this.IsEnable() && r(t))
                  if (typeof e == "function") e.call(window, "setup", t);
                  else if (e && n()) {
                  var i = $("#" + t);
                  $("#" + t + "_temp").length === 0 && i.after("<div id='" + t + "_temp'></div>"), $("#" + t + "_temp").empty().removeClass("siebui-prev-" + e + "-begin siebui-prev-" + e + "-end").append(i.children().clone().removeAttr("id").removeAttr("name").find("*").removeAttr("id").removeAttr("name").end()).show().addClass("siebui-prev-" + e + "-begin"), i.removeClass("siebui-next-" + e + "-begin siebui-next-" + e + "-end").addClass("siebui-next-" + e + "-begin"), i = null
              }
          },
          ShowTransition: function(t) {
              this.IsEnable() && (typeof e == "function" ? e.call(window, "execute", t) : e && n() && ($("#" + t + "_temp").addClass("siebui-prev-" + e + "-end"), setTimeout(function() {
                  $("#" + t).addClass("siebui-next-" + e + "-end")
              }, 1), setTimeout(function() {
                  $("#" + t + "_temp").empty()
              }, 500)))
          }
      }
  }(), typeof SiebelApp.S_App.OUIPerfReporter == "undefined" && (SiebelJS.Namespace("SiebelApp.S_App.OUIPerfReporter"), SiebelApp.S_App.OUIPerfReporter = function() {
      function e() {}
      return e.prototype.RefreshData = function(e) {
          var t = e;
          t instanceof JSSPropertySet || (t = CCFMiscUtil_CreatePropSet(), t.DecodeFromString(e));
          if (!t.GetProperty("OpenUIPerf")) {
              t = null;
              return
          }
          $(".siebui-perf-bar").remove(), $("body").append("<div class='siebui-perf-bar'></div>");
          var n = t.GetProperty("SqlTime"),
              r = t.GetProperty("SqlCount"),
              i = ["DB Time", "DB Count"],
              s = [n + "ms", r],
              o = "";
          o += "<div class='siebui-perf-data'>EAT MODE</div>";
          for (var u = 0; u < i.length; u++) o += "<div class='siebui-perf-data'>" + i[u] + " : " + s[u] + "</div>";
          $(".siebui-perf-bar").html("").append(o)
      }, new e
  }()), typeof SiebelAppFacade.LegacyCssSupport == "undefined" && (SiebelJS.Namespace("SiebelAppFacade.LegacyCssSupport"), define("siebel/legacycsssupport", [], function() {
      return SiebelAppFacade.LegacyCssSupport = function() {
          function t() {}
          var e = {};
          e["siebui-menu-container"] = "ApplicationMenu", e["siebui-menu"] = "ui-menubar ui-widget-header", e["siebui-menu-item"] = "siebui-appmenu-item ui-menubar-item ui-menu-item bannerDiv", e["siebui-menu-link"] = "ui-button ui-widget ui-button-text-only ui-menubar-link", e["siebui-submenu"] = "ui-menu ui-widget ui-widget-content", e["siebui-nav-container"] = "addshowactivated", e["siebui-sidebar-btn-close"] = "sidebarNavButton", e["siebui-nav-scrn"] = "siebui-nav-tabs siebui-nav-tabScreen ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible", e["siebui-nav-view"] = "siebui-nav-tabView", e["siebui-nav-subview"] = "siebui-subview-navs", e["siebui-nav-tab"] = "siebui-nav-tabs", e["siebui-nav-link"] = "siebui-nav-links ui-tabs-anchor", e["siebui-nav-item"] = "siebui-active-navtab ui-state-default ui-corner-top ui-tabs-active ui-state-active", e["siebui-nav-empty"] = "siebui-empty-tabs siebui-nav-viewlist", e["siebui-applet-container"] = "siebui-collapsible-applet-container", e["siebui-applet-header"] = "AppletButtons siebui-form-applet-header siebui-collapsible-applet-header", e["siebui-applet-content"] = "siebui-collapsible-applet-content", e["siebui-applet"] = "siebui-collapsible-applet", e["siebui-applet-btn-prev"] = "siebui-ui-btn-recnav-prev", e["siebui-applet-btn-next"] = "next-item-applet siebui-ui-btn-recnav-next", e["siebui-btn-grp"] = "siebui-buttons-standard siebui-buttons-optional siebui-buttons-search siebui-buttons-calendar", e["siebui-parent-child"] = "SiebelContentDetailContainer", e["siebui-parent-child-grandchild"] = "SiebelDetailParentContainerRelatedItemsOuterCont siebui-SiebelDetailParentContainerRelatedItemsOuterCont-sign", e["siebui-parent"] = "SiebelDetailParentContainerRelatedItems siebui-SiebelDetailParentContainerRelatedItems-sign", e["siebui-child"] = "SiebelContentListContainerRelatedItems siebui-SiebelContentListContainerRelatedItems-sign", e["siebui-grandchild"] = "SiebelContentDetailContainerRelatedItems siebui-SiebelContentDetailContainerRelatedItems-sign", e["siebui-grandchild-1"] = "SiebelContentDetailContainerRelatedItems1 siebui-SiebelContentDetailContainerRelatedItems1-sign", e["siebui-image"] = "siebui-iconMap", e["siebui-form-subsection-1"] = "siebui-formappleth1", e["siebui-form-subsection-2"] = "siebui-formappleth2", e["siebui-form-subsection-3"] = "siebui-formappleth3", e["siebui-form"] = "siebui-formapplet-column", e["siebui-ctrl-calc"] = "calculator-popup", e["siebui-ctrl-dropdown"] = "vis-dropdown", e["siebui-ctrl-row-count"] = "siebui-row-counter", e["siebui-icon-left"] = "siebui-input-popup", e["siebui-icon-calc"] = "applet-form-calculator applet-list-calculator", e["siebui-icon-currency"] = "applet-form-currency applet-list-currency", e["siebui-icon-date"] = "applet-form-date applet-list-date", e["siebui-icon-datetime"] = "applet-form-datetime applet-list-datetime", e["siebui-icon-dropdown"] = "applet-form-combo applet-list-combo", e["siebui-icon-effdate"] = "applet-form-effdat applet-list-effdat", e["siebui-icon-mvg"] = "applet-form-mvg applet-list-mvg", e["siebui-icon-pick"] = "applet-form-pick applet-list-pick", e["siebui-icon-phone"] = "applet-form-phone", e["siebui-popup-calc"] = "calculator-popup", e["siebui-label"] = "mceLabel mceGridLabel", e["siebui-value"] = "mceField mceGridField", e["siebui-label-btn"] = "siebui-file-label", e["siebui-esearch"] = "siebui-search-esearch bannerDiv", e["siebui-pdq-container"] = "PDQToolbarContainer", e["siebui-pdq"] = "PDQWidth", e["siebui-notification"] = "header-top", e["siebui-tb-cti"] = "com_siebel_applets_toolbar_CSSToolBarApplet_class ui-draggable", e["siebui-error"] = "error", e["siebui-mask-overlay"] = "siebui-logo", e["siebui-active"] = "siebui-applet-active Selected siebui-hilight", e["siebui-align-left"] = "siebui-input-align-left", e["siebui-align-center"] = "siebui-input-align-center", e["siebui-align-right"] = "siebui-input-align-right", e["siebui-ipe-ro"] = "siebui-roipe-mode", e["siebui-no-display"] = "hidden siebui-invisible-el", e["siebui-rtl"] = "container", e["siebui-no-scroll"] = "siebui-noscroll", e.miniBtnUICTop = "AppletMenu";
          var n = $.fn.addClass,
              r = $.fn.removeClass;
          return $.fn.extend({
              addClass: function() {
                  if (arguments[0] && typeof arguments[0] == "string") {
                      var t = arguments[0].trim().split(" ");
                      for (var r = 0; r < t.length; r++) e[t[r].trim()] && (arguments[0] = arguments[0] + " " + e[t[r]])
                  }
                  return n.apply(this, arguments)
              },
              removeClass: function() {
                  if (arguments[0] && typeof arguments[0] == "string") {
                      var t = arguments[0].trim().split(" ");
                      for (var n = 0; n < t.length; n++) e[t[n].trim()] && (arguments[0] = arguments[0] + " " + e[t[n]])
                  }
                  return r.apply(this, arguments)
              }
          }), t.prototype.addLegacyClass = function(t) {
              for (cls in e) e.hasOwnProperty(cls) && t.find("." + cls).length > 0 && n.call(t.find("." + cls), e[cls])
          }, new t
      }(), SiebelAppFacade.LegacyCssSupport
  }));
if (typeof SiebelApp.S_App.TranslationTable == "undefined") {
  SiebelJS.Namespace("SiebelApp.S_App.TranslationTable");
  var consts = SiebelJS.Dependency("SiebelApp.Constants"),
      utils = SiebelJS.Dependency("SiebelApp.Utils"),
      ldcValProp = consts.get("SWE_PROP_LDC_VALUE"),
      licValProp = consts.get("SWE_PROP_LIC_VALUE");
  SiebelApp.S_App.TranslationTable = function() {
      function e() {
          var e = {},
              t = {};
          this.CreateCache = function(e) {
              var t = e.GetChildCount();
              for (var n = 0; n < t; n++) {
                  var r = e.GetChild(n),
                      i = r.GetType(),
                      s = r.GetChildCount();
                  for (var o = 0; o < s; o++) {
                      var u = r.GetChild(o),
                          a = u.GetProperty(ldcValProp),
                          f = u.GetProperty(licValProp);
                      this.AddtoCache(i, a, f)
                  }
              }
          }, this.AddtoCache = function(n, r, i) {
              t[n] || (t[n] = {}), e[n] || (e[n] = {}), e[n][r] = i, t[n][i] = r
          }, this.LookupLDC = function(e, n) {
              var r = t[e],
                  i = "";
              return r && (i = r[n] || ""), i
          }, this.LookupLIC = function(t, n) {
              var r = e[t],
                  i = "";
              return r && (i = r[n] || ""), i
          }
      }
      return new e
  }()
}
typeof SiebelApp.S_App.PluginBuilder == "undefined" && (SiebelJS.Namespace("SiebelApp.S_App.PluginBuilder"), SiebelApp.S_App.PluginBuilder = function() {
  function L() {
      var e = [this],
          t = [
              []
          ],
          n = [
              []
          ],
          r = [],
          i = {},
          s = {};
      this.AddModObject = function(i) {
          var s = !1;
          return e.indexOf(i) === -1 && (e.push(i), t.push([]), n.push([]), r.push(null), s = !0), s
      }, this.GetIndex = function(t) {
          return e.indexOf(t)
      }, this.ClearPWAndCtrl = function(e) {
          var r = this.GetIndex(e);
          if (r !== -1) {
              t[r] = [];
              var i = n[r].length;
              for (var s = 0; s < i; s++) n[r][s].EndLife ? n[r][s].EndLife() : null;
              n[r] = []
          }
      }, this.DeletePWByControl = function(e, r) {
          var i = this.GetIndex(e),
              s = i === -1 ? null : t[i],
              o = s ? s.indexOf(r) : -1;
          o !== -1 && (s.splice(o, 1), n[i].splice(o, 1))
      }, this.GetPwByControl = function(e, r) {
          var i = this.GetIndex(e),
              s = i === -1 ? null : t[i],
              o = s ? s.indexOf(r) : -1;
          return o === -1 ? null : n[i][o] ? n[i][o] : null
      }, this.SetPwByControl = function(e, r, i) {
          var s = this.GetIndex(e);
          if (s !== -1) {
              var o = t[s] ? t[s] : [];
              o.push(r), n[s] ? n[s].push(i) : ""
          }
      }, this.DeleteModObj = function(i) {
          var s = this.GetIndex(i);
          s > -1 && (e.splice(s, 1), t.splice(s, 1), n.splice(s, 1), r.splice(s, 1))
      }, this.SetHoByName = function(e, t) {
          if (e in i) return;
          i[e] = t
      }, this.GetHoByName = function(e) {
          return e in i ? i[e] : null
      }, this.AddPwObj = function(e, t, n) {
          var r = s[e] || [],
              i, o;
          for (i = 0, o = r.length; i < o; i++)
              if (r[i][0] === t && r[i][1] === n) break;
          i === o && (r.push([t, n]), s[e] = r)
      }, this.GetPwObjMap = function(e) {
          return s[e] || []
      }, this.SetUIContext = function(e, t) {
          var n = this.GetIndex(e);
          n > -1 && (r[n] = t)
      }, this.GetUIContext = function(e) {
          var t = this.GetIndex(e);
          return t === -1 ? null : r[t]
      }
  }

  function A(e, t, n) {
      var r = null,
          i = this.GetIndex(e);
      if (i !== -1) {
          var s = null;
          t && typeof t.GetName == "function" && (s = t.GetName()), n && s && this.DeletePWByControl(e, t), r = this.GetPwByControl(e, t), !r && s && (r = O.call(this, t, e.GetPM().GetObjName()), r && (this.SetPwByControl(e, t, r), D.call(this, e, r), r.Init()))
      }
      return r
  }

  function O(e, t) {
      var n = null;
      return n = M.call(this, e, t) || _.call(this, e), n ? new n(e) : new SiebelAppFacade.BasePW(e)
  }

  function M(e, t) {
      var n = null,
          r = this.GetPwObjMap(e.GetUIType());
      for (var i = r.length - 1; i >= 0; i--)
          if (r[i][1].call(window, e, t)) {
              n = r[i][0];
              break
          } return n
  }

  function _(e) {
      var t = SiebelAppFacade.BasePW;
      if (e && typeof e.GetUIType == "function") switch (e.GetUIType()) {
          case n:
          case r:
          case i:
              t = SiebelAppFacade.DatePW;
              break;
          case s:
              t = SiebelAppFacade.DropDownPW;
              break;
          case o:
          case u:
          case a:
          case l:
          case f:
          case h:
          case p:
              t = SiebelAppFacade.FieldPW;
              break;
          case c:
              t = SiebelAppFacade.ButtonPW;
              break;
          case v:
          case d:
          case g:
          case m:
              t = SiebelAppFacade.LinkPW;
              break;
          case y:
              t = SiebelAppFacade.CheckBoxPW;
              break;
          case E:
              t = SiebelAppFacade.FilePW;
              break;
          case b:
              t = SiebelAppFacade.RadioPW;
              break;
          case w:
              t = SiebelAppFacade.PlainTextPW;
              break;
          case S:
              t = SiebelAppFacade.CalculatorPW;
              break;
          case x:
              t = SiebelAppFacade.RTCEditorPW;
              break;
          case T:
              t = SiebelAppFacade.ImgCtrlPW;
              break;
          case N:
              t = SiebelAppFacade.ChartsPW;
              break;
          case C:
              t = SiebelAppFacade.BasePW;
              break;
          case k:
              t = SiebelAppFacade.NullControlPW
      }
      return t
  }

  function D(e, n) {
      if (e && typeof e.GetPM == "function") {
          var r = e.GetPM();
          n.GetUIWrapper = function(e) {
              return function() {
                  return e.GetUIWrapper.apply(e, arguments)
              }
          }(e), n.GetUIContext = function(e) {
              return function() {
                  var t = SiebelApp.S_App.PluginBuilder.GetUIContext(e);
                  if (t) return t.apply(e, arguments)
              }
          }(e), n.OnKey = function(e) {
              return function() {
                  return e.HandleKeyEvents.apply(e, arguments)
              }
          }(e), n.SetProperty = function(e) {
              return function() {
                  return e.SetProperty.apply(e, arguments)
              }
          }(r), n.Get = function(e) {
              return function() {
                  return e.Get.apply(e, arguments)
              }
          }(r), n.ExecuteMethod = function(e) {
              return function() {
                  return e.ExecuteMethod.apply(e, arguments)
              }
          }(r), n.OnControlEvent = function(e) {
              return function() {
                  return e.OnControlEvent.apply(e, arguments)
              }
          }(r), n.Helper = function(e) {
              return t.IsEmpty(e) ? null : SiebelApp.S_App.PluginBuilder.GetHoByName(e)
          };
          var i = n.ShowUI;
          n.ShowUI = function() {
              return this.CacheState("CtrlEndLife"), i.apply(this, arguments)
          }
      }
  }
  var e = SiebelJS.Dependency("SiebelApp.Constants"),
      t = SiebelJS.Dependency("SiebelApp.Utils"),
      n = e.get("SWE_CTRL_DATE_PICK"),
      r = e.get("SWE_CTRL_DATE_TIME_PICK"),
      i = e.get("SWE_CTRL_DATE_TZ_PICK"),
      s = e.get("SWE_CTRL_COMBOBOX"),
      o = e.get("SWE_CTRL_TEXT"),
      u = e.get("SWE_CTRL_TEXTAREA"),
      a = e.get("SWE_CTRL_PWD"),
      f = e.get("SWE_CTRL_MVG"),
      l = e.get("SWE_CTRL_PICK"),
      c = e.get("SWE_PST_BUTTON_CTRL"),
      h = e.get("SWE_CTRL_EFFDAT"),
      p = e.get("SWE_CTRL_CURRENCY_CALC"),
      d = e.get("SWE_CTRL_URL"),
      v = e.get("SWE_CTRL_MAILTO"),
      m = e.get("SWE_CTRL_LABEL"),
      g = e.get("SWE_CTRL_LINK"),
      y = e.get("SWE_CTRL_CHECKBOX"),
      b = e.get("SWE_CTRL_RADIO"),
      w = e.get("SWE_CTRL_PLAINTEXT"),
      E = e.get("SWE_CTRL_FILE"),
      S = e.get("SWE_CTRL_CALC"),
      x = e.get("SWE_CTRL_RTCEMBEDDED"),
      T = e.get("SWE_CTRL_IMAGECONTROL"),
      N = e.get("SWE_CTRL_CHARTCONTROL"),
      C = e.get("SWE_CTRL_HIDDEN"),
      k = "null";
  return L.prototype.GetUIWrapper = function(e, t) {
      return A.call(this, this, e, t)
  }, L.prototype.DecorateCapability = function(e) {
      this.AddModObject(e) && (e.GetUIWrapper = function(e, t) {
          return A.call(SiebelApp.S_App.PluginBuilder, this, e, t)
      })
  }, L.prototype.ResetPW = function(e) {
      e instanceof L || this.ClearPWAndCtrl(e)
  }, L.prototype.DeleteCapability = function(e) {
      e instanceof L || this.DeleteModObj(e)
  }, L.prototype.AttachHelper = function(e, n) {
      n && !t.IsEmpty(e) && (this.SetHoByName(e, n), n.Init())
  }, L.prototype.AttachPW = function(e, t, n) {
      t && typeof n == "function" && this.AddPwObj(e, t, n)
  }, new L
}()), typeof SiebelAppFacade.EventHelper == "undefined" && (SiebelJS.Namespace("SiebelAppFacade.EventHelper"), define("siebel/eventhelper", ["siebel/decisionmanager"], function() {
  return SiebelAppFacade.EventHelper = function() {
      function n() {}

      function r() {
          var e = arguments[0],
              t = e.data.funRef;
          t.apply(this, arguments), e.data.prevDefault && e.preventDefault()
      }
      var e = {
              down: ["touchstart", "mousedown"],
              start: ["touchstart", "mousedown"],
              click: ["click"],
              tap: ["tap"],
              up: ["touchend", "mouseup"],
              end: ["touchend", "mouseup"],
              move: ["touchmove", "mousemove"],
              over: ["mouseover"],
              out: ["mouseout"],
              cancel: ["touchcancel", "mouseout"],
              enter: ["mouseenter"],
              leave: ["mouseleave"],
              hover: ["mousehover"],
              focus: ["focus"],
              blur: ["blur"],
              keydown: ["keydown"],
              downIE10: ["MSPointerDown"],
              startIE10: ["MSPointerDown"],
              clickIE10: ["click"],
              upIE10: ["MSPointerUp"],
              endIE10: ["MSPointerUp"],
              moveIE10: ["MSPointerMove"],
              overIE10: ["MSPointerOver"],
              outIE10: ["MSPointerOut"],
              cancelIE10: ["MSPointerCancel"],
              enterIE10: ["MSPointerEnter"],
              leaveIE10: ["MSPointerLeave"],
              hoverIE10: ["MSPointerHover"],
              focus: ["focus"],
              blur: ["blur"],
              keydown: ["keydown"],
              downIE11: ["pointerdown"],
              startIE11: ["pointerdown"],
              clickIE11: ["click"],
              upIE11: ["pointerup"],
              endIE11: ["pointerup"],
              moveIE11: ["pointermove"],
              overIE11: ["pointerover"],
              outIE11: ["pointerout"],
              cancelIE11: ["pointercancel"],
              enterIE11: ["pointerenter"],
              leaveIE11: ["pointerleave"],
              hoverIE11: ["pointerhover"],
              focus: ["focus"],
              blur: ["blur"],
              keydown: ["keydown"]
          },
          t = window.navigator.pointerEnabled || window.PointerEvent ? "IE11" : window.navigator.msPointerEnabled ? "IE10" : "";
      return n.prototype.Init = function() {}, n.prototype.GetName = function() {
          return "EventHelper"
      }, n.prototype.CanManage = function() {}, n.prototype.Manage = function(n, i, s, o, u) {
          var a, f, l, c;
          o = typeof o != "function" ? s : o, s = typeof s == "function" ? {} : s, f = typeof i == "string" ? [i] : Array.prototype.slice.call(i);
          for (var h = 0, p = f.length; h < p; h++)
              if (f[h].indexOf("swipe") === -1) {
                  l = e[f[h] + t] || f[h], typeof l == "string" && (l = [l]), c = l ? l.length : 0;
                  for (var d = 0; d < c; d++) a = l[d].indexOf("touch") !== -1 && SiebelAppFacade.DecisionManager.IsTouch() ? !0 : !1, s.funRef = o, s.prevDefault = a, n.off(l[d], u || null, s, r).on(l[d], u || null, s, r)
              } return this
      }, new n
  }(), SiebelApp.S_App.PluginBuilder.AttachHelper(SiebelAppFacade.EventHelper.GetName(), SiebelAppFacade.EventHelper), SiebelAppFacade.EventHelper
})), typeof SiebelAppFacade.ResponsiveFieldHO == "undefined" && (SiebelJS.Namespace("SiebelAppFacade.ResponsiveFieldHO"), define("siebel/responsivefieldho", [], function() {
  return SiebelAppFacade.ResponsiveFieldHO = function() {
      function e() {}

      function t(e, t) {
          var r = SiebelApp.S_App.PluginBuilder.GetHoByName("EventHelper"),
              u, a, f, l = !1;
          return !e || e.length === 0 ? l : (e.hasClass("siebui-responsive-field-container") || (u = e.find('input[type != "checkbox"][type != "radio"], textarea'), u.length > 0 && r && (u = u.filter(function() {
              var e = !1,
                  r = $(this),
                  i = n(r.attr("aria-labelledby"));
              i = i ? "#" + i : "";
              var s = r.parent();
              a = s.find(i), a = a.length ? a : s.parent().find(i);
              var o;
              return a.length === 1 && (o = a.parent(), o.length && (o[0] === s[0] || o[0].nextElementSibling === s[0]) && (o[0] === s[0] ? s.addClass("siebui-responsive-field") : s.parent().addClass("siebui-responsive-field"), a.addClass("siebui-responsive-label"), (!this.placeholder || this.placeholder.trim() === "") && a.text() && (r.data("placehldr", a.text()), this.placeholder = a.text()), e = !0)), a.length && (e && this.value && this.value.trim() !== "" || t) && a[0].parentElement.classList.add("siebui-responsive-label-active"), s = o = null, e
          }), u.length > 0 && ($(e).addClass("siebui-responsive-field-container").off("focus.responsive blur.responsive input.responsive").on("focus.responsive", ".siebui-responsive-field input[type != 'checkbox'][type != 'radio'], .siebui-responsive-field textarea", {
              ctx: this
          }, o).on("blur.responsive", ".siebui-responsive-field input[type != 'checkbox'][type != 'adio'], .siebui-responsive-field textarea", {
              ctx: this
          }, s).on("input.responsive", ".siebui-responsive-field input[type != 'checkbox'][type != 'radio'], .siebui-responsive-field textarea", {
              ctx: this
          }, i), l = !0)), u = null), l)
      }

      function n(e) {
          return (e || "").trim().replace(/[!"#$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g, "\\$&")
      }

      function r(e, t) {
          return e.closest(".siebui-responsive-field").find(t ? "#" + t : "")
      }

      function i(e) {
          var t = e.target,
              i = r($(t), n(this.getAttribute("aria-labelledby")));
          t && i && i.length == 1 && t.value.trim() != "" ? i[0].parentElement.classList.add("siebui-responsive-label-active") : t.value.trim() == "" && i[0].parentElement.classList.remove("siebui-responsive-label-active")
      }

      function s(e) {
          var t = e.target,
              i, s;
          s = this.getAttribute("aria-readonly"), i = r($(t), n(this.getAttribute("aria-labelledby"))), t && i && i.length == 1 && (t.value.trim() == "" ? (t.value = "", (!t.placeholder || t.placeholder.trim() == "") && (!s || s == "false") && (t.placeholder = $(t).data("placehldr") ? $(t).data("placehldr") : i.text()), (!s || s == "false") && i[0].parentElement.classList.remove("siebui-responsive-label-active")) : i[0].parentElement.classList.add("siebui-responsive-label-active")), t && t.parentElement && t.parentElement.classList.remove("siebui-responsive-value-active")
      }

      function o(e) {
          var t = e.target,
              i = r($(t), n(this.getAttribute("aria-labelledby")));
          t && i && i.length && t.parentElement.classList.add("siebui-responsive-value-active")
      }

      function u() {
          var e = this.GetPM(),
              t = e.Get("IsInQueryMode");
          if (!t) {
              var i = $("#s_" + e.Get("GetFullId") + "_div"),
                  s;
              if (!i) return;
              s = i.find(".siebui-responsive-field input, .siebui-responsive-field textarea");
              var o, u;
              for (var a = 0, f = s.length; a < f; a++) {
                  var l = s[a].getAttribute("aria-readonly"),
                      c = s[a].getAttribute("aria-labelledby");
                  c && c.length && (o = r(s.eq(a), n(c)), o.length === 1 && (u = o.parent(), u[0] && (u[0] === $(s[a]).parent()[0] || u[0].nextElementSibling === $(s[a]).parent()[0]) && (s[a].value.trim() === "" ? (o[0].parentElement.classList.remove("siebui-responsive-label-active"), s[a].placeholder = $(s[a]).data("placehldr") || o.text()) : s[a].value && s[a].value.trim() !== "" && o[0].parentElement.classList.add("siebui-responsive-label-active"))))
              }
              o = u = null
          }
      }
      return e.prototype.Init = function() {}, e.prototype.GetName = function() {
          return "ResponsiveFieldHO"
      }, e.prototype.SetUp = function(e, n) {
          SiebelApp.Utils.IsTrue(SiebelApp.S_App.IsLabelResponsive()) && (t.call(this, n, e.GetPM().Get("IsInQueryMode")), e.AttachPMBinding("UpdateStateChange", u), e.AttachPMBinding("ShowSelection", u), e.AttachPMBinding("ShowUI", function(e, n) {
              if (n) {
                  var r = this.GetPM();
                  t.call(this, $("#s_" + r.Get("GetFullId") + "_div"), r.Get("IsInQueryMode"))
              }
          }), e.AttachPMBinding("UpdateConditionals", function() {
              var e = this.GetPM();
              t.call(this, $("#s_" + e.Get("GetFullId") + "_div"), e.Get("IsInQueryMode"))
          }))
      }, new e
  }(), SiebelApp.S_App.PluginBuilder.AttachHelper(SiebelAppFacade.ResponsiveFieldHO.GetName(), SiebelAppFacade.ResponsiveFieldHO), SiebelAppFacade.ResponsiveFieldHO
})), define("siebel/decisionmanager", SiebelAppFacade.DecisionManager = {
  IsTouch: function() {
      return Modernizr.touchevents
  },
  PauseVKeyboard: function(e) {
      Modernizr.touchevents && !e.prop("readonly") && (e.attr("readonly", "readonly"), e.data("falseRead", !0))
  },
  ResumeVKeyboard: function(e) {
      Modernizr.touchevents && e.data("falseRead") && setTimeout(function() {
          e.removeAttr("readonly"), e.removeData("falseRead"), e = null
      }, 0)
  }
}), (!!navigator.platform.match(/iPhone|iPod|iPad/) && !!navigator.userAgent.match(/ OS (?:[8-9]|(?:[1-9][0-9]))_/) || !navigator.userAgent.match(/ Mobile /) && !!navigator.userAgent.match(/ Android /)) && function() {
  var e = $.fn.focus;
  $.fn.focus = function() {
      if (["input", "textarea", "select"].indexOf((this.nodeName || this[0] && this[0].nodeName || "").toLowerCase()) !== -1 && (this.type || this[0] && this[0].type || "").toLowerCase() !== "radio") {
          $(this).triggerHandler("focus");
          var t = this;
          return $("body").one("focusout", function(e) {
              e.target != t[0] && e.relatedTarget != t[0] && $(t).triggerHandler("blur")
          }), this
      }
      return e.apply(this, arguments)
  }, $(document).on("touchstart", function(e) {
      $(e.target).closest(".ui-autocomplete").length || $(".ui-autocomplete.ui-widget:visible").styleHide()
  })
}(), typeof SiebelApp.SiebelNotification == "undefined" && (SiebelJS.Namespace("SiebelApp.SiebelNotification"), define("siebel/siebelnotification", ["siebel/websocketmgr"], function() {
  return SiebelApp.SiebelNotification = function() {
      function e(e, t) {
          var n = null;
          return window.Notification ? window.Notification.permission === "granted" ? n = new Notification(e, t) : SiebelJS.Debug("[NOTIFICATION][Warning]Web notification is disabled by user") : (t.title = e, n = SiebelApp.NotificationManager.CreateNotification(t)), n
      }
      return window.Notification ? e.permission = Notification.permission : e.permission = "granted", e.requestPermission = function(t) {
          window.Notification ? Notification.requestPermission(function(n) {
              e.permission = n, t && t(n)
          }) : t && t("granted")
      }, e
  }(), SiebelApp.SiebelNotification
})), typeof SiebelApp.S_App.NotifyObject == "undefined" && (SiebelJS.Namespace("SiebelApp.S_App.NotifyObject"), SiebelApp.S_App.NotifyObject = function() {
  function e() {
      var e = [],
          t = {};
      this.GetAppletRegistry = function() {
          return e
      }, this.GetStateModel = function() {
          return t
      }, this.SetBegRow = function(e, t) {
          this.GetStateModel()[e].begRow = t
      }, this.GetBegRow = function(e) {
          return this.GetStateModel()[e].begRow
      }, this.SetDoPopulate = function(e, t) {
          this.GetStateModel()[e].doPopulate = t
      }, this.GetDoPopulate = function(e) {
          return this.GetStateModel()[e].doPopulate
      }, this.SetEnableUIUpdate = function(e, t) {
          this.GetStateModel()[e].EnableUIUpdate = t
      }, this.GetEnableUIUpdate = function(e) {
          return this.GetStateModel()[e].EnableUIUpdate
      }
  }
  return e.prototype.Get_EnableUIUpdate = function(e) {
      return this.GetEnableUIUpdate(e)
  }, e.prototype.Get_DoPopulate = function(e) {
      return this.GetDoPopulate(e)
  }, e.prototype.Set_DoPopulate = function(e, t) {
      return this.SetDoPopulate(e, t)
  }, e.prototype.GetCurrRow = function(e) {
      return this.GetStateModel()[e].currRow
  }, e.prototype.SetCurrRow = function(e, t) {
      this.GetStateModel()[e].currRow = t
  }, e.prototype.GetWorkSetSize = function(e) {
      return this.GetStateModel()[e].size
  }, e.prototype.SetWorkSetSize = function(e, t) {
      this.GetStateModel()[e].size = t
  }, e.prototype.Register = function(e) {
      var t = {
          doPopulate: !1,
          EnableUIUpdate: !0,
          begRow: 0,
          currRow: 0,
          size: 1
      };
      this.GetStateModel()[e.GetName()] = t, this.GetAppletRegistry().push(e)
  }, e.prototype.DeRegister = function(e) {
      var t = SiebelApp.Utils.IndexOf(this.GetAppletRegistry(), e);
      t > -1 && (delete this.GetStateModel()[e.GetName()], this.GetAppletRegistry().splice(t, 1))
  }, e.prototype.Notify = function(e) {
      var t = this.GetAppletRegistry();
      for (var n = 0, r = t.length; n < r; n++) t[n].Notify(e)
  }, e.prototype.NotifyGeneric = function(e, t) {
      var n = this.GetAppletRegistry();
      for (var r = 0; r < n.length; r++) n[r].NotifyGeneric(e, t)
  }, e.prototype.NotifyBeginNotifys = function() {
      var e = this.GetAppletRegistry();
      for (var t = 0, n = e.length; t < n; t++) {
          if (e[t] && !this.GetEnableUIUpdate(e[t].GetName())) continue;
          e[t].NotifyBeginNotifys()
      }
  }, e.prototype.NotifyNewPrimary = function(e) {
      var t = this.GetAppletRegistry();
      for (var n = 0, r = t.length; n < r; n++) t[n].NotifyNewPrimary(e)
  }, e.prototype.NotifyNewData = function(e) {
      var t = this.GetAppletRegistry();
      for (var n = 0, r = t.length; n < r; n++) {
          if (this.GetEnableUIUpdate(t[n].GetName()) === !1) continue;
          t[n].NotifyNewData(), t[n].FireOnChangeRecord()
      }
  }, e.prototype.NotifyEndNotifys = function(e) {
      var t = this.GetAppletRegistry();
      for (var n = 0, r = t.length; n < r; n++) t[n].NotifyEndNotifys()
  }, e.prototype.NotifyNewActiveRow = function() {
      var e = this.GetAppletRegistry();
      for (var t = 0, n = e.length; t < n; t++) {
          if (this.GetEnableUIUpdate(e[t].GetName()) === !1) continue;
          e[t].NotifyNewActiveRow(), e[t].FireOnChangeRecord()
      }
  }, e.prototype.NotifyDeleteRecord = function(e, t) {
      var n = this.GetAppletRegistry();
      for (var r = 0, i = n.length; r < i; r++) n[r].NotifyDeleteRecord(e, t)
  }, e.prototype.NotifyDeleteWorkSet = function(e, t, n) {
      var r = this.GetAppletRegistry();
      for (var i = 0, s = r.length; i < s; i++) this.SetDoPopulate(r[i].GetName(), !0)
  }, e.prototype.NotifyInsertWorkSet = function(e, t) {
      var n = this.GetAppletRegistry();
      for (var r = 0, i = n.length; r < i; r++) this.SetDoPopulate(n[r].GetName(), !0)
  }, e.prototype.NotifyNewFieldData = function(e, t) {
      var n = this.GetAppletRegistry();
      for (var r = 0, i = n.length; r < i; r++) n[r].NotifyNewFieldData(e)
  }, e.prototype.NotifyNewFieldList = function() {
      var e = this.GetAppletRegistry();
      for (var t = 0, n = e.length; t < n; t++) e[t].NotifyNewFieldList()
  }, e.prototype.NotifyNewSelection = function(e) {
      var t = this.GetAppletRegistry();
      for (var n = 0, r = t.length; n < r; n++) {
          if (this.GetEnableUIUpdate(t[n].GetName()) === !1) continue;
          t[n].UpdateRowCounter()
      }
  }, e.prototype.NotifyChangeSelection = function() {
      var e = this.GetAppletRegistry();
      for (var t = 0, n = e.length; t < n; t++) e[t].NotifyChangeSelection(), e[t].FireOnChangeRecord()
  }, e.prototype.NotifyNewDataWS = function(e) {
      var t = this.GetAppletRegistry();
      for (var n = 0, r = t.length; n < r; n++) t[n].NotifyNewDataWS(e)
  }, e.prototype.NotifyNewRecordDataWS = function(e) {
      for (var t = 0; t < this.GetAppletRegistry().length; t++) this.GetAppletRegistry()[t].NotifyNewRecordDataWS()
  }, e.prototype.NotifyNewData = function(e) {
      var t = this.GetAppletRegistry();
      for (var n = 0, r = t.length; n < r; n++) {
          if (this.GetEnableUIUpdate(t[n].GetName()) === !1) continue;
          this.SetDoPopulate(t[n].GetName(), !0), t[n].FireOnChangeRecord()
      }
  }, e.prototype.NotifyNewRecordData = function(e) {
      var t = this.GetAppletRegistry();
      for (var n = 0, r = t.length; n < r; n++) {
          if (this.GetEnableUIUpdate(t[n].GetName()) === !1) continue;
          this.SetDoPopulate(t[n].GetName(), !0)
      }
  }, e.prototype.NotifyNewRecord = function() {
      var e = this.GetAppletRegistry();
      for (var t = 0, n = e.length; t < n; t++) {
          if (this.GetEnableUIUpdate(e[t].GetName()) === !1) continue;
          this.SetDoPopulate(e[t].GetName(), !0), (!e[t].GetView() || e[t].GetView().IsAppletActive(e[t])) && e[t].SetFocusDefaultControl(!0), e[t].FireOnChangeRecord()
      }
  }, e.prototype.NotifyBeginQuery = function() {
      var e = this.GetAppletRegistry();
      for (var t = 0, n = e.length; t < n; t++) e[t].NotifyBeginQuery()
  }, e.prototype.NotifyNewQuerySpec = function() {
      var e = this.GetAppletRegistry();
      for (var t = 0, n = e.length; t < n; t++) e[t].NotifyNewQuerySpec()
  }, e.prototype.NotifyNewFieldQuerySpec = function(e) {
      var t = this.GetAppletRegistry();
      for (var n = 0, r = t.length; n < r; n++) t[n].NotifyNewFieldQuerySpec(e)
  }, e.prototype.NotifyEndQuery = function() {
      var e = this.GetAppletRegistry();
      for (var t = 0, n = e.length; t < n; t++) e[t].NotifyEndQuery()
  }, e.prototype.NotifyScrollAmount = function(e, t) {
      var n = this.GetAppletRegistry();
      for (var r = 0, i = n.length; r < i; r++) n[r].NotifyScrollAmount(e, t)
  }, e.prototype.NotifyExecute = function() {
      var e = this.GetAppletRegistry();
      for (var t = 0, n = e.length; t < n; t++) e[t].NotifyExecute()
  }, e.prototype.NotifyStateChanged = function(e, t) {
      var n = this.GetAppletRegistry();
      for (var r = 0, i = n.length; r < i; r++) n[r].NotifyStateChanged(e, t)
  }, e.prototype.NotifyPageRefresh = function() {
      var e = this.GetAppletRegistry();
      for (var t = 0, n = e.length; t < n; t++) e[t].NotifyPageRefresh()
  }, e
}()), typeof SiebelApp.S_App.View == "undefined" && (SiebelJS.Namespace("SiebelApp.S_App.View"), SiebelApp.S_App.View = function() {
  function p() {
      var e = {},
          t = {},
          r = null,
          i = null,
          s = null,
          o = null,
          u = null;
      this.GetAppletMap = function() {
          return e
      }, this.SetActiveAppletOnLoad = function(e) {
          s = e
      }, this.GetActiveAppletOnLoad = function() {
          return s
      }, this.SetActiveAppletInternal = function(e) {
          o = e
      }, this.GetActiveApplet = function() {
          return o
      }, this.SetActiveAppletBeforePopup = function(e) {
          u = e
      }, this.GetActiveAppletBeforePopup = function() {
          return u
      }, this.AddToolbar = function(e) {
          n.push(e)
      }, this.GetControls = function() {
          return t
      }, this.ClearControls = function() {
          t = null, t = {}
      }, this.GetCanInvokeByName = function() {
          return i
      }, this.SetCanInvokeByName = function() {
          i = []
      }, this.GetCanInvokeArray = function() {
          return r
      }, this.SetCanInvokeArray = function() {
          r = []
      }, SiebelApp.S_App.ErrorObject.DecorateErrorCapability(this)
  }

  function d(e) {
      this.GetAppletMap()[e.GetName()] = e
  }

  function v(e) {
      e && (SiebelApp.S_App.SetExternalActiveApplet(null), this.SetActiveAppletInternal(e), e.SetAppletActive(!0, e), e.SetFocusDefaultControl(!0), e.FocusDefaultControl())
  }

  function m(e) {
      var t = this.GetApplet(e);
      t && (t.Initialize(), SiebelAppFacade.ComponentMgr.FindComponent({
          id: e
      }).Show(), t.ShowOnly(), t.ShowSelection(), t.HasCustomShadow() && t.shadow && typeof t.shadow.OnLoad == "function" && t.shadow.OnLoad()), v.call(this, this.GetActiveAppletOnLoad()), SiebelApp.S_App.GetCmdMgr().UpdateUIControls()
  }

  function g(n) {
      var r, i = SiebelApp.S_App.GetRequestDefault();
      return i.SetProperty(t.get("SWE_APPLET_STR"), n), i.SetProperty(t.get("SWE_CMD_ARG"), t.get("SWE_GET_APPLET_LAYOUT")), r = e.EncodeToQueryString(i), SiebelApp.S_App.GetPageURL() + t.get("SWE_ARG_START") + r
  }

  function y(n, r) {
      var i = !1;
      i = e.IsTrue(n.GetProperty(t.get("SWE_PROP_IS_PARTIAL")));
      if (i) {
          var s, o, u, a = new $.Deferred;
          s = n.GetProperty(t.get("SWE_PROP_NAME")), o = n.GetProperty(t.get("SWE_PROP_TOGGLE_VAR_NAME")), u = n.GetProperty(t.get("SWE_PROP_VAR_NAME")), e.IsEmpty(u) && (u = n.GetValue(), s = this.GetAppletById(u).GetName());
          var f = g(s);
          return e.IsEmpty(o) ? (SiebelApp.S_App.uiStatus.Busy({
              target: $("#" + u),
              mask: !0
          }), $("#" + u).attr("src", f)) : (SiebelApp.S_App.uiStatus.Busy({
              target: $("#" + o),
              mask: !0
          }), $("#" + o).attr("id", u).attr("src", f)), !e.IsEmpty(f) && !e.IsEmpty(o) && n.SetProperty("RemoveOldApplet", !0), SiebelApp.contentUpdater.AddCallBack(f, function() {
              a.resolveWith(this)
          }, this), r.push({
              func: function(e, t) {
                  m.call(e, t), SiebelApp.S_App.NavCtrlMgr.ShowVisDropdown(), SiebelJS.Debug("Loaded applet:" + t), SiebelApp.S_App.uiStatus.Free()
              },
              tgt: this,
              applet: s
          }), SiebelApp.contentUpdater.loadContent(), a.promise()
      }
  }

  function b(e) {
      var n = e.GetProperty(t.get("SWE_PROP_CAN_INVOKE"));
      typeof n == "string" && w.call(this, n)
  }

  function w(e) {
      var t = [],
          n = !0;
      CCFMiscUtil_StringToArray(e, t), this.GetCanInvokeByName() || this.SetCanInvokeByName(), this.SetCanInvokeArray();
      if (t.length >= 2)
          for (var r = 0, i = t.length; r < i; r += 2) {
              var s = SiebelApp.S_App.LookupStringCache(t[r]),
                  o = t[r + 1];
              s && (n = o === "1" ? !0 : !1, this.GetCanInvokeArray().push(s), this.GetCanInvokeByName()[s] = {
                  bCanInvoke: n
              })
          }
  }

  function E() {
      $("#" + this.GetThreadBarPlaceHolder()).html(this.GetThreadBarHTML()).addClass(SiebelApp.S_App.GetDirection() ? " siebui-rtl-element-right" : "")
  }

  function S(e) {
      var t = e
          .GetChildCount(),
          n;
      for (n = 0; n < t; n++) x.call(this, e.GetChild(n))
  }

  function x(e) {
      var n = SiebelApp.S_App.LookupStringCache,
          r = CCFMiscUtil_CreatePropSet(),
          i = SiebelApp.S_App.IsAutoOn();
      r.SetProperty(t.get("SWE_PROP_NAME"), n(e.GetProperty(t.get("SWE_PROP_NAME")))), r.SetProperty(t.get("SWE_PROP_TMPL_ITM_HOLDER"), e.GetProperty(t.get("SWE_PROP_TMPL_ITM_HOLDER"))), r.SetProperty(t.get("SWE_PROP_TYPE"), n(e.GetProperty(t.get("SWE_PROP_TYPE")))), r.SetProperty(t.get("SWE_PROP_SEQ"), e.GetProperty(t.get("SWE_PROP_SEQ"))), r.SetProperty(t.get("SWE_PROP_DISP_NAME"), n(e.GetProperty(t.get("SWE_PROP_DISP_NAME")))), r.SetProperty(t.get("SWE_PROP_JUSTIFICATION"), n(e.GetProperty(t.get("SWE_PROP_JUSTIFICATION")))), r.SetProperty(t.get("SWE_PROP_MTHD_NAME"), n(e.GetProperty(t.get("SWE_PROP_MTHD_NAME"))));
      if (i = e.GetChild(0) !== "undefined" && e.GetChild(0) !== null) {
          var s = CCFMiscUtil_CreatePropSet();
          s = e.GetChild(0), r.SetProperty(t.get("SWE_PROP_QTP_OT"), n(e.GetProperty(t.get("SWE_PROP_TYPE")))), r.SetProperty(t.get("SWE_PROP_QTP_RN"), n(e.GetProperty(t.get("SWE_PROP_NAME")))), r.SetProperty(t.get("SWE_PROP_QTP_UN"), n(e.GetProperty(t.get("SWE_PROP_DISP_NAME"))))
      }
      this.GetControls()[r.GetProperty(t.get("SWE_PROP_NAME"))] = r
  }
  var e = SiebelJS.Dependency("SiebelApp.Utils"),
      t = SiebelJS.Dependency("SiebelApp.Constants"),
      n = [],
      r = t.get("SWE_PST_NEW_APPLET"),
      i = t.get("SWE_PST_NEW_LIST_APPLET"),
      s = t.get("SWE_PST_NEW_CALENDARAPPLET"),
      o = t.get("SWE_PST_NEW_PLAYBARAPPLET"),
      u = t.get("SWE_PST_QTP_INFO"),
      a = t.get("SWE_PST_ACTIVE_APPLET"),
      f = t.get("SWE_PST_APPLET_INFO"),
      l = t.get("SWE_PST_ACCESSIBILITY_INFO"),
      c = t.get("SWE_PST_NEW_TREEAPPLET"),
      h = t.get("SWE_PST_CNTRL_LIST");
  return p.prototype.GetPropArray = function() {
          return SiebelApp.S_App.IsRwd() ? ["GetAppletMap", "GetName", "GetTitle", "GetControls"] : ["GetAppletMap", "GetName", "GetTitle"]
      }, p.prototype.GetMethodArray = function() {
          return SiebelApp.S_App.IsRwd() ? ["CanInvokeMethod", "InvokeMethod", "ExecuteViewUpdate"] : []
      }, p.prototype.EndLife = function() {
          var e = this.GetAppletMap();
          for (var r in e) e.hasOwnProperty(r) && (e[r] && e[r].EndLife && e[r].EndLife(), delete e[r]);
          e = null, this.SetActiveAppletInternal(null), this.SetActiveAppletOnLoad(null), this.SetActiveAppletBeforePopup(null);
          var i = this.GetName().replace(/ /g, "_") + "_" + t.get("SWE_RPC_PROP_VIEW");
          SiebelApp.ThemeManager.unLoadStyle(i);
          var s = SiebelAppFacade.ComponentMgr.FindComponent({
              id: this.GetName()
          });
          if (s) {
              var o = s.GetPR();
              o && o.EndLife && o.EndLife();
              var u = s.GetPM();
              u && u.EndLife && u.EndLife()
          }
          if (SiebelApp.S_App.IsRwd()) {
              var a, f = n.length;
              if (f > 0) {
                  for (a = 0; a < f; a++) pmName = n[a].GetPMName(), SiebelApp.S_App.GetCmdMgr().UpdateToolbarArray(pmName);
                  n = []
              }
          }
          SiebelAppFacade.ComponentMgr.DeRegisterLevel(this), SiebelApp.S_App.ErrorObject.DeleteErrorObj(this)
      }, p.prototype.GetApplet = function(e) {
          return this.GetAppletMap()[e] || null
      }, p.prototype.GetAppletById = function(e) {
          var t = this.GetAppletMap(),
              n = null;
          for (var r in t)
              if (t.hasOwnProperty(r) && t[r].GetVarName() == e) {
                  n = t[r];
                  break
              } return n
      }, p.prototype.RemoveApplet = function(e, t) {
          this.GetActiveApplet() === e && this.SetActiveAppletInternal(null), this.GetActiveAppletOnLoad() === e && this.SetActiveAppletOnLoad(null);
          var n = this.GetAppletMap()[e.GetName()];
          if (n) {
              var r = SiebelAppFacade.ComponentMgr.FindComponent({
                  id: n.GetName()
              });
              return r && SiebelAppFacade.ComponentMgr.DeleteComponent(r, this), n.EndLife && n.EndLife(t), n = null, delete this.GetAppletMap()[e.GetName()], this.ClearErrorMsg(), !0
          }
          return this.SetErrorMsg("AppErrNoSuchApplet"), !1
      }, p.prototype.DeletePopup = function() {
          var e = !1,
              t = [],
              n = this.GetAppletMap();
          for (var r in n)
              if (n.hasOwnProperty(r)) {
                  var i = n[r];
                  if (i.GetPopupApplet()) {
                      var s = i.GetPopupApplet();
                      t.push(s);
                      if (s.GetPopupApplet())
                          while (s && s.GetPopupApplet()) {
                              var o = s.GetPopupApplet();
                              t.push(o), s = o
                          }
                      var u = t.length;
                      for (var a = u - 1; a >= 0; a--) {
                          var f = t[a];
                          f.GetParentApplet().DeletePopup(), this.SetActiveAppletBeforePopup(null), e = !0
                      }
                      t = []
                  }
              } e || (v.call(this, this.GetActiveAppletBeforePopup()), this.SetActiveAppletBeforePopup(null))
      }, p.prototype.Initialize = function() {
          var e = null,
              t = this.GetAppletMap();
          for (e in t) t.hasOwnProperty(e) && t[e].Initialize();
          SiebelApp.S_App.NotifyTimer("TimeGoToView", [this.GetName(), "Objects Initialized"]);
          var n = SiebelAppFacade.ComponentMgr.FindComponent({
              id: this.GetName()
          });
          SiebelAppFacade.ComponentMgr.Show(this), n && n.Show(), t = this.GetAppletMap();
          for (e in t) t.hasOwnProperty(e) && t[e].ShowOnly();
          SiebelApp.S_App.NotifyTimer("TimeGoToView", [this.GetName(), "Finished Populate"]), t = this.GetAppletMap();
          for (e in t) t.hasOwnProperty(e) && (t[e].ShowSelection(!0), this.ClearErrorMsg(), t[e].HasCustomShadow() && t[e].shadow && typeof t[e].shadow.OnLoad == "function" && t[e].shadow.OnLoad());
          SiebelApp.S_App.NavCtrlMgr.Show(!1), v.call(this, this.GetActiveAppletOnLoad()), SiebelApp.S_App.GetCmdMgr().UpdateUIControls()
      }, p.prototype.ExecuteFrame = function(e, n) {
          var r = SiebelApp.S_App.GetRequestDefault(),
              i = CCFMiscUtil_CreatePropSet(),
              s = this.GetApplet(e),
              o = 0;
          r.SetProperty(t.get("SWE_CMD_ARG"), t.get("SWE_CMD_INVOKE_METHOD_STR")), r.SetProperty(t.get("SWE_METHOD_STR"), "ExecuteFrameQuery"), r.SetProperty(t.get("SWE_APPLET_STR"), e), r.SetProperty(t.get("SWE_VIEW_ARG"), this.GetName());
          var u = n.length;
          for (o = 0; o < u; o++) {
              var a = s.GetControl(n[o].field);
              r.SetProperty(a.GetInputName(), n[o].value)
          }
          SiebelApp.S_App.CallServer(r, i, !0, {
              async: !1,
              cb: function() {},
              scope: this
          })
      }, p.prototype.HandleRefreshLayout = function(t, n) {
          var o = t.GetChildByType("api"),
              u, a = [],
              l;
          if (!e.IsEmpty(o)) {
              var h = o.GetChildByType("vi"),
                  p = h.EnumChildren(!0);
              do {
                  var d = p.GetType();
                  switch (d) {
                      case r:
                      case s:
                      case i:
                      case c:
                          u = p.GetChild(0), l = y.call(this, u, n), l && a.push(l);
                          break;
                      case f:
                          l = y.call(this, p, n), l && a.push(l)
                  }
              } while (p = h.EnumChildren(!1))
          }
          return a
      }, p.prototype.GetFilesAndProcessObjectInfo = function(t) {
          var n = new $.Deferred,
              r = e.PrepareModuleInfo(t),
              i = this,
              s = function() {
                  try {
                      i.BuildFrame(t)
                  } catch (e) {
                      SiebelJS.Log(e)
                  }
                  i = t = null, n.resolveWith(i, ["View Process Object"])
              };
          return r.length ? require(r, s) : s(), r = null, n.promise()
      }, p.prototype.BuildFrame = function(e) {
          this.ProcessObjectInfo(e)
      }, p.prototype.DispatchNotification = function(e) {
          b.call(this, e), this.ExecuteViewUpdate()
      }, p.prototype
      .ExecuteViewUpdate = function() {}, p.prototype.CanInvokeMethod = function(e) {
          var t = !0;
          if (!e) return !1;
          if (this.GetCanInvokeByName() !== null && this.GetCanInvokeByName()[e]) {
              t = this.GetCanInvokeByName()[e].bCanInvoke;
              if (t !== undefined || t !== null) return t
          }
          return t
      }, p.prototype.ProcessObjectInfo = function(n) {
          if (n.GetType() != t.get("SWE_PST_VIEW_INFO")) {
              SiebelJS.Log("[View-ProcessObjectInfo] -> Invalid PropertySet Information.");
              return
          }
          this.m_busObj = SiebelApp.S_App.GetActiveBusObj(), SiebelApp.S_App.GetActiveBusObj().SetView(this);
          var r = e.Curry(SiebelApp.S_App.constructor.prototype.DefineAccessor, this, n);
          n.PropertyExists(t.get("SWE_PROP_NAME")) && r("GetName", "SWE_PROP_NAME"), r("GetTitle", "SWE_PROP_TITLE"), r("GetPageURL", "SWE_PROP_PAGEURL"), r("IsCacheable", "SWE_PROP_IS_CACHEABLE"), SiebelApp.S_App.IsRwd() && (n.PropertyExists(t.get("SWE_PROP_OBJECT_RESPONSIVE")) || n.SetProperty(t.get("SWE_PROP_OBJECT_RESPONSIVE"), "false"), r("IsObjResponsive", "SWE_PROP_OBJECT_RESPONSIVE"), r("GetWebTemplateName", "SWE_PROP_WEBTEMPLATE")), r("GetThreadBarHTML", "SWE_PROP_THREAD_BAR"), r("GetViewType", "SWE_PROP_VIEW_TYPE"), r("IsCacheable", "SWE_PROP_IS_CACHEABLE"), r("GetInvokeMethod", "SWE_PROP_VIEW_INVOKECOMMAND"), r("GetTaskViewTitle", "SWE_PROP_VIEW_TASKVIEWTITLE"), r("GetTaskStepTitle", "SWE_PROP_VIEW_TASKSTEPTITLE"), r("GetActiveTask", "SWE_PROP_VIEW_ACTIVETASK"), r("GetDisableCancelPDQ", "SWE_PROP_DISABLE_CANCEL_PDQ"), this.CanCancelQuery = function() {
              return !this.GetDisableCancelPDQ()
          }, SiebelAppFacade.ComponentMgr.FindComponent({
              id: this.GetName()
          }) || (n.GetProperty(t.get("SWE_UIDEF_PM_CTR")) || n.SetPropertyStr(t.get("SWE_UIDEF_PM_CTR"), "siebel/viewpm"), n.GetProperty(t.get("SWE_UIDEF_PR_CTR")) || n.SetPropertyStr(t.get("SWE_UIDEF_PR_CTR"), "siebel/viewpr"), SiebelAppFacade.ComponentMgr.MakeComponent(SiebelApp.S_App, n, this)), SiebelApp.S_App.IsRwd() && b.call(this, n), E.call(this);
          var i = n.EnumChildren(!0),
              s = SiebelAppFacade.ProxyFactory,
              o = SiebelAppFacade.ComponentMgr,
              c = null,
              p = null,
              v = null;
          while (i) {
              v = i.GetType();
              switch (v) {
                  case f:
                      var m = i.GetValue();
                      if (!e.IsEmpty(m)) {
                          c = this.GetAppletById(m), c.ProcessObjectInfo(i, !1);
                          var g = o.FindComponent(c.GetName());
                          g && g.SwitchPMnPR(i, c), d.call(this, c)
                      }
                      break;
                  case l:
                      var y = e.Curry(SiebelApp.S_App.constructor.prototype.DefineAccessor, this, i);
                      y("GetViewSummary", "SWE_PROP_VIEW_SUMMARY"), this.GetViewSummary() === undefined && (this.GetViewSummary = this.GetTitle);
                      break;
                  case u:
                      var w = e.Curry(SiebelApp.S_App.constructor.prototype.DefineAccessor, this, i);
                      w("GetObjectType", "SWE_PROP_QTP_OT"), w("GetRepstrName", "SWE_PROP_QTP_RN"), w("GetUIName", "SWE_PROP_QTP_UN");
                      break;
                  case a:
                      p = i;
                      break;
                  case h:
                      if (SiebelApp.S_App.IsRwd()) {
                          var x = n.Clone(),
                              T = x.GetChildByType(t.get("SWE_PST_CNTRL_LIST"));
                          S.call(this, T)
                      }
                      break;
                  default:
                      c = s.MakeObject(v);
                      if (c) {
                          c.SetView(this);
                          var N = i.GetChild(0),
                              C = N.GetProperty(t.get("SWE_PROP_NAME")),
                              k = this.GetAppletMap()[C],
                              L = c.ProcessObjectInfo;
                          c.SetName(C);
                          if (k) this.RemoveApplet(k, !0);
                          else if (e.IsTrue(N.GetProperty("RemoveOldApplet"))) {
                              var A = this;
                              L = function() {
                                  this.ProcessObjectInfo.apply(this, arguments), bReplace = !1, k = A.GetAppletById(N.GetProperty(t.get("SWE_PROP_TOGGLE_VAR_NAME")));
                                  if (k) {
                                      var e = this.GetBusComp(),
                                          n = k.GetBusComp();
                                      while (e) {
                                          if (e === n) {
                                              bReplace = !0;
                                              break
                                          }
                                          e = e.GetParentBusComp()
                                      }
                                      A.RemoveApplet(k, bReplace)
                                  }
                              }
                          }
                          var O = {
                              callback: L,
                              scope: c,
                              input: {
                                  ps: N
                              }
                          };
                          o.MakeComponent(this, N, c, O), d.call(this, c), o.CompleteComponent(this, N, c)
                      }
              }
              i = n.EnumChildren(!1)
          }
          if (p !== null) {
              var M = this.GetApplet(p.GetProperty(t.get("SWE_PROP_NAME"))),
                  _ = SiebelApp.S_App.GetPopupPM();
              this.SetActiveAppletOnLoad(M);
              if (_.Get("state") === t.get("POPUP_STATE_VISIBLE") && M) {
                  var D = _.Get("currPopups"),
                      P = D.length,
                      H = !1;
                  for (var B = 0; B < P; B++)
                      if (D[B].GetName() === M.GetName()) {
                          H = !0;
                          break
                      } if (!H) {
                      D.push(M);
                      var j = (M.GetMvgAssocAppletName || M.GetMvgSelectedAppletName || function() {}).call(M);
                      if (j) {
                          j = this.GetApplet(j);
                          var F = D.length,
                              I = !1;
                          for (var q = 0; q < F; q++)
                              if (D[q] === j) {
                                  I = !0;
                                  break
                              } if (!I) {
                              var R = this.GetAppletMap();
                              for (var U in R) R[U] === j && D.push(j)
                          }
                      }
                  }
              }
          }
          n = p = null
      }, p.prototype.GetThreadBarPlaceHolder = function() {
          return t.get("SWE_THREADBAR_IDENTIFIER")
      }, p.prototype.GetBusObj = function() {
          return this.m_busObj
      }, p.prototype.ExecuteUIUpdate = function() {
          var e = this.GetAppletMap();
          for (var t in e) e.hasOwnProperty(t) && e[t].ExecuteUIUpdate()
      }, p.prototype.ResetUIUpdateStates = function() {
          var e = this.GetAppletMap();
          for (var t in e) e.hasOwnProperty(t) && e[t].ResetUIUpdateStates()
      }, p.prototype.SetActiveApplet = function(e) {
          if (e && this.IsAppletActive(e)) return !0;
          var t = this.GetActiveApplet();
          return t || (t = SiebelApp.S_App.GetExternalActiveApplet()), t && !t.SetAppletActive(!1, e) ? !1 : (this.SetActiveAppletInternal(e), e && !this.GetActiveApplet().SetAppletActive(!0, e) ? !1 : (t && t !== e && t.ResetAppletState(), SiebelApp.S_App.GetCmdMgr().UpdateUIControls(), this.ClearErrorMsg(), !0))
      }, p.prototype.IsAppletActive = function(e) {
          return this.GetActiveApplet() === e
      }, p.prototype.SetActiveAppletByName = function(e, t) {
          var n = this.GetApplet(e);
          return this.SetActiveApplet(n)
      }, p.prototype.GotoSelectedTreeNode = function() {
          var e = this.GetActiveApplet();
          if (e && e.GetParentApplet()) return !0;
          var t = this.GetAppletMap();
          for (var n in t) t.hasOwnProperty(n) && t[n] && t[n].FocusSelectedTreeNode()
      }, p.prototype.GetType = function() {
          return t.get("SWE_COMPOSER_VIEW_TYPE")
      }, p.prototype.GetChildren = function() {
          var e = [],
              t = this.GetControls();
          return t && e.push(t), t = this.GetAppletMap(), t && e.push(t), e
      }, p.prototype.InvokeMethod = function(e, n, r) {
          var i = !0;
          typeof r != "undefined" && (r.psresp === !0 || r.psresp === !1) && (i = r.psresp), n.SetProperty(t.get("SWE_CMD_ARG"), t.get("SWE_CMD_INVOKE_METHOD_STR")), n.SetProperty(t.get("SWE_METHOD_STR"), e), n.SetProperty(t.get("SWE_VIEW_ID_ARG"), this.GetBusObj().GetZone()), n.SetProperty(t.get("SWE_VIEW_ARG"), this.GetName()), n.SetProperty(t.get("SWE_COUNT_STR"), SiebelApp.S_App.GetSWEReqCount());
          var s = {};
          if (typeof r == "object" || r === !0 || r === !1) s.scope = this, s.args = [], s.args.push(e), s.args.push(n), s.async = typeof r.async == "boolean" ? r.async : r, s.target = r.target, s.selfbusy = r.selfbusy || !1, s.mask = r.mask || !1;
          var o = CCFMiscUtil_CreatePropSet();
          SiebelApp.S_App.CallServer(n, o, i, r)
      }, p.prototype.CycleActiveApplet =
      function(e) {
          var t = !0,
              n = null,
              r = null,
              i = 0,
              s = [],
              o, u = this.GetActiveApplet(),
              a, f;
          if (u && u.GetParentApplet()) return !0;
          var l = this.GetAppletMap();
          for (var c in l) l.hasOwnProperty(c) && (s[i] = l[c], i++);
          var h = s.length;
          for (var p = 0; p < h; p++) {
              t && (n = s[p], t = !1);
              if (s[p] === u) {
                  o = p;
                  break
              }
              r = s[p]
          }
          if (!n) return this.SetErrorMsg("ViewErrNoApplets"), !1;
          if (!u) return this.SetActiveApplet(n);
          e ? r ? a = r : a = s[s.length - 1] : o < s.length - 1 ? a = s[o + 1] : a = s[0];
          if (!a || u === a) return !0;
          f = this.SetActiveApplet(a), f && (a.SetFocusDefaultControl(!0), a.FocusDefaultControl(!0))
      }, p
}()), typeof SiebelApp.S_App.BusObj == "undefined" && (SiebelJS.Namespace("SiebelApp.S_App.BusObj"), SiebelApp.S_App.BusObj = function() {
  function n() {
      var e = {},
          t, n = 0,
          r = [];
      this.GetBusCompByName = function(t) {
          var n = null;
          for (var r in e)
              if (e.hasOwnProperty(r) && t == e[r].GetName()) {
                  n = e[r];
                  break
              } return n
      }, this.GetBusComp = function(t) {
          for (var n in e)
              if (e.hasOwnProperty(n)) {
                  var r = e[n].GetVarName();
                  if (r == t) return e[n]
              }
      }, this.RemoveBusComp = function(e) {
          this.GetBCMap()[e.GetVarName()] && delete this.GetBCMap()[e.GetVarName()]
      }, this.GetBCMap = function() {
          return e
      }, this.GetBCArray = function() {
          var t = 0;
          for (var n in e) e.hasOwnProperty(n) && (r[t] = e[n], t += 1);
          return r
      }, this.GetView = function() {
          return t
      }, this.SetView = function(e) {
          t = e
      }, this.GetBusCompEnum = function() {
          return n
      }, this.SetBusCompEnum = function(e) {
          n = e
      }
  }
  var e = SiebelApp.Utils,
      t = SiebelApp.Constants;
  return n.prototype.AddBusComp = function(e) {
      this.GetBCMap()[e.GetVarName()] || (this.GetBCMap()[e.GetVarName()] = e)
  }, n.prototype.EndLife = function() {
      var e = this.GetBCMap();
      for (var t in e) e.hasOwnProperty(t) && (e[t] && e[t].EndLife && e[t].EndLife(), delete e[t]);
      e = null, this.SetView(null)
  }, n.prototype.GetBCtoProcess = function(t) {
      var n;
      return e.IsEmpty(t.GetValue()) || (n = this.GetBusComp(t.GetValue())), n
  }, n.prototype.ProcessObjectInfo = function(n) {
      if (n.GetType() != t.get("SWE_PST_BUSOBJ_INFO")) return;
      var r = e.Curry(SiebelApp.S_App.constructor.prototype.DefineAccessor, this, n);
      r("GetName", "SWE_PROP_NAME");
      var i = n.GetValue();
      this.GetZone = function() {
          return i
      }, this.ProcessChildObjInfo(n), n = null
  }, n.prototype.ProcessChildObjInfo = function(n) {
      var r = n.EnumChildren(!0);
      if (!r) return;
      var i = SiebelApp.S_App.BusComp,
          s = t.get("SWE_PST_NEW_BUSCOMP"),
          o = t.get("SWE_PST_BUSCOMP_INFO");
      do {
          var u = r.GetType();
          switch (u) {
              case s:
                  var a = r.GetChild(0),
                      f = this.GetBCtoProcess(a);
                  e.IsEmpty(f) && (f = new i), f.ProcessObjectInfo(a), this.AddBusComp(f);
                  break;
              case o:
                  var l = this.GetBCtoProcess(r);
                  e.IsEmpty(l) || l.ProcessObjectInfo(r)
          }
      } while (r = n.EnumChildren(!1))
  }, n.prototype.EnumBusComps = function(e) {
      var t, n;
      return e && this.SetBusCompEnum(0), this.GetBCArray() == null || this.GetBusCompEnum() >= this.GetBCArray().length ? null : (t = this.GetBCArray()[this.GetBusCompEnum()], n = this.GetBusCompEnum() + 1, this.SetBusCompEnum(n), t)
  }, n
}()), typeof SiebelApp.S_App.Applet == "undefined" && (SiebelJS.Namespace("SiebelApp.S_App.Applet"), SiebelApp.S_App.Applet = function() {
  function y() {
      var e = CCFMiscUtil_CreatePropSet(),
          n = null,
          r = null,
          i = [],
          s = [],
          o = null,
          u = null,
          a = null,
          f = null,
          l = !1,
          c = {},
          h = {},
          p, d, v = {},
          g = !1,
          y = null,
          b = 0,
          w = null,
          E = null,
          S = null,
          x, T = !1,
          N = !1,
          C = null,
          k = null,
          L = null,
          A = !1,
          O = null,
          M = null,
          _ = null,
          D = !1,
          P = !1,
          H = null,
          B = "Base",
          j = null,
          F = null,
          I = null,
          q = !1,
          R = [],
          U = !1,
          z = !1,
          W = null,
          X = !1,
          V = !1;
      this.GetCommitPending = function() {
          return V
      }, this.SetCommitPending = function(e) {
          V !== e && !this.IsInQueryMode() && (V = e, this.OnCommitStateChange(e))
      };
      var $ = !1;
      this.IsPvtFieldsDirty = function() {
          return $
      }, this.SetPvtFieldsDirty = function(e) {
          if (!e)
              for (var t in c)
                  if (this.IsPrivateField(t) && r[t].bDirty && m.indexOf(t) < 0) {
                      bIsCommitPending = !0;
                      break
                  } $ = !!e
      };
      var J = CCFMiscUtil_CreatePropSet(),
          K = !1;
      this.SetRegistered = function(e) {
          K = e
      }, this.IsRegistered = function() {
          return K
      }, this.SetGlobalPropSet = function(e) {
          J = e
      }, this.GetGlobalPropSet = function() {
          return J
      };
      var Q = null,
          G = null,
          Y = null;
      this.SetListId = function(e) {
          Q = e
      }, this.SetMenuId = function(e) {
          G = e
      }, this.SetRowCount = function(e) {
          F = e
      }, this.SetTreeId = function(e) {
          Y = e
      }, this.SetRecDetailId = function(e) {
          I = e
      }, this.GetRecDetailId = function() {
          return I
      }, this.GetListId = function() {
          return Q
      }, this.GetMenuId = function() {
          return G
      }, this.GetRowCount = function() {
          return F
      }, this.GetTreeId = function() {
          return Y
      }, this.HasPickError = function() {
          return X
      }, this.FocusOnMenu = function(e) {
          z = e
      }, this.IsMenuOnFocus = function() {
          return z
      }, this.SetHasPickError = function(e) {
          X = e
      }, this.GetScrollDir = function() {
          return y
      }, this.GetScrollAmount = function() {
          return b
      }, this.SetScrollDir = function(e) {
          y = e
      }, this.SetScrollAmount = function(e) {
          b = e
      };
      var Z = ["ExecuteQuery", "RunQuery", "ExecuteAlphaTabQuery", "SortAscending", "SortDescending"],
          et = null;
      this.SetCancelQryTimeoutObj = function(e) {
          clearTimeout(et), et = e
      }, this.GetCancelQryTimeoutObj = function() {
          return et
      }, this.GetCancelableMethodArray = function() {
          return Z
      }, this.SetUpdateConditionals = function(e) {
          U = e
      }, this.GetUpdateConditionals = function() {
          return U
      }, this.GetUIEventMap = function() {
          return R
      }, this.SetUIEventMap = function(e) {
          R.push(e)
      }, this.ClearUIEventMap = function() {
          R = []
      }, this.SetIsStandAlone = function(e) {
          l = e
      }, this.GetIsStandAlone = function() {
          return l
      }, this.GetQuerySubMode = function() {
          return B
      }, this.SetQuerySubMode = function(e) {
          B = e
      }, this.GetPopupControl = function() {
          return M
      }, this.SetPopupControl = function(e) {
          M = e
      }, this.GetPopupMethod = function() {
          return O
      }, this.SetPopupMethod = function(e) {
          O = e
      }, this.IsPopupClosed = function() {
          return A
      }, this.SetPopupClosed = function(e) {
          A = e
      }, this.GetPopupApplet = function() {
          return L
      }, this.SetPopupApplet = function(e) {
          L = e
      }, this.GetCurrencyApplet = function() {
          return H
      }, this.SetCurrencyApplet = function() {
          if (H === undefined || H === null) H = new SiebelApp.S_App.Currency(this)
      }, this.GetToggleApplet = function() {
          return W
      }, this.SetToggleApplet = function() {
          W || (W = new SiebelApp.S_App.ToggleApplet(this))
      }, this.SetNewRecordInToggle = function(e) {
          N = e
      }, this.GetNewRecordInToggle = function() {
          return N
      }, this.GetParentApplet = function() {
          return k
      }, this.SetParentApplet = function(e) {
          k = e
      }, this.GetVarName = function() {
          return C
      }, this.SetVarName = function(e) {
          C = e
      }, this.SetActiveControl = function(e) {
          w = e
      }, this.GetActiveControl = function(e) {
          return w
      }, this.SetPrsrvControl = function(e) {
          S = e
      }, this.GetPrsrvControl = function(e) {
          return S
      }, this.SetBusComp = function(
          e) {
          f = e
      }, this.GetBusComp = function() {
          return f
      }, this.SetFocusDefaultControl = function(e) {
          T = e
      }, this.GetFocusDefaultControl = function(e) {
          return T
      }, this.SetDoPopulate = function(e) {
          return g = e, !0
      }, this.GetControls = function() {
          return c
      }, this.ClearControls = function() {
          c = null, c = {}
      }, this.SetView = function(e) {
          p = e
      }, this.GetView = function() {
          return p
      }, this.SetPModel = function(e) {
          d = e
      }, this.GetPModel = function() {
          return d
      }, this.SetMenu = function(e) {
          j = e
      }, this.GetMenu = function() {
          return j
      }, this.GetCanNavigateMap = function() {
          return v
      }, this.GetConfirmMessageMap = function() {
          return h
      }, this.GetPrivateFieldMap = function() {
          return r
      }, this.SetPrivateFieldMap = function() {
          r = []
      }, this.GetMapFieldsArray = function() {
          return a
      }, this.SetMapFieldsArray = function(e) {
          a = e
      }, this.GetPopBookMark = function() {
          return _
      }, this.SetPopBookMark = function(e) {
          _ = e
      }, this.GetCanUpdateByName = function() {
          return i
      }, this.SetCanUpdateByName = function() {
          i = []
      }, this.GetCanUpdateArray = function() {
          return s
      }, this.SetCanUpdateArray = function() {
          s = []
      }, this.GetCanInvokeByName = function() {
          return u
      }, this.SetCanInvokeByName = function() {
          u = []
      }, this.GetCanInvokeArray = function() {
          return o
      }, this.SetCanInvokeArray = function() {
          o = []
      }, this.SetEnableUIUpdate = function(e) {
          D = e
      }, this.GetEnableUIUpdate = function() {
          return D
      }, this.HasCustomShadow = function() {
          return q
      }, this.SetCustomShadow = function(e) {
          q = e
      }, this.GetRowListRowCount = function() {
          return Number("1")
      }, this.GetNumRows = function() {
          return this.GetBusComp().GetNumRows()
      }, this.IsNumRowsKnown = function() {
          return this.GetBusComp().IsNumRowsKnown()
      }, this.WSHome = function() {
          var e = this.GetBusComp();
          if (e) return e.WSHome(this.GetName())
      }, this.WSNextRecord = function() {
          var e = this.GetBusComp();
          if (e) return e.WSNextRecord(this.GetName())
      }, this.SetCurRow = function(e) {
          var t = this.GetBusComp();
          if (t) return t.SetCurRow(this.GetName(), e)
      }, this.IsCurWSRecActive = function(e) {
          var t = this.GetBusComp();
          return t ? t.IsCurWSRecActive(this.GetName()) : !1
      }, this.GetName = function() {
          return n
      }, this.SetName = function(e) {
          n = e
      }, this.GetControlPS = function() {
          return e
      };
      var tt = SiebelApp.S_App.GetPopupPM();
      tt.Get("state") === t.get("POPUP_STATE_VISIBLE") && tt.Get("currPopups").push(this), this._EndLife = function() {
          this.HasServerError() && this.ProcessError(), i = null, s = null, o = null, u = null, a = null, e = null, w = null, r = null
      }, this.SetEnableExecuteUIUpdate = function(e) {
          P = e
      }, this.GetEnableExecuteUIUpdate = function() {
          return P
      }, SiebelApp.S_App.ErrorObject.DecorateErrorCapability(this)
  }

  function b(e) {
      this.SetEnableUIUpdate(e);
      var t;
      if (!this.GetBusComp()) return;
      t = this.GetBusComp().GetNotifyObject(), t && t.SetEnableUIUpdate(this.GetName(), e)
  }

  function w() {
      var n = SiebelApp.S_App.IsRwd() && e.IsTrue(this.IsObjResponsive()) ? this.GetMenuId() : t.get("SWE_MENU_IDENTIFIER") + this.GetId();
      if ($("#" + n).length == 0) return;
      var r = new SiebelApp.S_App.Menu(this);
      SiebelApp.S_App.IsRwd() && r.SetPlaceHolder(n), this.SetMenu(r), r.CreatePM("MBMenuRenderer", SiebelAppFacade.AppletMenuPresentationModel)
  }

  function E() {
      var e = this.GetPModel();
      if (e instanceof JSSPropertySet) {
          var n = e,
              r = n.GetProperty(t.get("SWE_PROP_OUI_PMODEL")),
              i = SiebelApp.S_App.GetConstructorFromKey(r) + ".",
              s = "",
              o = 0,
              u = i.indexOf(".");
          while (u != -1) {
              var a = i.substring(o, u);
              s = s == "" ? window[a] : s[a], o = u + 1, u = i.indexOf(".", o)
          }
          var f = s || SiebelAppFacade.PresentationModel;
          this.SetPModel(new f(this)), this.GetPModel().Setup(n.Clone())
      }
      this.GetPModel().Show()
  }

  function S(n, r) {
      if (SiebelApp.S_App.GetPopupPM().Get("state") === t.get("POPUP_STATE_VISIBLE") && SiebelApp.S_App.GetPopupPM().Get("isPopupSI") === !0) return !0;
      var i = this.GetActiveControl();
      if (e.IsEmpty(i)) return !1;
      var s = CCFMiscUtil_CreatePropSet(),
          o = this.GetDefaultMethod(),
          u = this.GetDefaultQryMethod(),
          a = {
              async: !0,
              scope: this,
              methodName: n,
              psInputArgs: r
          };
      if (this.IsInQueryMode() === !0) return u && this.CanInvokeMethod(u) ? u == "ExecuteQuery" ? this.InvokeMethod(u, s, a) : this.InvokeMethod(u, s) : this.InvokeMethod("ExecuteQuery", s, a);
      if (o && this.CanInvokeMethod(o)) return this.InvokeMethod(o, s);
      if (!1 === this.LeaveField(i, this.GetControlValueFromUI(i), !0)) return this.EnterField(i), !1;
      var f = this.GetBusComp();
      return f && f.IsCommitPending() ? this.InvokeMethod("WriteRecord", s) : (this.ClearErrorMsg(), !1)
  }

  function x() {
      var e = CCFMiscUtil_CreatePropSet();
      return SiebelApp.S_App.GetPopupPM().Get("isCurrencyOpen") ? !1 : this.IsInQueryMode() === !0 ? this.InvokeMethod("UndoQuery", e) : this.GetBusComp() && this.GetBusComp().IsCommitPending() ? this.InvokeMethod("UndoRecord", e) : !1
  }

  function T(e) {
      var t = 2,
          n = e[0] + ":" + e[1],
          r = CCFMiscUtil_CreatePropSet();
      if (SiebelApp.S_App.TranslationTable) {
          r.DecodeFromString(e[t]);
          var i = r.EnumChildren(!0);
          do SiebelApp.S_App.TranslationTable.AddtoCache(n, i.GetProperty(p), i.GetProperty(g)); while (i = r.EnumChildren(!1))
      }
  }

  function N(t, n, r, i, s) {
      var o;
      return n ? e.IsEmpty(i) ? o = this.GetBusComp().WSGetFieldValue(s) : o = r[i][s] : o = this.GetFieldValue(t), o
  }

  function C(e, t, n, r) {
      var i = e.GetControlMsg(),
          s, o = e.GetMessageVariableMap();
      for (var u in o)
          if (o.hasOwnProperty(u)) {
              var a = o[u],
                  f = this.GetBusComp().GetField(a).GetDataType();
              s = N.call(this, e, t, n, r, a), k.call(this, n, r, a), s = SiebelApp.S_App.LocaleObject.StringToFormatted(f, s, ""), i = i.replace("%" + u, s)
          } return i
  }

  function k(t, n, r) {
      var i = this.GetBusComp().GetField(r);
      if (i && i.GetDataType() == "currency") {
          var s, o, u, a, f = i.GetCurrField();
          u = f.indexOf("|"), u >= 0 && (a = f.substring(u + 1).indexOf("|") == -1 ? -1 : f.substring(u + 1).indexOf("|") + u, a < 0 && (a = f.length), s = f.substr(0, u), s.length != 0 && (e.IsEmpty(n) ? sCurrCode = this.GetBusComp().GetFieldValue(s) : sCurrCode = t[n][s], sCurrCode ? SiebelApp.S_App.LocaleObject.SetCurrencyCode(sCurrCode) : SiebelApp.S_App.LocaleObject.SetCurrencyCode("")), s = f.substr(u + 1, a - u - 1), s.length != 0 && (o = this.GetBusComp().GetFieldValue(s), o && SiebelApp.S_App.LocaleObject.SetExchDate(o)))
      }
  }

  function L() {
      var e = this.GetBusComp();
      return this.IsPvtFieldsDirty() || e && e.IsCommitPending()
  }

  function A(t) {
      if (t.length > 0 && t[0] === this.GetName()) {
          var n = t[1],
              r = t[2],
              i = t[3],
              s = t[4],
              o = this.GetControls()[n];
          if (!o) return;
          o.GetDisplayName = function() {
              return r
          };
          if (s !== o.GetUIType() || e.IsTrue(o.IsEditEnabled()) && !e.IsTrue(i) || !e.IsTrue(o.IsEditEnabled()) && e.IsTrue(i)) o.IsEditEnabled = function() {
                  return i
              }, e.IsTrue(i) ? o.GetUIType =
              function() {
                  return v
              } : o.GetUIType = function() {
                  return s
              }, this.HandleCtrlDefChange(o)
      }
  }

  function O(t) {
      var n, r;
      if (t.length >= 2) {
          n = t[0], r = Number(t[1]);
          if (n === this.GetName() && r >= 0) {
              var i;
              if (e.IsEmpty(this.GetBusComp())) return;
              i = this.GetBusComp().GetNotifyObject(), i && (i.SetBegRow(this.GetName(), r), this.CanUpdateUI() === !0 && i.SetDoPopulate(this.GetName(), !0))
          }
      }
  }

  function M(e, n, r) {
      var i = {},
          s = this.GetActiveControl(),
          o = this.GetView() ? this.GetView().SetActiveApplet(this) : this.SetAppletActive(!0, this),
          u = !0;
      if (o && s) {
          var a = this.GetControls();
          for (var f in a)
              if (a.hasOwnProperty(f)) {
                  var l = a[f];
                  if (l === s) switch (l.GetUIType()) {
                      case t.get("SWE_CTRL_COMBOBOX"):
                          this.FieldDropdown(e);
                          break;
                      case t.get("SWE_CTRL_CURRENCY_CALC"):
                          l.ShowPopup();
                          break;
                      case t.get("SWE_CTRL_CALC"):
                      case t.get("SWE_CTRL_DATE_PICK"):
                      case t.get("SWE_CTRL_DATE_TIME_PICK"):
                      case t.get("SWE_CTRL_DATE_TZ_PICK"):
                          this.ShowPopup(l);
                          break;
                      case t.get("SWE_CTRL_TEXT"):
                          if (l.GetPopupType() !== t.get("SWE_CTRL_DETAIL")) break;
                      case t.get("SWE_CTRL_MVG"):
                      case t.get("SWE_CTRL_PICK"):
                      case t.get("SWE_CTRL_EFFDAT"):
                          var c = this;
                          e || (i.async = !0, i.selfbusy = !0, SiebelApp.S_App.uiStatus.Busy({
                              mask: !0
                          }), i.cb = function() {
                              c.FireInvokeMethod(n, r), SiebelApp.S_App.uiStatus.Free()
                          }), this.FieldPopup(i), u = !1
                  }
              }
      }
      return u
  }
  var e = SiebelJS.Dependency("SiebelApp.Utils"),
      t = SiebelJS.Dependency("SiebelApp.Constants"),
      n = SiebelJS.Dependency("SiebelApp.S_App"),
      r = t.get("SWE_PST_CAN_NAV_STATE"),
      s = t.get("SWE_ROW_STR"),
      o = t.get("SWE_REQ_ROW_ID_STR"),
      u = t.get("SWE_ROW_IDS_STR"),
      a = t.get("SWE_PST_BUTTON_CTRL"),
      f = t.get("SWE_FIELD_STR"),
      l = t.get("SWE_RPC_PROP_RETURN_STATUS"),
      c = t.get("SWE_RPC_PROP_STATUS_COMPLETED"),
      h = t.get("SWE_RPC_PROP_STATUS_ERROR"),
      p = t.get("SWE_DISPLAY_NAME_STR"),
      d = t.get("SWE_FIELD_VALUE_STR"),
      v = t.get("SWE_CTRL_PICK"),
      m = [t.get("SWE_QUERY_COMBO_BOX"), t.get("SWE_QUERY_SEARCH_SPEC"), t.get("SWE_POPUP_QUERY_COMBO_BOX"), t.get("SWE_POPUP_QUERY_SEARCH_SPEC")],
      g = t.get("SWE_PROP_LIC_VALUE");
  return y.prototype.IsPure = function() {
          return !!this.GetBusComp()
      }, y.prototype.ResetAppletState = function() {}, y.prototype.EndLife = function(e) {
          if (this.GetMenu()) {
              var n = this.GetMenu().GetPM();
              n && n.EndLife && n.EndLife(), this.GetMenu().SetPM(null), this.SetMenu(null)
          }
          var r = this.GetPModel();
          r && r.EndLife && r.EndLife(), r = null;
          var i = this.GetName().replace(/ /g, "_") + "_" + t.get("SWE_RPC_PROP_APPLET");
          SiebelApp.ThemeManager.unLoadStyle(i);
          var s = this.GetControls();
          for (var o in s) s.hasOwnProperty(o) && (s[o].ClearMethodPropSet(), s[o].SetApplet(null), s[o].ClearRadioGroupPropSet(), delete s[o]);
          s = null, this.SetPModel(r);
          var u = this.GetBusComp();
          if (u) {
              var a = u.GetNotifyObject();
              a && (!e && a.GetAppletRegistry().length === 1 && a.GetAppletRegistry()[0] === this ? (u.GetBusObj() && u.GetBusObj().RemoveBusComp(u), u.EndLife(), u = null) : a.DeRegister(this))
          }
          this.SetView(null), this.SetBusComp(null), this._EndLife(), SiebelApp.S_App.ErrorObject.DeleteErrorObj(this)
      }, y.prototype.CanProcessError = function(e) {
          var n = e ? e.length : 0,
              r = !1,
              i = !1,
              s = !1,
              o = !1,
              u = t.get("SSAELErrUserDefinedError"),
              a = t.get("SSAELErrGetFieldNotActive"),
              f = t.get("SSAOMErrBoundedPick"),
              l = this.GetActiveControl(),
              c = this.GetPrsrvControl();
          if (SiebelApp.S_App.ErrorObject && n > 0) {
              for (var h = 0; h < n; h++) {
                  if (e[h].errCode === u) {
                      r = !0;
                      break
                  }
                  if (e[h].errCode === a) {
                      i = !0;
                      break
                  }
              }
              if (!r && !i)
                  for (var p = 0; p < n; p++)
                      if (e[p].errCode === f) {
                          s = !0;
                          break
                      } s && (l ? (l.GetUIType() === t.get("SWE_CTRL_COMBOBOX") && (this.ShowPopup(l), o = !0), l.GetUIType() === t.get("SWE_CTRL_PICK") && l.IsEditEnabled() && (this.FieldPopup(), this.SetHasPickError(!0), o = !0)) : c && c.GetUIType() === t.get("SWE_CTRL_COMBOBOX") && (this.ShowPopup(c), o = !0))
          }
          return !o
      }, y.prototype.AddControl = function(e) {
          this.GetControls()[e.GetName()] = e
      }, y.prototype.RemoveControls = function() {
          this.ClearControls()
      }, y.prototype.IsActive = function() {
          return this.GetView() ? this.GetView().IsAppletActive(this) : SiebelApp.S_App.GetExternalActiveApplet() === this
      }, y.prototype.GetPropArray = function() {
          var e = ["GetName", "GetId", "GetVarName", "GetFullId", "GetTitle", "GetControls", "GetActiveControl", "GetSelection", "GetRecordSet", "GetDefaultFocusOnEdit", "GetDefaultFocusOnNew", "GetAppletSummary", "GetAppletLabel", "IsInQueryMode", "GetQueryModePrompt", "GetDefaultFocusOnQuery", "GetMapFields", "GetPrsrvControl", "GetUIEventMap", "IsPure", "GetScrollDir", "GetScrollAmount", "GetMode", "GetDefaultMode", "GetBusComp", "GetRowListRowCount", "GetWSEndRowNum", "GetNumRows", "IsNumRowsKnown", "GetObjectType", "GetRepstrName", "GetUIName", "GetRawRecordSet", "GetParentApplet", "IsActive", "IsEditable", "HasPickError"];
          return SiebelApp.S_App.IsRwd() && (e = e.concat(["GetPH", "GetListId", "GetMenuId", "GetTreeId", "AddToGroupModel", "GetGlobalPropSet", "IsObjResponsive", "IsResponsive", "GetRowCount", "GetRecDetailId"])), e.UIStateRequestProps = ["GetControls", "GetQueryModePrompt", "GetRecordSet"], e
      }, y.prototype.GetMethodArray = function() {
          var t = ["CanNavigate", "CanUpdate", "CanInvokeMethod", "InvokeMethod", "GetControl", "LeaveField", "ShowSelection", "InvokeMethod", "GetRecord", "GetRecordSet", "GetSelection", "RefreshData", "FieldChange", "UpdateStateChange", "UpdateCSQueryMsg", "InvokeStateChange", "SetFocusToCtrl", "FocusFirstControl", "SetHighlightState", "UpdateQuickPickInfo", "GetFieldValue", "GetFormattedFieldValue", "IsPrivateField", "NewFileAttachment", "UpdateAppletMessage", "PostExecute", "SetFocusDefaultControl", "ShowPickPopup", "NotifyClosePopup", "UpdateCurrencyCalcInfo", "GetCurrencyApplet", "GetCurrencyCalInfo", "CurrencyPostChanges", "ExecuteUIUpdate", "UpdateConditionals", "SetUpdateConditionals", "ProcessCancelQueryPopup", "GetControlId", "ShowPopup", "ProcessError", "GetPhysicalControlValue", "ResetAppletState", "FocusSelectedTreeNode", "NavigateState", "HandleCtrlDefChange", "RepopulateField", "IsMethodDefault", "SetCanInvokeState", "GetFieldDataType", "BeginQueryState", "EndQueryState", "FocusOnApplet", "UpdateRowCounter", "GetWSStartRowNum", "SetCurRow", "IsCurWSRecActive", "WSNextRecord", "WSHome", "SetActiveControl", "SetFormattedValue", "ChangeSelectionInPopup", "SetHasPickError", "ForceProcessResponse", "SetScrollAmount", "SetScrollDir", "Show", "IsLinkOnCtrl", "RemoveControls", "OnCommitStateChange", "ResetUIUpdateStates"];
          return SiebelApp
              .S_App.IsRwd() && e.IsTrue(this.IsObjResponsive()) && (t = t.concat(["GetGroupModel", "FindPS", "GetPSInfo", "GetLeafChildrenInfo", "GetListColumnObjectInfo", "FindGroupPS", "GetGroupPSInfo", "GetGroupLeafChildrenInfo", "GetTitleFromGroupColumn", "GetPSatLevel", "GetGroupPSDepth"])), t.StateChangeHandlerMethods = ["OnCommitStateChange", "FieldChange"], t
      }, y.prototype.IsMethodDefault = function(e) {
          return this.GetCanInvokeByName() && this.GetCanInvokeByName()[e]
      }, y.prototype.GetControlId = function() {
          if (this.GetToggleApplet()) return this.GetToggleApplet().GetControlId();
          return
      }, y.prototype.GetCurrencyCalInfo = function() {
          return this.GetCurrencyApplet().GetCurrencyCalInfo()
      }, y.prototype.NotifyClosePopup = function() {
          return this.GetCurrencyApplet().NotifyClosePopup()
      }, y.prototype.ShowPickPopup = function() {
          return this.GetCurrencyApplet().ShowPickPopup(this)
      }, y.prototype.GetSelection = function() {
          return this.GetBusComp() ? this.GetBusComp().GetSelection() : -1
      }, y.prototype.GetControl = function(e) {
          return this.GetControls()[e]
      }, y.prototype.GetRawRecordSet = function() {
          return this.GetBusComp() ? this.GetBusComp().GetRecordSet() : []
      }, y.prototype.GetRecordSet = function() {
          var e = [];
          return !this.GetBusComp() || (this.IsInQueryMode() ? e[0] = this.GetEmptyRecordForQuery() : e = this.GetBusComp().GetRecordSet()), e
      }, y.prototype.GetRowIds = function(n) {
          var r = this.GetBaseLevelApplet(),
              i = !e.IsEmpty(this.GetParentApplet()),
              s, o = "",
              a = [],
              f, l = !0;
          if (!!this.GetView() && !!this.GetBusComp()) {
              i ? s = r.GetBusComp() : s = r.GetBusComp().GetParentBusComp();
              while (s) {
                  a.push(s), f = s.GetIdValue();
                  if (!f) {
                      s.ClearErrorMsg();
                      if (!i || !l) {
                          n.SetProperty(u, o);
                          return
                      }
                  }
                  s = s.GetParentBusComp(), l = !1
              }
          }
          a.reverse();
          var c = 0,
              h = a.length;
          for (c = 0; c < h; c++) {
              e.IsEmpty(o) || (o += ",");
              var p = a[c];
              o += t.get("SWE_ROW_ID_STR") + c.toString() + "=" + p.GetIdValue()
          }
          n.SetProperty(u, o)
      }, y.prototype.GetMapFields = function(e) {
          return this.GetMapFieldsArray()
      }, y.prototype.GetBaseLevelApplet = function() {
          var t = this;
          while (!e.IsEmpty(t.GetParentApplet())) t = t.GetParentApplet();
          return t
      }, y.prototype.GetAllFieldValues = function(e, t) {}, y.prototype.GetFieldDataType = function(t) {
          if (!this.GetBusComp()) return "";
          var n = this.GetBusComp().GetField(t);
          return e.IsEmpty(n) ? "" : n.GetDataType()
      }, y.prototype.IsEditableApplet = function() {
          return this.IsEditable() === "1" ? !0 : !1
      }, y.prototype.IsPrivateField = function(e) {
          return this.GetPrivateFieldMap() && this.GetPrivateFieldMap()[e] ? !0 : !1
      }, y.prototype.CanUpdateUI = function() {
          return this.GetEnableUIUpdate()
      }, y.prototype.GetListColumnObjectInfo = function(e) {
          var t = this.GetControl(e),
              n = {
                  name: e,
                  controlType: t.GetUIType(),
                  isLink: this.CanNavigate(e),
                  index: Number(t.GetColNum()) + 1,
                  bCanUpdate: this.CanUpdate(t),
                  control: t
              };
          return n
      }, y.prototype.IsLinkOnCtrl = function(e) {
          var t = !1,
              n = this.GetCanNavigateMap();
          return n.hasOwnProperty(e) && n[e] instanceof Array && n[e].indexOf("1") > -1 && (t = !0), t
      }, y.prototype.CanNavigate = function(t, n) {
          var r = this.GetBusComp();
          if (!r) return !1;
          var i = this.GetCanNavigateMap(),
              s = i.hasOwnProperty(t);
          if (s) {
              var o = i[t],
                  u = isNaN(parseInt(n, 10)) ? r.GetCurRow(this.GetName()) : n;
              if (o instanceof Array && u >= 0) return u >= o.length && (u = 0), e.IsTrue(o[u])
          }
          return !1
      }, y.prototype.CanUpdate = function(t) {
          var n = !0;
          if (this.IsEditableApplet() === !1 && this.IsPrivateField(t) === !1) return n = !1, n;
          if (this.GetCanUpdateByName()[t]) {
              n = this.GetCanUpdateByName()[t].bCanUpdate;
              if (!e.IsEmpty(n)) return n
          }
          return this.IsPrivateField(t) !== !1 || this.IsInQueryMode() !== !1 || !this.GetBusComp() || this.GetBusComp().CanUpdate() !== !1 ? n : (n = !1, n)
      }, y.prototype.CanInvokeMethod = function(n) {
          var r = !0;
          if (n === "OnFocus") return r;
          if (n === "ShowContextMenu") return r;
          if (n === "OnEnterKey") return r;
          if (n === "OnEscapeKey") return r;
          if (n === "UndoRecord") {
              if (this.IsInQueryMode() === !1 && !!this.GetBusComp() && (this.GetBusComp().GetCommitPending() || this.GetBusComp().IsCommitPending())) return r
          } else {
              if (n === "EditPopup") return r;
              if (n === "Find") return this.IsInQueryMode() === !0 && (r = !1), r;
              if (n === "ImplicitCommit") return r;
              if (n === "FocusDefaultControl") return r;
              if (n === "ExecuteAlphaTabQuery") return r;
              if (!n) return !1
          }
          if (this.GetCanInvokeByName() !== null && this.GetCanInvokeByName()[n]) {
              SiebelApp.S_App.OfflineCallMethod("AppletCanInvokeMethod", n, this), r = this.GetCanInvokeByName()[n].bCanInvoke;
              if (r !== undefined || r !== null) return r
          }
          var i = CCFMiscUtil_CreatePropSet(),
              s = CCFMiscUtil_CreatePropSet();
          s.SetProperty(t.get("SWE_CMD_ARG"), "CanInvokeMethod"), e.IsEmpty(this.GetView()) || (s.SetProperty(t.get("SWE_VIEW_ID_ARG"), this.GetView().GetBusObj().GetZone()), s.SetProperty(t.get("SWE_VIEW_ARG"), this.GetView().GetName())), (s.GetProperty(t.get("SWE_APPLET_STR")) === undefined || s.GetProperty(t.get("SWE_APPLET_STR") === null)) && s.SetProperty(t.get("SWE_APPLET_STR"), this.GetName()), this.GetPopBookMark() && s.SetProperty(t.get("SWE_POPUP_VECTOR_STR"), this.GetPopBookMark()), s.SetProperty(t.get("SWE_METHOD_STR"), n);
          var o = {};
          o.async = !1, o.scope = this, o.cb = function() {}, SiebelApp.S_App.CallServer(s, i, !0, o);
          if (0 === i.GetPropertyCount()) return r = !1;
          var u = i.GetProperty(t.get("SWE_RPC_PROP_STATUS"));
          return u && u.toLowerCase() !== t.get("SWE_RPC_PROP_STATUS_OK").toLowerCase() ? r = !1 : (u = i.GetProperty("Result"), u && (r = u.toLowerCase() === t.get("SWE_PROP_RESULT_TRUE").toLowerCase() ? !0 : !1), r)
      }, y.prototype.ProcessObjectInfo = function(e) {
          if (e.GetType() !== t.get("SWE_PST_APPLET_INFO")) return;
          var n = e.GetValue();
          if (!this.GetVarName()) this.SetVarName(n);
          else if (this.GetVarName() !== n) return;
          var r = e.GetProperty("MAP_LOCATION_FIELDS");
          if (r !== undefined && r !== null) {
              var i = r.split(","),
                  s = i.length;
              for (var o = 0; o < s; o++) i[o] = i[o].replace(/^\s+|\s+$/g, "");
              this.SetMapFieldsArray(i)
          }
          this.ProcessSelfProps(e), this.DoProcessObjectProperties(e);
          var u = e.EnumChildren(!0);
          if (!u) return;
          do this.ProcessChildrenProps(u); while (u = e.EnumChildren(!1))
      }, y.prototype.IsResponsive = function() {
          return SiebelApp.S_App.IsRwd() && e.IsTrue(this.IsObjResponsive())
      }, y.prototype.ProcessSelfProps = function(n) {
          var r = e.Curry(SiebelApp.S_App.constructor.prototype.DefineAccessor, this, n);
          n.PropertyExists(t.get("SWE_PROP_POPUP_APPLET_NAME")) && r("GetPopupAppletName", "SWE_PROP_POPUP_APPLET_NAME"), n.PropertyExists(t.get("SWE_PROP_POPUP_PICK_APPLET_NAME")) && r("GetPickAppletName", "SWE_PROP_POPUP_PICK_APPLET_NAME"), n.PropertyExists(t.get("SWE_PROP_POPUP_ASSOC_APPLET_NAME")) && r("GetAssocAppletName", "SWE_PROP_POPUP_ASSOC_APPLET_NAME"), n.PropertyExists(t.get("SWE_PROP_POPUP_MVG_ASSOC_APPLET_NAME")) && r("GetMvgAssocAppletName", "SWE_PROP_POPUP_MVG_ASSOC_APPLET_NAME"), n.PropertyExists(t.get("SWE_PROP_POPUP_MVG_SELECTED_APPLET_NAME")) && r("GetMvgSelectedAppletName", "SWE_PROP_POPUP_MVG_SELECTED_APPLET_NAME"), r("GetName", "SWE_PROP_NAME"), r("GetMode", "SWE_PST_APPLET_MODE"), r("GetDefaultMode", "SWE_PST_APPLET_DEFAULT_MODE"), r("GetVarName", "SWE_PROP_VAR_NAME"), r("GetId", "SWE_PROP_ID"), SiebelApp.S_App.IsRwd() && (r("GetPH", "SWE_PROP_TMPL_ITM_HOLDER"), r("IsObjResponsive", "SWE_PROP_OBJECT_RESPONSIVE"), r("GetWebTemplateName", "SWE_PROP_WEBTEMPLATE")), r("GetTitle", "SWE_PROP_TITLE"), r("GetBCId", "SWE_PST_BUSCOMP_INFO"), r("IsEditable", "SWE_PROP_IS_EDIT"), r("GetDefaultFocusOnEdit", "SWE_PROP_CTRL_FOCUS_EDIT"), r("GetDefaultFocusOnNew", "SWE_PROP_CTRL_FOCUS_NEW"), r("GetDefaultFocusOnQuery", "SWE_PROP_CTRL_FOCUS_QUERY"), r("IsNoUpdate", "SWE_PROP_IS_NO_UPDATE"), r("IsCancelQueryDisabled", "SWE_PROP_DISABLE_CANCEL_QUERY"), r("GetDefaultMethod", "SWE_PROP_DEF_METHOD", !0), r("GetDefaultQryMethod", "SWE_PROP_DEF_METHOD_QRY_MODE", !0);
          var i = n.GetValue();
          this.GetFullId = function() {
              return i
          }, n.PropertyExists(t.get("SWE_PROP_FOCUS_TOGGLE_NEWREC")) && this.SetNewRecordInToggle(n.GetProperty(t.get("SWE_PROP_FOCUS_TOGGLE_NEWREC")) === "1"), !e.IsEmpty(this.GetView()) && !!this.GetBCId() && this.SetBusComp(this.GetView().GetBusObj().GetBusComp(this.GetBCId())), !!this.GetBusComp() && !this.IsRegistered() && (this.GetBusComp().Register(this), this.SetRegistered(!0)), SiebelApp.S_App.OfflineCallMethod("ProcessAppletSelfProps", this), n = null
      }, y.prototype.GetType = function() {
          return t.get("SWE_COMPOSER_APPLET_TYPE")
      }, y.prototype.GetChildren = function() {
          var e = this.GetControls(),
              t = [];
          return e && !$.isEmptyObject(e) && t.push(e), t
      }, y.prototype.DoProcessObjectProperties = function(e) {
          var n = e.GetProperty(t.get("SWE_PROP_CAN_UPDATE"));
          typeof n == "string" && this.SetCanUpdateState(n), n = e.GetProperty(t.get("SWE_PROP_CAN_INVOKE")), typeof n == "string" && this.SetCanInvokeState(n), n = e.GetProperty(t.get("SWE_PROP_POP_BKMARK")), typeof n == "string" && this.SetPopBookMark(n), n = e.GetProperty(t.get("SWE_PROP_SHADOW")), n != null && n != undefined && SiebelApp.S_App.CreateJSShadow(this, n) && this.SetCustomShadow(!0), n = Number(e.GetProperty(t.get("SWE_PROP_BEGIN_ROW"))), this.GetBusComp() && n !== -1 && this.GetBusComp().GetNotifyObject().SetBegRow(this.GetName(), n)
      }, y.prototype.ProcessControlInfo = function(e, n) {
          var r = new SiebelApp.S_App.AppletControl;
          r.SetApplet(this), r.SetClientCtrl(e.PropertyExists(t.get("SWE_PROP_IS_CLIENT_CTRL")) ? !0 : !1), r.ProcessObjectInfo(e), r.SetIndex(n), this.AddControl(r)
      }, y.prototype.ProcessPickInfo = function(e) {
          var n, r = t.get("SWE_PROP_POP_METHOD"),
              i = t.get("SWE_PROP_POP_CTRL");
          if (!this.GetParentApplet()) {
              n = e.GetValue();
              if (n) {
                  if (this.GetView()) var s = this.GetView().GetAppletById(n);
                  s && this.SetParentApplet(s)
              }
              if (!this.GetParentApplet()) return !1;
              this.GetParentApplet().SetPopupApplet(this)
          }
          return n = e.GetProperty(r), n && this.SetPopupMethod(n), n = e.GetProperty(i), n && this.SetPopupControl(n), !0
      }, y.prototype.AddClientControl = function(e) {
          e.SetPropertyStr(t.get("SWE_PROP_NAME"), n.AppendToLocalStrCache(e.GetProperty(t.get("SWE_PROP_NAME")))), e.SetPropertyStr(t.get("SWE_PROP_TYPE"), n.AppendToLocalStrCache(e.GetProperty(t.get("SWE_PROP_TYPE")))), e.SetPropertyStr(t.get("SWE_PROP_DISP_NAME"), n.AppendToLocalStrCache(e.GetProperty(t.get("SWE_PROP_DISP_NAME")))), e.SetPropertyStr(t.get("SWE_PROP_DISP_FORMAT"), n.AppendToLocalStrCache(e.GetProperty(t.get("SWE_PROP_DISP_FORMAT")))), e.SetPropertyStr(t.get("SWE_PROP_FLD_NAME"), n.AppendToLocalStrCache(e.GetProperty(t.get("SWE_PROP_FLD_NAME")))), e.SetPropertyStr(t.get("SWE_PROP_JUSTIFICATION"), n.AppendToLocalStrCache(e.GetProperty(t.get("SWE_PROP_JUSTIFICATION")))), e.SetPropertyStr(t.get("SWE_PROP_MTHD_NAME"), n.AppendToLocalStrCache(e.GetProperty(t.get("SWE_PROP_MTHD_NAME")))), e.SetPropertyStr(t.get("SWE_PROP_DISP_MODE"), n.AppendToLocalStrCache(e.GetProperty(t.get("SWE_PROP_DISP_MODE")))), e.SetPropertyStr(t.get("SWE_PROP_PICK_APLT"), n.AppendToLocalStrCache(e.GetProperty(t.get("SWE_PROP_PICK_APLT")))), this.GetControlPS().AddChild(e)
      }, y.prototype.ProcessChildrenProps = function(n) {
          var i = e.Curry(SiebelApp.S_App.constructor.prototype.DefineAccessor, this, n),
              s = n.GetType(),
              o = t.get("SWE_PST_CNTRL_LIST"),
              u = t.get("SWE_PST_REMOVE_CONTROL_LIST"),
              a = t.get("SWE_PST_CONFIRM_MSGS"),
              f = t.get("SWE_PST_PRIV_CNTRL_LIST"),
              l = t.get("SWE_PROP_CAN_INVOKE"),
              c = t.get("SWE_PST_PARENT_INFO"),
              h = t.get("SWE_PST_ACCESSIBILITY_INFO"),
              p = t.get("SWE_PST_PMODEL_FILE_INFO"),
              d = t.get("SWE_PST_PRENDERER_FILE_INFO"),
              v = t.get("SWE_PROP_GET_PMODEL_FILE"),
              m = t.get("SWE_PROP_GET_PRENDERER_FILE"),
              g = t.get("SWE_PST_NEW_TOGGLE_CTRL"),
              y = SiebelApp.S_App.GetPageURL().split("start.swe")[0] + SiebelApp.S_App.GetScriptDir(),
              b = t.get("SWE_PST_QTP_INFO"),
              w = SiebelApp.S_App.LookupStringCache;
          switch (s) {
              case o:
                  var E = n.EnumChildren(!0),
                      S = 0;
                  do {
                      if (E && SiebelApp.S_App.IsRwd() && e.IsTrue(this.IsObjResponsive())) {
                          var x = w(E.GetProperty(t.get("SWE_PROP_TYPE")));
                          x === t.get("SWE_LIST_APPLET_CTRL") ? this.SetListId(E.GetProperty(t.get("SWE_PROP_SPAN"))) : x === t.get("SWE_PROP_MENU") ? this.SetMenuId(E.GetProperty(t.get("SWE_PROP_SPAN"))) : x === t.get("SWE_ST_TOGGLE_APPLET_CTRL") ? this.GetToggleApplet().SetControlId(E.GetProperty(t.get("SWE_PROP_SPAN"))) : x == t.get("SWE_APPLET_ROW_COUNT") ? this.SetRowCount(E.GetProperty(t.get("SWE_PROP_SPAN"))) : x == t.get("SWE_APPLET_REC_DETAIL") ? this.SetRecDetailId(E.GetProperty(t.get("SWE_PROP_SPAN"))) : x === t.get("SWE_TREE_APPLET_CTRL") && this.SetTreeId(E.GetProperty(t.get("SWE_PROP_SPAN")))
                      }
                      E && this.ProcessControlInfo(E, S), S++
                  } while (E = n.EnumChildren(!1));
                  S = 0;
                  var T = this.GetControlPS();
                  if (!!T && T.GetChildCount() > 0) {
                      var N = T.EnumChildren(!0);
                      do this.ProcessControlInfo(N, S), S++; while (N = T.EnumChildren(!1))
                  }
                  break;
              case r:
                  var C = n.EnumProperties(!0);
                  if (C)
                      do {
                          var k = [];
                          CCFMiscUtil_StringToArray(n.GetProperty(C), k), this.GetCanNavigateMap()[C] = k
                      } while (C = n.EnumProperties(!1));
                  break;
              case u:
                  this.RemoveControls();
                  break;
              case a:
                  var L = n.EnumProperties(!0);
                  if (L)
                      do this.GetConfirmMessageMap()[L] = n.GetProperty(L); while (L = n.EnumProperties(!1));
                  break;
              case f:
                  this.SetPrivateFields(n);
                  break;
              case c:
                  var A = this.ProcessPickInfo(n);
                  if (!A) return !1;
                  break;
              case h:
                  i("GetAppletLabel", "SWE_APPLET_LABEL"), i("GetAppletSummary", "SWE_APPLET_SUMMARY"), this.GetAppletLabel() == undefined && (this.GetAppletLabel = function() {
                      return ""
                  }), this.GetAppletSummary() == undefined && (this.GetAppletSummary = function() {
                      return ""
                  });
                  break;
              case b:
                  var O = e.Curry(SiebelApp.S_App.constructor.prototype.DefineAccessor, this, n);
                  O("GetObjectType", "SWE_PROP_QTP_OT"), O("GetRepstrName", "SWE_PROP_QTP_RN"), O("GetUIName", "SWE_PROP_QTP_UN");
                  break;
              case g:
                  this.SetToggleApplet(), n.GetChildCount() > 0 && this.GetToggleApplet().ProcessObjectInfo(n.GetChild(0))
          }
          if (this.GetAppletLabel == undefined || this.GetAppletLabel() == undefined) this.GetAppletLabel = function() {
              return ""
          };
          if (this.GetAppletSummary == undefined || this.GetAppletSummary() == undefined) this.GetAppletSummary = function() {
              return ""
          };
          n = null
      }, y.prototype.SetCanUpdateState = function(e) {
          var t = [],
              r;
          CCFMiscUtil_StringToArray(e, t), this.SetCanUpdateArray(), this.GetCanUpdateByName() || this.SetCanUpdateByName();
          if (t.length >= 2)
              for (var i = 0, s = t.length; i < s; i += 2) {
                  var o = n.LookupStringCache(t[i]),
                      u = t[i + 1];
                  if (!o) return !1;
                  r = u === "1" ? !0 : !1, this.GetCanUpdateArray().push(o), this.GetCanUpdateByName()[o] = {
                      bCanUpdate: r
                  }
              }
      }, y.prototype.SetCanInvokeState = function(e) {
          var t = [],
              r = !0;
          CCFMiscUtil_StringToArray(e, t), this.GetCanInvokeByName() || this.SetCanInvokeByName(), this.SetCanInvokeArray();
          if (t.length >= 2)
              for (var i = 0, s = t.length; i < s; i += 2) {
                  var o = n.LookupStringCache(t[i]),
                      u = t[i + 1];
                  if (!o) return !1;
                  r = u === "1" ? !0 : !1, this.GetCanInvokeArray().push(o), this.GetCanInvokeByName()[o] = {
                      bCanInvoke: r
                  }
              }
      }, y.prototype.SetPrivateFields = function(n) {
          if (!n) return;
          this.GetPrivateFieldMap() || this.SetPrivateFieldMap();
          var r = t.get("SWE_PST_PRIV_CNTRL"),
              i = t.get("SWE_PST_PRIV_COL"),
              s, o, u, a, f = [],
              l, c, h, p;
          for (var d = 0, v = n.GetChildCount(); d < v; d++) {
              var m = n.GetChild(d).GetType();
              if (m === r) {
                  s = !0, o = null, a = n.GetChild(d);
                  for (s = !0;
                      (o = a.EnumProperties(s)) !== null; s = !1) f = [], h = this.GetControls()[o], p = a.GetProperty(t.get("SWE_PROP_CTRL_ALLOW_POSTCHANGES")), f = [], f.push(a.GetProperty(o)), this.GetPrivateFieldMap()[o] = {
                      bDirty: !1,
                      bInList: !1,
                      valueArray: f,
                      allowPostChanges: e.IsTrue(p),
                      queryModeVal: this.GetMode() === t.get("SWE_PST_APPLET_MODE_QUERY") && f[0] ? f[0] : ""
                  }, u = a.EncodeAsString()
              } else if (m === i) {
                  s = !0, o = null, a = n.GetChild(d);
                  for (s = !0;
                      (o = a.EnumProperties(s)) !== null; s = !1) p = a.GetProperty(t.get("SWE_PROP_CTRL_ALLOW_POSTCHANGES")), f = [], CCFMiscUtil_StringToArray(a.GetProperty(o), f), this.GetPrivateFieldMap()[o] = {
                      bDirty: !1,
                      bInList: !0,
                      valueArray: f,
                      allowPostChanges: e.IsTrue(p),
                      queryModeVal: this.GetMode() === t.get("SWE_PST_APPLET_MODE_QUERY") && f[0] ? f[0] : ""
                  }, u = a.EncodeAsString()
              }
          }
          this.SetPvtFieldsDirty();
          return
      }, y.prototype.Initialize = function() {
          this.InitializeRenderer(), b.call(this, !0), w.call(this), this.GetToggleApplet() && this.GetToggleApplet().Initialize(), this.ClearErrorMsg()
      }, y.prototype.GetLabel = function() {
          return this.GetAppletLabel()
      }, y.prototype.InitializeRenderer = function() {}, y.prototype.Show = function() {
          this.ShowSelection(), this.ClearErrorMsg(), this.UpdateConditionals(), this.HasCustomShadow() && this.shadow && typeof this.shadow.OnLoad == "function" && this.shadow.OnLoad()
      }, y.prototype.ShowOnly = function() {
          var t = this.GetMenu();
          e.IsEmpty(t) && (w.call(this), t = this.GetMenu()), e.IsEmpty(t) || this.GetMenu().ShowMenuControl(), this.UpdateConditionals(), this.FocusDefaultControl(), this.OnCommitStateChange(this.GetCommitPending())
      }, y.prototype.Query = function(e) {
          e.Applet = this, SiebelApp.S_App.InvokeMethod("Query", e)
      }, y.prototype.ShouldPopulateUItype = function(e) {
          return e === "Link" ? !1 : !0
      }, y.prototype.UpdateAppletMessage = function(r, i) {
          r = e.IsEmpty(r) ? null : r, i = i || 0;
          var s = !1,
              o = this.GetQuerySubMode(),
              u = "";
          switch (r) {
              case "bInQueryState":
                  i == 1 ? (s = !0, this.SetQuerySubMode(t.get("QUERY_SUB_MODE_QUERY")), u = n.LocaleObject.GetLocalString("Query Mode Prompt")) : o == t.get("QUERY_SUB_MODE_QUERY") && (this.SetQuerySubMode(t.get("QUERY_SUB_MODE_EXIT_QUERY")), s = !0);
                  break;
              case "bExecuted":
                  i == 1 && o == t.get("QUERY_SUB_MODE_EXIT_QUERY") && (s = !0, u = n.LocaleObject.GetLocalString("Query Result Prompt"));
                  break;
              case null:
                  o === t.get("QUERY_SUB_MODE_EXIT_QUERY") && (this.SetQuerySubMode(t.get("QUERY_SUB_MODE_BASE")), s = !0)
          }
          this.GetQueryModePrompt = function() {
              return s ? u : ""
          };
          if (!this.GetBusComp()) return;
          s && this.GetBusComp().GetNotifyObject().GetEnableUIUpdate(this.GetName())
      }, y.prototype.GetQueryModePrompt = function() {}, y.prototype.RepopulateField = function(e, t, n) {
          return n = n || !1, this.DoRepopulateField(e, t, n)
      }, y.prototype.DoRepopulateField = function(e, t, n) {
          var r = this.GetControls();
          for (var i in r)
              if (r.hasOwnProperty(i)) {
                  var s = r[i],
                      o = s.GetFieldName();
                  if (n && i === e || o === e) {
                      if (!this.ShouldPopulateUItype(s.GetUIType())) continue;
                      var u = this.IsInQueryMode() && !n ? this.GetBusComp().GetFieldValue(o) : this.GetFormattedFieldValue(s);
                      this.FieldChange(s, u)
                  }
              } return
      }, y.prototype.GetFieldValue = function(t, n) {
          var r = "",
              i = t.GetName(),
              s = t.GetFieldName(),
              o = this.GetBusComp();
          if (this.IsPrivateField(i)) {
              var u = this.GetPrivateFieldMap()[i];
              if (this.IsInQueryMode()) e.IsEmpty(s) ? r = u && u.queryModeVal ? u.queryModeVal : "" : r = o ? o.GetFieldValue(s) : "";
              else if (u && u.valueArray.length > 0) {
                  var a = u.valueArray;
                  n = u.bInList ? n : 0, n !== "" && n !== "undefined" && n !== undefined && n !== null && n >= 0 && n < a.length ? r = a[n] : (n = u.bInList && o ? this.GetSelection() : 0, n < u.valueArray.length && u.valueArray.length > 0 && (r = a[n]))
              }
          } else r = o ? o.GetFieldValue(s) : "";
          return r
      }, y.prototype.ConfirmMethod = function(t) {
          var r = [],
              i = this.GetConfirmMessageMap()[t];
          if (n.LocaleObject && i) {
              var s = SiebelApp.S_App.LocaleObject.GetLocalString(i),
                  o = n.LookupStringCache(this.GetTitle());
              return o || (o = n.LookupStringCache(this.GetName())), r.push(o), s = e.FormatString(s, r), e.Confirm(s)
          }
          return !0
      }, y.prototype.SetCancelableRPCInfo = function(n, r) {
          var i = this.GetCancelableMethodArray();
          i && e.IndexOf(i, n) >= 0 && !e.IsTrue(this.IsCancelQueryDisabled()) && r.SetProperty(t.get("SWE_PROP_CANCELABLE_RPC"), "1")
      }, y.prototype.InvokeControlMethod = function(e, t, n) {
          return this.GetView() && !this.GetView().SetActiveApplet(this) ? (this.GetView().ProcessError(), !1) : this.InvokeMethod(e, t, n)
      },
      y.prototype.InvokeMethod = function(n, r, i) {
          if (!n) return !1;
          if (n === "ImplicitCommit") {
              var o = this.GetView();
              if (o && typeof o.GetInvokeMethod == "function" && o.GetInvokeMethod()) return !0
          }
          var u = !0,
              a = !1;
          r = r || CCFMiscUtil_CreatePropSet();
          var l = r.Clone(),
              c;
          this.SetCancelableRPCInfo(n, l), SiebelApp.S_App.GetEnablePerfHooks() && SiebelApp.S_App.GetTimer() && SiebelApp.S_App.GetTimer().TimeInvokeMethod("", this.GetName(), n, "Begin InvokeMethod");
          if (n !== "GetQuickPickInfo" && n !== "EditField" && n !== "UndoRecord" && n !== "OnFocus") {
              var h = this.GetActiveControl(),
                  p = this.GetControlValueFromUI(h);
              if (h && p !== null && !1 === this.LeaveField(h, p, !0)) return this.EnterField(h), !1
          }
          u = this.FirePreInvokeMethod(n, l);
          if (!u) return SiebelApp.S_App.uiStatus.Free(), !1;
          var d = this.GetActiveControl();
          if (this.ConfirmMethod(n) === !1) return SiebelApp.S_App.uiStatus.Free(), d ? this.SetFocusToCtrl(d.GetName(), !0) : this.FocusFirstControl(), !0;
          if (n === "Drilldown" && !r.GetProperty(f)) {
              var h = this.GetActiveControl();
              if (!h || this.IsInQueryMode() || !this.CanNavigate(h.GetName())) return;
              var v = this.GetSelection(),
                  m;
              typeof h.GetSpanPrefix == "function" ? (m = h.GetSpanPrefix(), e.IsEmpty(v) || (m += v + 1)) : m = h.GetInputName(), l.SetProperty(s, v + 1), l.SetProperty(f, m)
          }
          if (n === "EditPopup") {
              var g = M.call(this, i, n, r);
              g && this.FireInvokeMethod(n, r);
              return
          }
          if (n === "OnFocus") {
              var y = !1,
                  b = e.IsTrue(l.GetProperty(t.get("SWE_MENU_APPLET"))) || !1;
              if (!e.IsEmpty(this.GetView())) {
                  var w = !0;
                  this.GetView().IsAppletActive(this) || (w = !1), this.FocusOnMenu(b), y = this.GetView().SetActiveApplet(this), this.FocusOnMenu(!1), y && !w && !b && (this.SetFocusDefaultControl(!0), this.FocusDefaultControl()), this.FireInvokeMethod(n, r)
              } else y = !0, SiebelApp.S_App.GetActiveView() && (y = SiebelApp.S_App.GetActiveView().SetActiveApplet(null)), y && SiebelApp.S_App.GetExternalActiveApplet() !== this && (y = this.SetAppletActive(!0, this));
              return y
          }
          if (n === "FocusDefaultControl") return this.SetFocusDefaultControl(!0), this.FocusDefaultControl(), this.FireInvokeMethod(n, r), !0;
          if (n === "ShowRoute") return !1;
          (n === "UndoQuery" || n === "ExecuteQuery" || n === "UndoRecord") && this.SetFocusDefaultControl(!0);
          if (n === "OnEnterKey") return c = S.call(this, n, r), c === !0 && this.FireInvokeMethod(n, r), c;
          if (n === "OnEscapeKey") return c = x.call(this), c === !0 && this.FireInvokeMethod(n, r), c;
          if (n === "ImplicitCommit") return this.PostChangesToBC(!0, null);
          if (n === "GetQuickPickInfo" && this.GetCachedCtrlQuickPick(l) === !0) return SiebelApp.S_App.InvokeCallBack(), this.FireInvokeMethod(n, r), !0;
          if (n == "GotoLastSet") {
              var E = -1;
              this.GetBusComp().SetCurRowNum(E)
          }
          n !== "PositionOnRow" && this.CollectFieldValues(l);
          var g, T = {};
          typeof i == "object" || i === !0 || i === !1 ? (T.scope = this, T.args = [], T.args.push(n), T.args.push(l), T.async = typeof i.async == "boolean" ? i.async : i, T.target = i.target, T.selfbusy = i.selfbusy || !1, T.mask = i.mask || !1, T.cb = function() {
              var e = Array.prototype.slice.call(arguments),
                  n = k.GetProperty("Status"),
                  r = SiebelApp.S_App.ErrorObject.GetErrorSuppressState();
              g = this.PostExecute.apply(this, arguments), e.push(g), typeof i.cb == "function" && i.cb.apply(i.scope || null, e);
              if (!r || n === t.get("SWE_RPC_PROP_STATUS_ERROR")) SiebelApp.S_App.ErrorObject.SetErrorSuppressState(!0), this.ProcessError();
              g && i.methodName && i.psInputArgs && this.FireInvokeMethod(i.methodName, i.psInputArgs)
          }) : T = {
              scope: this,
              cb: function() {
                  var e = [];
                  e.push(n), e.push(l), e.push(k), g = this.PostExecute.apply(this, e)
              }
          };
          var N = l.GetProperty(t.get("SWE_PROP_CANCELABLE_RPC"));
          if (e.IsTrue(N)) {
              that = this;
              var C = setTimeout(function() {
                  that.ProcessCancelQueryPopup(), that = null
              }, 1e3 * parseInt(SiebelApp.S_App.GetCancelQueryTimeout(), 10));
              this.SetCancelQryTimeoutObj(C)
          }
          var k = CCFMiscUtil_CreatePropSet();
          return this.CallServerApplet(n, l, k, T), g
      }, y.prototype.PostExecute = function(n, r, i) {
          var s = this.GetCancelQryTimeoutObj(),
              o = !0,
              u = arguments[2].GetProperty(l),
              a = r.GetProperty(t.get("SWE_PROP_CANCELABLE_RPC"));
          e.IsTrue(a) && !e.IsEmpty(s) && clearTimeout(s);
          if (e.IndexOf(["timeout", "error", "abort", "parsererror"], arguments[2].GetProperty(t.get("AJAX_FAIL_ERR"))) !== -1) o = !1;
          else if (arguments[0] === "CanInvokeMethod") {
              var f = arguments[2].GetProperty("Result");
              o = f === "true" ? !0 : !1
          } else u === h || !u ? o = !1 : u === c && (o = !0);
          o === !0 && this.FireInvokeMethod(arguments[0], arguments[1]), SiebelApp.S_App.GetEnablePerfHooks() && SiebelApp.S_App.GetTimer() && SiebelApp.S_App.GetTimer().TimeInvokeMethod("", this.GetName(), n, "Finished InvokeMethod");
          if (u === "DownloadFile") {
              var p = !this.CanUpdate(arguments[1].GetProperty(t.get("SWE_BCF_FIELD")));
              arguments[2].SetProperty(t.get("SWE_FA_FILE_READONLY_FLG"), p), SiebelApp.S_App.DownloadFile(arguments[2], arguments[1])
          }
          return o
      }, y.prototype.ProcessCancelQueryPopup = function() {}, y.prototype.CallServerApplet = function(n, r, i, s) {
          var o = !0;
          typeof s != "undefined" && (s.psresp === !0 || s.psresp === !1) && (o = s.psresp);
          var u = r.Clone();
          u.SetProperty(t.get("SWE_CMD_ARG"), t.get("SWE_CMD_INVOKE_METHOD_STR")), e.IsEmpty(this.GetView()) || (u.SetProperty(t.get("SWE_VIEW_ID_ARG"), this.GetView().GetBusObj().GetZone()), u.SetProperty(t.get("SWE_VIEW_ARG"), this.GetView().GetName())), (u.GetProperty(t.get("SWE_APPLET_STR")) === undefined || u.GetProperty(t.get("SWE_APPLET_STR") === null)) && u.SetProperty(t.get("SWE_APPLET_STR"), this.GetName()), u.SetProperty(t.get("SWE_METHOD_STR"), n);
          if (n != "CollapseTreeItem" && n != "ExpandTreeItem" && n != "NextTreeItem" && n != "PreviousTreeItem" && n != "SelectTreeItem") {
              var a;
              !this.GetBusComp() || (a = this.GetBusComp().GetIdValue(), u.SetProperty(t.get("SWE_ROW_ID_STR"), a)), a !== "" ? u.SetProperty(t.get("SWE_REQ_ROW_ID_STR"), "1") : u.SetProperty(t.get("SWE_REQ_ROW_ID_STR"), "0"), !this.GetBusComp() || this.GetRowIds(u)
          }(u.GetProperty(t.get("SWE_ROW_IDS_STR")) === undefined || u.GetProperty(t.get("SWE_ROW_IDS_STR") === null)) && this.GetRowIds(u), (u.GetProperty(t.get("SWE_ACTIVE_APPLET_STR")) === undefined || u.GetProperty(t.get("SWE_ACTIVE_APPLET_STR") === null)) && u.SetProperty(t.get("SWE_ACTIVE_APPLET_STR"), this.GetName()), (u.GetProperty(t.get("SWE_NEED_CONTEXT_STR")) === undefined || u.GetProperty(t.get("SWE_NEED_CONTEXT_STR") === null)) && u.SetProperty(t.get("SWE_NEED_CONTEXT_STR"), "true"), u.SetProperty(t.get("SWE_COUNT_STR"), SiebelApp.S_App.GetSWEReqCount()), this.GetPopBookMark() && u.SetProperty(t.get("SWE_POPUP_VECTOR_STR"), this.GetPopBookMark()), (n === t.get("SWE_EDIT_FIELD") || n === t.get("SWE_GET_PICK_INFO")) && u.SetProperty(t.get("SWE_JS_EXTRA_INFO"), "false"), SiebelApp.S_App.OfflineCallMethod("SetNewRecord", this, u), SiebelApp.S_App.CallServer(u, i, o, s)
      }, y.prototype.ExecuteUIUpdate = function() {
          this.DoExecuteUIUpdate()
      }, y.prototype.ClearUIState = function() {
          this.ClearUIEventMap();
          if (!this.GetBusComp()) return;
          this.GetBusComp().GetNotifyObject().Set_DoPopulate(this.GetName(), !1)
      }, y.prototype.DoExecuteUIUpdate = function() {
          var e;
          if (!this.GetBusComp()) return;
          e = this.GetBusComp().GetNotifyObject();
          if ((!e || !e.Get_EnableUIUpdate(this.GetName())) && !this.GetEnableExecuteUIUpdate()) return;
          if (e.Get_DoPopulate(this.GetName()) || this.GetEnableExecuteUIUpdate()) this.ShowSelection(), SiebelApp.S_App.GetEnablePerfHooks() && SiebelApp.S_App.GetTimer() && SiebelApp.S_App.GetTimer().TimePopulateApplet(this.GetName(), "Finished Populate Applet");
          this.GetUpdateConditionals() && this.UpdateConditionals(), this.InvokeStateChange(), e.Set_DoPopulate(this.GetName(), !1), this.SetEnableExecuteUIUpdate(!1), this.SetScrollDir(null), this.SetScrollAmount(0)
      }, y.prototype.ResetUIUpdateStates = function() {
          this.GetBusComp() && (this.GetBusComp().GetNotifyObject().Set_DoPopulate(this.GetName(), !1), this.SetEnableExecuteUIUpdate(!1), this.SetScrollDir(null), this.SetScrollAmount(0), this.SetUpdateConditionals(!1), this.ClearUIEventMap())
      }, y.prototype.UpdateQuickPickInfoSrvr = function(e) {
          var t, r, i = 6,
              s, o = e[3];
          t = e[4] === "false" ? !1 : !0, s = e[5];
          if (s.length !== 0 && t && e.length > i) {
              var u = [],
                  a = e.length;
              for (r = i; r < a; r++) u.push(e[r]);
              n.SetStaticPickValues(s, u)
          }
          this.UpdateQuickPickInfo(o, t, e, i)
      }, y.prototype.UpdateQuickPickInfo = function(e, t, n, r) {
          var i = [],
              s = n.length;
          for (var o = r; o < s; o++) i.push(n[o]);
          return i
      }, y.prototype.GetCachedCtrlQuickPick = function(e) {
          var n = this.GetControls(),
              r = e.GetProperty(t.get("SWE_FIELD_STR")),
              i = this.GetSelection();
          if (r)
              for (var s in n)
                  if (n.hasOwnProperty(s)) {
                      var o = n[s],
                          u = typeof o.GetInputName == "function" ? o.GetInputName() : o.GetSpanPrefix() + i + 1;
                      if (u === String(r)) return this.GetCachedQuickPick(e, r, o)
                  } return !1
      }, y.prototype.GetCachedQuickPick = function(t, n, r) {
          var i = [];
          return r.GetPickApplet().length === 0 ? !1 : (i = SiebelApp.S_App.GetStaticPickValues(r.GetPickApplet()), e.IsEmpty(i) || i.length === 0 ? !1 : (this.UpdateQuickPickInfo(n, !0, i, 0), !0))
      }, y.prototype.FieldDropdown = function(e) {
          var n = null,
              r = this.GetActiveControl(),
              i = [];
          if (this.IsPure()) {
              var s = CCFMiscUtil_CreatePropSet();
              typeof r.GetInputName == "function" ? n = r.GetInputName() : n = r.GetSpanPrefix() + this.GetSelection() + 1, s.SetProperty(f, n), s.SetProperty(t.get("SWEJI"), "false"), this.ClearUIState(), this.InvokeMethod("GetQuickPickInfo", s)
          } else {
              var o = r.GetRadioGroupPropSet(),
                  u = !0,
                  a;
              while (a = o.EnumChildren(u)) u = !1, i.push(a.GetProperty(p));
              n = r.GetInputName(), this.UpdateQuickPickInfo(n, !0, i, 0)
          }
      }, y.prototype.GetDrilldownURL = function(e, t, n) {}, y.prototype.PositionOnRow = function(e) {
          this.GetBusComp().PositionById(e.Id)
      }, y.prototype.CollectFieldValues = function(e) {
          this.DoCollectFieldValues(e), !this.GetBusComp() || this.CollectUpdatedBCValues(e)
      }, y.prototype.DoCollectFieldValues = function(t) {
          var n = this.GetControls();
          for (var r in n)
              if (n.hasOwnProperty(r)) {
                  var i = n[r],
                      s = i.GetUIType(),
                      o = i.GetFieldName(),
                      u = i.GetName(),
                      f = "",
                      l = this.GetBusComp();
                  if (s !== a)
                      if (o || this.IsPrivateField(u) || !this.IsPure()) {
                          if (!this.CanUpdate(u) || i.IsClientCtrl()) continue;
                          this.IsInQueryMode() ? e.IsEmpty(o) ? this.IsPrivateField(u) && (f = this.GetFormattedValue(i, !1)) : f = this.GetFieldValue(i) : f = this.GetFormattedValue(i, !1), i.GetCtrlFldEncode() && (f = e.ControlFieldEncode(f)), !e.IsEmpty(s) && s !== "JavaApplet" && (s.indexOf("J") === 0 || s.indexOf("P") === 0 || e.IndexOf(["Mailto", "URL", "Mvg", "Pick"], s) !== -1) && typeof i.GetInputName == "function" && (t.SetProperty(i.GetInputName(), f), SiebelApp.S_App.OfflineCallMethod("AddFieldName", this, t, r, f))
                      }
              }
      }, y.prototype.CollectUpdatedBCValues = function(e) {
          var t = 0,
              n = !0,
              r = [],
              i = [],
              s = {},
              o, u, a;
          while (o = this.GetBusComp().EnumUpdates(n)) {
              if (n) {
                  s = {};
                  var f = this.GetControls();
                  for (var l in f)
                      if (f.hasOwnProperty(l)) {
                          var c = f[l],
                              h = c.GetFieldName();
                          h && (s[h] = 1)
                      } n = !1
              }
              s[o.fieldName] !== 1 && (r[t] = o.fieldName, i[t] = o.newValue, t++)
          }
          return t < 1 ? !0 : (a = CCFMiscUtil_CreatePropSet(), u = CCFMiscUtil_CreatePropSet(), u.SetType("FieldValues"), a.AddChild(u), u.SetProperty("FieldArray", CCFMiscUtil_ArrayToString(r)), u.SetProperty("ValueArray", CCFMiscUtil_ArrayToString(i)), e.SetProperty("SWEBCVals", a.EncodeAsString()), !0)
      }, y.prototype.OnBlur = function(e, t) {
          var n;
          return n = this.LeaveField(e, t, !1), n && e && e.FireOnBlur(), n
      }, y.prototype.OnFocus = function(e, t) {
          var n;
          return n = this.EnterField(e, t), n && e && e.FireOnFocus(), n
      }, y.prototype.ProcessFormattedValue = function(e, t, n, r, i, s) {
          var o = this.SetFormattedValue(e, t);
          return this.OnActionsSetFormattedValue(e, n, r, i, s, o)
      }, y.prototype.OnActionsSetFormattedValue = function(t, n, r, i, s, o) {
          var u = this.GetBusComp();
          return o ? (!e.IsEmpty(t.GetFieldName()) && this.HasCustomShadow() && (r = this.GetFormattedFieldValue(t, !0), n = u ? this.GetFormattedValue(t, !0) : t.GetValue(), (n != r || i !== undefined && n != i) && this.FireOnChangeFieldValue(t.GetFieldName(), n)), !0) : (this.SetPrsrvControl(this.GetActiveControl()), u.ProcessError(), i = this.GetFormattedValue(t, !0), this.FieldChange(t, i), !1)
      }, y.prototype.LeaveField = function(n, r, i) {
          if (!n || n !== this.GetActiveControl()) return this.SetPrsrvControl(this.GetActiveControl()), this.SetActiveControl(null), !0;
          var s = this.GetBusComp(),
              o = n.GetFieldName(),
              u = s ? this.GetFormattedValue(n) : n.GetValue(),
              a = n.GetName(),
              f = this.TransformValue(n, r, u);
          if (f !== null) {
              if (!s)
                  if (n.GetRadioGroupPropSet().GetChildCount() !== 0) {
                      var m = n.GetRadioGroupPropSet(),
                          g = !0,
                          y, b = d;
                      n.GetUIType() === t.get("SWE_CTRL_COMBOBOX") && (b = p);
                      while (y = m.EnumChildren(g)) {
                          if (y.GetProperty(b) === r) {
                              var w = y.GetProperty(d);
                              n.GetValue = function() {
                                  return w
                              };
                              break
                          }
                          g = !1
                      }
                      m = null
                  } else n.GetValue =
                      function() {
                          return r
                      };
              else if (this.IsInQueryMode()) {
                  var l = n.GetUIType();
                  (l == t.get("SWE_CTRL_DATE_TZ_PICK") || l == t.get("SWE_CTRL_DATE_TIME_PICK") || l == t.get("SWE_CTRL_DATE_PICK")) && r && !r.match(/[><=!&|]/g) && (f = this.AssignQuotes(n, f, r)), e.IsEmpty(o) || s.SetFieldValue(o, f)
              } else {
                  var c;
                  if (this.CanUpdate(a) && (this.GetSelection() >= 0 || this.IsPrivateField(a))) {
                      var h = r,
                          l = n.GetUIType();
                      if (l == t.get("SWE_CTRL_COMBOBOX") || n.IsPostChanges()) c = this.GetFormattedFieldValue(n, !0);
                      var v = this.ProcessFormattedValue(n, f, r, u, c, i);
                      if (!v) return !1
                  }
              }
              SiebelApp.S_App.OfflineCallMethod("PassOldValue", this, n, r, u)
          }
          return i || (this.SetPrsrvControl(this.GetActiveControl()), n.GetCaseSensitive() && this.IsInQueryMode() && this.UpdateCSQueryMsg(!1), this.SetActiveControl(null)), !0
      }, y.prototype.UpdateCSQueryMsg = function() {}, y.prototype.AssignQuotes = function(n, r, i) {
          var s = SiebelApp.S_App.LocaleObject,
              o = n.GetUIType(),
              u;
          return !e.IsISO(o, i) && !e.IsEmpty(i) && (o === t.get("SWE_CTRL_DATE_TZ_PICK") || o === t.get("SWE_CTRL_DATE_TIME_PICK") ? u = s.GetStringFromDateTime(i, s.GetDateFormat() + " " + s.GetTimeFormat(), n.GetDisplayFormat() || s.GetDateFormat() + " " + s.GetTimeFormat()) : o === t.get("SWE_CTRL_DATE_PICK") && (u = s.GetStringFromDateTime(i, s.GetDateFormat(), n.GetDisplayFormat() || s.GetDateFormat()))), !e.IsEmpty(r) && r.charAt(0) !== '"' && r.charAt(r.length - 1) !== '"' && (u === i || e.IsISO(o, i)) ? r = '"' + r + '"' : r = i, r
      }, y.prototype.TransformValue = function(n, r, i) {
          var s = SiebelApp.S_App.LocaleObject,
              o = r,
              u = n.GetUIType();
          return u === t.get("SWE_CTRL_DATE_TZ_PICK") || u === t.get("SWE_CTRL_DATE_TIME_PICK") ? (i = this.GetFormattedValue(n, !0), e.IsISO(u, r) && (o = s.GetStringFromDateTime(r, t.get("ISO8601_DATETIME_FORMAT"), n.GetDisplayFormat() || s.GetDateFormat() + " " + s.GetTimeFormat()))) : u === t.get("SWE_CTRL_DATE_PICK") && (i = this.GetFormattedValue(n, !0), e.IsISO(u, r) && (o = s.GetStringFromDateTime(r, t.get("ISO_DATE_FORMAT"), n.GetDisplayFormat() || s.GetDateFormat()))), o === "" && r !== "" && (o = r), (u === t.get("SWE_CTRL_TEXT") || u === t.get("SWE_CTRL_PICK") || u === t.get("SWE_CTRL_MVG")) && i && i.indexOf("\n") !== -1 && (i = i.split("\n").join("")), i !== o ? o : null
      }, y.prototype.EnterField = function(e, t) {
          var n = !1;
          if (!this.GetActiveControl() && !e) return n;
          var r = this.GetPrsrvControl();
          return this.SetPrsrvControl(this.GetActiveControl()), !!this.GetView() && !this.GetView().SetActiveApplet(this) ? (e && this.SetFocusToCtrl(e.GetName(), !1), this.GetView().ProcessError(), this.SetPrsrvControl(r), n) : (this.SetActiveControl(e), e.GetCaseSensitive() && this.IsInQueryMode() && this.UpdateCSQueryMsg(!0), n = !0, n)
      }, y.prototype.GetFormattedFieldValue = function(t, n, r) {
          var i = t.GetFieldName(),
              s, o, u = this.GetBusComp(),
              a = u ? u.GetRecordSet() : [];
          if (!e.IsEmpty(t.GetControlMsg())) return s = C.call(this, t, n, a, r), s;
          if (!u) return t.GetValue() || "";
          t && this.IsPrivateField(t.GetName()) ? s = this.GetFieldValue(t, r) : s = N.call(this, t, n, a, r, i);
          if (SiebelApp.S_App.LocaleObject) {
              var f = u.GetField(i);
              if (!f && !this.IsPrivateField(t.GetName())) {
                  this.GetBusComp().SetErrorMsg("BCErrNoSuchField", i);
                  return
              }
              k.call(this, a, r, i);
              if (f) {
                  var l = f.GetDataType(),
                      c = s,
                      h = t.GetDisplayFormat();
                  s = SiebelApp.S_App.LocaleObject.StringToFormatted(l, c, h)
              }
          }
          return s
      }, y.prototype.SetFormattedValue = function(t, n) {
          var r, i, s, o = t.GetName(),
              u = !1;
          if (this.IsPrivateField(o)) {
              var a = this.GetPrivateFieldMap()[o];
              r = a.valueArray[0], this.IsInQueryMode() ? this.GetPrivateFieldMap()[o].queryModeVal = String(n) : a.valueArray.length > 0 ? a.valueArray[0] != n && (this.GetPrivateFieldMap()[o].valueArray[0] = String(n), this.GetPrivateFieldMap()[o].bDirty = !0, this.GetPrivateFieldMap()[o].allowPostChanges && (u = !0), m.indexOf(o) < 0 && this.SetPvtFieldsDirty(!0)) : (this.GetPrivateFieldMap()[o].valueArray.push(n), this.GetPrivateFieldMap()[o].bDirty = !0, this.GetPrivateFieldMap()[o].allowPostChanges && (u = !0), m.indexOf(o) < 0 && this.SetPvtFieldsDirty(!0))
          }
          if (!e.IsEmpty(t.GetFieldName())) {
              r = this.GetFormattedValue(t, !0);
              if (r === n && !this.IsPrivateField(o)) i = !0;
              else {
                  i = this.GetBusComp().SetFormattedValue(t.GetFieldName(), n, t.GetDisplayFormat());
                  if (!i) return this.FieldChange(t, r), this.SetFocusToCtrl(o, !0), i
              }
          } else if (!u) return !0;
          return n = this.GetFormattedValue(t, !0), e.IsEmpty(t.GetFieldName()) ? r != n && u && (i = this.PostChangesToBC(!1, t.GetFieldName())) : (s = this.GetBusComp().GetFieldMap()[t.GetFieldName()], s && r != n && (s.IsPostChanges() || s.IsBoundedPick()) && (i = this.PostChangesToBC(!1, t.GetFieldName()))), i
      }, y.prototype.GetFormattedValue = function(e, t) {
          var n = "";
          if (this.IsPrivateField(e.GetName())) return n = this.GetFieldValue(e), n;
          var r = this.GetBusComp();
          return r && (this.IsInQueryMode() || !t) ? n = this.GetBusComp().GetFormattedValue(-1, e.GetFieldName(), "") : n = this.GetFormattedFieldValue(e, !1), n
      }, y.prototype.PostChangesToBC = function(n, r, i) {
          var s = !0,
              o = CCFMiscUtil_CreatePropSet(),
              u, a, f;
          if (!this.IsPure()) return !0;
          a = this.HasPendingCommit(r, n), f = this.GetBusComp().IsDeletePending();
          if (a || f) {
              if (!n) return e.IsEmpty(r) || o.SetProperty(t.get("SWE_POST_ON_CHANGE_STR"), r), i && o.SetProperty(t.get("SWE_POST_FORCE_STR"), "Y"), u = "PostChanges", SiebelApp.S_App.uiStatus.Busy({}), s = this.InvokeMethod(u, o), SiebelApp.S_App.uiStatus.Free(), s;
              f && !a && o.SetProperty(t.get("SWE_DELETE_ONLY"), "1"), u = "WriteRecord";
              if (this.CanInvokeMethod(u)) {
                  if (i) {
                      var l = {};
                      l.ev = t.get("EVENT_NO_FOCUS"), this.SetUIEventMap(l)
                  }
                  return s = this.InvokeMethod(u, o), s
              }
          }
          return this.ClearErrorMsg(), s
      }, y.prototype.HasPendingCommit = function(t, n) {
          var r = t && this.GetActiveControl() && !e.IsEmpty(this.GetActiveControl().GetFieldName()) && this.GetActiveControl().GetFieldName() == t,
              i = this.GetBusComp() && this.GetBusComp().IsCommitPending(),
              s = !1,
              o = this.GetControls();
          for (var u in o)
              if (this.IsPrivateField(u) && this.GetPrivateFieldMap()[u].bDirty === !0 && this.GetPrivateFieldMap()[u].allowPostChanges === !0) {
                  s = !0;
                  break
              } return r || i || s
      }, y.prototype.UpdateRowCounter = function() {}, y.prototype.ShowSelection = function(e) {
          !this.GetBusComp() || this.UpdateRowCounter()
      }, y.prototype.RefreshData = function(e) {}, y.prototype.FieldChange = function(e, t) {
          this.SetCommitPending(L.call(this))
      }, y.prototype.UpdateStateChange = function() {}, y.prototype.InvokeStateChange = function() {}, y.prototype.OnCommitStateChange = function() {}, y.prototype.Notify =
      function(e) {
          var n = t.get("SWE_NOTIFICATION_TYPE_POSITION"),
              r = t.get("SWE_NOTIFICATION_TYPE_REQUERY");
          switch (e) {
              case n:
                  this.ShowSelection();
                  break;
              case r:
                  this.RefreshData(!0), this.ShowSelection()
          }
      }, y.prototype.NotifyBeginNotifys = function() {
          this.UpdateAppletMessage()
      }, y.prototype.NotifyNewActiveRow = function() {
          var t;
          if (e.IsEmpty(this.GetBusComp())) return;
          t = this.GetBusComp().GetNotifyObject(), t && t.Get_EnableUIUpdate(this.GetName()) && t.Set_DoPopulate(this.GetName(), !0)
      }, y.prototype.NotifyChangeSelection = function() {
          if (!this.GetEnableUIUpdate()) return;
          this.UpdateRowCounter()
      }, y.prototype.NotifyDeleteRecord = function(t, n) {
          var r;
          if (e.IsEmpty(this.GetBusComp())) return;
          r = this.GetBusComp().GetNotifyObject();
          if (!r || !r.Get_EnableUIUpdate(this.GetName())) return;
          r.SetDoPopulate(this.GetName(), !0), this.FireOnChangeRecord()
      }, y.prototype.HandleCtrlDefChange = function(e) {}, y.prototype.NotifyGeneric = function(e, t) {
          var n = CCFMiscUtil_CreatePropSet();
          n.SetType(e);
          var r = t.length;
          for (var i = 0; i < r; i++) n.SetProperty(i.toString(), t[i]);
          switch (e) {
              case "SWEICanInvokeMethod":
                  this.NotifyCanInvokeMethod(e, t);
                  break;
              case "SWEICtlDefChanged":
                  A.call(this, t);
                  break;
              case "SWEIPrivFlds":
                  this.NotifyPrivateFields(e, t);
                  break;
              case "SWEICanUpdate":
                  this.NotifyCanUpdate(e, t);
                  break;
              case "SWEICanNavigate":
                  this.NotifyCanNavigate(e, t);
                  break;
              case "SWEAInvokeMethod":
                  this.NotifyInvokeMethod(e, t);
                  break;
              case "DeletePopup":
                  t[0] === this.GetName() && this.DeletePopup();
                  break;
              case "SetPopupBookmark":
                  t[0] === this.GetName() && this.SetPopBookMark(t[1]);
                  break;
              case "GetQuickPickInfo":
                  t[2] === this.GetName() && this.UpdateQuickPickInfoSrvr(t);
                  break;
              case "GetAutoQuickPickInfo":
                  t[0] === this.GetName() && T.call(this, t);
                  break;
              case "BegRow":
                  O.call(this, t);
                  break;
              case "GetCurrencyCalcInfo":
                  t[2] === this.GetName() && this.UpdateCurrencyCodeInfo(0, t);
                  break;
              case "GetCurrencyCodeInfo":
                  t[2] === this.GetName() && this.UpdateCurrencyCodeInfo(1, t);
                  break;
              case "CloseCurrencyPickApplet":
                  t[2] === this.GetName() && this.UpdateCurrencyCodeInfo(2, t);
                  break;
              default:
          }
          return SiebelApp.EventManager.fireEvent("ProxyComplete", [this, e, t]), !0
      }, y.prototype.NotifyStateChanged = function(e, t) {
          this.UpdateAppletMessage(e, t), (e === "np" || e === "cp") && this.SetCommitPending(L.call(this)), (e === "bInQueryState" || e === "qs") && this.SetUpdateConditionals(!0)
      }, y.prototype.NotifyPageRefresh = function() {
          var e;
          if (!this.GetEnableUIUpdate() && !this.GetView().GetActiveApplet()) return;
          e = "?SWECmd=Refresh&SWEFullRefresh=true&SWEView=" + this.GetView().GetName() + "&SWEApplet=" + this.GetView().GetActiveApplet().GetName() + "#SWEApplet=" + this.GetView().GetActiveApplet().GetId(), SiebelApp.S_App.SetURLToGo(e, "", !0, this.GetView().GetName(), this.GetView().GetBusObj().GetZone(), !0)
      }, y.prototype.NotifyInvokeMethod = function(t, n) {
          var r, i, s = CCFMiscUtil_CreatePropSet();
          n.length >= 2 && (r = n[0], i = n[1], r === this.GetName() && !e.IsEmpty(i) && this.InvokeMethod(i, s, !0))
      }, y.prototype.NotifyNewPrimary = function(e) {}, y.prototype.NotifyEndNotifys = function() {
          return !0
      }, y.prototype.NotifyNewFieldData = function(t) {
          var n;
          if (e.IsEmpty(this.GetBusComp())) return;
          n = this.GetBusComp().GetNotifyObject();
          if (!n || !n.Get_EnableUIUpdate(this.GetName())) return;
          this.RepopulateField(t, !1, !1)
      }, y.prototype.NotifyNewFieldList = function() {
          var e, t = this.GetView();
          if (t) {
              var n = t.GetActiveApplet();
              if (!this.GetEnableUIUpdate() && !n) return;
              e = "?SWECmd=Refresh&SWEView=" + t.GetName() + "&SWEApplet=" + n.GetName(), SiebelApp.S_App.SetURLToGo(e, "", !0, t.GetName(), t.GetBusObj().GetZone(), !0)
          }
      }, y.prototype.NotifyNewDataWS = function(t) {
          var n;
          this.RepopulateField(t, !1, !1);
          if (e.IsEmpty(this.GetBusComp())) return;
          n = this.GetBusComp().GetNotifyObject();
          if (!n || !n.Get_EnableUIUpdate(this.GetName())) return
      }, y.prototype.NotifyNewRecordDataWS = function() {
          var e;
          if (!this.GetBusComp()) return;
          e = this.GetBusComp().GetNotifyObject();
          if (!e || !e.Get_EnableUIUpdate(this.GetName())) return;
          e.Set_DoPopulate(this.GetName(), !0)
      }, y.prototype.NotifyNewQuerySpec = function() {
          var e = this.GetPrivateFieldMap();
          for (var t in e) e.hasOwnProperty(t) && (e[t].queryModeVal = "")
      }, y.prototype.NotifyBeginQuery = function() {
          var t = this.GetBusComp().GetNotifyObject();
          t.SetDoPopulate(this.GetName(), !0), (e.IsEmpty(this.GetView()) || this === this.GetView().GetActiveApplet()) && this.SetFocusDefaultControl(!0), this.BeginQueryState()
      }, y.prototype.NotifyNewFieldQuerySpec = function(t) {
          var n;
          if (e.IsEmpty(this.GetBusComp())) return;
          n = this.GetBusComp().GetNotifyObject();
          if (!n || !n.Get_EnableUIUpdate(this.GetName())) return;
          this.RepopulateField(t, !1, !1)
      }, y.prototype.NotifyScrollAmount = function(e, t) {
          this.SetScrollDir(e), this.SetScrollAmount(t)
      }, y.prototype.NotifyEndQuery = function() {
          this.EndQueryState()
      }, y.prototype.BeginQueryState = function() {}, y.prototype.EndQueryState = function() {}, y.prototype.NotifyExecute = function() {}, y.prototype.NotifyCanUpdate = function(t, n) {
          if (n.length > 0 && n[0] === this.GetName()) {
              var r = 0,
                  i = !0,
                  s, o;
              for (var u = 1, a = n.length; u < a; u += 2) {
                  r = parseInt(n[u], 10), s = n[u + 1];
                  if (isNaN(r)) continue;
                  i = s === "1" || s === "Y" || s === "y" ? !0 : !1;
                  if (r >= this.GetCanUpdateArray().length) continue;
                  o = this.GetCanUpdateArray()[r];
                  if (e.IsEmpty(o)) continue;
                  this.GetCanUpdateByName()[o].bCanUpdate = i
              }
              this.CanUpdateUI() === !0 && this.UpdateStateChange()
          }
      }, y.prototype.NotifyCanNavigate = function(e, t) {
          var n, r, i, s = [],
              o, u = t.length;
          if (t && u > 0) {
              o = t[0];
              if (o === this.GetName()) {
                  for (n = 1; n < u; n++) {
                      i = t[n];
                      if (!i) continue;
                      if (i.charAt(0) === "*") {
                          s.length > 0 && (this.GetCanNavigateMap()[r] = s), r = i.substr(1), s = [];
                          continue
                      }
                      if (!r) continue;
                      s.push(i)
                  }
                  s.length > 0 && (this.GetCanNavigateMap()[r] = s), this.NavigateState()
              }
          }
      }, y.prototype.NavigateState = function() {}, y.prototype.NotifyPrivateFields = function(n, r) {
          var i;
          if (r.length > 0) {
              if (r[0] === this.GetName()) {
                  var s = 0,
                      o = null,
                      u = null,
                      a = !1,
                      f = !0,
                      l = [t.get("SWE_QUERY_COMBO_BOX"), t.get("SWE_QUERY_SEARCH_SPEC"), t.get("SWE_POPUP_QUERY_COMBO_BOX"), t.get("SWE_POPUP_QUERY_SEARCH_SPEC")];
                  for (var c = 1, h = r.length; c < h; c++) {
                      o = r[c];
                      if (e.IsEmpty(o)) continue;
                      if (o.charAt(0) === "*") {
                          u = o.substr(1), s = 0, a = !0;
                          if (f) {
                              var p = this.GetControl(u);
                              if (p) {
                                  var d = p.GetControlType();
                                  d && d === "co" && (this.SetEnableExecuteUIUpdate(!0), f = !1)
                              }
                          }
                      }
                      if (o.charAt(0) === "@") {
                          valueSet = CCFMiscUtil_CreatePropSet(), o = o.substr(1), valueSet.DecodeFromString(o);
                          var v = this.GetControl(u);
                          if (v) {
                              for (var m = 0; m < valueSet.GetChildCount(); m++) {
                                  var g = valueSet.GetChild(m),
                                      y = g.GetProperty("FieldValue"),
                                      b = g.GetProperty("Selected");
                                  if (b) {
                                      var w = y;
                                      v.GetValue = function() {
                                          return w
                                      }
                                  }
                              }
                              v.SetRadioGroupPropSet(valueSet), this.RepopulateField(u, !1, !0)
                          }
                      }
                      o = o.substr(1);
                      if (e.IsEmpty(u)) continue;
                      this.GetPrivateFieldMap() || this.SetPrivateFieldMap(), this.GetPrivateFieldMap()[u] || (this.GetPrivateFieldMap()[u] = {});
                      if (a) {
                          this.GetPrivateFieldMap()[u].valueArray = [], this.GetPrivateFieldMap()[u].bDirty = !1, a = !1;
                          continue
                      }
                      this.GetPrivateFieldMap()[u].valueArray && s >= this.GetPrivateFieldMap()[u].valueArray.length ? (this.GetPrivateFieldMap()[u].valueArray[s++] = String(o), s = this.GetPrivateFieldMap()[u].valueArray.length) : this.GetPrivateFieldMap()[u].valueArray ? this.GetPrivateFieldMap()[u].valueArray[s++] = String(o) : (this.GetPrivateFieldMap()[u].valueArray = [], this.GetPrivateFieldMap()[u].valueArray[s++] = String(o));
                      var E = this.GetControls()[u],
                          S, x = this.GetPrivateFieldMap()[u].valueArray || [];
                      E && -1 < l.indexOf(E.GetName()) && (S = this.GetControlValueFromUI(E), x[s - 1] = S), this.GetPrivateFieldMap()[u].valueArray = x, this.CanUpdateUI() === !0 && (i || (i = {}, i.ar = []), i.ar.push(u))
                  }
                  i && (i.ev = t.get("NOT_PRV_FIELDS"), this.SetUIEventMap(i))
              }
              this.SetPvtFieldsDirty(), this.SetCommitPending(L.call(this))
          }
      }, y.prototype.NotifyCanInvokeMethod = function(t, n) {
          if (n.length > 0 && n[0] === this.GetName()) {
              var r = 0,
                  i = !0,
                  s, o, u = !1;
              for (var a = 1, f = n.length; a < f; a += 2) {
                  r = parseInt(n[a], 10), s = n[a + 1];
                  if (isNaN(r)) continue;
                  if (e.IsEmpty(s)) continue;
                  i = s === "1" || s === "Y" || s === "y" ? !0 : !1;
                  if (r >= this.GetCanInvokeArray().length) continue;
                  o = this.GetCanInvokeArray()[r];
                  if (e.IsEmpty(o)) continue;
                  this.GetCanInvokeByName()[o] ? this.GetCanInvokeByName()[o].bCanInvoke !== i && (this.GetCanInvokeByName()[o].bCanInvoke = i, u = !0) : (this.GetCanInvokeByName()[o] = {}, this.GetCanInvokeByName()[o].bCanInvoke = i, u = !0)
              }
              return this.CanUpdateUI() === !0 && u === !0 && this.InvokeStateChange(), u
          }
      }, y.prototype.ShowPopup = function(e) {
          return
      }, y.prototype.FieldPopup = function(n) {
          var r = CCFMiscUtil_CreatePropSet(),
              i = this.GetActiveControl();
          if (!i) return;
          SiebelApp.S_App.GetEnablePerfHooks() && SiebelApp.S_App.GetTimer() && SiebelApp.S_App.GetTimer().TimePopupApplet("", "Start PopupApplet");
          var s = i.GetHeight(),
              o = i.GetWidth(),
              u = null;
          typeof i.GetSpanPrefix == "function" ? (u = i.GetSpanPrefix(), e.IsEmpty(this.GetSelection()) || (u += this.GetSelection() + 1)) : u = i.GetInputName(), r.SetProperty(t.get("SWE_FIELD_STR"), u), r.SetProperty(t.get("SWE_METHOD_STR"), "EditField"), r.SetProperty(t.get("SWE_SHOW_POPUP_STR"), "true"), r.SetProperty(t.get("SWE_HEIGHT_STR"), s), r.SetProperty(t.get("SWE_WIDTH_STR"), o), r.SetProperty("SWECSP", "false"), this.InvokeMethod("EditField", r, n)
      }, y.prototype.DeletePopup = function() {
          var e = this.GetPopupApplet();
          e && (e.Close(), this.SetPopupApplet(null))
      }, y.prototype.Close = function() {
          if (this.IsPopupClosed()) return;
          var t = this.GetParentApplet();
          if (e.IsEmpty(this.GetView()) || this.GetView().IsAppletActive(this) || this.GetView().GetActiveAppletOnLoad() === this) t && t.GetPopupControl() && !t.GetActiveControl(), b.call(this, !1), e.IsEmpty(this.GetView()) || (t.GetParentApplet() ? this.GetView().SetActiveAppletOnLoad(t) : this.GetView().SetActiveApplet(t));
          var n = this.GetBusComp();
          b.call(this, !1), n && n.DeRegister(this), t && (t.SetPopupMethod(null), t.SetPopupControl(null)), n && t && n !== t.GetBusComp() && n.GetBusObj().RemoveBusComp(this.GetBusComp()), t && this.SetParentApplet(null), e.IsEmpty(this.GetView()) ? SiebelApp.S_App.RemoveApplet(this) : this.GetView().RemoveApplet(this), this.SetPopupClosed(!0)
      }, y.prototype.SetAppletActive = function(e, t) {
          var n = !1;
          return this.HandleImplicitCommit(e, t) ? (n = this.DoSetAppletActive(e, t), e && this.RestoreControlFocus(), SiebelApp.S_App.IsExternalApplet(this) && SiebelApp.S_App.SetExternalActiveApplet(e ? this : null), n) : n
      }, y.prototype.DelayPostOnLastActive = function() {
          return !1
      }, y.prototype.SetAppletToDelayPost = function() {
          return
      }, y.prototype.HandleImplicitCommit = function(t, n) {
          var r = !0,
              i = null;
          if (n && !n.GetBusComp() && n.GetView() && n.GetView() !== SiebelApp.S_App.GetActiveView()) return !1;
          if (!n || n && !n.DelayPostOnLastActive()) {
              n && (i = n.GetParentApplet());
              if (!t) {
                  if (!this.SetActiveCtrlValue()) return r = !1;
                  var s = this.GetBusComp();
                  if (!n || (s && (s.IsTransientBC() || n.GetBusComp() !== s || e.IsTrue(n.IsNoUpdate()) && !s.insertPending) || !e.IsTrue(n.IsEditable())) && n !== this.GetParentApplet() && (!this.GetParentApplet() || this !== this.GetParentApplet()) && !this.GetPopupApplet()) {
                      var o;
                      n && n !== this && (o = !0), SiebelApp.S_App.SetShowNewPage(!1);
                      if (!this.PostChangesToBC(!0, null, o) || SiebelApp.S_App.GetShowNewPage()) return r = !1
                  }
              }
          } else !t && !this.DelayPostOnLastActive() && n.SetAppletToDelayPost(this);
          return r
      }, y.prototype.SetActiveCtrlValue = function() {
          var e = !0,
              t = !1;
          return this.GetActiveControl() ? e : e
      }, y.prototype.RestoreControlFocus = function() {
          if (!e.IsEmpty(this.GetView()) && !this.GetView().IsAppletActive(this) || !this.CanUpdateUI() || e.IsTrue(this.IsMenuOnFocus())) return;
          var t = this.GetActiveControl() || this.GetPrsrvControl();
          t && this.SetFocusToCtrl(t.GetName(), !0)
      }, y.prototype.SetFocusToCtrl = function(e) {}, y.prototype.DoSetAppletActive = function(e, t) {
          return this.CanUpdateUI() ? (this.SetHighlightState(e, t), this.ClearErrorMsg(), !0) : !0
      }, y.prototype.FocusFirstControl = function() {}, y.prototype.FocusSelectedTreeNode = function(e) {}, y.prototype.SetHighlightState = function(e, t) {}, y.prototype.FocusOnApplet = function() {}, y.prototype.DispatchFocus = function(e) {
          e ? this.FocusFirstControl() : this.FocusOnApplet()
      }, y.prototype.FocusDefaultControl = function(t) {
          var n = !1,
              r;
          e.IsEmpty(t) && (t = !1);
          if (!this.GetFocusDefaultControl()) return;
          this.IsInQueryMode() ? r = this.GetDefaultFocusOnQuery() : !!this.GetBusComp() && this.GetBusComp().insertPending || this.GetNewRecordInToggle() ? (r = this.GetDefaultFocusOnNew(), this.SetNewRecordInToggle(!1), n = !1) : (r = this.GetDefaultFocusOnEdit(), n = !0), e.IsEmpty(r) ? this.DispatchFocus(t || !n) : this.SetFocusToCtrl(r, !0), this.SetFocusDefaultControl(!1)
      }, y.prototype.GetActiveMode = function() {
          return this.GetBusComp() == null ? "" : this.GetBusComp().IsInsertPending() ? "New" : "Edit"
      }, y.prototype.GetControlElement = function(e) {
          var t;
          return t = this.GetControl(e), t == null ? null : t.GetInputName() ? $("[name='" + t.GetInputName() + "']")[0] : null
      }, y.prototype.GetControlValueFromUI = function(e) {
          if (!e) {
              e = this.GetActiveControl();
              if (!e) return
          }
          return this.GetPhysicalControlValue(e), this.GetPModel().Get("PhysicalCtrlVal")
      }, y.prototype.GetPhysicalControlValue = function(e) {}, y.prototype.GetControlValueByName = function(e) {
          var t = this.GetControl(e);
          return t != null ? this.GetFormattedValue(t, !0) : ""
      }, y.prototype.SetControlValueByName = function(e, t) {
          var n = this.GetControl(e);
          n != null && (this.FieldChange(n, t), this.SetFormattedValue(n, t))
      }, y.prototype.ForceProcessResponse = function(t, n, r) {
          if (!e.IsEmpty(r)) {
              var i = {};
              i.scope = this, i.args = [], i.args.push(t), i.selfbusy = !1, i.mask = !0, i.async = !0, i.opdecode = !0, i.cb = function() {
                  var e = Array.prototype.slice.call(arguments);
                  this.PostExecute(t, n, e[e.length - 1], i)
              };
              var s = {};
              s.scope = SiebelApp.S_App, s.lp = i, s.outputPS = CCFMiscUtil_CreatePropSet(), s.nPR = !0, SiebelApp.S_App.OnSuccessCallServer.call(s, r, status, {})
          }
      }, y.prototype.FirePreInvokeMethod = function(e, t) {
          var n;
          return this.HasCustomShadow() && this.shadow && typeof this.shadow.OnPreInvokeMethod == "function" ? (n = this.shadow.OnPreInvokeMethod(e, t), n == "CancelOperation" ? !1 : !0) : !0
      }, y.prototype.FireInvokeMethod = function(e, t) {
          this.HasCustomShadow() && this.shadow && typeof this.shadow.OnInvokeMethod == "function" && this.shadow.OnInvokeMethod(e, t)
      }, y.prototype.FireOnChangeRecord = function() {
          this.HasCustomShadow() && this.shadow && typeof this.shadow.OnChangeRecord == "function" && this.shadow.OnChangeRecord()
      }, y.prototype.FireOnChangeFieldValue = function(e, t) {
          this.HasCustomShadow() && this.shadow && typeof this.shadow.OnChangeFieldValue == "function" && this.shadow.OnChangeFieldValue(e, t)
      }, y.prototype.NewFileAttachment = function(n, r) {
          var i = this.GetBusComp(),
              s = "",
              o = {},
              u = "",
              a = "",
              f = "",
              l = this.GetControls(),
              c = null,
              h = CCFMiscUtil_CreatePropSet();
          o[t.get("SWE_PROP_SESSION_RANDOM_NUMBER")] = SiebelApp.S_App.GetSRN();
          if (!r && i && i.IsClientOnlyCommitPending()) {
              var p = this.InvokeMethod("WriteRecord", h);
              if (!p || i.IsClientOnlyCommitPending()) return this.HasErrorMsg() && this.ProcessError(), !1
          }
          s = this.GetPopBookMark(), s || (s = "");
          if (n) {
              this.CollectFieldValues(h);
              for (var d = !0;
                  (sKey = h.EnumProperties(d)) !== null; d = !1) sValue = h.GetProperty(sKey), o[sKey] = sValue
          }
          e.IsEmpty(this.GetView()) || (o[t.get("SWE_VIEW_ARG")] = this.GetView().GetName()), o[t.get("SWE_APPLET_STR")] = this.GetName(), u = CCFMiscUtil_CreatePropSet(), !this.GetBusComp() || (a = this.GetRowIds(u)), a || (a = ""), o[t.get("SWE_ROW_IDS_STR")] = a, o[t.get("SWE_POPUP_VECTOR_STR")] = s, c = l[String(t.get("SWE_FILE_NAME_STR"))];
          if (n || !e.IsEmpty(s) && this.GetParentApplet() && c && c.GetUIType() === t.get("SWE_CTRL_FILE")) !this.GetBusComp() || (f = this.GetBusComp().GetIdValue(), o[t.get("SWE_ROW_ID_STR")] = f), f !== "" ? o[t.get("SWE_REQ_ROW_ID_STR")] = "1" : o[t.get("SWE_REQ_ROW_ID_STR")] = "0", o[t.get("SWE_COUNT_STR")] = SiebelApp.S_App.GetSWEReqCount().toString(), o[t.get("SWE_CMD_ARG")] = t.get("SWE_CMD_INVOKE_METHOD_STR");
          n ? o[t.get("SWE_METHOD_STR")] = n.GetMethodName() : !e.IsEmpty(s) && this.GetParentApplet() && c && c.GetUIType() === t.get("SWE_CTRL_FILE") ? o[t.get("SWE_METHOD_STR")] = t.get("SWE_METHOD_WRITE_RECORD") : (o[t.get("SWE_CMD_ARG")] = t.get("SWE_CMD_INVOKE_METHOD_STR"), o[t.get("SWE_METHOD_STR")] = t.get("SWE_METHOD_NEW_FILE_ATTACHMENT"));
          var v = new Date;
          return o[t.get("SWE_TIME_STAMP")] = v.getTime(), o[t.get("SWE_VIEW_RPC_ARG")] = "1", o
      }, y.prototype.IsInQueryMode = function() {
          return this.GetBusComp() ? this.GetBusComp().IsInQueryState() : !1
      }, y.prototype.UpdateCurrencyCalcInfo = function(e, t) {
          return
      }, y.prototype.UpdateCurrencyCodeInfo = function(e, t) {
          if (t[1] != this.GetView().GetName()) return;
          this.SetCurrencyApplet(), this.GetCurrencyApplet().UpdateCurrencyInfo(e, CCFMiscUtil_ArrayToString(t)), this.GetCurrencyApplet().SetQueryMode(this.IsInQueryMode()), e != 1 && this.UpdateCurrencyCalcInfo(e, t)
      }, y.prototype.CurrencyPostChanges = function(e, t) {
          return this.GetCurrencyApplet().PostChangesOnBlur()
      }, y.prototype.UpdateConditionals = function() {}, y.prototype.GetEmptyRecordForQuery = function() {
          var t = this.GetBusComp().GetFieldList(),
              n = {},
              r = 0,
              i = "",
              s = t.length;
          for (r = 0; r < s; r++) {
              i = SiebelApp.S_App.LookupStringCache(t[r]);
              if (!e.IsEmpty(i)) {
                  var o = this.GetBusComp().GetFieldValue(i);
                  n[i] = e.IsEmpty(o) ? "" : o
              }
          }
          return n
      }, y.prototype.GetWSStartRowNum = function() {
          var e = 0;
          return this.GetBusComp().IsNumRowsKnown() && this.GetBusComp().GetNumRows() === 0 ? e : (e = this.GetBusComp().GetCurRowNum() - this.GetBusComp().GetSelection() + this.GetBusComp().GetNotifyObject().GetBegRow(this.GetName()), e)
      }, y.prototype.GetWSEndRowNum = function() {
          var e = this.GetWSStartRowNum() + this.GetRowListRowCount() - 1,
              t = this.GetBusComp().GetNumRows();
          return e > t && (e = t), e
      }, y.prototype.AddToGroupModel = function(n, r, i, s) {
          var o = this.GetGlobalPropSet(),
              u = !1;
          e.IsEmpty(o.GetType()) && o.SetType("Root");
          var a = o.EnumChildren(!0);
          if (!a) {
              var f = CCFMiscUtil_CreatePropSet(),
                  l = CCFMiscUtil_CreatePropSet();
              f.SetType(n), f.SetProperty(t.get("SWE_CNTRL_SEQUENCE"), i), l.SetType(r), r ? (l.InsertChildAt(f, 0), o.InsertChildAt(l, 0)) : o.InsertChildAt(f, 0)
          } else {
              if (e.IsEmpty(r)) {
                  var c = this.FindPS(o, n);
                  if (!c) {
                      var f = CCFMiscUtil_CreatePropSet();
                      f.SetType(n), f.SetProperty(t.get("SWE_CNTRL_SEQUENCE"), i), this.AddChildAtIndex(o, f)
                  } else e.IsEmpty(c.GetProperty(t.get("SWE_CNTRL_SEQUENCE"))) && (c.SetProperty(t.get("SWE_CNTRL_SEQUENCE"), i), this.OrderPropSetByIndex(o, c))
              }
              var h = this.FindPS(o, r),
                  c = this.FindPS(o, n);
              if (!e.IsEmpty(r))
                  if (!h && c) {
                      var l = CCFMiscUtil_CreatePropSet();
                      l.SetType(r), o.InsertChildAt(l, 0), e.IsEmpty(c.GetProperty(t.get("SWE_CNTRL_SEQUENCE"))) && c.SetProperty(t.get("SWE_CNTRL_SEQUENCE"), i), this.AddChildtoParent(o, n, r, "child is present")
                  } else if (!h && !c) {
                  var l = CCFMiscUtil_CreatePropSet(),
                      f = CCFMiscUtil_CreatePropSet();
                  f.SetType(n), f.SetProperty(t.get("SWE_CNTRL_SEQUENCE"), i), l.SetType(r), l.InsertChildAt(f, 0), o.InsertChildAt(l, 0)
              } else h && !c ? this.AddChildtoParent(o, n, r, "child not present", i) : h && c && (e.IsEmpty(c.GetProperty(t.get("SWE_CNTRL_SEQUENCE"))) && c.SetProperty(t.get("SWE_CNTRL_SEQUENCE"), i), this.AddChildtoParent(o, n, r, "both are present", i))
          }
      }, y.prototype.FindGroupPS = function(e, t) {
          var n = e.EnumChildren(!0);
          while (n !== null) {
              var r = n.GetType();
              if (r === t) return n;
              if (n.GetChildCount() > 0) {
                  var i = this.FindGroupPS(n, t);
                  if (i != null) return i
              }
              n = e.EnumChildren(!1)
          }
      }, y.prototype.FindPS = function(e, t) {
          var n = e.EnumChildren(!0);
          while (n !== null) {
              var r = n.GetType();
              if (r === t) return n;
              if (n.GetChildCount() > 0) {
                  var i = this.FindGroupPS(n, t);
                  if (i != null) return i
              }
              n = e.EnumChildren(!1)
          }
      }, y.prototype.AddChildtoParent = function(e, n, r, i, s) {
          var o = this.GetGlobalPropSet();
          switch (i) {
              case "child not present":
                  var u = !1,
                      a = e.EnumChildren(!0),
                      f = 0;
                  do {
                      var l = a.GetType();
                      if (l === r) {
                          u = !0;
                          var c = CCFMiscUtil_CreatePropSet();
                          c.SetType(n), c.SetProperty(t.get("SWE_CNTRL_SEQUENCE"), s), this.AddChildAtIndex(a, c);
                          break
                      }
                      a.GetChildCount() > 0 && this.AddChildtoParent(a, n, r, "child not present", s)
                  } while (a = e.EnumChildren(!1));
                  break;
              case "child is present":
                  var u = !1,
                      a = e.EnumChildren(!0),
                      f = 0;
                  do {
                      var l = a.GetType();
                      if (l === n) {
                          u = !0;
                          var h = a;
                          e.RemoveChild(f), this.MoveChildUnderParent(o, h, n, r);
                          break
                      }
                      a.GetChildCount() > 0 && this.AddChildtoParent(a, n, r, "child is present", s), f++
                  } while (a = e.EnumChildren(!1));
                  break;
              case "both are present":
                  var p = !1,
                      a = e.EnumChildren(!0),
                      f = 0;
                  do {
                      var l = a.GetType();
                      if (l === n) {
                          p = !0;
                          var h = a;
                          e.RemoveChild(f), this.MoveChildUnderParent(o, h, n, r, s);
                          break
                      }
                      a.GetChildCount() > 0 && this.AddChildtoParent(a, n, r, "both are present", s), f++
                  } while (a = e.EnumChildren(!1))
          }
      }, y.prototype.MoveChildUnderParent = function(e, t, n, r, i) {
          var s = !1,
              o = e.EnumChildren(!0),
              u = 0;
          do {
              var a = o.GetType();
              if (a === r) {
                  s = !0, this.AddChildAtIndex(o, t);
                  break
              }
              o.GetChildCount() > 0 && this.MoveChildUnderParent(o, t, n, r, i), u++
          } while (o = e.EnumChildren(!1))
      }, y.prototype.AddChildAtIndex = function(e, n) {
          var r = 0,
              i = n.GetProperty(t.get("SWE_CNTRL_SEQUENCE"));
          if (e.GetChildCount() <= 0) r = 0;
          else {
              for (count = 0; count < e.GetChildCount(); count++)
                  if (e.GetChild(count).GetPropertyCount() != 0 && parseInt(e.GetChild(count).GetProperty(t.get("SWE_CNTRL_SEQUENCE")), 10) >= parseInt(i, 10)) break;
              r = count
          }
          e.InsertChildAt(n, r);
          return
      }, y.prototype.OrderPropSetByIndex = function(e, t) {
          var n = !1,
              r = t.GetType(),
              i = e.EnumChildren(!0),
              s = 0;
          do {
              var o = i.GetType();
              if (o === r) {
                  n = !0;
                  var u = i;
                  e.RemoveChild(s), this.AddChildAtIndex(e, u);
                  break
              }
              s++
          } while (i = e.EnumChildren(!1))
      }, y.prototype.GetGroupModel = function(e) {
          var t = CCFMiscUtil_CreatePropSet(),
              n = CCFMiscUtil_CreatePropSet();
          t = e.Clone(), n = e.Clone();
          if (e.GetChildCount() != 0) {
              var r = t.EnumChildren(!0),
                  i = 0;
              while (r != null) r.GetChildCount() === 0 ? n.RemoveChild(i) : i++, r = t.EnumChildren(!1)
          }
          return n
      }, y.prototype.GetGroupPSInfo = function(e, t, n) {
          var r = null,
              i = 0;
          n = typeof n == "undefined" ? 1 : n, e.GetType() === "Root" && (n = 1);
          var s = e.EnumChildren(!0);
          while (s !== null) {
              var o = s.GetType();
              o === t ? r = [s, n, i] : s.GetChildCount() > 0 && (n++, r = this.GetGroupPSInfo(s, t, n));
              if (r) return r;
              s = e.EnumChildren(!1), e.GetType() === "Root" && (n = 1), i++
          }
      }, y.prototype.GetGroupLeafChildrenInfo = function(e, t) {
          var n = null;
          t = typeof t == "undefined" ? [] : t;
          if (e.GetChildCount() != 0) {
              var r = e.EnumChildren(!0);
              while (r != null) r.GetChildCount() === 0 ? (i = t.length, t[i] = r, n = t) : r.GetChildCount() > 0 && (n = this.GetGroupLeafChildrenInfo(r, t)), r = e.EnumChildren(!1);
              if (n) return n
          }
      }, y.prototype.GetPSatLevel = function(e, t, n, r) {
          var i = null;
          n = typeof n == "undefined" ? [] : n, r = typeof r == "undefined" ? 0 : r;
          var s = e.EnumChildren(!0);
          s != null && r++;
          while (s != null) r === t ? (n.push(s), i = n) : s.GetChildCount() > 0 && (i = this.GetPSatLevel(s, t, n, r)), s = e.EnumChildren(!1);
          if (i) return i
      }, y.prototype.GetGroupPSDepth = function(e, t) {
          var n = null;
          t = typeof t == "undefined" ? 0 : t;
          var r = e.EnumChildren(!0);
          r != null && (t++, n = t);
          while (r != null) r.GetChildCount() > 0 && (n = this.GetGroupPSDepth(r, t)), r = e.EnumChildren(!1);
          if (n) return n
      }, y
}()), typeof SiebelApp.S_App.ListApplet == "undefined" && (SiebelJS.Namespace("SiebelApp.S_App.ListApplet"), SiebelApp.S_App.ListApplet = function() {
  function y() {
      SiebelApp.S_App.ListApplet.superclass.constructor.call(this);
      var e = {},
          n = {},
          r = [],
          i = "";
      this.GetControlPS().SetType(t.get("SWE_PST_COL_LIST"));
      var s = t.get("DELT_ROWCOUNT"),
          o = !1,
          u = {};
      this.GetRowListRowCount = function() {
          return Number(s)
      }, this.SetRowListRowCount = function(e) {
          s = e
      }, this.GetRowsSelectedArray = function() {
          return r
      }, this.GetListCol = function(t) {
          return e[t]
      }, this.GetListOfColumns = function() {
          return e
      }, this.RemoveColumns = function() {
          n = null, n = {};
          for (var t in e) e[t].IsClientCtrl() || delete e[t]
      }, this.GetColumnsByFieldName = function() {
          return n
      }, this.GetListPrefs = function() {
          return i
      }, this.SetListPrefs = function(e) {
          i = e
      }, this.GetBeginRow = function() {
          return this.GetBusComp() ? this.GetBusComp().GetNotifyObject().GetBegRow(this.GetName()) : null
      }, this.GetHasTotalRow = function() {
          return o
      }, this.SetHasTotalRow = function(e) {
          o = e
      }, this.GetTotalMap = function() {
          var e = this.GetBusComp();
          if (e) {
              var t = e.GetTotalsChanged();
              if (t) {
                  u = {};
                  var n = this.GetListOfColumns(),
                      r = null;
                  for (var i in n) n.hasOwnProperty(i) && (r = n[i].GetFieldName(), r && e.GetField(r) && (u[r] = t[e.GetField(r).index], u[i] || (u[i] = "")))
              }
          }
          return u
      }, this._ListAppEndLife = function() {
          n = null, e = null
      }
  }

  function b(e) {
      this.GetListOfColumns()[e.GetName()] = e, this.GetColumnsByFieldName()[e.GetFieldName()] = e, this.GetControls()[e.GetName()] = e
  }

  function w() {
      var t = "",
          n = "",
          r = "",
          i = 0,
          s = 0,
          o = null,
          u = this.GetListOfColumns(),
          a = "",
          f = [],
          l = 0,
          c = 0,
          h = [];
      if (!u) return;
      for (var p in u) u.hasOwnProperty(p) && ++c;
      a = this.GetListPrefs(), l = a.indexOf(d), l < 0 ? a = "" : f = a.split(d);
      for (var m = 1; m < f.length && s < c; m++) {
          h = [], n = f[m], h = n.split(v);
          if (!(h.length > 0 && h[0] === "0")) continue;
          r = h[1], i = h[2];
          for (var g in u)
              if (u.hasOwnProperty(g)) {
                  o = u[g];
                  if (o.GetName() === r) {
                      u[g].SetWidth(i), u[g].SetColNum(s), s++;
                      break
                  }
              }
      }
      for (var y in u)
          if (u.hasOwnProperty(y) && e.IsTrue(u[y].IsDynamic()))
              for (var b in u) u.hasOwnProperty(b) && u[b].GetColNum() >= u[y].GetColNum() && !e.IsTrue(u[b].IsDynamic()) && this.GetListOfColumns()[b].SetColNum(u[b].GetColNum() + 1)
  }

  function E(e, n) {
      if (!this.CanUpdateUI()) return;
      if (n.length > 0) {
          var r = n[0];
          if (r === this.GetName()) {
              n.shift();
              if (S.call(this, n)) {
                  var i = {};
                  i.ev = t.get("EVENT_ROW_SELECTION"), this.SetUIEventMap(i)
              }
          }
      }
  }

  function S(e) {
      var t = this.GetRowsSelectedArray().splice(0, this.GetRowsSelectedArray().length),
          n = !1,
          r = t.length,
          i, s = e.length;
      for (var o = 0; o < s; o++) {
          switch (e[o]) {
              case "0":
                  i = !1;
                  break;
              case "1":
                  i = !0;
                  break;
              default:
                  continue
          }!n && (o < r && t[o] !== i || o >= r && i) && (n = !0), this.GetRowsSelectedArray().push(i)
      }
      return n
  }

  function x() {
      var t = SiebelApp.S_App.ListApplet.superclass.GetRecordSet.call(this),
          n = t.length,
          r = [],
          i = this.GetBusComp(),
          s = i ? e.IsTrue(i.IsHierarchyBusComp()) : !1,
          o = s ? i.GetHierarchyParentId() : null;
      if (this.IsInQueryMode()) r = t;
      else {
          var u = this.GetColumnsByFieldName(),
              a = null;
          for (var f = 0; f < n; f++) {
              var l = {};
              for (a in u) u.hasOwnProperty(a) && (l[a] = this.GetFormattedFieldValue(u[a], !0, f));
              s && (l["Outline Number"] = t[f]["Outline Number"], l["Has Children"] = t[f]["Has Children"], l["Is Expanded"] = t[f]["Is Expanded"], l.Id = t[f].Id, l[o] = t[f][o]), r.push(l)
          }
          s && (r = this.GetBusComp().UpdateHierInfo(r)), listCols = u = null
      }
      return r
  }

  function T(t, n) {
      var r;
      if (e.IsEmpty(this.GetBusComp())) return;
      r = this.GetBusComp().GetNotifyObject();
      if (!r || !r.Get_EnableUIUpdate(this.GetName())) return;
      t || r.SetDoPopulate(this.GetName(), !0)
  }

  function N(e, t) {
      var n = "0",
          r = "0",
          i = "0";
      e.length > 13 && (n = e.charAt(13), r = e.charAt(14), e.length > 15 && (i = e.charAt(15)));
      var s = t.Clone();
      return s.SetProperty("SWEControlClicked", n), s.SetProperty("SWEShiftClicked", r), s.SetProperty("SWEIgnoreCtrlShift", i), SiebelApp.S_App.ListApplet.superclass.InvokeMethod.call(this, "PositionOnRow", s)
  }

  function C(e) {
      var t = e.split(","),
          n = t.length,
          r = 0,
          i = "asc",
          s = null;
      for (r = 0; r < n; r++) {
          var o = t[r].match(/\((.*?)\)/);
          if (null !== o) {
              o[1].toLowerCase().indexOf("desc") != -1 && (i = "desc"), s = t[r].replace(o[0], "").trim();
              break
          }
      }
      s || (s = t[0].trim());
      var u = this.GetControls(),
          a = null;
      for (var f in u)
          if (u.hasOwnProperty(f)) {
              var l = u[f];
              if (s === String(l.GetFieldName())) {
                  a = l;
                  break
              }
          } this.DisplaySortInfo(a ? a : "reset", i)
  }

  function k() {
      var t = this.GetListPrefs(),
          n = "",
          r, i = 0,
          s, o, u = arguments[0] || [],
          a = !t || u.length <= 0 || t.indexOf(d) < 0,
          f, l, c = this.GetListOfColumns(),
          h = !1;
      if (a) {
          t = null;
          return
      }
      r = t.split(d), n += r[0], i = u.length;
      for (l = 0; l < i; l++) !e.IsTrue(u[l].IsDynamic()) && !u[l].IsClientCtrl() && (o = "0" + v + u[l].GetName() + v + u[l].GetWidth(), n += d + o);
      i = r.length;
      for (l = 1; l < i; l++) s = r[l].split(v), s.length > 0 && !c[s[1]] && (n += d + r[l]), s.splice(0, s.length);
      return f = CCFMiscUtil_CreatePropSet(), f.SetProperty("SWEUserPreference", n), f.SetProperty("SWEKeepContext", "1"), f.SetProperty("SWEDIC", "1"), h = this.InvokeMethod("SetListAppletLayout", f), h && this.SetListPrefs(n), f = t = c = null, h
  }
  var e = SiebelJS.Dependency("SiebelApp.Utils"),
      t = SiebelJS.Dependency("SiebelApp.Constants"),
      n = t.get("SWE_PST_COL_LIST"),
      r = t.get("SWE_FIELD_STR"),
      i = t.get("SWE_ROW_STR"),
      s = t.get("SWE_ROW_ID_STR"),
      o = t.get("SWE_APPLET_STR"),
      u = t.get("SWE_ACTIVE_APPLET_STR"),
      a = t.get("SWE_ROW_IDS_STR"),
      f = t.get("SWE_METHOD_STR"),
      l = t.get("SWE_VIEW_ID_STR"),
      c = t.get("SWE_VIEW_ARG"),
      h = t.get("SWE_REQ_ROW_ID_STR"),
      p = t.get("SWE_SHOW_POPUP_STR"),
      d = t.get("SWE_LPF_TILDE"),
      v = t.get("SWE_LPF_PIPE"),
      m = t.get("SWE_BCF_FIELD"),
      g = [t.get("SWE_QUERY_COMBO_BOX"), t.get("SWE_QUERY_SEARCH_SPEC"), t.get("SWE_POPUP_QUERY_COMBO_BOX"), t.get("SWE_POPUP_QUERY_SEARCH_SPEC")];
  return SiebelJS.Extend(y, SiebelApp.S_App.Applet), y.prototype.EndLife = function(e) {
      var t = this.GetListOfColumns();
      for (var n in t) t.hasOwnProperty(n) && delete t[n];
      t = null, this._ListAppEndLife(), SiebelApp.S_App.ListApplet.superclass.EndLife.call(this, e)
  }, y.prototype.GetPropArray = function() {
      var e = SiebelApp.S_App.ListApplet.superclass.GetPropArray.call(this),
          t = (e.UIStateRequestProps || []).concat(["GetRowsSelectedArray"]);
      return e = e.concat(["GetListOfColumns", "GetRowsSelectedArray", "GetRowIdentifier", "HasHierarchy", "GetRowListRowCount", "GetBeginRow", "GetHasTotalRow", "GetTotalMap"]), e.UIStateRequestProps = t, e
  }, y.prototype.Show = function() {
      SiebelApp.S_App.ListApplet.superclass.Show.call(this)
  }, y.prototype.ShowOnly = function() {
      SiebelApp.S_App.ListApplet.superclass.ShowOnly.call(this)
  }, y.prototype.GetSelection = function() {
      return this.GetBusComp() ? this.GetBusComp().GetSelection() - (this.GetBeginRow() || 0) : -1
  }, y.prototype.HasDynamicColumns = function() {
      var t = this.GetListOfColumns();
      if (t)
          for (var n in t)
              if (t.hasOwnProperty(n) && e.IsTrue(t[n].IsDynamic())) return !0;
      return !1
  }, y.prototype.Initialize = function() {
      var e = this.GetBusComp();
      e && e.SetWorkSetSize(this.GetName(), this.GetRowListRowCount()), this.GetListPrefs() && w.call(this), SiebelApp.S_App.ListApplet.superclass.Initialize.call(this)
  }, y.prototype.GetMethodArray = function() {
      var e = SiebelApp.S_App.ListApplet.superclass.GetMethodArray.call(this),
          t = (e.StateChangeHandlerMethods || []).concat(["CellChange"]),
          n = (e.UIStateRequestMethods || []).concat(["GetRecord"]);
      return e = e.concat(["HandleRowSelect", "OnVerticalScroll", "SetMultiSelectMode", "OnClickSort", "OnCtrlBlur", "OnCtrlFocus", "OnDrillDown", "CellChange", "UpdateColIndex", "UpdateColWidth", "DisplaySortInfo", "GetListCol"]), e.UIStateRequestMethods = n, e.StateChangeHandlerMethods = t, e
  }, y.prototype.ProcessObjectInfo = function(e) {
      SiebelApp.S_App.ListApplet.superclass.ProcessObjectInfo.call(this, e);
      var n = SiebelApp.S_App.GetPopupPM();
      n.Get("state") === t.get("POPUP_STATE_VISIBLE") && typeof this.GetPopupAppletName != "undefined" && (typeof this.GetPickAppletName != "undefined" ? (n.SetProperty("isPopupPick", !0), n.SetProperty("PickAppletObject", this), n.SetProperty("baseParentAppletId", this.GetParentApplet().GetFullId())) : typeof this.GetAssocAppletName != "undefined" ? (n.SetProperty("isPopupAssoc", !0), n.SetProperty("AssocAppletObject", this), n.SetProperty("baseParentAppletId", this.GetParentApplet().GetFullId())) : typeof this.GetMvgSelectedAppletName != "undefined" ? (n.SetProperty("isPopupMVGSelected", !0), n.SetProperty("MVGSelectedAppletObject", this), n.SetProperty("baseParentAppletId", this.GetParentApplet().GetFullId())) : typeof this.GetMvgAssocAppletName != "undefined" ? (n.SetProperty("isPopupMVGAssoc", !0), n.SetProperty("MVGAssocAppletObject", this), n.SetProperty("MVGAssocParentAppletObject", this.GetParentApplet()), n.SetProperty("parentAppletId", this.GetParentApplet().GetFullId()), n.SetProperty("baseParentAppletId", this.GetParentApplet().GetParentApplet().GetFullId())) : (n.SetProperty("isPopupNonStandard", !0), n.SetProperty("NonStandardAppletObject", this), this.GetParentApplet() ? n.SetProperty("baseParentAppletId", this.GetParentApplet().GetFullId()) : n.SetProperty("baseParentAppletId", null)))
  }, y.prototype.ProcessSelfProps = function(n) {
      SiebelApp.S_App.ListApplet.superclass.ProcessSelfProps.call(this, n), this.SetListPrefs(n.GetProperty(t.get("SWE_PROP_PREFERENCES")));
      var r = n.GetProperty(t.get("SWE_PROP_ROW_COUNT"));
      e.IsEmpty(r) || this.SetRowListRowCount(r), e.IsTrue(n.GetProperty(t.get("SWE_PROP_HAS_TOTAL"))) && this.SetHasTotalRow(!0), this.SetOnLoadRowSelection(n)
  }, y.prototype.ProcessListControlInfo = function(e) {
      var n = new SiebelApp.S_App.AppletControl;
      n.SetApplet(this), n.SetClientCtrl(e.PropertyExists(t.get("SWE_PROP_IS_CLIENT_CTRL")) ? !0 : !1), n.ProcessObjectInfo(e), b.call(this, n)
  }, y.prototype.ProcessChildrenProps = function(r) {
      var i = e.Curry(SiebelApp.S_App.constructor.prototype.DefineAccessor, this, r),
          s = r.GetType(),
          o = t.get("SWE_PST_ACCESSIBILITY_INFO"),
          u = t.get("SWE_PST_REMOVE_COL_LIST");
      switch (s) {
          case n:
              var a = this.GetControlPS(),
                  f, l = r.EnumChildren(!0);
              a && a.GetChildCount() > 0 && (f = a.EnumChildren(!0));
              while (l || f) {
                  var c = -1,
                      h = -1;
                  f && (h = parseInt(f.GetProperty(t.get("SWE_PROP_COLINDEX")), 10)), l && (c = parseInt(l.GetProperty(t.get("SWE_PROP_COLINDEX")), 10)), f && h <= c || !l && f ? (SiebelApp.S_App.LookupStringCache(f.GetProperty(t.get("SWE_PROP_TYPE"))) === t.get("SWE_CTRL_COMBOBOX") && SiebelApp.S_App.SetStaticPickValues(SiebelApp.S_App.LookupStringCache(f.GetProperty(t.get("SWE_PROP_PICK_APLT"))), f.GetProperty(t.get("SWE_PROP_CLIENT_CTRL_PICK_VAL"))), this.ProcessListControlInfo(f), f = a.EnumChildren(!1)) : l && (this.ProcessListControlInfo(l), l = r.EnumChildren(!1)), l && l.SetPropertyStr(t.get("SWE_PROP_COLINDEX"), ++c)
              }
              break;
          case u:
              this.RemoveColumns(), SiebelApp.S_App.ListApplet.superclass.ProcessChildrenProps.call(this, r);
              break;
          case o:
              i("GetRowIdentifier", "SWE_PST_ACCESSIBILITY_ROWID"), this.GetRowIdentifier() == undefined && (this.GetRowIdentifier = function() {
                  return ""
              }), SiebelApp.S_App.ListApplet.superclass.ProcessChildrenProps.call(this, r);
              break;
          default:
              SiebelApp.S_App.ListApplet.superclass.ProcessChildrenProps.call(this, r)
      }
      if (this.GetRowIdentifier == undefined || this.GetRowIdentifier() == undefined) this.GetRowIdentifier = function() {
          return ""
      }
  }, y.prototype.GetType = function(e) {
      return t.get("SWE_COMPOSER_LIST_APPLET_TYPE")
  }, y.prototype.SetOnLoadRowSelection = function(n) {
      var r = n.GetProperty(t.get("SWE_PROP_ROW_SELECTION"));
      if (!e.IsEmpty(r)) {
          var i = [];
          CCFMiscUtil_StringToArray(r, i), E.call(this, null, i)
      } else {
          var s = this.GetSelection();
          if (!e.IsEmpty(s)) {
              this.GetRowsSelectedArray().splice(0, this.GetRowsSelectedArray().length);
              for (var o = 0; o < s; o++) this.GetRowsSelectedArray()[o] = !1;
              this.GetRowsSelectedArray()[o] = !0
          }
      }
      return !0
  }, y.prototype.NotifyGeneric = function(e, t) {
      e === "SWEIRowSelection" ? E.call(this, e, t) : SiebelApp.S_App.ListApplet.superclass.NotifyGeneric.call(this, e, t)
  }, y.prototype.GetRecordSet = function(e) {
      var t = [];
      return t = x.call(this), y.prototype.GetRecordSet = function(e) {
          return e || (t = [], t = x.call(this)), t
      }, t
  }, y.prototype.GetRecord = function(e) {
      return this.GetRecordSet(!0)[this.GetBeginRow() + e]
  }, y.prototype.GetAllFieldValues = function(e, t) {
      var n = this.GetBusComp();
      if (n.GetParentBusComp()) {
          var r = this.GetListOfColumns();
          for (var i in r)
              if (r.hasOwnProperty(i)) {
                  var s = r[i];
                  e.SetProperty(s.GetSpanPrefix() + t, n.GetFieldValue(s.GetFieldName()))
              }
      }
  }, y.prototype.GetDrilldownURL = function(e, t, n) {
      var a = CCFMiscUtil_CreatePropSet(),
          f = this.GetListCol(e);
      return e = f.GetSpanPrefix() + t, a.SetProperty(r, e), a.SetProperty(i, t), a.SetProperty(s, n), this.GetRowIds(a), this.GetAllFieldValues(a, t), a.SetProperty(o, this.GetName()), a.SetProperty(u, this.GetName()), SiebelApp.S_App.GetDrilldownURL(a)
  }, y.prototype.OnDrillDown = function(e, t) {
      var n = CCFMiscUtil_CreatePropSet(),
          s = this.GetListOfColumns(),
          a = this.GetView(),
          f = !0,
          l = !1,
          c;
      a && !a.SetActiveApplet(this) && (a.ProcessError(), f = !1);
      if (f) {
          this.GetBusComp().SetCurRow(this.GetName(), t - 1);
          if (this.PostChangesToBC(!0, null)) {
              for (var h in s) s.hasOwnProperty(h) && e === h && (c = s[h]);
              n.SetProperty(r, c.GetSpanPrefix() + t), n.SetProperty(i, t), this.GetRowIds(n), n.SetProperty(o, this.GetName()), n.SetProperty(u, this.GetName()), n.SetProperty(m, e), l = this.InvokeMethod("Drilldown", n, !0)
          }
      }
      return l
  }, y.prototype.HandleRowSelect = function(t, n, r) {
      var s = !0,
          u = new SiebelApp.UIStatus;
      if (this.IsInQueryMode()) return !0;
      var a = CCFMiscUtil_CreatePropSet(),
          d = "PositionOnRow";
      return SiebelApp.S_App.OfflineCallMethod("HandleRowSelect", t), d += (n === !0 ? "1" : "0") + (r === !0 ? "1" : "0") + "0", a.SetProperty(f, d), a.SetProperty(l, ""), e.IsEmpty(this.GetView()) || a.SetProperty(c, this.GetView().GetName()), a.SetProperty(o, this.GetName()), a.SetProperty(i, t), a.SetProperty(h, "1"), a.SetProperty(p, "false"), this.InvokeControlMethod(d, a, !0)
  }, y.prototype.NotifyNewPrimary = function(t) {
      var n = this.GetBusComp(),
          r;
      if (e.IsEmpty(n)) return;
      r = n.GetNotifyObject();
      if (!r || !r.Get_EnableUIUpdate(this.GetName())) return;
      var i, s = n.GetRawRecords().length,
          o = this.GetSelection();
      for (i = 0; i < s; i++) n.SetSelection(i), this.RepopulateField(t, !0, !1);
      n.SetSelection(o)
  }, y.prototype.NotifyNewActiveRow = function() {
      var e = this.GetBusComp().GetNotifyObject();
      if (!e || !e.Get_EnableUIUpdate(this.GetName())) return
  }, y.prototype.NotifyEndQuery = function() {
      var t;
      if (e.IsEmpty(this.GetBusComp())) return;
      t = this.GetBusComp().GetNotifyObject();
      if (!t || !t.Get_EnableUIUpdate(this.GetName())) return;
      t.SetDoPopulate(this.GetName(), !0), this.GetBusComp().SetSelection(this.GetSelection()), SiebelApp.S_App.ListApplet.superclass.NotifyEndQuery.call(this)
  }, y.prototype.NotifyExecute = function() {
      var t;
      if (e.IsEmpty(this.GetBusComp())) return;
      var n = this.GetBusComp().GetSortSpec();
      n && C.call(this, n), t = this.GetBusComp().GetNotifyObject();
      if (!t || !t.Get_EnableUIUpdate(this.GetName())) return;
      t.SetDoPopulate(this.GetName(), !0), this.GetBusComp().SetSelection(this.GetSelection())
  }, y.prototype.DoExecuteUIUpdate = function() {
      var t;
      if (e.IsEmpty(this.GetBusComp())) return;
      t = this.GetBusComp().GetNotifyObject();
      if ((!t || !t.Get_EnableUIUpdate(this.GetName())) && !this.GetEnableExecuteUIUpdate()) return;
      if (t.Get_DoPopulate(this.GetName()) || this.GetEnableExecuteUIUpdate()) this.RefreshData(!0), this.ShowSelection(), SiebelApp.S_App.GetEnablePerfHooks() && SiebelApp.S_App
          .GetTimer() && SiebelApp.S_App.GetTimer().TimePopulateApplet(this.GetName(), "Finished Populate Applet");
      this.GetUpdateConditionals() && this.UpdateConditionals(), this.InvokeStateChange(), t.Set_DoPopulate(this.GetName(), !1), this.SetEnableExecuteUIUpdate(!1), this.SetScrollDir(null), this.SetScrollAmount(0)
  }, y.prototype.OnCtrlFocus = function(e, t, n) {
      return this.EnterField(t, n, !1)
  }, y.prototype.EnterField = function(e, t, n) {
      var r = this.GetPrsrvControl();
      return this.SetPrsrvControl(this.GetActiveControl()), this.GetView() && !this.GetView().SetActiveApplet(this) ? (this.GetView().ProcessError(), this.SetPrsrvControl(r), !1) : (e.GetCaseSensitive() && this.IsInQueryMode() && this.UpdateCSQueryMsg(!0), this.SetActiveControl(e), !0)
  }, y.prototype.OnCtrlBlur = function(e, t, n) {
      return this.LeaveField(t, n, !1)
  }, y.prototype.LeaveField = function(n, r, i) {
      var s = this.GetBusComp(),
          o = n.GetFieldName();
      if (!n && !this.GetActiveControl()) return !0;
      var u = this.GetFormattedValue(n),
          a = this.TransformValue(n, r, u);
      if (a !== null) {
          SiebelApp.S_App.OfflineCallMethod("PassOldValue", this, n, r, u);
          if (this.IsInQueryMode() && !e.IsEmpty(o)) {
              var f = n.GetUIType();
              (f == t.get("SWE_CTRL_DATE_TZ_PICK") || f == t.get("SWE_CTRL_DATE_TIME_PICK") || f == t.get("SWE_CTRL_DATE_PICK")) && r && !r.match(/[><=!&|]/g) && (a = this.AssignQuotes(n, a, r)), !e.IsEmpty(o) && !n.IsClientCtrl() && s.SetFieldValue(o, a)
          } else if (this.CanUpdate(n.GetName()) && (this.IsPrivateField(n.GetName()) || this.GetSelection() >= 0)) {
              var l, f = n.GetUIType();
              if (f == t.get("SWE_CTRL_COMBOBOX") || n.IsPostChanges()) l = this.GetFormattedFieldValue(n, !0);
              if (!n.IsClientCtrl()) {
                  var c = this.ProcessFormattedValue(n, a, r, u, l, i);
                  if (!c) return !1
              } else this.OnActionsSetFormattedValue(n, r, u, l, i, !0)
          }
      }
      return i || this.GetActiveControl() && (this.SetPrsrvControl(this.GetActiveControl()), n.GetCaseSensitive() && this.IsInQueryMode() && this.UpdateCSQueryMsg(!1), this.SetActiveControl(null)), n.IsClientCtrl() ? a : !0
  }, y.prototype.SetFormattedValue = function(t, n) {
      var r = t.GetName(),
          i = 0,
          s = !1,
          o, u;
      if (this.IsPrivateField(r)) {
          var a = this.GetPrivateFieldMap()[r];
          a.bInList && this.GetBusComp() && (i = this.GetSelection()), this.IsInQueryMode() ? this.GetPrivateFieldMap()[r].queryModeVal = String(n) : a.valueArray.length > i ? a.valueArray[i] != n && (this.GetPrivateFieldMap()[r].valueArray[i] = String(n), this.GetPrivateFieldMap()[r].bDirty = !0, this.GetPrivateFieldMap()[r].allowPostChanges && (s = !0), g.indexOf(r) < 0 && this.SetPvtFieldsDirty(!0)) : (this.GetPrivateFieldMap()[r].valueArray.push(n), this.GetPrivateFieldMap()[r].bDirty = !0, this.GetPrivateFieldMap()[r].allowPostChanges && (s = !0), g.indexOf(r) < 0 && this.SetPvtFieldsDirty(!0)), this.CellChange(this.GetSelection(), r, n)
      }
      if (!e.IsEmpty(t.GetFieldName())) {
          o = this.GetFormattedValue(t, !0);
          if (o === n && !this.IsPrivateField(r)) u = !0;
          else {
              u = this.GetBusComp().SetFormattedValue(t.GetFieldName(), n, t.GetDisplayFormat());
              if (!u) return this.CellChange(this.GetSelection(), r, o), this.SetFocusToCtrl(r, !0), u
          }
      } else if (!s) return !0;
      var f = this.GetBusComp().GetField(t.GetFieldName());
      return n = this.GetFormattedValue(t, !0), f && o != n && (f.IsPostChanges() || f.IsBoundedPick()) && (u = this.PostChangesToBC(!1, t.GetFieldName())), u
  }, y.prototype.OnClickSort = function(e, n) {
      var i = this.GetListOfColumns(),
          s;
      for (var o in i)
          if (i.hasOwnProperty(o)) {
              s = i[o];
              if (s.GetName() === e) break
          } var u = s.GetSpanPrefix() + "0",
          a = CCFMiscUtil_CreatePropSet();
      a.SetProperty(r, u);
      switch (n) {
          case t.get("SORT_ASCENDING"):
              this.InvokeMethod("SortAscending", a, !0);
              break;
          case t.get("SORT_DESCENDING"):
              this.InvokeMethod("SortDescending", a, !0);
              break;
          default:
              return
      }
      return
  }, y.prototype.OnVerticalScroll = function(e) {
      var n = null;
      if (this.GetView() && !this.GetView().SetActiveApplet(this)) return this.GetView().ProcessError(), !1;
      switch (e) {
          case t.get("PAG_PREV_SET"):
              n = "GotoPreviousSet";
              break;
          case t.get("PAG_NEXT_SET"):
              n = "GotoNextSet";
              break;
          case t.get("PAG_NEXT_RECORD"):
              n = "GotoNext";
              break;
          case t.get("PAG_PREV_RECORD"):
              n = "GotoPrevious";
              break;
          case t.get("PAG_SCROLL_DN"):
              n = "ScrollNextData";
              break;
          case t.get("PAG_SCROLL_UP"):
              n = "ScrollPrevData";
              break;
          default:
      }
      if (n) {
          var r = CCFMiscUtil_CreatePropSet();
          if (!this.CanInvokeMethod(n)) {
              n === "GotoPreviousSet" && !this.GetBusComp().IsInMultiSelectMode() && this.GetSelection() !== 0 && this.GetBusComp().GetRawRecords().length > 0 ? this.HandleRowSelect(0, !1, !1) : n === "GotoNextSet" && !this.GetBusComp().IsInMultiSelectMode() && this.GetSelection() !== this.GetBusComp().GetRawRecords().length - 1 && this.GetBusComp().GetRawRecords().length > 0 && this.HandleRowSelect(this.GetBusComp().GetRawRecords().length - 1, !1, !1);
              return
          }
          this.InvokeMethod(n, r, !0)
      }
  }, y.prototype.DoCollectFieldValues = function(t) {
      var n = this.GetBusComp();
      if (n) {
          var r = "",
              i = this.GetSelection(),
              s = this.GetListOfColumns(),
              o, u = "OF_";
          for (var a in s)
              if (s.hasOwnProperty(a)) {
                  var f = s[a],
                      l = f.GetFieldName(),
                      c = f.GetName();
                  if (l || this.IsPrivateField(c)) {
                      if (!this.CanUpdate(c) || f.IsClientCtrl()) continue;
                      this.IsInQueryMode() ? e.IsEmpty(l) || t.SetProperty(f.GetSpanPrefix() + "0", this.GetFieldValue(f)) : (o = this.GetFormattedValue(f), t.SetProperty(f.GetSpanPrefix() + i, o), IsOfflineModeEnabled() && (SiebelApp.OfflineAppSettings.GetMode() === !0 || !navigator.onLine && SiebelApp.OfflineAppMgr.GetCacheType() === "Reactive") && t.SetProperty(u + l, o))
                  }
              } SiebelApp.S_App.ListApplet.superclass.DoCollectFieldValues.call(this, t)
      }
  }, y.prototype.DispatchFocus = function(e) {
      var t = !!this.GetNumRows();
      this.GetNumRows() && e ? this.FocusFirstControl() : this.FocusOnApplet(!t)
  }, y.prototype.InvokeMethod = function(e, n, r) {
      n = n || CCFMiscUtil_CreatePropSet();
      if (this.GetActiveControl() && e.indexOf("PositionOnRow") !== -1) return !1;
      SiebelApp.S_App.IsListNavSync() === "TRUE" && ["GotoPreviousSet", "GotoNextSet", "GotoNext", "GotoPrevious"].indexOf(e) !== -1 && (typeof r == "boolean" || r === null || r === undefined ? r = !1 : typeof r == "object" && (r.async = !1));
      var i = n.GetProperty(t.get("SWE_REQ_ROW_ID_STR"));
      if (i == "1") {
          var s = n.GetProperty(t.get("SWE_ROW_STR"));
          if (this.GetSelection() !== Number(s)) {
              var o;
              e.indexOf("PositionOnRow") !== -1 && (o = !0), SiebelApp.S_App.SetShowNewPage(!1);
              if (!this.PostChangesToBC(!0, null, o) || SiebelApp.S_App.GetShowNewPage()) return !1;
              var u = Number(this.GetBeginRow()) + Number(s);
              if (!this.GetBusComp().SetSelection(u)) return !1
          }
      }
      return e.indexOf("PositionOnRow") !== -1 ? (this.GetBusComp().ClearUpdates(), N.call(this, e, n)) : SiebelApp.S_App.ListApplet.superclass.InvokeMethod.call(this, e, n, r)
  }, y.prototype.NotifyNewFieldData = function(e) {
      this.RepopulateField(e, !1, !1)
  }, y.prototype.NotifyNewDataWS = function(e) {
      this.RepopulateField(e, !1, !1)
  }, y.prototype.RepopulateField = function(e, t, n) {
      var r = this.GetBusComp().GetIdValue();
      this.GetBusComp().SetCurRow(this.GetName(), this.GetSelection()), this.DoRepopulateField(r, e, t, n), SiebelApp.S_App.ListApplet.superclass.DoRepopulateField.call(this, e)
  }, y.prototype.DoRepopulateField = function(e, t, n, r) {
      var i, s = this.IsInQueryMode(),
          o = this.GetListOfColumns();
      for (var u in o)
          if (o.hasOwnProperty(u)) {
              var a = o[u],
                  f = a.GetFieldName();
              if (r && a.GetName() === t || f === t) i = s && !r ? this.GetBusComp().GetFieldValue(t) : this.GetFormattedFieldValue(a, n), this.CellChange(e, a.GetName(), i)
          }
  }, y.prototype.CellChange = function(e, t, n) {}, y.prototype.DoSetAppletActive = function(e, t) {
      return this.CanUpdateUI() ? (this.SetHighlightState(e, t), this.ClearErrorMsg(), !0) : !0
  }, y.prototype.SetFocusToCtrl = function(e) {}, y.prototype.SetHighlightState = function(e, t) {}, y.prototype.HasHierarchy = function() {
      return this.GetBusComp() ? this.GetBusComp().IsHierarchyBusComp() : !1
  }, y.prototype.DisplaySortInfo = function(e, t) {}, y.prototype.UpdateColWidth = function() {
      var t = this.GetListOfColumns(),
          n = !1,
          r = arguments[0] || {},
          i = 0,
          s;
      for (var o in r) r.hasOwnProperty(o) && t[o] && (t[o].SetWidth(r[o]), i++);
      return s = e.sortObjectMap(t, function(e, t) {
          return e.GetColNum() - t.GetColNum()
      }), i > 0 && (n = k.call(this, s)), t = s = null, n
  }, y.prototype.UpdateColIndex = function() {
      var t = arguments[0] || {},
          n = !1,
          r = 0,
          i = this.GetListOfColumns(),
          s;
      for (var o in t) t.hasOwnProperty(o) && i[o] && (i[o].SetColNum(t[o]), r++);
      return s = e.sortObjectMap(i, function(e, t) {
          return e.GetColNum() - t.GetColNum()
      }), r > 0 && (n = k.call(this, s)), i = s = null, n
  }, y.prototype.ChangeSelectionInPopup = function(e) {
      var t = SiebelApp.S_App.GetActiveView().GetActiveApplet();
      t.GetSelection() !== e - 1 && (t.GetBusComp().SetSelection(e - 1), t.InvokeMethod("PositionOnRow"))
  }, y
}()), typeof SiebelApp.S_App.BusComp == "undefined" && (Namespace("SiebelApp.S_App.BusComp"), SiebelApp.S_App.BusComp = function() {
  function O() {
      fieldName = "", newValue = "", changed = !1, setOnServer = !1
  }

  function M() {
      var t = {},
          n = [],
          r = null,
          i = [],
          s = [],
          o = null,
          u = new SiebelApp.S_App.NotifyObject,
          a, f = !1,
          l = !0,
          c = -1,
          h = -1,
          p = 0,
          d = !1,
          v = !1,
          m = !1,
          g = !0,
          y = !0,
          b = !0,
          w = !0,
          E = !0;
      this.canUpdate = !0, this.canUpdateDynamic = !0, this.commitPending = !1;
      var S = !1,
          x = !1,
          T = !1,
          N = !1,
          C = !1,
          k, L, A = 0,
          O = [];
      this.m_bHierarchyBusComp = !1, this.m_bHierarchyParentIdFld = null, this._EndLife = function() {
          o = u = null
      }, this.IsStale = function() {
          return l
      }, this.SetStale = function(e) {
          l = e
      }, this.Reset = function() {
          t = {}, i = []
      }, this.GetEnumUpdatePos = function() {
          return A
      }, this.SetEnumUpdatePos = function(e) {
          A = e
      }, this.GetUpdateMode = function() {
          return m_updateMode
      }, this.SetUpdateMode = function(e) {
          m_updateMode = e
      }, this.GetUpdateArray = function() {
          return n
      }, this.SetUpdateArray = function(e) {
          n = e
      }, this.SetUpdateArrayValue = function(e, t) {
          n[e] = t
      }, this.IsInMultiSelectMode = function() {
          return T
      }, this.SetMultiSelectMode = function(e) {
          this.inMultiSelMode = e, T = e
      }, this.IsDeletePending = function() {
          return S
      }, this.IsInsertPending = function() {
          return x
      }, this.IsCommitPending = function() {
          return this.commitPending || this.GetUpdateArray() && this.GetUpdateArray().length !== 0 || e.IsTrue(this.GetCommitPending())
      }, this.IsClientOnlyCommitPending = function() {
          return this.commitPending || this.GetUpdateArray() && this.GetUpdateArray().length !== 0
      }, this.SetSortSpec = function(e) {
          k = e
      }, this.GetSortSpec = function() {
          return k
      }, this.SetSearchSpec = function(e) {
          L = e
      }, this.GetSearchSpec = function() {
          return L
      }, this.IsInQueryState = function() {
          return N
      }, this.SetInQueryState = function(e) {
          N = e
      }, this.GetNotifyObject = function() {
          return u
      }, this.GetFieldMap = function() {
          return t
      }, this.GetFieldList = function() {
          return i
      }, this.RemoveAllFields = function() {
          i = [], t = null, t = {}
      }, this.GetRawRecords = function() {
          return s
      }, this.ReInitializeRawRecords = function() {
          this.SetStale(!0), s = []
      }, this.SetBusObj = function(e) {
          o = e
      }, this.GetBusObj = function() {
          return this.ClearErrorMsg(), o
      }, this.SetSelection = function(e) {
          return this.ClearUpdates(), c = parseInt(e), !0
      }, this.GetSelection = function() {
          while (this.GetRawRecords().length <= c) c--;
          return c
      }, this.IsNumRowsKnown = function() {
          return d
      }, this.GetNumRows = function() {
          return p
      }, this.SetNumRowsKnown = function(e) {
          d = e
      }, this.SetNumRows = function(e) {
          p = e
      }, this.GetCurRowNum = function() {
          return h
      }, this.SetCurRowNum = function(e) {
          h = e
      }, this.GetTotalsChanged = function() {
          return O
      }, this.SetUpdateTotalValue = function(e, t) {
          O[e] = t
      }, this.SetUpdateTotalArray = function(e) {
          O = e
      }, this.GetParentBusComp = function() {
          return e.IsEmpty(this.GetParentId()) ? a = null : a = this.GetBusObj().GetBusComp(this.GetParentId()), this.GetParentBuscomp = function() {
              return a
          }, a
      }, this.GetRecordSet = function(e) {
          var t = this.GetFieldList(),
              n = [],
              r = this.GetRawRecords(),
              i = r.length,
              s = [];
          for (var o = 0, u = t.length; o < u; o++) s[o] = SiebelApp.S_App.LookupStringCache(t[o]);
          for (var a = 0; a < i; a++) {
              var f = {};
              for (var l = 0, u = s.length; l < u; l++) {
                  var c = s[l];
                  f[c] = r[a][l]
              }
              n.push(f)
          }
          return 1 == this.IsHierarchyBusComp() && (n = this.UpdateHierInfo(n)), this.GetRecordSet = function(e) {
              if (e == 1 || this.IsStale()) {
                  var t = this.GetFieldList(),
                      r = this.GetRawRecords(),
                      i = r.length;
                  n = [];
                  var s = [];
                  for (var o = 0, u = t.length; o < u; o++) s[o] = SiebelApp.S_App.LookupStringCache(t[o]);
                  for (var a = 0; a < i; a++) {
                      var f = {};
                      for (var l = 0, u = s.length; l < u; l++) {
                          var c = s[l];
                          f[c] = r[a][l]
                      }
                      n.push(f)
                  }
                  return 1 == this.IsHierarchyBusComp() && (n = this.UpdateHierInfo(n)), this.SetStale(!1), n
              }
              return n
          }, n
      }, this.UpdateHierInfo = function(t) {
          var n = t.length,
              r, i, s, o, u, a, f = this.GetHierarchyParentId();
          for (var l = 0; l < n; l++) {
              a = t[l], r = a["Outline Number"], i = !1, s = 0, o = null, u = !1;
              for (var c = 0, h = r.length; c < h; c++) r.charAt(c) == "." && s++;
              a["Hierarchy Level"] = s, u = a["Has Children"], e.IsTrue(u) ? i = !1 : i = !0, a["Is Leaf"] = i, o = this.GetHierarchyParentRowIdx(t, a[f]), a["Parent Id"] = o, e.IsTrue(String(a["Is Expanded"])) ? a["Is Expanded"] = !0 : a["Is Expanded"] = !1, t[l] = a
          }
          return t
      }, this.GetHierarchyParentRowIdx = function(e, t) {
          var n = e.length,
              r = -1;
          if (t)
              for (var i = 0; i < n; i++) t === e[i].Id &&
                  (r = i);
          return r
      }, this.ClearUpdates = function() {
          this.SetUpdateArray(null), this.SetUpdateMode(null)
      }, this.NewSelection = function(e) {
          var t;
          if (e < -1 || this.GetRawRecords() == null || e >= this.GetRawRecords().length) return;
          if (e == this.GetSelection()) return;
          this.ClearUpdates(), this.SetSelection(e)
      }, this.NewFieldData = function(e, t) {}, this.HasCustomShadow = function() {
          return f
      }, this.SetCustomShadow = function(e) {
          f = e
      }, SiebelApp.S_App.ErrorObject.DecorateErrorCapability(this)
  }

  function _(e) {
      this.GetNotifyObject().NotifyBeginNotifys()
  }

  function D(e) {
      var n = e.GetProperty(t.get("SWE_PROP_NOTI_TYPE")),
          r = e.GetProperty(t.get("SWE_PROP_ARGS_ARRAY")),
          i = [];
      r && CCFMiscUtil_StringToArray(r, i), this.GetNotifyObject().NotifyGeneric(n, i)
  }

  function P(e) {
      var n = e.GetProperty(t.get("SWE_PROP_NOTI_SELECTED"));
      H.call(this, n)
  }

  function H(e) {
      this.GetNotifyObject().NotifyNewSelection(e)
  }

  function B(e) {
      this.GetNotifyObject().NotifyChangeSelection()
  }

  function j(e) {
      var t, n, r, i;
      i = e.GetProperty("f");
      if (i == null) {
          alert("Missing primary field name for NotifyNewPrimary!");
          return
      }
      r = this.GetSelection();
      var s = this.GetRawRecords().length;
      for (t = 0; t < s; t++) this.SetSelection(t), I.call(this, i, "N");
      this.SetSelection(r), I.call(this, i, "Y"), this.GetNotifyObject().NotifyNewPrimary(i)
  }

  function F(e) {
      var n = [],
          r = [],
          i, s, o, s = e.GetProperty(t.get("SWE_PROP_NOTI_FIELD"));
      if (s == null) return;
      var u = t.get("SWE_PROP_FIELD_VALUES"),
          a = e.GetChildCount();
      for (var f = 0; f < a; f++) {
          var l = e.GetChild(f);
          if (l.GetType() == u) {
              var c = l.GetProperty(t.get("SWE_PROP_FIELD_ARRAY")),
                  h = l.GetProperty(t.get("SWE_PROP_VALUE_ARRAY"));
              break
          }
      }
      if (f == a) return;
      if (CCFMiscUtil_StringToArray(c, n) == 1 && CCFMiscUtil_StringToArray(h, r) == 1) {
          var p = r.length;
          for (f = 0; f < p; f++) {
              if (n.length == 0) {
                  s = this.GetFieldList()[f];
                  if (!s) continue
              } else {
                  s = n[f];
                  if (!s) break;
                  fieldIndex = parseInt(s);
                  if (isNaN(fieldIndex)) return;
                  if (fieldIndex < 0 || fieldIndex > this.GetFieldList().length) continue;
                  s = this.GetFieldList()[fieldIndex];
                  if (!s) continue
              }
              o = r[f], s = SiebelApp.S_App.LookupStringCache(s), I.call(this, s, o)
          }
      }
      this.GetNotifyObject().NotifyNewDataWS(s)
  }

  function I(e, t) {
      var n, r;
      if (this.GetSelection() < 0) return;
      if (e == null || e == "") return this.SetErrorMsg("BCErrInvalidFieldName"), !1;
      n = this.GetField(e);
      if (n == null) return this.SetErrorMsg("BCErrNoSuchField", e), !1;
      r = n.index;
      if (r < 0) return this.SetErrorMsg("BCErrNoSuchField", e), !1;
      var i = this.GetUpdateArray();
      if (i && r < i.length) {
          var s = i[r];
          s && s.newValue != t && this.SetUpdateArrayValue(r, null)
      }
      var o = this.GetRawRecords()[this.GetSelection()];
      o[r] = t, this.SetStale(!0)
  }

  function q(e) {
      this.SetStale(!0);
      var n = e.GetProperty(t.get("SWE_PROP_NOTI_FIELD"));
      if (n == null) {
          alert("missing fieldname for new field notification");
          return
      }
      this.GetNotifyObject().NotifyNewFieldData(n)
  }

  function R(e) {
      this.GetNotifyObject().NotifyNewFieldList()
  }

  function U(e) {
      this.GetNotifyObject().NotifyNewRecord()
  }

  function z(e) {
      var n = [],
          r = [],
          i, s, o = t.get("SWE_PROP_FIELD_VALUES"),
          u = e.GetChildCount();
      for (var a = 0; a < u; a++) {
          var f = e.GetChild(a);
          f.GetType() == o && (i = f.GetProperty(t.get("SWE_PROP_FIELD_ARRAY")), s = f.GetProperty(t.get("SWE_PROP_VALUE_ARRAY")))
      }
      a == u;
      if (CCFMiscUtil_StringToArray(i, n) == 1 && CCFMiscUtil_StringToArray(s, r) == 1) {
          var l = r.length;
          for (a = 0; a < l; a++) {
              if (n.length == 0) {
                  fieldName = this.GetFieldList()[a];
                  if (!fieldName) continue
              } else {
                  fieldName = n[a];
                  if (!fieldName) break;
                  fieldIndex = parseint(fieldName);
                  if (isNaN(fieldIndex)) return;
                  if (fieldIndex < 0 || fieldIndex > this.GetFieldList().length) continue;
                  fieldName = this.GetFieldList()[fieldIndex];
                  if (!fieldName) continue
              }
              fieldValue = r[a], fieldName = SiebelApp.S_App.LookupStringCache(fieldName), I.call(this, fieldName, fieldValue)
          }
      }
      this.GetNotifyObject().NotifyNewRecordDataWS(fieldName)
  }

  function W(e) {
      this.GetNotifyObject().NotifyNewRecordData(e)
  }

  function X(e) {
      var t, n;
      t = e.GetProperty("state");
      if (t == null || t == "") return;
      n = parseInt(e.GetProperty("value")), isNaN(n) && (n = 0);
      switch (t) {
          case "activeRow":
          case "ar":
              this.SetSelection(n), this.NewSelection(n);
              break;
          case "bCanAssociate":
          case "ca":
              this.canAssociate = n != 0;
              break;
          case "bCanDelete":
          case "cd":
              this.canDelete = n != 0;
              break;
          case "bCanInsert":
          case "ci":
              this.canInsert = n != 0;
              break;
          case "bCanInsertDynamic":
          case "cid":
              this.canInsertDynamic = n != 0;
              break;
          case "bCanMergeRecords":
          case "cm":
              this.canMerge = n != 0;
              break;
          case "bCanQuery":
          case "cq":
              this.canQuery = n != 0;
              break;
          case "bCanUpdate":
          case "cu":
              this.canUpdate = n != 0;
              break;
          case "bCanUpdateDynamic":
          case "cud":
              this.canUpdateDynamic = n != 0;
              break;
          case "bCommitPending":
          case "cp":
              this.commitPending = n != 0, this.commitPending || (this.ClearUpdates(), this.GetCommitPending = function() {
                  return !1
              });
              break;
          case "bDelRecPending":
          case "dp":
              this.deletePending = n != 0;
              break;
          case "bHasAssocList":
          case "hal":
              this.hasAssocList = n != 0;
              break;
          case "bNewRecPending":
          case "np":
              this.insertPending = n != 0;
              break;
          case "curRowNum":
          case "cr":
              this.SetCurRowNum(n);
              break;
          case "numRows":
          case "nr":
              this.SetNumRows(n);
              break;
          case "bNumRowsKnown":
          case "nrk":
              this.SetNumRowsKnown(n !== 0);
              break;
          case "bNotifyEnabled":
          case "n":
              this.disableNotfiy = n == 0;
              break;
          case "bInMultiSelMode":
          case "ms":
              this.SetMultiSelectMode(n != 0);
              break;
          case "bInverseSelection":
          case "is":
              break;
          case "numSelected":
          case "ns":
              break;
          case "bNumSelectedKnown":
          case "nsk":
              break;
          case "bInQueryState":
          case "qs":
              this.SetInQueryState(!!n)
      }
      this.GetNotifyObject().NotifyStateChanged(t, n)
  }

  function V(e) {
      this.GetNotifyObject().NotifyNewData(e)
  }

  function $(e) {
      this.GetNotifyObject().NotifyEndNotifys(e)
  }

  function J(e) {
      var t;
      t = e.GetProperty("ar");
      if (t == null) {
          alert("Missing row index in NotifyNewActiveRow!");
          return
      }
      t = parseInt(t);
      if (isNaN(t) || t < 0 || t >= this.GetRawRecords().length) {
          alert("Invalid row index in NotifyNewActiveRow!");
          return
      }
      this.NewSelection(t), this.GetNotifyObject().NotifyNewActiveRow()
  }

  function K(e) {
      var t, n;
      t = e.GetProperty("bSetup") == "true", n = e.GetProperty("bUp") == "true", this.GetNotifyObject().NotifyDeleteRecord(t, n)
  }

  function Q(e) {
      var t, n, r, i, s, o;
      r = parseInt(e.GetProperty("index"));
      if (isNaN(r)) {
          alert("Missing index property for NotifyDeleteWorkSet!");
          return
      }
      i = parseInt(e.GetProperty("nr"));
      if (isNaN(i)) {
          alert("Missing numRecords property for NotifyDeleteWorkSet!");
          return
      }
      if (i != -1 && (r < 0 || r >= this.GetRawRecords().length)) return;
      r <= this.GetSelection() && this.ClearUpdates(), i > 0 ? o = r + i : i == -1 ? o = this.GetRawRecords().length : o = r, s = i == 1 ? this.GetRawRecords()[r] : null, r < o && (i == -1 && (i = o - r), this.RemoveRecord(r, i)), this.GetRawRecords().length < 1 && this.ReInitializeRawRecords(), this.GetNotifyObject().NotifyDeleteWorkSet(r, i, s)
  }

  function G(e) {
      this.ClearUpdates(), this.GetNotifyObject().NotifyBeginQuery()
  }

  function Y(n) {
      var r = n.GetProperty(t.get("SWE_NOTIFY_SEARCHSPEC_STR"));
      if (e.IsEmpty(r)) {
          var i = this.GetFieldMap();
          if (!e.IsEmpty(i))
              for (field in i) i.hasOwnProperty(field) && i[field].SetSearchSpec("")
      }
      this.SetSearchSpec(r), this.GetNotifyObject().NotifyNewQuerySpec()
  }

  function Z(t) {
      var n, r, i;
      i = t.GetProperty("err");
      if (!e.IsEmpty(i)) return;
      n = t.GetProperty("f");
      if (e.IsEmpty(n)) return;
      r = t.GetProperty("v");
      var s = this.GetFieldMap()[n];
      if (!s) return;
      s.SetSearchSpec(r);
      var o = s.index;
      if (this.GetUpdateArray() != null && o >= 0 && o < this.GetUpdateArray().length) {
          var u = this.GetUpdateArray()[o];
          u != null && r != u.newValue && (delete u, this.SetUpdateArrayValue(o, null))
      }
      this.GetNotifyObject().NotifyNewFieldQuerySpec(n)
  }

  function et(e) {
      this.ClearUpdates(), this.GetNotifyObject().NotifyEndQuery()
  }

  function tt(e) {
      this.SetSortSpec(e.GetProperty("srt")), this.SetSearchSpec(e.GetProperty("s")), this.GetNotifyObject().NotifyExecute()
  }

  function nt(t) {
      var n, r = 0;
      n = e.IsTrue(t.GetProperty("bUp")), r = t.GetProperty("scrollAmount"), this.GetNotifyObject().NotifyScrollAmount(n, r)
  }

  function rt(e) {
      this.GetNotifyObject().NotifyPageRefresh()
  }

  function it(e) {
      var t, n, r, i, s, o;
      if (e) {
          t = e.GetProperty("FieldArray"), n = e.GetProperty("ValueArray");
          if (t && n) {
              r = [], i = [], CCFMiscUtil_StringToArray(t, r), CCFMiscUtil_StringToArray(n, i), s = i.length;
              for (var u = 0; u < s; u++) this.GetField(r[u]) && (o = this.GetField(r[u]).index, o >= 0 && this.SetUpdateTotalValue(o, i[u]))
          }
      }
  }

  function st(e) {
      var t = [],
          n, r, i, s, o, u, a, f;
      if (this.GetFieldList() == null) {
          alert("Missing field array for NotifyInsertWorkSet!");
          return
      }
      u = parseInt(e.GetProperty("index"));
      if (isNaN(u)) {
          alert("Missing index property for NotifyInsertWorkSet!");
          return
      }
      u < 0 && (u = 0), u > this.GetRawRecords().length && (u = this.GetRawRecords().length), i = e.GetChildByType("FieldValues");
      if (i == null) return;
      u <= this.GetSelection() && this.ClearUpdates(), f = i.GetProperty("ValueArray"), CCFMiscUtil_StringToArray(f, t), this.InsertRecord(u, t), this.GetNotifyObject().NotifyInsertWorkSet(u, t)
  }

  function ot(e, t) {
      var n, r, i, s, o;
      this.ClearErrorMsg();
      switch (e) {
          case "CanDeleteRecords":
              s = this.CanDelete();
              break;
          case "CanInsertRecords":
              s = this.CanInsert(!0);
              break;
          case "CanMergeRecords":
              s = this.CanMerge();
              break;
          case "CanUpdateRecords":
              s = this.CanUpdate(!0);
              break;
          case "CopyRecord":
              s = this.CopyRecord();
              break;
          case "DeleteRecord":
              s = this.DeleteRecord();
              break;
          case "End":
              s = this.End();
              break;
          case "Home":
              s = this.Home();
              break;
          case "NewRecord":
              s = this.NewRecord();
              break;
          case "NextSet":
              s = this.NextSet(null);
              break;
          case "PriorRecord":
              s = this.PriorRecord();
              break;
          case "PriorSet":
              s = this.PriorSet(null);
              break;
          case "RedoRecord":
              s = this.RedoRecord();
              break;
          case "UndoRecord":
              s = this.UndoRecord();
              break;
          case "UpdateRecord":
              s = this.UpdateRecord();
              break;
          case "WriteRecord":
              s = this.WriteRecord();
              break;
          default:
              i = CCFMiscUtil_CreatePropSet(), i.SetType("InvokeMethod"), this.GetSelection() >= 0 ? i.SetProperty("r", this.GetIdValue()) : i.SetProperty("r", ""), i.SetProperty("Method", e), i.SetProperty("ArgCount", "0"), s = ut.call(this, e, i)
      }
      return s ? "Y" : "N"
  }

  function ut(e, n) {
      var r, i = CCFMiscUtil_CreatePropSet(),
          s;
      return r = CCFMiscUtil_CreatePropSet(), r.SetProperty("SWECmd", "InvokeMethod"), r.SetProperty("SWEVI", this.GetBusObj().GetZone()), r.SetProperty("SWEBusComp", this.GetVarName()), r.SetProperty("SWEMethod", e), r.SetProperty("SWEIPS", n.EncodeAsString()), SiebelApp.S_App.CallServer(r, i, !0, {
          scope: this,
          cb: function() {}
      }), i != null ? (s = i.GetProperty("Status"), s === t.get("SWE_RPC_PROP_STATUS_ERROR") && this.ProcessError(), s != "Error") : !0
  }

  function at() {
      return this.canDelete
  }

  function ft(e) {
      return e ? this.canInsertDynamic : this.canInsert
  }

  function lt() {
      return this.canMerge
  }

  function ct(e) {
      var t;
      return this.CanInsert() ? (this.ClearUpdates(), this.GetSelection() < 0 || this.GetSelection() >= this.GetRecordSet().length ? (this.SetErrorMsg("BCErrNoActiveRow"), !1) : (t = CCFMiscUtil_CreatePropSet(), t.SetType("CopyRecord"), t.SetProperty("r", this.GetIdValue()), t.SetProperty("Before", e ? "Y" : "N"), ut.call(this, "CopyRecord", t) ? (this.ClearErrorMsg(), !0) : !1)) : (this.SetErrorMsg("BCErrCantInsert"), !1)
  }

  function ht() {
      var e;
      return this.CanDelete() ? (this.ClearUpdates(), this.GetSelection() < 0 || this.GetSelection() >= this.GetRecordSet().length ? (this.SetErrorMsg("BCErrNoActiveRow"), !1) : (e = CCFMiscUtil_CreatePropSet(), e.SetType("DeleteRecord"), e.SetProperty("r", this.GetIdValue()), ut.call(this, "DeleteRecord", e) ? (this.ClearErrorMsg(), !0) : !1)) : (this.SetErrorMsg("BCErrCantDelete"), !1)
  }

  function pt() {
      var e;
      return this.ClearUpdates(), e = CCFMiscUtil_CreatePropSet(), e.SetType("End"), ut.call(this, "End", e) ? (this.ClearErrorMsg(), !0) : !1
  }

  function dt() {
      var e;
      return this.ClearUpdates(), e = CCFMiscUtil_CreatePropSet(), e.SetType("Home"), ut.call(this, "Home", e) ? (this.ClearErrorMsg(), !0) : !1
  }

  function vt(e) {
      var t;
      return this.ClearUpdates(), this.CanInsert(!0) ? (t = CCFMiscUtil_CreatePropSet(), t.SetType("NewRecord"), t.SetProperty("r", this.GetIdValue()), t.SetProperty("Before", e ? "Y" : "N"), ut.call(this, "NewRecord", t) ? (this.ClearErrorMsg(), !0) : !1) : (this.SetErrorMsg("BCErrCantInsert"), !1)
  }

  function mt() {
      var e;
      return this.ClearUpdates(), e = CCFMiscUtil_CreatePropSet(), e.SetType("NextRecord"), e.SetProperty("r", this.GetIdValue()), ut.call(this, "NextRecord", e) ? (this.ClearErrorMsg(), !0) : !1
  }

  function gt(e) {
      var t;
      return this.ClearUpdates(), t = CCFMiscUtil_CreatePropSet(), t.SetType("NextSet"), t.SetProperty("r", this.GetIdValue()), ut.call(this, "NextSet", t) ? (this.ClearErrorMsg(), !0) : !1
  }

  function yt() {
      var e;
      return this.ClearUpdates(), e = CCFMiscUtil_CreatePropSet(), e.SetType("PriorRecord"), e.SetProperty("r", this.GetIdValue()), ut.call(this, "PriorRecord", e) ? (this.ClearErrorMsg(), !0) : !1
  }

  function bt(e) {
      var t;
      return this.ClearUpdates(), t = CCFMiscUtil_CreatePropSet(), t.SetType("PriorSet"), t.SetProperty("r", this.GetIdValue()), ut.call(this, "PriorSet", t) ? (this.ClearErrorMsg(), !0) : !1
  }

  function wt() {
      var e;
      return this.ClearUpdates(), e = CCFMiscUtil_CreatePropSet(), e.SetType("RedoRecord"), e.SetProperty("r", this.GetIdValue()), ut.call(this, "RedoRecord", e) ? (this.ClearErrorMsg(), !0) : !1
  }

  function Et() {
      var e;
      return this.GetUpdateArray() == null ? (this.ClearErrorMsg(), !0) : (this.ClearUpdates(), e = CCFMiscUtil_CreatePropSet(), e.SetType("UndoRecord"), e.SetProperty("r", this.GetIdValue()), ut.call(this, "UndoRecord", e) ? (this.ClearErrorMsg(), !0) : !1)
  }

  function St() {
      var e, t, n, r, i, s, o, u;
      if (!this.IsCommitPending()) return this.ClearErrorMsg(), !0;
      e = 0;
      if (this.GetUpdateArray() != null) {
          var a = this.GetUpdateArray().length;
          for (r = 0; r < a; r++) s = this.GetUpdateArray()[r], s != null && s.changed && !s.setOnServer && e++
      }
      if (e > 0 || this.IsCommitPending()) {
          i = CCFMiscUtil_CreatePropSet(), i.SetType("WriteRecord"), i.SetProperty("r", this.GetIdValue());
          if (e > 0) {
              o = new Array, u = new Array, n = CCFMiscUtil_CreatePropSet(), n.SetType("FieldValues"), t = 0;
              var a = this.GetUpdateArray().length;
              for (r = 0; r < a; r++) s = this.GetUpdateArray()[r], s != null && s.changed && !s.setOnServer && (o[t] = s.fieldName, u[t] = s.newValue, t++);
              n.SetProperty("FieldArray", CCFMiscUtil_ArrayToString(o)), n.SetProperty("ValueArray", CCFMiscUtil_ArrayToString(u)), i.AddChild(n)
          }
          if (!ut.call(this, "WriteRecord", i)) return !1
      }
      return this.ClearUpdates(), this.ClearErrorMsg(), !0
  }

  function xt(e) {
      return e ? this.canUpdateDynamic : this.canUpdate
  }

  function Tt(e, t) {
      var n;
      return this.HasCustomShadow() && this.shadow && typeof this.shadow.OnPreSetFieldValue == "function" ? (n = this.shadow.OnPreSetFieldValue(e, t), n == "CancelOperation" ? !1 : !0) : !0
  }
  var e = SiebelApp.Utils,
      t = SiebelApp.Constants,
      n = t.get("SWE_PROP_BC_OPERATION"),
      r = t.get("SWE_PROP_BC_NOTI_BEGIN"),
      i = t.get("SWE_PROP_BC_NOTI_GENERIC"),
      s = t.get("SWE_PROP_BC_NOTI_STATE_CHANGED"),
      o = t.get("SWE_PROP_BC_NOTI_NEW_ACTIVE_ROW"),
      u = t.get("SWE_PROP_BC_NOTI_DELETE_RECORD"),
      a = t.get("SWE_PROP_BC_NOTI_DELETE_WORKSET"),
      f = t.get("SWE_PROP_BC_NOTI_INSERT_WORKSET"),
      l = t.get("SWE_PROP_BC_NOTI_NEW_SELECTION"),
      c = t.get("SWE_PROP_BC_NOTI_NEW_DATA"),
      h = t.get("SWE_PROP_BC_NOTI_NEW_RECORD"),
      p = t.get("SWE_PROP_BC_NOTI_NEW_DATA_WS"),
      d = t.get("SWE_PROP_BC_NOTI_NEW_FIELD_DATA"),
      v = t.get("SWE_PROP_BC_NOTI_NEW_RECORD_DATA"),
      m = t.get("SWE_PROP_BC_NOTI_NEW_RECORD_DATA_WS"),
      g = t.get("SWE_PROP_BC_NOTI_END"),
      y = t.get("SWE_PROP_BC_NOTI_CHANGE_SELECTION"),
      b = t.get("SWE_PROP_BC_NOTI_NEW_PRIMARY"),
      w = t.get("SWE_PROP_BC_NOTI_BEGIN_QUERY"),
      E = t.get("SWE_PROP_BC_NOTI_NEW_QUERYSPEC"),
      S = t.get("SWE_PROP_BC_NOTI_NEW_FIELD_QUERYSPEC"),
      x = t.get("SWE_PROP_BC_NOTI_END_QUERY"),
      T = t.get("SWE_PROP_BC_NOTI_EXECUTE"),
      N = t.get("SWE_PROP_BC_NOTI_SCROLL_AMOUNT"),
      C = t.get("SWE_PROP_IS_IN_QUERY"),
      k = t.get("SWE_NOTIFY_PAGE_REFRESH"),
      L = t.get("SWE_PROP_BC_NOTI_NEW_FIELD_LIST"),
      A = t.get("SWE_NOTIFY_TOTALS_CHANGED");
  return M.prototype.CanUpdate = function() {
      return this.canUpdate
  }, M.prototype.EndLife = function() {
      var e = this.GetFieldMap();
      for (var t in e) e.hasOwnProperty(t) && (e[t].SetBusComp(null), delete e[t]);
      e = null, SiebelApp.S_App.ErrorObject.DeleteErrorObj(this), this._EndLife()
  }, M.prototype.WSHome = function(e) {
      return this.GetNotifyObject().SetCurrRow(e, 0), this.GetNotifyObject().GetCurrRow(e) > this.GetRawRecords().length ? (this.GetNotifyObject().SetCurrRow(e, -1), !1) : !0
  }, M.prototype.WSNextRecord = function(e) {
      var t = this.GetNotifyObject(),
          n = t.GetCurrRow(e),
          r = t.GetWorkSetSize(e);
      return n + 1 >= r ? !1 : t.GetBegRow(e) + n + 1 >= this.GetRawRecords().length ? !1 : (this.GetNotifyObject().SetCurrRow(e, n + 1), !0)
  }, M.prototype.IsCurWSRecActive = function(e) {
      var t = this.GetSelection(),
          n = this.GetNotifyObject(),
          r = n.GetBegRow(e),
          i = n.GetCurrRow(e);
      return t >= 0 && r + i == t ? !0 : !1
  }, M.prototype.SetWorkSetSize = function(e, t) {
      if (this.GetNotifyObject().GetCurrRow(e) >= t) {
          this.GetNotifyObject().SetCurrRow(e, t - 1);
          return
      }
      this.GetNotifyObject().SetWorkSetSize(e, t)
  }, M.prototype.GetCurRow = function(e) {
      return this.GetNotifyObject().GetCurrRow(e)
  }, M.prototype.SetCurRow = function(e, t) {
      return this.GetNotifyObject().SetCurrRow(e, t)
  }, M.prototype.EnumUpdates = function(e) {
      e && this.SetEnumUpdatePos(0);
      if (this.GetUpdateArray() == null || this.GetEnumUpdatePos() >= this.GetUpdateArray().length) return null;
      var t = this.GetUpdateArray()[this.GetEnumUpdatePos()];
      while ((t == null || !t.changed || t.setOnServer) && this.GetEnumUpdatePos() < this.GetUpdateArray().length) this.SetEnumUpdatePos(this.GetEnumUpdatePos() + 1), t = this.GetUpdateArray()[this.GetEnumUpdatePos()];
      return this.GetEnumUpdatePos >= this.GetUpdateArray().length ? null : (this.SetEnumUpdatePos(this.GetEnumUpdatePos() + 1), t)
  }, M.prototype.AddRecord = function(e) {
      this.SetStale(!0), this.GetRawRecords().push(e)
  }, M.prototype.InsertRecord = function(e, t) {
      this.SetStale(!0), this.GetRawRecords().splice(e, 0, t)
  }, M.prototype.RemoveRecord = function(e, t) {
      t === undefined && (t = 1), this.SetStale(!0), this.GetRawRecords().splice(e, t)
  }, M.prototype.PositionById = function(e) {
      var n = this.GetRecordSet(),
          r = this.GetRawRecords().length;
      for (var i = 0; i < r; i++)
          if (n[i]["Id"] == e) {
              this.SetSelection(i), this.GetNotifyObject().Notify(t.get("SWE_NOTIFICATION_TYPE_POSITION"));
              break
          }
  }, M.prototype.HandleQuery = function(e) {
      var n = this.GetRecordSet(),
          r = [];
      for (var i = 0, s = n.length; i < s; i++) {
          var o = !0;
          for (var u in e)
              if (e.hasOwnProperty(u))
                  for (var a in e[u])
                      if (e[u].hasOwnProperty(a)) {
                          var f = e[u][a];
                          if (n[i][u].indexOf(f) == -1) {
                              o = !1;
                              break
                          }
                      } o && r.push(n[i])
      }
      this.GetRecordSet = function() {
          return r
      }, this.GetNotifyObject().Notify(t.get("SWE_NOTIFICATION_TYPE_REQUERY")), this.GetRecordSet = function() {
          return n
      }
  }, M.prototype.GetIdValue = function() {
      var e = this.GetRecordSet();
      return this.GetSelection() < 0 ? "" : e.length > 0 && this.GetSelection() >= 0 ? e[this.GetSelection()][t.get("SWE_ROW_ID_FIELD")] : ""
  }, M.prototype.Register = function(e) {
      this.GetNotifyObject().Register(e)
  }, M.prototype.DeRegister = function(e) {
      this.GetNotifyObject().DeRegister(e)
  }, M.prototype.ProcessObjectInfo = function(n) {
      if (n.GetType() != t.get("SWE_PST_BUSCOMP_INFO")) return;
      this.SetBusObj(SiebelApp.S_App.GetActiveBusObj());
      var r = e.Curry(SiebelApp.S_App.constructor.prototype.DefineAccessor, this, n);
      r("GetName", "SWE_PROP_NAME"), r("GetCommitPending", "SWE_PROP_IS_COMMIT"), r("IsHierarchyBusComp", "SWE_PROP_HAS_HIER"), r("GetNewRecPending", "SWE_PROP_IS_NEW_REC_PEND"), r("IsTransientBC", "SWE_PROP_IS_TRANSIENT"), n.PropertyExists(C) && this.SetInQueryState(e.IsTrue(n.GetProperty(C)));
      var i = this.IsHierarchyBusComp();
      !e.IsEmpty(i) && i == "1" && (this.m_bHierarchyBusComp = !0);
      var s = n.GetValue();
      this.GetVarName = function() {
          return s
      };
      var o = n.GetProperty(t.get("SWE_PROP_SHADOW"));
      o != null && o != undefined && SiebelApp.S_App.CreateJSShadow(this, o) && this.SetCustomShadow(!0), this.ProcessObjectInfoDync(n), this.ProcessChildObjectInfo(n), n = null
  }, M.prototype.ProcessObjectInfoDync = function(t) {
      var n = e.Curry(SiebelApp.S_App.constructor.prototype.DefineAccessor, this, t);
      n("GetParentId", "SWE_PROP_PARENT_ID"), n("GetHierarchyParentId", "SWE_PROP_HIER_PAR_ID_FLD");
      var r = this.GetHierarchyParentId();
      e.IsEmpty(r) || (this.m_bHierarchyParentIdFld = r)
  }, M.prototype.ProcessNFLObjectInfo = function(e) {
      var n = SiebelApp.S_App.BCField,
          r = e.EnumChildren(!0);
      do {
          var i = r.GetProperty(t.get("SWE_PROP_NAME"));
          if (!this.GetFieldMap()[SiebelApp.S_App.LookupStringCache(i)]) {
              var s = new n;
              s.SetBusComp(this), s.ProcessObjectInfo(r), this.AddField(s)
          }
      } while (r = e.EnumChildren(!1))
  }, M.prototype.ProcessRLObjectInfo = function(e) {
      var n, r = t.get("SWE_PROP_RECORD"),
          i = t.get("SWE_PROP_VALUE"),
          s = t.get("SWE_PST_TOTALS_REC"),
          o, u;
      this.ReInitializeRawRecords();
      var a = e.EnumChildren(!0);
      n = parseInt(e.GetProperty(t.get("SWE_PROP_IS_NROWS_KNOWN"))), n === 1 ? this.SetNumRowsKnown(!0) : this.SetNumRowsKnown(!1), n = parseInt(e.GetProperty(t.get("SWE_PROP_CURR_RNUM"))), n && this.SetCurRowNum(n), n = parseInt(e.GetProperty(t.get("SWE_PROP_NUM_ROWS"))), n && this.SetNumRows(n);
      do a.GetType() == r ? (o = [], u = a.GetPropertyAsStr(i), CCFMiscUtil_StringToArray(u, o), this.AddRecord(o), this.SetSelection(parseInt(e.GetProperty(t.get("SWE_PROP_ACTIVE_ROW"))))) : a.GetType() === s && (o = [], u = a.GetPropertyAsStr(i), CCFMiscUtil_StringToArray(u, o), this.SetUpdateTotalArray(o)); while (a = e.EnumChildren(!1))
  }, M.prototype.ProcessChildObjectInfo = function(e) {
      var n = e.EnumChildren(!0);
      if (!n) return;
      do {
          var r = n.GetType(),
              i = t.get("SWE_PST_FIELD_LIST"),
              s = t.get("SWE_PST_REMOVE_FIELD_LIST"),
              o = t.get("SWE_PST_REC_LIST");
          switch (r) {
              case s:
                  this.RemoveAllFields();
                  break;
              case i:
                  this.ProcessNFLObjectInfo(n);
                  break;
              case o:
                  this.ProcessRLObjectInfo(n)
          }
      } while (n = e.EnumChildren(!1))
  }, M.prototype.AddField = function(e) {
      if (!this.GetFieldMap()[SiebelApp.S_App.LookupStringCache(e.GetName())]) {
          e.index = this.GetFieldList().length;
          var t = SiebelApp.S_App.LookupStringCache(e.GetName());
          this.GetFieldMap()[t] = e, this.GetFieldList().push(e.GetName())
      }
  }, M.prototype.GetField = function(e) {
      return this.GetFieldMap()[e]
  }, M.prototype.HandleServerNotifications = function(e) {
      var t = SiebelApp.Constants,
          C = e.GetProperty(t.get("SWE_PROP_BC_NOTI_ACTIVE_ROW"));
      C && C >= -1 && this.GetRawRecords() != null && C < this.GetRawRecords().length && C != this.GetSelection() && this.NewSelection(C);
      var O = e.GetProperty(n);
      switch (O) {
          case r:
              _.call(this, e);
              break;
          case i:
              D.call(this, e);
              break;
          case l:
              P.call(this, e);
              break;
          case s:
              X.call(this, e);
              break;
          case o:
              J.call(this, e);
              break;
          case u:
              K.call(this, e);
              break;
          case a:
              Q.call(this, e);
              break;
          case f:
              st.call(this, e);
              break;
          case c:
              V.call(this, e);
              break;
          case b:
              j.call(this, e);
              break;
          case h:
              U.call(this, e);
          case v:
              W.call(this, e);
              break;
          case p:
              F.call(this, e);
              break;
          case d:
              q.call(this, e);
              break;
          case L:
              R.call(this, e);
              break;
          case m:
              z.call(this, e);
              break;
          case y:
              B.call(this, e);
              break;
          case g:
              $.call(this, e);
              break;
          case w:
              G.call(this, e);
              break;
          case E:
              Y.call(this, e);
              break;
          case S:
              Z.call(this, e);
              break;
          case x:
              et.call(this, e);
              break;
          case T:
              tt.call(this, e);
              break;
          case N:
              nt.call(this, e);
              break;
          case k:
              rt.call(this, e);
              break;
          case A:
              it.call(this, e);
              break;
          default:
      }
  }, M.prototype.GetFieldValue = function(e) {
      var t = "";
      return this.IsInQueryState() ? t = this.GetFieldSearchSpec(e) : t = this.DoGetFieldValue(e), t
  }, M.prototype.WSGetFieldValue = function(e) {
      return this.WSDoGetFieldValue(e)
  }, M.prototype.DoGetFieldValue = function(e) {
      var t, n, r = "",
          i;
      return this.GetSelection() < 0 ? this.SetErrorMsg("BCErrNoActiveRow") : e == null || e == "" ? this.SetErrorMsg("BCErrInvalidFieldName") : (i = this.GetField(e), i == null || (t = i.index) < 0 ? this.SetErrorMsg("BCErrNoSuchField", e) : (n = this.GetUpdateArray() ? this.GetUpdateArray()[t] : null, n != null ? r = n.newValue : this.GetRawRecords()[this.GetSelection()] != null && !this.IsInQueryState() && (r = this.GetRawRecords()[this.GetSelection()][t], r === null && (r = "")))), r
  }, M.prototype.WSDoGetFieldValue = function(e) {
      var t, n, r, i;
      return this.GetSelection() < 0 ? "" : e == null || e == "" ? null : (field = this.GetField(e), field == null ? !1 : (t = field.index, t < 0 ? (this.SetErrorMsg("BCErrNoSuchField", e), null) : (this.GetRawRecords()[this.GetSelection()] != null ? (i = this.GetRawRecords()[this.GetSelection()][t], i == null && (i = "")) : i = "", i)))
  }, M.prototype.GetFormattedValue = function(e, t, n) {
      var r = "";
      if (!t || t.length == 0) return this.SetErrorMsg("BCErrInvalidFieldName"), r;
      if (this.IsInQueryState()) return r = this.GetFieldSearchSpec(t), r;
      e != -1 ? r = this.WSGetFieldValue(t) : r = this.GetFieldValue(t);
      var i = !1;
      if (r != "" && SiebelApp.S_App.LocaleObject) {
          var s = this.GetField(t);
          if (!s) return this.SetErrorMsg("BCErrNoSuchField", t), "";
          if (s.GetDataType() == "currency") {
              var o, u, a, f, l = s.GetCurrField();
              a = l.indexOf("|"), a >= 0 && (f = l.substring(a + 1).indexOf("|") == -1 ? -1 : l.substring(a + 1).indexOf("|") + a, f < 0 && (f = l.length), o = l.substr(0, a), o.length != 0 && (bHasCurrCode = !0, sCurrCode = this.GetFieldValue(o), sCurrCode ? SiebelApp.S_App.LocaleObject.SetCurrencyCode(sCurrCode) : SiebelApp.S_App.LocaleObject.SetCurrencyCode("")), o = l.substr(a + 1, f - a - 1), o.length != 0 && (u = this.GetFieldValue(o), u && SiebelApp.S_App.LocaleObject.SetExchDate(u)))
          }
          s.GetScale() != 0 && (SiebelApp.S_App.LocaleObject.SetScale(s.GetScale()), i = !0);
          var c = s.GetDataType(),
              h = r,
              p = n,
              d = SiebelApp.S_App.LocaleObject.StringToFormatted(c, h, p);
          r = d, i && SiebelApp.S_App.LocaleObject.SetScale(0);
          if (SiebelApp.S_App.LocaleObject.HasErrorMsg()) return this.SetErrorMsg(SiebelApp.S_App.LocaleObject.GetErrorCode()), ""
      }
      return this.ClearErrorMsg(), r
  }, M.prototype.SetFormattedValue = function(t, n, r) {
      var i, s;
      this.IsInQueryState() && !e.IsEmpty(t) && this.SetFieldSearchSpec(t, n);
      if (e.IsEmpty(n)) return this.SetFieldValue(t, "");
      if (e.IsEmpty(t)) return this.SetErrorMsg("BCErrInvalidFieldName"), !1;
      i = this.GetField(t);
      if (i == null) return this.SetErrorMsg("BCErrNoSuchField", t), !1;
      s = n;
      if (SiebelApp.S_App.LocaleObject) {
          var o = i.GetDataType(),
              u = n,
              a = r,
              f = 0;
          if (o == "utcdatetime" && a && (f = a.indexOf("MMM ")) != -1)
              if (SiebelApp.Utils.FindIndexOfFrom(a, "DD,YYYY", f + 4) != -1 || SiebelApp.Utils.FindIndexOfFrom(a, "dd,yyyy", f + 4) != -1 || SiebelApp.Utils.FindIndexOfFrom(a, "dd,yy", f + 4) != -1 || SiebelApp.Utils.FindIndexOfFrom(a, "dd,YYYY", f + 4) != -1 || SiebelApp.Utils.FindIndexOfFrom(a, "dd,YY", f + 4) != -1 || SiebelApp.Utils.FindIndexOfFrom(a, "DD, YYYY", f + 4) != -1 || SiebelApp.Utils.FindIndexOfFrom(a, "dd, yyyy", f + 4) != -1 || SiebelApp.Utils.FindIndexOfFrom(a, "dd, yy", f + 4) != -1 || SiebelApp.Utils.FindIndexOfFrom(a, "dd, YYYY", f + 4) != -1 || SiebelApp.Utils.FindIndexOfFrom(a, "dd, YY", f + 4) != -1) {
                  strVal = u.split("");
                  var l = strVal.length;
                  l > f + 3 && strVal[f + 3] == " " && (strVal.splice(f + 3, 1), strVal[f + 3] = "-"), l > f + 5 && strVal[f + 5] == "," ? (l > f + 6 && strVal[f + 6] == " " ? strVal.splice(f + 5, 2) : strVal.splice(f + 5, 1), strVal[f + 5] = "-") : l > f + 6 && strVal[f + 6] == "," && (l > f + 7 && strVal[f + 7] == " " ? strVal.splice(f + 6, 2) : strVal.splice(f + 6, 1), strVal[f + 6] = "-"), u = strVal.join("")
              } var c = SiebelApp.S_App.LocaleObject.FormattedToString(o, u, a);
          s = c;
          if (SiebelApp.S_App.LocaleObject.HasErrorMsg()) return this.SetErrorMsg(SiebelApp.S_App.LocaleObject.GetErrorCode(), n), s = "", !1
      }
      return this.SetFieldValue(t, s)
  }, M.prototype.SetFieldValue = function(e, t) {
      if (this.IsInQueryState()) this.SetFieldSearchSpec(e, t);
      else {
          if (!Tt.call(this, e, t)) return !1;
          if (!this.DoFieldValidation(e, t)) return !1;
          if (!this.DoFieldDataUpdate(e, t)) return !1;
          if (!this.DoFieldDataNotify(e, t)) return !1
      }
      return this.ClearErrorMsg(), !0
  }, M.prototype.UpdateRecord = function() {
      if (this.GetUpdateArray() != null) return this.ClearErrorMsg(), !0;
      if (!this.CanUpdate(!0)) return this.SetErrorMsg("BCErrCantUpdate"), !1;
      var e = new Array(this.GetFieldList().length);
      return this.SetUpdateArray(e), this.SetUpdateMode("update"), this.ClearErrorMsg(), !0
  }, M.prototype.DoFieldValidation = function(e, t) {
      var n, r;
      return this.GetUpdateArray() == null && !this.UpdateRecord() ? (this.SetErrorMsg("BCErrCantUpdate"), !1) : e == null || e == "" ? (this.SetErrorMsg("BCErrInvalidFieldName"), !1) : (n = this.GetField(e), n == null ? (this.SetErrorMsg("BCErrNoSuchField", e), !1) : (r = n.index, r < 0 ? (this.SetErrorMsg("BCErrNoSuchField", e), !1) : !0))
  }, M.prototype.DoFieldDataUpdate = function(e, t) {
      var n, r, i;
      return i = this.GetField(e), r = i.index, n = this.GetUpdateArray()[r], n == null && (n = this.GetUpdateArray()[r] = new O, n.fieldName = e, n.field = i, n.oldValue = this.GetRawRecords()[this.GetSelection()][r], n.newValue = n.oldValue), t != n.newValue && (n.fieldName = e, n.newValue = t, n.changed = !0, n.setOnServer = !1), !0
  }, M.prototype.DoFieldDataNotify = function(e, t) {
      return this.GetNotifyObject().NotifyNewFieldData(e, t), !0
  }, M.prototype.CanUpdate = function() {
      return this.CanUpdate()
  }, M.prototype.GetFieldSearchSpec = function(e) {
      if (!e) return this.SetErrorMsg("BCErrInvalidFieldName"), "";
      var t = this.GetFieldMap()[e];
      if (!t) return this.SetErrorMsg("BCErrNoSuchField", e), "";
      var n = null;
      if (t) var r = t.index;
      if (r >= 0 && this.GetUpdateArray() != null && r < this.GetUpdateArray().length) {
          var i = this.GetUpdateArray()[r];
          i != null && (n = i.newValue)
      }
      return n === null && t && (n = t.GetSearchSpec()), this.ClearErrorMsg(), n
  }, M.prototype.SetFieldSearchSpec = function(t, n) {
      var r, i, s, t, o;
      if (e.IsEmpty(t)) return this.SetErrorMsg("BCErrInvalidFieldName", t), "";
      o = this.GetFieldSearchSpec(t);
      if (o === n) return "";
      r = this.GetFieldMap()[t];
      if (!r) return this.SetErrorMsg("BCErrNoSuchField", t), "";
      i = r.index;
      if (i < 0) return this.SetErrorMsg("BCErrNoSuchField", t), "";
      if (e.IsEmpty(this.GetUpdateArray())) {
          var u = new Array(this.GetFieldList().length);
          this.SetUpdateArray(u), this.SetUpdateMode("update")
      }
      i < this.GetUpdateArray().length && (s = this.GetUpdateArray()[i]), s || (s = new O, this.GetUpdateArray()[i] = s, s.fieldName = t, s.field = r, s.oldValue = r.GetSearchSpec(), s.newValue = s.oldValue), n != s.newValue && (s.newValue = n, s.changed = !0, s.setOnServer = !1), this.GetNotifyObject().NotifyNewFieldQuerySpec(t), this.ClearErrorMsg()
  }, M.prototype.InvokeMethod = function(e, t) {
      var n;
      return t = t || CCFMiscUtil_CreatePropSet(), n = ot.call(this, e, t), n
  }, M.prototype.CanDelete = function() {
      return at.call(this)
  }, M.prototype.CanInsert = function(e) {
      return ft.call(this, e)
  }, M.prototype.CanUpdate = function(e) {
      return xt.call(this, e)
  }, M.prototype.CanMergeRecords = function() {
      return lt.call(this)
  }, M.prototype.CopyRecord = function(e) {
      return ct.call(this, e)
  }, M.prototype.DeleteRecord = function() {
      return ht.call(this)
  }, M.prototype.End = function() {
      return pt.call(this)
  }, M.prototype.Home = function() {
      return dt.call(this)
  }, M.prototype.NewRecord = function(e) {
      return vt.call(this, e)
  }, M.prototype.NextSet = function(e) {
      return gt.call(this, e)
  }, M.prototype.PriorRecord = function() {
      return yt.call(this)
  }, M.prototype.PriorSet = function(e) {
      return bt.call(this, e)
  }, M.prototype.RedoRecord = function() {
      return wt.call(this)
  }, M.prototype.UndoRecord = function() {
      return Et.call(this)
  }, M.prototype.WriteRecord = function() {
      return St.call(this)
  }, M
}()), typeof SiebelApp.S_App.BCField == "undefined" && (SiebelJS.Namespace("SiebelApp.S_App.BCField"), SiebelApp.S_App.BCField = function() {
  function n() {
      var e, t = "";
      this.SetBusComp = function(t) {
          e = t
      }, this.GetBusComp = function() {
          return e
      }, this.SetSearchSpec = function(e) {
          t = e
      }, this.GetSearchSpec = function() {
          return t
      }
  }
  var e = SiebelApp.Utils,
      t = SiebelApp.Constants;
  return n.prototype.ProcessObjectInfo = function(n) {
      var r = n.GetType();
      if (r != t.get("SWE_PST_FIELD")) throw new Error;
      var i = e.Curry(SiebelApp.S_App.constructor.prototype.DefineAccessor, this, n);
      i("GetName", "SWE_PROP_NAME"), i("GetDataType", "SWE_PROP_TYPE", !0), this.GetDataType() || (this.GetDataType = function() {
          return ""
      }), i("IsCalc", "SWE_PROP_IS_CALC"), i("IsHidden", "SWE_PROP_IS_HIDDEN"), i("IsReadOnly", "SWE_PROP_IS_READONLY"), i("IsRequired", "SWE_PROP_IS_REQ"), i("IsText", "SWE_PROP_IS_TEXT"), i("IsNum", "SWE_PROP_IS_NUM"), i("GetScale", "SWE_PROP_SCALE"), i("GetLength", "SWE_PROP_LENGTH"), i("IsPostChanges", "SWE_PROP_IS_POST_CHANGES"), i("IsBoundedPick", "SWE_PROP_IS_BOUND_PICK"), i("GetCurrField", "SWE_PROP_CURR_FLD", !0), n = null
  }, n
}()), typeof SiebelApp.S_App.AppletControl == "undefined" && (SiebelJS.Namespace("SiebelApp.S_App.AppletControl"), SiebelApp.S_App.AppletControl = function() {
  function AppletControl() {
      var e = CCFMiscUtil_CreatePropSet(),
          t = CCFMiscUtil_CreatePropSet(),
          n = {},
          r = {},
          i, s = null,
          o = -1,
          u = "0",
          a = !1,
          f = null,
          l = !1,
          c = CCFMiscUtil_CreatePropSet(),
          h, p = {
              Visible: !0
          };
      this.IsPostChanges = function() {
          if (h === undefined) {
              h = !1;
              var e = this.GetApplet().GetBusComp();
              if (e) {
                  var t = this.GetFieldName();
                  t && (h = e.GetFieldMap()[t] ? utils.IsTrue(e.GetFieldMap()[t].IsPostChanges()) : !1)
              }
          }
          return h
      }, this.GetPMPropSet = function() {
          return f
      }, this.SetPMPropSet = function(e) {
          f = e
      }, this.GetShowBase = function() {
          return a
      }, this.SetShowBase = function(e) {
          a = e
      }, this.GetMethodPropSet = function() {
          return e
      }, this.ClearMethodPropSet = function() {
          e = null
      }, this.SetMethodPropSet = function(t) {
          e.Copy(t)
      }, this.SetRadioGroupPropSet = function(e) {
          t = e
      }, this.ClearRadioGroupPropSet = function() {
          t = null
      }, this.GetRadioGroupPropSet = function() {
          return t
      }, this.SetGlobalPropSet = function(e) {
          c = e
      }, this.GetScriptMap = function() {
          return n
      }, this.GetMessageVariableMap = function() {
          return r
      }, this.GetApplet = function() {
          return i
      }, this.SetApplet = function(e) {
          i = e
      }, this.GetColNum = function() {
          return o
      }, this.SetColNum = function(e) {
          o = e
      }, this.SetIndex = function(e) {
          s = e
      }, this.GetIndex = function() {
          return s === null ? this.GetColIndex() : s
      }, this.GetWidth = function() {
          return u
      }, this.SetWidth = function(e) {
          u = e
      }, this.SetClientCtrl = function(e) {
          l = e
      }, this.IsClientCtrl = function() {
          return l
      }, this.GetScriptProperty = function(e) {
          return p[e]
      }, this.SetScriptProperty = function(e, t) {
          p[e] = t
      }
  }
  var utils = SiebelApp.Utils,
      consts = SiebelApp.Constants,
      S_App = SiebelJS.Dependency("SiebelApp.S_App"),
      PST_CNTRL = consts.get("SWE_PST_CNTRL"),
      PST_COL = consts.get("SWE_PST_COL"),
      PST_CUSTOM = consts.get("SWE_PST_CUSTOM_CTRL"),
      PROP_COLINDEX = consts.get("SWE_PROP_COLINDEX"),
      PROP_WIDTH = consts.get("SWE_PROP_WIDTH"),
      CTRL_MVG = consts.get("SWE_CTRL_MVG"),
      CTRL_PICK = consts.get("SWE_CTRL_PICK"),
      CTRL_DETAIL = consts.get("SWE_CTRL_DETAIL"),
      CTRL_EFFDAT = consts.get("SWE_CTRL_EFFDAT"),
      CTRL_HIDDEN = consts.get("SWE_CTRL_HIDDEN"),
      CurrencyCal = consts.get("SWE_CTRL_CURRENCY_CALC"),
      cssMap = {
          FontType: "font-family",
          FontColor: "color",
          FontStyle: "font-style",
          FontWeight: "font-weight",
          FontSize: "font-size",
          BgColor: "background-color",
          Visible: "display",
          Width: "width",
          Height: "height"
      },
      ctrlAttrMap = {
          ReadOnly: "readonly"
      };
  return AppletControl.prototype.IsCalc = function() {
      var e = this.GetApplet().GetBusComp().GetField(this.GetFieldName());
      return !!e && !!e.IsCalc()
  }, AppletControl.prototype.ProcessMethodProps = function(e) {
      var t = this.GetMethodPropSet();
      t.length > 0 && this.ClearMethodPropSet(), this.SetMethodPropSet(e)
  }, AppletControl.prototype.ProcessObjectInfo = function(e) {
      var t = e.GetType();
      this.GetControlType = function() {
          return t
      };
      if (t != PST_CNTRL && t != PST_COL && t != PST_CUSTOM) throw new Error;
      var n = utils.Curry(SiebelApp.S_App.constructor.prototype.DefineAccessor, this, e);
      n("IsDynamic", "SWE_PROP_IS_DYNAMIC"), n("GetName", "SWE_PROP_NAME", !0), n("GetUIType", "SWE_PROP_TYPE", !0), n("GetDisplayName", "SWE_PROP_DISP_NAME", !0), n("GetDisplayFormat", "SWE_PROP_DISP_FORMAT", !0), n("GetFieldName", "SWE_PROP_FLD_NAME", !0), n("GetJustification", "SWE_PROP_JUSTIFICATION", !0), n("GetDirection", "SWE_PROP_DIRECTION"), n("GetEDEnabled", "SWE_PROP_ED_ENABLED"), n("GetForceLTRText", "SWE_PROP_FORCELTR_TEXT"), n("GetColIndex", "SWE_PROP_COLINDEX"), n("GetInputMethod", "SWE_PROP_INPUTMETHOD"), n("GetPrompt", "SWE_PROP_PROMPT"), n("IsAutoResize", "SWE_PROP_IS_AUTOSIZE"), n("GetMethodName", "SWE_PROP_MTHD_NAME", !0), n("GetEnabledBmp", "SWE_PROP_ENABLED_BMP"), n("GetDisabledBmp", "SWE_PROP_DISABLED_BMP"), n("GetIconMap", "SWE_PROP_ICON_MAP"), n("GetDispMode", "SWE_PROP_DISP_MODE", !0), n("GetMaxChars", "SWE_PROP_DISP_MAX_CHARS"), n("GetHeight", "SWE_PROP_HEIGHT"), n("GetSeq", "SWE_PROP_SEQ"), n("IsBoundedPick", "SWE_PROP_IS_BOUND_PICK"), n("GetPickApplet", "SWE_PROP_PICK_APLT", !0), n("GetPopupHeight", "SWE_PROP_POPUP_HEIGHT"), n("GetPopupWidth", "SWE_PROP_POPUP_WIDTH"), n("GetPopupType", "SWE_PROP_POPUP_TYPE"), n("GetMaxSize", "SWE_PROP_MAX_SIZE"), n("GetCurrField", "SWE_PROP_CURR_FLD"), n("GetDefaultMethod", "SWE_PROP_DEF_METHOD"), n("IsSortable", "SWE_PROP_IS_SORTABLE"), n("GetCtrlFldEncode", "SWE_PROP_CTRLFLD_ENCODE"), n("GetCaseSensitive", "SWE_PROP_CASE_SENSITIVE"), n("IsEditEnabled", "SWE_PROP_IS_EDIT"), n("GetValue", "SWE_PROP_VALUE"), n("IsEncode", "SWE_PROP_IS_ENCODE"), n("GetLabelJustification", "SWE_PROP_LABEL_JUSTIFICATION"), n("GetHTMLAttr", "SWE_PROP_HTML_ATTRIBUTE"), n("IsStaticBounded", "SWE_PROP_IS_STATIC_BOUNDED"), n("GetLovType", "SWE_PROP_LOV_TYPE"), SiebelApp.S_App.IsRwd() && (n("GetGroupName", "SWE_PST_REP_ITEM_GROUP_NAME", !0), n("GetSequence", "SWE_CNTRL_SEQUENCE", !0), utils.IsEmpty(this.GetSequence()) || this.GetApplet().AddToGroupModel(this.GetName(), this.GetGroupName(), this.GetSequence()));
      if (SiebelApp.S_App.UseAnsiCtrls()) {
          var r = Math.floor(this.GetMaxSize() / 2) || 128;
          this.GetMaxSize = function() {
              return r
          }
      }
      var i;
      t == PST_COL && (i = e.GetProperty(PROP_COLINDEX), i && this.SetColNum(parseInt(i)), n("GetSpanPrefix", "SWE_PROP_SPAN_PREFIX"), this.IsClientCtrl() && n("GetClientCtrlType", "SWE_CTRL_CLIENTTYPE")), n("GetInputName", "SWE_PROP_SPAN"), i = e.GetProperty(PROP_WIDTH), i && this.SetWidth(i), n("GetRTCLaunchpadEnabled", "SWE_PROP_RTC_LAUNCHPAD"), n("GetRTCAlwaysShowToolbars", "SWE_PROP_RTC_TOOLBARS"), n("GetRTCGraphic", "SWE_PROP_RTC_GRAPHIC"), n("GetRTCLink", "SWE_PROP_RTC_LINK"), n("GetControlMsg", "SWE_PROP_CTRL_MESSAGE"), (!utils.IsEmpty(this.GetIconMap()) || this.GetDispMode() == "DontEncodeData" || this.GetDispMode() == "FormatData" || this.GetUIType() == "URL" || this.GetUIType() == "Mailto") && this.SetShowBase(!0);
      var s = consts.get("SWE_PST_INVK_MTHD_PARAMS"),
          o = consts.get("SWE_PST_VALUE_SET"),
          u = consts.get("SWE_PST_QTP_INFO"),
          a = consts.get("SWE_PST_SCRIPTS"),
          f = consts.get("SWE_CTRL_PM_PS"),
          l = consts.get("SWE_PST_MSG_VARIABLES"),
          c = e.GetChildCount();
      for (var h = 0; h < c; h++) {
          var p = e.GetChild(h),
              d = p.GetType();
          switch (d) {
              case l:
                  var v;
                  for (var m = !0;
                      (v = p.EnumProperties(m)) !== null; m = !1) this.GetMessageVariableMap()[v] || (this.GetMessageVariableMap()[v] = p.GetProperty(v));
                  break;
              case f:
                  this.SetPMPropSet(p.Clone());
                  break;
              case s:
                  this.ProcessMethodProps(p);
                  break;
              case o:
                  var g = this.GetRadioGroupPropSet();
                  g.IsEmpty() || this.ClearRadioGroupPropSet();
                  for (var y = 0, b = p.GetChildCount(); y < b; y++) {
                      var w = p.GetChild(y),
                          E = w.GetProperty("FieldValue"),
                          S = w.GetProperty("Selected");
                      if (S) {
                          var x = E;
                          this.GetValue = function() {
                              return x
                          }
                      }
                      w = null
                  }
                  this.SetRadioGroupPropSet(p);
                  break;
              case a:
                  var T = p.EnumProperties(!0);
                  do p.GetProperty(T) != "" && p.GetProperty(T) != undefined && (this.GetScriptMap()[T] = p.GetProperty(T)); while (T = p.EnumProperties(!1));
                  break;
              case u:
                  var N = utils.Curry(SiebelApp.S_App.constructor.prototype.DefineAccessor, this, p);
                  N("GetObjectType", "SWE_PROP_QTP_OT"), N("GetRepstrName", "SWE_PROP_QTP_RN"), N("GetUIName", "SWE_PROP_QTP_UN");
                  break;
              default:
          }
      }
      e = null;
      var C = this.GetPopupType();
      if (this.isBasicControl() || this.GetUIType() === CTRL_HIDDEN) return;
      if (utils.IsTrue(this.IsEditEnabled()))
          if (C === CTRL_MVG) this.GetUIType = function() {
              return CTRL_MVG
          };
          else {
              if (C === CTRL_DETAIL) return;
              C === CTRL_EFFDAT ? this.GetUIType = function() {
                  return CTRL_EFFDAT
              } : C !== CTRL_MVG && (this.GetUIType = function() {
                  return CTRL_PICK
              })
          }
  }, AppletControl.prototype.isBasicControl = function() {
      return ["JComboBox", "JCurrencyCalc", "JTextArea", "JDateTimeZonePick", "JDateTimePick", "JCalculator", "JDatePick", "URL", "Mailto", "Button"].indexOf(this.GetUIType()) !== -1
  }, AppletControl.prototype.GetLabelProperty = function(e) {
      var t = this.GetName() + "_Label";
      return $("#" + t).css(cssMap[e] || "")
  }, AppletControl.prototype.SetLabelProperty = function(e, t) {
      var n = $("#" + this.GetName() + "_Label")[0] || $("#" + this.GetInputName() + "_L")[0];
      return e === "Visible" ? (t = t === "inline", n = $(n).parent(".siebui-label")[0] || n, $(n).toggleClass("siebui-no-display", !t).toggle(t)) : $(n).css(cssMap[e] || "", t), !0
  }, AppletControl.prototype.GetProperty = function(e) {
      var t = this.GetInputName();
      if (cssMap[e]) return $("[name='" + t + "']").css(cssMap[e]);
      var n = $("[name='" + t + "']"),
          r = null;
      return n.attr(ctrlAttrMap[e]) !== undefined ? r = "true" : r = "false", r
  }, AppletControl.prototype.SetProperty = function(e, t) {
      var n = this.GetInputName();
      if (cssMap[e]) {
          var r = $("[name='" + n + "']")[0] || $("#" + n)[0] || $("#" + n + "_Ctrl")[0];
          e === "Visible" ? (t = t === "inline", $(r).nextAll('[id^="' + n + '"]').add($(r)).toggle(t).toggleClass("siebui-no-display", !t)) : $(r).css(cssMap[e], t)
      } else $("[name='" + n + "']").attr(ctrlAttrMap[e] || "", t);
      this.SetScriptProperty(e, t)
  }, AppletControl.prototype.FireOnFocus = function() {
      var script;
      script = this.GetScriptMap().onfocus, script && eval(script)
  }, AppletControl.prototype.FireOnBlur = function() {
      var script;
      script = this.GetScriptMap().onblur, script && eval(script)
  }, AppletControl.prototype.ShowPopup = function() {
      this.OpenPopup();
      return
  }, AppletControl.prototype.OpenPopup = function() {
      this.GetUIType() == CurrencyCal && this.OnEditField();
      return
  }, AppletControl.prototype.OnEditField = function() {
      var e = CCFMiscUtil_CreatePropSet();
      e.SetProperty(consts.get("SWE_FIELD_STR"), this.GetInputName()), e.SetProperty("SWECSP", "false"), e.SetProperty("SWEJI", "false"), e.SetProperty("SWEP", ""), this.GetApplet().InvokeMethod("EditField", e);
      return
  }, AppletControl
}()), typeof SiebelApp.S_App.ToggleApplet == "undefined" && (SiebelJS.Namespace("SiebelApp.S_App.ToggleApplet"), SiebelApp.S_App.ToggleApplet = function() {
  function r(e) {
      var t = -1,
          n = "SiebToggle",
          r = [],
          i, s = e;
      this.GetToggleListArray = function() {
          return r
      }, this.SetControlId = function(e) {
          i = e
      }, this.GetControlId = function() {
          return i
      }, this.SetToggleSeq = function(e) {
          t = e
      }, this.GetToggleSeq = function() {
          return t
      }, this.GetName = function() {
          return n
      }, this.GetApplet = function() {
          return s
      }
  }
  var e = SiebelJS.Dependency("SiebelApp.Constants"),
      t = SiebelJS.Dependency("SiebelApp.S_App"),
      n = SiebelJS.Dependency("SiebelApp.Utils");
  return r.prototype.ProcessObjectInfo = function(r) {
      var i, s = r.GetType();
      if (s != e.get("SWE_PST_TOGGLE_INFO")) return;
      i = r.GetProperty(e.get("SWE_PROP_TOGGLE_ITEMS"));
      if (!n.IsEmpty(i)) {
          var o = [];
          CCFMiscUtil_StringToArray(i, o);
          var u = o.length;
          for (var a = 0; a < u; a++) i = t.LookupStringCache(o[a]), this.GetToggleListArray().push(i)
      }
      i = r.GetProperty(e.get("SWE_PROP_TOGGLE_SEQUENCE"));
      if (!n.IsEmpty(i)) {
          this.SetToggleSeq(parseInt(i, 10));
          if (this.GetToggleSeq() < 0 || this.GetToggleSeq() >= this.GetToggleListArray().length) {
              this.SetToggleSeq(-1);
              return
          }
      }
      this.SetControlId(r.GetProperty(e.get("SWE_PROP_TOGGLE_CTRL_ID")));
      return
  }, r.prototype.Initialize = function() {
      var e = "",
          t = this.GetToggleListArray(),
          r = t.length,
          i = SiebelApp.S_App.IsRwd() && n.IsTrue(this.GetApplet().IsObjResponsive()) ? $("#" + this.GetControlId()) : $("[name='" + this.GetControlId() + "']");
      for (var s = 0; s < r; s++) this.GetToggleSeq() === s ? e += '<option value = "' + s + '"selected = "selected">' + t[s] + "</>" : e += '<option value = "' + s + '">' + t[s] + "</>";
      return i.append(e), this.InjectQTPInfo(i), e
  }, r.prototype.InjectQTPInfo = function(e) {
      e.length != 0 && ($(e).attr("ot", "SiebToggle"), $(e).attr("rn", "SiebToggle"), $(e).attr("un", "SiebelToggle"))
  }, r
}()), typeof SiebelApp.S_App.Menu == "undefined" && (SiebelJS.Namespace("SiebelApp.S_App.Menu"), SiebelApp.S_App.Menu = function() {
  function i(e) {
      var t = e,
          n, r;
      this.GetParent = function() {
          return t
      }, this.parentName = function() {
          return t && t.GetName() ? t.GetName() : ""
      }, this.GetTitle = function() {
          return t.GetName()
      }, this.GetId = function() {
          return t.GetId()
      }, this.GetLabel = function() {
          return t.GetLabel()
      }, this.SetMenuPS = function(e) {
          n = e
      }, this.GetMenuPS = function() {
          return n
      }, this.SetPM = function(e) {
          r = e
      }, this.GetPM = function() {
          return r
      }, this.SetPlaceHolder = function(e) {
          e && (this.GetPlaceHolder = function() {
              var t = e;
              return t
          })
      }
  }

  function s(r, i, s, o) {
      var a, f = e.Curry(SiebelApp.S_App.constructor.prototype.DefineAccessor, this, r),
          l;
      r.PropertyExists(t.get("SWE_PROP_QTP_OT")) && f("GetObjectType", "SWE_PROP_QTP_OT"), r.PropertyExists(t.get("SWE_PROP_QTP_RN")) && f("GetRepstrName", "SWE_PROP_QTP_RN"), r.PropertyExists(t.get("SWE_PROP_QTP_UN")) && f("GetUIName", "SWE_PROP_QTP_UN"), SiebelApp.S_App.IsRwd() && (a = n.GetGlobalMenu()) && !(this.GetParent() instanceof SiebelApp.S_App.Applet) && (l = e.Curry(SiebelApp.S_App.constructor.prototype.DefineAccessor, this, a), l("GetPlaceHolder", "SWE_PROP_TMPL_ITM_HOLDER"));
      if (!e.IsEmpty(n)) {
          var c = CCFMiscUtil_CreatePropSet();
          u.call(this, r, c), c.SetProperty(t.get("MENU_NAME"), s), c.SetProperty(t.get("MENU_PARENT_TYPE"), i);
          var h = {};
          o === undefined ? h.async = !1 : h.async = !0, h.scope =
              this;
          var p = CCFMiscUtil_CreatePropSet();
          return this.InvokeServerCommand("BatchCanInvoke", c, p, h), !0
      }
      return !1
  }

  function o(n, r) {
      var i = r.GetChildCount();
      for (var s = 0; s < i; s++) {
          var u = r.GetChild(s),
              a = u.GetProperty(t.get("CMDMGR_TYPE")),
              f = u.GetProperty(t.get("CMDMGR_CAPTION")),
              l = u.GetProperty(t.get("CMDMGR_COMMAND")),
              c = "";
          n == t.get("SWE_MENU_APPLICATION") || t.get("SWE_MENU_UTILITY") ? c = u.GetProperty(t.get("SWE_PROP_MENU")) : !e.IsEmpty(l) && l.indexOf(t.get("CMDMGR_HASH")) < 0 ? l.indexOf(t.get("CMDMGR_STAR")) == 0 && (c = l.substr(1).split(t.get("CMDMGR_STAR"))[2]) : l != null && l != "" && l.indexOf(t.get("CMDMGR_HASH")) == 0 && (c = "CmdMgr" + u.GetProperty(t.get("SWE_PROP_MENU")));
          if (a == null) break;
          if (c == "") {
              if (f != null) {
                  var h = f.indexOf(t.get("CMDMGR_AND"));
                  h != -1 && (f = f.substring(0, h) + f.substring(h + 1));
                  var p = f.indexOf(t.get("CMDMGR_OPSQR"));
                  p > -1 && (f = f.substring(0, p))
              }
              c = f
          }
          e.IsEmpty(c) || u.SetProperty(t.get("CMDMGR_NAME"), c), a == t.get("SWE_PROP_MENU") && (u.SetProperty(t.get("CMDMGR_ENABLED"), t.get("CMDMGR_TRUE")), o.call(this, n, u))
      }
      return !0
  }

  function u(n, r) {
      var i = n.GetProperty(t.get("PROP_TYPE"));
      if (!e.IsEmpty(i) && i == t.get("PROP_COMMAND")) {
          var s = n.GetProperty(t.get("PROP_COMMAND"));
          s.indexOf(t.get("CMDMGR_HASH")) >= 0 && r.SetProperty(s, "")
      }
      for (var o = 0; o < n.GetChildCount(); o++) {
          var a = n.GetChild(o);
          u.call(this, a, r)
      }
      return !0
  }

  function a(e) {
      var r = CCFMiscUtil_CreatePropSet(),
          i;
      for (var s = 0; s < e.GetChildCount(); s++) a.call(this, e.GetChild(s));
      var o = e.GetProperty(t.get("PROP_TYPE"));
      if (o != t.get("PROP_COMMAND")) return;
      var u = e.GetProperty(t.get("PROP_COMMAND"));
      n.InvokeCommand(u, !1) ? e.SetProperty(t.get("CMDMGR_ENABLED"), t.get("CMDMGR_TRUE")) : e.SetProperty(t.get("CMDMGR_ENABLED"), t.get("CMDMGR_FALSE"))
  }
  var e = SiebelApp.Utils,
      t = SiebelApp.Constants,
      n = SiebelApp.CommandManager.GetInstance(),
      r = !1;
  return i.prototype.Initialize = function() {}, i.prototype.ShowMenuControl = function() {
      var t = this.GetPM();
      e.IsEmpty(t) && (t = this.CreatePM()), t.Show()
  }, i.prototype.OnMenuInvoke = function(e, t, n, i) {
      n === "ApplicationMenu" ? r = !0 : r = !1;
      var s = this.CreateMenuPS(e, t, i);
      return !0
  }, i.prototype.GetName = function() {
      return "Menu" + this.GetTitle()
  }, i.prototype.ShowMenu = function() {}, i.prototype.ProcessMenuCommand = function(t) {
      var r = !1;
      return !e.IsEmpty(n) && n.CanInvokeCommand(t) && (r = n.InvokeCommand(t, !0, !0)), r
  }, i.prototype.ProcessSelfProps = function(e) {}, i.prototype.Notify = function(e) {}, i.prototype.InvokeServerCommand = function(t, r, i, s) {
      var o = !1;
      return e.IsEmpty(n) || (o = n.InvokeServerCommand(t, r, i, s)), o
  }, i.prototype.CreateMenuPS = function(i, s, o) {
      var u = CCFMiscUtil_CreatePropSet(),
          a = this.GetTitle();
      u.SetProperty(i, a), u.SetProperty(t.get("MENU_PARENT_TYPE"), i);
      var f = e.IsEmpty(this.GetCachedMenu(a)) ? CCFMiscUtil_CreatePropSet() : this.GetCachedMenu(a);
      SiebelApp.S_App.IsRwd() && r && (f = n.GetGlobalMenu(), r = !1);
      if (f.IsEmpty()) {
          var l = {},
              c = this;
          typeof o == "object" || o === !0 || o === !1 ? (l.scope = this, l.async = typeof o.async == "boolean" ? o.async : o, l.selfbusy = o.selfbusy || !1, l.mask = o.mask || !1) : l = undefined, this.InvokeServerCommand(s, u, f, l), l === undefined && this.PostExecute(s, u, f, l)
      } else this.PostExecute(s, u, f)
  }, i.prototype.PostExecute = function(r, i, u, f) {
      if (u === !1) return !1;
      if (r === String(t.get("SWE_PREPARE_APPLET_MENU")) || r === String(t.get("SWE_PREPARE_APPLICATION_MENU"))) this.SetCachedMenu(i.GetProperty(i.GetProperty(t.get("MENU_PARENT_TYPE"))), u), u.IsEmpty() || s.call(this, u, i.GetProperty(t.get("MENU_PARENT_TYPE")), i.GetProperty(i.GetProperty(t.get("MENU_PARENT_TYPE"))), f);
      else if (r === "BatchCanInvoke") {
          n.AppendBatchMethods(u);
          var l = this.GetCachedMenu(i.GetProperty(t.get("MENU_NAME")));
          a.call(this, l), o.call(this, i.GetProperty(t.get("MENU_PARENT_TYPE")), l), this.SetMenuPS(l), this.ShowMenu(), l.GetChildByType(t.get("CMDMGR_ACCELERATORS")) && (n.SetGlobalAccl(l.GetChildByType(t.get("CMDMGR_ACCELERATORS"))), e.IsEmpty(n) || n.InitializeAccelerators(n.GetGlobalAccl()));
          if (l.GetChildByType(t.get("CMDMGR_BASEACCELERATORS"))) {
              n.SetBaseAccl(l.GetChildByType(t.get("CMDMGR_BASEACCELERATORS")));
              for (var c = 0; c < n.GetBaseAccl().GetChildCount(); c++) {
                  var h = CCFMiscUtil_CreatePropSet();
                  h = n.GetBaseAccl().GetChild(c), e.IsEmpty(n) || n.InitializeAccelerators(h)
              }
          }
      }
  }, i.prototype.GetCachedMenu = function(e) {
      return n.GetCachedMenu(e)
  }, i.prototype.SetCachedMenu = function(t, r) {
      var i = !1;
      return e.IsEmpty(n) || (i = n.SetCachedMenu(t, r)), i
  }, i.prototype.GetMethodArray = function() {
      return ["ShowMenu", "OnMenuInvoke", "GetMenuPS", "ProcessMenuCommand"]
  }, i.prototype.GetPropArray = function() {
      return SiebelApp.S_App.IsRwd() ? ["GetObjectType", "GetRepstrName", "GetUIName", "GetId", "GetLabel", "parentName", "GetPlaceHolder", "SetPlaceHolder"] : ["GetObjectType", "GetRepstrName", "GetUIName", "GetId", "GetLabel", "parentName"]
  }, i.prototype.CreatePM = function(e, t) {
      var n = CCFMiscUtil_CreatePropSet(),
          r = new t(this);
      n.SetProperty("SWE_OUI_RENDERER", e), this.SetPM(r), r.Init(), r.Setup(n.Clone())
  }, i
}()), typeof SiebelApp.S_App.Currency == "undefined" && (SiebelJS.Namespace("SiebelApp.S_App.Currency"), SiebelApp.S_App.Currency = function() {
  function s() {
      var e = null,
          t, n, r, i, s, o, u, a, f, l = !1,
          c, h, p, d, v, m, g, y, b, w, E, S, x, T, N = !0,
          C, k, L, A = !1,
          O, M, _ = !1,
          D;
      this.isShowingPick = function() {
              return A
          }, this.SetShowingPick = function(e) {
              A = e
          }, this.GetEDateFieldName = function() {
              return f
          }, this.SetEDateFieldName = function(e) {
              f = e
          }, this.GetCCodeMethod = function() {
              return s
          }, this.SetCCodeMethod = function(e) {
              s = e
          }, this.GetCCodeFieldName = function() {
              return i
          }, this.SetCCodeFieldName = function(e) {
              i = e
          }, this.GetPopupBM = function() {
              return w
          }, this.SetPopupBM = function(e) {
              w = e
          }, this.GetRowID = function() {
              return b
          }, this.SetRowID = function(e) {
              b = e
          }, this.GetCurrentView = function() {
              return g
          }, this.SetCurrentView = function(e) {
              g = e
          }, this.GetCurrencySign = function() {
              return e
          }, this.SetCurrencySign = function(t) {
              e = t
          }, this.SetEDateLabel = function(e) {
              t = e
          }, this.GetEDateLabel = function() {
              return t
          }, this.SetAmountLabel = function(e) {
              n = e
          }, this.GetAmountLabel = function() {
              return n
          }, this.SetCCodeLabel = function(e) {
              r = e
          }, this.GetCCodeLabel = function() {
              return r
          }, this.CanDisplayDate = function() {
              return l
          }, this.HideExchDate = function() {
              l = !0
          }, this.GetCurrencyApplet = function() {
              return y
          }, this.SetCurrencyApplet = function(e) {
              y = e
          }, this.SetCurrencyControl =
          function(e) {
              E = e
          }, this.GetCurrencyControl = function() {
              return E
          }, this.SetDateControlName = function(e) {
              S = e
          }, this.GetDateControlName = function() {
              return S
          }, this.SetCalculatorControlName = function(e) {
              x = e
          }, this.GetCalculatorControlName = function() {
              return x
          }, this.SetCurcyCode = function(e) {
              o = e
          }, this.GetCurcyCode = function() {
              return o
          }, this.SetExchDate = function(e) {
              c = e
          }, this.SetExchFormat = function(e) {
              h = e
          }, this.GetExchFormat = function(e) {
              return h
          }, this.SetExchDateField = function(e) {
              p = e
          }, this.GetExchDateField = function() {
              return p
          }, this.GetAmountValue = function() {
              return d
          }, this.SetAmountValue = function(e) {
              d = e
          }, this.SetAmountFormat = function(e) {
              D = e
          }, this.GetAmountFormat = function(e) {
              return D
          }, this.GetExchDate = function() {
              return c
          }, this.SetEDateReadOnly = function(e) {
              a = e
          }, this.IsDateReadOnly = function() {
              return a
          }, this.SetCCodeReadOnly = function(e) {
              u = e
          }, this.IsCCodeReadOnly = function() {
              return u
          }, this.SetAmountReadOnly = function(e) {
              v = e
          }, this.IsAmountReadOnly = function() {
              return v
          }, this.SaveCurrentValues = function() {
              C = this.GetCurcyCode(), k = this.GetExchDate(), L = this.GetAmountValue()
          }, this.GetOrigCCode = function() {
              return C
          }, this.GetOrigEDate = function() {
              return k
          }, this.GetOrigAmount = function() {
              return L
          }, this.SetSourceField = function(e) {
              O = e
          }, this.GetSourceField = function() {
              return O
          }, this.SetQTPInfo = function(e) {
              M = e
          }, this.GetQTPInfo = function() {
              return M
          }, this.SetQueryMode = function(e) {
              _ = e
          }, this.GetQueryMode = function() {
              return _
          }, SiebelApp.S_App.ErrorObject.DecorateErrorCapability(this)
  }

  function u(e) {
      var t = CCFMiscUtil_CreatePropSet();
      t.DecodeFromString(e), this.SetQTPInfo(t)
  }
  var e = SiebelJS.Dependency("SiebelApp.Utils"),
      t = SiebelJS.Dependency("SiebelApp.Constants"),
      n = 207,
      r = 208,
      i = 209;
  s.prototype.GetCurrencyCalInfo = function() {
      var e = [];
      return e.push(this.GetCurrencyControl()), e.push(this.GetCCodeLabel()), e.push(this.GetCurcyCode()), e.push(this.GetDateControlName()), e.push(this.GetEDateLabel()), e.push(this.GetExchDate()), e.push(this.GetCalculatorControlName()), e.push(this.GetAmountLabel()), e.push(this.GetAmountValue()), e.push(this.CanDisplayDate()), e.push(this.IsCCodeReadOnly()), e.push(this.IsDateReadOnly()), e.push(this.IsAmountReadOnly()), e.push(this.GetSourceField()), e.push(this.GetQTPInfo()), e.push(this.GetExchFormat()), e.push(this.GetExchDateField()), e
  }, s.prototype.UpdateCurrencyInfo = function(e, t) {
      SiebelApp.S_App.GetPopupPM().SetProperty("isCurrencyOpen", !0), this.Update(e, t);
      if (e === 2) return;
      return
  }, s.prototype.Update = function(e, t) {
      switch (e) {
          case 0:
              this.Reconfig(t);
              break;
          case 1:
              this.UpdateCCode(t);
              break;
          default:
      }
      this.SetShowingPick(!1), this.SaveCurrentValues();
      return
  }, s.prototype.UpdateCCode = function(e) {
      var t = 6,
          n = [];
      CCFMiscUtil_StringToArray(e, n);
      var r = this.GetAmountValue(),
          i = this.GetCurrencySign();
      r.indexOf(i) !== -1 && (r = r.replace(i, "").trim()), this.SetCurcyCode(n[t - 1]), this.SetCurrencySign(n[t]), this.SetAmount(r, !0), $("[name=" + this.GetSourceField() + "]").val(this.GetAmountValue()), this.PostChanges()
  }, s.prototype.PostChanges = function() {
      if (!this.isValuesChanged()) return;
      var e = CCFMiscUtil_CreatePropSet();
      e = this.SetDefaultParams(), e = this.SetValueParams(e);
      var t = CCFMiscUtil_CreatePropSet();
      e.SetProperty("SWEMethod", "PostChanges"), SiebelApp.S_App.CallServer(e, t, !1), this.SaveCurrentValues()
  }, s.prototype.WriteRecord = function() {
      if (!this.isValuesChanged()) return;
      var e = CCFMiscUtil_CreatePropSet(),
          n = CCFMiscUtil_CreatePropSet();
      e = this.SetDefaultParams(), e = this.SetValueParams(e), e.SetProperty(t.get("SWE_METHOD_STR"), "WriteRecord");
      var r = this.GetQueryMode();
      if (r) {
          var i = {
              async: !1,
              cb: o,
              opdecode: !1,
              scope: this
          };
          SiebelApp.S_App.CallServer(e, n, !0, i)
      } else SiebelApp.S_App.CallServer(e, n, !0);
      this.SaveCurrentValues()
  };
  var o = function(e) {
      this.ClearErrorMsg(), this.CloseServerApplet()
  };
  return s.prototype.CloseServerApplet = function() {
      var e = this.GetQueryMode();
      if (!e && this.isValuesChanged()) return;
      var n = CCFMiscUtil_CreatePropSet(),
          r = CCFMiscUtil_CreatePropSet();
      n = this.SetDefaultParams(), n = this.SetValueParams(n), n.SetProperty(t.get("SWE_METHOD_STR"), "CloseApplet"), SiebelApp.S_App.CallServer(n, r, !0)
  }, s.prototype.SetValueParams = function(e) {
      if ($("#" + this.GetCCodeFieldName()).length > 0) {
          var t = $("#" + this.GetCCodeFieldName()).val(),
              n = $("#" + this.GetEDateFieldName()).val(),
              r = $("#" + this.GetCalculatorControlName()).val();
          this.SetCurcyCode(t), this.SetExchDate(n), this.SetAmount(r, !0)
      }
      e.SetProperty(this.GetCCodeFieldName(), this.GetCurcyCode()), this.CanDisplayDate() || e.SetProperty(this.GetEDateFieldName(), this.GetExchDate());
      var i = this.GetAmountValue(),
          s = 0;
      while (isNaN(i.charAt(s))) s++;
      return i = i.substring(s), e.SetProperty(this.GetCalculatorControlName(), i), e
  }, s.prototype.Reconfig = function(e) {
      var t = [];
      CCFMiscUtil_StringToArray(e, t);
      var s = 0,
          o = t[s++],
          a = t[s++],
          f = t[s++],
          l = t[s++],
          c = t[s++],
          h = t[s++],
          p = t[s++],
          d = t[s++],
          v = t[s++],
          m = t[s++],
          g = t.length - 1,
          y, b;
      this.SetCurrencySign(t[g]), this.SetCurrentView(a), this.SetCurrencyApplet(l), this.SetRowID(h), this.SetPopupBM(p), this.SetSourceField(c);
      var w, E = -1,
          S;
      for (var x = s; x < g; x++) {
          S = t[x].split("|");
          if (S.length > 0) switch (Number(S[0])) {
              case 1:
                  this.ReinitControl(r, S), this.SetCurrencyControl(S[4]);
                  break;
              case 2:
                  E = x, this.ReinitControl(i, S), this.SetDateControlName(S[4]);
                  break;
              case 3:
                  w = x, this.SetCalculatorControlName(S[4]);
                  break;
              case 4:
                  y = S[1];
                  break;
              case 5:
                  b = S[1];
                  break;
              case 6:
                  this.SetCCodeLabel(S[1]);
                  break;
              case 7:
                  this.SetEDateLabel(S[1]);
                  break;
              case 8:
                  this.SetAmountLabel(S[1]);
                  break;
              case 9:
                  u.call(this, S[1]);
                  break;
              default:
          }
      }
      w > -1 && (S = t[w].split("|"), this.ReinitControl(n, S)), E < 0 && this.HideExchDate();
      return
  }, s.prototype.ReinitControl = function(e, t) {
      var s = 1,
          o = t[s++],
          u = t[s++],
          a = t[s++],
          f = t[s++],
          l = t[s++],
          c = t[s++],
          h = t[s++],
          p = !1;
      u === "false" && (p = !0), e === r ? (this.SetCurcyCode(o), this.SetCCodeFieldName(f), this.SetCCodeMethod(l), this.SetCCodeReadOnly(p)) : e === i ? (this.SetExchDate(o), this.SetExchFormat(c), this.SetExchDateField(h), this.SetEDateReadOnly(p), a === !0 && this.HideExchDate(), this.SetEDateFieldName(f)) : e === n && (this.SetAmountFormat(c), this.SetAmount(o, !1), this.SetAmountReadOnly(p), this.SetCalculatorControlName(f));
      return
  }, s.prototype.SetDefaultParams = function() {
      var e = CCFMiscUtil_CreatePropSet();
      return e.SetProperty("SWECmd", "InvokeMethod"), e.SetProperty("SWEView", this.GetCurrentView()), e.SetProperty(t.get("SWE_APPLET_STR"), this.GetCurrencyApplet()), e.SetProperty("SWERowId", this.GetRowID()), e.SetProperty("SWERowIds:SWERowId0", this.GetRowID()), e.SetProperty("SWEReqRowId", this.GetRowID() ? "true" : "false"), e.SetProperty("SWENeedContext", "false"), e.SetProperty("SWEDIC", "true"), e.SetProperty("SWEP", this.GetPopupBM()), e.SetProperty("SWESP", "true"), e.SetProperty("SWEActiveApplet", ""), e.SetProperty("SWEActiveView", this.GetCurrentView()), e
  }, s.prototype.ShowPickPopup = function(e) {
      var n = CCFMiscUtil_CreatePropSet(),
          r = CCFMiscUtil_CreatePropSet();
      n = this.SetDefaultParams(), n.SetProperty("SWEMethod", this.GetCCodeMethod()), n.SetProperty("SWEField", this.GetCCodeFieldName()), n.SetProperty(t.get("SWE_METHOD_STR"), "EditField"), SiebelApp.S_App.CallServer(n, r, !0), this.SetShowingPick(!0)
  }, s.prototype.isValuesChanged = function() {
      return this.GetOrigCCode() !== this.GetCurcyCode() || this.GetOrigEDate() !== this.GetExchDate() || this.GetOrigAmount() !== this.GetAmountValue()
  }, s.prototype.NotifyClosePopup = function() {
      this.GetNewValues(), this.isShowingPick() || (this.isValuesChanged() ? this.WriteRecord() : this.CloseServerApplet())
  }, s.prototype.GetNewValues = function() {
      if ($("#" + this.GetCCodeFieldName()).length === 1) {
          var e = $("#" + this.GetCCodeFieldName()).val(),
              t = $("#" + this.GetEDateFieldName()).val(),
              n = $("#" + this.GetCalculatorControlName()).val();
          this.SetCurcyCode(e), this.SetExchDate(t), this.SetAmount(n, !0)
      }
  }, s.prototype.SetAmount = function(e, t) {
      var n;
      t ? n = SiebelApp.S_App.LocaleObject.GetStringFromCurrency(this.GetCurcyCode(), this.GetExchDate(), e, this.GetAmountFormat()) : n = e, e = SiebelApp.S_App.LocaleObject.GetCurrencyFromString(this.GetCurcyCode(), this.GetExchDate(), n, this.GetAmountFormat()), this.SetAmountValue(e)
  }, s.prototype.PostChangesOnBlur = function() {
      var e = $("#" + this.GetCalculatorControlName()).val();
      this.SetAmount(e, !0)
  }, s
}()), typeof SiebelAppFacade.BasePR == "undefined" && (SiebelJS.Namespace("SiebelAppFacade.BasePR"), define("siebel/basephyrenderer", [], function() {
  return SiebelAppFacade.BasePR = function() {
      function e(e) {
          var t = e;
          this.GetPM = function() {
              return t
          }, SiebelApp.S_App.PluginBuilder.DecorateCapability(this), this.Init(), t.DecorateEventHandlers(), this._BasePR_EndLife = function() {
              t = null
          }
      }
      return e.prototype = {
          Init: function() {},
          ShowUI: function() {},
          BindData: function() {},
          BindEvents: function() {},
          AttachPMBinding: function(e, t, n) {
              this.GetPM() && this.GetPM().AttachPMBinding(e, t, n || {
                  scope: this
              })
          },
          EndLife: function() {
              this._BasePR_EndLife(), SiebelApp.S_App.PluginBuilder.DeleteCapability(this)
          },
          CacheState: function(e, t) {
              this.GetPM().ExecuteMethod("UpdateUIState", e, t)
          }
      }, e
  }(), SiebelAppFacade.BasePhysicalRenderer = SiebelAppFacade.BasePR, SiebelAppFacade.BasePR
})), typeof SiebelAppFacade.ViewPM == "undefined" && (SiebelJS.Namespace("SiebelAppFacade.ViewPM"), define("siebel/viewpm", ["siebel/pmodel"], function() {
  return SiebelAppFacade.ViewPM = function() {
      function n(e) {
          SiebelAppFacade.ViewPM.superclass.constructor.apply(this, arguments);
          if (SiebelApp.S_App.IsRwd()) {
              var n = e.GetName() + "_PM";
              this.GetPMName = function() {
                  return n
              }, this.AttachEventHandler(t.get("INVOKE_VIEW_CONTROL"), function() {
                  var n = arguments[0],
                      r = arguments[1],
                      i = arguments[2],
                      s = n.GetProperty(t.get("SWE_PROP_MTHD_NAME"));
                  arguments[0] = s, Return = e.InvokeMethod.apply(e, arguments)
              })
          }
      }
      var e = SiebelJS.Dependency("SiebelApp.Utils"),
          t = SiebelJS.Dependency("SiebelApp.Constants");
      return SiebelJS.Extend(n, SiebelAppFacade.BasePM), n.prototype.Init = function() {
          SiebelAppFacade.ViewPM.superclass.Init.apply(this, arguments)
      }, n.prototype.Setup = function(e) {
          if (SiebelApp.S_App.IsRwd()) {
              var n = CCFMiscUtil_CreatePropSet();
              n.SetProperty("SWE_OUI_RENDERER", "ViewPR"), SiebelAppFacade.ViewPM.superclass.Setup.call(this, n)
          }
          this.AddProperty("taskViewTitle", e.GetProperty(t.get("SWE_PROP_VIEW_TASKVIEWTITLE"))), this.AddProperty("taskStepTitle", e.GetProperty(t.get("SWE_PROP_VIEW_TASKSTEPTITLE")))
      }, n.prototype.Show = function() {
          if (SiebelApp.S_App.IsRwd()) {
              var e = this.GetRenderer();
              e.ShowUI(), e.BindEvents(), e.BindData()
          }
      }, n
  }(), "SiebelAppFacade.ViewPM"
})), typeof SiebelAppFacade.ViewPR == "undefined" && (SiebelJS.Namespace("SiebelAppFacade.ViewPR"), define("siebel/viewpr", ["siebel/basephyrenderer"], function() {
  return SiebelAppFacade.ViewPR = function() {
      function o() {
          SiebelAppFacade.ViewPR.superclass.constructor.apply(this, arguments)
      }

      function u(e) {
          var i = $("#" + e.GetProperty(t.get("SWE_PROP_TMPL_ITM_HOLDER"))),
              o = e.GetProperty(t.get("SWE_PROP_TYPE")),
              u = SiebelApp.S_App.PluginBuilder.GetHoByName("EventHelper");
          switch (o) {
              case s:
                  u.Manage(i, "click", {
                      ctx: this,
                      ctrlPS: e
                  }, function(e) {
                      setTimeout(function() {
                          e.data.ctx.InvokeControlMethod(e.data.ctrlPS)
                      }, 0), e.preventDefault()
                  });
                  break;
              case n:
                  break;
              case r:
                  break;
              default:
          }
      }

      function a(e, t) {
          e.contents().filter(function() {
              return this.nodeType === Node.TEXT_NODE
          }).replaceWith(t)
      }

      function f() {
          var e = this.GetPM(),
              t = $(".siebui-applet-taskui-h"),
              n = $(".siebui-taskui-title"),
              r = e.Get("taskViewTitle") || "",
              i = e.Get("taskStepTitle") || "";
          (r || i) && t.length && n.length && (a(t, r), a(n, i))
      }

      function l() {
          var e = this.GetPM(),
              t = e.Get("GetControls");
          for (var n in t) t.hasOwnProperty(n) && c.call(this, t[n])
      }

      function c(e) {
          var r = this.GetPM(),
              i = $("#" + e.GetProperty(t.get("SWE_PROP_TMPL_ITM_HOLDER"))),
              o = !1,
              u = e.GetProperty(t.get("SWE_PROP_TYPE")),
              a = e.GetProperty(t.get("SWE_PROP_MTHD_NAME"));
          if (!i) return;
          switch (u) {
              case s:
                  o = r.ExecuteMethod("CanInvokeMethod", a), o ? i.removeClass("appletButtonDis").removeAttr("disabled") : i.addClass("appletButtonDis").attr("disabled", "disabled");
                  break;
              case n:
                  var o = a ? r.ExecuteMethod("CanInvokeMethod", a) : !1;
                  o ? i.removeClass("siebui-link-icon-d") : i.addClass("siebui-link-icon-d")
          }
      }

      function h() {
          var e = this.GetPM(),
              t = e.Get("GetControls");
          for (var n in t) t.hasOwnProperty(n) && p.call(this, t[n])
      }

      function p(o) {
          var u = this.GetPM(),
              a = $("#" + o.GetProperty(t.get("SWE_PROP_TMPL_ITM_HOLDER"))),
              f = 0,
              l = !1,
              c = o.GetProperty(t.get("SWE_PROP_TYPE")),
              h = o.GetProperty(t.get("SWE_PROP_MTHD_NAME")),
              p = o.GetProperty(t.get("SWE_PROP_DISP_NAME")),
              d = u.Get("GetTitle"),
              v = SiebelApp.S_App.IsAutoOn(),
              m = o.GetProperty(t.get("SWE_PROP_JUSTIFICATION"));
          if (!a) return;
          switch (c) {
              case s:
                  l = u.ExecuteMethod("CanInvokeMethod", h), d !== "" && (d += ":"), a.addClass("appletButton"), l || a.addClass("appletButtonDis").attr("disabled", "disabled"), a.attr("type", "button").attr("data-display", p).attr("tabindex", f).attr("title", d + p).attr("aria-label", d + p);
                  break;
              case i:
                  e.IsTrue(SiebelApp.S_App.GetAccessibilityEnhanced()) && (a.attr("tabindex", f).addClass("siebui-ctrl-link"), m && a.addClass("siebui-input-align-" + m));
                  break;
              case n:
                  if (a.length === 1) {
                      var l = h ? u.ExecuteMethod("CanInvokeMethod", h) : !1;
                      a.attr("role", "link").attr("tabindex", l ? f : "-1").addClass(l ? "siebui-link-icon-e" : "siebui-link-icon-d"), m && a.addClass("siebui-input-align-" + m)
                  }
                  break;
              case r:
                  m && a.addClass("siebui-input-align-" + m);
                  break;
              default:
                  a.attr("tabindex", f).addClass("siebui-ctrl-link"), m && a.addClass("siebui-input-align-" + m)
          }
          v === "true" && this.InjectQTPInfo(a, o), a = null
      }

      function d() {
          var e, t, n = SiebelApp.S_App.GetDirection(),
              r, i, s, o, u = $("#s_sctrl_tabScreen"),
              a = 0,
              f = 0,
              l = 0;
          e = u.children("ul").children("li");
          for (o = 0, a = e.length; o < a; o++) r = e.eq(o), r.attr("aria-selected") === "true" && (f = n ? l + r.width() : l), l += r.width();
          r = null, i = n ? l : 0, $(".siebui-landing").length === 0 && u.children("ul").width(l), viewport = u.width(), f > viewport && (t = l - f, n ? i = t < viewport ? 0 : t : i = t < viewport ? l - viewport : f, u.scrollLeft(i)), i > 0 ? ($("#sui-left-scroll").removeClass("siebui-tile-scroll-d"), $("#sui-left-scroll").addClass("siebui-tile-left-scroll")) : $("#sui-left-scroll").addClass("siebui-tile-scroll-d"), s = l - (i + viewport), s > 0 ? ($("#sui-right-scroll").removeClass("siebui-tile-scroll-d"), $("#sui-right-scroll").addClass("siebui-tile-right-scroll")) : $("#sui-right-scroll").addClass("siebui-tile-scroll-d")
      }
      var e = SiebelJS.Dependency("SiebelApp.Utils"),
          t = SiebelJS.Dependency("SiebelApp.Constants"),
          n = t.get("SWE_CTRL_LINK"),
          r = t.get("SWE_CTRL_IMAGECONTROL"),
          i = t.get("SWE_CTRL_TEXTDATA"),
          s = t.get("SWE_PST_BUTTON_CTRL");
      return SiebelJS.Extend(o, SiebelAppFacade.BasePR), o.prototype.Init = function() {
          SiebelAppFacade.ViewPR.superclass.Init.call(this), this.AttachPMBinding("ExecuteViewUpdate", l, {
              scope: this
          })
      }, o.prototype.ShowUI = function() {
          SiebelAppFacade.ViewPR.superclass.ShowUI.call(this), SiebelApp.S_App.IsRwd() ? ($("#" + SiebelApp.S_App.ViewTarget()).addClass("siebui-view"), h.call(this)) : $("#_svf0").addClass("siebui-view"), f.call(this), e.IsTrue(SiebelApp.S_App.IsSui()) && $(".siebui-from-landing-view").length === 0 && ($("html").removeClass("siebui-landing"), d())
      }, o.prototype.BindEvents = function() {
          SiebelAppFacade.ViewPR.superclass.BindEvents.call(this);
          if (SiebelApp.S_App.IsRwd()) {
              var e = this.GetPM().Get("GetControls");
              for (var t in e) e.hasOwnProperty(t) && u.call(this, e[t])
          }
      }, o.prototype.InvokeControlMethod = function(e) {
          SiebelApp.S_App.uiStatus.Busy({});
          var n = {};
          n.async = !0, n.cb = function() {
              var e = Array.prototype.slice.call(arguments),
                  n = e ? e[e.length - 1] : "";
              n !== t.get("SWE_RPC_PROP_NEW_LAYOUT") && n !== t.get("SWE_RPC_PROP_REFRESH_LAYOUT") && n !== t.get("SWE_RPC_PROP_NEW_PAGE") && SiebelApp.S_App.uiStatus.Free()
          };
          var r = CCFMiscUtil_CreatePropSet();
          this.GetPM().OnControlEvent(t.get("INVOKE_VIEW_CONTROL"), e, r, n)
      }, o.prototype.BindData = function() {
          SiebelAppFacade.ViewPR.superclass.BindData.call(this)
      }, o.prototype.InjectQTPInfo = function(e, n) {
          e.length != 0 && n != undefined && ($(e).attr("ot", n.GetProperty(t.get("SWE_PROP_QTP_OT"))), $(e).attr("rn", n.GetProperty(t.get("SWE_PROP_QTP_RN"))), $(e).attr("un", n.GetProperty(t.get("SWE_PROP_QTP_UN"))))
      }, o
  }(), "SiebelAppFacade.ViewPR"
})), typeof SiebelAppFacade.WebpgPM == "undefined" && (SiebelJS.Namespace("SiebelAppFacade.WebpgPM"), define("siebel/webpgpm", ["siebel/pmodel"], function() {
  return SiebelAppFacade.WebpgPM = function() {
      function n(e) {
          SiebelAppFacade.WebpgPM.superclass.constructor.call(this, e);
          var t = {},
              n = null,
              r = null;
          this.GetControls = function() {
              return t
          }, this.GetCanInvokeByName = function() {
              return r
          }, this.SetCanInvokeByName = function() {
              r = []
          }, this.GetCanInvokeArray = function() {
              return n
          }, this.SetCanInvokeArray = function() {
              n = []
          }
      }

      function r(e) {
          if (e.GetChildCount() > 0) {
              var n = e.GetChildByType(t.get("SWE_PST_CNTRL_LIST"));
              if (n) {
                  var r = n.GetChildCount(),
                      i;
                  for (i = 0; i < r; i++) a.call(this, n.GetChild(i))
              }
          }
      }

      function i(e) {
          var t = CCFMiscUtil_CreatePropSet();
          SiebelApp.S_App.CallServer(e.GetChild(0), t, !0, {
              async: !0
          })
      }

      function s(e) {
          var n = e.GetProperty(t.get("SWE_PROP_CAN_INVOKE"));
          typeof n == "string" && o.call(this, n)
      }

      function o(e) {
          var t = [],
              n = !0;
          CCFMiscUtil_StringToArray(e, t), this.GetCanInvokeByName() || this.SetCanInvokeByName(), this.SetCanInvokeArray();
          if (t.length >= 2)
              for (var r = 0, i = t.length; r < i; r += 2) {
                  var s = t[r],
                      o = t[r + 1];
                  s && (n = o === "1" ? !0 : !1, this.GetCanInvokeArray().push(s), this.GetCanInvokeByName()[s] = {
                      bCanInvoke: n
                  })
              }
      }

      function u(e) {
          var t = !0;
          if (!e) return !1;
          if (this.GetCanInvokeByName() !== null && this.GetCanInvokeByName()[e]) {
              t = this.GetCanInvokeByName()[e].bCanInvoke;
              if (t !== undefined || t !== null) return t
          }
          return t
      }

      function a(e) {
          var n = SiebelApp.S_App.LookupStringCache;
          e.SetProperty(t.get("SWE_PROP_NAME"), n(e.GetProperty(t.get("SWE_PROP_NAME")))), e.SetProperty(t.get("SWE_PROP_TMPL_ITM_HOLDER"), e.GetProperty(t.get("SWE_PROP_TMPL_ITM_HOLDER"))), e.SetProperty(t.get("SWE_PROP_TYPE"), n(e.GetProperty(t.get("SWE_PROP_TYPE")))), e.SetProperty(t.get("SWE_PROP_SEQ"), e.GetProperty(t.get("SWE_PROP_SEQ"))), e.SetProperty(t.get("SWE_PROP_DISP_NAME"), n(e.GetProperty(t.get("SWE_PROP_DISP_NAME")))), e.SetProperty(t.get("SWE_PROP_HTML_ATTRIBUTE"), n(e.GetProperty(t.get("SWE_PROP_HTML_ATTRIBUTE")))), e.SetProperty(t.get("SWE_PROP_MTHD_NAME"), n(e.GetProperty(t.get("SWE_PROP_MTHD_NAME")))), e.SetProperty(t.get("SWE_SHOW_POPUP_STR"), n(e.GetProperty(t.get("SWE_SHOW_POPUP_STR")))), e.SetProperty(t.get("SWE_CTRL_URL"), n(e.GetProperty(t.get("SWE_CTRL_URL")))), this.GetControls()[e.GetProperty(t.get("SWE_PROP_NAME"))] = e
      }
      var e = SiebelJS.Dependency("SiebelApp.Utils"),
          t = SiebelJS.Dependency("SiebelApp.Constants");
      return SiebelJS.Extend(n, SiebelAppFacade.BasePM), n.prototype.Init = function() {
          this.AddProperty("placeholder", t.get("SWE_PROP_TMPL_ITM_HOLDER")), this.AddProperty("itemArray", []), this.AddMethod("InvokeControlMethod", i), this.AddMethod("CanInvokeMethod", u), this.AddMethod("ProcessProperties", s), this.AddMethod("ExecuteUIUpdate", function() {})
      }, n.prototype.Setup = function(e) {
          var t = CCFMiscUtil_CreatePropSet();
          e.SetProperty("SWE_OUI_RENDERER", "WebpgPR"), SiebelAppFacade.WebpgPM.superclass.Setup.call(this, t), r.call(this, e)
      }, n
  }(), "SiebelAppFacade.WebpgPM"
})), typeof SiebelAppFacade.WebpgPR == "undefined" && (SiebelJS.Namespace("SiebelAppFacade.WebpgPR"), define("siebel/webpgpr", [], function() {
  return SiebelAppFacade.WebpgPR = function() {
      function a() {
          SiebelAppFacade.WebpgPR.superclass.constructor.apply(this, arguments)
      }

      function f() {
          var e = this.GetPM(),
              t = e.GetControls();
          for (var n in t) t.hasOwnProperty(n) && l.call(this, t[n])
      }

      function l(e) {
          var r = this.GetPM(),
              i = $("#" + e.GetProperty(t.get("SWE_PROP_TMPL_ITM_HOLDER"))),
              s = !1,
              u = e.GetProperty(t.get("SWE_PROP_TYPE")),
              a = e.GetProperty(t.get("SWE_PROP_NAME"));
          if (!i) return;
          switch (u) {
              case o:
                  s = r.ExecuteMethod("CanInvokeMethod", a), s ? i.removeClass("appletButtonDis").removeAttr("disabled") : i.addClass("appletButtonDis").attr("disabled", "disabled");
                  break;
              case n:
                  var s = a ? r.ExecuteMethod("CanInvokeMethod", a) : !1;
                  s ? (i.removeClass("siebui-link-icon-d"), i.addClass("siebui-link-icon-e")) : (i.removeClass("siebui-link-icon-e"), i.addClass("siebui-link-icon-d"))
          }
      }

      function c() {
          var e = this.GetPM(),
              t = e.GetControls();
          for (var n in t) t.hasOwnProperty(n) && h.call(this, t[n])
      }

      function h(a) {
          var f = this.GetPM(),
              l = $("#" + a.GetProperty(t.get("SWE_PROP_TMPL_ITM_HOLDER"))),
              c = 0,
              h = !1,
              p = a.GetProperty(t.get("SWE_PROP_NAME")),
              d = a.GetProperty(t.get("SWE_PROP_TYPE")),
              v = a.GetProperty(t.get("SWE_PROP_MTHD_NAME")),
              m = a.GetProperty(t.get("SWE_PROP_DISP_NAME")),
              g = SiebelApp.S_App.IsAutoOn();
          if (!l) return;
          switch (d) {
              case o:
                  h = f.ExecuteMethod("CanInvokeMethod", p), l.addClass("appletButton"), h || l.addClass("appletButtonDis").attr("disabled", "disabled"), l.attr("type", "button").attr("data-display", m).attr("tabindex", c).attr("title", m).attr("aria-label", m), l = null;
                  break;
              case u:
              case s:
              case i:
                  e.IsTrue(SiebelApp.S_App.GetAccessibilityEnhanced()) && l.attr("tabindex", c).addClass("siebui-input-align-" + a.GetProperty(t.get("SWE_PROP_JUSTIFICATION"))), l = null;
                  break;
              case n:
                  if (l.length === 1) {
                      var h = v ? f.ExecuteMethod("CanInvokeMethod", p) : !1;
                      l.attr("href", "javascript:void()").attr("role", "link").attr("tabindex", h ? c : "-1").addClass(h ? "siebui-link-icon-e" : "siebui-link-icon-d")
                  }
                  l = null;
                  break;
              case r:
                  l.addClass("siebui-input-align-" + a.GetProperty(t.get("SWE_PROP_JUSTIFICATION")));
                  break;
              default:
                  l.attr("tabindex", c).addClass("siebui-input-align-" + a.GetProperty(t.get("SWE_PROP_JUSTIFICATION")))
          }
          g == 1 && this.InjectQTPInfo(l, a)
      }

      function p(e) {
          var i = $("#" + e.GetProperty(t.get("SWE_PROP_TMPL_ITM_HOLDER"))),
              s = e.GetProperty(t.get("SWE_PROP_TYPE")),
              u = SiebelApp.S_App.PluginBuilder.GetHoByName("EventHelper");
          switch (s) {
              case n:
              case o:
                  u.Manage(i, "click", {
                      ctx: this,
                      ctrlPS: e
                  }, function(t) {
                      setTimeout(function() {
                          t.data.ctx.GetPM().ExecuteMethod("InvokeControlMethod", e)
                      }, 0), t.preventDefault()
                  });
                  break;
              case r:
                  break;
              default:
          }
      }
      var e = SiebelJS.Dependency("SiebelApp.Utils"),
          t = SiebelJS.Dependency("SiebelApp.Constants"),
          n = t.get("SWE_CTRL_LINK"),
          r = t.get("SWE_CTRL_IMAGECONTROL"),
          i = t.get("SWE_CTRL_PLAINTEXT"),
          s = t.get("SWE_CTRL_TEXTDATA"),
          o = t.get("SWE_PST_BUTTON_CTRL"),
          u = t.get("SWE_CTRL_LABEL");
      return SiebelJS.Extend(a, SiebelAppFacade.BasePR), a.prototype.Init = function() {
          SiebelAppFacade.WebpgPR.superclass.Init.call(this), this.AttachPMBinding("ExecuteUIUpdate", f)
      }, a.prototype.ShowUI = function() {
          SiebelAppFacade.WebpgPR.superclass.ShowUI.call(this), c.call(this)
      }, a.prototype.InjectQTPInfo = function(e, n) {
          e.length != 0 && n != undefined && ($(e).attr("ot", n.GetProperty(t.get("SWE_PROP_QTP_OT"))), $(e).attr("rn", n.GetProperty(t.get("SWE_PROP_QTP_RN"))), $(e).attr("un", n.GetProperty(t.get("SWE_PROP_TYPE"))))
      }, a.prototype.BindEvents = function() {
          SiebelAppFacade.WebpgPR.superclass.BindEvents.call(this);
          var e = this.GetPM().GetControls();
          for (var t in e) e.hasOwnProperty(t) && p.call(this, e[t])
      }, a
  }(), "SiebelAppFacade.WebpgPR"
})), typeof SiebelAppFacade.AppletMenuPresentationModel == "undefined" && (SiebelJS.Namespace("SiebelAppFacade.AppletMenuPresentationModel"), define("siebel/appletmenupmodel", ["siebel/pmodel"], function() {
  return SiebelAppFacade.AppletMenuPresentationModel = function() {
      function n(e) {
          SiebelAppFacade.AppletMenuPresentationModel.superclass.constructor.call(this, e)
      }

      function r(n) {
          var o = [],
              u = n.GetChildCount(),
              a = !0,
              f = !1,
              l = e.get("CMDMGR_COMMAND"),
              c = e.get("CMDMGR_SEPARATOR"),
              h = e.get("CMDMGR_MENU"),
              p = e.get("CMDMGR_CAPTION"),
              d = e.get("CMDMGR_TYPE");
          for (var v = 0; v < u; v++) {
              var m = n.GetChild(v);
              if (!m.IsEmpty()) {
                  var g = m.GetProperty(p),
                      y = m.GetProperty(d);
                  switch (y) {
                      case l:
                          f && !a && o.push(s.call(this));
                          if (t.IsEmpty(m.GetProperty(h))) {
                              var b = m.GetProperty(l);
                              m.SetProperty(h, b)
                          }
                          o.push(i.call(this, m)), f = a = !1;
                          break;
                      case c:
                          f = !a;
                          break;
                      case h:
                          f && !a && s.call(this);
                          var w = r.call(this, m),
                              E = i.call(this, m);
                          E.subMenu = w, o.push(E)
                  }
              }
          }
          return o
      }

      function i(n) {
          var r = n.GetProperty(e.get("CMDMGR_ENABLED")),
              i = n.GetProperty(e.get("CMDMGR_COMMAND")),
              s = n.GetProperty(e.get("CMDMGR_CAPTION")),
              o = n.GetProperty(e.get("SWE_PROP_QTP_OT")),
              u = n.GetProperty(e.get("SWE_PROP_QTP_RN")),
              a = n.GetProperty(e.get("SWE_PROP_QTP_UN"));
          s = t.Expand(s, e.get("CMDMGR_OPSQR"), e.get("CMDMGR_APPLETWIDTH"));
          var f = {};
          return f[e.get("CMDMGR_CAPTION")] = s, f[e.get("CMDMGR_COMMAND")] = i, f[e.get("CMDMGR_ENABLED")] = r, f[e.get("SWE_PROP_QTP_OT")] = o, f[e.get("SWE_PROP_QTP_RN")] = u, f[e.get("SWE_PROP_QTP_UN")] = a, f
      }

      function s() {
          var t = {};
          return t[e.get("CMDMGR_COMMAND")] = e.get("CMDMGR_SEPARATOR"), t
      }
      var e = SiebelJS.Dependency("SiebelApp.Constants"),
          t = SiebelJS.Dependency("SiebelApp.Utils");
      return SiebelJS.Extend(n, SiebelAppFacade.BasePM), n.prototype.Init = function() {
          SiebelAppFacade.AppletMenuPresentationModel.superclass.Init.apply(this, arguments);
          try {
              SiebelApp.S_App.IsRwd() || this.AddProperty("GetPlaceHolder", e.get("SWE_MENU_IDENTIFIER") + this.Get("GetId"))
          } catch (t) {}
          this.AttachEventHandler("HandleClick", function(t) {
              this.ExecuteMethod("OnMenuInvoke", e.get("APPLET_NAME"), e.get("SWE_PREPARE_APPLET_MENU"), e.get("SWE_MENU_APPLET"), !0)
          }, {
              core: !0
          }), this.AttachEventHandler("HandleMenuClick", function(e) {
              this.ExecuteMethod("ProcessMenuCommand", e)
          }, {
              core: !0
          }), this.AddMethod("PrepareConcreteMenu", function() {
              this.AddProperty("GetConcreteMenu", r.call(this, this.ExecuteMethod("GetMenuPS")))
          }, {
              core: !0
          })
      }, n
  }(), SiebelAppFacade.AppletMenuPresentationModel
})), typeof SiebelAppFacade.AppletMenuPR == "undefined" && (SiebelJS.Namespace("SiebelAppFacade.AppletMenuPR"), define("siebel/appletmenupr", ["siebel/basephyrenderer"], function() {
  return SiebelAppFacade.AppletMenuPR = function() {
      function t(e) {
          SiebelAppFacade.AppletMenuPR.superclass.constructor.call(this, e)
      }

      function n(t, r) {
          var i = e.get("CMDMGR_CAPTION");
          for (var s = 0, o = t.length; s < o; s++)
              if (t[s][i]) {
                  var u = r.find('li[data-caption="' + t[s][i] + '"]').eq(0);
                  t[s].ot && u.attr("ot", t[s].ot), t[s].rn && u.attr("rn", t[s].rn.trim()), t[s].un && u.attr("un", t[s].un), t[s].subMenu && n.call(this, t[s].subMenu, u.children("ul"))
              }
      }
      var e = SiebelJS.Dependency("SiebelApp.Constants");
      return SiebelJS.Extend(t, SiebelAppFacade.BasePR), t.prototype.Init = function() {
          SiebelAppFacade.AppletMenuPR.superclass.Init.call(this), this.AttachPMBinding("ShowMenu", function() {
              this.GetPM().ExecuteMethod("PrepareConcreteMenu"), this.ShowMenu()
          })
      }, t.prototype.ShowUI = function() {
          SiebelAppFacade.AppletMenuPR.superclass.ShowUI.call(this);
          var e = this.GetPM(),
              t = $("#" + e.Get("GetPlaceHolder")),
              n = e.Get("GetLabel");
          t.addClass("siebui-appletmenu-btn").html("<span>" + t.text() + "</span>"), n !== "" && t.attr({
              title: n + " " + SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_MENU_TITLE"),
              "aria-label": n + ":" + SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_MENU_TITLE"),
              tabindex: "0",
              "data-seq": "0"
          }), SiebelAppFacade.LegacyCssSupport.addLegacyClass(t)
      }, t.prototype.BindEvents = function() {
          SiebelAppFacade.AppletMenuPR.superclass.BindEvents.call(this), $("#" + this.GetPM().Get("GetPlaceHolder")).bind("click", {
              ctx: this
          }, function(t) {
              var n = SiebelAppFacade.ComponentMgr.FindComponent({
                  id: t.data.ctx.GetPM().Get("parentName")
              });
              if (n) {
                  var r = CCFMiscUtil_CreatePropSet();
                  r.SetProperty(e.get("SWE_MENU_APPLET"), "true");
                  var i = n.ExecuteMethod("InvokeMethod", "OnFocus", r);
                  if (!i) return t.stopImmediatePropagation(), t.preventDefault(), !1
              }
              t.data.ctx.GetPM().OnControlEvent("HandleClick")
          })
      }, t.prototype.BindData = function() {
          SiebelAppFacade.AppletMenuPR.superclass.BindData.call(this)
      }, t.prototype.GenMenuMarkup = function(t, n) {
          var r = "",
              i = e.get("CMDMGR_CAPTION"),
              s = e.get("CMDMGR_ENABLED"),
              o = "";
          n = n || "siebui-menu";
          for (var u = 0, a = t.length; u < a; u++) {
              var f = "",
                  l = n + "-item ",
                  c = String(t[u][s]) === "true";
              t[u][i] ? (f = t[u][i].charAt(0) === "&" ? t[u][i].substring(1) : t[u][i], o = "<a href='javascript:void(0)' class='" + (c ? "" : "ui-state-disabled") + "' >" + f + "</a>") : (f = "", o = "<a href='javascript:void(0)' class='ui-state-disabled'></a>", l += n + "-separator"), SiebelApp.S_App.GetDirection() && (l += " siebui-rtl-element-right"), r += '<li data-caption="' + (t[u][i] || "") + '" ' + "aria-disabled='" + (c ? "false" : "true") + "' class='" + l + "' > " + o, t[u].subMenu && (r += "<ul>" + this.GenMenuMarkup(t[u].subMenu, n) + "</ul>"), r += "</li>"
          }
          return r
      }, t.prototype.FindCommand = function(t, n) {
          var r = e.get("CMDMGR_CAPTION"),
              i = e.get("CMDMGR_COMMAND");
          for (var s = 0, o = t.length; s < o; s++) {
              if (t[s][r] === n) return t[s][i];
              if (t[s].subMenu) {
                  var u = this.FindCommand(t[s].subMenu, n);
                  if (u) return u
              }
          }
      }, t.prototype.UpdateMenuItems = function(t, n) {
          var r = e.get("CMDMGR_CAPTION"),
              i = e.get("CMDMGR_ENABLED");
          for (var s = 0, o = t.length; s < o; s++) {
              var u = String(t[s][i]) === "true";
              if (t[s][r]) {
                  var a = $('li[data-caption="' + t[s][r] + '"]', n),
                      f = a.children("a");
                  u ? (a.attr("aria-disabled", "false"), f.removeClass("ui-state-disabled")) : (a.attr("aria-disabled", "true"), f.addClass("ui-state-disabled")), t[s].subMenu && this.UpdateMenuItems(t[s].subMenu, n)
              }
          }
      }, t.prototype.ShowMenu = function() {
          var e = this.GetPM(),
              t = e.Get("GetPlaceHolder"),
              n = $("#" + t);
          if ($("#" + t + "-menu").length === 0) {
              var r = e.Get("GetConcreteMenu"),
                  i = "<ul id='" + t + "-menu' class='siebui-appletmenu" + (SiebelApp.S_App.GetDirection() ? " siebui-appletmenu-rtl" : "") + "' style='display:none;'>" + this.GenMenuMarkup(r, "siebui-appletmenu") + "</ul>";
              n.after(i).next("#" + t + "-menu").menu({}).css({
                  position: "absolute",
                  zIndex: 50,
                  top: 0,
                  left: 0
              }).hide().focusout(function(e) {
                  var t = $(this);
                  $(this).parent().find(document.activeElement).length === 0 && t.hide()
              }).bind("menuselect", {
                  ctx: this
              }, function(e, t) {
                  $(this).hide();
                  if (t && t.item) {
                      var n = e.data.ctx.FindCommand(e.data.ctx.GetPM().Get("GetConcreteMenu"), t.item.eq(0).attr("data-caption"));
                      n !== undefined && e.data.ctx.GetPM().OnControlEvent("HandleMenuClick", n)
                  }
                  return !1
              }), this.InjectQTPInfo($("#" + t + "-menu")), r = null, i = null
          } else this.UpdateMenuItems(e.Get("GetConcreteMenu"), $("#" + t + "-menu"));
          $("#" + t + "-menu").show().position({
              my: "center top",
              at: "center bottom",
              of: n,
              collision: "flipfit flipfit"
          }).focus().focusin().one("menublur", {
              ctx: this
          }, function(e, t) {
              $(this).find("li:first a").addClass("ui-state-active")
          }), n = null
      }, t.prototype.InjectQTPInfo = function(e) {
          var t = this.GetPM(),
              r = t.Get("GetConcreteMenu");
          t && (typeof t.Get("GetObjectType") == "string" && $(e).attr("ot", t.Get("GetObjectType")), typeof t.Get("GetRepstrName") == "string" && $(e).attr("rn", t.Get("GetRepstrName")), typeof t.Get("GetUIName") == "string" && $(e).attr("un", t.Get("GetUIName"))), n.call(this, r, e)
      }, t
  }(), SiebelAppFacade.MBMenuRenderer = SiebelAppFacade.AppletMenuPR, SiebelAppFacade.AppletMenuPR
})), typeof SiebelAppFacade.AppMenuPM == "undefined" && (SiebelJS.Namespace("SiebelAppFacade.AppMenuPM"), define("siebel/appmenupm", ["siebel/appletmenupmodel"], function() {
  return SiebelAppFacade.AppMenuPM = function() {
      function t(e) {
          SiebelAppFacade.AppMenuPM.superclass.constructor.call(this, e)
      }

      function n() {
          this.ExecuteMethod("OnMenuInvoke", e.get("APPLICATION_NAME"), e.get("SWE_PREPARE_APPLICATION_MENU"), e.get("SWE_MENU_APPLICATION"))
      }
      var e = SiebelJS.Dependency("SiebelApp.Constants");
      return SiebelJS.Extend(t, SiebelAppFacade.AppletMenuPresentationModel), t.prototype.Init = function() {
          SiebelAppFacade.AppMenuPM.superclass.Init.call(this), SiebelApp.S_App.IsRwd() || this.AddProperty("GetPlaceHolder", "s_0"), this.AddMethod("PreparePropertySet", n), this.AttachEventHandler("BeforeMenuShow", function(e) {
              n.call(this)
          }, {
              core: !0
          })
      }, t.prototype.Setup = function(e) {
          SiebelAppFacade.AppMenuPM.superclass.Setup.call(this, e), n.call(this)
      }, t
  }(), SiebelAppFacade.AppMenuPM
})), typeof SiebelAppFacade.AppMenuPR == "undefined" && (SiebelJS.Namespace("SiebelAppFacade.AppMenuPR"), define("siebel/appmenupr", ["siebel/appletmenupr"], function() {
  return SiebelAppFacade.AppMenuPR = function() {
      function e(e) {
          SiebelAppFacade.AppMenuPR.superclass.constructor.call(this, e)
      }
      return SiebelJS.Extend(e, SiebelAppFacade.AppletMenuPR), e.prototype.ShowUI = function() {
          var e = this.GetPM(),
              t = e.Get("GetConcreteMenu"),
              n = this.GenMenuMarkup(t, "siebui-appmenu");
          $("#" + e.Get("GetPlaceHolder")).attr("style", "").append(n).menubar({}).bind("menuselect", {
              ctx: this
          }, function(e, t) {
              var n = e.data.ctx;
              if (t && t.item) {
                  var r = n.FindCommand(n.GetPM().Get("GetConcreteMenu"), t.item.eq(0).attr("data-caption"));
                  r !== undefined && n.GetPM().OnControlEvent("HandleMenuClick", r)
              }
          }).bind("menubarbeforeshow", {
              ctx: this
          }, function(e, t) {
              e.data.ctx.GetPM().OnControlEvent("BeforeMenuShow")
          }), $("#" + e.Get("GetPlaceHolder")).find("ul").each(function() {
              $(this).attr("role", "menubar")
          });
          var r = e.Get("GetLabel");
          r !== "" && $("#" + e.Get("GetPlaceHolder")).attr("title", r + " " + SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_MENU_TITLE")).attr("tabindex", "0"), SiebelApp.S_App.GetDirection() && ($("#" + e.Get("GetPlaceHolder")).parent().addClass("siebui-rtl-element-right"), $("#" + e.Get("GetPlaceHolder")).data("ui-menubar").options.position = {
              my: "right top",
              at: "right bottom"
          });
          var i = $("#" + e.Get("GetPlaceHolder")).parent();
          i.attr({
              role: "navigation",
              title: SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_APPMENU_TITLE")
          }), i.parent().parent().removeAttr("title"), i.parent().parent().removeAttr("role"), i = null, this.hasShown = !0, t = null, n = null, this.InjectQTPInfo($("#" + e.Get("GetPlaceHolder")))
      }, e.prototype.BindEvents = function() {
          var e = this.GetPM(),
              t = $("#" + e.Get("GetPlaceHolder")).parent();
          t.children().hasClass("siebui-appmenu-toggle") || (t.prepend('<a class="siebui-appmenu-toggle" href="#"></a>'), t.children(".siebui-appmenu-toggle").bind("click", function() {
              $(this).data("isAppMenuOn") ? $(this).data("isAppMenuOn", !1) : $(this).data("isAppMenuOn", !0), $(this).parent().hasClass("siebui-appmenu-on") ? ($(this).parent().removeClass("siebui-appmenu-on"), $(".siebui-banner-btn").removeClass("forcehide"), $(".siebui-search-toolbar").removeClass("forcehide")) : ($(this).parent().addClass("siebui-appmenu-on"), $(".siebui-banner-btn").addClass("forcehide"), $(".siebui-search-toolbar").addClass("forcehide"))
          }), $(window).resize(function() {
              $(".siebui-appmenu-toggle").data("isAppMenuOn") && !$(".siebui-appmenu-toggle").is(":visible") && $(".siebui-appmenu-toggle").click()
          })), t = null
      }, e.prototype.BindData = function() {}, e.prototype.ShowMenu = function() {
          if (this.hasShown) {
              var e = this.GetPM(),
                  t = e.Get("GetConcreteMenu");
              this.UpdateMenuItems(t, $("#" + e.Get("GetPlaceHolder")))
          }
      }, e
  }(), SiebelAppFacade.AppMenuPR
})), typeof SiebelAppFacade.ListPresentationModel == "undefined" && (SiebelJS.Namespace("SiebelAppFacade.ListPresentationModel"), define("siebel/listpmodel", ["siebel/pmodel"], function() {
  return SiebelAppFacade.ListPresentationModel = function() {
      function s(e) {
          SiebelAppFacade.ListPresentationModel.superclass.constructor.call(this, e), this.GetStateUIMap().RecordSet = [], this.GetStateUIMap().CanNavigate = {}
      }

      function o(e) {
          this.ExecuteMethod("ExecuteHandleControlFocus", e), (!e || e && !this.ExecuteMethod("GetListCol", e.GetName())) && this.SetProperty("SetFocusToGridCell", !0)
      }

      function u(t, n, r) {
          this.ExecuteMethod("OnScrollComplete", t === "ScrollPrevData" ? e.get("PAG_SCROLL_UP") : e.get("PAG_SCROLL_DN"))
      }

      function a(e, r, i, s) {
          var o = r[r.length - 1],
              u = o && o.getDiff;
          if (u) {
              var a = this.GetStateUIMap();
              if (e === "GetRecord" && u) {
                  var f = r[0],
                      l = a.RecordSet,
                      c = this.ExecuteMethod("GetRecord", f),
                      h = {},
                      p = !1;
                  if (l && this.GetStateUIMap().QueryMode === this.Get("IsInQueryMode")) {
                      prevrecord = l[f], canNavigate = a.CanNavigate[f];
                      if (prevrecord) {
                          var d = this.Get("GetControls");
                          for (var v in c)
                              if (!prevrecord.hasOwnProperty(v) || prevrecord[v] !== c[v]) h[v] = c[v], p = !0;
                          var m;
                          for (var g in d) m = this.ExecuteMethod("CanNavigate", g, f), canNavigate && canNavigate.hasOwnProperty(g) ? canNavigate[g] !== m && (p = !0, fldName = d[g].GetFieldName(), h[fldName] = c[fldName]) : m && (fldName = d[g].GetFieldName(), c[fldName] && c[fldName].trim().length > 0 && (p = !0, h[fldName] = c[fldName]));
                          h = p ? h : null
                      } else h = c
                  } else h = c;
                  s[n] = h, s[t] = !0
              } else if (e === "GetRowsSelectedArray" && u) {
                  var y = this.Get("GetRowsSelectedArray");
                  s[n] = JSON.stringify(y) === a.SelectedRowArray ? null : y, s[t] = !0
              } else if (e === "GetRecordSet" && u) {
                  var l = a.RecordSet,
                      b = this.Get("GetRecordSet");
                  l.length === b.length && JSON.stringify(l) === JSON.stringify(b) ? l.length === 0 && !o.bRefresh ? s[n] = b : s[n] = null : s[n] = b, s[t] = !0
              }
          } else s[t] = !1;
          return s[n]
      }

      function f(e, r, i) {
          var s = this.GetStateUIMap();
          i[t] = !0;
          if (e === "RecordSet") {
              var o = Number(r.index);
              s.RecordSet[o] = $.extend(s.RecordSet[o], r.stateValue), s.QueryMode = this.Get("IsInQueryMode")
          } else if (e === "CellValue") s.RecordSet[r.index] || (s.RecordSet[r.index] = {}), s.RecordSet[r.index][r.name] = r.stateValue, s.QueryMode = this.Get("IsInQueryMode");
          else if (e === "ClearData") s.RecordSet = [], s.SelectedRowArray = null, s.CanNavigate = {};
          else if (e === "CanNavigate") {
              var o = r.index;
              s.CanNavigate[o] || (s.CanNavigate[o] = {}), s.CanNavigate[o][r.ctrlName] = r.stateValue, s.QueryMode = this.Get("IsInQueryMode"), i[t] = !1
          } else e === "SelectedRowArray" ? s.SelectedRowArray = JSON.stringify(r.stateValue) : e === "Init" ? (i[n] || (this.ResetStateUIMap(), s = this.GetStateUIMap()), s.RecordSet = [], s.CanNavigate = {}, i[n] = !0, i[t] = !1) : i[t] = !1
      }

      function l(e, r, i) {
          var s = !0;
          i[t] = !1;
          if (e === "CellChange") {
              var o, u = this.GetStateUIMap(),
                  a;
              u.RecordSet && (a = this.Get("GetSelection"), canNavigate = u.CanNavigate[a], o = u.RecordSet[a]);
              if (o) {
                  var f = r[1],
                      l = this.ExecuteMethod("GetControl", f);
                  if (l) {
                      var c = o[l.GetFieldName()],
                          h = this.ExecuteMethod("CanNavigate", f, a),
                          p = canNavigate && canNavigate.hasOwnProperty(f) ? canNavigate[f] !== h : h && r[2] && (r[2] + "").trim().length > 0;
                      c === r[2] && !p && (s = !1)
                  }
              }
              i[t] = !0
          }
          return i[n] = s, s
      }

      function c(e) {
          var t, n = null,
              r = SiebelAppFacade.DecisionManager.IsTouch(),
              i = "";
          e && (t = e.GetChildByType(consts.get("SWE_APPLET_PM_PS")), utils.IsEmpty(t) || t.GetProperty(consts.get("SWE_PROP_CAN_MULTISELECT")) === "true" && (i += t.GetProperty(consts.get("SWE_PROP_MULTISEL_COL_BEH")).toLowerCase(), n = r ? i === consts.get("SWE_MULTISELECT_DISABLE_ON_TOUCH") ? !1 : !0 : i === consts.get("SWE_MULTISELECT_ENABLE_ON_NONTOUCH") ? !0 : !1)), n = n === null ? r ? !0 : !1 : n;
          if (n) {
              var s = SiebelAppFacade.PresentationModel.GetCtrlTemplate("SelectAll", "SelectAll", consts.get("SWE_CTRL_CHECKBOX"), 0);
              s.SetPropertyStr(consts.get("SWE_PROP_JUSTIFICATION"), "center"), s.SetPropertyStr(consts.get("SWE_PROP_LABEL_JUSTIFICATION"), "center"), s.SetPropertyStr(consts.get("SWE_PROP_MTHD_NAME"), "SelectAll"), this.SetProperty("MultiSelectColumn", "SelectAll"), this.ExecuteMethod("AddClientControl", s), this.SetProperty(consts.get("ENABLE_MULTISELECT_COLUMN"), n)
          }
      }

      function h(t) {
          var n = [],
              r = t.GetProperty(e.get("SWE_PROP_CTRL_STAT"));
          r && (CCFMiscUtil_StringToArray(r, n), this.AddProperty("selectctrlinfo", n), this.AddProperty("ctrlmode", t.GetType() === e.get("SWE_PROP_ENABLE_SEL") ? e.get("SWE_PROP_CAN_ENABLE_SEL") : e.get("SWE_PROP_CAN_SHOW_SEL")))
      }

      function p(t, n, r) {
          if (String(n.GetProperty(e.get("SWE_RPC_PROP_RETURN_STATUS"))) === e.get("SWE_RPC_PROP_STATUS_COMPLETED")) {
              var i = String(t.GetProperty(e.get("SWE_FIELD_STR"))),
                  s = this.Get("GetListOfColumns");
              for (var o in s)
                  if (s.hasOwnProperty(o) && s[o].GetInputName() === i) {
                      this.SetProperty("SortRecord", {
                          name: s[o].GetName(),
                          type: r,
                          msg: r === "ascending" ? SiebelApp.S_App.LocaleObject.GetLocalString(e.get("SWE_SORTASC_TOOL_TIP")) : SiebelApp.S_App.LocaleObject.GetLocalString(e.get("SWE_SORTDSC_TOOL_TIP"))
                      });
                      break
                  }
          }
      }

      function d() {
          return SiebelApp.S_App.IsRwd() ? "#" + this.Get("GetRecDetailId") : e.get("SWE_LIST_DETAIL") + this.Get("GetVarName")
      }

      function v(e) {
          var t = !1;
          if (e) {
              var n = this.Get("GetBusComp");
              if (n) {
                  var r = n.GetFieldMap()[e.GetFieldName()];
                  r && (t = utils.IsTrue(r.IsRequired()))
              }
          }
          return t
      }

      function m() {
          var e = this.Get("GetListOfColumns"),
              t = [];
          for (var n in e)
              if (e.hasOwnProperty(n)) {
                  var r = e[n],
                      i = n,
                      s = {
                          name: i,
                          controlType: r.GetUIType(),
                          isLink: this.ExecuteMethod("IsLinkOnCtrl", i),
                          index: Number(r.GetColNum()) + 1,
                          bCanUpdate: this.ExecuteMethod("CanUpdate", i),
                          isRequired: this.ExecuteMethod("IsRequired", r.GetName()) || v.call(this, r),
                          control: r
                      };
                  t.push(s)
              } return t.sort(function(e, t) {
              return e.index - t.index
          }), t
      }

      function g(e) {
          var t = CCFMiscUtil_CreatePropSet();
          t.SetProperty("SWER", e), t.SetProperty("SWEReqRowId", "1"), this.ExecuteMethod("InvokeMethod", "Expand", t)
      }

      function y(e) {
          var t = CCFMiscUtil_CreatePropSet();
          t.SetProperty("SWER", e), t.SetProperty("SWEReqRowId", "1"), this.ExecuteMethod("InvokeMethod", "Collapse", t)
      }

      function b(e) {
          var t = 0,
              n = 0,
              r = [],
              s = [],
              o = [],
              u = this.Get("ListOfColumns"),
              a = e.length;
          for (i = 0; i < a; i++) {
              if (!e[i]) continue;
              var f = e[i].split("	");
              if (i == 0) {
                  var l = f.length,
                      c = u.length;
                  for (; n < l; n++)
                      for (; t < c; t++) {
                          var h = u[t].control;
                          if (f[n].replace("\n", "") === h.GetDisplayName()) {
                              r.push(h), t = 0;
                              break
                          }
                          if (f[n].replace("\n", "") !== h.GetDisplayName() && t === u.length - 1) {
                              o.push(n), t = 0;
                              break
                          }
                      }
                  this.SetProperty("GetSortControls", r)
              } else {
                  for (var p = o.length - 1; p >= 0; p--) f.splice(o[p], 1);
                  s.push(f)
              }
          }
          return s
      }

      function w(e, t) {
          var n, r = 0,
              i = 0,
              s = t.length,
              o = e.length;
          for (; i < o; i++)
              if (r < s) {
                  n = t[r];
                  if (!this.ExecuteMethod("CanUpdate", n)) {
                      r++;
                      continue
                  }
                  this.ExecuteMethod("SetFormattedValue", n, e[i]), r++
              }
      }
      var e = SiebelJS.Dependency("SiebelApp.Constants"),
          t = e.get("SWE_EXTN_CANCEL_ORIG_OP"),
          n = e.get("SWE_EXTN_RETVAL"),
          r = consts.get("SWE_EXTN_STOP_PROP_OP");
      return SiebelJS.Extend(s, SiebelAppFacade.PresentationModel), s.prototype.Setup = function(t) {
          var n, r, i, s;
          SiebelAppFacade.ListPresentationModel.superclass.Setup.call(this, t), t && (n = t.GetChildByType(e.get("SWE_APPLET_PM_PS"))), n && (r = n.GetProperty(e.get("SWE_LDC_VIS_MODE_LIST")), r && (s = [], CCFMiscUtil_StringToArray(r, s), this.AddProperty(e.get("SWE_LDC_VIS_MODE_LIST"), s)), r = n.GetProperty(e.get("SWE_VIS_MODE_LIST")), r && (i = [], CCFMiscUtil_StringToArray(r, i), this.AddProperty(e.get("SWE_VIS_MODE_LIST"), i)), r = n.GetProperty(e.get("SWE_VIS_MODE_DEFAULT")), r && this.AddProperty(e.get("SWE_VIS_MODE_DEFAULT"), r), r = n.GetProperty(e.get("SWE_VIS_MODE_FLIP_METHOD")), r && this.AddProperty(e.get("SWE_VIS_MODE_FLIP_METHOD"), r), this.HandleResponsePS(n))
      }, s.prototype.Init = function() {
          SiebelAppFacade.ListPresentationModel.superclass.Init.call(this), this.AddProperty("ListOfColumns", m), this.AddProperty("TotalSet", !0), this.AddProperty("MultiSelectMode", !1), this.AddProperty("InQueryMode", !1), this.AddProperty("LandMarkTitle", this.Get("GetAppletLabel") + " " + SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_LIST_APPLET")), this.AddProperty("SortRecord", !1), this.AddProperty("ListDetail", d), this.AddProperty(consts.get("ENABLE_MULTISELECT_COLUMN"), !1), this.AddProperty("ResetScroll", !0), this.AddProperty("ForceFocusOnControl", !1), this.AddProperty("IsDataCleared", !0), this.AddProperty("CloseCtrlPopupInProgress", !1), this.AttachEventHandler(e.get("PHYEVENT_HIER_COLLAPSE"), y, {
              core: !0
          }), this.AttachEventHandler(e.get("PHYEVENT_HIER_EXPAND"), g, {
              core: !0
          }), this.AttachEventHandler(e.get("PHYEVENT_SELECT_ROW"), "HandleRowSelect", {
              core: !0
          }), this.AttachEventHandler(e.get("PHYEVENT_VSCROLL_LIST"), "OnVerticalScroll", {
              core: !0
          }), this.AttachEventHandler(e.get("PHYEVENT_SORT_LIST"), "OnClickSort", {
              core: !0
          }), this.AttachEventHandler(e.get("PHYEVENT_COLUMN_BLUR"), "OnCtrlBlur", {
              core: !0
          }), this.AttachEventHandler(e.get("PHYEVENT_CONTROL_BLUR"), function() {
              return arguments[arguments.length - 1][t] = !0, arguments[arguments.length - 1][r] = !0, this.ExecuteMethod("OnCtrlBlur", this.Get("GetSelection"), arguments[0], arguments[1])
          }), this.AttachEventHandler(e.get("PHYEVENT_COLUMN_FOCUS"), "OnCtrlFocus", {
              core: !0
          }), this.AttachEventHandler(e.get("PHYEVENT_CONTROL_FOCUS"), function() {
              return arguments[arguments.length - 1][t] = !0, arguments[arguments.length - 1][r] = !0, this.ExecuteMethod("OnCtrlFocus", this.Get("GetSelection"), arguments[0], arguments[1])
          }), this.AttachEventHandler(e.get("PHYEVENT_DRILLDOWN_LIST"), "OnDrillDown", {
              core: !0
          }), this.AttachEventHandler(e.get("PHYEVENT_COL_ORDER_CHANGE"), "UpdateColIndex", {
              core: !0
          }), this.AttachEventHandler(e.get("PHYEVENT_COL_WIDTH_CHANGE"), "UpdateColWidth", {
              core: !0
          }), this.AttachEventHandler(consts.get("PHYEVENT_RECORD_DROP"), "HandleDragNDrop", {
              core: !0
          }), this.AttachEventHandler(consts.get("PHYEVENT_RECORD_DROP_GENERIC"), "HandleDragNDropGeneric", {
              core: !0
          }), this.AttachPSHandler(consts.get("SWE_PROP_SHOW_SEL"), function(e) {
              h.call(this, e)
          }), this.AttachPSHandler(consts.get("SWE_PROP_ENABLE_SEL"), function(e) {
              h.call(this, e)
          }), this.AddMethod("HandleDragNDrop", function(e) {
              var t = b.call(this, e),
                  n = this.Get("GetSortControls"),
                  r = t.length;
              if (r > 0)
                  for (var i = 0; i < r; i++) this.ExecuteMethod("CanInvokeMethod", "NewRecord") && (this.ExecuteMethod("InvokeMethod", "NewRecord"), w.call(this, t[i], n), this.ExecuteMethod("CanInvokeMethod", "WriteRecord") && this.ExecuteMethod("InvokeMethod", "WriteRecord"));
              this.SetProperty("GetSortControls", [])
          }), this.AddMethod("HandleDragNDropGeneric", function(e) {
              return e && this.ExecuteMethod("CanInvokeMethod", e) ? this.ExecuteMethod("InvokeMethod", e) : !0
          }), this.AddMethod("GetDragInfo", function(e) {
              var t = [],
                  n = this.Get("GetRawRecordSet");
              t.appletName = this.Get("GetName"), t.rowId = "";
              if (e && e.length > 0) {
                  var r = e.length;
                  for (var i = 0; i < r; i++) t.rowId += n[e[i]].Id, i < r - 1 && (t.rowId += ", ")
              } else t.rowId = n[this.Get("GetSelection")].Id;
              return t
          }), this.AddMethod("ResetScrollpos", function() {}), this.AddMethod("HandleControlFocus", o, {
              sequence: !1,
              scope: this
          }), this.AddMethod("SetFocustoFirstCell", function() {}), this.AddMethod("ResetCtrlValue", function(e, n, r, i) {
              var s = this.Get("GetSelection"),
                  o = this.GetStateUIMap().RecordSet ? this.GetStateUIMap().RecordSet[s] : {},
                  u = e.GetFieldName();
              if (o && o.hasOwnProperty(u) && (n === !1 || o[u] !== r)) {
                  var a = {},
                      f = this.Get("IsPure") && !this.ExecuteMethod("IsPrivateField", e.GetName()) ? o[u] : this.ExecuteMethod("GetFormattedFieldValue", e);
                  !this.Get("IsPure") && e.GetRadioGroupPropSet() && e.GetRadioGroupPropSet().GetChildCount() && (f = r), a.name = u, a.index = s, a.stateValue = null, e.IsClientCtrl() ? f = r : this.ExecuteMethod("UpdateUIState", "CellValue", a), this.ExecuteMethod("CellChange", a.index, e.GetName(), f)
              }
              i[t] = !0
          }, {
              sequence: !0,
              scope: this
          }), this.AttachNotificationHandler(consts.get("SWE_PROP_BC_NOTI_GENERIC"), function(e) {
              var t = this.Get("GetActiveControl");
              if (e.GetProperty("type") === "ClosePopup" && t) {
                  var n = this.Get("IsInQueryMode") ? this.ExecuteMethod("GetFieldValue", t) : this.ExecuteMethod("GetFormattedFieldValue", t);
                  this.ExecuteMethod("CellChange", this.Get("GetSelection"), t.GetName(), n)
              }
          }), this.AttachNotificationHandler(consts.get("SWE_NOTIFY_TOTALS_CHANGED"), function(e) {
              this.SetProperty("TotalSet", !0)
          }), this.AttachNotificationHandler(consts.get("SWE_PROP_BC_NOTI_SELECTION_MODE_CHANGE"), function(e) {
              this.SetProperty("MultiSelectMode", e.GetProperty(consts.get("SWE_PROP_NOTI_MULTISEL")) === "true")
          }), this.AttachNotificationHandler(consts.get("SWE_PROP_BC_NOTI_STATE_CHANGED"), function(e) {
              e.GetProperty("state") === "ms" && this.SetProperty("MultiSelectMode", e.GetProperty("value") === "1")
          }), this.AttachNotificationHandler(consts.get("SWE_PROP_BC_NOTI_EXECUTE"), function(e) {
              this.ExecuteMethod("ResetScrollpos")
          }), this.AddMethod("BeginQueryState", function() {
              this.SetProperty("InQueryMode", !0)
          }, {
              sequence: !1,
              scope: this
          }), this.AddMethod("EndQueryState", function() {
              this.SetProperty("InQueryMode", !1)
          }, {
              sequence: !1,
              scope: this
          }), this.AttachPostProxyExecuteBinding("SortAscending", function(e, t, n) {
              p.call(this, t, n, "ascending")
          }), this.AttachPostProxyExecuteBinding("SortDescending", function(e, t, n) {
              p.call(this, t, n, "descending")
          }), this.AddMethod("OnScrollComplete", function(e) {}), this.AttachPostProxyExecuteBinding("ScrollPrevData", u), this.AttachPostProxyExecuteBinding("ScrollNextData", u), this.AttachPreProxyExecuteBinding("ALL", function(t, n, r) {
              var i = r.GetProperty(e.get("SWE_RPC_PROP_RETURN_STATUS"));
              if (i === e.get("SWE_RPC_PROP_STATUS_COMPLETED")) switch (t) {
                  case "NewRecord":
                  case "CreateRecord":
                  case "UndoQuery":
                  case "UndoRecord":
                  case "ExecuteQuery":
                      this.SetProperty("ColHeader", ""), this.SetProperty("RowHeader", "");
                      break;
                  case "NewQuery":
                  case "RefineQuery":
                      this.SetProperty("ColHeader", "");
                      break;
                  case "GotoNext":
                  case "GotoPrevious":
                  case "GotoPreviousSet":
                  case "GotoNextSet":
                      SiebelApp.S_App.IsListNavSync() === "TRUE" && this.SetProperty("SyncNavigation", !0);
                  case "GotoFirstSet":
                  case "GotoLastSet":
                  case "DeleteRecord":
                  case "CopyRecord":
                      this.SetProperty("RowHeader", "")
              }
              return
          }), this.AddMethod("HandlePreGetUIState", a, {
              sequence: !0,
              scope: this
          }), this.AddMethod("HandleUIStateChange", l, {
              sequence: !0,
              scope: this
          }), this.AddMethod("UpdateUIState", f, {
              sequence: !0,
              scope: this
          })
      }, s.prototype.UpdateModel = function(e) {
          SiebelAppFacade.ListPresentationModel.superclass.UpdateModel.call(this, e), c.call(this, e)
      }, s
  }(), "SiebelAppFacade.ListPresentationModel"
})), typeof SiebelAppFacade.TaskPresentationModel == "undefined" && (SiebelJS.Namespace("SiebelAppFacade.TaskPresentationModel"), define("siebel/taskpmodel", ["siebel/pmodel"], function() {
  return SiebelAppFacade.TaskPresentationModel = function() {
      function s() {
          SiebelAppFacade.TaskPresentationModel.superclass.constructor.call(this, {
              GetName: function() {
                  return "TaskObject"
              }
          })
      }

      function o(e) {
          for (var t = 0, s = e.GetChildCount(); t < s; t++) {
              var o = e.GetChild(t);
              switch (o.GetType()) {
                  case n:
                      this.AddProperty("LocaleInfo", u.call(this, o));
                      break;
                  case r:
                      this.AddProperty("TaskContext", a.call(this, o));
                      break;
                  case i:
                      this.AddProperty("CurrentTask", f.call(this, o)), this.AddProperty("CurrentTaskChapter", l.call(this, o))
              }
          }
      }

      function u(e) {
          if (e.GetType() !== n) return;
          var t = !0,
              r, i, s = {};
          for (var o = 0, u = e.GetPropertyCount(); o < u; o++) t ? (r = e.GetFirstProperty(), t = !1) : r = e.GetNextProperty(), i = e.GetProperty(r), r === "IDS_TASKPANE_CAPTION" ? s.CAPTION = i : r === "IDS_TASKPANE_PROGRESS" ? s.PROGRESS = i : r === "IDS_TASKPANE_GOTOINBOX" && (s.GOTOINBOX = i);
          return s
      }

      function a(t) {
          if (t.GetType() !== r) return;
          var n = [];
          for (var i = 0, s = t.GetChildCount(); i < s; i++) {
              var o = {},
                  u = t.GetChild(i),
                  a = [];
              o = {
                  GrpDispName: u.GetProperty(e.get("TSK_GROUP_DISPLAY_NAME")),
                  grpName: u.GetProperty(e.get("TSK_GROUP_NAME")),
                  goupSeq: u.GetProperty(e.get("TSK_GROUP_SEQUENCE"))
              };
              for (var f = 0, l = u.GetChildCount(); f < l; f++) {
                  var c = {},
                      h = u.GetChild(f);
                  c = {
                      TaskDispName: h.GetProperty(e.get("TSK_TASK_DISPLAY_NAME")),
                      TaskName: h.GetProperty(e.get("TSK_TASK_NAME")),
                      TaskSeq: h.GetProperty(e.get("TSK_SEQUENCE_NUMBER")),
                      ItemType: h.GetProperty(e.get("TSK_ITEM_TYPE"))
                  }, a.push(c)
              }
              o.TASKLIST = a, n.push(o)
          }
          return n
      }

      function f(t) {
          return {
              TACS: t.GetProperty(e.get("TSK_ACTIVE_CHAPTER_SEQ")),
              TASS: t.GetProperty(e.get("TSK_ACTIVE_STEP_SEQ")),
              TAT: t.GetProperty(e.get("TSK_ACTIVE_TASK")),
              TaskDispName: t.GetProperty(e.get("TSK_TASK_DISPLAY_NAME"))
          }
      }

      function l(t) {
          var n = [];
          for (var r = 0, i = t.GetChildCount(); r < i; r++) {
              var s = t.GetChild(r),
                  o = {
                      CDN: s.GetProperty(e.get("TSK_CHAPTER_DISPLAY_NAME")),
                      CS: s.GetProperty(e.get("TSK_CHAPTER_SEQUENCE"))
                  },
                  u = [];
              for (var a = 0, f = s.GetChildCount(); a < f; a++) {
                  var l = s.GetChild(a);
                  u.push({
                      TSN: l.GetProperty(e.get("TSK_SEQUENCE_NUMBER")),
                      TSDN: l.GetProperty(e.get("TSK_STEP_DISPLAY_NAME")),
                      SN: l.GetProperty(e.get("TSK_STEP_NAME")),
                      TID: l.GetProperty(e.get("TSK_STEP_INSTANCE_ID"))
                  })
              }
              o.STEPS = u, n.push(o)
          }
          return n
      }
      var e = SiebelJS.Dependency("SiebelApp.Constants"),
          t = SiebelJS.Dependency("SiebelApp.Utils"),
          n = e.get("TSK_PST_TYPE_LOCALE"),
          r = e.get("TSK_PST_TYPE_TASKCONTEXT"),
          i = e.get("TSK_PST_TYPE_CURRENTTASK");
      return SiebelJS.Extend(s, SiebelAppFacade.PresentationModel), s.prototype.Init = function() {
          this.AddProperty("GetContainer", "s_TaskUIPane"), this.AddProperty("TaskRefresh", !1), this.AddMethod("InvokeServiceMethod", function(t, n, r) {
              var i = SiebelApp.S_App.GetService(e.get("NAME_TASKUISVC"));
              i && (r = i.InvokeMethod(t, n, !0))
          }), this.AddMethod("OnTaskNavigate", function(t, n) {
              var r = CCFMiscUtil_CreatePropSet(),
                  i = CCFMiscUtil_CreatePropSet();
              r.SetProperty(e.get("SWE_VIEW_ID_STR"), e.get("TASKPANE_VIEWNAME")), r.SetProperty("TaskName", n.key), r.SetProperty("GroupName", n.parent.key), this.ExecuteMethod("InvokeServiceMethod", t, r, i)
          }), this.AttachEventHandler("TaskNavigate", "OnTaskNavigate", {
              core: !0
          }), this.AttachEventHandler(e.get("TASK_PANE_CLOSE"), function() {
              var t = CCFMiscUtil_CreatePropSet(),
                  n = CCFMiscUtil_CreatePropSet();
              t.SetProperty(e.get("SWE_VIEW_ID_STR"), e.get("TASKPANE_VIEWNAME")), this.ExecuteMethod("InvokeServiceMethod", e.get("METH_TOGGLETASKPANE"), t, n), SiebelApp.S_App.UnregisterExtObject("TaskUIPane")
          }, {
              core: !0
          }), this.AttachEventHandler(e.get("TASK_NAVIGATE_INBOX"), function() {
              var t = CCFMiscUtil_CreatePropSet(),
                  n = CCFMiscUtil_CreatePropSet();
              t.SetProperty(e.get("SWE_VIEW_ID_STR"), e.get("TASKPANE_VIEWNAME")), this.ExecuteMethod("InvokeServiceMethod", e.get("METH_GOTOINBOX"), t, n)
          }, {
              core: !0
          }), this.AttachEventHandler("InvokeFastNavigation", function(t) {
              var n = CCFMiscUtil_CreatePropSet(),
                  r = CCFMiscUtil_CreatePropSet();
              n.SetProperty(e.get("SWE_VIEW_ID_STR"), e.get("TASKPANE_VIEWNAME")), n.SetProperty(e.get("PARAM_STEPNAME"), t.SN), n.SetProperty(e.get("PARAM_STEPINSTANCEID"), t.TID), this.ExecuteMethod("InvokeServiceMethod", e.get("METH_FASTNAVIGATE"), n, r)
          })
      }, s.prototype.Setup = function(e) {
          e.SetProperty("SWE_OUI_RENDERER", "TaskPhyRenderer"), SiebelAppFacade.TaskPresentationModel.superclass.Setup.call(this, e), o.call(this, e)
      }, s.prototype.HandleNotify = function(e) {
          this.AddProperty("TaskContext", {}), this.AddProperty("LocaleInfo", {}), this.AddProperty("CurrentTask", {}), this.AddProperty("CurrentTaskChapter", {}), o.call(this, e), this.SetProperty("TaskRefresh", !0)
      }, s
  }(), SiebelAppFacade.TaskPresentationModel
})), typeof SiebelApp.S_App.Playbarapplet == "undefined" && (SiebelJS.Namespace("SiebelApp.S_App.Playbarapplet"), SiebelApp.S_App.Playbarapplet = function() {
  function r() {
      SiebelApp.S_App.Playbarapplet.superclass.constructor.call(this);
      var t = null;
      this.SetPendingApplet = function(e) {
          t = e
      }, this.GetPendingApplet = function() {
          return t
      }, this.ProcessChildrenProps = function(e) {
          r.prototype.ProcessChildrenProps.call(this, e)
      }, this.InvokeMethod = function(t, n, r) {
          var i = !1,
              s = !1,
              o, u = !0,
              a = !1;
          if (this.GetPendingApplet()) {
              t == e.get("METH_NAVIGATENEXT") || t == e.get("METH_NAVIGATEPREV") || t == e.get("METH_FINISHTASK") || t == e.get("METH_SUBMITTASK") || t == e.get("METH_PAUSETASK") ? s = !0 : t == e.get("METH_CANCELTASK") && (i = !0);
              if (s) {
                  !this.GetPendingApplet().SetActiveCtrlValue(), this.GetPendingApplet().HasPendingCommit(null, !1) && (u = this.GetPendingApplet().PostChangesToBC(!1, null, !0));
                  if (!u) return u;
                  a = !0
              } else i && (a = !0)
          }
          return a && this.SetPendingApplet(null), SiebelApp.S_App.Playbarapplet.superclass.InvokeMethod.call(this, t, n, r)
      }, SiebelApp.S_App.ErrorObject.DecorateErrorCapability(this)
  }
  var e = SiebelApp.Constants,
      t = SiebelApp.Utils,
      n = SiebelApp.S_App.Applet;
  return SiebelJS.Extend(r, SiebelApp.S_App.Applet), r.prototype.DoSetAppletActive = function(e, t) {
      return !e && t && !t.DelayPostOnLastActive() && this.GetPendingApplet() && this.GetPendingApplet() !== t && (this.GetPendingApplet().PostChangesToBC(!0, null), this.SetPendingApplet(null)), SiebelApp.S_App.Playbarapplet.superclass.DoSetAppletActive.call(this, e, t)
  }, r.prototype.SetAppletToDelayPost = function(e) {
      this.SetPendingApplet(e)
  }, r.prototype.DelayPostOnLastActive = function() {
      return !0
  }, r
}());
if (typeof SiebelAppFacade.TaskPhyRenderer == "undefined") {
  SiebelJS.Namespace("SiebelAppFacade.TaskPhyRenderer");
  var consts = SiebelJS.Dependency("SiebelApp.Constants");
  define("siebel/taskprenderer", ["siebel/basephyrenderer", "3rdParty/fancytree/dist/jquery.fancytree.min.js"], function() {
      return SiebelAppFacade.TaskPhyRenderer = function() {
          function r(e) {
              SiebelAppFacade.TaskPhyRenderer.superclass.constructor.call(this, e)
          }

          function i() {
              var r = this.GetPM().Get("LocaleInfo");
              if (r) {
                  var i, s;
                  i = $("[id=IDS_TASKPANE_CAPTION]"), s = i.parent(), i.remove(), s.append("<label>" + r.CAPTION + "</label>"), i = $("[id=IDS_TASKPANE_GOTOINBOX ]"), s = i.parent(), i.remove(), $("#s_gotoinbox").attr("href", "javascript:void(0)");
                  if (utils.IsTrue(SiebelApp.S_App.IsAutoOn())) {
                      var o = {};
                      o[e] = "TaskLink", o[t] = consts.get("TASK_PANE_CLOSE"), o[n] = consts.get("TASK_PANE_CLOSE"), $("#s_close").attr(o), o[e] = "TaskLink", o[t] = r.GOTOINBOX, o[n] = r.GOTOINBOX, $("#s_gotoinbox").attr(o)
                  }
                  s.append(r.GOTOINBOX), $("#IDS_TASKPANE_PROGRESS").html(r.PROGRESS)
              }
          }

          function s() {
              var e = this.GetPM().Get("TaskContext");
              if (e && e.length) {
                  var t = a.call(this);
                  if (!t) return;
                  for (var n = 0; n < e.length; n++) u.call(this, e[n], t)
              }
          }

          function o(e, t) {
              var n = SiebelApp.S_App.GetPageURL().split("start.swe")[0] + consts.get("ICON_TSKLINKICON"),
                  r = t.addChildren({
                      title: e.TaskDispName,
                      folder: !1,
                      url: "",
                      icon: n,
                      active: !1,
                      extraClasses: !1,
                      expanded: !0,
                      key: e.TaskName
                  })
          }

          function u(e, t) {
              var n = SiebelApp.S_App.GetPageURL().split("start.swe")[0] + consts.get("ICON_EXPANDICON"),
                  r = t.addChildren({
                      title: e.GrpDispName,
                      folder: !0,
                      icon: n,
                      active: !1,
                      expanded: !0,
                      key: e.grpName,
                      noLink: !0
                  }),
                  i = e.TASKLIST;
              for (var s = 0; s < i.length; s++) o.call(this, i[s], r)
          }

          function a() {
              var e = $("#" + this.GetPM().Get("GetContainer"));
              if (!e.length) return;
              var t = e.fancytree("getRootNode"),
                  n = t.addChildren({
                      title: "TaskPane",
                      key: "TBUI",
                      extraClasses: "fancytree-root-tag",
                      folder: !0,
                      expanded: !0,
                      url: null
                  });
              return n
          }

          function f() {
              var r = $("#" + this.GetPM().Get("GetContainer")),
                  i = utils.IsTrue(SiebelApp.S_App.IsAutoOn()) || !1,
                  s = this;
              r.fancytree({
                  autoCollapse: !0,
                  imagePath: " ",
                  _classNames: {
                      nodeIcon: null
                  },
                  clickFolderMode: 3,
                  minExpandLevel: 1,
                  persist: !1,
                  expandOnAdd: !0,
                  click: function(e, t) {
                      var n = t.node;
                      n.folder === !0 ? n.expanded === !0 ? n.iconed = SiebelApp.S_App.GetPageURL().split("start.swe")[0] + consts.get("ICON_COLLAPSEICON") : n.icon = SiebelApp.S_App.GetPageURL().split("start.swe")[0] + consts.get("ICON_EXPANDICON") : s.GetPM().OnControlEvent("TaskNavigate", "StartTask", n)
                  },
                  create: function(r, s) {
                      if (i) {
                          var o = {};
                          o[e] = "SiebTask", o[t] = s.node.data.title, o[n] = s.node.data.title, $(node.nodeSpan).attr(o)
                      }
                  },
                  renderNode: function(r, s) {
                      var o = s.node;
                      o.extraClasses && $(o.span).addClass(o.extraClasses);
                      if (i) {
                          var u = {};
                          if ($(o.span).hasClass("fancytree-exp-el") || $(o.span).hasClass("fancytree-exp-e")) u[e] = "SiebTask", u[t] = "IconCollapse", u[n] = "IconCollapse", $(".fancytree-expander", o.span).attr(u);
                          else if ($(o.span).hasClass("fancytree-exp-cl") || $(o.span).hasClass("fancytree-exp-c")) u[e] = "SiebTask", u[t] = "IconExpand", u[n] = "IconExpand", $(".fancytree-expander", o.span).attr(u)
                      }
                  }
              })
          }

          function l() {
              var e = this.GetPM().Get("CurrentTask");
              if (e && e.TaskDispName) {
                  var t = a.call(this);
                  if (!t) return;
                  var n = t.addChildren({
                          title: e.TaskDispName,
                          folder: !1,
                          icon: null,
                          active: !1,
                          expanded: !0,
                          key: "",
                          noLink: !0
                      }),
                      r = this.GetPM().Get("CurrentTaskChapter");
                  for (var i = 0; i < r.length; i++) c.call(this, r[i], n)
              }
          }

          function c(e, t) {
              var n = e.STEPS,
                  r;
              n.length > 0 ? r = SiebelApp.S_App.GetPageURL().split("start.swe")[0] + consts.get("ICON_COLLAPSEICON") : r = SiebelApp.S_App.GetPageURL().split("start.swe")[0] + consts.get("ICON_EXPANDICON");
              var i = t.addChildren({
                  title: e.CDN,
                  folder: !0,
                  icon: r,
                  active: !1,
                  expanded: !0,
                  key: "",
                  noLink: !0
              });
              for (var s = 0; s < n.length; s++) h.call(this, n[s], i)
          }

          function h(e, t) {
              var n = SiebelApp.S_App.GetPageURL().split("start.swe")[0] + consts.get("ICON_TSKLINKICON"),
                  r = t.addChildren({
                      title: e.TSDN,
                      folder: !1,
                      url: "",
                      icon: n,
                      active: !1,
                      extraClasses: "siebui-task-step",
                      expanded: !0,
                      key: ""
                  });
              $.data(r.span, "step", e)
          }
          var e = consts.get("SWE_PROP_QTP_OT"),
              t = consts.get("SWE_PROP_QTP_RN"),
              n = consts.get("SWE_PROP_QTP_UN");
          return SiebelJS.Extend(r, SiebelAppFacade.BasePR), r.prototype.Init = function() {
              SiebelAppFacade.TaskPhyRenderer.superclass.Init.call(this), this.AttachPMBinding("TaskRefresh", this.BindData)
          }, r.prototype.ShowUI = function() {
              SiebelAppFacade.TaskPhyRenderer.superclass.ShowUI.call(this), $("#SS_TaskUIPane").addClass(SiebelApp.S_App.GetDirection() ? "siebui-task-pane siebui-rtl-element-right" : "siebui-task-pane"), f.call(this)
          }, r.prototype.BindEvents = function() {
              SiebelAppFacade.TaskPhyRenderer.superclass.BindEvents.call(this), $("[id=s_close]").bind("click", {
                  ctx: this
              }, function(e) {
                  e.data.ctx.GetPM().OnControlEvent(consts.get("TASK_PANE_CLOSE"))
              }), $("[id=s_gotoinbox]").bind("click", {
                  ctx: this
              }, function(e) {
                  e.data.ctx.GetPM().OnControlEvent(consts.get("TASK_NAVIGATE_INBOX"))
              }), $("#s_TaskPane").on("click", ".siebui-task-step", {
                  ctx: this
              }, function(e) {
                  e.data.ctx.GetPM().OnControlEvent("InvokeFastNavigation", $(this).data("step"))
              })
          }, r.prototype.BindData = function() {
              SiebelAppFacade.TaskPhyRenderer.superclass.BindData.call(this);
              try {
                  $("#" + this.GetPM().Get("GetContainer")).fancytree("getRootNode").removeChildren()
              } catch (e) {}
              i.call(this), s.call(this), l.call(this)
          }, r.prototype.Refresh = function() {
              $("#" + this.GetPM().GetContainer()).fancytree("getRootNode").removeChildren();
              return
          }, r
      }(), SiebelAppFacade.TaskPhyRenderer
  })
}
typeof SiebelAppFacade.PhysicalRenderer == "undefined" && (SiebelJS.Namespace("SiebelAppFacade.PhysicalRenderer"), define("siebel/phyrenderer", ["siebel/basephyrenderer", "siebel/htmltmplmgr"], function() {
  return SiebelAppFacade.PhysicalRenderer = function() {
      function F(e) {
          SiebelAppFacade.PhysicalRenderer.superclass.constructor.call(this, e);
          var t = null;
          this.SetFirstControl = function(e) {
              t = e
          }, this.GetFirstControl = function() {
              return t
          };
          var n = !1;
          this.SetIsGridBaseForm = function(e) {
              n = e
          }, this.GetIsGridBaseForm = function() {
              return n
          }, this._EndLife = function() {
              t = null
          }
      }

      function I(e) {
          var t = $("#s_" + this.GetPM().Get("GetFullId") + "_div");
          e ? t.addClass("siebui-commit-pending") : t.removeClass("siebui-commit-pending"), this.CacheState("CommitPending", !!e)
      }

      function q() {
          SiebelApp.S_App.PluginBuilder.ResetPW(this)
      }

      function R() {
          var n = this.GetPM(),
              r = SiebelApp.S_App.GetPopupPM();
          $("div[name='popup']").find("div[name=CurrencyCalc]").remove();
          var i = n.ExecuteMethod("GetCurrencyCalInfo"),
              s = {
                  pickId: i[0],
                  pickName: i[1],
                  pickValue: i[2],
                  dateId: i[3],
                  dateName: i[4],
                  dateValue: i[5],
                  calcId: i[6],
                  calcName: i[7],
                  calcValue: i[8],
                  hideExchDate: i[9],
                  CCodeReadOnly: i[10],
                  eDateReadOnly: i[11],
                  AmountReadOnly: i[12],
                  sourceField: i[13],
                  qtpInfo: i[14],
                  dateformat: i[15],
                  dateFieldName: i[16]
              },
              o = n.Get("GetActiveControl");
          if (!o) {
              var u = n.Get("GetControls");
              for (var a in u)
                  if (u.hasOwnProperty(a) && u[a].GetInputName() === s.sourceField) {
                      o = u[a];
                      break
                  }
          }
          var f = '<div name="CurrencyCalc" class="siebui-popup-currency">',
              l = n.ExecuteMethod("GetFieldDataType", s.dateFieldName),
              c = SiebelApp.S_App.LocaleObject.StringToFormatted(l, s.dateValue, s.dateformat);
          f += '<input type="hidden" autofocus="autofocus"/>', f += '<div id="' + s.pickId + '_cc" class="siebui-popup-input-row">' + '<span class="siebui-popup-label">' + s.pickName + "</span>" + '<input type="text" id="' + s.pickId + '" tabindex="100" aria-label="' + s.pickName + '" class="siebui-ctrl-pick" value="' + s.pickValue + '" ' + (s.CCodeReadOnly ? 'readonly="readonly" ' : "") + "></div>", s.hideExchDate || (f += '<div id="' + s.dateId + '_cc" class="siebui-popup-input-row">' + '<span class="siebui-popup-label">' +
              s.dateName + "</span>" + '<input type="text" id="' + s.dateId + '" tabindex="101" aria-label="' + s.dateName + '" class="siebui-ctrl-date" value="' + c + '" ' + (s.eDateReadOnly ? ' readonly="readonly" ' : "") + "></div>"), f += '<div id="' + s.calcId + '_cc" class="siebui-popup-input-row">' + '<span class="siebui-popup-label">' + s.calcName + "</span>" + '<input type="text" id="' + s.calcId + '" tabindex="102" aria-label="' + s.calcName + '" class="siebui-ctrl-calc" value="' + s.calcValue + '" ' + (s.AmountReadOnly ? 'readonly="readonly" ' : "") + "></div>", f += "</div>", r.Get("state") === t.get("POPUP_STATE_UNLOADED") && r.Setup(), r.SetProperty("isCurrencyOpen", !0), r.ExecuteMethod("OpenPopup", f, 0, 0, !1, !1, !0), r.SetProperty("isCurrencyOpen", !0), $("div[name=popup] ").find("div[name=CurrencyCalc]").parents("div.ui-dialog").children("div.ui-dialog-titlebar").styleHide().end().end().bind("keydown", {
              ctx: this,
              ctrl: o,
              popPM: r
          }, function(e) {
              if (e.keyCode === $.ui.keyCode.ESCAPE && e.data.popPM.Get("isCurrencyOpen")) {
                  var t = e.data.ctx.GetPM(),
                      n = t.Get("activeCurrencyCtrl");
                  n !== "" && $("#" + n).triggerHandler("blur"), e.data.popPM.SetProperty("isCurrencyOpen", !1), t.ExecuteMethod("NotifyClosePopup"), e.data.ctx.SetFocusToControl(e.data.ctrl.GetName(), !0)
              }(e.keyCode === $.ui.keyCode.ESCAPE || e.keyCode === $.ui.keyCode.ENTER) && e.stopPropagation()
          }), $("div[name=CurrencyCalc]").parents("div.ui-dialog-content").removeClass("minWidthContainer"), SiebelAppFacade.ControlBuilder.Pick({
              target: "#" + s.pickId,
              className: "siebui-icon-pick",
              scope: this,
              control: o,
              click: function(e) {
                  s.CCodeReadOnly || this.GetPM().ExecuteMethod("ShowPickPopup")
              }
          }), SiebelAppFacade.ControlBuilder.DatePick({
              target: "#" + s.dateId,
              className: "siebui-icon-date",
              control: o,
              scope: this,
              showPopup: !1,
              click: function(t, n) {
                  if (!s.eDateReadOnly) {
                      this.GetPM().SetProperty("isControlPopupOpen", !0), $.data(this, "innerCtrlElem", {
                          date: n
                      });
                      var r = this;
                      SiebelAppFacade.ControlBuilder.DatePick({
                          target: n,
                          className: "siebui-icon-date",
                          control: t,
                          scope: this,
                          showPopup: !0,
                          yearRange: "c-100:c+100",
                          getISOVal: function() {
                              return e.ToISOFormat($(this.target).val(), !1)
                          },
                          onClose: function(t, n) {
                              $(this).datetimepicker("destroy").focus(), r.GetPM().SetProperty("isControlPopupOpen", !1), $.removeData("innerCtrlElem");
                              if (e.IsISO(consts.get("SWE_CTRL_DATE_PICK"), t)) {
                                  var i = SiebelApp.S_App.LocaleObject.GetStringFromDateTime(t, consts.get("ISO_DATE_FORMAT"), SiebelApp.S_App.LocaleObject.GetDateFormat());
                                  $(this).val(i)
                              } else $(this).val(t)
                          }
                      })
                  }
              }
          }), SiebelAppFacade.ControlBuilder.Calculator({
              target: "#" + s.calcId,
              className: "siebui-icon-calc",
              control: o,
              dc: SiebelApp.S_App.LocaleObject.GetDispCurrencyDecimal(),
              scope: this,
              click: function(e, n) {
                  if (!this.GetPM().ExecuteMethod("CanUpdate", e.GetName())) return;
                  this.GetPM().SetProperty("isControlPopupOpen", !0), $.data(this, "innerCtrlElem", {
                      calc: n
                  }), this.SetControlValue(e, this.GetPM().ExecuteMethod("GetFieldValue", e));
                  var r = this;
                  SiebelAppFacade.DecisionManager.PauseVKeyboard($(n)), SiebelAppFacade.ControlBuilder.Calculator({
                      target: n,
                      className: "siebui-icon-calc",
                      control: e,
                      dc: SiebelApp.S_App.LocaleObject.GetDispCurrencyDecimal(),
                      show: !0,
                      beforeShow: function(e, t) {
                          var n = e,
                              r = $("#" + s.pickId).val();
                          if (r) {
                              var i, o = SiebelApp.S_App.LocaleObject.GetCurrency(r);
                              o = o ? o.m_sSymbol : null, o && (n = n.replace(o, ""))
                          }
                          var u = SiebelApp.S_App.LocaleObject.GetDispCurrencySeparator(),
                              n = n.replace(new RegExp("\\" + u, "ig"), "").trim();
                          $(this).val(n)
                      },
                      close: function(n) {
                          var i = n.replace(/\[/g, "").replace(/\]/g, "");
                          r.SetControlValue(e, i), $(this).parents("body").length && $(this).calculator("destroy").next("img").styleShow().end().focus(), r.GetPM().SetProperty("isControlPopupOpen", !1), $.removeData("innerCtrlElem"), r.GetPM().OnControlEvent(t.get("PHYEVENT_CONTROL_FOCUS"), e), SiebelAppFacade.DecisionManager.ResumeVKeyboard($(this))
                      }
                  })
              }
          }), U.call(this, s.qtpInfo), $("#" + s.pickId).bind("focus", {
              ctx: this,
              ctrl: o
          }, function(e) {
              var n = e.data.ctx.GetPM();
              n.OnControlEvent(t.get("PHYEVENT_CONTROL_FOCUS"), e.data.ctrl, $(this).val()), n.SetProperty("activeCurrencyCtrl", s.pickId)
          }).bind("blur", {
              ctx: this,
              ctrl: o,
              ctrlType: s.pickName
          }, function(e) {
              var t = e.data.ctx.GetPM(),
                  n;
              e.data.ctx.onBlurCurrency(e.data.ctrlType, $(this).val()), t.ExecuteMethod("CurrencyPostChanges"), n = t.ExecuteMethod("GetCurrencyCalInfo"), $("#" + n[6]).val(n[8]), t.SetProperty("activeCurrencyCtrl", "")
          }).bind("keydown", {
              ctx: this,
              ctrl: o,
              readOnly: s.CCodeReadOnly
          }, function(e) {
              e.data.ctx.HandleKeyEvents($(this), e, $(this).val())
          }), $("#" + s.calcId).bind("focus", {
              ctx: this,
              ctrl: o
          }, function(e) {
              var n = e.data.ctx.GetPM();
              n.OnControlEvent(t.get("PHYEVENT_CONTROL_FOCUS"), e.data.ctrl, $(this).val()), n.SetProperty("activeCurrencyCtrl", s.calcId)
          }).bind("blur", {
              ctx: this,
              ctrl: o
          }, function(e) {
              var n = e.data.ctx.GetPM();
              if (n.Get("isControlPopupOpen") === !1) {
                  if (!!$(this).data("inLeaveField")) return;
                  var r = $(this).val(),
                      i = 0;
                  while (isNaN(r.charAt(i))) i++;
                  r = r.substring(i), n.OnControlEvent(t.get("PHYEVENT_CONTROL_BLUR"), e.data.ctrl, r), n.ExecuteMethod("CurrencyPostChanges");
                  var s = n.ExecuteMethod("GetCurrencyCalInfo"),
                      o = $("#" + s[6]);
                  o.val(s[8])
              }
              n.SetProperty("activeCurrencyCtrl", "")
          }).bind("keydown", {
              ctx: this,
              ctrl: o,
              readOnly: s.AmountReadOnly
          }, function(e) {
              $.calculator._showingCalculator || e.data.ctx.HandleKeyEvents($(this), e, $(this).val())
          }), $("#" + s.dateId).bind("focus", {
              ctx: this,
              ctrl: o
          }, function(e) {
              e.data.ctx.GetPM().SetProperty("activeCurrencyCtrl", s.dateId)
          }).bind("blur", {
              ctx: this,
              ctrl: o,
              readOnly: s.eDateReadOnly
          }, function(t) {
              if (!t.data.readOnly) {
                  var n = e.Trim($(this).val()),
                      r = e.ToISOFormat(n, !1) || n;
                  if (e.IsISO(consts.get("SWE_CTRL_DATE_PICK"), r)) {
                      var i = SiebelApp.S_App.LocaleObject.GetStringFromDateTime(r, consts.get("ISO_DATE_FORMAT"), SiebelApp.S_App.LocaleObject.GetDateFormat());
                      $(this).val(i)
                  } else $(this).val(r)
              }
              return t.data.ctx.GetPM().SetProperty("activeCurrencyCtrl", ""), !1
          }).bind("keydown", {
              ctx: this,
              ctrl: o,
              readOnly: s.eDateReadOnly
          }, function(e) {
              e.data.ctx.HandleKeyEvents($(this), e, $(this).val())
          }), $("div.ui-widget-overlay").bind("click", {
              ctx: this,
              ctrl: o,
              popPM: r
          }, function(e) {
              if (e.data.popPM.Get("isCurrencyOpen")) {
                  var t = e.data.ctx.GetPM(),
                      n = t.Get("activeCurrencyCtrl");
                  n !== "" && $("#" + n).triggerHandler("blur"), e.data.popPM.SetProperty("isCurrencyOpen", !1), t.ExecuteMethod("NotifyClosePopup"), e.data.ctx.SetFocusToControl(e.data.ctrl.GetName(), !0)
              }
          });
          var h = this;
          setTimeout(function() {
              var e = $("#" + o.GetInputName() + "_icon") || $("#" + o.GetInputName().replace("_0", "_" + n.Get("GetSelection")) + 0 / 0);
              e.length === 0 && typeof h.GetColumnHelper == "function" && (e = $('[name="' + h.GetColumnHelper().GetModifiedColumnName(o.GetName()) + '"]').next("img"), e.length === 0 && (e = e.end())), $("div[name=popup] ").find("div[name=CurrencyCalc]").parents("div.ui-dialog").position({
                  my: "top",
                  at: "bottom",
                  collision: "flipfit",
                  of: e
              }), setTimeout(function() {
                  $("#" + s.pickId).focus()
              }, 5)
          }, 15)
      }

      function U(e) {
          if (e) {
              var t = e.GetChildCount();
              for (var n = 0; n < t; n++) {
                  var r = e.GetChild(n),
                      i = r.GetProperty(consts.get("SWE_PROP_ID"));
                  $("#" + i).attr({
                      ot: r.GetProperty(consts.get("SWE_PROP_QTP_OT")),
                      rn: r.GetProperty(consts.get("SWE_PROP_QTP_RN")),
                      un: r.GetProperty(consts.get("SWE_PROP_QTP_UN"))
                  })
              }
          }
      }

      function z() {
          var t = this.GetPM(),
              n = t.Get("GetQueryModePrompt", {
                  getDiff: !0
              });
          if (n !== null) {
              var r = t.Get("GetId"),
                  i, s = $("#" + r + "_msg"),
                  o = "<div class='siebui-applet-msg'><span id=" + r + "_msg><span></div>";
              SiebelApp.S_App.IsRwd() && e.IsTrue(t.Get("IsObjResponsive")) ? i = $("#" + t.Get("GetRowCount")) : i = $("#s_" + r + "_rc"), s.length === 0 && (i.parent().prev("td").length ? i.parent().prev("td").append(o) : i.parent().append(o)), n ? (i.addClass("siebui-no-display"), $("#" + r + "_msg").html(n).parent(".siebui-applet-msg").removeClass("siebui-no-display")) : ($("#" + r + "_msg").parent(".siebui-applet-msg").addClass("siebui-no-display"), i.removeClass("siebui-no-display")), i = null, this.CacheState("GetQueryModePrompt", n)
          }
      }

      function W() {
          SiebelApp.S_App.uiStatus.Free();
          var e = SiebelApp.S_App.GetPopupPM();
          $("[name=cancelQuery]").remove();
          var n = $('<div name="cancelQuery"></div>'),
              r = "",
              i = SiebelApp.S_App.LocaleObject,
              s = i.GetLocalString("IDS_CANCELQRY_INITIALTEXT"),
              o = i.GetLocalString("IDS_CANCELQRY_RESPONSETEXT"),
              u = i.GetLocalString("IDS_CANCELQRY_HEADERTEXT"),
              a = i.GetLocalString("IDS_CANCELQRY_BUTTONTEXT");
          r += '<div align ="center" id = "responseTxt_div"><p id="initTxt_CQ"><b>' + s + "</b></p></div><br />";
          var f = '<button id="cancelQry_Ctrl_CQ" class="appletButton" type="button" title="' + a + '" ' + ">" + a + "</button>";
          r += '<div align="center" id = "cancelbtn_div">' + f + "</div>", n.append(r), e.Get("state") === t.get("POPUP_STATE_UNLOADED") && e.Setup(), e.SetProperty("IsCancelQryPopupOpen", !0);
          if (e.Get("state") !== "visible") e.ExecuteMethod("SetPopupVisible", !0), e.SetProperty("content", n);
          else {
              SiebelApp.S_App.uiStatus.Free();
              var l = $("div[name=popup]"),
                  c = l.parents(".ui-dialog").eq(0);
              l.children().styleHide(), l.addClass("minWidthContainer"), l.dialog("open"), l.append(n), c.data("origWidth", c.width()), c.css({
                  width: "auto",
                  height: "auto"
              }), e.Get("isPopupMVGAssoc") && (c.removeClass("siebui-mvg-dialog"), c.find(".ui-dialog-buttonset").styleHide()), l.css({
                  "min-height": "auto"
              }), c.find(".ui-dialog-title").css({
                  visibility: "hidden"
              }), l.dialog("option", "position", {
                  my: "center",
                  at: "center",
                  of: window
              })
          }
          var h = $("#cancelQry_Ctrl_CQ");
          if (h.length !== 0) {
              var p = this;
              h.bind("click", function(n) {
                  var r = '<p id="responseTxt_CQ"><b>' + o + "</b></p>";
                  $("#initTxt_CQ").replaceWith(r), e.OnControlEvent(t.get("PHYEVENT_CANCEL_QRY_POPUP"), n)
              })
          }
      }

      function X() {
          var e = this.GetPM(),
              t = $("#s_" + e.Get("GetFullId") + "_div");
          e.ExecuteMethod("IsMethodDefault", "MaximizeApplet") && e.ExecuteMethod("CanInvokeMethod", "MaximizeApplet") === !1 ? t.removeClass("siebui-applet-minimize").addClass("siebui-applet-maximize") : e.ExecuteMethod("IsMethodDefault", "MinimizeApplet") && e.ExecuteMethod("CanInvokeMethod", "MinimizeApplet") === !1 ? t.removeClass("siebui-applet-maximize").addClass("siebui-applet-minimize") : t.removeClass("siebui-applet-maximize siebui-applet-minimize")
      }

      function V(e, t, n) {
          this.GetPM().Get("IsInQueryMode") && e.GetCaseSensitive() && (n == 1 && $(t).val() === "" ? ($(t).val(SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_CSQ_WATERMARK")), $(t).addClass("siebui-watermark-text")) : n == 0 && $(t).val() === SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_CSQ_WATERMARK") && ($(t).val(""), $(t).removeClass("siebui-watermark-text")))
      }

      function J(e) {
          if (e && e.length) {
              var t = "#SWEBottomHidden" + this.GetPM().Get("GetId"),
                  n = e.find("[tabindex]").not(t);
              for (var r = 0, i = n.length; r < i; r++) {
                  var s = n.eq(r);
                  Number(s.attr("tabindex")) >= 0 && s.attr({
                      "data-seq": s.attr("tabindex"),
                      tabindex: "0"
                  })
              }
              e.on("keydown", "input[type=file][data-seq], button[data-seq], input[type=button][data-seq],div[data-seq],span[data-seq],a[data-seq]", {
                  ctx: this
              }, function(e) {
                  st.call(e.data.ctx, e.target, null, e)
              }), e = n = null
          }
      }

      function K(e) {
          var t = arguments[1] ? arguments[1] : e.GetInputName();
          if ($("#" + t + "_mb").length > 0) return;
          return '<a  id ="' + t + '_mb" ' + 'tabindex ="' + e.GetSeq() + '" ' + 'href="javascript:void(0)" ' + ">" + e.GetDisplayName() + "</a>"
      }

      function Q(e, t, n) {
          var r = this.GetUIWrapper(t).HandleKey(e, n);
          return r === !0
      }

      function G(e, t, n) {
          var r = this.GetUIWrapper(t).HandleKey(e, n);
          return r === !0
      }

      function Y(e, t, n) {
          var r = n.ctrlKey || n.altKey || n.shiftKey && n.keyCode == 16;
          t.GetUIType() == f && !r && e.autocomplete("option", "source").length == 0 && this.GetUIWrapper(t).HandleKey(e, n)
      }

      function Z(e, t, n) {
          var r = !1;
          return n.altKey && (r = tt.call(this, e, t, n)), r
      }

      function et(e, n, i) {
          var s = !1,
              u = this.GetPM();
          switch (n.GetUIType()) {
              case y:
              case L:
              case N:
              case w:
              case E:
              case S:
              case x:
              case T:
              case r:
                  s = !0;
                  break;
              case L:
                  s = u.Get("IsInQueryMode") ? !1 : !0;
                  break;
              case o:
                  i.preventDefault();
                  break;
              case f:
                  it.call(this, e, n, i)
          }
          return (n.GetUIType() === d || n.GetUIType() == f && e.attr("autocomplete")) && this.GetUIWrapper(n).HandleKey(e, i), s ? s : u.OnControlEvent(t.get("PHYEVENT_ENTER_KEY_PRESS"), n)
      }

      function tt(e, n, r) {
          var i = this.GetPM(),
              s = i.Get("isControlPopupOpen");
          return i.OnControlEvent(t.get("PHYEVENT_ESCAPE_KEY_PRESS"), n), i.Get("isControlPopupOpen") !== s
      }

      function nt(e, t, n) {
          return e.attr("type") === "checkbox" ? !0 : !this.GetPM().ExecuteMethod("CanUpdate", t.GetName())
      }

      function rt(e, t, n) {
          return n.data.readOnly ? !1 : ($(e).nextAll("span[id$='_icon']").click(), !0)
      }

      function it(e, t, n) {
          if (t && t.GetUIType() == f && e.attr("autocomplete") && t.IsBoundedPick() && e.autocomplete("widget").not(":hidden").length > 0) {
              var r = e.autocomplete("widget").find(".ui-state-focus");
              r.length && e.val(r.text()), r = null
          }
      }

      function st(e, t, n) {
          if (n.keyCode === $.ui.keyCode.TAB) {
              ht.call(this, n, t), it.call(this, e, t, n);
              var r = $("#s_" + this.GetPM().Get("GetFullId") + "_div"),
                  i = r.find("[data-seq]").not(":hidden,:disabled"),
                  s = i.index($(e)),
                  o = Number($(e).attr("data-seq"));
              if (s === -1 || n.shiftKey && s === 0) return;
              var u = null,
                  a = n.shiftKey ? s - 1 : s + 1,
                  f = n.shiftKey ? 0 : i.length,
                  l = n.shiftKey ? -1 : 1,
                  c = a;
              if (o == 0)
                  for (;;) {
                      if (Number(i.eq(c).attr("data-seq")) === 0) {
                          u = c;
                          break
                      }
                      if (c === f) break;
                      c += l
                  }
              if (u === null) {
                  var h = null,
                      p = null,
                      d = function(e, t) {
                          return e > t
                      },
                      v = function(e, t) {
                          return e < t
                      },
                      m = n.shiftKey ? v : d,
                      g;
                  for (c = 0, g = i.length; c < g; c++)
                      if (c !== s) {
                          var y = Number(i.eq(c).attr("data-seq"));
                          if (!h && m(y, o) || h && m(y, o) && m(h, y)) h = y, p = c
                      } p && (u = p)
              }
              if (u !== null) {
                  i.eq(u).focus(), n.preventDefault();
                  var b = $(e).data("ui-autocomplete");
                  b && b.menu.active && (b.menu.active = null)
              } else ut.call(this, n), n.preventDefault()
          }
      }

      function ot(e) {
          var t = $("#s_" + this.GetPM().Get("GetFullId") + "_div"),
              n = t.find("[data-seq]").not(":hidden,:disabled"),
              r = n.length,
              i = -1,
              s = -1;
          for (var o = r; o >= 0; o--) {
              var u = Number(n.eq(o).attr("data-seq"));
              i < u && (i = u, s = o)
          }
          n.eq(s).focus()
      }

      function ut(e) {
          var t = $(e.target),
              n = "SWEBottomHidden" + this.GetPM().Get("GetId"),
              r = $("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, *[tabindex], *[contenteditable]").not(":hidden").add("a#" + n).not("[tabindex=-1]"),
              i = r.length;
          lastindex = r.index($("#" + n)), lastindex + 1 === i ? r.eq(0).focus() : r.eq(lastindex + 1).focus()
      }

      function at() {
          if (this.GetPM().Get("isControlPopupOpen") === !1) {
              var e = this.GetPM().Get("GetActiveControl");
              if (e) {
                  var t = $($('input[name="' + e.GetInputName() + '"]')[0] || $("#" + e.GetInputName())[0]);
                  switch (e.GetUIType()) {
                      case f:
                          t.autocomplete("close");
                          break;
                      case p:
                      case h:
                      case v:
                          t.datetimepicker("hide");
                          break;
                      case d:
                          t.calculator("hide");
                          break;
                      case m:
                          var n = $.data(this, "innerCtrlElem");
                          if (n && n.hasOwnProperty("calc")) {
                              var r = $(n.calc);
                              r && r.size() > 0 && r.calculator("hide")
                          } else if (n.hasOwnProperty("date")) {
                              var i = $(n.date);
                              i && i.size() > 0 && i.datetimepicker("hide")
                          }
                  }
              }
          }
      }

      function ft(t, n) {
          var i = this.GetPM(),
              s = t.GetName(),
              o = t.GetFieldName(),
              u = i.Get("IsInQueryMode"),
              a = i.Get("IsPure"),
              f = i.ExecuteMethod("IsPrivateField", s);
          (!e.IsEmpty(o) || f || !a) && t.GetUIType() !== r && this.SetControlValue(t, i.ExecuteMethod("GetUIFieldValue", t, n), n)
      }

      function lt(t, n, r, i) {
          var s = i.GetScriptProperty("Visible"),
              o = n.attr("name"),
              u, a = n.nextAll("div#" + o + "_IPEField");
          t ? (u = a.text(), a.styleHide(), e.DecideVisibility(n.nextAll("img#" + o + "_icon").add(n), s), n.val(u)) : (u = n.val(), e.DecideVisibility(a, s), n.nextAll("img#" + o + "_icon").styleHide(), n.styleHide(), a.children().val(u)), r !== !0 && n.focus(), a = null
      }

      function ct(e) {
          var t = this.GetPM(),
              n = t.Get("GetControls"),
              r;
          for (var i in n)
              if (n[i].GetInputName() === e) {
                  r = n[i];
                  break
              } return n = null, r
      }

      function ht(e, t) {
          if (this.GetPM()) {
              var n = this.GetPM(),
                  r, i = $("#s_" + this.GetPM().Get("GetFullId") + "_div").find("div[id$='_IPEField']").filter(":hidden"),
                  s = i.prevAll("input.siebui-input-popup").eq(0);
              if (i.length && e && e.keyCode === $.ui.keyCode.TAB || s.length && document.activeElement !== s[0]) r = SiebelApp.S_App.LookupStringCache(s.GetName()), t = t || ct.call(this, r), lt.call(this, !1, s, !0, t)
          }
      }

      function pt(e, t) {
          var n = $("#s_" + this.GetPM().Get("GetFullId") + "_div");
          e ? n.addClass("Selected siebui-active").removeClass("NotSelected siebui-nonactive") : n.removeClass("Selected siebui-active").addClass("NotSelected siebui-nonactive")
      }

      function dt(e) {
          e = typeof e == "undefined" ? !1 : e;
          var t = $("#s_" + this.GetPM().Get("GetFullId") + "_div"),
              n = null;
          e ? t.addClass("siebui-active-el").data("accessible-el", !0) : (n = t.find("#a_" + this.GetPM().Get("GetId")), n.length && t.data("accessible-el") && t.removeData("accessible-el").removeAttr("tabindex"), t = n.length ? n : t), t.attr("tabindex", 0).focus(), t = n = null
      }

      function vt(e) {
          return typeof e.GetInputName == "function"
      }

      function mt() {
          var n = this.GetPM(),
              r = n.Get("GetControls"),
              i = n.Get("IsInQueryMode"),
              s = null,
              o, u, a = !0,
              f = SiebelApp.S_App.IsRwd() && e.IsTrue(n.Get("IsObjResponsive"));
          n.ExecuteMethod("SetUpdateConditionals", !1);
          for (var l in r)
              if (r.hasOwnProperty(l)) {
                  o = r[l], u = o.GetMethodName();
                  if (l === t.get("SWE_POPUP_QUERY_COMBO_BOX") || l === t.get("SWE_POPUP_QUERY_SEARCH_SPEC") || l === t.get("SWE_POPUP_QUERY_EXECUTE") || l === t.get("SWE_QUERY_COMBO_BOX") || l === t.get("SWE_QUERY_SEARCH_SPEC")) {
                      this.GetUIWrapper(o).SetState(consts.get("ENABLE"), !i);
                      continue
                  }
                  if (o.GetUIType() && o.GetUIType()[0] == "J" || f && e.IndexOf(["AddRecords", "DeleteRecords", "DeleteAllRecords"], u) !== -1 && n.ExecuteMethod("CanInvokeMethod", u)) continue;
                  e.IndexOf(["UndoQuery", "ExecuteQuery", "ShowQueryAssistant"], u) !== -1 ? a = i : e.IndexOf(["NewQuery", "ToggleListRowCount"], u) !== -1 ? a = !i : e.IndexOf(["Find", "AddRecords", "AddAllRecords", "DeleteRecords", "DeleteAllRecords"], u) !== -1 ? a = !0 : a = u ? !i || n.ExecuteMethod("CanInvokeMethod", u) : !0, this.GetUIWrapper(o).SetState(consts.get("SHOW"), a, 0)
              }
      }

      function gt() {
          var e = this.GetPM().Get("GetControls");
          for (var t in e) e.hasOwnProperty(t) && this.GetUIWrapper(e[t]).BeginQuery()
      }

      function yt() {
          var e = this.GetPM().Get("GetControls");
          for (var t in e) e.hasOwnProperty(t) && this.GetUIWrapper(e[t]).EndQuery()
      }

      function bt() {
          var t = this.GetPM(),
              n = t.Get("GetRowCounter", {
                  getDiff: !0
              });
          if (n) {
              var r;
              SiebelApp.S_App.IsRwd() && e.IsTrue(t.Get("IsObjResponsive")) ? r = $("#" + t.Get("GetRowCount")) : r = $("#s_" + t.Get("GetId") + "_rc"), r.addClass("siebui-row-counter").text(n), e.IsTrue(SiebelApp.S_App.IsAutoOn()) && r.attr(consts.get("SWE_PROP_QTP_OT"), consts.get("SWE_CTRL_LABEL")).attr(consts.get("SWE_PROP_QTP_RN"), consts.get("SWE_ROW_COUNTER_NO_RECORDS")).attr(consts.get("SWE_PROP_QTP_UN"), n), this.CacheState("GetRowCounter", {
                  stateValue: n
              })
          }
      }
      var e = SiebelJS.Dependency("SiebelApp.Utils"),
          t = SiebelJS.Dependency("SiebelApp.Constants"),
          n = SiebelJS.Dependency("SiebelAppFacade.HTMLTemplateManager"),
          r = t.get("SWE_PST_BUTTON_CTRL"),
          i = t.get("SWE_CTRL_DETAIL"),
          s = t.get("SWE_CTRL_MVG"),
          o = t.get("SWE_CTRL_PICK"),
          u = t.get("SWE_CTRL_RADIO"),
          a = t.get("SWE_CTRL_CHECKBOX"),
          f = t.get("SWE_CTRL_COMBOBOX"),
          l = t.get("SWE_CTRL_CHART"),
          c = t.get("SWE_CTRL_PLAINTEXT"),
          h = t.get("SWE_CTRL_DATE_TIME_PICK"),
          p = t.get("SWE_CTRL_DATE_PICK"),
          d = t.get("SWE_CTRL_CALC"),
          v = t.get("SWE_CTRL_DATE_TZ_PICK"),
          m = t.get("SWE_CTRL_CURRENCY_CALC"),
          g = t.get("SWE_CTRL_TEXT"),
          y = t.get("SWE_CTRL_TEXTAREA"),
          b = t.get("SWE_CTRL_PWD"),
          w = t.get("SWE_CTRL_RTCEMBEDDED"),
          E = t.get("SWE_CTRL_RTCEMBEDDEDTEXTONLY"),
          S = t.get("SWE_CTRL_RTCEMBEDDEDLINKFIELD"),
          x = t.get("SWE_CTRL_RTCPOPUP"),
          T = t.get("SWE_CTRL_RTCIO"),
          N = t.get("SWE_CTRL_INKDATA"),
          C = t.get("SWE_CTRL_LINK"),
          k = t.get("SWE_CTRL_LABEL"),
          L = t.get("SWE_CTRL_URL"),
          A = t.get("SWE_CTRL_MAILTO"),
          O = /(About Record Applet\w*)|(About SRF Applet\w*)|(About Siebel Applet\w*)|(About View Applet\w*)|(Record Count Applet\w*)|(Technical Support Applet\w*)/,
          M = t.get("SWE_CTRL_EFFDAT"),
          _ = t.get("SWE_CTRL_IMAGECONTROL"),
          D = t.get("SWE_CTRL_FILE"),
          P = t.get("SWE_PST_COL"),
          H = t.get("SWE_PST_APPLET_MODE_QUERY"),
          B = t.get("SWE_PST_APPLET_MODE_EDIT"),
          j = t.get("SWE_PST_APPLET_MODE_NEW");
      return SiebelJS.Extend(F, SiebelAppFacade.BasePR), F.prototype.Init = function() {
          SiebelAppFacade.PhysicalRenderer.superclass.Init.call(this), this.AttachPMBinding("RemoveControls", q), this.AttachPMBinding("UpdateQuickPickInfo", this.UpdatePick), this.AttachPMBinding("UpdateAppletMessage", z), this.AttachPMBinding("UpdateCurrencyCalcInfo", R), this.AttachPMBinding("UpdateConditionals", mt), this.AttachPMBinding("ProcessCancelQueryPopup", W), this.AttachPMBinding("FocusOnApplet", dt), this.AttachPMBinding("HandleCtrlDefChange", this.RefreshControl), this.AttachPMBinding("SetCanInvokeState", X), this.AttachPMBinding("BeginQueryState", gt), this.AttachPMBinding("EndQueryState", yt), this.AttachPMBinding("UpdateRowCounter", bt), this.AttachPMBinding("ShowPopup", this.ShowPopup), this.AttachPMBinding("isControlPopupOpen", at), this.AttachPMBinding("MaskLeaveField", this.MaskLeaveField), this.AttachPMBinding("ShowSelection", this.ShowSelection), this.AttachPMBinding("ResetAppletState", this.ResetRendererState), this.AttachPMBinding("RefreshData", this.BindData), this.AttachPMBinding("FieldChange", this.SetControlValue), this.AttachPMBinding("UpdateStateChange", this.UpdateUIControls), this.AttachPMBinding("InvokeStateChange", this.UpdateUIButtons), this.AttachPMBinding("GetPhysicalControlValue", this.GetPhysicalControlValue), this.AttachPMBinding("SetFocusToCtrl", this.SetFocusToControl), this.AttachPMBinding("FocusFirstControl", this.FocusFirstControl), this.AttachPMBinding("SetHighlightState", pt), this.AttachPMBinding("UpdateUI", function() {
              this.GetPM().Get("UpdateUI") && this.ShowSelection()
          }), this.AttachPMBinding("OnCommitStateChange", I);
          var e = SiebelApp.S_App.PluginBuilder.GetHoByName("ResponsiveFieldHO");
          e && e.SetUp(this, $("#s_" + this.GetPM().Get("GetFullId") + "_div"))
      }, F.prototype.RefreshControl = function(e) {
          var t = $("#" + e.GetInputName())[0] || $("[name=" + e.GetInputName() + "]");
          t.length > 0 && (t.nextAll().remove(), this.GetUIWrapper(e, !0), this.ShowUIControl(e), this.BindControlEvents(e), this.EnableControl(e, this.GetPM().ExecuteMethod("CanUpdate", e.GetName())), ft.call(this, e))
      }, F.prototype.EndLife = function() {
          var e = this.GetPM(),
              t = e.Get("GetControls");
          for (var n in t) {
              var r = t[n];
              if (r.GetUIType() === w) {
                  var i = CKEDITOR.instances[r.GetInputName()];
                  if (i) {
                      var s = this.GetUIWrapper(r).GetEl();
                      s && !s.data("pendingAction") && i.destroy(!0)
                  }
              }
          }
          $("#s_" + e.Get("GetFullId") + "_div").off("click click.drilldown"), this._EndLife(), SiebelAppFacade.PhysicalRenderer.superclass.EndLife.call(this)
      }, F.prototype.ResetRendererState = function() {}, F.prototype.UpdatePick = function() {
          var e = arguments[arguments.length - 1],
              t = this.GetPM().Get("GetActiveControl");
          if (!t) return;
          this.GetUIWrapper(t).UpdatePickList(e), delete this.inProgress
      }, F.prototype.onBlurCurrency = function(e, t) {
          var n = this.GetPM().ExecuteMethod("GetCurrencyCalInfo"),
              r;
          t = t.toUpperCase();
          if (e === "Currency Code") {
              r = n[0];
              var i = SiebelApp.S_App.LocaleObject.GetCurrency(t);
              i ? $("#" + r).val(t) : $("#" + r).val(n[2])
          }
      }, F.prototype.ShowUI = function() {
          SiebelAppFacade.PhysicalRenderer.superclass.ShowUI.call(this);
          var n = this.GetPM(),
              r = n.Get(t.get("SWE_VIS_MODE_LIST")),
              i = n.Get(t.get("SWE_LDC_VIS_MODE_LIST")),
              s = r ? r.length : 0,
              o = i ? i.length : 0,
              u = n.Get("GetFullId"),
              a = n.Get("GetPlaceholder"),
              f, l, c = n.Get(t.get("SWE_VIS_MODE_DEFAULT")),
              h = "<div align='center' id = 's_div_" + a + "_VisualModes" + "' " + "class = " + "'" + "siebui-viz-buttonbar AppletButtons" + "'" + ">";
          n.AddProperty("IsTaggedApplet", O.test(n.Get("GetName"))), X.call(this), this.CacheState("Init");
          var p = $("#s_" + u + "_div");
          p.addClass(" siebui-applet siebui-form "), p.find(".AppletTitle").eq(0).removeClass("AppletTitle").addClass(" siebui-applet-title "), p.find("table[data-siebel-form-table='true']").length > 0 && (this.SetIsGridBaseForm(!0), n.SetProperty("GridFormContent", !0)), e.IsTrue(SiebelApp.S_App.GetAccessibilityEnhanced()) && p.attr({
              role: "region",
              title: n.Get("LandMarkTitle")
          });
          var d = n.Get("GetControls");
          for (var v in d) d.hasOwnProperty(v) && this.ShowUIControl(d[v]);
          d = null, this.InjectAppletQTPInfo(p), this.ShowCollapseExpand();
          if (s > 0 && o > 0 && s === o) {
              var m = n.Get("GetAppletLabel");
              m !== "" && (m += ":");
              for (var g = 0; g < s; g++) {
                  var y = r[g],
                      b = i[g],
                      w = m + b;
                  y !== c ? l = "siebui-ctrl-btn appletButton" : l = "siebui-ctrl-btn appletButtonDis", $("#" + a + "_" + y + "_btn").length === 0 && (f = '<button id="' + a + "_" + y + "_btn" + '" ' + "class='" + l + "' " + "aria-label='" + w + "' " + (l === "siebui-ctrl-btn appletButton" ? " " : ' disabled="disabled" ') + 'type="button" ' + 'title="' + w + '" ', e.IsTrue(SiebelApp.S_App.IsAutoOn()) && (f += consts.get("SWE_PROP_QTP_OT") + "='" + consts.get("SWE_PST_BUTTON_CTRL") + "' " + consts.get("SWE_PROP_QTP_RN") + "='" + y + "' " + consts.get("SWE_PROP_QTP_UN") + "='" + b + "'"), f += ">" + b + "</button>", h += '<div align="center" id = "s_div_' + a + "_" + y + '" ' + "class='" + "siebui-viz-button-" + y.toLowerCase() + "' " + ">" + f + "</div>")
              }
              if (f) {
                  h += "</div>";
                  var E = p.find(".siebui-vismode-buttonbar").eq(0);
                  if (E.length > 0) E.empty(), E.append(h);
                  else {
                      var S = SiebelApp.S_App.IsRwd() ? $("#" + n.Get("GetRowCount")) : $("#s_" + n.Get("GetId") + "_rc");
                      S.parent().prev("td").length ? S.parent().prev("td").append(h) : S.parent().prepend(h), S = null
                  }
                  E = null
              }
          }
          this.GetIsGridBaseForm() === !0 ? J.call(this, p) : $("#SWEBottomHidden" + n.Get("GetId")).attr("tabindex", "-1"), SiebelAppFacade.LegacyCssSupport.addLegacyClass($("#" + u)), p.find("span >img:first-child").each(function() {
              var e = $(this),
                  t = e.attr("alt") || e.attr("title");
              t ? e.parent().attr("title", t) : !1
          }), p = null, n.SetProperty("ShowUI", !0)
      }, F.prototype.ShowUIControl = function(t) {
          var n = this.GetPM(),
              r = n.ExecuteMethod("IsRequired", t.GetName()),
              i = t.GetUIType(),
              s = !1,
              o = null;
          o = this.GetUIWrapper(t), o.ShowUI(), n.Get("IsInQueryMode") && o.BeginQuery(), s = i === L || i === E || o.constructor.name === "BasePW";
          var u;
          if (s || r) {
              var a = arguments[1] ? arguments[1] : t.GetInputName(),
                  f = this.GetIsGridBaseForm() === !0 ? t.GetSeq() : 0;
              u = $('[name="' + a + '"]')[0] || $("#" + a)[0];
              if (!u) return;
              u = $(u)
          }
          if (r) {
              var l = u.attr("aria-labelledby") || "";
              if (l) {
                  l = l.split(" ", 1);
                  var c = SiebelApp.S_App.GetRequiredIndicator(),
                      h = l[0].replace("/", "\\/"),
                      p = n.Get("GetFullId");
                  $("#" + p).children().find("#" + h).parent().append(c), u.attr("aria-required", "true"), c = h = p = null
              }
              l = null
          }
          switch (t.GetUIType()) {
              case L:
                  t.GetName() === "BookmarkImage" && n.GetPMName() === "Bookmark URL Popup Applet (SWE)_PM" && (u.remove(), $($("table.FormSection")[0]).remove());
                  break;
              case E:
                  var d = u.siblings(".siebui-email-rtc-stripbtn").find(".siebui-email-rtc-stripbtn-link");
                  if (d.length > 0) {
                      var v = SiebelApp.S_App.LocaleObject.GetLocalString("RTCStripHTML");
                      d.attr("alt", v).attr("title", v)
                  }
                  if (!SiebelApp.S_App.IsRwd() || !e.IsTrue(n.Get("IsObjResponsive"))) {
                      u.text("");
                      var m = u.next("textarea");
                      m.length > 0 && (m.height(t.GetHeight()).width(t.GetWidth()).attr("name", t.GetInputName()).attr("aria-labelledby", t.GetFieldName().replace(/\s+/g, "") + "_Label").attr("aria-label", t.GetDisplayName()).attr("maxlength", t.GetMaxSize() || 256).attr("tabindex", f).addClass("siebui-align-" + t.GetJustification()), this.InjectAppletQTPInfo(m));
                      break
                  };
              default:
                  o.constructor.name === "BasePW" && (u.attr("maxlength", t.GetMaxSize() || 256).attr("tabindex", f).addClass("siebui-align-" + t.GetJustification()), this.InjectQTPInfo(u, t))
          }
          o = u = null
      }, F.prototype.ShowCollapseExpand = function() {
          var t = this.GetPM(),
              n = t.Get("defaultAppletDisplayMode");
          if (n) {
              var r = t.Get("GetAppletLabel");
              r !== "" && (r += ":");
              var i, s = SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_APPLET_EXPAND"),
                  o = r + s,
                  u = e.IsTrue(SiebelApp.S_App.IsAutoOn()),
                  a = "#s_" + t.Get("GetFullId") + "_div";
              i = "<span class='siebui-button-secondary siebui-btn-icon-expanded'><a href='javascript:void()' role='link' tabindex='0' aria-label='" + o + "' ", u && (i += consts.get("SWE_PROP_QTP_OT") + "='" + consts.get("SWE_CTRL_LINK") + "' " + consts.get("SWE_PROP_QTP_RN") + "='" + s + "' " + consts.get("SWE_PROP_QTP_UN") + "='" + s + "'"), i += "></a></span>", o = "", s = SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_APPLET_COLLAPSE"), o = r + s, i += "<span class='siebui-button-secondary siebui-btn-icon-collapsed'><a href='javascript:void()' role='link' tabindex='0' aria-label='" + o + "' ", u && (i += consts.get("SWE_PROP_QTP_OT") + "='" + consts.get("SWE_CTRL_LINK") + "' " + consts.get("SWE_PROP_QTP_RN") + "='" + s + "' " + consts.get("SWE_PROP_QTP_UN") + "='" + s + "'"), i += "></a></span>", $(a).find(".siebui-applet-container.siebui-collapsible").prepend(i).find(".siebui-btn-icon-" + n).styleHide(), n === "collapsed" && $(a).find(".siebui-applet-content.siebui-collapsible").styleHide()
          }
      }, F.prototype.BindEvents = function(n, r) {
          SiebelAppFacade.PhysicalRenderer.superclass.BindEvents.call(this);
          var i = this.GetPM(),
              s = i.Get(t.get("SWE_VIS_MODE_LIST")),
              o = s ? s.length : 0,
              u = i.Get("GetFullId"),
              a = "",
              f = i.Get("GetPlaceholder"),
              l = SiebelApp.S_App.IsRwd() ? SiebelApp.S_App.ViewTarget() : "_sweview";
          if (o > 0)
              for (var c = 0; c < o; c++) $("#" + f + "_" + s[c] + "_btn").length > 0 && $("#" + f + "_" + s[c] + "_btn").bind("click", {
                  ctx: this,
                  visMode: s[c]
              }, function(e) {
                  var n = e.data.ctx,
                      r = n.GetPM(),
                      i = CCFMiscUtil_CreatePropSet(),
                      s = {};
                  s.async = !0;
                  var o = this;
                  s.cb = function() {
                      var t = Array.prototype.slice.call(arguments),
                          n = t ? t[t.length - 1] : "";
                      n === !0 && (r.SetProperty("DefaultVisualMode", e.data.visMode), $(o).attr("disabled", "disabled"), $(o).removeClass("siebui-ctrl-btn appletButton siebui-mode-button-enable"), $(o).addClass("siebui-ctrl-btn appletButtonDis siebui-mode-button-disable"))
                  }, i.SetProperty("VisualMode", e.data.visMode), r.OnControlEvent(t.get("PHYEVENT_INVOKE_CONTROL"), r.Get(t.get("SWE_VIS_MODE_FLIP_METHOD")), i, s)
              });
          if (this.constructor == F) {
              var h = $("#SWEBottomHidden" + i.Get("GetId"));
              h.bind("focus", {
                  ctx: this
              }, function(e) {
                  ot.call(e.data.ctx, e)
              }), h = null
          }
          var p = $("#s_" + i.Get("GetFullId") + "_div");
          p.on("click", ".siebui-applet-header.siebui-collapsible .siebui-button-secondary", {
              ctx: this
          }, function(e) {
              $(this).parents(".siebui-applet-header.siebui-collapsible").find(".siebui-button-secondary").toggle().parents(".siebui-applet:first").find(".siebui-applet-content.siebui-collapsible").slideToggle("fast", "linear"), (e.data.ctx.resize || $.noop).call(e.data.ctx)
          }), p.bind("click", {
              ctx: this
          }, function(e) {
              if (SiebelApp.S_App.GetPopupPM().Get("state") === consts.get("POPUP_STATE_VISIBLE") && $(e.currentTarget).find("div[id^='s_S_A'][id$='_div']").find($(e.target)).length > 0) return;
              var n = e.data.ctx;
              n.IsValidClick(e.srcElement || e.target) && n && n.GetPM() && (n.GetPM().Get("IsActive") || n.GetPM().OnControlEvent(t.get("PHYEVENT_APPLET_FOCUS")), ht.call(n, e))
          }), $("#" + l + " #s_" + i.Get("GetFullId") + "_div").on("click", ".siebui-task-assist-list-item", {
              ctx: this
          }, function(e) {
              var t = this.id,
                  n = SiebelApp.S_App.getExtObject("TaskAssistant");
              if (n) n.ExecuteMethod("LaunchTaskFromView", t);
              else {
                  var r = SiebelApp.S_App.GetService(consts.get("NAME_TASKASSISTUISVC"));
                  if (r) {
                      var i = CCFMiscUtil_CreatePropSet();
                      i.SetProperty("Task Id", t), r.InvokeMethod("LaunchTaskFromView", i)
                  }
              }
          }), p.on("click.drilldown", ".siebui-ctrl-drilldown", {
              ctx: this
          }, function(e) {
              var n = e.data.ctx.GetPM().Get("GetControls"),
                  r = this.id.indexOf("_mb"),
                  i = this.id.substring(0, r);
              for (var s in n)
                  if (n.hasOwnProperty(s)) {
                      var o = n[s];
                      o.GetInputName() === i && e.data.ctx.GetPM().OnControlEvent(t.get("PHYEVENT_DRILLDOWN_FORM"), o)
                  }
          });
          var d = i.ExecuteMethod("GetControlId");
          d && (d = SiebelApp.S_App.IsRwd() && e.IsTrue(i.Get("IsObjResponsive")) ? "#" + d : "[name=" + d + "]", $(d).bind("change", {
              ctx: this
          }, function(e) {
              e.data.ctx.GetPM().OnControlEvent(t.get("PHYEVENT_INVOKE_TOGGLE"), $(this).val())
          })), p = null;
          if (r === !0) return;
          var v = n || i.Get("GetControls");
          for (var m in v) v.hasOwnProperty(m) && this.BindControlEvents(v[m]);
          v = null
      }, F.prototype.InvokeControlMethod = function(e) {
          SiebelApp.S_App.uiStatus.Busy({});
          var n = {};
          n.async = !0, n.cb = function() {
              var e = Array.prototype.slice.call(arguments),
                  n = e ? e[e.length - 1] : "";
              n !== t.get("SWE_RPC_PROP_NEW_LAYOUT") && n !== t.get("SWE_RPC_PROP_REFRESH_LAYOUT") && n !== t.get("SWE_RPC_PROP_NEW_PAGE") && SiebelApp.S_App.uiStatus.Free()
          };
          var r = e.GetMethodPropSet(),
              i = r.Clone();
          this.GetPM().OnControlEvent(t.get("PHYEVENT_INVOKE_CONTROL"), e.GetMethodName(), i, n)
      }, F.prototype.IsValidClick = function(t) {
          return e.IndexOf(["input", "textarea", "button", "a", "img", "select"], t.tagName.toLowerCase()) === -1 || (t.type || "").toLowerCase() === "file"
      }, F.prototype.FormatDDInQueryMode = function(e, t) {
          if (this.GetPM().Get("IsInQueryMode")) {
              var n = this.GetPM().Get("DDUserSelected");
              n && t && t.charAt(0) !== '"' && t.charAt(t.length - 1) !== '"' && n.ctrl === e && n.value === t && (t = '"' + t + '"', this.GetPM().SetProperty("DDUserSelected", undefined))
          }
          return t
      }, F.prototype.BindControlEvents = function(n) {
          switch (n.GetUIType()) {
              case r:
                  if (n.GetMethodName() === "ClearSignature") break;
              case i:
              case f:
              case a:
              case u:
              case A:
              case L:
              case C:
              case k:
              case p:
              case h:
              case v:
              case g:
              case y:
              case b:
              case o:
              case s:
              case M:
              case m:
              case w:
              case l:
              case d:
              case N:
                  this.GetUIWrapper(n).BindEvents();
                  return;
              case D:
                  this.GetUIWrapper(n).BindEvents(!0);
                  return
          }
          var c = $("[name=" + n.GetInputName() + "]"),
              S = this.GetPM();
          if (c.length === 0 && n.GetControlType() === P && e.IndexOf([H, B, j], S.Get("GetMode")) !== -1) {
              var x = n.GetSpanPrefix() + "0";
              c = $("[name=" + x + "]")
          }
          if (c.length === 0 && $("#" + n.GetInputName()).length === 0 && $("#" + (n.GetInputName() + "_Ctrl")).length === 0) return;
          switch (n.GetUIType()) {
              case r:
                  n.GetMethodName() === "ClearSignature" && $("#" + (n.GetInputName() + "_Ctrl")).bind("click", {
                      ctx: this,
                      ctrl: n
                  }, function(e) {
                      var t = e.data.ctx.GetPM().Get("GetControls");
                      for (var n in t)
                          if (t.hasOwnProperty(n) && t[n].GetUIType() === "JInkData") {
                              var r = t[n].GetInputName();
                              $("#siebui-ctrl" + r + "-clearButton").trigger("click"), $("#" + r).attr({
                                  value: ""
                              }), $($("#sign_" + r).find("canvas")).trigger("mouseup")
                          }
                  });
                  break;
              case E:
                  var T = c.siblings(".siebui-email-rtc-stripbtn").find(".siebui-email-rtc-stripbtn-link");
                  T.length > 0 && T.bind("click", function() {
                      var e = SiebelApp.S_App.LocaleObject.GetLocalString("RTCStripHtmlConfirm"),
                          t = confirm(e);
                      if (t == 1) {
                          var r = $("textarea[name='" + n.GetInputName() + "']");
                          r.val(SiebelApp.Utils.stripOUIHTMLTag(r.val())), r.focus()
                      }
                  });
              default:
                  c.bind("keydown", {
                      ctx: this,
                      ctrl: n
                  }, function(e) {
                      var t = $(this).is("input,select,textarea") ? $(this).val() : $(this).text() ? $(this).text().trim() : "";
                      return e.data.ctx.HandleKeyEvents($(this), e, t)
                  }), c.bind("blur", {
                      ctx: this,
                      ctrl: n
                  }, function(e) {
                      var n = e.data.ctx,
                          r = n.GetPM(),
                          i = e.data.ctrl,
                          s = $(this).is("input,select,textarea") ? $(this).val() : $(this).text() ? $(this).text().trim() : "",
                          o = r.ExecuteMethod("CanUpdate", i.GetName()) ? s : r.ExecuteMethod("GetUIFieldValue", i, r.Get("GetSelection"));
                      V.call(n, i, this, !1);
                      var u = r.OnControlEvent(t.get("PHYEVENT_CONTROL_BLUR"), i, o);
                      V.call(n, i, this, !0)
                  }), c.bind("focus", {
                      ctx: this,
                      ctrl: n
                  }, function(e) {
                      V.call(e.data.ctx, e.data.ctrl, this, !1);
                      var n = $(this).is("input,select,textarea") ? $(this).val() : $(this).text() ? $(this).text().trim() : "";
                      e.data.ctx.GetPM().OnControlEvent(t.get("PHYEVENT_CONTROL_FOCUS"), e.data.ctrl, n)
                  })
          }
          c = null
      }, F.prototype.HandleKeyEvents = function(e, n, r) {
          var i = !1,
              s = this.GetPM();
          if (e && e.length === 1 && n) {
              var o = n.data.ctrl;
              if (o) switch (n.which) {
                  case $.ui.keyCode.ENTER:
                      i = et.call(this, e, o, n);
                      break;
                  case $.ui.keyCode.ESCAPE:
                      i = tt.call(this, e, o, n);
                      break;
                  case $.ui.keyCode.UP:
                      i = Q.call(this, e, o, n);
                      break;
                  case $.ui.keyCode.DOWN:
                      i = G.call(this, e, o, n);
                      break;
                  case $.ui.keyCode.LEFT:
                  case $.ui.keyCode.RIGHT:
                      i = Z.call(this, e, o, n);
                      break;
                  case $.ui.keyCode.BACKSPACE:
                      i = nt.call(this, e, o, n), i && n.preventDefault();
                      break;
                  case $.ui.keyCode.TAB:
                      i = st.call(this, e, o, n);
                      break;
                  case t.get("SWE_F2_KEY"):
                      i = rt.call(this, e, o, n);
                      break;
                  default:
                      Y.call(this, e, o, n)
              }
          }
          i && n.stopImmediatePropagation()
      }, F.prototype.BindData = function() {
          SiebelAppFacade.PhysicalRenderer.superclass.BindData.call(this), this.ShowSelection()
      }, F.prototype.ShowSelection = function(e, n) {
          n = arguments && arguments.length ? arguments[1] : null, e = n ? undefined : e;
          if (this.inProgress || e === !0) return !1;
          var r = this.GetPM(),
              i = r.Get("FocusCtrlOnNL"),
              s = [t.get("SWE_QUERY_COMBO_BOX"), t.get("SWE_QUERY_SEARCH_SPEC"), t.get("SWE_POPUP_QUERY_COMBO_BOX"), t.get("SWE_POPUP_QUERY_SEARCH_SPEC")],
              o = s.length,
              u, a, f;
          for (var l = 0; l < o; l++) a = s[l], u = r.ExecuteMethod("GetControl", a), u && (f = $("[name='" + u.GetInputName() + "']").val(), f && r.ExecuteMethod("LeaveField", u, f, !0));
          var c = r.Get("GetControls", {
                  getDiff: !0,
                  stateName: t.get("CTRLVALUE"),
                  index: e,
                  CtrlMap: n
              }),
              h = [],
              p;
          for (var d in c) c.hasOwnProperty(d) && (p = this.GetUIWrapper(c[d]), p && (p.SetElementCaching(!0), h.push(p)), ft.call(this, c[d], e));
          this.UpdateUIControls(e, n), i && (r.Get("GetDefaultFocusOnNew") ? r.ExecuteMethod("SetFocusToCtrl", !0, !0) : r.ExecuteMethod("FocusFirstControl"), r.SetProperty("FocusCtrlOnNL", !1));
          for (var l = 0, v = h.length; l < v; l++) h[l].SetElementCaching(!1)
      }, F.prototype.MaskLeaveField = function(e, t) {
          if (e) {
              var n = this.GetUIWrapper(e);
              if (n) {
                  var r = n.GetEl(this.GetPM().Get("GetSelection"));
                  r && r.length && (t ? r.data("inLeaveField", "true") : r.removeData("inLeaveField"))
              }
          }
      }, F.prototype.IconMapFormatter = function(t, n, r) {
          var i = "",
              s = SiebelApp.S_App.GetIconMap(),
              o = s[SiebelApp.S_App.LookupStringCache(t.GetIconMap())];
          if (o) {
              var u = o.length;
              for (var a = 0; a < u; a++) {
                  var f = o[a],
                      l = $(f.iconImage),
                      c = t.GetDisplayName();
                  if (c) {
                      var h = l.attr("alt");
                      l.attr("alt", h ? c + ":" + h : h), h = l.attr("title"), l.attr("title", h ? c + ":" + h : h), l = l[0].outerHTML
                  } else l = f.iconImage;
                  if (!e.IsEmpty(n) && f.iconName == n) return l;
                  f.iconName == "Default" && (i = l)
              }
              if (!e.IsEmpty(i)) return i
          }
          return ""
      }, F.prototype.ControlHtmlFormatter = function(t, n, r, i, s, o) {
          var u = t.next("." + n),
              a = o.GetScriptProperty("Visible");
          r ? (u.length === 1 ? u.html(r) : t.after("<span class='" + n + "'>" + r + "</span>"), e.DecideVisibility(u, a)) : u.styleHide(), i || !i && e.IsEmpty(s) ? e.DecideVisibility(t.val(s), a) : t.styleHide()
      }, F.prototype.SetControlValue = function(t, n, r) {
          var i = this.GetPM(),
              s =
              r === undefined || r === null ? i.Get("GetSelection") : r,
              o = !1;
          switch (t.GetUIType()) {
              case L:
              case l:
              case E:
                  break;
              default:
                  this.GetUIWrapper(t).SetValue(n, s), o = !0
          }
          if (!o) {
              var u = r ? r : 0,
                  a = $("#" + t.GetInputName())[u] || $("[name=" + t.GetInputName() + "]")[u];
              a || (o = !0);
              if (!o) {
                  a = $(a);
                  switch (t.GetUIType()) {
                      case L:
                          if (t.GetName() === "BookmarkURL" && i.GetPMName() === "Bookmark URL Popup Applet (SWE)_PM") var f = a.replaceWith('<textarea name="' + t.GetInputName() + '" class="siebui-bookmark-textarea" readonly="readonly" rows="3" cols="150" value=\'' + n + "'>" + n + "</textarea>");
                          else this.GetUIWrapper(t).SetValue(n, s);
                          break;
                      case l:
                          this.GetUIWrapper(t, !0).SetValue(n, s);
                          break;
                      case E:
                          var c = a.next("textarea");
                          c.length > 0 && (e.IsEmpty(n) ? c.val("") : c.val(n))
                  }
              }
              a = null
          }
      }, F.prototype.EnableControl = function(n, i, l) {
          var c, S, x;
          if (!vt(n)) return;
          var T = l === undefined || l === null ? this.GetPM().Get("GetSelection") : l;
          l = l ? l : 0;
          switch (n.GetUIType()) {
              case u:
              case a:
              case p:
              case f:
              case g:
              case y:
              case b:
              case s:
              case o:
              case m:
              case A:
              case L:
              case k:
              case w:
              case v:
              case h:
              case d:
                  this.GetUIWrapper(n).SetState(t.get("EDITABLE"), i, T);
                  return;
              case C:
              case r:
                  this.GetUIWrapper(n).SetState(t.get("ENABLE"), i, T);
                  return
          }
          if (n.GetUIType() == E) {
              c = $("[name=" + n.GetInputName() + "]");
              if (c.length > 0) {
                  c.attr("readOnly", !i).attr("aria-readonly", !i);
                  var N = c.siblings(".siebui-email-rtc-stripbtn");
                  N.length > 0 && (i ? e.DecideVisibility($(N), n.GetScriptProperty("Visible")) : $(N).hide())
              }
          } else c = $("#" + n.GetInputName()), c = c.length > 0 ? c : $("[name=" + n.GetInputName() + "]"), c.eq(c.length > l ? l : 0).removeAttr("readOnly").attr("readOnly", !i).attr("aria-readonly", !i);
          c.length === 1 ? this.CacheState(t.get("EDITABLE"), {
              stateValue: i,
              index: 0,
              ctrlName: n.GetName(),
              oneEl: !0
          }) : this.CacheState(t.get("EDITABLE"), {
              stateValue: i,
              index: l,
              ctrlName: n.GetName()
          })
      }, F.prototype.UpdateUIControls = function(t, n) {
          var i = this.GetPM(),
              s;
          t = t !== undefined ? t : i.Get("GetSelection"), n = i.Get("GetControls", {
              getDiff: !0,
              stateName: "CanUpdate",
              index: t,
              CtrlMap: n
          }), isPure = i.Get("IsPure");
          for (var o in n) n.hasOwnProperty(o) && (s = n[o], (!e.IsEmpty(s.GetFieldName()) || !isPure || i.ExecuteMethod("IsPrivateField", o)) && s.GetUIType() !== r && this.EnableControl(s, i.ExecuteMethod("CanUpdate", o), t))
      }, F.prototype.UpdateUIButtons = function(e) {
          var t = this.GetPM();
          e = e || t.Get("GetSelection");
          var n = t.Get("GetControls", {
                  getDiff: !0,
                  stateName: "CanInvokeMethod",
                  index: e
              }),
              i;
          for (var s in n) n.hasOwnProperty(s) && (i = n[s], (i.GetUIType() === r || i.GetUIType() === C) && this.EnableControl(i, t.ExecuteMethod("CanInvokeMethod", i.GetMethodName())))
      }, F.prototype.FocusFirstControl = function() {
          var t = this.GetPM().Get("GetControls"),
              n = 9999;
          this.SetFirstControl(null);
          for (var r in t)
              if (t.hasOwnProperty(r)) {
                  var i = t[r],
                      u = i.GetFieldName();
                  if (!e.IsEmpty(u) && i.GetIndex() && i.GetIndex() < n) {
                      var a = !1;
                      this.GetPM().Get("IsInQueryMode") === !1 ? a = this.GetPM().ExecuteMethod("CanUpdate", r) : a = !0;
                      if (a && !e.IsEmpty(i.GetUIType()) && (i.isBasicControl() || i.GetUIType()[0] === "J" || i.GetUIType() === s || i.GetUIType() === o)) {
                          n = i.GetIndex(), this.SetFirstControl($("#" + i.GetInputName())[0] || $("[name=" + i.GetInputName() + "]")[0]);
                          break
                      }
                  }
              } if (this.GetFirstControl() != null) {
              $(this.GetFirstControl()).focus();
              return
          }
          this.FocusFirstNonEditableControl()
      }, F.prototype.FocusFirstNonEditableControl = function() {
          var t = this.GetPM().Get("GetControls"),
              n = 9999,
              r;
          for (var i in t)
              if (t.hasOwnProperty(i)) {
                  var s = t[i],
                      o = s.GetUIType();
                  controlInputName = s.GetInputName();
                  if (s.GetIndex() < n && !e.IsEmpty(o) && o !== "Button" && o !== "Label") {
                      this.SetFirstControl($("#" + controlInputName)[0] || $("[name=" + controlInputName + "]")[0]);
                      break
                  }
              } r = this.GetFirstControl(), r && $(r).length > 0 && ($(r).focus(), !$(r).is(":focusable") && $(r).children().eq(0).is(":focusable") && $(r).children().eq(0).focus())
      }, F.prototype.SetFocusToControl = function(n, r) {
          var i = this.GetPM().Get("GetControls"),
              s = null,
              o = i[n],
              u = this.GetPM().Get("GetSelection");
          if (o) return e.IsEmpty(o.GetMethodName()) ? this.GetUIWrapper(o).SetState(t.get("FOCUS"), r, u) : (s = $("#" + (o.GetInputName() + "_Ctrl")), r ? $(s).focus() : $(s).blur()), !0
      }, F.prototype.InjectQTPInfo = function(e, t) {
          e.length != 0 && t != undefined && (typeof t.GetObjectType == "function" && !e.attr("ot") && $(e).attr("ot", t.GetObjectType()), typeof t.GetRepstrName == "function" && !e.attr("rn") && $(e).attr("rn", t.GetRepstrName()), typeof t.GetUIName == "function" && !e.attr("un") && $(e).attr("un", t.GetUIName()))
      }, F.prototype.InjectConfigInfo = function(e, t, n) {
          e.length != 0 && t != undefined && (typeof t.GetObjectType == "function" && !e.attr("ort") && $(e).attr("ort", n), typeof t.GetRepstrName == "function" && !e.attr("orn") && $(e).attr("orn", t.GetRepstrName()))
      }, F.prototype.InjectAppletQTPInfo = function(e) {
          var t = this.GetPM();
          e.length != 0 && t && (typeof t.Get("GetObjectType") == "string" && $(e).attr("ot", t.Get("GetObjectType")), typeof t.Get("GetRepstrName") == "string" && $(e).attr("rn", t.Get("GetRepstrName")), typeof t.Get("GetUIName") == "string" && $(e).attr("un", t.Get("GetUIName")))
      }, F.prototype.ShowPopup = function(e) {
          this.GetUIWrapper(e).OpenPopup()
      }, F.prototype.GetPhysicalControlValue = function(e) {
          var t, n, r = this.GetPM(),
              i = r.Get("GetSelection");
          if (e) {
              r.AddProperty("PhysicalCtrlVal", n), t = $("[name='" + e.GetInputName() + "']"), n = this.GetUIWrapper(e).GetValue(i) || "", r.Get("IsInQueryMode") && e.GetCaseSensitive() && n === SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_CSQ_WATERMARK") && (n = "");
              var s = e.GetUIType();
              switch (s) {
                  case f:
                      t.data("iscache") ? n = r.ExecuteMethod("GetFormattedFieldValue", e) : n = this.FormatDDInQueryMode(e, n)
              }
              r.AddProperty("PhysicalCtrlVal", n)
          }
      }, F
  }(), "SiebelAppFacade.PhysicalRenderer"
})), typeof SiebelAppFacade.PopupRenderer == "undefined" && (SiebelJS.Namespace("SiebelAppFacade.PopupRenderer"), define("siebel/popuprenderer", ["siebel/phyrenderer"], function() {
  return SiebelAppFacade.PopupRenderer = function() {
      function i(e) {
          SiebelAppFacade.PopupRenderer.superclass.constructor.call(this, e)
      }

      function s() {
          var t = this.GetPM(),
              n = $("div[name=popup]"),
              r = n.parents(".ui-dialog").eq(0);
          !e.IsEmpty(t) && t.Get("IsCancelQryPopupOpen") && (n.children().length == 1 ? t.ExecuteMethod("ClearPopup") : ($("div[name=cancelQuery]").remove(), n.children().styleShow(), t.Get("isPopupMVGAssoc") && (r.addClass("siebui-mvg-dialog"), r.find(".ui-dialog-buttonset").styleShow()), r.width(r.data("origWidth")), jQuery.removeData(r, "origWidth"), r.find(".ui-dialog-title").css({
              visibility: "visible"
          }), setTimeout(function() {
              n.dialog("option", "position", {
                  my: "center",
                  at: "center",
                  of: window
              })
          }, 0)), t.SetProperty("IsCancelQryPopupOpen", !1))
      }

      function o() {
          SiebelApp.S_App.uiStatus.Busy(), SiebelApp.contentUpdater.AddCallBack(this.GetPM().Get("url"), function() {
              this.ExecuteMethod("OnLoadPopupContent")
          }, this.GetPM());
          var e = $("[name=popup]");
          SiebelApp.S_App.GetEnablePerfHooks() && SiebelApp.S_App.GetTimer() && SiebelApp.S_App.GetTimer().TimePopupApplet("", "Call GetLayout"), e.attr("src", this.GetPM().Get("url")), e = null, setTimeout(function() {
              SiebelApp.contentUpdater.loadContent(!0)
          }, 1)
      }

      function u() {
          SiebelApp.S_App.uiStatus.Free(), $("[name=popup]").children().remove(), $("[name=popup]").addClass("minWidthContainer"), $("[name=popup]").dialog("open"), $("[name=popup]").html(""), $("[name=popup]").append(this.GetPM().Get("content"))
      }

      function a() {
          var e = this.GetPM().Get("state"),
              i = this.GetPM().Get("isCurrencyOpen"),
              s = !0;
          i && (s = !1);
          var o = $("div[name=popup]");
          if (e == t.get("POPUP_STATE_HIDDEN")) {
              o.dialog("close").parents(".ui-dialog").eq(0).removeClass("siebui-mvg-dialog");
              var u = o.find("textarea"),
                  a = u.length;
              for (var f = 0; f < a; f++) {
                  var l = CKEDITOR.instances[$(u[f]).attr("name")];
                  if (l) {
                      var c = $(l.element.$);
                      c && !c.data("pendingAction") ? l.destroy(!0) : c.data("pendingAction", "destroy")
                  }
              }
              var p = SiebelApp.S_App.GetPopupPM();
              p.SetProperty("isPopupPick", null), p.SetProperty("PickAppletObject", null), p.SetProperty("baseParentAppletId", null), p.SetProperty("isPopupAssoc", null), p.SetProperty("AssocAppletObject", null), p.SetProperty("baseParentAppletId", null), p.SetProperty("isPopupMVGSelected", null), p.SetProperty("MVGSelectedAppletObject", null), p.SetProperty("baseParentAppletId", null), p.SetProperty("isPopupMVGAssoc", null), p.SetProperty("MVGAssocAppletObject", null), p.SetProperty("MVGAssocParentAppletObject", null), p.SetProperty("parentAppletId", null), p.SetProperty("baseParentAppletId", null), p.SetProperty("isPopupNonStandard", null), p.SetProperty("NonStandardAppletObject", null), o.children().remove().end().dialog("option", "buttons", {}).parent().find("div.ui-dialog-buttonset").empty(), this.GetPM().SetProperty("isCurrencyOpen", !1)
          } else if (e == t.get("POPUP_STATE_VISIBLE")) {
              $("div[name=popup]").data("InitDlg", !0), setTimeout(function() {
                  $("div[name=popup]").removeData("InitDlg")
              }, 2), $("div[name=popup]").dialog("open"), $("div[name=popup]").parents("div.ui-dialog").children("div.ui-dialog-titlebar").styleShow(), $("div[name=popup]").dialog("option", "height", "auto").dialog("option", "width", "auto").dialog("option", "resizable", s).dialog("option", "minWidth", n).dialog("option", "minHeight", r), $("div[name=popup]").dialog("option", "position", {
                  my: "center",
                  at: "center",
                  of: window
              });
              var d = this.GetPM(),
                  v, m;
              $(".ui-widget-overlay").droppable({
                  drop: function(e, t) {
                      if (t.draggable && (t.draggable.is("tr.jqgrow") || t.draggable.is(".siebui-tile"))) {
                          var n = t.draggable.attr("id"),
                              r = !1;
                          if (n > 0) var i = t.draggable.parent().parent().jqGrid("getRowData", n);
                          var s = $("#s_" + d.Get("baseParentAppletId") + "_div");
                          if (s.length > 0) var o = s.offset().top + s.height(),
                              u = s.offset().left + s.width();
                          if (s.offset().left < e.originalEvent.clientX && e.originalEvent.clientX < u && s.offset().top < e.originalEvent.clientY && e.originalEvent.clientY < o) {
                              d.Get("isPopupPick") && (v = d.Get("PickAppletObject"), v.GetPModel().ExecuteMethod("SetSelectionOnDragNDrop", n), r = v.GetPModel().ExecuteMethod("HandleDragNDropInPopup", "PickRecord"));
                              if (d.Get("isPopupMVGAssoc")) {
                                  m = d.Get("MVGAssocParentAppletObject"), d.Get("ismultislectmode") || m.GetPModel().ExecuteMethod("SetSelectionOnDragNDrop", n);
                                  var a = m.GetPModel().ExecuteMethod("HandleDragNDropInPopup", "AddRecords");
                                  a && (r = m.GetPModel().ExecuteMethod("HandleDragNDropInPopup", "CloseApplet"))
                              }
                              if (d.Get("isPopupAssoc")) {
                                  var f = CCFMiscUtil_CreatePropSet();
                                  v = d.Get("AssocAppletObject"), d.Get("ismultislectmode") || v.GetPModel().ExecuteMethod("SetSelectionOnDragNDrop", n), r = v.GetPModel().ExecuteMethod("HandleDragNDropInPopup", "AddRecord")
                              }
                              r ? (t.draggable.detach(), d.SetProperty("isPopupPick", !1), d.SetProperty("isPopupMVGAssoc", !1), d.SetProperty("isPopupMVGSelected", !1), d.SetProperty("isPopupAssoc", !1)) : t.draggable.animate(t.draggable.data().origPosition, "slow")
                          } else t.draggable.animate(t.draggable.data().origPosition, "slow");
                          d.SetProperty("ismultislectmode", !1)
                      }
                  }
              }), h.call(this), SiebelApp.S_App.uiStatus.LocalBusy({
                  mask: !0
              })
          }
      }

      function f(e) {
          var t = e.parent().width(),
              n = e.parent().height(),
              r = {
                  position: {
                      my: "center",
                      at: "center",
                      of: window
                  }
              };
          $(".siebui-send-email").length || $.extend(r, {
              minWidth: t,
              minHeight: n,
              width: e.width()
          }), e.dialog("option", r);
          var i = parseInt(e.parent().css("top"), 10);
          i < 0 && e.parent().css("top", 0)
      }

      function l() {
          var e = this,
              t = arguments;
          DOMUtils.Read(function() {
              DOMUtils.Write(function() {
                  c.apply(e, t)
              })
          })
      }

      function c() {
          var e = Number(this.GetPM().Get("width")) || 0,
              t = Number(this.GetPM().Get("height")) || 0,
              r = !1,
              i = $("div[name=popup]"),
              s = $(document.body).width();
          i.find("div.ui-jqgrid").length > 0 ? (e === n && (e *= 2), s < e && (e = s * .85), i.width(e), $(window).resize()) : e < n ? (e = n, s < e && (e = s * .85), i.width(e)) : r = !0, r ? setTimeout(function() {
              var t = $("div[name=popup]"),
                  n = t.width(),
                  r = n;
              t[0] && t[0].scrollWidth > r && t[0].scrollWidth < e && (r = t[0].scrollWidth), s < r && (r = s * .85), n !== r && t.width(r), f(t)
          }, 3) : f(i), i = null
      }

      function h() {
          var t = $("[name='popup']");
          if (this.GetPM().Get("currPopups") && this.GetPM().Get("currPopups")[0]) t.dialog("option", "title", SiebelApp.S_App.LookupStringCache(this.GetPM().Get("currPopups")[0].GetTitle())), e.IsTrue(SiebelApp.S_App.IsAutoOn()) && t.parent(".ui-dialog").find("span.ui-dialog-title").attr("ot", "popup").attr("rn", "popup").attr("un", this.GetPM().Get("currPopups")[0].GetUIName() + " popup");
          else {
              var n = t.find("[title-preserved]"),
                  r = n && n.length ? n.attr("title-preserved") : "";
              t.dialog("option", "title", HtmlDecode(r)), e.IsEmpty(r) || t.parents("div.ui-dialog").find(".ui-dialog-title").focus()
          }
      }

      function p() {
          $("body").find("iframe#ouitemp_iframe").remove()
      }

      function d(e, t) {
          $(this).width() !== t.size.width && $(this).width("auto");
          if (t.originalSize.height !== t.size.height && $(this).find(".siebui-send-email").length) {
              $(this).height("auto");
              var n = $(this).siblings(".ui-dialog-titlebar").outerHeight() + $(this).outerHeight(),
                  r = t.size.height - n,
                  i = $(this).find(".siebui-email-rtc-text textarea");
              if (i.length) {
                  i.width("");
                  var s = i.height();
                  i.height(s + r)
              }
              var o = CKEDITOR.instances[$(this).find(".siebui-email-body textarea").attr("name")];
              if (o) {
                  var s = $(this).find(".siebui-email-body .cke").height();
                  o.resize("100%", s + r)
              }
              n > t.size.height && (i.length || o) && $(this).parent().height(n)
          }
      }
      var e = SiebelJS.Dependency("SiebelApp.Utils"),
          t = SiebelJS.Dependency("SiebelApp.Constants"),
          n = Number(t.get("DEFAULT_POPUP_WIDTH")),
          r = Number(t.get("DEFAULT_POPUP_HEIGHT"));
      return SiebelJS.Extend(i, SiebelAppFacade.BasePR), i.prototype.Init = function() {
          SiebelAppFacade.PopupRenderer.superclass.Init.call(this), this.AttachPMBinding("state", a), this.AttachPMBinding("url", o), this.AttachPMBinding("content", u), this.AttachPMBinding("OnExecuteQuery", s), this.AttachPMBinding("OnLoadPopupContent", h), this.AttachPMBinding("OnLoadPopupContent", l), this.AttachPMBinding("StandAlonePopup", this.ProcessStandAlonePopup), SiebelApp.S_App.IsRwd() && this.AttachPMBinding("UnloadPopup", p)
      }, i.prototype.BindData = function() {
          SiebelAppFacade.PopupRenderer.superclass.BindData.call(this)
      }, i.prototype.ShowUI = function() {
          SiebelAppFacade.PopupRenderer.superclass.ShowUI.call(this);
          if ($("[name=popup]").length === 0) {
              var e = $('<div name="popup"></div>'),
                  t = SiebelApp.S_App.GetDirection();
              SiebelApp.S_App.GetTargetViewContainer().append(e), SiebelApp.S_App.uiStatus.LocalBusy({
                  target: "[name=popup]",
                  mask: !1
              });
              var n = $("div[name=popup]");
              n.dialog({
                  position: "center",
                  modal: !0,
                  autoOpen: !1,
                  closeOnEscape: !1,
                  resize: d
              }), n.parent().find(".ui-dialog-titlebar-close").attr("title", SiebelApp.S_App.LocaleObject.GetLocalString("IDS_MSG_CLOSE")), n.parents("div.ui-dialog").children("div.ui-dialog-titlebar").removeAttr("role").children("span.ui-dialog-title").attr("tabindex", "-1").addClass(t ? "ui-dialog-title-rtl" : "").next().addClass(t ? "ui-dialog-titlebar-close-rtl" : "").removeClass(t ? "ui-dialog-titlebar-close" : "")
          }
      }, i.prototype.BindEvents = function() {
          SiebelAppFacade.PopupRenderer.superclass.BindEvents.call(this);
          var t = $("[name=popup]");
          t.data("context", this), t.dialog({
              beforeClose: function(t, n) {
                  if (!!$("div[name=popup]").data("InitDlg")) return !1;
                  if ($(t.currentTarget, "[class*=ui-dialog-titlebar-close]").length > 0) return e.Confirm(SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_POPUP_CLOSEBYX_WARNING")) ? ($("[name=popup]").data("context").GetPM().OnControlEvent("ClosePopupByX", t), !0) : !1
              }
          })
      }, i.prototype.ProcessStandAlonePopup = function(e, t, n) {
          n = n || "subWind";
          var r = window.open(e, n, t)
      }, i
  }(), SiebelAppFacade.PopupRenderer
})), typeof SiebelAppFacade.ToolbarPM == "undefined" && (SiebelJS.Namespace("SiebelAppFacade.ToolbarPM"), define("siebel/toolbarpmodel", ["siebel/pmodel"], function() {
  return SiebelAppFacade.ToolbarPM = function() {
      function t(e) {
          SiebelAppFacade.ToolbarPM.superclass.constructor.call(this, e), this.GetStateUIMap().CanInvoke = {}
      }

      function n(e) {
          var t, n = [];
          SiebelApp.S_App.IsRwd() && this.SetProperty("placeholder", e.GetProperty(consts.get("SWE_PROP_TMPL_ITM_HOLDER")));
          for (t = 0; t < e.GetChildCount(); t++) n.push(e.GetChild(t));
          n.length > 0 && this.AddProperty("itemArray", n, {
              stateProp: !0
          })
      }

      function r(e, t, n) {
          e === "CanInvoke" && (this.GetStateUIMap().CanInvoke[t.commandName] = t.stateValue, n.CancelOperation = !0)
      }

      function i(e, t, n, r) {
          var i, s = t[t.length - 1];
          if (s && s.getDiff && e === "itemArray" && s.methodName === "CanInvoke") {
              var o = this.Get(e),
                  u = o.length,
                  a, f, i = [],
                  l = this.GetStateUIMap().CanInvoke;
              for (var c = 0; c < u; c++) {
                  a = o[c], curEltType = a.GetProperty("type");
                  if (curEltType === "Link" || curEltType === "Button") f = a.GetProperty("command"), f && (!l.hasOwnProperty(f) || l[f] !== this.ExecuteMethod("CanInvoke", f)) && (o[c].SetProperty("origIndex", c), i.push(o[c]))
              }
          } else i = n.apply(this, [e].concat(t));
          return r.CancelOperation = !0, r.ReturnValue = i, i
      }
      var e = SiebelApp.CommandManager.GetInstance();
      return SiebelJS.Extend(t, SiebelAppFacade.BasePM), t.prototype.Init = function() {
          SiebelAppFacade.ToolbarPM.superclass.Init.apply(this, arguments), this.AddProperty("placeholder", "s_toolbar"), this.AddProperty("itemArray", [], {
              stateProp: !0
          }), this.AddMethod("Update", function() {}, {
              scope: this
          }), this.AttachEventHandler("TOOLBAR_INVOKE", function(t) {
              var n = {};
              return n.mask = !0, n.async = !0, e.InvokeCommand(t, !0, !0), !0
          }, {
              core: !0
          }), this.AddMethod("CanInvoke", function(t) {
              return e.CanInvokeCommand(t)
          }), this.AddMethod("HandlePreGetUIState", i, {
              sequence: !0,
              scope: this
          }), this.AddMethod("UpdateUIState", r, {
              sequence: !0,
              scope: this
          })
      }, t.prototype.Setup = function(e) {
          var t = CCFMiscUtil_CreatePropSet();
          t.SetProperty("SWE_OUI_RENDERER", "ToolbarRenderer"), SiebelAppFacade.ToolbarPM.superclass.Setup.call(this, t), n.call(this, e)
      }, t
  }(), SiebelAppFacade.ToolbarPM
}));
if (typeof SiebelAppFacade.ToolbarRenderer == "undefined") {
  SiebelJS.Namespace("SiebelAppFacade.ToolbarRenderer");
  var utils = SiebelJS.Dependency("SiebelApp.Utils"),
      consts = SiebelJS.Dependency("SiebelApp.Constants");
  define("siebel/toolbarrenderer", ["siebel/basephyrenderer"], function() {
      return SiebelAppFacade.ToolbarRenderer = function() {
          function s(e) {
              var t;
              this.SetToolbarMap = function(e) {
                  t = e
              }, this.GetToolbarMap = function() {
                  return t
              }, SiebelAppFacade.ToolbarRenderer.superclass.constructor.call(this, e)
          }

          function o() {
              var e = SiebelApp.S_App.GetName();
              return e === "Siebel CX Partner Portal" || e === "Siebel HTIM PRM" || e === "Siebel Public Sector PRMPortal"
          }

          function u(t) {
              var n = !1;
              for (var r = 0, i = t.length; r < i; r++) {
                  var s = t[r],
                      o = s.GetProperty("type");
                  if (o && o !== e) {
                      n = !0;
                      break
                  }
              }
              return n
          }

          function a(e) {
              var s = this.GetPM(),
                  o = s.Get("itemArray"),
                  u = o[e.attr("data-tbindex")],
                  a = u.GetProperty("name") || "";
              a = a.replace(/\s+/g, "-").toLowerCase();
              var f = u.childArray,
                  l = u.GetProperty("toolbarname") || "",
                  c = $("#toolbar_popup"),
                  h = l.replace(/\s+/g, "-").toLowerCase();
              h = "siebui-toolbar-" + h;
              var p = $("#" + h);
              if (f.length <= 0) return;
              c.length > 0 && c.remove();
              var d, v = "",
                  m = "",
                  g = "",
                  y = "",
                  b = "";
              for (var w = 0; w < f.length; w++) {
                  var E = f[w],
                      S = s.ExecuteMethod("CanInvoke", E.GetProperty("command")),
                      x = E.GetProperty("type"),
                      T, N = E.GetProperty("caption");
                  utils.IsEmpty(N) || (N = HtmlEncode(N)), T = E.GetProperty("name") || "", y = ' ot="' + E.GetProperty("type") + '" rn="' + T + '" un="' + N + '" ', T = T.replace(/\s+/g, "-").toLowerCase();
                  switch (x) {
                      case r:
                          b = "siebui-tb-item-img", v += "<div autofocus tabindex=" + (w + 1) + ' id="tb_item_' + w + '" class="' + b + '">' + "<span " + y + '><span class="siebui-icon-' + T + '"><img src="' + E.GetProperty("onbitmap") + '"></img></span></span>' + "</div>";
                          break;
                      case i:
                          b = "siebui-tb-item-text", utils.IsEmpty(N) || (m += "<div tabindex=" + (w + 1) + ' id="tb_item_' + w + '" class="' + b + '">' + "<span " + y + ">" + N + "</span>" + "</div>");
                          break;
                      case t:
                      case n:
                          var C, k = !S && !!E.GetProperty("offbitmap") ? E.GetProperty("offbitmap") : E.GetProperty("onbitmap"),
                              N = E.GetProperty("caption");
                          utils.IsEmpty(N) || (N = HtmlEncode(N)), k ? C = "<span class='siebui-icon-" + T + "'><img src='" + k + "' /></span>" : C = N, b = "siebui-tb-item-btn", g += "<div tabindex=" + (w + 1) + ' id="tb_item_' + w + '" class="' + b + " " + (S ? "siebui-tb-item-enabled" : "ui-state-disabled") + '" data-cmd="' + E.GetProperty("command") + '">' + '<button class="siebui-ctrl-btn appletButton siebui-btn-' + T + '"' + y + ' title="' + N + '">' + C + "</button>" + "</div>"
                  }
              }
              d = '<div id="toolbar_popup" name="toolbar_popup" class="siebui-tb-popup"><div class="siebui-tb-popup-top">' + v + m + "</div>" + '<div class="siebui-tb-popup-bottom">' + g + "</div>" + "</div>", $(p).append(d), $("#toolbar_popup").dialog({
                  modal: !0,
                  autoOpen: !1,
                  closeOnEscape: !0,
                  dialogClass: h + "-popup"
              }), $("#toolbar_popup").dialog("open"), $("#toolbar_popup").dialog("widget").prepend('<div class="siebui-callout-one"></div><div class="siebui-callout-two"></div>'), $(document).undelegate(".ui-widget-overlay", "click.toolbarrenderer"), $(document).delegate(".ui-widget-overlay", "click.toolbarrenderer", function() {
                  $("#toolbar_popup").dialog("close")
              });
              var L = $("div.siebui-tb-item-enabled");
              return L.unbind("click.toolbaritem"), L.bind("click.toolbaritem", {
                  ctx: this
              }, function(e) {
                  var t = $(this).attr("data-cmd");
                  e.data.ctx.GetPM().OnControlEvent("TOOLBAR_INVOKE", t), $("#toolbar_popup").dialog("close")
              }), !1
          }

          function f(e, t, n) {
              var r = this.GetPM();
              n = n || new SiebelApp.UIStatus;
              if (e && e.length === 1 && t) switch (t.which) {
                  case $.ui.keyCode.LEFT:
                      e = e.parent().children().filter('[tabindex^="0"]');
                      var i = e.prevAll("li.siebui-toolbar-enable").eq(0);
                      i.length === 1 && (e.attr("tabIndex", "-1"), i.attr("tabIndex", "0").focus());
                      break;
                  case $.ui.keyCode.RIGHT:
                      e = e.parent().children().filter('[tabindex^="0"]');
                      var s = e.nextAll("li.siebui-toolbar-enable").eq(0);
                      s.length === 1 && (e.attr("tabIndex", "-1"), s.attr("tabIndex", "0").focus());
                      break;
                  case $.ui.keyCode.ENTER:
                  case $.ui.keyCode.SPACE:
                      var o = e.attr("data-subtoolbar");
                      if (o === "N") {
                          var u = $(e).attr("data-cmd");
                          u && r.OnControlEvent("TOOLBAR_INVOKE", u)
                      } else a.call(t.data.ctx, e)
              }
          }

          function l() {
              var e = this.GetPM(),
                  t = e.Get("itemArray", {
                      getDiff: !0,
                      methodName: "CanInvoke"
                  }),
                  n = t.length;
              if (n > 0) {
                  var r = $("#" + e.Get("placeholder")),
                      i = null,
                      s = null,
                      o = null,
                      u = null,
                      a = null,
                      f = null;
                  for (var l = 0; l < n; l++) {
                      i = t[l], a = i.GetProperty("type");
                      if (a === "Link" || a === "Button") s = r.find("li#tb_" + i.GetProperty("origIndex")), s.length && (f = i.GetProperty("command"), o = e.ExecuteMethod("CanInvoke", f), u = o ? " siebui-toolbar-enable " : " siebui-toolbar-disable ", (" " + s[0].className + " ").indexOf(u) <= -1 && s.removeClass("siebui-toolbar-disable siebui-toolbar-enable").addClass(o ? "siebui-toolbar-enable" : "siebui-toolbar-disable").children().eq(0).removeClass("ToolbarButtonOff ToolbarButtonOn").addClass(o ? "ToolbarButtonOn" : "ToolbarButtonOff").children().eq(0).attr("src", !o && !!i.GetProperty("offbitmap") ? i.GetProperty("offbitmap") : i.GetProperty("onbitmap")).removeClass("ToolbarButtonOff ToolbarButtonOn").addClass(o ? "ToolbarButtonOn" : "ToolbarButtonOff"), this.CacheState("CanInvoke", {
                          commandName: f,
                          stateValue: o
                      }))
                  }
                  r = s = null
              }
              t = null
          }
          var e = consts.get("SWE_PST_QTP_INFO"),
              t = consts.get("SWE_PST_BUTTON_CTRL"),
              n = consts.get("SWE_CTRL_LINK"),
              r = consts.get("SWE_CTRL_IMAGECONTROL"),
              i = consts.get("SWE_CTRL_TEXTDATA");
          return SiebelJS.Extend(s, SiebelAppFacade.BasePR), s.prototype.Init = function() {
              SiebelAppFacade.ToolbarRenderer.superclass.Init.call(this), this.AttachPMBinding("Update", l)
          }, s.prototype.ShowUI = function() {
              SiebelAppFacade.ToolbarRenderer.superclass.ShowUI.call(this);
              var e = this.GetPM(),
                  i = e.Get("itemArray"),
                  s = e.Get("placeholder"),
                  o = {},
                  a = {},
                  f = SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_APPTOOLBAR_TITLE"),
                  l, c, h = SiebelApp.S_App.GetDirection();
              for (l = 0; l < i.length; l++) {
                  var p = i[l],
                      d = p.GetProperty("command"),
                      v = e.ExecuteMethod("CanInvoke", d),
                      m = p.GetProperty("type"),
                      g = p.GetProperty("toolbarname") || "",
                      y = p.GetProperty("name") || "",
                      b = p.GetProperty("offbitmap"),
                      w = p.GetProperty("onbitmap"),
                      E = "siebui-toolbar-" + g.replace(/\s+/g, "-").toLowerCase(),
                      S = $("#" + E).length > 0 ? "#" + E : "#" + s,
                      x = "N";
                  if ($(S).length > 0) {
                      a[S] || (a[S] = $("#" + E).length > 0 ? "role='navigation' aria-label='" + g : "role='toolbar' aria-label='" + f), c = o[S] || "", u.call(this, p.childArray) && (x = "Y", v = !0);
                      switch (m) {
                          case t:
                          case n:
                          case r:
                              var T = p.GetChildByType(consts.get("SWE_PST_QTP_INFO")),
                                  N = v ? "ToolbarButtonOn" : "ToolbarButtonOff";
                              c += "<li id = 'tb_" + l + "' class='" + (v ? "siebui-toolbar-enable" : "siebui-toolbar-disable") + (h ? " siebui-rtl-element-right" : "") + "' data-cmd='" + d + "' data-subtoolbar='" + x + "' role = 'listitem'  title = '" + HtmlEncode(p.GetProperty("caption")) + "' name='" + y + "' tabindex='" + (l === 0 ? 0 : -1) + "' data-tbindex='" + l + "'>" + "<span class='siebui-icon-tb-" + y.toLowerCase().replace(/ /g, "_") + " " + N + "'>" + "<img src='" + (!v && !!b ? b : w) + "' class='" + N + "' ", T && (c += consts.get("SWE_PROP_QTP_OT") + "='" + T.GetProperty(consts.get("SWE_PROP_QTP_OT")) + "' " + consts.get("SWE_PROP_QTP_RN") + "='" + T.GetProperty(consts.get("SWE_PROP_QTP_RN")) + "' " + consts.get("SWE_PROP_QTP_UN") + "='" + T.GetProperty(consts.get("SWE_PROP_QTP_UN")) + "'"), c += "/><span class='siebui-toolbar-text'>" + p.GetProperty("caption") + "</span></span></li>", o[S] = c, d && this.CacheState("CanInvoke", {
                                  commandName: d,
                                  stateValue: v
                              })
                      }
                  }
              }
              var C;
              for (var k in o) C = "<ul class='siebui-toolbar' " + (a[k] || "") + "' >", o[k] = C + o[k] + "</ul>", $(k).html(o[k]).find("li.siebui-toolbar-enable").eq(0).attr("tabindex", "0");
              this.SetToolbarMap(o), SiebelAppFacade.LegacyCssSupport.addLegacyClass($("#" + s))
          }, s.prototype.BindEvents = function() {
              SiebelAppFacade.ToolbarRenderer.superclass.BindEvents.call(this);
              var e = new SiebelApp.UIStatus,
                  t, n = this.GetToolbarMap();
              for (t in n) $(t).delegate("li.siebui-toolbar-enable", "click", {
                  ctx: this
              }, function(e) {
                  var t = $(this).attr("data-subtoolbar");
                  if (t === "N") {
                      var n = $(this).attr("data-cmd");
                      e.data.ctx.GetPM().OnControlEvent("TOOLBAR_INVOKE", n)
                  } else a.call(e.data.ctx, $(this))
              }), $(t).delegate("li.siebui-toolbar-enable", "keydown", {
                  ctx: this
              }, function(t) {
                  f.call(t.data.ctx, $(this), t, e)
              }), t = null;
              $("#_sweviewbar").length && $("#_sweviewbar").before('<div class="siebui-callout-one"></div><div class="siebui-callout-two"></div>'), (SiebelApp.Utils.IsTrue(SiebelApp.S_App.IsSui()) || o()) && $(".siebui-button-toolbar").length && ($(".siebui-button-toolbar").attr("tabindex", 0).attr("aria-label", $(".siebui-button-toolbar").find("[aria-label]").attr("aria-label")).addClass("siebui-closed"), $("html").bind("click", function(e) {
                  var t = $(".siebui-button-toolbar");
                  t.hasClass("siebui-open") && (t.removeClass("siebui-open"), t.addClass("siebui-closed")), t = null
              }), $(".siebui-button-toolbar").bind("click", function(e) {
                  e.stopPropagation();
                  var t = $(this);
                  t.hasClass("siebui-closed") ? (t.removeClass("siebui-closed"), t.addClass("siebui-open")) : (t.removeClass("siebui-open"), t.addClass("siebui-closed")), t = null
              }))
          }, s.prototype.BindData = function() {
              SiebelAppFacade.ToolbarRenderer.superclass.BindData.call(this)
          }, s
      }(), SiebelAppFacade.ToolbarRenderer
  })
}
typeof SiebelAppFacade.ErrorObjectRenderer == "undefined" && (SiebelJS.Namespace("SiebelAppFacade.ErrorObjectRenderer"), define("siebel/errorobjectrenderer", ["siebel/basephyrenderer"], function() {
  return SiebelAppFacade.ErrorObjectRenderer = function() {
      function e(e) {
          SiebelAppFacade.ErrorObjectRenderer.superclass.constructor.call(this, e)
      }
      return SiebelJS.Extend(e, SiebelAppFacade.BasePR), e.prototype.ShowError = function(e) {
          e && utils.Alert(e)
      }, e
  }(), SiebelAppFacade.ErrorObjectRenderer
})), typeof SiebelAppFacade.AutomationInfo == "undefined" && (SiebelJS.Namespace("SiebelAppFacade.AutomationInfo"), define("siebel/automationinfo", [], function() {
  SiebelAppFacade.AutomationInfo = function() {
      function t() {
          $(document).mousedown(function(e) {
              e.which === 3 && e.ctrlKey === !0 && n(e)
          }), $(document).bind("contextmenu", function(e) {
              e.which === 3 && e.ctrlKey === !0 && e.preventDefault()
          }), $("#siebui-automation-dialog-message").length === 0 && ($("body").append(" <div id='siebui-automation-dialog-message' class='siebui-automation-dialog'  title='" + e.GetLocalString("IDS_SWE_AUTOMATION_DIALOG_HEADER") + "'   > " + e.GetLocalString("IDS_SWE_ELEMENT_APPLET_RN") + "<INPUT  class='siebui-input' readonly='readonly' id='Siebel_APPLET_RN' /><br> " + e.GetLocalString("IDS_SWE_ELEMENT_VIEW_RN") + "<INPUT  class='siebui-input' readonly='readonly' id='Siebel_VIEW_RN' /><br> " + e.GetLocalString("IDS_SWE_ELEMENT_SCREEN_RN") + "<INPUT  class='siebui-input' readonly='readonly' id='Siebel_SCREEN_RN' /><br> " + e.GetLocalString("IDS_SWE_ELEMENT_RN") + "<INPUT class='siebui-input' readonly='readonly'\" id='Siebel_RN' /> <br>" + e.GetLocalString("IDS_SWE_ELEMENT_OT") + "<INPUT class='siebui-input' readonly='readonly'\" id='Siebel_OT' /> <br> " + e.GetLocalString("IDS_SWE_ELEMENT_UN") + "<INPUT  class='siebui-input' readonly='readonly' id='Siebel_UN' /><br> " + e.GetLocalString("IDS_SWE_ELEMENT_LOV") + "<INPUT class='siebui-input' readonly='readonly'\" id='Siebel_LOV' /> <br>" + e.GetLocalString("IDS_SWE_ELEMENT_LIC") + "<INPUT class='siebui-input' readonly='readonly'\" id='Siebel_LIC' /> <br>" + e.GetLocalString("IDS_SWE_ELEMENT_CON_STRING") + "<INPUT type='text' class='siebui-input' readonly='readonly' id='Siebel_APPLET_CON_STR' /><br> " + " </div>"), $("#siebui-automation-dialog-message").dialog({
              autoOpen: !1,
              buttons: {
                  Ok: {
                      text: e.GetLocalString("IDS_SWE_CKEDITOR_OK"),
                      click: function() {
                          $(this).dialog("close")
                      }
                  }
              }
          }))
      }

      function n(t) {
          var n = $("#siebui-automation-dialog-message"),
              r = n.find("#Siebel_OT"),
              i = n.find("#Siebel_RN"),
              s = n.find("#Siebel_UN"),
              o = n.find("#Siebel_LOV"),
              u = n.find("#Siebel_LIC"),
              a = n.find("#Siebel_APPLET_RN"),
              f = n.find("#Siebel_VIEW_RN"),
              l = n.find("#Siebel_SCREEN_RN"),
              c = n.find("#Siebel_APPLET_CON_STR"),
              h = $(t.target);
          a.val(" "), f.val(" "), l.val(" "), r.val(" "), i.val(" "), s.val(" "), c.val(" "), h.attr("ot") || (h.children().attr("ot") ? h = h.children() : h.parent().attr("ot") ? h = h.parent() : h.parent().parent().attr("ot") && (h = h.parent().parent())), h.parents(".siebui-applet").length > 0 && a.val(h.parents(".siebui-applet").attr("rn")), h.parents("#_sweview").length > 0 && f.val(h.parents("#_sweview").attr("rn")), $("#_sweappmenu").find(".siebui-active-navtab").length > 0 && l.val($("#_sweappmenu").find(".siebui-active-navtab").attr("rn")), h.attr("rn") && i.val(h.attr("rn")), h.attr("ot") && r.val(h.attr("ot")), h.attr("un") && s.val(h.attr("un")), h.attr("data-lovtype") && o.val(h.attr("data-lovtype")), h.attr("data-licval") && u.val(h.attr("data-licval"));
          var p = "|",
              d = ":",
              v = e.GetLocalString("IDS_SWE_ELEMENT_APPLET_RN") + d + a.val() + p + e.GetLocalString("IDS_SWE_ELEMENT_VIEW_RN") + d + f.val() + p + e.GetLocalString("IDS_SWE_ELEMENT_SCREEN_RN") + d + l.val() + p + e.GetLocalString("IDS_SWE_ELEMENT_RN") + d + i.val();
          return c.val(v), n.dialog("open"), c.select(), window.clipboardData && window.clipboardData.setData("Text", v), t.preventDefault(), t.stopPropagation(), !0
      }
      var e = SiebelApp.S_App.LocaleObject;
      return new t
  }()
})), typeof SiebelAppFacade.AboutViewPM == "undefined" && (SiebelJS.Namespace("SiebelAppFacade.AboutViewPM"), define("siebel/aboutviewpm", ["siebel/pmodel"], function() {
  return SiebelAppFacade.AboutViewPM = function() {
      function e() {
          SiebelAppFacade.AboutViewPM.superclass.constructor.apply(this, arguments)
      }
      return SiebelJS.Extend(e, SiebelAppFacade.PresentationModel), e.prototype.UpdateModel = function(e) {
          SiebelAppFacade.AboutViewPM.superclass.UpdateModel.call(this, e);
          var t = SiebelAppFacade.PresentationModel.GetCtrlTemplate("ViewLoadSource", SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_VIEW_CACHE_MODE") + ":", consts.get("SWE_CTRL_LABEL"), 0);
          this.ExecuteMethod("AddClientControl", t)
      }, e
  }(), SiebelAppFacade.AboutViewPM
})), typeof SiebelAppFacade.AboutViewPR == "undefined" && (SiebelJS.Namespace("SiebelAppFacade.AboutViewPR"), define("siebel/aboutviewpr", ["siebel/phyrenderer"], function() {
  return SiebelAppFacade.AboutViewPR = function() {
      function e() {
          SiebelAppFacade.AboutViewPR.superclass.constructor.apply(this, arguments)
      }
      return SiebelJS.Extend(e, SiebelAppFacade.PhysicalRenderer), e.prototype.BindData = function() {
          SiebelAppFacade.AboutViewPR.superclass.BindData.call(this);
          var e = this.GetPM(),
              t = e.Get("GetControls"),
              n = t.ViewLoadSource,
              r = n.GetDisplayName(),
              i = $(SiebelApp.S_App.IsRwd() ? "#SiebMainView" : "#_svf0").data("cache-mode"),
              s = $("#s_" + e.Get("GetFullId") + "_div"),
              o;
          switch (i) {
              case "server":
                  i = SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_VIEW_CACHE_SERVER");
                  break;
              case "browsercache":
                  i = SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_VIEW_CACHE_MEMORY");
                  break;
              case "nocache":
                  i = SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_VIEW_NOT_CACHED")
          }
          if (SiebelApp.S_App.IsRwd()) {
              o = s.find("div[role=document]"), o = $(o[o.length - 1]);
              var u = o.clone(),
                  a = $(o[0].previousElementSibling).clone();
              u[0].setAttribute("title", r), u[0].setAttribute("aria-label", r), u[0].setAttribute("name", r + "val_name"), u[0].textContent = i, a[0].id = r + "_id", a[0].setAttribute("name", r + "label_name"), a[0].textContent = r, o.after(a[0]), $(a[0]).after(u[0])
          } else {
              o = s.find("td.scLabelRight"), o = o[o.length - 1], o = o.parentElement, tempele = $(o).clone();
              var f = tempele.find(".scLabelRight").find("span");
              f[0].textContent = r, f[0].id = r + "_Label";
              var l = tempele.find(".scField")[1];
              $(l).empty();
              var c = "<table datatable='0' summary='" + r + "' cellpadding='0' cellspacing='0' border='0'>" + "<tbody><tr><td class='scField'>" + "<div role='document' tabindex='0' title='" + r + "' name='" + r + "' aria-label='" + i + "'>" + i + "</div>" + "</td>" + "<td></td>" + "</tr>" + "</tbody>" + "</table>";
              $(l).append(c), $($(o).parent()[0]).append(tempele)
          }
      }, e
  }(), "SiebelAppFacade.AboutViewPR"
})), typeof SiebelApp.S_App.NavigationRenderer == "undefined" && (Namespace("SiebelApp.S_App.NavigationRenderer"), SiebelApp.S_App.NavigationRenderer = function() {
  function n(e) {
      this.screenTabInfo = null, this.selectedTabLinkInfo = null, this.selectedTabKey = null, this.selectedLinkKey = null;
      var t, n, r = !1;
      this.m_containerQTPPS = null, this.m_tabViewLinkContainerQTPPS = null, this.m_navItemsQTP = [], this.m_tabViewLinkItemsQTP = [], this.m_navBarType = null, this.GetConcreteRenderer = function() {
          return t
      }, this.SetConcreteRenderer = function(e) {
          t = e
      }, this.GetType = function() {
          return e
      }, this.SetPreviousSelection = function(e) {
          n = e
      }, this.GetPreviousSelection = function() {
          return n
      }, this.GetDataReload = function() {
          return r
      }, this.SetDataReload = function(e) {
          r = e
      }, this.GetnavBarType = function() {
          return m_navBarType
      }, this.SetnavBarType = function(e) {
          m_navBarType = e
      }
  }

  function r(t) {
      if (e.IsEmpty(t)) return;
      var n = {};
      n.screenName = t.GetProperty(SiebelApp.Constants.get("SWE_PROP_NC_SCREEN_NAME")), n.defaultViewName = t.GetProperty(SiebelApp.Constants.get("SWE_PROP_NC_VIEW_NAME")), n.captionName = t.GetProperty(SiebelApp.Constants.get("SWE_PROP_NC_CAPTION")), n.tabIcon = t.GetProperty(SiebelApp.Constants.get("SWE_PROP_NC_SCREEN_TAB_ICON")), n.tabBmpHTMLAttrib = t.GetProperty(SiebelApp.Constants.get("SWE_PROP_BMP_HTML_ATTRIBUTE"));
      for (var r = 0; r < t.GetChildCount(); r++) t.GetChild(r).GetType() == SiebelApp.Constants.get("SWE_PST_QTP_INFO") && this.m_navItemsQTP.push(t.GetChild(r));
      return n
  }
  var e = SiebelApp.Utils,
      t = SiebelApp.Constants;
  return n.prototype.IsScreen = function() {
          return this.GetType() == t.get("SWE_PROP_NC_ID_SCREEN_CONTROL")
      }, n.prototype.GetNavigationType = function() {
          return this.GetnavBarType()
      }, n.prototype.ProcessObjectInfo = function(e) {
          if (e == null || e == undefined) return;
          var n = e.GetProperty(t.get("SWE_PROP_OUI_PRENDERER"));
          this.SetnavBarType(n);
          var r = e.GetType();
          if (r == SiebelApp.Constants.get("SWE_PROP_NC_SCREENCTRL_INFO")) this.ProcessTabsObjectInfo(e);
          else if (r == SiebelApp.Constants.get("SWE_PROP_NC_FLOATING_TAB_INFO")) this.ProcessFloatingTabObjectInfo(e);
          else if (r == SiebelApp.Constants.get("SWE_PROP_NC_AGGREGATE_INFO") || r == SiebelApp.Constants.get("SWE_PROP_NC_SUBDETAIL_INFO")) this.ProcessLinksObjectInfo(e, !1);
          else {
              if (r != SiebelApp.Constants.get("SWE_PROP_NC_DETAIL_INFO")) return;
              this.ProcessLinksObjectInfo(e, !0)
          }
      }, n.prototype.Show = function() {
          if (this.GetConcreteRenderer() == undefined)
              if (SiebelApp.S_App.IsMobileApplication() === "true") {
                  var e = this.GetnavBarType();
                  e == "NAVIGATION_LAUNCHPAD_TABLET" || e == "NAVIGATION_LAUNCHPAD_PHONE" ? this.SetConcreteRenderer(new SiebelAppFacade.JQMLaunchpadNavRenderer(this, this.GetType())) : this.SetConcreteRenderer(new SiebelAppFacade.JQMNavBarRenderer(this, this.GetType()))
              } else this.SetConcreteRenderer(new SiebelAppFacade.JSTreeRenderer(this, this.GetType()));
          this.GetConcreteRenderer().Show(!this.IsScreen())
      }, n.prototype.ProcessFloatingTabObjectInfo = function(t) {
          if (e.IsEmpty(t) || t.GetType() != SiebelApp.Constants.get("SWE_PROP_NC_FLOATING_TAB_INFO")) return;
          var n = t.GetChild(0);
          if (n.GetType() != SiebelApp.Constants.get("SWE_PROP_NC_ITEM_INFO")) return;
          var i = !1,
              s = 0,
              o = n.GetProperty(SiebelApp.Constants.get("SWE_PROP_NC_SCREEN_NAME"));
          for (var u in this.screenTabInfo) this.screenTabInfo[u]["screenName"] == o && (o = inTabPropSet.GetProperty(SiebelApp.Constants.get("SWE_PROP_NC_SELECTED_INDEX")), o ? this.SetSelectedTabKey(o) : this.SetSelectedTab(u), i = !0), s++;
          if (i) return;
          this.screenTabInfo["tabScreen" + s] = r.call(this, n), this.SetSelectedTabKey(s), this.SetDataReload(!0)
      }, n.prototype.ProcessTabsObjectInfo = function(e) {
          if (e == null || e == undefined) return;
          var t = e.GetChildCount(),
              n = "";
          if (this.screenTabInfo == null || this.screenTabInfo == undefined) this.screenTabInfo = {};
          this.m_navItemsQTP == null && (this.m_navItemsQTP = []);
          for (var i = 0, s = 0; i < t; i++) {
              var o = e.GetChild(i);
              type = o.GetType();
              if (type == SiebelApp.Constants.get("SWE_PST_QTP_INFO")) {
                  this.m_containerQTPPS = o;
                  continue
              }
              if (type != SiebelApp.Constants.get("SWE_PROP_NC_ITEM_INFO")) continue;
              this.screenTabInfo["tabScreen" + s] = r.call(this, o), s++
          }
          n = e.GetProperty(SiebelApp.Constants.get("SWE_PROP_NC_SELECTED_INDEX")), this.SetSelectedTabKey(n), this.SetDataReload(!0)
      }, n.prototype.ProcessLinksObjectInfo =
      function(e, t) {
          if (e == null || e == undefined) return;
          var n = e.GetChildCount(),
              r;
          if (n != 1 || e.GetChild(0).GetType() != SiebelApp.Constants.get("SWE_PST_QTP_INFO")) {
              var i;
              t ? (i = this.screenTabInfo = {}, this.m_tabContainerQTPPS = null, this.m_tabItemsQTP = []) : (i = this.selectedTabLinkInfo = {}, this.m_tabViewLinkContainerQTPPS = null, this.m_tabViewLinkItemsQTP = []);
              for (var s = 0, o = 0; s < n; s++) {
                  var u = {},
                      a = e.GetChild(s);
                  type = a.GetType();
                  if (type == SiebelApp.Constants.get("SWE_PST_QTP_INFO")) {
                      t ? this.m_tabContainerQTPPS = a : this.m_tabViewLinkContainerQTPPS = a;
                      continue
                  }
                  if (type != SiebelApp.Constants.get("SWE_PROP_NC_ITEM_INFO")) continue;
                  r = a.GetProperty(SiebelApp.Constants.get("SWE_PROP_NC_VIEW_NAME")), u.viewName = r, r = a.GetProperty(SiebelApp.Constants.get("SWE_PROP_NC_CAPTION")), u.captionName = r, i[(t ? "tabScreen" : "tabView") + o] = u;
                  for (var f = 0; f < a.GetChildCount(); f++) a.GetChild(f).GetType() == SiebelApp.Constants.get("SWE_PST_QTP_INFO") && (t ? this.m_tabItemsQTP.push(a.GetChild(f)) : this.m_tabViewLinkItemsQTP.push(a.GetChild(f)));
                  o++
              }
          }
          r = e.GetProperty(SiebelApp.Constants.get("SWE_PROP_NC_SELECTED_INDEX")), r != undefined && (t ? this.SetSelectedTabKey(r) : this.SetSelectedLinkKey(r)), this.SetDataReload(!0)
      }, n.prototype.GetTabInfo = function() {
          return this.screenTabInfo
      }, n.prototype.GetTabContainerQTPInfo = function() {
          return this.IsScreen() ? this.m_containerQTPPS : this.m_tabContainerQTPPS
      }, n.prototype.GetTabItemsQTPInfo = function() {
          return this.IsScreen() ? this.m_navItemsQTP : this.m_tabItemsQTP
      }, n.prototype.GetTabViewLinkItemsQTPInfo = function() {
          return this.m_tabViewLinkItemsQTP
      }, n.prototype.GetTabViewLinkContainerQTPInfo = function() {
          return this.m_tabViewLinkContainerQTPPS
      }, n.prototype.GetSelectedTabLinkInfo = function() {
          return this.selectedTabLinkInfo
      }, n.prototype.SetSelectedTab = function(e) {
          this.selectedTab = e
      }, n.prototype.SetSelectedTabKey = function(e) {
          e && (this.selectedTab = "tabScreen" + e)
      }, n.prototype.GetSelectedTabKey = function() {
          return this.selectedTab
      }, n.prototype.SetSelectedLinkKey = function(e) {
          e && (this.selectedLinkKey = "tabView" + e)
      }, n.prototype.GetSelectedLinkKey = function() {
          return this.selectedLinkKey
      }, n
}()), typeof SiebelApp.S_App.NavCtrlMgr == "undefined" && (SiebelJS.Namespace("SiebelApp.S_App.NavCtrlMgr"), SiebelApp.S_App.NavCtrlMgr = function() {
  function s() {
      var e, t, n, r;
      this.pdqPMDone = !1, this.SetVisPM = function(e) {
          t = e
      }, this.GetVisPM = function() {
          return t
      };
      var i;
      this.SetPDQPM = function(e) {
          i = e
      }, this.SetscreenNavigationPM = function(e) {
          n = e
      }, this.GetscreenNavigationPM = function() {
          return n
      }, this.SetdetailNavigationPM = function(e) {
          r = e
      }, this.GetdetailNavigationPM = function() {
          return r
      }, this.SetName = function(e) {
          this.m_name = e
      }, this.GetPDQPM = function() {
          return i
      }, this.GetPDQDone = function() {
          return this.pdqPMDone
      }
  }

  function o(e) {
      this.SetName("NavigationScreenObject"), this.SetscreenNavigationPM(new SiebelAppFacade.NavigationPresentationModel(this, t.get("SWE_PROP_NC_ID_SCREEN_CONTROL"))), this.GetscreenNavigationPM().Init(), this.GetscreenNavigationPM().Setup(e), this.SetName("NavigationDetailObject"), this.SetdetailNavigationPM(new SiebelAppFacade.NavigationPresentationModel(this, t.get("SWE_PROP_NC_ID_VIEW_CONTROL"))), this.GetdetailNavigationPM().Init(), this.GetdetailNavigationPM().Setup(e)
  }
  var e = SiebelApp.Utils,
      t = SiebelApp.Constants,
      n = SiebelApp.S_App.NavigationRenderer,
      r = new n(t.get("SWE_PROP_NC_ID_SCREEN_CONTROL")),
      i = new n(t.get("SWE_PROP_NC_ID_VIEW_CONTROL"));
  return s.prototype.Initialize = function(e) {
      this.SetName("PDQNavCtrlObject"), this.SetPDQPM(new SiebelAppFacade.PDQPresentationModel(this)), this.GetPDQPM().Init(), this.GetPDQPM().Setup(), this.SetName("visiNavCtrlObject"), this.SetVisPM(new SiebelAppFacade.VisDropdownPresentationModel(this)), this.GetVisPM().Init(), this.GetVisPM().Setup(), $("html").addClass("siebui-" + (e.GetProperty(t.get("SWE_PROP_OUI_PRENDERER")) || "").toLowerCase().replace(/_/g, "-")), this.GetFilesAndInitialize(e)
  }, s.prototype.GetPropArray = function() {
      return ["GetPDQDone"]
  }, s.prototype.GetMethodArray = function() {
      return ["Show"]
  }, s.prototype.Refresh = function() {}, s.prototype.GetName = function() {
      return this.m_name
  }, s.prototype.Show = function(e, n) {
      if (SiebelApp.S_App.IsRwd()) {
          var r = this.GetscreenNavigationPM().Get("placeholder");
          e ? this.screenNavigationDone ? this.Refresh() : $("#" + r).length === 1 && (this.GetscreenNavigationPM().Show(), this.screenNavigationDone = !0) : n || (r = this.GetdetailNavigationPM().Get("placeholder"), $("#" + r).length === 1 && (this.GetdetailNavigationPM().Show(), this.GetdetailNavigationPM().SetProperty("GetDataReload", !1))), n && (this.GetPDQPM().Show(), this.pdqPMDone = !0)
      } else {
          if (e)
              if (!this.screenNavigationDone) {
                  if ($("#" + t.get("SWE_PROP_NC_ID_SCREEN_CONTROL")).length === 1) {
                      var i = this;
                      SiebelApp.S_App.AppInitPromise().done(function() {
                          i.GetscreenNavigationPM().Show(), i.screenNavigationDone = !0
                      })
                  }
              } else this.Refresh(), this.GetscreenNavigationPM().SetProperty("GetDataReload", !1);
          else $("#" + t.get("SWE_PROP_NC_ID_VIEW_CONTROL")).length === 1 && (this.GetdetailNavigationPM().SetProperty("GetDataReload", !0), this.GetdetailNavigationPM().Show(), this.GetdetailNavigationPM().SetProperty("GetDataReload", !1));
          this.pdqPMDone || (this.GetPDQPM().Show(), this.pdqPMDone = !0)
      }
      this.GetVisPM() && !e && this.GetVisPM().Show()
  }, s.prototype.ShowVisDropdown = function() {
      this.GetVisPM() && this.GetVisPM().ExecuteMethod("ShowVisDropdown")
  }, s.prototype.ProcessObjectInfo = function(e) {
      if (SiebelApp.S_App.IsMobileApplication() !== "true") return;
      if (e == null || e == undefined) return;
      var t = e.GetType();
      if (t != SiebelApp.Constants.get("SWE_PST_NAV_CTRL_INFO")) return;
      var n = e.GetChildCount(),
          s = SiebelApp.Constants.get("SWE_PROP_NC_SCREENCTRL_INFO"),
          o = SiebelApp.Constants.get("SWE_PROP_NC_AGGREGATE_INFO"),
          u = SiebelApp.Constants.get("SWE_PROP_NC_DETAIL_INFO"),
          a = SiebelApp.Constants.get("SWE_PROP_NC_SUBDETAIL_INFO"),
          f = SiebelApp.Constants.get("SWE_PROP_NC_FLOATING_TAB_INFO");
      for (var l = 0; l < n; l++) {
          var c = e.GetChild(l);
          t = c.GetType();
          switch (t) {
              case o:
              case f:
                  this.DecodePropertySet(c), r.ProcessObjectInfo(c);
                  break;
              case u:
              case a:
                  this.DecodePropertySet(c), i.ProcessObjectInfo(c);
                  break;
              case s:
                  r.ProcessObjectInfo(c)
          }
      }
  }, s.prototype.GetFilesAndInitialize = function(n) {
      if (!e.IsEmpty(n)) {
          var r = n.GetChildByType(t.get("SWE_PST_NAV_CTRL_INFO")),
              i = n.GetChildByType(t.get("SWE_PST_CLIENT_DESCRIPTOR_INFO")),
              s = i.GetProperty(t.get("SWE_PST_CLIENT_DESCRIPTOR_JSFILES"));
          if (!e.IsEmpty(s)) {
              var u = [];
              CCFMiscUtil_StringToArray(s, u);
              var a = u.length;
              for (var f = 0; f < a; f++) u[f].substr(-3) === ".js" && (u[f] = u[f].substr(0, u[f].length - 3));
              if (u.length > 0) {
                  var l = this,
                      c, h;

                  function p() {
                      try {
                          u.length && (h = require(u[u.length - 1]), c = require(u[u.length - 2])), c && r.SetProperty(SiebelApp.Constants.get("SWE_UIDEF_PM_CTR"), c), h && r.SetProperty(SiebelApp.Constants.get("SWE_UIDEF_PR_CTR"), h), o.call(l, r)
                      } catch (e) {}
                      n = l = null
                  }
                  var d = e.PrepareModuleInfo(n);
                  d.length > 0 ? require(d, p) : p()
              }
              fileArray = null
          }
      }
  }, s.prototype.HandleResponsePS = function(e) {
      this.GetPDQPM().HandleResponsePS(e), this.GetVisPM().HandleResponsePS(e), this.GetscreenNavigationPM().HandleResponsePS(e), this.GetdetailNavigationPM().HandleResponsePS(e)
  }, s.prototype.HandleNotify = function(e) {
      this.GetPDQPM().HandleNotify(e), this.GetVisPM().HandleNotify(e), this.GetscreenNavigationPM().HandleNotify(e), this.GetdetailNavigationPM().HandleNotify(e)
  }, s.prototype.InvokeMethod = function(e, t) {
      if (e == "ExecuteNamedQuery") return SiebelApp.S_App.InvokeMethod(SiebelApp.Constants.get("SWE_METHOD_EXECUTENAMEQUERY"), t, !0)
  }, s.prototype.DecodePropertySet = function(e) {
      var t = !0,
          n = null,
          r = null,
          i = SiebelApp.S_App;
      r = e.GetType();
      if (r == SiebelApp.Constants.get("SWE_PROP_NC_PDQ_INFO") || r == SiebelApp.Constants.get("SWE_PST_QTP_INFO")) return;
      for (t = !0;
          (n = e.EnumProperties(t)) != null; t = !1)
          if (n != SiebelApp.Constants.get("SWE_PROP_NC_SELECTED_INDEX")) {
              r = e.GetProperty(n);
              if (i == null || i == undefined) break;
              var s = i.LookupStringCache(r);
              if (SiebelApp.S_App.IsRwd()) {
                  if (!s && r) continue
              } else if (s === null || s === undefined) continue;
              e.SetProperty(n, s)
          } var o = e.GetChildCount();
      for (var u = 0; u < o; u++) e.GetType() != SiebelApp.Constants.get("SWE_PST_QTP_INFO") && this.DecodePropertySet(e.GetChild(u))
  }, s.prototype.FocusNavLink = function(e) {}, new s
}()), typeof SiebelAppFacade.PDQPresentationModel == "undefined" && (SiebelJS.Namespace("SiebelAppFacade.PDQPresentationModel"), define("siebel/pdqpmodel", ["siebel/pmodel"], function() {
  return SiebelAppFacade.PDQPresentationModel = function() {
      function n(e) {
          this.constructor.superclass.constructor.call(this, e)
      }

      function r(t) {
          var n = t.GetProperty("SHOW_EMPTY_STRING");
          SiebelApp.S_App.IsRwd() && t.GetProperty(e.get("SWE_PROP_TMPL_ITM_HOLDER")) && this.SetProperty("GetContainer", t.GetProperty(e.get("SWE_PROP_TMPL_ITM_HOLDER"))), String(n) === "TRUE" ? i.call(this) : (this.SetProperty("CleanPdq", !0), this.AddProperty("PDQItem", s.call(this, t)), u.call(this, t)), n = t.GetProperty(e.get("SWE_PROP_NC_SELECTED_INDEX")), n !== "" && 0 <= n && n < this.Get("PDQItem").length ? (this.AddProperty("SelectedPDQItem", n), this.SetProperty("PrevSelectedPQDItem", n)) : this.Get("CleanPdq") === !0 && i.call(this), this.SetProperty("CleanPdq", !1);
          return
      }

      function i() {
          this.SetProperty("SelectedPDQItem", 0), this.SetProperty("PrevSelectedPQDItem", 0);
          var e = this.Get("PDQItem") || [];
          e[0] !== "" && e.unshift(""), this.SetProperty("PDQItem", e)
      }

      function s(n) {
          var r = [];
          if (n) {
              var i = n.GetChildCount();
              for (var s = 0; s < i; s++) {
                  var o = n.GetChild(s),
                      u = o.GetProperty(e.get("SWE_PROP_NC_CAPTION"));
                  t.IsEmpty(u) || r.push(u)
              }
          }
          return r
      }

      function o(t) {
          var n = t.GetChildCount(),
              r = [];
          for (var i = 0; i < n; i++) {
              var s = t.GetChild(i),
                  o = s.GetChildCount();
              if (o > 0)
                  for (var u = 0; u < o; u++) s.GetChild(u).GetType() === e.get("SWE_PST_QTP_INFO") && r.push(s.GetChild(u))
          }
          return r
      }

      function u(t) {
          var n = t.GetChildCount();
          for (var r = 0; r < n; r++) {
              var i = t.GetChild(r);
              if (i.GetType() === e.get("SWE_PST_QTP_INFO")) {
                  this.AddProperty("PDQComboBoxQTPPS", i);
                  break
              }
          }
          this.AddProperty("PDQItemQTPInfo", o.call(this, t))
      }
      var e = SiebelJS.Dependency("SiebelApp.Constants"),
          t = SiebelJS.Dependency("SiebelApp.Utils");
      return SiebelJS.Extend(n, SiebelAppFacade.BasePM), n.prototype.Init = function() {
          SiebelApp.S_App.IsRwd() ? (SiebelAppFacade.PDQPresentationModel.superclass.Init.call(this), this.AddProperty("GetContainer", "")) : this.AddProperty("GetContainer", "s_pdq"), this.AddProperty("PDQRefresh", !1), this.AddProperty("bInQueryState", !1), this.AddProperty("PrevSelectedPQDItem", 0), this.AddMethod("InvokeMethod", null, {
              core: !0
          }), this.AttachEventHandler("PDQSelect", function(t) {
              if (this.Get("SelectedPDQItem") == t || t === -1) return;
              var n = this.Get("PDQItem");
              if (n && n[t] == "") {
                  t = this.Get("SelectedPDQItem"), this.AddProperty("SelectedPDQItem", t), this.SetProperty("PDQRefresh", !0);
                  return
              }
              this.SetProperty("PrevSelectedPQDItem", this.Get("SelectedPDQItem")), this.AddProperty("SelectedPDQItem", t);
              var r = CCFMiscUtil_CreatePropSet();
              r.SetProperty(e.get("SWE_PROP_QUERYNAME"), n[t]);
              if (!this.ExecuteMethod("InvokeMethod", e.get("SWE_METHOD_EXECUTENAMEQUERY"), r)) {
                  this.SetProperty("SelectedPDQItem", this.Get("PrevSelectedPQDItem")), this.SetProperty("PDQRefresh", !0);
                  return
              }
          }, {
              core: !0
          }), this.AttachPSHandler(e.get("SWE_PROP_NC_PDQ_INFO"), function(e) {
              var t = this;
              SiebelApp.S_App.AppInitPromise().done(function() {
                  r.call(t, e), SiebelApp.S_App.IsRwd() && t.Get("GetPDQDone") != 1 && t.ExecuteMethod("Show", !1, !0), t.SetProperty("PDQRefresh", !0)
              })
          }), this.AttachNotificationHandler(e.get("SWE_PROP_BC_NOTI_STATE_CHANGED"), function(t) {
              var n = t.GetProperty("state"),
                  i = this.Get("bInQueryState");
              if (n === "bInQueryState") this.SetProperty("bInQueryState", !0);
              else if (n === "bExecuted" && i) {
                  var s = CCFMiscUtil_CreatePropSet();
                  s.SetType(e.get("SWE_PROP_NC_PDQ_INFO")), s.SetProperty("SHOW_EMPTY_STRING", "TRUE"), r.call(this, s), this.SetProperty("PDQRefresh", !0), this.SetProperty("bInQueryState", !1)
              }
          })
      }, n.prototype.Setup = function() {
          var e = CCFMiscUtil_CreatePropSet();
          e.SetProperty("SWE_OUI_RENDERER", "PDQPhyRenderer"), SiebelAppFacade.PDQPresentationModel.superclass.Setup.call(this, e)
      }, n
  }(), "SiebelAppFacade.PDQPresentationModel"
})), typeof SiebelAppFacade.PDQPhyRenderer == "undefined" && (SiebelJS.Namespace("SiebelAppFacade.PDQPhyRenderer"), define("siebel/pdqphyrenderer", ["siebel/basephyrenderer"], function() {
  return SiebelAppFacade.PDQPhyRenderer = function() {
      function n(e) {
          SiebelAppFacade.PDQPhyRenderer.superclass.constructor.call(this, e)
      }

      function r(e) {
          var n = t.get("SWE_PROP_QTP_OT"),
              r = t.get("SWE_PROP_QTP_RN"),
              i = t.get("SWE_PROP_QTP_UN"),
              s = this.GetPM().Get("PDQComboBoxQTPPS"),
              o = this.GetPM().Get("PDQItemQTPInfo") || [];
          SiebelApp.S_App.IsRwd() || s && typeof s.GetProperty == "function" && e.attr({
              ot: s.GetProperty(n),
              rn: s.GetProperty(r),
              un: s.GetProperty(i)
          });
          var u = o.length;
          for (var a = 0; a < u; a++)
              if (o[a] && typeof o[a].GetProperty == "function") {
                  var f = o[a].GetProperty(i),
                      l = o[a].GetProperty(n),
                      c = o[a].GetProperty(r),
                      h = $(e).children().eq(a);
                  h.length === 1 && h.attr({
                      ot: l,
                      rn: c,
                      un: f
                  })
              }
      }
      var e = SiebelJS.Dependency("SiebelApp.Utils"),
          t = SiebelJS.Dependency("SiebelApp.Constants");
      return SiebelJS.Extend(n, SiebelAppFacade.BasePR), n.prototype.Init = function() {
          SiebelAppFacade.PDQPhyRenderer.superclass.Init.call(this), this.AttachPMBinding("PDQRefresh", this.BindData)
      }, n.prototype.ShowUI = function() {
          SiebelAppFacade.PDQPhyRenderer.superclass.ShowUI.call(this);
          if (e.IsTrue(SiebelApp.S_App.GetAccessibilityEnhanced())) {
              var t = SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_PDQ_TITLE");
              if (SiebelApp.S_App.IsRwd()) $("#" + this.GetPM().Get("GetContainer")).attr("title", t).parent().attr({
                  role: "navigation",
                  title: t
              });
              else {
                  var n = this.GetPM().Get("GetContainer");
                  $("[name=" + n + "]").attr("title", t).parent().attr({
                      role: "navigation",
                      title: t
                  })
              }
          }
          SiebelAppFacade.LegacyCssSupport.addLegacyClass($("#" + n))
      }, n.prototype.BindEvents = function() {
          SiebelAppFacade.PDQPhyRenderer.superclass.BindEvents.call(this), SiebelApp.S_App.IsRwd() ? $("#" + this.GetPM().Get("GetContainer")).bind("click keypress blur", {
              ctx: this
          }, function(e) {
              (e.type !== "keypress" || e.which === $.ui.keyCode.ENTER) && e.data.ctx.GetPM().OnControlEvent("PDQSelect", $(this)[0].selectedIndex)
          }) : $("[name=" + this.GetPM().Get("GetContainer") + "]").bind("click keypress blur", {
              ctx: this
          }, function(e) {
              (e.type !== "keypress" || e.which === $.ui.keyCode.ENTER) && e.data.ctx.GetPM().OnControlEvent("PDQSelect", $(this)[0].selectedIndex)
          })
      }, n.prototype.BindData = function() {
          SiebelAppFacade.PDQPhyRenderer.superclass.BindData.call(this);
          var e = this.GetPM(),
              t;
          SiebelApp.S_App.IsRwd() ? t = $("#" + this.GetPM().Get("GetContainer")) : t = $("[name=" + e.Get("GetContainer") + "]");
          if (t.length !== 1) {
              SiebelJS.Debug("Can't find single instance of PDQ - [" + e.Get("GetContainer") + "]");
              return
          }
          var n = e.Get("PDQItem") || [],
              i = "",
              s = e.Get("SelectedPDQItem"),
              o = n.length;
          for (var u = 0; u < o; u++) {
              var a = n[u];
              i += "<option" + (Number(s) === u ? " selected" : "") + ">" + HtmlEncode(a) + "</option>"
          }
          t.html(i), r.call(this, t), t = null
      }, n
  }(), "SiebelAppFacade.PDQPhyRenderer"
})), typeof SiebelAppFacade.VisDropdownPresentationModel == "undefined" && (SiebelJS.Namespace("SiebelAppFacade.VisDropdownPresentationModel"), define("siebel/visibilitydropdownpmodel", ["siebel/pmodel"], function() {
  return SiebelAppFacade.VisDropdownPresentationModel = function() {
      function n(e) {
          SiebelAppFacade.VisDropdownPresentationModel.superclass.constructor.call(this, e)
      }

      function r(n) {
          if (n === null || n === undefined) return;
          var r = n.GetChildCount(),
              s = [],
              o = e.get("SWE_PST_QTP_INFO"),
              u = e.get("SWE_PROP_NC_ITEM_INFO"),
              a = [];
          if (SiebelApp.S_App.IsRwd()) {
              var f = SiebelApp.S_App.GetActiveView();
              f && f.IsObjResponsive && t.IsTrue(f.IsObjResponsive()) ? this.SetProperty("GetContainer", n.GetProperty(e.get("SWE_PROP_TMPL_ITM_HOLDER"))) : this.SetProperty("GetContainer", "s_vis_div")
          }
          var l = parseInt(n.GetProperty(e.get("SWE_PROP_NC_SELECTED_INDEX")), 10);
          for (var c = 0; c < r; c++) {
              var h = n.GetChild(c),
                  p = h.GetType();
              if (p === o) {
                  this.AddProperty("VisDropdownComboBoxQTPPS", h);
                  continue
              }
              if (p !== u) continue;
              var d = i.call(this, h);
              s.push(d), l === s.length - 1 && (this.AddProperty("SelectedItem", String(d.captionName)), this.AddProperty("SelectedItemIndex", l));
              if (h.GetChildCount() > 0)
                  for (var v = 0; v < h.GetChildCount(); v++) h.GetChild(v).GetType() === o && a.push(h.GetChild(v))
          }
          this.AddProperty("VisDropDownItemQTPInfo", a), this.AddProperty("VisDropDownItem", s)
      }

      function i(n) {
          if (t.IsEmpty(n)) return;
          var r = {};
          return r.screenName = n.GetProperty(e.get("SWE_PROP_NC_SCREEN_NAME")), r.defaultViewName = n.GetProperty(e.get("SWE_PROP_NC_VIEW_NAME")), r.captionName = n.GetProperty(e.get("SWE_PROP_NC_CAPTION")), r.tabIcon = n.GetProperty(e.get("SWE_PROP_NC_SCREEN_TAB_ICON")), r
      }
      var e = SiebelJS.Dependency("SiebelApp.Constants"),
          t = SiebelJS.Dependency("SiebelApp.Utils");
      return SiebelJS.Extend(n, SiebelAppFacade.PresentationModel), n.prototype.Init = function() {
          this.AddProperty("GetContainer", "s_vis_div"), this.AddProperty("ResetVisDropdown", !1), this.AddMethod("DecodePropertySet", null, {
              core: !0
          }), this.AddMethod("ShowVisDropdown", function() {}), this.AttachEventHandler("OnClick", function(e) {
              var t = parseInt(e, 10),
                  n = this.Get("SelectedItemIndex");
              if (n === t) return;
              var r = this.Get("VisDropDownItem"),
                  i = r[t].defaultViewName,
                  s = r[t].captionName,
                  o = String(this.Get("SelectedItem"));
              this.SetProperty("SelectedItem", s), this.SetProperty("SelectedItemIndex", t);
              var u = SiebelApp.S_App.GotoView(i, "", "", "");
              u !== undefined && !u && (this.SetProperty("SelectedItem", o), this.SetProperty("SelectedItemIndex", n), this.SetProperty("ResetVisDropdown", !0))
          }, {
              core: !0
          }), this.AttachPSHandler(e.get("SWE_PROP_NC_VISIBILITY_INFO"), function(e) {
              this.ExecuteMethod("DecodePropertySet", e), r.call(this, e)
          })
      }, n.prototype.Setup = function() {
          var e = CCFMiscUtil_CreatePropSet();
          SiebelApp.S_App.IsMobileApplication() === "true" ? e.SetProperty("SWE_OUI_RENDERER", "JQMVisDropdownPhyRenderer") : e.SetProperty("SWE_OUI_RENDERER", "VisDropdownPhyRenderer"), SiebelAppFacade.VisDropdownPresentationModel.superclass.Setup.call(this, e)
      }, n
  }(), "SiebelAppFacade.VisDropdownPresentationModel"
})), typeof SiebelAppFacade.VisDropdownPhyRenderer == "undefined" && (SiebelJS.Namespace("SiebelAppFacade.VisDropdownPhyRenderer"), define("siebel/visibilitydropdownprenderer", ["siebel/basephyrenderer"], function() {
  return SiebelAppFacade.VisDropdownPhyRenderer = function() {
      function n(e) {
          SiebelAppFacade.VisDropdownPhyRenderer.superclass.constructor.call(this, e)
      }

      function r() {
          var e = this.GetPM().Get("GetContainer");
          $("#" + e).find("select").length === 0 && this.GetPM().Show()
      }

      function i(t) {
          var n = this.GetPM().Get("VisDropdownComboBoxQTPPS"),
              r = this.GetPM().Get("VisDropDownItemQTPInfo"),
              i = e.get("SWE_PROP_QTP_OT"),
              s = e.get("SWE_PROP_QTP_RN"),
              o = e.get("SWE_PROP_QTP_UN");
          n && typeof n.
          GetProperty == "function" && t.attr("ot", n.GetProperty(i)).attr("rn", n.GetProperty(s)).attr("un", n.GetProperty(o));
          var u = $(t).children("option");
          if (r) {
              var a = r.length;
              for (var f = 0; f < a; f++)
                  if (r[f] && typeof r[f].GetProperty == "function") {
                      var l = r[f].GetProperty(o),
                          c = r[f].GetProperty(i),
                          h = r[f].GetProperty(s),
                          p = u.length;
                      for (var d = 0; d < p; d++) {
                          var v = u[d];
                          v.value === l && $(v).attr({
                              ot: c,
                              rn: h,
                              un: l
                          })
                      }
                  }
          }
      }

      function s() {
          $("[name=" + this.GetPM().Get("GetContainer") + "]")[0].selectedIndex = this.GetPM().Get("SelectedItemIndex")
      }
      var e = SiebelJS.Dependency("SiebelApp.Constants"),
          t = SiebelJS.Dependency("SiebelApp.Utils");
      return SiebelJS.Extend(n, SiebelAppFacade.BasePR), n.prototype.Init = function() {
          SiebelAppFacade.VisDropdownPhyRenderer.superclass.Init.call(this), this.AttachPMBinding("ResetVisDropdown", s), this.AttachPMBinding("ShowVisDropdown", r)
      }, n.prototype.ShowUI = function() {
          SiebelAppFacade.VisDropdownPhyRenderer.superclass.ShowUI.call(this);
          var e = this.GetPM().Get("GetContainer");
          $("#" + e).html("<select name=" + e + " ></select>");
          if (t.IsTrue(SiebelApp.S_App.GetAccessibilityEnhanced())) {
              var n = SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_VISIBILITY_TITLE");
              $("[name=" + e + "]").attr("title", n).parent().attr({
                  role: "navigation",
                  title: n
              })
          }
          SiebelAppFacade.LegacyCssSupport.addLegacyClass($("#" + this.GetPM().Get("GetPlaceHolder")))
      }, n.prototype.BindEvents = function() {
          SiebelAppFacade.VisDropdownPhyRenderer.superclass.BindEvents.call(this), $("[name=" + this.GetPM().Get("GetContainer") + "]").bind("click keypress blur", {
              ctx: this
          }, function(e) {
              (e.type !== "keypress" || e.which === $.ui.keyCode.ENTER) && e.data.ctx.GetPM().OnControlEvent("OnClick", $(this)[0].selectedIndex)
          })
      }, n.prototype.BindData = function() {
          SiebelAppFacade.VisDropdownPhyRenderer.superclass.BindData.call(this);
          var e = this.GetPM(),
              t = $("[name=" + e.Get("GetContainer") + "]"),
              n = e.Get("VisDropDownItem"),
              r = e.Get("SelectedItemIndex"),
              s = "";
          if (n) {
              var o = n.length;
              for (var u = 0; u < o; u++) {
                  var a = n[u].captionName;
                  s += "<option" + (r === u ? " selected" : "") + ">" + a + "</option>"
              }
          }
          t.html(s), i.call(this, t), t = null
      }, n.prototype.SetFocus = function() {
          $("[name=" + this.GetPM().Get("GetContainer") + "]").focus()
      }, n
  }(), "SiebelAppFacade.VisDropdownPhyRenderer"
})), typeof SiebelApp.S_App.DatumObject == "undefined" && (SiebelJS.Namespace("SiebelApp.S_App.DatumObject"), SiebelApp.S_App.DatumObject = function() {
  function e() {
      this.m_sFormat = "", this.m_bError = !1, this.m_bNull = !0
  }
  return e.prototype.GetAsFormattedString = function(e) {
      return this.GetAsString()
  }, e.prototype.GetAsString = function() {
      return ""
  }, e.prototype.GetDataType = function() {
      return SiebelApp.Constants.get("DTYPE_UNKNOWN")
  }, e.prototype.GetFormat = function() {
      return this.m_sFormat
  }, e.prototype.SetAsFormattedString = function(e, t) {
      this.SetAsString(e)
  }, e.prototype.SetAsString = function(e) {
      this.SetError(!0)
  }, e.prototype.IsError = function() {
      return this.m_bError
  }, e.prototype.IsNull = function() {
      return this.m_bNull
  }, e.prototype.SetError = function(e) {
      this.m_bError = e
  }, e.prototype.SetFormat = function(e) {
      this.m_sFormat = e
  }, e
}()), typeof SiebelApp.S_App.DatumBoolObject == "undefined" && (SiebelJS.Namespace("SiebelApp.S_App.DatumBoolObject"), SiebelApp.S_App.DatumBoolObject = function() {
  function e(e) {
      SiebelApp.S_App.DatumBoolObject.superclass.constructor.call(this), this.m_bValue = e
  }
  return SiebelJS.Extend(e, SiebelApp.S_App.DatumObject), e.prototype.GetAsString = function() {
      var e;
      return this.m_bNull ? e = "" : e = this.m_bValue ? "Y" : "N", e
  }, e.prototype.GetDataType = function() {
      return SiebelApp.Constants.get("DTYPE_BOOL")
  }, e.prototype.SetAsString = function(e) {
      e && e.length !== 0 ? (this.m_bNull = !1, this.m_bValue = e === "Y" || e === "y" || e === "1") : (this.m_bNull = !0, this.m_bValue = !1)
  }, e.prototype.GetValue = function() {
      return this.m_bValue
  }, e.prototype.SetValue = function(e) {
      this.m_bNull = !1, this.m_bValue = e
  }, e
}());
if (typeof SiebelApp.S_App.DatumPhoneObject == "undefined") {
  SiebelJS.Namespace("SiebelApp.S_App.DatumPhoneObject");
  var utils = SiebelApp.Utils,
      consts = SiebelApp.Constants;
  SiebelApp.S_App.DatumPhoneObject = function() {
      function e() {
          SiebelApp.S_App.DatumPhoneObject.superclass.constructor.call(this), this.m_sValue = "", this.m_sCountry = "", this.m_sFormat = "", this.m_bCustomFormat = !1, this.m_bLeadingZeroRemoved = !1
      }
      return SiebelJS.Extend(e, SiebelApp.S_App.DatumObject), e.prototype.GetAsFormattedString = function(e) {
          var t = 0,
              n = 0,
              r, i, s, o = !1,
              u = "";
          if ((this.m_sCountry || this.m_sCountry === "") && this.m_sCountry.length === 0 && this.m_sValue && this.m_sValue.length > 0 && this.m_sValue[0] === "0") return u += "?", u += this.m_sValue.toString().replace(/,/g, ""), u;
          this.m_sCountry.length > 0 && this.m_sCountry !== SiebelApp.S_App.LocaleObject.GetProfile(consts.get("LOCAL_PHONE_COUNTRY")) && (u = SiebelApp.S_App.LocaleObject.GetProfile(consts.get("LOCAL_PHONE_CTRY_FORMAT")), r = u.indexOf("+"), u = r === -1 ? this.m_sCountry : u.substring(0, r) + this.m_sCountry + u.substring(r + 1));
          if (!this.m_sValue || this.m_sValue.length === 0) return u;
          e.length === 0 && (e = this.m_sFormat), o = SiebelApp.S_App.IsPhoneLeadingZeroAllowed(this.m_sCountry);
          if (!e) return u.length === 0 && o && (u += "0"), u += this.m_sValue.toString().replace(/,/g, ""), u;
          s = this.m_sValue.toString().replace(/,/g, ""), u.length === 0 && o && (this.m_bCustomFormat && !this.m_bLeadingZeroRemoved && (this.m_sFormat = [this.m_sFormat.slice(0, this.m_sFormat.indexOf(0)), "#", this.m_sFormat.slice(this.m_sFormat.indexOf(0))].join("")), s = "0" + s);
          if (this.m_sFormat)
              for (var a = 0; this.m_sFormat[a]; a++) switch (this.m_sFormat[a]) {
                  case "0":
                      t++;
                  case "#":
                      n++
              }
          if (s.length < t) return u += s, u;
          var f = 0,
              l = 0;
          if (this.m_sFormat)
              for (i = 0; i < this.m_sFormat.length; i++) switch (this.m_sFormat[i]) {
                  case "0":
                      l++;
                      break;
                  case "#":
                      s.length >= n ? l++ : n--;
                      break;
                  default:
                      f < l && (u += s.substring(f, f + (l - f)), f = l), u += this.m_sFormat[i]
              }
          return f < l && (u += s.substring(f, f + (l - f))), l < s.length && (u += SiebelApp.S_App.LocaleObject.GetProfile(consts.get("LOCAL_PHONE_EXT_FORMAT")), u += s.substring(l)), u
      }, e.prototype.GetAsString = function() {
          var e = "";
          return this.m_sCountry !== "+1" && (e = this.m_sCountry), e += this.m_sValue, this.m_bCustomFormat && (e += "\n", e += this.m_sFormat), e
      }, e.prototype.GetDataType = function() {
          return consts.get("DTYPE_PHONE")
      }, e.prototype.SetAsFormattedString = function(e, t) {
          var n = "",
              r = !1;
          this.m_sValue =
              e, this.m_sCountry = "", this.m_sFormat = "", this.m_bCustomFormat = !1, this.m_bLeadingZeroRemoved = !1;
          if (this.m_sValue.length === 0) return;
          this.m_sValue instanceof Array && (this.m_sValue = this.m_sValue.join(""));
          if (this.m_sValue.length > 1 && this.m_sValue[0] === "?" && this.m_sValue[1] === "0") {
              this.m_sValue = this.m_sValue.substring(1);
              return
          }
          var i, s = "",
              o = this.Extract(this.m_sValue, this.m_sFormat);
          this.m_sValue = o.sValue, this.m_sFormat = o.sFormat;
          if (this.m_sValue.length === 0 || this.m_sValue[0] !== "+") s = SiebelApp.S_App.LocaleObject.GetProfile(consts.get("LOCAL_PHONE_COUNTRY"));
          if (this.m_sValue.length >= e.length) this.SetAsString(s + this.m_sValue);
          else {
              r = SiebelApp.S_App.IsPhoneLeadingZeroAllowed(s);
              var u = new SiebelApp.S_App.DatumPhoneObject;
              u.SetAsString(s + this.m_sValue), n = u.GetAsFormattedString(this.m_sFormat);
              if (e === n || r && n && n.length !== 0 && n[0] === "0" && n.substring(1) === e) this.Copy(u);
              else {
                  this.m_bCustomFormat = !0, this.m_sValue = u.GetValue(), this.m_sCountry = u.GetCountry(), this.m_bLeadingZeroRemoved = u.m_bLeadingZeroRemoved;
                  if (s.length === 0) this.m_sFormat = this.CleanFormat(this.m_sFormat, this.m_sCountry.length);
                  else {
                      this.m_sFormat = this.CleanFormat(this.m_sFormat, 0);
                      if (this.m_sCountry.length === 0) {
                          var a = SiebelApp.S_App.LocaleObject.GetProfile(consts.get("LOCAL_PHONE_CTRY_FORMAT"));
                          (i = a.indexOf("+")) !== -1 ? this.m_sFormat = a.substring(0, i) + this.MakeString("0", s.length) + a.substring(i + 1) + this.m_sFormat : this.m_sFormat = this.MakeString("0", s.length) + this.m_sFormat
                      }
                  }
                  this.m_bLeadingZeroRemoved && this.m_sFormat.replace("0", "#")
              }
          }
          if (this.IsError()) {
              this.SetDefaults();
              return
          }
          if (this.m_sCountry === "+1") {
              if (this.m_sValue.length < 10 || this.m_sValue[0] === "0") {
                  this.SetDefaults();
                  return
              }
              this.m_bCustomFormat = !1;
              var f = SiebelApp.S_App.LocaleObject.GetPhoneFormat("+1", this.m_sCountry, this.m_sFormat);
              this.m_sCountry = f.sPhoneCountry, this.m_sFormat = f.sFormat
          }
          n = this.GetAsString();
          if (n.length > 40) {
              this.SetDefaults();
              return
          }
          return
      }, e.prototype.SetDefaults = function() {
          this.m_sValue = "", this.m_sFormat = "", this.m_sCountry = "", this.m_bCustomFormat = !1, this.m_bLeadingZeroRemoved = !1, this.SetError(!0)
      }, e.prototype.SetAsString = function(e) {
          var t = !1;
          this.m_sValue = e, this.m_bCustomFormat = !1, this.m_bLeadingZeroRemoved = !1, this.m_sCountry = "", this.m_sFormat = "";
          if (!this.m_sValue || this.m_sValue.length === 0) return;
          if (this.m_sValue[0] === "0") return;
          var n = 0,
              r = 0,
              i = "";
          if ((n = this.m_sValue.indexOf("\n")) !== -1) {
              this.m_sFormat = this.m_sValue.substring(n + 1), this.m_sValue = this.m_sValue.substring(0, n), this.m_bCustomFormat = !0;
              if (this.m_sValue[0] === "+") {
                  var s = SiebelApp.S_App.LocaleObject.GetPhoneFormat(this.m_sValue, this.m_sCountry, i);
                  this.m_sValue = s.sPhoneNumber, this.m_sCountry = s.sPhoneCountry, i = s.sFormat
              } else this.m_sCountry = "+1";
              return
          }
          var o = this.Extract(this.m_sValue, this.m_sFormat);
          this.m_sValue = o.sValue, this.m_sFormat = o.sFormat;
          if (this.m_sValue.length < e.length) {
              this.m_bCustomFormat = !0;
              var u;
              this.m_sValue[0] === "+" ? (u = SiebelApp.S_App.LocaleObject.GetPhoneFormat(this.m_sValue, this.m_sCountry, i), this.m_sValue = u.sPhoneNumber, this.m_sCountry = u.sPhoneCountry, i = u.sFormat, this.m_sFormat = this.CleanFormat(this.m_sFormat, this.m_sCountry.length)) : (u = SiebelApp.S_App.LocaleObject.GetPhoneFormat("+1", this.m_sCountry, i), this.m_sCountry = u.sPhoneCountry, i = u.sFormat, this.m_sFormat = this.CleanFormat(this.m_sFormat, 0)), this.m_sCountry === "+1" && this.m_sValue.length >= 10 && (this.m_bCustomFormat = !1, this.m_sFormat = i), t = SiebelApp.S_App.IsPhoneLeadingZeroAllowed(this.m_sCountry), !!this.m_sValue && this.m_sValue.length !== 0 && this.m_sValue[0] === "0" && t && (this.m_sValue = this.m_sValue.substring(1), this.m_sFormat.replace("0", "#"), this.m_bLeadingZeroRemoved = !0);
              return
          }
          var a;
          this.m_sValue[0] === "+" ? (a = SiebelApp.S_App.LocaleObject.GetPhoneFormat(this.m_sValue, this.m_sCountry, this.m_sFormat), this.m_sValue = a.sPhoneNumber, this.m_sCountry = a.sPhoneCountry, this.m_sFormat = a.sFormat) : (a = SiebelApp.S_App.LocaleObject.GetPhoneFormat("+1", this.m_sCountry, this.m_sFormat), this.m_sCountry = a.sPhoneCountry, this.m_sFormat = a.sFormat), t = SiebelApp.S_App.IsPhoneLeadingZeroAllowed(this.m_sCountry), !!this.m_sValue && this.m_sValue.length !== 0 && this.m_sValue[0] === "0" && t && (this.m_sValue = this.m_sValue.substring(1), this.m_bLeadingZeroRemoved = !0);
          if (this.m_sFormat) {
              for (n = 0, r = 0; n < this.m_sFormat.length; n++) this.m_sFormat[n] === "0" && r++;
              t ? this.m_sValue.length + 1 < r && (this.m_sFormat = "") : this.m_sValue.length < r && (this.m_sFormat = "")
          }
          return
      }, e.prototype.SetFormat = function(e) {
          return
      }, e.prototype.SetValue = function(e) {
          this.SetAsString(e)
      }, e.prototype.GetValue = function() {
          return this.m_sValue
      }, e.prototype.GetCountry = function() {
          return this.m_sCountry
      }, e.prototype.IsCustomFormat = function() {
          return this.m_bCustomFormat
      }, e.prototype.Copy = function(e) {
          if (!e) return;
          this.m_sValue = e.GetValue(), this.m_sCountry = e.GetCountry(), this.m_sFormat = e.GetFormat(), this.m_bCustomFormat = e.IsCustomFormat()
      }, e.prototype.Extract = function(e, t) {
          var n, r, i, s, o = [],
              u = [],
              a = e,
              f = SiebelApp.S_App.LocaleObject.GetProfile(consts.get("LOCAL_PHONE_EXT_FORMAT"));
          if (e.length === 0) return {
              sValue: e,
              sFormat: t
          };
          if (e.length >= 128) return {
              sValue: e,
              sFormat: t
          };
          while ((r = a.indexOf(f)) !== -1) a = a.substring(r + f.length);
          n = e.length - a.length - f.length;
          for (r = 0, i = 0, s = 0; r < e.length; r++) {
              if (r === n) {
                  for (var l = 0; l < f.length; l++) u[s + l] = f[l];
                  r += f.length - 1, s += f.length;
                  continue
              }
              var c = e[r],
                  h = c.charCodeAt();
              if (h > 255) return this.SetError(!0), o[i] = "\0", u[s] = "\0", e = o, t = u, {
                  sValue: e,
                  sFormat: t
              };
              c >= "0" && c <= "9" || c >= "a" && c <= "z" || c >= "A" && c <= "Z" || c === "#" || c === "*" || i === 0 && c === "+" ? (o[i++] = c, u[s++] = "0") : u[s++] = c
          }
          return e = o.join(""), t = u.join(""), {
              sValue: e,
              sFormat: t
          }
      }, e.prototype.CleanFormat = function(e, t) {
          var n, r, i = SiebelApp.S_App.LocaleObject.GetProfile(consts.get("LOCAL_PHONE_CTRY_FORMAT")),
              s = SiebelApp.S_App.LocaleObject.GetProfile(consts.get("LOCAL_PHONE_EXT_FORMAT"));
          for (n = 0, r = 0; n < e.length && r < t; n++) e[n] === "0" && r++;
          if (r === t && r > 0 && (r = i.indexOf("+")) !== -1)
              for (r++; n < e.length && r < i.length; n++, r++)
                  if (e[n] !== i[r]) break;
          e = e.substring(n);
          if ((n = e.indexOf(s)) !== -1) {
              var o = e.substring(n + s.length);
              while ((n = o.indexOf(s)) !== -1) o = o.substring(n + s.length);
              e = e.substring(0, e.length - o.length - s.length)
          }
          return e
      }, e.prototype.MakeString = function(e, t) {
          var n = "";
          while (t-- > 0) n += e;
          return n
      }, e
  }()
}
if (typeof SiebelApp.S_App.LocaleObject == "undefined") {
  SiebelJS.Namespace("SiebelApp.S_App.LocaleObject");
  var utils = SiebelApp.Utils,
      consts = SiebelApp.Constants;
  SiebelApp.S_App.LocaleObject = function() {
      function e() {
          this.m_currDataMap = {}, this.m_currDataMap.length = 0, this.m_sCurrency = "", this.m_nPhoneCountryMaxLen = 0, this.m_phoneFormatMap = {}, this.m_phoneFormatMap.length = 0, this.m_bPreLoadLocale = !0, this.m_spProfilePS = null, this.m_spDayOfWeekPS = null, this.m_spMonthPS = null, this.m_spPhoneFormatPS = null, this.m_spCurrencyDataPS = null, this.m_spLocalStringPS = null, this.m_sCurrencyCode = "", this.m_sDateFormat = "", this.m_sTimeFormat = "", this.m_sTimeZoneList = {}, this.m_sTimeZoneName = "", this.m_nUtcOffset = 0, this.m_sErrCode = "", this.m_sExchDate = "", this.m_nScale = 0, this.m_localStringMap = {}, this.m_bLocalStringsInitialized = !1, this.m_bClientStringsInitialized = !1;
          var t;
          return e = function() {
              return t
          }, e.prototype = this, t = new e, t.constructor = e, t
      }

      function t(e) {
          var t = e.GetChildCount();
          for (var n = 0; n < t; n++) {
              var r = e.GetChild(n),
                  i = r.GetType();
              switch (i) {
                  case "Profile":
                      this.m_spProfilePS = r;
                      break;
                  case "DayOfWeek":
                      this.m_spDayOfWeekPS = r;
                      break;
                  case "Month":
                      this.m_spMonthPS = r;
                      break;
                  case "GetPhoneFormats":
                      this.m_spPhoneFormatPS = r;
                      break;
                  case "GetCurrencyData":
                      this.m_spCurrencyDataPS = r;
                      break;
                  case "GetLocalString":
                      this.m_spLocalStringPS = r;
                      break;
                  case "GetTimeZoneList":
                      this.m_sTimeZoneList = r.GetProperty("TimeZoneList");
                      break;
                  case "GetTimeZoneName":
                      this.m_sTimeZoneName = r.GetProperty("TimeZoneName")
              }
          }
      }

      function n() {
          var e = _SWEgetGlobalMsgAry(),
              t;
          for (t in e) e.hasOwnProperty(t) && (this.m_localStringMap[t] = e[t]);
          e = typeof _SWEgetGlobalCustomMsgAry == "function" ? _SWEgetGlobalCustomMsgAry() : [];
          for (t in e) e.hasOwnProperty(t) && (this.m_localStringMap[t] = e[t])
      }
      return e.prototype.ProcessObjectInfo = function(e) {
          if (e === null || e === undefined) return;
          var n = e.GetType();
          if (n !== consts.get("SWE_PST_LOCALE_INFO")) return;
          t.call(this, e), this.m_bPreLoadLocale = !1
      }, e.prototype.InitLocale = function(e) {
          this.m_bPreLoadLocale && (t.call(this, e), this.m_bPreLoadLocale = !1)
      }, e.prototype.FormattedToString = function(e, t, n) {
          var r;
          this.PreLoadLocale();
          var i = this.GetDatum(e);
          return i === undefined ? t : (i.SetAsFormattedString(t, n), r = i.GetAsString(), i.IsError() && (this.m_sErrCode = "LocaleErrFormattedToString"), r)
      }, e.prototype.StringToFormatted = function(e, t, n) {
          var r;
          this.PreLoadLocale();
          var i = this.GetDatum(e);
          return i === undefined ? t : (i.SetAsString(t), r = i.GetAsFormattedString(n), i.IsError() && (this.m_sErrCode = "LocaleErrStringToFormatted"), r)
      }, e.prototype.SetCurrencyCode = function(e) {
          this.m_sCurrencyCode = e
      }, e.prototype.SetExchDate = function(e) {
          this.m_sExchDate = e
      }, e.prototype.GetStringFromDateTimeZone = function(e, t, n, r) {
          var i;
          this.PreLoadLocale();
          var s = this.GetDatum("utcdatetime");
          return s === undefined ? e : (s.SetAsFormattedString(e, t), i = s.GetAsFormattedString(n, r), i)
      }, e.prototype.GetStringFromDateTime = function(e, t, n, r) {
          var i;
          this.PreLoadLocale();
          var s = this.GetDatum("DateTime");
          return s === undefined ? e : (s.SetAsFormattedString(e, t), i = s.GetAsFormattedString(n, r), i)
      }, e.prototype.GetStringFromCurrency = function(e, t, n, r) {
          var i = "";
          return this.PreLoadLocale(), e ? this.SetCurrencyCode(sCurrCode) : this.SetCurrencyCode(""), t && this.SetExchDate(t), i = this.FormattedToString("Currency", n, r), i
      }, e.prototype.GetCurrencyFromString = function(e, t, n, r) {
          var i = "";
          return this.PreLoadLocale(), e ? this.SetCurrencyCode(sCurrCode) : this.SetCurrencyCode(""), t && this.SetExchDate(t), i = this.StringToFormatted("Currency", n, r), i
      }, e.prototype.GetDateFormat = function() {
          if (this.m_sDateFormat.length > 0) return this.m_sDateFormat;
          this.PreLoadLocale();
          var e = this.GetDatum(consts.get("FORMAT_DATE"));
          return e && (this.m_sDateFormat = e.GetFormat()), this.m_sDateFormat
      }, e.prototype.GetTimeFormat = function() {
          if (this.m_sTimeFormat.length > 0) return this.m_sTimeFormat;
          this.PreLoadLocale();
          var e = this.GetDatum(consts.get("FORMAT_TIME"));
          return e && (this.m_sTimeFormat = e.GetFormat()), this.m_sTimeFormat
      }, e.prototype.GetTimeZoneList = function() {
          var e;
          if (this.m_sTimeZoneList.length > 0) return this.m_sTimeZoneList;
          var t = CCFMiscUtil_CreatePropSet(),
              n = CCFMiscUtil_CreatePropSet();
          t.SetProperty("SWEJI", "false");
          var r = SiebelApp.S_App.GetService("SWE Locale Service");
          r && (n = r.InvokeMethod("GetTimeZoneList", t));
          var i = n.GetChildCount();
          for (e = 0; e < i; e++) {
              var s = n.GetChild(e),
                  o = s.GetType();
              if (o === "ResultSet") {
                  this.m_sTimeZoneList = s.GetProperty("TimeZoneList");
                  break
              }
          }
          return this.m_sTimeZoneList
      }, e.prototype.GetTimeZoneName = function() {
          var e;
          if (this.m_sTimeZoneName.length > 0) return this.m_sTimeZoneName;
          var t = CCFMiscUtil_CreatePropSet(),
              n = CCFMiscUtil_CreatePropSet();
          t.SetProperty("SWEJI", "false");
          var r = SiebelApp.S_App.GetService("SWE Locale Service");
          r && (n = r.InvokeMethod("GetTimeZoneName", t));
          var i = n.GetChildCount();
          for (e = 0; e < i; e++) {
              var s = n.GetChild(e),
                  o = s.GetType();
              if (o === "ResultSet") {
                  this.m_sTimeZoneName = s.GetProperty("TimeZoneName");
                  break
              }
          }
          return this.m_sTimeZoneName
      }, e.prototype.GetUtcOffset = function(e, t, n) {
          var r, i, s;
          i = t ? "1" : "0";
          var o = e;
          o += ":", o += i;
          var u = CCFMiscUtil_CreatePropSet(),
              a = CCFMiscUtil_CreatePropSet();
          u.SetProperty("SWEJI", "false"), u.SetProperty("TimeZoneName", e), u.SetProperty("bLocal", i), u.SetProperty("TimeStamp", n);
          var f = SiebelApp.S_App.GetService("SWE Locale Service");
          f && (a = f.InvokeMethod("GetUtcOffset", u));
          var l = a.GetChildCount();
          for (s = 0; s < l; s++) {
              var c = a.GetChild(s),
                  h = c.GetType();
              if (h === "ResultSet") {
                  r = c.GetProperty("UtcOffset"), this.m_nUtcOffset = parseInt(r, 10);
                  break
              }
          }
          return this.m_nUtcOffset
      }, e.prototype.GetCurrencyList = function() {
          var e;
          return this.m_spCurrencyDataPS = this.GetData("GetCurrencyData", this.m_spCurrencyDataPS), this.m_spCurrencyDataPS && (e = this.m_spCurrencyDataPS.EncodeAsString()), e
      }, e.prototype.GetCurrency = function(e) {
          var t, n;
          if (this.m_currDataMap.length < 1) {
              var r, i = new SiebelApp.S_App.DatumNumberObject,
                  s, o;
              this.m_spCurrencyDataPS = this.GetData("GetCurrencyData", this.m_spCurrencyDataPS), this.m_sCurrency = this.m_spCurrencyDataPS.GetProperty("currency");
              var u = this.m_spCurrencyDataPS.GetChildCount();
              if (this.m_spCurrencyDataPS.PropertyExists("currency"))
                  for (t = 0; t < u; t++) {
                      var a = this.m_spCurrencyDataPS.GetChild(t);
                      r = a.GetProperty("code"), s = new SiebelApp.S_App.DatumCurrencyDataObject, s.m_sSymbol = a.GetProperty("symbol");
                      if (!s.m_sSymbol || s.m_sSymbol.length === 0) continue;
                      o = a.GetProperty("stdScale");
                      if (!o) continue;
                      s.m_nStdScale = parseInt(o, 10), o = a.GetProperty("extScale");
                      if (!o) continue;
                      s.m_nExtScale = parseInt(o, 10), o = a.GetProperty("minAcctUnit");
                      if (!o) continue;
                      i.SetAsString(o), s.m_nMinAcctUnit = i.GetValue(), o = a.GetProperty("bEuro"), o ? s.m_bEuro = parseInt(o, 10) === 0 ? !1 : !0 : s.m_bEuro = !1, this.m_currDataMap[r] = s, this.m_currDataMap.length++
                  }
              this.m_currDataMap.length === 0 && (this.m_currDataMap["No Match"] = new SiebelApp.S_App.DatumCurrencyDataObject)
          }
          n = e;
          var f;
          return this.m_currDataMap[n] ? this.m_currDataMap[n] : null
      }, e.prototype.GetDayOfWeek = function(e, t) {
          var n;
          this.m_spDayOfWeekPS = this.GetData("DayOfWeek", this.m_spDayOfWeekPS);
          var r = parseInt(e, 10),
              i = r;
          i += ":";
          switch (t) {
              case 0:
                  i += "0";
                  break;
              case 1:
                  i += "1";
                  break;
              case 2:
                  i += "2";
                  break;
              default:
          }
          return n = this.m_spDayOfWeekPS.GetProperty(i), n
      }, e.prototype.GetDispDateSeparator = function() {
          return this.GetProfile(consts.get("LOCAL_DATE_SEPARATOR"))
      }, e.prototype.GetDispNumberDecimal = function() {
          return this.GetProfile(consts.get("LOCAL_NUMBER_DECIMAL"))
      }, e.prototype.GetDispNumberSeparator = function() {
          return this.GetProfile(consts.get("LOCAL_NUMBER_SEPARATOR"))
      }, e.prototype.GetDispNumberScale = function() {
          var e = this.GetProfile(consts.get("LOCAL_NUMBER_SCALE"));
          return e.length === 0 ? 2 : parseInt(e, 10)
      }, e.prototype.GetDispCurrencySeparator = function() {
          return this.GetProfile(consts.get("LOCAL_CURRENCY_SEPARATOR"))
      }, e.prototype.GetDispCurrencyDecimal = function() {
          return this.GetProfile(consts.get("LOCAL_CURRENCY_DECIMAL"))
      }, e.prototype.GetDispTimeAM = function() {
          return this.GetProfile(consts.get("LOCAL_TIME_AM"))
      }, e.prototype.GetDispTimePM = function() {
          return this.GetProfile(consts.get("LOCAL_TIME_PM"))
      }, e.prototype.GetDispTimeSeparator = function() {
          return this.GetProfile(consts.get("LOCAL_TIME_SEPARATOR"))
      }, e.prototype.GetWeekStartDay = function() {
          if (this.m_weekStartDay === undefined) {
              var e = this.GetProfile(consts.get("LOCAL_WEEK_START_DAY")),
                  t;
              for (t = 0; t < 7; t++)
                  if (SiebelApp.S_App.LocaleObject.GetDayOfWeek(t, 0).toLowerCase() === e.toLowerCase()) break;
              this.m_weekStartDay = t < 7 ? t : null
          }
          return this.m_weekStartDay
      }, e.prototype.GetMonth = function(e, t) {
          var n;
          this.m_spMonthPS = this.GetData("Month", this.m_spMonthPS);
          var r = parseInt(e, 10);
          return r += ":", r += t ? "1" : "0", n = this.m_spMonthPS.GetProperty(r), n
      }, e.prototype.PreLoadLocale = function() {
          if (this.m_bPreLoadLocale) {
              var e = CCFMiscUtil_CreatePropSet(),
                  n = CCFMiscUtil_CreatePropSet();
              e.SetProperty("SWEJI", "false");
              var r = SiebelApp.S_App.GetService("SWE Locale Service");
              r && (n = r.InvokeMethod("PreLoadLocale", e));
              var i = n.GetChildCount();
              for (var s = 0; s < i; s++) {
                  var o = n.GetChild(s),
                      u;
                  u = o.GetType();
                  if (u === "ResultSet") {
                      t.call(this, o), this.m_bPreLoadLocale = !1;
                      break
                  }
              }
          }
          return this.m_sErrCode = "OK", !0
      }, e.prototype.GetScale = function() {
          return this.m_nScale
      }, e.prototype.SetScale = function(e) {
          return this.m_nScale = e, !0
      }, e.prototype.GetLocalString = function(e) {
          var t = null;
          t = this.m_localStringMap[e];
          if (!t && !this.m_bClientStringsInitialized) {
              n.call(this), this.m_bClientStringsInitialized = !0, t = this.m_localStringMap[e];
              if (t) return t
          }
          if (!t && !this.m_bLocalStringsInitialized && !t) {
              var r = null,
                  i = null;
              this.m_bLocalStringsInitialized = !0, this.m_spLocalStringPS = this.GetData("GetLocalString", this.m_spLocalStringPS);
              for (var s = !0;
                  (r = this.m_spLocalStringPS.EnumProperties(s)) !== null; s = !1) i = this.m_spLocalStringPS.GetProperty(r), this.m_localStringMap[r] = i;
              t = this.m_localStringMap[e]
          }
          return t
      }, e.prototype.HasErrorMsg = function() {
          return this.m_sErrCode.length > 0 && this.m_sErrCode !== "OK"
      }, e.prototype.GetErrorCode = function() {
          return this.m_sErrCode
      }, e.prototype.GetProfile = function(e) {
          var t;
          this.m_spProfilePS = this.GetData("Profile", this.m_spProfilePS);
          var n = parseInt(e, 10);
          return t = this.m_spProfilePS.GetProperty(n.toString()), t
      }, e.prototype.GetPhoneFormat = function(e, t, n) {
          var r, i = e.toString().replace(/,/g, ""),
              s = t,
              o = n;
          if (this.m_phoneFormatMap.length === 0) {
              var u, a;
              this.m_spPhoneFormatPS = this.GetData("GetPhoneFormats", this.m_spPhoneFormatPS);
              for (var f = !0;
                  (u = this.m_spPhoneFormatPS.EnumProperties(f)) !== null; f = !1) a = this.m_spPhoneFormatPS.GetProperty(u), this.m_phoneFormatMap[u] = a, this.m_phoneFormatMap.length++, this.m_nPhoneCountryMaxLen < u.length && (this.m_nPhoneCountryMaxLen = u.length);
              this.m_phoneFormatMap.length === 0 && (this.m_phoneFormatMap["No Match"] = "")
          }
          if (i.length > 0)
              if (i.indexOf("+") === 0)
                  for (var l = 2; l <= this.m_nPhoneCountryMaxLen && l <= i.length; l++) {
                      s = i.substring(0, l), o = this.m_phoneFormatMap[s];
                      if (o) return i = i.substring(s.length), {
                          sPhoneNumber: i,
                          sPhoneCountry: s,
                          sFormat: o
                      }
                  } else {
                      s = this.GetProfile(consts.get("LOCAL_PHONE_COUNTRY"));
                      if (this.m_phoneFormatMap[s] === o) return {
                          sPhoneNumber: i,
                          sPhoneCountry: s,
                          sFormat: o
                      }
                  }
          return s = "", o = "", {
              sPhoneNumber: i,
              sPhoneCountry: s,
              sFormat: o
          }
      }, e.prototype.GetExchangeRate = function(e, t, n) {
          var r = 1;
          if (e.length === 0 || t.length === 0 || e.toLowerCase() === t.toLowerCase()) return 1;
          var i = n,
              s, o, u = [],
              a;
          i || (i = new SiebelApp.S_App.DatumDateObject, i.SetToNow()), s = this.GetCurrency(e);
          if (!s) return r;
          var f = !1;
          s.m_ExchDataMap.length > 0 && (u = s.m_ExchDataMap[t], u.length > 0 && (f = !0)), f || (u = [], s.m_ExchDataMap[t] = u);
          var l = u.length;
          for (a = 0; a < l; a++) {
              o = u[a];
              if (i.GetValue() > o.m_nDate2) break;
              if (i.GetValue() >= o.m_nDate1) return o.m_nRate
          }
          var c, h, p, d, v;
          d.SetProperty("from", e), d.SetProperty("to", t), p = i.GetAsString(), d.SetProperty("date", p), d.SetProperty("SWEJI", "false");
          var m = SiebelApp.S_App.GetService("SWE Locale Service");
          m && (v = m.InvokeMethod("GetExchangeRate", d));
          var g;
          p = "";
          var y = v.GetChildCount();
          for (var b = 0; b < y; b++) {
              g = v.GetChild(b);
              var w = g.GetType();
              if (w === "ResultSet") {
                  p = g.GetProperty("rate");
                  break
              }
          }
          if (p.length === 0) return r;
          h.SetAsString(p), r = h.GetValue(), p = g.GetProperty("date1");
          if (p) return r;
          c.SetAsString(p);
          var E = new SiebelApp.S_App.DatumExchRate;
          E.m_nDate1 = c.GetValue(), E.m_nDate2 = i.GetValue(), E.m_nRate = r;
          var l = u.length;
          for (a = 0; a < l; a++) {
              o = u[a];
              if (E.m_nDate2 < o.m_nDate2) break
          }
          if (a < u.length) u[a] = E;
          else {
              var l = u.length;
              u[l] = E
          }
          return r
      }, e.prototype.GetDatum = function(e) {
          var t, n = e.toLowerCase();
          if (n === "phone") t = new SiebelApp.S_App.DatumPhoneObject;
          else if (n === "bool") t = new SiebelApp.S_App.DatumBoolObject;
          else if (n === "datetime") t = new SiebelApp.S_App.DatumDateTimeObject;
          else if (n === "date") t = new SiebelApp.S_App.DatumDateObject;
          else if (n === "time") t = new SiebelApp.S_App.DatumTimeObject;
          else if (n === "utcdatetime") t = new SiebelApp.S_App.DatumUTCDateTimeObject;
          else if (n === "number") t = new SiebelApp.S_App.DatumNumberObject;
          else if (n === "integer") t = new SiebelApp.S_App.DatumIntegerObject;
          else if (n === "currency") {
              t = new SiebelApp.S_App.DatumCurrencyObject, this.m_sCurrencyCode && this.m_sCurrencyCode.length !== 0 && t.SetCurrency(this.m_sCurrencyCode);
              if (this.m_sExchDate && this.m_sExchDate.length !== 0) {
                  var r = new SiebelApp.S_App.DatumDateObject;
                  r.SetAsString(this.m_sExchDate), t.SetExchangeDate(r)
              }
          }
          return t
      }, e.prototype.GetData = function(e, t) {
          if (t) return t;
          var n, r = CCFMiscUtil_CreatePropSet(),
              i = CCFMiscUtil_CreatePropSet(),
              s = CCFMiscUtil_CreatePropSet();
          i.SetProperty("SWEJI", "false");
          var o = SiebelApp.S_App.GetService("SWE Locale Service");
          o && (s = o.InvokeMethod(e, i));
          var u = s.GetChildCount();
          for (n = 0; n < u; n++) {
              var a = s.GetChild(n),
                  f = a.GetType();
              if (f === "ResultSet") return a
          }
          return null
      }, e.prototype.GetFuncCurrCode = function() {
          return this.m_spCurrencyDataPS = this.GetData("GetCurrencyData", this.m_spCurrencyDataPS), this.m_spCurrencyDataPS.GetProperty("currencyCode")
      }, e.prototype.AddLocalString = function(e, t) {
          var n = this.m_localStringMap[e];
          n, this.m_localStringMap[e] = t
      }, e.prototype.IsPhoneLeadingZeroAllowed = function(e) {
          return !1
      }, new e
  }()
}
typeof SiebelApp.S_App.DatumExchRate == "undefined" && (SiebelJS.Namespace("SiebelApp.S_App.DatumExchRate"), SiebelApp.S_App.DatumExchRate = function() {
  function e() {
      this.m_nDate1 = 0, this.m_nDate2 = 0, this.m_nRate = 0
  }
  return e
}()), typeof SiebelApp.S_App.DatumCurrData == "undefined" && (SiebelJS.Namespace("SiebelApp.S_App.DatumCurrData"), SiebelApp.S_App.DatumCurrData = function() {
  function e() {
      this.m_sSymbol = "", this.m_nStdScale = 0, this.m_nExtScale = 0, this.m_nMinAcctUnit = 0, this.m_bEuro = !1, this.m_ExchDataMap = {}
  }
  return e
}());
if (typeof SiebelApp.S_App.DatumNumberObject == "undefined") {
  SiebelJS.Namespace("SiebelApp.S_App.DatumNumberObject");
  var utils = SiebelApp.Utils,
      consts = SiebelApp.Constants;
  SiebelApp.S_App.DatumNumberObject = function() {
      function e() {
          SiebelApp.S_App.DatumNumberObject.superclass.constructor.call(this), this.m_nValue = 0, this.m_nScale = 15, this.m_nMinScale = 0, this.m_sDispCurrSymbol = "", this.m_nDispScale = SiebelApp.S_App.LocaleObject.GetDispNumberScale()
      }
      return SiebelJS.Extend(e, SiebelApp.S_App.DatumObject), e.prototype.GetAsFormattedString = function(e) {
          var t = "";
          if (this.m_bNull) return t;
          var n, r, i = 0,
              s = 0,
              o = "";
          e = this.GetFormatInternal(e), o = this.GetAsString(), o[0] === "-" && (o = o.substring(1)), o[0] === "0" && o[1] === "." && (o = o.substring(1));
          if (o.length === 0 && SiebelApp.S_App.DatumNumberObject.g_nMinInteger === 0) return;
          (i = o.indexOf(".")) === -1 ? i = o.length : s = o.length - i - 1, !SiebelApp.S_App.DatumNumberObject.g_bFormatNeg && this.m_nValue < 0 && (t = "-");
          var u = !1,
              a = !1,
              f = SiebelApp.S_App.DatumNumberObject.g_nMaxInteger,
              l = e.length;
          for (r = 0, n = 0; n < l; n++) {
              var c = e[n];
              if (i > f && (c === "0" || c === "#" || c === "."))
                  for (; i > f; i--) t += o[r++];
              switch (c) {
                  case "0":
                      if (u) t += o[r++];
                      else {
                          if (!(i >= SiebelApp.S_App.DatumNumberObject.g_nMinInteger)) {
                              i++, t += "0";
                              break
                          }
                          t += o[r++]
                      }
                      a = !0;
                      break;
                  case "#":
                      u ? s > SiebelApp.S_App.DatumNumberObject.g_nMinDecimal && (s--, t += o[r++], a = !0) : i === f ? (t += o[r++], a = !0) : f--;
                      break;
                  case ",":
                      a && (t += this.GetDispSeparator());
                      break;
                  case ".":
                      u = !0;
                      if (o[r] === ".") {
                          r++, t += this.GetDispDecimal();
                          if (s > SiebelApp.S_App.DatumNumberObject.g_nMaxDecimal)
                              for (; s > SiebelApp.S_App.DatumNumberObject.g_nMaxDecimal; s--) t += o[r++]
                      }
                      break;
                  case "$":
                      t += this.m_sDispCurrSymbol;
                      break;
                  case "-":
                  case "(":
                  case ")":
                      this.m_nValue < 0 && (t += c);
                      break;
                  case "+":
                      t += this.m_nValue >= 0 ? "+" : "-";
                      break;
                  default:
                      t += c
              }
          }
          return t
      }, e.prototype.GetAsString = function() {
          var e = "";
          if (this.m_bNull) return e;
          var t = this.m_nMinScale < 0 ? this.m_nScale : this.m_nMinScale,
              n = this.m_nValue.toString();
          n.indexOf("e") !== -1 && (n = utils.BigNumberToString(this.m_nValue));
          var r = n.indexOf("."),
              i = n.substr(r + 1).length;
          r !== -1 && (t = this.m_nScale < i ? this.m_nScale : this.m_nMinScale < i ? i : this.m_nMinScale);
          var s = Number(n);
          return e = s.toRound(t).toString(), e
      }, e.prototype.GetDispDecimal = function() {
          return SiebelApp.S_App.LocaleObject.GetDispNumberDecimal()
      }, e.prototype.GetDispSeparator = function() {
          return SiebelApp.S_App.LocaleObject.GetDispNumberSeparator()
      }, e.prototype.GetDataType = function() {
          return consts.get("DTYPE_NUMBER")
      }, e.prototype.SetAsFormattedString = function(e, t) {
          this.m_bNull = e.length === 0;
          if (this.m_bNull) {
              this.m_nValue = 0;
              return
          }
          var n = 0,
              r = [],
              i = this.GetDispDecimal(),
              s = i.length,
              o = this.GetDispSeparator(),
              u = o.length,
              a = "",
              f = e.length;
          if (f >= 128) {
              this.m_bNull = !0, this.m_nValue = 0, this.SetError(!0);
              return
          }
          var l = e.indexOf(this.m_sDispCurrSymbol);
          l !== -1 ? a = e.substring(0, l) + e.substr(l + this.m_sDispCurrSymbol.length) : a = e, f = a.length;
          var c = a.indexOf("-"),
              h = a.indexOf("("),
              p = a.indexOf(")");
          c === 0 || c === f - 1 && c !== -1 ? (r[n++] = "-", a = a.substring(0, c) + a.substr(c + 1)) : h === 0 && p === f - 1 && f >= 2 && (r[n++] = "-", a = a.substr(1, f - 2)), f = a.length;
          var d = 0,
              v = !1,
              m = !0,
              g = 0,
              y;
          while (d < f) {
              while (d < f && a[d] >= "0" && a[d] <= "9") m = !1, r[n++] = a[d++];
              if (d === f) break;
              if (i.toLowerCase() === a.substr(d, s).toLowerCase()) {
                  if (v) {
                      this.m_bNull = !0, this.m_nValue = 0, this.SetError(!0);
                      return
                  }
                  r[n++] = ".", v = !0, m = !1, d += s
              } else if (o.toLowerCase() === a.substr(d, u).toLowerCase()) d += u;
              else if (a[d] === " ") d++;
              else {
                  if (!m) break;
                  if (!((y = utils.FindIndexOfFrom(t, a[d], g)) >= g)) {
                      this.m_bNull = !0, this.m_nValue = 0, this.SetError(!0);
                      return
                  }
                  g = y + 1, d++
              }
          }
          while (d < f) {
              if (!((y = utils.FindIndexOfFrom(t, a[d], g)) >= g)) {
                  this.m_bNull = !0, this.m_nValue = 0, this.SetError(!0);
                  return
              }
              g = y + 1, d++
          }
          this.SetAsString(r.join(""));
          return
      }, e.prototype.SetAsString = function(e) {
          this.m_bNull = !e || e.length === 0;
          if (this.m_bNull) this.m_nValue = 0;
          else {
              var t = parseFloat(e);
              isNaN(t) && (t = this.m_nValue), this.SetValue(t)
          }
      }, e.prototype.GetFormat = function() {
          return this.m_sFormat.length === 0 ? SiebelApp.S_App.LocaleObject.GetProfile(consts.get("LOCAL_NUMBER_FORMAT")) : this.m_sFormat
      }, e.prototype.GetValue = function() {
          return this.m_nValue
      }, e.prototype.SetValue = function(e) {
          this.m_nValue = e
      }, e.prototype.GetFormatInternal = function(e) {
          var t, n = e;
          n.length === 0 && (n = this.GetFormat());
          if (n !== SiebelApp.S_App.DatumNumberObject.g_sFormat) {
              SiebelApp.S_App.DatumNumberObject.g_sFormat = n, SiebelApp.S_App.DatumNumberObject.g_nMinInteger = 0, SiebelApp.S_App.DatumNumberObject.g_nMaxInteger = 0, SiebelApp.S_App.DatumNumberObject.g_nMinDecimal = 0, SiebelApp.S_App.DatumNumberObject.g_nMaxDecimal = 0, SiebelApp.S_App.DatumNumberObject.g_bFormatNeg = !1, SiebelApp.S_App.DatumNumberObject.g_bDecimal = !1;
              var r = n.length;
              for (t = 0; t < r; t++) switch (n[t]) {
                  case "0":
                      SiebelApp.S_App.DatumNumberObject.g_bDecimal ? SiebelApp.S_App.DatumNumberObject.g_nMinDecimal++ : SiebelApp.S_App.DatumNumberObject.g_nMinInteger++;
                  case "#":
                      SiebelApp.S_App.DatumNumberObject.g_bDecimal ? SiebelApp.S_App.DatumNumberObject.g_nMaxDecimal++ : SiebelApp.S_App.DatumNumberObject.g_nMaxInteger++;
                      break;
                  case ".":
                      SiebelApp.S_App.DatumNumberObject.g_bDecimal = !0;
                      break;
                  case "-":
                  case "(":
                  case ")":
                  case "+":
                      SiebelApp.S_App.DatumNumberObject.g_bFormatNeg = !0
              }
          }
          return SiebelApp.S_App.LocaleObject.GetScale() !== 0 ? (this.m_nScale = SiebelApp.S_App.LocaleObject.GetScale(), this.m_nMinScale = SiebelApp.S_App.LocaleObject.GetScale()) : SiebelApp.S_App.DatumNumberObject.g_bDecimal && SiebelApp.S_App.DatumNumberObject.g_nMaxDecimal === 0 ? (this.m_nScale = this.m_nDispScale, this.m_nMinScale = this.m_nDispScale) : (this.m_nScale = SiebelApp.S_App.DatumNumberObject.g_nMaxDecimal, this.m_nMinScale = SiebelApp.S_App.DatumNumberObject.g_nMinDecimal), n
      }, e.prototype._kcvt = function(e, t) {
          var n = "",
              r, i = "",
              s, o;
          r = e !== 0 ? parseInt(Math.log(Math.abs(e)) / Math.LN10 - 15 + .5, 10) : -t, r = -r > 0 ? -r : 0;
          var u = t > r ? t + 1 : r + 1;
          r = r < 15 ? r : 15, e !== Math.floor(e) && (e < 0 ? e -= Math.pow(10, -u) : e += Math.pow(10, -u)), e < 0 && (o = -1), s = Math.abs(e).toString().indexOf(".");
          var a = t < r ? t : r,
              f = Math.pow(10, a);
          i = Math.abs(Math.round(e * f) / f), i = parseFloat(i.toString().replace(".", "")), i === "" && (s = -t), n = i;
          while (t > r++) n += "0";
          return {
              resVal: n,
              resDec: s,
              resSign: o
          }
      }, SiebelApp.S_App.DatumNumberObject.g_sFormat = "", SiebelApp.S_App.DatumNumberObject.g_nMinInteger = 0, SiebelApp.S_App.DatumNumberObject.g_nMaxInteger = 0, SiebelApp.S_App.DatumNumberObject.g_nMinDecimal = 0, SiebelApp.S_App.DatumNumberObject.g_nMaxDecimal = 0, SiebelApp.S_App.DatumNumberObject.g_bFormatNeg = !1, SiebelApp.S_App.DatumNumberObject.g_bDecimal = !1, e
  }()
}
typeof SiebelApp.S_App.DatumCurrencyDataObject == "undefined" && (SiebelJS.Namespace("SiebelApp.S_App.DatumCurrencyDataObject"), SiebelApp.S_App.DatumCurrencyDataObject = function() {
  function e() {
      this.m_sSymbol = "", this.m_nDecimal = 0
  }
  return e.prototype.GetSymbol = function() {
      return this.m_sSymbol
  }, e.prototype.SetSymbol = function(e) {
      this.m_sSymbol = e
  }, e.prototype.GetDecimal = function() {
      return this.m_nDecimal
  }, e.prototype.SetDecimal = function(e) {
      this.m_nDecimal = e
  }, e
}());
if (typeof SiebelApp.S_App.DatumCurrencyObject == "undefined") {
  SiebelJS.Namespace("SiebelApp.S_App.DatumCurrencyObject");
  var consts = SiebelApp.Constants;
  SiebelApp.S_App.DatumCurrencyObject = function() {
      function e() {
          SiebelApp.S_App.DatumCurrencyObject.superclass.constructor.call(this), this.m_exchangeDate = null, this.m_nMinAcctUnit = .01, this.m_bEuro = !1, this.m_sCurrencyCode = ""
      }
      return SiebelJS.Extend(e, SiebelApp.S_App.DatumNumberObject), e.prototype.GetDataType = function() {
          return consts.get("DTYPE_CURRENCY")
      }, e.prototype.GetFormat = function() {
          return this.m_sFormat.length === 0 ? SiebelApp.S_App.LocaleObject.GetProfile(consts.get("LOCAL_CURR_FORMAT")) : this.m_sFormat
      }, e.prototype.GetAsForeignCurrency = function(e, t) {
          t || (t = -1);
          if (this.m_nValue === 0) return 0;
          if (this.m_sCurrencyCode.length === 0 || e.length === 0 || this.m_sCurrencyCode === e) return this.m_nValue;
          var n, r = 0,
              i = 0;
          return t === -1 && (t = this.m_bEuro || (n = SiebelApp.S_App.LocaleObject.GetCurrency(e)) && n.m_bEuro ? 1 : 0), t === 0 ? (i = SiebelApp.S_App.LocaleObject.GetExchangeRate(this.m_sCurrencyCode, e, this.m_exchangeDate), r = this.m_nValue * i) : (this.m_bEuro ? (i = SiebelApp.S_App.LocaleObject.GetExchangeRate("EUR", this.m_sCurrencyCode, this.m_exchangeDate), r = this.m_nValue / i) : (i = SiebelApp.S_App.LocaleObject.GetExchangeRate(this.m_sCurrencyCode, "EUR", this.m_exchangeDate), r = this.m_nValue * i), i = SiebelApp.S_App.LocaleObject.GetExchangeRate("EUR", e, this.m_exchangeDate), r *= i), r
      }, e.prototype.GetCurrencyCode = function() {
          return this.m_sCurrencyCode
      }, e.prototype.GetCurrencySymbol = function() {
          return this.m_sDispCurrSymbol
      }, e.prototype.GetExchangeDate = function() {
          return this.m_exchangeDate
      }, e.prototype.GetMinAccountableUnit = function() {
          return this.m_nMinAcctUnit
      }, e.prototype.GetDispDecimal = function() {
          return SiebelApp.S_App.LocaleObject.GetDispCurrencyDecimal()
      }, e.prototype.GetDispSeparator = function() {
          return SiebelApp.S_App.LocaleObject.GetDispCurrencySeparator()
      }, e.prototype.SetCurrency = function(e) {
          var t;
          e && (t = SiebelApp.S_App.LocaleObject.GetCurrency(e)) ? (this.m_nValue = this.GetAsForeignCurrency(e), this.m_sCurrencyCode = e, this.m_sDispCurrSymbol = t.m_sSymbol, this.m_nDispScale = t.m_nStdScale, this.m_nScale = t.m_nExtScale, this.m_nMinAcctUnit = t.m_nMinAcctUnit, this.m_bEuro = t.m_bEuro) : (this.m_nMinAcctUnit = .01, this.m_bEuro = !1, this.m_sCurrencyCode = "", this.m_sDispCurrSymbol = "")
      }, e.prototype.SetExchangeDate = function(e) {
          this.m_exchangeDate = e
      }, e.prototype.SetToFunctionalCurrency = function() {
          var e = SiebelApp.S_App.LocaleObject.GetFuncCurrCode();
          this.SetCurrency(e)
      }, e
  }()
}
typeof SiebelApp.S_App.DatumIntegerObject == "undefined" && (SiebelJS.Namespace("SiebelApp.S_App.DatumIntegerObject"), SiebelApp.S_App.DatumIntegerObject = function() {
  function e() {
      SiebelApp.S_App.DatumIntegerObject.superclass.constructor.call(this)
  }
  return SiebelJS.Extend(e, SiebelApp.S_App.DatumNumberObject), e.prototype.GetFormat = function() {
      return this.m_sFormat.length === 0 ? SiebelApp.S_App.LocaleObject.GetProfile(SiebelApp.Constants.get("LOCAL_INTEGER_FORMAT")) : this.m_sFormat
  }, e.prototype.SetAsString = function(e) {
      this.m_bNull = !1, e ? e.length === 0 && (this.m_bNull = !0) : this.m_bNull = !0;
      if (this.m_bNull) {
          this.m_nValue = 0;
          return
      }
      this.m_nValue = parseInt(Number(e), 10);
      return
  }, e
}());
if (typeof SiebelApp.S_App.DatumDateTimeObject == "undefined") {
  SiebelJS.Namespace("SiebelApp.S_App.DatumDateTimeObject");
  var utils = SiebelApp.Utils,
      consts = SiebelApp.Constants,
      SECONDS_PER_DAY = 86400,
      AX_DAYTYPE_LONG = 0,
      AX_DAYTYPE_SHORT = 1,
      AX_DAYTYPE_SUP_SHORT = 2;
  SiebelApp.S_App.DatumDateTimeObject = function() {
      function e() {
          SiebelApp.S_App.DatumDateTimeObject.superclass.constructor.call(this), this.m_nYear = 0, this.m_nMonth = 0, this.m_nDay = 0, this.m_nJulian = 0, this.m_nHour = 0, this.m_nMinute = 0, this.m_nSecond = 0
      }

      function t(e) {
          var t = e.charCodeAt(0);
          return t > 47 && t < 58 ? !0 : !1
      }
      return SiebelJS.Extend(e, SiebelApp.S_App.DatumObject), e.prototype.GetAsFormattedString = function(e, t) {
          var n = "";
          if (this.m_bNull) return n;
          var r = "",
              i = "";
          t = t || !1, e.length === 0 ? e = this.GetFormat() : e = this.PreParseFormat(e);
          if (e === SiebelApp.S_App.DatumDateTimeObject.g_sFormat) r = SiebelApp.S_App.DatumDateTimeObject.g_sFormattedString;
          else {
              var s, o = 0,
                  u = 0,
                  a = !1;
              while (u < e.length) {
                  if (a) {
                      e[u] === "'" ? a = !1 : r += e[u], u++;
                      continue
                  }
                  s = e[u];
                  switch (s) {
                      case "Y":
                          for (o = 0; u < e.length && e[u] === s; o++) u++;
                          switch (o) {
                              case 1:
                                  r += "%#y";
                                  break;
                              case 2:
                                  r += "%y";
                                  break;
                              case 3:
                                  r += "%#Y";
                                  break;
                              default:
                                  r += "%Y"
                          }
                          break;
                      case "M":
                          for (o = 0; u < e.length && e[u] === s; o++) u++;
                          switch (o) {
                              case 1:
                                  r += "%#m";
                                  break;
                              case 2:
                                  r += "%m";
                                  break;
                              case 3:
                                  r += "%b";
                                  break;
                              default:
                                  r += "%B"
                          }
                          break;
                      case "D":
                          for (o = 0; u < e.length && e[u] === s; o++) u++;
                          switch (o) {
                              case 1:
                                  r += "%#d";
                                  break;
                              case 2:
                                  r += "%d";
                                  break;
                              case 3:
                                  r += "%a";
                                  break;
                              default:
                                  r += "%A"
                          }
                          break;
                      case "H":
                          for (o = 0; u < e.length && e[u] === s; o++) u++;
                          o === 1 ? r += "%#H" : r += "%H";
                          break;
                      case "h":
                          for (o = 0; u < e.length && e[u] === s; o++) u++;
                          o === 1 ? r += "%#I" : r += "%I";
                          break;
                      case "m":
                          while (u < e.length && e[u] === s) u++;
                          r += "%M";
                          break;
                      case "s":
                          while (u < e.length && e[u] === s) u++;
                          r += "%S";
                          break;
                      case "p":
                          while (u < e.length && e[u] === s) u++;
                          r += "%p";
                          break;
                      case "/":
                          r += t ? "/" : SiebelApp.S_App.LocaleObject.GetDispDateSeparator(), u++;
                          break;
                      case ":":
                          r += t ? ":" : SiebelApp.S_App.LocaleObject.GetDispTimeSeparator(), u++;
                          break;
                      case "'":
                          a = !0, u++;
                          break;
                      case "[":
                          var f = u + 1,
                              l = e.indexOf("]", f);
                          i = e.substr(f, l - f), u = l + 1;
                          break;
                      case "%":
                          r += "%%", u++;
                          break;
                      default:
                          r += e[u], u++
                  }
              }
              SiebelApp.S_App.DatumDateTimeObject.g_sFormat = e, SiebelApp.S_App.DatumDateTimeObject.g_sFormattedString = r
          }
          if (this.GetDataType() === consts.get("DTYPE_UTCDATETIME")) {
              var c = new SiebelApp.S_App.DatumUTCDateTimeObject,
                  h = c.AdjustForTimeZone(i, !1);
              i = h
          }
          return n = this._GetAsFormattedString(r), n
      }, e.prototype.GetAsString = function() {
          return this._GetAsFormattedString("%m/%d/%Y %H:%M:%S")
      }, e.prototype.GetDataType = function() {
          return consts.get("DTYPE_DATETIME")
      }, e.prototype.IsAllDigits = function(e) {
          if (!e || e.length === 0) return !1;
          var n = e.length;
          for (var r = 0; r < n; r++)
              if (!t(e[r])) return !1;
          return !0
      }, e.prototype.IsOneChunk = function(e, t) {
          var n = e && e.length ? e.length : 0,
              r = !1;
          if (this.IsAllDigits(e))
              if (!t) {
                  if (n === 6 || n === 8) r = !0
              } else if (n === 4 || n === 6) r = !0;
          return {
              bOneChunk: r,
              nChunkLen: n
          }
      }, e.prototype.SetAsFormattedString = function(e, t) {
          if (!e || e.length === 0) {
              this.ResetValue();
              return
          }
          var n = -1,
              r = -1,
              i = -1,
              s = 0,
              o = 0,
              u = 0,
              a = -1,
              f = !1,
              l = "",
              c = 0,
              h = 0,
              p = 0,
              d = "",
              v = "",
              m = !1,
              g = !1,
              y = 0,
              b = 0,
              w = 0,
              E = 0,
              S = 0,
              x = 0,
              T = -1,
              N = 0,
              C = e,
              k = "",
              L = "",
              A = 0,
              O = !1,
              M = !1,
              _ = t,
              D = "",
              P = !1,
              H = SiebelApp.S_App.LocaleObject.GetDispTimeAM();
          H.length === 0 && (H = "AM");
          var B = SiebelApp.S_App.LocaleObject.GetDispTimePM();
          B.length === 0 && (B = "PM");
          var j = SiebelApp.S_App.LocaleObject.GetDispDateSeparator(),
              F = SiebelApp.S_App.LocaleObject.GetDispTimeSeparator();
          j === F && (g = !0), _ && _.length !== 0 && (_ = this.PreParseFormat(_)), P = D.length !== 0 && (t.indexOf(SiebelApp.S_App.LocaleObject.GetProfile(consts.get("LOCAL_DATE_FORMAT"))) !== -1 || t.length === 0);
          if (P) {
              t.length === 0 ? _ = SiebelApp.S_App.LocaleObject.GetProfile(consts.get("LOCAL_DATETIME_FORMAT")) : _ = t;
              if (!this.VerifyStrictDateFormat(e, _)) {
                  this.ResetValue(), this.SetError(!0);
                  return
              }
          }
          j += "/-.";
          var I, q;
          if ((I = C.indexOf("[")) !== -1) {
              q = C.lastIndexOf("]");
              if (!(q > -1)) {
                  this.ResetValue(), this.SetError(!0);
                  return
              }
              l = C.substr(I, q - I + 1), l.length !== 0 && (C = C.substr(0, I) + C.substr(q + 1), l = l.substr(1, q - I - 1))
          }
          b = H.length, y = 0, N = C.length;
          while (y <= N - b) {
              if (H.toLowerCase() === C.substr(y, b).toLowerCase()) {
                  a = 1, C = C.substr(0, y) + C.substr(y + b);
                  break
              }
              y++
          }
          w = B.length, y = 0, N = C.length;
          while (y <= N - w) {
              if (B.toLowerCase() === C.substr(y, w).toLowerCase()) {
                  if (a === 1) {
                      this.ResetValue(), this.SetError(!0);
                      return
                  }
                  a = 2, C = C.substr(0, y) + C.substr(y + w);
                  break
              }
              y++
          }
          t && t.length !== 0 && (t = this.PreParseFormat(t));
          if (!g) {
              if (_ && _.length !== 0) {
                  var R = utils.TokenizeString(t, j);
                  h = R.length
              }
              A = 0;
              var U = utils.TokenizeString(C, j);
              c = U.length
          }
          if (!_ || _.length === 0 || !g && c !== h) _ = this.GetFormat();
          x = _.length, _.indexOf("p") > -1 && (f = !0), v = j + ",.: " + F, A = 0;
          var z = utils.TokenizeString(C, v).CleanEmptyElements(),
              W;
          M = !1;
          var X = 0;
          L = z[X];
          e: while (p < x) {
              d = _[p];
              switch (d) {
                  case "Y":
                      if (!L) break e;
                      E === 0 && (W = this.IsOneChunk(L, !1), m = W.bOneChunk, T = W.nChunkLen, y = 0), m ? T === 6 ? (k = L.substr(y, 2), y += 2) : T === 8 && (k = L.substr(y, 4), y += 4) : k = L;
                      if (m || g || c-- > 0) {
                          N = k.length;
                          if (!this.IsAllDigits(k) || N !== 2 && N !== 4) {
                              M = !0;
                              break e
                          }
                          n = parseInt(k, 10), N === 2 && (n >= 50 ? n += 1900 : n += 2e3);
                          if (!m || E === 2) X < z.length ? L = z[++X] : L = ""
                      }
                      E++;
                      break;
                  case "M":
                      if (!L) break e;
                      E === 0 && (W = this.IsOneChunk(L, !1), m = W.bOneChunk, T = W.nChunkLen, y = 0), m ? (k = L.substr(y, 2), y += 2) : k = L;
                      if (m || g || c-- > 0) {
                          if (this.IsAllDigits(k)) k.length <= 2 && (r = parseInt(k, 10));
                          else
                              for (var V = 1; V <= 12; V++) {
                                  if (SiebelApp.S_App.LocaleObject.GetMonth(V, !0).toLowerCase() === k.toLowerCase()) {
                                      r = V;
                                      break
                                  }
                                  if (SiebelApp.S_App.LocaleObject.GetMonth(V, !1).toLowerCase() === k.toLowerCase()) {
                                      r = V;
                                      break
                                  }
                              }
                          if (r < 1 || r > 12) {
                              M = !0;
                              break e
                          }
                          if (!m || E === 2) X < z.length ? L = z[++X] : L = ""
                      }
                      E++;
                      break;
                  case "D":
                      if (!L) break e;
                      E === 0 && (W = this.IsOneChunk(L, !1), m = W.bOneChunk, T = W.nChunkLen, y = 0), m ? (k = L.substr(y, 2), y += 2) : k = L;
                      if (m || g || c-- > 0) {
                          if (!this.IsAllDigits(k) || k.length > 2) {
                              M = !0;
                              break e
                          }
                          i = parseInt(k, 10);
                          if ((i < 1 || i > 31) && SiebelApp.S_App.IsUIEnableDateError()) {
                              M = !0;
                              break e
                          }
                          if (!m || E === 2) X < z.length ? L = z[++X] : L = ""
                      }
                      E++;
                      break;
                  case "H":
                  case "h":
                      if (!L) break e;
                      S === 0 && (W = this.IsOneChunk(L, !0), m = W.bOneChunk, T = W.nChunkLen, y = 0);
                      if (m) {
                          if (T === 4 && S === 2) break e;
                          k = L.substr(y, 2), y += 2
                      } else k = L;
                      if (!this.IsAllDigits(k) || k.length > 2) {
                          M = !0;
                          break e
                      }
                      s = parseInt(k, 10);
                      if (s < 0 || s > 23) {
                          M = !0;
                          break e
                      }
                      if (!m || S === 2) X < z.length ? L = z[++X] : L = "";
                      S++;
                      break;
                  case "m":
                      if (!L) break e;
                      S === 0 && (W = this.IsOneChunk(L, !0), m = W.bOneChunk, T = W.nChunkLen, y = 0);
                      if (m) {
                          if (T === 4 && S === 2) break e;
                          k = L.
                          substr(y, 2), y += 2
                      } else k = L;
                      if (!this.IsAllDigits(k) || k.length > 2) {
                          M = !0;
                          break e
                      }
                      o = parseInt(k, 10);
                      if (o < 0 || o > 59) {
                          M = !0;
                          break e
                      }
                      if (!m || S === 2) X < z.length ? L = z[++X] : L = "";
                      S++;
                      break;
                  case "s":
                      if (!L) break e;
                      S === 0 && (W = this.IsOneChunk(L, !0), m = W.bOneChunk, T = W.nChunkLen, y = 0);
                      if (m) {
                          if (T === 4 && S === 2) break e;
                          k = L.substr(y, 2), y += 2
                      } else k = L;
                      if (!this.IsAllDigits(k) || k.length > 2) {
                          M = !0;
                          break e
                      }
                      u = parseInt(k, 10);
                      if (u < 0 || u > 59) {
                          M = !0;
                          break e
                      }
                      if (!m || S === 2) X < z.length ? L = z[++X] : L = "";
                      S++;
                      break;
                  default:
                      p++
              }
              while (p < x && _[p] === d) p++
          }
          if (M) {
              this.ResetValue(), this.SetError(!0);
              return
          }
          this.SetToNow(), P && (n === -1 || r === -1 || i === -1) && (M = !0), n === -1 && r === -1 && i === -1 ? (n = this.m_nYear, r = this.m_nMonth, i = this.m_nDay) : (n === -1 && (n = this.m_nYear), r === -1 && (r = 1), i === -1 && (i = 1)), a === 1 ? s === 12 ? s = 0 : s > 12 && (M = !0) : a === 2 && s < 12 && (s += 12), this.m_nYear = n, this.m_nMonth = r, i > this.GetDaysInMonth() && SiebelApp.S_App.IsUIEnableDateError() && (M = !0), this.SetDateTime(n, r, i, s, o, u), this.GetDataType() === consts.get("DTYPE_UTCDATETIME") && l.length !== 0 && this.AdjustForTimeZone(l, !0);
          if (M) {
              this.ResetValue(), this.SetError(!0);
              return
          }
          return
      }, e.prototype.SetAsString = function(e) {
          if (!e || e.length === 0) {
              this.ResetValue();
              return
          }
          var t = !1,
              n = !1,
              r = 0,
              i = 0,
              s = 0,
              o = 0,
              u = 0,
              a = 0,
              f = 0;
          if (e.indexOf("/") !== -1) {
              var l = this.ParseDate(e, f, r, i, s),
                  c = l.retVal;
              f = l.nIndex, r = l.nYear, i = l.nMonth, s = l.nDay;
              if (!c) {
                  this.SetError(!0);
                  return
              }
              t = !0
          } else this.SetToNow(), r = this.m_nYear, i = this.m_nMonth, s = this.m_nDay;
          if (f < e.length && e.substr(f).indexOf(":") !== -1) {
              var h = this.ParseTime(e, f, o, u, a);
              f = h.nIndex, o = h.nHour, u = h.nMinute, a = h.nSecond;
              if (!h.retVal) {
                  this.SetError(!0);
                  return
              }
              n = !0
          }
          if (f !== e.length || !t && !n) {
              this.SetError(!0);
              return
          }
          this.SetDateTime(r, i, s, o, u, a);
          return
      }, e.prototype.GetFormat = function() {
          return this.m_sFormat.length === 0 ? SiebelApp.S_App.LocaleObject.GetProfile(consts.get("LOCAL_DATETIME_FORMAT")) : this.m_sFormat
      }, e.prototype.SetFormat = function(e) {
          e = this.PreParseFormat(e), this.m_sFormat = e
      }, e.prototype.AddDays = function(e) {
          e !== 0 && (this.m_nJulian += e, this.JulianToDate())
      }, e.prototype.AddMonths = function(e) {
          var t;
          if (e !== 0) {
              this.m_nMonth += e;
              if (this.m_nMonth < 1 || this.m_nMonth > 12) this.m_nMonth < 1 ? t = this.m_nMonth / 12 - 1 : t = (this.m_nMonth - 1) / 12, this.m_nYear += t, this.m_nMonth -= t * 12;
              this.m_nDay = Math.min(this.m_nDay, this.GetDaysInMonth()), this.DateToJulian()
          }
      }, e.prototype.AddTime = function(e, t, n) {
          var r = 0,
              i;
          if (e === 0 && t === 0 && n === 0) return;
          i = (this.m_nHour + e) * 3600 + (this.m_nMinute + t) * 60 + (this.m_nSecond + n), i < 0 ? r = parseInt(i / SECONDS_PER_DAY - 1, 10) : i >= SECONDS_PER_DAY && (r = parseInt(i / SECONDS_PER_DAY, 10)), i -= r * SECONDS_PER_DAY, this.AddDays(r), this.m_nHour = parseInt(i / 3600, 10), i %= 3600, this.m_nMinute = parseInt(i / 60, 10), this.m_nSecond = parseInt(i % 60, 10)
      }, e.prototype.AddYears = function(e) {
          e !== 0 && (this.m_nYear += e, this.m_nDay = Math.min(this.m_nDay, this.GetDaysInMonth()), this.DateToJulian())
      }, e.prototype.GetDay = function() {
          return this.m_nDay
      }, e.prototype.GetDayOfWeek = function(e) {
          var t = "";
          return e ? t = this._GetAsFormattedString(e ? "%a" : "%A") : t = this._GetAsFormattedString("%w"), parseInt(t, 10)
      }, e.prototype.GetDayOfYear = function() {
          var e = "";
          return e = this._GetAsFormattedString("%j"), parseInt(e, 10)
      }, e.prototype.GetDaysInMonth = function() {
          return this.m_nMonth === 2 && this.IsLeapYear() ? this.GetNDaysInMonth(0) : this.GetNDaysInMonth(this.m_nMonth)
      }, e.prototype.GetHour = function() {
          return this.m_nHour
      }, e.prototype.GetMinute = function() {
          return this.m_nMinute
      }, e.prototype.GetMonth = function(e) {
          if (!e) return this.m_nMonth;
          var t = "";
          return t = this._GetAsFormattedString(e ? "%b" : "%B"), parseInt(t, 10)
      }, e.prototype.GetSecond = function() {
          return this.m_nSecond
      }, e.prototype.GetWeek = function(e) {
          var t = "";
          return t = this._GetAsFormattedString(e ? "%U" : "%W"), parseInt(t, 10)
      }, e.prototype.GetYear = function() {
          return this.m_nYear
      }, e.prototype.IsLeapYear = function() {
          var e = !1;
          return this.m_nYear % 4 === 0 && (e = !0), this.m_nYear % 100 === 0 && (e = !1), this.m_nYear % 400 === 0 && (e = !0), e
      }, e.prototype.SetDate = function(e, t, n) {
          if (e >= 1753 && e <= 4712) {
              t > 12 ? t = 12 : t < 1 && (t = 1);
              if (n >= 1) {
                  this.m_bNull = !1, this.m_nYear = e, this.m_nMonth = t, this.m_nDay = Math.min(n, this.GetDaysInMonth()), this.DateToJulian();
                  return
              }
          }
          this.ResetValue(), this.SetError(!0)
      }, e.prototype.SetDateTime = function(e, t, n, r, i, s) {
          this.SetDate(e, t, n), this.SetTime(r, i, s)
      }, e.prototype.SetTime = function(e, t, n) {
          if (!(e < 0 || e > 23 || t < 0 || t > 59 || n < 0 || n > 59)) {
              this.m_bNull && this.SetToNow(), this.m_bNull = !1, this.m_nHour = e, this.m_nMinute = t, this.m_nSecond = n;
              return
          }
          this.ResetValue(), this.SetError(!0)
      }, e.prototype.SetToNow = function() {
          var e = new Date;
          this.m_bNull = !1, this.m_nYear = e.getFullYear(), this.m_nMonth = e.getMonth() + 1, this.m_nDay = e.getDate(), this.DateToJulian(), this.m_nHour = e.getHours(), this.m_nMinute = e.getMinutes(), this.m_nSecond = e.getSeconds()
      }, e.prototype.DateToJulian = function() {
          var e = this.m_nDay,
              t = this.m_nYear,
              n = this.m_nMonth,
              r, i, s;
          s = t > 0 ? 0 : .75, n <= 2 && (t--, n += 12), i = 0, t * 1e4 + n * 100 + e >= 15821015 && (r = parseInt(t / 100, 10), i = parseInt(2 - r + r / 4, 10)), this.m_nJulian = parseInt(365.25 * t - s, 10) + parseInt(30.6001 * (n + 1), 10) + e + 1720995 + i
      }, e.prototype.JulianToDate = function() {
          var e, t, n, r, i, s, o;
          s = this.m_nJulian, s < 2299161 ? e = s : (o = parseInt((s - 1867216.25) / 36524.25, 10), e = s + 1 + o - o / 4), t = e + 1524, n = parseInt((t - 122.1) / 365.25, 10), r = parseInt(365.25 * n, 10), i = parseInt((t - r) / 30.6001, 10), this.m_nDay = parseInt(t - r - parseInt(30.6001 * i, 10), 10), this.m_nMonth = parseInt(i < 13.5 ? i - 1 : i - 13, 10), this.m_nYear = parseInt(this.m_nMonth > 2.5 ? n - 4716 : n - 4715, 10)
      }, e.prototype._GetAsFormattedString = function(e) {
          var t = "";
          if (this.m_bNull) return t;
          var n, r, i = "";
          for (n = 0; n < e.length; n++) {
              if (e[n] !== "%") {
                  t += e[n];
                  continue
              }
              if (++n >= e.length) {
                  t += "%";
                  break
              }
              if (e[n] === "#") {
                  r = e[n];
                  if (++n >= e.length) {
                      t += "%#";
                      break
                  }
              } else r = "\0";
              switch (e[n]) {
                  case "a":
                      i = SiebelApp.S_App.LocaleObject.GetDayOfWeek((this.m_nJulian + 1) % 7, AX_DAYTYPE_SHORT);
                      break;
                  case "A":
                      i = SiebelApp.S_App.LocaleObject.GetDayOfWeek((this.m_nJulian + 1) % 7, AX_DAYTYPE_LONG);
                      break;
                  case "b":
                      i = SiebelApp.S_App.LocaleObject.GetMonth(this.m_nMonth, !0);
                      break;
                  case "B":
                      i = SiebelApp.S_App.LocaleObject.GetMonth(this.m_nMonth, !1);
                      break;
                  case "d":
                      r === "#" ? i = this.FormatString(this.m_nDay, 0) : i = this.FormatString(this.m_nDay, 2);
                      break;
                  case "H":
                      r === "#" ? i = this.FormatString(this.m_nHour, 0) : i = this.FormatString(this.m_nHour, 2);
                      break;
                  case "I":
                      var s;
                      this.m_nHour === 0 ? s = 12 : this.m_nHour <= 12 ? s = this.m_nHour : s = this.m_nHour - 12, r === "#" ? i = this.FormatString(s, 0) : i = this.FormatString(s, 2);
                      break;
                  case "m":
                      r === "#" ? i = this.FormatString(this.m_nMonth, 0) : i = this.FormatString(this.m_nMonth, 2);
                      break;
                  case "M":
                      r === "#" ? i = this.FormatString(this.m_nMinute, 0) : i = this.FormatString(this.m_nMinute, 2);
                      break;
                  case "p":
                      i = this.m_nHour < 12 ? SiebelApp.S_App.LocaleObject.GetDispTimeAM() : SiebelApp.S_App.LocaleObject.GetDispTimePM();
                      break;
                  case "S":
                      r === "#" ? i = this.FormatString(this.m_nSecond, 0) : i = this.FormatString(this.m_nSecond, 2);
                      break;
                  case "w":
                      i = this.FormatString((this.m_nJulian + 1) % 7, 0);
                      break;
                  case "y":
                      r === "#" ? i = this.FormatString(this.m_nYear % 100, 0) : i = this.FormatString(this.m_nYear % 100, 2);
                      break;
                  case "Y":
                      r === "#" ? i = this.FormatString(this.m_nYear, 0) : i = this.FormatString(this.m_nYear, 4);
                      break;
                  case "%":
                      i = "%";
                      break;
                  default:
                      i = "%", r !== "\0" && (i += r), i += e[n]
              }
              t += i
          }
          return t
      }, e.prototype.GetNextInt = function(e, t, n, r) {
          var i = n,
              s = 0,
              o = "";
          while (t < e.length && (e[t] < "0" || e[t] > "9")) t++;
          s = t;
          for (var u = 0; u < r && t < e.length; u++) {
              if (e[t] < "0" || e[t] > "9") break;
              t++
          }
          return o = e.substr(s, t - s), i = o, {
              sBuf: i,
              extractedInt: parseInt(o, 10),
              nIndex: t
          }
      }, e.prototype.PreParseFormat = function(e) {
          var t = e;
          return t.replace(/consts.get("FORMAT_DATE")/g, SiebelApp.S_App.LocaleObject.GetProfile(consts.get("LOCAL_DATE_FORMAT"))), t.indexOf(consts.get("FORMAT_TIME_NOSEC")) !== -1 ? t.replace(/consts.get("FORMAT_TIME_NOSEC")/g, SiebelApp.S_App.LocaleObject.GetProfile(consts.get("LOCAL_TIME_NOSEC_FORMAT"))) : t.replace(/consts.get("FORMAT_TIME")/g, SiebelApp.S_App.LocaleObject.GetProfile(consts.get("LOCAL_TIME_FORMAT"))), t
      }, e.prototype.FormatString = function(e, t) {
          var n = "";
          switch (t) {
              case 0:
                  n = e.toString(10);
                  break;
              case 2:
                  n = e.toString(10).slice(-2), n.length === 1 && (n = "0" + n);
                  break;
              case 4:
                  n = e.toString(10).slice(-4);
                  var r = "",
                      i = n.length;
                  while (i < 4) r += "0", i++;
                  n = r + n;
                  break;
              default:
                  n = ""
          }
          return n
      }, e.prototype.GetNDaysInMonth = function(e) {
          switch (e) {
              case 0:
                  return 29;
              case 2:
                  return 28;
              case 4:
              case 6:
              case 9:
              case 11:
                  return 30;
              default:
                  return 31
          }
      }, e.prototype.ResetValue = function() {
          this.m_nYear = 0, this.m_nMonth = 0, this.m_nDay = 0, this.m_nJulian = 0, this.m_nHour = 0, this.m_nMinute = 0, this.m_nSecond = 0, this.m_bNull = !0
      }, e.prototype.ParseDate = function(e, t, n, r, i) {
          var s = "",
              o = t,
              u = n,
              a = r,
              f = i,
              l = !1,
              c = this.GetNextInt(e, o, s, 2);
          s = c.sBuf, a = c.extractedInt, o = c.nIndex;
          if (s.length !== 0 && o < e.length && e[o] === "/") {
              c = this.GetNextInt(e, o, s, 2), f = c.extractedInt, s = c.sBuf, o = c.nIndex;
              if (s.length !== 0 && o < e.length && e[o] === "/") {
                  c = this.GetNextInt(e, o, s, 4), u = c.extractedInt, s = c.sBuf, o = c.nIndex;
                  if (s.length === 2 || s.length === 4)
                      if (o === e.length || e[o] === " ") s.length === 2 && (u += u >= 50 ? 1900 : 2e3), l = !0
              }
          }
          return {
              retVal: l,
              nIndex: o,
              nYear: u,
              nMonth: a,
              nDay: f
          }
      }, e.prototype.ParseTime = function(e, t, n, r, i) {
          var s = "",
              o = t,
              u = n,
              a = r,
              f = i,
              l = !1,
              c = this.GetNextInt(e, o, s, 2);
          return s = c.sBuf, u = c.extractedInt, o = c.nIndex, s.length !== 0 && o < e.length && e[o] === ":" && (c = this.GetNextInt(e, o, s, 2), s = c.sBuf, a = c.extractedInt, o = c.nIndex, s.length !== 0 && o < e.length && e[o] === ":" && (c = this.GetNextInt(e, o, s, 2), s = c.sBuf, f = c.extractedInt, o = c.nIndex, o === e.length && (l = !0))), {
              retVal: l,
              nIndex: o,
              nHour: u,
              nMinute: a,
              nSecond: f
          }
      }, e.prototype.VerifyStrictDateFormat = function(e, t) {
          if (!e || e.length === 0) return this.ResetValue(), !1;
          var n = -1,
              r = -1,
              i = -1,
              s = 0,
              o = 0,
              u = 0,
              a = -1,
              f = !1,
              l = "",
              c = 0,
              h = 0,
              p = 0,
              d, v = "",
              m = !1,
              g = !1,
              y, b, w, E = 0,
              S = 0,
              x = 0,
              T = -1,
              N = 0,
              C = e,
              k = "",
              L, A = 0,
              O = 0,
              M, _ = "",
              D = [];
          k = SiebelApp.S_App.LocaleUIProperty.GetProperty("UseANSIControls");
          var P = SiebelApp.S_App.LocaleObject.GetDispTimeAM();
          if (!P || P.length === 0) P = "AM";
          var H = SiebelApp.S_App.LocaleObject.GetDispTimePM();
          if (!H || H.length === 0) H = "PM";
          var B = SiebelApp.S_App.LocaleObject.GetDispDateSeparator(),
              j = SiebelApp.S_App.LocaleObject.GetDispTimeSeparator();
          B === j && (g = !0), B += "/-.";
          var F, I;
          if ((F = C.indexOf("[")) !== -1) {
              I = C.ReverseFind("]");
              if (!(I > -1)) return this.SetError(!0), !1;
              l = C.substr(F, I - F + 1), l && l.length !== 0 && (C = C.substr(0, F) + C.substr(I + 1), l = l.substr(1, I - F - 1))
          }
          b = P.length, y = 0, N = C.length;
          while (y <= N - b) {
              if (P.toLowerCase() === C.substr(y, b).toLowerCase()) {
                  a = 1, C = C.substr(0, y) + C.substr(y + b);
                  break
              }
              y++
          }
          w = H.length, y = 0, N = C.length;
          while (y <= N - w) {
              if (H.toLowerCase() === C.substr(y, w).toLowerCase()) {
                  if (a === 1) return this.SetError(!0), !1;
                  a = 2, C = C.substr(0, y) + C.substr(y + w);
                  break
              }
              y++
          }
          t && t.length !== 0 && this.PreParseFormat(t);
          if (!g) {
              if (t && t.length !== 0) {
                  var q = utils.TokenizeString(t, B);
                  h = q.length
              }
              var R = utils.TokenizeString(C, B);
              c = R.length
          }
          if (t.length === 0) return !0;
          x = t.length, t.indexOf("p") > -1 && (f = !0), v = B + ",.: " + j, A = 0, D = utils.TokenizeString(t, v);
          var U = utils.TokenizeString(C, v),
              z = 0,
              W = !1;
          e: while (p < x) {
              L = U[z], d = t[p];
              switch (d) {
                  case "Y":
                      if (L === "") return !0;
                      k = L;
                      if (g || c-- > 0) {
                          N = k.length;
                          if (!this.IsAllDigits(k) || N !== 2 && N !== 4) {
                              W = !0;
                              break e
                          }
                          n = parseInt(k, 10), N === 2 && (n >= 50 ? n += 1900 : n += 2e3);
                          if (N < D[O].length) {
                              W = !0;
                              break e
                          }
                          z < U.length ? L = U[++z] : L = "", O++
                      }
                      break;
                  case "M":
                      if (L === "") break e;
                      k = L;
                      if (g || c-- > 0) {
                          if (this.IsAllDigits(k)) {
                              N = k.length;
                              if (N < D[O].length) {
                                  W = !0;
                                  break e
                              }
                          }
                          N <= 2 && (r = parseInt(k, 10))
                      } else {
                          if (D[O].length < 3) {
                              W = !0;
                              break e
                          }
                          for (var X = 1; X <= 12; X++) {
                              if (SiebelApp.S_App.LocaleObject.GetMonth(X, !0).toLowerCase() === k.toLowerCase()) {
                                  r = X;
                                  break
                              }
                              if (SiebelApp.S_App.LocaleObject.GetMonth(X, !1).toLowerCase() === k.toLowerCase()) {
                                  r = X;
                                  break
                              }
                          }
                      }
                      if (r < 1 || r > 12) {
                          W = !0;
                          break e
                      }
                      z < U.length ? L = U[++z] : L = "", O++;
                      break;
                  case "D":
                      if (L === "") break e;
                      k = L;
                      if (g || c-- > 0) {
                          if (!this.IsAllDigits(k) || k.length > 2) {
                              W = !0;
                              break e
                          }
                          i = parseInt(k, 10);
                          if (i < 1 || i > 31) {
                              W = !0;
                              break e
                          }
                      }
                      if (k.length < D[O].length) {
                          W = !0;
                          break e
                      }
                      z < U.length ? L = U[++z] : L = "", O++, E++;
                      break;
                  case "H":
                  case "h":
                      if (L === "") break e;
                      k = L, S === 0 && (M = this.IsOneChunk(k, !0), T = M.nChunkLen, m = M.bOneChunk, y = 0);
                      if (m) {
                          if (T === 4 && S === 2) break e;
                          k = L.substr(y, 2), y += 2
                      }
                      if (!this.IsAllDigits(k) || k.length > 2) {
                          W = !0;
                          break e
                      }
                      s = parseInt(k, 10);
                      if (s < 0 || s > 23) {
                          W = !0;
                          break e
                      }
                      if (!m || S === 2) z < U.length ? L = U[++z] : L = "", O++;
                      S++;
                      break;
                  case "m":
                      if (L === "") break e;
                      k = L, S === 0 && (M = this.IsOneChunk(k, !0), T = M.nChunkLen, m = M.bOneChunk, y = 0);
                      if (m) {
                          if (T === 4 && S === 2) break e;
                          k = L.substr(y, 2), y += 2
                      }
                      if (!this.IsAllDigits(k) || k.length > 2) {
                          W = !0;
                          break e
                      }
                      o = parseInt(k, 10);
                      if (o < 0 || o > 59) {
                          W = !0;
                          break e
                      }
                      if (!m || S === 2) z < U.length ? L = U[++z] : L = "", O++;
                      S++;
                      break;
                  case "s":
                      if (L === "") break e;
                      k = L, S === 0 && (y = 0);
                      if (m) {
                          if (T === 4 && S === 2) break e;
                          k = L.substr(y, 2), y += 2
                      }
                      if (!this.IsAllDigits(k) || k.length > 2) {
                          W = !0;
                          break e
                      }
                      u = parseInt(k, 10);
                      if (u < 0 || u > 59) {
                          W = !0;
                          break e
                      }
                      if (!m || S === 2) z < U.length ? L = U[++z] : L = "", O++;
                      S++;
                      break;
                  case "p":
                      O++, p++;
                      break;
                  default:
                      p++
              }
              while (p < x && t[p] === d) p++
          }
          return W ? (this.SetError(!0), !1) : !0
      }, SiebelApp.S_App.DatumDateTimeObject.g_sFormat = "", SiebelApp.S_App.DatumDateTimeObject.g_sFormattedString = "", e
  }()
}
if (typeof SiebelApp.S_App.DatumDateObject == "undefined") {
  SiebelJS.Namespace("SiebelApp.S_App.DatumDateObject");
  var consts = SiebelApp.Constants;
  SiebelApp.S_App.DatumDateObject = function() {
      function e() {
          SiebelApp.S_App.DatumDateObject.superclass.constructor.call(this)
      }
      return SiebelJS.Extend(e, SiebelApp.S_App.DatumDateTimeObject), e.prototype.GetAsString = function() {
          return this._GetAsFormattedString("%m/%d/%Y")
      }, e.prototype.GetDataType = function() {
          return consts.get("DTYPE_DATE")
      }, e.prototype.GetFormat = function() {
          return this.m_sFormat.length === 0 ? SiebelApp.S_App.LocaleObject.GetProfile(consts.get("LOCAL_DATE_FORMAT")) : this.m_sFormat
      }, e.prototype.GetValue = function() {
          return this.m_nJulian
      }, e.prototype.SetValue = function(e) {
          this.m_bNull = !1, this.m_nJulian = e, this.JulianToDate()
      }, e
  }()
}
typeof SiebelApp.S_App.DatumUTCDateTimeObject == "undefined" && (SiebelJS.Namespace("SiebelApp.S_App.DatumUTCDateTimeObject"), SiebelApp.S_App.DatumUTCDateTimeObject = function() {
  function e() {
      SiebelApp.S_App.DatumUTCDateTimeObject.superclass.constructor.call(this)
  }
  return SiebelJS.Extend(e, SiebelApp.S_App.DatumDateTimeObject), e.prototype.AdjustForTimeZone = function(e, t) {
      var n, r;
      r = this.GetAsString();
      if (this.m_bNull) return;
      if (!e || e.length === 0) return;
      t ? (n = SiebelApp.S_App.LocaleObject.GetUtcOffset(e, !0, r), this.AddTime(0, -n, 0), n = SiebelApp.S_App.LocaleObject.GetUtcOffset("", !1, r), this.AddTime(0, n, 0)) : (n = SiebelApp.S_App.LocaleObject.GetUtcOffset("", !0, r), this.AddTime(0, -n, 0), n = SiebelApp.S_App.LocaleObject.GetUtcOffset(e, !1, r), this.AddTime(0, n, 0))
  }, e.prototype.GetDataType = function() {
      return SiebelApp.Constants.get("DTYPE_UTCDATETIME")
  }, e
}());
if (typeof SiebelApp.S_App.DatumTimeObject == "undefined") {
  SiebelJS.Namespace("SiebelApp.S_App.DatumTimeObject");
  var SECONDS_PER_DAY = 86400;
  SiebelApp.S_App.DatumTimeObject = function() {
      function e() {
          SiebelApp.S_App.DatumTimeObject.superclass.constructor.call(this)
      }
      return SiebelJS.Extend(e, SiebelApp.S_App.DatumDateTimeObject), e.prototype.GetAsString = function() {
          return this._GetAsFormattedString("%H:%M:%S")
      }, e.prototype.GetDataType = function() {
          return SiebelApp.Constants.get("DTYPE_TIME")
      }, e.prototype.GetFormat = function() {
          return this.m_sFormat.length === 0 ? SiebelApp.S_App.LocaleObject.GetProfile(SiebelApp.Constants.get("LOCAL_TIME_FORMAT")) : this.m_sFormat
      }, e.prototype.GetValue = function() {
          return this.m_nHour * 3600 + this.m_nMinute * 60 + this.m_nSecond
      }, e.prototype.SetValue = function(e) {
          var t = 0;
          this.m_bNull = !1, t %= SECONDS_PER_DAY, this.m_nHour = e / 3600, e %= 3600, this.m_nMinute = e / 60, this.m_nSecond = e % 60
      }, e
  }()
}
require.exec("for(var reg in contexts['_'].registry){if(contexts['_'].registry.hasOwnProperty(reg)){contexts['_'].registry[reg].enable();} useInteractive = true;}");
