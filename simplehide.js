/*!
 * @preserve
 *
 * SimpleHide jQuery Plugin
 * Author: @rwoloszyn
 * Project home: https://github.com/rwoloszyn/simplehide.js
 * Version: 1.0.0
 * Licensed under the MIT license
 * 
 *
 * Some config taken from http://jedfoster.github.io/Readmore.js
 * and official gulp, livereload and VS Code official documentations.
 */

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    'use strict';

    var simplehide = 'simplehide',
        defaults = {
            showLink: '<a href="#">Show...</a>'
        },
        uniqueIdCounter = 0;


    function uniqueId(prefix) {
        var id = ++uniqueIdCounter;

        return String(prefix == null ? 'sh-' : prefix) + id;
    }

    function SimpleHide(element, options) {
        this.element = element;
        this._name = simplehide;
        this._defaults = defaults;

        this.options = $.extend({}, defaults, options);

        this.init();
    }

    SimpleHide.prototype = {
        init: function () {
            var current = $(this.element);
            //hide content
            current.hide();

            var id = current.attr('id') || uniqueId()

            current.after($(this.options.showLink)
                .on('click', (function (_this) {
                    return function (event) {
                        _this.show(this, current[0], event);
                    };
                })(this))
                .attr({
                    'data-simplehide-show': id,
                    'aria-controls': id
                }));
        },

        show: function (trigger, element, event) {
            if (event) {
                event.preventDefault();
            }

            if (!trigger) {
                trigger = $('[aria-controls="' + this.element.id + '"]')[0];
            }

            if (!element) {
                element = this.element;
            }
            //Show content
            $(element).show();
            //Hide link trigger
            $(trigger).hide();
        },

        destroy: function () {
            $(this.element).each(function () {
                var current = $(this);

                current.attr({
                    'data-simplehide': null,
                    'aria-expanded': null
                }).next('[data-simplehide-show]')
                    .remove();

                current.removeData();
            });
        }
    };


    $.fn.simplehide = function (options) {
        var args = arguments,
            selector = this.selector;

        options = options || {};

        if (typeof options === 'object') {
            return this.each(function () {
                if ($.data(this, 'plugin_' + simplehide)) {
                    var instance = $.data(this, 'plugin_' + simplehide);
                    instance.destroy.apply(instance);
                }

                options.selector = selector;

                $.data(this, 'plugin_' + simplehide, new SimpleHide(this, options));
            });
        }
        else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
            return this.each(function () {
                var instance = $.data(this, 'plugin_' + simplehide);
                if (instance instanceof SimpleHide && typeof instance[options] === 'function') {
                    instance[options].apply(instance, Array.prototype.slice.call(args, 1));
                }
            });
        }
    };
}));