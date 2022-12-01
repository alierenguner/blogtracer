// Credit: https://stackoverflow.com/questions/610406/javascript-printf-string-format/4673436#4673436
const stringFormat = (text: string, [...args]) => {
    return text.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] != 'undefined'
            ? args[number]
            : match
            ;
    });
};

export default stringFormat;