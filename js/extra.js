
const serviceItem = document.querySelectorAll('.service__card-item');
const viewItem = document.querySelector('.view__item');
const viewItemImg = document.querySelector('.view__img img');





serviceItem.forEach(item => {
  item.addEventListener('click', function () {

    let bound = this.getBoundingClientRect();
    let h = window.innerHeight;
    let y = (bound.height - h * 1.5);
    
    
    let imgItem = this.querySelector('.service__card-img');
    let titleItem = this.querySelector('.service__card-title');
    let borderItem = this.querySelector('.service__card-border');

    imgItem.style.transform = `translate(0, ${y}px)`;
    titleItem.style.transform = `translate(0, ${y}px)`;
    borderItem.style.transform = `translate(0, ${y}px)`;
    this.style.transform = `translate(0, ${y}px)`;


    let img = this.querySelector('img');
    viewItemImg.src = img.src;
    viewItem.classList.add('active');
    document.body.style.overflow = 'hidden';

  })
});



viewItem.addEventListener('click', function (e) {
  if (!e.target.closest('img') || e.target.closest('.view__item-close')) {
    viewItem.classList.remove('active');
    for (let i = 0; i < serviceItem.length; i++) {
      let imgItem = serviceItem[i].querySelector('.service__card-img');
      let titleItem = serviceItem[i].querySelector('.service__card-title');
      let borderItem = serviceItem[i].querySelector('.service__card-border');

      imgItem.style.transform = `translate(0, 0)`;
      titleItem.style.transform = `translate(0, 0)`;
      borderItem.style.transform = `translate(0, 0)`;
      serviceItem[i].style.transform = `translate(0, 0)`;
      document.body.style.overflow = '';


    }
  }

});


