$(document).ready(function()
{
    $('.js-gallery').hbGallery(
    {
        children: '.thumbnail',
        parent: '.overlay img',
        animated: function()
        {
            $('.nav input').prop('disabled', false);
        }
    });

    $('body').on('click', '.js-gallery .thumbnail', function()
    {
        $('.overlay').fadeIn();

        // Hide the previous image when opening the overlay
        $('.js-gallery').trigger('gallery-hide');
        $('.js-gallery').trigger('gallery-show', $(this).index());
    });

    $('body').on('click', '.nav input', function()
    {
        $('.js-gallery').trigger('gallery-'+$(this).data('value'));
        $('.nav input').prop('disabled', true);                    
    });

    $('body').on('click', '.overlay .close', function()
    {
        $('.overlay').fadeOut();
    });
    
});