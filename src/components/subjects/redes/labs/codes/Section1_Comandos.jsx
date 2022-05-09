import command_ipconfig from "../images/command-ipconfig.PNG";
import command_ipconfig_all from "../images/command-ipconfig_all.PNG";
import command_ping from "../images/command-ping.PNG";
import command_ping_t from "../images/command-ping_-t.PNG";
import command_tracert from "../images/command-tracert.PNG";
import command_arp_a from "../images/command-arp_-a.PNG";
import command_net_view from "../images/command-net_view.PNG";
import command_enable from "../images/command-enable.PNG";
import command_conf_t from "../images/command-conf_t.PNG";
import command_interface from "../images/command-interface.PNG";
import command_exit from "../images/command-exit.PNG";
import command_hostname_name from "../images/command-hostname_name.PNG";
import command_show_run from "../images/command-show_run.PNG";
import command_show_ip_interface_br from "../images/command-show_ip_interface_br.PNG"
import command_do from "../images/command-do.PNG";
import command_ip_address from "../images/command-ip_address.PNG";
import command_no_shutdown from "../images/command-no_shutdown.PNG";
import command_copy_run_start from "../images/command-copy_run_start.PNG";
import command_show_version from "../images/command-show_version.PNG";
import command_show_vlan_brief from "../images/command-show_vlan_brief.PNG";
import command_show_interface_trunk from "../images/command-show_interface_trunk.PNG";
import command_vlan from "../images/command-vlan.PNG";
import command_switchport_mode_access from "../images/command-switchport_mode_access.PNG";
import command_switchport_access_vlan from "../images/command-switchport_access_vlan.PNG";
import command_interface_subinterface from "../images/command-interface_subinterface.PNG";
import command_encapsulation_dot1Q_vlan from "../images/command-encapsulation_dot1q_vlan.PNG";

function Section1_Comandos() {
  
    return (
      <div>
        <h1>Comandos</h1>

        <h2>General</h2>

        <h3>ipconfig</h3>
        <ul><li>Obtener de manera básica el direccionamiento IP, máscara y gateway del computador</li></ul>
        <img src={command_ipconfig} style={{width: 400, marginLeft: 17}}/>
        <br/>

        <h3>ipconfig /all</h3>
        <ul><li>Muestra más detalles del direccionamiento IP, máscara y gateway del computador</li>
            <li>Muestra además sobre el servidor DHCP, direcciones IPv6, y el DNS de tu proovedor de servicios con el cual te conectas a internet</li>
            <li>Muestra la dirección MAC y nombres y descripciones de tu tarjeta de red inalámbrica</li></ul>
        <img src={command_ipconfig_all} style={{width: 500, marginLeft: 17}}/>
        <br/>

        {/* &lt; -> "<"   &gt; -> ">" */}
        <h3>ping &lt;dirección&gt;</h3>
        <ul><li>Comando que permite verificar hacia un dispositivo remoto</li>
            <li>Ejecuta los comandos ECHO REPLAY y ECHO REQUEST</li></ul>
        <img src={command_ping} style={{width: 400, marginLeft: 17}}/>
        <br/>

        <h3>ping &lt;dirección&gt; -t</h3> 
        <ul><li>Hace lo mismo que ping pero una cantidad de veces indefinida</li></ul>
        <img src={command_ping_t} style={{width: 400, marginLeft: 17}}/>
        <br/>

        <h3>tracert &lt;dirección&gt;</h3>
        <ul><li>Me permite identificar la trayectoria del paquete al destino (viendo salto a salto, ip a ip por donde está pasando)</li>
            <li>Permite diagnosticar fallas</li></ul>
        <img src={command_tracert} style={{width: 450, marginLeft: 17}}/>
        <br/>

        <h3>arp -a</h3>
        <ul><li>Me permite encontrar las direcciones físicas conociendo la dirección IP</li>
            <li>Los datos mostrados son de la dirección a la que acabamos de hacer ping</li></ul>
        <img src={command_arp_a} style={{width: 450, marginLeft: 17}}/>
        <br/>

        <h3>net view</h3>
        <ul><li>Permite visualizar a qué grupo de trabajo pertenece la estación de trabajo</li></ul>
        <img src={command_net_view} style={{width: 600, marginLeft: 17}}/>
        <br/>

        <h2>Dispositivo de enlace</h2>

        <h3>enable (User -&gt; Admin mode)</h3>
        <ul><li>Cambia de modo usuario a modo administrador</li>
            <li>Cambia de símbolo "&gt;" a "#"</li></ul>
        <img src={command_enable} style={{width: 100, marginLeft: 17}}/>
        <br/>

        <h3>configurate terminal | conf t</h3>
        <ul><li>Cambia de modo administrador a modo configuración</li>
            <li>Cambia de símbolo "#" a "(config)#"</li></ul>
        <img src={command_conf_t} style={{width: 400, marginLeft: 17}}/>
        <br/>

        <h3>interface &lt;interfaz&gt; | int &lt;interfaz&gt;</h3>
        <ul><li>Cambia de modo configuración a modo configuración de interfaz</li>
            <li>A partir de aquí puedes configurar esa interfaz</li>
            <li>Cambia de símbolo "(config)#" a "(config-if)#"</li></ul>
        <img src={command_interface} style={{width: 250, marginLeft: 17}}/>
        <br/>

        <h3>exit</h3>
        <ul><li>Sale del modo en el que te encuentras</li></ul>
        <img src={command_exit} style={{width: 150, marginLeft: 17}}/>
        <br/>

        <h3>hostname &lt;name&gt;</h3>
        <ul><li>Cambia el hostname de un router</li></ul>
        <img src={command_hostname_name} style={{width: 300, marginLeft: 17}}/>
        <br/>

        <h3>show run &lt;name&gt;</h3>
        <ul><li>Muestra la configuración del router</li>
            <li>A nivel de hardware todo está almacenado temporalmente en la memoria RAM</li>
            <li>Comando ejecutable desde el modo administrador</li></ul>
        <img src={command_show_run} style={{width: 250, marginLeft: 17}}/>
        <br/>

        <h3>show ip interface br | show ip int br</h3>
        <ul><li>Muestra la configuración (estado actual) de las interfaces del router</li>
            <li>Desde modo administrador</li></ul>
        <img src={command_show_ip_interface_br} style={{width: 460, marginLeft: 17}}/>
        <br/>

        <h3>do &lt;comando&gt;</h3>
        <ul><li>Ejecuta un comando que debió ser ejecutado en un modo anterior</li></ul>
        <img src={command_do} style={{width: 370, marginLeft: 17}}/>
        <br/>

        <h3>ip address &lt;dirección ip&gt;  &lt;máscara&gt;</h3>
        <ul><li>Cambia la dirección ip de la interfaz que te encuentras editando</li></ul>
        <img src={command_ip_address} style={{width: 450, marginLeft: 17}}/>
        <br/>

        <h3>no shutdown</h3>
        <ul><li>Activa la interfaz que te encuentras editando</li></ul>
        <img src={command_no_shutdown} style={{width: 230, marginLeft: 17}}/>
        <br/>

        <h3>copy run start</h3>
        <ul><li>Copia la configuración actual a una memoria permanente</li>
            <li>Copia de la RAM a la NVRAM (sería como el "disco duro" de un router o switch)</li></ul>
        <img src={command_copy_run_start} style={{width: 230, marginLeft: 17}}/>
        <br/>

        <h3>show version</h3>
        <ul><li>Muestra detalles de la versión del sistema operativo del switch o router</li></ul>
        <img src={command_show_version} style={{width: 450, marginLeft: 17}}/>
        <br/>

        <h3>show vlan brief</h3>
        <ul><li>Muestra detalles de cada vlan del switch</li>
            <li>Muestra número de vlan, nombre de vlan y los puertos asginados a esa vlan</li></ul>
        <img src={command_show_vlan_brief} style={{width: 450, marginLeft: 17}}/>
        <br/>

        <h3>show interface trunk</h3>
        <ul><li>Muestra detalles de cada interfaz trunqueada del switch</li>
            <li>Muestra los números de vlans que están permitidas pasar por esa interfaz trunk</li></ul>
        <img src={command_show_interface_trunk} style={{width: 450, marginLeft: 17}}/>
        <br/>

        <h3>vlan &lt;numero&gt;</h3>
        <ul><li>Crea o edita una vlan</li>
            <li>Cambia del modo configuración a configuración de vlan</li>
            <li>Cambia de símbolo "(config)#" a "(config-vlan)#"</li></ul>
        <img src={command_vlan} style={{width: 170, marginLeft: 17}}/>
        <br/>

        <h3>switchport mode access</h3>
        <ul><li>Configura la interfaz en la que se encuentra para que solo tenga acceso una vlan única</li>
            <li>Se ejecuta desde el modo configuración de interfaz</li></ul>
        <img src={command_switchport_mode_access} style={{width: 280, marginLeft: 17}}/>
        <br/>

        <h3>switchport access vlan &lt;número de vlan&gt;</h3>
        <ul><li>Indica la vlan que estará ligada a la interfaz (la que tendrá acceso)</li>
            <li>Se ejecuta desde el modo configuración de interfaz después del comando "switchport mode access"</li></ul>
        <img src={command_switchport_access_vlan} style={{width: 280, marginLeft: 17}}/>
        <br/>

        <h3>interface &lt;interfaz&gt;.&lt;vlan&gt; | int &lt;interfaz&gt;.&lt;vlan&gt;</h3>
        - Crea o edita una subinterfaz
        - Cambia de modo configuración a modo configuración de subinterfaz
        - A partir de aquí puedes configurar esa subinterfaz
        - Cambia de símbolo "(config)#" a "(config-subif)#"
        <img src={command_interface_subinterface} style={{width: 280, marginLeft: 17}}/>
        <br/>

        <h3>encapsulation dot1Q &lt;vlan&gt;</h3>
        <ul><li>Configura la subinterfaz que te encuentras editando para que funcione en una vlan específica</li></ul>
        <img src={command_encapsulation_dot1Q_vlan} style={{width: 300, marginLeft: 17}}/>
        <br/>

      </div>
    );
  }
  
  export default Section1_Comandos;