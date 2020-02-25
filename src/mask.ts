export default function mask(maskRule: any, data: any) {
    return _mask(maskRule, data);
}

function _mask(maskRule: any, data: any) {
    if ((typeof data === 'string' || typeof data === 'boolean' || typeof data === 'number') && maskRule) {
        return data;
    }

    let result: any = {};
    for (let propertyName of Object.getOwnPropertyNames(data)) {
        let property = data[propertyName];
        if (maskRule[propertyName] && property) {
            if (Array.isArray(property)) {
                result[propertyName] = [];
                for (let item of property) {
                    result[propertyName].push(mask(maskRule[propertyName], item));
                }
            } else {
                result[propertyName] = mask(maskRule[propertyName], property);
            }
        }
    }
    return result;
}