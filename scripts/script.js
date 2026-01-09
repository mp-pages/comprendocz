// submit form
function onSubmit(token) {
    var form = $('#theForm');
    var url = form.attr('action');
    $.ajax({
        type: "POST",
        url: url,
        data: form.serialize(),
        success: function(data)
        {
            if (data == 1) {
                grecaptcha.reset();
                $(".modal__wrapper--formsent").addClass('modal__wrapper--active');
                $('#name').val('');
                $('#mail').val('');
                $('#note').val('');
                $('#checkbox').prop('checked',false);
            } else {
                alert('Při odesílání formuláře se vyskytla chyba. Zkuste prosím stránku znovu načíst, nebo použijte email info@comprendo.cz, díky.');
            }
        }
    });
    e.preventDefault();
}
// google map
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('googlemap'), {
        center: {lat: 49.191713, lng: 16.608905},
        zoom: 16
    });
    var marker_padowetz = new google.maps.Marker({position: {lat: 49.191069, lng: 16.610683}, icon: 'images/classroom__padowetz.png', map: map});
}

// smooth scroll
var smoothScroll = function (hash) {
    $('html,body').animate({
        scrollTop:($('a[id="' + hash + '"]').offset().top + 30) + 'px'
    },1000,'swing');
};

// detect safari
(function($){
    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Mac') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        $('html').addClass('safari-mac'); // provide a class for the safari-mac specific css to filter with
    }
})(jQuery);

// rest
$(function() {
    $('.info--en').on('click', function() {
        $(".modal__wrapper--eninfo").addClass('modal__wrapper--active');
    });
    $('.info--es').on('click', function() {
        $(".modal__wrapper--esinfo").addClass('modal__wrapper--active');
    });
    $('.close').on('click', function() {
        $(".modal__wrapper").removeClass('modal__wrapper--active');
    });
    $('a[href*="#"]:not([href="#"])').on('click',function(e){
        e.preventDefault();
        var hash = this.hash.substr(1);
        $('html,body').animate({
            scrollTop:($('a[id="' + hash + '"]').offset().top - 30) + 'px'
        },1000,'swing');
    });
    $('.switcher__item').on('click', function() {
        if (!$(this).hasClass('switcher__item--active')) {
            $('.switcher__item').toggleClass('switcher__item--active');
            $('.tabs__tab').toggleClass('tabs__tab--active');
        }
    })
    $('.gallery').lightGallery({
        'download': false
    });
});
