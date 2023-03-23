import {baseUrl} from '@/utils/http.js'
const error=(title="网络发生异常",icon="error")=>{
	uni.showToast({
		title:title,
		icon:icon
	})
} 
//处理图片路径
const imgurl=(data)=>{
	data.forEach(item=>{
		if(item.img.indexOf(baseUrl)==-1){
			item.img=baseUrl+item.img
		}
	})
	return data
}

const showloading=()=>{
	uni.showLoading({
		title:"加载中"
	})
}
const hideloading=()=>{
	uni.hideLoading()
}

const checkLogin=()=>{
	let token=uni.getStorageSync("token")||""
	let user=uni.getStorageSync("user")||null
	if(!token||!user){
		error("请先登录","none")
		goLogin()
		return false
	}else{
		return token
	}	
}

const goLogin=()=>{
	setTimeout(()=>{
		// #ifdef MP-WEIXIN
		uni.navigateTo({
			url:"../login/login"
		})
		// #endif
		// #ifndef MP-WEIXIN
		uni.navigateTo({
			url:"../textlogin/textlogin"
		})
		// #endif
	},1000)
}

export default{
	error,
	imgurl,
	showloading,
	hideloading,
	checkLogin,
	goLogin
}