const router = require("express").Router();

const {
  createThought,
  getThoughtById,
  getAllThought,
  deleteThought,
  updateThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");

// /api/thought
router.route("/").post(createThought).get(getAllThought);

// /api/thought/:id
router
  .route("/:thoughtId")
  .put(updateThought)
  .delete(deleteThought)
  .get(getThoughtById);

router.route("/:thoughtId/reaction").post(createReaction);

router.route("/:thoughtId/reaction/:reactionId").delete(deleteReaction);

module.exports = router;
