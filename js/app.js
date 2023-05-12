$(".star_rating").each(function (index, element) {
  $(element).click(() => {
    $(element).toggleClass('color')
    // console.log($(element).text());
    $('.get_rating').text( `${$(element).text()}`);
  });
});
$('.rating_card__submit_btn').click(()=> { 
  $(".thankyou_card").addClass('show_thanks');
  $(".rating_card").addClass('hide_rating_card'); 
});