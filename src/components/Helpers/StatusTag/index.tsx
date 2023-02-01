import "./style.scss"

interface statusProp{
    text:string
}

export const StatusTag = ({text}:statusProp) =>{
    return(
        <div className={`status-container ${text}`}>
            {text}
        </div>
    )
}

