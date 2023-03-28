<template>
  <div>
    <kanban-board 
    :sprints="sprints"
    :items="storiesFilteredBySprint(id_sprint)"
    :sprintId="id_sprint|| ''"
    @dragend="handleDragEnd($event, null, id_sprint)"
    />
  </div>
</template>

<script>
import KanbanBoard from "@/components/Cards/CardSprint.vue";
import { mapActions } from "vuex";

export default {
  components: {
    KanbanBoard,
  },
  // data() {
  //   return {
  //     id_sprint: null,
  //   }
  // },
  methods: {
    ...mapActions([
      "getAllSprint","getStories", "updateStory"
    ]),
    storiesFilteredBySprint(id_sprint) {
      return this.stories.filter((story) => story.sprint_id === id_sprint);
    },
    handleDragEnd(event, _, id_sprint) {
      const filteredStories = this.storiesFilteredBySprint(id_sprint);
      const targetStory = filteredStories.find(
        (_, index) => index === event.oldIndex
      );
      const classNameSplitted = event.to.className.split(" ");
      const newSprint = classNameSplitted[2];
      console.log(newSprint)

      const updatedStory = { ...targetStory, sprint_id: newSprint };
      this.updateStory(updatedStory);
    },
  },
  computed: {
    sprints() {
      return this.$store.state.sprint.sprintList;
    },
    stories() {
      return this.$store.state.story.storyList;
    },
  },
  mounted() {
    this.$store.dispatch("getAllSprint");
    this.$store.dispatch("getStories");
    this.activeSprint = this.sprints[0]; // activeSprint di-set menjadi sprint pertama
  }
}
</script>
