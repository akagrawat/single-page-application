let Error404 = {
  render: async () => {
      let view =  /*html*/`
          <h1> Hello Ashish</h1>
          <h2> Error 404 working</h2>
      `
      return view
  },
  after_render: async () => { }

}

export default Error404;