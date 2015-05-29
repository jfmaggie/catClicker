$(document).ready(function() {
    var count1 = 0,
        count2 = 0;
    var catName;

    $('.catpicture').click(function() {

        count1++;
        $('.controlPanel').html(' <p><span class="catname">' + catName + '</span> Meow~<br>Clicked <span class="clickcount">0</span> time.</p>');
        if (count1 > 1) {
            $('.controlPanel').html(' <p><span class="catname">' + catName + '</span> Meow~<br>Clicked <span class="clickcount">0</span> times.</p>');
        }

        $('.clickcount').text(count1);
        catName = $('.catpicture h2').text();
        $('.catname').text(catName);
        // console.log(count);
    });

    $('.catpictureDual').click(function() {

        count2++;
        $('.controlPanel').html(' <p><span class="catname">' + catName + '</span> Meow~<br>Clicked <span class="clickcount">0</span> time.</p>');
        if (count2 > 1) {
            $('.controlPanel').html(' <p><span class="catname">' + catName + '</span> Meow~<br>Clicked <span class="clickcount">0</span> times.</p>');
        }

        $('.clickcount').text(count2);
        catName = $('.catpictureDual h2').text();
        $('.catname').text(catName);
        // console.log(count);
    });
});
