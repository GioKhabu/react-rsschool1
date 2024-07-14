import React from 'react';
import { Link } from 'react-router-dom';
import { ItemsProps } from '../../interfaces/interfaces';
import './Items.css';

const Items: React.FC<ItemsProps> = ({ items }) => {
  return (
    <div className="items-group">
      {items.map((item, index) => (
        <div key={index} className="item-card">
          <h2>{item.name}</h2>
          {item.birthYear !== 'unknown' && (
            <p>Year of birth: {item.birthYear}</p>
          )}
          {item.skinColor !== 'unknown' && <p>Skin color: {item.skinColor}</p>}
          {item.gender !== 'unknown' && <p>Gender: {item.gender}</p>}
          {item.height !== 'unknown' && <p>Height: {item.height}</p>}
          {item.mass !== 'unknown' && <p>Mass: {item.mass}</p>}
          {item.eyeColor !== 'unknown' && <p>Eye color: {item.eyeColor}</p>}
          {item.hairColor !== 'unknown' && <p>Hair color: {item.hairColor}</p>}
          <Link to={`/details/${item.name}`} className="details-link">
            Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Items;
