// Author: Tran Quang Huy 20204757

let avatar;

loadData(ttsv);

$("#btnEdit").click(edit);

let Edit = false;

function edit() {
  $(".Content-Tittle").text("CHINH SUA THONG TIN SINH VIEN");

  while (Edit == false) {
    Edit = true;
    let buttonGroup =
      "<div>THÔNG TIN SINH VIÊN &nbsp;</div>" +
      "<div>" +
      '<button id="btnConfirm"><i class="fa-solid fa-square-check"></i></button>' +
      '<button id="btnReset"><i class="fa-solid fa-rotate-right"></i></button>' +
      '<button id="btnCancel"><i class="fa-solid fa-rectangle-xmark"></i></button>' +
      "</div>";
    $("#Student-Tittle_edit").empty();
    $("#Student-Tittle_edit").append(buttonGroup);

    let upload =
      '<input type="file" id="img" name="img" accept="image/*" onchange="chooseFile(this)">';
    $(".Student_img").append(upload);

    let name =
      '<div class="Info-Unit_icon"><i class="fa-solid fa-file-signature"></i></div>' +
      '<input type="text" class="Input-default" id="name" placeholder="Họ và tên">';
    $("#Info_name").empty();
    $("#Info_name").append(name);
    $("#name").val(ttsv._name);

    let year =
      '<div class="Info-Unit_icon"><i class="fa-solid fa-calendar-days"></i></div>' +
      '<input type="number" class="Input-default" id="year" placeholder="Năm vào trường">';
    $("#Info_year").empty();
    $("#Info_year").append(year);
    $("#year").val(ttsv._year);

    let level =
      '<div class="Info-Unit_icon"><i class="fa-solid fa-graduation-cap"></i></div>' +
      '<select id="level" style="width:220px;>' +
      '<option value="0">Bậc đào tạo</option>' +
      '<option value="1">Đại học đại trà</option>' +
      '<option value="2">Chương trình chất lượng cao</option>' +
      '<option value="3">Khác</option>' +
      "</select>";
    $("#Info_level").empty();
    $("#Info_level").append(level);
    $("#level").val(ttsv.getLevelVal());

    let major =
      '<div class="Info-Unit_icon"><i class="fa-solid fa-graduation-cap"></i></div>' +
      '<select id="major" style="width:220px;>' +
      '<option value="0">Chương trình đào tạo</option>' +
      '<option value="1">Khoa học máy tính 2020</option>' +
      '<option value="2">Kỹ thuật máy tính 2020</option>' +
      '<option value="3">Khoa/Trung tâm 2020</option>' +
      "</select>";
    $("#Info_major").empty();
    $("#Info_major").append(major);
    $("#major").val(ttsv.getMajorVal());

    let school =
      '<div class="Info-Unit_icon"><i class="fa-solid fa-school"></i></div>' +
      '<select id="school" style="width:200px;">' +
      '<option value="0">Khoa/Viện quản lý</option>' +
      '<option value="1">Trường Công nghệ Thông tin va Truyền thông</option>' +
      '<option value="2">Khác</option>' +
      "</select>";
    $("#Info_school").empty();
    $("#Info_school").append(school);
    $("school").val(ttsv.getSchoolVal());

    let status =
      '<div class="Info-Unit_icon"><i class="fa-solid fa-school"></i></div>' +
      '<select id="status" style="width:200px;">' +
      '<option value="0">Tình trạng học tập</option>' +
      '<option value="1">Học</option>' +
      '<option value="2">Đã ra trường</option>' +
      '<option value="3">Khác</option>' +
      "</select>";
    $("#Info_status").empty();
    $("#Info_status").append(status);
    $("#status").val(ttsv.getStatusVal());

    let gender =
      '<div class="Info-Unit_icon"><i class="fa-solid fa-file-signature"></i></div>' +
      '<select id="gender" style="width:200px;">' +
      '<option value="0">Giới tính</option>' +
      '<option value="1">Nam</option>' +
      '<option value="2">Nữ</option>' +
      '<option value="3">Khác</option>' +
      "</select>";
    $("#Info_gender").empty();
    $("#Info_gender").append(gender);
    $("#gender").val(ttsv.getGenderVal());

    let class0 =
      '<div class="Info-Unit_icon"><i class="fa-solid fa-graduation-cap"></i></div>' +
      '<input type="text" class="Input-default" id="class" placeholder="Lớp">';
    $("#Info_class").empty();
    $("#Info_class").append(class0);
    $("#class").val(ttsv._class);

    let course =
      '<div class="Info-Unit_icon"><i class="fa-solid fa-graduation-cap"></i></div>' +
      '<select id="course" style="width:200px;">' +
      '<option value="0">Khóa</option>';
    for (let i = 62; i <= 67; i++) {
      course += "<option value=" + i + ">" + i + "</option>";
    }
    course += "</select>";
    $("#Info_course").empty();
    $("#Info_course").append(course);
    $("#course").val(ttsv.getCourse());

    let mail =
      '<div class="Info-Unit_icon" ><i class="fa-solid fa-envelope"></i></div>' +
      '<input type="email" class="Input-default" id="mail" placeholder="Email"></input>';
    $("#Info_mail").empty();
    $("#Info_mail").append(mail);
    $("#mail").val(ttsv._mail);

    /*
    Event for Button
    */

    $("#btnReset").click(reset);
    $("#btnCancel").click(function () {
      location.href = "/layouts/StudentInformation.html";
      loadData(ttsv);
    });
    $("#btnConfirm").click(confirm);
  }

  function confirm() {
    if (window.confirm("Xac nhan chinh sua thong tin sinh vien??")) {
      var new_name = $("#name").val();
      var new_year = $("#year").val();
      var new_level = $("#level option:selected").text();
      var new_major = $("#major option:selected").text();
      var new_school = $("#school option:selected").text();
      var new_status = $("#status option:selected").text();
      var new_gender = $("#gender option:selected").text();
      var new_class = $("#class").val();
      var new_course = $("#course option:selected").text();
      var new_mail = $("#mail").val();
      new_ttsv = new TTSV(
        new_name,
        new_year,
        new_level,
        new_major,
        new_school,
        new_status,
        new_gender,
        new_class,
        new_course,
        new_mail
      );

      /*
      Recover
      */
      let tittle =
        '<div>THÔNG TIN SINH VIÊN &nbsp;<button id="btnEdit"><i class="fa-solid fa-pen-to-square"></i></button></div>';
      $("#Student-Tittle_edit").empty();
      $("#Student-Tittle_edit").append(tittle);

      let img =
        '<img class="Img" src="' +
        avatar +
        '"><div class="Info-Content"> MSSV:20204757</div>';
      if ($(".Img").attr("src") == "../assets/img/avt.jpg") {
        img =
          '<img class="Img" src="../assets/img/avt.jpg"><div class="Info-Content"> MSSV:20204757</div>';
      }
      $(".Student_img").empty();
      $(".Student_img").append(img);

      let name =
        '<div class="Info-Unit">Ho va ten :</div>' +
        '<div id="_name" class="Info-Content"></div>';
      $("#Info_name").empty();
      $("#Info_name").append(name);

      let year =
        '<div class="Info-Unit">Nam vao truong :</div>' +
        '<div id="_year" class="Info-Content"></div>';
      $("#Info_year").empty();
      $("#Info_year").append(year);

      let level =
        '<div class="Info-Unit">Bac dao tao :</div>' +
        '<div id="_level" class="Info-Content"></div>';
      $("#Info_level").empty();
      $("#Info_level").append(level);

      let major =
        '<div class="Info-Unit">Chuong trinh :</div>' +
        '<div id="_major" class="Info-Content"></div>';
      $("#Info_major").empty();
      $("#Info_major").append(major);

      let school =
        '<div class="Info-Unit">Khoa/Vien quan ly :</div>' +
        '<div id="_school" class="Info-Content"></div>';
      $("#Info_school").empty();
      $("#Info_school").append(school);

      let status =
        '<div class="Info-Unit">Tinh trang hoc tap :</div>' +
        '<div id="_status" class="Info-Content"></div>';
      $("#Info_status").empty();
      $("#Info_status").append(status);

      let gender =
        '<div class="Info-Unit">Gioi tinh :</div>' +
        '<div id="_gender" class="Info-Content"></div>';
      $("#Info_gender").empty();
      $("#Info_gender").append(gender);
      $("#gender").val(ttsv.getGenderVal());

      let class0 =
        '<div class="Info-Unit">Lop :</div>' +
        '<div id="_class" class="Info-Content"></div>';
      $("#Info_class").empty();
      $("#Info_class").append(class0);

      let course =
        '<div class="Info-Unit">Khoa hoc :</div>' +
        '<div id="_course" class="Info-Content"></div>';
      $("#Info_course").empty();
      $("#Info_course").append(course);

      let mail =
        '<div class="Info-Unit">Email :</div>' +
        '<div id="_mail" class="Info-Content"></div>';
      $("#Info_mail").empty();
      $("#Info_mail").append(mail);

      new_ttsv.log();
      loadData(new_ttsv);

      Edit = false;
      $("#btnEdit").click(edit);
    }
  }

  function reset() {
    $(".Img").attr("src", "../assets/img/avt.jpg");
    $("#name").val(ttsv._name);
    $("#year").val(ttsv._year);
    $("#level").val(ttsv.getLevelVal());
    $("#major").val(ttsv.getMajorVal());
    $("#school").val(ttsv.getSchoolVal());
    $("#status").val(ttsv.getStatusVal());
    $("#gender").val(ttsv.getGenderVal());
    $("#class").val(ttsv._class);
    $("#course").val(ttsv.getCourse());
    $("#mail").val(ttsv._mail);
    ttsv.log();
  }
}

function loadData(ttsv) {
  $("#_name").text(ttsv._name);
  $("#_year").text(ttsv._year);
  $("#_level").text(ttsv._level);
  $("#_major").text(ttsv._major);
  $("#_school").text(ttsv._school);
  $("#_status").text(ttsv._status);
  $("#_gender").text(ttsv._gender);
  $("#_class").text(ttsv._class);
  $("#_course").text(ttsv._course);
  $("#_mail").text(ttsv._mail);
  ttsv.log();
}

function chooseFile(fileInput) {
  if (fileInput.files && fileInput.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      avatar = e.target.result;
      $(".Img").attr("src", avatar);
    };
    reader.readAsDataURL(fileInput.files[0]);
  }
}
