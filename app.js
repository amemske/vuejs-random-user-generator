const app = Vue.createApp({
  // template: "<h1>Hello {{firstName}}</h1>",
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@gmail.com",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/11.jpg",
    };
  },
  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json(); //destructuring to get only the data inside results

      console.log(results);
      // console.log(this.firstName);

      (this.firstName = results[0].name.first),
        (this.lastName = results[0].name.last),
        (this.email = results[0].email),
        (this.gender = results[0].gender),
        (this.picture = results[0].picture.large);
    },
  },
});

app.mount("#app");
