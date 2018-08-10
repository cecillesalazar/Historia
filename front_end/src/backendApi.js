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
    story: ['Without, the night was cold and wet, but in the small parlour of Laburnam Villa, the blinds were drawn and the fire burned brightly. Father and son were at chess, the former, who possessed ideas about the game involving radical changes, putting his king into such sharp and unnecessary perils that it even provoked comment from mother, who knit placidly by the fire. ',
            'Hark at the wind! ',
            'Father, who, having seen a fatal mistake after it was too late, was amiably desirous of preventing his son from seeing it and hoped to throw him off the scent by drawing attention to the squall.',
            'I\'m listening',
            'Herbert grimly surveys the board and stretches out his hand.',
            'Check-',
            'I should hardly think that he\'d come tonight.',
            '-mate',
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
    story: ['Story1', 'Story2', 'Story3'],
    speaker: ['Speaker1', 'Speaker2', 'Speaker3'],
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
