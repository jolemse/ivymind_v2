type BlogType = {
    slug: string;
    title?: string;
    subtitle: string;
    bildquelle: string;
  };

  export const articles: BlogType[] = [
    {
      slug: 'change_perspectives',
      title: 'Change Perspectives – Ändere Deine Perspektive mit agilem Coaching',
      subtitle:
        'Ein Interview mit Nyelete S. Gonçalves Chilenge',
      bildquelle: '/img/Blog_Images/change_perspectives.jpeg',
    },
    {
      slug: 'ivymind_entstehung',
      title: 'Wie ist Ivymind entstanden?',
      subtitle:
        'Meine eigene Reise zur Neuorientierung',
      bildquelle: '/img/Blog_Images/ivymind_entstehung.jpeg',
    },
    {
      slug: 'wege_aus_der_krise',
      title: 'Wege aus der Krise: Wie gehe ich mit meinem inneren Kritiker und meinen Emotionen um?',
      subtitle:
        'Ein Interview mit Dr. Zarmina Penner',
      bildquelle: '/img/Blog_Images/wege_aus_der_krise.png',
    },
    // Add more articles here
  ];
