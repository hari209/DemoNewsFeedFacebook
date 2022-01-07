const router = require('koa-router')();

const {
   createPost, getPost, getPostById, deletePost, updatePost
} = require("../../../api/post.api");



router.get("/", async (ctx, next) => {
   ctx.response.status = 200;
   ctx.body = await getPost();
});

router.get("/:id", async (ctx) => {
   const id = ctx.params.id;
   ctx.body = await getPostById(id);
});

router.post("/", async (ctx, next) => {
   console.log(ctx.request.body);
   let post = ctx.request.body;
   post = await createPost(post);
   ctx.response.status = 200;
   ctx.body = post;
});

router.delete("/:id", async (ctx) => {
   const id = ctx.params.id;
   ctx.body = await deletePost(id);
});

router.put("/:id", async (ctx) => {
   const id = ctx.params.id;
   let post = ctx.request.body;
   post = await updatePost(id, post);
   ctx.response.status = 200;
   ctx.body = post;
});
module.exports = router.routes()