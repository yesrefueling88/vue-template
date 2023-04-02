import axios from 'axios';

const template = `
<div class="m-2">
    demo
</div>
`;

const Demo = {
  template: template,
  data: function () {
    return {};
  },
  methods: {},
  mounted() {
    const fn = async () => {
      const res = await axios.get('https://v.api.aa1.cn/api/yiyan/index.php');
      console.log(res);
    };
    fn();
  },
};

export default Demo;
