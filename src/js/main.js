const preview = document.querySelectorAll('.preview-task-box');

const openDescription = (description) => {
  description.classList.toggle('description-task-box-visible');
}

const checkClick = () => {
  preview.forEach(element => {
    element.addEventListener('click', () => {
      const description = element.childNodes[3];
      openDescription(description);
    });
  });

}

checkClick();

