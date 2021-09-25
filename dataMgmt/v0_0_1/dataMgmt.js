// dataMgmt.js  data management utilities
// conversion from text to integer,date objects and floats
// parsing of text
// reading of text files shared thru google drive
// author: Jesus Ramiro Roman-Acosta
// jrra@fulbrightmail.org
function getIntegerFromText(text) {
    if (typeof text === 'undefined' || text === null || text === '') {
        return null;
    } else {
        try {
            return parseInt(text.replace(/,/g, ''));
        } catch (error) {
            return null;
        };
    };
};
// converts text to date object
function getDateFromText(text) {
    if (typeof text === 'undefined' || text === null || text === '') {
        return null;
    } else {
        try {
            return new Date(text);
        } catch (error) {
            return null;
        };
    };
};
// converts text to float
function getFloatFromText(text) {
    if (typeof text === 'undefined' || text === null || text === '') {
        return null;
    } else {
        try {
            return parseFloat(text.replace(/,/g, ''));
        } catch (error) {
            return null;
        };
    };
};
// converts text to text "null" when text is ''
function getTextFromText() {
    if (typeof text === 'undefined' || text === null || text === '') {
        return null;
    } else {
        try {
            return text;
        } catch (error) {
            return null;
        };
    }
}
// function to parse data retrieved from a CSV file
async function parseCSVData(text) {
    var nestedArray = new Array();
    var vectors = text.split('\r\n')
    if (Array.isArray(vectors) == true) {
        for (let m=0; m<vectors.length; m++) {
            var textLine = vectors[m];
            if (typeof textLine == 'string') {
                var columns = textLine.split(String.fromCharCode(44))
                if (Array.isArray(columns) == true) {
                    //nestedArray[m] = new Array(columns)
                    nestedArray.push(columns)
                }
            }
        }
    }
    return nestedArray;
}
// function to parse data retrieved from a TSV file
async function parseTSVData(text) {
    var nestedArray = new Array();
    var vectors = text.split('\r\n');
    if (Array.isArray(vectors) == true) {
        for (let m=0; m<vectors.length; m++) {
            var textLine = vectors[m];
            if (typeof textLine == 'string') {
                var columns = textLine.split(String.fromCharCode(9))
                if (Array.isArray(columns) == true) {
                    //nestedArray[m] = new Array(columns);
                    nestedArray.push(columns);
                };
            };
        };
    };
    return nestedArray;
};
// function to read text data from google sheets (published as text file:csv or tsv)
async function readTextFileFromGoogleSheets(url) {
    var fetchOptions = {
        method: 'GET',
        headers: {'Content-Type': 'text/csv;charset=UTF-8'}
    };
    try {
        var response = await fetch(url, fetchOptions)
        if (response.status === 200) {
            var data = await response.text();
            return data;
        } else {
            return null;
        }
    } catch(error) {
        return null;
    }        
};
