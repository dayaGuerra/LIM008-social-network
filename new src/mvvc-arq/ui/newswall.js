import { createNewPost, deleteNoteOnClick } from '../lib/view-controller/view-controller-post.js';
import { logOutOnSubmit } from '../lib/view-controller/view-controller-auth.js';
import {addNewPost} from '../lib/controller/controller-post.js';
const addItemPost = (objNote, uid) => {
  const liElement = document.createElement('li');
  liElement.classList.add('mdl-list__item');
  liElement.innerHTML = `
      <span class="mdl-list__item-primary-content">
      <span class="user-display-name">${objNote.name}</span>
        <span>${objNote.timestamp}</span>
        <img src="${objNote.profilePicUrl}" class="user-profile-picture"/>
        <span>${objNote.title}</span>
      </span>
      <a class="mdl-list__item-secondary-action" id="btn-deleted-${objNote.id}">
      ${ objNote.uid === uid ? 
    '<button type = "button" class="material-icons">delete</button>' : ''}
      </a>
    `;
  // agregando evento de click al btn eliminar una nota
  liElement.querySelector(`#btn-deleted-${objNote.id}`)
    .addEventListener('click', () => deleteNoteOnClick(objNote));
  return liElement;
};
  
export const profileContainer = () => {
  const sectionElement = document.createElement('section');
  sectionElement.setAttribute('id', 'user-container');
  const profileTemplate = `
    <div  id="user-pic">
    <button  id="sign-out-btn">Cerrar sesión</button>
    </div>
  `;
  sectionElement.innerHTML = profileTemplate;
  const logoutBtn = sectionElement.querySelector('#sign-out-btn');
  logoutBtn.addEventListener('click', logOutOnSubmit);

  return sectionElement;
};

export const createPost = (notes, uid) => {
  const divContainer = document.createElement('div');
  const homeContent = `
      <!-- form add note -->
      <form class="d-flex justify-content-center">
        <div class="mdl-textfield mdl-js-textfield">
          <input class="mdl-textfield__input" type="text" id="input-new-note" required >
          <label class="mdl-textfield__label" for="input-new-note" >Agrega una nota...</label>
        </div>
        <button class="mx-1 mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" id="btn-add-note">
          <i class="material-icons">add</i>
        </button>
        <div id="demo-snackbar-example" class="mdl-js-snackbar mdl-snackbar">
          <div class="mdl-snackbar__text"></div>
          <button class="mdl-snackbar__action" type="button"></button>
        </div>
      </form>
      <!-- notes -->
      <section class="w-60 d-flex justify-content-center m-auto">
        <ul class="w-100 demo-list-control mdl-list" id="notes-list">
        </ul>
      </section>
      <!-- snackbar -->
      <div id="demo-snackbar" class="mdl-js-snackbar mdl-snackbar">
        <div class="mdl-snackbar__text"></div>
        <button class="mdl-snackbar__action" type="button"></button>
        <div hidden id="user-pic"></div>
        <div hidden id="user-name"></div>
        <button hidden id="sign-out-btn">Cerrar sesión</button>
      </div>
    `;
  divContainer.innerHTML = homeContent;
  const buttonAddNote = divContainer.querySelector('#btn-add-note');
  const ul = divContainer.querySelector('#notes-list');
  notes.forEach((note) => {
    // console.log(note, uid);
    ul.appendChild(addItemPost(note, uid));
  });
  buttonAddNote.addEventListener('click', createNewPost);
 
  // const signoutBtn = document.querySelector('#sign-out-btn');
  // signoutBtn.addEventListener('click', logOutOnSubmit);
  return divContainer;
};