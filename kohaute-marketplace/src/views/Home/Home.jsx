import { useState } from 'react';
import CellList from 'components/CellList/CellList';
import Navbar from 'components/Navbar/Navbar';
import AddCellModal from 'components/AddCellModal/AddCellModal';
import './Home.css';

function Home() {
  const [canShowAddCellModal, setCanShowAddCellModal] = useState(false);
  return (
    <div className="Home">
            <Navbar createCell={() => setCanShowAddCellModal(true)} />
      <div className="Home__container">
        <CellList />{' '}
        {canShowAddCellModal && (
          <AddCellModal
            closeModal={() => setCanShowAddCellModal(false)}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
