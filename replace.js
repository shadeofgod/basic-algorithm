let str = `最新付费栏目推荐：
[a]【八折】点击兑换最新付费栏目[coupon]hash[/coupon][/a]
[a]【288元】点击免费领取最新付费栏目[gift]hash[/gift][/a]
折扣期：7月1日至7月31日
活动详情：[a]夏季特卖[link]https://sspai.com/post/34123 [/link][/a]
赞助商：[a]什么值得买[link]https://www.smzdm.com [/link][/a]`


let str2 = `赠送券： [a]赠送Home Chef Bakery[gift]07cb456b3f2bd4d9e863c6d1ffbd22a2[/gift][/a] [a]赠送少数派尊贵会员[gift]ddf75c61b76d09689dddf6188e06789d[/gift][/a] [a]赠送知乎大 V 的成名秘籍[gift]6808e26e05a2cecb466669d27dfa00d6[/gift][/a] 优惠券： [a]优惠五折大减价[coupon]3fc7792510c8b71dcecf1ff37a2c2872[/coupon][/a] [a]优惠少数派尊贵会员[coupon]97cbc631808c381df16d4678bb8b04d1[/coupon][/a]
`
let str3 = '[a]【八折】点击兑换最新付费栏目[coupon]97cbc631808c381df16d4678bb8b04d1[/coupon][/a]'

function msgFilter(str) {
  const reg = /\[a\]([\u3010\u3011\s\w\d\u4e00-\u9fa5]+)\[(\w+)\](.*?)\[\/\w+\]\[\/a\]/gi;

  console.log(reg.test(str3))
  str = str.replace(reg, (match, $1, $2, $3) => {
    return $2 === 'link' ? `<a href="${$3}">${$1}</a>` : `<a href="https://sspai.com/${$2}/${$3}">${$1}</a>`
  });
  str = str.replace(/\n/g, '<br />');
  return str;
}
console.log(msgFilter(str))