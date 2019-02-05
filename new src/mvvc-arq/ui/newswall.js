import { createNewPost, deleteNoteOnClick } from '../lib/view-controller/view-controller-post.js';
import { logOutOnSubmit } from '../lib/view-controller/view-controller-auth.js';

const addItemPost = (objNote, uid) => {
  const liElement = document.createElement('div');
  liElement.classList.add('list-post');
  liElement.innerHTML = `
      <div class="post-total">
      <div class = "container-data-post">
        <img class = "img-post" src="${objNote.profilePicUrl}"/>
        <span class="user-display-name">${objNote.name}</span>
        <span class = "user-display-time">${objNote.date}</span>
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
  
export const logOut = () => {
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

/* Publicacion */
export const textareapublication = () => {
  const createDivForPublication = document.createElement('div');
  const contentDivForPublication = `
    <div class="container-textarea">
    <textarea class="textarea-post" type="text" id="input-new-note" placeholder = "Agrega un post" required></textarea>
    <button class="btn-add-post" id="btn-add-post">
      <i class="material-icons">Compartir</i>
    </button>
    </div>
  `;
  createDivForPublication.innerHTML = contentDivForPublication;
  const btnAddPost = createDivForPublication.querySelector('#btn-add-post');
  btnAddPost.addEventListener('click', createNewPost);
  return createDivForPublication;
};

/* Post */
export const tmpPostInSection = (notes, uid) => {
  const createPostInWall = document.createElement('section');
  const contentPostInWall = ` 
    <div id="post-list"></div>
  `;
  createPostInWall.innerHTML = contentPostInWall;

  const postList = createPostInWall.querySelector('#post-list');
  notes.forEach((note) => {
    postList.appendChild(addItemPost(note, uid));
  });
  return createPostInWall;
};
