import React from 'react';
import styled from 'styled-components';

// tagged template literals 语法 给模版字符串传递参数 
// 控制台查看 都是随机的避免 class命名的冲突
// 可以通过给 styled components 传递属性 定义可变的样式

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

export default Button;