/**
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
 * 
 * convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
 * convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
 * convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
 * convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.
 * convertHTML("Shindler's List") should return Shindler&​apos;s List.
 * convertHTML("<>") should return &​lt;&​gt;.
 * convertHTML("abc") should return abc.
 */


// TODO 太丑陋需要优化
function convertHTML(str) {
  // &colon;&rpar;
  if (typeof str !== 'string') {
    throw new Error('the input should be a string');
  }
  str = str.replace(/\&/gi, '&​amp;');
  str = str.replace(/\</gi, '&​lt;');
  str = str.replace(/\>/gi, '&​gt;');
  str = str.replace(/\'/gi, '&​apos;');
  str = str.replace(/\"/gi, '&​quot;');

  return str;
}

convertHTML("Dolce & Gabbana");
