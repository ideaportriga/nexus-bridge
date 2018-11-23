require.onError = function (a) {
  SiebelJS.Log("Error in downloading file " + a.requireType + ":" + a.requireModules)
};
if (typeof (SiebelApp.S_App) === "undefined") {
  SiebelJS.Namespace("SiebelApp.S_App");
  SiebelApp.S_App = (function () {
    var X = SiebelJS.Dependency("SiebelApp.Utils");
    var C = SiebelJS.Dependency("SiebelApp.Constants");
    var ae = C.get("SWE_PST_APP_INFO");
    var n;
    var aq;
    var ax;
    var ac = C.get("SWE_FIELD_STR");
    var Y = C.get("SWE_RPC_PROP_URL");
    var U = C.get("SWE_ARG_START");
    var al = C.get("SWE_RPC_PROP_FILEDOWNLOADSAVE");
    var am = C.get("SWE_METHOD_SAVE_QUERY");
    var c = C.get("SWE_METHOD_SAVE_QUERY_AS");
    var ab = C.get("SWE_METHOD_POST_CHANGES");
    var k = C.get("SWE_TARGET_TOP");
    var h = C.get("SWE_BCF_FIELD");
    var t = [];
    var aF = [];
    var ai = [];
    var l;
    var E = {};
    var K = [];
    var I;
    var a = [];
    var R = {};
    var at;
    var aG = false;
    var r = null;
    var f;
    var V = {};
    var ap = false;
    var ah = {};
    var j = {};
    var z = null;
    var b;
    var g = true;
    var y = {};
    var p = false;
    var Z = "";
    var M = "";
    var A = "";
    var ad = "";
    var u = false;
    var S = null;
    var ay = false;
    var H = 0;
    var x = null;
    var N = [];
    var L = {};
    var aC = function () {
      var aH;
      aC = function () {
        return aH
      };
      aC.prototype = this;
      aH = new aC();
      aH.uiStatus = new SiebelApp.UIStatus();
      aH.constructor = aC;
      var aI = new SiebelApp.CommandManager(aH);
      aC.prototype.GetCmdMgr = function () {
        return aI
      };
      SiebelAppFacade.ComponentMgr.RegisterLevel(aH);
      return aH
    };
    n = new aC();
    function d() {
      b = new SiebelApp.PopupPModel({
        GetName: function () {
          return "PopupPxy"
        }
      });
      b.Init()
    }
    aC.prototype.SetExternalActiveApplet = function (aH) {
      S = aH
    };
    aC.prototype.GetExternalActiveApplet = function (aH) {
      return S
    };
    aC.prototype.SetShowNewPage = function (aH) {
      ay = aH
    };
    aC.prototype.GetShowNewPage = function () {
      return ay
    };
    aC.prototype.GetRowCounterTemplateMap = function (aH) {
      return y[aH]
    };
    function i(aH, aI) {
      y[aH] = aI
    }
    aC.prototype.IsExternalApplet = function (aH) {
      return !X.IsEmpty(j[aH.GetName()])
    };
    aC.prototype.RemoveApplet = function (aI) {
      if (this.GetExternalActiveApplet() === aI) {
        this.SetExternalActiveApplet(null)
      }
      delete j[aI.GetName()];
      if (!!aI.GetBusComp()) {
        if (aI.GetBusComp().GetNotifyObject().GetAppletRegistry().length === 1) {
          delete aI.GetBusComp().GetNotifyObject();
          delete aI.GetBusComp()
        } else {
          aI.GetBusComp().GetNotifyObject().DeRegister(aI)
        }
      }
      var aH = SiebelAppFacade.ComponentMgr.FindComponent({
        id: aI.GetName()
      });
      if (aH) {
        SiebelAppFacade.ComponentMgr.DeleteComponent(aH, this)
      }
      if (aI.EndLife) {
        aI.EndLife()
      }
      delete aI
    };
    aC.prototype.GetPopupPM = function () {
      return b
    };
    aC.prototype.GetMsgBarPM = function () {
      return z
    };
    aC.prototype.GetIconMap = function () {
      return ah
    };
    aC.prototype.GetCancelId = function () {
      return H
    };
    aC.prototype.PushPostBack = function (aI, aH) {
      K.push({
        callBack: aI,
        object: aH
      })
    };
    aC.prototype.DefineAccessor = function (aL, aH, aK, aJ, aM) {
      aJ = C.get(aJ);
      var aI = null;
      if (aH.PropertyExists(aJ)) {
        aI = aH.GetProperty(aJ)
      }
      if (aM === true) {
        aI = SiebelApp.S_App.LookupStringCache(aI)
      }
      if (!X.IsEmpty(aI) || (typeof aL[aK] !== "function")) {
        aL[aK] = function () {
          return aI
        }
      }
      aH = null
    };
    aC.prototype.GetActiveBusObj = function () {
      return aq
    };
    aC.prototype.SetActiveBusObj = function (aH) {
      aq = aH
    };
    aC.prototype.GetActiveView = function () {
      return ax
    };
    aC.prototype.SetActiveView = function (aH) {
      ax = aH
    };
    aC.prototype.SetLayoutLoaded = function (aJ, aI, aH, aK) { };
    aC.prototype.SetLayoutUnloaded = function () { };
    aC.prototype.SetThreadbarSpan = function () { };
    aC.prototype.ViewUINotLoaded = function () { };
    aC.prototype.ProcessRPCInfo = function (aH) { };
    aC.prototype.OnUnload = function () {
      SiebelJS.Log("On Unload")
    };
    function au(a0) {
      aC.prototype.GetAppPropertySet = function () {
        return a0.Clone()
      };
      var aN = a0.GetChild(0);
      if (aN.GetType() !== ae) {
        throw new Error("Wrong propSet type in Application Context")
      }
      this.SetSelfProps(aN);
      var aV = SiebelApp.Environment;
      if (aV !== undefined) {
        m.call(this, aN)
      }
      var aW = aN.GetChildCount();
      var aO = C.get("SWE_PST_LOADURL"),
        aJ = C.get("SWE_PST_STR_CACHE"),
        aP = C.get("SWE_PST_NEW_NAV_CTRL_MGR"),
        aQ = C.get("SWE_PST_NAV_CTRL_INFO"),
        aX = C.get("SWE_PST_SERVICE_SHADOWS"),
        a2 = C.get("SWE_PST_QTP_INFO"),
        a1 = C.get("SWE_PST_ACCESSIBILITY_INFO"),
        a3 = C.get("SWE_PST_NEW_TIMER"),
        a5 = C.get("SWE_PST_NEW_LOCALE"),
        aH = C.get("SWE_PST_STYLESHEET"),
        a4 = C.get("SWE_UIDEF_THEME_INFO"),
        be = C.get("SWE_UIDEF_PAGE_TRANSITION_INFO"),
        aL = C.get("SWE_PST_MSG"),
        a7 = C.get("SWE_PST_ROW_CNT_TMPL"),
        bf = C.get("SWE_PROP_SEARCH_BAR"),
        aK = C.get("SWE_PST_PORTLET_APP"),
        bc = C.get("SWE_PROP_VALUE"),
        aY = C.get("SWE_PROP_NAME");
      for (var aZ = 0; aZ < aW; aZ++) {
        var ba = aN.GetChild(aZ);
        var bg = ba.GetType();
        var a9 = X.Curry(aC.prototype.DefineAccessor, SiebelApp.Environment.constructor.prototype, ba);
        switch (bg) {
          case aO:
            a9("GetClientFrameName", "SWE_PROP_NAME");
            a9("GetClientURL", "SWE_PROP_VALUE");
            SiebelApp.Environment.constructor.prototype.GetClientFrame = function () {
              return $('[name="' + SiebelApp.Environment.GetClientFrameName() + '"]')[0]
            };
            break;
          case aH:
            a9("GetStyleSheetName", "SWE_PROP_VALUE");
            break;
          case aJ:
            var a8 = ba.GetProperty(bc);
            if (a8) {
              this.AppendToStrCache(a8)
            }
            break;
          case aP:
            var aU = ba.GetChildCount();
            if (aU > 0) {
              l.Initialize(ba);
              l.ProcessObjectInfo(ba.GetChildByType(aQ))
            }
            break;
          case be:
            var a8 = ba.GetProperty(bc);
            if (a8) {
              SiebelApp.LayoutTransitionsMgr.setTransition(a8)
            }
            break;
          case a1:
            a9("GetScreenNavTitle", "SWE_PROP_SCREEN_NAV_TITLE");
            a9("GetDetailCategoryTitle", "SWE_PROP_DETAIL_CATEGORY_TITLE");
            break;
          case a2:
            if (ba.PropertyExists(C.get("SWE_PROP_QTP_OT"))) {
              a9("GetObjectType", "SWE_PROP_QTP_OT")
            }
            if (ba.PropertyExists(C.get("SWE_PROP_QTP_RN"))) {
              a9("GetRepstrName", "SWE_PROP_QTP_RN")
            }
            if (ba.PropertyExists(C.get("SWE_PROP_QTP_UN"))) {
              a9("GetUIName", "SWE_PROP_QTP_UN")
            }
            break;
          case aX:
            var aM = ba.EnumProperties(true);
            do {
              R[aM] = ba.GetProperty(aM)
            } while ((aM = ba.EnumProperties(false)));
            break;
          case a3:
            aw.call(this, ba);
            break;
          case a5:
            var a6 = ba.GetChildCount();
            if (a6 > 0) {
              SiebelApp.S_App.LocaleObject.InitLocale(ba.GetChild(0))
            }
            break;
          case aL:
            var aI = ba.GetProperty(aY);
            var a8 = ba.GetProperty(bc);
            if (aI && a8) {
              az.call(this, aI, a8)
            }
            break;
          case aK:
            var bb = new SiebelApp.S_App.PortletSessionMgr();
            bb.ProcessPortletInfo(ba);
            break;
          case a7:
            var aS = ba.GetProperty(aY);
            var aT = ba.GetProperty(bc);
            if (aS && aT) {
              i.call(this, aS, aT)
            }
            break;
          case bf:
            var aR = {};
            aR.GetName = function () {
              return C.get("SWE_PST_SEARCH_NAME")
            };
            if (!(SiebelAppFacade.ComponentMgr.FindComponent({
              id: C.get("SWE_PST_SEARCH_NAME")
            }))) {
              var bd = CCFMiscUtil_CreatePropSet();
              bd.SetProperty(C.get("SWE_UIDEF_PM_CTR"), "siebel/searchLookinPModel");
              bd.SetProperty(C.get("SWE_UIDEF_PR_CTR"), "siebel/searchLookinPRenderer");
              SiebelAppFacade.ComponentMgr.MakeComponent(SiebelApp.S_App, bd, aR)
            }
            break;
          default:
            SiebelJS.Log("[SetProtoAPIs] : Missing handler for type [" + bg + "]");
            break
        }
      }
      if (aV !== undefined) {
        ar()
      }
      aN = null
    }
    function aw(aI) {
      var aH = new SiebelApp.S_App.SweTimer();
      SiebelApp.S_App.SetTimer(aH);
      SiebelApp.S_App.GetTimer().CreateTimerHookMap(aI);
      SiebelApp.S_App.SetEnablePerfHooks(true);
      SiebelApp.S_App.GetTimer().SetSessionID()
    }
    function ar() {
      var aH = SiebelApp.S_App.constructor.prototype;
      var aI = SiebelApp.Environment.constructor.prototype;
      for (var aJ in aI) {
        if (typeof aI[aJ] === "function") {
          aH[aJ] = aI[aJ]
        }
      }
    }
    aC.prototype.SetSelfProps = function (aJ) {
      var aM = X.Curry(aC.prototype.DefineAccessor, aC.prototype, aJ);
      aM("GetUserName", "SWE_PROP_USER_ID");
      aM("GetName", "SWE_PROP_NAME");
      aM("GetCookieName", "SWE_PROP_COOKIE_NAME");
      aM("GetSessionId", "SWE_RPC_PROP_SESSION_NUMBER");
      aM("GetSRN", "SWE_PROP_SESSION_RANDOM_NUMBER");
      aM("UseCookie", "SWE_RPC_PROP_USE_COOKIE");
      aM("UseSecureCookie", "SWE_RPC_PROP_USE_SECURE_COOKIE");
      aM("GetPageURL", "SWE_PROP_PAGEURL");
      aM("GetLoginTimeStamp", "SWE_PROP_LOGIN_TIMESTAMP");
      aM("GetScriptDir", "SWE_PROP_SCRIPT_DIR");
      aM("GetSWEReqCount", "SWE_PROP_REQ_COUNT");
      aM("GetSWEReqCount", "SWE_COUNT_STR");
      aM("GetStandAloneClient", "SWE_PROP_STANDALONE_CLIENT");
      aM("GetAccessibilityEnhanced", "SWE_PROP_ACCESSIBILITY_ENHANCED");
      aM("GetHtmlPopupName", "SWE_PROP_HTML_POPUP_NAME");
      aM("GetPopupHDBrowser", "SWE_PROP_POPUP_HDBrowser");
      aM("GetCheckSum", "SWE_PROP_CHECKSUM");
      aM("GetCancelQueryTimeout", "SWE_PROP_CANCEL_QUERY_TIME_OUT");
      aM("GetPopupConSize", "SWE_PROP_POPUP_CON_SIZE");
      aM("GetStrictDate", "SWE_PROP_STRICT_DATE");
      aM("IsUIEnableDateError", "SWE_PROP_IS_ENABLE_UI_DATE_ERROR_DETECT");
      aM("UseAnsiCtrls", "SWE_PROP_USE_ANSI_CONTROLS");
      aM("IsMobileApplication", "SWE_IS_MOBILE_APPLICATION");
      aM("IsAutoOn", "SWE_IS_AUTO_ON");
      aM("GetRequiredIndicator", "SWE_PROP_ICON_REQ_INDICATOR");
      aM("GetBusyTimer", "SWE_BUSY_TIMER");
      aC.prototype.GetScreenNavTitle = function () {
        return ""
      };
      aC.prototype.GetDetailCategoryTitle = function () {
        return ""
      };
      var aN = aJ.GetProperty(C.get("SWE_PROP_PHONE_LEADING_ZERO"));
      if (aN) {
        var aL;
        var aO = " ";
        aL = aN.toString().split(",");
        for (var aK = 0, aI = aL.length; aK < aI; aK++) {
          var aH = aL[aK];
          if (aH && aH[0] !== "+") {
            aH = "+" + aH
          }
          L[aH] = aO
        }
      }
    };
    aC.prototype.IsPhoneLeadingZeroAllowed = function (aH) {
      return L[aH] ? true : false
    };
    aC.prototype.AppendToStrCache = function (aI) {
      if (aI && aI !== "") {
        var aH = [];
        CCFMiscUtil_StringToArray(aI, aH);
        aF = aF.concat(aH)
      }
    };
    aC.prototype.AppendToLocalStrCache = function (aI) {
      var aH = SiebelApp.Utils.IndexOf(ai, aI);
      if (aH === -1) {
        ai.push(aI);
        aH = ai.length - 1
      }
      return (C.get("SWE_INDEX_PREFIX") + aH)
    };
    aC.prototype.LookupStringCache = function (aH) {
      var aI = "";
      if (aH >= 0 && aH < aF.length) {
        aI = aF[aH]
      } else {
        if (aH && aH[0] === C.get("SWE_INDEX_PREFIX")) {
          aH = aH.substring(1, aH.length);
          aI = ai[aH]
        }
      }
      return aI
    };
    aC.prototype.GetStringCache = function () {
      return aF
    };
    aC.prototype.SetStringCache = function (aH) {
      aF = aH
    };
    aC.prototype.GetNavLevel = function () {
      return N
    };
    aC.prototype.GetPMPropSet = function () {
      return x
    };
    aC.prototype.SetPMPropSet = function (aH) {
      x = x === null ? aH : x;
      N = N.length === 0 ? (x ? (x.GetProperty(C.get("SWE_NAV_EXPANDED_LEVEL")) || "") : "").split(",") : N
    };
    aC.prototype.SetDiscardUserState = function (aH) {
      ap = aH
    };
    aC.prototype.GetDiscardUserState = function () {
      return ap
    };
    aC.prototype.GotoView = function (aM, aN, aI, aQ, aL, aP) {
      var aK;
      this.uiStatus.Busy({
        target: this.GetTargetViewContainer(),
        mask: true
      });
      SiebelApp.S_App.NotifyTimer("TimeGoToView", [aM, "Start GotoView"]);
      var aJ = true;
      if (!X.IsEmpty(aI)) {
        aK = X.DecodeFromQueryString(aI, true);
        var aO = aK.GetProperty(C.get("SWE_VIEW_ARG"));
        if (X.IsEmpty(aM) && X.IsEmpty(aN) && !X.IsEmpty(aO) && (!this.GetActiveView() || (aO !== this.GetActiveView().GetName())) && !aK.GetProperty(C.get("SWE_ARG_KEEP_CONTEXT"))) {
          aK.SetProperty(C.get("SWE_ARG_KEEP_CONTEXT"), "0")
        }
      } else {
        aK = CCFMiscUtil_CreatePropSet()
      }
      if (this.GetDiscardUserState()) {
        if (this.GetPopupPM().Get("state") === C.get("POPUP_STATE_VISIBLE")) {
          this.GetPopupPM().ExecuteMethod("SetPopupVisible", false)
        }
      } else {
        if (!aL && !this.CanLeaveMainView()) {
          aJ = false;
          this.uiStatus.Free();
          return aJ
        }
      }
      SiebelApp.S_App.NotifyTimer("TimeGoToView", [aM, "View Cache Ready"]);
      if (X.IsEmpty(aK.GetProperty(C.get("SWE_CMD_ARG")))) {
        aK.SetProperty(C.get("SWE_CMD_ARG"), C.get("SWE_GOTO_VIEW"))
      }
      if (!aK.GetProperty(C.get("SWE_ARG_KEEP_CONTEXT"))) {
        aK.SetProperty(C.get("SWE_ARG_KEEP_CONTEXT"), "1")
      }
      this.SetDefaultArgs(aK);
      if (!X.IsEmpty(aM)) {
        aM = aM.split("&").join("%26");
        aK.SetProperty(C.get("SWE_VIEW_ARG"), aM)
      }
      if (X.IsEmpty(aK.GetProperty(C.get("SWE_COUNT_STR")))) {
        aK.SetProperty(C.get("SWE_COUNT_STR"), this.GetSWEReqCount())
      } else {
        aC.prototype.GetSWEReqCount = function () {
          return aK.GetProperty(C.get("SWE_COUNT_STR"))
        }
      }
      var aR = X.EncodeToQueryString(aK, X.IsEmpty(aI));
      var aH = {};
      aH.url = this.GetPageURL();
      aH.data = aR.split(" ").join("%20");
      aH.type = "POST";
      aH.contentType = "application/x-www-form-urlencoded";
      aH.async = !aP;
      aH.context = this;
      aH.successfncallback = function () {
        var aT = new $.Deferred();
        var aS = this.ProcessResponse.apply(this, arguments);
        aS.done(function () {
          SiebelApp.S_App.ProcessError();
          SiebelApp.S_App.uiStatus.Free();
          aT.resolve()
        });
        return aT.promise()
      };
      SiebelApp.AjaxRequestMgr.Ajax(aH);
      aH = null;
      return aJ
    };
    function G() {
      $("#_sweview").addClass("siebui-indent-content")
    }
    function aj() {
      $("#_sweview").addClass("siebui-dashboard-content-indent")
    }
    function ao() {
      $("#SS_ChatUI").addClass("siebui-chat-pane")
    }
    aC.prototype.HideLayout = function (aH) {
      if (typeof (aH) === "string") {
        if (aH.match(/SS_OpenUIReportPane/) || aH.match(/SS_TaskUIPane/)) {
          $("#_sweview").removeClass("siebui-indent-content")
        } else {
          if (aH.match(/TaskAssistant/)) {
            $("#_sweview").removeClass("siebui-indent-content");
            var aI = SiebelApp.S_App.getExtObject("TaskAssistant");
            if (aI) {
              aI.ExecuteMethod("Hide")
            }
          } else {
            if (aH.match(/Dashboard/)) {
              $("#_sweview").removeClass("siebui-dashboard-content-indent");
              var aI = SiebelApp.S_App.getExtObject("Dashboard");
              if (aI) {
                SiebelApp.S_App.UnregisterExtObject("Dashboard")
              }
            } else {
              if (aH.match(/SS_ChatUI/)) {
                $("#SS_ChatUI").removeClass("siebui-chat-pane")
              } else {
                if (aH.match(/CommunicationPanel/)) {
                  var aI = SiebelApp.S_App.getExtObject("CommunicationPanel");
                  if (aI) {
                    aI.ExecuteMethod("Hide")
                  }
                }
              }
            }
          }
        }
      }
      $("#" + aH).html("");
      SiebelApp.EventManager.fireEvent("forceResize")
    };
    aC.prototype.GenerateSrvrReq = function (aJ) {
      var aH = CCFMiscUtil_CreatePropSet();
      aH.SetProperty(C.get("SWE_CMD_ARG"), aJ);
      aH.SetProperty(C.get("SWE_ARG_KEEP_CONTEXT"), "1");
      this.SetDefaultArgs(aH);
      aH.SetProperty(C.get("SWE_COUNT_STR"), SiebelApp.S_App.GetSWEReqCount());
      SiebelApp.S_App.OfflineCallMethod("GetSRN", aH);
      var aI = X.EncodeToQueryString(aH, false);
      var aK = SiebelApp.S_App.GetPageURL() + C.get("SWE_ARG_START") + aI;
      return aK
    };
    aC.prototype.CanLeaveMainView = function () {
      var aH = true;
      var aI = this.GetActiveView();
      if (!SiebelApp.S_App.UploadFile()) {
        return false
      }
      if (aI && !aI.SetActiveApplet(null)) {
        aH = false
      }
      return aH
    };
    aC.prototype.GetSWEReqCount = function () {
      return "1"
    };
    aC.prototype.GetRequestDefault = function () {
      var aH = CCFMiscUtil_CreatePropSet();
      this.SetDefaultArgs(aH);
      aH.SetProperty(C.get("SWE_VIEW_ID_ARG"), "");
      return aH
    };
    aC.prototype.SetDefaultArgs = function (aK) {
      aK.SetProperty(C.get("SWE_VIEW_RPC_ARG"), "1");
      aK.SetProperty(C.get("SWE_PROP_SESSION_RANDOM_NUMBER"), this.GetSRN());
      var aI = this.GetSWEReqCount();
      if (!isNaN(aI)) {
        aK.SetProperty(C.get("SWE_COUNT_STR"), aI)
      }
      if (!this.GetPopupPM().IsPopupStarted() && this.GetActiveView() && this.GetActiveView().GetActiveApplet() && !this.GetPopupPM().Get("isCurrencyOpen") && !X.IsTrue(aK.GetProperty(C.get("SWE_BUSINESS_SERVICE")))) {
        if (X.IsEmpty(aK.GetProperty(C.get("SWE_ACTIVE_APPLET_STR")))) {
          aK.SetProperty(C.get("SWE_ACTIVE_APPLET_STR"), this.GetActiveView().GetActiveApplet().GetName())
        }
        var aH = aK.GetProperty(C.get("SWE_APPLET_STR"));
        var aJ = !X.IsEmpty(j[aH]);
        if (X.IsEmpty(aK.GetProperty(C.get("SWE_ACTIVE_VIEW_STR"))) && !aJ) {
          aK.SetProperty(C.get("SWE_ACTIVE_VIEW_STR"), this.GetActiveView().GetName())
        }
      } else {
        if (!X.IsTrue(aK.GetProperty(C.get("SWE_BUSINESS_SERVICE"))) && !aK.GetProperty(C.get("SWE_ACTIVE_APPLET_STR")) && SiebelApp.S_App.PortletSessionMgr && S) {
          aK.SetProperty(C.get("SWE_ACTIVE_APPLET_STR"), S.GetName())
        }
      }
    };
    aC.prototype.OnLoadViewContent = function () {
      try {
        SiebelApp.EventManager.cleanListners("gridresize");
        SiebelApp.EventManager.fireEvent("preload");
        var aL = this.GetActiveView();
        if (!X.IsEmpty(aL)) {
          aL.Initialize();
          if (X.IsTrue(SiebelApp.S_App.GetAccessibilityEnhanced())) {
            $("[name= _sweview]").attr({
              role: "main",
              title: ax.GetViewSummary()
            })
          }
          if (typeof aL.GetRepstrName === "function") {
            $("[name=_sweview]").attr("rn", aL.GetRepstrName())
          }
          if (typeof aL.GetUIName === "function") {
            $("[name=_sweview]").attr("un", aL.GetUIName())
          }
        } else {
          SiebelApp.S_App.NavCtrlMgr.Show(true)
        }
        if (SiebelApp.S_App.IsMobileApplication() !== "true") {
          if ($("#_swescrnbar").hasClass("addshowactivated")) { }
          else {
            var aM;
            var aK = SiebelApp.S_App.GetDirection();
            aM = '<a href="#" id="openSidebarButton" title="Open Sidebar" class="hidden">&raquo;</a>';
            $("#_swescrnbar").prepend(aM);
            $("#_swescrnbar").addClass(aK ? "siebui-rtl-screenbar addshowactivated" : "addshowactivated");
            $("#_swecontent").removeClass("maxWidth");
            var aH;
            aH = '<a href="#" class="sidebarNavButton" id="sidebarCloseButton" title="Close Sidebar">&laquo;</a>';
            $("#s_sctrl").prepend(aH);
            $("#sidebarCloseButton").click(function () {
              $("#_swescrnbar").addClass("treeClosed");
              $("#_swecontent").addClass("maxWidth");
              $("#openSidebarButton").removeClass("hidden");
              $("#sidebarCloseButton").css("Display", "none");
              $("[id^='gview_s']").resize()
            });
            $("#openSidebarButton").click(function () {
              $("#s_sctrl").css("display", "");
              $("#_swescrnbar").removeClass("treeClosed");
              $("#openSidebarButton").addClass("hidden");
              $("#_swecontent").removeClass("maxWidth").addClass(aK ? "siebui-rtl-content" : "");
              $("[id^='gview_s']").resize()
            })
          }
        }
        var aN = SiebelAppFacade.ComponentMgr.FindComponent({
          id: C.get("SWE_PST_COMM_TOOLBAR")
        });
        if (SiebelApp.S_App.CommToolbar && !aN) {
          var aI = CCFMiscUtil_CreatePropSet();
          aI.SetProperty(C.get("SWE_UIDEF_PM_CTR"), "siebel/commToolbarpmodel");
          aI.SetProperty(C.get("SWE_UIDEF_PR_CTR"), "siebel/commToolbarprender");
          SiebelAppFacade.ComponentMgr.MakeComponent(this, aI, SiebelApp.S_App.CommToolbar);
          if (aN = SiebelAppFacade.ComponentMgr.FindComponent({
            id: C.get("SWE_PST_COMM_TOOLBAR")
          })) {
            aN.Show()
          }
        }
        if (this.GetActiveView() && this.GetActiveView().GetInvokeMethod()) {
          this.GetCmdMgr().InvokeCommand(this.GetActiveView().GetInvokeMethod())
        }
      } catch (aJ) {
        SiebelJS.Log(aJ)
      }
      finally {
        SiebelApp.EventManager.fireEvent("postload");
        this.uiStatus.Free()
      }
    };
    aC.prototype.OnLoadExternalObject = function (aI) {
      try {
        switch (aI) {
          case "SS_TaskUIPane":
            if ($("#taskList").hasClass("tasklist1")) {
              var aJ = SiebelApp.S_App.getExtObject("TaskUIPane");
              if (aJ) {
                G.call(this);
                aJ.Show()
              }
            }
            break;
          case "TaskAssistant":
            var aJ = SiebelApp.S_App.getExtObject("TaskAssistant");
            if (aJ) {
              G.call(this);
              aJ.Show()
            }
            break;
          case "Dashboard":
            var aJ = SiebelApp.S_App.getExtObject("Dashboard");
            if (aJ) {
              aj.call(this);
              aJ.Show()
            }
            break;
          case "SS_OpenUIReportPane":
            if ($("#reportList").hasClass("siebui-report-list")) {
              var aJ = SiebelApp.S_App.getExtObject("ReportPane");
              if (aJ) {
                G.call(this);
                aJ.Show()
              }
            }
            break;
          case "SS_ChatUI":
            var aJ = SiebelApp.S_App.getExtObject("ChatPane");
            if (aJ) {
              ao.call(this);
              aJ.Show()
            }
            break;
          case "CommunicationPanel":
            var aJ = SiebelApp.S_App.getExtObject("CommunicationPanel");
            if (aJ) {
              aJ.Show()
            }
            break
        }
      } catch (aH) {
        SiebelJS.Log(aH)
      }
      finally {
        SiebelApp.EventManager.fireEvent("forceResize");
        SiebelApp.EventManager.fireEvent("posteoiload");
        this.uiStatus.Free()
      }
    };
    aC.prototype.RegisterExtObject = function (aN) {
      var aO = aN.GetProperty(C.get("SWE_PST_EXT_OBJ_INFO"));
      var aM = this.getExtObject(aO);
      if (aM) {
        return aM.Object
      }
      aM = {};
      switch (aO) {
        case "TaskUIPane":
          var aJ = new SiebelAppFacade.TaskPresentationModel();
          aJ.Init();
          aM.TYPE = aO;
          aM.Object = aJ;
          break;
        case "TaskAssistant":
          var aK = new SiebelAppFacade.TaskAssistPlayerPM();
          aK.Init();
          aM.TYPE = aO;
          aM.Object = aK;
          break;
        case "Dashboard":
          var aP = new SiebelAppFacade.DashboardPM();
          aP.Init();
          aM.TYPE = aO;
          aM.Object = aP;
          break;
        case "ReportPane":
          var aI = new SiebelAppFacade.ReportPresentationModel();
          aI.Init();
          aM.TYPE = aO;
          aM.Object = aI;
          break;
        case "ChatPane":
          var aH = new SiebelAppFacade.ChatPresentationModel();
          aH.Init();
          aM.TYPE = aO;
          aM.Object = aH;
          break;
        case "CommunicationPanel":
          var aL = new SiebelAppFacade.CommunicationPanelPM();
          aL.Init();
          aM.TYPE = aO;
          aM.Object = aL;
          break
      }
      a.push(aM);
      return aM.Object
    };
    aC.prototype.getExtObject = function (aJ) {
      var aI = a.length;
      for (var aH = 0; aH < aI; aH++) {
        if (a[aH].TYPE === aJ) {
          return a[aH].Object
        }
      }
      return null
    };
    aC.prototype.UnregisterExtObject = function (aJ) {
      var aI = a.length;
      for (var aH = 0; aH < aI; aH++) {
        if (a[aH].TYPE === aJ) {
          a.splice(aH, 1);
          return
        }
      }
    };
    aC.prototype.CanInvokeMethod = function (aH) {
      return true
    };
    aC.prototype.LogOff = function () {
      var aJ = this.GetActiveView();
      if (aJ) {
        if (!aJ.SetActiveApplet(null)) {
          return false
        }
      }
      if (SiebelApp.S_App.GetTimer()) {
        var aK = this;
        var aN = {};
        aN.type = "POST";
        var aM = SiebelApp.S_App.GetTimer().GetLogBuffer();
        var aI = SiebelApp.S_App.GetPageURL();
        var aL = SiebelApp.S_App.GetSRN();
        aI = aI + "?SWECmd=InvokeMethod&SWEMethod=WritePerfLog&SRN=" + aL;
        var aH = "" + C.get("SWE_PERF_LOG_DATA") + "=" + URLEncode(aM);
        $.ajax({
          type: "POST",
          url: aI,
          data: aH,
          processData: false,
          complete: aK.OnUnLoadApp
        })
      } else {
        this.OnUnLoadApp();
        return true
      }
    };
    aC.prototype.OnUnLoadApp = function () {
      var aJ = "";
      var aH = "1";
      var aI = new Date();
      aJ = aJ + SiebelApp.S_App.GetPageURL() + "?SWECmd=Logoff&SWETS=" + aI.valueOf() + "&SWEPreLd=" + aH;
      window.location.replace(aJ)
    };
    aC.prototype.InvokeMethod = function (aU, aQ, aO) {
      var aI = true;
      aQ = aQ || CCFMiscUtil_CreatePropSet();
      var aK = aQ.Clone();
      var aS = this.GetMainView();
      aI = v.call(this, aU, aK);
      if (!aI) {
        return false
      }
      var aR = {};
      var aN = this;
      if (typeof (aO) === "object" || aO === true || aO === false) {
        aR.scope = this;
        aR.args = [];
        aR.args.push(aU);
        aR.args.push(aK);
        aR.async = (typeof (aO.async) === "boolean") ? aO.async : aO;
        aR.selfbusy = aO.selfbusy || false;
        aR.mask = aO.mask || false;
        aR.cb = function () {
          var aY = Array.prototype.slice.call(arguments);
          aY.push(aN.PostExecute.apply(aN, arguments));
          if (typeof (aO.scope) !== "undefined" && typeof (aO.scope.cb) === "function") {
            aO.scope.cb.apply(aO.scope || null, aY)
          }
          if (aY[0] === "ExecuteNamedQuery") {
            SiebelApp.S_App.uiStatus.Free()
          }
        }
      } else {
        aR = undefined
      }
      switch (aU) {
        case "Query":
          var aJ = aQ.Applet;
          delete aQ.Applet;
          aJ.GetBusComp().HandleQuery(aQ);
          aE.call(this, aU, aK);
          break;
        case "ExecuteNamedQuery":
          var aT = CCFMiscUtil_CreatePropSet();
          aK.SetProperty(C.get("SWE_CMD_ARG"), C.get("SWE_CMD_INVOKE_METHOD_STR"));
          aK.SetProperty(C.get("SWE_METHOD_STR"), aU);
          aK.SetProperty(C.get("SWE_INPUT_PROP_SET_STR"), aK.EncodeAsString());
          aK.SetProperty(C.get("SWE_VIEW_RPC_ARG"), "1");
          SiebelApp.S_App.uiStatus.Busy({
            timeOut: false,
            mask: true,
            loadMsg: true
          });
          var aX;
          if (aS) {
            aX = aS.GetActiveApplet();
            if (aX && aX.GetBusComp()) {
              var aP = CCFMiscUtil_CreatePropSet();
              if (!aX.InvokeMethod("ImplicitCommit", aP)) {
                aI = false;
                break
              }
            }
          }
          SiebelApp.S_App.CallServer(aK, aT, true, aR);
          if (typeof (aO) === "undefined") {
            SiebelApp.S_App.uiStatus.Free()
          }
          break;
        case "CanLeaveMainView":
          aI = this.CanLeaveMainView();
          aE.call(this, aU, aK);
          break;
        case "NextApplet":
          if (aS) {
            aS.CycleActiveApplet(false)
          }
          aE.call(this, aU, aK);
          break;
        case "PrevApplet":
          if (aS) {
            aS.CycleActiveApplet(true)
          }
          aE.call(this, aU, aK);
          break;
        case "GotoAppletMenu":
          if (aS) {
            var aW = aS.GetActiveApplet();
            if (aW.GetMenu()) {
              aW.GetMenu().OnMenuInvoke(C.get("APPLET_NAME"), C.get("SWE_PREPARE_APPLET_MENU"), C.get("SWE_MENU_APPLET"))
            }
          }
          aE.call(this, aU, aK);
          break;
        case "GotoApplicationMenu":
          if (r) {
            var aL = r.GetPM().Get("GetPlaceHolder");
            $("#" + aL).children().eq(0).children().eq(0).focus()
          }
          aE.call(this, aU, aK);
          break;
        case "GotoCTIToolBar":
          var aM = SiebelAppFacade.ComponentMgr.FindComponent({
            id: C.get("SWE_PST_COMM_TOOLBAR")
          });
          if (aM) {
            aM.ExecuteMethod("HandleGotoCTIToolbar")
          }
          aE.call(this, aU, aK);
          break;
        case "GotoChatPane":
          var aH = SiebelApp.S_App.getExtObject("ChatPane");
          if (aH) {
            aH.ExecuteMethod("SetFocus")
          }
          aE.call(this, aU, aK);
          break;
        case "GotoSelectedTreeNode":
          if (this.CanLeaveMainView() && aS) {
            aS.GotoSelectedTreeNode()
          }
          break;
        case "ViewList":
          SiebelApp.S_App.NavCtrlMgr.GetVisPM().GetRenderer().SetFocus();
          aE.call(this, aU, aK);
          break;
        case "Logoff":
          aI = this.LogOff();
          break;
        case "GotoScrnTab":
          SiebelApp.S_App.NavCtrlMgr.FocusNavLink(C.get("SWE_SCREEN_NAV_CONTROL_STR"));
          break;
        case "GotoViewTab":
          SiebelApp.S_App.NavCtrlMgr.FocusNavLink(C.get("SWE_DET_VIEW_NAV_CONTROL_STR"));
          break;
        case "GotoSubViewTab":
          $("#s_vctrl_div_tabView ul  li ").children().eq(0).focus();
          break;
        default:
          if (aU === am || aU === c) {
            var aX;
            if (aS) {
              aX = aS.GetActiveApplet()
            }
            if (aX && aX.GetBusComp() && aX.GetBusComp().IsInQueryState()) {
              var aP = CCFMiscUtil_CreatePropSet();
              aX.InvokeMethod(ab, aP)
            }
          }
          var aV;
          aV = this.CallServerApp(aU, aK, aR);
          if (typeof (aO) === "undefined") {
            var aQ = [];
            aQ.push(aU);
            aQ.push(aK);
            aQ.push(aV);
            aI = this.PostExecute.apply(this, aQ);
            SiebelApp.S_App.uiStatus.Free();
            return aI
          }
          break
      }
      return aI
    };
    aC.prototype.PostExecute = function (aJ, aL, aK) {
      if (aK === null) {
        return false
      } else {
        if (aJ == "GetProfileAttr") {
          var aI;
          aI = aL.GetPropertyAsStr("attrName");
          if (aI == "GetJSAddBarDisable") {
            if (strResult == "FALSE" || strResult == "False") {
              return false
            }
          }
        }
      }
      var aH = aE.call(this, aJ, aL);
      return aH
    };
    aC.prototype.SWECount = 0;
    aC.prototype.OnLoadViewContainer = function (aL) {
      (function () {
        var aM = $("[name=" + aL + "]");
        aC.prototype.GetTargetViewContainer = function () {
          return aM
        };
        aC.prototype.SetNextTargetViewContainer = function (aN) {
          aM = $("[name=" + aN + "]")
        };
        aC.prototype.updateTargetViewContainer = function (aP, aN) {
          var aO = new $.Deferred();
          SiebelApp.contentUpdater.AddCallBack(aP, function () {
            aO.resolveWith(this, ["LayoutDone"]);
            if (aN === true) {
              this.OnLoadViewContent()
            }
            if (SiebelApp.LayoutTransitionsMgr && typeof (SiebelApp.LayoutTransitionsMgr.ShowTransition) === "function") {
              SiebelApp.LayoutTransitionsMgr.ShowTransition(this.GetTargetViewContainer().attr("id"))
            }
          }, this);
          if (SiebelApp.LayoutTransitionsMgr && typeof (SiebelApp.LayoutTransitionsMgr.Setup) === "function") {
            SiebelApp.LayoutTransitionsMgr.Setup(this.GetTargetViewContainer().attr("id"))
          }
          this.GetTargetViewContainer().attr("src", aP);
          SiebelApp.contentUpdater.loadContent();
          return aO.promise()
        }
      }
        ());
      if (z === null) {
        var aJ = function () { };
        var aK = new aJ();
        aK.GetName = function () {
          return "MsgBarPxy"
        };
        z = new SiebelAppFacade.MsgBrdCstPresentationModel(aK);
        var aI = CCFMiscUtil_CreatePropSet();
        aI.SetProperty("SWE_OUI_RENDERER", "MsgBrdCstPhyRenderer");
        z.Init();
        z.Setup(aI.Clone());
        z.Show()
      }
      var aH = SiebelAppFacade.ComponentMgr.FindComponent({
        id: C.get("SWE_PST_SEARCH_NAME")
      });
      if (aH) {
        aH.Show()
      }
    };
    aC.prototype.GetLayoutURL = function (aQ, aL, aM, aP, aH) {
      var aJ = C.get("SWE_RPC_PROP_NEW_LAYOUT");
      var aO = C.get("SWE_ARG_EQUAL");
      var aI = C.get("SWE_ARG_DELIM");
      var aN = aP.GetProperty(C.get("SWE_LAYOUT_IDENTIFIER")) || "";
      aN = URLEncode(aN);
      if (aQ === aJ) {
        var aK;
        aK = this.GetPageURL() + C.get("SWE_ARG_START") + C.get("SWE_CMD_ARG") + aO + (!X.IsEmpty(aH) ? C.get("SWE_GET_APPLET_LAYOUT") : C.get("SWE_GET_VIEW_LAYOUT")) + aI + C.get("SWE_VIEW_ARG") + aO + aL + aI + C.get("SWE_VIEW_ID_ARG") + aO + aM + aI + C.get("SWE_VIEW_CHK_SUM_ARG") + aO + this.GetCheckSum() + aI + C.get("SWE_APPLET_STR") + aO + aH + aI + C.get("SWE_LAYOUT_IDENTIFIER") + aO + aN;
        return aK
      }
    };
    aC.prototype.NavCtrlMngr = function () {
      return l
    };
    aC.prototype.GetDrilldownURL = function (aH) {
      this.SetDefaultArgs(aH);
      aH.SetProperty(C.get("SWE_COUNT_STR"), this.GetSWEReqCount());
      aH.SetProperty(C.get("SWE_VIEW_ID_ARG"), "");
      aH.SetProperty(C.get("SWE_METHOD_STR"), C.get("SWE_CMD_DRILLDOWN_STR"));
      aH.SetProperty(C.get("SWE_REQ_ROW_ID_STR"), "1");
      aH.SetProperty(C.get("SWE_ACTIVE_VIEW_STR"), this.GetActiveView().GetName());
      aH.SetProperty(C.get("SWE_VIEW_ARG"), this.GetActiveView().GetName());
      aH.SetProperty(C.get("SWE_CMD_ARG"), C.get("SWE_CMD_INVOKE_METHOD_STR"));
      aH.SetProperty(C.get("SWE_POPUP_VECTOR_STR"), "");
      var aI = X.EncodeToQueryString(aH);
      return "start.swe?" + aI
    };
    aC.prototype.DelegateResponse = function (bh, aH) {
      var bb = new $.Deferred();
      var bk = [];
      var aN = [];
      var a7 = null;
      if (SiebelApp.S_App.GetEnablePerfHooks() && SiebelApp.S_App.GetTimer()) {
        SiebelApp.S_App.GetTimer().TimeGoToView("", "Have Object Info");
        SiebelApp.S_App.GetTimer().TimeServerNotification("Received Server Notifications");
        SiebelApp.S_App.GetTimer().TimePopupApplet("", "Have Object Info")
      }
      var a8 = C.get("SWE_RPC_PROP_NEW_LAYOUT");
      var bj = C.get("SWE_RPC_PROP_NEW_APPLET_LAYOUT");
      var aX = C.get("SWE_RPC_PROP_REFRESH_LAYOUT");
      var aW = C.get("SWE_RPC_PROP_CONFIRM_DIALOG");
      var aK = C.get("SWE_RPC_PROP_NEW_PAGE");
      var a6 = C.get("SWE_RPC_PROP_NEW_POPUP");
      var aQ = C.get("SWE_RPC_PROP_CLOSE_POPUP");
      var aU = C.get("SWE_PST_NAV_CTRL_INFO");
      var aR = C.get("SWE_RPC_PROP_NOTIFICATION");
      var a0 = C.get("SWE_PST_EXT_OBJ_INFO");
      var aY = C.get("SWE_RPC_PROP_COMMAND_MGR");
      var aO = C.get("SWE_HIST_OUI_UPDATE_INFO");
      var aL = C.get("SWE_OUI_PRINT_DATA");
      var aP = C.get("SWE_PST_CLIENT_DESCRIPTOR_INFO");
      var aS = C.get("SWE_RPC_PROP_TOGGLE_LAYOUT");
      var aV = C.get("SWE_RPC_PROP_STATUS_ERROR");
      var bf = C.get("SWE_RPC_PROP_TARGET");
      var bl = C.get("SWE_RPC_APPLET_NOTIFICATIONS");
      var a2 = C.get("SWE_APPLICATION_PM_PS");
      var bc = CCFMiscUtil_CreatePropSet();
      var aZ = SiebelAppFacade.EJSAdapter;
      if (bh instanceof JSSPropertySet) {
        bc = bh
      } else {
        bc.DecodeFromString(bh)
      }
      if (X.IsTrue(bc.GetProperty(C.get("SWERESPONSE_ERROR_STR")))) {
        X.Alert(bc.GetProperty(C.get("SWERESPONSE_ERROR_MSG")));
        this.uiStatus.Free();
        bb.resolve();
        return bb.promise()
      }
      if (!X.IsEmpty(bc.GetProperty(C.get("SWE_RPC_PROP_ALERT_MSG")))) {
        X.Alert(HtmlDecode(bc.GetProperty(C.get("SWE_RPC_PROP_ALERT_MSG"))))
      }
      var a5 = bc.GetProperty(C.get("SWE_RPC_PROP_STATUS"));
      if (a5 === aQ) {
        this.GetPopupPM().ExecuteMethod("ProcessClearPopup", bc)
      }
      var aT = bc.GetProperty(C.get("SWE_PROP_SESSION_RANDOM_NUMBER"));
      if (aT && a5 === aV && this.GetSRN && X.IsEmpty(this.GetSRN())) {
        aC.prototype.GetSRN = function () {
          return aT
        }
      }
      if (a5 === aV) {
        e.call(this, bc, aH)
      }
      var ba = X.Curry(aC.prototype.DefineAccessor, aC.prototype, bc);
      ba("GetSWEReqCount", "SWE_PROP_REQ_COUNT");
      ba("GetSWEReqCount", "SWE_COUNT_STR");
      var aM = null;
      var be = bc.GetChildCount();
      for (var bd = 0; bd < be; bd++) {
        var a4 = bc.GetChild(bd);
        var a1 = a4.GetType();
        switch (a1) {
          case aR:
            aB.call(this, a4);
            break;
          case bl:
            D.call(this, a4);
            break;
          case ae:
            aM = a4;
            if (aM !== null) {
              var a9 = aM.GetChildByType(C.get("SWE_PST_STR_CACHE"));
              if (a9 !== null) {
                this.AppendToStrCache(a9.GetProperty(C.get("SWE_PROP_VALUE")))
              }
            }
            break;
          case aU:
            l.HandleResponsePS(a4.Clone());
            l.ProcessObjectInfo(a4);
            break;
          case a0:
            var bi = this.getExtObject(a4.GetProperty(C.get("SWE_PST_EXT_OBJ_INFO")));
            if (bi) {
              bi.HandleNotify(a4.GetChild(0))
            } else {
              bi = this.RegisterExtObject(a4);
              if (bi) {
                bi.Setup(a4.GetChild(0))
              }
            }
            break;
          case aY:
            this.GetCmdMgr().ProcessNotifications(a4);
            break;
          case aO:
            f.ProcessObjectInfo(a4);
            break;
          case a2:
            this.SetPMPropSet(a4.Clone());
            break;
          case aL:
            var a3 = bc.GetChildByType(aP);
            aZ.GenerareEJSPrint(a4, a3);
            break
        }
      }
      if (bc.GetProperty(C.get("SWE_ALARM_NOTI"))) {
        var aI = SiebelAppFacade.ComponentMgr.FindComponent({
          id: "Alarm Reminder Applet"
        });
        if (aI) {
          aI.GetPM().ExecuteMethod("notifyAlarm")
        }
      }
      var bg,
        aJ;
      switch (a5) {
        case a8:
          bg = an.call(this, bc.GetProperty(bf), aN);
          bk.push(this.ProcessNewLayout(bc, bg));
          a7 = "refreshview";
          break;
        case bj:
          bg = an.call(this, bc.GetProperty(bf), aN, bc.GetProperty(C.get("SWE_APPLET_STR")));
          bk.push(this.ProcessNewAppletLayout(bc, bg));
          a7 = "newappletlayout";
          break;
        case aS:
          bk = bk.concat(this.GetActiveView().HandleRefreshLayout(bc, aN));
          break;
        case aX:
          bg = an.call(this, bc.GetProperty(bf), aN);
          aJ = this.ProcessRefreshLayout(bc, bg);
          if (aJ !== false) {
            bk.push(aJ);
            a7 = "refreshlayout"
          } else {
            aN.pop()
          }
          break;
        case aW:
          av.call(this, bc);
          break;
        case aK:
          this.SetShowNewPage(true);
          bg = an.call(this, bc.GetProperty(bf), aN);
          aJ = this.ProcessNewPage(bc, bg);
          if (aJ !== false) {
            bk.push(aJ);
            a7 = "refreshpage"
          } else {
            aN.pop()
          }
          break;
        case a6:
          a7 = this.ProcessNewPopup(bc);
          break;
        case aV:
          break;
        default:
          break
      }
      if (X.IsEmpty(aM) || a5 === aS) {
        w.call(this)
      }
      if (SiebelApp.S_App.GetEnablePerfHooks() && SiebelApp.S_App.GetTimer()) {
        SiebelApp.S_App.GetTimer().TimeServerNotification("Processed Server Notifications")
      }
      bk.push(this.GetFilesAndProcessObjectInfo(bc));
      if (a5 === aX) {
        if (bk.length > 0) {
          bk[bk.length - 1].done(function () {
            w.call(SiebelApp.S_App)
          })
        }
      }
      this.InvokeCallBack();
      if (!X.IsEmpty(f)) {
        f.ManipulateHistoryState()
      }
      if (SiebelApp.S_App.OUIPerfReporter) {
        SiebelApp.S_App.OUIPerfReporter.RefreshData(bc)
      }
      if (a5 === aQ) {
        B(bc)
      }
      bc = null;
      if (bk.length > 0) {
        $.when.apply($, bk).done(function () {
          SiebelApp.S_App.ProcessCallbacks(a7, aN);
          bb.resolve()
        })
      } else {
        SiebelApp.S_App.NavCtrlMgr.Show(true);
        bb.resolve()
      }
      if (X.IsEmpty(aM)) {
        aA.call(this)
      }
      return bb.promise()
    };
    aC.prototype.ProcessCallbacks = function (aI, aK) {
      if (aI === "refreshpopup") {
        SiebelApp.S_App.GetPopupPM().SetProperty("CanProcessLayout", true)
      }
      if (aI !== "newappletlayout") {
        SiebelApp.S_App.NavCtrlMgr.Show(true)
      }
      for (var aJ = 0, aH = aK.length; aJ < aH; aJ++) {
        aK[aJ]["func"].call(SiebelApp.S_App, aK[aJ]["tgt"], aK[aJ]["applet"])
      }
      SiebelApp.EventManager.fireEvent(aI)
    };
    function e(aU, aR) {
      var aO;
      var aT;
      var aI = C.get("SWE_RPC_PROP_ERROR_CODE");
      var aN = C.get("SWE_RPC_PROP_ERROR_MSG");
      var aH = C.get("SWE_RPC_PROP_ERRORS");
      var aP = aU.GetChildCount();
      if (!(aR && typeof (aR.AddErrorMsgText) === "function")) {
        aR = this
      }
      if (aP > 0 && (this.ErrorObject.GetIndex(aR) > -1)) {
        for (var aQ = 0; aQ < aP; aQ++) {
          var aK = aU.GetChild(aQ);
          var aL = aK.GetType();
          if (aL == aH) {
            for (var aM = 0, aS = aK.GetChildCount(); aM < aS; aM++) {
              var aJ = aK.GetChild(aM);
              aO = aJ.GetProperty(aI);
              aT = aJ.GetProperty(aN);
              if (aO && aT && SiebelApp.S_App.ErrorObject) {
                aR.AddErrorMsgText(aO, aT, true)
              }
            }
            break
          }
        }
      }
    }
    aC.prototype.ProcessNewPopup = function (aH) {
      this.SetShowNewPage(true);
      this.GetPopupPM().SetProperty("CanProcessLayout", false);
      this.GetPopupPM().ExecuteMethod("ProcessNewPopup", aH);
      return "refreshpopup"
    };
    aC.prototype.ProcessResponse = function (aH, aI) {
      if (arguments[2] && arguments[2].getResponseHeader("swerpc") != "true") {
        window.location.replace(SiebelApp.S_App.GetPageURL());
        return true
      }
      return this.GetFilesAndDelegateResponse(aH, aI)
    };
    function B(aJ) {
      var aM = aJ.GetProperty(C.get("SWE_RPC_PROP_URL"));
      var aI = "";
      var aH = "";
      var aL = false;
      var aK = aJ.GetProperty(C.get("PROP_TARGET"));
      if (!X.IsEmpty(aM) && !X.IsEmpty(aK)) {
        aI = aJ.GetProperty(C.get("SWE_RPC_PROP_VIEW"));
        aH = aJ.GetProperty(C.get("SWE_RPC_PROP_VIEW_ID"));
        if (SiebelApp.S_App.GetActiveView() && SiebelApp.S_App.GetActiveView().GetName() == aI) {
          aL = true
        }
        if (aL) {
          SiebelApp.S_App.RefreshView(aI, aH, aM, aK)
        } else {
          SiebelApp.S_App.GotoView(aI, aH, aM, aK)
        }
      }
    }
    aC.prototype.SetURLToGo = function (aI, aK, aJ, aM, aH, aL) {
      if (aJ || !p) {
        p = true;
        Z = aI;
        M = aK;
        A = aM;
        ad = aH;
        u = aL
      }
    };
    function aA() {
      if (p) {
        p = false;
        if (A) {
          if (u) {
            this.RefreshView(A, ad, Z, M)
          } else {
            this.GotoView(A, ad, Z, M);
            if (SiebelApp.S_App.uiStatus.m_gbusy > 1) {
              SiebelApp.S_App.uiStatus.Free()
            }
          }
        } else {
          var aH = this.GotoURL(Z, M);
          if (aH && typeof (aH.done) === "function") {
            aH.done(function () {
              this.uiStatus.Free()
            })
          }
        }
      }
    }
    aC.prototype.RefreshView = function (aJ, aI, aM, aL) {
      var aH = null;
      var aK = CCFMiscUtil_CreatePropSet();
      if (X.IsEmpty(aI)) {
        aH = X.DecodeFromQueryString(aM);
        SiebelApp.S_App.CallServer(aH, aK, true);
        this.ProcessError()
      } else {
        SiebelApp.S_App.GotoURL(aM, aL)
      }
    };
    aC.prototype.GotoURL = function (aJ, aI) {
      var aH = this.GetPageURL() + aJ.split("start.swe")[1];
      if (aI === k) {
        window.location.replace(aH)
      } else {
        return this.updateTargetViewContainer(aH)
      }
    };
    function an(aJ, aI, aH) {
      aJ = aJ.split(".");
      if (aJ[aJ.length - 1] === "_sweview") {
        aJ = "_svf0";
        aI.push({
          func: this.OnLoadViewContent,
          tgt: aJ
        })
      } else {
        if (aJ[aJ.length - 1] === "_sweclient") {
          aI.push({
            func: this.OnLoadAppletContent,
            tgt: aJ,
            applet: aH
          });
          var aK = $("[name=" + aJ[aJ.length - 1] + "]");
          aC.prototype.GetTargetViewContainer = function () {
            return aK
          };
          aC.prototype.SetNextTargetViewContainer = function (aL) {
            aK = $("[name=" + aL + "]")
          }
        } else {
          aJ = aJ[aJ.length - 1];
          aI.push({
            func: this.OnLoadExternalObject,
            tgt: aJ
          })
        }
      }
      this.SetNextTargetViewContainer(aJ);
      return aJ
    }
    aC.prototype.OnLoadAppletContent = function (aJ, aI) {
      SiebelAppFacade.ComponentMgr.FindComponent({
        id: aI
      }).Show();
      var aH = j[aI];
      aH.ShowOnly();
      aH.ShowSelection();
      this.ClearErrorMsg();
      if (aH.HasCustomShadow() && aH.shadow && typeof (aH.shadow.OnLoad) === "function") {
        aH.shadow.OnLoad()
      }
      this.uiStatus.Busy();
      this.uiStatus.Free()
    };
    aC.prototype.ProcessNewLayout = function (aK, aL) {
      if (this.GetPopupPM().Get("state") !== C.get("POPUP_STATE_UNLOADED")) {
        this.GetPopupPM().ExecuteMethod("ClearPopup")
      }
      var aM = aK.GetProperty(C.get("SWE_RPC_PROP_VIEW"));
      var aJ = aK.GetProperty(C.get("SWE_RPC_PROP_APPLET")) || aK.GetProperty(C.get("SWE_APPLET_STR"));
      var aH = aK.GetProperty(C.get("SWE_RPC_PROP_VIEW_ID"));
      aM = aM.split(" ").join("%20").split("&").join("%26");
      var aI = this.GetLayoutURL(C.get("SWE_RPC_PROP_NEW_LAYOUT"), aM, aH, aK, aJ);
      if (SiebelApp.S_App.GetEnablePerfHooks() && SiebelApp.S_App.GetTimer()) {
        SiebelApp.S_App.GetTimer().TimeGoToView(aM, "Call GetViewLayout")
      }
      return this.updateTargetViewContainer(aI)
    };
    aC.prototype.ProcessNewAppletLayout = function (aJ, aK) {
      SiebelApp.S_App.uiStatus.ShowOnLoadIndicator();
      var aI = aJ.GetProperty(C.get("SWE_RPC_PROP_APPLET")) || aJ.GetProperty(C.get("SWE_APPLET_STR"));
      var aH = this.GetLayoutURL(C.get("SWE_RPC_PROP_NEW_LAYOUT"), "", "", aJ, aI);
      return q.call(this, aH)
    };
    function q(aI) {
      var aH = new $.Deferred();
      SiebelApp.contentUpdater.AddCallBack(aI, function () {
        aH.resolveWith(this, ["AppletLayoutDone"])
      }, this);
      this.GetTargetViewContainer().attr("src", aI);
      SiebelApp.contentUpdater.loadContent();
      return aH.promise()
    }
    aC.prototype.ProcessRefreshLayout = function (aH, aJ) {
      if (SiebelApp.S_App.GetEnablePerfHooks() && SiebelApp.S_App.GetTimer()) {
        SiebelApp.S_App.GetTimer().TimeRefreshView("", "", "Start RefreshView")
      }
      var aK = aH.GetProperty(C.get("SWE_RPC_PROP_VIEW"));
      var aL = aH.GetProperty(C.get("SWE_VIEW_ID_STR")) || "";
      if (aK !== this.GetActiveView().GetName() || X.IsEmpty(aK)) {
        return false
      }
      aK = aK.split(" ").join("%20").split("&").join("%26");
      var aI = SiebelApp.S_App.GetLayoutURL(C.get("SWE_RPC_PROP_NEW_LAYOUT"), aK, aL, aH);
      if (SiebelApp.S_App.GetEnablePerfHooks() && SiebelApp.S_App.GetTimer()) {
        SiebelApp.S_App.GetTimer().TimeGoToView("", "View Cache Ready")
      }
      return this.updateTargetViewContainer(aI)
    };
    function av(aN) {
      var aO;
      var aU;
      var aL;
      var aM;
      var aR;
      var aQ;
      var aH;
      var aS;
      var aP;
      var aJ;
      var aT = null;
      var aK = null;
      var aI = false;
      aP = aN.GetProperty(C.get("SWE_RPC_PROP_STATUS"));
      if (aP === C.get("SWE_RPC_PROP_CONFIRM_DIALOG")) {
        aO = aN.GetProperty(C.get("SWE_CONFIRM_TEXT_STR"));
        aL = X.Confirm(aO);
        if (aL) {
          aU = aN.GetProperty(C.get("SWE_OK_METHOD_STR"))
        } else {
          aU = aN.GetProperty(C.get("SWE_CANCEL_METHOD_STR"))
        }
        if (aU) {
          aR = aN.GetProperty(C.get("SWE_VIEW_ID_STR"));
          aH = aN.GetProperty(C.get("SWE_APPLET_STR"));
          if (aL) {
            aS = aN.GetChildByType(C.get("SWE_OK_METHOD_ARGS_STR"))
          } else {
            aS = aN.GetChildByType(C.get("SWE_CANCEL_METHOD_ARGS_STR"))
          }
          aS = aS || CCFMiscUtil_CreatePropSet();
          if (X.IsEmpty(aR)) {
            aT = this.GetMainView()
          }
          if (aT && (aK = aT.GetApplet(aH))) {
            aI = aK.InvokeMethod(aU, aS)
          } else {
            aM = aN.GetProperty(C.get("SWE_SERVICE"));
            if (aM) {
              aS.SetProperty(C.get("SWE_CMD_ARG"), C.get("SWE_CMD_INVOKE_METHOD_STR"));
              aS.SetProperty(C.get("SWE_SERVICE"), aM);
              aS.SetProperty(C.get("SWE_METHOD_STR"), aU)
            } else {
              aQ = aN.GetProperty(C.get("SWE_VIEW_ARG"));
              aS.SetProperty(C.get("SWE_CMD_ARG"), C.get("SWE_CMD_INVOKE_METHOD_STR"));
              aS.SetProperty(C.get("SWE_VIEW_ID_STR"), aR);
              aS.SetProperty(C.get("SWE_VIEW_ARG"), aQ);
              aS.SetProperty(C.get("SWE_APPLET_STR"), aH);
              aS.SetProperty(C.get("SWE_METHOD_STR"), aU)
            }
            aJ = CCFMiscUtil_CreatePropSet();
            SiebelApp.S_App.CallServer(aS, aJ, true)
          }
        }
        aI = true
      }
      return aI
    }
    aC.prototype.ProcessNewPage = function (aO, aM) {
      var aL = false;
      var aH = aO.GetProperty(C.get("SWE_RPC_PROP_URL"));
      var aJ = aO.GetProperty(C.get("SWE_RPC_PROP_VIEW"));
      var aI = aO.GetProperty(C.get("SWE_RPC_PROP_VIEW_ID"));
      var aK = aO.GetProperty(C.get("SWE_RPC_PROP_TARGET"));
      var aN = aO.GetProperty(C.get("SWE_RPC_PROP_TIMEOUT"));
      aK ? ((aK.indexOf("_sweview") > -1) ? this.ClearExistingViewAndBO() : false) : false;
      if (!X.IsEmpty(aJ) && X.IsEmpty(aI)) {
        var aP = this.GetActiveView();
        if (!X.IsEmpty(aP) && (aP.GetName() !== aJ) && (aH.match("SWECmd=GotoPostedAction"))) {
          this.GotoView(aJ, "", aH, aK);
          SiebelApp.S_App.uiStatus.Free();
          return false
        }
      } else {
        if (aN && SiebelApp.S_App.PortletSessionMgr && aH.indexOf("SWECmd=Login") != -1) {
          window.location.replace(this.GetPageURL() + "?" + SiebelApp.S_App.PortletSessionMgr.GetInstance().GetAction());
          return false
        } else {
          if (aN && aK.indexOf("top") != -1 & aH.indexOf("SWECmd=Login") != -1) {
            window.location.replace(aH);
            return false
          }
        }
      }
      this.uiStatus.Busy({
        target: this.GetTargetViewContainer(),
        mask: true
      });
      this.SetURLToGo(aH, aK, false, aJ, aI, aL);
      return false
    };
    aC.prototype.InvokeCallBack = function () {
      while (K.length > 0) {
        var aH = {};
        aH = K.pop();
        aH.callBack.call(aH.object)
      }
    };
    function w() {
      if (this.GetCmdMgr().GetRefreshTB()) {
        this.GetCmdMgr().UpdateUIControls()
      }
      var aI = this.GetActiveView();
      if (!X.IsEmpty(aI)) {
        aI.ExecuteUIUpdate()
      }
      for (var aJ in j) {
        var aH = j[aJ];
        aH.ExecuteUIUpdate()
      }
    }
    function D(aN) {
      var aI = this.GetActiveView();
      var aQ = !X.IsEmpty(aI) ? aI.GetAppletMap() : {};
      var aL = aN.GetChildCount();
      for (var aK = 0; aK < aL; aK++) {
        var aP = aN.GetChild(aK);
        var aH = aP.GetProperty(C.get("SWE_PROP_VAR_NAME"));
        var aO = aP.GetType();
        if (aO === C.get("SWE_APPLET_PM_PS")) {
          for (var aJ in aQ) {
            if (aQ[aJ].GetVarName() === aH) {
              aQ[aJ].GetPModel().HandleResponsePS(aP)
            }
          }
          for (var aM in j) {
            if (j[aM].GetVarName() === aH) {
              j[aM].GetPModel().HandleResponsePS(aP)
            }
          }
        }
      }
    }
    function aB(aQ) {
      if (aQ.GetType() !== C.get("SWE_RPC_PROP_NOTIFICATION")) {
        return false
      }
      var aI = this.GetActiveView();
      var aN = this.GetActiveBusObj();
      var aT = !X.IsEmpty(aI) ? aI.GetAppletMap() : {};
      var aM = aQ.GetChildCount();
      for (var aL = 0; aL < aM; aL++) {
        var aR = aQ.GetChild(aL);
        var aS = aR.GetProperty(C.get("SWE_PROP_BC"));
        var aP = aR.GetProperty(C.get("SWE_PROP_BC_NOTI_ZONE"));
        var aH = !X.IsEmpty(aN) ? aN.GetBusComp(aS) : null;
        if (aH && (!aP || aP == aN.GetZone())) {
          aH.HandleServerNotifications(aR);
          for (var aJ in aT) {
            if (!X.IsEmpty(aT[aJ].GetBusComp()) && aT[aJ].GetBusComp().GetVarName() === aS && !(aT[aJ].GetPModel() instanceof JSSPropertySet)) {
              if (aT[aJ].GetPModel()) {
                aT[aJ].GetPModel().HandleNotify(aR)
              }
            }
          }
          l.HandleNotify(aR)
        } else {
          for (var aO in j) {
            if (j.hasOwnProperty(aO)) {
              var aK = j[aO];
              if (!X.IsEmpty(aK.GetBusComp()) && aK.GetBusComp().GetVarName() === aS) {
                aH = aK.GetBusComp();
                aH.HandleServerNotifications(aR);
                aK.GetPModel().HandleNotify(aR)
              }
            }
          }
        }
      }
    }
    aC.prototype.GetFilesAndDelegateResponse = function (aJ, aI) {
      var aP = new $.Deferred();
      var aM = null;
      var aN = C.get("SWE_PST_CLIENT_DESCRIPTOR_INFO");
      var aO = CCFMiscUtil_CreatePropSet();
      aO.DecodeFromString(aJ);
      var aL = aO.GetChildByType(aN);
      if (aL !== null) {
        var aH = X.PrepareModuleInfo(aO);
        if (aH.length > 0) {
          var aK = this;
          require(aH, function () {
            try {
              aM = aK.DelegateResponse(aO, aI)
            } catch (aQ) {
              SiebelJS.Log(aQ)
            }
            aL = null;
            aM.done(function () {
              aP.resolve()
            })
          })
        } else {
          aM = this.DelegateResponse(aO, aI);
          aL = null;
          aM.done(function () {
            aP.resolve()
          })
        }
      } else {
        aM = this.DelegateResponse(aO, aI);
        aL = null;
        aM.done(function () {
          aP.resolve()
        })
      }
      return aP.promise()
    };
    aC.prototype.GetFilesAndProcessObjectInfo = function (aJ) {
      var aI = new $.Deferred();
      var aL = null;
      var aH = aJ.GetChildByType("api");
      if (aH !== null) {
        var aK = X.GetFileInfoFromPropSet(aJ);
        if (aK.length > 0) {
          var aM = this;
          require(aK, function () {
            try {
              aL = J.call(aM, aJ)
            } catch (aN) {
              SiebelJS.Log(aN)
            }
            aH = null;
            aL.done(function () {
              aI.resolveWith(this, ["Process Object"])
            })
          })
        } else {
          aL = J.call(this, aJ);
          aH = null;
          aL.done(function () {
            aI.resolveWith(this, ["Process Object"])
          })
        }
        aK = null
      } else {
        aH = null;
        aI.resolveWith(this, ["Process Object"])
      }
      return aI.promise()
    };
    aC.prototype.InitializeBO = function (aH) {
      this.ClearExistingViewAndBO();
      aq = new SiebelApp.S_App.BusObj();
      aq.ProcessObjectInfo(aH.GetChild(0))
    };
    aC.prototype.ClearExistingViewAndBO = function () {
      if (!X.IsEmpty(aq) && !X.IsEmpty(ax) && ax.GetBusObj() === aq) {
        this.ClearMainView();
        this.ClearBusObj()
      }
    };
    function J(bf) {
      var be = new $.Deferred();
      var aZ = [];
      this.SetSelfProps(bf);
      if (SiebelApp.S_App.GetEnablePerfHooks() && SiebelApp.S_App.GetTimer()) {
        SiebelApp.S_App.GetTimer().TimePopupApplet("", "Process Object Info Start")
      }
      var aX = SiebelApp.Environment;
      if (aX) {
        m.call(this, bf)
      }
      var aJ = bf.GetChildByType("api");
      var a4 = bf.GetProperty(C.get("SWE_RPC_PROP_STATUS"));
      var a2 = C.get("SWE_RPC_PROP_NEW_APPLET_LAYOUT");
      if (aJ !== null) {
        var aW = aJ.EnumChildren(true);
        if (aW !== null) {
          var bb = C.get("SWE_PST_NEW_VIEW");
          var a9 = C.get("SWE_PST_NEW_BUSOBJ");
          var aI = C.get("SWE_PST_STR_CACHE");
          var a0 = C.get("SWE_PST_NEW_NAV_CTRL_MGR");
          var aN = C.get("SWE_PST_NAV_CTRL_INFO");
          var aO = C.get("SWE_PROP_VALUE");
          var a8 = C.get("SWE_PST_BUSOBJ_INFO");
          var bc = C.get("SWE_PST_VIEW_INFO");
          var aR = C.get("SWE_PST_CLEAR_MV");
          var aU = C.get("SWE_PST_EXT_OBJ_INFO");
          var aV = C.get("SWE_PST_ICON_LIST");
          var aK = C.get("SWE_PST_NEW_BUSCOMP");
          var a5 = SiebelApp.S_App.BusComp;
          var a7 = SiebelApp.S_App.Applet;
          var aM = SiebelApp.S_App.ListApplet;
          var aH = SiebelApp.S_App.Playbarapplet;
          var aQ;
          var aS = C.get("SWE_PST_NEW_APPLET");
          var aY = C.get("SWE_PST_NEW_LIST_APPLET");
          var aL = C.get("SWE_PST_NEW_TREEAPPLET");
          var bd = null;
          do {
            var a1 = aW.GetType();
            switch (a1) {
              case aK:
                aQ = new a5();
                aQ.ProcessObjectInfo(aW.GetChild(0));
                break;
              case aS:
              case aY:
              case aL:
                var ba = X.PrepareModuleInfo(aW);
                (function () {
                  var bj = aW;
                  var bi = aQ;
                  if (a4 === a2) {
                    var bg = new $.Deferred();
                    aZ.push(bg.promise())
                  }
                  var bh = function () {
                    try {
                      if (a4 !== a2) {
                        ag.call(SiebelApp.S_App, bj, bi)
                      } else {
                        aD.call(SiebelApp.S_App, bj, bi);
                        bg.resolveWith(SiebelApp.S_App, ["SA Applet Object Info"])
                      }
                    } catch (bk) {
                      SiebelJS.Log(bk)
                    }
                    bj = aW = null
                  };
                  ba.length ? require(ba, bh) : bh()
                })();
                break;
              case a9:
                this.InitializeBO(aW);
                break;
              case aR:
                this.ClearMainView();
                this.ClearBusObj();
                break;
              case a8:
                aq.ProcessObjectInfo(aW);
                break;
              case bb:
                ax = SiebelAppFacade.ProxyFactory.MakeObject(a1);
                SiebelAppFacade.ComponentMgr.RegisterLevel(ax, this);
                aZ.push(ax.GetFilesAndProcessObjectInfo(aW.GetChild(0)));
                break;
              case bc:
                if (!X.IsEmpty(ax)) {
                  aZ.push(ax.GetFilesAndProcessObjectInfo(aW))
                }
                break;
              case a0:
                var a6 = aW.GetChildCount();
                if (a6 > 0) {
                  l.ProcessObjectInfo(aW.GetChild(0))
                }
                break;
              case aN:
                l.HandleResponsePS(aW.Clone());
                l.ProcessObjectInfo(aW);
                break;
              case aU:
                var a3 = aW.GetProperty(C.get("SWE_PST_EXT_OBJ_INFO"));
                var aT = SiebelApp.S_App.getExtObject(a3);
                if (aT) {
                  aT.HandleNotify(aW.GetChild(0))
                } else {
                  aT = SiebelApp.S_App.RegisterExtObject(aW);
                  if (aT) {
                    aT.Setup(aW.GetChild(0));
                    if (a3 === "Dashboard") {
                      aj.call(this)
                    } else {
                      if (a3 === "ChatPane") {
                        ao.call(this)
                      } else {
                        G.call(this)
                      }
                    }
                    if (bf.GetProperty(C.get("SWE_RPC_PROP_VIEW_ID")) !== "Dashboard") {
                      aT.Show()
                    }
                  }
                }
                break;
              case aV:
                s.call(this, aW);
                break;
              default:
                break
            }
          } while ((aW = aJ.EnumChildren(false)))
        }
      }
      if (SiebelApp.S_App.GetEnablePerfHooks() && SiebelApp.S_App.GetTimer()) {
        SiebelApp.S_App.GetTimer().TimeGoToView("", "Processed Object Info");
        SiebelApp.S_App.GetTimer().TimePopupApplet("", "Processed Object Info")
      }
      var aP = this;
      if (aZ.length > 0) {
        $.when.apply($, aZ).done(function () {
          be.resolveWith(aP, ["API "])
        })
      } else {
        be.resolveWith(aP, ["API "])
      }
      return be.promise()
    }
    function az(aH, aI) {
      if (SiebelApp.S_App.LocaleObject) {
        SiebelApp.S_App.LocaleObject.AddLocalString(aH, aI)
      }
    }
    function aD(aK, aL) {
      var aJ;
      var aH = aK.GetChild(0).Clone();
      aJ = SiebelAppFacade.ProxyFactory.MakeObject(aK.GetType());
      if (aJ) {
        if (aL) {
          aJ.SetBusComp(aL)
        }
        var aI = {
          callback: aJ.ProcessObjectInfo,
          scope: aJ,
          input: {
            ps: aH
          }
        };
        SiebelAppFacade.ComponentMgr.MakeComponent(this, aH, aJ, aI);
        SiebelAppFacade.ComponentMgr.CompleteComponent(this, aH, aJ);
        if (X.IsTrue(aK.GetProperty(C.get("SWE_PST_STANDALONE_APPLET")))) {
          j[aJ.GetName()] = aJ;
          aJ.SetIsStandAlone(true);
          aJ.SetAppletActive(true, aJ)
        }
        aJ.Initialize()
      }
    }
    function ag(aK, aL) {
      var aJ;
      var aH = aK.GetChild(0).Clone();
      aJ = SiebelAppFacade.ProxyFactory.MakeObject(aK.GetType());
      if (aJ) {
        if (aL) {
          aJ.SetBusComp(aL)
        }
        if (aK.GetType() === C.get("SWE_PST_NEW_LIST_APPLET")) {
          var aI = {
            callback: aJ.ProcessObjectInfo,
            scope: aJ,
            input: {
              ps: aH
            }
          };
          SiebelAppFacade.ComponentMgr.MakeComponent(this, aH, aJ, aI);
          SiebelAppFacade.ComponentMgr.CompleteComponent(this, aH, aJ)
        } else {
          aJ.ProcessObjectInfo(aH);
          SiebelAppFacade.ComponentMgr.MakeComponent(this, aH, aJ)
        }
        if (X.IsTrue(aK.GetProperty(C.get("SWE_PST_STANDALONE_APPLET")))) {
          j[aJ.GetName()] = aJ;
          aJ.SetIsStandAlone(true);
          if (SiebelApp.S_App.PortletSessionMgr) {
            aJ.SetAppletActive(true, aJ)
          }
        }
        if (SiebelApp.S_App.GetPopupPM().Get("state") !== C.get("POPUP_STATE_VISIBLE")) {
          aJ.Initialize();
          SiebelAppFacade.ComponentMgr.FindComponent({
            id: aJ.GetName()
          }).Show();
          aJ.ShowOnly();
          aJ.ShowSelection();
          this.ClearErrorMsg();
          if (aJ.HasCustomShadow() && aJ.shadow && typeof (aJ.shadow.OnLoad) === "function") {
            aJ.shadow.OnLoad()
          }
        }
      }
    }
    function s(aN) {
      var aJ;
      var aH = [];
      var aO = aN.GetType();
      if (aO != C.get("SWE_PST_ICON_LIST")) {
        return
      }
      aJ = aN.GetProperty(C.get("SWE_PROP_NAME"));
      if (aJ) {
        var aM = aN.GetChildCount();
        for (var aL = 0; aL < aM; aL++) {
          var aI = aN.GetChild(aL);
          var aK = aI.GetType();
          if (aK == C.get("SWE_PST_ICON")) {
            var aP = o.call(this, aI);
            aH.push(aP)
          }
        }
        ah[aJ] = aH
      }
    }
    function o(aI) {
      if (X.IsEmpty(aI)) {
        return
      }
      var aH = {};
      aH.iconName = aI.GetProperty(C.get("SWE_PROP_NAME"));
      aH.iconImage = aI.GetProperty(C.get("SWE_PROP_ICON_IMG"));
      return aH
    }
    function m(aH) {
      SiebelApp.Environment.SetProtoAPIs(aH)
    }
    aC.prototype.GetFilesAndInitExecContext = function (aK, aM) {
      var aN = CCFMiscUtil_CreatePropSet();
      aN.DecodeFromString(aK);
      var aI = X.GetFileInfoFromPropSet(aN);
      var aH = aN.GetChildByType(ae);
      if (aI.length > 0) {
        var aJ = aH.GetProperty(C.get("SWE_PROP_PAGEURL")).split("start.swe")[0] + SIEBEL_BUILD;
        require.config({
          baseUrl: aJ,
          waitSeconds: 30,
          paths: {
            "jquery.ui.widget": "../scripts/3rdParty/jquery-ui/current/ui/jquery.ui.widget"
          }
        });
        var aL = this;
        require.exec("for(var reg in contexts['_'].registry){if(contexts['_'].registry.hasOwnProperty(reg)){contexts['_'].registry[reg].enable();} useInteractive = true;}");
        SiebelRequire(aI, null, null, function () {
          try {
            require.exec("for(var reg in contexts['_'].registry){if(contexts['_'].registry.hasOwnProperty(reg)){contexts['_'].registry[reg].enable();} useInteractive = true;}");
            aL.InitExecContext(aN, aM)
          } catch (aO) {
            SiebelJS.Log(aO)
          }
          aN = null
        })
      } else {
        this.InitExecContext(aN, aM);
        aN = null
      }
      aH = aI = null
    };
    aC.prototype.InitExecContext = function (aI, aH) {
      SiebelApp.EventManager.addListner("AppInit", ak, this);
      SiebelApp.S_App.ErrorObject.DecorateErrorCapability(this);
      d();
      f = new SiebelApp.S_App.HistoryMgr();
      l = SiebelApp.S_App.NavCtrlMgr;
      au.call(this, aI);
      if (aH) {
        this.ProcessResponse(aH)
      } else {
        this.LoadClientContainer()
      }
    };
    aC.prototype.LoadClientContainer = function () {
      SiebelApp.contentUpdater.updateSrc(this.GetClientFrame(), this.GetPageURL() + this.GetClientURL().split("start.swe")[1])
    };
    function ak() {
      var aH = this.GetService(C.get("SWE_OUI_CLIENT_PREF_SERVICE"));
      if (!X.IsEmpty(aH)) {
        var aI = SiebelApp.S_App.NewPropertySet();
        aI.SetProperty(C.get("SWE_OUI_CLIENT_PREF"), "Mobile=" + SiebelAppFacade.DecisionManager.IsTouch());
        aH.InvokeMethod("SetClientCapability", aI, {
          npr: false,
          async: true,
          cb: function () { }

        })
      }
    }
    function T() {
      if (!r) {
        r = new SiebelApp.S_App.Menu(this);
        r.CreatePM("AppMenuPR", SiebelAppFacade.AppMenuPM);
        r.ShowMenuControl()
      }
    }
    aC.prototype.InitializeGlobalMenu = function () {
      if (!this.GetTargetViewContainer) {
        SiebelApp.EventManager.addListner("AppInit", T, this)
      } else {
        T.call(this)
      }
    };
    aC.prototype.GetLabel = function () {
      return ""
    };
    aC.prototype.RegisterControl = function (aH, aI) {
      if (E) {
        E[aH] = aI
      }
    };
    aC.prototype.GetControlClassInstance = function (aH) {
      if (E) {
        return E[aH]
      }
    };
    aC.prototype.RegisterConstructorAgainstKey = function (aH, aI) {
      if (V) {
        V[aH] = aI
      }
    };
    aC.prototype.GetConstructorFromKey = function (aH) {
      if (V) {
        return V[aH]
      }
    };
    aC.prototype.CallServer = function (aH, aO, aK, aJ) {
      aJ = $.extend({
        selfbusy: false,
        mask: true,
        async: false,
        opdecode: true
      }, aJ);
      if (!aJ.selfbusy) {
        var aN = {};
        if (aJ.target) {
          aN.target = aJ.target
        }
        if (aJ.mask) {
          aN.mask = aJ.mask
        }
        this.uiStatus.Busy(aN)
      }
      aO = aO || CCFMiscUtil_CreatePropSet();
      if (X.IsTrue(aH.GetProperty(C.get("SWE_PROP_CANCELABLE_RPC")))) {
        var aI = new Date();
        H = "" + Math.floor((aI.getTime() / 1000));
        aH.SetProperty(C.get("SWSE_CANCEL_ID"), H)
      }
      if (String(aH.GetProperty(C.get("SWSE_CMD_STR"))) !== C.get("SWSE_CANCEL_QUERY")) {
        this.SetDefaultArgs(aH)
      }
      var aM = X.EncodeToQueryString(aH),
        aI = new Date(),
        aL = null;
      aM = aM + "&" + C.get("SWE_TIME_STAMP") + "=" + aI.getTime();
      this.SetInputPS(aH);
      aL = {
        url: this.GetPageURL(),
        data: aM.split(" ").join("%20"),
        type: "POST",
        async: aJ.async,
        contentType: "application/x-www-form-urlencoded",
        successfncallback: this.OnSuccessCallServer,
        errfncb: aa,
        context: {
          scope: this,
          lp: aJ,
          outputPS: aO,
          nPR: aK
        }
      };
      SiebelApp.AjaxRequestMgr.Ajax(aL);
      aL = null
    };
    aC.prototype.OnSuccessCallServer = function (aK, aJ, aO) {
      var aM = this.lp,
        aN = this.outputPS,
        aQ = this.scope,
        aL = this.nPR,
        aH = new $.Deferred();
      if (aL === true && aO && typeof (aO.getResponseHeader) === "function" && aO.getResponseHeader("swerpc") != "true") {
        window.location.replace(SiebelApp.S_App.GetPageURL());
        return true
      }
      if (!X.IsEmpty(aK)) {
        if (aL === true) {
          var aP = (aM && aM.scope) || this;
          var aI = aQ.ProcessResponse(aK, aP);
          aI.done(function () {
            SiebelApp.S_App.ProcessError();
            aH.resolve()
          })
        } else {
          aH.resolve()
        }
        if (aM.opdecode === true) {
          aN.DecodeFromString(aK);
          if (SiebelApp.S_App.OUIPerfReporter) {
            SiebelApp.S_App.OUIPerfReporter.RefreshData(aN)
          }
        }
        if (typeof (aM.cb) === "function") {
          aM.args = aM.args || [];
          if (aM.opdecode === true) {
            aM.args.push(aN)
          } else {
            aM.args.push(aK)
          }
          aM.cb.apply(aM.scope || null, aM.args)
        } else {
          if (typeof (aM.scope) !== "undefined" && typeof (aM.scope.PostExecute) === "function") {
            aM.args = aM.args || [];
            aM.args.push(aN);
            aM.scope.PostExecute.apply(aM.scope || null, aM.args)
          }
        }
      } else {
        aH.resolve()
      }
      aH.done(function () {
        if ((aM && !aM.selfbusy) || !aM) {
          aQ.uiStatus.Free()
        }
      });
      return aH.promise()
    };
    function aa(aK, aM, aJ) {
      var aI = this.lp,
        aL = this.outputPS,
        aH = this.scope;
      if (typeof (aI.errcb) === "function") {
        aI.args = aI.args || [];
        aI.errcb.apply(aI.scope || null, aI.args)
      } else {
        if (aI.scope !== "undefined" && typeof (aI.scope.PostExecute) === "function") {
          aI.args = aI.args || [];
          aL.SetProperty(C.get("AJAX_FAIL_ERR"), aM);
          aI.args.push(aL);
          aI.scope.PostExecute.apply(aI.scope || null, aI.args)
        }
      }
      if ((aI && !aI.selfbusy) || !aI) {
        aH.uiStatus.Free()
      }
    }
    aC.prototype.GetSessionCookie = function () {
      if (document.cookie) {
        return document.cookie
      }
    };
    aC.prototype.SetStaticPickValues = function (aI, aH) {
      t[aI] = aH
    };
    aC.prototype.GetStaticPickValues = function (aH) {
      return t[aH]
    };
    aC.prototype.SetActiveView = function (aH) {
      ax = aH
    };
    aC.prototype.SetActiveBO = function (aH) {
      aq = aH
    };
    aC.prototype.ClearMainView = function () {
      if (ax && typeof (ax.EndLife) === "function") {
        var aH = SiebelAppFacade.ComponentMgr.FindComponent({
          id: ax.GetName()
        });
        ax.EndLife();
        if (aH) {
          if (aH.GetPM && aH.GetPM()) {
            aH.GetPM().EndLife()
          }
          SiebelAppFacade.ComponentMgr.DeleteComponent(aH, this)
        }
      }
      this.GetPopupPM().ExecuteMethod("ProcessClearPopup");
      SiebelApp.S_App.ClearErrorMsg();
      ax = null
    };
    aC.prototype.ClearBusObj = function () {
      if (aq && typeof (aq.EndLife) === "function") {
        aq.EndLife()
      }
      aq = null
    };
    aC.prototype.SeblTrace = function (aH, aI) { };
    aC.prototype.GetBusObj = function (aH) {
      var aI = this.GetActiveView();
      if (!aH) {
        if (aI) {
          return aI.GetBusObj()
        }
      }
      if (aI && aI.GetBusObj().GetName() === aH) {
        return aI.GetBusObj()
      }
      return null
    };
    aC.prototype.GetProfileAttr = function (aI) {
      var aH;
      var aJ;
      if (!aI) {
        this.SetErrorMsg("AppErrInvalidAttrName");
        return null
      }
      aH = CCFMiscUtil_CreatePropSet();
      aH.SetType("GetProfileAttr");
      aH.SetProperty("attrName", aI);
      aJ = this.CallServerApp("GetProfileAttr", aH);
      if (aJ === null) {
        return null
      } else {
        if (this.HasErrorMsg()) {
          this.ProcessError();
          return false
        }
      }
      return aJ
    };
    aC.prototype.SetProfileAttr = function (aI, aJ) {
      if (!aI) {
        this.SetErrorMsg("AppErrInvalidAttrName");
        return false
      }
      aJ = aJ || "";
      var aH = CCFMiscUtil_CreatePropSet();
      aH.SetType("SetProfileAttr");
      aH.SetProperty("attrName", aI);
      aH.SetProperty("value", aJ);
      aJ = this.CallServerApp("SetProfileAttr", aH);
      if (aJ === null) {
        return null
      } else {
        if (this.HasErrorMsg()) {
          this.ProcessError();
          return false
        }
      }
      return true
    };
    aC.prototype.GetMainView = function () {
      return this.GetActiveView()
    };
    aC.prototype.CallServerApp = function (aN, aM, aJ) {
      var aL;
      var aI = CCFMiscUtil_CreatePropSet();
      var aH;
      var aK;
      aK = aM.EncodeAsString();
      aL = CCFMiscUtil_CreatePropSet();
      aL.SetProperty("SWECmd", "InvokeMethod");
      aL.SetProperty("SWEMethod", aN);
      aL.SetProperty("SWEIPS", aK);
      SiebelApp.S_App.CallServer(aL, aI, true);
      aH = aI.GetProperty("Result");
      return aH
    };
    aC.prototype.NewPropertySet = function () {
      return (CCFMiscUtil_CreatePropSet())
    };
    var Q = {};
    aC.prototype.RemoveService = function (aH) {
      if (Q[aH.GetName()]) {
        delete Q[aH.GetName()]
      }
    };
    aC.prototype.GetService = function (aI) {
      if (X.IsEmpty(aI)) {
        return false
      }
      var aH = Q[aI];
      if (!X.IsEmpty(aH)) {
        aH.AddRef();
        return aH
      } else {
        aH = new SiebelApp.Service();
        aH.SetName(aI);
        Q[aH.GetName()] = aH
      }
      if (R[aI]) {
        if (typeof (window[R[aI]]) === "function") {
          new window[R[aI]](aH)
        }
      }
      return aH
    };
    aC.prototype.ShowModalDialog = function (aH, aI, aJ) {
      return window.showModalDialog(aH, aI, aJ)
    };
    function v(aJ, aI) {
      var aH;
      if (this.shadow && typeof (this.shadow.OnPreInvokeMethod) === "function") {
        aH = this.shadow.OnPreInvokeMethod(aJ, aI);
        if (aH === "CancelOperation") {
          return false
        }
        return true
      }
      return true
    }
    function aE(aI, aH) {
      if (this.shadow && typeof (this.shadow.OnInvokeMethod) === "function") {
        this.shadow.OnInvokeMethod(aI, aH)
      }
    }
    aC.prototype.CreateJSShadow = function (aJ, aM) {
      if (!aM) {
        return false
      }
      var aL = [];
      CCFMiscUtil_StringToArray(aM, aL);
      if (aL.length < 2) {
        return false
      }
      $.ajaxSetup({
        async: false
      });
      var aK = function (aN, aO) { };
      var aH = aL.length;
      for (var aI = 1; aI < aH; aI++) {
        $.getScript(aL[aI], aK)
      }
      $.ajaxSetup({
        async: true
      });
      if (typeof (window[aL[0]]) === "function") {
        new window[aL[0]](aJ);
        return true
      }
      return false
    };
    var P = false;
    var F = {};
    (function (aH) {
      F.encode = function (aM) {
        if (!aM) {
          return ""
        }
        var aK = new Uint8Array(aM),
          aL,
          aI = aK.length,
          aJ = "";
        for (aL = 0; aL < aI; aL += 3) {
          aJ += aH[aK[aL] >> 2];
          aJ += aH[((aK[aL] & 3) << 4) | (aK[aL + 1] >> 4)];
          aJ += aH[((aK[aL + 1] & 15) << 2) | (aK[aL + 2] >> 6)];
          aJ += aH[aK[aL + 2] & 63]
        }
        if ((aI % 3) === 2) {
          aJ = aJ.substring(0, aJ.length - 1) + "="
        } else {
          if (aI % 3 === 1) {
            aJ = aJ.substring(0, aJ.length - 2) + "=="
          }
        }
        return aJ
      };
      F.decode = function (aO) {
        var aJ = aO.length * 0.75,
          aP = aO.length,
          aN,
          aL = 0,
          aM,
          aK,
          aI,
          aR;
        if (aO[aO.length - 1] === "=") {
          aJ--;
          if (aO[aO.length - 2] === "=") {
            aJ--
          }
        }
        var aQ = new Uint8Array(aJ);
        for (aN = 0; aN < aP; aN += 4) {
          aM = aH.indexOf(aO[aN]);
          aK = aH.indexOf(aO[aN + 1]);
          aI = aH.indexOf(aO[aN + 2]);
          aR = aH.indexOf(aO[aN + 3]);
          aQ[aL++] = (aM << 2) | (aK >> 4);
          aQ[aL++] = ((aK & 15) << 4) | (aI >> 2);
          aQ[aL++] = ((aI & 3) << 6) | (aR & 63)
        }
        return aQ
      }
    })("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");
    function af() {
      try {
        return new window.XMLHttpRequest()
      } catch (aH) { }

    }
    function O() {
      try {
        return new window.ActiveXObject("Microsoft.XMLHTTP")
      } catch (aH) { }

    }
    aC.prototype.IsInFileEditing = function () {
      return P
    };
    function W() {
      var aJ;
      var aH = (navigator.userAgent.indexOf("Trident") > 0);
      if (aH) {
        var aI = document.getElementById("SiebeAttachmentAppletFrame");
        if (aI) {
          aJ = aI.contentWindow.document.getElementById("SiebelAttachmentJavaApplet")
        }
      } else {
        aJ = document.getElementById("SiebelAttachmentJavaApplet2")
      }
      return aJ
    }
    aC.prototype.UploadFile = function () {
      if (!SiebelApp.S_App.IsInFileEditing()) {
        return true
      }
      P = false;
      var aQ = W();
      if (aQ) {
        var aR = aQ.uploadFile();
        if (!aR) {
          return true
        }
        var aT = jQuery.parseJSON(aR);
        var aI = aT.uploadStatus;
        if (aI == 2) {
          P = true;
          SWEAlert(SiebelApp.S_App.LocaleObject.GetLocalString("IDS_ATT_CLOSE_CONFIRM"));
          return false
        } else {
          if (aI == 1) {
            var aJ = aT.boundary;
            var aM = aT.url;
            var aP = 0;
            var aK = new Array();
            for (aP = 0; ; aP++) {
              var aO = aQ.getUploadData(aP, 4096);
              if (aO) {
                aK.push(aO)
              } else {
                break
              }
            }
            var aN = aK.join("");
            var aL = F.decode(aN);
            var aS = function () {
              if (this.readyState == 4) {
                if (this.status == 200) {
                  var aU = SiebelApp.S_App.GetActiveView().GetActiveApplet();
                  aU.InvokeMethod("WriteRecord", CCFMiscUtil_CreatePropSet())
                }
              }
            };
            var aH = af() || O();
            aH.onreadystatechange = aS;
            aH.open("POST", aM, false);
            aH.setRequestHeader("Content-Type", "multipart/form-data; boundary=" + aJ);
            aH.send(aL.buffer)
          } else {
            if (aI == -1) {
              SWEAlert(SiebelApp.S_App.LocaleObject.GetLocalString("IDS_ATT_UPLOAD_FAILED"))
            } else {
              if (aI == -2) {
                P = true;
                SWEAlert(SiebelApp.S_App.LocaleObject.GetLocalString("IDS_ATT_CLOSE_CONFIRM"));
                return false
              }
            }
          }
        }
        return true
      }
    };
    /*KC MP rollback to IP13*/
    aC.prototype.DownloadFile = function (aX, a3) {
      var aM = aX.GetProperty(Y);
      var aI = aM.split(U);
      var aR = aX.GetProperty(al);
      var aQ = this.GetPageURL() + U;
      var aO = aI[1];
      var aZ = ArrayBuffer ? true : false;
      var aU = (navigator.userAgent.indexOf("Trident") > 0);
      var aT = aX.GetProperty("FileTitle");
      var aS = aX.GetProperty("FileExt");
      var a1 = aT + (aS ? ("." + aS) : "");
			/*
			var a0 = false;
			if (localStorage) {
				a0 = localStorage.getItem("isAdfmContainer")
			}
			*/
      if (aQ && aO) {
        var a5 = "";
        var ba = aO.split("&");
        var a9 = ba.length;
        for (var a8 = 0; a8 < a9; a8++) {
          var bb = ba[a8].split("=");
          if (bb[0] == "SRN") {
            bb[1] = SiebelApp.S_App.GetSRN()
          }
          a5 += '<input type="hidden" name="' + bb[0] + '" value="' + bb[1] + '" />'
        }
        if ((SiebelApp.S_App.IsMobileApplication() === "true") && (window.navigator.standalone !== undefined) && window.navigator.standalone) {
          var a6 = aQ + aO;
          var a4 = document.createElement("a");
          a4.setAttribute("href", a6);
          var a7 = document.createEvent("HTMLEvents");
          a7.initEvent("click", true, true);
          a4.dispatchEvent(a7);
          a4 = null
        } else {
          jQuery('<form action="' + aQ + '" method="post"' + (aR ? "" : ' target="_blank"') + ">" + a5 + "</form>").appendTo("body").submit().remove()
        }
      }

    }

    aC.prototype.GetAppletControlInstance = function (aK, aI, aJ, aL, aH) {
      var aM = new SiebelApp.S_App.AppletControl();
      var aN = CCFMiscUtil_CreatePropSet();
      aN.SetType(C.get("SWE_PST_CNTRL"));
      aM.ProcessObjectInfo(aN);
      aM.GetName = function () {
        return aK
      };
      aM.GetUIType = function () {
        return aI
      };
      aM.GetDisplayName = function () {
        return aJ
      };
      aM.GetWidth = function () {
        return aL
      };
      aM.GetHeight = function () {
        return aH
      };
      aM.GetMaxSize = function () {
        return 1000
      };
      aM.IsSortable = function () {
        return true
      };
      aM.GetFieldName = function () {
        return ""
      };
      aM.GetIconMap = function () {
        return ""
      };
      aM.GetDisplayFormat = function () {
        return ""
      };
      aM.GetInputName = function () {
        return ""
      };
      aM.GetDefaultMethod = function () {
        return ""
      };
      aM.GetSpanPrefix = function () {
        return ""
      };
      aM.GetValue = function () {
        return ""
      };
      aM.IsClientCtrl = function () {
        return true
      };
      return aM
    };
    aC.prototype.GetInputPS = function () {
      return I
    };
    aC.prototype.SetInputPS = function (aH) {
      I = aH
    };
    aC.prototype.GetCSParam = function () {
      var aH = {};
      aH.async = true;
      return aH
    };
    aC.prototype.SetEnablePerfHooks = function (aH) {
      aG = aH
    };
    aC.prototype.GetEnablePerfHooks = function () {
      return aG
    };
    aC.prototype.GetTimer = function () {
      return at
    };
    aC.prototype.SetTimer = function (aH) {
      at = aH
    };
    aC.prototype.NotifyTimer = function (aI, aH) {
      if (aG && at) {
        at[aI].apply(at, aH)
      }
    };
    aC.prototype.OfflineCallMethod = function () { };
    aC.prototype.Drilldown = function (aK) {
      var aH = aK || window.event;
      if (aH.preventDefault) {
        aH.preventDefault()
      }
      aH.returnValue = false;
      if (aK.stopPropagation) {
        aK.stopPropagation()
      } else {
        aK.cancelBubble = true
      }
      var aJ = new Date();
      var aL = aH.currentTarget || aH.srcElement;
      var aI = aL.href + "&" + C.get("SWE_TIME_STAMP") + "=" + aJ.getTime();
      this.GotoView("", "", aI, "");
      return false
    };
    return n
  }
    ())
}
SiebelApp.MvgBeautifier = {
  Initialize: function () {
    this.availableApplet = null;
    this.selectedApplet = null;
    var b = $("div[name=popup]").width();
    var i = $("div[name=popup]").height();
    var l = SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_SHOW_AVAILABLE");
    var c = SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_SHOW_SELECTED");
    var f = l;
    var e = c;
    $("div[name=popup]").width(b).height(i).dialog("option", "dialogClass", "siebui-mvg-dialog").dialog("option", "buttons", [{
      text: l,
      click: function (m) {
        var p = $(m.currentTarget);
        var o = p.children(".ui-button-text");
        if (p.text() === c) {
          o.text(l).end().attr("title", f);
          n = SiebelApp.MvgBeautifier.getSelected();
          if (!!n && typeof (n.GetObjectType) == "function") {
            o.attr("un", l);
            o.attr("rn", "ShowAvailable")
          }
          SiebelApp.MvgBeautifier.resizeSelected()
        } else {
          if (p.text() === l) {
            o.text(c).end().attr("title", e);
            var n = SiebelApp.MvgBeautifier.getAvailable();
            if (!!n && typeof (n.GetObjectType) == "function") {
              o.attr("un", c);
              o.attr("rn", "ShowSelected")
            }
            SiebelApp.MvgBeautifier.resizeAvailable()
          }
        }
      }
    }
    ]).find(".siebui-mvg-btn-modifier button").clone(true).appendTo($("div[name=popup]").parent().find("div.ui-dialog-buttonset"));
    $("div[name=popup]").parent().find("div.ui-dialog-buttonset").find("button").each(function () {
      $(this).html($(this).val() || $(this).attr("data-display"))
    });
    var d = SiebelApp.S_App.GetActiveView();
    var j = d.GetAppletMap();
    var a;
    for (var h in j) {
      if (j.hasOwnProperty(h)) {
        if (typeof (j[h].GetMvgAssocAppletName) === "function") {
          a = d.GetApplet(j[h].GetMvgAssocAppletName());
          if (!!a) {
            this.availableApplet = a;
            e = a.GetAppletLabel() || "";
            e = e ? (e + ":" + c) : c;
            a.GetPModel().AttachPostProxyExecuteBinding("ALL", function (n, m, o) {
              SiebelApp.MvgBeautifier.MVGPostProxyExecute(this.Get("GetId"))
            })
          }
        }
        if (typeof (j[h].GetMvgSelectedAppletName) === "function") {
          a = d.GetApplet(j[h].GetMvgSelectedAppletName());
          if (!!a) {
            this.selectedApplet = a;
            f = a.GetAppletLabel() || "";
            f = f ? (f + ":" + l) : l;
            a.GetPModel().AttachPostProxyExecuteBinding("ALL", function (n, m, o) {
              SiebelApp.MvgBeautifier.MVGPostProxyExecute(this.Get("GetId"))
            })
          }
        }
      }
    }
    a = null;
    SiebelApp.MvgBeautifier.resizeSelected();
    var g = $("div[name=popup]").parent().find("div.ui-dialog-buttonset").find("button").eq(0);
    g.removeClass().addClass("appletButtons").attr("title", f);
    var k = SiebelApp.MvgBeautifier.getSelected();
    if (k && typeof (k.GetObjectType) == "function") {
      g.children("span").eq(0).attr("ot", "Button").attr("rn", "ShowAvailable").attr("un", l)
    }
    $("div[name=popup]").find("form").submit(function (m) {
      m.preventDefault();
      return false
    })
  },
  MVGPostProxyExecute: function (f) {
    var d = $("div[name=popup]").parent();
    var e = d.find("div.siebui-mvg-btn-modifier").find("button");
    if (!$("#a_" + f).is(":visible")) {
      d.find("div.ui-dialog-buttonset").find("button").eq(0).click()
    }
    for (var c = 0, a = e.length; c < a; ++c) {
      var b = e.eq(c).attr("disabled") ? true : false;
      d.find('[name="' + e.eq(c).attr("name") + '"]').eq(1).removeAttr("disabled").attr("disabled", b).removeClass("appletButton appletButtonDis").addClass((!b ? "appletButton" : "appletButtonDis"))
    }
    d = e = null
  },
  getAvailable: function () {
    if (!this.availableApplet) {
      var c = SiebelApp.S_App.GetActiveView();
      var a = c.GetAppletMap();
      for (var b in a) {
        if (a.hasOwnProperty(b)) {
          if (typeof (a[b].GetMvgAssocAppletName) === "function") {
            this.availableApplet = c.GetApplet(a[b].GetMvgAssocAppletName())
          }
        }
      }
    }
    return this.availableApplet
  },
  getSelected: function () {
    if (!this.selectedApplet) {
      var c = SiebelApp.S_App.GetActiveView();
      var a = c.GetAppletMap();
      for (var b in a) {
        if (a.hasOwnProperty(b)) {
          if (typeof (a[b].GetMvgSelectedAppletName) === "function") {
            this.selectedApplet = c.GetApplet(a[b].GetMvgSelectedAppletName())
          }
        }
      }
    }
    return this.selectedApplet
  },
  resizeAvailable: function () {
    $("div[name=popup]").find("td.AppletStylePopup").eq(0).show();
    var a = this.getSelected();
    if (!!a) {
      $("#a_" + a.GetId()).parents("div").eq(0).hide()
    }
    a = this.getAvailable();
    if (!!a) {
      $("#a_" + a.GetId()).parents("div").eq(0).show();
      if (a.GetPModel && !(a.GetPModel() instanceof JSSPropertySet)) {
        a.GetPModel().OnControlEvent(SiebelApp.Constants.get("PHYEVENT_APPLET_FOCUS"));
        if (a.GetPModel().GetRenderer() && a.GetPModel().GetRenderer().resize) {
          a.GetPModel().GetRenderer().resize()
        }
      }
      this.elementShowHide(true)
    }
  },
  resizeSelected: function () {
    $("div[name=popup]").find("td.AppletStylePopup").eq(0).hide();
    var a = this.getAvailable();
    if (!!a) {
      $("#a_" + a.GetId()).parents("div").eq(0).hide()
    }
    a = this.getSelected();
    if (!!a) {
      $("#a_" + a.GetId()).parents("div").eq(0).show();
      if (a.GetPModel && !(a.GetPModel() instanceof JSSPropertySet)) {
        a.GetPModel().OnControlEvent(SiebelApp.Constants.get("PHYEVENT_APPLET_FOCUS"));
        if (a.GetPModel().GetRenderer() && a.GetPModel().GetRenderer().resize) {
          a.GetPModel().GetRenderer().resize()
        }
      }
      this.elementShowHide(false)
    }
  },
  elementShowHide: function (b) {
    var f = $("div[name=popup]").parent().find("div.ui-dialog-buttonset"),
      a = this.getSelected().GetControls();
    for (var h in a) {
      if (a.hasOwnProperty(h)) {
        var g = a[h];
        var e = g.GetMethodName();
        if (e === "AddRecords" || e === "DeleteRecords" || e === "DeleteAllRecords") {
          var c = g.GetInputName() + "_Ctrl",
            d = $(f.find('[name="' + c + '"]')[0] || f.find("#" + c)[0]);
          switch (e) {
            case "AddRecords":
              b ? d.removeClass("siebui-invisible-el") : d.addClass("siebui-invisible-el");
              break;
            default:
              b ? d.addClass("siebui-invisible-el") : d.removeClass("siebui-invisible-el")
          }
        }
      }
    }
  }
};
