import { render, screen } from '@testing-library/react';
import Items from './Items';

describe('Items component', () => {
  const mockItems = [
    {
      id: '1',
      name: 'Luke Skywalker',
      birthYear: '19 BBY',
      skinColor: 'fair',
      gender: 'male',
      height: '172',
      mass: '77',
      eyeColor: 'blue',
      hairColor: 'blond',
    },
    {
      id: '2',
      name: 'Leia Organa',
      birthYear: '19 BBY',
      skinColor: 'light',
      gender: 'female',
      height: '150',
      mass: '49',
      eyeColor: 'brown',
      hairColor: 'brown',
    },
  ];

  test('renders items correctly', () => {
    render(<Items items={mockItems} />);

    // Check if each item's details are rendered correctly
    mockItems.forEach((item) => {
      const nameElement = screen.getByText(item.name);
      const birthYearElements =
        item.birthYear !== 'unknown'
          ? screen.getAllByText(`Year of birth: ${item.birthYear}`)
          : [];
      const skinColorElement =
        item.skinColor !== 'unknown'
          ? screen.getByText(`Skin color: ${item.skinColor}`)
          : null;
      const genderElement =
        item.gender !== 'unknown'
          ? screen.getByText(`Gender: ${item.gender}`)
          : null;
      const heightElement =
        item.height !== 'unknown'
          ? screen.getByText(`Height: ${item.height}`)
          : null;
      const massElement =
        item.mass !== 'unknown' ? screen.getByText(`Mass: ${item.mass}`) : null;
      const eyeColorElement =
        item.eyeColor !== 'unknown'
          ? screen.getByText(`Eye color: ${item.eyeColor}`)
          : null;
      const hairColorElement =
        item.hairColor !== 'unknown'
          ? screen.getByText(`Hair color: ${item.hairColor}`)
          : null;

      expect(nameElement).toBeInTheDocument();
      birthYearElements.forEach((element) =>
        expect(element).toBeInTheDocument()
      );
      if (skinColorElement) expect(skinColorElement).toBeInTheDocument();
      if (genderElement) expect(genderElement).toBeInTheDocument();
      if (heightElement) expect(heightElement).toBeInTheDocument();
      if (massElement) expect(massElement).toBeInTheDocument();
      if (eyeColorElement) expect(eyeColorElement).toBeInTheDocument();
      if (hairColorElement) expect(hairColorElement).toBeInTheDocument();
    });
  });
});
