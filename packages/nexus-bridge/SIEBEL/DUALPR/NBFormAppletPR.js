/* eslint-disable prefer-rest-params, prettier/prettier */
if (typeof window.SiebelAppFacade.NBFormAppletPR === 'undefined') {
  window.SiebelJS.Namespace('SiebelAppFacade.NBDefaultFormAppletPR')
  window.define('siebel/custom/NBFormAppletPR', [
    'siebel/custom/NBDefaultFormAppletPR'
  ], function () {
    window.SiebelAppFacade.NBFormAppletPR = (function () {
      function NBFormAppletPR(pm) {
        window.SiebelAppFacade.NBFormAppletPR.superclass.constructor.apply(
          this,
          arguments
        )
      }

      window.SiebelJS.Extend(NBFormAppletPR, window.SiebelAppFacade.NBDefaultFormAppletPR)

      NBFormAppletPR.prototype.Init = function () {
        this.isOpenUI = true // Change according to your requirement

        if (this.isOpenUI) {
          window.SiebelAppFacade.NBFormAppletPR.superclass.Init.apply(this, arguments)
        } else {
          window.SiebelAppFacade.NBFormAppletPR.superclass.NBInit.apply(
            this,
            arguments
          )
          this.initializeNexus({ convertDates: true }) // should be before removing to read the required fields
          this.removeHtml()
        }
      }

      NBFormAppletPR.prototype.ShowUI = function () {
        if (this.isOpenUI) {
          window.SiebelAppFacade.NBFormAppletPR.superclass.ShowUI.apply(
            this,
            arguments
          )
        }
      }

      NBFormAppletPR.prototype.BindData = function (bRefresh) {
        if (this.isOpenUI) {
          window.SiebelAppFacade.NBFormAppletPR.superclass.BindData.apply(
            this,
            arguments
          )
        }
      }

      NBFormAppletPR.prototype.BindEvents = function () {
        if (this.isOpenUI) {
          window.SiebelAppFacade.NBFormAppletPR.superclass.BindEvents.apply(
            this,
            arguments
          )
        }
      }

      NBFormAppletPR.prototype.EndLife = function () {
        this.destroyNexus()
        window.SiebelAppFacade.NBFormAppletPR.superclass.EndLife.apply(this, arguments)
      }

      return NBFormAppletPR
    })()
    return 'SiebelAppFacade.NBFormAppletPR'
  })
}
