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


router.get('/firstgetboad/:page', async (req, res) => {

    let data = await usercontrller.firstgetboad(req);

    res.render(path.join(__dirname, '../../frontendsrc/webapp/views/getboardlist.ejs'), {
        userid: req.session.userid,
        user_where: req.session.usercheck,
        pagelist: data.pagelist,
        countingbtn: data.countingbtn
    })


}
)



router.post('/getboardlist', async (req, res) => {

    let pagelist = await usercontrller.getboardlist(req);
    res.send({
        pagelist: pagelist
    })



}
)


router.post('/getboardlistnextpage', async (req, res) => {

    let data = await usercontrller.nextpageboard(req);
  
    if (data.islastpage === "islastpage") {
        res.send('islastpage');
    } else {
      
        let startbtn = parseInt(req.body.data) + 1
        data.countingbtn[0] = startbtn
        for(let i=1; i<data.countingbtn.length; i++){
            data.countingbtn[i] = data.countingbtn[i-1]+1
            // console.log(data.countingbtn)
        }   
        

     
        res.send(
            {
                countingbtn: data.countingbtn,
                pagelist: data.pagelist
               
            }
        )
    }
}
)


router.post('/getboardlistbackpage', async (req, res) => {
   
    if(parseInt(req.body.data)===0){
        res.send("firstpage")
    } else {
        let forpagingbtn= await usercontrller.backpageboard(req);
        res.send({
            pagelist:forpagingbtn.data,
            countingbtn: forpagingbtn.countingbtn,
            countinarray: forpagingbtn.countingbtnarray,
          })
    }



 
}

)









module.exports = router;

