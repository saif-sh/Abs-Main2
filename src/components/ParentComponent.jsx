// ParentComponent.js
import React, { useState } from 'react';
import PartnershipModal from './PartnershipModal'; // Adjust the path as needed

const ParentComponent = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Become a Partner
      </button>

      {showModal && <PartnershipModal showModal={showModal} setShowModal={setShowModal} />}
    </div>
  );
};

export default ParentComponent;
