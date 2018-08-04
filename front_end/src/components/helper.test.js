import helper from './helper.js';

describe('helper', () => {
  it('should return the story node for the key passed', () => {
      expect(helper.getStoryNode(helper.BAD_ENDING)).toMatchSnapshot();
  });
});
