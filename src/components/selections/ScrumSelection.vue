<template>
    <div>
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <select class="form-control" v-model="selectedScrum">
                    <option v-for="scrum in scrums" :key="scrum.id" :value="scrum">{{ scrum.name }}</option>
                </select>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
    computed: {
        selectedScrum: {
            set(selectedScrum) {
                this.$store.commit('scrumSelected', selectedScrum.id);
            },
            get() {
                return this.$store.getters.selectedScrum;
            }
        },
        ...mapGetters({
            'scrums': 'scrums'
        })
    },
    data: function() {
        return {
        }
    },
    methods: {
        ...mapMutations([
            'scrumSelected'
        ])
    },
    mounted() {
        this.$store.commit('scrumSelected', 1);
    }
}
</script>
