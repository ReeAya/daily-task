import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
// 
createApp({
  data() {
    return {
       tasks: JSON.parse(localStorage.getItem("tasks")) || ["Go Shopping"],
      enteredValue: "",
    };
  },
  computed: {
    headText() {
      return this.tasks.length === 0 ? "No tasks for today!" : "Today's tasks";
    },
  },
  watch: {
    tasks() {
      this.tasks = localStorage.getItem("tasks");
    },
  },
  methods: {
    addTask() {
      if (!this.enteredValue) return;
      this.tasks.push(this.enteredValue);

      localStorage.setItem("tasks", JSON.stringify(this.tasks));
      this.enteredValue = "";
    },

    removeTask(idx) {
      this.tasks.splice(idx, 1);
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
  },
}).mount("#planner");
