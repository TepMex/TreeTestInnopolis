const DICTIONARY = [
    "AF|Afghanistan",
    "AL|Albania",
    "DZ|Algeria",
    "AS|American Samoa",
    "AD|Andorra",
    "AO|Angola",
    "AI|Anguilla",
    "AQ|Antarctica",
    "AG|Antigua And Barbuda",
    "AR|Argentina",
    "AM|Armenia",
    "AW|Aruba",
    "AU|Australia",
    "AT|Austria",
    "AZ|Azerbaijan",
    "BS|Bahamas",
    "BH|Bahrain",
    "BD|Bangladesh",
    "BB|Barbados",
    "BY|Belarus",
    "BE|Belgium",
    "BZ|Belize",
    "BJ|Benin",
    "BM|Bermuda",
    "BT|Bhutan",
    "BO|Bolivia",
    "BA|Bosnia And Herzegovina",
    "BW|Botswana",
    "BV|Bouvet Island",
    "BR|Brazil",
    "IO|British Indian Ocean Territory",
    "BN|Brunei Darussalam",
    "BG|Bulgaria",
    "BF|Burkina Faso",
    "BI|Burundi",
    "KH|Cambodia",
    "CM|Cameroon",
    "CA|Canada",
    "CV|Cape Verde",
    "KY|Cayman Islands",
    "CF|Central African Republic",
    "TD|Chad",
    "CL|Chile",
    "CN|China",
    "CX|Christmas Island",
    "CC|Cocos (keeling) Islands",
    "CO|Colombia",
    "KM|Comoros",
    "CG|Congo",
    "CD|Congo, The Democratic Republic Of The",
];

const getRandomValue = () => DICTIONARY[Math.floor(Math.random() * DICTIONARY.length)];

const generateChilds = (depth) => {
    const childsCount = 1 + Math.floor(Math.random() * 5);

    return Array(childsCount).fill().map(() => ({
        value: getRandomValue(),
        childs: depth === 1 ? [] : generateChilds(depth - 1),
    }));
};

const generateStub = () => {
    const DEPTH = 3 + Math.floor(Math.random() * 6);
    return {
        value: getRandomValue(),
        childs: generateChilds(DEPTH - 1)
    };
};

module.exports = {
    generateStub,
};