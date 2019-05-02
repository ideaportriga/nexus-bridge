//Regenerate using:http://duncanford.github.io/prpm-code-generator/?prpm=PR&object=DesktopList&name=NexusDefaultListApplet&userprops=&comments=No&logging=Yes
if (typeof (SiebelAppFacade.NexusDefaultListAppletPR) === "undefined") {

  SiebelJS.Namespace("SiebelAppFacade.NexusDefaultListAppletPR");
  define("siebel/custom/NexusDefaultListAppletPR", ["siebel/jqgridrenderer"],
    function () {
      SiebelAppFacade.NexusDefaultListAppletPR = (function () {

        function NexusDefaultListAppletPR(pm) {
          SiebelAppFacade.NexusDefaultListAppletPR.superclass.constructor.apply(this, arguments);
        }

        SiebelJS.Extend(NexusDefaultListAppletPR, SiebelAppFacade.JQGridRenderer);

        NexusDefaultListAppletPR.prototype.Init = function () {
          SiebelAppFacade.NexusDefaultListAppletPR.superclass.Init.apply(this, arguments);
          SiebelJS.Log(this.GetPM().Get("GetName") + ": NexusDefaultListAppletPR:      Init method reached.");

          var pm = this.GetPM();
          var appletName = pm.Get("GetName");
          SiebelAppFacade.N19 = SiebelAppFacade.N19 || {};
          SiebelAppFacade.N19[appletName] = new SiebelAppFacade.N19Helper({ pm: pm });

          // pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_GENERIC'), function (propSet) {
          //   var type = propSet.GetProperty(consts.get('SWE_PROP_NOTI_TYPE'));
          //   if ('ClosePopup' === type) {
          //     SiebelAppFacade.N19Helper.ReInitPopup()
          //   }
          //   console.log('SWE_PROP_BC_NOTI_GENERIC ', type, propSet);
          // });

          // pm.AttachNotificationHandler(consts.get('SWE_PROP_NOTI_SELECTED'), function (propSet) {
          //   console.log('>>>SWE_PROP_NOTI_SELECTED', propSet);
          // });

          // pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_NEW_ACTIVE_ROW'), function (propSet) {
          //   console.log('>>>SWE_PROP_BC_NOTI_NEW_ACTIVE_ROW', propSet);
          // });

          // pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_STATE_CHANGED'), function (propSet) {
          //   console.log('SWE_PROP_BC_NOTI_STATE_CHANGED', propSet, propSet.GetProperty('state'));
          //   if ('cp' === propSet.GetProperty('state')) { //commit pending?
          //   }
          // });

          // pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_NEW_FIELD_LIST'), function (propSet) {
          //   console.log('SWE_PROP_BC_NOTI_NEW_FIELD_LIST', propSet, propSet.GetProperty('state'));
          // });

          // pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_NEW_DATA_WS'), function (propSet) {
          //   console.log('SWE_PROP_BC_NOTI_NEW_DATA_WS', propSet, propSet.GetProperty(consts.get('SWE_PROP_NOTI_FIELD')));
          // });

          // pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_BEGIN'), function (propSet) {
          //   console.groupCollapsed(`${appletName}: NOTIFY ${propSet.GetProperty(consts.get('SWE_PROP_BC_OPERATION'))} ${propSet.GetProperty(consts.get("SWE_PROP_BC"))}`);
          //   console.log('SWE_PROP_BC_NOTI_BEGIN', propSet);
          // });

          // pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_LONG_OPERATION_PROCESS'), function (propSet) {
          //   console.log('SWE_PROP_BC_NOTI_LONG_OPERATION_PROCESS', propSet);
          // });

          // pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NEW_ACTIVE_FIELD'), function (propSet) {
          //   console.log('SWE_PROP_BC_NEW_ACTIVE_FIELD', propSet);
          // });

          // pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_END'), function (propSet) {
          //   console.log('SWE_PROP_BC_NOTI_END', propSet);
          //   console.groupEnd();
          // });

          // pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_NEW_SELECTION'), function (propSet) {
          //   console.log('SWE_PROP_BC_NOTI_NEW_SELECTION', propSet);
          // });

          // pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_NEW_DATA'), function (propSet) {
          //   console.log('SWE_PROP_BC_NOTI_NEW_DATA', propSet);
          // });

          // pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_DELETE_RECORD'), function (propSet) {
          //   console.log('SWE_PROP_BC_NOTI_DELETE_RECORD', propSet);
          // });

          // pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_DELETE_WORKSET'), function (propSet) {
          //   console.log('SWE_PROP_BC_NOTI_DELETE_WORKSET', propSet);
          // });

          // pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_NEW_PRIMARY'), function (propSet) {
          //   console.log('SWE_PROP_BC_NOTI_NEW_PRIMARY', propSet);
          // });

          // pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_INSERT_WORKSET'), function (propSet) {
          //   console.log('SWE_PROP_BC_NOTI_INSERT_WORKSET', propSet);
          // });

          // pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_INSERT_WORKSET_FIELD_VALUES'), function (propSet) {
          //   console.log('SWE_PROP_BC_NOTI_INSERT_WORKSET_FIELD_VALUES', propSet);
          // });

          // pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_EXECUTE'), function (propSet) {
          //   console.log('SWE_PROP_BC_NOTI_EXECUTE', propSet);
          // });

          // pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_CHANGE_SELECTION'), function (propSet) {
          //   console.log('SWE_PROP_BC_NOTI_CHANGE_SELECTION', propSet);
          // });

          // pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_SELECTION_MODE_CHANGE'), function (propSet) {
          //   console.log('SWE_PROP_BC_NOTI_SELECTION_MODE_CHANGE', propSet);
          // });

          // pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_BEGIN_QUERY'), function (propSet) {
          //   console.log('SWE_PROP_BC_NOTI_BEGIN_QUERY', propSet);
          // });

          // pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_NEW_QUERYSPEC'), function (propSet) {
          //   console.log('SWE_PROP_BC_NOTI_NEW_QUERYSPEC', propSet);
          // });

          // pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_NEW_FIELD_QUERYSPEC'), function (propSet) {
          //   console.log('SWE_PROP_BC_NOTI_NEW_FIELD_QUERYSPEC', propSet);
          // });

          // pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_END_QUERY'), function (propSet) {
          //   console.log('SWE_PROP_BC_NOTI_END_QUERY', propSet);
          // });

          // pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_NEW_RECORD'), function (propSet) {
          //   console.log('SWE_PROP_BC_NOTI_NEW_RECORD', propSet);
          // });

          // pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_NEW_RECORD_DATA'), function (propSet) {
          //   console.log('SWE_PROP_BC_NOTI_NEW_RECORD_DATA', propSet);
          // });

          // pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_NEW_RECORD_DATA_WS'), function (propSet) {
          //   console.log('SWE_PROP_BC_NOTI_NEW_RECORD_DATA_WS', propSet);
          // });

          // pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_NEW_RECORD_SCROLL_DATA'), function (propSet) {
          //   console.log('SWE_PROP_BC_NOTI_NEW_RECORD_SCROLL_DATA', propSet);
          // });

          // pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_PAGE_REFRESH'), function (propSet) {
          //   console.log('SWE_PROP_BC_NOTI_PAGE_REFRESH', propSet);
          // });

          // pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_NEW_FIELD_DATA'), function (propSet) {
          //   console.log('SWE_PROP_BC_NOTI_NEW_FIELD_DATA', propSet, propSet.GetProperty(consts.get('SWE_PROP_NOTI_FIELD')));
          // });

          // pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_SCROLL_AMOUNT'), function (propSet) {
          //   console.log('SWE_PROP_BC_NOTI_SCROLL_AMOUNT', propSet);
          // });

          // pm.AttachNotificationHandler(consts.get('SWE_NOTIFY_PAGE_REFRESH'), function (propSet) {
          //   console.log('SWE_NOTIFY_PAGE_REFRESH', propSet);
          // });
        }

        NexusDefaultListAppletPR.prototype.ShowUI = function () {
          SiebelAppFacade.NexusDefaultListAppletPR.superclass.ShowUI.apply(this, arguments);
        }

        NexusDefaultListAppletPR.prototype.BindData = function (bRefresh) {
          SiebelAppFacade.NexusDefaultListAppletPR.superclass.BindData.apply(this, arguments);
        }

        NexusDefaultListAppletPR.prototype.BindEvents = function () {
          SiebelAppFacade.NexusDefaultListAppletPR.superclass.BindEvents.apply(this, arguments);
        }

        NexusDefaultListAppletPR.prototype.EndLife = function () {
          var appletName = this.GetPM().Get("GetName");
          if (SiebelAppFacade.N19 && SiebelAppFacade.N19[appletName]) {
            SiebelAppFacade.N19[appletName] = null;
            delete SiebelAppFacade.N19[appletName];
          }
          SiebelAppFacade.NexusDefaultListAppletPR.superclass.EndLife.apply(this, arguments);
        }

        return NexusDefaultListAppletPR;
      }()
      );
      return "SiebelAppFacade.NexusDefaultListAppletPR";
    })
}
