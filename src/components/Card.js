import React from 'react'

const Card = (props) => {
    const { title, description, btnText, image } = props.card
    return (
        <div className='card'>
            <div className='detailbox'>
                <div className='mr-8' style={{position:"relative",height:"100%"}}>
                    <h2 className='title'>{title}</h2>
                    <div className='imgboxmobile'><img className='image' src={image} alt="" /></div>
                    <div className='desc'>{description}</div>
                    <div className='btn'>{btnText} <span className='material-icons-outlined'>east</span></div>
                </div>

            </div>
            <div className='imgbox'><img className='image' src={image} alt="" /></div>
        </div>
    )
}

export default Card