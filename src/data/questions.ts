export interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: string
  hint: string
}

export const questions: Question[] = [
  {
    id: 1,
    question: "Wann ist eine Sachkundeprüfung nach § 34a GewO verpflichtend?",
    options: [
      "Bei jeder Berufsausbildung",
      "Bei Bürotätigkeiten in der Sicherheitsbranche", 
      "Nur für Wachpersonen mit Waffentraining",
      "Bei Tätigkeiten mit Publikumsverkehr (z. B. Citystreifen)"
    ],
    correctAnswer: "D",
    hint: "Die Sachkundeprüfung ist nur bei bestimmten Tätigkeiten mit direktem Publikumskontakt verpflichtend."
  },
  {
    id: 2,
    question: "Was ist das Ziel der Sachkundeprüfung nach § 34a GewO?",
    options: [
      "Steuerliche Anmeldung beim Gewerbeamt",
      "Berechtigung zum Polizeidienst",
      "Nachweis gesetzlicher Mindestkenntnisse für bestimmte Bewachungstätigkeiten",
      "Erlaubnis zum Betreiben eines Unternehmens"
    ],
    correctAnswer: "C",
    hint: "Die Prüfung dient dem Nachweis, dass die erforderlichen rechtlichen Kenntnisse für die Bewachungstätigkeit vorhanden sind."
  },
  {
    id: 3,
    question: "Was regelt die Bewachungsverordnung (BewachV)?",
    options: [
      "Die Gewerbesteuerpflicht von Sicherheitsfirmen",
      "Das Verhalten von Besuchern",
      "Die Prüfungsinhalte der IHK",
      "Die Anforderungen an Bewachungspersonal und Unternehmen"
    ],
    correctAnswer: "D",
    hint: "Die BewachV regelt die spezifischen Anforderungen und Qualifikationen für das Bewachungsgewerbe."
  },
  {
    id: 4,
    question: "Was bedeutet Notwehr gemäß § 32 StGB?",
    options: [
      "Reaktion auf mündliche Beleidigung",
      "Verteidigung gegen einen gegenwärtigen, rechtswidrigen Angriff",
      "Vorbeugung gegen zukünftige Gefahr",
      "Strafe für Täter"
    ],
    correctAnswer: "B",
    hint: "Notwehr ist nur bei einem aktuellen, rechtswidrigen Angriff erlaubt, nicht bei vergangenen oder zukünftigen Bedrohungen."
  },
  {
    id: 5,
    question: "Wann darf eine Sicherheitskraft eine Person festhalten?",
    options: [
      "Wenn sie zu laut spricht",
      "Wenn sie keine Maske trägt",
      "Bei Verdacht auf Ordnungswidrigkeit",
      "Bei frischer Tat nach § 127 StPO"
    ],
    correctAnswer: "D",
    hint: "Das Festhalten ist nur bei frischer Tat und Fluchtverdacht nach § 127 StPO (Jedermannsrecht) erlaubt."
  },
  {
    id: 6,
    question: "Was bedeutet 'Hausrecht'?",
    options: [
      "Nur die Polizei darf Maßnahmen im Haus ergreifen",
      "Sicherheitsmitarbeiter dürfen jederzeit Taschen kontrollieren",
      "Der Eigentümer darf bestimmen, wer Zutritt hat",
      "Jeder Gast hat ein Mitspracherecht"
    ],
    correctAnswer: "C",
    hint: "Das Hausrecht liegt beim Eigentümer und kann an Bevollmächtigte wie Sicherheitsdienste übertragen werden."
  },
  {
    id: 7,
    question: "Welche Aussage zum Datenschutz (DSGVO) ist korrekt?",
    options: [
      "Daten dürfen ohne Zweck gesammelt werden",
      "Datenverarbeitung ist immer erlaubt",
      "Daten dürfen nur mit rechtlicher Grundlage verarbeitet werden",
      "Mündliche Zustimmung genügt immer"
    ],
    correctAnswer: "C",
    hint: "Die DSGVO verlangt eine rechtliche Grundlage für jede Datenverarbeitung."
  },
  {
    id: 8,
    question: "Was ist bei Taschenkontrollen durch Security zu beachten?",
    options: [
      "Sie dürfen heimlich erfolgen",
      "Sie sind bei allen Besuchern Pflicht",
      "Sie sind nur mit freiwilliger Zustimmung erlaubt",
      "Sie müssen immer mit Polizeiabsprache erfolgen"
    ],
    correctAnswer: "C",
    hint: "Taschenkontrollen sind Eingriffe in die Privatsphäre und erfordern die freiwillige Zustimmung der Person."
  },
  {
    id: 9,
    question: "Was ist ein Beispiel für Deeskalation?",
    options: [
      "Schreien, um Aufmerksamkeit zu erzeugen",
      "Ruhiger Ton und aktives Zuhören",
      "Provokatives Auftreten",
      "Hände verschränken und abschotten"
    ],
    correctAnswer: "B",
    hint: "Deeskalation bedeutet, durch ruhige Kommunikation und Verständnis Konflikte zu entschärfen."
  },
  {
    id: 10,
    question: "Was ist bei medizinischen Notfällen Pflicht?",
    options: [
      "Auf Rettungskräfte warten",
      "Videoaufnahme zur Dokumentation",
      "Hilfe leisten im Rahmen der Möglichkeiten",
      "Die Situation ignorieren"
    ],
    correctAnswer: "C",
    hint: "Nach § 323c StGB besteht die Pflicht zur Hilfeleistung, soweit es zumutbar ist."
  },
  {
    id: 11,
    question: "Welche Aussage zur Bewachung öffentlicher Veranstaltungen ist korrekt?",
    options: [
      "Es gelten keine rechtlichen Vorschriften",
      "Jeder darf ohne Prüfung eingesetzt werden",
      "Bewachungspersonal braucht § 34a-Nachweis",
      "Kontrolle ist Sache der Polizei"
    ],
    correctAnswer: "C",
    hint: "Für die Bewachung öffentlicher Veranstaltungen ist der § 34a-Nachweis zwingend erforderlich."
  },
  {
    id: 12,
    question: "Wofür steht das 'Jedermannsrecht' nach § 127 StPO?",
    options: [
      "Jeder darf jemanden dauerhaft festnehmen",
      "Jeder darf bei frischer Tat eine Person vorläufig festhalten",
      "Jeder darf Verdächtige verhören",
      "Jeder darf auf eigene Faust ermitteln"
    ],
    correctAnswer: "B",
    hint: "Das Jedermannsrecht erlaubt nur die vorläufige Festnahme bei frischer Tat und Fluchtverdacht."
  },
  {
    id: 13,
    question: "Was gehört zu den Grundpflichten im Sicherheitsdienst?",
    options: [
      "Eigenständige Festnahmen durchführen",
      "Immer bewaffnet auftreten",
      "Schweigepflicht und Dokumentationspflicht",
      "Persönliche Meinungen durchsetzen"
    ],
    correctAnswer: "C",
    hint: "Sicherheitskräfte haben eine Schweigepflicht bezüglich sensibler Informationen und müssen alle Vorfälle dokumentieren."
  },
  {
    id: 14,
    question: "Was ist kein zulässiger Grund für eine Taschenkontrolle?",
    options: [
      "Allgemeines Misstrauen",
      "Freiwillige Zustimmung",
      "Hausrechtliche Vorgabe",
      "Verdacht auf Diebstahl"
    ],
    correctAnswer: "A",
    hint: "Allgemeines Misstrauen ohne konkreten Anlass ist kein rechtmäßiger Grund für eine Taschenkontrolle."
  },
  {
    id: 15,
    question: "Welche Aussage zur IHK-Prüfung ist korrekt?",
    options: [
      "Es gibt zwei Prüfungsteile: schriftlich & mündlich",
      "Sie dauert 3 Stunden",
      "Sie enthält offene Fragen",
      "Es handelt sich um eine schriftliche Multiple-Choice-Prüfung"
    ],
    correctAnswer: "D",
    hint: "Die IHK-Sachkundeprüfung ist eine reine schriftliche Multiple-Choice-Prüfung."
  },
  {
    id: 16,
    question: "Wann gilt eine Person als 'zuverlässig' im Sinne der BewachV?",
    options: [
      "Wenn sie freundlich ist",
      "Wenn sie bei der Polizei arbeitet",
      "Wenn sie keine schweren Vorstrafen hat",
      "Wenn sie einen Erste-Hilfe-Kurs gemacht hat"
    ],
    correctAnswer: "C",
    hint: "Zuverlässigkeit bedeutet vor allem, dass keine schweren Vorstrafen vorliegen, die gegen die Tätigkeit sprechen."
  },
  {
    id: 17,
    question: "Was ist ein typischer Aufgabenbereich im Objektschutz?",
    options: [
      "Strafverfolgung",
      "Aufklärung von Wirtschaftskriminalität",
      "Kontrolle von Gebäuden auf Unregelmäßigkeiten",
      "Ermittlung von Schulden"
    ],
    correctAnswer: "C",
    hint: "Objektschutz umfasst die Überwachung und Kontrolle von Gebäuden und deren Sicherheit."
  },
  {
    id: 18,
    question: "Was gilt bei Videoüberwachung?",
    options: [
      "Sie muss geheim sein",
      "Sie darf unkommentiert online gestellt werden",
      "Sie muss kenntlich gemacht und gerechtfertigt sein",
      "Sie darf nie angewendet werden"
    ],
    correctAnswer: "C",
    hint: "Videoüberwachung muss klar erkennbar sein und einen berechtigten Zweck haben."
  },
  {
    id: 19,
    question: "Was versteht man unter Deeskalation?",
    options: [
      "Überlegenheit demonstrieren",
      "Konflikte durch Kommunikation vermeiden oder entschärfen",
      "Täter öffentlich bloßstellen",
      "Polizei direkt bedrohen"
    ],
    correctAnswer: "B",
    hint: "Deeskalation zielt darauf ab, Konflikte durch geschickte Kommunikation zu vermeiden oder zu entschärfen."
  },
  {
    id: 20,
    question: "Was bedeutet Verhältnismäßigkeit im Sicherheitsdienst?",
    options: [
      "Maßnahmen dürfen willkürlich sein",
      "Mittel müssen im Verhältnis zur Bedrohung stehen",
      "Es gibt keine Beschränkungen",
      "Alles ist erlaubt, solange es dem Ziel dient"
    ],
    correctAnswer: "B",
    hint: "Verhältnismäßigkeit bedeutet, dass die Maßnahmen angemessen zur Bedrohung sein müssen."
  },
  {
    id: 21,
    question: "Was ist ein Alarmplan?",
    options: [
      "Ein Notizbuch für Wachleute",
      "Eine Anleitung für private Konflikte",
      "Ein festgelegtes Vorgehen bei Gefahrensituationen",
      "Eine Liste der Firmenkontakte"
    ],
    correctAnswer: "C",
    hint: "Ein Alarmplan legt fest, wie bei verschiedenen Gefahrensituationen vorgegangen werden soll."
  },
  {
    id: 22,
    question: "Wer übt das Hausrecht aus?",
    options: [
      "Nur die Polizei",
      "Jeder Mieter",
      "Der Eigentümer oder beauftragte Person (z. B. Sicherheitsdienst)",
      "Nur der Bürgermeister"
    ],
    correctAnswer: "C",
    hint: "Das Hausrecht liegt beim Eigentümer und kann an beauftragte Personen übertragen werden."
  },
  {
    id: 23,
    question: "Was ist laut DSGVO besonders schützenswert?",
    options: [
      "Werbeprospekte",
      "Allgemeine Öffnungszeiten",
      "Gesundheitsdaten und biometrische Merkmale",
      "Fotos von Haustieren"
    ],
    correctAnswer: "C",
    hint: "Besondere Kategorien personenbezogener Daten wie Gesundheitsdaten haben erhöhten Schutz."
  },
  {
    id: 24,
    question: "Was bedeutet die Abkürzung IHK?",
    options: [
      "Internationale Handelskammer",
      "Institution für Handelskontrolle",
      "Industrie- und Handelskammer",
      "Innung für Handwerkerkollegen"
    ],
    correctAnswer: "C",
    hint: "IHK steht für Industrie- und Handelskammer."
  },
  {
    id: 25,
    question: "Wann darf Sicherheitsdienst eine Person durchsuchen?",
    options: [
      "Bei Verdacht allein",
      "Nie",
      "Nur mit ausdrücklicher Zustimmung oder gesetzlicher Grundlage",
      "Wenn man 'Hausrecht' sagt"
    ],
    correctAnswer: "C",
    hint: "Durchsuchungen sind schwere Grundrechtseingriffe und erfordern eine klare rechtliche Grundlage."
  },
  {
    id: 26,
    question: "Welche Aufgabe gehört zur Zugangskontrolle?",
    options: [
      "Akten sortieren",
      "Berechtigungen prüfen und unbefugten Zutritt verhindern",
      "Bewirtung von Gästen",
      "Werbematerial verteilen"
    ],
    correctAnswer: "B",
    hint: "Zugangskontrolle dient der Sicherheit durch Prüfung von Berechtigungen und Verhinderung unbefugten Zutritts."
  },
  {
    id: 27,
    question: "Was ist bei der Schichtübergabe wichtig?",
    options: [
      "Persönliche Beschwerden äußern",
      "Privates teilen",
      "Alle besonderen Vorkommnisse dokumentieren und übergeben",
      "Schlüssel zu Hause lassen"
    ],
    correctAnswer: "C",
    hint: "Die Schichtübergabe muss alle sicherheitsrelevanten Informationen vollständig übertragen."
  },
  {
    id: 28,
    question: "Welche Aussage zur Uniformpflicht stimmt?",
    options: [
      "Es gibt keine Pflicht",
      "Uniform ist nur Deko",
      "Bei vorgeschriebener Kleidung muss diese erkennbar getragen werden",
      "Uniform darf privat kombiniert werden"
    ],
    correctAnswer: "C",
    hint: "Dienstkleidung muss klar erkennbar sein und darf nicht privat getragen werden."
  },
  {
    id: 29,
    question: "Wann ist eine Identitätsfeststellung erlaubt?",
    options: [
      "Wenn man neugierig ist",
      "Wenn jemand verdächtig wirkt",
      "Nur mit Zustimmung oder gesetzlicher Befugnis",
      "Immer bei Veranstaltungen"
    ],
    correctAnswer: "C",
    hint: "Identitätsfeststellung ist ein Grundrechtseingriff und erfordert eine rechtliche Grundlage."
  },
  {
    id: 30,
    question: "Was bedeutet der Begriff 'Waffensachkunde'?",
    options: [
      "Kenntnis über Tierabwehr",
      "Theoretische Kenntnisse über Kampfkunst",
      "Ausbildung zum Umgang mit Waffen nach § 7 WaffG",
      "Erfahrung mit Computerspielen"
    ],
    correctAnswer: "C",
    hint: "Waffensachkunde ist eine spezielle Ausbildung nach dem Waffengesetz."
  },
  {
    id: 31,
    question: "Was darf ein Security-Mitarbeiter mit § 34a-Zertifikat nicht tun?",
    options: [
      "Zutritt verweigern",
      "Zwang anwenden oder durchsuchen ohne rechtliche Grundlage",
      "Kunden ansprechen",
      "Kontrollgänge durchführen"
    ],
    correctAnswer: "B",
    hint: "Auch mit § 34a-Zertifikat dürfen keine rechtswidrigen Maßnahmen ergriffen werden."
  },
  {
    id: 32,
    question: "Wann gilt eine Maßnahme als verhältnismäßig?",
    options: [
      "Wenn sie möglichst hart wirkt",
      "Wenn sie geeignet, erforderlich und angemessen ist",
      "Wenn sie schnell erfolgt",
      "Wenn sie Eindruck macht"
    ],
    correctAnswer: "B",
    hint: "Verhältnismäßigkeit erfordert, dass die Maßnahme geeignet, erforderlich und angemessen ist."
  },
  {
    id: 33,
    question: "Wer ist Aufsicht führend am Objekt?",
    options: [
      "Der Kunde",
      "Die Polizei",
      "Der Schichtleiter bzw. Verantwortliche vor Ort",
      "Der Reinigungsdienst"
    ],
    correctAnswer: "C",
    hint: "Der Schichtleiter oder Objektverantwortliche führt die Aufsicht vor Ort."
  },
  {
    id: 34,
    question: "Was beschreibt eine Gefährdungsbeurteilung?",
    options: [
      "Einschätzung, wie beliebt der Job ist",
      "Bewertung der Stimmungslage im Team",
      "Analyse möglicher Gefahrenquellen am Arbeitsplatz",
      "Bewertung von Bewerbungsgesprächen"
    ],
    correctAnswer: "C",
    hint: "Gefährdungsbeurteilung analysiert systematisch alle Gefahrenquellen am Arbeitsplatz."
  },
  {
    id: 35,
    question: "Was sollte im Umgang mit aggressiven Personen vermieden werden?",
    options: [
      "Ruhiger Ton",
      "Drohungen oder abwertende Bemerkungen",
      "Distanz",
      "Blickkontakt"
    ],
    correctAnswer: "B",
    hint: "Drohungen und abwertende Bemerkungen führen zur Eskalation und sollten vermieden werden."
  },
  {
    id: 36,
    question: "Was ist ein Fluchtweg?",
    options: [
      "Ein versteckter Eingang",
      "Eine Sicherheitslücke",
      "Ein freizuhaltender Weg zur Rettung im Notfall",
      "Ein Geheimtunnel"
    ],
    correctAnswer: "C",
    hint: "Fluchtwege sind freigehaltene Wege, die im Notfall zur Rettung genutzt werden."
  },
  {
    id: 37,
    question: "Was ist bei Brandgefahr zu tun?",
    options: [
      "Auf Regen hoffen",
      "Alarmieren, retten, löschen – Eigenschutz beachten",
      "Fenster schließen und weiterarbeiten",
      "Abwarten und Tee trinken"
    ],
    correctAnswer: "B",
    hint: "Bei Brandgefahr gilt: Alarmieren, Retten, Löschen – dabei immer Eigenschutz beachten."
  },
  {
    id: 38,
    question: "Was ist ein legitimer Grund zur Zutrittsverweigerung?",
    options: [
      "Persönliche Antipathie",
      "Kleidungsstil",
      "Hausrechtliche Regelverletzung (z. B. Alkohol, Gewaltbereitschaft)",
      "Dialekt"
    ],
    correctAnswer: "C",
    hint: "Nur objektive Gründe wie Regelverletzungen rechtfertigen Zutrittsverweigerung."
  },
  {
    id: 39,
    question: "Wann greift das Jedermannsrecht (§ 127 StPO)?",
    options: [
      "Wenn jemand beleidigt wird",
      "Bei frischer Tat und Fluchtverdacht",
      "Bei allgemeinem Unwohlsein",
      "Nur mit richterlicher Anordnung"
    ],
    correctAnswer: "B",
    hint: "Das Jedermannsrecht greift nur bei frischer Tat und Fluchtverdacht."
  },
  {
    id: 40,
    question: "Wofür steht die Abkürzung DSGVO?",
    options: [
      "Deutscher Sicherheitsgesetz-Verbund",
      "Datenschutz-Grundverordnung",
      "Datenschutz-Grundverordnung",
      "Dienststelle gegen Sicherheitsbedrohung"
    ],
    correctAnswer: "C",
    hint: "DSGVO steht für Datenschutz-Grundverordnung."
  },
  {
    id: 41,
    question: "Was gehört zu den Aufgaben eines Revierdienstes?",
    options: [
      "Personenüberwachung rund um die Uhr",
      "Leitung der Polizei in Sonderschichten",
      "Kontrollfahrten zwischen mehreren Objekten",
      "Aktenführung in Sicherheitsbüros"
    ],
    correctAnswer: "C",
    hint: "Revierdienst führt Kontrollfahrten zwischen verschiedenen Objekten durch."
  },
  {
    id: 42,
    question: "Welche Information muss ein Sicherheitsausweis nach § 11 BewachV enthalten?",
    options: [
      "Die Telefonnummer des Kunden",
      "Name, Vorname, Lichtbild, Arbeitgeber",
      "Kontodaten",
      "Der Lieblingsspruch des Mitarbeiters"
    ],
    correctAnswer: "B",
    hint: "Der Sicherheitsausweis muss Name, Vorname, Lichtbild und Arbeitgeber enthalten."
  },
  {
    id: 43,
    question: "Wer darf ein Hausverbot aussprechen?",
    options: [
      "Nur Polizeibeamte",
      "Der Hausrechtsinhaber oder Bevollmächtigte",
      "Alle Gäste",
      "Nur Mitarbeiter mit Uniform"
    ],
    correctAnswer: "B",
    hint: "Hausverbote dürfen nur vom Hausrechtsinhaber oder Bevollmächtigten ausgesprochen werden."
  },
  {
    id: 44,
    question: "Was ist bei der Durchführung von Kontrollgängen besonders wichtig?",
    options: [
      "Unterhaltung mit Besuchern",
      "Musik hören zur Motivation",
      "Systematische und vollständige Kontrolle sowie Dokumentation",
      "Eigene Wege gehen"
    ],
    correctAnswer: "C",
    hint: "Kontrollgänge müssen systematisch, vollständig und dokumentiert durchgeführt werden."
  },
  {
    id: 45,
    question: "Was muss beim Tragen einer Dienstkleidung beachtet werden?",
    options: [
      "Sie muss schick sein",
      "Sie muss eindeutig als Sicherheitsdienst erkennbar sein",
      "Sie darf selbst gestaltet werden",
      "Sie muss weiß sein"
    ],
    correctAnswer: "B",
    hint: "Dienstkleidung muss eindeutig als Sicherheitsdienst erkennbar sein."
  },
  {
    id: 46,
    question: "Welche rechtliche Grundlage regelt die Rechte zur Notwehr?",
    options: [
      "§ 34 GewO",
      "§ 32 StGB",
      "§ 7 WaffG",
      "§ 38 BGB"
    ],
    correctAnswer: "B",
    hint: "Die Notwehr ist in § 32 StGB geregelt."
  },
  {
    id: 47,
    question: "Wann darf der Einsatz von Körperkraft erfolgen?",
    options: [
      "Immer bei Widerspruch",
      "Nur in Notwehr oder bei frischer Tat gemäß § 127 StPO",
      "Wenn jemand rennt",
      "Bei Unpünktlichkeit"
    ],
    correctAnswer: "B",
    hint: "Körperkraft ist nur in Notwehr oder bei frischer Tat nach § 127 StPO erlaubt."
  },
  {
    id: 48,
    question: "Was versteht man unter Eigensicherung?",
    options: [
      "Finanzielle Rücklagen bilden",
      "Maßnahmen zum Selbstschutz bei gefährlichen Einsätzen",
      "Die Selbstverteidigung mit Waffen",
      "Den Kollegen beobachten"
    ],
    correctAnswer: "B",
    hint: "Eigensicherung umfasst alle Maßnahmen zum Selbstschutz bei Einsätzen."
  },
  {
    id: 49,
    question: "Welche Aussage zur Schweigepflicht ist korrekt?",
    options: [
      "Sie gilt nur im Krankenhaus",
      "Sie gilt auch für Sicherheitsmitarbeiter – sensible Daten dürfen nicht weitergegeben werden",
      "Sie endet bei Kollegen",
      "Sie ist nicht verpflichtend"
    ],
    correctAnswer: "B",
    hint: "Sicherheitsmitarbeiter unterliegen der Schweigepflicht bezüglich sensibler Daten."
  },
  {
    id: 50,
    question: "Wann darf Videoüberwachung im Eingangsbereich eines Geschäfts erfolgen?",
    options: [
      "Nie",
      "Nur mit Hinweis und berechtigtem Interesse",
      "Wenn es der Hausmeister erlaubt",
      "Nur bei laufendem Betrieb"
    ],
    correctAnswer: "B",
    hint: "Videoüberwachung erfordert Hinweise und berechtigtes Interesse."
  },
  {
    id: 51,
    question: "Was ist ein Beispiel für eine Eskalation?",
    options: [
      "Ein höfliches Gespräch",
      "Ein Streit, der in körperliche Gewalt übergeht",
      "Eine ruhige Bitte",
      "Eine schriftliche Verwarnung"
    ],
    correctAnswer: "B",
    hint: "Eskalation bedeutet die Steigerung eines Konflikts zu höherer Intensität."
  },
  {
    id: 52,
    question: "Was ist das Ziel der Deeskalation?",
    options: [
      "Rückzug um jeden Preis",
      "Eskalation vorbereiten",
      "Konflikte frühzeitig erkennen und friedlich lösen",
      "Lautstärke erhöhen"
    ],
    correctAnswer: "C",
    hint: "Deeskalation zielt auf die friedliche Lösung von Konflikten ab."
  },
  {
    id: 53,
    question: "Was gehört zur Arbeitssicherheit?",
    options: [
      "Zigarettenpausen regeln",
      "Beschwerden ignorieren",
      "Vermeidung von Gefahrenquellen und Unfällen",
      "Lautes Rufen bei Stress"
    ],
    correctAnswer: "C",
    hint: "Arbeitssicherheit umfasst die Vermeidung von Gefahrenquellen und Unfällen."
  },
  {
    id: 54,
    question: "Welche Aussage zu Brandschutz ist korrekt?",
    options: [
      "Nur Feuerwehrleute müssen sich auskennen",
      "Feuerlöscher sind Deko",
      "Fluchtwege müssen immer freigehalten werden",
      "Rauchmelder sind optional"
    ],
    correctAnswer: "C",
    hint: "Fluchtwege müssen immer freigehalten werden für den Notfall."
  },
  {
    id: 55,
    question: "Wer trägt die Verantwortung für korrektes Verhalten im Einsatz?",
    options: [
      "Nur der Arbeitgeber",
      "Nur der Kunde",
      "Jeder Mitarbeiter selbst",
      "Niemand"
    ],
    correctAnswer: "C",
    hint: "Jeder Mitarbeiter trägt die Verantwortung für sein eigenes korrektes Verhalten."
  },
  {
    id: 56,
    question: "Welche Aussage zur Taschenkontrolle ist korrekt?",
    options: [
      "Sie darf immer heimlich erfolgen",
      "Sie ist Pflicht für jeden",
      "Sie erfordert Einwilligung oder rechtliche Grundlage",
      "Sie ist nur mit Waffe erlaubt"
    ],
    correctAnswer: "C",
    hint: "Taschenkontrollen sind nur mit Einwilligung oder rechtlicher Grundlage erlaubt."
  },
  {
    id: 57,
    question: "Welche Aufgabe fällt nicht in den Bereich Sicherheitsdienst?",
    options: [
      "Revierkontrollen",
      "Zugangskontrolle",
      "Steuerberatung",
      "Veranstaltungsschutz"
    ],
    correctAnswer: "C",
    hint: "Steuerberatung ist nicht Teil des Sicherheitsdienstes."
  },
  {
    id: 58,
    question: "Was ist eine Ordnungswidrigkeit?",
    options: [
      "Eine schwere Straftat",
      "Ein geringfügiger Gesetzesverstoß, z. B. Ruhestörung",
      "Ein Vertragsbruch",
      "Ein Pflichtverstoß im Unternehmen"
    ],
    correctAnswer: "B",
    hint: "Ordnungswidrigkeiten sind geringfügige Gesetzesverstöße mit Bußgeld."
  },
  {
    id: 59,
    question: "Was muss bei einem Fund (z. B. Tasche) getan werden?",
    options: [
      "Öffnen und Inhalt prüfen",
      "Mitnehmen",
      "Fund sichern und Meldung an zuständige Stelle machen",
      "Ignorieren"
    ],
    correctAnswer: "C",
    hint: "Funde müssen gesichert und an die zuständige Stelle gemeldet werden."
  },
  {
    id: 60,
    question: "Was ist eine Voraussetzung für die Tätigkeit im Sicherheitsdienst?",
    options: [
      "KFZ-Zulassung",
      "Zuverlässigkeit im Sinne der BewachV",
      "Wohnsitz im Ausland",
      "Mitgliedschaft in der Gewerkschaft"
    ],
    correctAnswer: "B",
    hint: "Zuverlässigkeit im Sinne der BewachV ist eine Grundvoraussetzung."
  },
  {
    id: 61,
    question: "Was bedeutet 'geeignetes Verhalten' im Sicherheitsdienst?",
    options: [
      "Lautes Auftreten zur Abschreckung",
      "Lockere Haltung gegenüber Regeln",
      "Sachliches, ruhiges und situationsangepasstes Handeln",
      "Strikte Ablehnung von Gesprächsangeboten"
    ],
    correctAnswer: "C",
    hint: "Geeignetes Verhalten ist sachlich, ruhig und situationsangepasst."
  },
  {
    id: 62,
    question: "Was gehört nicht zur Eigensicherung?",
    options: [
      "Abstand halten",
      "Überblick behalten",
      "Rückendeckung durch Kollegen",
      "Provokatives Verhalten gegenüber Störern"
    ],
    correctAnswer: "D",
    hint: "Provokatives Verhalten gefährdet die Eigensicherung und sollte vermieden werden."
  },
  {
    id: 63,
    question: "Was ist das Ziel der Dokumentation im Sicherheitsdienst?",
    options: [
      "Zeitvertreib während der Schicht",
      "Kontrolle der Kollegen",
      "Nachweis und Nachvollziehbarkeit von Vorfällen",
      "Datenspeicherung zur Werbung"
    ],
    correctAnswer: "C",
    hint: "Dokumentation dient dem Nachweis und der Nachvollziehbarkeit von Vorfällen."
  },
  {
    id: 64,
    question: "Was ist bei einem Brand zu tun?",
    options: [
      "Flucht ohne Meldung",
      "Wasser holen",
      "Alarmieren – Retten – Löschen (Eigenschutz geht vor!)",
      "Erst Löschen, dann Hilfe rufen"
    ],
    correctAnswer: "C",
    hint: "Bei Brand gilt: Alarmieren, Retten, Löschen – Eigenschutz geht vor."
  },
  {
    id: 65,
    question: "Was bedeutet der Begriff 'Wachperson' in der BewachV?",
    options: [
      "Nur bewaffnete Sicherheitskräfte",
      "Jede Person, die mit Schutz- oder Kontrollaufgaben betraut ist",
      "Nur Polizei",
      "Nur im Schichtdienst tätige Personen"
    ],
    correctAnswer: "B",
    hint: "Wachperson ist jede Person mit Schutz- oder Kontrollaufgaben."
  },
  {
    id: 66,
    question: "Welche Aussage zur Videoüberwachung ist korrekt?",
    options: [
      "Nur erlaubt, wenn heimlich",
      "Nur erlaubt mit Hinweis und berechtigtem Interesse",
      "Immer erlaubt",
      "Muss öffentlich gestreamt werden"
    ],
    correctAnswer: "B",
    hint: "Videoüberwachung ist nur mit Hinweis und berechtigtem Interesse erlaubt."
  },
  {
    id: 67,
    question: "Was ist die Mindestanforderung an das Bestehen der Sachkundeprüfung?",
    options: [
      "80 % der Fragen richtig",
      "Nur Anwesenheit",
      "Mindestens 50 % richtige Antworten",
      "Bestehen der mündlichen Prüfung"
    ],
    correctAnswer: "C",
    hint: "Die Sachkundeprüfung gilt mit mindestens 50% richtigen Antworten als bestanden."
  },
  {
    id: 68,
    question: "Welche Maßnahme ist bei einer gefährlichen Situation unangemessen?",
    options: [
      "Hilfe holen",
      "Rückzug zur Eigensicherung",
      "Eskalation provozieren",
      "Kollegen informieren"
    ],
    correctAnswer: "C",
    hint: "Das Provozieren einer Eskalation ist immer unangemessen und gefährlich."
  },
  {
    id: 69,
    question: "Was bedeutet die Schweigepflicht für Sicherheitskräfte?",
    options: [
      "Nur bei Dienstende relevant",
      "Verbot der Weitergabe vertraulicher Informationen",
      "Gilt nur bei Polizei-Einsätzen",
      "Kann ignoriert werden"
    ],
    correctAnswer: "B",
    hint: "Schweigepflicht bedeutet das Verbot der Weitergabe vertraulicher Informationen."
  },
  {
    id: 70,
    question: "Was ist eine Ordnungswidrigkeit?",
    options: [
      "Strafbares Verhalten mit Freiheitsstrafe",
      "Gesetzesverstoß mit Geldbuße (z. B. Lärmbelästigung)",
      "Persönlicher Regelbruch",
      "Kündigungsgrund"
    ],
    correctAnswer: "B",
    hint: "Ordnungswidrigkeiten sind Gesetzesverstöße, die mit Geldbuße geahndet werden."
  },
  {
    id: 71,
    question: "Was bedeutet 'Verhältnismäßigkeit' im Einsatz?",
    options: [
      "Härte erzeugt Respekt",
      "Je strenger, desto besser",
      "Maßnahmen müssen erforderlich, geeignet und angemessen sein",
      "Alles ist erlaubt, solange das Ziel erreicht wird"
    ],
    correctAnswer: "C",
    hint: "Verhältnismäßigkeit verlangt, dass Maßnahmen erforderlich, geeignet und angemessen sind."
  },
  {
    id: 72,
    question: "Welche rechtliche Grundlage erlaubt es, jemanden bei frischer Tat festzuhalten?",
    options: [
      "§ 32 GewO",
      "§ 11 BewachV",
      "§ 127 StPO (Jedermannsrecht)",
      "§ 34 BGB"
    ],
    correctAnswer: "C",
    hint: "§ 127 StPO (Jedermannsrecht) erlaubt die vorläufige Festnahme bei frischer Tat."
  },
  {
    id: 73,
    question: "Was ist ein typischer Einsatzbereich für Sicherheitsmitarbeiter mit § 34a-Prüfung?",
    options: [
      "Steuerberatung",
      "Callcenter",
      "Veranstaltungsschutz",
      "Marketing"
    ],
    correctAnswer: "C",
    hint: "Veranstaltungsschutz ist ein typischer Einsatzbereich für § 34a-geprüfte Sicherheitskräfte."
  },
  {
    id: 74,
    question: "Welche Aussage zu 'besonderen Gefahrenlagen' ist richtig?",
    options: [
      "Sicherheitskräfte sind für medizinische Eingriffe zuständig",
      "Man muss immer selbst eingreifen",
      "Eigensicherung und Kommunikation mit Einsatzleitung stehen an erster Stelle",
      "Täter direkt konfrontieren"
    ],
    correctAnswer: "C",
    hint: "Bei besonderen Gefahrenlagen haben Eigensicherung und Kommunikation Priorität."
  },
  {
    id: 75,
    question: "Was ist bei einem verlorenen Ausweis nach § 11 BewachV zu tun?",
    options: [
      "Ignorieren",
      "Selbst ersetzen",
      "Sofort melden und Ersatz beantragen",
      "Kollegen fragen"
    ],
    correctAnswer: "C",
    hint: "Verlorene Sicherheitsausweise müssen sofort gemeldet und ersetzt werden."
  },
  {
    id: 76,
    question: "Was bedeutet 'objektbezogene Gefährdungsanalyse'?",
    options: [
      "Persönliche Einschätzung von Gefahren",
      "Bewertung von Risiken am konkreten Einsatzort",
      "Allgemeine Einschätzung aller Sicherheitskräfte",
      "Meinung des Kunden"
    ],
    correctAnswer: "B",
    hint: "Objektbezogene Gefährdungsanalyse bewertet Risiken am konkreten Einsatzort."
  },
  {
    id: 77,
    question: "Was muss bei Schichtbeginn erfolgen?",
    options: [
      "Privates klären",
      "Uniform waschen",
      "Übernahmeprotokoll prüfen & aktuelle Hinweise einholen",
      "Spontan starten"
    ],
    correctAnswer: "C",
    hint: "Bei Schichtbeginn müssen Übergabeprotokoll und aktuelle Hinweise geprüft werden."
  },
  {
    id: 78,
    question: "Wer darf nach § 34a GewO Tätigkeiten im Sicherheitsgewerbe aufnehmen?",
    options: [
      "Jeder über 18 Jahre",
      "Nur zuverlässige Personen mit bestandener Sachkundeprüfung (bei bestimmten Tätigkeiten)",
      "Jeder mit Führerschein",
      "Nur Polizeibeamte im Ruhestand"
    ],
    correctAnswer: "B",
    hint: "Bestimmte Sicherheitstätigkeiten erfordern Zuverlässigkeit und bestandene Sachkundeprüfung."
  },
  {
    id: 79,
    question: "Welche der folgenden Maßnahmen dient der Deeskalation?",
    options: [
      "Drohende Sprache",
      "Fester Körperkontakt",
      "Ruhiges, respektvolles Gesprächsangebot",
      "Lautes Kommandieren"
    ],
    correctAnswer: "C",
    hint: "Ruhige, respektvolle Gesprächsangebote dienen der Deeskalation."
  },
  {
    id: 80,
    question: "Was bedeutet 'Selbstüberschätzung' im Sicherheitsdienst?",
    options: [
      "Eine gute Eigenschaft",
      "Taktische Überlegenheit",
      "Risikofaktor – kann zu Fehlentscheidungen führen",
      "Muss durchgesetzt werden"
    ],
    correctAnswer: "C",
    hint: "Selbstüberschätzung ist ein Risikofaktor, der zu gefährlichen Fehlentscheidungen führen kann."
  },
  {
    id: 81,
    question: "Was beschreibt den Begriff 'Eskalationsstufen'?",
    options: [
      "Die Anzahl der Sicherheitskräfte vor Ort",
      "Die zunehmende Intensität eines Konflikts",
      "Der Zustand der Ausrüstung",
      "Die Höhe von Bußgeldern"
    ],
    correctAnswer: "B",
    hint: "Eskalationsstufen beschreiben die zunehmende Intensität eines Konflikts."
  },
  {
    id: 82,
    question: "Wann liegt eine frische Tat im Sinne von § 127 StPO vor?",
    options: [
      "Wenn der Täter schon verurteilt wurde",
      "Wenn die Tat gerade begangen wurde oder noch andauert",
      "Wenn man davon gehört hat",
      "Wenn die Polizei Rückmeldung gibt"
    ],
    correctAnswer: "B",
    hint: "Frische Tat liegt vor, wenn die Tat gerade begangen wurde oder noch andauert."
  },
  {
    id: 83,
    question: "Was ist beim Einsatz von technischen Hilfsmitteln zu beachten?",
    options: [
      "Sie ersetzen den Sicherheitsmitarbeiter",
      "Sie dürfen nur rechtlich zulässig und fachgerecht eingesetzt werden",
      "Sie dürfen improvisiert werden",
      "Sie sind immer erlaubt"
    ],
    correctAnswer: "B",
    hint: "Technische Hilfsmittel dürfen nur rechtlich zulässig und fachgerecht eingesetzt werden."
  },
  {
    id: 84,
    question: "Welche Verantwortung trägt ein Sicherheitsmitarbeiter beim Fund eines verdächtigen Gegenstands?",
    options: [
      "Liegen lassen",
      "Wegwerfen",
      "Bereich absperren und Polizei informieren",
      "In Dienstkleidung mitnehmen"
    ],
    correctAnswer: "C",
    hint: "Bei verdächtigen Gegenständen muss der Bereich abgesperrt und die Polizei informiert werden."
  },
  {
    id: 85,
    question: "Welche Aussage zur Teamarbeit ist korrekt?",
    options: [
      "Alle arbeiten für sich allein",
      "Absprachen und Kommunikation sind essenziell für die Sicherheit",
      "Es gibt immer einen Chef",
      "Konflikte im Team bleiben ungelöst"
    ],
    correctAnswer: "B",
    hint: "Absprachen und Kommunikation im Team sind essenziell für die Sicherheit."
  },
  {
    id: 86,
    question: "Welche Eigenschaft ist im Sicherheitsdienst besonders wichtig?",
    options: [
      "Körpergröße",
      "Selbstbeherrschung",
      "Aggressivität",
      "Lautstärke"
    ],
    correctAnswer: "B",
    hint: "Selbstbeherrschung ist eine der wichtigsten Eigenschaften im Sicherheitsdienst."
  },
  {
    id: 87,
    question: "Was ist eine 'Risikobewertung'?",
    options: [
      "Einschätzung der Bezahlung",
      "Bewertung der Uniform",
      "Einschätzung der Wahrscheinlichkeit und Schwere möglicher Gefahren",
      "Bewertung der Kollegen"
    ],
    correctAnswer: "C",
    hint: "Risikobewertung schätzt Wahrscheinlichkeit und Schwere möglicher Gefahren ein."
  },
  {
    id: 88,
    question: "Was ist bei einem Feueralarm zu tun?",
    options: [
      "Abwarten",
      "Alarmieren, Evakuieren, Eigenschutz beachten",
      "Flucht verhindern",
      "Kollegen ignorieren"
    ],
    correctAnswer: "B",
    hint: "Bei Feueralarm: Alarmieren, Evakuieren, dabei Eigenschutz beachten."
  },
  {
    id: 89,
    question: "Wer haftet für rechtswidriges Verhalten eines Sicherheitsmitarbeiters?",
    options: [
      "Der Kunde",
      "Der Mitarbeiter selbst (ggf. zusätzlich das Unternehmen)",
      "Die Polizei",
      "Niemand"
    ],
    correctAnswer: "B",
    hint: "Der Mitarbeiter haftet selbst für rechtswidriges Verhalten, ggf. zusätzlich das Unternehmen."
  },
  {
    id: 90,
    question: "Was ist der Zweck von Sicherheitsdienst-Dokumentationen?",
    options: [
      "Interne Unterhaltung",
      "Beweissicherung und Nachvollziehbarkeit von Maßnahmen",
      "Marketing",
      "Datenschutzverletzung"
    ],
    correctAnswer: "B",
    hint: "Dokumentationen dienen der Beweissicherung und Nachvollziehbarkeit von Maßnahmen."
  },
  {
    id: 91,
    question: "Was zählt zur passiven Deeskalation?",
    options: [
      "Einsatz von Pfefferspray",
      "Körpersprache und ruhige Stimme",
      "Festhalten",
      "Durchsuchung"
    ],
    correctAnswer: "B",
    hint: "Passive Deeskalation nutzt Körpersprache und ruhige Stimme."
  },
  {
    id: 92,
    question: "Was ist bei einer Durchsuchung zu beachten?",
    options: [
      "Immer erlaubt",
      "Nur mit Einwilligung oder gesetzlicher Befugnis",
      "Pflicht bei jedem Kunden",
      "Ohne Protokoll zulässig"
    ],
    correctAnswer: "B",
    hint: "Durchsuchungen sind nur mit Einwilligung oder gesetzlicher Befugnis erlaubt."
  },
  {
    id: 93,
    question: "Welche Aussage über Bewachungsunternehmen ist korrekt?",
    options: [
      "Jedes darf ohne Erlaubnis tätig werden",
      "Es bedarf einer behördlichen Erlaubnis nach § 34a GewO",
      "Nur mit Polizeiausbildung",
      "Keine Vorschriften"
    ],
    correctAnswer: "B",
    hint: "Bewachungsunternehmen benötigen eine behördliche Erlaubnis nach § 34a GewO."
  },
  {
    id: 94,
    question: "Was bedeutet 'präventive Maßnahme'?",
    options: [
      "Reaktion auf Ereignisse",
      "Vorbeugende Handlung zur Gefahrenvermeidung",
      "Anzeige erstatten",
      "Verdächtige Personen ansprechen"
    ],
    correctAnswer: "B",
    hint: "Präventive Maßnahmen sind vorbeugende Handlungen zur Gefahrenvermeidung."
  },
  {
    id: 95,
    question: "Was ist das Ziel der Zutrittskontrolle?",
    options: [
      "Nur Gäste zu begrüßen",
      "Stimmung prüfen",
      "Unbefugte fernhalten und Sicherheit gewährleisten",
      "Taschen kontrollieren"
    ],
    correctAnswer: "C",
    hint: "Zutrittskontrolle soll Unbefugte fernhalten und Sicherheit gewährleisten."
  },
  {
    id: 96,
    question: "Welche Aussage zu Erste Hilfe ist richtig?",
    options: [
      "Sicherheitskräfte sind nicht zuständig",
      "Jeder ist zur Hilfeleistung verpflichtet (§ 323c StGB)",
      "Nur Sanitäter helfen",
      "Hilfe darf verweigert werden"
    ],
    correctAnswer: "B",
    hint: "Nach § 323c StGB ist jeder zur Hilfeleistung verpflichtet."
  },
  {
    id: 97,
    question: "Was bedeutet 'Vertrauensschutz' in der Sicherheitsbranche?",
    options: [
      "Es gibt keinen",
      "Nur Kunden müssen vertrauen",
      "Kunden und Öffentlichkeit müssen sich auf korrektes Verhalten verlassen können",
      "Gilt nur bei Polizisten"
    ],
    correctAnswer: "C",
    hint: "Vertrauensschutz bedeutet, dass sich Kunden und Öffentlichkeit auf korrektes Verhalten verlassen können."
  },
  {
    id: 98,
    question: "Was beschreibt das Prinzip der Verhältnismäßigkeit?",
    options: [
      "Nur starke Maßnahmen zählen",
      "Maßnahme muss zum Zweck passen, geeignet & notwendig sein",
      "Alles ist erlaubt",
      "Härte gewinnt"
    ],
    correctAnswer: "B",
    hint: "Verhältnismäßigkeit verlangt, dass Maßnahmen zum Zweck passen, geeignet und notwendig sind."
  },
  {
    id: 99,
    question: "Wann darf körperlicher Zwang angewendet werden?",
    options: [
      "Bei Stress",
      "Nur bei Notwehr oder vorläufiger Festnahme (§ 127 StPO)",
      "Immer bei Diskussionen",
      "Bei Taschenkontrolle"
    ],
    correctAnswer: "B",
    hint: "Körperlicher Zwang ist nur bei Notwehr oder vorläufiger Festnahme nach § 127 StPO erlaubt."
  },
  {
    id: 100,
    question: "Was ist ein sicherheitsrelevanter Vorfall?",
    options: [
      "Lärm in der Kantine",
      "Ereignis, das die Sicherheit gefährdet (z. B. Einbruch, Gewalt, Verdacht)",
      "Kritik an der Uniform",
      "Langeweile im Dienst"
    ],
    correctAnswer: "B",
    hint: "Sicherheitsrelevante Vorfälle sind Ereignisse, die die Sicherheit gefährden."
  }
]

export const shuffleQuestions = (questions: Question[]): Question[] => {
  const shuffled = [...questions]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
} 