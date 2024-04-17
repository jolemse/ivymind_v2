type BlogType = {
    slug: string;
    title?: string;
    subtitle: string;
    bildquelle: string;
  };

  export const articles: BlogType[] = [
    {
      slug: 'wie_finde_ich_den_richtigen_job',
      title: 'Wie finde ich den Job, der zu mir passt und der mich erfüllt?',
      subtitle: 'Ein Interview mit Julia Hautz',
      bildquelle: '/img/Blog_Images/wie_finde_ich_den_richtigen_job.jpg',
    },
    {
      slug: 'neue_denkwege_ueber_deinen_koerper',
      title: 'Wie Du über Deinen Körper an neue Denkwege kommst.',
      subtitle: 'Ein Interview mit Sabine Grosser',
      bildquelle: '/img/Blog_Images/neue_denkwege_ueber_deinen_koerper.jpeg',
    },
    {
      slug: 'ivymind_entstehung',
      title: 'Wie ist Ivymind entstanden?',
      subtitle:
        'Meine eigene Reise zur Neuorientierung',
      bildquelle: '/img/Blog_Images/ivymind_entstehung.jpeg',
    },
    // Add more articles here
  ];
