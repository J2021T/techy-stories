const { Comment } = require('../models');

const comments = [
    {
        comment_text: 'Wow! Cool knowledge',
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: 'Pretty amazing!',
        user_id: 3,
        post_id: 1
    },
    {
        comment_text: 'Wow! Cool',
        user_id: 1,
        post_id: 2
    },
    {
        comment_text: 'Woah!',
        user_id: 3,
        post_id: 2
    },
    {
        comment_text: 'Great article',
        user_id: 1,
        post_id: 3
    }
]

const seedComments = () => Comment.bulkCreate(comments);

module.exports = seedComments;