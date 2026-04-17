-- ─────────────────────────────────────────────────────────────────
-- 1. Añadir columnas nuevas
-- ─────────────────────────────────────────────────────────────────
ALTER TABLE platos
  ADD COLUMN IF NOT EXISTS orden       INTEGER DEFAULT 0,
  ADD COLUMN IF NOT EXISTS precio_texto TEXT,
  ADD COLUMN IF NOT EXISTS es_seccion  BOOLEAN DEFAULT false;

-- ─────────────────────────────────────────────────────────────────
-- 2. Limpiar datos existentes
-- ─────────────────────────────────────────────────────────────────
TRUNCATE platos RESTART IDENTITY;

-- ─────────────────────────────────────────────────────────────────
-- 3. Insertar carta completa
-- ─────────────────────────────────────────────────────────────────
INSERT INTO platos (nombre, descripcion, precio, precio_texto, categoria, disponible, orden, es_seccion) VALUES

-- ENTRANTES
('Rueda ibérica con queso curado',               '',                                                                                      22,   '22',     'entrantes', true,  1,  false),
('Queso curado',                                  '',                                                                                      15,   '15',     'entrantes', true,  2,  false),
('Jamón ibérico cortado a cuchillo',              '',                                                                                      20,   '20',     'entrantes', true,  3,  false),
('Alcachofa confitada con trufa y huevo poché',   '',                                                                                      5.8,  '5,8/ud', 'entrantes', true,  4,  false),
('Alcachofa confitada con foie y huevo poché',    '',                                                                                      5.8,  '5,8/ud', 'entrantes', true,  5,  false),
('Alcachofa confitada con papada de bellota',     '',                                                                                      5.8,  '5,8/ud', 'entrantes', true,  6,  false),
('Huevos rotos con jamón ibérico',                '',                                                                                      15,   '15',     'entrantes', true,  7,  false),
('Huevos rotos con papada de bellota y trufa',    '',                                                                                      15,   '15',     'entrantes', true,  8,  false),
('Chorizo criollo a la brasa con chimichurri',    '',                                                                                      4.8,  '4,8',    'entrantes', true,  9,  false),
('Puerro asado al carbón con salsa de pimientos', '',                                                                                      10.5, '10,5',   'entrantes', true,  10, false),
('Pulpo a la brasa',                              '',                                                                                      25,   '25',     'entrantes', true,  11, false),
('Pulpo entero a la brasa',                       '',                                                                                      30,   '30',     'entrantes', true,  12, false),
('Gamba roja (12 unidades)',                       '',                                                                                      30,   '30',     'entrantes', true,  13, false),
('Gambón a la plancha (10 unidades)',              '',                                                                                      22,   '22',     'entrantes', true,  14, false),
('Gambón al ajillo',                              '',                                                                                      3.2,  '3,2/ud', 'entrantes', true,  15, false),
('Vieira',                                        '',                                                                                      1.9,  '1,9/ud', 'entrantes', true,  16, false),
('Croquetas de jamón ibérico caseras',            '',                                                                                      1.9,  '1,9/ud', 'entrantes', true,  17, false),
('Croquetas de rabo de toro',                     '',                                                                                      1.9,  '1,9/ud', 'entrantes', true,  18, false),
('Croquetas de carabineros',                      '',                                                                                      1.9,  '1,9/ud', 'entrantes', true,  19, false),

-- ENSALADAS
('Burrata ahumada con pimiento asado al carbón',  '',                                                                                      15.5, '15,5',   'ensaladas', true,  20, false),
('Ensalada Matices',                              'Tomate rosa, aguacate, ventresca de atún y cebolla roja',                               15,   '15',     'ensaladas', true,  21, false),
('Pimientos asados con ventresca',                '',                                                                                      15.5, '15,5',   'ensaladas', true,  22, false),
('Burrata con salsa de albahaca y tomates cherry','',                                                                                      13.5, '13,5',   'ensaladas', true,  23, false),
('Ensalada César con pollo crujiente',            'A la miel y mostaza — lechuga romana, pollo, crutones, tomate cherry y parmesano',     14,   '14',     'ensaladas', true,  24, false),
('Tomate rosa relleno de burrata y pesto casero', '',                                                                                      15.5, '15,5',   'ensaladas', true,  25, false),

-- CARNES
('Carnes a la Parrilla',                          '',                                                                                      0,    '',       'carnes',    true,  26, true),
('Chuletón de vaca vieja madurado',               '',                                                                                      60,   '60/kg',  'carnes',    true,  27, false),
('Entrecote de 300 gr',                           '',                                                                                      22,   '22',     'carnes',    true,  28, false),
('Entrecote de 500 gr',                           '',                                                                                      30,   '30',     'carnes',    true,  29, false),
('Secreto ibérico',                               '',                                                                                      18,   '18',     'carnes',    true,  30, false),
('Solomillo de ternera',                          '',                                                                                      24,   '24',     'carnes',    true,  31, false),
('Chuletillas de lechal',                         '',                                                                                      21,   '21',     'carnes',    true,  32, false),
('Mollejas de ternera',                           '',                                                                                      18,   '18',     'carnes',    true,  33, false),
('Pechuga de pollo',                              '',                                                                                      12,   '12',     'carnes',    true,  34, false),
('Entraña de ternera con chimichurri',            '',                                                                                      18,   '18',     'carnes',    true,  35, false),
('Otras Carnes',                                  '',                                                                                      0,    '',       'carnes',    true,  36, true),
('Escalopines de pollo',                          '',                                                                                      13,   '13',     'carnes',    true,  37, false),
('Callos a la madrileña de la casa',              '',                                                                                      15,   '15',     'carnes',    true,  38, false),
('Carilleras ibéricas guisadas en vino tinto',    '',                                                                                      16,   '16',     'carnes',    true,  39, false),

-- POSTRES
('Tarta de queso cremosa casera',                 '',                                                                                      7,    '7',      'postres',   true,  40, false),
('Tarta de queso y pistacho',                     '',                                                                                      7,    '7',      'postres',   true,  41, false),
('Brownie casero clásico',                        '',                                                                                      7,    '7',      'postres',   true,  42, false),
('Brownie casero de chocolate blanco',            '',                                                                                      6.2,  '6,2',    'postres',   true,  43, false),
('Yogurt con frutos del bosque',                  '',                                                                                      5.5,  '5,5',    'postres',   true,  44, false),
('Helados artesanos',                             'Pistacho, mandarina',                                                                   6.2,  '6,2',    'postres',   true,  45, false),
('Cafés, Tés e Infusiones',                       '',                                                                                      0,    '',       'postres',   true,  46, true),
('Café',                                          'Solo, cortado, con leche o descafeinado',                                              2,    '2',      'postres',   true,  47, false),
('Café bombón',                                   '',                                                                                      3,    '3',      'postres',   true,  48, false),
('Carajillo',                                     '',                                                                                      2.5,  '2,5',    'postres',   true,  49, false),
('Infusiones premium',                            'Carta de infusiones disponible bajo petición',                                         2.5,  '2,5',    'postres',   true,  50, false),

-- BEBIDAS
('Agua',                                          '',                                                                                      2.2,  '2,2',    'bebidas',   true,  51, false),
('Agua con gas',                                  '',                                                                                      3.5,  '3,5',    'bebidas',   true,  52, false),
('Coca-Cola',                                     'Original, Zero o Zero Zero',                                                           3.5,  '3,5',    'bebidas',   true,  53, false),
('Nestea',                                        '',                                                                                      3.5,  '3,5',    'bebidas',   true,  54, false),
('Fanta',                                         'Naranja o limón',                                                                      3.5,  '3,5',    'bebidas',   true,  55, false),
('Aquarius',                                      'Naranja o limón',                                                                      3.5,  '3,5',    'bebidas',   true,  56, false),
('Sprite',                                        '',                                                                                      3.5,  '3,5',    'bebidas',   true,  57, false),
('Copa de cerveza',                               '',                                                                                      3.5,  '3,5',    'bebidas',   true,  58, false),
('Copa de cerveza mixta',                         '',                                                                                      3.5,  '3,5',    'bebidas',   true,  59, false),
('Cerveza 0,0 tostada',                           '',                                                                                      3.5,  '3,5',    'bebidas',   true,  60, false),
('Tinto de verano',                               '',                                                                                      3.5,  '3,5',    'bebidas',   true,  61, false),
('Vermút Zecchini',                               '',                                                                                      4,    '4',      'bebidas',   true,  62, false),
('Copa de vino blanco',                           'Semi dulce, afrutado, seco o albariño',                                               3.5,  '3,5',    'bebidas',   true,  63, false),
('Copa de vino tinto',                            '',                                                                                      3.5,  '3,5',    'bebidas',   true,  64, false),

-- VINOS
('Vinos Tintos',                                  '',                                                                                      0,    '',       'vinos',     true,  65, true),
('Matarromera Ribera del Duero Crianza',          '',                                                                                      36,   '36',     'vinos',     true,  66, false),
('Pesquera Ribera del Duero Crianza',             '',                                                                                      34,   '34',     'vinos',     true,  67, false),
('Emilio Moro Ribera del Duero',                  '',                                                                                      34,   '34',     'vinos',     true,  68, false),
('Cillar d Silos Ribera del Duero Crianza',       '',                                                                                      26,   '26',     'vinos',     true,  69, false),
('Briego Ribera del Duero Crianza',               '',                                                                                      25,   '25',     'vinos',     true,  70, false),
('Tarsus Ribera del Duero Crianza',               '',                                                                                      25,   '25',     'vinos',     true,  71, false),
('Cibus Ribera del Duero Crianza',                '',                                                                                      17,   '17',     'vinos',     true,  72, false),
('Ramón Bilbao Edición Limitada 2020',            '',                                                                                      28,   '28',     'vinos',     true,  73, false),
('Azpilicueta Rioja Crianza',                     '',                                                                                      19,   '19',     'vinos',     true,  74, false),
('Blancos & Espumosos',                           '',                                                                                      0,    '',       'vinos',     true,  75, true),
('Moët & Chandon',                                '',                                                                                      55,   '55',     'vinos',     true,  76, false),
('Juan Galindo 100% Verdejo',                     '',                                                                                      18,   '18',     'vinos',     true,  77, false),
('Sotavento Verdejo Rueda',                       '',                                                                                      17,   '17',     'vinos',     true,  78, false),
('Lagar del Rey Verdejo Semidulce',               '',                                                                                      16,   '16',     'vinos',     true,  79, false),
('Rueda de la Casa (media)',                      '',                                                                                      16,   '16',     'vinos',     true,  80, false),
('Rueda de la Casa (entera)',                     '',                                                                                      25,   '25',     'vinos',     true,  81, false),
('Cava 1551 Codorniu',                            '',                                                                                      22,   '22',     'vinos',     true,  82, false),
('Albariño',                                      '',                                                                                      18,   '18',     'vinos',     true,  83, false),
('Godello',                                       '',                                                                                      24,   '24',     'vinos',     true,  84, false);
