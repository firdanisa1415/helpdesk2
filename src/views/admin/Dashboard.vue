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
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
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
        </li>
      </div>
    </div>
    <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
      <div class="px-4 py-5 flex-auto">
        <div class="tab-content tab-space">
          <div v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }">
            <div class="flex flex-wrap">
              <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                <card-line-chart chartId="chart-test2" title="Test 2" :chartData="chartData" :chartOptions="chartOptions" />
              </div>
              <div class="w-full xl:w-4/12 px-4">
                <card-pie-chart chartId="chart-test2-pie" :chartData="chartPieData" :chartOptions="chartPieOptions" />
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
                <card-bar-chart title="Bar Horizontal Chart Biasa Incident" chartId="chart-test3-bar-horizontal" :chartData="chartBarData" :chartOptions="chartHorizontalBarOptions" />
              </div>
              <div class="w-full xl:w-4/12 px-4">
                <card-bar-chart title="Bar Chart Biasa Incident" chartId="chart-test3-bar" :chartData="chartBarData" :chartOptions="chartBarOptions" />
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
                <card-bar-chart title="Bar Horizontal Chart Biasa Scrum" chartId="chart-test2-bar-horizontal" :chartData="chartBarData" :chartOptions="chartHorizontalBarOptions" />
              </div>
              <div class="w-full xl:w-4/12 px-4">
                <card-bar-chart title="Bar Chart Biasa Scrum" chartId="chart-test2-bar" :chartData="chartBarData" :chartOptions="chartBarOptions" />
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
import { mapActions, mapGetters } from "vuex";
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
      chartBarData: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: "#ed64a6",
            borderColor: "#ed64a6",
            data: [30, 78, 56, 34, 100, 45, 13],
            fill: false,
            barThickness: 18,
          },
          // {
          //   label: new Date().getFullYear() - 1,
          //   fill: false,
          //   backgroundColor: "#4c51bf",
          //   borderColor: "#4c51bf",
          //   data: [27, 68, 86, 74, 10, 4, 87],
          //   barThickness: 8,
          // },
        ],
      },
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
          x: {
            display: false,
            title: {
              display: true,
              text: "Month",
            },
            grid: {
              display: true,
              color: "rgba(33, 37, 41, 0.3)",
              borderColor: "rgba(33, 37, 41, 0.3)",
              borderDash: [2],
              borderDashOffset: [2],
            },
          },
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
          x: {
            display: false,
            title: {
              display: true,
              text: "Month",
            },
            grid: {
              display: true,
              color: "rgba(33, 37, 41, 0.3)",
              borderColor: "rgba(33, 37, 41, 0.3)",
              borderDash: [2],
              borderDashOffset: [2],
            },
          },
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
      },
      chartPieData: {
        labels: ["VueJs", "EmberJs", "ReactJs", "AngularJs"],
        datasets: [
          {
            backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
            data: [40, 20, 80, 10],
          },
        ],
      },
      chartPieOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
      chartData: {
        labels: this.getMappedMonth(this.monthlyList),
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: this.getMappedMonthlyCount,
            fill: false,
          },
          {
            label: new Date().getFullYear() - 1,
            fill: false,
            backgroundColor: "#fff",
            borderColor: "#fff",
            data: [40, 68, 86, 74, 56, 60, 87],
          },
        ],
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
    getMappedMonthlyName() {
      return this.monthlyList.map((data) => data.month);
    },
    getMappedMonthlyCount() {
      return this.monthlyList.map((data) => data.total_users);
    },
  },
  mounted() {
    this.$store.dispatch("getMonthlyReports");
  },
  methods: {
    ...mapActions(["getMonthlyReports"]),
    ...mapGetters(["monthlyList"]),
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },
    getMappedMonth: function (data) {
      console.log(data);
      return data.map((d) => {
        return d.month;
      });
    },
  },
};
</script>
