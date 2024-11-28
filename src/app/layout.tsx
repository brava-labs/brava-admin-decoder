import './globals.css';

export const metadata = {
  title: 'AdminVault Decoder',
  description: 'Decode AdminVault transaction data',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}