// JavaScript to handle clicking on SVGs and redirecting
$(document).ready(function() {
  $('.work .description').on('click', function() {
    var url = $(this).attr('data-url');
    window.location.href = url; // Redirect to the specified URL
  });
});

function filterByCategory(category) {
  console.log('Filtering by category:', category);
  $('.work').each(function() {
    if (category === 'all' || $(this).data('category') === category) {
      $(this).show(); // Show the work item if it belongs to the selected category or if all categories are selected
    } else {
      $(this).hide(); // Otherwise, hide the work item
    }
  });
}

