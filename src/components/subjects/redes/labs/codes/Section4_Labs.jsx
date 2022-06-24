import la5_sem4 from "../images/lab-5_sem4.PNG";
import la6_sem4 from "../images/lab-6_sem4.PNG";
import la7_sem5 from "../images/lab-7_sem5.PNG";
import la8_sem9_1 from "../images/lab-8_sem9_1.PNG";
import la8_sem9_2 from "../images/lab-8_sem9_2.PNG";
import la9_1_sem9_1 from "../images/lab-9-1_sem9_1.PNG";
import la9_1_sem9_2 from "../images/lab-9-1_sem9_2.PNG";
import la9_2_sem9 from "../images/lab-9-2_sem9.PNG";
import la11_sem10 from "../images/lab-11_sem10.PNG";
import la14_sem12 from "../images/lab-14_sem12.PNG";
import la14_2_sem12 from "../images/lab-14-2_sem12.PNG";
import CopyCodeBtn from "../../../../auxiliar/CopyCodeBtn";
import "./LabsStyles.css";

function Section4_Labs() {

  return (
    <div>
      <h1 id="ejem">Laboratorios</h1>
      

      <h2 id="ejem-lab5">Lab 5 - Semana 4</h2>

      <div style={{ marginLeft: 20 }}>

        <h3>0. Poner nombres a los switches</h3>
        <ul><li>Se aplica en ambos switches (cambiando el número)</li></ul>
        <div className="code-container">
          <div>
            hostname Switch1_UPC
          </div>
          <CopyCodeBtn/>
        </div>

        <h3>1. Crear vlans y asignar nombres en switches</h3>
        <ul><li>Se aplica en ambos switches exactamente igual</li></ul>
        <div className="code-container">
          <div>
            vlan 10<br/>
            name LabProgramacion<br/>
            vlan 20<br/>
            name LabIndustrial<br/>
            vlan 99<br/>
            name Administracion<br/>
            do show vlan brief<br/>
            end<br/>
            <br />
            copy run start
          </div>
          <CopyCodeBtn/>
        </div>

        <h3>2. Asignar puertos de acceso a los switches</h3>
        <ul><li>Se aplica en ambos switches exactamente igual</li></ul>
        <div className="code-container">
          <div>
            interface range Fa0/1-2<br/>
            switchport mode access<br/>
            switchport access vlan 10<br/>
            <br />
            interface range Fa0/3-4<br/>
            switchport mode access<br/>
            switchport access vlan 20<br/>
            <br />
            do show vlan brief<br/>
          </div>
          <CopyCodeBtn/>
        </div>

        <h3>3. Asignar puertos troncales a los switches</h3>
        <ul><li>Se aplica en ambos switches exactamente igual</li></ul>
        <div className="code-container">
          <div>
            interface Fa0/24<br/>
            switchport mode trunk<br/>
            switchport trunk allowed vlan all<br/>
            <br />
            do show interface trunk<br/>
          </div>
          <CopyCodeBtn/>
        </div>

        <p style={{ color: "green", fontSize: 13 }}>#Nota: Si el switch estuviera conectado a un router o un servidor que abastece con diferentes servicios la red también serían puertos truncales</p>

        <h3>4. Configurar ip a los switches (la vlan de administración -&gt; vlan 99)</h3>
        <ul><li>Se aplica en ambos switches (cambiando el número de ip de 11 a 12 para el segundo switch)</li></ul>
        <div className="code-container">
          <div>
            interface vlan 99<br/>
            ip address 192.168.99.11 255.255.255.0<br/>
            no shutdown<br/>
            exit<br/>
            ip default-gateway 192.168.99.1<br/>
          </div>
          <CopyCodeBtn/>
        </div>

        <h3>5. Asignar nombres e IPs a los hosts</h3>
        <div className="code-container">
          <div>//asignar nombre, ipv4, máscara y gateway a cada pc<br/></div>
        </div>

        <h3>5. Verificar conectividad entre PCs de la misma vlan</h3>
        (No debe haber conectividad entre diferentes vlans)
        <div className="code-container">
          <div>//verificar conectividad<br/></div>
        </div>
        <br />
        <img src={la5_sem4} style={{ width: 560, marginLeft: 17 }} />

      </div>
      <br /><br />

      <h2 id="ejem-lab6">Lab 6 - Semana 4</h2>

      <div style={{ marginLeft: 20 }}>

        <h3>0. Asignar nombres e IPs a los hosts</h3>
        <div className="code-container">
          <div>//asignar nombre, ipv4, máscara y gateway a cada pc<br/></div>
        </div>

        <h3>1. Crear vlans y asignar nombres en switches</h3>
        <ul><li>Se aplica en los 3 switches exactamente igual</li></ul>
        <div className="code-container">
          <div>
            vlan 10<br/>
            name MKT<br/>
            vlan 20<br/>
            name ING<br/>
            vlan 99<br/>
            name ADM<br/>
            do show vlan brief<br/>
          </div>
          <CopyCodeBtn/>
        </div>

        <h3>2. Asignar puertos de acceso a los switches</h3>
        <ul><li>Se aplica en switch 2 y 3 exactamente igual</li></ul>
        <div className="code-container">
          <div>
            interface F0/2<br/>
            switchport mode access<br/>
            switchport access vlan 10<br/>
            <br />
            interface F0/3<br/>
            switchport mode access<br/>
            switchport access vlan 20<br/>
            <br />
            do show vlan brief<br/>
            do copy run start<br/>
          </div>
          <CopyCodeBtn/>
        </div>

        <h3>3. Asignar puertos troncales a los switches</h3>
        <ul>
          <li>Se aplica solo en switch 1
            <div className="code-container">
              <div>
                interface range Fa0/1-3<br/>
                switchport mode trunk<br/>
                switchport trunk native vlan 99<br/>
              </div>
          <CopyCodeBtn/>
            </div></li>

          <li>Se aplica en switch 2 y 3 exactamente igual
            <div className="code-container">
              <div>
                interface Fa0/1<br/>
                switchport mode trunk<br/>
                switchport trunk native vlan 99<br/>
              </div>
          <CopyCodeBtn/>
            </div></li>
        </ul>

        <h3>4. Configurar ip a los switches (la vlan de administración -&gt; vlan 99)</h3>
        <ul><li>Se aplica en todos los switches (cambiando el número de ip Switch1: 11, Switch2: 12, Switch3: 13)</li></ul>
        <div className="code-container">
          <div>
            interface vlan 99<br/>
            ip address 192.168.99.11 255.255.255.0<br/>
            no shutdown<br/>
            exit<br/>
            ip default-gateway 192.168.99.1<br/>
          </div>
          <CopyCodeBtn/>
        </div>

        <h3>5. Configurar inter-vlan en router</h3>
        <ul><li>Se aplica al router</li></ul>
        <div className="code-container">
          <div>
            interface Fa0/0<br/>
            no shutdown<br/>
            exit<br/>
  
            interface Fa0/0.10<br/>
            encapsulation dot1Q 10<br/>
            ip address 192.168.10.1 255.255.255.0<br/>
  
            interface Fa0/0.20<br/>
            encapsulation dot1Q 20<br/>
            ip address 192.168.20.1 255.255.255.0<br/>
  
            interface Fa0/0.99<br/>
            encapsulation dot1Q 99 native<br/>
            ip address 192.168.99.1 255.255.255.0<br/>
  
            <p>do show ip interface brief</p>
          </div>
          <CopyCodeBtn/>
        </div>
        <p style={{ color: "green", fontSize: 13 }}>#Nota: Las ips que se asignan a cada subinterfaz son los gateways de esas vlans</p>

        <h3>6. Verificar conectividad entre PCs de la misma vlan y de diferentes vlans y entre PCs y switches</h3>
        <div className="code-container">
          //verificar conectividad<br/>
        </div>

        <h3>7. Aplicar seguridad básica a router y switches</h3>
        <ul><li>Se aplica a los 3 switches y al router exactamente igual</li></ul>
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
        <br />
        <img src={la6_sem4} style={{ width: 450, marginLeft: 17 }} />

      </div>

      <br /><br />

      <h2 id="ejem-lab7">Lab 7 - Semana 5</h2>

      <div style={{ marginLeft: 20 }}>


        <h3>0. Agregar puertos físicos a routers</h3>
        <div className="code-container">
          <div>
            1. Agregar puerto HWIC-4ESW (el cual provee 4 puertos FastEthernet) al router Este<br/>
            2. Agregar puerto PT-SWITCH-NM-1FGE en el Switch 2<br/>
          </div>
        </div>

        <h3>1. Hacer las conexiones con los cables adecuados</h3>
        <div className="code-container">
            <div>//Hacer las conexiones//</div>
        </div>

        <h3>2. Verificar conectividad</h3>
        <div className="code-container">
            <div>//Verificar conectividad//</div>
        </div>

        <h3>3. Cambiar el html del servidor web</h3>
        <div className="code-container">
          <div>
            1. Entrar en cluter0<br/>
            2. Entrar en Server1<br/>
            3. Entrar en la sección Services, luego HTML y editar index.html<br/>
            4. Poner mi nombre de título y cambiar algunas cosas como el color y fehca<br/>
          </div>
        </div>

        <h3>4. Probar acceder al html por otra computadora</h3>
        <div className="code-container">
          <div>
            1. Entra a una PC y a la pestaña Desktop<br/>
            2. Luego entrar a Web Browser y en la barra de búsqueda poner el dominio o la dirección ip<br/>
          </div>
        </div>

        <br />
        <img src={la7_sem5} style={{ width: 450, marginLeft: 17 }} />

      </div>

      <br /><br />

      <h2 id="ejem-lab8">Lab 8 - Semana 9</h2>

      <div style={{ marginLeft: 20 }}>


        <h3>0. Visualizar tablas de enrutamiento</h3>
        <ul><li>Se aplica a los 3 routers</li></ul>
        <div className="code-container">
          <div>// En el packet tracer ir a la herramienta de lupa y seleccionar un router, luego darle a Routing Table</div>
        </div>

        <h3>1. Configurar enrutamiento estático</h3>
        <ul><li>Se aplica en el router R1</li></ul>
        <div className="code-container">
            <div>
              en<br/>
              conf t<br/>
              ip route 172.31.0.0 255.255.255.0 172.31.1.193<br/>
              ip route 172.31.1.196 255.255.255.252 172.31.1.193<br/>
              ip route 172.31.1.128 255.255.255.192 172.31.1.193<br/>
            </div>
            <CopyCodeBtn/>
        </div>

        <ul><li>El formato que se sigue es: ip route &lt;ip objetivo&gt; &lt;máscara de objetivo&gt; &lt;ip de salto&gt;. Los objetivos son direcciones remotas (lejos del router).</li>
            <li>En la siguiente imagen, los objetivos están en el circulo verde y para obtener la ip de salto debemos buscar la interfaz (o interfaces) por donde se envían los paquetes de otro dispositivo (la trayectoria por donde se envía está de color rosa en la imagen). Y de esa interfaz sacar su ip. En la imagen está señalado de un color azul feito.</li></ul>

        <img src={la8_sem9_1} style={{ width: '40%', marginLeft: 17 }}/>
        
        <ul><li>Se aplica en el router R2</li></ul>
        <div className="code-container">
            <div>
              en<br/>
              conf t<br/>
              ip route 172.31.1.0 255.255.255.128 172.31.1.194<br/>
              ip route 172.31.1.128 255.255.255.192 172.31.1.198<br/>
            </div>
            <CopyCodeBtn/>
        </div>
        
        <ul><li>Se aplica en el router R3</li></ul>
        <div className="code-container">
            <div>
              en<br/>
              conf t<br/>
              ip route 172.31.1.0 255.255.255.128 172.31.1.197<br/>
              ip route 172.31.1.192 255.255.255.252 172.31.1.197<br/>
              ip route 172.31.0.0 255.255.255.0 172.31.1.197<br/>
            </div>
            <CopyCodeBtn/>
        </div>

        <h3>2. Configurar ruta por defecto</h3>
        <ul><li>Se aplica en el router R3</li></ul>
        <div className="code-container">
            <div>
              en<br/>
              conf t<br/>
              ip route 0.0.0.0 0.0.0.0 s0/0/1<br/>
            </div>
            <CopyCodeBtn/>
        </div>

        <ul><li>El formato que se sigue es: ip route 0.0.0.0 0.0.0.0 &lt;interfaz de salida&gt;. Esta interfaz de salida corresponde a la del mismo router donde estás configurando.</li></ul>

        <h3>3. Verificar conectividad entre todas PCs y routers</h3>
        <div className="code-container">
          //verificar conectividad<br/>
        </div>

        <br />
        <img src={la8_sem9_2} style={{ width: '40%', marginLeft: 17 }} />

      </div>

      <br /><br />

      <h2 id="ejem-lab9.1">Lab 9.1 - Semana 9</h2>

      <div style={{ marginLeft: 20 }}>


        <h3>0. Visualizar tablas de enrutamiento</h3>
        <ul><li>Se aplica a los 3 routers</li></ul>
        <div className="code-container">
          <div>// En el packet tracer ir a la herramienta de lupa y seleccionar un router, luego darle a Routing Table</div>
        </div>

        <h3>1. Configurar enrutamiento dinámico</h3>
        <ul><li>Se aplica en el router R1</li></ul>
        <div className="code-container">
            <div>
              en<br/>
              conf t<br/>
              router rip<br/>
              network 192.168.1.0<br/>
              network 192.168.2.0<br/>
              network 209.165.200.0<br/>
              version 2<br/>
              no auto-summary<br/>
            </div>
            <CopyCodeBtn/>
        </div>

        <ul><li>El formato que se sigue es: network &lt;ip objetivo&gt;. Esta vez los objetivos son los conectados directamente (junto al router).</li>
            <li>En la siguiente imagen, los objetivos están en circulos verde y para obtener la ip del que no se ve podemos buscarlo en la tabla de enrutamiento del router que estamos configurando.</li></ul>

        <img src={la9_1_sem9_1} style={{ width: '40%', marginLeft: 17 }}/>
        
        <ul><li>Se aplica en el router R2</li></ul>
        <div className="code-container">
            <div>
              en<br/>
              conf t<br/>
              router rip<br/>
              network 192.168.2.0<br/>
              network 192.168.3.0<br/>
              network 192.168.4.0<br/>
              version 2<br/>
              no auto-summary<br/>
            </div>
            <CopyCodeBtn/>
        </div>
        
        <ul><li>Se aplica en el router R3</li></ul>
        <div className="code-container">
            <div>
              en<br/>
              conf t<br/>
              router rip<br/>
              network 192.168.4.0<br/>
              network 192.168.5.0<br/>
              version 2<br/>
              no auto-summary<br/>
            </div>
            <CopyCodeBtn/>
        </div>

        <h3>2. Configurar ruta por defecto</h3>
        <ul><li>Se aplica en los routers R1</li></ul>
        <div className="code-container">
            <div>
              en<br/>
              conf t<br/>
              ip route 0.0.0.0 0.0.0.0 s0/0/1<br/>
              default-information originate<br/>
            </div>
            <CopyCodeBtn/>
        </div>

        <ul><li>El formato que se sigue es: ip route 0.0.0.0 0.0.0.0 &lt;interfaz de salida&gt;. Esta interfaz de salida (hacia internet) corresponde a la del mismo router donde estás configurando.</li>
            <li>La ultima línea: default-information originate hace que esa ruta por defecto se paso por RIP a los demás routers. Sino tendríamos que hacerlo manualmente 1 por 1</li></ul>

        <h3>3. Cerrar interfaces no deseadas</h3>
        <ul><li>Se aplica en los routers R1 y R2</li></ul>
        <div className="code-container">
            <div>
              en<br/>
              conf t<br/>
              router rip<br/>
              passive-interface g0/0<br/>
            </div>
            <CopyCodeBtn/>
        </div>

        <ul><li>El formato que se sigue es: passive-interface &lt;interfaz no deseada&gt;. Esta interfaz no deseada suele corresponder a la de la red local (probablemente donde hay un switch que esté directamente conectado al router que estás configurando).</li></ul>

        <ul><li>Se aplica en el router R3</li></ul>
        <div className="code-container">
            <div>
              en<br/>
              conf t<br/>
              router rip<br/>
              passive-interface g0/1
            </div>
            <CopyCodeBtn/>
        </div>

        <h3>4. Verificar conectividad entre todas PCs y routers</h3>
        <div className="code-container">
          //verificar conectividad<br/>
        </div>

        <br />
        <img src={la9_1_sem9_2} style={{ width: '40%', marginLeft: 17 }} />

      </div>

      <br /><br />

      <h2 id="ejem-lab9.2">Lab 9.2 - Semana 9</h2>

      <div style={{ marginLeft: 20 }}>


        <h3>0. Visualizar tablas de enrutamiento</h3>
        <ul><li>Se aplica a los 3 routers</li></ul>
        <div className="code-container">
          <div>// En el packet tracer ir a la herramienta de lupa y seleccionar un router, luego darle a Routing Table</div>
        </div>

        <h3>1. Configurar enrutamiento dinámico</h3>
        <ul><li>Se aplica en el router R1</li></ul>
        <div className="code-container">
            <div>
              en<br/>
              conf t<br/>
              router ospf 10<br/>
              network 192.168.10.0 0.0.0.255 area 0<br/>
              network 10.1.1.0 0.0.0.3 area 0<br/>
              network 10.1.1.4 0.0.0.3 area 0<br/>
              router-id 1.1.1.1<br/>
              do copy run start<br/>
              reload<br/>
              <br/>
              en<br/>
              show run<br/>
            </div>
            <CopyCodeBtn/>
        </div>

        <ul><li>El formato que se sigue es: network &lt;ip objetivo&gt; &lt;wild card&gt;. Esta vez los objetivos son los conectados directamente (junto al router).</li>
            <li>El wild card es el complemento de la máscara. Ejem: para /24 --&gt; 255.255.255.0 su wild card es otro número con 4 partes (A.B.C.D) donde cada número hace que cada sumado al número de la máscara de 255. Entonces para 255.255.255.0 su wild card sería 0.0.0.255</li></ul>
        
        <ul><li>Se aplica en el router R2</li></ul>
        <div className="code-container">
            <div>
              en<br/>
              conf t<br/>
              router ospf 10<br/>
              network 192.168.20.0 0.0.0.255 area 0<br/>
              network 10.1.1.0 0.0.0.3 area 0<br/>
              network 10.1.1.8 0.0.0.3 area 0<br/>
              router-id 2.2.2.2<br/>
              do copy run start<br/>
              reload<br/>
              <br/>
              en<br/>
              show run<br/>
            </div>
            <CopyCodeBtn/>
        </div>
        
        <ul><li>Se aplica en el router R3</li></ul>
        <div className="code-container">
            <div>
              en<br/>
              conf t<br/>
              router ospf 10<br/>
              network 192.168.30.0 0.0.0.255 area 0<br/>
              network 10.1.1.4 0.0.0.3 area 0<br/>
              network 10.1.1.8 0.0.0.3 area 0<br/>
              router-id 3.3.3.3<br/>
              do copy run start<br/>
              reload<br/>
              <br/>
              en<br/>
              show run<br/>
            </div>
            <CopyCodeBtn/>
        </div>

        <h3>2. Configurar enrutamiento en interfaz de router</h3>
        <ul><li>Se aplica en el router R3</li></ul>
        <div className="code-container">
            <div>
              en<br/>
              conf t<br/>
              int g0/0/0<br/>
              ip ospf 10 area 0<br/>
              int s0/1/0<br/>
              ip ospf 10 area 0<br/>
              int s0/1/1<br/>
              ip ospf 10 area 0<br/>
            </div>
            <CopyCodeBtn/>
        </div>

        <h3>3. Cerrar interfaces no deseadas</h3>
        <ul><li>Se aplica en los routers R1, R2 y R3</li></ul>
        <div className="code-container">
            <div>
              en<br/>
              conf t<br/>
              router ospf 10<br/>
              passive-interface g0/0/0<br/>
            </div>
            <CopyCodeBtn/>
        </div>

        <ul><li>El formato que se sigue es: passive-interface &lt;interfaz no deseada&gt;. Esta interfaz no deseada suele corresponder a la de la red local (probablemente donde hay un switch que esté directamente conectado al router que estás configurando).</li></ul>

        <h3>4. Verificar conectividad entre todas PCs y routers</h3>
        <div className="code-container">
          //verificar conectividad<br/>
        </div>

        <br />
        <img src={la9_2_sem9} style={{ width: '40%', marginLeft: 17 }} />

      </div>

      <br /><br />

      <h2 id="ejem-lab11">Lab 11 - Semana 10</h2>

      <div style={{ marginLeft: 20 }}>


        <h3>0. Visualizar configuración de routers</h3>
        <ul><li>Se aplica a los 3 routers (cambiando la interfaz a la(s) interfaces que estén usandose)</li></ul>
        <div className="code-container">
            <div>
              en<br/>
              show ip int br<br/>
              show ip int s0/0/0<br/>
              show int s0/0/0<br/>
              show run<br/>
            </div>
              <CopyCodeBtn/>
        </div>

        <ul><li>Con el comando show int &lt;interfaz&gt; se puede visualizar que protocolo de encapsulación tiene esa interfaz.</li>
            <li>Por defecto el protocolo de encapsulación es HDLC.</li></ul>
        
        <h3>1. Cambiar el protocolo de encapsulación entre interfaces que conectan routers R1, R2 y R3 a PPP</h3>
        <ul><li>Se aplica en R1</li></ul>
        <div className="code-container">
            <div>
              en<br/>
              conf t<br/>
              int s0/0/0<br/>
              encapsulation ppp<br/>
            </div>
              <CopyCodeBtn/>
        </div>
        
        <ul><li>Se aplica en R3</li></ul>
        <div className="code-container">
            <div>
              en<br/>
              conf t<br/>
              int s0/0/0<br/>
              encapsulation ppp<br/>
              int s0/0/1<br/>
              encapsulation ppp<br/>
              int s0/1/0<br/>
              encapsulation ppp<br/>
            </div>
              <CopyCodeBtn/>
        </div>
        
        <ul><li>Se aplica en R2</li></ul>
        <div className="code-container">
            <div>
              en<br/>
              conf t<br/>
              int s0/0/1<br/>
              encapsulation ppp<br/>
            </div>
              <CopyCodeBtn/>
        </div>
        
        <ul><li>Se aplica en router ISP</li></ul>
        <div className="code-container">
            <div>
              en<br/>
              conf t<br/>
              int s0/0/0<br/>
              encapsulation ppp<br/>
            </div>
              <CopyCodeBtn/>
        </div>
        
        <h3>2. Configurar autenticación de PPP</h3>
        <b>- Autenticación CHAP entre R3 con ISP</b><br/>
        <b>- Autenticación PAP entre R3 con R1</b><br/>
        <b>- Autenticación PAP entre R3 con R2</b><br/>
        
        <ul><li><b>Para CHAP y PAP</b>
            <ul><li>Se debe configurar un username el cual debe ser el <b>hostname del otro router</b> con el que se está conectando y ambos routers deben tener la misma contraseña</li></ul></li></ul>

        <h3>CHAP entre R3 con ISP</h3>
        <ul><li>Se aplica en R3</li></ul>
        <div className="code-container">
            <div>
              en<br/>
              conf t<br/>
              username ISP secret cisco<br />
              int s0/1/0<br />
              ppp authentication chap<br />
            </div>
              <CopyCodeBtn/>
        </div>
        
        <ul><li>Se aplica en router ISP</li></ul>
        <div className="code-container">
            <div>
              en<br/>
              conf t<br/>
              hostname ISP
              username R3 secret cisco<br />
              int s0/0/0<br />
              ppp authentication chap<br />
            </div>
              <CopyCodeBtn/>
        </div>

        <ul><li>Cambiamos el hostname porque tenía el predeterminado: "Router" y no el que establecimos: "ISP"</li></ul>
        
        <h3>PAP entre R3 con R1</h3>
        <ul><li>Se aplica en R3</li></ul>
        <div className="code-container">
            <div>
              en<br/>
              conf t<br/>
              username R1 secret cisco<br />
              int s0/0/0<br />
              ppp authentication pap<br />
              ppp pap sent-username R3 password class
            </div>
              <CopyCodeBtn/>
        </div>
        
        <ul><li>Se aplica en router R1</li></ul>
        <div className="code-container">
            <div>
              en<br/>
              conf t<br/>
              username R3 secret class<br />
              int s0/0/0<br />
              ppp authentication pap<br />
              ppp pap sent-username R1 password cisco
            </div>
              <CopyCodeBtn/>
        </div>
        
        <h3>PAP entre R3 con R2</h3>
        <ul><li>Se aplica en R3</li></ul>
        <div className="code-container">
            <div>
              en<br/>
              conf t<br/>
              username R2 secret cisco<br />
              int s0/0/1<br />
              ppp authentication pap<br />
              ppp pap sent-username R3 password class
            </div>
              <CopyCodeBtn/>
        </div>
        
        <ul><li>Se aplica en router R2</li></ul>
        <div className="code-container">
            <div>
              en<br/>
              conf t<br/>
              username R3 secret class<br />
              int s0/0/1<br />
              ppp authentication pap<br />
              ppp pap sent-username R2 password cisco
            </div>
              <CopyCodeBtn/>
        </div>

        <h3>3. Verificar conectividad entre todas PCs y el servidor web</h3>
        <div className="code-container">
          //verificar conectividad<br/>
        </div>

        <br />
        <img src={la11_sem10} style={{ width: '60%', marginLeft: 17 }} />

      </div>

      <br /><br />

      <h2 id="ejem-lab14">Lab 14 - Semana 12</h2>

      <div style={{ marginLeft: 20 }}>

        <img src={la14_sem12} style={{ width: '85%', marginLeft: 17 }} />

        <h3>1. Diseñar un filtro que bloquee la salida de la ip 192.168.0.200/24</h3>
        <div className="code-container" style={{ flexDirection: 'column' }}>
            <div>
              <b>ORIGEN:</b> 192.168.0.200 0.0.0.0ㅤㅤoㅤㅤhost 192.168.0.200
              <div className="labs-notes"># Cuando se hace referencia a un solo ip la máscara es /32 que en wildcard equivale a 0.0.0.0, por lo que como origen solo es 1 ip le corresponde máscara /32</div>
              <b>DESTINO:</b> any
              <div className="labs-notes"># Para referirse a cualquier red se usa "any"</div>
              <b>Comandos de creación</b><br/>
              <ul className="labs-code-container-ul">
                <li className="labs-code-container-text-selected">ACL numerada: ACCESS-LIST ?</li>
                <li>ACL etiquetada: IP ACCESS-LIST ?</li></ul>
              <b>¿Qué tipo de ACL?</b><br/>
              <ul className="labs-code-container-ul">
                <li className="labs-code-container-text-selected">ACL estándar: Numerada [1-99]</li>
                <li>ACL extendida: Numerada [100-199]</li>
                <li>ACL estándar etiquetada</li>
                <li>ACL extendida etiquetada</li></ul>
              <b>¿En cuál router configuro?</b><br/>
              <ul className="labs-code-container-ul">
                <li className="labs-code-container-text-selected">Si eliges estándar configuras en el router más cercano al DESTINO</li>
                <li>Si eliges extendida configuras en el router más cercano al ORIGEN</li></ul>
              <b>Comando para aplicar ACL en interfaz</b><br/>
              <ul className="labs-code-container-ul">
                <li className="labs-code-container-text-selected">IP ACCESS-GROUP ?</li></ul>
              
              <div className="labs-notes"># Cuando se termina de configurar las ACL, al final se genera de forma implícita una ACL que bloquea el tráfico restante (deny any / deny ip any any)</div>
              <br/>
            </div>
            <div className="code-container">
              <div>
                access-list 1 deny 192.168.0.200 0.0.0.0<br/>
                access-list 1 permit any<br/>
                int f0/0<br/>
                ip access-group 1 out<br/>
              </div>
              <CopyCodeBtn/>
            </div>
        </div>

        <h3>2. Diseñar un filtro que bloquee la salida de los 16 primeros y los 16 últimos ips de la ip 192.168.3.0/24</h3>
        <div className="code-container" style={{ flexDirection: 'column' }}>
            <div>
              <div className="labs-notes"># Para abarcar varias ips se debe hacer un subneteo y encontrar la máscara que cubra esa cantidad de ips.<br/>
                Ej: para 16 ips -&gt;<br/>
                &nbsp;1° encontrar 2^x=16; x=4<br/>
                &nbsp;2° calcular 32-x; 32-4=28; <b>máscara: /28</b><br/>
                Obtenemos estas subredes:<br/>
                &nbsp; S0: 192.168.3.0/28 -&gt; 192.168.3.0 0.0.0.15<br/>
                &nbsp; S1: 192.168.3.16/28<br/>
                &nbsp; S2: 192.168.3.32/28<br/>
                &nbsp; ...<br/>
                &nbsp; S15: 192.168.3.240/28 -&gt; 192.168.3.240 0.0.0.15<br/>
                La cantidad de subredes: nSubreds=256/numIps; nSubreds=256/16=16<br/>
                Los primeras 16 ips estarán en la subred 0 (S0) y los últimos 16 en la subred nSubreds-1 (S15)<br/>
              </div>
              <b>ORIGEN:</b> 192.168.3.0 0.0.0.15; 192.168.3.240 0.0.0.15<br/>
              <b>DESTINO:</b> any<br/>
              <b>Comandos de creación</b><br/>
              <ul className="labs-code-container-ul">
                <li className="labs-code-container-text-selected">ACL numerada: ACCESS-LIST ?</li></ul>
              <b>¿Qué tipo de ACL y qué router configuro?</b><br/>
              <ul className="labs-code-container-ul">
                <li className="labs-code-container-text-selected">ACL extendida numerada -&gt; el router más cercano al ORIGEN(Router1) -&gt; interfaz cercana al ORIGEN(F0/1)</li></ul>              
              <div className="labs-notes"># Cuando está ingresando a la interfaz se usa IN. Cuando está saliendo se usa OUT</div>
              <br/>
            </div>
            <div className="code-container">
              <div>
                access-list 100 deny <b>ip</b> 192.168.3.0 0.0.0.15 any<br/>
                access-list 100 deny <b>ip</b> 192.168.3.240 0.0.0.15 any<br/>
                access-list 100 permit <b>ip</b> 192.168.3.0 0.0.0.255 any<br/>
                access-list 100 permit <b>ip</b> any any<br/>
                int f0/1<br/>
                ip access-group 100 in<br/>
              </div>
              <CopyCodeBtn/>
            </div>
        </div>
        <br/>
        <img src={la14_2_sem12} style={{ width: '85%', marginLeft: 17 }} />
        
        <h3>3. Diseñar un filtro que solo niegue las primeras 9 PC de la RED B conectarse con el equipo 192.168.5.3</h3>
        <div className="code-container" style={{ flexDirection: 'column' }}>
            <div>
              <b>ORIGEN:</b> 192.168.2.1 -&gt; 192.168.2.9<br/>
              <b>DESTINO:</b> 192.168.5.3 0.0.0.0<br/>
              ACL extendida etiquetada<br/>
              Router cercano al origen -&gt; Router1<br/>
              Interfaz -&gt; f0/0<br/>
            </div>
            <br/>
            <div className="code-container">
              <div>
                ip access-list extended <b>FILTRO-HOST</b><br/>
                deny ip 192.168.2.1 0.0.0.0 192.168.5.3 0.0.0.0<br/>
                deny ip 192.168.2.2 0.0.0.0 192.168.5.3 0.0.0.0<br/>
                deny ip 192.168.2.3 0.0.0.0 192.168.5.3 0.0.0.0<br/>
                deny ip 192.168.2.4 0.0.0.0 192.168.5.3 0.0.0.0<br/>
                deny ip 192.168.2.5 0.0.0.0 192.168.5.3 0.0.0.0<br/>
                deny ip 192.168.2.6 0.0.0.0 192.168.5.3 0.0.0.0<br/>
                deny ip 192.168.2.7 0.0.0.0 192.168.5.3 0.0.0.0<br/>
                deny ip 192.168.2.8 0.0.0.0 192.168.5.3 0.0.0.0<br/>
                deny ip 192.168.2.9 0.0.0.0 192.168.5.3 0.0.0.0<br/>
                permit ip any any<br/>
                int f0/0<br/>
                ip access-group <b>FILTRO-HOST</b> in<br/>
              </div>
              <CopyCodeBtn/>
            </div>
        </div>

        <h3>4. Diseñar un filtro que bloquee la salida de los 64 primeros IPs de la red 192.168.0.0/24</h3>
        <div className="code-container" style={{ flexDirection: 'column' }}>
            <div>
              <b>ORIGEN:</b> 192.168.0.0 0.0.0.255<br/>
              <b>DESTINO:</b> any<br/>
              ACL extendida etiquetada<br/>
              Router cercano al origen -&gt; Router0<br/>
              Interfaz -&gt; f0/0<br/>
              <div className="labs-notes">
                64 IPs -&gt; 2^x=64; x=6; máscara=32-x; 32-6=26; máscara: /26<br/>
                Cantidad subredes=256/ips; 256/64=4; Hay 4 subredes<br/>
                &nbsp; S0: 192.168.0.0/26 -&gt; 192.168.0.0 0.0.0.63<br/>
                &nbsp; S1: 192.168.0.64/26<br/>
                &nbsp; S2: 192.168.0.128/26<br/>
                &nbsp; S3: 192.168.0.192/26<br/>
              </div>
            </div><br/>
            <div className="code-container">
              <div>
                ip access-list extended <b>FILTRO-REDEXT</b><br/>
                deny ip 192.168.0.0 0.0.0.63 any<br/>
                permit ip 192.168.0.0 0.0.0.255 any<br/>
                permit ip any any<br/>
                int f0/0<br/>
                ip access-group <b>FILTRO-REDEXT</b> in<br/>
              </div>
              <CopyCodeBtn/>
            </div>
        </div>

        <h3>5. Diseñar un filtro para negar las consultas WEB solo al host 192.168.5.3</h3>
        <div className="code-container" style={{ flexDirection: 'column' }}>
            <div>
              <b>ORIGEN:</b> 192.168.5.3 0.0.0.0ㅤㅤoㅤㅤhost 192.168.5.3<br/>
              <b>DESTINO:</b> 192.168.2.3 0.0.0.0ㅤㅤoㅤㅤhost 192.168.2.3<br/>
              ACL extendida numerada<br/>
              Router cercano al origen -&gt; Router2<br/>
              Interfaz -&gt; f0/0<br/>
              <div className="labs-notes">-Cuando son servicios el protocolo es tcp o udp.<br/>
                -Para web el equivalente puede ser www o el puerto 80 (http) y puerto 443 (https).<br/>
                -Apoyarse en el signo ? para visualizar los demás puertos de otros servicios (dns-&gt;53)</div>
            </div>
            <br/>
            <div className="code-container">
              <div>
                access-list 102 deny tcp 192.168.5.3 0.0.0.0 192.168.2.3 0.0.0.0 eq 80<br/>
                access-list 102 deny tcp 192.168.5.3 0.0.0.0 192.168.2.3 0.0.0.0 eq 443<br/>
                access-list 102 permit ip any any<br/>
                int f0/0<br/>
                ip access-group 102 in<br/>
              </div>
              <CopyCodeBtn/>
            </div>
        </div>

        <h3>6. Diseñar un filtro para negar las consultas WEB solo a los 16 últimas pc de la red C y a las 64 primeras de la red A</h3>
        <div className="code-container">
            <div>
              access-list 101 deny tcp 192.168.5.240 0.0.0.15 192.168.2.3 0.0.0.0 eq 80<br/>
              access-list 101 deny tcp 192.168.5.240 0.0.0.15 192.168.2.3 0.0.0.0 eq 443<br/>
              access-list 101 deny tcp 192.168.0.0 0.0.0.63 192.168.2.3 0.0.0.0 eq 80<br/>
              access-list 101 deny tcp 192.168.0.0 0.0.0.63 192.168.2.3 0.0.0.0 eq 443<br/>
              access-list 101 permit ip any any<br/>
              int f0/0<br/>
              ip access-group 101 in<br/>
            </div>
            <CopyCodeBtn/>
        </div>

        <h3>7. Diseñar un filtro que niegue conexión a los 30 primero ips de la red 192.168.0.0 al DNS</h3>
        <div className="code-container" style={{ flexDirection: 'column' }}>
            <div>
              <div className="labs-notes">
                Para los primeros 30 ips:<br/>
                2^x -&gt; intentar acercarse al objetivo<br/>
                &nbsp; 2^x=30 -&gt; 2^<b>4</b>=16; -&gt; 30-16=14<br/>
                &nbsp; 2^x=14 -&gt; 2^<b>3</b>=8; -&gt; 14-8=6<br/>
                &nbsp; 2^x=6 -&gt; 2^<b>2</b>=4; -&gt; 6-4=2<br/>
                &nbsp; 2^x=2 -&gt; 2^<b>1</b>=2; -&gt; 2-2=0; <span className="labs-code-container-text-selected">Llegamos</span><br/>
                Por cada máscara, restar 32 con el valor de x (2^x)<br/>
                &nbsp; Mask 1; 32-4=28; máscara: /28<br/>
                &nbsp; Mask 2; 32-3=29; máscara: /29<br/>
                &nbsp; Mask 3; 32-2=30; máscara: /30<br/>
                &nbsp; Mask 4; 32-1=31; máscara: /32 <span className="labs-code-container-text-selected">Cuando es 1, se queda en 32 y lo aplicamos 2 veces. (Creo que también se podría defrente con uno de 31 :v)</span><br/>
                Las subredes quedarían así...<br/>
                &nbsp; S0: 192.168.0.0/28 -&gt; 192.168.0.0 0.0.0.15 <br/>
                &nbsp; S1: 192.168.0.16/29 -&gt; 192.168.0.16 0.0.0.7 <br/>
                &nbsp; S2: 192.168.0.24/30 -&gt; 192.168.0.24 0.0.0.3 <br/>
                &nbsp; S3: 192.168.0.28/32 -&gt; 192.168.0.28 0.0.0.0 <br/>
                &nbsp; S4: 192.168.0.29/32 -&gt; 192.168.0.29 0.0.0.0 <br/>
                &nbsp; S... ...
              </div>
            </div>
            <br/>
            <div className="code-container">
              <div>
                access-list 105 deny tcp 192.168.0.0 0.0.0.15 192.168.2.2 0.0.0.0 eq 53<br/>
                access-list 105 deny tcp 192.168.0.16 0.0.0.7 192.168.2.2 0.0.0.0 eq 53<br/>
                access-list 105 deny tcp 192.168.0.24 0.0.0.3 192.168.2.2 0.0.0.0 eq 53<br/>
                access-list 105 deny tcp 192.168.0.28 0.0.0.0 192.168.2.2 0.0.0.0 eq 53<br/>
                access-list 105 deny tcp 192.168.0.29 0.0.0.0 192.168.2.2 0.0.0.0 eq 53<br/>
                access-list 105 permit ip any any<br/>
                int f0/0<br/>
                ip access-group 105 in<br/>
              </div>
              <CopyCodeBtn/>
            </div>
        </div>
      </div>

      <br /><br />

      <h2 id="ejem-lab16">Lab 16 - Semana 12</h2>

      <div style={{ marginLeft: 20 }}>


        <h3>0. Visualizar configuración de routers y verificar conectividad</h3>
        <ul><li>Se aplica a los 3 routers (cambiando la interfaz a la(s) interfaces que estén usandose)</li></ul>
        <div className="code-container" style={{ flexDirection: 'column' }}>
          <div className="code-container">
              <div>
                en<br/>
                show ip int br<br/>
                show run<br/>
                show ip int s0/0/0<br/>
                show int s0/0/0<br/>
              </div>
              <CopyCodeBtn/>
          </div>
          <div>
            // verificar conectividad entre pcs y servidor (incluyendo servicios web y ftp)<br/>
            // se ve que es exitosa entre todos
          </div>
        </div>
        
        <h3>1. Crear ACL para permitir FTP e ICMP desde LAN PC1</h3>
        <ul><li>Se aplica en R1</li></ul>
        <div className="code-container">
            <div>
              en<br/>
              conf t<br/>
              access-list 100 permit tcp 172.22.34.64 0.0.0.31 host 172.22.34.62 eq ftp<br/>
              access-list 100 permit icmp 172.22.34.64 0.0.0.31 host 172.22.34.62<br/>
              int g0/0
              ip access-group 100 in<br/>
            </div>
            <CopyCodeBtn/>
        </div>

        <h3>2.  Configurar una ACL para permitir el acceso HTTP e ICMP desde LAN PC2</h3>
        <ul><li>Se aplica en R1</li></ul>
        <div className="code-container">
            <div>
              en<br/>
              conf t<br/>
              ip access-list extended HTTP_ONLY
              permit tcp 172.22.34.96 0.0.0.15 host 172.22.34.62 eq www<br/>
              permit icmp 172.22.34.96 0.0.0.15 host 172.22.34.62<br/>
              int g0/1<br/>
              ip access-group HTTP_ONLY in<br/>
            </div>
            <CopyCodeBtn/>
        </div>

        <h3>3. Verificar conectividad entre todas PCs y el servidor web</h3>
        <div className="code-container">
          //verificar conectividad<br/>
          //http desde pc1 al servidor (failed)<br/>
          //ftp desde pc1 al servidor (succesful)<br/>
          //http desde pc2 al servidor (succesful)<br/>
          //ftp desde pc2 al servidor (failed)<br/>
        </div>

        <br />
        <img src={la11_sem10} style={{ width: '60%', marginLeft: 17 }} />

      </div>

      <br /><br />

      <br />
      <a href="#id0">Volver a índice</a>
      <br /><br />

    </div>
  );
}

export default Section4_Labs;