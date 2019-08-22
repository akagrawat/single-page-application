let Home = {
  render: async () => {


      let view =  /*html*/`
      <div class="container">
      <div>
      <img class="banner" src="./assets/image/banner.jpg">
      </div>    
      <div class="row">
      <div class="col-4 services">
        <h3>Services</h3>
        <i class="fas fa-american-sign-language-interpreting fa-4x iconcolors"></i>
        <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque gravida iaculis. Morbi ut lorem nec quam dictum ornare sit amet eu ligula.</p>
      </div>  <!-- end col first -->
      <div class="col-4 services">
        <h3>Product</h3>
        <i class="fas fa-box-open fa-4x iconcolors"></i>
        <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque gravida iaculis. Morbi ut lorem nec quam dictum ornare sit amet eu ligula.</p>
      </div>  <!-- end col second -->
      <div class="col-4 services">
        <h3>Delivery</h3>
        <i class="fas fa-truck fa-4x iconcolors"></i>

        <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque gravida iaculis. Morbi ut lorem nec quam dictum ornare sit amet eu ligula.</p>
      </div>  <!-- end col third -->
    </div>  <!-- end row -->

    <div>
      `
      return view
  },
  after_render: async () => { }

}
 
export default Home;