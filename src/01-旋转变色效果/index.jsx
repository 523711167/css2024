import React from 'react'
import './index.css'

/**
 * 绘制20个左上角原点的方块，然后每个方块旋转不同角度，控制原点的收缩达到效果
 * @Author pxx
 * @DATA 2023/9/5 21:46
 */
function Index() {
	return (
		<div>
			<section>
				<div className="loader">
					<span onClick={() => {}} style={{ '--i': 1 }}></span>
					<span style={{ '--i': 2 }}></span>
					<span style={{ '--i': 3 }}></span>
					<span style={{ '--i': 4 }}></span>
					<span style={{ '--i': 5 }}></span>
					<span style={{ '--i': 6 }}></span>
					<span style={{ '--i': 7 }}></span>
					<span style={{ '--i': 8 }}></span>
					<span style={{ '--i': 9 }}></span>
					<span style={{ '--i': 10 }}></span>
					<span style={{ '--i': 11 }}></span>
					<span style={{ '--i': 12 }}></span>
					<span style={{ '--i': 13 }}></span>
					<span style={{ '--i': 14 }}></span>
					<span style={{ '--i': 15 }}></span>
					<span style={{ '--i': 16 }}></span>
					<span style={{ '--i': 17 }}></span>
					<span style={{ '--i': 18 }}></span>
					<span style={{ '--i': 19 }}></span>
					<span style={{ '--i': 20 }}></span>
				</div>
			</section>
		</div>
	)
}

export default Index
