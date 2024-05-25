const texts = {
    pt: {
        aboNav: "Sobre",
        eduNav: "Formação",
        contNav: "Contato",
        welcome: "Bem-vindo à minha página.<br>Deixe-me mostrar meus projetos",
        portfolio: "Portfólio",
        portfolioDescription: "Desafio Alura Portfólio",
        repo: "Repositório",
        demo: "Ver demo",
        figma: "Figma",
        techSkills: "Habilidades Técnicas",
        interpersonalSkills: "Habilidades Interpessoais",
        hobbies: "Hobbies",
        edu: "Formação",
        dateUni: "Jun/2023 até Dez/2025",
        dateOne: "Jan/2024 até Ago/2024",
        dateEbac: "Jun/2022 até Ago/2024",
        aboT: "Sobre",
        abotC: "Sou estudante de Análise e Desenvolvimento de Sistemas com foco em Front-end e Design de UX/UI. Depois de 10 anos na indústria, agora estou fazendo a transição para o desenvolvimento de produtos digitais. Apaixonado por tecnologia e inovação, estou procurando novos desafios para criar experiências digitais de impacto. Vamos colaborar para transformar ideias em realidade!",
        contact: "Contato",
        nomeLab: "Nome",
        emailLab: "Email",
        subLab: "Assunto",
        msgLab: "Mensagem",
        send: "Enviar",
        foot: "Desenvolvido por Carlos Moroni Garcia<br>2024",
        sobe: "sobe"

    },
    es: {
        aboNav: "Sobre",
        eduNav: "Educación",
        contNav: "Contáctame",
        welcome: "Bienvenido a mi página.<br>Déjame mostrarte mis proyectos",
        portfolio: "Portafolio",
        portfolioDescription: "Desafío Alura Portafolio",
        repo: "Repositorio",
        demo: "Ver demo",
        figma: "Figma",
        techSkills: "Habilidades Técnicas",
        interpersonalSkills: "Habilidades Interpersonales",
        hobbies: "Pasatiempos",
        edu: "Educación",
        dateUni: "Jun/2023 hasta Dic/2025",
        dateOne: "Ene/2024 hasta Ago/2024",
        dateEbac: "Jun/2022 hasta Ago/2024",
        aboT: "Sobre",
        abotC: "Soy estudiante de Análisis y Desarrollo de Sistemas con un enfoque en Front-end y Diseño de UX/UI. Después de 10 años en la industria, ahora estoy transitando hacia el desarrollo de productos digitales. Apasionado por la tecnología y la innovación, busco nuevos desafíos para crear experiencias digitales con impacto. ¡Colaboremos para dar vida a las ideas!",
        contact: "Contacto",
        nomeLab: "Nombre",
        emailLab: "Email",
        subLab: "Asunto",
        msgLab: "Mensaje",
        send: "Enviar",
        foot: "Desarrollado por Carlos Moroni Garcia<br>2024",
        sobe: "Arriba"
    },
    en: {
        aboNav: "About",
        eduNav: "Education",
        contNav: "Get in Touch",
        welcome: "Welcome to my page.<br>Let me show you my projects",
        portfolio: "Portfolio",
        portfolioDescription: "Alura Portfolio Challenge",
        repo: "Repository",
        demo: "View demo",
        figma: "Figma",
        techSkills: "Hard Skills",
        interpersonalSkills: "Soft Skills",
        hobbies: "Hobbies",
        edu: "Education",
        dateUni: "Jun/2023 to Dec/2025",
        dateOne: "Jan/2024 to Aug/2024",
        dateEbac: "Jun/2022 to Aug/2024",
        aboT: "About",
        abotC: "I am a student of Systems Analysis and Development with a focus on Front-end and UX/UI Design. After 10 years in the industry, I am now transitioning to digital product development. Passionate about technology and innovation, I am seeking new challenges to create impactful digital experiences. Let's collaborate to bring ideas to life!",
        contact: "Contact",
        nomeLab: "Name",
        emailLab: "Email",
        subLab: "Subject",
        msgLab: "Message",
        send: "Send",
        foot: "Developed by Carlos Moroni Garcia<br>2024",
        sobe: "Up"
    }
};

function changeLanguage(lang) {
    document.querySelector('.aboNav').innerHTML = texts[lang].aboNav;
    document.querySelector('.eduNav').innerHTML = texts[lang].eduNav;
    document.querySelector('.contNav').innerHTML = texts[lang].contNav;
    document.querySelector('.welcome-message').innerHTML = texts[lang].welcome;
    document.querySelector('.portfolio').textContent = texts[lang].portfolio;
    document.querySelector('.portfolio-description').textContent = texts[lang].portfolioDescription;
    document.querySelectorAll('.rep').forEach(el => el.textContent = texts[lang].repo);
    document.querySelectorAll('.demo').forEach(el => el.textContent = texts[lang].demo);
    document.querySelectorAll('.fig').forEach(el => el.textContent = texts[lang].figma);
    document.querySelector('.harsK').textContent = texts[lang].techSkills;
    document.querySelector('.softK').textContent = texts[lang].interpersonalSkills;
    document.querySelector('.titleHobb').textContent = texts[lang].hobbies;
    document.querySelector('.eduT').textContent = texts[lang].edu;
    document.querySelector('.dateUni').textContent =  texts[lang].dateUni;
    document.querySelector('.dateOne').textContent =  texts[lang].dateOne;
    document.querySelector('.dateEbac').textContent =  texts[lang].dateEbac;
    document.querySelector('.aboT').innerHTML = texts[lang].aboT;
    document.querySelector('.aboContent span').textContent =  texts[lang].abotC;
    document.querySelector('.contT').innerHTML = texts[lang].contact;
    document.querySelector('.nomeLab').innerHTML = texts[lang].nomeLab;    
    document.querySelector('.emailLab').innerHTML = texts[lang].emailLab;    
    document.querySelector('.subLab').innerHTML = texts[lang].subLab;    
    document.querySelector('.msgLab').innerHTML = texts[lang].msgLab;    
    document.querySelector('#enviarBtn').value = texts[lang].send;
    document.querySelector('.foot').innerHTML = texts[lang].foot;
    document.querySelector('#sobe').innerHTML = texts[lang].sobe;

     // Remover a classe 'active' de todos os botões
     document.querySelectorAll('.language-buttons .btn').forEach(btn => btn.classList.remove('active'));
        
     // Adicionar a classe 'active' ao botão clicado
     document.querySelector(`#${lang}`).classList.add('active');
}


