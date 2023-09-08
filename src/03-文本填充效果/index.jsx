import React from 'react'
import './index.css'

/**
 * 文本填充效果原理
 * 1.文字和底色相同，设置文字描边样式
 * 2.::before尾类覆盖文字，通过设置宽度达到部分覆盖的效果
 * @Author pxx
 * @DATA 2023/9/7 17:45
 */
function Index() {
	return (
		<>
		<h2 data-text="Creative...">Creative...</h2>
		</>
	)
}

export default Index
