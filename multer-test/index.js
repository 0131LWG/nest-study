const express = require("express")
const multer = require("multer")
const cors = require("cors")
const fs = require("fs")
const path = require("path")

const app = express()
app.use(cors())

const storage = multer.diskStorage({
  destination: function (req, filer, cb) {
    try {
      fs.mkdirSync(path.join(__dirname, "my-uploads"))
    } catch (e) {}
    cb(null, path.join(process.cwd(), "my-uploads"))
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9) + "-" + file.originalname
    cb(null, file.fieldname + "-" + uniqueSuffix)
  }
})

const upload = multer({ storage })

/**
 * @Desc 单个上传
 */
app.post("/aaa", upload.single("aaa"), function (req, res, next) {
  console.log("req.file", req.file)
  console.log("req.body", req.body)
})

/**
 * @Desc 多个上传
 */
app.post(
  "/bbb",
  upload.array("bbb", 3),
  function (req, res, next) {
    console.log("req.files", req.files)
    console.log("req.body", req.body)
  },
  function (err, req, res, next) {
    console.log("err-----", err)
  }
)

/**
 * @Desc 多个上传并且多字段
 */
app.post(
  "/ccc",
  upload.fields([
    { name: "aaa", maxCount: 2 },
    { name: "bbb", maxCount: 3 }
  ]),
  function (req, res, next) {
    console.log("req.files", req.files)
    console.log("req.body", req.body)
  },
  function (err, req, res, next) {
    console.log("err-----", err)
  }
)

/**
 * @Desc 多个上传并且不确定哪些字段要上传
 */
app.post("/ddd", upload.any(), function (req, res, next) {
  console.log("req.files", req.files)
  console.log("req.body", req.body)
})

app.listen(3333)
