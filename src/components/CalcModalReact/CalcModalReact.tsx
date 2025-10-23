import { useMemo, useState, type FC } from "react";
import '../CalcModal/CalcModal.scss';
import { priceData } from '../../assets/priceCards';
import CalcModalProgressReact from "./CalcModalProgressReact";
import PriceCardReact from "../PriceCardReact/PriceCardReact";

const CalcModalReact: FC = () => {
    const [progressValue, setProgressValue] = useState({
        maus: 0,
        builds: 0,
        mins: 0
    });
    const {maus, builds, mins} = progressValue;

    const currentPlan = useMemo(() => {
        if (maus > 50000 || builds > 225 || mins > 1000) {
            return 'enterprise'
        } else if (maus > 3000 || builds > 45 || mins > 350) {
            return 'production'
        } else if (maus > 1000 || builds > 30 || mins > 60) {
            return 'starter'
        } else {
            return 'free'
        }

    }, [maus, builds, mins])


    return (
        <div className="calculator_window disable">
            <div className="calculator_header">
                <div className="calculator_header_left_elements">
                    <img src='/icons/calculator.svg' alt="calculator icon" />
                    <span>Usage plan calculator</span>
                </div>
                <button className="calculator_close_btn">
                    <img src='/icons/cross.svg' alt="cross" />
                </button>
            </div>
            <div className="calculator_main">
                <div className="calculator_main_left_elements">
                    <div className="calculator_progress_wrapper">
                        <CalcModalProgressReact
                            setProgressValue={setProgressValue}
                            title="Monthly Active Users"
                            unitType="MAUs"
                        />
                        <CalcModalProgressReact
                            setProgressValue={setProgressValue}
                            title="Builds"
                            unitType="builds"
                        />
                        <CalcModalProgressReact
                            setProgressValue={setProgressValue}
                            title="Workflows CI/CD minutes"
                            unitType="mins"
                        />
                    </div>
                    <div className="calculator_text_wrapper">
                        <p>Expecting over 1,000,000 MAU? <span>Contact us</span> for a more accurate estimate</p>
                        <div className="calculator_info">
                            <span>*</span>
                            <p>Your bill may vary from the estimated extra usage based on your specific
                                usage. Estimates are based on average MAU, build, and CI/CD minute costs.
                                Extra usage is charged when exceeding the resource allotment included in the
                                subscription plan.</p>
                        </div>
                    </div>
                </div>
                <section className="calculator_main_right_elements">
                    {
                        priceData.map((priceCard, index) => {
                            if (priceCard.title.toLowerCase() === currentPlan) {
                                return <PriceCardReact 
                                    title={priceCard.title}
                                    price={priceCard.price}
                                    info={priceCard.info}
                                    options={priceCard.options}
                                    key={index}
                                />
                            }
                        })
                    }
                </section>
            </div>
        </div>
    )
}

export default CalcModalReact;