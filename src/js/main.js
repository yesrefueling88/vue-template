import Vue from './lib/vue-2.6.14.min'

var template = `
<div>
    Hello World
</div>
`;

var vm = new Vue({
    el: '#app',
    template: template,
    data: {},
    methods: {},
    mounted() {
    },
});
