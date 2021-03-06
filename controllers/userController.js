const { User, Thought } = require("../models");

module.exports = {
  // get all users
  getUsers(req, res) {
    User.find()
      .select("-__v")
      .then((users) => res.json(users))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // get single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .populate({ path: "thoughts", select: "-__v" })
      .populate({ path: "friends", select: "-__v" })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that id!" })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // create user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // update user
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that id!" })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // delete user
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that id" })
          : Thought.deleteMany({ _id: { $in: user.thoughts } })
      )
      .then(() => res.json({ message: "User and thoughts deleted!" }))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // add friend
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $push: { friends: req.params.friendId } },
      { new: true }
    )
      .select("-__v")
      .populate({ path: "friends", select: "-__v" })
      .then((user) => {
        !user
          ? res.status(404).json({ message: "No user with that id!" })
          : res.json(user);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // delete friend
  deleteFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
      .select("-__v")
      .populate({ path: "friends", select: "-__v" })
      .then((user) => {
        !user
          ? res.status(404).json({ message: "No user with that id!" })
          : res.json(user);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
};
