
let Service = {
    render: async () => {
        let view =  /*html*/`
		<div class="container">
		<div class="service">
		
		</div>
		

		<div class="aboutDriver ">
		<h2>SERVICES</h2>
		<h3>Lorem ipsum - dolor</h3>
		<div>
		  <div class="red-border"></div>
		  <p class="ct-u-size22 ct-u-fontWeight300 marginTop40">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed libero vel ex maximus vulputate nec eu ligula. Vestibulum elementum nisi ut fermentum lobortis. Sed quis iaculis felis.</p>
		  <!-- <a class="ct-u-marginTop60 btn btn-solodev-red btn-fullWidth-sm ct-u-size19" href="/#/">Learn More</a> -->
		</div>
	  </div>

	  </div>

        `
        return view
    },
    after_render: async () => { }
  
  }
  
  export default Service;