// script/language.js

const translations = {
    pt: {
        siteTitle: "Carlos Moroni",
        aboutNav: "Sobre",
        educationNav: "Formação",
        contactNav: "Contato",
        aboIntro: "Sou Desenvolvedor Full Stack Jr e Pesquisador Jr em Ciência de Dados, com expertise em UX/UI Design e automação de processos. <em>(Sim, sou um entusiasta da inovação, sou curioso e aprendo rápido)</em>. Gosto de atuar na interseção entre tecnologia e negócios, transformando problemas complexos em soluções escaláveis.",
        aboFinal: "Minha abordagem combina metodologias ágeis com pesquisa orientada a dados — <em>“Innovation requires an understanding of the job to be done, not just the technology itself” - Clayton Christensen - </em> Acredito que inovar de verdade é entender o humano, antes de inventar a próxima maravilha tecnológica.",
        projectsSectionTitle: "Projetos", // Assuming you'll add a title for this section
        designHeader: "Design",
        frontendHeader: "Front-End",
        backendHeader: "Back-End",
        businessRPAHeader: "Business & RPA",
        dataScienceAIHeader: "Data Science & IA",

        // Project titles and descriptions (example, repeat for all projects)
        itauAssisTitle: "Itaú Assis",
        itauAssisDesc: "Interfaces com foco em UX Research e UI Design.",
        finnAppTitle: "FinnApp",
        finnAppDesc: "Controle financeiro validado com UX/UI.",
        qReceitasTitle: "QReceitas",
        qReceitasDesc: "Busca de receitas com interface simples e eficaz.",
        aluraFlixTitle: "AluraFlix",
        aluraFlixDesc: "Catálogo com React + Formulário dinâmico.",
        larconTitle: "Larcon Planejados",
        larconDesc: "Página comercial para marcenaria com slider, mapa e contatos.",
        aluraGeekTitle: "Alura Geek",
        aluraGeekDesc: "Site de e-commerce com funcionalidades CRUD.",
        decodTextTitle: "Decodificador de Texto",
        decodTextDesc: "App responsivo com funções de codificar e decodificar.",
        farmaciaCRUDTitle: "Farmácia CRUD",
        farmaciaCRUDDesc: "API para cadastro de produtos e categorias, com endpoints REST completos.",
        contaBancariaTitle: "Conta Bancária",
        contaBancariaDesc: "Simulação de sistema bancário com operações como saque, depósito e transferências.",
        livrariaDigitalTitle: "Livraria Digital",
        livrariaDigitalDesc: "Sistema de gerenciamento de livros, autores e categorias com relacionamentos.",
        lumaSolarTitle: "Consultoria Luma Solar",
        lumaSolarDesc: "Presença digital, automações e estratégias de marketing.",
        banVicTitle: "BanVic",
        banVicDesc: "Dashboard de banco fictício com análise de churn e insights.",
        northwindTitle: "Northwind",
        northwindDesc: "Case de BI para gestão de stakeholders e KPIs.",
        mackPesquisaTitle: "MackPesquisa - CIBERDEM",
        mackPesquisaDesc: "Bolsa de graduação no projeto \"Mineração e Visualização de Argumentos de Redes Sociais pesquisador Jr\".",
        iaEducacionalTitle: "IA Educacional",
        iaEducacionalDesc: "Bot em Python que ajuda crianças a aprenderem matemática.",
        modeloChurnTitle: "Modelo de Churn",
        modeloChurnDesc: "Modelo preditivo de abandono de clientes usando Pandas e Scikit-Learn.",

        // Education Titles
        eduUXUIDesign: "UX/UI Design",
        eduFigmaAplicado: "Figma aplicado",
        eduInteligenciaArtificial: "Inteligência Artificial",
        eduPhotoshopAplicado: "Photoshop Aplicado",
        eduReactJS: "React - Js<br>Oracle Next<br>Education",
        eduOracleCloudDB: "Oracle Cloud<br>Banco de dados",
        eduFrontendONE: "Front-End<br>Oracle Next<br>Education",
        eduOracleCloudInfra: "Oracle Cloud<br>Infrastructure",
        eduMySQLONE: "MySQL<br>Oracle Next<br>Education",
        eduBootcampJava: "BootCamp<br> Fullstack Java",
        eduADS: "Analise e Desenvolvimento<br>de Sistemas - Mackenzie 2026",
        eduAssistenteTI: "Assistente de TI<br>Unicesumar - 2024",

        // Footer Text
        footerRole: "Desenvolvedor Full Stack Jr <br> Pesquisador Jr <br>& Designer",
        footerAbout: "Sobre",
        footerProjects: "Projetos",
        footerContact: "Contato",
        footerRights: "&copy; 2024 Carlos Moroni Garcia. Todos os direitos reservados.<br>carlosmoronisud@gmail.com",
        footerMessage: "Construído com ♥ e muito código"
    },
    en: {
        siteTitle: "Carlos Moroni",
        aboutNav: "About",
        educationNav: "Education",
        contactNav: "Contact",
        aboIntro: "I'm a Junior Full Stack Developer and Junior Data Science Researcher, with expertise in UX/UI Design and process automation. <em>(Yes, I'm an innovation enthusiast, curious, and a quick learner)</em>. I enjoy working at the intersection of technology and business, transforming complex problems into scalable solutions.",
        aboFinal: "My approach combines agile methodologies with data-driven research — <em>“Innovation requires an understanding of the job to be done, not just the technology itself” - Clayton Christensen - </em> I believe true innovation is understanding humans before inventing the next technological marvel.",
        projectsSectionTitle: "Projects",
        designHeader: "Design",
        frontendHeader: "Front-End",
        backendHeader: "Back-End",
        businessRPAHeader: "Business & RPA",
        dataScienceAIHeader: "Data Science & AI",

        // Project titles and descriptions
        itauAssisTitle: "Itaú Assis",
        itauAssisDesc: "Interfaces focused on UX Research and UI Design.",
        finnAppTitle: "FinnApp",
        finnAppDesc: "Financial control validated with UX/UI.",
        qReceitasTitle: "QRecipes",
        qReceitasDesc: "Recipe search with a simple and effective interface.",
        aluraFlixTitle: "AluraFlix",
        aluraFlixDesc: "Catalog with React + Dynamic Form.",
        larconTitle: "Larcon Planned",
        larconDesc: "Commercial page for carpentry with slider, map, and contacts.",
        aluraGeekTitle: "Alura Geek",
        aluraGeekDesc: "E-commerce site with CRUD functionalities.",
        decodTextTitle: "Text Decoder",
        decodTextDesc: "Responsive app with encoding and decoding functions.",
        farmaciaCRUDTitle: "Pharmacy CRUD",
        farmaciaCRUDDesc: "API for product and category registration, with complete REST endpoints.",
        contaBancariaTitle: "Bank Account",
        contaBancariaDesc: "Banking system simulation with operations like withdrawal, deposit, and transfers.",
        livrariaDigitalTitle: "Digital Bookstore",
        livrariaDigitalDesc: "Book, author, and category management system with relationships.",
        lumaSolarTitle: "Luma Solar Consulting",
        lumaSolarDesc: "Digital presence, automation, and marketing strategies.",
        banVicTitle: "BanVic",
        banVicDesc: "Fictional bank dashboard with churn analysis and insights.",
        northwindTitle: "Northwind",
        northwindDesc: "BI case for stakeholder and KPI management.",
        mackPesquisaTitle: "MackResearch - CIBERDEM",
        mackPesquisaDesc: "Undergraduate scholarship in the project \"Social Media Argument Mining and Visualization Jr. Researcher.\"",
        iaEducacionalTitle: "Educational AI",
        iaEducacionalDesc: "Python bot that helps children learn math.",
        modeloChurnTitle: "Churn Model",
        modeloChurnDesc: "Predictive customer churn model using Pandas and Scikit-Learn.",

        // Education Titles
        eduUXUIDesign: "UX/UI Design",
        eduFigmaAplicado: "Figma Applied",
        eduInteligenciaArtificial: "Artificial Intelligence",
        eduPhotoshopAplicado: "Photoshop Applied",
        eduReactJS: "React - Js<br>Oracle Next<br>Education",
        eduOracleCloudDB: "Oracle Cloud<br>Database",
        eduFrontendONE: "Front-End<br>Oracle Next<br>Education",
        eduOracleCloudInfra: "Oracle Cloud<br>Infrastructure",
        eduMySQLONE: "MySQL<br>Oracle Next<br>Education",
        eduBootcampJava: "Fullstack Java<br>BootCamp",
        eduADS: "Analysis and Development<br>of Systems - Mackenzie 2026",
        eduAssistenteTI: "IT Assistant<br>Unicesumar - 2024",

        // Footer Text
        footerRole: "Junior Full Stack Developer <br> Junior Researcher <br>& Designer",
        footerAbout: "About",
        footerProjects: "Projects",
        footerContact: "Contact",
        footerRights: "&copy; 2024 Carlos Moroni Garcia. All rights reserved.<br>carlosmoronisud@gmail.com",
        footerMessage: "Built with ♥ and lots of code"
    },
    es: {
        siteTitle: "Carlos Moroni",
        aboutNav: "Sobre mí",
        educationNav: "Formación",
        contactNav: "Contacto",
        aboIntro: "Soy Desarrollador Full Stack Jr y Investigador Jr en Ciencia de Datos, con experiencia en Diseño UX/UI y automatización de procesos. <em>(Sí, soy un entusiasta de la innovación, soy curioso y aprendo rápido)</em>. Me gusta trabajar en la intersección entre tecnología y negocios, transformando problemas complejos en soluciones escalables.",
        aboFinal: "Mi enfoque combina metodologías ágiles con investigación orientada a datos — <em>“Innovation requires an understanding of the job to be done, not just the technology itself” - Clayton Christensen - </em> Creo que la verdadera innovación es entender al ser humano antes de inventar la próxima maravilla tecnológica.",
        projectsSectionTitle: "Proyectos",
        designHeader: "Diseño",
        frontendHeader: "Front-End",
        backendHeader: "Back-End",
        businessRPAHeader: "Negocios & RPA",
        dataScienceAIHeader: "Ciencia de Datos & IA",

        // Project titles and descriptions
        itauAssisTitle: "Itaú Assis",
        itauAssisDesc: "Interfaces enfocadas en UX Research y Diseño UI.",
        finnAppTitle: "FinnApp",
        finnAppDesc: "Control financiero validado con UX/UI.",
        qReceitasTitle: "QRecetas",
        qReceitasDesc: "Búsqueda de recetas con una interfaz simple y efectiva.",
        aluraFlixTitle: "AluraFlix",
        aluraFlixDesc: "Catálogo con React + Formulario dinámico.",
        larconTitle: "Larcon Planificados",
        larconDesc: "Página comercial para carpintería con slider, mapa y contactos.",
        aluraGeekTitle: "Alura Geek",
        aluraGeekDesc: "Sitio de comercio electrónico con funcionalidades CRUD.",
        decodTextTitle: "Decodificador de Texto",
        decodTextDesc: "Aplicación responsiva con funciones de codificación y decodificación.",
        farmaciaCRUDTitle: "Farmacia CRUD",
        farmaciaCRUDDesc: "API para registro de productos y categorías, con endpoints REST completos.",
        contaBancariaTitle: "Cuenta Bancaria",
        contaBancariaDesc: "Simulación de sistema bancario con operaciones como retiro, depósito y transferencias.",
        livrariaDigitalTitle: "Librería Digital",
        livrariaDigitalDesc: "Sistema de gestión de libros, autores y categorías con relaciones.",
        lumaSolarTitle: "Consultoría Luma Solar",
        lumaSolarDesc: "Presencia digital, automatizaciones y estrategias de marketing.",
        banVicTitle: "BanVic",
        banVicDesc: "Panel de control de banco ficticio con análisis de abandono e insights.",
        northwindTitle: "Northwind",
        northwindDesc: "Caso de BI para la gestión de stakeholders y KPIs.",
        mackPesquisaTitle: "MackInvestigación - CIBERDEM",
        mackPesquisaDesc: "Beca de pregrado en el proyecto \"Minería y Visualización de Argumentos de Redes Sociales Investigador Jr.\".",
        iaEducacionalTitle: "IA Educativa",
        iaEducacionalDesc: "Bot en Python que ayuda a los niños a aprender matemáticas.",
        modeloChurnTitle: "Modelo de Churn",
        modeloChurnDesc: "Modelo predictivo de abandono de clientes usando Pandas y Scikit-Learn.",

        // Education Titles
        eduUXUIDesign: "Diseño UX/UI",
        eduFigmaAplicado: "Figma aplicado",
        eduInteligenciaArtificial: "Inteligencia Artificial",
        eduPhotoshopAplicado: "Photoshop aplicado",
        eduReactJS: "React - Js<br>Oracle Next<br>Education",
        eduOracleCloudDB: "Oracle Cloud<br>Base de datos",
        eduFrontendONE: "Front-End<br>Oracle Next<br>Education",
        eduOracleCloudInfra: "Oracle Cloud<br>Infraestructura",
        eduMySQLONE: "MySQL<br>Oracle Next<br>Education",
        eduBootcampJava: "BootCamp<br> Fullstack Java",
        eduADS: "Análisis y Desarrollo<br>de Sistemas - Mackenzie 2026",
        eduAssistenteTI: "Asistente de TI<br>Unicesumar - 2024",

        // Footer Text
        footerRole: "Desarrollador Full Stack Jr <br> Investigador Jr <br>& Diseñador",
        footerAbout: "Sobre",
        footerProjects: "Proyectos",
        footerContact: "Contacto",
        footerRights: "&copy; 2024 Carlos Moroni Garcia. Todos los derechos reservados.<br>carlosmoronisud@gmail.com",
        footerMessage: "Construido con ♥ y mucho código"
    }
};

let currentLanguage = 'pt'; // Default language

function applyTranslations() {
    const lang = translations[currentLanguage];

    // Header
    document.querySelector('.site-title').innerHTML = lang.siteTitle;
    document.querySelector('.navContent').innerHTML = `
        <li><a class="aboNav" href="#abo">${lang.aboutNav}</a></li>
        <li><a class="eduNav" href="#projetos">${lang.projectsSectionTitle}</a></li>
        <li><a class="contNav" href="#contato">${lang.contactNav}</a></li>
    `;

    // About Section
    document.querySelector('.aboIntro').innerHTML = lang.aboIntro;
    document.querySelector('.aboFinal').innerHTML = lang.aboFinal;

    // Accordion Headers (Skills/Projects)
    // Design
    document.querySelectorAll('.accordion-header')[0].childNodes[0].nodeValue = lang.designHeader + ' ';
    // Front-End
    document.querySelectorAll('.accordion-header')[1].childNodes[0].nodeValue = lang.frontendHeader + ' ';
    // Back-End
    document.querySelectorAll('.accordion-header')[2].childNodes[0].nodeValue = lang.backendHeader + ' ';
    // Business & RPA
    document.querySelectorAll('.accordion-header')[3].childNodes[0].nodeValue = lang.businessRPAHeader + ' ';
    // Data Science & IA
    document.querySelectorAll('.accordion-header')[4].childNodes[0].nodeValue = lang.dataScienceAIHeader + ' ';


    // Education Titles
    document.querySelector('.accordion-education .education-card:nth-child(1) .certificates-title p').innerHTML = lang.eduUXUIDesign;
    document.querySelector('.accordion-education .education-card:nth-child(2) .educaton-title p').innerHTML = lang.eduFigmaAplicado;
    document.querySelector('.accordion-education .education-card:nth-child(3) .educaton-title p').innerHTML = lang.eduInteligenciaArtificial;
    document.querySelector('.accordion-education .education-card:nth-child(4) .educaton-title p').innerHTML = lang.eduPhotoshopAplicado;

    // Front-End Education
    const frontendEduCards = document.querySelectorAll('.accordion-item:nth-child(2) .accordion-education .education-card .educaton-title p');
    if (frontendEduCards[0]) frontendEduCards[0].innerHTML = lang.eduReactJS;
    if (frontendEduCards[1]) frontendEduCards[1].innerHTML = lang.eduOracleCloudDB;
    if (frontendEduCards[2]) frontendEduCards[2].innerHTML = lang.eduFrontendONE;
    if (frontendEduCards[3]) frontendEduCards[3].innerHTML = lang.eduOracleCloudInfra;
    if (frontendEduCards[4]) frontendEduCards[4].innerHTML = lang.eduMySQLONE;

    // Back-End Education
    const backendEduCards = document.querySelectorAll('.accordion-item:nth-child(3) .accordion-education .education-card .certificates-title p');
    if (backendEduCards[0]) backendEduCards[0].innerHTML = lang.eduBootcampJava;

    // Data Science & AI Education
    const dataScienceEduCards = document.querySelectorAll('.accordion-item:nth-child(5) .accordion-education .education-card .educaton-title p');
    if (dataScienceEduCards[0]) dataScienceEduCards[0].innerHTML = lang.eduADS;
    if (dataScienceEduCards[1]) dataScienceEduCards[1].innerHTML = lang.eduAssistenteTI;


    // Projects (needs more robust handling for dynamic projects,
    // but for fixed content, direct selection works)
    // Design Projects
    document.querySelector('.project-card:nth-child(1) h4').innerHTML = lang.itauAssisTitle;
    document.querySelector('.project-card:nth-child(1) p').innerHTML = lang.itauAssisDesc;
    document.querySelector('.project-card:nth-child(2) h4').innerHTML = lang.finnAppTitle;
    document.querySelector('.project-card:nth-child(2) p').innerHTML = lang.finnAppDesc;
    document.querySelector('.project-card:nth-child(3) h4').innerHTML = lang.qReceitasTitle;
    document.querySelector('.project-card:nth-child(3) p').innerHTML = lang.qReceitasDesc;

    // Front-End Projects (assuming they start from the 4th project card overall, or 1st in their carousel)
    // This part requires careful indexing or specific class names for accuracy.
    // For now, I'm assuming the nth-child logic applies to the overall project-card list.
    // It's safer to add unique IDs or more specific classes to project cards if you want precise targeting.
    const frontendProjects = document.querySelectorAll('.accordion-item:nth-child(2) .carousel .project-card');
    if(frontendProjects[0]) {
        frontendProjects[0].querySelector('h4').innerHTML = lang.aluraFlixTitle;
        frontendProjects[0].querySelector('p').innerHTML = lang.aluraFlixDesc;
    }
    if(frontendProjects[1]) {
        frontendProjects[1].querySelector('h4').innerHTML = lang.larconTitle;
        frontendProjects[1].querySelector('p').innerHTML = lang.larconDesc;
    }
    if(frontendProjects[2]) {
        frontendProjects[2].querySelector('h4').innerHTML = lang.aluraGeekTitle;
        frontendProjects[2].querySelector('p').innerHTML = lang.aluraGeekDesc;
    }
    if(frontendProjects[3]) {
        frontendProjects[3].querySelector('h4').innerHTML = lang.decodTextTitle;
        frontendProjects[3].querySelector('p').innerHTML = lang.decodTextDesc;
    }

    // Back-End Projects
    const backendProjects = document.querySelectorAll('.accordion-item:nth-child(3) .carousel .project-card');
    if(backendProjects[0]) {
        backendProjects[0].querySelector('h4').innerHTML = lang.farmaciaCRUDTitle;
        backendProjects[0].querySelector('p').innerHTML = lang.farmaciaCRUDDesc;
    }
    if(backendProjects[1]) {
        backendProjects[1].querySelector('h4').innerHTML = lang.contaBancariaTitle;
        backendProjects[1].querySelector('p').innerHTML = lang.contaBancariaDesc;
    }
    if(backendProjects[2]) {
        backendProjects[2].querySelector('h4').innerHTML = lang.livrariaDigitalTitle;
        backendProjects[2].querySelector('p').innerHTML = lang.livrariaDigitalDesc;
    }

    // Business & RPA Projects
    const businessProjects = document.querySelectorAll('.accordion-item:nth-child(4) .carousel .project-card');
    if(businessProjects[0]) {
        businessProjects[0].querySelector('h4').innerHTML = lang.lumaSolarTitle;
        businessProjects[0].querySelector('p').innerHTML = lang.lumaSolarDesc;
    }
    if(businessProjects[1]) {
        businessProjects[1].querySelector('h4').innerHTML = lang.banVicTitle;
        businessProjects[1].querySelector('p').innerHTML = lang.banVicDesc;
    }
    if(businessProjects[2]) {
        businessProjects[2].querySelector('h4').innerHTML = lang.northwindTitle;
        businessProjects[2].querySelector('p').innerHTML = lang.northwindDesc;
    }

    // Data Science & AI Projects
    const dataScienceProjects = document.querySelectorAll('.accordion-item:nth-child(5) .carousel .project-card');
    if(dataScienceProjects[0]) {
        dataScienceProjects[0].querySelector('h4').innerHTML = lang.mackPesquisaTitle;
        dataScienceProjects[0].querySelector('p').innerHTML = lang.mackPesquisaDesc;
    }
    if(dataScienceProjects[1]) {
        dataScienceProjects[1].querySelector('h4').innerHTML = lang.iaEducacionalTitle;
        dataScienceProjects[1].querySelector('p').innerHTML = lang.iaEducacionalDesc;
    }
    if(dataScienceProjects[2]) {
        dataScienceProjects[2].querySelector('h4').innerHTML = lang.modeloChurnTitle;
        dataScienceProjects[2].querySelector('p').innerHTML = lang.modeloChurnDesc;
    }

    // Footer
    document.querySelector('.footer-brand p').innerHTML = lang.footerRole;
    document.querySelector('.footer-links a:nth-child(1)').innerHTML = lang.footerAbout;
    document.querySelector('.footer-links a:nth-child(2)').innerHTML = lang.footerProjects;
    document.querySelector('.footer-links a:nth-child(3)').innerHTML = lang.footerContact;
    document.querySelector('.footer-bottom p:nth-child(1)').innerHTML = lang.footerRights;
    document.querySelector('.footer-message').innerHTML = lang.footerMessage;


    // Update active button class
    document.querySelectorAll('.btnLang').forEach(button => {
        button.classList.remove('active');
    });
    document.getElementById(currentLanguage).classList.add('active');

    // Store preferred language in local storage
    localStorage.setItem('portfolioLanguage', currentLanguage);
}

function changeLanguage(lang) {
    currentLanguage = lang;
    applyTranslations();
}

// Set initial language based on local storage or default
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('portfolioLanguage');
    if (savedLanguage && translations[savedLanguage]) {
        currentLanguage = savedLanguage;
    }
    applyTranslations();
});