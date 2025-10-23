import type { CSSProperties, FC } from 'react';
import type { PriceCard } from '../../assets/data/priceCards';
import styles from './PriceCard.module.scss';

const PriceCardReact: FC<PriceCard> = ({ title, info, price, options }) => {
    const pricePerMonthStyles: CSSProperties = {
        alignItems: price ? 'center' : 'flex-start',
    };

    const extraUsage: CSSProperties = {
        alignSelf: price ? 'center' : 'self-start',
        marginTop: price ? '0px' : '5px',
    };

    return (
        <article
            className={`${styles.price_article} ${styles.modal_price}`}
            style={{ borderRadius: '16px' }}
        >
            <div className={styles.price_header}>
                <h2>{title}</h2>
                <p>{info}</p>
            </div>
            <div className={styles.price_container}>
                <div className={styles.price_per_month_container}>
                    <div style={pricePerMonthStyles} className={styles.price_per_month}>
                        <span className={styles.price}>{`$${price}`}</span>
                        <div style={extraUsage} className={styles.extra_usage}>
                            <span>/month</span>
                            {price ? <span>+extra usage</span> : null}
                        </div>
                    </div>
                    <button className={styles.wide_button}>
                        {price ? 'Select Plan' : 'Start for Free'}
                    </button>
                </div>
            </div>
            <div className={styles.price_footer}>
                <div className={styles.price_options_wrapper}>
                    <span>INCLUDES:</span>
                    <ul className={styles.options_ul}>
                        {options.map((option, index) => {
                            let iconSrc: string = option.iconSrc ?? '/icons/check_mark.svg';

                            return (
                                <li className={styles.option_li} key={index}>
                                    <img src={iconSrc} alt="unordered icon" />
                                    <span>{option.title}</span>
                                </li>
                            );
                        })}
                        {!price && (
                            <li className={styles.option_li}>
                                <img src="/icons/check_mark.svg" alt="unordered icon" />
                                <div>
                                    <span>Access to </span>
                                    <a href="#">
                                        Launch
                                        <img src="/icons/arrow.svg" alt="arrow" />
                                    </a>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
                <div className={styles.price_features}>
                    <img src="/icons/download.svg" alt="download icon" />
                    <span>View all features</span>
                </div>
            </div>
        </article>
    );
};

export default PriceCardReact;
