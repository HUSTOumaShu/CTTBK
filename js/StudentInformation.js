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
  getLevelVal() {
    if (this._level == "Bậc đào tạo") return "0";
    if (this._level == "Đại học đại trà") return "1";
    if (this._level == "Chương trình chất lượng cao") return "2";
    if (this._level == "Khác") return "3";
  }
  getMajor() {
    return this._major;
  }
  getMajorVal() {
    if (this._major == "Chương trình đào tạo") return "0";
    if (this._major == "Khoa học máy tính 2020") return "1";
    if (this._major == "Kỹ thuật máy tính 2020") return "2";
    if (this._major == "Khoa/Trung tâm 2020") return "3";
  }
  getSchool() {
    return this._school;
  }
  getSchoolVal() {
    if (this._school == "Khoa/Viện quản lý") return "0";
    if (this._school == "Trường Công nghệ Thông tin va Truyền thông")
      return "1";
    if (this._school == "Khác") return "2";
  }
  getStatus() {
    return this._status;
  }
  getStatusVal() {
    if (this._status == "Tình trạng học tập") return "0";
    if (this._status == "Học") return "1";
    if (this._status == "Đã ra trường") return "2";
    if (this._status == "Khác") return "3";
  }
  getGender() {
    return this._gender;
  }
  getGenderVal() {
    if (this._gender == "Giới tính") return "0";
    if (this._gender == "Nam") return "1";
    if (this._gender == "Nữ") return "2";
    if (this._gender == "Khác") return "3";
  }
  getClass() {
    return this._class;
  }
  getCourse() {
    return this._course;
  }
  getCourseVal() {}
  getEmail() {
    return this._mail;
  }
}
var ttsv = new TTSV(
  "Tran Quang Huy",
  2020,
  "Đại học đại trà",
  "Kỹ thuật máy tính 2020",
  "Trường Công nghệ Thông tin va Truyền thông",
  "Học",
  "Nam",
  "Ky thuat may tinh 02 - K65",
  65,
  "huy.tq204757@sis.hust.edu.vn"
);
