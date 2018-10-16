import Home from './components/Home.vue';
import Member from './components/members/Member.vue';
import Calendar from './components/calendar/Calendar.vue';

export const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/member', component: Member, name: 'member' },
    { path: '/calendar', component: Calendar, name: 'calendar' }
    // { path: '/member', component: Member, children: [
    //     { path: '', component: UserStart },
    //     { path: ':id', component: UserDetail },
    //     { path: ':id/edit', component: UserEdit, name: 'userEdit' }
    // ] }
];