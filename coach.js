/* ALÈ · capa d'acompanyament multilingüe. Llegeix client.js. */
(() => {
  'use strict';
  const CFG = window.ALE_CLIENT || {};
  const ES = CFG.idioma === 'es';
  const L = (ca, es) => ES ? es : ca;
  const STYLE_ID = 'ale-coach-enhancements-style';
  const HYDRATION_EVERY_MS = 15 * 60 * 1000;
  const ACTIVE_GRACE_MS = 30 * 1000;
  const cardioPlans = CFG.cardioPassos || [];
  const breathing = CFG.respiracio || {};
  const warmup = CFG.escalfament || [];
  const videos = {};
  (CFG.escalfament || []).forEach(x => { if (x.video) videos[x.id] = {name:x.name,url:x.video}; });
  Object.values(CFG.sessions || {}).forEach(s => (s.ex || []).forEach(x => { if (x.video) videos[x.id] = {name:x.name,url:x.video}; }));
  (CFG.cooldown || []).forEach((x,i) => { if (x.video) videos[x.id || ('C'+(i+1))] = {name:x.name,url:x.video}; });

  function addStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement('style'); style.id = STYLE_ID;
    style.textContent = `
      .coach-plan{margin:8px 0 4px;padding:11px 12px;border-radius:13px;background:rgba(46,125,114,.07);border:.5px solid rgba(46,125,114,.18)}
      .coach-plan-title{font-size:10px;font-weight:750;letter-spacing:.12em;text-transform:uppercase;color:var(--ac,#2E7D72);margin-bottom:6px}
      .coach-plan-row{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;padding:7px 0;border-top:.5px solid var(--line,rgba(74,62,48,.10));font-size:12.5px;line-height:1.35}
      .coach-plan-row:first-of-type{border-top:0}.coach-plan-row span{color:var(--tx2,#6F665B)}.coach-plan-row b{color:var(--tx,#2E2A25);text-align:right;font-weight:650}
      .coach-plan-foot{margin-top:7px;font-size:11.5px;line-height:1.4;color:var(--tx2,#6F665B)}
      .coach-breath{margin:10px 0 0;padding:11px 12px;border-radius:13px;background:rgba(180,118,63,.07);border:.5px solid rgba(180,118,63,.20)}
      .coach-breath-head{font-size:10px;font-weight:750;letter-spacing:.12em;text-transform:uppercase;color:var(--ac2,#B4763F);margin-bottom:5px}
      .coach-breath p{margin:0;font-size:12.5px;line-height:1.45;color:var(--tx,#2E2A25)}.coach-breath small{display:block;margin-top:5px;font-size:10.5px;line-height:1.35;color:var(--tx3,#746A5E)}
      .coach-hydration-start,.coach-cardio-guide{margin:0 0 12px;padding:11px 12px;border-radius:13px;background:rgba(46,125,114,.08);border:.5px solid rgba(46,125,114,.20);font-size:12.5px;line-height:1.45;color:var(--tx,#2E2A25)}
      .coach-hydration-start b,.coach-cardio-guide b{color:var(--ac,#2E7D72)}
      .coach-warmup{margin:0 0 12px;border-radius:15px;background:rgba(180,118,63,.06);border:.5px solid rgba(180,118,63,.20);overflow:hidden;color:var(--tx,#2E2A25)}
      .coach-warmup summary{padding:12px 13px;cursor:pointer;font-size:13px;font-weight:750;color:var(--ac2,#B4763F);list-style:none}.coach-warmup summary::-webkit-details-marker{display:none}
      .coach-warmup summary::after{content:'＋';float:right;font-weight:500}.coach-warmup[open] summary::after{content:'−'}
      .coach-warmup-intro{margin:0;padding:0 13px 11px;font-size:11.5px;line-height:1.45;color:var(--tx2,#6F665B)}
      .coach-warmup-item{padding:12px 13px;border-top:.5px solid var(--line,rgba(74,62,48,.10))}.coach-warmup-item-head{display:flex;justify-content:space-between;gap:12px;align-items:flex-start;font-size:12.5px;line-height:1.35}.coach-warmup-item-head b{font-weight:700}.coach-warmup-item-head span{flex:0 0 auto;color:var(--tx3,#746A5E);text-align:right;font-size:11.5px}
      .coach-warmup-item p{margin:5px 0 0;font-size:11.5px;line-height:1.4;color:var(--tx2,#6F665B)}.coach-warmup-item .coach-video{margin-top:9px}
      .coach-video{display:flex;align-items:center;justify-content:center;gap:7px;width:100%;box-sizing:border-box;margin:10px 0 2px;padding:11px 12px;border-radius:13px;border:.7px solid rgba(46,125,114,.30);background:rgba(46,125,114,.07);color:var(--ac,#2E7D72);font:700 13px/1.2 inherit;text-decoration:none;cursor:pointer;-webkit-tap-highlight-color:transparent}
      .coach-video:active{transform:scale(.99)}
      .coach-video-modal{position:fixed;inset:0;z-index:100001;display:flex;align-items:center;justify-content:center;padding:max(12px,env(safe-area-inset-top)) 12px max(12px,env(safe-area-inset-bottom));box-sizing:border-box;background:rgba(24,27,21,.76);backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px)}
      .coach-video-shell{width:min(760px,100%);max-height:calc(100dvh - 24px);overflow:auto;border-radius:20px;background:#FFFDF8;box-shadow:0 24px 70px rgba(0,0,0,.34);border:.7px solid rgba(255,255,255,.25)}
      .coach-video-head{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 14px 12px 16px;border-bottom:.5px solid var(--line,rgba(74,62,48,.10))}
      .coach-video-title{min-width:0;font-size:14px;line-height:1.25;font-weight:750;color:var(--tx,#2E2A25);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
      .coach-video-close{flex:0 0 auto;width:38px;height:38px;border:0;border-radius:50%;background:rgba(46,42,37,.07);color:var(--tx,#2E2A25);font-size:22px;line-height:1;cursor:pointer}
      .coach-video-frame-wrap{position:relative;width:100%;aspect-ratio:16/9;background:#111}
      .coach-video-frame{position:absolute;inset:0;width:100%;height:100%;border:0}
      .coach-video-foot{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:12px 16px 14px;font-size:11.5px;line-height:1.35;color:var(--tx2,#6F665B)}
      .coach-video-external{flex:0 0 auto;color:var(--ac,#2E7D72);font-weight:700;text-decoration:none}
      @media(max-width:520px){.coach-video-modal{padding:0;align-items:flex-end}.coach-video-shell{width:100%;max-height:94dvh;border-radius:20px 20px 0 0}.coach-video-head{padding-top:13px}.coach-video-foot{align-items:flex-start;flex-direction:column}}
      .coach-toast{position:fixed;left:50%;bottom:max(86px,calc(env(safe-area-inset-bottom) + 74px));transform:translate(-50%,18px);width:min(360px,calc(100vw - 32px));box-sizing:border-box;padding:12px 14px;border-radius:15px;background:#2E2A25;color:#FFFBF4;box-shadow:0 12px 32px rgba(0,0,0,.22);font-size:13px;line-height:1.4;z-index:99999;opacity:0;pointer-events:none;transition:opacity .22s ease,transform .22s ease}
      .coach-toast.show{opacity:1;transform:translate(-50%,0)}.coach-toast b{color:#B9E1DB}`;
    document.head.appendChild(style);
  }
  function make(tag, cls, text){const n=document.createElement(tag);if(cls)n.className=cls;if(text!=null)n.textContent=text;return n;}
  function youtubeId(url){
    try{const u=new URL(url);if(u.hostname.includes('youtu.be'))return u.pathname.split('/').filter(Boolean)[0]||null;if(u.pathname.startsWith('/shorts/'))return u.pathname.split('/')[2]||null;if(u.pathname.startsWith('/embed/'))return u.pathname.split('/')[2]||null;return u.searchParams.get('v');}catch(e){return null}
  }
  let videoReturnFocus=null;
  function closeVideoModal(){const modal=document.querySelector('.coach-video-modal');if(!modal)return;const frame=modal.querySelector('iframe');if(frame)frame.src='about:blank';modal.remove();document.body.style.overflow='';if(videoReturnFocus&&document.contains(videoReturnFocus))videoReturnFocus.focus();videoReturnFocus=null;}
  function openVideoModal(v,trigger){
    closeVideoModal();
    const id=youtubeId(v.url);if(!id){window.open(v.url,'_blank','noopener,noreferrer');return}
    videoReturnFocus=trigger||document.activeElement;document.body.style.overflow='hidden';
    const modal=make('div','coach-video-modal');modal.setAttribute('role','dialog');modal.setAttribute('aria-modal','true');modal.setAttribute('aria-label',L('Explicació tècnica en vídeo','Explicación técnica en vídeo')+' · '+v.name);
    const shell=make('div','coach-video-shell');const head=make('div','coach-video-head');head.appendChild(make('div','coach-video-title',v.name));
    const close=make('button','coach-video-close','×');close.type='button';close.setAttribute('aria-label',L('Tancar vídeo','Cerrar vídeo'));close.addEventListener('click',closeVideoModal);head.appendChild(close);shell.appendChild(head);
    const fw=make('div','coach-video-frame-wrap');const frame=document.createElement('iframe');frame.className='coach-video-frame';frame.src='https://www.youtube-nocookie.com/embed/'+encodeURIComponent(id)+'?rel=0&playsinline=1';frame.title=v.name;frame.loading='eager';frame.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';frame.setAttribute('allowfullscreen','');fw.appendChild(frame);shell.appendChild(fw);
    const foot=make('div','coach-video-foot');foot.appendChild(make('span','',L('En tancar el vídeo continuaràs exactament on eres.','Al cerrar el vídeo continuarás exactamente donde estabas.')));const ext=make('a','coach-video-external',L('Obrir a YouTube','Abrir en YouTube'));ext.href=v.url;ext.target='_blank';ext.rel='noopener noreferrer';foot.appendChild(ext);shell.appendChild(foot);modal.appendChild(shell);
    modal.addEventListener('click',e=>{if(e.target===modal)closeVideoModal()});document.body.appendChild(modal);requestAnimationFrame(()=>close.focus());
  }
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&document.querySelector('.coach-video-modal'))closeVideoModal()});
  function videoButton(id){const v=videos[id];if(!v)return null;const b=make('button','coach-video','▶ '+L('Veure explicació en vídeo','Ver explicación en vídeo'));b.type='button';b.dataset.coachVideo=id;b.setAttribute('aria-label',L('Obre dins de l’app un vídeo de YouTube amb l’explicació tècnica','Abre dentro de la app un vídeo de YouTube con la explicación técnica')+' · '+v.name);b.addEventListener('click',()=>openVideoModal(v,b));return b;}
  function enhanceVideos(){
    // Exercici principal obert.
    const head=currentNavbarHead(); const m=head.match(/^([ABCW]\d)\s*·/);
    if(m){const id=m[1],wrap=document.querySelector('.sheet .wrap'); if(videos[id]&&wrap&&!wrap.querySelector(`[data-coach-video="${id}"]`)){const btn=videoButton(id); const firstCard=wrap.querySelector('.card'); if(firstCard) firstCard.appendChild(btn); else wrap.appendChild(btn);} }
    // Preparació específica i tornada a la calma: localitza cada nom visible.
    for(const [id,v] of Object.entries(videos)){
      if(document.querySelector(`[data-coach-video="${id}"]`)) continue;
      const nodes=[...document.querySelectorAll('.sheet h1,.sheet h2,.sheet h3,.sheet h4,.sheet p,.sheet div,.sheet span')];
      const nameNode=nodes.find(n=>{const t=(n.textContent||'').trim();return n.children.length===0&&(t===v.name||t.startsWith(v.name+' · '));});
      if(!nameNode) continue;
      let host=nameNode.closest('.card') || nameNode.parentElement; if(!host) continue;
      const btn=videoButton(id); host.appendChild(btn);
    }
  }
  function enhanceCardioSummaries(){const ps=[...document.querySelectorAll('p')];for(const p of ps){if(p.dataset.coachCardioSource)continue;const text=(p.textContent||'').trim();const plan=cardioPlans.find(x=>text.includes(x.match));if(!plan)continue;p.dataset.coachCardioSource=plan.key;p.style.display='none';const box=make('div','coach-plan');box.dataset.coachPlan=plan.key;box.appendChild(make('div','coach-plan-title',L('Què has de fer','Qué tienes que hacer')));for(const [label,value] of plan.rows){const row=make('div','coach-plan-row');row.appendChild(make('span','',label));row.appendChild(make('b','',value));box.appendChild(row)}box.appendChild(make('div','coach-plan-foot',L('No cal memoritzar-ho: quan comencis l’exposició, l’app et guiarà tram a tram amb compte enrere i avís de canvi.','No hace falta memorizarlo: cuando empieces, la app te guiará tramo a tramo con cuenta atrás y aviso de cambio.')));p.insertAdjacentElement('afterend',box)}}
  function currentNavbarHead(){const h=document.querySelector('.sheet .navbar .head');return h?(h.textContent||'').trim():'';}
  function isCardioHead(h){return /^Cardio · (setmana|semana)\s+\d+/i.test(h)}
  function enhanceActiveCardio(){const head=currentNavbarHead();if(!isCardioHead(head))return;const wrap=document.querySelector('.sheet .wrap');if(!wrap||wrap.querySelector('[data-coach-cardio-guide]'))return;const card=make('div','coach-cardio-guide');card.dataset.coachCardioGuide='1';card.appendChild(make('b','',L('Segueix la pantalla. ','Sigue la pantalla. ')));card.append(L('No has de recordar cap fórmula: el compte enrere i els avisos t’indiquen què toca. Tingues aigua a mà.','No tienes que recordar ninguna fórmula: la cuenta atrás y los avisos te indican qué toca. Ten agua a mano.'));wrap.insertBefore(card,wrap.firstChild)}
  function enhanceCheckinHydration(){const head=currentNavbarHead();if(head!==L('Abans de començar','Antes de empezar'))return;const wrap=document.querySelector('.sheet .wrap');if(!wrap||wrap.querySelector('[data-coach-hydration-start]'))return;if(!(wrap.textContent||'').includes(L('Energia','Energía')))return;const card=make('div','coach-hydration-start');card.dataset.coachHydrationStart='1';card.appendChild(make('b','',L('Abans de començar · ','Antes de empezar · ')));card.append(L('deixa una ampolla d’aigua a mà. Durant la sessió et farem recordatoris discrets; hidrata’t segons la set i les condicions.','deja una botella de agua a mano. Durante la sesión te haremos recordatorios discretos; hidrátate según la sed y las condiciones.'));wrap.insertBefore(card,wrap.firstChild)}
  function enhanceWarmupGuide(){
    if(!warmup.length)return;const head=currentNavbarHead();if(head!==L('Abans de començar','Antes de empezar'))return;
    const wrap=document.querySelector('.sheet .wrap');if(!wrap||wrap.querySelector('[data-coach-warmup]'))return;if(!(wrap.textContent||'').includes(L('Energia','Energía')))return;
    const card=make('details','coach-warmup');card.dataset.coachWarmup='1';card.open=true;
    card.appendChild(make('summary','',L('Escalfament general · 3-4 min','Calentamiento general · 3-4 min')));
    card.appendChild(make('p','coach-warmup-intro',L('Fes aquests tres moviments abans de començar. Les sèries d’aproximació apareixeran després dins de cada exercici de força que les necessiti.','Haz estos tres movimientos antes de empezar. Las series de aproximación aparecerán después dentro de cada ejercicio de fuerza que las necesite.')));
    warmup.forEach(x=>{const item=make('div','coach-warmup-item');const row=make('div','coach-warmup-item-head');row.appendChild(make('b','',x.name));row.appendChild(make('span','',x.dose||''));item.appendChild(row);if(x.why)item.appendChild(make('p','',x.why));const btn=videoButton(x.id);if(btn)item.appendChild(btn);card.appendChild(item)});
    const hydration=wrap.querySelector('[data-coach-hydration-start]');if(hydration)hydration.insertAdjacentElement('afterend',card);else wrap.insertBefore(card,wrap.firstChild);
  }
  function enhanceBreathing(){const head=currentNavbarHead();const match=head.match(/^([ABC]\d)\s*·/);const cards=[...document.querySelectorAll('.coach-breath')];if(!match){cards.forEach(n=>n.remove());return}const id=match[1],cue=breathing[id];cards.forEach(n=>{if(n.dataset.coachBreath!==id)n.remove()});if(!cue){document.querySelectorAll('.coach-breath').forEach(n=>n.remove());return}const wrap=document.querySelector('.sheet .wrap');if(!wrap||wrap.querySelector(`[data-coach-breath="${id}"]`))return;const prescription=[...wrap.querySelectorAll('p.cap')].find(p=>{const t=p.textContent||'';return (t.includes('descans')||t.includes('descanso'))&&(t.includes('sèries')||t.includes('series')||t.includes('reps')||t.includes('RIR'))});const card=make('div','coach-breath');card.dataset.coachBreath=id;card.appendChild(make('div','coach-breath-head',L('Respiració','Respiración')));card.appendChild(make('p','',cue));card.appendChild(make('small','',L('Busca una respiració fluida i estable; no cal forçar inspiracions profundes ni mantenir l’aire bloquejat durant tota la sèrie.','Busca una respiración fluida y estable; no hace falta forzar inspiraciones profundas ni mantener el aire bloqueado durante toda la serie.')));if(prescription)prescription.insertAdjacentElement('afterend',card);else wrap.appendChild(card)}
  let toastTimer=0,toastIndex=0;const hydrationMessages=ES?['Hidratación · aprovecha el descanso para dar unos sorbos de agua si tienes sed.','Agua a mano · hidrátate con calma y continúa cuando te vaya bien.','Recordatorio de hidratación · el descanso puede ser un buen momento para dar unos sorbos.']:['Hidratació · aprofita el descans per fer uns glops d’aigua si tens set.','Aigua a mà · hidrata’t amb calma i continua quan et vagi bé.','Recordatori d’hidratació · uns glops durant el descans poden ser un bon moment.'];
  function showHydrationToast(){document.querySelectorAll('.coach-toast').forEach(n=>n.remove());const toast=make('div','coach-toast');toast.appendChild(make('b','','💧 '));toast.append(hydrationMessages[toastIndex++%hydrationMessages.length]);document.body.appendChild(toast);requestAnimationFrame(()=>toast.classList.add('show'));clearTimeout(toastTimer);toastTimer=setTimeout(()=>{toast.classList.remove('show');setTimeout(()=>toast.remove(),260)},5200)}
  function detectActiveMode(){const h=currentNavbarHead();if(!h)return null;if(isCardioHead(h))return'cardio';if(/^[ABC]\d\s*·/.test(h)||/^Sessió [ABC]$/.test(h)||/^Sesión [ABC]$/.test(h)||h==='Bloc postural'||h==='Bloque postural')return'strength';return null}
  let activeMode=null,activeSince=0,lastActiveSeen=0,nextHydrationAt=HYDRATION_EVERY_MS;
  function updateHydrationClock(){const now=Date.now(),mode=detectActiveMode();if(mode){lastActiveSeen=now;if(mode!==activeMode){activeMode=mode;activeSince=now;nextHydrationAt=HYDRATION_EVERY_MS}}else if(activeMode&&now-lastActiveSeen>ACTIVE_GRACE_MS){activeMode=null;activeSince=0;nextHydrationAt=HYDRATION_EVERY_MS;return}if(!activeMode||document.visibilityState==='hidden')return;const elapsed=now-activeSince;if(elapsed>=nextHydrationAt){showHydrationToast();nextHydrationAt+=HYDRATION_EVERY_MS}}
  let enhanceScheduled=false;function enhance(){enhanceScheduled=false;addStyles();enhanceCardioSummaries();enhanceActiveCardio();enhanceCheckinHydration();enhanceWarmupGuide();enhanceBreathing();enhanceVideos()}function scheduleEnhance(){if(enhanceScheduled)return;enhanceScheduled=true;requestAnimationFrame(enhance)}
  const observer=new MutationObserver(scheduleEnhance);observer.observe(document.documentElement,{childList:true,subtree:true});document.addEventListener('DOMContentLoaded',scheduleEnhance,{once:true});window.addEventListener('load',scheduleEnhance,{once:true});setInterval(updateHydrationClock,15000);scheduleEnhance();
})();
