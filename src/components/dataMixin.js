export default {
    data() {
        return {
            modalCreate: {
                show: false
            },
            modalView: {
                show: false
            },
            active: false,
            activeDots: false,
            contacts: [
                {
                    name: "John Doe",
                    photo: "",
                    email: "email@example.com",
                    adress: "Ukraine, Zaporozhye",
                    created: "email@example.com"
                },
                {
                    name: "Lone Doe",
                    photo: "",
                    email: "lmail2@example.com",
                    adress: "Ukraine, Kiev",
                    created: "email@example.com"
                }
            ],
            columnsContacts: ["name", "email", "adress"],
            selected: [],
            selectAll: false,
            name: '',
            email: '',
            adress: '',
            nameState: null,
            submittedNames: []
        };
    }
}