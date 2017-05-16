'use strict';
var HeadingText = nodecg.Replicant('HeadingText', {defaultValue: 'Ass'});

HeadingText.on('change', function(newValue, oldValue) {
    console.log(newValue);
    $('#Heading').text(newValue);
});