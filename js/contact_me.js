 $("form#contactForm").validate({
  messages: { },
  submitHandler: function(form) {
    $.ajax({
      url: "//formspree.io/krzysieknowak337@gmail.com",
      method: "POST",
      data: $(form).serialize(),
      dataType: "json",
      success: function(data) {
          $("form#contact_form :input").prop("disabled", true);
          
      }
    });
    return false;
  }
});
    


// When clicking on Full hide fail/success boxes
$('#name').focus(function() {
    $('#success').html('');
});
