export const quantityEvaluate = (quantity) => {
    if (quantity <= 0) {
        return 0
    } else if (quantity > 0 && quantity <= 3) {
        return 1
    } else if (quantity >= 3 && quantity <= 5) {
        return 2
    } else {
        return 3
    }
}