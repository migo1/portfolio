const projectData = [
  {
    id: 0,
    name: 'Tonic',
    summary: 'A daily selection of privately personalized reads; no accounts or sign-ups required .',
    image_mobile: 'images/work1.png',
    image_desk: 'images/desktop/work1.png',
    tech_stack: ['html', 'css', 'java script'],
    project_experience: ['CANOPY', 'Back End Dev', 2015],
    link_live: 'https://www.youtube.com/watch?v=9EcjWd-O4jI&ab_channel=TechnotronicVEVO',
    link_repo: 'https://github.com/migo1/portfolio',
    modal_data: {
      languages: ['html', 'css', 'java script', 'Ruby', 'Bootstrap'],
      desc: 'Lorem Ipsum is simply dummy text of the printing industry.unknown printer took a galley of typeand scrambled it to make a type. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.',
    },
  },
  {
    id: 1,
    name: 'Tonic',
    summary: 'A daily selection of privately personalized reads; no accounts or sign-ups required .',
    image_mobile: 'images/work2.png',
    image_desk: 'images/desktop/work2.png',
    tech_stack: ['html', 'css', 'java script'],
    project_experience: ['CANOPY', 'Back End Dev', 2015],
    link_live: 'https://www.youtube.com/watch?v=9EcjWd-O4jI&ab_channel=TechnotronicVEVO',
    link_repo: 'https://github.com/migo1/portfolio',
    modal_data: {
      languages: ['html', 'css', 'java script', 'Ruby', 'Bootstrap'],
      desc: 'Lorem Ipsum is simply dummy text of the printing industry.unknown printer took a galley of typeand scrambled it to make a type. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.',
    },
  },
  {
    id: 2,
    name: 'Tonic',
    summary: 'A daily selection of privately personalized reads; no accounts or sign-ups required .',
    image_mobile: 'images/work3.png',
    image_desk: 'images/desktop/work3.png',
    tech_stack: ['html', 'css', 'java script'],
    project_experience: ['CANOPY', 'Back End Dev', 2015],
    link_live: 'https://www.youtube.com/watch?v=9EcjWd-O4jI&ab_channel=TechnotronicVEVO',
    link_repo: 'https://github.com/migo1/portfolio',
    modal_data: {
      languages: ['html', 'css', 'java script', 'Ruby', 'Bootstrap'],
      desc: 'Lorem Ipsum is simply dummy text of the printing industry.unknown printer took a galley of typeand scrambled it to make a type. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.',
    },
  },
  {
    id: 3,
    name: 'Tonic',
    summary: 'A daily selection of privately personalized reads; no accounts or sign-ups required .',
    image_mobile: 'images/work3.png',
    image_desk: 'images/desktop/work3.png',
    tech_stack: ['html', 'css', 'java script'],
    project_experience: ['CANOPY', 'Back End Dev', 2015],
    link_live: 'https://www.youtube.com/watch?v=9EcjWd-O4jI&ab_channel=TechnotronicVEVO',
    link_repo: 'https://github.com/migo1/portfolio',
    modal_data: {
      languages: ['html', 'css', 'java script', 'Ruby', 'Bootstrap'],
      desc: 'Lorem Ipsum is simply dummy text of the printing industry.unknown printer took a galley of typeand scrambled it to make a type. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.',
    },
  },
];

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
  button.addEventListener('click', () => {
    const dialog = document.createElement('dialog');
    dialog.classList.add('project-modal');
    dialog.setAttribute('id', 'modal');
    const modalHeader = document.createElement('div');
    modalHeader.classList.add('mobile-modal-header');
    const modalHeading = document.createElement('h3');
    modalHeading.classList.add('modal-mobile-heading');
    modalHeading.innerText = projectData[i].name;
    const modalCloseButton = document.createElement('img');
    modalCloseButton.classList.add('mobile-modal-icon');
    modalCloseButton.setAttribute('src', './images/modal/closeModal.png');
    modalCloseButton.setAttribute('alt', `mobile work${projectData[i].id} image`);
    modalCloseButton.addEventListener('click', () => {
      dialog.close();
      cardDiv.removeChild(dialog);
    });
    modalHeader.appendChild(modalHeading);
    modalHeader.appendChild(modalCloseButton);
    dialog.appendChild(modalHeader);
    const modalList = document.createElement('ul');
    modalList.classList.add('project-experience');
    for (let q = 0; q < projectData[i].project_experience.length; q += 1) {
      const modalListItem = document.createElement('li');
      if (q === 0) {
        modalListItem.classList.add('first-list');
        modalListItem.textContent = projectData[i].project_experience[q];
      } else {
        modalListItem.classList.add('other-list');
        modalListItem.textContent = projectData[i].project_experience[q];
      }
      modalList.appendChild(modalListItem);
    }
    const modalPicture = document.createElement('picture');
    modalPicture.classList.add('modal-picture');
    const modalImg = document.createElement('img');
    modalImg.classList.add('m-modal-image');
    modalImg.setAttribute('src', projectData[i].image_mobile);
    modalImg.setAttribute('alt', `mobile work${projectData[i].id} image`);
    modalPicture.appendChild(source1);
    modalPicture.appendChild(source2);
    modalPicture.appendChild(modalImg);
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    const modalDesc = document.createElement('p');
    modalDesc.classList.add('m-modal-desc');
    modalDesc.innerText = projectData[i].modal_data.desc;
    const modalRightContent = document.createElement('div');
    modalRightContent.classList.add('modal-right-content');
    const modalLanguages = document.createElement('ul');
    modalLanguages.classList.add('m-modal-lang');
    for (let x = 0; x < projectData[i].tech_stack.length; x += 1) {
      const modalLangList = document.createElement('li');
      modalLangList.classList.add('m-lang-list');
      modalLangList.innerText = projectData[i].tech_stack[x];
      modalLanguages.appendChild(modalLangList);
    }
    const hr = document.createElement('hr');
    const modalLinks = document.createElement('div');
    modalLinks.classList.add('m-modal-links');
    const modalButtonOne = document.createElement('button');
    modalButtonOne.classList.add('m-modal-btn');
    const modalDetailOne = document.createElement('p');
    modalDetailOne.innerText = 'See live';
    const modalSpanOne = document.createElement('span');
    const spanOneImg = document.createElement('img');
    spanOneImg.classList.add('m-modal-icon');
    spanOneImg.setAttribute('src', './images/IconExport.png');
    const modalButtonTwo = document.createElement('button');
    modalButtonTwo.classList.add('m-modal-btn');
    const modalDetailTwo = document.createElement('p');
    modalDetailTwo.innerText = 'See source';
    const modalSpanTwo = document.createElement('span');
    const spanTwoImg = document.createElement('img');
    spanTwoImg.setAttribute('src', './images/IconGitHub.png');
    spanTwoImg.classList.add('m-modal-icon');
    modalSpanTwo.appendChild(spanTwoImg);
    modalButtonTwo.appendChild(modalDetailTwo);
    modalButtonTwo.appendChild(modalSpanTwo);
    modalSpanOne.appendChild(spanOneImg);
    modalButtonOne.appendChild(modalDetailOne);
    modalButtonOne.appendChild(modalSpanOne);
    modalLinks.appendChild(modalButtonOne);
    modalLinks.appendChild(modalButtonTwo);
    modalRightContent.appendChild(modalLanguages);
    modalRightContent.appendChild(hr);
    modalRightContent.appendChild(modalLinks);
    modalContent.appendChild(modalDesc);
    modalContent.appendChild(modalRightContent);
    dialog.appendChild(modalList);
    dialog.appendChild(modalPicture);
    dialog.appendChild(modalContent);
    cardDiv.appendChild(dialog);
    dialog.showModal();
  });
  cardContent.appendChild(cardTitle);
  cardContent.appendChild(projectExperience);
  cardContent.appendChild(projectSummary);
  cardContent.appendChild(teckStack);
  cardContent.appendChild(button);
  cardDiv.appendChild(cardContent);
  project.appendChild(cardDiv);
}
// query the form
const form = document.querySelector('.contact-form');
// query the input field email that can be validated
const emailInput = document.querySelector('#email');

const errorMessage = document.querySelector('.email-error-message');

form.addEventListener('submit', (e) => {
  if (emailInput.value.toLowerCase() !== emailInput.value) {
    e.preventDefault();
    errorMessage.style.display = 'block';
  }
});