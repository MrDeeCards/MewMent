/* A presentation timeline, not an editable planner. It belongs to this visit. */
window.MewHomePreview=(()=>{
 let state,ui,root=null,parts=null,frame=0,lastPaint=0,pausedAt=null,pausedTotal=0;
 const durations=[24,30,18];
 const cycle=durations.reduce((sum,n)=>sum+n,0);
 const copy=()=>MewExperience[state.lang].homePreview;
 function init(context){
  ui=context;state=context.state;
  // performance.now() starts at navigation, including time spent loading assets.
  if(state.paused)pausedAt=0;
  frame=requestAnimationFrame(tick);
  addEventListener('pagehide',()=>cancelAnimationFrame(frame));
  addEventListener('pageshow',event=>{if(event.persisted)frame=requestAnimationFrame(tick);});
 }
 function elapsed(now=performance.now()){return Math.max(0,(pausedAt??now)-pausedTotal);}
 function format(ms){const seconds=Math.floor(ms/1000),pad=n=>String(n).padStart(2,'0');return seconds>=3600?`${pad(Math.floor(seconds/3600))}:${pad(Math.floor(seconds/60)%60)}:${pad(seconds%60)}`:`${pad(Math.floor(seconds/60))}:${pad(seconds%60)}`;}
 function snapshot(now=performance.now()){
  const ms=elapsed(now),local=ms/1000%cycle;let start=0;
  const tasks=durations.map(duration=>{const value=Math.max(0,Math.min(1,(local-start)/duration));const phase=local<start?'waiting':local>=start+duration?'done':'running';start+=duration;return{value,phase};});
  return{ms,clock:format(ms),tasks,completed:tasks.filter(t=>t.phase==='done').length};
 }
 function render(){
  const c=copy(),s=snapshot();
  return `<section class="home-preview" tabindex="-1" aria-label="${c.label}">
   <div class="preview-brand"><img src="Resource/media/mark.svg" alt="" width="31" height="31"><strong>MewMent</strong><span>${c.category}</span></div>
   <div class="preview-screen">
    <div class="preview-app">
     <div class="preview-recording"><span class="preview-record-dot" aria-hidden="true"></span><span>${c.recording}</span><span class="preview-wave" aria-hidden="true"><i></i><i></i><i></i><i></i></span></div>
     <time class="preview-clock" role="timer" aria-live="off" aria-label="${c.timerLabel}">${s.clock}</time>
     <div class="preview-task-heading"><span>${c.tasksLabel}</span><span class="preview-completed">${s.completed} / 3</span></div>
     <ol class="preview-tasks">${c.tasks.map((title,i)=>`<li class="preview-task" data-preview-task="${i}" data-phase="${s.tasks[i].phase}">
      <div class="preview-task-title"><span class="preview-task-state" aria-hidden="true">${ui.icon('check')}</span><span id="preview-task-${i}">${title}</span></div>
      <div class="preview-task-meta"><span class="preview-task-status">${c.status[s.tasks[i].phase]}</span><span class="preview-task-percent">${Math.floor(s.tasks[i].value*100)}%</span></div>
      <div class="preview-session-bars"><span class="preview-plan-bar" aria-hidden="true"></span><progress aria-labelledby="preview-task-${i}" max="100" value="${s.tasks[i].value*100}"></progress></div>
     </li>`).join('')}</ol>
     <div class="preview-timeline" aria-hidden="true">${durations.map((duration,i)=>`<span style="flex:${duration}"><i data-timeline-part="${i}" style="transform:scaleX(${s.tasks[i].value})"></i></span>`).join('')}</div>
    </div>
    <div class="preview-desktop-edge" aria-hidden="true"></div>
    <div class="preview-edge-dock" role="img" aria-label="${c.dockLabel}">
     <span class="preview-edge-aura" aria-hidden="true"></span>${ui.mark('home-edge')}<span class="preview-edge-count" aria-hidden="true">1</span>
    </div>
    <span class="preview-edge-caption">${c.edgeLabel}</span>
   </div>
   <div class="preview-legend" aria-label="${c.caption}"><span><i class="legend-plan" aria-hidden="true"></i>${c.planned}</span><span><i class="legend-actual" aria-hidden="true"></i>${c.actual}</span></div>
  </section>`;
 }
 function sync(){
  const now=performance.now();
  if(state.paused&&pausedAt===null)pausedAt=now;
  if(!state.paused&&pausedAt!==null){pausedTotal+=now-pausedAt;pausedAt=null;}
  const next=document.querySelector('.home-preview');
  if(next!==root){root=next;parts=root?{
   clock:root.querySelector('.preview-clock'),completed:root.querySelector('.preview-completed'),hand:root.querySelector('.preview-edge-dock .clock-hand'),
   tasks:[...root.querySelectorAll('.preview-task')].map(row=>({row,progress:row.querySelector('progress'),percent:row.querySelector('.preview-task-percent'),status:row.querySelector('.preview-task-status')})),
   timeline:[...root.querySelectorAll('[data-timeline-part]')]
  }:null;}
  paint(now);
 }
 function paint(now){
  if(!root?.isConnected||!parts)return;
  const c=copy(),s=snapshot(now);
  if(parts.clock.textContent!==s.clock)parts.clock.textContent=s.clock;
  parts.clock.setAttribute('datetime',`PT${Math.floor(s.ms/1000)}S`);
  root.dataset.elapsedSeconds=String(Math.floor(s.ms/1000));
  parts.completed.textContent=`${s.completed} / 3`;
  s.tasks.forEach((task,i)=>{const p=parts.tasks[i];p.row.dataset.phase=task.phase;p.progress.value=task.value*100;const percent=Math.floor(task.value*100)+'%';if(p.percent.textContent!==percent)p.percent.textContent=percent;if(p.status.textContent!==c.status[task.phase])p.status.textContent=c.status[task.phase];parts.timeline[i].style.transform=`scaleX(${task.value})`;});
  // Same 1.4 s turn as the app's collapsed EdgeTrigger, around the logo's eye.
  const angle=s.ms/1400*360%360;
  parts.hand.setAttribute('transform',`rotate(${angle.toFixed(2)} 385 604)`);
 }
 function tick(now){
  if(!state.paused&&!document.hidden&&!state.modal&&root?.isConnected&&root.getClientRects().length&&now-lastPaint>=1000/60){paint(now);lastPaint=now-(now-lastPaint)%(1000/60);}
  frame=requestAnimationFrame(tick);
 }
 return{init,render,sync};
})();
