let homeImg = `${process.env.PUBLIC_URL}/assets/home.png`;

export const Home = () => {
    return (
        <div style={{
            width:'100%',
            height:'100%'
        }}>
            <img style={{
                width:'100%',
                height:'100%' 
            }} src={homeImg} />            
        </div>
    )
}