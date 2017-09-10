Ext.define("GstApp.view.main.GstForm", {
    extend: "Ext.form.Panel",
    xtype: 'gstform',
    title: 'GST FORM',
    width: '100%',
    height: '100%',
    titleAlign: 'center',
    bodyPadding: 10,
    layout: {
        type: 'anchor'
    },

    items: [{
        xtype: 'numberfield',
        fieldLabel: 'Amount',
        name: 'amount',
        allowBlank: false,
        minValue: 0
    }, {
        xtype: 'combobox',
        fieldLabel: 'Select',
        name: 'gsttype',
        queryMode: 'local',
        value: 'Add GST',
        editable: false,
        forceSelection: true,
        displayField: 'key',
        valueField: 'value',
        store: [{ key: 'Add GST', value: 'Add GST' }, { key: 'Remove GST', value: 'Remove GST' }]
    }, {
        xtype: 'combobox',
        fieldLabel: 'Select Rate of GST',
        queryMode: 'local',
        value: '5',
        name: 'gstpercentage',
        editable: false,
        forceSelection: true,
        displayField: 'key',
        valueField: 'value',
        store: [{
            key: '5%',
            value: '5'
        }, {
            key: '12%',
            value: '12'
        }, {
            key: '18%',
            value: '18'
        }, {
            key: '28%',
            value: '28'
        }]
    }

    // , {
    //     xtype: 'numberfield',
    //     fieldLabel: 'Rate of GST',
    //     minValue: 0,
    //     name: 'rateofgst'

    // }
    ],

    buttons: [{
        text: 'Reset',
        handler: function() {
            this.up('form').getForm().reset();
        }
    }, {
        text: 'Submit',
        formBind: true, //only enabled once the form is valid
        disabled: true,
        handler: function() {
            var form = this.up('form').getForm();
            if (form.isValid()) {
                console.log(form.getValues());
                var amount, gstType, gstpercentage, formValues;
                formValues = form.getValues();
                amount = formValues.amount;
                gstType = formValues.gsttype;
                gstpercentage = formValues.gstpercentage;
                params = { amount: amount, gstType: gstType, gstpercentage: gstpercentage };
                form.submit({
                    url: 'http://localhost:8080/gst/_search?' + Ext.Object.toQueryString(params),
                    method: 'POST',
                    callback: function() {
                    	debugger;
                        me.close();
                    },
                    success: function(form, action) {
                        Ext.Msg.alert('Success', action.result.msg);
                    },
                    failure: function(form, action) {
                        Ext.Msg.alert('Failed', action.result.msg);
                    }
                });
            }
        }
    }],
});