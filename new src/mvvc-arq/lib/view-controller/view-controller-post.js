import {addNewPost, deletePost, updateTitlle} from '../controller/controller-post.js';
import { isUserSignedIn } from '../view-controller/view-controller-auth.js';
import {validation} from '../controller/validacion.js';
import { getUserName, getProfilePicUrl } from '../view-controller/view-controller-auth.js';

// --importando todas las funciones que necesitamos ---!//

export const createNewPost = (event) => {
  event.preventDefault();
  const statePost = document.querySelector('#state-post');
  const textMessage = document.querySelector('#input-new-note');
  const valueTextMessage = document.querySelector('#input-new-note').value;
  console.log(typeof(statePost.toString()));
  if (validation(valueTextMessage) === true) {
    const uidUser = isUserSignedIn();
    const data = {
      message: '',
      timeout: 2000,
      actionText: 'Undo'
    };
    const name = getUserName();
    const image = getProfilePicUrl();
    addNewPost(textMessage.value, uidUser, name, image, statePost.value)
      .then(() => {
        textMessage.value = '';
        data.message = 'Nota agregada';
        console.log('nota agregada');
      }).catch(() => {
        textMessage.value = '';
        data.message = 'Lo sentimos, no se pudo agregar la nota';
        console.log('nota no agregada');
      });
  } else {
    alert('no puedes publicar si esta vacío el post xD');
  }
};

export const deleteNoteOnClick = (objNote) =>
  deletePost(objNote.id);

export const updateNoteOnClick = (objNote, title) => {
  return updateTitlle(objNote.id, title);
};

