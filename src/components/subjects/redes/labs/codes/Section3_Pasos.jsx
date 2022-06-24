import React from "react";
import CopyCodeBtn from "../../../../auxiliar/CopyCodeBtn";
import "./LabsStyles.css";

function Section3_Pasos() {

  return (
    <div>

      <h1 id="pasos">Pasos</h1>

      <h2 id="pasos-ver-conf">Ver configuración</h2>

      <div className="code-container">
        <div>
          enable<br />
          show runs<br/>
        </div>
        <CopyCodeBtn/>
      </div>

      <h2 id="pasos-asign-ip-int">Asignar dirección ip en interfaz</h2>
      <div className="code-container">
        <div>
          enable<br />
          conf t<br />
          int G0/1<br />
          ip address 192.168.72.65 255.255.255.224<br />
          no shutdown<br />
          end<br/>
        </div>
        <CopyCodeBtn/>
      </div>

      <h2 id="pasos-ver-estado-int">Ver estado actual de las interfaces</h2>
      <div className="code-container">
        <div>
          enable<br />
          show ip int br<br/>
        </div>
        <CopyCodeBtn/>
      </div>

      <h2 id="pasos-asign-ip-vlan">Asignar dirección ip en vlan de switch</h2>
      <div className="code-container">
        <div>
          enable<br />
          conf t<br />
          int vlan 1<br />
          ip address 192.168.72.65 255.255.255.224<br />
          no shutdown<br />
          end<br/>
        </div>
        <CopyCodeBtn/>
      </div>

      <h2 id="pasos-asign-default-gateway">Asignar default gateway en switch</h2>
      <div className="code-container">
        <div>
          enable<br />
          conf t<br />
          ip default gateway 192.168.72.65<br />
          end<br/>
        </div>
        <CopyCodeBtn/>
      </div>

      <h2 id="pasos-rip-router">Rip en router</h2>
      <div className="code-container">
        <div>
          enable<br />
          conf t<br />
          router rip<br />
          version 2<br />
          network 172.16.21.0<br />
          end<br/>
        </div>
        <CopyCodeBtn/>
      </div>

      <h2 id="pasos-ver-version-SO">Verificar versión del sistema operativo</h2>
      <div className="code-container">
        <div>
          show version<br/>
        </div>
        <CopyCodeBtn/>
      </div>

      <h2 id="pasos-ver-vlans">Verificar detalles de las vlans de un switch</h2>
      <div className="code-container">
        <div>
          enable<br />
          show vlan brief<br/>
        </div>
        <CopyCodeBtn/>
      </div>

      <h2 id="pasos-ver-trunks">Verificar detalles de los trunks de un switch</h2>
      <div className="code-container">
        <div>
          enable<br />
          show interface trunk<br/>
        </div>
        <CopyCodeBtn/>
      </div>

      <h2 id="pasos-ver-int-especific">Verificar detalles de una interfaz (como ancho de banda y otras configuraciones)</h2>
      <div className="code-container">
        <div>
          enable<br />
          show interface s0/0/0<br/>
        </div>
        <CopyCodeBtn/>
      </div>

      <h2 id="pasos-crear-vlan">Crear vlan y asignar nombre</h2>
      <div className="code-container">
        <div>
          enable<br />
          conf t<br />
          vlan 10<br />
          name Administracion<br />
          exit<br/>
        </div>
        <CopyCodeBtn/>
      </div>

      <h2 id="pasos-eliminar-vlan">Eliminar vlan</h2>
      <div className="code-container">
        <div>
          enable<br />
          vlan database<br />
          no vlan 10<br />
          exit<br/>
        </div>
        <CopyCodeBtn/>
      </div>

      <h2 id="pasos-asign-port-vlan">Asignar puerto a una vlan</h2>
      <div className="code-container">
        <div>
          enable<br />
          conf t<br />
          int fa0/1<br />
          switchport mode access<br />
          switchport access vlan 10<br />
          exit<br/>
        </div>
        <CopyCodeBtn/>
      </div>

      <h2 id="pasos-asign-vlan-voz">Asignar vlan de voz</h2>
      <ul><li>Se habilita calidad de servicio (QoS) y se confía en los valores de la clase de servicio (CoS)</li></ul>
      <div className="code-container">
        <div>
          enable<br />
          conf t<br />
          int fa0/11<br />
          mls qos trust cos<br />
          switchport voice vlan 150<br/>
        </div>
        <CopyCodeBtn/>
      </div>

      <h2 id="pasos-trunk-port">Realizar trunk en un puerto en switch</h2>
      <div className="code-container">
        <div>
          enable<br />
          conf t<br />
          int G0/1<br />
          switchport mode trunk<br />
          switchport trunk allowed vlan all<br/>
        </div>
        <CopyCodeBtn/>
      </div>

      <h2 id="pasos-trunk-port-vlan-native">Realizar trunk en un puerto con vlan nativa en switch</h2>
      <div className="code-container">
        <div>
          enable<br />
          conf t<br />
          int G0/1<br />
          switchport mode trunk<br />
          trunk native vlan 99<br/>
        </div>
        <CopyCodeBtn/>
      </div>

      <h2 id="pasos-borrar-conf-vlans">Borrar configuración de vlans en switch</h2>
      <div className="code-container">
        <div>
          enable<br />
          delete flash:vlan.dat<br/>
        </div>
        <CopyCodeBtn/>
      </div>

      <h2 id="pasos-borrar-conf">Borrar configuración de switch</h2>
      <div className="code-container">
        <div>
          enable<br />
          delete erase startup-config<br />
          reload<br/>
        </div>
        <CopyCodeBtn/>
      </div>

      <h2 id="pasos-crear-subint">Crear subinterfaz en router</h2>
      <div className="code-container">
        <div>
          enable<br />
          conf t<br />
          int fa0/0.10<br/>
        </div>
        <CopyCodeBtn/>
      </div>

      <h2 id="pasos-encap-int">Encapsular subinterfaz de router</h2>
      <div className="code-container">
        <div>
          enable<br />
          conf t<br />
          int fa0/0.10<br />
          encapsulation dot1Q 10<br/>
        </div>
        <CopyCodeBtn/>
      </div>

      <h2 id="pasos-password">Poner contraseña al router o switch</h2>
      <div className="code-container">
        <div>
            username ADMIN secret upc123<br/>
            enable secret upc321<br/>
            line console 0<br/>
            login local<br/>
            exit<br/>
            line vty 0 15<br/>
            login local<br/>
            exit<br/>
        </div>
        <CopyCodeBtn/>
      </div>
      
      <h2 id="pasos-verificar">Comandos de verificación</h2>
      <div className="code-container">
        <div>
            show ip interface brief<br/>
            show running-config interface<br/>
            show interfaces<br/>
            show ip interfaces<br/>
            show ip route<br/>
            ping<br/><br/>
            <div style={{ color: 'green', fontSize: '13px', fontWeight: 600 }}>Nota: Reemplazar ip por ipv6 si quieres usar ipv6</div>
        </div>
      </div>
      
      <h2 id="pasos-mostrar-commands-history">Mostrar historial de los últimos comandos ejecutados</h2>
      <div className="code-container">
        <div>
            show history<br/>
        </div>
        <CopyCodeBtn/>
      </div>
      
      <h2 id="pasos-visualizar-tabla-enrut">Visualizar tabla de enrutamiento</h2>
      <div className="code-container">
        <div>// En el packet tracer ir a la herramienta de lupa y seleccionar un router, luego darle a Routing Table</div>
      </div>
      
      <h2 id="pasos-sumarizacion">Sumarización</h2>
      <div className="code-container">
        172.16.0.0 /26 -&gt; ... 0101 0000<br/>
        172.16.0.64/26 -&gt; ... 0000 0000<br/>
        172.16.0.80/26 -&gt; ... 0100 0000<br/>
        172.16.0.88/26 -&gt; ... 0101 1000<br/>
        El primer número de la izquierda siempre se mantiene en cero, por lo que la sumarización vendría a ser los 24 bits de los 3 primeros octetos + ese bit que se mantiene<br/>
        Sumarizado -&gt; 172.16.0.0/25<br/>
      </div>
      
      <h2 id="pasos-change-bandwidth">Cambiar ancho de banda de una interfaz</h2>
      <div className="code-container">
        <div>
          en<br/>
          conf t<br/>
          int s0/0/0<br/>
          bandwidth 4096<br/>
          do show int s0/0/0<br/>
        </div>
        <CopyCodeBtn/>
      </div>
      
      <h2 id="pasos-basic-security">Configurar seguridad básica</h2>
      <div className="code-container">
        <div>
          en<br/>
          conf t<br/>
          no ip domain-lookup<br/>
          enable secret upc123<br/>
          username DRCHOCOLATE secret upc321<br/>
          line console 0<br/>
          login local<br/>
          exit<br/>
          line vty 0 15<br/>
          tranport input all<br/>
          login local<br/>
          exit<br/>
          service password-encryptation<br/>
          banner motd #<br/>
          **********************************<br/>
          $ ** Solo Personal Autorizado ** $<br/>
          **********************************<br/>
          #<br/>
          exit<br/>
          copy run start<br/>
        </div>
        <CopyCodeBtn/>
      </div>

      <br />
      <a href="#id0">Volver a índice</a>
      <br /><br />

    </div>
  );
}

export default Section3_Pasos;