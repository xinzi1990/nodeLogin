var dbutil = require('./dbutil');

function queryAllStudent(success){

    var querySql = "select * from student;";
    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql, function (error, result) {
        if(error == null){
            console.log(result);
            success(result);
        }else{
            console.log(error);
        }
    })
    connection.end();
};

function queryStudentByClass(classNum, age) {
    var querySql = "select * from student where class = ? and age = ?;";//查询带参数
    var connection = dbutil.createConnection();
    var queryParams = [classNum, age];

    connection.connect();
    connection.query(querySql, queryParams, function (error, result) {
        if(error == null){
            console.log(result);
        }else{
            console.log(error);
        }
    })
    connection.end();
}

function queryStudentByStuNum(stuNum, success){
    var querySql = "select * from student where stu_num = ?;";//查询带参数
    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql, stuNum, function (error, result) {
        if(error == null){
            console.log(result);
            success(result);
        }else{
            console.log(error);
        }
    })
    connection.end();
}
module.exports = {"queryAllStudent":queryAllStudent,"queryStudentByClass":queryStudentByClass,"queryStudentByStuNum":queryStudentByStuNum};
