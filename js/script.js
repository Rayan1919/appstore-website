// simple placeholder behavior
document.addEventListener('DOMContentLoaded',function(){
  const btn = document.querySelector('#debug-btn');
  if(btn) btn.addEventListener('click', ()=> console.log('Debug button clicked'));
});

// log on form submit
document.addEventListener('DOMContentLoaded', function(){
  const form = document.querySelector('#contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      console.log('Contact form submitted:', new FormData(form).get('name'));
      alert('Form submitted (demo)');
    });
  }
});
