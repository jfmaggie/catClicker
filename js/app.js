// Model
var Cats = [{
    catName: 'Lily',
    catUrl: 'http://25.media.tumblr.com/tumblr_maotspCNK41rgiux1o1_1280.jpg',
    catCount: 0
}, {
    catName: 'Lucy',
    catUrl: 'http://25.media.tumblr.com/tumblr_maotspCNK41rgiux1o1_1280.jpg',
    catCount: 0
}, {
    catName: 'Zach',
    catUrl: 'http://25.media.tumblr.com/tumblr_maotspCNK41rgiux1o1_1280.jpg',
    catCount: 0
}, {
    catName: 'Mark',
    catUrl: 'http://25.media.tumblr.com/tumblr_maotspCNK41rgiux1o1_1280.jpg',
    catCount: 0
}, {
    catName: 'Ricky',
    catUrl: 'http://25.media.tumblr.com/tumblr_maotspCNK41rgiux1o1_1280.jpg',
    catCount: 0
}];

var clickCount = function(cat) {
    var self = cat;
    self.catCount++;
    return self.catCount;
};

// View:
// list all cats by name
var displayCatList = function(cats) {
    $('.catholder').append("<ul></ul>");
    var list = $('.catholder ul');
    for (var i = 0; i < cats.length; i++) {
        var currentcat = cats[i];
        list.append("<li>" + currentcat.catName + "</li>");
    };
}(Cats);

//display selected cat
var displaySelectedCat = function(cat) {
    $('.catholder').prepend("<div class='selectedCat'><h2>" + cat.catName + " " + "<span>" + cat.catCount + "</span>" + "</h2></div>");
    $('.selectedCat').append("<img src='" + cat.catUrl + "' alt='catspic' />");
    $('.selectedCat img').click(function() {
        clickCount(cat);
        $('.selectedCat h2 span').html(cat.catCount);
    });
};

// clear previous selected cat
var updateCat = function(cat) {
    $('.selectedCat').detach();
};

var prevClickedCat;

$(document).ready(function() {
    $('li').click(function(event) {
        var thisCatName = $(this).text();
        var thisCat;

        // detach the previous  selected cat
        if (prevClickedCat) {
            updateCat(thisCat);
        }

        // find the selected cat and display it
        for (var i = 0; i < Cats.length; i++) {
            if (Cats[i].catName === thisCatName)
                thisCat = Cats[i];
        }
        displaySelectedCat(thisCat);
        prevClickedCat = thisCat;


    });

});
