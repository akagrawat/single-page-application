"use strict";

import Navbar from './views/Header.js';
import Home  from './views/Home.js';
import About  from './views/About.js';
import Contactus  from './views/Contactus.js';
import Error404  from './views/Error404.js';
import Bottembar  from './views/Footer.js';


const routes = {
   
  '#/' : Home,
  '#/about' : About,
  '#/contactus': Contactus,
  '#/404': Error404
};

// Here '#/about' is used to restrict server request
// When Browser hit # character in url than it will not send request to server


const router = async () => {
  
  const header = null || document.getElementById('header_container');
  const content = null || document.getElementById('page_container');
  const footer = null || document.getElementById('footer_container');

  //put data in header part
  header.innerHTML = await Navbar.render(); 
  // render() is a function --decalred in header.js -- that is used to bind header data and it will be execute when it will call
  // if we don't bind data inside any function than it will show everypage

  await Navbar.after_render()
  footer.innerHTML = await Bottembar.render();
  await Bottembar.after_render();

  // Here we check url in routes 
  let page = routes[window.location.hash] ? routes[window.location.hash] : Error404;

  content.innerHTML = await page.render();
   await page.after_render();
}

window.addEventListener('hashchange', router); 
window.addEventListener('load', router);