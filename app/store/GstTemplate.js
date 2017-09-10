Ext.define('GstApp.store.GstTemplate', {
    extend: 'Ext.data.Store',

    alias: 'store.gsttemplate',

    fields:['amount','gstType','gstPercentage','gstPrice','netPrice'],

    autoLoad:true,

    proxy: {
        type: 'ajax',
        url:'/resources/data/gst.json',
        reader: {
            type: 'json'
        }
    }
});
