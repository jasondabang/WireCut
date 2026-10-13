let s={started:0,added:0,cut:0,used:0,length:0},active='started';
function draw(){Object.keys(s).forEach(k=>{let e=document.getElementById(k);if(e)e.textContent=s[k].toFixed(2)})}
document.querySelectorAll('.card[data-key]').forEach(e=>e.onclick=()=>{active=e.dataset.key;e.classList.add('active')});
keys.onclick=e=>{let v=e.target.textContent.trim();if(v==='='){s.used=s.cut;s.length=s.started+s.added-s.cut}else if(v)s[active]=Number(String(s[active])+v);localStorage.wirecut=JSON.stringify(s);draw()};
next.onclick=()=>{s.started=s.length;s.added=0;s.cut=0;draw()};
setInterval(()=>clock.textContent=new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'}),1000);
try{s=JSON.parse(localStorage.wirecut)||s}catch(e){}
draw();