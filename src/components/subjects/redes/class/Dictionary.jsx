function Dictionary() {
  return (
    <div>
        <h1 id="dict">Diccionario</h1>

        <h2 id="dict-disps">Dispositivos</h2>
        <ul>
            <li>
                <h3 id="dict-disps-inter">Sistemas Intermedios</h3>
                <ul>
                    <li>
                        <p id="dict-disps-inter-router">Router</p>
                        <ul>
                            <li>Interconecta las redes</li>
                        </ul>
                    </li>
                    <li>
                        <p id="dict-disps-inter-switch">Switch</p>
                        <ul>
                            <li>También llamado conmutador</li>
                            <li>Tiene varios puertos para conectar computadoras</li>
                            <li>Transmite paquetes entre computadoras conectadas a él</li>
                            <li>Interconecta segmentos de redes</li>
                            <li>Aquí se suelen configurar las VLANs</li>
                        </ul>
                    </li>
                    <li>
                        <p id="dict-disps-inter-ap">AP (Access Point) o Punto de Acceso</p>
                        <ul>
                            <li>Transmite paquetes entre computadoras inalámbricas</li>
                            <li>Transmite paquetes entre las computadoras e internet</li>
                            <li>Interconecta la red inalámbrica con la red cableada</li>
                            <li>Tecnología WiFi</li>
                        </ul>
                    </li>
                    <li>
                        <p id="dict-disps-inter-firewall">Firewall</p>
                        <ul>
                            <li>Protege la red</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <h3 id="dict-disps-finals">Sistemas Finales</h3>
                <ul>
                    <p id="dict-disps-finals-servers">Servidores</p>
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
                </ul>
            </li>
        </ul>

        <h2 id="id2-2">Unidades</h2>
        <ul>
            <li>
                <h3 id="id2-2-1">bps</h3>
                <ul>
                    <li>1 Mbps es 1 000 000 bits/segundo</li>
                    <li>1 Gbps es 1 000 000 000 bits/segundo</li>
                </ul>
            </li>
        </ul>

        <h2 id="#">Protocolos</h2>
        <ul>
            <li>
                <h3>IP</h3>
                <ul>
                    <li>El más importante en ambas versiones (IPv4 e IPv6)</li>
                </ul>
            </li>
            <li>
                <h3>TCP</h3>
                <ul>
                    <li>Se encarga de fragmentar, dividir, ensamblar y reensamblar las unidades de paquetes</li>
                </ul>
            </li>
            <li><h3>UDP</h3></li>
            <li>
                <h3>Spanning tree (Spanning Tree Protocol)</h3>
                <ul>
                    <li>Es un protocolo de red de capa 2 del modelo OSI</li>
                    <li>Su función es la de gestionar la presencia de bucles en topologías de red debido a la existencia de enlaces redundantes (necesarios en muchos casos para garantizar la disponibilidad de las conexiones)</li>
                    <li>El protocolo permite a los dispositivos de interconexión activar o desactivar automáticamente los enlaces de conexión, de forma que se garantice la eliminación de bucles</li>
                </ul>
            </li>
            <li>
                <h3>FTP / SFTP</h3>
                <ul>
                    <li>Protocolo de transferencia de archivos</li>
                </ul>
            </li>
            <li>
                <h3>DNS</h3>
                <ul>
                    <li>Sistema de nombres de dominio</li>
                </ul>
            </li>
            <li>
                <h3>NTP</h3>
                <ul>
                    <li>Network Time Protocol</li>
                </ul>
            </li>
        </ul>

        <h2 id="">Modelos</h2>
        <ul>
            <li>
                <h3>OSI</h3>
                <ul>
                    <li>Modelo de referencia de interconexión de sistemas abiertos</li>
                    <li>7 capas</li>
                    <li>Me da el marco conceptual de como funciona una red de comunicación</li>
                    <li>Es teórico, conceptual</li>
                </ul>
            </li>
            <li>
                <h3>TCP/IP</h3>
                <ul>
                    <li>4 capas</li>
                    <li>Es práctico</li>
                    <li>Frecuentemente implementado en redes de internet</li>
                </ul>
            </li>
        </ul>

        <h2 id="">Puertos</h2>
        <ul>
            <li>
                <h3>Puertos de acceso</h3>
                <ul>
                    <li>Se conectan a los dispositivos finales</li>
                </ul>
            </li>
            <li>
                <h3>Puertos troncales</h3>
                <ul>
                    <li>Se conectan entre switches o del switch al router</li>
                </ul>
            </li>
        </ul>

        <h2 id="">Otros conceptos</h2>
        <ul>
            <li>
                <h3>VLAN</h3>
                <ul>
                    <li>Virtual LAN</li>
                    <li>Es un método para crear redes lógicas independientes dentro de una misma red física (LAN física)</li>
                    <li>Varias VLAN pueden coexistir en un único conmutador físico o en una única red física</li>
                </ul>
            </li>
            <li>
                <h3>Internetwork</h3>
                <ul>
                    <li>Es una red interconectada con diferentes equipos que pasan nuestros servicios</li>
                </ul>
            </li>
            <li>
                <h3>ISP</h3>
                <ul>
                    <li>Internet Service Provider (proveedor de servicio de internet)</li>
                </ul>
            </li>
            <li>
                <h3>Ethernet</h3>
                <ul>
                    <li>Tecnología LAN más conocida y usada de las redes cableadas</li>
                </ul>
            </li>
            <li>
                <h3>PDU</h3>
                <ul>
                    <li>Unidad de dato de Protocolo</li>
                    <li>Se utilizan para el intercambio de datos entre unidades disparejas, dentro de una capa del modelo OSI</li>
                    <li>Cada capa en el modelo usa la PDU para comunicarse e intercambiar información, que solo puede leer la capa de igual en el dispositivo receptor y luego se entrega a la siguiente capa superior después de la extracción</li>
                </ul>
            </li>
            <li>
                <h3>VLSM</h3>
                <ul>
                    <li>Máscara de subred de tamaño variable</li>
                    <li>Subred de una subnet</li>
                    <li>Dividir una red en subredes</li>
                </ul>
            </li>
        </ul>

        <a href="#id0">Volver a índice</a>
        <br/><br/>

    </div>
  );
}

export default Dictionary;
