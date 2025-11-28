import microsoft from "../assets/img/medium/microsoft.png";
import uiuc from "../assets/img/medium/uiuc.png";
import amazon from "../assets/img/medium/amazon.png";

const positions = {
  positionHistory: [
    {
      title: "Software Development Engineer Intern",
      startEndDate: {
        start: {
          month: 8,
          year: 2025,
        },
        end: {
          month: 11,
          year: 2025,
        },
      },
      description: "Fall 2025 Internship",
      companyName: "Amazon",
      companyLocation: "Sunnyvale, CA",
      companyLogo: amazon,
      linkedInUrl: "https://www.linkedin.com/company/amazon/",
    },
    {
      title: "Software Engineer Intern",
      startEndDate: {
        start: {
          month: 5,
          year: 2025,
        },
        end: {
          month: 8,
          year: 2025,
        },
      },
      description: "Summer 2025 Internship",
      companyName: "Microsoft",
      companyLocation: "Redmond, WA",
      companyLogo: microsoft,
      linkedInUrl: "https://www.linkedin.com/company/microsoft/",
    },
    {
      title: "Software Engineer Intern",
      startEndDate: {
        start: {
          month: 5,
          year: 2024,
        },
        end: {
          month: 8,
          year: 2024,
        },
      },
      description: "12 week SWE internship",
      companyName: "Microsoft",
      companyLocation: "Redmond, WA",
      companyLogo: microsoft,
      linkedInUrl: "https://www.linkedin.com/company/microsoft/",
    },
    {
      title: "Course Assistant - Intro to CS II (CS 128)",
      startEndDate: {
        start: {
          month: 12,
          year: 2022,
        },
        end: {
          month: 5,
          year: 2023,
        },
      },
      description:
        "• Led weekly C++ discussion sections, reinforcing student understanding in core concepts like RAII, OOP, and DSA.\n" +
        "• Provided individualized support to 1,200+ students in 1:1 office hours, leveraging deep C++ expertise to clarify concepts and debug complex issues.\n" +
        "• Collaborated with Professor Nowak and course staff to ensure consistent instruction and seamless student support.",
      companyName: "University of Illinois Urbana-Champaign",
      companyLocation: "Champaign, IL",
      companyLogo: uiuc,
      linkedInUrl:
        "https://www.linkedin.com/school/university-of-illinois-urbana-champaign/",
    },
  ],
};

export default positions;