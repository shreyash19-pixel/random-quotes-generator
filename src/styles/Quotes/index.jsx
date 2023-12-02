import styled from 'styled-components'


export const Container = styled.div`
    width: 100%;
    height: 100dvh;
    height: 100vh;
    background-color: #AFD5E8;
`

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-inline: 15px;
`

export const QuotesWrapper = styled.div`
    width: 100%;
    max-width: 350px;
    min-height: 340px;
    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 40px 20px;
    border-radius: 4px;
    box-shadow: 3px 3px 20px 3px grey;
`

export const ShowQuotesWrapper = styled.div`
    width: 100%;
    min-height: 200px;
    border:  1px solid #DCE7ED;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 3px 3px 20px 3px lightblue;
`

export const QuoteWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 12px 15px;
`

export const Quote = styled.p`
    font-size: 18px;
`

export const AuthorWrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 12px 15px;

`
export const Author = styled.h3`
    color: #582B78;
`

export const GetQuotesBtnWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-inline: 10px;
`

export const GetQuotesBtn = styled.div`
    padding: 12px 30px;
    text-align: center;
    color: white;
    background-color: #191D3C;
    border-radius: 5px;
    cursor: pointer;
`