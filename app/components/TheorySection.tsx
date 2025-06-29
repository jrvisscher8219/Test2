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
              content: `# Wat is vraag? 🛒

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
Denk aan je favoriete snack. Hoeveel zou je er per week kopen als het €1 kost? En als het €5 kost? Wat gebeurt er met je vraag?`,
              duration: '15 min'
            },
            {
              id: 'l1-2',
              title: 'Wat is aanbod?',
              content: `# Wat is aanbod? 🏪

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
Stel je start een eigen bedrijf in het maken van telefoonhoesjes. Wat zou jouw aanbod beïnvloeden?`,
              duration: '12 min'
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
              content: `# SWOT-analyse 🎯

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
- Oude technologie`,
              duration: '25 min'
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