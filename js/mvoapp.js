$(document).ready(function() {
    var Modular = {
        current: 0,
        catname: ['cat1', 'cat2', 'cat3', 'cat4', 'cat5', 'cat6'],
        caturl: ['img/cat.jpeg',
                 'img/cat.jpeg',
                 'img/cat.jpeg',
                 'img/cat.jpeg',
                 'img/cat.jpeg',
                 'img/cat.jpeg'
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
            for (var i = 0; i < Modular.catname.length; i++) {
                // console.log("image here!");
                $('.catlistholder').append('<div class="item">' + Modular.catname[i] + '<img class="catimage" src="' + Modular.caturl[i] + '">' + '</div>');
            }
            View.catlist = $('.catlistholder');

        }

    };

    var adminView = {
        // toseeadminview: 0,
        init: function() {
            $('.content').append('<br><button class="admin">Admin</button><div class="inputarea"></div>');
            $('.inputarea').append('<form class="textarea">Name: <input type="text" id="name" value="selected cat" /><br />ImgURL: <input type="text" id="imgurl" value="selected cat URL" /><br />#Clicks: <input type="text" id="clicknumbers" value="click numbers" /></form>');
            $('.inputarea').append('<button id="save" >Save</button><button id="cancel">Cancel</button>');

            this.open();
            this.close();
        },
        open: function() {
            $('.admin').click(function() {
                // console.log(this.toseeadminview);
                $('.inputarea').css('display', 'block');

            });
        },
        close: function() {
            $('#cancel').click(function() {
                $('.inputarea').css('display', 'none');

            });
        },
        update: function() {
            $('#save').click(function() {
                var savedname = $('#name').val();
                $('.count').html('<p>' + savedname + '</p>');
                $('.inputarea').css('display', 'none');
                console.log( savedname);
                adminView.savedname = savedname;

            });
        }
    };

    var Octopus = (function() {
        // manipulate the old DOM first
        View.initview();

        // initialize the cat clicking count
        Modular.init_clickcount(Modular.catname, Modular.catcounts);

        View.contentElem.append('<br><div class="selectedcat"></div>');
        View.selectedcat = $('.selectedcat');

        $('.catlistholder .item').click(function() {
            var selected = $(this).clone();
            var selectedcatname = selected.text();
            Modular.current = Modular.catname.indexOf(selectedcatname);
            // console.log(catindex);
            // append the selected cat to the display area and only selected one pic
            if (View.selectedcat.html() !== '') {
                $('.catlistholder').append(selected);
                View.selectedcat.html(selected);
                // console.log($('.catlistholder'));
            }
            View.selectedcat.append(selected);
            View.selectedcat.append('<div class="item count"></div>');
            // console.log(Modular.current);
            $('.count').html('<p>' + Modular.catname[Modular.current] + '</p>');
        });

        $(View.selectedcat).click(function() {
            // console.log('test');

            var a = Modular.catcounts[Modular.current]++;
            $('.count').html('<p>' + Modular.catname[Modular.current] + '</p>' + (a + 1));

            // console.log(a);
        });

        adminView.init();
        adminView.update();
        // console.log();

    });
    Octopus();

});
