import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Link2 from '@mui/material/Link';
import DefinicionesBasicas1 from "../images/definiciones_basicas_1.PNG";
import ParametrosEstadisticos from "../images/parametros_estadisticos.PNG";

function Section1_DefinicionesBasicas() {

    return (
        <div>

            <h1 id="def-basic">Definiciones básicas</h1>

            <h2 id="def-basic-estadis">Estadística</h2>
            <ul><li>Es la ciencia que proporciona un conjunto de métodos, técnicas y procedimientos para recopilar, organizar, presentar y analizar datos con el fin de describirlos o realizar generalizaciones válidas.</li>
                <li>Es la ciencia que se encarga de recopilar datos para organizarlos en tablas, presentar datos de forma gráfica, analizar y tomar decisiones.</li></ul>

            <h2 id="def-basic-estadis-descrp">Estadística Descriptiva</h2>
            <ul><li>La estadística descriptiva está formada por procedimientos empleados para resumir y describir las características importantes de un conjunto de mediciones.</li>
                <li>Describe el comportamiento de la población o muestra. Las características que tiene.</li>
                <li>Son métodos asociados a la caracterización, resumen y presentación de datos, que permiten describirlos apropiadamente.</li>
                <li>Comprende el uso de gráficos, tablas e indicadores de resumen obtenidos al realizar algunos cálculos.</li></ul>

            <h2 id="def-basic-estadis-infe">Estadística Inferencial</h2>
            <ul><li>La estadística inferencial está formada por procedimientos empleados para hacer inferencias acerca de características poblacionales, a partir de información contenida en una muestra de la población.</li>
                <li>Son métodos y técnicas que hacen posible estimar una o más características de una población o tomar decisiones referentes a una población, basados en los resultados obtenidos del estudio de muestras elegidas adecuadamente. Estas conclusiones no tienen que ser totalmente válidas, pueden tener cierto margen de error, por eso se dan con una medida de confiabilidad o probabilidad.</li></ul>

            <h2 id="def-basic-pobl-muest">Población (N) y Muestra (n)</h2>
            <ul><li>En el lenguaje de la estadística, uno de los conceptos básicos es el muestreo. En casi todos los problemas de estadística, un número específico de mediciones o datos (es decir, una muestra) se toma de un cuerpo de mediciones más grande llamado población.</li>
                <li>Una población es el conjunto de mediciones de interés para el investigador</li>
                <li>Una muestra es un subconjunto de mediciones seleccionado de la población de interés.</li>
                <li>Ejemplos
                    <ul><li>Población
                        <ul><li>Todos los estudiantes del curso de EA1 de la sección SI3H</li>
                            <li>Los 40 estudiantes del curso de EA1 de la sección SI3H</li></ul></li>
                        <li>Muestra
                        <ul><li>Algunos de los estudiantes del curso de EA1 de la sección SI3H</li>
                            <li>5 estudiantes del curso de EA1 de la sección SI3H</li></ul></li></ul></li></ul>

            <h2 id="def-basic-elem-muest">Unidad elemental</h2>
            <ul><li>También llamada unidad de análisis, unidad estadística o elemento. Es el objeto sobre el cual se hace la medición. Por ejemplo, en estudios de poblaciones humanas, con frecuencia ocurre que las unidades de análisis son los individuos.</li>
                <li>Ejemplos
                    <ul><li>Un estudiante del curso de EA1 de la sección SI3H</li></ul></li></ul>

            <h2 id="def-basic-datos">Datos</h2>
            <ul><li>Es la respuesta a la variable</li>
                <li>Son los valores numéricos o no numéricos que otorga la característica de interés de cada unidad elemental.</li></ul>

            <h2 id="def-basic-obs">Observación</h2>
            <ul><li>Es el conjunto de datos de una misma unidad elemental</li>
                <li>Es el conjunto de datos de una unidad elemental. La observación se obtiene para cada unidad elemental.</li></ul>

            <br/>
            <img src={DefinicionesBasicas1} style={{ width: 700 }} />

            <h2 id="def-basic-estadistico">Estadístico</h2>
            <ul><li>Cuando se trabaja con la muestra para realizar cálculos (promedio(x raya), proporción (p flecha hacia arriba), etc.) a eso se le conoce como estadístico.</li>
                <li>Medida que describe una característica resumen de las unidades que componen una población.</li></ul>

            <h2 id="def-basic-parametro">Parámetro</h2>
            <ul><li>Cuando se trabaja con la población para realizar cálculos (promedio (μ), proporción (p), etc.) a eso se le conoce como estadístico.</li>
                <li>Medida que describe una característica resumen de las unidades que componen una muestra.</li></ul>

            <img src={ParametrosEstadisticos} style={{ width: 500 }} />
            <br />
            
            <h2 id="def-basic-var">Variable</h2>
            <ul><li>Una variable es una característica que cambia o varía con el tiempo o para diferentes personas u objetos en estudio.</li>
                <li>Es una característica de interés de la población definida por la investigación estadística y que puede tomar dos o más valores en distintas unidades de análisis.</li>
                <li>Es una característica de la población</li>
                <li>Ejemplos
                    <ul><li>Edad</li>
                        <li>Peso</li>
                        <li>Sexo</li></ul></li></ul>

            <h3 id="def-basic-var-tipos">Tipos de variables</h3>
            <ul><li id="def-basic-var-tipos-cuali">Variable cualitativa
                    <ul><li>Es una variable que al ser medida queda expresada por una etiqueta o nombre que se utiliza para identificar una característica o atributo.</li></ul></li>
                <li id="def-basic-var-tipos-cuanti">Variable cuantitativa
                    <ul><li>Es una variable que al ser medida queda expresada por un número que se utiliza para identificar una característica o atributo.</li>
                        <li id="def-basic-var-tipos-cuanti-disc"><b>Discreta</b>
                            <ul><li>Una variable es cuantitativa discreta si el conjunto de posibles valores que toma es finito o infinito numerable, es decir, que sólo puede tomar ciertos valores en un intervalo determinado.</li></ul></li>
                        <li id="def-basic-var-tipos-cuanti-cont"><b>Contínua</b>
                            <ul><li>Una variable es cuantitativa continua si el conjunto de posibles valores es infinito no numerable, es decir, que puede tomar cualquier valor en un intervalo determinado.</li></ul></li></ul></li></ul>

            <h3 id="def-basic-var-escala">Escala de medición</h3>
            <ul><li id="def-basic-var-escala-nominal">Nominal
                    <ul><li>Se usa cuando los datos sólo pueden clasificarse en categorías o modalidades. Si se le identificase mediante un número, este sólo se utiliza como una etiqueta.</li></ul></li>
                <li id="def-basic-var-escala-ordinal">Ordinal
                    <ul><li>Se usa cuando los datos que reflejan diferentes grados de propiedad o atributo de estudio. Se pueden ordenar en forma ascendente o descendente (jerarquía), de tal manera que puedan expresar grados de la característica medida.</li>
                        <li>Las variables con escalas ordinales pueden ser ordenadas o clasificadas en relación con la cantidad del atributo poseído. Cada categoría puede ser comparada con otra en relación de “mayor que” o “menor que”. Si se le identificase mediante un número, este se utiliza para establecer el orden del atributo estudiado.</li></ul></li>
                <li id="def-basic-var-escala-interval">Intervalo
                    <ul><li>Se utiliza cuando los datos miden cuantitativamente la intensidad del atributo en estudio y, además, las diferencias iguales entre estos valores indican diferencias iguales en las cuantías de los atributos medidos.</li>
                        <li>En esta escala el cero es relativo, es decir, no indica la ausencia de la característica medida.</li></ul></li>
                <li id="def-basic-var-escala-razon">Razón</li>
                    <ul><li>Si los cocientes o razones de los números asignados a las unidades estadísticas reflejan los cocientes de las cuantías de las propiedades que se miden.</li>
                        <li>En esta escala el cero indica la ausencia de característica de la medida. También se le conoce como escala de proporción o cociente.</li></ul></ul>

            <Link to="infografia" style={{ textDecoration: 'none' }}>
                <Button variant="outlined">Infografía</Button>
            </Link>

            <br/><br/>
            <Link2 href="#id0"><div>Volver a índice</div></Link2>
        </div>
    );
}

export default Section1_DefinicionesBasicas;