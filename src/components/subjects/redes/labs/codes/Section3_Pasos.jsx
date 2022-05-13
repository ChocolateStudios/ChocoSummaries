function Section3_Pasos() {
  
    return (
      <div>

      <h1 id="pasos">Pasos</h1>

      <h2 id="pasos-ver-conf">Ver configuración</h2>

      <div style={{backgroundColor: "#E9E9E9"}}>
        <p>enable</p>
        <p>show run</p>
      </div>

      <h2 id="pasos-asign-ip-int">Asignar dirección ip en interfaz</h2>
      <div style={{backgroundColor: "#E9E9E9"}}>
        <p>enable</p>
        <p>conf t</p>
        <p>int G0/1</p>
        <p>ip address 192.168.72.65 255.255.255.224</p>
        <p>no shutdown</p>
        <p>end</p>
      </div>

      <h2 id="pasos-ver-estado-int">Ver estado actual de las interfaces</h2>
      <div style={{backgroundColor: "#E9E9E9"}}>
        <p>enable</p>
        <p>show ip int br</p>
      </div>

      <h2 id="pasos-asign-ip-vlan">Asignar dirección ip en vlan de switch</h2>
      <div style={{backgroundColor: "#E9E9E9"}}>
        <p>enable</p>
        <p>conf t</p>
        <p>int vlan 1</p>
        <p>ip address 192.168.72.65 255.255.255.224</p>
        <p>no shutdown</p>
        <p>end</p>
      </div>

      <h2 id="pasos-asign-default-gateway">Asignar default gateway en switch</h2>
      <div style={{backgroundColor: "#E9E9E9"}}>
        <p>enable</p>
        <p>conf t</p>
        <p>ip default gateway 192.168.72.65</p>
        <p>end</p>
      </div>

      <h2 id="pasos-rip-router">Rip en router</h2>
      <div style={{backgroundColor: "#E9E9E9"}}>
        <p>enable</p>
        <p>conf t</p>
        <p>router rip</p>
        <p>version 2</p>
        <p>network 172.16.21.0</p>
        <p>end</p>
      </div>

      <h2 id="pasos-ver-version-SO">Verificar versión del sistema operativo</h2>
      <div style={{backgroundColor: "#E9E9E9"}}>
        <p>show version</p>
      </div>

      <h2 id="pasos-ver-vlans">Verificar detalles de las vlans de un switch</h2>
      <div style={{backgroundColor: "#E9E9E9"}}>
        <p>enable</p>
        <p>show vlan brief</p>
      </div>

      <h2 id="pasos-ver-trunks">Verificar detalles de los trunks de un switch</h2>
      <div style={{backgroundColor: "#E9E9E9"}}>
        <p>enable</p>
        <p>show interface trunk</p>
      </div>

      <h2 id="pasos-crear-vlan">Crear vlan y asignar nombre</h2>
      <div style={{backgroundColor: "#E9E9E9"}}>
        <p>enable</p>
        <p>conf t</p>
        <p>vlan 10</p>
        <p>name Administracion</p>
        <p>exit</p>
      </div>

      <h2 id="pasos-eliminar-vlan">Eliminar vlan</h2>
      <div style={{backgroundColor: "#E9E9E9"}}>
        <p>enable</p>
        <p>vlan database</p>
        <p>no vlan 10</p>
        <p>exit</p>
      </div>

      <h2 id="pasos-asign-port-vlan">Asignar puerto a una vlan</h2>
      <div style={{backgroundColor: "#E9E9E9"}}>
        <p>enable</p>
        <p>conf t</p>
        <p>int fa0/1</p>
        <p>switchport mode access</p>
        <p>switchport access vlan 10</p>
        <p>exit</p>
      </div>

      <h2 id="pasos-asign-vlan-voz">Asignar vlan de voz</h2>
      - Se habilita calidad de servicio (QoS) y se confía en los valores de la clase de servicio (CoS)
      <div style={{backgroundColor: "#E9E9E9"}}>
        <p>enable</p>
        <p>conf t</p>
        <p>int fa0/11</p>
        <p>mls qos trust cos</p>
        <p>switchport voice vlan 150</p>
      </div>

      <h2 id="pasos-trunk-port">Realizar trunk en un puerto en switch</h2>
      <div style={{backgroundColor: "#E9E9E9"}}>
        <p>enable</p>
        <p>conf t</p>
        <p>int G0/1</p>
        <p>switchport mode trunk</p>
        <p>switchport trunk allowed vlan all</p>
      </div>

      <h2 id="pasos-trunk-port-vlan-native">Realizar trunk en un puerto con vlan nativa en switch</h2>
      <div style={{backgroundColor: "#E9E9E9"}}>
        <p>enable</p>
        <p>conf t</p>
        <p>int G0/1</p>
        <p>switchport mode trunk</p>
        <p>trunk native vlan 99</p>
      </div>

      <h2 id="pasos-borrar-conf-vlans">Borrar configuración de vlans en switch</h2>
      <div style={{backgroundColor: "#E9E9E9"}}>
        <p>enable</p>
        <p>delete flash:vlan.dat</p>
      </div>

      <h2 id="pasos-borrar-conf">Borrar configuración de switch</h2>
      <div style={{backgroundColor: "#E9E9E9"}}>
        <p>enable</p>
        <p>delete erase startup-config</p>
        <p>reload</p>
      </div>

      <h2 id="pasos-crear-subint">Crear subinterfaz en router</h2>
      <div style={{backgroundColor: "#E9E9E9"}}>
        <p>enable</p>
        <p>conf t</p>
        <p>int fa0/0.10</p>
      </div>

      <h2 id="pasos-encap-int">Encapsular subinterfaz de router</h2>
      <div style={{backgroundColor: "#E9E9E9"}}>
        <p>enable</p>
        <p>conf t</p>
        <p>int fa0/0.10</p>
        <p>encapsulation dot1Q 10</p>
      </div>

      <a href="#id0">Volver a índice</a>
        <br/><br/>
        
      </div>
    );
  }
  
  export default Section3_Pasos;