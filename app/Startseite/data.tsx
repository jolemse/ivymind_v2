type BlogType = {
    slug: string;
    title?: string;
    subtitle: string;
    bildquelle: string;
  };

  export const articles: BlogType[] = [
    {
      slug: 'ohne_emotion_keine_motivation',
      title: 'Ohne Emotion keine Motivation – Wie Veränderungsprozesse entstehen',
      subtitle: 'Ein Interview mit Silvia Hahn',
      bildquelle: '/img/Blog_Images/ohne_emotion_keine_motivation.jpeg',
    },
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
    // Add more articles here
  ];
