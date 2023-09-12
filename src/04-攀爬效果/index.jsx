import React from 'react'
import './index.css'

/**
 * 攀爬效果原理
 * 1.固定右下角旋转
 * 2.同时向后移动旋转抵消带来的位移
 * @Author pxx
 * @DATA 2023/9/7 17:45
 */
function Index() {
	return (
		<>
			<div className='container'>
				<div className='box'>
					<div className='cube'></div>
				</div>
			</div>
		</>
	)
}

export default Index
