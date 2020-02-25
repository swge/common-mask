import mask from "../src/mask";

const strArray = [
    "Array item 1",
    "Array item 2",
    "Array item 3"
];

const objArray = [
    {
        data: "Object in array 1",
        text: "No way"
    },
    {
        data: "Object in array 2",
        text: "No way"
    },
    {
        data: "Object in array 3",
        text: "No way"
    }
];

const obj = {
    property1: "Object property 1",
    property2: "Object property 2",
    property3: "Object property 3"
}

let maskedData = mask({a: true}, {a: 12, b:13});
console.log(JSON.stringify(maskedData))

let plainData = {
    strArray,
    objArray,
    obj
};
let rule = {
    strArray: true,
    objArray: {
        data: true
    },
    obj: {
        property2: true
    }
};
maskedData = mask(rule, plainData);
console.log(JSON.stringify(maskedData, null, 4));