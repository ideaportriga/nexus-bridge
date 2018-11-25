class N19test { // eslint-disable-line no-unused-vars
  constructor(pm, applet) {
    this.pm = pm;
    this.applet = applet;
    console.log('N19test created', this.pm, this.applet); // eslint-disable-line no-console
  }

  M(e, n, r, _self) {
    const ai = {};
    const s = this.GetActiveControl();
    const o = this.GetView() ? this.GetView().SetActiveApplet(this) : this.SetAppletActive(!0, this);
    let u = !0;
    if (o && s) {
      const controls = this.GetControls();
      for (const c in controls) { // eslint-disable-line no-restricted-syntax
        if (Object.prototype.hasOwnProperty.call(controls, c)) {
          const control = controls[c];
          if (control === s) {
            switch (control.GetUIType()) {
              case consts.get('SWE_CTRL_COMBOBOX'):
                this.FieldDropdown(e);
                break;
              case consts.get('SWE_CTRL_CURRENCY_CALC'):
                control.ShowPopup();
                break;
              case consts.get('SWE_CTRL_CALC'):
              case consts.get('SWE_CTRL_DATE_PICK'):
              case consts.get('SWE_CTRL_DATE_TIME_PICK'):
              case consts.get('SWE_CTRL_DATE_TZ_PICK'):
                this.ShowPopup(control);
                break;
              case consts.get('SWE_CTRL_TEXT'):
                if (control.GetPopupType() !== consts.get('SWE_CTRL_DETAIL')) {
                  break;
                }
              case consts.get('SWE_CTRL_MVG'): // eslint-disable-line no-fallthrough
              case consts.get('SWE_CTRL_PICK'):
              case consts.get('SWE_CTRL_EFFDAT'):
                ai.async = !0;
                ai.selfbusy = !0;
                SiebelApp.S_App.uiStatus.Busy({
                  mask: !0,
                });
                ai.cb = () => {
                  this.FireInvokeMethod(n, r);
                  SiebelApp.S_App.uiStatus.Free();
                };
                _self.FieldPopup(ai);
                u = !1;
                break;
              default:
                break;
            }
          }
        }
      }
    }
    return u;
  }

  FieldPopup(ai) {
    const ps = SiebelApp.S_App.NewPropertySet();
    const activeControl = this.applet.GetActiveControl();
    if (!activeControl) {
      return;
    }
    const height = activeControl.GetHeight();
    const width = activeControl.GetWidth();
    const inputName = activeControl.GetInputName();
    ps.SetProperty(consts.get('SWE_FIELD_STR'), inputName);
    ps.SetProperty(consts.get('SWE_METHOD_STR'), 'EditField');
    ps.SetProperty(consts.get('SWE_SHOW_POPUP_STR'), 'true');
    ps.SetProperty(consts.get('SWE_HEIGHT_STR'), height);
    ps.SetProperty(consts.get('SWE_WIDTH_STR'), width);
    ps.SetProperty('SWECSP', 'false');
    // this.applet.InvokeMethod('EditField', ps, ai);
    this.editField(ps, ai);
  }

  editField(r, ai) {
    const n = 'EditField';
    // const r = ps;
    const i = ai;
    const l = r.Clone();
    if (!this.applet.FirePreInvokeMethod(n, l)) {
      SiebelApp.S_App.uiStatus.Free();
      return !1;
    }
    if (this.applet.ConfirmMethod(n) === !1) {
      SiebelApp.S_App.uiStatus.Free();
      return false;
    }
    this.applet.CollectFieldValues(l);
    let g;
    const T = {};
    T.scope = this.applet;
    T.args = [];
    T.args.push(n);
    T.args.push(l);
    T.async = typeof i.async === 'boolean' ? i.async : i;
    T.target = i.target;
    T.selfbusy = i.selfbusy || !1;
    T.mask = i.mask || !1;
    T.cb = (...args) => {
      const e = Array.prototype.slice.call(args);
      const r1 = SiebelApp.S_App.ErrorObject.GetErrorSuppressState();
      g = this.applet.PostExecute.call(this, ...args);
      e.push(g);
      i.cb.apply(i.scope || null, e);
      if (!r1 || n === consts.get('SWE_RPC_PROP_STATUS_ERROR')) {
        SiebelApp.S_App.ErrorObject.SetErrorSuppressState(!0);
        this.ProcessError();
      }
      if (g && i.methodName && i.psInputArgs) {
        this.FireInvokeMethod(i.methodName, i.psInputArgs);
      }
    };
    const ps = SiebelApp.S_App.NewPropertySet();
    this.applet.CallServerApplet(n, l, ps, T);
    return g;
  }

  // callServerApplet () {

  // }

  editPopup() {
    //  this.applet.InvokeMethod('EditPopup', null, false);

    const methodName = 'EditPopup';
    const psInput = SiebelApp.S_App.NewPropertySet();
    const psInputCloned = psInput.Clone();
    this.applet.SetCancelableRPCInfo(methodName, psInputCloned);
    if (!this.applet.FirePreInvokeMethod(methodName, psInputCloned)) {
      return false;
    }
    if (!this.applet.ConfirmMethod(methodName)) {
      return false;
    }
    if (methodName === 'EditPopup') {
      if (this.M.call(this.applet, false, methodName, psInput, this)) {
        this.applet.FireInvokeMethod(methodName, psInput);
        return true;
      }
    }
    let g;
    const T = {};
    T.scope = this.applet;
    T.args = [];
    T.args.push(methodName);
    T.args.push(psInputCloned);
    T.async = false;
    T.selfbusy = false;
    T.mask = false;
    T.cb = (...args) => {
      const e = Array.prototype.slice.call(args);
      const r = SiebelApp.S_App.ErrorObject.GetErrorSuppressState();
      g = this.applet.PostExecute.call(this.applet, ...args);
      e.push(g);
      if (!r) {
        SiebelApp.S_App.ErrorObject.SetErrorSuppressState(!0);
        this.ProcessError();
      }
    };
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', this);
    // this.applet.CallServerApplet(methodName, psInputCloned, SiebelApp.S_App.NewPropertySet(), T);
    return g;
  }
}

export default N19test;
