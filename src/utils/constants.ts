// Conditions:
//      + name:
//          - only latin characters;
//          - special characters allowed: " ", ".", ",", "'", "-";
//      + email:
//          - only latin characters;
//          - all special characters allowed;
//          - only one "@";
//      + password:
//          - only latin characters;
//          - at least 8 characters;
//          - at least 1 uppercase character;
//          - at least 1 lowercase character;
//          - at least 1 punctuation character;

export const RegularExpressions = {
    name: /^[a-z ,.'-]+$/i,
    email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g,
    password: /^(?=^.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*\W+).*$/g,
    phone: /^\+([0-9\s\-]{7,})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/,
}