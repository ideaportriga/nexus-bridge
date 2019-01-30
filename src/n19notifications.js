export default class N19notifications {
  constructor(pm, consts, bcId) {
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
      if (bcId === propSet.GetProperty('bc')) {
        receivedNotifications.push('SWE_PROP_BC_NOTI_STATE_CHANGED');
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
          for (let i = 0; i < this.subscribers.length; i += 1) {
            // we assume that the function does not throw an error
            this.subscribers[i].func();
          }
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
    for (let i = 0; i < this.subscribers.length; i += 1) {
      if (subToken === this.subscribers[i].token) {
        return this.subscribers.splice(i, 1);
      }
    }
    return false;
  }
}
