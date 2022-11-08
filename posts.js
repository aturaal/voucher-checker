const express = require("express");
const Post = require("./voucher.schema");
const router = express.Router();

router.post("/", function (req, res) {
  const post = new Post({
    voucher_Code: req.body.voucher_Code,
    redeemed_By: req.body.redeemed_By,
  });

  post.save();
  res.json(post);
});

router.get("/:code", async (req, res) => {
  const voucherCode = req.params.code;
  console.log(`getting post of voucherCode: ${voucherCode}`);
  const post = await Post.findOne({
    voucher_Code: voucherCode,
  });
  res.json(post);
});

module.exports = router;
