module.exports = function towelSort(matrix) {
    let result = []
    if (matrix) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (i % 2 === 0) {
                    result.push(matrix[i][j])
                } else {
                    let index = matrix[i].length - 1 - j
                    result.push(matrix[i][index])
                }
            }
        }
    } else {
        return result = []
    }

    return result
}