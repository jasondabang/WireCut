let data=JSON.parse(localStorage.getItem('cord'))||{
username:'',
started:0,
added:0,
cut:0,
used:0,
current:0
};

function save(){
localStorage.setItem('cord',JSON.stringify(data));
}

function update(){
started.textContent=data.started.toFixed(2);
added.textContent=data.added.toFixed(2);
cut.textContent=data.cut.toFixed(2);
used.textContent=data.used.toFixed(2);
current.textContent=data.current.toFixed(2);
}
update();

setInterval(()=>{
clock.textContent=new Date().toLocaleTimeString([],{
hour:'2-digit',
minute:'2-digit',
hour12:false
});
},1000);

menu.onclick=()=>menuBox.classList.toggle('hide');

create.onclick=()=>{
data.username=username.value.trim();
save();
alert('Username saved');
};

export.onclick=()=>{
let blob=new Blob([JSON.stringify(data)],{type:'application/json'});
let a=document.createElement('a');
a.href=URL.createObjectURL(blob);
a.download='cord-backup.json';
a.click();
};
