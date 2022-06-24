import SubjectsPresentation from './SubjectsPresentation';
import Presentation from './Presentation';
import "./AppStyles.css"

function Home() {
  return (
    <div className='content-container'>
      <Presentation />
      <SubjectsPresentation/>
    </div>
  );
}

export default Home;




