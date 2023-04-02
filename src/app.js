const template = `
<router-view v-if="isRouterAlive"></router-view>
`;

const App = {
  template,
  data: function () {
    return {
      isRouterAlive: true,
    };
  },
  methods: {},
  mounted() {},
};

export default App;
