/* ---- najeon seal (flat: celadon + pink + cream) ---- */
(function(){
  var m='<svg viewBox="0 0 52 16">'
    +'<ellipse cx="6" cy="9" rx="5" ry="3" fill="#74a89f" opacity=".9"/>'
    +'<ellipse cx="17" cy="9" rx="3.3" ry="2.1" fill="#e6bcc7" opacity=".85"/>'
    +'<ellipse cx="25" cy="9" rx="1.9" ry="1.3" fill="#cdbfb0" opacity=".6"/>'
    +'<circle cx="44" cy="7" r="4" fill="#efe4cf" opacity=".85"/></svg>';
  document.querySelectorAll('.seal').forEach(function(s){s.innerHTML=m;});
})();

/* ---- daily: date strip + water cups ---- */
(function(){
  var ds=document.getElementById('dstrip');
  if(ds){var h='';for(var d=1;d<=31;d++){h+='<span'+(d===6?' class="on"':'')+'>'+d+'</span>';}ds.innerHTML=h;}
  var cups=document.getElementById('cups');
  if(cups){var c='';for(var i=0;i<7;i++){
    c+='<svg class="cup" viewBox="0 0 20 22"><path d="M4 5h12l-1.2 13H5.2L4 5z"/></svg>';}cups.innerHTML=c;}
})();

/* ---- monthly calendar grid ---- */
(function(){
  var cal=document.getElementById('cal');if(!cal)return;
  var dows=['MON','TUE','WED','THU','FRI','SAT','SUN'],h='';
  dows.forEach(function(d){h+='<div class="dw">'+d+'</div>';});
  var lead=2,day=1,cells=35;
  for(var i=0;i<cells;i++){
    if(i<lead||day>31){h+='<div class="cell dim"></div>';}
    else{h+='<div class="cell">'+day+'</div>';day++;}
  }
  cal.innerHTML=h;
})();

/* ---- weekly columns ---- */
(function(){
  var wk=document.getElementById('wk');if(!wk)return;
  var d=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],h='';
  d.forEach(function(x){h+='<div class="col"><div class="ch"><div class="cw">'+x+'</div><div class="cd">—</div></div><div class="cl"></div></div>';});
  wk.innerHTML=h;
})();

/* ---- habit grid ---- */
(function(){
  var hb=document.getElementById('hb');if(!hb)return;
  var habits=['Move my body','Drink water','Time outside','Read','Sleep by 11','No-phone hour','Be kind to myself'];
  var head='<div class="hb-row"><div class="hb-name head">Habit</div><div class="hb-days">';
  for(var d=1;d<=31;d++)head+='<div class="hb-c">'+d+'</div>';head+='</div></div>';
  var rows=head;
  habits.forEach(function(name,r){
    var row='<div class="hb-row"><div class="hb-name">'+name+'</div><div class="hb-days">';
    for(var d=1;d<=31;d++){row+='<div class="hb-c"><div class="o"></div></div>';}
    row+='</div></div>';rows+=row;
  });
  hb.innerHTML=rows;
})();
