let db={started:0,added:0,cut:0,length:0,used:0,history:[]};
let selected="started";

function save(){localStorage.wirecut=JSON.stringify(db)}
function load(){try{db=JSON.parse(localStorage.wirecut)||db}catch(e){} render()}
function render(){
started.textContent=db.started.toFixed(2);
added.textContent=db.added.toFixed(2);
cut.textContent=db.cut.toFixed(2);
used.textContent=db.used.toFixed(2);
length.textContent=db.length.toFixed(2);
}
document.querySelectorAll(".card[data-key]").forEach(c=>c.onclick=()=>{
selected=c.dataset.key;
document.querySelectorAll(".card").forEach(x=>x.classList.remove("active"));
c.classList.add("active");
});
document.querySelectorAll(".keypad button").forEach(b=>b.onclick=()=>{
let v=b.textContent;
if(v==="="){calculate();return}
db[selected]=Number(String(db[selected]).replace(".00","")+v);
render();save();
});
function calculate(){
db.used=db.cut;
db.length=db.started+db.added-db.cut;
db.history.push({date:new Date().toLocaleDateString(),time:new Date().toLocaleTimeString(),started:db.started,added:db.added,cut:db.cut,used:db.used,currentLength:db.length});
save();render();
}
document.querySelector(".next").onclick=()=>{db.started=db.length;db.added=0;db.cut=0;save();render()}
function exportCSV(){
let csv="username,date,time,started,added,cut,used,currentLength\n";
db.history.forEach(r=>csv+=`user,${r.date},${r.time},${r.started},${r.added},${r.cut},${r.used},${r.currentLength}\n`);
let a=document.createElement("a");a.href=URL.createObjectURL(new Blob([csv]));a.download="wirecut-backup.csv";a.click();
}
export.onclick=exportCSV;
setInterval(()=>clock.textContent=new Date().toLocaleTimeString([], {hour:"2-digit",minute:"2-digit"}),1000);
load();
