if (typeof(SiebelApp.S_App.ListApplet) === "undefined") {
	SiebelJS.Namespace("SiebelApp.S_App.ListApplet");
	SiebelApp.S_App.ListApplet = (function () {
		var w = SiebelJS.Dependency("SiebelApp.Utils");
		var p = SiebelJS.Dependency("SiebelApp.Constants");
		var f = p.get("SWE_PST_COL_LIST");
		var A = p.get("SWE_FIELD_STR");
		var d = p.get("SWE_ROW_STR");
		var j = p.get("SWE_ROW_ID_STR");
		var z = p.get("SWE_APPLET_STR");
		var m = p.get("SWE_ACTIVE_APPLET_STR");
		var v = p.get("SWE_ROW_IDS_STR");
		var u = p.get("SWE_METHOD_STR");
		var o = p.get("SWE_VIEW_ID_STR");
		var e = p.get("SWE_VIEW_ARG");
		var h = p.get("SWE_REQ_ROW_ID_STR");
		var k = p.get("SWE_SHOW_POPUP_STR");
		var a = p.get("SWE_LPF_TILDE");
		var s = p.get("SWE_LPF_PIPE");
		var t = p.get("SWE_BCF_FIELD");
		function g() {
			SiebelApp.S_App.ListApplet.superclass.constructor.call(this);
			var F = {};
			var E = {};
			var G = [];
			var H = "";
			this.GetControlPS().SetType(p.get("SWE_PST_COL_LIST"));
			var C = p.get("DELT_ROWCOUNT");
			var B = false;
			var D = {};
			this.GetRowListRowCount = function () {
				return Number(C)
			};
			this.SetRowListRowCount = function (I) {
				C = I
			};
			this.GetRowsSelectedArray = function () {
				return G
			};
			this.GetListCol = function (I) {
				return F[I]
			};
			this.GetListOfColumns = function () {
				return F
			};
			this.RemoveColumns = function () {
				E = null;
				E = {};
				for (var I in F) {
					if (!F[I].IsClientCtrl()) {
						delete F[I]
					}
				}
			};
			this.GetColumnsByFieldName = function () {
				return E
			};
			this.GetListPrefs = function () {
				return H
			};
			this.SetListPrefs = function (I) {
				H = I
			};
			this.GetBeginRow = function () {
				return (this.GetBusComp() ? this.GetBusComp().GetNotifyObject().GetBegRow(this.GetName()) : null)
			};
			this.GetHasTotalRow = function () {
				return B
			};
			this.SetHasTotalRow = function (I) {
				B = I
			};
			this.GetTotalMap = function () {
				var M = this.GetBusComp();
				if (M) {
					var J = M.GetTotalsChanged();
					if (J) {
						D = {};
						var L = this.GetListOfColumns(),
						K = null;
						for (var I in L) {
							if (L.hasOwnProperty(I)) {
								K = L[I].GetFieldName();
								if (K && M.GetField(K)) {
									D[K] = J[M.GetField(K).index];
									if (!D[I]) {
										D[I] = ""
									}
								}
							}
						}
					}
				}
				return D
			};
			this._ListAppEndLife = function () {
				E = null;
				F = null
			}
		}
		SiebelJS.Extend(g, SiebelApp.S_App.Applet);
		function q(B) {
			this.GetListOfColumns()[B.GetName()] = B;
			this.GetColumnsByFieldName()[B.GetFieldName()] = B;
			this.GetControls()[B.GetName()] = B
		}
		g.prototype.EndLife = function () {
			var B = this.GetListOfColumns();
			for (var C in B) {
				if (B.hasOwnProperty(C)) {
					delete B[C]
				}
			}
			B = null;
			this._ListAppEndLife();
			SiebelApp.S_App.ListApplet.superclass.EndLife.call(this)
		};
		g.prototype.GetPropArray = function () {
			var B = SiebelApp.S_App.ListApplet.superclass.GetPropArray.call(this);
			return B.concat(["GetListOfColumns", "GetRowsSelectedArray", "GetRowIdentifier", "HasHierarchy", "GetRowListRowCount", "GetBeginRow", "GetHasTotalRow", "GetTotalMap"])
		};
		g.prototype.Show = function () {
			if (this.GetListPrefs()) {
				i.call(this)
			}
			SiebelApp.S_App.ListApplet.superclass.Show.call(this)
		};
		g.prototype.ShowOnly = function () {
			if (this.GetListPrefs()) {
				i.call(this)
			}
			SiebelApp.S_App.ListApplet.superclass.ShowOnly.call(this)
		};
		g.prototype.GetSelection = function () {
			return !!this.GetBusComp() ? (this.GetBusComp().GetSelection() - (this.GetBeginRow() || 0)) : -1
		};
		function i() {
			var E = "";
			var K = "";
			var P = "";
			var G = 0;
			var D = 0;
			var B = null;
			var N = this.GetListOfColumns();
			var R = "";
			var L = [];
			var J = 0;
			var O = 0;
			var Q = [];
			if (!N) {
				return
			}
			for (var C in N) {
				if (N.hasOwnProperty(C)) {
					++O
				}
			}
			R = this.GetListPrefs();
			J = R.indexOf(a);
			if (J < 0) {
				R = ""
			} else {
				L = R.split(a)
			}
			for (var I = 1; I < L.length && D < O; I++) {
				Q = [];
				K = L[I];
				Q = K.split(s);
				if (Q.length > 0 && Q[0] === "0") {
					P = Q[1];
					G = Q[2]
				} else {
					continue
				}
				for (var M in N) {
					if (N.hasOwnProperty(M)) {
						B = N[M];
						if (B.GetName() === P) {
							N[M].SetWidth(G);
							N[M].SetColNum(D);
							D++;
							break
						}
					}
				}
			}
			for (var H in N) {
				if (N.hasOwnProperty(H)) {
					if (w.IsTrue(N[H].IsDynamic())) {
						for (var F in N) {
							if (N.hasOwnProperty(F)) {
								if ((N[F].GetColNum() >= N[H].GetColNum()) && !w.IsTrue(N[F].IsDynamic())) {
									this.GetListOfColumns()[F].SetColNum(N[F].GetColNum() + 1)
								}
							}
						}
					}
				}
			}
		}
		g.prototype.HasDynamicColumns = function () {
			var C = this.GetListOfColumns();
			if (C) {
				for (var B in C) {
					if (C.hasOwnProperty(B)) {
						if (w.IsTrue(C[B].IsDynamic())) {
							return true
						}
					}
				}
			}
			return false
		};
		g.prototype.Initialize = function () {
			var B = this.GetBusComp();
			if (B) {
				B.SetWorkSetSize(this.GetName(), this.GetRowListRowCount())
			}
			SiebelApp.S_App.ListApplet.superclass.Initialize.call(this)
		};
		g.prototype.GetMethodArray = function () {
			var B = SiebelApp.S_App.ListApplet.superclass.GetMethodArray.call(this);
			return B.concat(["HandleRowSelect", "OnVerticalScroll", "SetMultiSelectMode", "OnClickSort", "OnCtrlBlur", "OnCtrlFocus", "OnDrillDown", "CellChange", "UpdateColIndex", "UpdateColWidth", "DisplaySortInfo"])
		};
		g.prototype.ProcessObjectInfo = function (B) {
			SiebelApp.S_App.ListApplet.superclass.ProcessObjectInfo.call(this, B);
			var C = SiebelApp.S_App.GetPopupPM();
			if (C.Get("state") === p.get("POPUP_STATE_VISIBLE")) {
				if (typeof(this.GetPopupAppletName) !== "undefined") {
					if (typeof(this.GetPickAppletName) !== "undefined") {
						C.SetProperty("isPopupPick", true);
						C.SetProperty("PickAppletObject", this);
						C.SetProperty("baseParentAppletId", this.GetParentApplet().GetFullId())
					} else {
						if (typeof(this.GetAssocAppletName) !== "undefined") {
							C.SetProperty("isPopupAssoc", true);
							C.SetProperty("AssocAppletObject", this);
							C.SetProperty("baseParentAppletId", this.GetParentApplet().GetFullId())
						} else {
							if (typeof(this.GetMvgSelectedAppletName) !== "undefined") {
								C.SetProperty("isPopupMVGSelected", true);
								C.SetProperty("MVGSelectedAppletObject", this);
								C.SetProperty("baseParentAppletId", this.GetParentApplet().GetFullId())
							} else {
								if (typeof(this.GetMvgAssocAppletName) !== "undefined") {
									C.SetProperty("isPopupMVGAssoc", true);
									C.SetProperty("MVGAssocAppletObject", this);
									C.SetProperty("MVGAssocParentAppletObject", this.GetParentApplet());
									C.SetProperty("parentAppletId", this.GetParentApplet().GetFullId());
									C.SetProperty("baseParentAppletId", this.GetParentApplet().GetParentApplet().GetFullId())
								} else {
									C.SetProperty("isPopupNonStandard", true);
									C.SetProperty("NonStandardAppletObject", this);
									this.GetParentApplet() ? C.SetProperty("baseParentAppletId", this.GetParentApplet().GetFullId()) : C.SetProperty("baseParentAppletId", null)
								}
							}
						}
					}
				}
			}
		};
		g.prototype.ProcessSelfProps = function (B) {
			SiebelApp.S_App.ListApplet.superclass.ProcessSelfProps.call(this, B);
			this.SetListPrefs(B.GetProperty(p.get("SWE_PROP_PREFERENCES")));
			var C = B.GetProperty(p.get("SWE_PROP_ROW_COUNT"));
			if (!w.IsEmpty(C)) {
				this.SetRowListRowCount(C)
			}
			if (w.IsTrue(B.GetProperty(p.get("SWE_PROP_HAS_TOTAL")))) {
				this.SetHasTotalRow(true)
			}
			this.SetOnLoadRowSelection(B)
		};
		g.prototype.ProcessListControlInfo = function (B) {
			var C = new SiebelApp.S_App.AppletControl();
			C.SetApplet(this);
			C.SetClientCtrl(B.PropertyExists(p.get("SWE_PROP_IS_CLIENT_CTRL")) ? true : false);
			C.ProcessObjectInfo(B);
			q.call(this, C)
		};
		g.prototype.ProcessChildrenProps = function (C) {
			var E = w.Curry(SiebelApp.S_App.constructor.prototype.DefineAccessor, this, C);
			var K = C.GetType();
			var D = p.get("SWE_PST_ACCESSIBILITY_INFO");
			var J = p.get("SWE_PST_REMOVE_COL_LIST");
			switch (K) {
			case f:
				var G = this.GetControlPS();
				var F;
				var H = C.EnumChildren(true);
				if (G && G.GetChildCount() > 0) {
					F = G.EnumChildren(true)
				}
				while (H || F) {
					var I = -1;
					var B = -1;
					if (F) {
						B = parseInt(F.GetProperty(p.get("SWE_PROP_COLINDEX")), 10)
					}
					if (H) {
						I = parseInt(H.GetProperty(p.get("SWE_PROP_COLINDEX")), 10)
					}
					if ((F && B <= I) || (!H && F)) {
						if (SiebelApp.S_App.LookupStringCache(F.GetProperty(p.get("SWE_PROP_TYPE"))) === p.get("SWE_CTRL_COMBOBOX")) {
							SiebelApp.S_App.SetStaticPickValues(SiebelApp.S_App.LookupStringCache(F.GetProperty(p.get("SWE_PROP_PICK_APLT"))), F.GetProperty(p.get("SWE_PROP_CLIENT_CTRL_PICK_VAL")))
						}
						this.ProcessListControlInfo(F);
						F = G.EnumChildren(false)
					} else {
						if (H) {
							this.ProcessListControlInfo(H);
							H = C.EnumChildren(false)
						}
					}
					if (H) {
						H.SetPropertyStr(p.get("SWE_PROP_COLINDEX"), ++I)
					}
				}
				break;
			case J:
				this.RemoveColumns();
				SiebelApp.S_App.ListApplet.superclass.ProcessChildrenProps.call(this, C);
				break;
			case D:
				E("GetRowIdentifier", "SWE_PST_ACCESSIBILITY_ROWID");
				if (this.GetRowIdentifier() == undefined) {
					this.GetRowIdentifier = function () {
						return ""
					}
				}
				SiebelApp.S_App.ListApplet.superclass.ProcessChildrenProps.call(this, C);
				break;
			default:
				SiebelApp.S_App.ListApplet.superclass.ProcessChildrenProps.call(this, C);
				break
			}
			if (this.GetRowIdentifier == undefined || this.GetRowIdentifier() == undefined) {
				this.GetRowIdentifier = function () {
					return ""
				}
			}
		};
		g.prototype.SetOnLoadRowSelection = function (B) {
			var F = B.GetProperty(p.get("SWE_PROP_ROW_SELECTION"));
			if (!w.IsEmpty(F)) {
				var C = [];
				CCFMiscUtil_StringToArray(F, C);
				x.call(this, null, C)
			} else {
				var E = this.GetSelection();
				if (!w.IsEmpty(E)) {
					for (var D = 0; D < E; D++) {
						this.GetRowsSelectedArray()[D] = false
					}
					this.GetRowsSelectedArray()[D] = true
				}
			}
			return true
		};
		function x(C, E) {
			if (!this.CanUpdateUI()) {
				return
			}
			if (E.length > 0) {
				var B = E[0];
				if (B === this.GetName()) {
					E.shift();
					y.call(this, E);
					var D = {};
					D.ev = p.get("EVENT_ROW_SELECTION");
					this.SetUIEventMap(D)
				}
			}
		}
		function y(D) {
			this.GetRowsSelectedArray().splice(0, this.GetRowsSelectedArray().length);
			var C;
			for (var B = 0; B < D.length; B++) {
				switch (D[B]) {
				case "0":
					C = false;
					break;
				case "1":
					C = true;
					break;
				default:
					continue
				}
				this.GetRowsSelectedArray().push(C)
			}
		}
		g.prototype.NotifyGeneric = function (C, B) {
			if (C === "SWEIRowSelection") {
				x.call(this, C, B)
			} else {
				SiebelApp.S_App.ListApplet.superclass.NotifyGeneric.call(this, C, B)
			}
		};
		g.prototype.GetRecordSet = function (B) {
			var C = [];
			C = c.call(this);
			g.prototype.GetRecordSet = function (D) {
				if (!D) {
					C = [];
					C = c.call(this)
				}
				return C
			};
			return C
		};
		function c() {
			var J = SiebelApp.S_App.ListApplet.superclass.GetRecordSet.call(this);
			var C = J.length,
			H = [];
			var B = this.GetBusComp();
			var D = B ? w.IsTrue(B.IsHierarchyBusComp()) : false;
			var I = D ? B.GetHierarchyParentId() : null;
			if (this.IsInQueryMode()) {
				H = J
			} else {
				var F = this.GetColumnsByFieldName(),
				K = null;
				for (var E = 0; E < C; E++) {
					var G = {};
					for (K in F) {
						if (F.hasOwnProperty(K)) {
							G[K] = this.GetFormattedFieldValue(F[K], true, E)
						}
					}
					if (D) {
						G["Outline Number"] = J[E]["Outline Number"];
						G["Has Children"] = J[E]["Has Children"];
						G["Is Expanded"] = J[E]["Is Expanded"];
						G.Id = J[E]["Id"];
						G[I] = J[E][I]
					}
					H.push(G)
				}
				if (D) {
					H = this.GetBusComp().UpdateHierInfo(H)
				}
				listCols = F = null
			}
			return H
		}
		g.prototype.GetRecord = function (B) {
			return this.GetRecordSet(true)[this.GetBeginRow() + B]
		};
		g.prototype.GetAllFieldValues = function (E, G) {
			var C = this.GetBusComp();
			if (C.GetParentBusComp()) {
				var D = this.GetListOfColumns();
				for (var B in D) {
					if (D.hasOwnProperty(B)) {
						var F = D[B];
						E.SetProperty(F.GetSpanPrefix() + G, C.GetFieldValue(F.GetFieldName()))
					}
				}
			}
		};
		g.prototype.GetDrilldownURL = function (B, F, E) {
			var D = CCFMiscUtil_CreatePropSet();
			var C = this.GetListCol(B);
			B = C.GetSpanPrefix() + F;
			D.SetProperty(A, B);
			D.SetProperty(d, F);
			D.SetProperty(j, E);
			this.GetRowIds(D);
			this.GetAllFieldValues(D, F);
			D.SetProperty(z, this.GetName());
			D.SetProperty(m, this.GetName());
			return SiebelApp.S_App.GetDrilldownURL(D)
		};
		g.prototype.OnDrillDown = function (B, I) {
			var E = CCFMiscUtil_CreatePropSet(),
			F = this.GetListOfColumns(),
			G = this.GetView(),
			H = true,
			C = false,
			D;
			if (G && !G.SetActiveApplet(this)) {
				G.ProcessError();
				H = false
			}
			if (H) {
				this.GetBusComp().SetCurRow(this.GetName(), I - 1);
				if (this.PostChangesToBC(true, null)) {
					for (var J in F) {
						if (F.hasOwnProperty(J)) {
							if (B === J) {
								D = F[J]
							}
						}
					}
					E.SetProperty(A, (D.GetSpanPrefix() + I));
					E.SetProperty(d, I);
					this.GetRowIds(E);
					E.SetProperty(z, this.GetName());
					E.SetProperty(m, this.GetName());
					E.SetProperty(t, B);
					C = this.InvokeMethod("Drilldown", E, true)
				}
			}
			return C
		};
		g.prototype.HandleRowSelect = function (F, G, D) {
			var C = true;
			var H = new SiebelApp.UIStatus();
			if (this.IsInQueryMode()) {
				return true
			}
			var E = CCFMiscUtil_CreatePropSet();
			var B = "PositionOnRow";
			SiebelApp.S_App.OfflineCallMethod("HandleRowSelect", F);
			B += ((G === true) ? "1" : "0") + ((D === true) ? "1" : "0") + "0";
			E.SetProperty(u, B);
			E.SetProperty(o, "");
			if (!w.IsEmpty(this.GetView())) {
				E.SetProperty(e, this.GetView().GetName())
			}
			E.SetProperty(z, this.GetName());
			E.SetProperty(d, F);
			E.SetProperty(h, "1");
			E.SetProperty(k, "false");
			return this.InvokeControlMethod(B, E, true)
		};
		g.prototype.NotifyNewPrimary = function (G) {
			var D = this.GetBusComp();
			var E;
			if (w.IsEmpty(D)) {
				return
			}
			E = D.GetNotifyObject();
			if (!E || !E.Get_EnableUIUpdate(this.GetName())) {
				return
			}
			var C;
			var F = D.GetRawRecords().length;
			var B = D.GetSelection();
			for (C = 0; C < F; C++) {
				D.SetSelection(C);
				this.RepopulateField(G, true, false)
			}
			D.SetSelection(B)
		};
		g.prototype.NotifyNewActiveRow = function () {
			var B = this.GetBusComp().GetNotifyObject();
			if (!B || !B.Get_EnableUIUpdate(this.GetName())) {
				return
			}
		};
		g.prototype.NotifyEndQuery = function () {
			var B;
			if (w.IsEmpty(this.GetBusComp())) {
				return
			}
			B = this.GetBusComp().GetNotifyObject();
			if (!B || !B.Get_EnableUIUpdate(this.GetName())) {
				return
			}
			B.SetDoPopulate(this.GetName(), true);
			this.GetBusComp().SetSelection(this.GetBusComp().GetSelection());
			SiebelApp.S_App.ListApplet.superclass.NotifyEndQuery.call(this)
		};
		g.prototype.NotifyExecute = function () {
			var C;
			if (w.IsEmpty(this.GetBusComp())) {
				return
			}
			var B = this.GetBusComp().GetSortSpec();
			if (B) {
				l.call(this, B)
			}
			C = this.GetBusComp().GetNotifyObject();
			if (!C || !C.Get_EnableUIUpdate(this.GetName())) {
				return
			}
			C.SetDoPopulate(this.GetName(), true);
			this.GetBusComp().SetSelection(this.GetBusComp().GetSelection())
		};
		g.prototype.DoExecuteUIUpdate = function () {
			var B;
			if (w.IsEmpty(this.GetBusComp())) {
				return
			}
			B = this.GetBusComp().GetNotifyObject();
			if (!B || !B.Get_EnableUIUpdate(this.GetName())) {
				return
			}
			if (B.Get_DoPopulate(this.GetName())) {
				this.RefreshData(true);
				this.ShowSelection();
				//***************KC MP, CDREQ-1796, STEST-5252 ****
				try{
					var PM = this;
					setTimeout(function(){
						var id = PM.GetFullId();
						var div = $("#" + id + " .siebui-applet-active")[0];
						var input = $("#" + id + " div.ui-jqgrid-bdiv tbody tr :input:not(.cbox)").length;//STEST-8463
						if(div !== undefined && input==0){
							PM.RestoreControlFocus();
							console.log("Restore Control Focus");
						}
					}, 1000);
				}
				catch(e){
					console.log("Error in STEST-5252 fix: " + e);
				}
				//*************** STEST-5252 end ******************
				if (SiebelApp.S_App.GetEnablePerfHooks() && SiebelApp.S_App.GetTimer()) {
					SiebelApp.S_App.GetTimer().TimePopulateApplet(this.GetName(), "Finished Populate Applet")
				}
			}
			if (this.GetUpdateConditionals()) {
				this.UpdateConditionals()
			}
			this.InvokeStateChange();
			B.Set_DoPopulate(this.GetName(), false);
			this.SetScrollDir(null);
			this.SetScrollAmount(0)
		};
		g.prototype.OnCtrlFocus = function (D, C, B) {
			return this.EnterField(C, B, false)
		};
		g.prototype.EnterField = function (D, B, C) {
			var E = this.GetPrsrvControl();
			this.SetPrsrvControl(this.GetActiveControl());
			if (this.GetView()) {
				if (!(this.GetView().SetActiveApplet(this))) {
					this.GetView().ProcessError();
					this.SetPrsrvControl(E);
					return false
				}
			}
			if (D.GetCaseSensitive() && this.IsInQueryMode()) {
				this.UpdateCSQueryMsg(true)
			}
			this.SetActiveControl(D);
			return true
		};
		g.prototype.OnCtrlBlur = function (D, C, B) {
			return this.LeaveField(C, B, false)
		};
		g.prototype.LeaveField = function (G, K, H) {
			var I = this.GetBusComp();
			var E = G.GetFieldName();
			if (!G && !this.GetActiveControl()) {
				return true
			}
			var C = this.GetFormattedValue(G);
			var F = this.TransformValue(G, K, C);
			if (F !== null) {
				SiebelApp.S_App.OfflineCallMethod("PassOldValue", this, G, K, C);
				if (this.IsInQueryMode() && !w.IsEmpty(E)) {
					var J = G.GetUIType();
					if (J == p.get("SWE_CTRL_DATE_TZ_PICK") || J == p.get("SWE_CTRL_DATE_TIME_PICK") || J == p.get("SWE_CTRL_DATE_PICK")) {
						if (K && !K.match(/[><=!&|]/g)) {
							F = this.AssignQuotes(G, F, K)
						}
					}
					if (!w.IsEmpty(E) && !G.IsClientCtrl()) {
						I.SetFieldValue(E, F)
					}
				} else {
					if (this.CanUpdate(G.GetName()) && (this.IsPrivateField(G.GetName()) || I.GetSelection() >= 0)) {
						var B;
						var J = G.GetUIType();
						if (J == p.get("SWE_CTRL_COMBOBOX")) {
							B = this.GetFormattedFieldValue(G, true)
						}
						if (!G.IsClientCtrl()) {
							var D = this.ProcessFormattedValue(G, F, K, C, B, H);
							if (!D) {
								return false
							}
						} else {
							this.OnActionsSetFormattedValue(G, K, C, B, H, true)
						}
					}
				}
			}
			if (!H) {
				if (this.GetActiveControl()) {
					this.SetPrsrvControl(this.GetActiveControl());
					if (G.GetCaseSensitive() && this.IsInQueryMode()) {
						this.UpdateCSQueryMsg(false)
					}
					this.SetActiveControl(null)
				}
			}
			if (G.IsClientCtrl()) {
				return F
			}
			return true
		};
		g.prototype.SetFormattedValue = function (B, E) {
			var D = B.GetName();
			var H = 0;
			var G = false;
			var C,
			F;
			if (this.IsPrivateField(D)) {
				var J = this.GetPrivateFieldMap()[D];
				if (J.bInList && this.GetBusComp()) {
					H = this.GetBusComp().GetSelection()
				}
				if (this.IsInQueryMode()) {
					this.GetPrivateFieldMap()[D].queryModeVal = String(E)
				} else {
					if (J.valueArray.length > H) {
						if (J.valueArray[H] != E) {
							this.GetPrivateFieldMap()[D].valueArray[H] = String(E);
							this.GetPrivateFieldMap()[D].bDirty = true;
							if (this.GetPrivateFieldMap()[D].allowPostChanges) {
								G = true
							}
						}
					} else {
						this.GetPrivateFieldMap()[D].valueArray.push(E);
						this.GetPrivateFieldMap()[D].bDirty = true;
						if (this.GetPrivateFieldMap()[D].allowPostChanges) {
							G = true
						}
					}
				}
				this.CellChange(this.GetSelection(), D, E)
			}
			if (!w.IsEmpty(B.GetFieldName())) {
				C = this.GetFormattedValue(B, true);
				if ((C === E) && (!this.IsPrivateField(D))) {
					F = true
				} else {
					F = this.GetBusComp().SetFormattedValue(B.GetFieldName(), E, B.GetDisplayFormat());
					if (!F) {
						this.CellChange(this.GetSelection(), D, C);
						this.SetFocusToCtrl(D, true);
						return F
					}
				}
			} else {
				if (!G) {
					return true
				}
			}
			var I = this.GetBusComp().GetField(B.GetFieldName());
			E = this.GetFormattedValue(B, true);
			if (I && (C != E) && (I.IsPostChanges() || I.IsBoundedPick())) {
				F = this.PostChangesToBC(false, B.GetFieldName())
			}
			return F
		};
		g.prototype.OnClickSort = function (B, H) {
			var E = this.GetListOfColumns();
			var D;
			for (var C in E) {
				if (E.hasOwnProperty(C)) {
					D = E[C];
					if (D.GetName() === B) {
						break
					}
				}
			}
			var G = D.GetSpanPrefix() + "0";
			var F = CCFMiscUtil_CreatePropSet();
			F.SetProperty(A, G);
			switch (H) {
			case p.get("SORT_ASCENDING"):
				this.InvokeMethod("SortAscending", F, true);
				break;
			case p.get("SORT_DESCENDING"):
				this.InvokeMethod("SortDescending", F, true);
				break;
			default:
				return
			}
			return
		};
		g.prototype.OnVerticalScroll = function (C) {
			var B = null;
			if (this.GetView()) {
				if (!this.GetView().SetActiveApplet(this)) {
					this.GetView().ProcessError();
					return false
				}
			}
			switch (C) {
			case p.get("PAG_PREV_SET"):
				B = "GotoPreviousSet";
				break;
			case p.get("PAG_NEXT_SET"):
				B = "GotoNextSet";
				break;
			case p.get("PAG_NEXT_RECORD"):
				B = "GotoNext";
				break;
			case p.get("PAG_PREV_RECORD"):
				B = "GotoPrevious";
				break;
			case p.get("PAG_SCROLL_DN"):
				B = "ScrollNextData";
				break;
			case p.get("PAG_SCROLL_UP"):
				B = "ScrollPrevData";
				break;
			default:
			}
			if (B) {
				var D = CCFMiscUtil_CreatePropSet();
				if (!this.CanInvokeMethod(B)) {
					if (B === "GotoPreviousSet" && this.GetBusComp().GetSelection() !== 0 && this.GetBusComp().GetRawRecords().length > 0) {
						this.HandleRowSelect(0, false, false)
					} else {
						if (B === "GotoNextSet" && this.GetBusComp().GetSelection() !== (this.GetBusComp().GetRawRecords().length - 1) && this.GetBusComp().GetRawRecords().length > 0) {
							this.HandleRowSelect((this.GetBusComp().GetRawRecords().length - 1), false, false)
						}
					}
					return
				}
				this.InvokeMethod(B, D, true)
			}
		};
		g.prototype.DoCollectFieldValues = function (D) {
			var B = this.GetBusComp();
			if (B) {
				var K = "";
				var J = B.GetSelection();
				var I = this.GetListOfColumns();
				var C;
				var E = "OF_";
				for (var L in I) {
					if (I.hasOwnProperty(L)) {
						var F = I[L];
						var H = F.GetFieldName();
						var G = F.GetName();
						if (H || this.IsPrivateField(G)) {
							if (!this.CanUpdate(G) || F.IsClientCtrl()) {
								continue
							}
							if (this.IsInQueryMode()) {
								if (!w.IsEmpty(H)) {
									D.SetProperty(F.GetSpanPrefix() + "0", this.GetFieldValue(F))
								}
							} else {
								C = this.GetFormattedValue(F);
								D.SetProperty(F.GetSpanPrefix() + J, C);
								if (IsOfflineModeEnabled()) {
									if (SiebelApp.OfflineAppSettings.GetMode() === true || (!navigator.onLine && SiebelApp.OfflineAppMgr.GetCacheType() === "Reactive")) {
										D.SetProperty(E + H, C)
									}
								}
							}
						}
					}
				}
				SiebelApp.S_App.ListApplet.superclass.DoCollectFieldValues.call(this, D)
			}
		};
		g.prototype.InvokeMethod = function (D, F, E) {
			F = F || CCFMiscUtil_CreatePropSet();
			if (this.GetActiveControl()) {
				if (D.indexOf("PositionOnRow") !== -1) {
					return false
				}
			}
			var C = F.GetProperty(p.get("SWE_REQ_ROW_ID_STR"));
			if (C == "1") {
				var G = F.GetProperty(p.get("SWE_ROW_STR"));
				if (this.GetBusComp().GetSelection() !== Number(G)) {
					var H;
					if (D.indexOf("PositionOnRow") !== -1) {
						H = true
					}
					SiebelApp.S_App.SetShowNewPage(false);
					if (!this.PostChangesToBC(true, null, H) || SiebelApp.S_App.GetShowNewPage()) {
						return false
					}
					var B = Number(this.GetBeginRow()) + Number(G);
					if (!this.GetBusComp().SetSelection(B)) {
						return (false)
					}
				}
			}
			if (D.indexOf("PositionOnRow") !== -1) {
				if (0) {}
				else {
					this.GetBusComp().ClearUpdates();
					return (n.call(this, D, F))
				}
			}
			return (SiebelApp.S_App.ListApplet.superclass.InvokeMethod.call(this, D, F, E))
		};
		g.prototype.NotifyNewFieldData = function (B) {
			this.RepopulateField(B, false, false)
		};
		g.prototype.NotifyNewDataWS = function (B) {
			this.RepopulateField(B, false, false)
		};
		g.prototype.RepopulateField = function (E, D, C) {
			var B = this.GetBusComp().GetIdValue();
			this.GetBusComp().SetCurRow(this.GetName(), this.GetBusComp().GetSelection());
			this.DoRepopulateField(B, E, D, C);
			SiebelApp.S_App.ListApplet.superclass.DoRepopulateField.call(this, E)
		};
		g.prototype.DoRepopulateField = function (B, J, H, C) {
			var I;
			var F = this.IsInQueryMode();
			var G = this.GetListOfColumns();
			for (var K in G) {
				if (G.hasOwnProperty(K)) {
					var D = G[K];
					var E = D.GetFieldName();
					if ((C && D.GetName() === J) || E === J) {
						I = (F && !C) ? this.GetBusComp().GetFieldValue(J) : this.GetFormattedFieldValue(D, H);
						this.CellChange(B, D.GetName(), I)
					}
				}
			}
		};
		g.prototype.CellChange = function (C, D, B) {};
		g.prototype.DoSetAppletActive = function (B, C) {
			if (!this.CanUpdateUI()) {
				return true
			}
			this.SetHighlightState(B, C);
			this.ClearErrorMsg();
			return true
		};
		g.prototype.SetFocusToCtrl = function (B) {};
		g.prototype.SetHighlightState = function (B, C) {};
		g.prototype.HasHierarchy = function () {
			return this.GetBusComp() ? this.GetBusComp().IsHierarchyBusComp() : false
		};
		g.prototype.DisplaySortInfo = function (C, B) {};
		g.prototype.UpdateColWidth = function () {
			var C = this.GetListOfColumns(),
			D = false,
			G = arguments[0] || {},
			E = 0,
			F;
			for (var B in G) {
				if (G.hasOwnProperty(B) && C[B]) {
					C[B].SetWidth(G[B]);
					E++
				}
			}
			F = w.sortObjectMap(C, function (I, H) {
					return (I.GetColNum() - H.GetColNum())
				});
			if (E > 0) {
				D = b.call(this, F)
			}
			C = F = null;
			return D
		};
		g.prototype.UpdateColIndex = function () {
			var G = arguments[0] || {},
			D = false,
			E = 0,
			C = this.GetListOfColumns(),
			F;
			for (var B in G) {
				if (G.hasOwnProperty(B) && C[B]) {
					C[B].SetColNum(G[B]);
					E++
				}
			}
			F = w.sortObjectMap(C, function (I, H) {
					return (I.GetColNum() - H.GetColNum())
				});
			if (E > 0) {
				D = b.call(this, F)
			}
			C = F = null;
			return D
		};
		function r(D, C) {
			var B;
			if (w.IsEmpty(this.GetBusComp())) {
				return
			}
			B = this.GetBusComp().GetNotifyObject();
			if (!B || !B.Get_EnableUIUpdate(this.GetName())) {
				return
			}
			if (!D) {
				B.SetDoPopulate(this.GetName(), true)
			}
		}
		function n(C, F) {
			var G = "0";
			var E = "0";
			var B = "0";
			if (C.length > 13) {
				G = C.charAt(13);
				E = C.charAt(14);
				if (C.length > 15) {
					B = C.charAt(15)
				}
			}
			var D = F.Clone();
			D.SetProperty("SWEControlClicked", G);
			D.SetProperty("SWEShiftClicked", E);
			D.SetProperty("SWEIgnoreCtrlShift", B);
			return SiebelApp.S_App.ListApplet.superclass.InvokeMethod.call(this, "PositionOnRow", D)
		}
		function l(J) {
			var K = J.split(",");
			var C = K.length;
			var H = 0;
			var D = "asc";
			var B = null;
			for (H = 0; H < C; H++) {
				var G = K[H].match(/\((.*?)\)/);
				if (null !== G) {
					if (G[1].toLowerCase().indexOf("desc") != -1) {
						D = "desc"
					}
					B = K[H].replace(G[0], "").trim();
					break
				}
			}
			if (!B) {
				B = K[0].trim()
			}
			var L = this.GetControls();
			var I = null;
			for (var F in L) {
				if (L.hasOwnProperty(F)) {
					var E = L[F];
					if (B === String(E.GetFieldName())) {
						I = E;
						break
					}
				}
			}
			this.DisplaySortInfo((I ? I : "reset"), D)
		}
		function b() {
			var M = this.GetListPrefs(),
			C = "",
			J,
			G = 0,
			L,
			H,
			I = arguments[0] || [],
			B = !M || I.length <= 0 || M.indexOf(a) < 0,
			E,
			D,
			K = this.GetListOfColumns(),
			F = false;
			if (B) {
				M = null;
				return
			}
			J = M.split(a);
			C += J[0];
			G = I.length;
			for (D = 0; D < G; D++) {
				if (!w.IsTrue(I[D].IsDynamic()) && !(I[D].IsClientCtrl())) {
					H = "0" + s + I[D].GetName() + s + I[D].GetWidth();
					C += a + H
				}
			}
			G = J.length;
			for (D = 1; D < G; D++) {
				L = J[D].split(s);
				if (L.length > 0 && !K[L[1]]) {
					C += a + J[D]
				}
				L.splice(0, L.length)
			}
			E = CCFMiscUtil_CreatePropSet();
			E.SetProperty("SWEUserPreference", C);
			E.SetProperty("SWEKeepContext", "1");
			E.SetProperty("SWEDIC", "1");
			F = this.InvokeMethod("SetListAppletLayout", E);
			if (F) {
				this.SetListPrefs(C)
			}
			E = M = K = null;
			return F
		}
		g.prototype.ChangeSelectionInPopup = function (C) {
			var B = SiebelApp.S_App.GetActiveView().GetActiveApplet();
			if (B.GetBusComp().GetSelection() !== (C - 1)) {
				B.GetBusComp().SetSelection(C - 1);
				B.InvokeMethod("PositionOnRow")
			}
		};
		return g
	}
		())
};
