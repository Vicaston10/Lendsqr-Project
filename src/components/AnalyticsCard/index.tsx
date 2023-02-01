import "./style.scss"

interface cardProps{
    img:string;
    title:string;
    totalNumber:string;
    id:string;

}

export const Card = ({img, title, totalNumber, id}:cardProps) =>{


    return(
        <div>
            <div className="card-container">
               <section className={`${id === "2" ? "icon-holder2" : id === "3" ? "icon-holder3" : id === "4" ? "icon-holder4" : "icon-holder" }` }>
                <img src={img} alt="" />
             
               </section>
               <h3>{title}</h3>
               <div className="num-stats">
                <h2>{totalNumber}</h2>
               </div>
            </div>
        </div>
    )
}