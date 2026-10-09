/* Three independent views, shared controls, no network or account writes. */
(()=>{
 'use strict';
 const root=document.getElementById('app'),{icon,mark}=MewBrand;
 const sections=['home','features','contact'];
 const state={lang:readLanguage(),section:0,feature:0,featureScene:0,featurePane:0,projectPhase:0,
  cat:0,catMotion:'idle',homePane:0,
  paused:matchMedia('(prefers-reduced-motion: reduce)').matches,modal:null,
  guideMode:0,guideTab:0,guideStep:0,protocol:0,guidePane:0,guideDemo:0,demoPlaying:false,legalIndex:0,faq:0};
 let returnFocus=null,returnSelector=null,returnModal=null;
 function readLanguage(){try{return localStorage.getItem('mewment-language')==='en'?'en':'zh';}catch{return 'zh';}}
 const experience=()=>MewExperience[state.lang];
 const copy=()=>({...MewWebsiteCopy[state.lang],nav:experience().nav});
 const escape=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 function applyHash(){const [page,feature]=location.hash.slice(1).split('/');state.section=Math.max(0,sections.indexOf(page));if(page==='api-guide'){state.section=1;state.feature=4;}if(page==='features'&&feature){const n=experience().features.findIndex(f=>f.id===feature);if(n>=0)state.feature=n;}}
 function render(focus){
  const c=copy();document.documentElement.lang=state.lang==='zh'?'zh-CN':'en';document.documentElement.dataset.motion=state.paused?'paused':'running';document.title=c.title;document.querySelector('meta[name="description"]').content=c.description;
  root.innerHTML=`<a class="skip-link" href="#main">${c.skip}</a><div class="official-shell"><header class="official-header"><button class="wordmark" data-section="0" aria-label="${c.nav[0]}"><img src="Resource/media/mark.svg" alt="" width="42" height="42"><span>MewMent<span class="brand-dot">.</span></span></button><nav class="primary-nav" aria-label="${state.lang==='zh'?'官网主导航':'Main navigation'}">${c.nav.map((label,i)=>`<button data-section="${i}" aria-current="${state.section===i?'page':'false'}">${label}</button>`).join('')}</nav><div class="header-tools"><button class="language-switch" data-action="language" aria-label="${c.language}"><span class="${state.lang==='zh'?'active':''}">中</span><i>/</i><span class="${state.lang==='en'?'active':''}">EN</span></button><button class="motion-switch" data-action="motion" aria-label="${state.paused?c.resume:c.pause}" aria-pressed="${state.paused}" title="${state.paused?c.resume:c.pause}">${icon(state.paused?'play':'pause')}</button></div></header><main id="main" class="official-main section-${state.section}" tabindex="-1">${[MewHome.render,MewFeatures.render,MewCommerce.contact][state.section]()}</main><footer class="official-footer"><span>${c.footer}</span><div><button data-action="diary">${c.diary}</button><button data-action="terms">${c.terms}</button><button data-action="privacy">${c.privacy}</button></div></footer></div><div id="modal-root"></div>`;
  MewDemo.sync();MewFeatures.mediaSync();MewHomePreview.sync();if(state.modal)mountDialog(focus);else if(focus)document.querySelector(focus)?.focus({preventScroll:true});
 }
 function refresh(focus){if(state.modal)mountDialog(focus);else render(focus);}
 function navigate(section,force=false){
  state.section=section;if(section===0)state.homePane=0;
  const hash=sections[section]+(section===1?'/'+experience().features[state.feature].id:'');
  try{history.replaceState(null,'','#'+hash);}catch{location.hash=hash;}render(force?'[data-feature-select],.feature-sidebar [aria-current="page"]':`.primary-nav [data-section="${section}"]`);
 }
 function openDialog(kind){
  if(!state.modal){returnFocus=document.activeElement;const d=returnFocus?.dataset||{};const key=['action','setup','galleryCat'].find(k=>d[k]!==undefined);returnSelector=key?`[data-${key.replace(/[A-Z]/g,c=>'-'+c.toLowerCase())}="${d[key]}"]`:null;returnModal=null;}
  else if(state.modal==='guide'&&kind==='api-native')returnModal='guide';
  state.modal=kind;state.legalIndex=0;MewGuideUI.pause();mountDialog();
 }
 function closeDialog(){
  if(!state.modal)return;
  if(returnModal){state.modal=returnModal;returnModal=null;mountDialog('[data-action="api-native"]');return;}
  document.querySelector('dialog')?.close();document.getElementById('modal-root').innerHTML='';state.modal=null;MewDemo.sync();MewFeatures.mediaSync();MewHomePreview.sync();MewGuideUI.pause();
  (returnFocus?.isConnected?returnFocus:(returnSelector&&document.querySelector(returnSelector))||document.querySelector('.primary-nav [aria-current="page"]'))?.focus({preventScroll:true});
 }
 function mountDialog(focus='[data-action="close"]'){
  const c=copy(),kind=state.modal,legal=['terms','privacy'].includes(kind);
  const titles={diary:c.diary,product:MewFeatures.feature().name,guide:state.guideMode===0?experience().setupSummary:experience().setupChat,'api-native':MewApiGuide[state.lang].native,cats:experience().catGallery,terms:c.terms,privacy:c.privacy};
  const content=kind==='guide'?`<div class="guide-workspace">${MewGuideUI.render()}</div>`:kind==='cats'?`<div class="gallery-reader">${MewHome.gallery()}</div>`:kind==='diary'?`<iframe class="diary-frame" title="${c.diary}" src="diary.html?lang=${state.lang}" sandbox="allow-scripts"></iframe>`:kind==='product'?`<div class="large-product">${MewFeatures.product()}</div>`:kind==='api-native'?`<div class="large-product">${MewGuideUI.product()}</div>`:MewCommerce.legalDocument();
  document.querySelector('dialog')?.close();document.getElementById('modal-root').innerHTML=`<dialog class="official-dialog dialog-${kind}" aria-labelledby="modal-heading"><div class="dialog-heading"><h2 id="modal-heading">${titles[kind]}</h2><div class="dialog-tools">${['product','api-native'].includes(kind)?`<button class="icon-button" data-action="motion" aria-label="${state.paused?c.resume:c.pause}" aria-pressed="${state.paused}">${icon(state.paused?'play':'pause')}</button>`:''}${legal?`<button data-action="${kind==='terms'?'privacy':'terms'}">${kind==='terms'?c.privacy:c.terms}</button>`:''}<button data-action="language" aria-label="${c.language}">${state.lang==='zh'?'EN':'中文'}</button><button class="icon-button" data-action="close" aria-label="${c.close}">${icon('close')}</button></div></div>${content}</dialog>`;
  const dialog=document.querySelector('dialog');dialog.addEventListener('cancel',event=>{event.preventDefault();closeDialog();});dialog.showModal();(dialog.querySelector(focus)||dialog.querySelector('[data-action="close"]'))?.focus({preventScroll:true});MewDemo.sync();MewFeatures.mediaSync();MewHomePreview.sync();MewGuideUI.sync();
 }
 function motion(){document.documentElement.dataset.motion=state.paused?'paused':'running';document.querySelectorAll('[data-action="motion"]').forEach(b=>{b.innerHTML=icon(state.paused?'play':'pause');b.setAttribute('aria-pressed',String(state.paused));b.setAttribute('aria-label',state.paused?copy().resume:copy().pause);b.title=b.getAttribute('aria-label');});MewDemo.hold();MewFeatures.mediaSync();MewHomePreview.sync();MewGuideUI.sync();}
 root.addEventListener('click',event=>{
  if(event.target.closest('.skip-link')){event.preventDefault();document.getElementById('main').focus();return;}
  const button=event.target.closest('button');if(!button)return;const d=button.dataset;
  if(MewGuideUI.handle(button)||MewHome.handle(button)||MewFeatures.handle(button))return;
  if(d.section!==undefined){navigate(Number(d.section));return;}
  if(d.legalIndex!==undefined){state.legalIndex=Number(d.legalIndex);mountDialog(`[data-legal-index="${state.legalIndex}"]`);return;}
  if(d.action==='language'){state.lang=state.lang==='zh'?'en':'zh';try{localStorage.setItem('mewment-language',state.lang);}catch{}document.getElementById('announcer').textContent='';render('[data-action="language"]');return;}
  if(d.action==='motion'){state.paused=!state.paused;motion();return;}
  if(d.contactCopy!==undefined){MewCommerce.copyContact(button);return;}
  if(d.action==='copy-feedback'){MewCommerce.copyFeedback(button);return;}
  if(d.action==='close'){closeDialog();return;}
  if(['diary','product','terms','privacy','api-native','cats'].includes(d.action))openDialog(d.action);
 });
 root.addEventListener('change',event=>{
  const input=event.target;
  if(input.matches('[data-feature-select]')){state.feature=Number(input.value);state.featureScene=0;state.featurePane=0;navigate(1,true);}
  if(input.matches('[data-feature-scene-select]')){state.featureScene=Number(input.value);render('[data-feature-scene-select]');}
  if(input.matches('[data-legal-select]')){state.legalIndex=Number(input.value);mountDialog('[data-legal-select]');}
 });
 document.addEventListener('keydown',event=>{
  if(event.altKey||event.ctrlKey||event.metaKey||!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;
  const group=event.target.closest('.primary-nav,.api-tabs,.cat-picker');if(!group)return;const buttons=[...group.querySelectorAll('button')],i=buttons.indexOf(event.target.closest('button')),next=event.key==='Home'?0:event.key==='End'?buttons.length-1:(i+(event.key==='ArrowRight'?1:buttons.length-1))%buttons.length;
  event.preventDefault();buttons[next].click();const refreshed=[...document.querySelectorAll(group.classList.contains('primary-nav')?'.primary-nav button':group.classList.contains('api-tabs')?'.api-tabs button':'.cat-picker button')];refreshed[next]?.focus({preventScroll:true});
 });
 document.addEventListener('mewment-demo-escape',()=>{if(state.modal)closeDialog();});
 addEventListener('hashchange',()=>{if(location.hash==='#main')return;state.modal=null;state.featureScene=0;applyHash();render('.primary-nav [aria-current="page"]');});
 matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change',event=>{state.paused=event.matches;motion();});
 const context={state,copy,icon,mark,escape,render:refresh,navigate,openDialog,closeDialog};
 MewHomePreview.init(context);MewHome.init(context);MewFeatures.init(context);MewCommerce.init(context);MewGuideUI.init(context);MewDemo.init({paused:()=>state.paused});applyHash();render();
})();
