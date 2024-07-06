export const search = async (term: string) => {
  const response = await fetch(`https://swapi.dev/api/people/?search=${term}`);
  const data = await response.json();
  console.log(data);
  return data.results.map((item: any) => ({
    name: item.name,
    birthYear: item.birth_year || '',
    eyeColor: item.eye_color || '',
    skinColor: item.skin_color || '',
    gender: item.gender || '',
    hairColor: item.hair_color || '',
    height: item.height || '',
    mass: item.mass || '',
  }));
};
