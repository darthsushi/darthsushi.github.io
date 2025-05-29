const CHAPTERS = [
  { scenes: ['1.webm', '2.webp', '3.webp', '4.webp', '5.webp', '6.webp', '7.webp' ], locked: false, id: 'chapter1', title: 'Capitulo 1', class: 'mt-[-110px] lg:mt-[-175px]' },
  { scenes: ['1.webp', '2.webp', '3.webp', '4.webp', '5.webp', '6.webp', '7.webm', '8.webp' ], locked: true, id: 'chapter2', title: 'Capitulo 2' },
  { scenes: ['1.webp', '2.webp', '3.webp', '4.webp', '5.webp', '6.webm', '7.webp', '8.webp' ], locked: true, id: 'chapter3', title: 'Capitulo 3' },
  { scenes: ['1.webp', '2.webp', '3.webp', '4.webp', '5.webp', '6.webp', '7.webp', '8.webp' ], locked: true, id: 'chapter4', title: 'Capitulo 4' },
  { scenes: ['1.webp', '2.webp', '3.webp', '4.webp', '5.webp', '6.webp', '7.webp', '8.webp' ], locked: true, id: 'chapter5', title: 'Capitulo 5' },
  { scenes: ['1.webp', '2.webp', '3.webp', '4.webp', '5.webp', '6.webp' ], locked: true, id: 'chapter6', title: 'Capitulo 6' },
]

const MERCH = [
  {
    name: "Gorra de Altair",
    price: 250,
    id: '00001',
    description: "Para quienes creen que cada estrella guarda una historia.Gorra blanca con estrella bordada al frente y logo Cartas a Altair en la parte trasera.",
    photos: [
      "gorra-1.png",
      "gorra-2.png",
    ]
  },
  {
    name: "T-Shirt Lazo Eterno",
    price: 320,
    description: "Para quienes creen que el lazo entre estrellas es eterno.Camiseta blanca con ilustración trasera, logo al frente, estampado DTF y tela de algodón.",
    size: ['S', 'M', 'L', 'XL', 'XXL'],
    id: '00002',
    photos: [
      "camisa-1.png",
      "camisa-2.png",
    ]
  },
  {
    name: "Totebag Camino Estelar",
    price: 100,
    id: '00003',
    description: "Para quienes siguen su camino hacia nuevas estrellas. Tote bag de color crudo de algodón, resistente, ligera y con estilo para acompañarte en el día a día.",
    photos: [
      "totebag-1.png",
    ]
  },
  {
    name: "Llavero Altair",
    price: 70,
    id: '00004',
    description: "Un toque del universo de Altair para llevar contigo. Llavero morado con logo de Cartas a Altair, hecho de acrílico resistente y aro metálico.",
    photos: [
      "llavero-1.png",
    ]
  },
  {
    name: "Pin Altair",
    price: 20,
    id: '00006',
    description: "Añade un guiño brillante a tu historia. Pin morado de metal esmaltado con el logo de Cartas a Altair. Resistente y lleno de estilo.",
    photos: [
      "pin-altair.png",
    ]
  },
  {
    name: "Pin Carta de Altair",
    price: 20,
    id: '00007',
    description: "Añade un guiño brillante a tu historia. Pin rosado de metal esmaltado con el diseño de la carta de Cartas a Altair. Resistente y lleno de estilo.",
    photos: [
      "pincarta-altair.png",
    ]
  },
  {
    name: "Pin Lazo Eterno",
    price: 20,
    id: '00008',
    description: "Añade un guiño brillante a tu historia.Pin claro de metal esmaltado con la ilustración de Itara y su abuelo.Resistente y lleno de estilo.",
    photos: [
      "pinlazo-altair.png",
    ]
  },
  {
    name: "Funda Estelar",
    price: 350,
    description: "Para quienes llevan las estrellas con ellas.Funda transparente con estrellas, diseñada para proteger tu dispositivo con un toque celestial.",
    id: '00009',
    photos: [
      "fundaestelar-altair.png",
    ],
    variants: [
      'iPhone 16 Pro Max',
      'iPhone 16 Pro',
      'iPhone 15 Pro Max',
      'iPhone 15 Pro',
      'iPhone 14',
      'iPhone 13',
      'iPhone 12',
    ]
  },
  {
    name: "Funda Constelación",
    price: 350,
    id: '00010',
    description: "Para quienes llevan las estrellas con ellas. Funda transparente con estrellas, diseñada para proteger tu dispositivo con un toque celestial.",
    photos: [
      "fundaconstelacion-altair.png",
    ],
    variants: [
      'iPhone 16 Pro Max',
      'iPhone 16 Pro',
      'iPhone 15 Pro Max',
      'iPhone 15 Pro',
      'iPhone 14',
      'iPhone 13',
      'iPhone 12',
    ]
  },
  {
    name: "Stickers de Altair",
    price: 20,
    id: '000011',
    description: "Para los que hacen del arte parte de su día a día. Paquete con 10 stickers ilustrados, perfectos para personalizar tu espacio y objetos favoritos.",
    photos: [
      "stickers-altair.png",
    ]
  },
  {
    name: "Photocards de Altair",
    price: 20,
    id: '000110',
    description: "Lleva contigo un instante del universo de Itara. Paquete con dos photocards de Itara y los personajes principales. Perfectas para coleccionar o regalar.",
    photos: [
      "photocard-altair.png",
    ]
  },
  {
    name: "Cartas a Altair: Novela Completa",
    price: 400,
    id: '00000',
    unlockbook: true,
    hasGifs: true,
    description: "Tu viaje empieza aquí. La novela completa te permite sumergirte de principio a fin en la historia de Itara. Ideal para quienes quieren vivir la experiencia completa sin interrupciones.",
    photos: [
      "portadanovela-altair.png",
    ]
  },
]

export { CHAPTERS, MERCH }
