window.MewCommerce=(()=>{
 let state,ui;
 const copy=()=>ui.copy(),icon=n=>ui.icon(n),mark=n=>ui.mark(n),escape=v=>ui.escape(v);
 function init(context){ui=context;state=context.state;}
 function channel(entry){
  const c=copy(),label=entry.label[state.lang];
  return `<div class="contact-channel"><div class="contact-channel-text"><span class="contact-platform">${escape(label)}</span>${entry.href?`<a class="contact-address" href="${escape(entry.href)}" aria-label="${c.emailAction}: ${escape(entry.value)}">${escape(entry.value)}${icon('arrow')}</a>`:`<strong class="contact-address">${escape(entry.value)}</strong>`}</div><button class="contact-copy" data-contact-copy="${entry.id}" aria-label="${c.copyContact} ${escape(label)} ${escape(entry.value)}"><span data-copy-label>${c.copyContact}</span><svg class="icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="8" y="8" width="12" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3"/></svg></button></div>`;
 }
 function contact(){
  const c=copy(),author=window.MewPublicContact;
  return `<section class="section-heading contact-heading"><p class="product-category">${c.nav[2]}</p><h1>${c.contactTitle}</h1><p>${c.contactBody}</p><div class="commerce-cat"><img src="Resource/cats/black.svg" alt="" width="200" height="200"><p>${c.contactStory}</p></div><button class="text-button" data-action="diary">${c.contactDiary}${icon('arrow')}</button></section>
   <section class="contact-workspace"><div class="contact-letter"><span class="letter-stamp" aria-hidden="true">${mark('stamp')}</span><p class="product-category">${c.authorContact}</p><h2>${escape(author.name[state.lang])}</h2><div class="contact-channels">${author.channels.map(channel).join('')}</div><p class="contact-search">${c.contactSearch}</p></div>
   <div class="feedback-tips"><h2>${c.feedbackTips}</h2><ul>${c.feedbackItems.map(text=>`<li>${text}</li>`).join('')}</ul><button class="primary-button" data-action="copy-feedback"><span data-copy-label>${c.feedbackCopy}</span>${icon('check')}</button><p class="contact-privacy">${c.contactPrivacy}</p></div></section>`;
 }
 function copyText(text,button,label){
  const c=copy(),announce=document.getElementById('announcer');
  const fallback=()=>{
   const anchor=button.closest('.contact-channel')||button;
   let box=anchor.nextElementSibling;
   if(!box?.classList.contains('feedback-fallback')){box=document.createElement('textarea');box.className='feedback-fallback';box.readOnly=true;anchor.after(box);}
   box.setAttribute('aria-label',label);box.value=text;box.focus();box.select();announce.textContent=c.contactManualCopy;
  };
  const done=()=>{button.querySelector('[data-copy-label]').textContent=c.contactCopied;announce.textContent=`${label}: ${c.contactCopied}`;};
  if(navigator.clipboard?.writeText)navigator.clipboard.writeText(text).then(done,fallback);else fallback();
 }
 function copyContact(button){
  const entry=window.MewPublicContact.channels.find(item=>item.id===button.dataset.contactCopy);
  if(entry)copyText(entry.value,button,entry.label[state.lang]);
 }
 function copyFeedback(button){
  const text=state.lang==='zh'?'MewMent 反馈\n\n软件版本：\nWindows 版本：\n问题或建议：\n复现步骤：\n错误提示：\n\n请先移除密码、API Key 和私人会话正文。':'MewMent feedback\n\nApp version:\nWindows version:\nIssue or suggestion:\nSteps to reproduce:\nError message:\n\nPlease remove passwords, API keys and private conversation text.';
  copyText(text,button,copy().feedbackCopy);
 }
  function legalDocument() {
    const l = window.MewLegal[state.lang], kind = state.modal === 'privacy' ? 'privacy' : 'terms', items = l[kind], item = items[state.legalIndex];
    return `<div class="legal-intro"><span>${l.status}</span><p>${l.intro}</p><div>${l.summary.map(text => `<span>${icon('check')}${text}</span>`).join('')}</div></div><div class="legal-layout"><nav class="legal-toc" aria-label="${kind === 'terms' ? l.termsTitle : l.privacyTitle}">${items.map((entry, i) => `<button data-legal-index="${i}" aria-current="${state.legalIndex === i ? 'true' : 'false'}" class="${state.legalIndex === i ? 'active' : ''}">${entry.title}</button>`).join('')}</nav><label class="mobile-legal-select">${state.lang === 'zh' ? '选择条款' : 'Choose an article'}<select data-legal-select>${items.map((entry, i) => `<option value="${i}" ${state.legalIndex === i ? 'selected' : ''}>${entry.title}</option>`).join('')}</select></label><article class="legal-article"><h3>${item.title}</h3>${item.body.map(p => `<p>${p}</p>`).join('')}<a href="Resource/Legal/${kind}.${state.lang === 'zh' ? 'zh-CN' : 'en'}.md" class="text-button" download>${l.download}${icon('arrow')}</a></article></div>`;
  }
 return {init,contact,copyContact,copyFeedback,legalDocument};
})();
