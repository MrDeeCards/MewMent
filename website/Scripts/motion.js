/* Native animation and isolated live product demonstrations. */
window.MewMotion = (() => {
  let isPaused=()=>false, pendingPointer=null, pointerFrame=0;
  const motions=['pet','toy','stretch','sleepy'];
  function productFrame(options){return MewDemo.frame(options);}
  function resetLook(){const art=document.querySelector('.cat-universe .hero-mark');if(art){art.style.removeProperty('--look-x');art.style.removeProperty('--look-y');art.style.removeProperty('--look-tilt');}}
  function init({paused}){
    isPaused=paused;MewDemo.init({paused});document.addEventListener('visibilitychange',()=>holdBackground(Boolean(document.querySelector('dialog[open]'))));
    matchMedia('(max-width:760px)').addEventListener('change',()=>holdBackground(Boolean(document.querySelector('dialog[open]'))));
    document.addEventListener('pointermove',event=>{
      if(isPaused()||event.pointerType==='touch')return;
      const universe=event.target.closest('.cat-universe');
      if(!universe){resetLook();return;}
      pendingPointer={x:event.clientX,y:event.clientY,universe};
      if(pointerFrame)return;
      pointerFrame=requestAnimationFrame(()=>{pointerFrame=0;if(!pendingPointer||isPaused())return;const {x,y,universe}=pendingPointer,rect=universe.getBoundingClientRect(),dx=(x-rect.left)/rect.width-.5,dy=(y-rect.top)/rect.height-.5,art=universe.querySelector('.hero-mark');if(!art)return;art.style.setProperty('--look-x',`${dx*16}px`);art.style.setProperty('--look-y',`${dy*12}px`);art.style.setProperty('--look-tilt',`${dx*3}deg`);});
    },{passive:true});
    document.addEventListener('animationend',event=>{
      if(event.animationName==='pet')event.target.classList.remove('petted');
      if(event.animationName==='pet-spark')event.target.remove();
    });
  }

  function pet(){if(isPaused())return;const stage=document.querySelector('.cat-universe');if(!stage)return;for(let i=0;i<6;i++){const spark=document.createElement('span');spark.className='pet-spark';spark.setAttribute('aria-hidden','true');spark.textContent=i%2?'♥':'✧';spark.style.setProperty('--spark-x',`${(i-2.5)*30}px`);spark.style.setProperty('--spark-y',`${-65-Math.abs(i-2.5)*15}px`);spark.style.animationDelay=`${i*35}ms`;stage.append(spark);}}
  function sync(){MewDemo.sync();if(isPaused()){resetLook();document.querySelectorAll('.pet-spark').forEach(el=>el.remove());}}
  function holdBackground(){MewDemo.hold();}
  function changeCat(action,title){const frame=document.querySelector('#main .product-live-frame');if(!frame)return;frame.dataset.motionName=motions[action];frame.title=title;frame.contentWindow?.postMessage({type:'mewment-cat-action',motion:motions[action]},'*');}
  return {productFrame,init,pet,sync,holdBackground,changeCat};
})();
