import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Contanier>
        <Section 
            title='Model S'
            description = 'Order Online for Touchless Delivery'
            backgroundImg = 'model-s.jpg'
            leftBtnText = 'Custom Order'
            RightBtnText = 'Existing Inventory'
        />
        <Section 
            title='Model Y'
            description = 'Order Online for Touchless Delivery'
            backgroundImg = 'model-y.jpg'
            leftBtnText = 'Custom Order'
            RightBtnText = 'Existing Inventory'
        />
        <Section 
            title='Model 3'
            description = 'Order Online for Touchless Delivery'
            backgroundImg = 'model-3.jpg'
            leftBtnText = 'Custom Order'
            RightBtnText = 'Existing Inventory'
        />
        <Section 
            title='Model X'
            description = 'Order Online for Touchless Delivery'
            backgroundImg = 'model-x.jpg'
            leftBtnText = 'Custom Order'
            RightBtnText = 'Existing Inventory'
        />
        <Section 
            title='Low Cost Solar Panel in America'
            description = 'Money-back guarantee'
            backgroundImg = 'solar-panel.jpg'
            leftBtnText = 'Custom Order'
            RightBtnText = 'Learn More'
        />
        <Section 
            title='Solar for New Roofs'
            description = 'Solar Roof Cost Less Than a New Roof Plus Solar Panels'
            backgroundImg = 'solar-roof.jpg'
            leftBtnText = 'Custom Order'
            RightBtnText = 'Learn More'
        />
        <Section 
            title='Accessories'
            description = ''
            backgroundImg = 'accessories.jpg'
            leftBtnText = 'Shop Now'
        />
    </Contanier>
  )
}

export default Home

const Contanier = styled.div`
    height:100vh;
`