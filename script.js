const music=document.getElementById('music');const pages=[...document.querySelectorAll('.page')];
function go(n){pages.forEach((p,i)=>p.classList.toggle('active',i===n-1));window.scrollTo(0,0);hearts(9)}
function startStory(){music.play().catch(()=>{});go(2);hearts(15)}
function finish(){go(5);hearts(45)}
function hearts(n){const box=document.getElementById('particles');for(let i=0;i<n;i++){const x=document.createElement('span');x.className='float';x.textContent=Math.random()>.35?'♥':'✦';x.style.left=(4+Math.random()*92)+'%';x.style.bottom='-20px';x.style.animationDelay=(Math.random()*1.3)+'s';x.style.fontSize=(9+Math.random()*15)+'px';box.appendChild(x);setTimeout(()=>x.remove(),6500)}}