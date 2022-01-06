// $(document).ready(function(){
//     $("#search").on("sc",function(){
//     var value = $(this).val().toLowerCase();
//     $("#card div").filter(function(){
//         $(this).toggle($(this).text).toLowerCase.indexof(value)>-1);
//         });
//     });
// });

const search = () => {
  const searchP = document.getElementById("#search_product").value.toUpperCase();
  const restore = document.getElementById(".row2");
  const ourProduct = document.querySelectorAll(".col-4");
  const productName = restore.getElementsByTagName("#h4");

  for (var i = 0; i < productName.length; i++) {
    let varMatch = ourProduct[i].getElementsByTagName("#h4")[0];
    if (varMatch) {
      let textValue = varMatch.textContent || varMatch.innerHTML;
      if (textValue.toUpperCase().indexOf(searchP) > -1) {
        ourProduct[i].style.display = "";
      } else {
        ourProduct[i].style.display = "none";
      }
    }
  }
};
