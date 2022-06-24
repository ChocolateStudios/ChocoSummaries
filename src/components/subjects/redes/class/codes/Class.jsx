import Dictionary from "./Dictionary";
import Index from "./Index";
import Section1_ConociendoConceptos from "./Section1_ConociendoConceptos";
import Section2_ConceptosBasicosYModeloOSI from "./Section2_ConceptosBasicosYModeloOSI";
import Section3_ModelosYProtocolos from "./Section3_ModelosYProtocolos";
import Section4_DireccionamientoIpYRedesLan from "./Section4_DireccionamientoIpYRedesLan";
import Section5_EnrutamientoTecWANSeguridad from "./Section5_EnrutamientoTecWANSeguridad";
import Section6_TecnologiasWAN from "./Section6_TecnologiasWAN";
import Section7_ListasDeAccesoACL from "./Section7_ListasDeAccesoACL";
import Section_Preguntas from "./Section_Preguntas";

function Class() {
  return (
    <div>
      <Index />
      <Section1_ConociendoConceptos />
      <Section2_ConceptosBasicosYModeloOSI />
      <Section3_ModelosYProtocolos />
      <Section4_DireccionamientoIpYRedesLan />
      <Section5_EnrutamientoTecWANSeguridad />
      <Section6_TecnologiasWAN />
      <Section7_ListasDeAccesoACL />
      <Section_Preguntas />
      <Dictionary />
    </div>
  );
}

export default Class;
