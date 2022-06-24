import Index from "./Index";
import Section1_AnalisisTiempos from "./Section1_AnalisisTiempos";
import Section2_EspacioBusquedaYTecnicasResolucion from "./Section2_EspacioBusquedaYTecnicasResolucion";
import Section3_DivideYVenceras from "./Section3_DivideYVenceras";
import Section4_Grafos from "./Section4_Grafos";
import Section5_BusquedaGrafos from "./Section5_BusquedaGrafos";
import Section6_OrdenTopologico from "./Section6_OrdenTopologico";

function Theories() {
    return (
      <div>
          <Index></Index>
          <Section1_AnalisisTiempos></Section1_AnalisisTiempos>
          <Section2_EspacioBusquedaYTecnicasResolucion></Section2_EspacioBusquedaYTecnicasResolucion>
          <Section3_DivideYVenceras></Section3_DivideYVenceras>
          <Section4_Grafos></Section4_Grafos>
          <Section5_BusquedaGrafos></Section5_BusquedaGrafos>
          <Section6_OrdenTopologico></Section6_OrdenTopologico>
      </div>
    );
  }
  
  export default Theories;