export const metadata = {
  title: 'Finde Dein perfektes Match.',
  description: 'Finde mit nur drei Fragen auf Ivymind zu Deinem passenden Coach oder Kurs',
};

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <>
            { children }
        </>
    );
  }
