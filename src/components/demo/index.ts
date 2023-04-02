import axios from 'axios';

const template = `
<div>
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
