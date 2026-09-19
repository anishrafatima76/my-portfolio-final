import { Link } from "react-router-dom";

export default function Home() {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth"
        });
    };

    return (
        <div className="home">

            {/* ================= HERO ================= */}

            <section className="hero">

                <div className="hero-text">

                    <p className="welcome">
                        WELCOME TO MY PORTFOLIO
                    </p>

                    <h1>
                        Hi, I'm <span>Anishra Fatima</span>
                    </h1>

                    <h2>Frontend Developer</h2>

                    <p className="hero-description">
                        I build clean, responsive and user-friendly web
                        experiences using modern frontend technologies.
                        I enjoy turning ideas into functional and engaging
                        digital experiences.
                    </p>

                    <div className="hero-buttons">

                        <button
                            className="primary-btn"
                            onClick={() => scrollToSection("projects")}
                        >
                            View My Work
                        </button>

                        <button
                            className="secondary-btn"
                            onClick={() => scrollToSection("contact")}
                        >
                            Contact Me
                        </button>

                    </div>

                </div>

                <div className="hero-card">

                    <div className="hero-card-top">
                        <span className="status-dot"></span>
                        <span>AVAILABLE FOR PROJECTS</span>
                    </div>

                    <div className="developer-icon">
                        &lt;/&gt;
                    </div>

                    <h3>Frontend Developer</h3>

                    <p>
                        Building modern interfaces with
                        clean and thoughtful design.
                    </p>

                    <div className="hero-tech">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JS</span>
                        <span>React</span>
                    </div>

                </div>

            </section>


            {/* ================= ABOUT ================= */}

            <section className="about">

                <div className="section-heading">
                    <p>ABOUT ME</p>

                    <h2>
                        Turning Ideas Into Web Experiences
                    </h2>
                </div>

                <div className="about-content">

                    <div className="about-text">

                        <p>
                            I'm Anishra Fatima, a BS Information Technology
                            student with a growing passion for frontend
                            development. I enjoy creating responsive,
                            intuitive and visually clean websites.
                        </p>

                        <p>
                            I'm currently focused on strengthening my skills
                            in HTML, CSS, JavaScript and React by building
                            practical projects and exploring modern web
                            development techniques.
                        </p>

                    </div>

                    <div className="stats">

                        <div className="stat-card">
                            <span className="stat-number">03+</span>
                            <span className="stat-label">Projects</span>
                        </div>

                        <div className="stat-card">
                            <span className="stat-number">04+</span>
                            <span className="stat-label">Technologies</span>
                        </div>

                        <div className="stat-card">
                            <span className="stat-number">100%</span>
                            <span className="stat-label">Learning Mindset</span>
                        </div>

                    </div>

                </div>

            </section>


            {/* ================= SKILLS ================= */}

            <section className="skills">

                <div className="section-heading">
                    <p>MY SKILLS</p>

                    <h2>
                        Technologies I Work With
                    </h2>
                </div>

                <div className="skills-container">

                    <div className="skill">
                        <div className="skill-info">
                            <span>HTML5</span>
                            <span>90%</span>
                        </div>

                        <div className="progress-bar">
                            <div className="progress html"></div>
                        </div>
                    </div>

                    <div className="skill">
                        <div className="skill-info">
                            <span>CSS3</span>
                            <span>85%</span>
                        </div>

                        <div className="progress-bar">
                            <div className="progress css"></div>
                        </div>
                    </div>

                    <div className="skill">
                        <div className="skill-info">
                            <span>JavaScript</span>
                            <span>75%</span>
                        </div>

                        <div className="progress-bar">
                            <div className="progress javascript"></div>
                        </div>
                    </div>

                    <div className="skill">
                        <div className="skill-info">
                            <span>React</span>
                            <span>70%</span>
                        </div>

                        <div className="progress-bar">
                            <div className="progress react"></div>
                        </div>
                    </div>

                </div>

            </section>


            {/* ================= SERVICES ================= */}

            <section className="services">

                <div className="section-heading">
                    <p>WHAT I DO</p>

                    <h2>
                        Building For The Web
                    </h2>
                </div>

                <div className="services-container">

                    <div className="service-card">

                        <div className="service-number">
                            01
                        </div>

                        <h3>
                            Frontend Development
                        </h3>

                        <p>
                            Creating modern and interactive websites
                            using HTML, CSS, JavaScript and React.
                        </p>

                    </div>

                    <div className="service-card">

                        <div className="service-number">
                            02
                        </div>

                        <h3>
                            Responsive Design
                        </h3>

                        <p>
                            Designing responsive interfaces that work
                            smoothly across desktop, tablet and mobile.
                        </p>

                    </div>

                    <div className="service-card">

                        <div className="service-number">
                            03
                        </div>

                        <h3>
                            Web Applications
                        </h3>

                        <p>
                            Building practical web applications with
                            clean interfaces and useful interactive
                            features.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= PROJECTS ================= */}

            <section className="projects" id="projects">

                <div className="section-heading">
                    <p>MY PROJECTS</p>

                    <h2>
                        Featured Work
                    </h2>
                </div>

                <div className="projects-container">


                    {/* ================= PRODUCT ================= */}

                    <div className="project-card">

                        <div className="project-image product-image">

                            <div className="project-icon">
                                🛍️
                            </div>

                            <span className="project-badge">
                                FRONTEND
                            </span>

                        </div>

                        <div className="project-content">

                            <p className="project-type">
                                WEB DESIGN
                            </p>

                            <h3>
                                Product App
                            </h3>

                            <p>
                                A clean product interface designed to
                                present products in an organized and
                                user-friendly layout.
                            </p>

                            <div className="project-tech">
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JavaScript</span>
                            </div>

                            <Link to="/products">
                                View Project <span>→</span>
                            </Link>

                        </div>

                    </div>


                    {/* ================= WEATHER ================= */}

                    <div className="project-card">

                        <div className="project-image weather-image">

                            <div className="project-icon">
                                🌤️
                            </div>

                            <span className="project-badge">
                                REACT
                            </span>

                        </div>

                        <div className="project-content">

                            <p className="project-type">
                                WEB APPLICATION
                            </p>

                            <h3>
                                Weather App
                            </h3>

                            <p>
                                A responsive weather application that
                                fetches real-time weather information
                                based on the selected city.
                            </p>

                            <div className="project-tech">
                                <span>React</span>
                                <span>API</span>
                                <span>CSS</span>
                            </div>

                            <Link to="/weather-app">
                                View Project <span>→</span>
                            </Link>

                        </div>

                    </div>


                    {/* ================= TODO ================= */}

                    <div className="project-card">

                        <div className="project-image todo-image">

                            <div className="project-icon">
                                ✓
                            </div>

                            <span className="project-badge">
                                REACT
                            </span>

                        </div>

                        <div className="project-content">

                            <p className="project-type">
                                WEB APPLICATION
                            </p>

                            <h3>
                                Todo App
                            </h3>

                            <p>
                                A simple and interactive task management
                                application designed to organize daily
                                tasks efficiently.
                            </p>

                            <div className="project-tech">
                                <span>React</span>
                                <span>JavaScript</span>
                                <span>CSS</span>
                            </div>

                            <Link to="/todo-app">
                                View Project <span>→</span>
                            </Link>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= CONTACT ================= */}

            <section className="contact" id="contact">

                <div className="contact-content">

                    <p className="contact-label">
                        GET IN TOUCH
                    </p>

                    <h2>
                        Let's Build Something Together
                    </h2>

                    <p>
                        Have a project idea or want to connect?
                        Feel free to get in touch with me.
                    </p>

                    <a
                        href="mailto:anishrafatima1@gmail.com"
                        className="contact-main-btn"
                    >
                        Contact Me <span>→</span>
                    </a>

                </div>

            </section>

        </div>
    );
}


