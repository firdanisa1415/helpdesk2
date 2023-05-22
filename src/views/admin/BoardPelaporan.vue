<template>
    <div class="flex flex-wrap">
      <card-boardpelaporan
        title="Open"
        @onDragEnd="handleDragEnd"
        :items="reportFilteredByStatus('Open')"
        status="Open"
        :selectedItem="selectedItem"
      />
      <card-boardpelaporan
        title="In Progress"
        :items="reportFilteredByStatus('Inprogress')"
        @onDragEnd="handleDragEnd"
        status="Inprogress"
        :selectedItem="selectedItem"
      />
      <card-boardpelaporan
        title="Review"
        :items="reportFilteredByStatus('Review')"
        @onDragEnd="handleDragEnd"
        status="Review"
        :selectedItem="selectedItem"
      />
      <card-boardpelaporan
        title="Closed"
        :items="reportFilteredByStatus('Closed')"
        @onDragEnd="handleDragEnd"
        status="Closed"
        :selectedItem="selectedItem"
      />
    </div>
  </template>
  
  <script>
  import { mapActions } from "vuex";
  import CardBoardPelaporan from "../../components/Cards/CardBoardPelaporan.vue";
  
  export default {
    name: "kanban-board",
    data : () =>({
      selectedItem: null,
    }),
    components: {
      "card-boardpelaporan": CardBoardPelaporan,
    },
    methods: {
      ...mapActions(["getAllReports", "updateReport"]),
      reportFilteredByStatus(status) {
        return this.reports.filter((report) => report.status === status);
      },
      handleDragEnd(event, _, status) {
        const filteredReports = this.reportFilteredByStatus(status);
        const targetReport = filteredReports.find(
          (_, index) => index === event.oldIndex
        );
        const classNameSplitted = event.to.className.split(" ");
        const newStatus = classNameSplitted[2];
        console.log(newStatus)
  
        const updatedReport = { ...targetReport, status: newStatus };
        this.updateReport(updatedReport);
        console.log(updatedReport)
      },
    },
    computed: {
    reports() {
      return this.$store.state.report.reportList;
    },
      reportOpen() {
        return this.$store.state.report.reportList.filter(
          (item) => item.status === "Open"
        );
      },
      reportDone() {
        return this.$store.state.report.reportList.filter(
          (item) => item.status === "Inprogress"
        );
      },
      reportClosed() {
        return this.$store.state.report.reportList.filter(
          (item) => item.status === "Review"
        );
      },
      reportPending() {
        return this.$store.state.report.reportList.filter(
          (item) => item.status === "Closed"
        );
      },
    },
    mounted() {
      this.$store.dispatch("getAllReports");
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
  