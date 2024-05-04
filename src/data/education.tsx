import uiuc from "../assets/img/medium/uiuc.png";
import interlake from "../assets/img/medium/interlake.png";

const educationData = {
    educationHistory: [
        {
            school: {
                schoolName: "University of Illinois Urbana-Champaign",
                schoolLocation: "Champaign, Illinois, United States",
                schoolLogoUrl: uiuc,
                linkedInUrl:
                    "https://www.linkedin.com/organization/university-of-illinois-urbana-champaign",
            },
            degreeName: "BS",
            startEndDate: {
                start: {
                    year: 2022,
                },
                end: {
                    year: 2026,
                },
            },
            fieldOfStudy: "Computer Science",
        },
        {
            school: {
                schoolName: "Interlake Senior High School",
                schoolLogoUrl: interlake,
                linkedInUrl:
                    "https://www.linkedin.com/organization/interlake-senior-high-school",
            },
            degreeName: "High School Diploma",
            startEndDate: {
                start: {
                    year: 2018,
                },
                end: {
                    year: 2022,
                },
            },
            fieldOfStudy: "",
        },
    ],
};

export default educationData;