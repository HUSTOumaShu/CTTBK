// Author: Tran Quang Huy 20204757

// Classes
class Student {
  constructor(
    _name,
    _year,
    _level,
    _major,
    _school,
    _status,
    _gender,
    _class,
    _course,
    _mail
  ) {
    this._name = _name;
    this._year = _year;
    this._level = _level;
    this._major = _major;
    this._school = _school;
    this._status = _status;
    this._gender = _gender;
    this._class = _class;
    this._course = _course;
    this._mail = _mail;
  }
}

// Edit information of student
$("#btnEdit").click(edit_StudentInformation);
$("#btnUpdateInfo").click(edit_StudentInformation);
$("#btnConfirm").click(confirm_edit_StudentInformation);

// Go to information page of student
$("#btnStudentInfo").click(studentInformation);
$("#btnCancel").click(studentInformation);
$("#btnDashboard").click(studentInformation);
$("#Logo_ctt").click(studentInformation);

function studentInformation() {
  location.href = "/layouts/StudentInformation.html";
}

// Edit information of student
function edit_StudentInformation() {
  alert("Xac nhan chinh sua thong tin ca nhan?");
  location.href = "/layouts/Edit_StudentInformation.html";
  $("#name").text("Tran Quang Huy");
  $("#year").text(2020);
}

function confirm_edit_StudentInformation() {
  var _name = $("#name").val();
  var _year = $("#year").val();
  var _level = $("#level option:selected").text();
  var _major = $("#major option:selected").text();
  var _school = $("#school option:selected").text();
  var _status = $("#status option:selected").text();
  var _gender = $("#gender option:selected").text();
  var _class = $("#class").val();
  var _course = $("#course option:selected").text();
  var _mail = $("#mail").val();
  var student = new Student(
    _name,
    _year,
    _level,
    _major,
    _school,
    _status,
    _gender,
    _class,
    _course,
    _mail
  );
  console.log(student);
  alert("Cap nhat thong tin thanh cong");
  location.href = "/layouts/StudentInformation.html";
  $("_name").text("alb");
}
