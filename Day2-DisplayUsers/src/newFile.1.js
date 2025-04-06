export default {
  components: { Boundary },
  data() {
    return {
      status: "loading",
      recipes: [],
    };
  },
  methods: {
    async fetchRecipe() {
      try {
        const res = await fetch("https://dummyjson.com/recipes");
        const data = await res.json();
        this.status = "success";
        this.recipes = data.recipes;
        console.log(data);
      } catch (err) {
        console.log(err);
        this.status = "error";
      }
    },
  },
  mounted() {
    this.fetchRecipe();
  },
};
