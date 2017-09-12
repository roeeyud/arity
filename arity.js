module.exports = function (func) {
    const result = /\(\s*([^)]+?)\s*\)/.exec(func);
    if (!result || !result[1] || !result[1].length) {
        return 0;
    }
    return result[1].replace(/\{[^\}]*\}/g, 'param') .split(/\s*,\s*/).length; // eslint-disable-line
}
