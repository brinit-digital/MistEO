fetch('../navbar.html')
    .then(res => res.text())
    .then(data => document.getElementById('navbar').innerHTML = data);

fetch('../footer.html')
    .then(res => res.text())
    .then(data => document.getElementById('footer').innerHTML = data);


  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

