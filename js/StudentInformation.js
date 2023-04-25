class TTSV {
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
  log() {
    console.log(
      "Name: " +
        this._name +
        "\n" +
        "Year: " +
        this._year +
        "\n" +
        "Level: " +
        this._level +
        "\n" +
        "Major: " +
        this._major +
        "\n" +
        "School: " +
        this._school +
        "\n" +
        "Status: " +
        this._status +
        "\n" +
        "Gender: " +
        this._gender +
        "\n" +
        "Class: " +
        this._class +
        "\n" +
        "Course: " +
        this._course +
        "\n" +
        "Email: " +
        this._mail +
        "\n"
    );
  }
  getName() {
    return this.name;
  }
  getYear() {
    return this.year;
  }
  getLevel() {
    return this._level;
  }
  getMajor() {
    return this._major;
  }
  getSchool() {
    return this._school;
  }
  getStatus() {
    return this._status;
  }
  getGender() {
    return this._gender;
  }
  getClass() {
    return this._class;
  }
  getCourse() {
    return this._course;
  }
  getEmail() {
    return this._mail;
  }
}
var ttsv = new TTSV(
  "Tran Quang Huy",
  2020,
  "Dai hoc dai tra",
  "Ky thuat may tinh 2020",
  "Truong Cong nghe thong tin va Truyen thong",
  "Hoc",
  "Nam",
  "Ky thuat may tinh 02 - K65",
  65,
  "huy.tq204757@sis.hust.edu.vn"
);
