Vue.component('message', {

    props: ['title', 'body', 'extraclass'],
    data() {
        return {
            isVisible: true
        };
    },
    template: `
    <article class="message" :class="extraclass" v-show="isVisible">
  <div class="message-header">
    <p>{{title}}</p>
    <button class="delete" @click="isVisible = false"></button>
  </div>
  <div class="message-body">
  {{body}}
  </div>
</article>
    `,
   
    methods: {
        hideModal() {
            this.isVisible = false;
        }
    }

});


Vue.component('modal', {

    template: `
    
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
             <slot></slot>
            </div>
        </div>
        <button class="modal-close" @click="$emit('close')"></button>
    </div>


    `,
    methods: {
        showModal() {
            this.isVisible = false;
        }
    }


});



new Vue({
el: '#root',
data: {
    showModal: false
}
});