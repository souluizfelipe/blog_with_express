const Main = {

  init() {
    this.selectors();
    this.bindEvents();
  },

  selectors() {
    const $success = document.querySelector('.alert-success');
  },

  bindEvents() {
    setTimeout(() => {
      $success.classList.toggle('-active');
    }, 5000);
  }


}

Main.init();