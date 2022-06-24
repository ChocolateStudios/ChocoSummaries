function Section5_BusquedaGrafos() {
    return (
      <div>

# Búsqueda y grafos

## Búsqueda por costo uniforme (UCS)
- La búsqueda de costo uniforme expande siempre el nodo de menor costo en el margen, medido por el costo de ruta g(n) en vez del nodo de menor profundidad
- Si se cumplen ciertas condiciones, es seguro que la primera solución encontrada será la más barata. 
- La búsqueda en amplitud es una búsqueda de costo uniforme donde g(n) = profundidad(n)

## Búsqueda por profundidad limitada (DLS)
- Se limita la profundidad máxima de una ruta. para la búsqueda por profundidad.
- Establecer este límite es difícil
    - no conocemos mucho sobre el espacio de estados.
- La búsqueda limitada puede no ser completa ni óptima:
    - un límite muy pequeño puede no contener la solución
    - uno muy grande puede contener muchas soluciones no óptimas

## Búsqueda por profundidad iterativa (IDS)
- Elimina la dificultad de elegir un límite adecuado de profundidad en el DLS.
- Se prueban todos los límites de profundidad posibles, primero la profundidad 0, luego la 1, luego la 2, etc.
- En la profundización iterativa se combinan las ventajas de las búsquedas por profundidad y por amplitud

## Resumen

- UCS:
    - Se visitan y expanden los nodos del borde con menor costo.
    - La estructura para los nodos abiertos es una cola (FIFO)
    - Un nodo es visitado si su costo de ruta es el menor de todos
- DLS:
    - Limitar el recorrido mejora el rendimiento
    - Elegir un buen límite es una tarea difícil.
- IDS:
    - Puede parecer un desperdicio, por repetir expansiones de
estados.
    - En la mayoría de los problemas esta expansión múltiple es
realmente pequeña

      </div>
    );
  }
  
  export default Section5_BusquedaGrafos;