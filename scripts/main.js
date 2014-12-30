$('.gallery').hbGallery({
    children: '.thumbnail',
    parent: '.overlay img',
    animated: function()
    {
        $('.nav input').prop('disabled', false);
    }
});

$('body').on('click', '.gallery .thumbnail', function()
{
    $('.overlay').fadeIn();

    // Hide the previous image when opening the overlay
    $('.gallery').trigger('gallery-hide');
    $('.gallery').trigger('gallery-show', $(this).index());
});

$('body').on('click', '.nav input', function()
{
    $('.gallery').trigger('gallery-'+this.dataset.value);
    $('.nav input').prop('disabled', true);                    
});

$('body').on('click', '.overlay .close', function()
{
    $('.overlay').fadeOut();
});