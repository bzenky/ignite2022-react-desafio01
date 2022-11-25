import styled from "styled-components";

export const EmptyTaskListContainer = styled.div`
  padding: 64px 24px;
  border-top: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;
`

export const EmptyList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  >strong {
    margin-top: 16px;
  }

  >strong,
  >span {
    color: ${({ theme }) => theme.textDisabled};
    text-align: center;
    line-height: 1.4;
  }
`