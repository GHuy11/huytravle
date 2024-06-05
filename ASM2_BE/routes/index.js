var db = require('../models/database')
var express = require('express');
var router = express.Router();

/* GET home page. */
//show tour
router.get('/tour', function(req, res, next) {
  let sql =`SELECT *,date_format(ngay, '%Y-%m-%d') as ngay ,date_format(ngayKH, '%Y-%m-%d') as ngayKH 
            FROM tour ORDER BY ngay desc`;
  db.query(sql ,function (err, data) {
    if (err) res.json({"Thông Báo": `lỗi ${err}`})
    else res.json(data)
  } )
});
//show tour trong nước
router.get('/tourtrongnuoc/:sotour', function(req, res, next) {
  let sotour = req.params.sotour
  if (isNaN(req.params.sotour)==true){
    res.json({'Thông báo :':'Sai kiểu tham số'})
    return;
  }
  if (sotour <=0 ) sotour = 8;
  let sql =`SELECT *, date_format(ngay, '%Y-%m-%d') as ngay ,date_format(ngayKH, '%Y-%m-%d') as ngayKH
            FROM tour WHERE id_loaitour = 1 ORDER BY ngay desc LIMIT 0, ${sotour}`;
  db.query(sql ,function (err, data) {
    if (err) res.json({"Thông Báo": `lỗi ${err}`})
    else res.json(data)
  } )
});

//show tour hot
router.get('/tourhot/:sotour', function(req, res, next) {
  let sotour = req.params.sotour;
  if (isNaN(req.params.sotour)==true){
    res.json({'Thông báo :':'Sai kiểu tham số'})
    return;
  }
  if (sotour <=0 ) sotour = 8;
  let sql =`SELECT *,date_format(ngay, '%Y-%m-%d') as ngay , date_format(ngayKH, '%Y-%m-%d') as ngayKH
            FROM tour WHERE hot = 1 ORDER BY ngay desc LIMIT 0, ${sotour}
  `;
  db.query(sql ,function (err, data) {
    if (err) res.json({"Thông Báo": `lỗi ${err}`})
    else res.json(data)
  } )
});

//show tour sale lớn
router.get('/toursale/:sotour', function(req, res, next) {
  let sotour = req.params.sotour;
  if (isNaN(req.params.sotour)==true){
    res.json({'Thông báo :':'Sai kiểu tham số'})
    return;
  }
  if (sotour <=0 ) sotour = 8;
  let sql =`SELECT *,date_format(ngay, '%Y-%m-%d') as ngay ,date_format(ngayKH, '%Y-%m-%d') as ngayKH 
            FROM tour WHERE sale >= 15 ORDER BY ngay desc LIMIT 0, ${sotour}`;
  db.query(sql ,function (err, data) {
    if (err) res.json({"Thông Báo": `lỗi ${err}`})
    else res.json(data)
  } )
});



//show tour chi tiết
router.get('/tour/:id', function(req, res, next) {
  let id = req.params.id;
  if (isNaN(req.params.id)==true){
    res.json({'Thông báo :':'Sai kiểu tham số'})
    return;
  }
  if (id <=0 ){
    res.json({'Thông báo :':'Sai kiểu tham số'})
    return;
  };
  let sql =`
          SELECT * , date_format(ngay, '%Y-%m-%d') as ngay FROM tour WHERE id=${id};
          SELECT * , date_format(ngayKH, '%Y-%m-%d') as ngayKH FROM detail WHERE id_tour=${id}    
  `;
  db.query(sql ,function (err, data) {
    if (err) res.json({"Thông Báo": `lỗi ${err}`})
        let tour = data[0][0];
        let detail = data[1][0];
        var obj = Object.assign(tour,detail);
        res.json(obj);
  } )
});
// show menu1
router.get('/menu1',function (req,res) {
  let sql =`
  SELECT * FROM loaitour ORDER BY thu_tu asc;
  `
  db.query(sql , function (err, data) {
    if (err) res.json({'thông báo':`${err}`})
    res.json(data)
  })
})

// show menu 2
router.get('/menu2/:id',function (req,res) {
  let id = req.params.id;
  if (isNaN(req.params.id)==true){
    res.json({'Thông báo :':'Sai kiểu tham số'})
    return;
  }
  if (id <=0 ){
    res.json({'Thông báo :':'Sai kiểu tham số'})
    return;
  };
  let sql =`
  SELECT * FROM list_tour WHERE id_loaitour = ${id} ORDER BY thu_tu asc;
  `
  db.query(sql , function (err, data) {
    if (err) res.json({'thông báo':`${err}`})
    res.json(data)
  })
})

// show tour theo loai tour có giới giạn tour
router.get('/loaitour/:id/:sotour', function(req, res, next) {
  let id = req.params.id;
  if (isNaN(id)==true){
    res.json({'Thông báo :':'Sai kiểu tham số'})
    return;
  }
  if (id <=0 ){
    res.json({'Thông báo :':'Sai kiểu tham số'})
    return;
  };
  let sotour = req.params.sotour;
  if (isNaN(sotour)==true){
    res.json({'Thông báo :':'Sai kiểu tham số'})
    return;
  }
  if (sotour <=0 ){
    res.json({'Thông báo :':'Sai kiểu tham số'})
    return;
  };
  let sql =`SELECT * ,date_format(ngay, '%Y-%m-%d') as ngay ,date_format(ngayKH, '%Y-%m-%d') as ngayKH
           FROM tour WHERE id_loaitour= ${id} ORDER BY ngay desc LIMIT 0, ${sotour}`;
  db.query(sql ,function (err, data) {
    if (err) res.json({"Thông Báo": `lỗi ${err}`})
    else res.json(data)
  } )
});


module.exports = router;
