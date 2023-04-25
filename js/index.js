// Author: Tran Quang Huy 20204757

loadData(ttsv);

$("#btnEdit").click(edit);

let Edit = false;

function edit() {
  alert("Xac nhan chinh sua thong tin sinh vien?");
  $(".Content-Tittle").text("CHINH SUA THONG TIN SINH VIEN");

  if (Edit == false) {
    Edit = true;
    let buttonGroup =
      "<div>" +
      '<button id="btnConfirm"><i class="fa-solid fa-square-check"></i></button>' +
      '<button id="btnReset"><i class="fa-solid fa-rotate-right"></i></button>' +
      '<button id="btnCancel"><i class="fa-solid fa-rectangle-xmark"></i></button>' +
      "</div>";
    $("#Student-Tittle_edit").append(buttonGroup);

    let name =
      '<div class="Info-Unit_icon"><i class="fa-solid fa-file-signature"></i></div>' +
      '<input type="text" class="Input-default" id="name" placeholder="Họ và tên">';
    $("#Info_name").empty();
    $("#Info_name").append(name);

    let year =
      '<div class="Info-Unit_icon"><i class="fa-solid fa-calendar-days"></i></div>' +
      '<input type="number" class="Input-default" id="year" placeholder="Năm vào trường">';
    $("#Info_year").empty();
    $("#Info_year").append(year);

    let level =
      '<div class="Info-Unit_icon"><i class="fa-solid fa-graduation-cap"></i></div>' +
      '<div class="custom-select" style="width:200px;">' +
      '<select id="level">' +
      '<option value="0">Bậc đào tạo</option>' +
      '<option value="1">Đại học đại trà</option>' +
      '<option value="2">Chương trình chất lượng cao</option>' +
      '<option value="3">Khác</option>' +
      "</select>" +
      "</div>";
    $("#Info_level").empty();
    $("#Info_level").append(level);

    let major =
      '<div class="Info-Unit_icon"><i class="fa-solid fa-graduation-cap"></i></div>' +
      '<div class="custom-select" style="width:200px;">' +
      '<select id="major">' +
      '<option value="0">Chương trình đào tạo</option>' +
      '<option value="1">Khoa học máy tính 2020</option>' +
      '<option value="2">Kỹ thuật máy tính 2020</option>' +
      '<option value="3">Khoa/Trung tâm 2020</option>' +
      "</select>" +
      "</div>";
    $("#Info_major").empty();
    $("#Info_major").append(major);

    let school =
      '<div class="Info-Unit_icon"><i class="fa-solid fa-school"></i></div>' +
      '<div class="custom-select" style="width:200px;">' +
      '<select id="school">' +
      '<option value="0">Khoa/Viện quản lý</option>' +
      '<option value="1">Trường Công nghệ Thông tin va Truyền thông</option>' +
      '<option value="2">Khác</option>' +
      "</select>" +
      "</div>";
    $("#Info_school").empty();
    $("#Info_school").append(school);

    let status =
      '<div class="Info-Unit_icon"><i class="fa-solid fa-school"></i></div>' +
      '<div class="custom-select" style="width:200px;">' +
      '<select id="status">' +
      '<option value="0">Tình trạng học tập</option>' +
      '<option value="1">Học</option>' +
      '<option value="2">Đã ra trường</option>' +
      '<option value="3">Khác</option>' +
      "</select>" +
      "</div>";
    $("#Info_status").empty();
    $("#Info_status").append(status);

    let gender =
      '<div class="Info-Unit_icon"><i class="fa-solid fa-file-signature"></i></div>' +
      '<div class="custom-select" style="width:200px;">' +
      '<select id="gender">' +
      '<option value="0">Giới tính</option>' +
      '<option value="1">Nam</option>' +
      '<option value="2">Nữ</option>' +
      '<option value="3">Khác</option>' +
      "</select>" +
      "</div>";
    $("#Info_gender").empty();
    $("#Info_gender").append(gender);

    let class0 =
      '<div class="Info-Unit_icon"><i class="fa-solid fa-graduation-cap"></i></div>' +
      '<input type="text" class="Input-default" id="class" placeholder="Lớp">';
    $("#Info_class").empty();
    $("#Info_class").append(class0);

    let course =
      '<div class="Info-Unit_icon"><i class="fa-solid fa-graduation-cap"></i></div>' +
      '<div class="custom-select" style="width:200px;">' +
      '<select id="course">' +
      '<option value="0">Khóa</option>' +
      '<option value="1">62</option>' +
      '<option value="2">63</option>' +
      '<option value="3">64</option>' +
      '<option value="1">65</option>' +
      '<option value="2">66</option>' +
      '<option value="3">67</option>' +
      "</select>" +
      "</div>";
    $("#Info_course").empty();
    $("#Info_course").append(course);

    let mail =
      '<div class="Info-Unit_icon" ><i class="fa-solid fa-envelope"></i></div>' +
      '<input type="email" class="Input-default" id="mail" placeholder="Email"></input>';
    $("#Info_mail").empty();
    $("#Info_mail").append(mail);

    $("#btnReset").click(reset);
    $("#btnCancel").click(function () {
      location.href = "/layouts/StudentInformation.html";
      loadData(ttsv);
    });
    $("#btnConfirm").click(confirm);
  }

  // function confirm() {

  // } -- fixed

  // function reset() {} -- fixed
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
