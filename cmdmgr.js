if (typeof(SiebelApp.CommandManager) == "undefined") {
  SiebelJS.Namespace("SiebelApp.CommandManager");
  SiebelApp.CommandManager = (function() {
      var B = SiebelApp.Utils;
      var t = SiebelApp.Constants;
      var l;
      var z;
      var A;
      var d = {};
      var o = {};
      var b = CCFMiscUtil_CreatePropSet();
      var p = CCFMiscUtil_CreatePropSet();
      var E = CCFMiscUtil_CreatePropSet();
      var y = CCFMiscUtil_CreatePropSet();
      var v = CCFMiscUtil_CreatePropSet();
      var C = CCFMiscUtil_CreatePropSet();
      var s = CCFMiscUtil_CreatePropSet();
      var w = CCFMiscUtil_CreatePropSet();
      var m = CCFMiscUtil_CreatePropSet();
      var q = CCFMiscUtil_CreatePropSet();
      var u;
      var D;
      var x = t.get("PROP_KEY"),
          j = t.get("PROP_COMMAND");

      function r(F) {
          A = this;
          SiebelApp.CommandManager = function() {
              return A
          };
          SiebelApp.CommandManager.prototype = r.prototype;
          SiebelApp.CommandManager.GetInstance = r.GetInstance;
          A.constructor = r;
          this.Initialize();
          l = F;
          return A
      }
      r.GetInstance = function() {
          return A
      };
      r.prototype.Initialize = function() {
          $("html").bind("keydown", function(F) {
              SiebelApp.S_App.GetCmdMgr().FireAccelerator(F, F.which, B.GetEventNType(F))
          });
          window.addEventListener("click", function(G) {
              if (G && G.detail === 2 && $(G.target).attr("type") !== "checkbox") {
                  var F = false;
                  if ($(G.target).attr("data-allowdblclick") === "true") {
                      F = true
                  }
                  if ($(G.target).parents('[data-allowdblclick="true"]').length > 0) {
                      F = true
                  }
                  if (!F) {
                      G.stopPropagation()
                  }
              }
          }, true)
      };
      r.prototype.SetGlobalAccl = function(F) {
          s = F
      };
      r.prototype.GetGlobalAccl = function() {
          return s
      };
      r.prototype.SetBaseAccl = function(F) {
          w = F
      };
      r.prototype.GetBaseAccl = function() {
          return w
      };
      r.prototype.GetBatchMethods = function() {
          return b
      };
      r.prototype.SetRefreshTB = function(F) {
          u = F
      };
      r.prototype.GetRefreshTB = function() {
          return u
      };
      r.prototype.SetToolbar = function(F) {
          D = F
      };
      r.prototype.GetToolbar = function() {
          return D
      };
      r.prototype.UpdateBatchMethods = function(F) {
          b.Reset();
          return this.AppendBatchMethods(F)
      };
      r.prototype.AppendBatchMethods = function(F) {
          var J = true;
          var I;
          var G = F.EnumProperties(true);
          var H = t.get("CMDMGR_HASH");
          while (!B.IsEmpty(G)) {
              if (G.indexOf(H) == 0) {
                  b.SetProperty(G, F.GetProperty(G))
              }
              G = F.EnumProperties(false)
          }
          return true
      };
      r.prototype.InvokeServerCommand = function(L, G, M, I) {
          if (B.IsEmpty(l)) {
              return false
          }
          if (B.IsEmpty(z)) {
              z = l.GetService(t.get("CMDMGR_SERVICE"));
              if (B.IsEmpty(z)) {
                  return false
              }
          }
          if (L.indexOf(t.get("CMDMGR_HASH")) < 0) {
              G.SetProperty(t.get("SWEJI"), t.get("CMDMGR_FALSE"));
              G.SetProperty(t.get("SWEDIC"), t.get("CMDMGR_TRUE"))
          }
          var F = G.EncodeAsString();
          var K = CCFMiscUtil_CreatePropSet();
          var H = {};
          var J = this;
          if (typeof(I) === "object" || typeof(I) === "boolean") {
              H.scope = this;
              H.async = (typeof(I.async) === "boolean") ? I.async : I;
              H.selfbusy = I.selfbusy || false;
              H.mask = I.mask || false;
              H.cb = function() {
                  var N = [];
                  N.push(arguments[0]);
                  N.push(arguments[1]);
                  N.push(J.PostCommandExecute.apply(J, arguments));
                  if (typeof(I.scope.PostExecute) === "function") {
                      I.scope.PostExecute.apply(I.scope || null, N)
                  }
              }
          } else {
              H = undefined
          }
          K = z.InvokeMethod(L, G, H);
          if (typeof(I) === "undefined") {
              if (!K.IsEmpty()) {
                  M.DeepCopy(K.GetChildByType(t.get("SWE_PROP_RESULTSET")));
                  if (M.IsEmpty()) {
                      M.Copy(K)
                  }
                  return true
              } else {
                  return false
              }
          }
      };
      r.prototype.PostCommandExecute = function(F, I, H) {
          var G = CCFMiscUtil_CreatePropSet();
          if (!H.IsEmpty()) {
              G.DeepCopy(H.GetChildByType(t.get("SWE_PROP_RESULTSET")));
              if (G.IsEmpty()) {
                  G.Copy(H)
              }
              return G
          } else {
              return false
          }
      };
      r.prototype.GetCachedMenu = function(F) {
          if (!B.IsEmpty(d[F])) {
              return d[F]
          }
      };
      r.prototype.SetCachedMenu = function(F, G) {
          if (B.IsEmpty(d[F])) {
              d[F] = G
          }
      };
      r.prototype.RemoveCachedMenu = function(F) {
          if (!B.IsEmpty(d[F])) {
              delete d[F]
          }
      };
      r.prototype.InvokeCommand = function(J, F, H) {
          var I;
          if (F === true || F === false) {
              I = F
          } else {
              I = true
          }
          if (typeof(H) === "object" || typeof(H) === "boolean") {
              var G = {};
              G.scope = this;
              G.async = (typeof(H.async) === "boolean") ? H.async : H;
              G.selfbusy = H.selfbusy || false;
              G.mask = H.mask || false;
              G.cb = function() {
                  var K = Array.prototype.slice.call(arguments);
                  if (typeof(H.scope) !== "undefined" && typeof(H.scope.cb) === "function") {
                      H.scope.cb.apply(H.scope || null, K)
                  }
              };
              i.call(this, J, I, G)
          } else {
              return (i.call(this, J, I, H))
          }
      };
      r.prototype.AppendBatchMethods = function(I) {
          var H = I.EnumProperties(true);
          var F = this.GetBatchMethods();
          var G = t.get("CMDMGR_HASH");
          while (H) {
              if (!B.IsEmpty(H) && H.indexOf(G) >= 0) {
                  F.SetProperty(H, I.GetProperty(H))
              }
              H = I.EnumProperties(false)
          }
      };

      function i(G, Y, L) {
          var ad;
          var P;
          var S;
          var af = CCFMiscUtil_CreatePropSet();
          var ab = CCFMiscUtil_CreatePropSet();
          var aa = CCFMiscUtil_CreatePropSet();
          var F = CCFMiscUtil_CreatePropSet();
          var H;
          var M;
          var K = CCFMiscUtil_CreatePropSet();
          var U = false;
          if (Y) {
              M = CCFMiscUtil_CreatePropSet()
          }
          if (!c.call(this, G, K)) {
              if (Y) {
                  H = CCFMiscUtil_CreatePropSet();
                  var W;
                  H = this.ProcessCommandState(G);
                  W = H.GetProperty(t.get("CMDMGR_DELEGATE_APPLET"));
                  if (B.IsEmpty(W)) {
                      if (l) {
                          if (!z) {
                              z = l.GetService(t.get("CMDMGR_SERVICE"))
                          }
                          if (z) {
                              ad = l.GetMainView();
                              if (ad) {
                                  P = ad.GetActiveApplet();
                                  if (P) {
                                      U = P.InvokeMethod("ImplicitCommit", af);
                                      if (!U) {
                                          return false
                                      }
                                  }
                              }
                          }
                      }
                      aa = h.call(this, G, ab);
                      if (!this.InvokeServerCommand(G, aa, F, L)) {
                          return false
                      }
                  } else {
                      var O;
                      var ac;
                      O = H.GetProperty(t.get("CMDMGR_DELEGATE_METHOD"));
                      ad = l.GetMainView();
                      if (ad && W) {
                          P = ad.GetApplet(W);
                          if (!P) {
                              return (false)
                          }
                      }
                      if (P) {
                          bstrName = P.GetName();
                          ac = ad.SetActiveAppletByName(bstrName, false);
                          if (!ac) {
                              return (false)
                          }
                          af = l.NewPropertySet();
                          U = P.InvokeMethod(O, af);
                          return (U == true)
                      }
                  }
              } else {
                  return n.call(this, G)
              }
          }
          if (Y) {
              M = h.call(this, G, K)
          }
          var V = K.GetProperty(t.get("PROP_TARGET"));
          var Z = K.GetProperty(t.get("PROP_APPLET"));
          var R = K.GetProperty(t.get("PROP_SERVICE"));
          var Q = String(K.GetProperty(t.get("PROP_METHOD")));
          var T;
          var J;
          if (B.IsEmpty(Q) || B.IsEmpty(V)) {
              return false
          }
          if (B.IsEmpty(l)) {
              return false
          }
          if (B.IsEmpty(Z)) {
              if (V == "Browser Applet" || !B.IsEmpty(R)) {
                  T = l.GetActiveView();
                  if (!B.IsEmpty(T)) {
                      J = T.GetActiveApplet()
                  }
                  if (!J) {
                      J = SiebelApp.S_App.GetExternalActiveApplet()
                  }
                  if (!B.IsEmpty(J)) {
                      Z = J.GetName()
                  }
              }
              if (V == "Browser Applet" && B.IsEmpty(Z)) {
                  return false
              }
          }
          if (!B.IsEmpty(R)) {
              var ae = l.GetService(R);
              if (!B.IsEmpty(ae)) {
                  if (!B.IsEmpty(Z)) {
                      T = l.GetActiveView();
                      if (!B.IsEmpty(T)) {
                          J = T.GetApplet(Z);
                          if (!B.IsEmpty(J)) {
                              var X = J.GetBusComp()
                          }
                      }
                  }
                  if (Y) {
                      if (ae.CanInvokeMethod(Q)) {
                          var I = M.EncodeAsString();
                          var N = CCFMiscUtil_CreatePropSet();
                          N.SetProperty(t.get("SWE_INPUT_PS"), I);
                          U = ae.InvokeMethod(Q, N, L)
                      }
                  } else {
                      U = ae.CanInvokeMethod(Q)
                  }
              }
          } else {
              if (!B.IsEmpty(Z)) {
                  T = l.GetActiveView();
                  if (!B.IsEmpty(T)) {
                      J = T.GetApplet(Z)
                  }
                  if (!J) {
                      J = SiebelApp.S_App.GetExternalActiveApplet()
                  }
                  if (!B.IsEmpty(J)) {
                      if (Y) {
                          if (J.CanInvokeMethod(Q)) {
                              var I = M.EncodeAsString();
                              var N = CCFMiscUtil_CreatePropSet();
                              N.SetProperty(t.get("SWE_INPUT_PS"), I);
                              U = J.InvokeMethod(Q, N, L)
                          }
                      } else {
                          U = J.CanInvokeMethod(Q)
                      }
                  }
              } else {
                  if (Y) {
                      if (l.CanInvokeMethod(Q)) {
                          var I = M.EncodeAsString();
                          var af = CCFMiscUtil_CreatePropSet();
                          af.DecodeFromString(I);
                          var U = l.InvokeMethod(Q, af, L)
                      }
                  } else {
                      U = l.CanInvokeMethod(Q)
                  }
              }
          }
          return U
      }
      r.prototype.ProcessCommandState = function(G) {
          var F = CCFMiscUtil_CreatePropSet();
          if (G.indexOf(t.get("CMDMGR_HASH")) >= 0) {
              if (E.GetChildByType(G)) {
                  F = E.GetChildByType(G)
              } else {
                  if (y.GetChildByType(G)) {
                      F = y.GetChildByType(G)
                  }
              }
          }
          return F
      };

      function h(K, J) {
          var F;
          var H;
          var G;
          var I = CCFMiscUtil_CreatePropSet();
          I = B.IsEmpty(p.GetChildByType(K)) ? I : p.GetChildByType(K);
          if (B.IsEmpty(I)) {
              if (v.GetChildByType(K)) {
                  return I
              }
          }
          if (K.indexOf(t.get("CMDMGR_HASH")) >= 0) {
              return I
          }
          I.SetProperty(j, K);
          F = J.GetProperty(t.get("PROP_ARGUMENT"));
          if (!B.IsEmpty(F)) {
              I.SetProperty(t.get("PROP_ARGUMENT"), F)
          }
          H = J.GetProperty(t.get("PROP_DX"));
          G = J.GetProperty(t.get("PROP_DY"));
          if (!B.IsEmpty(H) && !B.IsEmpty(G)) {
              I.SetProperty(t.get("SWE_SHOW_POPUP_STR"), t.get("CMDMGR_TRUE"));
              I.SetProperty(t.get("SWEW"), H);
              I.SetProperty(t.get("SWEH"), G)
          }
          return I
      }
      r.prototype.ProcessNotifications = function(J) {
          var I = J.Clone();
          var G;
          var F;
          m = I.GetChildByType("StateToolBar");
          y = I.GetChildByType("StateExToolBar");
          v = I.GetChildByType("FlagsToolBar");
          F = I.GetProperty("RefreshToolbar");
          if (F && F == "true") {
              this.SetRefreshTB(F)
          }
          G = I.GetChildByType("StateEx");
          if (G) {
              k.call(this, G)
          }
          G = I.GetChildByType("Flags");
          if (G) {
              g.call(this, G)
          }
          G = I.GetChildByType("Accelerators");
          if (G) {
              this.PrepareAccelerators(G)
          }
          G = I.GetChildByType("Toolbar");
          if (G) {
              if (this.GetToolbar()) {
                  this.GetToolbar().HandleResponsePS(G)
              } else {
                  var H = new SiebelAppFacade.ToolbarPM({
                      GetName: function() {
                          return "ToolbarPxy"
                      }
                  });
                  this.SetToolbar(H);
                  H.Init();
                  H.Setup(G);
                  H.Show()
              }
          }
          I = J = G = null
      };
      r.prototype.CanInvokeCommand = function(F) {
          if (!B.IsEmpty(F)) {
              return i.call(this, F, false)
          } else {
              return false
          }
      };
      r.prototype.UpdateUIControls = function() {
          if (this.GetToolbar()) {
              this.GetToolbar().ExecuteMethod("Update")
          }
      };
      r.prototype.PrepareAccelerators = function(F) {
          var K = CCFMiscUtil_CreatePropSet();
          var H = CCFMiscUtil_CreatePropSet();
          var I;
          for (var J = 0, G = F.GetChildCount(); J < G; J++) {
              K = F.GetChild(J);
              I = K.GetType();
              if (!C.GetChildByType(I)) {
                  C.AddChild(K);
                  this.InitializeAccelerators(K)
              }
          }
      };
      r.prototype.InitializeAccelerators = function(H) {
          var K;
          var J;
          var G;
          var I;
          a.call(this, 13, 0, 1, 0);
          a.call(this, 27, 0, 0, 0);
          a.call(this, 27, 0, 1, 0);
          a.call(this, 9, 0, 0, 0);
          a.call(this, 9, 0, 1, 0);
          for (bFirst = true;
              (child = H.EnumChildren(bFirst)) != null && child.GetPropertyCount() > 0; bFirst = false) {
              var F = child.GetProperty("key");
              if (F != null) {
                  K = parseInt(F.charAt(0), 10);
                  J = parseInt(F.charAt(1), 10);
                  G = parseInt(F.charAt(2), 10);
                  I = parseInt(F.substr(3), 10);
                  if (I != 0) {
                      a.call(this, I, K, J, G)
                  }
              }
          }
      };

      function a(J, K, I, H) {
          var G = 0;
          if (H) {
              G |= 4
          }
          if (I) {
              G |= 1
          }
          if (K) {
              G |= 2
          }
          var F = "" + G + J;
          o[F] = F
      }
      r.prototype.FireAccelerator = function(H, G, F) {
          if (G <= 0) {
              return false
          }
          if (e.call(this, G, F) || G === 13) {
              if (this.ProcessAccelerator(H, G) === true) {
                  H.preventDefault();
                  H.stopPropagation()
              }
          }
      };
      r.prototype.ProcessAccelerator = function(W, ac) {
          var ad = "0";
          var H = "0";
          var Z = "0";
          var K = "";
          var ab;
          var P;
          var M;
          var O;
          var T = CCFMiscUtil_CreatePropSet();
          var G = CCFMiscUtil_CreatePropSet();
          var U = CCFMiscUtil_CreatePropSet();
          var R = CCFMiscUtil_CreatePropSet();
          var S = "";
          var I;
          var Y, V;
          var aa;
          var L;
          if (ac == 16 || ac == 17 || ac == 18) {
              return false
          }
          if (W.altKey) {
              Z = "1"
          }
          if (W.ctrlKey) {
              H = "1"
          }
          if (W.shiftKey) {
              ad = "1"
          }
          K += ad + H + Z + ac;
          if (SiebelApp.S_App) {
              ab = SiebelApp.S_App.GetMainView();
              if (ab) {
                  P = ab.GetActiveApplet();
                  if (!P) {
                      P = SiebelApp.S_App.GetExternalActiveApplet()
                  }
                  if (P) {
                      if (K == "01013") {
                          O = P.InvokeMethod("OnEnterKey", null);
                          if (!O) {
                              return false
                          }
                          return true
                      } else {
                          if (K == "00027") {
                              O = P.InvokeMethod("OnEscapeKey", null);
                              if (!O) {
                                  return false
                              }
                              return true
                          } else {
                              if (K == "00013") {
                                  O = P.InvokeMethod("OnEnterKey");
                                  if (!O) {
                                      return false
                                  }
                                  return true
                              }
                          }
                      }
                      M = P.GetName();
                      if (!B.IsEmpty(M)) {
                          if (C.GetChildByType(M)) {
                              T = C.GetChildByType(M);
                              var N = T.GetChildCount();
                              for (Y = 0; Y < N; Y++) {
                                  G = T.GetChild(Y);
                                  S = G.GetProperty(x);
                                  if (K != S) {
                                      continue
                                  }
                                  I = G.GetProperty(j);
                                  this.InvokeCommand(I, true, true);
                                  return true
                              }
                              var Q = T.GetChildCount();
                              for (Y = 0; Y < Q; Y++) {
                                  G = T.GetChild(Y);
                                  if (G.GetProperty(t.get("PROP_CLASS"))) {
                                      aa = G.GetProperty(t.get("PROP_CLASS"));
                                      if (this.GetBaseAccl().GetChildByType(aa)) {
                                          U = this.GetBaseAccl().GetChildByType(aa);
                                          var X = U.GetChildCount();
                                          for (V = 0; V < X; V++) {
                                              R = U.GetChild(V);
                                              S = R.GetProperty(x);
                                              if (K != S) {
                                                  continue
                                              }
                                              I = R.GetProperty(j);
                                              L = f.call(this, I, M);
                                              this.InvokeCommand(L, true, true);
                                              return true
                                          }
                                      }
                                  }
                              }
                          }
                      }
                  }
              }
          }
          G.Reset();
          var J = this.GetGlobalAccl(),
              F;
          for (Y = 0, F = J.GetChildCount(); Y < F; Y++) {
              G = J.GetChild(Y);
              S = G.GetProperty(x);
              if (K != S) {
                  continue
              }
              I = G.GetProperty(j);
              this.InvokeCommand(I, true, true);
              return true
          }
          return false
      };

      function f(J, G) {
          var I = CCFMiscUtil_CreatePropSet();
          var H = "";
          c.call(this, J, I);
          var F = I.GetProperty(t.get("PROP_APPLET"));
          if (F == "#AN") {
              I.SetProperty(t.get("PROP_APPLET"), G);
              H = I.EncodeAsString();
              return H
          }
          return J
      }

      function e(H, I) {
          var G = false;
          var F = "" + I + H;
          if (F == "09") {
              return false
          }
          if (o[F]) {
              G = true
          }
          return G
      }

      function k(G) {
          var J;
          var L;
          var I;
          var H;
          var K;
          var F;
          for (H = 0, F = G.GetChildCount(); H < F; H++) {
              J = G.GetChild(H);
              I = J.GetType();
              K = E.FindChildPosition(I);
              if (K >= 0 && K < E.GetChildCount()) {
                  E.RemoveChild(K)
              }
              E.AddChild(J)
          }
      }

      function g(H) {
          var G;
          var I;
          var F;
          for (I = 0, F = H.GetChildCount(); I < F; I++) {
              G = H.GetChild(I);
              p.AddChild(G)
          }
      }

      function n(G) {
          var H = this.GetBatchMethods();
          var F = false;
          if (m) {
              F = m.GetProperty(G)
          }
          if (B.IsEmpty(F) && !B.IsEmpty(H)) {
              F = H.GetProperty(G)
          }
          return (F == t.get("CMDMGR_TRUE"))
      }

      function c(H, G) {
          if (H.indexOf(t.get("CMDMGR_AT")) >= 0) {
              G.DecodeFromString(H);
              return (true)
          }
          if (H.indexOf(t.get("CMDMGR_STAR")) < 0) {
              return (false)
          }
          var F = H.split(t.get("CMDMGR_STAR"));
          F.shift();
          if (!B.IsEmpty(F[0])) {
              G.SetProperty(t.get("PROP_TARGET"), B.Trim(F[0]))
          }
          if (!B.IsEmpty(F[1])) {
              G.SetProperty(t.get("PROP_SERVICE"), B.Trim(F[1]))
          }
          if (!B.IsEmpty(F[2])) {
              G.SetProperty(t.get("PROP_METHOD"), B.Trim(F[2]))
          }
          if (!B.IsEmpty(F[3])) {
              G.SetProperty(t.get("PROP_APPLET"), B.Trim(F[3]))
          }
          if (!B.IsEmpty(F[4])) {
              G.SetProperty(t.get("PROP_ARGUMENT"), B.Trim(F[4]))
          }
          if (!B.IsEmpty(F[5])) {
              G.SetProperty(t.get("PROP_DX"), B.Trim(F[5]))
          }
          if (!B.IsEmpty(F[6])) {
              G.SetProperty(t.get("PROP_DY"), B.Trim(F[6]))
          }
          return (true)
      }
      return r
  }())
};
