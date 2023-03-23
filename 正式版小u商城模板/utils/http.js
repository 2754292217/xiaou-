/**
 * 开发环境和线上环境判断
 */
let baseUrl=null
    if(process.env.NODE_ENV === 'development'){
     baseUrl="http://localhost:3000"
    }else{
     baseUrl=" "
}
/* https://api.zhaowei.shop */

// 封装请求
const http=(option)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:baseUrl+option.url,
			method:option.method||"GET",
			data:option.data||{},
			header:option.header||{
				"content-type":"application/x-www-form-urlencoded"
			},
			success:res=>{
				if(res.data.code==200){
					resolve(res.data)
				}
				if(res.data.code==500){
					reject("网络错误")
				}if(res.data.code==403){
					reject("请重新登录")
				}
			},
			fail:err=>{
				reject("网络异常")
			}
		})
	})
}

export {
	http,
	baseUrl
}