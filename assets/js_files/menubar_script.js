window.onload = function () {

  var fileMenu = document.getElementById("fileMenu");
  var fileSubMenu = document.getElementById("fileSubMenu");
  var editMenu = document.getElementById("editMenu");
  var editSubMenu = document.getElementById("editSubMenu");
  var imageMenu = document.getElementById("imageMenu");
  var imageSubMenu = document.getElementById("imageSubMenu");
  var layerMenu = document.getElementById("layerMenu");
  var layerSubMenu = document.getElementById("layerSubMenu");
  var adjustmentMenu = document.getElementById("adjustmentMenu");
  var adjustmentSubMenu = document.getElementById("adjustmentSubMenu");
  var filterMenu = document.getElementById("filterMenu");
  var filterSubMenu = document.getElementById("filterSubMenu");
  var viewMenu = document.getElementById("viewMenu");
  var viewSubMenu = document.getElementById("viewSubMenu");
  var helpMenu = document.getElementById("helpMenu");
  var helpSubMenu = document.getElementById("helpSubMenu");

  fileMenu.addEventListener("click", showFileMenu);
  editMenu.addEventListener("click", showEditMenu);
  imageMenu.addEventListener("click", showImageMenu);
  layerMenu.addEventListener("click", showLayerMenu);
  adjustmentMenu.addEventListener("click", showAdjustmentMenu);
  filterMenu.addEventListener("click", showFilterMenu);
  viewMenu.addEventListener("click", showViewMenu);
  helpMenu.addEventListener("click", showHelpMenu);

  function showFileMenu() {
    fileSubMenu.style.visibility === "" || fileSubMenu.style.visibility === "hidden" ? fileSubMenu.style.visibility = "visible" : fileSubMenu.style.visibility = "hidden";
  }
  function showEditMenu() {
    editSubMenu.style.visibility === "" || editSubMenu.style.visibility === "hidden" ? editSubMenu.style.visibility = "visible" : editSubMenu.style.visibility = "hidden";
  }
  function showImageMenu() {
    imageSubMenu.style.visibility === "" || imageSubMenu.style.visibility === "hidden" ? imageSubMenu.style.visibility = "visible" : imageSubMenu.style.visibility = "hidden";
  }
  function showLayerMenu() {
    layerSubMenu.style.visibility === "" || layerSubMenu.style.visibility === "hidden" ? layerSubMenu.style.visibility = "visible" : layerSubMenu.style.visibility = "hidden";
  }
  function showAdjustmentMenu() {
    adjustmentSubMenu.style.visibility === "" || adjustmentSubMenu.style.visibility === "hidden" ? adjustmentSubMenu.style.visibility = "visible" : adjustmentSubMenu.style.visibility = "hidden";
  }
  function showFilterMenu() {
    filterSubMenu.style.visibility === "" || filterSubMenu.style.visibility === "hidden" ? filterSubMenu.style.visibility = "visible" : filterSubMenu.style.visibility = "hidden";
  }
  function showViewMenu() {
    viewSubMenu.style.visibility === "" || viewSubMenu.style.visibility === "hidden" ? viewSubMenu.style.visibility = "visible" : viewSubMenu.style.visibility = "hidden";
  }
  function showHelpMenu() {
    helpSubMenu.style.visibility === "" || helpSubMenu.style.visibility === "hidden" ? helpSubMenu.style.visibility = "visible" : helpSubMenu.style.visibility = "hidden";
  }

  fileMenu.addEventListener("mouseover", showFileMenuMouseOver);
  editMenu.addEventListener("mouseover", showEditMenuMouseOver);
  imageMenu.addEventListener("mouseover", showImageMenuMouseOver);
  layerMenu.addEventListener("mouseover", showLayerMenuMouseOver);
  adjustmentMenu.addEventListener("mouseover", showAdjustmentMenuMouseOver);
  filterMenu.addEventListener("mouseover", showFilterMenuMouseOver);
  viewMenu.addEventListener("mouseover", showViewMenuMouseOver);
  helpMenu.addEventListener("mouseover", showHelpMenuMouseOver);

  function showFileMenuMouseOver () {
    if (editSubMenu.style.visibility === "visible") {
      editSubMenu.style.visibility = "hidden";
      fileSubMenu.style.visibility = "visible";
    }
  }

  function showEditMenuMouseOver () {
    if (fileSubMenu.style.visibility === "visible" || imageSubMenu.style.visibility === "visible") {
      fileSubMenu.style.visibility = "hidden";
      imageSubMenu.style.visibility = "hidden";
      editSubMenu.style.visibility = "visible";
    }
  }

  function showImageMenuMouseOver() {
    if (editSubMenu.style.visibility === "visible" || layerSubMenu.style.visibility === "visible") {
      editSubMenu.style.visibility = "hidden";
      layerSubMenu.style.visibility = "hidden";
      imageSubMenu.style.visibility = "visible";
    }
  }

  function showLayerMenuMouseOver() {
    if (imageSubMenu.style.visibility === "visible" || adjustmentSubMenu.style.visibility === "visible") {
      imageSubMenu.style.visibility = "hidden";
      adjustmentSubMenu.style.visibility = "hidden";
      layerSubMenu.style.visibility = "visible";
    }
  }

  function showAdjustmentMenuMouseOver() {
    if (layerSubMenu.style.visibility === "visible" || filterSubMenu.style.visibility === "visible") {
      layerSubMenu.style.visibility = "hidden";
      filterSubMenu.style.visibility = "hidden";
      adjustmentSubMenu.style.visibility = "visible";
    }
  }

  function showFilterMenuMouseOver() {
    if (adjustmentSubMenu.style.visibility === "visible" || viewSubMenu.style.visibility === "visible") {
      adjustmentSubMenu.style.visibility = "hidden";
      viewSubMenu.style.visibility = "hidden";
      filterSubMenu.style.visibility = "visible";
    }
  }

  function showViewMenuMouseOver() {
    if (filterSubMenu.style.visibility === "visible" || helpSubMenu.style.visibility === "visible") {
      filterSubMenu.style.visibility = "hidden";
      helpSubMenu.style.visibility = "hidden";
      viewSubMenu.style.visibility = "visible";
    }
  }

  function showHelpMenuMouseOver() {
    if (viewSubMenu.style.visibility === "visible") {
      viewSubMenu.style.visibility = "hidden";
      helpSubMenu.style.visibility = "visible";
    }
  }
};
