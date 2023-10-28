/**
 * 
 * @param {{}} props The Object 
 * @param {{}} res The response object to the browseer
 * @returns {Array} The Array
 */


function handleMissingProps(props, res) {
    const missingProps = [];

    for (const key in props) {

        if (props[key] === undefined || props[key] == "") {
            missingProps.push(key);
        }
    }

    if (missingProps.length > 0) {
        res.status(400).json({
            message: `missing properties: ${missingProps}`
        })
        return true;
    }
    return false;
}


module.exports = { handleMissingProps }