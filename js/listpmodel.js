/*UIF-Core : JSHint compliant */
if (typeof (SiebelAppFacade.ListPresentationModel) === "undefined") {
    SiebelJS.Namespace('SiebelAppFacade.ListPresentationModel');

    //Module with its dependencies
    define("siebel/listpmodel", ["siebel/pmodel"], function () {
        SiebelAppFacade.ListPresentationModel = (function () {
            var siebConsts = SiebelJS.Dependency("SiebelApp.Constants");
            var CANCEL_OPR = siebConsts.get("SWE_EXTN_CANCEL_ORIG_OP"),
                STOP_PROP = consts.get("SWE_EXTN_STOP_PROP_OP");

            function ListPresentationModel(proxy) {
                SiebelAppFacade.ListPresentationModel.superclass.constructor.call(this, proxy);
            }

            SiebelJS.Extend(ListPresentationModel, SiebelAppFacade.PresentationModel);

            ListPresentationModel.prototype.Setup = function (propSet) {
                var apm,
                    visMode,
                    visModeArr,
                    visModeLDCArr;
                SiebelAppFacade.ListPresentationModel.superclass.Setup.call(this, propSet);
                if (propSet) {
                    apm = propSet.GetChildByType(siebConsts.get("SWE_APPLET_PM_PS"));
                }
                if (apm) {
                    visMode = apm.GetProperty(siebConsts.get("SWE_LDC_VIS_MODE_LIST"));
                    if (visMode) {
                        visModeLDCArr = [];
                        CCFMiscUtil_StringToArray(visMode, visModeLDCArr);
                        this.AddProperty(siebConsts.get("SWE_LDC_VIS_MODE_LIST"), visModeLDCArr);
                    }
                    visMode = apm.GetProperty(siebConsts.get("SWE_VIS_MODE_LIST"));
                    if (visMode) {
                        visModeArr = [];
                        CCFMiscUtil_StringToArray(visMode, visModeArr);
                        this.AddProperty(siebConsts.get("SWE_VIS_MODE_LIST"), visModeArr);
                    }
                    visMode = apm.GetProperty(siebConsts.get("SWE_VIS_MODE_DEFAULT"));
                    if (visMode) {
                        this.AddProperty(siebConsts.get("SWE_VIS_MODE_DEFAULT"), visMode);
                    }
                    visMode = apm.GetProperty(siebConsts.get("SWE_VIS_MODE_FLIP_METHOD"));
                    if (visMode) {
                        this.AddProperty(siebConsts.get("SWE_VIS_MODE_FLIP_METHOD"), visMode);
                    }
                    this.HandleResponsePS(apm);
                }
            };

            ListPresentationModel.prototype.Init = function () {
                SiebelAppFacade.ListPresentationModel.superclass.Init.call(this);

                this.AddProperty("ListOfColumns", GetListOfColumns);
                this.AddProperty("TotalSet", true);
                this.AddProperty("MultiSelectMode", false);
                this.AddProperty("InQueryMode", false);
                this.AddProperty("LandMarkTitle", this.Get("GetAppletLabel") + " " + SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_LIST_APPLET"));
                this.AddProperty("SortRecord", false);
                this.AddProperty("ListDetail", siebConsts.get("SWE_LIST_DETAIL") + this.Get("GetVarName"));
                this.AddProperty(consts.get("ENABLE_MULTISELECT_COLUMN"), false);
                this.AddProperty("ResetScroll", true);

                this.AttachEventHandler(siebConsts.get("PHYEVENT_HIER_COLLAPSE"), OnCollapse, { core: true });

                this.AttachEventHandler(siebConsts.get("PHYEVENT_HIER_EXPAND"), OnExpand, { core: true });

                this.AttachEventHandler(siebConsts.get("PHYEVENT_SELECT_ROW"), "HandleRowSelect", { core: true });

                this.AttachEventHandler(siebConsts.get("PHYEVENT_VSCROLL_LIST"), "OnVerticalScroll", { core: true });

                this.AttachEventHandler(siebConsts.get("PHYEVENT_SORT_LIST"), "OnClickSort", { core: true });

                this.AttachEventHandler(siebConsts.get("PHYEVENT_COLUMN_BLUR"), "OnCtrlBlur", { core: true });

                this.AttachEventHandler(siebConsts.get("PHYEVENT_CONTROL_BLUR"), function () {
                    arguments[arguments.length - 1][CANCEL_OPR] = true;
                    arguments[arguments.length - 1][STOP_PROP] = true;
                    return this.ExecuteMethod("OnCtrlBlur", this.Get("GetSelection"), arguments[0], arguments[1]);
                });

                this.AttachEventHandler(siebConsts.get("PHYEVENT_COLUMN_FOCUS"), "OnCtrlFocus", { core: true });

                this.AttachEventHandler(siebConsts.get("PHYEVENT_CONTROL_FOCUS"), function () {
                    arguments[arguments.length - 1][CANCEL_OPR] = true;
                    arguments[arguments.length - 1][STOP_PROP] = true;
                    return this.ExecuteMethod("OnCtrlFocus", this.Get("GetSelection"), arguments[0], arguments[1]);
                });

                this.AttachEventHandler(siebConsts.get("PHYEVENT_DRILLDOWN_LIST"), "OnDrillDown", { core: true });

                this.AttachEventHandler(siebConsts.get("PHYEVENT_COL_ORDER_CHANGE"), "UpdateColIndex", { core: true });

                this.AttachEventHandler(siebConsts.get("PHYEVENT_COL_WIDTH_CHANGE"), "UpdateColWidth", { core: true });

                this.AttachEventHandler(consts.get("PHYEVENT_RECORD_DROP"), "HandleDragNDrop", { core: true });

                this.AttachEventHandler(consts.get("PHYEVENT_RECORD_DROP_GENERIC"), "HandleDragNDropGeneric", { core: true });

                this.AttachPSHandler(consts.get("SWE_PROP_SHOW_SEL"), function (propSet) {
                    HandleRecordSelectState.call(this, propSet);
                });
                this.AttachPSHandler(consts.get("SWE_PROP_ENABLE_SEL"), function (propSet) {
                    HandleRecordSelectState.call(this, propSet);
                });

                this.AddMethod("HandleDragNDrop", function (dataArray) {
                    var sortedDataArray = SortDataOnDnD.call(this, dataArray);
                    var sortedControlArray = this.Get("GetSortControls");
                    var sortedDataArrayLength = sortedDataArray.length;
                    if (sortedDataArrayLength > 0) {
                        for (var i = 0; i < sortedDataArrayLength; i++) {
                            if (this.ExecuteMethod("CanInvokeMethod", "NewRecord")) {
                                this.ExecuteMethod("InvokeMethod", "NewRecord");
                                CollectDragNDropValues.call(this, sortedDataArray[i], sortedControlArray);
                                if (this.ExecuteMethod("CanInvokeMethod", "WriteRecord")) {
                                    this.ExecuteMethod("InvokeMethod", "WriteRecord");
                                }
                            }
                        }
                    }
                    this.SetProperty("GetSortControls", []);
                });

                this.AddMethod("HandleDragNDropGeneric", function (methodname) {
                    if (methodname && this.ExecuteMethod("CanInvokeMethod", methodname)) {
                        return (this.ExecuteMethod("InvokeMethod", methodname));
                    }
                    return true;
                });

                this.AddMethod("GetDragInfo", function (rowIndexArray) {
                    var appletRowId = [];
                    var recordSet = this.Get("GetRawRecordSet");
                    appletRowId.appletName = this.Get("GetName");
                    appletRowId.rowId = "";
                    if (rowIndexArray && rowIndexArray.length > 0) {
                        var rowIndexArrayLength = rowIndexArray.length;
                        for (var i = 0; i < rowIndexArrayLength; i++) {
                            appletRowId.rowId += recordSet[rowIndexArray[i]].Id;
                            if (i < rowIndexArrayLength - 1) {
                                appletRowId.rowId += ", ";
                            }
                        }
                    } else {
                        appletRowId.rowId = recordSet[this.Get("GetSelection")].Id;
                    }
                    return appletRowId;
                });

                this.AddMethod("ResetScrollpos", function () { });

                this.AttachNotificationHandler(consts.get("SWE_PROP_BC_NOTI_GENERIC"), function (propSet) {
                    var ctrl = this.Get("GetActiveControl");
                    if (propSet.GetProperty("type") === "ClosePopup" && ctrl) {
                        this.ExecuteMethod("CellChange", this.Get("GetSelection"), ctrl.GetFieldName(), this.ExecuteMethod("GetFieldValue", ctrl));
                    }
                });

                this.AttachNotificationHandler(consts.get("SWE_NOTIFY_TOTALS_CHANGED"), function (propSet) {
                    this.SetProperty("TotalSet", true);
                });

                this.AttachNotificationHandler(consts.get("SWE_PROP_BC_NOTI_SELECTION_MODE_CHANGE"), function (propSet) {
                    this.SetProperty("MultiSelectMode",
                                        (propSet.GetProperty(consts.get("SWE_PROP_NOTI_MULTISEL")) === "true"));
                });

                this.AttachNotificationHandler(consts.get("SWE_PROP_BC_NOTI_EXECUTE"), function (propSet) {
                    this.ExecuteMethod("ResetScrollpos");
                });

                this.AddMethod("BeginQueryState", function () {
                    this.SetProperty("InQueryMode", true);
                }, { sequence: false, scope: this });

                this.AddMethod("EndQueryState", function () {
                    this.SetProperty("InQueryMode", false);
                }, { sequence: false, scope: this });

                this.AttachPostProxyExecuteBinding("SortAscending", function (methodName, inputPS, outputPS) {
                    AddSortProperty.call(this, inputPS, outputPS, "ascending");
                });

                this.AttachPostProxyExecuteBinding("SortDescending", function (methodName, inputPS, outputPS) {
                    AddSortProperty.call(this, inputPS, outputPS, "descending");
                });

                this.AddMethod("OnScrollComplete", function (direction) {
                });
                this.AttachPostProxyExecuteBinding("ScrollPrevData", OnScrollCompleted);
                this.AttachPostProxyExecuteBinding("ScrollNextData", OnScrollCompleted);
            };

            function OnScrollCompleted(methodName, inputPS, outputPS) {
                this.ExecuteMethod("OnScrollComplete", methodName === "ScrollPrevData" ? siebConsts.get("PAG_SCROLL_UP") : siebConsts.get("PAG_SCROLL_DN"));
            }

            ListPresentationModel.prototype.UpdateModel = function (propSet) {
                SiebelAppFacade.ListPresentationModel.superclass.UpdateModel.call(this, propSet);
                ManageMultiSelectColumn.call(this, propSet);
            };

            function ManageMultiSelectColumn(propSet) {
                var pmPS,
                    bShowCol = null,
                    bTouch = SiebelAppFacade.DecisionManager.IsTouch(),
                    configString = "";

                if (propSet) {
                    pmPS = propSet.GetChildByType(consts.get("SWE_APPLET_PM_PS"));
                    if (!utils.IsEmpty(pmPS)) {
                        if ((pmPS.GetProperty(consts.get("SWE_PROP_CAN_MULTISELECT")) === "true")) {
                            // Code allows it. Now get the configuration and branch between Touch and Non Touch devices.
                            configString += pmPS.GetProperty(consts.get("SWE_PROP_MULTISEL_COL_BEH")).toLowerCase();
                            bShowCol = ((bTouch)
                                // Touch default is to show (true), if not configuration overridden.
                                ? ((configString === consts.get("SWE_MULTISELECT_DISABLE_ON_TOUCH")) ? false : true)
                                // NonTouch default is to hide (false), if not configuration overriden.
                                : ((configString === consts.get("SWE_MULTISELECT_ENABLE_ON_NONTOUCH")) ? true : false));
                        }
                    }
                }
                // If none of the cases above have entered, direct to defaults.
                bShowCol = ((bShowCol === null) ? (bTouch ? true : false) : bShowCol);

                // Setup the checkbox column if enabled.
                if (bShowCol) {
                    /// PS Attribute info for multiselect Check box
                    var ctrlChkboxInfo = SiebelAppFacade.PresentationModel.GetCtrlTemplate("SelectAll", "SelectAll", consts.get("SWE_CTRL_CHECKBOX"), 0);
                    ctrlChkboxInfo.SetPropertyStr(consts.get("SWE_PROP_JUSTIFICATION"), "center");
                    ctrlChkboxInfo.SetPropertyStr(consts.get("SWE_PROP_LABEL_JUSTIFICATION"), "center");
                    ctrlChkboxInfo.SetPropertyStr(consts.get("SWE_PROP_MTHD_NAME"), "SelectAll");
                    this.SetProperty("MultiSelectColumn", "SelectAll");

                    // Add PS info to inject into proxy
                    this.ExecuteMethod("AddClientControl", ctrlChkboxInfo);

                    // Set the property for any additional future uses. 
                    this.SetProperty(consts.get("ENABLE_MULTISELECT_COLUMN"), bShowCol);
                }
            }

            function HandleRecordSelectState(propSet) {
                var arr = [];
                var str = propSet.GetProperty(siebConsts.get("SWE_PROP_CTRL_STAT"));
                if (str) {
                    CCFMiscUtil_StringToArray(str, arr);
                    this.AddProperty("selectctrlinfo", arr);
                    this.AddProperty("ctrlmode", propSet.GetType() === siebConsts.get("SWE_PROP_ENABLE_SEL") ? siebConsts.get("SWE_PROP_CAN_ENABLE_SEL") : siebConsts.get("SWE_PROP_CAN_SHOW_SEL"));
                }
            }

            function AddSortProperty(inputPS, outputPS, type) {
                if (String(outputPS.GetProperty(siebConsts.get("SWE_RPC_PROP_RETURN_STATUS"))) === siebConsts.get("SWE_RPC_PROP_STATUS_COMPLETED")) {
                    var fieldName = String(inputPS.GetProperty(siebConsts.get("SWE_FIELD_STR")));
                    var listOfCols = this.Get("GetListOfColumns");
                    for (var name in listOfCols) {
                        if (listOfCols.hasOwnProperty(name)) {
                            if (listOfCols[name].GetInputName() === fieldName) {
                                this.SetProperty("SortRecord", {
                                    "name": listOfCols[name].GetName(),
                                    "type": type,
                                    "msg": (type === "ascending" ?
                                            SiebelApp.S_App.LocaleObject.GetLocalString(siebConsts.get("SWE_SORTASC_TOOL_TIP")) :
                                                SiebelApp.S_App.LocaleObject.GetLocalString(siebConsts.get("SWE_SORTDSC_TOOL_TIP")))
                                });
                                break;
                            }
                        }
                    }
                }
            }

            function GetListOfColumns() {
                var columns = this.Get("GetListOfColumns");
                var arrColumns = [];
                for (var columnName in columns) {
                    if (columns.hasOwnProperty(columnName)) {
                        var current = columns[columnName];
                        var currentName = columnName;
                        var columnInfo = {
                            name: currentName,
                            controlType: current.GetUIType(),
                            isLink: this.ExecuteMethod("CanNavigate", currentName),
                            index: Number(current.GetColNum()) + 1,  // Server Index is based on 0, adding 1 to this
                            bCanUpdate: this.ExecuteMethod("CanUpdate", currentName),
                            control: current
                        };
                        arrColumns.push(columnInfo);
                    }
                }

                arrColumns.sort(function (a, b) {
                    return (a.index - b.index);
                });
                return arrColumns;
            }

            function OnExpand(rowNum) {
                var psInputArgs = CCFMiscUtil_CreatePropSet();
                psInputArgs.SetProperty('SWER', rowNum);
                psInputArgs.SetProperty('SWEReqRowId', "1");

                this.ExecuteMethod("InvokeMethod", "Expand", psInputArgs);
            }

            function OnCollapse(rowNum) {
                var psInputArgs = CCFMiscUtil_CreatePropSet();
                psInputArgs.SetProperty('SWER', rowNum);
                psInputArgs.SetProperty('SWEReqRowId', "1");

                this.ExecuteMethod("InvokeMethod", "Collapse", psInputArgs);
            }

            function SortDataOnDnD(dataArray) {
                var k = 0, j = 0;
                var colSortArray = [];
                var sortedData = [];
                var removeDataAtIndex = [];
                var listCols = this.Get("ListOfColumns");
                var len = dataArray.length;
                for (i = 0; i < len; i++) {
                    if (!dataArray[i]) {
                        continue;
                    }
                    var splitData = dataArray[i].split('\t');
                    if (i == 0) {
                        var splitLen = splitData.length,
                                colsLen = listCols.length;
                        for (; j < splitLen; j++) {
                            for (; k < colsLen; k++) {
                                var currentListColControl = listCols[k].control;
                                if (splitData[j].replace('\n', '') === currentListColControl.GetDisplayName()) {
                                    colSortArray.push(currentListColControl);
                                    k = 0;
                                    break;
                                }
                                else if (splitData[j].replace('\n', '') !== currentListColControl.GetDisplayName() && (k === listCols.length - 1)) {
                                    removeDataAtIndex.push(j);
                                    k = 0;
                                    break;
                                }
                            }
                        }
                        this.SetProperty("GetSortControls", colSortArray);
                    }
                    else {
                        for (var l = removeDataAtIndex.length - 1; l >= 0; l--) {
                            splitData.splice(removeDataAtIndex[l], 1);
                        }
                        sortedData.push(splitData);
                    }
                }
                return sortedData;
            };

            function CollectDragNDropValues(dataArray, sortedControlArray) {
                var column;
                var k = 0, j = 0;
                var sortedControlArrayLength = sortedControlArray.length;
                var dataArrayLength = dataArray.length;
                for (; j < dataArrayLength; j++) {
                    if (k < sortedControlArrayLength) {
                        column = sortedControlArray[k];
                        if (!this.ExecuteMethod("CanUpdate", column)) {
                            k++;
                            continue;
                        }
                        this.ExecuteMethod("SetFormattedValue", column, dataArray[j]);
                        k++;
                    }
                }
            };

            return ListPresentationModel;

        }());
        return "SiebelAppFacade.ListPresentationModel";
    });
}