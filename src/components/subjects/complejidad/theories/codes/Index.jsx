import * as React from 'react';
import List from '@mui/material/List';
import ChocoListItem from '../../../../auxiliar/ChocoListItem';

function Index() {
  return (
    <div>
      <h1>Aun falta mejorar todo :v</h1>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1 id="id0">Índice</h1>
      </div>

      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <ChocoListItem marginLft={2} content={{
          text: "Análisis de Tiempos",
          link: "ana-tmps",
          list: [
            {
              text: "Orden de magnitud",
              link: "ana-tmps-ord-mag"
            },
            {
              text: "Tiempos notables",
              link: "ana-tmps-tmp-not"
            }
          ]
        }}
        />
        <ChocoListItem marginLft={2} content={{
          text: "Espacio de búsqueda y técnicas de resolución",
          link: "esp-bus-tec-res",
          list: [
            {
              text: "Problema",
              link: "esp-bus-tec-res-prob"
            },
            {
              text: "Espacio de búsqueda",
              link: "esp-bus-tec-res-esp-bus"
            }
          ]
        }}
        />
        <ChocoListItem marginLft={2} content={{
          text: "Divide y vencerás",
          link: "div-ven",
          list: [
            {
              text: "Teorema maestro",
              link: "div-ven-teo-master"
            }
          ]
        }}
        />
        <ChocoListItem marginLft={2} content={{
          text: "Grafos",
          link: "graph",
          list: [
            {
              text: "Nose",
              link: "nose"
            }
          ]
        }}
        />
      </List>
    </div>
  );
}

export default Index;