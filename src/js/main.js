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

const photo = document.querySelector('.photo');

photo.addEventListener('mouseover', (event)=> {
  event.target.style.transform = 'scale(150%)';
});

photo.addEventListener('mouseout', (event) => {
  event.target.style.transform = 'scale(100%)';
});

checkClick();
