import type { Product } from "@/types"

// Productos destacados para la página de inicio
export const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Manzanas Rojas Premium",
    description:
      "Manzanas rojas frescas y jugosas, perfectas para snacks o postres. Cultivadas de manera sostenible sin pesticidas dañinos.",
    price: 2.99,
    image:
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80",
    category: "Frutas y Verduras",
    discount: 0,
    stock: 100,
    rating: 4.5,
    reviews: 28,
  },
  {
    id: "2",
    name: "Leche Entera Orgánica",
    description:
      "Leche entera orgánica de vacas alimentadas con pasto, sin hormonas añadidas. Perfecta para toda la familia.",
    price: 3.49,
    image:
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80",
    category: "Lácteos",
    discount: 10,
    stock: 50,
    rating: 4.8,
    reviews: 42,
  },
  {
    id: "3",
    name: "Pan Integral Artesanal",
    description:
      "Pan integral artesanal horneado diariamente con granos enteros. Rico en fibra y nutrientes esenciales.",
    price: 4.99,
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80",
    category: "Panadería",
    discount: 0,
    stock: 30,
    rating: 4.7,
    reviews: 36,
  },
  {
    id: "4",
    name: "Filete de Salmón Fresco",
    description: "Filete de salmón fresco del Atlántico, rico en omega-3. Ideal para una cena saludable y deliciosa.",
    price: 12.99,
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80",
    category: "Pescadería",
    discount: 15,
    stock: 20,
    rating: 4.9,
    reviews: 54,
  },
  {
    id: "5",
    name: "Aguacates Hass",
    description:
      "Aguacates Hass maduros y listos para comer, perfectos para guacamole o para acompañar cualquier plato.",
    price: 1.99,
    image:
      "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80",
    category: "Frutas y Verduras",
    discount: 0,
    stock: 75,
    rating: 4.6,
    reviews: 31,
  },
  {
    id: "6",
    name: "Café Orgánico Tostado",
    description: "Café orgánico de comercio justo, tostado medio, 340g. Aroma intenso y sabor equilibrado.",
    price: 8.99,
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80",
    category: "Despensa",
    discount: 5,
    stock: 40,
    rating: 4.8,
    reviews: 67,
  },
  {
    id: "7",
    name: "Yogurt Griego Natural",
    description:
      "Yogurt griego natural, alto en proteínas y sin azúcares añadidos. Perfecto para desayunos y snacks saludables.",
    price: 3.99,
    image:
      "https://images.unsplash.com/photo-1584278860047-22db9ff82bed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80",
    category: "Lácteos",
    discount: 0,
    stock: 60,
    rating: 4.5,
    reviews: 42,
  },
  {
    id: "8",
    name: "Pollo Entero Orgánico",
    description:
      "Pollo entero orgánico criado en libertad, sin antibióticos. Carne tierna y jugosa para toda la familia.",
    price: 9.99,
    image:
      "https://images.unsplash.com/photo-1587593810167-a84920ea0781?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80",
    category: "Carnicería",
    discount: 0,
    stock: 15,
    rating: 4.7,
    reviews: 29,
  },
]

// Todos los productos para la página de productos
export const allProducts: Product[] = [
  ...featuredProducts,
  {
    id: "9",
    name: "Pasta Italiana Artesanal",
    description:
      "Pasta italiana artesanal hecha con sémola de trigo duro y agua. Textura perfecta para cualquier salsa.",
    price: 2.99,
    image:
      "https://images.unsplash.com/photo-1556761223-4c4282c73f77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80",
    category: "Despensa",
    discount: 0,
    stock: 80,
    rating: 4.4,
    reviews: 38,
  },
  {
    id: "10",
    name: "Aceite de Oliva Extra Virgen",
    description:
      "Aceite de oliva extra virgen prensado en frío, 500ml. Sabor intenso y afrutado, ideal para ensaladas y platos mediterráneos.",
    price: 11.99,
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80",
    category: "Despensa",
    discount: 0,
    stock: 45,
    rating: 4.9,
    reviews: 72,
  },
  {
    id: "11",
    name: "Queso Parmesano Añejo",
    description:
      "Queso parmesano añejado 24 meses, perfecto para pasta y ensaladas. Sabor intenso y textura granulada.",
    price: 7.99,
    image:
      "https://images.unsplash.com/photo-1552767059-ce182ead6c1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80",
    category: "Lácteos",
    discount: 0,
    stock: 25,
    rating: 4.8,
    reviews: 45,
  },
  {
    id: "12",
    name: "Vino Tinto Reserva",
    description:
      "Vino tinto reserva, añejado en barricas de roble, 750ml. Notas de frutos rojos y especias con un final elegante.",
    price: 15.99,
    image:
      "https://images.unsplash.com/photo-1553361371-9b22f78a0b98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80",
    category: "Bebidas",
    discount: 10,
    stock: 30,
    rating: 4.7,
    reviews: 58,
  },
  {
    id: "13",
    name: "Chocolate Negro 70%",
    description:
      "Chocolate negro 70% cacao, orgánico y de comercio justo, 100g. Intenso sabor con notas de frutos secos.",
    price: 3.49,
    image:
      "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80",
    category: "Dulces",
    discount: 0,
    stock: 50,
    rating: 4.6,
    reviews: 63,
  },
  {
    id: "14",
    name: "Miel Cruda de Flores",
    description:
      "Miel cruda de flores silvestres, sin pasteurizar, 500g. Dulce natural con propiedades beneficiosas para la salud.",
    price: 6.99,
    image:
      "https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80",
    category: "Despensa",
    discount: 0,
    stock: 40,
    rating: 4.9,
    reviews: 47,
  },
  {
    id: "15",
    name: "Huevos Orgánicos",
    description:
      "Huevos orgánicos de gallinas criadas en libertad, docena. Yemas de color intenso y sabor excepcional.",
    price: 4.99,
    image:
      "https://images.unsplash.com/photo-1506976785307-8732e854ad03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80",
    category: "Lácteos",
    discount: 0,
    stock: 60,
    rating: 4.7,
    reviews: 39,
  },
  {
    id: "16",
    name: "Arroz Basmati",
    description: "Arroz basmati de grano largo, aromático, 1kg. Perfecto para acompañar curries y platos asiáticos.",
    price: 5.99,
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80",
    category: "Despensa",
    discount: 5,
    stock: 70,
    rating: 4.5,
    reviews: 52,
  },
  {
    id: "17",
    name: "Detergente Ecológico",
    description:
      "Detergente ecológico concentrado para ropa, biodegradable, 1L. Limpieza eficaz respetando el medio ambiente.",
    price: 8.99,
    image:
      "https://images.unsplash.com/photo-1583290005191-0a5f8201f3da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80",
    category: "Limpieza",
    discount: 0,
    stock: 35,
    rating: 4.4,
    reviews: 28,
  },
  {
    id: "18",
    name: "Papel Higiénico Reciclado",
    description: "Papel higiénico 100% reciclado, suave y resistente, 12 rollos. Una opción sostenible para tu hogar.",
    price: 9.99,
    image:
      "https://images.unsplash.com/photo-1584556812952-905ffd0c611a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80",
    category: "Limpieza",
    discount: 15,
    stock: 50,
    rating: 4.3,
    reviews: 34,
  },
  {
    id: "19",
    name: "Cerveza Artesanal IPA",
    description:
      "Cerveza artesanal IPA, notas cítricas y amargas, 6 botellas. Elaborada con ingredientes de primera calidad.",
    price: 12.99,
    image:
      "https://images.unsplash.com/photo-1566633806327-68e152aaf26d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80",
    category: "Bebidas",
    discount: 0,
    stock: 40,
    rating: 4.8,
    reviews: 67,
  },
  {
    id: "20",
    name: "Galletas de Avena y Pasas",
    description:
      "Galletas artesanales de avena y pasas, sin conservantes, 250g. Dulces y crujientes, perfectas para el té.",
    price: 3.99,
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80",
    category: "Panadería",
    discount: 0,
    stock: 45,
    rating: 4.6,
    reviews: 41,
  },
  {
    id: "21",
    name: "Tomates Orgánicos",
    description:
      "Tomates orgánicos cultivados localmente, perfectos para ensaladas y salsas caseras. Sabor dulce y jugoso.",
    price: 2.49,
    image:
      "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80",
    category: "Frutas y Verduras",
    discount: 0,
    stock: 80,
    rating: 4.7,
    reviews: 36,
  },
  {
    id: "22",
    name: "Pechuga de Pavo Ahumada",
    description: "Pechuga de pavo ahumada, baja en grasa, ideal para sándwiches, 200g. Sabor suave y textura jugosa.",
    price: 5.99,
    image:
      "https://images.unsplash.com/photo-1606728035253-49e8a23146de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80",
    category: "Carnicería",
    discount: 10,
    stock: 30,
    rating: 4.5,
    reviews: 29,
  },
  {
    id: "23",
    name: "Zumo de Naranja Recién Exprimido",
    description:
      "Zumo de naranja 100% natural, recién exprimido, sin azúcares añadidos, 1L. Refrescante y lleno de vitamina C.",
    price: 4.49,
    image:
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80",
    category: "Bebidas",
    discount: 0,
    stock: 25,
    rating: 4.9,
    reviews: 48,
  },
  {
    id: "24",
    name: "Almendras Tostadas",
    description:
      "Almendras tostadas sin sal, fuente de proteínas y grasas saludables, 250g. Snack nutritivo para cualquier momento.",
    price: 6.99,
    image:
      "https://images.unsplash.com/photo-1574570093367-84b0d1b45d8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80",
    category: "Snacks",
    discount: 0,
    stock: 55,
    rating: 4.7,
    reviews: 53,
  },
  {
    id: "25",
    name: "Quinoa Orgánica",
    description:
      "Quinoa orgánica de grano entero, rica en proteínas y fibra, 500g. Superalimento versátil para ensaladas y guarniciones.",
    price: 7.49,
    image:
      "https://images.unsplash.com/photo-1612708335403-7ddc0abca8cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80",
    category: "Despensa",
    discount: 0,
    stock: 60,
    rating: 4.8,
    reviews: 42,
  },
  {
    id: "26",
    name: "Mermelada de Fresa Casera",
    description:
      "Mermelada de fresa elaborada artesanalmente con fruta fresca y azúcar de caña, 250g. Dulce natural para tus desayunos.",
    price: 4.29,
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80",
    category: "Despensa",
    discount: 0,
    stock: 40,
    rating: 4.6,
    reviews: 37,
  },
  {
    id: "27",
    name: "Té Verde Orgánico",
    description:
      "Té verde orgánico de alta calidad, rico en antioxidantes, 50 bolsitas. Refrescante y beneficioso para la salud.",
    price: 5.99,
    image:
      "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80",
    category: "Bebidas",
    discount: 5,
    stock: 35,
    rating: 4.7,
    reviews: 46,
  },
  {
    id: "28",
    name: "Carne Molida Premium",
    description: "Carne molida de res premium, magra y fresca, 500g. Ideal para hamburguesas, albóndigas y salsas.",
    price: 8.99,
    image:
      "https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80",
    category: "Carnicería",
    discount: 0,
    stock: 25,
    rating: 4.8,
    reviews: 39,
  },
  {
    id: "29",
    name: "Plátanos Orgánicos",
    description: "Plátanos orgánicos maduros y dulces, racimo. Fruta versátil rica en potasio y energía natural.",
    price: 1.99,
    image:
      "https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80",
    category: "Frutas y Verduras",
    discount: 0,
    stock: 90,
    rating: 4.5,
    reviews: 32,
  },
  {
    id: "30",
    name: "Queso Cheddar Añejo",
    description:
      "Queso cheddar añejado 12 meses, sabor intenso y textura firme, 250g. Perfecto para tablas de quesos y sándwiches.",
    price: 6.49,
    image:
      "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80",
    category: "Lácteos",
    discount: 0,
    stock: 30,
    rating: 4.7,
    reviews: 43,
  },
  {
    id: "31",
    name: "Agua Mineral Natural",
    description:
      "Agua mineral natural de manantial, sin gas, pack de 6 botellas de 1L. Pura y refrescante, baja en sodio.",
    price: 4.99,
    image:
      "https://images.unsplash.com/photo-1564419320461-6870880221ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80",
    category: "Bebidas",
    discount: 10,
    stock: 100,
    rating: 4.4,
    reviews: 27,
  },
  {
    id: "32",
    name: "Jabón de Manos Natural",
    description:
      "Jabón de manos natural con aceites esenciales, sin químicos agresivos, 500ml. Limpia y cuida tu piel.",
    price: 3.99,
    image:
      "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80",
    category: "Limpieza",
    discount: 0,
    stock: 45,
    rating: 4.6,
    reviews: 38,
  },
  {
    id: "33",
    name: "Cereal Integral con Frutas",
    description:
      "Cereal integral con frutas deshidratadas, sin azúcares añadidos, 400g. Desayuno nutritivo y energético.",
    price: 5.49,
    image:
      "https://images.unsplash.com/photo-1517747614396-d21a5925e785?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80",
    category: "Despensa",
    discount: 0,
    stock: 55,
    rating: 4.5,
    reviews: 41,
  },
  {
    id: "34",
    name: "Aceitunas Verdes Rellenas",
    description: "Aceitunas verdes rellenas de pimiento, 350g. Aperitivo clásico con sabor mediterráneo.",
    price: 3.29,
    image:
      "https://images.unsplash.com/photo-1632382394883-06c5a6b30a0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80",
    category: "Despensa",
    discount: 0,
    stock: 60,
    rating: 4.4,
    reviews: 29,
  },
  {
    id: "35",
    name: "Helado de Vainilla Artesanal",
    description:
      "Helado de vainilla elaborado artesanalmente con ingredientes naturales, 500ml. Cremoso y con auténtico sabor a vainilla.",
    price: 6.99,
    image:
      "https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80",
    category: "Congelados",
    discount: 0,
    stock: 20,
    rating: 4.9,
    reviews: 56,
  },
  {
    id: "36",
    name: "Atún en Conserva",
    description:
      "Atún en conserva al natural, sin aceites añadidos, pack de 3 latas de 80g. Rico en proteínas y omega-3.",
    price: 4.79,
    image:
      "https://images.unsplash.com/photo-1597733153203-a54d0fbc47de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80",
    category: "Despensa",
    discount: 0,
    stock: 70,
    rating: 4.3,
    reviews: 31,
  },
  {
    id: "37",
    name: "Espinacas Frescas",
    description: "Espinacas frescas y tiernas, cultivadas localmente, 250g. Ricas en hierro y vitaminas esenciales.",
    price: 1.99,
    image:
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80",
    category: "Frutas y Verduras",
    discount: 0,
    stock: 40,
    rating: 4.6,
    reviews: 27,
  },
  {
    id: "38",
    name: "Hamburguesas Vegetales",
    description:
      "Hamburguesas vegetales a base de garbanzos y verduras, pack de 4 unidades. Alternativa sabrosa y nutritiva a la carne.",
    price: 5.99,
    image:
      "https://images.unsplash.com/photo-1520072959219-c595dc870360?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80",
    category: "Congelados",
    discount: 10,
    stock: 25,
    rating: 4.4,
    reviews: 36,
  },
  {
    id: "39",
    name: "Pasta de Dientes Natural",
    description:
      "Pasta de dientes con ingredientes naturales, sin flúor ni químicos agresivos, 100ml. Limpieza efectiva y respetuosa.",
    price: 3.49,
    image:
      "https://images.unsplash.com/photo-1612487528505-d2338264c821?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80",
    category: "Higiene",
    discount: 0,
    stock: 50,
    rating: 4.5,
    reviews: 42,
  },
  {
    id: "40",
    name: "Nueces Mixtas",
    description:
      "Mezcla de nueces premium: almendras, anacardos, nueces y avellanas, 300g. Snack nutritivo rico en grasas saludables.",
    price: 8.99,
    image:
      "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80",
    category: "Snacks",
    discount: 5,
    stock: 35,
    rating: 4.8,
    reviews: 49,
  },
]
