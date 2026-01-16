export default function orderByProps(obj, orders) {
    let result = []

    const keys = Object.keys(obj)
    const orderKeys = []
    const unorderKeys = []

    orders.forEach((order) => {
        if (keys.includes(order)) {
        orderKeys.push(order);
        }
    });
    
    keys.forEach((key) => {
        if (!orders.includes(key)) {
        unorderKeys.push(key)
        }
    });

    const cortedKeys = [...orderKeys, ...unorderKeys.sort((a,b) => a.localeCompare(b))]
    for (let key of cortedKeys) {
        result.push({'key': key, 'value': obj[key]})
    }
    return result
}