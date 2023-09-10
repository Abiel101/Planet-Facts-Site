const hamburgerIcon = document.getElementById('hamburger-icon');
const mobileNav = document.getElementById('mobile-nav');

hamburgerIcon.addEventListener('click',  () => {
  mobileNav.classList.toggle('hide');
})


const overviewBtn = document.getElementById('overview-Btn');
const structureBtn = document.getElementById('structure-Btn');
const surfaceBtn = document.getElementById('surface-Btn');

const overviewBtn_td = document.getElementById('overview-Btn-lg');
const structureBtn_td = document.getElementById('structure-Btn-lg');
const surfaceBtn_td = document.getElementById('surface-Btn-lg');

const overviewContent = document.getElementById('overview-content');
const structureContent = document.getElementById('structure-content');
const surfaceContent = document.getElementById('surface-content');


// Mobile mode for switching content
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




// tablet & desktop mode for content
function changeContentTD(content1, content2, content3, btn1, btn2, btn3, planet){
  content1.classList.remove('hidden');
  content2.classList.add('hidden');
  content3.classList.add('hidden');
  btn1.classList.add(`active_${planet}-btn`);
  btn2.classList.remove(`active_${planet}-btn`);
  btn3.classList.remove(`active_${planet}-btn`);
}

overviewBtn_td.addEventListener('click', () =>{
  // changeContentTD(overviewContent, structureContent, surfaceContent, overviewBtn_td, structureBtn_td, surfaceBtn_td, 'mercury');
  console.log('first button clicked');
})
structureBtn_td.addEventListener('click', () =>{
  // changeContentTD(structureContent, overviewContent, surfaceContent, structureBtn_td, overviewBtn_td, surfaceBtn_td, 'mercury');
  console.log('first button clicked');
})
surfaceBtn_td.addEventListener('click', () =>{
  // changeContentTD(surfaceContent, structureContent, overviewContent, surfaceBtn_td, structureBtn_td, overviewBtn_td, 'mercury');
  console.log('first button clicked');
})
