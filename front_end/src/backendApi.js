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
      WISH_FOR_200_LBS,
      THROW_IN_FIRE_BEFORE_WISH
    ],
    story: ['Mr. White dropped it back in his pocket, and placing chairs, motioned his friend to the table. In the business of supper the talisman was partly forgotten, and afterward the three sat listening in an enthralled fashion to a second installment of the soldier\'s adventures in India. As the night deepened and the hour turned late, Morris bade the family goodbye to catch the last train.',
            'If the tale about the monkey\'s paw is not more truthful than those he has been telling us, we sha\'nt make much out of it.',
            'Hmm...',
            'Did you give him anything for it father?',
            'A trifle. He didn\'t want it, but I made him take it. And he pressed me again to throw it away.',
            'I wonder of his aversion. Why, we can be rich, famous, and happy. Wish to be an emperor, father, to begin with, then you can\'t be henpecked.',
            'He darted round the table, pursued by the maligned Mrs. White armed with an antimacassar. Mr. White took the paw from his pocket and eyed it dubiously.',
            'I don\'t know what to wish for, and that\'s a fact. It seems to me I\'ve got all I want.',
            'If you only cleared the house, you\'d be quite happy, wouldn\'t you? Well, wish for two hundred pounds, then, that\'ll just do it.',
            'Mr. White, smiling shamefacedly at his own credulity, held up the talisman, as his son, with a solemn face, somewhat marred by a wink at his mother, sat down at the piano and struck a few impressive chords.'
           ],
    speaker: ['', 'Herbert', 'Mr. White', 'Herbert', 'Mr. White', 'Herbert', '', 'Mr. White', 'Herbert', ''],
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
    story: ['I wish for two hundred pounds.',
            'A fine crash from the piano greeted the words, interrupted by a shuddering cry from the old man. His wife and son ran toward him.',
            'It moved. As I wished, it twisted in my hand like a snake!',
            'Well, I don\'t see the money...and I bet I never shall.',
            'It must have been your fancy, father.',
            'Never mind though. There\'s no harm done, but it gave me a shock all the same.',
            'They sat down by the fire again. Outside, the wind was higher than ever, and the old man started nervously at the sound of a door banging upstairs. A silence unusual and depressing settled upon all three, which lasted until the old couple rose to retire for the night.',
            'I expect you\'ll find the cash tied up in a big bag in the middle of your bed...and something horrible squatting up on top of the wardrobe watching you as you pocket your ill-gotten gains.',
            'Mr. White sat alone in the darkness, gazing at the dying fire, and seeing faces in it. The last face was so horrible and so simian that he gazed at it in amazement. It got so vivid that, with a little uneasy laugh, he felt on the table for a glass containing a little water to throw over it. His hand grasped the monkey\'s paw, and with a little shiver he wiped his hand on his coat and went up to bed.'
           ],
    speaker: ['Mr. White', '', 'Mr. White', 'Herbert', 'Mrs. White', 'Mr. White', '', 'Herbert', ''],
    button: [
      'The wish is granted'
    ],
  },
  [THROW_IN_FIRE_BEFORE_WISH]: {
    key: THROW_IN_FIRE_BEFORE_WISH,
    options: [
      HAPPY_ENDING
    ],
    story: ['His friend\'s words echoed in his ear.',
            'If you keep it, don\'t blame me for what happens. Pitch it on the fire again like a sensible man.',
            'A sensible man...that indeed was who he was. Curiosity over the talisman and the inevitable greed that it aroused may have led him astray for a time, but not this time. He began to lower his arm, and swift as the wind, he threw the paw into the fire.',
            'Father!',
            'Dear!',
            'His wife and son simply stared, their jaws agape, their eyes riveted to the fire as it did its duty. For a moment, they seemed to see a face of a withered old man wearing a wry smile shaped by the smoke and the flames, but it quickly faded, leading them to believe that it was nothing but mere imagination.'
           ],
    speaker: ['', '', '', 'Herbert', 'Mrs. White', ''],
    button: [
      'Next: Calm and Prosperity'
    ],
  },
  [HAPPY_ENDING]: {
    key: HAPPY_ENDING,
    options: [],
    story: ['Fortune seemed to smile on the White household as the seasons changed. They didn\'t live as kings and queens, yet seemed to avoid the tragedies in which man is so frequently plagued. Never had they run out of sustenance when times were meager. And in the event of the great flood, which reduced the town\'s homes to less than a quarter, their cozy cottage remained oddly intact, even as all their neighbors experienced the opposite fate. It was as if mother nature had chosen to respect the tiny family, for reasons unknown to them.',
            'Herbert married. A beautiful young lass with sharp wits about her, and a penchant for business. They opened their own trade, and Herbert went from being the common laborer to a respected merchant. Children followed soon afterwards, to the delight of their old mother and father, who seemed to have aged amicably.',
            'The family lived fruitfully, the children begetting children as the decades rolled by. As he neared his hundredth year, the old man looked at the sky and briefly remembered that strange night when he came into possession of a magical paw and was once tempted to defy fate with a wish.',
            'He closed his eyes. And looked deeply into himself. And realized.',
            'That he did not feel the twinge of regret for what could\'ve been.',
            'Everything was as it should be. And it is.',
            'The end.'
           ],
    speaker: ['', '', '', '', '', '', '']
  },
  [HERBERT_DIES]: {
    key: HERBERT_DIES,
    options: [
      SECOND_WISH
    ],
    story: ['In the brightness of the wintry sun next morning as it streamed over the breakfast table the old man laughed at his fears. There was an air of prosaic wholesomeness about the room which it had lacked on the previous night, and the dirty, shrivelled little paw was pitched on the sideboard with a carelessness which betokened no great belief in its virtues.',
            'I suppose all old soldiers are the same...the idea of our listening to such nonsense! How could wishes be granted in these days? And if they could, how could two hundred pounds hurt you, father?',
            'Might drop on his head from the sky.',
            'Morris said the things happened so naturally, that you might if you so wished attribute it to coincidence.',
            'Well, don\'t break into the money before I come back. I\'m afraid it\'ll turn you into a mean, avaricious man, and we shall have to disown you.',
            'His mother laughed, and following him to the door, watched him down the road, and returning to the breakfast table, was very happy at the expense of her husband\'s credulity. All of which did not prevent her from scurrying to the door at the postman\'s knock, nor prevent her from referring somewhat shortly to retired sergeant majors of bibulous habits when she found that the post brought a tailor\'s bill. Before they knew it, the daylight had passed them by, and it was time for supper.',
            'Herbert will have some more of his funny remarks, I expect, when he comes home.',
            'I dare say...but for all that, the thing moved in my hand, that I\'ll swear to.',
            'You thought it did.',
            'I say it did. There was no thought about it, I had just—- What\'s the matter?',
            'She made no reply. She was watching the mysterious movements of a man outside, who, peering in an undecided fashion at the house, appeared to be trying to make up his mind to enter. In mental connection with the two hundred pounds, she noticed that the stranger was well dressed, and wore a silk hat of glossy newness. Three times he paused at the gate, and then walked on again. The fourth time he stood with his hand upon it, and then with sudden resolution flung it open and walked up the path. Mrs. White at the same moment placed her hands behind her, and hurriedly unfastening the strings of her apron, put that useful article of apparel beneath the cushion of her chair.',
            'She brought the stranger, who seemed ill at ease, into the room. He gazed at her furtively, and listened in a preoccupied fashion as the old lady apologized for the appearance of the room, and her husband\'s coat, a garment which he usually reserved for the garden. She then waited as patiently for him to broach his business, but he was at first strangely silent.',
            'I...I was asked to call. I come from Maw and Meggins.',
            'Is anything the matter? Has anything happened to Herbert? What is it? What is it?',
            'There, there, mother. Sit down and don\'t jump to conclusions. You\'ve not brought bad news, I\'m sure sir.',
            'I\'m sorry-',
            'Is he hurt?',
            'Badly hurt, but he is not in any pain.',
            'Thank God for that! Thank-',
            'She broke off suddenly as the sinister meaning of the assurance dawned upon her and she saw the awful confirmation of her fears in the other\'s averted face. She caught her breath, and turning to her slower-witted husband, laid her trembling old hand upon his. There was a long silence.',
            'He was caught in the machinery.',
            'Caught...in the machinery...',
            'He sat staring blankly out at the window, and taking his wife\'s hand between his own, pressed it as he had been wont to do in their old courting days nearly forty years before.',
            'He was the only one left to us. The only surviving child!',
            'The firm wished me to convey their sincere sympathy with you in your great loss. I beg that you will understand I am only their servant and merely obeying orders.',
            'There was no reply. Mrs. White’s face was pale as a sheet, her eyes staring, and her breath inaudible, on her husband\'s face was a look such as his friend the sergeant might have carried into his first action.',
            'I was to say that Maw and Meggins disclaim all responsibility. They admit no liability at all, but in consideration of your son\'s services, they wish to present you with a certain sum as compensation.',
            'Mr. White dropped his wife\'s hand, and rising to his feet, gazed with a look of horror at his visitor. His dry lips shaped the words.',
            'How much?',
            'Two hundred pounds.',
            'Unconscious of his wife\'s shriek, Mr. White smiled faintly, put out his hands like a sightless man, and dropped, a senseless heap, to the floor.'
           ],
    speaker: ['', 'Mrs. White', 'Herbert', 'Mr. White', 'Herbert', '', 'Mrs. White', 'Mr. White', 'Mrs. White', 'Mr. White', '', '', 'Well Dressed Gentleman', 'Mrs. White', 'Mr. White', 'Well Dressed Gentleman', 'Mrs. White', 'Well Dressed Gentleman', 'Mrs. White', '', 'Well Dressed Gentleman', 'Mr. White', '', 'Mr. White', 'Well Dressed Gentleman', '', 'Well Dressed Gentleman', '', 'Mr. White', 'Well Dressed Gentleman', ''],
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
    story: ['In the huge new cemetery, some two miles distant, the old people buried their dead, and came back to a house steeped in shadow and silence. It was all over so quickly that at first they could hardly realize it, and remained in a state of expectation as though of something else to happen —something else which was to lighten this load, too heavy for old hearts to bear.',
            'But the days passed, and expectation gave place to resignation—the hopeless resignation of the old, sometimes miscalled, apathy. Sometimes they hardly exchanged a word, for now they had nothing to talk about, and their days were long to weariness.',
            'It was about a week after that Mr. White, waking suddenly in the night, stretched out his hand and found himself alone. The room was in darkness, and the sound of subdued weeping came from the window. He raised himself in bed and listened.',
            'Come back. You will be cold.',
            'It is colder for my son.',
            'The sound of her sobs died away on his ears. The bed was warm, and his eyes heavy with sleep. He dozed fitfully, and then slept until a sudden wild cry from his wife awoke him with a start.',
            'The paw! The monkey\'s paw!',
            'Where? Where is it? What\'s the matter?',
            'I want it. You\'ve not destroyed it?',
            'It\'s in the parlour, on the bracket...why?',
            'I only just thought of it. Why didn\'t I think of it before? Why didn\'t you think of it?',
            'Think of what?',
            'The other two wishes! We\'ve only had one.',
            'Was one not enough!?',
            'No...we\'ll have one more. Go down and get it quickly and wish our boy alive again!',
            'Good God, you are mad!',
            'Get it. Get it quickly, and wish- Oh, my boy, my boy! ',
            'Get back to bed. You don\'t know what you are saying.',
            'We had the first wish granted. Why not the second?',
            'A coincidence.',
            'Go and get it and wish.',
            'He has been dead ten days, and besides he--I would not tell you else, but--I could only recognize him by his clothing. If he was too terrible for you to see then, how now?',
            'Bring him back. Do you think I fear the child I have nursed?',
            'He went down in the darkness, and felt his way to the parlour, and then to the mantelpiece. The talisman was in its place, and a horrible fear that the unspoken wish might bring his mutilated son before him ere he could escape from the room seized upon him, and he caught his breath as he found that he had lost the direction of the door. His brow cold with sweat, he felt his way round the table, and groped along the wall until he found himself in the small passage with the unwholesome thing in his hand.',
            'Even his wife\'s face seemed changed as he entered the room. It was white and expectant, and to his fears seemed to have an unnatural look upon it. He was afraid of her.',
            'Wish!',
            'It is foolish and wicked.',
            'Wish!'
           ],
    speaker: ['', '', '', 'Mr. White', 'Mrs. White', '', 'Mrs. White', 'Mr. White', 'Mrs. White', 'Mr. White', 'Mrs. White', 'Mr. White', 'Mrs. White', 'Mr. White', 'Mrs. White', 'Mr. White', 'Mrs. White', 'Mr. White', 'Mrs. White', 'Mr. White', 'Mrs. White', 'Mr. White', 'Mrs. White', '', '', 'Mrs. White', 'Mr. White', 'Mrs. White'],
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
    story: ['The talisman in hand, he listened to his wife and raised the paw to the heavens.',
            'I wish my son alive again!',
            'The talisman fell to the floor, and he regarded it fearfully. Then he sank trembling into a chair as his wife, with burning eyes, walked to the window and raised the blind.',
            'He sat until he was chilled with the cold, glancing occasionally at the figure of his wife peering through the window. The candle end, which had burned below the rim of the china candlestick, was throwing pulsating shadows on the ceiling and walls, until, with a flicker larger than the rest, it expired. Mr. White, with an unspeakable sense of relief at the failure of the talisman, crept back to his bed, and a minute or two afterward, his wife came silently and apathetically beside him.',
            'Neither spoke, but lay silently listening to the ticking of the clock. A stair creaked, and a squeaky mouse scurried noisily through the wall. The darkness was oppressive, and after lying for some time screwing up his courage, he took the box of matches, and striking one, went downstairs for a candle.',
            'At the foot of the stairs the match went out, and he paused to strike another, and at the same moment a knock, so quiet and stealthy as to be scarcely audible, sounded on the front door. The matches fell from his hand and spilled in the passage. He stood motionless, his breath suspended until the knock was repeated. Then he turned and fled swiftly back to his room, and closed the door behind him. A third knock sounded through the house.',

           ],
    speaker: ['', 'Mr. White', '', '', '', ''],
    button: [
      'Next: The Knocks Continue'
    ],
  },
  [KNOCK_DOOR]: {
    key: KNOCK_DOOR,
    options: [
      THIRD_WISH
    ],
    story: ['What\'s that?',
            'A rat...a rat. It passed me on the stairs.',
            'Mrs. White sat up in the bed and listened. Then unmistakably, a knock resounded through the house.',
            'It’s Herbert! It’s Herbert!',
            'She ran to the door, but her husband was before her, and catching her by the arm, held her tightly.',
            'What are you going to do?',
            'It\'s my boy, it\'s Herbert! I forgot it was two miles away...the cemetery! What are you holding me for? Let go. I must open the door.',
            'For God’s sake, don\'t let it in!',
            'You\'re afraid of you own son. Let me go. I\'m coming, Herbert. Mother\'s coming.',

           ],
    speaker: ['Mrs. White', 'Mr. White', '', 'Mrs. White', '', 'Mr. White', 'Mrs. White', 'Mr. White', 'Mrs. White'],
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
    story: ['There was another knock, and another. The old woman with a sudden wrench broke free and ran from the room. Her husband followed to the landing, and called after her appealingly as she hurried downstairs. He heard the chain rattle back and the bottom bolt drawn slowly and stiffly from the socket. Then the old woman\'s voice, strained and panting.',
            'The bolt. Come down, I can\'t reach it.',
            'But Mr. White was on his hands and knees groping wildly on the floor in search of the paw. If he could only find it before the thing outside got in. A perfect fusillade of knocks reverberated through the house, and he heard the scraping of a chair as his wife put it down in the passage against the door. He heard the creaking of the bolt as it came slowly back, and at the same moment he found the monkey\'s paw, and frantically...'
           ],
    speaker: ['', 'Mrs. White', ''],
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
    story: ['...he raised the talisman in his hand and cried to the heavens to hear his plea.',
            'I wish my son would disappear!'
           ],
    speaker: ['', 'Mr. White'],
    button: [
      'Next: Disappointment'
    ],
  },
  [SAD_ENDING_TWO]: {
    key: SAD_ENDING_TWO,
    options: [],
    story: ['The knocking ceased suddenly, although the echoes of it were still in the house. He heard the chair drawn back, and the door opened. A cold wind rushed up the staircase, and a long loud wail of disappointment and misery from his wife gave him courage to run down to her side, and then to the gate beyond. The street lamp flickering opposite shone on a quiet and deserted road.',
            'The end.'
           ],
    speaker: ['', '']
  },
  [LET_WIFE_OPEN_DOOR]: {
    key: LET_WIFE_OPEN_DOOR,
    options: [
      BAD_ENDING
    ],
    story: ['...he raised the talisman in his hand...but for a second he hesitated. Perhaps his wife could be right. Why wouldn\'t they want their boy? And isn\'t it just as likely that he\'d be restored in the condition in which they desired?',
            'His thoughts were interrupted by a guttural shriek.'
           ],
    speaker: ['', ''],
    button: [
      'Next: The price of defiance'
    ],
  },
  [BAD_ENDING]: {
    key: BAD_ENDING,
    options: [],
    story: ['The old man flew down the stairs. But nothing in life could\'ve prepared him for that sight. His blood ran ice cold.',
            'The door was ajar, his wife a heap on the ground, dead with fright.',
            'The thing in between the door frame looked him straight in the eye and stared down to his soul.',
            'I’m home, father.',
            'The end.'
           ],
    speaker: ['', '', '', 'Herbert', '']
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
