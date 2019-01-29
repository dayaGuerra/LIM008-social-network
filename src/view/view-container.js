import { objTempLogin } from './login.js'
import { objTempProfile } from './profile.js'

const changeTmp = (hash) => {
    if (hash === '#/' || hash === '' || hash === '#') {
      return viewTmp('#/singin');
    } else if (hash === '#/singup') {
        return viewTmp(hash);
    }else {
      return viewTmp('#/different');
    }
  }
  const viewTmp = (routers) => {
    const router = routers.substr(2, routers.length - 2)
    const container = document.getElementById("container")
    container.innerHTML = objTempLogin[router];
  }


  window.addEventListener('load', changeTmp(window.location.hash))
  if (("onhashchange" in window)) window.onhashchange = () => changeTmp(window.location.hash)
  
