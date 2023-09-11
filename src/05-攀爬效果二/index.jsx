import React from 'react'
import './index.css'

/**
 * 没有领悟
 * @Author pxx
 * @DATA 2023/9/7 17:45
 */
function Index() {
	return (
		<>
			<div className="loader">
				<div style={{ '--i': 0 }}></div>
				<div style={{ '--i': 1 }}></div>
				<div style={{ '--i': 2 }}></div>
				<div style={{ '--i': 3 }}></div>
				<div style={{ '--i': 4 }}></div>
			</div>
		</>
	)
}

export default Index
