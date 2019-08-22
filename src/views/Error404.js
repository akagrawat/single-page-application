let Error404 = {
  render: async () => {
      let view =  /*html*/`
          <div class="container">
          <div class="notPage">
          <img src="./assets/image/4041.jpg" width="1188" height="500">
          </div>
          </div>
      `
      return view
  },
  after_render: async () => { }

}

export default Error404;