type BlogType = {
  slug: string;
  title?: string;
  subtitle: string;
  bildquelle: string;
};

export const articles: BlogType[] = [
  {
    slug: 'selbstwert_was_ist_das',
    title: 'Wo bitte geht es zu diesem Selbstwert und was ist das überhaupt?',
    subtitle: 'Eine kurze Übung',
    bildquelle: '/img/Blog_Images/selbstwert_was_ist_das.jpeg',
  },
  {
    slug: 'achtsamkeit_koerpergefuehl',
    title: 'Wie kann Achtsamkeit bei einem guten Körpergefühl helfen?',
    subtitle: 'Interview mit Mechthild Kreuser',
    bildquelle: '/img/Blog_Images/mechthild_portrait.jpeg',
  },
  {
    slug: 'kompetenz_zeigen_und_sichtbar_sein',
    title: 'Zeige Deine Kompetenz und traue Dich, sichtbar zu sein',
    subtitle: 'Interview mit Jutta Steinbusch',
    bildquelle: '/img/Blog_Images/kompetenz_zeigen_und_sichtbar_sein.png',
  },
  {
    slug: 'den_passenden_coach_finden',
    title: 'Wie finde ich den passenden Coach?',
    subtitle:
      'Coaching ist nicht definiert, daher ist es häufig schwer aus dem ganzen Meer an Angeboten den passenden Coach zu finden.',
    bildquelle: '/img/Blog_Images/Welcher_Coach.jpg',
  },
  {
    slug: 'wie_viel_kostet_coaching',
    title: 'Wie viel kostet eigentlich ein Coaching? ',
    subtitle:
      'Diese Frage stellt sich immer spätestens dann, wenn es zu einer konkreten Kontaktaufnahme kommt. Dabei ist die Antwort wie immer: Es kommt darauf an.',
    bildquelle: '/img/Blog_Images/Kosten.jpg',
  },
  {
    slug: 'coaching_verbaende',
    title: 'Welche Coaching Verbände gibt es in Deutschland?',
    subtitle: 'Finde hier eine Auflistung der größten Coaching Verbände in Deutschland',
    bildquelle: '/img/Blog_Images/coaching_verbaende.jpg',
  },
  // Add more articles here
];
