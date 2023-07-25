<template>
  <div class="flex flex-wrap">
    <div class="w-full">
      <div class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
            v-on:click="toggleTabs(1)"
            v-bind:class="{
              'text-blue-500 bg-white': openTab !== 1,
              'text-white bg-blue-500': openTab === 1,
            }"
          >
            Dashboard Incident
          </a>
        </li>
        <!-- <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
            v-on:click="toggleTabs(2)"
            v-bind:class="{
              'text-blue-500 bg-white': openTab !== 2,
              'text-white bg-blue-500': openTab === 2,
            }"
          >
            Dashboard Scrum
          </a>
        </li> -->
      </div>
    </div>
    <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
      <div class="px-4 py-5 flex-auto">
        <div class="tab-content tab-space">
          <div v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }">
            <div class="flex flex-wrap">
              <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                <card-line-chart chartId="chart-test2" title="Total Data Pelaporan SLA" :chartData="chartData" :chartOptions="chartOptions" />
              </div>
              <div class="w-full xl:w-4/12 px-4">
                <card-pie-chart chartId="chart-test2-pie" title="Total Status Pelaporan" :chartData="chartPieData" :chartOptions="chartPieOptions" />
              </div>
              <!-- <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                <card-line-chart title="Test" />
              </div>
              <div class="w-full xl:w-4/12 px-4">
                <card-bar-chart />
              </div> -->
            </div>
            <div class="flex flex-wrap mt-4">
              <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                <card-bar-chart title="Total Pelaporan Per-Produk" chartId="chart-test3-bar-horizontal" :chartData="chartBarData1" :chartOptions="chartHorizontalBarOptions" />
              </div>
              <div class="w-full xl:w-4/12 px-4">
                <card-bar-chart title="Total Penugasan PIC" chartId="chart-test3-bar" :chartData="chartBarData2" :chartOptions="chartBarOptions" />
              </div>
            </div>
          </div>
          <div v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }">
            <div class="flex flex-wrap">
              <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                <card-line-chart chartId="chart-test3" title="Test 3" :chartData="chartData" :chartOptions="chartOptions" />
              </div>
              <div class="w-full xl:w-4/12 px-4">
                <card-pie-chart chartId="chart-test3-pie" :chartData="chartPieData" :chartOptions="chartPieOptions" />
              </div>
              <!-- <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                <card-line-chart title="Test" />
              </div>
              <div class="w-full xl:w-4/12 px-4">
                <card-bar-chart />
              </div> -->
            </div>
            <div class="flex flex-wrap mt-4">
              <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                <card-bar-chart title="Bar Horizontal Chart Biasa Scrum" chartId="chart-test2-bar-horizontal" :chartData="chartBarData1" :chartOptions="chartHorizontalBarOptions" />
              </div>
              <div class="w-full xl:w-4/12 px-4">
                <card-bar-chart title="Bar Chart Biasa Scrum" chartId="chart-test2-bar" :chartData="chartBarData1" :chartOptions="chartBarOptions" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CardLineChart from "@/components/Cards/CardLineChart.vue";
import CardBarChart from "@/components/Cards/CardBarChart.vue";
import CardPieChart from "@/components/Cards/CardPieChart.vue";
import { mapActions } from "vuex";
// import CardPageVisits from "@/components/Cards/CardPageVisits.vue";
// import CardSocialTraffic from "@/components/Cards/CardSocialTraffic.vue";
export default {
  name: "dashboard-page",
  components: {
    CardLineChart,
    CardBarChart,
    // CardPageVisits,
    // CardSocialTraffic,
    CardPieChart,
  },
  data() {
    return {
      chartHorizontalBarOptions: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          title: {
            display: false,
            text: "Orders Chart",
          },
          tooltip: {
            mode: "index",
            intersect: false,
          },
          hover: {
            mode: "nearest",
            intersect: true,
          },
          legend: {
            labels: {
              color: "rgba(0, 0, 0, .4)",
            },
            position: "bottom",
            align: "end",
          },
        },
        scales: {
          y: {
            display: true,
            title: {
              display: false,
              text: "Value",
            },
            grid: {
              display: true,
              color: "rgba(33, 37, 41, 0.2)",
              borderColor: "rgba(33, 37, 41, 0.15)",
              borderDash: [2],
              borderDashOffset: [2],
              drawBorder: false,
            },
          },
        },
        indexAxis: "y",
      },
      chartBarOptions: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          title: {
            display: false,
            text: "Orders Chart",
          },
          tooltip: {
            mode: "index",
            intersect: false,
          },
          hover: {
            mode: "nearest",
            intersect: true,
          },
          legend: {
            labels: {
              color: "rgba(0, 0, 0, .4)",
            },
            position: "bottom",
            align: "end",
          },
        },
        scales: {
          y: {
            display: true,
            title: {
              display: false,
              text: "Value",
            },
            grid: {
              display: false,
              color: "rgba(33, 37, 41, 0.2)",
              borderColor: "rgba(33, 37, 41, 0.15)",
              borderDash: [2],
              borderDashOffset: [2],
              drawBorder: false,
            },
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
      },

      chartPieOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
      chartOptions: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          title: {
            display: false,
            text: "Sales Charts",
            color: "white",
          },
          legend: {
            labels: {
              color: "white",
            },
            position: "bottom",
            align: "end",
          },
          tooltip: {
            mode: "index",
            intersect: false,
          },
          hover: {
            mode: "nearest",
            intersect: true,
          },
        },
        scales: {
          x: {
            ticks: {
              color: "rgba(255, 255, 255, .7)",
            },
            display: true,
            title: {
              display: false,
              text: "Month",
              color: "white",
            },
            grid: {
              display: false,
              color: "white",
              borderColor: "rgba(0, 0, 0, 0)",
              borderDash: [2],
              borderDashOffset: [2],
            },
          },
          y: {
            ticks: {
              color: "rgba(255, 255, 255, .7)",
            },
            display: true,
            title: {
              display: false,
              text: "Value",
              color: "white",
            },
            grid: {
              display: true,
              color: "rgba(255, 255, 255, 0.15)",
              borderColor: "rgba(33, 37, 41, 0)",
              borderDash: [3],
              borderDashOffset: [3],
              drawBorder: false,
            },
          },
        },
      },
      openTab: 1,
    };
  },
  computed: {
    line() {
      return this.$store.state.report.monthlyList?.map((data) => data.bulan) ?? [];
    },
    statusReports() {
      return this.$store.state.report.statusList?.map((data) => data.status) ?? [];
    },
    productReports() {
      return this.$store.state.report.productList?.map((data) => data.jenis_product) ?? [];
    },
    picReports() {
      return this.$store.state.report.picList?.map((data) => data.nama_pic) ?? [];
    },
    getLineMappedMonthlyCount() {
      return this.$store.state.report.monthlyList.map((data) => data.total_users) ?? [];
    },
    getLineMappedStatusCount() {
      return this.$store.state.report.statusList?.map((data) => data.total_users) ?? [];
    },
    getLineMappedProductCount() {
      return this.$store.state.report.productList?.map((data) => data.total_users) ?? [];
    },
    getLineMappedPicCount() {
      return this.$store.state.report.picList?.map((data) => data.total_users) ?? [];
    },
    chartData() {
      return {
        labels: this.line,
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: this.getLineMappedMonthlyCount,
            fill: false,
          },
          {
            label: new Date().getFullYear() - 1,
            fill: false,
            backgroundColor: "#fff",
            borderColor: "#fff",
            data: [],
          },
        ],
      };
    },
    chartPieData() {
      return {
        labels: this.statusReports,
        datasets: [
          {
            backgroundColor: ["#FEFF86", "#B0DAFF", "#19A7CE", "#146C94"],
            data: this.getLineMappedStatusCount,
          },
        ],
      };
    },
    // chartBarData1() {
    //   const datasets = this.productReports.map((product, index) => {
    //     const filteredData = this.getLineMappedProductCount.filter((count, i) => i === index);
    //     return {
    //       label: product,
    //       backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"][index],
    //       borderColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"][index],
    //       data: filteredData,
    //       fill: false,
    //       barThickness: 18,
    //     };
    //   });

    //   return {
    //     labels: this.productReports,
    //     datasets: datasets,
    //   };
    // },
    chartBarData1() {
      return {
        labels: this.productReports,
        datasets: [
          {
            label: "Total Product",
            backgroundColor: ["#11009E", "#4942E4", "#8696FE", "#C4B0FF"],
            borderColor: ["#11009E", "#4942E4", "#8696FE", "#C4B0FF"],
            data: this.getLineMappedProductCount,
            fill: false,
            barThickness: 40,
          },
        ],
      };
    },
    chartBarData2() {
      return {
        labels: this.picReports,
        datasets: [
          {
            label: "Total Penugasan",
            backgroundColor: ["#E14D2A", "#FD841F", "#3E6D9C"],
            borderColor: ["#E14D2A", "#FD841F", "#3E6D9C"],
            data: this.getLineMappedPicCount,
            fill: false,
            barThickness: 80,
          },
        ],
      };
    },
    chartData() {
      return {
        labels: this.line,
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: this.getLineMappedMonthlyCount,
            fill: false,
          },
          {
            label: new Date().getFullYear() - 1,
            fill: false,
            backgroundColor: "#fff",
            borderColor: "#fff",
            data: [],
          },
        ],
      };
    },
    chartPieData() {
      return {
        labels: this.statusReports,
        datasets: [
          {
            backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
            data: this.getLineMappedStatusCount,
          },
        ],
      };
    },
    chartBarData1() {
      const datasets = this.productReports.map((product, index) => {
        const filteredData = this.getLineMappedProductCount.filter((count, i) => i === index);
        return {
          label: product,
          backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"][index],
          borderColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"][index],
          data: filteredData,
          fill: false,
          barThickness: 18,
        };
      });

      return {
        labels: this.productReports,
        datasets: datasets,
      };
    },

    // chartBarData1() {
    //   return {
    //     labels: this.productReports,
    //     datasets: [
    //       {
    //         label: this.productReports,
    //         backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
    //         borderColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
    //         data: this.getLineMappedProductCount,
    //         fill: false,
    //         barThickness: 18,
    //       },
    //     ],
    //   };
    // },
  },
  mounted() {
    this.$store.dispatch("getMonthlyReports");
    this.$store.dispatch("getStatusReports");
    this.$store.dispatch("getProductReports");
    this.$store.dispatch("getPicReports");
    console.log(this.line);
    console.log(this.statusReports);
    console.log(this.productReports);
    console.log(this.picReports);
  },
  methods: {
    ...mapActions(["getMonthlyReports", "getProductReports", "getStatusReports", "getPicReports"]),
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },

    getMappedMonth: function () {
      console.log("GETMAPPEDMONTH");
      const res = this.reports.map((d) => {
        return d.month;
      });
      console.log("RESPONSE");
      console.log(res);
      return res;
    },
  },
};
</script>
