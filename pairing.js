
const winePairings = {
  red_meat: [
    'Cabernet Sauvignon',
    'Cabernet Franc',
    'Cariñena',
    'Garnacha Negra',
    'Merlot',
    'Monastrell',
    'Samsó',
    'Syrah',
    'Tempranillo'
  ],
  white_meat: [
    'Chardonnay',
    'Garnacha Blanca',
    'Parellada',
    'Pansa Blanca',
    'Xarel·lo',
    'Macabeo'
  ],
  seafood: [
    'Chardonnay',
    'Sauvignon Blanc',
    'Macabeo',
    'Pansa Blanca',
    'Xarel·lo',
    'Parellada'
  ],
  cheese: [
    'Chardonnay',
    'Sauvignon Blanc',
    'Merlot',
    'Tempranillo',
    'Riesling',
    'Cabernet Franc'
  ],
  dessert: [
    'Moscatel de Alejandría',
    'Moscatel de Grano Menudo',
    'Riesling'
  ],
  vegetarian: [
    'Pinot Noir',
    'Sauvignon Blanc',
    'Riesling',
    'Garnacha Blanca',
    'Macabeo'
  ]
};


function showWineSuggestions() {
  const category = document.getElementById('category').value;
  const wineListElement = document.getElementById('wineSuggestions');
  wineListElement.innerHTML = '';

  if (category && winePairings[category]) {
    const wines = winePairings[category];

    wines.forEach(wine => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');

      
      const formattedWine = wine.toLowerCase().replace(/\s+/g, '_');

      
      const displayName = wine
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');

      link.href = `/${formattedWine}.html`;
      link.textContent = displayName;
      link.className = 'wine-link';

      listItem.appendChild(link);
      wineListElement.appendChild(listItem);
    });
  } else {
    const listItem = document.createElement('li');
    listItem.textContent = 'Please select a valid category.';
    wineListElement.appendChild(listItem);
  }
}
