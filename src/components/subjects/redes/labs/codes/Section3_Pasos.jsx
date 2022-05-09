function Section3_Pasos() {
  
    return (
      <div>

      <h1>Pasos</h1>

      <h2>Ver configuración de router</h2>

      <div style={{backgroundColor: "#E9E9E9"}}>
        <p>enable</p>
        <p>show run</p>
      </div>

      <h2>Asignar dirección ip en interfaz del router</h2>
      <div style={{backgroundColor: "#E9E9E9"}}>
        <p>enable</p>
        <p>conf t</p>
        <p>int G0/1</p>
        <p>ip address 192.168.72.65 255.255.255.224</p>
        <p>no shutdown</p>
        <p>end</p>
      </div>

      <h2>Ver estado actual de las interfaces del router</h2>
      <div style={{backgroundColor: "#E9E9E9"}}>
        <p>enable</p>
        <p>show ip int br</p>
      </div>

      <h2>Asignar dirección ip en vlan de switch</h2>
      <div style={{backgroundColor: "#E9E9E9"}}>
        <p>enable</p>
        <p>conf t</p>
        <p>int vlan 1</p>
        <p>ip address 192.168.72.65 255.255.255.224</p>
        <p>no shutdown</p>
        <p>end</p>
      </div>

      <h2>Asignar default gateway en switch</h2>
      <div style={{backgroundColor: "#E9E9E9"}}>
        <p>enable</p>
        <p>conf t</p>
        <p>ip default gateway 192.168.72.65</p>
        <p>end</p>
      </div>

      <h2>Rip en router</h2>
      <div style={{backgroundColor: "#E9E9E9"}}>
        <p>enable</p>
        <p>conf t</p>
        <p>router rip</p>
        <p>version 2</p>
        <p>network 172.16.21.0</p>
        <p>end</p>
      </div>

      <h2>Verificar versión del sistema operativo</h2>
      <div style={{backgroundColor: "#E9E9E9"}}>
        <p>show version</p>
      </div>

      <h2>Verificar detalles de las vlans de un switch</h2>
      <div style={{backgroundColor: "#E9E9E9"}}>
        <p>enable</p>
        <p>show vlan brief</p>
      </div>

      <h2>Verificar detalles de los trunks de un switch</h2>
      <div style={{backgroundColor: "#E9E9E9"}}>
        <p>enable</p>
        <p>show interface trunk</p>
      </div>

      <h2>Crear vlan y asignar nombre</h2>
      <div style={{backgroundColor: "#E9E9E9"}}>
        <p>enable</p>
        <p>conf t</p>
        <p>vlan 10</p>
        <p>name Administracion</p>
        <p>exit</p>
      </div>

      <h2>Eliminar vlan</h2>
      <div style={{backgroundColor: "#E9E9E9"}}>
        <p>enable</p>
        <p>vlan database</p>
        <p>no vlan 10</p>
        <p>exit</p>
      </div>

      <h2>Asignar puerto a una vlan</h2>
      <div style={{backgroundColor: "#E9E9E9"}}>
        <p>enable</p>
        <p>conf t</p>
        <p>int fa0/1</p>
        <p>switchport mode access</p>
        <p>switchport access vlan 10</p>
        <p>exit</p>
      </div>

      <h2>Asignar vlan de voz</h2>
      - Se habilita calidad de servicio (QoS) y se confía en los valores de la clase de servicio (CoS)
      <div style={{backgroundColor: "#E9E9E9"}}>
        <p>enable</p>
        <p>conf t</p>
        <p>int fa0/11</p>
        <p>mls qos trust cos</p>
        <p>switchport voice vlan 150</p>
      </div>

      <h2>Realizar trunk en un puerto en switch</h2>
      <div style={{backgroundColor: "#E9E9E9"}}>
        <p>enable</p>
        <p>conf t</p>
        <p>int G0/1</p>
        <p>switchport mode trunk</p>
        <p>switchport trunk allowed vlan all</p>
      </div>

      <h2>Realizar trunk en un puerto con vlan nativa en switch</h2>
      <div style={{backgroundColor: "#E9E9E9"}}>
        <p>enable</p>
        <p>conf t</p>
        <p>int G0/1</p>
        <p>switchport mode trunk</p>
        <p>trunk native vlan 99</p>
      </div>

      <h2>Borrar configuración de vlans en switch</h2>
      <div style={{backgroundColor: "#E9E9E9"}}>
        <p>enable</p>
        <p>delete flash:vlan.dat</p>
      </div>

      <h2>Borrar configuración de switch</h2>
      <div style={{backgroundColor: "#E9E9E9"}}>
        <p>enable</p>
        <p>delete erase startup-config</p>
        <p>reload</p>
      </div>

      <h2>Crear subinterfaz en router</h2>
      <div style={{backgroundColor: "#E9E9E9"}}>
        <p>enable</p>
        <p>conf t</p>
        <p>int fa0/0.10</p>
      </div>

      <h2>Encapsular subinterfaz de router</h2>
      <div style={{backgroundColor: "#E9E9E9"}}>
        <p>enable</p>
        <p>conf t</p>
        <p>int fa0/0.10</p>
        <p>encapsulation dot1Q 10</p>
      </div>

      </div>
    );
  }
  
  export default Section3_Pasos;