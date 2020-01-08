// 实例化vue对象
new Vue({
  //创建根元素，容器element
  el: '#app',
  //data内的属性内容只作用于#app的内部
  data() {
    return {
      // 真假布尔值，定义元素默认不添加class
      attrchangeColor: false,
      compChangeColor: false,
      compAddName: false,
      // if用判断
      error: false,
      success: false,
      error2: false,
      success2: false,
      open: '',
      resourcesname: '',
      errname: '',
      characters: ['托马斯--THOMAS', '詹姆斯--JAMES', '托比--TOBY', '培西--PERCY', '史宾赛--SPENCER'],
      trains: [{
          name: '托马斯--THOMAS',
          img: 'thomas.jpg'
        },
        {
          name: '詹姆斯--JAMES',
          img: 'james.jpg'
        },
        {
          name: '托比--TOBY',
          img: 'toby.jpg'
        },
        {
          name: '培西--PERCY',
          img: 'percy.jpg'
        },
        {
          name: '史宾赛--SPENCER',
          img: 'spencer.jpg'
        }
      ],
      students: [{
          name: 'Aaron',
          age: '19',
          scores: '89'
        },
        {
          name: 'Michelle',
          age: '27',
          scores: '78'
        },
        {
          name: 'Cristina',
          age: '22',
          scores: '96'
        },
        {
          name: 'Sophia',
          age: '18',
          scores: '68'
        }
      ],
    };
  },
  //方法
  methods: {
    checkname: function () {
      if (this.resourcesname != "") {
        this.errname = "";
      } else {
        this.errname = "用户名不能为空";
      }
    }
  },
  computed: {
    compClasses() {
      return {
        // changeColor为css中的类名 compChangeColor为data中定义的默认值
        changeColor: this.compChangeColor,
        addName: this.compAddName
      };
    }
  }
});