import Spreadsheet from "react-spreadsheet";
import * as d3 from "d3";
import React from "react";

function BarChart() {

    const data = [4, 8, 15, 16, 23, 42]

    // Create an empty (detached) chart container.
    const div = d3.create("div");

    // Apply some styles to the chart container.
    div.style("font", "10px sans-serif");
    div.style("text-align", "right");
    div.style("color", "white");

    // Define the initial (empty) selection for the bars.
    const bar = div.selectAll("div");

    // Bind this selection to the data (computing enter, update and exit).
    const barUpdate = bar.data(data);

    // Join the selection and the data, appending the entering bars.
    const barNew = barUpdate.join("div");

    // Apply some styles to the bars.
    barNew.style("background", "steelblue");
    barNew.style("padding", "3px");
    barNew.style("margin", "1px");

    // Set the width as a function of data.
    barNew.style("width", d => `${d * 10}px`);

    // Set the text of each bar as the data.
    barNew.text(d => d);

    console.log(div.node());

    return div.node();
}

function Section8_VariablesAleatoriasDiscretas() {
    const data1 = [
        [{ value: "Evento simple" }, { value: "Moneda 1" }, { value: "Moneda 2" }, { value: "P (Ei)" }, { value: "x" }],
        [{ value: "E1" }, { value: "H" }, { value: "H" }, { value: "1/4" }, { value: "2" }],
        [{ value: "E2" }, { value: "H" }, { value: "T" }, { value: "1/4" }, { value: "1" }],
        [{ value: "E3" }, { value: "T" }, { value: "H" }, { value: "1/4" }, { value: "1" }],
        [{ value: "E4" }, { value: "T" }, { value: "T" }, { value: "1/4" }, { value: "0" }]
    ];

    const data2 = [
        [{ value: "x" }, { value: "Evento simples en x" }, { value: "p(x)" }],
        [{ value: "0" }, { value: "E4" }, { value: "1/4" }],
        [{ value: "1" }, { value: "E2, E3" }, { value: "1/2" }],
        [{ value: "2" }, { value: "E1" }, { value: "1/4" }],
        [{ value: "" }, { value: "" }, { value: "⅀ p(x) = 1" }]
    ];


    return (
        <div>
            <h1 id="var-random-disc">Variables Aleatorias Discretas</h1>

            <h2 id="var-random-disc-var-rand">Variables aleatorias</h2>
            <ul><li>Una variable x es variable aleatoria si el valor que toma, correspondiente al resultado de un experimento, es una probabilidad o evento aleatorio.</li>
                <li>las variables aleatorias cuantitativas se clasifican ya sea como discretas o como continuas, de acuerdo con los valores que x tome. Es importante distinguir entre variables aleatorias discretas y continuas, porque se usan técnicas diferentes para describir sus distribuciones.</li></ul>

            <h2 id="var-random-disc-dist-prob">Distribuciones de probabilidad</h2>
            <ul><li>La distribución de probabilidad para una variable aleatoria discreta es una fórmula, tabla o gráfica que da los posibles valores de x, y la probabilidad p(x) asociada con cada valor de x.</li></ul>

            <h2 id="var-random-disc-requisitos">Requisitos para un distribución de probabilidad discreta</h2>
            <ul><li>0 ≤ p(x) ≤ 1</li>
                <li><b>⅀</b> p(x) = 1</li></ul>

            <h3>Ejemplo</h3>
            Lance al aire dos monedas imparciales y sea x igual al número de caras que se observan luego de que la moneda haya caído. Encuentre la distribución de probabilidad para x.<br /><br />
            Los eventos simples para este experimento con sus respectivas probabilidades se muestran en la siguiente tabla. Una H representa si la cara de la moneda se puede observar luego de que la moneda haya caído. Como E1 = HH resulta en dos caras, este evento simple resulta en el valor x = 2. Del mismo modo, el valor x = 1 se asigna a E2, y así sucesivamente.<br /><br />
            <Spreadsheet data={data1} />
            <br /><br />
            <p>Para cada valor de x, se calcula p(x) al sumar las probabilidades de los eventos simples en ese evento. Por ejemplo, cuando x 0, ocurre el evento simple E4, de modo que</p>
            <p>p(0) = P(E4) = 1/4</p>
            <p>y cuando x = 1,</p>
            <p>p(1) = P(E2) + P(E3) = 1/2</p>
            Los valores de x y sus probabilidades respectivas, p(x), aparecen en la siguiente tabla. Observe que las probabilidades totalizan 1.<br /><br />
            <Spreadsheet data={data2} />
            {/* <BarChart /> */}
        </div>
    );
}

export default Section8_VariablesAleatoriasDiscretas;