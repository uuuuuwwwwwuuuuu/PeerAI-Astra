import type { FC } from 'react';
import s from './Modal.module.scss';
import RegForm from '../Forms/RegForm/RegForm';

const Modal: FC = () => {
    return (
        <>
            <aside className={s.aside}>
                <div className={s.left_side}>
                    <h2>Butlerapp</h2>
                    <RegForm />
                    <p>
                        By creating an account, you agree to our <span>Terms and Conditions</span>.
                    </p>
                </div>
                <div className={s.sides_separator}></div>
                <div className={s.right_side}>
                    <div></div>
                </div>
            </aside>
            <div className={s.blur}></div>
        </>
    )
}

export default Modal;