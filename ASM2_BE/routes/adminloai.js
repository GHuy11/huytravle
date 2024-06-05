var db = require('../models/database')
var express = require('express');
var router = express.Router();

/* GET users listing. */
//show loai 
router.get('/', function(req, res, next) {
    let sql = `SELECT * FROM list_tour `;
    db.query(sql, function (err ,data) {
        if (err) res.json({"thông báo":`${err}`});
        else res.json(data);
    })
});

//show loai theo id
router.get('/:id', function(req, res, next) {
    let id = req.params.id;
    if (isNaN(id)==true) {
        res.json({'thông báo':`Lỗi ${err}`})
        return;
    }
    let sql =`
        SELECT * FROM list_tour WHERE id = ${id};
    `;
    db.query(sql , function (err, data) {
        if (err) res.json({'thông báo':`Lỗi ${err}`})
        res.json(data)
    })
});


//thêm tour
router.post('/add', function (req,res) {
    let data = req.body;
    let sql = `INSERT INTO list_tour SET ?`;
    db.query(sql, data,function (err, d) {
        if (err) res.json({'thông báo':`Lỗi ${err}`})
        else res.json({"thông báo": ` đã thêm thành công `})
    })
})

//cập nhập tour
router.put('/:id',function (req,res) {
    let id = req.params.id;
    if (isNaN(id)==true) {
        res.json({'thông báo':`Lỗi ${err}`})
        return;
    }
    let data = req.body;
    let sql=`UPDATE list_tour SET ? WHERE id = ?`;
    db.query(sql,[data,id] ,function (err,d) {
        if (err) res.json({'thông báo':`Lỗi ${err}`})
        else res.json({"thông báo": ` đã cập nhật thành công `})
    })
})

//xóa tour
router.delete('/:id',function (req ,res) {
    let id = req.params.id;
    if (isNaN(id)==true) {
        res.json({'thông báo':`Lỗi ${err}`})
        return;
    }
    let sql=`DELETE FROM list_tour WHERE id = ?`;
    db.query(sql,id ,function (err,d) {
        if (err) res.json({'thông báo':`Lỗi ${err}`})
        else res.json({"thông báo": ` đã xóa thành công `})
    })
})
module.exports = router;