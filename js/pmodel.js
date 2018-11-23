if (typeof(SiebelAppFacade.BasePM) === "undefined") {
  SiebelJS.Namespace("SiebelAppFacade.BasePM");
  SiebelAppFacade.BasePM = (function() {
      var x = SiebelJS.Dependency("SiebelApp.Utils"),
          p = SiebelJS.Dependency("SiebelApp.Constants");
      var b = p.get("SWE_PROP_BC_OPERATION"),
          h = p.get("SWE_EXTN_CANCEL_ORIG_OP"),
          t = p.get("SWE_EXTN_CANCEL_POST_OP"),
          u = p.get("SWE_EXTN_RETVAL"),
          l = p.get("SWE_EXTN_STOP_PROP_OP");
      var k = {},
          d = {},
          s = {},
          m = {},
          z = {},
          o = {},
          e = {},
          f = {};

      function y(C) {
          var B = C.GetName() + "_PM";
          this.GetPMName = function() {
              return B
          };
          this.GetObjName = function() {
              return C.GetName()
          };
          k[B] = C;
          d[B] = {};
          s[B] = {};
          m[B] = {};
          z[B] = {};
          o[B] = {};
          e[B] = {};
          f[B] = {};
          var D;
          this.GetRenderer = function() {
              return D
          };
          this.SetRenderer = function(E) {
              D = E
          }
      }

      function a(C, B, D) {
          this[h] = C || false;
          this[t] = B || false;
          this[u] = D || null
      }
      y.prototype.Init = function() {
          var D = k[this.GetPMName()],
              E = null,
              C = 0,
              B = 0;
          if (D) {
              E = D.GetPropArray();
              for (C = 0, B = E.length; C < B; C++) {
                  this.AddProperty(E[C], null, {
                      core: true
                  })
              }
              E = D.GetMethodArray();
              for (C = 0, B = E.length; C < B; C++) {
                  this.AddMethod(E[C], null, {
                      core: true
                  })
              }
              E = null
          }
          this.AddMethod("PostExecute", this.HandlePreExecute, {
              sequence: true,
              scope: this
          });
          this.AddMethod("PostExecute", this.HandlePostExecute, {
              sequence: false,
              scope: this
          });
          this.AddMethod("AddLocalString", function(F, G) {
              SiebelApp.S_App.LocaleObject.AddLocalString(F, G);
              return G
          })
      };
      y.prototype.Setup = function(O) {
          if (!(k[this.GetPMName()] instanceof SiebelApp.S_App.Applet) && !(k[this.GetPMName()] === SiebelApp.S_App.CommToolbar) && !(k[this.GetPMName()].GetName() === p.get("SWE_PST_SEARCH_NAME"))) {
              var N = "";
              var F = O.GetProperty(p.get("SWE_UIDEF_PR_CTR"));
              if (F) {
                  F = F.split(".");
                  if (F[0]) {
                      N = window[F[0]];
                      for (var G = 1, M = F.length; G < M && N; G++) {
                          N = N[F[G]]
                      }
                  }
              } else {
                  var L = O.GetProperty(p.get("SWE_PROP_OUI_PRENDERER"));
                  F = SiebelApp.S_App.GetConstructorFromKey(L) + ".";
                  var C = O.GetProperty("SWE_OUI_RENDERER");
                  var E = "";
                  var R = 0;
                  var I = F.indexOf(".");
                  while (I != -1) {
                      var Q = F.substring(R, I);
                      E = (E == "") ? window[Q] : E[Q];
                      R = I + 1;
                      I = F.indexOf(".", R)
                  }
                  N = E || SiebelAppFacade[C] || SiebelAppFacade.PhysicalRenderer
              }
              this.SetRenderer(new N(this))
          } else {
              var B = O.GetChildByType("apm");
              if (!x.IsEmpty(B)) {
                  var K;
                  if (B) {
                      K = B.EnumProperties(true);
                      do {
                          this.AddProperty(K, B.GetProperty(K))
                      } while ((K = B.EnumProperties(false)))
                  }
                  var P = B.GetProperty("Max List Columns Tablet");
                  if (P !== undefined && P !== null) {
                      this.SetProperty("maxListColTablet", P)
                  }
                  var H = B.GetProperty("Max List Columns Phone");
                  if (H !== undefined && H !== null) {
                      this.SetProperty("maxListColPhone", H)
                  }
                  var D = B.GetProperty("Default Applet Display Mode");
                  if (D !== undefined && D !== null) {
                      this.SetProperty("defaultAppletDisplayMode", D.toString().toLowerCase())
                  }
                  var J = B.GetProperty("EnableDragAndDropInList");
                  if (J !== undefined && J !== null) {
                      this.SetProperty("enableDragAndDropInList", J)
                  }
              }
          }
      };
      y.prototype.Show = function() {
          if (!(k[this.GetPMName()] instanceof SiebelApp.S_App.Applet)) {
              var B = this.GetRenderer();
              B.ShowUI();
              B.BindEvents();
              B.BindData()
          }
      };
      y.prototype.HandlePreExecute = function(C, E, D) {
          if (!e[this.GetPMName()]) {
              return
          }
          var B = e[this.GetPMName()].ALL || [];
          w.call(this, B, C, E, D);
          B = e[this.GetPMName()].NOT || [];
          w.call(this, B, C, E, D);
          B = e[this.GetPMName()][C] || [];
          w.call(this, B, C, E, D)
      };
      y.prototype.HandlePostExecute = function(C, E, D) {
          if (!f[this.GetPMName()]) {
              return
          }
          var B = f[this.GetPMName()].ALL || [];
          w.call(this, B, C, E, D);
          B = f[this.GetPMName()].NOT || [];
          w.call(this, B, C, E, D);
          B = f[this.GetPMName()][C] || [];
          w.call(this, B, C, E, D)
      };

      function w(C, E, G, F) {
          for (var D = 0, B = C.length; D < B; D++) {
              C[D][0].call(C[D][1], E, G.Clone(), F.Clone())
          }
      }
      y.prototype.HandleNotify = function(C) {
          var D = C.GetProperty(b);
          var F = z[this.GetPMName()][D] || [];
          for (var E = 0, B = F.length; E < B; E++) {
              F[E][0].call(F[E][1], C.Clone())
          }
      };
      y.prototype.HandleResponsePS = function(H) {
          var D = H.GetChildCount();
          var F = o[this.GetPMName()] || {};
          for (var E = 0; E < D; E++) {
              var J = H.GetChild(E);
              var I = J.GetType();
              if (F[I]) {
                  var B = F[I];
                  for (var C = 0, G = B.length; C < G; C++) {
                      B[C][0].call(B[C][1], J.Clone())
                  }
              }
          }
      };
      y.prototype.OnControlEvent = function(I) {
          var G = false;
          var L = null;
          var O = [];
          var Q = arguments.length;
          var E = {};
          var M = false;
          var C = m[this.GetPMName()];
          for (var H = 1; H < Q; H++) {
              if (arguments[H] && (arguments[H].async === true || arguments[H].async === false)) {
                  L = arguments[H]
              } else {
                  O.push(arguments[H])
              }
          }
          var D;
          var N = k[this.GetPMName()];
          var P = {};
          var B = false;
          if (L && (L.async === true || L.async === false)) {
              B = true;
              P.scope = this;
              P.target = L.target;
              if (typeof(L.async) !== "boolean") {
                  P.async = true
              } else {
                  P.async = L.async
              }
              P.selfbusy = L.selfbusy || false;
              P.mask = L.mask || false;
              P.cb = function() {
                  var R = Array.prototype.slice.call(arguments);
                  if (typeof(L.cb) === "function") {
                      L.cb.apply(L.scope || null, R)
                  }
              }
          }
          if (C && C[I]) {
              var K = C[I] || [];
              var J = K.length;
              for (var H = J - 1; H >= 0; H--) {
                  if (!M || (K[H].core && !E[h])) {
                      if (typeof(K[H].handler) === "function") {
                          O.push(P);
                          O.push(E);
                          G = K[H].handler.apply(this, O)
                      } else {
                          if (typeof(K[H].handler) === "string") {
                              O.push(E);
                              G = this.ExecuteMethod.apply(this, [K[H].handler].concat(O))
                          }
                      }
                  }
                  if (E[h] && E[l]) {
                      return G
                  } else {
                      if (E[l]) {
                          M = true
                      }
                  }
              }
              if (E[h]) {
                  return G
              }
          }
          switch (I) {
              case p.get("PHYEVENT_INVOKE_CONTROL"):
                  if (!B) {
                      P.async = true
                  }
                  if (O[0] === "NewQuery" || O[0] === "UndoQuery" || O[0] === "GotoNextSet" || O[0] === "GotoPreviousSet") {
                      P.async = false
                  }
                  O.push(P);
                  G = N.InvokeControlMethod.apply(N, O);
                  break;
              case p.get("PHYEVENT_CONTROL_BLUR"):
                  G = N.OnBlur.apply(N, O);
                  break;
              case p.get("PHYEVENT_CONTROL_FOCUS"):
                  G = N.OnFocus.apply(N, O);
                  break;
              case p.get("PHYEVENT_APPLET_FOCUS"):
                  D = CCFMiscUtil_CreatePropSet();
                  G = N.InvokeMethod("OnFocus", D);
                  break;
              case p.get("PHYEVENT_INVOKE_DETAIL_POPUP"):
              case p.get("PHYEVENT_INVOKE_EFFDAT"):
              case p.get("PHYEVENT_INVOKE_PICK"):
                  if (!this.ExecuteMethod("hasRecords") && !this.Get("IsInQueryMode")) {
                      return false
                  }
              case p.get("PHYEVENT_INVOKE_COMBO"):
              case p.get("PHYEVENT_INVOKE_CURRENCY"):
              case p.get("PHYEVENT_INVOKE_MVG"):
                  if (I === p.get("PHYEVENT_INVOKE_COMBO") && !this.ExecuteMethod("CanUpdate", O[0].GetName())) {
                      return false
                  }
                  N.SetActiveControl.apply(N, O);
                  D = CCFMiscUtil_CreatePropSet();
                  G = N.InvokeControlMethod("EditPopup", D, B);
                  break;
              case p.get("PHYEVENT_CANCEL_QRY_POPUP"):
                  A.call(this);
                  break;
              case p.get("PHYEVENT_DRILLDOWN_FORM"):
                  N.SetActiveControl.apply(N, O);
                  D = CCFMiscUtil_CreatePropSet();
                  D.SetProperty(p.get("SWE_FIELD_STR"), O[0].GetInputName());
                  if (!B) {
                      G = N.InvokeControlMethod("DrillDown", D)
                  } else {
                      G = N.InvokeControlMethod("DrillDown", D, P)
                  }
                  break;
              case p.get("PHYEVENT_INVOKE_TOGGLE"):
                  D = CCFMiscUtil_CreatePropSet();
                  D.SetProperty(p.get("SWE_SEQ_STR"), O[0]);
                  G = N.InvokeControlMethod("ToggleTo", D);
                  break;
              case p.get("PHYEVENT_ENTER_KEY_PRESS"):
                  G = false;
                  if (this.Get("isControlPopupOpen")) {
                      this.SetProperty("isControlPopupOpen", false);
                      G = true
                  } else {
                      var F = O[0].GetDefaultMethod();
                      if (F && N.CanInvokeMethod(F)) {
                          D = CCFMiscUtil_CreatePropSet();
                          N.InvokeMethod(F, D);
                          G = true
                      }
                  }
                  break;
              case p.get("PHYEVENT_ESCAPE_KEY_PRESS"):
              case p.get("PHYEVENT_TAB_KEY_PRESS"):
                  if (this.Get("isControlPopupOpen")) {
                      this.SetProperty("isControlPopupOpen", false)
                  }
                  break
          }
          return G
      };
      y.prototype.EndLife = function() {
          var B = this.GetRenderer();
          if (B && B.EndLife) {
              B.EndLife()
          }
          B = null;
          this.SetRenderer(B);
          delete d[this.GetPMName()];
          delete s[this.GetPMName()];
          delete m[this.GetPMName()];
          delete z[this.GetPMName()];
          delete o[this.GetPMName()];
          delete e[this.GetPMName()];
          delete f[this.GetPMName()];
          delete k[this.GetPMName()]
      };
      y.prototype.AddProperty = function(C, E, B) {
          var D = d[this.GetPMName()];
          B = B || {};
          if (typeof(C) === "string" && x.Trim(C) !== "") {
              var F = D[C] || {};
              if (F && !F.core) {
                  D[C] = {
                      value: E,
                      core: B.core
                  };
                  return true
              }
          }
          return false
      };
      y.prototype.SetProperty = function(C, E, B) {
          var D = d[this.GetPMName()];
          if (typeof(C) === "string" && x.Trim(C) !== "") {
              var F = D[C];
              if (F) {
                  D[C].value = E;
                  c.call(this, C, E);
                  return true
              } else {
                  return this.AddProperty(C, E, B)
              }
          }
          return false
      };
      y.prototype.Get = function(D) {
          var B = k[this.GetPMName()] || {},
              E = d[this.GetPMName()][D] || {};
          var C = null;
          if (E.core === true) {
              if (typeof(B[D]) !== "undefined") {
                  C = B[D].call(B)
              }
          } else {
              C = (typeof(E.value) === "function") ? E.value.call(this) : E.value
          }
          return C
      };

      function c(E, G) {
          var F = d[this.GetPMName()];
          var H = F[E] || {};
          if (H && H.onChange) {
              var D = H.onChange;
              for (var C = 0, B = D.length; C < B; C++) {
                  D[C].method.call(D[C].scope || this, E, G)
              }
          }
      }

      function v(J, H, K, C) {
          var F = s[this.GetPMName()][J],
              E, I, B = false;
          var D = function() {
              var L = arguments[arguments.length - 1],
                  M = !(L && (L instanceof a));
              if (M) {
                  L = new a()
              }
              L[u] = q.call(this, E, I, arguments, L, M, (B ? 0 : 1));
              if (C) {
                  q.call(this, H, K, arguments, L[u], M, 0)
              } else {
                  if (L[t] !== true) {
                      q.call(this, H, K, arguments, L, M, 1)
                  }
              }
              return L[u]
          };
          if (F.core) {
              var G = k[this.GetPMName()];
              E = G[J];
              I = G;
              if (!F.first) {
                  B = F.first = true
              }
              G[J] = D
          } else {
              E = F.ref;
              I = F.scope;
              F.ref = D
          }
      }

      function q(G, I, H, E, D, F) {
          var C = Array.prototype.slice.call(H);
          if (D) {
              if (G.length > (C.length + F)) {
                  C.length = G.length - F
              }
              C.push(E)
          } else {
              var B = C[C.length - 1];
              if (B && B instanceof a) {
                  if (G.length > (H.length - 1 + F)) {
                      C.length = C.length - 1;
                      C.length = G.length - F;
                      C.push(E)
                  }
              }
          }
          return G.apply(I, C)
      }

      function n(B, E) {
          var D = [];
          for (var C = 0; C < B.length; C++) {
              D.push(B[C])
          }
          D.push(E);
          return D
      }

      function i(B, H, C) {
          var G = s[this.GetPMName()][B];
          C.scope = C.scope || this;
          var E;
          var F;
          if (G.core) {
              var D = k[this.GetPMName()];
              E = D[B];
              F = D;
              D[B] = function() {
                  if (C.when.call(C.scope)) {
                      H.apply(C.scope, arguments)
                  }
                  var I = E.apply(F, arguments);
                  return I
              }
          } else {
              E = G.ref;
              F = G.scope;
              G.ref = function() {
                  if (C.when.call(C.scope)) {
                      H.apply(C.scope, arguments)
                  }
                  var I = E.apply(F, arguments);
                  return I
              }
          }
      }

      function r(K, I, C, D) {
          var G = s[this.GetPMName()][K],
              F, J, B = false;
          C.scope = C.scope || this;
          var E = function() {
              var L = arguments[arguments.length - 1],
                  M = !(L && (L instanceof a));
              if (M) {
                  L = new a()
              }
              L[u] = q.call(this, F, J, arguments, L, M, (B ? 0 : 1));
              if (D && C.when.call(C.scope)) {
                  q.call(this, I, C.scope, arguments, L[u], M, 0)
              } else {
                  if (L[t] !== true && C.when.call(C.scope)) {
                      q.call(this, I, C.scope, arguments, L, M, 1)
                  }
              }
              return L[u]
          };
          if (G.core) {
              var H = k[this.GetPMName()];
              F = H[K];
              J = H;
              if (!G.first) {
                  B = G.first = true
              }
              H[K] = E
          } else {
              F = G.ref;
              J = G.scope;
              G.ref = E
          }
      }

      function g(I, C, J) {
          var F = s[this.GetPMName()][I],
              B = false,
              E, H;
          var D = function() {
              var K = arguments[arguments.length - 1],
                  L = !(K && (K instanceof a));
              if (L) {
                  K = new a()
              }
              q.call(this, C, J, arguments, K, L, 1);
              if (K[h] === true) {
                  K[t] = true
              } else {
                  K[u] = q.call(this, E, H, arguments, K, L, (B ? 0 : 1))
              }
              return K[u]
          };
          if (F.core) {
              var G = k[this.GetPMName()];
              E = G[I];
              H = G;
              G[I] = D;
              if (!F.first) {
                  B = F.first = true
              }
          } else {
              E = F.ref;
              H = F.scope;
              F.ref = D
          }
      }

      function j(B, E, D) {
          var F;
          var H;
          var G = s[this.GetPMName()][B];
          if (G.core) {
              var C = k[this.GetPMName()];
              F = C[B];
              H = C;
              C[B] = function() {
                  return E.apply(H, arguments)
              }
          } else {
              F = G.ref;
              H = G.scope;
              G.ref = function() {
                  return E.apply(H, arguments)
              }
          }
      }
      y.prototype.AddMethod = function(C, G, E) {
          var B = s[this.GetPMName()];
          E = E || {};
          var D = k[this.GetPMName()];
          var F = true;
          if ((typeof(C) === "string") && x.Trim(C) !== "") {
              if (E.core === true) {
                  if (!B[C]) {
                      if (typeof(D[C]) === "function") {
                          B[C] = {
                              core: true
                          }
                      }
                  }
              }
              if (typeof(G) === "function") {
                  if (!B[C]) {
                      B[C] = {
                          ref: G,
                          scope: E.scope || this
                      }
                  } else {
                      if (E.override) {
                          j.call(this, C, G, E.scope)
                      } else {
                          if (E.sequence === true) {
                              g.call(this, C, G, E.scope)
                          } else {
                              if (E.sequence === false) {
                                  v.call(this, C, G, E.scope, false)
                              }
                          }
                      }
                  }
              } else {
                  F = false
              }
          } else {
              F = false
          }
          return F
      };
      y.prototype.ExecuteMethod = function(B) {
          var C = Array.prototype.slice.call(arguments);
          C.shift();
          var E = s[this.GetPMName()][B];
          if (E && E.core === true) {
              var D = k[this.GetPMName()];
              return D[B].apply(D, C)
          } else {
              if (E && E.ref) {
                  return E.ref.apply(E.scope, C)
              } else {
                  SiebelJS.Log("Can't find method - [ " + B + " ]");
                  return null
              }
          }
      };
      y.prototype.AttachEventHandler = function(C, D, B) {
          var E = m[this.GetPMName()];
          var F = false;
          B = B || {};
          E[C] = E[C] || [];
          if (typeof(C) === "string" && C !== "") {
              if (typeof(D) === "function" || typeof(D) === "string") {
                  E[C].push({
                      handler: D,
                      core: (B.core ? true : false)
                  });
                  F = true
              }
          }
          return F
      };
      y.prototype.AddValidator = function(B, C) {
          this.AttachEventHandler(B, function() {
              if (!C.apply(this, arguments)) {
                  arguments[arguments.length - 1][h] = true;
                  arguments[arguments.length - 1][l] = true
              }
          })
      };
      y.prototype.AttachNotificationHandler = function(G, E, B) {
          var C = z[this.GetPMName()];
          var H = false;
          if (typeof(G) === "string" && x.Trim(G) !== "" && typeof(E) === "function") {
              B = B || {};
              var F = C[G] || [];
              var D = (B.core === true) ? 0 : -1;
              F.splice(D, 0, [E, B.scope || this]);
              C[G] = F;
              H = true
          }
          return H
      };
      y.prototype.AttachPSHandler = function(E, D, H) {
          var B = o[this.GetPMName()];
          var G = false;
          if (typeof(E) === "string" && x.Trim(E) !== "" && typeof(D) === "function") {
              H = H || {};
              var F = B[E] || [];
              var C = (H.core === true) ? 0 : -1;
              F.splice(C, 0, [D, H.scope || this]);
              B[E] = F;
              G = true
          }
          return G
      };
      y.prototype.AttachPreProxyExecuteBinding = function(H, E, C) {
          var B = e[this.GetPMName()];
          var G = false;
          if (typeof(H) === "string" && x.Trim(H) !== "" && typeof(E) === "function") {
              C = C || {};
              var F = B[H] || [];
              var D = (C.core === true) ? 0 : -1;
              F.splice(D, 0, [E, C.scope || this]);
              B[H] = F;
              G = true
          }
          return G
      };
      y.prototype.AttachPostProxyExecuteBinding = function(H, E, C) {
          var B = f[this.GetPMName()];
          var G = false;
          if (typeof(H) === "string" && x.Trim(H) !== "" && typeof(E) === "function") {
              C = C || {};
              var F = B[H] || [];
              var D = (C.core === true) ? 0 : -1;
              F.splice(D, 0, [E, C.scope || this]);
              B[H] = F;
              G = true
          }
          return G
      };
      y.prototype.AttachPMBinding = function(H, E, C) {
          var B = s[this.GetPMName()];
          var G = d[this.GetPMName()];
          var F = false;
          C = C || {
              scope: this
          };
          if (typeof(H) === "string" && x.Trim(H) !== "" && typeof(E) === "function") {
              if (B[H]) {
                  if (typeof(C.when) === "function") {
                      r.call(this, H, E, C, true)
                  } else {
                      v.call(this, H, E, C.scope || this, true)
                  }
              } else {
                  if (G[H]) {
                      var D = G[H];
                      D.onChange = D.onChange || [];
                      D.onChange.push({
                          method: E,
                          scope: C.scope || this
                      })
                  } else {
                      F = false
                  }
              }
          }
          return F
      };

      function A() {
          var C = new Date();
          var B = CCFMiscUtil_CreatePropSet();
          var E = CCFMiscUtil_CreatePropSet();
          B.SetProperty(p.get("SWSE_CMD_STR"), p.get("SWSE_CANCEL_QUERY"));
          B.SetProperty(p.get("SWSE_CANCEL_ID"), SiebelApp.S_App.GetCancelId());
          var D = {};
          D.async = true;
          D.scope = this;
          D.args = [];
          D.args.push("");
          D.args.push(B);
          SiebelApp.S_App.CallServer(B, E, true, D)
      }
      return y
  }())
}
if (typeof(SiebelAppFacade.PresentationModel) === "undefined") {
  SiebelJS.Namespace("SiebelAppFacade.PresentationModel");
  SiebelAppFacade.PresentationModel = (function() {
      var o = SiebelJS.Dependency("SiebelApp.Utils"),
          j = SiebelJS.Dependency("SiebelApp.Constants");
      var b = j.get("SWE_RPC_PROP_STATUS"),
          k = j.get("SWE_RPC_PROP_RETURN_STATUS"),
          a = j.get("SWE_RPC_PROP_STATUS_ERROR"),
          g = j.get("SWE_RPC_PROP_STATUS_COMPLETED"),
          e = j.get("SWE_RPC_PROP_STATUS_CONTINUE"),
          c = j.get("SWE_RPC_PROP_NEW_PAGE"),
          q = j.get("SWE_RPC_PROP_REFRESH_LAYOUT"),
          n = j.get("SWE_RPC_PROP_NEW_LAYOUT"),
          l = j.get("EVENT_ROW_SELECTION"),
          i = j.get("SWE_PST_APPLET_MODE_BASE"),
          f = j.get("SWE_PST_APPLET_MODE_EDITLIST"),
          h = j.get("SWE_PST_APPLET_SHOWMODE_ROIPE"),
          r = j.get("SWE_PST_APPLET_SHOWMODE_EDIT");

      function m() {
          SiebelAppFacade.PresentationModel.superclass.constructor.apply(this, arguments);
          this.retryWaitForObjInfoProcessing = 0
      }
      SiebelJS.Extend(m, SiebelAppFacade.BasePM);
      m.prototype.Init = function() {
          SiebelAppFacade.PresentationModel.superclass.Init.apply(this, arguments);
          this.AddProperty("GetPlaceholder", "s_" + this.Get("GetId") + "_l");
          this.AddProperty("GetCaption", SiebelApp.S_App.LookupStringCache(this.Get("GetTitle")));
          this.AddProperty("IsPopup", this.Get("GetParentApplet") ? true : false);
          this.AddProperty("isControlPopupOpen", false);
          this.AddProperty("SetFocusToGridCell", false);
          this.AddProperty("UpdateUI", false);
          this.AddProperty("LandMarkTitle", this.Get("GetAppletLabel") + " " + SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_FORM_APPLET"));
          this.AddProperty("ShowMode", "");
          this.AddProperty("IsRefreshLayout", "");
          this.AddProperty("RequiredControl", []);
          this.AddMethod("ExecuteUIUpdate", function() {
              d.call(this, l)
          }, {
              sequence: false,
              scope: this
          });
          this.AddMethod("hasRecords", function() {
              return (this.Get("GetNumRows") || 0) > 0
          }, {
              scope: this
          });
          this.AddMethod("IsRequired", function(t) {
              var s = this.Get("RequiredControl");
              return (o.IndexOf(s, t) >= 0 ? true : false)
          }, {
              scope: this
          });
          this.AttachNotificationHandler(j.get("SWE_PROP_BC_NOTI_STATE_CHANGED"), function(s) {
              if (s.GetProperty("state") === "np" || s.GetProperty("state") === "cp") {
                  if (s.GetProperty("value") === "1") {
                      if (this.Get("ShowMode") !== r && this.Get("GetMode") !== i) {
                          this.SetProperty("ShowMode", r)
                      }
                  } else {
                      if (this.Get("ShowMode") !== h && this.Get("GetDefaultMode") !== f) {
                          this.SetProperty("ShowMode", h)
                      }
                  }
              }
          });
          this.AttachNotificationHandler("g", function(s) {
              if (this.Get("IsActive")) {
                  var t = this.Get("GetActiveControl");
                  if (t && s.GetProperty("type") === "ClosePopup") {
                      this.ExecuteMethod("FieldChange", t, this.ExecuteMethod("GetFormattedFieldValue", t))
                  }
              }
          });
          this.AttachPostProxyExecuteBinding("ExecuteQuery", function(t, s, v) {
              var u = SiebelApp.S_App.GetPopupPM();
              if (!o.IsEmpty(u) && u.Get("IsCancelQryPopupOpen")) {
                  u.ExecuteMethod("ClearPopup");
                  u.SetProperty("IsCancelQryPopupOpen", false)
              }
              return
          });
          this.AttachPostProxyExecuteBinding("Drilldown", function(u, t, v) {
              var s = v.GetProperty(b);
              if (o.IndexOf([n, q, c], s) === -1) {
                  SiebelApp.S_App.uiStatus.Free()
              }
          });
          this.AttachPreProxyExecuteBinding("ALL", function(t, s, w) {
              d.call(this, j.get("NOT_PRV_FIELDS"));
              p.call(this, t, s, w);
              if (this.Get("IsRefreshLayout")) {
                  this.SetProperty("IsRefreshLayout", false)
              }
              var u = w.GetProperty(k);
              if (!(o.IsEmpty(u)) && u === q) {
                  var v = (this.Get("GetMode") === this.Get("GetDefaultMode")) ? h : r;
                  if (this.Get("ShowMode") !== v) {
                      this.SetProperty("ShowMode", v)
                  }
                  this.SetProperty("IsRefreshLayout", true)
              }
              return
          });
          this.AddMethod("Query", function() {
              var s = SiebelApp.S_App.GetActiveView();
              if (s) {
                  var t = s.GetActiveApplet();
                  s.ExecuteFrame(t.GetName(), [{
                      field: this.Get("SearchField"),
                      value: this.Get("SearchValue")
                  }])
              }
          });
          this.AddMethod("SetSelectionOnDragNDrop", function(s) {
              this.ExecuteMethod("ChangeSelectionInPopup", s)
          });
          this.AddMethod("HandleDragNDropInPopup", function(s) {
              if (this.ExecuteMethod("CanInvokeMethod", s)) {
                  return (this.ExecuteMethod("InvokeMethod", s))
              }
              return false
          });
          this.AddMethod("CanInvokeScrollMethod", function(t) {
              var s = this.ExecuteMethod("CanInvokeMethod", t);
              return s
          });
          this.AddMethod("LeaveField", function(v, t, s, u) {
              this.ExecuteMethod("MaskLeaveField", v, false)
          }, {
              sequence: false,
              scope: this
          });
          this.AddMethod("LeaveField", function(v, t, s, u) {
              this.ExecuteMethod("MaskLeaveField", v, true)
          }, {
              sequence: true,
              scope: this
          });
          this.AddMethod("MaskLeaveField", function(t, s) {});
          this.AttachNotificationHandler("g", function(s) {
              if (s.GetProperty("type") === "ClosePopup") {
                  this.ExecuteMethod("ClearPopup")
              }
          }, {
              scope: SiebelApp.S_App.GetPopupPM()
          })
      };
      m.GetCtrlTemplate = function(t, u, v, s) {
          var w = CCFMiscUtil_CreatePropSet();
          w.SetType(j.get("SWE_PST_COL"));
          w.SetPropertyStr(j.get("SWE_PROP_IS_CLIENT_CTRL"), "1");
          w.SetPropertyStr("cph", "1");
          w.SetPropertyStr(j.get("SWE_PROP_CURR_FLD"), "");
          w.SetPropertyStr(j.get("SWE_PROP_CASE_SENSITIVE"), "1");
          w.SetPropertyStr(j.get("SWE_PROP_DISP_FORMAT"), "");
          w.SetPropertyStr(j.get("SWE_PROP_DISP_MODE"), "");
          w.SetPropertyStr(j.get("SWE_PROP_DISP_MAX_CHARS"), "0");
          w.SetPropertyStr(j.get("SWE_PROP_DISP_NAME"), u);
          w.SetPropertyStr(j.get("SWE_PROP_FLD_NAME"), t);
          w.SetPropertyStr(j.get("SWE_PROP_HEIGHT"), "0");
          w.SetPropertyStr(j.get("SWE_PROP_HTML_ATTRIBUTE"), "");
          w.SetPropertyStr(j.get("SWE_PROP_IS_BOUND_PICK"), "0");
          w.SetPropertyStr(j.get("SWE_PROP_IS_ENCODE"), "1");
          w.SetPropertyStr(j.get("SWE_PROP_INPUTMETHOD"), "6");
          w.SetPropertyStr(j.get("SWE_PROP_JUSTIFICATION"), "left");
          w.SetPropertyStr(j.get("SWE_PROP_LABEL_JUSTIFICATION"), "");
          w.SetPropertyStr(j.get("SWE_PROP_MAX_SIZE"), "30");
          w.SetPropertyStr(j.get("SWE_PROP_NAME"), t);
          w.SetPropertyStr(j.get("SWE_PROP_PICK_APLT"), "");
          w.SetPropertyStr(j.get("SWE_PROP_POPUP_HEIGHT"), "0");
          w.SetPropertyStr(j.get("SWE_PROP_PROMPT"), "6");
          w.SetPropertyStr(j.get("SWE_PROP_POPUP_WIDTH"), "0");
          w.SetPropertyStr(j.get("SWE_PROP_IS_DYNAMIC"), "0");
          w.SetPropertyStr(j.get("SWE_PROP_SPAN"), t);
          w.SetPropertyStr(j.get("SWE_PROP_SEQ"), "0");
          w.SetPropertyStr(j.get("SWE_PROP_TYPE"), v);
          w.SetPropertyStr(j.get("SWE_PROP_WIDTH"), "100");
          w.SetPropertyStr(j.get("SWE_PROP_IS_EDIT"), "0");
          w.SetPropertyStr(j.get("SWE_PROP_COLINDEX"), s);
          w.SetPropertyStr(j.get("SWE_PROP_ICON_MAP"), "");
          w.SetPropertyStr(j.get("SWE_PROP_IS_SORTABLE"), "0");
          w.SetPropertyStr(j.get("SWE_CTRL_CLIENTTYPE"), "");
          w.SetPropertyStr("length", "0");
          if (w.GetProperty(j.get("SWE_PROP_DISP_FORMAT")) === "") {
              if (v === j.get("SWE_CTRL_DATE_TZ_PICK") || v === j.get("SWE_CTRL_DATE_TIME_PICK")) {
                  w.SetPropertyStr(j.get("SWE_PROP_DISP_FORMAT"), SiebelApp.S_App.LocaleObject.GetDateFormat() + " " + SiebelApp.S_App.LocaleObject.GetTimeFormat())
              } else {
                  if (v === j.get("SWE_CTRL_DATE_PICK")) {
                      w.SetPropertyStr(j.get("SWE_PROP_DISP_FORMAT"), SiebelApp.S_App.LocaleObject.GetDateFormat())
                  }
              }
          }
          if (v === j.get("SWE_CTRL_COMBOBOX")) {
              w.SetPropertyStr(j.get("SWE_PROP_PICK_APLT"), t)
          }
          return w
      };
      m.prototype.Setup = function(u) {
          SiebelAppFacade.PresentationModel.superclass.Setup.apply(this, arguments);
          var t, s, v, w;
          if (u) {
              t = u.GetChildByType(j.get("SWE_APPLET_PM_PS"))
          }
          if (t) {
              s = t.GetChildByType(j.get("SWE_PM_USER_PREF"));
              if (s) {
                  v = s.EnumProperties(true);
                  do {
                      this.AddProperty(v, s.GetProperty(v))
                  } while ((v = s.EnumProperties(false)))
              }
              w = t.GetProperty(j.get("SWE_MTHD_UPDATE_USER_PREF"));
              if (w) {
                  this.AddProperty(j.get("SWE_MTHD_UPDATE_USER_PREF"), w)
              }
              var y = t.GetProperty("Required Control");
              if (y) {
                  this.SetProperty("RequiredControl", y.split(","))
              }
          }
          var x = (this.Get("GetMode") === this.Get("GetDefaultMode")) ? h : r;
          this.SetProperty("ShowMode", x);
          this.SetProperty("IsRefreshLayout", false)
      };
      m.prototype.UpdateModel = function(s) {
          this.AddMethod("AddClientControl", null, {
              core: true
          })
      };

      function d(w) {
          var z = this.Get("GetUIEventMap");
          var B = z.length;
          var A = j.get("EVENT_NO_FOCUS");
          var y = j.get("NOT_PRV_FIELDS");
          var s = false;
          for (var x = 0; x < B; x++) {
              if (z[x].ev === l && w === l) {
                  this.SetProperty("UpdateUI", true);
                  this.SetProperty("UpdateUI", false);
                  var C = this.Get("GetBusComp");
                  if (C) {
                      C.ClearUpdates()
                  }
                  z.splice(x, 1);
                  s = true
              } else {
                  if (z[x].ev === A && w === A) {
                      z.splice(x, 1);
                      s = true
                  } else {
                      if (z[x].ev === y && w === y) {
                          if (z[x].ar) {
                              var u = z[x].ar;
                              var t = z[x].ar.length;
                              for (var v = 0; v < t; v++) {
                                  this.ExecuteMethod("RepopulateField", u[v])
                              }
                          }
                          z.splice(x, 1);
                          s = true
                      }
                  }
              }
              B = z.length
          }
          return s
      }

      function p(t, y, x) {
          var u = x.GetProperty(k),
              s = null,
              v = false;
          if (u === g) {
              switch (t) {
                  case "NewRecord":
                  case "CreateRecord":
                      s = this.Get("GetDefaultFocusOnNew");
                      break;
                  case "UndoQuery":
                  case "UndoRecord":
                  case "ExecuteQuery":
                      s = this.Get("GetDefaultFocusOnEdit") || ((this.Get("GetActiveControl") || this.Get("GetPrsrvControl")) ? (this.Get("GetActiveControl") || this.Get("GetPrsrvControl")).GetName() : null);
                      if (t !== "ExecuteQuery" && s && this.Get("GetActiveControl") && s === this.Get("GetActiveControl").GetName()) {
                          this.ExecuteMethod("SetActiveControl", null);
                          this.ExecuteMethod("SetFocusToCtrl", s, false)
                      }
                      break;
                  case "NewQuery":
                  case "RefineQuery":
                      s = this.Get("GetDefaultFocusOnQuery");
                      break;
                  case "GotoNext":
                  case "GotoPrevious":
                  case "GotoPreviousSet":
                  case "GotoNextSet":
                  case "GotoFirstSet":
                  case "GotoLastSet":
                      s = this.Get("GetActiveControl") || this.Get("GetPrsrvControl");
                      if (s) {
                          s = s.GetName();
                          if (!this.Get("HasPickError")) {
                              this.ExecuteMethod("SetFocusToCtrl", s, true)
                          }
                          v = true
                      } else {
                          v = true
                      }
                      this.SetProperty("SetFocusToGridCell", true);
                      this.SetProperty("RowChange", true);
                      break;
                  case "WriteRecord":
                      var w = SiebelApp.S_App.GetPopupPM();
                      if (d.call(this, j.get("EVENT_NO_FOCUS")) || (w && w.Get("isCurrencyOpen"))) {
                          v = true
                      }
                      s = this.Get("GetActiveControl") || this.Get("GetPrsrvControl");
                      if (s) {
                          s = s.GetName()
                      } else {
                          v = true
                      }
                      break;
                  case "InvertSelection":
                  case "PositionOnRow":
                      if (this.Get("MultiSelectMode")) {
                          this.ExecuteMethod("FocusOnApplet")
                      }
                      v = true;
                      break;
                  case "DeleteRecord":
                  case "CopyRecord":
                      break;
                  default:
                      v = true
              }
          } else {
              if (u === a || !u) {
                  this.ExecuteMethod("SetFocusDefaultControl", false);
                  this.ExecuteMethod("ProcessError");
                  switch (t) {
                      case "ExecuteQuery":
                          v = true;
                          break;
                      case "PostChanges":
                          s = this.Get("GetActiveControl") || this.Get("GetPrsrvControl");
                          if (s) {
                              s = s.GetName()
                          } else {
                              v = true
                          }
                          break;
                      case "WriteRecord":
                          d.call(this, j.get("EVENT_NO_FOCUS"));
                          s = this.Get("GetActiveControl") || this.Get("GetPrsrvControl");
                          if (s) {
                              s = s.GetName()
                          } else {
                              v = true
                          }
                          break
                  }
              } else {
                  if (u === e) {
                      switch (t) {
                          case "InvertSelection":
                          case "PositionOnRow":
                              if (this.Get("MultiSelectMode")) {
                                  this.ExecuteMethod("FocusOnApplet")
                              }
                              break
                      }
                  }
              }
          }
          if (!v && !this.Get("HasPickError")) {
              if (u === g || u === a || !u) {
                  if (s) {
                      this.ExecuteMethod("SetFocusToCtrl", s, true)
                  } else {
                      this.ExecuteMethod("FocusFirstControl")
                  }
              }
          }
          this.ExecuteMethod("SetHasPickError", false)
      }
      return m
  }())
}
if (typeof(SiebelApp.PopupPModel) === "undefined") {
  SiebelJS.Namespace("SiebelApp.PopupPModel");
  SiebelApp.PopupPModel = (function() {
      var utils = SiebelJS.Dependency("SiebelApp.Utils");
      var consts = SiebelJS.Dependency("SiebelApp.Constants");

      function d(l) {
          this.constructor.superclass.constructor.call(this, l)
      }
      SiebelJS.Extend(d, SiebelAppFacade.PresentationModel);
      d.prototype.Init = function() {
          this.AddProperty("state", consts.get("POPUP_STATE_UNLOADED"));
          this.AddProperty("noHide", false);
          this.AddProperty("height", 0);
          this.AddProperty("width", 0);
          this.AddProperty("source", consts.get("POPUP_SOURCE_HI"));
          this.AddProperty("closeByXDisabled", false);
          this.AddProperty("isPrevPopupVisible", false);
          this.AddProperty("isPopupClosedByX", false);
          this.AddProperty("currPopups", []);
          this.AddProperty("prevPopups", []);
          this.AddProperty("url", "");
          this.AddProperty("isSIPopup", false);
          this.AddProperty("content", "");
          this.AddProperty("isCurrencyOpen", false);
          this.AddProperty("IsCancelQryPopupOpen", false);
          this.AddProperty("CanProcessLayout", true);
          this.AddProperty("isPopupSI", false);
          this.AddMethod("SetPopupVisible", k);
          this.AddMethod("ProcessNewPopup", processNewPopup);
          this.AddMethod("ProcessClearPopup", e);
          this.AddMethod("ClearPopup", g);
          this.AddMethod("OpenPopup", c);
          this.AddMethod("OnLoadPopupContent", a);
          this.AddMethod("StandAlonePopup", function(n, l, m) {});
          this.AttachEventHandler("ClosePopupByX", h, {
              core: true
          });
          this.AttachPreProxyExecuteBinding("ALL", function(m, l, n) {
              if (consts.get("CLOSE_BY_X") === String(l.GetProperty(consts.get("SWE_CMD_ARG")))) {
                  this.ExecuteMethod("ClearPopup");
                  this.SetProperty("isPopupClosedByX", true)
              } else {
                  if (consts.get("SWSE_CANCEL_QUERY") === String(l.GetProperty(consts.get("SWSE_CMD_STR")))) {
                      this.ExecuteMethod("ClearPopup");
                      this.SetProperty("isPopupClosedByX", true);
                      this.SetProperty("IsCancelQryPopupOpen", false)
                  }
              }
          })
      };
      d.prototype.PostExecute = function(l, n, m) {
          this.HandlePreExecute(l, n, m);
          this.HandlePostExecute(l, n, m)
      };

      function k(l) {
          if (!l) {
              this.SetProperty("state", consts.get("POPUP_STATE_HIDDEN"));
              this.SetProperty("isPopupSI", false)
          } else {
              this.SetProperty("state", consts.get("POPUP_STATE_VISIBLE"))
          }
      }

      function processNewPopup(s) {
          var y;
          var m;
          var l, r;
          var x;
          var n;
          var z;
          var p, v, t, w;
          var q = false;
          if (SiebelApp.S_App.GetEnablePerfHooks() && SiebelApp.S_App.GetTimer()) {
              SiebelApp.S_App.GetTimer().TimePopupApplet("", "Start PopupApplet")
          }
          if (this.Get("state") === consts.get("POPUP_STATE_VISIBLE")) {
              this.SetProperty("prevPopups", this.Get("currPopups"))
          }
          this.SetProperty("currPopups", []);
          y = s.GetProperty(consts.get("SWE_POP_HEIGHT_STR"));
          m = s.GetProperty(consts.get("SWE_POP_WIDTH_STR"));
          n = s.GetProperty(consts.get("SWE_IS_SI_POPUP"));
          this.SetProperty("isSIPopup", utils.IsTrue(n));
          var o = s.GetProperty(consts.get("SWE_FULL_POPUP_WINDOW_STR"));
          l = s.GetProperty("URL");
          z = s.GetProperty(consts.get("SWE_FREE_POPUP_STR"));
          r = s.GetProperty(consts.get("SWE_LINK_TARGET_STR"));
          p = parseInt((screen.availWidth / 2) - ((m | 800) / 2), 10);
          v = parseInt((screen.availHeight / 2) - ((y | 600) / 2), 10);
          t = "width=" + (m | 800) + ",height=" + (y | 600) + ",left=" + p + ",top=" + v + ",screenX=" + p + ",screenY=" + v;
          if (o) {
              t = t + "scrollbars=yes,resizable=yes,location=yes,toolbar=yes,menubar=yes,status=yes"
          } else {
              t = t + "scrollbars=yes,resizable=yes"
          }
          if (this.Get("state") === consts.get("POPUP_STATE_UNLOADED") && !(this.GetRenderer())) {
              this.Setup();
              q = true
          }
          if (z || o || (l && !l.match(/.swe\?/))) {
              this.ExecuteMethod("StandAlonePopup", l, t, r);
              SiebelApp.S_App.uiStatus.Free();
              return true
          } else {
              if (this.Get("state") === consts.get("POPUP_STATE_UNLOADED") && !q) {
                  this.Show()
              }
          }
          if (l.indexOf("start.swe") === -1) {
              x = SiebelApp.S_App.GetPageURL().split("start.swe")[0] + l + consts.get("SWE_ARG_START") + f("")
          } else {
              l = f(l);
              x = SiebelApp.S_App.GetPageURL() + l.split("start.swe")[1]
          }
          var u = SiebelApp.S_App.GetActiveView();
          if (u) {
              var A = u.GetActiveApplet();
              if (A) {
                  u.SetActiveAppletBeforePopup(A)
              }
          }
          this.ExecuteMethod("OpenPopup", x, y, m, false, false, false);
          return true
      }

      function e(l) {
          this.SetProperty("isPrevPopupVisible", false);
          this.ExecuteMethod("ClearPopup");
          return (true)
      }

      function g() {
          var q = SiebelApp.S_App.GetPopupPM();
          if (q && (q.Get("isCurrencyOpen") || this.Get("state") === consts.get("POPUP_STATE_HIDDEN") || this.Get("state") === consts.get("POPUP_STATE_UNLOADED") || this.Get("isPrevPopupVisible") === true)) {
              return
          }
          this.ExecuteMethod("SetPopupVisible", false);
          var m = SiebelApp.S_App.GetActiveView();
          if (m) {
              m.DeletePopup()
          }
          var p = this.Get("currPopups");
          var o = null;
          var l = p.length;
          var n = 0;
          for (n = 0; n < l; n++) {
              o = p[n];
              if (SiebelApp.S_App.IsExternalApplet(o)) {
                  o.Close()
              }
          }
          this.SetProperty("isPopupPick", false);
          this.SetProperty("isPopupMVGAssoc", false);
          this.SetProperty("isPopupMVGSelected", false);
          this.SetProperty("isPopupAssoc", false);
          this.SetProperty("currPopups", []);
          this.SetProperty("prevPopups", [])
      }
      d.prototype.Setup = function(l) {
          var m = new SiebelAppFacade.PopupRenderer(this);
          this.GetRenderer = function() {
              return m
          };
          this.Show()
      };

      function c(l, t, n, q, r, o) {
          try {
              var m;
              var p = this;
              if (this.Get("state") === consts.get("POPUP_STATE_VISIBLE")) {
                  this.SetProperty("isPrevPopupVisible", true);
                  this.ExecuteMethod("SetPopupVisible", false, true)
              } else {
                  this.SetProperty("isPrevPopupVisible", false)
              }
              t = (t === undefined ? 0 : parseFloat(t));
              n = (n === undefined ? 0 : parseFloat(n));
              if (t <= 0) {
                  t = parseFloat(consts.get("DEFAULT_POPUP_HEIGHT"))
              }
              if (n <= 0) {
                  n = parseFloat(consts.get("DEFAULT_POPUP_WIDTH"))
              }
              this.SetProperty("noHide", false);
              this.SetProperty("height", t);
              this.SetProperty("width", n);
              this.ExecuteMethod("SetPopupVisible", true);
              if (o === undefined || !o) {
                  this.SetProperty("url", l)
              } else {
                  this.SetProperty("content", l)
              }
              return true
          } catch (s) {
              return false
          }
      }

      function a() {
          var p = this;
          if (p.Get("isSIPopup")) {
              return
          }
          if (this.Get("CanProcessLayout") === false && p.retryWaitForObjInfoProcessing < 25) {
              p.retryWaitForObjInfoProcessing++;
              setTimeout(function() {
                  a.call(p)
              }, 100);
              return
          }
          p.retryWaitForObjInfoProcessing = 0;
          var s = p.Get("prevPopups");
          var q = p.Get("currPopups");
          if (s && s.length) {
              var n = 0;
              for (var l = 0, o = s.length; l < o; l++) {
                  if (utils.IndexOf(q || [], s[l]) !== -1) {
                      n++
                  }
              }
              if (n === s.length && p.Get("isPrevPopupVisible")) {
                  p.SetProperty("isPrevPopupVisible", false)
              }
          }
          var t = null;
          var r = q.length;
          var m = 0;
          for (m = 0; m < r; m++) {
              t = q[m];
              t.Initialize();
              SiebelApp.S_App.NotifyTimer("TimePopupApplet", [t.GetName(), "Objects Initialized"]);
              SiebelAppFacade.ComponentMgr.FindComponent({
                  id: t.GetName()
              }).Show();
              t.Show();
              SiebelApp.S_App.NotifyTimer("TimePopupApplet", [t.GetName(), "Finished Populate"]);
              if (SiebelApp.S_App.GetActiveView()) {
                  if (t.GetView() === SiebelApp.S_App.GetActiveView()) {
                      SiebelApp.S_App.GetActiveView().SetActiveApplet(t);
                      SiebelApp.S_App.GetActiveView().SetActiveAppletOnLoad(null)
                  } else {}
              }
              t.SetFocusDefaultControl(true);
              t.FocusDefaultControl(q.length != 2)
          }
          if (q.length == 2) {
              SiebelApp.MvgBeautifier.Initialize()
          }
          if (0 == q.length) {
              this.SetProperty("isPopupSI", true)
          }
          SiebelApp.S_App.uiStatus.Free();
          SiebelApp.S_App.uiStatus.LocalFree()
      }

      function f(l) {
          if (l.indexOf(".swe?") !== -1 && l.indexOf(consts.get("SWE_SHOW_POPUP_STR")) === -1) {
              l = utils.AppendArgsToURL(l, consts.get("SWE_SHOW_POPUP_STR"), consts.get("SWE_NUMERIC_TRUE"))
          }
          return l
      }

      function h(n) {
          n.preventDefault();
          n.stopPropagation();
          if (this.Get("state") === SiebelApp.Constants.get("POPUP_STATE_HIDDEN")) {
              return false
          }
          this.SetProperty("isPopupClosedByX", true);
          this.SetProperty("isPrevPopupVisible", false);
          var o = CCFMiscUtil_CreatePropSet();
          var l = CCFMiscUtil_CreatePropSet();
          o.SetProperty(consts.get("SWE_CMD_ARG"), consts.get("CLOSE_BY_X"));
          o.SetProperty(consts.get("SWEDIC"), consts.get("CMDMGR_TRUE"));
          var m = {};
          m.async = true;
          m.scope = this;
          m.args = [];
          m.args.push("");
          m.args.push(o);
          SiebelApp.S_App.CallServer(o, l, true, m);
          return false
      }
      d.prototype.IsPopupStarted = function() {
          return utils.IndexOf([consts.get("POPUP_STATE_STARTED"), consts.get("POPUP_STATE_LOADED"), consts.get("POPUP_STATE_VISIBLE")], this.Get("state")) !== -1
      };
      return d
  }());
  define("siebel/pmodel", [], function() {
      return "SiebelAppFacade.PresentationModel"
  })
};
