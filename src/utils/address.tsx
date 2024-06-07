export interface Address {
  id: string;
  name: string;
  planet: string;
  area: number;
}

export const address = () => {
  return [
    {
      id: '1',
      name: 'Posto 0001',
      planet: 'Terra',
      area: 1234
    }, {
      id: '2',
      name: 'Posto 1001',
      planet: 'Marte',
      area: 4321
    }
  ]
}