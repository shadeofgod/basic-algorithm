let str = `最新付费栏目推荐：
[a]【八折】点击兑换最新付费栏目[coupon]hash值[/coupon][/a]
[a]【288元】点击免费领取最新付费栏目[gift]hash值[/gift][/a]
折扣期：7月1日至7月31日
活动详情：[a]夏季特卖[link]https://sspai.com/post/34123 [/link][/a]
赞助商：[a]什么值得买[link]https://www.smzdm.com [/link][/a]`

const reg = /\[a\](.+)(\[(\w+)\](.+)\[\/\w+\])\[\/a\]/gi

str = str.replace(reg, (match, $1, $2, $3, $4) => {
  console.log('1:' + match);
  console.log('2:' + $1);
  console.log('3:' + $2);
  console.log('4:' + $3);
  console.log('5:' + $4);

  if ($3 === 'link') {
    return `<a href=${$4}>${$1}</a>`
  } else {
    return `<a href="https://sspai.com/${$3}/${$4}">${$1}</a>`
  }
})

console.log(str)