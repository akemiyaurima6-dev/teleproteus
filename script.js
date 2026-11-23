document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-link");
    const secciones = document.querySelectorAll("header, section.paso-card");

    // Desplazamiento suave al hacer clic en los enlaces del índice
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const destinoId = link.getAttribute("href");
            const destinoElemento = document.querySelector(destinoId);
            if (destinoElemento) {
                destinoElemento.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Resaltado dinámico de la sección actual mientras se hace scroll
    window.addEventListener("scroll", () => {
        let seccionActual = "inicio";

        secciones.forEach(sec => {
            const top = sec.offsetTop - 120;
            if (window.scrollY >= top) {
                seccionActual = sec.getAttribute("id");
            }
        });

        links.forEach(link => {
            link.classList.remove("activo");
            if (link.getAttribute("href") === `#${seccionActual}`) {
                link.classList.add("activo");
            }
        });
    });
});