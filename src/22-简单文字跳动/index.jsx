import React from 'react'
import './index.css'

/**
 * 简单文字跳动
 * 1.由transform和margin-left和delay可以实现呼吸波浪效果
 * @Author pxx
 * @DATA 2023/9/30 19:44
 */
function Index() {
	return (
		<>
			<div className="container loader">
				<span>L</span>
				<span>O</span>
				<span>A</span>
				<span>D</span>
				<span>I</span>
				<span>N</span>
				<span>G</span>
			</div>
		</>
	)
}

export default Index