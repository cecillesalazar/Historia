const R = require('ramda');
const SEARG_ARRIVES = 'SEARG_ARRIVES';
const SEARG_TELLS_STORY = 'SEARG_TELLS_STORY';
const COVETS_PAW = 'COVETS_PAW';
const MAKE_WISH = 'MAKE_WISH';

const STORY_GRAPH = { 
  [SEARG_ARRIVES]: {
    key: SEARG_ARRIVES,
    options: [
      SEARG_TELLS_STORY,
    ],
    story: 'bla bla blidy bla',
  },
  [SEARG_TELLS_STORY]: {
    key: SEARG_TELLS_STORY,
    options: [
      COVETS_PAW,
    ],
    story: 'miko is the greatest',
  },
  [COVETS_PAW]: {
    key: COVETS_PAW,
    options: [
      MAKE_WISH,
    ],
    story: 'I like monkey brains! hahahahahahahah',
  },
  [MAKE_WISH]: {
    key: MAKE_WISH,
    options: [
    ],
    story: 'foo bar',
  },
}

//console.log(STORY_GRAPH[ STORY_GRAPH[SEARG_ARRIVES].options[0] ])

const propOfGraph = (key) => STORY_GRAPH[key];

const story = R.pipe(
  R.prop('story'),
)

const firstOption = R.pipe(
  R.prop('options'),
  R.nth(0),
  propOfGraph,
)

R.pipe(
  propOfGraph,
  firstOption,
  firstOption,
  firstOption,
  story,
  R.tap(console.log)
)(SEARG_ARRIVES)
