

const myFunction = () => {
  const skills = document.getElementById("skills");
  const html_progress = document.getElementById('html-progress')
  const js_progress = document.getElementById('js-progress')
  const react_progress = document.getElementById('react-progress')
  const rails_progress = document.getElementById('rails-progress')
  const flutter_progress = document.getElementById('flutter-progress')
  const php_progress = document.getElementById('php-progress')
  const navbar = document.getElementById("navbar");
  const space_compensation = document.querySelector('.space_compensation')
  const sticky = navbar.offsetTop;
  const y_level = skills.offsetTop -600;
  if (window.scrollY > y_level) {
    html_progress.classList.add("html_progress")
    js_progress.classList.add("js_progress")
    react_progress.classList.add("react_progress")
    rails_progress.classList.add("rails_progress")
    flutter_progress.classList.add("flutter_progress")
    php_progress.classList.add("php_progress")
  }
  if (window.scrollY > sticky) {
    navbar.classList.add("sticky")
    space_compensation.style.display = 'block'
  } else {
    navbar.classList.remove("sticky");
    space_compensation.style.display = 'none'
  }
  // else {
  //   skills.classList.remove("sticky");
  // }
  const submitBtn = document.getElementById('submit');
  const message = document.getElementById('form-state');
  message.style.color = 'red';
  submitBtn.onclick = function (event) {
    const email = document.getElementById('email').value;
    const lowerCaseEmail = email.toLowerCase();
    if (email !== lowerCaseEmail) {
      message.textContent = 'Incorrect Email Format';
      event.preventDefault();
    }
  };
}

const modalDisplay = () => {
  console.log('hello')
  const modal = document.querySelector('.nav_modal-background');
  const opener = document.querySelector('#nav_modal-displayer');
  const closer = document.querySelector('.X');
  const modalNavLink = document.querySelectorAll('.modal_nav_link');

  function closeModal() {
    modal.style.visibility = 'hidden';
  }

  function callp() {
    console.log('visible');
    modal.style.visibility = 'visible';
  }
  modalNavLink.forEach((link) => {
    link.onclick = closeModal;
  });
  opener.onclick = callp;
  closer.onclick = closeModal;
};



