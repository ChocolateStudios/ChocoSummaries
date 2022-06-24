import config_routers_wan from "../images/config-routers_wan.PNG";
import config_routers_wan_router_clock from "../images/config-routers_wan_router_clock.PNG";
import config_routers_wan_save from "../images/config-routers_wan_save.PNG";
import "./LabsStyles.css";

function Section5_OtrasConfiguraciones() {
  
    return (
      <div>
        <h1 id="others">Otras configuraciones</h1>

        <h2 id="others-conf-router-wan">Configuración de los routers en una red WAN</h2>

        <h3>Paso 1: identificar direcciones ips</h3>
        <div className="code-container">
          <ul><li>Nos dan primero una dirección ip. Por ejemplo 50.50.50.1/30 para la red Lima</li>
              <li>Al trabajar con una máscara /30 sabemos que tenemos 4 direcciones ips: .0; .1; .2; .3</li>
              <li>Asumimos que la dirección de subred es 50.50.50.0 y el broadcast es 50.50.50.3</li>
              <li>Como antes establecimos que 50.50.50.1 corresponde al router asignado en la red Lima, la dirección restante (50.50.50.2) corresponde para el router central
                <ul><li>El router de lima es donde está el número 2 y el router central es donde está el número 3</li></ul></li>
              <li>Este patrón también se puede apreciar en los otros 2 routers</li></ul>
        </div>
        <img src={config_routers_wan} style={{width: 450, marginLeft: 17, marginTop: 30}}/>

        <h3>Paso 2: Asignar direcciones ips a los puertos y configurar clock</h3>
        <div className="code-container">
          <ul><li>Llenamos las casillas de los ipv4 con los datos obtenidos del paso 1 en cada puerto serial</li>
              <li>Para la casilla de la máscara tienes que calcularla con la máscara del paso 1. En este caso era /30, es decir, la máscara es 255.255.255.252. Y se repite para todos</li>
              <li>Luego, se debe verificar si en el puerto del router que estas configurando aparece el símbolo del reloj
                <ul><li>Si es así entonces debes configurar la frecuencia de acuerdo a las especificaciones del tipo de router, aunque un valor por defecto es 64000</li>
                    <li>Si no es así, entonces seguramente el reloj aparece en el otro extremo, es decir, tendrías que ponerle la opción "Not Set" a este puerto serial, y cuando configures del otro extremo allí recién le pones un valor</li></ul></li>
              <li>Finalmente debes encender el puerto dandole al checkbox "On"</li></ul>
        </div>
        <img src={config_routers_wan_router_clock} style={{width: 850, marginLeft: 17, marginTop: 30}}/>

        <h3>Paso 3: Guardar y verificar conexión</h3>
        <div  className="code-container">
          <ul><li>Ir a la configuración global y darle al botón "Save"</li>
              <li>Finalmente prueba enviar un paquete entre el router central y otro. Ambos deben haber sido configurados con los pasos anteriores</li></ul>
        </div>
        <img src={config_routers_wan_save} style={{width: 420, marginLeft: 17, marginTop: 30}}/>

        <br/><br/>
        <a href="#id0">Volver a índice</a>
        <br/><br/>
      </div>
    );
  }
  
  export default Section5_OtrasConfiguraciones;