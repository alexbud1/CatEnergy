const FirstCat = () => {
    return ( 
        <div className="fit">
            <div className="image_title">
                <img className="cat_img" src={require('../assets/cat_back.png')} />
                <h1 className="cat_title">СХУДНЕННЯ</h1>
            </div>
            <p className="cat_text">
                Ваш кіт важить більше собаки і майже втратив здатність повзати по деревам? Час дієти! Car Energy Slim допоможе вашому домашньому улюбленцю скинути зайву вагу.
            </p>
            <div className="line_mobile"></div>
            <p className="catalog">
                КАТАЛОГ SLIM
            </p>
        </div>
    );
}
 
export default FirstCat;