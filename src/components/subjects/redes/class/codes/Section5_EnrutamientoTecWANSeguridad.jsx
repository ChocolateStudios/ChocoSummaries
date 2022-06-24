import CoincidenciaLargaIPv4 from "../images/CoincidenciaLargaIPv4.PNG"

function Section5_EnrutamientoTecWANSeguridad() {
    return (
        <div>
            <h1 id="enrt-tecwan-sec">Enrutamiento, Tecnologías WAN y Seguridad</h1>
            
            <h2 id="enrt-tecwan-sec-routers">Sobre los routers</h2>
            <ul><li>Los routers interconectan redes WAN con redes LAN (e incluso con redes inalámbricas)</li>
                <li>Tienen una tabla de enrutamiento</li>
                <li>Trabaja en la capa 3</li>
                <li>Cada vez que llega un paquete el router chequea la cabecera donde se encuentran la ip fuente y destino. Se verifica la ip destino y en el prefijo se obtiene el identificador de red. Lo compara con el que existe en su tabla y si hay coincidencia lo envía por esa interfaz.</li>
                <li>Es el equipo más importante de las redes de comunicación</li></ul>

            <h2 id="enrt-tecwan-sec-tabla-enru">Tabla de enrutamiento</h2>
            <ul><li>Es una especie de mapa para los routers que le indica al router por qué dirección IP, por qué interfaz puede ingresar y conmutar todos los paquetes</li>
                <li>Para que el router pueda enrutar los paquete necesita un protocolo de enrutamiento. Puede ser estático o dinámico</li></ul>
          
            <h2 id="enrt-tecwan-sec-protos">Protocolos de Enrutamiento</h2>
            <ul><li id="enrt-tecwan-sec-protos-estatic">Enrutamiento estático
                <ul><li>Se configura manualmente (como cuando se asigna direcciones estáticas a cada pc, solo que ahora en routers)</li></ul></li>
                <li id="enrt-tecwan-sec-protos-dinamic">Enrutamiento dinámico
                    <ul><li>Es automático</li>
                        <li>Se necesita configurar las redes locales para que automáticamente el router empiece a cambiar información de su tabla de enrutamiento con otros routers (y viceversa) que también tenga configurado el mismo protocolo.</li></ul></li></ul>

            <h2 id="enrt-tecwan-sec-dir-ip">Direcciones IP</h2>
            <ul><li id="enrt-tecwan-sec-dir-ip-pub">Direcciones públicas
                    <ul><li>Casi todas las que no sean privadas</li></ul></li>
                <li id="enrt-tecwan-sec-dir-ip-priv">Direcciones privadas
                    <ul><li>Clase A: 10.0.0.0 a 10.255.255.255</li>
                        <li>Clase B: 172.16.0.0 a 172.31.255.255</li>
                        <li>Clase C: 192.168.0.0 a 192.168.255.255</li></ul></li></ul>

            <h2 id="enrt-tecwan-sec-det-ruta">Determinación de ruta</h2>
            
            <h3 id="enrt-tecwan-sec-det-ruta-funcs">Funciones de router</h3>
            <ul><li>Cuando un router recibe un paquete IP (PDU capa 3) en una interfaz, determina qué interfaz debe usar para reenviar el paquete hacia el destino. Esto se conoce como enrutamiento. La interfaz que usa el router para reenviar el paquete puede ser el destino final o una red conectada a otro router que se usa para llegar a la red de destino. Generalmente, cada red a la que se conecta un router requiere una interfaz separada, aunque no siempre es el caso.</li>
                <li>Las funciones principales de un router son determinar la mejor ruta para reenviar paquetes basándose en la información de su tabla de enrutamiento, y reenviar paquetes hacia su destino.</li></ul>
            
            <h3 id="enrt-tecwan-sec-det-ruta-mejor-ruta">Mejor ruta es igual a la coincidencia más larga</h3>
            <ul><li>La mejor ruta de la tabla de enrutamiento también se conoce como la coincidencia más larga.</li>
                <li>La tabla de enrutamiento contiene entradas de ruta que consisten en un prefijo (dirección de red) y una longitud de prefijo. Para que haya una coincidencia entre la dirección IPv4 de destino de un paquete y una ruta en la tabla de enrutamiento, una cantidad mínima de los bits del extremo izquierdo deben coincidir entre la dirección IPv4 del paquete y la ruta en la tabla de routing. La máscara de subred de la ruta en la tabla de enrutamiento se utiliza para determinar la cantidad mínima de bits del extremo izquierdo que deben coincidir.</li>
                <li>La mejor coincidencia es la ruta de la tabla de enrutamiento que contiene la mayor cantidad de bits del extremo izquierdo coincidentes con la dirección IPv4 de destino del paquete. La coincidencia más larga es la ruta preferida.</li>
                <li>Ejemplo
                    <ul><li>En la tabla, un paquete IPv4 tiene la dirección IPv4 de destino 172.16.0.10. El router tiene tres rutas posibles que coinciden con este paquete: 172.16.0.0/12, 172.16.0.0/18 y 172.16.0.0/26. De las tres rutas, 172.16.0.0/26 tiene la coincidencia más larga y se elige para reenviar el paquete. Recuerde que para que cualquiera de estas rutas se considere una coincidencia debe tener al menos la cantidad de bits que se indica en la máscara de subred de la ruta</li></ul></li></ul>

            <img src={CoincidenciaLargaIPv4} style={{ width: '50%', marginLeft: '15%' }}/>
            <br /><br />

            <h3 id="enrt-tecwan-sec-det-ruta-gen-tabla">Generar tabla de enrutamiento</h3>
            <ul><li id="enrt-tecwan-sec-det-ruta-gen-tabla-conec-dir">Redes conectadas directamente
                    <ul><li>Se agregan a la tabla de enrutamiento cuando una interfaz local está configurada con una dirección IP y una máscara de subred (longitud de prefijo) y está activa (arriba y arriba).</li></ul></li>
                <li id="enrt-tecwan-sec-det-ruta-gen-tabla-remote">Redes remotas
                    <ul><li>Redes que no están conectadas directamente al router. Un router descubre redes remotas de dos maneras:</li>
                        <li>Rutas estáticas
                            <ul><li>Se agrega a la tabla de enrutamiento cuando se configura manualmente una ruta.</li></ul></li>
                        <li>Protocolos de enrutamiento dinámico
                            <ul><li>Se han añadido a la tabla de enrutamiento cuando los protocolos de enrutamiento aprenden dinámicamente acerca de la red remota.</li></ul></li></ul></li>
                <li id="enrt-tecwan-sec-det-ruta-gen-tabla-predet">Ruta predeterminada
                    <ul><li>Específica un router de salto siguiente que se utilizará cuando la tabla de enrutamiento no contiene una ruta específica que coincida con la dirección IP de destino. Una ruta predeterminada puede ser una ruta estática o aprenderse automáticamente de un protocolo de enrutamiento dinámico.</li>
                        <li>Una ruta predeterminada tiene una longitud de prefijo /0. Esto significa que no es necesario que los bits coincidan con la dirección IP de destino para que se utilice esta entrada de ruta. Si no hay rutas con una coincidencia mayor que 0 bits, la ruta predeterminada se utiliza para reenviar el paquete. A veces, la ruta predeterminada se conoce como una Gateway of Last Resort.</li></ul></li></ul>

            <h2 id="enrt-tecwan-sec-det-ruta-tabla-enru">Tabla de enrutamiento IP</h2>
            
            <h3 id="enrt-tecwan-sec-det-ruta-tabla-enru-origen">Origen de rutas</h3>
            <ul><li>Una tabla de enrutamiento contiene una lista de rutas a redes conocidas (prefijos y longitudes de prefijo). La fuente de esta información se deriva de lo siguiente:
                    <ul><li>Redes conectadas directamente</li>
                        <li>Rutas estáticas</li>
                        <li>Protocolos de enrutamiento dinámico</li></ul></li>
                <li>El origen de cada ruta en la tabla de enrutamiento se identifica mediante un código. Los códigos comunes incluyen los siguientes:
                    <ul><li>L - Identifica la dirección asignada a la interfaz de un router</li>
                        <li>C - Identifica una red conectada directamente</li>
                        <li>S - Identifica una ruta estática creada para llegar a una red específica</li>
                        <li>O - Identifica una red que se descubre de forma dinámica de otro router con el protocolo de routing OSPF</li>
                        <li>* - La ruta es candidata para una ruta predeterminada</li></ul></li></ul>
            
            <h3 id="enrt-tecwan-sec-det-ruta-tabla-enru-princip">Principios de la tabla de enrutamiento</h3>
            <ul><li>Existen tres principios de tabla de enrutamiento, como se describe en la tabla. Estos son problemas que se abordan mediante la configuración adecuada de protocolos de enrutamiento dinámico o rutas estáticas en todos los routers entre los dispositivos de origen y destino
                    <ul><li>Cada router toma su decisión por sí solo, basándose en la información que tiene en su propia tabla de enrutamiento</li>
                        <li>La información de una tabla de enrutamiento de un router no coincide necesariamente con la tabla de enrutamiento de otro enrutador</li>
                        <li>La información de enrutamiento sobre una ruta no proporciona información de enrutamiento de retorno</li></ul></li></ul>

            <h3 id="enrt-tecwan-sec-det-ruta-tabla-enru-entrad">Entradas de tabla de enrutamiento</h3>
            <ol><li><b>Origen de Ruta</b> - Identifica el modo en que se descubrió la ruta</li>
                <li><b>Red de destino (longitud de prefijo y prefijo)</b> - identifica la dirección de la red remota</li>
                <li><b>Distancia administrativa</b> - Identifica la confiabilidad del origen de la ruta. Los valores más bajos indican el origen de ruta preferido</li>
                <li><b>Métrica</b> - Identifica el valor asignado para llegar a la red remota. Los valores más bajos indican las rutas preferidas</li>
                <li><b>Siguiente salto</b> - Identifica la dirección del router siguiente al que se debe reenviar el paquete</li>
                <li><b>Marca de hora de la ruta</b> - Identifica el tiempo que pasó desde que se descubrió la ruta</li>
                <li><b>Interfaz de salida</b> - Identifica la interfaz de salida que se debe utilizar para reenviar un paquete hacia el destino final</li></ol>

            <a href="#id0">Volver a índice</a>
            <br/><br/>

        </div>
    );
  }
  
  export default Section5_EnrutamientoTecWANSeguridad;
  