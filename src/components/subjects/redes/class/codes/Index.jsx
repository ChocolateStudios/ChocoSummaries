import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';


function ListItem(props) {
    const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);

    if (content.link)
        var element = document.getElementById(content.link);
        if (element) {
            // console.log(element.getBoundingClientRect().top)
            // window.scrollTo(0, element.getBoundingClientRect().top)
            document.getElementById(content.link).scrollIntoView();
        }
  };

  let content = props.content;  

    return (
        <React.Fragment>
            <ListItemButton onClick={handleClick} sx={{ borderRadius: 1, pl: content.marginLeft }}>
                <ListItemText primary={content.text} />
                {(content.list) ? (open ? <ExpandLess /> : <ExpandMore />) : ('')}
            </ListItemButton>
            {(content.list) ? (
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {(content.list.map(function (newContent, i) {
                            return (
                                <ListItem content={newContent} key={i}></ListItem>
                            );
                        }))}
                    </List>
                </Collapse>
            ) : ('')}
        </React.Fragment>
    );
}

function Index() {

    return (
        <div>
            <h1 id="id0">Índice</h1>

            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <ListItem content={{ 
                    text: "Conociendo algunos conceptos",
                    marginLeft: 2,
                    list: [
                        {
                            text: "Conociendo algunos conceptos",
                            marginLeft: 6,
                            link: "con-conceptos"
                        },
                        {
                            text: "Dispositivos",
                            marginLeft: 6,
                            list: [
                                {
                                    text: "Dispositivos",
                                    marginLeft: 10,
                                    link: "con-conceptos"
                                },
                                {
                                    text: "Sistemas intermedios",
                                    marginLeft: 10,
                                    link: "con-dispositivos-intermedios"
                                },
                                {
                                    text: "Dispositivos finales",
                                    marginLeft: 10,
                                    link: "con-dispositivos-finales"
                                }
                            ]
                        },
                        {
                            text: "Servicios",
                            marginLeft: 6,
                            list: [
                                {
                                    text: "Servicios",
                                    marginLeft: 10,
                                    link: "con-servicios"
                                },
                                {
                                    text: "Medios de transmisión",
                                    marginLeft: 10,
                                    link: "con-medios-transmision"
                                },
                                {
                                    text: "Basados en cables",
                                    marginLeft: 10,
                                    link: "con-medios-transmision-cables"
                                },
                                {
                                    text: "Inalámbricos",
                                    marginLeft: 10,
                                    link: "con-medios-transmision-inalambricos"
                                }
                            ]
                        },
                        {
                            text: "Protocolos",
                            marginLeft: 6,
                            link: "con-protocolos"
                        }
                    ] }}
                />

                <ListItem content={{ 
                    text: "Conceptos básicos y modelo OSI",
                    marginLeft: 2,
                    list: [
                        {
                            text: "Conceptos básicos y modelo OSI",
                            marginLeft: 6,
                            link: "mod-osi"
                        },
                        {
                            text: "Servicios y aplicaciones",
                            marginLeft: 6,
                            list: [
                                {
                                    text: "Servicios y aplicaciones",
                                    marginLeft: 10,
                                    link: "mod-osi-serv-apps"
                                },
                                {
                                    text: "Componentes de las redes",
                                    marginLeft: 10,
                                    list: [
                                        {
                                            text: "Componentes de las redes",
                                            marginLeft: 14,
                                            link: "mod-osi-componente-de-redes"
                                        },
                                        {
                                            text: "Servidores",
                                            marginLeft: 14,
                                            link: "mod-osi-componente-de-redes-servers"
                                        },
                                        {
                                            text: "Clientes",
                                            marginLeft: 14,
                                            link: "mod-osi-componente-de-redes-clients"
                                        },
                                        {
                                            text: "Protocolos",
                                            marginLeft: 14,
                                            link: "#mod-osi-componente-de-redes-protocols"
                                        }
                                    ]
                                },
                                {
                                    text: "Punto a punto",
                                    marginLeft: 10,
                                    link: "mod-osi-punto-punto"
                                },
                                {
                                    text: "Dispositivos finales",
                                    marginLeft: 10,
                                    link: "mod-osi-disp-finales"
                                },
                                {
                                    text: "Dispositivos de red intermedios",
                                    marginLeft: 10,
                                    link: "mod-osi-disp-intermed"
                                },
                                {
                                    text: "Medios de red",
                                    marginLeft: 10,
                                    link: "mod-osi-medios-de-red"
                                },
                                {
                                    text: "Tipos de redes",
                                    marginLeft: 10,
                                    list: [
                                        {
                                            text: "Tipos de redes",
                                            marginLeft: 14,
                                            link: "mod-osi-tipos-redes"
                                        },
                                        {
                                            text: "LAN",
                                            marginLeft: 14,
                                            link: "mod-osi-tipos-redes-lan"
                                        },
                                        {
                                            text: "WAN",
                                            marginLeft: 14,
                                            link: "mod-osi-tipos-redes-wan"
                                        }
                                    ]
                                },
                                {
                                    text: "Intranet y Extranet",
                                    marginLeft: 10,
                                    list: [
                                        {
                                            text: "Intranet y Extranet",
                                            marginLeft: 14,
                                            link: "mod-osi-intra-extra"
                                        },
                                        {
                                            text: "Intranet",
                                            marginLeft: 14,
                                            link: "mod-osi-intra-extra-intra"
                                        },
                                        {
                                            text: "Extranet",
                                            marginLeft: 14,
                                            link: "mod-osi-intra-extra-extra"
                                        }
                                    ]
                                },
                                {
                                    text: "Conexiones de internet",
                                    marginLeft: 10,
                                    list: [
                                        {
                                            text: "Conexiones de internet",
                                            marginLeft: 14,
                                            link: "mod-osi-conexiones-internet"
                                        },
                                        {
                                            text: "Cable",
                                            marginLeft: 14,
                                            link: "mod-osi-conexiones-internet-cable"
                                        },
                                        {
                                            text: "DSL",
                                            marginLeft: 14,
                                            link: "mod-osi-conexiones-internet-dls"
                                        },
                                        {
                                            text: "Red celular",
                                            marginLeft: 14,
                                            link: "mod-osi-conexiones-internet-cel"
                                        },
                                        {
                                            text: "Satélite",
                                            marginLeft: 14,
                                            link: "mod-osi-conexiones-internet-satelite"
                                        },
                                        {
                                            text: "Teléfono de marcación",
                                            marginLeft: 14,
                                            link: "mod-osi-conexiones-internet-marca"
                                        }
                                    ]
                                },
                                {
                                    text: "Red convergente",
                                    marginLeft: 10,
                                    link: "mod-osi-red-convergente"
                                },
                                {
                                    text: "Redes Confiables",
                                    marginLeft: 10,
                                    list: [
                                        {
                                            text: "Redes Confiables",
                                            marginLeft: 14,
                                            link: "mod-osi-red-confiables"
                                        },
                                        {
                                            text: "Arquitectura de Red",
                                            marginLeft: 14,
                                            list: [
                                                {
                                                    text: "Arquitectura de Red",
                                                    marginLeft: 18,
                                                    link: "mod-osi-red-confiables-arqui"
                                                },
                                                {
                                                    text: "Tolerancia a fallas",
                                                    marginLeft: 18,
                                                    link: "mod-osi-red-confiables-arqui-fallos"
                                                },
                                                {
                                                    text: "Escalabilidad",
                                                    marginLeft: 18,
                                                    link: "mod-osi-red-confiables-arqui-escala"
                                                },
                                                {
                                                    text: "Calidad de servicio (QoS)",
                                                    marginLeft: 18,
                                                    link: "mod-osi-red-confiables-arqui-calidad"
                                                },
                                                {
                                                    text: "Seguridad",
                                                    marginLeft: 18,
                                                    link: "mod-osi-red-confiables-arqui-seguridad"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    text: "Tendencias de Redes",
                                    marginLeft: 10,
                                    list: [
                                        {
                                            text: "Tendencias de Redes",
                                            marginLeft: 14,
                                            link: "mod-osi-red-tedencias"
                                        },
                                        {
                                            text: "IIoT (IoT Industrial)",
                                            marginLeft: 14,
                                            link: "mod-osi-red-tedencias-iot"
                                        },
                                        {
                                            text: "Bring Your Own Device",
                                            marginLeft: 14,
                                            link: "mod-osi-red-tedencias-byod"
                                        },
                                        {
                                            text: "Colaboración en línea",
                                            marginLeft: 14,
                                            link: "mod-osi-red-tedencias-colab"
                                        },
                                        {
                                            text: "Computación en la nube",
                                            marginLeft: 14,
                                            link: "mod-osi-red-tedencias-comp"
                                        },
                                        {
                                            text: "Modelos de Computación en la nube",
                                            marginLeft: 14,
                                            list: [
                                                {
                                                    text: "Modelos de Computación en la nube",
                                                    marginLeft: 18,
                                                    link: "mod-osi-red-tedencias-modelos-comp-nube"
                                                },
                                                {
                                                    text: "Nubes públicas",
                                                    marginLeft: 18,
                                                    link: "mod-osi-red-tedencias-modelos-comp-nube-pub"
                                                },
                                                {
                                                    text: "Nubes privadas",
                                                    marginLeft: 18,
                                                    link: "mod-osi-red-tedencias-modelos-comp-nube-pri"
                                                },
                                                {
                                                    text: "Nubes híbridas",
                                                    marginLeft: 18,
                                                    link: "mod-osi-red-tedencias-modelos-comp-nube-hib"
                                                },
                                                {
                                                    text: "Nubes comunitarias",
                                                    marginLeft: 18,
                                                    link: "mod-osi-red-tedencias-modelos-comp-nube-com"
                                                }
                                            ]
                                        },
                                        {
                                            text: "Tecnología de hogar Inteligente",
                                            marginLeft: 14,
                                            link: "mod-osi-red-tedencias-hogar-inteli"
                                        },
                                        {
                                            text: "Power Line Communication (PLC)",
                                            marginLeft: 14,
                                            link: "mod-osi-red-tedencias-plc"
                                        },
                                        {
                                            text: "Banda Ancha Inalámbrica",
                                            marginLeft: 14,
                                            link: "mod-osi-red-tedencias-band-ancha-inalam"
                                        }
                                    ]
                                },
                                {
                                    text: "Seguridad de la red",
                                    marginLeft: 10,
                                    list: [
                                        {
                                            text: "Seguridad de la red",
                                            marginLeft: 14,
                                            link: "mod-osi-red-seguridad-red"
                                        },
                                        {
                                            text: "Amenazas externas",
                                            marginLeft: 14,
                                            link: "mod-osi-red-seguridad-red-amen-ext"
                                        },
                                        {
                                            text: "Amenazas internas",
                                            marginLeft: 14,
                                            link: "mod-osi-red-seguridad-red-amen-int"
                                        },
                                        {
                                            text: "Soluciones",
                                            marginLeft: 14,
                                            link: "mod-osi-red-seguridad-red-solucion"
                                        },
                                        {
                                            text: "Conceptos",
                                            marginLeft: 14,
                                            list: [
                                                {
                                                    text: "Conceptos",
                                                    marginLeft: 18,
                                                    link: "mod-osi-red-seguridad-red-conceptos"
                                                },
                                                {
                                                    text: "Botnet",
                                                    marginLeft: 18,
                                                    link: "mod-osi-red-seguridad-red-conceptos-botnet"
                                                },
                                                {
                                                    text: "Dos y DDos",
                                                    marginLeft: 18,
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
                            marginLeft: 6,
                            list: [
                                {
                                    text: "Servicios",
                                    marginLeft: 10,
                                    link: "con-servicios"
                                },
                                {
                                    text: "Medios de transmisión",
                                    marginLeft: 10,
                                    link: "con-medios-transmision"
                                },
                                {
                                    text: "Basados en cables",
                                    marginLeft: 10,
                                    link: "con-medios-transmision-cables"
                                },
                                {
                                    text: "Inalámbricos",
                                    marginLeft: 10,
                                    link: "con-medios-transmision-inalambricos"
                                }
                            ]
                        },
                        {
                            text: "Protocolos",
                            marginLeft: 6,
                            link: "con-protocolos"
                        }
                    ] }}
                />
                <ListItem content={{ 
                    text: "Modelos y protocolos",
                    marginLeft: 2,
                    list: [
                        {
                            text: "Modelos y protocolos",
                            marginLeft: 6,
                            link: "mods-prots"
                        },
                        {
                            text: "Introducción TCP/IP Networking",
                            marginLeft: 6,
                            list: [
                                {
                                    text: "Introducción TCP/IP Networking",
                                    marginLeft: 10,
                                    link: "mods-prots-intro"
                                },
                                {
                                    text: "Modelo de red",
                                    marginLeft: 10,
                                    link: "mods-prots-intro-mod-red"
                                },
                                {
                                    text: "Modelo Osi",
                                    marginLeft: 10,
                                    link: "mods-prots-intro-mod-osi"
                                },
                                {
                                    text: "TCP/IP",
                                    marginLeft: 10,
                                    link: "mods-prots-intro-mod-tcp"
                                },
                                {
                                    text: "Aspectos básicos",
                                    marginLeft: 10,
                                    link: "mods-prots-intro-mod-basics"
                                },
                                {
                                    text: "Protocolos",
                                    marginLeft: 10,
                                    link: "mods-prots-intro-mod-prots"
                                },
                                {
                                    text: "Codificación del mensaje",
                                    marginLeft: 10,
                                    link: "mods-prots-intro-mod-cod-message"
                                },
                                {
                                    text: "Formato y encapsulamiento del mensaje",
                                    marginLeft: 10,
                                    link: "mods-prots-intro-mod-formato-encapsulamiento"
                                },
                                {
                                    text: "Tamaño del mensaje",
                                    marginLeft: 10,
                                    link: "mods-prots-intro-mod-tamaño-mensaje"
                                },
                                {
                                    text: "Temporización del mensaje",
                                    marginLeft: 10,
                                    list: [
                                        {
                                            text: "Temporización del mensaje",
                                            marginLeft: 14,
                                            link: "mods-prots-intro-mod-temporizacion-mensaje"
                                        },
                                        {
                                            text: "Control de flujo",
                                            marginLeft: 14,
                                            link: "mods-prots-intro-mod-temporizacion-mensaje-flujo"
                                        },
                                        {
                                            text: "Tiempo de espera de respuesta",
                                            marginLeft: 14,
                                            link: "mods-prots-intro-mod-temporizacion-rpta"
                                        },
                                        {
                                            text: "El método de acceso",
                                            marginLeft: 14,
                                            link: "mods-prots-intro-mod-temporizacion-access"
                                        },
                                        {
                                            text: "Opciones de entrega de mensaje",
                                            marginLeft: 14,
                                            link: "mods-prots-intro-mod-tamaño-mensaje"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            text: "Protocolos",
                            marginLeft: 6,
                            list: [
                                {
                                    text: "Protocolos",
                                    marginLeft: 10,
                                    link: "mods-prots-prots"
                                },
                                {
                                    text: "Niveles de implementación",
                                    marginLeft: 10,
                                    link: "mods-prots-prots-level"
                                },
                                {
                                    text: "Características",
                                    marginLeft: 10,
                                    link: "mods-prots-prots-feature"
                                },
                                {
                                    text: "Tipos",
                                    marginLeft: 10,
                                    link: "mods-prots-prots-tipos"
                                },
                                {
                                    text: "Función",
                                    marginLeft: 10,
                                    list: [
                                        {
                                            text: "Función",
                                            marginLeft: 14,
                                            link: "mods-prots-funct"
                                        },
                                        {
                                            text: "Direccionamiento",
                                            marginLeft: 14,
                                            link: "mods-prots-funct-dir"
                                        },
                                        {
                                            text: "Confianza",
                                            marginLeft: 14,
                                            link: "mods-prots-funct-conf"
                                        },
                                        {
                                            text: "Control de flujo",
                                            marginLeft: 14,
                                            link: "mods-prots-funct-flujo"
                                        },
                                        {
                                            text: "Secuenciación",
                                            marginLeft: 14,
                                            link: "mods-prots-funct-sec"
                                        },
                                        {
                                            text: "Detección de errores",
                                            marginLeft: 14,
                                            link: "mods-prots-funct-errors"
                                        },
                                        {
                                            text: "Interfaz de aplicación",
                                            marginLeft: 14,
                                            link: "mods-prots-funct-interfaz"
                                        }
                                    ]
                                },
                                {
                                    text: "Interacción de protocolos",
                                    marginLeft: 10,
                                    link: "mods-prots-interact"
                                },
                                {
                                    text: "Conjunto de protocolos de red",
                                    marginLeft: 10,
                                    list: [
                                        {
                                            text: "Conjunto de protocolos de red",
                                            marginLeft: 14,
                                            link: "mods-prots-conjuntos"
                                        },
                                        {
                                            text: "Suite de protocolos",
                                            marginLeft: 14,
                                            link: "mods-prots-conjuntos-suite"
                                        },
                                        {
                                            text: "Capas",
                                            marginLeft: 14,
                                            link: "mods-prots-conjuntos-capas"
                                        }
                                    ]
                                },
                                {
                                    text: "Suite de protocolo TCP/IP",
                                    marginLeft: 10,
                                    link: "mods-prots-suite-tcp"
                                }
                            ]
                        },
                        {
                            text: "Organizaciones y estándares",
                            marginLeft: 6,
                            link: "mods-prots-orgs-estands"
                        },
                        {
                            text: "Modelos de referencia",
                            marginLeft: 6,
                            list: [
                                {
                                    text: "Modelos de referencia",
                                    marginLeft: 10,
                                    link: "mods-prots-mods-refer"
                                },
                                {
                                    text: "Beneficios del modelo de capas",
                                    marginLeft: 10,
                                    link: "mods-prots-mods-refer-benef"
                                }
                            ]
                        },
                        {
                            text: "Modelo de referencia OSI",
                            marginLeft: 6,
                            list: [
                                {
                                    text: "Modelo de referencia OSI",
                                    marginLeft: 10,
                                    link: "mods-prots-mods-refer-osi"
                                },
                                {
                                    text: "Física",
                                    marginLeft: 10,
                                    link: "mods-prots-mods-refer-osi-fisica"
                                },
                                {
                                    text: "Enlace de datos",
                                    marginLeft: 10,
                                    link: "mods-prots-mods-refer-osi-enlace"
                                },
                                {
                                    text: "Red",
                                    marginLeft: 10,
                                    link: "mods-prots-mods-refer-osi-red"
                                },
                                {
                                    text: "Transporte",
                                    marginLeft: 10,
                                    link: "mods-prots-mods-refer-osi-transport"
                                },
                                {
                                    text: "Sesión",
                                    marginLeft: 10,
                                    link: "mods-prots-mods-refer-osi-sesion"
                                },
                                {
                                    text: "Presentación",
                                    marginLeft: 10,
                                    link: "mods-prots-mods-refer-osi-present"
                                },
                                {
                                    text: "Aplicación",
                                    marginLeft: 10,
                                    link: "mods-prots-mods-refer-osi-app"
                                }
                            ]
                        },
                        {
                            text: "Modelo de referencia TCP/IP",
                            marginLeft: 6,
                            list: [
                                {
                                    text: "Modelo de referencia TCP/IP",
                                    marginLeft: 10,
                                    link: "mods-prots-mods-refer-tcp"
                                },
                                {
                                    text: "Acceso a la red",
                                    marginLeft: 10,
                                    link: "mods-prots-mods-refer-tcp-red"
                                },
                                {
                                    text: "Internet",
                                    marginLeft: 10,
                                    link: "mods-prots-mods-refer-tcp-internet"
                                },
                                {
                                    text: "Transporte",
                                    marginLeft: 10,
                                    link: "mods-prots-mods-refer-tcp-transport"
                                },
                                {
                                    text: "Aplicación",
                                    marginLeft: 10,
                                    link: "mods-prots-mods-refer-tcp-app"
                                }
                            ]
                        },
                        {
                            text: "Segmentación del mensaje",
                            marginLeft: 6,
                            link: "mods-prots-segment-mensaje"
                        },
                        {
                            text: "Secuenciación",
                            marginLeft: 6,
                            link: "mods-prots-secuenciacion"
                        },
                        {
                            text: "Unidades de datos del protocolo PDU",
                            marginLeft: 6,
                            link: "mods-prots-pdu"
                        },
                        {
                            text: "Acceso de datos",
                            marginLeft: 6,
                            list: [
                                {
                                    text: "Acceso de datos",
                                    marginLeft: 6,
                                    link: "mods-prots-access"
                                },
                                {
                                    text: "Direcciones de red",
                                    marginLeft: 6,
                                    link: "mods-prots-access-dir-red"
                                }
                            ]
                        }
                    ] }}
                />
                <ListItem content={{ 
                    text: "Direccionamiento IP y redes LAN",
                    marginLeft: 2,
                    list: [
                        {
                            text: "Direccionamiento IP y redes LAN",
                            marginLeft: 6,
                            link: "dir-ip-lan"
                        },
                        {
                            text: "Segmentación de la red",
                            marginLeft: 6,
                            list: [
                                {
                                    text: "Segmentación de la red",
                                    marginLeft: 10,
                                    link: "dir-ip-lan-segment"
                                },
                                {
                                    text: "Dominios de broadcast y segmentación",
                                    marginLeft: 10,
                                    link: "dir-ip-lan-segment-broadcast"
                                },
                                {
                                    text: "Problemas de Dominios de broadcast",
                                    marginLeft: 10,
                                    link: "dir-ip-lan-segment-dom-broadcast"
                                }
                            ]
                        }
                    ] }}
                />
                <ListItem content={{ 
                    text: "Algunas preguntas",
                    marginLeft: 2,
                    list: [
                        {
                            text: "Algunas preguntas",
                            marginLeft: 6,
                            link: "preguntas"
                        },
                        {
                            text: "Semana 3",
                            marginLeft: 6,
                            link: "preguntas-sem3"
                        },
                        {
                            text: "Tipo PC1",
                            marginLeft: 6,
                            link: "preguntas-pc1"
                        }
                    ] }}
                />
                <ListItem content={{ 
                    text: "Diccionario",
                    marginLeft: 2,
                    list: [
                        {
                            text: "Diccionario",
                            marginLeft: 6,
                            link: "dict"
                        },
                        {
                            text: "Dispositivos",
                            marginLeft: 6,
                            list: [
                                {
                                    text: "Dispositivos",
                                    marginLeft: 10,
                                    link: "dict-disps"
                                },
                                {
                                    text: "Sistemas Intermedios",
                                    marginLeft: 10,
                                    list: [
                                        {
                                            text: "Sistemas Intermedios",
                                            marginLeft: 14,
                                            link: "dict-disps-inter"
                                        },
                                        {
                                            text: "Router",
                                            marginLeft: 14,
                                            link: "dict-disps-inter-router"
                                        },
                                        {
                                            text: "Switch",
                                            marginLeft: 14,
                                            link: "dict-disps-inter-switch"
                                        },
                                        {
                                            text: "AP (Access Point)",
                                            marginLeft: 14,
                                            link: "dict-disps-inter-ap"
                                        },
                                        {
                                            text: "Firewall",
                                            marginLeft: 14,
                                            link: "dict-disps-inter-firewall"
                                        }
                                    ]
                                },
                                {
                                    text: "Sistemas Finales",
                                    marginLeft: 10,
                                    list: [
                                        {
                                            text: "Sistemas Finales",
                                            marginLeft: 14,
                                            link: "dict-disps-finals"
                                        },
                                        {
                                            text: "Servidores",
                                            marginLeft: 14,
                                            link: "dict-disps-finals-servers"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            text: "Unidades",
                            marginLeft: 6,
                            list: [
                                {
                                    text: "Unidades",
                                    marginLeft: 10,
                                    link: "dict-unid"
                                },
                                {
                                    text: "bps",
                                    marginLeft: 10,
                                    link: "dict-unid-bps"
                                }
                            ]
                        },
                        {
                            text: "Protocolos",
                            marginLeft: 6,
                            list: [
                                {
                                    text: "Protocolos",
                                    marginLeft: 10,
                                    link: "dict-proto"
                                },
                                {
                                    text: "IP",
                                    marginLeft: 10,
                                    link: "dict-proto-ip"
                                },
                                {
                                    text: "TCP",
                                    marginLeft: 10,
                                    link: "dict-proto-tcp"
                                },
                                {
                                    text: "UDP",
                                    marginLeft: 10,
                                    link: "dict-proto-udp"
                                },
                                {
                                    text: "Spanning tree (Spanning Tree Protocol)",
                                    marginLeft: 10,
                                    link: "dict-proto-spanning-tree"
                                },
                                {
                                    text: "FTP / SFTP",
                                    marginLeft: 10,
                                    link: "dict-proto-ftp"
                                },
                                {
                                    text: "DNS",
                                    marginLeft: 10,
                                    link: "dict-proto-dns"
                                },
                                {
                                    text: "NTP",
                                    marginLeft: 10,
                                    link: "dict-proto-ntp"
                                }
                            ]
                        },
                        {
                            text: "Modelos",
                            marginLeft: 6,
                            list: [
                                {
                                    text: "Modelos",
                                    marginLeft: 10,
                                    link: "dict-model"
                                },
                                {
                                    text: "OSI",
                                    marginLeft: 10,
                                    link: "dict-model-osi"
                                },
                                {
                                    text: "TCP/IP",
                                    marginLeft: 10,
                                    link: "dict-model-tcp"
                                }
                            ]
                        },
                        {
                            text: "Puertos",
                            marginLeft: 6,
                            list: [
                                {
                                    text: "Puertos",
                                    marginLeft: 10,
                                    link: "dict-port"
                                },
                                {
                                    text: "Puertos de acceso",
                                    marginLeft: 10,
                                    link: "dict-port-access"
                                },
                                {
                                    text: "Puertos troncales",
                                    marginLeft: 10,
                                    link: "dict-port-tronc"
                                }
                            ]
                        },
                        {
                            text: "Otros conceptos",
                            marginLeft: 6,
                            list: [
                                {
                                    text: "Otros conceptos",
                                    marginLeft: 10,
                                    link: "dict-otros"
                                },
                                {
                                    text: "VLAN",
                                    marginLeft: 10,
                                    link: "dict-otros-vlan"
                                },
                                {
                                    text: "Internetwork",
                                    marginLeft: 10,
                                    link: "dict-otros-internetwork"
                                },
                                {
                                    text: "ISP",
                                    marginLeft: 10,
                                    link: "dict-otros-isp"
                                },
                                {
                                    text: "Ethernet",
                                    marginLeft: 10,
                                    link: "dict-otros-ethernet"
                                },
                                {
                                    text: "PDU",
                                    marginLeft: 10,
                                    link: "dict-otros-pdu"
                                },
                                {
                                    text: "VLSM",
                                    marginLeft: 10,
                                    link: "dict-otros-vlsm"
                                }
                            ]
                        }
                    ] }}
                />
            </List>
            

            {/* <ul><li><a href="#con-conceptos">Conociendo algunos conceptos</a>

                <ul><li><a href="#con-dispositivos">Dispositivos</a>
                    <ul><li><a href="#con-dispositivos-intermedios">Sistemas intermedios</a></li>
                        <li><a href="#con-dispositivos-finales">Dispositivos finales</a></li></ul></li>

                    <li><a href="#con-servicios">Servicios</a></li>

                    <li><a href="#con-medios-transmision">Medios de transmisión</a>
                        <ul><li><a href="#con-medios-transmision-cables">Basados en cables</a></li>
                            <li><a href="#con-medios-transmision-inalambricos">Inalámbricos</a></li></ul></li>

                    <li><a href="#con-protocolos">Protocolos</a></li></ul></li>

                <li><a href="#mod-osi">Conceptos básicos y modelo OSI</a>

                    <ul><li><a href="#mod-osi-serv-apps">Servicios y aplicaciones</a></li>

                        <li><a href="#mod-osi-componente-de-redes">Componentes de las redes</a>
                            <ul><li><a href="#mod-osi-componente-de-redes-servers">Servidores</a></li>
                                <li><a href="#mod-osi-componente-de-redes-clients">Clientes</a></li>
                                <li><a href="#mod-osi-componente-de-redes-protocols">Protocolos</a></li></ul></li>

                        <li><a href="#mod-osi-punto-punto">Punto a punto</a></li>

                        <li><a href="#mod-osi-disp-finales">Dispositivos finales</a></li>

                        <li><a href="#mod-osi-disp-intermed">Dispositivos de red intermedios</a></li>

                        <li><a href="#mod-osi-medios-de-red">Medios de red</a></li>

                        <li><a href="#mod-osi-tipos-redes">Tipos de redes</a>
                            <ul><li><a href="#mod-osi-tipos-redes-lan">LAN</a></li>
                                <li><a href="#mod-osi-tipos-redes-wan">WAN</a></li></ul></li>

                        <li><a href="#mod-osi-intra-extra">Intranet y Extranet</a>
                            <ul><li><a href="#mod-osi-intra-extra-intra">Intranet</a></li>
                                <li><a href="#mod-osi-intra-extra-extra">Extranet</a></li></ul></li>

                        <li><a href="#mod-osi-conexiones-internet">Conexiones de internet</a>
                            <ul><li><a href="#mod-osi-conexiones-internet-cable">Cable</a></li>
                                <li><a href="#mod-osi-conexiones-internet-dls">DSL</a></li>
                                <li><a href="#mod-osi-conexiones-internet-cel">Red celular</a></li>
                                <li><a href="#mod-osi-conexiones-internet-satelite">Satélite</a></li>
                                <li><a href="#mod-osi-conexiones-internet-marca">Teléfono de marcación</a></li></ul></li>

                        <li><a href="#mod-osi-red-convergente">Red convergente</a></li>

                        <li><a href="#mod-osi-red-confiables">Redes Confiables</a>
                            <ul><li><a href="#mod-osi-red-confiables-arqui">Arquitectura de Red</a>
                                <ul><li><a href="#mod-osi-red-confiables-arqui-fallos">Tolerancia a fallas</a></li>
                                    <li><a href="#mod-osi-red-confiables-arqui-escala">Escalabilidad</a></li>
                                    <li><a href="#mod-osi-red-confiables-arqui-calidad">Calidad de servicio (QoS)</a></li>
                                    <li><a href="#mod-osi-red-confiables-arqui-seguridad">Seguridad</a></li></ul></li></ul></li>

                        <li><a href="#mod-osi-red-tedencias">Tendencias de Redes</a>
                            <ul><li><a href="#mod-osi-red-tedencias-iot">IIoT (IoT Industrial)</a></li>
                                <li><a href="#mod-osi-red-tedencias-byod">Bring Your Own Device</a></li>
                                <li><a href="#mod-osi-red-tedencias-colab">Colaboración en línea</a></li>
                                <li><a href="#mod-osi-red-tedencias-comp">Computación en la nube</a></li>
                                <li><a href="#mod-osi-red-tedencias-modelos-comp-nube">Modelos de Computación en la nube</a>
                                    <ul><li><a href="#mod-osi-red-tedencias-modelos-comp-nube-pub">Nubes públicas</a></li>
                                        <li><a href="#mod-osi-red-tedencias-modelos-comp-nube-pri">Nubes privadas</a></li>
                                        <li><a href="#mod-osi-red-tedencias-modelos-comp-nube-hib">Nubes híbridas</a></li>
                                        <li><a href="#mod-osi-red-tedencias-modelos-comp-nube-com">Nubes comunitarias</a></li></ul></li>
                                <li><a href="#mod-osi-red-tedencias-hogar-inteli">Tecnología de hogar Inteligente</a></li>
                                <li><a href="#mod-osi-red-tedencias-plc">Power Line Communication (PLC)</a></li>
                                <li><a href="#mod-osi-red-tedencias-band-ancha-inalam">Banda Ancha Inalámbrica</a></li></ul></li>

                        <li><a href="#mod-osi-red-seguridad-red">Seguridad de la red</a>
                            <ul><li><a href="#mod-osi-red-seguridad-red-amen-ext">Amenazas externas</a></li>
                                <li><a href="#mod-osi-red-seguridad-red-amen-int">Amenazas internas</a></li>
                                <li><a href="#mod-osi-red-seguridad-red-solucion">Soluciones</a></li>
                                <li><a href="#mod-osi-red-seguridad-red-conceptos">Conceptos</a>
                                    <ul><li><a href="#mod-osi-red-seguridad-red-conceptos-botnet">Botnet</a></li>
                                        <li><a href="#mod-osi-red-seguridad-red-conceptos-ddos">Dos y DDos</a></li></ul></li></ul></li></ul></li>

                <li><a href="#mods-prots">Modelos y protocolos</a>

                    <ul><li><a href="#mods-prots-intro">Introducción TCP/IP Networking</a>
                        <ul><li><a href="#mods-prots-intro-mod-red">Modelo de red</a></li>
                            <li><a href="#mods-prots-intro-mod-osi">Modelo Osi</a></li>
                            <li><a href="#mods-prots-intro-mod-tcp">TCP/IP</a></li>
                            <li><a href="#mods-prots-intro-mod-basics">Aspectos básicos</a></li>
                            <li><a href="#mods-prots-intro-mod-prots">Protocolos</a></li>
                            <li><a href="#mods-prots-intro-mod-cod-message">Codificación del mensaje</a></li>
                            <li><a href="#mods-prots-intro-mod-formato-encapsulamiento">Formato y encapsulamiento del mensaje</a></li>
                            <li><a href="#mods-prots-intro-mod-tamaño-mensaje">Tamaño del mensaje</a></li>
                            <li><a href="#mods-prots-intro-mod-temporizacion-mensaje">Temporización del mensaje</a>
                                <ul><li><a href="#mods-prots-intro-mod-temporizacion-mensaje-flujo">Control de flujo</a></li>
                                    <li><a href="#mods-prots-intro-mod-temporizacion-rpta">Tiempo de espera de respuesta</a></li>
                                    <li><a href="#mods-prots-intro-mod-temporizacion-access">El método de acceso</a></li></ul></li>
                            <li><a href="#mods-prots-intro-mod-tamaño-mensaje">Opciones de entrega de mensaje</a></li></ul></li>

                        <li><a href="#mods-prots-prots">Protocolos</a>
                            <ul><li><a href="#mods-prots-prots-level">Niveles de implementación</a></li>
                                <li><a href="#mods-prots-prots-feature">Características</a></li>
                                <li><a href="mods-prots-prots-tipos">Tipos</a></li>
                                <li><a href="#mods-prots-funct">Función</a>
                                    <ul><li><a href="#mods-prots-funct-dir">Direccionamiento</a></li>
                                        <li><a href="#mods-prots-funct-conf">Confianza</a></li>
                                        <li><a href="#mods-prots-funct-flujo">Control de flujo</a></li>
                                        <li><a href="#mods-prots-funct-sec">Secuenciación</a></li>
                                        <li><a href="#mods-prots-funct-errors">Detección de errores</a></li>
                                        <li><a href="#mods-prots-funct-interfaz">Interfaz de aplicación</a></li></ul></li>
                                <li><a href="#mods-prots-interact">Interacción de protocolos</a></li>
                                <li><a href="#mods-prots-conjuntos">Conjunto de protocolos de red</a>
                                    <ul><li><a href="#mods-prots-conjuntos-suite">Suite de protocolos</a></li>
                                        <li><a href="#mods-prots-conjuntos-capas">Capas</a></li></ul></li>
                                <li><a href="#mods-prots-suite-tcp">Suite de protocolo TCP/IP</a></li></ul></li>

                        <li><a href="#mods-prots-orgs-estands">Organizaciones y estándares</a></li>

                        <li><a href="#mods-prots-mods-refer">Modelos de referencia</a>
                            <ul><li><a href="#mods-prots-mods-refer-benef">Beneficios del modelo de capas</a></li></ul></li>

                        <li><a href="#mods-prots-mods-refer-osi">Modelo de referencia OSI</a>
                            <ol><li><a href="#mods-prots-mods-refer-osi-fisica">Física</a></li>
                                <li><a href="#mods-prots-mods-refer-osi-enlace">Enlace de datos</a></li>
                                <li><a href="#mods-prots-mods-refer-osi-red">Red</a></li>
                                <li><a href="#mods-prots-mods-refer-osi-transport">Transporte</a></li>
                                <li><a href="#mods-prots-mods-refer-osi-sesion">Sesión</a></li>
                                <li><a href="#mods-prots-mods-refer-osi-present">Presentación</a></li>
                                <li><a href="#mods-prots-mods-refer-osi-app">Aplicación</a></li></ol></li>

                        <li><a href="#mods-prots-mods-refer-tcp">Modelo de referencia TCP/IP</a>
                            <ol><li><a href="#mods-prots-mods-refer-tcp-red">Acceso a la red</a></li>
                                <li><a href="mods-prots-mods-refer-tcp-internet">Internet</a></li>
                                <li><a href="#mods-prots-mods-refer-tcp-transport">Transporte</a></li>
                                <li><a href="#mods-prots-mods-refer-tcp-app">Aplicación</a></li></ol></li>

                        <li><a href="#mods-prots-segment-mensaje">Segmentación del mensaje</a></li>

                        <li><a href="#mods-prots-secuenciacion">Secuenciación</a></li>

                        <li><a href="#mods-prots-pdu">Unidades de datos del protocolo PDU</a></li>

                        <li><a href="#mods-prots-access">Acceso de datos</a>
                            <ul><li><a href="#mods-prots-access-dir-red">Direcciones de red</a></li></ul></li></ul></li>

                <li><a href="#dir-ip-lan">Direccionamiento IP y redes LAN</a>

                    <ul><li><a href="#dir-ip-lan-segment">Segmentación de la red</a>
                        <ul><li><a href="#dir-ip-lan-segment-broadcast">Dominios de broadcast y segmentación</a></li>
                            <li><a href="#dir-ip-lan-segment-dom-broadcast">Problemas de Dominios de broadcast</a></li></ul></li></ul></li>

                <li><a href="#preguntas">Algunas preguntas</a>

                    <ul><li><a href="#preguntas-sem3">Semana 3</a></li>
                        <li><a href="#preguntas-pc1">Tipo PC1</a></li></ul></li>

                <li><a href="#dict">Diccionario</a>

                    <ul><li><a href="#dict-disps">Dispositivos</a>
                        <ul><li><a href="#dict-disps-inter">Sistemas Intermedios</a>
                            <ul><li><a href="#dict-disps-inter-router">Router</a></li>
                                <li><a href="#dict-disps-inter-switch">Switch</a></li>
                                <li><a href="#dict-disps-inter-ap">AP (Access Point)</a></li>
                                <li><a href="#dict-disps-inter-firewall">Firewall</a></li></ul></li>
                            <li><a href="#dict-disps-finals">Sistemas Finales</a>
                                <ul><li><a href="#dict-disps-finals-servers">Servidores</a></li></ul></li></ul></li>

                        <li><a href="#id2-2">Unidades</a>
                            <ul><li><a href="#id2-2-1">bps</a></li></ul></li>

                        <li><a href="#id2-3">Otros conceptos</a>
                            <ul><li><a href="#id2-3-1">VLAN</a></li>
                                <li><a href="#id2-3-2">Internetwork</a></li></ul></li></ul></li></ul> */}
        </div>
    );
}

export default Index;