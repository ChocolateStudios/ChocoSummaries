import * as React from 'react';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import ChocoListItem from "../../../../auxiliar/ChocoListItem";

function Index() {

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h1 id="id0">Índice</h1>
            </div>

            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <ChocoListItem marginLft={2} content={{
                    text: "Comandos",
                    link: "commands",
                    list: [
                        {
                            text: "General",
                            link: "commands-gen",
                            list: [
                                {
                                    text: "ipconfig",
                                    link: "commands-gen-ipconfig"
                                },
                                {
                                    text: "ipconfig /all",
                                    link: "commands-gen-ipconfig-all"
                                },
                                {
                                    text: "ping <dirección>",
                                    link: "commands-gen-ping"
                                },
                                {
                                    text: "ping <dirección> -t",
                                    link: "commands-gen-ping-t"
                                },
                                {
                                    text: "tracert <dirección>",
                                    link: "commands-gen-tracert"
                                },
                                {
                                    text: "arp -a",
                                    link: "commands-gen-arp-a"
                                },
                                {
                                    text: "net view",
                                    link: "commands-gen-netview"
                                }
                            ]
                        },
                        {
                            text: "Dispositivo de enlace",
                            link: "commands-disp-enl",
                            list: [
                                {
                                    text: "enable",
                                    link: "commands-disp-enl-enable"
                                },
                                {
                                    text: "configurate terminal | conf t",
                                    link: "commands-disp-conf-t"
                                },
                                {
                                    text: "interface <interfaz> | int <interfaz>",
                                    link: "commands-disp-enl-interface"
                                },
                                {
                                    text: "exit",
                                    link: "commands-disp-enl-exit"
                                },
                                {
                                    text: "hostname <name>",
                                    link: "commands-disp-enl-hostname"
                                },
                                {
                                    text: "show run <name>",
                                    link: "commands-disp-enl-show-run"
                                },
                                {
                                    text: "show ip interface br | show ip int br",
                                    link: "commands-disp-enl-show-ip-int-br"
                                },
                                {
                                    text: "do <comando>",
                                    link: "commands-disp-enl-do"
                                },
                                {
                                    text: "ip address <dirección ip> <máscara>",
                                    link: "commands-disp-enl-ip-address"
                                },
                                {
                                    text: "no shutdown",
                                    link: "commands-disp-enl-no-shutdown"
                                },
                                {
                                    text: "copy run start",
                                    link: "commands-disp-enl-copy-run-start"
                                },
                                {
                                    text: "show version",
                                    link: "commands-disp-enl-show-ver"
                                },
                                {
                                    text: "show vlan brief",
                                    link: "commands-disp-enl-show-vlan-brief"
                                },
                                {
                                    text: "show interface trunk",
                                    link: "commands-disp-enl-show-int-trunk"
                                },
                                {
                                    text: "vlan <número>",
                                    link: "commands-disp-enl-vlan"
                                },
                                {
                                    text: "switchport mode access",
                                    link: "commands-disp-enl-swt-mode-access"
                                },
                                {
                                    text: "switchport access vlan <número de vlan>",
                                    link: "commands-disp-enl-swt-access-vlan"
                                },
                                {
                                    text: "interface <interfaz>.<vlan> | int <interfaz>.<vlan>",
                                    link: "commands-disp-enl-int-int"
                                },
                                {
                                    text: "encapsulation dot1Q <vlan>",
                                    link: "commands-disp-enl-encp-dot1q"
                                }
                            ]
                        }
                    ]
                }}
                />
                <ChocoListItem marginLft={2} content={{
                    text: "Modos",
                    link: "modes",
                    list: [
                        {
                            text: "Usuario",
                            link: "modes-user"
                        },
                        {
                            text: "Administrador",
                            link: "modes-admin"
                        },
                        {
                            text: "Configuración",
                            link: "modes-conf"
                        },
                        {
                            text: "Configuracion de interfaz",
                            link: "modes-conf-int"
                        },
                        {
                            text: "Configuracion de vlan",
                            link: "modes-conf-vlan"
                        }
                    ]
                }}
                />
                <ChocoListItem marginLft={2} content={{
                    text: "Pasos",
                    link: "pasos",
                    list: [
                        {
                            text: "Ver configuración",
                            link: "pasos-ver-conf"
                        },
                        {
                            text: "Asignar dirección ip en interfaz",
                            link: "pasos-asign-ip-int"
                        },
                        {
                            text: "Ver estado actual de las interfaces",
                            link: "pasos-ver-estado-int"
                        },
                        {
                            text: "Asignar dirección ip en vlan de switch",
                            link: "pasos-asign-ip-vlan"
                        },
                        {
                            text: "Asignar default gateway en switch",
                            link: "pasos-asign-default-gateway"
                        },
                        {
                            text: "Rip en router",
                            link: "pasos-rip-router"
                        },
                        {
                            text: "Verificar versión del sistema operativo",
                            link: "pasos-ver-version-SO"
                        },
                        {
                            text: "Verificar detalles de las vlans de un switch",
                            link: "pasos-ver-vlans"
                        },
                        {
                            text: "Verificar detalles de los trunks de un switch",
                            link: "pasos-ver-trunks"
                        },
                        {
                            text: "Verificar detalles de una interfaz",
                            link: "pasos-ver-int-especific"
                        },
                        {
                            text: "Crear vlan y asignar nombre",
                            link: "pasos-crear-vlan"
                        },
                        {
                            text: "Eliminar vlan",
                            link: "pasos-eliminar-vlan"
                        },
                        {
                            text: "Asignar puerto a una vlan",
                            link: "pasos-asign-port-vlan"
                        },
                        {
                            text: "Asignar vlan de voz",
                            link: "pasos-asign-vlan-voz"
                        },
                        {
                            text: "Realizar trunk en un puerto en switch",
                            link: "pasos-trunk-port"
                        },
                        {
                            text: "Realizar trunk en un puerto con vlan nativa en switch",
                            link: "pasos-trunk-port-vlan-native"
                        },
                        {
                            text: "Borrar configuración de vlans en switch",
                            link: "pasos-borrar-conf-vlans"
                        },
                        {
                            text: "Borrar configuración de switch",
                            link: "pasos-borrar-conf"
                        },
                        {
                            text: "Crear subinterfaz en router",
                            link: "pasos-crear-subint"
                        },
                        {
                            text: "Encapsular subinterfaz de router",
                            link: "pasos-encap-int"
                        },
                        {
                            text: "Poner contraseña al router o switch",
                            link: "pasos-password"
                        },
                        {
                            text: "Comandos de verificación",
                            link: "pasos-verificar"
                        },
                        {
                            text: "Mostrar historial de los últimos comandos ejecutados",
                            link: "pasos-mostrar-commands-history"
                        },
                        {
                            text: "Visualizar tabla de enrutamiento",
                            link: "pasos-visualizar-tabla-enrut"
                        },
                        {
                            text: "Sumarización",
                            link: "pasos-sumarizacion"
                        },
                        {
                            text: "Cambiar ancho de banda de una interfaz",
                            link: "pasos-change-bandwidth"
                        },
                        {
                            text: "Configurar seguridad básica",
                            link: "pasos-basic-security"
                        }
                    ]
                }}
                />
                <ChocoListItem marginLft={2} content={{
                    text: "Laboratorios",
                    link: "ejem",
                    list: [
                        {
                            text: "Lab 5 - Semana 4",
                            link: "ejem-lab5"
                        },
                        {
                            text: "Lab 6 - Semana 4",
                            link: "ejem-lab6"
                        },
                        {
                            text: "Lab 7 - Semana 5",
                            link: "ejem-lab7"
                        },
                        {
                            text: "Lab 8 - Semana 9",
                            link: "ejem-lab8"
                        },
                        {
                            text: "Lab 9.1 - Semana 9",
                            link: "ejem-lab9.1"
                        },
                        {
                            text: "Lab 9.2 - Semana 9",
                            link: "ejem-lab9.2"
                        },
                        {
                            text: "Lab 11 - Semana 10",
                            link: "ejem-lab11"
                        },
                        {
                            text: "Lab 14 - Semana 12",
                            link: "ejem-lab14"
                        },
                        {
                            text: "Lab 16 - Semana 12",
                            link: "ejem-lab16"
                        }
                    ]
                }}
                />
                <ChocoListItem marginLft={2} content={{
                    text: "Otras configuraciones",
                    link: "others",
                    list: [
                        {
                            text: "Configuración de los routers en una red WAN",
                            link: "others-conf-router-wan"
                        }
                    ]
                }}
                />
            </List>







            {/* <ul><li><a href="#commands">Comandos</a>

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

                    <ul><li><a href="#others-conf-router-wan">Configuración de los routers en una red WAN</a></li></ul></li></ul> */}
        </div>
    );
}

export default Index;