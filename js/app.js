var Cats = {
    "cat1": {
        catName: 'Lily',
        catUrl: 'http://25.media.tumblr.com/tumblr_maotspCNK41rgiux1o1_1280.jpg',
        catCount: 0
    },
    "cat2": {
        catName: 'Lucy',
        catUrl: 'http://25.media.tumblr.com/tumblr_maotspCNK41rgiux1o1_1280.jpg',
        catCount: 0
    }
};

// console.log(Cats);

var addCatToDom = function() {
    $('.catholder').append("<div id='cat1' class='catpicture' >" + "<h2>" + Cats.cat1.catName + "</h2>" + "</div>");
    $('.catholder').append("<div id='cat2' class='catpictureDual' >" + "<h2>" + Cats.cat2.catName + "</h2>" + "</div>");

    $('#cat1').append("<img  src='" + Cats.cat1.catUrl + "' alt='cat1Picture' />");
    $('#cat2').append("<img  src='" + Cats.cat2.catUrl + "' alt='cat2Picture' />");

};

var clickCount = function(cat) {
    var self = cat;
    self.catCount++;
    return self.catCount;
};

var init = function() {
    addCatToDom();
};

var outputCountResult = function(cat) {
    var self = cat;
    $('.catname').html(self.catName);
    $('.clickcount').html(self.catCount);
};


$(document).ready(function() {
    init();

    // click event
    $('#cat1 img').click(function() {
        // console.log("click cat1");
        clickCount(Cats.cat1);
        outputCountResult(Cats.cat1);
    });

    $('#cat2 img').click(function() {
        // console.log("click cat2");
        clickCount(Cats.cat2);
        outputCountResult(Cats.cat2);
    });


});
