import "./styles.scss"

interface btnProps {
    btnType: string;
    type: 'button' | 'submit' | 'reset';

}
export const Button = ({ type, btnType, ...props }: btnProps) => {
    return (
        <button type={type!} className={`btn-container ${btnType}`} {...props}>Reset</button>
    )
}