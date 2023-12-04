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
    // Add more articles here
  ];
