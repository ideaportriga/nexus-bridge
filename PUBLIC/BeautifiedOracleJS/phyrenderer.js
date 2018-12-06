if (typeof(SiebelAppFacade.PhysicalRenderer) === "undefined") {
	SiebelJS.Namespace("SiebelAppFacade.PhysicalRenderer");
	define("siebel/phyrenderer", ["siebel/basephyrenderer", "siebel/htmltmplmgr"], function () {
		SiebelAppFacade.PhysicalRenderer = (function () {
			var ar = SiebelJS.Dependency("SiebelApp.Utils");
			var Y = SiebelJS.Dependency("SiebelApp.Constants");
			var I = SiebelJS.Dependency("SiebelAppFacade.HTMLTemplateManager");
			var ac = Y.get("SWE_PST_BUTTON_CTRL");
			var aq = Y.get("SWE_CTRL_DETAIL");
			var ad = Y.get("SWE_CTRL_MVG");
			var A = Y.get("SWE_CTRL_PICK");
			var al = Y.get("SWE_CTRL_RADIO");
			var U = Y.get("SWE_CTRL_CHECKBOX");
			var r = Y.get("SWE_CTRL_COMBOBOX");
			var ap = Y.get("SWE_CTRL_CHART");
			var am = Y.get("SWE_CTRL_PLAINTEXT");
			var e = Y.get("SWE_CTRL_DATE_TIME_PICK");
			var M = Y.get("SWE_CTRL_DATE_PICK");
			var y = Y.get("SWE_CTRL_CALC");
			var af = Y.get("SWE_CTRL_DATE_TZ_PICK");
			var g = Y.get("SWE_CTRL_CURRENCY_CALC");
			var O = Y.get("SWE_CTRL_TEXT");
			var a = Y.get("SWE_CTRL_TEXTAREA");
			var S = Y.get("SWE_CTRL_PWD");
			var B = Y.get("SWE_CTRL_RTCEMBEDDED");
			var w = Y.get("SWE_CTRL_RTCEMBEDDEDTEXTONLY");
			var f = Y.get("SWE_CTRL_RTCEMBEDDEDLINKFIELD");
			var T = Y.get("SWE_CTRL_RTCPOPUP");
			var u = Y.get("SWE_CTRL_RTCIO");
			var ai = Y.get("SWE_CTRL_INKDATA");
			var l = Y.get("SWE_CTRL_LINK");
			var ah = Y.get("SWE_CTRL_LABEL");
			var Z = Y.get("SWE_CTRL_URL");
			var ag = Y.get("SWE_CTRL_MAILTO");
			var ab = /(About Record Applet\w*)|(About SRF Applet\w*)|(About Siebel Applet\w*)|(About View Applet\w*)|(Record Count Applet\w*)|(Technical Support Applet\w*)/;
			var R = Y.get("SWE_CTRL_EFFDAT");
			var J = Y.get("SWE_CTRL_IMAGECONTROL");
			var X = Y.get("SWE_CTRL_FILE");
			var t = Y.get("SWE_PST_COL");
			var c = Y.get("SWE_PST_APPLET_MODE_QUERY");
			var aa = Y.get("SWE_PST_APPLET_MODE_EDIT");
			var L = Y.get("SWE_PST_APPLET_MODE_NEW");
			function F(at) {
				SiebelAppFacade.PhysicalRenderer.superclass.constructor.call(this, at);
				var au = null;
				this.SetFirstControl = function (aw) {
					au = aw
				};
				this.GetFirstControl = function () {
					return au
				};
				var av = false;
				this.SetIsGridBaseForm = function (aw) {
					av = aw
				};
				this.GetIsGridBaseForm = function () {
					return av
				};
				this._EndLife = function () {
					au = null
				}
			}
			SiebelJS.Extend(F, SiebelAppFacade.BasePR);
			F.prototype.Init = function () {
				SiebelAppFacade.PhysicalRenderer.superclass.Init.call(this);
				this.AttachPMBinding("UpdateQuickPickInfo", this.UpdatePick);
				this.AttachPMBinding("UpdateAppletMessage", o);
				this.AttachPMBinding("UpdateCurrencyCalcInfo", q);
				this.AttachPMBinding("UpdateConditionals", i);
				this.AttachPMBinding("ProcessCancelQueryPopup", ao);
				this.AttachPMBinding("FocusOnApplet", b);
				this.AttachPMBinding("HandleCtrlDefChange", this.RefreshControl);
				this.AttachPMBinding("SetCanInvokeState", ak);
				this.AttachPMBinding("BeginQueryState", an);
				this.AttachPMBinding("EndQueryState", x);
				this.AttachPMBinding("UpdateRowCounter", v);
				this.AttachPMBinding("ShowPopup", this.ShowPopup);
				this.AttachPMBinding("isControlPopupOpen", p);
				this.AttachPMBinding("MaskLeaveField", this.MaskLeaveField);
				this.AttachPMBinding("ShowSelection", this.ShowSelection);
				this.AttachPMBinding("ResetAppletState", this.ResetRendererState);
				this.AttachPMBinding("RefreshData", this.BindData);
				this.AttachPMBinding("FieldChange", this.SetControlValue);
				this.AttachPMBinding("UpdateStateChange", this.UpdateUIControls);
				this.AttachPMBinding("InvokeStateChange", this.UpdateUIButtons);
				this.AttachPMBinding("GetPhysicalControlValue", this.GetPhysicalControlValue);
				this.AttachPMBinding("SetFocusToCtrl", this.SetFocusToControl);
				this.AttachPMBinding("FocusFirstControl", this.FocusFirstControl);
				this.AttachPMBinding("SetHighlightState", P);
				this.AttachPMBinding("UpdateUI", function () {
					if (this.GetPM().Get("UpdateUI")) {
						this.ShowSelection()
					}
				})
			};
			F.prototype.RefreshControl = function (au) {
				var at = $("#" + au.GetInputName())[0] || $("[name=" + au.GetInputName() + "]");
				if (at.length > 0) {
					at.nextAll().remove();
					this.GetUIWrapper(au, true);
					this.ShowUIControl(au);
					this.BindControlEvents(au);
					this.EnableControl(au, this.GetPM().ExecuteMethod("CanUpdate", au.GetName()));
					d.call(this, au)
				}
			};
			F.prototype.EndLife = function () {
				var av = this.GetPM(),
				at = av.Get("GetControls");
				for (var au in at) {
					var ay = at[au];
					if (ay.GetUIType() === B) {
						var ax = CKEDITOR.instances[ay.GetInputName()];
						if (ax) {
							var aw = this.GetUIWrapper(ay).GetEl();
							if (!aw.data("pendingAction")) {
								ax.destroy(true)
							}
						}
					}
				}
				$("#s_" + av.Get("GetFullId") + "_div").off("click click.drilldown");
				this._EndLife();
				SiebelAppFacade.PhysicalRenderer.superclass.EndLife.call(this)
			};
			F.prototype.ResetRendererState = function () {};
			F.prototype.UpdatePick = function () {
				var at = arguments[arguments.length - 1];
				var au = this.GetPM().Get("GetActiveControl");
				if (!au) {
					return
				}
				this.GetUIWrapper(au).UpdatePickList(at);
				delete this.inProgress
			};
			function q() {
				var aw = this.GetPM();
				var az = SiebelApp.S_App.GetPopupPM();
				$("div[name='popup']").find("div[name=CurrencyCalc]").remove();
				var ax = aw.ExecuteMethod("GetCurrencyCalInfo");
				var aA = {
					pickId : ax[0],
					pickName : ax[1],
					pickValue : ax[2],
					dateId : ax[3],
					dateName : ax[4],
					dateValue : ax[5],
					calcId : ax[6],
					calcName : ax[7],
					calcValue : ax[8],
					hideExchDate : ax[9],
					CCodeReadOnly : ax[10],
					eDateReadOnly : ax[11],
					AmountReadOnly : ax[12],
					sourceField : ax[13],
					qtpInfo : ax[14],
					dateformat : ax[15],
					dateFieldName : ax[16]
				};
				var ay = aw.Get("GetActiveControl");
				if (!ay) {
					var aC = aw.Get("GetControls");
					for (var aB in aC) {
						if (aC.hasOwnProperty(aB)) {
							if (aC[aB].GetInputName() === aA.sourceField) {
								ay = aC[aB];
								break
							}
						}
					}
				}
				var av = '<div name="CurrencyCalc" class="siebui-popup-currency">';
				var au = aw.ExecuteMethod("GetFieldDataType", aA.dateFieldName);
				var at = SiebelApp.S_App.LocaleObject.StringToFormatted(au, aA.dateValue, aA.dateformat);
				av += '<input type="hidden" autofocus="autofocus"/>';
				av += '<div id="' + aA.pickId + '_cc" class="siebui-popup-input-row"><span class="siebui-popup-label">' + aA.pickName + '</span><input type="text" id="' + aA.pickId + '" tabindex="100" aria-label="' + aA.pickName + '" class="siebui-ctrl-pick" value="' + aA.pickValue + '" ' + (aA.CCodeReadOnly ? 'readonly="readonly" ' : "") + "></div>";
				if (!aA.hideExchDate) {
					av += '<div id="' + aA.dateId + '_cc" class="siebui-popup-input-row"><span class="siebui-popup-label">' + aA.dateName + '</span><input type="text" id="' + aA.dateId + '" tabindex="101" aria-label="' + aA.dateName + '" class="siebui-ctrl-date" value="' + at + '" ' + (aA.eDateReadOnly ? ' readonly="readonly" ' : "") + "></div>"
				}
				av += '<div id="' + aA.calcId + '_cc" class="siebui-popup-input-row"><span class="siebui-popup-label">' + aA.calcName + '</span><input type="text" id="' + aA.calcId + '" tabindex="102" aria-label="' + aA.calcName + '" class="siebui-ctrl-calc" value="' + aA.calcValue + '" ' + (aA.AmountReadOnly ? 'readonly="readonly" ' : "") + "></div>";
				av += "</div>";
				if (az.Get("state") === Y.get("POPUP_STATE_UNLOADED")) {
					az.Setup()
				}
				az.SetProperty("isCurrencyOpen", true);
				az.ExecuteMethod("OpenPopup", av, 0, 0, false, false, true);
				az.SetProperty("isCurrencyOpen", true);
				$("div[name=popup] ").find("div[name=CurrencyCalc]").parents("div.ui-dialog").children("div.ui-dialog-titlebar").hide().end().end().bind("keydown", {
					ctx : this,
					ctrl : ay,
					popPM : az
				}, function (aE) {
					if (aE.keyCode === $.ui.keyCode.ESCAPE) {
						if (aE.data.popPM.Get("isCurrencyOpen")) {
							aE.data.popPM.SetProperty("isCurrencyOpen", false);
							aE.data.ctx.GetPM().ExecuteMethod("NotifyClosePopup");
							aE.data.ctx.SetFocusToControl(aE.data.ctrl.GetName(), true)
						}
					}
					if (aE.keyCode === $.ui.keyCode.ESCAPE || aE.keyCode === $.ui.keyCode.ENTER) {
						aE.stopPropagation()
					}
				});
				$("div[name=CurrencyCalc]").parents("div.ui-dialog-content").removeClass("minWidthContainer");
				SiebelAppFacade.ControlBuilder.Pick({
					target : "#" + aA.pickId,
					className : "siebui-icon-pick",
					scope : this,
					control : ay,
					click : function (aE) {
						this.GetPM().ExecuteMethod("ShowPickPopup")
					}
				});
				SiebelAppFacade.ControlBuilder.DatePick({
					target : "#" + aA.dateId,
					className : "siebui-icon-date",
					control : ay,
					scope : this,
					showPopup : false,
					click : function (aG, aF) {
						if (!aA.eDateReadOnly) {
							this.GetPM().SetProperty("isControlPopupOpen", true);
							$.data(this, "innerCtrlElem", {
								date : aF
							});
							var aE = this;
							SiebelAppFacade.ControlBuilder.DatePick({
								target : aF,
								className : "siebui-icon-date",
								control : aG,
								scope : this,
								showPopup : true,
								yearRange : "c-100:c+100",
								getISOVal : function () {
									return ar.toISOFormat($(this.target).val(), false)
								},
								onClose : function (aJ, aI) {
									$(this).datetimepicker("destroy").focus();
									aE.GetPM().SetProperty("isControlPopupOpen", false);
									$.removeData("innerCtrlElem");
									if (ar.IsISO(consts.get("SWE_CTRL_DATE_PICK"), aJ)) {
										var aH = SiebelApp.S_App.LocaleObject.GetStringFromDateTime(aJ, consts.get("ISO_DATE_FORMAT"), SiebelApp.S_App.LocaleObject.GetDateFormat());
										$(this).val(aH)
									} else {
										$(this).val(aJ)
									}
								}
							})
						}
					}
				});
				SiebelAppFacade.ControlBuilder.Calculator({
					target : "#" + aA.calcId,
					className : "siebui-icon-calc",
					control : ay,
					dc : SiebelApp.S_App.LocaleObject.GetDispCurrencyDecimal(),
					scope : this,
					click : function (aG, aF) {
						if (!this.GetPM().ExecuteMethod("CanUpdate", aG.GetName())) {
							return
						}
						this.GetPM().SetProperty("isControlPopupOpen", true);
						$.data(this, "innerCtrlElem", {
							calc : aF
						});
						this.SetControlValue(aG, this.GetPM().ExecuteMethod("GetFieldValue", aG));
						var aE = this;
						SiebelAppFacade.DecisionManager.PauseVKeyboard($(aF));
						SiebelAppFacade.ControlBuilder.Calculator({
							target : aF,
							className : "siebui-icon-calc",
							control : aG,
							dc : SiebelApp.S_App.LocaleObject.GetDispCurrencyDecimal(),
							show : true,
							beforeShow : function (aM, aL) {
								var aK = aM;
								var aH = $("#" + aA.pickId).val();
								if (aH) {
									var aJ;
									var aN = SiebelApp.S_App.LocaleObject.GetCurrency(aH);
									aN = aN ? aN.m_sSymbol : null;
									if (aN) {
										aK = aK.replace(aN, "")
									}
								}
								var aI = SiebelApp.S_App.LocaleObject.GetDispCurrencySeparator(),
								aK = aK.replace(new RegExp("\\" + aI, "ig"), "").trim();
								$(this).val(aK)
							},
							close : function (aH) {
								var aI = aH.replace(/\[/g, "").replace(/\]/g, "");
								aE.SetControlValue(aG, aI);
								$(this).calculator("destroy").next("img").show().end().focus();
								aE.GetPM().SetProperty("isControlPopupOpen", false);
								$.removeData("innerCtrlElem");
								aE.GetPM().OnControlEvent(Y.get("PHYEVENT_CONTROL_FOCUS"), aG);
								SiebelAppFacade.DecisionManager.ResumeVKeyboard($(this))
							}
						})
					}
				});
				N.call(this, aA.qtpInfo);
				$("#" + aA.pickId).bind("focus", {
					ctx : this,
					ctrl : ay
				}, function (aE) {
					aE.data.ctx.GetPM().OnControlEvent(Y.get("PHYEVENT_CONTROL_FOCUS"), aE.data.ctrl, $(this).val())
				}).bind("blur", {
					ctx : this,
					ctrl : ay,
					ctrlType : aA.pickName
				}, function (aF) {
					aF.data.ctx.onBlurCurrency(aF.data.ctrlType, $(this).val());
					aF.data.ctx.GetPM().ExecuteMethod("CurrencyPostChanges");
					var aG = aF.data.ctx.GetPM().ExecuteMethod("GetCurrencyCalInfo");
					var aE = $("#" + aG[6]);
					aE.val(aG[8])
				}).bind("keydown", {
					ctx : this,
					ctrl : ay,
					readOnly : aA.CCodeReadOnly
				}, function (aE) {
					aE.data.ctx.HandleKeyEvents($(this), aE, $(this).val())
				});
				$("#" + aA.calcId).bind("focus", {
					ctx : this,
					ctrl : ay
				}, function (aE) {
					aE.data.ctx.GetPM().OnControlEvent(Y.get("PHYEVENT_CONTROL_FOCUS"), aE.data.ctrl, $(this).val())
				}).bind("blur", {
					ctx : this,
					ctrl : ay
				}, function (aG) {
					if (aG.data.ctx.GetPM().Get("isControlPopupOpen") === false) {
						if (!!$(this).data("inLeaveField")) {
							return
						}
						var aH = $(this).val();
						var aF = 0;
						while (isNaN(aH.charAt(aF))) {
							aF++
						}
						aH = aH.substring(aF);
						aG.data.ctx.GetPM().OnControlEvent(Y.get("PHYEVENT_CONTROL_BLUR"), aG.data.ctrl, aH);
						aG.data.ctx.GetPM().ExecuteMethod("CurrencyPostChanges");
						var aI = aG.data.ctx.GetPM().ExecuteMethod("GetCurrencyCalInfo");
						var aE = $("#" + aI[6]);
						aE.val(aI[8])
					}
				}).bind("keydown", {
					ctx : this,
					ctrl : ay,
					readOnly : aA.AmountReadOnly
				}, function (aE) {
					aE.data.ctx.HandleKeyEvents($(this), aE, $(this).val())
				});
				$("#" + aA.dateId).bind("blur", {
					ctx : this,
					ctrl : ay,
					readOnly : aA.eDateReadOnly
				}, function (aF) {
					if (!aF.data.readOnly) {
						var aG = ar.Trim($(this).val());
						var aH = ar.toISOFormat(aG, false) || aG;
						if (ar.IsISO(consts.get("SWE_CTRL_DATE_PICK"), aH)) {
							var aE = SiebelApp.S_App.LocaleObject.GetStringFromDateTime(aH, consts.get("ISO_DATE_FORMAT"), SiebelApp.S_App.LocaleObject.GetDateFormat());
							$(this).val(aE)
						} else {
							$(this).val(aH)
						}
					}
					return false
				}).bind("keydown", {
					ctx : this,
					ctrl : ay,
					readOnly : aA.eDateReadOnly
				}, function (aE) {
					aE.data.ctx.HandleKeyEvents($(this), aE, $(this).val())
				});
				$("div.ui-widget-overlay").bind("click", {
					ctx : this,
					ctrl : ay,
					popPM : az
				}, function (aE) {
					if (aE.data.popPM.Get("isCurrencyOpen")) {
						aE.data.popPM.SetProperty("isCurrencyOpen", false);
						aE.data.ctx.GetPM().ExecuteMethod("NotifyClosePopup");
						aE.data.ctx.SetFocusToControl(aE.data.ctrl.GetName(), true)
					}
				});
				var aD = this;
				setTimeout(function () {
					var aE = $("#" + ay.GetInputName() + "_icon") || $("#" + ay.GetInputName().replace("_0", "_" + aw.Get("GetSelection")) +  + "_icon");
					if (aE.length === 0 && typeof(aD.GetColumnHelper) === "function") {
						aE = $('[name="' + aD.GetColumnHelper().GetModifiedColumnName(ay.GetName()) + '"]').next("img");
						if (aE.length === 0) {
							aE = aE.end()
						}
					}
					$("div[name=popup] ").find("div[name=CurrencyCalc]").parents("div.ui-dialog").position({
						my : "top",
						at : "bottom",
						collision : "flipfit",
						of : aE
					});
					setTimeout(function () {
						$("#" + aA.pickId).focus()
					}, 5)
				}, 15)
			}
			F.prototype.onBlurCurrency = function (av, au) {
				var at = this.GetPM().ExecuteMethod("GetCurrencyCalInfo");
				var aw;
				au = au.toUpperCase();
				if (av === "Currency Code") {
					aw = at[0];
					var ax = SiebelApp.S_App.LocaleObject.GetCurrency(au);
					if (ax) {
						$("#" + aw).val(au)
					} else {
						$("#" + aw).val(at[2])
					}
				}
			};
			function N(ax) {
				if (ax) {
					var at = ax.GetChildCount();
					for (var au = 0; au < at; au++) {
						var aw = ax.GetChild(au);
						var av = aw.GetProperty(consts.get("SWE_PROP_ID"));
						$("#" + av).attr({
							ot : aw.GetProperty(consts.get("SWE_PROP_QTP_OT")),
							rn : aw.GetProperty(consts.get("SWE_PROP_QTP_RN")),
							un : aw.GetProperty(consts.get("SWE_PROP_QTP_UN"))
						})
					}
				}
			}
			function o() {
				var av = this.GetPM(),
				ay = av.Get("GetQueryModePrompt"),
				ax = av.Get("GetId"),
				aw = $("#s_" + ax + "_rc"),
				at = $("#" + ax + "_msg"),
				au = "<div class='siebui-applet-msg'><span id=" + ax + "_msg><span></div>";
				if (at.length === 0) {
					if (aw.parent().prev("td").length) {
						aw.parent().prev("td").append(au)
					} else {
						aw.parent().append(au)
					}
				}
				if (ay) {
					aw.addClass("siebui-no-display");
					$("#" + ax + "_msg").html(ay).parent(".siebui-applet-msg").removeClass("siebui-no-display")
				} else {
					$("#" + ax + "_msg").parent(".siebui-applet-msg").addClass("siebui-no-display");
					aw.removeClass("siebui-no-display")
				}
				aw = null
			}
			function ao() {
				var ay = SiebelApp.S_App.GetPopupPM();
				$("[name=cancelQuery]").remove();
				var ax = $('<div name="cancelQuery"></div>');
				var aB = "";
				var aD = SiebelApp.S_App.LocaleObject;
				var aA = aD.GetLocalString("IDS_CANCELQRY_INITIALTEXT");
				var av = aD.GetLocalString("IDS_CANCELQRY_RESPONSETEXT");
				var aC = aD.GetLocalString("IDS_CANCELQRY_HEADERTEXT");
				var au = aD.GetLocalString("IDS_CANCELQRY_BUTTONTEXT");
				aB += '<div align ="center" id = "responseTxt_div"><p id="initTxt_CQ"><b>' + aA + "</b></p></div><br />";
				var at = '<button id="cancelQry_Ctrl_CQ" class="appletButton" type="button" title="' + au + '" >' + au + "</button>";
				aB += '<div align="center" id = "cancelbtn_div">' + at + "</div>";
				ax.append(aB);
				if (ay.Get("state") === Y.get("POPUP_STATE_UNLOADED")) {
					ay.Setup()
				}
				ay.SetProperty("IsCancelQryPopupOpen", true);
				ay.ExecuteMethod("SetPopupVisible", true);
				ay.SetProperty("content", ax);
				var az = $("#cancelQry_Ctrl_CQ");
				if (az.length !== 0) {
					var aw = this;
					az.bind("click", function (aE) {
						var aF = '<p id="responseTxt_CQ"><b>' + av + "</b></p>";
						$("#initTxt_CQ").replaceWith(aF);
						ay.OnControlEvent(Y.get("PHYEVENT_CANCEL_QRY_POPUP"), aE)
					})
				}
			}
			function ak() {
				var at = this.GetPM();
				var au = $("#s_" + at.Get("GetFullId") + "_div");
				if (at.ExecuteMethod("IsMethodDefault", "MaximizeApplet") && at.ExecuteMethod("CanInvokeMethod", "MaximizeApplet") === false) {
					au.removeClass("siebui-applet-minimize").addClass("siebui-applet-maximize")
				} else {
					if (at.ExecuteMethod("IsMethodDefault", "MinimizeApplet") && at.ExecuteMethod("CanInvokeMethod", "MinimizeApplet") === false) {
						au.removeClass("siebui-applet-maximize").addClass("siebui-applet-minimize")
					} else {
						au.removeClass("siebui-applet-maximize siebui-applet-minimize")
					}
				}
			}
			function D(av, au, at) {
				if (this.GetPM().Get("IsInQueryMode") && av.GetCaseSensitive()) {
					if (at == true && $(au).val() === "") {
						$(au).val(SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_CSQ_WATERMARK"));
						$(au).addClass("siebui-watermark-text")
					} else {
						if (at == false && $(au).val() === SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_CSQ_WATERMARK")) {
							$(au).val("");
							$(au).removeClass("siebui-watermark-text")
						}
					}
				}
			}
			F.prototype.ShowUI = function () {
				SiebelAppFacade.PhysicalRenderer.superclass.ShowUI.call(this);
				var aJ = this.GetPM(),
				aM = aJ.Get(Y.get("SWE_VIS_MODE_LIST")),
				ax = aJ.Get(Y.get("SWE_LDC_VIS_MODE_LIST")),
				aF = aM ? aM.length : 0,
				aB = ax ? ax.length : 0,
				av = aJ.Get("GetFullId"),
				aG = aJ.Get("GetPlaceholder"),
				az,
				at,
				aE = aJ.Get(Y.get("SWE_VIS_MODE_DEFAULT")),
				aK = "<div align='center' id = 's_div_" + aG + "_VisualModes' class = 'siebui-viz-buttonbar AppletButtons'>";
				ak.call(this);
				var aN = $("#s_" + av + "_div");
				aN.addClass(" siebui-applet siebui-form ");
				aN.find(".AppletTitle").eq(0).removeClass("AppletTitle").addClass(" siebui-applet-title ");
				if (aN.find("table[data-siebel-form-table='true']").length > 0) {
					this.SetIsGridBaseForm(true);
					aJ.SetProperty("GridFormContent", true)
				}
				if (ar.IsTrue(SiebelApp.S_App.GetAccessibilityEnhanced())) {
					aN.attr({
						role : "region",
						title : aJ.Get("LandMarkTitle")
					})
				}
				var aH = aJ.Get("GetControls");
				for (var aC in aH) {
					if (aH.hasOwnProperty(aC)) {
						this.ShowUIControl(aH[aC])
					}
				}
				aH = null;
				this.InjectAppletQTPInfo(aN);
				this.ShowCollapseExpand();
				if (aF > 0 && aB > 0 && aF === aB) {
					var aw = aJ.Get("GetAppletLabel");
					if (aw !== "") {
						aw += ":"
					}
					for (var aI = 0; aI < aF; aI++) {
						var aD = aM[aI];
						var ay = ax[aI];
						var aA = aw + ay;
						if (aD !== aE) {
							at = "siebui-ctrl-btn appletButton"
						} else {
							at = "siebui-ctrl-btn appletButtonDis"
						}
						if ($("#" + aG + "_" + aD + "_btn").length === 0) {
							az = '<button id="' + aG + "_" + aD + "_btn\" class='" + at + "' aria-label='" + aA + "' " + ((at === "siebui-ctrl-btn appletButton") ? " " : ' disabled="disabled" ') + 'type="button" title="' + aA + '" ';
							if (ar.IsTrue(SiebelApp.S_App.IsAutoOn())) {
								az += consts.get("SWE_PROP_QTP_OT") + "='" + consts.get("SWE_PST_BUTTON_CTRL") + "' " + consts.get("SWE_PROP_QTP_RN") + "='" + aD + "' " + consts.get("SWE_PROP_QTP_UN") + "='" + ay + "'"
							}
							az += ">" + ay + "</button>";
							aK += '<div align="center" id = "s_div_' + aG + "_" + aD + "\" class='siebui-viz-button-" + aD.toLowerCase() + "' >" + az + "</div>"
						}
					}
					if (az) {
						aK += "</div>";
						var aL = aN.find(".siebui-vismode-buttonbar").eq(0);
						if (aL.length > 0) {
							aL.empty();
							aL.append(aK)
						} else {
							var au = $("#s_" + aJ.Get("GetId") + "_rc");
							if (au.parent().prev("td").length) {
								au.parent().prev("td").append(aK)
							} else {
								au.parent().prepend(aK)
							}
							au = null
						}
						aL = null
					}
				}
				if (this.GetIsGridBaseForm() === true) {
					aj.call(this, aN)
				} else {
					$("#SWEBottomHidden" + aJ.Get("GetId")).attr("tabindex", "-1")
				}
				SiebelAppFacade.LegacyCssSupport.addLegacyClass($("#" + av));
				aN.find("span >img:first-child").each(function () {
					var aO = $(this),
					aP = aO.attr("alt") || aO.attr("title");
					aP ? aO.parent().attr("title", aP) : false
				});
				aN = null
			};
			function aj(aw) {
				if (aw && aw.length) {
					var ay = "#SWEBottomHidden" + this.GetPM().Get("GetId"),
					ax = aw.find("[tabindex]").not(ay);
					for (var au = 0, at = ax.length; au < at; au++) {
						var av = ax.eq(au);
						if (Number(av.attr("tabindex")) >= 0) {
							av.attr({
								"data-seq" : av.attr("tabindex"),
								tabindex : "0"
							})
						}
					}
					aw.on("keydown", "input[type=file][data-seq], button[data-seq], input[type=button][data-seq],div[data-seq],span[data-seq],a[data-seq]", {
						ctx : this
					}, function (az) {
						C.call(az.data.ctx, az.target, null, az)
					});
					aw = ax = null
				}
			}
			F.prototype.ShowUIControl = function (aA) {
				var aw = this.GetPM(),
				ax = aw.ExecuteMethod("IsRequired", aA.GetName()),
				aF = aA.GetUIType(),
				aH = false,
				aB = null;
				aB = this.GetUIWrapper(aA);
				aB.ShowUI();
				if (aw.Get("IsInQueryMode")) {
					aB.BeginQuery()
				}
				aH = (aF === Z || aF === w || aB.constructor.name === "BasePW");
				if (aH || ax) {
					var aD = arguments[1] ? arguments[1] : aA.GetInputName();
					var aC = (this.GetIsGridBaseForm() === true) ? aA.GetSeq() : 0;
					var az = $('[name="' + aD + '"]')[0] || $("#" + aD)[0];
					if (!az) {
						return
					}
					az = $(az)
				}
				if (ax) {
					var ay = SiebelApp.S_App.GetRequiredIndicator();
					var aE = az.attr("aria-labelledby");
					var aG = aE.replace("/", "\\/");
					var au = aw.Get("GetFullId");
					$("#" + au).children().find("#" + aG).parent().append(ay);
					az.attr("aria-required", "true");
					ay = aE = aG = au = null
				}
				switch (aA.GetUIType()) {
				case Z:
					if (aA.GetName() === "BookmarkImage" && aw.GetPMName() === "Bookmark URL Popup Applet (SWE)_PM") {
						az.remove();
						$($("table.FormSection")[0]).remove()
					}
					break;
				case w:
					az.text("");
					var av = az.next("textarea");
					if (av.length > 0) {
						av.height(aA.GetHeight()).width(aA.GetWidth()).attr("name", aA.GetInputName()).attr("aria-labelledby", (aA.GetFieldName().replace(/\s+/g, "") + "_Label")).attr("aria-label", aA.GetDisplayName()).attr("maxlength", aA.GetMaxSize() || 256).attr("tabindex", aC).addClass("siebui-align-" + aA.GetJustification());
						this.InjectAppletQTPInfo(av)
					}
					var at = az.parent().next().find("img.stripTagBtn");
					if (at.length > 0) {
						var aI = SiebelApp.S_App.LocaleObject.GetLocalString("RTCStripHTML");
						at.attr("alt", aI).attr("title", aI)
					}
					break;
				default:
					if (aB.constructor.name === "BasePW") {
						az.attr("maxlength", aA.GetMaxSize() || 256).attr("tabindex", aC).addClass("siebui-align-" + aA.GetJustification());
						this.InjectQTPInfo(az, aA)
					}
					break
				}
				aB = az = null
			};
			function K(au) {
				var at = arguments[1] ? arguments[1] : au.GetInputName();
				if ($("#" + at + "_mb").length > 0) {
					return
				}
				return '<a  id ="' + at + '_mb" tabindex ="' + au.GetSeq() + '" href="javascript:void(0)" >' + au.GetDisplayName() + "</a>"
			}
			F.prototype.ShowCollapseExpand = function () {
				var av = this.GetPM();
				var ay = av.Get("defaultAppletDisplayMode");
				if (ay) {
					var aw = av.Get("GetAppletLabel");
					if (aw !== "") {
						aw = aw + ":"
					}
					var aA;
					var au = SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_APPLET_EXPAND");
					var ax = aw + au;
					var at = ar.IsTrue(SiebelApp.S_App.IsAutoOn());
					var az = "#s_" + av.Get("GetFullId") + "_div";
					aA = "<span class='siebui-button-secondary siebui-btn-icon-expanded'><a href='javascript:void()' role='link' tabindex='0' aria-label='" + ax + "' ";
					if (at) {
						aA += consts.get("SWE_PROP_QTP_OT") + "='" + consts.get("SWE_CTRL_LINK") + "' " + consts.get("SWE_PROP_QTP_RN") + "='" + au + "' " + consts.get("SWE_PROP_QTP_UN") + "='" + au + "'"
					}
					aA += "></a></span>";
					ax = "";
					au = SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_APPLET_COLLAPSE");
					ax = aw + au;
					aA += "<span class='siebui-button-secondary siebui-btn-icon-collapsed'><a href='javascript:void()' role='link' tabindex='0' aria-label='" + ax + "' ";
					if (at) {
						aA += consts.get("SWE_PROP_QTP_OT") + "='" + consts.get("SWE_CTRL_LINK") + "' " + consts.get("SWE_PROP_QTP_RN") + "='" + au + "' " + consts.get("SWE_PROP_QTP_UN") + "='" + au + "'"
					}
					aA += "></a></span>";
					$(az).find(".siebui-applet-container.siebui-collapsible").prepend(aA).find(".siebui-btn-icon-" + ay).hide();
					if (ay === "collapsed") {
						$(az).find(".siebui-applet-content.siebui-collapsible").hide()
					}
				}
			};
			F.prototype.BindEvents = function (aD, az) {
				SiebelAppFacade.PhysicalRenderer.superclass.BindEvents.call(this);
				var au = this.GetPM(),
				ax = au.Get(Y.get("SWE_VIS_MODE_LIST")),
				at = ax ? ax.length : 0,
				aA = au.Get("GetFullId"),
				aG = "",
				aC = au.Get("GetPlaceholder");
				if (at > 0) {
					for (var aw = 0; aw < at; aw++) {
						if ($("#" + aC + "_" + ax[aw] + "_btn").length > 0) {
							$("#" + aC + "_" + ax[aw] + "_btn").bind("click", {
								ctx : this,
								visMode : ax[aw]
							}, function (aM) {
								var aI = aM.data.ctx,
								aK = aI.GetPM(),
								aH = CCFMiscUtil_CreatePropSet(),
								aJ = {};
								aJ.async = true;
								var aL = this;
								aJ.cb = function () {
									var aN = Array.prototype.slice.call(arguments);
									var aO = aN ? aN[aN.length - 1] : "";
									if (aO === true) {
										aK.SetProperty("DefaultVisualMode", aM.data.visMode);
										$(aL).attr("disabled", "disabled");
										$(aL).removeClass("siebui-ctrl-btn appletButton siebui-mode-button-enable");
										$(aL).addClass("siebui-ctrl-btn appletButtonDis siebui-mode-button-disable")
									}
								};
								aH.SetProperty("VisualMode", aM.data.visMode);
								aK.OnControlEvent(Y.get("PHYEVENT_INVOKE_CONTROL"), aK.Get(Y.get("SWE_VIS_MODE_FLIP_METHOD")), aH, aJ)
							})
						}
					}
				}
				if (this.constructor == F) {
					var aE = $("#SWEBottomHidden" + au.Get("GetId"));
					aE.bind("focus", {
						ctx : this
					}, function (aH) {
						G.call(aH.data.ctx, aH)
					});
					aE = null
				}
				var ay = $("#s_" + au.Get("GetFullId") + "_div");
				ay.on("click", ".siebui-applet-header.siebui-collapsible .siebui-button-secondary", {
					ctx : this
				}, function (aH) {
					$(this).parents(".siebui-applet-header.siebui-collapsible").find(".siebui-button-secondary").toggle().parents(".siebui-applet:first").find(".siebui-applet-content.siebui-collapsible").slideToggle("fast", "linear");
					(aH.data.ctx.resize || $.noop).call(aH.data.ctx)
				});
				ay.bind("click", {
					ctx : this
				}, function (aI) {
					if (SiebelApp.S_App.GetPopupPM().Get("state") === consts.get("POPUP_STATE_VISIBLE") && $(aI.currentTarget).find("div[id^='s_S_A'][id$='_div']").find($(aI.target)).length > 0) {
						return
					}
					var aH = aI.data.ctx;
					if (aH.IsValidClick(aI.srcElement || aI.target)) {
						if (aH && aH.GetPM()) {
							if (!aH.GetPM().Get("IsActive")) {
								aH.GetPM().OnControlEvent(Y.get("PHYEVENT_APPLET_FOCUS"))
							}
							m.call(aH, aI)
						}
					}
				});
				$("#_sweview #s_" + au.Get("GetFullId") + "_div").on("click", ".siebui-task-assist-list-item", {
					ctx : this
				}, function (aK) {
					var aJ = this.id;
					var aL = SiebelApp.S_App.getExtObject("TaskAssistant");
					if (aL) {
						aL.ExecuteMethod("LaunchTaskFromView", aJ)
					} else {
						var aH = SiebelApp.S_App.GetService(consts.get("NAME_TASKASSISTUISVC"));
						if (aH) {
							var aI = CCFMiscUtil_CreatePropSet();
							aI.SetProperty("Task Id", aJ);
							aH.InvokeMethod("LaunchTaskFromView", aI)
						}
					}
				});
				ay.on("click.drilldown", ".siebui-ctrl-drilldown", {
					ctx : this
				}, function (aK) {
					var aH = aK.data.ctx.GetPM().Get("GetControls");
					var aI = this.id.indexOf("_mb");
					var aJ = this.id.substring(0, aI);
					for (var aM in aH) {
						if (aH.hasOwnProperty(aM)) {
							var aL = aH[aM];
							if (aL.GetInputName() === aJ) {
								aK.data.ctx.GetPM().OnControlEvent(Y.get("PHYEVENT_DRILLDOWN_FORM"), aL)
							}
						}
					}
				});
				var aB = au.ExecuteMethod("GetControlId");
				if (aB) {
					$("[name=" + aB + "]").bind("change", {
						ctx : this
					}, function (aH) {
						aH.data.ctx.GetPM().OnControlEvent(Y.get("PHYEVENT_INVOKE_TOGGLE"), $(this).val())
					})
				}
				ay = null;
				if (az === true) {
					return
				}
				var aF = aD || au.Get("GetControls");
				for (var av in aF) {
					if (aF.hasOwnProperty(av)) {
						this.BindControlEvents(aF[av])
					}
				}
				aF = null
			};
			F.prototype.InvokeControlMethod = function (aw) {
				SiebelApp.S_App.uiStatus.Busy({});
				var au = {};
				au.async = true;
				au.cb = function () {
					var ax = Array.prototype.slice.call(arguments);
					var ay = ax ? ax[ax.length - 1] : "";
					if (ay !== Y.get("SWE_RPC_PROP_NEW_LAYOUT") && ay !== Y.get("SWE_RPC_PROP_REFRESH_LAYOUT") && ay !== Y.get("SWE_RPC_PROP_NEW_PAGE")) {
						SiebelApp.S_App.uiStatus.Free()
					}
				};
				var av = aw.GetMethodPropSet();
				var at = av.Clone();
				this.GetPM().OnControlEvent(Y.get("PHYEVENT_INVOKE_CONTROL"), aw.GetMethodName(), at, au)
			};
			F.prototype.IsValidClick = function (at) {
				return (ar.IndexOf(["input", "textarea", "button", "a", "img"], at.tagName.toLowerCase()) === -1)
			};
			F.prototype.FormatDDInQueryMode = function (av, au) {
				if (this.GetPM().Get("IsInQueryMode")) {
					var at = this.GetPM().Get("DDUserSelected");
					if (at && au && au.charAt(0) !== '"' && au.charAt(au.length - 1) !== '"' && at.ctrl === av && at.value === au) {
						au = '"' + au + '"';
						this.GetPM().SetProperty("DDUserSelected", undefined)
					}
				}
				return au
			};
			F.prototype.BindControlEvents = function (aw) {
				switch (aw.GetUIType()) {
				case ac:
					if (aw.GetMethodName() === "ClearSignature") {
						break
					}
				case aq:
				case r:
				case U:
				case al:
				case ag:
				case Z:
				case l:
				case ah:
				case M:
				case e:
				case af:
				case O:
				case a:
				case S:
				case A:
				case ad:
				case R:
				case g:
				case X:
				case B:
				case y:
				case ai:
					this.GetUIWrapper(aw).BindEvents();
					return
				}
				var ax = $("[name=" + aw.GetInputName() + "]");
				var av = this.GetPM();
				if (ax.length === 0 && aw.GetControlType() === t && ar.IndexOf([c, aa, L], av.Get("GetMode")) !== -1) {
					var at = aw.GetSpanPrefix() + "0";
					ax = $("[name=" + at + "]")
				}
				if (ax.length === 0 && $("#" + aw.GetInputName()).length === 0 && $("#" + (aw.GetInputName() + "_Ctrl")).length === 0) {
					return
				}
				switch (aw.GetUIType()) {
				case ac:
					if (aw.GetMethodName() === "ClearSignature") {
						$("#" + (aw.GetInputName() + "_Ctrl")).bind("click", {
							ctx : this,
							ctrl : aw
						}, function (ay) {
							var aB = ay.data.ctx.GetPM().Get("GetControls");
							for (var az in aB) {
								if (aB.hasOwnProperty(az)) {
									if (aB[az].GetUIType() === "JInkData") {
										var aA = aB[az].GetInputName();
										$("#siebui-ctrl" + aA + "-clearButton").trigger("click");
										$("#" + aA).attr({
											value : ""
										});
										$($("#sign_" + aA).find("canvas")).trigger("mouseup")
									}
								}
							}
						})
					}
					break;
				case w:
					var au = ax.parent().next().find("a.stripTagBtn");
					if (au.length > 0) {
						au.bind("click", function () {
							var az = SiebelApp.S_App.LocaleObject.GetLocalString("RTCStripHtmlConfirm");
							var ay = confirm(az);
							if (ay == true) {
								var aA = $("textarea[name='" + aw.GetInputName() + "']");
								aA.val(SiebelApp.Utils.stripOUIHTMLTag(aA.val()));
								aA.focus()
							}
						})
					}
				default:
					ax.bind("keydown", {
						ctx : this,
						ctrl : aw
					}, function (ay) {
						return ay.data.ctx.HandleKeyEvents($(this), ay, $(this).val())
					});
					ax.bind("blur", {
						ctx : this,
						ctrl : aw
					}, function (ay) {
						D.call(ay.data.ctx, ay.data.ctrl, this, false);
						var az = ay.data.ctx.GetPM().OnControlEvent(Y.get("PHYEVENT_CONTROL_BLUR"), ay.data.ctrl, $(this).val());
						D.call(ay.data.ctx, ay.data.ctrl, this, true)
					});
					ax.bind("focus", {
						ctx : this,
						ctrl : aw
					}, function (ay) {
						D.call(ay.data.ctx, ay.data.ctrl, this, false);
						ay.data.ctx.GetPM().OnControlEvent(Y.get("PHYEVENT_CONTROL_FOCUS"), ay.data.ctrl, $(this).val())
					});
					break
				}
				ax = null
			};
			F.prototype.HandleKeyEvents = function (av, aw, ay) {
				var at = false;
				var au = this.GetPM();
				if (av && av.length === 1 && aw) {
					var ax = aw.data.ctrl;
					if (ax) {
						switch (aw.which) {
						case $.ui.keyCode.ENTER:
							at = W.call(this, av, ax, aw);
							break;
						case $.ui.keyCode.ESCAPE:
							at = H.call(this, av, ax, aw);
							break;
						case $.ui.keyCode.UP:
							at = E.call(this, av, ax, aw);
							break;
						case $.ui.keyCode.DOWN:
							at = Q.call(this, av, ax, aw);
							break;
						case $.ui.keyCode.LEFT:
						case $.ui.keyCode.RIGHT:
							at = k.call(this, av, ax, aw);
							break;
						case $.ui.keyCode.BACKSPACE:
							at = ae.call(this, av, ax, aw);
							if (at) {
								aw.preventDefault()
							}
							break;
						case $.ui.keyCode.TAB:
							at = C.call(this, av, ax, aw);
							break;
						case Y.get("SWE_F2_KEY"):
							at = h.call(this, av, ax, aw);
							break;
						default:
							s.call(this, av, ax, aw);
							break
						}
					}
				}
				if (at) {
					aw.stopImmediatePropagation()
				}
			};
			function E(at, aw, au) {
				var av = this.GetUIWrapper(aw).HandleKey(at, au);
				return (av === true)
			}
			function Q(at, aw, au) {
				var av = this.GetUIWrapper(aw).HandleKey(at, au);
				return (av === true)
			}
			function s(au, aw, av) {
				var at = av.ctrlKey || av.altKey || av.shiftKey;
				if (aw.GetUIType() == r && !at && au.autocomplete("option", "source").length == 0) {
					this.GetUIWrapper(aw).HandleKey(au, av)
				}
			}
			function k(au, aw, av) {
				var at = false;
				if (av.altKey) {
					at = H.call(this, au, aw, av)
				}
				return at
			}
			function W(at, av, au) {
				switch (av.GetUIType()) {
				case a:
				case Z:
				case ai:
				case B:
				case w:
				case f:
				case T:
				case u:
				case ac:
					return true;
				case A:
					au.preventDefault()
				}
				j.call(this, at, av, au);
				if (av.GetUIType() == r && at.attr("autocomplete")) {
					this.GetUIWrapper(av).HandleKey(at, au)
				}
				return (this.GetPM().OnControlEvent(Y.get("PHYEVENT_ENTER_KEY_PRESS"), av))
			}
			function H(au, aw, av) {
				var at = this.GetPM();
				preState = at.Get("isControlPopupOpen");
				at.OnControlEvent(Y.get("PHYEVENT_ESCAPE_KEY_PRESS"), aw);
				return (at.Get("isControlPopupOpen") !== preState)
			}
			function ae(at, av, au) {
				if (at.attr("type") === "checkbox") {
					return true
				}
				return !(this.GetPM().ExecuteMethod("CanUpdate", av.GetName()))
			}
			function h(at, av, au) {
				if (!au.data.readOnly) {
					$(at).nextAll("span[id$='_icon']").click();
					return true
				}
				return false
			}
			function j(au, av, at) {
				if (av.GetUIType() == r && au.attr("autocomplete")) {
					if (au.autocomplete("widget").not(":hidden").length > 0) {
						au.val(au.autocomplete("widget").find(".ui-state-focus").html())
					}
				}
			}
			function C(at, ay, az) {
				if (az.keyCode === $.ui.keyCode.TAB) {
					m.call(this, az);
					j.call(this, at, ay, az);
					var aw = $("#s_" + this.GetPM().Get("GetFullId") + "_div"),
					aB = aw.find("[data-seq]").not(":hidden,:disabled"),
					aK = aB.index($(at)),
					aA = Number($(at).attr("data-seq"));
					if ((aK === -1) || (az.shiftKey && aK === 0)) {
						return
					}
					var aJ = null,
					aG = az.shiftKey ? aK - 1 : aK + 1,
					av = az.shiftKey ? 0 : aB.length,
					aH = az.shiftKey ? -1 : 1,
					aF = aG;
					if (aA == 0) {
						while (true) {
							if (Number(aB.eq(aF).attr("data-seq")) === 0) {
								aJ = aF;
								break
							}
							if (aF === av) {
								break
							}
							aF += aH
						}
					}
					if (aJ === null) {
						var aI = null,
						ax = null,
						aE = function (aM, aL) {
							return aM > aL
						},
						aD = function (aM, aL) {
							return aM < aL
						},
						au = az.shiftKey ? aD : aE;
						for (aF = 0, len = aB.length; aF < len; aF++) {
							if (aF !== aK) {
								var aC = Number(aB.eq(aF).attr("data-seq"));
								if ((!aI && au(aC, aA)) || aI && au(aC, aA) && au(aI, aC)) {
									aI = aC;
									ax = aF
								}
							}
						}
						if (ax) {
							aJ = ax
						}
					}
					if (aJ !== null) {
						aB.eq(aJ).focus();
						az.preventDefault()
					} else {
						V.call(this, az);
						az.preventDefault()
					}
				}
			}
			function G(au) {
				var ay = $("#s_" + this.GetPM().Get("GetFullId") + "_div"),
				ax = ay.find("[data-seq]").not(":hidden,:disabled"),
				at = ax.length,
				aA = -1,
				aw = -1;
				for (var av = at; av >= 0; av--) {
					var az = Number(ax.eq(av).attr("data-seq"));
					if (aA < az) {
						aA = az;
						aw = av
					}
				}
				ax.eq(aw).focus()
			}
			function V(av) {
				var au = $(av.target),
				ax = "SWEBottomHidden" + this.GetPM().Get("GetId"),
				aw = $("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, *[tabindex], *[contenteditable]").not(":hidden").add("a#" + ax).not("[tabindex=-1]"),
				at = aw.length;
				lastindex = aw.index($("#" + ax));
				if ((lastindex + 1) === at) {
					aw.eq(0).focus()
				} else {
					aw.eq(lastindex + 1).focus()
				}
			}
			function p() {
				if (this.GetPM().Get("isControlPopupOpen") === false) {
					var ax = this.GetPM().Get("GetActiveControl");
					if (ax) {
						var aw = $($('input[name="' + ax.GetInputName() + '"]')[0] || $("#" + ax.GetInputName())[0]);
						switch (ax.GetUIType()) {
						case r:
							aw.autocomplete("close");
							break;
						case M:
						case e:
						case af:
							aw.datetimepicker("hide");
							break;
						case y:
							aw.calculator("hide");
							break;
						case g:
							var av = $.data(this, "innerCtrlElem");
							if (av && av.hasOwnProperty("calc")) {
								var at = $(av.calc);
								if (at && at.size() > 0) {
									at.calculator("hide")
								}
							} else {
								if (av.hasOwnProperty("date")) {
									var au = $(av.date);
									if (au && au.size() > 0) {
										au.datetimepicker("hide")
									}
								}
							}
							break
						}
					}
				}
			}
			F.prototype.BindData = function () {
				SiebelAppFacade.PhysicalRenderer.superclass.BindData.call(this);
				this.ShowSelection()
			};
			F.prototype.ShowSelection = function (au) {
				if (this.inProgress) {
					return false
				}
				var av = this.GetPM(),
				at = av.Get("GetControls");
				for (var aw in at) {
					if (at.hasOwnProperty(aw)) {
						d.call(this, at[aw], au)
					}
				}
			};
			F.prototype.MaskLeaveField = function (at, aw) {
				if (at) {
					var av = this.GetUIWrapper(at);
					if (av) {
						var au = av.GetEl(this.GetPM().Get("GetSelection"));
						if (au && au.length) {
							if (aw) {
								au.data("inLeaveField", "true")
							} else {
								au.removeData("inLeaveField")
							}
						}
					}
				}
			};
			function d(av, ax) {
				var aD = !ax ? 0 : ax,
				au = this.GetPM(),
				at = av.GetName(),
				aw = av.GetFieldName(),
				aC = au.Get("IsInQueryMode"),
				az = au.Get("IsPure"),
				ay = au.ExecuteMethod("IsPrivateField", at);
				if ((!ar.IsEmpty(aw) || ay || !az) && av.GetUIType() !== ac) {
					var aB = "";
					if (aC || ay || !az) {
						aB = $("[name='" + av.GetInputName() + "']").val() || "";
						if ((at === Y.get("SWE_QUERY_COMBO_BOX") || at === Y.get("SWE_QUERY_SEARCH_SPEC") || at === Y.get("SWE_POPUP_QUERY_COMBO_BOX") || at === Y.get("SWE_POPUP_QUERY_SEARCH_SPEC")) && aB) {
							au.ExecuteMethod("LeaveField", av, aB, true);
							return
						} else {
							if ((aC && ay) || !aC || !az) {
								if (ax === undefined || ax === null) {
									aB = au.ExecuteMethod("GetFormattedFieldValue", av, false)
								} else {
									aB = au.ExecuteMethod("GetFormattedFieldValue", av, true, aD)
								}
							} else {
								var aA = au.Get("GetRecordSet");
								if (ar.IsEmpty(aA[aD][aw])) {
									aB = ""
								} else {
									aB = aA[aD][aw]
								}
							}
						}
					} else {
						if (ax === undefined || ax === null) {
							aB = au.ExecuteMethod("GetFormattedFieldValue", av, true)
						} else {
							aB = au.ExecuteMethod("GetFormattedFieldValue", av, true, aD)
						}
					}
					if (ax === undefined || ax === null) {
						this.EnableControl(av, au.ExecuteMethod("CanUpdate", at));
						this.SetControlValue(av, aB)
					} else {
						this.EnableControl(av, au.ExecuteMethod("CanUpdate", at), aD);
						this.SetControlValue(av, aB, aD)
					}
				}
			}
			F.prototype.IconMapFormatter = function (ax, aD, ay) {
				var at = "";
				var aC = SiebelApp.S_App.GetIconMap();
				var av = aC[SiebelApp.S_App.LookupStringCache(ax.GetIconMap())];
				if (av) {
					var aB = av.length;
					for (var az = 0; az < aB; az++) {
						var aw = av[az];
						var aE = $(aw.iconImage),
						au = ax.GetDisplayName();
						if (au) {
							var aA = aE.attr("alt");
							aE.attr("alt", (aA ? (au + ":" + aA) : aA));
							aA = aE.attr("title");
							aE.attr("title", (aA ? (au + ":" + aA) : aA));
							aE = aE[0].outerHTML
						} else {
							aE = aw.iconImage
						}
						if (!ar.IsEmpty(aD) && aw.iconName == aD) {
							return aE
						}
						if (aw.iconName == "Default") {
							at = aE
						}
					}
					if (!ar.IsEmpty(at)) {
						return at
					}
				}
				return ""
			};
			F.prototype.ControlHtmlFormatter = function (au, av, at, ax, aw) {
				if (at) {
					if (au.next("." + av).length === 1) {
						au.next("." + av).html(at)
					} else {
						au.after("<span class='" + av + "'>" + at + "</span>")
					}
					au.next("." + av).show()
				} else {
					au.next("." + av).hide()
				}
				if (ax || (!ax && ar.IsEmpty(aw))) {
					au.val(aw).show()
				} else {
					au.hide()
				}
			};
			F.prototype.SetControlValue = function (aw, aA, az) {
				var ay = (az === undefined || az === null) ? this.GetPM().Get("GetSelection") : az;
				switch (aw.GetUIType()) {
				case Z:
				case ap:
				case w:
					break;
				default:
					this.GetUIWrapper(aw).SetValue(aA, ay);
					return
				}
				var aB = !az ? 0 : az;
				var av = this.GetPM();
				var ax = $("#" + aw.GetInputName())[aB] || $("[name=" + aw.GetInputName() + "]")[aB];
				if (!ax) {
					return
				}
				ax = $(ax);
				switch (aw.GetUIType()) {
				case Z:
					if (aw.GetName() === "BookmarkURL" && this.GetPM().GetPMName() === "Bookmark URL Popup Applet (SWE)_PM") {
						var au = ax.replaceWith('<textarea name="' + aw.GetInputName() + '" class="siebui-bookmark-textarea" readonly="readonly" rows="3" cols="150" value=\'' + aA + "'>" + aA + "</textarea>")
					} else {
						this.GetUIWrapper(aw).SetValue(aA, ay)
					}
					break;
				case ap:
					ar.IsEmpty(aA) ? ax.html("") : ax.replaceWith(aA);
					break;
				case w:
					var at = ax.next("textarea");
					if (at.length > 0) {
						ar.IsEmpty(aA) ? at.val("") : at.val(aA)
					}
					break
				}
				ax = null
			};
			function z(au, av, at) {
				if (au) {
					var aw = av.nextAll("div#" + av.attr("name") + "_IPEField").text();
					av.nextAll("div#" + av.attr("name") + "_IPEField").hide();
					av.nextAll("img#" + av.attr("name") + "_icon").show();
					av.show();
					av.val(aw)
				} else {
					var aw = av.val();
					av.nextAll("div#" + av.attr("name") + "_IPEField").show();
					av.nextAll("img#" + av.attr("name") + "_icon").hide();
					av.hide();
					av.nextAll("div#" + av.attr("name") + "_IPEField").children().val(aw)
				}
				if (at !== true) {
					av.focus()
				}
			}
			function m(at) {
				if (this.GetPM()) {
					var au = this.GetPM();
					var av = $("#s_" + this.GetPM().Get("GetFullId") + "_div").find("div[id$='_IPEField']").filter(":hidden");
					var aw = av.prevAll("input.siebui-input-popup").eq(0);
					if ((av.length && at && at.keyCode === $.ui.keyCode.TAB) || document.activeElement !== aw[0]) {
						z.call(this, false, aw, true)
					}
				}
			}
			F.prototype.EnableControl = function (az, ay, av) {
				var ax,
				at,
				au;
				if (!n(az)) {
					return
				}
				var aA = (av === undefined || av === null) ? this.GetPM().Get("GetSelection") : av;
				av = !av ? 0 : av;
				switch (az.GetUIType()) {
				case al:
				case U:
				case M:
				case r:
				case O:
				case a:
				case S:
				case ad:
				case A:
				case g:
				case ag:
				case Z:
				case ah:
				case l:
				case B:
					this.GetUIWrapper(az).SetState(Y.get("EDITABLE"), ay, aA);
					return;
				case ac:
					this.GetUIWrapper(az).SetState(Y.get("ENABLE"), ay, aA);
					return
				}
				if (az.GetUIType() == w) {
					ax = $("[name=" + az.GetInputName() + "]");
					if (ax.length > 0) {
						ax.attr("readOnly", !ay).attr("aria-readonly", !ay);
						var aw = ax.parent().next().find("a.stripTagBtn");
						if (aw.length > 0) {
							ay ? $(aw).show() : $(aw).hide()
						}
					}
				} else {
					ax = $("#" + az.GetInputName())[av] || $("[name=" + az.GetInputName() + "]")[av];
					$(ax).removeAttr("readOnly").attr("readOnly", !ay).attr("aria-readonly", !ay)
				}
			};
			F.prototype.UpdateUIControls = function (at) {
				var at = this.GetPM().Get("GetControls");
				for (var av in at) {
					if (at.hasOwnProperty(av)) {
						var au = at[av];
						var aw = au.GetFieldName();
						if (!ar.IsEmpty(aw)) {
							this.EnableControl(au, this.GetPM().ExecuteMethod("CanUpdate", au.GetName()))
						}
					}
				}
			};
			F.prototype.UpdateUIButtons = function () {
				var at = this.GetPM().Get("GetControls");
				for (var av in at) {
					if (at.hasOwnProperty(av)) {
						var au = at[av];
						if (au.GetUIType() === ac) {
							var aw = this.GetPM().ExecuteMethod("CanInvokeMethod", au.GetMethodName());
							this.EnableControl(au, aw)
						}
					}
				}
			};
			F.prototype.FocusFirstControl = function () {
				var au = this.GetPM().Get("GetControls");
				var at = 9999;
				this.SetFirstControl(null);
				for (var ax in au) {
					if (au.hasOwnProperty(ax)) {
						var aw = au[ax];
						var ay = aw.GetFieldName();
						if (!ar.IsEmpty(ay)) {
							if (aw.GetIndex() && aw.GetIndex() < at) {
								var av = false;
								if (this.GetPM().Get("IsInQueryMode") === false) {
									av = this.GetPM().ExecuteMethod("CanUpdate", ax)
								} else {
									av = true
								}
								if (av && !ar.IsEmpty(aw.GetUIType()) && (aw.isBasicControl() || aw.GetUIType()[0] === "J" || aw.GetUIType() === ad || aw.GetUIType() === A)) {
									at = aw.GetIndex();
									this.SetFirstControl($("#" + aw.GetInputName())[0] || $("[name=" + aw.GetInputName() + "]")[0]);
									break
								}
							}
						}
					}
				}
				if (this.GetFirstControl() != null) {
					$(this.GetFirstControl()).focus();
					return
				}
				this.FocusFirstNonEditableControl()
			};
			F.prototype.FocusFirstNonEditableControl = function () {
				var au = this.GetPM().Get("GetControls");
				var at = 9999;
				var ay;
				for (var ax in au) {
					if (au.hasOwnProperty(ax)) {
						var aw = au[ax],
						av = aw.GetUIType();
						controlInputName = aw.GetInputName();
						if (aw.GetIndex() < at && (!ar.IsEmpty(av) && av !== "Button" && av !== "Label")) {
							this.SetFirstControl($("#" + controlInputName)[0] || $("[name=" + controlInputName + "]")[0]);
							break
						}
					}
				}
				ay = this.GetFirstControl();
				if (ay && $(ay).length > 0) {
					$(ay).focus()
				}
			};
			F.prototype.SetFocusToControl = function (av, au) {
				var at = this.GetPM().Get("GetControls");
				var aw = null;
				var ax = at[av],
				ay = this.GetPM().Get("GetSelection");
				if (ax) {
					if (!ar.IsEmpty(ax.GetMethodName())) {
						aw = $("#" + (ax.GetInputName() + "_Ctrl"));
						au ? $(aw).focus() : $(aw).blur()
					} else {
						this.GetUIWrapper(ax).SetState(Y.get("FOCUS"), au, ay)
					}
					return true
				}
			};
			function P(au, av) {
				var at = $("#s_" + this.GetPM().Get("GetFullId") + "_div");
				if (au) {
					at.addClass("Selected siebui-active").removeClass("NotSelected siebui-nonactive")
				} else {
					at.removeClass("Selected siebui-active").addClass("NotSelected siebui-nonactive")
				}
			}
			function b() {
				var au = $("#s_" + this.GetPM().Get("GetFullId") + "_div");
				var at = au.find("#a_" + this.GetPM().Get("GetId"))[0] || au;
				if ($(at).find(document.activeElement).length === 0) {
					$(at).attr("tabindex", 0).attr("title", au.attr("title")).focus()
				}
			}
			function n(at) {
				return (typeof(at.GetInputName) === "function")
			}
			F.prototype.InjectQTPInfo = function (au, at) {
				if ((au.length != 0) && (at != undefined)) {
					if (typeof(at.GetObjectType) == "function") {
						$(au).attr("ot", at.GetObjectType())
					}
					if (typeof(at.GetRepstrName) == "function") {
						$(au).attr("rn", at.GetRepstrName())
					}
					if (typeof(at.GetUIName) == "function") {
						$(au).attr("un", at.GetUIName())
					}
				}
			};
			F.prototype.InjectAppletQTPInfo = function (au) {
				var at = this.GetPM();
				if ((au.length != 0) && at) {
					if (typeof(at.Get("GetObjectType")) === "string") {
						$(au).attr("ot", at.Get("GetObjectType"))
					}
					if (typeof(at.Get("GetRepstrName")) === "string") {
						$(au).attr("rn", at.Get("GetRepstrName"))
					}
					if (typeof(at.Get("GetUIName")) === "string") {
						$(au).attr("un", at.Get("GetUIName"))
					}
				}
			};
			F.prototype.ShowPopup = function (at) {
				this.GetUIWrapper(at).OpenPopup()
			};
			F.prototype.GetPhysicalControlValue = function (av) {
				var au,
				at,
				aw = this.GetPM().Get("GetSelection");
				if (av) {
					this.GetPM().AddProperty("PhysicalCtrlVal", at);
					au = $("[name='" + av.GetInputName() + "']");
					at = this.GetUIWrapper(av).GetValue(aw) || "";
					if (this.GetPM().Get("IsInQueryMode") && av.GetCaseSensitive() && (at === SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_CSQ_WATERMARK"))) {
						at = ""
					}
					switch (av.GetUIType()) {
					case M:
					case e:
					case af:
						if (this.GetPM().Get("IsInQueryMode") === false) {
							at = ar.toISOFormat(ar.Trim(at), (av.GetUIType() !== M)) || at
						}
						break;
					case al:
						at = au.filter(":checked").val() || "";
						break;
					case r:
						if (!au.data("iscache")) {
							at = this.FormatDDInQueryMode(av, at)
						} else {
							at = this.GetPM().ExecuteMethod("GetFormattedFieldValue", av)
						}
						break
					}
					this.GetPM().AddProperty("PhysicalCtrlVal", at)
				}
			};
			function i() {
				var av = this.GetPM();
				var at = av.Get("GetControls");
				var aw = av.Get("IsInQueryMode");
				var au = null;
				av.ExecuteMethod("SetUpdateConditionals", false);
				for (var az in at) {
					if (at.hasOwnProperty(az)) {
						var ay = at[az];
						var ax = ay.GetMethodName();
						if ((az === Y.get("SWE_POPUP_QUERY_COMBO_BOX")) || az === Y.get("SWE_POPUP_QUERY_SEARCH_SPEC") || az === Y.get("SWE_POPUP_QUERY_EXECUTE") || az === Y.get("SWE_QUERY_COMBO_BOX") || az === Y.get("SWE_QUERY_SEARCH_SPEC")) {
							au = $("#" + (ay.GetInputName() + "_Ctrl"))[0] || $("#" + ay.GetInputName())[0];
							if ($(au).length === 0 && ar.IsEmpty(ay.GetFieldName())) {
								au = $('[name="' + ay.GetInputName() + '"]')[0]
							}
							au = $(au);
							if (aw) {
								au.attr("disabled", "disabled");
								if (az === "PopupQueryExecute") {
									if (au.hasClass("appletButton")) {
										au.removeClass("appletButton")
									}
									au.addClass("appletButtonDis")
								}
							} else {
								if (au.attr("disabled")) {
									au.removeAttr("disabled");
									if (az === "disabled") {
										if (au.hasClass("appletButtonDis")) {
											au.removeClass("appletButtonDis")
										}
										au.addClass("appletButton")
									}
								}
							}
							continue
						}
						if (ay.GetUIType() && ay.GetUIType()[0] == "J") {
							continue
						}
						au = $("#" + (ay.GetInputName() + "_Ctrl"))[0] || $("#" + ay.GetInputName())[0];
						if (!au && ar.IsEmpty(ay.GetFieldName())) {
							au = $('[name="' + ay.GetInputName() + '"]')[0]
						}
						au = $(au);
						if (az === "QueryAssistant") {
							if (aw) {
								if (au.attr("disabled")) {
									au.removeAttr("disabled");
									if (au.hasClass("appletButtonDis")) {
										au.removeClass("appletButtonDis")
									}
									au.addClass("appletButton")
								}
							} else {
								au.attr("disabled", "disabled");
								if (au.hasClass("appletButton")) {
									au.removeClass("appletButton")
								}
								au.addClass("appletButtonDis")
							}
						}
						if ((!aw && ar.IndexOf(["UndoQuery", "ExecuteQuery", "ShowQueryAssistant"], ax) !== -1) || (aw && ar.IndexOf(["NewQuery", "ToggleListRowCount"], ax) !== -1)) {
							$(au).styleHide()
						} else {
							if (!ar.IsEmpty(ax) && av.ExecuteMethod("CanInvokeMethod", ax)) {
								if ((ax !== "Drilldown") || !(au.nextAll("[id^='" + ay.GetInputName() + "']").is(":visible"))) {
									au.styleShow()
								}
							} else {
								if (aw && ax && ar.IndexOf(["Find", "AddRecords", "AddAllRecords", "DeleteRecords", "DeleteAllRecords"], ax) === -1) {
									au.styleHide()
								} else {
									au.styleShow()
								}
							}
						}
					}
				}
			}
			function an() {
				var at = this.GetPM().Get("GetControls");
				for (var au in at) {
					if (at.hasOwnProperty(au)) {
						this.GetUIWrapper(at[au]).BeginQuery()
					}
				}
			}
			function x() {
				var at = this.GetPM().Get("GetControls");
				for (var au in at) {
					if (at.hasOwnProperty(au)) {
						this.GetUIWrapper(at[au]).EndQuery()
					}
				}
			}
			function v() {
				var aw = this.GetPM();
				var au = aw.ExecuteMethod("GetWSStartRowNum");
				var ax = Number(aw.Get("GetRowListRowCount"));
				var ay = (ax > 1) ? Y.get("SWE_ROW_COUNTER_LIST") : Y.get("SWE_ROW_COUNTER_FORM");
				var at = [];
				var aA;
				var az;
				var aB;
				if (au === 0) {
					aA = Y.get("SWE_ROW_COUNTER_NO_RECORDS")
				} else {
					if (au > 0) {
						at.push(au);
						if (ax > 1) {
							at.push(Number(aw.Get("GetWSEndRowNum")))
						}
						at.push(Number(aw.Get("GetNumRows")));
						aA = ay + (aw.Get("IsNumRowsKnown") ? Y.get("SWE_ROW_COUNTER_TOTAL_KNOWN") : Y.get("SWE_ROW_COUNTER_TOTAL_UNKNOWN"))
					} else {
						if (au < 0 && au >= -1 * ax) {
							if (ax > 1) {
								at.push(Number(-1 * au))
							}
							aA = ay + Y.get("SWE_ROW_COUNTER_LAST_RECORD")
						} else {
							at.push(Number((-1 - au)));
							if (ax > 1) {
								at.push(Number(-1 - Number(aw.Get("GetWSEndRowNum"))))
							}
							aA = ay + Y.get("SWE_ROW_COUNTER_FROM_LAST")
						}
					}
				}
				az = SiebelApp.S_App.GetRowCounterTemplateMap(aA);
				aB = ar.FormatString(az, at);

              SiebelJS.Log("phyrenderer.js is accessed");

				var av = $("#s_" + aw.Get("GetId") + "_rc");

              SiebelJS.Log(av);

				av.addClass("siebui-row-counter").text(aB);

              if (av.hasClass("siebui-row-counter"))
              SiebelJS.Log(av.text());

				if (ar.IsTrue(SiebelApp.S_App.IsAutoOn())) {
					av.attr(consts.get("SWE_PROP_QTP_OT"), consts.get("SWE_CTRL_LABEL")).attr(consts.get("SWE_PROP_QTP_RN"), consts.get("SWE_ROW_COUNTER_NO_RECORDS")).attr(consts.get("SWE_PROP_QTP_UN"), aB)
				}
			}
			return F
		}
			());
		return "SiebelAppFacade.PhysicalRenderer"
	})
}
if (typeof(SiebelAppFacade.PopupRenderer) === "undefined") {
	SiebelJS.Namespace("SiebelAppFacade.PopupRenderer");
	define("siebel/popuprenderer", ["siebel/phyrenderer"], function () {
		SiebelAppFacade.PopupRenderer = (function () {
			var h = SiebelJS.Dependency("SiebelApp.Utils");
			var f = SiebelJS.Dependency("SiebelApp.Constants");
			var a = Number(f.get("DEFAULT_POPUP_WIDTH"));
			var e = Number(f.get("DEFAULT_POPUP_HEIGHT"));
			function b(l) {
				SiebelAppFacade.PopupRenderer.superclass.constructor.call(this, l)
			}
			SiebelJS.Extend(b, SiebelAppFacade.BasePR);
			b.prototype.Init = function () {
				SiebelAppFacade.PopupRenderer.superclass.Init.call(this);
				this.AttachPMBinding("state", g);
				this.AttachPMBinding("url", c);
				this.AttachPMBinding("content", i);
				this.AttachPMBinding("OnLoadPopupContent", k);
				this.AttachPMBinding("OnLoadPopupContent", j);
				this.AttachPMBinding("StandAlonePopup", this.ProcessStandAlonePopup)
			};
			function c() {
				SiebelApp.S_App.uiStatus.Busy();
				SiebelApp.contentUpdater.AddCallBack(this.GetPM().Get("url"), function () {
					this.ExecuteMethod("OnLoadPopupContent")
				}, this.GetPM());
				var l = $("[name=popup]");
				if (SiebelApp.S_App.GetEnablePerfHooks() && SiebelApp.S_App.GetTimer()) {
					SiebelApp.S_App.GetTimer().TimePopupApplet("", "Call GetLayout")
				}
				l.attr("src", this.GetPM().Get("url"));
				l = null;
				setTimeout(function () {
					SiebelApp.contentUpdater.loadContent(true)
				}, 1)
			}
			function i() {
				SiebelApp.S_App.uiStatus.Free();
				$("[name=popup]").children().remove();
				$("[name=popup]").addClass("minWidthContainer");
				$("[name=popup]").dialog("open");
				$("[name=popup]").html("");
				$("[name=popup]").append(this.GetPM().Get("content"))
			}
			function g() {
				var l = this.GetPM().Get("state");
				var u = this.GetPM().Get("isCurrencyOpen");
				var o = true;
				if (u) {
					o = false
				}
				if (l == f.get("POPUP_STATE_HIDDEN")) {
					$("[name=popup]").dialog("close");
					$("[name=popup]").parents(".ui-dialog").eq(0).removeClass("siebui-mvg-dialog");
					var m = $("div[name=popup]"),
					r = m.find("textarea"),
					v = r.length;
					for (var q = 0; q < v; q++) {
						var s = CKEDITOR.instances[$(r[q]).attr("name")];
						if (s) {
							s.destroy(true)
						}
					}
					m.children().remove().end().dialog("option", "buttons", {}).parent().find("div.ui-dialog-buttonset").empty();
					this.GetPM().SetProperty("isCurrencyOpen", false)
				} else {
					if (l == f.get("POPUP_STATE_VISIBLE")) {
						$("div[name=popup]").data("InitDlg", true);
						setTimeout(function () {
							$("div[name=popup]").removeData("InitDlg")
						}, 2);
						$("div[name=popup]").dialog("open");
						$("div[name=popup]").parents("div.ui-dialog").children("div.ui-dialog-titlebar").show();
						$("div[name=popup]").dialog("option", "height", "auto").dialog("option", "width", "auto").dialog("option", "resizable", o).dialog("option", "minWidth", a).dialog("option", "minHeight", e);
						$("div[name=popup]").dialog("option", "position", "center");
						var p = this.GetPM();
						var n;
						var t;
						$(".ui-widget-overlay").droppable({
							drop : function (z, E) {
								if (E.draggable && (E.draggable.is("tr.jqgrow") || E.draggable.is(".siebui-tile"))) {
									var w = E.draggable.attr("id");
									var F = false;
									if (w > 0) {
										var B = E.draggable.parent().parent().jqGrid("getRowData", w)
									}
									var H = $("#s_" + p.Get("baseParentAppletId") + "_div");
									if (H.length > 0) {
										var D = H.offset().top + H.height();
										var G = H.offset().left + H.width()
									}
									if ((H.offset().left < z.originalEvent.clientX && z.originalEvent.clientX < G) && (H.offset().top < z.originalEvent.clientY && z.originalEvent.clientY < D)) {
										if (p.Get("isPopupPick")) {
											n = p.Get("PickAppletObject");
											n.GetPModel().ExecuteMethod("SetSelectionOnDragNDrop", w);
											F = n.GetPModel().ExecuteMethod("HandleDragNDropInPopup", "PickRecord")
										}
										if (p.Get("isPopupMVGAssoc")) {
											t = p.Get("MVGAssocParentAppletObject");
											if (!p.Get("ismultislectmode")) {
												t.GetPModel().ExecuteMethod("SetSelectionOnDragNDrop", w)
											}
											var C = t.GetPModel().ExecuteMethod("HandleDragNDropInPopup", "AddRecords");
											if (C) {
												F = t.GetPModel().ExecuteMethod("HandleDragNDropInPopup", "CloseApplet")
											}
										}
										if (p.Get("isPopupAssoc")) {
											var A = CCFMiscUtil_CreatePropSet();
											n = p.Get("AssocAppletObject");
											if (!p.Get("ismultislectmode")) {
												n.GetPModel().ExecuteMethod("SetSelectionOnDragNDrop", w)
											}
											F = n.GetPModel().ExecuteMethod("HandleDragNDropInPopup", "AddRecord")
										}
										if (!F) {
											E.draggable.animate(E.draggable.data().origPosition, "slow")
										} else {
											E.draggable.detach();
											p.SetProperty("isPopupPick", false);
											p.SetProperty("isPopupMVGAssoc", false);
											p.SetProperty("isPopupMVGSelected", false);
											p.SetProperty("isPopupAssoc", false)
										}
									} else {
										E.draggable.animate(E.draggable.data().origPosition, "slow")
									}
									p.SetProperty("ismultislectmode", false)
								}
							}
						});
						k.call(this);
						SiebelApp.S_App.uiStatus.LocalBusy({
							mask : true
						})
					}
				}
			}
			function j() {
				var l = Number(this.GetPM().Get("width")) || 0;
				var m = false;
				var n = $("div[name=popup]");
				if (n.find("div.ui-jqgrid").length > 0) {
					if (l === a) {
						l *= 2
					}
					n.width(l);
					$(window).resize()
				} else {
					if (l < a) {
						n.width(a)
					} else {
						m = true
					}
				}
				if (m) {
					setTimeout(function () {
						var p = $("div[name=popup]"),
						o = p.width();
						if (p[0] && p[0].scrollWidth > o && p[0].scrollWidth < l) {
							o = p[0].scrollWidth
						}
						p.width(o).dialog("option", "position", "center")
					}, 3)
				} else {
					n.dialog("option", "position", "center")
				}
				n = null
			}
			function k() {
				if (this.GetPM().Get("currPopups") && this.GetPM().Get("currPopups")[0]) {
					$("[name='popup']").dialog("option", "title", SiebelApp.S_App.LookupStringCache(this.GetPM().Get("currPopups")[0].GetTitle()));
					if (h.IsTrue(SiebelApp.S_App.IsAutoOn())) {
						$("div[name=popup]").parent(".ui-dialog").find("span.ui-dialog-title").attr("ot", "popup").attr("rn", "popup").attr("un", this.GetPM().Get("currPopups")[0].GetUIName() + " popup")
					}
				} else {
					$("[name='popup']").dialog("option", "title", "")
				}
			}
			b.prototype.BindData = function () {
				SiebelAppFacade.PopupRenderer.superclass.BindData.call(this)
			};
			b.prototype.ShowUI = function () {
				SiebelAppFacade.PopupRenderer.superclass.ShowUI.call(this);
				if ($("[name=popup]").length === 0) {
					var l = $('<div name="popup"></div>');
					var m = SiebelApp.S_App.GetDirection();
					SiebelApp.S_App.GetTargetViewContainer().append(l);
					SiebelApp.S_App.uiStatus.LocalBusy({
						target : "[name=popup]",
						mask : false
					});
					var n = $("div[name=popup]");
					n.dialog({
						position : "center",
						modal : true,
						autoOpen : false,
						closeOnEscape : false,
						resize : d
					});
					n.parent().find(".ui-dialog-titlebar-close").attr("title", SiebelApp.S_App.LocaleObject.GetLocalString("IDS_MSG_CLOSE"));
					n.parents("div.ui-dialog").children("div.ui-dialog-titlebar").removeAttr("role").children("span.ui-dialog-title").addClass(m ? "ui-dialog-title-rtl" : "").next().addClass(m ? "ui-dialog-titlebar-close-rtl" : "").removeClass(m ? "ui-dialog-titlebar-close" : "")
				}
			};
			function d(l, m) {
				if ($(this).width() !== m.size.width) {
					$(this).width("auto")
				}
			}
			b.prototype.BindEvents = function () {
				SiebelAppFacade.PopupRenderer.superclass.BindEvents.call(this);
				var l = $("[name=popup]");
				l.data("context", this);
				l.dialog({
					beforeClose : function (m, n) {
						if (!$("div[name=popup]").data("InitDlg")) {
							if ($(m.currentTarget, "[class*=ui-dialog-titlebar-close]").length > 0) {
								if (h.Confirm(SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_POPUP_CLOSEBYX_WARNING"))) {
									$("[name=popup]").data("context").GetPM().OnControlEvent("ClosePopupByX", m);
									return true
								}
								return false
							}
						} else {
							return false
						}
					}
				})
			};
			b.prototype.ProcessStandAlonePopup = function (o, l, n) {
				n = n || "subWind";
				var m = window.open(o, n, l)
			};
			return b
		})();
		return SiebelAppFacade.PopupRenderer
	})
};
