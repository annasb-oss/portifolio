import { Product, CustomerReview } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'cheesy-immature',
    name: 'Cheesy Immature',
    flavor: 'CHEESY IMMATURE ANNA SILVA',
    tagline: 'Mature cheddar taste without the dairy. The ultimate pasta dusting.',
    price: 6.50,
    weight: '100g Pouch',
    color: '#065c4c',
    textColor: '#fde01a',
    accentColor: '#fde01a',
    badge: '#1 BEST SELLER',
    description: 'Our award-winning nutritional yeast flakes seasoned with natural herbs, garlic and umami botanicals for an uncanny mature cheddar punch. Shake it over pasta, popcorn, roasted broccoli or avocado toast.',
    ingredients: ['Primary Inactive Yeast', 'Natural Savoury Flavouring', 'Garlic Powder', 'Sea Salt', 'Thiamine (B1)', 'Riboflavin (B2)', 'Niacin (B3)', 'Vitamin B12'],
    nutrition: {
      protein: '8.4g',
      b12: '240% RI',
      calories: '68 kcal',
      sugar: '0.2g'
    },
    pairsWith: ['Spaghetti Aglio e Olio', 'Hot Popcorn', 'Caesar Salads', 'Mac & Cheese'],
    rating: 4.9,
    reviewCount: 382
  },
  {
    id: 'creative-campaign',
    name: 'Campanha Criativa',
    flavor: 'CREATIVE CAMPAIGN ANNA SILVA',
    tagline: 'Direção de arte e conceito visual para campanhas integradas.',
    price: 6.50,
    weight: 'Case #02',
    color: '#df0b76',
    textColor: '#ffffff',
    accentColor: '#fde01a',
    badge: 'DIREÇÃO DE ARTE',
    description: 'All the rich, caramelized smokiness of a sizzling grill, in an airy crunch. Completely free of animal ingredients, gluten, and MSG. Gives instant burger, soup, and baked potato magic.',
    ingredients: ['Primary Inactive Yeast', 'Smoked Sea Salt', 'Sweet Paprika', 'Natural Hickory Smoke Extract', 'Onion Powder', 'Vitamin B12'],
    nutrition: {
      protein: '8.1g',
      b12: '240% RI',
      calories: '70 kcal',
      sugar: '0.1g'
    },
    pairsWith: ['Smash Burgers', 'Loaded Baked Potatoes', 'Creamy Tomato Soup', 'Avocado Toast'],
    rating: 4.95,
    reviewCount: 294
  },
  {
    id: 'garlic-herb',
    name: 'Garlic & Herb',
    flavor: 'ROASTED GARLIC & HERB ANNA SILVA',
    tagline: 'Slow-roasted garlic sweetness meets wild Mediterranean oregano.',
    price: 6.50,
    weight: '100g Pouch',
    color: '#1a56db',
    textColor: '#ffffff',
    accentColor: '#fde01a',
    badge: 'NEW CRUNCH',
    description: 'Roasted to golden perfection with sweet garlic cloves, rosemary, oregano, and nutritional yeast flakes. The Mediterranean secret weapon for pizza crusts and risotto.',
    ingredients: ['Primary Inactive Yeast', 'Roasted Garlic Powder', 'Wild Oregano', 'Crushed Rosemary', 'Sea Salt', 'Vitamin B12'],
    nutrition: {
      protein: '8.2g',
      b12: '240% RI',
      calories: '69 kcal',
      sugar: '0.3g'
    },
    pairsWith: ['Sourdough Pizza', 'Garlic Bread', 'Mushroom Risotto', 'Grilled Veggies'],
    rating: 4.85,
    reviewCount: 147
  },
  {
    id: 'chipotle-kick',
    name: 'Spicy Chipotle',
    flavor: 'SMOKY CHIPOTLE ANNA SILVA',
    tagline: 'Warm Mexican chipotle with gentle lime zest and cheese undertones.',
    price: 6.50,
    weight: '100g Pouch',
    color: '#d9480f',
    textColor: '#ffffff',
    accentColor: '#fde01a',
    badge: 'SPICY HIT',
    description: 'A fiery, smoky kick that wakes up tacos, chilli bowls, sweet potato fries, and roasted corn on the cob.',
    ingredients: ['Primary Inactive Yeast', 'Smoked Chipotle Peppers', 'Lime Crystals', 'Coriander', 'Sea Salt', 'Vitamin B12'],
    nutrition: {
      protein: '8.0g',
      b12: '240% RI',
      calories: '71 kcal',
      sugar: '0.4g'
    },
    pairsWith: ['Street Tacos', 'Elote / Grilled Corn', 'Chili con Carne', 'Sweet Potato Fries'],
    rating: 4.9,
    reviewCount: 183
  }
];

export const REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    author: 'Clara M.',
    location: 'Lisboa, Portugal',
    rating: 5,
    title: 'Transformou meu macarrão de quarta-feira!',
    content: 'O Cheesy Immature da Anna Silva tem exatamente o sabor forte e queijudo que faltava no mercado vegano. Meus filhos nem perceberam que não é parmesão ralado!',
    flavorBought: 'Cheesy Immature',
    date: 'Há 2 dias',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Marcus V.',
    location: 'São Paulo, Brasil',
    rating: 5,
    title: 'O Smoky Bacon nos hambúrgueres é absurdo',
    content: 'Comprei por curiosidade pelo design incrível do pacote e me apaixonei. O cheiro de defumado quando abre o pacote é real e o crocante é sensacional.',
    flavorBought: 'Smoky Bacon',
    date: 'Há 4 dias',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Elena R.',
    location: 'Porto, Portugal',
    rating: 5,
    title: 'Rico em Vitamina B12 e sabor inacreditável',
    content: 'Como nutricionista esportiva, recomendo sempre aos pacientes. 8 gramas de proteína pura e 240% de B12 numa colherada deliciosa.',
    flavorBought: 'All-Star Trio',
    date: 'Há 1 semana',
    verified: true
  }
];
