import { useState } from 'react';
import CellList from 'components/CellList/CellList';
import Navbar from 'components/Navbar/Navbar';
import AddCellModal from 'components/AddCellModal/AddCellModal';
import './Home.css';

function Home() {
  const [canShowAddCellModal, setCanShowAddCellModal] = useState(false);
  const [cellForAdd, setCellForAdd] = useState();
  return (
    <div className="Home">
            <Navbar createCell={() => setCanShowAddCellModal(true)} />
      <div className="Home__container">
        <CellList createdCell={cellForAdd}/>{' '}
        {canShowAddCellModal && (
          <AddCellModal
            closeModal={() => setCanShowAddCellModal(false)}
            onCreateCell={(cell) => setCellForAdd(cell)}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
