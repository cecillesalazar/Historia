// A temp variable to mikic using our database;
// Ultimately we will need to make ajax requests to our server from this file.
export const saveGame = saveFile => {
  return fetch('/5b6867ee107abe0f460f2eff', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({saveFile})
  })
  .then(res => res.json())
};

export const loadGame = () => {
  return fetch('/5b6867ee107abe0f460f2eff', {
    method: 'GET'
  })
  .then(res => res.json())
  .then(json => json.saveFile);
}

const SERG_ARRIVES = 'SERG_ARRIVES';
const SERG_TELLS_STORY = 'SERG_TELLS_STORY';
const COVETS_PAW = 'COVETS_PAW';
const FIRST_WISH = 'FIRST_WISH';
const WISH_FOR_200_LBS = 'WISH_FOR_200_LBS';
const THROW_IN_FIRE_BEFORE_WISH = 'THROW_IN_FIRE_BEFORE_WISH';
const HAPPY_ENDING = 'HAPPY_ENDING';
const HERBERT_DIES = 'HERBERT_DIES';
const SECOND_WISH = 'SECOND_WISH';
const WISH_HERBERT_BACK = 'WISH_HERBERT_BACK';
const THROW_IN_FIRE_AFTER_WISH = 'THROW_IN_FIRE_AFTER_WISH';
const KNOCK_DOOR = 'KNOCK_DOOR';
const THIRD_WISH = 'THIRD_WISH';
const SAD_ENDING_ONE = 'SAD_ENDING_ONE';
const SAD_ENDING_TWO = 'SAD_ENDING_TWO';
const WISH_HERBERT_DISAPPEAR = 'WISH_HERBERT_DISAPPEAR';
const LET_WIFE_OPEN_DOOR = 'LET_WIFE_OPEN_DOOR';
const BAD_ENDING = 'BAD_ENDING';

const STORY_GRAPH_MONKEY_PAW = {
  [SERG_ARRIVES]: {
    key: SERG_ARRIVES,
    options: [
      SERG_TELLS_STORY
    ],
    story: ['Without, the night was cold and wet, but in the small parlour of Laburnam Villa, the blinds were drawn and the fire burned brightly. Father and son were at chess, the former, who possessed ideas about the game involving radical changes, putting his king into such sharp and unnecessary perils that it even provoked comment from mother, who knit placidly by the fire.',
            'Hark at the wind!',
            'Father, who, having seen a fatal mistake after it was too late, was amiably desirous of preventing his son from seeing it and hoped to throw him off the scent by drawing attention to the squall.',
            'I\'m listening.',
            'Herbert grimly surveys the board and stretches out his hand.',
            'Check-',
            'I should hardly think that he\'d come tonight.',
            '-mate.',
            'Father\'s face contorts as he leans forward to debunk his son’s claim, when suddenly he hears the creaking of the rusty gate, signaling that their visitor had indeed made it after all. Rising hastily from his seat, he runs to the door to greet their guest.'
           ],
    speaker: ['', 'Mr. White', '', 'Herbert', '', 'Herbert', 'Mr. White', 'Herbert', ''],
    button: [
      'Next: The Sergeant Tells His Story'
    ],
  },
  [SERG_TELLS_STORY]: {
    key: SERG_TELLS_STORY,
    options: [
      COVETS_PAW
    ],
    story: ['Mr. White returns to the sitting room followed by a tall, burly, red faced man with beady eyes.',
            'Sergeant Major Morris. But please, just call me Morris.',
            'The sergeant major shook hands, and taking the proffered seat by the fire, watched contentedly while his host got out whiskey and tumblers and stood a small copper kettle on the fire. At the third glass his eyes got brighter, and he began to talk, the little family circle regarding with eager interest this visitor from distant parts, as he squared his broad shoulders in the chair and spoke of wild scenes and doughty deeds, of wars and plagues and strange peoples.',
            'Twenty one years of it. When he went away, he was a slip of a youth in the warehouse. Now look at him.',
            'You don’t look to have taken much harm.',
            'I’d like to go to India myself, just to look round a bit, you know.',
            'Better where you are.',
            'I should like to see those old temples and fakirs and jugglers. What was that you started telling me the other day about a monkey\'s paw or something, Morris?',
            'Nothing...leastways nothing worth hearing.',
            'Monkey’s paw?',
            'Well, it\'s just a bit of what you might call magic, perhaps.',
            'His three listeners leaned forward eagerly. The visitor absentmindedly put his empty glass to his lips and then set it down again. His host filled it for him. He fumbled a tiny parcel from his pocket, a tiny bundle wrapped in cloth bandages.',
            'It\'s just an ordinary little paw, dried to a mummy.',
            'Morris unwraps the bundle and laid it on the table. Mrs. White drew back with a grimace, but her son, taking it, examined it curiously.',
            'And what is there special about it?',
            'It had a spell put on it by an old fakir. A very holy man. He wanted to show that fate ruled people\'s lives, and that those who interfered with it did so to their sorrow. He put a spell on it so that three separate men could each have three wishes from it.',
            'Well, why don\'t you have three, sir?',
            'I have.',
            'And did you really have the three wishes granted?',
            'I did.',
            'And has anybody else wished?',
            'The first man had his three wishes...yes. I don\'t know what the first two were, but the third was for death. That\'s how I got the paw.',
            'His tones were so grave that a hush fell upon the group.',
            'If you\'ve had your three wishes, it\'s no good to you now, then, Morris. What do you keep it for?',
            'Fancy, I suppose. I did have some idea of selling it, but I don\'t think I will. It has caused enough mischief already. Besides, people won\'t buy. They think it\'s a fairy tale, some of them, and those who do think anything of it want to try it first and pay me afterward.',
            'If you could have another three wishes, would you have them?',
            'I don\'t know...I don\'t know.',
            'He took the paw, and dangling it between his forefinger and thumb, suddenly threw it upon the fire. Mr. White, with a slight cry, stooped down and snatched it off.',
            'Better let it burn.',
            'If you don\'t want it, Morris, give it to me.',
            'I won\'t. I threw it on the fire. If you keep it, don\'t blame me for what happens. Pitch it on the fire again like a sensible man.',
            'How do you do it?',
            'Hold it up in your right hand and wish aloud...but I warn you of the consequences.',
            'Sounds like the Arabian Nights. Don\'t you think you might wish for four pairs of hands for me?',
            'Mr. White drew the talisman from pocket, and then all three burst into laughter as the sergeant major, with a look of alarm on his face, caught him by the arm.',
            'If you must wish...wish for something sensible'
           ],
    speaker: ['', '???', '', 'Mr. White', 'Mrs. White', 'Mr. White', 'Morris', 'Mr. White', 'Morris', 'Mrs. White', 'Morris', '', 'Morris', '', 'Mr. White', 'Morris', 'Herbert', 'Morris', 'Mrs. White', 'Morris', 'Mrs. White', 'Morris', '', 'Mr. White', 'Morris', 'Mr. White', 'Morris', '', 'Morris', 'Mr. White', 'Morris', 'Mr. White', 'Morris', 'Mrs. White', '', 'Morris'],
    button: [
      'Next: Mr. White Covets the Paw'
    ],
  },
  [COVETS_PAW]: {
    key: COVETS_PAW,
    options: [
      FIRST_WISH
    ],
    story: 'Plot for COVETS_PAW',
    button: [
      'Next: To wish or not to wish?'
    ],
  },
  [FIRST_WISH]: {
    key: FIRST_WISH,
    options: [
      WISH_FOR_200_LBS,
      THROW_IN_FIRE_BEFORE_WISH
    ],
    story: 'Plot for FIRST_WISH',
    button: [
      'Wish for 200 pounds',
      'Throw the paw into the fire'
    ],
  },
  [THROW_IN_FIRE_BEFORE_WISH]: {
    key: THROW_IN_FIRE_BEFORE_WISH,
    options: [
      HAPPY_ENDING
    ],
    story: 'Plot for THROW_IN_FIRE_BEFORE_WISH',
    button: [
      'Next: Calm and Prosperity'
    ],
  },
  [HAPPY_ENDING]: {
    key: HAPPY_ENDING,
    options: [],
    story: 'Plot for HAPPY_ENDING',
  },
  [WISH_FOR_200_LBS]: {
    key: WISH_FOR_200_LBS,
    options: [
      HERBERT_DIES
    ],
    story: 'Plot for WISH_FOR_200_LBS',
    button: [
      'Next: The wish is granted'
    ],
  },
  [HERBERT_DIES]: {
    key: HERBERT_DIES,
    options: [
      SECOND_WISH
    ],
    story: 'Plot for HERBERT_DIES',
    button: [
      'Next: Two more wishes'
    ],
  },
  [SECOND_WISH]: {
    key: SECOND_WISH,
    options: [
      WISH_HERBERT_BACK,
      THROW_IN_FIRE_AFTER_WISH
    ],
    story: 'Plot for SECOND_WISH',
    button: [
      'Wish for Herbert to return',
      'Throw the paw into the fire'
    ],
  },
  [THROW_IN_FIRE_AFTER_WISH]: {
    key: THROW_IN_FIRE_AFTER_WISH,
    options: [
      SAD_ENDING_ONE
    ],
    story: 'Plot for THROW_IN_FIRE_AFTER_WISH',
    button: [
      'Next: A Lifetime of Regrets'
    ],
  },
  [SAD_ENDING_ONE]: {
    key: SAD_ENDING_ONE,
    options: [],
    story: 'Plot for SAD_ENDING_ONE',
  },
  [WISH_HERBERT_BACK]: {
    key: WISH_HERBERT_BACK,
    options: [
      KNOCK_DOOR
    ],
    story: 'Plot for WISH_HERBERT_BACK',
    button: [
      'Next: A Knock on the Door'
    ],
  },
  [KNOCK_DOOR]: {
    key: KNOCK_DOOR,
    options: [
      THIRD_WISH
    ],
    story: 'Plot for KNOCK_DOOR',
    button: [
      'Next: One last wish'
    ],
  },
  [THIRD_WISH]: {
    key: THIRD_WISH,
    options:[
      WISH_HERBERT_DISAPPEAR,
      LET_WIFE_OPEN_DOOR
    ],
    story: 'Plot for THIRD_WISH',
    button: [
      'Wish for Herbert to disappear',
      'Let your wife open the door'
    ],
  },
  [WISH_HERBERT_DISAPPEAR]: {
    key: WISH_HERBERT_DISAPPEAR,
    options: [
      SAD_ENDING_TWO
    ],
    story: 'Plot for WISH_HERBERT_DISAPPEAR',
    button: [
      'Next: A lifetime of regret'
    ],
  },
  [SAD_ENDING_TWO]: {
    key: SAD_ENDING_TWO,
    options: [],
    story: 'Plot for SAD_ENDING_TWO',
  },
  [LET_WIFE_OPEN_DOOR]: {
    key: LET_WIFE_OPEN_DOOR,
    options: [
      BAD_ENDING
    ],
    story: 'Plot for LET_WIFE_OPEN_DOOR',
    button: [
      'Next: The price of defiance'
    ],
  },
  [BAD_ENDING]: {
    key: BAD_ENDING,
    options: [],
    story: 'Plot for BAD_ENDING',
  }
}

export const STORIES = [
  {
    id: '1',
    name: 'Monkey Paw',
    desc: 'life is a bitch',
    startNode: SERG_ARRIVES,
    storyGraph: STORY_GRAPH_MONKEY_PAW,
  }
]

export const getRandomStory = async () => {
  return STORIES[Math.floor(Math.random() * STORIES.length)];
}
