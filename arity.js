export default function (func) {
    const result = /\(\s*([^)]+?)\s*\)/.exec(func);
    if (_.isEmpty(result[1])) {
        return 0;
    }
    return result[1].replace(/\{[^\}]*\}/g, 'param') .split(/\s*,\s*/).length; // eslint-disable-line
}
