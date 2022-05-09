function Section3_ModelosYProtocolos() {
    return (
      <div>
        <h1 id="mods-prots">Modelos y protocolos</h1>
        
        <h2 id="mods-prots-intro">Introducción TCP/IP Networking</h2>
        <ul>
          <li id="mods-prots-intro-mod-red">Modelo de red</li>
          <ul>
            <li>Existen estándares y protocolos, que son acuerdos de una parte particular de cómo debería funcionar una red</li>
            <li>Los modelos de redes definen una estructura y diferentes categorías (capas) de estándares y protocolos</li>
            <li>Un modelo de red define reglas sobre cómo debe funcionar cada parte de la red, así como también cómo las partes deben funcionar juntas para que toda la red funcione correctamente</li>
          </ul>
        </ul>

        <h2 id="mods-prots-intro-mod-osi">Modelo Osi</h2>
        <ul>
          <li>7 capas</li>
          <li>Me da el marco conceptual de como funciona una red de comunicación</li>
          <li>Es teórico, conceptual</li>
        </ul>

        <h3 id="mods-prots-intro-mod-tcp">TCP/IP</h3>
        <ul>
          <li>4 capas</li>
          <li>Es práctico</li>
          <li>Frecuentemente implementado en redes de internet</li>
        </ul>
        
        <h3 id="mods-prots-intro-mod-basics">Aspectos básicos</h3>
        <ul>
          <li>Elementos para una comunicación</li>
          <ul>
            <li>Fuente (remitente)</li>
            <ul>
              <li>Servidor</li>
            </ul>
            <li>Destino (receptor)</li>
            <ul>
              <li>Cliente</li>
            </ul>
            <li>Canales (medios)</li>
            <ul>
              <li>Medios de transmición</li>
            </ul>
          </ul>
        </ul>
        
        <h3 id="mods-prots-intro-mod-prots">Protocolos</h3>
        <ul>
          <li>Todas las comunicaciones se rigen por protocolos</li>
          <li>Son las reglas que seguirán las comunicaciones</li>
          <li>Estas reglas variarán en función del protocolo</li>
          <ul>
            <li>Requisitos</li>
            <ul>
              <li>Identificar emisor y receptor</li>
              <li>Idioma y gramática en común</li>
              <li>Velocidad (bps) y momento de entrega</li>
              <li>Confirmación y acuses de recibo</li>
              <li>Codificación de los mensaje (capa 1)</li>
              <li>
                Formato y encapsulamiento del mensaje
                <ul>
                  <li>Formato de la estructura del paquete</li>
                  <li>Encapsulamiento es el proceso de pasar de la capa 7 a la capa 1</li>
                </ul>
              </li>
              <li>
                Tamaño del mensaje
                <ul>
                  <li>MTU (Unidad de transferencia máxima)</li>
                </ul>
              </li>
              <li>Sincronización del mensaje</li>
              <li>Opciones de entrega del mensaje</li>
            </ul>
          </ul>
        </ul>

        <h3 id="mods-prots-intro-mod-cod-message">Codificación del mensaje</h3>
        <ul>
          <li>Proceso mediante el cual la información se convierte en otra forma aceptable para la transmisión</li>
          <li>La decodificación revierte este proceso para interpretar la idea</li>
        </ul>

        <h3 id="mods-prots-intro-mod-cod-message">Formato y encapsulamiento del mensaje</h3>
        <ul>
          <li>En el proceso en el que se transmite los datos del dispositivo A a un dispositivo B remoto hay encapsulamiento</li>
          <li>
            La información se fragmenta y en cada fragmento se añada determinado tipo de dirección
            <ul>
              <li>Direcciones físicas, direcciones lógicas, direcciones de puertos lógicos</li>
            </ul>
          </li>
          <li>
            A cada unidad se le conoce como PDU (Unidad de dato de Protocolo)
            <ul>
              <li>Tamaño típico de 40 bytes</li>
            </ul>
          </li>
        </ul>

        <h3 id="mods-prots-intro-mod-temporizacion-mensaje">Temporización del mensaje</h3>
        <ul>
          <li>
            <p id="mods-prots-intro-mod-temporizacion-mensaje-flujo">Control de flujo</p>
            <ul>
              <li>Administra la velocidad de transmisión de datos</li>
              <li>Define cuánta información se puede enviar y la velocidad a la que se puede entregar</li>
            </ul>
          </li>
          <li>
            <p id="mods-prots-intro-mod-temporizacion-rpta">Tiempo de espera de respuesta</p>
            <ul>
              <li>Administra el tiempo que espera un dispositivo cuando no escucha una respuesta del destino</li>
            </ul>
          </li>
          <li>
            <p id="mods-prots-intro-mod-temporizacion-access">El método de acceso</p>
            <ul>
              <li>Determina en qué momento alguien puede enviar un mensaje</li>
            </ul>
          </li>
        </ul>
        
        <ul>
          <li>Puede haber varias reglas que rijan cuestiones como las «colisiones». Esto es cuando más de un dispositivo envía tráfico al mismo tiempo y los mensajes se dañan</li>
          <li>Algunos protocolos son proactivos e intentan evitar colisiones; otros protocolos son reactivos y establecen un método de recuperación después de que se produzca la colisión</li>
        </ul>
        
        <h3 id="mods-prots-intro-mod-opts-entrega-m">Opciones de entrega de mensaje</h3>
        <ul>
          <li>
            Unidifusión
            <ul>
              <li>Comunicación uno a uno</li>
            </ul>
          </li>
          <li>
            Multidifusión
            <ul>
              <li>De uno a muchos, normalmente no a todos</li>
            </ul>
          </li>
          <li>
            Difusión
            <ul>
              <li>Uno para todos</li>
            </ul>
          </li>
        </ul>

        <h2 id="mods-prots-prots">Protocolos</h2>
        <ul>
          <li>Los protocolos de red definen un conjunto común de reglas</li>
          <li>
            <p id="mods-prots-prots-level">Se puede implementar a nivel de</p>
            <ul>
              <li>Software</li>
              <li>Hardware</li>
              <li>Ambos</li>
            </ul>
          </li>
          <li>
            <p id="mods-prots-prots-feature">Un protocolo tiene</p>
            <ul>
              <li>Software</li>
              <li>Hardware</li>
              <li>Ambos</li>
            </ul>
          </li>
          <li>
            <p id="mods-prots-prots-tipos">Tipos</p>
            <ul>
              <li>Comunicaciones de red</li>
              <li>Seguridad de redes</li>
              <li>Tabla</li>
              <li>Detecciónn de servicios</li>
            </ul>
          </li>
        </ul>

        <h3 id="mods-prots-funct">Función</h3>
        <p>Los dispositivos usan protocolos acordados para comunicarse</p>
        <ul>
          <li>
            <p id="mods-prots-funct-dir">Direccionamiento</p>
            <ul>
              <li>Emisor y receptor identificados</li>
              <li>
                Direccionamiento físico
                <ul>
                  <li>Dirección MAC en la tarjeta de red</li>
                </ul>
              </li>
              <li>
                Direccionamiento lógico
                <ul>
                  <li>Dirección IP</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <p id="mods-prots-funct-conf">Confianza</p>
            <ul>
              <li>Garantiza la entrega de los paquetes</li>
            </ul>
          </li>
          <li>
            <p id="mods-prots-funct-flujo">Control de flujo</p>
            <ul>
              <li>Garantiza flujo (transmición) de datos a velocidad eficiente (bps)</li>
            </ul>
          </li>
          <li>
            <p id="mods-prots-funct-sec">Secuenciación</p>
            <ul>
              <li>Etiqueta cada segmento de datos transmitido</li>
            </ul>
          </li>
          <li>
            <p id="mods-prots-funct-errors">Detección de errores</p>
            <ul>
              <li>Determina si los datos se dañaron durante la transmición</li>
            </ul>
          </li>
          <li>
            <p id="mods-prots-funct-interfaz">Interfaz de aplicación</p>
            <ul>
              <li>Comunicaciones de proceso a proceso entre aplicaciones de red</li>
            </ul>
          </li>
        </ul>
        
        <h3 id="mods-prots-interact">Interacción de protocolos</h3>
        <ul>
          <li>Las redes requieren el uso de varios protocolos</li>
          <li>Cada protocolo tiene su propia función y formato</li>
          <li>
            Algunos
            <ul>
              <li>
                HTTP
                <ul>
                  <li>Protocolo de transferencia de hipertexto</li>
                  <li>Rige la manera en que interactúan un servidor web y un cliente</li>
                  <li>Define el contenido y el formato</li>
                </ul>
              </li>
              <li>
                TCP
                <ul>
                  <li>Protocolo de control de transmisión</li>
                  <li>Seguimiento de conversaciones individuales</li>
                  <li>Proporciona entrega garantizada</li>
                  <li>Administra el control de flujo</li>
                </ul>
              </li>
              <li>
                IP
                <ul>
                  <li>Protocolo de Internet</li>
                  <li>Entrega mensajes globalmente desde el remitente al receptor</li>
                </ul>
              </li>
              <li>
                Ethernet
                <ul>
                  <li>Entrega mensajes de una NIC a otra NIC en la misma red de área local (LAN) Ethernet</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        
        <h3 id="mods-prots-conjuntos">Conjunto de protocolos de red</h3>
        <ul>
          <li>
            <p id="mods-prots-conjuntos-suite">Suite de protocolos</p>
            <ul>
              <li>Un grupo de protocolos interrelacionados que son necesarios para realizar una función de comunicación</li>
              <li>Conjuntos de reglas que funcionan conjuntamente para ayudar a resolver un problema</li>
            </ul>
          </li>
          <li>
            <p id="mods-prots-conjuntos-capas">Los protocolos se ven en términos de capas:</p>
            <ul>
              <li>Capas superiores</li>
              <li>
                Capas inferiores
                <ul>
                  <li>Se preocupan por mover datos y proporcionar servicios a las capas superiores</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        
        <h3 id="mods-prots-suite-tcp">Suite de protocolo TCP/IP</h3>
        <ul>
          <li>Un conjunto de protocolos estándar abierto que está disponible gratuitamente para el público y que puede ser utilizado por cualquier proveedor</li>
          <li>Un protocolo basado en estándares es un proceso que recibió el aval del sector de redes y fue aprobado por una organización de estandarización</li>
        </ul>

        {/* <img src="ProtocolosTCP_IP.png" style="width: 480px;"/>
        <img src="ProcesoComunicacionTCP_IP.png" style="width: 480px;"/> */}

        <ul>
          <li>Upd de la capa 2 (Enlace de datos): Marco (Frame)</li>
          <li>Upd de la capa 3 (Red): Paquete (Packet)</li>
          <li>Upd de la capa 4 (Tranporte): Segmento (Segment)</li>
          <li>Upd de la capa 5, 6, 7 (Aplicación): Datos (Data)</li>
        </ul>

        <h2 id="mods-prots-orgs-estands">Organizaciones y estándares</h2>
        <p>Los estándares abiertos fomentan:</p>
        <ul>
          <li>Interoperabilidad</li>
          <li>La competencia</li>
          <li>Empresarial</li>
        </ul>
        <p>Las organizaciones estándares son:</p>
        <ul>
          <li>Vendedor-neutral</li>
          <li>Organizaciones sin fines de lucro</li>
          <li>Establecido para desarrollar y promover el concepto de normas abiertas</li>
        </ul>
        <p>Estándares</p>
        <ul>
          <li>Sociedad de Internet (ISOC) -promueve el desarrollo y la evolución abiertos del uso de Internet en todo el mundo.</li>
          <li>Consejo de Arquitectura de Internet (IAB)es responsable de la administración y el desarrollo general de los estándares de Internet.</li>
          <li>Grupo de trabajo de ingeniería de Internet (IETF)desarrolla, actualiza y mantiene las tecnologías de Internet y de TCP/IP.</li>
          <li>Grupo de trabajo de investigación de Internet (IRTF)- está enfocado en la investigación a largo plazo en relación con los protocolos de Internet y TCP/IP.</li>
        </ul>
        <p>Organizaciones de estándares involucradas en el desarrollo y soporte de TCP/IP</p>
        <ul>
          <li>Corporación de Internet para la Asignación de Nombres y Números (ICANN): con base en los Estados Unidos, coordina la asignación de direcciones IP, la administración de nombres de dominio y la asignación de otra información utilizada por los protocolos TCP/IP.</li>
          <li>Autoridad de Números Asignados de Internet (IANA): administra la asignación de direcciones IP, la administración de nombres de dominio y los identificadores de protocolos para ICANN.</li>
        </ul>
        <p>Más</p>
        <ul>
          <li>Instituto de Ingenieros en Electricidad y Electrónica (IEEE): organización de electrónica e ingeniería eléctrica dedicada a avanzar en innovación tecnológica y a elaborar estándares en una amplia gama de sectores, que incluyen energía, servicios de salud, telecomunicaciones y redes.</li>
          <li>Asociación de Industrias Electrónicas (EIA): es conocida principalmente por sus estándares relacionados con el cableado eléctrico, los conectores y los racks que se utilizan para montar equipos de red.</li>
          <li>Asociación de las Industrias de las Telecomunicaciones (TIA):  estándares para equipos de radio, torres de telefonía móvil, dispositivos de voz sobre IP (VoIP) y comunicaciones satelitales.</li>
          <li>Sector de Normalización de las Telecomunicaciones de la Unión Internacional de Telecomunicaciones (ITU-T): estándares para la compresión de videos, televisión de protocolo de Internet (IPTV) y comunicaciones de banda ancha.</li>
        </ul>

        <h2 id="mods-prots-mods-refer">Modelos de referencia</h2>
        <ul>
          <li>Modelo de referencia de interconexión de sistemas abiertos (OSI)</li>
          <li>Modelo de referencia TCP/IP</li>
        </ul>
        
        <h3 id="mods-prots-mods-refer-benef">Beneficios del modelo de capas</h3>
        <ul>
          <li>Ayuda en el diseño de protocolos, ya que los protocolos que operan en una capa específica tienen información definida según la cual actúan, y una interfaz definida para las capas superiores e inferiores</li>
          <li>Evita que los cambios en la tecnología o en las funcionalidades de una capa afecten otras capas superiores e inferiores</li>
          <li>Proporciona un lenguaje común para describir las funciones y capacidades de red</li>
        </ul>
        
        <h2 id="mods-prots-mods-refer-osi">Modelo de referencia OSI</h2>
        <ol>
          <li>
            <p id="mods-prots-mods-refer-osi-fisica">Física</p>
            <ul>
              <li>Puertos físicos</li>
              <li>Describe los medios para activar, mantener y desactivar las conexiones físicas</li>
              <li>No son cables (ni ningún otro medio de transmición). Los medios de transmición se conectan a la capa física</li>
              <li>Unidad de potencia: wats</li>
              <li>Corriente: uA (micro Amperios)</li>
              <li>Unidad de voltaje: voltios (V)</li>
            </ul>
          </li>
          <li>
            <p id="mods-prots-mods-refer-osi-enlace">Enlace de datos</p>
            <ul>
              <li>Tarjeta de red (cableada o física)</li>
              <li>Dirección MAC</li>
              <li>Describe métodos para intercambiar marcos de datos entre dispositivos en un medio común</li>
              <li>Dispositivos como Switch, Access Point</li>
            </ul>
          </li>
          <li>
            <p id="mods-prots-mods-refer-osi-red">Red</p>
            <ul>
              <li>Se ve todo lo relacionado con los paquetes e IP</li>
              <li>Proporciona servicios para intercambiar las porciones de datos individuales en la red</li>
              <li>Dispositivos como Router</li>
            </ul>
          </li>
          <li>
            <p id="mods-prots-mods-refer-osi-transport">Transporte</p>
            <ul>
              <li>Define los servicios para segmentar, transferir y reensamblar los datos para las comunicaciones individuales</li>
              <li>Protocolo TCP, UDP</li>
              <li>Seguridad</li>
              <li>Dispositivo: firewall</li>
            </ul>
          </li>
          <li>
            <p id="mods-prots-mods-refer-osi-sesion">Sesión</p>
            <ul>
              <li>Iniciar sesion en una aplicación (establecer conexión)</li>
              <li>Proporciona servicios a la capa de presentación  y administrar el intercambio de datos</li>
            </ul>
          </li>
          <li>
            <p id="mods-prots-mods-refer-osi-present">Presentación</p>
            <ul>
              <li>Cifrado de la información</li>
              <li>Proporciona una representación común de los datos transferidos entre los servicios de la capa de aplicación</li>
            </ul>
          </li>
          <li>
            <p id="mods-prots-mods-refer-osi-app">Aplicación</p>
            <ul>
              <li>Interfaz gráfica</li>
              <li>Contiene protocolos utilizados para comunicaciones proceso a proceso</li>
            </ul>
          </li>
        </ol>
        
        <h2 id="mods-prots-mods-refer-tcp">Modelo de referencia TCP/IP</h2>
        <ol>
          <li id="mods-prots-mods-refer-tcp-red">Acceso a la red (capa 1 y 2)</li>
          <li id="mods-prots-mods-refer-tcp-internet">Internet</li>
          <li id="mods-prots-mods-refer-tcp-transport">Transporte</li>
          <li id="mods-prots-mods-refer-tcp-app">Aplicación (capa 5, 6, 7)</li>
        </ol>
        
        <h2 id="mods-prots-segment-mensaje">Segmentación del mensaje</h2>
        <ul>
          <li>La segmentación es el proceso de dividir los mensajes en unidades más pequeñas</li>
          <li>La multiplexación es el proceso de tomar múltiples flujos de datos segmentados y entrelazarlos juntos</li>
          <li>
            Beneficios
            <ul>
              <li>
                Aumenta la velocidad
                <ul>
                  <li>Se pueden enviar grandes cantidades de datos a través de la red sin atar un enlace de comunicaciones</li>
                </ul>
              </li>
              <li>
                Aumenta la eficiencia
                <ul>
                  <li>Solo los segmentos que no llegan al destino necesitan ser retransmitidos, no todo el flujo de datos</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        
        <h2 id="mods-prots-secuenciacion">Secuenciación</h2>
        <ul>
          <li>La secuenciación de mensajes es el proceso de numerar los segmentos para que el mensaje pueda volver a ensamblarse en el destino</li>
          <li>TCP es responsable de secuenciar los segmentos individuales</li>
        </ul>
        
        <h2 id="mods-prots-pdu">Unidades de datos del protocolo PDU</h2>
        <ul>
          <li>La encapsulación es el proceso en el que los protocolos agregan su información a los datos</li>
          <li>En cada etapa del proceso, una PDU tiene un nombre distinto para reflejar sus funciones nuevas</li>
        </ul>
        
        <p>Las PDU que pasan por la pila son las siguientes:</p>
        <ul>
          <li>Datos (corriente de datos)</li>
          <li>Segmento</li>
          <li>Paquete</li>
          <li>Trama</li>
          <li>Bits (secuencia de bits)</li>
        </ul>
        
        <h2 id="mods-prots-access">Acceso de datos</h2>

        <h3 id="mods-prots-access-dir-red">Direcciones de red</h3>
        <ul>
          <li>Tanto el enlace de datos como las capas de red utilizan direccionamiento para entregar datos desde el origen hasta el destino</li>
          <li>Direcciones de origen y de destino de la capa de red: son responsables de enviar el paquete IP desde el dispositivo de origen hasta el dispositivo final, ya sea en la misma red o a una red remota</li>
          <li>Direcciones de origen y de destino de la capa de enlace de datos:– son responsables de enviar la trama de enlace de datos desde una tarjeta de interfaz de red (NIC) a otra en la misma red</li>
        </ul>

        {/* <img src="DireccionesRed.png" style="width: 600px"/> */}

        <a href="#id0">Volver a índice</a>
        <br/><br/>

      </div>
    );
  }
  
  export default Section3_ModelosYProtocolos;