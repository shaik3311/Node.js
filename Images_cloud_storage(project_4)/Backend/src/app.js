const express = require('express');
const multer = require('multer');
const imageKit = require('./services/cloudStorage');
const postModel = require('./models/posts.model')

const app = express();

app.use(express.json());

const upload = multer({storage : multer.memoryStorage()});

app.get('/', (req, res) => {
    res.send("Hello world");
});

app.post('/post', upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "Provide the file" });
        }

        if (!req.body.title) {
            return res.status(400).json({ message: "Title must not be empty" });
        }

        // convert buffer → base64
        const base64File = req.file.buffer.toString("base64");

        const result = await imageKit.upload({
            file: base64File,
            fileName: Date.now() + "-" + req.file.originalname,
        });
        console.log(result);
        
        const newPost = await postModel.create({
            title : req.body.title,
            url : result.url
        });
        res.json({
            message: "Post Uploaded",
            newPost : newPost
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
});

app.get('/posts',async(req,res)=>{
    const posts = await postModel.find();

    res.status(200).json({
        message:"Posts Fetched successfully",
        posts : posts
    });
    
})

module.exports = app;