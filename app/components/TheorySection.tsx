'use client'

import { useState } from 'react'
import { ChevronRight, Play, BookOpen, CheckCircle, Clock, Award } from 'lucide-react'

interface TheorySectionProps {
  selectedLevel: 'havo4' | 'havo5'
}

interface Lesson {
  id: string
  title: string
  content: string
  duration: string
}

interface Chapter {
  id: string
  title: string
  description: string
  lessons: Lesson[]
}

interface Curriculum {
  title: string
  chapters: Chapter[]
}

export default function TheorySection({ selectedLevel }: TheorySectionProps) {
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null)
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null)
  const [completedLessons, setCompletedLessons] = useState<string[]>([])

  const curriculum: Record<'havo4' | 'havo5', Curriculum> = {
    havo4: {
      title: 'HAVO 4 Curriculum',
      chapters: [
        {
          id: 'ch1',
          title: 'Hoofdstuk 1: Vraag en Aanbod',
          description: 'Leer de basis van vraag en aanbod in de markteconomie',
          lessons: [
            {
              id: 'l1-1',
              title: 'Wat is vraag?',
              content: `
# Wat is vraag? 🛒

Stel je voor: je bent op een festival en hebt dorst. Er zijn verschillende drankjes te koop, maar de prijs verschilt enorm. Een flesje water kost €5, terwijl het normaal €1 kost in de supermarkt.

## Definitie van vraag
**Vraag** is de hoeveelheid van een product of dienst die consumenten willen en kunnen kopen tegen een bepaalde prijs op een bepaald moment.

### Belangrijke elementen:
- **Willen**: Je moet het product daadwerkelijk willen hebben
- **Kunnen**: Je moet het geld hebben om het te kopen
- **Prijs**: De prijs beïnvloedt hoeveel je wilt kopen
- **Tijd**: Vraag kan veranderen over tijd

## Voorbeelden uit jouw leven:
- **Spotify Premium**: Als het €5 per maand kost, nemen misschien veel jongeren een abonnement. Bij €20 per maand veel minder.
- **Festival kaartjes**: Early bird tickets zijn goedkoper, dus de vraag is hoger
- **Gaming console**: Bij release hoge prijs, later lagere prijs = meer vraag

## De vraagcurve
Meestal geldt: **hoe hoger de prijs, hoe lager de vraag**. Dit noemen we de wet van de vraag.

### Factoren die vraag beïnvloeden:
1. **Prijs van het product** (belangrijkste factor)
2. **Inkomen van consumenten** (meer geld = meer vraag naar luxe producten)
3. **Prijs van substituten** (als Coca-Cola duurder wordt, meer vraag naar Pepsi)
4. **Trends en mode** (TikTok maakt producten populair)
5. **Seizoen** (ijsjes in de zomer, warme chocolademelk in de winter)

### Oefening:
Denk aan je favoriete snack. Hoeveel zou je er per week kopen als het €1 kost? En als het €5 kost? Wat gebeurt er met je vraag?
              `,
              duration: '15 min'
            },
            {
              id: 'l1-2',
              title: 'Wat is aanbod?',
              content: `
# Wat is aanbod? 🏪

Je hebt een bijbaantje bij een lokale kledingwinkel. De eigenaar moet beslissen hoeveel t-shirts hij gaat bestellen voor de zomer.

## Definitie van aanbod
**Aanbod** is de hoeveelheid van een product of dienst die producenten willen en kunnen leveren tegen een bepaalde prijs op een bepaald moment.

### Belangrijke elementen:
- **Willen**: Bedrijven willen winst maken
- **Kunnen**: Ze moeten de capaciteit hebben om te produceren
- **Prijs**: Hogere prijs = meer winst = meer aanbod
- **Kosten**: Productiekosten bepalen of het rendabel is

## Voorbeelden uit jouw omgeving:
- **Lokale café**: Bij hoge koffieprijs willen ze meer koffie verkopen
- **Bijles geven**: Als je €20 per uur krijgt in plaats van €10, geef je waarschijnlijk meer uren bijles
- **Tweedehands kleding verkopen**: Hoge vraag naar vintage = hogere prijzen = meer aanbod op Vinted

## De aanbodcurve
Meestal geldt: **hoe hoger de prijs, hoe hoger het aanbod**. Dit is logisch - bedrijven willen meer verkopen als ze er meer aan verdienen.

### Factoren die aanbod beïnvloeden:
1. **Prijs van het product** (belangrijkste factor)
2. **Productiekosten** (goedkopere grondstoffen = meer aanbod)
3. **Technologie** (betere machines = efficiënter produceren)
4. **Aantal aanbieders** (meer bedrijven = meer aanbod)
5. **Verwachtingen** (verwacht hogere prijzen = nu minder aanbod)

### Praktijkvoorbeeld:
Een lokale bakker maakt normaal 50 broodjes per dag. Als de prijs stijgt van €1 naar €1,50 per broodje, gaat hij misschien 80 broodjes maken omdat het meer oplevert.

### Denkoefening:
Stel je start een eigen bedrijf in het maken van telefoonhoesjes. Wat zou jouw aanbod beïnvloeden?
              `,
              duration: '12 min'
            },
            {
              id: 'l1-3',
              title: 'Marktevenwicht',
              content: `
# Marktevenwicht ⚖️

Wat gebeurt er als vraag en aanbod elkaar ontmoeten? Dan krijg je een marktevenwicht!

## Wat is marktevenwicht?
Het punt waar de hoeveelheid die consumenten willen kopen precies gelijk is aan de hoeveelheid die producenten willen verkopen.

### Kenmerken van evenwicht:
- **Evenwichtsprijs**: De prijs waarbij vraag = aanbod
- **Evenwichtshoeveelheid**: De hoeveelheid die wordt verkocht
- **Geen tekort of overschot**

## Voorbeeld: Festival kaartjes
- **Vraag**: Hoe meer fans, hoe hoger de vraag
- **Aanbod**: Beperkt aantal plaatsen in het stadion
- **Evenwicht**: Prijs waarbij alle kaartjes verkocht zijn

### Wat gebeurt bij verstoringen?

**Te hoge prijs (boven evenwicht):**
- Aanbod > Vraag
- **Overschot** ontstaat
- Prijzen dalen automatisch
- Voorbeeld: Te veel winterjassen in de uitverkoop

**Te lage prijs (onder evenwicht):**
- Vraag > Aanbod  
- **Tekort** ontstaat
- Prijzen stijgen automatisch
- Voorbeeld: Nieuwe iPhone release - lange wachtrijen

## Praktijkvoorbeeld: Lokale pizzeria
- **Normale prijs**: €12 per pizza
- **Vraag**: 100 pizza's per dag
- **Aanbod**: 100 pizza's per dag
- **Evenwicht**: Perfect!

**Wat als ze de prijs verhogen naar €15?**
- Vraag daalt naar 70 pizza's
- Aanbod blijft 100 pizza's  
- **Overschot**: 30 pizza's blijven over
- Pizzeria moet prijs verlagen

### Oefening:
Denk aan de kantine op school. Wat gebeurt er met de prijs van broodjes als:
1. Er meer leerlingen bijkomen?
2. De kantine kleinere broodjes gaat maken?
3. Er een nieuwe snackbar naast school opent?
              `,
              duration: '18 min'
            }
          ]
        },
        {
          id: 'ch2',
          title: 'Hoofdstuk 2: Marktvormen',
          description: 'Ontdek verschillende marktvormen en hun kenmerken',
          lessons: [
            {
              id: 'l2-1',
              title: 'Perfecte concurrentie',
              content: `
# Perfecte concurrentie 🏪🏪🏪

Stel je voor: je woont in een stad met 20 verschillende pizzeria's die allemaal ongeveer dezelfde pizza's verkopen voor ongeveer dezelfde prijs.

## Wat is perfecte concurrentie?
Een marktvorm waarbij:
- **Veel aanbieders** (bedrijven)
- **Veel vragers** (klanten)
- **Identieke producten** (geen verschil tussen merken)
- **Vrije toe- en uittreding** (makkelijk een bedrijf starten/stoppen)
- **Perfecte informatie** (iedereen weet alle prijzen)

## Kenmerken:
- Bedrijven zijn **prijsnemers** (kunnen prijs niet zelf bepalen)
- **Geen winst op lange termijn** (concurrentie drukt winst weg)
- **Efficiënte markt** (beste prijs voor consumenten)

## Voorbeelden uit het echte leven:
- **Groentemarkt**: Veel kramen verkopen dezelfde groenten
- **Valuta handel**: Dollars zijn overal hetzelfde
- **Landbouwproducten**: Tarwe van boer A is hetzelfde als van boer B
- **Benzinestations**: Langs de snelweg vaak dezelfde prijzen

## Waarom is dit belangrijk?
In perfecte concurrentie krijg je als consument:
- ✅ De laagste mogelijke prijs
- ✅ De beste kwaliteit
- ✅ Veel keuze

### Gevolgen voor bedrijven:
- Moeten zo efficiënt mogelijk werken
- Kunnen geen hoge winsten maken
- Moeten constant innoveren om te overleven

### Denkoefening:
Welke markten in jouw omgeving lijken op perfecte concurrentie? Denk aan supermarkten, tankstations, of fastfood restaurants. Waarom wel of niet?
              `,
              duration: '18 min'
            },
            {
              id: 'l2-2',
              title: 'Monopolie',
              content: `
# Monopolie 👑

Stel je voor: er is maar één treinmaatschappij in Nederland. Wil je met de trein? Dan moet je bij de NS zijn!

## Wat is een monopolie?
Een marktvorm waarbij:
- **Één aanbieder** (bedrijf)
- **Veel vragers** (klanten)
- **Uniek product** (geen alternatieven)
- **Hoge toetredingsbarrières** (moeilijk om te concurreren)

## Kenmerken:
- Bedrijf is **prijsbepaler** (kan eigen prijs kiezen)
- **Hoge winsten mogelijk**
- **Minder efficiënt** dan concurrentie
- **Hogere prijzen** voor consumenten

## Voorbeelden:
- **NS**: Enige treinvervoer in Nederland
- **Nutsbedrijven**: Gas, water, elektriciteit (lokaal)
- **Microsoft Windows**: Dominant besturingssysteem
- **Lokale kabelmaatschappij**: Vaak enige aanbieder per wijk

## Waarom ontstaan monopolies?

### 1. Natuurlijke monopolies
- Hoge vaste kosten (spoorwegen, leidingen)
- Efficiënter om één bedrijf te hebben
- Voorbeeld: Waterleidingbedrijf

### 2. Wettelijke monopolies  
- Patenten en auteursrechten
- Overheidslicenties
- Voorbeeld: Nieuwe medicijnen (20 jaar patent)

### 3. Controle over grondstoffen
- Eigenaar van unieke grondstof
- Voorbeeld: De Beers (diamanten)

## Gevolgen voor consumenten:
- ❌ Hogere prijzen
- ❌ Minder keuze
- ❌ Mogelijk slechtere service
- ❌ Minder innovatie

## Overheidsregulering:
Omdat monopolies nadelig zijn voor consumenten, grijpt de overheid vaak in:
- **Prijsregulering**: Maximum prijzen
- **Kwaliteitseisen**: Minimum service niveau
- **Mededingingswet**: Voorkomen van monopolies

### Praktijkvoorbeeld:
Stel je voor dat er maar één supermarkt in jouw stad zou zijn. Wat zou er gebeuren met:
- De prijzen?
- De openingstijden?
- De klantvriendelijkheid?
- Het assortiment?
              `,
              duration: '20 min'
            },
            {
              id: 'l2-3',
              title: 'Oligopolie',
              content: `
# Oligopolie 🏢🏢🏢

Denk aan de supermarktwereld: Albert Heijn, Jumbo, Plus, Lidl. Een paar grote spelers die de markt domineren!

## Wat is oligopolie?
Een marktvorm waarbij:
- **Weinig aanbieders** (meestal 3-8 bedrijven)
- **Veel vragers** (klanten)
- **Gedifferentieerde producten** (merken verschillen)
- **Hoge toetredingsbarrières** (moeilijk om erin te komen)

## Kenmerken:
- Bedrijven zijn **onderling afhankelijk**
- **Strategisch gedrag** (letten op concurrenten)
- **Prijsafspraken mogelijk** (kartelvorming)
- **Non-prijs concurrentie** (reclame, service)

## Nederlandse voorbeelden:
- **Supermarkten**: AH, Jumbo, Plus, Lidl
- **Telecom**: KPN, VodafoneZiggo, T-Mobile
- **Banken**: ING, Rabobank, ABN AMRO
- **Vliegmaatschappijen**: KLM, Transavia, EasyJet

## Gedragspatronen:

### 1. Prijsleiderschap
- Één bedrijf bepaalt de prijs
- Anderen volgen
- Voorbeeld: Shell zet benzineprijs, anderen volgen

### 2. Kartelvorming (illegaal!)
- Bedrijven maken prijsafspraken
- Verdelen markten onder elkaar
- Voorbeeld: Bouwfraude in Nederland

### 3. Prijzenoorlog
- Bedrijven verlagen prijzen om marktaandeel te winnen
- Kan leiden tot verliezen voor iedereen
- Voorbeeld: Prijzenoorlog tussen supermarkten

## Non-prijs concurrentie:
Omdat prijsconcurrentie gevaarlijk is, concurreren oligopolisten vaak op:
- **Reclame en marketing** (Coca-Cola vs Pepsi)
- **Productinnovatie** (iPhone vs Samsung)
- **Service en gemak** (Bol.com vs Amazon)
- **Merkimago** (Nike vs Adidas)

## Gevolgen voor consumenten:
- ⚖️ **Gemiddelde prijzen** (niet zo laag als perfecte concurrentie)
- ✅ **Productinnovatie** (concurrentie stimuleert vernieuwing)
- ✅ **Keuze tussen merken**
- ❌ **Mogelijk kartelgedrag**

### Game Theory voorbeeld:
Stel je voor: Coca-Cola en Pepsi moeten beslissen over hun reclamebudget.

**Als beide veel reclame maken**: Beide hoge kosten, marktaandeel blijft gelijk
**Als beide weinig reclame maken**: Beide lage kosten, marktaandeel blijft gelijk  
**Als één veel en ander weinig**: Degene met veel reclame wint marktaandeel

Dit verklaart waarom we zoveel reclame zien van deze merken!

### Denkoefening:
Kijk naar de streamingdiensten (Netflix, Disney+, Amazon Prime). Hoe concurreren zij met elkaar? Waarom zie je zoveel reclame voor deze diensten?
              `,
              duration: '22 min'
            },
            {
              id: 'l2-4',
              title: 'Monopolistische concurrentie',
              content: `
# Monopolistische concurrentie 🍕🍔🌮

Denk aan alle restaurants in jouw stad: pizza, burgers, sushi, Chinees. Veel aanbieders, maar allemaal anders!

## Wat is monopolistische concurrentie?
Een marktvorm waarbij:
- **Veel aanbieders** (bedrijven)
- **Veel vragers** (klanten)
- **Gedifferentieerde producten** (elk bedrijf is uniek)
- **Vrije toe- en uittreding** (relatief makkelijk te starten)

## Kenmerken:
- Bedrijven hebben **beperkte marktmacht**
- **Productdifferentiatie** is cruciaal
- **Korte termijn winsten** mogelijk
- **Lange termijn normale winsten**

## Voorbeelden uit jouw omgeving:
- **Restaurants**: Elk heeft eigen sfeer, menu, locatie
- **Kledingwinkels**: Verschillende stijlen en merken
- **Kappers**: Eigen specialiteiten en prijzen
- **Cafés**: Unieke ambiance en aanbod
- **Fitness centers**: Verschillende faciliteiten

## Productdifferentiatie strategieën:

### 1. Fysieke verschillen
- **Smaak**: McDonald's vs Burger King
- **Design**: iPhone vs Samsung
- **Kwaliteit**: Goedkope vs dure kleding

### 2. Service verschillen
- **Snelheid**: Fastfood vs fine dining
- **Persoonlijke aandacht**: Kleine vs grote winkels
- **Openingstijden**: 24/7 vs normale uren

### 3. Locatie verschillen
- **Gemak**: Dichtbij huis vs centrum
- **Parkeren**: Gratis vs betaald
- **Bereikbaarheid**: Auto vs openbaar vervoer

### 4. Imago verschillen
- **Luxe**: Dure vs goedkope merken
- **Duurzaamheid**: Biologisch vs regulier
- **Trendy**: Hip vs traditioneel

## Concurrentie strategieën:
Omdat producten verschillend zijn, kunnen bedrijven:
- **Eigen prijzen bepalen** (binnen grenzen)
- **Merktrouw opbouwen**
- **Niches vinden**
- **Innoveren en vernieuwen**

## Rol van reclame:
- **Informeren**: Klanten vertellen over product
- **Overtuigen**: Waarom jouw product beter is
- **Herinneren**: Merk in gedachten houden
- **Differentiëren**: Verschil met concurrenten benadrukken

## Gevolgen voor consumenten:
- ✅ **Veel keuze** in producten en diensten
- ✅ **Innovatie** door concurrentie
- ✅ **Verschillende prijsklassen**
- ❌ **Hogere prijzen** dan perfecte concurrentie
- ❌ **Verwarring** door veel opties

### Praktijkvoorbeeld: Lokale pizzeria's
In jouw stad zijn misschien 10 pizzeria's:
- **Mario's**: Authentiek Italiaans, duur maar lekker
- **Pizza Express**: Snel en goedkoop
- **Mama Mia**: Gezellige sfeer, gemiddelde prijs
- **New York Pizza**: Amerikaanse stijl, bezorging

Elk heeft eigen klanten door verschillende positionering!

### Denkoefening:
Kies een straat in jouw stad met veel winkels. Hoe differentiëren de verschillende winkels zich van elkaar? Waarom ga je naar de ene winkel en niet naar de andere?
              `,
              duration: '25 min'
            }
          ]
        },
        {
          id: 'ch3',
          title: 'Hoofdstuk 3: Kosten en Opbrengsten',
          description: 'Begrijp hoe bedrijven kosten maken en inkomsten genereren',
          lessons: [
            {
              id: 'l3-1',
              title: 'Vaste en variabele kosten',
              content: `
# Vaste en variabele kosten 💰

Stel je voor: je start een eigen bedrijf in het maken van zelfgemaakte sieraden. Welke kosten ga je maken?

## Wat zijn kosten?
**Kosten** zijn alle uitgaven die een bedrijf moet maken om producten of diensten te kunnen leveren.

## Vaste kosten (Fixed Costs)
Kosten die **niet veranderen** met de hoeveelheid productie.

### Kenmerken vaste kosten:
- Blijven gelijk, ook als je niets produceert
- Moeten altijd betaald worden
- Worden ook wel **overhead** genoemd

### Voorbeelden vaste kosten:
- **Huur van werkruimte**: €500 per maand (of je nu 10 of 100 sieraden maakt)
- **Verzekeringen**: €50 per maand
- **Telefoon/internet**: €40 per maand  
- **Afschrijving machines**: €100 per maand
- **Salarissen**: €2000 per maand (vaste medewerkers)

## Variabele kosten (Variable Costs)  
Kosten die **wel veranderen** met de hoeveelheid productie.

### Kenmerken variabele kosten:
- Stijgen als je meer produceert
- Zijn nul als je niets produceert
- Worden ook wel **directe kosten** genoemd

### Voorbeelden variabele kosten:
- **Grondstoffen**: €5 per sieraad (kralen, draad, sluitingen)
- **Verpakking**: €1 per sieraad (doosje, lint)
- **Verzendkosten**: €3 per verkocht sieraad
- **Uitzendkrachten**: €15 per uur (alleen bij drukte)
- **Elektriciteit machines**: €0,50 per sieraad

## Totale kosten berekenen:
**Totale kosten = Vaste kosten + Variabele kosten**

### Voorbeeld sieradenbedrijf:
**Maand 1: 50 sieraden gemaakt**
- Vaste kosten: €690 (huur + verzekering + telefoon + afschrijving + salaris)
- Variabele kosten: 50 × €9,50 = €475
- **Totale kosten: €690 + €475 = €1.165**

**Maand 2: 100 sieraden gemaakt**  
- Vaste kosten: €690 (blijft gelijk!)
- Variabele kosten: 100 × €9,50 = €950
- **Totale kosten: €690 + €950 = €1.640**

## Gemiddelde kosten per stuk:
**Gemiddelde kosten = Totale kosten ÷ Aantal producten**

- **50 sieraden**: €1.165 ÷ 50 = €23,30 per sieraad
- **100 sieraden**: €1.640 ÷ 100 = €16,40 per sieraad

**Conclusie**: Hoe meer je produceert, hoe goedkoper per stuk!

## Waarom is dit belangrijk?

### Voor prijsbepaling:
- Je verkoopprijs moet hoger zijn dan je gemiddelde kosten
- Anders maak je verlies!

### Voor beslissingen:
- **Korte termijn**: Minimaal variabele kosten dekken
- **Lange termijn**: Alle kosten (vast + variabel) dekken

### Praktijkvoorbeeld:
Een klant wil 20 sieraden voor €12 per stuk bestellen.
- Variabele kosten: €9,50 per stuk
- **Marge per stuk**: €12 - €9,50 = €2,50
- **Totale bijdrage**: 20 × €2,50 = €50

Deze €50 helpt de vaste kosten te betalen. Zelfs al dekt het niet alle kosten, het is beter dan niets verkopen!

### Denkoefening:
Stel je runt een kleine webshop vanuit huis. Maak een lijst van:
1. Jouw vaste kosten per maand
2. Jouw variabele kosten per verkocht product
3. Hoeveel moet je minimaal verkopen om quitte te spelen?
              `,
              duration: '20 min'
            },
            {
              id: 'l3-2',
              title: 'Opbrengsten en winst',
              content: `
# Opbrengsten en winst 💸

Nu je weet wat kosten zijn, gaan we kijken naar de andere kant: hoeveel verdien je eigenlijk?

## Wat zijn opbrengsten?
**Opbrengsten** (ook wel omzet genoemd) zijn alle inkomsten die een bedrijf krijgt door producten of diensten te verkopen.

### Formule opbrengsten:
**Opbrengsten = Aantal verkochte producten × Prijs per product**

### Voorbeeld sieradenbedrijf:
- **Maand 1**: 50 sieraden verkocht voor €20 per stuk
- **Opbrengsten**: 50 × €20 = €1.000

- **Maand 2**: 80 sieraden verkocht voor €20 per stuk  
- **Opbrengsten**: 80 × €20 = €1.600

## Wat is winst?
**Winst** is wat er overblijft nadat je alle kosten hebt afgetrokken van je opbrengsten.

### Formule winst:
**Winst = Opbrengsten - Totale kosten**

### Voorbeeld berekening:
**Maand 1:**
- Opbrengsten: €1.000
- Totale kosten: €1.165 (uit vorige les)
- **Winst: €1.000 - €1.165 = -€165 (verlies!)**

**Maand 2:**
- Opbrengsten: €1.600  
- Totale kosten: €1.640 (uit vorige les)
- **Winst: €1.600 - €1.640 = -€40 (nog steeds verlies)**

## Soorten winst:

### 1. Bruto winst (Gross Profit)
**Bruto winst = Opbrengsten - Variabele kosten**

Dit vertelt je hoeveel je overhoudt om vaste kosten te betalen.

**Voorbeeld maand 1:**
- Opbrengsten: €1.000
- Variabele kosten: €475
- **Bruto winst: €1.000 - €475 = €525**

### 2. Netto winst (Net Profit)  
**Netto winst = Opbrengsten - Alle kosten**

Dit is je echte winst na alle kosten.

## Winstmarge berekenen:
**Winstmarge = (Winst ÷ Opbrengsten) × 100%**

### Voorbeeld:
Als je €100 winst maakt op €1.000 omzet:
**Winstmarge = (€100 ÷ €1.000) × 100% = 10%**

## Verschillende scenario's:

### Scenario 1: Winst maken 😊
- Opbrengsten: €2.000
- Kosten: €1.500  
- **Winst: €500**
- Winstmarge: 25%

### Scenario 2: Break-even 😐
- Opbrengsten: €1.500
- Kosten: €1.500
- **Winst: €0**
- Je draait quitte

### Scenario 3: Verlies maken 😰
- Opbrengsten: €1.000
- Kosten: €1.500
- **Verlies: -€500**
- Je moet geld bijleggen

## Hoe winst verbeteren?

### Opbrengsten verhogen:
1. **Meer verkopen** (meer klanten, meer marketing)
2. **Hogere prijzen** (betere kwaliteit, uniek product)
3. **Nieuwe producten** (uitbreiding assortiment)

### Kosten verlagen:
1. **Goedkopere grondstoffen** (betere leveranciers)
2. **Efficiënter werken** (minder verspilling)
3. **Lagere vaste kosten** (goedkopere huur)

## Praktijkvoorbeeld: YouTube kanaal
Stel je hebt een YouTube kanaal over gaming:

**Opbrengsten:**
- Advertentie-inkomsten: €200 per maand
- Sponsordeals: €300 per maand
- **Totaal: €500**

**Kosten:**
- Nieuwe games: €100 per maand
- Editing software: €20 per maand  
- Betere microfoon (afschrijving): €25 per maand
- **Totaal: €145**

**Winst: €500 - €145 = €355 per maand**
**Winstmarge: (€355 ÷ €500) × 100% = 71%**

Niet slecht voor een hobby die geld oplevert!

### Denkoefening:
Stel je verkoopt zelfgemaakte koekjes op school:
- Je verkoopt 50 koekjes per week voor €1,50 per stuk
- Ingrediënten kosten €0,40 per koekje
- Je besteedt 5 uur per week (€10 per uur eigen loon)

Bereken:
1. Je wekelijkse opbrengsten
2. Je wekelijkse kosten  
3. Je wekelijkse winst
4. Je winstmarge
              `,
              duration: '22 min'
            }
          ]
        },
        {
          id: 'ch4',
          title: 'Hoofdstuk 4: Break-even Analyse',
          description: 'Leer wanneer een bedrijf quitte speelt',
          lessons: [
            {
              id: 'l4-1',
              title: 'Break-even point berekenen',
              content: `
# Break-even Point Berekenen 🎯

Het belangrijkste getal voor elke ondernemer: wanneer ben je quitte?

## Wat is break-even?
**Break-even** is het punt waar je opbrengsten precies gelijk zijn aan je kosten. Je maakt geen winst, maar ook geen verlies.

### Waarom is dit belangrijk?
- **Minimale verkoop** om te overleven
- **Risico inschatten** van een bedrijf
- **Doelen stellen** voor verkoop
- **Prijzen bepalen**

## Break-even formules:

### 1. Break-even in stuks:
**Break-even (stuks) = Vaste kosten ÷ (Verkoopprijs - Variabele kosten per stuk)**

### 2. Break-even in euro's:
**Break-even (€) = Break-even (stuks) × Verkoopprijs**

## Stap-voor-stap voorbeeld:

### Sieradenbedrijf:
- **Vaste kosten**: €690 per maand
- **Verkoopprijs**: €20 per sieraad
- **Variabele kosten**: €9,50 per sieraad

**Stap 1: Dekkingsbijdrage per stuk**
Dekkingsbijdrage = €20 - €9,50 = €10,50

**Stap 2: Break-even in stuks**
Break-even = €690 ÷ €10,50 = 65,7 → **66 sieraden**

**Stap 3: Break-even in euro's**  
Break-even = 66 × €20 = **€1.320**

### Controle:
**Opbrengsten**: 66 × €20 = €1.320
**Kosten**: €690 + (66 × €9,50) = €690 + €627 = €1.317
**Verschil**: €1.320 - €1.317 = €3 (afronding)

## Dekkingsbijdrage uitgelegd:
**Dekkingsbijdrage = Verkoopprijs - Variabele kosten**

Dit is het bedrag dat elke verkoop bijdraagt aan het dekken van de vaste kosten.

### Voorbeeld:
- Verkoopprijs: €20
- Variabele kosten: €9,50
- **Dekkingsbijdrage: €10,50**

Elke verkochte sieraad draagt €10,50 bij aan het betalen van de vaste kosten van €690.

## Praktijkvoorbeeld: Lokaal café

### Gegeven:
- **Vaste kosten**: €3.000 per maand (huur, salaris, verzekering)
- **Gemiddelde bon**: €8 per klant
- **Variabele kosten**: €3 per klant (ingrediënten, servies)

### Berekening:
**Dekkingsbijdrage**: €8 - €3 = €5 per klant
**Break-even**: €3.000 ÷ €5 = **600 klanten per maand**

**Per dag**: 600 ÷ 30 = **20 klanten per dag**

### Betekenis:
Het café moet minimaal 20 klanten per dag hebben om de kosten te dekken. Elke klant daarboven levert €5 winst op!

## Break-even grafiek:
```
Opbrengsten/Kosten (€)
     ↑
     |    /
     |   /  ← Opbrengstenlijn
     |  /
     | /
     |/_____ ← Break-even punt
     |      /
     |     /
     |____/_______ → Aantal producten
     |   /
     |  /  ← Kostenlijn (vast + variabel)
     | /
     |/_____ ← Vaste kosten lijn
```

## Gevoeligheidsanalyse:
Wat gebeurt er als dingen veranderen?

### Scenario 1: Prijs verhogen naar €22
- Dekkingsbijdrage: €22 - €9,50 = €12,50
- Break-even: €690 ÷ €12,50 = **55 sieraden**
- **11 sieraden minder nodig!**

### Scenario 2: Vaste kosten stijgen naar €800
- Dekkingsbijdrage: blijft €10,50
- Break-even: €800 ÷ €10,50 = **76 sieraden**
- **10 sieraden meer nodig**

### Scenario 3: Variabele kosten dalen naar €8
- Dekkingsbijdrage: €20 - €8 = €12
- Break-even: €690 ÷ €12 = **58 sieraden**
- **8 sieraden minder nodig**

## Veiligheidsmarges:
**Veiligheidsmarge = Werkelijke verkoop - Break-even verkoop**

### Voorbeeld:
- Break-even: 66 sieraden
- Werkelijke verkoop: 80 sieraden
- **Veiligheidsmarge: 14 sieraden**

Dit betekent dat de verkoop 14 sieraden kan dalen voordat je verlies gaat maken.

### Denkoefening:
Je wilt een eigen t-shirt bedrijf starten:
- Vaste kosten: €500 per maand (website, marketing)
- Verkoopprijs: €25 per t-shirt
- Variabele kosten: €12 per t-shirt (t-shirt, print, verzending)

Bereken:
1. Je dekkingsbijdrage per t-shirt
2. Hoeveel t-shirts je moet verkopen om break-even te zijn
3. Je break-even omzet in euro's
4. Wat gebeurt er als je de prijs verhoogt naar €30?
              `,
              duration: '25 min'
            }
          ]
        },
        {
          id: 'ch5',
          title: 'Hoofdstuk 5: Financiering',
          description: 'Hoe bedrijven geld krijgen om te groeien',
          lessons: [
            {
              id: 'l5-1',
              title: 'Eigen vermogen vs vreemd vermogen',
              content: `
# Eigen vermogen vs Vreemd vermogen 🏦

Elk bedrijf heeft geld nodig om te starten en te groeien. Maar waar komt dat geld vandaan?

## Wat is financiering?
**Financiering** is het verkrijgen van geld om een bedrijf te starten, uit te breiden of dagelijkse kosten te betalen.

## Twee hoofdvormen:

### 1. Eigen vermogen (Equity)
Geld dat van de eigenaren van het bedrijf komt.

**Kenmerken:**
- Hoeft **niet terugbetaald** te worden
- Eigenaren hebben **zeggenschap** in het bedrijf
- Bij winst krijgen eigenaren **dividend**
- Bij verlies verliezen eigenaren hun geld

**Voorbeelden eigen vermogen:**
- **Spaargeld** van de ondernemer
- **Geld van familie/vrienden**
- **Investeerders** (business angels, venture capital)
- **Crowdfunding** (Kickstarter, GoFundMe)
- **Ingehouden winst** (winst die niet wordt uitgekeerd)

### 2. Vreemd vermogen (Debt)
Geld dat wordt geleend en moet worden terugbetaald.

**Kenmerken:**
- Moet **terugbetaald** worden (met rente)
- Geldverstrekker heeft **geen zeggenschap**
- **Rente** moet betaald worden
- Bij faillissement gaan schuldeisers **voor** eigenaren

**Voorbeelden vreemd vermogen:**
- **Banklening** (hypotheek, bedrijfslening)
- **Kredietlijn** (rood staan bij de bank)
- **Obligaties** (leningen van beleggers)
- **Leverancierskrediet** (later betalen aan leveranciers)
- **Leasing** (huren in plaats van kopen)

## Praktijkvoorbeeld: Café starten

### Totaal benodigd: €50.000

**Eigen vermogen (€30.000):**
- Eigen spaargeld: €15.000
- Ouders lenen: €10.000
- Crowdfunding: €5.000

**Vreemd vermogen (€20.000):**
- Banklening: €15.000 (5% rente, 5 jaar)
- Leverancierskrediet: €5.000 (30 dagen betalingstermijn)

## Voor- en nadelen:

### Eigen vermogen:
**Voordelen:**
✅ Geen rente betalen
✅ Geen terugbetalingsverplichting
✅ Meer financiële flexibiliteit
✅ Geen onderpand nodig

**Nadelen:**
❌ Moeilijker te verkrijgen
❌ Eigendom delen met investeerders
❌ Dividend uitkeren bij winst
❌ Beperkte beschikbaarheid

### Vreemd vermogen:
**Voordelen:**
✅ Eigendom blijft bij ondernemer
✅ Rente is aftrekbaar van belasting
✅ Meer beschikbaar dan eigen vermogen
✅ Dwingt tot discipline (moet terugbetaald)

**Nadelen:**
❌ Rente moet betaald worden
❌ Terugbetalingsverplichting
❌ Onderpand vaak vereist
❌ Financieel risico bij tegenvallende resultaten

## Optimale financieringsmix:
De meeste bedrijven gebruiken een combinatie.

### Vuistregel:
- **Startende bedrijven**: Meer eigen vermogen (60-70%)
- **Gevestigde bedrijven**: Meer vreemd vermogen mogelijk (40-60%)

### Factoren die de keuze beïnvloeden:
1. **Risico van het bedrijf** (hoog risico = meer eigen vermogen)
2. **Groeiplannen** (snelle groei = meer kapitaal nodig)
3. **Rentevoet** (lage rente = vreemd vermogen aantrekkelijker)
4. **Belastingvoordeel** (rente is aftrekbaar)

## Moderne financieringsvormen:

### Crowdfunding:
- **Kickstarter**: Product pre-orders
- **GoFundMe**: Donaties
- **Symbid**: Investeren in bedrijven

### Voorbeeld: Pebble smartwatch
- Doel: $100.000
- Resultaat: $10.3 miljoen
- 69.000 backers

### Peer-to-peer lending:
- **Geldvoorelkaar.nl**: Particulieren lenen aan bedrijven
- **Funding Circle**: Zakelijke leningen

## Financiering voor jongeren:

### Eigen bedrijf starten:
- **Qredits**: Microkredieten voor starters
- **Startkapitaal regeling**: Overheidssteun
- **Familie en vrienden**: Vaak eerste bron

### Voorbeeld: Instagram
- **Start**: Eigen geld Kevin Systrom
- **Serie A**: $7 miljoen van investeerders
- **Verkoop**: $1 miljard aan Facebook

Eigen vermogen van $0 naar $1 miljard in 2 jaar!

### Denkoefening:
Je wilt een eigen webshop starten en hebt €10.000 nodig:

1. Maak een plan: hoeveel eigen vermogen vs vreemd vermogen?
2. Waar zou je het eigen vermogen vandaan halen?
3. Welke vorm van vreemd vermogen zou je overwegen?
4. Wat zijn de risico's van jouw financieringsplan?

**Tip**: Denk aan je eigen situatie als 16-18 jarige!
              `,
              duration: '28 min'
            }
          ]
        }
      ]
    },
    havo5: {
      title: 'HAVO 5 Curriculum',
      chapters: [
        {
          id: 'ch1',
          title: 'Hoofdstuk 1: Strategisch Management',
          description: 'Leer hoe bedrijven strategische beslissingen nemen',
          lessons: [
            {
              id: 'l1-1',
              title: 'SWOT-analyse',
              content: `
# SWOT-analyse 🎯

Je wilt een eigen bedrijf starten - bijvoorbeeld een online kledingmerk. Hoe weet je of dit een goed idee is?

## Wat is een SWOT-analyse?
SWOT staat voor:
- **S**trengths (Sterktes)
- **W**eaknesses (Zwaktes)  
- **O**pportunities (Kansen)
- **T**hreats (Bedreigingen)

Een SWOT-analyse helpt bedrijven hun positie te begrijpen en strategische beslissingen te nemen.

## Interne factoren (binnen je controle):

### Strengths (Sterktes) 💪
Wat kan jouw bedrijf goed?

**Voorbeelden:**
- Uniek product design
- Goede social media skills
- Lage kosten door thuiswerken
- Sterke merkidentiteit
- Ervaren team
- Goede klantenservice
- Innovatieve technologie

### Weaknesses (Zwaktes) 😰
Waar ben je minder goed in?

**Voorbeelden:**
- Beperkt budget
- Geen ervaring met logistiek
- Kleine bekendheid
- Afhankelijk van één leverancier
- Beperkte productielijn
- Weinig personeel
- Oude technologie

## Externe factoren (buiten je controle):

### Opportunities (Kansen) 🌟
Welke trends kun je benutten?

**Voorbeelden:**
- Groeiende online shopping
- Trend naar duurzame mode
- Influencer marketing
- Jonge doelgroep actief op TikTok
- Nieuwe markten (internationaal)
- Technologische ontwikkelingen
- Veranderende wetgeving (in je voordeel)

### Threats (Bedreigingen) ⚠️
Welke risico's zijn er?

**Voorbeelden:**
- Grote concurrenten (H&M, Zara)
- Economische recessie
- Veranderende mode trends
- Nieuwe wetgeving (nadelig)
- Stijgende grondstofprijzen
- Cybersecurity risico's
- Klimaatverandering

## Praktijkvoorbeeld: Netflix

### Strengths (Sterktes):
- Grote content bibliotheek
- Wereldwijde aanwezigheid
- Sterke technologie platform
- Data-gedreven content creatie
- Eigen content productie

### Weaknesses (Zwaktes):
- Hoge content kosten
- Afhankelijk van internet
- Beperkte live content
- Hoge personeelskosten
- Schulden door content investeringen

### Opportunities (Kansen):
- Groei in ontwikkelingslanden
- Gaming markt
- Live sports content
- Virtual Reality content
- Partnerships met telecom providers

### Threats (Bedreigingen):
- Disney+, Amazon Prime concurrentie
- Piraterij
- Internetregulering
- Economische recessie
- Content creators die eigen platforms starten

## SWOT-matrix strategieën:

### SO-strategieën (Strengths + Opportunities):
Gebruik je sterktes om kansen te benutten
- **Netflix**: Eigen content + groeiende markt = meer originele series

### WO-strategieën (Weaknesses + Opportunities):
Verbeter zwaktes om kansen te pakken
- **Netflix**: Investeer in live content voor sportmarkten

### ST-strategieën (Strengths + Threats):
Gebruik sterktes om bedreigingen af te weren
- **Netflix**: Sterke technologie tegen nieuwe concurrenten

### WT-strategieën (Weaknesses + Threats):
Minimaliseer zwaktes en vermijd bedreigingen
- **Netflix**: Diversifieer content om minder afhankelijk te zijn

## SWOT voor jongeren: TikTok creator

### Strengths:
- Creatief talent
- Kennis van trends
- Jonge doelgroep
- Authentieke content
- Lage productiekosten

### Weaknesses:
- Geen business ervaring
- Beperkt budget
- Afhankelijk van één platform
- Inconsistente content
- Geen team

### Opportunities:
- Groeiende creator economy
- Merkpartnerships
- Eigen merchandise
- Cross-platform groei
- Educatieve content trend

### Threats:
- Algoritme veranderingen
- Platform bans
- Veel concurrentie
- Burnout
- Veranderende trends

## Hoe maak je een goede SWOT?

### Stap 1: Brainstorm
- Verzamel alle mogelijke factoren
- Betrek verschillende mensen
- Gebruik data en onderzoek

### Stap 2: Prioriteer
- Focus op de belangrijkste factoren
- Maximaal 5-7 punten per categorie
- Wees specifiek en concreet

### Stap 3: Strategieën ontwikkelen
- Combineer factoren voor strategieën
- Maak actieplannen
- Stel doelen en deadlines

### Stap 4: Monitor en update
- SWOT is geen eenmalige activiteit
- Update regelmatig
- Pas strategieën aan

### Jouw opdracht:
Maak een SWOT-analyse voor een lokaal café in jouw stad! Denk aan:
- Wat maakt dit café uniek? (Strengths)
- Waar kunnen ze beter? (Weaknesses)  
- Welke trends kunnen ze benutten? (Opportunities)
- Welke risico's zijn er? (Threats)
              `,
              duration: '25 min'
            },
            {
              id: 'l1-2',
              title: 'DESTEP-analyse',
              content: `
# DESTEP-analyse 🌍

Terwijl SWOT naar binnen kijkt, kijkt DESTEP naar de grote wereld om je heen. Welke maatschappelijke trends beïnvloeden jouw bedrijf?

## Wat is DESTEP?
DESTEP staat voor:
- **D**emografisch
- **E**conomisch
- **S**ociaal-cultureel
- **T**echnologisch
- **E**cologisch
- **P**olitiek-juridisch

## Demografische factoren 👥
Veranderingen in de bevolking

### Voorbeelden:
- **Vergrijzing**: Meer ouderen, minder jongeren
- **Urbanisatie**: Mensen trekken naar steden
- **Gezinssamenstelling**: Meer eenpersoonshuishoudens
- **Immigratie**: Meer culturele diversiteit
- **Geboorte/sterftecijfers**: Bevolkingsgroei of -krimp

### Impact op bedrijven:
- **Zorgbedrijven**: Meer vraag door vergrijzing
- **Woningbouw**: Meer kleine woningen nodig
- **Voedingsindustrie**: Halal/vegetarische producten
- **Onderwijs**: Minder kinderen = minder scholen

## Economische factoren 💰
De staat van de economie

### Voorbeelden:
- **Economische groei/recessie**
- **Werkloosheid**
- **Inflatie** (prijsstijgingen)
- **Rentevoet**
- **Wisselkoersen**
- **Koopkracht consumenten**

### Impact op bedrijven:
- **Recessie**: Minder luxe uitgaven, meer budget merken
- **Lage rente**: Makkelijker lenen voor investeringen
- **Hoge inflatie**: Stijgende kosten, prijsverhogingen
- **Sterke euro**: Export moeilijker, import goedkoper

## Sociaal-culturele factoren 🎭
Veranderingen in levensstijl en waarden

### Voorbeelden:
- **Duurzaamheid**: Milieubewustzijn
- **Gezondheid**: Fitness en wellness trend
- **Individualisering**: Persoonlijke keuzes belangrijker
- **Digitalisering**: Online leven
- **Work-life balance**: Minder overwerken

### Impact op bedrijven:
- **Duurzame mode**: Groeiende markt voor eco-fashion
- **Fitness apps**: Thuissporten populairder
- **Meal kits**: Gemak en gezondheid combineren
- **Flexwerk**: Vraag naar co-working spaces

## Technologische factoren 🚀
Nieuwe technologieën en innovaties

### Voorbeelden:
- **Artificial Intelligence** (AI)
- **Internet of Things** (IoT)
- **Blockchain**
- **5G netwerken**
- **Elektrische auto's**
- **Robotisering**

### Impact op bedrijven:
- **AI**: Chatbots vervangen klantenservice
- **IoT**: Slimme apparaten in huis
- **Blockchain**: Veiligere betalingen
- **5G**: Snellere mobiele diensten
- **Robots**: Automatisering in fabrieken

## Ecologische factoren 🌱
Milieu en klimaat

### Voorbeelden:
- **Klimaatverandering**
- **Milieuwetgeving**
- **Duurzame energie**
- **Afvalverwerking**
- **Waterschaarste**
- **Biodiversiteit**

### Impact op bedrijven:
- **Energiebedrijven**: Shift naar zonne/windenergie
- **Voedingsindustrie**: Minder vlees, meer plantaardig
- **Transport**: Elektrische voertuigen
- **Verpakking**: Minder plastic, meer recycling

## Politiek-juridische factoren ⚖️
Wetten, regels en politiek

### Voorbeelden:
- **Nieuwe wetgeving**
- **Belastingveranderingen**
- **Handelsoorlogen**
- **Brexit**
- **Privacy wetgeving** (AVG/GDPR)
- **Minimumloonstijging**

### Impact op bedrijven:
- **AVG**: Meer kosten voor data bescherming
- **Brexit**: Handelsbarrières met VK
- **Minimumloonstijging**: Hogere personeelskosten
- **Suikertaks**: Minder zoete drankjes

## Praktijkvoorbeeld: Thuisbezorgd.nl

### Demografisch:
- **Urbanisatie**: Meer mensen in steden = meer klanten
- **Jonge bevolking**: Digitaal native, bestelt online
- **Kleinere huishoudens**: Minder zelf koken

### Economisch:
- **Stijgende inkomens**: Meer geld voor gemak
- **Gig economy**: Flexibele bezorgers beschikbaar
- **Inflatie**: Hogere kosten, mogelijk minder bestellingen

### Sociaal-cultureel:
- **Gemakscultuur**: Mensen willen convenience
- **Thuiswerken**: Meer lunch bestellingen
- **Gezondheidsbesef**: Vraag naar gezonde opties

### Technologisch:
- **Smartphones**: App-based bestellen
- **GPS tracking**: Real-time bezorging
- **AI**: Betere aanbevelingen

### Ecologisch:
- **Milieubewustzijn**: Elektrische bezorgscooters
- **Verpakkingsafval**: Duurzame verpakkingen
- **CO2 uitstoot**: Groene bezorgopties

### Politiek-juridisch:
- **Arbeidsrecht**: Status bezorgers (werknemer vs ZZP)
- **Belastingen**: BTW op bezorgkosten
- **Verkeerswetgeving**: Regels voor bezorgscooters

## DESTEP vs SWOT:

### DESTEP:
- **Externe macro-omgeving**
- **Lange termijn trends**
- **Niet beïnvloedbaar**
- **Breed perspectief**

### SWOT:
- **Interne + directe externe omgeving**
- **Huidige situatie**
- **Deels beïnvloedbaar**
- **Bedrijfsspecifiek**

## Hoe gebruik je DESTEP?

### Stap 1: Identificeer relevante factoren
Niet alle DESTEP factoren zijn even belangrijk voor elk bedrijf

### Stap 2: Analyseer impact
- Positief of negatief?
- Groot of klein?
- Kort of lang termijn?

### Stap 3: Ontwikkel strategieën
- Hoe inspeel je in op kansen?
- Hoe bescherm je tegen bedreigingen?

### Stap 4: Monitor ontwikkelingen
DESTEP factoren veranderen constant

### Jouw opdracht:
Kies een bedrijf dat je goed kent (bijv. Bol.com, Spotify, of een lokaal bedrijf) en maak een DESTEP-analyse:

1. Welke demografische trends beïnvloeden dit bedrijf?
2. Hoe beïnvloedt de economie hun business?
3. Welke sociale trends zijn relevant?
4. Welke technologieën zijn belangrijk?
5. Welke milieufactoren spelen een rol?
6. Welke wetten en regels zijn van invloed?
              `,
              duration: '30 min'
            },
            {
              id: 'l1-3',
              title: 'Concurrentieanalyse',
              content: `
# Concurrentieanalyse 🥊

"Ken je vijand en ken jezelf" - dit geldt ook in de business wereld!

## Wat is concurrentieanalyse?
Het systematisch onderzoeken van je concurrenten om je eigen positie te verbeteren en strategische voordelen te behalen.

## Waarom is het belangrijk?
- **Marktpositie begrijpen**
- **Kansen identificeren**
- **Bedreigingen herkennen**
- **Strategieën ontwikkelen**
- **Benchmarking** (vergelijken met beste in de markt)

## Soorten concurrenten:

### 1. Directe concurrenten
Bedrijven die hetzelfde product verkopen aan dezelfde doelgroep
- **McDonald's vs Burger King** (fastfood burgers)
- **iPhone vs Samsung Galaxy** (premium smartphones)
- **Netflix vs Disney+** (streaming diensten)

### 2. Indirecte concurrenten  
Bedrijven die andere producten verkopen maar dezelfde behoefte vervullen
- **Netflix vs PlayStation** (entertainment)
- **Uber vs OV** (vervoer)
- **WhatsApp vs Instagram** (communicatie)

### 3. Substituten
Producten die je product kunnen vervangen
- **Streaming vs bioscoop**
- **E-books vs fysieke boeken**
- **Videobellen vs reizen**

## Porter's Five Forces model:

### 1. Concurrentie binnen de sector
Hoe hevig is de concurrentie?
- **Veel concurrenten**: Heftige prijzenoorlog
- **Weinig concurrenten**: Meer rust, hogere prijzen

### 2. Dreiging van nieuwe toetreders
Hoe makkelijk kunnen nieuwe bedrijven de markt betreden?
- **Lage barrières**: Veel nieuwe concurrenten (apps)
- **Hoge barrières**: Weinig nieuwe concurrenten (vliegmaatschappijen)

### 3. Onderhandelingsmacht leveranciers
Hoeveel macht hebben leveranciers?
- **Weinig leveranciers**: Hoge prijzen, slechte voorwaarden
- **Veel leveranciers**: Lage prijzen, goede voorwaarden

### 4. Onderhandelingsmacht afnemers
Hoeveel macht hebben klanten?
- **Weinig klanten**: Klanten bepalen de prijs
- **Veel klanten**: Bedrijf bepaalt de prijs

### 5. Dreiging van substituten
Hoe makkelijk kunnen klanten overstappen?
- **Veel substituten**: Lage prijzen, innovatie nodig
- **Weinig substituten**: Hogere prijzen mogelijk

## Praktijkvoorbeeld: Spotify

### Directe concurrenten:
- **Apple Music**: Geïntegreerd in Apple ecosysteem
- **YouTube Music**: Gratis met advertenties
- **Amazon Music**: Bundel met Prime membership

### Indirecte concurrenten:
- **YouTube**: Gratis muziek met video
- **Radio**: Traditionele muziekbron
- **Podcasts**: Audio entertainment

### Substituten:
- **Fysieke CD's**: Nog steeds populair bij sommigen
- **Vinyl**: Groeiende niche markt
- **Live muziek**: Concerten en festivals

## Concurrentieanalyse framework:

### 1. Identificeer concurrenten
- **Marktonderzoek**
- **Google zoeken**
- **Klantenfeedback**
- **Branche rapporten**

### 2. Verzamel informatie
- **Website analyse**
- **Social media**
- **Financiële rapporten**
- **Nieuwsberichten**
- **Klantbeoordelingen**

### 3. Analyseer sterktes en zwaktes
- **Product kwaliteit**
- **Prijsstelling**
- **Marketing**
- **Klantenservice**
- **Distributie**

### 4. Benchmark prestaties
- **Marktaandeel**
- **Groeipercentage**
- **Winstgevendheid**
- **Klanttevredenheid**

## Concurrentie matrix voorbeeld:

| Factor | Jouw bedrijf | Concurrent A | Concurrent B |
|--------|-------------|-------------|-------------|
| **Prijs** | €20 | €18 | €25 |
| **Kwaliteit** | 8/10 | 7/10 | 9/10 |
| **Service** | 9/10 | 6/10 | 8/10 |
| **Marketing** | Zwak | Sterk | Gemiddeld |
| **Locatie** | Goed | Uitstekend | Slecht |

## Strategische opties:

### 1. Kostenleiderschap
Goedkoopste aanbieder worden
- **Voorbeeld**: Ryanair (goedkoopste vluchten)
- **Risico**: Prijzenoorlog, lage marges

### 2. Differentiatie
Uniek product of service aanbieden
- **Voorbeeld**: Apple (premium design)
- **Risico**: Hogere kosten, niche markt

### 3. Focus strategie
Concentreren op specifieke doelgroep
- **Voorbeeld**: Tesla (luxe elektrische auto's)
- **Risico**: Beperkte markt, afhankelijkheid

## Concurrentie intelligence:

### Legale methoden:
- **Openbare informatie** (websites, rapporten)
- **Klantenfeedback**
- **Beurzen en events**
- **Social media monitoring**
- **Mystery shopping**

### Illegale methoden (NIET doen!):
- **Bedrijfsspionage**
- **Hacken**
- **Omkoping werknemers**
- **Inbraak**

## Moderne tools:

### Website analyse:
- **SimilarWeb**: Traffic en engagement
- **SEMrush**: SEO en advertenties
- **Ahrefs**: Backlinks en keywords

### Social media:
- **Hootsuite**: Social media monitoring
- **Brandwatch**: Sentiment analyse
- **Sprout Social**: Competitor tracking

### Algemeen:
- **Google Alerts**: Nieuws monitoring
- **Crunchbase**: Bedrijfsinformatie
- **LinkedIn**: Personeel bewegingen

## Red Ocean vs Blue Ocean:

### Red Ocean (rode oceaan):
- **Bestaande markten**
- **Heftige concurrentie**
- **Prijzenoorlog**
- **Voorbeeld**: Fastfood markt

### Blue Ocean (blauwe oceaan):
- **Nieuwe markten creëren**
- **Geen directe concurrentie**
- **Hogere marges**
- **Voorbeeld**: Cirque du Soleil (circus + theater)

## Praktijkvoorbeeld: Lokale pizzeria

### Directe concurrenten:
- **Domino's**: Snelle bezorging, standaard kwaliteit
- **New York Pizza**: Amerikaanse stijl, marketing
- **Lokale concurrent**: Authentiek Italiaans

### Analyse:
- **Prijs**: Vergelijkbaar (€12-15 per pizza)
- **Kwaliteit**: Lokaal vaak beter
- **Snelheid**: Domino's het snelst
- **Uniekheid**: Lokaal meest authentiek

### Strategie opties:
1. **Kostenleiderschap**: Goedkoopste pizza's
2. **Differentiatie**: Beste kwaliteit, authentiek
3. **Focus**: Specialiseren in vegetarische pizza's

### Jouw opdracht:
Kies een lokaal bedrijf in jouw stad (café, kledingwinkel, sportschool) en maak een concurrentieanalyse:

1. Wie zijn de directe concurrenten?
2. Wie zijn de indirecte concurrenten?
3. Wat zijn de sterktes en zwaktes van elke concurrent?
4. Welke strategie zou je aanbevelen?
5. Welke kansen zie je voor verbetering?
              `,
              duration: '35 min'
            }
          ]
        },
        {
          id: 'ch2',
          title: 'Hoofdstuk 2: Investeringsanalyse',
          description: 'Leer hoe bedrijven slimme investeringsbeslissingen nemen',
          lessons: [
            {
              id: 'l2-1',
              title: 'Netto Contante Waarde (NCW)',
              content: `
# Netto Contante Waarde (NCW) 💰

Stel je voor: je overweegt een nieuwe laptop van €1500 te kopen voor je bijbaan. Hij helpt je €400 per jaar extra verdienen. Is dat een goede investering?

## Wat is NCW?
**Netto Contante Waarde (Net Present Value)** is een methode om te bepalen of een investering winstgevend is door alle toekomstige geldstromen om te rekenen naar de waarde van vandaag.

## Waarom NCW gebruiken?
- **Geld vandaag is meer waard** dan geld morgen (tijdswaarde van geld)
- **Inflatie** maakt geld minder waard
- **Alternatieve beleggingen** leveren ook rendement op
- **Risico** van toekomstige inkomsten

## De formule:
**NCW = -Investering + (Kasstromen ÷ (1 + r)ⁿ)**

Waarbij:
- **r** = discontovoet (vereist rendement)
- **n** = aantal jaren

## Stap-voor-stap voorbeeld:

### Laptop investering:
- **Investering**: €1.500 (nu)
- **Extra inkomsten**: €400 per jaar (4 jaar)
- **Discontovoet**: 8% (wat je anders zou verdienen)

### Berekening:
**Jaar 0**: -€1.500 (investering)
**Jaar 1**: €400 ÷ (1,08)¹ = €370,37
**Jaar 2**: €400 ÷ (1,08)² = €342,94
**Jaar 3**: €400 ÷ (1,08)³ = €317,54
**Jaar 4**: €400 ÷ (1,08)⁴ = €294,02

**NCW = -€1.500 + €370,37 + €342,94 + €317,54 + €294,02 = -€175,13**

### Conclusie:
**Negatieve NCW = slechte investering!** Je verliest €175,13 aan waarde.

## Beslisregels:
- **NCW > 0**: Goede investering (accepteren)
- **NCW = 0**: Indifferent (maakt niet uit)
- **NCW < 0**: Slechte investering (afwijzen)

## Praktijkvoorbeeld: Café uitbreiding

### Situatie:
Een café overweegt een terras aan te leggen:
- **Investering**: €25.000
- **Extra winst**: €8.000 per jaar (5 jaar)
- **Discontovoet**: 10%

### Berekening:
**Jaar 0**: -€25.000
**Jaar 1**: €8.000 ÷ 1,10¹ = €7.273
**Jaar 2**: €8.000 ÷ 1,10² = €6.612
**Jaar 3**: €8.000 ÷ 1,10³ = €6.011
**Jaar 4**: €8.000 ÷ 1,10⁴ = €5.464
**Jaar 5**: €8.000 ÷ 1,10⁵ = €4.967

**NCW = -€25.000 + €30.327 = €5.327**

### Conclusie:
**Positieve NCW = goede investering!** Het terras levert €5.327 extra waarde op.

## Factoren die NCW beïnvloeden:

### 1. Discontovoet
**Hogere discontovoet = lagere NCW**

**Voorbeeld**: Terras met 15% discontovoet:
- NCW = -€25.000 + €26.808 = €1.808 (nog steeds positief, maar lager)

### 2. Tijdsduur
**Langere periode = meer kasstromen**

**Voorbeeld**: Terras voor 10 jaar in plaats van 5:
- Extra jaren 6-10 leveren nog €18.443 op
- Totale NCW = €5.327 + €18.443 = €23.770

### 3. Kasstroom grootte
**Hogere kasstromen = hogere NCW**

**Voorbeeld**: Terras levert €10.000 per jaar op:
- NCW = -€25.000 + €37.908 = €12.908

## Discontovoet bepalen:

### Voor bedrijven:
- **Risicovrije rente** (staatsobligaties): 2%
- **Risicopremie** (bedrijfsrisico): 3-8%
- **Totaal**: 5-10% voor normale bedrijven

### Voor persoonlijke investeringen:
- **Spaarrente**: 1-2%
- **Beleggingsrendement**: 5-7%
- **Inflatie**: 2-3%

## Gevoeligheidsanalyse:
Wat gebeurt er als aannames veranderen?

### Scenario analyse café terras:

| Scenario | Jaarlijkse winst | Discontovoet | NCW |
|----------|-----------------|-------------|-----|
| **Optimistisch** | €10.000 | 8% | €14.927 |
| **Realistisch** | €8.000 | 10% | €5.327 |
| **Pessimistisch** | €6.000 | 12% | -€3.378 |

### Conclusie:
Zelfs in het pessimistische scenario is de NCW negatief. Het project is risicovol!

## NCW vs andere methoden:

### Terugverdientijd:
**Terugverdientijd = Investering ÷ Jaarlijkse kasstroom**
- Café terras: €25.000 ÷ €8.000 = 3,1 jaar
- **Probleem**: Negeert tijdswaarde van geld

### Internal Rate of Return (IRR):
De discontovoet waarbij NCW = 0
- **Voordeel**: Percentage is makkelijk te begrijpen
- **Nadeel**: Kan misleidend zijn bij complexe projecten

## Moderne toepassingen:

### Startup waardering:
- **Verwachte kasstromen**: Moeilijk te voorspellen
- **Hoge discontovoet**: 15-25% (hoog risico)
- **Lange termijn**: 5-10 jaar

### Vastgoed investering:
- **Huurinkomsten**: Relatief voorspelbaar
- **Lagere discontovoet**: 6-10%
- **Restwaarde**: Waarde van pand na periode

### Persoonlijke investeringen:

#### Studie financieren:
- **Investering**: Studiekosten €30.000
- **Extra inkomen**: €5.000 per jaar (40 jaar)
- **Discontovoet**: 5%
- **NCW**: Zeer positief! Studie loont bijna altijd

#### Auto kopen vs leasen:
- **Kopen**: Hoge investering, restwaarde
- **Leasen**: Lagere maandlasten, geen restwaarde
- **NCW analyse**: Welke optie is goedkoper?

## Excel formule:
**=NPV(discontovoet, kasstromen) - investering**

### Voorbeeld:
```
A1: -25000 (investering)
A2: 8000 (jaar 1)
A3: 8000 (jaar 2)
A4: 8000 (jaar 3)
A5: 8000 (jaar 4)
A6: 8000 (jaar 5)

Formule: =NPV(10%, A2:A6) + A1
Resultaat: €5.327
```

## Beperkingen van NCW:
- **Aannames over toekomst** (kasstromen, discontovoet)
- **Kwalitatieve factoren** worden genegeerd
- **Complexe berekeningen** voor beginners
- **Gevoelig voor aannames**

### Jouw opdracht:
Je overweegt een eigen YouTube kanaal te starten:
- **Investering**: €2.000 (camera, editing software, microfoon)
- **Verwachte inkomsten**: €500 per jaar (5 jaar)
- **Discontovoet**: 8%

Bereken:
1. De NCW van deze investering
2. Wat gebeurt er als je inkomsten €300 per jaar zijn?
3. Wat gebeurt er als je discontovoet 12% is?
4. Bij welke jaarlijkse inkomsten is de NCW precies 0?

**Tip**: Gebruik Excel of een rekenmachine voor de berekeningen!
              `,
              duration: '30 min'
            },
            {
              id: 'l2-2',
              title: 'Terugverdientijd',
              content: `
# Terugverdientijd ⏰

"Wanneer heb ik mijn geld terug?" - De meest gestelde vraag bij investeringen!

## Wat is terugverdientijd?
**Terugverdientijd (Payback Period)** is de tijd die nodig is om een investering terug te verdienen door de kasstromen die het genereert.

## Waarom is het populair?
- **Simpel te begrijpen** (geen ingewikkelde formules)
- **Risico indicator** (korter = minder risico)
- **Liquiditeit focus** (snel geld terug)
- **Makkelijk te communiceren** naar management

## Twee methoden:

### 1. Eenvoudige terugverdientijd
Negeert tijdswaarde van geld

**Formule**: **Terugverdientijd = Investering ÷ Jaarlijkse kasstroom**

### 2. Gedisconteerde terugverdientijd  
Houdt rekening met tijdswaarde van geld

**Methode**: Cumulatieve gedisconteerde kasstromen berekenen

## Voorbeeld 1: Eenvoudige terugverdientijd

### Café terras investering:
- **Investering**: €25.000
- **Jaarlijkse extra winst**: €8.000

**Terugverdientijd = €25.000 ÷ €8.000 = 3,1 jaar**

### Interpretatie:
Na 3,1 jaar heb je je investering terugverdiend. Alles daarna is pure winst!

## Voorbeeld 2: Ongelijke kasstromen

### Food truck investering:
- **Investering**: €40.000
- **Jaar 1**: €5.000 winst
- **Jaar 2**: €10.000 winst  
- **Jaar 3**: €15.000 winst
- **Jaar 4**: €20.000 winst

### Cumulatieve kasstromen:
- **Eind jaar 1**: €5.000
- **Eind jaar 2**: €5.000 + €10.000 = €15.000
- **Eind jaar 3**: €15.000 + €15.000 = €30.000
- **Eind jaar 4**: €30.000 + €20.000 = €50.000

### Terugverdientijd:
Na jaar 3 heb je €30.000 terug, nog €10.000 nodig.
In jaar 4 verdien je €20.000, dus je hebt €10.000 ÷ €20.000 = 0,5 jaar nodig.

**Terugverdientijd = 3 + 0,5 = 3,5 jaar**

## Gedisconteerde terugverdientijd

### Zelfde food truck, 10% discontovoet:

| Jaar | Kasstroom | Discontovoet | Gedisconteerd | Cumulatief |
|------|-----------|-------------|---------------|------------|
| 0 | -€40.000 | - | -€40.000 | -€40.000 |
| 1 | €5.000 | 1,10¹ | €4.545 | -€35.455 |
| 2 | €10.000 | 1,10² | €8.264 | -€27.191 |
| 3 | €15.000 | 1,10³ | €11.270 | -€15.921 |
| 4 | €20.000 | 1,10⁴ | €13.660 | -€2.261 |
| 5 | €20.000 | 1,10⁵ | €12.418 | €10.157 |

**Gedisconteerde terugverdientijd**: Tussen jaar 4 en 5
€2.261 ÷ €12.418 = 0,18 jaar
**Totaal: 4 + 0,18 = 4,2 jaar**

## Beslisregels:

### Voor bedrijven:
- **< 2 jaar**: Uitstekend
- **2-4 jaar**: Goed  
- **4-6 jaar**: Acceptabel
- **> 6 jaar**: Risicovol

### Voor persoonlijke investeringen:
- **Zonnepanelen**: 8-12 jaar acceptabel
- **Energiebesparende maatregelen**: 5-10 jaar
- **Opleiding/cursus**: 1-3 jaar

## Voordelen terugverdientijd:
✅ **Simpel te berekenen en begrijpen**
✅ **Goede risico indicator**  
✅ **Focus op liquiditeit**
✅ **Geschikt voor onzekere markten**
✅ **Makkelijk te communiceren**

## Nadelen terugverdientijd:
❌ **Negeert kasstromen na terugverdientijd**
❌ **Geen rekening met tijdswaarde (eenvoudige methode)**
❌ **Geen absolute winstgevendheid**
❌ **Kan misleidend zijn**

## Praktijkvoorbeeld: Twee investeringen

### Investering A: Snackbar
- **Investering**: €50.000
- **Jaarlijkse winst**: €25.000 (2 jaar)
- **Terugverdientijd**: 2 jaar
- **Totale winst 5 jaar**: €125.000

### Investering B: Restaurant  
- **Investering**: €50.000
- **Jaarlijkse winst**: €12.500 (4 jaar)
- **Terugverdientijd**: 4 jaar
- **Totale winst 5 jaar**: €62.500

### Terugverdientijd zegt: Kies A
### NCW zegt: Hangt af van discontovoet en periode

## Combinatie met andere methoden:

### Terugverdientijd + NCW:
1. **Eerste filter**: Terugverdientijd < maximum
2. **Finale beslissing**: Hoogste NCW

### Voorbeeld selectiecriteria:
- **Terugverdientijd**: Maximum 4 jaar
- **NCW**: Minimaal positief
- **IRR**: Minimaal 15%

## Sector verschillen:

### Technologie bedrijven:
- **Korte terugverdientijd** gewenst (1-3 jaar)
- **Snelle veranderingen** in technologie
- **Hoog risico** van veroudering

### Nutsbedrijven:
- **Lange terugverdientijd** acceptabel (10-20 jaar)
- **Stabiele kasstromen**
- **Lage risico's**

### Retail:
- **Gemiddelde terugverdientijd** (3-5 jaar)
- **Seizoensschommelingen**
- **Concurrentiedruk**

## Moderne toepassingen:

### Duurzaamheidsinvesteringen:
- **Zonnepanelen**: 8-12 jaar terugverdientijd
- **Isolatie**: 5-8 jaar
- **Warmtepomp**: 10-15 jaar

### Digitale marketing:
- **Website**: 6-12 maanden
- **SEO**: 12-18 maanden  
- **Social media advertising**: 1-3 maanden

### Persoonlijke ontwikkeling:
- **Rijbewijs**: 1-2 maanden (meer baankansen)
- **Taalcursus**: 6-12 maanden
- **Certificering**: 3-6 maanden

## Excel berekening:

### Eenvoudige terugverdientijd:
```
A1: Investering (€50.000)
A2: Jaarlijkse kasstroom (€12.500)
A3: =A1/A2 (Terugverdientijd in jaren)
```

### Ongelijke kasstromen:
```
A1: -50000 (investering)
A2: 5000 (jaar 1)
A3: 10000 (jaar 2)
A4: 15000 (jaar 3)
A5: 20000 (jaar 4)

B1: =A1 (cumulatief jaar 0)
B2: =B1+A2 (cumulatief jaar 1)
B3: =B2+A3 (cumulatief jaar 2)
etc.
```

## Gevoeligheidsanalyse:

### Wat als kasstromen 20% lager zijn?
- **Oorspronkelijk**: €8.000 per jaar → 3,1 jaar
- **20% lager**: €6.400 per jaar → 3,9 jaar
- **Impact**: 0,8 jaar langer

### Wat als investering 10% hoger is?
- **Oorspronkelijk**: €25.000 → 3,1 jaar  
- **10% hoger**: €27.500 → 3,4 jaar
- **Impact**: 0,3 jaar langer

## Terugverdientijd in verschillende sectoren:

### Software/Apps:
- **Ontwikkelkosten**: €10.000-100.000
- **Maandelijkse inkomsten**: €1.000-10.000
- **Terugverdientijd**: 6-18 maanden

### E-commerce:
- **Startkosten**: €5.000-50.000
- **Maandelijkse winst**: €500-5.000  
- **Terugverdientijd**: 12-24 maanden

### Fysieke winkels:
- **Startkosten**: €50.000-200.000
- **Maandelijkse winst**: €2.000-10.000
- **Terugverdientijd**: 24-60 maanden

### Jouw opdracht:
Je overweegt drie verschillende bijbanen/investeringen:

**Optie A: Bijles geven**
- Investering: €500 (materialen, marketing)
- Maandelijkse winst: €200

**Optie B: Online shop**  
- Investering: €2.000 (website, voorraad)
- Maandelijkse winst: €300

**Optie C: YouTube kanaal**
- Investering: €1.500 (equipment)
- Maandelijkse winst: €100 (eerste jaar), €200 (tweede jaar), €400 (derde jaar)

Bereken voor elke optie:
1. De eenvoudige terugverdientijd
2. Welke optie heeft de kortste terugverdientijd?
3. Welke andere factoren zou je meenemen in je beslissing?
              `,
              duration: '25 min'
            }
          ]
        },
        {
          id: 'ch3',
          title: 'Hoofdstuk 3: Financiële Analyse',
          description: 'Leer hoe je de financiële gezondheid van bedrijven beoordeelt',
          lessons: [
            {
              id: 'l3-1',
              title: 'Liquiditeitsratio\'s',
              content: `
# Liquiditeitsratio's 💧

Kan een bedrijf zijn rekeningen betalen? Dat is de belangrijkste vraag voor liquiditeit!

## Wat is liquiditeit?
**Liquiditeit** is het vermogen van een bedrijf om op korte termijn (binnen 1 jaar) aan zijn betalingsverplichtingen te voldoen.

## Waarom is liquiditeit belangrijk?
- **Overleven**: Geen liquiditeit = faillissement
- **Kredietwaardigheid**: Banken kijken naar liquiditeit
- **Leveranciers**: Willen zekerheid van betaling
- **Groei**: Liquiditeit nodig voor investeringen

## De drie belangrijkste liquiditeitsratio's:

### 1. Current Ratio (Liquiditeitsratio)
**Formule: Vlottende activa ÷ Kortlopende schulden**

### 2. Quick Ratio (Zuur test)
**Formule: (Vlottende activa - Voorraden) ÷ Kortlopende schulden**

### 3. Cash Ratio (Kas ratio)
**Formule: (Kas + Kortlopende beleggingen) ÷ Kortlopende schulden**

## Praktijkvoorbeeld: Lokale kledingwinkel

### Balans (vereenvoudigd):
**Vlottende activa:**
- Kas: €5.000
- Bank: €15.000
- Debiteuren: €8.000
- Voorraden: €25.000
- **Totaal vlottende activa: €53.000**

**Kortlopende schulden:**
- Crediteuren: €12.000
- Belastingschuld: €3.000
- Kortlopende lening: €10.000
- **Totaal kortlopende schulden: €25.000**

### Berekeningen:

#### Current Ratio:
€53.000 ÷ €25.000 = **2,12**

**Interpretatie**: Voor elke €1 schuld heeft het bedrijf €2,12 aan vlottende activa.

#### Quick Ratio:
(€53.000 - €25.000) ÷ €25.000 = €28.000 ÷ €25.000 = **1,12**

**Interpretatie**: Zonder voorraden kan het bedrijf nog steeds alle schulden betalen.

#### Cash Ratio:
(€5.000 + €15.000) ÷ €25.000 = €20.000 ÷ €25.000 = **0,80**

**Interpretatie**: Met alleen kas kan 80% van de schulden worden betaald.

## Benchmarks en interpretatie:

### Current Ratio:
- **> 2,0**: Uitstekend (veel liquiditeit)
- **1,5 - 2,0**: Goed (voldoende liquiditeit)
- **1,0 - 1,5**: Acceptabel (beperkte liquiditeit)
- **< 1,0**: Problematisch (te weinig liquiditeit)

### Quick Ratio:
- **> 1,0**: Goed (kan schulden betalen zonder voorraden)
- **0,8 - 1,0**: Acceptabel
- **< 0,8**: Risicovol (afhankelijk van voorraadverkoop)

### Cash Ratio:
- **> 0,5**: Uitstekend
- **0,2 - 0,5**: Goed
- **< 0,2**: Mogelijk problematisch

## Sector verschillen:

### Supermarkten:
- **Lage ratio's** acceptabel (snelle voorraadrotatie)
- Current ratio: 0,8 - 1,2
- Quick ratio: 0,3 - 0,6

### Software bedrijven:
- **Hoge ratio's** verwacht (weinig voorraden)
- Current ratio: 2,0 - 4,0
- Quick ratio: 1,8 - 3,5

### Productie bedrijven:
- **Gemiddelde ratio's** (veel voorraden)
- Current ratio: 1,5 - 2,5
- Quick ratio: 0,8 - 1,5

## Waarschuwingssignalen:

### Te lage liquiditeit:
- **Betalingsachterstanden** bij leveranciers
- **Kredietlimiet** volledig benut
- **Voorraden** snel verkopen met korting
- **Personeel** later uitbetalen

### Te hoge liquiditeit:
- **Geld** ligt stil (geen rendement)
- **Gemiste investeringen** in groei
- **Inefficiënt** gebruik van kapitaal

## Liquiditeit verbeteren:

### Korte termijn:
1. **Debiteuren sneller innen**
   - Kortere betalingstermijnen
   - Factoring (verkoop vorderingen)
   - Incassobureau inschakelen

2. **Crediteuren later betalen**
   - Langere betalingstermijnen onderhandelen
   - Gebruik maken van betalingstermijnen

3. **Voorraden verminderen**
   - Uitverkoop organiseren
   - Just-in-time inkoop
   - Betere voorraadplanning

4. **Kas verhogen**
   - Kredietlijn aanvragen
   - Kortlopende lening
   - Factoring

### Lange termijn:
1. **Werkkapitaal optimaliseren**
2. **Cashflow verbeteren**
3. **Eigen vermogen verhogen**
4. **Langlopende financiering**

## Praktijkvoorbeeld: Restaurant

### Situatie:
Een restaurant heeft liquiditeitsproblemen door Corona.

**Voor Corona:**
- Current ratio: 1,8
- Quick ratio: 1,2
- Cash ratio: 0,4

**Na Corona:**
- Current ratio: 0,9
- Quick ratio: 0,6
- Cash ratio: 0,1

### Acties ondernomen:
1. **Steunpakket** aangevraagd (€25.000)
2. **Leveranciers** om uitstel gevraagd
3. **Takeaway** service gestart
4. **Personeel** tijdelijk ontslagen

### Resultaat na 6 maanden:
- Current ratio: 1,4
- Quick ratio: 1,0
- Cash ratio: 0,3

## Liquiditeitsplanning:

### Cashflow prognose (3 maanden):
| Maand | Inkomsten | Uitgaven | Saldo | Cumulatief |
|-------|-----------|----------|-------|------------|
| **Jan** | €15.000 | €18.000 | -€3.000 | €7.000 |
| **Feb** | €12.000 | €16.000 | -€4.000 | €3.000 |
| **Mrt** | €20.000 | €17.000 | €3.000 | €6.000 |

### Conclusie:
In februari wordt het krap (€3.000 kas). Mogelijk kredietlijn nodig.

## Moderne tools:

### Software:
- **Excel**: Eenvoudige ratio berekeningen
- **QuickBooks**: Automatische ratio's
- **Exact**: Nederlandse boekhoudpakketten

### Apps:
- **Moneybird**: Online boekhouding
- **SnelStart**: MKB gericht
- **Twinfield**: Grotere bedrijven

## Liquiditeit vs Rentabiliteit:

### Trade-off:
- **Hoge liquiditeit**: Veilig maar lage rendementen
- **Lage liquiditeit**: Risicovol maar hogere rendementen

### Optimale balans:
- **Voldoende** liquiditeit voor dagelijkse operaties
- **Overtollige** liquiditeit investeren
- **Kredietfaciliteiten** als buffer

## Internationale vergelijking:

### Nederlandse bedrijven:
- **Conservatief**: Relatief hoge liquiditeit
- **Banken**: Strenge kredietverlening
- **Cultuur**: Voorzichtigheid belangrijk

### Amerikaanse bedrijven:
- **Agressiever**: Lagere liquiditeit
- **Kapitaalmarkten**: Makkelijker financiering
- **Cultuur**: Groei belangrijker dan veiligheid

## Liquiditeit in crisis:

### COVID-19 impact:
- **Horeca**: Dramatische daling liquiditeit
- **Tech**: Weinig impact of verbetering
- **Retail**: Gemengd beeld (online vs fysiek)

### Lessen:
1. **Buffer** aanhouden voor crises
2. **Flexibiliteit** in kostenstructuur
3. **Diversificatie** van inkomstenbronnen
4. **Scenario planning** voor verschillende situaties

### Jouw opdracht:
Analyseer de liquiditeit van dit bedrijf:

**Bedrijf X - Balansgegevens:**
- Kas: €8.000
- Bank: €22.000
- Debiteuren: €15.000
- Voorraden: €35.000
- Crediteuren: €18.000
- Belastingschuld: €5.000
- Kortlopende lening: €12.000

Bereken:
1. Current ratio
2. Quick ratio  
3. Cash ratio
4. Beoordeel de liquiditeitspositie
5. Geef 3 concrete adviezen voor verbetering

**Bonus**: Vergelijk met een bedrijf uit dezelfde sector (zoek online naar jaarverslagen).
              `,
              duration: '30 min'
            },
            {
              id: 'l3-2',
              title: 'Rentabiliteitsratio\'s',
              content: `
# Rentabiliteitsratio's 📈

Hoeveel winst maakt een bedrijf? En is dat genoeg?

## Wat is rentabiliteit?
**Rentabiliteit** meet hoe efficiënt een bedrijf winst genereert uit zijn activiteiten, verkopen en investeringen.

## Waarom rentabiliteit meten?
- **Prestatie beoordelen**: Hoe goed presteert het management?
- **Vergelijken**: Met concurrenten en vorige jaren
- **Investeren**: Welke bedrijven zijn aantrekkelijk?
- **Kredietverlening**: Kunnen leningen worden terugbetaald?

## De belangrijkste rentabiliteitsratio's:

### 1. Bruto winstmarge
**Formule: (Bruto winst ÷ Omzet) × 100%**

### 2. Netto winstmarge  
**Formule: (Netto winst ÷ Omzet) × 100%**

### 3. Return on Assets (ROA)
**Formule: (Netto winst ÷ Totale activa) × 100%**

### 4. Return on Equity (ROE)
**Formule: (Netto winst ÷ Eigen vermogen) × 100%**

## Praktijkvoorbeeld: Lokale bakkerij

### Resultatenrekening (jaar):
- **Omzet**: €200.000
- **Kosten van verkochte goederen**: €120.000
- **Bruto winst**: €80.000
- **Operationele kosten**: €50.000
- **Rente**: €5.000
- **Belasting**: €7.500
- **Netto winst**: €17.500

### Balans:
- **Totale activa**: €150.000
- **Eigen vermogen**: €75.000

### Berekeningen:

#### Bruto winstmarge:
(€80.000 ÷ €200.000) × 100% = **40%**

**Interpretatie**: Van elke euro omzet blijft €0,40 over na directe kosten.

#### Netto winstmarge:
(€17.500 ÷ €200.000) × 100% = **8,75%**

**Interpretatie**: Van elke euro omzet blijft €0,09 over als netto winst.

#### Return on Assets (ROA):
(€17.500 ÷ €150.000) × 100% = **11,7%**

**Interpretatie**: Elke euro aan activa genereert €0,12 winst per jaar.

#### Return on Equity (ROE):
(€17.500 ÷ €75.000) × 100% = **23,3%**

**Interpretatie**: Elke euro eigen vermogen levert €0,23 winst op.

## Benchmarks per sector:

### Supermarkten:
- **Bruto marge**: 20-25%
- **Netto marge**: 1-3%
- **ROA**: 3-6%
- **ROE**: 8-15%

### Software bedrijven:
- **Bruto marge**: 70-90%
- **Netto marge**: 15-25%
- **ROA**: 8-15%
- **ROE**: 15-30%

### Restaurants:
- **Bruto marge**: 60-70%
- **Netto marge**: 3-8%
- **ROA**: 5-10%
- **ROE**: 10-20%

### Productie bedrijven:
- **Bruto marge**: 25-40%
- **Netto marge**: 5-12%
- **ROA**: 4-8%
- **ROE**: 10-18%

## Analyse en interpretatie:

### Hoge bruto marge, lage netto marge:
**Probleem**: Hoge operationele kosten
**Voorbeeld**: Luxe restaurant met dure ingrediënten maar hoge personeelskosten

**Oplossingen**:
- Operationele efficiëntie verbeteren
- Kosten verlagen
- Automatisering

### Lage bruto marge, redelijke netto marge:
**Situatie**: Efficiënte operaties ondanks lage marges
**Voorbeeld**: Supermarkten (volume business)

**Strategie**:
- Focus op volume
- Kostenbeheersing
- Schaalvoordelen

### ROA vs ROE verschil:
**Grote verschil**: Veel vreemd vermogen (leverage)
**Kleine verschil**: Weinig vreemd vermogen

## DuPont analyse:
**ROE = Netto marge × Asset turnover × Equity multiplier**

### Bakkerij voorbeeld:
- **Netto marge**: 8,75%
- **Asset turnover**: €200.000 ÷ €150.000 = 1,33
- **Equity multiplier**: €150.000 ÷ €75.000 = 2,0

**ROE = 8,75% × 1,33 × 2,0 = 23,3%** ✓

### Interpretatie:
ROE kan worden verbeterd door:
1. **Hogere marges** (betere prijzen/lagere kosten)
2. **Betere asset utilization** (meer omzet per euro activa)
3. **Meer leverage** (meer vreemd vermogen)

## Trends analyseren:

### 5-jaar trend bakkerij:
| Jaar | Omzet | Netto marge | ROA | ROE |
|------|-------|-------------|-----|-----|
| **2020** | €150.000 | 6,0% | 8,0% | 15,0% |
| **2021** | €160.000 | 7,0% | 9,5% | 18,0% |
| **2022** | €180.000 | 8,0% | 10,5% | 20,5% |
| **2023** | €190.000 | 8,5% | 11,0% | 22,0% |
| **2024** | €200.000 | 8,75% | 11,7% | 23,3% |

### Conclusie:
**Positieve trend**: Alle ratio's verbeteren consistent. Goed management!

## Factoren die rentabiliteit beïnvloeden:

### Externe factoren:
- **Economische conjunctuur**
- **Concurrentie intensiteit**
- **Regelgeving**
- **Grondstofprijzen**
- **Wisselkoersen**

### Interne factoren:
- **Operationele efficiëntie**
- **Prijsstrategie**
- **Kostenbeheersing**
- **Productmix**
- **Investeringen in R&D**

## Rentabiliteit verbeteren:

### Omzet verhogen:
1. **Meer klanten** (marketing, service)
2. **Hogere prijzen** (toegevoegde waarde)
3. **Meer verkopen per klant** (cross-selling)
4. **Nieuwe producten** (innovatie)

### Kosten verlagen:
1. **Inkoop optimaliseren** (betere leveranciers)
2. **Processen verbeteren** (automatisering)
3. **Overhead verminderen** (efficiëntie)
4. **Schaalvoordelen** (groei)

### Asset efficiency:
1. **Voorraad optimaliseren** (minder kapitaal vast)
2. **Debiteuren beheer** (sneller innen)
3. **Capaciteit benutten** (meer omzet per machine)

## Moderne business modellen:

### Platform bedrijven:
- **Hoge schaalvoordelen**: Marginale kosten bijna nul
- **Network effects**: Meer gebruikers = meer waarde
- **Voorbeeld**: Facebook, Google (zeer hoge marges)

### Subscription modellen:
- **Voorspelbare inkomsten**: Maandelijkse betalingen
- **Hoge customer lifetime value**
- **Voorbeeld**: Netflix, Spotify

### Freemium modellen:
- **Gratis basis versie**: Lage conversie maar veel gebruikers
- **Premium features**: Hoge marges op betalende klanten
- **Voorbeeld**: Dropbox, LinkedIn

## Rentabiliteit in verschillende levensfasen:

### Startup fase:
- **Negatieve marges**: Investeren in groei
- **Focus**: Marktaandeel, niet winst
- **Voorbeeld**: Uber, Tesla (eerste jaren)

### Groei fase:
- **Verbeterende marges**: Schaalvoordelen
- **Investeringen**: In capaciteit en markt
- **Balans**: Groei vs winstgevendheid

### Volwassen fase:
- **Stabiele marges**: Geoptimaliseerde operaties
- **Focus**: Efficiëntie en dividend
- **Voorbeeld**: Coca-Cola, McDonald's

### Krimp fase:
- **Dalende marges**: Minder vraag
- **Kostenreductie**: Overleven belangrijk
- **Herstructurering**: Nieuwe strategie nodig

## Internationale vergelijking:

### Nederlandse bedrijven:
- **Conservatief**: Focus op stabiliteit
- **Gemiddelde ROE**: 10-15%
- **Sectoren**: Handel, logistiek, agri

### Amerikaanse bedrijven:
- **Groei gericht**: Hogere risico's
- **Gemiddelde ROE**: 12-18%
- **Sectoren**: Tech, finance, healthcare

### Duitse bedrijven:
- **Productie focus**: Kwaliteit en efficiëntie
- **Gemiddelde ROE**: 8-12%
- **Sectoren**: Automotive, machinery, chemicals

## Waarschuwingssignalen:

### Dalende trends:
- **Marges onder druk**: Meer concurrentie
- **ROA daalt**: Inefficiënte investeringen
- **ROE daalt**: Problemen met strategie

### Eenmalige effecten:
- **Herstructureringskosten**
- **Afschrijvingen**
- **Juridische kosten**

Let op: Kijk naar onderliggende operationele prestaties!

### Jouw opdracht:
Analyseer de rentabiliteit van dit bedrijf:

**Bedrijf Y - Financiële gegevens:**
- Omzet: €500.000
- Kosten verkochte goederen: €300.000
- Operationele kosten: €120.000
- Rente: €10.000
- Belasting: €21.000
- Totale activa: €400.000
- Eigen vermogen: €200.000

Bereken:
1. Bruto winstmarge
2. Netto winstmarge
3. ROA
4. ROE
5. Voer een DuPont analyse uit
6. Vergelijk met sector benchmarks (kies een sector)
7. Geef 3 concrete adviezen voor verbetering

**Bonus**: Zoek de jaarverslagen van 2 beursgenoteerde bedrijven en vergelijk hun rentabiliteitsratio's.
              `,
              duration: '35 min'
            }
          ]
        }
      ]
    }
  }

  const currentCurriculum = curriculum[selectedLevel]

  const markLessonComplete = (lessonId: string) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId])
    }
  }

  const renderLessonContent = (content: string) => {
    return content
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold text-gray-900 mb-6">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-semibold text-gray-800 mb-4 mt-8">$2</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-medium text-gray-800 mb-3 mt-6">$3</h3>')
      .replace(/^\*\*(.*?)\*\*/gm, '<strong class="font-semibold text-gray-900">$1</strong>')
      .replace(/^- (.*$)/gm, '<li class="ml-6 mb-2 list-disc">$1</li>')
      .replace(/^\d+\. (.*$)/gm, '<li class="ml-6 mb-2 list-decimal">$1</li>')
      .replace(/\n\n/g, '</p><p class="mb-4 leading-relaxed">')
      .replace(/^(?!<[h|l])/gm, '<p class="mb-4 leading-relaxed">')
      .replace(/<p class="mb-4 leading-relaxed"><\/p>/g, '')
      .replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-100 p-4 rounded-lg my-4 overflow-x-auto"><code class="text-sm">$1</code></pre>')
      .replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-2 py-1 rounded text-sm font-mono">$1</code>')
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">
          {currentCurriculum.title}
        </h2>
        <div className="text-sm text-gray-600">
          {completedLessons.length} van {currentCurriculum.chapters.reduce((total, ch) => total + ch.lessons.length, 0)} lessen voltooid
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Chapter List */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Hoofdstukken</h3>
            <div className="space-y-3">
              {currentCurriculum.chapters.map((chapter) => (
                <div key={chapter.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setSelectedChapter(selectedChapter === chapter.id ? null : chapter.id)}
                    className="w-full p-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm">{chapter.title}</h4>
                        <p className="text-xs text-gray-600 mt-1">{chapter.description}</p>
                      </div>
                      <ChevronRight 
                        className={`transform transition-transform ${
                          selectedChapter === chapter.id ? 'rotate-90' : ''
                        }`}
                        size={16}
                      />
                    </div>
                  </button>
                  
                  {selectedChapter === chapter.id && (
                    <div className="border-t border-gray-200 bg-gray-50">
                      {chapter.lessons.map((lesson) => (
                        <button
                          key={lesson.id}
                          onClick={() => setSelectedLesson(lesson.id)}
                          className={`w-full p-3 text-left hover:bg-gray-100 transition-colors border-b border-gray-200 last:border-b-0 ${
                            selectedLesson === lesson.id ? 'bg-blue-50 border-blue-200' : ''
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            {completedLessons.includes(lesson.id) ? (
                              <CheckCircle className="text-green-600" size={16} />
                            ) : (
                              <Play className="text-gray-400" size={16} />
                            )}
                            <div className="flex-1">
                              <div className="font-medium text-gray-900 text-sm">{lesson.title}</div>
                              <div className="flex items-center space-x-2 mt-1">
                                <Clock size={12} className="text-gray-400" />
                                <span className="text-xs text-gray-600">{lesson.duration}</span>
                              </div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lesson Content */}
        <div className="lg:col-span-3">
          {selectedLesson ? (
            <div className="bg-white rounded-lg shadow-sm border p-6">
              {(() => {
                const lesson = currentCurriculum.chapters
                  .flatMap(ch => ch.lessons)
                  .find(l => l.id === selectedLesson)
                
                if (!lesson) return null

                return (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{lesson.title}</h3>
                        <div className="flex items-center space-x-4 mt-2">
                          <div className="flex items-center space-x-1 text-gray-600">
                            <Clock size={16} />
                            <span className="text-sm">Geschatte tijd: {lesson.duration}</span>
                          </div>
                          {completedLessons.includes(lesson.id) && (
                            <div className="flex items-center space-x-1 text-green-600">
                              <Award size={16} />
                              <span className="text-sm font-medium">Voltooid</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <button
                        onClick={() => markLessonComplete(lesson.id)}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                          completedLessons.includes(lesson.id) 
                            ? 'bg-green-100 text-green-800 border border-green-200' 
                            : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                      >
                        {completedLessons.includes(lesson.id) ? (
                          <div className="flex items-center space-x-2">
                            <CheckCircle size={16} />
                            <span>Voltooid</span>
                          </div>
                        ) : (
                          'Markeer als voltooid'
                        )}
                      </button>
                    </div>
                    
                    <div className="prose prose-lg max-w-none">
                      <div 
                        className="text-gray-800 leading-relaxed"
                        dangerouslySetInnerHTML={{ 
                          __html: renderLessonContent(lesson.content)
                        }}
                      />
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
                      <button
                        onClick={() => setSelectedLesson(null)}
                        className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
                      >
                        <ChevronRight className="rotate-180" size={16} />
                        <span>Terug naar overzicht</span>
                      </button>
                      
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-600">
                          Les {currentCurriculum.chapters.flatMap(ch => ch.lessons).findIndex(l => l.id === selectedLesson) + 1} van {currentCurriculum.chapters.reduce((total, ch) => total + ch.lessons.length, 0)}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })()}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm border p-6 text-center py-12">
              <BookOpen className="mx-auto text-gray-400 mb-4" size={48} />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Selecteer een les
              </h3>
              <p className="text-gray-600 mb-6">
                Kies een hoofdstuk en les uit de lijst om te beginnen met leren
              </p>
              
              {/* Quick stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-md mx-auto">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">
                    {currentCurriculum.chapters.length}
                  </div>
                  <div className="text-sm text-blue-800">Hoofdstukken</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">
                    {currentCurriculum.chapters.reduce((total, ch) => total + ch.lessons.length, 0)}
                  </div>
                  <div className="text-sm text-green-800">Lessen</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">
                    {Math.round(completedLessons.length / currentCurriculum.chapters.reduce((total, ch) => total + ch.lessons.length, 0) * 100)}%
                  </div>
                  <div className="text-sm text-purple-800">Voltooid</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}