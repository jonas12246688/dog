export type Species = 'Dog' | 'Cat';

export interface Animal {
  id: string;
  name: string;
  species: Species;
  breed: string;
  age: string;
  gender: 'Male' | 'Female';
  personality: string;
  abandonedHistory: string;
  images: string[];
}
