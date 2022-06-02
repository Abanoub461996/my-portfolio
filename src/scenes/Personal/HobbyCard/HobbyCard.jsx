import "./HobbyCard.css";

function HobbyCard({title, src1, src2}){
    return(<>
        <div class="card">
            <div class="card__face card__face--front">
                <img src={require(`./../${src1}`)} alt="" />
            </div>
            <div class="card__face card__face--back">
                <img src={require(`./../${src2}`)} alt="" />
            </div>
            <h3 className="card__title">{title}</h3>
        </div>
    </>)
}

export default HobbyCard;