ˋˋˋ

    function calculaNota(ex, p1, p2) {
        let media = (ex + p1 + p2) / 3
        let result;
        if (media >= 9) {
            result = 'A'
        } else if (media < 9 && media >= 7.5) {
            result = 'B'
        } else if (media < 7.5 && media >= 6) {
            result = 'C'
        } else {
            result = 'D'
        }
  
        return result
    }

ˋˋˋ