class N19popup { // eslint-disable-line no-unused-vars
  constructor(applet) {
    this.applet = applet;

    this.consts = SiebelJS.Dependency('SiebelApp.Constants');
    this.utils = SiebelJS.Dependency('SiebelApp.Utils');

    console.log(`${this.constructor.name} started...`); // eslint-disable-line no-console
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
