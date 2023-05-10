/*
 *** DOM process
 *** Author: Tran Quang Huy 20204757
 */

/**
 * Add Event Listener
 */
// Insert Group Item
$(".addGroup").click(function () {
  addGroupFn(this);
});

// Insert Item
$(".addItem").click(function () {
  addItemFn(this);
});

// double click on item to change the name of item
$(".Info_Tittle").dblclick(function () {
  changeItemName(this);
});

// double click on tittle to change the name of group item
$(".Tittle_Group").dblclick(function () {
  changeGroupNameFn(this);
});

// delete Item
$(".Button-delete").click(function () {
  deleteItemFn(this);
});

// delete Group
$(".Button-delete_Group").click(function () {
  deleteGroupFn(this);
});

/**
 *
 * Method with Item
 */
// Change Item's name
function changeItemName(obj) {
  let changeItem = "#" + obj.id;
  let tittleContent = $(changeItem).text();
  let tittleInput =
    '<input type="text" class="Input-default" id="' +
    obj.id +
    '" value="' +
    tittleContent +
    '">  ';
  $(changeItem).replaceWith(tittleInput);
  tittleContent = null;
  $(document).on("keypress", "input", function (e) {
    if (e.which == 13) {
      tittleContent = $(changeItem).val();
      let tittleUnit =
        '<div class="Info_Tittle" id="' +
        obj.id +
        '">' +
        tittleContent +
        ": </div>";
      $(changeItem).replaceWith(tittleUnit);
      $(changeItem).dblclick(function () {
        changeItemName(this);
      });
      changeItem = null;
      tittleContent = null;
      tittleInput = null;
      tittleUnit = null;
    }
  });
}

// Insert Item
function addItemFn(obj) {
  let addItem = "#" + obj.id;
  let numItem = $(addItem).parent().parent().next().children().length;
  let idItem = addItem[8] + "_" + (numItem + 1);
  let item =
    '<div class="Info">' +
    '<div class="Info_Tittle" id="tittle' +
    idItem +
    '">Item Info Name: </div>' +
    '<input type="text" class="Input-default" id="input' +
    idItem +
    '" placeholder="" style="margin-left: 50px;">' +
    '<button class="Button-delete" id="delete' +
    idItem +
    '"><i class="fa-solid fa-trash"></i></button>' +
    "</div>";
  $(addItem).parent().parent().next().append(item);
  $("#tittle" + idItem).dblclick(function () {
    changeItemName(this);
  });
  $("#delete" + idItem).click(function () {
    deleteItemFn(this);
  });
  addItem = null;
  numItem = null;
  idItem = null;
  item = null;
}

// Delete item
function deleteItemFn(obj) {
  let window = prompt(
    "Xac nhan xoa muc thong tin. Nhan OK de xoa!!",
    "Tran Quang Huy 20204757"
  );
  if (window != null) {
    let deleteItem = "#" + obj.id;
    $(deleteItem).parent().remove();
  }
}

/**
 *
 * Method with Group Item
 */

// Change group's name
function changeGroupNameFn(obj) {
  let changeGroupName = "#" + obj.id;
  if (obj.id[11] == "1") {
    alert("Khong the chinh sua tieu de nay!!");
  } else {
    let groupContent = $(changeGroupName).text();
    let groupInput =
      '<input type="text" class="Input-default" id="' +
      obj.id +
      '" value="' +
      groupContent +
      '">';
    $(changeGroupName).replaceWith(groupInput);
    $(document).on("keypress", "input", function (e) {
      if (e.which == 13) {
        groupContent = $(changeGroupName).val();
        let tittleGroup =
          '<div class="Tittle_Group" id="' +
          obj.id +
          '">' +
          groupContent +
          '<button id="deleteGroup' +
          obj.id[11] +
          '" class="Button-delete_Group"><i class="fa-solid fa-trash-can"></i></button></div>';
        $(changeGroupName).replaceWith(tittleGroup);
        $(changeGroupName).dblclick(function () {
          changeGroupNameFn(this);
        });
        changeGroupName = null;
        groupContent = null;
        groupInput = null;
        tittleGroup = null;
      }
    });
  }
}

// Add Item group
function addGroupFn(obj) {
  let idGroup = $(".Student_Info").length + 1;
  console.log(idGroup);
  let addGroup = "#" + obj.id;
  let group =
    '<div id="Student-Tittle' +
    idGroup +
    '" class="Tittle Student-Tittle"></div>';
  let group_tittle =
    '<div class="Tittle_Group" id="groupTittle' +
    idGroup +
    '">Group Item_20204757 <button id="deleteGroup' +
    idGroup +
    '" class="Button-delete_Group"><i class="fa-solid fa-trash-can"></i></button></div>';
  let group_button =
    '<div style="display:flex; gap: 8px;">' +
    ' <button class="DOM_Button addItem" id="addItem' +
    idGroup +
    '">' +
    '<i class="fa-solid fa-square-plus"></i>' +
    "Add Info Item" +
    "</button>" +
    '<button class="DOM_Button addGroup" id="addGroup' +
    idGroup +
    '"">' +
    '<i class="fa-solid fa-cart-plus"></i>' +
    "Add Group Item" +
    "</button>" +
    "</div>";

  let group_items =
    '<div id="Student_Info' + idGroup + '" class="Student_Info"></div>';

  $(addGroup).parent().parent().parent().append(group);
  $("#Student-Tittle" + idGroup).append(group_tittle);
  $("#Student-Tittle" + idGroup).append(group_button);
  $(addGroup).parent().parent().parent().append(group_items);

  addItemFn($("#addItem" + idGroup)[0]);
  addItemFn($("#addItem" + idGroup)[0]);
  addItemFn($("#addItem" + idGroup)[0]);

  $("#groupTittle" + idGroup).dblclick(function () {
    changeGroupNameFn(this);
  });
  $("#deleteGroup" + idGroup).click(function () {
    deleteGroupFn(this);
  });
  $("#addItem" + idGroup).click(function () {
    addItemFn(this);
  });
  $("#addGroup" + idGroup).click(function () {
    addGroupFn(this);
  });

  idGroup = null;
  addGroup = null;
  group = null;
  group_tittle = null;
  group_button = null;
  group_items = null;
}

// Delete Group Item
function deleteGroupFn(obj) {
  let window = prompt(
    "Xac nhan xoa nhom thong tin. Nhan OK de xoa!!",
    "Tran Quang Huy 20204757"
  );
  if (window != null) {
    let deleteGroup = "#" + obj.id;
    $(deleteGroup).parent().parent().next().remove();
    $(deleteGroup).parent().parent().remove();
  }
}
