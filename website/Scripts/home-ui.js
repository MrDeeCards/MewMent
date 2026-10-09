window.MewHome=(()=>{
 let ui,state;
 const text=()=>window.MewExperience[state.lang];
 const cat=()=>window.MewCats[state.cat];
 const picture=id=>`Resource/cats/${id}.svg`;
 function init(context){ui=context;state=context.state;}
 function render(){const c=text(),k=cat();return `<div class="home-view" data-home-pane="${state.homePane}">
  <section class="home-copy"><h1>${c.homeTitle}</h1><p>${c.homeLine}</p><div class="home-links"><a class="primary-button release-download" href="https://github.com/MrDeeCards/MewMent/releases" target="_blank" rel="noopener noreferrer">${state.lang==='zh'?'下载 Windows 版':'Download for Windows'}${ui.icon('arrow')}</a><div class="release-secondary"><button class="text-button" data-section="1">${c.homePrimary}</button><a class="text-button" href="https://github.com/MrDeeCards/MewMent" target="_blank" rel="noopener noreferrer">GitHub</a></div><button class="text-button" data-home-day>${c.homeSecondary}</button></div></section>
  <div class="home-pane-switch" role="group" aria-label="${c.nav[0]}">${c.homePanes.map((label,i)=>`<button data-home-pane="${i}" aria-pressed="${state.homePane===i}">${label}</button>`).join('')}</div>
  <section class="home-cats" aria-label="${c.catLabel}"><div class="cat-stage"><span class="cat-sunlight" aria-hidden="true"></span><img class="cat-neighbor neighbor-left" src="${picture(window.MewCats[(state.cat+1)%11].id)}" alt=""><img class="cat-neighbor neighbor-right" src="${picture(window.MewCats[(state.cat+2)%11].id)}" alt=""><div class="hero-live">${MewDemo.frame({scene:'companion',lang:state.lang,title:k.name[state.lang],poster:picture(k.id),variant:k.id,motion:state.catMotion})}</div></div>
   <div class="cat-greeting"><strong id="cat-name">${k.name[state.lang]}</strong><span id="cat-words" aria-live="polite">${c.catWords[0]}</span></div>
   <div class="cat-actions" role="group" aria-label="${c.catLabel}">${c.catActions.map((label,i)=>`<button data-cat-action="${i}">${ui.icon(['heart','cat','play'][i])}${label}</button>`).join('')}</div>
  </section>
  ${MewHomePreview.render()}
  <div class="home-cat-dock"><button class="gallery-link" data-action="cats">${c.catGallery}${ui.icon('arrow')}</button><div class="cat-picker" role="group" aria-label="${c.catSelect}">${window.MewCats.map((k,i)=>`<button data-cat="${i}" aria-label="${k.breed[state.lang]} · ${k.name[state.lang]}" aria-pressed="${state.cat===i}" title="${k.name[state.lang]}"><img src="${picture(k.id)}" alt="" width="56" height="56"><span>${k.name[state.lang]}</span></button>`).join('')}</div></div>
 </div>`;}
 function select(index,fromGallery=false){state.cat=index;state.catMotion='idle';const k=cat();MewDemo.selectCat(k.id,'idle');document.getElementById('cat-name')?.replaceChildren(k.name[state.lang]);const words=document.getElementById('cat-words');if(words)words.textContent=text().catWords[0];document.querySelectorAll('[data-cat]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.cat)===index)));const left=document.querySelector('.neighbor-left'),right=document.querySelector('.neighbor-right');if(left)left.src=picture(MewCats[(index+1)%11].id);if(right)right.src=picture(MewCats[(index+2)%11].id);document.querySelectorAll('[data-live-demo="companion"] .live-poster').forEach(img=>img.src=picture(k.id));if(fromGallery){if(state.modal)ui.closeDialog();ui.navigate(0);}}
 function gallery(){const c=text();return `<div class="cat-gallery-intro"><h2>${c.galleryTitle}</h2><p>${c.galleryHint}</p></div><div class="cat-gallery">${MewCats.map((k,i)=>`<button class="cat-portrait" data-gallery-cat="${i}" aria-label="${c.galleryChoose} · ${k.name[state.lang]}" aria-pressed="${state.cat===i}" style="--cat-color:${k.accent}"><img src="${picture(k.id)}" alt="${k.breed[state.lang]}" width="200" height="200"><strong>${k.name[state.lang]}</strong><span>${k.breed[state.lang]}</span></button>`).join('')}</div>`;}
 function handle(button){const d=button.dataset,c=text();
  if(d.cat!==undefined){select(Number(d.cat));return true;}
  if(d.galleryCat!==undefined){select(Number(d.galleryCat),true);return true;}
  if(d.catAction!==undefined){const n=Number(d.catAction);state.catMotion=['pet','stretch','toy'][n];MewDemo.selectCat(cat().id,state.catMotion);document.getElementById('cat-words').textContent=c.catWords[n+1];return true;}
  if(d.homePane!==undefined||d.homeDay!==undefined){state.homePane=d.homeDay!==undefined?1:Number(d.homePane);document.querySelector('.home-view').dataset.homePane=String(state.homePane);document.querySelectorAll('[data-home-pane]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.homePane)===state.homePane)));MewDemo.sync();MewHomePreview.sync();if(d.homeDay!==undefined)document.querySelector('.home-preview').focus({preventScroll:true});return true;}
  return false;
 }
 return{init,render,gallery,handle,select};
})();
