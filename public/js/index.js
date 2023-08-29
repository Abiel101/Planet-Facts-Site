const hamburgerIcon = document.getElementById('hamburger-icon');
const mobileNav = document.getElementById('mobile-nav');

hamburgerIcon.addEventListener('click',  () => {
  mobileNav.classList.toggle('hide');
})


const overviewBtn = document.getElementById('overview-Btn');
const structureBtn = document.getElementById('structure-Btn');
const surfaceBtn = document.getElementById('surface-Btn');

const overviewContent = document.getElementById('overview-content');
const structureContent = document.getElementById('structure-content');
const surfaceContent = document.getElementById('surface-content');


function changeContent(content1, content2, content3, btn1, btn2, btn3){
  content1.classList.remove('hidden');
  content2.classList.add('hidden');
  content3.classList.add('hidden');
  btn1.classList.add('active');
  btn2.classList.remove('active');
  btn3.classList.remove('active');
}
overviewBtn.addEventListener('click', () => {
  changeContent(overviewContent, structureContent, surfaceContent, overviewBtn, structureBtn, surfaceBtn);
})
structureBtn.addEventListener('click', () => {
  changeContent(structureContent, overviewContent, surfaceContent, structureBtn, overviewBtn, surfaceBtn);
})
surfaceBtn.addEventListener('click', () => {
  changeContent(surfaceContent, structureContent, overviewContent, surfaceBtn, overviewBtn, structureBtn);
})
