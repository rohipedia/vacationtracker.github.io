<template>
    <div>
        <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-6">
                <app-scrum-selection></app-scrum-selection>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
                <app-period-selection></app-period-selection>
            </div>
        </div>
        <hr>
        <div class="row">
            <app-details-grid></app-details-grid>
        </div>
    </div>
</template>
<script>
import ScrumSelection from '../selections/ScrumSelection.vue';
import PeriodSelection from '../selections/PeriodSelection.vue';
import DetailsGrid from './DetailsGrid.vue';

export default {
    components: {
        appScrumSelection: ScrumSelection,
        appPeriodSelection: PeriodSelection,
        appDetailsGrid: DetailsGrid
    }
}
</script>

