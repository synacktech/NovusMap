// ==UserScript==
// @name         NovusMap
// @namespace    synacktech/NovusMap
// @version      0.13
// @description  Minimap for NovusPrax
// @author       ###
// @match        http://pixelcanvas.io/*
// @match        https://pixelcanvas.io/*
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @require      https://use.fontawesome.com/releases/v5.0.10/js/all.js
// @require      https://code.jquery.com/jquery-2.2.4.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js
// @require      https://code.jquery.com/ui/1.12.1/jquery-ui.min.js
// @resource     jQueryCss https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.min.css
// @copyright    Unknown
// @license      https://creativecommons.org/licenses/by-nc-nd/4.0/
// @updateURL    https://raw.githubusercontent.com/synacktech/NovusMap/master/NovusMap.user.js
// @downloadURL  https://raw.githubusercontent.com/synacktech/NovusMap/master/NovusMap.user.js
// ==/UserScript==

Number['prototype']['between'] = function (_0x157a64, _0x34e888) {
    var _0x10cab4 = Math['min']['apply'](Math, [_0x157a64, _0x34e888]),
    _0x2baafa = Math['max']['apply'](Math, [_0x157a64, _0x34e888]);
    return this > _0x10cab4 && this < _0x2baafa;
};
var _0x252320 = 'https://c99a80cbbe45fcca8d2ad4da609bd46077efb46d@raw.githubusercontent.com/synacktech/NovusMap/master/templates/'
$('head')['append']('<link rel=\'stylesheet\' href=\'https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.min.css\' type=\'text/css\' media=\'screen\'>');
$('head')['append']($('<style>h2.title { margin:0px auto; padding:10px; }\n.moveUp {position:absolute; bottom:6em; left:0.3333em;}\n.groupUp { bottom: initial !important; left: initial !important; position: initial !important; display: inline-block !important;}\n.colorsLeft {margin-left:0.333em !important;}\n.close { color:black; position:absolute; top:0.8em; right:1em; cursor:pointer; }\n.discord { color:black; position:absolute; top:0.75em; right:2.55em; cursor:pointer; }\n.smooth { overflow:auto; padding-top:4px; padding-bottom:4px; }\n.settings-list { margin:2px; text-shadow:1px 1px 8px white; position:relative; list-style-type:none; padding:0; display:table; width:99%;}\n.settings-list li:nth-child(odd) { background:linear-gradient(to right, rgba(228,228,228,0.65), rgba(0,0,0,0)); }\n.settings-button { right:0.5em; } .small{font-size:12px;} .smalltext{font-size:10px; width:120px;}\n.SettingsCss { width:280px; height:400px; display:none; border:3px solid rgba(34,34,34,0.75); overflow:hidden; background-color:rgba(255,255,255,0.95); position:absolute; top:-10%; bottom:0; left:0; right:0; margin:auto; }\n.GotoCss { width:280px; height:110px; display:none; border:3px solid rgba(34,34,34,0.75); overflow:hidden; background-color:rgba(255,255,255,0.95); position:absolute; top:-20%; bottom:0; left:0; right:0; margin:auto; }\n#minimap-backup {background-color:rgba(0,0,0,0.75); height:50px; border-radius:5px; position:absolute; right:1em; bottom:1em;}\n#minimap-content {background-color:rgba(0,0,0,0.75); width:480px; height:270px; border-radius:5px; position:absolute; right:1em; bottom:1em; outline: 4px solid white;}\n.fleft {float:left;} .fright {float:right;}\n.minimize { opacity: 0.45; filter: alpha(opacity=45); /* For IE8 and earlier */ }\n#minimap-settings { z-index:6; position:absolute; right:0em; bottom:0; width:480px; background-color:rgba(0,0,0,0.5);}\n#minimap {width:100%; top:0; height:100%; z-index:0; outline: 4px solid black!important; outline-offset: -2px;} #minimap-grid {width:100%; top:0; height:100%; z-index:1;} #minimap-cursor {width:100%; top:0; height:100%; z-index:2;}\n.clickable { cursor:pointer; font-weight:bold; }\nul.toolbar { justify-content: space-around; white-space:nowrap;  display:-webkit-flex; -webkit-justify-content:center; display:flex; justify-content:center; z-index:6; position:relative !important; line-height:25px; list-style-type:none; margin:0; border-style:none; overflow:hidden; text-align:center; color:white; }\nli.toolbar { z-index:6; float:left; } li.padding { padding-left:20px; } li.smallPadding { padding-left:4px; }\n.ui-slider .ui-slider-handle { width:1em !important; }\n.footer { font-size:8px; position:absolute; bottom:.5em; text-align:center; }\n.slider { right:0em !important; width:6.25em !important; }\n#config-categorie { height:50px;width:275px;border:1px solid #ccc; overflow:auto; font-size: 14px; }\n#BoxedSettings { height:180px;width:275px;border:1px solid #ccc; overflow:auto; font-size: 14px; }\n#i1, #i2, #i3 { text-align: center; display:inline-block; width: 33.3%; }\n#custom-slider-cursor { width: 1em !important; font-size:12px; position:relative !important; height: 1.25em; top: 50%; margin-top: -.75em; text-align: center; line-height: 1.6em !important; }\n#custom-slider-grid { width: 1em !important; font-size:12px; position:relative !important; height: 1.25em; top: 50%; margin-top: -.75em; text-align: center; line-height: 1.6em !important; }\ncanvas { position:absolute; image-rendering:optimizeSpeed; image-rendering:-moz-crisp-edges; image-rendering:-webkit-optimize-contrast; image-rendering:-o-crisp-edges; image-rendering:optimize-contrast; -ms-interpolation-mode:nearest-neighbor; }\n.menu-text { display:inline; }\n.CookiesButton { float:right; background-color:DarkGreen; color:white; font-weight:bold; cursor:pointer; border-color:DarkGreen; font-size: 14px !important; }\n.CookiesButton:hover { float:right; background-color:DarkGreen !important; color:white; font-weight:bold; cursor:pointer; border-color:lime !important; font-size: 14px !important; }\nspan.cookiesAndMilk { color:white; float:left; padding-top:5px; display:block; margin-left:.5em; font-size: 13px; }</style>'));
var _0x3b94a6 = '\n<div id=\"goto\" class=\"GotoCss\">\n  <h2 class=\"title\"> Goto template </h2>\n  <div id=\"close-goto\" class=\"close\"><i class=\"fas fa-window-close\"></i></div>\n  <div class=\"ui-widget\" style=\"padding:5px;\">\n    <label for=\"inputName\">Template name: </label>\n    <input id=\"inputName\">\n    <button id=\"enter-goto\" class=\"ui-button ui-widget ui-corner-all\">GO!</button>\n  </div>\n</div>\n<div id=\"settings\" class=\"SettingsCss\">\n   <h2 class=\"title\"> Settings </h2>\n   <div id=\"discord-link\" class=\"discord\"><small><u>Novusprax Discord</u></small> <i class=\"fab fa-discord\"></i></div>\n   <div id=\"close-settings\" class=\"close\"><i class=\"fas fa-window-close\"></i></div>\n   <ul class=\"settings-list\">\n\n      <!-- CATEGORIE  -->\n      <li class=\"smooth\"><div class=\"fleft small\">Template categorie(s): </div>\n      <div id=\"config-categorie\"></div></li>\n\n     <div id=\"BoxedSettings\">\n        <!-- HIDE ZOOM -->\n        <li class=\"smooth\"><div class=\"fleft small\">Hide zoom slider</div>\n          <div id=\"config-hidezoom\" class=\"fright clickable settings-button\">Hide</div>\n        </li>\n\n        <!-- HIDE CURSOR  -->\n        <li class=\"smooth\"><div class=\"fleft small\">Hide cursor</div>\n          <div id=\"config-hidecursor\" class=\"fright clickable settings-button\">Hide</div>\n        </li>\n\n        <!-- HIDE GRID  -->\n        <li class=\"smooth\"><div class=\"fleft small\">Hide grid</div>\n          <div id=\"config-hidegrid\" class=\"fright clickable settings-button\">Hide</div>\n        </li>\n\n        <!-- PLACE PALLET -->\n        <li class=\"smooth\"><div class=\"fleft small\">Place palette</div>\n          <div id=\"config-centerpallet\" class=\"fright clickable settings-button\">Center</div>\n        </li>\n\n        <!-- DISPLAY TEXT  -->\n        <li class=\"smooth\"><div class=\"fleft small\">Display text</div><div id=\"config-displaytext\" class=\"fright settings-button\">\n        <select id=\"config-text\" class=\"fright\">\n          <option>Icons and Text</option>\n          <option>Text only</option>\n          <option>Icons only</option>\n        </select>\n        </div></li>\n\n        <!-- CURSOR COLOR  -->\n        <li class=\"smooth\" style=\"padding-bottom:0.5em;\"><div class=\"fleft small\">Cursor color</div><div id=\"config-cursorcolor\" class=\"fright settings-button\">\n          <select runat=\"server\" id=\"CursorColor\" style=\"min-width:105px;\">\n            <option value=\"NAVY\" style=\"background-color: #001f3f;\" />\n            <option value=\"BLUE\" style=\"background-color: #0074D9;\" />\n            <option value=\"AQUA\" style=\"background-color: #7FDBFF;\" />\n            <option value=\"TEAL\" style=\"background-color: #39CCCC;\" />\n            <option value=\"OLIVE\" style=\"background-color: #3D9970;\" />\n            <option value=\"GREEN\" style=\"background-color: #2ECC40;\" />\n            <option value=\"LIME\" style=\"background-color: #01FF70;\" />\n            <option value=\"YELLOW\" style=\"background-color: #FFDC00;\" />\n            <option value=\"ORANGE\" style=\"background-color: #FF851B;\" />\n            <option value=\"RED\" style=\"background-color: #FF4136;\" />\n            <option value=\"MAROON\" style=\"background-color: #85144b;\" />\n            <option value=\"FUCHSIA\" style=\"background-color: #F012BE;\" />\n            <option value=\"PURPLE\" style=\"background-color: #B10DC9;\" />\n            <option value=\"BLACK\" style=\"background-color: #111111;\" />\n            <option value=\"GRAY\" style=\"background-color: #AAAAAA;\" />\n            <option value=\"SILVER\" style=\"background-color: #DDDDDD;\" />\n          </select>\n        </div></li>\n\n        <!-- SLIDER CURSOR  -->\n        <li class=\"smooth\"><div class=\"fleft small\">Cursor transparency</div><div id=\"config-cursoralpha\" class=\"fright settings-button\">\n          <div id=\"slider-cursor\" class=\"slider\"><div id=\"custom-slider-cursor\" class=\"ui-slider-handle\"></div></div>\n        </div></li>\n\n        <!-- SLIDER GRID  -->\n        <li class=\"smooth\"><div class=\"fleft small\">Grid transparency</div><div id=\"config-gridalpha\" class=\"fright settings-button\">\n          <div id=\"slider-grid\" class=\"slider\"><div id=\"custom-slider-grid\" class=\"ui-slider-handle\"></div></div>\n        </div></li>\n    </div>\n\n     <li style=\"padding:3px\"><!-- SPACE --></li>\n\n     <!-- RESET BUTTON -->\n     <li class=\"smooth\">\n       <div id=\"config-reset\" class=\"fright clickable settings-button\">Reset settings</div>\n     </li>\n   </ul>\n\n   <div class=\"footer\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-nd/4.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width:0; float:left; margin-top:10px; margin-left:5px;\" src=\"https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png\" /></a><br />This work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-nd/4.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.</div>\n</div>\n<div id=\"minimap-backup\" style=\"display:none\"><span class=\"clickable\" style=\"color:white; display:block;padding: 15px 20px;\"> <i class=\"fas fa-eye menu-icon\"></i> <div class=\"menu-text\"> Open minimap </div> </span></div>\n<div id=\"minimap-content\">\n   <div id=\"slider-vertical\" style=\"height:200px; width:0.5em; position:absolute; top:1em; right:1em; opacity:0.45; z-index:9;\"></div>\n   <canvas id=\"minimap\" width=\"1024\" height=\"540\"></canvas>\n   <canvas id=\"minimap-grid\" width=\"1024\" height=\"540\"></canvas>\n   <canvas id=\"minimap-cursor\" width=\"1024\" height=\"540\"></canvas>\n<div id=\"minimap-settings\" style=\"margin-left: -20px\">\n  <ul class=\"toolbar\">\n      <div id=\"i1\"> <li class=\"toolbar clickable\" id=\"hide-map\"> <i class=\"fas fa-eye-slash menu-icon\"></i> <div class=\"menu-text\"> Hide minimap </div> </li> </div>\n      <div id=\"i2\"> <li class=\"toolbar clickable\" id=\"open-goto\"> <i class=\"fas fa-chevron-circle-up menu-icon\"></i> <div class=\"menu-text\"> Goto template </div> </li> </div>\n      <div id=\"i3\"> <li class=\"toolbar clickable\" id=\"open-settings\"> <i class=\"fas fa-cog menu-icon\"></i> <div class=\"menu-text\"> Settings </div> </li> </div>\n  </ul>\n</div>\n</div>';
var _0x34901b = '\n<div id=\"CookieBar\" style=\"z-index:999; position:absolute; background-color:black; right:0; top:0; width:480px;\">\n  <span class=\"cookiesAndMilk\">We use cookies and milk to keep track your settings.</span>\n  <button id=\"CookiesOk\" class=\"CookiesButton ui-button ui-widget ui-corner-all\">I Understand!</button>\n</div>';
var _0x4a4f1f = 0x0;
var _0x219cc2 = null;
var _0x4ccfee = null;
var _0x20966d = 0x23;
var _0x3cfc20 = 0x3c;
var _0x1d7648 = _0x31cb55(Math['pow'](1.1, _0x20966d));
var _0x5ec7b9 = [];
var _0x1398d3 = [];
var _0x860272 = {};
var _0x33f27d = '#001f3f';
var _0x3dfda4 = 0x5a;
var _0x1854e1 = 0x32;
var _0x48f333 = !![];
var _0x51d8f8 = !![];
var _0x2e5898 = !![];
var _0x53770a = 0x0;
var _0x1030bc = !![];
var _0x4ae39a = [];
var _0x48093a = 0x0;
$(document)['ready'](function () {
    'use strict';
    _0x121b2a();
    _0x284ee0();
    $('div#app')['children']()['append'](_0x3b94a6);
    if ($['cookie']('WeUseCookies') === '0' || typeof $['cookie']('WeUseCookies') === 'undefined') {
        $('div#minimap-content')['append'](_0x34901b);
    };
    _0x2b9360();
    _0x4a7e78();
    _0x31f20();
    $('#slider-vertical')['slider']('value', _0x20966d);
});
function _0x2b9360() {
    if (typeof $['cookie']('showMinimap') === 'undefined') {
        $['cookie']('showMinimap', 'true', {
            'expires': 0x16d
        });
    } else {
        if ($['cookie']('showMinimap') === 'false') {
            $('#minimap-content')['hide']();
            $('#minimap-backup')['show']();
        }
    };
    if (typeof $['cookie']('cursorColor') === 'undefined') {
        _0x10b4a4('NAVY', !![]);
    } else {
        console['log'](_0x10b4a4($['cookie']('cursorColor')));
        _0x10b4a4($['cookie']('cursorColor'));
    };
    if (typeof $['cookie']('WeUseCookies') === 'undefined') {
        $['cookie']('WeUseCookies', 0x0, {
            'expires': 0x16d
        });
    };
    if (typeof $['cookie']('cursorAlpha') === 'undefined') {
        $['cookie']('cursorAlpha', _0x3dfda4, {
            'expires': 0x16d
        });
    } else {
        _0x3dfda4 = $['cookie']('cursorAlpha');
    };
    if (typeof $['cookie']('gridAlpha') === 'undefined') {
        $['cookie']('gridAlpha', _0x1854e1, {
            'expires': 0x16d
        });
    } else {
        _0x1854e1 = $['cookie']('gridAlpha');
    };
    if (typeof $['cookie']('showSlider') === 'undefined') {
        $['cookie']('showSlider', 'true', {
            'expires': 0x16d
        });
    } else {
        _0x48f333 = $['cookie']('showSlider') === 'true' ? !![] : ![];
        $('#config-hidezoom')['text'](!_0x48f333 ? 'Show' : 'Hide');
        if (_0x48f333) {
            $('#slider-vertical')['show']();
        } else {
            $('#slider-vertical')['hide']();
        }
    };
    if (typeof $['cookie']('showCursor') === 'undefined') {
        $['cookie']('showCursor', 'true', {
            'expires': 0x16d
        });
    } else {
        _0x51d8f8 = $['cookie']('showCursor') === 'true' ? !![] : ![];
        $('#config-hidecursor')['text'](!_0x51d8f8 ? 'Show' : 'Hide');
    };
    if (typeof $['cookie']('showGrid') === 'undefined') {
        $['cookie']('showGrid', 'true', {
            'expires': 0x16d
        });
    } else {
        _0x2e5898 = $['cookie']('showGrid') === 'true' ? !![] : ![];
        $('#config-hidegrid')['text'](!_0x2e5898 ? 'Show' : 'Hide');
    };
    if (typeof $['cookie']('centerPallet') === 'undefined') {
        $['cookie']('centerPallet', 'true', {
            'expires': 0x16d
        });
    } else {
        _0x1030bc = $['cookie']('centerPallet') === 'true' ? !![] : ![];
        $('#config-centerpallet')['text'](!_0x1030bc ? 'Center' : 'Left');
        if (!_0x1030bc) {
            $('div#colors')['addClass']('colorsLeft');
            $('#app\x20>\x20div:nth-child(1)\x20>\x20div:nth-child(9)')['addClass']('moveUp');
            $('#app > div:nth-child(1) > div:nth-child(9) > div:nth-child(2)')['addClass']('groupUp');
            $('#app > div:nth-child(1) > div:nth-child(9) > div:nth-child(1)')['addClass']('groupUp');
        }
    };
    if (typeof $['cookie']('textDisplay') === 'undefined') {
        $['cookie']('textDisplay', _0x53770a, {
            'expires': 0x16d
        });
    } else {
        _0x53770a = $['cookie']('textDisplay');
        $('#config-text')['prop']('selectedIndex', _0x53770a);
        var _0x2529a4 = $('#config-text\x20option:selected')['text']();
        if (_0x2529a4 === 'Icons and Text') {
            _0x53770a = 0x0;
            $['cookie']('textDisplay', 0x0, {
                'expires': 0x16d
            });
            $('.menu-text')['show']();
            $('.menu-icon')['show']();
        } else {
            if (_0x2529a4 === 'Text\x20only') {
                _0x53770a = 0x1;
                $['cookie']('textDisplay', 0x1, {
                    'expires': 0x16d
                });
                $('.menu-text')['show']();
                $('.menu-icon')['hide']();
            } else {
                if (_0x2529a4 === 'Icons only') {
                    _0x53770a = 0x2;
                    $['cookie']('textDisplay', 0x2, {
                        'expires': 0x16d
                    });
                    $('.menu-text')['hide']();
                    $('.menu-icon')['show']();
                }
            }
        }
    };
    if (typeof $['cookie']('zoom') === 'undefined') {
        $['cookie']('zoom', _0x20966d, {
            'expires': 0x16d
        });
    } else {
        _0x20966d = $['cookie']('zoom');
        _0x1d7648 = _0x31cb55(Math['pow'](1.1, _0x20966d));
    };
    var _0x39f8cb = [];
    if (typeof $['cookie']('categories') === 'undefined') {
        $['cookie']('categories', '', {
            'expires': 0x16d
        });
    } else {
        var _0x39f8cb = $['cookie']('categories')['split']('\x20');
        _0x39f8cb = _0x39f8cb !== [''] ? _0x39f8cb : [];
    }
    console['log']('Checked\x20categories:\x20' + (_0x39f8cb !== [] ? _0x39f8cb : 'None'));
    var _0x438d8d = _0x252320 + '!data.json';
    $['ajax']({
        'type': 'GET',
        'url': _0x438d8d,
        'dataType': 'json',
        'success': function (_0x175d8a) {
            var _0xbd21a1 = jQuery['parseJSON'](JSON['stringify'](_0x175d8a))['Categories'];
            _0xbd21a1['sort']();
            for (let _0x1c42bc = 0x0; _0x1c42bc < _0xbd21a1['length']; _0x1c42bc++) {
                $('#config-categorie')['append']('<label><input type=\"checkbox\" name=\"' + _0xbd21a1[_0x1c42bc][0x1] + '\x22\x20' + ($['inArray'](_0xbd21a1[_0x1c42bc][0x1], _0x39f8cb) !== -0x1 ? 'checked=true' : '') + ' id=\"check-' + _0xbd21a1[_0x1c42bc][0x1] + '\x22>' + _0xbd21a1[_0x1c42bc][0x0] + '</label>');
            }
        }
    });
    console['log']('' + $['cookie']('cursorAlpha') + '\x20' + $['cookie']('gridAlpha') + '\x20' + $['cookie']('showCursor') + '\x20' + $['cookie']('showGrid') + '\x20' + $['cookie']('textDisplay') + '\x20' + $['cookie']('zoom') + '');
}
function _0x31f20() {
    $('#CursorColor')['change'](function () {
        _0x10b4a4($(this)['val'](), !![]);
    });
    $('#CookiesOk')['click'](function () {
        $['cookie']('WeUseCookies', 0x1, {
            'expires': 0x16d
        });
        $('#CookieBar')['slideUp'](0x64);
    });
    $('#discord-link')['click'](function () {
        window['open']('https://discord.io/prax', '_blank');
    });
    $('#inputName')['autocomplete']({
        'source': _0x4ae39a
    });
    $('#enter-goto')['click'](function () {
        var _0x455e7a = $('#inputName')['val']();
        if (_0x5ec7b9['hasOwnProperty'](_0x455e7a)) {
            let _0x4c41ec = Math['round'](_0x5ec7b9[_0x455e7a]['x'] + _0x5ec7b9[_0x455e7a]['width'] / 0x2);
            let _0x565211 = Math['round'](_0x5ec7b9[_0x455e7a]['y'] + _0x5ec7b9[_0x455e7a]['height'] / 0x2);
            window['location']['replace']('https://pixelcanvas.io/@' + _0x4c41ec + ',' + _0x565211);
        }
    });
    $('#inputName')['keypress'](function (_0x364e99) {
        if (_0x364e99['which'] == 0xd) {
            var _0x13d625 = $('#inputName')['val']();
            if (_0x5ec7b9['hasOwnProperty'](_0x13d625)) {
                let _0x5f2ca3 = Math['round'](_0x5ec7b9[_0x13d625]['x'] + _0x5ec7b9[_0x13d625]['width'] / 0x2);
                let _0x3c196a = Math['round'](_0x5ec7b9[_0x13d625]['y'] + _0x5ec7b9[_0x13d625]['height'] / 0x2);
                window['location']['replace']('https://pixelcanvas.io/@' + _0x5f2ca3 + ',' + _0x3c196a);
            }
        }
    });
    $('#open-goto')['click'](function () {
        var _0x595594 = $('#goto');
        var _0x5b06e2 = $('.GotoCss:visible');
        if (_0x5b06e2['length'] > 0x0) {
            $('.GotoCss:visible')['slideUp'](0x1f4);
            return;
        };
        _0x91440b();
        _0x595594['slideDown'](0x1f4);
    });
    var _0x3ccbe1 = $('#custom-slider-cursor');
    $('#slider-cursor')['slider']({
        'range': 'min',
        'min': 0x0,
        'max': 0x64,
        'value': $['cookie']('cursorAlpha'),
        'create': function () {
            var _0x32c61b = $(this)['slider']('value');
            _0x3ccbe1['text'](_0x32c61b);
            _0x3dfda4 = parseInt(_0x32c61b);
            $['cookie']('cursorAlpha', _0x3dfda4, {
                'expires': 0x16d
            });
        },
        'slide': function (_0x38f5db, _0x37268d) {
            var _0x5005f3 = _0x37268d['value'];
            _0x3ccbe1['text'](_0x37268d['value']);
            _0x3dfda4 = parseInt(_0x5005f3);
            $['cookie']('cursorAlpha', _0x3dfda4, {
                'expires': 0x16d
            });
        }
    });
    var _0x4a6ae1 = $('#custom-slider-grid');
    $('#slider-grid')['slider']({
        'range': 'min',
        'min': 0x0,
        'max': 0x64,
        'value': $['cookie']('gridAlpha'),
        'create': function () {
            var _0x40c484 = $(this)['slider']('value');
            _0x4a6ae1['text']($(this)['slider']('value'));
            _0x1854e1 = parseInt(_0x40c484);
            $['cookie']('gridAlpha', _0x1854e1, {
                'expires': 0x16d
            });
        },
        'slide': function (_0x3c2ab0, _0x4a4304) {
            var _0x5810af = _0x4a4304['value'];
            _0x4a6ae1['text'](_0x4a4304['value']);
            _0x1854e1 = parseInt(_0x5810af);
            $['cookie']('gridAlpha', _0x1854e1, {
                'expires': 0x16d
            });
        }
    });
    $('#config-reset')['click'](function () {
        if (window['confirm']('Are you sure?')) {
            _0x3dfda4 = 0x5a;
            _0x33f27d = 'NAVY';
            _0x1854e1 = 0x32;
            _0x48f333 = !![];
            _0x51d8f8 = !![];
            _0x2e5898 = !![];
            _0x53770a = 0x0;
            _0x20966d = 0x1e;
            _0x1030bc = !![];
            _0x3ccbe1['text'](_0x3dfda4);
            _0x4a6ae1['text'](_0x1854e1);
            $['cookie']('cursorAlpha', _0x3dfda4, {
                'expires': 0x16d
            });
            $['cookie']('gridAlpha', _0x1854e1, {
                'expires': 0x16d
            });
            $['cookie']('showCursor', _0x51d8f8, {
                'expires': 0x16d
            });
            $['cookie']('showGrid', _0x2e5898, {
                'expires': 0x16d
            });
            $['cookie']('textDisplay', _0x53770a, {
                'expires': 0x16d
            });
            $['cookie']('zoom', _0x20966d, {
                'expires': 0x16d
            });
            $['cookie']('centerPallet', _0x1030bc, {
                'expires': 0x16d
            });
            $['cookie']('categories', '', {
                'expires': 0x16d
            });
            $['cookie']('cursorColor', 'NAVY', {
                'expires': 0x16d
            });
            window['location']['reload']();
        }
    });
    $('#config-text')['click'](function () {
        var _0x522cb3 = $('#config-text option:selected')['text']();
        console['log'](_0x522cb3);
        if (_0x522cb3 === 'Icons\x20and\x20Text') {
            _0x53770a = 0x0;
            $['cookie']('textDisplay', 0x0, {
                'expires': 0x16d
            });
            $('.menu-text')['show']();
            $('.menu-icon')['show']();
        } else {
            if (_0x522cb3 === 'Text only') {
                _0x53770a = 0x1;
                $['cookie']('textDisplay', 0x1, {
                    'expires': 0x16d
                });
                $('.menu-text')['show']();
                $('.menu-icon')['hide']();
            } else {
                if (_0x522cb3 === 'Icons only') {
                    _0x53770a = 0x2;
                    $['cookie']('textDisplay', 0x2, {
                        'expires': 0x16d
                    });
                    $('.menu-text')['hide']();
                    $('.menu-icon')['show']();
                }
            }
        }
    });
    $('#config-hidecursor')['click'](function () {
        _0x51d8f8 = !_0x51d8f8;
        $('#config-hidecursor')['text'](!_0x51d8f8 ? 'Show' : 'Hide');
        $['cookie']('showCursor', _0x51d8f8, {
            'expires': 0x16d
        });
    });
    $('#config-hidegrid')['click'](function () {
        _0x2e5898 = !_0x2e5898;
        $('#config-hidegrid')['text'](!_0x2e5898 ? 'Show' : 'Hide');
        $['cookie']('showGrid', _0x2e5898, {
            'expires': 0x16d
        });
    });
    $('#config-hidezoom')['click'](function () {
        _0x48f333 = !_0x48f333;
        $('#config-hidezoom')['text'](!_0x48f333 ? 'Show' : 'Hide');
        if (_0x48f333) {
            $('#slider-vertical')['show']();
        } else {
            $('#slider-vertical')['hide']();
        };
        $['cookie']('showSlider', _0x48f333, {
            'expires': 0x16d
        });
    });
    $('#config-centerpallet')['click'](function () {
        _0x1030bc = !_0x1030bc;
        $('#config-centerpallet')['text'](!_0x1030bc ? 'Center' : 'Left');
        $('div#colors')['toggleClass']('colorsLeft');
        $('#app > div:nth-child(1) > div:nth-child(9)')['toggleClass']('moveUp');
        $('#app > div:nth-child(1) > div:nth-child(9) > div:nth-child(2)')['toggleClass']('groupUp');
        $('#app > div:nth-child(1) > div:nth-child(9) > div:nth-child(1)')['toggleClass']('groupUp');
        $['cookie']('centerPallet', _0x1030bc, {
            'expires': 0x16d
        });
    });
    $('#slider-vertical')['slider']({
        'orientation': 'vertical',
        'range': 'min',
        'min': 0xa,
        'max': 0x3c,
        'value': 0x1e,
        'slide': function (_0x54fa1c, _0x199d37) {
            _0x20966d = _0x199d37['value'];
            _0x1d7648 = _0x31cb55(Math['pow'](1.1, _0x20966d));
            $['cookie']('zoom', _0x20966d, {
                'expires': 0x16d
            });
        }
    });
    $('#open-settings')['click'](function () {
        var _0x54278d = $('#settings');
        var _0x1ac6e2 = $('.SettingsCss:visible');
        if (_0x1ac6e2['length'] > 0x0) {
            $('.SettingsCss:visible')['slideUp'](0x1f4);
            return;
        };
        _0x91440b();
        _0x54278d['slideDown'](0x1f4);
    });
    $('#close-settings')['click'](function () {
        var _0x6102d0 = $('#settings');
        if (_0x6102d0['is'](':visible')) {
            _0x6102d0['slideUp'](0x1f4);
            return;
        };
        var _0x329f2f = $('.SettingsCss:visible');
        if (_0x329f2f['length'] > 0x0) {
            $('.SettingsCss:visible')['slideUp'](0x1f4);
        }
    });
    $('#close-goto')['click'](function () {
        var _0xd4d587 = $('#goto');
        if (_0xd4d587['is'](':visible')) {
            _0xd4d587['slideUp'](0x1f4);
            return;
        };
        var _0x46ae16 = $('.GotoCss:visible');
        if (_0x46ae16['length'] > 0x0) {
            $('.GotoCss:visible')['slideUp'](0x1f4);
        }
    });
    $('#minimap-content')['mouseover'](function () {
        if ($('#minimap-content')['hasClass']('minimize')) {
            $('#minimap-content')['removeClass']('minimize');
        }
    });
    $('#hide-map')['click'](function () {
        $('#minimap-content')['hide']();
        $('#minimap-backup')['show']();
        $['cookie']('showMinimap', 'false', {
            'expires': 0x16d
        });
    });
    $('#minimap-backup')['click'](function () {
        $('#minimap-content')['show']();
        $('#minimap-backup')['hide']();
        $['cookie']('showMinimap', 'true', {
            'expires': 0x16d
        });
    });
    $('#gameWindow')['mousemove'](function () {
        var _0x5d5d09 = $('div[style*=\"position: absolute; left: 1em; bottom: 1em;\"]')[0x0]['innerText']['replace']('(', '')['replace'](')', '')['split'](',');
        _0x219cc2 = parseInt(_0x5d5d09[0x0]);
        _0x4ccfee = parseInt(_0x5d5d09[0x1]);
        _0x284ee0();
        _0x27ac6d();
        _0x3ff34c();
    });
}
function _0x10b4a4(_0x50e5d1, _0x53583f = ![]) {
    switch (_0x50e5d1) {
    default: ;
    case 'NAVY': {
            $('#CursorColor')['css']('background-color', '#001f3f');
            if (_0x53583f) {
                $['cookie']('cursorColor', 'NAVY', {
                    'expires': 0x16d
                });
            };
            _0x33f27d = '#001f3f';
            return '#001f3f';
        }
        break;
    case 'BLUE': {
            $('#CursorColor')['css']('background-color', '#0074D9');
            if (_0x53583f) {
                $['cookie']('cursorColor', 'BLUE', {
                    'expires': 0x16d
                });
            };
            _0x33f27d = '#0074D9';
            return '#0074D9';
        }
        break;
    case 'AQUA': {
            $('#CursorColor')['css']('background-color', '#7FDBFF');
            if (_0x53583f) {
                $['cookie']('cursorColor', 'AQUA', {
                    'expires': 0x16d
                });
            };
            _0x33f27d = '#7FDBFF';
            return '#7FDBFF';
        }
        break;
    case 'TEAL': {
            $('#CursorColor')['css']('background-color', '#39CCCC');
            if (_0x53583f) {
                $['cookie']('cursorColor', 'TEAL', {
                    'expires': 0x16d
                });
            };
            _0x33f27d = '#39CCCC';
            return '#39CCCC';
        }
        break;
    case 'OLIVE': {
            $('#CursorColor')['css']('background-color', '#3D9970');
            if (_0x53583f) {
                $['cookie']('cursorColor', 'OLIVE', {
                    'expires': 0x16d
                });
            };
            _0x33f27d = '#3D9970';
            return '#3D9970';
        }
        break;
    case 'GREEN': {
            $('#CursorColor')['css']('background-color', '#2ECC40');
            if (_0x53583f) {
                $['cookie']('cursorColor', 'GREEN', {
                    'expires': 0x16d
                });
            };
            _0x33f27d = '#2ECC40';
            return '#2ECC40';
        }
        break;
    case 'LIME': {
            $('#CursorColor')['css']('background-color', '#01FF70');
            if (_0x53583f) {
                $['cookie']('cursorColor', 'LIME', {
                    'expires': 0x16d
                });
            };
            _0x33f27d = '#01FF70';
            return '#01FF70';
        }
        break;
    case 'YELLOW': {
            $('#CursorColor')['css']('background-color', '#FFDC00');
            if (_0x53583f) {
                $['cookie']('cursorColor', 'YELLOW', {
                    'expires': 0x16d
                });
            };
            _0x33f27d = '#FFDC00';
            return '#FFDC00';
        }
        break;
    case 'ORANGE': {
            $('#CursorColor')['css']('background-color', '#FF851B');
            if (_0x53583f) {
                $['cookie']('cursorColor', 'ORANGE', {
                    'expires': 0x16d
                });
            };
            _0x33f27d = '#FF851B';
            return '#FF851B';
        }
        break;
    case 'RED': {
            $('#CursorColor')['css']('background-color', '#FF4136');
            if (_0x53583f) {
                $['cookie']('cursorColor', 'RED', {
                    'expires': 0x16d
                });
            };
            _0x33f27d = '#FF4136';
            return '#FF4136';
        }
        break;
    case 'MAROON': {
            $('#CursorColor')['css']('background-color', '#85144b');
            if (_0x53583f) {
                $['cookie']('cursorColor', 'MAROON', {
                    'expires': 0x16d
                });
            };
            _0x33f27d = '#85144b';
            return '#85144b';
        }
        break;
    case 'FUCHSIA': {
            $('#CursorColor')['css']('background-color', '#F012BE');
            if (_0x53583f) {
                $['cookie']('cursorColor', 'FUCHSIA', {
                    'expires': 0x16d
                });
            };
            _0x33f27d = '#F012BE';
            return '#F012BE';
        }
        break;
    case 'PURPLE': {
            $('#CursorColor')['css']('background-color', '#B10DC9');
            if (_0x53583f) {
                $['cookie']('cursorColor', 'PURPLE', {
                    'expires': 0x16d
                });
            };
            _0x33f27d = '#B10DC9';
            return '#B10DC9';
        }
        break;
    case 'BLACK': {
            $('#CursorColor')['css']('background-color', '#111111');
            if (_0x53583f) {
                $['cookie']('cursorColor', 'BLACK', {
                    'expires': 0x16d
                });
            };
            _0x33f27d = '#111111';
            return '#111111';
        }
        break;
    case 'GRAY': {
            $('#CursorColor')['css']('background-color', '#AAAAAA');
            if (_0x53583f) {
                $['cookie']('cursorColor', 'GRAY', {
                    'expires': 0x16d
                });
            };
            _0x33f27d = '#AAAAAA';
            return '#AAAAAA';
        }
        break;
    case 'SILVER': {
            $('#CursorColor')['css']('background-color', '#DDDDDD');
            if (_0x53583f) {
                $['cookie']('cursorColor', 'SILVER', {
                    'expires': 0x16d
                });
            };
            _0x33f27d = '#DDDDDD';
            return '#DDDDDD';
        }
        break;
    }
}
function _0x31cb55(_0xacba99) {
    return parseInt(Math['min'](_0x3cfc20, Math['max'](0x1, _0xacba99)));
}
function _0x1cf426() {
    return !$('#minimap-backup')['is'](':visible') && $('#minimap-content')['is'](':visible');
}
function _0x91440b() {
    var _0xdf4094 = $('#settings');
    if (_0xdf4094['is'](':visible')) {
        _0xdf4094['slideUp'](0x1f4);
        return;
    };
    var _0x3fdd2f = $('#goto');
    if (_0x3fdd2f['is'](':visible')) {
        _0x3fdd2f['slideUp'](0x1f4);
        return;
    }
}
function _0x121b2a() {
    var _0x1aed15 = _0x252320 + '!data.json';
    $['ajax']({
        'type': 'GET',
        'url': _0x1aed15,
        'dataType': 'json',
        'success': function (_0x475e3f) {
            _0x200629(jQuery['parseJSON'](JSON['stringify'](_0x475e3f))['Templates']);
        }
    });
    setTimeout(_0x121b2a, 0x3c * 0x3c * 0x3c);
}
function _0x35533c(_0x158856) {
    var _0x4c0de7 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i['exec'](_0x158856);
    return _0x4c0de7 ? {
        'r': parseInt(_0x4c0de7[0x1], 0x10),
        'g': parseInt(_0x4c0de7[0x2], 0x10),
        'b': parseInt(_0x4c0de7[0x3], 0x10)
    }
     : null;
}
function _0x3ff34c() {
    _minimap_cursor['clearRect'](0x0, 0x0, minimap['width'], minimap['height']);
    if (!_0x1cf426() || !_0x51d8f8) {
        return;
    };
    _minimap_cursor['beginPath']();
    var _0x57b42c = minimap['width'] + _0x1d7648;
    var _0x581460 = minimap['height'] + _0x1d7648;
    var _0x21342a = _0x57b42c / 0x2;
    var _0x556681 = _0x581460 / 0x2;
    var _0x46b0cf = _0x35533c(_0x33f27d);
    _minimap_cursor['lineWidth'] = parseInt(0.15 * _0x1d7648);
    _minimap_cursor['strokeStyle'] = 'rgba(' + _0x46b0cf['r'] + ',\x20' + _0x46b0cf['g'] + ',\x20' + _0x46b0cf['b'] + ',\x20' + _0x3dfda4 / 0x64 + ')';
    _minimap_cursor['rect'](_0x21342a - _0x1d7648 / 0x2, _0x556681 - _0x1d7648 / 0x2, _0x1d7648, _0x1d7648);
    _minimap_cursor['stroke']();
}
function _0x27ac6d() {
    var _0x277ff5 = 0x0;
    _minimap_grid['clearRect'](0x0, 0x0, minimap['width'], minimap['height']);
    if (!_0x1cf426() || !_0x2e5898 || _0x1d7648 < 0x11) {
        let _0x113f8c = minimap['width'] + _0x1d7648;
        for (let _0x1948fd = 0x0; _0x1948fd <= _0x113f8c; _0x1948fd += _0x1d7648) {
            _0x277ff5 += 0x1;
        }
    } else {
        _minimap_grid['beginPath']();
        let _0x125485 = minimap['width'] + _0x1d7648;
        var _0x33ad50 = minimap['height'] + _0x1d7648;
        var _0x2d3aa6 = minimap['width'] / 0x2 % _0x1d7648 - _0x1d7648;
        var _0x4a0311 = minimap['height'] / 0x2 % _0x1d7648 - _0x1d7648;
        console['log']('Drawing grid board = [' + _0x125485 + ',\x20' + _0x33ad50 + '] and offset = [' + _0x2d3aa6 + ',\x20' + _0x4a0311 + ']');
        _minimap_grid['fillStyle'] = 'rgba(34, 34, 34, ' + _0x1854e1 / 0x64 + ')';
        var _0x5e0ad6 = 0x1;
        var _0x69b8f2 = _0x5e0ad6 % 0x2 / 0x2;
        _minimap_grid['translate'](_0x69b8f2, 0x0);
        for (let _0x385ce6 = 0x0; _0x385ce6 <= _0x125485; _0x385ce6 += _0x1d7648) {
            _0x277ff5 += 0x1;
            _minimap_grid['fillRect'](_0x385ce6 + _0x2d3aa6, _0x4a0311, _0x5e0ad6, _0x33ad50);
        };
        _minimap_grid['translate'](-_0x69b8f2, 0x0);
        _minimap_grid['translate'](0x0, _0x69b8f2);
        for (var _0xc37d0 = 0x0; _0xc37d0 <= _0x33ad50; _0xc37d0 += _0x1d7648) {
            _minimap_grid['fillRect'](_0x2d3aa6, _0xc37d0 + _0x4a0311, _0x125485, _0x5e0ad6);
        };
        _minimap_grid['translate'](0x0, -_0x69b8f2);
        _minimap_grid['stroke']();
    };
    _0x48093a = _0x277ff5;
    console['log']('Hitzone', _0x48093a);
}
function _0xd2e879(_0x3d8a59, _0x30c51f, _0x598e46, _0x330a1e, _0x2d8869, _0x7ed6e7) {
    _0x4a4f1f = 0x0;
    $('#minimap-content')['removeClass']('minimize');
    var _0x5ade87 = minimap['width'] / _0x1d7648 / 0x2;
    var _0x31d5b3 = minimap['height'] / _0x1d7648 / 0x2;
    var _0x4541e7 = (_0x5ade87 + _0x598e46) * _0x1d7648;
    var _0x373b96 = (_0x31d5b3 + _0x330a1e) * _0x1d7648;
    var _0x46705e = _0x1d7648 * _0x2d8869;
    var _0x4950b1 = _0x1d7648 * _0x7ed6e7;
    console['log']('x: ' + _0x598e46 + '\x20y:\x20' + _0x330a1e + ' W: ' + _0x2d8869 + ' H: ' + _0x7ed6e7 + '\x20|\x20z:\x20(' + _0x1d7648 + ') (' + _0x20966d + ')');
    if (_0x860272['hasOwnProperty'](_0x30c51f)) {
        _0x3d8a59['drawImage'](_0x860272[_0x30c51f], _0x4541e7, _0x373b96, _0x46705e, _0x4950b1);
    } else {
        var _0x409670 = new Image();
        _0x409670['src'] = _0x252320 + _0x5ec7b9[_0x30c51f]['name'];
        _0x409670['onload'] = function () {
            _0x3d8a59['drawImage'](_0x409670, _0x4541e7, _0x373b96, _0x46705e, _0x4950b1);
            _0x860272[_0x30c51f] = _0x409670;
        };
    }
}
function _0x200629(_0x5538ac) {
    _0x5ec7b9 = _0x5538ac;
    for (let _0x11cc6f in _0x5538ac) {
        if (!_0x4ae39a['includes'](_0x11cc6f)) {
            _0x4ae39a['push'](_0x11cc6f);
        }
    }
}
function _0x284ee0() {
    var _0x2e5abe = [];
    if (!_0x1cf426()) {
        return;
    };
    _minimap['clearRect'](0x0, 0x0, minimap['width'], minimap['height']);
    for (var _0x32c00d in _0x5ec7b9) {
        if (_0x5ec7b9['hasOwnProperty'](_0x32c00d)) {
            var _0x4a1e76 = [];
            $('#config-categorie input:checked')['each'](function () {
                _0x4a1e76['push']($(this)['attr']('name'));
            });
            if ($['cookie']('categories') !== _0x4a1e76['join']('\x20')) {
                $['cookie']('categories', _0x4a1e76['join']('\x20'), {
                    'expires': 0x16d
                });
            };
            var _0x2d4942 = _0x5ec7b9[_0x32c00d]['x'];
            var _0x420bc2 = _0x5ec7b9[_0x32c00d]['y'];
            var _0x233277 = _0x2d4942 + _0x5ec7b9[_0x32c00d]['width'];
            var _0x136840 = _0x420bc2 + _0x5ec7b9[_0x32c00d]['height'];
            var _0x560090 = _0x2d4942 - _0x48093a;
            var _0x1d7edc = _0x233277 + _0x48093a;
            var _0x1899cb = _0x420bc2 - _0x48093a;
            var _0x3c6543 = _0x136840 + _0x48093a;
            _0x2e5abe['push'](_0x219cc2['between'](_0x560090, _0x1d7edc) && _0x4ccfee['between'](_0x3c6543, _0x1899cb) && _0x4a1e76['some'](_0x5a9a7d => _0x5ec7b9[_0x32c00d]['categories']['includes'](_0x5a9a7d)));
            if (_0x219cc2['between'](_0x560090, _0x1d7edc) && _0x4ccfee['between'](_0x3c6543, _0x1899cb) && _0x4a1e76['some'](_0x3f10b0 => _0x5ec7b9[_0x32c00d]['categories']['includes'](_0x3f10b0))) {
                _0x4a4f1f = 0x0;
                $('#minimap-content')['removeClass']('minimize');
                console['log']('Drawing', _0x32c00d);
                _0xd2e879(_minimap, _0x32c00d, _0x2d4942 - _0x219cc2, _0x420bc2 - _0x4ccfee, _0x5ec7b9[_0x32c00d]['width'], _0x5ec7b9[_0x32c00d]['height']);
            }
        }
    };
    if (!_0x2e5abe['includes'](!![])) {
        if (_0x4a4f1f < 0x3) {
            _0x4a4f1f++;
        } else {
            $('#minimap-content')['addClass']('minimize');
        }
    }
}
function _0x4a7e78() {
    minimap = $('#minimap')['get'](0x0);
    _minimap = minimap['getContext']('2d');
    _minimap['imageSmoothingEnabled'] = ![];
    _minimap['webkitImageSmoothingEnabled'] = ![];
    _minimap['mozImageSmoothingEnabled'] = ![];
    minimap_grid = $('#minimap-grid')['get'](0x0);
    _minimap_grid = minimap_grid['getContext']('2d');
    _minimap_grid['imageSmoothingEnabled'] = ![];
    _minimap_grid['webkitImageSmoothingEnabled'] = ![];
    _minimap_grid['mozImageSmoothingEnabled'] = ![];
    minimap_cursor = $('#minimap-cursor')['get'](0x0);
    _minimap_cursor = minimap_cursor['getContext']('2d');
    _minimap_cursor['imageSmoothingEnabled'] = ![];
    _minimap_cursor['webkitImageSmoothingEnabled'] = ![];
    _minimap_cursor['mozImageSmoothingEnabled'] = ![];
}