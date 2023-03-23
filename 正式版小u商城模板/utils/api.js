// 封装网络请求
import {http} from "@/utils/http.js"
const gitlist=()=>{
	return http({
		url:"/api/getcate"
	})
}
const gitbanner=()=>{
	return http({
		url:"/api/getbanner"
	})
}
const currentChange=()=>{
	return http({
		url:"/api/gethortgoods"
	})
}
const gitgoodlist=(data)=>{
	return http({
		url:"/api/getgoodlist",
		data
	})
}
const wxlogin=(data)=>{
	return http({
		url:"/api/wxlogin",
		method:"POST",
		data
	})
}
// 商品详情
const desc=(data)=>{
	return http(
	{
		url:"/api/getgoodsinfo",
		data
	}
	)
}

export default{
	gitlist,
	gitbanner,
	currentChange,
	gitgoodlist,
	wxlogin,
	desc
}