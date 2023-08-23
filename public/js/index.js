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


function changeContent(content1, content2, content3){
  content1.classList.remove('hidden');
  content2.classList.add('hidden');
  content3.classList.add('hidden');
}
overviewBtn.addEventListener('click', () => {
  changeContent(overviewContent, structureContent, surfaceContent)
  overviewBtn.classList.add('active');
  structureBtn.classList.remove('active');
  surfaceBtn.classList.remove('active');
})
structureBtn.addEventListener('click', () => {
  changeContent(structureContent, overviewContent, surfaceContent)
  overviewBtn.classList.remove('active');
  structureBtn.classList.add('active');
  surfaceBtn.classList.remove('active');
})
surfaceBtn.addEventListener('click', () => {
  changeContent(surfaceContent, structureContent, overviewContent)
  overviewBtn.classList.remove('active');
  structureBtn.classList.remove('active');
  surfaceBtn.classList.add('active');
})
