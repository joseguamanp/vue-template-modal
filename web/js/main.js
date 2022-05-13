Vue.component('modal', {
    data() {
      return {
        imagen: "web/img/undraw_trip_re_f724.svg"
      }
    },
    methods: {
      closemodal(){
        this.$emit("close-modal")
      }
    },
    template: `
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <h3>Modal de Platzi</h3>
            <div>
            <img class="img" :src="imagen" alt="imagen">
            <slot name="text"></slot>
            </div>
            <footer>
              <button class="button-modal" @click="closemodal()">Cerrar</button>
            </footer>
          </div>
        </div>
      </div>`
  })
  
  new Vue({
    el: '#app',
    data() {
      return {
        statusopen: false
      }
    },
    methods: {
      openmodal(){
        this.statusopen = true;
      },
      closemodal(){
        this.statusopen = false;
      }
    },
  })