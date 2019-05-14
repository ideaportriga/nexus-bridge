/*globals HtmlEncode */
if (typeof (SiebelAppFacade.IPRJQGridRenderer) === "undefined") {
  SiebelJS.Namespace('SiebelAppFacade.IPRJQGridRenderer');

  //Module with its dependencies
  define("siebel/iprjqgridrenderer", ["3rdParty/jqGrid/current/js/i18n/grid.locale-en.js", "3rdParty/jqGrid/current/js/jquery.jqGrid.min.js", "3rdParty/jqgrid-ext.js",
  "siebel/custom/iprphyrenderer"],
    function () {
      SiebelAppFacade.IPRJQGridRenderer = (function () {
        // dependencies
        var utils = SiebelJS.Dependency("SiebelApp.Utils");
        var siebConsts = SiebelJS.Dependency("SiebelApp.Constants");
        var localeObj = SiebelJS.Dependency("SiebelApp.S_App.LocaleObject");

        var combo = siebConsts.get("SWE_CTRL_COMBOBOX");
        var calc = siebConsts.get("SWE_CTRL_CALC");
        var checkbox = siebConsts.get("SWE_CTRL_CHECKBOX");
        var mailTo = siebConsts.get("SWE_CTRL_MAILTO");
        var dateTimePick = siebConsts.get("SWE_CTRL_DATE_TIME_PICK");
        var datePick = siebConsts.get("SWE_CTRL_DATE_PICK");
        var dateTimezonePick = siebConsts.get("SWE_CTRL_DATE_TZ_PICK");
        var textArea = siebConsts.get("SWE_CTRL_TEXTAREA");
        var mvg = siebConsts.get("SWE_CTRL_MVG");
        var pick = siebConsts.get("SWE_CTRL_PICK");
        var url = siebConsts.get("SWE_CTRL_URL");
        var currencyCal = siebConsts.get("SWE_CTRL_CURRENCY_CALC");
        var imageControl = siebConsts.get("SWE_CTRL_IMAGECONTROL");
        var ink = siebConsts.get("SWE_CTRL_INKDATA");
        var link = siebConsts.get("SWE_CTRL_LINK");
        var rtcEditor = siebConsts.get("SWE_CTRL_RTCEMBEDDED");
        var rtcEditorTextOnly = siebConsts.get("SWE_CTRL_RTCEMBEDDEDTEXTONLY");
        var rtcLink = siebConsts.get("SWE_CTRL_RTCEMBEDDEDLINKFIELD");
        var rtcPopup = siebConsts.get("SWE_CTRL_RTCPOPUP");
        var rtcIO = siebConsts.get("SWE_CTRL_RTCIO");
        var btnControl = siebConsts.get("SWE_PST_BUTTON_CTRL");
        var detail = siebConsts.get("SWE_CTRL_DETAIL");
        var colType = siebConsts.get("SWE_PST_COL");

        var GridPadding = "20";
        var colPadding = "5";
        var passwordCtrl = siebConsts.get("SWE_CTRL_PWD");
        var effdat = siebConsts.get("SWE_CTRL_EFFDAT");
        var text = siebConsts.get("SWE_CTRL_TEXT");
        var radioButton = siebConsts.get("SWE_CTRL_RADIO");
        var plainText = siebConsts.get("SWE_CTRL_PLAINTEXT");
        var label = siebConsts.get("SWE_CTRL_LABEL");
        var fileControl = siebConsts.get("SWE_CTRL_FILE");
        var scrollTimer = 0;
        var eventHelper = SiebelApp.S_App.PluginBuilder.GetHoByName("EventHelper");

        function IPRJQGridRenderer(pm) {
          SiebelAppFacade.IPRJQGridRenderer.superclass.constructor.call(this, pm);
          //private
          var m_jqGrid = $();
          var m_colMap = new SiebelAppFacade.GridColumnHelper();
          var m_PercentageWidth = 0;
          var m_GroupHeaderInfo = [];

          this.SetGrid = function (grid) {
            m_jqGrid = grid;
          };

          this.GetGrid = function () {
            return m_jqGrid;
          };

          this.GetRowCount = function () {
            return (m_jqGrid.getRowData().length);
          };

          this.GetColCount = function () {
            return (m_jqGrid.jqGrid("getGridParam", "colNames").length);
          };

          this.GetColName = function (index) {
            return (m_jqGrid.jqGrid("getGridParam", "colNames")[index]);
          };

          this.GetColumnHelper = function () {
            return m_colMap;
          };

          this.SetGroupHeaderInfo = function (key, value) {
            m_GroupHeaderInfo[key] = value;
          };

          this.GetGroupHeaderInfo = function () {
            return m_GroupHeaderInfo;
          };

          SiebelApp.S_App.PluginBuilder.SetUIContext(this, GetUIContext);
        }

        SiebelJS.Extend(IPRJQGridRenderer, SiebelAppFacade.IPRPhysicalRenderer);

        IPRJQGridRenderer.prototype.Init = function () {
          SiebelAppFacade.IPRJQGridRenderer.superclass.Init.call(this);

          // this.AttachPMBinding("NavigateState", PreUpdateNavigateInfo);

          // this.AttachPMBinding("isControlPopupOpen", CloseControlPopup);

          // this.AttachPMBinding("MultiSelectMode", SetCellEdit);

          // this.AttachPMBinding("InQueryMode", function () {
          //   SetCellEdit.apply(this, arguments);
          //   UpdateHeaderMenu.apply(this, arguments);
          // });

          // this.AttachPMBinding("SortRecord", AddSortInfo);

          // this.AttachPMBinding("SetFocusToGridCell", SetFocustoFirstCell);

          // this.AttachPMBinding("CellChange", this.SetCellValue);

          // this.AttachPMBinding("TotalSet", ShowTotal);

          // this.AttachPMBinding("DisplaySortInfo", DisplaySortInfo);

          // this.AttachPMBinding("InvokeStateChange", UpdateHeaderControl);

          // this.AttachPMBinding("OnScrollComplete", OnScrollComplete);

          // this.AttachPMBinding("ForceFocusOnControl", ForceFocusOnControl);
        };

        function UpdateHeaderMenu() {
          var pm = this.GetPM(),
            listOfColumns = pm.Get("ListOfColumns"),
            grid = this.GetGrid(),
            listColLen = listOfColumns.length,
            isSortable = !pm.Get("InQueryMode"),
            isTrue = siebConsts.get("SWE_NUMERIC_TRUE"),
            columnHelper = this.GetColumnHelper(),
            currentColumn,
            currentControl,
            name;

          for (var i = 0; i < listColLen; i++) {
            currentColumn = listOfColumns[i];
            currentControl = currentColumn.control;
            name = columnHelper.GetModString(currentColumn.name);
            grid.setColProp(name, { sortable: isSortable });
          }
          listOfColumns = null;
          columnHelper = null;
          grid = null;
        };

        function GetUIContext(control) {
          return this.GetGrid().data("EditCellActive") ? $("#" + this.GetSelectedRow() + "_" + this.GetColumnHelper().GetModifiedColumnName(control.GetName()), this.GetGrid()) : null;
        }

        function ForceFocusOnControl() {
          var pm = this.GetPM(),
            control, el;
          if (this.GetGrid() && pm.Get("ForceFocusOnControl") && pm.Get("CloseCtrlPopupInProgress")) {
            control = pm.Get("GetActiveControl");
            if (control) {
              var ctrlName = control.GetName();
              if (ctrlName && pm.ExecuteMethod("GetListCol", ctrlName)) {
                el = GetControlElement.call(this, ctrlName);
                if (el && el.length === 0) {
                  this.SetFocusToControl(ctrlName, true);
                }
              }
            }
            pm.SetProperty("ForceFocusOnControl", false);
          }
        }

        //VT:This funciton creates the new column model and refreshes the existing control with the new model
        //Used by NotifyCtrlDefChanged notification(use case:Work Flow policy actions for type ServiceRequest)
        IPRJQGridRenderer.prototype.RefreshControl = function (control) {
          var pm = this.GetPM(),
            listOfColumns = pm.Get("ListOfColumns"),
            bFound = false,
            grid = this.GetGrid();

          for (var index = 0, length = listOfColumns.length; index < length; index++) {
            if (listOfColumns[index].name === control.GetName()) {
              this.GetUIWrapper(control, true);
              var columnInfo = PrepareColumnInfo.call(this, [listOfColumns[index]]),
                colModel = grid.jqGrid("getGridParam", "colModel");
              if (colModel) {
                var newCol = columnInfo.columnModel[0],
                  colModelLength = colModel.length;
                for (var colIndex = 0; colIndex < colModelLength; colIndex++) {
                  var oldCol = colModel[colIndex];
                  if (oldCol.name === newCol.name) {
                    oldCol.editoptions = newCol.editoptions;
                    oldCol.edittype = (newCol.edittype ? newCol.edittype : "text");
                    bFound = true;
                    break;
                  }
                }
              }
              columnInfo = null;
              colModel = null;
            }
          }
          listOfColumns = null;
          if (!bFound) {
            SiebelAppFacade.IPRJQGridRenderer.superclass.RefreshControl.call(this, control);
          }
        };

        IPRJQGridRenderer.prototype.MaskLeaveField = function (ctrl, bLeaveFieldState) {
          var jqGridCtrl = this.GetGrid(),
            fieldName = this.GetColumnHelper().GetModifiedColumnName(ctrl.GetName()),
            pm = this.GetPM(),
            rowid = pm.Get("GetSelection") + 1,
            element = $("#" + rowid + "_" + fieldName, jqGridCtrl);
          if (element.length > 0) {
            if (bLeaveFieldState) {
              element.data("inLeaveField", "true");
              //In case if the element is removed from the DOM adding
              //the control name on the grid element to make sure the data is not lost.
              jqGridCtrl.data("inLeaveField", ctrl.GetInputName());
            }
            else {
              element.removeData("inLeaveField");
              jqGridCtrl.removeData("inLeaveField");
            }
          }
          else {
            SiebelAppFacade.IPRJQGridRenderer.superclass.MaskLeaveField.call(this, ctrl, bLeaveFieldState);
          }
        };

        IPRJQGridRenderer.prototype.EndLife = function () {
          var grid = this.GetGrid(),
            pm = this.GetPM();
          grid.removeData("jqGrid");
          /* Remove All Custom Events */
          $("#" + pm.Get("GetFullId")).off("click.jqGrid" + pm.Get("GetPlaceholder"));
          $("#" + pm.Get("GetPlaceholder")).undelegate();

          $(window).unbind("resize.JQGrid");
          var multiSelCol = this.GetPM().Get("MultiSelectColumn");
          if (multiSelCol) {
            $("#" + "id_" + pm.Get("GetPlaceholder") + multiSelCol).unbind("click", { ctx: this }, OnClickHeaderCtrl);
          }
          SiebelApp.EventManager.removeListner("forceResize", this.resize, this);

          SiebelApp.EventManager.removeListner("gridresize", this.fixHeight, this);

          this.GetColumnHelper().EndLife();
          grid.jqGrid("GridDestroy");
          this.SetGrid(null);

          SiebelAppFacade.IPRJQGridRenderer.superclass.EndLife.call(this);
        };

        IPRJQGridRenderer.prototype.ResetRendererState = function () {
          if (SiebelApp.S_App.GetPopupPM().Get("isCurrencyOpen")) {
            return false;
          }
          this.UpdateSelectedRow();
          SiebelAppFacade.IPRJQGridRenderer.superclass.ResetRendererState.call(this);
        };

        function OnCloseDatePicker(dateElement, ctrl, inputText, isEscapeKey) {
          var pm = this.GetPM(),
            ctrlType = ctrl.GetUIType(),
            hasTime = false;

          switch (ctrlType) {
            // Intentional absence of breaks below.
            case consts.get("SWE_CTRL_DATE_TZ_PICK"):
            case consts.get("SWE_CTRL_DATE_TIME_PICK"):
              hasTime = true;
            default:
              inputText = utils.ToISOFormat(inputText, hasTime, ctrl.GetDisplayFormat()) || inputText;
          }

          dateElement.datetimepicker("destroy");
          this.SetFocusToControl(ctrl.GetName(), true);
          pm.SetProperty("isControlPopupOpen", false);
          var oldval = dateElement.attr("data");
          if (!isEscapeKey) {
            if (oldval === inputText) {
              dateElement.val(oldval);
            }
            pm.ExecuteMethod("LeaveField", ctrl, inputText, true);
          }
          else {
            dateElement.val(oldval);
          }

          dateElement.removeAttr("data");
        }

        function MoveToPreviousRow(e) {
          var key = e.charCode || e.keyCode;

          if (e.shiftKey && key === 9) {
            var that = this;

            var iRow = Number(this.GetSelectedRow()) - 1;

            var colModel = this.GetGrid().jqGrid("getGridParam", "colModel");

            for (var iCol = (colModel.length - 1); iCol >= 0; iCol--) {
              if (colModel[iCol].hidden === false && colModel[iCol].editable) { break; }
            }

            if (iRow >= 0) {
              if (iRow === 0) {
                setTimeout(function () {
                  that.GetGrid().find("tr#" + (iRow + 1)).focus().children("td").eq(1).attr("tabindex", "0");
                  SiebelApp.S_App.uiStatus.Free();
                }, 10);
                return;
              }
              else if (this.OnRowSelect(iRow) === false) {
                return;
              }

              setTimeout(function () {
                var currentRow = Number(that.GetSelectedRow());
                if (currentRow > 0) {
                  that.GetGrid().jqGrid('editCell', currentRow, iCol, true);
                }
              }, 10);
            }
          }
        }

        function MoveToNextRow(e) {
          var key = e.charCode || e.keyCode;
          if (!e.shiftKey && key === 9) {
            var that = this;

            var colModel = this.GetGrid().jqGrid("getGridParam", "colModel"),
              iCol;

            if (this.GetSelectedRow() == this.GetRowCount()) {
              for (iCol = colModel.length - 1; iCol >= 0; iCol--) {
                if (colModel[iCol].hidden === false) { break; }
              }
              setTimeout(function () {
                that.GetGrid().find("tr#" + Number(that.GetSelectedRow())).focus().children("td").eq(iCol).attr("tabindex", "0");
                SiebelApp.S_App.uiStatus.Free();
              }, 10);
              return;
            }

            var iRow = Number(this.GetSelectedRow()) + 1,
              colModelLength = colModel.length;

            for (iCol = 0; iCol < colModelLength; iCol++) {
              if (colModel[iCol].hidden === false && colModel[iCol].editable) { break; }
            }

            if (iRow <= this.GetRowCount()) {
              if (this.OnRowSelect(iRow) === false) {
                return;
              }

              setTimeout(function () {
                var currentRow = Number(that.GetSelectedRow());
                if (currentRow > 0) {
                  that.GetGrid().jqGrid('editCell', currentRow, iCol, true); //fix for current row being changed in settimeout due to delay.
                }
              }, 10);
            }
            else {
              setTimeout(function () {
                var currentRow = Number(that.GetSelectedRow());
                if (currentRow > 0) {
                  that.GetGrid().jqGrid('editCell', currentRow, iCol, true);
                }
                SiebelApp.S_App.uiStatus.Free();
              }, 10);
            }
          }
        }

        function drilldownFormatter(cellvalue, options, rowObject) {
          var strRet = "";
          if (cellvalue) {
            cellvalue = HtmlEncode(cellvalue);
            var ctrlName = this.GetColumnHelper().GetActualControlName(options.colModel.name),
              pm = this.GetPM(),
              control = this.GetPM().ExecuteMethod("GetControl", ctrlName),
              bCanNavigate = pm.ExecuteMethod("CanNavigate", ctrlName, options.rowId - 1) && !pm.Get("IsInQueryMode");
            strRet = !bCanNavigate ? cellvalue
              : "<a role=\"textbox\" href=\"javascript:void(0);\" class=\"drilldown\" name=\"" +
              ctrlName + "\" tabindex=\"-1\" >" + cellvalue + "</a>";
            this.CacheState("CanNavigate", { ctrlName: ctrlName, stateValue: bCanNavigate, index: options.rowId - 1 })
          }
          return strRet;
        }

        function IconMapFormatter(cellvalue, options, rowObject) {
          var columnHelper = this.GetColumnHelper(),
            control = columnHelper.GetColControl()[options.colModel.name],
            IconMapName = SiebelApp.S_App.LookupStringCache(control.GetIconMap());
          if (IconMapName) {
            var IconMap = SiebelApp.S_App.GetIconMap();
            var IconMapArray = IconMap[IconMapName];
            if (IconMapArray) {
              for (var i = 0, len = IconMapArray.length; i < len; i++) {
                if (IconMapArray[i].iconName == cellvalue) {
                  //Accessibility
                  var ctrlDisplayName = control.GetDisplayName(),
                    formatedString = columnHelper.GetCachedFormattedString(IconMapArray[i].iconImage, ctrlDisplayName);
                  if (!formatedString) {
                    var iconEl = $(IconMapArray[i].iconImage),
                      iconName = IconMapArray[i].iconName,
                      attrObj = {};

                    if (ctrlDisplayName) {
                      var attrString = iconEl.attr("alt");
                      if (attrString) {
                        attrObj.alt = ctrlDisplayName + ":" + attrString;
                      }
                      attrString = iconEl.attr("title");
                      if (attrString) {
                        attrObj.title = ctrlDisplayName + ":" + attrString;
                      }
                    }
                    if (utils.IsTrue(SiebelApp.S_App.IsAutoOn()) && !utils.IsEmpty(iconName)) {
                      attrObj[consts.get("SWE_PROP_QTP_OT")] = consts.get("SWE_PROP_ICON_MAP");
                      attrObj[consts.get("SWE_PROP_QTP_RN")] = iconName;
                      attrObj[consts.get("SWE_PROP_QTP_UN")] = cellvalue;
                    }
                    iconEl.attr(attrObj);
                    formatedString = iconEl[0].outerHTML;
                    if (!(utils.IsTrue(SiebelApp.S_App.IsAutoOn()) && !utils.IsEmpty(iconName))) {
                      //don't cache when auto property is on, and value is part of element property
                      columnHelper.SetCachedFormattedString(IconMapArray[i].iconImage, ctrlDisplayName, formatedString);
                    }

                  }
                  return formatedString + "<span style='display:none;'>" + cellvalue + "</span>";
                }
              }
            }
          }
          return HtmlEncode(cellvalue); //bug#17331733
        }

        function urlFormatter(cellvalue) {
          var strRet = "";
          if (cellvalue) {
            cellvalue = HtmlEncode(cellvalue);
            if (this.GetPM().Get("IsInQueryMode")) {
              strRet = cellvalue;
            } else {
              var url = cellvalue;
              if (typeof (cellvalue) === "string") {
                if ((url.indexOf("http://") != 0) && (url.indexOf("https://") != 0)) {
                  url = "http://" + url;
                }
              }
              strRet = "<a class='siebui-ctrl-url-ro' tabindex='-1' href='" + url + "' target='_blank' >" + cellvalue + "</a>";
            }
          }
          return strRet;
        }

        function emailFormatter(cellvalue) {
          var strRet = "";
          if (cellvalue) {
            cellvalue = HtmlEncode(cellvalue);
            strRet = this.GetPM().Get("IsInQueryMode")
              ? cellvalue
              : "<a tabindex='-1' class='email' href=\"mailto:" + cellvalue + "\">" + cellvalue + "</a>";
          }
          return strRet;
        }


        function imageControlFormatter(cellvalue, options, rowObject) {
          if (!cellvalue) {
            return cellvalue;
          }
          var value = "",
            control = this.GetColumnHelper().GetColControl()[options.colModel.name],
            controlName = control.GetName(),
            controlDisplayName = control.GetDisplayName(),
            bPvtField = this.GetPM().ExecuteMethod("IsPrivateField", controlName);
          if (bPvtField) {
            value = this.GetPM().ExecuteMethod("GetFormattedFieldValue", control, false);
            return value + utils.GetSpanTag(controlName, cellvalue) + "<img src=\"" + cellvalue + "\" alt=\"" + controlDisplayName + "\" title=\"" + controlDisplayName + "\"></img></span>";
          }
          // render the image from the image path
          return utils.GetSpanTag(controlName, cellvalue) + "<img src=\"" + cellvalue + "\" alt=\"" + controlDisplayName + "\" title=\"" + controlDisplayName + "\"></img></span>";

        }

        function phoneFieldFormatter(cellvalue, options, rowObject) {
          var className = "siebui-call-from-ui-disabled  siebui-ctrl-link-call-from-ui-disabled";

          try {
            var commToolbarCmp = SiebelAppFacade.ComponentMgr.FindComponent({ id: consts.get("SWE_PST_COMM_TOOLBAR") });
            if (commToolbarCmp.ExecuteMethod("CallContactFromUIEnabled")) {
              className = "siebui-call-from-ui-enabled siebui-ctrl-link-call-from-ui-enabled";
            }
          } catch (error) {
            SiebelJS.Log(error);
          }

          return "<a href=\"javascript:void(0);\" class=\"" + className + "\" name=\"" + this.GetColumnHelper().GetActualControlName(options.colModel.name) + "\" tabindex=\"-1\" >" + HtmlEncode(cellvalue) + "</a>";
        };

        function textFormatter(cellvalue, canNavigate, options, rowObject, bForce, queryMode, encode) {
          var elem = $.parseHTML(cellvalue, document, true),
            tempValue = cellvalue,
            temp = "",
            aTag = "",
            bHTML = false;
          cellvalue = "";
          if (bForce) {
            for (var i = 0; elem && i < elem.length; i++) {
              temp = $("<span></span>").append(elem[i]).find("*").addBack();
              aTag = temp.filter("a");
              if (!canNavigate && aTag.length) {
                temp.find("a[href]").attr("target", "_blank");
                cellvalue = (utils.IsEmpty(cellvalue) ? '' : cellvalue) + temp[0].outerHTML;
                bHTML = true;
              }
              else {
                if (elem[i].outerHTML) {
                  cellvalue = (utils.IsEmpty(cellvalue) ? '' : cellvalue) + elem[i].outerHTML;
                  bHTML = true;
                }
                else {
                  cellvalue = (utils.IsEmpty(cellvalue) ? '' : cellvalue) + elem[i].textContent;
                }
              }
            }
          }
          else if (!queryMode) {
            for (var i = 0; elem && i < elem.length; i++) {
              temp = $("<span></span>").append(elem[i]).find("*").addBack();
              aTag = temp.filter("a");
              if (!canNavigate && aTag.length) {
                temp.find("a[href]").attr("target", "_blank");
                //only keep tags for "a" and remove other (including its child elements)
                //as we only want to preserve anchor tag as html and rest will be normal text
                temp.html(temp.html().replace(/<\/?([a-z]+)[^>]*>/ig, function (match, tag) {
                  return (tag.toLowerCase() === "a") ? match : "";
                }));
                cellvalue = (utils.IsEmpty(cellvalue) ? '' : cellvalue) + temp[0].outerHTML;
              }
              else {
                var value = encode ? HtmlEncode(elem[i].outerHTML) : elem[i].textContent;
                cellvalue = (utils.IsEmpty(cellvalue) ? '' : cellvalue) + value;
              }
            }
          }
          if (cellvalue === "") {
            cellvalue = tempValue;
          }
          if (!bHTML && canNavigate && elem) { // this control has drilldown property also
            cellvalue = drilldownFormatter.call(this, cellvalue, options, rowObject);
          }
          return cellvalue;
        };

        function textUnformatter(cellvalue, options, rowObject) {
          var control = this.GetColumnHelper().GetColControl()[options.colModel.name],
            pm = this.GetPM();
          return (pm.Get("IsInQueryMode") ? pm.ExecuteMethod("GetFieldValue", control) : pm.ExecuteMethod("GetFormattedFieldValue", control, false)) || cellvalue;
        };

        function getCheckboxtype(index) {
          var ctrlarr = this.GetPM().Get("selectctrlinfo");
          var inputtype = "checkbox";

          if (ctrlarr && ctrlarr[index] && ctrlarr[index] === "0") {
            switch (this.GetPM().Get("ctrlmode")) {
              case siebConsts.get("SWE_PROP_CAN_SHOW_SEL"):
                inputtype = "hidden";
                break;
              case siebConsts.get("SWE_PROP_CAN_ENABLE_SEL"):
                inputtype += "\" aria-readonly = \"true";
                inputtype += "\" readonly = \"readonly";
                break;
            }
          }
          return inputtype;
        };

        function PrepareGroupedColumnInfo(listOfColumns) {
          var pm = this.GetPM();
          var columnName = [];
          var columnModel = [];
          var LeafcolumnModel = [];
          var current = null;
          var that = this;
          var editable = utils.IsTrue(pm.Get("IsEditable") === "1");
          var AppletColumnPS = CCFMiscUtil_CreatePropSet();
          var AppletGroupColumnPS = CCFMiscUtil_CreatePropSet();
          var GroupColumn = null;
          var GroupColumnInfo = null;
          var GroupColumnsMap = {};
          var GetGroupColMap = {};
          var LeafChildrenInfo = [];
          var LeafColumnName = null;
          var ListColumnInfo = null;
          var ListColumnItem = null;
          var outps = [];
          AppletColumnPS = pm.Get("GetGlobalPropSet");

          if (AppletColumnPS.GetChildCount() > 0) {
            AppletGroupColumnPS = pm.ExecuteMethod("GetGroupModel", AppletColumnPS);
          }
          for (var index = 0, length = listOfColumns.length; index < length; index++) {

            if (AppletGroupColumnPS.GetChildCount() > 0) {
              GroupColumn = pm.ExecuteMethod("FindGroupPS", AppletGroupColumnPS, listOfColumns[index].name);
              GroupColumnInfo = pm.ExecuteMethod("GetGroupPSInfo", AppletGroupColumnPS, listOfColumns[index].name);
            }
            //Fallbak for list applet without groups as first condition
            if (!GroupColumn) {

              var ListColumnInfo = PrepareEachColumnInfo.call(this, listOfColumns[index]);

              columnModel.push(ListColumnInfo[0]);
              columnName.push(ListColumnInfo[1]);
            }
            else if ((GroupColumn != null && GroupColumnInfo[1] != 1)) {
              continue;
            }
            else if ((GroupColumn != null && GroupColumnInfo[1] === 1)) {

              LeafChildrenInfo = pm.ExecuteMethod("GetGroupLeafChildrenInfo", GroupColumn);
              if (LeafChildrenInfo.length >= 0)
                var ColumnNames = [];
              for (var j = 0, len = LeafChildrenInfo.length; j < len; j++) {
                LeafColumnName = LeafChildrenInfo[j].GetType();
                ListColumnItem = pm.ExecuteMethod("GetListColumnObjectInfo", LeafColumnName);
                ListColumnInfo = PrepareEachColumnInfo.call(this, ListColumnItem);
                columnModel.push(ListColumnInfo[0]);
                columnName.push(ListColumnInfo[1]);
                ColumnNames[j] = LeafColumnName;
              }
              this.SetGroupHeaderInfo(GroupColumn.GetType(), ColumnNames);
            }

          }


          if (pm.Get("HasHierarchy") && columnModel.length) {
            columnModel[0].unformat = columnModel[0].unformat || function (cellvalue, options, cell) {
              return cellvalue;
            };
            columnModel.push({ name: "", search: false, hidden: true, sortable: false, dispSort: false, resizable: false, hidedlg: true });
            columnName.push("Search");
          }
          return {
            "columnName": columnName,
            "columnModel": columnModel,
            "Direction": SiebelApp.S_App.GetDirection() || ""
          };
        }


        function PrepareEachColumnInfo(currentColumn) {
          var current = {},
            currentControl = currentColumn.control,
            pm = this.GetPM(),
            editable = utils.IsTrue(pm.Get("IsEditable") === "1"),
            isSortable = !pm.Get("IsInQueryMode"),
            that = this;
          //Add the Column with FieldName as the key
          current.name = this.GetColumnHelper().AddColumn(currentColumn.name, currentControl);
          current.editable = editable;
          current.editoptions = { "class": "siebui-list-ctrl", "maxlength": (currentControl.GetMaxSize() || 256) };
          current.sortable = isSortable;
          current.dispSort = currentControl.IsSortable() === siebConsts.get("SWE_NUMERIC_TRUE");
          current.headerAlign = currentControl.GetLabelJustification();
          current.align = currentControl.GetJustification();
          current.controlType = currentColumn.controlType;
          current.isRequired = currentColumn.isRequired;
          switch (currentColumn.controlType) {
            case url:
              current.formatter = function (cellvalue) {
                return urlFormatter.call(that, cellvalue);
              };
              current.unformat = function (cellvalue) {
                return cellvalue;
              };

              break;

            case imageControl:
              current.formatter = function (cellvalue, options, rowObject) {
                return imageControlFormatter.call(that, cellvalue, options, rowObject);
              };
              current.unformat = function (cellvalue, options, cell) {
                return cellvalue;
              };
              break;

            case mailTo:
              current.formatter = function (cellvalue) {
                return emailFormatter.call(that, cellvalue);
              };
              current.unformat = function (cellvalue) {
                return cellvalue;
              };
              break;

            case textArea:
              current.formatter = function (cellvalue, options, rowObject) {
                return '<div class="siebui-list-textareactrl-nofocus">' + HtmlEncode(cellvalue) + '</div>';
              };
              current.unformat = function (cellvalue, options, cell) {
                return cellvalue;
              };
              current.edittype = "textarea";
              var textAreaHeight = "height:" + CalcGridHeight.call(this, false) / 2 + "px;";
              current.editoptions = { "style": textAreaHeight, "class": "siebui-list-textareactrl", "maxlength": (currentControl.GetMaxSize() || 256) };
              break;

            case checkbox:
              current.edittype = "custom";
              current.editoptions = current.editoptions || {};
              current.editoptions.custom_element = function (value, options) {
                var inputtype = "checkbox";
                if (that.GetPM().Get("MultiSelectColumn") === options.name) {
                  inputtype = getCheckboxtype.call(that, that.GetSelectedRow());
                }

                var cb = $("<input type=\"" + inputtype + "\" role=\"checkbox\" tabindex=\"0\" value=\"" + value + "\" aria-checked= " + (value === "Y" ? '"true"' : '"false"') + " " + (value === "Y" ? "checked=checked" : "") + " />");
                if (options && options.dataEvents) {
                  $.each(options.dataEvents, function () {
                    cb.bind(this.type, this.fn);
                  });
                }

                return cb[0];
              };
              current.editoptions.custom_value = function (elem, operation, value) {
                var el = $(elem);
                if (operation === 'get') {
                  return el.val();
                }
                else if (operation === 'set') {
                  el.val(value);
                }
              };
              current.editoptions.dataInit = function (el, options) {
                var grid = that.GetGrid(),
                  uiWrapper = that.GetUIWrapper(that.GetColumnHelper().GetColControl()[options.name]);
                grid.data("EditCellActive", true);
                uiWrapper.ShowUI();
                uiWrapper.SetElementCaching(true);
                grid.removeData("EditCellActive");
                grid = null;
              };
              if (currentColumn.name === pm.Get("MultiSelectColumn")) {
                current.editable = false;
                current.formatter = function (value, options, rowObject) {
                  var inputtype = "checkbox";
                  inputtype = getCheckboxtype.call(that, options.rowId);
                  var cb = ("<input type=\"" + inputtype + "\" name = \"" + that.GetPM().Get("GetPlaceholder") + that.GetPM().Get("MultiSelectColumn") + "\" role=\"checkbox\" tabindex=\"0\" value=\"" + value + "\" aria-checked= " + (value === "Y" ? '"true"' : '"false"') + " " + (value === "Y" ? "checked=checked" : "") + " />");
                  return cb;
                };

                current.unformat = function (cellvalue) {
                  return cellvalue;
                };
              }
              break;

            case passwordCtrl:
              current.edittype = "password";
              current.formatter = function (cellvalue, options, rowObject) {
                options.colModel.title = false;
                return (cellvalue || "").replace(/./g, ".");
              };
              current.unformat = function (cellvalue, options, cell) {
                var control = that.GetColumnHelper().GetColControl()[options.colModel.name];
                return that.GetPM().ExecuteMethod("GetFormattedFieldValue", control, false);
              };
              break;
          }

          if (currentColumn.isLink) {
            // Formatter needs to unformat while Cell Editing..
            current.formatter = function (cellvalue, options, rowObject) {
              return drilldownFormatter.call(that, cellvalue, options, rowObject);
            };
            current.unformat = function (cellvalue, options, cell) {
              return cellvalue;
            };
          }
          current.isLink = currentColumn.isLink;

          if (currentControl.GetShowBase() &&
            currentControl.GetUIType() != checkbox &&
            currentControl.GetUIType() != url &&
            currentControl.GetUIType() != mailTo) {
            current.unformat = function (cellvalue, options, rowObject) {
              return textUnformatter.call(that, cellvalue, options, rowObject);
            };

            current.formatter = function (cellvalue, options, rowObject) {
              var bForce = false;
              var retVal = "";
              var ctrlName = that.GetColumnHelper().GetActualControlName(options.colModel.name);
              var canNavigate = that.GetPM().ExecuteMethod("CanNavigate", ctrlName, options.rowId - 1);
              var colName = that.GetColumnHelper().GetModifiedColumnName(ctrlName);
              var ctrl = that.GetColumnHelper().GetColumnControl(colName);
              var canShowTextHTML = ((ctrl.GetUIType() === text || ctrl.GetUIType() === textArea) && !utils.IsTrue(ctrl.IsEncode()));
              var canShowPlainTextHTML = (ctrl.GetUIType() === plainText) && !utils.IsTrue(ctrl.IsEncode());
              var queryMode = that.GetPM().Get("IsInQueryMode");
              // Encode value only for text controls and only if 'Encode' control user property is set to true.
              // If control User Property 'Encode' is set to false, show the value as it is. This 'value' is coming from trusted source(SWE).
              if ((canShowTextHTML || canShowPlainTextHTML) && !queryMode) {
                bForce = true;
                retVal = textFormatter.call(that, cellvalue, canNavigate, options, rowObject, bForce, queryMode, utils.IsTrue(ctrl.IsEncode()));
              }
              else {
                if (ctrl.GetUIType() === plainText) {
                  retVal = HtmlEncode(cellvalue);
                }
                else {
                  cellvalue = queryMode ? HtmlEncode(cellvalue) : cellvalue;
                  retVal = textFormatter.call(that, cellvalue, canNavigate, options, rowObject, bForce, queryMode, utils.IsTrue(ctrl.IsEncode()));
                }
              }
              return retVal;
            };
          }

          if (currentControl.GetIconMap()) {
            current.formatter = function (cellvalue, options, rowObject) {
              return IconMapFormatter.call(that, cellvalue, options, rowObject);
            };
            current.unformat = function (cellvalue, options, cell) {
              return cellvalue;
            };
          }

          current.editoptions = current.editoptions || {};
          current.editoptions.dataEvents = [{
            type: 'keydown',
            fn: function (event) {
              event.data = event.data || {};
              event.data.ctrl = that.GetColumnControl($(this).attr("name"));
              that.HandleKeyEvents.call(that, $(this), event, $(this).val());
              if (!event.isImmediatePropagationStopped() &&
                (event.which === $.ui.keyCode.ENTER ||
                  event.which === $.ui.keyCode.ESCAPE)) {
                // Cause jqGrid has a habit ot killing event in case of ENTER/ESCAPE and we won't get a handle
                // for handling command manager action, hence we are literally calling FireAccelerator
                SiebelApp.S_App.GetCmdMgr().FireAccelerator(event, event.which, utils.GetEventNType(event));
                event.stopImmediatePropagation();
              }
              else if (event.which === $.ui.keyCode.TAB) {
                that.GetPM().SetProperty("ColumnChange", true);
                if (event.data.ctrl.GetUIType() === combo) {
                  var el = $(this);
                  var iRow = el.attr("id").substr(0, el.attr("id").indexOf("_"));
                  var iCol = el.parent("td").parent("tr").children().index(el.parent("td"));
                  var retVal = InvokeColumnChange.call(that, el, event.data.ctrl, iRow, iCol, $(el).val());
                  if (retVal === false) {
                    event.stopImmediatePropagation();
                    event.preventDefault();
                  }
                  that.GetPM().SetProperty("isControlPopupOpen", false);
                }
              }
            }
          }];

          //Accessibility : Give a unique ID to each cell so that we can refer the ID and append the accessibility attributes
          current.cellattr = function (rowId, rowValue, rawObject, cm, rdata) {
            return (that.AddAccessibilityInfo(cm.controlType, cm.isLink, rdata[cm.name]) + ' id=' + GetColId(rowId, this.id, cm.name));
          };
          current.width = currentControl.GetWidth() + "px";

          // if comm enabled, need to check for phone field, for call contact from ui feature
          var commToolbarCmp = SiebelAppFacade.ComponentMgr.FindComponent({ id: consts.get("SWE_PST_COMM_TOOLBAR") });
          if (commToolbarCmp) {
            var dataType = pm.ExecuteMethod("GetFieldDataType", currentColumn.name);
            if (dataType.toLowerCase() === siebConsts.get("SWE_CTRL_PHONE").toLowerCase()) {
              current.formatter = function (cellvalue, options, rowObject) {
                return phoneFieldFormatter.call(that, cellvalue, options, rowObject);
              };
              current.unformat = function (cellvalue, options, cell) {
                return cellvalue;
              };
            }
          }
          //Push the DisplayName in the columnName of Grid. Please not that
          // we have FieldName in the columnModel
          var colname = HtmlEncode(currentControl.GetDisplayName()),
            mSelCol = this.GetPM().Get("MultiSelectColumn"),
            isAutoOn = SiebelApp.S_App.IsAutoOn(),
            multiSel = SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_CKEDITOR_SELECT_ALL"),
            rnString = "";
          if (utils.IsTrue(isAutoOn)) {
            rnString = "ot = \"" + checkbox + "\" rn = \"" + multiSel + "\" un = \"" + multiSel + "\"";
          }
          if (currentColumn.name === mSelCol) {
            colname = ("<input type=\"checkbox\" tabindex=\"-1\" title= \"Select Record\"  id = \"" + ("id_" + pm.Get("GetPlaceholder") + mSelCol) + "\"" + rnString + "name = \"" + ("header_" + pm.Get("GetPlaceholder") + mSelCol) + "\" aria-checked = \"false\"/>");
          }
          return [current, colname];

        }

        function PrepareColumnInfo(listOfColumns) {
          var columnName = [];
          var columnModel = [];
          var current = null;
          var that = this;

          var pm = this.GetPM(),
            currentColumn,
            currentControl,
            isSortable = !pm.Get("IsInQueryMode"),
            editable = utils.IsTrue(pm.Get("IsEditable") === "1"),
            isHierarchy = pm.Get("HasHierarchy"),
            eachColInfo,
            titleColArr = [],
            columnInfo;
          for (var index = 0, length = listOfColumns.length; index < length; index++) {
            currentColumn = listOfColumns[index];
            eachColInfo = PrepareEachColumnInfo.call(this, currentColumn);
            columnInfo = eachColInfo[0];
            columnModel.push(columnInfo);
            columnName.push(eachColInfo[1]);
            if (columnInfo.name.indexOf('title') > -1) {
              titleColArr.push(columnInfo.name);
            }
          }
          pm.SetProperty("titleColArr", titleColArr);

          if (pm.Get("HasHierarchy") && columnModel.length) {
            columnModel[0].unformat = columnModel[0].unformat || function (cellvalue, options, cell) {
              return cellvalue;
            };

            columnModel.push({ name: "", search: false, hidden: true, sortable: false, dispSort: false, resizable: false, hidedlg: true });
            columnName.push("Search");
          }

          return {
            "columnName": columnName,
            "columnModel": columnModel,
            "Direction": SiebelApp.S_App.GetDirection() || ""
          };
        }

        function CloseControlPopup() {
          var pm = this.GetPM();
          if (pm.Get("isControlPopupOpen") === false) {
            var control = this.GetPM().Get("GetActiveControl");
            if (control) {
              var el;
              if (control.GetName()) {
                el = GetControlElement.call(this, control.GetName());
              }
              else {
                el = el = $($("input[name=\"" + control.GetInputName() + "\"]")[0] || $("#" + control.GetInputName())[0]);
              }
              if (el && el.length > 0) {
                switch (control.GetUIType()) {
                  case combo:
                    el.autocomplete("close");
                    break;

                  case datePick:
                  case dateTimePick:
                  case dateTimezonePick:
                    el.datetimepicker("hide");
                    break;

                  case calc:
                    el.calculator("hide");
                    break;
                }
              }
            }
          }
        }

        function GetControlElement(ctrlName) {
          if (ctrlName) {
            var jqGridCtrl = this.GetGrid();
            ctrlName = this.GetColumnHelper().GetModifiedColumnName(ctrlName);
            var rowid = jqGridCtrl.jqGrid('getGridParam', 'selrow');
            var el = $("#" + rowid + "_" + ctrlName, jqGridCtrl);
            return el;
          }
        }
        // PRANGASA - 18353142 - make the grid cell ID unique
        function GetColId(rowId, ctxId, ctrlName) {
          return ("" + rowId + "_" + ctxId + "_" + ctrlName).replace(/style/i, 'style').replace(/title/i, 'title');
        }

        IPRJQGridRenderer.prototype.resetCell = function (name) {
          var jqGridCtrl = this.GetGrid();
          var currentRow = Number(jqGridCtrl.jqGrid('getGridParam', 'selrow'));
          var listOfColumns = this.GetPM().Get("ListOfColumns");
          var map_col = this.GetColumnHelper().GetColMap();
          var listLength = listOfColumns.length;
          // See focus if for Column
          for (var i = 0; i < listLength; i++) {
            for (var key in map_col) {
              if (map_col.hasOwnProperty(key)) {
                if (listOfColumns[i].name == map_col[key]) {
                  if (listOfColumns[i].name == name) {
                    var canUpdate = this.CanUpdateControl(null, key);
                    var iCol = listOfColumns[i].index;
                    if (currentRow > 0) {
                      jqGridCtrl.jqGrid('editCell', currentRow, iCol, false);
                    }
                    return true;
                  }
                }
              }

            }
          }

        };

        /*Will return the listApplet header height,If header height is not define then it will return defult height*/
        function GetHeaderHeight() {
          var styleSheetName = SiebelApp.S_App.GetStyleSheetName();
          var headerheight = utils.GetstyleSheetPropVal(styleSheetName, ".siebui .ListAppletHeader", "height");

          return headerheight || siebConsts.get("DFLT_HEADHGT");
        }
        /*Will return the listApplet row  height,If row  height is not define in css then it will return defult row  height*/
        function GetRowHeight() {
          var styleSheetName = SiebelApp.S_App.GetStyleSheetName();
          var rowHeight = utils.GetstyleSheetPropVal(styleSheetName, ".siebui .ListAppletRow", "height");

          return rowHeight || siebConsts.get("MIN_ROWHGT");
        }

        /* Will set row height of all row in the jqgrid*/
        function SetRowHeight() {
          var grid = this.GetGrid();
          var rowHeight = GetRowHeight.call(this);
          var ids = grid.getDataIDs();

          for (var i = 0, len = ids.length; i < len; i++) {
            grid.setRowData(ids[i], false, { height: rowHeight });
          }
        }

        /*Will calculate listapplet height based of number of row and list applet row height*/
        function CalcGridHeight(isgrid) {
          var pm = this.GetPM(),
            showElastic = SiebelApp.S_App.GetEnableElasticGrid(),
            rowCount = Number(pm.Get("GetRowListRowCount")),
            rowHeight = parseFloat(GetRowHeight.call(this)),
            retVal = rowCount * rowHeight,
            disableElasticGrid = pm.Get("DisableElasticGrid");

          if (isgrid && utils.IsTrue(showElastic) && !disableElasticGrid) {
            var recordCount = Number(pm.Get("GetRecordSet").length);
            if (SiebelAppFacade.DecisionManager.IsTouch()) {
              recordCount = recordCount * 3;
            }
            if (recordCount < rowCount) {
              retVal = recordCount * rowHeight;
            }
          }
          return retVal;
        }
        /*if  sum of the all column width grater then is parent size then it will return false otherwise it will return true
        * So that all column display can we  expand as per parent size.
        *
        *  */
        function isShrinkToFit(parentWidth) {
          var pm = this.GetPM();
          var placeHolder = pm.Get("GetPlaceholder");
          var totalcolumnWidth = 0;
          var listOfColumns = pm.Get("ListOfColumns");

          var listLength = listOfColumns.length;
          for (var i = 0; i < listLength; i++) {
            totalcolumnWidth = Number(totalcolumnWidth) + Number(listOfColumns[i].control.GetWidth());
          }
          if (parentWidth < totalcolumnWidth) {
            return false;
          }

          return true;
        }

        function GetTotalColumnWidth() {
          var pm = this.GetPM();
          var totalcolumnWidth = 0;
          var listOfColumns = pm.Get("ListOfColumns");
          var len = listOfColumns.length;

          for (var i = 0; i < len; i++) {

            totalcolumnWidth = Number(totalcolumnWidth) + Number(listOfColumns[i].control.GetWidth());
          }
          return totalcolumnWidth;
        }

        function UpdateHeaderControl() {
          var pm = this.GetPM();

          var multiselcol = pm.Get("MultiSelectColumn");
          if (multiselcol) {
            var control = pm.ExecuteMethod("GetControl", multiselcol);
            if (control) {
              var element = $("#id_" + pm.Get("GetPlaceholder") + multiselcol);
              var canUpdate = pm.ExecuteMethod("CanInvokeMethod", control.GetMethodName());
              if (!canUpdate) {
                element.attr("disabled", "disabled");
              } else {
                element.removeAttr("disabled");
              }
              element.attr("aria-disable", !canUpdate);
            }
          }
        }

        function GetGroupHeaderTitleText(ColumnName) {
          var TitleText = "";
          var AppletColumnPS = CCFMiscUtil_CreatePropSet();
          var AppletGroupColumnPS = CCFMiscUtil_CreatePropSet();
          var GroupColumn = null;
          var GroupColumnInfo = null;
          var isNlevel = false;
          AppletColumnPS = this.GetPM().Get("GetGlobalPropSet");
          if (AppletColumnPS.GetChildCount() > 0) {
            AppletGroupColumnPS = this.GetPM().ExecuteMethod("GetGroupModel", AppletColumnPS);
            if (AppletGroupColumnPS.GetChildCount() > 0) {
              GroupColumn = this.GetPM().ExecuteMethod("FindGroupPS", AppletGroupColumnPS, ColumnName);
              GroupColumnInfo = this.GetPM().ExecuteMethod("GetGroupPSInfo", AppletGroupColumnPS, ColumnName);
              var childPS = GroupColumn.EnumChildren(true);
              while (childPS != null) {
                if (childPS.GetChildCount() > 0) {
                  TitleText = GetTitleFromGroupColumn.call(this, GroupColumn);
                  isNlevel = true;
                  break;
                }
                childPS = GroupColumn.EnumChildren(false);
              }
              if (!isNlevel) {
                var control = this.GetPM().ExecuteMethod("GetControl", ColumnName);
                TitleText = control.GetDisplayName();
              }
            }

          }
          return TitleText;
        }

        function GetTitleFromGroupColumn(PS) {
          var TitleText = "";
          var depth = 0;
          var i = 0;
          var psinfo = this.GetPM().ExecuteMethod("GetGroupLeafChildrenInfo", PS);
          var GrpColSpan = psinfo.length;
          TitleText = TableBuilerOpenTag.call(this, TitleText);
          //get the Group pS depth
          depth = this.GetPM().ExecuteMethod("GetGroupPSDepth", PS);
          //for each level starting form 0 get a tr ,for each tr get nodes for td , for each  node get leaf items for td colspan
          while (i < depth) {
            TitleText = RowBuilerOpenTag.call(this, TitleText);
            var OutPS = [];
            if (i > 0) {
              OutPS = this.GetPM().ExecuteMethod("GetPSatLevel", PS, i);
            }
            else {
              OutPS.push(PS);
            }
            for (var index = 0; index < OutPS.length; index++) {
              if (OutPS[index].GetChildCount() != 0) {
                var psinfo = this.GetPM().ExecuteMethod("GetGroupLeafChildrenInfo", OutPS[index]);
                colspan = psinfo.length;
              }
              else {
                colspan = 1;
              }
              var TitleTextTD = "";
              if (colspan != 1) {
                var control = this.GetPM().ExecuteMethod("GetControl", OutPS[index].GetType());
                TitleTextTD = control.GetDisplayName();
              }
              TitleText = TDBuilerOpenTag.call(this, TitleText, colspan, GrpColSpan, i, TitleTextTD);
              TitleText = TDBuilerCloseTag.call(this, TitleText);
            }
            TitleText = RowBuilerCloseTag.call(this, TitleText);
            i++;
          }
          TitleText = TableBuilerCloseTag.call(this, TitleText);
          return TitleText;
        };

        function TableBuilerOpenTag(titletext) {
          return titletext + '<table style="width:100%;border-spacing:0px;border-style:solid;border:0.5px solid black;">';
        };
        function TableBuilerCloseTag(titletext) {
          return titletext + '</table>';
        };
        function RowBuilerOpenTag(titletext) {
          return titletext + '<tr>';
        };
        function RowBuilerCloseTag(titletext) {
          return titletext + '</tr>';
        };
        function TDBuilerOpenTag(titletext, colspan, GrpColSpan, i, type) {
          var percent = null;
          percent = (colspan / GrpColSpan) * 100;
          return titletext + '<td style="border:1px solid black;width:' + percent + '%;"' + 'id="hgrp' + i + '" colspan="' + colspan + '">' + type;
        };
        function TDBuilerCloseTag(titletext) {
          return titletext + '</td>';
        };
        function processConfigAttr(colModel) {
          var placeHolder = this.GetPM().Get("GetPlaceholder");
          for (var header in colModel) {
            if (colModel.hasOwnProperty(header)) {
              var elem = $("#" + "jqgh_" + placeHolder + "_" + colModel[header].name).parent(),
                ctrl = this.GetColumnHelper().GetColControl()[colModel[header].name];
              if (ctrl) {
                elem.attr("irt", "ListColumn")
                  .attr("irn", ctrl.GetName());
              }
            }
          }
        };

        IPRJQGridRenderer.prototype.ShowUI = function () {
          SiebelAppFacade.IPRJQGridRenderer.superclass.ShowUI.call(this);
          var that = this;
          var pm = this.GetPM();
          var listctrl = pm.Get("ListOfColumns"),
            listctrlLen = listctrl.length;

          //var columnInfo = PrepareColumnInfo.call(this, listctrl);
          var placeHolder = pm.Get("GetPlaceholder");
          var hasHierarchy = pm.Get("HasHierarchy");
          var AppletColumnPS = CCFMiscUtil_CreatePropSet();
          AppletColumnPS = this.GetPM().Get("GetGlobalPropSet");
          var columnInfo;
          if (SiebelApp.S_App.IsRwd() && (utils.IsTrue(pm.Get("IsObjResponsive"))) && AppletColumnPS.GetChildCount() > 0) {//RWD & Group header only will follow different stack.
            columnInfo = PrepareGroupedColumnInfo.call(this, listctrl);
          }
          else {
            columnInfo = PrepareColumnInfo.call(this, listctrl);
          }

          if (SiebelApp.S_App.IsRwd() && (utils.IsTrue(pm.Get("IsObjResponsive")))) {
            var listCtrlId = pm.Get("GetListId");
            this.SetGrid($("#" + listCtrlId)); //for RWD to maintain the configurable list applet control id thought the entire cycle rather than code generated .
          }
          else {
            this.SetGrid($("#" + placeHolder));
          }
          var appletEl = $("#s_" + pm.Get("GetFullId") + "_div");
          var jqGridCtrl = this.GetGrid();
          if (jqGridCtrl.length > 0) {
            var colIndex = 0;
            var isAutoOn = utils.IsTrue(SiebelApp.S_App.IsAutoOn());
            var gridHeight = CalcGridHeight.call(this, true) + Number(GridPadding);
            var parentWidth = jqGridCtrl.parent().data("_width_") || jqGridCtrl.parent().outerWidth();
            var totalcolwd = GetTotalColumnWidth.call(this);
            if (parentWidth > totalcolwd && listctrlLen > 0) {
              columnInfo.columnModel[columnInfo.columnModel.length - 1].width = (Number(listctrl[listctrlLen - 1].control.GetWidth()) +
                parentWidth - totalcolwd - Number(GridPadding)).toString() + "px";
            }

            try {
              var lastsort = (pm.Get("JQGridProp_lastsort")) ? pm.Get("JQGridProp_lastsort") : 0,
                sortorder = (pm.Get("JQGridProp_sortorder")) ? pm.Get("JQGridProp_sortorder") : siebConsts.get("SORT_DESCENDING"),
                sortColumn = pm.Get("JQGridProp_lastsortCol");
              var gridConfig = {
                datatype: "local",
                direction: columnInfo.Direction,
                colModel: columnInfo.columnModel,
                colNames: columnInfo.columnName,
                autoencode: true,
                shrinkToFit: false,
                autowidth: true,
                initWidth: jqGridCtrl.parent().data("_width_"),
                pager: '#pager_' + placeHolder,
                pgbuttons: !SiebelAppFacade.DecisionManager.IsTouch(),
                pginput: false,
                viewrecords: false,
                sortname: 'name',
                lastsort: lastsort,
                sortorder: sortorder,
                multiselect: true,
                hoverrows: false,
                height: gridHeight,
                gridview: true,
                footerrow: pm.Get("GetHasTotalRow"),
                sortable: GetSortableConfig.call(this, true, placeHolder, columnInfo.columnModel)
              };

              if (hasHierarchy) {
                $.extend(gridConfig, {
                  gridview: false,
                  treeGrid: true,
                  treeGridModel: "adjacency",
                  treeIcons: {
                    plus: 'ui-icon-triangle-1-e',
                    minus: 'ui-icon-triangle-1-s',
                    leaf: 'ui-icon-radio-off'
                  },
                  treeReader: {
                    level_field: "Hierarchy_Level",
                    parent_id_field: "Parent_Id",
                    leaf_field: "Is_Leaf",
                    expanded_field: "Is_Expanded"
                  },
                  ExpandColumn: columnInfo.columnName[0]
                });
              }

              jqGridCtrl.jqGrid(gridConfig);
              if (lastsort) {
                ShowSortIcon.call(this, sortColumn, sortorder);
              }
              if (SiebelApp.S_App.IsConfigMode()) {
                processConfigAttr.call(this, jqGridCtrl.jqGrid('getGridParam', 'colModel'));
              }

              if (SiebelApp.S_App.IsRwd() && (utils.IsTrue(pm.Get("IsObjResponsive"))) && AppletColumnPS.GetChildCount() > 0) {

                //GroupHeaderInfo is a Groupname to leaf-column array map that will iterate over each root group for an applet
                var LeafColumnNames = [];
                var TempParamBuilder = null
                var GroupHeaderParam = [];
                var TempParamBuilder = null;
                var index = 0;
                var GroupHeaderInfo = this.GetGroupHeaderInfo();
                for (var key in GroupHeaderInfo) {
                  var GroupName = GetGroupHeaderTitleText.call(this, key);
                  var ColGroupArray = GroupHeaderInfo[key];
                  var ColCount = ColGroupArray.length;
                  var StartColName = this.GetColumnHelper().GetModifiedColumnName(ColGroupArray[0]);
                  TempParamBuilder = { startColumnName: StartColName, numberOfColumns: ColCount, titleText: GroupName };
                  GroupHeaderParam[index] = TempParamBuilder
                  index++;
                  TempParamBuilder = "";
                  LeafColumnNames = LeafColumnNames.concat(ColGroupArray);
                }
              }

              jqGridCtrl.hideCol('cb');

              appletEl.find(".ui-jqgrid-sortable").css('height', GetHeaderHeight.call(this));
              appletEl.removeClass("siebui-form");
              appletEl.addClass(" siebui-applet siebui-list ");

              //Accessibility :: Add the tags required for accessibility which can be refered in grid
              if (utils.IsTrue(SiebelApp.S_App.GetAccessibilityEnhanced())) {
                this.AddAccessibilityTags();
              }


              // Why JQGrid does not provide a way to set Tooltip? Also i18n?
              // Before Changing tooltip, make sure to change in OnPagination
              $("#next_pager_" + placeHolder).children("span").attr("title", localeObj.GetLocalString("NextRecToolTip"));
              $("#last_pager_" + placeHolder).children("span").attr("title", localeObj.GetLocalString("NextRecSetToolTip"));
              $("#prev_pager_" + placeHolder).children("span").attr("title", localeObj.GetLocalString("PrevRecToolTip"));
              $("#first_pager_" + placeHolder).children("span").attr("title", localeObj.GetLocalString("PrevRecSetToolTip"));

              if (isAutoOn) {//QTP attributes
                $("#next_pager_" + placeHolder).children("span").attr(consts.get("SWE_PROP_QTP_OT"), "button");
                $("#next_pager_" + placeHolder).children("span").attr(consts.get("SWE_PROP_QTP_RN"), "Next Record");
                $("#next_pager_" + placeHolder).children("span").attr(consts.get("SWE_PROP_QTP_UN"), localeObj.GetLocalString("NextRecToolTip"));

                $("#last_pager_" + placeHolder).children("span").attr(consts.get("SWE_PROP_QTP_OT"), "button");
                $("#last_pager_" + placeHolder).children("span").attr(consts.get("SWE_PROP_QTP_RN"), "Next Record Set");
                $("#last_pager_" + placeHolder).children("span").attr(consts.get("SWE_PROP_QTP_UN"), localeObj.GetLocalString("NextRecSetToolTip"));

                $("#prev_pager_" + placeHolder).children("span").attr(consts.get("SWE_PROP_QTP_OT"), "button");
                $("#prev_pager_" + placeHolder).children("span").attr(consts.get("SWE_PROP_QTP_RN"), "Previous Record");
                $("#prev_pager_" + placeHolder).children("span").attr(consts.get("SWE_PROP_QTP_UN"), localeObj.GetLocalString("PrevRecToolTip"));

                $("#first_pager_" + placeHolder).children("span").attr(consts.get("SWE_PROP_QTP_OT"), "button");
                $("#first_pager_" + placeHolder).children("span").attr(consts.get("SWE_PROP_QTP_RN"), "Previous Record Set");
                $("#first_pager_" + placeHolder).children("span").attr(consts.get("SWE_PROP_QTP_UN"), localeObj.GetLocalString("PrevRecSetToolTip"));
              }

              $("#pager_" + placeHolder).addClass("siebui-applet-footer");
              //Add QTP info
              if (SiebelApp.S_App.IsRwd() && (utils.IsTrue(this.GetPM().Get("IsObjResponsive")))) {
                var temp = "#jqgh_" + listCtrlId;
              }
              else {
                var temp = "#jqgh_" + placeHolder;
              }

              var colModelLength = columnInfo.columnModel.length;
              for (colIndex = 0; colIndex < colModelLength; colIndex++) {
                var currentCol = columnInfo.columnModel[colIndex];
                if (isAutoOn) {
                  var target = $(temp + "_" + currentCol.name);
                  SiebelAppFacade.IPRJQGridRenderer.superclass.InjectQTPInfo.call(this, target, this.GetColumnControl(currentCol.name));

                }
                if (SiebelApp.S_App.IsConfigMode()) {
                  var parent_target = $(temp + "_" + currentCol.name).parent();
                  SiebelAppFacade.IPRJQGridRenderer.superclass.InjectConfigInfo.call(this, parent_target, this.GetColumnControl(currentCol.name), "AWTI");
                }
                if (currentCol.headerAlign) {
                  jqGridCtrl.jqGrid('setLabel', currentCol.name, '', { 'text-align': currentCol.headerAlign });
                }
              }

              if (SiebelApp.S_App.IsRwd() && (utils.IsTrue(this.GetPM().Get("IsObjResponsive"))) && AppletColumnPS.GetChildCount() > 0) {
                jqGridCtrl.jqGrid('setGroupHeaders', {
                  useColSpanStyle: true,
                  groupHeaders: GroupHeaderParam
                });
              }


              // Create and hide column sort-lock menu:
              var headerMenuId = "s_" + pm.Get("GetFullId") + "_headerMenu",
                strSortAscToolTip = localeObj.GetLocalString("SortAscToolTip"),
                strSortDesToolTip = localeObj.GetLocalString("SortDesToolTip"),
                strLock = localeObj.GetLocalString("IDS_SWE_GRID_COLUMN_LOCK"),
                strUnlock = localeObj.GetLocalString("IDS_SWE_GRID_COLUMN_UNLOCK"),
                headerMenuHTML = "<ul id='" + headerMenuId + "' class='siebui-list-header-menu' ot='headerMenu' role='tablist' un='headerMenu' rn='headerMenu'>"
              headerMenuHTML += "<li id='SortAsc' aria-label='" + strSortAscToolTip + "' title='" + strSortAscToolTip + "' role='tab' class='siebui-list-header-menu-item' ot='sortColumn' rn='sortColumn-asc' un='sortColumn'><a href='javascript:void(0)' role='presentation' class='siebui-icon-arrowsm-up'/></li>"
              headerMenuHTML += "<li id='SortDesc' aria-label='" + strSortDesToolTip + "' title='" + strSortDesToolTip + "' role='tab' class='siebui-list-header-menu-item' ot='sortColumn' rn='sortColumn-desc' un='sortColumn'><a href='javascript:void(0)' role='presentation' class='siebui-icon-arrowsm-down'/></li>"
              headerMenuHTML += "<li id='Lock' aria-label='" + strLock + "' title='" + strLock + "' role='tab' class='siebui-list-header-menu-item' ot='lockColumn' rn='lockColumn' un='lockColumn' ><a href='javascript:void(0)' role='presentation' class='siebui-icon-lock'/></li>"
              headerMenuHTML += "<li id='Unlock' aria-label='" + strUnlock + "' title='" + strUnlock + "' role='tab' class='siebui-list-header-menu-item' ot='unlockColumn' rn='unlockColumn' un='unlockColumn'><a href='javascript:void(0)' role='presentation' class='siebui-icon-unlock'/></li>"
              headerMenuHTML += "</ul>";
              appletEl.append(headerMenuHTML);
              $("#" + headerMenuId).styleHide();

              var thd = $(jqGridCtrl[0].grid.hDiv).find("thead").eq(0);
              if (thd.length) {
                var colModelln = columnInfo.columnModel ? columnInfo.columnModel.length : 0;
                var strsort = localeObj.GetLocalString(siebConsts.get("IDS_SORTABLE_TOOL_TIP"));
                var strnosort = localeObj.GetLocalString(siebConsts.get("IDS_NON_SORTABLE_TOOL_TIP"));
                var skipCheckBox = hasHierarchy ? 0 : 1;
                var thEl = thd.find("tr.ui-jqgrid-labels th");
                for (var iCol = 0; iCol < colModelln; iCol++) {
                  thEl.eq(iCol + skipCheckBox)
                    .attr({
                      "title": columnInfo.columnModel[iCol].dispSort ? strsort : strnosort,
                      "role": "columnheader"
                    });
                }
                thEl.eq(1).attr("tabindex", "0");
              }

              var ctrlLock = pm.Get("LockedControls");
              var colModel = columnInfo.columnModel;
              var resetColLock = false;
              if (ctrlLock) {
                var lockCol = ctrlLock.split("*");
                for (var i = 0; i < lockCol.length; ++i) {
                  if (colModel[i].hidden) {
                    continue;
                  }
                  if (colModel[i].name !== lockCol[i]) {
                    resetColLock = true;
                    break;
                  }
                }
                if (!resetColLock) {
                  LockColumns.call(this, lockCol);
                }
                else {
                  pm.SetProperty("LockedControls", "");
                }
              }

              var tableHeader = $("table:first", jqGridCtrl[0].grid.hDiv);
              tableHeader.attr({
                "aria-labelledby": "",
                "datatable": "0",            //Bug 16241301
                "role": "presentation"       //Bug 16241301
              });
              thd = null;
              tableHeader = null;
            }
            catch (error) {
              SiebelJS.Log(error); // We need a better logging mechanism...
            }
          }
          UpdateHeaderControl.call(this);
          SetRowIdentifier.call(this, pm, listctrl, listctrlLen);

          jqGridCtrl = null;
          columnInfo = null;
          appletEl = null;
          setTimeout(function () {
            that.resize();
          }, 0);
          this.CacheState("ClearData");
          pm.SetProperty("BaseAppletControls", GetBaseAppletControls.call(this));
        };

        function SetRowIdentifier(pm, listCols, listColLength) {
          //Accessibility
          var rowId = pm.Get("GetRowIdentifier");

          if (utils.IsTrue(SiebelApp.S_App.GetAccessibilityEnhanced()) && !rowId && listColLength > 0) {
            //Set Non Checkbox colmun as identifier
            for (var index = 0; index < listCols.length; index++) {
              if (listCols[index].controlType !== checkbox) {
                rowId = listCols[index].name;
                break;
              }
            }
            if (!rowId) {
              rowId = listCols[0].name;
            }
          }
          pm.SetProperty("GetRowIdentifierName", this.GetColumnHelper().GetModifiedColumnName(rowId))
        }

        function ShowSortIcon(sortColumn, sortorder) {
          var pm = this.GetPM(),
            colHeaderId = "jqgh_" + pm.Get("GetPlaceholder") + "_" + sortColumn,
            colHeaderIdEl = $("#s_" + pm.Get("GetFullId") + "_div").find("#" + colHeaderId + ", .frozen-div #" + colHeaderId),
            ascIcons = colHeaderIdEl.find(".ui-grid-ico-sort.ui-icon-asc"),
            descIcons = colHeaderIdEl.find(".ui-grid-ico-sort.ui-icon-desc");

          switch (sortorder) {
            case "asc":
              descIcons.hide();
              ascIcons.show();
              break;
            case "desc":
              ascIcons.hide();
              descIcons.show();
              break;
          }
        }

        function GetSortableConfig(isAllow, placeHolder, colModel) {
          var config = isAllow;

          if (isAllow) {
            var sel = [],
              filteredColModel = colModel.filter(function (col) {
                var name = col.name,
                  isValid = col.name != "";
                return isValid ? sel.push("#" + placeHolder + "_" + name) : isValid;
              });
            sel = sel.join(",");
            config = {
              options: {
                items: sel,
                ctx: this,
                cancel: "input,textarea,button,select,option,.siebui-locked",
                beforeStop: function (evt, ui) {
                  if ($(ui.placeholder).nextAll(".siebui-locked").length) {
                    return false;
                  }
                }
              },
              update: function (event, ui) {
                SiebelApp.S_App.uiStatus.Busy({
                  target: SiebelApp.S_App.GetTargetViewContainer(),
                  mask: true
                });
                //remove hidden col.
                var that = this.options.ctx;
                var cm = that.GetGrid().jqGrid("getGridParam", "colModel"),
                  colob,
                  ln,
                  i,
                  j = 1,
                  colhelp = that.GetColumnHelper().GetColMap();
                if (cm && colhelp) {
                  colob = {};
                  ln = cm.length;
                  for (i = 0; i < ln; i++) {
                    if (cm[i].hidden === false) {
                      colob[colhelp[cm[i].name]] = j;
                      j++;
                    }
                  }
                  that.GetPM().OnControlEvent(siebConsts.get("PHYEVENT_COL_ORDER_CHANGE"), colob);
                }
                cm = null;
                SiebelApp.S_App.uiStatus.Free();
              }
            }
          }
          return config;
        }

        function ShowTotal() {
          var pm = this.GetPM(),
            jqGridCtrl = this.GetGrid(),
            totalRow,
            totalSet = pm.Get("TotalSet"),
            failrt = jqGridCtrl.length === 0 || pm.Get("GetHasTotalRow") !== true;

          if (!failrt) {
            totalRow = pm.Get("GetTotalMap");
            if (totalRow) {
              jqGridCtrl.jqGrid('footerData', 'set', this.GetColumnHelper().TranslateObject(pm.Get("ListOfColumns"), totalRow));
            }
          }
        }

        function DisplaySortInfo(control, direction) {
          var grid = this.GetGrid();

          if (control) {
            if (control === "reset") {
              var sortedCol = this.GetGrid().jqGrid("getGridParam", "sortname");
              if (sortedCol) {
                $("#jqgh_" + this.GetPM().Get("GetPlaceholder") + "_" + sortedCol).find("span.s-ico").styleHide();
                this.GetPM().SetProperty("JQGridProp_lastsortCol", 0);
              }
            }
            else {
              var modifiedCtrlName = this.GetColumnHelper().GetModifiedColumnName(control.GetName());
              if (modifiedCtrlName) {
                this.GetPM().SetProperty("SortMode", true);
                grid.jqGrid("sortGrid", modifiedCtrlName, true, direction);
                $("#jqgh_" + this.GetPM().Get("GetPlaceholder") + "_" + modifiedCtrlName).find("span.s-ico").styleShow();
                this.GetPM().SetProperty("SortMode", false);
                this.GetPM().SetProperty("JQGridProp_lastsort", grid.jqGrid("getGridParam", "lastsort"));
                this.GetPM().SetProperty("JQGridProp_lastsortCol", modifiedCtrlName);
                this.GetPM().SetProperty("JQGridProp_sortorder", direction);
              }
            }
          }
        }

        function PreUpdateNavigateInfo(readOnly) {
          var pm = this.GetPM();
          if (!readOnly) {
            pm.SetProperty("UI_NavigateInfo", true);
          }
          else if (pm.Get("UI_NavigateInfo")) {
            pm.SetProperty("UI_NavigateInfo", undefined);
            UpdateNavigateInfo.call(this);
          }
        }

        function UpdateNavigateInfo() {
          var colModel = this.GetGrid().jqGrid("getGridParam", "colModel") || [];
          if (!colModel) {
            return;
          }
          function _textFormat(newValue, options, rowObject) {
            var ctrlName = that.GetColumnHelper().GetActualControlName(options.colModel.name);
            var colName = that.GetColumnHelper().GetModifiedColumnName(ctrlName);
            var control = that.GetColumnHelper().GetColumnControl(colName);
            return textFormatter.call(that, newValue, true, options, rowObject, null, null, utils.IsTrue(control.IsEncode()));
          }

          function _textUnformat(cellvalue, options, rowObject) {
            return textUnformatter.call(that, cellvalue, options, rowObject);
          }

          var that = this;
          function _drillDown(newValue, options, rowObject) {
            return drilldownFormatter.call(that, newValue, options, rowObject);
          }

          function _plainFn(cellvalue, options, cell) {
            return cellvalue;
          }
          for (var iCol = 0, len = colModel.length; iCol < len; iCol++) {
            var ctrlName = colModel[iCol].name;
            var control = this.GetColumnHelper().GetColControl()[ctrlName];
            var field = this.GetColumnHelper().GetActualControlName(ctrlName);
            var canNavigate = this.GetPM().ExecuteMethod("IsLinkOnCtrl", field);
            if (canNavigate) {
              if (control && control.GetShowBase() &&
                control.GetUIType() != checkbox) {

                colModel[iCol].formatter = _textFormat;
                colModel[iCol].unformat = _textUnformat;
              }
              else {
                colModel[iCol].formatter = _drillDown;
                colModel[iCol].unformat = _plainFn;
              }
            }
          }
        }


        /* TODO: If addRowData is capable of taking multiple records, why aren't we pushing it. */
        IPRJQGridRenderer.prototype.BindData = function (bRefresh) {
          if (this.inProgress) {
            return false;
          }
          var pm = this.GetPM(),
            jqGridCtrl = this.GetGrid(),
            pendingScroll = jqGridCtrl.data("ScrollPending"),
            columnHelper = this.GetColumnHelper(),
            scrollAmt = 0,
            bClearData = false,
            recordSet = pm.Get("GetRecordSet", { getDiff: !pm.Get("UI_NavigateInfo"), bRefresh: bRefresh });

          if (recordSet) {
            pm.ExecuteMethod("WSHome");

            if (pendingScroll) {
              scrollAmt = pm.Get("GetScrollAmount");
              jqGridCtrl.data("Scroll_Amount", scrollAmt);
            }

            var listCols = pm.Get("ListOfColumns"),
              listColLength = listCols.length,
              recordLength = Number(pm.Get("GetRowListRowCount")),
              bQueryMode = pm.Get("IsInQueryMode"),
              recordSetLength = recordSet ? recordSet.length : 0,
              recordSetLength = recordSetLength > recordLength ? recordLength : recordSetLength,
              currow = -1,
              isHierarchy = pm.Get("HasHierarchy"),
              record,
              transObj,
              _self_ = this,
              additionMethod,
              accessibilityEnhanced = utils.IsTrue(SiebelApp.S_App.GetAccessibilityEnhanced()),
              titleColArr = pm.Get("titleColArr"),
              titleColArrlen = titleColArr.length,
              element;

            PreUpdateNavigateInfo.call(this, true);

            if (jqGridCtrl.length > 0) {
              if (isHierarchy) {
                jqGridCtrl.jqGrid("setGridParam", { multiselect: false });
              }
              var prevRowCount = jqGridCtrl.jqGrid("getGridParam", 'reccount');
              if (bRefresh && (isHierarchy || (prevRowCount !== recordSetLength))) {
                this.ClearData();
                pm.SetProperty("IsDataCleared", true);
                bClearData = true;
                prevRowCount = 0;
                this.CacheState("ClearData");
              } else {
                jqGridCtrl.jqGrid('resetEditCell');
              }

              if (!bQueryMode) {
                for (var recordIndex = 0; recordIndex < recordSetLength; recordIndex++) {
                  //need to break the loop before set the current active record. bug# 18302439, 18476132, 18457872
                  if (pm.ExecuteMethod("IsCurWSRecActive")) {
                    currow = recordIndex;
                  }
                  record = pm.ExecuteMethod("GetRecord", recordIndex, { getDiff: true });
                  if (record) {
                    transObj = columnHelper.TranslateObject(listCols, record);
                    additionMethod = bRefresh && (!bClearData || pendingScroll) ? 'setRowData' : 'addRowData';
                    if (!isHierarchy) {
                      jqGridCtrl.jqGrid(
                        additionMethod,
                        recordIndex + 1,
                        transObj);

                      pm.ExecuteMethod("WSNextRecord");
                    }
                    else {
                      transObj.Hierarchy_Level = record["Hierarchy Level"];
                      transObj.Is_Leaf = record["Is Leaf"];
                      transObj.Parent_Id = record["Parent Id"];
                      transObj.Is_Expanded = record["Is Expanded"];

                      jqGridCtrl.jqGrid(
                        'addChildNode',
                        recordIndex + 1,
                        null,
                        transObj);

                      //Add data attributes for each row in hierarchical jqgrid to facilitate oepenscript.
                      jqGridCtrl.find("tr#" + (recordIndex + 1)).eq(0).attr({
                        "data-level": transObj.Hierarchy_Level,
                        "data-leaf": transObj.Is_Leaf,
                        "data-parentId": transObj.Parent_Id,
                        "data-expanded": transObj.Is_Expanded
                      });
                    }
                    this.CacheState("RecordSet", { index: recordIndex, stateValue: record });
                    if (currow >= 0) {
                      pm.ExecuteMethod("SetCurRow", currow);
                    }
                    //Accessibilty : Add the RowIdentifier, Column Identifier to the Cell
                    if (accessibilityEnhanced && pm.Get("GetRowIdentifierName") !== "") {
                      var titleColName,
                        elementId,
                        appletId = pm.Get("GetPlaceholder");
                      for (var iCol = 0; iCol < titleColArrlen; iCol++) {
                        // PRANGASA 18353142 - if the control name has the word title as part it, jqgird doesnt add the title attr to the TD tag
                        // hence, we are adding the title attr if the title is not present already
                        titleColName = titleColArr[iCol];
                        elementId = GetColId((recordIndex + 1), appletId, titleColName);
                        //VT:Some of the commonly used special columns characters.Need to expand this to a family and solve it via RegExp
                        elementId = "#" + elementId.replace('%', '\\%')
                          .replace('$', '\\$')
                          .replace('#', '\\#');

                        element = jqGridCtrl.find(elementId);
                        if (element.length > 0 && utils.IsEmpty(element.attr("title"))) {
                          element.attr("title", record[this.GetColumnHelper().GetActualControlName(titleColName)]);
                        }
                        element = null;
                      }
                      var eachListCol,
                        colName;
                      for (var checkCol = 0; checkCol < listColLength; checkCol++) {
                        eachListCol = listCols[checkCol],
                          fldName = eachListCol.name == pm.Get("MultiSelectColumn") ? pm.Get("MultiSelectColumn") : eachListCol.control.GetFieldName();

                        if (eachListCol.controlType === checkbox && (record.hasOwnProperty(fldName))) {
                          colName = eachListCol.name,
                            elementId = GetColId((recordIndex + 1), appletId, columnHelper.GetModifiedColumnName(colName)),
                            elementId = "#" + elementId.replace('%', '\\%')
                              .replace('$', '\\$')
                              .replace('#', '\\#');
                          jqGridCtrl.find(elementId).attr("title", (record[fldName] === "Y" ? localeObj.GetLocalString("IDS_BHC_CHECKED") : localeObj.GetLocalString("IDS_BHC_UNCHECKED")));
                        }
                      }
                    }
                  }
                }
                pm.AddProperty("RecordSetLength", recordSetLength);
              }
              else {
                var record = recordSet[0];
                var csLocalStr = ""; // localeObj.GetLocalString("IDS_SWE_CSQ_WATERMARK");
                var controls = pm.Get("GetControls");
                var fieldName;
                for (var control in controls) {
                  fieldName = controls[control].GetFieldName();
                  if (controls[control].GetCaseSensitive()) {
                    record[fieldName] = utils.IsEmpty(record[fieldName]) ? csLocalStr : record[fieldName];
                  }
                  else {
                    record[fieldName] = utils.IsEmpty(record[fieldName]) ? '' : record[fieldName];
                  }
                }

                jqGridCtrl.clearGridData();

                jqGridCtrl.jqGrid('addRowData', 1, columnHelper.TranslateObject(listCols, recordSet[0]));
                this.CacheState("ClearData");
                this.CacheState("RecordSet", { index: 0, stateValue: recordSet[0] });
                pm.AddProperty("RecordSetLength", 1);
              }

              if (pm.Get("enableDragAndDropInList") && !bQueryMode) {
                AddDragandDropCapabilty.call(this, pm);
              }

              if (isHierarchy) {
                jqGridCtrl.jqGrid("setGridParam", { multiselect: true });
              }
              if (!bRefresh) {
                ShowTotal.call(this);
              }
              if (!bRefresh || bClearData) {
                this.PostBindData();
              }

              var _resetScroll = _self_.GetPM().Get("ResetScroll");
              DOMUtils.Read(function () {
                DOMUtils.Write(function () {
                  InitScroll.call(_self_, recordSetLength, bClearData, _resetScroll);
                });
              });
            }
            else if (pm.Get("GetMode") === consts.get("SWE_PST_APPLET_MODE_BASE"))//VT:Only a base mode should rebind. Else unnessary NoOp processing will happen . which will slow down the operaton dramatically due to the number of DOM interactions involved.
            {
              //VT:This is a list applet which does not have any grid, but only a repetition of controls via a for-each tag. Any other applet which hits this point, even though it has a grid means that the list container dint get delivered to client which means a misconfiguration
              // To be converted to SiebelJS.Debug
              //SiebelJS.Log(pm.GetPMName() + " - This applet has either a foreach tag or does not have the correct grid container for the client to attach a list applet or is a list which is converted to form layout in one of the applet modes(Query,Edit,New) or is a list which is hidden via personalization");
              if (listColLength > 0) {
                var colIndex = 0,
                  columnControl;
                for (colIndex = 0; colIndex < listColLength; colIndex++) {
                  columnControl = listCols[colIndex].control;
                  if (columnControl.GetFieldName()) {
                    if (recordSetLength > 0) {
                      $('[name="' + columnControl.GetInputName() + '"]').slice(recordSetLength).closest("tr").styleHide();
                    }
                    else {
                      //server sends the selection-1 as the last part of the inputName and injects uint 65535 instead of -1 in the DOM
                      $('[name="' + columnControl.GetInputName().replace("-1", "65535") + '"]').closest("tr").styleHide();
                    }
                  }
                }

                for (var recordIndex = 0; (recordIndex < recordSetLength); recordIndex++) {
                  var transObj = columnHelper.TranslateObject(listCols, recordSet[recordIndex]);
                  for (colIndex = 0; colIndex < listColLength; colIndex++) {
                    var columnControl = listCols[colIndex].control;
                    if (columnControl.GetFieldName()) {
                      //first show the row if hidden
                      $('[name="' + columnControl.GetInputName() + '"]').eq(recordIndex).closest("tr").styleShow();
                      //call super class show selection to make sure formatting is taken care
                    }
                  }
                  SiebelAppFacade.IPRJQGridRenderer.superclass.ShowSelection.call(this, recordIndex);
                  this.CacheState("RecordSet", { index: recordIndex, stateValue: recordSet[recordIndex] });
                }
              }
            }
          }
          jqGridCtrl = null;
        };



        function AddDragandDropCapabilty(pm) {
          var that = this;
          $("#" + pm.Get("GetPlaceholder")).find("tr").draggable({
            appendTo: "body", // Make the draggable object render on top of everything
            revert: "invalid",
            scroll: false,
            helper: "clone",
            cursor: "crosshair",
            // Bug - 21356000. This also fixes 20669238.
            // cursorAt: The relative position of the draggable item to the cursor.
            //           Value of 'top' is half of the height of the jqgrid's "dragging" row (currently 32).
            //           This is becuase drop will place the droppable whereever its vertical center is positioned.
            cursorAt: (SiebelApp.S_App.GetDirection() ? { right: -2, top: 16 } : { left: -2, top: 16 }),
            zIndex: 9999,
            start: function (evt, ui) {
              $(this).data("origPosition", $(this).position());
              var dragRows = [];

              // Find the row that the user is dragging from, and determine if it's valid.
              var dragSrcRow = parseInt($(this).attr("id"), 10),
                useDragSrc = true;
              if (isNaN(dragSrcRow)) {
                useDragSrc = false;
              }
              else {
                dragSrcRow--;
              }

              // First get the existing row selection on the applet
              var selArray = pm.Get("GetRowsSelectedArray"),
                selRow = selArray.indexOf(true),
                selectedRows = [];
              while (selRow !== -1) {
                selectedRows.push(selRow);
                selRow = selArray.indexOf(true, selRow + 1);
              }

              // Decide on what rows to drag
              if (useDragSrc) {
                // Case 1: Drag source lies outside of selected row(s):
                if (selectedRows.indexOf(dragSrcRow) === -1) {
                  // Make it the active row and use it as the drag source.
                  pm.GetRenderer().OnRowSelect($(this).attr("id"));
                  dragRows.push(dragSrcRow);
                }
                // Case 2: Drag source lies indie the selected row(s)
                else {
                  // Dont touch the active row (so that any multiselect remains)
                  dragRows = selectedRows;
                }
              }
              else {
                // Something invalid with the drag source. Just use the selected rows.
                dragRows = selectedRows;
              }

              if (ui.helper.zIndex() === 0) {
                ui.helper.zIndex(9999);
              }
              if ($(this).parent().find("tr.ui-state-highlight").not(".ui-draggable-dragging").length > 1) {
                SiebelApp.S_App.GetPopupPM().SetProperty("ismultislectmode", true);
              }
              else {
                SiebelApp.S_App.GetPopupPM().SetProperty("ismultislectmode", false);
              }
              $(this).data("appletRowId", pm.ExecuteMethod("GetDragInfo", dragRows));

              if (SiebelApp.S_App.GetDirection()) {
                ui.originalPosition.left = $(this).width() - ui.helper.width();
              }
            },
            stop: function () {
              $(".ui-draggable-dragging").remove(); // Remove previously dragging items
              $("body").css("cursor", "default");
            },
            drag: function (evt, ui) {
              if (SiebelApp.S_App.GetDirection()) {
                ui.position.left = $(this).width() - ui.helper.width() + ui.position.left;
              }
            }
          });



        }

        IPRJQGridRenderer.prototype.AddAccessibilityTags = function () {
          var pm = this.GetPM(),
            jqGridCtrl = this.GetGrid(),
            appletSummary = pm.Get("GetAppletSummary"),
            placeHolder = pm.Get("GetPlaceholder"),
            attrConfig = {};

          if (appletSummary) {
            attrConfig = {
              "summary": appletSummary,
              "aria-labelledby": "",
              "datatable": "1"
            };
          }

          /* Prepare htmlstring for span label which can be used by screenreader to announce
          siebel specific control types */
          var htmlString = "<span id='" + placeHolder + "_altpick'          aria-label='" + localeObj.GetLocalString("IDS_SWE_PICK_TITLE") + "' />" +
            "<span id='" + placeHolder + "_altmvg'           aria-label='" + localeObj.GetLocalString("IDS_SWE_MVG_TITLE") + "' />" +
            "<span id='" + placeHolder + "_altCurrCalc'      aria-label='" + localeObj.GetLocalString("IDS_SWE_CURRENCY_CALC_FIELD_TITLE") + "' />" +
            "<span id='" + placeHolder + "_altCalc'          aria-label='" + localeObj.GetLocalString("IDS_SWE_CALC_FIELD_TITLE") + "' />" +
            "<span id='" + placeHolder + "_altDate'          aria-label='" + localeObj.GetLocalString("IDS_SWE_DATE_FIELD_TITLE") + "' />" +
            "<span id='" + placeHolder + "_altDateTime'      aria-label='" + localeObj.GetLocalString("IDS_SWE_DATETIME_FIELD_TITLE") + "' />" +
            "<span id='" + placeHolder + "_altDateTimeZone'  aria-label='" + localeObj.GetLocalString("IDS_SWE_DATETIMEZONE_FIELD_TITLE") + "' />" +
            "<span id='" + placeHolder + "_altEffDate'       aria-label='" + localeObj.GetLocalString("IDS_SWE_EFFECTIVE_DATE_TITLE") + "' />" +
            "<span id='" + placeHolder + "_altCombo'         aria-label='" + localeObj.GetLocalString("IDS_SWE_COMBO_FIELD") + "' />" +
            "<span id='" + placeHolder + "_altLink'          aria-label='" + localeObj.GetLocalString("IDS_SWE_CKEDITOR_LINK") + "' />" +
            "<span id='" + placeHolder + "_altCheckBox'      aria-label='" + localeObj.GetLocalString("IDS_SWE_CKEDITOR_CHECKBOX") + "' />";

          attrConfig["tabIndex"] = "0";
          jqGridCtrl
            .attr(attrConfig)
            .after(htmlString);

        };

        IPRJQGridRenderer.prototype.AddAccessibilityInfo = function (controlType, isLink, val) {
          var altText = "",
            descby = "",
            placeHolder = this.GetPM().Get("GetPlaceholder"),
            retval = "";
          switch (controlType) {
            case mvg:
              altText = "altmvg";
              break;
            case pick:
              altText = "altpick";
              break;
            case currencyCal:
              altText = "altCurrCalc";
              break;
            case calc:
              altText = "altCalc";
              break;
            case datePick:
              altText = "altDate";
              break;
            case dateTimePick:
              altText = "altDateTime";
              break;
            case dateTimezonePick:
              altText = "altDateTimeZone";
              break;
            case effdat:
              altText = "altEffDate";
              break;
            case combo:
              altText = "altCombo";
              break;
            case checkbox:
              altText = "altCheckBox";
              break;
          }

          if (isLink) {
            descby += " " + placeHolder + "_" + "altLink";
          }

          if (altText) {
            descby += " " + placeHolder + "_" + altText;
          }

          if (descby) {
            retval += " aria-labelledby = " + descby;
          }

          return retval;
        };

        IPRJQGridRenderer.prototype.PostBindData = function () {
          var pm = this.GetPM(),
            placeHolder = pm.Get("GetPlaceholder"),
            showElastic = SiebelApp.S_App.GetEnableElasticGrid(),
            disableElasticGrid = pm.Get("DisableElasticGrid"),
            jqGridCtrl = this.GetGrid(),
            padding = Number(GridPadding) - 2;

          SetRowHeight.call(this);

          var estHeight = CalcGridHeight.call(this, true);

          DOMUtils.Read(function () {
            var gridHeight = Number(jqGridCtrl.height()),
              height = gridHeight + padding,
              gridParent,
              width; //oliver: added -3 to better fit window
            if (SiebelAppFacade.DecisionManager.IsTouch()) {
              gridParent = jqGridCtrl.closest(".ui-jqgrid-bdiv").eq(0),
                width = gridParent.width();
            }

            DOMUtils.Write(function () {
              if (height > estHeight) {
                jqGridCtrl.setGridHeight(height);
              }
              if (gridHeight === 0 && showElastic && !disableElasticGrid) {
                jqGridCtrl.setGridHeight(estHeight + padding);
              }
              if (SiebelAppFacade.DecisionManager.IsTouch()) {
                if (gridHeight > estHeight / 3) {
                  padding = 0;// we dont want padding as there are record below the visible set
                }
                gridParent.height((estHeight / 3) + padding);
                gridParent.children().width(width + 1);
              }
              jqGridCtrl = null;
              gridParent = null;
            });
          });


          $("#first_pager_" + placeHolder).removeClass("ui-state-disabled");
          $("#prev_pager_" + placeHolder).removeClass("ui-state-disabled");
          $("#next_pager_" + placeHolder).removeClass("ui-state-disabled");
          $("#last_pager_" + placeHolder).removeClass("ui-state-disabled");
        };

        //Focus model
        IPRJQGridRenderer.prototype.IsValidClick = function (source) {
          return (((utils.IndexOf(["input", "button", "a", "img", "select"], source.tagName.toLowerCase()) === -1) || ((source.type || "").toLowerCase() === "file"))
            && ((source.tagName == "SPAN" && source.className == "siebui-icon-arrowsm-sort") ? false : true)
          ) && $(source).parents("#" + this.GetPM().Get("GetPlaceholder")).length <= 0;
        };

        function InitScroll(recCount, bDataCleared, resetScroll) {
          if (SiebelAppFacade.DecisionManager.IsTouch()) {
            if (recCount) {
              var jqGridCtrl = this.GetGrid(),
                pm = this.GetPM(),
                iscroll = jqGridCtrl.data("Iscroll"),
                rectHtml = null;

              if (jqGridCtrl.find("section.siebui-progress-bar").length === 0) {
                rectHtml = "<div class='siebui-indicator'></div>";
                rectHtml = rectHtml + rectHtml + rectHtml + rectHtml;
                jqGridCtrl.children("tbody").children("tr.jqgfirstrow").after("<section class='siebui-progress-bar siebui-grid-prevset siebui-invisible-el' > " + rectHtml + "</section>");
                jqGridCtrl.children("tbody").append("<section class='siebui-progress-bar siebui-grid-nextset siebui-invisible-el' > " + rectHtml + "</section>");
              }

              if (iscroll) {
                // iscroll initialized
                if (bDataCleared || iscroll.maxScrollY === 0 || jqGridCtrl.data("recCount") !== recCount) {
                  jqGridCtrl.data("recCount", recCount);
                  iscroll.infiniteElementHeight = iscroll.infiniteMaster.offsetHeight;
                  iscroll.options.snap = iscroll.scroller.querySelectorAll("tr:not(.jqgfirstrow)");
                }
                if (resetScroll) {
                  iscroll.refresh();

                  if (!jqGridCtrl.data("ScrollPending")) {
                    iscroll.scrollTo(0, 0);
                  }
                }
              }
              else {
                var placeHolder = pm.Get("GetPlaceholder");

                jqGridCtrl.data("recCount", recCount).wrapAll(
                  "<div id=\"" + placeHolder + "_scroll\" class=\"siebui-applet-scrollarea\" >");

                iscroll = new IScroll("#" + placeHolder + "_scroll", {
                  infiniteElements: jqGridCtrl,
                  infiniteLimit: 1,
                  dataset: function () { },
                  click: false,
                  tap: false,
                  scrollX: false,
                  scrollY: true,
                  ctx: this,
                  eventPassthrough: 'horizontal',
                  bindToWrapper: true,
                  snap: 'tr:not(.jqgfirstrow)',
                  preventDefaultException: { tagName: /^(INPUT|TEXTAREA|A|BUTTON|SELECT|SPAN|DIV|UL|LI|TD|TR|TABLE)$/ }
                });

                iscroll.scrollTo(0, 0);

                iscroll.on("scroll", ShowOrHideIndicators);
                iscroll.on("scrollEnd", CheckAndSendtoServer);

                jqGridCtrl.data("Iscroll", iscroll);

                if (jqGridCtrl.data("pendingScrollTuning")) {
                  jqGridCtrl.removeData("pendingScrollTuning");
                  this.resize();
                }
              }
            }
            else if (!this.GetGrid().data("Iscroll")) {
              this.GetGrid().data("pendingScrollTuning", true);
            }
          }
        }

        function RepositionScroll(scrollToEl, selArray) {
          var iscroll = this.GetGrid().data("Iscroll");

          if (SiebelAppFacade.DecisionManager.IsTouch() && scrollToEl && scrollToEl.length && iscroll) {
            if (!selArray || selArray.length === 0) {
              selArray = [];
              selArray[0] = false;
            }

            var scrollToElOffset = scrollToEl.offset().top,
              scrollToElHeight = scrollToEl.height(),
              scrollContainer = scrollToEl.parents(".siebui-applet-scrollarea"),
              scrollContainerOffset = scrollContainer.offset().top,
              scrollContainerHeight = scrollContainer.height(),
              easeTime = (selArray[0] || selArray[selArray.length - 1]) ? 0 : 1000;

            if (scrollTimer) {
              clearTimeout(scrollTimer);
              scrollTimer = 0;
            }

            scrollTimer = setTimeout(function () {
              if ((scrollToElOffset < scrollContainerOffset) || (scrollToElOffset > (scrollContainerOffset + scrollContainerHeight - scrollToElHeight))) {
                iscroll.scrollToElement(scrollToEl.parent()[0], easeTime, 0, true);
              }
              scrollTimer = 0;
            }, 0);
          }
        }

        function ShowOrHideIndicators() {
          if (this.y > 5 && this.options.ctx.GetGrid().find("section.siebui-grid-prevset").hasClass('siebui-invisible-el')) {
            this.options.ctx.GetGrid().find("section.siebui-grid-prevset").removeClass("siebui-invisible-el");
            this.minScrollY = 0;
          }
          else if (Math.abs(this.y) > (Math.abs(this.maxScrollY) + 5) && this.options.ctx.GetGrid().find("section.siebui-grid-nextset").hasClass('siebui-invisible-el')) {
            this.options.ctx.GetGrid().find("section.siebui-grid-nextset").removeClass("siebui-invisible-el");
            this.maxScrollY += -1 * this.options.ctx.GetGrid().find("section.siebui-grid-nextset")[0].getBoundingClientRect().height;
          }
        }

        function CheckAndSendtoServer() {
          var direction = this.directionY,
            boundary = false,
            pr = this.options.ctx,
            grid = pr.GetGrid();
          if (this.options.scrollY) {
            direction === 0 ? direction = this.distY > 0 ? -1 : 1 : direction;
            if ((direction > 0 && (this.y <= this.maxScrollY || (this.y - grid.find("section.siebui-grid-nextset")[0].getBoundingClientRect().height) <= this.maxScrollY)) && grid.find("section.siebui-grid-nextset").is(":visible") ||
              (direction < 0 && this.y >= 0 && grid.find("section.siebui-grid-prevset").is(":visible"))) {
              boundary = true;
            }
          }
          if (boundary && !grid.data("ScrollPending")) {
            if (direction > 0 && pr.GetPM().ExecuteMethod("CanInvokeScrollMethod", "ScrollNextData")) {
              grid.data("ScrollPending", true);
              pr.OnPagination("scroll_down");
            }
            else if (direction < 0 && pr.GetPM().ExecuteMethod("CanInvokeScrollMethod", "ScrollPrevData")) {
              grid.data("ScrollPending", true);
              pr.OnPagination("scroll_up");
            }
            else {
              if (direction > 0) {
                this.maxScrollY -= -1 * grid.find("section.siebui-grid-nextset")[0].getBoundingClientRect().height;
              }
              grid.find("section.siebui-grid-prevset,section.siebui-grid-nextset").addClass("siebui-invisible-el");
            }
          }
          grid = null;
        }

        function OnScrollComplete(direction) {
          if (SiebelAppFacade.DecisionManager.IsTouch()) {
            this.GetPM().ExecuteMethod("SetActiveControl", null);
            direction = direction === siebConsts.get("PAG_SCROLL_DN") ? 1 : -1;
            var iscroll = this.GetGrid().data("Iscroll"),
              el = $(iscroll.wrapper).find("tr.jqgrow"),
              elLen = el.length,
              scrollAmt = Math.abs(Number($(iscroll.scroller).data("Scroll_Amount")));

            el.eq(direction < 0 ? scrollAmt : (elLen - 1 - scrollAmt)).click();
            if (direction < 0) {
              effHet = Math.abs(el[scrollAmt - 1].getBoundingClientRect().bottom - el[0].getBoundingClientRect().top);
              iscroll.scrollTo(0, -effHet);
            }
            else {
              effHet = Math.abs(el[el.length - 1].getBoundingClientRect().bottom - el[el.length - scrollAmt].getBoundingClientRect().top);
              iscroll.scrollTo(0, -1 * (Math.abs(iscroll.maxScrollY) - effHet));
            }
            var self = this;
            $(iscroll.scroller).removeData("Scroll_Amount");

            setTimeout(function () {
              // to ensure that we do not fire successive scroll event to server.
              self.GetGrid().removeData("ScrollPending");
              self = null;
            }, 100);
            el = null;
            this.GetGrid().find("section.siebui-grid-prevset, section.siebui-grid-nextset").addClass("siebui-invisible-el");
          }
        }

        function InvokeColumnChange(el, ctrl, iRow, iCol, value) {
          var ret = true,
            pm = this.GetPM();
          if (pm.Get("GetSelection") + 1 === Number(iRow) || pm.Get("IsInQueryMode")) {
            var type = ctrl.GetUIType(),
              ctrlel = $(el);
            switch (type) {
              case datePick:
              case dateTimePick:
              case dateTimezonePick:
                var fieldValue = utils.Trim(value || ""),
                  ISOVal,
                  self = ctrlel.data("jqGrid"),
                  jqGridCtrl = self.GetGrid(),
                  elem,
                  isDatePick,
                  toFormat,
                  uiFormat,
                  formattedValue;
                if (this.GetPM().Get("IsInQueryMode") === false) {
                  ISOVal = utils.ToISOFormat(fieldValue, (type !== datePick), ctrl.GetDisplayFormat());
                }

                if (!ISOVal) {
                  ISOVal = fieldValue;
                }
                else {
                  // Put it back into the control. Might be needed later.
                  $(el).data(consts.get("SWE_DATA_ISOVAL"), ISOVal);
                }

                value = ISOVal;
                isDatePick = type === datePick;
                toFormat = SiebelApp.S_App.LocaleObject.GetDateFormat();
                uiFormat = consts.get("ISO_DATE_FORMAT");
                if (!isDatePick) {
                  toFormat += " " + SiebelApp.S_App.LocaleObject.GetTimeFormat();
                  uiFormat = consts.get("ISO8601_DATETIME_FORMAT");

                }
                formattedValue = SiebelApp.S_App.LocaleObject.GetStringFromDateTime(
                  ISOVal,
                  uiFormat,
                  ctrl.GetDisplayFormat() || toFormat);

                if (jqGridCtrl) {
                  elem = $("#" + iRow + "_" + self.GetColumnHelper().GetModifiedColumnName(ctrl.GetName()), jqGridCtrl);
                  elem.val(formattedValue || value);
                }
                break;

              case combo:
                ctrlel.parent().data("filterValue", value);
                break;
              case textArea:
                var record = pm.Get("GetRecordSet")[iRow - 1],
                  fldVal = record[ctrl.GetFieldName()];
                if (fldVal) {
                  var tempVal = utils.NormalizeTextVal(fldVal);
                  if (tempVal == value) {
                    value = fldVal;
                  }
                }
                break;
              default:
                break;
            }
            // Fire the event on the PM.
            ret = pm.OnControlEvent(siebConsts.get("PHYEVENT_COLUMN_BLUR"), iRow, ctrl, value);
            if (type === combo) {
              ctrlel.parent().removeData("filterValue");
            }
            ctrlel = null;
          }
          return ret;
        }

        function FormatDDInQueryMode(control, value) {
          if (this.GetPM().Get("IsInQueryMode")) {
            var pmProp = this.GetPM().Get("DDUserSelected");
            if (pmProp && value && value.charAt(0) !== "\"" && value.charAt(value.length - 1) !== "\"" && pmProp.ctrl === control && pmProp.value === value) {
              value = "\"" + value + "\"";
              this.GetPM().SetProperty("DDUserSelected", undefined);
            }
          }
          return value;
        }

        function HandleDrillDown(evt) {
          SiebelApp.S_App.uiStatus.Busy({
            target: SiebelApp.S_App.GetTargetViewContainer(),
            mask: true
          });

          var self = evt.data.ctx;
          var el = $(this);
          var name = el.attr("name");
          var rowId = el.hasClass("siebui-ctrl-drilldown") ?
            el.attr("rowId") : el.parents("tr").eq(0).attr("id");
          var pm = self.GetPM();

          el = null;
          if (rowId > 0) {
            if (self.OnRowSelect(rowId) === false ||
              self.GetPM().OnControlEvent(siebConsts.get("PHYEVENT_DRILLDOWN_LIST"), name, rowId) === false) {
              SiebelApp.S_App.uiStatus.Free();
              return false;
            }
          }
          SiebelApp.S_App.uiStatus.Free();
        }

        function OnClickHeaderCtrl(e) {
          var pm = e.data.ctx.GetPM();
          if (pm.OnControlEvent(siebConsts.get("PHYEVENT_APPLET_FOCUS"))) {
            e = e || event; /* get IE event ( not passed ) */
            e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;

            if ($(this).prop("checked") === true) {
              e.ctrlKey = true;
              if (pm.ExecuteMethod("CanInvokeMethod", "SelectAll")) {
                pm.ExecuteMethod("InvokeMethod", "SelectAll", null);
              }
            }
            else {
              e.data.ctx.OnRowSelect(1, e.ctrlKey, e.shiftKey);
            }
          }
        }


        IPRJQGridRenderer.prototype.BindEvents = function (controlSet) {
          var pm = this.GetPM(),
            grid = this.GetGrid(),
            controls = pm.Get("GetControls"),
            placeHolder = pm.Get("GetPlaceholder");

          //VT:In base mode , lets do only interactive control binding(like buttons) and not any columns/fields which are not interactive
          if (grid.length === 0 && pm.Get("GetMode") === consts.get("SWE_PST_APPLET_MODE_BASE")) {
            var limitedControls = {};
            for (var control in controls) {
              if (controls.hasOwnProperty(control)) {
                if (controls[control].GetControlType() !== colType) {
                  //VT:DONOT bind column controls for grid less applets(Home Pages).This is so that we donot bind unnecessarily those that we know will not needs any events .This has to be done for normal list applets as well.But not for now.
                  limitedControls[control] = controls[control];
                }
              }
            }

            controls = limitedControls;
          }
          SiebelAppFacade.IPRJQGridRenderer.superclass.BindEvents.call(this, controls);

          if (grid.length === 1) {
            grid.data("jqGrid", this);
            grid.jqGrid("NavigateByKey");
            $("#" + pm.Get("GetPlaceholder")).on("click.jqGrid" + placeHolder, "a.drilldown", { ctx: this }, HandleDrillDown);
            grid.jqGrid("setGridParam", {
              cellEdit: true,
              cellsubmit: 'clientArray',
              onSortCol: GridShowHeaderMenu,
              OnExpand: GridOnExpand,
              OnCollapse: GridOnCollapse,
              onSelectRow: GridOnSelectRow,
              beforeSelectRow: GridBeforeSelectRow,
              afterEditCell: GridAfterEditCell,
              beforeSaveCell: GridBeforeSaveCell,
              afterRestoreCell: GridAfterRestoreCell,
              afterSaveCell: GridAfterSaveCell,
              resizeStop: GridResizeStop
            });

            if (pm.Get("enableDragAndDropInList")) {
              $("#s_" + this.GetPM().Get("GetFullId") + "_div").droppable({
                drop: function (event, ui) {
                  if (!($(".ui-widget-overlay").not("[id]").length > 0 && SiebelApp.S_App.GetPopupPM().Get("state") === consts.get("POPUP_STATE_VISIBLE"))) {
                    if (ui.draggable.hasClass("ui-draggable")) {
                      var targetAppletPm = $(this).droppable("option", "ctx").GetPM();

                      ui.helper.detach();
                      targetAppletPm.OnControlEvent(consts.get("PHYEVENT_RECORD_DROP_GENERIC"), targetAppletPm.Get("dropMethod"));
                    }
                  }
                }, ctx: this
              });
            }

            $("#s_" + this.GetPM().Get("GetFullId") + "_div").find(".ui-jqgrid-htable th.ui-th-column").bind("focus", { ctx: this }, function (evt) {
              var self = evt.data.ctx;
              if (self && self.GetPM() && !self.GetPM().Get("IsActive")) {
                self.GetPM().OnControlEvent(siebConsts.get("PHYEVENT_APPLET_FOCUS"));
              }
            });

            // bug 20985748
            var mouseDownId = "",
              evHelper = SiebelApp.S_App.PluginBuilder.GetHoByName("EventHelper");
            if (evHelper && grid[0] && grid[0].grid && grid[0].grid.bDiv) {
              evHelper
                .Manage($(grid[0].grid.bDiv), "down", { ctx: this }, function (e) {
                  e.data.ctx.GetPM().SetProperty("IsDataCleared", false);
                  mouseDownId = $(e.target).closest("td").attr("id");
                })
                .Manage($(grid[0].grid.bDiv), "up", { ctx: this }, function (e) {
                  var target = $(e.target);
                  if (mouseDownId && e.data.ctx.GetPM().Get("IsDataCleared") && mouseDownId === target.closest("td").attr("id")) {
                    target.trigger("click");
                  }
                });
            }
          }
          else {
            //VT:This is a list applet which does not have any grid, but only a repetition of controls via a for-each tag. Any other applet which hits this point, even though it has a grid means that the list container dint get delivered to client which means a misconfiguration
            $("#s_" + pm.Get("GetFullId") + "_div").off("click.drilldown");
            $("#" + pm.Get("GetFullId")).on("click.jqGrid" + placeHolder, "a.siebui-ctrl-drilldown", { ctx: this }, HandleDrillDown);
          }

          if (pm.Get("enableDragAndDropInList")) {
            $("#s_" + pm.Get("GetFullId") + "_div")
              .bind("dragover", function (evt) {
                //allow drop
                evt.preventDefault();
              })
              .bind("drop", { ctx: this }, function (evt) {
                evt.preventDefault();
                if (evt.originalEvent.dataTransfer) {
                  var data = evt.originalEvent.dataTransfer.getData('Text');
                }
                if (data) {
                  if (data.indexOf('\r') !== -1) {
                    var dataArray = data.replace(/\n/g, "").split('\r');
                  }
                  else {
                    var dataArray = data.split('\n');
                  }
                  evt.data.ctx.GetPM().OnControlEvent(siebConsts.get("PHYEVENT_RECORD_DROP"), dataArray);
                }
              });
          }

          /* Attaching Event for Pagination Button; and hover related changes for touch devies */
          $("#next_pager_" + placeHolder +
            ", #last_pager_" + placeHolder +
            ", #prev_pager_" + placeHolder +
            ", #first_pager_" + placeHolder)
            .on("touchend", function () {
              $(this).removeClass("ui-state-hover");
            })
            .unbind("click")
            .children("span")
            .bind("click", { ctx: this }, function (evt) {
              evt.data.ctx.OnPagination(
                $(this).parent().attr("id").replace("_" + evt.data.ctx.GetPM().Get("GetPlaceholder"), ""));
              evt.stopImmediatePropagation();
            });

          // Column sort feature.
          $("tr.ui-jqgrid-labels", grid.parents("div.ui-jqgrid"))
            .bind("mousedown", { ctx: this }, function (e) {
              e.data.ctx.UpdateSelectedRow();
            })
            .bind("mouseup", { ctx: this }, function (e) {
              e.data.ctx.GetGrid().jqGrid("ResetDisableClick");
            });

          /* Custom Events */
          $(window).bind("resize.JQGrid", { ctx: this }, function (event) {
            event.data.ctx.resize();
          });

          var selectalleve = this.GetPM().Get("MultiSelectColumn");
          if (selectalleve) {
            var el = $("#" + "id_" + this.GetPM().Get("GetPlaceholder") + selectalleve);
            eventHelper.Manage(el, "click", { ctx: this }, OnClickHeaderCtrl);
            eventHelper.Manage(el, "move", { ctx: this }, function (evt) {
              evt.stopPropagation();
            });
            el = null;
          }

          SiebelApp.EventManager.addListner("forceResize", this.resize, this);

          SiebelApp.EventManager.addListner("gridresize", this.fixHeight, this);
          if (SiebelAppFacade.DecisionManager.IsTouch()) {
            grid.delegate(".siebui-touch-prev,.siebui-touch-next", "focus", function (event) {
              var e = jQuery.Event("keydown");
              e.which = 9;
              e.keyCode = 9;
              if ($(this).attr("class") == "siebui-touch-next") {
                $(this).prev().trigger(e);
              }
              else {
                e.shiftKey = true;
                $(this).next().trigger(e);
              }
            })
          }
          pm = grid = controls = null;
        };

        function OnLockColumn(colId) {
          var self = this;
          var grid = self.GetGrid();
          var placeHolder = self.GetPM().Get("GetPlaceholder");
          var colModel = grid.getGridParam("colModel");
          var ctrllock = self.GetPM().Get("LockedControls");
          var iCol = 0;
          var lockedColIndex = 0;
          var prevLockedColIndex = ctrllock ? ctrllock.split("*").length : 0;
          var lockColList = [];

          for (iCol = 0; (('jqgh_' + placeHolder + '_' + colModel[iCol].name) !== colId); iCol++) {
            if (colModel[iCol].hidden) {
              continue;
            }
            lockedColIndex++;
          }
          lockedColIndex++;

          for (iCol = 0; iCol < colModel.length; iCol++) {
            grid.jqGrid('setColProp', colModel[iCol].name, { frozen: false });
          }

          ctrllock = "";

          $('.siebui-col-locked-state', '#' + 'gview_' + placeHolder).removeClass("siebui-col-locked-state");

          if ((prevLockedColIndex == lockedColIndex) && grid.getGridParam('frozenColumns')) {
            LockColumns.call(self);
          }
          else {
            for (iCol = 0; ; iCol++) {
              if (!colModel[iCol].hidden) {
                lockColList[iCol] = colModel[iCol].name;
                ctrllock += [colModel[iCol].name] + '*';
              }
              if (('jqgh_' + placeHolder + '_' + colModel[iCol].name) === colId) {
                break;
              }
            }
            LockColumns.call(self, lockColList);
            if (ctrllock.length > 0) {
              ctrllock = ctrllock.substring(0, ctrllock.length - 1);
            }
          }
          SaveUserPrefLockedCol.call(self, ctrllock);
        }

        function LockColumns(listColLock) {
          var jqGridCtrl = this.GetGrid();
          var placeHolder = this.GetPM().Get("GetPlaceholder");
          var colModel = jqGridCtrl.jqGrid("getGridParam", "colModel");
          var isLock = !!listColLock;
          var len = isLock ? listColLock.length : colModel.length;
          var pager = "pager_" + placeHolder;

          if (isLock) {
            jqGridCtrl.jqGrid('setGridParam',
              {
                'cellEdit': false,
                'sortable': GetSortableConfig.call(this, false),
              })
              .jqGrid('destroyFrozenColumns');
          }

          // Remo ve all icons first
          for (var i = 0; i < colModel.length; ++i) {
            $('#jqgh_' + placeHolder + '_' + colModel[i].name)
              .parent("th").removeClass("siebui-locked").end()
              .children("span.siebui-col-lock").html("").remove();
          }

          for (var i = 0; i < len; ++i) {
            if (isLock) {
              jqGridCtrl.jqGrid('setColProp', listColLock[i], { frozen: true });
              $('#jqgh_' + placeHolder + '_' + listColLock[i]).append("<span class='siebui-col-lock'></span>").parent("th").addClass("siebui-locked");
            }
            else {
              jqGridCtrl.jqGrid('setColProp', colModel[i].name, { frozen: false });
            }
          }

          jqGridCtrl.jqGrid(isLock ? 'setFrozenColumns' : 'destroyFrozenColumns')
            .jqGrid('setGridParam', { 'sortable': GetSortableConfig.call(this, true, placeHolder, colModel) })
            .jqGrid('setGridParam', { 'cellEdit': true });

          if (isLock) {
            jqGridCtrl.bind("jqGridAfterGridComplete.jqGridLockCol, jqGridSortCol.jqGridLockCol", { ctx: this }, resizeLockedCol);
            $(window).bind("resize.jqGridLockCol", { ctx: this }, resizeLockedCol);
            resizeLockedCol.call(this);
          }
          else {
            jqGridCtrl.unbind(".jqGridLockCol");
            $(window).unbind("resize.jqGridLockCol");
          }

          // jqGrid disables the nav buttons locking the columns enabling the nav buttons.
          $("#next_" + pager + ", #last_" + pager + ", #first_" + pager + ", #prev_" + pager).removeClass('ui-state-disabled');
        }

        function resizeLockedCol(evt) {
          var self = evt && evt.data ? evt.data.ctx : this,
            grid = null,
            lockedEl = null,
            width = null;
          if (self.GetGrid && (grid = self.GetGrid())) {
            grid = grid.parents(".ui-jqgrid").eq(0);;
            lockedEl = grid.find("table.ui-jqgrid-htable").eq(0).find("th span.siebui-col-lock");
            if (lockedEl.length > 0) {
              DOMUtils.Read(function () {
                var width = null;
                if (SiebelApp.S_App.GetDirection()) {
                  width = lockedEl.first().parents("th.ui-th-column")[0].getBoundingClientRect().right - lockedEl.last().parents("th.ui-th-column")[0].getBoundingClientRect().left;
                }
                else {
                  width = lockedEl.last().parents("th.ui-th-column")[0].getBoundingClientRect().right - lockedEl.first().parents("th.ui-th-column")[0].getBoundingClientRect().left;
                }
                DOMUtils.Write(function () {
                  if (width) {
                    grid.find(".frozen-div > table, .frozen-bdiv > table ").width(width);
                  }
                  grid = lockedEl = null;
                });
              });
            }
          }
        }

        function EnableUnlockOnTab(element, cellname, lockedcolumns) {
          this.GetGrid().data("ActiveCell", cellname);
          $(element).on("keydown.lockcol", { ctx: this, list: lockedcolumns }, function (evt) {
            if (evt.keyCode === 9) {
              var context = evt.data.ctx,
                lockColArray = evt.data.list.split("*");

              if (lockColArray.indexOf(context.GetGrid().data("ActiveCell")) !== -1) {
                LockColumns.call(context);
                context.GetGrid().removeData("ActiveCell");
                context.GetPM().SetProperty("LockedControls", "");
              }
            }
          });
        }

        function SaveUserPrefLockedCol(ctrllock) {
          var inputPS = CCFMiscUtil_CreatePropSet();
          var pm = this.GetPM();
          inputPS.SetProperty("Key", "LockedControls");
          inputPS.SetProperty("LockedControls", ctrllock);
          pm.OnControlEvent(consts.get("PHYEVENT_INVOKE_CONTROL"), pm.Get(consts.get("SWE_MTHD_UPDATE_USER_PREF")), inputPS);
          pm.SetProperty("LockedControls", ctrllock);
        }

        function GridShowHeaderMenu(index, iCol, sortorder) {
          var self = $(this).data("jqGrid");
          if (self) {
            var pm = self.GetPM(),
              headerMenu = $("#s_" + pm.Get("GetFullId") + "_headerMenu"),
              el = $(pm.Get("GetPlaceholder") + "_" + index),
              colHeaderId = "jqgh_" + pm.Get("GetPlaceholder") + "_" + index,
              colHeaderIdEl = $("#s_" + pm.Get("GetFullId") + "_div").find("#" + colHeaderId + ", .frozen-div #" + colHeaderId),
              ctrllock = pm.Get("LockedControls") || "",
              showUnlock = (ctrllock.substring(ctrllock.lastIndexOf("*") + 1) === index),
              skipCheckBox = pm.Get("HasHierarchy") ? 0 : 1,
              evt = window.event,
              sortOrder = pm.Get("JQGridProp_sortorder");

            if (!self.GetPM().Get("SortMode")) {

              // First control the sort icons that jqgrid popups up.
              var ascIcons = colHeaderIdEl.find(".ui-grid-ico-sort.ui-icon-asc").hide(),
                descIcons = colHeaderIdEl.find(".ui-grid-ico-sort.ui-icon-desc").hide();

              if (iCol === pm.Get("JQGridProp_lastsort")) {
                if (sortOrder === "asc") {
                  headerMenu.find("#SortAsc").hide();
                  headerMenu.find("#SortDesc").show();
                } else {
                  headerMenu.find("#SortDesc").hide();
                  headerMenu.find("#SortAsc").show();
                }
              } else {
                headerMenu.find("#SortDesc").show();
                headerMenu.find("#SortAsc").show();
              }
              if (showUnlock) {
                headerMenu.find("#Lock").hide();
                headerMenu.find("#Unlock").show();
              }
              else {
                headerMenu.find("#Unlock").hide();
                headerMenu.find("#Lock").show();
              }
              headerMenu.find('li[id^="Sort"]').children().toggleClass("ui-state-disabled", (pm.Get("ListOfColumns")[iCol - skipCheckBox].control.IsSortable() !== siebConsts.get("SWE_NUMERIC_TRUE")));

              // Set the styling on the header Menu and show it
              headerMenu
                .css({ zIndex: 50, top: 0, left: 0 })
                .show()
                .position({
                  my: "left top",
                  at: "centre centre",
                  of: (evt && evt.preventDefault && evt.pageX && evt.pageY ? evt : $("#" + colHeaderId))
                });

              // Attach a handler for as long as this menu is open to the rest of the document to dismiss the menu.
              function HideHeaderMenu(evt) {
                if (headerMenu.css('display') !== 'none') {
                  headerMenu.hide();
                  headerMenu.off('click', 'li');
                  $(document).off("mousedown.HideHeaderMenu");
                  if (evt.data.showPrevSortIcon) {
                    var ctx = evt.data.ctx,
                      pm = ctx.GetPM();
                    ctx.GetGrid().jqGrid('resetSortOrder');
                    if (pm.Get("JQGridProp_lastsort")) {
                      var sortColumn = pm.Get("JQGridProp_lastsortCol"),
                        sortHeaderId = "jqgh_" + pm.Get("GetPlaceholder") + "_" + sortColumn,
                        sortCtr = $("#s_" + pm.Get("GetFullId") + "_div").find("#" + sortHeaderId + ", .frozen-div #" + sortHeaderId).find(".s-ico").show(),
                        sortOrd = (pm.Get("JQGridProp_sortorder")) ? pm.Get("JQGridProp_sortorder") : siebConsts.get("SORT_DESCENDING"),
                        sortIcon = (sortOrd === "asc") ? "ui-icon-asc" : "ui-icon-desc";
                      sortCtr.find("." + sortIcon).css("display", "inline");
                    }
                  }
                }
              }
              $(document).on("mousedown.HideHeaderMenu", { showPrevSortIcon: true, ctx: self }, function (event) {
                if (!$(event.target).parents(".siebui-list-header-menu").length) {
                  HideHeaderMenu(event);
                }
              });
              headerMenu.find(':visible').eq(0).children().focus();
              headerMenu.off("keydown").on('keydown', 'li', function (event, ui) {
                if (event.keyCode === $.ui.keyCode.RIGHT) {
                  $(this).nextAll(':visible').first().children().focus();
                }
                else if (event.keyCode === $.ui.keyCode.LEFT) {
                  $(this).prevAll(':visible').first().children().focus();
                }
                else if (event.keyCode === $.ui.keyCode.TAB) {
                  HideHeaderMenu(event);
                }
              });
              headerMenu.on("blur", { showPrevSortIcon: true, ctx: self }, HideHeaderMenu);

              // Attach handlers to the menu items to fire Sort or Lock
              headerMenu.off('click').on('click', 'li', function (event, ui) {
                event.data = { showPrevSortIcon: true, ctx: self };
                var ele = event.originalEvent.target,
                  id = event.target.parentElement.getAttribute("id");
                switch (id) {
                  case "SortAsc":
                  case "SortDesc":
                    if (!(ele.classList.contains("ui-state-disabled"))) {
                      var sortColumn = pm.Get("JQGridProp_lastsortCol");
                      if (sortColumn != index) {
                        var sortHeaderId = "jqgh_" + pm.Get("GetPlaceholder") + "_" + sortColumn;
                        $("#s_" + pm.Get("GetFullId") + "_div").find("#" + sortHeaderId + ", .frozen-div #" + sortHeaderId).find(".s-ico").hide();
                      }
                      if (id === "SortDesc") {
                        GridOnSortCol.call(self, index, iCol, "desc");
                        ascIcons.hide();
                        descIcons.show();
                      } else {
                        GridOnSortCol.call(self, index, iCol, "asc");
                        descIcons.hide();
                        ascIcons.show();
                      }
                      event.data = { showPrevSortIcon: false };
                    }
                    break;
                  case "Lock":
                  case "Unlock":
                    OnLockColumn.call(self, colHeaderId);
                    self.GetGrid()
                      .parents("div.ui-jqgrid")
                      .find("tr.ui-jqgrid-labels")
                      .first()
                      .find("#" + colHeaderId)
                      .parent("th")
                      .focus();
                    break;
                }
                HideHeaderMenu(event);
                event.stopImmediatePropagation();
              });
            }
            headerMenu.focus();
            return ("stop");
          }
        }

        function GridOnSortCol(index, iCol, sortorder) {
          var self = this;
          index = self.GetColumnHelper().GetActualControlName(index);
          if (!self.GetPM().Get("SortMode") && !self.GetPM().OnControlEvent(siebConsts.get("PHYEVENT_SORT_LIST"), index, sortorder)) {
            // Error Handling ?
          }
        }

        function GridOnExpand(rowNum) {
          var self = $(this).data("jqGrid");
          self.GetPM().OnControlEvent(siebConsts.get("PHYEVENT_HIER_EXPAND"), rowNum);
        }

        function GridOnCollapse(rowNum) {
          var self = $(this).data("jqGrid");
          //call 'OnCollapse' on PM
          self.GetPM().OnControlEvent(siebConsts.get("PHYEVENT_HIER_COLLAPSE"), rowNum);
        }

        function GridOnSelectRow(rowId, status, e) {
          var self = $(this).data("jqGrid");
          e = e || window.event;
          var ret = self.OnRowSelect(rowId, e.ctrlKey, e.shiftKey);
          if (ret === false) {
            e.preventDefault();
            e.stopPropagation();
          }
        }

        function GridBeforeSelectRow(rowId, e) {
          var multiSel,
            self = $(this).data("jqGrid"),
            currentRow = self.GetSelectedRow(),
            pm = self.GetPM(),
            tdId = $(e.target).closest("td").attr("id");

          if (e.shiftKey && document.getSelection) {
            var sel = document.getSelection();
            if (sel && sel.removeAllRanges) {
              sel.removeAllRanges();
            }
          }
          if (pm.Get("MultiSelectColumn")) {
            var activeEl = $(e.target);
            if (activeEl && (activeEl.attr("name") === pm.Get("GetPlaceholder") + pm.Get("MultiSelectColumn"))) {
              var ctrlarr = pm.Get("selectctrlinfo"),
                ctrlmod = pm.Get("ctrlmode"),
                bctrlsel = ((ctrlarr && ctrlarr[rowId] && ctrlarr[rowId] === "0")
                  &&
                  (ctrlmod && ctrlmod === siebConsts.get("SWE_PROP_CAN_ENABLE_SEL"))) ? false : true;
              multiSel = activeEl;

              if (bctrlsel && pm.Get("GetRowsSelectedArray").indexOf(true) !== -1) {
                e.ctrlKey = true;
              }
            }
          }

          var activeCtrl = pm.Get("GetActiveControl");
          if (activeCtrl && pm.ExecuteMethod("GetListCol", activeCtrl.GetName())) {

            var el = GetControlElement.call(self, activeCtrl.GetName());
            if (el && el.length === 0) {
              pm.ExecuteMethod("SetActiveControl", null);
            }
          }

          var ret = self.OnRowSelect(rowId, e.ctrlKey, e.shiftKey); //Important
          if (multiSel) {
            multiSel.focus();   // Put focus back to multiselect
          }
          if (ret === false) {
            e.preventDefault();
            e.stopPropagation();
          }

          if (ret && e.type === "click") {
            var jqGridCtrl = self.GetGrid();
            if (jqGridCtrl) {
              if (rowId !== currentRow) {
                jqGridCtrl.data(jqGridCtrl.attr("id"), "noselect");
              }
              jqGridCtrl.data("beforeSelectRow", "true");
              if (!($(e.target).parents(".ui-jqgrid-bdiv").length) && !e.ctrlKey && !e.shiftKey) {
                $("#" + tdId).trigger("click");
              }
              jqGridCtrl = null;
            }
          }
          return ret;
        }

        function GridAfterEditCell(rowid, cellname, value, iRow, iCol) {
          var self = $(this).data("jqGrid");
          self.GetGrid().data("EditCellActive", true);
          var control = self.GetColumnControl(cellname);
          if (!control) {
            return;
          }

          var canUpdate = self.CanUpdateControl(rowid, cellname, value, iRow, iCol),
            pm = self.GetPM(),
            grid = self.GetGrid(),
            ctrlEl = grid.find("#" + iRow + "_" + cellname).eq(0),
            ctrlElParent = ctrlEl.parent(),
            controlType = control.GetUIType(),
            uiWrapper;

          if (self.GetGrid().jqGrid("getGridParam", "colModel")[iCol].isRequired) {
            ctrlEl.attr("aria-required", true);
          }

          switch (controlType) {
            case textArea: {
              var gridHeight = CalcGridHeight.call(self, true);
              ctrlEl.parents("tr").eq(0).addClass("siebui-elastic-grid");
              grid.parents(".ui-jqgrid-bdiv").addClass("force-auto-vertical-scroll");
              if (gridHeight < CalcGridHeight.call(self) / 2) {
                ctrlEl.height(gridHeight);
              }
            }
            case combo:
            case calc:
            case datePick:
            case dateTimePick:
            case dateTimezonePick:
            case mvg:
            case pick:
            case effdat:
            case currencyCal:
            case url:
            case plainText:
            case radioButton:
            case link:
            case mailTo:
            case label:
            case passwordCtrl:
            case fileControl:
            case text:
              uiWrapper = self.GetUIWrapper(control);
              uiWrapper.ShowUI();
              uiWrapper.SetElementCaching(true);
            case checkbox:
              uiWrapper = self.GetUIWrapper(control);
              uiWrapper.BindEvents();
              pm.Get("IsInQueryMode") ? uiWrapper.BeginQuery() : uiWrapper.EndQuery();
              if (control.GetUIType() === checkbox) {
                ctrlElParent
                  .attr("tabindex", "-1")
                  .bind("focus", function () {
                    if ($(this).parent().length > 0) {
                      $(this).children('[tabindex = "0"]').eq(0).focus();
                      return false;
                    }
                  });
                uiWrapper.SetValue(value);
              }
              ctrlEl
                .bind("keydown", function (event) {
                  SiebelApp.S_App.GetCmdMgr().FireAccelerator(event, event.which, utils.GetEventNType(event));
                })
                .bind("keydown", { ctx: self, row: iRow, col: iCol }, function (evt) {
                  var colModel = evt.data.ctx.GetGrid().jqGrid("getGridParam", "colModel"),
                    len = colModel.length;
                  if (evt.data.col === 1 || (evt.data.col === 2 && !colModel[1].editable)) {// multiselect column
                    MoveToPreviousRow.call(evt.data.ctx, evt);
                  }

                  if (evt.data.col === (len - 1) || (evt.data.col === len - 2 && !colModel[len - 1].editable)) {
                    MoveToNextRow.call(evt.data.ctx, evt);
                  }
                  if (evt.which === 9) {
                    evt.preventDefault();
                  }
                })
              break;
          }

          if (control.GetUIType() !== checkbox) {
            ctrlEl.attr("role", "input").addClass("siebui-align-" + control.GetJustification());
          }
          //Accessibility :: Add the Accessibility Attributes to the control created within the Cell
          if (SiebelApp.S_App.GetAccessibilityEnhanced() !== undefined && utils.IsTrue(SiebelApp.S_App.GetAccessibilityEnhanced())) {
            var placeHolder = pm.Get("GetPlaceholder");
            var parentDescBy = ctrlElParent.attr("aria-labelledby") || '',
              colheader = placeHolder + '_' + cellname,
              rowheader = rowid + '_' + placeHolder + '_' + pm.Get("GetRowIdentifierName"),
              prt = ctrlElParent.parent();

            if (controlType === checkbox) {
              parentDescBy = prt ? prt.attr("aria-labelledby") || "" : "";
            }
            //Accessibility
            if (pm.Get("ColHeader") !== colheader) {
              if (parentDescBy.indexOf(colheader) === -1) {
                parentDescBy = colheader + " " + parentDescBy;
              }
              pm.SetProperty("ColumnChange", false);
            }
            else {
              parentDescBy = parentDescBy.replace(colheader, '')
            }

            if (!pm.Get("IsInQueryMode") && pm.Get("RowHeader") !== rowheader) {
              if (parentDescBy.indexOf(rowheader) === -1) {
                parentDescBy = rowheader + " " + parentDescBy;
              }
              if (ctrlElParent.attr("id") === rowheader) {
                parentDescBy = parentDescBy.replace(rowheader, '')
              }
            }
            else {
              parentDescBy = parentDescBy.replace(rowheader, '')
            }

            pm.SetProperty("ColHeader", colheader);
            pm.SetProperty("RowHeader", rowheader);

            if (controlType === checkbox) {
              ctrlEl.attr("aria-labelledby", parentDescBy);
            }
            else {
              ctrlEl = grid.find("#" + iRow + "_" + cellname).eq(0);
              ctrlElParent = ctrlEl.parent();
              ctrlElParent
                .removeAttr("aria-labelledby")
                .attr("data-labelledby", parentDescBy)
                .end()
                .attr("aria-labelledby", parentDescBy)
                .next("span").removeAttr("aria-label");
            }
          }

          if (self.cellEditAllowed_ === false) {
            grid.jqGrid("saveCell", iRow, iCol);
            if (uiWrapper) {
              uiWrapper.SetElementCaching(false);
            }
            return;
          }

          if (!canUpdate) {
            ctrlEl = grid.find("#" + iRow + "_" + cellname).eq(0);
            ctrlElParent = ctrlEl.parent();
            ctrlEl.attr({
              "readonly": true,
              "aria-readonly": !canUpdate
            });
            if (controlType === checkbox && uiWrapper) {
              uiWrapper.SetState(siebConsts.get("ENABLE"), canUpdate);
            }
            ctrlElParent.attr("class", "edit-cell ui-state-disabled-cell"); // Oliver  -cell
          }

          if (uiWrapper) {
            SiebelAppFacade.DecisionManager.PauseVKeyboard(ctrlEl);
            uiWrapper.SetState(siebConsts.get("FOCUS"), true);
            SiebelAppFacade.DecisionManager.ResumeVKeyboard(ctrlEl);
            uiWrapper.SetElementCaching(false);
          }

          if (pm.Get("IsInQueryMode")) {
            ctrlEl.removeAttr("maxLength");
          }

          var gridId = grid.attr("id");
          if (grid.data(gridId) === "noselect") {
            grid.removeData(gridId);
          }
          else {
            setTimeout(function () { ctrlEl.select(); ctrlEl = null; }, 1);
          }

          if (grid.data("beforeSelectRow") === "true") {
            grid.removeData("beforeSelectRow");
            clearTimeout(grid.data("focusPreserveControl"));
          }

          var lockclm = pm.Get("LockedControls");
          if (!!lockclm) {
            EnableUnlockOnTab.call(self, ctrlEl, cellname, lockclm);
          }

          grid.removeData("focusPreserveControl");
          if (SiebelAppFacade.DecisionManager.IsTouch()) {
            var inpBeforeEditCell = $('<input type="number" class="siebui-touch-prev">');
            var inpAfterEditCell = $('<input type="number" class="siebui-touch-next">');
            inpBeforeEditCell.insertBefore(ctrlEl);
            inpAfterEditCell.insertAfter(ctrlEl);
          }
        }

        function GridAfterSaveCell(rowid, cellname, value, iRow, iCol) {
          var self = $(this).data("jqGrid"),
            el = self.GetGrid().find("#" + GetColId(iRow, this.id, cellname)),
            ctrl = self.GetColumnControl(cellname);

          if (value === " " && el.data('resetEmptyValue')) {
            self.SetCellValue(rowid, cellname, '');
            el.removeData('resetEmptyValue');
          }
          if (self.GetGrid().parents(".ui-jqgrid-bdiv").hasClass("force-auto-vertical-scroll")) {
            self.GetGrid().parents(".ui-jqgrid-bdiv").removeClass("force-auto-vertical-scroll");
          }
          var parent = $(el.parent("tr"));
          parent.removeClass('siebui-elastic-grid');

          self.GetGrid().setCell(rowid, cellname, '', null, { 'title': ctrl.GetUIType() == passwordCtrl ? "" : value });
          $(".siebui-touch-prev,.siebui-touch-next").remove();
        }

        function GridBeforeSaveCell(rowid, cellname, value, iRow, iCol) {
          var self = $(this).data("jqGrid");
          //console.log( "[afterSaveCell] for " + cellname + " row = " + rowid + " value " + value );,
          var gridCtrl = self.GetGrid();
          var el = gridCtrl.find("#" + GetColId(iRow, this.id, cellname));
          el.attr("aria-labelledby", el.attr("data-labelledby")).removeAttr("data-labelledby");
          var ctrl = self.GetColumnControl(cellname);
          $(".siebui-touch-prev,.siebui-touch-next").remove();
          if (ctrl) {
            if (ctrl.GetUIType() === combo) { // Bug#16385076
              value = FormatDDInQueryMode.call(self, ctrl, value);
            }
            InvokeColumnChange.call(self, this, ctrl, iRow, iCol, value);
            /*Bug#16001488 -Issue#1:: jqgrid internally replaces already formatted cell value(by the above InvokeColumnChange call) with the old value we are returning to it.
            *We may lose formatted values in case of Date or Time typed fields. So, collecting formatted value from the updated cell and returning it to jqgrid.
            */
            var tempEl = $("#" + iRow + "_" + cellname, gridCtrl);
            value = (tempEl.length > 0) ? tempEl.val() : gridCtrl.getCell(rowid, cellname);
            tempEl = null;
          }
          if (iCol === 0 && self.GetPM().Get("HasHierarchy")) {
            iRow = Number(iRow);
            gridCtrl.jqGrid("setTreeNode", iRow, iRow + 1);
          }
          /*if (self.GetPM().Get("IsInQueryMode") && ctrl.GetCaseSensitive() && (value === "")) {
          value = localeObj.GetLocalString("IDS_SWE_CSQ_WATERMARK");
          }*/
          if (value === "") {
            value = " ";
            el.data('resetEmptyValue', true);
          }
          gridCtrl.removeData("EditCellActive");
          gridCtrl = el = null;
          return value;
        }

        function GridAfterRestoreCell(rowid, value, iRow, iCol) {
          var self = $(this).data("jqGrid"),
            jqGridCtrl = self.GetGrid(),
            cellname = jqGridCtrl.jqGrid("getGridParam", "colModel")[iCol].name,
            el = self.GetGrid().find("#" + GetColId(iRow, this.id, cellname)),
            ctrl = self.GetColumnControl(cellname),
            pm = self.GetPM(),
            bc = pm.Get("GetBusComp");
          //console.log( "[afterRestoreCell] for " + self.GetGrid().jqGrid( "getGridParam", "colModel" )[iCol].name + " row = " + rowid + " value " + value );
          el.attr("aria-labelledby", el.attr("data-labelledby")).removeAttr("data-labelledby");
          if (jqGridCtrl.parents(".ui-jqgrid-bdiv").hasClass("force-auto-vertical-scroll")) {
            jqGridCtrl.parents(".ui-jqgrid-bdiv").removeClass("force-auto-vertical-scroll");
          }

          var parent = $(el.parent("tr"));
          parent.removeClass('siebui-elastic-grid');

          jqGridCtrl.setCell(rowid, cellname, '', null, { 'title': ctrl.GetUIType() == passwordCtrl ? "" : value });

          /*if (self.GetPM().Get("IsInQueryMode") && ctrl.GetCaseSensitive() && (value === localeObj.GetLocalString("IDS_SWE_CSQ_WATERMARK"))) {
          value = "";
          }*/

          var bc = self.GetPM().Get("GetBusComp");
          if (!bc || (bc && bc.GetUpdateArray()) ||
            pm.Get("GetSelection") === (Number(iRow) - 1)) {
            jqGridCtrl.data("inLeaveField", ctrl.GetInputName());
            InvokeColumnChange.call(self, this, ctrl, iRow, iCol, value);
            jqGridCtrl.removeData("inLeaveField");
          }

          jqGridCtrl.find("tr#" + iRow).find("td").eq(iCol).removeClass("edit-cell ui-state-disabled-cell"); //bug#15924151
          if (iCol === 0 && self.GetPM().Get("HasHierarchy")) {
            iRow = Number(iRow);
            jqGridCtrl.jqGrid("setTreeNode", iRow, iRow + 1);
          }
          jqGridCtrl.removeData("EditCellActive");
          el = null;
        }

        function GridResizeStop(width, index) {
          var self = $(this).data("jqGrid") || $(this.bDiv).find("table.ui-jqgrid-btable").data("jqGrid");
          SiebelApp.S_App.uiStatus.Busy({
            target: SiebelApp.S_App.GetTargetViewContainer(),
            mask: true
          });
          var cm = self.GetGrid().jqGrid("getGridParam", "colModel"),
            colob = {};
          colob[self.GetColumnHelper().GetColMap()[cm[index].name]] = parseInt(width, 10).toString();
          self.GetPM().OnControlEvent(siebConsts.get("PHYEVENT_COL_WIDTH_CHANGE"), colob);
          cm = null;

          if (SiebelAppFacade.DecisionManager.IsTouch()) {
            var grid = self.GetGrid();
            grid.parent(".siebui-applet-scrollarea").width(grid.width());
            if (SiebelApp.S_App.GetDirection()) {
              grid[0].grid.hDiv.scrollLeft = grid[0].grid.bDiv.scrollLeft;
            }
            grid = null;
          }
          SiebelApp.S_App.uiStatus.Free();
        }

        IPRJQGridRenderer.prototype.SetControlValue = function (control, value, index) {
          var ret = false;
          if (this.GetPM().Get("UpdateUI")) {
            ret = this.SetCellValue(index ? index : this.GetSelectedRow(), control.GetName(), value);
          }
          else {
            ret = !!this.GetGrid().length && control.GetControlType() === consts.get("SWE_PST_COL");
          }
          if (!ret)
            SiebelAppFacade.IPRJQGridRenderer.superclass.SetControlValue.call(this, control, value, index);
        };

        IPRJQGridRenderer.prototype.SetCellValue = function (rowId, fieldName, newValue) {
          var retValue = false,
            pm = this.GetPM();
          if (pm.Get("MultiSelectColumn") !== fieldName) {
            var jqGridCtrl = this.GetGrid();
            if (jqGridCtrl.length) {
              fieldName = this.GetColumnHelper().GetModifiedColumnName(fieldName);
              var control = this.GetColumnControl(fieldName);
              if (control) {
                var rowid;
                /*
                 For Query mode, row id should always be One.
                 Rest, it should be based on selected row.
               */
                if (pm.Get("IsInQueryMode")) {
                  rowid = 1;
                }
                else {
                  rowid = pm.Get("GetSelection") + 1;
                }
                var el = jqGridCtrl.data("EditCellActive") ? $("#" + rowid + "_" + fieldName, jqGridCtrl) : null;
                if (el === null || el.length === 0) {
                  var oldDataSet = jqGridCtrl.jqGrid('getGridParam', 'data'),
                    oldCellValue = null;
                  if (oldDataSet && oldDataSet[rowid - 1]) {
                    oldCellValue = oldDataSet[rowid - 1][fieldName];
                  }
                  //Only call setCell, if oldValue and newValue not same
                  if (oldCellValue !== newValue) {
                    jqGridCtrl.setCell(rowid, fieldName, newValue, null, { editable: false, 'title': newValue }, true);
                  }
                }
                else {
                  if (!(control.GetUIType() == combo && el.data("iscache"))) {
                    el.val(newValue);
                  }
                }
                if (rowid <= jqGridCtrl.jqGrid("getGridParam", 'reccount')) {
                  this.CacheState("CellValue", { index: rowid - 1, name: control.GetFieldName(), stateValue: newValue });
                }
                jqGridCtrl = control = pm = el = null;
                retValue = true;
              }
            }
          }
          return retValue;
        };

        //Focus model
        IPRJQGridRenderer.prototype.FocusFirstControl = function () {
          var jqGridCtrl = this.GetGrid();
          var currentRow = Number(jqGridCtrl.jqGrid('getGridParam', 'selrow'));
          var that = this;
          if (currentRow === 0) {
            return;
          }
          var listofColumns = this.GetPM().Get("ListOfColumns");
          var colModel = this.GetGrid().jqGrid("getGridParam", "colModel");
          if (!colModel) {
            // This is list masquerading as a form. Let the base class handle it.
            SiebelAppFacade.IPRJQGridRenderer.superclass.FocusFirstControl.call(this);
            return;
          }
          var map_col = this.GetColumnHelper().GetColMap();
          for (var i = 0; i < listofColumns.length && colModel; i++) {
            for (var key in map_col) {
              if (map_col.hasOwnProperty(key)) {
                if (listofColumns[i].name === map_col[key]) {
                  var canUpdate = this.CanUpdateControl(null, key);
                  var iCol;
                  for (iCol = 0, len = colModel.length; iCol < len; iCol++) {
                    if (colModel[iCol].hidden === false && colModel[iCol].editable && colModel[iCol].name === key) { break; }
                  }
                  if (canUpdate && iCol < len) {
                    setTimeout(function () {
                      currentRow = Number(that.GetSelectedRow()); //fix for current row being changed in settimeout due to delay.
                      if (currentRow > 0) {
                        var jqGridCtrl = that.GetGrid(),
                          el = $("#" + currentRow + "_" + key, jqGridCtrl);
                        jqGridCtrl.data(jqGridCtrl.attr("id"), "noselect");
                        if (el.length === 1) {
                          el.focus();
                        }
                        else {
                          jqGridCtrl.jqGrid('editCell', currentRow, iCol, true);
                        }
                      }
                    }, 10);
                    return;
                  }
                }
              }

            }
          }

          SiebelAppFacade.IPRJQGridRenderer.superclass.FocusFirstControl.call(this); //call super class method if the foucs is for control
          return;
        };

        IPRJQGridRenderer.prototype.GetFirstEditControl = function () {
          var jqGridCtrl = this.GetGrid();
          var currentRow = Number(jqGridCtrl.jqGrid('getGridParam', 'selrow'));
          var listofColumns = this.GetPM().Get("ListOfColumns");
          var map_col = this.GetColumnHelper().GetColMap();
          for (var i = 0; i < listofColumns.length; i++) {
            for (var key in map_col) {
              if (map_col.hasOwnProperty(key)) {
                if (listofColumns[i].name === map_col[key]) {
                  var canUpdate = this.CanUpdateControl(null, key);
                  var iCol = listofColumns[i].index;
                  if (canUpdate) {
                    return iCol;
                  }
                }
              }

            }
          }

          return;
        };

        IPRJQGridRenderer.prototype.SetFocusToControl = function (name, setFocus) {
          var jqGridCtrl = this.GetGrid();
          var currentRow = Number(jqGridCtrl.jqGrid('getGridParam', 'selrow'));
          if (currentRow === 0) {
            return;
          }


          var listOfColumns = this.GetPM().Get("ListOfColumns");
          var colModel = this.GetGrid().jqGrid("getGridParam", "colModel");
          var map_col = this.GetColumnHelper().GetColMap();

          // See focus if for Column
          if (!utils.IsEmpty(colModel)) {
            for (var i = 0; i < listOfColumns.length; i++) {
              for (var key in map_col) {
                if (map_col.hasOwnProperty(key)) {
                  if (listOfColumns[i].name === map_col[key]) {
                    if (listOfColumns[i].name === name) {
                      var canUpdate = this.CanUpdateControl(null, key);
                      var iCol;
                      for (iCol = 0; iCol < colModel.length; iCol++) {
                        if (colModel[iCol].hidden === false && colModel[iCol].name === key) {
                          break;
                        }
                      }
                      var selEl = key;
                      var setFocus = function () {
                        currentRow = Number(jqGridCtrl.jqGrid('getGridParam', 'selrow'));
                        if (currentRow > 0) {
                          var el = "#" + currentRow + "_" + selEl;
                          jqGridCtrl.data(jqGridCtrl.attr("id"), "noselect");
                          if (jqGridCtrl.find(el).length === 1) {
                            jqGridCtrl.find(el).focus();
                          }
                          else {
                            jqGridCtrl.jqGrid('editCell', currentRow, iCol, true);
                          }
                        }
                      };
                      if (this.GetPM().Get("SyncNavigation")) {
                        setFocus.call(this);
                        this.GetPM().SetProperty("SyncNavigation", false);
                      }
                      else {
                        var funcSetTimeout = setTimeout(setFocus, 10);
                        jqGridCtrl.data("focusPreserveControl", funcSetTimeout);
                      }

                    }
                  }
                }
              }
            }
          }


          SiebelAppFacade.IPRJQGridRenderer.superclass.SetFocusToControl.call(this, name, setFocus); //call super class method if the foucs is for control
          return false;
        };

        function SetCellEdit() {
          this.cellEditAllowed_ = this.GetPM().Get("InQueryMode") ? true : (!this.GetPM().Get("MultiSelectMode"));

          if (!this.cellEditAllowed_) {
            var control = this.GetPM().Get("GetActiveControl");
            if (control && control.GetName()) {
              var el = GetControlElement.call(this, control.GetName());
              if (el && el.length > 0) {
                el.blur();
              }
            }
          }
          this.GetPM().ExecuteMethod("SetActiveControl", null);
        }

        IPRJQGridRenderer.prototype.GetPhysicalControlValue = function (control) {
          var field, fieldValue,
            jqGridCtrl = this.GetGrid(),
            pm = this.GetPM();

          if (jqGridCtrl.length > 0) {
            var rowid = jqGridCtrl.jqGrid('getGridParam', 'selrow');
            var colName = this.GetColumnHelper().GetModifiedColumnName(control.GetName());
            if (control) {
              pm.AddProperty("PhysicalCtrlVal", fieldValue);
              field = $("#" + rowid + "_" + colName, jqGridCtrl);
              if (!this.GetColumnHelper().GetColControl()[colName] && field.length === 0) {
                field = $("[name='" + control.GetInputName() + "']");
              }
              fieldValue = ((field.length > 0) ? field.val() : jqGridCtrl.getCell(rowid, colName)) || "";

              if (this.GetPM().Get("IsInQueryMode") && control.GetCaseSensitive()
                && (fieldValue === SiebelApp.S_App.LocaleObject.GetLocalString("IDS_SWE_CSQ_WATERMARK"))) {
                fieldValue = "";
              }

              var ctrlType = control.GetUIType();
              switch (ctrlType) {
                case datePick:
                case dateTimePick:
                case dateTimezonePick:
                  if (pm.Get("IsInQueryMode") === false) {
                    fieldValue = utils.ToISOFormat(fieldValue, (ctrlType !== datePick), control.GetDisplayFormat()) || fieldValue;
                  }
                  break;
                case combo: //Bug#16385076
                  if (!field.data("iscache")) {
                    fieldValue = FormatDDInQueryMode.call(this, control, fieldValue);
                  }
                  else {
                    fieldValue = pm.ExecuteMethod("GetFormattedFieldValue", control);
                  }
                  break;
              }
              pm.SetProperty("PhysicalCtrlVal", (field.length ? field.data("inLeaveField") : jqGridCtrl.data("inLeaveField") === control.GetInputName()) ? null : fieldValue);
            }
          }
          //VT: If list turned to form , then invoke base class method to get the value
          else {
            SiebelAppFacade.IPRJQGridRenderer.superclass.GetPhysicalControlValue.call(this, control);
          }
        };

        IPRJQGridRenderer.prototype.ShowSelection = function (index) {
          if (this.inProgress) {
            return false;
          }
          var pm = this.GetPM(),
            jqGridCtrl = this.GetGrid();

          if (pm.Get("IsInQueryMode")) {
            this.ClearSelection();
            jqGridCtrl.setSelection(1, false);
            this.CacheState("SelectedRowArray", ["true"]);
            SiebelAppFacade.IPRJQGridRenderer.superclass.ShowSelection.call(this);
          }
          else {
            var rowCount = jqGridCtrl.length > 0 ? pm.Get("RecordSetLength") : pm.Get("GetRecordSet").length,
              selArray,
              len = 0,
              isMultiRowForm = (jqGridCtrl.length === 0 && pm.Get("GetMode") === consts.get("SWE_PST_APPLET_MODE_BASE")),
              cellname = pm.Get("MultiSelectColumn") ? pm.Get("GetPlaceholder") + pm.Get("MultiSelectColumn") : null,
              bSelall = true,
              bchk, el, scrollToEl,
              ctrlarr = pm.Get("selectctrlinfo");
            if (isMultiRowForm) {
              selArray = pm.Get("GetRowsSelectedArray");
              len = selArray.length;
              for (var i = 0; i < rowCount && i < len; i++) {
                SiebelAppFacade.IPRJQGridRenderer.superclass.ShowSelection.call(this, i);
              }
            } else {
              selArray = pm.Get("GetRowsSelectedArray", { getDiff: true });
              if (selArray) {
                this.ClearSelection();
                len = selArray.length;
                for (var i = 0; i < rowCount && i < len; i++) {
                  if (selArray[i]) {
                    if (cellname) {
                      el = $($("input[name=\"" + cellname + "\"]")[i] || $("#" + cellname)[i]);
                      bchk = true;
                      if (ctrlarr && ctrlarr[i + 1] && ctrlarr[i + 1] === "0") {
                        bchk = false;
                      }
                      if (el.length && bchk) {
                        el.prop('checked', true);
                        el.attr({
                          "title": localeObj.GetLocalString("IDS_BHC_CHECKED"),
                          "aria-checked": "true"
                        });
                      }
                    }

                    scrollToEl = el;
                    jqGridCtrl.setSelection(i + 1, false);
                  }
                  else {
                    bSelall = false;
                  }
                }
                if (cellname) {
                  if ((rowCount !== selArray.length && selArray.length <= 1) || !rowCount) {
                    bSelall = false;
                  }
                  var cellheader = "header_" + cellname;
                  el = $($("input[name=\"" + cellheader + "\"]") || $("#" + cellheader));
                  if (el && el.length) {
                    el.prop('checked', bSelall)
                      .attr("aria-checked", "" + bSelall);
                  }
                }
                RepositionScroll.call(this, scrollToEl, selArray);

                this.CacheState("SelectedRowArray", { stateValue: selArray });
              } else {
                this.UpdateSelectedRow();
                jqGridCtrl.jqGrid('resetEditCell');
              }
              SiebelAppFacade.IPRJQGridRenderer.superclass.ShowSelection.call(this, (index && jqGridCtrl.length > 0) || undefined, pm.Get("BaseAppletControls"));
            }
          }
        };

        function GetBaseAppletControls() {
          var pm = this.GetPM(),
            jqGridCtrl = this.GetGrid(),
            controlList = pm.Get("GetControls"),
            listControls = pm.Get("ListOfColumns"),
            arListCol = [],
            len = listControls.length,
            retVal = {};

          if (jqGridCtrl.length) {
            for (var n = 0; n < len; n++) {
              arListCol.push(listControls[n].name);
            }
            for (var ctrl in controlList) {
              if (arListCol.indexOf(ctrl) === -1) {
                retVal[ctrl] = controlList[ctrl];
              }
            }
          } else {
            retVal = null;
          }

          return retVal;
        };

        IPRJQGridRenderer.prototype.UpdateUIControls = function () {
          SiebelAppFacade.IPRJQGridRenderer.superclass.UpdateUIControls.call(this, arguments[0], this.GetGrid().length > 0 ? this.GetPM().Get("BaseAppletControls") : arguments[1]);
        };

        IPRJQGridRenderer.prototype.SelectRow = function (index, bSelected) {
          if (this.inProgress) { return false; }
          if (bSelected) {
            this.GetGrid().setSelection(index, false);
          }
        };

        IPRJQGridRenderer.prototype.ClearSelection = function () {
          if (this.inProgress) { return false; }
          this.UpdateSelectedRow();
          var cellname = this.GetPM().Get("MultiSelectColumn");
          if (cellname) {
            cellname = this.GetPM().Get("GetPlaceholder") + cellname;
            var el = $($("input[name=\"" + cellname + "\"]") || $("#" + cellname));
            if (el) {
              el.prop('checked', false);
              el.attr({
                "title": localeObj.GetLocalString("IDS_BHC_UNCHECKED"),
                "aria-checked": "false"
              });
            }

            var cellheader = "header_" + cellname;
            el = $($("input[name=\"" + cellheader + "\"]") || $("#" + cellheader));
            if (el) {
              el.prop('checked', false);
            }
          }
          this.GetGrid().resetSelection();
        };

        IPRJQGridRenderer.prototype.UpdateSelectedRow = function () {
          if (this.inProgress) {
            return false;
          }
          var rowId = this.GetSelectedRow(),
            map_col = this.GetColumnHelper().GetColMap(),
            grid = this.GetGrid(),
            multiSelCol = this.GetPM().Get("MultiSelectColumn");
          for (var key in map_col) {
            if (map_col.hasOwnProperty(key)) {
              var colName = this.GetColumnHelper().GetModifiedColumnName(key);
              if (colName !== multiSelCol && grid.find($("#" + rowId + "_" + colName)).length === 1) {
                var idx = utils.IndexOf(grid.jqGrid("getGridParam", "colNames"), HtmlEncode(this.GetColumnHelper().GetActualColumnName(key)));
                grid.jqGrid("saveCell",
                  rowId,
                  idx > -1 ? idx : 0);
              }
            }
          }
          rowId = map_col = grid = multiSelCol = null;
        };

        IPRJQGridRenderer.prototype.ClearData = function () {
          if (this.inProgress) { return false; }
          this.GetGrid().jqGrid('clearGridData');
        };

        /* Event Handling Methods... */
        IPRJQGridRenderer.prototype.OnPagination = function (title) {
          var direction = "";
          switch (title) {
            case "next_pager": // Next Record
              direction = siebConsts.get("PAG_NEXT_RECORD");
              break;
            case "last_pager": // Next Set of Record
              direction = siebConsts.get("PAG_NEXT_SET");
              break;
            case "prev_pager":
              direction = siebConsts.get("PAG_PREV_RECORD");
              break;
            case "first_pager":
              direction = siebConsts.get("PAG_PREV_SET");
              break;
            case "scroll_up":
              direction = siebConsts.get("PAG_SCROLL_UP");
              break;
            case "scroll_down":
              direction = siebConsts.get("PAG_SCROLL_DN");
              break;

          }

          if (!this.GetPM().OnControlEvent(siebConsts.get("PHYEVENT_VSCROLL_LIST"), direction)) {
            // Error Handling ?
          }
        };

        IPRJQGridRenderer.prototype.OnRowSelect = function (rowId, ctrlKey, shiftKey) {
          var bReturn = false,
            that = this,
            pm = this.GetPM(),
            ret;
          if (pm.Get("IsActive") || pm.OnControlEvent(siebConsts.get("PHYEVENT_APPLET_FOCUS"))) {
            if (!ctrlKey && !shiftKey
              && Number(rowId) === Number(this.GetSelectedRow())
              && this.GetSelectedRow('all').length === 1) {
              bReturn = true;
            } else {
              this.UpdateSelectedRow();
              SiebelApp.S_App.uiStatus.Busy({});
              pm.SetProperty("ResetScroll", false);
              ret = pm.OnControlEvent(siebConsts.get("PHYEVENT_SELECT_ROW"), rowId - 1, ctrlKey, shiftKey);
              //control event can trigger applet toggle, which will rebuild the PM object.
              pm = that.GetPM();
              if (!ret) {
                if (pm) {
                  var recordSet = pm.Get("GetRecordSet");
                  pm.SetProperty("ResetScroll", true);
                  DOMUtils.Read(function () {
                    DOMUtils.Write(function () {
                      InitScroll.call(that, recordSet ? recordSet.length : 0, false, false);
                    });
                  });
                }
              } else {
                if (pm) {
                  pm.SetProperty("ResetScroll", true);
                }
                bReturn = true;
              }
              SiebelApp.S_App.uiStatus.Free();
            }
          }
          return bReturn;
        };

        IPRJQGridRenderer.prototype.CommitPending = function () {
          this.UpdateSelectedRow();
        };

        IPRJQGridRenderer.prototype.CanUpdateControl = function (rowid, cellname, value, iRow, iCol) {
          return this.GetPM().ExecuteMethod("CanUpdate", this.GetColumnHelper().GetActualControlName(cellname));
        };

        IPRJQGridRenderer.prototype.GetColumnControl = function (cellname) {
          return this.GetColumnHelper().GetColumnControl(cellname);
        };

        IPRJQGridRenderer.prototype.resize = function () {
          if (this.GetGrid().length > 0 && $("#gbox_" + this.GetPM().Get("GetPlaceholder")).parent().is(':visible')) {
            //this.GetGrid().setGridWidth(0, false);
            var containerWidth,
              _self = this,
              recSet = _self.GetPM().Get("GetRecordSet");
            DOMUtils.Read(function () {
              if (SiebelApp.S_App.IsRwd() && (utils.IsTrue(_self.GetPM().Get("IsObjResponsive")))) {
                containerWidth = parseInt($("#gbox_" + _self.GetPM().Get("GetListId")).parent().width(), 10); //For MVG
              }
              else {
                containerWidth = parseInt($("#gbox_" + _self.GetPM().Get("GetPlaceholder")).parent().width(), 10);
              }
              DOMUtils.Write(function () {
                var jqGridCtrl = _self.GetGrid();
                jqGridCtrl.setGridWidth(containerWidth, isShrinkToFit.call(_self, containerWidth));
                if (SiebelAppFacade.DecisionManager.IsTouch()) {
                  jqGridCtrl.parent(".siebui-applet-scrollarea").width(_self.GetGrid().width());
                  if (jqGridCtrl.data("Iscroll") && jqGridCtrl.data("Iscroll").maxScrollY === 0 && recSet && recSet.length > 0) {
                    InitScroll.call(_self, recSet.length, true, true);
                  }
                }
                if (SiebelApp.S_App.GetDirection() && recSet && recSet.length > 0) {
                  jqGridCtrl[0].grid.hDiv.scrollLeft = _self.GetGrid()[0].grid.bDiv.scrollLeft;
                }
              });
            });
          }
        };

        IPRJQGridRenderer.prototype.fixHeight = function (data) {
          if (data && data.id === ("#s_" + this.GetRendererBridge().GetProxy().GetFullId() + "_div")) {
            var parentContainer = $("#s_" + this.GetRendererBridge().GetProxy().GetFullId() + "_div");

            this.GetGrid().setGridHeight(parentContainer.height() -
              (this.GetGrid().closest(".ui-jqgrid").height() -
                this.GetGrid().closest(".ui-jqgrid").find(".ui-jqgrid-bdiv").height()));
          }
        };

        IPRJQGridRenderer.prototype.GetSelectedRow = function (mode) {
          return (mode === "all") ?
            this.GetGrid().jqGrid("getGridParam", "selarrrow") :
            this.GetGrid().jqGrid("getGridParam", "selrow");
        };

        IPRJQGridRenderer.prototype.ShowPopup = function (control) {
          var jqGridCtrl = this.GetGrid();
          var currentRow = Number(jqGridCtrl.jqGrid('getGridParam', 'selrow'));
          var listofColumns = this.GetPM().Get("ListOfColumns");
          var colModel = this.GetGrid().jqGrid("getGridParam", "colModel");
          var controlName = control.GetName();
          var that = this;
          if (!colModel) {
            SiebelAppFacade.IPRJQGridRenderer.superclass.ShowPopup.call(this, control);
            return;
          }
          var column_num = listofColumns.length;
          for (var i = 0; i < column_num; i++) {
            if (listofColumns[i].name === controlName) {
              var canUpdate = this.CanUpdateControl(null, controlName);
              var fieldName = this.GetColumnHelper().GetModifiedColumnName(controlName);
              var iCol;
              var colModelLen = colModel.length;
              for (iCol = 0; iCol < colModelLen; iCol++) {
                if (colModel[iCol].hidden === false && colModel[iCol].name === fieldName) { break; }
              }
              if (canUpdate) {
                var el = $("#" + currentRow + "_" + fieldName, jqGridCtrl);
                if (el.length !== 1) {
                  if (currentRow > 0) {
                    jqGridCtrl.jqGrid('editCell', currentRow, iCol, true);
                  }
                }
                var pendingval = $("#" + currentRow + "_" + fieldName, jqGridCtrl).parent().data("filterValue");
                setTimeout(function () {
                  var currentRow = that.GetSelectedRow(),//current row being changed in settimeout due to delay.
                    ctrlelement = $("#" + currentRow + "_" + fieldName, jqGridCtrl);
                  ctrlelement.parent().data("filterValue", pendingval || "");
                  ctrlelement.nextAll("#" + control.GetInputName() + "_icon").eq(0).click();
                  ctrlelement.parent().removeData("filterValue");
                }, 10);
                return;
              }
            }
          }
        };

        function SetFocustoFirstCell() {
          var pm = this.GetPM();
          if (pm.Get("SetFocusToGridCell")) {
            this.GetGrid().find("tr.ui-state-highlight").children("td").each(function () {
              var elem = this,
                //when column is hidden, then td tag of that column will have "display: none" property.
                //So using the same for high performance, instead of "is(':visible')" jquery call which force layout re-render
                display = elem.style && elem.style.display;
              if (display !== null) {
                DOMUtils.Read(function () {
                  DOMUtils.Write(function () {
                    $(elem)
                      .attr("tabindex", "0")
                      .focus();
                  });
                });
                return false;
              }
            });
            pm.SetProperty("SetFocusToGridCell", false);
          }
        }

        function AddSortInfo(propName, propValue) {
          var id = this.GetPM().Get("GetPlaceholder") + "_" + this.GetColumnHelper().GetModifiedColumnName(propValue.name);
          this.GetGrid()[0].p.focus = false;
          var el = this
            .GetGrid()
            .parents("div.ui-jqgrid")
            .find("tr.ui-jqgrid-labels")
            .children("th")
            .removeAttr("aria-sort")
            .removeAttr("role")
            .end()
            .children("#" + id)
            .attr("aria-sort", propValue.type)
            .attr("role", "columnheader")
            .focus();
        }

        function UpdateColumnBehavior() {
          var pm = this.GetPM(),
            listOfColumns = pm.Get("ListOfColumns"),
            grid = this.GetGrid(),
            listColLen = listOfColumns.length,
            isSortable = !pm.Get("IsInQueryMode"),
            isTrue = siebConsts.get("SWE_NUMERIC_TRUE"),
            columnHelper = this.GetColumnHelper(),
            currentColumn,
            currentControl,
            isCtrlSortable,
            name;

          for (var i = 0; i < listColLen; i++) {
            currentColumn = listOfColumns[i];
            currentControl = currentColumn.control;
            name = columnHelper.GetModString(currentColumn.name);
            isCtrlSortable = currentControl ? isSortable && (currentControl.IsSortable() === isTrue) : false;
            grid.setColProp(name, { sortable: isCtrlSortable });
          }
          listOfColumns = null;
          columnHelper = null;
        }

        return IPRJQGridRenderer;
      }());

      return "SiebelAppFacade.IPRJQGridRenderer";
    });

  SiebelAppFacade.GridColumnHelper = function () {
    var colMap = {};
    var colControl = {};
    var colField = {};
    var formatedStringCache = {};
    var utils = SiebelJS.Dependency("SiebelApp.Utils");
    var siebConsts = SiebelJS.Dependency("SiebelApp.Constants");

    this.GetColMap = function () {
      return colMap;
    };

    this.GetColControl = function () {
      return colControl;
    };

    this.GetColField = function () {
      return colField;
    };

    //IE performance fix, by formatted string to cache and avoid jquery string parsing and attribute mutation
    this.SetCachedFormattedString = function (iconImage, controlDisplayName, formatedString) {
      return formatedStringCache[iconImage + controlDisplayName] = formatedString;
    };

    this.GetCachedFormattedString = function (iconImage, controlDisplayName) {
      return formatedStringCache[iconImage + controlDisplayName];
    };

    this.EndLife = function () {
      colMap = colControl = colField = formatedStringCache = {};
    };

    this.GetModString = function (inStr) {
      if (!inStr) {
        return inStr;
      }
      var escRegex = siebConsts.get("SWE_ESCAPE_REGEX");
      return inStr.replace(escRegex, "_");
    };
  };

  SiebelAppFacade.GridColumnHelper.prototype = {
    AddColumn: function (orig, control) {
      var modified = null;

      if (typeof (orig) === "string") {
        modified = this.GetModString(orig);

        this.GetColMap()[modified] = orig;
        this.GetColControl()[modified] = control;
        this.GetColField()[control.GetFieldName()] = orig;
      }

      return modified;
    },
    //This will return the Control Name
    GetActualControlName: function (col) {
      return this.GetColMap()[col];

    },
    // This will return the Display Name/ Column Header in the List
    GetActualColumnName: function (col) {
      //Get the control's display Name
      return this.GetColControl()[col].GetDisplayName();
    },

    GetModifiedColumnName: function (col) {
      var modified = null;

      if (typeof (col) === "string") {
        modified = this.GetModString(col);
      }
      return modified;
    },

    GetColumnControl: function (col) {
      return this.GetColControl()[col];
    },

    GetColumnOfField: function (field) {
      return this.GetColField()[field];
    },

    // TODO: Relook translate..
    TranslateObject: function (listOfColumns, bcFields) {
      var current = {};
      var colName = null;
      var listOfColumnsLength = listOfColumns.length;
      for (var i = 0; i < listOfColumnsLength; i++) {
        var fieldName = listOfColumns[i].control.GetFieldName();
        colName = listOfColumns[i].name;
        if (!SiebelApp.Utils.IsEmpty(colName)) {
          current[this.GetModString(colName)] = fieldName ? bcFields[fieldName] : bcFields[colName];
        }
      }
      if (bcFields["Id"]) {
        current["Id"] = bcFields["Id"];
      }
      return current;
    }
  };
}
