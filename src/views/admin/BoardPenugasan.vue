<template>
  <div class="flex flex-wrap">
    <card-boardpenugasan
      title="Open"
      @onDragEnd="handleDragEnd"
      :items="storiesFilteredByStatus('open')"
      status="open"
    />
    <card-boardpenugasan
      title="In Progress"
      :items="storiesFilteredByStatus('inprogress')"
      @onDragEnd="handleDragEnd"
      status="inprogress"
    />
    <card-boardpenugasan
      title="Testing"
      :items="storiesFilteredByStatus('testing')"
      @onDragEnd="handleDragEnd"
      status="testing"
    />
    <card-boardpenugasan
      title="Done"
      :items="storiesFilteredByStatus('done')"
      @onDragEnd="handleDragEnd"
      status="done"
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
  methods: {
    ...mapActions(["getStories", "updateStory"]),
    storiesFilteredByStatus(status) {
      return this.stories.filter((story) => story.status === status);
    },
    handleDragEnd(event, _, status) {
      const filteredStories = this.storiesFilteredByStatus(status);
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
    this.$store.dispatch("getStories");
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
