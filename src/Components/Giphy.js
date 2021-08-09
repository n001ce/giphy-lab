function Giphy(props) {
    return(
        <div className = "giph-result">
        {props.giph.data.map((data, indx) => {
            return (
                <div className="giph-box" key={indx}>
                    <img className="media-img card-img-top card-img-hero" src={data.images.downsized.url} alt="Alt text"></img>
                </div>
                );
        })}
        </div>
    )
}
           
export default Giphy;