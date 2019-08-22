let Navbar = {
  render: async () => {
      let view =  /*html*/`
           <header>
				<nav>
				<h1><span>D</span>iwi</h1>
					<ul>
						<li><a href="/#/"> Home </a></li>
						<li><a href="/#/service">Services</a></li>
						<li><a href="/#/about">About us</a></li>
						<li><a href="#">Portfolio</a></li>
						<li><a href="/#/contactus">Contact us</a></li>
					</ul>
				</nav>
			</header> <!-- end header -->
      `
      return view
  },
  after_render: async () => { }

}

export default Navbar;