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
                    text: "Definiciones básicas",
                    link: "def-basic",
                    list: [
                        {
                            text: "Estadística",
                            link: "def-basic-estadis"
                        },
                        {
                            text: "Estadística Descriptiva",
                            link: "def-basic-estadis-descrp"
                        },
                        {
                            text: "Estadística Inferencial",
                            link: "def-basic-estadis-infe"
                        },
                        {
                            text: "Población (N) y Muestra (n)",
                            link: "def-basic-pobl-muest"
                        },
                        {
                            text: "Unidad elemental",
                            link: "def-basic-elem-muest"
                        },
                        {
                            text: "Datos",
                            link: "def-basic-datos"
                        },
                        {
                            text: "Observación",
                            link: "def-basic-obs"
                        },
                        {
                            text: "Estadístico",
                            link: "def-basic-estadistico"
                        },
                        {
                            text: "Parámetro",
                            link: "def-basic-parametro"
                        },
                        {
                            text: "Variable",
                            link: "def-basic-var",
                            list: [
                                {
                                    text: "Tipos de variables",
                                    link: "def-basic-var-tipos",
                                    list: [
                                        {
                                            text: "Variable cualitativa",
                                            link: "def-basic-var-tipos-cuali"
                                        },
                                        {
                                            text: "Variable cuantitativa",
                                            link: "def-basic-var-tipos-cuanti",
                                            list: [
                                                {
                                                    text: "Discreta",
                                                    link: "def-basic-var-tipos-cuanti-disc"
                                                },
                                                {
                                                    text: "Contínua",
                                                    link: "def-basic-var-tipos-cuanti-cont"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    text: "Escala de medición",
                                    link: "def-basic-var-escala",
                                    list: [
                                        {
                                            text: "Nominal",
                                            link: "def-basic-var-escala-nominal"
                                        },
                                        {
                                            text: "Ordinal",
                                            link: "def-basic-var-escala-ordinal"
                                        },
                                        {
                                            text: "Intervalo",
                                            link: "def-basic-var-escala-interval"
                                        },
                                        {
                                            text: "Razón",
                                            link: "def-basic-var-escala-razon"
                                        }
                                    ]
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