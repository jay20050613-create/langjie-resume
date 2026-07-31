const $=(s,r=document)=>r.querySelector(s);const $$=(s,r=document)=>[...r.querySelectorAll(s)];
requestAnimationFrame(()=>document.body.classList.add('ready'));
addEventListener('mousemove',e=>{const glow=$('.cursor-glow');if(glow){glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'}});
$$('a[href$=".html"],a[href*=".html#"]').forEach(a=>a.addEventListener('click',e=>{if(e.metaKey||e.ctrlKey||e.shiftKey)return;const u=new URL(a.href,location.href);if(u.origin!==location.origin)return;e.preventDefault();document.body.classList.add('leaving');setTimeout(()=>location.href=u.href,260)}));
const menu=$('.menu-button');if(menu)menu.addEventListener('click',()=>$('.site-header nav').classList.toggle('mobile-open'));
