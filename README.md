README

Historia is a collection of stories from a myriad of cultures which allows the user to make choices that determine the future plot and endings of the story.

Link: https://stark-caverns-30288.herokuapp.com/

Tech Stack Description:

The entire project is based upon the manipulation of what’s stored in the database - in a collection called stories. For brevity, I am only including the first story node in the graph and only the first script.

The storyGraph key contains the brunt of what makes Historia work. It has several nodes which represent chapters in the story, and within each node, is an array of objects called scripts, which dictates the text, speaker, speaker character illustration, and background image for the particular page containing dialogue or narrative.

Each node is given a key. This key is used to traverse the story via the options array. When a story ends, the user is presented their options, which are comprised of nodes to choose from. Some nodes will only have one option, others more. Depending on which option the user chooses, that key will take them to that node. An array called button also corresponds with each option in the options array - so that the text displayed in the button is a little easier on the eyes than a key that means little to the user.

Lastly, stories also have a key called speakers, which pilots in a similar fashion as the storyGraph, except for it returns the name of the speaker that is used within the scripts key.

{
    "_id": {
        "$oid": "5b7654f7e7179a69ea606058"
    },
    "story": {
        "name": "Monkey Paw",
        "desc": "life is a bitch",
        "startNode": "SERG_ARRIVES",
        "storyGraph": {
            "SERG_ARRIVES": {
                "key": "SERG_ARRIVES",
                "options": [
                    "SERG_TELLS_STORY"
                ],
                "scripts": [
                    {
                        "text": "Without, the night was cold and wet, but in the small parlour of Laburnam Villa, the blinds were drawn and the fire burned brightly. Father and son were at chess, the former, who possessed ideas about the game involving radical changes, putting his king into such sharp and unnecessary perils that it even provoked comment from mother, who knit placidly by the fire.",
                        "speakerKey": "NARRATOR",
                        "speakerImage": "",
                        "backgroundUrl": "https://s25.postimg.cc/aq3xl9crj/Design_3.png"
                    }
                  ]
              }
          },
          "speakers": {
              "NARRATOR": {
                  "name": "",
                  "key": "NARRATOR"
              },
              "MR_WHITE": {
                  "name": "Mr. White",
                  "key": "MR_WHITE"
              },
              "MRS_WHITE": {
                  "name": "Mrs. White",
                  "key": "MRS_WHITE"
              },
              "HERBERT": {
                  "name": "Herbert",
                  "key": "HERBERT"
              },
              "BURLY_RED_FACED_MAN": {
                  "name": "Burly Red Faced Man",
                  "key": "BURLY_RED_FACED_MAN"
              },
              "MORRIS": {
                  "name": "Morris",
                  "key": "MORRIS"
              },
              "WELL_DRESSED_GENTLEMAN": {
                  "name": "Well Dressed Gentleman",
                  "key": "WELL_DRESSED_GENTLEMAN"
              }
          }
      }
};

Probably the most important file to reference in Historia is src/components/helper.js. This file contains all of the recyclable functions that allows for proper extraction of the data from the database. The second most important file is probably src/compononents/storynode.js which imports all of helper.js functions and passes them to the components that render the script, the options, and the save, load, and restart buttons as props.

Other Useful Things to Know

Historia has ONE repository housing both the front-end and the back-end. Several changes have been made in order to have it successfully push to Heroku properly. A package json file for the root was created solely to link the front end and the back end with an empty-ish build clause just so heroku would not reject the push.

{
  "name": "historia",
  "version": "0.1.0",
  "scripts": {
    "postinstall": "npm install --prefix back_end && npm run install-and-build --prefix front_end",
    "build": "npm --version"
  }
}

Lastly, the framework IS built to accommodate for multiple stories in the database, although unfortunately, with the project time constraint, we were only able to finish one.
