angular.module('app')

.filter('num', function() {
    return function(input) {
        return parseInt(input, 10);
    }
});


// capitalize field and remove '_'
angular.module('app')
    .filter('prettyField', function() {
        return function(field) {
            if (field) {
                var split = field.split('_');
                for (var i = 0; i < split.length; i++) {
                    split[i] = (!!split[i]) ? split[i].charAt(0).toUpperCase() + split[i].substr(1).toLowerCase() : '';
                }
                return split.join(' ');
            }
        };
    });

angular.module('app')
    .filter('capitalize', function() {
        return function(input) {
            return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
        }
    });