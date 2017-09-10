Ext.define("GstApp.view.main.GstTemplate", {
    extend: "Ext.view.View",
    requires: [
        'GstApp.store.GstTemplate'
    ],
    xtype: 'gsttempalte',
    store: {
        type: 'gsttemplate'
    },

    tpl: new Ext.XTemplate(
        '<tpl for=".">',
        '<div class="wrapper">',
        '<div class="cost">',
        '<h3 class="itemsheader">Cost</h3>',
        '<h3 class="itemsvalue">{amount} ₹</h3>',
        '</div>',
        '<div class="gst">',
        '<h3 class="itemsheader">GST %</h3>',
        '<h3 class="itemsvalue">{gstPercentage}</h3>',
        '</div>',
        '<div class="gstprice">',
        '<h3 class="itemsheader">GST Price</h3>',
        '<h3 class="itemsvalue">{gstPrice} ₹</h3>',
        '</div>',
        '<div class="netprice">',
        '<h3 class="itemsheader">Net Price</h3>',
        '<h3 class="itemsvalue">{netPrice} ₹</h3>',
        '</div>',
        '</div>',
        '</tpl>'
    ),

    itemSelector: "div.wrapper",
    emptyText: 'Test ..........'
});