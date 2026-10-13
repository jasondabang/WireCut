setInterval(()=>clock.textContent=new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit',hour12:true}),1000);
