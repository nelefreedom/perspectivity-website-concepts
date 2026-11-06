// Mobile menu: one button opens and closes the anchor list.
(function(){
  var b=document.querySelector('.menu-toggle'), m=document.getElementById('menu');
  if(!b||!m) return;
  function set(open){ m.classList.toggle('open',open); b.setAttribute('aria-expanded',open); }
  b.addEventListener('click',function(){ set(!m.classList.contains('open')); });
  m.addEventListener('click',function(e){ if(e.target.closest('a')) set(false); });
  document.addEventListener('keydown',function(e){ if(e.key==='Escape' && m.classList.contains('open')){ set(false); b.focus(); } });
})();
