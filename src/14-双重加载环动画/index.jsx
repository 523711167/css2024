import React from 'react'
import './index.css'
/**
 * 双重加载环动画效果
 * 1.主要是小球的位置布局值得学习，骚东西
 * @Author pxx
 * @DATA 2023/9/22 15:34
 */
function Index() {
	return (
		<>
      <div className='loader'>
        <div className='face face1'>
          <div className='circle'>

          </div>
        </div>
        <div className='face face2'>
          <div className='circle'>

          </div>
        </div>
      </div>
		</>
	)
}

export default Index