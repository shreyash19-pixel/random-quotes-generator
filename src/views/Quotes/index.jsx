import React, {useEffect, useState} from 'react'
import { Author, AuthorWrap, Container, GetQuotesBtn, GetQuotesBtnWrap, Quote, QuoteWrap, QuotesWrapper, ShowQuotesWrapper, Wrapper } from '../../styles/Quotes'
import axios from 'axios'

const Quotes = () => {

    const [quotes, setQuotes] = useState('')
    const [currentQuote, setCurrentQuote] = useState('')

    useEffect(() => {
        const fetchQuotes = async () => {
            try
            {
                const response = await axios.get('https://type.fit/api/quotes')
                if(!response.ok)
                {   
                    console.log("Response was not ok")
                }

                const quote = response.data
                setQuotes(quote)
            }
            catch(error)
            {
                console.log(error.message)
            }
        }

        fetchQuotes()
       
    },[])

    const handleQuotes = () => {

        const randomQuote = Math.floor(Math.random() * quotes.length)
        setCurrentQuote(quotes[randomQuote])
    }

    
  return (
    <Container>
        <Wrapper>
            <QuotesWrapper>
                <ShowQuotesWrapper>
                    <QuoteWrap>
                        {quotes.length > 0 ?
                        (<Quote>
                            {currentQuote.text}
                        </Quote>) 
                        :
                        (
                            <Quote>
                                
                            </Quote>
                        )
                        }
                        </QuoteWrap>
                        <AuthorWrap>
                            {currentQuote ?
                            (<Author>
                                { '- ' + currentQuote.author}
                            </Author>
                            )
                            :
                            (
                                <Author>
                                    
                                </Author>
                            )
                            }
                        </AuthorWrap>
                </ShowQuotesWrapper>
                <GetQuotesBtnWrap>
                    <GetQuotesBtn onClick = {handleQuotes}>
                        Get Quote
                    </GetQuotesBtn>
                </GetQuotesBtnWrap>
            </QuotesWrapper>
        </Wrapper>
    </Container>
  )
}

export default Quotes