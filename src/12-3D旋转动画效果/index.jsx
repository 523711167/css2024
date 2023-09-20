import React from 'react'
import './index.css'

/**
 * 3D旋转效果 有点抽象不太好理解
 * 1. transform-style: preserve-3d;这个元素的效果貌似
 * 只有影响当前的元素，子元素无效
 * 2. 比较抽象不太好理解
 * @Author pxx
 * @DATA 2023/9/20 21:50
 */
function Index() {
	return (
		<>
			<div className="box">
				<div>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		</>
	)
}

export default Index
