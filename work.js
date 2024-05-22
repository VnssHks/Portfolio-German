$(document).ready(function() {
  // Filter functionality
  $('.filter-buttons button').on('click', function() {
    var filterValue = $(this).attr('data-filter');
    console.log("Filter clicked:", filterValue); // Log the filter value
    
    // Show all work items if 'All' is clicked
    if (filterValue === 'all') {
      $('.work').show();
    } else {
      // Hide all work items
      $('.work').hide();
      // Show work items matching the filter value
      $('.work[data-category="' + filterValue + '"]').show();
    }
  });

  // Trigger the 'all' filter on page load
  $('.filter-buttons button[data-filter="all"]').click();
});


// JavaScript to handle clicking on SVGs and redirecting
$(document).ready(function() {
  $('.work .description').on('click', function() {
    var url = $(this).attr('data-url');
    window.location.href = url; // Redirect to the specified URL
  });
});
console.log("JavaScript file loaded");
