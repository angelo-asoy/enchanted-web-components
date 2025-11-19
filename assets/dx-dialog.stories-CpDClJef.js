import{E as h,x as d}from"./iframe-ybnrdH9j.js";import{n as c,t as C,l as _,D as b}from"./dx-ac-base-element-C-d1-0EW.js";import{l as g}from"./lodash-CR4q0RmQ.js";import"./dx-svg-icon-7SJQXAwr.js";import"./dx-button-CfBPH_tj.js";import{h as t}from"./cssClassEnums-ChRP0d8n.js";import{i as O}from"./localization-BgXZqBVD.js";import{K as m}from"./keyboardEventKeys-BnoN8uA3.js";import"./index-CePGat3U.js";import"./preload-helper-C1FmrZbK.js";import"./state-Bh1Vt1B2.js";import"./index-B5ETzRfW.js";var r=(i=>(i.XL="xl",i.LG="lg",i.MD="md",i.SM="sm",i.XS="xs",i.CHAT="chat",i))(r||{}),N=Object.defineProperty,P=Object.getOwnPropertyDescriptor,l=(i,e,a,o)=>{for(var s=o>1?void 0:o?P(e,a):e,p=i.length-1,T;p>=0;p--)(T=i[p])&&(s=(o?T(e,a,s):T(s))||s);return o&&s&&N(e,a,s),s};let n=class extends b{constructor(){super(...arguments),this.open=!1,this.size=r.XL,this.dialogTitle="",this.overrideTitle=!1,this.removeBorder=!1}connectedCallback(){super.connectedCallback(),this.dialogTitle===""&&(this.dialogTitle=this.getMessage("generic.label"))}disconnectedCallback(){super.disconnectedCallback()}async updated(e){e.has("open")&&this.open&&await this._performDialogFocusSequence()}async _performDialogFocusSequence(){var s;await this.updateComplete;const e=this.renderRoot.querySelector(`[part*="${this.getPaperPart()}"]`),a=e==null?void 0:e.querySelector('div[role="presentation"]');if(!e)return;let o=this.renderRoot.querySelector("#dialog-announce");o||(o=document.createElement("div"),o.id="dialog-announce",o.className="dx-dialog-live-region",o.setAttribute("role","status"),o.setAttribute("aria-live","polite"),o.setAttribute("aria-atomic","true"),(s=e.parentElement)==null||s.appendChild(o)),o.textContent=`${this.dialogTitle}, dialog`,e.setAttribute("role","dialog"),e.setAttribute("aria-label",this.dialogTitle),e.setAttribute("aria-modal","true"),a&&a.setAttribute("aria-hidden","true"),e.setAttribute("tabindex","-1"),e.focus(),setTimeout(()=>{this._cleanupDialogAttributes(e,a,o),setTimeout(()=>{this._focusFirstElement()},20)},100)}_cleanupDialogAttributes(e,a,o){e.removeAttribute("tabindex"),e.removeAttribute("aria-label"),e.removeAttribute("role"),a&&a.removeAttribute("aria-hidden"),o&&(o.textContent="")}_focusFirstElement(){const e=this.renderRoot.querySelector('dx-input-textfield, dx-button, button, input, [tabindex]:not([tabindex="-1"])');e&&("shadowRoot"in e&&e.shadowRoot?(e.shadowRoot.querySelector('input, button, [tabindex]:not([tabindex="-1"])')||e).focus():e.focus())}async refocusDialog(){this.open&&await this._performDialogFocusSequence()}handleClose(e){e.stopPropagation(),this.open=!1,this.dispatchEvent(new CustomEvent("dx-dialog-close",{bubbles:!0,composed:!0}))}handleCloseByEnterKey(e){(e.key===m.ENTER||e.key===m.SPACE)&&(e.stopPropagation(),this.handleClose(e))}getContainerPart(){switch(this.size){case r.XL:return t.CONTAINER_XL;case r.SM:return t.CONTAINER_SM;case r.MD:return t.CONTAINER_MD;case r.LG:return t.CONTAINER_LG;case r.CHAT:return t.CONTAINER_CHAT;default:return t.CONTAINER_XL}}getPaperPart(){switch(this.size){case r.XL:return t.PAPER_XL;case r.SM:return t.PAPER_SM;case r.MD:return t.PAPER_MD;case r.LG:return t.PAPER_LG;case r.CHAT:return t.PAPER_CHAT;default:return t.PAPER_XL}}getContentPart(){switch(this.size){case r.XL:return this.removeBorder?t.CONTENT_XL_NO_BORDER:t.CONTENT_XL;case r.SM:return t.CONTENT_SM;case r.MD:return t.CONTENT_MD;case r.LG:return t.CONTENT_LG;case r.CHAT:return t.CONTENT_CHAT;default:return t.CONTENT_XL}}getPaginationPart(){switch(this.size){case r.SM:return t.PAGINATION_SM;case r.MD:return t.PAGINATION_MD;case r.LG:return t.PAGINATION_LG;case r.XL:default:return t.PAGINATION_XL}}getActionPart(){return this.removeBorder?t.ACTION_NO_BORDER:this.size===r.CHAT?t.CHAT_ACTION:t.ACTION}render(){const e=this.size===r.CHAT;return this.open?d`
        <div role="presentation" part=${e?t.DIALOG_ROOT_CHAT:t.DIALOG_ROOT}>
          ${e?h:d`<div aria-hidden="true" part=${t.BACKDROP} @click=${g.debounce(this.handleClose,300)}></div>`}
          <div tabindex="-1" role="presentation" part=${this.getContainerPart()}>
            <div
              part=${this.getPaperPart()}
              aria-modal="true"
            >
              <div role="presentation" aria-hidden="true">
                <div role="presentation">
                  <div ?part=${this.overrideTitle?t.TITLE:""}>
                    ${this.overrideTitle?d`<slot name="title"></slot>`:d`
                        <div part=${t.TITLE_ROOT}>
                          <p part=${O()?t.TITLE_TEXT:t.TITLE_TEXT_RTL}>
                            ${this.dialogTitle}
                          </p>
                          <div part=${t.ICON_ROOT}>
                            <icon-close
                              part=${t.ICON_CLOSE}
                              color="rgba(0, 0, 0, 0.60)"
                              size="16"
                              @click=${g.debounce(this.handleClose,300)}
                              @keydown=${this.handleCloseByEnterKey}
                              tabindex="0"
                            >
                            </icon-close>
                          </div>
                        </div>`}
                  </div>
                  <div part=${this.getContentPart()}>
                    <slot name="content"></slot>
                  </div>
                  <div part=${this.getPaginationPart()}>
                    <slot name="pagination"></slot>
                  </div>
                  <div part=${this.getActionPart()}>
                    <slot name="footer"></slot>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `:h}};l([c({type:Boolean,reflect:!0})],n.prototype,"open",2);l([c({type:String})],n.prototype,"size",2);l([c({type:String})],n.prototype,"dialogTitle",2);l([c({type:Boolean})],n.prototype,"overrideTitle",2);l([c({type:Boolean})],n.prototype,"removeBorder",2);n=l([C("dx-dialog"),_()],n);const z={title:"Feedback/dx-dialog",component:"dx-dialog",tags:["autodocs"],argTypes:{size:{control:{type:"radio"},options:[r.XL,r.LG,r.MD,r.SM,r.XS],description:"Dialog size",defaultValue:r.XL},open:{control:"boolean",description:"Open",defaultValue:!0},overrideTitle:{control:"boolean",description:"Override title with slot",defaultValue:!1},dialogTitle:{control:"text",description:"Dialog title",defaultValue:"Dialog Title"}},args:{size:r.XL,open:!0,overrideTitle:!1,dialogTitle:"Dialog Title"},parameters:{docs:{description:{component:"Dialog component with controls for size and boolean properties."}}}},u={render:i=>d`
      <dx-dialog
        .size=${i.size}
        ?open=${i.open}
        ?overrideTitle=${i.overrideTitle}
        .dialogTitle=${i.dialogTitle}
      >
        <span slot="title">Custom Title Slot</span>
        <div slot="content">Dialog content goes here.</div>
        <div slot="footer">Footer actions here.</div>
      </dx-dialog>
    `,name:"DxDialog"};var v,f,A;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <dx-dialog
        .size=\${args.size}
        ?open=\${args.open}
        ?overrideTitle=\${args.overrideTitle}
        .dialogTitle=\${args.dialogTitle}
      >
        <span slot="title">Custom Title Slot</span>
        <div slot="content">Dialog content goes here.</div>
        <div slot="footer">Footer actions here.</div>
      </dx-dialog>
    \`;
  },
  name: 'DxDialog'
}`,...(A=(f=u.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};const B=["DxDialog"];export{u as DxDialog,B as __namedExportsOrder,z as default};
