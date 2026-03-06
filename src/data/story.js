/**
 * Story-Daten für die interaktive Story-App.
 * Jedes Kapitel: id, title, text, choices (optional).
 * choices: { text, nextChapterId }
 */
export const story = {
  start: {
    id: 'start',
    title: 'Der Anfang',
    text: 'Du stehst an einer Weggabelung im dunklen Wald. Ein Pfad führt nach links ins Dunkel, der andere nach rechts, wo ein schwaches Licht flackert. Die Nacht ist still, nur das Rascheln der Blätter ist zu hören.',
    choices: [
      { text: 'Nach links gehen – ins Dunkel', nextChapterId: 'left' },
      { text: 'Nach rechts – zum Licht', nextChapterId: 'right' },
    ],
  },
  left: {
    id: 'left',
    title: 'Im Dunkeln',
    text: 'Du folgst dem linken Pfad. Es wird immer dunkler. Plötzlich siehst du eine alte Hütte. Aus dem Kamin steigt Rauch auf. Jemand ist da.',
    choices: [
      { text: 'An die Tür klopfen', nextChapterId: 'hut' },
      { text: 'Leise am Fenster vorbeischleichen', nextChapterId: 'window' },
    ],
  },
  right: {
    id: 'right',
    title: 'Zum Licht',
    text: 'Du gehst auf das Licht zu. Es kommt von einem Lagerfeuer. Drei Gestalten sitzen drumherum und reden leise. Sie haben dich noch nicht bemerkt.',
    choices: [
      { text: 'Laut grüßen und hinzugehen', nextChapterId: 'fire' },
      { text: 'Im Schatten bleiben und lauschen', nextChapterId: 'listen' },
    ],
  },
  hut: {
    id: 'hut',
    title: 'Die Hütte',
    text: 'Die Tür öffnet sich. Eine alte Frau mit freundlichen Augen bittet dich herein. „Du siehst müde aus“, sagt sie. „Setz dich, ich mache Tee.“ Du bist in Sicherheit – vorerst.',
    choices: [{ text: 'Von vorne beginnen', nextChapterId: 'start' }],
  },
  window: {
    id: 'window',
    title: 'Am Fenster',
    text: 'Du schleichst am Fenster vorbei. Drinnen siehst du die gleiche alte Frau – sie starrt direkt zu dir und lächelt. Du hast das Gefühl, sie hat dich die ganze Zeit beobachtet.',
    choices: [{ text: 'Von vorne beginnen', nextChapterId: 'start' }],
  },
  fire: {
    id: 'fire',
    title: 'Am Lagerfeuer',
    text: 'Die drei winken dich heran. „Komm, setz dich“, sagt einer. Sie teilen Brot und eine Geschichte mit dir. Die Nacht wird lang und die Geschichten immer seltsamer.',
    choices: [{ text: 'Von vorne beginnen', nextChapterId: 'start' }],
  },
  listen: {
    id: 'listen',
    title: 'Lauschen',
    text: 'Du hörst Bruchstücke: „… wenn der Vollmond …“ – „… dann öffnet sich das Tor …“. Bevor du mehr verstehst, dreht sich einer um. „Wir haben Besuch.“ Alle drei blicken zu dir.',
    choices: [{ text: 'Von vorne beginnen', nextChapterId: 'start' }],
  },
}

export const initialChapterId = 'start'
