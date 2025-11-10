import '../styles/hero.css'

function Hero() {
console.log(window.innerHeight);
console.log(window.innerWidth);

return (
<section className='hero-container'>
    <div className='hero border-shadow'>
        <img className='hero__image border-shadow' src="airsofter.jpg" alt="Image of airsofter" />
        <div className='hero__text-group text-center'>
            <h1 className='text-group__title text-underlined'>Fast paced, high-octane and all action</h1>
            <h3 className='text-group__description'>Come play at Action Airsoft and see what awaits your next adventure!</h3>
        </div>
    </div>
</section>
)}

export default Hero