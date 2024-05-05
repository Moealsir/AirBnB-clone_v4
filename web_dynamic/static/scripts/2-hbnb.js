$(document).ready(function() {
    let amenityIDs = {};

    $('input[type="checkbox"]').change(function() {
        const amenityID = $(this).data('id');
        const amenityName = $(this).data('name'); 

        if ($(this).is(':checked')) {
            amenityIDs[amenityID] = amenityName; 
        } else {
            delete amenityIDs[amenityID]; 
        }

        const amenitiesList = Object.values(amenityIDs).join(', ');
        $('.amenities h4').text(amenitiesList);
    });

    
    $.ajax({
        url: 'http://0.0.0.0:5001/api/v1/status/',
        type: 'GET',
        success: function(response) {
            if (response.status === 'OK') {
                $('#api_status').addClass('available');
            } else {
                $('#api_status').removeClass('available');
            }
        },
        error: function(error) {
            $('#api_status').removeClass('available');
        }
    });
});
