module.exports = function (func) {
    const result = /\(\s*([^)]+?)\s*\)/.exec(func);
    if (!result || !result[1] || !result[1].length) {
        return 0;
    }

    var argumentStr = result[1].trim();
    if (argumentStr.substring(argumentStr.length - 1, argumentStr.length) === ',') {
        argumentStr = argumentStr.substring(0, argumentStr.length - 1);
    }

    return argumentStr.replace(/\{[^\}]*\}/g, 'param') .split(/\s*,\s*/).length;
}
