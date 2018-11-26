class N19test { // eslint-disable-line no-unused-vars
  constructor(pm, applet) {
    this.pm = pm;
    this.applet = applet;

    this.consts = SiebelJS.Dependency('SiebelApp.Constants');
    this.utils = SiebelJS.Dependency('SiebelApp.Utils');

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
              case _self.consts.get('SWE_CTRL_COMBOBOX'):
                this.FieldDropdown(e);
                break;
              case _self.consts.get('SWE_CTRL_CURRENCY_CALC'):
                control.ShowPopup();
                break;
              case _self.consts.get('SWE_CTRL_CALC'):
              case _self.consts.get('SWE_CTRL_DATE_PICK'):
              case _self.consts.get('SWE_CTRL_DATE_TIME_PICK'):
              case _self.consts.get('SWE_CTRL_DATE_TZ_PICK'):
                this.ShowPopup(control);
                break;
              case _self.consts.get('SWE_CTRL_TEXT'):
                if (control.GetPopupType() !== this.consts.get('SWE_CTRL_DETAIL')) {
                  break;
                }
              case _self.consts.get('SWE_CTRL_MVG'): // eslint-disable-line no-fallthrough
              case _self.consts.get('SWE_CTRL_PICK'):
              case _self.consts.get('SWE_CTRL_EFFDAT'):
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
    ps.SetProperty(this.consts.get('SWE_FIELD_STR'), inputName);
    ps.SetProperty(this.consts.get('SWE_METHOD_STR'), 'EditField');
    ps.SetProperty(this.consts.get('SWE_SHOW_POPUP_STR'), 'true');
    ps.SetProperty(this.consts.get('SWE_HEIGHT_STR'), height);
    ps.SetProperty(this.consts.get('SWE_WIDTH_STR'), width);
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
      if (!r1 || n === this.consts.get('SWE_RPC_PROP_STATUS_ERROR')) {
        SiebelApp.S_App.ErrorObject.SetErrorSuppressState(!0);
        this.ProcessError();
      }
      if (g && i.methodName && i.psInputArgs) {
        this.FireInvokeMethod(i.methodName, i.psInputArgs);
      }
    };
    const ps = SiebelApp.S_App.NewPropertySet();
    // this.applet.CallServerApplet(n, l, ps, T);
    this.callServerAppletEditField(l, ps, T);
    return g;
  }

  callServerAppletEditField(psInput, psOutput, ai) {
    const n = 'EditField';
    const ps = psInput.Clone();
    ps.SetProperty(this.consts.get('SWE_CMD_ARG'), this.consts.get('SWE_CMD_INVOKE_METHOD_STR'));
    if (!this.utils.IsEmpty(this.applet.GetView())) {
      ps.SetProperty(this.consts.get('SWE_VIEW_ID_ARG'), this.applet.GetView().GetBusObj().GetZone());
    }
    ps.SetProperty(this.consts.get('SWE_VIEW_ARG'), this.applet.GetView().GetName());
    if (ps.GetProperty(this.consts.get('SWE_APPLET_STR')) === undefined || ps.GetProperty(this.consts.get('SWE_APPLET_STR')) === null) {
      ps.SetProperty(this.consts.get('SWE_APPLET_STR'), this.applet.GetName());
      ps.SetProperty(this.consts.get('SWE_METHOD_STR'), n);
    }
    let a;
    if (this.applet.GetBusComp()) {
      a = this.applet.GetBusComp().GetIdValue();
      ps.SetProperty(this.consts.get('SWE_ROW_ID_STR'), a);
    }
    if (a !== '') {
      ps.SetProperty(this.consts.get('SWE_REQ_ROW_ID_STR'), '1');
    } else {
      ps.SetProperty(this.consts.get('SWE_REQ_ROW_ID_STR'), '0');
    }
    if (this.applet.GetBusComp()) {
      this.applet.GetRowIds(ps);
    }
    if (ps.GetProperty(this.consts.get('SWE_ROW_IDS_STR')) === undefined || ps.GetProperty(this.consts.get('SWE_ROW_IDS_STR') === null)) {
      this.GetRowIds(ps);
    }
    if (ps.GetProperty(this.consts.get('SWE_ACTIVE_APPLET_STR')) === undefined || ps.GetProperty(this.consts.get('SWE_ACTIVE_APPLET_STR') === null)) {
      ps.SetProperty(this.consts.get('SWE_ACTIVE_APPLET_STR'), this.applet.GetName());
    }
    if (ps.GetProperty(this.consts.get('SWE_NEED_CONTEXT_STR')) === undefined || ps.GetProperty(this.consts.get('SWE_NEED_CONTEXT_STR') === null)) {
      ps.SetProperty(this.consts.get('SWE_NEED_CONTEXT_STR'), 'true');
      ps.SetProperty(this.consts.get('SWE_COUNT_STR'), SiebelApp.S_App.GetSWEReqCount());
    }
    if (this.applet.GetPopBookMark()) {
      ps.SetProperty(this.consts.get('SWE_POPUP_VECTOR_STR'), this.applet.GetPopBookMark());
    }
    ps.SetProperty(this.consts.get('SWE_JS_EXTRA_INFO'), 'false');
    SiebelApp.S_App.OfflineCallMethod('SetNewRecord', this.applet, ps);
    // SiebelApp.S_App.CallServer(ps, psOutput, o, ai); // o was true
    this.callServerEditRecord(ps, psOutput, ai, this);
  }

  getFilesAndDelegateResponseEditRecord(n, r) {
    const i = new $.Deferred(); // eslint-disable-line no-undef
    let s = null;
    const o = this.consts.get('SWE_PST_CLIENT_DESCRIPTOR_INFO');
    const u = SiebelApp.S_App.NewPropertySet();
    u.DecodeFromString(n);
    let a = u.GetChildByType(o);
    if (a !== null) {
      console.log(a);
      // const f = this.utils.PrepareModuleInfo(u);
      // if (f.length > 0) {
      //   const l = SiebelApp.S_App;
      //   require(f, () => { // eslint-disable-line global-require, import/no-dynamic-require
      //     try {
      //       s = l.DelegateResponse(u, r);
      //     } catch (e) {
      //       SiebelJS.Log(e);
      //     }
      //     a = null;
      //     s.done(() => {
      //       i.resolve();
      //     });
      //   });
      // } else {
      //   s = SiebelApp.S_App.DelegateResponse(u, r);
      //   a = null;
      //   s.done(() => {
      //     i.resolve();
      //   });
      // }
    } else {
      s = SiebelApp.S_App.DelegateResponse(u, r);
      // s = this.DelegateResponseEditRecord(u, r)
      a = null;
      s.done(() => {
        i.resolve();
      });
    }
    return i.promise();
  }

  processResponseEditRecord(e, t) {
    // return SiebelApp.S_App.GetFilesAndDelegateResponse(e, t);
    return this.getFilesAndDelegateResponseEditRecord(e, t);
  }

  onSuccessCallServerEditRecord(t, n, r) {
    const i = this.lp;
    const s = this.outputPS;
    const o = this.scope;
    let u = this.nPR;
    const a = new $.Deferred(); // eslint-disable-line no-undef
    if (u === !0 && r && typeof r.getResponseHeader === 'function' && r.status !== 204) {
      if (r.getResponseHeader('swerpc') === null) {
        const f = window.location.href;
        return f.indexOf('SWECmd=Login') === -1 ? (window.location.reload(), !0) : (window.location.replace(SiebelApp.S_App.GetPageURL()), !0);
      }
      if (r.getResponseHeader('swerpc').toLowerCase() != 'true') { // eslint-disable-line eqeqeq
        window.location.replace(SiebelApp.S_App.GetPageURL());
        return !0;
      }
    }
    if (i.HB) {
      if (t === 'OK') {
        u = !1;
        SiebelApp.S_App.uiStatus.Free();
      }
    } else {
      console.log('CALLING THE JT >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
      // jt.call(o);
    }
    if (!SiebelJS.Dependency('SiebelApp.Utils').IsEmpty(t)) {
      if (u === !0) {
        const l = (i && i.scope) || this;
        console.log(l);
        // const c = o.ProcessResponse(t, l);
        const c = this.n19test.processResponseEditRecord(t, l);
        console.log(c);
        c.done(() => {
          SiebelApp.S_App.ProcessError();
          a.resolve();
        });
      } else {
        a.resolve();
      }
      if (i.opdecode === !0 && (s.DecodeFromString(t))) {
        if (SiebelApp.S_App.OUIPerfReporter) {
          SiebelApp.S_App.OUIPerfReporter.RefreshData(s);
        }
      }
      if (typeof i.cb === 'function') {
        i.args = i.args || [];
        if (i.opdecode === true) {
          i.args.push(s);
        } else {
          i.args.push(t);
        }
        i.cb.apply(i.scope || null, i.args);
      } else if ((typeof i.scope !== 'undefined') && (typeof i.scope.PostExecute === 'function')) {
        i.args = i.args || [];
        i.args.push(s);
        i.scope.PostExecute.apply(i.scope || null, i.args);
      }
    } else {
      a.resolve();
    }
    a.done(() => {
      if ((i && !i.selfbusy) || !i) {
        o.uiStatus.Free();
      }
    });
    return a.promise();
  }

  callServerEditRecord(ps, psOutput, ai, _self) {
    // eslint-disable-next-line no-param-reassign
    ai = $.extend({ // eslint-disable-line no-undef
      selfbusy: !1,
      mask: !0,
      async: !1,
      opdecode: !0,
    }, ai);
    if (!ai.selfbusy) {
      const u = {};
      if (ai.target) {
        u.target = ai.target;
      }
      if (ai.mask) {
        u.mask = ai.mask;
      }
      this.uiStatus.Busy(u);
    }
    psOutput = psOutput || SiebelApp.S_App.NewPropertySet(); // eslint-disable-line no-param-reassign

    if (String(ps.GetProperty(this.consts.get('SWSE_CMD_STR'))) !== this.consts.get('SWSE_CANCEL_QUERY')) {
      SiebelApp.S_App.SetDefaultArgs(ps);
    }
    let l = this.utils.EncodeToQueryString(ps);
    const c = new Date();
    let h = null;
    l = `${l}&${this.consts.get('SWE_TIME_STAMP')}=${c.getTime()}`;
    SiebelApp.S_App.SetInputPS(ps);
    h = {
      url: SiebelApp.S_App.GetPageURL(),
      data: l.split(' ').join('%20'),
      type: 'POST',
      async: ai.async,
      contentType: 'application/x-www-form-urlencoded',
      // successfncallback: SiebelApp.S_App.OnSuccessCallServer,
      successfncallback: this.onSuccessCallServerEditRecord,
      // errfncb: Ft, // ????????????????????????????????????? Error Handling
      context: {
        scope: SiebelApp.S_App,
        lp: ai,
        outputPS: psOutput,
        nPR: true,
        n19test: _self,
      },
    };
    SiebelApp.AjaxRequestMgr.Ajax(h);
    h = null;
  }

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
