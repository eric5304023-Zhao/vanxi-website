(function(){
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.menu a[data-page]').forEach(a => {
    if (a.getAttribute('data-page') === path) a.classList.add('active');
  });
})();
