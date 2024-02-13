//adding dynamic year in copyright section
const yearEl = document.querySelector('.year1');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//making mobile nav works
const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

//smooth scrolling animation
const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = link.getAttribute('href');

    //scroll to the top
    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

    //scroll to other links
    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });

      //close mobile navigation
    }
    if (link.classList.contains('main-nav-link')) {
      headerEl.classList.toggle('nav-open');
    }
  });
});

///sticky navigation
const sectionHeroEl = document.querySelector('.section-hero');
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add('sticky');
    }
    if (ent.isIntersecting) {
      document.body.classList.remove('sticky');
    }
  },
  {
    //observe something inside viewport
    root: null,
    //it will fire when 0 percent of hero-section inside viewport
    threshold: 0,
    //it means adding sticky class before 80px
    rootMargin: '-80px',
  }
);
obs.observe(sectionHeroEl);
