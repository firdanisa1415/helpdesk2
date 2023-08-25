<template>
  <div class="flex flex-wrap">
    <card-boardpelaporan title="Open" @onDragEnd="handleDragEnd" :items="reportFilteredByStatus('Open')" status="Open" :selectedItem="selectedItem" />
    <card-boardpelaporan title="In Progress" :items="reportFilteredByStatus('Inprogress')" @onDragEnd="handleDragEnd" status="Inprogress" :selectedItem="selectedItem" />
    <card-boardpelaporan title="Review" :items="reportFilteredByStatus('Review')" @onDragEnd="handleDragEnd" status="Review" :selectedItem="selectedItem" />
    <card-boardpelaporan title="Closed" :items="reportFilteredByStatus('Closed')" @onDragEnd="handleDragEnd" status="Closed" :selectedItem="selectedItem" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import CardBoardPelaporan from "../../components/Cards/CardBoardPelaporan.vue";

export default {
  name: "kanban-board",
  data: () => ({
    selectedItem: null,
  }),
  components: {
    "card-boardpelaporan": CardBoardPelaporan,
  },
  methods: {
    ...mapActions(["getAllReports", "updateReport"]),

    reportFilteredByStatus(status) {
      if (status === "Closed") {
        // const currentDate = new Date();
        // const currentMonth = currentDate.getMonth() + 1;
        // return this.reportClosed.filter((report) => {
        //   const reportDate = new Date(report.tanggal_mulai);
        //   const reportMonth = reportDate.getMonth() + 1;
        //   return reportMonth === currentMonth;
        // });
        return this.reportClosed;
      } else if (status === "Review") {
        // const currentDate = new Date();
        // this.reportReview.forEach((report) => {
        //   // Subtract the date with current date to get difference days
        //   // If the difference is more than or equal to 3 days, then set the status to "Closed"
        //   // Else, set the status to "Review" only if the status has changed
        //   const diffInDays = Math.floor((currentDate - new Date(report.tanggal_review)) / (1000 * 60 * 60 * 24));
        //   if (diffInDays >= 3 && report.status !== "Closed") {
        //     console.log("Change status to closed");
        //     report.status = "Closed";
        //     this.updateReport(report);
        //   } else if (diffInDays < 3 && report.status !== "Review") {
        //     console.log("Change status to Review");
        //     // report.status = "Review";
        //     // this.updateReport(report);
        //   }
        // });
        // console.log("reportReview", this.reportReview);
        return this.reportReview;
      } else {
        return this.reports.filter((report) => report.status === status);
      }
    },
    reportHandleEndByStatus(status) {
      return this.reports.filter((report) => report.status === status);
    },
    handleDragEnd(event, _, status) {
      const filteredReports = this.reportHandleEndByStatus(status);
      const targetReport = filteredReports.find((_, index) => index === event.oldIndex);
      const classNameSplitted = event.to.className.split(" ");
      const newStatus = classNameSplitted[2];
      const now = new Date();

      // Check if the new status is "Review"
      // Then if so, update the tanggal_review to the current date
      // Else, set the tanggal_review to null
      if (newStatus === "Review") {
        targetReport.tanggal_review = now;
      } else {
        targetReport.tanggal_review = null;
      }

      console.log("targetReport", targetReport);

      const updatedReport = { ...targetReport, status: newStatus };
      this.updateReport(updatedReport);
    },

    autoUpdateStatus() {
      // Update all reports from api
      this.$store.dispatch("getAllReports");
    },
  },
  computed: {
    reports() {
      let filteredReports = this.$store.state.report.reportList.filter((report) => {
        let pic_pelaporan = report.pic_pelaporan;
        if (pic_pelaporan === this.$store.state.user.data.user.id) {
          return true;
        } else {
          return false;
        }
      });
      return filteredReports;
    },
    reportOpen() {
      return this.reports.filter((item) => item.status === "Open");
    },
    reportinProgress() {
      return this.reports.filter((item) => item.status === "Inprogress");
    },
    reportReview() {
      return this.reports.filter((item) => item.status === "Review");
    },
    reportClosed() {
      return this.reports.filter((item) => item.status === "Closed");
    },
  },
  mounted() {
    this.$store.dispatch("getAllReports");
  },
  created() {
    // Panggil autoUpdateStatus setiap 30 menit (1800000 milidetik)
    setInterval(this.autoUpdateStatus, 3000);
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
