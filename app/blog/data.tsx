type BlogType = {
  slug: string;
  title?: string;
  bildquelle: string;
};

export const articles: BlogType[] = [
  {
    slug: 'selbstwert_was_ist_das',
    title: 'Wo bitte geht es zu diesem Selbstwert und was ist das überhaupt? - Eine kurze Übung',
    bildquelle: '/img/Blog_Images/selbstwert_was_ist_das.jpeg',
  },
  {
    slug: 'achtsamkeit_koerpergefuehl',
    title:
      'Wie kann Achtsamkeit bei einem guten Körpergefühl helfen? - Interview mit Mechthild Kreuser',
    bildquelle: '/img/Blog_Images/mechthild_portrait.jpeg',
  },
  {
    slug: 'kompetenz_zeigen_und_sichtbar_sein',
    title:
      'Zeige Deine Kompetenz und traue Dich, sichtbar zu sein - Interview mit Jutta Steinbusch',
    bildquelle: '/img/Blog_Images/kompetenz_zeigen_und_sichtbar_sein.png',
  },
  {
    slug: 'den_passenden_coach_finden',
    title: 'Wie finde ich den passenden Coach?',
    bildquelle: '/img/Blog_Images/Welcher_Coach.jpg',
  },
  {
    slug: 'wie_viel_kostet_coaching',
    title: 'Wie viel kostet eigentlich ein Coaching? ',
    bildquelle: '/img/Blog_Images/Kosten.jpg',
  },
  {
    slug: 'coaching_verbaende',
    title: 'Welche Coaching Verbände gibt es in Deutschland?',
    bildquelle: '/img/Bilder Pixabay/team-spirit-2447163_1920.jpg',
  },
  // Add more articles here
];
