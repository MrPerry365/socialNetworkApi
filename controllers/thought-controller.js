const {thoughts,Users } = require('../models');

const thoughtsController = {
  // add thoughts to thought
  addUsers({ params, body }, res) {
    console.log(params);
   thoughts.create(body)
      .then(({ _id }) => {
        returnThought.findOneAndUpdate(
          { _id: params.UserId },
          { $push: {thoughts: _id } },
          { new: true }
        );
      })
      .then(dbUserData => {
        console.log(dbUserData);
        if (!dbUserData) {
          res.status(404).json({ message: 'No thought found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
  },

  // add reply to thoughts
  addReply({ params, body }, res) {
   thoughts.findOneAndUpdate(
      { _id: params.UsersId },
      { $push: { replies: body } },
      { new: true, runValidators: true }
    )
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No thought found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
  },

  // remove thoughts
  removeUsers({ params }, res) {
   thoughts.findOneAndDelete({ _id: params.UsersId })
      .then(deletedUsers => {
        if (!deletedUsers) {
          return res.status(404).json({ message: 'No thoughts with this id!' });
        }
        returnThought.findOneAndUpdate(
          { _id: params.UserId },
          { $pull: {thoughtss: params.UsersId } },
          { new: true }
        );
      })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No thought found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
  },
  // remove reply
  removeReply({ params }, res) {
   thoughts.findOneAndUpdate(
      { _id: params.UsersId },
      { $pull: { replies: { replyId: params.replyId } } },
      { new: true }
    )
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.json(err));
  }
};

module.exports = commentController;
