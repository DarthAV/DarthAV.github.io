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
                    "https://siebelschool.illinois.edu/",
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
                schoolName: "Interlake High School",
                schoolLogoUrl: interlake,
                linkedInUrl:
                    "https://interlakehigh.bsd405.org/",
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
