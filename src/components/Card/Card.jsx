import styles from './Card.module.css'

function Card(props)
{
    const {Title, Icon, Description} = props;

    return(
        <>
            <div className={`${styles.card} border-shadow text-center`}>
                <h1 className='text-underlined'>{Title}</h1>
                <i className={styles.card__icon}>{Icon}</i>
                <p>{Description}</p>
            </div>  
        </>
    );
}

export default Card