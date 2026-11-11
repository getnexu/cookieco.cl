/* COOKIE.CO — fuente de datos editable del catálogo.
   Fuente: menús oficiales 01-09-2026 y 08-09-2026. Montos en enteros CLP.
   Nada de esto vive dentro de los componentes visuales. */

export const CONFIG = {
  marca: 'COOKIE.CO',
  submarca: 'by Lu Bakery',
  ciudad: 'Santiago de Chile',
  whatsapp: '56959416185',
  instagram: 'cookie.co_cl',
  pesoCookie: 130,
  moneda: 'CLP',
};

/* Plazo mínimo: 48 horas de anticipación (Políticas §2, sept. 2026) */
export const PLAZO_HORAS = 48;

export const ENTREGA = [
  { id: 'retiro', label: 'Retiro en La Florida', costo: 0, nota: 'Horario se coordina por WhatsApp.' },
  { id: 'metro', label: 'Entrega en estación de Metro', costo: 1000, nota: 'Previa coordinación. Estaciones POR CONFIRMAR.' },
  { id: 'despacho', label: 'Despacho a domicilio', costo: 3500, nota: 'A toda la Región Metropolitana.' },
];

export const CLUB = {
  nombre: 'Club Cookie.co',
  precio: 10000,
  saldoInicial: 10000,
  vigenciaMeses: 12,
  acumulacion: 0.10,
  descuentoCumple: 0.25,
};

export const EXTRAS = {
  regalo: { label: 'Presentación para regalo', costo: 2000, nota: 'Incluye cinta decorativa y tarjeta.' },
  recargoPremium: 1500,
  recargoEquilibrio: 1500,
};

export const CAJAS = [
  { size: 3, precio: 10500 },
  { size: 4, precio: 13500 },
  { size: 6, precio: 20000 },
  { size: 8, precio: 26000 },
  { size: 12, precio: 38000 },
  { size: 20, precio: 60000 },
  { size: 25, precio: 75000 },
];

export const LINEAS = {
  tradicional: { nombre: 'Línea Clásica', precio: 3500, eyebrow: 'Clásicas, irresistibles y siempre un buen plan.' },
  premium: { nombre: 'Cookies Premium', precio: 5000, eyebrow: 'Sabores únicos, para los amantes de lo extraordinario.' },
  equilibrio: { nombre: 'Línea Equilibrio', precio: 5000, eyebrow: 'Sin azúcar añadida. Endulzadas con alulosa.' },
};

/* Claims autorizados para Línea Equilibrio. No agregar nada aquí sin respaldo. */
export const CLAIMS_EQUILIBRIO = [
  'Sin azúcar añadida',
  'Endulzada con alulosa',
  'Sin harinas refinadas',
  'Apta para vegetarianos',
];

const P = 'assets/cookies/';

export const COOKIES = [
  {
    slug: 'nutella-classic', nombre: 'Nutella Classic', linea: 'tradicional', precio: 3500,
    foto: P + 'v2/nutella-classic.jpeg',
    corta: 'Masa de vainilla, chips de chocolate y centro de Nutella.',
    perfil: ['chocolatoso', 'cremoso'], dulzor: 3, stock: 'disponible', destacado: true,
    ingredientes: ['Harina de trigo', 'Mantequilla', 'Azúcar', 'Huevo', 'Chips de chocolate', 'Crema de avellanas'],
    alergenos: ['Gluten', 'Lácteos', 'Huevo', 'Frutos secos (avellana)'],
  },
  {
    slug: 'nutella-pop', nombre: 'Nutella Pop', linea: 'tradicional', precio: 3500,
    foto: P + 'v2/nutella-pop.jpeg',
    corta: 'Masa de vainilla, chips de chocolate, M&M\u2019s y centro de Nutella.',
    perfil: ['chocolatoso', 'cremoso'], dulzor: 4, stock: 'disponible', destacado: true,
    ingredientes: ['Harina de trigo', 'Mantequilla', 'Azúcar', 'Huevo', 'Chips de chocolate', 'Confites de chocolate', 'Crema de avellanas'],
    alergenos: ['Gluten', 'Lácteos', 'Huevo', 'Frutos secos (avellana)', 'Soya'],
  },
  {
    slug: 'oreo-tella', nombre: 'Oreo-Tella', linea: 'tradicional', precio: 3500,
    foto: P + 'v2/oreo-tella.jpeg',
    corta: 'Masa de vainilla, chips de chocolate, Oreo, chocolate blanco y Nutella.',
    perfil: ['chocolatoso', 'cremoso'], dulzor: 4, stock: 'disponible', destacado: true,
    ingredientes: ['Harina de trigo', 'Mantequilla', 'Azúcar', 'Huevo', 'Galleta de cacao', 'Chocolate blanco', 'Crema de avellanas'],
    alergenos: ['Gluten', 'Lácteos', 'Huevo', 'Frutos secos (avellana)', 'Soya'],
  },
  {
    slug: 'nucita-duo', nombre: 'Nucita Duo', linea: 'tradicional', precio: 3500,
    foto: P + 'v2/nucita-duo.jpeg',
    corta: 'Masa mitad vainilla y mitad chocolate, rellena de chocolate blanco y crema de avellanas.',
    perfil: ['chocolatoso', 'cremoso'], dulzor: 4, stock: 'disponible',
    nota: 'Disponible también en masa de vainilla.',
    ingredientes: ['Harina de trigo', 'Mantequilla', 'Azúcar', 'Huevo', 'Cacao', 'Chocolate blanco', 'Crema de avellanas'],
    alergenos: ['Gluten', 'Lácteos', 'Huevo', 'Frutos secos (avellana)'],
  },
  {
    slug: 'bon-bon-crunch', nombre: 'Bon Bon Crunch', linea: 'tradicional', precio: 3500,
    foto: P + 'v2/bon-bon-crunch.jpeg',
    corta: 'Masa de vainilla con chips de chocolate y un Bon o Bon al centro. Coronada con una galleta Bon o Bon.',
    perfil: ['chocolatoso', 'crujiente'], dulzor: 4, stock: 'disponible',
    ingredientes: ['Harina de trigo', 'Mantequilla', 'Azúcar', 'Huevo', 'Chips de chocolate', 'Bombón de maní'],
    alergenos: ['Gluten', 'Lácteos', 'Huevo', 'Maní', 'Soya'],
  },
  {
    slug: 'smores', nombre: 'S\u2019mores', linea: 'tradicional', precio: 3500,
    foto: P + 'v2/smores.jpeg',
    corta: 'Masa de vainilla con chips de chocolate, relleno de chocolate fundido y masmelo rostizado.',
    perfil: ['chocolatoso'], dulzor: 4, stock: 'disponible', destacado: true,
    ingredientes: ['Harina de trigo', 'Mantequilla', 'Azúcar', 'Huevo', 'Chips de chocolate', 'Masmelo'],
    alergenos: ['Gluten', 'Lácteos', 'Huevo', 'Soya'],
  },
  {
    slug: 'red-velvet-dream', nombre: 'Red Velvet Dream', linea: 'tradicional', precio: 3500,
    foto: P + 'v2/red-velvet-dream.jpeg',
    corta: 'Masa Red Velvet con chocolate blanco y frosting de queso crema.',
    perfil: ['cremoso'], dulzor: 3, stock: 'disponible',
    ingredientes: ['Harina de trigo', 'Mantequilla', 'Azúcar', 'Huevo', 'Cacao', 'Colorante', 'Chocolate blanco', 'Queso crema'],
    alergenos: ['Gluten', 'Lácteos', 'Huevo', 'Soya'],
  },
  {
    slug: 'manjar-nuez', nombre: 'Manjar Nuez', linea: 'tradicional', precio: 3500,
    foto: P + 'v2/manjar-nuez.jpeg',
    corta: 'Masa de vainilla con manjar y nueces.',
    perfil: ['cremoso', 'crujiente'], dulzor: 4, stock: 'pocas',
    ingredientes: ['Harina de trigo', 'Mantequilla', 'Azúcar', 'Huevo', 'Manjar', 'Nueces'],
    alergenos: ['Gluten', 'Lácteos', 'Huevo', 'Frutos secos (nuez)'],
  },
  {
    slug: 'lemon-pie', nombre: 'Lemon Pie', linea: 'tradicional', precio: 3500,
    foto: P + 'v2/lemon-pie.jpeg',
    corta: 'Masa de vainilla con un toque de limón, chips de chocolate blanco y relleno cremoso de pie de limón.',
    perfil: ['citrico', 'cremoso'], dulzor: 2, stock: 'disponible', destacado: true,
    ingredientes: ['Harina de trigo', 'Mantequilla', 'Azúcar', 'Huevo', 'Limón', 'Chocolate blanco', 'Leche condensada'],
    alergenos: ['Gluten', 'Lácteos', 'Huevo', 'Soya'],
  },
  {
    slug: 'tropical-pie', nombre: 'Tropical Pie', linea: 'tradicional', precio: 3500,
    foto: P + 'v2/tropical-pie.jpeg',
    corta: 'Masa de vainilla con un toque de maracuyá, chips de chocolate blanco y relleno tradicional de pie de maracuyá.',
    perfil: ['citrico', 'frutal', 'cremoso'], dulzor: 2, stock: 'disponible',
    ingredientes: ['Harina de trigo', 'Mantequilla', 'Azúcar', 'Huevo', 'Maracuyá', 'Chocolate blanco', 'Leche condensada'],
    alergenos: ['Gluten', 'Lácteos', 'Huevo', 'Soya'],
  },

  {
    slug: 'ferrero-royale', nombre: 'Ferrero Royale', linea: 'premium', precio: 5000,
    foto: P + 'v2/ferrero-royale.jpeg', deluxe: true,
    corta: 'Masa de chocolate, Nutella y Ferrero Rocher.',
    perfil: ['chocolatoso', 'cremoso', 'crujiente'], dulzor: 4, stock: 'disponible', destacado: true,
    ingredientes: ['Harina de trigo', 'Mantequilla', 'Azúcar', 'Huevo', 'Cacao', 'Crema de avellanas', 'Bombón de avellana'],
    alergenos: ['Gluten', 'Lácteos', 'Huevo', 'Frutos secos (avellana)', 'Soya'],
  },

  {
    slug: 'brownie-melt', nombre: 'Brownie Melt', linea: 'premium', precio: 5000,
    foto: P + 'v2/brownie-melt.jpeg',
    corta: 'Masa de vainilla con chips de chocolate, rellena de Nutella y brownie especial Cookie.co.',
    perfil: ['chocolatoso', 'cremoso'], dulzor: 4, stock: 'disponible',
    ingredientes: ['Masa de vainilla', 'Chips de chocolate', 'Nutella', 'Brownie especial Cookie.co'],
    alergenos: ['Gluten', 'Lácteos', 'Huevo', 'Frutos secos (avellana)', 'Soya'],
  },
  {
    slug: 'cheesecake-berries', nombre: 'Cheesecake Berries', linea: 'tradicional', precio: 3500, nueva: true,
    foto: P + 'v2/nuevas/cheesecake-berries.jpeg',
    corta: 'Masa de vainilla con chocolate blanco y cranberries, rellena de cheesecake con mermelada de berries.',
    perfil: ['frutal'], dulzor: 3, stock: 'disponible', destacado: true,
    ingredientes: ['Masa de vainilla', 'Chocolate blanco', 'Cranberries', 'Relleno de cheesecake', 'Mermelada de berries'],
    alergenos: ['Gluten', 'Lácteos', 'Huevo', 'Soya'],
  },

  {
    slug: 'oreo-tella-sin-azucar', nombre: 'Oreo-Tella sin azúcar añadida', linea: 'equilibrio', precio: 5000,
    foto: P + 'v2/oreo-tella-sin-azucar.jpg',
    corta: 'Base de harina de almendra, coco y avena, con trozos de chocolate amargo y leche sin azúcar en la masa. Rellena de crema de avellanas sin azúcar y galleta de cacao sin azúcar.',
    perfil: ['chocolatoso', 'cremoso'], dulzor: 2, stock: 'disponible', destacado: true,
    ingredientes: ['Harina de almendra', 'Harina de avena', 'Harina de coco', 'Alulosa', 'Chocolate amargo sin azúcar', 'Crema de avellanas sin azúcar'],
    alergenos: ['Frutos secos (almendra, avellana)', 'Lácteos', 'Huevo', 'Avena'],
  },
  {
    slug: 'nutella-pop-sin-azucar', nombre: 'Nutella Pop sin azúcar añadida', linea: 'equilibrio', precio: 5000,
    foto: P + 'v2/mani-crunch.jpg',
    corta: 'Base de harina de almendra, coco y avena, con confites de chocolate sin azúcar en la masa y relleno de crema de avellanas sin azúcar.',
    perfil: ['chocolatoso', 'cremoso'], dulzor: 2, stock: 'disponible',
    ingredientes: ['Harina de almendra', 'Harina de avena', 'Harina de coco', 'Alulosa', 'Confites sin azúcar', 'Crema de avellanas sin azúcar'],
    alergenos: ['Frutos secos (almendra, avellana)', 'Lácteos', 'Huevo', 'Avena'],
  },
  {
    slug: 'manjar-crunch', nombre: 'Manjar Crunch', linea: 'equilibrio', precio: 5000,
    foto: P + 'v2/manjar-crunch.jpeg',
    corta: 'Base de harina de almendra, coco y avena, con trozos de chocolate amargo sin azúcar y relleno de manjar sin azúcar.',
    perfil: ['cremoso', 'crujiente'], dulzor: 2, stock: 'disponible',
    ingredientes: ['Harina de almendra', 'Harina de avena', 'Harina de coco', 'Alulosa', 'Chocolate amargo sin azúcar', 'Manjar sin azúcar'],
    alergenos: ['Frutos secos (almendra)', 'Lácteos', 'Huevo', 'Avena'],
  },
  {
    slug: 'manjar-frambuesa', nombre: 'Manjar Frambuesa', linea: 'equilibrio', precio: 5000,
    foto: P + 'v2/manjar-frambuesa.jpeg',
    corta: 'Base de harina de almendra, coco y avena, con mix de frutos secos y maní, rellena de mermelada de frambuesa sin azúcar y manjar sin azúcar.',
    perfil: ['frutal', 'cremoso'], dulzor: 2, stock: 'disponible', destacado: true,
    ingredientes: ['Harina de almendra', 'Harina de avena', 'Harina de coco', 'Alulosa', 'Frutos secos', 'Maní', 'Mermelada de frambuesa sin azúcar', 'Manjar sin azúcar'],
    alergenos: ['Frutos secos', 'Maní', 'Lácteos', 'Huevo', 'Avena'],
  },
  {
    slug: 'mani-crunch', nombre: 'Maní Crunch', linea: 'equilibrio', precio: 5000,
    foto: P + 'v2/nutella-pop-sin-azucar.jpg',
    corta: 'Base de harina de almendra, coco y avena, con chocolate amargo sin azúcar en la masa y relleno de mantequilla de maní crunch.',
    perfil: ['crujiente', 'cremoso'], dulzor: 2, stock: 'disponible', destacado: true,
    ingredientes: ['Harina de almendra', 'Harina de avena', 'Harina de coco', 'Alulosa', 'Chocolate amargo sin azúcar', 'Mantequilla de maní'],
    alergenos: ['Frutos secos (almendra)', 'Maní', 'Huevo', 'Avena'],
  },
  {
    slug: 'mix-frutos-secos', nombre: 'Mix Frutos Secos', linea: 'equilibrio', precio: 4000,
    foto: P + 'v2/mix-frutos-secos.jpeg',
    corta: 'Base de harina de almendra, coco y avena, con mix de frutos secos en la masa: nueces, almendra y maní.',
    perfil: ['crujiente'], dulzor: 1, stock: 'disponible',
    ingredientes: ['Harina de almendra', 'Harina de avena', 'Harina de coco', 'Alulosa', 'Nueces', 'Almendras', 'Maní'],
    alergenos: ['Frutos secos', 'Maní', 'Huevo', 'Avena'],
  },
  {
    slug: 'protein', nombre: 'Cookie Protein', linea: 'equilibrio', precio: 5000, nueva: true,
    foto: P + 'v2/nuevas/protein.jpeg',
    corta: 'Una New York Cookie nutritiva y llena de sabor: base de harina de almendra, avena y coco, enriquecida con proteína en polvo y trozos de chocolate semiamargo. 18 g de proteína por galleta. Personalízala con tu relleno favorito.',
    perfil: ['chocolatoso', 'cremoso'], dulzor: 1, stock: 'disponible', destacado: true,
    rellenos: ['Mantequilla de maní', 'Nutella sin azúcar', 'Manjar sin azúcar'],
    ingredientes: ['Harina de almendra', 'Avena', 'Coco', 'Proteína en polvo', 'Chocolate semiamargo', 'Relleno a elección'],
    alergenos: ['Frutos secos (almendra)', 'Avena', 'Maní (si eliges mantequilla de maní)', 'Avellana (si eliges Nutella sin azúcar)', 'Lácteos (si eliges manjar sin azúcar)'],
  },
];

export const STOCK_LABEL = {
  disponible: { label: 'Disponible', tono: 'ok' },
  pocas: { label: 'Pocas unidades', tono: 'warn' },
  agotado: { label: 'Agotado', tono: 'off' },
  edicion: { label: 'Edición especial', tono: 'lila' },
  proximamente: { label: 'Próximamente', tono: 'off' },
};

export const QUIZ = [
  {
    id: 'perfil', pregunta: '¿Hacia dónde te tira el antojo?',
    opciones: [
      { label: 'Chocolate, mucho chocolate', valor: 'chocolatoso' },
      { label: 'Algo cítrico y fresco', valor: 'citrico' },
      { label: 'Frutal', valor: 'frutal' },
      { label: 'Cremoso y suave', valor: 'cremoso' },
    ],
  },
  {
    id: 'dulzor', pregunta: '¿Cuánto dulzor aguantas?',
    opciones: [
      { label: 'Suave, apenas', valor: 1 },
      { label: 'Equilibrado', valor: 2 },
      { label: 'Dulce de verdad', valor: 3 },
      { label: 'Sin límite', valor: 4 },
    ],
  },
  {
    id: 'textura', pregunta: '¿Qué te gana primero?',
    opciones: [
      { label: 'El crujido del borde', valor: 'crujiente' },
      { label: 'El centro que se derrama', valor: 'cremoso' },
      { label: 'Las dos cosas', valor: 'ambas' },
    ],
  },
  {
    id: 'azucar', pregunta: '¿Buscas algo sin azúcar añadida?',
    opciones: [
      { label: 'Sí, Línea Equilibrio', valor: 'equilibrio' },
      { label: 'No, quiero la clásica', valor: 'tradicional' },
      { label: 'Me da igual, sorpréndeme', valor: 'cualquiera' },
    ],
  },
  {
    id: 'ocasion', pregunta: '¿Para qué es?',
    opciones: [
      { label: 'Un antojo mío', valor: 'antojo' },
      { label: 'Un regalo', valor: 'regalo' },
      { label: 'Compartir en casa', valor: 'compartir' },
      { label: 'Algo especial', valor: 'especial' },
    ],
  },
];

export const FAQ = [
  { q: '¿Cuánto pesa cada cookie?', a: 'Aproximadamente 130 gramos. Son cookies estilo New York: crujientes por fuera, suaves y húmedas por dentro, generosas en relleno.' },
  { q: '¿Con cuánta anticipación debo pedir?', a: 'Necesitamos un mínimo de 48 horas antes de la fecha de entrega o retiro, porque horneamos por encargo y planificamos la producción. Puedes pedir con mucha más anticipación, sujeto a disponibilidad de agenda.' },
  { q: '¿Puedo cancelar o cambiar mi pedido?', a: 'Sí, con al menos 48 horas de anticipación: gestionamos la devolución del monto pagado. Dentro de las 48 horas previas el pedido entra en producción y no aceptamos cancelaciones por cambio de opinión, sin perjuicio de tus derechos legales.' },
  { q: '¿Cómo las conservo?', a: 'En un recipiente hermético a temperatura ambiente. Se disfrutan mejor el mismo día; puedes darles 10 segundos de microondas para recuperar el centro.' },
  { q: '¿Cómo pago?', a: 'Los medios de pago habilitados se informan durante el proceso de compra. Nunca te pediremos contraseñas bancarias ni claves secretas. Hoy el pedido se confirma y coordina por WhatsApp.' },
  { q: '¿Hacen despacho?', a: 'Sí, a toda la Región Metropolitana con un recargo de $3.500. También puedes retirar sin costo en La Florida, con horario coordinado por WhatsApp.' },
  { q: '¿Qué es la Línea Equilibrio?', a: 'Cookies sin azúcar añadida, endulzadas con alulosa, sin harinas refinadas y aptas para vegetarianos. Su base es harina de almendra, avena y coco.' },
  { q: '¿Tienen cookies sin gluten?', a: 'No. Elaboramos distintas recetas en un mismo espacio de producción, por lo que puede existir contaminación cruzada. Nuestros productos pueden contener trigo y gluten, leche, huevos, soya, maní y frutos secos.' },
  { q: '¿Las fotos son del producto real?', a: 'Sí, son fotografías propias de nuestras cookies, con finalidad ilustrativa. Al ser artesanales pueden existir pequeñas diferencias de forma, decoración o distribución de chips entre una unidad y otra.' },
  { q: '¿Hacen pedidos para eventos?', a: 'Sí. Escríbenos por WhatsApp con la cantidad y la fecha y te preparamos una cotización.' },
];

export const CLP = n => '$' + Number(n).toLocaleString('es-CL');

/* Resumen de las Políticas de compra y términos (sept. 2026).
   Documento completo: 28 secciones. Aquí el extracto que la web debe mostrar.
   Campos [COMPLETAR] del PDF: RUT, domicilio legal, correo y horario de atención. */
export const POLITICAS = {
  actualizado: 'Septiembre de 2026',
  pendientes: ['RUT', 'Domicilio legal', 'Correo electrónico', 'Horario de atención'],
  secciones: [
    { t: 'Anticipación mínima', c: 'Todos los pedidos requieren un mínimo de 48 horas de anticipación respecto de la fecha de entrega o retiro, porque elaboramos de forma artesanal y bajo pedido. Puedes pedir con semanas de anticipación, sujeto a disponibilidad de agenda y capacidad de producción.' },
    { t: 'Confirmación del pedido', c: 'El pedido queda confirmado cuando se completa el proceso de compra y el pago, y recibes nuestra confirmación. Revisa antes de finalizar: productos, sabores, cantidades, fecha, dirección, teléfono y observaciones.' },
    { t: 'Cancelaciones y devoluciones', c: 'Puedes cancelar por cambio de planes con al menos 48 horas de anticipación y gestionamos la devolución del monto pagado. Dentro de las 48 horas previas el pedido entra en planificación y producción, por lo que no se aceptan cancelaciones por arrepentimiento, sin perjuicio de tus derechos legales.' },
    { t: 'Cómo solicitar una cancelación', c: 'Escríbenos por nuestros canales oficiales indicando nombre de quien compró, número de pedido y fecha programada. Para el plazo se considera la fecha y hora en que recibimos la solicitud. El reflejo del dinero depende de tu banco o medio de pago.' },
    { t: 'Productos perecibles', c: 'Son alimentos para consumo en un período limitado y pueden estar dentro de las excepciones al derecho de retracto de la normativa chilena. Aun así ofrecemos voluntariamente la cancelación con 48 horas. Esto no limita tus derechos ante productos defectuosos o incumplimientos.' },
    { t: 'Modificación de pedidos', c: 'Cambios de sabores, cantidades, presentación, fecha o modalidad deben pedirse con al menos 48 horas de anticipación y están sujetos a disponibilidad. Si el cambio aumenta el total, se paga la diferencia.' },
    { t: 'Eventos y pedidos especiales', c: 'Los pedidos personalizados, corporativos o para celebraciones pueden tener condiciones específicas de producción, diseño, precio y pago, que informamos antes de confirmar. Un producto ya iniciado según tus instrucciones no se cancela por cambio de opinión.' },
    { t: 'Problemas con el pedido', c: 'Si recibes un sabor distinto, una cantidad incorrecta, falta un producto o hay un problema de calidad atribuible a nosotros, escríbenos cuanto antes. Podemos pedirte el número de pedido, una descripción y fotografías. Ofreceremos reposición, cambio o devolución según corresponda.' },
    { t: 'Producto artesanal', c: 'Pueden existir variaciones naturales de tamaño, forma, decoración o distribución de chips entre unidades; no afectan necesariamente la calidad. Una preferencia personal de dulzor o textura no constituye por sí sola un defecto.' },
    { t: 'Despachos y entregas', c: 'Informamos las modalidades y costos durante la compra. Debes entregar datos correctos: quién recibe, teléfono, dirección, departamento u oficina, comuna y referencias. Si la entrega falla por causa atribuible a ti, el segundo despacho corre por tu cuenta.' },
    { t: 'Retiros', c: 'Debes presentarte en el lugar y horario informado o acordado. Si no puedes retirar, escríbenos para reevaluar la coordinación según disponibilidad. Por ser productos perecibles no podemos garantizar la misma frescura si el retiro no ocurre en la fecha acordada.' },
    { t: 'Retrasos excepcionales', c: 'Haremos nuestros mejores esfuerzos por cumplir la fecha confirmada. Si algo afecta significativamente la preparación o entrega, te contactamos con los datos que dejaste y coordinamos nueva entrega, reposición o devolución.' },
    { t: 'Conservación', c: 'Sigue las indicaciones de conservación de cada producto. Una vez entregado el pedido no podemos responsabilizarnos por alteraciones causadas por almacenamiento inadecuado, calor, humedad o contaminación posterior a la entrega.' },
    { t: 'Alérgenos', c: 'Nuestros productos pueden contener, según la receta: trigo y gluten, leche y derivados, huevos, soya, maní, almendras, nueces, avellanas y otros frutos secos. Elaboramos distintas recetas en un mismo espacio, por lo que puede existir contaminación cruzada. Si tienes alergia o intolerancia, revisa la información del producto y consúltanos antes de comprar.' },
    { t: 'Línea Equilibrio', c: 'La expresión «sin azúcar añadida» se refiere a la formulación del producto y no es una recomendación médica ni indica que sea apropiado para todas las condiciones de salud. No presentamos estos productos como tratamiento ni prevención de enfermedades. Si tienes requerimientos nutricionales o condiciones de salud, revisa los ingredientes y consulta a un profesional.' },
    { t: 'Precios', c: 'Todos los precios están en pesos chilenos (CLP). Antes de pagar conocerás el precio de los productos y los demás cargos. El costo de despacho se muestra por separado. Respetamos el precio confirmado al momento de la compra.' },
    { t: 'Promociones y descuentos', c: 'Las promociones, códigos, productos de temporada y ediciones especiales pueden estar sujetos a fechas, disponibilidad, cupos, sabores determinados y cantidades máximas. Las condiciones se informan junto a cada promoción.' },
    { t: 'Disponibilidad y stock', c: 'Trabajamos con producción artesanal y cupos limitados: algunos productos, sabores o ediciones pueden agotarse. El sitio procura informar la disponibilidad antes de completar la compra.' },
    { t: 'Información de los productos', c: 'Procuramos mantener actualizadas fotografías, descripciones, ingredientes, características y pesos. Las fotografías son ilustrativas y, por la elaboración artesanal, pueden existir pequeñas diferencias visuales con el producto recibido.' },
    { t: 'Medios de pago', c: 'Los medios disponibles son los habilitados e informados durante la compra. Nunca solicitamos contraseñas bancarias ni claves secretas. Cuando el pago se procesa por una plataforma externa, aplican además sus condiciones de seguridad y privacidad.' },
    { t: 'Seguridad alimentaria', c: 'Elaboramos y manipulamos nuestros productos procurando condiciones adecuadas de higiene y seguridad alimentaria. Si un producto te hace sospechar que no está en condiciones de consumo, no lo consumas y contáctanos de inmediato.' },
    { t: 'Uso del sitio web', c: 'Las fotografías propias, textos, elementos gráficos, identidad visual y logotipo no pueden usarse con fines comerciales por terceros sin autorización. Te comprometes a usar el sitio de forma legítima y a entregar información verdadera.' },
    { t: 'Privacidad y datos personales', c: 'Recopilamos los datos necesarios para gestionar tu compra: nombre, teléfono, correo, dirección de entrega e información del pedido. Se usan para procesar pedidos, coordinar entregas, gestionar pagos y atenderte. La información de pago puede ser procesada por proveedores externos; no almacenamos necesariamente los datos completos de tarjetas.' },
    { t: 'Comunicaciones comerciales', c: 'Si autorizas recibir promociones y novedades, puedes darte de baja con los mecanismos de cada comunicación o escribiéndonos. Los mensajes para confirmar, preparar o resolver un pedido no son promocionales.' },
    { t: 'Cambios en estas políticas', c: 'Podemos actualizar estas políticas por cambios en nuestros procesos, servicios o normativa. Las modificaciones se publican aquí con su fecha. A tu compra aplican las condiciones vigentes al momento de realizarla.' },
    { t: 'Legislación aplicable', c: 'Las compras están sujetas a la legislación de la República de Chile, incluida la Ley N.º 19.496 sobre Protección de los Derechos de los Consumidores. Nada en estas políticas busca excluir, restringir ni renunciar a los derechos que la ley reconoce a los consumidores.' },
  ],
};
