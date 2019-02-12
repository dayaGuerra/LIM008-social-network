import {addNewPost, deletePost, updateTitle, updateLikePost, privatePost} from '../controller/controller-post.js';
import { isUserSignedIn } from '../view-controller/view-controller-auth.js';
import {validation} from '../controller/validacion.js';
import { getUserName, getProfilePicUrl } from '../view-controller/view-controller-auth.js';
import { addItemPost } from '../../ui/newswall.js';
// --importando todas las funciones que necesitamos ---!//

export const createNewPost = (event) => {
  event.preventDefault();
  const statePost = document.querySelector('#state-post');
  const textMessage = document.querySelector('#input-new-note');
  const valueTextMessage = textMessage.value;
  let countLike = 0;
  if (validation(valueTextMessage) === true) {
    const uidUser = isUserSignedIn();
    const data = {
      message: '',
      timeout: 2000,
      actionText: 'Undo'
    };
    const name = getUserName();
    const image = getProfilePicUrl();
    addNewPost(textMessage.value, uidUser, name, image, statePost.value, countLike)
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
    alert('no puedes publicar si esta vacío el post');
  }
};

export const deleteNoteOnClick = (objNote) =>
  deletePost(objNote.id);

export const updateNoteOnClick = (objNote, title) => {
  return updateTitle(objNote.id, title);
};

export const updateLikeOnClick = (objNote, like) => {
  return updateLikePost(objNote.id, like);
};

export const showPrivatePostOnClick = (select) => {
privatePost(post => {
  console.log(post)
  return post;
  post.forEach(element => {
    return (addItemPost(element, isUserSignedIn()))
  });
},isUserSignedIn(),select.value)

};
