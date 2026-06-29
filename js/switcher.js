/* ---- review-only theme switcher: swaps the #theme stylesheet href ---- */
(function(){
  var link=document.getElementById('theme');
  var btns=document.querySelectorAll('.switcher .sw');
  if(!link||!btns.length)return;
  var KEY='goyo-theme';

  function apply(href){
    link.setAttribute('href',href||'');
    btns.forEach(function(b){b.classList.toggle('on',(b.dataset.theme||'')===(href||''));});
    try{localStorage.setItem(KEY,href||'');}catch(e){}
  }

  btns.forEach(function(b){
    b.addEventListener('click',function(){apply(b.dataset.theme||'');});
  });

  var saved;
  try{saved=localStorage.getItem(KEY);}catch(e){}
  if(saved)apply(saved);
})();
