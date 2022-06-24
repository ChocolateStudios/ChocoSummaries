import DivideVencerasTeoremaMaestro from "../images/divideVencerasTeoremaMaestro.PNG";
import DivideVencerasComplex from "../images/divideVencerasComplex.PNG";

function Section3_DivideYVenceras() {
    return (
      <div>

# Divide y vencerás
- Un algoritmo de divide y vencerás es un procedimiento recursivo
que resuelve un problema dado según el siguiente esquema:
    - Divide
        - El problema es descomponer en varios sub-problemas cuya resolución es “idéntica” al problema inicial.
    - Vencerás
        - Los sub-problemas son resueltos de manera recursiva. Sin embargo, un sub-problema puede ser resuelto directamente si su tamaño lo permite.
    - Combinar
        - Las soluciones de los sub-problemas son combinadas para formar la solución al problema inicial.

## Teorema maestro

<img src={DivideVencerasTeoremaMaestro} style={{width: 400, background: 'white'}} />

- T(n): complejidad del algoritmo para tamaño n
- T(n/b): complejidad para un subproblema
- n/b: tamaño de cada nuevo subproblema
- a: número de subproblema
    - (cantidad de veces que llamamos a la función recursiva)
    
<img src={DivideVencerasComplex} style={{width: 400, background: 'white'}} />

- Ejem
- merge sort: 2T(n/2) + n^1 -&gt; O(n^k log n)
    - a = 2
    - b = 2
    - k = 1

      </div>
    );
  }
  
  export default Section3_DivideYVenceras;