/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
    return str && str.length > maxlength ? str.slice(0, maxlength-1) + "…" : (str || "");
}
