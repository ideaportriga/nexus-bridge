class N19popup { // eslint-disable-line no-unused-vars
  constructor(applet) {
    this.applet = applet;

    this.consts = SiebelJS.Dependency('SiebelApp.Constants');
    this.utils = SiebelJS.Dependency('SiebelApp.Utils');

    console.log(`${this.constructor.name} started...`); // eslint-disable-line no-console
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

  f(n) {
    let ret = n;
    if (ret.indexOf('.swe?') !== -1 && ret.indexOf(this.consts.get('SWE_SHOW_POPUP_STR')) === -1) {
      ret = this.utils.AppendArgsToURL(ret, this.consts.get('SWE_SHOW_POPUP_STR'), this.consts.get('SWE_NUMERIC_TRUE'));
    }
    return ret;
  }

  pmProcessNewPopup(ps, hide) {
    let u;
    let v = !1;

    const popupPM = SiebelApp.S_App.GetPopupPM();

    if (popupPM.Get('state') === this.consts.get('POPUP_STATE_VISIBLE')) {
      popupPM.SetProperty('prevPopups', popupPM.Get('currPopups'));
    }

    popupPM.SetProperty('isPopupPick', !1);
    popupPM.SetProperty('isPopupMVGAssoc', !1);
    popupPM.SetProperty('isPopupMVGSelected', !1);
    popupPM.SetProperty('isPopupAssoc', !1);
    popupPM.SetProperty('currPopups', []);

    const height = Number(ps.GetProperty(this.consts.get('SWE_POP_HEIGHT_STR'))) || 0;
    const width = Number(ps.GetProperty(this.consts.get('SWE_POP_WIDTH_STR'))) || 0;
    const isSiPopup = ps.GetProperty(this.consts.get('SWE_IS_SI_POPUP'));
    popupPM.SetProperty('isSIPopup', this.utils.IsTrue(isSiPopup));

    const fullPopup = ps.GetProperty(this.consts.get('SWE_FULL_POPUP_WINDOW_STR'));
    let url = ps.GetProperty('URL');
    const freePopup = ps.GetProperty(this.consts.get('SWE_FREE_POPUP_STR'));
    const o = ps.GetProperty(this.consts.get('SWE_LINK_TARGET_STR'));
    const left = parseInt(screen.availWidth / 2 - (width || 800) / 2, 10); // eslint-disable-line no-restricted-globals
    const top = parseInt(screen.availHeight / 2 - (height || 600) / 2, 10); // eslint-disable-line no-restricted-globals
    //    let p = 'width=' + (width || 800) + ',height=' + (height || 600) + ',left=' + c + ',top=' + h + ',screenX=' + c + ',screenY=' + h;
    let p = `width=${width || 800},height=${height || 600},left=${left},top=${top},screenX=${left},screenY=${top}`;

    if (fullPopup) {
      p += ',scrollbars=yes,resizable=yes,location=yes,toolbar=yes,menubar=yes,status=yes';
    } else {
      p += ',scrollbars=yes,resizable=yes';
    }

    if (popupPM.Get('state') === this.consts.get('POPUP_STATE_UNLOADED')) {
      if (!popupPM.GetRenderer()) {
        popupPM.Setup();
        v = !0;
      }
    }

    if (freePopup || fullPopup || (url && !url.match(/.swe\?/))) {
      popupPM.ExecuteMethod('StandAlonePopup', url, p, o);
      SiebelApp.S_App.uiStatus.Free();
      return !0;
    }

    if (popupPM.Get('state') === this.consts.get('POPUP_STATE_UNLOADED') && !v) {
      popupPM.Show();
    }
    if (url.indexOf('start.swe') === -1) {
      u = SiebelApp.S_App.GetPageURL().split('start.swe')[0] + url + this.consts.get('SWE_ARG_START') + this.f('');
    } else {
      url = this.f(url);
      u = SiebelApp.S_App.GetPageURL() + url.split('start.swe')[1];
    }

    const activeView = SiebelApp.S_App.GetActiveView();
    if (activeView) {
      const activeApplet = activeView.GetActiveApplet();
      if (activeApplet) {
        activeView.SetActiveAppletBeforePopup(activeApplet);
      }
    }

    // popupPM.ExecuteMethod('OpenPopup', u, height, width, !1, !1, !1);
    this.u(u, height, width, !1, !1, !1, hide);

    return !0;
  }

  u(url, height, width, i, s, o, hide) {
    try {
      const popupPM = SiebelApp.S_App.GetPopupPM();

      if (popupPM.Get('state') === this.consts.get('POPUP_STATE_VISIBLE')) {
        popupPM.SetProperty('isPrevPopupVisible', !0);
        popupPM.ExecuteMethod('SetPopupVisible', !1, !0);
      } else {
        popupPM.SetProperty('isPrevPopupVisible', !1);
      }

      height = height === undefined ? 0 : parseFloat(height); // eslint-disable-line no-param-reassign
      width = width === undefined ? 0 : parseFloat(width); // eslint-disable-line no-param-reassign

      if (height <= 0) {
        height = parseFloat(this.consts.get('DEFAULT_POPUP_HEIGHT')); // eslint-disable-line no-param-reassign
      }
      if (width <= 0) {
        width = parseFloat(this.consts.get('DEFAULT_POPUP_WIDTH')); // eslint-disable-line no-param-reassign
      }
      popupPM.SetProperty('noHide', !1);
      popupPM.SetProperty('height', height);
      popupPM.SetProperty('width', width);


      if (hide) {
        SiebelApp.S_App.GetPopupPM().AddProperty('state', 'visible'); // ????
        this.a();
      } else {
        popupPM.ExecuteMethod('SetPopupVisible', !0);
      }

      if (o === undefined || !o) {
        popupPM.SetProperty('url', url);
      } else {
        popupPM.SetProperty('content', url);
      }

      return !0;
    } catch (f) {
      return !1;
    }
  }

  a() { // called on the change the state - ORIGINAL PROCEDURE
    const popupPR = SiebelApp.S_App.GetPopupPM().GetRenderer();
    const e = popupPR.GetPM().Get('state');
    const i = popupPR.GetPM().Get('isCurrencyOpen');
    let s = !0;
    if (i) {
      s = !1;
    }
    const o = $('div[name=popup]'); // eslint-disable-line no-undef
    if (e === this.consts.get('POPUP_STATE_HIDDEN')) {
      o.dialog('close').parents('.ui-dialog').eq(0).removeClass('siebui-mvg-dialog');
      const u = o.find('textarea');
      const a = u.length;
      for (let f = 0; f < a; f += 1) {
        const l = CKEDITOR.instances[$(u[f]).attr('name')]; // eslint-disable-line no-undef
        if (l) {
          const c = $(l.element.$); // eslint-disable-line no-undef
          if (c && !c.data('pendingAction')) {
            l.destroy(!0);
          } else {
            c.data('pendingAction', 'destroy');
          }
        }
      }
      const p = SiebelApp.S_App.GetPopupPM();
      p.SetProperty('isPopupPick', null);
      p.SetProperty('PickAppletObject', null);
      p.SetProperty('baseParentAppletId', null);
      p.SetProperty('isPopupAssoc', null);
      p.SetProperty('AssocAppletObject', null);
      p.SetProperty('baseParentAppletId', null);
      p.SetProperty('isPopupMVGSelected', null);
      p.SetProperty('MVGSelectedAppletObject', null);
      p.SetProperty('baseParentAppletId', null);
      p.SetProperty('isPopupMVGAssoc', null);
      p.SetProperty('MVGAssocAppletObject', null);
      p.SetProperty('MVGAssocParentAppletObject', null);
      p.SetProperty('parentAppletId', null);
      p.SetProperty('baseParentAppletId', null);
      p.SetProperty('isPopupNonStandard', null);
      p.SetProperty('NonStandardAppletObject', null);
      o.children().remove().end().dialog('option', 'buttons', {})
        .parent()
        .find('div.ui-dialog-buttonset')
        .empty();
      popupPR.GetPM().SetProperty('isCurrencyOpen', !1);
    } else if (e === this.consts.get('POPUP_STATE_VISIBLE')) {
      $('div[name=popup]').data('InitDlg', !0);
      setTimeout(() => {
        $('div[name=popup]').removeData('InitDlg');
      }, 2);
      // $('div[name=popup]').dialog('open'); // to hide the dialog
      $('div[name=popup]').parents('div.ui-dialog').children('div.ui-dialog-titlebar').styleShow();
      $('div[name=popup]').dialog('option', 'height', 'auto')
        .dialog('option', 'width', 'auto')
        .dialog('option', 'resizable', s)
        .dialog('option', 'minWidth', Number(this.consts.get('DEFAULT_POPUP_WIDTH')))
        .dialog('option', 'minHeight', Number(this.consts.get('DEFAULT_POPUP_HEIGHT')));
      $('div[name=popup]').dialog('option', 'position', {
        my: 'center',
        at: 'center',
        of: window,
      });
      const d = popupPR.GetPM();
      let v;
      let m;
      $('.ui-widget-overlay').droppable({
        drop: (event, t) => {
          if (t.draggable && (t.draggable.is('tr.jqgrow') || t.draggable.is('.siebui-tile'))) {
            const n = t.draggable.attr('id');
            let r = !1;
            // if (n > 0) {
            //   var i = t.draggable.parent().parent().jqGrid('getRowData', n);
            // }
            const s1 = $(`#s_${d.Get('baseParentAppletId')}_div`);
            let o1;
            let u;
            if (s1.length > 0) {
              o1 = s1.offset().top + s1.height();
              u = s1.offset().left + s1.width();
            }
            if (s1.offset().left < event.originalEvent.clientX && event.originalEvent.clientX < u && s1.offset().top < event.originalEvent.clientY && event.originalEvent.clientY < o1) {
              if (d.Get('isPopupPick')) {
                v = d.Get('PickAppletObject');
              }
              v.GetPModel().ExecuteMethod('SetSelectionOnDragNDrop', n);
              r = v.GetPModel().ExecuteMethod('HandleDragNDropInPopup', 'PickRecord');
              if (d.Get('isPopupMVGAssoc')) {
                m = d.Get('MVGAssocParentAppletObject');
                if (!d.Get('ismultislectmode')) {
                  m.GetPModel().ExecuteMethod('SetSelectionOnDragNDrop', n);
                }
                const a = m.GetPModel().ExecuteMethod('HandleDragNDropInPopup', 'AddRecords');
                if (a) {
                  r = m.GetPModel().ExecuteMethod('HandleDragNDropInPopup', 'CloseApplet');
                }
              }
              if (d.Get('isPopupAssoc')) {
                v = d.Get('AssocAppletObject');
                if (!d.Get('ismultislectmode')) {
                  v.GetPModel().ExecuteMethod('SetSelectionOnDragNDrop', n);
                }
                r = v.GetPModel().ExecuteMethod('HandleDragNDropInPopup', 'AddRecord');
              }
              if (r) {
                t.draggable.detach();
                d.SetProperty('isPopupPick', !1);
                d.SetProperty('isPopupMVGAssoc', !1);
                d.SetProperty('isPopupMVGSelected', !1);
                d.SetProperty('isPopupAssoc', !1);
              } else {
                t.draggable.animate(t.draggable.data().origPosition, 'slow');
              }
            } else {
              t.draggable.animate(t.draggable.data().origPosition, 'slow');
            }
            d.SetProperty('ismultislectmode', !1);
          }
        },
      });
      this.h.call(this);
      SiebelApp.S_App.uiStatus.LocalBusy({
        mask: !0,
      });
    }
  }

  h() {
    const popupPR = SiebelApp.S_App.GetPopupPM().GetRenderer();
    const t = $('[name="popup"]'); // eslint-disable-line no-undef
    if (popupPR.GetPM().Get('currPopups') && popupPR.GetPM().Get('currPopups')[0]) {
      t.dialog('option', 'title', SiebelApp.S_App.LookupStringCache(popupPR.GetPM().Get('currPopups')[0].GetTitle()));
      if (this.utils.IsTrue(SiebelApp.S_App.IsAutoOn())) {
        t.parent('.ui-dialog').find('span.ui-dialog-title')
          .attr('ot', 'popup')
          .attr('rn', 'popup')
          .attr('un', `${popupPR.GetPM().Get('currPopups')[0].GetUIName()} popup`);
      }
    } else {
      const n = t.find('[title-preserved]');
      let r;
      if (n && n.length) {
        r = n.attr('title-preserved');
      } else {
        r = '';
      }
      t.dialog('option', 'title', HtmlDecode(r));
      if (!this.utils.IsEmpty(r)) {
        t.parents('div.ui-dialog').find('.ui-dialog-title').focus();
      }
    }
  }

  processNewPopup(ps, hide) {
    SiebelApp.S_App.SetShowNewPage(!0);
    SiebelApp.S_App.GetPopupPM().SetProperty('CanProcessLayout', !1);
    // SiebelApp.S_App.GetPopupPM().ExecuteMethod('ProcessNewPopup', ps);
    this.pmProcessNewPopup(ps, hide);
    return 'refreshpopup';
  }
}

export default N19popup;
