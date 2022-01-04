function convert(number) {
  const decimal_base_values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roman_base_values = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  let result = "";

  for (let i = 0; i < decimal_base_values.length && number !== 0; i++) {
    if (number % decimal_base_values[i] === 0 || number > decimal_base_values[i]) {
      const quotient = Math.floor(number / decimal_base_values[i]);

      result += roman_base_values[i].repeat(quotient);

      number -= decimal_base_values[i] * quotient;
    }
  }

  console.log(result);
}

convert(3549); // MMMDXLIX
