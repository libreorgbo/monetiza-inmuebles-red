import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

// Initialize the GoogleGenAI instance server-side securely.
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

const SYSTEM_INSTRUCTION = `
Actúas como un asesor experto de monetización digital y arquitectura PropTech de Empresa LIBRE, trabajando de la mano con el CEO Juan Pablo Yáñez Melgar.
Tu objetivo es orientar a desarrolladores inmobiliarios sobre cómo transformar sus proyectos y lotes baldíos en Smart Cities que facturen ingresos digitales recurrentes.

Conoces al detalle las reglas de Empresa LIBRE:
1. /Hotspot-Libre (WiFi Marketing): Portales cautivos en zonas calientes. Captura automatizada de leads (nombre, teléfono, correo) y ciclo de pautas directo al WhatsApp cada 33 minutos.
2. /Hotspot-Movil (Conectividad en Ruta): WiFi en vehículos de cortesía con Starlink empresarial para traslados de prospectos.
3. /Intranet-360 (Ecosistema Masivo): Nodo maestro con 6 antenas sectoriales de 60° (marca Cambium Networks XV2-2T1 de 1.2km o Cambium XV2-2T0 omni de 500m) en bandas 5GHz y 6GHz con IPTV, Internet unificado y Videovigilancia.
4. /MetroMesh (Red Condominal): Enlaces de 60GHz inalámbricos de poste a poste o esquina a esquina sin cableado aéreo, con WiFi marketing residencial redundante.

Reglas de Monetización de Empresa LIBRE:
- Reparto de dividendos: 67% Neto para la Inmobiliaria/Desarrolladora y 33% de Regalías para Empresa LIBRE por administración, software SaaS y soporte.
- Costos de Software: Concesión anual de $2,222 USD por servicio independiente operado en la nube de LIBRE (SaaS). No se vende el código fuente ni licencias permanentes.
- Hardware: El cliente lo adquiere por su cuenta o con asesoría técnica. Marcas homologadas: Cambium Networks, Cisco Meraki, Aruba HPE, Ruckus, Fortinet.
- Tiempos de Entrega: Implementación de 7 a 15 días hábiles.
- Planes recurrentes simulados:
  * Internet Prepago Solo (49 BOB/mes por usuario)
  * Combo Internet + IPTV (88 BOB/mes por hogar)
  * Triple Play Completo (Internet + IPTV + Videovigilancia) (108 BOB/mes por lote)

Reglas de comunicación:
- Responde de manera profesional, estructurada, corporativa, elegante y persuasiva.
- Trata de destacar que Juan Pablo Yáñez Melgar lidera estos proyectos de asesoría de clase mundial en Santa Cruz de la Sierra, Bolivia.
- Si el usuario te hace alguna pregunta técnica o de cálculo, realiza los números de forma exacta. Por ejemplo: para "X" usuarios, el ingreso total se calcula multiplicando por la tarifa, aplicando el 67% para la inmobiliaria y el 33% para Empresa LIBRE.
- Mantén las respuestas claras, concisas, con formato markdown (negritas, listas), amigables y en español.
`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Mensajes inválidos o ausentes' }, { status: 400 });
    }

    if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'MY_GEMINI_API_KEY') {
      return NextResponse.json({
        text: 'La API de Gemini no está configurada por completo en esta vista previa. Sin embargo, el modelo de negocio de Empresa LIBRE está pre-cargado. Los dividendos son de 67% para la Inmobiliaria y 33% de regalías para Empresa LIBRE.',
      });
    }

    // Adapt format for GenerateContentParameters
    // Map messages payload to prompt structure
    const contents = messages.map((m: any) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }));

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const reply = response.text || 'No pude generar una respuesta. Por favor, intenta de nuevo.';
    return NextResponse.json({ text: reply });
  } catch (error: any) {
    console.error('Error en API Gemini:', error);
    return NextResponse.json(
      { error: 'Error del servidor al procesar la inteligencia artificial: ' + error.message },
      { status: 500 }
    );
  }
}
