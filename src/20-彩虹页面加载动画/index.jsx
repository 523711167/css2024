import React from 'react'
import './index.css'
/**
 * 彩虹页面加载动画
 * 1.通过border和radius设置圆
 * 2.通过absolute元素没有宽度骚操作
 * @Author pxx
 * @DATA 2023/9/29 18:57
 */
function Index() {
	return (
		<>
      <div className='center'>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
		</>
	)
}

export default Index