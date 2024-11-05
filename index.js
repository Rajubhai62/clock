setInterval(() => {
  var d = new Date();
  var htime = d.getHours();
  var mtime = d.getMinutes();
  var stime = d.getSeconds();
  const hhand = 30 * htime + mtime / 2;
  const mhand = 6 * mtime;
  const shand = 6 * stime;

  hour.style.transform = ` rotate(${hhand}deg)`;
  minute.style.transform = ` rotate(${mhand}deg)`; 
  second.style.transform = ` rotate(${shand}deg)`;
}, 1000);


// digital clock
setInterval(() => {
  
  
  
  var d = new Date();
  var htime = d.getHours();
  var mtime = d.getMinutes();
  var stime = d.getSeconds();
  var date = d.toDateString();

  if (htime > 12) {
    htime = htime - 12;
  }
  a= htime <= 12 ? "PM" : "AM";

  htime = htime < 10 ? "0" + htime : htime;
  mtime = mtime < 10 ? "0" + mtime : mtime;
  stime = stime < 10 ? "0" + stime : stime;

  let mainTime = htime + " : " + mtime + " : " + stime + "  " + a;
  
  document.querySelector("#ctime").innerText = mainTime;

  document.querySelector("#date").innerText = date;

}, 1000);
