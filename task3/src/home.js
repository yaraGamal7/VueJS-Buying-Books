export default[
    document.addEventListener("DOMContentLoaded", function () {
        const main_branch_btn = document.getElementById("main-branch");
        const branch_btn = document.getElementById("branch");
        const smart = document.getElementById("smart");
        const otherLists = document.querySelectorAll(".options div:not(#smart)");
  
        main_branch_btn.addEventListener("click", function () {
          smart.style.display = "block";
          otherLists.forEach((div) => (div.style.display = "none"));
        });
  
        branch_btn.addEventListener("click", function () {
          // smart.style.display = "none";
          otherLists.forEach((div) => (div.style.display = "block"));
        });
      })
]