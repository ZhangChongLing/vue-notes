/*校验规则*/
//import {Message} from 'view-design'

let validate = {};

// 校验小数点位数（小数点前面最多4位数字，小数点后面最多2位数字），非必填
validate.validateDecimalsTwo = (rule, value, callback) => {
  let reg = /^\d{1,4}(\.\d{1,2})?$/;
  if (value && !reg.test(value)) {
    callback(new Error('整数最多4位且小数最多2位'));
  } else {
    callback();
  }
};

// 长度不能大于50个字符，非必填
validate.validateLengthFifty = (rule, value, callback) => {
  if (value && value.length > 300) {
    return callback(new Error('不能超过300个字符'));
  } else {
    callback();
  }
};

//校验开始时间和结束时间，开始时间必须小于结束时间
validate.startTimeAndEndTime = function(startTime, endTime){
  if(!startTime&&!endTime) return true;

  if(startTime&&!endTime){//开始时间存在，结束时间不存在
    Message.error({background:true,content:'结束时间不能为空'});
    return false;
  }
  if(!startTime&&endTime){//开始时间不存在，结束时间存在
    Message.error({background:true,content:'开始时间不能为空'});
    return false;
  }
  if(!startTime||!endTime){//开始时间和结束时间都不存在，结束校验
    return false;
  }
  if(!(startTime<endTime)){
    Message.error({background:true,content:'开始时间应小于结束时间'});
    return false;
  }
  return true;
};

/*判断输入的车牌号是否正确  */
validate.isCarNumberAvailable=function (str) {
  const myreg=/^(([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]))$/;

  /*
  1.传统车牌：([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))
    第1位为省份简称（汉字），第二位为发牌机关代号（A-Z的字母）第3到第7位为序号（由字母或数字组成，但不存在字母I和O，防止和数字1、0混淆，另外最后一位可能是“挂学警港澳使领”中的一个汉字）。
  2.新能源车牌：([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领])
    第1位和第2位与传统车牌一致，第3到第8位为序号（比传统车牌多一位）。新能源车牌的序号规则如下：
    小型车：第1位只能是字母D或F，第2为可以是数字或字母，第3到6位必须是数字。
    大型车：第1位到第5位必须是数字，第6位只能是字母D或F。
    测试举例：
    正确的车牌：川A123AB、川A2222学、川AF12345、川A12345D。
    错误的车牌：川A123456、川A2222i、川AA12345、川AD123456。
   3.特殊车牌：未定义
    */

  return myreg.test(str);

};

//非负数校验，非必填
validate.validateNonnegativeNumber = (rule, value, callback) => {
  let reg = /^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/;
  if (value && !reg.test(value)) {
    callback(new Error('不能为负数'));
  } else {
    callback();
  }
};

//非负整数校验，非必填
validate.validateNonnegativeInteger = (rule, value, callback) => {
  let reg = /^\d+$/;
  if (value && !reg.test(value)) {
    callback(new Error('请输入非负整数'));
  } else {
    callback();
  }
};

//校验英文字符和数字
validate.validateAlphanumeric = (rule, value, callback) => {
  let reg = /^[0-9a-zA-Z]+$/;
  if (value && !reg.test(value)) {
    callback(new Error('仅限英文字母或数字组成'));
  } else {
    callback();
  }
};

//校验中英文数字
validate.validateChineseAndEnglish = (rule, value, callback) => {
  let reg = /^[\u4e00-\u9fa5a-zA-Z0-9]+$/;
  if (value && !reg.test(value)) {
    callback(new Error('仅限中文、英文字母、数字组成'));
  } else {
    callback();
  }
};

// 经度： -180.0～+180.0（整数部分为0～180，必须输入6位小数）
validate.validateLongitude = (rule, value, callback) => {
  let reg = /^-?(180(\.0{2,6})?|(1[0-7][0-9]|[1-9]?[0-9])(\.[0-9]{2,6}))$/;
  if (value&&!reg.test(value)) {
    callback(new Error('经度非法（精确到2-6位小数）'));
  } else {
    callback();
  }
};
// 纬度： -90.0～+90.0（整数部分为0～90，必须输入6位小数）
validate.validateLatitude = (rule, value, callback) => {
  let reg = /^-?(90(\.0{2,6})?|[1-8]?[0-9](\.[0-9]{2,6})?)$/;
  if (value&&!reg.test(value)) {
    callback(new Error('纬度非法（精确到2-6位小数）'));
  } else {
    callback();
  }
};

//校验日期时间不能为空
validate.validateDateTime = (rule, value, callback) => {
  if (!value) {
    callback(new Error('不能为空'));
  } else {
    callback();
  }
};


export default validate;
