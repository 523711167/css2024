import React from 'react'
import './index.css'

/**
 * 蛇形边框动画
 * 1 box-shadow不是占用高度的，骚东西
 * 2 没啥好说的，多张图片拼接而成的效果
 * @Author pxx
 * @DATA 2023/9/18 22:09
 */
function Index() {
	return (
		<>
			<div className="square">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</>
	)
}

export default Index
