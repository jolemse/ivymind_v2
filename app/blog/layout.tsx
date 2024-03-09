export const metadata = {
  title: 'Blog - Ivymind',
  description:
    'Finde deine Inspiration und vieles mehr in unseren Blogbeiträgen rund um die Themen Achtsamkeit, Selbstliebe, Persönlichkeitsentwicklung und beruflichem Erfolg.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
