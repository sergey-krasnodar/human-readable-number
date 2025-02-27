module.exports = function toReadable (number) {
  let i = number;
  let str = String(number);
  let ltd = str.slice(-2);

  const digit = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
  const teen = ['', '', '', 'thir', 'four', 'fif', 'six', 'seven', 'eigh', 'nine'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (i == 0) return 'zero';
  if (i > 0 && i < 13) return digit[i];
  if (i >= 13 && i < 20) return teen[str[1]] + 'teen';
  if (i >= 20 && i < 100 && str[1] == 0) return tens[str[0]];
  if (i >= 20 && i < 100 && str[1] > 0) return tens[str[0]] + ' ' + digit[str[1]];

  if (i >= 100 && i < 1000 && str[1] == 0 && str[2] == 0) return digit[str[0]] + ' hundred';

  if (i >= 100 && i < 1000 && ltd >= 0 && ltd < 10) return digit[str[0]] + ' hundred ' + digit[str[2]];

  if (i >= 100 && i < 1000 && ltd >= 10 && ltd < 13) return digit[str[0]] + ' hundred ' + digit[ltd];

  if (i >= 100 && i < 1000 && ltd >= 13 && ltd < 20) return digit[str[0]] + ' hundred ' + teen[str[2]] + 'teen';

  if (i >= 100 && i < 1000 && ltd >= 20 && ltd < 100 && str[2] == 0) return digit[str[0]] + ' hundred ' + tens[str[1]];

  if (i >= 100 && i < 1000 && ltd >= 20 && ltd < 100 && str[2] > 0) return digit[str[0]] + ' hundred ' + tens[str[1]] + ' ' + digit[str[2]];
};
