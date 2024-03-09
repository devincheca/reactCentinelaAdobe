function secondSunday(month)
{
  let d = new Date(new Date().getFullYear(), month - 1, 0, 0, 0, 0);
  d.setDate(d.getDate() + 15 - d.getDay() - 1);
  return d.toDateString();
}
const info = 
[
  {
    header: 'Centinela Adobe',
    details: ''
  },
  {
    header: 'Annual Barbecue',
    date: `${secondSunday(6)} 1-4 PM`,
    // details: 'Scheduled for second Sunday of June 2018. (06/10/2018) An old-fashioned step back in time in the shade of century old trees with live music, vintage cars, and great food. Stop by for baked beans, barbecue beef, chicken, coleslaw, and dessert.'
    details: 'Scheduled for ' + `${secondSunday(6)} 1-4 PM` + '. An old-fashioned step back in time in the shade of century old trees with live music, vintage cars, and great food. Stop by for baked beans, barbecue beef, chicken, coleslaw, cake, and dessert. All donations sustain the historic preservation.'
    // details: 'Cancelled until further notice due to COVID-19'
  },
  {
    header: 'Annual Fiesta',
    date: `${secondSunday(9)} 1-4 PM`,
    // details: 'Scheduled for second Sunday of September 2018. (09/9/2018) The Fiesta will celebrate the heritage of the California Rancho Days and feature Folklorico Dancers, Mariachis, Pinata Party, Handmade Tortillas, Quesadillas and Pan Dulce. Lace Making, Butter Churning and Wool Spinning will be demonstrated. Tour the South Bay\'s first home, the Centinela Adobe and the first Real Estate Office, the Daniel Freeman Land Office. Admission is free and refreshments are available for purchase.'
    details: 'Scheduled for ' + `${secondSunday(9)} 1-4 PM` + '. The Fiesta will celebrate the heritage of the California Rancho Days and feature Folklorico Dancers, Mariachis, Pinata Party, Handmade Tortillas, Tacos, Quesadillas and Pan Dulce. Lace Making, Butter Churning and Wool Spinning will be demonstrated. Tour the South Bay\'s first home, the Centinela Adobe and the first Real Estate Office, the Daniel Freeman Land Office. Admission is free and refreshments are available for purchase.secondSunday(9)'
    // details: 'Cancelled until further notice due to COVID-19'
  },
  {
    header: 'Christmas Caroling',
    date: secondSunday(12),
    // details: 'Scheduled for December 29, 2019 at 6pm. Festive caroling in the Walter Haskell Heritage Center surrounded by artifacts of the Daniel Freeman Mansion. Hot apple cider and munchies will be served.'
    // details: 'Scheduled for ' + secondSunday(12) + '. Festive caroling in the Walter Haskell Heritage Center surrounded by artifacts of the Daniel Freeman Mansion. Hot apple cider and munchies will be served.'
    // details: 'Cancelled until further notice due to COVID-19'
  },
  {
    header: 'Mission',
    date: '',
    details: 'The mission of the Historical Society of Centinela Valley is to acquire and preserve items of local historic significance, assist researchers and serve as host to school children, service clubs, foreign tourists and others interested in the local transitions from the Agricultural Ranchos to the Center of Aerospace and Technology.'
  },
  {
    header: 'Tours',
    date: '',
    // details: 'Cancelled until further notice due to COVID-19'
  },
  {
    header: 'Contact Us',
    date: '',
    details: 'Historical Society of Centinela Valley \n7634 Midfield Avenue \nLos Angeles, CA 90045 \n(310) 649-6272'
  }
];
export default info;
