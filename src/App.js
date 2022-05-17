import { useState } from 'react';
import './App.css';
import BottomSheet from './BottomSheet/BottomSheet';

function App() {

  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen((prev)=>!prev);

  return (
    <div className="App">
      <h1>Hi! CustomerGlu</h1>
      <button onClick={toggleModal}>Open Bottom Sheet</button>
      <BottomSheet modalOpen={modalOpen} toggleModal={toggleModal}>
        <h1>Hi! This is a Bottom Sheet Component</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </BottomSheet>
    </div>
  );
}

export default App;
