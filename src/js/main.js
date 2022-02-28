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

photo.addEventListener('click', (event)=> {
  event.target.style.transition = '.3s';
  console.log(event.target.style.transform)
  if (event.target.style.transform === 'scale(1.5)') {
    event.target.style.transform = 'scale(100%)';
  } else {
    event.target.style.transform = 'scale(150%)';
  }
});


const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function  animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;

        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
          animItem.classList.add('_active');
        } else {
          if (!animItem.classList.contains('_anim-no-hide')) {
            animItem.classList.remove('_active');
          }
        }
      }
    }
    function offset(el) {
      const rect = el.getBoundingClientRect();
      const scrollLeft = window.pageYOffset || document.documentElement.scrollLeft;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }
    setTimeout(() => {
      animOnScroll();
    }, 300);
}

checkClick();
