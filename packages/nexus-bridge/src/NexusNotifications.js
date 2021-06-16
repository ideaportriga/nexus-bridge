export default class NexusNotifications {
  constructor({ pm, consts, fieldToControlMap, debug }) {
    let acceptedNotifications = []
    this.skippedNotifications = []
    this.token = 0
    this.subscribers = []
    this.debug = debug

    pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_BEGIN'), () => {
      acceptedNotifications = []
      this.skippedNotifications = []
    })

    pm.AttachNotificationHandler(
      consts.get('SWE_PROP_BC_NOTI_NEW_ACTIVE_ROW'),
      (propSet) => {
        acceptedNotifications.push({
          type: 'SWE_PROP_BC_NOTI_NEW_ACTIVE_ROW',
          propSet
        })
      }
    )

    pm.AttachNotificationHandler(
      consts.get('SWE_PROP_BC_NOTI_STATE_CHANGED'),
      (propSet) => {
        const states = ['cp', 'n']
        const obj = {
          type: 'SWE_PROP_BC_NOTI_STATE_CHANGED',
          propSet
        }
        if (!states.includes(propSet.GetProperty('state'))) {
          return acceptedNotifications.push(obj)
        }
        this.skippedNotifications.push(obj)
      }
    )

    // or SWE_PROP_BC_NOTI_NEW_FIELD_DATA?
    pm.AttachNotificationHandler(
      consts.get('SWE_PROP_BC_NOTI_NEW_DATA_WS'),
      (propSet) => {
        const fieldName = propSet.GetProperty(consts.get('SWE_PROP_NOTI_FIELD'))
        const control = fieldToControlMap[fieldName]
        const obj = {
          type: 'SWE_PROP_BC_NOTI_NEW_DATA_WS',
          propSet
        }
        if (
          control &&
          control.uiType !== consts.get('SWE_CTRL_MVG')
          // && control.uiType !== consts.get('SWE_CTRL_PICK')
        ) {
          return acceptedNotifications.push(obj)
        }
        this.skippedNotifications.push(obj)
      }
    )

    pm.AttachNotificationHandler(
      consts.get('SWE_PROP_BC_NOTI_DELETE_RECORD'),
      (propSet) => {
        acceptedNotifications.push({
          type: 'SWE_PROP_BC_NOTI_DELETE_RECORD',
          propSet
        })
      }
    )

    pm.AttachNotificationHandler(
      consts.get('SWE_PROP_BC_NOTI_NEW_RECORD'),
      (propSet) => {
        acceptedNotifications.push({
          type: 'SWE_PROP_BC_NOTI_NEW_RECORD',
          propSet
        })
      }
    )

    pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_END'), () => {
      if (acceptedNotifications.length > 0) {
        if (this.debug) {
          console.log('[NB] acceptedNotifications', acceptedNotifications)
          console.log('[NB] skippedNotifications', this.skippedNotifications)
        }
        // we assume that the function does not throw an error, so no error handling here
        this._invokeSubscriptions()
      }
    })

    if (debug) {
      this._attachDebugNotifications(pm, consts)
    }
  }

  _invokeSubscriptions() {
    this.subscribers.forEach((el) => el.func())
  }

  subscribe(func) {
    if (typeof func !== 'function') {
      throw new Error('[NB] func is not a function')
    }
    const functionName = func.name
    if (functionName) {
      // named function, unsubscrie first, and only then subscribe
      this.unsubscribe(functionName)
      this.subscribers.push({ token: functionName, func })
      return functionName
    }
    // function is anonymous, just subscribe
    this.token += 1
    this.subscribers.push({ token: this.token, func })
    return this.token
  }

  subIndexOf(subToken) {
    return this.subscribers.findIndex((el) => el.token === subToken)
  }

  unsubscribe(subToken) {
    const i = this.subIndexOf(subToken)
    if (i > -1) {
      this.subscribers.splice(i, 1)
    }
    return i
  }

  _attachDebugNotifications(pm, consts) {
    [
      'SWE_NOTIFY_PAGE_REFRESH',
      'SWE_PROP_BC_NEW_ACTIVE_FIELD',
      'SWE_PROP_BC_NOTI_BEGIN_QUERY',
      'SWE_PROP_BC_NOTI_CHANGE_SELECTION',
      'SWE_PROP_BC_NOTI_DELETE_WORKSET',
      'SWE_PROP_BC_NOTI_END_QUERY',
      'SWE_PROP_BC_NOTI_EXECUTE',
      'SWE_PROP_BC_NOTI_GENERIC',
      'SWE_PROP_BC_NOTI_INSERT_WORKSET',
      'SWE_PROP_BC_NOTI_INSERT_WORKSET_FIELD_VALUES',
      'SWE_PROP_BC_NOTI_LONG_OPERATION_PROCESS',
      'SWE_PROP_BC_NOTI_NEW_DATA',
      'SWE_PROP_BC_NOTI_NEW_FIELD_DATA',
      'SWE_PROP_BC_NOTI_NEW_FIELD_LIST',
      'SWE_PROP_BC_NOTI_NEW_FIELD_QUERYSPEC',
      'SWE_PROP_BC_NOTI_NEW_PRIMARY',
      'SWE_PROP_BC_NOTI_NEW_QUERYSPEC',
      'SWE_PROP_BC_NOTI_NEW_RECORD_DATA',
      'SWE_PROP_BC_NOTI_NEW_RECORD_DATA_WS',
      'SWE_PROP_BC_NOTI_NEW_RECORD_SCROLL_DATA',
      'SWE_PROP_BC_NOTI_NEW_SELECTION',
      'SWE_PROP_BC_NOTI_PAGE_REFRESH',
      'SWE_PROP_BC_NOTI_SCROLL_AMOUNT',
      'SWE_PROP_BC_NOTI_SELECTION_MODE_CHANGE',
      'SWE_PROP_NOTI_SELECTED',
      'SWE_PROP_IS_IN_QUERY',
      'SWE_NOTIFY_TOTALS_CHANGED',
      'SWE_PROP_BC_NOTI_ACTIVE_ROW'
    ].forEach((type) => {
      pm.AttachNotificationHandler(consts.get(type), (propSet) => {
        this.skippedNotifications.push({
          type,
          propSet
        })
      })
    })
  }
}
