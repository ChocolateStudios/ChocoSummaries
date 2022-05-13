import Dictionary from "./Dictionary";
import Index from "./Index";
import Section1_ConociendoConceptos from "./Section1_ConociendoConceptos";
import Section2_ConceptosBasicosYModeloOSI from "./Section2_ConceptosBasicosYModeloOSI";
import Section3_ModelosYProtocolos from "./Section3_ModelosYProtocolos";
import Section4_DireccionamientoIpYRedesLan from "./Section4_DireccionamientoIpYRedesLan";
import Section5_Preguntas from "./Section5_Preguntas";

function Class() {
  return (
    <div>
      <Index></Index>
      <Section1_ConociendoConceptos></Section1_ConociendoConceptos>
      <Section2_ConceptosBasicosYModeloOSI></Section2_ConceptosBasicosYModeloOSI>
      <Section3_ModelosYProtocolos></Section3_ModelosYProtocolos>
      <Section4_DireccionamientoIpYRedesLan></Section4_DireccionamientoIpYRedesLan>
      <Section5_Preguntas></Section5_Preguntas>
      <Dictionary></Dictionary>
    </div>
  );
}

export default Class;
