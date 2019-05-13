typeof SiebelAppFacade.IPRPhysicalRenderer == "undefined" && (SiebelJS.Namespace("SiebelAppFacade.IPRPhysicalRenderer"),
  define("siebel/iprphyrenderer", ["siebel/iprbasephyrenderer", "siebel/htmltmplmgr"], function () {
    return SiebelAppFacade.IPRPhysicalRenderer = function () {
      function F(e) {
        SiebelAppFacade.IPRPhysicalRenderer.superclass.constructor.call(this, e);
        var t = null;
        this.SetFirstControl = function (e) {
          t = e
        }
          ,
          this.GetFirstControl = function () {
            return t
          }
          ;
        var n = !1;
        this.SetIsGridBaseForm = function (e) {
          n = e
        }
          ,
          this.GetIsGridBaseForm = function () {
            return n
          }
          ,
          this._EndLife = function () {
            t = null
          }
      }
      function I(e) {
        var t = $("#s_" + this.GetPM().Get("GetFullId") + "_div");
        e ? t.addClass("siebui-commit-pending") : t.removeClass("siebui-commit-pending"),
          this.CacheState("CommitPending", !!e)
      }
      function attRenameControls() {
        SiebelApp.S_App.PluginBuilder.ResetPW(this)
      }
      function attUpdateCurrencyCalcInfo() {
        var n = this.GetPM()
          , r = SiebelApp.S_App.GetPopupPM();
        $("div[name='popup']").find("div[name=CurrencyCalc]").remove();
        var i = n.ExecuteMethod("GetCurrencyCalInfo")
          , s = {
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
          }
          , o = n.Get("GetActiveControl");
        if (!o) {
          var u = n.Get("GetControls");
          for (var a in u)
            if (u.hasOwnProperty(a) && u[a].GetInputName() === s.sourceField) {
              o = u[a];
              break
            }
        }
        var f = '<div name="CurrencyCalc" class="siebui-popup-currency">'
          , l = n.ExecuteMethod("GetFieldDataType", s.dateFieldName)
          , c = SiebelApp.S_App.LocaleObject.StringToFormatted(l, s.dateValue, s.dateformat);
        f += '<input type="hidden" autofocus="autofocus"/>',
          f += '<div id="' + s.pickId + '_cc" class="siebui-popup-input-row">' + '<span class="siebui-popup-label">' + s.pickName + "</span>" + '<input type="text" id="' + s.pickId + '" tabindex="100" aria-label="' + s.pickName + '" class="siebui-ctrl-pick" value="' + s.pickValue + '" ' + (s.CCodeReadOnly ? 'readonly="readonly" ' : "") + "></div>",
          s.hideExchDate || (f += '<div id="' + s.dateId + '_cc" class="siebui-popup-input-row">' + '<span class="siebui-popup-label">' + s.dateName + "</span>" + '<input type="text" id="' + s.dateId + '" tabindex="101" aria-label="' + s.dateName + '" class="siebui-ctrl-date" value="' + c + '" ' + (s.eDateReadOnly ? ' readonly="readonly" ' : "") + "></div>"),
          f += '<div id="' + s.calcId + '_cc" class="siebui-popup-input-row">' + '<span class="siebui-popup-label">' + s.calcName + "</span>" + '<input type="text" id="' + s.calcId + '" tabindex="102" aria-label="' + s.calcName + '" class="siebui-ctrl-calc" value="' + s.calcValue + '" ' + (s.AmountReadOnly ? 'readonly="readonly" ' : "") + "></div>",
          f += "</div>",
          r.Get("state") === t.get("POPUP_STATE_UNLOADED") && r.Setup(),
          r.SetProperty("isCurrencyOpen", !0),
          r.ExecuteMethod("OpenPopup", f, 0, 0, !1, !1, !0),
          r.SetProperty("isCurrencyOpen", !0),
          $("div[name=popup] ").find("div[name=CurrencyCalc]").parents("div.ui-dialog").children("div.ui-dialog-titlebar").styleHide().end().end().bind("keydown", {
            ctx: this,
            ctrl: o,
            popPM: r
          }, function (e) {
            if (e.keyCode === $.ui.keyCode.ESCAPE && e.data.popPM.Get("isCurrencyOpen")) {
              var t = e.data.ctx.GetPM()
                , n = t.Get("activeCurrencyCtrl");
              n !== "" && $("#" + n).triggerHandler("blur"),
                e.data.popPM.SetProperty("isCurrencyOpen", !1),
                t.ExecuteMethod("NotifyClosePopup"),
                e.data.ctx.SetFocusToControl(e.data.ctrl.GetName(), !0)
            }
            (e.keyCode === $.ui.keyCode.ESCAPE || e.keyCode === $.ui.keyCode.ENTER) && e.stopPropagation()
          }),
          $("div[name=CurrencyCalc]").parents("div.ui-dialog-content").removeClass("minWidthContainer"),
          SiebelAppFacade.ControlBuilder.Pick({
            target: "#" + s.pickId,
            className: "siebui-icon-pick",
            scope: this,
            control: o,
            click: function (e) {
              s.CCodeReadOnly || this.GetPM().ExecuteMethod("ShowPickPopup")
            }
          }),
          SiebelAppFacade.ControlBuilder.DatePick({
            target: "#" + s.dateId,
            className: "siebui-icon-date",
            control: o,
            scope: this,
            showPopup: !1,
            click: function (t, n) {
              if (!s.eDateReadOnly) {
                this.GetPM().SetProperty("isControlPopupOpen", !0),
                  $.data(this, "innerCtrlElem", {
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
                  getISOVal: function () {
                    return e.ToISOFormat($(this.target).val(), !1)
                  },
                  onClose: function (t, n) {
                    $(this).datetimepicker("destroy").focus(),
                      r.GetPM().SetProperty("isControlPopupOpen", !1),
                      $.removeData("innerCtrlElem");
                    if (e.IsISO(consts.get("SWE_CTRL_DATE_PICK"), t)) {
                      var i = SiebelApp.S_App.LocaleObject.GetStringFromDateTime(t, consts.get("ISO_DATE_FORMAT"), SiebelApp.S_App.LocaleObject.GetDateFormat());
                      $(this).val(i)
                    } else
                      $(this).val(t)
                  }
                })
              }
            }
          }),
          SiebelAppFacade.ControlBuilder.Calculator({
            target: "#" + s.calcId,
            className: "siebui-icon-calc",
            control: o,
            dc: SiebelApp.S_App.LocaleObject.GetDispCurrencyDecimal(),
            scope: this,
            click: function (e, n) {
              if (!this.GetPM().ExecuteMethod("CanUpdate", e.GetName()))
                return;
              this.GetPM().SetProperty("isControlPopupOpen", !0),
                $.data(this, "innerCtrlElem", {
                  calc: n
                }),
                this.SetControlValue(e, this.GetPM().ExecuteMethod("GetFieldValue", e));
              var r = this;
              SiebelAppFacade.DecisionManager.PauseVKeyboard($(n)),
                SiebelAppFacade.ControlBuilder.Calculator({
                  target: n,
                  className: "siebui-icon-calc",
                  control: e,
                  dc: SiebelApp.S_App.LocaleObject.GetDispCurrencyDecimal(),
                  show: !0,
                  beforeShow: function (e, t) {
                    var n = e
                      , r = $("#" + s.pickId).val();
                    if (r) {
                      var i, o = SiebelApp.S_App.LocaleObject.GetCurrency(r);
                      o = o ? o.m_sSymbol : null,
                        o && (n = n.replace(o, ""))
                    }
                    var u = SiebelApp.S_App.LocaleObject.GetDispCurrencySeparator()
                      , n = n.replace(new RegExp("\\" + u, "ig"), "").trim();
                    $(this).val(n)
                  },
                  close: function (n) {
                    var i = n.replace(/\[/g, "").replace(/\]/g, "");
                    r.SetControlValue(e, i),
                      $(this).parents("body").length && $(this).calculator("destroy").next("img").styleShow().end().focus(),
                      r.GetPM().SetProperty("isControlPopupOpen", !1),
                      $.removeData("innerCtrlElem"),
                      r.GetPM().OnControlEvent(t.get("PHYEVENT_CONTROL_FOCUS"), e),
                      SiebelAppFacade.DecisionManager.ResumeVKeyboard($(this))
                  }
                })
            }
          }),
          U.call(this, s.qtpInfo),
          $("#" + s.pickId).bind("focus", {
            ctx: this,
            ctrl: o
          }, function (e) {
            var n = e.data.ctx.GetPM();
            n.OnControlEvent(t.get("PHYEVENT_CONTROL_FOCUS"), e.data.ctrl, $(this).val()),
              n.SetProperty("activeCurrencyCtrl", s.pickId)
          }).bind("blur", {
            ctx: this,
            ctrl: o,
            ctrlType: s.pickName
          }, function (e) {
            var t = e.data.ctx.GetPM(), n;
            e.data.ctx.onBlurCurrency(e.data.ctrlType, $(this).val()),
              t.ExecuteMethod("CurrencyPostChanges"),
              n = t.ExecuteMethod("GetCurrencyCalInfo"),
              $("#" + n[6]).val(n[8]),
              t.SetProperty("activeCurrencyCtrl", "")
          }).bind("keydown", {
            ctx: this,
            ctrl: o,
            readOnly: s.CCodeReadOnly
          }, function (e) {
            e.data.ctx.HandleKeyEvents($(this), e, $(this).val())
          }),
          $("#" + s.calcId).bind("focus", {
            ctx: this,
            ctrl: o
          }, function (e) {
            var n = e.data.ctx.GetPM();
            n.OnControlEvent(t.get("PHYEVENT_CONTROL_FOCUS"), e.data.ctrl, $(this).val()),
              n.SetProperty("activeCurrencyCtrl", s.calcId)
          }).bind("blur", {
            ctx: this,
            ctrl: o
          }, function (e) {
            var n = e.data.ctx.GetPM();
            if (n.Get("isControlPopupOpen") === !1) {
              if (!!$(this).data("inLeaveField"))
                return;
              var r = $(this).val()
                , i = 0;
              while (isNaN(r.charAt(i)))
                i++;
              r = r.substring(i),
                n.OnControlEvent(t.get("PHYEVENT_CONTROL_BLUR"), e.data.ctrl, r),
                n.ExecuteMethod("CurrencyPostChanges");
              var s = n.ExecuteMethod("GetCurrencyCalInfo")
                , o = $("#" + s[6]);
              o.val(s[8])
            }
            n.SetProperty("activeCurrencyCtrl", "")
          }).bind("keydown", {
            ctx: this,
            ctrl: o,
            readOnly: s.AmountReadOnly
          }, function (e) {
            $.calculator._showingCalculator || e.data.ctx.HandleKeyEvents($(this), e, $(this).val())
          }),
          $("#" + s.dateId).bind("focus", {
            ctx: this,
            ctrl: o
          }, function (e) {
            e.data.ctx.GetPM().SetProperty("activeCurrencyCtrl", s.dateId)
          }).bind("blur", {
            ctx: this,
            ctrl: o,
            readOnly: s.eDateReadOnly
          }, function (t) {
            if (!t.data.readOnly) {
              var n = e.Trim($(this).val())
                , r = e.ToISOFormat(n, !1) || n;
              if (e.IsISO(consts.get("SWE_CTRL_DATE_PICK"), r)) {
                var i = SiebelApp.S_App.LocaleObject.GetStringFromDateTime(r, consts.get("ISO_DATE_FORMAT"), SiebelApp.S_App.LocaleObject.GetDateFormat());
                $(this).val(i)
              } else
                $(this).val(r)
            }
            return t.data.ctx.GetPM().SetProperty("activeCurrencyCtrl", ""),
              !1
          }).bind("keydown", {
            ctx: this,
            ctrl: o,
            readOnly: s.eDateReadOnly
          }, function (e) {
            e.data.ctx.HandleKeyEvents($(this), e, $(this).val())
          }),
          $("div.ui-widget-overlay").bind("click", {
            ctx: this,
            ctrl: o,
            popPM: r
          }, function (e) {
            if (e.data.popPM.Get("isCurrencyOpen")) {
              var t = e.data.ctx.GetPM()
                , n = t.Get("activeCurrencyCtrl");
              n !== "" && $("#" + n).triggerHandler("blur"),
                e.data.popPM.SetProperty("isCurrencyOpen", !1),
                t.ExecuteMethod("NotifyClosePopup"),
                e.data.ctx.SetFocusToControl(e.data.ctrl.GetName(), !0)
            }
          });
        var h = this;
        setTimeout(function () {
          var e = $("#" + o.GetInputName() + "_icon") || $("#" + o.GetInputName().replace("_0", "_" + n.Get("GetSelection")) + 0 / 0);
          e.length === 0 && typeof h.GetColumnHelper == "function" && (e = $('[name="' + h.GetColumnHelper().GetModifiedColumnName(o.GetName()) + '"]').next("img"),
            e.length === 0 && (e = e.end())),
            $("div[name=popup] ").find("div[name=CurrencyCalc]").parents("div.ui-dialog").position({
              my: "top",
              at: "bottom",
              collision: "flipfit",
              of: e
            }),
            setTimeout(function () {
              $("#" + s.pickId).focus()
            }, 5)
        }, 15)
      }
      function U(e) {
        if (e) {
          var t = e.GetChildCount();
          for (var n = 0; n < t; n++) {
            var r = e.GetChild(n)
              , i = r.GetProperty(consts.get("SWE_PROP_ID"));
            $("#" + i).attr({
              ot: r.GetProperty(consts.get("SWE_PROP_QTP_OT")),
              rn: r.GetProperty(consts.get("SWE_PROP_QTP_RN")),
              un: r.GetProperty(consts.get("SWE_PROP_QTP_UN"))
            })
          }
        }
      }
      function attUpdateAppletMessage() {
        var t = this.GetPM()
          , n = t.Get("GetQueryModePrompt", {
            getDiff: !0
          });
        if (n !== null) {
          var r = t.Get("GetId"), i, s = $("#" + r + "_msg"), o = "<div class='siebui-applet-msg'><span id=" + r + "_msg><span></div>";
          SiebelApp.S_App.IsRwd() && e.IsTrue(t.Get("IsObjResponsive")) ? i = $("#" + t.Get("GetRowCount")) : i = $("#s_" + r + "_rc"),
            s.length === 0 && (i.parent().prev("td").length ? i.parent().prev("td").append(o) : i.parent().append(o)),
            n ? (i.addClass("siebui-no-display"),
              $("#" + r + "_msg").html(n).parent(".siebui-applet-msg").removeClass("siebui-no-display")) : ($("#" + r + "_msg").parent(".siebui-applet-msg").addClass("siebui-no-display"),
                i.removeClass("siebui-no-display")),
            i = null,
            this.CacheState("GetQueryModePrompt", n)
        }
      }
      function W() {
        SiebelApp.S_App.uiStatus.Free();
        var e = SiebelApp.S_App.GetPopupPM();
        $("[name=cancelQuery]").remove();
        var n = $('<div name="cancelQuery"></div>')
          , r = ""
          , i = SiebelApp.S_App.LocaleObject
          , s = i.GetLocalString("IDS_CANCELQRY_INITIALTEXT")
          , o = i.GetLocalString("IDS_CANCELQRY_RESPONSETEXT")
          , u = i.GetLocalString("IDS_CANCELQRY_HEADERTEXT")
          , a = i.GetLocalString("IDS_CANCELQRY_BUTTONTEXT");
        r += '<div align ="center" id = "responseTxt_div"><p id="initTxt_CQ"><b>' + s + "</b></p></div><br />";
        var f = '<button id="cancelQry_Ctrl_CQ" class="appletButton" type="button" title="' + a + '" ' + ">" + a + "</button>";
        r += '<div align="center" id = "cancelbtn_div">' + f + "</div>",
          n.append(r),
          e.Get("state") === t.get("POPUP_STATE_UNLOADED") && e.Setup(),
          e.SetProperty("IsCancelQryPopupOpen", !0);
        if (e.Get("state") !== "visible")
          e.ExecuteMethod("SetPopupVisible", !0),
            e.SetProperty("content", n);
        else {
          SiebelApp.S_App.uiStatus.Free();
          var l = $("div[name=popup]")
            , c = l.parents(".ui-dialog").eq(0);
          l.children().styleHide(),
            l.addClass("minWidthContainer"),
            l.dialog("open"),
            l.append(n),
            c.data("origWidth", c.width()),
            c.css({
              width: "auto",
              height: "auto"
            }),
            e.Get("isPopupMVGAssoc") && (c.removeClass("siebui-mvg-dialog"),
              c.find(".ui-dialog-buttonset").styleHide()),
            l.css({
              "min-height": "auto"
            }),
            c.find(".ui-dialog-title").css({
              visibility: "hidden"
            }),
            l.dialog("option", "position", {
              my: "center",
              at: "center",
              of: window
            })
        }
        var h = $("#cancelQry_Ctrl_CQ");
        if (h.length !== 0) {
          var p = this;
          h.bind("click", function (n) {
            var r = '<p id="responseTxt_CQ"><b>' + o + "</b></p>";
            $("#initTxt_CQ").replaceWith(r),
              e.OnControlEvent(t.get("PHYEVENT_CANCEL_QRY_POPUP"), n)
          })
        }
      }
      function X() {
        var e = this.GetPM()
          , t = $("#s_" + e.Get("GetFullId") + "_div");
        e.ExecuteMethod("IsMethodDefault", "MaximizeApplet") && e.ExecuteMethod("CanInvokeMethod", "MaximizeApplet") === !1 ? t.removeClass("siebui-applet-minimize").addClass("siebui-applet-maximize") : e.ExecuteMethod("IsMethodDefault", "MinimizeApplet") && e.ExecuteMethod("CanInvokeMethod", "MinimizeApplet") === !1 ? t.removeClass("siebui-applet-maximize").addClass("siebui-applet-minimize") : t.removeClass("siebui-applet-maximize siebui-applet-minimize")
      }
      function V(e, t, n) {
        this.GetPM().Get("IsInQueryMode") && e.GetCaseSensitive() && (n == 1 && $(t).val() === "" ? ($(t).val(SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_CSQ_WATERMARK")),
          $(t).addClass("siebui-watermark-text")) : n == 0 && $(t).val() === SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_CSQ_WATERMARK") && ($(t).val(""),
            $(t).removeClass("siebui-watermark-text")))
      }
      function J(e) {
        if (e && e.length) {
          var t = "#SWEBottomHidden" + this.GetPM().Get("GetId")
            , n = e.find("[tabindex]").not(t);
          for (var r = 0, i = n.length; r < i; r++) {
            var s = n.eq(r);
            Number(s.attr("tabindex")) >= 0 && s.attr({
              "data-seq": s.attr("tabindex"),
              tabindex: "0"
            })
          }
          e.on("keydown", "input[type=file][data-seq], button[data-seq], input[type=button][data-seq],div[data-seq],span[data-seq],a[data-seq]", {
            ctx: this
          }, function (e) {
            st.call(e.data.ctx, e.target, null, e)
          }),
            e = n = null
        }
      }
      function K(e) {
        var t = arguments[1] ? arguments[1] : e.GetInputName();
        if ($("#" + t + "_mb").length > 0)
          return;
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
        return n.altKey && (r = tt.call(this, e, t, n)),
          r
      }
      function et(e, n, i) {
        var s = !1
          , u = this.GetPM();
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
        return (n.GetUIType() === d || n.GetUIType() == f && e.attr("autocomplete")) && this.GetUIWrapper(n).HandleKey(e, i),
          s ? s : u.OnControlEvent(t.get("PHYEVENT_ENTER_KEY_PRESS"), n)
      }
      function tt(e, n, r) {
        var i = this.GetPM()
          , s = i.Get("isControlPopupOpen");
        return i.OnControlEvent(t.get("PHYEVENT_ESCAPE_KEY_PRESS"), n),
          i.Get("isControlPopupOpen") !== s
      }
      function nt(e, t, n) {
        return e.attr("type") === "checkbox" ? !0 : !this.GetPM().ExecuteMethod("CanUpdate", t.GetName())
      }
      function rt(e, t, n) {
        return n.data.readOnly ? !1 : ($(e).nextAll("span[id$='_icon']").click(),
          !0)
      }
      function it(e, t, n) {
        if (t && t.GetUIType() == f && e.attr("autocomplete") && t.IsBoundedPick() && e.autocomplete("widget").not(":hidden").length > 0) {
          var r = e.autocomplete("widget").find(".ui-state-focus");
          r.length && e.val(r.text()),
            r = null
        }
      }
      function st(e, t, n) {
        if (n.keyCode === $.ui.keyCode.TAB) {
          ht.call(this, n, t),
            it.call(this, e, t, n);
          var r = $("#s_" + this.GetPM().Get("GetFullId") + "_div")
            , i = r.find("[data-seq]").not(":hidden,:disabled")
            , s = i.index($(e))
            , o = Number($(e).attr("data-seq"));
          if (s === -1 || n.shiftKey && s === 0)
            return;
          var u = null
            , a = n.shiftKey ? s - 1 : s + 1
            , f = n.shiftKey ? 0 : i.length
            , l = n.shiftKey ? -1 : 1
            , c = a;
          if (o == 0)
            for (; ;) {
              if (Number(i.eq(c).attr("data-seq")) === 0) {
                u = c;
                break
              }
              if (c === f)
                break;
              c += l
            }
          if (u === null) {
            var h = null, p = null, d = function (e, t) {
              return e > t
            }, v = function (e, t) {
              return e < t
            }, m = n.shiftKey ? v : d, g;
            for (c = 0,
              g = i.length; c < g; c++)
              if (c !== s) {
                var y = Number(i.eq(c).attr("data-seq"));
                if (!h && m(y, o) || h && m(y, o) && m(h, y))
                  h = y,
                    p = c
              }
            p && (u = p)
          }
          if (u !== null) {
            i.eq(u).focus(),
              n.preventDefault();
            var b = $(e).data("ui-autocomplete");
            b && b.menu.active && (b.menu.active = null)
          } else
            ut.call(this, n),
              n.preventDefault()
        }
      }
      function ot(e) {
        var t = $("#s_" + this.GetPM().Get("GetFullId") + "_div")
          , n = t.find("[data-seq]").not(":hidden,:disabled")
          , r = n.length
          , i = -1
          , s = -1;
        for (var o = r; o >= 0; o--) {
          var u = Number(n.eq(o).attr("data-seq"));
          i < u && (i = u,
            s = o)
        }
        n.eq(s).focus()
      }
      function ut(e) {
        var t = $(e.target)
          , n = "SWEBottomHidden" + this.GetPM().Get("GetId")
          , r = $("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, *[tabindex], *[contenteditable]").not(":hidden").add("a#" + n).not("[tabindex=-1]")
          , i = r.length;
        lastindex = r.index($("#" + n)),
          lastindex + 1 === i ? r.eq(0).focus() : r.eq(lastindex + 1).focus()
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
        var i = this.GetPM()
          , s = t.GetName()
          , o = t.GetFieldName()
          , u = i.Get("IsInQueryMode")
          , a = i.Get("IsPure")
          , f = i.ExecuteMethod("IsPrivateField", s);
        (!e.IsEmpty(o) || f || !a) && t.GetUIType() !== r && this.SetControlValue(t, i.ExecuteMethod("GetUIFieldValue", t, n), n)
      }
      function lt(t, n, r, i) {
        var s = i.GetScriptProperty("Visible"), o = n.attr("name"), u, a = n.nextAll("div#" + o + "_IPEField");
        t ? (u = a.text(),
          a.styleHide(),
          e.DecideVisibility(n.nextAll("img#" + o + "_icon").add(n), s),
          n.val(u)) : (u = n.val(),
            e.DecideVisibility(a, s),
            n.nextAll("img#" + o + "_icon").styleHide(),
            n.styleHide(),
            a.children().val(u)),
          r !== !0 && n.focus(),
          a = null
      }
      function ct(e) {
        var t = this.GetPM(), n = t.Get("GetControls"), r;
        for (var i in n)
          if (n[i].GetInputName() === e) {
            r = n[i];
            break
          }
        return n = null,
          r
      }
      function ht(e, t) {
        if (this.GetPM()) {
          var n = this.GetPM(), r, i = $("#s_" + this.GetPM().Get("GetFullId") + "_div").find("div[id$='_IPEField']").filter(":hidden"), s = i.prevAll("input.siebui-input-popup").eq(0);
          if (i.length && e && e.keyCode === $.ui.keyCode.TAB || s.length && document.activeElement !== s[0])
            r = SiebelApp.S_App.LookupStringCache(s.GetName()),
              t = t || ct.call(this, r),
              lt.call(this, !1, s, !0, t)
        }
      }
      function pt(e, t) {
        var n = $("#s_" + this.GetPM().Get("GetFullId") + "_div");
        e ? n.addClass("Selected siebui-active").removeClass("NotSelected siebui-nonactive") : n.removeClass("Selected siebui-active").addClass("NotSelected siebui-nonactive")
      }
      function dt(e) {
        e = typeof e == "undefined" ? !1 : e;
        var t = $("#s_" + this.GetPM().Get("GetFullId") + "_div")
          , n = null;
        e ? t.addClass("siebui-active-el").data("accessible-el", !0) : (n = t.find("#a_" + this.GetPM().Get("GetId")),
          n.length && t.data("accessible-el") && t.removeData("accessible-el").removeAttr("tabindex"),
          t = n.length ? n : t),
          t.attr("tabindex", 0).focus(),
          t = n = null
      }
      function vt(e) {
        return typeof e.GetInputName == "function"
      }
      function attUpdateConditionals() {
        var n = this.GetPM(), r = n.Get("GetControls"), i = n.Get("IsInQueryMode"), s = null, o, u, a = !0, f = SiebelApp.S_App.IsRwd() && e.IsTrue(n.Get("IsObjResponsive"));
        n.ExecuteMethod("SetUpdateConditionals", !1);
        for (var l in r)
          if (r.hasOwnProperty(l)) {
            o = r[l],
              u = o.GetMethodName();
            if (l === t.get("SWE_POPUP_QUERY_COMBO_BOX") || l === t.get("SWE_POPUP_QUERY_SEARCH_SPEC") || l === t.get("SWE_POPUP_QUERY_EXECUTE") || l === t.get("SWE_QUERY_COMBO_BOX") || l === t.get("SWE_QUERY_SEARCH_SPEC")) {
              this.GetUIWrapper(o).SetState(consts.get("ENABLE"), !i);
              continue
            }
            if (o.GetUIType() && o.GetUIType()[0] == "J" || f && e.IndexOf(["AddRecords", "DeleteRecords", "DeleteAllRecords"], u) !== -1 && n.ExecuteMethod("CanInvokeMethod", u))
              continue;
            e.IndexOf(["UndoQuery", "ExecuteQuery", "ShowQueryAssistant"], u) !== -1 ? a = i : e.IndexOf(["NewQuery", "ToggleListRowCount"], u) !== -1 ? a = !i : e.IndexOf(["Find", "AddRecords", "AddAllRecords", "DeleteRecords", "DeleteAllRecords"], u) !== -1 ? a = !0 : a = u ? !i || n.ExecuteMethod("CanInvokeMethod", u) : !0,
              this.GetUIWrapper(o).SetState(consts.get("SHOW"), a, 0)
          }
      }
      function gt() {
        var e = this.GetPM().Get("GetControls");
        for (var t in e)
          e.hasOwnProperty(t) && this.GetUIWrapper(e[t]).BeginQuery()
      }
      function yt() {
        var e = this.GetPM().Get("GetControls");
        for (var t in e)
          e.hasOwnProperty(t) && this.GetUIWrapper(e[t]).EndQuery()
      }
      function bt() {
        var t = this.GetPM()
          , n = t.Get("GetRowCounter", {
            getDiff: !0
          });
        if (n) {
          var r;
          SiebelApp.S_App.IsRwd() && e.IsTrue(t.Get("IsObjResponsive")) ? r = $("#" + t.Get("GetRowCount")) : r = $("#s_" + t.Get("GetId") + "_rc"),
            r.addClass("siebui-row-counter").text(n),
            e.IsTrue(SiebelApp.S_App.IsAutoOn()) && r.attr(consts.get("SWE_PROP_QTP_OT"), consts.get("SWE_CTRL_LABEL")).attr(consts.get("SWE_PROP_QTP_RN"), consts.get("SWE_ROW_COUNTER_NO_RECORDS")).attr(consts.get("SWE_PROP_QTP_UN"), n),
            this.CacheState("GetRowCounter", {
              stateValue: n
            })
        }
      }
      var e = SiebelJS.Dependency("SiebelApp.Utils")
        , t = SiebelJS.Dependency("SiebelApp.Constants")
        , n = SiebelJS.Dependency("SiebelAppFacade.HTMLTemplateManager")
        , r = t.get("SWE_PST_BUTTON_CTRL")
        , i = t.get("SWE_CTRL_DETAIL")
        , s = t.get("SWE_CTRL_MVG")
        , o = t.get("SWE_CTRL_PICK")
        , u = t.get("SWE_CTRL_RADIO")
        , a = t.get("SWE_CTRL_CHECKBOX")
        , f = t.get("SWE_CTRL_COMBOBOX")
        , l = t.get("SWE_CTRL_CHART")
        , c = t.get("SWE_CTRL_PLAINTEXT")
        , h = t.get("SWE_CTRL_DATE_TIME_PICK")
        , p = t.get("SWE_CTRL_DATE_PICK")
        , d = t.get("SWE_CTRL_CALC")
        , v = t.get("SWE_CTRL_DATE_TZ_PICK")
        , m = t.get("SWE_CTRL_CURRENCY_CALC")
        , g = t.get("SWE_CTRL_TEXT")
        , y = t.get("SWE_CTRL_TEXTAREA")
        , b = t.get("SWE_CTRL_PWD")
        , w = t.get("SWE_CTRL_RTCEMBEDDED")
        , E = t.get("SWE_CTRL_RTCEMBEDDEDTEXTONLY")
        , S = t.get("SWE_CTRL_RTCEMBEDDEDLINKFIELD")
        , x = t.get("SWE_CTRL_RTCPOPUP")
        , T = t.get("SWE_CTRL_RTCIO")
        , N = t.get("SWE_CTRL_INKDATA")
        , C = t.get("SWE_CTRL_LINK")
        , k = t.get("SWE_CTRL_LABEL")
        , L = t.get("SWE_CTRL_URL")
        , A = t.get("SWE_CTRL_MAILTO")
        , O = /(About Record Applet\w*)|(About SRF Applet\w*)|(About Siebel Applet\w*)|(About View Applet\w*)|(Record Count Applet\w*)|(Technical Support Applet\w*)/
        , M = t.get("SWE_CTRL_EFFDAT")
        , _ = t.get("SWE_CTRL_IMAGECONTROL")
        , D = t.get("SWE_CTRL_FILE")
        , P = t.get("SWE_PST_COL")
        , H = t.get("SWE_PST_APPLET_MODE_QUERY")
        , B = t.get("SWE_PST_APPLET_MODE_EDIT")
        , j = t.get("SWE_PST_APPLET_MODE_NEW");
      return SiebelJS.Extend(F, SiebelAppFacade.IPRBasePR),
        F.prototype.Init = function () {
          SiebelAppFacade.IPRPhysicalRenderer.superclass.Init.call(this),
            // this.AttachPMBinding("RemoveControls", attRenameControls),
            // this.AttachPMBinding("UpdateQuickPickInfo", this.UpdatePick),
            // this.AttachPMBinding("UpdateAppletMessage", attUpdateAppletMessage),
            // this.AttachPMBinding("UpdateCurrencyCalcInfo", attUpdateCurrencyCalcInfo),
            this.AttachPMBinding("UpdateConditionals", attUpdateConditionals),
            this.AttachPMBinding("ProcessCancelQueryPopup", W),
            this.AttachPMBinding("FocusOnApplet", dt),
            this.AttachPMBinding("HandleCtrlDefChange", this.RefreshControl),
            this.AttachPMBinding("SetCanInvokeState", X),
            this.AttachPMBinding("BeginQueryState", gt),
            this.AttachPMBinding("EndQueryState", yt),
            this.AttachPMBinding("UpdateRowCounter", bt),
            this.AttachPMBinding("ShowPopup", this.ShowPopup),
            this.AttachPMBinding("isControlPopupOpen", at),
            this.AttachPMBinding("MaskLeaveField", this.MaskLeaveField),
            this.AttachPMBinding("ShowSelection", this.ShowSelection),
            this.AttachPMBinding("ResetAppletState", this.ResetRendererState),
            this.AttachPMBinding("RefreshData", this.BindData),
            this.AttachPMBinding("FieldChange", this.SetControlValue),
            this.AttachPMBinding("UpdateStateChange", this.UpdateUIControls),
            this.AttachPMBinding("InvokeStateChange", this.UpdateUIButtons),
            this.AttachPMBinding("GetPhysicalControlValue", this.GetPhysicalControlValue),
            this.AttachPMBinding("SetFocusToCtrl", this.SetFocusToControl),
            this.AttachPMBinding("FocusFirstControl", this.FocusFirstControl),
            this.AttachPMBinding("SetHighlightState", pt),
            this.AttachPMBinding("UpdateUI", function () {
              this.GetPM().Get("UpdateUI") && this.ShowSelection()
            }),
            this.AttachPMBinding("OnCommitStateChange", I);
          var e = SiebelApp.S_App.PluginBuilder.GetHoByName("ResponsiveFieldHO");
          e && e.SetUp(this, $("#s_" + this.GetPM().Get("GetFullId") + "_div"))
        }
        ,
        F.prototype.RefreshControl = function (e) {
          var t = $("#" + e.GetInputName())[0] || $("[name=" + e.GetInputName() + "]");
          t.length > 0 && (t.nextAll().remove(),
            this.GetUIWrapper(e, !0),
            this.ShowUIControl(e),
            this.BindControlEvents(e),
            this.EnableControl(e, this.GetPM().ExecuteMethod("CanUpdate", e.GetName())),
            ft.call(this, e))
        }
        ,
        F.prototype.EndLife = function () {
          var e = this.GetPM()
            , t = e.Get("GetControls");
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
          $("#s_" + e.Get("GetFullId") + "_div").off("click click.drilldown"),
            this._EndLife(),
            SiebelAppFacade.IPRPhysicalRenderer.superclass.EndLife.call(this)
        }
        ,
        F.prototype.ResetRendererState = function () { }
        ,
        F.prototype.UpdatePick = function () {
          var e = arguments[arguments.length - 1]
            , t = this.GetPM().Get("GetActiveControl");
          if (!t)
            return;
          this.GetUIWrapper(t).UpdatePickList(e),
            delete this.inProgress
        }
        ,
        F.prototype.onBlurCurrency = function (e, t) {
          var n = this.GetPM().ExecuteMethod("GetCurrencyCalInfo"), r;
          t = t.toUpperCase();
          if (e === "Currency Code") {
            r = n[0];
            var i = SiebelApp.S_App.LocaleObject.GetCurrency(t);
            i ? $("#" + r).val(t) : $("#" + r).val(n[2])
          }
        }
        ,
        F.prototype.ShowUI = function () {
          SiebelAppFacade.IPRPhysicalRenderer.superclass.ShowUI.call(this);
          var n = this.GetPM(), r = n.Get(t.get("SWE_VIS_MODE_LIST")), i = n.Get(t.get("SWE_LDC_VIS_MODE_LIST")), s = r ? r.length : 0, o = i ? i.length : 0, u = n.Get("GetFullId"), a = n.Get("GetPlaceholder"), f, l, c = n.Get(t.get("SWE_VIS_MODE_DEFAULT")), h = "<div align='center' id = 's_div_" + a + "_VisualModes" + "' " + "class = " + "'" + "siebui-viz-buttonbar AppletButtons" + "'" + ">";
          n.AddProperty("IsTaggedApplet", O.test(n.Get("GetName"))),
            X.call(this),
            this.CacheState("Init");
          var p = $("#s_" + u + "_div");
          p.addClass(" siebui-applet siebui-form "),
            p.find(".AppletTitle").eq(0).removeClass("AppletTitle").addClass(" siebui-applet-title "),
            p.find("table[data-siebel-form-table='true']").length > 0 && (this.SetIsGridBaseForm(!0),
              n.SetProperty("GridFormContent", !0)),
            e.IsTrue(SiebelApp.S_App.GetAccessibilityEnhanced()) && p.attr({
              role: "region",
              title: n.Get("LandMarkTitle")
            });
          var d = n.Get("GetControls");
          for (var v in d)
            d.hasOwnProperty(v) && this.ShowUIControl(d[v]);
          d = null,
            this.InjectAppletQTPInfo(p),
            this.ShowCollapseExpand();
          if (s > 0 && o > 0 && s === o) {
            var m = n.Get("GetAppletLabel");
            m !== "" && (m += ":");
            for (var g = 0; g < s; g++) {
              var y = r[g]
                , b = i[g]
                , w = m + b;
              y !== c ? l = "siebui-ctrl-btn appletButton" : l = "siebui-ctrl-btn appletButtonDis",
                $("#" + a + "_" + y + "_btn").length === 0 && (f = '<button id="' + a + "_" + y + "_btn" + '" ' + "class='" + l + "' " + "aria-label='" + w + "' " + (l === "siebui-ctrl-btn appletButton" ? " " : ' disabled="disabled" ') + 'type="button" ' + 'title="' + w + '" ',
                  e.IsTrue(SiebelApp.S_App.IsAutoOn()) && (f += consts.get("SWE_PROP_QTP_OT") + "='" + consts.get("SWE_PST_BUTTON_CTRL") + "' " + consts.get("SWE_PROP_QTP_RN") + "='" + y + "' " + consts.get("SWE_PROP_QTP_UN") + "='" + b + "'"),
                  f += ">" + b + "</button>",
                  h += '<div align="center" id = "s_div_' + a + "_" + y + '" ' + "class='" + "siebui-viz-button-" + y.toLowerCase() + "' " + ">" + f + "</div>")
            }
            if (f) {
              h += "</div>";
              var E = p.find(".siebui-vismode-buttonbar").eq(0);
              if (E.length > 0)
                E.empty(),
                  E.append(h);
              else {
                var S = SiebelApp.S_App.IsRwd() ? $("#" + n.Get("GetRowCount")) : $("#s_" + n.Get("GetId") + "_rc");
                S.parent().prev("td").length ? S.parent().prev("td").append(h) : S.parent().prepend(h),
                  S = null
              }
              E = null
            }
          }
          this.GetIsGridBaseForm() === !0 ? J.call(this, p) : $("#SWEBottomHidden" + n.Get("GetId")).attr("tabindex", "-1"),
            SiebelAppFacade.LegacyCssSupport.addLegacyClass($("#" + u)),
            p.find("span >img:first-child").each(function () {
              var e = $(this)
                , t = e.attr("alt") || e.attr("title");
              t ? e.parent().attr("title", t) : !1
            }),
            p = null,
            n.SetProperty("ShowUI", !0)
        }
        ,
        F.prototype.ShowUIControl = function (t) {
          var n = this.GetPM()
            , r = n.ExecuteMethod("IsRequired", t.GetName())
            , i = t.GetUIType()
            , s = !1
            , o = null;
          o = this.GetUIWrapper(t),
            o.ShowUI(),
            n.Get("IsInQueryMode") && o.BeginQuery(),
            s = i === L || i === E || o.constructor.name === "BasePW";
          var u;
          if (s || r) {
            var a = arguments[1] ? arguments[1] : t.GetInputName()
              , f = this.GetIsGridBaseForm() === !0 ? t.GetSeq() : 0;
            u = $('[name="' + a + '"]')[0] || $("#" + a)[0];
            if (!u)
              return;
            u = $(u)
          }
          if (r) {
            var l = u.attr("aria-labelledby") || "";
            if (l) {
              l = l.split(" ", 1);
              var c = SiebelApp.S_App.GetRequiredIndicator()
                , h = l[0].replace("/", "\\/")
                , p = n.Get("GetFullId");
              $("#" + p).children().find("#" + h).parent().append(c),
                u.attr("aria-required", "true"),
                c = h = p = null
            }
            l = null
          }
          switch (t.GetUIType()) {
            case L:
              t.GetName() === "BookmarkImage" && n.GetPMName() === "Bookmark URL Popup Applet (SWE)_PM" && (u.remove(),
                $($("table.FormSection")[0]).remove());
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
                m.length > 0 && (m.height(t.GetHeight()).width(t.GetWidth()).attr("name", t.GetInputName()).attr("aria-labelledby", t.GetFieldName().replace(/\s+/g, "") + "_Label").attr("aria-label", t.GetDisplayName()).attr("maxlength", t.GetMaxSize() || 256).attr("tabindex", f).addClass("siebui-align-" + t.GetJustification()),
                  this.InjectAppletQTPInfo(m));
                break
              }
              ;
            default:
              o.constructor.name === "BasePW" && (u.attr("maxlength", t.GetMaxSize() || 256).attr("tabindex", f).addClass("siebui-align-" + t.GetJustification()),
                this.InjectQTPInfo(u, t))
          }
          o = u = null
        }
        ,
        F.prototype.ShowCollapseExpand = function () {
          var t = this.GetPM()
            , n = t.Get("defaultAppletDisplayMode");
          if (n) {
            var r = t.Get("GetAppletLabel");
            r !== "" && (r += ":");
            var i, s = SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_APPLET_EXPAND"), o = r + s, u = e.IsTrue(SiebelApp.S_App.IsAutoOn()), a = "#s_" + t.Get("GetFullId") + "_div";
            i = "<span class='siebui-button-secondary siebui-btn-icon-expanded'><a href='javascript:void()' role='link' tabindex='0' aria-label='" + o + "' ",
              u && (i += consts.get("SWE_PROP_QTP_OT") + "='" + consts.get("SWE_CTRL_LINK") + "' " + consts.get("SWE_PROP_QTP_RN") + "='" + s + "' " + consts.get("SWE_PROP_QTP_UN") + "='" + s + "'"),
              i += "></a></span>",
              o = "",
              s = SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_APPLET_COLLAPSE"),
              o = r + s,
              i += "<span class='siebui-button-secondary siebui-btn-icon-collapsed'><a href='javascript:void()' role='link' tabindex='0' aria-label='" + o + "' ",
              u && (i += consts.get("SWE_PROP_QTP_OT") + "='" + consts.get("SWE_CTRL_LINK") + "' " + consts.get("SWE_PROP_QTP_RN") + "='" + s + "' " + consts.get("SWE_PROP_QTP_UN") + "='" + s + "'"),
              i += "></a></span>",
              $(a).find(".siebui-applet-container.siebui-collapsible").prepend(i).find(".siebui-btn-icon-" + n).styleHide(),
              n === "collapsed" && $(a).find(".siebui-applet-content.siebui-collapsible").styleHide()
          }
        }
        ,
        F.prototype.BindEvents = function (n, r) {
          SiebelAppFacade.IPRPhysicalRenderer.superclass.BindEvents.call(this);
          var i = this.GetPM()
            , s = i.Get(t.get("SWE_VIS_MODE_LIST"))
            , o = s ? s.length : 0
            , u = i.Get("GetFullId")
            , a = ""
            , f = i.Get("GetPlaceholder")
            , l = SiebelApp.S_App.IsRwd() ? SiebelApp.S_App.ViewTarget() : "_sweview";
          if (o > 0)
            for (var c = 0; c < o; c++)
              $("#" + f + "_" + s[c] + "_btn").length > 0 && $("#" + f + "_" + s[c] + "_btn").bind("click", {
                ctx: this,
                visMode: s[c]
              }, function (e) {
                var n = e.data.ctx
                  , r = n.GetPM()
                  , i = CCFMiscUtil_CreatePropSet()
                  , s = {};
                s.async = !0;
                var o = this;
                s.cb = function () {
                  var t = Array.prototype.slice.call(arguments)
                    , n = t ? t[t.length - 1] : "";
                  n === !0 && (r.SetProperty("DefaultVisualMode", e.data.visMode),
                    $(o).attr("disabled", "disabled"),
                    $(o).removeClass("siebui-ctrl-btn appletButton siebui-mode-button-enable"),
                    $(o).addClass("siebui-ctrl-btn appletButtonDis siebui-mode-button-disable"))
                }
                  ,
                  i.SetProperty("VisualMode", e.data.visMode),
                  r.OnControlEvent(t.get("PHYEVENT_INVOKE_CONTROL"), r.Get(t.get("SWE_VIS_MODE_FLIP_METHOD")), i, s)
              });
          if (this.constructor == F) {
            var h = $("#SWEBottomHidden" + i.Get("GetId"));
            h.bind("focus", {
              ctx: this
            }, function (e) {
              ot.call(e.data.ctx, e)
            }),
              h = null
          }
          var p = $("#s_" + i.Get("GetFullId") + "_div");
          p.on("click", ".siebui-applet-header.siebui-collapsible .siebui-button-secondary", {
            ctx: this
          }, function (e) {
            $(this).parents(".siebui-applet-header.siebui-collapsible").find(".siebui-button-secondary").toggle().parents(".siebui-applet:first").find(".siebui-applet-content.siebui-collapsible").slideToggle("fast", "linear"),
              (e.data.ctx.resize || $.noop).call(e.data.ctx)
          }),
            p.bind("click", {
              ctx: this
            }, function (e) {
              if (SiebelApp.S_App.GetPopupPM().Get("state") === consts.get("POPUP_STATE_VISIBLE") && $(e.currentTarget).find("div[id^='s_S_A'][id$='_div']").find($(e.target)).length > 0)
                return;
              var n = e.data.ctx;
              n.IsValidClick(e.srcElement || e.target) && n && n.GetPM() && (n.GetPM().Get("IsActive") || n.GetPM().OnControlEvent(t.get("PHYEVENT_APPLET_FOCUS")),
                ht.call(n, e))
            }),
            $("#" + l + " #s_" + i.Get("GetFullId") + "_div").on("click", ".siebui-task-assist-list-item", {
              ctx: this
            }, function (e) {
              var t = this.id
                , n = SiebelApp.S_App.getExtObject("TaskAssistant");
              if (n)
                n.ExecuteMethod("LaunchTaskFromView", t);
              else {
                var r = SiebelApp.S_App.GetService(consts.get("NAME_TASKASSISTUISVC"));
                if (r) {
                  var i = CCFMiscUtil_CreatePropSet();
                  i.SetProperty("Task Id", t),
                    r.InvokeMethod("LaunchTaskFromView", i)
                }
              }
            }),
            p.on("click.drilldown", ".siebui-ctrl-drilldown", {
              ctx: this
            }, function (e) {
              var n = e.data.ctx.GetPM().Get("GetControls")
                , r = this.id.indexOf("_mb")
                , i = this.id.substring(0, r);
              for (var s in n)
                if (n.hasOwnProperty(s)) {
                  var o = n[s];
                  o.GetInputName() === i && e.data.ctx.GetPM().OnControlEvent(t.get("PHYEVENT_DRILLDOWN_FORM"), o)
                }
            });
          var d = i.ExecuteMethod("GetControlId");
          d && (d = SiebelApp.S_App.IsRwd() && e.IsTrue(i.Get("IsObjResponsive")) ? "#" + d : "[name=" + d + "]",
            $(d).bind("change", {
              ctx: this
            }, function (e) {
              e.data.ctx.GetPM().OnControlEvent(t.get("PHYEVENT_INVOKE_TOGGLE"), $(this).val())
            })),
            p = null;
          if (r === !0)
            return;
          var v = n || i.Get("GetControls");
          for (var m in v)
            v.hasOwnProperty(m) && this.BindControlEvents(v[m]);
          v = null
        }
        ,
        F.prototype.InvokeControlMethod = function (e) {
          SiebelApp.S_App.uiStatus.Busy({});
          var n = {};
          n.async = !0,
            n.cb = function () {
              var e = Array.prototype.slice.call(arguments)
                , n = e ? e[e.length - 1] : "";
              n !== t.get("SWE_RPC_PROP_NEW_LAYOUT") && n !== t.get("SWE_RPC_PROP_REFRESH_LAYOUT") && n !== t.get("SWE_RPC_PROP_NEW_PAGE") && SiebelApp.S_App.uiStatus.Free()
            }
            ;
          var r = e.GetMethodPropSet()
            , i = r.Clone();
          this.GetPM().OnControlEvent(t.get("PHYEVENT_INVOKE_CONTROL"), e.GetMethodName(), i, n)
        }
        ,
        F.prototype.IsValidClick = function (t) {
          return e.IndexOf(["input", "textarea", "button", "a", "img", "select"], t.tagName.toLowerCase()) === -1 || (t.type || "").toLowerCase() === "file"
        }
        ,
        F.prototype.FormatDDInQueryMode = function (e, t) {
          if (this.GetPM().Get("IsInQueryMode")) {
            var n = this.GetPM().Get("DDUserSelected");
            n && t && t.charAt(0) !== '"' && t.charAt(t.length - 1) !== '"' && n.ctrl === e && n.value === t && (t = '"' + t + '"',
              this.GetPM().SetProperty("DDUserSelected", undefined))
          }
          return t
        }
        ,
        F.prototype.BindControlEvents = function (n) {
          switch (n.GetUIType()) {
            case r:
              if (n.GetMethodName() === "ClearSignature")
                break;
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
          var c = $("[name=" + n.GetInputName() + "]")
            , S = this.GetPM();
          if (c.length === 0 && n.GetControlType() === P && e.IndexOf([H, B, j], S.Get("GetMode")) !== -1) {
            var x = n.GetSpanPrefix() + "0";
            c = $("[name=" + x + "]")
          }
          if (c.length === 0 && $("#" + n.GetInputName()).length === 0 && $("#" + (n.GetInputName() + "_Ctrl")).length === 0)
            return;
          switch (n.GetUIType()) {
            case r:
              n.GetMethodName() === "ClearSignature" && $("#" + (n.GetInputName() + "_Ctrl")).bind("click", {
                ctx: this,
                ctrl: n
              }, function (e) {
                var t = e.data.ctx.GetPM().Get("GetControls");
                for (var n in t)
                  if (t.hasOwnProperty(n) && t[n].GetUIType() === "JInkData") {
                    var r = t[n].GetInputName();
                    $("#siebui-ctrl" + r + "-clearButton").trigger("click"),
                      $("#" + r).attr({
                        value: ""
                      }),
                      $($("#sign_" + r).find("canvas")).trigger("mouseup")
                  }
              });
              break;
            case E:
              var T = c.siblings(".siebui-email-rtc-stripbtn").find(".siebui-email-rtc-stripbtn-link");
              T.length > 0 && T.bind("click", function () {
                var e = SiebelApp.S_App.LocaleObject.GetLocalString("RTCStripHtmlConfirm")
                  , t = confirm(e);
                if (t == 1) {
                  var r = $("textarea[name='" + n.GetInputName() + "']");
                  r.val(SiebelApp.Utils.stripOUIHTMLTag(r.val())),
                    r.focus()
                }
              });
            default:
              c.bind("keydown", {
                ctx: this,
                ctrl: n
              }, function (e) {
                var t = $(this).is("input,select,textarea") ? $(this).val() : $(this).text() ? $(this).text().trim() : "";
                return e.data.ctx.HandleKeyEvents($(this), e, t)
              }),
                c.bind("blur", {
                  ctx: this,
                  ctrl: n
                }, function (e) {
                  var n = e.data.ctx
                    , r = n.GetPM()
                    , i = e.data.ctrl
                    , s = $(this).is("input,select,textarea") ? $(this).val() : $(this).text() ? $(this).text().trim() : ""
                    , o = r.ExecuteMethod("CanUpdate", i.GetName()) ? s : r.ExecuteMethod("GetUIFieldValue", i, r.Get("GetSelection"));
                  V.call(n, i, this, !1);
                  var u = r.OnControlEvent(t.get("PHYEVENT_CONTROL_BLUR"), i, o);
                  V.call(n, i, this, !0)
                }),
                c.bind("focus", {
                  ctx: this,
                  ctrl: n
                }, function (e) {
                  V.call(e.data.ctx, e.data.ctrl, this, !1);
                  var n = $(this).is("input,select,textarea") ? $(this).val() : $(this).text() ? $(this).text().trim() : "";
                  e.data.ctx.GetPM().OnControlEvent(t.get("PHYEVENT_CONTROL_FOCUS"), e.data.ctrl, n)
                })
          }
          c = null
        }
        ,
        F.prototype.HandleKeyEvents = function (e, n, r) {
          var i = !1
            , s = this.GetPM();
          if (e && e.length === 1 && n) {
            var o = n.data.ctrl;
            if (o)
              switch (n.which) {
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
                  i = nt.call(this, e, o, n),
                    i && n.preventDefault();
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
        }
        ,
        F.prototype.BindData = function () {
          SiebelAppFacade.IPRPhysicalRenderer.superclass.BindData.call(this),
            this.ShowSelection()
        }
        ,
        F.prototype.ShowSelection = function (e, n) {
          n = arguments && arguments.length ? arguments[1] : null,
            e = n ? undefined : e;
          if (this.inProgress || e === !0)
            return !1;
          var r = this.GetPM(), i = r.Get("FocusCtrlOnNL"), s = [t.get("SWE_QUERY_COMBO_BOX"), t.get("SWE_QUERY_SEARCH_SPEC"), t.get("SWE_POPUP_QUERY_COMBO_BOX"), t.get("SWE_POPUP_QUERY_SEARCH_SPEC")], o = s.length, u, a, f;
          for (var l = 0; l < o; l++)
            a = s[l],
              u = r.ExecuteMethod("GetControl", a),
              u && (f = $("[name='" + u.GetInputName() + "']").val(),
                f && r.ExecuteMethod("LeaveField", u, f, !0));
          var c = r.Get("GetControls", {
            getDiff: !0,
            stateName: t.get("CTRLVALUE"),
            index: e,
            CtrlMap: n
          }), h = [], p;
          for (var d in c)
            c.hasOwnProperty(d) && (p = this.GetUIWrapper(c[d]),
              p && (p.SetElementCaching(!0),
                h.push(p)),
              ft.call(this, c[d], e));
          this.UpdateUIControls(e, n),
            i && (r.Get("GetDefaultFocusOnNew") ? r.ExecuteMethod("SetFocusToCtrl", !0, !0) : r.ExecuteMethod("FocusFirstControl"),
              r.SetProperty("FocusCtrlOnNL", !1));
          for (var l = 0, v = h.length; l < v; l++)
            h[l].SetElementCaching(!1)
        }
        ,
        F.prototype.MaskLeaveField = function (e, t) {
          if (e) {
            var n = this.GetUIWrapper(e);
            if (n) {
              var r = n.GetEl(this.GetPM().Get("GetSelection"));
              r && r.length && (t ? r.data("inLeaveField", "true") : r.removeData("inLeaveField"))
            }
          }
        }
        ,
        F.prototype.IconMapFormatter = function (t, n, r) {
          var i = ""
            , s = SiebelApp.S_App.GetIconMap()
            , o = s[SiebelApp.S_App.LookupStringCache(t.GetIconMap())];
          if (o) {
            var u = o.length;
            for (var a = 0; a < u; a++) {
              var f = o[a]
                , l = $(f.iconImage)
                , c = t.GetDisplayName();
              if (c) {
                var h = l.attr("alt");
                l.attr("alt", h ? c + ":" + h : h),
                  h = l.attr("title"),
                  l.attr("title", h ? c + ":" + h : h),
                  l = l[0].outerHTML
              } else
                l = f.iconImage;
              if (!e.IsEmpty(n) && f.iconName == n)
                return l;
              f.iconName == "Default" && (i = l)
            }
            if (!e.IsEmpty(i))
              return i
          }
          return ""
        }
        ,
        F.prototype.ControlHtmlFormatter = function (t, n, r, i, s, o) {
          var u = t.next("." + n)
            , a = o.GetScriptProperty("Visible");
          r ? (u.length === 1 ? u.html(r) : t.after("<span class='" + n + "'>" + r + "</span>"),
            e.DecideVisibility(u, a)) : u.styleHide(),
            i || !i && e.IsEmpty(s) ? e.DecideVisibility(t.val(s), a) : t.styleHide()
        }
        ,
        F.prototype.SetControlValue = function (t, n, r) {
          var i = this.GetPM()
            , s = r === undefined || r === null ? i.Get("GetSelection") : r
            , o = !1;
          switch (t.GetUIType()) {
            case L:
            case l:
            case E:
              break;
            default:
              this.GetUIWrapper(t).SetValue(n, s),
                o = !0
          }
          if (!o) {
            var u = r ? r : 0
              , a = $("#" + t.GetInputName())[u] || $("[name=" + t.GetInputName() + "]")[u];
            a || (o = !0);
            if (!o) {
              a = $(a);
              switch (t.GetUIType()) {
                case L:
                  if (t.GetName() === "BookmarkURL" && i.GetPMName() === "Bookmark URL Popup Applet (SWE)_PM")
                    var f = a.replaceWith('<textarea name="' + t.GetInputName() + '" class="siebui-bookmark-textarea" readonly="readonly" rows="3" cols="150" value=\'' + n + "'>" + n + "</textarea>");
                  else
                    this.GetUIWrapper(t).SetValue(n, s);
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
        }
        ,
        F.prototype.EnableControl = function (n, i, l) {
          var c, S, x;
          if (!vt(n))
            return;
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
          } else
            c = $("#" + n.GetInputName()),
              c = c.length > 0 ? c : $("[name=" + n.GetInputName() + "]"),
              c.eq(c.length > l ? l : 0).removeAttr("readOnly").attr("readOnly", !i).attr("aria-readonly", !i);
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
        }
        ,
        F.prototype.UpdateUIControls = function (t, n) {
          var i = this.GetPM(), s;
          t = t !== undefined ? t : i.Get("GetSelection"),
            n = i.Get("GetControls", {
              getDiff: !0,
              stateName: "CanUpdate",
              index: t,
              CtrlMap: n
            }),
            isPure = i.Get("IsPure");
          for (var o in n)
            n.hasOwnProperty(o) && (s = n[o],
              (!e.IsEmpty(s.GetFieldName()) || !isPure || i.ExecuteMethod("IsPrivateField", o)) && s.GetUIType() !== r && this.EnableControl(s, i.ExecuteMethod("CanUpdate", o), t))
        }
        ,
        F.prototype.UpdateUIButtons = function (e) {
          var t = this.GetPM();
          e = e || t.Get("GetSelection");
          var n = t.Get("GetControls", {
            getDiff: !0,
            stateName: "CanInvokeMethod",
            index: e
          }), i;
          for (var s in n)
            n.hasOwnProperty(s) && (i = n[s],
              (i.GetUIType() === r || i.GetUIType() === C) && this.EnableControl(i, t.ExecuteMethod("CanInvokeMethod", i.GetMethodName())))
        }
        ,
        F.prototype.FocusFirstControl = function () {
          var t = this.GetPM().Get("GetControls")
            , n = 9999;
          this.SetFirstControl(null);
          for (var r in t)
            if (t.hasOwnProperty(r)) {
              var i = t[r]
                , u = i.GetFieldName();
              if (!e.IsEmpty(u) && i.GetIndex() && i.GetIndex() < n) {
                var a = !1;
                this.GetPM().Get("IsInQueryMode") === !1 ? a = this.GetPM().ExecuteMethod("CanUpdate", r) : a = !0;
                if (a && !e.IsEmpty(i.GetUIType()) && (i.isBasicControl() || i.GetUIType()[0] === "J" || i.GetUIType() === s || i.GetUIType() === o)) {
                  n = i.GetIndex(),
                    this.SetFirstControl($("#" + i.GetInputName())[0] || $("[name=" + i.GetInputName() + "]")[0]);
                  break
                }
              }
            }
          if (this.GetFirstControl() != null) {
            $(this.GetFirstControl()).focus();
            return
          }
          this.FocusFirstNonEditableControl()
        }
        ,
        F.prototype.FocusFirstNonEditableControl = function () {
          var t = this.GetPM().Get("GetControls"), n = 9999, r;
          for (var i in t)
            if (t.hasOwnProperty(i)) {
              var s = t[i]
                , o = s.GetUIType();
              controlInputName = s.GetInputName();
              if (s.GetIndex() < n && !e.IsEmpty(o) && o !== "Button" && o !== "Label") {
                this.SetFirstControl($("#" + controlInputName)[0] || $("[name=" + controlInputName + "]")[0]);
                break
              }
            }
          r = this.GetFirstControl(),
            r && $(r).length > 0 && ($(r).focus(),
              !$(r).is(":focusable") && $(r).children().eq(0).is(":focusable") && $(r).children().eq(0).focus())
        }
        ,
        F.prototype.SetFocusToControl = function (n, r) {
          var i = this.GetPM().Get("GetControls")
            , s = null
            , o = i[n]
            , u = this.GetPM().Get("GetSelection");
          if (o)
            return e.IsEmpty(o.GetMethodName()) ? this.GetUIWrapper(o).SetState(t.get("FOCUS"), r, u) : (s = $("#" + (o.GetInputName() + "_Ctrl")),
              r ? $(s).focus() : $(s).blur()),
              !0
        }
        ,
        F.prototype.InjectQTPInfo = function (e, t) {
          e.length != 0 && t != undefined && (typeof t.GetObjectType == "function" && !e.attr("ot") && $(e).attr("ot", t.GetObjectType()),
            typeof t.GetRepstrName == "function" && !e.attr("rn") && $(e).attr("rn", t.GetRepstrName()),
            typeof t.GetUIName == "function" && !e.attr("un") && $(e).attr("un", t.GetUIName()))
        }
        ,
        F.prototype.InjectConfigInfo = function (e, t, n) {
          e.length != 0 && t != undefined && (typeof t.GetObjectType == "function" && !e.attr("ort") && $(e).attr("ort", n),
            typeof t.GetRepstrName == "function" && !e.attr("orn") && $(e).attr("orn", t.GetRepstrName()))
        }
        ,
        F.prototype.InjectAppletQTPInfo = function (e) {
          var t = this.GetPM();
          e.length != 0 && t && (typeof t.Get("GetObjectType") == "string" && $(e).attr("ot", t.Get("GetObjectType")),
            typeof t.Get("GetRepstrName") == "string" && $(e).attr("rn", t.Get("GetRepstrName")),
            typeof t.Get("GetUIName") == "string" && $(e).attr("un", t.Get("GetUIName")))
        }
        ,
        F.prototype.ShowPopup = function (e) {
          this.GetUIWrapper(e).OpenPopup()
        }
        ,
        F.prototype.GetPhysicalControlValue = function (e) {
          var t, n, r = this.GetPM(), i = r.Get("GetSelection");
          if (e) {
            r.AddProperty("PhysicalCtrlVal", n),
              t = $("[name='" + e.GetInputName() + "']"),
              n = this.GetUIWrapper(e).GetValue(i) || "",
              r.Get("IsInQueryMode") && e.GetCaseSensitive() && n === SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_CSQ_WATERMARK") && (n = "");
            var s = e.GetUIType();
            switch (s) {
              case f:
                t.data("iscache") ? n = r.ExecuteMethod("GetFormattedFieldValue", e) : n = this.FormatDDInQueryMode(e, n)
            }
            r.AddProperty("PhysicalCtrlVal", n)
          }
        }
        ,
        F
    }(),
      "SiebelAppFacade.IPRPhysicalRenderer"
  }))
