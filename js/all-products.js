$(window).on('load', function () {

    function ProductListingViewModel() {
        var self = this;

        // 1) All products
        self.assets = ko.observableArray([
        {
            defaultImageSrc: './img/all-products/prod-unicorn-default.png',
            hoverImageSrc: './img/all-products/prod-unicorn-hover.png',
            itemNumber: '123101',
            productLine: 'Playhouse',
            title: 'Unicorn',
            productURL: '#',
        },
        {
            defaultImageSrc: './img/all-products/prod-treatsneats-default.png',
            hoverImageSrc: './img/all-products/prod-treatsneats-hover.png',
            itemNumber: '1230201',
            productLine: 'Playhouse',
            title: "Treats 'N' eats",
            productURL: '#',
        },
        {
            defaultImageSrc: './img/all-products/prod-blank-default.png',
            hoverImageSrc: './img/all-products/prod-blank-hover.png',
            itemNumber: '1230301',
            productLine: 'Playhouse',
            title: 'BLANK',
            productURL: '#',
        },
        {
            defaultImageSrc: './img/all-products/prod-gingerbread-default.png',
            hoverImageSrc: './img/all-products/prod-gingerbread-hover.png',
            itemNumber: '1230601',
            productLine: 'Playhouse',
            title: 'GINGERBREAD',
            productURL: '#',
        },
        {
            defaultImageSrc: './img/all-products/prod-bus-default.png',
            hoverImageSrc: './img/all-products/prod-bus-hover.png',
            itemNumber: '100016912',
            productLine: 'Vehicles',
            title: 'SCHOOL BUS',
            productURL: '#',
        },
        {
            defaultImageSrc: './img/all-products/prod-truck-default.png',
            hoverImageSrc: './img/all-products/prod-truck-hover.png',
            itemNumber: '100128406',
            productLine: 'Vehicles',
            title: 'HOLIDAY TRUCK',
            productURL: '#',
        },
        {
            defaultImageSrc: './img/all-products/prod-block20-default.png',
            hoverImageSrc: './img/all-products/prod-block20-hover.png',
            itemNumber: '1230801',
            productLine: 'Blocks',
            title: '20 PACK',
            productURL: '#',
        },
        {
            defaultImageSrc: './img/all-products/prod-block40-default.png',
            hoverImageSrc: './img/all-products/prod-block40-hover.png',
            itemNumber: '1230802',
            productLine: 'Blocks',
            title: '40 PACK',
            productURL: '#',
        },
        ]);

        // 2) Metadata for each product line (title + hero image)
        self.productLines = ko.observableArray([
        {
            key: 'Playhouse',  // must match product.productLine
            pageTitle: 'Playhouses',
            heroImageSrc: './img/all-products/hero-img-playhouses.jpg'
        },
        {
            key: 'Vehicles',
            pageTitle: 'Vehicles',
            heroImageSrc: './img/all-products/hero-img-vehicles.jpg'
        },
        {
            key: 'Blocks',
            pageTitle: 'Blocks',
            heroImageSrc: './img/all-products/hero-img-blocks.jpg'
        }
        ]);

        // 3) What page are we on? (null = All Products page)
        // Set this from HTML via a data-attribute (shown below)
        self.currentProductLineKey = ko.observable(null);

        // Helper: products for a given line key
        self.productsByLine = function (lineKey) {
        return ko.utils.arrayFilter(self.assets(), function (p) {
            return p.productLine === lineKey;
        });
        };

        // For single product line pages: current line metadata
        self.currentLine = ko.computed(function () {
        var key = self.currentProductLineKey();
        if (!key) return null;

        var match = ko.utils.arrayFirst(self.productLines(), function (l) {
            return l.key === key;
        });

        return match || null;
        });

        // For single product line pages: current line products
        self.currentLineProducts = ko.computed(function () {
        var line = self.currentProductLineKey();
        if (!line) return [];
        return self.productsByLine(line);
        });
    }

    var vm = new ProductListingViewModel();

    // Read optional line key from DOM (All Products won't have it)
    // Example: <main id="primary-content" data-product-line="Playhouse">
    var main = document.getElementById('primary-content');
    if (main) {
        var lineKey = main.getAttribute('data-product-line'); // e.g. "Playhouse"
        if (lineKey) vm.currentProductLineKey(lineKey);
    }

    ko.applyBindings(vm);
});