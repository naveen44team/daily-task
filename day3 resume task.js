
const resume = [
    {
        jobApplication: {
            role: "Full-Stack Developer"
        },
        personalInfo: {
            name: {
                firstName: "Naveen",
                lastName: "Nagarajan",
                age: 24,
                fullName: this.firstName + " " + this.lastName
            },
            contact: {
                state: "pondicherry",
                district: "pondicherry",
                address: `xyz street, ${this.district}, ${this.state}`,
                mail: "xyz@gmail.com",
                mobile: "********78"
            },
            languages: {
                tam: "Tamil",
                eng: "English",
                tel: "telugu"
            }
        },
        experience: {
            internship:{
                company1:{
                    name: "guvi",
                    place: "Chennai",
                    state: "Tamil Nadu",
                },
                company2:{
                    name: "SRB *** ",
                    place: "Krishnagiri",
                    state: "Tamil Nadu"
                },
            },
            freelance:{
                company1: {
                    name: "xxx",
                    place: "Bangalore",
                    state: "Karnataka"
                },
                company2: {
                    name: "bbb",
                    place: "Chennai",
                    state: "Tamil Nadu"
                },
            },
        },
        interest: {
            interest_1 :"Watching Movies",
            interest_2 :"playing boxing",
            interest_3 :"Reading Books",
            interest_4 :"explorer" 
        },
  
    }
]

console.log(resume);