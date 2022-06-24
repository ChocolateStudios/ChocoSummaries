import EjemploGrafos from "../images/EjemploGrafos.PNG";
import RepresentacionGrafosMatrizAdyacencia from "../images/RepresentacionGrafosMatrizAdyacencia.PNG";
import RepresentacionGrafosListaAdyacencia from "../images/RepresentacionGrafosListaAdyacencia.PNG";

function Section4_Grafos() {
    return (
      <div>

# Grafos
- Conjunto de vertices V
- Conjunto de aristas E (las líneas rojas)

<img src={EjemploGrafos} style={{width: 300, background: 'white'}} />

- Vértice
    - Es un objeto que puede o no puede estar conectado a otros objetos en una red.
- Arista: 
    - Es una conexión entre dos vértices, puede ser:
        - Bilaterales
        - Dirigidas

## Tipos
- Grafo nulo
    - En este grafo los vértices que lo componen no están conectados, esto es, que son vértices aislados.
- Grafo finito
    - Es un grafo que tiene un numero finito de vértices y aristas
- Grafo infinito
    - Es un grafo infinito que contiene a todos los grafos finitos,como un sub-grafo inducido

## Grado
- Grado de un grafo
    - Número de vertices que tiene
- Grado de un vértice
    - Número de aristas que son incidentes a él (de entrada o de salida)

## Representación
- Matriz de adyacencia
    - Dado un grafo G, este será representado por una matriz de n × n que denominaremos A, donde:
        - Aij = 1 ⇐⇒ G tiene una arista i → j

    - Variante:
        - Aij = peso de la arista i → j

    - El grafo está representado por una matriz cuadrada A de tamaño n × n, donde n es el número de vértices. Si hay una arista entre un vértice i y un vértice j, entonces el elemento A(i, j) es 1, de lo contrario, es 0.

<img src={RepresentacionGrafosMatrizAdyacencia} style={{width: 350, background: 'white'}} />

- Lista de adyacencia
    - Arreglo (o lista) de vértices
    - Arreglo (o lista) de aristas
    - Cada arista apunta a sus vértices
    - Cada vértice apunta a las aristas incidentes a él

<img src={RepresentacionGrafosListaAdyacencia} style={{width: 280, background: 'white'}} />

## Grafos completos
- Un grafo es completo si para cualquier pareja de vértices existe
una arista que los une (en ambos sentidos si el grafo es no
dirigido)
- El número máximo de aristas en un grafo n vértices es:
n(n − 1)/2

## Subgrafo y componente
- Sub-grafo
    - Un sub-grafo se define como un grafo con vértices y aristas que son un subconjunto de un grafo
- Componente 
    - Un subconjunto de vértices que forman un sub-grafo completo

## Camino
- Un camino es una secuencia de vértices dentro de un grafo tal
que existe una arista entre cada vértice y el siguiente
    - Dos vértices están conectados si hay un camino entre ellos
    - Dos vértices pueden estar conectados por varios caminos
    - El número de aristas dentro de un camino es su longitud
    - Un ciclo es un camino que empieza y termina en el mismo vértice

## Recorrido por amplitud (BFS)
- En este caso, primero se expande el nodo raíz y luego todos los nodos generados por éste, luego sus sucesores y así sucesivamente.
- Todos los nodos que están a profundidad d se expanden antes que los nodos con profundidad d + 1
- Si hay solución, es seguro que se encontrará mediante la búsqueda preferente por amplitud.
- Si son varias soluciones, siempre encontrará primero el estado de meta más próximo (menos profundidad, más a la izquierda).
- La búsqueda preferente por amplitud es completa y óptima siempre y cuando el costo de ruta sea una función que no disminuya al aumentar la profundidad del nodo

      </div>
    );
  }
  
  export default Section4_Grafos;