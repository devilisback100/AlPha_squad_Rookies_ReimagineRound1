import React from 'react'
import './BottomSection.css'
function BottomSection() {
    const BottomSection_Data = [[["https://www.boat-lifestyle.com/cdn/shop/files/Group_334305_small.svg?v=1682336123",
        "https://www.boat-lifestyle.com/cdn/shop/files/Group_334304_small.svg?v=1682336123",
        "https://www.boat-lifestyle.com/cdn/shop/files/Group_334303_small.svg?v=1682336123",
        "https://www.boat-lifestyle.com/cdn/shop/files/Group_334302_small.svg?v=1682336123"], ["1 year Warranty", "7-day Replacement", " Free Shipping", "GST Billing"]], [
        ["https://www.boat-lifestyle.com/cdn/shop/files/shreyas-chronos-new.png?v=1696843687", "For Fitness", "https://www.boat-lifestyle.com/collections/fitness-freak"],
        ["https://www.boat-lifestyle.com/cdn/shop/files/Party_Animal_4.png?v=1685942349", "For Parties", "https://www.boat-lifestyle.com/collections/party-animals"],
        ["https://www.boat-lifestyle.com/cdn/shop/files/Yjaiswal_1.png?v=1717055950", "For Work", "https://www.boat-lifestyle.com/collections/workaholic"],
        ["https://www.boat-lifestyle.com/cdn/shop/files/Audiophile_5.png?v=1696328658", "For Audiophiles", "https://www.boat-lifestyle.com/collections/audiophille"]]]
    return (
        <div className='BottomSection_main'>
            <div className='Title_Text' style={{ top: "-15px", left: "10px" }}>Shop by Lifestyle</div>
            <div className='BottomSection_part_1'>
                <div className='BottomSection_part_1_box_1'>
                    {BottomSection_Data[0][0].map((data,i) => {
                        return <img alt='Icons' src={data} key={i} />
                    })}</div>

                <div className='BottomSection_part_1_box_2'>
                    {BottomSection_Data[0][1].map((data,i) => {
                        return <div className='BottomSection_Text' key={i}>{data}</div>
                    })}</div>


            </div>
            <div className='BottomSection_part_2'>
                
                    {BottomSection_Data[1].map((data,i) => {
                        return <div className='BottomSection_part_2_box' onClick={() => { window.location.href = data[2] }} key={i}>
                        <img alt='Actor_image' src={data[0]} />
                        <div className='BottomSection_Text'>{data[1]}</div>
                        <div  className='BottomSection_Text'  style={{color:"var(--color-3)"}}>View all</div>
                        </div> 
                    })}
               
            </div>
        </div>
    )
}

export default BottomSection
