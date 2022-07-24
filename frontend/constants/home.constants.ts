export const homeFormInitialValues = {
  age: '',
  family: '',
  radius: 0,
  condition: '',
  image: '',
};
export const treeWorkPlan = {
  plan: '',
};

export const homeSelectOptions = [
  { text: 'Awful', value: 'awful' },
  { text: 'Bad', value: 'bad' },
  { text: 'Care Required', value: 'care_required' },
  { text: 'Good', value: 'good' },
  { text: 'Perfect', value: 'perfect' },
];

export const InputsForm = [
  { type: 'number', name: 'age', placeholder: 'Enter Age', label: 'Age' },
  {
    type: 'text',
    name: 'family',
    placeholder: 'Enter Family of tree',
    label: 'Family tree',
  },
  {
    type: 'number',
    name: 'radius',
    placeholder: 'Enter Radius of Tree (meters)',
    step: '0.01',
    label: 'Radius of tree(meters)',
    value: undefined,
  },
];
