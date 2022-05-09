import la5_sem4 from "../images/lab-5_sem4.PNG";
import la6_sem4 from "../images/lab-6_sem4.PNG";
import la7_sem5 from "../images/lab-7_sem5.PNG";

function Section4_Ejemplos() {
  
    return (
      <div>


<h1>Ejemplos</h1>

<h2>Lab 5 - Semana 4</h2>

<div style={{marginLeft: 20}}>

  <h3>0. Poner nombres a los switches</h3>
  <ul><li>Se aplica en ambos switches (cambiando el número)</li></ul>
  <div style={{backgroundColor: "#E9E9E9"}}>
  hostname Switch1_UPC
  </div>

  <h3>1. Crear vlans y asignar nombres en switches</h3>
  <ul><li>Se aplica en ambos switches exactamente igual</li></ul>
  <div style={{backgroundColor: "#E9E9E9"}}>
    <p>vlan 10</p>
    <p>name LabProgramacion</p>
    <p>vlan 20</p>
    <p>name LabIndustrial</p>
    <p>vlan 99</p>
    <p>name Administracion</p>
    <p>do show vlan brief</p>
    <p>end</p>
    <br/>
    <p>copy run start</p>
  </div>

  <h3>2. Asignar puertos de acceso a los switches</h3>
  <ul><li>Se aplica en ambos switches exactamente igual</li></ul>
  <div style={{backgroundColor: "#E9E9E9"}}>
    <p>interface range Fa0/1-2</p>
    <p>switchport mode access</p>
    <p>switchport access vlan 10</p>
    <br/>
    <p>interface range Fa0/3-4</p>
    <p>switchport mode access</p>
    <p>switchport access vlan 20</p>
    <br/>
    <p>do show vlan brief</p>
  </div>

  <h3>3. Asignar puertos troncales a los switches</h3>
  <ul><li>Se aplica en ambos switches exactamente igual</li></ul>
  <div style={{backgroundColor: "#E9E9E9"}}>
    <p>interface Fa0/24</p>
    <p>switchport mode trunk</p>
    <p>switchport trunk allowed vlan all</p>
    <br/>
    <p>do show interface trunk</p>
  </div>

  <p style={{color: "green", fontSize: 13}}>#Nota: Si el switch estuviera conectado a un router o un servidor que abastece con diferentes servicios la red también serían puertos truncales</p>

  <h3>4. Configurar ip a los switches (la vlan de administración -&gt; vlan 99)</h3>
  <ul><li>Se aplica en ambos switches (cambiando el número de ip de 11 a 12 para el segundo switch)</li></ul>
  <div style={{backgroundColor: "#E9E9E9"}}>
    <p>interface vlan 99</p>
    <p>ip address 192.168.99.11 255.255.255.0</p>
    <p>no shutdown</p>
    <p>exit</p>
    <p>ip default-gateway 192.168.99.1</p>
  </div>

  <h3>5. Asignar nombres e IPs a los hosts</h3>
  <div style={{backgroundColor: "#E9E9E9"}}>
    <p>//asignar nombre, ipv4, máscara y gateway a cada pc//</p>
  </div>

  <h3>5. Verificar conectividad entre PCs de la misma vlan</h3>
  (No debe haber conectividad entre diferentes vlans)
  <div style={{backgroundColor: "#E9E9E9"}}>
    <p>//verificar conectividad//</p>
  </div>
  <br/>
  <img src={la5_sem4} style={{width: 560, marginLeft: 17}}/>

</div>
<br/><br/>

<h2>Lab 6 - Semana 4</h2>

<div style={{marginLeft: 20}}>

  <h3>0. Asignar nombres e IPs a los hosts</h3>
  <div style={{backgroundColor: "#E9E9E9"}}>
    <p>//asignar nombre, ipv4, máscara y gateway a cada pc//</p>
  </div>

  <h3>1. Crear vlans y asignar nombres en switches</h3>
  <ul><li>Se aplica en los 3 switches exactamente igual</li></ul>
  <div style={{backgroundColor: "#E9E9E9"}}>
    <p>vlan 10</p>
    <p>name MKT</p>
    <p>vlan 20</p>
    <p>name ING</p>
    <p>vlan 99</p>
    <p>name ADM</p>
    <p>do show vlan brief</p>
  </div>

  <h3>2. Asignar puertos de acceso a los switches</h3>
  <ul><li>Se aplica en switch 2 y 3 exactamente igual</li></ul>
  <div style={{backgroundColor: "#E9E9E9"}}>
    <p>interface F0/2</p>
    <p>switchport mode access</p>
    <p>switchport access vlan 10</p>
    <br/>
    <p>interface F0/3</p>
    <p>switchport mode access</p>
    <p>switchport access vlan 20</p>
    <br/>
    <p>do show vlan brief</p>
    <p>do copy run start</p>
  </div>

  <h3>3. Asignar puertos troncales a los switches</h3>
  <ul>
    <li>Se aplica solo en switch 1
    <div style={{backgroundColor: "#E9E9E9"}}>
      <p>interface range Fa0/1-3</p>
      <p>switchport mode trunk</p>
      <p>switchport trunk native vlan 99</p>
    </div></li>

    <li>Se aplica en switch 2 y 3 exactamente igual
    <div style={{backgroundColor: "#E9E9E9"}}>
      <p>interface Fa0/1</p>
      <p>switchport mode trunk</p>
      <p>switchport trunk native vlan 99</p>
    </div></li>
  </ul>

  <h3>4. Configurar ip a los switches (la vlan de administración -&gt; vlan 99)</h3>
  <ul><li>Se aplica en todos los switches (cambiando el número de ip Switch1: 11, Switch2: 12, Switch3: 13)</li></ul>
  <div style={{backgroundColor: "#E9E9E9"}}>
    <p>interface vlan 99</p>
    <p>ip address 192.168.99.11 255.255.255.0</p>
    <p>no shutdown</p>
    <p>exit</p>
    <p>ip default-gateway 192.168.99.1</p>
  </div>

  <h3>5. Configurar inter-vlan en router</h3>
  <ul><li>Se aplica al router</li></ul>
  <div style={{backgroundColor: "#E9E9E9"}}>
    <p>interface Fa0/0</p>
    <p>no shutdown</p>
    <p>exit</p>

    <p>interface Fa0/0.10</p>
    <p>encapsulation dot1Q 10</p>
    <p>ip address 192.168.10.1 255.255.255.0</p>

    <p>interface Fa0/0.20</p>
    <p>encapsulation dot1Q 20</p>
    <p>ip address 192.168.20.1 255.255.255.0</p>

    <p>interface Fa0/0.99</p>
    <p>encapsulation dot1Q 99 native</p>
    <p>ip address 192.168.99.1 255.255.255.0</p>

    <p>do show ip interface brief</p>
  </div>
  <p style={{color: "green", fontSize: 13}}>#Nota: Las ips que se asignan a cada subinterfaz son los gateways de esas vlans (que por lo general tienen su último octecto como ".1")</p>

  <h3>6. Verificar conectividad entre PCs de la misma vlan y de diferentes vlans y entre PCs y switches</h3>
  <div style={{backgroundColor: "#E9E9E9"}}>
    <p>verificar conectividad</p>
  </div>

  <h3>7. Aplicar seguridad básica a router y switches</h3>
  <ul><li>Se aplica a los 3 switches y al router exactamente igual</li></ul>
  <div style={{backgroundColor: "#E9E9E9"}}>
    <p>username ADMIN secret upc123</p>
    <p>enable secret upc321</p>
    <p>line console 0</p>
    <p>login local</p>
    <p>exit</p>
    <p>line vty 0 15</p>
    <p>login local</p>
    <p>exit</p>
  </div>
  <br/>
  <img src={la6_sem4} style={{width: 450, marginLeft: 17}}/>

</div>

<br/><br/>

<h2>Lab 7 - Semana 5</h2>

<div style={{marginLeft: 20}}>


  <h3>0. Agregar puertos físicos a routers</h3>
  <div style={{backgroundColor: "#E9E9E9"}}>
    <p>1. Agregar puerto HWIC-4ESW (el cual provee 4 puertos FastEthernet) al router Este</p>
    <p>2. Agregar puerto PT-SWITCH-NM-1FGE en el Switch 2</p>
  </div>

  <h3>1. Hacer las conexiones con los cables adecuados</h3>
  <div style={{backgroundColor: "#E9E9E9"}}>
    //Hacer las conexiones//
  </div>

  <h3>2. Verificar conectividad</h3>
  <div style={{backgroundColor: "#E9E9E9"}}>
    //Verificar conectividad//
  </div>

  <h3>3. Cambiar el html del servidor web</h3>
  <div style={{backgroundColor: "#E9E9E9"}}>
    <p>1. Entrar en cluter0</p>
    <p>2. Entrar en Server1</p>
    <p>3. Entrar en la sección Services, luego HTML y editar index.html</p>
    <p>4. Poner mi nombre de título y cambiar algunas cosas como el color y fehca</p>
  </div>

  <h3>4. Probar acceder al html por otra computadora</h3>
  <div style={{backgroundColor: "#E9E9E9"}}>
    <p>1. Entra a una PC y a la pestaña Desktop</p>
    <p>2. Luego entrar a Web Browser y en la barra de búsqueda poner el dominio o la dirección ip</p>
  </div>

  <br/>
  <img src={la7_sem5} style={{width: 450, marginLeft: 17}}/>

</div>
<br/><br/>

      </div>
    );
  }
  
  export default Section4_Ejemplos;