import { useState } from 'react'

interface LegalPagesProps {
  page: 'impressum' | 'datenschutz' | 'agb' | 'widerruf'
  onClose: () => void
}

export default function LegalPages({ page, onClose }: LegalPagesProps) {
  const [activeTab, setActiveTab] = useState(page)

  const getPageContent = () => {
    switch (activeTab) {
      case 'impressum':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Impressum</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Angaben gemäß § 5 TMG</h3>
                <div className="mt-2 text-gray-700">
                  <p>Wettbergsmayr GbR</p>
                  <p>Theresienstr. 128</p>
                  <p>80333 München</p>
                  <p>Deutschland</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Vertreten durch</h3>
                <div className="mt-2 text-gray-700">
                  <p>Justus Wettich</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">Kontakt</h3>
                <div className="mt-2 text-gray-700">
                  <p>Telefon: +49 1577 5441055</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</h3>
                <div className="mt-2 text-gray-700">
                  <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
                </div>
              </div>
            </div>
          </div>
        )
      
      case 'datenschutz':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Datenschutzerklärung</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">1. Datenschutz auf einen Blick</h3>
                <div className="mt-2 text-gray-700">
                  <h4 className="font-medium text-gray-800 mb-2">Allgemeine Hinweise</h4>
                  <p className="mb-3">Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">Datenerfassung auf dieser Website</h3>
                <div className="mt-2 text-gray-700">
                  <h4 className="font-medium text-gray-800 mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
                  <p className="mb-3">Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.</p>

                  <h4 className="font-medium text-gray-800 mb-2">Wie erfassen wir Ihre Daten?</h4>
                  <p className="mb-3">Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
                  <p className="mb-3">Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p>

                  <h4 className="font-medium text-gray-800 mb-2">Wofür nutzen wir Ihre Daten?</h4>
                  <p className="mb-3">Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Sofern über die Website Verträge geschlossen oder angebahnt werden können, werden die übermittelten Daten auch für Vertragsangebote, Bestellungen oder sonstige Auftragsanfragen verarbeitet.</p>

                  <h4 className="font-medium text-gray-800 mb-2">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
                  <p className="mb-3">Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</p>
                  <p className="mb-3">Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">Analyse-Tools und Tools von Dritt­anbietern</h3>
                <div className="mt-2 text-gray-700">
                  <p className="mb-3">Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen.</p>
                  <p className="mb-3">Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">2. Hosting</h3>
                <div className="mt-2 text-gray-700">
                  <p className="mb-3">Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
                  <h4 className="font-medium text-gray-800 mb-2">Shopify</h4>
                  <p className="mb-3">Anbieter ist die Shopify International Limited, Victoria Buildings, 1-2 Haddington Road, Dublin 4, D04 XN32, Irland (nachfolgend „Shopify").</p>
                  <p className="mb-3">Shopify ist ein Tool zum Erstellen und zum Hosten von Webseiten. Wenn Sie unsere Website besuchen, erfasst Shopify Ihre IP-Adresse sowie Informationen über das von Ihnen verwendete Endgerät und Ihren Browser. Mit Shopify werden ferner die Besucherzahlen, die Besucherquellen das und Kundenverhalten analysiert sowie Nutzerstatistiken erstellt. Wenn Sie einen Kauf auf unserer Website tätigen, erfasst Shopify außerdem Ihren Namen, Ihre E-Mail-Adresse, Liefer- und Rechnungsadressen, Zahlungsdaten und sonstige Daten, die mit dem Kauf in Zusammenhang stehen (z. B. Telefonnummer, Höhe der getätigten Umsätze u.Ä.). Für die Analysen speichert Shopify Cookies in Ihrem Browser.</p>
                  <p className="mb-3">Details entnehmen Sie der Datenschutzerklärung von Shopify: <a href="https://www.shopify.de/legal/datenschutz" className="text-blue-600 hover:underline">https://www.shopify.de/legal/datenschutz</a>.</p>
                  <p className="mb-3">Die Verwendung von Shopify erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.</p>
                  <h4 className="font-medium text-gray-800 mb-2">Auftragsverarbeitung</h4>
                  <p className="mb-3">Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">3. Allgemeine Hinweise und Pflicht­informationen</h3>
                <div className="mt-2 text-gray-700">
                  <h4 className="font-medium text-gray-800 mb-2">Datenschutz</h4>
                  <p className="mb-3">Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
                  <p className="mb-3">Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.</p>
                  <p className="mb-3">Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>

                  <h4 className="font-medium text-gray-800 mb-2">Hinweis zur verantwortlichen Stelle</h4>
                  <p className="mb-3">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                  <p className="mb-3">Wettbergsmayr GbR<br />
                  Theresienstraße 128<br />
                  80333 München<br />
                  Deutschland</p>
                  <p className="mb-3">Vertretungsberechtigt: Justus Wettich</p>
                  <p className="mb-3">Telefon: +49 1577 5441055<br />
                  E-Mail: support@standaufsicht-zertifikat.de</p>
                  <p className="mb-3">Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">SSL- bzw. TLS-Verschlüsselung</h3>
                <div className="mt-2 text-gray-700">
                  <p className="mb-3">Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p>
                  <p className="mb-3">Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">Zahlungsdienste</h3>
                <div className="mt-2 text-gray-700">
                  <p className="mb-3">Wir binden Zahlungsdienste von Drittunternehmen auf unserer Website ein. Wenn Sie einen Kauf bei uns tätigen, werden Ihre Zahlungsdaten (z. B. Name, Zahlungssumme, Kontoverbindung, Kreditkartennummer) vom Zahlungsdienstleister zum Zwecke der Zahlungsabwicklung verarbeitet. Für diese Transaktionen gelten die jeweiligen Vertrags- und Datenschutzbestimmungen der jeweiligen Anbieter.</p>
                  <h4 className="font-medium text-gray-800 mb-2">PayPal</h4>
                  <p className="mb-3">Anbieter dieses Zahlungsdienstes ist PayPal (Europe) S.à.r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449 Luxembourg (im Folgenden „PayPal").</p>
                  <p className="mb-3">Details entnehmen Sie der Datenschutzerklärung von PayPal: <a href="https://www.paypal.com/de/webapps/mpp/ua/privacy-full" className="text-blue-600 hover:underline">https://www.paypal.com/de/webapps/mpp/ua/privacy-full</a>.</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">Ihre Rechte</h3>
                <div className="mt-2 text-gray-700">
                  <p className="mb-3">Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.</p>
                </div>
              </div>
            </div>
          </div>
        )
      
      case 'agb':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Allgemeine Geschäftsbedingungen</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">1. Geltungsbereich</h3>
                <div className="mt-2 text-gray-700">
                  <p className="mb-3">1.1. Für die Geschäftsbeziehung zwischen Wettbergsmayr (nachfolgend „Veranstalter") und dem Kunden (nachfolgend „Kunde") gelten ausschließlich die nachfolgenden Allgemeinen Geschäftsbedingungen in ihrer zum Zeitpunkt der Buchung gültigen Fassung.</p>
                  <p className="mb-3">1.2. Sie erreichen unseren Kundendienst für Fragen, Reklamationen und Beanstandungen per E-Mail unter wettbergsmayr@gmail.com.</p>
                  <p className="mb-3">1.3. Verbraucher im Sinne dieser AGB ist jede natürliche Person, die ein Rechtsgeschäft zu einem Zwecke abschließt, der überwiegend weder ihrer gewerblichen noch ihrer selbstständigen beruflichen Tätigkeit zugerechnet werden kann (§ 13 BGB).</p>
                  <p className="mb-3">1.4. Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei denn, der Veranstalter stimmt ihrer Geltung ausdrücklich zu.</p>
                  <p className="mb-3">1.5. Vorvertragliche Informationen gemäß Art. 246a § 1 EGBGB</p>
                  <p className="mb-3">Die folgenden Informationen stellt der Veranstalter dem Kunden vor Abschluss eines Vertrags zur Verfügung:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>a) Wesentliche Merkmale der Dienstleistung: Vermittlung von Online-Schulungsinhalten zur Qualifikation als verantwortliche Aufsichtsperson auf Schießständen (§ 27 WaffG), inkl. einer digitalen Prüfung und dem Ausstellen eines Zertifikats im Erfolgsfall.</li>
                    <li>b) Identität des Anbieters: Wettbergsmayr, vertreten durch [Name eintragen, z. B. Max Mustermann], E-Mail: wettbergsmayr@gmail.com</li>
                    <li>c) Gesamtpreis der Dienstleistung: Der angegebene Preis im Bestellprozess enthält alle Steuern und Gebühren.</li>
                    <li>d) Zahlungs-, Leistungs- und Lieferbedingungen: Die Zahlung erfolgt im Voraus. Die Leistungen werden ausschließlich digital erbracht, ein physischer Versand findet nicht statt.</li>
                    <li>e) Widerrufsrecht: Ein Widerrufsrecht besteht gemäß § 312g Abs. 2 Nr. 9 BGB nicht, da es sich um eine termingebundene Freizeitdienstleistung handelt.</li>
                    <li>f) Vertragslaufzeit: Es handelt sich um eine einmalige Leistung ohne automatische Verlängerung.</li>
                    <li>g) Technische Voraussetzungen: Für die Teilnahme sind ein stabiler Internetzugang, ein Computer oder mobiles Endgerät sowie ein aktueller Internetbrowser erforderlich.</li>
                    <li>h) Vertragssprache: Deutsch.</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">2. Angebote und Leistungsbeschreibungen</h3>
                <div className="mt-2 text-gray-700">
                  <p className="mb-3">Die Darstellung der Produkte im Online-Shop stellt kein rechtlich bindendes Angebot, sondern eine Aufforderung zur Abgabe einer Bestellung dar. Leistungsbeschreibungen in Katalogen sowie auf den Websites des Verkäufers haben nicht den Charakter einer Zusicherung oder Garantie.</p>
                  <p className="mb-3">Alle Angebote gelten „solange der Vorrat reicht", wenn nicht bei den Produkten etwas anderes vermerkt ist. Im Übrigen bleiben Irrtümer vorbehalten.</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">3. Bestellvorgang und Vertragsabschluss</h3>
                <div className="mt-2 text-gray-700">
                  <p className="mb-3">3.1. Der Kunde kann aus dem Sortiment des Verkäufers Produkte unverbindlich auswählen und diese über die Schaltfläche [in den Warenkorb] in einem so genannten Warenkorb sammeln. Innerhalb des Warenkorbes kann die Produktauswahl verändert, z.B. gelöscht werden. Anschließend kann der Kunde innerhalb des Warenkorbs über die Schaltfläche [Weiter zur Kasse] zum Abschluss des Bestellvorgangs schreiten.</p>
                  <p className="mb-3">3.2. Über die Schaltfläche [zahlungspflichtig bestellen] gibt der Kunde einen verbindlichen Antrag zum Kauf der im Warenkorb befindlichen Waren ab. Vor Abschicken der Bestellung kann der Kunde die Daten jederzeit ändern und einsehen sowie mithilfe der Browserfunktion "zurück" zum Warenkorb zurückgehen oder den Bestellvorgang insgesamt abbrechen. Notwendige Angaben sind mit einem Sternchen (*) gekennzeichnet.</p>
                  <p className="mb-3">3.3. Der Verkäufer schickt daraufhin dem Kunden eine automatische Empfangsbestätigung per E-Mail zu, in welcher die Bestellung des Kunden nochmals aufgeführt wird und die der Kunde über die Funktion „Drucken" ausdrucken kann (Bestellbestätigung). Die automatische Empfangsbestätigung dokumentiert lediglich, dass die Bestellung des Kunden beim Verkäufer eingegangen ist und stellt keine Annahme des Antrags dar. Der Kaufvertrag kommt erst dann zustande, wenn der Verkäufer die Rechnung innerhalb von maximal 5 Tagen an den Kunden versendet oder übergeben hat.</p>
                  <p className="mb-3">3.4. Sollte der Verkäufer eine Vorkassezahlung ermöglichen, kommt der Vertrag mit der Bereitstellung der Bankdaten und Zahlungsaufforderung zustande. Wenn die Zahlung trotz Fälligkeit auch nach erneuter Aufforderung nicht bis zu einem Zeitpunkt von 10 Kalendertagen nach Absendung der Bestellbestätigung beim Verkäufer oder zu Eventbeginn eingegangen ist, kann der Verkäufer vom Vertrag zurücktreten oder die Kosten einfordern. Die Bestellung ist dann für den Käufer und Verkäufer ohne weitere Folgen erledigt.</p>
                  <p className="mb-3">3.5. Technische Schritte zum Vertragsschluss</p>
                  <p className="mb-3">Der Bestellprozess erfolgt in mehreren Schritten:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Auswahl des gewünschten Online-Kurses und Hinzufügen zum Warenkorb</li>
                    <li>Prüfung der Warenkorbinhalte und Eingabe der Kundendaten</li>
                    <li>Auswahl der Zahlungsart</li>
                    <li>Kontrolle aller Angaben und Möglichkeit zur Korrektur über die „Zurück"-Funktion des Browsers</li>
                    <li>Verbindliche Abgabe der Bestellung durch Klick auf die Schaltfläche „zahlungspflichtig bestellen"</li>
                  </ul>
                  <p className="mb-3">3.6. Bestätigung und Speicherung</p>
                  <p className="mb-3">Der Kunde erhält unmittelbar nach dem Absenden der Bestellung eine Bestellbestätigung per E-Mail mit einer Übersicht über die gebuchten Leistungen sowie den AGB und der Widerrufsbelehrung auf einem dauerhaften Datenträger. Der Vertragstext wird vom Anbieter gespeichert, ist jedoch aus Sicherheitsgründen nicht dauerhaft online abrufbar.</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">4. Preise und Versandkosten</h3>
                <div className="mt-2 text-gray-700">
                  <p className="mb-3">4.1. Alle Preise, die auf der Website des Verkäufers angegeben sind, verstehen sich einschließlich der jeweils gültigen gesetzlichen Umsatzsteuer.</p>
                  <p className="mb-3">4.2. Zusätzlich zu den angegebenen Preisen können für bestimmte Leistungen Versandkosten berechnet werden. Sofern solche anfallen, werden sie dem Kunden auf einer gesonderten Informationsseite sowie im Rahmen des Bestellvorgangs deutlich mitgeteilt.</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">5. Lieferung</h3>
                <div className="mt-2 text-gray-700">
                  <p className="mb-3">5.1. Die Leistungen von Wettbergsmayr erfolgen je nach Angebot entweder digital oder vor Ort (z. B. im Rahmen von Lehrgängen und Veranstaltungen). Teilnahmebestätigungen und Zertifikate werden grundsätzlich per E-Mail oder über eine Onlineplattform übermittelt. Ein physischer Versand von Unterlagen erfolgt nur ausnahmsweise und wird gesondert angekündigt.</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">6. Zahlungsmodalitäten</h3>
                <div className="mt-2 text-gray-700">
                  <p className="mb-3">6.1. Der Kunde kann im Rahmen und vor Abschluss des Bestellvorgangs aus den zur Verfügung stehenden Zahlungsarten wählen. Die zur Verfügung stehenden Zahlungsmittel werden auf einer gesonderten Informationsseite dargestellt.</p>
                  <p className="mb-3">6.2. Ist die Bezahlung per Rechnung möglich, hat die Zahlung spätestens 5 Kalendertage vor Beginn der Dienstleistung nach Erhalt der Rechnung und ohne Abzug zu erfolgen. Bei allen anderen Zahlweisen hat die Zahlung im Voraus ohne Abzug zu erfolgen.</p>
                  <p className="mb-3">6.3. Werden Drittanbieter mit der Zahlungsabwicklung beauftragt, z. B. PayPal, gelten deren Allgemeine Geschäftsbedingungen.</p>
                  <p className="mb-3">6.4. Ist die Fälligkeit der Zahlung nach dem Kalender bestimmt, so kommt der Kunde bereits durch Versäumung des Termins in Verzug. In diesem Fall hat der Kunde die gesetzlichen Verzugszinsen zu zahlen.</p>
                  <p className="mb-3">6.5. Die Verpflichtung des Kunden zur Zahlung von Verzugszinsen schließt die Geltendmachung weiterer Verzugsschäden durch den Verkäufer nicht aus.</p>
                  <p className="mb-3">6.6. Der Kunde ist zur Aufrechnung nur berechtigt, wenn seine Gegenansprüche rechtskräftig festgestellt, unbestritten oder vom Verkäufer anerkannt sind. Ein Zurückbehaltungsrecht kann der Kunde nur ausüben, soweit es auf demselben Vertragsverhältnis beruht.</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">7. Garantie</h3>
                <div className="mt-2 text-gray-700">
                  <p className="mb-3">7.1. Die Gewährleistung bestimmt sich nach gesetzlichen Vorschriften.</p>
                  <p className="mb-3">7.2. Eine Garantie besteht bei den vom Verkäufer gelieferten Waren nur, wenn diese ausdrücklich abgegeben wurde. Kunden werden über die Garantiebedingungen vor der Einleitung des Bestellvorgangs informiert.</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">8. Haftung</h3>
                <div className="mt-2 text-gray-700">
                  <p className="mb-3">8.1. Für eine Haftung des Anbieters auf Schadensersatz gelten unbeschadet der sonstigen gesetzlichen Anspruchsvoraussetzungen folgende Haftungsausschlüsse und -begrenzungen.</p>
                  <p className="mb-3">8.2. Der Anbieter haftet unbeschränkt, soweit die Schadensursache auf Vorsatz oder grober Fahrlässigkeit beruht.</p>
                  <p className="mb-3">8.3. Ferner haftet der Anbieter für die leicht fahrlässige Verletzung von wesentlichen Pflichten, deren Verletzung die Erreichung des Vertragszwecks gefährdet, oder für die Verletzung von Pflichten, deren Erfüllung die ordnungsgemäße Durchführung des Vertrages überhaupt erst ermöglicht und auf deren Einhaltung der Kunde regelmäßig vertraut. In diesem Fall haftet der Anbieter jedoch nur für den vorhersehbaren, vertragstypischen Schaden. Der Anbieter haftet nicht für die leicht fahrlässige Verletzung anderer als der in den vorstehenden Sätzen genannten Pflichten.</p>
                  <p className="mb-3">8.4. Die vorstehenden Haftungsbeschränkungen gelten nicht bei Verletzung von Leben, Körper und Gesundheit, für einen Mangel nach Übernahme einer Garantie für die Beschaffenheit des Produktes und bei arglistig verschwiegenen Mängeln. Die Haftung nach dem Produkthaftungsgesetz bleibt unberührt.</p>
                  <p className="mb-3">8.5. Soweit die Haftung des Anbieters ausgeschlossen oder beschränkt ist, gilt dies auch für die persönliche Haftung von Arbeitnehmern, Vertretern und Erfüllungsgehilfen.</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">9. Speicherung des Vertragstextes</h3>
                <div className="mt-2 text-gray-700">
                  <p className="mb-3">9.1. Der Kunde kann den Vertragstext vor der Abgabe der Bestellung an den Verkäufer ausdrucken, indem er im letzten Schritt der Bestellung die Druckfunktion seines Browsers nutzt.</p>
                  <p className="mb-3">9.2. Der Verkäufer sendet dem Kunden außerdem eine Bestellbestätigung mit allen Bestelldaten an die von Ihm angegebene E-Mail-Adresse zu. Mit der Bestellbestätigung, spätestens jedoch bei der Lieferung der Ware, erhält der Kunde ferner eine Kopie der AGB nebst Widerrufsbelehrung und den Hinweisen zu Versandkosten sowie Liefer- und Zahlungsbedingungen. Sofern Sie sich in unserem Shop registriert haben sollten, können Sie in Ihrem Profilbereich Ihre aufgegebenen Bestellungen einsehen. Darüber hinaus speichern wir den Vertragstext, machen ihn jedoch im Internet nicht zugänglich.</p>
                  <p className="mb-3">9.3. Informationen zum Vertragsschluss gemäß § 312j Abs. 3 BGB</p>
                  <p className="mb-3">Vor Abgabe der Bestellung wird der Kunde klar und verständlich darauf hingewiesen, dass durch Betätigung der Schaltfläche „zahlungspflichtig bestellen" ein kostenpflichtiger Vertrag zustande kommt. Der vollständige Vertragstext einschließlich AGB, Leistungsbeschreibung, Zahlungs- und Lieferbedingungen sowie der gesetzlich vorgeschriebenen Verbraucherinformationen wird dem Kunden nach Vertragsschluss auf einem dauerhaften Datenträger (z. B. per E-Mail) zur Verfügung gestellt.</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">10. Sonstige Bestimmungen zu Dienstleistungen, Events und Veranstaltungen</h3>
                <div className="mt-2 text-gray-700">
                  <p className="mb-3">10.1 Stornierung: Eine Stornierung der Buchung ist ausgeschlossen, da es sich gemäß § 312g Abs. 2 Nr. 9 BGB um eine Dienstleistung aus dem Bereich der Freizeitbetätigung handelt, bei der für die Leistungserbringung ein spezifischer Termin vorgesehen ist (z. B. Prüfungsteilnahme).</p>
                  <p className="mb-3">10.2 Umbuchung: Eine Umbuchung auf einen anderen digitalen Prüfungstermin ist bis 7 Tage vor dem ursprünglich gewählten Termin gegen eine Bearbeitungsgebühr von 25 Euro möglich. Voraussetzung ist die Verfügbarkeit eines Ersatztermins durch den Anbieter.</p>
                  <p className="mb-3">10.3 Nicht-Teilnahme: Erscheint der Teilnehmer nicht zum gebuchten Online-Prüfungstermin, verfällt der Anspruch auf Teilnahme. Eine Rückerstattung erfolgt nicht.</p>
                  <p className="mb-3">10.4 Teilnehmerwechsel: Der Zugang zum Online-Prüfungssystem ist personengebunden und nicht übertragbar.</p>
                  <p className="mb-3">10.5 Volljährigkeit: Die Teilnahme an den angebotenen digitalen Zertifizierungen ist nur volljährigen Personen gestattet.</p>
                  <p className="mb-3">10.6 Verantwortungsbewusster Umgang: Teilnehmer verpflichten sich, die Inhalte der Schulung und Prüfung gewissenhaft zu absolvieren und versichern, nicht unter Einfluss von Alkohol, Medikamenten oder anderen Substanzen zu stehen, die die Wahrnehmung und Reaktionsfähigkeit einschränken könnten.</p>
                  <p className="mb-3">10.7 Der Anbieter behält sich vor, Teilnehmer von der Schulung oder Prüfung auszuschließen, wenn diese durch auffälliges Verhalten – insbesondere politisch motiviertes, radikales oder beleidigendes Auftreten – oder durch missbräuchliche Nutzung der digitalen Umgebung den Ablauf stören oder nach Einschätzung des Anbieters eine Gefährdung von Leib und Leben oder Eigentum anderer darstellen könnten. In solchen Fällen erlischt der Anspruch auf Teilnahme und Rückerstattung.</p>
                  <p className="mb-3">10.8 Identitätsnachweis und Haftungsausschluss: Teilnehmer müssen sich mit einem amtlichen Dokument (Personalausweis, Reisepass etc.) ausweisen und den Haftungsausschluss ausgefüllt und unterschrieben haben. Andernfalls erlischt der Anspruch auf die Leistung.</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">11. Schlussbestimmungen</h3>
                <div className="mt-2 text-gray-700">
                  <p className="mb-3">11.1 Gerichtstand und Erfüllungsort ist der Sitz des Verkäufers, wenn der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.</p>
                  <p className="mb-3">11.2. Vertragssprache ist deutsch.</p>
                  <p className="mb-3">11.3. Plattform der Europäischen Kommission zur Online-Streitbeilegung (OS) für Verbraucher: <a href="http://ec.europa.eu/consumers/odr/" className="text-blue-600 hover:underline">http://ec.europa.eu/consumers/odr/</a>. Wir sind nicht bereit und nicht verpflichtet an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
                  <p className="mb-3">11.4 Jegliche Nutzung der bereitgestellten Informationen, insbesondere durch automatisierte Systeme, bedarf der schriftlichen Zustimmung des Betreibers.</p>
                </div>
              </div>
            </div>
          </div>
        )
      
      case 'widerruf':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Widerrufsrecht</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Kein Widerrufsrecht bei digitalen Inhalten mit vorzeitigem Download</h3>
                <div className="mt-2 text-gray-700">
                  <p className="mb-3">Da es sich bei unserem Angebot um die Bereitstellung rein digitaler Inhalte handelt – insbesondere Schulungsunterlagen, Prüfungszugänge und personalisierte Zertifikate – besteht unter bestimmten Voraussetzungen kein Widerrufsrecht.</p>
                  <p className="mb-3">Mit Ihrer ausdrücklichen Zustimmung zur sofortigen Ausführung des Vertrags vor Ablauf der Widerrufsfrist und mit Ihrer Bestätigung, dass Sie mit dem Verlust des Widerrufsrechts einverstanden sind, verzichten Sie auf Ihr gesetzliches Widerrufsrecht gemäß § 356 Abs. 5 BGB.</p>
                  <p className="mb-3">Das bedeutet:</p>
                  <p className="mb-3">Sobald Sie nach dem Kauf Zugriff auf die digitalen Inhalte erhalten – etwa durch den Download, die E-Mail-Zustellung oder die Aktivierung des Prüfungszugangs –, ist ein Widerruf ausgeschlossen.</p>
                  <p className="mb-3">Wir danken für Ihr Verständnis.</p>
                </div>
              </div>
            </div>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b">
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab('impressum')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'impressum'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Impressum
            </button>
            <button
              onClick={() => setActiveTab('datenschutz')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'datenschutz'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Datenschutz
            </button>
            <button
              onClick={() => setActiveTab('agb')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'agb'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              AGB
            </button>
            <button
              onClick={() => setActiveTab('widerruf')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'widerruf'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Widerruf
            </button>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <span className="sr-only">Schließen</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-8rem)]">
          {getPageContent()}
        </div>
      </div>
    </div>
  )
} 