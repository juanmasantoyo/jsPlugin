/*
    jsPlugin by Juanma Santoyo, version 1.0.0.
    http://www.juanmasantoyo.es
*/

(function ($)
{
    var globals = {
        settings: null
    };

    var methods = {
        // This method inits the jsCarousel
        init: function (options)
        {
            var _this = this;

            // Extends settings with passed options
            globals.settings = $.extend({
            
            }, options);

            return this.each(function ()
            { 
            
            });
        }
        , _isPublic: function (method)
        {
            return method.charAt(0) != '_';
        }
    };

    var callbacks = {
    };

    $.fn.jsPlugin = function (method)
    {
        // Call the method if exists.
        if (methods[method] && methods._isPublic(method))
        {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }
        else if (typeof method === 'object' || !method)
        {
            return methods.init.apply(this, arguments);
        }
        else
        {
            $.error('Method ' + method + ' does not exist on jQuery.jsPlugin');
        }
    }
})(jQuery);