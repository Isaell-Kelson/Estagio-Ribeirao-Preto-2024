function verificationStringA(text) {
    let count = 0;

    for (let i = 0; i < text.length; i++) {
        if (text[i].toLowerCase() === 'a') {
            count++;
        }
    }

    console.log(`Texto: ${text}`);

    if (count > 0) {
        console.log(`A letra 'a' aparece ${count} vez(es) na string.`);
    } else {
        console.log("A letra 'a' não aparece na string.");
    }
}

const text = "O rato roeu a roupa do rei de roma";

verificationStringA(text);
