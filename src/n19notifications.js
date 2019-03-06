export default class N19notifications {
  constructor(pm, consts, bcId, fieldToControlMap) {
    let receivedNotifications = [];
    this.token = 0;
    this.subscribers = [];

    pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_BEGIN'), (propSet) => {
      if (bcId === propSet.GetProperty('bc')) {
        receivedNotifications = [];
      }
    });

    pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_NEW_ACTIVE_ROW'), (propSet) => {
      if (bcId === propSet.GetProperty('bc')) {
        receivedNotifications.push('SWE_PROP_BC_NOTI_NEW_ACTIVE_ROW');
      }
    });

    pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_STATE_CHANGED'), (propSet) => {
      const states = ['cp', 'n'];
      if (bcId === propSet.GetProperty('bc')) {
        if (!states.includes(propSet.GetProperty('state'))) {
          receivedNotifications.push('SWE_PROP_BC_NOTI_STATE_CHANGED');
        }
      }
    });

    // or SWE_PROP_BC_NOTI_NEW_FIELD_DATA?
    pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_NEW_DATA_WS'), (propSet) => {
      if (bcId === propSet.GetProperty('bc')) {
        const fieldName = propSet.GetProperty(consts.get('SWE_PROP_NOTI_FIELD'));
        const control = fieldToControlMap[fieldName];
        if (control && control.uiType !== consts.get('SWE_CTRL_MVG')) {
          receivedNotifications.push('SWE_PROP_BC_NOTI_NEW_DATA_WS');
        }
      }
    });

    pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_DELETE_RECORD'), (propSet) => {
      if (bcId === propSet.GetProperty('bc')) {
        receivedNotifications.push('SWE_PROP_BC_NOTI_DELETE_RECORD');
      }
    });

    pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_NEW_RECORD'), (propSet) => {
      if (bcId === propSet.GetProperty('bc')) {
        receivedNotifications.push('SWE_PROP_BC_NOTI_NEW_RECORD');
      }
    });

    pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_END'), (propSet) => {
      if (bcId === propSet.GetProperty('bc')) {
        if (receivedNotifications.length > 0) {
          // we assume that the function does not throw an error, so no error handling here
          this.subscribers.forEach(el => el.func());
        }
      }
    });
  }

  subscribe(func) {
    if (typeof func !== 'function') {
      throw new Error('func is not a function');
    }
    this.token += 1;
    this.subscribers.push({ token: this.token, func });
    return this.token;
  }

  unsubscribe(subToken) {
    for (let i = 0, len = this.subscribers.length; i < len; i += 1) {
      if (subToken === this.subscribers[i].token) {
        return this.subscribers.splice(i, 1);
      }
    }
    return false;
  }
}
