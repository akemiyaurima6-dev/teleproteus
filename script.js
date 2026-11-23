document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-link");
    const secciones = document.querySelectorAll("header, section.paso-card");

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
