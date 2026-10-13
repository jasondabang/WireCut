function saveData(d){localStorage.setItem('cordData',JSON.stringify(d))}
function loadData(){return JSON.parse(localStorage.getItem('cordData')||'{}')}