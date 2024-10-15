const express = require('express');

const router = express.Router();
const path = require('path')
const usercontrller = require('../controller/usercontroller');
const { compareSync } = require('bcrypt');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontendsrc/webapp/views/login.html'));
})

router.get('/phonesms/:id', (req, res) => {
    console.log(req.params);
    res.render(path.join(__dirname, '../../frontendsrc/webapp/views/phonesms.ejs'), {
        id: req.params.id
    })
});


router.post('/autho', usercontrller.smsautho);
router.get('/authcheck', usercontrller.authocheck);
router.get('/timeoutautho', usercontrller.timeoutautho);
router.post('/duplicidcheck', usercontrller.dupuliccheck);
router.post('/insertmembership', usercontrller.insertmembership);


router.get('/myinfo', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontendsrc/webapp/views/myinfochange.html'));
});
router.post('/presentpwdcheck', usercontrller.presentpwdcheck);
router.post('/changepwdcheck', usercontrller.changepwdcheck);




router.post('/login', usercontrller.logincheck);
router.get('/logout', usercontrller.logoutcheck);

router.get('/onedayclass', (req, res) => {
    let sessioncheck = usercontrller.isesssionexist;

    if (sessioncheck) {
        res.render(path.join(__dirname, '../../frontendsrc/webapp/views/onedayclass.ejs'), {
            userid: req.session.userid,
            user_where: req.session.usercheck
        })
    }
    else {
        res.render(path.join(__dirname, '../../frontendsrc/webapp/views/onedayclass.ejs'), {
            userid: null
        })

    }


})





// router.get('/firstgetboad/:page', async (req,res)=>{ 

//     let sessioncheck=usercontrller.isesssionexist;

//   let pagelist=   await usercontrller.firstgetboad(req);
//   console.log("라우테어서의 출력")
//   console.log(typeof pagelist)

//     if(sessioncheck){

//         res.render(path.join(__dirname, '../../frontendsrc/webapp/views/getboardlist.ejs'),{
//             userid:req.session.userid,
//             user_where:req.session.usercheck,
//             pagelist:pagelist
//         })      
//     }
//     else{
//         res.render(path.join(__dirname, '../../frontendsrc/webapp/views/getboardlist.ejs'),{
//             userid:null,
//             pagelist:pagelist
//         })      

//     }

// }
// )










router.get('/getboad/:forpaging', async (req, res) => {

    let data = await usercontrller.getboad(req);
//  console.log(data.pagelist)
    res.render(path.join(__dirname, '../../frontendsrc/webapp/views/getboardlist.ejs'), {
        userid: req.session.userid,
        user_where: req.session.usercheck,
        pagelist: data.pagelist,
        countingbtn: data.countingbtn,
        forpaging: 10,
        forbackpaging: 0
    })


}
)
//아작스에선 render 함수를 못쓰니 결국 하나 이상은 만들어야함 ㅠ
router.get('/ajaxgetboad/:forpaging/:forbackpaging/:startbtnnum', async (req, res) => {
     console.log("startbtnnum 값 확인")
    
    let data = await usercontrller.getboad(req);
console.log("돌려받은 배열버튼")
console.log(data.countingbtn)
    res.send({
        pagelist: data.pagelist,
        countingbtn: data.countingbtn,
        forpaging: 10+parseInt(req.params.forpaging),
        forbackpaging: 10+parseInt(req.params.forbackpaging),
        startbtnnum : parseInt(req.params.startbtnnum)+5        
    })


}
)



router.get('/backajaxgetboad/:forpaging/:forbackpaging/:lastbtnnum', async (req, res) => {
    console.log("벡아작스매핑 확인")
    console.log(req.params.lastbtnnum)
    let data = await usercontrller.backgetboad(req)

    res.send({
        pagelist: data.pagelist,
        countingbtn: data.countingbtn,
        forpaging: parseInt(req.params.forpaging)-10,
        forbackpaging: parseInt(req.params.forbackpaging)-10,       
        lastbtnnum : parseInt(req.params.lastbtnnum)-9
    })


}
)









module.exports = router;

