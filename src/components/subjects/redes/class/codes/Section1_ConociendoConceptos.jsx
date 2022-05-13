function Section1_ConociendoConceptos() {
  return (
    <div>
        <h1 id="con-conceptos">Conociendo algunos conceptos</h1>
        
        <p>Algunos conceptos que se utilizan</p>
        
        <h2 id="con-dispositivos">Algunos dispositivos importantes a conocer son:</h2>

        <ul><li><h3 id="con-dispositivos-intermedios">Sistemas intermedios</h3>
                <ul><li>Router
                        <ul><li>Interconecta las redes</li></ul></li>

                    <li>Switch o conmutador
                        <ul><li>Interconecta segmentos de redes</li>
                            <li>Aquí se suelen configurar las VLANs</li></ul></li>
                    <li>Access Point (AP)
                        <ul><li>Interconecta la red inalámbrica con la red cableada</li></ul></li>

                    <li>Firewall
                        <ul><li>Protege la red</li></ul></li></ul></li>
            
            <li><h3 id="con-dispositivos-finales">Dispositivos finales</h3>
                <ul><li>Computadoras, servidores, laptops o hosts</li></ul></li></ul>

        <h2 id="con-servicios">Servicios:</h2>
        <ul><li>Un servicio es la información que pasa a través de las redes de comunicación</li>
            <li>Ejemplos: servicio web, dns, archivos de videoconferencia o teleconferencia</li></ul>

        <p>Estos nos permiten las comunicaciones a través del <a href="#dict-otros-internetwork">Internetwork</a></p>
        
        <h2 id="con-medios-transmision">También existen los medios de transmición</h2>
        <ul><li><h3 id="con-medios-transmision-cables">Basados en cables</h3>
                <ul><li>Cable Coaxial
                        <ul><li>Ej: cable para conectar televisión a antena, cable que conecta al model de casa (antes de fibra óptica)</li></ul></li>
                    <li>Cable de línea telefónica</li>
                    <li>Cable de par trenzado
                        <ul><li>Ej: cable ethernet</li></ul></li>
                    <li>Cable eléctrico</li></ul></li>

            <li><h3 id="con-medios-transmision-inalambricos">Inalámbricos</h3>
                <ul><li>Espectro radioeléctrico
                        <ul><li>Conjunto de bandas de frecuencia donde se transmiten las señales inalámbricas</li>
                            <li>Señales inalámbricas, de frecuencia o microondas</li></ul></li>
                    <li>Infrarojos
                        <ul><li>Sensores</li></ul></li></ul></li></ul>
        
        <h2 id="con-protocolos">Protocolos</h2>

        <ul><li>IP
                <ul><li>El más importante en ambas versiones (IPv4 e IPv6)</li></ul></li>

            <li>TCP
                <ul><li>Se encarga de fragmentar, dividir, ensamblar y reensamblar las unidades de paquetes</li></ul></li>

            <li>UDP</li>

            <li>Spanning tree (Spanning Tree Protocol)
                <ul><li>Es un protocolo de red de capa 2 del modelo OSI</li>
                    <li>Su función es la de gestionar la presencia de bucles en topologías de red debido a la existencia de enlaces redundantes (necesarios en muchos casos para garantizar la disponibilidad de las conexiones)</li>
                    <li>El protocolo permite a los dispositivos de interconexión activar o desactivar automáticamente los enlaces de conexión, de forma que se garantice la eliminación de bucles</li></ul></li></ul>
        
        <a href="#id0">Volver a índice</a>
        <br/><br/>
    </div>
  );
}

export default Section1_ConociendoConceptos;
