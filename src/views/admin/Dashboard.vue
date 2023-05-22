<template>
  <div class="flex flex-wrap">
    <div class="w-full">
      <div class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(1)" v-bind:class="{ 'text-blue-500 bg-white': openTab !== 1, 'text-white bg-blue-500': openTab === 1 }">
            Dashboard Incident
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(2)" v-bind:class="{ 'text-blue-500 bg-white': openTab !== 2, 'text-white bg-blue-500': openTab === 2 }">
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
                <card-line-chart />
              </div>
              <div class="w-full xl:w-4/12 px-4">
                <card-bar-chart />
              </div>
            </div>
            <div class="flex flex-wrap mt-4">
              <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                <card-page-visits />
              </div>
              <div class="w-full xl:w-4/12 px-4">
                <card-social-traffic />
              </div>
            </div>
          </div>

          <div v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }">
            <div class="flex flex-wrap">
              <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                <card-line-chart />
              </div>
              <div class="w-full xl:w-4/12 px-4">
                <card-bar-chart />
              </div>
            </div>
            <div class="flex flex-wrap mt-4">
              <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                <card-page-visits />
              </div>
              <div class="w-full xl:w-4/12 px-4">
                <card-social-traffic />
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
import CardPageVisits from "@/components/Cards/CardPageVisits.vue";
import CardSocialTraffic from "@/components/Cards/CardSocialTraffic.vue";
export default {
  name: "dashboard-page",
  components: {
    CardLineChart,
    CardBarChart,
    CardPageVisits,
    CardSocialTraffic,
  },
  data() {
    return {
      openTab: 1,
    };
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },
  },
};
</script>
