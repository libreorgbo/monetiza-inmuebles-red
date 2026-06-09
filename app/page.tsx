'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Wifi, 
  Tv, 
  Shield, 
  MapPin, 
  TrendingUp, 
  CircleDot, 
  Layers, 
  Radio, 
  Database, 
  Zap, 
  DollarSign, 
  Users, 
  Smartphone, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  HelpCircle, 
  Cpu, 
  Globe, 
  Sparkles, 
  Network, 
  Clock, 
  ArrowRight,
  RefreshCw,
  Share2,
  X,
  Plus
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Interfaces for our state elements
interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface LeadData {
  name: string;
  email: string;
  phone: string;
  acceptedTerms: boolean;
}

export default function Page() {
  // Navigation & Simulated Routes/Tabs
  const [activeTab, setActiveTab] = useState<'libre' | 'movil' | 'intranet' | 'metromesh'>('libre');
  
  // Real-time ROI Calculator variables
  const [usersCount, setUsersCount] = useState<number>(1000);
  
  // Interactive simulator states
  const [lead, setLead] = useState<LeadData>({ name: '', email: '', phone: '', acceptedTerms: true });
  const [leadSubmitted, setLeadSubmitted] = useState<boolean>(false);
  const [simulatedMobileProject, setSimulatedMobileProject] = useState<string>('Urbanizacion');
  const [meshNodesStatus, setMeshNodesStatus] = useState({
    nodeA: 'active',
    nodeB: 'active',
    nodeC: 'active',
    nodeD: 'active',
  });
  const [meshErrorRate, setMeshErrorRate] = useState<string>('0.00%');
  
  // Interactive benefits category tab
  const [selectedBenefitsCategory, setSelectedBenefitsCategory] = useState<'wifi' | 'iptv' | 'videovigilancia' | 'iot'>('wifi');
  const [activePersona, setActivePersona] = useState<'carlos' | 'ana' | 'roberto' | 'marcelo'>('carlos');
  const [activeLoginMode, setActiveLoginMode] = useState<'leads' | 'whatsapp' | 'voucher' | 'social'>('leads');
  const [activeWifiSector, setActiveWifiSector] = useState<number>(0);
  const [hasFiberOptic, setHasFiberOptic] = useState<boolean>(true);
  const [selectedLicensingModel, setSelectedLicensingModel] = useState<'co-sponsored' | 'autonomous' | 'ads-network'>('co-sponsored');

  // Contact form state model
  const [contactForm, setContactForm] = useState({
    constructora: '',
    representante: '',
    plataforma: 'all',
    telefono: '',
    mensaje: ''
  });

  // Complete lists of 80 benefits (20 per platform) as requested
  const wifiMarketingBenefits = [
    "Captación automatizada de leads en terreno: Cada vez que un interesado visita el proyecto y se conecta a la red, entrega de forma voluntaria su nombre, teléfono y correo electrónico.",
    "Impacto publicitario directo al WhatsApp cada 33 minutos: El sistema envía información clave de las fases de sus proyectos directamente al celular del visitante sin intervención del asesor.",
    "Derribo inmediato de la objeción de conectividad: En la periferia urbana, internet es la mayor duda del comprador; ofrecer conectividad desde el primer día elimina esa barrera de venta por completo.",
    "Plusvalía inmediata del precio por metro cuadrado: Comercializar \"Smart Lotes\" con servicios digitales disponibles justifica un valor premium de la tierra y acelera el cierre de ventas.",
    "Remarketing automatizado post-visita: Permite programar campañas automatizadas por WhatsApp, Email y SMS a todas las personas que pisaron la urbanización.",
    "Monetización del tráfico en accesos: El portal cautivo convierte el flujo diario de visitas, transportistas y proveedores en una audiencia publicitaria monetizable para marcas externas.",
    "Segmentación geográfica de precisión (Geofencing): El WiFi reconoce la ubicación del usuario sin necesidad de GPS, ideal para promocionar fases específicas según la zona donde se encuentre el cliente.",
    "Generación de Big Data estratégico: El dashboard analítico revela en tiempo real de qué ciudades provienen los interesados, horarios pico y permanencia en el showroom para optimizar la inversión en marketing.",
    "Atracción de inversores de otras regiones: Captura el interés de ciudadanos de zonas productivas o del interior del país cuando se conectan en puntos estratégicos de alto tráfico (como la Terminal Bimodal).",
    "Flujo de caja recurrente perpetuo: Tras vender los lotes, la inmobiliaria sigue cobrando mensualmente por el acceso a internet a través de un sistema de tickets prepago.",
    "Diferenciación radical frente a competidores directos: Posiciona a la empresa constructora como la opción más moderna y confiable en mercados de alta competitividad.",
    "Reducción de costos en folletería física: El portal de bienvenida y los mensajes push al celular reemplazan los catálogos impresos caros que quedan obsoletos rápidamente.",
    "Control centralizado multi-sitio: Permite a la gerencia gestionar y auditar hasta 22 equipos o urbanizaciones de manera simultánea desde un único panel en tiempo real.",
    "Fidelización del cliente pre-habitación: El comprador percibe el beneficio del servicio y la solidez de la empresa constructora incluso antes de edificar su vivienda.",
    "Socio tecnológico robusto sin costos de desarrollo: El software opera como un servicio 100% alojado en servidores de Empresa LIBRE, eliminando la necesidad de adquirir costosas licencias o código fuente.",
    "Infraestructura física reutilizable: Los equipos empresariales instalados (como Cambium, Cisco Meraki o Aruba) son propiedad de la inmobiliaria y revalorizan el equipamiento del condominio.",
    "Redundancia y máxima disponibilidad de red: El sistema es totalmente compatible con la combinación simultánea de fibra óptica y Starlink para evitar caídas del servicio.",
    "Canal propio libre de comisiones: Difusión de ofertas y promociones de la misma inmobiliaria de forma ilimitada sin pagar dividendos a terceros.",
    "Potenciación de alianzas comerciales B2B: Posibilidad de vender espacios publicitarios dentro del portal a comercios locales como restaurantes, farmacias o transporte.",
    "Escalabilidad fluida al ecosistema digital: El WiFi Marketing actúa como la base de conectividad necesaria para desplegar posteriormente los servicios de televisión y seguridad avanzada."
  ];

  const iptvBenefits = [
    "Atractivo comercial masivo e inmediato: Dotar a las viviendas de entretenimiento digital HD eleva instantáneamente el estatus y la categoría del desarrollo inmobiliario.",
    "Eliminación de cableados aéreos y antenas parabólicas: Mantiene la estética limpia y el urbanismo de vanguardia del proyecto al operar de forma 100% digital a través de la red del condominio.",
    "Monetización agresiva con el 67% de margen neto: Excelente retorno mensual directo para la desarrolladora por cada suscripción activa en los hogares.",
    "Poblamiento acelerado de la urbanización: Al contar con servicios de entretenimiento y televisión listos para usar, las familias deciden construir y mudarse mucho más rápido.",
    "Cero inversión en infraestructura de servidores o streaming: El catálogo, las señales en vivo y las actualizaciones corren en su totalidad por cuenta de los servidores de Empresa LIBRE.",
    "Compatibilidad con hardware estándar y económico: No requiere codificadores propietarios costosos; funciona en Smart TVs, Android TV Box y Amazon Fire Sticks del propio residente.",
    "Catálogo de contenido auto-actualizable: Películas, series y novelas de estreno se expanden permanentemente sin generar costos operativos ni de gestión para la inmobiliaria.",
    "Valor agregado para todo el núcleo familiar: Atrae a diferentes perfiles de compradores al integrar deportes en vivo, canales infantiles, contenido educativo y karaoke interactivo.",
    "Panel de administración centralizado de usuarios: Control absoluto para activar, suspender o auditar las cuentas de los residentes de manera inmediata desde la oficina central.",
    "Herramienta persuasiva de cobranza indirecta: La suspensión temporal del servicio de IPTV ante la mora en cuotas o expensas comunes funciona como una palanca de presión sumamente efectiva.",
    "Reducción de la tasa de abandono o reventa de lotes: Al percibir un entorno urbano consolidado y equipado con servicios de nivel corporativo, el cliente final asegura su permanencia.",
    "Gancho comercial en cierres de venta difíciles: La inmobiliaria puede obsequiar meses de suscripción gratuita de IPTV como un potente incentivo de marketing para cerrar contratos de lotes.",
    "Optimización de costos por sinergia de infraestructura: Aprovecha al máximo la red inalámbrica empresarial ya desplegada para el WiFi corporativo, maximizando el ROI del hardware.",
    "Imán para proyectos de segundas viviendas o quintas: Ideal para desarrollos vacacionales de fin de semana, donde la conectividad y el entretenimiento inmediato son factores clave de compra.",
    "Presencia y fidelización de marca a largo plazo: El portal de acceso al servicio de televisión mantiene a la inmobiliaria en la mente del cliente como su proveedor tecnológico de confianza.",
    "Independencia absoluta de las operadoras tradicionales: La urbanización no se detiene ni depende de que las grandes telefónicas decidan o no ampliar su cobertura de cableado físico en la zona.",
    "Fomento del sentido de comunidad: Facilita la organización de eventos o dinámicas vecinales utilizando las funciones musicales e interactivas integradas (como el Karaoke).",
    "Escalabilidad ilimitada sin costos fijos incrementales: Pasar de 100 a más de 1,000 familias activas no eleva el costo de la concesión anual fija por servidores de la inmobiliaria.",
    "Canal de comunicación institucional interno: Posibilidad de pautar anuncios o notificaciones de la administración de la urbanización dentro de las pantallas del sistema de IPTV.",
    "Creación de barreras de salida comerciales: Un residente habituado a un paquete digital completo a un precio sumamente competitivo difícilmente optará por mudarse a un lote tradicional sin servicios."
  ];

  const videovigilanciaBenefits = [
    "Ataque directo a la objeción de la inseguridad: Neutraliza de inmediato el temor más grande de los compradores de terrenos o casas en zonas de expansión urbana.",
    "Monetización directa de la seguridad: Generación de ingresos recurrentes cobrando mensualmente por acceso a cámaras del vecindario en tiempo real.",
    "Reducción drástica de costos en seguridad física: Permite vigilar perímetros extensos utilizando menos personal presencial, reduciendo drásticamente las expensas.",
    "Monitoreo móvil 24/7 para el propietario: Cada propietario puede supervisar su lote, obra o vivienda desde su smartphone en cualquier parte del mundo.",
    "Almacenamiento ultra seguro en la nube: Evita que el sabotaje elimine la evidencia física; el video queda cifrado y guardado de forma externa en Empresa LIBRE.",
    "Alertas automáticas con Inteligencia Artificial: Detección inteligente de siluetas, comportamientos inusuales y vehículos, alertando inmediatamente.",
    "Compatibilidad total multimarca: Soporta cámaras IP estándar (Hikvision, Dahua, Reolink) evitando contratos exclusivos de hardware costoso.",
    "Resguardo de materiales de construcción: Permite vigilar las obras en curso y prevenir pérdidas de insumos críticos de construcción.",
    "Panel de administración multizona acelerado: Facilita a la administración de la urbanización la vigilancia simultánea de plazas, ingresos y áreas comunes.",
    "Argumento de venta altamente persuasivo: Vender tranquilidad y un entorno tecnológico vigilado acelera la toma de decisiones del comprador.",
    "Apalancamiento de la red inalámbrica existente: No requiere costosos tendidos cableados extensos, al operar sobre los nodos inalámbricos de alta disponibilidad.",
    "Mitigación activa de intrusiones de terrenos: Vigilancia continua sobre áreas de reserva para detectar intentos de ocupación no autorizada.",
    "Auditoría visual de personal y obras internas: Control remoto del desempeño del personal de mantenimiento, caminos y obras comunes de la constructora.",
    "Construcción de un entorno colaborativo: Los vecinos se sienten empoderados al tener visibilidad de los perímetros compartidos, elevando la tranquilidad.",
    "Consolidación de marca confiable: Posiciona al desarrollador inmobiliario como un pionero en la implementación de Smart Cities seguras en el país.",
    "Escalabilidad progresiva e incremental: Permite agregar cámaras adicionales de forma fluida a medida que el proyecto expande sus fases.",
    "Cero costos de actualización de software: Toda la plataforma de visualización, parches y hosting corre por cuenta del sistema en la nube de Empresa LIBRE.",
    "Atracción de negocios comerciales clave: Áreas comerciales integradas son más atractivas para farmacias y tiendas en entornos vigilados.",
    "Mitigación de responsabilidades legales: Registro fidedigno en video ante cualquier siniestro, resguardando la reputación jurídica de la constructora.",
    "Respaldos de energía ininterrumpidos: El sistema de cámaras opera bajo nodos protegidos, asegurando vigilancia activa incluso durante cortes eléctricos."
  ];

  const iotBenefits = [
    "Automatización inteligente de accesos vehiculares: Control automático de barreras y portones vehiculares mediante reconocimiento de placas o Bluetooth en la app.",
    "Gestión digitalizada de expensas y cobros integrados: Restricción automática de áreas comunes (piscina, canchas) ante situaciones de mora o morosidad.",
    "Sensores ambientales para áreas verdes: Monitoreo inalámbrico de humedad del suelo en parques para optimizar los ciclos de riego y agua comunitaria.",
    "Iluminación inteligente centralizada: Programación computarizada y sensores de movimiento en avenidas para optimizar el consumo de energía eléctrica.",
    "Botón de pánico y emergencias del residente: Sistema de alerta rápida por IoT para reportar incidentes médicos o disturbios al centro de control central.",
    "Termografía y protección de bombas de agua: Sensores IoT para auditar la temperatura de las bombas generales y prevenir cortes accidentales del suministro.",
    "Control inteligente de niveles de cisternas: Alertas preventivas en tiempo real cuando el tanque de agua general del condominio desciende de límites críticos.",
    "Medidores inteligentes de servicios prepago: Telemetría remota para facturación automática de servicios de agua o electricidad sin lecturas manuales.",
    "Apertura peatonal por códigos QR dinámicos: Habilitación de tickets de acceso temporales para visitas, eliminando esperas y filas molestas en portería.",
    "Monitoreo de contenedores de basura comunal: Sensor de llenado inalámbrico para programar de forma eficiente la recogida de residuos por el personal técnico.",
    "Detección inalámbrica de fugas de agua: Sensores perimetrales en tuberías maestras para detectar mermas invisibles y ahorrar costosas reparaciones.",
    "Cerraduras magnéticas para áreas sociales: Automatización de reservas de salones de eventos que se destraban solo en el horario de reserva verificado.",
    "Monitero de calidad de aire en showroom: Sensores de dióxido de carbono y ambientación inteligente para maximizar el confort de clientes en salas de negocios.",
    "Soporte para asistentes de voz inteligentes: Integración nativa que permite a los residentes interactuar con servicios del condominio con comandos sencillos.",
    "Cero cableados complejos y destructivos: Sensores inalámbricos de ultra bajo consumo y baterías con vida útil de hasta 10 años fáciles de instalar.",
    "Registro unificado de telemetría municipal: Centralización de variables operativas del condominio listas para auditarse desde un único panel administrativo.",
    "Anulaciones instantáneas ante extravíos de tags: Desactivación inmediata de tarjetas y tags RFID perdidos desde el portal de Empresa LIBRE en la nube.",
    "Estadísticas analíticas de ocupación de áreas: Reportes exactos de uso de parrilleros, canchas y salones para planificar ampliaciones e inversiones futuras.",
    "Fidelización premium de residentes modernos: El inquilino interactúa con un entorno inteligente de primer mundo, impulsando un alto sentido de pertenencia.",
    "Ahorro drástico en mantenimiento preventivo: Alertas mecánicas tempranas que permiten actuar antes de que ocurran fallas mecánicas destructivas."
  ];

  const hotspotsSantaCruz = [
    {
      name: "Terminal Bimodal",
      desc: "Tránsito Masivo y Pasajeros",
      detail: "15,000-25,000 personas/día. Mayor flujo del eje metropolitano. Pasajeros del interior con capital de inversión. Cuenta con anuncio de lotes al conectarse de manera inmediata."
    },
    {
      name: "La Ramada / Mercado Abasto",
      desc: "Mercado Mayorista y Comercio",
      detail: "Mercado mayorista más grande del departamento. 8,000+ visitantes/día. Alto potencial de inversores de provincias productivas."
    },
    {
      name: "Los Cachis / Zona del Río Piraí",
      desc: "Corredor Gastronómico Familiar",
      detail: "Corredor gastronomómico familiar de fin de semana. Familias de clase media-alta con capacidad de inversión en lotes condominales."
    },
    {
      name: "Comidas Típicas (Av. Roca y Coronado)",
      desc: "Altísima Concurrencia Tradicional",
      detail: "Zona tradicional de comida típica de alta concurrencia. Visitantes del interior durante feriados — compradores potenciales de terrenos."
    },
    {
      name: "Plan 3000",
      desc: "Mayor Densidad Poblacional",
      detail: "Mayor densidad de Santa Cruz. Tránsito constante en mercados y comercios. Ideal para captar compradores de primera vivienda y lotes económicos."
    },
    {
      name: "Villa Primero de Mayo",
      desc: "Núcleo Comercial del Este",
      detail: "Zona residencial popular de alta rotación comercial. Ferias y mercados barriales. Alta receptividad a ofertas de lotes accesibles."
    },
    {
      name: "Monseñor Rivero (Zona Norte)",
      desc: "Corredor Premium y Corporativo",
      detail: "Corredor comercial y gastronómico premium de alta gama. Clase media-alta con capacidad de inversión en urbanizaciones exclusivas."
    },
    {
      name: "Av. Cristo Redentor",
      desc: "Eje del Norte Vehicular y Comercial",
      detail: "Eje comercial de alta circulación vehicular y peatonal con acceso a múltiples barrios del norte. Miles de vehículos/día de potenciales compradores."
    },
    {
      name: "Equipetrol (Zona Este)",
      desc: "Entretenimiento Superior e Inversores",
      detail: "Entretenimiento nocturno premium, showrooms y cafés corporativos. Jóvenes profesionales y ejecutivos con alto poder adquisitivo."
    },
    {
      name: "Parque Urbano / Fexpocruz",
      desc: "Captación Masiva en Eventos",
      detail: "Eventos masivos y ferias internacionales del rubro constructivo. Cientos de miles de visitantes. Captación masiva de leads en tiempo récord."
    },
    {
      name: "Av. San Martín (2do Anillo)",
      desc: "Servicios Clínicos y Comerciales",
      detail: "Corredor comercial de alto flujo. Servicios públicos, clínicas privadas y cafés de estudio. Mezcla socioeconómica amplia y mercado diverso."
    },
    {
      name: "Mercado Los Pozos",
      desc: "Intercambio Popular Urbano",
      detail: "Mercado popular de alta rotación. Comerciantes mayoristas y minoristas con excelente liquidez del interior del país."
    },
    {
      name: "Av. Banzer (Zona Norte)",
      desc: "Mayor Crecimiento Inmobiliario",
      detail: "Eje de expansión vial con mayor desarrollo urbanístico e inmobiliario. Proximidad a warnes y proyectos de alto impacto residencial."
    },
    {
      name: "Doble Vía a La Guardia",
      desc: "Eje Conector de la Salida Sur",
      detail: "Corredor de salida y expansión urbana para familias del sector periférico que buscan un espacio propio en sinergia directa con proyectos."
    },
    {
      name: "Cotoca Centro",
      desc: "Portal Inmobiliario Clave",
      detail: "Corazón urbano del municipio rector donde se asientan proyectos estratégicos. Acceso a compradores locales en el eje Cotoca-Santa Cruz."
    },
    {
      name: "Warnes / Eje Norte",
      desc: "Eje Industrial e Inmobiliario",
      detail: "Zona de altísimo crecimiento demográfico e industrial del departamento. Familias jóvenes buscando adquirir su primer terreno."
    },
    {
      name: "El Trompillo (Aeropuerto Viejo)",
      desc: "Viajeros de Alto Perfil Provincial",
      detail: "Zona comercial, logística y de hangares privados. Usuarios con movilidad frecuente entre distritos de inversión."
    },
    {
      name: "Zona Universitaria (UAGRM)",
      desc: "Prospección a Futuro / Profesional",
      detail: "60,000+ estudiantes activos y docentes. Jóvenes profesionales que proyectan adquirir su primera inversión en lotes a mediano plazo."
    },
    {
      name: "Supermercados / Icabamba",
      desc: "Público Cautivo en Espera",
      detail: "Público cautivo con alto nivel socioeconómico y tiempo de espera de respuesta. Familias decidiendo compras familiares."
    },
    {
      name: "Parque El Arenal",
      desc: "Esparcimiento Familiar Turístico",
      detail: "Área verde de esparcimiento en casco viejo central. Alta concentración peatonal familiar los fines de semana."
    },
    {
      name: "Av. Santos Dumont",
      desc: "Eje Comercial Sur",
      detail: "Corredor comercial continuo de alto flujo vehicular y ferreterías con un enorme volumen de transeúntes diarios de Empresa LIBRE."
    },
    {
      name: "Urbanización Kanaan Premium",
      desc: "Zona Norte Expansión",
      detail: "Nueva fase residencial con altísima demanda por parcelas y lotes campestres listos para construir."
    },
    {
      name: "El Torno Principal",
      desc: "Eje de los Valles",
      detail: "Centro distribuidor y agrícola clave de los valles cruceños, con presencia de productores y micro-comerciantes."
    },
    {
      name: "Las Tres Cruces",
      desc: "Corredor Agroindustrial",
      detail: "Eje de alto tráfico para productores e industriales clave de Santa Cruz, con alto potencial de reinversión en bienes raíces."
    },
    {
      name: "4to Anillo y Av. Bush",
      desc: "Distrito Universitario Privado",
      detail: "Zona de centros comerciales, condominios y universidades privadas de alta gama con público de excelentes ingresos."
    },
    {
      name: "Plaza Principal 24 de Septiembre",
      desc: "Corazón Turístico Histórico",
      detail: "Punto neurálgico empresarial, financiero y cultural de la ciudad, ideal para campañas corporativas."
    },
    {
      name: "Canal Isuto",
      desc: "Zona Residencial de Alta Gama",
      detail: "Conectividad premium de condominios cerrados, cafés ejecutivos de alta velocidad y oficinas corporativas de prestigio."
    },
    {
      name: "La Guardia Centro",
      desc: "Zona Residencial Vecina",
      detail: "Expansión directa de clase media con alta plusvalía y demanda por ofertas de terrenos económicos."
    },
    {
      name: "Av. Virgen de Cotoca",
      desc: "Salida al Oriente de Expansión",
      detail: "Ruta comercial de transporte pesado, importadoras y parques industriales de alto impacto de Empresa LIBRE."
    },
    {
      name: "Los Lotes",
      desc: "Zonas Populares del Sur",
      detail: "Excelente densidad urbana y comercial con gran necesidad de cobertura de WiFi y fomento de venta de terrenos de la Empresa LIBRE."
    },
    {
      name: "Av. Tres Pasos al Frente",
      desc: "Eje Comercial del Este",
      detail: "Sectores de emprendedores y pymes con alta rotación de inventarios y capitales de inversión de Empresa LIBRE."
    },
    {
      name: "Pampa de la Isla",
      desc: "Eje Productivo Comercial",
      detail: "Zona residencial sumamente activa y dinámica de alta plusvalía, con gran flujo de compradores."
    },
    {
      name: "Warnes Parque Industrial",
      desc: "Corazón Logístico de Bolivia",
      detail: "El mayor centro de acopio, manufactura e importaciones de la zona metropolitana con inversores nacionales recurrentes."
    }
  ];

  const wifiSectors = [
    {
      name: "Aeropuertos y Terminales",
      index: 2,
      id: "PB9TO2gz6eE",
      icon: "✈️",
      focus: "Perfil de Viajeros y Alta Gama (La Paz, Salar de Uyuni y El Alto)",
      desc: "Análisis y captación inmediata de leads inmobiliarios prémium. Captura de perfiles de viajeros vía OTP (WhatsApp) en aeropuertos de Santa Cruz, La Paz y El Alto. Monetice pre-login con anuncios interactivos de condominios prémium y deje que los clientes consulten estadísticas B2B validadas. [Métricas: 2.4M Pasajeros Diarios • Hasta 340K Perfiles Capturados/Mes • 94% Precisión en Predicción]"
    },
    {
      name: "Centros Comerciales y Malls",
      index: 3,
      id: "PB9TO2gz6eE",
      icon: "🛍️",
      focus: "Upsell de Shopper Insights e Inversión",
      desc: "Excelente canal para capturar perfiles de compradores, mapeo de tráfico peatonal por pisos y zonas calientes. Entrega datos útiles de inquilinos directamente calificados para comprar lotes o bienes raíces de inmediato de manera automática. [Métricas: 890K Compradores Mensuales • 12min Estadía Promedio • 3.1x Aumento en Conversión]"
    },
    {
      name: "Estadios y Arenas Deportivas",
      index: 4,
      id: "PB9TO2gz6eE",
      icon: "🏟️",
      focus: "Monetización Masiva de Hinchas",
      desc: "Capte miles de perfiles a gran escala para clientes de estadios, prediga la demanda de comida y bebidas durante el evento y segmente los de comportamiento socioeconómico específico para promocionar lotes rústicos y campestres. [Métricas: 52K Fanáticos por Evento • 78% Adopción del WiFi • $4.20 Ingreso Promedio por Fan]"
    },
    {
      name: "Restaurantes y Gastronomía",
      index: 5,
      id: "PB9TO2gz6eE",
      icon: "🍔",
      focus: "Fidelización de Comensales y Menú Interactivo",
      desc: "Transforma el WiFi residencial tradicional en captación inteligente de huéspedes hoteleros/inmobiliarios, rastreo de visitas recurrentes del cliente y envío automatizado de campañas de fidelización para clientes de la hostelería. [Métricas: Hasta 14K Perfiles Nuevos/Mes • 42min Permanencia Media • 2.4x Retorno de Cliente]"
    },
    {
      name: "Retail y Tiendas",
      index: 6,
      id: "PB9TO2gz6eE",
      icon: "🛒",
      focus: "Comportamiento del Comprador y Embudo",
      desc: "Estadísticas precisas de enganche de compradores por departamentos y mapeo de flujo peatonal para detectar transeúntes fríos versus compradores de propiedades. Ideal para tiendas departamentales y showrooms de construcción. [Métricas: 45K Compradores Mensuales • 8.2min Permanencia Media • 34% Tasa de Captura Inmediata]"
    },
    {
      name: "Parques y Atracciones",
      index: 7,
      id: "PB9TO2gz6eE",
      icon: "🎡",
      focus: "Optimización de Flujo de Visitantes y Cabañas",
      desc: "Perfecto para captar familias buscando cabañas de esparcimiento en fines de semana o segundas residencias de descanso. Predice cuellos de botella en recorridos e integra encuestas rápidas de satisfacción. [Métricas: 35K Visitantes Diarios • 6.2hrs de Permanencia Promedio • $12.40 Ingreso Extra por Visitante]"
    },
    {
      name: "Hoteles y Hostelería",
      index: 8,
      id: "PB9TO2gz6eE",
      icon: "🏨",
      focus: "Conserjería Inteligente y Turismo Premium",
      desc: "Automatiza la conexión de red del hotel en el check-in. Integra un servicio de conserje digital interactivo que promociona tours exclusivos al Salar de Uyuni o centros históricos de La Paz, mientras segmenta leads dirigidos a inversión de inmuebles vacacionales. [Métricas: 94% Adopción de WiFi • 3.2x Conversión de Up-Sell Interno • $22 Ingreso Extra por Huésped]"
    },
    {
      name: "Centros de Convenciones y Ferias",
      index: 9,
      id: "PB9TO2gz6eE",
      icon: "🤝",
      focus: "Proveedores y Captación Inbound B2B",
      desc: "Diseñado para ferias corporativas y de negocios grandes (tipo FEXPOCRUZ). Mide el enganche real en estantería, valida las visitas de clientes con reportes precisos y expone anuncios rotativos de proyectos residenciales. [Métricas: 28K Asistentes por Feria • 86% Tasa de Captura • 4.1x Retorno de Inversión Patrocinada]"
    },
    {
      name: "Universidades y Academias",
      index: 10,
      id: "PB9TO2gz6eE",
      icon: "🎓",
      focus: "Flujo de Campus y Prospección Inmobiliaria Profesional (UAGRM)",
      desc: "Enfoque para captar futuros profesionales calificados a fin de planificar la compra de su primer lote a mediano plazo (2 a 5 años). Mide la permanencia en biblioteca e involucra la comunicación institucional directa. [Métricas: 32K Estudiantes Activos • 97% Área Cobertura • 4.2hrs Permanencia Académica]"
    },
    {
      name: "Salud y Clínicas",
      index: 11,
      id: "PB9TO2gz6eE",
      icon: "🏥",
      focus: "Monitoreo e Información en Sala de Espera",
      desc: "Transforma el tiempo ocioso en las salas de espera de pacientes en cuestionarios de atención voluntaria, educación profiláctica de prevención e información institucional médica relevante en una red segura. [Métricas: 8.2K Visitantes Diarios • 34min Reducción de Esperas • Red Segura de Datos]"
    },
    {
      name: "Coworking e Oficinas",
      index: 12,
      id: "PB9TO2gz6eE",
      icon: "💻",
      focus: "Presencia de Miembros y Automatización de Cobro",
      desc: "Rastrea la ocupación en tiempo real de salas de juntas y escritorios compartidos. Ofrece pasarelas de pago de membresías recurrentes y portales cautivos dinámicos y unificados corporativos de Empresa LIBRE para residentes y profesionales. [Métricas: 2.4K Miembros Activos • 73% Tasa de Ocupación Utilizada • 4.8hrs Sesión Promedio]"
    },
    {
      name: "Transporte y Estaciones de Pasajeros",
      index: 13,
      id: "PB9TO2gz6eE",
      icon: "🚌",
      focus: "Ejes Conectores y Captación de Lotes Sub-urbanos",
      desc: "La mejor forma de capturar masivamente perfiles de compradores potenciales de lotes con un coste publicitario ínfimo, en terminales de alto flujo y estaciones con largos tiempos de espera residencial. [Métricas: 180K Viajeros Diarios • 12min Tiempo de Espera Medio • 94% Precisión Predictiva]"
    },
    {
      name: "Casinos y Centros de Entretenimiento",
      index: 14,
      id: "PB9TO2gz6eE",
      icon: "🎰",
      focus: "Comportamiento en Pisos de Juego e Inversores",
      desc: "Segmenta clientes de alto valor, identificando y analizando el comportamiento de visitas y retornos. Ofrece beneficios instantáneos para salas de VIP y conserjería de alta gama. [Métricas: 18K Visitantes Diarios • 3.8hrs Tiempo de Estadía • $340 Ingreso por Visitante]"
    },
    {
      name: "Destinos y Sitios Públicos de Gran Escala",
      index: 15,
      id: "PB9TO2gz6eE",
      icon: "🏔️",
      focus: "Promoción Inmobiliaria Turística (La Paz, Salar de Uyuni y Áreas Públicas)",
      desc: "Excelente canal interactivo para promocionar terrenos y cabañas vacacionales de alta rentabilidad de inversión entre turistas en La Paz, Uyuni y lugares cívicos clave. Atiende la demanda recreativa registrando de forma voluntaria las intenciones de compra del usuario de manera 100% digital sin requerir hardware adicional del cliente final. [Métricas: 4.2K Turistas Diarios • 2.1hrs Tiempo de Visita en Destino • 92% Uso del WiFi]"
    }
  ];

  const pricingConfig = {
    'co-sponsored': {
      price: '$2,222 USD',
      apertura: '$733.26',
      contraEntrega: '$1,488.74',
      equipos: 'Hasta 22 equipos',
      equipoAdicional: '$144 USD/año',
      badge: '🤝 MODELO CO-PATROCINADO',
      badgeClass: 'text-emerald-400',
      desc: 'Recibe publicidad global y dirigida de otros rubros. Reparto transparente de dividendos generados por anunciantes.',
      altDesc: '💡 Opción sin publicidad externa (Autónomo): $8,888 USD/año (hasta 128 equipos) o ADS Libre ($4,444 USD/año) para más de 5,000 usuarios simultáneos.'
    },
    'autonomous': {
      price: '$8,888 USD',
      apertura: '$2,933.04',
      contraEntrega: '$5,954.96',
      equipos: 'Hasta 128 equipos',
      equipoAdicional: '$222 USD/año',
      badge: '👑 AUTONOMÍA ABSOLUTA',
      badgeClass: 'text-amber-400',
      desc: '100% libre de anuncios ajenos. Solo se exhibe publicidad propia de la inmobiliaria o condominio.',
      altDesc: '💡 Opción co-patrocinada de bajo costo: $2,222 USD/año (hasta 22 equipos) o ADS Libre ($4,444 USD/año) con integración de redes publicitarias.'
    },
    'ads-network': {
      price: '$4,444 USD',
      apertura: '$1,466.52',
      contraEntrega: '$2,977.48',
      equipos: 'Alta Densidad (Ilimitado)',
      equipoAdicional: '$188 USD/año',
      badge: '🌍 LICENCIA ADS LIBRE (GLOBAL NETWORKS - ASOCIADO IAB)',
      badgeClass: 'text-sky-400',
      desc: 'Para redes masivas de más de 5,000 clientes simultáneos. Integración directa con 26 redes globales de anuncios y analíticas certificadas por la IAB en 47 países mediante Pay Libre USA (propiedad de Juan Pablo Yáñez Melgar). Monetiza el tráfico con inyección programática con CPM alto y CTR preferencial.',
      altDesc: '💡 Respaldo institucional de la de mayor asociación mundial (IAB) y pasarela de cobro unificada con Pay Libre USA.'
    }
  };

  // State controls for global integrations grid (Licencia ADS Libre)
  const [integrationSearch, setIntegrationSearch] = useState('');
  const [integrationFilter, setIntegrationFilter] = useState<'all' | 'analytics' | 'ads'>('all');

  const globalIntegrationsList = [
    {
      id: "google-analytics",
      name: "Google Analytics 4",
      logo: "📊",
      category: "Analytics & Ads",
      type: "Direct",
      popular: true,
      desc: "Envía eventos de clientes de WiFi directamente a Google Analytics 4 para una medición unificada online y offline en todas las ubicaciones de tus clientes."
    },
    {
      id: "google-ads",
      name: "Google Ads",
      logo: "🎯",
      category: "Analytics & Ads",
      type: "Direct",
      popular: true,
      desc: "Construye audiencias de Google Ads Customer Match directamente a partir de los datos de huéspedes de WiFi capturados en las ubicaciones de tus clientes."
    },
    {
      id: "facebook-ads",
      name: "Facebook Ads",
      logo: "👥",
      category: "Analytics & Ads",
      type: "Direct",
      popular: true,
      desc: "Crea audiencias personalizadas de Meta a través del Conversions API y re-segmenta a los visitantes de las ubicaciones de tus clientes en Facebook e Instagram."
    },
    {
      id: "meta-business-suite",
      name: "Meta Business Suite",
      logo: "🏪",
      category: "Analytics & Ads",
      type: "Zapier",
      popular: false,
      desc: "Conecta datos de huéspedes de WiFi a Meta Business Suite para un marketing unificado en Facebook e Instagram."
    },
    {
      id: "linkedin-ads",
      name: "LinkedIn Ads",
      logo: "💼",
      category: "Analytics & Ads",
      type: "Zapier",
      popular: false,
      desc: "Construye audiencias coincidentes de LinkedIn a partir de datos de WiFi para re-segmentación B2B. Ideal para centros de conferencias y oficinas de coworking."
    },
    {
      id: "tiktok-ads",
      name: "TikTok Ads",
      logo: "🎵",
      category: "Analytics & Ads",
      type: "Webhook",
      popular: false,
      desc: "Envía segmentos de huéspedes de WiFi en tus ubicaciones directamente a audiencias de TikTok. Muy útil para captar demografía joven."
    },
    {
      id: "adroll",
      name: "AdRoll",
      logo: "🔄",
      category: "Analytics & Ads",
      type: "Zapier",
      popular: false,
      desc: "Sincroniza listas de huéspedes de WiFi con AdRoll para re-segmentación en la web abierta y redes sociales."
    },
    {
      id: "criteo",
      name: "Criteo",
      logo: "📈",
      category: "Analytics & Ads",
      type: "Webhook",
      popular: false,
      desc: "Envía audiencias de WiFi a Criteo. Vincula los datos de visita física con el gráfico de compradores masivos de Criteo para retargeting dinámico."
    },
    {
      id: "hotjar",
      name: "Hotjar",
      logo: "🔥",
      category: "Analytics & Ads",
      type: "Webhook",
      popular: false,
      desc: "Envía interacciones de portal cautivo a Hotjar para mapas de calor y grabaciones de sesiones para optimizar la conversión de portales."
    },
    {
      id: "mixpanel",
      name: "Mixpanel",
      logo: "⚡",
      category: "Analytics & Ads",
      type: "Zapier",
      popular: false,
      desc: "Envía eventos de WiFi a Mixpanel para que tus clientes puedan analizar visitas físicas junto con el uso de productos digitales (funnels, cohortes y retención)."
    },
    {
      id: "amplitude",
      name: "Amplitude",
      logo: "🧬",
      category: "Analytics & Ads",
      type: "Zapier",
      popular: false,
      desc: "Transfiere eventos de WiFi de huéspedes a Amplitude para analítica de comportamiento que combina visitas presenciales y actividad de apps."
    },
    {
      id: "segment",
      name: "Segment CDP",
      logo: "🧱",
      category: "Analytics & Ads",
      type: "Direct",
      popular: true,
      desc: "Transfiere datos de WiFi a través de Segment Customer Data Platform a cualquier herramienta que usen tus clientes. Soporte completo."
    },
    {
      id: "heap",
      name: "Heap",
      logo: "📉",
      category: "Analytics & Ads",
      type: "Zapier",
      popular: false,
      desc: "Transmite eventos de portal cautivo a Heap para analíticas de captura automática sin etiquetado manual."
    },
    {
      id: "posthog",
      name: "PostHog",
      logo: "🦔",
      category: "Analytics & Ads",
      type: "Zapier",
      popular: false,
      desc: "Envía eventos a PostHog para analíticas de producto y pruebas de características dinámicas en la experiencia del portal WiFi."
    },
    {
      id: "google-tag-manager",
      name: "Google Tag Manager",
      logo: "🏷️",
      category: "Analytics & Ads",
      type: "Zapier",
      popular: false,
      desc: "Dispara eventos de GTM desde acciones de WiFi para centralizar todas las etiquetas de rastreo físico en un solo contenedor."
    },
    {
      id: "snapchat-ads",
      name: "Snapchat Ads",
      logo: "👻",
      category: "Analytics & Ads",
      type: "Zapier",
      popular: false,
      desc: "Transfiere audiencias de WiFi a Snapchat Ads para alcanzar audiencias Gen Z con facilidad."
    },
    {
      id: "samba-networks",
      name: "Samba Networks",
      logo: "📺",
      category: "Ad Networks",
      type: "Ad Tag",
      popular: true,
      desc: "Integración VAST/OpenRTB para reproducir anuncios de video de Samba TV en el portal cautivo tras el login con reparto de utilidades directo."
    },
    {
      id: "google-ad-manager",
      name: "Google Ad Manager",
      logo: "💰",
      category: "Ad Networks",
      type: "Ad Tag",
      popular: true,
      desc: "Integración VAST/OpenRTB para servir anuncios premium de Google Ad Manager en portales cautivos pos-login con share de ganancias."
    },
    {
      id: "meta-audience-network",
      name: "Meta Audience Network",
      logo: "📱",
      category: "Ad Networks",
      type: "Ad Tag",
      popular: true,
      desc: "Integración de tags VAST/OpenRTB para servir anuncios de Meta Audience Network con alta visibilidad y revenue share directo."
    },
    {
      id: "tiktok-business",
      name: "TikTok for Business",
      logo: "🏢",
      category: "Ad Networks",
      type: "Ad Tag",
      popular: true,
      desc: "Integración de tags VAST/OpenRTB para inyectar publicidad de TikTok Business con altas tasas de visualización."
    },
    {
      id: "magnite",
      name: "Magnite",
      logo: "🪙",
      category: "Ad Networks",
      type: "Ad Tag",
      popular: false,
      desc: "Conexión de tags VAST/OpenRTB con el SSP de Magnite para monetizar el tráfico físico masivo de portales cautivos."
    },
    {
      id: "pubmatic",
      name: "PubMatic",
      logo: "📡",
      category: "Ad Networks",
      type: "Ad Tag",
      popular: false,
      desc: "Habilita el SSP de PubMatic para subastas de anuncios en tiempo real (RTB) del tráfico inalámbrico."
    },
    {
      id: "xandr",
      name: "Xandr (Microsoft)",
      logo: "💻",
      category: "Ad Networks",
      type: "Ad Tag",
      popular: false,
      desc: "Integración de tags VAST/OpenRTB con Xandr para servir anuncios directos de Microsoft en portales de alta densidad."
    },
    {
      id: "amazon-publisher",
      name: "Amazon Publisher Services",
      logo: "📦",
      category: "Ad Networks",
      type: "Ad Tag",
      popular: false,
      desc: "Servidor VAST/OpenRTB para conectar APS directamente al login e inyectar anuncios altamente rentables."
    },
    {
      id: "facebook-pixel",
      name: "Facebook Pixel",
      logo: "👾",
      category: "Analytics & Ads",
      type: "Native",
      popular: true,
      desc: "Re-segmentación automática de huéspedes de WiFi en todas las plataformas de Meta de forma nativa."
    },
    {
      id: "accuweather",
      name: "AccuWeather",
      logo: "☀️",
      category: "Analytics & Ads",
      type: "Native",
      popular: false,
      desc: "Campañas inteligentes disparadas por condiciones climáticas en tiempo real según la ubicación geográfica del hotspot."
    }
  ];

  // Handle Hash Sync in case window is available
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#Hotspot-Libre') setActiveTab('libre');
      else if (hash === '#Hotspot-Movil') setActiveTab('movil');
      else if (hash === '#Intranet-360') setActiveTab('intranet');
      else if (hash === '#MetroMesh') setActiveTab('metromesh');
    };
    
    // Sync initial hash
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const changeTab = (tab: 'libre' | 'movil' | 'intranet' | 'metromesh') => {
    setActiveTab(tab);
    // Silent hash update
    const hashLabel = tab === 'libre' ? 'Hotspot-Libre' : 
                      tab === 'movil' ? 'Hotspot-Movil' : 
                      tab === 'intranet' ? 'Intranet-360' : 'MetroMesh';
    window.history.pushState(null, '', `#${hashLabel}`);
  };

  // Origen de ingresos interactivo y dividendos
  const [revenueOption, setRevenueOption] = useState<'voucher' | 'sponsor' | 'agency' | 'iab'>('voucher');

  // Pricing constants (BOB)
  const PLAN_PREPAGO_PRICE = 49;
  const PLAN_IPTV_SOLO_PRICE = 49;
  const PLAN_COMBO_PRICE = 88;
  const PLAN_TRIPLE_PRICE = 108;
  const PLAN_RESIDENCIAL_PRICE = 610;

  // Calculators
  const calculateROI = (pricePerUnit: number) => {
    const totalCollected = usersCount * pricePerUnit;
    
    // Electricity cost: dynamic per user + base
    const electricityCost = Math.round(usersCount * 0.15 + 100);
    
    // Internet Backhaul cost
    let internetCost = 0;
    let connectionsQty = 0;
    let connectionType = "";
    
    if (hasFiberOptic) {
      connectionsQty = Math.max(1, Math.ceil(usersCount / 128)); // Cada enlace soporta un máximo de 128 usuarios
      internetCost = connectionsQty * 400; // 400 BOB por enlace
      connectionType = `Fibra Óptica (${connectionsQty} enlace${connectionsQty > 1 ? 's' : ''})`;
    } else {
      connectionsQty = Math.max(1, Math.ceil(usersCount / 128)); // 1 Starlink por cada 128 usuarios simultáneos (comprar antena Bs. 2.800)
      internetCost = connectionsQty * 380; // 380 BOB de mensualidad satelital
      connectionType = `Starlink (${connectionsQty} antena${connectionsQty > 1 ? 's' : ''})`;
    }
    
    const totalCosts = electricityCost + internetCost;
    
    // CapEx antenna purchase cost (antena Starlink Bs. 2.800)
    const starlinkCapEx = !hasFiberOptic ? connectionsQty * 2800 : 0;
    
    // Revenue to distribute after operational costs
    const subtotalDistributed = Math.max(0, totalCollected - totalCosts);
    
    // Ratios of distribution:
    let concedenteRatio = 0.33;     // Empresa LIBRE
    let concesionarioRatio = 0.67;   // Propietario de los equipos / Inmobiliaria
    let agencyRatio = 0.00;          // Agencia o agente de marketing
    
    if (revenueOption === 'agency') {
      concedenteRatio = 0.33;
      concesionarioRatio = 0.33;
      agencyRatio = 0.34;
    }
    
    // Ratios applied to distributed subtotal:
    const royalties = Math.round(subtotalDistributed * concedenteRatio);
    const profit = Math.round(subtotalDistributed * concesionarioRatio);
    const agencyPayment = Math.round(subtotalDistributed * agencyRatio);
    
    // Detailed partner payments out of the concessionary channel
    const agenciesPayment = Math.round(profit * 0.15); // 15% agency commission (from the owner's share)
    const affiliatesPayment = Math.round(profit * 0.10); // 10% affiliate commission (from the owner's share)
    const netDeveloperProfit = Math.max(0, profit - agenciesPayment - affiliatesPayment);
    
    return { 
      total: totalCollected, 
      electricityCost,
      internetCost,
      connectionsQty,
      connectionType,
      starlinkCapEx,
      totalCosts,
      subtotalDistributed,
      royalties, 
      profit,
      agencyPayment,
      agenciesPayment,
      affiliatesPayment,
      netDeveloperProfit,
      concedenteRatio,
      concesionarioRatio,
      agencyRatio
    };
  };

  const planPrepago = calculateROI(PLAN_PREPAGO_PRICE);
  const planIptvSolo = calculateROI(PLAN_IPTV_SOLO_PRICE);
  const planCombo = calculateROI(PLAN_COMBO_PRICE);
  const planTriple = calculateROI(PLAN_TRIPLE_PRICE);
  const planResidencial = calculateROI(PLAN_RESIDENCIAL_PRICE);

  // Handles lead simulation execution
  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!lead.name || !lead.phone) return;
    setLeadSubmitted(true);
    setTimeout(() => {
      // Auto reset after some seconds
      setLeadSubmitted(false);
      setLead({ name: '', email: '', phone: '', acceptedTerms: true });
    }, 8000);
  };

  // Simulates backhaul mesh toggle
  const toggleMeshNode = (node: 'nodeA' | 'nodeB' | 'nodeC' | 'nodeD') => {
    setMeshNodesStatus(prev => {
      const nextState = prev[node] === 'active' ? 'offline' : 'active';
      const updated = { ...prev, [node]: nextState };
      
      // Calculate fake error rate/redundancy fallback
      const activeCount = Object.values(updated).filter(s => s === 'active').length;
      if (activeCount === 4) {
        setMeshErrorRate('0.00% (Estabilidad Total)');
      } else if (activeCount === 3) {
        setMeshErrorRate('0.02% (Redundancia Activa 60GHz)');
      } else if (activeCount === 2) {
        setMeshErrorRate('1.80% (Sobrecarga de Red)');
      } else {
        setMeshErrorRate('99.9% (Mesh Caído)');
      }
      return updated;
    });
  };

  return (
    <div className="relative min-h-screen text-gray-200 font-sans selection:bg-[#10B981]/20">
      
      {/* Dynamic Grid Background with Glow effects */}
      <div className="absolute inset-0 z-0 bg-[#080C14] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-950/20 via-slate-950/40 to-[#080C14]" />
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }} 
        />
        {/* Abstract Glowing Aura blobs */}
        <div className="absolute top-1/4 -left-36 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 -right-36 w-96 h-96 bg-emerald-600/5 rounded-full blur-[140px]" />
      </div>

      {/* HEADER SECTION / NAVIGATION */}
      <header className="sticky top-0 z-50 w-full flex flex-col">
        {/* UPPER DOMAIN MARQUEE (Marquesina superior estilo or.oe.bolivia.bo) */}
        <div className="w-full bg-[#071311]/90 backdrop-blur-md border-b border-[#10B981]/20 py-2.5 overflow-hidden text-xs relative select-none">
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee-infinite {
              display: flex;
              width: max-content;
              animation: marquee 45s linear infinite;
            }
            .animate-marquee-infinite:hover {
              animation-play-state: paused;
            }
          `}</style>
          
          <div className="animate-marquee-infinite flex gap-8 items-center cursor-pointer">
            {/* Array of department domains repeated twice for scrolling continuity */}
            {[
              { label: 'artesanias.shop', emoji: '🎨', url: 'https://artesanias.shop' },
              { label: 'libre.bo', emoji: '⚡', url: 'https://libre.bo' },
              { label: 'tienda.bo', emoji: '🛒', url: 'https://tienda.bo' },
              { label: 'organicos.shop', emoji: '🌿', url: 'https://organicos.shop' },
              { label: 'prima.red', emoji: '🔴', url: 'https://prima.red' },
              { label: 'directorio.bio', emoji: '🌐', url: 'https://directorio.bio' },
              { label: 'profesional.red', emoji: '💼', url: 'https://profesional.red' },
              { label: 'esplendor.academy', emoji: '🎓', url: 'https://esplendor.academy' },
              { label: 'eventos.red', emoji: '🎟️', url: 'https://eventos.red' },
              { label: 'influencer.soy', emoji: '🌟', url: 'https://influencer.soy' },
              { label: 'soy.red', emoji: '🔵', url: 'https://soy.red' },
              { label: 'inmuebles.red', emoji: '🏠', url: 'https://inmuebles.red' },
              { label: 'motores.red', emoji: '🚗', url: 'https://motores.red' },
              { label: 'red.bo', emoji: '🌎', url: 'https://red.bo' },
              { label: 'empleos.red', emoji: '💼', url: 'https://empleos.red' },
              { label: 'servicios.red', emoji: '🛠️', url: 'https://servicios.red' },
              { label: 'talento.global', emoji: '🌍', url: 'https://talento.global' },
              { label: 'turismo.red', emoji: '✈️', url: 'https://turismo.red' },
              { label: 'oe.bolivia.bo', emoji: '📊', url: 'https://oe.bolivia.bo' },
            ].concat([
              { label: 'artesanias.shop', emoji: '🎨', url: 'https://artesanias.shop' },
              { label: 'libre.bo', emoji: '⚡', url: 'https://libre.bo' },
              { label: 'tienda.bo', emoji: '🛒', url: 'https://tienda.bo' },
              { label: 'organicos.shop', emoji: '🌿', url: 'https://organicos.shop' },
              { label: 'prima.red', emoji: '🔴', url: 'https://prima.red' },
              { label: 'directorio.bio', emoji: '🌐', url: 'https://directorio.bio' },
              { label: 'profesional.red', emoji: '💼', url: 'https://profesional.red' },
              { label: 'esplendor.academy', emoji: '🎓', url: 'https://esplendor.academy' },
              { label: 'eventos.red', emoji: '🎟️', url: 'https://eventos.red' },
              { label: 'influencer.soy', emoji: '🌟', url: 'https://influencer.soy' },
              { label: 'soy.red', emoji: '🔵', url: 'https://soy.red' },
              { label: 'inmuebles.red', emoji: '🏠', url: 'https://inmuebles.red' },
              { label: 'motores.red', emoji: '🚗', url: 'https://motores.red' },
              { label: 'red.bo', emoji: '🌎', url: 'https://red.bo' },
              { label: 'empleos.red', emoji: '💼', url: 'https://empleos.red' },
              { label: 'servicios.red', emoji: '🛠️', url: 'https://servicios.red' },
              { label: 'talento.global', emoji: '🌍', url: 'https://talento.global' },
              { label: 'turismo.red', emoji: '✈️', url: 'https://turismo.red' },
              { label: 'oe.bolivia.bo', emoji: '📊', url: 'https://oe.bolivia.bo' },
            ]).map((d, index) => (
              <a
                key={index}
                href={d.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[10px] font-mono font-bold text-[#10B981]/80 hover:text-white hover:bg-[#10B981]/20 border border-[#10B981]/15 hover:border-[#10B981]/40 transition-all duration-300 bg-[#040f0d]/50"
              >
                <span>{d.emoji}</span>
                <span>{d.label}</span>
              </a>
            ))}
          </div>
        </div>

        <nav id="navbar" className="w-full glass-panel border-b border-white/5 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center gap-3">
              <div id="logo-icon animate-pulse" className="p-2.5 bg-emerald-950/40 border border-emerald-500/30 rounded-xl">
                <Radio className="w-6 h-6 text-[#10B981]" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg tracking-wider font-extrabold text-white">
                  monetiza<span className="text-[#10B981]">.inmuebles.red</span>
                </span>
                <span className="text-[9px] font-mono tracking-widest text-[#10B981] uppercase font-bold">
                  Empresa LIBRE · PropTech Core
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1.5 font-mono text-xs">
              <button 
                onClick={() => changeTab('libre')}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${activeTab === 'libre' ? 'text-white bg-white/5 border border-white/10' : 'text-gray-400 hover:text-white'}`}
              >
                /Hotspot-Libre
              </button>
              <button 
                onClick={() => changeTab('movil')}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${activeTab === 'movil' ? 'text-white bg-white/5 border border-white/10' : 'text-gray-400 hover:text-white'}`}
              >
                /Hotspot-Movil
              </button>
              <button 
                onClick={() => changeTab('intranet')}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${activeTab === 'intranet' ? 'text-white bg-white/5 border border-white/10' : 'text-gray-400 hover:text-white'}`}
              >
                /Intranet-360
              </button>
              <button 
                onClick={() => changeTab('metromesh')}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${activeTab === 'metromesh' ? 'text-white bg-white/5 border border-white/10' : 'text-gray-400 hover:text-white'}`}
              >
                /MetroMesh
              </button>
              <a 
                href="#roi-calculator" 
                className="ml-3 px-4 py-2 rounded-lg text-emerald-400 hover:text-emerald-300 flex items-center gap-1 bg-emerald-500/5 hover:bg-emerald-500/10 transition-colors"
              >
                <TrendingUp className="w-3.5 h-3.5" />
                Simular ROI
              </a>
            </div>

            {/* Direct Professional CTA */}
            <div className="flex items-center gap-2">
              <a 
                href="#propuesta-comercial"
                className="relative px-3.5 py-1.5 sm:px-4 sm:py-2 bg-slate-900 border border-emerald-500/30 hover:border-emerald-500/60 text-white font-semibold text-xs sm:text-xs rounded-xl transition-all duration-300 flex items-center gap-2 shadow-md hover:scale-[1.02]"
                id="btn-concesion-saas"
              >
                <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                <span>Concesión $2,222 USD</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
      </header>

      {/* BODY CONTENT WRAPPER */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-16 sm:space-y-32">
        
        {/* SECTION 1: HERO IMPACTANTE ("El Mundo Cambió") */}
        <section id="hero" className="relative space-y-8 text-center max-w-4xl mx-auto py-4 sm:py-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-[#10B981] font-mono uppercase tracking-wider mb-2">
            <Zap className="w-3.5 h-3.5 animate-pulse" />
            Económico-Garantista y PropTech Disruptivo Bolivia
          </div>
          
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            El mundo cambió.
            <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 bg-clip-text text-transparent glow-text-emerald">
              Deja de vender lotes baldíos;
            </span>
            <span className="text-xl sm:text-3xl md:text-4xl block mt-3 font-semibold text-slate-300 tracking-normal font-sans">
              es hora de facturar ingresos digitales recurrentes.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Conecta el ecosistema de <strong>Empresa LIBRE</strong> desde el primer día. Acelera drásticamente la velocidad de absorción de tus terrenos y conserva un flujo de caja permanente post-venta sin fecha de caducidad.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a 
              href="#roi-calculator" 
              className="w-full sm:w-auto px-8 py-4 bg-slate-950 text-white border border-emerald-500/30 hover:border-emerald-500/60 rounded-xl font-medium transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group hover:shadow-emerald-500/5"
            >
              <TrendingUp className="w-5 h-5 text-emerald-400" />
              Simulador ROI en Vivo
              <ArrowRight className="w-4 h-4 text-emerald-400 transition-transform group-hover:translate-x-1" />
            </a>
            <button 
              onClick={() => {
                const helper = document.getElementById('architectures');
                helper?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl transition-all duration-300 shadow-lg glow-btn flex items-center justify-center gap-2"
            >
              <Cpu className="w-5 h-5" />
              Explorar Arquitecturas (4)
            </button>
          </div>

          {/* Core Benefit Microcards (Symmetrical Grid for Mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pt-12 text-left">
            <div className="glass-panel p-5 sm:p-6 rounded-2xl border-white/5 flex gap-4">
              <div className="p-3 bg-emerald-900/20 border border-emerald-500/20 rounded-xl h-fit">
                <Clock className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="font-display text-white font-bold text-lg mb-1">Caja Perpetua</h3>
                <p className="text-xs text-gray-400 leading-relaxed">Seguridad de ingresos B2B mensuales de condominios enteros, cobrando tasas por servicios obligatorios integrados.</p>
              </div>
            </div>
            
            <div className="glass-panel p-5 sm:p-6 rounded-2xl border-white/5 flex gap-4">
              <div className="p-3 bg-teal-900/20 border border-teal-500/20 rounded-xl h-fit">
                <Users className="w-6 h-6 text-teal-400" />
              </div>
              <div>
                <h3 className="font-display text-white font-bold text-lg mb-1">Absorción un 45% más rápida</h3>
                <p className="text-xs text-gray-400 leading-relaxed">Vende terrenos equipados con Internet residencial de alta fidelidad, IPTV y cámaras desde el instante de compra.</p>
              </div>
            </div>

            <div className="glass-panel p-5 sm:p-6 rounded-2xl border-white/5 flex gap-4">
              <div className="p-3 bg-indigo-900/20 border border-indigo-500/20 rounded-xl h-fit">
                <Shield className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <h3 className="font-display text-white font-bold text-lg mb-1">Garantía Incondicional</h3>
                <p className="text-xs text-gray-400 leading-relaxed">Infraestructura libre de cuellos de botella con equipamientos de nivel empresarial Cambium Networks, homologados.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: ARQUITECTURAS TECNOLÓGICAS (Simulated Subroutes & Interactive Tab Dashboard) */}
        <section id="architectures" className="space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#10B981] font-bold">
              4 Ejes de Red Inalámbrica Masiva
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Arquitecturas Certificadas PropTech
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              Cada módulo funciona como una subruta de negocio dedicada de Empresa LIBRE. Selecciona una arquitectura abajo para inspeccionar el simulador y requerimientos técnicos reales.
            </p>
          </div>

          {/* Symmetrical Grid for Selector Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 max-w-5xl mx-auto font-mono text-xs">
            <button
              onClick={() => changeTab('libre')}
              className={`p-3 sm:p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all duration-300 ${
                activeTab === 'libre' 
                  ? 'bg-emerald-950/40 border-emerald-500/50 text-[#10B981]' 
                  : 'bg-slate-950/40 border-white/5 text-gray-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-5 h-5" />
              <span>/Hotspot-Libre</span>
              <span className="text-[9px] text-[#10B981] font-semibold">Captación Leads</span>
            </button>
            <button
              onClick={() => changeTab('movil')}
              className={`p-3 sm:p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all duration-300 ${
                activeTab === 'movil' 
                  ? 'bg-emerald-950/40 border-emerald-500/50 text-[#10B981]' 
                  : 'bg-slate-950/40 border-white/5 text-gray-400 hover:text-white'
              }`}
            >
              <Globe className="w-5 h-5" />
              <span>/Hotspot-Movil</span>
              <span className="text-[9px] text-[#10B981] font-semibold">Starlink en Ruta</span>
            </button>
            <button
              onClick={() => changeTab('intranet')}
              className={`p-3 sm:p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all duration-300 ${
                activeTab === 'intranet' 
                  ? 'bg-emerald-950/40 border-emerald-500/50 text-[#10B981]' 
                  : 'bg-slate-950/40 border-white/5 text-gray-400 hover:text-white'
              }`}
            >
              <Layers className="w-5 h-5" />
              <span>/Intranet-360</span>
              <span className="text-[9px] text-[#10B981] font-semibold">Nodo Triple Play</span>
            </button>
            <button
              onClick={() => changeTab('metromesh')}
              className={`p-3 sm:p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all duration-300 ${
                activeTab === 'metromesh' 
                  ? 'bg-emerald-950/40 border-emerald-500/50 text-[#10B981]' 
                  : 'bg-slate-950/40 border-white/5 text-gray-400 hover:text-white'
              }`}
            >
              <Network className="w-5 h-5" />
              <span>/MetroMesh</span>
              <span className="text-[9px] text-[#10B981] font-semibold">Red sin Postes</span>
            </button>
          </div>

          {/* DYNAMIC VIEW CONTAINER: Isolates selected route as requested */}
          <div className="glass-panel rounded-3xl border-white/5 overflow-hidden shadow-2xl relative">
            
            {/* Simulated Browser Bar representing subroutes (as monetiza.inmuebles.red/Hotspot-Libre) */}
            <div className="bg-[#0b0e17] border-b border-white/5 px-4 sm:px-6 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-red-500/30" />
                <span className="w-3.5 h-3.5 rounded-full bg-yellow-500/30" />
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-500/30" />
              </div>
              <div className="bg-slate-950/80 px-4 py-1 rounded-lg border border-white/5 max-w-full text-[11px] sm:text-xs text-gray-400 font-mono flex items-center gap-1.5 overflow-x-auto whitespace-nowrap">
                <Globe className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                <span>monetiza.inmuebles.red</span>
                <span className="text-emerald-400 font-extrabold font-sans">
                  {activeTab === 'libre' && '/Hotspot-Libre'}
                  {activeTab === 'movil' && '/Hotspot-Movil'}
                  {activeTab === 'intranet' && '/Intranet-360'}
                  {activeTab === 'metromesh' && '/MetroMesh'}
                </span>
              </div>
              <div className="text-gray-500 flex items-center gap-3">
                <Share2 className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>

            {/* TAB-DEPENDENT CONTENT LAYOUT */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10">
              
              {/* Left Column: Descriptive info & specs */}
              <div className="lg:col-span-7 space-y-6">
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {activeTab === 'libre' && (
                      <div className="space-y-5">
                        <div className="flex items-center gap-2">
                          <span className="p-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl font-mono text-xs uppercase font-extrabold">
                            WiFi Marketing Inteligente
                          </span>
                        </div>
                        <h3 className="font-display text-2xl sm:text-3.5xl font-extrabold text-white leading-tight">
                          /Hotspot-Libre: Portales Cautivos para Captura de Leads y Pauta Automatizada cada 33 Minutos.
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          Ideal para zonas de alta concurrencia o Puntos de Presencia (POP) comerciales (como terminales, avenidas centrales o plazas de ventas). Convierte el WiFi gratis en una potente maquinaria de prospección propietaria.
                        </p>
                        
                        {/* Mechanics & Specs */}
                        <div className="space-y-3 bg-slate-950/40 p-4 rounded-2xl border border-white/5 text-xs text-gray-300">
                          <h4 className="font-semibold text-emerald-400 font-mono uppercase tracking-wider mb-2 flex items-center gap-2">
                            <CircleDot className="w-4 h-4 text-emerald-400" /> REGLAS DEL MÓDULO Y MECANISMO
                          </h4>
                          <ul className="space-y-2.5">
                            <li className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                              <span><strong>Captación y Almacenamiento Lead:</strong> Guarda de forma automatizada nombre, WhatsApp y dirección de correo de cada visitante antes de otorgar acceso gratuito de navegación.</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                              <span><strong>Pauta Cíclica de WhatsApp:</strong> Envía automatizaciones cíclicas de WhatsApp directas al smartphone del visitante cada 33 minutos. El acceso tiene vencimiento periódico para motivar la recompra o segunda exposición de tus proyectos.</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                              <span><strong>Publicidad Propia (Inmobiliaria):</strong> Totalmente ilimitada y sin costo (0% de comisiones por los lotes propios). Despliega banners y enlaces de tus proyectos de Urbanizaciones directo en los teléfonos de los visitantes.</span>
                            </li>
                          </ul>
                        </div>

                        {/* Interactive Login Modes Selection */}
                        <div className="space-y-4 bg-slate-950/40 p-6 sm:p-8 rounded-3xl border border-white/10 text-xs text-gray-300">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-4 gap-2">
                            <h4 className="font-semibold text-emerald-400 font-display text-sm uppercase tracking-wider flex items-center gap-2">
                              🔑 MODOS DE LOGIN EN PORTALES CAUTIVOS
                            </h4>
                            <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/20 font-bold self-start sm:self-auto">
                              Interactivo
                            </span>
                          </div>
                          
                          <p className="text-xs text-gray-400 leading-relaxed">
                            Selecciona un método de acceso a continuación para previsualizar en tiempo real el comportamiento dinámico del Portal Cautivo en el simulador móvil de la derecha:
                          </p>
                          
                          {/* Captive Portal Mode Switcher buttons */}
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-slate-900/60 p-2 rounded-2xl border border-white/5">
                            <button 
                              type="button"
                              onClick={() => {
                                setActiveLoginMode('leads');
                                setLeadSubmitted(false);
                              }}
                              className={`px-3 py-2 rounded-xl text-[10px] sm:text-xs font-mono font-bold transition-all duration-300 cursor-pointer ${activeLoginMode === 'leads' ? 'bg-[#10B981] text-slate-950 font-extrabold shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                            >
                              Leads Form
                            </button>
                            <button 
                              type="button"
                              onClick={() => {
                                setActiveLoginMode('whatsapp');
                                setLeadSubmitted(false);
                              }}
                              className={`px-3 py-2 rounded-xl text-[10px] sm:text-xs font-mono font-bold transition-all duration-300 cursor-pointer ${activeLoginMode === 'whatsapp' ? 'bg-[#10B981] text-slate-950 font-extrabold shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                            >
                              WhatsApp
                            </button>
                            <button 
                              type="button"
                              onClick={() => {
                                setActiveLoginMode('voucher');
                                setLeadSubmitted(false);
                              }}
                              className={`px-3 py-2 rounded-xl text-[10px] sm:text-xs font-mono font-bold transition-all duration-300 cursor-pointer ${activeLoginMode === 'voucher' ? 'bg-[#10B981] text-slate-950 font-extrabold shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                            >
                              Voucher QR
                            </button>
                            <button 
                              type="button"
                              onClick={() => {
                                setActiveLoginMode('social');
                                setLeadSubmitted(false);
                              }}
                              className={`px-3 py-2 rounded-xl text-[10px] sm:text-xs font-mono font-bold transition-all duration-300 cursor-pointer ${activeLoginMode === 'social' ? 'bg-[#10B981] text-slate-950 font-extrabold shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                            >
                              Social Auth
                            </button>
                          </div>

                          <div className="text-[10.5px] text-gray-400 space-y-1 bg-slate-950 p-3 rounded-xl border border-white/5 font-sans leading-relaxed">
                            {activeLoginMode === 'leads' && (
                              <p>📌 <strong>Formulario de Leads:</strong> Captura el nombre, WhatsApp y correo personal del usuario. Fomenta la creación de una base de datos propia para tus campañas inmobiliarias.</p>
                            )}
                            {activeLoginMode === 'whatsapp' && (
                              <p>📌 <strong>WhatsApp Validado:</strong> Evita números de teléfono falsos mediante una respuesta automática de WhatsApp. El usuario envía un mensaje instantáneo para activar su navegación gratis.</p>
                            )}
                            {activeLoginMode === 'voucher' && (
                              <p>📌 <strong>Vouchers Prepago QR:</strong> El usuario final compra físicamente o canjea mediante QR un ticket pre-impreso y seguro válido por 33 minutos o navegación ilimitada.</p>
                            )}
                            {activeLoginMode === 'social' && (
                              <p>📌 <strong>Social Auth / Sign-On:</strong> Conectividad simplificada mediante cuentas de Google, Facebook o Apple con un solo toque.</p>
                            )}
                          </div>
                        </div>

                        {/* Specs Grid */}
                        <div className="grid grid-cols-2 gap-4 text-xs">
                          <div className="border border-white/5 p-3 rounded-xl bg-slate-950/20">
                            <span className="text-gray-500 block mb-0.5">Cobertura Omnidireccional:</span>
                            <strong className="text-white">Cambium XV2-2T0 (Hasta 500m)</strong>
                          </div>
                          <div className="border border-white/5 p-3 rounded-xl bg-slate-950/20">
                            <span className="text-gray-500 block mb-0.5">Conexiones Concurrentes:</span>
                            <strong className="text-white">Hasta 1,024 dispositivos activos</strong>
                          </div>
                        </div>

                        {/* WiFi Marketing Video Section */}
                        <div className="space-y-4 bg-slate-950/50 p-5 rounded-2xl border border-white/5">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-white/5 pb-2.5 gap-2">
                            <div>
                              <h4 className="font-semibold text-emerald-400 font-mono text-xs uppercase tracking-wider flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> VIDEOTECA WIFI MARKETING SECTOR DE NEGOCIO INTERACTIVO
                              </h4>
                              <p className="text-[10px] text-gray-500 font-mono uppercase mt-0.5">Selecciona un sector para reproducir el caso de uso descriptivo</p>
                            </div>
                            <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/20 font-bold self-start sm:self-auto shrink-0">
                              6 Sectores Clave
                            </span>
                          </div>

                          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                            {/* Playlist Selector List */}
                            <div className="lg:col-span-5 space-y-2 max-h-[360px] overflow-y-auto pr-1 custom-scrollbar scrollbar-thin scrollbar-thumb-white/10 text-xs">
                              {wifiSectors.map((sec, idx) => {
                                const isActive = activeWifiSector === idx;
                                return (
                                  <button
                                    key={idx}
                                    onClick={() => setActiveWifiSector(idx)}
                                    className={`w-full text-left p-2.5 rounded-xl border transition-all duration-300 flex flex-col gap-1 cursor-pointer relative overflow-hidden ${
                                      isActive 
                                        ? "bg-emerald-500/10 border-emerald-500/30 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]" 
                                        : "bg-slate-950/40 border-white/5 text-gray-400 hover:border-white/10 hover:bg-slate-950/70"
                                    }`}
                                  >
                                    {isActive && (
                                      <div className="absolute top-0 left-0 w-1 h-full bg-emerald-400" />
                                    )}
                                    <div className="flex items-center justify-between w-full">
                                      <div className="flex items-center gap-2">
                                        <span className="text-sm">{sec.icon}</span>
                                        <span className={`font-semibold text-[11px] font-sans ${isActive ? 'text-white' : 'text-gray-300'}`}>
                                          {sec.name}
                                        </span>
                                      </div>
                                      <span className="text-[8px] font-mono opacity-60">ID: {(idx + 1).toString().padStart(2, '0')}</span>
                                    </div>
                                    <div className="text-[9px] font-mono text-emerald-400/80 uppercase font-medium">
                                      {sec.focus}
                                    </div>
                                    {isActive && (
                                      <p className="text-[10px] text-gray-400 leading-normal font-sans mt-1 bg-slate-950/60 p-2 rounded-lg border border-white/5">
                                        {sec.desc}
                                      </p>
                                    )}
                                  </button>
                                );
                              })}
                            </div>

                            {/* Dynamic Video Player Frame */}
                            <div className="lg:col-span-7 flex flex-col justify-between space-y-2">
                              <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-slate-900 shadow-xl">
                                <iframe 
                                  src={`https://www.youtube.com/embed/${wifiSectors[activeWifiSector].id}?list=PLoWpEjI4vkmv1ImYW-UcN7i_VnZqNZpXP&index=${wifiSectors[activeWifiSector].index}`} 
                                  title={`WiFi Marketing en ${wifiSectors[activeWifiSector].name}`} 
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                  allowFullScreen
                                  className="absolute inset-0 w-full h-full"
                                ></iframe>
                              </div>
                              <div className="bg-slate-950/80 p-3 rounded-xl border border-white/5 space-y-1">
                                <div className="flex items-center justify-between text-[10px] font-mono">
                                  <span className="text-gray-500">REPRODUCTOR DE SECTOR ACTIVO:</span>
                                  <span className="text-emerald-400 font-bold">{wifiSectors[activeWifiSector].name} ({wifiSectors[activeWifiSector].icon})</span>
                                </div>
                                <p className="text-[10px] text-gray-400 leading-relaxed font-sans">
                                  <strong>Mecanismo Principal:</strong> {wifiSectors[activeWifiSector].desc}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="pt-2 flex items-center justify-between text-[9px] font-mono text-gray-500 border-t border-white/5">
                            <span>REPRODUCTOR DE PORTALES CAUTIVOS</span>
                            <a 
                              href="https://www.youtube.com/watch?v=PB9TO2gz6eE&list=PLoWpEjI4vkmv1ImYW-UcN7i_VnZqNZpXP&index=2" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-emerald-400 hover:underline flex items-center gap-1 font-bold"
                            >
                              Ver Lista Completa en YouTube 🚀
                            </a>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'movil' && (
                      <div className="space-y-5">
                        <div className="flex items-center gap-2">
                          <span className="p-2 bg-indigo-500/10 border border-indigo-500/20 text-[#10B981] rounded-xl font-mono text-xs uppercase font-extrabold">
                            Conectividad Satelital Starlink
                          </span>
                        </div>
                        <h3 className="font-display text-2xl sm:text-3.5xl font-extrabold text-white leading-tight">
                          /Hotspot-Movil: Puntos de Acceso en Ruta Operados con Antenas Satelitales.
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          No esperes a que lleguen al proyecto para cerrar la operación. Instala Internet satelital de alta fidelidad dentro de los vehículos, vans y buses de cortesía encargados de desplazar a los inversores hacia los condominios campestres.
                        </p>
                        
                        {/* Mechanics & Specs */}
                        <div className="space-y-3 bg-slate-950/40 p-4 rounded-2xl border border-white/5 text-xs text-gray-300">
                          <h4 className="font-semibold text-[#10B981] font-mono uppercase tracking-wider mb-2 flex items-center gap-2">
                            <CircleDot className="w-4 h-4" /> REGLAS DEL MÓDULO Y MECANISMO
                          </h4>
                          <ul className="space-y-2.5">
                            <li className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                              <span><strong>Estabilidad Absoluta en Movimiento:</strong> Sincronización satelital Starlink Corporativa móvil de baja latencia (30-45ms) para transacciones en tiempo real.</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                              <span><strong>Fidelización y Cierre de Tratos:</strong> Permite transaccionar la compra de lotes sobre Google Sheets, videollamadas fluidas o enviar cotizaciones en PDF mientras transitan por la carretera sin cobertura celular convencional.</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                              <span><strong>Marca Inmobiliaria Integrada:</strong> Portal de bienvenida móvil con reproducciones de video-render de alta nitidez que se ejecutan directamente en la memoria caché local del switch Cambium móvil.</span>
                            </li>
                          </ul>
                        </div>

                        {/* Specs Grid */}
                        <div className="grid grid-cols-2 gap-4 text-xs">
                          <div className="border border-white/5 p-3 rounded-xl bg-slate-950/20">
                            <span className="text-gray-500 block mb-0.5">Hardware Vehicular:</span>
                            <strong className="text-white">Starlink Flat High Performance</strong>
                          </div>
                          <div className="border border-white/5 p-3 rounded-xl bg-slate-950/20">
                            <span className="text-gray-500 block mb-0.5">Switch / AP de Celda Móvil:</span>
                            <strong className="text-white">Cambium cnPilot e410 / MicroAP</strong>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'intranet' && (
                      <div className="space-y-5">
                        <div className="flex items-center gap-2">
                          <span className="p-2 bg-emerald-500/10 border border-emerald-500/20 text-[#10B981] rounded-xl font-mono text-xs uppercase font-extrabold">
                            Telecomunicaciones Masivas
                          </span>
                        </div>
                        <h3 className="font-display text-2xl sm:text-3.5xl font-extrabold text-white leading-tight">
                          /Intranet-360: Infraestructura Maestra para Telecomunicaciones Inalámbricas.
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          La espina dorsal de los grandes proyectos condominales. Un potente nodo maestro con 6 antenas sectoriales de 60° configuradas en bandas de espectro limpio (5GHz y 6GHz) que emite señales de alta velocidad de forma centralizada sin depender de infraestructura externa costosa.
                        </p>
                        
                        {/* Mechanics & Specs */}
                        <div className="space-y-3 bg-slate-950/40 p-4 rounded-2xl border border-white/5 text-xs text-gray-300">
                          <h4 className="font-semibold text-emerald-400 font-mono uppercase tracking-wider mb-2 flex items-center gap-2">
                            <CircleDot className="w-4 h-4 text-emerald-400" /> REGLAS DEL MÓDULO Y MECANISMO
                          </h4>
                          <ul className="space-y-2.5 text-[11px] leading-relaxed">
                            <li className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                              <span><strong>Triple Play Unificado:</strong> Entrega simultánea de Internet banda ancha prepago, señal de Televisión digital interactiva (IPTV) y conexión de videovigilancia de alta definición hacia el pórtico del condominio.</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                              <span><strong>Adquisición de Hardware Directa:</strong> El cliente/residente final adquiere directamente su receptor decodificador de IPTV y también su cámara de video de seguridad bajo el estándar abierto <strong>ONVIF</strong> (Open Network Video Interface Forum) para monitorear cómodamente su domicilio desde cualquier ubicación, así como los sensores IoT y alarmas domóticas integradas.</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                              <span><strong>Estándar Carrier Class Obligatorio:</strong> La infraestructura maestra debe componerse estrictamente de hardware profesional Carrier Class (por ejemplo, Cambium Networks, Cisco Meraki o Aruba HPE). Queda expresamente rechazado el uso de equipos domiciliarios o semiprofesionales de marcas como <strong>Ubiquiti o MikroTik</strong> debido a su falta de estabilidad y escala operacional.</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                              <span><strong>Sincronización Nocturna y Nube AI (Opcional):</strong> Empresa LIBRE agrega constantemente nuevos contenidos a la biblioteca IPTV. De <strong>2:00 a 5:30 de la mañana</strong> se actualizan automáticamente los servidores centrales con nuevo contenido multimedia y se sincronizan las cámaras externas con la plataforma en la nube, habilitando de forma opcional algoritmos de Inteligencia Artificial para verificación inteligente de seguridad (detección de intrusiones, búsqueda de personas y prevención del delito).</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                              <span><strong>Caja de Monitoreo Remoto:</strong> Software de gestión remota que reporta de forma continuada consumo general, picos de tráfico en horas pico de IPTV y salud del enlace satelital.</span>
                            </li>
                          </ul>
                        </div>

                        {/* Specs Grid with ATT fine print note */}
                        <div className="grid grid-cols-2 gap-4 text-xs">
                          <div className="border border-white/5 p-3 rounded-xl bg-slate-950/20">
                            <span className="text-gray-500 block mb-0.5">Antenas Sectoriales:</span>
                            <strong className="text-white">6x Cambium XV2-2T1 (Sectorial 120°/1km)</strong>
                          </div>
                          <div className="border border-white/5 p-3 rounded-xl bg-slate-950/20">
                            <span className="text-gray-500 block mb-0.5">Servicios Emitidos:</span>
                            <strong className="text-white">IPTV Masivo + Web + CCTV</strong>
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/10 text-[9.5px] text-gray-400 font-mono tracking-tight leading-normal">
                          <span className="text-emerald-400 font-bold block mb-1">⚖️ REGULACIÓN DE TELECOMUNICACIONES (LETRA CHICA):</span>
                          La operación inalámbrica integrada para redistribución condominal de datos y televisión IPTV requiere de la licencia ATT (Autoridad de Regulación y Fiscalización de Telecomunicaciones y Transportes) correspondiente, de acuerdo a las regulaciones y normativas sectoriales de telecomunicaciones vigentes.
                        </div>

                        {/* IPTV Demo Video Section */}
                        <div className="space-y-3 bg-slate-950/50 p-4 rounded-2xl border border-white/5">
                          <h4 className="font-semibold text-emerald-400 font-mono text-xs uppercase tracking-wider mb-1 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> VIDEOTECA IPTV: DEMOSTRACIÓN DE CANALES Y MENÚ
                          </h4>
                          <p className="text-[10.5px] text-gray-400 mb-2 leading-relaxed">
                            Observa el funcionamiento interactivo de la señal HD de Televisión digital interactiva (IPTV) de Empresa LIBRE e integración con cajas de entretenimiento:
                          </p>
                          <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-slate-900 shadow-xl">
                            <iframe 
                              src="https://www.youtube.com/embed/3Qbaej_rH5E?list=PLoWpEjI4vkms1tpGQ6z2B1J6D7AAKwpwC" 
                              title="Demostración Completa de IPTV" 
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                              allowFullScreen
                              className="absolute inset-0 w-full h-full"
                            ></iframe>
                          </div>
                          <div className="pt-1.5 flex items-center justify-between text-[9px] font-mono text-gray-500">
                            <span>REPRODUCTOR DE LISTA DE REPRODUCCIÓN</span>
                            <a 
                              href="https://www.youtube.com/watch?v=3Qbaej_rH5E&list=PLoWpEjI4vkms1tpGQ6z2B1J6D7AAKwpwC" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-emerald-400 hover:underline flex items-center gap-1 font-bold"
                            >
                              Ver en YouTube 🚀
                            </a>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'metromesh' && (
                      <div className="space-y-5">
                        <div className="flex items-center gap-2">
                          <span className="p-2 bg-emerald-500/10 border border-emerald-500/20 text-[#10B981] rounded-xl font-mono text-xs uppercase font-extrabold">
                            Sistemas Descentralizados Mesh
                          </span>
                        </div>
                        <h3 className="font-display text-2xl sm:text-3.5xl font-extrabold text-white leading-tight">
                          /MetroMesh: Red Condominal Inalámbrica Inteligente Libre de Cableado Aéreo.
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          La clave residencial urbana. Diseña ciudades limpias sin la contaminación visual de marañas de cables telefónicos ni postes sobrecargados. Instala nodos inteligentes estratégicos de 60GHz en esquinas para tejer un manto de conectividad impenetrable.
                        </p>
                        
                        {/* Mechanics & Specs */}
                        <div className="space-y-3 bg-slate-950/40 p-4 rounded-2xl border border-white/5 text-xs text-gray-300">
                          <h4 className="font-semibold text-emerald-400 font-mono uppercase tracking-wider mb-2 flex items-center gap-2">
                            <CircleDot className="w-4 h-4 text-emerald-400" /> REGLAS DEL MÓDULO Y MECANISMO
                          </h4>
                          <ul className="space-y-2.5">
                            <li className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                              <span><strong>Enlaces Backhaul de 60GHz:</strong> Velocidades multi-gigabit equivalentes a fibra óptica instaladas por aire, saltando de nodo a nodo sin necesidad de romper pavimentos.</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                              <span><strong>Mitigación Súper Ágil de Fallos:</strong> El protocolo de ruteo dinámico &quot;Mesh&quot; desvía automáticamente el flujo de datos por un nodo alterno si una rama física se interrumpe, garantizando uptime general de 99.9%.</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                              <span><strong>WiFi Residencial de Cortesía:</strong> Distribuye accesos directos de navegación y pre-registro para nuevos residentes mientras se instalan físicamente en sus propiedades.</span>
                            </li>
                          </ul>
                        </div>

                        {/* Specs Grid */}
                        <div className="grid grid-cols-2 gap-4 text-xs">
                          <div className="border border-white/5 p-3 rounded-xl bg-slate-950/20">
                            <span className="text-gray-500 block mb-0.5">Frecuencia Backhaul:</span>
                            <strong className="text-white">60GHz Terrestre (Inmune a interferencias)</strong>
                          </div>
                          <div className="border border-white/5 p-3 rounded-xl bg-slate-950/20">
                            <span className="text-gray-500 block mb-0.5">Estética Condominal:</span>
                            <strong className="text-white">Postes inexistentes, 100% inalámbrico</strong>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Column: Visual Interactive Interactive Simulator */}
              <div className="lg:col-span-5 bg-slate-950 p-4 sm:p-6 rounded-2xl border border-white/5 space-y-6 flex flex-col justify-between">
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] font-mono tracking-widest text-[#10B981] uppercase font-bold">
                        SIMULADOR INTERACTIVO ACTIVO
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 font-mono">
                      {activeTab === 'libre' && 'Prueba Portal leads'}
                      {activeTab === 'movil' && 'Ruta en vivo Starlink'}
                      {activeTab === 'intranet' && 'Análisis sectorial'}
                      {activeTab === 'metromesh' && 'Comando Self-Healing'}
                    </span>
                  </div>

                  {/* SIMULATOR 1: HOSTPOT LEAD CAPTURE */}
                  {activeTab === 'libre' && (
                    <div className="space-y-4">
                      <div className="text-center">
                        <span className="text-[10px] font-mono text-[#10B981] font-bold uppercase tracking-wider block mb-1">
                          ● Portal Cautivo Activo
                        </span>
                        <p className="text-[11px] text-gray-500">
                          Operando en modo: <strong className="text-white uppercase">{activeLoginMode === 'whatsapp' ? 'WhatsApp' : activeLoginMode}</strong>
                        </p>
                      </div>
                      
                      <div className="w-64 mx-auto border-[6px] border-slate-800 rounded-[32px] bg-[#0d111a] overflow-hidden shadow-2xl relative min-h-[360px] flex flex-col justify-between text-xs">
                        {/* Phone Top Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-slate-800 h-4 w-28 rounded-b-xl z-20 flex items-center justify-center">
                          <span className="w-2 h-2 rounded-full bg-black block" />
                        </div>

                        {/* Screen Content */}
                        {leadSubmitted ? (
                          <div className="p-4 flex flex-col items-center justify-center text-center h-full space-y-4 pt-12">
                            <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-[#10B981] rounded-full">
                              <CheckCircle2 className="w-8 h-8" />
                            </div>
                            <h5 className="font-bold text-white text-sm">¡Acceso Concedido!</h5>
                            <p className="text-[10px] text-gray-400">
                              {activeLoginMode === 'leads' && `Hola ${lead.name || 'Inversor'}, tu acceso rápido de búsqueda ha sido habilitado.`}
                              {activeLoginMode === 'whatsapp' && `Número verificado de WhatsApp. Navegación libre iniciada.`}
                              {activeLoginMode === 'voucher' && `Ticket de Acceso Prepago QR activado de forma exitosa.`}
                              {activeLoginMode === 'social' && `Perfil social validado. Bienvenido al portal inteligente.`}
                            </p>
                            <div className="p-2 bg-slate-900 border border-white/5 rounded-lg text-[9px] text-[#10B981] font-mono">
                              Velocidad: <span className="text-white font-bold">100 Mbps simétricos</span> <br />
                              Renovación: <span className="text-white font-bold">Cada 33 minutos</span>
                            </div>
                            <button
                              onClick={() => setLeadSubmitted(false)}
                              className="text-[9px] text-gray-500 hover:text-white underline mt-2"
                            >
                              Volver a Probar
                            </button>
                          </div>
                        ) : (
                          <div className="p-4 pt-9 flex flex-col justify-between h-full min-h-[320px]">
                            {/* Mode 1: Leads Form */}
                            {activeLoginMode === 'leads' && (
                              <form onSubmit={handleLeadSubmit} className="space-y-3 flex flex-col justify-between h-full">
                                <div className="space-y-1 text-center">
                                  <div className="inline-flex gap-1 items-center px-1.5 py-0.5 bg-slate-900 rounded-full border border-white/5 text-[8px] font-mono text-gray-400">
                                    <Wifi className="w-2 text-emerald-500" /> WiFi GRATIS URBANIZACIONES
                                  </div>
                                  <h5 className="font-extrabold text-[#fafafa] text-[10px] uppercase leading-tight">Registro de Prospección</h5>
                                  <p className="text-[8px] text-gray-500 leading-tight">Completa el formulario para habilitar navegación fluida.</p>
                                </div>

                                <div className="space-y-1.5">
                                  <div>
                                    <label className="text-[8px] text-gray-400 block mb-0.5">Nombre Completo:</label>
                                    <input 
                                      type="text" 
                                      placeholder="Ej: Eduardo Torrez" 
                                      required
                                      value={lead.name}
                                      onChange={(e) => setLead(prev => ({ ...prev, name: e.target.value }))}
                                      className="w-full bg-slate-900 border border-white/5 rounded px-2 py-0.5 text-[9px] text-white focus:outline-none focus:border-emerald-500"
                                    />
                                  </div>
                                  <div>
                                    <label className="text-[8px] text-gray-400 block mb-0.5">WhatsApp Móvil:</label>
                                    <input 
                                      type="tel" 
                                      placeholder="Ej: +591 75593829" 
                                      required
                                      value={lead.phone}
                                      onChange={(e) => setLead(prev => ({ ...prev, phone: e.target.value }))}
                                      className="w-full bg-slate-900 border border-white/5 rounded px-2 py-0.5 text-[9px] text-white focus:outline-none focus:border-emerald-500"
                                    />
                                  </div>
                                  <div>
                                    <label className="text-[8px] text-gray-400 block mb-0.5">Email:</label>
                                    <input 
                                      type="email" 
                                      placeholder="eduardo@correo.com" 
                                      value={lead.email}
                                      onChange={(e) => setLead(prev => ({ ...prev, email: e.target.value }))}
                                      className="w-full bg-slate-900 border border-white/5 rounded px-2 py-0.5 text-[9px] text-white focus:outline-none focus:border-emerald-500"
                                    />
                                  </div>
                                </div>

                                <div className="space-y-1.5 pt-1">
                                  <button 
                                    type="submit" 
                                    className="w-full bg-emerald-500 text-slate-950 font-extrabold uppercase py-1 rounded text-[9px] hover:bg-emerald-400 cursor-pointer"
                                  >
                                    Navegar Gratis
                                  </button>
                                </div>
                              </form>
                            )}

                            {/* Mode 2: WhatsApp Auto-Validation */}
                            {activeLoginMode === 'whatsapp' && (
                              <div className="space-y-4 text-center my-auto">
                                <div className="inline-flex gap-1 items-center px-1.5 py-0.5 bg-emerald-950/40 rounded-full border border-emerald-500/20 text-[8px] font-mono text-emerald-400">
                                  ✓ CELULAR REAL GARANTIZADO
                                </div>
                                <h5 className="font-extrabold text-white text-[11px] uppercase tracking-wide">Pre-Verificar por whatsapp</h5>
                                <p className="text-[9px] text-gray-400 leading-normal">
                                  Presiona el botón para autenticarte y navegar a 100 Mbps al instante.
                                </p>
                                
                                <button 
                                  onClick={() => {
                                    setLead(prev => ({ ...prev, name: 'Usuario WhatsApp', phone: '+591 Enviar' }));
                                    setLeadSubmitted(true);
                                  }}
                                  className="w-full bg-[#10B981] hover:bg-emerald-400 text-slate-950 font-extrabold uppercase tracking-wide py-1.5 rounded text-[9px] shadow-lg flex items-center justify-center gap-1 cursor-pointer"
                                >
                                  <Smartphone className="w-3 h-3" /> Enviar Mensaje & Conectar
                                </button>
                                <p className="text-[7.5px] text-gray-500 italic">
                                  * Abre la app y envía un código pre-armado y seguro para evitar números inventados.
                                </p>
                              </div>
                            )}

                            {/* Mode 3: Voucher Pin Code QR */}
                            {activeLoginMode === 'voucher' && (
                              <div className="space-y-2 flex flex-col justify-between h-full">
                                <div className="space-y-1 text-center">
                                  <div className="inline-flex gap-1 items-center px-1.5 py-0.5 bg-slate-900 rounded-full border border-white/5 text-[8px] font-mono text-gray-400">
                                    🎫 ACCESO PREPAGO UNIFICADO
                                  </div>
                                  <h5 className="font-extrabold text-white text-[10px] uppercase">Vouchers & Tickets QR</h5>
                                  <p className="text-[8px] text-gray-500">Ingresa tu código PIN físico o canjea tu ticket QR.</p>
                                </div>

                                <div className="space-y-2">
                                  <div>
                                    <label className="text-[8px] text-gray-400 block mb-0.5 font-mono">CÓDIGO PIN VOUCHER:</label>
                                    <input 
                                      type="text" 
                                      placeholder="Ej: LIBR-8492-Y7D" 
                                      className="w-full bg-slate-900 border border-white/10 rounded px-2 py-1 text-[11px] text-[#10B981] font-mono text-center focus:outline-none focus:border-emerald-500"
                                    />
                                  </div>
                                  
                                  <div className="text-center">
                                    <span className="text-[8px] text-gray-450 hover:underline cursor-pointer">Pagar Bs. 49 con Código QR</span>
                                  </div>
                                </div>

                                <button 
                                  onClick={() => {
                                    setLead(prev => ({ ...prev, name: 'Voucher Residente', phone: 'Código Canjeado' }));
                                    setLeadSubmitted(true);
                                  }}
                                  className="w-full bg-slate-800 text-white border border-white/10 hover:border-emerald-500/40 font-extrabold uppercase py-1 rounded text-[9px] cursor-pointer"
                                >
                                  Validar Acceso
                                </button>
                              </div>
                            )}

                            {/* Mode 4: Social auth */}
                            {activeLoginMode === 'social' && (
                              <div className="space-y-4 text-center my-auto">
                                <span className="inline-flex gap-1 items-center px-1.5 py-0.5 bg-indigo-950/40 border border-indigo-500/20 rounded-full text-[8px] font-mono text-indigo-300">
                                  ⚡ CONECTOR EN 1 CLIC
                                </span>
                                <h5 className="font-extrabold text-white text-[11px] uppercase">Social Sign-On Integrado</h5>
                                <p className="text-[9px] text-gray-400">Conéctate utilizando tu cuenta verificada preferida.</p>
                                
                                <div className="space-y-2">
                                  <button 
                                    onClick={() => {
                                      setLead(prev => ({ ...prev, name: 'Usuario Google', phone: 'Oauth Verificado' }));
                                      setLeadSubmitted(true);
                                    }}
                                    className="w-full bg-white hover:bg-gray-100 text-slate-950 font-bold py-1 rounded text-[9px] flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                                  >
                                    <Globe className="w-3 h-3 text-red-500" /> Google Account
                                  </button>

                                  <button 
                                    onClick={() => {
                                      setLead(prev => ({ ...prev, name: 'Usuario Facebook', phone: 'Oauth Verificado' }));
                                      setLeadSubmitted(true);
                                    }}
                                    className="w-full bg-[#1877F2] hover:bg-[#166FE5] text-white font-bold py-1 rounded text-[9px] flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                                  >
                                    <Share2 className="w-3 h-3" /> Facebook Login
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* SIMULATOR 2: STARLINK ON MOVEMENT FLAT MAP */}
                  {activeTab === 'movil' && (
                    <div className="space-y-4">
                      <p className="text-[11px] text-gray-400 text-center uppercase font-mono">
                        MAPA SATELITAL DE VEHÍCULOS DE TRASLADO
                      </p>
                      
                      <div className="bg-slate-900 border border-white/5 rounded-2xl p-4 space-y-4">
                        <div className="flex items-center justify-between text-[11px] font-mono">
                          <span className="text-gray-400">VEHÍCULO ADJUNTO:</span>
                          <select 
                            value={simulatedMobileProject} 
                            onChange={(e) => setSimulatedMobileProject(e.target.value)}
                            className="bg-slate-950 border border-white/5 rounded px-2 py-0.5 text-white"
                          >
                            <option value="Sumuque">Van 1 — Urbanización Oeste</option>
                            <option value="Kanaan">Bus 2 — Urbanización Norte</option>
                            <option value="ElEden">Van 3 — Urbanización Este</option>
                            <option value="LaAdulada">Pickup 4 — Urbanización Sur</option>
                          </select>
                        </div>

                        {/* Interactive Animation Visual */}
                        <div className="bg-slate-950 h-36 rounded-xl border border-white/5 p-3 flex flex-col justify-between relative overflow-hidden">
                          {/* Sky / Satellite nodes */}
                          <div className="flex justify-between">
                            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
                            <span className="text-[8px] font-mono text-gray-500">STARLINK SAT-C_8492</span>
                            <span className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-pulse" />
                          </div>

                          {/* Connection Lines via lasers */}
                          <div className="absolute top-2 left-6 right-6 bottom-8 border-dashed border-l border-emerald-500/20" />
                          <div className="absolute top-2 right-12 bottom-8 border-dashed border-r border-indigo-500/20" />

                          {/* Car Animation */}
                          <div className="text-center space-y-1 relative z-10">
                            <div className="inline-flex gap-2 items-center bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2.5 py-1 text-[10px] text-[#10B981] font-mono">
                              <Radio className="w-3 h-3 text-[#10B981] animate-ping" />
                              Starlink Activo: 140 Mbps Down · 34ms Latencia
                            </div>
                            <p className="text-[8px] text-gray-500">Posición: Entrada Carretera Cotoca / Kilómetro 18</p>
                          </div>

                          {/* Highway simulation */}
                          <div className="border-t border-white/10 pt-1.5 flex justify-between items-center text-[10px] font-mono text-gray-400">
                            <span className="flex items-center gap-1">
                              <span className="w-2 h-2 rounded-full bg-emerald-400" />
                              GPS: 17.7819° S, 63.1813° W
                            </span>
                            <span className="text-white font-bold uppercase text-[9px] bg-slate-900 border border-white/5 px-2 py-0.5 rounded">
                              Ruta a {simulatedMobileProject}
                            </span>
                          </div>
                        </div>

                        <div className="text-[11px] text-gray-400 bg-slate-950/50 p-2.5 rounded-xl border border-white/5">
                          <strong className="text-white block mb-0.5">Indicador Garantista de Ventas:</strong>
                          El inversor viaja disfrutando de WiFi satelital de clase mundial mientras el consultor proyecta imágenes, planos y precios de lotes en su tableta en vivo sin cortes.
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SIMULATOR 3: INTRANET-360 SPECTRUM GRID */}
                  {activeTab === 'intranet' && (
                    <div className="space-y-4">
                      <p className="text-[11px] text-gray-400 text-center uppercase font-mono">
                        ANALIZADOR DE ANCHOS DE BANDA SECTORIAL
                      </p>
                      
                      <div className="bg-slate-900 border border-white/5 rounded-2xl p-4 space-y-4 font-mono text-xs text-gray-300">
                        
                        <div className="grid grid-cols-2 gap-2 text-[10px]">
                          <div className="bg-slate-950 p-2.5 rounded-xl border border-white/5 space-y-1">
                            <span className="text-gray-500">Antena 1 (60°):</span>
                            <div className="flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-emerald-400" />
                              <strong className="text-white">5.8 GHz · 112 Mbps</strong>
                            </div>
                          </div>
                          <div className="bg-slate-950 p-2.5 rounded-xl border border-white/5 space-y-1">
                            <span className="text-gray-500">Antena 2 (120°):</span>
                            <div className="flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-emerald-400" />
                              <strong className="text-white">5.8 GHz · 95 Mbps</strong>
                            </div>
                          </div>
                          <div className="bg-slate-950 p-2.5 rounded-xl border border-white/5 space-y-1">
                            <span className="text-gray-500">Antena 3 (180°):</span>
                            <div className="flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-emerald-400" />
                              <strong className="text-white">6.1 GHz · 150 Mbps</strong>
                            </div>
                          </div>
                          <div className="bg-slate-950 p-2.5 rounded-xl border border-white/5 space-y-1">
                            <span className="text-gray-500">Antena 4 (240°):</span>
                            <div className="flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-emerald-400" />
                              <strong className="text-white">6.2 GHz · 134 Mbps</strong>
                            </div>
                          </div>
                        </div>

                        {/* Node Master Spec Box */}
                        <div className="border border-white/5 bg-slate-950 p-3 rounded-xl space-y-2">
                          <div className="flex items-center justify-between text-[11px]">
                            <span className="font-bold flex items-center gap-1.5 text-emerald-400">
                              <Database className="w-4 h-4 text-emerald-500" />
                              NODO MAESTRO CAMBIUM
                            </span>
                            <span className="bg-emerald-500/10 text-[#10B981] px-1.5 py-0.5 rounded text-[8px] border border-emerald-500/20">
                              ESTADO: ÓPTIMO
                            </span>
                          </div>
                          <p className="text-[10px] text-gray-500 leading-relaxed font-sans">
                            Centraliza los accesos de fibra externa y divide el espectro en canales no superpuestos para evitar colisiones electromagnéticas, optimizando la latencia del condominio.
                          </p>
                        </div>

                        <div className="text-[10px] text-gray-400 flex items-center gap-2">
                          <Tv className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span className="font-sans">IPTV activo en 143 hogares. Tráfico de vídeo cifrado y balanceado mediante QoS automático.</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SIMULATOR 4: METROMESH SELF HEALING ROUTING MESH */}
                  {activeTab === 'metromesh' && (
                    <div className="space-y-4">
                      <p className="text-[11px] text-gray-400 text-center uppercase font-mono">
                        RED AUTÓNOMA AUTOREPARABLE (SELF-HEALING)
                      </p>
                      
                      <div className="bg-slate-900 border border-white/5 rounded-2xl p-4 space-y-4">
                        <p className="text-[10px] text-gray-400 font-sans">
                          Haz clic sobre cualquiera de los nodos para forzar su caída o re-conexión física y observa cómo el circuito re-enruta el tráfico de forma ágil para proteger el servicio condominal.
                        </p>

                        <div className="grid grid-cols-2 gap-3 font-mono text-[9px]">
                          
                          {/* BUTTON NODES */}
                          <button 
                            onClick={() => toggleMeshNode('nodeA')}
                            className={`p-2.5 border rounded-xl flex items-center justify-between transition-colors ${
                              meshNodesStatus.nodeA === 'active' 
                                ? 'bg-[#080c14]/40 border-emerald-500/20 text-[#10B981]' 
                                : 'bg-red-950/20 border-red-500/30 text-red-400'
                            }`}
                          >
                            <span>NODO NORTE A (60GHz)</span>
                            <span className="font-bold">{meshNodesStatus.nodeA === 'active' ? '● ACTIVO' : '○ EN FALLO'}</span>
                          </button>

                          <button 
                            onClick={() => toggleMeshNode('nodeB')}
                            className={`p-2.5 border rounded-xl flex items-center justify-between transition-colors ${
                              meshNodesStatus.nodeB === 'active' 
                                ? 'bg-[#080c14]/40 border-emerald-500/20 text-[#10B981]' 
                                : 'bg-red-950/20 border-red-500/30 text-red-400'
                            }`}
                          >
                            <span>NODO ESTE B (60GHz)</span>
                            <span className="font-bold">{meshNodesStatus.nodeB === 'active' ? '● ACTIVO' : '○ EN FALLO'}</span>
                          </button>

                          <button 
                            onClick={() => toggleMeshNode('nodeC')}
                            className={`p-2.5 border rounded-xl flex items-center justify-between transition-colors ${
                              meshNodesStatus.nodeC === 'active' 
                                ? 'bg-[#080c14]/40 border-emerald-500/20 text-[#10B981]' 
                                : 'bg-red-950/20 border-red-500/30 text-red-400'
                            }`}
                          >
                            <span>NODO SUR C (60GHz)</span>
                            <span className="font-bold">{meshNodesStatus.nodeC === 'active' ? '● ACTIVO' : '○ EN FALLO'}</span>
                          </button>

                          <button 
                            onClick={() => toggleMeshNode('nodeD')}
                            className={`p-2.5 border rounded-xl flex items-center justify-between transition-colors ${
                              meshNodesStatus.nodeD === 'active' 
                                ? 'bg-[#080c14]/40 border-emerald-500/20 text-[#10B981]' 
                                : 'bg-red-950/20 border-red-500/30 text-red-400'
                            }`}
                          >
                            <span>NODO OESTE D (60GHz)</span>
                            <span className="font-bold">{meshNodesStatus.nodeD === 'active' ? '● ACTIVO' : '○ EN FALLO'}</span>
                          </button>

                        </div>

                        {/* Status Grid */}
                        <div className="bg-slate-950 border border-white/5 rounded-xl p-3 space-y-1.5 font-mono text-[10px]">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-500">Mecanismo Mesh Backhaul:</span>
                            <strong className="text-emerald-400">802.11ay / Terragraph</strong>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-500">Pérdida de Paquetes Estimada:</span>
                            <strong className="text-white">{meshErrorRate}</strong>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-500">Cableado Aéreo Necesario:</span>
                            <strong className="text-red-400 font-extrabold uppercase">0 Mts (Cero cables)</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                </div>

                <div className="border-t border-white/5 pt-4 text-center">
                  <div className="text-[10px] text-gray-500 font-mono">
                    SOPORTE 100% OPERATIVO SAAS POR: <br />
                    <span className="text-white uppercase font-bold tracking-wider">Empresa LIBRE · Ingeniería</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* SECTION: COBERTURA COMPLETA - 33 ZONAS CALIENTES SUELTAS A TODO ANCHO */}
        <section id="cobertura-completa" className="space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative">
          <div className="absolute inset-0 bg-[#10B981]/5 rounded-[40px] blur-[150px] pointer-events-none" />
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#10B981] font-bold flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              CAPILARIDAD URBANA IMPENETRABLE
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              33 Hotspots de Cobertura Activa en Santa Cruz
            </h2>
            <p className="text-xs font-mono text-[#10B981] tracking-widest uppercase">
              Monetización y Captación de Leads a Nivel Metropolitano
            </p>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Zonas de altísimo tránsito peatonal y comercial donde los portales cautivos de <strong>Empresa LIBRE</strong> operan ininterrumpidamente, tejiendo la red de WiFi marketing más grande de Bolivia.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {hotspotsSantaCruz.map((h, idx) => (
              <div 
                key={idx} 
                className="bg-slate-950/80 p-5 rounded-2xl border border-white/5 hover:border-emerald-500/30 hover:bg-[#0a0e17] transition-all duration-300 flex flex-col justify-between shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-all duration-300 pointer-events-none" />
                
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-1 border-b border-white/5 pb-2">
                    <span className="text-white text-xs sm:text-sm font-extrabold group-hover:text-emerald-400 transition-colors leading-snug">
                      ● {h.name}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md font-bold shrink-0">
                      {(idx + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                  
                  <div className="space-y-1.5">
                    <span className="text-[11px] text-[#10B981] font-mono font-black uppercase tracking-wider block">
                      {h.desc}
                    </span>
                    <p className="text-[11px] text-gray-400 leading-relaxed font-sans">
                      {h.detail}
                    </p>
                  </div>
                </div>
                
                <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-gray-500">
                  <span>Equipamiento Cambium XV2</span>
                  <span className="text-emerald-400/80 font-bold uppercase">● Activo</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* INTERACTIVE COMPONENT: PERSONAS Y DETALLE DE INFORMACIÓN COGNITIVA */}
        <section id="personas-simulador" className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#10B981] font-bold">
              Experiencia de Usuario Personalizada
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Diferentes Perfiles de Usuario en Acción
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              La plataforma entrega información y flujos específicos adaptados a cada tipo de persona. Selecciona un perfil abajo para auditar su ficha técnica y ver cómo interactúa en vivo con Empresa LIBRE.
            </p>
          </div>

          <div className="glass-panel p-6 sm:p-10 rounded-3xl border-white/5 max-w-5xl mx-auto space-y-8">
            {/* Personas selector chips */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <button
                onClick={() => setActivePersona('carlos')}
                className={`p-4 rounded-xl border font-mono text-xs flex flex-col items-center gap-2 transition-all duration-300 ${
                  activePersona === 'carlos'
                    ? 'bg-emerald-950/40 border-emerald-500/50 text-[#10B981] font-bold shadow-lg'
                    : 'bg-slate-950/40 border-white/5 text-gray-400 hover:text-white'
                }`}
              >
                <Smartphone className="w-5 h-5 flex-shrink-0 animate-pulse" />
                <span>Carlos Mendez</span>
                <span className="text-[9px] text-gray-500 font-normal">Visitante/Lead Interesado</span>
              </button>

              <button
                onClick={() => setActivePersona('ana')}
                className={`p-4 rounded-xl border font-mono text-xs flex flex-col items-center gap-2 transition-all duration-300 ${
                  activePersona === 'ana'
                    ? 'bg-emerald-950/40 border-emerald-500/50 text-[#10B981] font-bold shadow-lg'
                    : 'bg-slate-950/40 border-white/5 text-gray-400 hover:text-white'
                }`}
              >
                <Users className="w-5 h-5 flex-shrink-0" />
                <span>Ana Sofia Ortiz</span>
                <span className="text-[9px] text-gray-500 font-normal">Residente Permanente</span>
              </button>

              <button
                onClick={() => setActivePersona('roberto')}
                className={`p-4 rounded-xl border font-mono text-xs flex flex-col items-center gap-2 transition-all duration-300 ${
                  activePersona === 'roberto'
                    ? 'bg-emerald-950/40 border-emerald-500/50 text-[#10B981] font-bold shadow-lg'
                    : 'bg-slate-950/40 border-white/5 text-gray-400 hover:text-white'
                }`}
              >
                <TrendingUp className="w-5 h-5 flex-shrink-0" />
                <span>Ing. Roberto Vaca</span>
                <span className="text-[9px] text-gray-500 font-normal">Inversor Comercial</span>
              </button>

              <button
                onClick={() => setActivePersona('marcelo')}
                className={`p-4 rounded-xl border font-mono text-xs flex flex-col items-center gap-2 transition-all duration-300 ${
                  activePersona === 'marcelo'
                    ? 'bg-emerald-950/40 border-emerald-500/50 text-[#10B981] font-bold shadow-lg'
                    : 'bg-slate-950/40 border-white/5 text-gray-400 hover:text-white'
                }`}
              >
                <Shield className="w-5 h-5 flex-shrink-0" />
                <span>Marcelo Chavez</span>
                <span className="text-[9px] text-gray-500 font-normal">Jefe de Seguridad</span>
              </button>
            </div>

            {/* Persona card frame */}
            <div className="bg-slate-950/60 p-6 sm:p-8 rounded-2xl border border-white/5 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Avatar Mock & Identity metrics */}
              <div className="md:col-span-5 space-y-4 flex flex-col items-center text-center md:items-start md:text-left text-xs font-mono">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-emerald-500/20 to-indigo-500/20 border border-white/10 flex items-center justify-center text-4xl shadow-md font-bold text-white uppercase font-sans">
                  {activePersona === 'carlos' && "CM"}
                  {activePersona === 'ana' && "AO"}
                  {activePersona === 'roberto' && "RV"}
                  {activePersona === 'marcelo' && "MC"}
                </div>

                <div className="space-y-1">
                  <h4 className="text-white text-xl font-display font-extrabold font-sans">
                    {activePersona === 'carlos' && "Carlos Mendez"}
                    {activePersona === 'ana' && "Ana Sofia Ortiz"}
                    {activePersona === 'roberto' && "Ing. Roberto Vaca"}
                    {activePersona === 'marcelo' && "Marcelo Chavez"}
                  </h4>
                  <p className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                    {activePersona === 'carlos' && "Visitante / Lead en Proceso de Venta"}
                    {activePersona === 'ana' && "Habitante del Condominio Metropolitano"}
                    {activePersona === 'roberto' && "Empresario Propietario de Smart-Lote"}
                    {activePersona === 'marcelo' && "Personal de Operaciones & Custodia"}
                  </p>
                </div>

                <div className="w-full space-y-2 border-t border-white/5 pt-4 text-[11px]">
                  <div className="flex justify-between gap-2 text-left">
                    <span className="text-gray-500">UBICACIÓN:</span>
                    <span className="text-white font-bold">
                      {activePersona === 'carlos' && "Urbanización Oeste, Área de Preventa"}
                      {activePersona === 'ana' && "Urbanización Norte, Manzano 14, Lote 5"}
                      {activePersona === 'roberto' && "Urbanización Este, Área Comercial 1"}
                      {activePersona === 'marcelo' && "Urbanización Sur, Perímetro General"}
                    </span>
                  </div>
                  <div className="flex justify-between gap-2 text-left">
                    <span className="text-gray-500">MÓVIL / DISPOSITIVO:</span>
                    <span className="text-white font-bold">
                      {activePersona === 'carlos' && "iPhone 15 Pro Max"}
                      {activePersona === 'ana' && "Samsung Smart TV QLED 65\" & Móvil"}
                      {activePersona === 'roberto' && "MacBook Pro M3 & Fire Stick 4K"}
                      {activePersona === 'marcelo' && "Tablet Industrial IP68 & Estación CCTV"}
                    </span>
                  </div>
                  <div className="flex justify-between gap-2 text-left">
                    <span className="text-gray-500">CONECTIVIDAD BASE:</span>
                    <span className="text-white font-bold text-emerald-400">
                      {activePersona === 'carlos' && "Antena XV2-2T0 (Señal Excelente)"}
                      {activePersona === 'ana' && "Fibra Virtual cnPilot e410 (Dual-Band)"}
                      {activePersona === 'roberto' && "Red de Fibra Dedicada Cambium"}
                      {activePersona === 'marcelo' && "Red Metropolitana Mesh Autoreparable"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Custom Info layout reflecting specific platform stats */}
              <div className="md:col-span-7 space-y-6">
                
                {/* Custom Box Title depending on active Persona */}
                <div className="space-y-2">
                  <span className="inline-flex gap-1 items-center px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded font-mono text-[9px] uppercase tracking-wider font-extrabold">
                    {activePersona === 'carlos' && "Portal Cautivo WiFi Marketing de Empresa LIBRE"}
                    {activePersona === 'ana' && "Plan 2 Activo: Tickets Combo Internet+IPTV"}
                    {activePersona === 'roberto' && "Plan 3 Activo: Triple Play Completo Residencial"}
                    {activePersona === 'marcelo' && "Módulo Cloud Video Vigilancia e IoT"}
                  </span>
                  <h5 className="text-white font-bold text-lg font-display leading-snug">
                    {activePersona === 'carlos' && "Captación de Lead y Envío Automático por WhatsApp cada 33m"}
                    {activePersona === 'ana' && "Plataforma de Televisión Interactiva y Entretenimiento Familiar"}
                    {activePersona === 'roberto' && "Monitoreo Remoto con Triple Blindaje de Sensores Inalámbricos"}
                    {activePersona === 'marcelo' && "Central de Seguridad Perimetral, Detección por IA y Control IoT"}
                  </h5>
                </div>

                {/* Sub-block showing different metrics/info per person */}
                <div className="p-4 bg-slate-950 rounded-xl border border-white/5 space-y-4">
                  {activePersona === 'carlos' && (
                    <div className="space-y-3 text-xs font-sans text-gray-300">
                      <p>
                        Carlos ingresó a una de las <strong>Urbanizaciones</strong> manejando su vehículo. Se conectó a la red Wi-Fi gratis provista por Empresa LIBRE.
                      </p>
                      <div className="grid grid-cols-2 gap-3 font-mono text-[10px]">
                        <div className="bg-slate-900 p-2.5 rounded-lg border border-white/5 space-y-1">
                          <span className="text-gray-500 block">Lead ID:</span>
                          <span className="text-white font-bold uppercase">#LED-84920</span>
                        </div>
                        <div className="bg-slate-900 p-2.5 rounded-lg border border-white/5 space-y-1">
                          <span className="text-gray-500 block">WhatsApp Registrado:</span>
                          <span className="text-[#10B981] font-bold">+591 75593829</span>
                        </div>
                      </div>
                      <div className="space-y-2 border-t border-white/5 pt-2 font-mono text-[10px]">
                        <span className="text-gray-500 font-bold block">PAUTAS PUBLICITARIAS DE WHATSAPP ENVIADAS CÍCLICAMENTE (Cada 33 minutos):</span>
                        <div className="space-y-1.5 text-gray-400">
                          <div className="flex gap-2 items-center text-[#10B981]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                            <span>Min 1: Plano interactivo de ubicación y render 3D de áreas comunes.</span>
                          </div>
                          <div className="flex gap-2 items-center">
                            <Clock className="w-3.5 h-3.5 text-gray-500 flex-shrink-0" />
                            <span>Min 34: Ofertas de financiamiento interno a 10 años sin garantes.</span>
                          </div>
                          <div className="flex gap-2 items-center">
                            <Clock className="w-3.5 h-3.5 text-gray-500 flex-shrink-0" />
                            <span>Min 67: Descuento exclusivo del 10% por separar el Smart Lote hoy.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activePersona === 'ana' && (
                    <div className="space-y-3 text-xs font-sans text-gray-300">
                      <p>
                        Ana y su familia disfrutan de una conexión Gigabit ultraestable. Toda la familia puede estar conectada a la vez mediante vouchers prepago QR.
                      </p>
                      <div className="grid grid-cols-3 gap-2 font-mono text-[10px] text-center">
                        <div className="bg-slate-900 p-2 rounded-lg border border-white/5">
                          <span className="text-gray-500 block">Voucher ID:</span>
                          <span className="text-white font-extrabold">#VCH-4928</span>
                        </div>
                        <div className="bg-slate-900 p-2 rounded-lg border border-white/5">
                          <span className="text-gray-500 block">Costo Prepago:</span>
                          <span className="text-emerald-400 font-extrabold">88 BOB</span>
                        </div>
                        <div className="bg-slate-900 p-2 rounded-lg border border-white/5">
                          <span className="text-gray-500 block">Estado:</span>
                          <span className="text-emerald-400 font-extrabold uppercase">PAGO QR EXITOSO</span>
                        </div>
                      </div>
                      <div className="space-y-2 border-t border-white/5 pt-2 font-mono text-[10px]">
                        <span className="text-gray-500 font-bold block bg-slate-900/30 p-1 rounded">TV INTERACTIVA IPTV — DISPOSITIVOS ACTIVOS EN VIVO:</span>
                        <div className="space-y-1 text-gray-400">
                          <div className="flex justify-between items-center bg-slate-900/50 p-1.5 px-2.5 rounded">
                            <span>1. Smart TV Familiar (Living)</span>
                            <span className="text-emerald-400 font-bold">Disney+ HD (En Curso)</span>
                          </div>
                          <div className="flex justify-between items-center bg-slate-900/50 p-1.5 px-2.5 rounded">
                            <span>2. Tablet Sofía (Segunda pantalla)</span>
                            <span className="text-emerald-400 font-bold">Bolivia TV (En Curso)</span>
                          </div>
                          <div className="flex justify-between items-center bg-slate-900/50 p-1.5 px-2.5 rounded">
                            <span>3. Fire TV Stick (Dormitorio Principal)</span>
                            <span className="text-emerald-400 font-bold">Canal Deportes Bolivia (En Curso)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activePersona === 'roberto' && (
                    <div className="space-y-3 text-xs font-sans text-gray-300">
                      <p>
                        El Ing. Roberto utiliza la plataforma para vigilar de forma remota el acopio de materiales de construcción y el personal de obra de su futura oficina comercial.
                      </p>
                      <div className="grid grid-cols-3 gap-2 font-mono text-[10px] text-center">
                        <div className="bg-slate-900 p-2 rounded-lg border border-white/5">
                          <span className="text-gray-500 block">Lote ID:</span>
                          <span className="text-white font-bold">#LOTE-C1-04</span>
                        </div>
                        <div className="bg-slate-900 p-2 rounded-lg border border-white/5">
                          <span className="text-gray-500 block">Voucher Triple:</span>
                          <span className="text-[#10B981] font-bold">108 BOB / mes</span>
                        </div>
                        <div className="bg-slate-900 p-2 rounded-lg border border-white/5">
                          <span className="text-gray-500 block">Soporte Técnico:</span>
                          <span className="text-emerald-400 font-bold">24/7 Corporativo</span>
                        </div>
                      </div>
                      <div className="space-y-2 border-t border-white/5 pt-2 font-mono text-[10px]">
                        <span className="text-gray-500 font-bold block bg-slate-900/30 p-1 rounded">ESTADO DE CÁMARAS IP MONITOREADAS EN LA NUBE:</span>
                        <div className="space-y-1.5 text-gray-400">
                          <div className="flex justify-between items-center bg-slate-900/50 p-1.5 px-2.5 rounded">
                            <span>Cámara Perimetral Norte (Ingreso de Obra)</span>
                            <span className="text-[#10B981] font-bold flex items-center gap-1">● Transmitiendo 1080p</span>
                          </div>
                          <div className="flex justify-between items-center bg-slate-900/50 p-1.5 px-2.5 rounded">
                            <span>Cámara Depósito (Silo de Cemento)</span>
                            <span className="text-[#10B981] font-bold flex items-center gap-1">● Transmitiendo 1080p</span>
                          </div>
                          <div className="flex justify-between items-center bg-slate-900/50 p-1.5 px-2.5 rounded">
                            <span>Sensor de Movimiento Inalámbrico IoT</span>
                            <span className="text-teal-400 font-bold uppercase">● Conectado Activo</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activePersona === 'marcelo' && (
                    <div className="space-y-3 text-xs font-sans text-gray-300">
                      <p>
                        Marcelo supervisa la seguridad integral del condominio. Gracias a las cámaras inteligentes integradas de Empresa LIBRE en la nube, optimizan patrullas reduciendo costos en un 45%.
                      </p>
                      <div className="grid grid-cols-2 gap-3 font-mono text-[10px]">
                        <div className="bg-slate-900 p-2.5 rounded-lg border border-white/5 space-y-1">
                          <span className="text-gray-500 block">Perímetro Total Red:</span>
                          <span className="text-white font-bold">22 Cámaras IP Sincronizadas</span>
                        </div>
                        <div className="bg-slate-900 p-2.5 rounded-lg border border-white/5 space-y-1">
                          <span className="text-gray-500 block">Último Evento Recibido:</span>
                          <span className="text-teal-400 font-bold">Portón Preventa Desactivado</span>
                        </div>
                      </div>
                      <div className="space-y-2 border-t border-white/5 pt-2 font-mono text-[10px]">
                        <span className="text-gray-500 font-bold block bg-slate-900/30 p-1 rounded">LOG DE TELEMETRÍA Y ALERTAS DE SEGURIDAD (IA):</span>
                        <div className="space-y-1 text-gray-400">
                          <div className="flex gap-2 items-center bg-teal-950/20 px-2 py-1 rounded border border-teal-500/10 text-teal-300 text-[9px]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                            <span>15:44 - Acceso Remoto: Portón de preventa Urbanizaciones habilitado para grúa.</span>
                          </div>
                          <div className="flex gap-2 items-center bg-slate-900/50 px-2 py-1 rounded text-[9px]">
                            <Radio className="w-3.5 h-3.5 text-[#10B981] flex-shrink-0 animate-ping" />
                            <span>14:32 - Detección por IA: Movimiento inusual detectado en sector Norte (Patrulla Alertada).</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

              </div>
              
            </div>
          </div>
        </section>

        {/* SECTION 3: MOTOR DE MONETIZACIÓN, ADVERTISING Y DIVIDENDOS */}
        <section id="monetization" className="space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#10B981] font-bold">
              Las Reglas del Negocio FinTech
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Motor de Monetización y Concesiones
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              Rentabiliza cada metro cuadrado tecnológico. Estructuramos el ecosistema comercial para convertir accesos a Internet indispensables en tu mayor fuente de dividendos perpetuos.
            </p>
          </div>

          {/* Dividend division & Model Rules (Relational grid layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
            
            {/* Left: Graphic Donut breakdown */}
            <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl border-white/5 flex flex-col items-center space-y-6 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 text-gray-600">
                <Shield className="w-5 h-5 text-emerald-500/10" />
              </div>
              
              <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight">
                Reparto de Dividendos Contractual
              </h3>
              
              {/* Pie Chart Representation SVG */}
              <div className="relative w-48 h-48 sm:w-52 sm:h-52 z-10">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  {/* Circle background */}
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="40" 
                    fill="transparent" 
                    stroke="rgba(255,255,255,0.03)" 
                    strokeWidth="12" 
                  />
                  {/* segment 67% Inmobiliaria */}
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="40" 
                    fill="transparent" 
                    stroke="#10B981" 
                    strokeWidth="12" 
                    strokeDasharray={`${67 * 2.512} ${100 * 2.512}`} 
                  />
                  {/* segment 33% Empresa Libre */}
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="40" 
                    fill="transparent" 
                    stroke="#312e81" 
                    strokeWidth="12" 
                    strokeDasharray={`${33 * 2.512} ${100 * 2.512}`} 
                    strokeDashoffset={`${-67 * 2.512}`} 
                  />
                </svg>

                {/* Inner Text Label */}
                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-0.5">
                  <span className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-widest leading-none">67%</span>
                  <span className="text-[10px] text-gray-400 font-mono tracking-wider font-extrabold uppercase text-[#10B981]">DESARROLLADOR</span>
                </div>
              </div>

              {/* Chart Legend */}
              <div className="w-full space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between border-b border-white/5 pb-1.5">
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#10B981] block" />
                    Ganancia de Inmobiliaria/Loteadora:
                  </span>
                  <strong className="text-white text-sm">67% Neto</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-indigo-900 block" />
                    Regalías para Empresa LIBRE:
                  </span>
                  <strong className="text-gray-400 text-sm">33% Operación</strong>
                </div>
              </div>

              <p className="text-[11px] text-gray-400 font-sans max-w-xs leading-relaxed">
                Asociación contractualmente garantizada por ley. El <strong>67% va de manera directa</strong> a tus arcas sin cuellos de botella adicionales.
              </p>
            </div>

            {/* Right: Technical specifications and commercial plans details */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Plataforma de Publicidad e Implementación Garantizada
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Advertising Class 1 */}
                <div className="border border-white/5 p-5 rounded-2xl bg-slate-950/40 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold uppercase">
                    <CheckCircle2 className="w-4 h-4" /> Publicidad Propia (0% Costo)
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Incluido de manera ilimitada en la concesión anual. Promociona de forma nativa tus proyectos de Urbanizaciones directo al visitante cada 33 minutos sin abonar comisiones.
                  </p>
                </div>

                {/* Advertising Class 2 */}
                <div className="border border-white/5 p-5 rounded-2xl bg-slate-950/40 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold uppercase">
                    <CheckCircle2 className="w-4 h-4" /> Publicidad B2B Multi-Sector
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Sponsors externos de otros sectores (bancos, aseguradoras, telecomunicaciones, universidades, farmacias y comercio masivo) pagan por pautas en tus portales cautivos primarios, generando flujos de caja independientes de los lotes.
                  </p>
                </div>

                {/* Advertising Class 3 - Dividendos de publicidad y afiliados */}
                <div className="border border-white/5 p-5 rounded-2xl bg-slate-950/40 space-y-2 md:col-span-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#10B981] font-bold uppercase">
                    <CheckCircle2 className="w-4 h-4" /> Dividendos por Publicidad y Red de Afiliados (33% / 33% / 34%)
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Cuando una Agencia de Marketing, Asesor Comercial o Afiliado independiente consiga pautas publicitarias de patrocinadores externos, las utilidades se dividen de forma justa: el <strong>33% es retenido por el Afiliado o Agencia</strong> que trae la publicidad, el <strong>33% es destinado a la plataforma Empresa LIBRE</strong> para Coste Tecnológico y pasarela, y el <strong>34% restante queda asignado a la Empresa Desarrolladora</strong> (dueña de la red física de hotspots).
                  </p>
                </div>

              </div>

              {/* Execution details */}
              <div className="bg-slate-950/80 border border-emerald-500/15 p-5 sm:p-6 rounded-2xl space-y-4">
                <h4 className="font-mono text-xs text-[#10B981] font-bold uppercase tracking-widest flex items-center gap-2">
                  <Layers className="w-4 h-4" /> PARÁMETROS CONTRACTUALES DE INVERSIÓN Y EQUIPO
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
                  <div className="space-y-1 border-b md:border-b-0 md:border-r border-white/5 pb-3 md:pb-0 pr-2">
                    <span className="text-gray-500 block">SOFTWARE SAAS:</span>
                    <strong className="text-white text-sm">$2,222 USD / Anual</strong>
                    <span className="text-[10px] text-gray-500 block font-sans">Por servicio en la nube de Empresa LIBRE. Incluye pasarela QR, portal cautivo y telemetría.</span>
                  </div>
                  
                  <div className="space-y-1 border-b md:border-b-0 md:border-r border-white/5 pb-3 md:pb-0 pr-2 pl-0 md:pl-2">
                    <span className="text-gray-500 block">INVERSIÓN HARDWARE:</span>
                    <strong className="text-white text-sm">100% Inmobiliaria</strong>
                    <span className="text-[10px] text-[#10B981] block font-sans font-semibold">Toda la inversión de hardware físico (antenas Cambium, enlaces, cableado) es realizada por la empresa constructora/desarrolladora.</span>
                  </div>
                  
                  <div className="space-y-1 pr-2 pl-0 md:pl-2">
                    <span className="text-gray-500 block">PROPIEDAD Y BENEFICIO:</span>
                    <strong className="text-[#10B981] text-sm">Titularidad Absoluta</strong>
                    <span className="text-[10px] text-gray-500 block font-sans">La constructora retiene la propiedad de todos los equipos y percibe el 67% neto de los cobros digitales.</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* SECTION 4: 80 BENEFICIOS DE LA PLATAFORMA DE MANERA SEPARADA */}
        <section id="beneficios-ecosistema" className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#10B981] font-bold">
              Estadísticas y Conectividad Certificada
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Ecosistema Completo de 80 Beneficios
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              Analiza de punta a punta el valor agregado de Empresa LIBRE. Hemos organizado las 4 plataformas con sus 20 beneficios particulares (80 en total) configurados para robustecer tus proyectos urbanos de forma totalmente independiente.
            </p>
          </div>

          <div className="glass-panel p-4 sm:p-8 rounded-3xl border-white/5 max-w-5xl mx-auto space-y-8">
            {/* Category tabs (4 columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 max-w-5xl mx-auto font-mono text-[11px] sm:text-xs">
              <button
                onClick={() => setSelectedBenefitsCategory('wifi')}
                className={`py-3.5 px-3 rounded-xl border flex items-center justify-center gap-2 transition-all duration-300 ${
                  selectedBenefitsCategory === 'wifi'
                    ? 'bg-emerald-950/40 border-emerald-500/50 text-[#10B981] font-bold'
                    : 'bg-slate-950/40 border-white/5 text-gray-400 hover:text-white'
                }`}
              >
                <Wifi className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="truncate">1. wifi marketing ai Libre (20)</span>
              </button>
              <button
                onClick={() => setSelectedBenefitsCategory('iptv')}
                className={`py-3.5 px-3 rounded-xl border flex items-center justify-center gap-2 transition-all duration-300 ${
                  selectedBenefitsCategory === 'iptv'
                    ? 'bg-emerald-950/40 border-emerald-500/50 text-[#10B981] font-bold'
                    : 'bg-slate-950/40 border-white/5 text-gray-400 hover:text-white'
                }`}
              >
                <Tv className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="truncate flex-1 text-center">2. iptv Libre (20)</span>
              </button>
              <button
                onClick={() => setSelectedBenefitsCategory('videovigilancia')}
                className={`py-3.5 px-3 rounded-xl border flex items-center justify-center gap-2 transition-all duration-300 ${
                  selectedBenefitsCategory === 'videovigilancia'
                    ? 'bg-emerald-950/40 border-emerald-500/50 text-[#10B981] font-bold'
                    : 'bg-slate-950/40 border-white/5 text-gray-400 hover:text-white'
                }`}
              >
                <Shield className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="truncate">3. videovigilancia ai Libre (20)</span>
              </button>
              <button
                onClick={() => setSelectedBenefitsCategory('iot')}
                className={`py-3.5 px-3 rounded-xl border flex items-center justify-center gap-2 transition-all duration-300 ${
                  selectedBenefitsCategory === 'iot'
                    ? 'bg-emerald-950/40 border-emerald-500/50 text-[#10B981] font-bold'
                    : 'bg-slate-950/40 border-white/5 text-gray-400 hover:text-white'
                }`}
              >
                <Cpu className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="truncate">4. iot Libre ai (20)</span>
              </button>
            </div>

            {/* List of benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {selectedBenefitsCategory === 'wifi' && wifiMarketingBenefits.map((benefit, i) => {
                const parts = benefit.split(':');
                const title = parts[0];
                const content = parts.slice(1).join(':');
                return (
                  <div key={i} className="p-4 rounded-2xl bg-slate-950/40 border border-white/5 hover:border-emerald-500/10 transition-colors flex gap-3.5 items-start">
                    <div className="p-2 bg-emerald-950/40 border border-emerald-500/30 rounded-lg text-emerald-400 flex-shrink-0 mt-0.5 font-mono text-[10px] font-bold h-6 w-6 flex items-center justify-center">
                      {i + 1}
                    </div>
                    <div className="space-y-1">
                      <strong className="text-white text-xs block font-semibold leading-snug">{title}</strong>
                      <p className="text-[11px] text-gray-400 leading-relaxed">{content}</p>
                    </div>
                  </div>
                );
              })}

              {selectedBenefitsCategory === 'iptv' && iptvBenefits.map((benefit, i) => {
                const parts = benefit.split(':');
                const title = parts[0];
                const content = parts.slice(1).join(':');
                return (
                  <div key={i} className="p-4 rounded-2xl bg-slate-950/40 border border-white/5 hover:border-[#10B981]/10 transition-colors flex gap-3.5 items-start">
                    <div className="p-2 bg-emerald-950/40 border border-emerald-500/30 rounded-lg text-emerald-400 flex-shrink-0 mt-0.5 font-mono text-[10px] font-bold h-6 w-6 flex items-center justify-center">
                      {i + 1}
                    </div>
                    <div className="space-y-1">
                      <strong className="text-white text-xs block font-semibold leading-snug">{title}</strong>
                      <p className="text-[11px] text-gray-400 leading-relaxed">{content}</p>
                    </div>
                  </div>
                );
              })}

              {selectedBenefitsCategory === 'videovigilancia' && videovigilanciaBenefits.map((benefit, i) => {
                const parts = benefit.split(':');
                const title = parts[0];
                const content = parts.slice(1).join(':');
                return (
                  <div key={i} className="p-4 rounded-2xl bg-slate-950/40 border border-white/5 hover:border-emerald-500/10 transition-colors flex gap-3.5 items-start">
                    <div className="p-2 bg-emerald-950/40 border border-emerald-500/30 rounded-lg text-emerald-400 flex-shrink-0 mt-0.5 font-mono text-[10px] font-bold h-6 w-6 flex items-center justify-center">
                      {i + 1}
                    </div>
                    <div className="space-y-1">
                      <strong className="text-white text-xs block font-semibold leading-snug">{title}</strong>
                      <p className="text-[11px] text-gray-400 leading-relaxed">{content}</p>
                    </div>
                  </div>
                );
              })}

              {selectedBenefitsCategory === 'iot' && iotBenefits.map((benefit, i) => {
                const parts = benefit.split(':');
                const title = parts[0];
                const content = parts.slice(1).join(':');
                return (
                  <div key={i} className="p-4 rounded-2xl bg-slate-950/40 border border-white/5 hover:border-emerald-500/10 transition-colors flex gap-3.5 items-start">
                    <div className="p-2 bg-emerald-950/40 border border-emerald-500/30 rounded-lg text-emerald-400 flex-shrink-0 mt-0.5 font-mono text-[10px] font-bold h-6 w-6 flex items-center justify-center">
                      {i + 1}
                    </div>
                    <div className="space-y-1">
                      <strong className="text-white text-xs block font-semibold leading-snug">{title}</strong>
                      <p className="text-[11px] text-gray-400 leading-relaxed">{content}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 5: SIMULADOR INTERACTIVO DE RETORNO (ROI CALCULATOR) */}
        <section id="roi-calculator" className="space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#10B981] font-bold">
              Cálculos Milimétricos en Tiempo Real
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Simulador de Retorno de Inversión (BOB)
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              Deslice la barra para ajustar el número total de condóminos, compradores de lotes o viviendas activas que adquieren vouchers prepago QR y visualice su margen de ganancias en Bolivianos (67% íntegro).
            </p>
          </div>

          <div className="glass-panel p-6 sm:p-10 rounded-3xl border-white/5 max-w-5xl mx-auto space-y-8">
            
            {/* Interactive Slider Controller */}
            <div className="space-y-4 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-white/5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/20 text-[#10B981] rounded-xl">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 uppercase font-bold">USUARIOS O RESIDENTES QUE ADQUIEREN VOUCHERS QR:</span>
                    <h4 className="text-white text-xl font-extrabold tracking-wider">{usersCount.toLocaleString('es-BO')} Activos</h4>
                  </div>
                </div>
                
                {/* Visual indicator percent slider */}
                <div className="text-right text-xs bg-slate-900 border border-white/5 py-1.5 px-3 rounded-lg text-[#10B981] font-semibold flex items-center gap-2 self-start sm:self-auto">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  Modelo: Vouchers Prepago QR Sencillo (0% Morosidad)
                </div>
              </div>

              {/* Custom Input Range — Up to 12,000 as requested */}
              <div className="space-y-2 pt-2">
                <input 
                  type="range" 
                  min="100" 
                  max="12000" 
                  step="100"
                  value={usersCount} 
                  onChange={(e) => setUsersCount(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-emerald-500 focus:outline-none focus:ring-0" 
                />
                <div className="flex justify-between text-[10px] font-mono text-gray-500">
                  <span>Mínimo: 100 usuarios</span>
                  <span>Mitad de Escala: 6,000</span>
                  <span>Límite de Red: 12,000 condóminos</span>
                </div>
              </div>

              {/* Dynamic Backhaul Cost Controls */}
              <div className="border-t border-white/5 pt-4 mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-between font-sans">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-[#10B981] font-black block tracking-wider">📡 INFRAESTRUCTURA DE INTERNET PRINCIPAL:</span>
                  <p className="text-xs text-gray-400 leading-normal">
                    {hasFiberOptic 
                      ? "Operando con Enlaces de Fibra Óptica dedicada (soporta hasta 128 usuarios por enlace de 400 BOB)." 
                      : `Operando con antena(s) Starlink (soporta hasta 128 usuarios c/u. Costo de antena: Bs. 2.800 + abono mensual satelital de 380 BOB).`}
                  </p>
                </div>
                
                <div className="flex gap-2 bg-slate-900/80 p-1.5 rounded-xl border border-white/5 self-end justify-end w-full md:w-auto">
                  <button
                    type="button"
                    onClick={() => setHasFiberOptic(true)}
                    className={`flex-1 md:flex-initial px-4 py-2 rounded-lg font-mono text-[10px] uppercase font-bold transition-all duration-300 cursor-pointer text-center ${
                      hasFiberOptic 
                        ? 'bg-emerald-500/15 border border-emerald-500/30 text-[#10B981] font-extrabold shadow-sm'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    🌐 Fibra Óptica
                  </button>
                  <button
                    type="button"
                    onClick={() => setHasFiberOptic(false)}
                    className={`flex-1 md:flex-initial px-4 py-2 rounded-lg font-mono text-[10px] uppercase font-bold transition-all duration-300 cursor-pointer text-center ${
                      !hasFiberOptic 
                        ? 'bg-emerald-500/15 border border-emerald-500/30 text-[#10B981] font-extrabold shadow-sm'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    🛰️ Starlink (Bs. 2,800)
                  </button>
                </div>
              </div>

            </div>

            {/* Modalidad de Reparto de Dividendos (Interactive Selector) */}
            <div className="space-y-4 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-white/5">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-mono text-[#10B981] font-black tracking-wider uppercase block">💰 MODELO DE REPARTO DE DIVIDENDOS:</span>
                <p className="text-xs text-gray-405 leading-relaxed">
                  Seleccione el origen comercial de los ingresos y la estructura de regalías asociada para calcular su ROI en tiempo real. Todos los dividendos se reparten deduciendo primero los gastos operativos de backhaul de internet y electricidad de los equipos.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-2">
                {/* Opción 1: Voucher prepago internet + IPTV + videovigilancia */}
                <button
                  type="button"
                  onClick={() => setRevenueOption('voucher')}
                  className={`p-4 rounded-xl border font-mono text-left transition-all duration-300 flex flex-col justify-between gap-3 cursor-pointer ${
                    revenueOption === 'voucher'
                      ? 'bg-emerald-500/10 border-emerald-500/40 shadow-[0_4px_15px_rgba(16,185,129,0.1)]'
                      : 'bg-slate-900 border-white/5 text-gray-400 hover:text-white hover:bg-slate-900/60'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">🗳️ Prepago Hogar</div>
                    <strong className="text-xs text-white block">Voucher Prepago</strong>
                    <p className="text-[10px] text-gray-400 font-sans leading-normal">
                      Voucher prepago (Internet + IPTV + Videovigilancia) administrado directamente por el concesionario.
                    </p>
                  </div>
                  <div className="border-t border-white/5 pt-2 flex justify-between text-[10px] font-bold">
                    <span className="text-gray-500">LIBRE: 33%</span>
                    <span className="text-[#10B981]">Propietario: 67%</span>
                  </div>
                </button>

                {/* Opción 2: Publicidad sponsor */}
                <button
                  type="button"
                  onClick={() => setRevenueOption('sponsor')}
                  className={`p-4 rounded-xl border font-mono text-left transition-all duration-300 flex flex-col justify-between gap-3 cursor-pointer ${
                    revenueOption === 'sponsor'
                      ? 'bg-emerald-500/10 border-emerald-500/40 shadow-[0_4px_15px_rgba(16,185,129,0.1)]'
                      : 'bg-slate-900 border-white/5 text-gray-400 hover:text-white hover:bg-slate-900/60'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">📣 Sponsor Directo</div>
                    <strong className="text-xs text-white block">Publicidad Sponsor</strong>
                    <p className="text-[10px] text-gray-400 font-sans leading-normal">
                      Patrocinadores directos de marcas locales en el showroom financiando la red privada del concesionario.
                    </p>
                  </div>
                  <div className="border-t border-white/5 pt-2 flex justify-between text-[10px] font-bold">
                    <span className="text-gray-500">LIBRE: 33%</span>
                    <span className="text-[#10B981]">Propietario: 67%</span>
                  </div>
                </button>

                {/* Opción 3: Publicidad mediante agencia de marketing o agente */}
                <button
                  type="button"
                  onClick={() => setRevenueOption('agency')}
                  className={`p-4 rounded-xl border font-mono text-left transition-all duration-300 flex flex-col justify-between gap-3 cursor-pointer ${
                    revenueOption === 'agency'
                      ? 'bg-emerald-500/10 border-emerald-500/40 shadow-[0_4px_15px_rgba(16,185,129,0.1)]'
                      : 'bg-slate-900 border-white/5 text-gray-400 hover:text-white hover:bg-slate-900/60'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">🤝 Con Intermediario</div>
                    <strong className="text-xs text-white block">Agente / Agencia</strong>
                    <p className="text-[10px] text-gray-400 font-sans leading-normal">
                      Campañas conseguidas por agentes externos de marketing o promotores calificados.
                    </p>
                  </div>
                  <div className="border-t border-white/5 pt-1.5 flex flex-col text-[10px] font-bold space-y-0.5">
                    <div className="flex justify-between">
                      <span className="text-gray-500">LIBRE: 33%</span>
                      <span className="text-emerald-400">Propios: 33%</span>
                    </div>
                    <div className="flex justify-between border-t border-white/5 pt-0.5 mt-0.5 text-sky-400 font-extrabold text-[9.5px]">
                      <span>Agencia/Agente:</span>
                      <span>34%</span>
                    </div>
                  </div>
                </button>

                {/* Opción 4: Publicidad network global iab */}
                <button
                  type="button"
                  onClick={() => setRevenueOption('iab')}
                  className={`p-4 rounded-xl border font-mono text-left transition-all duration-300 flex flex-col justify-between gap-3 cursor-pointer ${
                    revenueOption === 'iab'
                      ? 'bg-emerald-500/10 border-emerald-500/40 shadow-[0_4px_15px_rgba(16,185,129,0.1)]'
                      : 'bg-slate-900 border-white/5 text-gray-400 hover:text-white hover:bg-slate-900/60'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">🌍 Red Integrada</div>
                    <strong className="text-xs text-white block">Ad Network IAB</strong>
                    <p className="text-[10px] text-gray-400 font-sans leading-normal">
                      Monetización automática global sindicada instantáneamente por la red estándar internacional IAB.
                    </p>
                  </div>
                  <div className="border-t border-white/5 pt-2 flex justify-between text-[10px] font-bold">
                    <span className="text-gray-500">LIBRE: 33%</span>
                    <span className="text-[#10B981]">Propietario: 67%</span>
                  </div>
                </button>
              </div>
            </div>

            {/* FIRST MONDAY BILLING & DIVIDENDS WARNING BANNER */}
            <div className="bg-gradient-to-r from-red-950/10 via-emerald-950/10 to-[#0e1726]/30 border border-emerald-500/20 p-5 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs leading-relaxed text-gray-300">
              <div className="flex items-start gap-3.5">
                <span className="text-2xl mt-0.5">📅</span>
                <div>
                  <strong className="text-white uppercase font-display block text-xs tracking-wider mb-1">
                    Regla de Dividendos: Liquidación Incondicional e Impostergable
                  </strong>
                  <p className="text-[11px] text-gray-405 leading-relaxed">
                    La distribución de dividendos se procesa de forma <strong className="text-[#10B981] uppercase font-extrabold">impostergable el primer lunes de cada mes</strong>. 
                    Previo a realizar la división neta de utilidades (33% Empresa LIBRE, 67% Desarrollador/Inmobiliaria), el sistema descuenta automáticamente los costos mensuales de electricidad de las antenas externas y los enlaces de internet (Fibra local u antenas Starlink agregadas de acuerdo al volumen de usuarios).
                  </p>
                </div>
              </div>
              <span className="bg-[#10B981]/15 text-[#10B981] border border-emerald-500/20 px-3 py-1.5 rounded-lg font-mono text-[9px] font-black uppercase tracking-wider shrink-0 text-center self-start md:self-auto shadow-md">
                🚨 Primer Lunes del Mes
              </span>
            </div>

            {/* THE SYSTEM OF DIVIDENDS FLOW CARD */}
            <div className="bg-slate-950/60 p-6 rounded-2xl border border-white/5 space-y-4">
              <h5 className="font-display font-extrabold text-xs text-white uppercase tracking-wider flex items-center gap-2">
                ⚙️ Secuencia Operativa del Flujo Recurrente y Dividendos
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-[11px] font-sans text-gray-300">
                <div className="bg-slate-950 p-4 rounded-xl border border-white/5 space-y-1.5 flex flex-col justify-between">
                  <div>
                    <strong className="text-[#10B981] block text-xs mb-1">1. Recaudación Prepago</strong>
                    <p className="text-[10px] text-gray-400 leading-normal">
                      Los usuarios escanean el QR y pagan su acceso unificado. Se genera un cashflow bruto mensual operando con 0% morosidad.
                    </p>
                  </div>
                  <span className="text-[9px] font-mono text-gray-500 mt-2 block">Cuentas Auditadas</span>
                </div>
                
                <div className="bg-slate-950 p-4 rounded-xl border border-white/5 space-y-1.5 flex flex-col justify-between">
                  <div>
                    <strong className="text-amber-400 block text-xs mb-1">2. Deducción de Gastos</strong>
                    <p className="text-[10px] text-gray-400 leading-normal">
                      Se descuenta la electricidad estimada de equipos y el costo de internet. Si no hay fibra, se conectan antenas Starlink (1 antena base por cada 400 usuarios).
                    </p>
                  </div>
                  <span className="text-[9px] font-mono text-amber-450 italic mt-2 block">Deducción de Ley</span>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-white/5 space-y-1.5 flex flex-col justify-between">
                  <div>
                    <strong className="text-red-400 block text-xs mb-1">3. Empresa LIBRE (33%)</strong>
                    <p className="text-[10px] text-gray-400 leading-normal">
                      Concepto de regalías por Valor Agregado, soporte continuo en la nube, publicidad Sponsor nacional e integraciones de software a futuro.
                    </p>
                  </div>
                  <span className="text-[9px] font-mono text-red-400 mt-2 block">SaaS & Sponsor Ads</span>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-white/5 space-y-1.5 flex flex-col justify-between">
                  <div>
                    <strong className="text-sky-400 block text-xs mb-1">4. Canal del Inmobiliario (67%)</strong>
                    <p className="text-[10px] text-gray-400 leading-normal">
                      Se liquidan dividendos que cubren el pago a agencias de ventas (15% del total distribuido), afiliados estratégicos (10%) y el beneficio neto de la constructora.
                    </p>
                  </div>
                  <span className="text-[9px] font-mono text-sky-450 mt-2 block">Agencias + Afiliados</span>
                </div>
              </div>
            </div>

            {/* Voucher and Hardware Rules Alert Container (Bolbox inspired specs) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-slate-950/80 p-5 rounded-2xl border border-white/5 text-[11px] font-sans text-gray-300">
              
              <div className="space-y-1.5 border-b sm:border-b-0 sm:border-r border-white/5 pb-3 sm:pb-0 sm:pr-3.5">
                <span className="text-[10px] font-mono text-emerald-400 font-extrabold uppercase tracking-wider block">● Restricción de Conexión</span>
                <strong className="text-white text-[12px] block">1 Voucher = 1 Dispositivo</strong>
                <span className="text-gray-400 leading-relaxed block text-[10.5px]">
                  Cada ticket de acceso prepago es estrictamente personal y autoriza un único dispositivo conectado simultáneamente para proteger la estabilidad de la red.
                </span>
              </div>

              <div className="space-y-1.5 border-b sm:border-b-0 lg:border-b-0 lg:border-r border-white/5 pb-3 sm:pb-0 sm:pl-3.5 sm:pr-3.5">
                <span className="text-[10px] font-mono text-sky-400 font-extrabold uppercase tracking-wider block">● Habilitación para TV</span>
                <strong className="text-white text-[12px] block">IPTV para Televisor = 49 BOB</strong>
                <span className="text-gray-400 leading-relaxed block text-[10.5px]">
                  Si el residente requiere el voucher específicamente para el televisor (Smart TV o TV Box), se paga un canon único de 49 BOB mensuales únicamente para IPTV.
                </span>
              </div>

              <div className="space-y-1.5 border-b sm:border-b-0 sm:border-r border-white/5 pb-3 sm:pb-0 sm:pl-3.5 sm:pr-3.5">
                <span className="text-[10px] font-mono text-purple-400 font-extrabold uppercase tracking-wider block">● Administración Total</span>
                <strong className="text-white text-[12px] block">Control de la Desarrolladora</strong>
                <span className="text-gray-400 leading-relaxed block text-[10.5px]">
                  Los vouchers son administrados y emitidos de forma directa y autónoma por la desarrolladora inmobiliaria.
                </span>
              </div>

              <div className="space-y-1.5 sm:pl-3.5">
                <span className="text-[10px] font-mono text-[#10B981] font-extrabold uppercase tracking-wider block">● Estatus de Activos</span>
                <strong className="text-white text-[12px] block">Inversión 100% Dueña</strong>
                <span className="text-gray-400 leading-relaxed block text-[10.5px]">
                  Al financiar el equipamiento Cambium base, el desarrollador se vuelve dueño íntegro del 67% del dividendo neto.
                </span>
              </div>

            </div>

            {/* Simulated Plans Recalculation Cards (Desktop: 5 Cols, Mobile: 1 Col Symmetrical) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              
              {/* PLAN 1 */}
              <div className="border border-white/5 p-4 rounded-xl bg-slate-950/45 space-y-4 hover:border-emerald-500/20 transition-all flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[9px] font-mono text-gray-500 border-b border-white/5 pb-1.5">
                    <span>OPCIÓN 1: TICKET MÓVIL</span>
                    <span className="text-emerald-400 font-bold uppercase">WiFi Personal</span>
                  </div>
                  <h4 className="font-display font-bold text-sm text-white">Tickets WiFi QR</h4>
                  <div className="text-xl font-mono font-extrabold text-[#10B981]">
                    49 BOB <span className="text-[10px] text-gray-400 font-sans font-normal">/ 1 Disp. / mes</span>
                  </div>
                  <p className="text-[10px] text-gray-400 leading-normal font-sans">
                    Navegación premium y de alta velocidad autorizada exclusivamente para un dispositivo personal (Celular, PC o Laptop).
                  </p>
                </div>

                <div className="bg-slate-950 p-2.5 rounded-lg border border-white/5 text-[9px] font-mono space-y-1.5 pt-2">
                  <div className="flex justify-between text-gray-400">
                    <span>COBRADO BRUTO:</span>
                    <span className="text-white font-bold">{planPrepago.total.toLocaleString('es-BO')} BOB</span>
                  </div>
                  <div className="flex justify-between text-amber-500/90 border-b border-white/5 pb-1">
                    <span>COSTOS OPERAT.:</span>
                    <span>-{(planPrepago.totalCosts).toLocaleString('es-BO')} BOB</span>
                  </div>
                  <div className="text-[8px] text-gray-500 space-y-0.5 pl-1.5 leading-tight pb-1 border-b border-white/5">
                    <div>• Energía: -{planPrepago.electricityCost.toLocaleString('es-BO')} BOB</div>
                    <div className="truncate">• {planPrepago.connectionType}: -{planPrepago.internetCost.toLocaleString('es-BO')} BOB</div>
                    {!hasFiberOptic && planPrepago.starlinkCapEx > 0 && (
                      <div className="text-amber-500 font-extrabold">• CapEx Antenas: {planPrepago.starlinkCapEx.toLocaleString('es-BO')} BOB</div>
                    )}
                  </div>
                  <div className="flex justify-between text-white font-bold">
                    <span>A DISTRIBUIR:</span>
                    <span>{planPrepago.subtotalDistributed.toLocaleString('es-BO')} BOB</span>
                  </div>
                  <div className="flex justify-between text-red-400 font-semibold pl-1">
                    <span>{(planPrepago.concedenteRatio * 100).toFixed(0)}% REGALÍAS LIBRE:</span>
                    <span>{planPrepago.royalties.toLocaleString('es-BO')} BOB</span>
                  </div>
                  {revenueOption === 'agency' && (
                    <div className="flex justify-between text-sky-400 font-semibold pl-1 font-mono">
                      <span>34% AGENTE / MARKE.:</span>
                      <span>{planPrepago.agencyPayment.toLocaleString('es-BO')} BOB</span>
                    </div>
                  )}
                  <div className="flex justify-between text-[#10B981] font-bold border-t border-white/5 pt-1">
                    <span>{(planPrepago.concesionarioRatio * 100).toFixed(0)}% PROPIETARIO NETO:</span>
                    <span>{planPrepago.profit.toLocaleString('es-BO')} BOB</span>
                  </div>
                  <div className="text-[8.5px] text-gray-400 space-y-0.5 pl-1.5 leading-tight border-t border-dashed border-white/5 pt-1">
                    <div className="flex justify-between">
                      <span>• Agencias (15%):</span>
                      <span>{planPrepago.agenciesPayment.toLocaleString('es-BO')} BOB</span>
                    </div>
                    <div className="flex justify-between">
                      <span>• Afiliados (10%):</span>
                      <span>{planPrepago.affiliatesPayment.toLocaleString('es-BO')} BOB</span>
                    </div>
                    <div className="flex justify-between text-[#10B981] font-extrabold">
                      <span>• Inmobiliaria Neto:</span>
                      <span>{planPrepago.netDeveloperProfit.toLocaleString('es-BO')} BOB</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* PLAN 2 - IPTV TELEVISOR */}
              <div className="border border-white/5 p-4 rounded-xl bg-slate-950/45 space-y-4 hover:border-sky-500/20 transition-all flex flex-col justify-between border-sky-500/10">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[9px] font-mono text-gray-500 border-b border-white/5 pb-1.5">
                    <span>OPCIÓN 2: VOUCHER SMART TV</span>
                    <span className="text-sky-400 font-bold uppercase">Solo IPTV TV</span>
                  </div>
                  <h4 className="font-display font-bold text-sm text-white">IPTV para Televisores</h4>
                  <div className="text-xl font-mono font-extrabold text-[#10B981]">
                    49 BOB <span className="text-[10px] text-gray-400 font-sans font-normal">/ Smart TV / mes</span>
                  </div>
                  <p className="text-[10px] text-gray-400 leading-normal font-sans">
                    Habilitación dedicada del sistema de televisión interactiva de alta definición exclusivamente cargado en un Smart TV o TV Box.
                  </p>
                </div>

                <div className="bg-slate-950 p-2.5 rounded-lg border border-white/5 text-[9px] font-mono space-y-1.5 pt-2">
                  <div className="flex justify-between text-gray-400">
                    <span>COBRADO BRUTO:</span>
                    <span className="text-white font-bold">{planIptvSolo.total.toLocaleString('es-BO')} BOB</span>
                  </div>
                  <div className="flex justify-between text-amber-500/90 border-b border-white/5 pb-1">
                    <span>COSTOS OPERAT.:</span>
                    <span>-{(planIptvSolo.totalCosts).toLocaleString('es-BO')} BOB</span>
                  </div>
                  <div className="text-[8px] text-gray-500 space-y-0.5 pl-1.5 leading-tight pb-1 border-b border-white/5">
                    <div>• Energía: -{planIptvSolo.electricityCost.toLocaleString('es-BO')} BOB</div>
                    <div className="truncate">• {planIptvSolo.connectionType}: -{planIptvSolo.internetCost.toLocaleString('es-BO')} BOB</div>
                    {!hasFiberOptic && planIptvSolo.starlinkCapEx > 0 && (
                      <div className="text-amber-500 font-extrabold">• CapEx Antenas: {planIptvSolo.starlinkCapEx.toLocaleString('es-BO')} BOB</div>
                    )}
                  </div>
                  <div className="flex justify-between text-white font-bold">
                    <span>A DISTRIBUIR:</span>
                    <span>{planIptvSolo.subtotalDistributed.toLocaleString('es-BO')} BOB</span>
                  </div>
                  <div className="flex justify-between text-red-400 font-semibold pl-1">
                    <span>{(planIptvSolo.concedenteRatio * 100).toFixed(0)}% REGALÍAS LIBRE:</span>
                    <span>{planIptvSolo.royalties.toLocaleString('es-BO')} BOB</span>
                  </div>
                  {revenueOption === 'agency' && (
                    <div className="flex justify-between text-sky-400 font-semibold pl-1 font-mono">
                      <span>34% AGENTE / MARKE.:</span>
                      <span>{planIptvSolo.agencyPayment.toLocaleString('es-BO')} BOB</span>
                    </div>
                  )}
                  <div className="flex justify-between text-[#10B981] font-bold border-t border-white/5 pt-1">
                    <span>{(planIptvSolo.concesionarioRatio * 100).toFixed(0)}% PROPIETARIO NETO:</span>
                    <span>{planIptvSolo.profit.toLocaleString('es-BO')} BOB</span>
                  </div>
                  <div className="text-[8.5px] text-gray-400 space-y-0.5 pl-1.5 leading-tight border-t border-dashed border-white/5 pt-1">
                    <div className="flex justify-between">
                      <span>• Agencias (15%):</span>
                      <span>{planIptvSolo.agenciesPayment.toLocaleString('es-BO')} BOB</span>
                    </div>
                    <div className="flex justify-between">
                      <span>• Afiliados (10%):</span>
                      <span>{planIptvSolo.affiliatesPayment.toLocaleString('es-BO')} BOB</span>
                    </div>
                    <div className="flex justify-between text-[#10B981] font-extrabold">
                      <span>• Inmobiliaria Neto:</span>
                      <span>{planIptvSolo.netDeveloperProfit.toLocaleString('es-BO')} BOB</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* PLAN 3 */}
              <div className="border border-white/5 p-4 rounded-xl bg-slate-950/45 space-y-4 hover:border-teal-500/20 transition-all flex flex-col justify-between relative ring-1 ring-emerald-500/10">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-emerald-500 text-slate-950 px-2 py-0.5 rounded-full font-mono text-[8px] font-extrabold uppercase tracking-wide z-10">
                  MÁS RECOMENDADO
                </div>
                
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[9px] font-mono text-gray-500 border-b border-white/5 pb-1.5">
                    <span>OPCIÓN 3: VOUCHER DÚO</span>
                    <span className="text-teal-400 font-bold uppercase">WiFi + IPTV Hogar</span>
                  </div>
                  <h4 className="font-display font-bold text-sm text-white">Tickets Prepago Dúo QR</h4>
                  <div className="text-xl font-mono font-extrabold text-[#10B981]">
                    88 BOB <span className="text-[10px] text-gray-400 font-sans font-normal">/ por hogar / mes</span>
                  </div>
                  <p className="text-[10px] text-gray-400 leading-normal font-sans">
                    Navegación ilimitada de alta intensidad junto con IPTV unificado para todos sus Smart TVs residenciales en el lote.
                  </p>
                </div>

                <div className="bg-[#0b0f19] p-2.5 rounded-lg border border-emerald-500/10 text-[9px] font-mono space-y-1.5 pt-2">
                  <div className="flex justify-between text-gray-400">
                    <span>COBRADO BRUTO:</span>
                    <span className="text-white font-bold">{planCombo.total.toLocaleString('es-BO')} BOB</span>
                  </div>
                  <div className="flex justify-between text-amber-500/90 border-b border-white/5 pb-1">
                    <span>COSTOS OPERAT.:</span>
                    <span>-{(planCombo.totalCosts).toLocaleString('es-BO')} BOB</span>
                  </div>
                  <div className="text-[8px] text-gray-500 space-y-0.5 pl-1.5 leading-tight pb-1 border-b border-white/5">
                    <div>• Energía: -{planCombo.electricityCost.toLocaleString('es-BO')} BOB</div>
                    <div className="truncate">• {planCombo.connectionType}: -{planCombo.internetCost.toLocaleString('es-BO')} BOB</div>
                    {!hasFiberOptic && planCombo.starlinkCapEx > 0 && (
                      <div className="text-amber-500 font-extrabold">• CapEx Antenas: {planCombo.starlinkCapEx.toLocaleString('es-BO')} BOB</div>
                    )}
                  </div>
                  <div className="flex justify-between text-white font-bold">
                    <span>A DISTRIBUIR:</span>
                    <span>{planCombo.subtotalDistributed.toLocaleString('es-BO')} BOB</span>
                  </div>
                  <div className="flex justify-between text-red-400 font-semibold pl-1">
                    <span>{(planCombo.concedenteRatio * 100).toFixed(0)}% REGALÍAS LIBRE:</span>
                    <span>{planCombo.royalties.toLocaleString('es-BO')} BOB</span>
                  </div>
                  {revenueOption === 'agency' && (
                    <div className="flex justify-between text-sky-400 font-semibold pl-1 font-mono">
                      <span>34% AGENTE / MARKE.:</span>
                      <span>{planCombo.agencyPayment.toLocaleString('es-BO')} BOB</span>
                    </div>
                  )}
                  <div className="flex justify-between text-[#10B981] font-bold border-t border-white/5 pt-1">
                    <span>{(planCombo.concesionarioRatio * 100).toFixed(0)}% PROPIETARIO NETO:</span>
                    <span>{planCombo.profit.toLocaleString('es-BO')} BOB</span>
                  </div>
                  <div className="text-[8.5px] text-gray-400 space-y-0.5 pl-1.5 leading-tight border-t border-dashed border-white/5 pt-1">
                    <div className="flex justify-between">
                      <span>• Agencias (15%):</span>
                      <span>{planCombo.agenciesPayment.toLocaleString('es-BO')} BOB</span>
                    </div>
                    <div className="flex justify-between">
                      <span>• Afiliados (10%):</span>
                      <span>{planCombo.affiliatesPayment.toLocaleString('es-BO')} BOB</span>
                    </div>
                    <div className="flex justify-between text-[#10B981] font-extrabold">
                      <span>• Inmobiliaria Neto:</span>
                      <span>{planCombo.netDeveloperProfit.toLocaleString('es-BO')} BOB</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* PLAN 4 */}
              <div className="border border-white/5 p-4 rounded-xl bg-slate-950/45 space-y-4 hover:border-purple-500/20 transition-all flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[9px] font-mono text-gray-500 border-b border-white/5 pb-1.5">
                    <span>OPCIÓN 4: TRIPLE COMPLETO</span>
                    <span className="text-purple-400 font-bold uppercase">Seguridad + Dúo</span>
                  </div>
                  <h4 className="font-display font-bold text-sm text-white">Voucher Triple Play</h4>
                  <div className="text-xl font-mono font-extrabold text-[#10B981]">
                    108 BOB <span className="text-[10px] text-gray-400 font-sans font-normal">/ por lote / mes</span>
                  </div>
                  <p className="text-[10px] text-gray-400 leading-normal font-sans">
                    El ecosistema smart completo: Internet WiFi de ultra-capacidad, IPTV y videovigilancia IoT con monitoreo remoto de loteadores.
                  </p>
                </div>

                <div className="bg-slate-950 p-2.5 rounded-lg border border-white/5 text-[9px] font-mono space-y-1.5 pt-2">
                  <div className="flex justify-between text-gray-400">
                    <span>COBRADO BRUTO:</span>
                    <span className="text-white font-bold">{planTriple.total.toLocaleString('es-BO')} BOB</span>
                  </div>
                  <div className="flex justify-between text-amber-500/90 border-b border-white/5 pb-1">
                    <span>COSTOS OPERAT.:</span>
                    <span>-{(planTriple.totalCosts).toLocaleString('es-BO')} BOB</span>
                  </div>
                  <div className="text-[8px] text-gray-500 space-y-0.5 pl-1.5 leading-tight pb-1 border-b border-white/5">
                    <div>• Energía: -{planTriple.electricityCost.toLocaleString('es-BO')} BOB</div>
                    <div className="truncate">• {planTriple.connectionType}: -{planTriple.internetCost.toLocaleString('es-BO')} BOB</div>
                    {!hasFiberOptic && planTriple.starlinkCapEx > 0 && (
                      <div className="text-amber-500 font-extrabold">• CapEx Antenas: {planTriple.starlinkCapEx.toLocaleString('es-BO')} BOB</div>
                    )}
                  </div>
                  <div className="flex justify-between text-white font-bold">
                    <span>A DISTRIBUIR:</span>
                    <span>{planTriple.subtotalDistributed.toLocaleString('es-BO')} BOB</span>
                  </div>
                  <div className="flex justify-between text-red-400 font-semibold pl-1">
                    <span>{(planTriple.concedenteRatio * 100).toFixed(0)}% REGALÍAS LIBRE:</span>
                    <span>{planTriple.royalties.toLocaleString('es-BO')} BOB</span>
                  </div>
                  {revenueOption === 'agency' && (
                    <div className="flex justify-between text-sky-400 font-semibold pl-1 font-mono">
                      <span>34% AGENTE / MARKE.:</span>
                      <span>{planTriple.agencyPayment.toLocaleString('es-BO')} BOB</span>
                    </div>
                  )}
                  <div className="flex justify-between text-[#10B981] font-bold border-t border-white/5 pt-1">
                    <span>{(planTriple.concesionarioRatio * 100).toFixed(0)}% PROPIETARIO NETO:</span>
                    <span>{planTriple.profit.toLocaleString('es-BO')} BOB</span>
                  </div>
                  <div className="text-[8.5px] text-gray-400 space-y-0.5 pl-1.5 leading-tight border-t border-dashed border-white/5 pt-1">
                    <div className="flex justify-between">
                      <span>• Agencias (15%):</span>
                      <span>{planTriple.agenciesPayment.toLocaleString('es-BO')} BOB</span>
                    </div>
                    <div className="flex justify-between">
                      <span>• Afiliados (10%):</span>
                      <span>{planTriple.affiliatesPayment.toLocaleString('es-BO')} BOB</span>
                    </div>
                    <div className="flex justify-between text-[#10B981] font-extrabold">
                      <span>• Inmobiliaria Neto:</span>
                      <span>{planTriple.netDeveloperProfit.toLocaleString('es-BO')} BOB</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* PLAN 5 - MENSUALIDAD RESIDENCIAL Bs. 610 */}
              <div className="border border-[#10B981]/20 p-4 rounded-xl bg-[#091515]/40 space-y-4 hover:border-[#10B981]/50 transition-all flex flex-col justify-between shadow-[0_4px_25px_rgba(16,185,129,0.05)]">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[9px] font-mono text-[#10B981] border-b border-[#10B981]/15 pb-1.5 font-bold">
                    <span>OPCIÓN 5: RESIDENCIAL VIP</span>
                    <span className="text-[#10B981] font-bold uppercase">Todo Simétrico</span>
                  </div>
                  <h4 className="font-display font-bold text-sm text-white">Mensualidad Residencial</h4>
                  <div className="text-xl font-mono font-extrabold text-[#10B981]">
                    610 BOB <span className="text-[10px] text-gray-400 font-sans font-normal">/ por hogar / mes</span>
                  </div>
                  <p className="text-[10px] text-gray-400 leading-normal font-sans">
                    Suscripción premium ilimitada. Ofrece banda ancha de ultra-capacidad simétrica por loteador sin mora gracias al pago por QR.
                  </p>
                </div>

                <div className="bg-[#050f0e] p-2.5 rounded-lg border border-[#10B981]/10 text-[9px] font-mono space-y-1.5 pt-2">
                  <div className="flex justify-between text-gray-400">
                    <span>COBRADO BRUTO:</span>
                    <span className="text-white font-bold">{planResidencial.total.toLocaleString('es-BO')} BOB</span>
                  </div>
                  <div className="flex justify-between text-amber-500/90 border-b border-white/5 pb-1">
                    <span>COSTOS OPERAT.:</span>
                    <span>-{(planResidencial.totalCosts).toLocaleString('es-BO')} BOB</span>
                  </div>
                  <div className="text-[8px] text-gray-500 space-y-0.5 pl-1.5 leading-tight pb-1 border-b border-white/5">
                    <div>• Energía: -{planResidencial.electricityCost.toLocaleString('es-BO')} BOB</div>
                    <div className="truncate">• {planResidencial.connectionType}: -{planResidencial.internetCost.toLocaleString('es-BO')} BOB</div>
                    {!hasFiberOptic && planResidencial.starlinkCapEx > 0 && (
                      <div className="text-amber-500 font-extrabold">• CapEx Antenas: {planResidencial.starlinkCapEx.toLocaleString('es-BO')} BOB</div>
                    )}
                  </div>
                  <div className="flex justify-between text-white font-bold">
                    <span>A DISTRIBUIR:</span>
                    <span>{planResidencial.subtotalDistributed.toLocaleString('es-BO')} BOB</span>
                  </div>
                  <div className="flex justify-between text-red-400 font-semibold pl-1">
                    <span>{(planResidencial.concedenteRatio * 100).toFixed(0)}% REGALÍAS LIBRE:</span>
                    <span>{planResidencial.royalties.toLocaleString('es-BO')} BOB</span>
                  </div>
                  {revenueOption === 'agency' && (
                    <div className="flex justify-between text-sky-400 font-semibold pl-1 font-mono">
                      <span>34% AGENTE / MARKE.:</span>
                      <span>{planResidencial.agencyPayment.toLocaleString('es-BO')} BOB</span>
                    </div>
                  )}
                  <div className="flex justify-between text-[#10B981] font-bold border-t border-white/5 pt-1">
                    <span>{(planResidencial.concesionarioRatio * 100).toFixed(0)}% PROPIETARIO NETO:</span>
                    <span>{planResidencial.profit.toLocaleString('es-BO')} BOB</span>
                  </div>
                  <div className="text-[8.5px] text-gray-400 space-y-0.5 pl-1.5 leading-tight border-t border-[#10B981]/15 pt-1">
                    <div className="flex justify-between">
                      <span>• Agencias (15%):</span>
                      <span>{planResidencial.agenciesPayment.toLocaleString('es-BO')} BOB</span>
                    </div>
                    <div className="flex justify-between">
                      <span>• Afiliados (10%):</span>
                      <span>{planResidencial.affiliatesPayment.toLocaleString('es-BO')} BOB</span>
                    </div>
                    <div className="flex justify-between text-[#10B981] font-extrabold">
                      <span>• Inmobiliaria Neto:</span>
                      <span>{planResidencial.netDeveloperProfit.toLocaleString('es-BO')} BOB</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Direct Contract Contact Banner inside calculator container */}
            <div className="text-center font-mono text-xs text-gray-400 border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span>* Los servicios operan en su totalidad en modalidad prepago: el usuario final escanea un QR, paga y se auto-habilita al instante.</span>
              <a 
                href="https://wa.me/59175575555?text=Hola%20Ing.%20Juan%20Pablo,%20quiero%20cotizar%20las%20plataformas%20SaaS%20de%20Empresa%20LIBRE"
                target="_blank"
                rel="noreferrer"
                className="text-emerald-400 font-bold hover:text-emerald-300 flex items-center gap-1.5 bg-emerald-500/5 hover:bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20"
              >
                <Smartphone className="w-3.5 h-3.5" /> Consultar con Juan Pablo Yáñez
              </a>
            </div>

          </div>

        </section>

        {/* SECTION 4: PROPUESTA DE LICENCIAMIENTO SAAS (Bolbox Minimalist Clean Styling) */}
        <section id="propuesta-comercial" className="space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#10B981] font-bold">
              Planes y Concesión Oficial
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Modelos de Licenciamiento SaaS
            </h2>
            <p className="text-xs font-mono text-[#10B981] tracking-widest uppercase">
              Para todos los Desarrolladores y Constructores Urbano-Inmobiliarios
            </p>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Implementación ágil de infraestructura de software unificada sobre Empresa LIBRE. Selecciona abajo el modelo según si deseas participar del co-patrocinio o mantener la red 100% privada para tu propia marca.
            </p>
          </div>

          {/* Interactive Licensing Option Switcher with Premium Visual Design */}
          <div className="flex justify-center max-w-4xl mx-auto mb-10 px-4">
            <div className="relative flex flex-col md:flex-row p-1.5 bg-slate-950/80 rounded-2xl border border-white/5 shadow-2xl w-full gap-2">
              <button
                type="button"
                onClick={() => setSelectedLicensingModel('co-sponsored')}
                className={`flex-1 py-3 text-center rounded-xl transition-all duration-300 font-mono text-xs cursor-pointer flex flex-col items-center justify-center gap-1 relative ${
                  selectedLicensingModel === 'co-sponsored'
                    ? "bg-emerald-500/10 text-white font-bold border border-emerald-500/20 shadow-[0_4px_20px_rgba(16,185,129,0.15)]"
                    : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
                }`}
              >
                <span className="text-xs flex items-center gap-1.5 font-bold uppercase tracking-wider">🤝 Co-Patrocinado</span>
                <span className="text-[10px] text-emerald-400 font-black">$2,222 USD / Año</span>
                <span className="text-[8px] text-gray-500 font-sans mt-0.5">Hasta 22 equipos • $144 equipo ad. • Ads Globales</span>
              </button>
              
              <button
                type="button"
                onClick={() => setSelectedLicensingModel('autonomous')}
                className={`flex-1 py-3 text-center rounded-xl transition-all duration-300 font-mono text-xs cursor-pointer flex flex-col items-center justify-center gap-1 relative ${
                  selectedLicensingModel === 'autonomous'
                    ? "bg-emerald-500/10 text-white font-bold border border-emerald-500/20 shadow-[0_4px_20px_rgba(16,185,129,0.15)]"
                    : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
                }`}
              >
                <span className="text-xs flex items-center gap-1.5 font-bold uppercase tracking-wider">👑 Autónomo Privado</span>
                <span className="text-[10px] text-emerald-400 font-black">$8,888 USD / Año</span>
                <span className="text-[8px] text-gray-400/90 font-sans mt-0.5">Hasta 128 equipos • $222 equipo ad. • 100% Ads Propios</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedLicensingModel('ads-network')}
                className={`flex-1 py-3 text-center rounded-xl transition-all duration-300 font-mono text-xs cursor-pointer flex flex-col items-center justify-center gap-1 relative ${
                  selectedLicensingModel === 'ads-network'
                    ? "bg-emerald-500/10 text-white font-bold border border-emerald-500/20 shadow-[0_4px_20px_rgba(16,185,129,0.15)] animate-pulse"
                    : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
                }`}
              >
                <span className="text-xs flex items-center gap-1.5 font-bold uppercase tracking-wider">🌍 ADS Libre Global</span>
                <span className="text-[10px] text-emerald-400 font-black">$4,444 USD / Año</span>
                <span className="text-[8px] text-[#10B981] font-sans mt-0.5">5000+ Clientes simultáneos • Conexión de Ads • $188 equipo ad.</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            
            {/* PLATFORM 1 */}
            <div className="border border-white/5 rounded-2xl p-5 bg-slate-950/45 space-y-5 flex flex-col justify-between hover:border-emerald-500/25 hover:scale-[1.01] transition-all duration-300">
              <div className="space-y-3">
                <div className="border-b border-white/5 pb-3">
                  <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block">PLATAFORMA 01</span>
                  <h3 className="text-white text-md sm:text-base font-bold font-display mt-0.5 text-ellipsis overflow-hidden">wifi marketing ai Libre</h3>
                  <span className="px-2 py-0.5 mt-1.5 inline-block bg-emerald-500/10 border border-emerald-500/25 text-[#10B981] font-mono text-[9px] uppercase font-semibold rounded-md">
                    Internet & Showroom
                  </span>
                </div>

                <p className="text-[11px] text-gray-400 leading-relaxed">
                  Captación de leads automatizada con portal cautivo, remarketing automatizado por WhatsApp cada 33 minutos y sistema de prepago por vouchers.
                </p>

                <ul className="text-[11px] text-gray-350 space-y-1.5 font-sans pt-1">
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#10B981] font-bold">✓</span> Captura voluntaria de datos
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#10B981] font-bold">✓</span> Retornos vía prepago QR
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#10B981] font-bold">✓</span> Segmentación Geofencing
                  </li>
                </ul>
              </div>

              <div className="space-y-3.5 pt-3 border-t border-white/5 font-mono">
                <div className="flex justify-between items-baseline">
                  <span className="text-[9px] text-gray-500 uppercase">Licencia SaaS:</span>
                  <div className="text-right">
                    <span className="text-lg text-white font-extrabold">
                      {pricingConfig[selectedLicensingModel].price}
                    </span>
                    <span className="text-[9px] text-gray-400 block">/ año por servicio</span>
                  </div>
                </div>

                <div className="bg-slate-950 p-2.5 rounded-lg border border-white/5 text-[9.5px] space-y-1">
                  <div className="flex justify-between text-gray-450">
                    <span>33% Apertura Inicial:</span>
                    <span className="text-white font-bold">
                      {pricingConfig[selectedLicensingModel].apertura}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-450">
                    <span>67% Contra Entrega:</span>
                    <span className="text-white font-bold">
                      {pricingConfig[selectedLicensingModel].contraEntrega}
                    </span>
                  </div>
                </div>

                {/* Scope specs based on model */}
                <div className="text-[9.5px] space-y-1.5 p-2.5 rounded-xl bg-slate-900/60 border border-white/5">
                  <div className="flex justify-between text-gray-300">
                    <span>Equipos Incluidos:</span>
                    <span className="text-emerald-400 font-bold">
                      {pricingConfig[selectedLicensingModel].equipos}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Equipo Adicional:</span>
                    <span className="text-white font-bold">
                      {pricingConfig[selectedLicensingModel].equipoAdicional}
                    </span>
                  </div>
                  <div className="text-[9px] text-gray-400 border-t border-white/5 pt-1.5 mt-1.5 font-sans leading-relaxed">
                    <div>
                      <span className={`font-black font-mono block text-[9.5px] tracking-wider uppercase ${pricingConfig[selectedLicensingModel].badgeClass}`}>
                        {pricingConfig[selectedLicensingModel].badge}
                      </span>
                      <p className="mt-0.5 text-gray-400 text-[10px]">{pricingConfig[selectedLicensingModel].desc}</p>
                    </div>
                  </div>
                </div>

                {/* Alternative cost subtitle info explicitly required to be listed below price */}
                <div className="text-[9px] text-gray-500 font-sans leading-tight pt-1 border-t border-white/5">
                  <span>{pricingConfig[selectedLicensingModel].altDesc}</span>
                </div>
              </div>
            </div>

            {/* PLATFORM 2 */}
            <div className="border border-white/5 rounded-2xl p-5 bg-slate-950/45 space-y-5 flex flex-col justify-between hover:border-emerald-500/25 hover:scale-[1.01] transition-all duration-300">
              <div className="space-y-3">
                <div className="border-b border-white/5 pb-3">
                  <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block">PLATAFORMA 02</span>
                  <h3 className="text-white text-md sm:text-base font-bold font-display mt-0.5 text-ellipsis overflow-hidden">iptv Libre</h3>
                  <span className="px-2 py-0.5 mt-1.5 inline-block bg-sky-500/10 border border-sky-500/25 text-sky-400 font-mono text-[9px] uppercase font-semibold rounded-md">
                    Televisión Interactiva
                  </span>
                </div>

                <p className="text-[11px] text-gray-400 leading-relaxed">
                  Entretenimiento digital de alta definición en todos los hogares. Sin parabólicas molestas y con un potente 67% de ganancia recurrente.
                </p>

                <ul className="text-[11px] text-gray-355 space-y-1.5 font-sans pt-1">
                  <li className="flex items-start gap-1.5">
                    <span className="text-sky-450 font-bold">✓</span> Canales HD y películas 24/7
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-sky-450 font-bold">✓</span> Cobranza indirecta eficaz
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-sky-450 font-bold">✓</span> App nativa para Smart TVs
                  </li>
                </ul>
              </div>

              <div className="space-y-3.5 pt-3 border-t border-white/5 font-mono">
                <div className="flex justify-between items-baseline">
                  <span className="text-[9px] text-gray-500 uppercase">Licencia SaaS:</span>
                  <div className="text-right">
                    <span className="text-lg text-white font-extrabold">
                      {pricingConfig[selectedLicensingModel].price}
                    </span>
                    <span className="text-[9px] text-gray-400 block">/ año por servicio</span>
                  </div>
                </div>

                <div className="bg-slate-950 p-2.5 rounded-lg border border-white/5 text-[9.5px] space-y-1">
                  <div className="flex justify-between text-gray-450">
                    <span>33% Apertura Inicial:</span>
                    <span className="text-white font-bold">
                      {pricingConfig[selectedLicensingModel].apertura}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-450">
                    <span>67% Contra Entrega:</span>
                    <span className="text-white font-bold">
                      {pricingConfig[selectedLicensingModel].contraEntrega}
                    </span>
                  </div>
                </div>

                {/* Scope specs based on model */}
                <div className="text-[9.5px] space-y-1.5 p-2.5 rounded-xl bg-slate-900/60 border border-white/5">
                  <div className="flex justify-between text-gray-300">
                    <span>Equipos Incluidos:</span>
                    <span className="text-emerald-400 font-bold">
                      {pricingConfig[selectedLicensingModel].equipos}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Equipo Adicional:</span>
                    <span className="text-white font-bold">
                      {pricingConfig[selectedLicensingModel].equipoAdicional}
                    </span>
                  </div>
                  <div className="text-[9px] text-gray-400 border-t border-white/5 pt-1.5 mt-1.5 font-sans leading-relaxed">
                    <div>
                      <span className={`font-black font-mono block text-[9.5px] tracking-wider uppercase ${pricingConfig[selectedLicensingModel].badgeClass}`}>
                        {pricingConfig[selectedLicensingModel].badge}
                      </span>
                      <p className="mt-0.5 text-gray-400 text-[10px]">{pricingConfig[selectedLicensingModel].desc}</p>
                    </div>
                  </div>
                </div>

                {/* Alternative cost subtitle info explicitly required to be listed below price */}
                <div className="text-[9px] text-gray-500 font-sans leading-tight pt-1 border-t border-white/5">
                  <span>{pricingConfig[selectedLicensingModel].altDesc}</span>
                </div>
              </div>
            </div>

            {/* PLATFORM 3 */}
            <div className="border border-white/5 rounded-2xl p-5 bg-slate-950/45 space-y-5 flex flex-col justify-between hover:border-emerald-500/25 hover:scale-[1.01] transition-all duration-300">
              <div className="space-y-3">
                <div className="border-b border-white/5 pb-3">
                  <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block">PLATAFORMA 03</span>
                  <h3 className="text-white text-md sm:text-base font-bold font-display mt-0.5 text-ellipsis overflow-hidden">videovigilancia ai Libre</h3>
                  <span className="px-2 py-0.5 mt-1.5 inline-block bg-purple-500/10 border border-purple-500/25 text-purple-400 font-mono text-[9px] uppercase font-semibold rounded-md">
                    Seguridad en la Nube
                  </span>
                </div>

                <p className="text-[11px] text-gray-400 leading-relaxed">
                  Monitoreo 24/7 perimetral en la nube de alta seguridad para residentes y administración, compatible con hardware multimarca estándar.
                </p>

                <ul className="text-[11px] text-gray-355 space-y-1.5 font-sans pt-1">
                  <li className="flex items-start gap-1.5">
                    <span className="text-purple-450 font-bold">✓</span> Almacenamiento nube cifrado
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-purple-450 font-bold">✓</span> Alertas analíticas push
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-purple-450 font-bold">✓</span> Visualización móvil remota
                  </li>
                </ul>
              </div>

              <div className="space-y-3.5 pt-3 border-t border-white/5 font-mono">
                <div className="flex justify-between items-baseline">
                  <span className="text-[9px] text-gray-500 uppercase">Licencia SaaS:</span>
                  <div className="text-right">
                    <span className="text-lg text-white font-extrabold">
                      {pricingConfig[selectedLicensingModel].price}
                    </span>
                    <span className="text-[9px] text-gray-400 block">/ año por servicio</span>
                  </div>
                </div>

                <div className="bg-slate-950 p-2.5 rounded-lg border border-white/5 text-[9.5px] space-y-1">
                  <div className="flex justify-between text-gray-450">
                    <span>33% Apertura Inicial:</span>
                    <span className="text-white font-bold">
                      {pricingConfig[selectedLicensingModel].apertura}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-450">
                    <span>67% Contra Entrega:</span>
                    <span className="text-white font-bold">
                      {pricingConfig[selectedLicensingModel].contraEntrega}
                    </span>
                  </div>
                </div>

                {/* Scope specs based on model */}
                <div className="text-[9.5px] space-y-1.5 p-2.5 rounded-xl bg-slate-900/60 border border-white/5">
                  <div className="flex justify-between text-gray-300">
                    <span>Equipos Incluidos:</span>
                    <span className="text-emerald-400 font-bold">
                      {pricingConfig[selectedLicensingModel].equipos}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Equipo Adicional:</span>
                    <span className="text-white font-bold">
                      {pricingConfig[selectedLicensingModel].equipoAdicional}
                    </span>
                  </div>
                  <div className="text-[9px] text-gray-400 border-t border-white/5 pt-1.5 mt-1.5 font-sans leading-relaxed">
                    <div>
                      <span className={`font-black font-mono block text-[9.5px] tracking-wider uppercase ${pricingConfig[selectedLicensingModel].badgeClass}`}>
                        {pricingConfig[selectedLicensingModel].badge}
                      </span>
                      <p className="mt-0.5 text-gray-400 text-[10px]">{pricingConfig[selectedLicensingModel].desc}</p>
                    </div>
                  </div>
                </div>

                {/* Alternative cost subtitle info explicitly required to be listed below price */}
                <div className="text-[9px] text-gray-500 font-sans leading-tight pt-1 border-t border-white/5">
                  <span>{pricingConfig[selectedLicensingModel].altDesc}</span>
                </div>
              </div>
            </div>

            {/* PLATFORM 4 */}
            <div className="border border-white/5 rounded-2xl p-5 bg-slate-950/45 space-y-5 flex flex-col justify-between hover:border-emerald-500/25 hover:scale-[1.01] transition-all duration-300">
              <div className="space-y-3">
                <div className="border-b border-white/5 pb-3">
                  <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block">PLATAFORMA 04</span>
                  <h3 className="text-white text-md sm:text-base font-bold font-display mt-0.5 text-ellipsis overflow-hidden">iot Libre ai</h3>
                  <span className="px-2 py-0.5 mt-1.5 inline-block bg-[#10B981]/15 border border-[#10B981]/25 text-emerald-400 font-mono text-[9px] uppercase font-semibold rounded-md">
                    Automatización & Telemetría
                  </span>
                </div>

                <p className="text-[11px] text-gray-400 leading-relaxed">
                  Control computarizado de accesos por QR, medidores de agua prepago, sensores de cisternas y luminarias para minimizar las expensas.
                </p>

                <ul className="text-[11px] text-gray-355 space-y-1.5 font-sans pt-1">
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-450 font-bold">✓</span> Accesos inteligentes por QR
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-450 font-bold">✓</span> Telemetría de medidores
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-450 font-bold">✓</span> Sensores perimetrales Lora
                  </li>
                </ul>
              </div>

              <div className="space-y-3.5 pt-3 border-t border-white/5 font-mono">
                <div className="flex justify-between items-baseline">
                  <span className="text-[9px] text-gray-500 uppercase">Licencia SaaS:</span>
                  <div className="text-right">
                    <span className="text-lg text-white font-extrabold">
                      {pricingConfig[selectedLicensingModel].price}
                    </span>
                    <span className="text-[9px] text-gray-400 block">/ año por servicio</span>
                  </div>
                </div>

                <div className="bg-slate-950 p-2.5 rounded-lg border border-white/5 text-[9.5px] space-y-1">
                  <div className="flex justify-between text-gray-450">
                    <span>33% Apertura Inicial:</span>
                    <span className="text-white font-bold">
                      {pricingConfig[selectedLicensingModel].apertura}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-450">
                    <span>67% Contra Entrega:</span>
                    <span className="text-white font-bold">
                      {pricingConfig[selectedLicensingModel].contraEntrega}
                    </span>
                  </div>
                </div>

                {/* Scope specs based on model */}
                <div className="text-[9.5px] space-y-1.5 p-2.5 rounded-xl bg-slate-900/60 border border-white/5">
                  <div className="flex justify-between text-gray-300">
                    <span>Equipos Incluidos:</span>
                    <span className="text-emerald-400 font-bold">
                      {pricingConfig[selectedLicensingModel].equipos}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Equipo Adicional:</span>
                    <span className="text-white font-bold">
                      {pricingConfig[selectedLicensingModel].equipoAdicional}
                    </span>
                  </div>
                  <div className="text-[9px] text-gray-400 border-t border-white/5 pt-1.5 mt-1.5 font-sans leading-relaxed">
                    <div>
                      <span className={`font-black font-mono block text-[9.5px] tracking-wider uppercase ${pricingConfig[selectedLicensingModel].badgeClass}`}>
                        {pricingConfig[selectedLicensingModel].badge}
                      </span>
                      <p className="mt-0.5 text-gray-400 text-[10px]">{pricingConfig[selectedLicensingModel].desc}</p>
                    </div>
                  </div>
                </div>

                {/* Alternative cost subtitle info explicitly required to be listed below price */}
                <div className="text-[9px] text-gray-500 font-sans leading-tight pt-1 border-t border-white/5">
                  <span>{pricingConfig[selectedLicensingModel].altDesc}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Global Advertising & Analytics Ecosystem (26 direct integrations) */}
          <div className="mt-16 border border-white/5 rounded-3xl p-6 sm:p-10 bg-slate-950/45 space-y-8 max-w-7xl mx-auto shadow-2xl relative">
            <div className="absolute top-4 right-6 bg-sky-500/10 border border-sky-500/20 text-sky-450 px-3 py-1 text-[10px] font-mono rounded-full uppercase tracking-wider font-bold">
              Asociado IAB Global • Pay Libre USA
            </div>
            
            <div className="max-w-4xl space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-sky-500/10 text-sky-400 border border-sky-500/20 text-[9px] font-mono px-2 py-0.5 rounded uppercase tracking-wider font-bold">
                  SaaS Licencia ADS Libre
                </span>
                <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[9px] font-mono px-2 py-0.5 rounded uppercase tracking-wider font-bold">
                  $4,444 USD / Año
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#10B981] tracking-tight flex items-center gap-2">
                🌍 Ecosistema de Redes Publicitarias & Analíticas Integradas
              </h3>
              <p className="text-xs font-mono text-sky-450 uppercase tracking-widest">
                Monetización Automatizada y Enrutamiento de Datos Certificado por el IAB
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">
                Habilita de forma inmediata con tu <strong className="text-white">Licencia ADS Libre ($4,444 USD/Año)</strong> la conexión simultánea de tus portales cautivos a los principales Ad-Exchanges globales para rentabilizar el tráfico de alta densidad. Este ecosistema está <strong className="text-emerald-400">asociado formalmente a la Interactive Advertising Bureau (IAB)</strong> (el consorcio mundial líder de marketing digital presente en 47 países) operando fluidamente a través de la firma norteamericana <strong className="text-white">Pay Libre USA / EEUU</strong>, propiedad del empresario e inversor <strong className="text-[#10B981]">Juan Pablo Yáñez</strong>.
              </p>
            </div>

            {/* Filter controls and Search Bar */}
            <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between border-t border-b border-white/5 py-4 my-2">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIntegrationFilter('all')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono cursor-pointer transition-all ${
                    integrationFilter === 'all'
                      ? 'bg-sky-500/20 text-white border border-sky-500/40 shadow-md shadow-sky-500/5'
                      : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  Todas (26)
                </button>
                <button
                  type="button"
                  onClick={() => setIntegrationFilter('analytics')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono cursor-pointer transition-all ${
                    integrationFilter === 'analytics'
                      ? 'bg-sky-500/20 text-white border border-sky-500/40 shadow-md shadow-sky-500/5'
                      : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  Analytics & Ads (18)
                </button>
                <button
                  type="button"
                  onClick={() => setIntegrationFilter('ads')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono cursor-pointer transition-all ${
                    integrationFilter === 'ads'
                      ? 'bg-sky-500/20 text-white border border-sky-500/40 shadow-md shadow-sky-500/5'
                      : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  Ad Networks (8)
                </button>
              </div>

              <div className="relative flex-1 max-w-sm">
                <span className="absolute inset-y-0 left-3 flex items-center text-gray-400 text-xs pointer-events-none">🔍</span>
                <input
                  type="text"
                  placeholder="Samba TV, Google Ads, Segment..."
                  value={integrationSearch}
                  onChange={(e) => setIntegrationSearch(e.target.value)}
                  className="w-full bg-slate-900 border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-sky-500/40 focus:ring-1 focus:ring-sky-500/40 transition-all font-mono"
                />
                {integrationSearch && (
                  <button
                    onClick={() => setIntegrationSearch('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white text-xs"
                    title="Limpiar búsqueda"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>

            {/* Results count indicator */}
            <div className="flex justify-between items-center">
              <span className="text-xs font-mono text-gray-450">
                Mostrando <span className="text-sky-400 font-bold">{
                  globalIntegrationsList.filter(item => {
                    const matchesSearch = item.name.toLowerCase().includes(integrationSearch.toLowerCase()) || 
                                          item.desc.toLowerCase().includes(integrationSearch.toLowerCase());
                    const matchesCategory = integrationFilter === 'all' || 
                                            (integrationFilter === 'analytics' && item.category === 'Analytics & Ads') ||
                                            (integrationFilter === 'ads' && item.category === 'Ad Networks');
                    return matchesSearch && matchesCategory;
                  }).length
                }</span> de <span className="text-white font-bold">{globalIntegrationsList.length}</span> integraciones de anuncios y analíticas
              </span>
              {(integrationSearch || integrationFilter !== 'all') && (
                <button
                  onClick={() => {
                    setIntegrationSearch('');
                    setIntegrationFilter('all');
                  }}
                  className="text-[11px] text-sky-450 hover:underline font-mono"
                >
                  Limpiar filtros ×
                </button>
              )}
            </div>

            {/* Integration Grid with Beautiful Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {globalIntegrationsList
                .filter(item => {
                  const matchesSearch = item.name.toLowerCase().includes(integrationSearch.toLowerCase()) || 
                                        item.desc.toLowerCase().includes(integrationSearch.toLowerCase());
                  const matchesCategory = integrationFilter === 'all' || 
                                          (integrationFilter === 'analytics' && item.category === 'Analytics & Ads') ||
                                          (integrationFilter === 'ads' && item.category === 'Ad Networks');
                  return matchesSearch && matchesCategory;
                })
                .map(item => (
                  <div
                    key={item.id}
                    className="border border-white/5 bg-slate-900/40 rounded-2xl p-4 flex flex-col justify-between hover:border-sky-500/20 hover:bg-slate-900/60 transition-all duration-300 relative group"
                  >
                    {item.popular && (
                      <span className="absolute top-3 right-3 bg-sky-500/10 text-sky-450 border border-sky-500/20 text-[8px] font-mono px-1.5 py-0.5 rounded uppercase tracking-wider font-extrabold性能-900 z-10 transition-transform group-hover:scale-105">
                        Popular
                      </span>
                    )}

                    <div className="space-y-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 flex items-center justify-center bg-slate-950/80 rounded-xl text-lg border border-white/5 shadow-inner">
                          {item.logo}
                        </div>
                        <div>
                          <h4 className="text-white text-xs font-bold leading-tight tracking-tight group-hover:text-sky-400 transition-colors">
                            {item.name}
                          </h4>
                          <span className="text-[9px] text-gray-500 font-mono tracking-wider block uppercase mt-0.5">
                            {item.category}
                          </span>
                        </div>
                      </div>

                      <p className="text-[10.5px] text-gray-400 leading-relaxed font-sans line-clamp-4 group-hover:line-clamp-none transition-all">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono">
                      <span className="text-gray-500 uppercase">Habilitación:</span>
                      <span className={`px-2 py-0.5 rounded font-bold text-[9px] uppercase tracking-wider ${
                        item.type === 'Direct' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                        item.type === 'Zapier' ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20' :
                        item.type === 'Webhook' ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' :
                        item.type === 'Ad Tag' ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' :
                        'bg-sky-500/10 text-sky-400 border border-sky-500/20'
                      }`}>
                        {item.type}
                      </span>
                    </div>

                    {/* Quick indicator when ads-network model is selected */}
                    {selectedLicensingModel === 'ads-network' && (
                      <div className="absolute inset-0 bg-sky-500/[0.01] border border-sky-500/15 rounded-2xl pointer-events-none group-hover:border-sky-500/30 transition-all ring-1 ring-sky-500/15" />
                    )}
                  </div>
                ))}
            </div>

            {/* Empty view state */}
            {globalIntegrationsList.filter(item => {
              const matchesSearch = item.name.toLowerCase().includes(integrationSearch.toLowerCase()) || 
                                    item.desc.toLowerCase().includes(integrationSearch.toLowerCase());
              const matchesCategory = integrationFilter === 'all' || 
                                      (integrationFilter === 'analytics' && item.category === 'Analytics & Ads') ||
                                      (integrationFilter === 'ads' && item.category === 'Ad Networks');
              return matchesSearch && matchesCategory;
            }).length === 0 && (
              <div className="text-center py-10 bg-slate-900/20 rounded-2xl border border-white/5 font-mono space-y-2">
                <span className="text-xl block">⚠️</span>
                <p className="text-xs text-gray-400 font-bold">No se encontraron integraciones de anuncios o analíticas</p>
                <p className="text-[10px] text-gray-600">Prueba ajustando el filtro de búsqueda o de categoría</p>
              </div>
            )}

            {/* SECTION: MÉTODOS DE INICIO DE SESIÓN MULTIFACTOR */}
            <div className="border-t border-white/5 pt-10 space-y-6">
              <div className="space-y-1.5 text-center md:text-left">
                <h4 className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest">
                  🔒 SEGURIDAD PORTABILIDAD WiFi
                </h4>
                <h3 className="text-lg sm:text-2xl font-bold font-display text-white">
                  Métodos de Inicio de Sesión y Autenticación Soportados
                </h3>
                <p className="text-xs text-gray-400 max-w-3xl">
                  Diversos canales interactivos seguros para el login de invitados, optimizando la captura de datos valiosos para inmobiliarias, establecimientos hoteleros y centros turísticos.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
                {[
                  { icon: "💬", title: "WhatsApp OTP", desc: "Verificación de número real por chat." },
                  { icon: "🔢", title: "SMS 2FA", desc: "Factor secundario por SMS carrier." },
                  { icon: "📧", title: "Email / Encuesta", desc: "Mapeo de opiniones y perfiles." },
                  { icon: "⊙", title: "Código de Acceso", desc: "Permiso rápido prepago / voucher." },
                  { icon: "💳", title: "Pagos de Vouchers", desc: "Compra directa de abonos premium." },
                  { icon: "📶", title: "Punto de Acceso 2.0", desc: "Roaming WiFi inteligente integrado." },
                  { icon: "🔑", title: "OAuth Seguro", desc: "Inicios rápidos con Google o Apple." }
                ].map((method, idx) => (
                  <div key={idx} className="bg-slate-900/40 border border-white/5 p-4 rounded-xl text-center space-y-2 flex flex-col justify-between hover:border-sky-500/20 hover:scale-[1.02] transition-all">
                    <span className="text-xl block">{method.icon}</span>
                    <strong className="text-[11px] text-white block font-display leading-tight">{method.title}</strong>
                    <p className="text-[9px] text-gray-500 leading-tight font-sans">{method.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* WHATSAPP OPT FOCUS & STRATEGIC EXPANSION */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch border-t border-white/5 pt-10">
              <div className="lg:col-span-1 bg-gradient-to-br from-[#0c1a2f] to-[#040914] border border-emerald-500/15 rounded-2xl p-6 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <span className="bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/20 text-[9px] font-mono px-2 py-0.5 rounded uppercase tracking-wider font-bold">
                    WhatsApp Premium OTP
                  </span>
                  <h4 className="text-lg font-display font-extrabold text-white leading-tight">
                    Inicio de Sesión con OTP de WhatsApp. Conquista mercados exclusivos.
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Los visitantes se autentican mediante un mensaje instantáneo en su ventana de chat usual de WhatsApp. Capturas números telefónicos verdaderos de forma no intrusiva y sin falsificaciones.
                  </p>
                </div>
                <div className="bg-slate-950/60 p-3 rounded-lg border border-white/5 text-[9.5px] font-mono text-[#25D366] flex items-center gap-2">
                  <span>🚀</span>
                  <span>Lead 100% verificado sin rebotes</span>
                </div>
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-slate-900/30 border border-white/5 rounded-2xl p-5 space-y-2 flex flex-col justify-between hover:border-sky-500/20 transition-colors">
                  <span className="text-xl">🌎</span>
                  <div className="space-y-1">
                    <strong className="text-xs text-white uppercase tracking-wider font-mono">Abrir Nuevos Mercados</strong>
                    <p className="text-[10.5px] text-gray-400 leading-relaxed font-sans">
                      Asegura contratos Premium en América Latina, Oriente Medio y zonas turísticas de alto valor (como clubes y resorts) donde la competencia no tiene soporte local nativo.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-900/30 border border-white/5 rounded-2xl p-5 space-y-2 flex flex-col justify-between hover:border-sky-500/20 transition-colors">
                  <span className="text-xl">📈</span>
                  <div className="space-y-1">
                    <strong className="text-xs text-white uppercase tracking-wider font-mono">Mayores Tasas de Suscripción</strong>
                    <p className="text-[10.5px] text-gray-400 leading-relaxed font-sans">
                      La validación OTP simplificada optimiza la fricción del registro. Incrementa las suscripciones concurrentes y reduce drásticamente el abandono inicial.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-900/30 border border-white/5 rounded-2xl p-5 space-y-2 flex flex-col justify-between hover:border-[#10B981]/20 transition-colors">
                  <span className="text-xl">⚔️</span>
                  <div className="space-y-1">
                    <strong className="text-xs text-white uppercase tracking-wider font-mono">Diferenciación Competitiva</strong>
                    <p className="text-[10.5px] text-gray-400 leading-relaxed font-sans">
                      Diferénciate al 100% de revendedores tradicionales que confían únicamente en formularios de correo falsificables o portales estáticos sin respuesta interactiva.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* TABLA: DATOS DE HUESPED CAPTURADOS */}
            <div className="border-t border-white/5 pt-10 space-y-6">
              <div className="space-y-1.5 text-center md:text-left">
                <h4 className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest">
                  🗂️ AUDITORÍA DE DATOS DE HUESPED CAPTURADOS
                </h4>
                <h3 className="text-lg sm:text-2xl font-bold font-display text-white">
                  Consola de Registro y Datos Capturados
                </h3>
                <p className="text-xs text-gray-400">
                  Resumen de los metadatos recopilados por el firmware de Empresa LIBRE compatibles con el estándar de exportación e inyección a CRM externos.
                </p>
              </div>

              <div className="border border-white/5 bg-slate-950/60 rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto">
                <table className="w-full text-left font-mono text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-900/80 text-sky-400 border-b border-white/10 uppercase text-[10px] tracking-wider text-center sm:text-left">
                      <th className="p-3 pl-5">Campo Capturado</th>
                      <th className="p-3 text-center">Capturado</th>
                      <th className="p-3 text-center">Exportable (CRM/API)</th>
                      <th className="p-3 hidden sm:table-cell">Casos de Uso Primario</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-gray-300">
                    {[
                      { name: "Nombre Completo", cap: "✓", exp: "✓", dest: "Saludos personalizados en el portal" },
                      { name: "Dirección de Correo Electrónico", cap: "✓", exp: "✓", dest: "Ad-Match, Newsletters de venta" },
                      { name: "Número de Teléfono Móvil", cap: "✓", exp: "✓", dest: "Campañas SMS locales, Alertas residenciales" },
                      { name: "Fecha de Cumpleaños / Aniversarios", cap: "✓", exp: "✓", dest: "Beneficios de cumpleaños automatizados" },
                      { name: "Género / Segmento", cap: "✓", exp: "✓", dest: "Orientación y emparejamiento publicitario" },
                      { name: "Tipo de Dispositivo & Fabricante", cap: "✓", exp: "✓", dest: "Rendimiento y adaptabilidad de ads" },
                      { name: "Sistema Operativo (OS)", cap: "✓", exp: "✓", dest: "Llamado a descargas de descargas de App" },
                      { name: "Marca de Tiempo de Visita (Timestamp)", cap: "✓", exp: "✓", dest: "Predicción de afluencia por zonas" },
                      { name: "Frecuencia de Conexiones Mensuales", cap: "✓", exp: "✓", dest: "Clasificación automática VIP" }
                    ].map((row, index) => (
                      <tr key={index} className="hover:bg-white/[0.01] transition-colors">
                        <td className="p-3 pl-5 text-white font-bold">{row.name}</td>
                        <td className="p-3 text-center font-bold text-emerald-400 text-sm">{row.cap}</td>
                        <td className="p-3 text-center font-bold text-emerald-400 text-sm">{row.exp}</td>
                        <td className="p-3 text-gray-400 text-[10px] font-sans hidden sm:table-cell">{row.dest}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* FORMATOS PUBLICITARIOS CON CTR - EXPANDED */}
            <div className="border-t border-white/5 pt-10 space-y-6">
              <div className="space-y-1.5 text-center md:text-left">
                <h4 className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest">
                  🎨 FORMATOS PUBLICITARIOS HOMOLOGADOS IAB
                </h4>
                <h3 className="text-lg sm:text-2xl font-bold font-display text-white">
                  Formatos Publicitarios de Alto Rendimiento y Modelos CTR
                </h3>
                <p className="text-xs text-gray-400">
                  Despliega anuncios específicos programáticos con un excelente porcentaje de clics (CTR) y una alta tasa de recordación de marca.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    format: "Vídeo Pre-Roll FOCUS",
                    spec: "15-30s obligatorios",
                    ctr: "8–12% CTR",
                    metric: "Formato Premium Ad-Exchange",
                    desc: "Anuncio de video obligatorio de pantalla completa que se reproduce antes de proporcionar salida a Internet. Audiencia cautiva garantizada."
                  },
                  {
                    format: "HTML5 Intersticial",
                    spec: "Fondo total interactivo",
                    ctr: "5–8% CTR",
                    metric: "Formato Pop-Under",
                    desc: "Código de alto rendimiento para desplegar interacciones, mini-juegos o formularios avanzados de registro."
                  },
                  {
                    format: "Banner Tradicional",
                    spec: "Tamaños estándar IAB",
                    ctr: "2–4% CTR",
                    metric: "Display programático",
                    desc: "Integración discreta en cabeceras o pies de página de portales cautivos. Ideal para patrocinadores secundarios regionales."
                  },
                  {
                    format: "WiFi Patrocinado",
                    spec: "Portada corporativa VIP",
                    ctr: "60-70% Recuerdo",
                    metric: "Conexión Auspiciada",
                    desc: "El anunciante paga el acceso de todos los usuarios durante todo el día. Posicionamiento líder de marca."
                  }
                ].map((ad, i) => (
                  <div key={i} className="border border-white/5 bg-slate-900/30 p-5 rounded-2xl flex flex-col justify-between space-y-4 hover:border-emerald-500/10 transition-all">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <strong className="text-xs font-mono text-white block uppercase tracking-wider">{ad.format}</strong>
                        <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[9px] font-mono font-bold px-2 py-0.5 rounded">
                          {ad.ctr}
                        </span>
                      </div>
                      <span className="text-[9px] text-[#10B981] font-mono uppercase block">{ad.metric}</span>
                      <p className="text-[10.5px] text-gray-400 leading-relaxed font-sans">{ad.desc}</p>
                    </div>
                    <div className="border-t border-white/5 pt-2 text-[9px] font-mono text-gray-500">
                      <strong>Especificación:</strong> {ad.spec}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AUTOMATIZACIÓN DEL MARKETING */}
            <div className="border-t border-white/5 pt-10 space-y-6">
              <div className="space-y-1.5 text-center md:text-left">
                <h4 className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest">
                  🤖 AUTOMATIZACIÓN DE CAMPAÑAS TRIGERIZADAS (CONEXIÓN 24/7)
                </h4>
                <h3 className="text-lg sm:text-2xl font-bold font-display text-white">
                  Gatilladores de Automatización de Marketing WiFi
                </h3>
                <p className="text-xs text-gray-400">
                  Configura acciones automáticas basadas en el comportamiento presencial del usuario en los hoteles, aeropuertos y condominios.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: "Nuevos Huéspedes", trigger: "Primera Conexión", desc: "El huésped se conecta por primera vez. Se gatilla un email de bienvenida, cupón de descuento local y sincronización con el CRM." },
                  { title: "Visitantes Recurrentes", trigger: "Visita de Regreso", desc: "El huésped vuelve en un lapso de 30 días. Se activa una campaña de fidelización preferente o encuesta de satisfacción." },
                  { title: "Cumpleaños", trigger: "Fecha de Aniversario", desc: "Se envía automáticamente un obsequio o tarjeta de felicitación con un código de WiFi premium gratis para su día." },
                  { title: "Clientes Inactivos", trigger: "Pérdida por Inactividad", desc: "Si un cliente no se conecta por N días, se envía una alerta push con promociones especiales para incentivar el retorno." }
                ].map((auto, i) => (
                  <div key={i} className="bg-slate-900/30 border border-white/5 p-4 rounded-xl space-y-2 hover:border-sky-500/10 transition-all">
                    <span className="text-[9px] font-mono text-sky-400 block uppercase tracking-wide font-bold">{auto.trigger}</span>
                    <strong className="text-xs text-white block">{auto.title}</strong>
                    <p className="text-[10px] text-gray-400 leading-relaxed font-sans">{auto.desc}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-slate-900/40 border border-white/5 rounded-2xl p-5 space-y-3">
                  <h4 className="text-xs font-mono text-[#10B981] font-bold uppercase tracking-wider">🗂️ Canales Publicitarios Habilitados</h4>
                  <ul className="text-xs text-gray-300 space-y-2 font-sans">
                    <li>🎯 <strong>Campañas de Emailing:</strong> Constructor responsivo y plantillas prearmadas.</li>
                    <li>💬 <strong>Mensajería SMS/MMS Tradicional:</strong> Mensajes cortos instantáneos a tasas preferenciales.</li>
                    <li>⚡ <strong>Envíos Broadcast en 1 Clic:</strong> Mensajería masiva programable a toda la base colectada.</li>
                    <li>🔄 <strong>Secuencias Automatizadas Drip:</strong> Cadena de goteo de mails para nutrir prospectos calificados.</li>
                  </ul>
                </div>

                <div className="bg-slate-900/40 border border-white/5 rounded-2xl p-5 space-y-3">
                  <h4 className="text-xs font-mono text-sky-400 font-bold uppercase tracking-wider">🔌 Integraciones Nativas SaaS</h4>
                  <p className="text-xs text-gray-450 font-sans leading-relaxed">
                    Sincroniza todos los leads e interacciones capturadas en tiempo real con las plataformas clave de analíticas y CRM:
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {["Facebook Pixel", "Google Analytics 4", "Mailchimp", "Hubspot CRM", "Zapier", "Webhooks API"].map((badge, idx) => (
                      <span key={idx} className="bg-slate-950/80 border border-white/10 text-white font-mono text-[9px] px-2 py-1 rounded">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION: ANÁLISIS E INFORMES (THE CLIENT BEAUTIFUL DASHBOARD WIDGET) */}
            <div className="border-t border-white/5 pt-10 space-y-6">
              <div className="space-y-1.5 text-center md:text-left">
                <h4 className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest">
                  📊 CONSOLA EN TIEMPO REAL
                </h4>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <h3 className="text-lg sm:text-2xl font-bold font-display text-white">
                    Consola Analítica de Presence & Performance WiFi
                  </h3>
                  <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 text-[#10B981] px-2.5 py-1 text-[10px] font-mono rounded-full self-start">
                    <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full animate-ping" />
                    CONSOLADA EN VIVO
                  </div>
                </div>
                <p className="text-xs text-gray-400">
                  Proporciona reportes mensuales automatizados y centralizados directamente desde la plataforma corporativa de Empresa LIBRE para demostrar el excelente Retorno de Inversión (ROI) publicitario de inmediato.
                </p>
              </div>

              {/* LIVE KPIs row */}
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="bg-slate-900/60 border border-white/5 p-4 rounded-xl space-y-1">
                  <span className="text-[8.5px] font-mono text-gray-500 uppercase block tracking-wider">Tránsito Activo</span>
                  <div className="text-lg text-white font-black font-mono">342 LIVE</div>
                  <span className="text-[9px] text-[#10B981] font-mono">+18% vs ayer</span>
                </div>

                <div className="bg-slate-900/60 border border-white/5 p-4 rounded-xl space-y-1">
                  <span className="text-[8.5px] font-mono text-gray-500 uppercase block tracking-wider">Conexiones Totales</span>
                  <div className="text-lg text-white font-black font-mono">2,780 / sem</div>
                  <span className="text-[9px] text-[#10B981] font-mono">↑ 19% de subida</span>
                </div>

                <div className="bg-slate-900/60 border border-white/5 p-4 rounded-xl space-y-1">
                  <span className="text-[8.5px] font-mono text-gray-500 uppercase block tracking-wider">Tasa Captura Perfiles</span>
                  <div className="text-lg text-[#10B981] font-black font-mono">65–80%</div>
                  <span className="text-[9px] text-gray-500 font-mono">Promedio WiFi: 12%</span>
                </div>

                <div className="bg-slate-900/60 border border-white/5 p-4 rounded-xl space-y-1">
                  <span className="text-[8.5px] font-mono text-gray-500 uppercase block tracking-wider">Tasa Retornos (30 d)</span>
                  <div className="text-lg text-white font-black font-mono">25–40%</div>
                  <span className="text-[9px] text-sky-400 font-mono">Huéspedes recurrentes</span>
                </div>

                <div className="bg-slate-900/60 border border-white/5 p-4 rounded-xl space-y-1">
                  <span className="text-[8.5px] font-mono text-gray-500 uppercase block tracking-wider">Retorno Inversión (ROI)</span>
                  <div className="text-lg text-emerald-400 font-black font-mono">8x a 15x</div>
                  <span className="text-[9px] text-gray-400 font-mono">Por cada USD pagado</span>
                </div>
              </div>

              {/* Virtual Chart Area (Simple visual Representation) */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2 bg-slate-900/60 border border-white/5 p-5 rounded-xl space-y-4">
                  <span className="text-[10px] font-mono text-sky-400 block uppercase tracking-wider">Afluencia de Visitantes Diarios (Nuevos vs Retornos)</span>
                  
                  {/* Tailwind column chart bars */}
                  <div className="grid grid-cols-6 gap-2 pt-2 h-24 items-end border-b border-white/10 pb-1">
                    {[
                      { day: "Lun", n: 40, r: 25 },
                      { day: "Mar", n: 45, r: 35 },
                      { day: "Mie", n: 50, r: 40 },
                      { day: "Jue", n: 60, r: 45 },
                      { day: "Vie", n: 70, r: 55 },
                      { day: "Sab", n: 65, r: 50 }
                    ].map((bar, i) => (
                      <div key={i} className="flex flex-col items-center gap-1 h-full justify-end">
                        <div className="w-full flex gap-1 justify-center h-full items-end max-w-[28px]">
                          {/* New bar (Emerald) */}
                          <div className="bg-[#10B981] rounded-t-sm w-1/2" style={{ height: `${bar.n}%` }} title={`Nuevos: ${bar.n}%`} />
                          {/* Returning bar (Sky) */}
                          <div className="bg-sky-500 rounded-t-sm w-1/2" style={{ height: `${bar.r}%` }} title={`Regresos: ${bar.r}%`} />
                        </div>
                        <span className="text-[8px] font-mono text-gray-500">{bar.day}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4 text-[9px] font-mono">
                    <span className="flex items-center gap-1"><span className="w-2 h-2 bg-[#10B981] rounded-sm inline-block" /> Nuevos Usuarios</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 bg-sky-500 rounded-sm inline-block" /> Clientes que Regresan</span>
                  </div>
                </div>

                <div className="bg-slate-900/60 border border-white/5 p-5 rounded-xl space-y-4">
                  <span className="text-[10px] font-mono text-sky-400 block uppercase tracking-wider">Tipo de Dispositivo Utilizado</span>
                  
                  <div className="space-y-3 pt-1">
                    {[
                      { device: "Apple iPhone", pct: 42, color: "bg-white" },
                      { device: "Google Android Mobile", pct: 31, color: "bg-[#10B981]" },
                      { device: "Laptop / Computadora", pct: 18, color: "bg-sky-500" },
                      { device: "Otros Receptores", pct: 9, color: "bg-gray-500" }
                    ].map((dev, i) => (
                      <div key={i} className="space-y-1 text-xs">
                        <div className="flex justify-between font-mono text-[9px]">
                          <span className="text-gray-300 font-bold">{dev.device}</span>
                          <span className="text-white font-black">{dev.pct}%</span>
                        </div>
                        <div className="w-full bg-slate-950 rounded-full h-1 overflow-hidden">
                          <div className={`${dev.color} h-full`} style={{ width: `${dev.pct}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sub-divided lists of audit categories */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                {[
                  {
                    cat: "Analítica de Conexiones",
                    list: ["Tiempos de sesión de usuarios", "Proporciones de retorno semanal", "Carga en horas pico", "Uso de ancho de banda total"]
                  },
                  {
                    cat: "Datos Demográficos WiFi",
                    list: ["Filtro etario por registros", "Cuota de mercado de dispositivos", "Idioma preferencial de sistemas", "Distribución geográfica local"]
                  },
                  {
                    cat: "Análisis de Presencia",
                    list: ["Tasa de conversión de transeúntes", "Tiempo medio de permanencia", "Zonas de mayor fidelidad", "Retornos repetidos acumulados"]
                  },
                  {
                    cat: "Rendimiento Publicitario",
                    list: ["Impresiones de CTR en videos VAST", "Monetización por canal CPM", "Eventos sincronizados en GA4", "Generación de campañas directas"]
                  }
                ].map((col, index) => (
                  <div key={index} className="bg-slate-900/40 border border-white/5 p-4 rounded-xl space-y-2">
                    <strong className="text-[10px] uppercase font-mono text-sky-400 block border-b border-white/5 pb-1">{col.cat}</strong>
                    <ul className="space-y-1 text-[9.5px] text-gray-400 font-sans">
                      {col.list.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-1">
                          <span className="text-emerald-400">•</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Millisecond Ad Injection Workflow Description (Real-Time Bidding) */}
            <div className="border-t border-white/5 pt-8 mt-10 space-y-6">
              <h4 className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest text-center md:text-left">
                ⏱️ Mecanismo de Subasta en Milisegundos (RTB - Real Time Bidding)
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
                {/* Connecting lines for desktop */}
                <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-emerald-500/20 via-sky-500/30 to-emerald-500/20 -translate-y-1/2 pointer-events-none z-0" />
                
                <div className="bg-slate-900/40 border border-white/5 rounded-2xl p-4 space-y-2 relative z-10 hover:border-sky-500/20 hover:scale-[1.02] transition-all duration-300">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded">01 • INICIO</span>
                    <span className="text-[11px] font-mono text-gray-500 font-bold">0 ms</span>
                  </div>
                  <strong className="text-xs text-white block">Acceso al WiFi</strong>
                  <p className="text-[10px] text-gray-400 leading-relaxed">
                    El usuario detecta y conecta celular/PC al portal cautivo hotspot del condominio.
                  </p>
                </div>

                <div className="bg-slate-900/40 border border-white/5 rounded-2xl p-4 space-y-2 relative z-10 hover:border-sky-500/20 hover:scale-[1.02] transition-all duration-300">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono text-sky-400 font-bold bg-sky-500/10 px-1.5 py-0.5 rounded">02 • REQUEST</span>
                    <span className="text-[11px] font-mono text-sky-400 font-bold">+15 ms</span>
                  </div>
                  <strong className="text-xs text-white block">Llamado OpenRTB</strong>
                  <p className="text-[10px] text-gray-400 leading-relaxed">
                    El SDK integrado de Empresa LIBRE envía parámetros anónimos de ubicación al Ad-Exchange.
                  </p>
                </div>

                <div className="bg-slate-900/40 border border-white/5 rounded-2xl p-4 space-y-2 relative z-10 hover:border-sky-500/20 hover:scale-[1.02] transition-all duration-300">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono text-purple-400 font-bold bg-purple-500/10 px-1.5 py-0.5 rounded">03 • PUJA</span>
                    <span className="text-[11px] font-mono text-purple-400 font-bold">+65 ms</span>
                  </div>
                  <strong className="text-xs text-white block">Subasta Competitiva</strong>
                  <p className="text-[10px] text-gray-400 leading-relaxed">
                    26 redes globales ofertan en tiempo real. Algoritmo inteligente busca el mayor CPM.
                  </p>
                </div>

                <div className="bg-slate-900/40 border border-white/5 rounded-2xl p-4 space-y-2 relative z-10 hover:border-sky-500/20 hover:scale-[1.02] transition-all duration-300">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono text-amber-400 font-bold bg-amber-500/10 px-1.5 py-0.5 rounded">04 • SELECCIÓN</span>
                    <span className="text-[11px] font-mono text-amber-400 font-bold">+95 ms</span>
                  </div>
                  <strong className="text-xs text-white block">Ad Ganador</strong>
                  <p className="text-[10px] text-gray-400 leading-relaxed">
                    Se determina el anuncio con mayor dividendos para el condominio e inmobiliaria.
                  </p>
                </div>

                <div className="bg-slate-900/40 border border-white/5 rounded-2xl p-4 space-y-2 relative z-10 hover:border-emerald-500/30 hover:scale-[1.02] transition-all duration-300 bg-gradient-to-b from-slate-900/40 to-emerald-950/20">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/20 px-1.5 py-0.5 rounded">05 • SHOW</span>
                    <span className="text-[11px] font-mono text-emerald-400 font-bold">+120 ms</span>
                  </div>
                  <strong className="text-xs text-white block">Inyección VAST/RTB</strong>
                  <p className="text-[10px] text-gray-300 leading-relaxed">
                    Se inyecta el anuncio con total fluidez. Se contabiliza la impresión y genera ingresos.
                  </p>
                </div>
              </div>
            </div>

            {/* Support and Long-Term Contract Details Card */}
            <div className="mt-8 bg-slate-950/90 border border-sky-500/10 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-emerald-500/10 border-l border-b border-emerald-500/20 text-emerald-400 px-3 py-1 text-[9px] font-mono rounded-bl-xl uppercase tracking-wider font-bold">
                Actualizaciones & Soporte 100% Bonificados
              </div>
              
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="space-y-2 max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🤝</span>
                    <h4 className="text-sm font-display font-extrabold text-white uppercase tracking-tight">
                      Contratos de Larga Duración & Soporte Corporativo Asegurado
                    </h4>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Nuestros contratos se formalizan estratégicamente por períodos de <strong className="text-emerald-400">5 a 8 años o más</strong> para acompañar el desarrollo de la infraestructura y maximizar la recuperación de capital. 
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Durante toda la vigencia del contrato legal establecido, <strong className="text-white">Empresa LIBRE se hace plenamente responsable de todo el soporte técnico, mantenimiento y actualizaciones críticas sin costo adicional alguno</strong> para el desarrollador ni la administración.
                  </p>
                </div>

                <div className="bg-slate-900/60 border border-white/5 p-4 rounded-xl space-y-2.5 w-full md:w-auto md:min-w-[260px] text-center md:text-left self-stretch flex flex-col justify-space-between">
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono text-sky-405 block uppercase">Compromiso a Largo Plazo:</span>
                    <div className="text-lg text-emerald-400 font-black tracking-wider uppercase font-mono">5 a 8+ AÑOS</div>
                  </div>
                  
                  <div className="border-t border-white/5 pt-2 space-y-1">
                    <span className="text-[9px] font-mono text-gray-500 block uppercase">Soporte Técnico de Redes:</span>
                    <div className="text-xs text-white font-extrabold uppercase bg-emerald-500/10 text-emerald-450 border border-emerald-500/20 px-2 py-1 rounded inline-block">
                      100% LIBRE DE COSTO
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-[10px] text-gray-500 text-center font-mono leading-relaxed pt-2">
              💡 Toda conexión a networks externas mediante VAST/OpenRTB es administrada y distribuida unificadamente por Empresa LIBRE.
            </div>
          </div>

          {/* CRITICAL SEPARATE BILLING DISCLAIMER FOR HARDWARE & CONSULTING */}
          <div className="max-w-4xl mx-auto bg-[#0a0f1d]/80 border border-emerald-500/20 rounded-2xl p-5 sm:p-7 space-y-4 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3 text-emerald-500/10 font-mono text-[9px]">
              CARRIER CLASS ONLY
            </div>
            
            <h4 className="text-xs font-mono font-black text-emerald-400 uppercase tracking-widest flex items-center gap-2">
              🚨 ACLARACIÓN DE COSTOS DE CONSULTORÍA, NORMAS DE HARDWARE Y LICENCIA ATT
            </h4>
            
            <p className="text-xs text-gray-300 leading-relaxed font-sans">
              La adquisición de las plataformas SaaS (con un canon establecido de <strong>$2,222 USD anuales por cada servicio</strong>) incluye la habilitación técnica de software en la nube, portales cautivos dinámicos, pasarelas de pago de vouchers prepagos y dashboards de gestión unificada.
            </p>

            <div className="text-[11px] text-gray-400 space-y-2.5 font-sans border-t border-white/5 pt-3">
              <div>
                <strong className="text-white block mb-0.5">🏷️ Suministro y Adquisición de Hardware Directa:</strong>
                <p className="leading-relaxed">
                  El cliente o desarrollador adquiere directamente sus receptores de IPTV (“set-top boxes”) y cámaras de video-vigilancia basadas en el estándar industrial abierto <strong>ONVIF (Open Network Video Interface Forum)</strong> para la correcta interoperabilidad y monitoreo domiciliario remoto en tiempo real, así como el hardware asociado para alarmas y sensores de domótica/IoT.
                </p>
              </div>

              <div>
                <strong className="text-white block mb-0.5">📡 Estándar Físico Requerido (Carrier-Class vs Equipos Domésticos):</strong>
                <p className="leading-relaxed text-amber-200/90">
                  Para asegurar la calidad empresarial y la robustez contra interferencias electromagnéticas, la infraestructura inalámbrica de red debe estructurarse estrictamente sobre hardware Carrier-Class (como Cambium Networks, Cisco Meraki o Aruba HPE). Queda expresamente rechazado el despliegue de equipos semiprofesionales o caseros como <strong>Ubiquiti o MikroTik</strong>, los cuales no garantizan el desempeño requerido por el ecosistema integrado de Empresa LIBRE.
                </p>
              </div>

              <div>
                <strong className="text-white block mb-0.5">⚖️ Licencia Obligatoria ATT (Letra Chica):</strong>
                <p className="leading-relaxed italic text-gray-500 text-[10.5px]">
                  La implementación comercial e inalámbrica de esta intranet y la redistribución de televisión digital IPTV condominal requiere contar con la correspondiente licencia ATT (Autoridad de Regulación y Fiscalización de Telecomunicaciones y Transportes) regulada de acuerdo a las normativas vigentes administradas por la autoridad en Bolivia.
                </p>
              </div>

              <div className="border-t border-white/5 pt-3">
                <span className="text-white font-bold">🛠️ Por separado:</span> Los honorarios profesionales correspondientes a consultoría analítica provista por el especialista <strong>Juan Pablo Yáñez Melgar</strong>, junto con el costo de suministro de hardware perimetral, antenas empresariales Cambium, cableados e instalación en sitio físico, son cotizados y facturados bajo presupuestos complementarios independientes adaptados a la topografía correspondiente.
              </div>

              <div className="border-t border-white/5 pt-3 text-emerald-300">
                <strong className="text-white block mb-1">🗼 ACLARACIÓN DE COSTOS DE INTEGRACIÓN Y ARIOSTADO DE TORRE (Letra Chica):</strong>
                <p className="leading-relaxed text-[11px] text-gray-300">
                  En el caso específico de la integración y el ariostado de torre, el cliente final tiene plena autonomía operativa: lo puede realizar <strong className="text-white">por su propia cuenta</strong>, de forma <strong className="text-[#34D399] font-bold">tercerizada directa con Empresa LIBRE</strong>, o bien contratar a <strong className="text-white">cualquier integrador técnico</strong> de su preferencia. El Ing. Juan Pablo Yáñez Melgar actuará única y exclusivamente en calidad de fiscalizador técnico y analítico del proyecto.
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 5: FORMULARIO DE INQUIRIENTE Y CONTACTO DIRECTO */}
          <div id="formulario-contacto" className="space-y-8 pt-6 max-w-4xl mx-auto">
            <div className="text-center space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#10B981] font-bold block">
                Plataformas SaaS Empresa LIBRE
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                Formulario de Consulta Directa
              </h3>
              <p className="text-xs text-gray-400">
                Llena tus datos a continuación y genera una solicitud formal que se conectará directamente por WhatsApp con el Ing. Juan Pablo Yáñez Melgar.
              </p>
            </div>

            <div className="glass-panel p-6 sm:p-8 rounded-3xl border-white/5 bg-slate-950/40">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const { constructora, representante, plataforma, telefono, mensaje } = contactForm;
                  
                  let plataformaText = '';
                  if (plataforma === 'wifi') plataformaText = 'wifi marketing ai Libre';
                  else if (plataforma === 'iptv') plataformaText = 'iptv Libre';
                  else if (plataforma === 'videovigilancia') plataformaText = 'videovigilancia ai Libre';
                  else if (plataforma === 'iot') plataformaText = 'iot Libre ai';
                  else if (plataforma === 'equipos') plataformaText = 'Consultoría de Equipos (Antenas y Redes)';
                  else if (plataforma === 'integracion') plataformaText = 'Consultoría de Integración (Proptech y Pasarelas)';
                  else plataformaText = 'Todas las plataformas (Ecosistema completo)';

                  const text = `Hola Ing. Juan Pablo, mi nombre es ${representante} de la constructora/proyecto "${constructora}". Estoy interesado en el licenciamiento de: "${plataformaText}".%0AMi teléfono es: ${telefono}.%0A%0AMensaje adicional:%0A${mensaje || 'Deseo cotizar de forma inmediata.'}`;
                  
                  window.location.href = `https://wa.me/59175575555?text=${encodeURIComponent(text).replace(/%250A/g, '%0A')}`;
                }}
                className="space-y-5 text-left text-xs"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="constructora" className="block text-[10px] font-mono font-bold text-gray-500 uppercase tracking-wider">Constructora / Urbanización / Proyecto:</label>
                    <input
                      type="text"
                      id="constructora"
                      required
                      value={contactForm.constructora}
                      onChange={(e) => setContactForm({ ...contactForm, constructora: e.target.value })}
                      placeholder="Ej. Urbanización Los Tajibos"
                      className="w-full bg-slate-900 border border-white/5 rounded-xl px-3.5 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 font-sans transition-all text-xs"
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label htmlFor="representante" className="block text-[10px] font-mono font-bold text-gray-500 uppercase tracking-wider">Representante de Contacto:</label>
                    <input
                      type="text"
                      id="representante"
                      required
                      value={contactForm.representante}
                      onChange={(e) => setContactForm({ ...contactForm, representante: e.target.value })}
                      placeholder="Ej. Ing. Carlos Mendoza"
                      className="w-full bg-slate-900 border border-white/5 rounded-xl px-3.5 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 font-sans transition-all text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="plataforma" className="block text-[10px] font-mono font-bold text-gray-500 uppercase tracking-wider">Plataforma de Interés:</label>
                    <select
                      id="plataforma"
                      value={contactForm.plataforma}
                      onChange={(e) => setContactForm({ ...contactForm, plataforma: e.target.value })}
                      className="w-full bg-slate-900 border border-white/5 rounded-xl px-3.5 py-3 text-white focus:outline-none focus:border-emerald-500/50 transition-all font-sans text-xs appearance-none cursor-pointer"
                    >
                      <option value="all">Todas las plataformas (Ecosistema Completo - $8,888 USD/año)</option>
                      <option value="wifi">wifi marketing ai Libre ($2,222 USD/año)</option>
                      <option value="iptv">iptv Libre ($2,222 USD/año)</option>
                      <option value="videovigilancia">videovigilancia ai Libre ($2,222 USD/año)</option>
                      <option value="iot">iot Libre ai ($2,222 USD/año)</option>
                      <option value="equipos">Consultoría de Equipos (Asesoramiento de Antenas y Redes)</option>
                      <option value="integracion">Consultoría de Integración (Proptech, Pasarelas y Portales Cautivos)</option>
                    </select>
                  </div>
                  
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="block text-[10px] font-mono font-bold text-gray-500 uppercase tracking-wider">WhatsApp o Teléfono:</label>
                    <input
                      type="text"
                      id="phone"
                      required
                      value={contactForm.telefono}
                      onChange={(e) => setContactForm({ ...contactForm, telefono: e.target.value })}
                      placeholder="Ej. +591 75575555"
                      className="w-full bg-slate-900 border border-white/5 rounded-xl px-3.5 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 font-sans transition-all text-xs"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="mensaje" className="block text-[10px] font-mono font-bold text-gray-500 uppercase tracking-wider">Mensaje o Requerimientos Particulares:</label>
                  <textarea
                    id="mensaje"
                    rows={3}
                    value={contactForm.mensaje}
                    onChange={(e) => setContactForm({ ...contactForm, mensaje: e.target.value })}
                    placeholder="Escribe aquí las dimensiones físicas de tu urbanización, número de lotes o requerimientos..."
                    className="w-full bg-slate-900 border border-white/5 rounded-xl px-3.5 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 font-sans transition-all text-xs resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 cursor-pointer inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-[#10B981] hover:bg-emerald-400 text-slate-950 font-bold rounded-xl transition-all duration-300 shadow-xl text-xs sm:text-sm tracking-wider uppercase"
                >
                  <Smartphone className="w-4 h-4 flex-shrink-0" />
                  <span>Enviar Formulario vía WhatsApp (Directo al 75575555)</span>
                </button>
              </form>
            </div>
          </div>

          {/* Clean High Conversion Call-To-Action (bolbox.pro inspired sizes) */}
          <div className="text-center pt-8 border-t border-white/5 max-w-4xl mx-auto">
            <a 
              href="https://wa.me/59175575555?text=Hola%20Ing.%20Juan%20Pablo%20Yáñez,%20vengo%20de%20la%20página%20de%20monetización%20y%20quiero%20poner%20en%20marcha%20el%20licenciamiento%20SaaS%20de%20Empresa%20LIBRE"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#10B981] hover:bg-emerald-400 text-slate-950 font-extrabold rounded-xl transition-all duration-300 shadow-2xl text-xs sm:text-sm tracking-wider uppercase hover:scale-[1.02]"
            >
              <Smartphone className="w-5 h-5" /> Adquirir Licencia SaaS Directa
            </a>
            <p className="text-[10px] font-mono text-gray-500 mt-2.5">
              Consultoría Tecnológica Inmediata por WhatsApp con el Ing. Juan Pablo Yáñez Melgar · +591 75575555
            </p>
          </div>

        </section>

      </main>

      {/* INSTITUTIONAL OBLIGATORY FOOTER */}
      <footer id="footer" className="relative z-10 bg-[#04060a] border-t border-white/5 pt-16 pb-12 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Main Footer Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* CEO Profile and world class tag */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-10 bg-emerald-500 rounded-full" />
                <div>
                  <h3 className="font-display text-white text-xl sm:text-2xl font-extrabold tracking-tight uppercase leading-none">
                    Juan Pablo Yáñez Melgar
                  </h3>
                  <span className="text-xs font-mono tracking-widest text-[#10B981] font-bold uppercase mt-1 block">
                    CEO & Consultor Tecnológico principal
                  </span>
                </div>
              </div>
              
              <div className="font-mono text-[11px] sm:text-xs text-gray-400 leading-relaxed font-semibold">
                Marketing Digital | Inteligencia Artificial | E-commerce | Comunicaciones Unificadas | Blockchain | GovTech | CivicTech
              </div>

              <div className="text-xs text-gray-400 font-sans max-w-lg leading-relaxed">
                Asesoría de Clase Mundial especializada en transformación digital e infraestructura de conectividad masiva. Ofrecemos herramientas sofisticadas para estructurar Smart Cities rentables desde el origen.
              </div>
            </div>

            {/* Practical connection items */}
            <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-mono">
              <div className="space-y-2.5">
                <span className="text-gray-500 block uppercase font-bold text-[10px]">SERVICIOS DE CLASE MUNDIAL:</span>
                <span className="text-white block">Empresa LIBRE Bolivia</span>
                <span className="text-gray-450 block">Santa Cruz de la Sierra, Bolivia</span>
                <span className="text-gray-450 block mt-1.5">Directo: <a href="mailto:info@juanpablo.bio" className="text-emerald-400 hover:underline">info@juanpablo.bio</a> · <a href="https://www.juanpablo.bio" target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">www.juanpablo.bio</a></span>
              </div>

              <div className="space-y-2.5">
                <span className="text-gray-500 block uppercase font-bold text-[10px]">TELÉFONOS DE CONSULTORÍA DIRECTA:</span>
                <a href="tel:+59175575555" className="text-[#10B981] block hover:underline font-bold text-sm">+591 75575555 (Principal)</a>
                <a href="https://wa.me/59175575555" target="_blank" rel="noreferrer" className="text-emerald-400 block hover:underline">Chat de WhatsApp de Soporte</a>
              </div>
            </div>

          </div>

          {/* Legal status and SEPREC numbers */}
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[10px] text-gray-500 text-center md:text-left">
            <div className="space-y-1">
              <strong className="text-white uppercase block text-[11px] mb-0.5 tracking-wider">ESTATUS LEGAL Y CORPORATIVO:</strong>
              <span>
                EMPRESA LIBRE — SEPREC: <strong>4172754013</strong> | Pay Libre LLC (EE.UU.) — EIN: <strong>32-0790219</strong>
              </span>
            </div>
            
            <div className="text-gray-600">
              © {new Date().getFullYear()} monetiza.inmuebles.red. Todos los derechos reservados.
            </div>
          </div>

        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/59175575555?text=Hola%20Ing.%20Juan%20Pablo,%20quisiera%20recibir%20más%20información%2520sobre%2520las%2520plataformas%2520SaaS%2520de%2520Empresa%2520LIBRE."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 p-4 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 filter drop-shadow-[0_0_12px_rgba(37,211,102,0.4)] border border-emerald-400/20 flex items-center justify-center cursor-pointer"
        title="Contactar por WhatsApp"
        id="floating-whatsapp"
      >
        <Smartphone className="w-6 h-6 text-white" />
      </a>

    </div>
  );
}
