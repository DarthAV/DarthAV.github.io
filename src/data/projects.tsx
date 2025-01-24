import tripvisor from "../assets/img/medium/tripvisor.png";

const projectsData = {
  projects: [
    {
      title: "Distributed File-Sharing Service",
      description: "Developed a cross-platform peer-to-peer file-sharing service in Go, utilizing consistent hashing in a distributed ring. Designed efficient mechanisms for file lookup, caching, replication, and consistency between peers.",
      image: "https://via.placeholder.com/150",
      skills: ["Go", "Distributed Systems", "Consistent Hashing"],
      githubUrl: "https://github.com/DarthAV",
    },
    {
      title: "Scalable File Storage Server/Client",
      description: "Developed a scalable file-sharing application in C using POSIX APIs, enabling concurrent handling of hundreds of clients with non-blocking I/O and epoll. Implemented a custom text-based protocol for client-server communication, supporting CRUD operations, over binary data-transmission protocols.",
      image: "https://via.placeholder.com/150",
      skills: ["C", "POSIX APIs", "Non-blocking I/O", "epoll"],
      githubUrl: "https://github.com/DarthAV",
    },
    {
      title: "GPU Optimized Parallel Convolutional Layer",
      description: "Developed a highly optimized parallel convolutional layer for deep learning using CUDA C++ to run on NVIDIA GPUs. Leveraged GPU parallelism to accelerate matrix operations, achieving significant speedup in convolution operations. Integrated memory management and kernel optimization techniques to enhance performance and reduce overhead.",
      image: "https://via.placeholder.com/150",
      skills: ["CUDA C++", "GPU Parallelism", "Deep Learning"],
      githubUrl: "https://github.com/DarthAV",
    },
    {
      title: "CrimeTrack Los Angeles",
      description: "Built a React and Express.js web application that allows Los Angeles residents and tourists to access and visualize comprehensive crime data. Integrated OpenStreetMap API and MySQL (GCP SQL) to filter crime by location, date, and type on an interactive map, aiding users in making informed safety decisions. Enabled registered users to report recent crimes to provide real-time insights on city safety.",
      image: "https://via.placeholder.com/150",
      skills: ["React", "Express.js", "OpenStreetMap API", "MySQL"],
      githubUrl: "https://github.com/DarthAV",
    },
    {
      title: "AI Chess Agent",
      description: "Created an AI-based chess engine using Python capable of playing chess against human opponents or other engines. Implemented alpha-beta pruning, minimax algorithm, and heuristics to evaluate game states and optimize decisions.",
      image: "https://via.placeholder.com/150",
      skills: ["Python", "AI", "Alpha-beta Pruning", "Minimax Algorithm"],
      githubUrl: "https://github.com/DarthAV",
    },
    {
      title: "E-commerce Market (HackIllinois 2024 Project)",
      description: "Developed a React and Flask web app that streamlines buying, selling, and renting within the University of Illinois community, with secure Google OAuth integration for user authentication. Designed an intuitive interface with Chakra UI and incorporated a Levenshtein Distance algorithm for precise results. Utilized SQLite for data storage, enabling users to seamlessly manage their listing and connect with customers.",
      image: "https://via.placeholder.com/150",
      skills: ["React", "Flask", "Google OAuth", "Chakra UI", "SQLite"],
      githubUrl: "https://github.com/DarthAV",
    },
    {
      title: "TripVisor",
      description: "Developed a mobile app in React Native and TypeScript to help users plan road trips with interactive maps and route-building capabilities. Integrated Google Maps, Places, and Routes APIs to allow users to add, reorder, and view detailed stop information, including suggested breaks and night-stay options. Leveraged Azure Cosmos DB for NoSQL storage, allowing users to save trip data across devices via Google Account linkage, streamlining the travel planning experience.",
      image: tripvisor,
      skills: ["React Native", "TypeScript", "Google Maps API", "Azure Cosmos DB"],
      githubUrl: "https://github.com/DarthAV",
    },
    {
      title: "Portfolio Website",
      description: "Developed a personal portfolio website using React and styled with HeroUI to showcase projects and professional achievements. Designed responsive layouts to ensure a seamless user experience across different screen sizes and devices. Optimized the website for fast load times and search engine visibility (SEO).",
      image: "https://via.placeholder.com/150",
      skills: ["React", "HeroUI", "SEO"],
      githubUrl: "https://github.com/DarthAV",
    },
    {
      title: "Road Object Image Segmentation for Self-Driving Cars",
      description: "Developed an image segmentation system in Python and TensorFlow for detecting road objects in vehicular systems. Leveraged the YOLOv3 model “DarkNet”, achieving high segmentation accuracy on a realtime video feed.",
      image: "https://via.placeholder.com/150",
      skills: ["Python", "TensorFlow", "YOLOv3", "Image Segmentation"],
      githubUrl: "https://github.com/DarthAV",
    },
  ],
};

export default projectsData;
