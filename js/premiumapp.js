$(document).ready(function() {
    var clickcounts = [];
    // modify the old DOM first
    $('.content').html('');
    var contentElem = $('.content');

    // create cats object
    var cats = {
        catname: ['cat1', 'cat2', 'cat3', 'cat4', 'cat5', 'cat6'],
        caturl: ['http://placekitten.com/g/300/400',
            'http://placekitten.com/g/300/400',
            'http://placekitten.com/g/300/400',
            'http://placekitten.com/g/300/400',
            'http://placekitten.com/g/300/400',
            'http://placekitten.com/g/300/400'
        ]
    };

    var init_clickcount = function(numofcat) {
        for (var i = 0; i < numofcat.length; i++) {
            clickcounts.push(0);
            // console.log(clickcounts);
        }
    };
    init_clickcount(cats.catname);

    // create cat images list
    contentElem.append('<div class="catlistholder"></div>');
    var catlist = $('.catlistholder');
    for (var i = 0; i < cats.catname.length; i++) {
        // console.log(cats.catname[i]);
        catlist.append('<div class="item">' + cats.catname[i] + '<img class="catimage" src="' + cats.caturl[i] + '">' + '</div>');
    }

    // create click result output
    contentElem.append('<br><div class="selectedcat"></div>');
    var selectedcat = $('.selectedcat');

    // select the cat you want to click and count
    var selectItem = function() {
        $('.catlistholder .item').click(function() {
            var selected = $(this).clone();
            var selectedcatname = selected.text();
            var catindex = cats.catname.indexOf(selectedcatname);
            // console.log(catindex);
            // append the selected cat to the display area and only selected one pic
            if (selectedcat.html() !== '') {
                $('.catlistholder').append(selected);
                selectedcat.html(selected);
                // console.log($('.catlistholder'));
            }
            selectedcat.append(selected);
            selectedcat.append('<div class="item count"></div>');

            // count the click times of selected cat
            clickcounts[catindex]++;
            // console.log(this);
            $('.selectedcat .count').html('You have  clicked  ' + '<span style="color: yellow">' + selected.text() + '</span>' + '  <span style="color: red">  ' + clickcounts[catindex] + ' </span>' + '    times.');
        });
    };
    selectItem();

});
