$(document).ready(function() {
    var Modular = {
        catname: ['cat1', 'cat2', 'cat3', 'cat4', 'cat5', 'cat6'],
        caturl: ['http://placekitten.com/g/300/400',
            'http://placekitten.com/g/300/400',
            'http://placekitten.com/g/300/400',
            'http://placekitten.com/g/300/400',
            'http://placekitten.com/g/300/400',
            'http://placekitten.com/g/300/400'
        ],
        catcounts: [],
        init_clickcount: function(numofcat, countarr) {
            for (var i = 0; i < numofcat.length; i++) {
                countarr.push(0);
                // console.log(Modular.catcounts);
            }
        }
    };

    var View = {
        contentElem: $('.content'),
        initview: function() {

            // clear old DOM and create cat image
            View.contentElem.html('');
            View.contentElem.append('<div class="catlistholder"></div>');
            for(var i=0; i<Modular.catname.length; i++){
                // console.log("image here!");
                $('.catlistholder').append('<div class="item">' + Modular.catname[i] + '<img class="catimage" src="' + Modular.caturl[i] + '">' + '</div>');
            }
            View.catlist = $('.catlistholder');

        }


    };

    var Octopus = (function() {
        // manipulate the old DOM first
        View.initview();

        // initialize the cat clicking count
        Modular.init_clickcount(Modular.catname, Modular.catcounts);

        View.contentElem.append('<br><div class="selectedcat"></div>');
        View.selectedcat = $('.selectedcat');

        var selectItem = function() {
        $('.catlistholder .item').click(function() {
            var selected = $(this).clone();
            var selectedcatname = selected.text();
            var catindex = Modular.catname.indexOf(selectedcatname);
            // console.log(catindex);
            // append the selected cat to the display area and only selected one pic
            if (View.selectedcat.html() !== '') {
                $('.catlistholder').append(selected);
                View.selectedcat.html(selected);
                // console.log($('.catlistholder'));
            }
            View.selectedcat.append(selected);
            View.selectedcat.append('<div class="item count"></div>');

            // count the click times of selected cat
            Modular.catcounts[catindex]++;
            // console.log(this);
            $('.selectedcat .count').html('You have  clicked  ' + '<span style="color: yellow">' + selected.text() + '</span>' + '  <span style="color: red">  ' + Modular.catcounts[catindex] + ' </span>' + '    times.');
        });
    };
    selectItem();

    })();


});
