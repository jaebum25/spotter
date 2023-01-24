const Post = require('../../models/post')

module.exports = {
  index,
  create,
  delete: deletePost
}

// Show all of my posts in the list at page load
async function index(req, res) {
  try {
  let posts = await Post.find({})
  res.status(200).json(posts)
  } catch(err) {
    console.log(err)
  }
}

// create will activate when i click add post
async function create(req, res) {
  // create from req.body
  await Post.create(req.body)
  res.status(200).json('Done')
}

async function deletePost(req, res) {
  // id of the todo which will be passed in the route

  await Post.findByIdAndDelete(req.params.id)
  res.status(200).json('Done')
}

