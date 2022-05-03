# Leonardo Donelli - Creativi Quadrati
# © 2016 Alessio Gerace - Agile Business Group
# © 2018-2020 Lorenzo Battistini
# © 2019-2020 Roberto Fichera - Level Prime Srl
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl.html).

{
    "name": "DA - ePOS-Print Without Receipt",
    "version": "14.0.1.1.0",
    "category": "Point Of Sale",
    "author": "Dinamiche Aziendali srl",
    "license": "AGPL-3",
    "depends": [
        "point_of_sale",
        "fiscal_epos_print",
    ],
    "data": [
        "views/assets.xml",
    ],
    "qweb": [
        "static/src/xml/Screens/PaymentScreen/PaymentScreen.xml",
    ],
    "installable": True,
    "auto_install": False,
}
