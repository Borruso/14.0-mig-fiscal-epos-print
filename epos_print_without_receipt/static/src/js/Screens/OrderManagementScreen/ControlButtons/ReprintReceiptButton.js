odoo.define("epos_print_without_receipt.ReprintReceiptButton", function (require) {
    "use strict";

    const ReprintReceiptButton = require("point_of_sale.ReprintReceiptButton");
    const Registries = require("point_of_sale.Registries");
    var epson_epos_print = require("fiscal_epos_print.epson_epos_print");
    var eposDriver = epson_epos_print.eposDriver;

    const FP90ReprintReceiptButton = ReprintReceiptButton =>
        class extends ReprintReceiptButton {
            sendToFP90Printer(receipt, printer_options) {
                var fp90 = new eposDriver(printer_options, this);
                fp90.printFiscalReceipt(receipt);
            }

            _onClick() {
                var currentOrder = this.orderManagementContext.selectedOrder;
                if (this.env.pos.config.printer_ip) {
                    if (currentOrder.fiscal_receipt_number) {
                        Gui.showPopup('ErrorPopup', {
                            'title': _t('Order already printed'),
                            'body': currentOrder.pos_reference + _t(": order already has a fiscal number, ") + currentOrder.fiscal_receipt_number,
                        });
                        return false;
                    }
                    var printer_options = currentOrder.getPrinterOptions();
                    printer_options.order = currentOrder;
                    var receipt = currentOrder.export_for_printing();
                    this.sendToFP90Printer(receipt, printer_options);
                }
                super._onClick(...arguments);
            }
        };
    Registries.Component.extend(ReprintReceiptButton, FP90ReprintReceiptButton);
    return FP90ReprintReceiptButton;
});
