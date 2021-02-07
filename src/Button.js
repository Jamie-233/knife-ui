import React from 'react'
import styled from 'styled-components'

// tagged template literals 语法 给模版字符串传递参数 
// 优点: 随机class命名避免类名重复
// 可以通过给 styled components 传值 从而定义可变样式
// 定义可复用的样式 跟SASS/Less中的 Minxins 类似

const StyleButton = styled.div`
    width: ${({ width }) => width || '60px' };
    background-color: ${({ theme }) => theme.primaryColor };
`;

function Button({ width, onClick, label, children }) {
    return (
        <StyleButton width={width} onClick={onClick} >
            <button>{label}</button>
            {children}
        </StyleButton>
    )
}

export default Button