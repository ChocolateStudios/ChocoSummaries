import EjemploRedArrendada from "../images/EjemploRedArrendada.PNG"

function Section6_TecnologiasWAN() {
    return (
        <div>
            <h1 id="tec-wan">Tecnologías WAN</h1>
            <h2 id="tec-wan-concepts">Conceptos de WAN</h2>

            <h3 id="tec-wan-concepts-porque">¿Por qué una WAN?</h3>
            <ul><li>Las WAN sirven para interconectar la LAN empresarial con las LAN remotas de sucursales y sitios de teletrabajo.</li>
                <li>Una WAN es propiedad de un proveedor de servicios, mientras que una LAN suele ser propiedad de una organización.</li></ul>

            <h3 id="tec-wan-concepts-necesarias">¿Son necesarias las WAN?</h3>
            <ul><li>Sin las WAN, las LAN serían una serie de redes aisladas.</li>
                <li>A medida que las organizaciones se expanden, las empresas necesitan poder comunicarse con sitios geográficamente separados</li></ul>

            <h3>Topologías de WAN</h3>
            <ul><li>Topología punto a punto
                    <ul><li>Emplea un circuito punto a punto entre dos terminales</li>
                        <li>Por lo general, implica una conexión de línea arrendada dedicada, como una línea T1/E1</li>
                        <li>Es transparente para la red del cliente y parece ser un enlace físico directo entre dos terminales</li></ul></li>
                <li>De estrella
                    <ul><li>Se aplica cuando se requiere una conexión de red privada entre varios sitios</li>
                        <li>Una sola interfaz al hub puede ser compartida por todos los circuitos de radio</li>
                        <li>Los sitios radiales se pueden interconectar a través del sitio de hub mediante circuitos virtuales y subinterfaces enrutadas del hub</li></ul></li>
                <li>Malla completa
                    <ul><li>Una desventaja de la topología radial es que la comunicación debe pasar a través del hub</li>
                        <li>Con una topología de malla completa con circuitos virtuales, cualquier sitio puede comunicarse directamente con cualquier otro sitio</li>
                        <li>La desventaja en este caso es la gran cantidad de circuitos virtuales que se deben configurar y mantener</li></ul></li>
                <li>Topología de doble conexión
                    <ul><li>Proporciona redundancia y equilibrio de carga, pero su implementación es más costosa que la de topologías de conexión simple</li>
                        <li>Requiere hardware de red adicional, incluidos routers y switches</li>
                        <li>Es más difícil de implementar porque requiere configuraciones complejas</li></ul></li></ul>

            <h3>WAN en el modelo OSI</h3>
            <ul><li>Las operaciones de WAN se centran principalmente en la capa física y en la capa de enlace de datos del modelo OSI</li>
                <li>Los requisitos de la capa de enlace de datos incluyen asignación de direcciones físicas, control de flujo y encapsulación</li>
                <li>Los protocolos de capa 1 describen la manera de proporcionar conexiones eléctricas, mecánicas, operativas y funcionales a los servicios de un proveedor de servicios de comunicación</li>
                <li>Los protocolos de capa 2 definen la forma en que se encapsulan los datos y los mecanismos para transferir las tramas resultantes</li></ul>

            <h3>Terminología común de la WAN</h3>
            <ul><li>Una diferencia principal entre una WAN y una LAN es que, para usar los servicios de red de una prestadora de servicios WAN, una empresa se debe suscribir a un proveedor de servicios WAN externo</li>
                <li>Terminología que se utiliza comúnmente para describir las conexiones WAN
                    <ul><li>Equipo local del cliente (CPE): consta de cables internos y dispositivos ubicados en el perímetro empresarial que se conectan a una prestadora de servicios</li>
                        <li>Equipo de comunicación de datos (DCE): también llamado “equipo de terminación de circuito de datos”, el DCE consta de dispositivos que colocan los datos en el bucle local. Principalmente, el DCE proporciona una interfaz para conectar a los suscriptores a un enlace de comunicación en la nube WAN</li>
                        <li>Equipo terminal de datos (DTE): dispositivos del cliente que transmiten los datos desde un equipo host o la red de un cliente para la transmisión a través de la WAN. El DTE se conecta al bucle local a través del DCE</li>
                        <li>Punto de demarcación: es un punto establecido en un edificio para separar el equipo del cliente del equipo del proveedor de servicios</li>
                        <li>Bucle local (“última milla”): cable de cobre o fibra propiamente dicho que conecta el CPE a la CO del proveedor de servicios</li>
                        <li>Oficina central (CO): la CO es la instalación o el edificio del proveedor de servicios local que conecta el CPE a la red del proveedor</li>
                        <li>Red interurbana: consta de líneas de comunicación y otros equipos digitales, de largo alcance y de fibra óptica dentro de la red del proveedor de servicios WAN</li></ul></li></ul>

            <h3>Dispositivos WAN</h3>
            <ul><li>Módem de Internet por acceso telefónico: tecnología WAN heredada que convierte (modula) las señales digitales producidas por una computadora en frecuencias de voz que se transmiten a través de líneas analógicas de la red de telefonía pública a otro módem para demodulación</li>
                <li>Servidor de acceso: tecnología heredada en el que el servidor controla y coordina el módem de Internet por acceso telefónico, y las comunicaciones de los usuarios de entrada y salida telefónica</li>
                <li>Módem de banda ancha: un tipo de módem digital que se utiliza con servicio de Internet por DSL o por cable de alta velocidad. Ambos funcionan de manera similar al módem de banda de voz, pero usan mayores velocidades de transmisión y frecuencias de banda ancha</li>
                <li>CSU/DSU: las líneas arrendadas digitales requieren una CSU y una DSU. La CSU proporciona terminación de la señal digital y asegura la integridad de la conexión mediante la corrección de errores y el monitoreo de la línea. La DSU convierte las tramas de línea en tramas que la LAN puede interpretar y viceversa</li>
                <li>Router: proporciona internetworking y puertos de interfaz de acceso WAN que se usan para conectarse a la del proveedor de servicios</li>
                <li>Router principal/switch multicapa: router o switch multicapa que reside en el centro o en el backbone de la WAN</li></ul>

            <h3>Conmutación de circuitos</h3>
            <ul><li>Las red de conmutación de circuitos son aquellas que establecen un circuito (o canal) dedicado entre los nodos y las terminales antes de que los usuarios se puedan comunicar</li>
                <li>Específicamente, la conmutación de circuitos establece una conexión virtual dedicada para voz o datos entre un emisor y un receptor en forma dinámica</li>
                <li>La comunicación no puede comenzar hasta que se establezca la conexión a través de la red del proveedor de servicios</li>
                <li>Marcar un número para realizar una llamada es un ejemplo de tecnología de conmutación de circuitos</li>
                <li>Los dos tipos más comunes de tecnologías WAN de conmutación de circuitos son la red pública de telefonía de conmutación (PSTN) y la red digital de servicios integrados (ISDN)</li></ul>
                
                
            <h3>Conmutación de paquetes</h3>
            <ul><li>A diferencia de la conmutación de circuitos, la conmutación de paquetes divide los datos en tráfico en paquetes que se enrutan a través de una red compartida</li>
                <li>No es necesario que se establezca un circuito y muchos pares de nodos se pueden comunicar a través del mismo canal</li>
                <li>Existen dos enfoques para la determinación de enlace de red de conmutación de paquetes
                    <ul><li>Sistemas sin conexión: se debe transportar toda la información de direccionamiento en cada paquete. Internet es un ejemplo de un sistema sin conexión</li>
                        <li>Sistemas orientados a la conexión: la red predetermina la ruta para un paquete, y cada paquete solo tiene que transportar un identificador. Un ejemplo de un sistema orientado a la conexión es Frame Relay (DLCI son los identificadores)</li></ul></li>
                <li>Los costos de la conmutación de paquetes son menores que los de la conmutación de circuitos; sin embargo, la latencia y fluctuación son mayores en las redes de conmutación de paquetes</li></ul>

            <div>
                <ul><li>PDU capa 4: Segmentos
                    <ul><li>TCP y UD</li>
                        <li>TCP fragmenta la información y al hacerlo añade un número de secuencia (para el orden) y un número de puerto lógico</li></ul></li></ul>
            </div>

            <h2>Selección de Tecnología WAN</h2>

            <h3>Opciones de conexión de enlace WAN</h3>
            <ul><li>Existen diversas opciones de conexión de acceso WAN que los ISP pueden utilizar para conectar el bucle local al perímetro empresarial</li>
                <li>Existen dos maneras en que una empresa puede tener acceso WAN
                    <ul><li>Infraestructura de WAN privada: las opciones pueden incluir líneas punto a punto arrendadas dedicadas, enlaces de conmutación de circuitos, como PSTN o ISDN, y enlaces de conmutación de paquetes, como WAN Ethernet, ATM o Frame Relay</li>
                        <li>Infraestructura de WAN pública: los proveedores de servicios puede ofrecer acceso a Internet de banda ancha mediante DSL, cable y acceso satelital. Los datos que se transmiten entre sitios corporativos a través de la WAN pública se deben proteger mediante VPN</li></ul></li></ul>

            <h3>Infraestructura de red del proveedor de servicios</h3>
            <ul><li>Las redes de proveedor de servicios son complejas y constan principalmente de medios de fibra óptica de ancho de banda de alta velocidad, que usan el estándar de red óptica síncrona (SONET) o de jerarquía digital síncrona (SDH)</li>
                <li>Un avance más reciente en los medios de fibra óptica para las comunicaciones de largo alcance se denomina “multiplexación por división de longitud de onda densa” (DWDM)
                    <ul><li>Multiplica la cantidad de ancho de banda que puede admitir un único hilo de fibra</li>
                        <li>Habilita comunicaciones bidireccionales a través de un hilo de fibra</li>
                        <li>Puede multiplexar más de 80 canales de datos diferentes en una única fibra</li>
                        <li>Cada canal puede transportar una señal multiplexada de 10 Gb/s</li></ul></li></ul>

            <h3>Líneas arrendadas</h3>
            <ul><li>Cuando se requieren conexiones dedicadas permanentes, se utiliza un enlace punto a punto para proporcionar una ruta de comunicaciones WAN preestablecida desde las instalaciones del cliente hasta la red del proveedor</li>
                <li>Las líneas arrendadas varían en precio según el ancho de banda requerido y la distancia entre las dos rutas conectadas</li></ul>

            <img src={EjemploRedArrendada} style={{ width: '40%', marginLeft: '4%' }}/>

            <h3>Dial-up</h3>
            <ul><li>WAN armada con una conexión a petición mediante un módem y la red telefónica de voz</li>
                <li>Cuando no hay ninguna otra tecnología WAN disponible, es posible que se requiera acceso WAN por dial-up</li>
                <li>Por ejemplo, una ubicación remota podría usar módems y líneas telefónicas analógicas para proporcionar baja capacidad y conexiones de conmutación dedicadas</li>
                <li>Los bucles locales tradicionales, que usan cableado de cobre, pueden transportar datos informáticos binarios a través de la red telefónica de voz mediante un módem</li>
                <li>El módem modula los datos binarios en una señal analógica en el origen y demodula la señal analógica en datos binarios en el destino</li>
                <li>Las características físicas del bucle local y su conexión a la PSTN limitan la velocidad de señal a menos de 56 kb/s</li></ul>

            <h3>ISDN</h3>
            <ul><li>La red digital de servicios integrados (ISDN) es una tecnología de conmutación de circuitos que habilita al bucle local de una PSTN para transportar señales digitales, lo que da como resultado conexiones de conmutación de mayor capacidad</li>
                <li>ISDN cambia las conexiones internas de la PSTN para que transporte señales digitales multiplexadas por división de tiempo (TDM) en vez de señales analógicas</li>
                <li>TDM permite que se transfieran dos o más señales, o flujos de bits, como subcanales en un canal de comunicación</li>
                <li>La conexión ISDN puede requerir un adaptador de terminal (TA), que es un dispositivo utilizado para conectar las conexiones de la interfaz de velocidad básica (BRI) de ISDN a un router</li>
                <li>Existen dos tipos de interfaces de ISDN
                    <ul><li>Interfaz de velocidad básica (BRI): la ISDN BRI brinda dos canales portadores de 64 kb/s (B) para transmitir voz y datos, y un canal delta de 16 kb/s (D) para señalización, establecimiento de llamadas y otros fines</li>
                        <li>Interfaz de velocidad primaria (PRI): en América del Norte, PRI proporciona 23 canales B con 64 kb/s y un canal D con 64 kb/s para una velocidad de bits total de hasta 1,544 Mb/s. Esto incluye cierta sobrecarga adicional para la sincronización</li></ul></li>
                <li>Una aplicación común de ISDN es proporcionar la capacidad adicional necesaria en una conexión de línea arrendada. Si la línea arrendada falla, la ISDN también se puede usar como respaldo</li>
                <li>Si bien la ISDN es una tecnología importante para las redes de proveedores de servicio de teléfono, su popularidad ha disminuido debido a DSL y otros servicios de banda ancha</li></ul>
            
            <h3>Frame Relay</h3>
            <ul><li>La retransmisión de tramas (Frame Relay) es una tecnología WAN multiacceso sin difusión (NBMA) de capa 2 que se utiliza para interconectar las redes LAN de una empresa
                    <ul><li>Velocidades de transmisión de datos de hasta 4 Mb/s con algunos proveedores que ofrecen velocidades mayores</li></ul></li>
                <li>Un único router puede utilizarse para conectar varios sitios mediante PVC que pueden transportar tráfico de datos y voz</li>
                <li>Los routers perimetrales solo requieren una única interfaz, incluso cuando se usan varios circuitos virtuales</li>
                <li>Frame Relay crea PVC que se identifican únicamente por un identificador de conexión de enlace de datos (DLCI). Los PVC y los DLCI aseguran la comunicación bidireccional de un dispositivo DTE a otro</li></ul>

            <h3>ATM</h3>
            <ul><li>La tecnología del modo de transferencia asíncrona (ATM) puede transferir voz, video y datos a través de redes privadas y públicas
                    <ul><li>ATM construye sobre una arquitectura basada en celdas, en vez de una arquitectura basada en tramas</li>
                        <li>Las celdas tienen siempre una longitud fija de 53 bytes</li>
                        <li>Las celdas ATM contiene un encabezado ATM de 5 bytes, seguido de 48 bytes de contenido ATM</li></ul></li>
                <li>Las celdas pequeñas de longitud fija son adecuadas para el tráfico de voz y video</li>
                <li>Una línea ATM típica necesita casi un 20% más de ancho de banda que Frame Relay para transportar el mismo volumen de tráfico de red</li>
                <li>Cuando la celda transporta los paquetes de capa de red segmentados, la sobrecarga es mayor debido a que el ATM debe poder rearmar los paquetes en el destino</li></ul>

            {/* Falta hasta Elección de una conexión de enlace WAN (continuación) */}
        </div>
    );
}

export default Section6_TecnologiasWAN;