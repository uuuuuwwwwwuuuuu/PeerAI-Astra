import type { FC } from 'react';
import s from './RegForm.module.scss';

const RegForm: FC = () => {
    return (
        <form className={s.form} action="">
            <div className={s.form_header}>
                <span>Create Account</span>
                <span>Let’s Create account for enter into Website.</span>
            </div>
            <div className={s.reg_container}>
                <div className={s.buttons_wrapper}>
                    <button>
                        <img src="/icons/google.svg" alt="" />
                        <span>Google</span>
                    </button>
                    <button>
                        <img src="/icons/microsoft.svg" alt="microsoft logo" />
                        <span>Microsoft</span>
                    </button>
                </div>
                <div className={s.separator_wrapper}>
                    <div></div>
                    <span>Or</span>
                    <div></div>
                </div>
                <div className={s.input_wrapper}>
                    <label htmlFor="enter_email">Email</label>
                    <input type="email" id='enter_email' placeholder='Enter your email' />
                </div>
                <button className={s.submit_button}>
                    <span>Free test now</span>
                    <img src="/icons/arrow_right.svg" alt="arrow svg" />
                </button>
            </div>
        </form>
    );
};

export default RegForm;
