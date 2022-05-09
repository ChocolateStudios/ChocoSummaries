import Index from "./Index";
import Section1_Comandos from "./Section1_Comandos";
import Section2_Modos from "./Section2_Modos";
import Section3_Pasos from "./Section3_Pasos";
import Section4_Ejemplos from "./Section4_Ejemplos";
import Section5_OtrasConfiguraciones from "./Section5_OtrasConfiguraciones";

function Labs() {
  
    return (
      <div>
          <Index></Index>
          <Section1_Comandos></Section1_Comandos>
          <Section2_Modos></Section2_Modos>
          <Section3_Pasos></Section3_Pasos>
          <Section4_Ejemplos></Section4_Ejemplos>
          <Section5_OtrasConfiguraciones></Section5_OtrasConfiguraciones>
      </div>
    );
  }
  
  export default Labs;