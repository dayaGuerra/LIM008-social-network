import { createNewPost, deleteNoteOnClick, updateNoteOnClick, updateLikeOnClick, showPrivatePostOnClick} from '../lib/view-controller/view-controller-post.js';
import { logOutOnSubmit, changeHash } from '../lib/view-controller/view-controller-auth.js';
import {postDate} from '../lib/util/date.js';

export const filterSelect = () => {
  const createDivSelect = document.createElement('div');
  const templateSelect = `
  <select class="filter-post" id ="filter-type-post">
    <option disabled selected hidden> Mis publicaciones</option>
    <option value = "publico" >Todos</option>
    <option value = "privado">Privado</option>
  </select>
  `;
  return templateSelect;
};

const textareaEdit = (objNote) => {
  const createTextAreaEdit = document.createElement('div');
  createTextAreaEdit.setAttribute('id', 'edit-textarea');
  const tempEditTextarea = `
    <textarea id="textarea-post-${ objNote.id }" class= " textarea-post-wall" disabled autofocus>${objNote.title}</textarea>
  `;                    
  return tempEditTextarea;
};


export const addItemPost = (objNote, uid) => {
  const datePost = postDate(objNote.date.toDate());
  // const fileSelector = document.createElement('input');
  // fileSelector.setAttribute('type', 'file');
  // const buttonselectImage = document.createElement('button');
  // buttonselectImage.setAttribute('id', 'upload-image-btn');
  // buttonselectImage.innerText = 'Selecciona imagen';

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
         <div id="btn-confirmar-amor-${objNote.id}"> 
          ${objNote.uid === uid ? '<button class="material-icons"><i class="fa fa-trash-o" aria-hidden="true"></i></button>' : ''}

          </div>
        <div>
        
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
        <button id="btn-likes-post-${ objNote.id }"><img class="claps" src="img/aplausos.png"> <span id="number-likes-post">${objNote.likes}</span></button></div>
      </div>
      <div><button><img src="img/delete-button.png" class="icon"/></button></div>
      <div id = "hola-mi-amor-${ objNote.id }" class ="hola-clase">
      <span>Deseas eliminar este mensaje?</span>
      <button id="btn-delete-${objNote.id}"> si </button>
      <button  id="btn-delete-not-${objNote.id}"> no </button>
      </div>
      
      <div class="border-separation-post"></div>
    </div>
  `;
  postDataSection.querySelector(`#btn-likes-post-${objNote.id}`).addEventListener('click', () => {
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
  postDataSection.querySelector(`#btn-confirmar-amor-${objNote.id}`).addEventListener('click', () => {
    const viewModal = document.querySelector(`#hola-mi-amor-${ objNote.id }`);
    viewModal.style.display = 'block'; 
  });

  postDataSection.querySelector(`#btn-delete-${objNote.id}`).addEventListener('click', () => deleteNoteOnClick(objNote));
  
  postDataSection.querySelector(`#btn-delete-not-${objNote.id}`).addEventListener('click', () => {
    const viewModal = document.querySelector(`#hola-mi-amor-${ objNote.id }`);
    viewModal.style.display = 'none'; 
  });
  
  return postDataSection;
};

export const logOut = () => {
  const sectionElement = document.createElement('section');
  sectionElement.setAttribute('id', 'user-container');
  const profileTemplate = `
    <div class = "container-nav">
      <a href = "#/home"><i class="fa fa-home fa-1x"aria-hidden="true"></i></a>
    </div>

    <div class = "title-nav">
      <a id="title-red-social" class = "title-red-social"> Ayni </a>
    </div>

    <div class = "container-nav">
      <a id="sign-out-btn"><i class="fa fa-sign-out fa-1x"></i></a>
    </div>
    


  `;
  sectionElement.innerHTML = profileTemplate;
  const logoutBtn = sectionElement.querySelector('#sign-out-btn');
  logoutBtn.addEventListener('click', logOutOnSubmit);
  return sectionElement;
};

export const textarePublication = () => {
  const publicationSection = document.createElement('section');
  publicationSection.classList.add('section-post');
  const contentDivForPublication = `
   
    <div class="container-textarea">
      <textarea class="textarea-post" type="text" id="input-new-note" placeholder="Comparte tus ideas" required></textarea>
      <div class="btns-add-post-and-state">
        <select class="add-state-post" id ="state-post">
          <option value="publico">Amigos</option>
          <option value="privado">Privado</option>
        </select>
        <button class="btn-add-post" id="btn-add-post">Publicar</button>
        
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
    if (select.value === 'privado') {
      changeHash('#/privatePost');
      postList.appendChild(showPrivatePostOnClick('privado'));
    } else if (select.value === 'publico') {
      changeHash('#/publicPost');
      postList.appendChild(showPrivatePostOnClick('publico'));
    }
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
