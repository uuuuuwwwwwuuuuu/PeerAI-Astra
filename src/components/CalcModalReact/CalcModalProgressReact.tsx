import { useCallback, useMemo, useState, type ChangeEvent, type Dispatch, type FC, type SetStateAction } from "react";
import './calcModalProgressReact.scss';

type unitTypes = 'MAUs' | 'builds' | 'mins';

interface Props {
    title: string,
    unitType: unitTypes,
    setProgressValue: Dispatch<SetStateAction<{
        maus: number;
        builds: number;
        mins: number;
    }>>
}

const CalcModalProgressReact: FC<Props> = ({title, unitType, setProgressValue}) => {
    const [value, setValue] = useState(0);

    const progressParams: {maxValue: number, exponentC: number} = useMemo(() => {
        switch(unitType) {
            case 'MAUs':
                return {
                    maxValue: 1000000,
                    exponentC: 13
                };
            case 'builds':
                return {
                    maxValue: 1500,
                    exponentC: 5
                };
            case 'mins':
                return {
                    maxValue: 3000,
                    exponentC: 3
                };
        }
    }, [unitType]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const linearValue = parseInt(event.target.value);
        const exponentialValue = Math.exp(linearValue / progressParams.maxValue * progressParams.exponentC) - 1;
        const scaledValue = Math.round((exponentialValue / (Math.exp(progressParams.exponentC) - 1)) * progressParams.maxValue);
        
        setValue(scaledValue);
        setProgressValue(prevProps => {
            switch(unitType) {
                case 'MAUs':
                    return {
                        ...prevProps, maus: scaledValue
                    }
                case 'builds':
                    return {
                        ...prevProps, builds: scaledValue
                    }
                case 'mins':
                    return {
                        ...prevProps, mins: scaledValue
                    }
            }
        })
    }

    const getLinearValue = useCallback((expValue: number) => {
        const normalized = expValue / progressParams.maxValue;
        const expNormalized = normalized * (Math.exp(progressParams.exponentC) - 1) + 1;
        return Math.log(expNormalized) / progressParams.exponentC * progressParams.maxValue;
    }, [progressParams])

    const convertedValue = useMemo(() => {
        if (value >= 1000000) {
            return value.toString()[0] + 'M'
        } else if (value >= 100000) {
            return value.toString().substring(0, 3) + 'K'
        } else if (value >= 10000) {
            return value.toString().substring(0, 2) + 'K'
        } else if (value >= 1000) {
            return value.toString()[0] + 'K'
        }
        return value;
    }, [value]);



    return (
        <div className="progress_wrapper">
            <div className="progress_info_line">
                <span className="progress_title">{title}</span>
                <span className="progress_value">
                    {convertedValue} {unitType}
                </span>
            </div>
            <input
                type="range"
                min={0}
                max={progressParams.maxValue}
                id="radius"
                onChange={handleChange}
                value={getLinearValue(value)}
            />
        </div>
    )
}

export default CalcModalProgressReact;