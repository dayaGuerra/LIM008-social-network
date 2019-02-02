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

export const deleteNoteOnClick = (objNote) =>
  deletePost(objNote.id);