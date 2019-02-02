import {addNewPost, deletePost, getAllPost} from '../controller/controller-post.js';

export const createNewPost = (event) => {
  event.preventDefault();
  // data que muestra el snackbar
  console.log('eventoingresoclick');
  const textMessage = document.querySelector('#input-new-note');
  console.log(textMessage);
  const data = {
    message: '',
    timeout: 2000,
    actionText: 'Undo'
  };

  addNewPost(textMessage.value)
    .then(() => {
      textMessage.value = '';
      data.message = 'Nota agregada';
      console.log('nota agregada');
    }).catch(() => {
      textMessage.value = '';
      data.message = 'Lo sentimos, no se pudo agregar la nota';
      console.log('nota no agregada');
    });
};

// esto es para mostrar los  Post
export const showPost = (notes) => {
  containerNotesList.innerHTML = '';
  notes.forEach((objNote) => {
    const divElement = document.createElement('div');
    divElement.classList.add('mdl-list__item');
    divElement.innerHTML = `
            <span class="mdl-list__item-primary-content">
              <span>${objNote.title}</span>
            </span>
            <a class="mdl-list__item-secondary-action" id="btn-deleted-${objNote.id}" href="#">
              <i class="material-icons">delete</i>
            </a>
          `;
    containerNotesList.appendChild(divElement);
  
    // agregando evento de click al btn eliminar una nota
    document.querySelector(`#btn-deleted-${objNote.id}`)
      .addEventListener('click', () => {
        deletePost(objNote.id);
      });
  });
};
    
  