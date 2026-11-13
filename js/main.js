(function () {
  // Portfolio filters
  var btns  = document.querySelectorAll('.filter-btn');
  var cards = document.querySelectorAll('.portfolio-card');

  btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      btns.forEach(function (b) {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');

      var filter = btn.dataset.filter;
      cards.forEach(function (card) {
        if (filter === '*' || card.dataset.category === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav    = document.getElementById('main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('nav-open', !expanded);
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('nav-open');
      });
    });
  }
}());
