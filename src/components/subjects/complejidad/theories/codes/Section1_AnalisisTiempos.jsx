import TiemposNotables from "../images/tiemposNotables.PNG";

function Section1_AnalisisTiempos() {
    return (
      <div>

# Análisis de Tiempos

## Orden de magnitud

Siendo <b><i>f</i></b> y <b><i>g</i></b> dos funciones de N en R

```
f es dominado asintoticamente por g: f = O(g)
----------------------------------------------------------------------
f ∈ O(g) ⇔ ∃c ∈ R, ∃a, tal que ∀n &gt; a, f(n) ≤ c ∗ g(n)
```

```
f es dominado asintoticamente por g: f = Ω(g) ⇔ g = O(f)
----------------------------------------------------------------------
f ∈ Ω(g) ⇔ ∃C ∈ R, ∃a, tal que ∀n &gt; a, C ∗ g(n) ≤ f(n)
```

```
f es del mismo orden de magnitud que g: f = Θ(g) ⇔ f = O(g) ∧ f = Ω(g)
----------------------------------------------------------------------
f ∈ Θ(g) ⇔ ∃c, C ∈ R, ∃a, tal que ∀n &gt; a, C ∗ g(n) ≤ f(n) ≤ c ∗ g(n)
```

## Tiempos notables
- Constante
- Logarítmico
- Lineal
- Cuadrático
- Polinomial
- Exponencial

<img src="https://runestone.academy/ns/books/published/pythonds/_images/newplot.png" style={{width: 500, background: 'white'}}/>

<img src={TiemposNotables} style={{width: 500, background: 'white'}} />

<br/><br/>

      </div>
    );
  }
  
  export default Section1_AnalisisTiempos;