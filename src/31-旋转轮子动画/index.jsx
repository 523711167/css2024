import React from 'react'
import './index.css'
/**
 * 旋转轮子动画
 * 1.border看来不可以套娃
 * 2.两个div，其中一个缩小实现的
 * @Author pxx
 * @DATA 2023/10/14 11:06
 */
function Index() {
	return (
		<>
      <ul className='circle1'>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <ul className='circle2'>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
		</>
	)
}

export default Index