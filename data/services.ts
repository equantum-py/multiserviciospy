export type ServiceType = "quick" | "evaluation" | "specialized";

export interface ServiceCategory {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  order: number;
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  categories: string[];
  icon: string;
  image?: string;
  serviceType: ServiceType;
  featured: boolean;
  active: boolean;
  order: number;
  keywords: string[];
}

export const serviceCategories: ServiceCategory[] = [
  { id: "home", slug: "hogar-mantenimiento", name: "Hogar y mantenimiento", shortName: "Hogar", icon: "House", order: 1 },
  { id: "climate", slug: "climatizacion-refrigeracion", name: "Climatización y refrigeración", shortName: "Climatización", icon: "Snowflake", order: 2 },
  { id: "auto", slug: "automotor", name: "Automotor", shortName: "Automotor", icon: "Car", order: 3 },
  { id: "construction", slug: "construccion-remodelacion", name: "Construcción y remodelación", shortName: "Construcción", icon: "HardHat", order: 4 },
  { id: "garden", slug: "jardin-exteriores", name: "Jardín y exteriores", shortName: "Jardín", icon: "Leaf", order: 5 },
  { id: "cleaning", slug: "limpieza", name: "Limpieza", shortName: "Limpieza", icon: "Sparkles", order: 6 },
  { id: "security", slug: "seguridad", name: "Seguridad", shortName: "Seguridad", icon: "ShieldCheck", order: 7 },
  { id: "wood-metal", slug: "carpinteria-herreria-aberturas", name: "Carpintería, herrería y aberturas", shortName: "Carpintería y herrería", icon: "Hammer", order: 8 },
  { id: "appliances", slug: "electrodomesticos", name: "Electrodomésticos", shortName: "Electrodomésticos", icon: "WashingMachine", order: 9 },
  { id: "technology", slug: "tecnologia", name: "Tecnología", shortName: "Tecnología", icon: "Laptop", order: 10 },
  { id: "logistics", slug: "mudanzas-logistica", name: "Mudanzas y logística", shortName: "Mudanzas", icon: "Truck", order: 11 },
  { id: "pest", slug: "control-plagas", name: "Control de plagas", shortName: "Control de plagas", icon: "Bug", order: 12 },
  { id: "business", slug: "empresas-comercios", name: "Empresas y comercios", shortName: "Empresas", icon: "Building2", order: 13 },
];

const service = (
  id: string, name: string, description: string, categories: string[], icon: string,
  serviceType: ServiceType, active: boolean, keywords: string[], featured = false, order = 100,
): Service => ({ id, slug: id, name, shortDescription: description, categories, icon, serviceType, active, keywords, featured, order });

export const services: Service[] = [
  service("electricidad", "Electricidad", "Instalaciones, reparaciones y mantenimiento eléctrico.", ["home", "business"], "Zap", "quick", true, ["luz", "enchufe", "llave", "cable", "cortocircuito", "tablero", "electricista"], true, 1),
  service("plomeria", "Plomería", "Pérdidas, cañerías, sanitarios e instalaciones.", ["home"], "Droplets", "quick", true, ["canilla", "cañeria", "cañería", "perdida", "pérdida", "agua", "sanitario", "baño"], true, 2),
  service("reparaciones-generales", "Reparaciones generales", "Arreglos y mantenimiento cotidiano del hogar.", ["home", "business"], "Wrench", "quick", true, ["arreglo", "reparacion", "reparación", "mantenimiento"], false, 3),
  service("albanileria", "Albañilería", "Reparaciones, muros y trabajos de albañilería.", ["home", "construction"], "BrickWall", "evaluation", true, ["albañil", "muro", "pared", "revoque"], false, 4),
  service("pintura", "Pintura", "Interior, exterior y trabajos de terminación.", ["home", "construction", "business"], "Paintbrush", "evaluation", true, ["pintor", "pared", "interior", "exterior", "terminacion", "terminación"], false, 5),
  service("impermeabilizacion", "Impermeabilización", "Soluciones para humedad, filtraciones y superficies.", ["home", "construction"], "CloudRain", "evaluation", true, ["humedad", "filtracion", "filtración", "gotera", "techo"], false, 6),
  service("techos-goteras", "Techos y goteras", "Evaluación y reparación de filtraciones y cubiertas.", ["home", "construction"], "House", "evaluation", true, ["gotera", "techo", "lluvia", "filtracion", "filtración"], false, 7),
  service("instalaciones-hogar", "Instalaciones", "Montajes e instalaciones para el hogar.", ["home"], "Drill", "evaluation", false, ["instalar", "montaje", "colocar"]),
  service("mantenimiento-hogar", "Mantenimiento del hogar", "Mantenimiento general y preventivo.", ["home"], "House", "evaluation", false, ["mantenimiento", "casa", "hogar"]),

  service("instalacion-aire-acondicionado", "Instalación de aire acondicionado", "Instalación y puesta en marcha de equipos.", ["climate"], "Snowflake", "specialized", true, ["aire", "ac", "split", "instalacion", "instalación"], true, 10),
  service("mantenimiento-aire-acondicionado", "Mantenimiento de aire acondicionado", "Limpieza y mantenimiento preventivo de equipos.", ["climate", "business"], "Snowflake", "specialized", true, ["aire", "split", "limpieza", "mantenimiento"], false, 11),
  service("reparacion-aire-acondicionado", "Reparación de aire acondicionado", "Diagnóstico y reparación de equipos de climatización.", ["climate"], "Snowflake", "specialized", true, ["aire", "split", "no enfria", "no enfría", "reparacion", "reparación"], false, 12),
  service("refrigeracion-comercial", "Refrigeración comercial", "Evaluación y mantenimiento de sistemas comerciales.", ["climate", "business"], "ThermometerSnowflake", "specialized", false, ["refrigeracion", "refrigeración", "comercial", "frio", "frío"]),
  service("heladeras-freezers", "Heladeras y freezers", "Diagnóstico y reparación de equipos de frío.", ["climate", "appliances"], "Refrigerator", "specialized", false, ["heladera", "freezer", "frio", "frío"]),
  service("camaras-frigorificas", "Cámaras frigoríficas", "Servicio técnico para sistemas de frío industrial.", ["climate", "business"], "Warehouse", "specialized", false, ["camara frigorifica", "cámara frigorífica", "frigorifico", "frigorífico"]),

  service("electricidad-automotriz", "Electricidad automotriz", "Diagnóstico y soluciones eléctricas para vehículos.", ["auto"], "Car", "specialized", true, ["auto", "vehiculo", "vehículo", "electricidad", "arranque", "alternador"], true, 20),
  service("mecanica", "Mecánica", "Diagnóstico, reparación y mantenimiento mecánico.", ["auto"], "Gauge", "specialized", true, ["mecanico", "mecánico", "motor", "auto", "vehiculo", "vehículo"], false, 21),
  service("chaperia", "Chapería", "Evaluación de golpes y reparación de carrocería.", ["auto"], "CarFront", "evaluation", true, ["chapa", "choque", "golpe", "carroceria", "carrocería"]),
  service("pintura-automotriz", "Pintura automotriz", "Pintura y terminación de carrocería.", ["auto"], "Paintbrush", "evaluation", true, ["pintura auto", "rayon", "rayón", "carroceria", "carrocería"]),
  service("diagnostico-automotor", "Diagnóstico automotor", "Evaluación técnica para identificar fallas.", ["auto"], "ScanLine", "specialized", false, ["scanner", "diagnostico", "diagnóstico", "falla"]),
  service("auxilio-mecanico", "Auxilio mecánico", "Asistencia mecánica según ubicación y necesidad.", ["auto"], "LifeBuoy", "specialized", false, ["auxilio", "quedado", "ruta", "auto"]),
  service("baterias", "Baterías", "Evaluación de batería y sistema de carga.", ["auto"], "BatteryCharging", "specialized", false, ["bateria", "batería", "arranque"]),
  service("aire-acondicionado-automotor", "Aire acondicionado automotor", "Diagnóstico y servicio de climatización vehicular.", ["auto", "climate"], "Snowflake", "specialized", false, ["aire auto", "ac auto", "climatizacion auto"]),

  service("construccion", "Construcción", "Trabajos de construcción según alcance y proyecto.", ["construction"], "HardHat", "evaluation", true, ["obra", "construir", "construccion", "construcción"], true, 30),
  service("remodelaciones", "Remodelaciones", "Reformas y mejoras de espacios existentes.", ["construction", "home"], "Hammer", "evaluation", true, ["remodelar", "reforma", "renovacion", "renovación"]),
  service("pisos", "Pisos", "Colocación y reparación de pisos.", ["construction"], "PanelsTopLeft", "evaluation", false, ["piso", "ceramica", "cerámica", "porcelanato"]),
  service("revestimientos", "Revestimientos", "Colocación de revestimientos interiores y exteriores.", ["construction"], "Grid3X3", "evaluation", false, ["revestimiento", "azulejo"]),
  service("cielorrasos", "Cielorrasos", "Instalación y reparación de cielorrasos.", ["construction"], "PanelTop", "evaluation", false, ["cielorraso", "techo interior"]),
  service("durlock-yeso", "Durlock / yeso", "Divisiones, cielorrasos y terminaciones en seco.", ["construction"], "PanelsTopLeft", "evaluation", false, ["durlock", "yeso", "placa"]),

  service("jardineria", "Jardinería", "Cuidado y puesta a punto de espacios verdes.", ["garden"], "Leaf", "evaluation", true, ["jardin", "jardín", "plantas", "patio"], true, 40),
  service("mantenimiento-jardines", "Mantenimiento de jardines", "Mantenimiento periódico de jardines y exteriores.", ["garden"], "Leaf", "evaluation", true, ["jardinero", "jardín", "mantenimiento"]),
  service("poda", "Poda", "Poda y mantenimiento de árboles y plantas.", ["garden"], "Trees", "evaluation", true, ["arbol", "árbol", "rama", "podar"]),
  service("limpieza-terrenos", "Limpieza de terrenos", "Desmalezado y limpieza general de terrenos.", ["garden", "cleaning"], "Shovel", "evaluation", false, ["terreno", "desmalezar", "maleza"]),
  service("cesped", "Césped", "Colocación y mantenimiento de césped.", ["garden"], "Sprout", "evaluation", false, ["cesped", "césped", "pasto"]),
  service("riego", "Riego", "Instalación y mantenimiento de sistemas de riego.", ["garden"], "Waves", "specialized", false, ["riego", "aspersor", "agua"]),
  service("paisajismo", "Paisajismo", "Diseño y mejora de espacios exteriores.", ["garden"], "Flower2", "evaluation", false, ["paisajismo", "jardin", "jardín", "diseño"]),
  service("mantenimiento-piscinas", "Mantenimiento de piscinas", "Limpieza y mantenimiento general de piscinas.", ["garden"], "Waves", "specialized", false, ["piscina", "pileta", "agua"]),

  service("limpieza-residencial", "Limpieza residencial", "Limpieza general de casas y departamentos.", ["cleaning"], "Sparkles", "quick", true, ["limpieza", "casa", "departamento"], true, 50),
  service("limpieza-oficinas", "Limpieza de oficinas", "Servicio de limpieza para espacios de trabajo.", ["cleaning", "business"], "Building2", "evaluation", false, ["oficina", "empresa", "limpieza"]),
  service("limpieza-profunda", "Limpieza profunda", "Limpieza intensiva de ambientes y superficies.", ["cleaning"], "Sparkles", "evaluation", true, ["profunda", "limpieza general"]),
  service("limpieza-post-obra", "Limpieza post obra", "Limpieza final después de obras y remodelaciones.", ["cleaning", "construction"], "HardHat", "evaluation", false, ["post obra", "obra", "polvo"]),
  service("limpieza-vidrios", "Limpieza de vidrios", "Limpieza de vidrios y superficies acristaladas.", ["cleaning"], "PanelsTopLeft", "evaluation", false, ["vidrio", "ventana", "cristal"]),
  service("limpieza-tapizados", "Limpieza de tapizados", "Limpieza de sofás, sillas y tapizados.", ["cleaning"], "Armchair", "evaluation", false, ["sofa", "sofá", "sillon", "sillón", "tapizado"]),
  service("lavado-alfombras", "Lavado de alfombras", "Lavado y limpieza profunda de alfombras.", ["cleaning"], "RectangleHorizontal", "evaluation", false, ["alfombra", "lavado"]),

  service("camaras-seguridad", "Cámaras de seguridad", "Instalación y configuración de videovigilancia.", ["security", "technology", "business"], "Camera", "specialized", true, ["camara", "cámara", "cctv", "vigilancia", "camara ip", "cámara ip"], true, 60),
  service("alarmas", "Alarmas", "Instalación y configuración de sistemas de alarma.", ["security"], "Siren", "specialized", false, ["alarma", "sensor", "seguridad"]),
  service("cercos-electricos", "Cercos eléctricos", "Instalación y mantenimiento de cercos eléctricos.", ["security"], "Zap", "specialized", false, ["cerco", "electrico", "eléctrico", "perimetral"]),
  service("porteros-electricos", "Porteros eléctricos", "Instalación y reparación de porteros eléctricos.", ["security"], "DoorOpen", "specialized", false, ["portero", "timbre", "intercomunicador"]),
  service("videoporteros", "Videoporteros", "Instalación y configuración de videoporteros.", ["security"], "Video", "specialized", false, ["videoportero", "portero", "camara puerta"]),
  service("control-acceso", "Control de acceso", "Soluciones de acceso para hogares y empresas.", ["security", "business"], "KeyRound", "specialized", false, ["acceso", "tarjeta", "biometrico", "biométrico"]),
  service("cerraduras", "Cerraduras", "Instalación, cambio y reparación de cerraduras.", ["security", "home"], "LockKeyhole", "quick", false, ["cerradura", "llave", "puerta"]),

  service("carpinteria", "Carpintería", "Reparaciones y trabajos de carpintería.", ["wood-metal"], "Hammer", "evaluation", false, ["carpintero", "madera", "puerta"]),
  service("muebles-medida", "Muebles a medida", "Diseño y fabricación según espacio y necesidad.", ["wood-metal"], "Armchair", "evaluation", false, ["mueble", "placard", "estante"]),
  service("herreria", "Herrería", "Trabajos, reparaciones y estructuras metálicas.", ["wood-metal"], "Anvil", "evaluation", true, ["herrero", "metal", "hierro", "porton", "portón"], true, 70),
  service("soldadura", "Soldadura", "Trabajos y reparaciones mediante soldadura.", ["wood-metal"], "Flame", "evaluation", false, ["soldar", "soldadura", "metal"]),
  service("portones", "Portones", "Fabricación, reparación y mantenimiento de portones.", ["wood-metal", "security"], "Fence", "evaluation", false, ["porton", "portón", "entrada"]),
  service("automatizacion-portones", "Automatización de portones", "Motores, controles y automatización de accesos.", ["wood-metal", "security"], "RadioTower", "specialized", false, ["porton", "portón", "motor", "control remoto", "automatizacion"]),
  service("vidrieria", "Vidriería", "Reposición e instalación de vidrios.", ["wood-metal"], "PanelsTopLeft", "evaluation", false, ["vidrio", "cristal", "ventana"]),
  service("aluminio", "Aluminio", "Trabajos en perfiles y estructuras de aluminio.", ["wood-metal"], "PanelTop", "evaluation", false, ["aluminio", "perfil"]),
  service("aberturas", "Aberturas", "Instalación y reparación de puertas y ventanas.", ["wood-metal", "home"], "DoorOpen", "evaluation", false, ["abertura", "puerta", "ventana"]),

  service("reparacion-lavarropas", "Reparación de lavarropas", "Diagnóstico y reparación de lavarropas.", ["appliances"], "WashingMachine", "specialized", true, ["lavarropas", "lavadora", "centrifuga", "centrífuga"], true, 80),
  service("hornos", "Hornos", "Diagnóstico y reparación de hornos.", ["appliances"], "CookingPot", "specialized", false, ["horno", "calor"]),
  service("cocinas", "Cocinas", "Diagnóstico y reparación de cocinas.", ["appliances"], "CookingPot", "specialized", false, ["cocina", "hornalla"]),
  service("microondas", "Microondas", "Diagnóstico y reparación de microondas.", ["appliances"], "Microwave", "specialized", false, ["microondas"]),
  service("secarropas", "Secarropas", "Diagnóstico y reparación de secarropas.", ["appliances"], "WashingMachine", "specialized", false, ["secarropas", "secadora"]),
  service("pequenos-electrodomesticos", "Pequeños electrodomésticos", "Evaluación de pequeños equipos del hogar.", ["appliances"], "PlugZap", "specialized", false, ["electrodomestico", "electrodoméstico", "aparato"]),

  service("wifi", "Instalación de Wi-Fi", "Configuración y mejora de cobertura Wi-Fi.", ["technology"], "Wifi", "specialized", true, ["wifi", "internet", "router", "señal"], true, 90),
  service("redes", "Redes", "Instalación y configuración de redes.", ["technology", "business"], "Network", "specialized", false, ["red", "cableado", "ethernet", "internet"]),
  service("computadoras", "Computadoras", "Diagnóstico y soporte para computadoras.", ["technology"], "Monitor", "specialized", true, ["pc", "computadora", "desktop"]),
  service("notebooks", "Notebooks", "Diagnóstico y soporte para notebooks.", ["technology"], "Laptop", "specialized", true, ["notebook", "laptop", "computadora"]),
  service("impresoras", "Impresoras", "Configuración y diagnóstico de impresoras.", ["technology"], "Printer", "specialized", false, ["impresora", "imprimir"]),
  service("configuracion-dispositivos", "Configuración de dispositivos", "Configuración de equipos y dispositivos conectados.", ["technology"], "Settings", "specialized", false, ["configurar", "dispositivo", "equipo"]),
  service("soporte-tecnico", "Soporte técnico", "Asistencia técnica para equipos y conectividad.", ["technology", "business"], "Headset", "specialized", false, ["soporte", "tecnico", "técnico", "ayuda"]),

  service("mudanzas", "Mudanzas", "Traslado coordinado de muebles y pertenencias.", ["logistics"], "Truck", "evaluation", false, ["mudanza", "casa", "traslado"]),
  service("fletes", "Fletes", "Traslado de objetos y cargas según necesidad.", ["logistics"], "Truck", "evaluation", false, ["flete", "camion", "camión", "transporte"]),
  service("transporte-muebles", "Transporte de muebles", "Traslado puntual de muebles y objetos grandes.", ["logistics"], "PackageOpen", "evaluation", false, ["mueble", "traslado", "transporte"]),
  service("retiro-objetos", "Retiro de objetos", "Retiro coordinado de objetos y elementos voluminosos.", ["logistics"], "PackageX", "evaluation", false, ["retirar", "objeto", "escombro"]),
  service("cargas-pequenas", "Traslado de cargas pequeñas", "Transporte de cargas pequeñas y puntuales.", ["logistics"], "Package", "evaluation", false, ["carga", "paquete", "traslado"]),

  service("fumigacion", "Fumigación", "Tratamiento y control profesional de plagas.", ["pest"], "Bug", "specialized", false, ["fumigar", "fumigacion", "fumigación", "plaga"]),
  service("control-insectos", "Control de insectos", "Tratamientos para insectos según el caso.", ["pest"], "Bug", "specialized", false, ["cucaracha", "hormiga", "mosquito", "insecto"]),
  service("control-roedores", "Control de roedores", "Evaluación y control de roedores.", ["pest"], "Rat", "specialized", false, ["rata", "raton", "ratón", "roedor"]),
  service("desinfeccion", "Desinfección", "Tratamientos de desinfección para espacios.", ["pest", "cleaning", "business"], "ShieldCheck", "specialized", false, ["desinfectar", "desinfeccion", "desinfección"]),

  service("mantenimiento-electrico-empresas", "Mantenimiento eléctrico para empresas", "Mantenimiento preventivo y correctivo de instalaciones.", ["business"], "Zap", "specialized", false, ["empresa", "comercio", "electrico", "eléctrico"]),
  service("mantenimiento-edilicio", "Mantenimiento edilicio", "Coordinación de mantenimiento general para inmuebles.", ["business"], "Building2", "evaluation", false, ["edificio", "local", "mantenimiento"]),
  service("mantenimiento-preventivo", "Mantenimiento preventivo", "Planificación de mantenimiento para reducir incidencias.", ["business"], "ClipboardCheck", "evaluation", false, ["preventivo", "empresa", "mantenimiento"]),
];

export const activeServices = services.filter((item) => item.active).sort((a, b) => a.order - b.order);
export const featuredActiveServices = activeServices.filter((item) => item.featured);

export function getCategory(id: string) {
  return serviceCategories.find((category) => category.id === id);
}
