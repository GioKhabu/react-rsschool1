import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ApiItem, Item } from '../../interfaces/interfaces';

const ItemDetails: React.FC = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState<Item | null>(null);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/people/${itemId}`);
        const data: ApiItem = await response.json();
        setItem({
          name: data.name,
          birthYear: data.birth_year || '',
          eyeColor: data.eye_color || '',
          skinColor: data.skin_color || '',
          gender: data.gender || '',
          hairColor: data.hair_color || '',
          height: data.height || '',
          mass: data.mass || '',
        });
        setShowModal(true); // Open modal after fetching data
      } catch (error) {
        console.error('Error fetching item details:', error);
        // Handle error, e.g., set error state or show error message
      }
    };

    fetchItemDetails();
  }, [itemId]); // Trigger fetch when itemId changes

  const handleClose = () => {
    setShowModal(false); // Close modal on button click
  };

  if (!item) {
    return <div>Loading...</div>; // Display loading indicator while fetching
  }

  return (
    <div className={`item-details ${showModal ? 'show' : ''}`}>
      <div className="modal">
        <h2>{item.name}</h2>
        <p>Birth Year: {item.birthYear}</p>
        <p>Eye Color: {item.eyeColor}</p>
        <p>Skin Color: {item.skinColor}</p>
        {/* Add other item details */}
        <button onClick={handleClose}>Close</button>
      </div>
      <div className="backdrop" onClick={handleClose}></div>
    </div>
  );
};

export default ItemDetails;
