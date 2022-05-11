import '../Home/Home.css';
import CellList from 'components/CellList/CellList';
import Navbar from 'components/Navbar/Navbar'


function Home() {
  return (
    <div className="Home">
        <Navbar />
      <div className="Home__container">
        <CellList />
      </div>
    </div>
  );
}

export default Home;
