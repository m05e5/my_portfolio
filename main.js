

function myFunction() {
  const skills = document.getElementById("skills");
  const skill = document.querySelectorAll('.skill-bar-progress')
  const navbar = document.getElementById("navbar");
  const sticky = navbar.offsetTop;
  const y_level = skills.offsetTop -600;
  console.log(y_level);
  if (window.scrollY > y_level) {
    skill.forEach(element => { 
      element.classList.add("animate")
    });
  }
  if (window.scrollY > sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
  // else {
  //   skills.classList.remove("sticky");
  // }
}
