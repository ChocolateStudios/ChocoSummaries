import mode_user from "../images/mode-user.PNG";
import mode_admin from "../images/mode-admin.PNG";
import mode_configuration from "../images/mode-configuration.PNG";
import mode_configuration_interface from "../images/mode-configuration-interface.PNG";
import mode_configuration_vlan from "../images/mode-configuration-vlan.PNG";

function Section2_Modos() {
  
    return (
      <div>
        <h1>Modos</h1>

        <h3>Usuario</h3>
        <ul><li>Modo básico</li>
            <li>Para poder ver algunas lecturas, hacer algunos "piris" (asi lo escuche al profe :v), o visualizar alguna información del router</li>
            <li>Símbolo "&gt;"</li></ul>
        <img src={mode_user} style={{width: 300, marginLeft: 17}}/>
        <br/>

        <h3>Administrador</h3>
        <ul><li>Modo ejecución de usuario</li>
            <li>Símbolo "#"</li></ul>
        <img src={mode_admin} style={{width: 400, marginLeft: 17}}/>
        <br/>

        <h3>Configuración</h3>
        <ul><li>Modo de ejecución de comandos de configuración</li>
            <li>Símbolo "(config)#"</li></ul>
        <img src={mode_configuration} style={{width: 400, marginLeft: 17}}/>
        <br/>

        <h3>Configuracion de interfaz</h3>
        <ul><li>Modo de ejecución de comandos de configuración de interfaz</li>
            <li>Símbolo "(config-if)#"</li></ul>
        <img src={mode_configuration_interface} style={{width: 420, marginLeft: 17}}/>
        <br/>

        <h3>Configuracion de vlan</h3>
        <ul><li>Modo de ejecución de comandos de configuración de vlan</li>
            <li>Símbolo "(config-vlan)#"</li></ul>
        <img src={mode_configuration_vlan} style={{width: 420, marginLeft: 17}}/>
        <br/>

      </div>
    );
  }
  
  export default Section2_Modos;