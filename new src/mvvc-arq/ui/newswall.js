import { createNewPost, deleteNoteOnClick, updateNoteOnClick, updateLikeOnClick} from '../lib/view-controller/view-controller-post.js';
import { logOutOnSubmit } from '../lib/view-controller/view-controller-auth.js';

const textareaEdit = (objNote) => {
  const createTextAreaEdit = document.createElement('div');
  createTextAreaEdit.setAttribute('id', 'edit-textarea');
  const tempEditTextarea = `
  <textarea id = "textarea-post-${objNote.id}" class = "textarea-post textarea-ocult" disabled >${objNote.title}</textarea>
  `;
  return tempEditTextarea;
};


const addItemPost = (objNote, uid) => {
  const liElement = document.createElement('div');
  liElement.classList.add('list-post');
  liElement.innerHTML = `
    <div class="post-total">
      <div class = "container-data-post">
        <img class = "img-post" src="${objNote.profilePicUrl}" alt="imagen del usuario"/>
        <span class="user-display-name">${objNote.name}</span>
            ${ objNote.state === 'publico' ? '<i class="fa fa-globe" aria-hidden="true"></i>' : ' <i class="fa fa-lock" aria-hidden="true"></i>'}
         
        <span class = "user-display-time">${objNote.date}</span>
        <div>
          <a id="btn-deleted-${objNote.id}"> 
            ${ objNote.uid === uid ? '<button type = "button" class="material-icons"><i class="fa fa-trash-o" aria-hidden="true"></i></button>' : ''}
          </a>
          <a id="btn-edit-${objNote.id}"> 
            ${ objNote.uid === uid ? '<button type = "button" class="material-icons"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>' : ''}
          </a>
          <a class="btn-save-edit-post" id="btn-save-${objNote.id}"> 
            ${ objNote.uid === uid ? '<button type = "button" class="material-icons" ><i class="fa fa-floppy-o" aria-hidden="true"></i></button>' : ''}
          </a>
        </div>
      </div>
      <div class = "txt-post">
        <span>${textareaEdit(objNote)}</span>
        <div><button id = "btn-likes-post-${objNote.id}"><i class="fa fa-heart-o" aria-hidden="true"></i><span id = "number-likes-post">${objNote.likes}</span></button></div>
      </div>
      <div class = "border-separation-post"></div>
    </div>
    `;
    
  // agregando evento de click al btn eliminar una nota
  liElement.querySelector(`#btn-likes-post-${objNote.id}`).addEventListener('click', () => {
    // console.log('tiene like :' + countLike);
    updateLikeOnClick(objNote, objNote.likes += 1);
  });


  liElement.querySelector(`#btn-edit-${objNote.id}`).addEventListener('click', () => {
    const textareaPost = document.querySelector(`#textarea-post-${objNote.id}`);
    textareaPost.disabled = false;
    const btnEditNone = document.querySelector(`#btn-edit-${objNote.id}`);
    btnEditNone.style.display = 'none';
    const btnSaveBlock = document.querySelector(`#btn-save-${objNote.id}`);
    btnSaveBlock.style.display = 'block';
  });
  
  liElement.querySelector(`#btn-save-${objNote.id}`).addEventListener('click', () => {
    const textareaPos = document.querySelector(`#textarea-post-${objNote.id}`);
    updateNoteOnClick(objNote, textareaPos.value);
  });
  liElement.querySelector(`#btn-deleted-${objNote.id}`).addEventListener('click', () => deleteNoteOnClick(objNote));
  return liElement;
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
export const textareapublication = () => {
  const createDivForPublication = document.createElement('div');
  const contentDivForPublication = `
    <div class = "container-textarea">
      <textarea class="textarea-post" type="text" id="input-new-note" placeholder = "Agrega un post" required></textarea>
      <div class = "btns-add-post-and-state">
      <button class="btn-add-post" id="btn-add-post"><i class="material-icons">Compartir</i></button>
    <select class = "add-state-post" id ="state-post">
    <option value = "publico">Amigos</option>
    <option value  = "privado">Privado</option>
    </select>
    </div>
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
  notes.forEach((objnote) => {
    if (objnote.state === 'privado' && objnote.uid === uid) {
      postList.appendChild(addItemPost(objnote, uid));
    } else if (objnote.state === 'publico') {
      postList.appendChild(addItemPost(objnote, uid));
    }
  });
  return createPostInWall;
};
