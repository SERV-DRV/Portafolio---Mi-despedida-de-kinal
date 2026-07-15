export const personalInfo = {
    name: "Santiago Enrique De Rosa Vasquez",
    alias: "SERV-DRV",
    title: "Estudiante - Full Stacker",
    age: 18,
    education: "Perito en Informática",
    institution: "Fundación Kinal",
    bio: "Soy una persona que desea convertirse en un desarrollador a futuro. Quiero lograr viajar y especializarme fuera del país, logrando un desarrollo pleno tanto profesional, personal como humanamente. Sueño con regresar a Guatemala y fundar mi propia empresa tecnológica.",
    links: {
        email: "mailto:sderosa-2023220@kinal.edu.gt",
        github: "https://github.com/SERV-DRV",
        linkedin: "#",
        compuTrabajo: "#"
    }
};

export const skills = [
    { name: "CSS3", percentage: 85, color: "#2a9d8f", icon: "css3-alt" },
    { name: "JAVA", percentage: 80, color: "#48cae4", icon: "java" },
    { name: "JavaScript", percentage: 80, color: "#7209b7", icon: "js-square" },
    { name: "Git", percentage: 80, color: "#f72585", icon: "git-alt" },
    { name: "MySQL", percentage: 75, color: "#f4a261", icon: "database" },
    { name: "React", percentage: 75, color: "#48cae4", icon: "react" },
    { name: "HTML5", percentage: 70, color: "#f4a261", icon: "html5" },
    { name: "Node.js", percentage: 70, color: "#2a9d8f", icon: "node-js" },
    { name: "Spring Boot", percentage: 70, color: "#7209b7", icon: "leaf" },
    { name: "MongoDB", percentage: 70, color: "#2a9d8f", icon: "envira" },
    { name: "PostgreSQL", percentage: 70, color: "#48cae4", icon: "database" },
    { name: "C#", percentage: 60, color: "#7209b7", icon: "code" },
];

export const softSkills = [
    { name: "Liderazgo", icon: "crown", description: "Capacidad para guiar equipos y tomar iniciativas." },
    { name: "Trabajo en Equipo", icon: "users", description: "Colaboración efectiva para alcanzar metas comunes." },
    { name: "Resolución de Problemas", icon: "puzzle-piece", description: "Análisis lógico para superar obstáculos complejos." },
    { name: "Adaptabilidad", icon: "sync-alt", description: "Flexibilidad ante nuevos entornos y tecnologías." },
    { name: "Autodidacta", icon: "book-reader", description: "Pasión por el aprendizaje continuo y proactivo." },
    { name: "Comunicación", icon: "comments", description: "Expresión clara y asertiva de ideas." }
];

export const projects = [
    { 
        id: 1, 
        name: "Agenda-Web", 
        description: "Sistema web de agenda y gestión de contactos con favoritos.",
        fullDescription: "Este sistema tiene como objetivo ayudar a crear una agenda ordenada con datos de personas, permitiendo marcar tareas completadas, asignarse pendientes, crear contactos y marcarlos como favoritos de manera sencilla.",
        technologies: ["JavaScript", "MongoDB", "CSS3", "HTML5"],
        year: "2026",
        link: "https://github.com/SERV-DRV/GestorDeComentarios",
        demoLink: "https://serv-drv.github.io/Agenda-Web/",
        icon: "address-book",
        images: [
            require("../../assets/projects/Agenda/agenda_1.png"),
            require("../../assets/projects/Agenda/agenda_2.png"),
            require("../../assets/projects/Agenda/agenda_3.png"),
            require("../../assets/projects/Agenda/agenda_4.png"),
            require("../../assets/projects/Agenda/agenda_5.png")
        ]
    },
    { 
        id: 2, 
        name: "WorkAs (Final)", 
        description: "Gestión de tareas, contratos y facturación para programadores.",
        fullDescription: "Proyecto Final de Quinto Perito en Informática. Solución integral para programadores que necesitan registrar tareas y pagos por proyecto, implementando gestión de clientes, contratos y facturación básica.",
        technologies: ["Java", "JavaFX", "CSS"],
        year: "2025",
        link: "https://github.com/SERV-DRV/WorkAs--Final-",
        icon: "briefcase",
        images: [
            require("../../assets/projects/WorkAss/workass_1.jpeg")
        ]
    },
    { 
        id: 3, 
        name: "Gestor Restaurante", 
        description: "Plataforma integral web y móvil para administración de restaurantes.",
        fullDescription: "Sistema completo de gestión para restaurantes que incluye plataforma web y aplicación móvil, abarcando roles desde administrador hasta cliente final.",
        technologies: ["JavaScript", "C#", "React Native", "React", "MySQL", "PostgreSQL", "MongoDB"],
        year: "2026",
        link: "https://github.com/IN6CM-GestorRestaurante",
        icon: "utensils",
        images: [
            require("../../assets/projects/GestorRestaurante/gestor_1.jpeg"),
            require("../../assets/projects/GestorRestaurante/gestor_2.jpeg"),
            require("../../assets/projects/GestorRestaurante/gestor_3.jpeg"),
            require("../../assets/projects/GestorRestaurante/gestor_4.jpeg")
        ]
    },
    { 
        id: 4, 
        name: "Deporte Mania", 
        description: "Maqueta de e-commerce y tienda online de artículos deportivos.",
        fullDescription: "Página de prueba y maqueta de una tienda online de artículos deportivos, enfocada en diseño web estructurado y estética moderna.",
        technologies: ["HTML5", "CSS3"],
        year: "2025",
        link: "https://github.com/SERV-DRV/PaginaPrueba_Deporte_Mania",
        icon: "running",
        images: [
            require("../../assets/projects/DeporteMania/deportemania_1.png"),
            require("../../assets/projects/DeporteMania/deportemania_2.png"),
            require("../../assets/projects/DeporteMania/deportemania_3.png"),
            require("../../assets/projects/DeporteMania/deportemania_4.png"),
            require("../../assets/projects/DeporteMania/deportemania_5.png")
        ]
    },
    { 
        id: 5, 
        name: "Kinal-Familiar", 
        description: "Plataforma de gestión de recursos y presupuesto familiar.",
        fullDescription: "Sistema diseñado para optimizar y gestionar la economía y recursos a nivel familiar. Proporciona herramientas accesibles para el control de presupuestos y gastos con una interfaz amigable y orientada a resultados.",
        technologies: ["Java", "CSS"],
        year: "2025",
        link: "https://github.com/SERV-DRV/Kinal-Familiar",
        icon: "home",
        images: [
            require("../../assets/projects/KinalFamiliar/kinal_1.jpeg"),
            require("../../assets/projects/KinalFamiliar/kinal_2.jpeg"),
            require("../../assets/projects/KinalFamiliar/kinal_3.jpeg"),
            require("../../assets/projects/KinalFamiliar/kinal_4.jpeg"),
            require("../../assets/projects/KinalFamiliar/kinal_5.jpeg"),
            require("../../assets/projects/KinalFamiliar/kinal_6.jpeg"),
            require("../../assets/projects/KinalFamiliar/kinal_7.jpeg")
        ],
        video: require("../../assets/projects/KinalFamiliar/kinal_video.mp4")
    },
];
