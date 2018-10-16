const state = {
    vacationTypes: [
        { id: 0, code: 'A', name: 'No Vacation' },
        { id: 1, code: 'P', name: 'Public Holiday' },
        { id: 2, code: 'V', name: 'Vacation' },
        { id: 3, code: 'C', name: 'Compensatory Off' },
        { id: 4, code: 'W', name: 'Work from home' },
        { id: 5, code: 'T', name: 'Training' },
        { id: 6, code: 'S', name: 'Sick Leave' }
    ],
    selectedScrum: {},
    scrums: [
        {
            "id": 1,
            "name": "Alpha",
            "members": [
                {
                    "name": "Anjam",
                    "adid": "1",
                    "email": "",
                    "leaveSummary": {},
                    "leaves": []
                },
                {
                    "name": "Bhavik",
                    "adid": "2",
                    "email": "",
                    "leaveSummary": {},
                    "leaves": []
                }
            ]
        },
        { 
            "id": 2,
            "name": "Baahubali",
            "members": [
                {
                    "name": "Ankit",
                    "adid": "3",
                    "email": "",
                    "leaveSummary": {},
                    "leaves": []
                },
                {
                    "name": "Ashita",
                    "adid": "4",
                    "email": "",
                    "leaveSummary": {},
                    "leaves": []
                }
            ]
        },
        {
            "id": 3,
            "name": "Flash",
            "members": [
                {
                    "name": "Komal",
                    "adid": "5",
                    "email": "",
                    "leaveSummary": {},
                    "leaves": []
                },
                {
                    "name": "Kishan",
                    "adid": "6",
                    "email": "",
                    "leaveSummary": {},
                    "leaves": []
                }
            ]
        },
        {
            "id": 4,
            "name": "Phantom",
            "members": [
                {
                    "name": "Prasanna",
                    "adid": "7",
                    "email": "",
                    "leaveSummary": {},
                    "leaves": []
                },
                {
                    "name": "Bhakti",
                    "adid": "8",
                    "email": "",
                    "leaveSummary": {},
                    "leaves": []
                }
            ]
        },
        {
            "id": 5,
            "name": "Roadies",
            "members": [
                {
                    "name": "Divya",
                    "adid": "9",
                    "email": "",
                    "leaveSummary": {},
                    "leaves": []
                },
                {
                    "name": "Chandan",
                    "adid": "10",
                    "email": "",
                    "leaveSummary": {},
                    "leaves": []
                }
            ]
        },
        {
            "id": 6,
            "name": "Rogue",
            "members": [
                {
                    "name": "Shikha",
                    "adid": "11",
                    "email": "",
                    "leaveSummary": {},
                    "leaves": []
                },
                {
                    "name": "Shobhit",
                    "adid": "12",
                    "email": "",
                    "leaveSummary": {},
                    "leaves": []
                }
            ]
        },
        {
            "id": 7,
            "name": "Stormtroopers",
            "members": [
                {
                    "name": "Harmeet",
                    "adid": "13",
                    "email": "",
                    "leaveSummary": {},
                    "leaves": []
                },
                {
                    "name": "Kanika",
                    "adid": "14",
                    "email": "",
                    "leaveSummary": {},
                    "leaves": []
                }
            ]
        },
        {
            "id": 8,
            "name": "Utopians",
            "members": [
                {
                    "name": "Shraddha",
                    "adid": "15",
                    "email": "",
                    "leaveSummary": {},
                    "leaves": []
                },
                {
                    "name": "Pawan",
                    "adid": "16",
                    "email": "",
                    "leaveSummary": {},
                    "leaves": []
                }
            ]
        },
        {
            "id": 9,
            "name": "WhiteWalkers",
            "members": [
                {
                    "name": "Puja",
                    "adid": "17",
                    "email": "",
                    "leaveSummary": {},
                    "leaves": []
                },
                {
                    "name": "Rohit",
                    "adid": "18",
                    "email": "",
                    "leaveSummary": {},
                    "leaves": []
                }
            ]
        }
    ]
};

const getters = {
    selectedScrum: state => {
        return state.selectedScrum.id ? state.selectedScrum : state.scrums[0];
    },
    scrums: state => {
        return state.scrums;
    }
};

const mutations = {
    addMember: (state, payload) => {
        state.scrums.find(scrum => scrum.id === payload.scrum).members.push({
            name: payload.name,
            adid: payload.adid,
            email: payload.email,
            leaves: [],
            leaveSummary: {}
        });
    },
    scrumSelected: (state, payload) => {
        state.selectedScrum = state.scrums.find(scrum => scrum.id === payload)
    },
    addVacation: (state, payload) => {
        let member = state.selectedScrum.members.find(m => m.adid === payload.adid);
        const leaves = member.leaves;
        let existingVacation = (leaves.length === 0) ? null : leaves.find(l => payload.date.getTime() === l.date.getTime());
        const vacation = state.vacationTypes.find(type => type.name === event.target.value);
        const vacationDetails = {
            ...vacation,
            date: payload.date
        }
        if (!existingVacation) {
            member.leaves.push(vacationDetails);
        } else {
            const index = leaves.findIndex(l => payload.date.getTime() === l.date.getTime());
            member.leaves.splice(index, 1);
            member.leaves.push(vacationDetails);
        }
    }
}

export default {
    state,
    getters,
    mutations
}