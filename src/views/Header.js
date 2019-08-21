let Navbar = {
  render: async () => {
      let view =  /*html*/`
           <nav class="navbar" >
              <div class="container">
                  
                  <div>
                      <div class="navbar-start">
                          <a class="navbar-item" href="/#/">
                              Home
                          </a>
                          <a class="navbar-item" href="/#/about">
                              About
                          </a>
                          <a class="navbar-item" href="/#/contactus">
                              Contactus
                          </a>
                      </div>
                      
                  </div>
              </div>
          </nav>
      `
      return view
  },
  after_render: async () => { }

}

export default Navbar;