<template>
    <div class="row">
        <div class="col-lg-3 col-md-3">
            <h1>Sprint GST</h1>
        </div>
        <div class="col-lg-9 col-md-9">
            <div class="float-right header-pills">
                <ul class="nav nav-pills">
                    <li class="nav-item">
                        <router-link tag="a" to="/" active-class="active" exact class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link tag="a" to="/member" active-class="active" exact class="nav-link">User</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link tag="a" to="/calendar" active-class="active" exact class="nav-link">Calendar</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .header-pills {
        margin-top: 15px;
    }
</style>

