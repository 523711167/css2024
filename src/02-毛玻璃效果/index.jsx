import React from 'react'
import './index.css'

/**
 * 毛玻璃效果思路
 * 1.给背景色设置透明度
 * 2.backdrop-filter:blur属性，模糊背景图
 * 3.再给border添加边界
 * @Author pxx
 * @DATA 2023/9/7 17:45
 */
function Index() {
	return (
		<>
			<div className="container">
				<div className="loader one">
					<span></span>
					<span></span>
				</div>
				<div className="loader two">
					<span></span>
					<span></span>
				</div>
			</div>
		</>
	)
}

export default Index
