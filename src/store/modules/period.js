/** HELPER FUNCTIONS */
const getMonths = function() {
    return [
        { number: 0, name: 'January', days: 31},
        { number: 1, name: 'February', days: 28},
        { number: 2, name: 'March', days: 31},
        { number: 3, name: 'April', days: 30},
        { number: 4, name: 'May', days: 31},
        { number: 5, name: 'June', days: 30},
        { number: 6, name: 'July', days: 31},
        { number: 7, name: 'August', days: 31},
        { number: 8, name: 'September', days: 30},
        { number: 9, name: 'October', days: 31},
        { number: 10, name: 'November', days: 30},
        { number: 11, name: 'December', days: 31}
    ];
}

const getYears = function() {
    let years = [];
    const startYear = 2010;
    const yearEnd = new Date().getUTCMonth() < 9 ? new Date().getFullYear() : new Date().getFullYear() + 1;
    for (let i = startYear; i <= yearEnd; i++) {
        years.push(i);
    }
    return years;
};

const getFebDays = function(year) {
    let days = 28;
    if (year % 100 === 0) {
        days = (year % 400 === 0) ? 29 : 28;
    } else {
        days = (year % 4 === 0) ? 29 : 28;
    }
    return days;
};

const getSelectedMonth = () => {
    return getMonths().find(month => month.number === new Date().getUTCMonth());
};
/******************* */
/** STATE MANAGEMENT */
const state = {
    years: getYears(),
    selectedYear: new Date().getFullYear(),
    months: getMonths(),
    selectedMonth: getSelectedMonth()
};

const getters = {
    months: state => {
        return state.months;
    },
    years: state => {
        return state.years;
    },
    selectedYear: state => {
        return state.selectedYear;
    },
    selectedMonth: state => {
        return state.selectedMonth;
    }
};

const mutations = {
    monthSelected: (state, payload) => {
        const clickedMonth = state.months.find(month => month.number == payload.number);
        if (payload.number == 1) {
            clickedMonth.days = getFebDays(state.selectedYear);
        }
        state.selectedMonth = clickedMonth;
    },
    yearSelected: (state, payload) => {
        state.months.find(month => month.number == 1).days = getFebDays(payload);
        state.selectedYear = payload;
    }
}

export default {
    state,
    getters,
    mutations
}