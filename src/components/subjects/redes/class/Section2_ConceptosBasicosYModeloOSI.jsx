function Section2_ConceptosBasicosYModeloOSI() {
  return (
    <div>
      <h1 id="mod-osi">Conceptos básicos y modelo OSI</h1>

      <h2 id="mod-osi-serv-apps">Servicios y aplicaciones</h2>

      <ul>
        <li>
          Servicio
          <ul>
            <li>Es la información que se transmite por las redes de comunicaciones</li>
          </ul>
        </li>
        <li>
          Aplicaciones
          <ul>
            <li>Es el programa con el cual el usuario interactúa que se encuentra en un dispositivo final (computadora, celular, etc)</li>
            <li>Para poder acceder a algún tipo de servicio, transmitir algún dato o compartir algún recurso</li>
          </ul>
        </li>
      </ul>
      
      <h2 id="mod-osi-componente-de-redes">Componentes de las redes</h2>

      <ul>
        <li>Cada computadora en una red se llama host o dispositivo final</li>
      </ul>

      <ul>
        <li>
          <h3 id="mod-osi-componente-de-redes-servers">Servidores</h3>
          <ul>
            <li>
              Los servidores son computadoras que proporcionan información a dispositivos finales
              <ul>
                <li>Servidores de correo electrónico</li>
                <li>Servidores web</li>
                <li>Servidores de archivos</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <h3 id="mod-osi-componente-de-redes-clients">Clientes</h3>
          <ul>
            <li>
              Los clientes son equipos que envían solicitudes a los servidores para recuperar información
              <ul>
                <li>Página web desde un servidor web</li>
                <li>Correo electrónico desde un servidor de correo electrónico</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <h3 id="mod-osi-componente-de-redes-protocols">Protocolos</h3>
          <ul>
            <li>
              FTP / SFTP
              <ul>
                <li>Protocolo de transferencia de archivos</li>
              </ul>
            </li>
            <li>
              DNS
              <ul>
                <li>Sistema de nombres de dominio</li>
              </ul>
            </li>
            <li>
              NTP
              <ul>
                <li>Network Time Protocol</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <h2 id="mod-osi-punto-punto">Punto a punto</h2>
      <ul>
        <li>Es posible que un dispositivo sea un cliente y un servidor en una red Punto a Punto</li>
        <li>Este tipo de diseño de red solo se recomienda para redes muy pequeñas</li>
        <li>Para intercambiar archivos colocar IP y máscara a las computadoras</li>
        <li>Para la conexión se requiere un cable cruzado o cable crossover</li>
      </ul>

      <h2 id="mod-osi-disp-finales">Dispositivos finales</h2>
      <ul>
        <li>Un terminal es el punto donde un mensaje se origina o se recibe</li>
        <li>Los datos se originan con un dispositivo final, fluyen por la red y llegan a un dispositivo final</li>
      </ul>

      <h2 id="mod-osi-disp-intermed">Dispositivos de red intermedios</h2>
      <ul>
        <li>Un dispositivo intermediario interconecta dispositivos finales</li>
      </ul>

      <h2 id="mod-osi-medios-de-red">Medios de red</h2>
      <ul>
        <li>Por cable</li>
        <li>Inalámbrico</li>
      </ul>

      <h2 id="mod-osi-tipos-redes">Tipos de redes</h2>
      <ul>
        <li>
          <h3 id="mod-osi-tipos-redes-lan">LAN</h3>
          <ul>
            <li>Es una infraestructura de la red que abarca un área geográfica pequeña</li>
          </ul>
        </li>
        <li>
          <h3 id="mod-osi-tipos-redes-wan">WAN</h3>
          <ul>
            <li>Es una infraestructura de la red que abarca un área geográfica extensa</li>
            <li>Generalmente administrado por algún proovedor de servicios de internet</li>
          </ul>
        </li>
      </ul>

      <h2 id="mod-osi-intra-extra">Intranet y Extranet</h2>
      <ul>
        <li>
          <h3 id="mod-osi-intra-extra-intra">Intranet</h3>
          <ul>
            <li>Es solo accesible para los miembros de la organización u otros con autorización</li>
          </ul>
        </li>
        <li>
          <h3 id="mod-osi-intra-extra-extra">Extranet</h3>
          <ul>
            <li>Creado para proporcionar acceso seguro a la red</li>
          </ul>
        </li>
      </ul>

      <h2 id="mod-osi-conexiones-internet">Conexiones de internet</h2>
      <ul>
        <li>
          <h3 id="mod-osi-conexiones-internet-cable">Cable</h3>
          <ul>
            <li>Ofrecido por los proveedores de servicios de televisión por cable</li>
          </ul>
        </li>
        <li>
          <h3 id="mod-osi-conexiones-internet-dls">DSL</h3>
          <ul>
            <li>Ancho de banda alto, siempre conectado, conexión a Internet que se ejecuta a través de una línea telefónica</li>
          </ul>
        </li>
        <li>
          <h3 id="mod-osi-conexiones-internet-cel">Red celular</h3>
          <ul>
            <li>Utiliza una red de telefonía celular para conectarse a internet</li>
          </ul>
        </li>
        <li>
          <h3 id="mod-osi-conexiones-internet-satelite">Satélite</h3>
          <ul>
            <li>Gran beneficio para las zonas rurales sin proveedores de servicios de Internet</li>
          </ul>
        </li>
        <li>
          <h3 id="mod-osi-conexiones-internet-marca">Teléfono de marcación</h3>
          <ul>
            <li>Una opción económica de bajo ancho de banda que utiliza un módem</li>
          </ul>
        </li>
      </ul>

      <h2 id="mod-osi-red-convergente">Red convergente</h2>
      <ul>
        <li>Antiguamente se requería de un cable por cada servicio (video, audio, etc), ahora con la red convergente solo se requiere de un solo cable (datos, audio, video)</li>
      </ul>
      
      <h2 id="mod-osi-red-confiables">Redes Confiables</h2>

      <h3 id="mod-osi-red-confiables-arqui">Arquitectura de Red</h3>
      <ul>
        <li>
          <p id="mod-osi-red-confiables-arqui-fallos">Tolerancia a fallas</p>
          <ul>
            <li>Garantiza la disponibilidad de la red</li>
          </ul>
        </li>
        <li>
          <p id="mod-osi-red-confiables-arqui-escala">Escalabilidad</p>
          <ul>
            <li>Permite que soporte futuros usuarios que se vayan a conectar y las tecnologías emergentes</li>
          </ul>
        </li>
        <li>
          <p id="mod-osi-red-confiables-arqui-calidad">Calidad de servicio (QoS)</p>
          <ul>
            <li>Garantizar la entrega confiable de contenido a todos los usuarios</li>
            <li>Con la implementación de una política de QoS, el router puede administrar más fácilmente el flujo del tráfico de voz y de datos</li>
          </ul>
        </li>
        <li>
          <p id="mod-osi-red-confiables-arqui-seguridad">Seguridad</p>
          <ul>
            <li>
              Prinicipio de la seguridad de información
              <ul>
                <li>
                  Confidencialidad
                  <ul>
                    <li>Privacidad de la información y datos</li>
                    <li>Solo los destinatarios deseados pueden leer los datos</li>
                    <li>Técnicas como encriptación, VPNs</li>
                  </ul>
                </li>
                <li>
                  Disponibilidad
                  <ul>
                    <li>Contingencia</li>
                    <li>Backups y protocolos que garanticen que la red siempre esté operativa</li>
                  </ul>
                </li>
                <li>
                  Integridad
                  <ul>
                    <li>Garantía de que los datos no se alteraron durante la transmisión</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              No Repudio
              <ul>
                <li>Garantiza que el usuario es quien dice que es</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <h2 id="mod-osi-red-tedencias">Tendencias de Redes</h2>

      <h3 id="mod-osi-red-tedencias-iot">IIoT (IoT Industrial)</h3>
      <ul>
        <li>Es un ecosistema de dispositivos, sensores, aplicaciones y equipos de red asociados que trabajan juntos para recopilar, monitorear y analizar datos de operaciones industriales</li>
        <li>El análisis de dichos datos ayuda a aumentar la visibilidad y mejora las capacidades de solución de problemas y mantenimiento. También puede aumentar la eficiencia, reducir los costos y mejorar la seguridad y la protección</li>
      </ul>

      <h3 id="mod-osi-red-tedencias-byod">BYOD: Bring Your Own Device</h3>
      <ul>
        <li>Significa que se puede usar cualquier dispositivo, de cualquier persona, en cualquier lugar</li>
        <li>Permite a los usuarios finales usar sus propios dispositivos, dándoles más oportunidades y una mayor flexibilidad</li>
      </ul>

      <h3 id="mod-osi-red-tedencias-colab">Colaboración en línea</h3>
      <ul>
        <li>Las herramientas de colaboración, Zoom, Microsoft Teams, Cisco WebEx brindan a los usuarios una forma de conectarse e interactuar instantáneamente</li>
        <li>La colaboración es una prioridad muy alta para las empresas y en la educación</li>
      </ul>

      <h3 id="mod-osi-red-tedencias-comp">Computación en la nube</h3>
      <ul>
        <li>Permite almacenar archivos personales o respaldar nuestros datos en servidores a través de Internet</li>
      </ul>

      <h3 id="mod-osi-red-tedencias-modelos-comp-nube">Modelos de Computación en la nube</h3>
      <ul>
        <li>
          <p id="mod-osi-red-tedencias-modelos-comp-nube-pub">Nubes públicas</p>
          <ul>
            <li>Las aplicaciones basadas en la nube y los servicios que se ofrecen en una nube pública están a disposición de la población en general</li>
          </ul>
        </li>
        <li>
          <p id="mod-osi-red-tedencias-modelos-comp-nube-pri">Nubes privadas</p>
          <ul>
            <li>Las aplicaciones y los servicios basados ​​en una nube privada están destinados a una organización o una entidad específica</li>
          </ul>
        </li>
        <li>
          <p id="mod-osi-red-tedencias-modelos-comp-nube-hib">Nubes híbridas</p>
          <ul>
            <li>Consta de dos o más nubes (por ejemplo: parte privada, parte pública), donde cada parte sigue siendo un objeto separado, pero ambos están conectados mediante una sola arquitectura</li>
            <li>En una nube híbrida, las personas pueden tener grados de acceso a varios servicios según sus derechos de acceso de usuario</li>
          </ul>
        </li>
        <li>
          <p id="mod-osi-red-tedencias-modelos-comp-nube-com">Nubes comunitarias</p>
          <ul>
            <li>Una nube comunitaria se crea para el uso exclusivo de una comunidad específica</li>
          </ul>
        </li>
      </ul>

      <h3 id="mod-osi-red-tedencias-hogar-inteli">Tecnología de hogar Inteligente</h3>
      <ul>
        <li>Permite que se interconecten con otros dispositivos</li>
      </ul>

      <h3 id="mod-osi-red-tedencias-plc">Power Line Communication (PLC)</h3>
      <ul>
        <li>Las redes por línea eléctrica pueden permitir que los dispositivos se conecten a una red LAN donde los cables de la red de datos o las comunicaciones inalámbricas no son una opción viable</li>
      </ul>

      <h3 id="mod-osi-red-tedencias-band-ancha-inalam">Banda Ancha Inalámbrica</h3>
      <ul>
        <li>Se instala una antena fuera del lugar (ej: hogar), que proporciona conectividad inalámbrica o por cable a los dispositivos en el lugar (ej: hogar)</li>
      </ul>

      <h2 id="mod-osi-red-tedencias-band-ancha-inalam">Seguridad de la red</h2>
      <ul>
        <li>La seguridad de la red es una parte fundamental de la red sin importar su tamaño</li>
        <li>La seguridad de la red que se implementa debe tener en cuenta el entorno y proteger los datos, pero, a su vez, debe permitir la calidad de servicio que se espera de la red</li>
      </ul>

      <ul>
        <li id="mod-osi-red-seguridad-red-amen-ext">Amenazas externas:</li>
        <ul>
          <li>Virus, gusanos y caballos de Troya</li>
          <li>Spyware y adware</li>
          <li>Ataques de día cero</li>
          <li>Ataques de actores de amenazas</li>
          <li>Ataques por denegación de servicio</li>
          <li>Intercepción y robo de datos</li>
          <li>Robo de identidad</li>
        </ul>
      </ul>

      <ul>
        <li>
          <p id="mod-osi-red-seguridad-red-amen-int">Amenazas internas:</p>
          <ul>
            <li>Dispositivos perdidos o robados</li>
            <li>Uso indebido accidental por parte de los empleados</li>
            <li>Empleados malintencionados</li>
          </ul>
        </li>
      </ul>

      <h3 id="mod-osi-red-seguridad-red-solucion">Soluciones</h3>
      <ul>
        <li>La seguridad debe implementarse en varias capas y debe utilizarse más de una solución de seguridad</li>
        <li>Se debe instalar un software antivirus y antispyware en los terminales</li>
        <li>El filtrado de firewall se utiliza para bloquear accesos no autorizados a la red</li>
        <li>
          Las redes más grandes tienen requisitos de seguridad adicionales:
          <ul>
            <li>Sistema de firewall dedicado</li>
            <li>Listas de control de acceso (ACL)</li>
            <li>Sistemas de prevención de intrusiones (IPS)</li>
            <li>Redes privadas virtuales (VPN)</li>
          </ul>
        </li>
      </ul>

      <h3 id="mod-osi-red-seguridad-red-conceptos">Conceptos</h3>
      <ul>
        <li>
          <p id="mod-osi-red-seguridad-red-conceptos-botnet">Botnet</p>
          <ul>
            <li>Es un término que hace referencia a un conjunto o red de robots informáticos o bots, que se ejecutan de manera autónoma y automática</li>
            <li>El artífice de la botnet puede controlar todos los ordenadores/servidores infectados de forma remota</li>
          </ul>
        </li>
        <li>
          <p id="mod-osi-red-seguridad-red-conceptos-ddos">Dos y DDos</p>
          <ul>
            <li>La diferencia entre DDoS y DoS se encuentra en que en un ataque DoS el que realiza todas las peticiones es un único ordenador; en cambio, en un ataque DDoS, son muchas las máquinas que atacan simultáneamente al mismo servidor para dejarlo inoperativo</li>
          </ul>
        </li>
      </ul>

      <a href="#id0">Volver a índice</a>
      <br/><br/>
    </div>
  );
}

export default Section2_ConceptosBasicosYModeloOSI;
