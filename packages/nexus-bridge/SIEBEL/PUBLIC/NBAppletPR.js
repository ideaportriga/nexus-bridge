/* eslint-disable prefer-rest-params, prettier/prettier */
if (typeof window.SiebelAppFacade.NBAppletPR === 'undefined') {
  window.SiebelJS.Namespace('SiebelAppFacade.NBAppletPR')
  window.define(
    'siebel/custom/NBAppletPR',
    ['siebel/custom/NBDefaultAppletPR'],
    function () {
      window.SiebelAppFacade.NBAppletPR = (function () {
        function NBAppletPR(pm) {
          window.SiebelAppFacade.NBAppletPR.superclass.constructor.apply(
            this,
            arguments
          )
        }

        window.SiebelJS.Extend(
          NBAppletPR,
          window.SiebelAppFacade.NBDefaultAppletPR
        )

        NBAppletPR.prototype.Init = function () {
          window.SiebelAppFacade.NBAppletPR.superclass.Init.apply(
            this,
            arguments
          )
          this.initializeNexus({ convertDates: true }) // should be before removing to read the required fields
          this.removeHtml()
        }

        NBAppletPR.prototype.EndLife = function () {
          this.destroyNexus()
          window.SiebelAppFacade.NBAppletPR.superclass.EndLife.apply(
            this,
            arguments
          )
        }

        return NBAppletPR
      })()
      return 'SiebelAppFacade.NBAppletPR'
    }
  )
}
