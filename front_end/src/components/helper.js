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
const SAD_ENDING = 'SAD_ENDING';
const WISH_HERBERT_DISAPPEAR = 'WISH_HERBERT_DISAPPEAR';
const LET_WIFE_OPEN_DOOR = 'LET_WIFE_OPEN_DOOR';
const BAD_ENDING = 'BAD_ENDING';

const STORY_GRAPH = {
  [SERG_ARRIVES]: {
    key: SERG_ARRIVES,
    options: [
      SERG_TELLS_STORY
    ],
    story: 'Plot for SERG_ARRIVES',
  },
  [SERG_TELLS_STORY]: {
    key: SERG_TELLS_STORY,
    options: [
      COVETS_PAW
    ],
    story: 'Plot for SERG_TELLS_STORY',
  },
  [COVETS_PAW]: {
    key: COVETS_PAW,
    options: [
      FIRST_WISH
    ],
    story: 'Plot for COVETS_PAW',
  },
  [FIRST_WISH]: {
    key: FIRST_WISH,
    options: [
      WISH_FOR_200_LBS,
      THROW_IN_FIRE_BEFORE_WISH
    ],
    story: 'Plot for FIRST_WISH',
  },
  [THROW_IN_FIRE_BEFORE_WISH]: {
    key: THROW_IN_FIRE_BEFORE_WISH,
    options: [
      HAPPY_ENDING
    ],
    story: 'Plot for THROW_IN_FIRE_BEFORE_WISH',
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
  },
  [HERBERT_DIES]: {
    key: HERBERT_DIES,
    options: [
      SECOND_WISH
    ],
    story: 'Plot for HERBERT_DIES',
  },
  [SECOND_WISH]: {
    key: SECOND_WISH,
    options: [
      WISH_HERBERT_BACK,
      THROW_IN_FIRE_AFTER_WISH
    ],
    story: 'Plot for SECOND_WISH',
  },
  [THROW_IN_FIRE_AFTER_WISH]: {
    key: THROW_IN_FIRE_AFTER_WISH,
    options: [
      SAD_ENDING
    ],
    story: 'Plot for THROW_IN_FIRE_AFTER_WISH',
  },
  [SAD_ENDING]: {
    key: SAD_ENDING,
    options: [],
    story: 'Plot for SAD_ENDING',
  },
  [WISH_HERBERT_BACK]: {
    key: WISH_HERBERT_BACK,
    options: [
      KNOCK_DOOR
    ],
    story: 'Plot for WISH_HERBERT_BACK',
  },
  [KNOCK_DOOR]: {
    key: KNOCK_DOOR,
    options: [
      THIRD_WISH
    ],
    story: 'Plot for KNOCK_DOOR',
  },
  [THIRD_WISH]: {
    key: THIRD_WISH,
    options:[
      WISH_HERBERT_DISAPPEAR,
      LET_WIFE_OPEN_DOOR
    ],
    story: 'Plot for THIRD_WISH',
  },
  [WISH_HERBERT_DISAPPEAR]: {
    key: WISH_HERBERT_DISAPPEAR,
    options: [
      SAD_ENDING
    ],
    story: 'Plot for WISH_HERBERT_DISAPPEAR',
  },
  [LET_WIFE_OPEN_DOOR]: {
    key: LET_WIFE_OPEN_DOOR,
    options: [
      BAD_ENDING
    ],
    story: 'Plot for LET_WIFE_OPEN_DOOR',
  },
  [BAD_ENDING]: {
    key: BAD_ENDING,
    options: [],
    story: 'Plot for BAD_ENDING',
  }
}

export default function getSingleNode(key) {
  return STORY_GRAPH[key]
};
