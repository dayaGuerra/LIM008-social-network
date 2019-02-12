import { createNewPost, deleteNoteOnClick, updateNoteOnClick, updateLikeOnClick, showPrivatePostOnClick} from '../lib/view-controller/view-controller-post.js';
import { logOutOnSubmit, changeHash } from '../lib/view-controller/view-controller-auth.js';
import {postDate} from '../lib/util/app.js';

export const filterSelect = () => {
  const createDivSelect = document.createElement('div');
  const templateSelect = `
  <select class="add-state-post" id ="filter-type-post">
    <option value = "publico" >Todos</option>
    <option value = "privado">Privado</option>
  </select>
  `;
  // createDivSelect.innerHTML = templateSelect;
  // const select = createDivSelect.querySelector('#filter-type-post');
  
  return templateSelect;

}

const textareaEdit = (objNote) => {
  const createTextAreaEdit = document.createElement('div');
  createTextAreaEdit.setAttribute('id', 'edit-textarea');
  const tempEditTextarea = `
    <textarea id="textarea-post-${ objNote.id }" class= " textarea-post-wall textare-post-hidden" disabled>${objNote.title}</textarea>
  `;                    
  return tempEditTextarea;
};


export const addItemPost = (objNote, uid) => {
  const datePost = postDate(objNote.date.toDate());
  const postDataSection = document.createElement('section');
  postDataSection.classList.add('list-post');
  postDataSection.innerHTML = `
    <div class="post-total">
      <div class="container-data-post">
        
        <div class = "data-post-name-state">
          <img class="img-post" src="${ objNote.profilePicUrl }" alt="imagen del usuario"/>
          <span class="user-display-name"> ${ objNote.name } </span>
          ${ objNote.state === 'publico' ? '<i class="fa fa-globe" aria-hidden="true"></i>' : ' <i class="fa fa-lock" aria-hidden="true"></i>' } 
          <span class = "user-display-time"> ${ datePost } </span>
        </div>

        <div class ="btn-post-delete-edit">
          
          <div id="btn-deleted-${objNote.id}"> 
          ${objNote.uid === uid ? '<button class="material-icons"><i class="fa fa-trash-o" aria-hidden="true"></i></button>' : ''}
          </div>
          
          <div id="btn-edit-${objNote.id}"> 
          ${objNote.uid === uid ? '<button class="material-icons"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>' : ''}
          </div>
          
          <div class="btn-save-edit-post" id="btn-save-${objNote.id}"> 
          ${objNote.uid === uid ? '<button class="material-icons" ><i class="fa fa-floppy-o" aria-hidden="true"></i></button>' : ''}
          </div>

        </div>

      </div>
      <div class="txt-post">
        <span>${textareaEdit(objNote)}</span>
      <div>
        <button id="btn-likes-post-${ objNote.id }"><i class="fa fa-heart-o" aria-hidden="true"></i> <span id="number-likes-post">${objNote.likes}</span></button></div>
      </div>
      <div class="border-separation-post"></div>
    </div>
  `;
    
  // agregando evento de click al btn eliminar una nota
  postDataSection.querySelector(`#btn-likes-post-${objNote.id}`).addEventListener('click', () => {
    // console.log('tiene like :' + countLike);
    updateLikeOnClick(objNote, objNote.likes += 1);
  });


  postDataSection.querySelector(`#btn-edit-${objNote.id}`).addEventListener('click', () => {
    const textareaPost = document.querySelector(`#textarea-post-${objNote.id}`);
    textareaPost.disabled = false;
    const btnEditNone = document.querySelector(`#btn-edit-${objNote.id}`);
    btnEditNone.style.display = 'none';
    const btnSaveBlock = document.querySelector(`#btn-save-${objNote.id}`);
    btnSaveBlock.style.display = 'block';
  });
  
  postDataSection.querySelector(`#btn-save-${objNote.id}`).addEventListener('click', () => {
    const textareaPos = document.querySelector(`#textarea-post-${objNote.id}`);
    updateNoteOnClick(objNote, textareaPos.value);
  });
  postDataSection.querySelector(`#btn-deleted-${objNote.id}`).addEventListener('click', () => 
    deleteNoteOnClick(objNote)
    // const modalConfirm = `<div></div>`;
  
    // modalConfirm.innerHTML
  );
  return postDataSection;
};

export const logOut = () => {
  const sectionElement = document.createElement('section');
  sectionElement.setAttribute('id', 'user-container');
  const profileTemplate = `
    <div class = "container-nav">
      <a id="sign-out-btn"><i class="fa fa-sign-out fa-3x"></i></a>
    </div>
  `;
  sectionElement.innerHTML = profileTemplate;
  const logoutBtn = sectionElement.querySelector('#sign-out-btn');
  logoutBtn.addEventListener('click', logOutOnSubmit);
  return sectionElement;
};

/* Publicacion */
export const textarePublication = () => {
  const publicationSection = document.createElement('section');
  const contentDivForPublication = `
    <div class="container-textarea">
      <textarea class="textarea-post" type="text" id="input-new-note" placeholder="Agrega un post" required></textarea>
      <div class="btns-add-post-and-state">
        <button class="btn-add-post" id="btn-add-post"><i class="material-icons">Compartir</i></button>
        <select class="add-state-post" id ="state-post">
          <option value="publico">Amigos</option>
          <option value="privado">Privado</option>
        </select>
      </div>
    </div>
    <div>${filterSelect()}</div>
  `;
  publicationSection.innerHTML = contentDivForPublication;
  publicationSection.querySelector('#btn-add-post').addEventListener('click', createNewPost);
  return publicationSection;
};



/* Post */
export const postListSection = (notes, uid) => {
  const createPostInWall = document.createElement('section');
  const contentPostInWall = ` 
    <div id="post-list"></div>
  `;
  createPostInWall.innerHTML = contentPostInWall;
  const postList = createPostInWall.querySelector('#post-list');
  notes.forEach((objnote) => {
    if (objnote.state === 'privado' && objnote.uid === uid) {
      postList.appendChild(addItemPost(objnote, uid));
    } else if (objnote.state === 'publico') {
      postList.appendChild(addItemPost(objnote, uid));
    }
  });
  const select = document.querySelector('#filter-type-post');
  select.addEventListener('change', () => {
    changeHash('#/privatePost')
    postList.appendChild(showPrivatePostOnClick(select));
  });
  
  return createPostInWall;
};


export const postListSectionnn = () => {
  const createPostInWalle = document.createElement('section');
  const contentPostInWalle = ` 
    <div id="post-listu"></div>
  `;
  createPostInWalle.innerHTML = contentPostInWalle;
  const postListu = createPostInWalle.querySelector('#post-listu');
 
  
  
  return createPostInWalle;
};
// export const postListBySelect = () => {
//   const createPostInWall = document.createElement()
// }