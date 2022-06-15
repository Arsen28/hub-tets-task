export const toUppercaseFirstLetterInSentence = (mySentence: string) => {
    const words = mySentence.split("_");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1) + " ";
    }

    words.join(" ");

    return words;
}


