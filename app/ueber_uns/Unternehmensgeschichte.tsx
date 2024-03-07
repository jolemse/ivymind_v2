import Link from 'next/link';

export function Unternehmensgeschichte() {
  return (
    <>
      <h3>Unternehmensgeschichte</h3>
      <h4>2022</h4>
      <p>September - Gründung</p>
      <h4>2023</h4>
      <p>Ganzjährig - Förderung durch das Gründungsstipendium der Gründerregion NRW</p>
      <p>Ab Oktober - Teilnahme am digitalHub Incubator Batch #7 des DigiHub Aachen</p>
      <h4>2024</h4>
      <p>
        Januar - Pitch beim DemoDay #7 des DigiHub Aachen. Schau Dir{' '}
        <Link
          href="https://www.youtube.com/watch?v=4dFj7Tw7ZTE&t=931s"
          rel="noopener nofollow"
          target="_blank"
        >
          hier
        </Link>{' '}
        (externer Link zu Youtube) unseren Pitch an.
      </p>
    </>
  );
}
