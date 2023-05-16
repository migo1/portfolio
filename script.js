import projectData from './projectData.js';

const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav');
const closeBtn = document.querySelector('.mobile-cancel');
const menuItems = document.querySelectorAll('.mobile-item-nav');
function toggleMenu() {
  if (mobileMenu.style.display === 'block') {
    mobileMenu.style.display = 'none';
  } else {
    mobileMenu.style.display = 'block';
  }
}
hamburger.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);
window.addEventListener('click', (e) => {
  if (e.target === mobileMenu) {
    mobileMenu.style.display = 'none';
  }
});
for (let i = 0; i < menuItems.length; i += 1) {
  menuItems[i].addEventListener('click', toggleMenu);
}
const project = document.getElementById('projects');
for (let i = 0; i < projectData.length; i += 1) {
  const cardDiv = document.createElement('div');
  if (projectData[i].id % 2 === 1) {
    cardDiv.classList.add('card', 'card-inverse');
  } else {
    cardDiv.classList.add('card');
  }
  const imageDiv = document.createElement('div');
  imageDiv.classList.add('image');
  const picture = document.createElement('picture');
  const source1 = document.createElement('source');
  source1.setAttribute('media', '(max-width: 767px)');
  source1.setAttribute('srcset', projectData[i].image_mobile);
  const source2 = document.createElement('source');
  source2.setAttribute('media', '(min-width: 768px)');
  source2.setAttribute('srcset', projectData[i].image_desk);
  const img = document.createElement('img');
  img.classList.add('card-image');
  img.setAttribute('src', projectData[i].image_mobile);
  img.setAttribute('alt', `mobile work${projectData[i].id} image`);
  picture.appendChild(source1);
  picture.appendChild(source2);
  picture.appendChild(img);
  imageDiv.appendChild(picture);
  cardDiv.appendChild(imageDiv);
  const cardContent = document.createElement('div');
  cardContent.classList.add('card-content');
  const cardTitle = document.createElement('h3');
  cardTitle.classList.add('card-title');
  cardTitle.innerText = projectData[i].name;
  const projectExperience = document.createElement('ul');
  projectExperience.classList.add('project-experience');
  for (let j = 0; j < projectData[i].project_experience.length; j += 1) {
    const listItem = document.createElement('li');
    if (j === 0) {
      listItem.classList.add('first-list');
      listItem.textContent = projectData[i].project_experience[j];
    } else {
      listItem.classList.add('other-list');
      listItem.textContent = projectData[i].project_experience[j];
    }
    projectExperience.appendChild(listItem);
  }
  const projectSummary = document.createElement('p');
  projectSummary.classList.add('project-summary');
  projectSummary.innerText = projectData[i].summary;
  const teckStack = document.createElement('ul');
  teckStack.classList.add('tech-stack');
  for (let k = 0; k < projectData[i].tech_stack.length; k += 1) {
    const teckList = document.createElement('li');
    teckList.innerText = projectData[i].tech_stack[k];
    teckStack.appendChild(teckList);
  }
  const button = document.createElement('button');
  button.classList.add('btn-primary-outline');
  button.innerText = 'See Project';
  cardContent.appendChild(cardTitle);
  cardContent.appendChild(projectExperience);
  cardContent.appendChild(projectSummary);
  cardContent.appendChild(teckStack);
  cardContent.appendChild(button);
  cardDiv.appendChild(cardContent);
  project.appendChild(cardDiv);
}