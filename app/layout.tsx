import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'monetiza.inmuebles.red — Monetización Digital PropTech',
  description: 'Deja de vender lotes baldíos; es hora de facturar ingresos digitales recurrentes con Empresa LIBRE.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#080C14] text-[#F3F4F6] min-h-screen antialiased selection:bg-[#10B981]/30 selection:text-[#10B981]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
