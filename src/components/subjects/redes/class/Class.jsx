import Dictionary from "./Dictionary";
import Index from "./Index";
import Section1_ConociendoConceptos from "./Section1_ConociendoConceptos";
import Section2_ConceptosBasicosYModeloOSI from "./Section2_ConceptosBasicosYModeloOSI";
import Section3_ModelosYProtocolos from "./Section3_ModelosYProtocolos";
import Section4_DireccionamientoIpYRedesLan from "./Section4_DireccionamientoIpYRedesLan";

function Class() {
  console.log("Cargó Class.jsx")

  return (
    <div>
      <Index></Index>
      <Section1_ConociendoConceptos></Section1_ConociendoConceptos>
      <Section2_ConceptosBasicosYModeloOSI></Section2_ConceptosBasicosYModeloOSI>
      <Section3_ModelosYProtocolos></Section3_ModelosYProtocolos>
      <Section4_DireccionamientoIpYRedesLan></Section4_DireccionamientoIpYRedesLan>
      <Dictionary></Dictionary>
    </div>
  );
}

export default Class;
