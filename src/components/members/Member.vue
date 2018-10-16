<template>
    <div>
        <form class="form-group col-lg-6 col-md-8" name="memberForm">
            <div class="form-group">
                <label for="">Name</label>
                <input type="text" class="form-control" v-model="member.name">
            </div>
            <div class="form-group">
                <label for="">ADID</label>
                <input type="text" class="form-control" v-model="member.adid">
            </div>
            <div class="form-group">
                <label for="">email</label>
                <input type="text" class="form-control" v-model="member.email">
            </div>
            <div class="form-group">
                <label for="">Scrum</label>
                <select name="" id="" v-model="member.scrum" class="form-control" required>
                    <option :selected="scrum.id = 1" :value="scrum.id" v-for="(scrum, index) in scrums" :key="index">{{ scrum.name }}</option>
                </select>
            </div>
        </form>
        <div class="col-lg-6 col-md-8">
            <button class="btn btn-primary" @click="addMember(member);resetForm">Add</button>
        </div>
    </div>
    
</template>
<script>
import { mapMutations, mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters({
            'scrums': 'scrums'
        })
    },
    data() {
        return {
            member: {}
        }
    },
    methods: {
        resetForm() {
            this.member = {};
            this.$router.push({ name: 'calendar'});
        },
        ...mapMutations({
            'addMember': 'addMember'
        })
    }
}
</script>
<style>
</style>
