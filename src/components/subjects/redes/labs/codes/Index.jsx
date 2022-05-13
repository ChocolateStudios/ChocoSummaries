function Index() {
  
    return (
      <div>
          <h1 id="id0">Índice</h1>

          <ul><li><a href="#commands">Comandos</a>

              <ul><li><a href="#commands-gen">General</a>
                  <ul><li><a href="#commands-gen-ipconfig">ipconfig</a></li>
                      <li><a href="#commands-gen-ipconfig-all">ipconfig /all</a></li>
                      <li><a href="#commands-gen-ping">ping &lt;dirección&gt;</a></li>
                      <li><a href="#commands-gen-ping-t">ping &lt;dirección&gt; -t</a></li>
                      <li><a href="#commands-gen-tracert">tracert &lt;dirección&gt;</a></li>
                      <li><a href="#commands-gen-arp-a">arp -a</a></li>
                      <li><a href="#commands-gen-netview">net view</a></li></ul></li></ul>
                      
              <ul><li><a href="#commands-disp-enl">Dispositivo de enlace</a>
                  <ul><li><a href="#commands-disp-enl-enable">enable (User -&gt; Admin mode)</a></li>
                      <li><a href="#commands-disp-conf-t">configurate terminal | conf t</a></li>
                      <li><a href="#commands-disp-enl-interface">interface &lt;interfaz&gt; | int &lt;interfaz&gt;</a></li>
                      <li><a href="#commands-disp-enl-exit">exit</a></li>
                      <li><a href="#commands-disp-enl-hostname">hostname &lt;name&gt;</a></li>
                      <li><a href="#commands-disp-enl-show-run">show run &lt;name&gt;</a></li>
                      <li><a href="#commands-disp-enl-show-ip-int-br">show ip interface br | show ip int br</a></li>
                      <li><a href="#commands-disp-enl-do">do &lt;comando&gt;</a></li>
                      <li><a href="#commands-disp-enl-ip-address">ip address &lt;dirección ip&gt;  &lt;máscara&gt;</a></li>
                      <li><a href="#commands-disp-enl-no-shutdown">no shutdown</a></li>
                      <li><a href="#commands-disp-enl-copy-run-start">copy run start</a></li>
                      <li><a href="#commands-disp-enl-show-ver">show version</a></li>
                      <li><a href="#commands-disp-enl-show-vlan-brief">show vlan brief</a></li>
                      <li><a href="#commands-disp-enl-show-int-trunk">show interface trunk</a></li>
                      <li><a href="#commands-disp-enl-vlan">vlan &lt;numero&gt;</a></li>
                      <li><a href="#commands-disp-enl-swt-mode-access">switchport mode access</a></li>
                      <li><a href="#commands-disp-enl-swt-access-vlan">switchport access vlan &lt;número de vlan&gt;</a></li>
                      <li><a href="#commands-disp-enl-int-int">interface &lt;interfaz&gt;.&lt;vlan&gt; | int &lt;interfaz&gt;.&lt;vlan&gt;</a></li>
                      <li><a href="#commands-disp-enl-encp-dot1q">encapsulation dot1Q &lt;vlan&gt;</a></li></ul></li></ul></li>
                      
              <li><a href="#modes">Modos</a>
              
              <ul><li><a href="#modes-user">Usuario</a></li>
                  <li><a href="#modes-admin">Administrador</a></li>
                  <li><a href="modes-conf">Configuración</a></li>
                  <li><a href="#modes-conf-int">Configuracion de interfaz</a></li>
                  <li><a href="#modes-conf-vlan">Configuracion de vlan</a></li></ul></li>
                  
              <li><a href="#pasos">Pasos</a>
              
              <ul><li><a href="#pasos-ver-conf">Ver configuración</a></li>
                  <li><a href="#pasos-asign-ip-int">Asignar dirección ip en interfaz</a></li>
                  <li><a href="#pasos-ver-estado-int">Ver estado actual de las interfaces</a></li>
                  <li><a href="#pasos-asign-ip-vlan">Asignar dirección ip en vlan de switch</a></li>
                  <li><a href="#pasos-asign-default-gateway">Asignar default gateway en switch</a></li>
                  <li><a href="#pasos-rip-router">Rip en router</a></li>
                  <li><a href="#pasos-ver-version-SO">Verificar versión del sistema operativo</a></li>
                  <li><a href="#pasos-ver-vlans">Verificar detalles de las vlans de un switch</a></li>
                  <li><a href="#pasos-ver-trunks">Verificar detalles de los trunks de un switch</a></li>
                  <li><a href="#pasos-crear-vlan">Crear vlan y asignar nombre</a></li>
                  <li><a href="#pasos-eliminar-vlan">Eliminar vlan</a></li>
                  <li><a href="#pasos-asign-port-vlan">Asignar puerto a una vlan</a></li>
                  <li><a href="#pasos-asign-vlan-voz">Asignar vlan de voz</a></li>
                  <li><a href="#pasos-trunk-port">Realizar trunk en un puerto en switch</a></li>
                  <li><a href="#pasos-trunk-port-vlan-native">Realizar trunk en un puerto con vlan nativa en switch</a></li>
                  <li><a href="#pasos-borrar-conf-vlans">Borrar configuración de vlans en switch</a></li>
                  <li><a href="#pasos-borrar-conf">Borrar configuración de switch</a></li>
                  <li><a href="#pasos-crear-subint">Crear subinterfaz en router</a></li>
                  <li><a href="#pasos-encap-int">Encapsular subinterfaz de router</a></li></ul></li>
                  
                  
              <li><a href="#ejem">Ejemplos</a>
              
              <ul><li><a href="#ejem-lab5">Lab 5 - Semana 4</a></li>
                  <li><a href="#ejem-lab6">Lab 6 - Semana 4</a></li>
                  <li><a href="#ejem-lab7">Lab 7 - Semana 5</a></li></ul></li>
                  
                  
              <li><a href="#others">Otras configuraciones</a>
              
              <ul><li><a href="#others-conf-router-wan">Configuración de los routers en una red WAN</a></li></ul></li></ul>
      </div>
    );
  }
  
  export default Index;