document.addEventListener('DOMContentLoaded', function() {
    const boton_enviar = document.querySelector("#boton_enviar");

    boton_enviar.addEventListener('click', function() {
        // Limpiar el contenido de los contenedores al inicio del clic
        const div_correcta = document.getElementById("contenedor_correctas");
        const div_incorrecta = document.getElementById("contenedor_incorrectas");
        div_correcta.innerHTML = ""; // Limpia el contenido
        div_incorrecta.innerHTML = ""; // Limpia el contenido

        // Obtener los valores de los selects
        const select = document.getElementById("opciones").value;
        const select2 = document.getElementById("opciones_2").value;
        const select3 = document.getElementById("opciones_3").value;
        const select4 = document.getElementById("opciones_4").value;
        const select5 = document.getElementById("opciones_5").value;
        const select6 = document.getElementById("opciones_6").value;
        const select7 = document.getElementById("opciones_7").value;
        const select8 = document.getElementById("opciones_8").value;
        const select9 = document.getElementById("opciones_9").value;
        const select10 = document.getElementById("opciones_10").value;

        // Procesar cada select
        switch (select) {
            case "opcion_contrasena_segura":
            case "opcion_contraseña_segura_2":
                div_correcta.innerHTML += "<p>1: Correcta</p>"; // Agrega contenido
                break;
            default:
                div_incorrecta.innerHTML += "<p>1: Incorrecta, debería ser Contraseña de mayúsculas, minúsculas, números y a veces carácteres especiales o Contraseña de más de 10 carácteres</p>";
                break;
        }

        switch (select2) {
            case "opcion_segura":
            case "opcion_segura_2":
            case "opcion_segura_3":
            case "opcion_segura_4":
                div_correcta.innerHTML += "<p>2: Correcta</p>";
                break;
            default:
                div_incorrecta.innerHTML += "<p>2: Incorrecta, debería ser Usar una VPN, Usar un Proxy, Usar un antivirus o Usar un firewall(cortafuegos)</p>";
                break;
        }

        switch (select3) {
            case "opcion_segura":
            case "opcion_segura_2":
                div_correcta.innerHTML += "<p>3: Correcta</p>";
                break;
            default:
                div_incorrecta.innerHTML += "<p>3: Incorrecta, debería ser De intentos de acceso en tu red local o De malware</p>";
                break;
        }

        switch (select4) {
            case "opcion_segura":
                div_correcta.innerHTML += "<p>4: Correcta</p>";
                break;
            default:
                div_incorrecta.innerHTML += "<p>4: Incorrecta, debería ser Un lenguaje de programación es un conjunto de reglas que permiten a los programadores o informáticos crear programas</p>";
                break;
        }

        // Repite el mismo patrón para los demás selects
        switch (select5) {
            case "opcion_segura":
                div_correcta.innerHTML += "<p>5: Correcta</p>";
                break;
            default:
                div_incorrecta.innerHTML += "<p>5: Incorrecta, debería ser Es un ordenador que maneja múltiples conexiones y así el internet puede existir, y los servidores pueden ser tcp, http, ftp etc...</p>";
                break;
        }

        switch (select6) {
            case "opcion_segura":
                div_correcta.innerHTML += "<p>6: Correcta</p>";
                break;
            default:
                div_incorrecta.innerHTML += "<p>6: Incorrecta, debería ser Los correos electrónicos y llamadas falsas(eso se le conoce como SPAM)</p>";
                break;
        }

        switch (select7) {
            case "opcion_segura":
                div_correcta.innerHTML += "<p>7: Correcta</p>";
                break;
            default:
                div_incorrecta.innerHTML += "<p>7: Incorrecta, debería ser Ransomware</p>";
                break;
        }

        switch (select8) {
            case "opcion_segura":
                div_correcta.innerHTML += "<p>8: Correcta</p>";
                break;
            default:
                div_incorrecta.innerHTML += "<p>8: Incorrecta, debería ser Porque algún tipo de malware puede borrarlos o encriptarlos</p>";
                break;
        }

        switch (select9) {
            case "opcion_segura":
                div_correcta.innerHTML += "<p>9: Correcta</p>";
                break;
            default:
                div_incorrecta.innerHTML += "<p>9: Incorrecta, debería ser Eso no existe</p>";
                break;
        }

        switch (select10) {
            case "opcion_segura":
                div_correcta.innerHTML += "<p>10: Correcta</p>";
                break;
            default:
                div_incorrecta.innerHTML += "<p>10: Incorrecta, debería ser Un ataque DDOS que consiste en enviar muchísimas solicitudes a un servidor para intentar sobrecargarlo y tumbarlo</p>";
                break;
        }
    });
});