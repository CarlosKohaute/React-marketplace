import CellList from 'components/CellList/CellList';
import Navbar from 'components/Navbar/Navbar';
import AddCellModal from 'components/AddCellModal/AddCellModal';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <div className="Home__container">
        <CellList />
        <AddCellModal/>
      </div>
    </div>
  );
}

export default Home;
