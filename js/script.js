// simple placeholder behavior
document.addEventListener('DOMContentLoaded',function(){
  const btn = document.querySelector('#debug-btn');
  if(btn) btn.addEventListener('click', ()=> console.log('Debug button clicked'));
});
