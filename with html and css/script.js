// const letters = "ZYYXZ";
// const size = 5;
// const direction = "horizontal";
// const letters = prompt("Enter letters:");
// GenerateAscii("zyzz", 33, "vertical");





function GenerateAscii(letters, size, direction) {
    // ++++++++++++++++++++++++++++++++++++++++++   VALIDATION    +++++++++++++++++++++++++++++++++++
    letters = (letters.replace(/\s/g, '')).toUpperCase();
    const regex = /[^XYZ]/;

    if (regex.test(letters)) {
        console.log("There is a character that is not X, Y, or Z.");
        return;
    }

    if (size % 2 === 0 || size < 3) {
        console.log("Size is not valid. Size must be an odd number equal to or greater than 3.");
        return;
    }

    if ((direction !== "horizontal" && direction !== "vertical") || (size % 2 === 0 || size < 3)) {
        console.log("Direction is not valid");
    }

    let combined = [];
    for (let i = 0; i < letters.length; i++) {
        const char = letters[i];
        let art;

        if (char == 'X')
            art = Xascii(size);
        else if (char == 'Y')
            art = Yascii(size);
        else
            art = Zascii(size);

        if (direction == 'horizontal') {
            if (combined.length === 0) {
                combined = art;
            } else {
                for (let i = 0; i < combined.length; i++) {
                    combined[i] = combined[i].concat(' ', art[i]);
                    // if (i > 100) {
                    //     break;
                    // }
                }
            }
        } else if ("vertical") {
            if (combined.length !== 0)
                combined.push(Array(art[0].length).fill(' '));
            combined.length == 0 ? combined = art : combined = combined.concat(art);
        }

    }
    combined = combined.map(innerArray => innerArray.join(' ')).join('\n');
    // console.log(combined);
    document.getElementById("ascii").textContent = combined;


    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


    // ++++++++++++++++++++++++++++++++++++++++++++++++   PREP ARRAY    +++++++++++++++++++++++++++++++++++++++


    function Blanks() {
        ascii = [];
        for (let i = 0; i < size; i++) {
            let row = [];
            for (let j = 0; j < size; j++) {
                row.push(" ");
            }
            ascii.push(row);
        }
        return ascii;
    }

    // ++++++++++++++++++++++++++++++++++++++++++++++++    LETTERS    +++++++++++++++++++++++++++++++++++++++

    function Xascii(size) {
        let ascii = Blanks();

        for (let layer = 0; layer < size; layer++) {
            ascii[layer][layer] = 'O';
            ascii[layer][size - layer - 1] = 'O';
        }
        return ascii;
    }


    function Yascii(size) {
        const middle = Math.floor(size / 2);
        let ascii = Blanks();

        for (let layer = 0; layer < size; layer++) {
            if (layer < middle) {
                ascii[layer][layer] = 'O';
                ascii[layer][size - layer - 1] = 'O';
            } else {
                ascii[layer][middle] = 'O';
            }
        }
        return ascii;
    }


    function Zascii(size) {
        let ascii = Blanks();


        for (let layer = 0; layer < size; layer++) {
            if (layer == 0 || layer == size - 1) {
                ascii[layer] = Array(size).fill('O');
            } else {
                ascii[layer][size - layer - 1] = 'O';
            }
        }
        return ascii;
    }
}












