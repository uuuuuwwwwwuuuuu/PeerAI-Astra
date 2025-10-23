import type { CSSProperties, FC } from "react";

interface Props {
    title: string
    info: string
    price: number
    options: readonly string[]
}

const PriceCardReact: FC<Props> = ({title, info, price, options}) => {

    const pricePerMonthStyles: CSSProperties = {
        alignItems: price ? 'center' : 'flex-start'
    }

    const extraUsage: CSSProperties = {
        alignSelf: price ? 'center' : 'self-start',
        marginTop: price ? '0px' : '5px'
    }

    return (
        <article className='price_article modal_price' style={{borderRadius: '16px'}}>
            <div className="price_header">
                <h2>{title}</h2>
                <p>{info}</p>
            </div>
            <div className="price_container">
                <div className="price_per_month_container">
                    <div style={pricePerMonthStyles} className="price_per_month" >
                        <span className="price">{`$${price}`}</span>
                        <div style={extraUsage} className="extra_usage" >
                            <span>/month</span>
                            {price ? <span>+extra usage</span> : null}
                        </div>
                    </div>
                    <button className="wide_button">{price ? 'Select Plan' : 'Start for Free'}</button>
                </div>
            </div>
            <div className="price_footer">
                <div className="price_options_wrapper">
                    <span>INCLUDES:</span>
                    <ul className="options_ul">
                        {
                            options.map((optionText, index) => {
                                let iconSrc:string;
                                const lowerOption = optionText.toLowerCase();

                                if (lowerOption.startsWith('low')) {
                                    iconSrc = '/icons/low_priority.svg';
                                } else if (lowerOption.startsWith('high')) {
                                    iconSrc = '/icons/high_priority.svg';
                                } else {
                                    iconSrc = '/icons/check_mark.svg';
                                }

                                return (
                                    <li className="option_li" key={index}>
                                        <img src={iconSrc} alt="unordered icon" />
                                        <span>{optionText}</span>
                                    </li>
                                )
                            })
                        }
                        {
                            !price && <li className="option_li">
                                <img src='/icons/check_mark.svg' alt="unordered icon" />
                                <div>
                                    <span>Access to </span>
                                    <a href="#">
                                        Launch
                                        <img src='/icons/arrow.svg' alt="arrow" />
                                    </a>
                                </div>
                            </li>
                        }
                    </ul>
                </div>
                <div className="price_features">
                    <img src='/icons/download.svg' alt="download icon" />
                    <span>View all features</span>
                </div>
            </div>
        </article>
    )
}

export default PriceCardReact