'use client';

import { Container, Accordion, Center } from '@mantine/core';
import Link from 'next/link';

export default function Datenschutz() {
  return (
    <Container>
      <Center>
        <h1>Datenschutzerklärung</h1>
      </Center>
      <Center>
        <p>
          für den Internetauftritt <Link href="https://www.ivymind.de">https://www.ivymind.de</Link>
        </p>
      </Center>
      <Center>
        <h4>Zuletzt aktualisiert am 31.03.2023</h4>
      </Center>
      <Accordion variant="contained">
        <Accordion.Item value="Verantwortlicher">
          <Accordion.Control>Verantwortlicher</Accordion.Control>
          <Accordion.Panel>
            <Center>
              Verantwortliche Stelle im Sinne der Datenschutzgrundverordnung (DSGVO) und des
              Bundesdatenschutzgesetz (BDSG) ist:
            </Center>
            <p>Angaben gemäß § 5 TMG</p>
            <h3>Ivymind GmbH</h3>
            <p>August-Klotz-Straße 21</p>
            <p>52349 Düren</p>
            <h3>Vertreten durch:</h3>
            <p>Verena Hoppe</p>
            <p>Jonas Lemmen</p>
            <h3>Kontakt:</h3>
            <p>
              E-Mail:{' '}
              <Link href="mailto:info@ivymind.de" rel="nofollow">
                info@ivymind.de
              </Link>
            </p>
            <p>Telefon: +49 1516 8464691</p>
            <h3>Registereintrag:</h3>
            <p>Eintragung im Registergericht: Amtsgericht Düren</p>
            <p>Registernummer: HRB 9229</p>
            <h3>Umsatzsteuer-ID:</h3>
            <p>DE357389305</p>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Allgemeines zur Datenverarbeitung">
          <Accordion.Control>Allgemeines zur Datenverarbeitung</Accordion.Control>
          <Accordion.Panel>
            <p>
              (1) Die Verarbeitung von personenbezogenen Daten erfolgt grundsätzlich nur, soweit
              dies zur Bereitstellung einer funktionsfähigen Website samt Inhalte und Leistungen
              erforderlich ist. Regelmäßig erfolgt eine Verarbeitung nur nach Einwilligung der
              betroffenen Person. Ausnahmsweise erfolgt eine Verarbeitung ohne Einwilligung der
              betroffenen Person, wenn dies aus tatsächlichen Gründen nicht möglich und die
              Verarbeitung der Daten durch gesetzliche Vorschriften gestattet ist.
            </p>
            <p>
              (2) Art. 6 Abs. 1 lit. a DSGVO dient als Rechtsgrundlage für die Verarbeitung
              personenbezogener Daten, soweit für Verarbeitungsvorgänge personenbezogener Daten eine
              Einwilligung der betroffenen Person eingeholt wurde.
            </p>
            <p>
              Art. 6 Abs. 1 lit. b DSGVO dient als Rechtsgrundlage für die Verarbeitung
              personenbezogener Daten, soweit dies zur Erfüllung eines Vertrages, dessen
              Vertragspartei die betroffene Person ist, erforderlich ist. Dies gilt auch für
              Verarbeitungsvorgänge, die zur Durchführung vorvertraglicher Maßnahmen erforderlich
              sind.
            </p>
            <p>
              Art. 6 Abs. 1 lit. c DSGVO dient als Rechtsgrundlage für die Verarbeitung
              personenbezogener Daten, soweit eine Verarbeitung personenbezogener Daten zur
              Erfüllung einer rechtlichen Verpflichtung erforderlich ist, der das Unternehmen
              unterliegt.
            </p>
            <p>
              Art. 6 Abs. 1 lit. f DSGVO dient als Rechtsgrundlage für die Verarbeitung
              personenbezogener Daten, soweit dies für die Verarbeitung zur Wahrung eines
              berechtigten Interesses des Unternehmens oder eines Dritten erforderlich ist und nicht
              die Interessen, Grundrechte und Grundfreiheiten des Betroffenen das erstgenannte
              Interesse überwiegen.
            </p>
            <p>
              (3) Die personenbezogenen Daten der betroffenen Person werden gelöscht oder gesperrt,
              sobald der Zweck der Speicherung entfällt. Eine Speicherung kann darüber hinaus dann
              erfolgen, wenn dies durch einschlägige nationale oder europäische Vorschriften,
              vorgesehen wurde. Eine Sperrung oder Löschung der Daten erfolgt auch dann, wenn eine
              durch die genannten Normen vorgeschriebene Speicherfrist abläuft, es sei denn, dass
              eine Erforderlichkeit zur weiteren Speicherung der Daten für einen Vertragsabschluss
              oder eine Vertragserfüllung besteht.
            </p>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Nutzung des Internetauftritts">
          <Accordion.Control>Nutzung des Internetauftritts</Accordion.Control>
          <Accordion.Panel>
            <p>
              (1) Bei jedem Aufruf der Internetseite erfasst das System automatisiert Daten und
              Informationen vom Computersystem des aufrufenden Rechners.
            </p>
            <p>Folgende Daten werden hierbei erhoben:</p>
            <ul>
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit der Anfrage</li>
              <li>Zeitzonendifferenz zur Greenwich Mean Time (GMT)</li>
              <li>Inhalt der Internetseite</li>
              <li>Zugriffsstatus (HTTP-Status)</li>
              <li>übertragene Datenmenge</li>
              <li>Webbrowser</li>
              <li>Sprache und Version des Browsers</li>
              <li>Betriebssystem</li>
              <li>Internetauftritt, von dem Sie auf den Internetauftritt gelangt sind</li>
            </ul>
            <p>
              Die Daten werden in den Logfiles des Systems gespeichert. Eine Speicherung dieser
              Daten zusammen mit anderen personenbezogenen Daten des Nutzers findet nicht statt.
            </p>
            <p>(2) Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. f DSGVO.</p>
            <p>
              (3) Die Erhebung und vorübergehende Speicherung der IP-Adresse ist notwendig, um die
              Darstellung der Webseite auf Ihrem Endgerät zu ermöglichen. Hierfür muss Ihre
              IP-Adresse für die Dauer des Besuchs der Webseite gespeichert werden. Eine Auswertung
              dieser Daten zu Marketingzwecken findet nicht statt.
            </p>
            <p>
              (4) Die Daten werden gelöscht, wenn die jeweilige Sitzung beendet ist. Soweit diese
              Daten in Logfiles gespeichert werden, ist dies nach spätestens sieben Tagen der Fall.
              Eine darüberhinausgehende Speicherung ist möglich. In diesem Fall werden die IP-
              Adressen der Nutzer gelöscht oder verfremdet, sodass eine Zuordnung des aufrufenden
              Clients nicht mehr möglich ist.
            </p>
            <p>
              (5) Die Erfassung der Daten zur Bereitstellung der Website und die Speicherung der
              Daten in Logfiles ist zur Bereitstellung des Internetauftritts zwingend erforderlich.
              Es besteht folglich keine Widerspruchsmöglichkeit.
            </p>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Verwendung von Cookies">
          <Accordion.Control>Verwendung von Cookies</Accordion.Control>
          <Accordion.Panel>
            <p>
              (1) Der Internetauftritt verwendet Cookies. Bei Cookies handelt es sich um
              Textdateien, die im Internetbrowser bzw. vom Internetbrowser auf dem Computersystem
              des Nutzers gespeichert werden. Dieser Cookie enthält eine charakteristische
              Zeichenfolge, die eine eindeutige Identifizierung des Browsers beim erneuten Aufrufen
              des Internetauftritts ermöglicht. Cookies können keine Viren auf das Endgerät
              übertragen oder selbst Programme ausführen.
            </p>
            <p>
              Cookies dienen dazu einen Internetauftritt nutzerfreundlicher zu gestalten. Einige
              Elemente des Internetauftritts erfordern es, dass der aufrufende Browser auch nach
              einem Seitenwechsel identifiziert werden kann.
            </p>
            <p>
              Soweit Cookies nicht technisch notwendig sind, werden diese nur nach Einwilligung
              durch den Nutzer geladen.
            </p>
            <p>
              Transiente Cookies werden automatisch gelöscht, wenn die Sitzung geschlossen wird.
              Dazu zählen unter anderem Session-Cookies, welche die sog. Session-ID speichern,
              anhand der verschiedene Anfragen des Webbrowsers der gemeinsamen Sitzung zugeordnet
              werden können.
            </p>
            <p>
              Persistente Cookies werden automatisch nach einer vorgegebenen Speicherdauer gelöscht,
              die sich je nach Cookie unterscheiden kann. Die dazugehörigen Einstellungen können
              jederzeit in den Einstellungen des Webbrowsers gelöscht werden.
            </p>
            <p>In den Cookies werden folgende Daten gespeichert:</p>
            <ul>
              <li>Log-In-Informationen</li>
              <li>Spracheinstellungen</li>
              <li>eingegebene Suchbegriffe</li>
              <li>Anzahl der Aufrufe des Internetauftritts</li>
              <li>Nutzung einzelner Funktionen des Internetauftritts</li>
            </ul>
            <p>(2) Die Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. f DSGVO.</p>
            <p>
              (3) Der Zweck der Verwendung technisch notwendiger Cookies ist, die Nutzung von
              Websites für die Nutzer zu vereinfachen. Einige Funktionen des Internetauftritts
              können ohne den Einsatz von Cookies nicht angeboten werden. Für diese ist es
              erforderlich, dass der Browser auch nach einem Seitenwechsel wiedererkannt wird.
            </p>
            <p>
              Die durch technisch notwendige Cookies erhobenen Nutzerdaten werden nicht zur
              Erstellung von Nutzerprofilen verwendet.
            </p>
            <p>
              (4) Cookies werden auf dem Rechner des Nutzers gespeichert und von diesem an unserer
              Seite übermittelt. Daher haben Sie als Nutzer auch die volle Kontrolle über die
              Verwendung von Cookies. Durch eine Änderung der Einstellungen in Ihrem Internetbrowser
              können Sie die Übertragung von Cookies deaktivieren oder einschränken. Bereits
              gespeicherte Cookies können jederzeit gelöscht werden. Dies kann auch automatisiert
              erfolgen. Werden Cookies für unsere Website deaktiviert, können möglicherweise nicht
              mehr alle Funktionen der Website vollumfänglich genutzt werden.
            </p>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Newsletter">
          <Accordion.Control>Newsletter</Accordion.Control>
          <Accordion.Panel>
            <p>
              Neben der rein informatorischen Nutzung unserer Webseite bieten wir das Abonnement
              unseres Newsletters an. Wenn Sie sich für unseren Newsletter anmelden, werden die
              folgenden "Newsletterdaten" von uns erhoben, gespeichert und weiterverarbeitet:
            </p>
            <ul>
              <li>die Seite, von der aus die Seite angefordert wurde (sog. Referrer-URL)</li>
              <li>das Datum und die Uhrzeit des Aufrufs</li>
              <li>die Beschreibung des Typs des verwendeten Webbrowsers</li>
              <li>
                die IP-Adresse des anfragenden Rechners, die so verkürzt wird, dass ein
                Personenbezug nicht mehr herstellbar ist
              </li>
              <li>die E-Mail-Adresse</li>
              <li>das Datum und die Uhrzeit der Anmeldung und Bestätigung</li>
            </ul>
            <p>
              Wir weisen Sie darauf hin, dass wir bei Versand des Newsletters Ihr Nutzerverhalten
              auswerten. Für diese Auswertung beinhalten die versendeten E-Mails sogenannte
              Web-Beacons bzw. Tracking-Pixel, die Ein-Pixel-Bilddateien darstellen, die auf unserer
              Website gespeichert sind. Für die Auswertungen verknüpfen wir die vorstehend genannten
              Daten und die Web-Beacons mit Ihrer E-Mail-Adresse und einer individuellen ID. Auch im
              Newsletter enthaltene Links enthalten diese ID. Die Daten werden ausschließlich
              pseudonymisiert erhoben, d.h. die IDs werden also nicht mit Ihren weiteren
              persönlichen Daten verknüpft, eine direkte Personenbeziehbarkeit wird ausgeschlossen.
            </p>
            <p>
              Die Verarbeitung der Newsletterdaten erfolgt zum Zweck der Zusendung des Newsletters.
              Im Rahmen der Anmeldung zu unserem Newsletter willigen Sie in die Verarbeitung Ihrer
              personenbezogenen Daten ein (Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DS-GVO). Für die
              Anmeldung zu unserem Newsletter verwenden wir das sog. Double-Opt-In-Verfahren. Das
              heißt, dass wir Ihnen nach Ihrer Anmeldung eine E-Mail an die angegebene
              E-Mail-Adresse senden, in welcher wir Sie um Bestätigung bitten, dass Sie den Versand
              des Newsletters wünschen. Zweck dieses Verfahrens ist, Ihre Anmeldung nachweisen und
              ggf. einen möglichen Missbrauch Ihrer persönlichen Daten aufklären zu können. Ihre
              Einwilligung in die Übersendung des Newsletters können Sie jederzeit widerrufen und
              den Newsletter abbestellen. Den Widerruf können Sie durch Klick auf den in jeder
              Newsletter-E-Mail bereitgestellten Link, per E-Mail an{' '}
              <Link href="info@ivymind.de" rel="nofollow">
                info@ivymind.de
              </Link>{' '}
              oder durch eine Nachricht an die im Impressum angegebenen Kontaktdaten erklären.
            </p>
            <p>
              Sofern für die Verarbeitung der Daten die Speicherung von Informationen in Ihrer
              Endeinrichtung oder der Zugriff auf Informationen, die bereits in der Endeinrichtung
              gespeichert sind, erforderlich ist, ist § 25 Abs. 1, 2 TTDSG hierfür die
              Rechtsgrundlage.
            </p>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Google Analytics">
          <Accordion.Control>Google Analytics</Accordion.Control>
          <Accordion.Panel>
            <p>
              Zur bedarfsgerechten Gestaltung unserer Webseiten erstellen wir pseudonyme
              Nutzungsprofile mit Hilfe von Google Analytics. Google Analytics verwendet Targeting
              Cookies, die auf Ihrem Endgerät gespeichert und von uns ausgelesen werden können. Auf
              diese Weise sind wir in der Lage, wiederkehrende Besucher zu erkennen und als solche
              zu zählen und zu erfahren, wie häufig unsere Webseiten von unterschiedlichen Nutzern
              aufgerufen wurden. Die Datenverarbeitung erfolgt auf der Grundlage von Art. 6 Abs. 1
              lit. a DS-GVO (Einwilligung).
            </p>
            <p>
              Die durch das Cookie erzeugten Informationen über Ihre Benutzung unserer Webseite
              werden in der Regel an einen Server von Google in den USA übertragen und dort
              gespeichert. Da wir die IP-Anonymisierung auf unserer Webseite aktiviert haben, wird
              Ihre IP-Adresse von Google jedoch zuvor innerhalb von Mitgliedstaaten der Europäischen
              Union gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von
              Google in den USA übertragen und erst dort gekürzt (weitere Informationen zu Zweck und
              Umfang der Datenerhebung erhalten Sie z.B. unter
              <Link href="https://policies.google.com/privacy?hl=de&gl=de" rel="nofollow">
                https://policies.google.com/privacy?hl=de&gl=de
              </Link>
              ).
              <br />
              Wir haben mit dem Domainbetreiber einen Vertrag zur Auftragsverarbeitung nach Art. 28
              DS-GVO geschlossen. Dieser wird alle Informationen demnach nur streng zweckgebunden
              nutzen, um die Nutzung unserer Webseiten für uns auszuwerten und Reports über die
              Webseitenaktivitäten zusammenzustellen.
            </p>
            <p>
              Sie können Ihre einmal erteilte Einwilligung jederzeit widerrufen. Bitte nutzen Sie
              hierfür eine der folgenden Möglichkeiten:
            </p>
            <ul>
              <li>Sie teilen uns mit, dass Sie Ihre Einwilligung widerrufen möchten.</li>
              <li>
                Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer
                Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem
                Fall gegebenenfalls nicht sämtliche Funktionen dieser Webseite vollumfänglich werden
                nutzen können.
              </li>
              <li>
                Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre
                Nutzung unserer Webseiten bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie
                die Verarbeitung dieser Daten durch Google verhindern, indem sie das unter dem
                folgenden Link{' '}
                <Link href="https://tools.google.com/dlpage/gaoptout?hl=de" rel="nofollow">
                  https://tools.google.com/dlpage/gaoptout?hl=de
                </Link>
                verfügbare Browser-Plugin herunterladen und installieren.
              </li>
            </ul>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Google Maps">
          <Accordion.Control>Google Maps</Accordion.Control>
          <Accordion.Panel>
            <p>
              Wir verwenden auf dieser Website "Google Maps", einen Online-Kartendienst der Google
              Ireland Limited, Google Building Gordon House, Barrow St, Dublin 4, Irland (im
              Folgenden "Google"). Mit diesem Angebot können wir Ihnen Karten auf der Website
              anzeigen, insbesondere im Fuß der Seite und bei den Kontaktinformationen. Durch Ihren
              Besuch auf unserer Website erhält Google die Information, dass Sie die entsprechende
              Unterseite aufgerufen haben. Hierbei wird die aktuelle IP-Adresse Ihres Rechners
              übertragen. Das erfolgt ganz unabhängig davon, ob Google einen Benutzeraccount für Sie
              bereitstellt, über den Sie eingeloggt sind, oder ob kein solcher Account besteht.
              Falls Sie bei Google eingeloggt sind, werden Ihre Daten ggf. direkt Ihrem Account
              zugeordnet. Wenn Sie diese Zuordnung bei Google nicht wünschen, müssen Sie sich vor
              dem Besuch bei uns dort ausloggen. Google speichert Ihre Daten als Nutzungsprofile und
              nutzt sie für Zwecke der Werbung, Marktforschung und/oder bedarfsgerechten Gestaltung
              der Website. Eine solche Auswertung erfolgt insbesondere (selbst für nicht eingeloggte
              Nutzer) zur Erbringung von bedarfsgerechter Werbung und um andere Nutzer über Ihre
              Aktivitäten auf unserer Webseite zu informieren.
            </p>
            <p>
              Wir verwenden Google Maps, um Ihnen statische Karten von Google Maps anzeigen zu
              können und Ihnen so ein besseres Nutzungserlebnis unserer Webseite zu ermöglichen. In
              diesem Umstand liegt auch unser berechtigtes Interesse an der Verarbeitung der
              vorstehenden Daten durch den Drittanbieter. Rechtsgrundlage für diese Verarbeitung ist
              somit Art. 6 Abs. 1 S. 1 lit. f) DSGVO.
            </p>
            <p>
              Ihnen steht gegen die Bildung dieses Profils ein Widerspruchsrecht zu. Wenden Sie sich
              hierfür bitte an Google.
            </p>
            <p>
              Anschrift des Drittanbieters: Google Ireland Limited, Google Building Gordon House,
              Barrow St, Dublin 4, Irland
            </p>
            <p>
              Weitere Informationen zur Nutzung der Daten durch Google, sowie zu Ihren Einstellungs-
              und Widerspruchsmöglichkeiten und zum Datenschutz entnehmen Sie bitte der
              nachfolgenden Webseite von Google:{' '}
              <Link href="https://policies.google.com/privacy?hl=de&gl=de" rel="nofollow">
                https://policies.google.com/privacy?hl=de&gl=de
              </Link>
              .
            </p>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Rechte der betroffenen Person">
          <Accordion.Control>Rechte der betroffenen Person</Accordion.Control>
          <Accordion.Panel>
            <p>
              Werden personenbezogene Daten von Nutzern verarbeitet, sind die Nutzer „betroffene
              Person“ i.S.d. DSGVO und es stehen ihnen folgende Rechte gegenüber dem
              Verantwortlichen zu:
            </p>
            <ol>
              <li>Auskunftsrecht</li>
              <p>
                Die betroffene Person kann von dem Verantwortlichen eine Bestätigung darüber
                verlangen, ob personenbezogene Daten verarbeitet werden. Liegt eine solche
                Verarbeitung vor, kann von dem Verantwortlichen über folgende Informationen Auskunft
                verlangt werden:
              </p>
              <ol>
                <li>die Zwecke, zu denen die personenbezogenen Daten verarbeitet werden;</li>
                <li>die Kategorien von personenbezogenen Daten, welche verarbeitet werden;</li>
                <li>
                  die Empfänger bzw. die Kategorien von Empfängern, gegenüber denen betreffende
                  personenbezogenen Daten offengelegt wurden oder noch offengelegt werden;
                </li>
                <li>
                  die geplante Dauer der Speicherung der personenbezogenen Daten oder, falls
                  konkrete Angaben hierzu nicht möglich sind, Kriterien für die Festlegung der
                  Speicherdauer;
                </li>
                <li>
                  das Bestehen eines Rechts auf Berichtigung oder Löschung der personenbezogenen
                  Daten, eines Rechts auf Einschränkung der Verarbeitung durch den Verantwortlichen
                  oder eines Widerspruchsrechts gegen diese Verarbeitung;
                </li>
                <li>das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde;</li>
                <li>
                  alle verfügbaren Informationen über die Herkunft der Daten, wenn die
                  personenbezogenen Daten nicht bei der betroffenen Person erhoben werden;
                </li>
                <li>
                  das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling
                  gemäß Art. 22 Abs. 1 und 4 DSGVO und – zumindest in diesen Fällen –
                  aussagekräftige Informationen über die involvierte Logik sowie die Tragweite und
                  die angestrebten Auswirkungen einer derartigen Verarbeitung für die betroffene
                  Person.
                </li>
              </ol>
              <p>
                Es besteht das Recht, Auskunft darüber zu verlangen, ob die personenbezogenen Daten
                in ein Drittland oder an eine internationale Organisation übermittelt werden. In
                diesem Zusammenhang kann verlangt werden, über die geeigneten Garantien gem. Art. 46
                DSGVO im Zusammenhang mit der Übermittlung unterrichtet zu werden.
              </p>
              <li>Recht auf Berichtigung</li>
              <p>
                Es besteht ein Recht auf Berichtigung und/oder Vervollständigung gegenüber dem
                Verantwortlichen, sofern die verarbeiteten personenbezogenen Daten unrichtig oder
                unvollständig sind. Der Verantwortliche hat die Berichtigung unverzüglich
                vorzunehmen.
              </p>
              <li>Recht auf Einschränkung der Verarbeitung</li>
              <ol>
                <p>
                  Unter den folgenden Voraussetzungen kann die Einschränkung der Verarbeitung der
                  personenbezogenen Daten verlangt werden:
                </p>
                <li>
                  wenn Sie die Richtigkeit der personenbezogenen Daten für eine Dauer bestreiten,
                  die es dem Verantwortlichen ermöglicht, die Richtigkeit der personenbezogenen
                  Daten zu überprüfen;
                </li>
                <li>
                  die Verarbeitung unrechtmäßig ist und die Löschung der personenbezogenen Daten
                  abgelehnt und stattdessen die Einschränkung der Nutzung der personenbezogenen
                  Daten verlangt wird;
                </li>
                <li>
                  der Verantwortliche die personenbezogenen Daten für die Zwecke der Verarbeitung
                  nicht länger benötigt, diese jedoch zur Geltendmachung, Ausübung oder Verteidigung
                  von Rechtsansprüchen benötigt werden, oder
                </li>
                <li>
                  wenn ein Widerspruch gegen die Verarbeitung gemäß Art. 21 Abs. 1 DSGVO eingelegt
                  wurde und noch nicht feststeht, ob die berechtigten Gründe des Verantwortlichen
                  gegenüber den Gründen der betroffenen Person überwiegen.
                  <br />
                  <br />
                  Wurde die Verarbeitung der personenbezogenen Daten eingeschränkt, dürfen diese
                  Daten – von ihrer Speicherung abgesehen – nur mit einer Einwilligung der
                  betroffenen Person oder zur Geltendmachung, Ausübung oder Verteidigung von
                  Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder
                  juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der
                  Union oder eines Mitgliedstaats verarbeitet werden.
                  <br />
                  <br />
                  Wurde die Einschränkung der Verarbeitung nach den o.g. Voraussetzungen
                  eingeschränkt, wird die betroffene Person von dem Verantwortlichen unterrichtet
                  bevor die Einschränkung aufgehoben wird.
                </li>
              </ol>
              <li>Recht auf Löschung</li>
              <ol>
                <li>Löschungspflicht</li>
                <p>
                  Es besteht ein Recht von dem Verantwortlichen zu verlangen, dass die
                  personenbezogenen Daten unverzüglich gelöscht werden, und der Verantwortliche ist
                  verpflichtet, diese Daten unverzüglich zu löschen, sofern einer der folgenden
                  Gründe zutrifft:
                </p>
                <ol>
                  <li>
                    Die personenbezogenen Daten sind für die Zwecke, für die sie erhoben oder auf
                    sonstige Weise verarbeitet wurden, nicht mehr notwendig.
                  </li>
                  <li>
                    Die Einwilligung wird widerrufen, auf die sich die Verarbeitung gem. Art. 6 Abs.
                    1 lit. a oder Art. 9 Abs. 2 lit. a DSGVO stützte, und es fehlt an einer
                    anderweitigen Rechtsgrundlage für die Verarbeitung.
                  </li>
                  <li>
                    Es wird gem. Art. 21 Abs. 1 DSGVO Widerspruch gegen die Verarbeitung eingelegt
                    und es liegen keine vorrangigen berechtigten Gründe für die Verarbeitung vor,
                    oder es wird gem. Art. 21 Abs. 2 DSGVO Widerspruch gegen die Verarbeitung
                    eingelegt.
                  </li>
                  <li>Die personenbezogenen Daten wurden unrechtmäßig verarbeitet.</li>
                  <li>
                    Die Löschung der personenbezogenen Daten ist zur Erfüllung einer rechtlichen
                    Verpflichtung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten
                    erforderlich, dem der Verantwortliche unterliegt.
                  </li>
                  <li>
                    Die personenbezogenen Daten wurden in Bezug auf angebotene Dienste der
                    Informationsgesellschaft gemäß Art. 8 Abs. 1 DSGVO erhoben.
                  </li>
                </ol>
                <li>Information an Dritte</li>
                <p>
                  Hat der Verantwortliche die personenbezogenen Daten öffentlich gemacht und ist er
                  gem. Art. 17 Abs. 1 DSGVO zu deren Löschung verpflichtet, so trifft er unter
                  Berücksichtigung der verfügbaren Technologie und der Implementierungskosten
                  angemessene Maßnahmen, auch technischer Art, um für die Datenverarbeitung
                  Verantwortliche, die die personenbezogenen Daten verarbeiten, darüber zu
                  informieren, dass betroffene Personen von ihnen die Löschung aller Links zu diesen
                  personenbezogenen Daten oder von Kopien oder Replikationen dieser
                  personenbezogenen Daten verlangt haben.
                </p>
                <li>Ausnahmen</li>
                <p>
                  Das Recht auf Löschung besteht nicht, soweit die Verarbeitung erforderlich ist
                </p>
                <ol>
                  <li>zur Ausübung des Rechts auf freie Meinungsäußerung und Information;</li>
                  <li>
                    zur Erfüllung einer rechtlichen Verpflichtung, die die Verarbeitung nach dem
                    Recht der Union oder der Mitgliedstaaten, dem der Verantwortliche unterliegt,
                    erfordert, oder zur Wahrnehmung einer Aufgabe, die im öffentlichen Interesse
                    liegt oder in Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen
                    übertragen wurde;
                  </li>
                  <li>
                    aus Gründen des öffentlichen Interesses im Bereich der öffentlichen Gesundheit
                    gemäß Art. 9 Abs. 2 lit. h und i sowie Art. 9 Abs. 3 DSGVO;
                  </li>
                  <li>
                    für im öffentlichen Interesse liegende Archivzwecke, wissenschaftliche oder
                    historische Forschungszwecke oder für statistische Zwecke gem. Art. 89 Abs. 1
                    DSGVO, soweit das unter Abschnitt a) genannte Recht voraussichtlich die
                    Verwirklichung der Ziele dieser Verarbeitung unmöglich macht oder ernsthaft
                    beeinträchtigt, oder
                  </li>
                  <li>zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</li>
                </ol>
              </ol>
              <li>Recht auf Unterrichtung</li>
              <p>
                Wurde das Recht auf Berichtigung, Löschung oder Einschränkung der Verarbeitung
                gegenüber dem Verantwortlichen geltend gemacht, ist dieser verpflichtet, allen
                Empfängern, denen die personenbezogenen Daten offengelegt wurden, diese Berichtigung
                oder Löschung der Daten oder Einschränkung der Verarbeitung mitzuteilen, es sei
                denn, dies erweist sich als unmöglich oder ist mit einem unverhältnismäßigen Aufwand
                verbunden.
              </p>
              <p>
                Es besteht gegenüber dem Verantwortlichen das Recht, über diese Empfänger
                unterrichtet zu werden.
              </p>
              <li>Recht auf Datenübertragbarkeit</li>
              <p>
                Es besteht das Recht, die personenbezogenen Daten, die dem Verantwortlichen
                bereitgestellt wurden, in einem strukturierten, gängigen und maschinenlesbaren
                Format zu erhalten. Außerdem besteht das Recht diese Daten einem anderen
                Verantwortlichen ohne Behinderung durch den Verantwortlichen, dem die
                personenbezogenen Daten bereitgestellt wurden, zu übermitteln, sofern
              </p>
              <ol>
                <li>
                  die Verarbeitung auf einer Einwilligung gem. Art. 6 Abs. 1 lit. a DSGVO oder Art.
                  9 Abs. 2 lit. a DSGVO oder auf einem Vertrag gem. Art. 6 Abs. 1 lit. b DSGVO
                  beruht und
                </li>
                <li>die Verarbeitung mithilfe automatisierter Verfahren erfolgt.</li>
              </ol>
              <p>
                In Ausübung dieses Rechts besteht ferner das Recht, zu erwirken, dass die
                personenbezogenen Daten direkt von einem Verantwortlichen einem anderen
                Verantwortlichen übermittelt werden, soweit dies technisch machbar ist. Freiheiten
                und Rechte anderer Personen dürfen hierdurch nicht beeinträchtigt werden.
              </p>
              <p>
                Das Recht auf Datenübertragbarkeit gilt nicht für eine Verarbeitung
                personenbezogener Daten, die für die Wahrnehmung einer Aufgabe erforderlich ist, die
                im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die
                dem Verantwortlichen übertragen wurde.
              </p>
              <li>Widerspruchsrecht</li>
              <p>
                Es besteht das Recht, aus Gründen, die sich aus der besonderen Situation der
                betroffenen Person ergibt, jederzeit gegen die Verarbeitung der personenbezogenen
                Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch
                einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling.
              </p>
              <p>
                Der Verantwortliche verarbeitet die personenbezogenen Daten nicht mehr, es sei denn,
                er kann zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die die
                Interessen, Rechte und Freiheiten der betroffenen Person überwiegen, oder die
                Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von
                Rechtsansprüchen.
              </p>
              <p>
                Werden die personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben,
                besteht das Recht, jederzeit Widerspruch gegen die Verarbeitung der
                personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für
                das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht.
              </p>
              <p>
                Wurde der Verarbeitung für Zwecke der Direktwerbung widersprochen, so werden die
                personenbezogenen Daten nicht mehr für diese Zwecke verarbeitet.
              </p>
              <p>
                Es besteht die Möglichkeit, im Zusammenhang mit der Nutzung von Diensten der
                Informationsgesellschaft – ungeachtet der Richtlinie 2002/58/EG –das
                Widerspruchsrecht mittels automatisierter Verfahren auszuüben, bei denen technische
                Spezifikationen verwendet werden.
              </p>
              <li>Recht auf Widerruf der datenschutzrechtlichen Einwilligungserklärung</li>
              <p>
                Es besteht das Recht, die datenschutzrechtliche Einwilligungserklärung jederzeit zu
                widerrufen. Durch den Widerruf der Einwilligung wird die Rechtmäßigkeit der aufgrund
                der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt.
              </p>
              <li>Automatisierte Entscheidung im Einzelfall einschließlich Profiling</li>
              <p>
                Es besteht das Recht, nicht einer ausschließlich auf einer automatisierten
                Verarbeitung – einschließlich Profiling – beruhenden Entscheidung unterworfen zu
                werden, die der betroffenen Person gegenüber rechtliche Wirkung entfaltet oder sie
                in ähnlicher Weise erheblich beeinträchtigt. Dies gilt nicht, wenn die Entscheidung
              </p>
              <ol>
                <li>
                  für den Abschluss oder die Erfüllung eines Vertrags zwischen der betroffenen
                  Person und dem Verantwortlichen erforderlich ist,
                </li>
                <li>
                  aufgrund von Rechtsvorschriften der Union oder der Mitgliedstaaten, denen der
                  Verantwortliche unterliegt, zulässig ist und diese Rechtsvorschriften angemessene
                  Maßnahmen zur Wahrung Ihrer Rechte und Freiheiten sowie Ihrer berechtigten
                  Interessen enthalten oder
                </li>
                <li>mit ausdrücklicher Einwilligung der betroffenen Person erfolgt.</li>
              </ol>
              <p>
                Allerdings dürfen diese Entscheidungen nicht auf besonderen Kategorien
                personenbezogener Daten nach Art. 9 Abs. 1 DSGVO beruhen, sofern nicht Art. 9 Abs. 2
                lit. a oder g gilt und angemessene Maßnahmen zum Schutz der Rechte und Freiheiten
                sowie Ihrer berechtigten Interessen getroffen wurden.
              </p>
              <p>
                Hinsichtlich der in (1) und (3) genannten Fälle trifft der Verantwortliche
                angemessene Maßnahmen, um die Rechte und Freiheiten sowie die berechtigten
                Interessen der betroffenen Person zu wahren, wozu mindestens das Recht auf Erwirkung
                des Eingreifens einer Person seitens des Verantwortlichen, auf Darlegung des eigenen
                Standpunkts und auf Anfechtung der Entscheidung gehört.
              </p>
              <li>Recht auf Beschwerde bei einer Aufsichtsbehörde</li>
              <p>
                Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen
                Rechtsbehelfs besteht das Recht auf Beschwerde bei einer Aufsichtsbehörde,
                insbesondere in dem Mitgliedstaat des Aufenthaltsorts der betroffenen Person, des
                Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, wenn die Ansicht besteht,
                dass die Verarbeitung der personenbezogenen Daten gegen die DSGVO verstößt.
              </p>
              <p>
                Die Aufsichtsbehörde, bei der die Beschwerde eingereicht wurde, unterrichtet den
                Beschwerdeführer über den Stand und die Ergebnisse der Beschwerde einschließlich der
                Möglichkeit eines gerichtlichen Rechtsbehelfs nach Art. 78 DSGVO.
              </p>
            </ol>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}
