import { createNewPost, deleteNoteOnClick } from '../lib/view-controller/view-controller-post.js';
import { logOutOnSubmit } from '../lib/view-controller/view-controller-auth.js';
import {addNewPost} from '../lib/controller/controller-post.js';
const addItemPost = (objNote, uid) => {
 
  const liElement = document.createElement('div');
  liElement.classList.add('list-post');
  liElement.innerHTML = `
      <div class="post-total">
      <div class = "container-data-post">
        <img class = "img-post" src="${objNote.profilePicUrl}"/>
        <span class="user-display-name">${objNote.name}</span>
        <span class = "user-display-time">${objNote.timestamp}</span>
      </div>
      <div class = "txt-post">
      <span>${objNote.title}</span>
  

      <a class="mdl-list__item-secondary-action" id="btn-deleted-${objNote.id}">
      ${ objNote.uid === uid ? 
    '<button type = "button" class="material-icons">delete</button>' : ''}
      </a>
      </div>
      <div class = "border-separation-post"></div>
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
        <div class="container-textarea">

          <textarea class="textarea-post" type="text" id="input-new-note" placeholder = "Agrega un post" required></textarea>
          <button class="btn-add-post" id="btn-add-note">
          <i class="material-icons">Compartir</i>
          </button>
        </div>
    
     

        <div class = "border-separation-post"></div>
        <div id="demo-snackbar-example" class="mdl-js-snackbar mdl-snackbar">
         
      </form>
      <!-- notes -->
        <section id="notes-list">
        </section>
        
    
      
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