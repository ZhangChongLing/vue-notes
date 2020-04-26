import path from './api_path.js';
import axios from './axios.js';
import {formatDate} from './format_date.js';
import validate from './validate.js';

let util = {};
util.path = path;
util.formatDate = formatDate;
util.validate=validate;

/*自定义请求方式*/
//get请求
util.fetchGetObj = function (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: url,
      data: params,
      headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}
    }).then((response) => {
      resolve(response.data);
    });
  });
};

//delete
util.fetchDeleteObj = function (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'delete',
      url: url,
      data: params,
      headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}
    }).then((response) => {
      resolve(response.data);
    });
  });
};

// put请求
util.fetchPutObj = function (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'put',
      url: url,
      data: params,
      headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}
    }).then((response) => {
      resolve(response.data);
    });
  });
};

// Patch请求
util.fetchPatchObj = function (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'patch',
      url: url,
      data: params,
      headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}
    }).then((response) => {
      resolve(response.data);
    });
  });
};

// post请求（json对象提交方法）
util.fetchPostObj = function (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: url,
      data: params,
      headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}
    }).then((response) => {
      resolve(response.data);
    })
  });
};

// 普通表单post提交方法
util.fetchPost = function (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: url,
      data: params,
      headers: {'Accept': 'application/json', 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
      transformRequest:[function(data){
        return Qs.stringify(data)
      }]
    }).then((response) => {
      resolve(response.data);
    });
  });
};

// multipart post 请求
util.fetchPostMultipart = function (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: url,
      data: params,
      headers: {'Accept': 'application/json', 'Content-Type': 'multipart/form-data;boundary='+new Date().getTime()}
    }).then((response) => {
      resolve(response.data);
    })
  });
};

// get方法
util.fetchGet = function (url, param = {}) {
  let params = {
    params: param
  };
  return new Promise((resolve, reject) => {
    axios.get(`${url}?t=${new Date().getTime()}`, params).then(res => {
      // 加上时间戳 消除ie版本浏览器的缓存
      resolve(res.data);
    }).catch((error) => {
      reject(error);
    });
  });
};

util.fetchGetNoT= function (url, param = {}) {
  let params = {
    params: param
  };
  return new Promise((resolve, reject) => {
    axios.get(`${url}?`, params).then(res => {
      // 加上时间戳 消除ie版本浏览器的缓存
      resolve(res.data);
    }).catch((error) => {
      reject(error);
    });
  });
};

//delete
util.fetchDelete = function (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'delete',
      url: url,
      params: params,
      headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}
    }).then((response) => {
      resolve(response.data);
    });
  });
};

//时间戳转换为天时分秒,param为毫秒数
util.formatTime= function formatTime(param){
  let days = parseInt(param / (1000 * 60 * 60 * 24));
  let hours = parseInt((param % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = parseInt((param % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = (param % (1000 * 60)) / 1000;
  let time=days + "天" + hours + "小时" + minutes + "分钟"+ seconds + "秒";
  return time;
};

//时间戳转换为时分秒,param为毫秒数
util.formatMillisecond= function formatTime(param){
  //let days = parseInt(param / (1000 * 60 * 60 * 24));
  let hours = parseInt(param / (1000 * 60 * 60));
  let minutes = parseInt((param % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = parseInt((param % (1000 * 60)) / 1000);
  let time=hours + "时" + minutes + "分"+ seconds+"秒";
  return time;
};

/**
 * 部分替换处理
 * @param str 需要处理的字符串
 * @param start 保留的前几位
 * @param end 保留的后几位
 * @param strReplace 用来替换中间被隐藏的字符串
 * @returns {string}
 */
util.stringReplace=function stringReplace(str,start,end,strReplace) {
  const startPart=str.substring(0, start);
  const endPart=str.substring(str.length - end);
  const result=startPart + strReplace + endPart;
  return result;
};

/**
 * 根据url中参数名获取值
 * @param name 参数名
 * @returns {string}
 */
util.getQueryString=function (name){
  // 获取整个url参数的值的字符串 去掉第一个字符串 按照&分割成一个数组
  let urlParams = location.search.substr(1).split('&');

  for (let i = 0; i < urlParams.length; i++) {
    // search=%E9%9E%8B  =前面参数名 以=分割 如果等号前面的和参数名一样 返回=号后面的参数的值
    if(name == urlParams[i].split('=')[0]){
      // 返回当前参数的值 同时转码
      return decodeURI(urlParams[i].split('=')[1]);
    }
  }
};

/**
 * 获取当前域名+端口号+协议
 */
util.getHttpHost=function (){
  const protocol=window.location.protocol;//协议
  const host=window.location.host;//域名(含端口号)
  let httpHost=protocol+'//'+host;

  //开发环境使用测试服务器的域名作为接口域名
  httpHost=window.location.hostname==='localhost' ? api.apiUrlTest :httpHost;
  return httpHost;
};


//将毫秒数格式化为分秒表示
util.timeForMS=function (time) {
  if(!time) return;
  let remainTimeStr='';

  if(time<0){
    remainTimeStr=0+'分'+0+'秒';
    return remainTimeStr;
  }
  let minutes = parseInt((time / (1000 * 60)));
  let seconds = parseInt((time % (1000 * 60)) / 1000);
  remainTimeStr=minutes+'分'+seconds+'秒';
  return remainTimeStr;
};

export default util;
