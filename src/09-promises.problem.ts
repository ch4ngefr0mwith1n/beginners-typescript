interface LukeSkywalker {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

// PRVO RJEŠENJE:
export const fetchLukeSkywalker1 = async (): Promise<LukeSkywalker> => {
  const data = await fetch("https://swapi.dev/api/people/1").then((res) => {
    return res.json();
  });

  return data;
};

// DRUGO RJEŠENJE:
export const fetchLukeSkywalker2 = async () => {
  const data: LukeSkywalker = await fetch("https://swapi.dev/api/people/1").then((res) => {
    return res.json();
  });

  return data;
};

// TREĆE RJEŠENJE:
export const fetchLukeSkywalker3 = async () => {
  const data = await fetch("https://swapi.dev/api/people/1").then((res) => {
    return res.json();
  });

  return data as LukeSkywalker;
};


