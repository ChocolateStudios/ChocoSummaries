import * as React from 'react';
import List from '@mui/material/List';
import ChocoListItem from '../../../../auxiliar/ChocoListItem';

function Index() {

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h1 id="id0">Índice</h1>
            </div>

            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <ChocoListItem marginLft={2} content={{
                    text: "Conociendo algunos conceptos",
                    link: "con-conceptos",
                    list: [
                        {
                            text: "Dispositivos",
                            link: "con-dispositivos",
                            list: [
                                {
                                    text: "Sistemas intermedios",
                                    link: "con-dispositivos-intermedios"
                                },
                                {
                                    text: "Dispositivos finales",
                                    link: "con-dispositivos-finales"
                                }
                            ]
                        },
                        {
                            text: "Servicios",
                            link: "con-servicios",
                            list: [
                                {
                                    text: "Medios de transmisión",
                                    link: "con-medios-transmision"
                                },
                                {
                                    text: "Basados en cables",
                                    link: "con-medios-transmision-cables"
                                },
                                {
                                    text: "Inalámbricos",
                                    link: "con-medios-transmision-inalambricos"
                                }
                            ]
                        },
                        {
                            text: "Protocolos",
                            link: "con-protocolos"
                        }
                    ]
                }}
                />

                <ChocoListItem marginLft={2} content={{
                    text: "Conceptos básicos y modelo OSI",
                    link: "mod-osi",
                    list: [
                        {
                            text: "Servicios y aplicaciones",
                            link: "mod-osi-serv-apps",
                            list: [
                                {
                                    text: "Componentes de las redes",
                                    link: "mod-osi-componente-de-redes",
                                    list: [
                                        {
                                            text: "Servidores",
                                            link: "mod-osi-componente-de-redes-servers"
                                        },
                                        {
                                            text: "Clientes",
                                            link: "mod-osi-componente-de-redes-clients"
                                        },
                                        {
                                            text: "Protocolos",
                                            link: "#mod-osi-componente-de-redes-protocols"
                                        }
                                    ]
                                },
                                {
                                    text: "Punto a punto",
                                    link: "mod-osi-punto-punto"
                                },
                                {
                                    text: "Dispositivos finales",
                                    link: "mod-osi-disp-finales"
                                },
                                {
                                    text: "Dispositivos de red intermedios",
                                    link: "mod-osi-disp-intermed"
                                },
                                {
                                    text: "Medios de red",
                                    link: "mod-osi-medios-de-red"
                                },
                                {
                                    text: "Tipos de redes",
                                    link: "mod-osi-tipos-redes",
                                    list: [
                                        {
                                            text: "LAN",
                                            link: "mod-osi-tipos-redes-lan"
                                        },
                                        {
                                            text: "WAN",
                                            link: "mod-osi-tipos-redes-wan"
                                        }
                                    ]
                                },
                                {
                                    text: "Intranet y Extranet",
                                    link: "mod-osi-intra-extra",
                                    list: [
                                        {
                                            text: "Intranet",
                                            link: "mod-osi-intra-extra-intra"
                                        },
                                        {
                                            text: "Extranet",
                                            link: "mod-osi-intra-extra-extra"
                                        }
                                    ]
                                },
                                {
                                    text: "Conexiones de internet",
                                    link: "mod-osi-conexiones-internet",
                                    list: [
                                        {
                                            text: "Cable",
                                            link: "mod-osi-conexiones-internet-cable"
                                        },
                                        {
                                            text: "DSL",
                                            link: "mod-osi-conexiones-internet-dls"
                                        },
                                        {
                                            text: "Red celular",
                                            link: "mod-osi-conexiones-internet-cel"
                                        },
                                        {
                                            text: "Satélite",
                                            link: "mod-osi-conexiones-internet-satelite"
                                        },
                                        {
                                            text: "Teléfono de marcación",
                                            link: "mod-osi-conexiones-internet-marca"
                                        }
                                    ]
                                },
                                {
                                    text: "Red convergente",
                                    link: "mod-osi-red-convergente"
                                },
                                {
                                    text: "Redes Confiables",
                                    link: "mod-osi-red-confiables",
                                    list: [
                                        {
                                            text: "Arquitectura de Red",
                                            link: "mod-osi-red-confiables-arqui",
                                            list: [
                                                {
                                                    text: "Tolerancia a fallas",
                                                    link: "mod-osi-red-confiables-arqui-fallos"
                                                },
                                                {
                                                    text: "Escalabilidad",
                                                    link: "mod-osi-red-confiables-arqui-escala"
                                                },
                                                {
                                                    text: "Calidad de servicio (QoS)",
                                                    link: "mod-osi-red-confiables-arqui-calidad"
                                                },
                                                {
                                                    text: "Seguridad",
                                                    link: "mod-osi-red-confiables-arqui-seguridad"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    text: "Tendencias de Redes",
                                    link: "mod-osi-red-tedencias",
                                    list: [
                                        {
                                            text: "IIoT (IoT Industrial)",
                                            link: "mod-osi-red-tedencias-iot"
                                        },
                                        {
                                            text: "Bring Your Own Device",
                                            link: "mod-osi-red-tedencias-byod"
                                        },
                                        {
                                            text: "Colaboración en línea",
                                            link: "mod-osi-red-tedencias-colab"
                                        },
                                        {
                                            text: "Computación en la nube",
                                            link: "mod-osi-red-tedencias-comp"
                                        },
                                        {
                                            text: "Modelos de Computación en la nube",
                                            link: "mod-osi-red-tedencias-modelos-comp-nube",
                                            list: [
                                                {
                                                    text: "Nubes públicas",
                                                    link: "mod-osi-red-tedencias-modelos-comp-nube-pub"
                                                },
                                                {
                                                    text: "Nubes privadas",
                                                    link: "mod-osi-red-tedencias-modelos-comp-nube-pri"
                                                },
                                                {
                                                    text: "Nubes híbridas",
                                                    link: "mod-osi-red-tedencias-modelos-comp-nube-hib"
                                                },
                                                {
                                                    text: "Nubes comunitarias",
                                                    link: "mod-osi-red-tedencias-modelos-comp-nube-com"
                                                }
                                            ]
                                        },
                                        {
                                            text: "Tecnología de hogar Inteligente",
                                            link: "mod-osi-red-tedencias-hogar-inteli"
                                        },
                                        {
                                            text: "Power Line Communication (PLC)",
                                            link: "mod-osi-red-tedencias-plc"
                                        },
                                        {
                                            text: "Banda Ancha Inalámbrica",
                                            link: "mod-osi-red-tedencias-band-ancha-inalam"
                                        }
                                    ]
                                },
                                {
                                    text: "Seguridad de la red",
                                    link: "mod-osi-red-seguridad-red",
                                    list: [
                                        {
                                            text: "Amenazas externas",
                                            link: "mod-osi-red-seguridad-red-amen-ext"
                                        },
                                        {
                                            text: "Amenazas internas",
                                            link: "mod-osi-red-seguridad-red-amen-int"
                                        },
                                        {
                                            text: "Soluciones",
                                            link: "mod-osi-red-seguridad-red-solucion"
                                        },
                                        {
                                            text: "Conceptos",
                                            link: "mod-osi-red-seguridad-red-conceptos",
                                            list: [
                                                {
                                                    text: "Botnet",
                                                    link: "mod-osi-red-seguridad-red-conceptos-botnet"
                                                },
                                                {
                                                    text: "Dos y DDos",
                                                    link: "mod-osi-red-seguridad-red-conceptos-ddos"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            text: "Servicios",
                            link: "con-servicios",
                            list: [
                                {
                                    text: "Medios de transmisión",
                                    link: "con-medios-transmision"
                                },
                                {
                                    text: "Basados en cables",
                                    link: "con-medios-transmision-cables"
                                },
                                {
                                    text: "Inalámbricos",
                                    link: "con-medios-transmision-inalambricos"
                                }
                            ]
                        },
                        {
                            text: "Protocolos",
                            link: "con-protocolos"
                        }
                    ]
                }}
                />
                <ChocoListItem marginLft={2} content={{
                    text: "Modelos y protocolos",
                    link: "mods-prots",
                    list: [
                        {
                            text: "Introducción TCP/IP Networking",
                            link: "mods-prots-intro",
                            list: [
                                {
                                    text: "Modelo de red",
                                    link: "mods-prots-intro-mod-red"
                                },
                                {
                                    text: "Modelo Osi",
                                    link: "mods-prots-intro-mod-osi"
                                },
                                {
                                    text: "TCP/IP",
                                    link: "mods-prots-intro-mod-tcp"
                                },
                                {
                                    text: "Aspectos básicos",
                                    link: "mods-prots-intro-mod-basics"
                                },
                                {
                                    text: "Protocolos",
                                    link: "mods-prots-intro-mod-prots"
                                },
                                {
                                    text: "Codificación del mensaje",
                                    link: "mods-prots-intro-mod-cod-message"
                                },
                                {
                                    text: "Formato y encapsulamiento del mensaje",
                                    link: "mods-prots-intro-mod-formato-encapsulamiento"
                                },
                                {
                                    text: "Tamaño del mensaje",
                                    link: "mods-prots-intro-mod-tamaño-mensaje"
                                },
                                {
                                    text: "Temporización del mensaje",
                                    link: "mods-prots-intro-mod-temporizacion-mensaje",
                                    list: [
                                        {
                                            text: "Control de flujo",
                                            link: "mods-prots-intro-mod-temporizacion-mensaje-flujo"
                                        },
                                        {
                                            text: "Tiempo de espera de respuesta",
                                            link: "mods-prots-intro-mod-temporizacion-rpta"
                                        },
                                        {
                                            text: "El método de acceso",
                                            link: "mods-prots-intro-mod-temporizacion-access"
                                        },
                                        {
                                            text: "Opciones de entrega de mensaje",
                                            link: "mods-prots-intro-mod-tamaño-mensaje"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            text: "Protocolos",
                            link: "mods-prots-prots",
                            list: [
                                {
                                    text: "Niveles de implementación",
                                    link: "mods-prots-prots-level"
                                },
                                {
                                    text: "Características",
                                    link: "mods-prots-prots-feature"
                                },
                                {
                                    text: "Tipos",
                                    link: "mods-prots-prots-tipos"
                                },
                                {
                                    text: "Función",
                                    link: "mods-prots-funct",
                                    list: [
                                        {
                                            text: "Direccionamiento",
                                            link: "mods-prots-funct-dir"
                                        },
                                        {
                                            text: "Confianza",
                                            link: "mods-prots-funct-conf"
                                        },
                                        {
                                            text: "Control de flujo",
                                            link: "mods-prots-funct-flujo"
                                        },
                                        {
                                            text: "Secuenciación",
                                            link: "mods-prots-funct-sec"
                                        },
                                        {
                                            text: "Detección de errores",
                                            link: "mods-prots-funct-errors"
                                        },
                                        {
                                            text: "Interfaz de aplicación",
                                            link: "mods-prots-funct-interfaz"
                                        }
                                    ]
                                },
                                {
                                    text: "Interacción de protocolos",
                                    link: "mods-prots-interact"
                                },
                                {
                                    text: "Conjunto de protocolos de red",
                                    link: "mods-prots-conjuntos",
                                    list: [
                                        {
                                            text: "Suite de protocolos",
                                            link: "mods-prots-conjuntos-suite"
                                        },
                                        {
                                            text: "Capas",
                                            link: "mods-prots-conjuntos-capas"
                                        }
                                    ]
                                },
                                {
                                    text: "Suite de protocolo TCP/IP",
                                    link: "mods-prots-suite-tcp"
                                }
                            ]
                        },
                        {
                            text: "Organizaciones y estándares",
                            link: "mods-prots-orgs-estands"
                        },
                        {
                            text: "Modelos de referencia",
                            link: "mods-prots-mods-refer",
                            list: [
                                {
                                    text: "Beneficios del modelo de capas",
                                    link: "mods-prots-mods-refer-benef"
                                }
                            ]
                        },
                        {
                            text: "Modelo de referencia OSI",
                            link: "mods-prots-mods-refer-osi",
                            list: [
                                {
                                    text: "Física",
                                    link: "mods-prots-mods-refer-osi-fisica"
                                },
                                {
                                    text: "Enlace de datos",
                                    link: "mods-prots-mods-refer-osi-enlace"
                                },
                                {
                                    text: "Red",
                                    link: "mods-prots-mods-refer-osi-red"
                                },
                                {
                                    text: "Transporte",
                                    link: "mods-prots-mods-refer-osi-transport"
                                },
                                {
                                    text: "Sesión",
                                    link: "mods-prots-mods-refer-osi-sesion"
                                },
                                {
                                    text: "Presentación",
                                    link: "mods-prots-mods-refer-osi-present"
                                },
                                {
                                    text: "Aplicación",
                                    link: "mods-prots-mods-refer-osi-app"
                                }
                            ]
                        },
                        {
                            text: "Modelo de referencia TCP/IP",
                            link: "mods-prots-mods-refer-tcp",
                            list: [
                                {
                                    text: "Acceso a la red",
                                    link: "mods-prots-mods-refer-tcp-red"
                                },
                                {
                                    text: "Internet",
                                    link: "mods-prots-mods-refer-tcp-internet"
                                },
                                {
                                    text: "Transporte",
                                    link: "mods-prots-mods-refer-tcp-transport"
                                },
                                {
                                    text: "Aplicación",
                                    link: "mods-prots-mods-refer-tcp-app"
                                }
                            ]
                        },
                        {
                            text: "Segmentación del mensaje",
                            link: "mods-prots-segment-mensaje"
                        },
                        {
                            text: "Secuenciación",
                            link: "mods-prots-secuenciacion"
                        },
                        {
                            text: "Unidades de datos del protocolo PDU",
                            link: "mods-prots-pdu"
                        },
                        {
                            text: "Acceso de datos",
                            link: "mods-prots-access",
                            list: [
                                {
                                    text: "Direcciones de red",
                                    link: "mods-prots-access-dir-red"
                                }
                            ]
                        }
                    ]
                }}
                />
                <ChocoListItem marginLft={2} content={{
                    text: "Direccionamiento IP y redes LAN",
                    link: "dir-ip-lan",
                    list: [
                        {
                            text: "Segmentación de la red",
                            link: "dir-ip-lan-segment",
                            list: [
                                {
                                    text: "Dominios de broadcast y segmentación",
                                    link: "dir-ip-lan-segment-broadcast"
                                },
                                {
                                    text: "Problemas de Dominios de broadcast",
                                    link: "dir-ip-lan-segment-dom-broadcast"
                                }
                            ]
                        }
                    ]
                }}
                />
                <ChocoListItem marginLft={2} content={{
                    text: "Enrutamiento, Tecnologías WAN y Seguridad",
                    link: "enrt-tecwan-sec",
                    list: [
                        {
                            text: "Sobre los routers",
                            link: "enrt-tecwan-sec-routers"
                        },
                        {
                            text: "Tabla de enrutamiento",
                            link: "enrt-tecwan-sec-tabla-enru"
                        },
                        {
                            text: "Protocolos de Enrutamiento",
                            link: "enrt-tecwan-sec-protos",
                            list: [
                                {
                                    text: "Enrutamiento estático",
                                    link: "enrt-tecwan-sec-protos-estatic"
                                },
                                {
                                    text: "Enrutamiento dinámico",
                                    link: "enrt-tecwan-sec-protos-dinamic"
                                }
                            ]
                        },
                        {
                            text: "Direcciones IP",
                            link: "enrt-tecwan-sec-dir-ip",
                            list: [
                                {
                                    text: "Direcciones públicas",
                                    link: "enrt-tecwan-sec-dir-ip-pub"
                                },
                                {
                                    text: "Direcciones privadas",
                                    link: "enrt-tecwan-sec-dir-ip-priv"
                                }
                            ]
                        },
                        {
                            text: "Determinación de ruta",
                            link: "enrt-tecwan-sec-det-ruta",
                            list: [
                                {
                                    text: "Funciones de router",
                                    link: "enrt-tecwan-sec-det-ruta-funcs"
                                },
                                {
                                    text: "Mejor ruta es igual a la coincidencia más larga",
                                    link: "enrt-tecwan-sec-det-ruta-mejor-ruta"
                                },
                                {
                                    text: "Generar tabla de enrutamiento",
                                    link: "enrt-tecwan-sec-det-ruta-gen-tabla",
                                    list: [
                                        {
                                            text: "Redes conectadas directamente",
                                            link: "enrt-tecwan-sec-det-ruta-gen-tabla-conec-dir"
                                        },
                                        {
                                            text: "Redes remotas",
                                            link: "enrt-tecwan-sec-det-ruta-gen-tabla-remote"
                                        },
                                        {
                                            text: "Ruta predeterminada",
                                            link: "enrt-tecwan-sec-det-ruta-gen-tabla-predet"
                                        }
                                    ]
                                }
                            ]
                        },
                        {

                            text: "Tabla de enrutamiento IP",
                            link: "enrt-tecwan-sec-det-ruta-tabla-enru",
                            list: [
                                {
                                    text: "Origen de rutas",
                                    link: "enrt-tecwan-sec-det-ruta-tabla-enru-origen"
                                },
                                {
                                    text: "Principios de la tabla de enrutamiento",
                                    link: "enrt-tecwan-sec-det-ruta-tabla-enru-princip"
                                },
                                {
                                    text: "Entradas de tabla de enrutamiento",
                                    link: "enrt-tecwan-sec-det-ruta-tabla-enru-entrad"
                                }
                            ]
                        }
                    ]
                }}
                />
                <ChocoListItem marginLft={2} content={{
                    text: "Conceptos de WAN ",
                    link: "tec-wan",
                    list: [
                        {
                            text: "¿Por qué una WAN?",
                            link: "tec-wan-porque"
                        },
                        {
                            text: "¿Son necesarias las WAN?",
                            link: "tec-wan-necesarias"
                        }
                    ]
                }}
                />
                <ChocoListItem marginLft={2} content={{
                    text: "Listas de Acceso (ACL)",
                    link: "access-list",
                    list: [
                        {
                            text: "¿Por qué una WAN?",
                            link: "tec-wan-porque"
                        },
                        {
                            text: "¿Son necesarias las WAN?",
                            link: "tec-wan-necesarias"
                        }
                    ]
                }}
                />
                <ChocoListItem marginLft={2} content={{
                    text: "Algunas preguntas",
                    link: "preguntas"
                }}
                />
                <ChocoListItem marginLft={2} content={{
                    text: "Diccionario",
                    link: "dict",
                    list: [
                        {
                            text: "Dispositivos",
                            link: "dict-disps",
                            list: [
                                {
                                    text: "Sistemas Intermedios",
                                    link: "dict-disps-inter",
                                    list: [
                                        {
                                            text: "Router",
                                            link: "dict-disps-inter-router"
                                        },
                                        {
                                            text: "Switch",
                                            link: "dict-disps-inter-switch"
                                        },
                                        {
                                            text: "AP (Access Point)",
                                            link: "dict-disps-inter-ap"
                                        },
                                        {
                                            text: "Firewall",
                                            link: "dict-disps-inter-firewall"
                                        }
                                    ]
                                },
                                {
                                    text: "Sistemas Finales",
                                    link: "dict-disps-finals",
                                    list: [
                                        {
                                            text: "Servidores",
                                            link: "dict-disps-finals-servers"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            text: "Unidades",
                            link: "dict-unid",
                            list: [
                                {
                                    text: "bps",
                                    link: "dict-unid-bps"
                                }
                            ]
                        },
                        {
                            text: "Protocolos",
                            link: "dict-proto",
                            list: [
                                {
                                    text: "IP",
                                    link: "dict-proto-ip"
                                },
                                {
                                    text: "TCP",
                                    link: "dict-proto-tcp"
                                },
                                {
                                    text: "UDP",
                                    link: "dict-proto-udp"
                                },
                                {
                                    text: "Spanning tree (Spanning Tree Protocol)",
                                    link: "dict-proto-spanning-tree"
                                },
                                {
                                    text: "FTP / SFTP",
                                    link: "dict-proto-ftp"
                                },
                                {
                                    text: "DNS",
                                    link: "dict-proto-dns"
                                },
                                {
                                    text: "NTP",
                                    link: "dict-proto-ntp"
                                }
                            ]
                        },
                        {
                            text: "Modelos",
                            link: "dict-model",
                            list: [
                                {
                                    text: "OSI",
                                    link: "dict-model-osi"
                                },
                                {
                                    text: "TCP/IP",
                                    link: "dict-model-tcp"
                                }
                            ]
                        },
                        {
                            text: "Puertos",
                            link: "dict-port",
                            list: [
                                {
                                    text: "Puertos de acceso",
                                    link: "dict-port-access"
                                },
                                {
                                    text: "Puertos troncales",
                                    link: "dict-port-tronc"
                                }
                            ]
                        },
                        {
                            text: "Otros conceptos",
                            link: "dict-otros",
                            list: [
                                {
                                    text: "VLAN",
                                    link: "dict-otros-vlan"
                                },
                                {
                                    text: "Internetwork",
                                    link: "dict-otros-internetwork"
                                },
                                {
                                    text: "ISP",
                                    link: "dict-otros-isp"
                                },
                                {
                                    text: "Ethernet",
                                    link: "dict-otros-ethernet"
                                },
                                {
                                    text: "PDU",
                                    link: "dict-otros-pdu"
                                },
                                {
                                    text: "VLSM",
                                    link: "dict-otros-vlsm"
                                },
                                {
                                    text: "DSL",
                                    link: "dict-otros-dsl"
                                }
                            ]
                        }
                    ]
                }}
                />
            </List>
        </div>
    );
}

export default Index;