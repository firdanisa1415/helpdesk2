<template>
  <div class="flex flex-wrap">
    <card-boardpenugasan
      title="Open"
      @onDragEnd="handleDragEnd"
      :items="storiesFilteredByStatus('open')"
      status="open"
      :selectedItem="selectedItem"
    />
    <card-boardpenugasan
      title="In Progress"
      :items="storiesFilteredByStatus('inprogress')"
      @onDragEnd="handleDragEnd"
      status="inprogress"
      :selectedItem="selectedItem"
    />
    <card-boardpenugasan
      title="Testing"
      :items="storiesFilteredByStatus('testing')"
      @onDragEnd="handleDragEnd"
      status="testing"
      :selectedItem="selectedItem"
    />
    <card-boardpenugasan
      title="Done"
      :items="storiesFilteredByStatus('done')"
      @onDragEnd="handleDragEnd"
      status="done"
      :selectedItem="selectedItem"
      :selectedIdstory = "selectedIdstory"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import CardBoardPenugasan from "../../components/Cards/CardBoardPenugasan.vue";

export default {
  name: "kanban-board",
  components: {
    "card-boardpenugasan": CardBoardPenugasan,
  },
  data : () =>({
      selectedItem: null,
      selectedIdstory: null,
  }),
  methods: {
    ...mapActions(["getStories", "updateStory", "createTask"]),
    storiesFilteredByStatus(status) {
      return this.stories.filter((story) => story.status === status);
    },
    handleDragEnd(event, _, status) {
      const filteredStories = this.storiesFilteredByStatus(status);
      console.log(event)
      const targetStory = filteredStories.find(
        (_, index) => index === event.oldIndex
      );
      const classNameSplitted = event.to.className.split(" ");
      const newStatus = classNameSplitted[2];
      console.log(newStatus)

      const updatedStory = { ...targetStory, status: newStatus };
      this.updateStory(updatedStory);
    },
  },
  computed: {
    stories() {
      return this.$store.state.story.storyList;
    },
    task() {
      const story = this.stories.find((story) => this.selectedIdstory === story.id_story);
      return story.task;
    },
    storiesOpen() {
      return this.$store.state.story.storyList.filter(
        (item) => item.status === "open"
      );
    },
    storiesInProgress() {
      return this.$store.state.story.storyList.filter(
        (item) => item.status === "inprogress"
      );
    },
    storiesTesting() {
      return this.$store.state.story.storyList.filter(
        (item) => item.status === "testing"
      );
    },
    storiesDone() {
      return this.$store.state.story.storyList.filter(
        (item) => item.status === "done"
      );
    },
  },
  mounted() {
    this.$store.dispatch("getAllStories");
  },
};
</script>

<style>
/* light stylings for the kanban columns */
.kanban-column {
  background-color: #fff;
  margin-bottom: 10px;
  padding: 10px;
}
</style>
