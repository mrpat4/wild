
function ChangeLeftAndRightWithDirection(name, direction) {
    return direction === "ltr" ? name : name === `right` ? `left` : `right`
}

export default ChangeLeftAndRightWithDirection