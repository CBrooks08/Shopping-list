$(function() {
  //add list element to the list, prevent default

  $('#js-shopping-list-form').submit(function(event) {
      event.preventDefault();
      const listElement = $('#shopping-list-entry').val();
      $('#shopping-list-entry').val(" ");
      $('.shopping-list').append(`<li>
        <span class="shopping-item">${listElement}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
  });  

//delete on click with, event delegation

$('.shopping-list').on('click', '.shopping-item-delete',function(event) {
  $(this).closest('li').remove();
});
/*
 cross off on click, toggle between showing/hiding checked item*/
$('.shopping-list').on('click','.shopping-item-toggle', function(event) {
  $(this).closest('li').find('.shopping-item').toggleClass( 'shopping-item__checked');
});
})

