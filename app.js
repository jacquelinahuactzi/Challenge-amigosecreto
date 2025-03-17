// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombres = [];

        function agregarAmigo() {
            const nombre = document.getElementById('nombre').value.trim();
            if (nombre === "") {
                alert('Por favor, ingresa un nombre válido.');
                return;
            }
            nombres.push(nombre);
            document.getElementById('nombre').value = "";
            actualizarLista();
        }

        function actualizarLista() {
            const lista = document.getElementById('listaAmigos');
            lista.innerHTML = "";
            nombres.forEach(nombre => {
                const li = document.createElement('li');
                li.textContent = nombre;
                lista.appendChild(li);
            });
        }

        function sortearAmigo() {
            if (nombres.length === 0) {
                alert('Agrega al menos un nombre para hacer el sorteo.');
                return;
            }
            const ganador = nombres[Math.floor(Math.random() * nombres.length)];
            document.getElementById('resultado').textContent = `El amigo secreto es: ${ganador}!`;
        }