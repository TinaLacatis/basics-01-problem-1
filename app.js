const app = Vue.createApp({
  data() {
    return {
      name: "Tina Lacatis",
      age: "27",
      randomN: Math.random(),
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/Mona_Lisa.jpg",
      //   input: {
      //     value: "Tina Lacatis",
      //   },
    };
  },
  methods: {
    calcAge() {
      return parseInt(this.age) + 5;
    },
    randomNumber() {
      const randomNum = Math.random();
      return randomNum;
    },
  },
});
app.mount("#assignment");
