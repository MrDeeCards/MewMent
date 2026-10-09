/* File-friendly, bounded, ratio-preserving product and companion frames. */
window.MewDemo=(()=>{
  const base=new URL('../Resource/demos/product-document.js',document.currentScript.src).href;
  const scenes={planner:[610,775,'app'],overview:[420,770,'app'],ai:[610,775,'app'],gantt:[610,775,'app'],statistics:[610,775,'app'],project:[610,775,'app'],export:[610,775,'app'],attachments:[610,775,'app'],floating:[360,520,'floating'],assistant:[610,630,'chat'],api:[610,775,'app'],sources:[610,775,'app'],cats:[600,340,'motions'],companion:[240,240,'motions'],catalogue:[1100,580,'cats']};
  let loading=null,isPaused=()=>false;
  const records=new Map();
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function payload(){
    if(window.MewDemoDocument)return Promise.resolve(window.MewDemoDocument);
    if(loading)return loading;
    loading=new Promise((resolve,reject)=>{const script=document.createElement('script');script.src=base;script.async=true;const timer=setTimeout(()=>fail(),12000);function fail(){clearTimeout(timer);script.remove();loading=null;reject(new Error('Demo bundle unavailable'));}script.onerror=fail;script.onload=()=>{clearTimeout(timer);if(window.MewDemoDocument)resolve(window.MewDemoDocument);else fail();};document.head.append(script);});
    return loading;
  }
  function frame({scene='planner',lang='zh',title='',poster='',action,variant='black',motion}={}){
    if(!scenes[scene])scene='planner';
    if(scene==='cats'&&action!==undefined){scene='companion';motion=['pet','toy','stretch','sleepy'][action]||'idle';}
    const d=scenes[scene];
    return `<span class="live-demo" data-live-demo="${scene}" data-demo-lang="${lang}" data-demo-title="${esc(title)}" data-demo-variant="${esc(variant)}" data-demo-motion="${esc(motion||'idle')}" data-native-width="${d[0]}" data-native-height="${d[1]}">${poster?`<img class="live-poster" src="${esc(poster)}" alt="${esc(title)}">`:''}<span class="demo-failure" role="status" hidden><span>${lang==='zh'?'演示暂未打开':'The demo could not open'}</span><button data-demo-retry>${lang==='zh'?'重新打开':'Try again'}</button></span></span>`;
  }
  function visible(node){return node.isConnected&&node.getBoundingClientRect().width>1&&node.getBoundingClientRect().height>1;}
  function fit(node){
    const parent=node.parentElement;if(!parent)return false;
    const b=parent.getBoundingClientRect(),s=getComputedStyle(parent);
    const w=parent.clientWidth-parseFloat(s.paddingLeft||0)-parseFloat(s.paddingRight||0),h=parent.clientHeight-parseFloat(s.paddingTop||0)-parseFloat(s.paddingBottom||0);
    if(w<2||h<2||!b.width||!b.height)return false;
    const scale=Math.min(w/Number(node.dataset.nativeWidth),h/Number(node.dataset.nativeHeight));
    node.style.width=Number(node.dataset.nativeWidth)*scale+'px';node.style.height=Number(node.dataset.nativeHeight)*scale+'px';return true;
  }
  function failed(node,error){const r=records.get(node);if(!r)return;clearTimeout(r.timer);node.dataset.ready='error';node.setAttribute('aria-busy','false');node.dataset.error=String(error.message||error);node.querySelector('.demo-failure').hidden=false;}
  async function mount(node){
    const r=records.get(node);if(!r||r.started||!fit(node))return;r.started=true;delete node.dataset.error;node.dataset.ready='pending';node.setAttribute('aria-busy','true');
    try{
      const template=await payload();if(!node.isConnected||records.get(node)!==r)return;
      const [w,h,surface]=scenes[node.dataset.liveDemo],query=new URLSearchParams({scene:node.dataset.liveDemo,surface,lang:node.dataset.demoLang,width:String(w),height:String(h),screenWidth:String(Math.round(w*2.4)),desktopScale:'1',variant:node.dataset.demoVariant});
      if(node.dataset.liveDemo==='companion')query.set('motion',node.dataset.demoMotion);
      const iframe=document.createElement('iframe');iframe.className='product-live-frame';iframe.title=node.dataset.demoTitle;iframe.setAttribute('sandbox','allow-scripts');iframe.setAttribute('referrerpolicy','no-referrer');
      if(node.dataset.liveDemo==='companion'){iframe.tabIndex=-1;iframe.setAttribute('aria-hidden','true');}
      iframe.srcdoc=template.replace('__MEW_QUERY_VALUE__',JSON.stringify(query.toString()).replaceAll('<','\\u003c'));
      r.frame=iframe;r.timer=setTimeout(()=>failed(node,new Error('Demo startup timed out')),16000);node.prepend(iframe);
    }catch(error){failed(node,error);}
  }
  function sync(){
    for(const [node,r] of records)if(!node.isConnected){clearTimeout(r.timer);r.observer.disconnect();records.delete(node);}
    document.querySelectorAll('.live-demo[data-native-width]').forEach(node=>{
      if(!records.has(node)){
        const observer=new ResizeObserver(()=>{fit(node);mount(node);hold();});
        records.set(node,{observer,started:false,frame:null,timer:0});observer.observe(node.parentElement);
      }
      fit(node);mount(node);
    });hold();
  }
  function hold(){for(const [node,r] of records){const inDialog=!!node.closest('dialog[open]'),covered=!!document.querySelector('dialog[open]')&&!inDialog;r.frame?.contentWindow?.postMessage({type:'mewment-demo-hold',paused:isPaused()||document.hidden||!visible(node)||covered},'*');}}
  function selectCat(variant,motion='idle'){document.querySelectorAll('[data-live-demo="companion"]').forEach(node=>{node.dataset.demoVariant=variant;node.dataset.demoMotion=motion;records.get(node)?.frame?.contentWindow?.postMessage({type:'mewment-cat-select',variant,motion},'*');});}
  function init({paused=()=>false}={}){
    isPaused=paused;
    addEventListener('message',event=>{const pair=[...records].find(([,r])=>r.frame?.contentWindow===event.source);if(!pair)return;const [node,r]=pair;
      if(event.data?.type==='mewment-demo-escape'&&node.closest('dialog[open]'))document.dispatchEvent(new Event('mewment-demo-escape'));
      if(event.data?.type==='mewment-demo-ready'){clearTimeout(r.timer);node.dataset.ready='true';node.setAttribute('aria-busy','false');node.querySelector('.demo-failure').hidden=true;if(node.dataset.liveDemo==='companion')selectCat(node.dataset.demoVariant,node.dataset.demoMotion);hold();}
      if(event.data?.type==='mewment-demo-error')failed(node,new Error(event.data.message));
    });
    document.addEventListener('click',event=>{const button=event.target.closest('[data-demo-retry]');if(!button)return;const node=button.closest('.live-demo'),r=records.get(node);clearTimeout(r.timer);r.frame?.remove();r.started=false;node.querySelector('.demo-failure').hidden=true;mount(node);});
    document.addEventListener('visibilitychange',hold);addEventListener('resize',sync);
  }
  return{init,frame,sync,hold,selectCat,scenes};
})();
