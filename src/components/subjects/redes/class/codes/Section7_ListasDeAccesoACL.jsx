function Section7_ListasDeAccesoACL() {
    return(
        <div>
            <h1 id="access-list">Listas de Acceso (ACL)</h1>

            <h2>Propósito de una ACL</h2>
            <ul><li>Una ACL es una serie de comandos del IOS que controlan si un router reenvía o descarta paquetes (es decir, los filtra) según la información que se encuentra en el encabezado del paquete</li>
                <li>De forma predeterminada, un router no tiene ninguna ACL configurada. Sin embargo, cuando se aplica una ACL a una interfaz, el router realiza la tarea adicional de evaluar todos los paquetes de red a medida que pasan a través de la interfaz para determinar si el paquete se puede reenviar</li>
                <li>Cuando el tráfico de la red atraviesa una interfaz configurada con una ACL, el router compara la información dentro del paquete con cada ACE, en orden secuencial, para determinar si el paquete coincide con una de las ACE. Este proceso se denomina filtrado de paquetes</li>
                <li>La palabra filtro tiene 2 terminologías típicas a conocer
                    <ul><li>Denegar</li>
                        <li>Permitir</li>
                        <li>En otras palabras. Una ACL es una lista secuencial de instrucciones permit (permitir) o deny (denegar), conocidas como “entradas de control de acceso” (ACE)</li></ul></li>
                <li>Una vez que se tiene las configuraciones de enrutamiento terminadas (donde todos los usuarios se pueden comunicar) se deben empezar a establecer las políticas de seguridad a través de reglas
                <li>Ejemplos de políticas de seguridad
                        <ul><li>Que los usuarios de las vlans de administración, marketing y ventas no tengan acceso a los servidores de archivos o algún otro sistema operativo de los routers o switches</li>
                            <li>Que los usuarios de la organización no tengan conexión a determinadas aplicaciones de internet como, por ejemplo, spotify y netflix en hora de trabajo</li>
                            <li>Se pueden configurar ACL en funciónn del tiempo, de los servicios, de ips, entre otros</li></ul></li></li>
                <li>Propósitos de las ACL
                        <ul><li>Limitan el tráfico de la red para aumentar su rendimiento</li>
                            <li>Proporcionan control del flujo de tráfico</li>
                            <li>Proporcionan un nivel básico de seguridad para el acceso a la red</li>
                            <li>Filtran el tráfico según el tipo de tráfico</li>
                            <li>Filtran a los hosts para permitirles o denegarles el acceso a los servicios de red</li>
                            <li>Proporcionar prioridad a determinadas clases de tráfico de red</li></ul></li></ul>

            <h2>Tipos de ACL</h2>
            <ul><li>ACL Extendida
                    <ul><li>Servicios e ips</li>
                        <li>Web, archivos, dns, otros servicios o direcciones ips</li>
                        <li>La más común</li></ul></li>
                <li>ACL Estándar
                    <ul><li>Suele usarse cuando solo se tienen que filtrar ips</li></ul></li></ul>

            <h2>Factores a considerar</h2>
            <ul><li>Durante la configuración se genera una ACL predeterminada (implícita) que bloquea el trafico restante (deny any).</li>
                <li>Es importante conocer donde empieza (origen) y donde termina (destino)</li></ul>
        </div>
    );
}

export default Section7_ListasDeAccesoACL;