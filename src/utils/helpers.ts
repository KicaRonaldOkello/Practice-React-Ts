
const bodyLimit = (string, limit=100, end="...") => {
    const newString = String(string);

    if (newString.length <= limit) return newString;
    return newString.slice(0, limit).trim() + end;
}

export default bodyLimit;