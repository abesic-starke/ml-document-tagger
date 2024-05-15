const documents = [
  {
    text: `
      Rechnung Nr. 10001
      Datum: 01.05.2024
      
      Produktbeschreibung:
      1x Laptop Modell A - 899,00 EUR
      3x Monitor B - 179,00 EUR/Stück
      
      Zwischensumme: 1.436,00 EUR
      Mehrwertsteuer (19%): 272,84 EUR
      Gesamtbetrag: 1.708,84 EUR
      
      Bitte überweisen Sie den Betrag innerhalb von 14 Tagen.
      
      Vielen Dank für Ihren Einkauf!
    `,
    tags: ['rechnung']
  },
  {
    text: `
      Rechnung Nr. 10002
      Datum: 05.05.2024
      
      Produktbeschreibung:
      2x Drucker Modell C - 199,00 EUR/Stück
      5x Tonerpatrone - 49,00 EUR/Stück
      
      Zwischensumme: 543,00 EUR
      Mehrwertsteuer (19%): 103,17 EUR
      Gesamtbetrag: 646,17 EUR
      
      Bitte zahlen Sie den Betrag innerhalb von 10 Tagen.
      
      Vielen Dank!
    `,
    tags: ['rechnung']
  },
  {
    text: `
      Rechnung Nr. 10003
      Datum: 10.05.2024

      Produktbeschreibung:
      1x Softwarelizenz D - 499,00 EUR
      10x Benutzerlizenzen - 39,00 EUR/Stück

      Zwischensumme: 889,00 EUR
      Mehrwertsteuer (19%): 168,91 EUR
      Gesamtbetrag: 1.057,91 EUR

      Überweisen Sie bitte innerhalb von 30 Tagen.

      Mit freundlichen Grüßen!
    `,
    tags: ['rechnung']
  },
  {
    text: `
      Rechnung Nr. 10004
      Datum: 15.05.2024
      
      Produktbeschreibung:
      3x Schreibtisch Modell E - 249,00 EUR/Stück
      6x Bürostuhl Modell F - 129,00 EUR/Stück
      
      Zwischensumme: 1.071,00 EUR
      Mehrwertsteuer (19%): 203,49 EUR
      Gesamtbetrag: 1.274,49 EUR
      
      Zahlungsziel: 14 Tage
      
      Vielen Dank für Ihren Auftrag!
    `,
    tags: ['rechnung']
  },
  {
    text: `
      Rechnung Nr. 10005
      Datum: 20.05.2024
      
      Produktbeschreibung:
      4x Handy Modell G - 299,00 EUR/Stück
      1x Tablet Modell H - 399,00 EUR
      
      Zwischensumme: 1.595,00 EUR
      Mehrwertsteuer (19%): 303,05 EUR
      Gesamtbetrag: 1.898,05 EUR
      
      Bitte überweisen Sie den Betrag innerhalb von 7 Tagen.
      
      Vielen Dank für Ihre Bestellung!
    `,
    tags: ['rechnung']
  },
  {
    text: `
      Rechnung Nr. 10006
      Datum: 25.05.2024
      
      Produktbeschreibung:
      2x Fernseher Modell I - 699,00 EUR/Stück
      5x HDMI-Kabel - 19,00 EUR/Stück
      
      Zwischensumme: 1.537,00 EUR
      Mehrwertsteuer (19%): 291,03 EUR
      Gesamtbetrag: 1.828,03 EUR
      
      Zahlungsziel: 14 Tage
      
      Wir danken Ihnen für Ihren Einkauf!
    `,
    tags: ['rechnung']
  },
  {
    text: `
      Rechnung Nr. 10007
      Datum: 30.05.2024
      
      Produktbeschreibung:
      1x Klimaanlage Modell J - 899,00 EUR
      10x Filter - 15,00 EUR/Stück
      
      Zwischensumme: 1.049,00 EUR
      Mehrwertsteuer (19%): 199,31 EUR
      Gesamtbetrag: 1.248,31 EUR
      
      Bitte zahlen Sie innerhalb von 30 Tagen.
      
      Herzlichen Dank!
    `,
    tags: ['rechnung']
  },
  {
    text: `
      Rechnung Nr. 10008
      Datum: 05.06.2024
      
      Produktbeschreibung:
      5x Bürolampe Modell K - 39,00 EUR/Stück
      8x LED-Glühbirne - 7,00 EUR/Stück
      
      Zwischensumme: 275,00 EUR
      Mehrwertsteuer (19%): 52,25 EUR
      Gesamtbetrag: 327,25 EUR
      
      Zahlungsziel: 14 Tage
      
      Vielen Dank für Ihre Bestellung!
    `,
    tags: ['rechnung']
  },
  {
    text: `
      Rechnung Nr. 10008
      Datum: 05.06.2024
      
      Produktbeschreibung:
      5x Bürolampe Modell K - 39,00 EUR/Stück
      8x LED-Glühbirne - 7,00 EUR/Stück
      
      Zwischensumme: 275,00 EUR
      Mehrwertsteuer (19%): 52,25 EUR
      Gesamtbetrag: 327,25 EUR
      
      Zahlungsziel: 14 Tage
      
      Vielen Dank für Ihre Bestellung!
    `,
    tags: ['rechnung']
  },
  {
    text: `
      Rechnung Nr. 10010
      Datum: 15.06.2024
      
      Produktbeschreibung:
      2x Whiteboard Modell M - 99,00 EUR/Stück
      4x Marker-Set - 12,00 EUR/Stück
      
      Zwischensumme: 246,00 EUR
      Mehrwertsteuer (19%): 46,74 EUR
      Gesamtbetrag: 292,74 EUR
      
      Zahlungsziel: 14 Tage
      
      Vielen Dank für Ihre Bestellung!
    `,
    tags: ['rechnung']
  },
  /**
   * !SECTION
   * angebot
  */
  {
    text: `
      Angebot Nr. 20001
      Datum: 01.07.2024
      
      Sehr geehrte Damen und Herren,

      Wir freuen uns, Ihnen folgendes Angebot zu unterbreiten:

      1x Webdesign-Dienstleistung - 1.500,00 EUR
      10x SEO-Optimierung - 200,00 EUR/Stück

      Gesamtbetrag: 3.500,00 EUR
      
      Dieses Angebot ist 30 Tage gültig.
      
      Mit freundlichen Grüßen,
      Ihr Dienstleister
    `,
    tags: ['angebot']
  },
  {
    text: `
      Angebot Nr. 20002
      Datum: 05.07.2024
      
      Sehr geehrter Herr Mustermann,

      Hiermit unterbreiten wir Ihnen ein Angebot für folgende Leistungen:

      5x Softwareentwicklung - 100,00 EUR/Stunde
      3x Wartungsvertrag - 500,00 EUR/Jahr

      Gesamtbetrag: 2.000,00 EUR
      
      Bitte bestätigen Sie dieses Angebot innerhalb von 14 Tagen.
      
      Mit freundlichen Grüßen,
      Ihre IT-Firma
    `,
    tags: ['angebot']
  },
  {
    text: `
      Angebot Nr. 20003
      Datum: 10.07.2024
      
      Sehr geehrte Frau Beispiel,

      Wir bieten Ihnen folgendes Produkt an:

      2x Drucker Modell X - 299,00 EUR/Stück
      20x Druckerpatrone - 15,00 EUR/Stück

      Gesamtbetrag: 1.198,00 EUR
      
      Das Angebot ist 14 Tage gültig.
      
      Mit freundlichen Grüßen,
      Ihr Bürobedarf-Team
    `,
    tags: ['angebot']
  },
  {
    text: `
      Angebot Nr. 20004
      Datum: 15.07.2024
      
      Sehr geehrte Damen und Herren,

      Hiermit unterbreiten wir Ihnen unser Angebot:

      1x Beratungsdienstleistung - 1.000,00 EUR/Tag
      5x Schulungspaket - 500,00 EUR/Tag

      Gesamtbetrag: 3.500,00 EUR
      
      Das Angebot ist 30 Tage gültig.
      
      Mit freundlichen Grüßen,
      Ihr Consulting-Team
    `,
    tags: ['angebot']
  },
  {
    text: `
      Angebot Nr. 20005
      Datum: 20.07.2024
      
      Sehr geehrter Herr Beispiel,

      Wir freuen uns, Ihnen folgendes Angebot machen zu können:

      3x Server-Installation - 2.000,00 EUR/Stück
      10x Support-Vertrag - 100,00 EUR/Monat

      Gesamtbetrag: 8.000,00 EUR
      
      Das Angebot ist 14 Tage gültig.
      
      Mit freundlichen Grüßen,
      Ihr IT-Dienstleister
    `,
    tags: ['angebot']
  },
  {
    text: `
      Angebot Nr. 20006
      Datum: 25.07.2024
      
      Sehr geehrte Damen und Herren,

      Wir bieten Ihnen folgende Produkte an:

      5x Laptop Modell Y - 799,00 EUR/Stück
      20x Maus Modell Z - 19,00 EUR/Stück

      Gesamtbetrag: 4.195,00 EUR
      
      Das Angebot ist 30 Tage gültig.
      
      Mit freundlichen Grüßen,
      Ihr Technik-Team
    `,
    tags: ['angebot']
  },
  {
    text: `
      Angebot Nr. 20007
      Datum: 30.07.2024
      
      Sehr geehrte Damen und Herren,

      Hiermit bieten wir Ihnen folgende Dienstleistungen an:

      50x Webseiten-Optimierung - 50,00 EUR/Stunde
      10x Social Media Betreuung - 100,00 EUR/Stunde

      Gesamtbetrag: 4.000,00 EUR
      
      Das Angebot ist 14 Tage gültig.
      
      Mit freundlichen Grüßen,
      Ihr Marketing-Team
    `,
    tags: ['angebot']
  },
  {
    text: `
      Angebot Nr. 20008
      Datum: 05.08.2024
      
      Sehr geehrter Herr Mustermann,

      Hiermit unterbreiten wir Ihnen unser Angebot für:

      1x Projektmanagement - 500,00 EUR/Tag
      2x Beratungsgespräch - 250,00 EUR/Stunde

      Gesamtbetrag: 1.500,00 EUR
      
      Das Angebot ist 30 Tage gültig.
      
      Mit freundlichen Grüßen,
      Ihr Projektmanagement-Team
    `,
    tags: ['angebot']
  },
  {
    text: `
      Angebot Nr. 20009
      Datum: 10.08.2024
      
      Sehr geehrte Frau Beispiel,

      Wir freuen uns, Ihnen folgendes Angebot machen zu können:

      1x Schulungsseminar - 2.000,00 EUR
      10x Schulungsmaterialien - 50,00 EUR/Stück

      Gesamtbetrag: 2.500,00 EUR
      
      Das Angebot ist 14 Tage gültig.
      
      Mit freundlichen Grüßen,
      Ihr Schulungsteam
    `,
    tags: ['angebot']
  },
  {
    text: `
      Angebot Nr. 20010
      Datum: 15.08.2024
      
      Sehr geehrter Herr Beispiel,

      Hiermit unterbreiten wir Ihnen folgendes Angebot:

      2x IT-Consulting - 800,00 EUR/Tag
      5x Software-Wartung - 200,00 EUR/Jahr

      Gesamtbetrag: 2.000,00 EUR
      
      Das Angebot ist 30 Tage gültig.
      
      Mit freundlichen Grüßen,
      Ihr Consulting-Team
    `,
    tags: ['angebot']
  },
  /**
   * !SECTION
   * bestellung
  */
  {
    text: `
      Bestellung Nr. 30001
      Datum: 01.09.2024
      
      Bestellnummer: 001-ABC-2024

      Artikel:
      3x Bürostuhl Modell Comfort - 129,00 EUR/Stück
      2x Schreibtisch Modell Office - 299,00 EUR/Stück

      Gesamtbetrag: 985,00 EUR

      Lieferadresse:
      Musterfirma GmbH, Beispielstraße 1, 12345 Musterstadt
      
      Vielen Dank für Ihre Bestellung!
    `,
    tags: ['bestellung']
  },
  {
    text: `
      Bestellung Nr. 30002
      Datum: 05.09.2024
      
      Bestellnummer: 002-DEF-2024

      Artikel:
      5x Laptop Modell Pro - 999,00 EUR/Stück
      10x Monitor Modell Ultra - 199,00 EUR/Stück

      Gesamtbetrag: 6.990,00 EUR

      Lieferadresse:
      Beispiel AG, Testweg 2, 54321 Teststadt
      
      Vielen Dank für Ihre Bestellung!
    `,
    tags: ['bestellung']
  },
  {
    text: `
      Bestellung Nr. 30003
      Datum: 10.09.2024
      
      Bestellnummer: 003-GHI-2024

      Artikel:
      2x Drucker Modell Jet - 249,00 EUR/Stück
      6x Druckerpatrone - 19,00 EUR/Stück

      Gesamtbetrag: 582,00 EUR

      Lieferadresse:
      Firma ABC, Hauptstraße 3, 67890 Hauptstadt
      
      Vielen Dank für Ihre Bestellung!
    `,
    tags: ['bestellung']
  },
  {
    text: `
      Bestellung Nr. 30004
      Datum: 15.09.2024
      
      Bestellnummer: 004-JKL-2024

      Artikel:
      4x Smartphone Modell X - 499,00 EUR/Stück
      8x Ladegerät - 29,00 EUR/Stück

      Gesamtbetrag: 2.156,00 EUR

      Lieferadresse:
      Unternehmen XYZ, Nebenstraße 4, 98765 Nebenstadt
      
      Vielen Dank für Ihre Bestellung!
    `,
    tags: ['bestellung']
  },
  {
    text: `
      Bestellung Nr. 30005
      Datum: 20.09.2024
      
      Bestellnummer: 005-MNO-2024

      Artikel:
      10x Tablet Modell Z - 399,00 EUR/Stück
      15x Schutzhülle - 19,00 EUR/Stück

      Gesamtbetrag: 4.785,00 EUR

      Lieferadresse:
      Firma DEF, Musterstraße 5, 54321 Beispielstadt
      
      Vielen Dank für Ihre Bestellung!
    `,
    tags: ['bestellung']
  },
  {
    text: `
      Bestellung Nr. 30006
      Datum: 25.09.2024
      
      Bestellnummer: 006-PQR-2024

      Artikel:
      1x Server Modell S - 1.499,00 EUR
      3x Netzwerkkabel - 29,00 EUR/Stück

      Gesamtbetrag: 1.586,00 EUR

      Lieferadresse:
      Beispiel GmbH, Zufallsweg 6, 65432 Zufallsstadt
      
      Vielen Dank für Ihre Bestellung!
    `,
    tags: ['bestellung']
  },
  {
    text: `
      Bestellung Nr. 30007
      Datum: 30.09.2024
      
      Bestellnummer: 007-STU-2024

      Artikel:
      6x Projektor Modell P - 299,00 EUR/Stück
      20x HDMI-Kabel - 19,00 EUR/Stück

      Gesamtbetrag: 2.394,00 EUR

      Lieferadresse:
      Firma GHI, Produktionsweg 7, 87654 Industriestadt
      
      Vielen Dank für Ihre Bestellung!
    `,
    tags: ['bestellung']
  },
  {
    text: `
      Bestellung Nr. 30008
      Datum: 05.10.2024
      
      Bestellnummer: 008-VWX-2024

      Artikel:
      10x Router Modell R - 129,00 EUR/Stück
      30x Netzwerkkabel - 9,00 EUR/Stück

      Gesamtbetrag: 2.070,00 EUR

      Lieferadresse:
      Musterfirma, Technikweg 8, 78901 Technologiestadt
      
      Vielen Dank für Ihre Bestellung!
    `,
    tags: ['bestellung']
  },
  {
    text: `
      Bestellung Nr. 30009
      Datum: 10.10.2024
      
      Bestellnummer: 009-YZA-2024

      Artikel:
      3x Kaffeemaschine Modell C - 149,00 EUR/Stück
      20x Kaffeefilter - 5,00 EUR/Stück

      Gesamtbetrag: 497,00 EUR

      Lieferadresse:
      Firma ABC, Bürostraße 9, 34567 Arbeitsstadt
      
      Vielen Dank für Ihre Bestellung!
    `,
    tags: ['bestellung']
  },
  {
    text: `
      Bestellung Nr. 30010
      Datum: 15.10.2024
      
      Bestellnummer: 010-BDC-2024

      Artikel:
      5x Whiteboard Modell W - 199,00 EUR/Stück
      10x Marker-Set - 9,00 EUR/Stück

      Gesamtbetrag: 1.045,00 EUR

      Lieferadresse:
      Beispiel AG, Kreativweg 10, 45678 Ideenstadt
      
      Vielen Dank für Ihre Bestellung!
    `,
    tags: ['bestellung']
  }
]

export default documents