function Section4_DireccionamientoIpYRedesLan() {
    return (
      <div>

        <h1 id="dir-ip-lan">Direccionamiento IP y redes LAN</h1>

        <h2 id="dir-ip-lan-segment">Segmentación de la red</h2>

        <h3 id="dir-ip-lan-segment-broadcast">Dominios de broadcast y segmentación</h3>
        <ul><li>Utilizados por protocolos ARP y DHCP</li>
            <li>Los routers no propagan broadcasts</li>
            <li>Cada interfaz de router se conecta a un dominio de transmisión y las transmisiones solo se propagan dentro de ese dominio de transmisión específico</li></ul>
        
        <h3 id="dir-ip-lan-segment-dom-broadcast">Problemas de Dominios de broadcast</h3>
        <ul><li>Es que estos hosts pueden generar broadcasts excesivas y afectar la red de manera negativa</li>
            <li>La solución es reducir el tamaño de la red para crear dominios de broadcast más pequeños mediante un proceso que se denomina división en subredes</li>
            <li>La división en subredes disminuye el tráfico de red general y mejora su rendimiento</li>
            <li>Se puede utilizar para implementar directivas de seguridad entre subredes</li></ul>
        
        <a href="#id0">Volver a índice</a>
        <br/><br/>

      </div>
    );
  }
  
  export default Section4_DireccionamientoIpYRedesLan;