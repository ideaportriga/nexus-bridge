/* eslint-disable prefer-rest-params, prettier/prettier, no-var */
if (typeof window.SiebelAppFacade.NBDefaultAppletPR === 'undefined') {
  window.SiebelJS.Namespace('SiebelAppFacade.NBDefaultAppletPR')
  window.define(
    'siebel/custom/NBDefaultAppletPR',
    ['siebel/phyrenderer'],
    function () {
      window.SiebelAppFacade.NBDefaultAppletPR = (function () {
        function NBDefaultAppletPR(pm) {
          window.SiebelAppFacade.NBDefaultAppletPR.superclass.constructor.apply(
            this,
            arguments
          )
        }

        window.SiebelJS.Extend(
          NBDefaultAppletPR,
          window.SiebelAppFacade.PhysicalRenderer
        )

        function setControlValue(control, value) {
          var pm = this.GetPM()
          var obj = pm.Get('n19internal')
          obj[control.GetName()] = value
          pm.AddProperty('n19internal', obj)
        }

        function getPhysicalControlValue(control) {
          var pm = this.GetPM()
          pm.AddProperty('PhysicalCtrlVal', '')
          if (control) {
            var val = pm.Get('n19internal')[control.GetName()]
            pm.AddProperty('PhysicalCtrlVal', val)
          }
        }

        function initInternalObject() {
          var pm = this.GetPM()
          var obj = {}
          var selection = pm.Get('GetSelection')
          if (selection > -1) {
            var controls = pm.Get('GetControls')
            var recordSet = pm.Get('GetRecordSet')[selection]
            // TODO: form returns not formatted values
            if (recordSet) {
              // TODO: is it better to check if is in query mode?
              Object.keys(controls).forEach(function (controlName) {
                //TODO: or use formatted field values?
                var fieldName = controls[controlName].GetFieldName()
                if ('' !== fieldName) {
                  obj[controlName] = recordSet[fieldName]
                }
              })
            }
          }
          pm.AddProperty('n19internal', obj)
        }

        NBDefaultAppletPR.prototype.destroyNexus = function () {
          var appletName = this.GetPM().Get('GetName')
          if (
            window.SiebelAppFacade.NB &&
            window.SiebelAppFacade.NB[appletName]
          ) {
            window.SiebelAppFacade.NB[appletName] = null
            delete window.SiebelAppFacade.NB[appletName]
          }
        }

        NBDefaultAppletPR.prototype.initializeNexus = function (options) {
          var pm = this.GetPM()
          var appletName = pm.Get('GetName')
          options.pm = pm
          window.SiebelAppFacade.NB = window.SiebelAppFacade.NB || {}
          if (pm.Get('IsPopup')) {
            window.SiebelAppFacade.NB[
              appletName
            ] = window.SiebelAppFacade.NexusBridge.CreatePopupNB(options)
          } else {
            window.SiebelAppFacade.NB[
              appletName
            ] = new window.SiebelAppFacade.NexusBridge(options)
          }
          return window.SiebelAppFacade.NB[appletName]
        }

        NBDefaultAppletPR.prototype.removeHtml = function () {
          var divId = this.GetPM().Get('GetFullId')
          var el = document.querySelector('#' + divId)
          if (el) {
            // can't be found for assoc in shuttle when mvg html removed
            el.parentNode.removeChild(el)
          }
        }

        NBDefaultAppletPR.prototype.Init = function () {
          var pm = this.GetPM()
          pm.AddProperty('n19internal', {})
          pm.AttachNotificationHandler(
            window.consts.get('SWE_PROP_BC_NOTI_END'),
            initInternalObject.bind(this)
          )
          this.AttachPMBinding('FieldChange', setControlValue)
          this.AttachPMBinding(
            'GetPhysicalControlValue',
            getPhysicalControlValue
          )
        }

        NBDefaultAppletPR.prototype.ShowUI = function () { ; }

        NBDefaultAppletPR.prototype.BindData = function () { ; }

        NBDefaultAppletPR.prototype.BindEvents = function () { ; }

        NBDefaultAppletPR.prototype.EndLife = function () {
          window.SiebelAppFacade.NBDefaultAppletPR.superclass.EndLife.apply(
            this,
            arguments
          )
        }

        return NBDefaultAppletPR
      })()
      return 'SiebelAppFacade.NBDefaultAppletPR'
    }
  )
}
