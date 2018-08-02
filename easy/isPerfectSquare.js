const isPerfectSquare = num => {
    if((num ** 0.5).toString().split('.').length === 1) return true;
    return false;
};
