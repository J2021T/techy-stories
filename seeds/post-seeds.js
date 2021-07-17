const { Post } = require('../models');

const posts = [
    {
        title: 'Zelda: Breath of the Wild',
        content: 'An amazing open world game!  There are numerous easter eggs and lots of hidden gems.  An explorers dream game.',
        user_id: 1
    },
    {
        title: 'Sheikah Slate',
        content: 'The Sheikah Slate is an incredible tech tool.  Containing the abilities to generate bombs, magnetize, and be an object compass are amazing.',
        user_id: 2
    },
    {
        title: 'Gliding',
        content: 'The controller efforts for gliding are pretty simple.  Utilizing updrafts with talented handling of the joystick a user can glide almost anywhere.  With use of the correct bomb timing a user can glide almost the entire map',
        user_id: 1
    },
    {
        title: 'Master Sword',
        content: 'The Master Sword seems to have an unfair technological advantage.  The increased power it receives when facing a certain type is unfair.  How can one compete with this?',
        user_id: 3
    }
]

const seedPosts = () => Post.bulkCreate(posts);

module.exports = seedPosts;