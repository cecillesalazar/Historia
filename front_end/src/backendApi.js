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

const NARRATOR = 'NARRATOR';
const MR_WHITE = 'MR_WHITE';
const MRS_WHITE = 'MRS_WHITE';
const HERBERT = 'HERBERT';
const BURLY_RED_FACED_MAN = 'BURLY_RED_FACED_MAN';
const MORRIS = 'MORRIS';
const WELL_DRESSED_GENTLEMAN = 'WELL_DRESSED_GENTLEMAN';

const SPEAKERS_MONKEY_PAW = {
  [NARRATOR]: {
    name: '',
    key: NARRATOR
  },
  [MR_WHITE]: {
    name: 'Mr. White',
    key: MR_WHITE
  },
  [MRS_WHITE]: {
    name: 'Mrs. White',
    key: MRS_WHITE
  },
  [HERBERT]: {
    name: 'Herbert',
    key: HERBERT
  },
  [BURLY_RED_FACED_MAN]: {
    name: 'Burly Red Faced Man',
    key: BURLY_RED_FACED_MAN
  },
  [MORRIS]: {
    name: 'Morris',
    key: MORRIS
  },
  [WELL_DRESSED_GENTLEMAN]: {
    name: 'Well Dressed Gentleman',
    key: WELL_DRESSED_GENTLEMAN
  }
}

export const SERG_ARRIVES = 'SERG_ARRIVES';
const SERG_TELLS_STORY = 'SERG_TELLS_STORY';
const COVETS_PAW = 'COVETS_PAW';
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
    scripts: [
      {
        text: 'Without, the night was cold and wet, but in the small parlour of Laburnam Villa, the blinds were drawn and the fire burned brightly. Father and son were at chess, the former, who possessed ideas about the game involving radical changes, putting his king into such sharp and unnecessary perils that it even provoked comment from mother, who knit placidly by the fire.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'Hark at the wind!',
        speakerKey: MR_WHITE,
        speakerImage: 'https://s25.postimg.cc/uneg7ysq7/imageedit_1_6644374430.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'Father, who, having seen a fatal mistake after it was too late, was amiably desirous of preventing his son from seeing it and hoped to throw him off the scent by drawing attention to the squall.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'I\'m listening.',
        speakerKey: HERBERT,
        speakerImage: 'https://s25.postimg.cc/hkitobztr/imageedit_1_2777644127.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'Herbert grimly surveys the board and stretches out his hand.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'Check-',
        speakerKey: HERBERT,
        speakerImage: 'https://s25.postimg.cc/hkitobztr/imageedit_1_2777644127.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'I should hardly think that he\'d come tonight.',
        speakerKey: MR_WHITE,
        speakerImage: 'https://s25.postimg.cc/uneg7ysq7/imageedit_1_6644374430.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: '-mate.',
        speakerKey: HERBERT,
        speakerImage: 'https://s25.postimg.cc/gi8n5v9bj/imageedit_1_7795666038.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'Father\'s face contorts as he leans forward to debunk his son’s claim, when suddenly he hears the creaking of the rusty gate, signaling that their visitor had indeed made it after all. Rising hastily from his seat, he runs to the door to greet their guest.',
        speakerKey: NARRATOR,
        speakerImage: 'https://s25.postimg.cc/v1fs7f7n3/imageedit_2_4118282660.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
    ],
    button: [
      'Next: The Sergeant Tells His Story'
    ],
  },
  [SERG_TELLS_STORY]: {
    key: SERG_TELLS_STORY,
    options: [
      COVETS_PAW
    ],
    scripts: [
      {
        text: 'Mr. White returns to the sitting room followed by a tall, burly, red faced man with beady eyes.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'Sergeant Major Morris. But please, just call me Morris.',
        speakerKey: BURLY_RED_FACED_MAN,
        speakerImage: 'https://s25.postimg.cc/w3uk3udb3/morris-reg.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'The sergeant major shook hands, and taking the proffered seat by the fire, watched contentedly while his host got out whiskey and tumblers and stood a small copper kettle on the fire. At the third glass his eyes got brighter, and he began to talk, the little family circle regarding with eager interest this visitor from distant parts, as he squared his broad shoulders in the chair and spoke of wild scenes and doughty deeds, of wars and plagues and strange peoples.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'Twenty one years of it. When he went away, he was a slip of a youth in the warehouse. Now look at him.',
        speakerKey: MR_WHITE,
        speakerImage: 'https://s25.postimg.cc/n9z28u0wv/imageedit_1_3498685821.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'You don’t look to have taken much harm.',
        speakerKey: MRS_WHITE,
        speakerImage: 'https://s25.postimg.cc/vr35xopwf/mrswhite-rerender.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'I’d like to go to India myself, just to look round a bit, you know.',
        speakerKey: MR_WHITE,
        speakerImage: 'https://s25.postimg.cc/n9z28u0wv/imageedit_1_3498685821.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'Better where you are.',
        speakerKey: MORRIS,
        speakerImage: 'https://s25.postimg.cc/jnxu9vmhb/imageedit_1_7401419915.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'I should like to see those old temples and fakirs and jugglers. What was that you started telling me the other day about a monkey\'s paw or something, Morris?',
        speakerKey: MR_WHITE,
        speakerImage: 'https://s25.postimg.cc/n9z28u0wv/imageedit_1_3498685821.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'Nothing...leastways nothing worth hearing.',
        speakerKey: MORRIS,
        speakerImage: 'https://s25.postimg.cc/w3uk3udb3/morris-reg.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'Monkey’s paw?',
        speakerKey: MRS_WHITE,
        speakerImage: 'https://s25.postimg.cc/vr35xopwf/mrswhite-rerender.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'Well, it\'s just a bit of what you might call magic, perhaps.',
        speakerKey: MORRIS,
        speakerImage: 'https://s25.postimg.cc/w3uk3udb3/morris-reg.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'His three listeners leaned forward eagerly. The visitor absentmindedly put his empty glass to his lips and then set it down again. His host filled it for him. He fumbled a tiny parcel from his pocket, a tiny bundle wrapped in cloth bandages.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'It\'s just an ordinary little paw, dried to a mummy.',
        speakerKey: MORRIS,
        speakerImage: 'https://s25.postimg.cc/w3uk3udb3/morris-reg.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'Morris unwraps the bundle and laid it on the table. Mrs. White drew back with a grimace, but her son, taking it, examined it curiously.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'And what is there special about it?',
        speakerKey: MR_WHITE,
        speakerImage: 'https://s25.postimg.cc/j3e7taj8v/imageedit_2_3913698423.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'It had a spell put on it by an old fakir. A very holy man. He wanted to show that fate ruled people\'s lives, and that those who interfered with it did so to their sorrow. He put a spell on it so that three separate men could each have three wishes from it.',
        speakerKey: MORRIS,
        speakerImage: 'https://s25.postimg.cc/w3uk3udb3/morris-reg.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'Well, why don\'t you have three, sir?',
        speakerKey: HERBERT,
        speakerImage: 'https://s25.postimg.cc/gi8n5v9bj/imageedit_1_7795666038.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'I have.',
        speakerKey: MORRIS,
        speakerImage: 'https://s25.postimg.cc/jnxu9vmhb/imageedit_1_7401419915.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'And did you really have the three wishes granted?',
        speakerKey: MRS_WHITE,
        speakerImage: 'https://s25.postimg.cc/vr35xopwf/mrswhite-rerender.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'I did.',
        speakerKey: MORRIS,
        speakerImage: 'https://s25.postimg.cc/jnxu9vmhb/imageedit_1_7401419915.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'And has anybody else wished?',
        speakerKey: MRS_WHITE,
        speakerImage: 'https://s25.postimg.cc/vr35xopwf/mrswhite-rerender.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'The first man had his three wishes...yes. I don\'t know what the first two were, but the third was for death. That\'s how I got the paw.',
        speakerKey: MORRIS,
        speakerImage: 'https://s25.postimg.cc/jnxu9vmhb/imageedit_1_7401419915.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'His tones were so grave that a hush fell upon the group.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'If you\'ve had your three wishes, it\'s no good to you now, then, Morris. What do you keep it for?',
        speakerKey: MR_WHITE,
        speakerImage: 'https://s25.postimg.cc/uneg7ysq7/imageedit_1_6644374430.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'Fancy, I suppose. I did have some idea of selling it, but I don\'t think I will. It has caused enough mischief already. Besides, people won\'t buy. They think it\'s a fairy tale, some of them, and those who do think anything of it want to try it first and pay me afterward.',
        speakerKey: MORRIS,
        speakerImage: 'https://s25.postimg.cc/w3uk3udb3/morris-reg.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'If you could have another three wishes, would you have them?',
        speakerKey: MR_WHITE,
        speakerImage: 'https://s25.postimg.cc/uneg7ysq7/imageedit_1_6644374430.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'I don\'t know...I don\'t know.',
        speakerKey: MORRIS,
        speakerImage: 'https://s25.postimg.cc/jnxu9vmhb/imageedit_1_7401419915.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'He took the paw, and dangling it between his forefinger and thumb, suddenly threw it upon the fire. Mr. White, with a slight cry, stooped down and snatched it off.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'Better let it burn.',
        speakerKey: MORRIS,
        speakerImage: 'https://s25.postimg.cc/jnxu9vmhb/imageedit_1_7401419915.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'If you don\'t want it, Morris, give it to me.',
        speakerKey: MR_WHITE,
        speakerImage: 'https://s25.postimg.cc/v1fs7f7n3/imageedit_2_4118282660.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'I won\'t. I threw it on the fire. If you keep it, don\'t blame me for what happens. Pitch it on the fire again like a sensible man.',
        speakerKey: MORRIS,
        speakerImage: 'https://s25.postimg.cc/w3uk3udb3/morris-reg.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'How do you do it?',
        speakerKey: MR_WHITE,
        speakerImage: 'https://s25.postimg.cc/uneg7ysq7/imageedit_1_6644374430.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'Hold it up in your right hand and wish aloud...but I warn you of the consequences.',
        speakerKey: MORRIS,
        speakerImage: 'https://s25.postimg.cc/w3uk3udb3/morris-reg.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'Sounds like the Arabian Nights. Don\'t you think you might wish for four pairs of hands for me?',
        speakerKey: MRS_WHITE,
        speakerImage: 'https://s25.postimg.cc/6c01n6eq7/imageedit_1_6327568721.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'Mr. White drew the talisman from his pocket, and then all three burst into laughter as the sergeant major, with a look of alarm on his face, caught him by the arm.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'If you must wish...wish for something sensible.',
        speakerKey: MORRIS,
        speakerImage: 'https://s25.postimg.cc/jnxu9vmhb/imageedit_1_7401419915.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
    ],
    button: [
      'Next: Mr. White Covets the Paw'
    ],
  },
  [COVETS_PAW]: {
    key: COVETS_PAW,
    options: [
      WISH_FOR_200_LBS,
      THROW_IN_FIRE_BEFORE_WISH
    ],
    scripts: [
      {
        text: 'Mr. White dropped it back in his pocket, and placing chairs, motioned his friend to the table. In the business of supper the talisman was partly forgotten, and afterward the three sat listening in an enthralled fashion to a second installment of the soldier\'s adventures in India. As the night deepened and the hour turned late, Morris bade the family goodbye to catch the last train.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'If the tale about the monkey\'s paw is not more truthful than those he has been telling us, we sha\'nt make much out of it.',
        speakerKey: HERBERT,
        speakerImage: 'https://s25.postimg.cc/ehi3lfapr/imageedit_1_5556481439.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'Hmm...',
        speakerKey: MR_WHITE,
        speakerImage: 'https://s25.postimg.cc/uneg7ysq7/imageedit_1_6644374430.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'Did you give him anything for it father?',
        speakerKey: HERBERT,
        speakerImage: 'https://s25.postimg.cc/gal096b5r/imageedit_1_7336455624.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'A trifle. He didn\'t want it, but I made him take it. And he pressed me again to throw it away.',
        speakerKey: MR_WHITE,
        speakerImage: 'https://s25.postimg.cc/uneg7ysq7/imageedit_1_6644374430.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'I wonder of his aversion. Why, we can be rich, famous, and happy. Wish to be an emperor, father, to begin with, then you can\'t be henpecked.',
        speakerKey: HERBERT,
        speakerImage: 'https://s25.postimg.cc/gi8n5v9bj/imageedit_1_7795666038.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'He darted round the table, pursued by the maligned Mrs. White armed with an antimacassar. Mr. White took the paw from his pocket and eyed it dubiously.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png'
      },
      {
        text: 'I don\'t know what to wish for, and that\'s a fact. It seems to me I\'ve got all I want.',
        speakerKey: MR_WHITE,
        speakerImage: 'https://s25.postimg.cc/n9z28u0wv/imageedit_1_3498685821.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'If you only cleared the house, you\'d be quite happy, wouldn\'t you? Well, wish for two hundred pounds, then, that\'ll just do it.',
        speakerKey: HERBERT,
        speakerImage: 'https://s25.postimg.cc/gi8n5v9bj/imageedit_1_7795666038.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'Mr. White, smiling shamefacedly at his own credulity, held up the talisman, as his son, with a solemn face, somewhat marred by a wink at his mother, sat down at the piano and struck a few impressive chords.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
    ],
    button: [
      'Wish for 200 pounds',
      'Throw the paw into the fire'
    ],
  },
  [WISH_FOR_200_LBS]: {
    key: WISH_FOR_200_LBS,
    options: [
      HERBERT_DIES
    ],
    scripts: [
      {
        text: 'I wish for two hundred pounds.',
        speakerKey: MR_WHITE,
        speakerImage: 'https://s25.postimg.cc/og327o77z/imageedit_3_8866029132.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'A fine crash from the piano greeted the words, interrupted by a shuddering cry from the old man. His wife and son ran toward him.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'It moved. As I wished, it twisted in my hand like a snake!',
        speakerKey: MR_WHITE,
        speakerImage: 'https://s25.postimg.cc/v1fs7f7n3/imageedit_2_4118282660.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'Well, I don\'t see the money...and I bet I never shall.',
        speakerKey: HERBERT,
        speakerImage: 'https://s25.postimg.cc/hkitobztr/imageedit_1_2777644127.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'It must have been your fancy, father.',
        speakerKey: MRS_WHITE,
        speakerImage: 'https://s25.postimg.cc/6c01n6eq7/imageedit_1_6327568721.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'Never mind though. There\'s no harm done, but it gave me a shock all the same.',
        speakerKey: MR_WHITE,
        speakerImage: 'https://s25.postimg.cc/uneg7ysq7/imageedit_1_6644374430.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'They sat down by the fire again. Outside, the wind was higher than ever, and the old man started nervously at the sound of a door banging upstairs. A silence unusual and depressing settled upon all three, which lasted until the old couple rose to retire for the night.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'I expect you\'ll find the cash tied up in a big bag in the middle of your bed...and something horrible squatting up on top of the wardrobe watching you as you pocket your ill-gotten gains.',
        speakerKey: HERBERT,
        speakerImage: 'https://s25.postimg.cc/gi8n5v9bj/imageedit_1_7795666038.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'Mr. White sat alone in the darkness, gazing at the dying fire, and seeing faces in it. The last face was so horrible and so simian that he gazed at it in amazement. It got so vivid that, with a little uneasy laugh, he felt on the table for a glass containing a little water to throw over it. His hand grasped the monkey\'s paw, and with a little shiver he wiped his hand on his coat and went up to bed.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
    ],
    button: [
      'The wish is granted'
    ],
  },
  [THROW_IN_FIRE_BEFORE_WISH]: {
    key: THROW_IN_FIRE_BEFORE_WISH,
    options: [
      HAPPY_ENDING
    ],
    scripts: [
      {
        text: 'His friend\'s words echoed in his ear.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'If you keep it, don\'t blame me for what happens. Pitch it on the fire again like a sensible man.',
        speakerKey: NARRATOR,
        speakerImage: 'https://s25.postimg.cc/oet4e7v3j/imageedit_1_7390449985.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'A sensible man...that indeed was who he was. Curiosity over the talisman and the inevitable greed that it aroused may have led him astray for a time, but not this time. He began to lower his arm, and swift as the wind, he threw the paw into the fire.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'Father!',
        speakerKey: HERBERT,
        speakerImage: 'https://s25.postimg.cc/gal096b5r/imageedit_1_7336455624.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'Dear!',
        speakerKey: MRS_WHITE,
        speakerImage: 'https://s25.postimg.cc/z2wvdappr/imageedit_1_5110654126.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'His wife and son simply stared, their jaws agape, their eyes riveted to the fire as it did its duty. For a moment, they seemed to see a face of a withered old man wearing a wry smile shaped by the smoke and the flames, but it quickly faded, leading them to believe that it was nothing but mere imagination.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
    ],
    button: [
      'Next: Calm and Prosperity'
    ],
  },
  [HAPPY_ENDING]: {
    key: HAPPY_ENDING,
    options: [],
    scripts: [
      {
        text: 'Fortune seemed to smile on the White household as the seasons changed. They didn\'t live as kings and queens, yet seemed to avoid the tragedies in which man is so frequently plagued. Never had they run out of sustenance when times were meager. And in the event of the great flood, which reduced the town\'s homes to less than a quarter, their cozy cottage remained oddly intact, even as all their neighbors experienced the opposite fate. It was as if mother nature had chosen to respect the tiny family, for reasons unknown to them.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/tza72fbkv/Design_31.png',
      },
      {
        text: 'Herbert married. A beautiful young lass with sharp wits about her, and a penchant for business. They opened their own trade, and Herbert went from being the common laborer to a respected merchant. Children followed soon afterwards, to the delight of their old mother and father, who seemed to have aged amicably.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/tza72fbkv/Design_31.png',
      },
      {
        text: 'The family lived fruitfully, the children begetting children as the decades rolled by. As he neared his hundredth year, the old man looked at the sky and briefly remembered that strange night when he came into possession of a magical paw and was once tempted to defy fate with a wish.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/tza72fbkv/Design_31.png',
      },
      {
        text: 'He closed his eyes. And looked deeply into himself. And realized.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/tza72fbkv/Design_31.png',
      },
      {
        text: 'That he did not feel the twinge of regret for what could\'ve been.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/tza72fbkv/Design_31.png',
      },
      {
        text: 'Everything was as it should be. And it is.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/tza72fbkv/Design_31.png',
      },
      {
        text: 'The end.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/tza72fbkv/Design_31.png',
      },
    ],
  },
  [HERBERT_DIES]: {
    key: HERBERT_DIES,
    options: [
      SECOND_WISH
    ],
    scripts: [
      {
        text: 'In the brightness of the wintry sun next morning as it streamed over the breakfast table the old man laughed at his fears. There was an air of prosaic wholesomeness about the room which it had lacked on the previous night, and the dirty, shrivelled little paw was pitched on the sideboard with a carelessness which betokened no great belief in its virtues.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'I suppose all old soldiers are the same...the idea of our listening to such nonsense! How could wishes be granted in these days? And if they could, how could two hundred pounds hurt you, father?',
        speakerKey: MRS_WHITE,
        speakerImage: 'https://s25.postimg.cc/6c01n6eq7/imageedit_1_6327568721.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'Might drop on his head from the sky.',
        speakerKey: HERBERT,
        speakerImage: 'https://s25.postimg.cc/ehi3lfapr/imageedit_1_5556481439.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'Morris said the things happened so naturally, that you might if you so wished attribute it to coincidence.',
        speakerKey: MR_WHITE,
        speakerImage: 'https://s25.postimg.cc/uneg7ysq7/imageedit_1_6644374430.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'Well, don\'t break into the money before I come back. I\'m afraid it\'ll turn you into a mean, avaricious man, and we shall have to disown you.',
        speakerKey: HERBERT,
        speakerImage: 'https://s25.postimg.cc/ehi3lfapr/imageedit_1_5556481439.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'His mother laughed, and following him to the door, watched him down the road, and returning to the breakfast table, was very happy at the expense of her husband\'s credulity. She went about her day with a smile, and before she knew it, it was time to prepare supper.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'Herbert will have some more of his funny remarks, I expect, when he comes home.',
        speakerKey: MRS_WHITE,
        speakerImage: 'https://s25.postimg.cc/6c01n6eq7/imageedit_1_6327568721.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'I dare say...but for all that, the thing moved in my hand, that I\'ll swear to.',
        speakerKey: MR_WHITE,
        speakerImage: 'https://s25.postimg.cc/v1fs7f7n3/imageedit_2_4118282660.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'You thought it did.',
        speakerKey: MRS_WHITE,
        speakerImage: 'https://s25.postimg.cc/6c01n6eq7/imageedit_1_6327568721.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'I say it did. There was no thought about it, I had just—- What\'s the matter?',
        speakerKey: MR_WHITE,
        speakerImage: 'https://s25.postimg.cc/uneg7ysq7/imageedit_1_6644374430.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'She made no reply. She was watching the mysterious movements of a man outside, who, peering in an undecided fashion at the house, appeared to be trying to make up his mind to enter. In mental connection with the two hundred pounds, she noticed that the stranger was well dressed, and wore a silk hat of glossy newness.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'Three times he paused at the gate, and then walked on again. The fourth time he stood with his hand upon it, and then with sudden resolution flung it open and walked up the path. Mrs. White at the same moment placed her hands behind her, and hurriedly unfastening the strings of her apron, put that useful article of apparel beneath the cushion of her chair.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'She brought the stranger, who seemed ill at ease, into the room. He gazed at her furtively, and listened in a preoccupied fashion as the old lady apologized for the appearance of the room, and her husband\'s coat, a garment which he usually reserved for the garden.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'She then waited as patiently for him to broach his business, but he was at first strangely silent.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'I...I was asked to call. I come from Maw and Meggins.',
        speakerKey: WELL_DRESSED_GENTLEMAN,
        speakerImage: 'https://s25.postimg.cc/vyqsts8gf/imageedit_2_8899215295.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'Is anything the matter? Has anything happened to Herbert? What is it? What is it?',
        speakerKey: MRS_WHITE,
        speakerImage: 'https://s25.postimg.cc/z2wvdappr/imageedit_1_5110654126.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'There, there, mother. Sit down and don\'t jump to conclusions. You\'ve not brought bad news, I\'m sure sir.',
        speakerKey: MR_WHITE,
        speakerImage: 'https://s25.postimg.cc/og327o77z/imageedit_3_8866029132.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'I\'m sorry-',
        speakerKey: WELL_DRESSED_GENTLEMAN,
        speakerImage: 'https://s25.postimg.cc/vyqsts8gf/imageedit_2_8899215295.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'Is he hurt?',
        speakerKey: MRS_WHITE,
        speakerImage: 'https://s25.postimg.cc/z2wvdappr/imageedit_1_5110654126.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'Badly hurt, but he is not in any pain.',
        speakerKey: WELL_DRESSED_GENTLEMAN,
        speakerImage: 'https://s25.postimg.cc/vyqsts8gf/imageedit_2_8899215295.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'Thank God for that! Thank-',
        speakerKey: MRS_WHITE,
        speakerImage: 'https://s25.postimg.cc/xp9tvcxq7/imageedit_1_9572860863.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'She broke off suddenly as the sinister meaning of the assurance dawned upon her and she saw the awful confirmation of her fears in the other\'s averted face. She caught her breath, and turning to her slower-witted husband, laid her trembling old hand upon his. There was a long silence.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'He was caught in the machinery.',
        speakerKey: WELL_DRESSED_GENTLEMAN,
        speakerImage: 'https://s25.postimg.cc/vyqsts8gf/imageedit_2_8899215295.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'Caught...in the machinery...',
        speakerKey: MR_WHITE,
        speakerImage: 'https://s25.postimg.cc/og327o77z/imageedit_3_8866029132.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'He sat staring blankly out at the window, and taking his wife\'s hand between his own, pressed it as he had been wont to do in their old courting days nearly forty years before.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'He was the only one left to us. The only surviving child!',
        speakerKey: MR_WHITE,
        speakerImage: 'https://s25.postimg.cc/og327o77z/imageedit_3_8866029132.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'The firm wished me to convey their sincere sympathy with you in your great loss. I beg that you will understand I am only their servant and merely obeying orders.',
        speakerKey: WELL_DRESSED_GENTLEMAN,
        speakerImage: 'https://s25.postimg.cc/vyqsts8gf/imageedit_2_8899215295.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'There was no reply. Mrs. White’s face was pale as a sheet, her eyes staring, and her breath inaudible, on her husband\'s face was a look such as his friend the sergeant might have carried into his first action.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'I was to say that Maw and Meggins disclaim all responsibility. They admit no liability at all, but in consideration of your son\'s services, they wish to present you with a certain sum as compensation.',
        speakerKey: WELL_DRESSED_GENTLEMAN,
        speakerImage: 'https://s25.postimg.cc/vyqsts8gf/imageedit_2_8899215295.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'Mr. White dropped his wife\'s hand, and rising to his feet, gazed with a look of horror at his visitor. His dry lips shaped the words.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'How much?',
        speakerKey: MR_WHITE,
        speakerImage: 'https://s25.postimg.cc/og327o77z/imageedit_3_8866029132.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'Two hundred pounds.',
        speakerKey: WELL_DRESSED_GENTLEMAN,
        speakerImage: 'https://s25.postimg.cc/vyqsts8gf/imageedit_2_8899215295.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'Unconscious of his wife\'s shriek, Mr. White smiled faintly, put out his hands like a sightless man, and dropped, a senseless heap, to the floor.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
    ],
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
    scripts: [
      {
        text: 'In the huge new cemetery, some two miles distant, the old people buried their dead, and came back to a house steeped in shadow and silence. It was all over so quickly that at first they could hardly realize it, and remained in a state of expectation as though of something else to happen —something else which was to lighten this load, too heavy for old hearts to bear.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/7v015gnen/Design_26.png',
      },
      {
        text: 'But the days passed, and expectation gave place to resignation—the hopeless resignation of the old, sometimes miscalled, apathy. Sometimes they hardly exchanged a word, for now they had nothing to talk about, and their days were long to weariness.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/7v015gnen/Design_26.png',
      },
      {
        text: 'It was about a week after that Mr. White, waking suddenly in the night, stretched out his hand and found himself alone. The room was in darkness, and the sound of subdued weeping came from the window. He raised himself in bed and listened.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/ytup9gfrz/Design_1.png',
      },
      {
        text: 'Come back. You will be cold.',
        speakerKey: MR_WHITE,
        speakerImage: 'https://s25.postimg.cc/uneg7ysq7/imageedit_1_6644374430.gif',
        backgroundUrl: 'https://s25.postimg.cc/ytup9gfrz/Design_1.png',
      },
      {
        text: 'It is colder for my son.',
        speakerKey: MRS_WHITE,
        speakerImage: 'https://s25.postimg.cc/6fyggvz7z/imageedit_1_2166182581.gif',
        backgroundUrl: 'https://s25.postimg.cc/ytup9gfrz/Design_1.png',
      },
      {
        text: 'The sound of her sobs died away on his ears. The bed was warm, and his eyes heavy with sleep. He dozed fitfully, and then slept until a sudden wild cry from his wife awoke him with a start.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/ytup9gfrz/Design_1.png',
      },
      {
        text: 'The paw! The monkey\'s paw!',
        speakerKey: MRS_WHITE,
        speakerImage: 'https://s25.postimg.cc/xp9tvcxq7/imageedit_1_9572860863.gif',
        backgroundUrl: 'https://s25.postimg.cc/ytup9gfrz/Design_1.png',
      },
      {
        text: 'Where? Where is it? What\'s the matter?',
        speakerKey: MR_WHITE,
        speakerImage: 'https://s25.postimg.cc/v1fs7f7n3/imageedit_2_4118282660.gif',
        backgroundUrl: 'https://s25.postimg.cc/ytup9gfrz/Design_1.png',
      },
      {
        text: 'I want it. You\'ve not destroyed it?',
        speakerKey: MRS_WHITE,
        speakerImage: 'https://s25.postimg.cc/xp9tvcxq7/imageedit_1_9572860863.gif',
        backgroundUrl: 'https://s25.postimg.cc/ytup9gfrz/Design_1.png',
      },
      {
        text: 'It\'s in the parlour, on the bracket...why?',
        speakerKey: MR_WHITE,
        speakerImage: 'https://s25.postimg.cc/v1fs7f7n3/imageedit_2_4118282660.gif',
        backgroundUrl: 'https://s25.postimg.cc/ytup9gfrz/Design_1.png',
      },
      {
        text: 'I only just thought of it. Why didn\'t I think of it before? Why didn\'t you think of it?',
        speakerKey: MRS_WHITE,
        speakerImage: 'https://s25.postimg.cc/xp9tvcxq7/imageedit_1_9572860863.gif',
        backgroundUrl: 'https://s25.postimg.cc/ytup9gfrz/Design_1.png',
      },
      {
        text: 'Think of what?',
        speakerKey: MR_WHITE,
        speakerImage: 'https://s25.postimg.cc/og327o77z/imageedit_3_8866029132.gif',
        backgroundUrl: 'https://s25.postimg.cc/ytup9gfrz/Design_1.png',
      },
      {
        text: 'The other two wishes! We\'ve only had one.',
        speakerKey: MRS_WHITE,
        speakerImage: 'https://s25.postimg.cc/xp9tvcxq7/imageedit_1_9572860863.gif',
        backgroundUrl: 'https://s25.postimg.cc/ytup9gfrz/Design_1.png',
      },
      {
        text: 'Was one not enough!?',
        speakerKey: MR_WHITE,
        speakerImage: 'https://s25.postimg.cc/og327o77z/imageedit_3_8866029132.gif',
        backgroundUrl: 'https://s25.postimg.cc/ytup9gfrz/Design_1.png',
      },
      {
        text: 'No...we\'ll have one more. Go down and get it quickly and wish our boy alive again!',
        speakerKey: MRS_WHITE,
        speakerImage: 'https://s25.postimg.cc/9mt00j6tb/imageedit_1_4856933481.gif',
        backgroundUrl: 'https://s25.postimg.cc/ytup9gfrz/Design_1.png',
      },
      {
        text: 'Good God, you are mad!',
        speakerKey: MR_WHITE,
        speakerImage: 'https://s25.postimg.cc/og327o77z/imageedit_3_8866029132.gif',
        backgroundUrl: 'https://s25.postimg.cc/ytup9gfrz/Design_1.png',
      },
      {
        text: 'Get it. Get it quickly, and wish- Oh, my boy, my boy! ',
        speakerKey: MRS_WHITE,
        speakerImage: 'https://s25.postimg.cc/9mt00j6tb/imageedit_1_4856933481.gif',
        backgroundUrl: 'https://s25.postimg.cc/ytup9gfrz/Design_1.png',
      },
      {
        text: 'Get back to bed. You don\'t know what you are saying.',
        speakerKey: MR_WHITE,
        speakerImage: 'https://s25.postimg.cc/uneg7ysq7/imageedit_1_6644374430.gif',
        backgroundUrl: 'https://s25.postimg.cc/ytup9gfrz/Design_1.png',
      },
      {
        text: 'We had the first wish granted. Why not the second!?',
        speakerKey: MRS_WHITE,
        speakerImage: 'https://s25.postimg.cc/9mt00j6tb/imageedit_1_4856933481.gif',
        backgroundUrl: 'https://s25.postimg.cc/ytup9gfrz/Design_1.png',
      },
      {
        text: 'A coincidence.',
        speakerKey: MR_WHITE,
        speakerImage: 'https://s25.postimg.cc/og327o77z/imageedit_3_8866029132.gif',
        backgroundUrl: 'https://s25.postimg.cc/ytup9gfrz/Design_1.png',
      },
      {
        text: 'Go and get it and wish.',
        speakerKey: MRS_WHITE,
        speakerImage: 'https://s25.postimg.cc/9mt00j6tb/imageedit_1_4856933481.gif',
        backgroundUrl: 'https://s25.postimg.cc/ytup9gfrz/Design_1.png',
      },
      {
        text: 'He has been dead ten days, and besides he--I would not tell you else, but--I could only recognize him by his clothing. If he was too terrible for you to see then, how now?',
        speakerKey: MR_WHITE,
        speakerImage: 'https://s25.postimg.cc/og327o77z/imageedit_3_8866029132.gif',
        backgroundUrl: 'https://s25.postimg.cc/ytup9gfrz/Design_1.png',
      },
      {
        text: 'Bring him back. Do you think I fear the child I have nursed?',
        speakerKey: MRS_WHITE,
        speakerImage: 'https://s25.postimg.cc/6fyggvz7z/imageedit_1_2166182581.gif',
        backgroundUrl: 'https://s25.postimg.cc/ytup9gfrz/Design_1.png',
      },
      {
        text: 'He went down in the darkness, and felt his way to the parlour, and then to the mantelpiece. The talisman was in its place, and a horrible fear that the unspoken wish might bring his mutilated son before him ere he could escape from the room seized upon him, and he caught his breath as he found that he had lost the direction of the door.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'His brow cold with sweat, he felt his way round the table, and groped along the wall until he found himself in the small passage with the unwholesome thing in his hand.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'Even his wife\'s face seemed changed as she entered the sitting room. It was white and expectant, and to his fears seemed to have an unnatural look upon it. He was afraid of her.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'Wish!',
        speakerKey: MRS_WHITE,
        speakerImage: 'https://s25.postimg.cc/9mt00j6tb/imageedit_1_4856933481.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'It is foolish and wicked.',
        speakerKey: MR_WHITE,
        speakerImage: 'https://s25.postimg.cc/og327o77z/imageedit_3_8866029132.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'Wish!',
        speakerKey: MRS_WHITE,
        speakerImage: 'https://s25.postimg.cc/9mt00j6tb/imageedit_1_4856933481.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
    ],
    button: [
      'Wish for Herbert to return to life',
      'Throw the paw into the fire'
    ],
  },
  [THROW_IN_FIRE_AFTER_WISH]: {
    key: THROW_IN_FIRE_AFTER_WISH,
    options: [
      SAD_ENDING_ONE
    ],
    scripts: [
      {
        text: 'Talisman in hand, the old man raised it up to the sky…yet he could not utter the words. It would not escape his lips. He lowered his arm, and swiftly, before she could change his mind, he threw the paw into the fire.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'His wife shrieked, and quickly dove to retrieve it, but he held her back, her uncontrollable sobs piercing the still air as she watched the mangled paw submit to the flame, along with their son\'s one and only hope.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
    ],
    button: [
      'Next: A Lifetime of Regrets'
    ],
  },
  [SAD_ENDING_ONE]: {
    key: SAD_ENDING_ONE,
    options: [],
    scripts: [
      {
        text: 'The old couple lived on. Never quite the same. And although it seems that they\'d been spared the worst misfortunes of mankind, the remainder of their lives held little meaning for them. There was nothing more to look forward to, and everything ill to look back on.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/q0czjomyn/imageedit_2_3809577070.png',
      },
      {
        text: 'The decades rolled by. And as he neared his hundredth year, the old man looked to the sky and remembered that fateful night...when he came into the possession of a magical paw and defied the rule of the heavens...all for a small sum of two-hundred pounds.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/q0czjomyn/imageedit_2_3809577070.png',
      },
      {
        text: 'He went inside, laid down on his bed and closed his eyes...',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/ytup9gfrz/Design_1.png',
      },
      {
        text: '...and never opened them again.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/ytup9gfrz/Design_1.png',
      },
      {
        text: 'The end.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/ytup9gfrz/Design_1.png',
      }
    ],
  },
  [WISH_HERBERT_BACK]: {
    key: WISH_HERBERT_BACK,
    options: [
      KNOCK_DOOR
    ],
    scripts: [
      {
        text: 'The talisman in hand, he listened to his wife and raised the paw to the heavens.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'I wish my son alive again!',
        speakerKey: MR_WHITE,
        speakerImage: 'https://s25.postimg.cc/og327o77z/imageedit_3_8866029132.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'The talisman fell to the floor, and he regarded it fearfully. Then he sank trembling into a chair as his wife, with burning eyes, walked to the window and raised the blind.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'He sat until he was chilled with the cold, glancing occasionally at the figure of his wife peering through the window. The candle end, which had burned below the rim of the china candlestick, was throwing pulsating shadows on the ceiling and walls, until, with a flicker larger than the rest, it expired.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'Mr. White, with an unspeakable sense of relief at the failure of the talisman, crept back to his bed, and a minute or two afterward, his wife came silently and apathetically beside him.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/ytup9gfrz/Design_1.png',
      },
      {
        text: 'Neither spoke, but lay silently listening to the ticking of the clock. A stair creaked, and a squeaky mouse scurried noisily through the wall. The darkness was oppressive, and after lying for some time screwing up his courage, he took the box of matches, and striking one, went downstairs for a candle.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/ytup9gfrz/Design_1.png',
      },
      {
        text: 'At the foot of the stairs the match went out, and he paused to strike another, and at the same moment a knock, so quiet and stealthy as to be scarcely audible, sounded on the front door. The matches fell from his hand and spilled in the passage.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'He stood motionless, his breath suspended until the knock was repeated. Then he turned and fled swiftly back to his room, and closed the door behind him. A third knock sounded through the house.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
    ],
    button: [
      'Next: The Knocks Continue'
    ],
  },
  [KNOCK_DOOR]: {
    key: KNOCK_DOOR,
    options: [
      THIRD_WISH
    ],
    scripts: [
      {
       text: 'What\'s that?',
        speakerKey: MRS_WHITE,
        speakerImage: 'https://s25.postimg.cc/z2wvdappr/imageedit_1_5110654126.gif',
        backgroundUrl: 'https://s25.postimg.cc/ytup9gfrz/Design_1.png',
      },
      {
        text: 'A rat...a rat. It passed me on the stairs.',
        speakerKey: MR_WHITE,
        speakerImage: 'https://s25.postimg.cc/og327o77z/imageedit_3_8866029132.gif',
        backgroundUrl: 'https://s25.postimg.cc/ytup9gfrz/Design_1.png',
      },
      {
        text: 'Mrs. White sat up in the bed and listened. Then unmistakably, a knock resounded through the house.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/ytup9gfrz/Design_1.png',
      },
      {
        text: 'It’s Herbert! It’s Herbert!',
        speakerKey: MRS_WHITE,
        speakerImage: 'https://s25.postimg.cc/9mt00j6tb/imageedit_1_4856933481.gif',
        backgroundUrl: 'https://s25.postimg.cc/ytup9gfrz/Design_1.png',
      },
      {
        text: 'She ran down the stairs, but her husband was before her, and catching her by the arm, held her tightly.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'What are you going to do?',
        speakerKey: MR_WHITE,
        speakerImage: 'https://s25.postimg.cc/v1fs7f7n3/imageedit_2_4118282660.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'It\'s my boy, it\'s Herbert! I forgot it was two miles away...the cemetery! What are you holding me for? Let go. I must open the door.',
        speakerKey: MRS_WHITE,
        speakerImage: 'https://s25.postimg.cc/9mt00j6tb/imageedit_1_4856933481.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'For God’s sake, don\'t let it in!',
        speakerKey: MR_WHITE,
        speakerImage: 'https://s25.postimg.cc/v1fs7f7n3/imageedit_2_4118282660.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'You\'re afraid of you own son. Let me go. I\'m coming, Herbert. Mother\'s coming.',
        speakerKey: MRS_WHITE,
        speakerImage: 'https://s25.postimg.cc/9mt00j6tb/imageedit_1_4856933481.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
    ],
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
    scripts: [
      {
        text: 'There was another knock, and another. The old woman with a sudden wrench broke free and ran to the door. Her husband called after her, but she did not heed his cries.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'He heard the chain rattle back and the bottom bolt drawn slowly and stiffly from the socket. Then the old woman\'s voice, strained and panting.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'The bolt. Come down, I can\'t reach it.',
        speakerKey: MRS_WHITE,
        speakerImage: 'https://s25.postimg.cc/9mt00j6tb/imageedit_1_4856933481.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'But Mr. White was on his hands and knees groping wildly on the floor in search of the paw. If he could only find it before the thing outside got in.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'A perfect fusillade of knocks reverberated through the house, and he heard the scraping of a chair as his wife put it down in the passage against the door. He heard the creaking of the bolt as it came slowly back, and at the same moment he found the monkey\'s paw, and frantically...',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
    ],
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
    scripts: [
      {
        text: '...he raised the talisman in his hand and cried to the heavens to hear his plea.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'I wish my son would disappear!',
        speakerKey: MR_WHITE,
        speakerImage: 'https://s25.postimg.cc/og327o77z/imageedit_3_8866029132.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
    ],
    button: [
      'Next: Disappointment'
    ],
  },
  [SAD_ENDING_TWO]: {
    key: SAD_ENDING_TWO,
    options: [],
    scripts: [
      {
        text: 'The knocking ceased suddenly, although the echoes of it were still in the house. He heard the chair drawn back, and the door opened.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'A cold wind rushed up the staircase, and a long loud wail of disappointment and misery from his wife gave him courage to run down to her side, and then to the gate beyond. The street lamp flickering opposite shone on a quiet and deserted road.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/i7d500k5r/Design_7.png',
      },
      {
        text: 'The end.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/i7d500k5r/Design_7.png',
      },
    ],
    speakerKey: [NARRATOR]
  },
  [LET_WIFE_OPEN_DOOR]: {
    key: LET_WIFE_OPEN_DOOR,
    options: [
      BAD_ENDING
    ],
    scripts: [
      {
        text: '...he raised the talisman in his hand...but for a second he hesitated. Perhaps his wife could be right. Why wouldn\'t they want their boy? And isn\'t it just as likely that he\'d be restored in the condition in which they desired?',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'His thoughts were interrupted by a guttural shriek.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
    ],
    button: [
      'Next: The price of defiance'
    ],
  },
  [BAD_ENDING]: {
    key: BAD_ENDING,
    options: [],
    scripts: [
      {
        text: 'The old man flew to the door. But nothing in life could\'ve prepared him for that sight. His blood ran ice cold.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'The door was ajar, his wife a heap on the ground, dead with fright.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'The thing in between the door frame looked him straight in the eye and stared down to his soul.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'I’m home, father.',
        speakerKey: HERBERT,
        speakerImage: 'https://s25.postimg.cc/musdte4bj/imageedit_4_9354297053.gif',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      },
      {
        text: 'The end.',
        speakerKey: NARRATOR,
        speakerImage: '',
        backgroundUrl: 'https://s25.postimg.cc/aq3xl9crj/Design_3.png',
      }
    ],
  }
}

export const STORIES = [
  {
    id: '1',
    name: 'Monkey Paw',
    desc: 'life is a bitch',
    startNode: SERG_ARRIVES,
    storyGraph: STORY_GRAPH_MONKEY_PAW,
    speakers: SPEAKERS_MONKEY_PAW
  }
]

export const getRandomStory = async () => {
  return STORIES[Math.floor(Math.random() * STORIES.length)];
}
