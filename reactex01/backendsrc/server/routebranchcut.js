const express = require('express');
const router = express.Router();
const path = require('path')
// ~~/user, get요청 일 때 응답 처리
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontendsrc/webapp/views/test2.html'))
})

// ~~/user/아이디값, get요청 일 때 응답 처리
router.get('/:id', (req, res) => {
    console.log("/user/아이디값 일치할시 응답처리")
})

// ~~/user/info, post요청 일 때 응답 처리 
router.post('/go', (req, res) => {
	console.log("/user/info 일치할시 응답처리")
})

module.exports = router;
