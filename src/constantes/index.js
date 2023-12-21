import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from '../assets/icons';
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from '../assets/images';

export const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#productos', label: 'Productos' },
  { href: '#contacto', label: 'Contacto' },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const estadisticas = [
  { value: '200+', label: 'Modelos' },
  { value: '5+', label: 'Tiendas' },
  { value: '2k+', label: 'Clientes' },
];

export const productos = [
  {
    imgURL: shoe4,
    nombre: 'Mike Air Jordan-01',
    price: '$200.20',
  },
  {
    imgURL: shoe5,
    nombre: 'Mike Air Jordan-10',
    price: '$199.999',
  },
  {
    imgURL: shoe6,
    nombre: 'Mike Air Jordan-100',
    price: '$87.999',
  },
  {
    imgURL: shoe7,
    nombre: 'Mike Air Jordan-001',
    price: '$230.20',
  },
];

export const servicios = [
  {
    imgURL: truckFast,
    label: 'Envío gratis',
    subtext: 'En compras de 3 pares de zapatillas o mas.',
  },
  {
    imgURL: shieldTick,
    label: 'Pagos seguros',
    subtext:
      'Total seguridad en tus transacciones con nuestros variados sistemas de pagos.',
  },
  {
    imgURL: support,
    label: 'Atención al cliente',
    subtext:
      'Ante cualquier inconveniente nuestro equipo está listo para asistirte.',
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: 'Morich Brown',
    rating: 4.5,
    feedback:
      'The attention to detail and the quality of the product exceeded my expectations. Highly recommended!',
  },
  {
    imgURL: customer2,
    customerName: 'Lota Mongeskar',
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: 'Products',
    links: [
      { name: 'Air Force 1', link: '/' },
      { name: 'Air Max 1', link: '/' },
      { name: 'Air Jordan 1', link: '/' },
      { name: 'Air Force 2', link: '/' },
      { name: 'Nike Waffle Racer', link: '/' },
      { name: 'Nike Cortez', link: '/' },
    ],
  },
  {
    title: 'Help',
    links: [
      { name: 'About us', link: '/' },
      { name: 'FAQs', link: '/' },
      { name: 'How it works', link: '/' },
      { name: 'Privacy policy', link: '/' },
      { name: 'Payment policy', link: '/' },
    ],
  },
  {
    title: 'Get in touch',
    links: [
      { name: 'customer@nike.com', link: 'mailto:customer@nike.com' },
      { name: '+92554862354', link: 'tel:+92554862354' },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: 'facebook logo' },
  { src: twitter, alt: 'twitter logo' },
  { src: instagram, alt: 'instagram logo' },
];
