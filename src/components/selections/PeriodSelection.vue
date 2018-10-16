<template>
    <div>
        <form class="form-inline">
            <div class="form-group">
                <div class="form-group margin-10">
                    <label for="year" class="margin-10">Year</label>
                    <select class="form-control" name="year" id="year" v-model="selectedYear">
                        <option v-for="(year, index) in years" :key="index" :value="year">{{ year }}</option>
                    </select>
                </div>
                <div class="form-group margin-10">
                    <label for="month" class="margin-10">Month</label>
                    <select class="form-control" name="month" id="month" v-model="selectedMonth">
                        <option v-for="month in months" :key="month.number" :value="month">{{ month.name }}</option>
                    </select>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
    computed: {
        selectedYear: {
            set(selectedYear) {
                this.$store.commit('yearSelected', selectedYear);
            },
            get() {
                return this.$store.getters.selectedYear;
            }
        },
        selectedMonth: {
            set(monthSelected) {
                this.$store.commit('monthSelected', monthSelected);
            },
            get() {
                return this.$store.getters.selectedMonth;
            }
        },
        ...mapGetters([
            'months',
            'years'
        ])
    },
    data: function() {
        return {
        }
    },
    methods: {
    }
}
</script>

<style scoped>
    .margin-10 {
        margin-left: 10px;
        margin-right: 10px;
    }
</style>
