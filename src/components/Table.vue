
<template>
  <div>
    <section>
      <div class="container mt-5">
        <div class="text-center">
          <input
            type="text"
            class="w-50 rounded-pill serch-inp"
            :placeholder="$t('search')"
            v-model="message"
          />
        </div>
        <div class="row mt-4" v-if="tables.length > 0 ? true : false">
          <div
            class="
              pt-2
              fix-table
              col-md-12
              table-responsive table-scroll
              text-center
            "
          >
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col" class="text-center">{{ $t("flag") }}</th>
                  <th scope="col" class="text-center">
                    {{ $t("nameCountry") }}
                  </th>
                  <th scope="col" class="text-center">
                    {{ $t("confirmedCountry") }}
                  </th>
                  <th scope="col" class="text-center">
                    {{ $t("recoveredCountry") }}
                  </th>
                  <th scope="col" class="text-center">
                    {{ $t("deathsCountry") }}
                  </th>
                  <th scope="col" class="text-center">
                    {{ $t("activeCountry") }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="text-center"
                  v-for="(table, index) in tables"
                  :key="table.countryRegion + '' + index"
                >
                  <td class="text-center">
                    <flag :iso="table.countryInfo.iso2" />
                  </td>
                  <td class="text-center">{{ table.country }}</td>
                  <td class="text-center">{{ table.cases }}</td>
                  <td class="text-center">{{ table.recovered }}</td>
                  <td class="text-center">{{ table.deaths }}</td>
                  <td class="text-center">{{ table.active }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          class="text-center shadow my-5 py-5 not-found"
          v-if="tables.length <= 0 ? true : false"
        >
          <i class="fas fa-server"></i>
          <p>{{ $t("oops") }}!!</p>
          <p>{{ $t("searchNotCorrect") }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Table",
  created() {},
  data() {
    return {
      nameCountry: "",
      message: "",
    };
  },
  computed: {
    tables() {
      if (this.message) {
        return this.$store.getters.all.filter((x) => {
          return x.country
            .toLowerCase()
            .includes(this.message.toLowerCase());
        });
      } else {
        return this.$store.getters.all;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

