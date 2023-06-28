export const converter = (temp) => {
        return `${Math.trunc(((temp - 32) * 5 / 9 ).toFixed(2))}\xB0`
    
}

export const padNum = (num) => {
    const stringNum = num + '';
    const stringLen = stringNum.length;

    if (stringLen === 1) {
      return '0' + stringNum
    } else {
      return stringNum;
    }
  }

