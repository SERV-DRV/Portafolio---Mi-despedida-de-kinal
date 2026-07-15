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
    { name: "CSS3", percentage: 85, icon: "css3-alt" },
    { name: "JAVA", percentage: 80, icon: "java" },
    { name: "JavaScript", percentage: 80, icon: "js-square" },
    { name: "Git", percentage: 80, icon: "git-alt" },
    { name: "MySQL", percentage: 75, icon: "database" },
    { name: "React", percentage: 75, icon: "react" },
    { name: "HTML5", percentage: 70, icon: "html5" },
    { name: "Node.js", percentage: 70, icon: "node-js" },
    { name: "MongoDB", percentage: 70, icon: "envira" },
    { name: "PostgreSQL", percentage: 70, icon: "database" },
    { name: "C#", percentage: 60, icon: "code" },
];

export const projects = [
    { 
        id: 1, 
        name: "Agenda-Web", 
        description: "Sistema web de agenda y gestión de contactos con favoritos.",
        fullDescription: "Este sistema tiene como objetivo ayudar a crear una agenda ordenada con datos de personas, permitiendo marcar tareas completadas, asignarse pendientes, crear contactos y marcarlos como favoritos de manera sencilla.",
        technologies: ["JavaScript", "MongoDB", "CSS3", "HTML5"],
        year: "2024",
        link: "https://github.com/SERV-DRV/GestorDeComentarios",
        demoLink: "https://serv-drv.github.io/Agenda-Web/",
        icon: "address-book"
    },
    { 
        id: 2, 
        name: "WorkAs (Final)", 
        description: "Gestión de tareas, contratos y facturación para programadores.",
        fullDescription: "Proyecto Final de Quinto Perito en Informática. Solución integral para programadores que necesitan registrar tareas y pagos por proyecto, implementando gestión de clientes, contratos y facturación básica.",
        technologies: ["Java", "JavaFX", "CSS"],
        year: "2024",
        link: "https://github.com/SERV-DRV/WorkAs--Final-",
        icon: "briefcase"
    },
    { 
        id: 3, 
        name: "Gestor Restaurante", 
        description: "Plataforma integral web y móvil para administración de restaurantes.",
        fullDescription: "Sistema completo de gestión para restaurantes que incluye plataforma web y aplicación móvil, abarcando roles desde administrador hasta cliente final.",
        technologies: ["JavaScript", "C#", "React Native", "React", "MySQL", "PostgreSQL", "MongoDB"],
        year: "2023",
        link: "https://github.com/IN6CM-GestorRestaurante",
        icon: "utensils"
    },
    { 
        id: 4, 
        name: "Deporte Mania", 
        description: "Maqueta de e-commerce y tienda online de artículos deportivos.",
        fullDescription: "Página de prueba y maqueta de una tienda online de artículos deportivos, enfocada en diseño web estructurado y estética moderna.",
        technologies: ["HTML5", "CSS3"],
        year: "2023",
        link: "https://github.com/SERV-DRV/PaginaPrueba_Deporte_Mania",
        icon: "running"
    },
    { 
        id: 5, 
        name: "Kinal-Familiar", 
        description: "Plataforma de gestión de recursos y presupuesto familiar.",
        fullDescription: "Sistema diseñado para optimizar y gestionar la economía y recursos a nivel familiar. Proporciona herramientas accesibles para el control de presupuestos y gastos con una interfaz amigable y orientada a resultados.",
        technologies: ["Java", "CSS"],
        year: "2022",
        link: "https://github.com/SERV-DRV/Kinal-Familiar",
        icon: "home"
    },
];
