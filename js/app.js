// Model
var model = {
    currentCat: null,
    cats: [{
        catName: 'Lily',
        catUrl: 'img/cat.jpeg',
        catCount: 0
    }, {
        catName: 'Lucy',
        catUrl: 'img/cat.jpeg',
        catCount: 0
    }, {
        catName: 'Zach',
        catUrl: 'img/cat.jpeg',
        catCount: 0
    }, {
        catName: 'Mark',
        catUrl: 'img/cat.jpeg',
        catCount: 0
    }, {
        catName: 'Ricky',
        catUrl: 'img/cat.jpeg',
        catCount: 0
    }]
};


// Contol
var control = {
    init: function() {
        model.currentCat = model.cats[0];

        catView.init();
        catListView.init();
        adminView.init();
    },
    getCats: function() {
        return model.cats;
    },
    setCurrentCat: function(cat) {
        model.currentCat = cat;
    },
    getCurrentCat: function() {
        return model.currentCat;
    },
    incrementCount: function() {
        model.currentCat.catCount++;
        catView.render();
        adminView.render();
    },
    updateCurrentCat: function() {
        model.currentCat.catName = $('#input-cat-name').val();
        model.currentCat.catUrl = $('#input-cat-url').val();
        model.currentCat.catCount = $('#input-cat-count').val();
        catView.render();
        catListView.render();
        adminView.render();
    },
    ToshowAdminView: function(display) {
        $('#ad-form').toggle(display);
    }
};

// First View: display current selected cat area
var catView = {
    init: function() {
        this.cat = $('#cat');
        this.catName = $('#cat-name');
        this.catImg = $('#cat-img');
        this.catUrl = $('#cat-url');
        this.catCount = $('#cat-count');

        this.catImg.on('click', function() {
            control.incrementCount();
        });

        // render this view
        this.render();
    },
    render: function() {
        // update the DOM elem and right values
        var currentCat = control.getCurrentCat();
        this.catName.text(currentCat.catName);
        this.catImg.attr("src", currentCat.catUrl);
        this.catCount.text(currentCat.catCount);

        // console.log(this.catImg);
    }
};

// Second View: clickable cats list
var catListView = {
    init: function() {
        this.catList = $('#cat-list');

        this.render();
    },
    render: function() {
        var cat, elem, i;
        var cats = control.getCats();

        // empty the cats list
        this.catList.html('');

        // loop over cats array and attach them
        for (i = 0; i < cats.length; i++) {
            cat = cats[i];
            elem = document.createElement('li');
            elem.textContent = cat.catName;

            elem.addEventListener('click', (function(clickedCat) {
                return function() {
                    // console.log(clickedCat.catName);
                    control.setCurrentCat(clickedCat);
                    catView.render();
                    adminView.render();
                };
            })(cat));

            // attach the li elem to catlist
            this.catList.append(elem);
        }

    }
};

// Third View: admin feature add/rm new cat and update in the list
var adminView = {

    init: function() {
            this.admin = $('#admin');
            this.save = $('#save');
            this.cancel = $('#cancel');

            this.admin.on('click', function() {
                // show form view
                control.ToshowAdminView(true);
                // form gets update with the current selected cat


            });
            this.save.on('click', function(event) {
                // catview update with the input values
                event.preventDefault();
                control.updateCurrentCat();
                // form view disapper
                control.ToshowAdminView(false);
            });
            this.cancel.on('click', function(event) {
                // form view disapper
                event.preventDefault();
                control.ToshowAdminView(false);
            });

            this.render();

        },
        render: function() {
            var current = control.getCurrentCat();
            // console.log(current);

            var inputCatName = $('#input-cat-name');
            var inputCatUrl = $('#input-cat-url');
            var inputCatCount = $('#input-cat-count');

            inputCatName.val(current.catName);
            inputCatUrl.val(current.catUrl);
            inputCatCount.val(current.catCount);
        }
};


// app starts
control.init();
