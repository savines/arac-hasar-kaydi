
console.log('ValueGuard app started');

document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const faqItem = button.parentElement;

    document.querySelectorAll('.faq-item').forEach(item => {
      if (item !== faqItem) {
        item.classList.remove('active');
      }
    });

    faqItem.classList.toggle('active');
  });
});

const form = document.getElementById('calcForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    document.querySelectorAll('.form-group.error, .form-checkbox.error').forEach(el => {
      el.classList.remove('error');
    });

    let isValid = true;
    let firstError = null;

    const inputs = form.querySelectorAll('input[required]');
    inputs.forEach(input => {
      if (!input.value.trim() && input.type !== 'checkbox') {
        isValid = false;
        const parent = input.closest('.form-group');
        parent.classList.add('error');
        if (!firstError) firstError = input;
      } else if (input.type === 'checkbox' && !input.checked) {
        isValid = false;
        const parent = input.closest('.form-checkbox');
        parent.classList.add('error');
        if (!firstError) firstError = input;
      }
    });

    if (!isValid) {
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstError.focus({ preventScroll: true });
      }
      return;
    }

    const btn = form.querySelector('.form-submit-btn');
    const originalText = btn.textContent;

    btn.textContent = 'Hesaplanıyor...';
    btn.disabled = true;

    setTimeout(() => {
      alert('Süreç tamamlandı.');
      form.reset();
      btn.textContent = originalText;
      btn.disabled = false;
    }, 1500);
  });

  form.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', () => {
      const parent = input.closest('.form-group') || input.closest('.form-checkbox');
      if (parent) {
        parent.classList.remove('error');
      }
    });
  });
}

const menuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

const themeBtn = document.getElementById('themeKey');
const body = document.body;
const iconSun = document.querySelector('.icon-sun');
const iconMoon = document.querySelector('.icon-moon');

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  disableLightMode();
} else {
  enableLightMode();
}

if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
      disableLightMode();
    } else {
      enableLightMode();
    }
  });
}

function enableLightMode() {
  body.classList.add('light-mode');
  iconSun.style.display = 'none';
  iconMoon.style.display = 'block';
  localStorage.setItem('theme', 'light');
}

function disableLightMode() {
  body.classList.remove('light-mode');
  iconSun.style.display = 'block';
  iconMoon.style.display = 'none';
  localStorage.setItem('theme', 'dark');
}

// WhatsApp Widget
const waBtn = document.getElementById('waBtn');
const waPopup = document.getElementById('waPopup');
const waClose = document.querySelector('.close-popup');

if (waBtn && waPopup) {
  waBtn.addEventListener('click', () => {
    waPopup.classList.toggle('active');
  });

  if (waClose) {
    waClose.addEventListener('click', () => {
      waPopup.classList.remove('active');
    });
  }
}

// Flip Card
document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});
