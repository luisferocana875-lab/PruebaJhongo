import { Product } from '../services/cart.service';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Camiseta Lino Orgánico',
    price: 45,
    category: 'Hombre',
    img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
    description: 'Nuestra camiseta insignia, diseñada para quienes valoran la libertad de movimiento y la frescura natural. Fabricada con lino 100% orgánico cultivado de forma sostenible.',
    features: ['Transpirabilidad extrema', 'Tejido antibacteriano natural', 'Corte relajado atemporal'],
    specs: [
      { label: 'Material', value: '100% Lino Orgánico' },
      { label: 'Origen', value: 'Hecho en España' },
      { label: 'Cuidado', value: 'Lavar en frío, secar al aire' }
    ]
  },
  {
    id: '2',
    name: 'Vestido Seda Minimalista',
    price: 120,
    category: 'Mujer',
    img: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=800',
    description: 'La elegancia no necesita gritar. Este vestido de seda pura fluye con tu cuerpo, ofreciendo una silueta sofisticada para cualquier ocasión especial o uso diario elevado.',
    features: ['Seda de morera premium', 'Caída fluida natural', 'Costuras invisibles'],
    specs: [
      { label: 'Material', value: '100% Seda de Morera' },
      { label: 'Forro', value: 'Sin forro para máxima ligereza' },
      { label: 'Ajuste', value: 'Slim fit elegante' }
    ]
  },
  {
    id: '3',
    name: 'Pantalón Chino Slim',
    price: 89,
    category: 'Hombre',
    img: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&q=80&w=800',
    description: 'El equilibrio perfecto entre lo formal y lo casual. Un pantalón que se adapta a tu ritmo de vida, manteniendo siempre una apariencia impecable y profesional.',
    features: ['Algodón con elastano', 'Bolsillos reforzados', 'Resistente a arrugas'],
    specs: [
      { label: 'Material', value: '98% Algodón, 2% Elastano' },
      { label: 'Cierre', value: 'Cremallera YKK premium' },
      { label: 'Estilo', value: 'Chino contemporáneo' }
    ]
  },
  {
    id: '4',
    name: 'Gafas de Sol Aviador',
    price: 155,
    category: 'Accesorios',
    img: 'https://images.unsplash.com/photo-1511499767390-90342f16b127?auto=format&fit=crop&q=80&w=800',
    description: 'Protección visual con un diseño que nunca pasa de moda. Montura de titanio ultraligera y cristales polarizados de alta definición para una claridad sin igual.',
    features: ['Protección UV400 total', 'Montura de titanio grado médico', 'Lentes resistentes a arañazos'],
    specs: [
      { label: 'Montura', value: 'Titanio Mate' },
      { label: 'Lentes', value: 'Polarizadas HD' },
      { label: 'Peso', value: '18 gramos' }
    ]
  },
  {
    id: '5',
    name: 'Sudadera Oversize Algodón',
    price: 65,
    category: 'Nuevo',
    img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800',
    description: 'Comodidad absoluta sin sacrificar el estilo. Nuestra sudadera oversize es la pieza definitiva para tus días de descanso o para un look urbano sofisticado.',
    features: ['Interior cepillado suave', 'Puños elásticos duraderos', 'Capucha de doble capa'],
    specs: [
      { label: 'Material', value: '100% Algodón Pesado' },
      { label: 'Peso del tejido', value: '400 GSM' },
      { label: 'Corte', value: 'Oversize intencional' }
    ]
  },
  {
    id: '6',
    name: 'Bolso de Piel Vegana',
    price: 145,
    category: 'Accesorios',
    img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800',
    description: 'Lujo ético en tus manos. Este bolso combina la textura premium de la piel con un compromiso total hacia el bienestar animal y la sostenibilidad ambiental.',
    features: ['Piel de cactus innovadora', 'Herrajes de latón reciclado', 'Compartimento para portátil'],
    specs: [
      { label: 'Material', value: 'Piel de Cactus' },
      { label: 'Dimensiones', value: '40 x 30 x 12 cm' },
      { label: 'Certificación', value: 'PETA-Approved Vegan' }
    ]
  }
];
